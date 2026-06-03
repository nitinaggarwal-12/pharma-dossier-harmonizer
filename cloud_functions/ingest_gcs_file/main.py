import os
import io
import json
from datetime import datetime
import functions_framework
from google.cloud import storage
from google.cloud import bigquery
from google.cloud import documentai_v1 as documentai
from pypdf import PdfReader

PROJECT_ID = os.environ.get("GOOGLE_CLOUD_PROJECT", "nitinagga-ge")
LOCATION = "us"
PROCESSOR_ID = "53ff9ab7988c6acf"

@functions_framework.cloud_event
def ingest_gcs_file(cloud_event):
    """
    Background Cloud Function triggered by GCS Object Finalize events.
    Extracts text from the uploaded file (under dossiers/ or specifications/) 
    and stores the results inside the BigQuery database.
    """
    data = cloud_event.data
    bucket_name = data["bucket"]
    blob_name = data["name"]
    
    print(f"New GCS file detected - Bucket: {bucket_name}, Blob: {blob_name}")
    
    # Only process files uploaded under dossiers/ or specifications/ folders
    if not blob_name.startswith(("dossiers/", "specifications/")) or blob_name.endswith("/"):
        print("Skipping file update outside active dossiers/specifications paths.")
        return
        
    try:
        # 1. Download blob bytes in memory
        storage_client = storage.Client(project=PROJECT_ID)
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(blob_name)
        file_content = blob.download_as_bytes()
        
        extracted_text = ""
        method_used = "Plain Text Decode"
        
        # 2. Extract text based on file extension
        if blob_name.strip().lower().endswith(('.md', '.html', '.htm', '.txt')):
            extracted_text = file_content.decode("utf-8", "ignore")
        else:
            # Verify well-formed PDF header signature bytes
            if not file_content.startswith(b"%PDF-"):
                print(f"Upload skipped: Corrupt PDF header signature in {blob_name}.")
                return
                
            # Attempt Document AI text extraction
            try:
                doc_ai_client = documentai.DocumentProcessorServiceClient()
                name = doc_ai_client.processor_path(PROJECT_ID, LOCATION, PROCESSOR_ID)
                
                raw_document = documentai.RawDocument(
                    content=file_content, mime_type="application/pdf"
                )
                request = documentai.ProcessRequest(name=name, raw_document=raw_document)
                result = doc_ai_client.process_document(request=request)
                
                extracted_text = result.document.text or ""
                method_used = "Document AI Ingestion"
            except Exception as doc_ai_err:
                print(f"Document AI failed: {doc_ai_err}. Falling back to pypdf.")
                pdf_file = io.BytesIO(file_content)
                reader = PdfReader(pdf_file)
                text_parts = [page.extract_text() or "" for page in reader.pages]
                extracted_text = "\n".join(text_parts)
                method_used = "Local pypdf Ingestion Fallback"
                
        print(f"Text successfully extracted using: {method_used} ({len(extracted_text)} characters)")
        
        # 3. Store the results in BigQuery
        bq_client = bigquery.Client(project=PROJECT_ID)
        table_ref = bq_client.dataset("dossier_analysis").table("extracted_files")
        
        # Store with full GCS path prefix (e.g., 'dossiers/m3-dp-pharma-dev - working.md')
        rows_to_insert = [{
            "file_name": blob_name,
            "extracted_text": extracted_text,
            "analysis_report": f"Ingested and pre-processed dynamically in the background using {method_used}.",
            "timestamp": datetime.utcnow().isoformat()
        }]
        
        errors = bq_client.insert_rows_json(table_ref, rows_to_insert)
        if errors:
            raise Exception(f"BigQuery insertion failed: {errors}")
            
        print(f"Successfully indexed file in BigQuery: {blob_name}")
        
    except Exception as error:
        print(f"Operational Ingestion Trigger Pipeline Failure: {error}")
