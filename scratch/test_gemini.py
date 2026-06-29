import vertexai
from vertexai.generative_models import GenerativeModel

PROJECT_ID = "nitinagga-ge-2"
LOCATION = "us-central1"

try:
    print("Initializing vertexai...")
    vertexai.init(project=PROJECT_ID, location=LOCATION)
    print("Loading model...")
    model = GenerativeModel("gemini-2.5-flash")
    print("Generating content...")
    response = model.generate_content("Hello! Say 'Yes' if you can hear me.")
    print("Response:")
    print(response.text)
except Exception as e:
    print(f"Error occurred: {e}")
