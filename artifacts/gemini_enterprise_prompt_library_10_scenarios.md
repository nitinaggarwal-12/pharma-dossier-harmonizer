# 🤖 Gemini Enterprise UI: 10 High-Fidelity Prompt Scenarios
**Pharma Dossier Harmonizer Conversational Runbook & Validation Testing Matrix**

This document outlines 10 highly comprehensive, realistic prompt flows designed for interacting with the custom **Pharma Dossier Harmonizer** multi-agent engine directly within the **Gemini Enterprise Plus UI**.

---

## 📋 Prompt Library Index
1. **Scenario 1:** Serverless GCS Document Ingress & BigQuery Parsing
2. **Scenario 2:** Multimodal Direct Chat Attachment Parsing
3. **Scenario 3:** eCTD Physical Folder Schema & Naming Casing Audit
4. **Scenario 4:** ICH Q1A Accelerated Stability Study Timeframe Audit
5. **Scenario 5:** DailyMed Prescribing Boxed Warning Label Harmonization
6. **Scenario 6:** Proactive Target Specification Mismatch Interception
7. **Scenario 7:** Stateful Session Memory Submission Shell Generation
8. **Scenario 8:** Symmetrical Line-by-Line Version Diffing
9. **Scenario 9:** Technical Error Code Validation via Excel Lookup Matrices
10. **Scenario 10:** Automated Inception Guardrails Rejecting Non-Pharma Files

---

## 🧪 Scenario 1: Serverless GCS Document Ingress & BigQuery Parsing

### **User Objective**
To command the agent to ingest an external cloud storage file dynamically using background serverless triggers, extract its key regulatory facts, and index the results inside corporate BigQuery sets.

### **Target Agent Routed**
* **Sub-Agent:** `DossierIngestionAgent`
* **Active Tool Invoked:** `extract_dossier_text`

### **Exact Conversational Prompt**
```text
Please ingest my source dossier stored at gs://pharma-dossiers-nitinagga-ge/dossiers/m3-dp-pharma-dev - working.md using the extract_dossier_text tool. Extract all active ingredient properties, stability parameters, and proposed manufacturing details.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Intent parsed: External Cloud Ingestion URI detected.
[Coordinator Agent] ➔ Delegating instruction payload to DossierIngestionAgent.
[DossierIngestionAgent] ➔ Invoking tool: extract_dossier_text("gs://pharma-dossiers-nitinagga-ge/dossiers/m3-dp-pharma-dev - working.md")
[Document AI Service Bridge] ➔ Executing 15-page batch segment splitting. Process complete.
[BigQuery Core Indexer] ➔ Row inserted successfully into nitinagga-ge.dossier_analysis.extracted_files.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 📥 Dossier Ingestion & Extraction Status: Complete

I have successfully connected to your target GCS bucket, pre-processed the file stream using **Google Cloud Document AI**, and cataloged the extracted baseline matrix into **BigQuery**.

**📂 File Profile Summary:**
* **Source Path:** `gs://pharma-dossiers-nitinagga-ge/dossiers/m3-dp-pharma-dev - working.md`
* **Extracted Length:** 14,892 characters processed across narrative slices.
* **Target Domain:** Module 3 Drug Product (DP) Formulations Development.

**🧬 Extracted Key Substance Facts:**
* **Active Pharmaceutical Ingredient (API):** Praziquantel (High-purity grade).
* **Listed Excipients:** Lactose monohydrate, microcrystalline cellulose, sodium starch glycolate.
* **Proposed Shelf-Life Declaration:** 24 months stored below 25°C.
* **Data Audit Intercept:** The document provides broad summary descriptions but **omits raw stability matrices**.

### Suggested Next Steps
* *Audit this dossier text for missing forced degradation study data against ICH M4Q standards.*
* *Generate an eCTD structural shell baseline based on these extracted components.*
```

---

## 🧪 Scenario 2: Multimodal Direct Chat Attachment Parsing

### **User Objective**
To utilize Gemini Enterprise's secure workspace document uploader to drop a complex regional submission PDF directly into the chat window, bypassing external web APIs to review inline potency tables natively.

### **Target Agent Routed**
* **Sub-Agent:** `DossierIngestionAgent`
* **Active Tool Invoked:** **Multimodal Native Context Transformer Lens** *(No external tool call necessary)*

### **Exact Conversational Prompt**
*(User drops file `125057Orig1s425ltr.pdf` into the workspace attachment panel)*
```text
Review the attached regional submission PDF natively using your multimodal vision context. Summarize the active drug ingredients, clinical potency bounds, and regional approval tracking numbers.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Direct UI file buffer ingress intercepted.
[Coordinator Agent] ➔ Triggering Multimodal Lens override logic. Bypassing remote extraction API nodes.
[DossierIngestionAgent] ➔ Projecting document visual frames and embedded text layers straight into active reasoning registers.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 👁️ Multimodal Document Ingestion Analysis

I have ingested your attached regional submission draft directly via **multimodal text and visual context**. By evaluating layout geometries and tabular data blocks natively, I bypassed remote database processing.

**📑 Regional Submission Snapshot:**
* **Administrative Tracking Identification:** `NDA 125057 / Orig1s425`
* **Originating Regulatory Agency:** Food and Drug Administration (FDA), Center for Drug Evaluation and Research (CDER).
* **Submission Type:** Original New Drug Application Supplemental Review.

**🧪 Verified Clinical Potency Metrics:**
* **Active Component Base:** Evaluated clinical lot matrices enforce a potency release range bounded tightly between **95.0% to 105.0%** of labeled initial concentrations.
* **Tabular Extraction Integrity:** Parsed multi-column matrix layouts confirming structural consistency across all pre-clinical test runs.

### Suggested Next Steps
* *Perform a side-by-side symmetrical delta comparison against historical baseline approvals.*
* *Search DailyMed registries to verify boxed prescribing label alignment for this compound.*
```

---

## 🧪 Scenario 3: eCTD Physical Folder Schema & Naming Casing Audit

### **User Objective**
To command the engine to perform an exhaustive physical check across workspace submission directories to flag filename casing issues and highlight missing regional utility folders.

### **Target Agent Routed**
* **Sub-Agent:** `ComplianceAgent`
* **Active Tool Invoked:** `verify_ectd_packages`

### **Exact Conversational Prompt**
```text
Please invoke the verify_ectd_packages tool to scan my staged folders in Cloud Storage, list the scanned files, and audit them for compliance casing gaps.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Routing instruction directly to ComplianceAgent.
[ComplianceAgent] ➔ Firing command: verify_ectd_packages()
[GCS Blob Scanner] ➔ Walking target path: gs://pharma-dossiers-nitinagga-ge/
[Validation Evaluator] ➔ Evaluating string arrays for uppercase occurrences and missing structural paths.
```

### **Simulated High-Fidelity Agent Response**
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
Successfully indexed 46 files in GCS: `m3-dp-pharma-dev - working.md`, `M4Q_R1_Guideline.pdf`, `Validation_eCTD_v4_0_v1_5.pdf`, `eCTD_Specification_v3_2_2_0.pdf`, etc.

### Suggested Next Steps
* *Explain the naming requirements for eCTD schema files under Validation_eCTD_v4_0_v1_5.pdf.*
* *Generate an automated script to convert non-compliant filenames to valid lowercase strings.*
```

---

## 🧪 Scenario 4: ICH Q1A Accelerated Stability Study Timeframe Audit

### **User Objective**
To perform an advanced semantic vector similarity search inside official guidance manuals to audit draft stability parameters against verified global timelines.

### **Target Agent Routed**
* **Sub-Agent:** `ComplianceAgent`
* **Active Tool Invoked:** `query_guideline_pdf`

### **Exact Conversational Prompt**
```text
Validate my staged dossier m3-dp-pharma-dev - working.md against the M4Q_R1_Guideline.pdf specifications. Check if the dossier includes the mandatory accelerated stability potency limits and forced degradation summaries under Module 3.2.S. Cite the exact section and page numbers.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Instruction requires guideline extraction -> Invoking ComplianceAgent.
[ComplianceAgent] ➔ Stripping prompt string -> Executing query_guideline_pdf("accelerated stability potency limits forced degradation Module 3.2.S")
[Vector Index Core] ➔ Vector Pre-Cache loaded instantly in 0ms. Projecting embedding via text-embedding-004.
[Vector Index Core] ➔ Cosine similarity evaluated (<2ms). Emitting top 3 text boundaries to LLM.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 🔍 Quality Audit Report: Scientific Gaps Identified

An audit of your draft dossier **`m3-dp-pharma-dev - working.md`** against **`M4Q_R1_Guideline.pdf`** has revealed significant scientific gaps in Module 3.2.S:

* **🔴 Stability Potency Gap:**
  * *Requirement:* Under **`M4Q_R1_Guideline.pdf` Page 17 (Section 3.2.S.7.1 - Stability Summary)**, submissions must include tabulated results from accelerated stability testing (at 6 months, 40°C ± 2°C / 75% RH ± 5% RH).
  * *Dossier Status:* Your draft dossier only lists a generic shelf-life summary and lacks the raw tabulated accelerated stability potency metrics.
* **🔴 Potency Degradation Gaps:**
  * *Requirement:* Tabulated potency summary results from Module 3.2.P.8.3 must also be summarized (**Guideline Page 9**).
  * *Dossier Status:* Accelerated degradation study limits are missing.

### Suggested Next Steps
* *Generate an eCTD Module 3.2.S shell and mark these missing sections as Data Gaps.*
* *Retrieve standard forced degradation parameters from ICH Q1A.*
```

---

## 🧪 Scenario 5: DailyMed Prescribing Boxed Warning Label Harmonization

### **User Objective**
To audit internal drug substance formulation documentation against external DailyMed prescribing databases to confirm that required boxed safety warnings are fully present.

### **Target Agent Routed**
* **Sub-Agent:** `LabelHarmonizerAgent`
* **Active Tool Invoked:** `search_labels`

### **Exact Conversational Prompt**
```text
Harmonize the safety warning labels for Adalimumab under my staged dossier Module 3 against the prescribing safety warnings in the DailyMed registry.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Extracting substance keyword -> Routing request to LabelHarmonizerAgent.
[LabelHarmonizerAgent] ➔ Command tool: search_labels(product_name="Adalimumab")
[SPL Registry Client] ➔ Resolving active compound safety profiles from sample reference matrices.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 🤖 Label Harmonization Summary: Gaps Identified

**Analyzed Substance:** Adalimumab  
**Registry Source:** DailyMed SPL Prescribing Registry

**Registry Boxed Warnings Found:**
1. **⚠️ Serious Infections:** Increased risk of active tuberculosis, invasive fungal infections, and bacterial sepsis.
2. **⚠️ Malignancies:** Increased risk of lymphoma and other pediatric cancers.

**Dossier Alignment Gaps:**
- `✖ Critical Warning Gap:` The staged dossier `m3-device-dmf.md` correctly references active compound properties but **completely omits the mandatory boxed warnings for pediatric malignancies and invasive fungal infections**.

**Suggested Action:**
Update Module 1.14 (Labeling section) to incorporate these boxed safety warnings to ensure FDA compliance.

### Suggested Next Steps
* *Draft a compliant warning label text for Adalimumab serious infections for Module 1.14.*
* *Perform a comparative analysis against alternative active compound files.*
```

---

## 🧪 Scenario 6: Proactive Target Specification Mismatch Interception

### **User Objective**
To verify that the agent engine proactively halts processing and flags configuration mismatches when a reviewer pairs a scientific file draft alongside an incompatible technical IT directory manual.

### **Target Agent Routed**
* **Sub-Agent Interceptor:** `Coordinator` / `ComplianceAgent` Evaluation Gate

### **Exact Conversational Prompt**
```text
Does my dossier m3-dp-pharma-dev - working.md include the required accelerated stability potency data under Module 3.2.S when evaluated using the Validation_eCTD_v4_0_v1_5.pdf guidelines?
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Parsing target guideline domain: Validation_eCTD_v4_0_v1_5.pdf = IT Folder XML Structure Standard.
[Coordinator Agent] ➔ Parsing user task domain: Accelerated stability potency data = Scientific Quality Summary.
[Interception Gate] ➔ Domain mismatch alert activated. Halting text comparisons to prevent erroneous audit emission.
```

### **Simulated High-Fidelity Agent Response**
```markdown
<div style="background-color: #FEF2F2; border: 1px solid #FCA5A5; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
  <strong style="color: #991B1B; font-size: 15px; display: flex; align-items: center; gap: 6px;">
    ⚠️ Target Specification Mismatch Intercepted
  </strong>
  <p style="color: #7F1D1D; font-size: 13.5px; margin: 6px 0 0 0;">
    You have requested a scientific stability and potency evaluation using <b>Validation_eCTD_v4_0_v1_5.pdf</b>. This document is an administrative IT technical folder layout manual and does not contain chemical stability or experimental degradation boundary criteria.
  </p>
</div>

### 💡 Corrective Guidance & File Recommendation
To successfully perform your requested quality analysis over draft **`m3-dp-pharma-dev - working.md`**, you must choose the correct target baseline from your active Cloud Storage reference library:

* **`BEST MATCH` Recommended Guideline:** **`M4Q_R1_Guideline.pdf`** *(ICH Harmonised Tripartite Guideline for the Common Technical Document for the Registration of Pharmaceuticals for Human Use - Quality)*.
* **Action Needed:** Please update your reference dropdown parameter to `M4Q_R1_Guideline.pdf` and re-submit your query to unlock semantic stability vector checks.

### Suggested Next Steps
* *Switch reference target to M4Q_R1_Guideline.pdf and proceed with stability audits.*
* *Audit the folder layout of this dossier using the currently selected technical manual.*
```

---

## 🧪 Scenario 7: Stateful Session Memory Submission Shell Generation

### **User Objective**
To command the system to instantly construct a standard, structured eCTD module skeleton outline while preserving context and gap markers from previous conversational interaction turns.

### **Target Agent Routed**
* **Sub-Agent:** `EctdShellAgent`
* **Active Tool Invoked:** `generate_ectd_shell`

### **Exact Conversational Prompt**
*(Follow-up sent immediately after the stability audit in Scenario 4)*
```text
Now draft an eCTD shell outline for that drug product module, keeping those identified gaps marked as Data Gaps.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Referencing active Turn Session Memory -> Resolving active source file context.
[Coordinator Agent] ➔ Invoking EctdShellAgent payload.
[EctdShellAgent] ➔ Firing command: generate_ectd_shell(module_name="Module 3")
[JSON Builder Engine] ➔ Injecting historical gap status variables into standard taxonomy nodes.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 📑 Generated eCTD Submission Skeleton (Module 3)

Compiled standard taxonomy mapping for your active dossier with automatically injected gap placeholders based on previous QA findings:

```json
{
  "eCTD_Module_3": {
    "3.2.P.1": "Description and Composition - Draft Complete",
    "3.2.P.2": "Pharmaceutical Development - Data Gap (Accelerated degradation bounds missing)",
    "3.2.P.3": "Manufacture - Draft Complete",
    "3.2.P.8": "Stability - Data Gap (Missing 6-month raw tabulated potency metrics)",
    "3.2.S.7.1": "Stability Summary - Pending Remediation"
  }
}
```

**Status:** Skeleton staged successfully. Ready for content injection workflows.

### Suggested Next Steps
* *Export this JSON outline directly to Cloud Storage.*
* *Compare this structural outline against the EU M1 Regional validation layout.*
```

---

## 🧪 Scenario 8: Symmetrical Line-by-Line Version Diffing

### **User Objective**
To execute localized side-by-side split line diffing over two distinct dossier draft versions to visually isolate incremental text additions and deletions.

### **Target Agent Routed**
* **Sub-Agent:** `DeltaAnalysisAgent`
* **Active Tool Invoked:** `compare_dossier_versions`

### **Exact Conversational Prompt**
```text
Compare the text contents of my old baseline draft m3-dp-pharma-dev - working.md against the newly extended draft m3-dp-pharma-dev.md.pdf using the compare_dossier_versions tool. Show the unified git diff output.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Multi-version input parameters detected -> Routing payload to DeltaAnalysisAgent.
[DeltaAnalysisAgent] ➔ Loading file blocks from BigQuery indices.
[DeltaAnalysisAgent] ➔ Invoking tool: compare_dossier_versions(old_text="...", new_text="...")
[Diff Engine Core] ➔ Generating optimized unified diff delta buffers.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### ⇄ Version Delta Analysis Report

I have executed a line-by-line split comparison mapping updates between your historical baseline file and your newly revised draft.

**File Baseline Input:** `m3-dp-pharma-dev - working.md`  
**Target Revised Input:** `m3-dp-pharma-dev.md.pdf`

**Unified Git Diff Output Excerpt:**
```diff
--- old_baseline/3.2.P.8_Stability.md
+++ revised_draft/3.2.P.8_Stability.md
@@ -14,5 +14,10 @@
 Drug product exhibits compliant stability characteristics under normal long-term 
 storage at 25°C/60% RH over 12 months.
 
-Accelerated stability testing conclusions remain in progress.
+Accelerated stability testing completed across 3 pilot scale batches at 40°C/75% RH.
+Raw tabular potency assay values confirm an average assay recovery of 98.4% at 6 months, 
+fully meeting release requirements. No significant chromatographic degradation impurities 
+were detected exceeding the 0.05% qualification threshold.
```

**Delta Status:** Validated structural data updates detected. Potency tables inserted successfully.

### Suggested Next Steps
* *Approve these delta changes and export the merged block to the review portal.*
* *Run a final compliance verification pass over the updated text segment.*
```

---

## 🧪 Scenario 9: Technical Error Code Validation via Excel Lookup Matrices

### **User Objective**
To demonstrate the agent's rule extraction optimization logic by looking up explicit technical validation rule codes stored natively inside regional verification matrices.

### **Target Agent Routed**
* **Sub-Agent:** `ComplianceAgent`
* **Active Tool Invoked:** `query_excel_criteria`

### **Exact Conversational Prompt**
```text
Look up technical validation rule '1.1' inside the local Excel criteria matrix to explain the exact file naming and regional folder path layout criteria for submission files.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Instruction targets specific lookup parameters -> Invoking ComplianceAgent.
[ComplianceAgent] ➔ Executing Keyword Strip optimization -> Removing natural language boilerplate.
[ComplianceAgent] ➔ Firing targeted tool: query_excel_criteria(query="1.1")
[Excel Core Bridge] ➔ Querying ground_truth/eCTD 3.2.2 - EU M1 Validation Criteria v8.2.xlsx. Row resolved.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 📊 Technical Validation Rule Matrix Lookup

I have queried the official eCTD criteria spreadsheet repository natively, parsing explicit validation bounds for rule code **`1.1`**.

**Rule Verification Details:**
* **Rule Target Code:** `1.1`
* **Verification Class:** Critical Regional Technical Requirement.
* **Criteria Description:** Submissions must follow specific electronic filename and hierarchical directory specifications. Absolute folder route maps must adhere to structural layout standards, guaranteeing that regional root nodes contain valid localized paths.
* **Application Scope:** Module 1 Regional Administration XML payload structures.

**Data Audit Implication:**
Violations of Rule 1.1 (such as injecting whitespace characters or uppercase letters into path declarations) trigger automatic agency refusal actions. Ensure file profiles map symmetrically to this standard before final transmission.

### Suggested Next Steps
* *Execute a live scan across staged workspaces to cross-check against Rule 1.1 criteria.*
* *Query alternative related validation error matrix bounds (e.g. Rule 1.2).*
```

---

## 🧪 Scenario 10: Automated Inception Guardrails Rejecting Non-Pharma Files

### **User Objective**
To stress-test the custom safety constraints built into the platform by uploading an arbitrary, non-regulatory business document to verify interception and prompt rejection.

### **Target Agent Routed**
* **Sub-Agent Interceptor:** `DossierIngestionAgent` Safety Guard Core

### **Exact Conversational Prompt**
*(User uploads an unrelated internal corporate invoice file `Q3_Project_Consulting_Invoice.pdf`)*
```text
Extract all available clinical trial drug facts and proposed module definitions from this newly uploaded file.
```

### **Internal ADK Routing & Tool Execution Trace**
```text
[Coordinator Agent] ➔ Routing input payload to DossierIngestionAgent.
[DossierIngestionAgent] ➔ Pre-parsing stream to evaluate contextual domain safety directives.
[Safety Guard Core] ➔ Extracted text maps to financial terminology ("invoice", "billable hours", "rate").
[Safety Guard Core] ➔ Interception triggered. Aborting fact generation routines to preserve domain alignment.
```

### **Simulated High-Fidelity Agent Response**
```markdown
### 🛑 Document Extraction Rejected: Safety Guardrail Activated

**Ingestion failed: The uploaded document is not a valid pharmaceutical dossier or regulatory manual.**

**Contextual Security Intercept Details:**
* **Evaluated Stream Profile:** `Q3_Project_Consulting_Invoice.pdf`
* **Safety Directives Violation:** The multi-agent orchestrator is restricted to processing clinical protocols, eCTD folder matrices, RAG validation specifications, and chemistry manufacturing controls (CMC). The supplied input contains financial accounting and invoicing statements, falling completely outside legitimate medical review domains.
* **System Action Taken:** The file buffer was immediately flushed from active reasoning memory. To prevent hallucinating mock drug properties, no regulatory output skeletons were compiled.

### Suggested Next Steps
* *Attach a valid Module 3 dossier or reference guideline to proceed with your QA tasks.*
* *Review the Active Files Inventory listing in the End-to-End User Guide.*
```

---
**End of Runbook Scenarios**
