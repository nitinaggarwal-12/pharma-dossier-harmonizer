import sqlite3
import csv
import os

db_path = 'data/seed/drugsatfda.db'
txt_path = 'data/seed/drugsatfda/Products.txt'

# Connect to SQLite
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create table
cursor.execute("""
CREATE TABLE IF NOT EXISTS products (
    ApplNo TEXT,
    ProductNo TEXT,
    Form TEXT,
    Strength TEXT,
    ReferenceDrug TEXT,
    DrugName TEXT,
    ActiveIngredient TEXT,
    ReferenceStandard TEXT
)
""")

# Load data
try:
    with open(txt_path, 'r', encoding='utf-8', errors='ignore') as f:
        reader = csv.reader(f, delimiter='\t')
        header = next(reader) # Skip header
        
        # Insert in batches
        batch = []
        for row in reader:
            if len(row) == 8:
                batch.append(row)
            if len(batch) >= 1000:
                cursor.executemany("INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)", batch)
                batch = []
                
        if batch:
            cursor.executemany("INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)", batch)
            
    conn.commit()
    print(f"Loaded data into {db_path}")
except Exception as e:
    print(f"Error loading data: {e}")
finally:
    conn.close()
