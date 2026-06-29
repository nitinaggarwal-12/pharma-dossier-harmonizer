import os
import json
from google.cloud import storage
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload
import google.auth
import io
import functions_framework

PROJECT_ID = os.environ.get("GOOGLE_CLOUD_PROJECT", "nitinagga-ge-2")
TARGET_BUCKET = "pharma-dossiers-nitinagga-ge-2"

@functions_framework.http
def sync_drive_file(request):
    """
    HTTP Cloud Function that triggers on Google Drive webhook notifications.
    Downloads the modified file from Drive and uploads it to GCS.
    """
    # 1. Extract headers and resource information from Google Drive Push Webhook
    file_id = request.headers.get('X-Goog-Resource-ID')
    resource_state = request.headers.get('X-Goog-Resource-State')
    
    print(f"Drive sync event received - File ID: {file_id}, State: {resource_state}")
    
    if not file_id or resource_state == 'trash':
        return "No actionable file updates detected.", 200
        
    try:
        # 2. Authenticate using Cloud Function Default Service Account credentials
        credentials, _ = google.auth.default(
            scopes=['https://www.googleapis.com/auth/drive.readonly']
        )
        drive_service = build('drive', 'v3', credentials=credentials)
        
        # 3. Retrieve file metadata to get the exact filename
        file_metadata = drive_service.files().get(
            fileId=file_id, 
            fields='name, mimeType'
        ).execute()
        
        filename = file_metadata.get('name')
        mime_type = file_metadata.get('mimeType')
        
        print(f"Target file resolved: {filename} (MimeType: {mime_type})")
        
        # Only process PDF dossier files
        if mime_type != 'application/pdf':
            print("Skipping non-PDF file change event.")
            return "File skipped (Non-PDF).", 200
            
        # 4. Download the file bytes from Google Drive in memory
        file_request = drive_service.files().get_media(fileId=file_id)
        file_stream = io.BytesIO()
        downloader = MediaIoBaseDownload(file_stream, file_request)
        
        done = False
        while not done:
            status, done = downloader.next_chunk()
            print(f"Downloading file bytes from Drive: {int(status.progress() * 100)}% complete")
            
        pdf_bytes = file_stream.getvalue()
        
        # 5. Upload and stage the file bytes directly inside our GCS bucket
        storage_client = storage.Client(project=PROJECT_ID)
        bucket = storage_client.bucket(TARGET_BUCKET)
        blob = bucket.blob(f"pharma_agent/user_files/{filename}")
        blob.upload_from_string(pdf_bytes, content_type="application/pdf")
        
        print(f"Successfully synced attached file to GCS: gs://{TARGET_BUCKET}/pharma_agent/user_files/{filename}")
        return f"Sync successful for {filename}", 200
        
    except Exception as error:
        print(f"Sync trigger pipeline failed: {error}")
        return f"Operational Sync Failure: {error}", 500
