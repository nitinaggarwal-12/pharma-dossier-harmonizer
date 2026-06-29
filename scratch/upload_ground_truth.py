import os
from google.cloud import storage

PROJECT_ID = "nitinagga-ge-2"
BUCKET_NAME = "pharma-dossiers-nitinagga-ge-2"
GROUND_TRUTH_DIR = "/Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth"

def upload_files():
    client = storage.Client(project=PROJECT_ID)
    bucket = client.bucket(BUCKET_NAME)

    files = [f for f in os.listdir(GROUND_TRUTH_DIR) if os.path.isfile(os.path.join(GROUND_TRUTH_DIR, f))]
    for filename in files:
        if filename.startswith('.'):
            continue
        
        file_path = os.path.join(GROUND_TRUTH_DIR, filename)
        
        # Determine GCS destination path
        if filename.startswith(('m3-', '125057')):
            # Upload as dossier
            dest_paths = [f"dossiers/{filename}", f"pharma_agent/user_files/{filename}"]
        else:
            # Upload as specification
            dest_paths = [f"specifications/{filename}"]
            
        for dest in dest_paths:
            blob = bucket.blob(dest)
            
            # Content types
            content_type = "application/pdf"
            if filename.endswith('.md'):
                content_type = "text/markdown"
            elif filename.endswith(('.html', '.htm')):
                content_type = "text/html"
            elif filename.endswith('.xlsx'):
                content_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            elif filename.endswith('.xsd'):
                content_type = "text/xml"
            elif filename.endswith('.zip'):
                content_type = "application/zip"
            
            blob.upload_from_filename(file_path, content_type=content_type)
            print(f"Uploaded {filename} to gs://{BUCKET_NAME}/{dest}")

    # Also upload vector cache files
    cache_dir = os.path.join(GROUND_TRUTH_DIR, '.vector_cache')
    if os.path.exists(cache_dir):
        cache_files = [f for f in os.listdir(cache_dir) if os.path.isfile(os.path.join(cache_dir, f))]
        for filename in cache_files:
            if filename.startswith('.'):
                continue
            file_path = os.path.join(cache_dir, filename)
            dest = f"specifications/.vector_cache/{filename}"
            blob = bucket.blob(dest)
            blob.upload_from_filename(file_path, content_type="application/json")
            print(f"Uploaded cache {filename} to gs://{BUCKET_NAME}/{dest}")

if __name__ == "__main__":
    upload_files()
