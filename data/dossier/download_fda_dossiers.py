#!/usr/bin/env python3
from __future__ import annotations
import argparse, csv, hashlib, re, time
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

FDA_BASE = "https://www.accessdata.fda.gov"
DAF_BASE = "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm"

PRODUCTS = {
    "keytruda": {
        "appl_no": "125514",
        "company": "BioPharma",
        "terms": ["review", "letter", "chemistry", "medical", "multidiscipline", "multi-discipline", "clinical", "label"],
    },
    "eliquis": {
        "appl_no": "202155",
        "company": "Pfizer/BMS",
        "terms": ["review", "letter", "chemistry", "medical", "multidiscipline", "multi-discipline", "clinical", "label"],
    },
    "humira": {
        "appl_no": "125057",
        "company": "AbbVie",
        "terms": ["review", "letter", "chemistry", "medical", "multidiscipline", "multi-discipline", "clinical", "label"],
    },
}

ALLOWED_HOSTS = {"www.accessdata.fda.gov", "accessdata.fda.gov"}
PDF_RE = re.compile(r"\.pdf(?:$|\?)", re.I)
HTML_RE = re.compile(r"\.(?:cfm|htm|html)(?:$|\?)", re.I)

@dataclass(frozen=True)
class LinkRecord:
    product: str
    source_page: str
    url: str
    text: str

def safe_name(value: str, max_len: int = 120) -> str:
    value = re.sub(r"[^a-zA-Z0-9._-]+", "_", value.strip()).strip("._-")
    return (value[:max_len] or "file").lower()

def is_allowed_url(url: str) -> bool:
    p = urlparse(url)
    return p.scheme in {"https", "http"} and p.netloc.lower() in ALLOWED_HOSTS

def get_session() -> requests.Session:
    s = requests.Session()
    s.headers.update({"User-Agent": "Mozilla/5.0 pharma-dossier-harmonizer-demo/1.0"})
    return s

def fetch_html(session: requests.Session, url: str) -> str:
    r = session.get(url, timeout=45)
    r.raise_for_status()
    return r.text

def iter_links(html: str, base_url: str) -> Iterable[tuple[str, str]]:
    soup = BeautifulSoup(html, "lxml")
    for a in soup.find_all("a", href=True):
        full = urljoin(base_url, a["href"])
        text = " ".join(a.get_text(" ", strip=True).split())
        if is_allowed_url(full):
            yield full, text

def overview_url(appl_no: str) -> str:
    return f"{DAF_BASE}?event=overview.process&ApplNo={appl_no}"

def related_signal(url: str, text: str) -> bool:
    s = f"{url} {text}".lower()
    signals = ["approval history", "letters", "reviews", "related documents", "appletter", "nda/", "bla/", "drugsatfda_docs"]
    return any(x in s for x in signals)

def discover_pages(session: requests.Session, product: str, appl_no: str) -> list[LinkRecord]:
    start = overview_url(appl_no)
    records = [LinkRecord(product, start, start, "overview")]
    try:
        html = fetch_html(session, start)
    except Exception as exc:
        print(f"[WARN] Could not fetch overview {start}: {exc}")
        return records
    for url, text in iter_links(html, start):
        if related_signal(url, text):
            records.append(LinkRecord(product, start, url, text))
    seen, unique = set(), []
    for r in records:
        if r.url not in seen:
            unique.append(r); seen.add(r.url)
    return unique

def discover_pdfs(session: requests.Session, product: str, page_url: str, terms: list[str], max_pages: int = 25) -> list[LinkRecord]:
    todo, visited, pdfs = [page_url], set(), []
    while todo and len(visited) < max_pages:
        page = todo.pop(0)
        if page in visited:
            continue
        visited.add(page)
        try:
            html = fetch_html(session, page)
        except Exception as exc:
            print(f"[WARN] Could not fetch page {page}: {exc}")
            continue
        for url, text in iter_links(html, page):
            s = f"{url} {text}".lower()
            if PDF_RE.search(url) and any(t in s for t in terms):
                pdfs.append(LinkRecord(product, page, url, text))
            elif HTML_RE.search(url) and "drugsatfda_docs" in url.lower() and related_signal(url, text) and url not in visited:
                todo.append(url)
    seen, unique = set(), []
    for r in pdfs:
        if r.url not in seen:
            unique.append(r); seen.add(r.url)
    return unique

def download(session: requests.Session, url: str, target: Path) -> tuple[bool, str, int]:
    if target.exists() and target.stat().st_size > 0:
        return True, "exists", target.stat().st_size
    try:
        with session.get(url, stream=True, timeout=180) as r:
            r.raise_for_status()
            ctype = r.headers.get("content-type", "").lower()
            if "pdf" not in ctype and not PDF_RE.search(url):
                return False, f"not_pdf:{ctype}", 0
            tmp = target.with_suffix(target.suffix + ".tmp")
            n = 0
            with tmp.open("wb") as f:
                for chunk in r.iter_content(262144):
                    if chunk:
                        f.write(chunk); n += len(chunk)
            tmp.rename(target)
            return True, "downloaded", n
    except Exception as exc:
        return False, f"error:{type(exc).__name__}:{exc}", 0

def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1048576), b""):
            h.update(chunk)
    return h.hexdigest()

def write_manifest(path: Path, row: dict) -> None:
    exists = path.exists()
    fields = ["product","company","application_no","source_page","pdf_url","link_text","local_path","status","bytes","sha256"]
    with path.open("a", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        if not exists: w.writeheader()
        w.writerow(row)

def main() -> None:
    ap = argparse.ArgumentParser(description="Download public FDA Drugs@FDA review PDFs for demo dossiers.")
    ap.add_argument("--out", default="data/fda_dossiers")
    ap.add_argument("--products", nargs="*", default=list(PRODUCTS.keys()), choices=list(PRODUCTS.keys()))
    ap.add_argument("--max-pdfs-per-product", type=int, default=75)
    ap.add_argument("--sleep", type=float, default=0.75)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    out = Path(args.out); out.mkdir(parents=True, exist_ok=True)
    manifest = out / "manifest.csv"
    session = get_session()

    for product in args.products:
        cfg = PRODUCTS[product]
        pdir = out / safe_name(product); pdir.mkdir(parents=True, exist_ok=True)
        print(f"\n=== {product.upper()} | ApplNo {cfg['appl_no']} | {cfg['company']} ===")
        pages = discover_pages(session, product, cfg["appl_no"])
        print(f"Candidate pages: {len(pages)}")
        pdfs = []
        for page in pages:
            pdfs.extend(discover_pdfs(session, product, page.url, cfg["terms"]))
        seen, unique = set(), []
        for r in pdfs:
            if r.url not in seen:
                unique.append(r); seen.add(r.url)
        unique = unique[: args.max_pdfs_per_product]
        print(f"Matching PDFs: {len(unique)}")

        if args.dry_run:
            for r in unique:
                print(f"{r.url} | {r.text}")
            continue

        for i, rec in enumerate(tqdm(unique, desc=f"Downloading {product}"), start=1):
            base = safe_name(Path(urlparse(rec.url).path).name or f"{product}_{i}.pdf")
            if not base.endswith(".pdf"): base += ".pdf"
            target = pdir / f"{i:03d}_{base}"
            ok, status, nbytes = download(session, rec.url, target)
            digest = sha256(target) if ok and target.exists() else ""
            write_manifest(manifest, {
                "product": product, "company": cfg["company"], "application_no": cfg["appl_no"],
                "source_page": rec.source_page, "pdf_url": rec.url, "link_text": rec.text,
                "local_path": str(target) if ok else "", "status": status, "bytes": nbytes, "sha256": digest
            })
            time.sleep(args.sleep)

    print(f"\nDone. Output: {out.resolve()}")
    print(f"Manifest: {manifest.resolve()}")

if __name__ == "__main__":
    main()
