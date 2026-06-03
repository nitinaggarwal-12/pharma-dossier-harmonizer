import os
import sys
import re
import zipfile
import subprocess
import urllib.request
import urllib.error
import json
from datetime import datetime

FOLDER_ID = "1SJDr_3T3ROJ-rEb2sXFwfYf3w9IN15xz"
CODEBASE_DIR = "/Users/nitinagga/Documents/pharma-dossier-ge"
ZIP_PATH = "/Users/nitinagga/Documents/pharma-dossier-ge/scratch/pharma_dossier_harmonizer_codebase.zip"

EXCLUDED_DIRS = {".venv", "node_modules", ".next", ".git", "__pycache__", ".vector_cache"}
EXCLUDED_FILES = {".DS_Store", "pharma_dossier_harmonizer_codebase.zip"}

def zip_codebase():
    print(f"Starting codebase packaging to ZIP at: {ZIP_PATH}")
    count = 0
    with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(CODEBASE_DIR):
            dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]
            for file in files:
                if file in EXCLUDED_FILES or file.endswith('.zip'):
                    continue
                full_path = os.path.join(root, file)
                if os.path.getsize(full_path) > 20 * 1024 * 1024:
                    print(f"Skipping heavy file: {file} ({os.path.getsize(full_path) / (1024*1024):.2f} MB)")
                    continue
                rel_path = os.path.relpath(full_path, CODEBASE_DIR)
                zipf.write(full_path, rel_path)
                count += 1
    print(f"✓ Successfully created ZIP file ({os.path.getsize(ZIP_PATH) / (1024*1024):.2f} MB, {count} files packaged)")

def get_gcloud_access_token():
    print("Fetching active gcloud OAuth access token...")
    try:
        # Invokes the highly-privileged user token directly from gcloud CLI config bypasses ADC quota projects!
        token = subprocess.check_output(
            ["gcloud", "auth", "print-access-token"],
            text=True
        ).strip()
        return token
    except Exception as e:
        print(f"Failed to fetch gcloud access token: {e}")
        print("Please make sure you are logged in with 'gcloud auth login' in your terminal.")
        return None

def upload_to_drive():
    access_token = get_gcloud_access_token()
    if not access_token:
        return
        
    if not os.path.exists(ZIP_PATH):
        print(f"Error: ZIP file not found at {ZIP_PATH}")
        return
        
    print(f"Uploading ZIP to Google Drive Folder ID: {FOLDER_ID} via direct HTTP multipart upload...")
    
    file_name = f"pharma_dossier_harmonizer_codebase_{datetime.now().strftime('%Y%m%d_%H%M%S')}.zip"
    
    with open(ZIP_PATH, 'rb') as f:
        zip_bytes = f.read()
        
    # Construct standard multipart/related request body
    boundary = b"multipart_boundary_pharma_dossier_upload"
    
    metadata = {
        'name': file_name,
        'parents': [FOLDER_ID]
    }
    
    body = []
    body.append(b"--" + boundary)
    body.append(b"Content-Type: application/json; charset=UTF-8\n")
    body.append(json.dumps(metadata).encode('utf-8'))
    body.append(b"--" + boundary)
    body.append(b"Content-Type: application/zip\n")
    body.append(zip_bytes)
    body.append(b"--" + boundary + b"--\n")
    
    payload = b"\n".join(body)
    
    url = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart"
    
    req = urllib.request.Request(url, data=payload, method='POST')
    req.add_header('Authorization', f'Bearer {access_token}')
    req.add_header('Content-Type', f'multipart/related; boundary={boundary.decode("utf-8")}')
    req.add_header('Content-Length', str(len(payload)))
    
    try:
        print("Sending HTTP request to Google Drive API (this may take a few seconds)...")
        with urllib.request.urlopen(req) as response:
            res_body = response.read().decode('utf-8')
            res_data = json.loads(res_body)
            
            print("\n🎉 SUCCESS! Your codebase has been successfully uploaded to your Google Drive folder!")
            print(f"File ID: {res_data.get('id')}")
            print(f"View File Link: https://drive.google.com/open?id={res_data.get('id')}")
            
            # Clean up local ZIP
            if os.path.exists(ZIP_PATH):
                os.remove(ZIP_PATH)
                print("Temporary local ZIP file cleaned up.")
                
    except urllib.error.HTTPError as e:
        print(f"\nHTTP Upload failed with status code: {e.code}")
        print(f"Error Response: {e.read().decode('utf-8')}")
    except Exception as e:
        print(f"\nUpload failed: {e}")

if __name__ == "__main__":
    zip_codebase()
    upload_to_drive()
