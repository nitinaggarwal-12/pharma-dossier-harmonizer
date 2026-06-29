# Register in Gemini Enterprise

Gemini Enterprise admins can register ADK agents hosted on Vertex AI Agent Engine so they appear in the Gemini Enterprise web app.

## Prerequisites
- Discovery Engine Admin role
- Discovery Engine API enabled
- An existing Gemini Enterprise app
- An ADK agent already hosted on Agent Engine

## Steps
1. Deploy ADK agent to Agent Engine.
2. Open Google Cloud Console.
3. Go to Gemini Enterprise / Agent management.
4. Register custom ADK agent.
5. Provide:
   - Project ID
   - Location
   - Agent Engine resource ID: projects/638420508320/locations/us-central1/reasoningEngines/1583712909148553216

   - Display name: Pharma Dossier Harmonizer
   - Description: Regulatory dossier harmonization, compliance, delta analysis, and eCTD drafting assistant
6. Assign visibility to the right user groups:
   - Regulatory Affairs
   - Quality Assurance
   - Labeling
   - Admins

## How users invoke it in Gemini Enterprise
Example prompts:
- Analyze this Module 3 dossier for ICH M4Q compliance gaps.
- Compare this new supplement with the prior submission and summarize changes with regulatory impact.
- Check whether the US label and EU label have inconsistent safety warnings.
- Generate an eCTD Module 3 shell and mark all missing fields as Data Gap.
