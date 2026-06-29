#!/bin/bash
echo "🚀 Starting Google Cloud Function deployment: sync-drive-to-gcs..."
gcloud functions deploy sync-drive-to-gcs \
    --runtime python310 \
    --trigger-http \
    --allow-unauthenticated \
    --source ./cloud_functions/sync_drive_to_gcs \
    --region us-central1 \
    --entry-point sync_drive_file \
    --set-env-vars GOOGLE_CLOUD_PROJECT=nitinagga-ge-2
echo "✅ Cloud Function deployed successfully!"
