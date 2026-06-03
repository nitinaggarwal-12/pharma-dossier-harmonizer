# --- START VERTEX AI ADK APP NAME PATCH ---
try:
    import vertexai.agent_engines.templates.adk as adk_template
    original_init = adk_template.AdkApp.__init__

    def patched_init(self, *args, **kwargs):
        # Force a valid app name that starts with a letter to bypass pydantic validation crash
        if not kwargs.get("app_name"):
            kwargs["app_name"] = "pharma_dossier_harmonizer"
        original_init(self, *args, **kwargs)

    adk_template.AdkApp.__init__ = patched_init
    print("Successfully patched AdkApp.__init__ with valid app_name!")
except Exception as patch_err:
    print(f"Failed to patch AdkApp: {patch_err}")
# --- END VERTEX AI ADK APP NAME PATCH ---

from google.adk.agents import LlmAgent, ParallelAgent
from google.adk.tools.agent_tool import AgentTool
from vertexai.agent_engines import AdkApp

from .tools import (
    extract_dossier_text,
    retrieve_regulatory_guidelines,
    compare_dossier_versions,
    search_labels,
    generate_ectd_shell,
    query_excel_criteria,
    query_guideline_pdf,
    verify_ectd_packages,
)

from .schemas import HarmonizerResult


MODEL = "gemini-2.5-flash"


# Define individual agents with descriptions
dossier_ingestion_agent = LlmAgent(
    name="DossierIngestionAgent",
    model=MODEL,
    description="Extracts facts from dossier content.",
    instruction="""Extract facts from dossier content.
    
    CRITICAL MULTIMODAL DIRECTIVE: If the user has attached or uploaded a PDF file directly in the chat window, you can read the text and contents of the PDF directly from your multimodal conversational context. You only need to call the `extract_dossier_text` tool if the user explicitly provides an external GCS URI (starting with `gs://`) or staged file path string.
    
    CRITICAL SAFETY GUARDRAIL: First, validate if the parsed text indeed belongs to a pharmaceutical dossier, prescribing label, or clinical trial manual. 
    If the document is unrelated (e.g., an invoice, receipt, resume, billing statement, or generic letter), you MUST explicitly reject it and inform the user: 
    "Ingestion failed: The uploaded document is not a valid pharmaceutical dossier or regulatory manual." 
    Do NOT map or hallucinate mock drug facts (like Droncit or Praziquantel) for unrelated files!""",
    tools=[extract_dossier_text],
    output_key="dossier_facts",
)

regulatory_retrieval_agent = LlmAgent(
    name="RegulatoryRetrievalAgent",
    model=MODEL,
    description="Retrieves general pharmaceutical guidelines such as ICH M4 granularity specifications.",
    instruction="Retrieve controlled regulatory guidelines.",
    tools=[retrieve_regulatory_guidelines],
    output_key="regulatory_references",
)

delta_agent = LlmAgent(
    name="DeltaAnalysisAgent",
    model=MODEL,
    description="Compares old and new dossier versions.",
    instruction="Compare old and new dossier versions.",
    tools=[compare_dossier_versions],
    output_key="delta_analysis",
)

label_harmonizer_agent = LlmAgent(
    name="LabelHarmonizerAgent",
    model=MODEL,
    description="Compares labeling content across sources.",
    instruction="Compare labeling content across sources.",
    tools=[search_labels],
    output_key="label_harmonization",
)

parallel_analysis_stage = ParallelAgent(
    name="ParallelRegulatoryAnalysisStage",
    sub_agents=[
        regulatory_retrieval_agent,
        delta_agent,
        label_harmonizer_agent,
    ],
)

compliance_agent = LlmAgent(
    name="ComplianceAgent",
    model=MODEL,
    description="Checks specific technical validation criteria, error codes, spreadsheet rules, and requirements for eCTD dossier compliance.",
    instruction="""You are a strict Technical compliance specialist. 
Your task is to scan validation criteria rules and guidelines to answer compliance questions.

CRITICAL SAFETY DIRECTIVE: Whenever the user asks to check, scan, or look up validation rules, criteria, Excel sheets, or spreadsheets (e.g., referencing 'Rule 1.2' or 'Rule 1.1'), you MUST invoke the `query_excel_criteria` tool, passing the extracted rule number or keyword (e.g., '1.2') as the query argument. Do NOT tell the user you cannot access their local Excel files; always call the tool instead!

When using `query_excel_criteria` or `query_guideline_pdf`, you MUST NOT pass in the entire question string or long phrases.
Instead, you must parse the user request and extract **exactly 1 or 2 singular targeted keywords** (e.g., `"1.1"`, `"DTD"`, `"filename"`, `"folder"`) and pass ONLY those values as the query parameter!
Create compliance traffic lights based on findings.""",
    tools=[query_excel_criteria, query_guideline_pdf, verify_ectd_packages],
    output_key="compliance_assessment",
)

ectd_shell_agent = LlmAgent(
    name="EctdShellAgent",
    model=MODEL,
    description="Drafts an eCTD-style shell.",
    instruction="Draft an eCTD-style shell.",
    tools=[generate_ectd_shell],
    output_key="ectd_shell",
)

final_reviewer_agent = LlmAgent(
    name="FinalReviewerAgent",
    model=MODEL,
    description="Produces the final Regulatory Affairs report.",
    instruction="Produce the final Regulatory Affairs report.",
    output_schema=HarmonizerResult,
    output_key="final_report",
)


# Define the root conversational agent (Coordinator)
coordinator = LlmAgent(
    name="Coordinator",
    model=MODEL,
    description="Main interface for Pharma Dossier Harmonizer. Routes requests to specialized agents.",
    instruction="""You are the main interface for the Pharma Dossier Harmonizer.
Be conversational, helpful, and professional.

When a user asks for a specific task (like analyzing a dossier, comparing versions, checking labels, or drafting a shell), delegate to the appropriate sub-agent using your tools.

### ⚙️ Mandatory Tool-Routing Directives:
1.  **Ingesting Dossier Files**: Whenever the user uploads or attaches a PDF file directly in the chat, delegate to the `DossierIngestionAgent`. The agent will read the file natively from the multimodal conversational context on the fly. You only invoke the `DossierIngestionAgent` tool (`extract_dossier_text`) if the user explicitly provides an external `gs://` URI string or staged file path! You are strictly FORBIDDEN from falling back to pre-trained default drug templates (like Droncit) under any circumstances for attachments!
2.  **eCTD Validation / Package Checks**: Whenever the user asks to check, scan, or validate their submission dossier folders, naming compliance, or directories layout in GCS, you MUST delegate to `ComplianceAgent` and command it to invoke the `verify_ectd_packages` tool. Explain the final pass/fail status of the staged GCS folders directly to the user!
3.  **Guidelines Auditing vs. Version Comparisons**: 
    - If the user asks to compare their dossier against **official regulatory guidelines or static manuals** (like `M4Q_R1_Guideline.pdf` or `Validation_eCTD.pdf`), you MUST delegate to `ComplianceAgent` and command it to use the `query_guideline_pdf` tool. These static reference manuals are **already pre-parsed and indexed**, so you must query them semantically rather than using raw text comparisons!
    - Only delegate to `DeltaAnalysisAgent` if the user is explicitly comparing two different *drafts or versions* of their own dossiers (e.g. Draft 1 vs Draft 2).

### Interactive Execution Features:
1.  **Session Memory Management**: Track progress status across multiple interaction turns (e.g., what product dossiers have been ingested, what gaps were calculated). Ensure multi-turn conversation integrity.
2.  **Dynamic Follow-up Suggested Queries**:
    Always append a distinct markdown section titled `### Suggested Next Steps` containing exactly 2-3 tailored logical prompt options to guide the user.
    - Example: If facts were just extracted, recommend:
        *   *Assess this dossier for regional validation criteria gaps.*
        *   *Generate an initial framework outline for submission Module 3.*
""",
    tools=[
        AgentTool(agent=dossier_ingestion_agent),
        AgentTool(agent=regulatory_retrieval_agent),
        AgentTool(agent=delta_agent),
        AgentTool(agent=label_harmonizer_agent),
        AgentTool(agent=compliance_agent),
        AgentTool(agent=ectd_shell_agent),
        AgentTool(agent=final_reviewer_agent),
    ]
)

# Name the object root_agent as expected by ADK
root_agent = coordinator
