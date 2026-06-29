from google.cloud import bigquery
import os
from datetime import datetime

PROJECT_ID = "nitinagga-ge-2"
DATASET_ID = "dossier_analysis"
TABLE_ID = "extracted_files"

def setup_bq():
    client = bigquery.Client(project=PROJECT_ID)
    
    # 1. Create Dataset
    dataset_ref = client.dataset(DATASET_ID)
    try:
        client.get_dataset(dataset_ref)
        print(f"Dataset {DATASET_ID} already exists.")
    except Exception:
        dataset = bigquery.Dataset(dataset_ref)
        dataset.location = "US"
        dataset = client.create_dataset(dataset)
        print(f"Created dataset {dataset.dataset_id}")
        
    # 2. Create Table
    table_ref = dataset_ref.table(TABLE_ID)
    try:
        client.get_table(table_ref)
        print(f"Table {TABLE_ID} already exists.")
    except Exception:
        schema = [
            bigquery.SchemaField("file_name", "STRING", mode="REQUIRED"),
            bigquery.SchemaField("extracted_text", "STRING", mode="NULLABLE"),
            bigquery.SchemaField("analysis_report", "STRING", mode="NULLABLE"),
            bigquery.SchemaField("timestamp", "TIMESTAMP", mode="REQUIRED"),
        ]
        table = bigquery.Table(table_ref, schema=schema)
        table = client.create_table(table)
        print(f"Created table {table.table_id}")

if __name__ == "__main__":
    setup_bq()
