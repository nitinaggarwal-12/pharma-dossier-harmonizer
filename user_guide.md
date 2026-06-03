# 📖 Pharma Dossier Harmonizer — End-to-End User Guide

Welcome to the **Pharma Dossier Harmonizer** End-to-End User Guide. This system is a multi-agent regulatory compliance engine designed to validate, audit, and harmonize pharmaceutical regulatory dossiers against international standards (ICH, FDA, EMA). 

This guide details exactly **where files are located**, **how to run the local stack (`localhost:3000`)**, and **how to interact with the Gemini Enterprise Agent** conversing natively or via the web interface.

---

## 📁 Active Files Inventory & Locations

All dossier files and target specification guidelines are pre-staged in the local workspace repository under the following directory:
📂 **`pharma_agent/ground_truth/`** ([ground_truth directory](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/))

### 1. Staged Dossiers (Source Files to be Audited)
*   **`m3-dp-pharma-dev - working.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-dp-pharma-dev%20-%20working.md)): Plaintext Module 3 Drug Product draft containing high-level stability summaries but lacking raw tabulated data.
*   **`m3-device-dmf.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-device-dmf.md)): Plaintext Drug Master File specifying active excipients and safety labeling details.
*   **`m3-dp-pharma-dev.md.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-dp-pharma-dev.md.pdf)): Double-extended plaintext dossier in PDF format for OCR stress-testing.
*   **`125057Orig1s425ltr.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/125057Orig1s425ltr.pdf)): An authentic regional FDA regulatory submission draft containing complex clinical potency tables.
*   **`m3-ds-stability.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-stability.md)): Staged drug substance stability validation guidelines.
*   **`m3-ds-manufacture.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-manufacture.md)): Staged drug substance manufacturing and synthesis procedures.
*   **`m3-ds-characterization.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-characterization.md)): Staged drug substance elucidation of structure and impurities.
*   **`m3-ds-control.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-control.md)): Staged specification controls for drug substances.
*   **`m3-ds-general.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-general.md)): Staged general nomenclature and physical properties.
*   **`m3-ds-container.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-container.md)): Staged container closure system details.
*   **`m3-ds-reference-standards.md`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/m3-ds-reference-standards.md)): Staged reference standards and materials sections.

### 2. Reference Specifications (Target Compliance Guidelines)
*   **`M4Q_R1_Guideline.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/M4Q_R1_Guideline.pdf)): The official **ICH Scientific Quality & Stability Standards** containing mandatory potencies and forced degradation thresholds.
*   **`Validation_eCTD_v4_0_v1_5.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/Validation_eCTD_v4_0_v1_5.pdf)): The **ICH Technical Directory** outlining strict folder layout schemes, schema validations, and casing laws.
*   **`eCTD 3.2.2 - EU M1 Implementation Guide v3.1.1.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/eCTD%203.2.2%20-%20EU%20M1%20Implementation%20Guide%20v3.1.1.pdf)): The administrative folder mapping guide for European regional submissions.
*   **`eCTD 3.2.2 - EU M1 Validation Criteria v8.2.xlsx`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/eCTD%203.2.2%20-%20EU%20M1%20Validation%20Criteria%20v8.2.xlsx)): Excel spreadsheet documenting strict technical error codes (e.g., Rule 1.1, 1.2).
*   **`eCTD_Specification_v3_2_2_0.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/eCTD_Specification_v3_2_2_0.pdf)): Official specification for the eCTD file format version 3.2.2.
*   **`ICH_eCTDv4_0_ImplementationGuide_v1_6_2024_0522.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/ICH_eCTDv4_0_ImplementationGuide_v1_6_2024_0522.pdf)): The official eCTD v4.0 implementation guide for electronic submission structure.
*   **`ICH_eCTDv4_0_CV_v6_2025_0212.xlsx`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/ICH_eCTDv4_0_CV_v6_2025_0212.xlsx)): Excel sheet mapping standard Controlled Vocabularies (CV) for eCTD submissions.
*   **`ReadMe_eCTD v4_0_CV_Package_v1.0_2025_0212.pdf`** ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/ReadMe_eCTD%20v4_0_CV_Package_v1.0_2025_0212.pdf)): Official guide explaining CV codes packaging.

### 3. eCTD Validation Technical XML Schemas & HL7 Standards
These files define physical file structure and envelope schema constraints during technical folder audits:
*   **XML Casing Schemas** (`.xsd` files):
    *   `COCT_MT150007UV.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT150007UV.xsd))
    *   `COCT_MT150000UV02.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT150000UV02.xsd))
    *   `COCT_MT150003UV03.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT150003UV03.xsd))
    *   `COCT_MT030203UV07.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT030203UV07.xsd))
    *   `COCT_MT040203UV09.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT040203UV09.xsd))
    *   `COCT_MT070000UV01.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT070000UV01.xsd))
    *   `COCT_MT090100UV01.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT090100UV01.xsd))
    *   `COCT_MT090108UV.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT090108UV.xsd))
    *   `COCT_MT090300UV01.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT090300UV01.xsd))
    *   `COCT_MT090303UV01.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT090303UV01.xsd))
    *   `COCT_MT710000UV07.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT710000UV07.xsd))
    *   `COCT_MT960000UV05.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/pharma_agent/ground_truth/COCT_MT960000UV05.xsd))
*   **HL7 & Schema Specifications**:
    *   `hl7-r2_datatypes.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/hl7-r2_datatypes.xsd)): Standards for HL7 structure mapping.
    *   `NarrativeBlock.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/NarrativeBlock.xsd)): XML definition mapping text narrative schemas.
    *   `Genericode.zip` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/Genericode.zip)): Controlled codelists.
    *   `datatypes-rX-cs.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/datatypes-rX-cs.xsd))
    *   `infrastructureRoot-r2.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/infrastructureRoot-r2.xsd))
    *   `voc-r2.xsd` ([view file](file:///Users/nitinagga/Documents/pharma-dossier-ge/voc-r2.xsd))

---

## 💻 Localhost Web UI User Guide (`http://localhost:3000`)

The local stack provides a premium, reactive web dashboard designed for regulatory reviewers.

### 🚀 Step-by-Step Startup Procedure
1.  **Start the FastAPI Backend Server (Port 8002):**
    ```bash
    uvicorn app.main:app --host 0.0.0.0 --port 8002
    ```
2.  **Start the Next.js Frontend Server (Port 3000):**
    Inside the `frontend/` directory:
    ```bash
    npm run dev
    ```
3.  **Access the UI:** Open your browser and navigate to **`http://localhost:3000`**.

---

### 📊 Core Interface Navigation

```text
+-------------------------------------------------------------------------+
| BioPharma Analytics                                   [Global Search Q] |
+-------------------------------------------------------------------------+
| 📊 Dashboard       |  🟢 ACTIVE KPI SUMMARY                             |
| 📂 Dossiers        |  Total Dossiers: 11 |  Compliant: 50% | Issues: 25%  |
| 🚀 Analysis        |  ------------------------------------------------- |
| 💬 Correspondence  |  [ ⚡ RUN ECTD VALIDATION ]                         |
| ⇄  Delta Analysis  |                                                     |
| 📜 Audit Trail     |  📝 RECENT AUDIT LOGS & TRANSITIONS                 |
| 📚 Reference Lib   |  - Nitin Aggarwal approved Droncit (2h ago)        |
| 🔍 External Res    |  - Gaps found in Numelvi (5h ago)                  |
+---------------------------------------+---------------------------------+
|                                       | 🤖 zero-latency chat            |
|                                       | Agent: Ready to validate.       |
|                                       | [Write prompt here...       ] |
+---------------------------------------+---------------------------------+
```

#### 1. Dashboard Tab (📊)
*   **Visuals:** High-fidelity KPI metrics showing total dossiers, compliance donuts, and recent system operations.
*   **Actions:** Press **`⚡ Run eCTD Validation`** on the top-right to instantly audit the directory structure against physical schema constraints.

#### 2. Dossiers Tab (📂)
*   **Visuals:** A table listing all dossiers currently registered in BigQuery and GCS.
*   **Actions:** Choose a pre-staged file or drag-and-drop a new local PDF to ingest it. Ingestion runs a 15-page segment split using **Google Cloud Document AI** before indexing the text in **BigQuery**.

#### 3. Analysis Tab (🚀)
*   **Visuals:** An interactive quality auditor panel.
*   **Actions:** Select a dossier (e.g., `m3-dp-pharma-dev - working.md`) and click **`Run Analysis`** to view a live typewriter-rendered HTML audit card highlighting scientific stability gaps and potency failures.

#### 4. Correspondence Tab (💬)
*   **Visuals:** Interactive regulatory thread simulator displaying communications from the **FDA** or **EMA** regarding outstanding requests for information (IR) or Refusal-to-File (RTF) actions.

#### 5. Delta Analysis Tab (⇄)
*   **Visuals:** Symmetrical side-by-side file selectors.
*   **Actions:** Choose Dossier A and Dossier B to instantly calculate and render a unified git-style diff comparison in real-time.

#### 6. Interactive Chat Sidebar (🤖)
*   **Visuals:** A conversational assistant panel visible on the right side of all pages.
*   **Actions:** Choose your staged **Source Dossier** and **Target Specification** in the top drop-down selectors, then type conversational questions. The chat sidebar connects to **Vertex AI Gemini 2.5 Flash** natively, dynamically retrieving vector contexts from your selected guidelines in **under 1.2 seconds**!

---

### 🧪 Local Conversational Test Scenarios

#### 📝 Test Scenario 1: ICH Potency & Forced Degradation Stability Gap Audit
*   **Goal:** Verify dynamic vector RAG retrieving accelerated stability requirements.
*   **Setup:** In the chat sidebar drop-down selectors, choose:
    *   **Select Source Dossier:** `m3-dp-pharma-dev - working.md`
    *   **Select Target Specification:** `M4Q_R1_Guideline.pdf`
*   **Prompt to Write:**
    ```text
    Audit my staged dossier for required forced degradation studies and potency limits under Module 3.2.S using the M4Q_R1 guideline. Cite exact page numbers.
    ```
*   **Expected Response:**
    *   **Citations:** Verbatim citation of **`M4Q_R1_Guideline.pdf` Page 17 (Section 3.2.S.7.1)**.
    *   **Audited Gaps:** Identifies that while the dossier lists standard shelf-life conclusions, **it lacks the tabulated raw potency values from accelerated stability testing at 6 months under stress conditions**.

#### 📝 Test Scenario 2: Target Specification Mismatch Interceptor
*   **Goal:** Verify that the agent intercepts mismatching reference guides and guides the user.
*   **Setup:** In the chat sidebar drop-down selectors, choose:
    *   **Select Source Dossier:** `m3-dp-pharma-dev - working.md`
    *   **Select Target Specification:** `Validation_eCTD_v4_0_v1_5.pdf` *(An IT technical directory guide)*
*   **Prompt to Write:**
    ```text
    Does my dossier include the required accelerated stability potency data under Module 3.2.S?
    ```
*   **Expected Response:**
    *   **Warning Banner:** A prominent **`⚠️ Target Specification Mismatch`** card appears at the top of the chat.
    *   **Explanation:** Explains that `Validation_eCTD_v4_0_v1_5.pdf` is an IT technical folder specification and cannot validate scientific stability questions.
    *   **Agent Recommendation:** Automatically scans available files and recommends selecting **`M4Q_R1_Guideline.pdf`** from the dropdown instead to complete the scientific quality audit.

---

## 🤖 Gemini Enterprise Agent Interaction Guide

> [!IMPORTANT]
> **Enterprise Plus Secured Workspace Integration**
>
> The **Pharma Dossier Harmonizer** is officially registered inside **Gemini Enterprise Plus**. Corporate users can call upon its deep pharmaceutical intelligence directly from their main chat window. This sections covers the multi-agent routing system, stateful turn memory, and detailed step-by-step conversational prompts.

---

### 🧠 ADK Multi-Agent Routing Architecture

When you submit a query in Gemini Enterprise, the main **Coordinator Agent** (the primary router) parses your instruction and invokes specialized sub-agents using the **Google ADK (Agent Development Kit)** framework.

| Sub-Agent Name | Primary Responsibility / Instruction | Active Backend Tool Called |
| :--- | :--- | :--- |
| **`DossierIngestionAgent`** | Extracts raw facts, substances, and clinical information from dossiers. Validates file schema and rejects unrelated documents. | `extract_dossier_text` (Document AI parsing / OCR fallback) |
| **`RegulatoryRetrievalAgent`** | Retrieves controlled guidelines (such as ICH M4 quality specifications). | `retrieve_regulatory_guidelines` |
| **`DeltaAnalysisAgent`** | Compares old and new versions of drafts to compute unified diffs. | `compare_dossier_versions` |
| **`LabelHarmonizerAgent`** | Compares labeling text across dossiers and DailyMed safety registries. | `search_labels` |
| **`ComplianceAgent`** | Strictly validates folder naming casing and technical spreadsheet validation rules. | `query_excel_criteria`, `query_guideline_pdf`, `verify_ectd_packages` |
| **`EctdShellAgent`** | Generates initial submission eCTD outlines for drug product modules. | `generate_ectd_shell` |
| **`FinalReviewerAgent`** | Produces a structured JSON-validated Regulatory Affairs final review report. | Runs LLM validation against `HarmonizerResult` output schema. |

---

### 🎛️ Dual-Input Processing Directives

The agent processes files in two distinct ways:

1.  **Direct Chat Attachment (Multimodal PDF Ingress):**
    > [!NOTE]
    > **How it works:** When you drag, drop, or upload a dossier PDF *directly* inside the conversational chat window, the agent reads the document **natively using multimodal vision** through its standard context. There is **no need to call external APIs**.
2.  **External GCS Staging URI (Cloud Storage Trigger):**
    > [!NOTE]
    > **How it works:** If you provide a Cloud Storage URI (e.g., `gs://pharma-dossiers-nitinagga-ge/dossiers/dossier.pdf`), the agent triggers `DossierIngestionAgent` to invoke **Google Cloud Document AI** to extract, pre-process, and index the text in the **BigQuery database** before proceeding.

---

### 🧪 High-Fidelity Conversational Prompt Flows

Use these exact, pre-formatted scenarios to test the agent inside Gemini Enterprise.

#### 📁 Prompt Flow 1: eCTD Directory Schema and Casing Validation Scan
*   **User Goal:** Audit GCS staged folder layouts for strict lowercase naming laws and missing regional folders.
*   **User Conversational Prompt:**
    ```text
    Please invoke the verify_ectd_packages tool to scan my staged folders in Cloud Storage, list the scanned files, and audit them for compliance casing gaps.
    ```
*   **Agent Workflow:**
    1. **Coordinator** routes the instruction to the **`ComplianceAgent`**.
    2. **`ComplianceAgent`** executes the `verify_ectd_packages` tool.
    3. The tool walks the staged bucket, checking for files with spaces or uppercase letters, and searches for required `m1/fda` and `m1/eu/util/dtd` directories.
*   **Expected Agent Response:**
    ```markdown
    ### 🔴 eCTD Technical Audit Status: Non-Compliant
    
    Your physical folder layout violates eCTD filename casing laws and structural requirements.
    
    **Casing Gaps Identified:**
    - Found **33 files** violating naming criteria (casing or spaces detected). Examples:
      * `COCT_MT150007UV.xsd` (Contains uppercase characters)
      * `eCTD 3.2.2 - EU M1 Validation Criteria v8.2.xlsx` (Contains spaces and capitals)
      * `Genericode.zip` (Contains uppercase characters)
      
    **Structural Folder Gaps:**
    - `🔴 Missing Path:` `m1/fda` (Mandatory US Regional folder)
    - `🔴 Missing Path:` `m1/eu/util/dtd` (Mandatory EU DTD Schema folder)
    
    **🟢 Scanned Files List:**
    Successfully indexed 46 files in GCS: `m3-dp-pharma-dev - working.md`, `M4Q_R1_Guideline.pdf`, `Validation_eCTD_v4_0_v1_5.pdf`, `eCTD_Specification_v3_2_2_0.pdf`, `COCT_MT150007UV.xsd`, etc.
    ```
*   **Suggested Follow-Up Prompt:**
    ```text
    Explain the naming requirements for eCTD schema files under Validation_eCTD_v4_0_v1_5.pdf.
    ```

---

#### 🧪 Prompt Flow 2: Potency Gaps & Accelerated Stability Audit
*   **User Goal:** Perform a semantic vector RAG search to identify accelerated stability gaps in a draft dossier compared against official ICH standards.
*   **User Conversational Prompt:**
    ```text
    Validate my staged dossier m3-dp-pharma-dev - working.md against the M4Q_R1_Guideline.pdf specifications. Check if the dossier includes the mandatory accelerated stability potency limits and forced degradation summaries under Module 3.2.S. Cite the exact section and page numbers.
    ```
*   **Agent Workflow:**
    1. **Coordinator** routes the request to the **`ComplianceAgent`**.
    2. **`ComplianceAgent`** triggers the `query_guideline_pdf` tool to execute a semantic search using Vertex AI `text-embedding-004` over the guideline PDF.
    3. The agent extracts the requirements and compares them with the staged dossier text loaded from BigQuery.
*   **Expected Agent Response:**
    ```markdown
    ### 🔍 Quality Audit Report: Gaps Identified
    
    An audit of your draft dossier **`m3-dp-pharma-dev - working.md`** against **`M4Q_R1_Guideline.pdf`** has revealed significant scientific gaps in Module 3.2.S:
    
    *   **🔴 Stability Potency Gap:**
        *   *Requirement:* Under **`M4Q_R1_Guideline.pdf` Page 17 (Section 3.2.S.7.1 - Stability Summary)**, submissions must include tabulated results from accelerated stability testing (at 6 months, 40°C ± 2°C / 75% RH ± 5% RH).
        *   *Dossier Status:* Your draft dossier only lists a generic shelf-life summary and lacks the raw tabulated accelerated stability potency metrics.
    *   **🔴 Potency Degradation Gaps:**
        *   *Requirement:* Tabulated potency summary results from Module 3.2.P.8.3 must also be summarized (**Guideline Page 9**).
        *   *Dossier Status:* Accelerated degradation study limits are missing.
    ```
*   **Suggested Follow-Up Prompt:**
    ```text
    Generate an eCTD Module 3.2.S shell and mark these missing sections as Data Gaps.
    ```

---

#### 🧪 Prompt Flow 3: Safety Labels Prescribing Warnings Harmonization
*   **User Goal:** Compare a custom dossier active compound safety sheet against official DailyMed boxed warnings.
*   **User Conversational Prompt:**
    ```text
    Harmonize the safety warning labels for Adalimumab under my staged dossier Module 3 against the prescribing safety warnings in the DailyMed registry.
    ```
*   **Agent Workflow:**
    1. **Coordinator** delegates to **`LabelHarmonizerAgent`**.
    2. **`LabelHarmonizerAgent`** executes `search_labels` passing `Adalimumab` as the product parameter.
    3. The tool retrieves the official prescribing warnings, and the agent performs a semantic comparison with the staged dossier.
*   **Expected Agent Response:**
    ```markdown
    ### 🤖 Label Harmonization Summary: Gaps Identified
    
    **Analyzed Substance:** Adalimumab  
    **Registry Source:** DailyMed SPL Prescribing Registry
    
    **Registry Boxed Warnings Found:**
    1.  **⚠️ Serious Infections:** Increased risk of active tuberculosis, invasive fungal infections, and bacterial sepsis.
    2.  **⚠️ Malignancies:** Increased risk of lymphoma and other pediatric cancers.
    
    **Dossier Alignment Gaps:**
    - `✖ Critical Warning Gap:` The staged dossier `m3-device-dmf.md` correctly references active compound properties but **completely omits the mandatory boxed warnings for pediatric malignancies and invasive fungal infections**.
    
    **Suggested Action:**
    Update Module 1.14 (Labeling section) to incorporate these boxed safety warnings to ensure FDA compliance.
    ```
*   **Suggested Follow-Up Prompt:**
    ```text
    Draft a compliant warning label text for Adalimumab serious infections for Module 1.14.
    ```

---

### 🧠 Stateful Multi-Turn Conversation Memory
Gemini Enterprise tracks the status of your audits across multiple conversation turns. For example, you can perform a casing audit, and then ask:
*   *“Now draft an eCTD shell for that dossier, keeping those identified gaps marked as Pending.”*
*   The agent will maintain the file context and dynamically generate the JSON outline, saving you from re-entering the file names!

---

## 🚀 Suggested Next Steps for Reviewers
1.  **Open Localhost (Port 3000):** Try uploading `m3-device-dmf.md` on the Dossiers tab.
2.  **Run a Chat Session:** In the chat sidebar, select the uploaded dossier and query: *"Retrieve Adalimumab safety warnings."*
3.  **Run eCTD Scan:** Go to the Dashboard and click `⚡ Run eCTD Validation` to view casing and directory errors immediately!
