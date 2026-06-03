# 📋 Pharma Dossier Harmonizer - Validation Testing Suite

This document provides a comprehensive, step-by-step test suite for validating the unblocked **Pharma Dossier Harmonizer** multi-agent RAG engine conversationally inside the **Gemini Enterprise Plus UI** and locally on **localhost:3000**.

---

## 📂 Active Staged Test Files Inventory

### **Staged Dossiers (Source Files)**
* `m3-dp-pharma-dev - working.md` (Plain text Module 3 Drug Product Draft)
* `m3-device-dmf.md` (Plain text Drug Master File excipients & warning labels)
* `m3-dp-pharma-dev.md.pdf` (Double-extended plaintext dossier file)
* `125057Orig1s425ltr.pdf` (Regional regulatory submission draft)

### **Reference Specifications (Target Guidelines)**
* `M4Q_R1_Guideline.pdf` (ICH Scientific Quality & Stability Standards)
* `Validation_eCTD_v4_0_v1_5.pdf` (ICH Technical Directory & Naming Validation)
* `eCTD 3.2.2 - EU M1 Implementation Guide v3.1.1.pdf` (EU Regional folder administrative guide)

---

## 🧪 Conversational Test Scenarios & Expected Answers

### **Test 1: eCTD Dynamic Directory Scan & Inventory**
> [!NOTE]
> **Goal:** Verify GCS dynamic folder scanning, filename casing/space validation, and dynamic files listing bypass unblocker.

* **User Query:**
  ```text
  Use your verify_ectd_packages tool to scan GCS and list all dossiers and specifications files so I can choose.
  ```
* **Expected Agent Response:**
  * **Traffic Light Status:** `🔴 Non-Compliant` (or `🔴 Failed`).
  * **Compliance Gaps:** `Found 33 invalid filenames` due to incorrect casing (camelCase XML schemas like `COCT_MT150007UV.xsd`) or spaces (`eCTD 3.2.2 - EU M1 Validation Criteria v8.2.xlsx`). Missing regional sub-paths: `fda` and `m1-util-dtd`.
  * **🟢 Successfully Scanned Files List:** Displays a beautifully grouped or bulleted list of the 46 GCS files including `m3-dp-pharma-dev - working.md`, `M4Q_R1_Guideline.pdf`, `Validation_eCTD_v4_0_v1_5.pdf`, etc.

---

### **Test 2: Accelerated Stability Specifications Gap Audit**
> [!IMPORTANT]
> **Goal:** Verify dynamic semantic RAG vector cache searches, forced degradation checks, and exact page citations in `M4Q_R1_Guideline.pdf`.

* **User Query:**
  ```text
  Compare my draft dossier m3-dp-pharma-dev - working.md against the M4Q_R1_Guideline.pdf specifications, and tell me if it includes the required forced degradation studies and potency limits under Module 3.2.S. Cite the exact page numbers.
  ```
* **Expected Agent Response:**
  * **Stability Gap Identified:** The draft dossier `m3-dp-pharma-dev - working.md` only lists a high-level stability summary and conclusions but **lacks the required raw tabulated accelerated stability study results**.
  * **ICH Standard Citation:** Under **`M4Q_R1_Guideline.pdf` Page 17 (Section 3.2.S.7.1)**, forced degradation studies under stress conditions must be fully summarized with raw tabulated stability potency data.
  * ** CC Citation:** Tabulated summary of results from 3.2.P.8.3 must also be included under **Page 9**.

---

### **Test 3: CCDS Safety Warning Labels Search & Impurities**
> [!TIP]
> **Goal:** Verify conversational `LabelHarmonizerAgent` product name parsing and CCDS prescribing warnings retrieval.

* **User Query:**
  ```text
  Search the CCDS safety warning labels for Adalimumab under Module 3.
  ```
* **Expected Agent Response:**
  * **CCDS Warnings Found:** Adalimumab active prescribing safety warning labels must include prominent boxed warnings for **Serious Infections (tuberculosis, bacterial sepsis, invasive fungal infections)** and **Malignancies (lymphoma and other cancers in children/adolescents)**.
  * **Dossier Comparison:** Staged dossier `m3-device-dmf.md` correctly lists the active ingredient `Praziquantel` but lacks the specific EU regional administrative prescribing guides.

---

### **Test 4: Technical Folder Structure Gaps Audit**
> [!CAUTION]
> **Goal:** Verify GCS-wide technical folder layout audits against the eCTD standards.

* **User Query:**
  ```text
  Audit the file naming conventions and folder layout of my staged GCS dossiers against the Validation_eCTD_v4_0_v1_5.pdf standards, and list the exact compliance gaps.
  ```
* **Expected Agent Response:**
  * **Technical Audit Fail:** GCS dossiers package structure violates technical folder standards.
  * **Filename Gaps:** Identifies specific casing issues in GCS schemas (e.g. `NarrativeBlock.xsd` and `Genericode.zip`).
  * **Structural Gaps:** Confirms the missing `m1/fda` and `m1/eu/util/dtd` administrative sub-paths.

---

## 🛠️ Localhost Web UI Verification Guide (`http://localhost:3000`)

1. **Symmetrical Fallback Verification:** Verify that the `SELECT SOURCE DOSSIER` dropdown strictly shows only dossiers (`m3-dp-pharma-dev - working.md`, `m3-device-dmf.md`, `125057Orig1s425ltr.pdf`) and **never** displays guideline specifications.
2. **Dynamic Folder Tree:** Click the **`⚡ Run eCTD Validation`** button on the bottom right. Verify that the folder tree populates instantly, highlighting the missing `fda` and `m1-util-dtd` regional folders in bold red.
3. **Zero-Latency Chat:** Send the stability validation question in the localhost chat bar. Verify that the answer is returned **instantly in under 1.2 seconds** with real vector cache hits printed in your FastAPI terminal logs!
