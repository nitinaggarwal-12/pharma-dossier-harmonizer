#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="nitinagga-ge"
LOCATION="us-central1"
DISPLAY_NAME="Pharma Dossier Harmonizer"

gcloud config set project "$PROJECT_ID"

# gcloud services enable \
#   aiplatform.googleapis.com \
#   cloudresourcemanager.googleapis.com

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

"$ROOT_DIR/.venv/bin/adk" deploy agent_engine \
  --project="$PROJECT_ID" \
  --region="$LOCATION" \
  --display_name="$DISPLAY_NAME" \
  "$ROOT_DIR/pharma_agent"

