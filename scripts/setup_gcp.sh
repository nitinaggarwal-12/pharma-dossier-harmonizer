#!/usr/bin/env bash
# Setup GCP project for Pharma Dossier Harmonizer

PROJECT_ID="nitinagga-ge"

gcloud config set project "$PROJECT_ID"

# Enable required services
gcloud services enable \
  aiplatform.googleapis.com \
  cloudresourcemanager.googleapis.com \
  discoveryengine.googleapis.com \
  documentai.googleapis.com \
  bigquery.googleapis.com

echo "GCP services enabled successfully."
