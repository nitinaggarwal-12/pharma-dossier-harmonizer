import os
import xml.etree.ElementTree as ET
import json
import glob

# Namespace for SPL XML
ns = {'v3': 'urn:hl7-org:v3'}

results = []
# Find all XML files in the sample directory
files = glob.glob('data/seed/animal/sample/*.xml')

for f in files:
    try:
        tree = ET.parse(f)
        root = tree.getroot()
        
        # Find title
        title_elem = root.find('v3:title', ns)
        title = title_elem.text.strip() if title_elem is not None else "Unknown Title"
        
        # Find product name
        prod_name = "Unknown Product"
        prod_elem = root.find('.//v3:manufacturedProduct/v3:name', ns)
        if prod_elem is not None and prod_elem.text:
            prod_name = prod_elem.text.strip()
        elif title != "Unknown Title":
            prod_name = title
            
        # Find ingredients
        ingredients = []
        ing_elems = root.findall('.//v3:ingredientSubstance/v3:name', ns)
        for ing in ing_elems:
            if ing.text:
                ingredients.append(ing.text.strip())
                
        results.append({
            "file": os.path.basename(f),
            "product_name": prod_name,
            "ingredients": list(set(ingredients)), # deduplicate
            "title": title,
            "module": "Module 3", # Mocking module for UI
            "status": "Completed",
            "date": "May 20, 2025" # Mocking date
        })
    except Exception as e:
        print(f"Error parsing {f}: {e}")

# Save to JSON
output_path = 'data/seed/samples.json'
with open(output_path, 'w') as jf:
    json.dump(results, jf, indent=2)

print(f"Saved {len(results)} results to {output_path}")
