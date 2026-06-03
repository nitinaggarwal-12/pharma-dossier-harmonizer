# Drug Substance - Manufacture

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 22:59:43

---

# Manufacturer and Facility Information

## Google Biologics Facility Description

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2: MANUFACTURE
### SUBSECTION 3.2.S.2.1: MANUFACTURER AND FACILITY INFORMATION

---

#### 1.0 INTRODUCTION TO THE GOOGLE BIOLOGICS FACILITY (GBF-01)

Google Health Sciences (GHS), a Division of Google Cloud Life Sciences, operates the Google Biologics Facility (GBF-01) located at 3000 Innovation Drive, South San Francisco, CA 94080, USA. This state-of-the-art, 450,000-square-foot facility is dedicated to the clinical and commercial manufacture of recombinant peptide therapeutics, specifically **Glucogen-XR (glucapeptide extended-release)**.

The GBF-01 facility is designed in accordance with current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210 and 211, and incorporates "Industry 4.0" paradigms, utilizing Google Cloud’s proprietary AI-driven Process Analytical Technology (PAT) and automated manufacturing execution systems (MES).

#### 2.0 SITE IDENTIFICATION AND CONTACT INFORMATION

| Facility Attribute | Details |
| :--- | :--- |
| **Facility Name** | Google Biologics Facility (GBF-01) |
| **Owner/Operator** | Google Health Sciences, a Division of Google Cloud Life Sciences |
| **Address** | 3000 Innovation Drive, South San Francisco, CA 94080, USA |
| **FDA Establishment Identifier (FEI)** | 30098274XX (Pending Final Registration) |
| **DUNS Number** | 08-012-XXXX |
| **Primary Contact** | VP of Global Regulatory Affairs, Google Health Sciences |
| **Facility Type** | Drug Substance Manufacturing, Quality Control, and R&D |
| **Square Footage** | 450,000 sq. ft. (300,000 sq. ft. Grade C/D Space) |

---

#### 3.0 FACILITY ARCHITECTURE AND SEGREGATION STRATEGY

The GBF-01 facility utilizes a "Ballroom" design concept for downstream processing and a "Closed-System" modular approach for upstream processing. This ensures maximum flexibility while maintaining rigorous environmental controls.

##### 3.1 Grade Classification and Environmental Monitoring (EM)
All manufacturing areas are maintained under strict environmental controls per ISO 14644-1 and USP <1116>.

**Table 3.1-1: Environmental Classification by Process Step**
| Area ID | Function | ISO Class (At Rest) | ISO Class (In Operation) | Pressure Differential |
| :--- | :--- | :--- | :--- | :--- |
| **MOD-A1** | Cell Culture / Seed Train | ISO 8 (Grade D) | ISO 8 | +15 Pa |
| **MOD-A2** | Production Bioreactor (2000L) | ISO 8 (Grade D) | ISO 8 | +15 Pa |
| **MOD-B1** | Primary Recovery (Centrifugation) | ISO 7 (Grade C) | ISO 8 | +10 Pa |
| **MOD-C1** | Purification (Chromatography) | ISO 7 (Grade C) | ISO 7 | +15 Pa |
| **MOD-C2** | Viral Inactivation/Filtration | ISO 7 (Grade C) | ISO 7 | +20 Pa |
| **MOD-D1** | Formulation & Fill (Bulk) | ISO 5 (Grade A) | ISO 5 | +30 Pa |

##### 3.2 Material and Personnel Flow
Personnel enter through dedicated Gowning Suites (GS-01 through GS-04). Material enters via Air-Locks (AL-01) equipped with UV-C decontamination tunnels. The facility utilizes a unidirectional flow pattern to prevent cross-contamination between raw materials, in-process intermediates, and final Drug Substance.

---

#### 4.0 MANUFACTURING EQUIPMENT AND TECHNICAL SPECIFICATIONS

The production of Glucogen-XR utilizes the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line. The equipment train is optimized for high-titer recombinant peptide expression.

##### 4.1 Upstream Equipment (Cell Culture)
The upstream suite (MOD-A1/A2) is equipped with a fully integrated seed train.

**Table 4.1-1: Upstream Equipment Inventory**
| Equipment ID | Description | Manufacturer | Capacity/Specs |
| :--- | :--- | :--- | :--- |
| **BR-101** | Wave Bioreactor (Seed) | Cytiva | 10L - 50L |
| **BR-201** | Single-Use Bioreactor (SUB) | Thermo Scientific | 500L |
| **BR-301** | Production SUB | Thermo Scientific | 2000L |
| **AI-AN-01** | Google Cloud In-line Raman | Google Health | Real-time Metabolite Monitoring |

##### 4.2 Downstream Equipment (Purification)
Downstream processing (DSP) involves multi-stage chromatography and ultrafiltration.

**Table 4.2-1: Downstream Equipment Inventory**
| Equipment ID | Description | Technology | Operational Parameter |
| :--- | :--- | :--- | :--- |
| **CH-101** | Protein A Capture Column | Cytiva AxiChrom | 600mm Bed Height |
| **CH-201** | Ion Exchange (IEX) | Tosoh Bioscience | Gradient Elution |
| **VF-401** | Viral Filtration System | Millipore Pellicon | 20nm Pore Size |
| **UFDF-501** | Tangential Flow Filtration | Repligen | 10 kDa MWCO |

---

#### 5.0 UTILITIES AND SUPPORT SYSTEMS

##### 5.1 Water for Injection (WFI) System
The WFI system (WFI-01) utilizes a Vapor Compression Distillation (VCD) unit producing 5,000 L/hr. 
*   **Conductivity:** < 1.3 µS/cm @ 25°C
*   **TOC:** < 500 ppb
*   **Microbial Limit:** < 10 CFU/100 mL
*   **Endotoxin:** < 0.25 EU/mL

##### 5.2 HVAC and Air Handling
The facility is serviced by twenty-four (24) Air Handling Units (AHU-01 through AHU-24). Each unit utilizes HEPA filtration (H14 grade) with 99.999% efficiency for 0.3 µm particles. Air change rates are maintained at ≥20 changes per hour for Grade C areas.

---

#### 6.0 PROCESS ANALYTICAL TECHNOLOGY (PAT) AND DATA INTEGRITY

As a division of Google Cloud, GHS utilizes the **Vertex-Bio AI Engine**. This platform integrates directly with the PLC/SCADA systems of the bioreactors and chromatography units.

1.  **Real-time Data Acquisition:** 250 data points per second are captured from the 2000L bioreactor (Batch Series GLUC-2025-XXX).
2.  **Predictive Analytics:** The system predicts Glycan profile shifts 24 hours in advance, allowing for automated nutrient feed adjustments.
3.  **Data Integrity:** All records are stored in a 21 CFR Part 11 compliant Google Cloud Healthcare API instance with immutable audit trails.

---

#### 7.0 CLEANING AND DECONTAMINATION PROTOCOLS

##### 7.1 Clean-In-Place (CIP) Procedure (Protocol CP-102)
For non-disposable components (e.g., stainless steel transfer lines), the following cycle is validated:
1.  **Initial Rinse:** WFI at 25°C for 5 minutes.
2.  **Alkaline Wash:** 0.5M NaOH at 65°C for 30 minutes.
3.  **Intermediate Rinse:** WFI until pH returns to neutral (6.5 - 7.5).
4.  **Acid Wash:** 0.1M Phosphoric Acid at 50°C for 15 minutes.
5.  **Final Rinse:** WFI until conductivity < 1.3 µS/cm.

##### 7.2 Sanitization of Cleanrooms
*   **Daily:** 70% IPA (Isopropanol)
*   **Weekly:** Spor-Klenz (Spericidal Agent)
*   **Monthly:** VHP (Vaporized Hydrogen Peroxide) decontamination of the entire MOD-C/D block.

---

#### 8.0 FACILITY BATCH RECORDS AND CAPACITY

The facility is currently validated for the production of 24 batches of Glucogen-XR per annum at the 2000L scale.

**Table 8.1: Recent Validation Batches (Year 2025)**
| Batch Number | Scale | Date of Initiation | Yield (g/L) | Purity (SEC-HPLC) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 4.2 | 99.4% |
| **GLUC-2025-002** | 2000L | 02-FEB-2025 | 4.3 | 99.2% |
| **GLUC-2025-003** | 2000L | 22-FEB-2025 | 4.1 | 99.5% |

---

#### 9.0 REGULATORY COMPLIANCE AND INSPECTION HISTORY

The GBF-01 facility operates under the following guidelines:
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **ICH Q9:** Quality Risk Management.
*   **ICH Q10:** Pharmaceutical Quality System.

The facility underwent a Pre-Approval Inspection (PAI) mock audit in Q4 2024 with zero Major findings. All minor observations regarding "Data Redundancy in Cloud Storage" have been addressed via the implementation of the Multi-Region Backup Protocol (MRBP-02).

---

#### 10.0 CONCLUSION

The Google Biologics Facility (GBF-01) represents the pinnacle of modern biopharmaceutical engineering. By integrating Google Cloud’s computational power with industry-standard biologic manufacturing hardware, GHS ensures that **Glucogen-XR** is produced to the highest standards of safety, identity, strength, quality, and purity (SISQP).

***

**End of Subsection 3.2.S.2.1**
*Reference: GHS-SOP-FAC-001 Revision 04*
*Confidential - Property of Google Health Sciences*

---

## GMP Certification and Inspections

# MODULE 3: QUALITY (3.2.S DRUG SUBSTANCE)
## SECTION: 3.2.S.2 MANUFACTURE
### SUBSECTION: 3.2.S.2.1 MANUFACTURER AND FACILITY INFORMATION
#### SUB-SUBSECTION: GMP CERTIFICATION AND INSPECTIONS

---

### 1.0 OVERVIEW OF COMPLIANCE STATUS
Google Health Sciences (GHS), a Division of Google Cloud Life Sciences, operates under a robust Pharmaceutical Quality System (PQS) designed in strict accordance with ICH Q10 principles. The manufacturing facility for Glucogen-XR (glucapeptide extended-release) Drug Substance, located at 3000 Innovation Drive, South San Francisco, CA 94080 (FEI: 3001234567), maintains a state of continuous validation and compliance with Current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210, 211, and 600.

This section provides an exhaustive account of the GMP certifications, site inspections, and internal audit histories pertinent to the production of the GLUC-2025-XXX series of batches.

### 2.0 SITE IDENTIFICATION AND REGISTRATION DATA
The following table summarizes the regulatory identifiers for the primary manufacturing site.

| Parameter | Specification / Data |
| :--- | :--- |
| **Legal Entity Name** | Google Health Sciences, Div. of Google Cloud Life Sciences |
| **Facility Address** | 3000 Innovation Drive, South San Francisco, CA 94080, USA |
| **DUNS Number** | 08-123-4567 |
| **FDA Establishment Identifier (FEI)** | 3001234567 |
| **GDUFA Self-ID Status** | Active (FY 2024/2025) |
| **Primary Contact** | Senior Director of Quality Assurance, GHS |
| **Scope of Activity** | Cell Banking, Upstream/Downstream Processing, Analytical Testing |
| **Cleanroom Classification** | ISO 5 (Grade A) to ISO 8 (Grade D) |

### 3.0 REGULATORY INSPECTION HISTORY (2020–2025)
Google Health Sciences maintains a transparent relationship with the US Food and Drug Administration (FDA) and other global health authorities. The facility at 3000 Innovation Drive has undergone the following inspections, confirming the suitability of the GHS-CHO-001 cell line platform and the specific processes for Glucogen-XR.

#### 3.1 Table of Inspections
| Inspection Date | Authority | Inspection Type | Scope | Outcome |
| :--- | :--- | :--- | :--- | :--- |
| 12-OCT-2020 | FDA | Pre-Approval (PAI) | Biologics License App (BLA-778) | No Form 483 Issued |
| 15-JAN-2022 | EMA | Routine GMP | Peptide/Protein Drug Substance | Compliant (EudraGMDP) |
| 22-MAY-2023 | FDA | Surveillance | General Biologic Manufacturing | 2 Minor Observations |
| 08-AUG-2024 | FDA | Pre-Approval (PAI) | Glucogen-XR (GLUC-2025 Series) | No Form 483 Issued |

#### 3.2 Detailed Analysis of 2024 PAI for Glucogen-XR
The inspection conducted between August 8 and August 16, 2024, specifically focused on the extended-release glucapeptide platform. 

**Inspection Focus Areas:**
1.  **Process Characterization:** Review of Quality by Design (QbD) parameters for the CHO-K1 GS knockout derivative (GHS-CHO-001).
2.  **Viral Safety:** Evaluation of viral clearance studies (Log10 Reduction Factors) performed in Suite B-12.
3.  **Process Analytical Technology (PAT):** Assessment of the Cloud-integrated Raman Spectroscopy used for real-time glucose monitoring in the 2000L Bioreactors.
4.  **Data Integrity:** Review of the Google Cloud Life Sciences Electronic Batch Record (eBR) system (Version 4.2.1) under 21 CFR Part 11.

### 4.0 GMP CERTIFICATION OF CRITICAL EQUIPMENT AND UTILITIES
All systems utilized in the production of Glucogen-XR batches (e.g., GLUC-2025-001 through GLUC-2025-015) undergo rigorous Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ).

#### 4.1 Equipment Validation Summary Table
| Equipment ID | Description | Last Qualification Date | Protocol Ref | Status |
| :--- | :--- | :--- | :--- | :--- |
| **SUB-2000-01** | 2000L Single-Use Bioreactor | 14-NOV-2024 | VAL-GLUC-098 | Validated |
| **CHRO-300-A** | Downstream Chromatography Skid | 02-DEC-2024 | VAL-GLUC-102 | Validated |
| **UFDF-50-01** | Ultrafiltration/Diafiltration System | 05-DEC-2024 | VAL-GLUC-105 | Validated |
| **WFI-SYS-01** | Water For Injection System | 10-JAN-2025 | VAL-UTL-001 | Validated |

#### 4.2 Protocol for Annual Re-Qualification (SOP-QA-0098)
The following procedure is followed for the maintenance of GMP certification for all critical hardware:
1.  **Risk Assessment:** Utilize FMEA (Failure Mode and Effects Analysis) to determine if modifications impacted the validated state.
2.  **Calibration Verification:** Confirm all NIST-traceable sensors (Temperature, pH, dO2) are within ±0.05% tolerance.
3.  **Microbiological Challenge:** For WFI systems, perform 5-day consecutive sampling to ensure <10 CFU/100mL and <0.25 EU/mL.
4.  **Final Quality Review:** QA site lead signs off on the "Annual Re-Qualification Summary Report" (ARSR).

### 5.0 QUALITY MANAGEMENT SYSTEM (QMS) AND BATCH RELEASE
The manufacture of Glucogen-XR is governed by the Google Health Sciences Quality Manual (GHS-QM-2025). 

#### 5.1 Batch Release Procedure for GLUC-2025 Series
Each batch of Glucogen-XR Drug Substance is released by the Qualified Person (QP) or designated Quality Assurance Manager only after the following criteria are met:
*   **Step 1: Batch Record Review.** 100% review of eBR data, including critical process parameters (CPPs) such as impeller tip speed (Target: 1.2 m/s) and pH (Target: 7.10 ± 0.05).
*   **Step 2: Deviation Clearance.** All Deviations (Type I, II, and III) must be closed. No open CAPAs (Corrective and Preventive Actions) may exist for the specific manufacturing suite.
*   **Step 3: Analytical Testing.** Results for purity (SEC-HPLC > 98.0%) and potency (Cell-based bioassay 90-110% of reference) must be verified.
*   **Step 4: Environmental Monitoring (EM).** Review of Grade B and Grade C EM data during the fill/finish or downstream processing window.

#### 5.2 Statistical Process Control (SPC)
GHS utilizes Google Cloud AI/ML models to monitor process drift. The calculation for the Process Capability Index (Cpk) is performed for every 5 batches:
$$Cpk = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$
*Where:*
*   $USL$ = Upper Specification Limit
*   $LSL$ = Lower Specification Limit
*   $\mu$ = Process Mean
*   $\sigma$ = Standard Deviation

For the GLUC-2025-001 to GLUC-2025-010 campaign, the calculated **Cpk for Purity was 1.67**, indicating a highly capable process.

### 6.0 INTERNAL AUDIT AND SELF-INSPECTION PROGRAM
In compliance with ICH Q10, GHS conducts internal audits of the South San Francisco site every six months.

#### 6.1 Internal Audit Schedule (2024-2025)
| Audit ID | Department | Scope | Key Findings |
| :--- | :--- | :--- | :--- |
| **IA-2024-01** | Production | Aseptic techniques in Suite B-1 | 1 minor (Gowning) |
| **IA-2024-02** | IT/Cloud | 21 CFR Part 11 / Data Integrity | No findings |
| **IA-2025-01** | QC Labs | Stability testing for Glucogen-XR | Ongoing |

### 7.0 RAW MATERIAL VENDOR QUALIFICATION
All raw materials used in Glucogen-XR (e.g., Chemically Defined Media, Protein A Resin) are sourced from GHS-qualified vendors.

*   **Audit Frequency:** High-risk vendors (Cell culture media) are audited on-site every 2 years.
*   **Testing:** Each lot of media is subjected to "Use-Test" protocols (Protocol GHS-UT-55) using the GHS-CHO-001 cell line prior to release into GMP production.

### 8.0 CONCLUSION ON COMPLIANCE
The manufacturing facility at 3000 Innovation Drive remains in a state of high compliance with FDA/ICH standards. The successful completion of the August 2024 PAI and the robust performance of the GLUC-2025-XXX batch series demonstrate that Google Health Sciences provides a controlled, validated environment suitable for the commercial production of Glucogen-XR.

---
**Footnotes & References:**
1. FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice.
2. ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
3. USP <1043> Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
4. GHS Document Control: GHS-SOP-QA-001 through GHS-SOP-QA-500.

---

## Quality Management System

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.1: MANUFACTURER(S) AND FACILITY INFORMATION
### SUBSECTION: QUALITY MANAGEMENT SYSTEM (QMS)

---

#### 1.0 OVERVIEW OF THE QUALITY MANAGEMENT SYSTEM (QMS)
Google Health Sciences (GHS), a Division of Google Cloud Life Sciences, operates under a comprehensive, integrated Quality Management System (QMS) designed to ensure that the drug substance, **Glucogen-XR (glucapeptide extended-release)**, is manufactured, tested, and released in strict accordance with Current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210, 211, and 600, as well as ICH Q7, Q8, Q9, and Q10 guidelines.

The GHS QMS utilizes a "Digital-First" architecture, leveraging Google Cloud’s secure infrastructure to maintain data integrity (ALCOA+ principles) across the product lifecycle. This system ensures that every batch, specifically those within the **GLUC-2025-XXX** series, meets the predetermined specifications for identity, strength, quality, and purity.

#### 2.0 QUALITY POLICY AND GOVERNANCE
The Quality Policy at the South San Francisco (SSF) facility (3000 Innovation Drive) is established by Executive Management and disseminated to all levels of the organization.

##### 2.1 Management Responsibility
The Quality Council, chaired by the Head of Quality and the Site Head, meets on a monthly basis to review the following Key Performance Indicators (KPIs):
*   **Metric 1:** Deviation closure rates (Target: >90% within 30 days).
*   **Metric 2:** CAPA effectiveness (Target: <5% recurrence rate).
*   **Metric 3:** Environmental Monitoring (EM) trends in Grade A/B zones.
*   **Metric 4:** Training compliance (Target: 100% for critical tasks).

##### 2.2 Table: Quality Governance Structure
| Role | Responsibility | Authority Level |
| :--- | :--- | :--- |
| **Site Head** | Overall site compliance and resource allocation | Final Site Approval |
| **Head of Quality** | Final batch disposition and regulatory liaison | Release Authority |
| **QA Operations Manager** | Real-time floor oversight and deviation management | Initial Deviation Approval |
| **QC Director** | Analytical testing, method validation, and stability | Data Integrity Lead |
| **Validation Lead** | Equipment, process, and cleaning validation | Protocol Approval |

---

#### 3.0 DOCUMENTATION AND DATA INTEGRITY (ALCOA+)
GHS employs the **Google Cloud Life Sciences Document Management System (GCLS-DMS)**. This system is validated under 21 CFR Part 11 and Annex 11.

##### 3.1 Data Integrity Controls
All analytical instruments (e.g., Agilent HPLC/UPLC systems used for GLUC-2025-XXX batch analysis) are interfaced with a centralized Laboratory Information Management System (LIMS).
1.  **Attributable:** Every entry is linked to a unique user ID and timestamp via Biometric or SSO login.
2.  **Legible:** Digital records are stored in human-readable formats (PDF/A).
3.  **Contemporaneous:** Data is captured at the moment of generation.
4.  **Original:** Raw metadata (audit trails) are preserved.
5.  **Accurate:** Automated calculations prevent manual transcription errors.

---

#### 4.0 BATCH RECORD REVIEW AND RELEASE PROTOCOL
The release of Glucogen-XR Drug Substance follows a rigorous multi-stage review process. No batch (e.g., **GLUC-2025-001** through **GLUC-2025-500**) can be distributed without the signature of the Qualified Person (QP) or Authorized Quality Lead.

##### 4.1 Step-by-Step Batch Release Procedure (SOP-QA-0098)
1.  **Manufacturing Review:** Production leads review the Electronic Batch Record (eBR) for completeness and signature execution.
2.  **Deviation Audit:** QA verifies that all deviations associated with the batch (e.g., DEV-GLUC-2025-042) are closed and impact assessments are finalized.
3.  **QC Testing Verification:** Results for purity (SEC-HPLC), potency (Cell-based bioassay), and safety (Endotoxin/Bioburden) are verified against specifications.
4.  **Environmental Monitoring (EM) Review:** QA verifies that no Action Level excursions occurred during the aseptic filling or purification windows.
5.  **Final Disposition:** The Quality Head signs the Certificate of Analysis (CoA) and the Certificate of Conformance (CoC).

##### 4.2 Table: Critical Release Specifications for Glucogen-XR
| Parameter | Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual (Ph. Eur. 2.2.1) | Clear to slightly opalescent |
| **Purity (Monomer)** | SEC-HPLC (SOP-QC-441) | ≥ 98.5% |
| **Purity (Related Substances)** | RP-HPLC (SOP-QC-442) | Total Impurities ≤ 1.0% |
| **Potency (GLP-1R Activation)** | Cell-based cAMP Assay | 80% - 120% of Reference Standard |
| **Endotoxin** | LAL (USP <85>) | ≤ 0.5 EU/mg |
| **Bioburden** | Membrane Filtration | ≤ 1 CFU/10 mL |

---

#### 5.0 DEVIATION AND CAPA MANAGEMENT
The GHS QMS utilizes a risk-based approach to deviations. Deviations are categorized as Minor, Major, or Critical based on their potential impact on the Critical Quality Attributes (CQAs) of Glucogen-XR.

##### 5.1 Risk Assessment Matrix (ICH Q9)
The formula for Risk Priority Number (RPN) is applied:
$$RPN = Severity (S) \times Occurrence (O) \times Detectability (D)$$

*   **Critical Deviation (RPN > 100):** Immediate cessation of manufacturing; full investigation required.
*   **Major Deviation (RPN 40-100):** Quality Impact Assessment (QIA) required before batch progression.
*   **Minor Deviation (RPN < 40):** Trending and annual review.

##### 5.2 Table: Representative Deviation Log for Glucogen-XR (2025)
| Deviation ID | Batch Number | Description | Root Cause | CAPA ID |
| :--- | :--- | :--- | :--- | :--- |
| DEV-GLUC-2025-012 | GLUC-2025-003 | Temperature excursion in Bioreactor B-102 (+0.5°C) | Sensor drift | CAPA-2025-004 |
| DEV-GLUC-2025-045 | GLUC-2025-009 | Minor seal leak in Buffer Tank T-404 | Gasket fatigue | CAPA-2025-018 |
| DEV-GLUC-2025-089 | GLUC-2025-015 | HPLC Column pressure spike | Filter failure | CAPA-2025-031 |

---

#### 6.0 CHANGE CONTROL SYSTEM
All changes to the manufacturing process of Glucogen-XR (e.g., changes to the CHO-K1 GS cell line maintenance, scale-up protocols, or analytical methods) are managed via the **Global Change Control (GCC)** procedure.

##### 6.1 Change Control Workflow
1.  **Initiation:** Change requester submits a proposal with justification.
2.  **Impact Assessment:** Subject Matter Experts (SMEs) from Regulatory, Validation, Manufacturing, and QC evaluate the change.
3.  **Implementation Plan:** Detailed steps including re-validation or comparability studies (ICH Q5E).
4.  **Regulatory Filing:** Determination of whether the change requires a Prior Approval Supplement (PAS), CBE-30, or Annual Report.
5.  **Closure:** Verification that all actions are complete and the change is effective.

---

#### 7.0 VENDOR AND RAW MATERIAL MANAGEMENT
GHS maintains a robust Supplier Quality Management program. All raw materials used in the production of Glucogen-XR (e.g., Chemically Defined Media, Protein A resin) are sourced from approved vendors.

##### 7.1 Vendor Qualification Protocol
1.  **Questionnaire:** Initial quality assessment.
2.  **On-site Audit:** Physical inspection of the vendor's manufacturing site.
3.  **Material Qualification:** Testing of three (3) independent lots of the material to confirm COA accuracy.
4.  **Monitoring:** Annual performance review and re-audit every 3 years.

---

#### 8.0 TRAINING AND PERSONNEL COMPETENCY
Personnel involved in the manufacture of Glucogen-XR undergo a mandatory training curriculum.

*   **Foundational Training:** GMP basics, Safety, Data Integrity.
*   **Role-Specific Training:** Aseptic techniques, Bioreactor operation, HPLC software operation.
*   **Gowning Qualification:** Required for all personnel entering Grade A/B zones; involves three consecutive successful gowning cycles with zero microbial growth.

---

#### 9.0 EQUIPMENT CALIBRATION AND MAINTENANCE
All equipment used for Glucogen-XR (e.g., the 2000L Single-Use Bioreactors, Chromeleon Chromatography systems) is tracked in the **Google Assets Cloud (GAC)**.

##### 9.1 Calibration Schedule
*   **Critical Sensors (Temp, pH, dO2):** Every 6 months.
*   **Balances/Scales:** Daily calibration check; full calibration every 12 months.
*   **Pressure Gauges:** Every 12 months.

---

#### 10.0 QUALITY RISK MANAGEMENT (QRM)
GHS applies QRM throughout the product lifecycle of Glucogen-XR to identify, evaluate, and control risks to quality.

##### 10.1 Failure Mode and Effects Analysis (FMEA) for Glucogen-XR Purification
| Process Step | Potential Failure Mode | Potential Effect | Prevention Control |
| :--- | :--- | :--- | :--- |
| **Protein A Capture** | Resin Degradation | Reduced yield/Leached Protein A | Resin lifetime studies; cycle counting |
| **Viral Filtration** | Membrane Breach | Viral contamination | Pre- and Post-use Integrity Testing (SOP-VAL-702) |
| **Ultrafiltration** | Aggregation | Increase in HMW species | Controlled shear rates; Optimized pH/conductivity |

---

#### 11.0 INTERNAL AUDIT AND SELF-INSPECTION
The Internal Audit team, independent of production, conducts bi-annual inspections of the South San Francisco facility. These audits cover all modules of the QMS, ensuring the facility remains in a "state of control" for the production of Glucogen-XR.

*   **Focus Areas:** Logbook entries, cleaning records for GLUC-2025-XXX batches, and adherence to USP <1058> for analytical instrument qualification.

---

#### 12.0 REFERENCES
1.  **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
2.  **ICH Q10:** Pharmaceutical Quality System.
3.  **21 CFR Part 211:** Current Good Manufacturing Practice for Finished Pharmaceuticals.
4.  **USP <1058>:** Analytical Instrument Qualification.
5.  **GHS-SOP-QA-001:** Corporate Quality Manual.

---
**[END OF SUBSECTION]**

---

# Manufacturing Process Flow Diagram

## Process Overview from Cell Bank to Bulk Drug Substance

# MODULE 3: QUALITY (BIOLOGIC DRUG SUBSTANCE)
## SECTION 3.2.S.2.2: MANUFACTURING PROCESS AND CONTROLS
### SUBSECTION: PROCESS OVERVIEW FROM CELL BANK TO BULK DRUG SUBSTANCE

---

#### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive technical description of the manufacturing process for **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced by **Google Health Sciences (GHS)**. The process described herein encompasses the entirety of the production cycle, beginning from the thaw of the **Master Cell Bank (MCB)** or **Working Cell Bank (WCB)** through to the formulation and storage of the **Bulk Drug Substance (BDS)**.

The manufacturing process is executed at the GHS Biologics Facility located at **3000 Innovation Drive, South San Francisco, CA**. The process utilizes the proprietary **GHS-CHO-001** cell line, a CHO-K1 derivative optimized for high-titer peptide fusion protein expression via a Glutamine Synthetase (GS) knockout selection system.

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The manufacturing process for Glucogen-XR is designed, validated, and operated in strict accordance with the following regulatory frameworks:
*   **ICH Q5A(R1):** Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin.
*   **ICH Q5B:** Analysis of the Expression Construct in Cells Used for Production of r-DNA Derived Protein Products.
*   **ICH Q5D:** Derivation and Characterisation of Cell Substrates Used for Production of Biotechnological/Biological Products.
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
*   **21 CFR Part 210/211:** Current Good Manufacturing Practice (cGMP).

---

#### 3.0 PROCESS FLOW OVERVIEW
The Glucogen-XR manufacturing process is divided into three primary functional areas:
1.  **Upstream Processing (USP):** Cell culture expansion and production in a 2,000L Single-Use Bioreactor (SUB).
2.  **Downstream Processing (DSP):** Harvest, purification, and viral clearance.
3.  **Modification and Formulation:** Site-specific conjugation for extended-release properties and final bulk filtration.

##### Table 1: Summary of Unit Operations for Glucogen-XR (Batch Series GLUC-2025-XXX)

| Stage | Unit Operation | Equipment ID | Key Objective | Primary Control Parameter |
| :--- | :--- | :--- | :--- | :--- |
| **USP 1** | Vial Thaw & Inoculum (N-4) | INC-001 | Initiation of growth | Viable Cell Density (VCD) |
| **USP 2** | Seed Train Expansion (N-3 to N-1) | SUB-050, SUB-250 | Biomass accumulation | Doubling Time (td) |
| **USP 3** | Production Bioreactor (N) | SUB-2000-01 | Glucapeptide expression | Metabolite Profiles (Glc/Lac) |
| **DSP 1** | Harvest (Centrifugation/Depth) | SEP-101 / FIL-202 | Cell removal | Turbidity (NTU) |
| **DSP 2** | Protein A Capture | COL-301 | Primary purification | Yield / HCP Reduction |
| **DSP 3** | Viral Inactivation (Low pH) | TNK-405 | Pathogen safety | pH / Residence Time |
| **DSP 4** | Cation Exchange (CEX) | COL-501 | Aggregate removal | Purity (SEC-HPLC) |
| **DSP 5** | Anion Exchange (AEX) | COL-601 | Viral/DNA removal | DNA Clearance (qPCR) |
| **DSP 6** | Viral Filtration (VF) | FIL-705 | Size-based clearance | Log Reduction Value (LRV) |
| **DSP 7** | Ultrafiltration/Diafiltration (UF/DF) | TFF-801 | Concentration/Buffer exchange | Target Concentration (mg/mL) |
| **MOD 1** | Site-Specific Conjugation | TNK-901 | Extended-release modification | Conjugation Efficiency (%) |
| **BDS** | Final Formulation & Fill | FILL-001 | Storage stability | pH / Osmolality / Appearance |

---

#### 4.0 DETAILED UPSTREAM PROCESS (USP) PROTOCOLS

##### 4.1 Stage 1: Vial Thaw and Initial Expansion (N-4)
The process initiates with the retrieval of one cryovial (1.0 mL) from the Working Cell Bank (WCB-GHS-CHO-001) stored in the vapor phase of liquid nitrogen ($\leq -150^\circ C$).

*   **Procedure USP-01:** The vial is thawed in a $37.0^\circ C \pm 0.5^\circ C$ water bath (WB-102) for exactly 120 seconds. The cells are transferred into 10 mL of pre-warmed **GHS-Media-V1** (chemically defined, animal-derived component-free).
*   **Inoculation:** Cells are seeded into a 125 mL Erlenmeyer shake flask at a target VCD of $0.5 \times 10^6$ cells/mL.
*   **Incubation Parameters:**
    *   Temperature: $36.5^\circ C$
    *   $CO_2$: 5.0%
    *   Agitation: 120 RPM (19mm throw)
    *   Humidity: 80%

##### 4.2 Stage 2: Seed Train Expansion (N-3 to N-1)
Expansion continues through progressively larger volumes to generate sufficient biomass for the 2,000L production scale.

*   **N-3 Stage:** 1L Shake Flask. Duration: 72 hours. Target VCD: $>4.0 \times 10^6$ cells/mL.
*   **N-2 Stage:** 50L Single-Use Bioreactor (SUB-050).
    *   *pH Control:* 7.00 ± 0.10 (via $CO_2$ sparge and $Na_2CO_3$ addition).
    *   *DO Control:* 40% of air saturation (via $O_2$ sparge).
*   **N-1 Stage:** 250L Single-Use Bioreactor (SUB-250).
    *   This stage utilizes a "Perfusion-Lite" strategy to achieve ultra-high densities ($>20 \times 10^6$ cells/mL) prior to inoculating the N-stage.

##### 4.3 Stage 3: Production Bioreactor (N-Stage)
The production of Glucapeptide occurs in the SUB-2000. This is a 14-day fed-batch process.

*   **Feed Strategy:** Bolus additions of **GHS-Feed-A** (Day 3, 5, 7, 9, 11) and **GHS-Feed-B** (Day 3, 7, 11).
*   **Temperature Shift:** On Day 5, the temperature is shifted from $36.5^\circ C$ to $33.0^\circ C$ to enhance protein folding and minimize cell-specific waste production.
*   **Analytical Control:** Daily sampling for Glucose, Lactate, Glutamine, Ammonia, and Osmolality using the BioProfile® FLEX2.

**Calculation of Specific Productivity ($q_p$):**
$$q_p = \frac{P_2 - P_1}{\int_{t_1}^{t_2} X dt}$$
Where $P$ is product concentration and $X$ is viable cell density. Target $q_p$ for Batch GLUC-2025-001: $>25$ pg/cell/day.

---

#### 5.0 DETAILED DOWNSTREAM PROCESS (DSP) PROTOCOLS

##### 5.1 Harvest and Clarification (DSP 1)
The harvest process utilizes a two-stage approach to remove cells and debris while maintaining the integrity of the Glucapeptide.
1.  **Centrifugation:** Continuous flow centrifugation (10,000 x g) to remove $>95\%$ of biomass.
2.  **Depth Filtration:** Utilization of Millistak+® Pod filters (D0HC and X0HC grades) to achieve a final turbidity of $<10$ NTU.

##### 5.2 Protein A Affinity Chromatography (DSP 2)
As the Glucapeptide contains an Fc-fusion moiety, MabSelect PrismA™ resin is utilized for primary capture.
*   **Binding Buffer:** 20 mM Sodium Phosphate, 150 mM NaCl, pH 7.2.
*   **Elution Buffer:** 50 mM Sodium Acetate, pH 3.4.
*   **Control Limit:** Step yield must be $\geq 90\%$.

##### 5.3 Viral Inactivation (DSP 3)
The Protein A eluate is adjusted to pH $3.50 \pm 0.05$ using 1M Phosphoric Acid.
*   **Hold Time:** $60 \pm 5$ minutes.
*   **Temperature:** $20-25^\circ C$.
*   **Neutralization:** pH is adjusted to 5.5 using 1M Tris-base for the subsequent CEX step.

##### 5.4 Polishing Chromatography (DSP 4 & 5)
*   **CEX (Poros XS):** Designed for aggregate removal. Gradient elution (0 to 500 mM NaCl).
*   **AEX (Sartobind Q):** Operated in flow-through mode for DNA and endotoxin clearance.

---

#### 6.0 MODIFICATION AND EXTENDED-RELEASE CONJUGATION (MOD 1)
To achieve the "XR" (Extended Release) properties, the purified Glucapeptide undergoes site-specific PEGylation or lipid-tail conjugation (Batch specific: GLUC-2025-XXX-PEG).

*   **Reaction Protocol:**
    1.  Adjust protein concentration to $10$ mg/mL.
    2.  Add conjugation reagent at a molar ratio of 2:1 (Reagent:Protein).
    3.  Stir at $4^\circ C$ for 4 hours.
    4.  Quench with excess Glycine.
*   **Efficiency:** Target $>98\%$ mono-conjugated species as determined by SEC-HPLC.

---

#### 7.0 BULK DRUG SUBSTANCE (BDS) FORMULATION
The final drug substance is formulated into the clinical buffer:
*   **Composition:** 20 mM Histidine, 140 mM Mannitol, 0.02% Polysorbate 20, pH 6.0.
*   **Final Concentration:** $50$ mg/mL.
*   **Filtration:** Double $0.22 \mu m$ sterile filtration into 10L PETG bottles.
*   **Storage:** $-70^\circ C \pm 10^\circ C$.

---

#### 8.0 BATCH ANALYSIS AND SPECIFICATIONS (REPRESENTATIVE DATA)

##### Table 2: Release Data for Batch GLUC-2025-001 (Example)

| Test Parameter | Method | Specification | Result |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual | Clear to opalescent | Conforms |
| **Purity (SEC)** | HPLC | $\geq 97.0\%$ monomers | 99.2% |
| **Potency** | Cell-based Bioassay | 80% - 125% of Ref | 104% |
| **HCP** | ELISA | $\leq 100$ ppm | 12 ppm |
| **DNA** | qPCR | $\leq 10$ pg/mg | < 1 pg/mg |
| **Endotoxin** | LAL | $\leq 0.5$ EU/mg | < 0.1 EU/mg |
| **Bioburden** | Membrane Filter | $\leq 10$ CFU/100 mL | 0 CFU |

---

#### 9.0 CRITICAL PROCESS PARAMETERS (CPP) AND CRITICAL QUALITY ATTRIBUTES (CQA)
The control strategy for Glucogen-XR is based on the identification of parameters that impact the safety and efficacy of the product.

*   **CPP-01 (Bioreactor pH):** Maintains glycan profile consistency.
*   **CPP-02 (Viral Filtration Pressure):** Ensures validated log reduction values (LRV $>4.0$ for X-MuLV).
*   **CQA-01 (Glycosylation):** Monitored via HILIC-FLD to ensure $G_0F$ and $G_1F$ levels remain within clinical limits.

---

#### 10.0 REFERENCES
1.  Google Health Sciences Standard Operating Procedure (SOP) #GHS-MAN-044: *Operation of 2000L SUB*.
2.  ICH Q11: *Development and Manufacture of Drug Substances*.
3.  USP <85>: *Bacterial Endotoxins Test*.
4.  J. Doe et al., "Optimizing GLP-1 Fusion Protein Expression in CHO Cells," *Journal of Biotechnology*, 2024.

**[END OF SECTION]**

---

## Unit Operations Description

### 3.2.S.2.2. Manufacturing Process and Process Controls (Section: Unit Operations Description)

**Document ID:** GHS-GLUCXR-M3DS-2025-001  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Sponsor:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Manufacturing Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Effective Date:** 24 October 2025  

---

#### 1.0 Introduction to Unit Operations
This section provides a granular, comprehensive description of the unit operations involved in the manufacture of Glucogen-XR drug substance (DS). The manufacturing process utilizes a recombinant CHO-K1 GS knockout derivative (GHS-CHO-001) in a high-density perfusion bioreactor system, followed by a multi-stage downstream purification process designed to ensure high purity, consistent glycosylation patterns, and effective viral clearance. 

The process is divided into three primary stages:
1.  **Upstream Processing (USP):** Inoculum expansion and N-stage production.
2.  **Downstream Processing (DSP) - Capture & Intermediate:** Harvest, Protein A chromatography, and Viral Inactivation.
3.  **Downstream Processing (DSP) - Polishing & Fill:** Multi-modal chromatography, Nanofiltration, and Ultrafiltration/Diafiltration (UF/DF).

---

#### 2.0 Upstream Unit Operations (USP)

##### 2.1 Operation USP-01: Vial Thaw and Initial Expansion
The process commences with the retrieval of a single Working Cell Bank (WCB) vial from vapor-phase liquid nitrogen storage ($T \leq -150^\circ\text{C}$).

*   **Procedure USP-01-A:** The vial (Batch Ref: GLUC-2025-WCB-02) is rapidly thawed in a $37.0^\circ\text{C} \pm 1.0^\circ\text{C}$ water bath for $120 \pm 10$ seconds.
*   **Procedure USP-01-B:** Cells are transferred to $40\text{ mL}$ of pre-warmed GHS-ChemMedia-V1 (chemically defined, animal-derived component-free) in a $125\text{ mL}$ Erlenmeyer shake flask.
*   **Control Parameters:** 
    *   Target Inoculation Density: $0.5 \times 10^6$ viable cells/mL.
    *   Incubation: $36.5^\circ\text{C}$, $5\% \text{ CO}_2$, $120\text{ RPM}$.

##### 2.2 Operation USP-02: Seed Train Expansion (N-4 to N-1)
The expansion phase utilizes progressively larger single-use bioreactors (SUBs) to reach the required biomass for the N-stage production vessel.

| Stage | Vessel Type | Volume (L) | Duration (Days) | Target VCC ($10^6$ cells/mL) | Viability (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| N-4 | Shake Flask | 1.0 | $3 \pm 1$ | $4.5 - 6.0$ | $>98\%$ |
| N-3 | Wave Bioreactor | 10.0 | $3 \pm 1$ | $5.0 - 7.5$ | $>98\%$ |
| N-2 | SUB (Sartorius) | 50.0 | $4 \pm 1$ | $8.0 - 12.0$ | $>95\%$ |
| N-1 | SUB (Sartorius) | 500.0 | $4 \pm 1$ | $10.0 - 15.0$ | $>95\%$ |

**Table 1: Seed Train Operational Specifications for Batch Series GLUC-2025-XXX**

##### 2.3 Operation USP-03: N-Stage Production Bioreactor (2000L)
The production stage utilizes an Xcellerex XDR-2000 system integrated with an Alternating Tangential Flow (ATF-10) filtration system for continuous perfusion-based harvest.

*   **Media:** GHS-Prod-Media-04 (High Glucose, optimized for extended-release peptide folding).
*   **Perfusion Rate Calculation:** 
    $$V_p = P \times V_{vcc} \times CSPR$$
    Where: 
    *   $V_p$ = Perfusion Volume (L/day)
    *   $P$ = Current Bioreactor Volume (2000L)
    *   $CSPR$ = Cell Specific Perfusion Rate ($0.05\text{ nL/cell/day}$)

**Process Control Limits (PCLs):**
1.  **Temperature:** $36.5^\circ\text{C} \pm 0.5^\circ\text{C}$ (Shift to $33.0^\circ\text{C}$ at day 5 to enhance folding).
2.  **pH:** $7.00 \pm 0.10$ via $CO_2$ sparging and $0.5\text{M } NaHCO_3$ addition.
3.  **Dissolved Oxygen (DO):** $40\% \pm 5\%$ air saturation.

---

#### 3.0 Downstream Unit Operations (DSP)

##### 3.1 Operation DSP-01: Clarification and Continuous Harvest
Due to the perfusion nature of the Glucogen-XR process, harvest is continuous from Day 7 to Day 21.

*   **Primary Clarification:** Performed via the ATF-10 system (0.2 µm Polyethersulfone membrane).
*   **Secondary Clarification:** Harvested Cell Culture Fluid (HCCF) is passed through a depth filter (Millistak+ HC Pod) to remove sub-micron cellular debris and DNA.
*   **Storage:** HCCF is chilled to $4^\circ\text{C}$ in $2000\text{L}$ jacketed stainless steel hold tanks (Asset ID: GHS-TAN-09) with the addition of $0.05\%$ ProClin 300 as a preservative.

##### 3.2 Operation DSP-02: Protein A Affinity Chromatography (Capture)
This step selectively captures the glucapeptide fusion protein while removing the bulk of Host Cell Proteins (HCPs) and DNA.

*   **Resin:** MabSelect SuRe (Cytiva).
*   **Column Dimensions:** $60\text{ cm}$ diameter, $20\text{ cm}$ bed height ($56.5\text{ L}$ resin volume).
*   **Protocol DSP-02-P1:**
    1.  **Equilibration:** 5 Column Volumes (CV) of $20\text{mM}$ Sodium Phosphate, $150\text{mM } NaCl$, pH 7.4.
    2.  **Loading:** Target $35\text{ g}$ Glucogen-XR per Liter of resin. Flow rate: $150\text{ cm/hr}$.
    3.  **Wash 1:** 3 CV Equilibration Buffer.
    4.  **Wash 2 (Impurity Removal):** 4 CV of $20\text{mM}$ Citrate, $1\text{M } NaCl$, pH 6.0.
    5.  **Elution:** 3 CV of $50\text{mM}$ Glycine-HCl, pH 3.2.
    6.  **Peak Collection:** Based on $A_{280}$ (Start at $100\text{ mAU}$, stop at $100\text{ mAU}$ on tail).

| Batch Number | Eluate Volume (L) | Concentration (g/L) | Step Yield (%) | Purity (SEC-HPLC) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 168.4 | 12.2 | 94.2% | 97.1% |
| GLUC-2025-002 | 170.1 | 11.9 | 93.8% | 97.3% |
| GLUC-2025-003 | 165.9 | 12.5 | 95.1% | 96.9% |

**Table 2: Protein A Performance Metrics (Clinical Manufacturing Scale)**

##### 3.3 Operation DSP-03: Low pH Viral Inactivation
In accordance with ICH Q5A(R1), the Protein A eluate is subjected to low pH treatment to inactivate enveloped viruses.

*   **Target pH:** $3.50 \pm 0.10$ (adjusted using $1\text{M}$ Phosphoric Acid).
*   **Incubation Time:** $60 - 90\text{ minutes}$ at $20^\circ\text{C} - 25^\circ\text{C}$.
*   **Neutralization:** pH is adjusted to $5.5 \pm 0.2$ using $2\text{M}$ Tris-base prior to the next step.

##### 3.4 Operation DSP-04: Multi-modal (Mixed-Mode) Chromatography
To achieve the high purity required for Type 2 Diabetes maintenance therapy, Capto Adhere (anion exchange + hydrophobic interaction) is used in flow-through mode.

*   **Operating Principle:** Glucogen-XR passes through while high-molecular-weight (HMW) species, DNA, and acidic HCPs bind to the resin.
*   **Buffer:** $50\text{mM}$ Acetate, pH 5.5, $50\text{mM } NaCl$.
*   **Specific Loading:** $\leq 150\text{ mg}$ protein per mL of resin.

---

#### 4.0 Final Formulation and Fill (DSP-05 to DSP-07)

##### 4.1 Operation DSP-05: Viral Filtration (Nanofiltration)
A redundant $20\text{nm}$ Planova BioEX filter is utilized for size-exclusion based viral removal.

*   **Flux Rate:** $25 \pm 5\text{ LMH}$ (Liters per Square Meter per Hour).
*   **Maximum Pressure:** $3.2\text{ bar}$.
*   **Integrity Test:** Forward Flow Test (FFT) performed pre-use and post-use to ensure membrane specifications are met (Limit: $\leq 12.5\text{ mL/min}$).

##### 4.2 Operation DSP-06: Ultrafiltration/Diafiltration (UF/DF)
The purified drug substance is concentrated and diafiltered into the final formulation buffer.

*   **Membrane:** Pellicon 3, $10\text{ kDa}$ MWCO (Ultracel).
*   **Formulation Buffer:** $20\text{mM}$ Histidine, $140\text{mM}$ Mannitol, $0.02\%$ Polysorbate 20, pH 6.2.
*   **Diafiltration Volume:** 10 volume exchanges (10 DV).
*   **Target Final Concentration:** $50\text{ mg/mL} \pm 5\text{ mg/mL}$.

##### 4.3 Operation DSP-07: Final Bulk Fill and Storage
The Drug Substance is filtered through a $0.22\text{ µm}$ sterilizing-grade filter (Millipak) into $10\text{L}$ PETG bottles.

*   **Storage Temperature:** $-70^\circ\text{C}$ (Long-term stability).
*   **Batch Numbering Logic:** GLUC-2025-[Sequential Number]-[Site Code].

---

#### 5.0 Process Analytical Technology (PAT) and Control Strategy
Google Health Sciences employs an "Industry 4.0" approach to the manufacture of Glucogen-XR.

*   **Raman Spectroscopy:** In-line monitoring of glucose, lactate, and glutamine in the 2000L SUB.
*   **Soft Sensors:** Real-time prediction of VCC and product titer based on oxygen uptake rate (OUR) and carbon evolution rate (CER).
*   **Data Integration:** All unit operation data is streamed to the Google Cloud Life Sciences Manufacturing Data Engine for real-time multivariate statistical process control (MSPC).

#### 6.0 Regulatory Compliance and References
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
*   **21 CFR Part 210/211:** Current Good Manufacturing Practice in Manufacturing, Processing, Packing, or Holding of Drugs.

---
**[End of Section 3.2.S.2.2 - Unit Operations Description]**

---

## In-Process Hold Steps

# MODULE 3: QUALITY (3.2.S. DRUG SUBSTANCE)
## SECTION: 3.2.S.2.2. MANUFACTURER(S) - MANUFACTURING PROCESS FLOW
### SUBSECTION: IN-PROCESS HOLD STEPS AND STABILITY PROTOCOLS

---

**Document ID:** GHS-GLUC-M3DS-2.2-IPH  
**Version:** 1.0.4  
**Date:** 14 October 2024  
**Manufacturer:** Google Health Sciences (GHS), South San Francisco, CA  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Process Scale:** 2,000L Fed-Batch Bioreactor (Single-Use Technology)  

---

#### 1.0 SCOPE AND REGULATORY RATIONALE

This subsection defines the validated In-Process Hold (IPH) steps for the manufacture of Glucogen-XR Drug Substance (DS). In accordance with **ICH Q5C (Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products)** and **ICH Q11 (Development and Manufacture of Drug Substances)**, Google Health Sciences has established rigorous hold-time limits to ensure that intermediate process streams maintain critical quality attributes (CQAs), including potency, purity (aggregate levels, truncated species), and microbiological integrity (bioburden and endotoxin).

The Glucogen-XR manufacturing process utilizes an extended-release glucapeptide backbone expressed in the proprietary **GHS-CHO-001** cell line. Due to the inherent susceptibility of peptides to proteolytic degradation and deamidation, hold times are strictly controlled and monitored via high-performance liquid chromatography (HPLC) and mass spectrometry (MS) during process validation (PV) campaigns (e.g., Batches **GLUC-2025-001** through **GLUC-2025-005**).

---

#### 2.0 SUMMARY OF VALIDATED HOLD STEPS

The following table summarizes the maximum allowable hold durations for each unit operation. These limits represent the "Proven Acceptable Ranges" (PAR) validated during Phase III clinical manufacture and subsequent Process Performance Qualification (PPQ).

**Table 2.1: Summary of Validated Hold Times for Glucogen-XR DS Manufacture**

| Process Step | Intermediate Material | Storage Container | Storage Temp (°C) | Max Hold Time |
| :--- | :--- | :--- | :--- | :--- |
| **Upstream** | | | | |
| Post-Clarification | Clarified Harvest (CH) | 2000L SUS Bag | 2–8°C | 72 Hours |
| **Downstream (Capture)** | | | | |
| Post-Protein A Elution | Protein A Eluate (PAE) | 500L SUS Bag | 15–25°C | 24 Hours |
| Low pH Viral Inactivation | VI Pool | Stainless Steel Tank | 15–25°C | 120 Minutes |
| Post-Neutralization | Neutralized Pool | 500L SUS Bag | 2–8°C | 48 Hours |
| **Downstream (Intermediate)** | | | | |
| Post-CEX Chromatography | CEX Eluate Pool | 500L SUS Bag | 2–8°C | 96 Hours |
| Post-AEX Flow-through | AEX Pool | 500L SUS Bag | 2–8°C | 72 Hours |
| **Polishing & Viral Filtration** | | | | |
| Post-Nanofiltration | VF Pool | 200L SUS Bag | 2–8°C | 48 Hours |
| **Formulation** | | | | |
| Pre-UF/DF (Concentrated) | UF/DF Retentate | 100L SUS Bag | 2–8°C | 24 Hours |
| **Final DS** | | | | |
| Bulk Drug Substance | Final DS | 20L Fluoropolymer | -70°C | 36 Months |

---

#### 3.0 DETAILED STEP-BY-STEP HOLD PROTOCOLS

##### 3.1 Clarified Harvest (CH) Hold Step
*Step ID: IPH-DS-01*

The clarified harvest, obtained via depth filtration and 0.22 µm membrane filtration of the 2,000L bioreactor culture, is collected in a chilled, single-use storage system.

**3.1.1 Control Parameters and Specifications:**
*   **Target Temperature:** 5°C ± 3°C.
*   **Microbiological Monitoring:** Bioburden testing performed at the start (T=0) and end (T=72h) of the hold.
*   **Stability Indicators:** Glucapeptide monomer percentage (SE-HPLC) must remain >95.0%.

**3.1.2 Procedural Logic:**
The hold time is calculated from the completion of the 0.22 µm filtration (Time 0) to the initiation of the Protein A Chromatography loading (Time End).

**Table 3.1: Hold Time Validation Data (Batch GLUC-2025-001)**
| Timepoint (Hours) | Temp (°C) | Purity (%) | Bioburden (CFU/10mL) | Endotoxin (EU/mL) |
| :--- | :--- | :--- | :--- | :--- |
| 0 (Initial) | 4.8 | 98.7 | <1 | <0.05 |
| 24 | 5.1 | 98.6 | NT | NT |
| 48 | 4.9 | 98.4 | NT | NT |
| 72 (Limit) | 5.2 | 98.2 | <1 | <0.05 |

---

##### 3.2 Post-Protein A Eluate (PAE) and Viral Inactivation (VI) Hold
*Step ID: IPH-DS-02*

The Protein A eluate is inherently acidic (pH 3.5 - 3.8). While this pH is conducive to viral inactivation, prolonged exposure can lead to peptide hydrolysis.

**3.2.1 Viral Inactivation (VI) Critical Hold:**
*   **pH Target:** 3.60 ± 0.10 (Adjusted with 1M Acetic Acid).
*   **Duration:** Minimum 60 minutes, Maximum 120 minutes.
*   **Note:** If the hold exceeds 120 minutes, the batch is subject to a Non-Conformance Report (NCR) due to potential degradation of the GLP-1 receptor-binding domain.

**3.2.2 Post-Neutralization Hold:**
Once neutralized to pH 5.5 using 1M Tris-HCl, the pool is moved to 2–8°C storage. This hold allows for flexibility in downstream scheduling (CEX scheduling).

**Calculation of Cumulative Exposure:**
The cumulative time at ambient temperature (15–25°C) from Elution start to the completion of Neutralization must not exceed 6 hours.

---

##### 3.3 Cation Exchange (CEX) Eluate Hold
*Step ID: IPH-DS-03*

The CEX step removes truncated variants and Host Cell Proteins (HCPs). The eluate is a high-salt buffer (approx. 250mM NaCl).

**3.3.1 Technical Specification:**
*   **Container:** Single-use 2D or 3D bag (LDPE contact layer).
*   **Light Protection:** Required (Glucapeptide-XR is light-sensitive in diluted eluate states).
*   **Analytical Verification:**
    *   **RP-HPLC:** Monitor for Oxidized Species (Max increase permitted: 0.5% over 96 hours).
    *   **Charge Variants (CEX-HPLC):** Monitor for Deamidation (Max increase permitted: 0.8% over 96 hours).

---

#### 4.0 MICROBIOLOGICAL CONTROL STRATEGY DURING HOLDS

To comply with **USP <1111>** and **FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing**, all hold steps involving intermediate pools are subjected to "Worst Case" microbial challenge studies during process development.

**4.1 Bioburden and Endotoxin Limits:**
*   **Action Limit (Bioburden):** 5 CFU/100 mL.
*   **Alert Limit (Bioburden):** 2 CFU/100 mL.
*   **Endotoxin Limit:** ≤ 0.5 EU/mL.

**4.2 Sampling Procedure (SOP-GHS-0098):**
1.  Equilibrate the storage bag for 5 minutes via gentle agitation (if applicable).
2.  Purge the sampling manifold with 50 mL of intermediate.
3.  Collect 100 mL into a sterile, pyrogen-free PETG bottle.
4.  Transport to Quality Control (QC) Microbiology under 2–8°C conditions.

---

#### 5.0 IMPACT OF TEMPERATURE EXCURSIONS

In the event that an In-Process Hold temperature exceeds the specified range (e.g., 2–8°C range is breached to 12°C), the following "Stability Impact Assessment" (SIA) protocol is initiated:

**Equation 5.1: Arrhenius Degradation Projection**
$$k = A e^{-E_a / RT}$$
Where:
*   $k$ = rate constant for deamidation/aggregation.
*   $E_a$ = Activation energy determined during forced degradation studies (approx. 85 kJ/mol for Glucogen-XR).
*   $R$ = Universal gas constant.
*   $T$ = Actual excursion temperature in Kelvin.

If the calculated "Lost Shelf Life Equivalent" exceeds 48 hours, the intermediate pool is subjected to mandatory purity testing via LC-MS/MS (Multi-Attribute Method) before proceeding to the next unit operation.

---

#### 6.0 EQUIPMENT AND MATERIALS LIST

| Equipment ID | Description | Qualification Status |
| :--- | :--- | :--- |
| **GHS-REF-902** | Walk-in Cold Room (Downstream) | Validated (IQ/OQ/PQ) |
| **GHS-SUS-044** | 500L Jacketed Stainless Steel Hold Tank | Validated (Clean-in-Place) |
| **GHS-SEN-551** | Wireless Temperature Logger (NIST Traceable) | Calibrated (Annual) |
| **GHS-BAG-SUT** | Gamma-Irradiated SUS Assembly | Sterility Certified |

---

#### 7.0 REFERENCES
1.  **ICH Q5A(R1):** Viral Safety Evaluation of Biotechnology Products.
2.  **USP <1211>:** Sterilization and Sterility Assurance of Compendial Articles.
3.  **GHS-RPT-2024-012:** Glucogen-XR Hold Time Validation Summary Report (Batches 001-003).
4.  **FDA 21 CFR Part 211:** Current Good Manufacturing Practice for Finished Pharmaceuticals.

---
**End of Subsection.**
*Confidential - Google Health Sciences Internal Regulatory Submission Material*

---

# Cell Culture and Fermentation

## Inoculum Preparation

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2: MANUFACTURE
### SUBSECTION: 3.2.S.2.2.3.1 INOCULUM PREPARATION AND EXPANSION

---

#### 1.0 SCOPE AND OBJECTIVE
This section delineates the comprehensive process for the expansion of the Google Health Sciences (GHS) proprietary CHO-K1 GS knockout derivative cell line (GHS-CHO-001) expressing the Glucogen-XR (glucapeptide extended-release) recombinant protein. The inoculum preparation process (Upstream Stage 1) encompasses the transition from the Working Cell Bank (WCB) cryogenic storage through a series of progressive expansion stages (N-x to N-1) designed to achieve the requisite biomass and metabolic state for inoculation of the 2,000L Production Bioreactor.

The primary objective of the inoculum expansion phase is to ensure consistent, robust, and sterile generation of a cell population characterized by high viability (>95%), exponential growth kinetics, and defined metabolic profiles, thereby minimizing lag phases and ensuring batch-to-batch reproducibility in the final production stage.

---

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The procedures described herein are developed, validated, and executed in strict accordance with the following regulatory frameworks and international standards:

*   **ICH Q5A (R2):** Quality of Biotechnological Products: Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin.
*   **ICH Q5B:** Quality of Biotechnological Products: Analysis of the Expression Construct in Cells Used for Production of R-DNA Derived Protein Products.
*   **ICH Q5D:** Derivation and Characterization of Cell Substrates Used for Production of Biotechnological/Biological Products.
*   **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
*   **USP <1223>:** Validation of Alternative Microbiological Methods.
*   **FDA Guidance for Industry:** Characterization and Qualification of Cell Substrates and Other Biological Materials Used in the Production of Viral Vaccines for Infectious Disease Indications (2010).

---

#### 3.0 FACILITIES AND EQUIPMENT SPECIFICATIONS
All inoculum preparation activities are conducted within Grade B cleanroom environments (ISO 5 localized protection for open manipulations) at the Google Health Sciences facility located at 3000 Innovation Drive, South San Francisco, CA.

##### Table 3.1: Critical Equipment List for Inoculum Expansion
| Equipment ID | Description | Manufacturer | Model | Capacity/Range |
| :--- | :--- | :--- | :--- | :--- |
| **INC-2001** | CO2 Incubator (Water Jacketed) | Thermo Fisher | Heracell™ VIOS 160i | 165 L / 0-20% CO2 |
| **BSC-3044** | Biological Safety Cabinet (Class II) | NuAire | LabGard ES NU-540 | 4 ft. Width |
| **SHK-4005** | Orbital Shaker (CO2 Resistant) | Infors HT | Multitron Cell | 25mm Orbit / 20-400 RPM |
| **BIO-5010** | Single-Use Bioreactor (SUB) - 10L | Sartorius | Biostat® RM 20 | 2L - 10L Working Volume |
| **BIO-5050** | Single-Use Bioreactor (SUB) - 50L | Thermo Fisher | HyPerforma™ S.U.B. | 10L - 50L Working Volume |
| **BIO-5200** | Single-Use Bioreactor (SUB) - 200L | Thermo Fisher | HyPerforma™ S.U.B. | 40L - 200L Working Volume |
| **CTR-6001** | Automated Cell Counter | Beckman Coulter | Vi-CELL™ BLU | 0.5 - 15.0 x 10^6 cells/mL |
| **ANA-7002** | Bio-Profile Metabolic Analyzer | Nova Biomedical | BioProfile® FLEX2 | pH, pO2, pCO2, Gluc, Lac, Gln |

---

#### 4.0 RAW MATERIALS AND CULTURE MEDIA
The Glucogen-XR process utilizes a chemically defined, animal-derived component-free (ADCF) media platform. No serum or raw materials of bovine/porcine origin are utilized in the expansion process, significantly mitigating the risk of adventitious agent contamination.

##### 4.1 Media Composition
*   **Basal Media (GHS-BM-102):** A proprietary, chemically defined formulation containing amino acids, vitamins, trace elements, and glucose.
*   **Selective Agent:** L-Methionine sulfoximine (MSX) is utilized only in the initial expansion stages (Thaw through N-3) to maintain selective pressure, although the GS-knockout line exhibits high stability.
*   **Anti-foaming Agent:** Dow Corning Q7-2243 LVA (Simethicone emulsion) added as required in SUB stages.

##### Table 4.2: Media and Buffer Quality Specifications
| Material Code | Description | Function | Grade | Storage |
| :--- | :--- | :--- | :--- | :--- |
| **MED-GLUC-01** | GHS-CD-Growth Media | Cell Expansion | GMP / CD | 2-8°C |
| **BUF-PBS-02** | Phosphate Buffered Saline | Washing/Dilution | USP/EP | 15-25°C |
| **MSX-001** | L-Methionine sulfoximine | Selective Pressure | Pharma Grade | -20°C |

---

#### 5.0 STEP-BY-STEP OPERATIONAL PROTOCOL

##### 5.1 Stage 1: Thawing and Initial Seeding (Vial Thaw)
A single vial of the Glucogen-XR WCB (Batch Ref: WCB-GHS-CHO-001-2024) is retrieved from the vapor phase of liquid nitrogen (LN2).

1.  **Verification:** Verify vial label against the Batch Production Record (BPR) for Batch GLUC-2025-XXX.
2.  **Thawing:** The vial (containing 1.5 mL of 20 x 10^6 cells/mL) is placed in a 37°C ± 1°C water bath for 120 ± 10 seconds until only a small ice crystal remains.
3.  **Transfer:** Under ISO 5 conditions, the cell suspension is transferred dropwise into 20 mL of pre-warmed GHS-CD-Growth Media (MED-GLUC-01) in a 50 mL sterile conical tube.
4.  **Centrifugation:** The suspension is centrifuged at 200 x g for 5 minutes to remove cryoprotectant (DMSO).
5.  **Resuspension:** The cell pellet is resuspended in 30 mL of fresh media and transferred to a 125 mL Erlenmeyer shake flask (Stage N-5).

##### 5.2 Stage 2: Flask Expansion (N-5 to N-3)
The expansion is conducted in a series of disposable polycarbonate shake flasks with vented caps.

*   **Incubation Parameters:**
    *   Temperature: 37.0°C ± 0.5°C
    *   CO2: 5.0% ± 0.5%
    *   Agitation: 120 RPM (25mm orbit)
    *   Humidity: 80% ± 5%

*   **Passage Logic:** Cells are passaged every 72 ± 4 hours. The target seeding density for all flask stages is 0.3 x 10^6 viable cells/mL.

##### Table 5.3: Flask Expansion Sequence
| Stage | Vessel Type | Working Volume | Target VCD (x10^6 cells/mL) | Min. Viability |
| :--- | :--- | :--- | :--- | :--- |
| **N-5** | 125 mL Shake Flask | 30 mL | > 2.5 | > 95% |
| **N-4** | 500 mL Shake Flask | 150 mL | > 3.0 | > 95% |
| **N-3** | 2L Shake Flask | 600 mL | > 3.5 | > 95% |

##### 5.3 Stage 3: Single-Use Bioreactor Expansion (N-2 and N-1)
Once sufficient biomass is achieved in the N-3 stage, the culture is transitioned to Wave-mixed and Stirred-Tank Single-Use Bioreactors (SUBs).

**Stage N-2 (10L Biostat RM):**
*   **Inoculation:** 600 mL from N-3 flask is transferred into 5.4L of media in the 10L RM Bag.
*   **Control Parameters:**
    *   Rocking Angle: 6°
    *   Rocking Rate: 22 rocks/min
    *   Gas Flow (Air/CO2): 0.1 vvm
    *   Dissolved Oxygen (DO): 40% (via headspace aeration)

**Stage N-1 (50L/200L SUB):**
The N-1 stage is the final expansion step before the 2,000L Production Bioreactor.
*   **Seeding Density:** 0.5 x 10^6 cells/mL.
*   **Feeding:** No feeding is performed during the N-1 stage to maintain the cells in an exponential growth phase.
*   **Duration:** 72 - 96 hours.

---

#### 6.0 PROCESS ANALYTICAL TECHNOLOGY (PAT) AND IN-PROCESS CONTROLS (IPC)
The following parameters are monitored and recorded at every passage to ensure the quality of the inoculum.

##### Table 6.1: In-Process Control Specifications for Inoculum Expansion
| Parameter | Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Viable Cell Density (VCD)** | Automated (Vi-CELL) | 0.3 - 6.0 x 10^6 cells/mL (Stage dependent) |
| **Viability** | Trypan Blue Exclusion | ≥ 95.0% |
| **Cell Morphology** | Microscopic | Spherical, non-clumping, consistent size |
| **pH** | Potentiometric | 6.80 - 7.20 |
| **Glucose Consumption** | Enzymatic/Amperometric | 2.0 - 5.0 g/L residual |
| **Lactate Production** | Enzymatic/Amperometric | < 2.0 g/L |
| **Sterility/Bioburden** | USP <71> (Modified) | No growth (7-day rapid test) |
| **Mycoplasma** | PCR (Rapid) | Negative |

---

#### 7.0 CALCULATIONS AND KINETICS
The metabolic fitness of the Glucogen-XR inoculum is assessed using the following calculations:

**1. Specific Growth Rate ($\mu$):**
$$\mu = \frac{\ln(VCD_{final}) - \ln(VCD_{initial})}{t_{final} - t_{initial}}$$
*Acceptable Range: 0.025 - 0.035 $h^{-1}$*

**2. Population Doubling Time (PDT):**
$$PDT = \frac{\ln(2)}{\mu}$$
*Acceptable Range: 20 - 28 hours*

---

#### 8.0 REPRESENTATIVE BATCH DATA (GLUC-2025-001 TO GLUC-2025-003)
The following data represents the consistency of the inoculum preparation across the three most recent GMP validation runs.

##### Table 8.1: N-1 Stage Performance Summary
| Batch Number | Duration (h) | Final VCD (x10^6/mL) | Final Viability (%) | Final pH | Lactate (g/L) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 72.5 | 5.42 | 98.8 | 7.02 | 1.12 |
| **GLUC-2025-002** | 74.0 | 5.28 | 99.1 | 6.98 | 1.05 |
| **GLUC-2025-003** | 71.8 | 5.55 | 98.5 | 7.05 | 1.18 |
| **Mean** | **72.8** | **5.42** | **98.8** | **7.02** | **1.12** |
| **% RSD** | **1.5%** | **2.5%** | **0.3%** | **0.5%** | **5.8%** |

---

#### 9.0 CONTINGENCY AND OUT-OF-SPECIFICATION (OOS) PROCEDURES
In the event that an inoculum stage fails to meet the viability ( <95%) or VCD criteria, the following actions are mandated:
1.  **Immediate Halt:** The expansion is suspended.
2.  **Investigation:** Root Cause Analysis (RCA) is initiated per SOP-QA-004.
3.  **Back-up Thaw:** A secondary vial from the WCB may be thawed if the primary expansion is deemed non-viable or contaminated.
4.  **Extended Culture:** If VCD is low but viability is >98%, the culture may be extended by a maximum of 24 hours upon Quality Assurance (QA) approval.

---

#### 10.0 CONCLUSION
The inoculum preparation process for Glucogen-XR is a highly controlled, robust procedure that ensures the delivery of a high-quality cell substrate to the Production Bioreactor. The use of chemically defined media, single-use technology, and stringent in-process controls guarantees the safety, purity, and potency of the final glucapeptide product.

---
**END OF SECTION 3.2.S.2.2.3.1**

---

## Seed Train Expansion

### 3.2.S.2.2.3 Seed Train Expansion

This section provides an exhaustive technical description of the seed train expansion process for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences. The seed train process is designed to ensure the robust, reproducible, and aseptic expansion of the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line from the Working Cell Bank (WCB) to the final inoculum volume required for the 2,000L Production Bioreactor (PBR).

All operations described herein are conducted in accordance with Current Good Manufacturing Practices (cGMP) and are subject to the controls outlined in the Site Master File (SMF) for the South San Francisco facility (FEI: 3000-GHS-CA).

---

#### 3.2.S.2.2.3.1 Process Overview and Rationale

The seed train expansion for Glucogen-XR utilizes a chemically defined, animal-derived component-free (ADCF) medium system (GHS-CDM-04). The expansion strategy employs a logarithmic growth phase maintenance approach, ensuring that cells remain in the exponential growth phase ($log_{10}$ phase) with viability consistently $>98\%$.

The process flow consists of:
1.  **Thaw and Initial Culture (N-6):** Disposable Erlenmeyer flasks (125 mL).
2.  **Flask Expansion (N-5 to N-4):** Increasing volumes of disposable vented-cap Erlenmeyer flasks (500 mL to 3L).
3.  **Wave Bioreactor Expansion (N-3):** Disposable bag technology (20L Wave).
4.  **Seed Bioreactor Expansion (N-2 to N-1):** Stainless steel stirred-tank reactors (STB-100 and STB-500).

**Table 3.2.S.2.2.3-1: Summary of Seed Train Expansion Stages**

| Stage | Vessel Type | Working Volume (L) | Duration (Days) | Targeted VCD ($10^6$ cells/mL) | Viability Target (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Thaw (N-6)** | 125 mL Flask | 0.030 | 3 ± 1 | 2.5 - 4.5 | $\ge 95.0$ |
| **Exp. 1 (N-5)** | 500 mL Flask | 0.150 | 3 ± 1 | 3.0 - 5.5 | $\ge 97.0$ |
| **Exp. 2 (N-4)** | 3L Flask | 1.000 | 3 ± 1 | 3.5 - 6.0 | $\ge 98.0$ |
| **Wave (N-3)** | 20L Bag | 10.00 | 3 ± 1 | 4.0 - 7.0 | $\ge 98.0$ |
| **STB-100 (N-2)** | 100L SS Reactor | 70.00 | 3 ± 1 | 4.5 - 8.0 | $\ge 98.0$ |
| **STB-500 (N-1)** | 500L SS Reactor | 400.0 | 3 ± 1 | 5.0 - 10.0 | $\ge 98.0$ |

---

#### 3.2.S.2.2.3.2 Equipment and Materials Specifications

The expansion utilizes the Google Cloud Life Sciences "Smart-Manufacture" suite, integrating real-time telemetry from the bioreactor controllers into the Vertex AI-driven process monitoring system.

**Equipment List:**
*   **Incubator (N-6 to N-4):** Thermo Heracell™ VIOS 160i, $CO_2$ incubator, set at $36.5^{\circ}C$, $5.0\% CO_2$.
*   **Shaker Platform:** Infors HT Multitron with 25mm orbit.
*   **Wave System (N-3):** Xuri™ Cell Expansion System W25.
*   **Seed Bioreactors (N-2, N-1):** ABEC Custom Stainless Steel Stirred-Tank Bioreactors equipped with Emerson DeltaV™ control systems.

**Raw Materials:**
*   **Basal Medium:** GHS-CDM-04 (Proprietary Google Formulation).
*   **Supplement A:** 200mM L-Glutamine (USP Grade).
*   **Antifoam:** Dow Corning Antifoam C (Medical Grade).
*   **Base:** 7.5% $NaHCO_3$ for pH adjustment (automated delivery).

---

#### 3.2.S.2.2.3.3 Detailed Step-by-Step Procedure

##### Step 1: Vials Thaw and Inoculation (N-6)
A single vial from the WCB (Batch: WCB-GHS-002-2024) is retrieved from vapor-phase liquid nitrogen storage.
1.  **Verification:** Confirm vial ID and location via the LIMS (Laboratory Information Management System).
2.  **Thawing:** The vial is placed in a $37.0^{\circ}C \pm 0.5^{\circ}C$ water bath for $120 \pm 10$ seconds.
3.  **Inoculation:** Under a Grade A laminar flow hood, the contents (1.0 mL) are transferred into 29.0 mL of pre-warmed GHS-CDM-04 medium in a 125 mL Erlenmeyer flask.
4.  **Initial Density:** Target $0.3 - 0.5 \times 10^6$ viable cells/mL.

##### Step 2: Sequential Flask Expansion (N-5 to N-4)
Expansion is performed when the Viable Cell Density (VCD) meets the criteria defined in Table 3.2.S.2.2.3-1.
*   **Dilution Ratio:** Typically 1:4 to 1:6.
*   **Calculation for Inoculum Volume ($V_i$):**
    $$V_i = \frac{V_t \times C_t}{C_s}$$
    Where:
    *   $V_t$ = Total target volume (mL)
    *   $C_t$ = Target concentration ($10^6$ cells/mL)
    *   $C_s$ = Seed concentration (current flask VCD)

##### Step 3: Wave Bioreactor (N-3) Operation
The N-3 stage transitions the culture to a 20L disposable Wave bag.
*   **Rocking Angle:** $6^{\circ}$ to $10^{\circ}$ (ramped based on VCD).
*   **Rocking Speed:** 15-25 RPM.
*   **Aeration:** $O_2$ enrichment enabled via PID control when $DO < 40\%$.

##### Step 4: Seed Bioreactor N-2 (100L) and N-1 (500L)
The transition to stainless steel vessels involves rigorous CIP (Clean-in-Place) and SIP (Steam-in-Place) protocols.
*   **Agitation:** PBT (Pitched Blade Turbine) impellers, Power Input per Volume ($P/V$) maintained at $15 W/m^3$.
*   **pH Control:** Deadband of $7.00 \pm 0.05$ using $CO_2$ (acid) and $NaHCO_3$ (base).
*   **Temperature:** $36.5^{\circ}C \pm 0.2^{\circ}C$.

---

#### 3.2.S.2.2.3.4 Representative Batch Data (Seed Train Performance)

The following data represents three consecutive validation batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) illustrating the consistency of the seed train.

**Table 3.2.S.2.2.3-2: VCD and Viability Data at N-1 Transfer**

| Batch Number | Transfer Day | N-1 VCD ($10^6$ cells/mL) | N-1 Viability (%) | Doubling Time (hrs) | Metabolite: Lactate (g/L) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Day 18 | 8.42 | 99.1 | 22.4 | 0.85 |
| **GLUC-2025-002** | Day 18 | 8.15 | 98.9 | 23.1 | 0.79 |
| **GLUC-2025-003** | Day 18 | 8.70 | 99.4 | 21.8 | 0.92 |
| **Mean** | -- | 8.42 | 99.1 | 22.4 | 0.85 |
| **% CV** | -- | 3.2% | 0.25% | 2.9% | 7.6% |

---

#### 3.2.S.2.2.3.5 In-Process Controls (IPC)

Strict IPCs are enforced to prevent the propagation of contaminated or sub-optimal cultures.

**Table 3.2.S.2.2.3-3: IPC Specifications for Seed Train**

| Test Parameter | Method | Frequency | Action Limit |
| :--- | :--- | :--- | :--- |
| **Sterility (Bioburden)** | USP <71> / Membrane Filtration | Every Stage | No Growth |
| **Mycoplasma** | PCR (Rapid) | N-3 and N-1 | Negative |
| **Cell Count/Viability** | Automated Image Analysis (Vi-Cell BLU) | Every 24h | Viability >95% |
| **Metabolic Profile** | BioProfile FLEX2 | Every 24h | Gluc > 2.0 g/L |
| **pH/pCO2/pO2** | Offline Gas Analyzer | Every 24h | pH 6.8 - 7.2 |

---

#### 3.2.S.2.2.3.6 Process Deviations and Robustness

During the development of the Glucogen-XR seed train, a Failure Mode and Effects Analysis (FMEA) was conducted. Key risk factors identified included:
1.  **Extended Seed Train Duration:** Validation studies (Study RPT-GHS-BIO-2023-04) confirmed that the GHS-CHO-001 cell line remains genetically stable and maintains productivity for up to 60 days post-thaw. The standard seed train is 18-20 days, providing a 3x safety margin for "vessel hold" scenarios.
2.  **Agitation Stress:** Sensitivity studies in the N-1 bioreactor showed that $P/V$ levels up to $40 W/m^3$ do not impact Glucogen-XR glycan profiles or specific productivity.

#### 3.2.S.2.2.3.7 Regulatory Compliance and References

This expansion protocol adheres to the following guidelines:
*   **ICH Q5A(R2):** Quality of Biotechnological Products: Viral Safety Evaluation.
*   **ICH Q5B:** Analysis of the Expression Construct in Cells Used for Production of r-DNA Derived Protein Products.
*   **ICH Q5D:** Derivation and Characterization of Cell Substrates Used for Production of Biotechnological/Biological Products.
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.

All raw data, including electronic signatures from the Emerson DeltaV™ system and the Google Cloud Manufacturing Data Engine, are archived in compliance with 21 CFR Part 11.

---
*End of Subsection 3.2.S.2.2.3*

---

## Production Bioreactor Operation

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.2: MANUFACTURE - CELL CULTURE AND FERMENTATION
### SUBSECTION: PRODUCTION BIOREACTOR OPERATION (STAGE N)

---

#### 3.2.S.2.2.1 Overview of Production Bioreactor (N) Stage
The production bioreactor stage (Stage N) represents the terminal phase of the upstream manufacturing process for Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist. This stage is executed at the 2,000L scale using a Single-Use Bioreactor (SUB) system (Thermo Scientific™ HyPerforma™) at the Google Health Sciences (GHS) facility in South San Francisco.

The process utilizes a Fed-Batch strategy designed to maximize the volumetric productivity of the proprietary CHO-K1 GS knockout derivative (GHS-CHO-001). The production phase is characterized by a high-density growth phase followed by a strictly controlled shift to a production phase triggered by temperature reduction and specific nutrient bolus additions.

---

#### 3.2.S.2.2.2 Equipment and Instrumentation Specifications
The production bioreactor is equipped with advanced sensing technology integrated into the Google Cloud Life Sciences (GCLS) Vertex AI Control Plane for real-time monitoring and predictive analytics.

**Table 1: Production Bioreactor Hardware Specifications (N-Stage)**
| Component | Specification / Model | Manufacturer |
| :--- | :--- | :--- |
| **Bioreactor Vessel** | 2,000L HyPerforma SUB (S.U.B.) | Thermo Scientific |
| **Impeller Type** | Drilled Hole Sparger / Macro-impeller | Thermo Scientific |
| **Control System** | DeltaV™ Distributed Control System | Emerson / GHS Custom API |
| **pH Sensor** | Finesse TruFluor Single-Use / Mettler Toledo | Mettler Toledo |
| **DO Sensor** | Optical Dissolved Oxygen (InPro 6860i) | Mettler Toledo |
| **Mass Flow Controllers** | Air, O2, N2, CO2 (0 - 500 SLPM) | Brooks Instrument |
| **Biomass Sensor** | Futura Capacitance Probe | Aber Instruments |
| **Off-gas Analyzer** | MAX300-BIO Quadrupole Mass Spec | Extrel |
| **Scales/Load Cells** | IT8000 Series (Accuracy +/- 0.1kg) | Hardy Process Solutions |

---

#### 3.2.S.2.2.3 Pre-Operational Procedures: Preparation and Sterilization
Prior to the transfer of the N-1 inoculum, the production bioreactor must undergo a rigorous setup and integrity verification process.

##### 3.2.S.2.2.3.1 Single-Use Bag (SUB) Installation and Leak Testing
The 2,000L S.U.B. bag (Part No: GHS-BIO-2000-B) is unboxed in a Grade C cleanroom environment.
1. **Physical Inspection:** Verify the integrity of the gamma-irradiation seal (Minimum Dose: 25 kGy).
2. **Installation:** The bag is positioned within the stainless steel jacket. All lines (feed, alkali, acid, sampling, harvest) are routed through the designated ports.
3. **Pressure Decay Test:** Following installation, the bag is pressurized to 30 mbar using sterile-filtered air. The system must maintain pressure with a decay rate of < 0.5 mbar/min over a 30-minute duration.
4. **Load Cell Calibration:** The bioreactor is tared. Calibration weights (NIST traceable) are used to verify accuracy at 500kg, 1000kg, and 2000kg intervals.

##### 3.2.S.2.2.3.2 Media Preparation and Sterile Filtration
The production medium, **GHS-Gluca-Base-V4**, is a chemically defined, animal-derived component-free (ADCF) formulation.
*   **Media Batching:** 1,600L of GHS-Gluca-Base-V4 is prepared in a 2,000L stainless steel mixing vessel (V-102).
*   **Sterilization:** The media is transferred into the SUB through a redundant 0.22 µm PES filter (Millipore Express® SHR).
*   **Post-Fill Equilibrium:** The media is heated to 37.0°C and equilibrated for 24 hours to allow for dissolved gas stabilization (O2/CO2) and pH drift compensation.

---

#### 3.2.S.2.2.4 Inoculation and Initial Growth Phase (Days 0-3)
The N-stage is initiated by the transfer of the N-1 inoculum when the N-1 culture reaches a target VCD (Viable Cell Density).

**Table 2: Inoculation Parameters**
| Parameter | Target Value | Range / Limit |
| :--- | :--- | :--- |
| **Initial Viable Cell Density (VCD)** | $0.5 \times 10^6$ cells/mL | $0.45 - 0.55 \times 10^6$ |
| **Inoculum Volume** | ~200 L (Target 1:10 split) | 180 - 220 L |
| **Initial Working Volume** | 1,800 L | 1,750 - 1,850 L |
| **Temperature** | 37.0 °C | ± 0.2 °C |
| **pH Setpoint** | 7.00 | 6.90 - 7.10 |
| **Dissolved Oxygen (DO)** | 40% Air Saturation | 35% - 45% |

##### 3.2.S.2.2.4.1 Inoculation Procedure
1. Verify N-1 culture viability is > 98.0% via Vi-CELL BLU.
2. Connect N-1 transfer line to N-bioreactor via AseptiQuik® STC connectors.
3. Perform transfer using a peristaltic pump at a rate of 10 L/min.
4. Flush transfer line with 20L of GHS-Gluca-Base-V4 to ensure total cell recovery.
5. Record Start Time (T=0) upon completion of transfer.

---

#### 3.2.S.2.2.5 Fed-Batch Control Strategy and Nutrient Management
The Glucogen-XR process utilizes a complex feeding regimen involving two distinct feed streams:
1.  **GHS-Feed-A (Concentrated Amino Acids/Glucose):** Supports biomass accumulation.
2.  **GHS-Feed-B (pH-Adjusted Cysteine/Tyrosine):** Supports protein folding and peptide chain elongation.

**Table 3: Feeding Schedule and Bolus Additions**
| Culture Day | Feed Type | Amount (% v/v) | Trigger / Condition |
| :--- | :--- | :--- | :--- |
| **Day 3** | GHS-Feed-A | 3.0% | VCD > $8.0 \times 10^6$ |
| **Day 5** | GHS-Feed-A | 5.0% | Glucose < 4.0 g/L |
| **Day 5** | GHS-Feed-B | 0.5% | Fixed Bolus |
| **Day 7** | GHS-Feed-A | 5.0% | Fixed Bolus |
| **Day 9** | GHS-Feed-A | 4.0% | Glucose < 3.5 g/L |
| **Day 11** | GHS-Feed-A | 3.0% | Viability > 80% |

##### 3.2.S.2.2.5.1 Glucose Management (Feedback Control)
Glucose levels are monitored every 12 hours via the Nova Biomedical BioProfile® FLEX2. If glucose drops below 3.0 g/L, a supplemental 40% Glucose solution bolus is calculated as follows:
$$V_{glucose} = \frac{(G_{target} - G_{actual}) \times V_{current}}{C_{stock}}$$
Where:
*   $G_{target}$ = 5.0 g/L
*   $C_{stock}$ = 400 g/L

---

#### 3.2.S.2.2.6 Metabolic Shift and Temperature Shift (Day 6)
To maximize the production of the glucapeptide and minimize proteolytic degradation, a temperature shift is implemented on Day 6.

1.  **Condition:** Triggered when VCD reaches $18.0 - 22.0 \times 10^6$ cells/mL.
2.  **Action:** The bioreactor temperature setpoint is reduced from 37.0°C to 33.0°C over a 4-hour ramp.
3.  **Rationale:** This shift arrests the cell cycle in the G1 phase, extending culture longevity and increasing specific productivity ($q_p$).

---

#### 3.2.S.2.2.7 Process Analytical Technology (PAT) and In-Process Controls (IPC)
Google Health Sciences employs an integrated PAT framework for the N-stage. Data is streamed via MQTT protocols to the GHS-BigQuery analytical engine.

**Table 4: In-Process Control Limits (N-Stage)**
| IPC Parameter | Method | Frequency | Action Limit |
| :--- | :--- | :--- | :--- |
| **VCD** | Automated Image Analysis | Daily | Report if < $15 \times 10^6$ at Day 7 |
| **Viability** | Trypan Blue Exclusion | Daily | Harvest if < 70% |
| **Lactate** | Enzymatic/Amperometric | Daily | > 4.5 g/L (Indicates Hypoxia) |
| **Ammonia** | Ion Selective Electrode | Daily | > 8 mmol/L |
| **Glucapeptide Titer** | Protein A HPLC | Days 10, 12, 14 | Report Trend |
| **Aggregates** | SEC-HPLC | Harvest | < 5% SEC-Pre-peak |

---

#### 3.2.S.2.2.8 Detailed Batch Record Summary (Representative Data)
The following table provides representative data from three clinical manufacturing batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003).

**Table 5: Historical Batch Performance Data (N-Stage)**
| Parameter | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Batch GLUC-2025-003 |
| :--- | :--- | :--- | :--- |
| **Inoculation Date** | 12-JAN-2025 | 02-FEB-2025 | 22-FEB-2025 |
| **Peak VCD ($10^6/mL$)** | 24.5 | 23.8 | 25.1 |
| **Day 14 Viability (%)** | 82.4% | 80.1% | 83.7% |
| **Final Titer (g/L)** | 4.22 | 4.15 | 4.30 |
| **Lactate Peak (g/L)** | 3.1 | 3.4 | 2.9 |
| **Osmolality at Harvest** | 415 mOsm/kg | 422 mOsm/kg | 410 mOsm/kg |

---

#### 3.2.S.2.2.9 Critical Process Parameters (CPPs) and Risk Assessment
In accordance with ICH Q8(R2), the following parameters have been identified as critical based on Failure Mode and Effects Analysis (FMEA).

1.  **Dissolved Oxygen (DO) Control:**
    *   *Significance:* Low DO (< 20%) leads to anaerobic glycolysis and rapid lactate accumulation, inhibiting growth.
    *   *Control:* Cascade control (Agitation -> Air Sparge -> O2 Sparge).
    *   *Acceptance Criteria:* 40% ± 10%.

2.  **pH Control:**
    *   *Significance:* pH drifts > 7.4 induce deamidation of the glucapeptide N-terminus. pH < 6.7 leads to cell death.
    *   *Control:* CO2 sparging (acid) and 1M NaHCO3 (base).
    *   *Acceptance Criteria:* 7.00 ± 0.15.

3.  **Agitation Power Input ($P/V$):**
    *   *Significance:* Excessive shear stress ($P/V > 60 W/m^3$) damages the CHO-K1 cell membrane.
    *   *Control:* Fixed RPM calculated based on vessel geometry.
    *   *Acceptance Criteria:* $25 - 45 W/m^3$.

---

#### 3.2.S.2.2.10 Harvest and Recovery Initiation
The harvest process is initiated when one of the following criteria is met:
1.  **Culture Duration:** 14 days post-inoculation (Primary Criterion).
2.  **Viability:** Viability drops below 70.0% (Secondary Criterion).

##### 3.2.S.2.2.10.1 Chilling and Termination
Upon reaching harvest criteria, the bioreactor temperature is chilled to 10°C ± 2°C over 6 hours to reduce metabolic activity and stabilize the glucapeptide against endogenous proteases. The "Harvest-Ready" signal is then sent to the downstream processing (DSP) team for Primary Clarification via Centrifugation (Ref: 3.2.S.2.2.2 Harvest Operations).

---

#### 3.2.S.2.2.11 Deviations and Non-Conformance History
*No critical deviations were recorded for the production of clinical batches GLUC-2025-001 through GLUC-2025-003. Minor alerts in DO levels during Day 8 of GLUC-2025-002 were attributed to a probe calibration drift and were resolved via redundant probe switching without impact on product quality.*

---

#### 3.2.S.2.2.12 References
1.  **ICH Q11:** Development and Manufacture of Drug Substances.
2.  **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
3.  **FDA Guidance for Industry:** Sterile Drug Products Produced by Aseptic Processing (2004).
4.  **Google Health Sciences SOP-BIO-440:** Operation of 2000L Single-Use Bioreactors.

---
**END OF SECTION**

---

# AI-Optimized Fermentation Parameters

## TensorFlow-Based Process Control

### 3.2.S.2.2.4.1 TensorFlow-Based Process Control (TF-BPC) Integration

#### 1.0 Executive Summary of AI-Optimized Fermentation
The manufacturing process for Glucogen-XR (glucapeptide extended-release) utilizes a pioneering Deep Learning-based control architecture, hereafter referred to as **TensorFlow-Based Process Control (TF-BPC) v4.2**. Unlike traditional Proportional-Integral-Derivative (PID) controllers that rely on linear responses to single-variable deviations, TF-BPC utilizes a Multi-Layer Perceptron (MLP) and Long Short-Term Memory (LSTM) recurrent neural network (RNN) architecture to manage the non-linear dynamics of the proprietary CHO-K1 GS knockout derivative (GHS-CHO-001) cell line.

This section details the integration of Google Cloud Life Sciences’ Vertex AI infrastructure with the physical bioreactor suite located at 3000 Innovation Drive, South San Francisco. The system ensures that Critical Process Parameters (CPPs) are maintained within a "Dynamic Design Space" that predicts metabolic shifts 4.5 hours before they manifest in physical sensors (Dissolved Oxygen, pH, or Lactate spikes).

---

#### 2.0 System Architecture and Hardware-Software Interface
The TF-BPC system operates on a hybrid-cloud edge computing model to ensure zero-latency control ( < 10ms) while leveraging massive parallel processing for real-time simulation.

##### 2.1 Hardware Configuration
| Component ID | Manufacturer/Model | Specification/Role |
| :--- | :--- | :--- |
| **GHS-TPU-09** | Google Cloud TPU v4 | Tensor Processing Unit for real-time inference |
| **SENS-BIO-882** | Emerson DeltaV / Rosemount | Physical interface for DO, pH, Temp, Pressure |
| **SPEC-NIR-11** | Kaiser Optical Systems | In-line Raman Spectroscopy (785 nm) |
| **GHS-EDGE-01** | Google Distributed Cloud Edge | Local compute node for fail-safe operations |

##### 2.2 Software Stack and Frameworks
*   **Core Engine:** TensorFlow 2.15.0 (LTS)
*   **Optimizer:** Adam (Adaptive Moment Estimation) with weight decay
*   **Library:** Keras API with custom bio-kinetic constraints
*   **Data Lake:** BigQuery (for historical batch training: GLUC-2022-001 through GLUC-2024-999)

---

#### 3.0 Neural Network Topology: "The Glucogen-Predictor Model"
The model is a hybrid architecture combining a Feed-Forward Neural Network (FFNN) for steady-state estimation and an LSTM for temporal dependencies.

**Equation 1: Loss Function with Bio-Regulatory Penalty**
$$L(\theta) = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2 + \lambda_{1} \sum |w| + \lambda_{2} \text{Penalty}_{VCD}$$
*Where:*
*   $y_i$: Actual sensor value (e.g., Dissolved Oxygen)
*   $\hat{y}_i$: Predicted sensor value
*   $\text{Penalty}_{VCD}$: Mathematical constraint ensuring predicted Viable Cell Density (VCD) does not violate biological growth limits defined in USP <1043>.

---

#### 4.0 Detailed Process Control Parameters (The Dynamic Design Space)
The TF-BPC regulates the following parameters by modulating pump speeds and gas flow rates every 120 seconds.

##### Table 4.1: AI-Modulated Input Variables (Control Matrix)
| Parameter | Sensor ID | Control Loop ID | AI Target Range | Sampling Frequency |
| :--- | :--- | :--- | :--- | :--- |
| **Glucose Conc.** | Raman-01 | FEED-PUMP-04 | 2.5 - 4.5 g/L | Continuous (5 min) |
| **pH (Upper)** | pH-E-09 | CO2-SPARGE-01 | 7.05 ± 0.02 | 100 Hz |
| **Dissolved O2** | DO-E-12 | O2-INJECT-02 | 40% ± 2.5% | 10 Hz |
| **Lactate** | Raman-02 | TEMP-MOD-01 | < 1.2 g/L | Continuous (5 min) |

---

#### 5.0 Protocols for Model Validation and "Warm-Start" Initialization
The following procedure is executed during the inoculation of the N-stage bioreactor (2000L).

##### Protocol GHS-PRO-772: AI-Model Loading and Sync
1.  **System Health Check:** Verify connection between the DeltaV DCS and the Vertex AI Endpoint (IP: 10.240.xx.xx).
2.  **Batch Identification:** Enter Batch Number (e.g., **GLUC-2025-001**).
3.  **Baseline Loading:**
    *   Initialize weights from the "Golden Batch" meta-model (Model ID: GHS-META-V9).
    *   Input Seed Train VCD (Target: $1.2 \times 10^6$ cells/mL).
4.  **Inference Activation:**
    *   Engage "Shadow Mode" for the first 2 hours (AI predicts, but PID controls).
    *   Perform T-test on Prediction Error. If $p < 0.05$, engage "Active Control."

---

#### 6.0 Data Analysis of Representative Batches
The following data represents the performance of the TF-BPC across three validation batches produced at the South San Francisco facility.

##### Table 6.1: Performance Metrics (Batches GLUC-2025-001 to GLUC-2025-003)
| Batch Number | VCD Max (10^6 cells/mL) | Product Titer (g/L) | Glycan Profile Purity | AI Prediction Accuracy (MAPE %) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 22.4 | 4.82 | 98.4% | 1.12% |
| **GLUC-2025-002** | 22.1 | 4.79 | 98.6% | 0.98% |
| **GLUC-2025-003** | 23.0 | 4.95 | 98.2% | 1.05% |

**Calculation of Mean Absolute Percentage Error (MAPE):**
$$MAPE = \frac{100\%}{n} \sum_{t=1}^{n} \left| \frac{A_t - F_t}{A_t} \right|$$
*Where $A_t$ is the actual value and $F_t$ is the forecast value.*

---

#### 7.0 Regulatory Compliance and Cybersecurity (CFR Part 11)
The TF-BPC system is fully compliant with 21 CFR Part 11 and ICH Q8(R2) "Pharmaceutical Development."

1.  **Traceability:** Every weight adjustment in the neural network is logged in an immutable Google Cloud Blockchain Ledger, ensuring that if an AI decision leads to a deviation, the specific neuron activation can be audited.
2.  **Fail-Safe:** In the event of a network latency spike exceeding 50ms, the system automatically reverts to a traditional "Hard-Coded" PID safety state (Baseline Parameters: Temp 37.0°C, pH 7.00, DO 40%).
3.  **Model Versioning:** Any update to the TensorFlow model (e.g., from v4.2 to v4.3) requires a formal Type C Regulatory Meeting or a PAS (Prior Approval Supplement) if the change affects the Established Conditions (ECs).

---

#### 8.0 Statistical Process Control (SPC) Charts
The system generates real-time Shewhart charts. For Glucogen-XR, the primary metric for AI efficiency is the "Nutrient Utilization Ratio" (NUR).

*   **UCL (Upper Control Limit):** 0.85
*   **Target:** 0.78
*   **LCL (Lower Control Limit):** 0.70

Data from **GLUC-2025-004** indicates that the TF-BPC maintained the NUR within ± 0.02 of the target for 96% of the 14-day fermentation cycle, a 30% improvement over manual feed strategies.

---

#### 9.0 References
1.  **ICH Q11:** Development and Manufacture of Drug Substances.
2.  **FDA Guidance for Industry:** Process Analytical Technology (PAT) — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance.
3.  **Google Whitepaper (2024):** "Deep Learning in Bioprocessing: Implementing TensorFlow in cGMP Environments."
4.  **USP <1225>:** Validation of Compendial Procedures.

---
*End of Subsection 3.2.S.2.2.4.1*

---

## Real-Time Analytics and Adjustments

### 3.2.S.2.2.4 Real-Time Analytics and Adjustments (RT-AA) in AI-Optimized Fermentation

#### 3.2.S.2.2.4.1 Introduction to the Google Life Sciences Bio-Digital Twin Framework
The manufacturing process for Glucogen-XR (glucapeptide extended-release) utilizes an advanced Integrated Control Strategy (ICS) powered by the Google Cloud Life Sciences (GCLS) Bio-Digital Twin framework. Unlike traditional Proportional-Integral-Derivative (PID) control loops, the Real-Time Analytics and Adjustments (RT-AA) system leverages high-frequency sensor data, Process Analytical Technology (PAT), and Machine Learning (ML) inference engines to predict and adjust fermentation trajectories in real-time.

This subsection details the automated adjustment protocols for the proprietary GHS-CHO-001 cell line, ensuring that Critical Quality Attributes (CQAs), specifically N-terminal truncation levels and glycosylation profiles, remain within the predefined Knowledge Space (KS) and Design Space (DS) as established in ICH Q8(R2).

#### 3.2.S.2.2.4.2 Hardware-Software Integration for Real-Time Monitoring
The RT-AA system interfaces directly with the Sartorius Biostat® STR 2000L bioreactors via an OPC-UA (Open Platform Communications Unified Architecture) bridge, pushing data at 1-second intervals to the Google Cloud Vertex AI platform for processing.

**Table 3.2.S.2.2.4-1: Sensor Architecture and Data Acquisition Rates**
| Sensor ID | Parameter | Technology | Data Frequency | Accuracy/Precision |
| :--- | :--- | :--- | :--- | :--- |
| SEN-V-701 | Dissolved Oxygen (DO) | Optical Fluoroscopy | 1.0 Hz | ± 0.1% Saturation |
| SEN-V-702 | pH | Solid-state ISFET | 1.0 Hz | ± 0.02 pH units |
| SEN-V-703 | Temperature | Pt100 RTD | 0.5 Hz | ± 0.05 °C |
| SEN-V-704 | Dissolved CO2 | In-situ Mid-IR | 0.1 Hz | ± 1.5 mmHg |
| SEN-V-705 | Viable Cell Density (VCD) | Multi-frequency Capacitance | 0.05 Hz | ± 0.2 x 10^6 cells/mL |
| SEN-V-706 | Glucose/Lactate | Automated At-Line HPLC | 0.0002 Hz | ± 0.1 g/L |
| SEN-V-707 | Metabolomics | In-situ Raman (785nm) | 0.016 Hz | Variable (Chemometric) |

#### 3.2.S.2.2.4.3 The AI Inference Engine: "GlucaPredict"
The core of the RT-AA system is "GlucaPredict," a Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM) layers, trained on 15,000+ historical batches (including pilot scale GLUC-2022-001 through GLUC-2024-999).

**Equation 3.2.S.2.2.4.1: Objective Function for Real-Time Optimization**
The system minimizes the following cost function ($J$) to ensure product consistency:
$$J = \sum_{t=0}^{T} [ w_1(VCD_{target} - VCD_t)^2 + w_2(Glyc_{target} - Glyc_t)^2 + w_3(E_{feed}) ]$$
Where:
*   $VCD_t$: Predicted Viable Cell Density at time $t$
*   $Glyc_t$: Predicted Sialylation/Glycosylation index
*   $E_{feed}$: Energetic cost of nutrient additions
*   $w_n$: Weighting factors derived from risk assessments (FMEA)

#### 3.2.S.2.2.4.4 Dynamic Nutrient Feed Adjustments (DNFA) Protocol
The Glucogen-XR process utilizes a complex feed strategy (GHS-Feed-A and GHS-Feed-B). The RT-AA system adjusts feed rates based on the predicted metabolic uptake rate (mUR).

**Protocol P-RT-442: Automated Feed Rate Correction**
1.  **Baseline Execution:** At $T+48h$, the system initiates Feed A at a base rate of 2.5 mL/L/day.
2.  **Raman Shift Analysis:** Every 60 seconds, the Raman probe (SEN-V-707) scans the 800–1800 cm⁻¹ fingerprint region.
3.  **Metabolite Inference:** The ML model deconvolutes the spectra to estimate Glucose ($G_t$) and Glutamine ($Q_t$).
4.  **Inference-Action Loop:**
    *   If $G_t < 2.0$ g/L and $VCD_{trend}$ is increasing: Increase Feed A by 12.5%.
    *   If $Lactate > 4.0$ g/L: Decrease pH setpoint by 0.05 and initiate "Lactate Consumption Mode" by reducing Glucose feed.
5.  **Audit Logging:** Every adjustment is logged with a unique timestamp and reason code (e.g., `ADJ-2025-FEED-01`).

**Table 3.2.S.2.2.4-2: Representative Data from Batch GLUC-2025-012 (Deviation Handling)**
| Process Hour | Parameter | Observed Value | AI Prediction (T+12h) | Action Taken | Resulting CQA Impact |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 120.5 | Glucose | 1.85 g/L | 1.40 g/L (Warning) | Bolus Feed 500mL | Maintained VCD |
| 144.2 | NH3 | 8.2 mmol/L | 10.5 mmol/L (Critical) | Temp Shift to 31°C | Reduced Deamidation |
| 168.0 | VCD | 22.4 x 10^6 | 21.9 x 10^6 | None (Within Spec) | N/A |

#### 3.2.S.2.2.4.5 Automated pH and Dissolved Oxygen (DO) Stabilization
Standard PID controllers often cause "ringing" (oscillation) during peak exponential growth. The RT-AA system uses Model Predictive Control (MPC) to anticipate the oxygen demand ($k_La$) and adjust sparging before DO drops.

**Protocol P-RT-443: Predictive Aeration Strategy**
1.  **Input:** VCD, $dO_2/dt$, and Agitation Speed ($N$).
2.  **Calculation:** Calculate Oxygen Uptake Rate (OUR) using:
    $$OUR = k_La (C^* - C_L) - \frac{dC_L}{dt}$$
3.  **Adjustment:** If $OUR$ increases $>15\%$ over 4 hours, the system increases $O_2$ enrichment in the sparge gas by 5% and elevates Agitation by 10 RPM.
4.  **Verification:** The system monitors the $RQ$ (Respiratory Quotient). Target $RQ$ for GHS-CHO-001 is $1.05 \pm 0.10$.

#### 3.2.S.2.2.4.6 Real-Time Glycan Monitoring and Copper Ion Titration
One of the most critical aspects of Glucogen-XR manufacturing is the control of the C-terminal lysine clipping and N-glycan branching.

**Table 3.2.S.2.2.4-3: Trace Element Adjustment Logic (Batch GLUC-2025-015 Example)**
| Indicator | Measured Signal (Raman/PAT) | Predicted CQA | Corrective Additive | Dosage |
| :--- | :--- | :--- | :--- | :--- |
| Low Galactosylation | Shift in 1050 cm⁻¹ band | G0F > 25% | Uridine/MnCl₂ | 0.5 mM / 10 µM |
| High Man-5 | Shift in 1120 cm⁻¹ band | Man-5 > 5% | Glucosamine | 2.0 mM |
| High Truncation | pH drift > 7.1 | Des-His₁ Truncation | Cysteine | 1.5 mM |

#### 3.2.S.2.2.4.7 Statistical Process Control (SPC) and Data Integrity
All real-time adjustments are governed by 21 CFR Part 11 compliant software. The system employs "Shadow Logging," where the raw sensor data and the AI-calculated adjustment are stored in parallel on a tamper-proof BigQuery ledger.

**Statistical Control Limits (3-Sigma):**
*   **VCD:** $\pm 12.5\%$ of mean trajectory.
*   **Viability:** $> 92\%$ until Day 10.
*   **Specific Productivity ($q_p$):** $25–35$ pg/cell/day.

#### 3.2.S.2.2.4.8 Regulatory Compliance and Validation of AI Adjustments
In accordance with **FDA Guidance for Industry: Process Validation: General Principles and Practices (2011)** and **ICH Q12**, the RT-AA system has undergone a 3-stage validation:
1.  **Stage 1 (Process Design):** Definition of the "Probabilistic Design Space."
2.  **Stage 2 (Process Qualification):** 5 consecutive batches (GLUC-2025-001 through GLUC-2025-005) were run with AI-control enabled, demonstrating superior consistency vs. fixed-feed controls.
3.  **Stage 3 (Continued Process Verification):** Real-time monitoring of every commercial batch to ensure the model does not "drift."

**Table 3.2.S.2.2.4-4: Validation Results (AI-Controlled vs. Manual Control)**
| Metric | AI-Controlled (n=10) | Manual/Fixed (n=10) | P-Value |
| :--- | :--- | :--- | :--- |
| Titer Yield (g/L) | $6.42 \pm 0.18$ | $5.81 \pm 0.55$ | < 0.01 |
| Glycan Consistency | 98.2% | 91.5% | < 0.05 |
| Batch Failure Rate | 0% | 2.5% | N/A |

#### 3.2.S.2.2.4.9 Emergency Override Protocols (EOP)
While the AI system is autonomous, the following conditions trigger an immediate "Human-in-the-Loop" (HITL) alert and revert the system to Safe-State-Manual (SSM):
*   **EOP-01:** Loss of connection to Google Cloud for $> 30$ seconds.
*   **EOP-02:** Divergence between Raman-predicted Glucose and At-line HPLC Glucose $> 20\%$.
*   **EOP-03:** pH sensor drift exceeding 0.1 units in $< 5$ minutes.

---
*Reference: GHS-TR-99021: Validation Report for GlucaPredict ML Model v4.2.*
*Internal Cross-Reference: See Section 3.2.S.2.6 for detailed Batch Analysis Data.*

---

## Yield Optimization Data

# MODULE 3: QUALITY (3.2.S.2.2) – DRUG SUBSTANCE MANUFACTURE
## SECTION: 3.2.S.2.2.4 – AI-OPTIMIZED FERMENTATION PARAMETERS
### SUBSECTION: Yield Optimization Data (YOD-v4.02)

---

#### 1.0 Executive Summary of AI-Driven Yield Optimization
The manufacturing process for **Glucogen-XR (glucapeptide extended-release)** utilizes the proprietary **GHS-AI-Bioproc (v2.4)** engine, a neural-network-driven predictive modeling platform hosted on Google Cloud Life Sciences infrastructure. This section details the empirical data and longitudinal yields resulting from the transition from traditional Monothetic (One-Factor-at-a-Time) optimization to AI-integrated Deep Reinforcement Learning (DRL) control.

The goal of this optimization was to maximize the specific productivity ($q_p$) of the **GHS-CHO-001** cell line while maintaining the critical quality attribute (CQA) profile, specifically the glycosylation pattern and C-terminal amidation consistency of the glucapeptide moiety.

#### 2.0 Historical Control vs. AI-Optimized Yield Comparison
Prior to the implementation of the AI-optimized parameters (referred to as the "Baseline Process" or Process Version 1.2), yields were constrained by oxidative stress and metabolic byproduct accumulation (primarily lactate and ammonia).

##### Table 2.1: Comparative Yield Metrics (Baseline vs. AI-Optimized)
| Metric ID | Parameter | Baseline (N=20) | AI-Optimized (N=50) | % Improvement | p-value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| YM-001 | Peak VCD (x10⁶ cells/mL) | 18.4 ± 2.1 | 42.8 ± 1.4 | 132.6% | <0.001 |
| YM-002 | Harvest Titer (g/L) | 3.2 ± 0.4 | 8.7 ± 0.6 | 171.8% | <0.001 |
| YM-003 | Specific Productivity ($q_p$) | 15.2 pg/c/d | 28.4 pg/c/d | 86.8% | <0.001 |
| YM-004 | Culture Duration (Days) | 14 | 18 | 28.5% | N/A |
| YM-005 | Lactate Peak (mM) | 32.5 | 8.4 | -74.1% | <0.001 |

#### 3.0 Batch-Specific Yield Data (Series GLUC-2025-001 through GLUC-2025-025)
The following data represents the primary validation batches utilizing the AI-optimized fermentation protocol at the 2,000L scale.

##### Table 3.1: Yield Consistency Data for Phase III Clinical Batches
| Batch Number | Manufacturing Date | Scale (L) | Peak VCD (10⁶/mL) | Viability at Harvest (%) | Final Titer (g/L) | Total Mass (kg) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 2,000 | 41.2 | 92.4 | 8.52 | 17.04 |
| **GLUC-2025-002** | 19-JAN-2025 | 2,000 | 43.1 | 91.8 | 8.81 | 17.62 |
| **GLUC-2025-003** | 26-JAN-2025 | 2,000 | 42.5 | 93.1 | 8.65 | 17.30 |
| **GLUC-2025-004** | 02-FEB-2025 | 2,000 | 44.0 | 90.5 | 8.94 | 17.88 |
| **GLUC-2025-005** | 09-FEB-2025 | 2,000 | 41.8 | 92.9 | 8.49 | 16.98 |
| **GLUC-2025-006** | 16-FEB-2025 | 2,000 | 42.9 | 94.0 | 8.77 | 17.54 |
| **GLUC-2025-007** | 23-FEB-2025 | 2,000 | 43.5 | 91.2 | 8.88 | 17.76 |
| **GLUC-2025-008** | 02-MAR-2025 | 2,000 | 42.1 | 90.8 | 8.61 | 17.22 |
| **GLUC-2025-009** | 09-MAR-2025 | 2,000 | 42.7 | 93.5 | 8.70 | 17.40 |
| **GLUC-2025-010** | 16-MAR-2025 | 2,000 | 43.8 | 92.2 | 8.91 | 17.82 |

#### 4.0 Detailed Protocol: AI-Dynamic Feed Control (Protocol GHS-OPT-22)
The yield optimization is primarily achieved through the **GHS-Dynamic-Feed** protocol, which adjusts nutrient bolus additions in real-time based on Raman spectroscopy input.

##### 4.1 Step-by-Step AI-Feed Procedure
1.  **Sensor Calibration:** Calibrate In-situ Raman Probes (Kaiser Optical Systems) against USP <1044> standards.
2.  **Initial Inoculation:** Seed 2,000L bioreactor at 0.5 x 10⁶ cells/mL in GHS-CD-Medium-V4.
3.  **Data Ingestion:** Begin 5-minute interval data streaming to Google Cloud Vertex AI. Parameters tracked: Glucose, Lactate, Glutamine, Ammonia, VCD, and Total Dissolved Solids.
4.  **Inference Phase (Day 0-3):** AI monitors the specific growth rate ($\mu$). If $\mu < 0.03 h^{-1}$, the system triggers an auxiliary amino acid spike (Feed-A).
5.  **Steady-State Optimization (Day 4-12):** 
    *   The AI maintains Glucose at exactly 2.5 g/L (± 0.2) via continuous variable-speed pump modulation.
    *   Lactate is maintained below 10 mM. If Lactate > 10 mM, the AI reduces the pH setpoint from 7.0 to 6.8 and modulates the $pO_2$ to 50% to induce lactate consumption.
6.  **Yield Enhancement Phase (Day 13-Harvest):** AI triggers temperature shift from 37.0°C to 31.5°C when VCD reaches 35 x 10⁶ cells/mL. This "Cold Shock" maximizes protein folding efficiency and reduces proteolytic degradation.

#### 5.0 Statistical Analysis of Yield Variance
To ensure regulatory compliance under ICH Q8(R2), a Monte Carlo simulation was performed to predict yield stability over 500 virtual batches.

*   **Standard Deviation ($\sigma$):** 0.18 g/L
*   **Process Capability Index ($C_{pk}$):** 1.94 (Target > 1.33)
*   **Confidence Interval (95%):** 8.58 – 8.82 g/L

##### Equation 5.1: Specific Productivity Calculation
The specific productivity ($q_p$) is calculated using the following integral of viable cell density over time:

$$q_p = \frac{P_{final} - P_{initial}}{\int_{t_0}^{t_n} VCD \, dt}$$

Where:
*   $P$ = Product Concentration (mg/L)
*   $VCD$ = Viable Cell Density (cells/mL)
*   $t$ = Time (days)

#### 6.0 Optimization of Secondary Metabolites
The AI-optimized process significantly reduced the production of "Yield Inhibitors."

##### Table 6.1: Metabolite Profile Comparison
| Metabolite | Limit (Max) | AI-Process Mean | Impact on Yield |
| :--- | :--- | :--- | :--- |
| **Ammonia** | 15 mM | 6.2 mM | Reduced glycosylation heterogeneity |
| **Lactate** | 40 mM | 4.1 mM | Extended culture longevity by 4 days |
| **LDH** | 1000 U/L | 210 U/L | Reduced host cell protein (HCP) burden |

#### 7.0 Analytical Correlation with Product Quality
Yield optimization was not pursued at the expense of quality. All high-yield batches (GLUC-2025-001 to 010) were subjected to Peptide Mapping (RP-HPLC) and Mass Spectrometry (LC-MS/MS).

*   **Purity (SEC-HPLC):** Mean 98.4% (Specification: $\ge$ 95.0%)
*   **Deamidation:** Mean 1.2% (Specification: $\le$ 3.0%)
*   **Aggregation:** Mean 0.4% (Specification: $\le$ 1.5%)

#### 8.0 Regulatory References
1.  **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
2.  **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
3.  **USP <1220>:** Analytical Procedure Lifecycle Management.
4.  **ISO 13485:2016:** Quality Management Systems for Medical Devices (Relevant to AI software integration).

---
**END OF SUBSECTION**
**Document ID:** GHS-M3-DS-YOD-2025-REV02
**Approved By:** Dr. Elizabeth Chen, Head of Bioprocess Engineering, Google Health Sciences.
**Electronic Signature ID:** EC-99283-20250514

---

# Harvest and Clarification

## Cell Removal by Centrifugation

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.2.2: DESCRIPTION OF MANUFACTURING PROCESS AND PROCESS CONTROLS
### SUBSECTION: 3.2.S.2.2.4 HARVEST AND CLARIFICATION
#### 3.2.S.2.2.4.1 Cell Removal by Centrifugation

---

### 1.0 INTRODUCTION AND SCOPE
This subsection details the primary recovery operations for Glucogen-XR (glucapeptide extended-release), specifically the removal of the proprietary GHS-CHO-001 cell line from the production bioreactor (PBR) harvest broth. The centrifugation process is designed to achieve efficient separation of cellular biomass and large debris from the soluble peptide product while minimizing shear stress and preventing the release of intracellular host cell proteins (HCP) and DNA (HCD).

The process utilizes a continuous-flow, disc-stack centrifuge system (Alfa Laval Culturefuge™ 100 or equivalent) equipped with Hermetic design features to ensure low-shear discharge and maintain product integrity. All operations are conducted in accordance with cGMP standards at the Google Health Sciences (GHS) facility at 3000 Innovation Drive, South San Francisco, CA.

### 2.0 PROCESS OBJECTIVES AND CRITICAL QUALITY ATTRIBUTES (CQAs)
The primary objective of the centrifugation step is to reduce the solids content of the harvest broth to a level suitable for secondary clarification (depth filtration).

**Table 1: Centrifugation Performance Targets and Impact on CQAs**
| Performance Metric | Target Specification | Impacted CQA / KPI |
| :--- | :--- | :--- |
| Centrate Turbidity | ≤ 50 NTU | Secondary Filter Loading / Capacity |
| Product Recovery | ≥ 95.0% | Process Yield |
| Cell Viability Change | Δ ≤ 5.0% | HCP and DNA Release |
| Temperature Increase | ≤ 3.0°C | Product Stability (Aggregation) |
| Solid Removal Efficiency | > 98.0% | Downstream Column Fouling |

### 3.0 EQUIPMENT SPECIFICATIONS AND CONFIGURATION
The centrifugation suite (Room B-402) is designed for Grade C (ISO 7) environment. The system is fully automated via the Google Cloud Manufacturing Execution System (G-MES) integrated with the DeltaV distributed control system.

**Table 2: Centrifuge Equipment Technical Specifications (ID: CENT-4001)**
| Parameter | Specification | Manufacturer |
| :--- | :--- | :--- |
| Model | Alfa Laval Culturefuge 100 | Alfa Laval AB |
| Bowl Speed | Up to 8,000 RPM | N/A |
| G-Force (Max) | 12,500 x g | N/A |
| Bowl Volume | 12.5 Liters | N/A |
| Solids Space | 4.0 Liters | N/A |
| Cooling Jacket | 316L Stainless Steel | N/A |
| Motor Drive | VFD-controlled 15 kW | ABB |
| Seal Type | Hydro-hermetic | N/A |

### 4.0 DETAILED CENTRIFUGATION PROTOCOL (P-GHS-GLUC-044)

#### 4.1 Pre-Operational Setup and CIP/SIP
Prior to the initiation of the harvest for batch GLUC-2025-XXX, the centrifuge undergoes a validated Cleaning-in-Place (CIP) and Steam-in-Place (SIP) cycle.

1.  **CIP Cycle (CIP-702):**
    *   Pre-rinse: WFI, 5 minutes, 45°C.
    *   Caustic Wash: 1.0 M NaOH, 30 minutes, 65°C.
    *   Intermediate Rinse: WFI, 10 minutes.
    *   Acid Wash: 0.5 M Phosphoric Acid, 15 minutes, 50°C.
    *   Final Rinse: WFI until conductivity < 1.1 μS/cm.
2.  **SIP Cycle (SIP-805):**
    *   Minimum Temperature: 121.1°C.
    *   Fo Value: ≥ 20 minutes.
    *   Drying: Filtered compressed air for 15 minutes.

#### 4.2 Parameter Stabilization (Start-up)
The centrifuge bowl is accelerated to the operational speed of 7,500 RPM. The system is primed with 100L of Equilibration Buffer (20 mM Tris, 150 mM NaCl, pH 7.5). The cooling jacket is activated to maintain a setpoint of 4°C ± 2°C.

#### 4.3 Feed Phase (Centrifugation)
Harvest broth from the 2000L Production Bioreactor (PBR-501) is transferred to the centrifuge via a low-shear peristaltic pump (Watson-Marlow) or a quaternary diaphragm pump.

**Calculations for Flow Rate (Q):**
The flow rate is determined by the $Q/ \Sigma$ (Sigma) theory to ensure consistent scale-up and particle removal.
$$Q = \frac{v_g \cdot \Sigma}{k}$$
Where:
*   $v_g$ = terminal settling velocity of the CHO cells ($1.2 \times 10^{-6}$ m/s).
*   $\Sigma$ = Equivalent clarification area ($35,000 \text{ m}^2$).
*   $k$ = efficiency factor (typically 0.4 for disc-stacks).

For Glucogen-XR, the validated feed flow rate is set at **15.0 L/min ± 1.0 L/min**.

#### 4.4 Discharge Strategy (De-sludging)
To prevent accumulation of solids in the bowl, partial discharges are triggered based on a volumetric timer or an integrated turbidity sensor (Optek) on the centrate line.
*   **Partial Discharge Volume:** 3.5 Liters.
*   **Discharge Interval:** Every 12 minutes (Nominal, adjusted based on PCV).
*   **Total Discharge Duration:** 0.8 seconds.

### 5.0 PROCESS ANALYTICAL TECHNOLOGY (PAT) AND MONITORING
Real-time monitoring of centrate quality is performed using Google Cloud Life Sciences AI-driven predictive modeling.

**Table 3: Critical Process Parameters (CPPs) and In-Process Controls (IPCs)**
| Parameter | ID | Range | Frequency |
| :--- | :--- | :--- | :--- |
| Bowl Speed | RPM-101 | 7,450 - 7,550 RPM | Continuous |
| Feed Flow Rate | FR-201 | 14.0 - 16.0 L/min | Continuous |
| Inlet Temperature | TI-301 | 2.0 - 8.0°C | Continuous |
| Outlet Turbidity | AT-401 | 10 - 50 NTU | Continuous |
| Discharge Pressure | PI-501 | 2.5 - 3.5 bar | Continuous |

### 6.0 DATA SUMMARY: REPRESENTATIVE BATCH ANALYSIS
The following data represents the performance of the centrifugation step across three (3) consecutive conformance batches of Glucogen-XR.

**Table 4: Centrifugation Performance Data for GLUC-2025-001/002/003**
| Batch ID | Feed Volume (L) | Feed PCV (%) | Centrate NTU | Step Yield (%) | DNA Reduction (log10) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 2045 | 8.2 | 32 | 98.2 | 1.1 |
| GLUC-2025-002 | 1988 | 7.9 | 28 | 97.9 | 1.2 |
| GLUC-2025-003 | 2012 | 8.5 | 35 | 98.5 | 1.1 |
| **Mean** | **2015** | **8.2** | **31.7** | **98.2** | **1.13** |

### 7.0 DEVIATION MANAGEMENT AND SENSITIVITY ANALYSIS
#### 7.1 Impact of High Packed Cell Volume (PCV)
During the process characterization studies (Study Report GHS-GLUC-TR-2024-012), the centrifuge was challenged with PCV values up to 12.0%. It was observed that centrate turbidity increased to >70 NTU when the discharge interval remained at 12 minutes. Consequently, the G-MES system is programmed to auto-adjust discharge frequency based on real-time torque sensors on the centrifuge motor.

#### 7.2 Shear Sensitivity Study
CHO-K1 GS knockout cells (GHS-CHO-001) are sensitive to hydrodynamic shear. To evaluate the impact of centrifuge shear, LDH (Lactate Dehydrogenase) levels were measured at the inlet and outlet.
*   **Inlet LDH:** 450 U/L
*   **Outlet LDH:** 485 U/L
*   **Calculation:** % Lysis = $\frac{(LDH_{out} - LDH_{in})}{LDH_{max}} \times 100$
*   **Result:** < 1.0% lysis, confirming the suitability of the Hermetic seal design.

### 8.0 REGULATORY COMPLIANCE AND REFERENCES
The centrifugation process described herein complies with the following guidelines:
1.  **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
2.  **FDA Guidance for Industry:** Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice.
3.  **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
4.  **Technical Report No. 41 (PDA):** Virus Filtration.

### 9.0 CONCLUSION
The cell removal process by centrifugation for Glucogen-XR is a robust, well-characterized operation that consistently provides high-quality centrate with minimal product loss or degradation. The integration of Google Cloud-based monitoring ensures that any drift in performance is identified and mitigated in real-time, maintaining the safety and efficacy profile of the glucapeptide drug substance.

---
*End of Subsection 3.2.S.2.2.4.1*
*Document ID: GHS-GLUC-M3-REGO-004*
*Confidential - Google Health Sciences Proprietary*

---

## Depth Filtration

# MODULE 3: QUALITY (3.2.S.2.2) – DRUG SUBSTANCE MANUFACTURE
## SECTION: HARVEST AND CLARIFICATION
### SUBSECTION 3.2.S.2.2.4.1: DEPTH FILTRATION OPERATIONS

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection details the primary and secondary clarification of **Glucogen-XR (glucapeptide extended-release)** harvest bulk derived from the 2,000L Production Bioreactor (PBR). The process utilizes a two-stage, orthogonal depth filtration strategy designed to remove whole cells, cellular debris, and sub-micron insoluble aggregates while maintaining the integrity and potency of the GLP-1 receptor agonist peptide. 

Google Health Sciences (GHS) employs a single-use, closed-system architecture for depth filtration to ensure aseptic processing and to mitigate cross-contamination risks as per **ICH Q7** and **FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing**.

#### 2.0 EQUIPMENT AND MATERIALS SPECIFICATIONS

The depth filtration suite at the South San Francisco (SSF) facility (Room B-402) is equipped with a fully automated MilliporeSigma Mobius® FlexReady Solution for Clarification.

##### 2.1 Filter Media Specifications
The Glucogen-XR process utilizes a sequential "Primary" and "Secondary" (polishing) filtration train.

**Table 1: Technical Specifications for Clarification Filter Media**
| Filter Stage | Media Type | Component Material | Effective Filtration Area (EFA) | Nominal Pore Size Rating | Manufacturer |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary (D0HC)** | Millistak+® HC Pro | Synthetic Cellulose/Acid-washed Diatomaceous Earth | 22.0 m² (total) | 0.1 – 2.0 µm | BioPharma KGaA/Millipore |
| **Secondary (X0HC)** | Millistak+® HC Pro | Synthetic Cellulose/DE / Ion-Exchange Resin | 11.0 m² (total) | 0.05 – 0.1 µm | BioPharma KGaA/Millipore |

##### 2.2 Equipment Identifiers
*   **Filtration Skid ID:** GHS-CLAR-SKID-004
*   **Pressure Sensors:** P-402-A (Inlet), P-402-B (Interstage), P-402-C (Outlet)
*   **Flow Meter:** F-402-MAG (Electromagnetic induction)
*   **Transfer Pump:** P-402-PUMP (Low-shear peristaltic)

#### 3.0 PROCESS PARAMETERS AND OPERATING LIMITS (CPP & KPP)

The following parameters have been established through Design of Experiments (DoE) at the 50L pilot scale and validated during the Engineering Run (Batch: **GLUC-2025-001-ER**).

**Table 2: Critical (CPP) and Key Process Parameters (KPP)**
| Parameter | Classification | Target Value | Acceptable Range | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Flux Rate** | CPP | 100 LMH | 80 – 120 LMH | Maintains constant shear; prevents premature fouling. |
| **Differential Pressure (ΔP)** | CPP | < 10 psi | ≤ 20 psi (Max) | Prevents cell lysis and impurity breakthrough (HCP/DNA). |
| **Process Temperature** | KPP | 20°C | 15°C – 25°C | Viscosity management and protein stability. |
| **Flush Volume (WFI)** | KPP | 100 L/m² | 80 – 120 L/m² | Removal of extractables and leachables (TOC/Conductivity). |
| **Post-Hose Flush** | KPP | 1.5x Hold-up | 1.2x – 2.0x | Maximum recovery of GLP-1 peptide product. |

#### 4.0 DETAILED OPERATIONAL PROTOCOL (SOP-GHS-00984)

##### 4.1 Filter Installation and Wetting
1.  Verify the integrity of the single-use manifold and filter pods.
2.  Install 10x Millistak+ D0HC pods (2.2 m² each) in the first stage housing.
3.  Install 5x Millistak+ X0HC pods (2.2 m² each) in the second stage housing.
4.  **Flushing Procedure:** Perform a Water-for-Injection (WFI) flush at 150 LMH for 45 minutes to remove residual manufacturing byproducts.
    *   *Requirement:* Effluent TOC < 500 ppb; Conductivity < 1.3 µS/cm.
5.  **Equilibration:** Flush the system with 500L of Glucogen-XR Equilibration Buffer (Phosphate Buffer, pH 7.4).

##### 4.2 Product Loading and Filtration
The 2,000L harvest (Batch **GLUC-2025-XXX**) is transferred via the peristaltic pump.
1.  Initiate flow at 50 LMH for the first 10 minutes to establish a "pre-coat" layer of cells.
2.  Ramp flow to the target 100 LMH (36.6 L/min).
3.  Monitor ΔP across Stage 1 and Stage 2 every 15 minutes.
4.  **Calculations:**
    *   *Total Volume Filtered (V):* $V_{total} = \int_{0}^{t} Q(t) dt$
    *   *Throughput ($T$):* $T = V / EFA$ (Target: 100 L/m²)

##### 4.3 Post-Harvest Rinse and Recovery
To maximize the yield of Glucogen-XR, a buffer chase is performed.
1.  Once the Bioreactor is empty, introduce 200L of Recovery Buffer.
2.  Maintain 100 LMH until the air-detector (AD-402) triggers, indicating the buffer has cleared the line.
3.  Perform a "Blow-down" using regulated Nitrogen (N2) at 5 psi for 120 seconds to recover the hold-up volume within the pods.

#### 5.0 ANALYTICAL DATA FROM REPRESENTATIVE BATCHES

The following table summarizes the performance of the depth filtration unit operation for the first three pivotal clinical batches.

**Table 3: Depth Filtration Performance Data (GLUC-2025 Series)**
| Batch Number | Harvest VCC (x10⁶ cells/mL) | Harvest Viability (%) | Yield (Glucapeptide %) | Turbidity (NTU) Post-Clar | Step Log Reduction (DNA) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 22.4 | 92.1 | 94.8% | 4.2 | 1.8 |
| **GLUC-2025-002** | 21.8 | 90.5 | 95.2% | 3.8 | 2.1 |
| **GLUC-2025-003** | 23.1 | 93.4 | 93.9% | 4.5 | 1.9 |
| **Mean** | **22.43** | **92.00** | **94.63%** | **4.17** | **1.93** |

#### 6.0 IMPURITY CLEARANCE CAPABILITY
Depth filtration serves as the first orthogonal step for the removal of Host Cell Proteins (HCP) and high-molecular-weight DNA.

*   **DNA Clearance:** The X0HC secondary stage contains a charged resin that utilizes electrostatics to bind anionic DNA fragments. Average clearance is 1.5 - 2.2 LRV (Log Reduction Value).
*   **HCP Reduction:** While primarily a size-exclusion and adsorptive depth process, a 15-20% reduction in total HCP is typically observed via ELISA (Kit GHS-HCP-V3).

#### 7.0 SCALE-UP RATIONALE AND VALIDATION
The transition from 50L (Development) to 2,000L (GMP) followed the constant-flux, constant-throughput scaling law.
*   **Scaling Factor:** 40x.
*   **Validation Strategy:** Performance Qualification (PQ) was conducted over three consecutive runs. All runs met the predefined acceptance criteria of < 10 NTU final turbidity and > 90% step yield.

#### 8.0 DEVIATIONS AND INVESTIGATIONS
In Batch **GLUC-2025-004** (Pre-clinical), a pressure spike (ΔP = 22 psi) was observed at 85% of the total volume.
*   *Root Cause:* Higher than anticipated cell debris due to an extended harvest hold time (12 hours).
*   *Mitigation:* The SOP was updated to limit harvest hold to < 6 hours and increased the D0HC surface area by 10% for future 2,000L campaigns to provide additional safety margin.

#### 9.0 REGULATORY CONFORMANCE
This process complies with:
1.  **USP <1059>:** Excipient Performance.
2.  **ICH Q11:** Development and Manufacture of Drug Substances.
3.  **21 CFR 211.65:** Equipment Construction (Non-reactive, non-additive contact surfaces).

---
**Author:** Google Health Sciences Regulatory Affairs (GHS-RA)
**Date:** 24-May-2025
**Document ID:** GHS-GLUC-M3-DS-2.2.4.1-V1.0

---

## Bioburden Reduction Filtration

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2: MANUFACTURE
### SUBSECTION: 3.2.S.2.2.4.6: BIOBURDEN REDUCTION FILTRATION (BRF)

---

#### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive technical description of the Bioburden Reduction Filtration (BRF) process utilized during the primary recovery and clarification of **Glucogen-XR (glucapeptide extended-release)** drug substance, manufactured by **Google Health Sciences**, a division of Google Cloud Life Sciences. 

The BRF step represents the final stage of the Clarification sequence (following Centrifugation and Depth Filtration) and serves as the critical microbial control point prior to downstream purification (Protein A capture). The primary objective is the removal of residual cellular debris, fine particulates, and microorganisms to ensure a bioburden-controlled feedstream for the subsequent Chromatography 01 (C01) stage.

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The design, validation, and execution of the BRF process for Glucogen-XR are governed by the following international standards and regulatory guidances:

*   **ICH Q5A (R2):** Quality of Biotechnological Products: Viral Safety Evaluation.
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **FDA Guidance for Industry:** Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice (2004).
*   **USP <1229.4>:** Sterilizing Filtration of Liquids.
*   **PDA Technical Report No. 26 (Revised 2008):** Sterilizing Filtration of Liquids.
*   **ASTM F838-20:** Standard Test Method for Determining Bacterial Retention of Membrane Filters Utilized for Liquid Filtration.

#### 3.0 PROCESS OVERVIEW AND OBJECTIVES
The BRF process for Glucogen-XR utilizes a redundant-design, absolute-rated 0.22 μm polyethersulfone (PES) membrane system. The filtration is performed in a constant flow mode (Flux-controlled) to maintain process consistency and maximize filter capacity.

| Parameter | Specification |
| :--- | :--- |
| **Filter Material** | Hydrophilic Polyethersulfone (PES) |
| **Pore Size Rating** | 0.22 μm (Absolute) |
| **Configuration** | Pleated Cartridge |
| **Surface Area per Unit** | 0.54 m² per 10-inch element |
| **Target Flux** | 150 – 250 LMH (Liters per Meter Squared per Hour) |
| **Max Differential Pressure** | 30 psid (2.1 bar) |

#### 4.0 EQUIPMENT AND MATERIALS
All equipment utilized in the BRF process at the **3000 Innovation Drive** facility is qualified under IQ/OQ/PQ protocols.

##### 4.1 Filter Housing and Assemblies
*   **Housing ID:** EQ-BRF-H-501 / EQ-BRF-H-502 (Dual redundant setup)
*   **Material of Construction:** 316L Stainless Steel, Electropolished (Ra < 0.4 μm)
*   **Filter Cartridge:** Millipore Express® SHC (Sterile High Capacity) or equivalent validated PES.
*   **Tubing:** Platinum-cured silicone (AdvantaPure®) or reinforced braided Hose.

##### 4.2 Control Systems
The process is automated via the **Google Cloud Manufacturing Execution System (G-MES)**, utilizing Google-proprietary AI-driven predictive maintenance and pressure monitoring algorithms (Vertex AI for Manufacturing).

#### 5.0 PROCESS PARAMETERS AND OPERATING RANGES
The following table defines the Proven Acceptable Ranges (PAR) and Normal Operating Ranges (NOR) established during Quality by Design (QbD) studies and Process Characterization (PC).

**Table 1: Bioburden Reduction Filtration Process Parameters**

| Parameter | Units | NOR | PAR | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Inlet Temperature** | °C | 18 – 24 | 15 – 30 | Stability of Glucapeptide |
| **Pre-filtration Flux** | LMH | 200 | 100 – 300 | Prevents membrane fouling |
| **Maximum ΔP** | psid | < 15 | ≤ 30 | Structural integrity of PES |
| **Process Load Ratio** | L/m² | 500 – 800 | ≤ 1200 | Validated capacity limits |
| **Post-Wash Volume** | CV | 3 – 5 | 2 – 10 | Recovery of trapped product |

#### 6.0 DETAILED OPERATIONAL PROTOCOL (SOP-GHS-DS-044)

##### 6.1 Filter Preparation and Installation
1.  Verify the cleanliness of the filter housing (EQ-BRF-H-501) via Clean-in-Place (CIP) records.
2.  Install the 0.22 μm PES filter cartridges using aseptic technique (ISO 5 environment or locally protected laminar flow).
3.  Secure the housing and perform a visual inspection of all seals and O-rings (EPDM or Silicone).

##### 6.2 Pre-use Integrity Testing (PUPSIT)
In accordance with updated EU Annex 1 requirements and FDA risk-based approaches, Pre-use Post-sterilization Integrity Testing (PUPSIT) is performed.
1.  Wet the filter with WFI (Water for Injection) or equilibration buffer (Tris-HCl, pH 7.5).
2.  Perform a **Bubble Point Test** or **Diffusion Test** using the automated Integrity Tester (Sartocheck® 5).
3.  **Acceptance Criteria:** Diffusion rate ≤ 13.3 mL/min at 30 psi.

##### 6.3 Equilibration
The filter is equilibrated with 10 Column Volumes (CV) of Equilibration Buffer (20 mM Tris, 150 mM NaCl, pH 7.5) to stabilize the pH and conductivity of the membrane environment.

##### 6.4 Product Filtration (The "Glucogen-XR" Load)
The clarified harvest (Centrate/Filtrate) from the previous depth filtration step is pumped through the BRF system.
*   **Flow Rate Calculation:** $Q = Flux \times Area$.
*   For a 2000L batch (GLUC-2025-001), total surface area utilized is 4.0 m².
*   **Data Logging:** G-MES records pressure every 1 second to detect micro-instabilities.

##### 6.5 Product Recovery (Chase/Wash)
To ensure maximum yield of the Glucapeptide, a post-filtration wash is executed.
*   **Wash Buffer:** 20 mM Tris-HCl, pH 7.5.
*   **Volume:** 3 x Filter Dead Volume.
*   The wash is combined with the main pool in the Sterile Surge Tank (ST-505).

#### 7.0 REPRESENTATIVE BATCH DATA (CHRONOLOGICAL LOG)
The following table provides historical data for three representative consistency batches produced at the South San Francisco facility.

**Table 2: Historical Manufacturing Data (Section 3.2.S.2.2)**

| Batch Number | Date | Volume Loaded (L) | Initial ΔP (psi) | Final ΔP (psi) | Yield (%) | Bioburden (CFU/100mL) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 2045 | 1.2 | 4.8 | 99.4% | < 1 (Pass) |
| **GLUC-2025-002** | 19-JAN-2025 | 1988 | 1.1 | 5.2 | 99.1% | < 1 (Pass) |
| **GLUC-2025-003** | 26-JAN-2025 | 2012 | 1.3 | 4.9 | 99.7% | < 1 (Pass) |

#### 8.0 VALIDATION OF BIOBURDEN REDUCTION

##### 8.1 Bacterial Retention Studies
Validation was conducted using *Brevundimonas diminuta* (ATCC 19146) as the challenge organism, per ASTM F838-20. 
*   **Challenge Concentration:** $\geq 10^7$ CFU per cm² of effective filtration area.
*   **Results:** Zero CFU detected in the filtrate. Log Reduction Value (LRV) > 7.

##### 8.2 Extractables and Leachables (E&L)
The PES membrane was evaluated for E&L under "worst-case" conditions (high temperature, 24-hour contact time). 
*   **TOC Increase:** < 0.5 ppm.
*   **NVR (Non-volatile residue):** < 1 mg per 10-inch filter.
*   **Results:** Within safety limits for a GLP-1 receptor agonist therapeutic profile.

#### 9.0 CALCULATIONS AND STATISTICAL ANALYSIS

##### 9.1 Filter Sizing Calculation (V-max Method)
The filtration capacity was determined using the V-max equation:
$$t/V = (1/V_{max})t + 1/Q_i$$
Where:
*   $V$ = Cumulative volume filtered.
*   $t$ = Time.
*   $V_{max}$ = Maximum volume that can be filtered before the filter is completely plugged.
*   $Q_i$ = Initial flow rate.

Based on experimental data for Glucogen-XR, $V_{max}$ was determined to be 1850 L/m². A safety factor of 1.5x was applied, resulting in a design load of 800 L/m².

#### 10.0 DEVIATION AND OOS MANAGEMENT
In the event of a filtration interruption (e.g., pump failure or pressure spike), the following protocol is triggered:
1.  Immediately divert flow to the bypass loop (if available) or stop the pump.
2.  Assess the "Hold Time" of the Glucapeptide centrate in the upstream vessel (Maximum validated hold time: 48 hours at 2-8°C).
3.  If ΔP exceeds 30 psid, the filter must be replaced, and the batch undergo an Impact Assessment (IA) for potential shear-induced degradation.

#### 11.0 CONCLUSION
The Bioburden Reduction Filtration step for Glucogen-XR is a robust, validated process that ensures the microbial purity of the Glucapeptide drug substance. By utilizing high-capacity PES membranes and stringent integrity testing, Google Health Sciences ensures that every batch (e.g., GLUC-2025-XXX) meets the highest standards of safety and efficacy for patients with Type 2 Diabetes Mellitus.

---
**Footnotes:**
1. *Millipore Express SHC is a trademark of BioPharma KGaA/EMD Millipore.*
2. *G-MES Data Analytics Platform utilizes BigQuery for real-time multivariate analysis of filtration curves.*
3. *All water used in the process meets USP/EP/JP specifications for Water for Injection (WFI).*

---

# Purification - Chromatography Steps

## Capture Step (Protein A or equivalent)

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.2.2: DESCRIPTION OF MANUFACTURING PROCESS AND PROCESS CONTROLS
### SUBSECTION: P.4.1 PRIMARY CAPTURE CHROMATOGRAPHY (AFFINITY)

---

#### 1.0 OVERVIEW AND PROCESS OBJECTIVES
The primary capture step for Glucogen-XR (glucapeptide extended-release) utilizes High-Performance Affinity Chromatography (HPAC) employing a recombinant Protein A ligand (MabSelect PrismA™ or equivalent) coupled to a highly cross-linked agarose base matrix. This unit operation, designated as **Step CHR-01**, serves as the foundational purification stage following the Harvest and Clarification sequence (ref: Section 3.2.S.2.2.P.3).

The primary objectives of the Capture Step are:
1.  **Selective Enrichment:** To concentrate the glucapeptide moiety from the clarified bulk (harvested cell culture fluid, HCCF) while achieving a reduction of >98% in Host Cell Proteins (HCPs) and >99.9% reduction in DNA.
2.  **Volume Reduction:** To reduce the process volume by approximately 20-fold, transitioning from large-scale bioreactor volumes to manageable downstream process streams.
3.  **Buffer Exchange:** To transition the product from the complex cell culture environment (CD-CHO media) into a defined, stable aqueous buffer system suitable for subsequent viral inactivation and polishing steps.

#### 2.0 EQUIPMENT AND MATERIALS SPECIFICATIONS

##### 2.1 Chromatography Column Specifications
The capture step is performed using an automated large-scale chromatography system (e.g., Cytiva AxiChrom™ or equivalent) integrated with the Google Cloud Life Sciences (GHS) Manufacturing Execution System (MES).

**Table 1: Column Design and Packing Specifications**
| Parameter | Specification | Rationale |
| :--- | :--- | :--- |
| **Resin Type** | MabSelect PrismA™ | Enhanced dynamic binding capacity (DBC) and alkaline stability |
| **Matrix** | Highly cross-linked agarose | High flow rates and low non-specific binding |
| **Average Particle Size ($d_{50}$)** | 60 μm | Balance between resolution and pressure drop |
| **Column Diameter** | 1000 mm (1.0 m) | Scale-up requirement for 2,000L - 12,000L batches |
| **Target Bed Height** | 20.0 cm ± 2.0 cm | Optimized residence time and pressure flow |
| **Column Volume (CV)** | ~157.1 Liters | Based on $V = \pi \cdot r^2 \cdot h$ |
| **Hardware Material** | 316L Stainless Steel / EPDM Gaskets | GMP compatibility and CIP resistance |
| **Equipment ID** | COL-DS-CHR-01 | GHS Asset Registry |

##### 2.2 Resin Lifespan and Integrity
Resin performance is monitored over the course of the lifecycle. Based on validation studies (Report: GHS-VAL-RES-2024-001), the resin is validated for 80 cycles.
*   **Storage Solution:** 20% Ethanol / 0.1 M Sodium Acetate.
*   **Sanitization Solution:** 0.5 M NaOH (Contact time: 15–30 minutes).

#### 3.0 PROCESS PARAMETERS AND OPERATING RANGES

The following parameters represent the validated "Design Space" for the Capture Step of Glucogen-XR. These were established during Quality by Design (QbD) studies and verified in Pilot Plant runs (Batch Series GLUC-2025-P01 through P05).

**Table 2: Critical Process Parameters (CPPs) and Key Process Parameters (KPPs)**
| Parameter | Variable Type | Setpoint / Target | Proven Acceptable Range (PAR) |
| :--- | :--- | :--- | :--- |
| **Flow Velocity (Loading)** | CPP | 300 cm/h | 150 – 450 cm/h |
| **Residence Time** | KPP | 4.0 minutes | 2.5 – 6.0 minutes |
| **Loading Capacity** | CPP | 45 g/L resin | ≤ 55 g product / L resin |
| **Load pH** | KPP | 7.2 | 6.8 – 7.6 |
| **Load Conductivity** | KPP | 14.5 mS/cm | 10.0 – 20.0 mS/cm |
| **Elution pH** | CPP | 3.5 | 3.3 – 3.7 |
| **Operating Temperature** | KPP | 20°C | 15 – 25°C |

#### 4.0 BUFFERS AND SOLUTIONS

All buffers are prepared in a dedicated Buffer Preparation Suite using USP-grade Water for Injection (WFI). Buffers are filtered through 0.22 μm filters prior to use in the Capture Step.

**Table 3: Buffer Compositions and Specifications**
| Buffer ID | Description | Composition | Target pH | Target Cond. (mS/cm) |
| :--- | :--- | :--- | :--- | :--- |
| **B-EQ-01** | Equilibration | 25 mM Tris, 100 mM NaCl | 7.4 ± 0.2 | 12.5 ± 1.5 |
| **B-W1-02** | Wash 1 | 25 mM Tris, 1.0 M NaCl | 7.4 ± 0.2 | 85.0 ± 10.0 |
| **B-W2-03** | Wash 2 (Intermediate) | 50 mM Sodium Acetate | 5.5 ± 0.2 | 4.5 ± 1.0 |
| **B-EL-04** | Elution Buffer | 100 mM Glycine-HCl | 3.5 ± 0.2 | 2.5 ± 0.8 |
| **B-ST-05** | Strip Buffer | 100 mM Citrate | 2.1 ± 0.2 | 15.0 ± 2.0 |
| **B-CIP-06** | Cleaning-in-Place | 0.5 M NaOH | >13.0 | N/A |

#### 5.0 DETAILED OPERATIONAL PROTOCOL (STEP-BY-STEP)

The following sequence is executed by the DeltaV™ control system under the supervision of Production Personnel at the South San Francisco site.

##### Step 1: Sanitization and Equilibration
1.  Verify the column is stored in 20% Ethanol.
2.  Flush the system and column with 3.0 CV of WFI to remove storage solution.
3.  Sanitize with 3.0 CV of 0.5 M NaOH (B-CIP-06) at 150 cm/h. Hold for 20 minutes to ensure microbial control and endotoxin reduction.
4.  Equilibrate with 5.0 CV of Equilibration Buffer (B-EQ-01) until the effluent pH and conductivity match the inlet specifications (pH 7.4 ± 0.2, Conductivity 12.5 ± 1.5 mS/cm).

##### Step 2: Loading of Clarified Bulk
1.  Charge the Clarified Bulk (HCCF) onto the column at a flow velocity of 300 cm/h.
2.  Total load amount must not exceed the validated dynamic binding capacity (DBC) of 55 g/L.
3.  Monitor the UV280 absorbance. The loading phase continues until the specified volume of HCCF has been processed.
4.  Perform an "Air-Slug" or "Chaser" with 1.0 CV of Equilibration Buffer (B-EQ-01) to ensure all product in the system lines is pushed onto the column.

##### Step 3: Sequential Wash Phases
1.  **Wash 1 (High Salt):** Apply 4.0 CV of B-W1-02. The high ionic strength (1.0 M NaCl) disrupts non-specific electrostatic interactions between Host Cell Proteins (HCPs) and the resin/product. Monitor UV signal until it returns to baseline.
2.  **Wash 2 (Low pH Intermediate):** Apply 3.0 CV of B-W2-03 (pH 5.5). This step serves to transition the column to a lower pH environment and remove weakly bound impurities (acidic HCPs) without eluting the Glucogen-XR glucapeptide.

##### Step 4: Product Elution
1.  Initiate elution using Elution Buffer (B-EL-04) at 150 cm/h.
2.  Monitor UV280 signal.
3.  **Collection Start:** Start collecting the eluate when the UV280 signal exceeds 100 mAU/cm (or a specific OD value determined by the process control strategy).
4.  **Collection End:** Cease collection when the UV280 signal drops below 100 mAU/cm on the trailing edge of the peak.
5.  The resulting pool is the **Protein A Eluate (PAE)**.
6.  *Immediate Action:* The PAE is transferred to a chilled, agitated vessel for Step CHR-02 (Low pH Viral Inactivation).

##### Step 5: Post-Elution Strip and Regeneration
1.  Apply 3.0 CV of Strip Buffer (B-ST-05) to remove strongly bound molecules and residual aggregates.
2.  Perform CIP with 3.0 CV of 0.5 M NaOH (B-CIP-06).
3.  Store the column in 20% Ethanol/0.1 M Sodium Acetate if not used within 24 hours.

#### 6.0 IN-PROCESS CONTROLS (IPC) AND ANALYTICAL DATA

For every batch (GLUC-2025-XXX), the following IPCs are recorded and must meet the predefined acceptance criteria.

**Table 4: In-Process Control Limits for Capture Step**
| IPC Test | Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Eluate pH** | Potentiometric | 3.4 – 3.8 |
| **Eluate Concentration** | UV $A_{280}$ | 15.0 – 35.0 g/L |
| **Step Yield (%)** | Mass Balance | 85.0% – 105.0% |
| **HCP Reduction** | ELISA | ≥ 2.0 Log Reduction Value (LRV) |
| **DNA Reduction** | qPCR | ≥ 3.0 Log Reduction Value (LRV) |
| **Aggregates (SEC)** | SE-HPLC | ≤ 2.0% |

##### Representative Batch Data (Table 5)
Data extracted from recent Process Performance Qualification (PPQ) batches manufactured at 3000 Innovation Drive.

| Batch Number | Load Mass (kg) | Eluate Mass (kg) | Yield (%) | Purity (SEC-HPLC %) | HCP (ppm) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 7.05 | 6.72 | 95.3 | 99.2 | 1,250 |
| **GLUC-2025-002** | 7.12 | 6.84 | 96.1 | 99.4 | 1,180 |
| **GLUC-2025-003** | 6.98 | 6.61 | 94.7 | 99.1 | 1,310 |
| **Target Value** | **~7.0** | **~6.7** | **>90%** | **>98%** | **<2,000** |

#### 7.0 PROCESS CALCULATIONS AND FORMULAE

The following mathematical models are used to ensure consistency across scales:

1.  **Retention Time ($\tau$):**
    $$\tau = \frac{V_{bed}}{Q}$$
    Where $V_{bed}$ is the column volume and $Q$ is the volumetric flow rate.

2.  **Dynamic Binding Capacity (DBC at 10% Breakthrough):**
    $$DBC_{10\%} = \frac{C_0 \cdot (V_{10\%} - V_0)}{V_{resin}}$$
    Where $C_0$ is the feed concentration and $V_{10\%}$ is the volume loaded at 10% breakthrough.

3.  **Step Yield:**
    $$Yield (\%) = \frac{C_{eluate} \cdot V_{eluate}}{C_{load} \cdot V_{load}} \times 100$$

#### 8.0 REGULATORY COMPLIANCE AND GUIDELINES
The Capture Step design and validation comply with the following:
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
*   **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).

#### 9.0 DEVIATIONS AND INVESTIGATIONS
In the event of a pressure excursion (exceeding 3.0 bar delta-P) or a failure to meet pH specifications in the eluate, a non-conformance report (NCR) is triggered within the GHS Quality Management System (QMS). Historical data indicates that the most common cause of yield loss is improper column packing, monitored via HETP (Height Equivalent to a Theoretical Plate) and Asymmetry tests performed prior to every batch.

**Table 6: Column Integrity Testing (Pre-Run)**
| Test | Acceptance Criteria | Result (GLUC-2025-001) | Status |
| :--- | :--- | :--- | :--- |
| **HETP (cm)** | ≤ 0.05 | 0.032 | Pass |
| **Asymmetry ($A_s$)** | 0.8 – 1.8 | 1.15 | Pass |

---
*End of Subsection P.4.1*

---

## Intermediate Purification

# MODULE 3: QUALITY (3.2.S.2.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: 3.2.S.2.2.4.3 INTERMEDIATE PURIFICATION (HYDROPHOBIC INTERACTION CHROMATOGRAPHY - HIC)

### 3.2.S.2.2.4.3.1 Process Description and Objectives
The intermediate purification stage for Glucogen-XR (glucapeptide) utilizes Hydrophobic Interaction Chromatography (HIC) to achieve high-resolution separation of the target monomeric glucapeptide from process-related and product-related impurities. This stage is critical for the removal of truncated peptide species, des-amido variants, and residual Host Cell Proteins (HCP) that persist following the initial Capture Chromatography (Protein A) step.

The HIC step leverages the reversible interaction between the hydrophobic regions of the Glucogen-XR molecule and the hydrophobic ligands on the stationary phase. Given the extended-release profile of this peptide, maintaining the conformational integrity of the hydrophobic domains is paramount.

#### 3.2.S.2.2.4.3.1.1 Target Impurity Profile (Critical Quality Attributes)
The following impurities are specifically targeted for reduction during the Intermediate Purification phase:
*   **Truncated Glucapeptide Species:** Primarily N-1 and N-2 deletions.
*   **High Molecular Weight Species (HMWS):** Dimeric and multimeric aggregates.
*   **Host Cell Proteins (HCP):** Residual CHO-K1 GS proteins.
*   **Residual DNA:** Fragmented genomic DNA from the host cell.
*   **Leached Protein A:** Ligand leakage from the previous capture step.

---

### 3.2.S.2.2.4.3.2 Equipment and Materials
All equipment used in the intermediate purification of Glucogen-XR is qualified under Google Health Sciences (GHS) Installation Qualification (IQ) and Operational Qualification (OQ) protocols.

**Table 1: Equipment Specifications for Intermediate Purification**
| Equipment ID | Description | Manufacturer/Model | Capacity/Specification |
| :--- | :--- | :--- | :--- |
| **COL-HIC-04** | Preparative Chromatography Column | Cytiva AxiChrom 600 | 600 mm ID, 30 cm Bed Height |
| **SKID-PUR-09** | Automated Chromatography System | Google Cloud Bio-Logic 2000 | Flow rate: 10–200 L/h |
| **UV-DET-88** | Multi-wavelength UV Detector | Knauer Smartline 2550 | 214 nm, 280 nm, 300 nm |
| **CON-DET-12** | Conductivity Sensor | Emerson Rosemount | 0.1 – 500 mS/cm |
| **PH-DET-05** | In-line pH Sensor | Mettler Toledo | pH 0.0 – 14.0 |
| **TANK-HIC-01** | Feed Conditioning Tank | GHS Custom 1000L | 316L Stainless Steel |

**Table 2: Raw Materials and Compendial Grades**
| Material Name | Function | Grade | Supplier |
| :--- | :--- | :--- | :--- |
| **Butyl Sepharose HP** | Stationary Phase | USP/NF Equivalent | Cytiva |
| **Ammonium Sulfate** | Kosmotropic Agent | USP/EP/JP | BioPharma/EMD Millipore |
| **Sodium Phosphate** | Buffer Component | USP/EP | Sigma-Aldrich |
| **WFI (Water for Inj.)** | Solvent | USP/EP | GHS In-house |
| **Ethanol (20% v/v)** | Storage Solution | USP/EP | Spectrum Chemical |

---

### 3.2.S.2.2.4.3.3 Buffer and Solution Preparation
All buffers are prepared in the GHS Central Buffer Preparation Suite. Solutions are filtered through 0.22 µm PES filters (Millipore Express SHC) into sterile distribution bags.

#### 3.2.S.2.2.4.3.3.1 Buffer Recipes and Specifications
**Table 3: HIC Buffer Composition and Release Criteria**
| Buffer ID | Description | Composition | Target pH | Target Conductivity |
| :--- | :--- | :--- | :--- | :--- |
| **HIC-BUF-A** | Equilibration/Load Buffer | 25 mM Na-Phosphate, 1.2 M (NH4)2SO4 | 7.0 ± 0.1 | 145 ± 5 mS/cm |
| **HIC-BUF-B** | Wash Buffer 1 | 25 mM Na-Phosphate, 1.0 M (NH4)2SO4 | 7.0 ± 0.1 | 122 ± 4 mS/cm |
| **HIC-BUF-C** | Elution Buffer (Gradient) | 25 mM Na-Phosphate | 7.0 ± 0.1 | 2.5 ± 0.5 mS/cm |
| **HIC-BUF-D** | Strip/Cleaning Buffer | 0.1 M NaOH | N/A | >200 mS/cm |
| **HIC-BUF-E** | Sanitization Buffer | 0.5 M NaOH | N/A | >400 mS/cm |

---

### 3.2.S.2.2.4.3.4 Step-by-Step Operating Procedure
The following protocol describes the intermediate purification of Batch **GLUC-2025-001** through **GLUC-2025-010**.

#### Step 1: Feed Conditioning (Adjustment)
The eluate from the Capture Step (Protein A) is collected and its salt concentration increased to promote binding on the HIC resin.
1.  Verify the volume of the Protein A eluate in **TANK-HIC-01**.
2.  Add a concentrated stock solution of 3.5 M Ammonium Sulfate until the final concentration in the feed is 1.2 M.
3.  Agitate at 60 RPM for 30 minutes at 18–22°C.
4.  Confirm pH is 7.0 ± 0.2. Adjust using 1 M Phosphoric Acid or 1 M NaOH if necessary.

#### Step 2: Column Equilibration
1.  Flush the column with 2 Column Volumes (CV) of WFI to remove storage solution.
2.  Equilibrate with 5 CV of **HIC-BUF-A** at a linear velocity of 150 cm/h.
3.  Monitor effluent conductivity and pH. Equilibration is complete when effluent parameters match influent within ±2%.

#### Step 3: Loading
1.  Load the conditioned feed onto the **Butyl Sepharose HP** column at 100 cm/h.
2.  Maintain a loading density of 25–30 mg glucapeptide per mL of resin.
3.  Collect the flow-through (FT) fraction and monitor UV280. If UV280 exceeds 50 mAU, stop loading (indicates premature breakthrough).

#### Step 4: Wash Cycles
1.  **Wash 1:** Apply 3 CV of **HIC-BUF-A** to remove non-specifically bound proteins.
2.  **Wash 2:** Apply 5 CV of **HIC-BUF-B** (1.0 M Ammonium Sulfate). This "stringent wash" removes weakly hydrophobic truncated species.

#### Step 5: Elution (Linear Gradient)
1.  Perform a linear gradient from 100% **HIC-BUF-A** (1.2 M salt) to 100% **HIC-BUF-C** (0 M salt) over 15 CV.
2.  **Fraction Collection:** Collect fractions starting at a UV280 rise of 100 mAU.
3.  Pooling Criteria: Pool fractions where the purity (as determined by at-column HPLC analysis) of Glucogen-XR is ≥ 98.0% and HMWS is ≤ 0.5%.

---

### 3.2.S.2.2.4.3.5 In-Process Control (IPC) and Analytical Results
Data from three representative batches (GLUC-2025-004, GLUC-2025-005, GLUC-2025-006) demonstrate the consistency of the intermediate purification step.

**Table 4: IPC Data for Intermediate Purification Batches**
| Parameter | Limit/Target | GLUC-2025-004 | GLUC-2025-005 | GLUC-2025-006 |
| :--- | :--- | :--- | :--- | :--- |
| **Step Yield (%)** | 85.0 – 95.0% | 88.4% | 90.1% | 89.2% |
| **Purity (RP-HPLC %)** | ≥ 98.0% | 99.1% | 99.3% | 99.2% |
| **HMWS (%)** | ≤ 0.5% | 0.2% | 0.1% | 0.2% |
| **HCP (ppm)** | ≤ 20 ppm | 8 ppm | 6 ppm | 7 ppm |
| **Leached Prot. A** | ≤ 5 ng/mg | < LOD | < LOD | < LOD |

#### 3.2.S.2.2.4.3.5.1 Statistical Analysis of Purification Performance
Statistical analysis using JMP software version 16.0 was conducted on 10 consecutive batches (GLUC-2025-001 through GLUC-2025-010). The Process Capability Index (Cpk) for the removal of truncated species was calculated as follows:

$$Cpk = \frac{USL - \mu}{3\sigma}$$

Where:
*   $USL$ (Upper Specification Limit) = 1.0% truncated species
*   $\mu$ (Mean) = 0.45%
*   $\sigma$ (Standard Deviation) = 0.08%
*   **Calculated Cpk = 2.29**, indicating a highly capable and robust process.

---

### 3.2.S.2.2.4.3.6 Chromatographic Profile
The figure below (omitted in text, described here) represents a typical chromatogram for the Glucogen-XR HIC step.
1.  **Peak 1 (Pre-peak):** Contains truncated N-terminal variants.
2.  **Peak 2 (Main Peak):** High-purity Glucogen-XR monomer.
3.  **Peak 3 (Post-peak):** Contains HMWS and strongly bound host cell proteins.

---

### 3.2.S.2.2.4.3.7 Cleaning and Lifetime Validation
To prevent carryover and ensure resin longevity, a rigorous Cleaning-In-Place (CIP) protocol is executed after every cycle.

**CIP Protocol:**
1.  **Strip:** 2 CV of **HIC-BUF-D** (0.1 M NaOH) at 50 cm/h.
2.  **Sanitize:** 3 CV of **HIC-BUF-E** (0.5 M NaOH).
3.  **Contact Time:** 60 minutes static soak in sanitization buffer.
4.  **Neutralization:** WFI flush until effluent pH < 8.0.
5.  **Storage:** 3 CV of 20% Ethanol.

**Resin Lifetime Study:** Resin lifetime was validated for up to 50 cycles. Critical parameters (HCP removal, step yield, and peak symmetry) remained within specifications (Asymmetry $A_s$ 0.8–1.5).

---

### 3.2.S.2.2.4.3.8 Deviations and Investigations
During the manufacture of batch **GLUC-2025-008**, a pressure spike was observed (3.5 bar, limit 3.0 bar).
*   **Investigation ID:** INV-GLUC-2025-008-01
*   **Root Cause:** Temporary blockage in the pre-column 0.45 µm filter due to ammonium sulfate precipitation.
*   **Impact Assessment:** No impact on product quality; the filter was replaced, and the process was resumed. The eluate met all IPC specifications.

---

### 3.2.S.2.2.4.3.9 Regulatory References
1.  **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
2.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **USP <1059>:** Excipient Performance.
4.  **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).

### 3.2.S.2.2.4.3.10 Conclusion
The intermediate purification step for Glucogen-XR effectively bridges the gap between crude capture and final polishing. By optimizing the ammonium sulfate gradient, Google Health Sciences ensures the consistent removal of product-related variants, ensuring the safety and efficacy of the GLP-1 receptor agonist for patients with Type 2 Diabetes.

---

## Polishing Chromatography

# MODULE 3: QUALITY (3.2.S. DRUG SUBSTANCE)
## SECTION 3.2.S.2.2: MANUFACTURE - PURIFICATION AND MODIFICATION OPERATIONS
### SUBSECTION 3.2.S.2.2.4.5: POLISHING CHROMATOGRAPHY (STEP 5: ANION EXCHANGE CHROMATOGRAPHY)

---

#### 1.0 INTRODUCTION AND OBJECTIVE
The polishing chromatography step for Glucogen-XR (glucapeptide extended-release) represents the final high-resolution purification stage of the downstream process. This step is designed to achieve the stringent purity profiles required for long-acting GLP-1 receptor agonists produced in the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line.

The primary objective of this unit operation is the removal of trace-level impurities, including:
*   **Product-Related Impurities:** Des-amino isoforms, truncated peptide fragments (n-1, n-2), and high-molecular-weight aggregates (HMWAs).
*   **Process-Related Impurities:** Residual Host Cell Proteins (HCP), Host Cell DNA (hcDNA), leached Protein A ligand, and potential viral contaminants.
*   **Charge Variants:** Fine-tuning the isoform distribution to ensure a consistent glycosylation and PEGylation profile (where applicable in the extended-release moiety).

This step utilizes High-Performance Strong Anion Exchange (AEX) chromatography using a quaternary ammonium ligand chemistry coupled to a monodisperse, high-flow agarose base matrix.

---

#### 2.0 EQUIPMENT AND MATERIALS SPECIFICATIONS

##### 2.1 Chromatography System
The process is executed using the **GHS-Purify-Max 2000** (Customized GE Healthcare/Cytiva ÄKTA Process equivalent), integrated with Google Cloud Life Sciences (GCLS) Real-Time Monitoring (RTM) systems.

| Equipment ID | Description | Location |
| :--- | :--- | :--- |
| **EQ-AEX-001** | Preparative HPLC/Chromatography System | Suite 402, 3000 Innovation Dr. |
| **COL-AEX-900** | 900mm Stainless Steel Process Column | Suite 402, 3000 Innovation Dr. |
| **SEN-UV-401** | Multi-wavelength UV Detector (214nm, 254nm, 280nm) | Inline |
| **SEN-CD-402** | Conductivity and pH Flow-cell | Inline |

##### 2.2 Resin Specifications
The resin selected for Glucogen-XR polishing is **Capto Q ImpRes** (or equivalent validated quaternary ammonium strong anion exchanger).

| Parameter | Specification |
| :--- | :--- |
| **Matrix** | High-flow agarose, cross-linked |
| **Functional Group** | $-\text{N}^+(\text{CH}_3)_3$ (Quaternary ammonium) |
| **Ionic Capacity** | $0.15 - 0.25 \text{ mmol Cl}^- / \text{mL}$ resin |
| **Particle Size ($d_{50v}$)** | $36 - 44 \mu\text{m}$ |
| **Pressure/Flow Spec** | $< 3 \text{ bar}$ at $220 \text{ cm/h}$ ($20 \text{ cm}$ bed height) |

---

#### 3.0 BUFFER PREPARATION AND COMPOSITION
All buffers are prepared using Water for Injection (WFI) and filtered through a $0.22 \mu\text{m}$ polyethersulfone (PES) membrane into Gamma-irradiated single-use bags (SUBs).

**Table 3.1: Buffer Formulations for Polishing Chromatography**
| Buffer ID | Description | Composition | pH Spec | Conductivity ($\text{mS/cm}$) |
| :--- | :--- | :--- | :--- | :--- |
| **B-AEX-EQ** | Equilibration Buffer | $20 \text{ mM}$ Tris-HCl | $8.0 \pm 0.1$ | $1.8 \pm 0.4$ |
| **B-AEX-W1** | Wash 1 Buffer | $20 \text{ mM}$ Tris-HCl, $50 \text{ mM}$ NaCl | $8.0 \pm 0.1$ | $6.5 \pm 0.5$ |
| **B-AEX-EL** | Elution Buffer (Gradient) | $20 \text{ mM}$ Tris-HCl, $500 \text{ mM}$ NaCl | $8.0 \pm 0.1$ | $48.2 \pm 2.5$ |
| **B-AEX-ST** | Strip/Regen Buffer | $20 \text{ mM}$ Tris-HCl, $2.0 \text{ M}$ NaCl | $8.0 \pm 0.2$ | $> 150$ |
| **B-AEX-SN** | Sanitization | $1.0 \text{ N}$ NaOH | N/A | $> 200$ |

---

#### 4.0 DETAILED OPERATIONAL PROTOCOL (STEP-BY-STEP)

The operation follows a "Bind-and-Elute" mode. The following steps are automated via the **GHS-Control-v8.4** Distributed Control System.

##### 4.1 Column Packing and Qualification
The column (ID: 900mm) is packed to a bed height of $20.0 \pm 1.0 \text{ cm}$.
1.  **Asymmetry Calculation ($A_s$):** Target $0.8 - 1.5$.
2.  **HETP Calculation:** Height Equivalent to a Theoretical Plate must be $< 0.05 \text{ cm}$.
3.  **Protocol:** $1\% \text{ v/v}$ Acetone pulse at $100 \text{ cm/h}$.

##### 4.2 Sanitization and Equilibration
*   **Sanitization:** Flow $2$ Column Volumes (CV) of $1.0 \text{ N}$ NaOH (B-AEX-SN). Contact time: $60$ minutes.
*   **Flush:** Flow $3 \text{ CV}$ of WFI.
*   **Equilibration:** Flow $5 \text{ CV}$ of B-AEX-EQ until pH and conductivity of the effluent match the influent ($\pm 0.1 \text{ pH}$ units, $\pm 5\% \text{ conductivity}$).

##### 4.3 Loading
The Intermediate Pool from Step 4 (Viral Inactivation/Neutralization) is adjusted to pH $8.0 \pm 0.1$ and conductivity $< 3.5 \text{ mS/cm}$.
*   **Loading Capacity:** Max $35 \text{ g}$ Glucogen-XR per Liter of resin.
*   **Flow Rate:** $150 \text{ cm/h}$ ($1,590 \text{ L/h}$ for $900\text{mm}$ column).

##### 4.4 Wash Phase
*   **Wash 1 (Post-Load):** $3 \text{ CV}$ of B-AEX-EQ to remove unbound material.
*   **Wash 2 (Impurity Removal):** $5 \text{ CV}$ of B-AEX-W1 ($50 \text{ mM}$ NaCl) to remove weakly bound HCPs and truncated peptides.

##### 4.5 Gradient Elution
A linear salt gradient is employed to resolve closely related glucapeptide isoforms.
*   **Start:** $0\% \text{ B-AEX-EL}$
*   **End:** $60\% \text{ B-AEX-EL}$
*   **Duration:** $15 \text{ CV}$
*   **Fraction Collection:** Peak collection starts at $50 \text{ mAU}$ ($280 \text{ nm}$) and ends at $50 \text{ mAU}$ on the tail.

---

#### 5.0 PROCESS CONTROL AND DATA ANALYSIS

The following table summarizes the representative results for three (3) consistency batches of Glucogen-XR.

**Table 5.1: Polishing Chromatography Batch Results (Summary)**
| Parameter | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Batch GLUC-2025-003 | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **Load Amount (g)** | $4,250$ | $4,180$ | $4,310$ | $\leq 4,500$ |
| **Step Yield (%)** | $92.4\%$ | $91.8\%$ | $93.1\%$ | $\geq 85.0\%$ |
| **HCP (ppm)** | $< 5$ | $< 5$ | $< 5$ | $< 10$ |
| **hcDNA (pg/mg)** | $< 1$ | $< 1$ | $< 1$ | $< 5$ |
| **Purity (RP-HPLC %)** | $99.4\%$ | $99.5\%$ | $99.3\%$ | $\geq 98.5\%$ |
| **Aggregate (SEC %)** | $0.2\%$ | $0.1\%$ | $0.2\%$ | $\leq 0.5\%$ |

##### 5.1 Statistical Analysis of Elution Profile
The elution peak center is consistently observed at $22.4 \pm 1.2 \text{ mS/cm}$ conductivity. The Gaussian distribution of the main peak indicates high resolution of the $n-1$ species, which typically elutes in the leading edge (resolved at $< 18 \text{ mS/cm}$).

---

#### 6.0 IN-PROCESS CONTROLS (IPC)

| IPC Test | Method | Frequency | Action Limit |
| :--- | :--- | :--- | :--- |
| **Bioburden** | USP <61> | Per Batch | $< 1 \text{ CFU}/10 \text{ mL}$ |
| **Endotoxin** | USP <85> | Per Batch | $< 0.5 \text{ EU/mL}$ |
| **Conductivity** | Potentiometric | Continuous | Per SOP-PR-440 |
| **pH** | Potentiometric | Continuous | Per SOP-PR-440 |

---

#### 7.0 CLEANING AND REGENERATION (CIP)
Post-elution, the resin is stripped using $3 \text{ CV}$ of B-AEX-ST ($2.0 \text{ M}$ NaCl) to remove strongly bound proteins and DNA. This is followed by a Cleaning-in-Place (CIP) procedure:
1.  **$1.0 \text{ M}$ NaOH:** $3 \text{ CV}$, up-flow, $60 \text{ min}$ contact.
2.  **$2.0 \text{ M}$ NaCl / $0.1 \text{ M}$ Acetic Acid:** $2 \text{ CV}$ (optional for lipid removal).
3.  **Storage:** $20\% \text{ Ethanol}$ or $0.1 \text{ M}$ NaOH.

**Resin Lifetime Study:** Resin is validated for $50$ cycles. Performance is monitored via the "HETP Trend Analysis" within the Google Cloud Life Sciences Manufacturing Analytics Platform.

---

#### 8.0 REGULATORY COMPLIANCE AND REFERENCES
This polishing step is designed in accordance with the following guidelines:
1.  **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
2.  **ICH Q11:** Development and Manufacture of Drug Substances.
3.  **FDA Guidance for Industry:** Q8, Q9, and Q10 Questions and Answers - Appendix on Q8, Q9, and Q10.
4.  **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.

*Cross-Reference:* For viral clearance data associated with this step (AEX chromatography typically provides $\geq 4 \log_{10}$ reduction for XMuLV), please refer to **Section 3.2.S.3.2: Viral Safety Evaluation.**

---
**END OF SECTION**

---

# Viral Inactivation and Removal

## Low pH Viral Inactivation

# MODULE 3: QUALITY (3.2.S. DRUG SUBSTANCE)
## SECTION 3.2.S.2.6: MANUFACTURING PROCESS DEVELOPMENT
### SUBSECTION: 3.2.S.2.6.4: VIRAL SAFETY EVALUATION
#### DOCUMENT ID: GHS-GLUC-M3-DS-VI-004

---

### 1.0 INTRODUCTION: LOW pH VIRAL INACTIVATION (LPVI)

The manufacturing process for **Glucogen-XR (glucapeptide extended-release)**, produced by **Google Health Sciences**, incorporates a robust and dedicated orthogonal viral clearance strategy to ensure the safety of the drug substance. As Glucogen-XR is expressed in a Chinese Hamster Ovary (CHO-K1 GS knockout, GHS-CHO-001) cell line, the potential for endogenous retrovirus-like particles (RVLPs) is inherent. To mitigate this risk, a Low pH Viral Inactivation (LPVI) step is implemented immediately following the Protein A affinity chromatography capture step.

This section provides an exhaustive technical description of the LPVI unit operation, including process parameters, validation data, scalability assessments, and the results of viral spiking studies conducted in accordance with **ICH Q5A (R2)** and **ICH Q5B**.

---

### 2.0 REGULATORY FRAMEWORK AND COMPLIANCE

The design, qualification, and validation of the LPVI step for Glucogen-XR are governed by the following regulatory guidelines:

*   **ICH Q5A (R2):** Quality of Biotechnological Products: Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin.
*   **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
*   **USP <1050.1>:** Design, Construction, and Monitoring of Systems for Viral Inactivation.
*   **FDA Guidance for Industry (1997):** Points to Consider in the Manufacture and Testing of Monoclonal Antibody Products for Human Use.
*   **EMA/CHMP/BWP/248/2001:** Guideline on Virus Safety Evaluation of Biotechnological Investigational Medicinal Products.

---

### 3.0 PROCESS DESCRIPTION AND PARAMETERS

The LPVI step is situated between the **Capture Eluate (Peak 1)** collection and the **Cation Exchange (CEX) Chromatography** step. The acidic nature of the Protein A eluate (typically pH 3.5 – 3.8) provides a baseline, which is further adjusted to a target pH of 3.50 to ensure robust inactivation of enveloped viruses.

#### 3.1 Equipment Specification
The process utilizes the **Google Bio-Cloud Smart-Skid (GBC-SS-09)**, an automated, closed-system single-use technology (SUT) integrated with real-time cloud analytics for pH and temperature monitoring.

| Equipment ID | Component | Specification/Material |
| :--- | :--- | :--- |
| **GHS-SU-VES-500** | Mixing Vessel | 500L Single-Use Jacket Bag (PE/EVOH) |
| **GHS-PH-PROBE-04** | pH Sensor | In-line High-Precision Mettler Toledo |
| **GHS-TMP-DET-11** | Temp Sensor | PT100 Resistance Temperature Detector |
| **GHS-PMP-PERI-02** | Peristaltic Pump | Masterflex I/P Digital Drive |
| **GHS-FIL-0.22UM** | Post-Inact Filter | Millipore Express SHC (0.22 µm) |

#### 3.2 Operational Parameters (Proven Acceptable Ranges - PAR)

Extensive Characterization Studies (ECS) were performed to define the Normal Operating Range (NOR) and the Proven Acceptable Range (PAR).

**Table 1: LPVI Critical Process Parameters (CPPs)**

| Parameter | Units | Normal Operating Range (NOR) | Proven Acceptable Range (PAR) | Criticality |
| :--- | :--- | :--- | :--- | :--- |
| **Target pH** | pH units | 3.50 ± 0.05 | 3.30 – 3.70 | **Critical** |
| **Incubation Time** | minutes | 60 – 90 | 30 – 120 | **Critical** |
| **Temperature** | °C | 18.0 – 25.0 | 15.0 – 30.0 | **Non-Critical** |
| **Mixing Speed** | RPM | 100 – 150 | 50 – 250 | **Non-Critical** |
| **Protein Conc.** | g/L | 5.0 – 15.0 | 1.0 – 30.0 | **Non-Critical** |

---

### 4.0 STEP-BY-STEP OPERATIONAL PROTOCOL (SOP-MFG-GLUC-442)

The following protocol is executed for all commercial-scale batches (e.g., **GLUC-2025-001** through **GLUC-2025-010**).

#### 4.1 Titration and Acidification
1.  **Preparation:** Ensure the Protein A eluate is maintained at 18–25°C.
2.  **Initial Measurement:** Record initial pH and conductivity of the eluate.
3.  **Acidification:** Slowly add **2.0 M Phosphoric Acid (H₃PO₄)** using a calibrated peristaltic pump at a flow rate of 250 mL/min.
4.  **Monitoring:** Agitate at 125 RPM. Continuous pH monitoring is required.
5.  **Setpoint:** Cease acid addition once a stable pH of 3.50 ± 0.05 is achieved. Hold for 5 minutes to ensure equilibrium.

#### 4.2 Incubation Phase
1.  **Timer Start:** Start the validated timer (GHS-CLOCK-01) once pH is confirmed.
2.  **Duration:** Maintain the solution for a minimum of 60 minutes.
3.  **Stability Checks:** pH is logged every 10 minutes via the Google Cloud Life Sciences Manufacturing Execution System (MES). If pH drifts above 3.65, re-adjust immediately.

#### 4.3 Neutralization Phase
1.  **Reagent:** Use **1.0 M Tris-HCl (pH 8.5)** for neutralization.
2.  **Target pH:** Increase pH to 5.50 ± 0.20 to facilitate compatibility with the subsequent CEX chromatography step.
3.  **Filtration:** Transfer the neutralized pool through a 0.22 µm polyethersulfone (PES) filter to remove any micro-precipitates formed during pH shift.

---

### 5.0 VIRAL CLEARANCE VALIDATION (STUDY GHS-VRS-2024-08)

To validate the efficacy of the LPVI step, a viral spiking study was conducted using a scale-down model (SDM) qualified to represent the 2000L commercial scale.

#### 5.1 Selection of Model Viruses
In accordance with ICH Q5A, two model viruses were selected to represent potential contaminants:
1.  **Xenotropic Murine Leukemia Virus (XMuLV):** A large, enveloped, single-stranded RNA retrovirus (80–110 nm). Representative of endogenous CHO retrovirus-like particles.
2.  **Pseudorabies Virus (PRV):** A large, enveloped, double-stranded DNA virus (120–200 nm). Serves as a robust model for enveloped DNA viruses.

#### 5.2 Scale-Down Model (SDM) Qualification
The SDM utilized a 1:200 linear scale-down. Comparability between the manufacturing scale and the SDM was confirmed via protein concentration and pH transition profiles.

**Table 2: Comparability Data (Commercial vs. Scale-Down)**

| Parameter | Commercial (GLUC-2025-001) | SDM (Run ID: SD-GLUC-01) | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Starting pH** | 3.78 | 3.79 | ± 0.1 |
| **Protein Conc.** | 8.4 g/L | 8.2 g/L | ± 10% |
| **Titrant Vol.** | 4.2% v/v | 4.3% v/v | ± 5% |
| **Final pH** | 3.51 | 3.50 | 3.50 ± 0.05 |

#### 5.3 Viral Inactivation Results (Log₁₀ Reduction Factors)
The study was performed at the "Worst Case" parameters: pH 3.70, Temperature 15.0°C, and minimum time (30 minutes).

**Table 3: Viral Log Reduction Factors (LRF)**

| Virus | Run ID | Initial Titer (log₁₀ TCID₅₀) | Final Titer (log₁₀ TCID₅₀) | LRF | Cumulative LRF |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **XMuLV** | Run A | 7.82 ± 0.22 | ≤ 1.20 (LOD) | ≥ 6.62 | **≥ 6.55** |
| **XMuLV** | Run B | 7.75 ± 0.18 | ≤ 1.20 (LOD) | ≥ 6.55 | (Mean) |
| **PRV** | Run A | 6.45 ± 0.15 | ≤ 1.50 (LOD) | ≥ 4.95 | **≥ 5.01** |
| **PRV** | Run B | 6.58 ± 0.20 | ≤ 1.50 (LOD) | ≥ 5.08 | (Mean) |

*Note: TCID₅₀ = Tissue Culture Infectious Dose 50%. LOD = Limit of Detection.*

---

### 6.0 MANUFACTURING BATCH DATA (REPRESENTATIVE)

The following table summarizes the performance of the LPVI step across ten (10) consecutive GMP manufacturing batches produced at the South San Francisco facility.

**Table 4: Batch Summary Data (GLUC-2025-XXX Series)**

| Batch Number | Date | Load Vol (L) | Eluate pH | Incubation pH | Temp (°C) | Time (min) | Yield (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-25 | 345.2 | 3.72 | 3.51 | 21.4 | 62 | 99.4 |
| **GLUC-2025-002** | 19-JAN-25 | 342.8 | 3.68 | 3.49 | 20.9 | 65 | 98.8 |
| **GLUC-2025-003** | 26-JAN-25 | 350.1 | 3.75 | 3.50 | 22.1 | 60 | 99.1 |
| **GLUC-2025-004** | 02-FEB-25 | 348.5 | 3.71 | 3.52 | 21.8 | 61 | 99.5 |
| **GLUC-2025-005** | 09-FEB-25 | 344.9 | 3.69 | 3.50 | 21.2 | 64 | 98.7 |
| **GLUC-2025-006** | 16-FEB-25 | 347.0 | 3.74 | 3.51 | 22.5 | 60 | 99.2 |
| **GLUC-2025-007** | 23-FEB-25 | 349.3 | 3.70 | 3.48 | 21.9 | 63 | 99.0 |
| **GLUC-2025-008** | 02-MAR-25 | 346.6 | 3.72 | 3.50 | 22.0 | 62 | 99.6 |
| **GLUC-2025-009** | 09-MAR-25 | 351.2 | 3.67 | 3.51 | 21.5 | 65 | 98.4 |
| **GLUC-2025-010** | 16-MAR-25 | 348.8 | 3.73 | 3.49 | 21.1 | 61 | 99.3 |

---

### 7.0 KINETICS OF INACTIVATION (TIME-DEPENDENT ANALYSIS)

To establish the safety margin, the kinetics of XMuLV inactivation were studied. The goal was to determine the time required to reach the Limit of Detection (LOD).

**Table 5: XMuLV Inactivation Kinetics (pH 3.65, 18°C)**

| Time Point (min) | Titer (log₁₀ TCID₅₀/mL) | Reduction (log₁₀) |
| :--- | :--- | :--- |
| **0 (Spiked)** | 7.50 | 0.00 |
| **5** | 4.20 | 3.30 |
| **15** | 2.10 | 5.40 |
| **30** | ≤ 1.20 (LOD) | ≥ 6.30 |
| **60** | ≤ 1.20 (LOD) | ≥ 6.30 |

**Calculation of Inactivation Rate ($k$):**
Using the first-order degradation model:
$$N(t) = N_0 \cdot e^{-kt}$$
$$\ln(N/N_0) = -kt$$
Where $k$ for XMuLV at pH 3.65 was calculated to be $0.34 \text{ min}^{-1}$, ensuring complete inactivation well before the 60-minute process setpoint.

---

### 8.0 IMPACT ON PRODUCT QUALITY AND STABILITY

Since Glucogen-XR is a peptide-based therapeutic, exposure to low pH could theoretically induce aggregation or deamidation.

#### 8.1 Aggregation Analysis (SEC-HPLC)
Samples from Batch **GLUC-2025-005** were analyzed before and after the 90-minute hold at pH 3.50.
*   **Pre-Inactivation Purity:** 99.2% monomer.
*   **Post-Inactivation Purity:** 99.1% monomer.
*   **Conclusion:** No statistically significant increase in High Molecular Weight Species (HMWS).

#### 8.2 Potency Retention
Bioactivity was measured using a cell-based GLP-1 receptor activation assay.
*   **Control:** 102% Relative Potency.
*   **Post-LPVI Sample:** 101% Relative Potency.

---

### 9.0 DEVIATION MANAGEMENT AND RISK ASSESSMENT

In the event of a process excursion (e.g., pH falling below 3.3 or rising above 3.7), the following risk-based actions are pre-defined in the Control Strategy.

1.  **pH < 3.3:** Risk of peptide denaturation. Action: Perform extended characterization via LC-MS to detect structural alterations.
2.  **pH > 3.7:** Risk of incomplete viral inactivation. Action: The batch must be quarantined. Viral clearance must be re-validated or the batch discarded if LRF targets are not met.
3.  **Temperature > 30°C:** Risk of accelerated deamidation. Action: Conduct peptide mapping.

---

### 10.0 CONCLUSION

The Low pH Viral Inactivation step for Glucogen-XR (glucapeptide extended-release) is a highly controlled, robust, and validated unit operation. With a mean LRF of $\geq 6.55$ for retroviruses and $\geq 5.01$ for DNA viruses, this step provides a significant safety margin for the final drug product. The process operates within a well-defined design space, as evidenced by consistent performance across ten commercial-scale batches (GLUC-2025-001 to GLUC-2025-010).

---
**End of Section 3.2.S.2.6.4**

---

## Nanofiltration for Virus Removal

### **3.2.S.2.4 Process Controls and Intermediate Testing**
### **3.2.S.2.5 Process Validation and Evaluation**
#### **Section: Nanofiltration for Virus Removal (Viral Filtration)**

---

### **1.0 OVERVIEW AND SCOPE**
This section details the validated unit operation for the removal of endogenous and adventitious viral particles from the Glucogen-XR (glucapeptide extended-release) drug substance intermediate. Nanofiltration is positioned as a robust, size-exclusion-based orthogonal clearance step within the downstream purification process. The process utilizes the **Planova™ 20N** (Asahi Kasei Bioprocess) cellulose-based nanofilter, characterized by a mean pore size of 19 ± 2 nm, ensuring the retention of both large enveloped viruses (e.g., retroviruses) and small non-enveloped viruses (e.g., parvoviruses).

The nanofiltration step occurs post-Step 5 (Anion Exchange Chromatography) and prior to Step 7 (Final Ultrafiltration/Diafiltration). The process is engineered to handle the high-concentration glucapeptide stream while maintaining a high flux rate and ensuring >4.0 log₁₀ reduction of target viral species.

---

### **2.0 REGULATORY COMPLIANCE AND GUIDELINES**
The design, validation, and implementation of the nanofiltration process for Glucogen-XR adhere to the following regulatory frameworks:
*   **ICH Q5A (R2):** Quality of Biotechnological Products: Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **FDA Guidance for Industry:** Characterization and Qualification of Cell Banks Used for Production of Biological Products.
*   **Technical Report No. 41 (PDA):** Virus Filtration.
*   **USP <1050.1>:** Design, Construction, and Validation of Viral Filtration Systems.

---

### **3.0 EQUIPMENT AND MATERIALS SPECIFICATIONS**

#### **3.1 Filtration Hardware**
The system utilized is the **Google Life Sciences Custom Bioprocess Skid (GHS-BP-NF-02)**, automated via the Google Cloud Manufacturing Execution System (G-MES).

**Table 1: Equipment Components for Nanofiltration**
| Component ID | Description | Manufacturer | Specification/Material |
| :--- | :--- | :--- | :--- |
| **H-401** | Feed Pressure Vessel | Sartorius | 316L Stainless Steel, 500L |
| **P-402** | Diaphragm Pump | Quattroflow | QF1200SU (Low Shear) |
| **F-405** | Pre-filter (Guard Filter) | BioPharma Millipore | 0.1 µm Pellicon 3 |
| **F-410** | Nanofilter Module | Asahi Kasei | Planova™ 20N (4.0 m²) |
| **PIT-401** | Inlet Pressure Transducer | Emerson Rosemount | Accuracy ±0.05% FS |
| **FIT-402** | Flow Meter | Krohne | Electromagnetic, High Precision |

#### **3.2 Filter Integrity Testing**
The integrity of the Planova™ 20N filter is verified post-use using the **Air-Water Diffusion (AWD) Test**.
*   **Test Gas:** Medical Grade Compressed Air.
*   **Wetting Fluid:** Process Buffer (Tris-HCl, pH 7.5).
*   **Acceptance Criteria:** Leakage rate ≤ 0.1 mL/min per m² at 1.0 kgf/cm².

---

### **4.0 PROCESS PARAMETERS AND OPERATIONAL CONTROLS**

The nanofiltration process is operated in constant pressure mode to prevent virus "breakthrough" or "convective flow-through" associated with pressure fluctuations.

**Table 2: Validated Operating Parameters (Critical Process Parameters - CPPs)**
| Parameter | Symbol | Set Point | Proven Acceptable Range (PAR) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Inlet Pressure** | $P_{in}$ | 0.80 bar | 0.50 – 0.95 bar | Driving force for size exclusion |
| **Process Temperature** | $T$ | 22°C | 18°C – 26°C | Viscosity and protein stability |
| **Loading Capacity** | $L$ | 150 L/m² | ≤ 200 L/m² | Prevention of pore fouling |
| **Product Concentration** | $C_{p}$ | 12.5 mg/mL | 8.0 – 16.0 mg/mL | Flux maintenance |
| **Buffer pH** | $pH$ | 7.5 | 7.2 – 7.8 | Isoelectric point management |
| **Conductivity** | $\kappa$ | 12 mS/cm | 10.0 – 14.0 mS/cm | Aggregate prevention |

---

### **5.0 DETAILED OPERATIONAL PROTOCOL (SOP-GHS-DS-405)**

#### **Step 1: System Sanitization and Flushing**
1.  Install the Planova™ 20N filter in the GHS-BP-NF-02 housing.
2.  Flush the system with 50 L of WFI (Water for Injection) at a flow rate of 10 L/min.
3.  Sanitize with 0.1M NaOH for 60 minutes.
4.  Rinse with WFI until the effluent pH is neutral (6.5 – 7.5) and conductivity is < 2.0 µS/cm.

#### **Step 2: Buffer Equilibration**
1.  Introduce **Equilibration Buffer (50mM Tris-HCl, 100mM NaCl, pH 7.5)**.
2.  Circulate for 20 minutes to ensure complete air removal from the filter fibers.
3.  Verify the Transmembrane Pressure (TMP) is within ±0.02 bar of target.

#### **Step 3: Product Loading and Filtration**
1.  Transfer Step 5 Eluate (Batch GLUC-2025-XXX) to the Feed Vessel (H-401).
2.  Engage the Pump (P-402) and ramp up pressure to 0.80 bar over a 2-minute period (Gradual Ramp Protocol to prevent membrane shock).
3.  Monitor the filtrate flow rate ($J$). Calculate the Normalized Flux ($J/J_0$).
    *   *Calculation:* $J = \frac{Q}{A \times P}$ (Where $Q$ is flow rate, $A$ is area, $P$ is pressure).
4.  If $J/J_0$ drops below 0.7, initiate an automated pause for pressure stabilization.

#### **Step 4: Post-Filtration Chase**
1.  Once the feed vessel is empty, introduce 15 L of Equilibration Buffer (Chase Volume).
2.  Maintain 0.80 bar pressure until the filtrate weight reaches the target value (Calculated based on 98% peptide recovery).

---

### **6.0 VIRAL CLEARANCE VALIDATION (STUDY GHS-VRS-2024-09)**

To demonstrate the efficacy of the Planova™ 20N for Glucogen-XR, viral spiking studies were conducted using a scaled-down model (0.001 m²).

**Table 3: Viral Log Reduction Factors (LRF) Results**
| Virus Model | Type | Size (nm) | Spike Titer (log₁₀ TCID₅₀) | Filtrate Titer (log₁₀ TCID₅₀) | LRF (log₁₀) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **X-MuLV** | Enveloped, RNA (Retrovirus) | 80-110 | 8.42 | < 1.10 (LOD) | **> 7.32** |
| **PRV** | Enveloped, DNA (Herpesvirus) | 120-200 | 7.95 | < 1.10 (LOD) | **> 6.85** |
| **Reo-3** | Non-enveloped, RNA (Reovirus) | 60-80 | 8.12 | < 1.25 (LOD) | **> 6.87** |
| **MMV** | Non-enveloped, DNA (Parvovirus) | 18-24 | 7.64 | 2.15 | **5.49** |

**Total Cumulative Virus Clearance for Process:**
*   **Enveloped Viruses:** > 18.5 log₁₀ (Sum of Steps 3, 4, 6)
*   **Non-Enveloped Viruses (MMV):** > 5.49 log₁₀

---

### **7.0 BATCH SUMMARY DATA (REPRESENTATIVE MANUFACTURING RUNS)**

The following table summarizes the performance of the nanofiltration step across three consecutive cGMP batches manufactured at the South San Francisco facility.

**Table 4: Manufacturing Batch Data for Nanofiltration**
| Batch Number | Date | Input Mass (g) | Output Mass (g) | Step Yield (%) | AWD Test Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 4,250.5 | 4,198.2 | 98.77% | PASS (0.04 mL/min) |
| **GLUC-2025-002** | 26-JAN-2025 | 4,310.2 | 4,255.8 | 98.74% | PASS (0.05 mL/min) |
| **GLUC-2025-003** | 09-FEB-2025 | 4,288.7 | 4,241.5 | 98.90% | PASS (0.04 mL/min) |
| **Average** | -- | 4,283.1 | 4,231.8 | **98.80%** | -- |

---

### **8.0 DEVIATION AND SENSITIVITY ANALYSIS**

#### **8.1 Pressure Interruptions**
During validation study GHS-PDS-2024-11, the effect of a 15-minute pressure interruption (simulating a power failure or pump swap) was evaluated. The results indicated no significant increase in viral breakthrough for MMV (change in LRF < 0.2 log₁₀). However, as a precautionary measure, any pressure drop below 0.3 bar for > 5 minutes requires a mandatory integrity test (AWD) prior to resuming.

#### **8.2 Fouling Analysis**
Fouling is monitored via the **Vmax** method.
$V_{max} = \frac{t}{V} = \frac{1}{Q_0} + \frac{1}{V_{max}} \times t$
Where $V$ is cumulative volume and $t$ is time. Current process data for Glucogen-XR suggests a $V_{max} > 850 L/m^2$, providing a 4-fold safety margin over the operational loading limit of 150 L/m².

---

### **9.0 CONCLUSION**
The Nanofiltration unit operation for Glucogen-XR (Glucapeptide Extended-Release) provides a highly effective and reproducible method for viral clearance. The use of the Planova™ 20N filter ensures that both large and small viruses are removed via size-exclusion, independent of chemical interactions. The process is tightly controlled via the G-MES system, ensuring that critical process parameters are maintained within validated ranges, thereby guaranteeing the viral safety of the final drug substance.

---
**Footnotes:**
¹ *LOD = Limit of Detection for the specific viral assay.*
² *TCID₅₀ = 50% Tissue Culture Infectious Dose.*
³ *AWD = Air-Water Diffusion, the industry-standard integrity test for hydrophilic membranes.*

---

## Validation Studies

### **3.2.S.2.5. Process Validation and Evaluation**
#### **3.2.S.2.5.2. Viral Inactivation and Removal (Validation Studies)**

---

### **1. OVERVIEW AND STRATEGIC RATIONALE**

The viral safety of **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences**, is established through a multi-layered defensive strategy in accordance with **ICH Q5A(R2)** (*Quality of Biotechnological Products: Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin*). 

Since Glucogen-XR is expressed in the proprietary **GHS-CHO-001 cell line** (a CHO-K1 GS knockout derivative), the presence of endogenous retrovirus-like particles (RVLPs) is assumed. Consequently, the downstream manufacturing process must demonstrate robust capacity for the inactivation and removal of both enveloped and non-enveloped viruses.

The validation studies described herein were conducted at the **Google Life Sciences Viral Clearance Suite (Building 7, SSF Campus)** using scaled-down models of the commercial manufacturing process. These studies evaluate the Log Reduction Value (LRV) for four orthogonal clearance steps:
1.  **Low pH Inactivation** (Solvent/Detergent alternative for enveloped viruses).
2.  **Affinity Chromatography** (Protein A-derived ligand specific for the glucapeptide fusion tag).
3.  **Anion Exchange Chromatography (AEX)** (Operated in flow-through mode).
4.  **Nanofiltration** (Size-exclusion based viral removal).

---

### **2. SELECTION OF RELEVANT AND MODEL VIRUSES**

In compliance with **USP <1050.1>** and **ICH Q5A**, a panel of four viruses was selected to represent a range of physicochemical properties, including size, genome type, and resistance to chemical/physical treatments.

#### **Table 2.1: Viral Panel for Glucogen-XR Validation**

| Virus | Family | Genus | Envelope | Genome | Size (nm) | Shape | Resistance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Xenotropic Murine Leukemia Virus (XMuLV)** | Retroviridae | Gammaretrovirus | Yes | ssRNA | 80–110 | Spherical | Low |
| **Pseudorabies Virus (PRV)** | Herpesviridae | Varicellovirus | Yes | dsDNA | 120–200 | Spherical | Medium |
| **Reovirus Type 3 (Reo-3)** | Reoviridae | Orthoreovirus | No | dsRNA | 60–80 | Spherical | Medium |
| **Murine Minute Virus (MMV)** | Parvoviridae | Protoparvovirus | No | ssDNA | 18–24 | Icosahedral | High |

*   **XMuLV:** Represents endogenous CHO retrovirus-like particles.
*   **PRV:** Large enveloped DNA virus; model for potential herpesvirus contamination.
*   **Reo-3:** Intermediate-sized non-enveloped RNA virus; highly resistant to physical stress.
*   **MMV:** Small non-enveloped DNA virus; serves as the "worst-case" challenge for nanofiltration and chemical resistance.

---

### **3. SCALED-DOWN MODEL VALIDATION**

To ensure the validity of the clearance data, the scaled-down models (SDM) were qualified against the full-scale commercial process (3,000L Bioreactor Scale, Batch Series **GLUC-2025-XXX**).

#### **Table 3.1: Scaling Parameters for Chromatography Steps**

| Parameter | Commercial Scale (3,000L) | Scaled-Down Model (SDM) | Ratio/Criteria |
| :--- | :--- | :--- | :--- |
| **Column Height** | 20.0 cm | 20.0 cm | 1:1 |
| **Linear Velocity** | 150 cm/hr | 150 cm/hr | 1:1 |
| **Loading Capacity** | 30 g Peptide / L Resin | 30 g Peptide / L Resin | 1:1 |
| **Resin Type** | AEX-GHS-99 | AEX-GHS-99 | Identical Lot |
| **Buffer Composition** | pH 7.5 ± 0.1 | pH 7.5 ± 0.05 | Qualified |

**Statistical Equivalence Analysis:**
Equivalence was determined using a Two One-Sided Test (TOST) for Yield and Purity (HMW% and LMW%). All p-values were $< 0.05$, confirming that the SDM accurately reflects the manufacturing performance of Batch **GLUC-2025-001** through **GLUC-2025-010**.

---

### **4. DETAILED STUDY PROTOCOLS BY UNIT OPERATION**

#### **4.1. Unit Operation 1: Low pH Inactivation**
*Target: Enveloped Viruses (XMuLV, PRV)*

**4.1.1. Procedure:**
1.  Adjust Post-Affinity Eluate (Batch **GLUC-2025-VP01**) to pH 3.55 ± 0.05 using 1.0 M Phosphoric Acid.
2.  Spike with virus at a 1:100 ratio to minimize matrix interference.
3.  Incubate at 20°C ± 2°C for 60 minutes.
4.  Sample at $T=0, 5, 15, 30, 45, 60$ minutes.
5.  Quench samples by neutralizing to pH 7.2 using 2.0 M Tris-Base.

**4.1.2. Low pH Inactivation Kinetics Data (Batch GLUC-2025-VP01):**

| Time (min) | XMuLV Titer (log10 TCID₅₀/mL) | PRV Titer (log10 TCID₅₀/mL) |
| :--- | :--- | :--- |
| **0 (Pre-spike)** | < 1.0 (LOD) | < 1.0 (LOD) |
| **0 (Post-spike)** | 7.82 ± 0.22 | 6.54 ± 0.18 |
| **5** | 3.10 ± 0.31 | 2.15 ± 0.25 |
| **15** | 1.45 ± 0.15 | < 1.12 (LOD) |
| **30** | < 1.12 (LOD) | < 1.12 (LOD) |
| **60** | < 1.12 (LOD) | < 1.12 (LOD) |
| **Reduction (LRV)** | **> 6.70** | **> 5.42** |

*Note: The effective LRV is calculated as $Log_{10}(Initial Titer) - Log_{10}(Final Titer)$.*

---

#### **4.2. Unit Operation 2: Anion Exchange Chromatography (AEX)**
*Mechanism: Adsorptive Partitioning (Flow-Through Mode)*

The AEX step is optimized for the removal of acidic impurities (HCP, DNA) and viral particles, which are typically negatively charged at pH 7.5.

**4.2.1. Calculation of Load Viral Load:**
The total viral challenge ($V_{challenge}$) is calculated as:
$$V_{total} = C_{spike} \times V_{load}$$
Where $C_{spike}$ is the concentration of virus in the load and $V_{load}$ is the total volume processed.

**4.2.2. AEX Clearance Results (Run ID: GLUC-2025-AEX-03):**

| Virus | Load Titer (log10) | Effluent Titer (log10) | Total LRV |
| :--- | :--- | :--- | :--- |
| **XMuLV** | 8.12 | < 1.20 | > 6.92 |
| **Reo-3** | 7.45 | 3.12 | 4.33 |
| **MMV** | 6.89 | 2.45 | 4.44 |

---

#### **4.3. Unit Operation 3: Viral Nanofiltration (VNF)**
*Mechanism: Size Exclusion (Planova 20N or equivalent)*

**4.3.1. Technical Specifications:**
*   **Filter Area:** 0.001 m² (Lab Scale)
*   **Pressure:** Constant 2.0 bar (Nitrogen pressurized)
*   **Flux Transition:** Study terminated at 90% flux decay to simulate "worst-case" fouling conditions.

**4.3.2. VNF Clearance Data (Batch GLUC-2025-VNF-09):**

| Virus | Total Log Challenge | Log in Filtrate | LRV |
| :--- | :--- | :--- | :--- |
| **XMuLV** | 10.45 | < 1.50 | > 8.95 |
| **PRV** | 9.80 | < 1.50 | > 8.30 |
| **Reo-3** | 9.20 | < 1.50 | > 7.70 |
| **MMV** | 8.55 | 2.10 | 6.45 |

---

### **5. CUMULATIVE LOG REDUCTION VALUE (LRV) SUMMARY**

Per **ICH Q5A**, the total viral clearance capacity is the sum of individual LRVs from orthogonal steps. Non-orthogonal steps (e.g., two identical AEX steps) would not be summed.

#### **Table 5.1: Summary of Viral Clearance for Glucogen-XR**

| Process Step | XMuLV | PRV | Reo-3 | MMV |
| :--- | :--- | :--- | :--- | :--- |
| **Low pH Inactivation** | > 6.70 | > 5.42 | N/A* | N/A* |
| **Affinity Chrom.** | 3.45 | 2.10 | 1.80 | 1.25 |
| **AEX Chrom.** | > 6.92 | 4.15 | 4.33 | 4.44 |
| **Nanofiltration** | > 8.95 | > 8.30 | > 7.70 | 6.45 |
| **Cumulative LRV** | **> 26.02** | **> 19.97** | **> 13.83** | **12.14** |

*\*Note: Low pH is not claimed for non-enveloped viruses (Reo-3, MMV).*

---

### **6. CALCULATION OF SAFETY MARGIN (VIRUS PARTICLES PER DOSE)**

The estimated number of retrovirus-like particles (RVLP) in the unprocessed bulk (UPB) was determined via Transmission Electron Microscopy (TEM) and Q-PCR for the **GHS-CHO-001** line.

**Assumptions:**
1.  **UPB Concentration:** $10^{6}$ RVLP/mL.
2.  **Dose of Glucogen-XR:** 10 mg.
3.  **Process Yield:** 0.5 g/L.
4.  **Cumulative LRV (XMuLV):** 26.02.

**Calculation:**
*   Particles per mg = $(10^6 \text{ particles/mL}) / (0.5 \text{ mg/mL}) = 2 \times 10^6$ particles/mg.
*   Particles per dose (10 mg) = $2 \times 10^7$ particles.
*   Log10 particles per dose = 7.30.
*   **Safety Margin (Log10)** = Cumulative LRV - Log10 (Particles/Dose)
*   **Safety Margin** = $26.02 - 7.30 = 18.72$ logs.

**Conclusion:**
The probability of a single viral particle being present in a dose of Glucogen-XR is **$1 \times 10^{-18.72}$**, which significantly exceeds the FDA requirement of $< 10^{-6}$ particles per dose.

---

### **7. REAGENTS AND EQUIPMENT LIST**

| Equipment ID | Description | Manufacturer | Last Calibration |
| :--- | :--- | :--- | :--- |
| **GHS-AKTA-04** | AKTA Pure 25 | Cytiva | 12-JAN-2025 |
| **GHS-PH-11** | SevenExcellence pH Meter | Mettler Toledo | 14-FEB-2025 |
| **GHS-VNF-01** | Virus Filtration Skid | Pall / Asahi Kasei | 10-JAN-2025 |

---

### **8. REFERENCES**
1.  **ICH Q5A(R2):** Quality of Biotechnological Products: Viral Safety Evaluation.
2.  **FDA Guidance for Industry (2024):** Characterization and Qualification of Cell Substrates.
3.  **USP <1050>:** Viral Safety of Recombinant Proteins.
4.  **Google Health Sciences Internal Report:** *GHS-RPT-2024-099: Viral Clearance Validation for the Glucogen-XR Platform.*

---

# PEGylation Reaction

## Reaction Conditions and Optimization

### **3.2.S.2.2.6 Reaction Conditions and Optimization: PEGylation Process**

#### **3.2.S.2.2.6.1 Executive Summary of PEGylation Strategy**
The PEGylation of Glucogen-XR (glucapeptide) is a critical quality attribute (CQA) influencing process step designed to extend the biological half-life of the peptide by site-specific conjugation of a 40 kDa branched Methoxy-Polyethylene Glycol (mPEG) maleimide. The reaction targets the C-terminal cysteine residue (Cys-31) of the Glucogen-XR intermediate (GHS-INT-04). This subsection details the extensive Design of Experiments (DoE) studies, kinetic modeling, and final optimized parameters utilized for the commercial-scale manufacturing of Glucogen-XR at Google Health Sciences’ South San Francisco facility.

---

#### **3.2.S.2.2.6.2 Technical Specifications of Reactants**

**A. Peptide Intermediate (GHS-INT-04)**
*   **Sequence:** [Redacted Sequence] - Cys(31)
*   **Molecular Weight:** 4,215.6 Da
*   **Source:** Recombinant expression in proprietary CHO-K1 GS knockout (GHS-CHO-001).
*   **Purity Requirement:** ≥98.5% by RP-HPLC.

**B. PEG Reagent (mPEG-Mal-40K)**
*   **Structure:** Branched [(CH₃O(CH₂CH₂O)ₙ)₂-Lys-NH-CO-CH₂CH₂-Maleimide].
*   **Polydispersity Index (PDI):** ≤ 1.05.
*   **Supplier:** GHS-Qualified Vendor (Vendor Code: V-PEG-882).

---

#### **3.2.S.2.2.6.3 Process Optimization Studies (DoE)**

To ensure robust conjugation efficiency (targeting >92% conversion) and minimize the formation of degradation products (e.g., hydrolyzed maleimide or multi-PEGylated species), a central composite design (CCD) was implemented.

##### **Table 1: Design of Experiments (DoE) Parameter Ranges**
| Factor | Variable ID | Range Tested | Optimized Target | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| Molar Ratio (PEG:Peptide) | $X_1$ | 1.0:1.0 to 2.5:1.0 | **1.25:1.0** | Minimize unreacted peptide vs. cost of reagent. |
| pH of Reaction Buffer | $X_2$ | 6.0 to 7.8 | **6.5 ± 0.1** | Maintain maleimide stability; avoid Lys-PEGylation. |
| Temperature (°C) | $X_3$ | 2°C to 25°C | **4°C ± 2°C** | Reduce secondary structure interference/hydrolysis. |
| Peptide Conc. (mg/mL) | $X_4$ | 1.5 to 8.0 | **4.5 mg/mL** | Balance reaction kinetics vs. viscosity. |
| Reaction Time (Hours) | $X_5$ | 1 to 24 | **16 Hours** | Ensure completion of slow-phase kinetics. |

##### **Mathematical Model for Conversion Efficiency**
The conversion efficiency ($Y$) was modeled using the following second-order polynomial equation:
$$Y = \beta_0 + \sum \beta_i X_i + \sum \beta_{ii} X_i^2 + \sum \beta_{ij} X_i X_j + \epsilon$$
Where:
*   $\beta_0$ = 94.2 (Intercept)
*   Significant interaction found between pH ($X_2$) and Temperature ($X_3$). At pH > 7.2, the rate of maleimide hydrolysis to maleamic acid increases exponentially ($k_h$), competing with the conjugation rate ($k_c$).

---

#### **3.2.S.2.2.6.4 Detailed Reaction Kinetics and Mass Balance**

The PEGylation follows pseudo-first-order kinetics when the PEG reagent is in excess. The reaction rate is defined by:
$$\frac{d[Product]}{dt} = k_{app} [Peptide][PEG]$$
Given the steric hindrance of the 40kDa branched structure, the apparent rate constant ($k_{app}$) at 4°C, pH 6.5 was determined to be $1.42 \times 10^{-2} M^{-1}s^{-1}$.

##### **Table 2: Representative Mass Balance Data (Batch GLUC-2025-001 through 003)**
| Batch Number | Input Peptide (g) | PEG Reagent (g) | Crude Conjugate (g) | Conversion (%) | Impurity A (Hydrolyzed) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 450.2 | 5,340.5 | 5,420.1 | 94.8% | 1.2% |
| **GLUC-2025-002** | 451.5 | 5,355.0 | 5,435.6 | 95.1% | 0.9% |
| **GLUC-2025-003** | 449.8 | 5,335.2 | 5,410.8 | 94.2% | 1.4% |
| **Mean** | **450.5** | **5,343.6** | **5,422.2** | **94.7%** | **1.17%** |

---

#### **3.2.S.2.2.6.5 Step-by-Step PEGylation Protocol (SOP-GHS-PRO-210)**

**Step 1: Buffer Preparation and Equilibration**
1.  Prepare 500L of Reaction Buffer: 50 mM Sodium Phosphate, 2 mM EDTA, pH 6.5.
2.  De-aerate the buffer using a 0.22µm vacuum filtration system and sparge with Nitrogen ($N_2$) for 60 minutes to remove dissolved Oxygen (O₂). *Note: O₂ promotes disulfide bond formation of GHS-INT-04, inhibiting PEGylation.*

**Step 2: Peptide Thawing and Concentration Adjustment**
1.  Thaw GHS-INT-04 (Intermediate) at 2-8°C.
2.  Dilute to a final concentration of 4.5 mg/mL using the de-aerated reaction buffer.
3.  Verify pH is 6.5 ± 0.1. Adjust using 0.1M NaOH or 0.1M H₃PO₄ if necessary.

**Step 3: PEG Reagent Activation and Charging**
1.  Weigh out mPEG-Mal-40K at a 1.25 molar equivalent relative to the peptide mass.
2.  Slowly dissolve the PEG reagent in 50L of cold (4°C) reaction buffer under low-shear mixing (60 RPM).
3.  Transfer the PEG solution into the 1,000L Jacketed Stainless Steel Reactor (Equipment ID: REAC-4402) containing the peptide solution.

**Step 4: Conjugation Phase**
1.  Maintain the reactor temperature at 4.0°C ± 0.5°C using a glycol cooling jacket.
2.  Agitate at 45 RPM using a marine-blade impeller to ensure homogeneity without inducing mechanical stress on the polymer chains.
3.  Perform In-Process Control (IPC) sampling at T=4, T=8, and T=12 hours.

**Step 5: Reaction Quenching**
1.  Upon reaching ≥92% conversion (determined by IPC HPLC), quench the reaction by adding L-Cysteine HCl to a final concentration of 5 mM.
2.  Agitate for an additional 60 minutes. This step ensures all residual maleimide groups are capped, preventing adventitious conjugation during downstream purification.

---

#### **3.2.S.2.2.6.6 In-Process Controls (IPC) and Acceptance Criteria**

Regulatory compliance requires rigorous monitoring of the PEGylation progress to ensure batch-to-batch consistency as per ICH Q6B.

##### **Table 3: IPC Specifications for PEGylation (Section 3.2.S.2.2.6)**
| Test Parameter | Method | Frequency | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **pH (Post-Mixing)** | Potentiometric | Start of Reaction | 6.5 ± 0.1 |
| **Dissolved O₂** | Polarographic Probe | Continuous | < 0.5 ppm |
| **Conjugation Rate** | SEC-HPLC | T=4h, 8h, 12h, 16h | Report Value |
| **Final Conversion** | RP-HPLC | End of Reaction | ≥ 92.0% |
| **Mono-PEGylated Yield**| SEC-HPLC | End of Reaction | ≥ 90.0% |
| **Free Peptide Content**| RP-HPLC | End of Reaction | ≤ 3.0% |

---

#### **3.2.S.2.2.6.7 Deviation Management and Robustness Analysis**

During the validation campaign (Batches GLUC-2025-004 to GLUC-2025-009), "Edge of Failure" (EoF) testing was conducted to evaluate the impact of process excursions.

**A. Impact of Temperature Over-Excursion:**
Data indicated that if the temperature exceeds 10°C for more than 4 hours, the levels of Bis-PEGylated species (PEGylation at the N-terminal Histidine) increase from <0.1% to 1.4%. Consequently, the reactor is equipped with redundant temperature sensors (TE-101 and TE-102) linked to an automated SCADA emergency shut-off.

**B. Impact of pH Drift:**
A pH shift to 8.0 resulted in a 40% reduction in yield due to the competitive hydrolysis of the maleimide ring. The process is buffered at 50 mM to provide sufficient capacity to resist pH changes during the addition of the PEG reagent, which is slightly acidic.

---

#### **3.2.S.2.2.6.8 Regulatory References**
1.  **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
2.  **FDA Guidance for Industry:** *Liposome Drug Products: Chemistry, Manufacturing, and Controls; Human Pharmacokinetics and Bioavailability; and Labeling Documentation* (Applied for polymer-conjugate principles).
3.  **USP <121>:** Insulin Assays (Reference for peptide handling).
4.  **USP <1055>:** Biotechnology-Derived Articles—Peptide Mapping.

---

#### **3.2.S.2.2.6.9 Conclusion**
The optimized PEGylation conditions for Glucogen-XR ensure a highly controlled, site-specific conjugation that preserves the therapeutic potency of the GLP-1 receptor agonist while providing the necessary pharmacokinetic profile for weekly dosing. The use of a chilled (4°C), slightly acidic (pH 6.5) environment under anaerobic conditions has been proven through 20+ pilot and clinical-scale batches to consistently yield a drug substance intermediate of superior purity and stability.

---

## PEG Reagent Characterization

### **3.2.S.2.3.4.1 PEG Reagent Characterization**

This subsection details the comprehensive analytical characterization, quality control specifications, and acceptance criteria for the poly(ethylene glycol) (PEG) reagent utilized in the manufacture of **Glucogen-XR (glucapeptide extended-release)**. 

The PEGylation of Glucogen-XR involves the site-specific conjugation of a 40 kDa branched Methoxy-Poly(Ethylene Glycol) Maleimide (mPEG-Mal) reagent to a single cysteine residue (Cys-31) of the glucapeptide moiety. Given the critical impact of PEG polydispersity, purity, and functional activity on the pharmacokinetic (PK) profile and immunogenicity of the final Drug Substance, Google Health Sciences (GHS) employs a multi-tiered characterization strategy in alignment with **ICH Q6B** and the **FDA Guidance for Industry: PEGylated Drug Products (2014)**.

---

### **1. Structural Description and Technical Specifications**

The PEG reagent, designated as **GHS-PEG-40B-MAL**, is a Y-shaped branched mPEG derivative. It consists of two 20 kDa mPEG chains attached to a lysine backbone, terminating in a maleimide functional group.

#### **1.1 Physicochemical Formula**
*   **Chemical Name:** α-Maleimidoethyl-ω-methoxy-poly(oxy-1,2-ethanediyl), branched (2x20kDa).
*   **Molecular Formula:** $CH_3O-(CH_2CH_2O)_n-L-C_3H_2NO_2$ (where $L$ is the lysine-based branching core).
*   **Average Molecular Weight ($M_n$):** 40,000 ± 2,000 Da.

#### **1.2 Structural Diagram**
The branched structure is engineered to provide superior steric shielding compared to linear PEGs, reducing proteolytic degradation and extending the half-life of the glucapeptide.

> *[Note: Structural representation of mPEG2-Lys-Maleimide omitted for textual brevity but maintained in the Master File GHS-MF-PEG-09].*

---

### **2. Specification and Batch Analysis (Lot: GLUC-2025-PEG-01 through 05)**

The following table outlines the release specifications for the PEG reagent. All batches are manufactured under cGMP at the Google Health Sciences dedicated polymer synthesis facility (Building 4, South San Francisco).

#### **Table 2.1: PEG Reagent Release Specifications and Batch Results**

| Test Parameter | Analytical Method | Specification | Batch GLUC-2025-PEG-01 | Batch GLUC-2025-PEG-02 |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Visual Inspection | White to off-white powder | White powder | White powder |
| **Identity (IR)** | USP <197K> | Matches Reference | Conforms | Conforms |
| **Molecular Weight ($M_n$)** | MALDI-TOF MS | 38,000 – 42,000 Da | 40,125 Da | 39,890 Da |
| **Polydispersity Index ($PDI$)** | GPC/SEC-RI | ≤ 1.05 | 1.02 | 1.03 |
| **Maleimide Substitution** | $^1H$-NMR / Ellman’s | ≥ 95% molar ratio | 98.2% | 97.8% |
| **Free PEG (Unreacted)** | HPLC-ELSD | ≤ 2.0% | 0.4% | 0.6% |
| **Heavy Metals** | ICP-OES | ≤ 10 ppm | < 2 ppm | < 2 ppm |
| **Water Content** | Karl Fischer | ≤ 1.0% (w/w) | 0.22% | 0.31% |
| **Bioburden** | USP <61> | ≤ 10 CFU/g | < 1 CFU/g | < 1 CFU/g |
| **Endotoxin** | USP <85> | ≤ 0.5 EU/mg | < 0.1 EU/mg | < 0.1 EU/mg |

---

### **3. Detailed Characterization Protocols**

#### **3.1 Determination of Molecular Weight and Polydispersity by GPC-RI-MALS**
Gel Permeation Chromatography (GPC) coupled with Refractive Index (RI) and Multi-Angle Light Scattering (MALS) is utilized to ensure the size distribution of the PEG chains is tightly controlled.

**Step-by-Step Procedure (SOP-GHS-AN-088):**
1.  **Mobile Phase Preparation:** 0.1 M Sodium Phosphate, 0.2 M NaCl, pH 7.0, filtered through 0.1 µm PES filter.
2.  **Column Setup:** Agilent PLgel Mixed-B (2 columns in series), maintained at 35°C.
3.  **Sample Preparation:** Dissolve 10 mg of PEG reagent (GLUC-2025-PEG-XXX) in 5 mL mobile phase (2 mg/mL).
4.  **Injection:** 100 µL injection volume at a flow rate of 1.0 mL/min.
5.  **Calculations:**
    *   **Number Average MW ($M_n$):** $\frac{\sum N_i M_i}{\sum N_i}$
    *   **Weight Average MW ($M_w$):** $\frac{\sum N_i M_i^2}{\sum N_i M_i}$
    *   **PDI:** $M_w / M_n$

#### **3.2 Quantification of Maleimide Functional Activity (Ellman's Assay Modification)**
To ensure high conjugation efficiency, the maleimide (MAL) functional group density is verified using a reverse Ellman's titration.

**Procedure:**
1.  Prepare a standard solution of L-Cysteine (1.0 mM).
2.  React a known quantity of PEG-MAL with an excess of L-Cysteine at pH 7.2 for 60 minutes.
3.  Back-titrate the unreacted Cysteine with DTNB (5,5'-dithiobis-(2-nitrobenzoic acid)).
4.  Measure absorbance at 412 nm.
5.  **Formula:**
    $$\text{Activity \%} = \left( 1 - \frac{Moles_{Cys, excess}}{Moles_{PEG, total}} \right) \times 100$$

#### **3.3 Impurity Profile: Diol and Methoxy Content**
A critical impurity in PEG production is the presence of PEG-diol (resulting from moisture during synthesis), which can lead to PEG-PEG cross-linking or inactive species.
*   **Detection Method:** HPLC with Evaporative Light Scattering Detection (ELSD).
*   **Target:** Diol content < 1.0%.
*   **Result for GLUC-2025-PEG-01:** 0.12% (Trace).

---

### **4. Stability and Storage Conditions**

The PEG reagent is highly sensitive to moisture and oxidative degradation (formation of peroxides). 

#### **4.1 Storage Specifications**
*   **Container:** Double LDPE bags, heat-sealed, placed inside a high-density polyethylene (HDPE) drum with desiccant packs.
*   **Atmosphere:** Nitrogen overlaid (Oxygen < 1%).
*   **Temperature:** -20°C ± 5°C (Long-term storage).

#### **4.2 Re-test Period**
Based on stability data (Report GHS-RPT-PEG-STAB-2024), a re-test period of 24 months is established when stored at -20°C. Batch **GLUC-2025-PEG-01** is currently enrolled in a 60-month real-time stability study.

---

### **5. Regulatory Compliance and Quality Risk Management**

Google Health Sciences adheres to the following guidelines regarding the use of PEG as a starting material:
1.  **ICH Q11:** Development and Manufacture of Drug Substances (Requirement for defining critical quality attributes of starting materials).
2.  **USP <1151>:** Pharmaceutical Dosage Forms (Aqueous solubility and polymer consistency).
3.  **Risk Assessment (GHS-RA-2025-04):** The risk of "PEG-associated vacuolation" is mitigated by controlling the PEG molecular weight distribution and ensuring the absence of low-molecular-weight oligomers (< 5 kDa).

#### **Table 3.4: Critical Quality Attributes (CQA) Impact Analysis**

| PEG Attribute | Impacted Drug Substance CQA | Risk Level | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **PDI > 1.1** | PK variability (half-life) | High | Narrow-cut GPC purification |
| **Low MAL Activity** | Unreacted glucapeptide (Yield) | Medium | Strict NMR/Ellman's release |
| **Residual Peroxides** | Peptide Oxidation (Met/Trp) | High | Nitrogen blanketing; Peroxide testing |
| **Endotoxin** | Safety / Immunogenicity | Critical | Pyrogen-free synthesis environment |

---

### **6. Conclusion**

The characterization of the PEG reagent for **Glucogen-XR** ensures a highly defined, homogeneous starting material. The use of the branched 40 kDa architecture, validated through the aforementioned methodologies, ensures that the resulting Drug Substance meets the targeted therapeutic profile for Type 2 Diabetes treatment with a once-weekly subcutaneous dosing regimen. Batch-to-batch consistency is demonstrated across the **GLUC-2025-XXX** series, supporting the robustness of the conjugation process.

---

## Site-Specific Conjugation Verification

### 3.2.S.2.6.4 Site-Specific Conjugation Verification for Glucogen-XR (glucapeptide extended-release)

#### 3.2.S.2.6.4.1 Executive Summary of Analytical Strategy
The site-specific conjugation of the 40 kDa branched Polyethylene Glycol (PEG) moiety to the glucapeptide backbone is a Critical Quality Attribute (CQA) for Glucogen-XR. Unlike non-specific PEGylation, which results in a heterogeneous population of positional isomers, the Google Health Sciences (GHS) manufacturing process utilizes a proprietary maleimide-thiol chemistry targeting a single engineered C-terminal cysteine residue (Cys-38) on the GHS-CHO-001 derived peptide.

Verification of site-specificity is conducted through a multi-tiered orthogonal approach comprising:
1.  **Primary Sequence Confirmation via LC-MS/MS Peptide Mapping:** Identification of the PEG-modified peptide fragment.
2.  **High-Resolution Mass Spectrometry (HRMS):** Determination of the intact mass of the conjugate compared to the unconjugated peptide.
3.  **Nuclear Magnetic Resonance (NMR) Spectroscopy:** 1H and 13C analysis of the thioether linkage.
4.  **Enzymatic Digestion and RP-HPLC Profiling:** Verification of the absence of "missed" conjugation sites (e.g., lysine residues).
5.  **Forced Degradation and Stability-Indicating Site Analysis:** Ensuring the linkage remains stable under accelerated thermal and pH stress.

---

#### 3.2.S.2.6.4.2 Protocol for Peptide Mapping and Fragment Analysis
The definitive proof of site-specific conjugation resides in the identification of the PEGylated fragment via Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS).

**Protocol GHS-QC-METH-442: Digestion and MS Identification**
*   **Step 1: Sample Preparation.** 1.0 mg of purified Glucogen-XR (Batch GLUC-2025-001 through GLUC-2025-010) is diluted to 2.0 mg/mL in 50 mM Ammonium Bicarbonate (pH 8.2).
*   **Step 2: Reduction and Alkylation.** Although the primary site is occupied by PEG, residual free thiols are blocked using Iodoacetamide (IAM) to ensure no artifacts occur during digestion.
*   **Step 3: Proteolysis.** High-purity Trypsin (Sequencing Grade, Roche) is added at a 1:20 (w/w) ratio. Digestion is performed at 37.0°C ± 0.5°C for 16 hours.
*   **Step 4: Quenching.** Reaction is stopped by adding 10% Trifluoroacetic Acid (TFA) to a final concentration of 0.1%.
*   **Step 5: LC-MS/MS Analysis.**
    *   **Column:** Waters ACQUITY UPLC Peptide BEH C18, 130Å, 1.7 µm, 2.1 mm x 150 mm.
    *   **Mobile Phase A:** 0.1% Formic Acid in Water.
    *   **Mobile Phase B:** 0.1% Formic Acid in Acetonitrile.
    *   **Gradient:** 5% to 65% B over 60 minutes.
    *   **Mass Spectrometer:** Thermo Scientific Orbitrap Fusion Lumos.

**Table 1: Theoretical vs. Observed Tryptic Fragments for Glucogen-XR (GLUC-2025-001)**

| Fragment ID | Sequence Position | Theoretical Sequence | Theoretical Mass (Da) | Observed Mass (m/z) | Error (ppm) | Modification |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T1 | 1–12 | HAEGTFTSDVSS | 1254.55 | 628.28 (z=2) | 1.2 | None |
| T2 | 13–20 | YLEGQAAK | 850.44 | 426.22 (z=2) | 0.8 | None |
| T3 | 21–27 | EFIAWLV | 863.48 | 864.49 (z=1) | 1.5 | None |
| T4 | 28–38 | KGRGSSGAPP-**C*** | 1074.48 | **N/A** | **N/A** | **PEGylated** |
| T4-PEG | 28–38 + PEG | KGRGSSGAPP-**C-PEG** | ~41074 | 20542.1 (avg) | <100 | 40kDa PEG |

*Note: T4 fragment contains the Cys-38 residue. The absence of the T4 native peak and the presence of a broad, high-molecular-weight signal at the end of the gradient confirms the C-terminal conjugation.*

---

#### 3.2.S.2.6.4.3 Quantitative Verification of Conjugation Efficiency
To comply with ICH Q6B, the ratio of PEGylated to non-PEGylated peptide must be quantified for every clinical batch.

**Table 2: Site-Specificity and Conjugation Efficiency across GMP Batches (Year 2025)**

| Batch Number | Manufacturing Date | Site Occupancy (%) | Free Peptide (%) | Di-PEGylated (%) | Multi-PEGylated (%) | Pass/Fail (Spec: >98.0%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 14-JAN-2025 | 99.62 | 0.12 | 0.26 | <0.01 | Pass |
| GLUC-2025-002 | 02-FEB-2025 | 99.58 | 0.15 | 0.27 | <0.01 | Pass |
| GLUC-2025-003 | 28-FEB-2025 | 99.71 | 0.08 | 0.21 | <0.01 | Pass |
| GLUC-2025-004 | 15-MAR-2025 | 99.45 | 0.22 | 0.33 | <0.01 | Pass |
| GLUC-2025-005 | 04-APR-2025 | 99.68 | 0.10 | 0.22 | <0.01 | Pass |
| GLUC-2025-006 | 22-APR-2025 | 99.55 | 0.18 | 0.27 | <0.01 | Pass |
| GLUC-2025-007 | 10-MAY-2025 | 99.73 | 0.05 | 0.22 | <0.01 | Pass |
| **Mean** | **N/A** | **99.62** | **0.13** | **0.25** | **<0.01** | **N/A** |
| **% RSD** | **N/A** | **0.09** | **45.2** | **15.4** | **N/A** | **N/A** |

---

#### 3.2.S.2.6.4.4 Thioether Linkage Stability Analysis
The maleimide-thiol reaction creates a thioether bond between the Cys-38 of the glucapeptide and the maleimide-functionalized 40 kDa PEG. This bond is susceptible to a "retro-Michael addition" under specific physiological conditions or high pH.

**Calculations for Linkage Stability (First-Order Rate Constants):**
The degradation of the conjugate is modeled by the following equation:
$$[C]_t = [C]_0 \cdot e^{-kt}$$
Where:
*   $[C]_t$ = Concentration of intact Glucogen-XR at time $t$.
*   $[C]_0$ = Initial concentration.
*   $k$ = Degradation rate constant (hours⁻¹).

**Table 3: Forced Degradation Results for Linkage Integrity (Batch GLUC-2025-001)**

| Stress Condition | Duration | Intact Conjugate (%) | Free Peptide (Released) (%) | k (h⁻¹) | Observation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| pH 4.0 (Control) | 30 Days | 99.8 | 0.2 | 2.7e-7 | Highly Stable |
| pH 7.4 (Physiol) | 30 Days | 98.2 | 1.8 | 2.5e-6 | Expected minimal release |
| pH 9.0 (Stress) | 72 Hours | 92.4 | 7.6 | 1.1e-3 | Accelerated retro-Michael |
| 40°C (Thermal) | 30 Days | 97.5 | 2.5 | 3.5e-6 | Standard stability profile |

---

#### 3.2.S.2.6.4.5 Orthogonal Verification: High-Resolution NMR
To ensure no inadvertent PEGylation occurs at the ε-amino groups of the Lysine residues (Lys-20 and Lys-28), 1D and 2D NMR studies were conducted.

*   **1H-NMR Spectroscopy:** Performed on a Bruker Avance III 600 MHz spectrometer. The CH2-CH2 protons of the PEG backbone produce a massive singlet at 3.64 ppm.
*   **Verification Logic:** Integration of the succinimide ring protons (generated after maleimide-thiol reaction) at 2.5–2.8 ppm vs. the aromatic protons of Tyr-13 (6.8–7.2 ppm).
*   **Results:** The molar ratio of PEG to peptide was determined to be 1.02 : 1.00, confirming mono-PEGylation. The absence of additional shifts in the lysine side-chain region (2.9–3.1 ppm) confirms the ε-amino groups remain unreacted.

---

#### 3.2.S.2.6.4.6 Regulatory Compliance and GMP Standards
The site-specific conjugation verification protocols described herein are in full compliance with:
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Proteins.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **FDA Guidance:** "Points to Consider in the Manufacture and Testing of Monoclonal Antibody Products for Human Use" (adapted for conjugated peptides).

All data generated for Batches GLUC-2025-001 through GLUC-2025-007 were audited by the Google Health Sciences Quality Assurance (QA) department and found to be in adherence with 21 CFR Part 210 and 211.

**Cross-Reference:** See Section 3.2.S.3.2 for Impurities (specifically truncated PEG species) and Section 3.2.P.5.4 for Batch Analyses of the Drug Product.

---
**END OF SUBSECTION**

---

# Post-PEGylation Purification

## Separation of Mono-PEGylated Product

### **MODULE 3: QUALITY**
#### **3.2.S DRUG SUBSTANCE (GLUCAPEPTIDE EXTENDED-RELEASE)**
#### **3.2.S.2 Manufacture**
#### **3.2.S.2.2 Process Description and Process Controls**

---

### **SECTION 3.2.S.2.2.8: Post-PEGylation Purification**
### **SUBSECTION 3.2.S.2.2.8.4: Separation of Mono-PEGylated Product**

---

#### **1.0 INTRODUCTION AND OBJECTIVE**
The separation of the mono-PEGylated Glucogen-XR species from the crude PEGylation reaction mixture represents the most critical downstream processing (DSP) step in the production of Glucogen-XR. The PEGylation reaction, conducted via site-specific conjugation of a 40 kDa branched Methoxy-Polyethylene Glycol (mPEG)-maleimide to the C-terminal cysteine of the recombinant Glucapeptide, yields a polydisperse mixture. 

This mixture typically comprises:
1.  **Mono-PEGylated Glucogen-XR:** The desired therapeutic entity (Target Molecule).
2.  **Unreacted Glucapeptide:** Residual peptide starting material.
3.  **Multi-PEGylated Species (Di-/Tri-PEGylated):** Products where non-specific conjugation or adsorption has occurred at N-terminal or lysine residues.
4.  **Hydrolyzed/Residual PEG:** Non-conjugated polymer.
5.  **Process-Related Impurities:** Aggregates and fragments.

The primary objective of this unit operation is the high-resolution fractionation of these species to ensure a final drug substance purity of >98.0% mono-PEGylated product, as measured by Size Exclusion High-Performance Liquid Chromatography (SEC-HPLC) and Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC).

#### **2.0 CHROMATOGRAPHIC STRATEGY: CATION EXCHANGE (CEX) SEPARATION**
Google Health Sciences (GHS) utilizes a high-resolution Cation Exchange Chromatography (CEX) strategy, leveraging the significant hydrodynamic volume change and subtle surface charge shielding afforded by the 40 kDa PEG moiety. While the PEG chain itself is neutral, its presence "masks" certain surface charges of the peptide and significantly increases the friction coefficient, allowing for elution patterns distinct from the smaller, more highly charged unreacted peptide.

**2.1 Resin Selection and Specification**
The stationary phase selected is **Sartobind S** (or equivalent high-capacity SP Sepharose High Performance), a strong cation exchanger.

| Parameter | Specification |
| :--- | :--- |
| **Matrix** | Cross-linked agarose, 6% |
| **Functional Group** | Sulfopropyl (–CH₂–CH₂–CH₂–SO₃⁻) |
| **Mean Particle Size (d₅₀)** | 34 µm |
| **Ionic Capacity** | 0.12 – 0.18 mmol H⁺/mL resin |
| **Flow Velocity (Operating)** | 60–150 cm/h |
| **Pressure Limit** | 0.3 MPa (3 bar) |

---

#### **3.0 DETAILED STEP-BY-STEP OPERATIONAL PROTOCOL**

This protocol is executed using the **ÄKTA Process™** automated chromatography system (Equipment ID: GHS-DSP-AKTA-04) located in Suite 4 of the South San Francisco facility.

##### **Step 3.1: Column Equilibration**
The column (Column ID: GHS-CEX-300; Diameter: 30 cm; Bed Height: 20 cm ± 1 cm) is equilibrated to ensure a stable baseline and pH environment.
*   **Buffer A (Equilibration/Wash):** 20 mM Sodium Acetate, pH 4.5 ± 0.1.
*   **Procedure:** Pump 5 Column Volumes (CV) of Buffer A at a flow rate of 120 cm/h.
*   **Criteria:** Conductivity must be within ± 0.5 mS/cm of the buffer specification (approx. 1.8 mS/cm).

##### **Step 3.2: Sample Loading and Conditioning**
The PEGylation reaction quench (from Step 3.2.S.2.2.7) is diluted 1:3 with 20 mM Sodium Acetate (pH 4.5) to lower the conductivity below 3.0 mS/cm, ensuring quantitative binding of the peptide moiety to the sulfopropyl ligands.
*   **Loading Capacity:** Max 15 mg total protein per mL of resin.
*   **Control:** UV 280 nm monitoring. Breakthrough must not exceed 5% of the feed concentration.

##### **Step 3.3: Intermediate Wash (Removal of Free PEG)**
*   **Buffer A:** 20 mM Sodium Acetate, pH 4.5.
*   **Volume:** 3 CV.
*   **Purpose:** Free, non-conjugated PEG-maleimide and hydrolyzed PEG-OH do not bind to the CEX resin and are removed in the flow-through and subsequent wash.

##### **Step 3.4: Fractionated Gradient Elution (The Critical Separation)**
The separation of multi-, mono-, and unreacted peptide is achieved via a linear salt gradient.
*   **Buffer B (Elution):** 20 mM Sodium Acetate, 500 mM Sodium Chloride, pH 4.5.
*   **Gradient Profile:**
    1.  0% to 15% B over 2 CV (Removal of weakly bound impurities).
    2.  15% to 45% B over 15 CV (Linear Gradient for Fractionation).
    3.  45% to 100% B over 2 CV (Strip of unreacted peptide).

##### **Step 3.5: Fraction Collection and In-Process Control (IPC)**
Fractions are collected in 0.2 CV increments during the 15%–45% B gradient. Each fraction is subjected to "At-Line" Analytical SEC to determine the PEGylation state.

---

#### **4.0 PROCESS ANALYTICAL TECHNOLOGY (PAT) AND CONTROLS**

To ensure the consistency of the GLUC-2025-XXX series, GHS employs real-time UV spectral deconvolution (214 nm vs 280 nm) and conductivity monitoring.

**Table 1: IPC Specifications for Fraction Pooling**
| Parameter | Analytical Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Purity (Mono-PEG)** | SEC-HPLC (IPC-08) | ≥ 98.5% |
| **Unreacted Peptide** | RP-HPLC (IPC-09) | ≤ 0.5% |
| **Di-PEGylated Species** | SEC-HPLC (IPC-08) | ≤ 1.0% |
| **Endotoxin** | LAL Kinetic Chromogenic | ≤ 5 EU/mg |

---

#### **5.0 DATA SUMMARY FROM REPRESENTATIVE BATCHES**

The following data represents the performance of the separation process across three validation-scale batches.

**Table 2: Chromatographic Performance Data (GLUC-2025-001 through 003)**
| Batch Number | Load Mass (g) | Elution Peak Volume (L) | Yield (Mono) | SEC Purity (%) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 450.2 | 84.5 | 72.4% | 99.2% |
| **GLUC-2025-002** | 448.9 | 82.1 | 74.1% | 99.4% |
| **GLUC-2025-003** | 452.1 | 85.0 | 71.8% | 98.9% |
| **Mean** | **450.4** | **83.8** | **72.8%** | **99.2%** |

---

#### **6.0 CALCULATIONS AND STATISTICAL ANALYSIS**

**6.1 Resolution Calculation (Rs)**
Resolution between Mono-PEGylated product and Di-PEGylated impurity is calculated per USP <621>:
$$Rs = \frac{2(t_{R2} - t_{R1})}{w_1 + w_2}$$
Where:
*   $t_{R2}$ = Retention time of Mono-PEGylated peak.
*   $t_{R1}$ = Retention time of Di-PEGylated peak.
*   $w$ = Peak width at base.
*   *Requirement:* $Rs \ge 1.5$ for robust commercial manufacturing.

**6.2 Step Yield Calculation**
$$Yield (\%) = \left( \frac{Mass_{Pool} \times Purity_{SEC}}{Mass_{Loaded} \times \%PEGylation_{Feed}} \right) \times 100$$

---

#### **7.0 REGULATORY COMPLIANCE AND GUIDELINES**
This purification step is designed in accordance with:
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <1059>:** Excipient Performance (regarding PEG consistency).
*   **FDA Guidance for Industry:** *Analysis of the Specificity, Purity, and Potency of Protein-Based Therapeutics.*

#### **8.0 EQUIPMENT AND MATERIAL VALIDATION**
All resins are subject to lifetime validation studies. For Glucogen-XR, the Sartobind S resin is validated for 50 cycles before replacement, provided the HETP (Height Equivalent to a Theoretical Plate) remains $< 0.05$ cm and Asymmetry ($A_s$) remains between 0.8 and 1.5.

**Table 3: Resin Lifetime Monitoring (Batch GLUC-2025-004 Example)**
| Cycle Number | HETP (cm) | Asymmetry ($A_s$) | Backpressure (bar) |
| :--- | :--- | :--- | :--- |
| 1 | 0.022 | 1.12 | 1.2 |
| 25 | 0.025 | 1.18 | 1.4 |
| 50 (Limit) | 0.038 | 1.42 | 1.8 |

---

#### **9.0 DEVIATION MANAGEMENT AND CRITICAL PROCESS PARAMETERS (CPPs)**
The critical process parameters for this section include:
1.  **pH of Buffer A:** Deviation of $> \pm 0.2$ pH units triggers an immediate pause. Low pH can lead to peptide degradation; high pH reduces binding capacity.
2.  **Conductivity of Loading Material:** Must be $< 3.5$ mS/cm to prevent loss of product in flow-through.
3.  **Gradient Slope:** Must be $2.0\% \pm 0.1\% B/CV$ to ensure resolution of the 40 kDa conjugate.

#### **10.0 CONCLUSION**
The "Separation of Mono-PEGylated Product" via high-resolution Cation Exchange Chromatography ensures that Glucogen-XR (Glucapeptide extended-release) meets the stringent purity requirements necessary for long-term subcutaneous administration in Type 2 Diabetes Mellitus patients, minimizing the risk of immunogenicity associated with multi-PEGylated aggregates or unreacted peptide fragments.

---

## Removal of Unreacted PEG

### 3.2.S.2.2.6 Post-PEGylation Purification: Removal of Unreacted PEG

#### 3.2.S.2.2.6.1 Objective and Scope
The primary objective of this downstream process unit operation is the quantitative removal of unreacted methoxy-polyethylene glycol (mPEG) and related PEG-derivatives from the reaction mixture following the site-specific conjugation of the Glucogen-XR intermediate. Due to the polydispersity of the PEG reagent and the potential for steric hindrance affecting binding kinetics, a high-resolution separation strategy is required to differentiate the PEGylated peptide (Glucogen-XR) from excess, non-conjugated PEG.

This section details the Tangential Flow Filtration (TFF) and subsequent Cation Exchange Chromatography (CEX) steps optimized by Google Health Sciences to ensure that residual PEG levels remain below the Limit of Quantitation (LOQ) as defined in the validated analytical procedures (See Section 3.2.S.4.2).

#### 3.2.S.2.2.6.2 Technical Rationale for Separation Strategy
The separation of unreacted PEG from PEGylated Glucogen-XR presents unique challenges due to the lack of a strong chromophore in the PEG moiety and its significant hydrodynamic volume. 

1.  **Molecular Weight Differential:** The unconjugated mPEG-propionaldehyde (nominal MW 40 kDa) and the Glucogen-XR conjugate (~44.5 kDa) have similar molecular weights; however, the hydrodynamic radius ($R_h$) of the PEGylated species is significantly altered compared to the native peptide.
2.  **Charge Density Shift:** The Glucogen-XR peptide contains specific lysine residues and an N-terminal amine. Upon site-specific PEGylation at the N-terminus (pH 5.0–6.0), the local charge density is modified. Cation exchange chromatography (CEX) is utilized to exploit the subtle differences in surface charge distribution between the mono-PEGylated species, poly-PEGylated impurities, and unreacted PEG (which is neutral/non-ionic).

---

#### 3.2.S.2.2.6.3 Equipment and Materials
All equipment utilized in the removal of unreacted PEG is qualified under Google Health Sciences’ Global Asset Management (GAM) system and complies with 21 CFR Part 11 for electronic records.

**Table 3.2.S.2.2.6-1: Equipment Specifications for Post-PEGylation Purification**

| Equipment ID | Description | Manufacturer | Specification/Capacity |
| :--- | :--- | :--- | :--- |
| **GHS-CHRO-098** | Preparative Chromatography System | Cytiva Aktä Process | 20 mm ID, Flow up to 600 L/h |
| **GHS-COL-442** | Chromatography Column | BPG 300/500 | 30 cm diameter, 50 cm height |
| **GHS-TFF-221** | TFF Skid | MilliporeSigma Pellicon | 0.1 m² to 2.5 m² capacity |
| **GHS-SKD-005** | Buffer Preparation Skid | Google Cloud Life Sciences | Automated Inline Dilution (ILD) |
| **GHS-SEN-992** | Inline Refractive Index Detector | Waters / Wyatt | dN/dc monitoring for PEG |

**Table 3.2.S.2.2.6-2: Raw Materials and Compendial References**

| Material Name | Grade | Function | Manufacturer |
| :--- | :--- | :--- | :--- |
| Sodium Acetate Trihydrate | USP/EP/JP | Buffer Component | BioPharma KGaA |
| Glacial Acetic Acid | USP/EP/JP | pH Adjustment | Sigma-Aldrich |
| Sodium Chloride (NaCl) | USP/EP/JP | Elution Salts | Avantor |
| SP Sepharose High Performance | Food/Drug Grade | Resin Matrix | Cytiva |
| WFI (Water for Injection) | USP/EP | Solvent | GHS In-house |

---

#### 3.2.S.2.2.6.4 Step-by-Step Operational Protocol (SOP-GHS-DS-0442)

##### Phase I: Ultrafiltration/Diafiltration (UF/DF-2)
Prior to chromatography, the PEGylation reaction mixture must be concentrated and diafiltered to remove the reductive amination catalyst (Sodium Cyanoborohydride) and to transition the Glucogen-XR into the Equilibration Buffer for CEX.

1.  **System Sanitization:** The TFF system (GHS-TFF-221) is sanitized using 0.5 M NaOH for 60 minutes, followed by a WFI flush until the effluent pH returns to neutral (pH 6.5–7.5) and conductivity is < 2.0 μS/cm.
2.  **Membrane Integrity Test:** A Normalized Water Permeability (NWP) test is performed on the 30 kDa Pellicon 3 membranes. Acceptable NWP must be within ±20% of the historical baseline.
3.  **Loading:** The reaction mixture (Batch GLUC-2025-XXX) is loaded at a cross-flow velocity of 4.5 L/min/m².
4.  **Concentration:** The product is concentrated to 15.0 g/L (± 1.0 g/L) based on UV280 absorbance.
5.  **Diafiltration:** A 7-fold diafiltration is performed against 20 mM Sodium Acetate, pH 5.0. 
    *   *Calculation:* $V_{total} = V_{initial} \times e^{(7)}$
    *   The goal is to reduce the residual sodium cyanoborohydride to < 1 ppm.

##### Phase II: Cation Exchange Chromatography (CEX-1)
This step is the critical "polishing" step where unreacted PEG is separated from the conjugated peptide.

1.  **Column Packing:** SP Sepharose HP is packed into the BPG 300 column to a bed height of 20 cm (± 2 cm).
2.  **HETP and Asymmetry Testing:** 1.0 M NaCl is used as a tracer.
    *   *Acceptance Criteria:* Asymmetry ($A_s$) 0.8–1.5; Plate count ($N/m$) > 3000.
3.  **Equilibration:** 5 Column Volumes (CV) of Buffer A (20 mM Sodium Acetate, pH 5.0).
4.  **Loading:** The diafiltered pool is loaded at a linear velocity of 120 cm/h. Note that unreacted PEG does not bind to the resin and is found in the Flow-Through (FT) fraction.
5.  **Wash 1:** 3 CV of Buffer A to ensure all non-binding PEG is washed out.
6.  **Elution:** A linear gradient from 0% to 50% Buffer B (20 mM Sodium Acetate, 500 mM NaCl, pH 5.0) over 15 CV.
    *   Unreacted PEG elutes in the FT/Wash.
    *   Mono-PEGylated Glucogen-XR elutes at approximately 15–22 mS/cm.
    *   Di-PEGylated and poly-PEGylated species elute later in the gradient (> 30 mS/cm).

---

#### 3.2.S.2.2.6.5 Process Data and Batch Records (Historical Consistency)

The following table demonstrates the efficacy of the "Removal of Unreacted PEG" step across three validation batches performed at the South San Francisco facility.

**Table 3.2.S.2.2.6-3: Summary of Removal Efficiency for Batches GLUC-2025-001 to 003**

| Parameter | Unit | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **Input PEG Content** | grams | 452.1 | 449.8 | 455.5 |
| **Step Yield (Glucogen-XR)** | % | 94.2% | 93.8% | 94.5% |
| **Residual PEG in Eluate** | % (w/w) | < 0.05% (LOD) | < 0.05% (LOD) | < 0.05% (LOD) |
| **Separation Resolution ($R_s$)** | - | 1.82 | 1.79 | 1.85 |
| **Cumulative Impurity Reduction**| Log₁₀ | 3.4 | 3.2 | 3.5 |

---

#### 3.2.S.2.2.6.6 Analytical Monitoring of PEG Clearance

Since PEG does not absorb at 280 nm, Google Health Sciences employs an Inline Refractive Index (RI) detector (GHS-SEN-992) coupled with the chromatography skid. This allows for real-time monitoring of the unreacted PEG peak in the flow-through.

**Refractive Index Monitoring Formula:**
The concentration of PEG in the effluent is calculated via:
$$C_{PEG} = \frac{\Delta n}{(dn/dc)}$$
Where:
*   $\Delta n$ = Change in Refractive Index
*   $dn/dc$ = Refractive Index Increment (0.135 mL/g for mPEG in acetate buffer)

**Figure 3.2.S.2.2.6-A: Typical Chromatogram for CEX Removal of PEG**
*(Description: The chromatogram shows a large RI signal in the flow-through representing the 40kDa mPEG, while the UV280 signal remains baseline. During the salt gradient, a sharp UV280 peak emerges representing the purified Glucogen-XR, with a negligible RI signature, confirming the absence of free PEG in the product pool.)*

---

#### 3.2.S.2.2.6.7 In-Process Controls (IPC)

To ensure the quality of the Drug Substance, the following IPCs are implemented during the removal of unreacted PEG.

**Table 3.2.S.2.2.6-4: In-Process Controls for PEG Removal**

| Control Point | Test Method | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- |
| **Post-UF/DF Pool** | HPLC-ELSD | Report Value | Confirm PEG/Peptide ratio prior to CEX |
| **CEX Flow-Through** | RI Analysis | Peak Observed | Confirming clearance of unreacted PEG |
| **CEX Main Pool** | RP-HPLC | ≥ 98.0% Mono-PEGylated | Purity requirement |
| **CEX Main Pool** | SEC-HPLC | ≤ 0.5% Free PEG | Regulatory limit for safety |

---

#### 3.2.S.2.2.6.8 Critical Process Parameters (CPPs) and Risk Assessment

Based on Quality by Design (QbD) studies conducted during development (Report GHS-RPT-PEG-009), the following parameters were identified as critical for the efficient removal of unreacted PEG.

1.  **Loading pH (5.0 ± 0.2):** If pH exceeds 5.5, the binding affinity of Glucogen-XR to the SP Sepharose resin decreases, leading to product loss in the flow-through and co-elution with the PEG.
2.  **Conductivity of Load (< 4.0 mS/cm):** High conductivity inhibits the electrostatic interaction required for peptide binding, allowing the peptide to bleed into the PEG-containing waste stream.
3.  **Linear Velocity (≤ 150 cm/h):** Excessive flow rates during elution reduce the resolution between the mono-PEGylated Glucogen-XR and the poly-PEGylated impurities.

---

#### 3.2.S.2.2.6.9 Deviation Management and Troubleshooting
In the event that the RI detector indicates residual PEG tailing into the elution peak, the process allows for a "Heart Cut" fraction collection strategy. 

*   **Fractionation Strategy:** Fractions are collected in 0.2 CV increments.
*   **Analysis:** Each fraction is analyzed via SEC-HPLC with Evaporative Light Scattering Detection (ELSD).
*   **Pooling:** Only fractions meeting the <0.5% free PEG criteria are pooled for the subsequent purification step (3.2.S.2.2.7).

#### 3.2.S.2.2.6.10 References
1.  **ICH Q11:** Development and Manufacture of Drug Substances.
2.  **USP <1059>:** Excipient Performance (for PEG Characterization).
3.  **FDA Guidance for Industry:** Nonclinical Studies with Peptides and PEGylated Products (2021).
4.  **Google Health Sciences Internal Report GHS-DS-2024-012:** Validation of PEG Clearance via Cation Exchange Chromatography.

***

*End of Subsection 3.2.S.2.2.6*

---

## Buffer Exchange and Concentration

### **3.2.S.2.2.6.4 Buffer Exchange and Concentration (Ultrafiltration/Diafiltration - UFDF-2)**

---

#### **1. Scope and Process Overview**
The Buffer Exchange and Concentration step (UFDF-2) is the final downstream processing unit operation for the Glucogen-XR (glucapeptide extended-release) drug substance intermediate. This stage occurs immediately following the PEGylation reaction and subsequent cation-exchange chromatography (CEX-2) purification.

The primary objectives of this unit operation are:
1.  **Buffer Exchange:** To transition the glucapeptide from the CEX-2 elution buffer (high salt, acidic pH) into the final formulation buffer (low salt, physiological/stable pH range).
2.  **Target Concentration:** To concentrate the PEGylated glucapeptide to the target specification of $45.0 \pm 5.0$ mg/mL for final Drug Substance (DS) fill.
3.  **Impurity Removal:** To further reduce low-molecular-weight process-related impurities, including residual PEGylation reagents and small peptide fragments.

This process is conducted using a Tangential Flow Filtration (TFF) system utilizing Polyethersulfone (PES) membranes with a nominal molecular weight cutoff (MWCO) of 30 kDa, selected based on the hydrodynamic radius of the PEGylated Glucogen-XR molecule (~65 kDa apparent).

---

#### **2. Regulatory and Quality Standards Compliance**
All operations described herein are performed in accordance with Current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210 and 211. The process validation and characterization align with:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <1059>:** Excipients for Use in Pharmaceutical Dosage Forms.
*   **USP <121>:** Insulin Assays (where applicable for peptide standards).

---

#### **3. Equipment and Materials Specifications**

##### **3.1 Equipment List**
| Equipment ID | Description | Manufacturer | Location |
| :--- | :--- | :--- | :--- |
| **UFDF-SYS-04** | Automated TFF System (G-Flow Pro) | Google Health Sciences Engineering | Suite 402, South SF |
| **MEM-PES-30K-A** | 30 kDa Pellicon 3 PES Cassette (0.5 $m^2$) | BioPharma Millipore | Controlled Storage |
| **SEN-PRS-102** | Single-use Pressure Sensors (Feed, Retentate, Permeate) | PendoTECH | Single-use |
| **BAL-EXT-09** | Floor Scale (Precision: 0.01 kg) | Mettler Toledo | Suite 402 |
| **PMP-ROT-01** | Quaternary Diaphragm Pump | Quattroflow | Integrated |

##### **3.2 Buffer Compositions**
| Buffer ID | Description | Components | Target pH | Conductivity |
| :--- | :--- | :--- | :--- | :--- |
| **BUF-GX-22** | Diafiltration Buffer | 20 mM Histidine, 150 mM NaCl | $6.5 \pm 0.2$ | $16.5 \pm 1.5$ mS/cm |
| **BUF-GX-23** | Final Formulation/Flush | 20 mM Histidine, 150 mM NaCl, 0.02% PS-80 | $6.5 \pm 0.2$ | $16.8 \pm 1.2$ mS/cm |
| **BUF-CLN-01** | Cleaning Buffer | 0.5 M Sodium Hydroxide (NaOH) | N/A | > 180 mS/cm |

---

#### **4. Detailed Step-by-Step Operating Protocol**

##### **4.1 Membrane Preparation and Sanitization**
1.  **Installation:** Install three (3) 0.5 $m^2$ PES cassettes into the holder, providing a total filtration area of 1.5 $m^2$.
2.  **Flushing:** Flush the system with 50 L of Water for Injection (WFI) to remove storage agents (18% ethanol).
3.  **Integrity Test:** Perform a Normalized Water Permeability (NWP) test.
    *   *Calculation:* $NWP = \frac{Flux (LMH)}{Pressure (TMP)}$
    *   *Acceptance Criteria:* $\ge 90\%$ of previous membrane baseline.
4.  **Sanitization:** Circulate 0.5 M NaOH through the system for 60 minutes at 25°C.
5.  **Equilibration:** Flush with BUF-GX-22 until the permeate pH and conductivity match the inlet buffer specifications.

##### **4.2 Concentration 1 (Pre-Diafiltration)**
The CEX-2 pool (approximate volume 40-60 L) is loaded into the TFF retentate vessel.
*   **Feed Flow Rate:** 4.5 LPM (Liters Per Minute).
*   **Transmembrane Pressure (TMP) Control:** Maintained at 15-18 psi.
*   **Initial Concentration:** Reduce volume until the intermediate concentration reaches 15 mg/mL.
*   **Data Logging:** Retentate weight, Feed Pressure ($P_F$), Retentate Pressure ($P_R$), and Permeate Pressure ($P_P$) recorded every 5 minutes.

##### **4.3 Constant Volume Diafiltration (CVD)**
To ensure complete buffer exchange, a 10-volume diafiltration (DV) is performed.
*   **Process:** BUF-GX-22 is added to the retentate tank at a rate equal to the permeate flow rate.
*   **Calculations for Buffer Exchange Efficiency ($E$):**
    $$E = 1 - e^{-N}$$
    Where $N = \text{number of diavolumes}$. For $N=10$, $E = 99.995\%$.
*   **Critical Parameter:** Temperature must be maintained at $18-22^\circ C$ to prevent glucapeptide aggregation during the high-shear phase.

##### **4.4 Concentration 2 (Final)**
Following diafiltration, the product is concentrated to the target setpoint.
*   **Target Retentate Concentration:** 52 mg/mL (overshot to account for system flush dilution).
*   **Flux Monitoring:** As concentration increases, flux ($J$) is monitored. If $J < 10$ LMH, the feed flow is reduced to mitigate gel layer formation.

##### **4.5 Product Recovery and Formulation**
1.  **System Flush:** A calculated volume of BUF-GX-23 (containing Polysorbate-80) is circulated through the system to recover protein adsorbed to the membrane and plumbing.
2.  **Mixing:** The flush and the concentrated retentate are pooled and mixed for 15 minutes.
3.  **Final Concentration Adjustment:** Concentration is verified by $A_{280}$ and adjusted with BUF-GX-23 to $45.0 \pm 1.0$ mg/mL.

---

#### **5. Process Data and Batch Records**

The following table summarizes the data from three recent cGMP batches produced at the South San Francisco facility.

**Table 3.2.S.2.2.6.4-1: UFDF-2 Process Performance Metrics**

| Parameter | Batch: GLUC-2025-001 | Batch: GLUC-2025-002 | Batch: GLUC-2025-003 |
| :--- | :--- | :--- | :--- |
| **Starting Vol (L)** | 52.4 | 48.9 | 55.1 |
| **Initial Protein (g)** | 419.2 | 391.2 | 440.8 |
| **Diavolumes (DV)** | 10.2 | 10.1 | 10.5 |
| **Average TMP (psi)** | 16.4 | 16.8 | 17.1 |
| **Avg. Flux (LMH)** | 42.5 | 41.2 | 39.8 |
| **Final Volume (L)** | 9.21 | 8.65 | 9.75 |
| **Final Conc (mg/mL)** | 45.1 | 44.9 | 45.0 |
| **Step Yield (%)** | 98.9% | 99.1% | 99.4% |
| **Bioburden (CFU/10mL)** | 0 | 0 | 0 |
| **Endotoxin (EU/mg)** | < 0.05 | < 0.05 | < 0.05 |

---

#### **6. Critical Process Parameters (CPPs) and Proven Acceptable Ranges (PAR)**

| Parameter | Control Strategy | Target | PAR |
| :--- | :--- | :--- | :--- |
| **Transmembrane Pressure** | Automated PID Loop | 16 psi | 10 - 22 psi |
| **Cross-Flow Velocity** | Pump Speed Control | 300 mL/min/cm² | 250 - 350 mL/min/cm² |
| **Temperature** | Chilled Jacket Tank | 20°C | 15 - 25°C |
| **Diafiltration Vol.** | Scale Integration | 10 DV | 8 - 12 DV |

---

#### **7. Calculation Formulas for In-Process Control**

**7.1 Mass Balance Calculation:**
$$M_{final} = C_{final} \times V_{final}$$
$$Yield (\%) = \frac{M_{final}}{M_{initial}} \times 100$$

**7.2 Permeability and Flux:**
$$Flux (J) = \frac{V_{permeate}}{Area \times Time}$$
$$Permeability = \frac{J}{TMP}$$

---

#### **8. Deviation and Out-of-Specification (OOS) Handling**
In the event of a pressure excursion (TMP > 25 psi) or a membrane rupture (detected via permeate turbidity), the following SOP-GHS-4402 is initiated:
1.  Immediate diversion of permeate to waste.
2.  Recirculation of retentate at low shear.
3.  Integrity testing of the membrane post-run using the Diffusion Flow method (Acceptance: $\le 15$ mL/min at 20 psi).

---

#### **9. References**
1.  **GHS-DS-2024-05:** "Validation Report for the UFDF-2 Purification of Glucogen-XR."
2.  **ICH Q11:** "Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities)."
3.  **ASTM E2500:** "Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment."

---
*End of Subsection 3.2.S.2.2.6.4*

---

# Ultrafiltration and Diafiltration

## Concentration to Target Protein Level

### 3.2.S.2.2.8.2 Concentration to Target Protein Level (Ultrafiltration 2 / Final Concentration)

#### 3.2.S.2.2.8.2.1 Introduction and Process Objectives
The concentration of Glucogen-XR (glucapeptide extended-release) intermediate to the final Drug Substance (DS) target protein level is a critical unit operation performed within the final downstream processing suite at the Google Health Sciences (GHS) South San Francisco facility. This step follows the viral filtration (VF) stage and precedes the final formulation and fill. 

The primary objective of this operation is the controlled volumetric reduction of the purified glucapeptide pool to achieve a target protein concentration of **150 mg/mL ± 5 mg/mL**. This concentration is required to support the extended-release profile of the drug product (DP), which utilizes a high-viscosity matrix for sustained GLP-1 receptor agonism.

#### 3.2.S.2.2.8.2.2 Equipment and Materials
All equipment utilized in this stage is dedicated to the GHS-CHO-001 cell line downstream processing or is subject to validated multi-product cleaning protocols (if applicable).

**Table 8.2-1: Primary Equipment Specifications for UF/DF Unit 02**

| Equipment ID | Description | Manufacturer | Specification/Material |
| :--- | :--- | :--- | :--- |
| **UF-SKID-502** | Automated TFF System | Cytiva / Pall | DeltaV Controlled, Stainless Steel 316L |
| **HLD-ST-992** | Feed Tank (Jacketed) | Walker Stainless | 500L, 316L SS, Ra < 0.4 µm |
| **CAS-MOD-30K** | TFF Cassette Holder | Sartorius | Centramate™ Max |
| **FLT-30K-PES** | Polyethersulfone Membrane | MilliporeSigma | Pellicon® 3, 30 kDa MWCO, 5.0 m² |
| **PMP-ROT-77** | Rotary Lobe Pump | Quattroflow | QF1200, Low-shear |
| **SEN-PRS-01** | Pressure Transducers | PendoTECH | Single-use/In-line, NIST Calibrated |

#### 3.2.S.2.2.8.2.3 Process Parameters and Control Strategy
The concentration process is governed by Critical Process Parameters (CPPs) and Key Process Parameters (KPPs) derived from Quality by Design (QbD) studies (refer to Section 3.2.S.2.6 for Development Reports).

**Table 8.2-2: Operational Parameters for Final Concentration**

| Parameter | Type | Set Point | Range / Limit | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Transmembrane Pressure (TMP)** | CPP | 1.2 bar | 0.8 – 1.5 bar | Optimization of flux vs. gel-layer formation |
| **Feed Flow Rate (Crossflow)** | KPP | 350 L/m²/h | 300 – 400 L/m²/h | Minimization of shear stress on peptide |
| **Temperature** | KPP | 18°C | 15 – 25°C | Control of viscosity and peptide stability |
| **Delta P (ΔP)** | Monitored | 0.5 bar | ≤ 0.8 bar | Indicator of membrane fouling |
| **Target Concentration** | CPP | 150 mg/mL | 145 – 155 mg/mL | Specification for Drug Substance potency |

#### 3.2.S.2.2.8.2.4 Detailed Operating Protocol
The following protocol describes the automated sequence controlled by the Google Cloud Life Sciences (GCLS) Manufacturing Execution System (MES).

##### Step 1: System Sanitization and Flushing
1. The UF-SKID-502 is flushed with 100L of WFI (Water for Injection) at a flow rate of 10 L/min to remove storage solution (0.1M NaOH).
2. Conductivity is monitored at the outlet (SEN-CON-04) until < 1.5 µS/cm is achieved.
3. The system is equilibrated with **Buffer G-05** (Formulation Buffer: 20 mM Histidine, 100 mM NaCl, pH 6.0).

##### Step 2: Product Loading (Pre-Concentration)
The viral filtrate (approximately 350L at 8.5 mg/mL) is transferred from the VF Hold Tank (HLD-VF-80) to the Feed Tank (HLD-ST-992). 
*   **Initial Volume (Vi):** 350.5 L
*   **Initial Mass (Mi):** ~2.98 kg

##### Step 3: Ultrafiltration (UF) - Concentration Phase
1. The recirculation pump (PMP-ROT-77) is ramped to the target crossflow of 350 LMH.
2. The permeate valve is opened, and the TMP is maintained at 1.2 bar via the automated retentate control valve.
3. Permeate is collected in a separate waste carboy while the retentate is returned to HLD-ST-992.
4. **Intermediate Checkpoint:** Once the volume reaches 50L (approx. 60 mg/mL), the system enters "Slow-Down Mode" to prevent over-concentration and air entrainment.

##### Step 4: Final Target Concentration and Flush-out
1. The system continues concentration until the target weight (calculated by the MES based on real-time UV-Vis A280 monitoring) is reached.
2. The pump is stopped. The retentate is drained into the DS collection vessel.
3. A "System Blow-down" using pressurized N2 (filtered) is performed to recover residual product.
4. A buffer flush of 2.0L (Buffer G-05) is passed through the system to ensure maximum yield recovery (Target Recovery > 98%).

#### 3.2.S.2.2.8.2.5 Representative Manufacturing Data (Batches GLUC-2025-001 to 003)
The following data represents the performance of the Ultrafiltration 2 stage during the Phase III clinical manufacturing campaign.

**Table 8.2-3: Batch Summary Data for Final Concentration**

| Batch Number | Date of Manufacture | Feed Mass (g) | Final Volume (L) | Final Conc. (mg/mL) | Yield (%) | Aggregates (SEC-HPLC) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 2985.2 | 19.82 | 150.2 | 99.7% | 0.12% |
| **GLUC-2025-002** | 19-JAN-2025 | 3012.4 | 20.15 | 149.1 | 99.4% | 0.15% |
| **GLUC-2025-003** | 26-JAN-2025 | 2998.7 | 19.95 | 150.6 | 99.8% | 0.11% |
| **Mean** | -- | **2998.8** | **19.97** | **150.0** | **99.6%** | **0.13%** |

#### 3.2.S.2.2.8.2.6 Calculations and Statistical Control

**Formula 1: Transmembrane Pressure (TMP)**
$$TMP = \frac{(P_{feed} + P_{retentate})}{2} - P_{permeate}$$
*Where $P_{permeate}$ is usually atmospheric (0 bar) in this open-loop configuration.*

**Formula 2: Concentration Factor (CF)**
$$CF = \frac{V_{initial}}{V_{final}}$$
For Glucogen-XR, the average CF is approximately **17.5x**.

**Formula 3: Flux (J)**
$$J = \frac{V_{permeate}}{Area \times time}$$
Flux is monitored to ensure membrane integrity and to detect potential fouling (bioburden or protein precipitation). The target Flux is **45 ± 5 LMH**.

#### 3.2.S.2.2.8.2.7 Deviations and Corrective Actions
During the manufacture of Batch **GLUC-2025-004** (not shown in Table 8.2-3), a transient pressure spike (1.9 bar) occurred due to a valve synchronization error in the DeltaV software. 
*   **Impact Assessment:** SEC-HPLC analysis confirmed no increase in HMWP (High Molecular Weight Species).
*   **Action:** Software logic was updated (v2.1.04) to include a "Soft-Start" ramp on the retentate valve to prevent pressure surges.

#### 3.2.S.2.2.8.2.8 Regulatory Compliance References
1. **ICH Q11:** Development and Manufacture of Drug Substances.
2. **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for Glucapeptides).
3. **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
4. **Google Quality Standard GQS-DS-441:** Control of Ultrafiltration Operations for Biologics.

---
*End of Subsection 3.2.S.2.2.8.2*
*Confidential - Property of Google Health Sciences*

---

## Buffer Exchange to Final Formulation Buffer

### **MODULE 3: QUALITY**
#### **3.2.S DRUG SUBSTANCE (GLUCOGEN-XR)**
#### **3.2.S.2 MANUFACTURE**
#### **3.2.S.2.2 Description of Manufacturing Process and Process Controls**

---

### **Section 3.2.S.2.2.8.4: Buffer Exchange to Final Formulation Buffer (UF/DF-2)**

#### **1.0 OVERVIEW AND PROCESS OBJECTIVES**
The penultimate step in the downstream purification of Glucogen-XR (glucapeptide extended-release) is the Ultrafiltration and Diafiltration-2 (UF/DF-2) stage. This unit operation is critical for the transition of the purified glucapeptide intermediate from the Eluate-3 (anion exchange chromatography pool) into the final formulation matrix.

The primary objectives of this unit operation are:
1.  **Concentration:** To increase the protein concentration of the Glucogen-XR intermediate to the target therapeutic range (150 mg/mL ± 10 mg/mL) to facilitate low-volume subcutaneous administration.
2.  **Diafiltration (Buffer Exchange):** To achieve a complete buffer exchange (≥ 10 diavolumes) into the Final Formulation Buffer (FFB), ensuring the removal of process-related reagents, conductivity reduction, and pH stabilization.
3.  **Excipient Stabilization:** To ensure the glucapeptide is environment-stable in the presence of the proprietary extended-release polymer matrix components.
4.  **Bioburden and Endotoxin Control:** Maintaining a closed system to ensure the Drug Substance meets the stringent microbiological requirements for parenteral biologics.

#### **2.0 EQUIPMENT AND MATERIALS SPECIFICATIONS**

The UF/DF-2 process utilizes a fully automated, single-use Tangential Flow Filtration (TFF) system (GHS-TFF-04) integrated with the Google Cloud Life Sciences (GCLS) Manufacturing Execution System (MES).

**Table 1: Critical Equipment and Component Specifications**
| Component ID | Description | Manufacturer / Model | Specifications/Material of Construction (MOC) |
| :--- | :--- | :--- | :--- |
| **GHS-TFF-04** | TFF Skid | MilliporeSigma / Pellicon | Automated 316L SS/Silicone/PES |
| **MEM-2025-UF2** | TFF Membrane | Pall Corporation / Centramate | 10 kDa Polyethersulfone (PES), Omega |
| **PMP-102** | Feed Pump | Quattroflow | Quaternary Diaphragm (Low Shear) |
| **SEN-PRS-01** | Pressure Sensors | PendoTECH | Single-use, Piezo-resistive |
| **V-RET-500** | Retentate Vessel | GHS Custom / 3000 Innovation Dr | 500L 316L Stainless Steel (Jacketed) |
| **SC-001** | Scalp Filter | Sartorius / Sartopore 2 | 0.45/0.22 μm PES Sterile Filter |

**Table 2: UF/DF-2 Consumables and Batch-Specific Parameters**
| Item | Specification | Reference Standard |
| :--- | :--- | :--- |
| Membrane Surface Area | 5.0 m² per 100L batch | SOP-DS-4492 |
| Screen Type | V-Screen (High Turbulence) | N/A |
| Target Feed Flow Rate | 300 - 450 LMH | Process Characterization Report (PCR-GLUC-04) |
| Transmembrane Pressure (TMP) | 12 - 18 psi | DS-CS-09 |

#### **3.0 BUFFER COMPOSITION AND PREPARATION**

The Final Formulation Buffer (FFB) is designed to maintain the conformational stability of the glucapeptide while preventing aggregation at high concentrations.

**Table 3: Final Formulation Buffer (FFB) Composition (Lot: FFB-2025-098)**
| Component | Function | Concentration | Grade |
| :--- | :--- | :--- | :--- |
| L-Histidine | Buffering Agent | 20 mM | USP/EP |
| Sucrose | Cryoprotectant/Stabilizer | 240 mM | USP/NF |
| Polysorbate 20 | Surfactant | 0.05% (w/v) | Multi-Compendial |
| Methionine | Antioxidant | 10 mM | USP |
| WFI | Solvent | Q.S. | USP/EP |

**pH Specification:** 6.2 ± 0.1 at 25.0°C
**Conductivity Specification:** 1.8 - 2.4 mS/cm

#### **4.0 DETAILED PROCEDURAL STEPS (SOP-GLUC-UFDF2-V4)**

The process is divided into five distinct phases: Sanitization, Equilibration, Concentration-1, Diafiltration, and Final Concentration/Recovery.

##### **4.1 System Preparation and Integrity Testing**
1.  **Sanitization:** The TFF system is flushed with 0.5N NaOH for 60 minutes at 200 LMH to ensure depyrogenation.
2.  **Flushing:** The system is flushed with WFI until the pH of the effluent is neutral (pH 6.5–7.5) and conductivity is < 1.0 μS/cm.
3.  **Integrity Test:** A Forward Flow Air Integrity Test is performed on the membranes. 
    *   *Acceptance Limit:* ≤ 50 mL/min at 30 psi.
    *   *Batch GLUC-2025-001 Result:* 14.2 mL/min (Pass).
4.  **Normalized Water Permeability (NWP):** NWP is measured to establish the baseline flux.
    *   *Formula:* $NWP = \frac{Flux (LMH)}{TMP (bar)} \times \eta_{temp}$
    *   *Requirement:* Within ±20% of the historical mean (245 LMH/bar).

##### **4.2 Equilibration**
The system is equilibrated with 20 L/m² of FFB. The equilibration is considered complete when the retentate and permeate pH and conductivity match the FFB specifications.

##### **4.3 Concentration Phase 1 (C1)**
The Eluate-3 pool (approximate concentration 4.5 mg/mL) is transferred into the retentate vessel. The pump is started at a ramped speed to achieve a Cross Flow Velocity (CFV) of 4 L/min/m².
*   **Target:** Concentrate the protein to 40 mg/mL.
*   **Monitoring:** Ultraviolet (UV) sensors at A280nm monitor the concentration in real-time.

##### **4.4 Diafiltration Phase (DF)**
Continuous diafiltration is performed. FFB is added to the retentate vessel at the same rate as the permeate flux to maintain a constant volume.
*   **Diavolumes (DV):** 10.0 DV.
*   **Mathematical Verification of Impurity Removal:**
    $C_{n} = C_{0} \times e^{-DV \times (1-S)}$
    Where $C_n$ is the final concentration of impurities (e.g., Tris, NaCl from previous step), $C_0$ is initial concentration, and $S$ is the sieving coefficient (assumed 0 for protein, 1 for salts).
    *For GLUC-2025-001, 10 DV achieves a 99.995% exchange efficiency.*

##### **4.5 Final Concentration (C2) and Over-Concentration**
After 10 DV, the volume is reduced to reach a target "over-concentration" of 170 mg/mL. This accounts for the subsequent dilution during the formulation adjustment phase.

#### **5.0 IN-PROCESS CONTROLS (IPC) AND ANALYTICAL DATA**

The following table summarizes the IPC results for three consecutive validation batches.

**Table 4: UF/DF-2 In-Process Control Data (Validation Batches)**
| Parameter | Method | Limit | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Post-DF pH** | Potentiometric | 6.1 – 6.3 | 6.22 | 6.21 | 6.20 |
| **Post-DF Cond.** | Conductivity | 1.8 – 2.4 mS/cm | 2.11 mS/cm | 2.09 mS/cm | 2.15 mS/cm |
| **Protein Conc.** | UV A280 | 140 – 160 mg/mL | 152.4 mg/mL | 150.8 mg/mL | 151.2 mg/mL |
| **Product Yield** | Mass Balance | ≥ 95.0% | 98.2% | 97.5% | 97.9% |
| **HCP Removal** | ELISA | < 10 ppm | 2.4 ppm | 2.1 ppm | 2.6 ppm |
| **Aggregates** | SE-HPLC | ≤ 1.0% | 0.32% | 0.29% | 0.35% |

#### **6.0 PROCESS CHARACTERIZATION AND PARAMETER SENSITIVITY**

Extensive DoE (Design of Experiments) was conducted to evaluate the impact of shear stress and TMP on the stability of the glucapeptide.

**6.1 Shear Stress Sensitivity**
The glucapeptide contains a specific α-helical motif susceptible to surface-induced denaturation. Tests at CFV > 6 L/min/m² showed a 0.5% increase in Sub-visible Particles (SvP). Consequently, the CFV is strictly controlled at 4.0 ± 0.5 L/min/m².

**6.2 Flux vs. TMP Relationship**
A flux excursion study was performed (Lot: GLUC-DEV-2024-05).
*   **Critical Flux Boundary:** 65 LMH.
*   **Operating Flux:** 45 LMH.
*   **Safety Factor:** 1.44x.

#### **7.0 PRODUCT RECOVERY AND POOLING**
Upon reaching the target concentration, the "System Flush" protocol is initiated.
1.  **Blow-down:** Nitrogen gas (0.5 psi) is used to push the residual retentate from the piping into the vessel.
2.  **Buffer Flush:** 2.5 Liters of FFB are circulated through the system for 10 minutes and pooled with the main retentate. This ensures maximum recovery of the high-value glucapeptide.

#### **8.0 REGULATORY COMPLIANCE AND GUIDELINES**
This process step complies with the following:
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (applied to peptides).
*   **FDA Guidance for Industry:** Liposome Drug Products (relevant for extended-release properties of Glucogen-XR).

#### **9.0 DEVIATION SUMMARY AND CAPA**
For Batch **GLUC-2025-004** (Pre-clinical), a minor deviation (DEV-UFDF-09) was recorded due to a pressure sensor drift (+2.1 psi). The investigation confirmed that the TMP remained within the validated design space. The sensor was recalibrated per PM-0092. No impact on product quality (purity 99.4% via RP-HPLC) was observed.

---
*End of Subsection 3.2.S.2.2.8.4*

---

## Membrane Qualification

### 3.2.S.2.2.4.9 Membrane Qualification for Ultrafiltration and Diafiltration (UF/DF)

The qualification of membrane cassettes used in the downstream processing of Glucogen-XR (glucapeptide extended-release) is a critical component of the manufacturing control strategy. This section details the rigorous qualification protocols, performance attributes, and lifecycle management for the polyethersulfone (PES) membranes utilized in the concentration and buffer exchange steps.

---

#### 3.2.S.2.2.4.9.1 Overview and Scope
The UF/DF process for Glucogen-XR utilizes high-performance Tangential Flow Filtration (TFF) modules. The primary objective of membrane qualification is to ensure that the 30 kDa Molecular Weight Cut-Off (MWCO) membranes consistently meet predefined specifications for hydraulic permeability, integrity, and cleanliness prior to and during use in the production of clinical and commercial batches.

**Key Equipment and Materials:**
*   **Membrane Material:** Modified Polyethersulfone (PES) with low non-specific binding characteristics.
*   **Nominal MWCO:** 30 kDa.
*   **System ID:** TFF-SYS-402 (located at Google Health Sciences, South San Francisco Facility).
*   **Holder ID:** TFF-HLD-09.
*   **Active Surface Area:** 2.5 m² per cassette (typically configured in parallel arrays of 10 m² to 50 m² depending on scale).

---

#### 3.2.S.2.2.4.9.2 Regulatory and Compendial Compliance
All qualification activities are performed in accordance with the following regulatory frameworks and industry standards:
1.  **FDA Guidance for Industry:** *Process Validation: General Principles and Practices (2011).*
2.  **ICH Q7:** *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients.*
3.  **ICH Q11:** *Development and Manufacture of Drug Substances.*
4.  **USP <1059>:** *Excipients for Parenteral Use (referenced for material leachables).*
5.  **USP <85>:** *Bacterial Endotoxins Test.*
6.  **Technical Report No. 15 (PDA):** *Validation of Tangential Flow Filtration in Bioprocessing.*

---

#### 3.2.S.2.2.4.9.3 Protocol for New Membrane Installation (Initial Qualification)
Upon receipt of a new batch of membranes (e.g., Supplier Lot #PES-2025-X1), the following qualification sequence is executed.

##### 3.2.S.2.2.4.9.3.1 Installation and Pre-flush
Membranes are installed into the TFF-HLD-09 holder using EPDM gaskets. Torque is applied to 550 +/- 50 in-lbs to ensure a leak-free seal.
*   **Flushing Media:** USP Water for Injection (WFI).
*   **Volume:** 100 L/m².
*   **Flow Rate:** 250 LMH (Liters per Square Meter per Hour).
*   **Objective:** Removal of storage agents (0.1M NaOH or Glycerin).

##### 3.2.S.2.2.4.9.3.2 Normalized Water Permeability (NWP) Determination
NWP is the benchmark for membrane performance. It is calculated by measuring the flux of WFI at various Transmembrane Pressures (TMP) and correcting for temperature (20°C).

**Formula for TMP:**
$$TMP = \frac{(P_{feed} + P_{retentate})}{2} - P_{permeate}$$

**Formula for NWP:**
$$NWP = \frac{Flux (LMH)}{TMP (bar)} \times \mu_T / \mu_{20}$$
*Where $\mu_T$ is the viscosity of water at measured temperature $T$.*

**Table 1: Initial NWP Qualification Data for Batch GLUC-2025-001**
| Parameter | Test 1 | Test 2 | Test 3 | Mean Value | Specification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Feed Pressure (psig)** | 25.4 | 25.2 | 25.5 | 25.37 | N/A |
| **Retentate Pressure (psig)** | 5.2 | 5.1 | 5.3 | 5.20 | N/A |
| **Permeate Pressure (psig)** | 0.0 | 0.0 | 0.0 | 0.00 | N/A |
| **TMP (psig)** | 15.3 | 15.15 | 15.4 | 15.28 | 15.0 +/- 2.0 |
| **Measured Flux (LMH)** | 185.5 | 184.2 | 186.1 | 185.27 | N/A |
| **Temp (°C)** | 22.4 | 22.5 | 22.3 | 22.40 | 18-25°C |
| **Temp Correction Factor** | 0.941 | 0.939 | 0.944 | 0.941 | N/A |
| **NWP (LMH/psi @ 20°C)** | 11.43 | 11.42 | 11.39 | **11.41** | **9.5 - 13.5** |

---

#### 3.2.S.2.2.4.9.4 Integrity Testing (Air Diffusion Test)
To ensure no bypass or mechanical defects (e.g., pinholes) exist in the membrane or the seals, an Forward Flow / Air Diffusion test is performed.

**Procedure:**
1.  Wet the membrane thoroughly with WFI.
2.  Drain the retentate side and apply regulated compressed air to the feed/retentate side.
3.  Increase pressure to 15 psig (for 30 kDa PES).
4.  Measure air flow through the wetted pores on the permeate side using a mass flow meter.

**Table 2: Integrity Test Results (Batch Series GLUC-2025-XXX)**
| Membrane Lot # | Batch ID | Air Diffusion (cc/min) | Limit | Result |
| :--- | :--- | :--- | :--- | :--- |
| PES-2025-A101 | GLUC-2025-001 | 12.4 | $\leq$ 50.0 | Pass |
| PES-2025-A101 | GLUC-2025-002 | 13.1 | $\leq$ 50.0 | Pass |
| PES-2025-A101 | GLUC-2025-003 | 14.2 | $\leq$ 50.0 | Pass |

---

#### 3.2.S.2.2.4.9.5 Cleaning Validation and Recovery (Post-Use Qualification)
After the concentration of Glucogen-XR, membranes are subjected to a Clean-In-Place (CIP) protocol to restore flux and ensure the absence of protein carryover.

**CIP Protocol (CIP-004-GHS):**
1.  **Flush:** 50 L/m² WFI to remove bulk product.
2.  **Chemical Clean:** Circulate 0.5M NaOH at 45°C for 60 minutes.
3.  **Cross-flow:** 350 LMH; TMP = 10 psi.
4.  **Rinse:** 100 L/m² WFI until pH of permeate and retentate return to neutral (5.5 - 7.5).
5.  **Post-CIP NWP:** Measure NWP to calculate "Cleanliness Recovery."

**Calculations for Flux Recovery:**
$$Recovery (\%) = \frac{NWP_{Post-CIP}}{NWP_{Initial}} \times 100$$

**Table 3: Membrane Cleaning and Flux Recovery Tracking**
| Run Number | Pre-Use NWP | Post-Use/Post-CIP NWP | % Recovery | Residual Protein (Swab/Rinse) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 11.41 | 11.20 | 98.2% | < LOD (0.5 µg/mL) |
| GLUC-2025-002 | 11.20 | 11.05 | 98.6% | < LOD |
| GLUC-2025-003 | 11.05 | 10.88 | 98.5% | < LOD |

---

#### 3.2.S.2.2.4.9.6 Membrane Lifetime Study (Concurrent Validation)
Membranes for Glucogen-XR are qualified for a maximum of 15 cycles (uses) or 12 months from the first use, whichever comes first. This limit is based on data indicating structural degradation of the PES matrix under repeated exposure to 0.5M NaOH.

**Parameters Monitored for Lifetime Qualification:**
*   **Step Yield:** Glucogen-XR recovery must remain $\geq$ 95%.
*   **Impurity Profile:** No increase in High Molecular Weight (HMW) species or Host Cell Proteins (HCP) due to membrane fouling.
*   **Bioburden:** < 10 CFU/100 mL in the final rinse.
*   **Endotoxin:** < 0.25 EU/mL in the final rinse.

**Table 4: Cumulative Membrane Performance (Batch GLUC-2025-001 to 015)**
| Cycle Count | NWP (LMH/psi) | Air Diffusion (cc/min) | Glucogen-XR Yield (%) | Endotoxin (EU/mL) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 11.41 | 12.4 | 98.4 | < 0.05 |
| 5 | 10.75 | 15.8 | 97.9 | < 0.05 |
| 10 | 10.12 | 22.4 | 97.5 | 0.07 |
| 15 (Limit) | 9.65 | 31.0 | 96.2 | 0.11 |

---

#### 3.2.S.2.2.4.9.7 Sanitization and Storage
To prevent microbial growth between runs, membranes are stored in 0.1M NaOH. Qualification of the storage period includes:
1.  **Static Storage Test:** Membranes stored for 30 days are tested for bioburden.
2.  **Flushing Study:** Quantification of the volume of WFI/Buffer required to reduce conductivity and pH to baseline before the next production run.

---

#### 3.2.S.2.2.4.9.8 Leachables and Extractables (L&E) Assessment
As part of the qualification, Google Health Sciences conducted a risk-based L&E study. The 30 kDa PES membranes were subjected to "worst-case" extraction conditions:
*   **Solvents:** 0.5M NaOH, 1M NaCl, and 20% Ethanol.
*   **Temperature:** 40°C.
*   **Duration:** 24 hours.

The extractables were analyzed via GC-MS, LC-MS, and ICP-MS. Total Organic Carbon (TOC) was used as a surrogate for cleaning effectiveness. All detected compounds were well below the Safety Concern Threshold (SCT) of 1.5 µg/day for Glucogen-XR patients.

---

#### 3.2.S.2.2.4.9.9 Summary of Qualification Criteria
| Test | Specification | Frequency |
| :--- | :--- | :--- |
| **Visual Inspection** | No defects, correct part number | Every installation |
| **WFI Flush (TOC)** | $\leq$ 500 ppb | Every use (Pre-use) |
| **WFI Flush (Conductivity)** | $\leq$ 1.3 µS/cm | Every use (Pre-use) |
| **NWP (Initial)** | 9.5 - 13.5 LMH/psi | New membrane only |
| **NWP (Post-CIP)** | $\geq$ 80% of Initial NWP | Every use (Post-use) |
| **Integrity (Diffusion)** | $\leq$ 50 cc/min | Pre-use and Post-use |
| **Endotoxin (Rinse)** | < 0.25 EU/mL | Every use (Pre-use) |

---

**Approval and Authorization:**
*Prepared by:* Senior Regulatory Scientist, Google Health Sciences
*Date:* 14-Oct-2024
*Reviewed by:* Quality Assurance Director, GHS-SSF Facility
*Date:* 16-Oct-2024

---

# Sterile Filtration

## Filter Selection and Validation

### **MODULE 3: QUALITY**
#### **SECTION 3.2.S.2.2: MANUFACTURE - STERILE FILTRATION**
---
**DOCUMENT ID:** GHS-GLUC-XR-M3-DS-2.2-SFV  
**VERSION:** 1.0.4 (FINAL)  
**EFFECTIVE DATE:** 14-OCT-2025  
**MANUFACTURING FACILITY:** Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA 94080  
**DRUG SUBSTANCE:** Glucogen-XR (glucapeptide extended-release)  

---

### **3.2.S.2.2.8 FILTER SELECTION AND VALIDATION (STERILE FILTRATION)**

#### **1.0 INTRODUCTION AND SCOPE**
This subsection details the selection criteria, qualification, and validation of the sterile filtration processes utilized for the Glucogen-XR (glucapeptide extended-release) Drug Substance. The terminal sterilization of Glucogen-XR is not feasible due to the thermolabile nature of the polypeptide structure and the delicate hydration sphere required for extended-release kinetics. Consequently, aseptic processing, centered on redundant 0.22 µm sterile filtration, is employed.

The validation strategy complies with **FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing (2004)**, **ICH Q8(R2)**, and **USP <1229.4> Sterilizing Filtration of Liquids**.

#### **2.0 FILTER SELECTION RATIONALE**

##### **2.1 Membrane Material Compatibility**
Extensive screening was conducted to evaluate the adsorption profile of the Glucogen-XR peptide. Due to the amphiphilic nature of the glucapeptide sequence (specifically the hydrophobic C-terminal tail facilitating the XR mechanism), conventional Polyethersulfone (PES) membranes exhibited 12-18% flux decay due to peptide fouling.

**Table 1: Comparison of Filter Membrane Materials for Glucogen-XR**
| Membrane Material | Surface Modification | Binding Affinity (µg/cm²) | Flux Decay (%) | Extractables Profile | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PES (Standard)** | None | 42.5 | 18.2% | Low | Rejected |
| **PES (Hydrophilic)** | PEG-grafted | 8.4 | 4.1% | Moderate | Candidate |
| **PVDF (Modified)** | **Proprietary Low Protein Binding** | **2.1** | **1.2%** | **Extremely Low** | **Selected** |
| **Cellulose Acetate**| None | 15.6 | 9.8% | High (Leachables) | Rejected |

**Selection:** The **Durapore® (Modified PVDF) 0.22 µm membrane** was selected. This membrane utilizes a surface-modified polyvinylidene fluoride chemistry that minimizes secondary interactions with the Glucogen-XR peptide side chains.

##### **2.2 Configuration and Redundancy**
A redundant filtration strategy (1+1) is implemented.
1.  **Primary Filter (Pre-filtration):** 0.45/0.22 µm gradient PVDF.
2.  **Secondary Filter (Sterilizing):** 0.22 µm absolute-rated PVDF.

#### **3.0 PHYSICOCHEMICAL COMPATIBILITY VALIDATION**

The compatibility of the Glucogen-XR formulated bulk with the filter assembly was evaluated over a 48-hour period (2x the maximum allowable process hold time).

##### **3.1 Extractables and Leachables (E&L) Analysis**
Testing followed **BPOG (BioPhorum Operations Group)** standardized protocols.
*   **Solvents used:** WFI, 0.1M NaOH, 20% Ethanol, and Glucogen-XR Placebo Buffer.
*   **Analysis:** GC-MS, LC-MS, and ICP-MS for metal catalysts.

**Table 2: Summary of Extractable Analysis (Batch: GLUC-2025-V01)**
| Extractable Species | Detection Method | Limit of Quantitation (LOQ) | Observed Level (mg/filter) | Safety Margin (AET) |
| :--- | :--- | :--- | :--- | :--- |
| N-butylsulfonamide | GC-MS | 0.05 µg/mL | <LOQ | >100x |
| Antioxidants (Irganox) | LC-MS | 0.10 µg/mL | 0.12 µg/mL | >500x |
| Silicon Oil | FTIR | 1.0 µg/mL | 1.2 µg/mL | >1000x |

##### **3.2 Bubble Point and Diffusion Rate Correlation**
The relationship between the physical integrity of the filter and the sterilization capability was established using the Glucogen-XR formulation to determine the "Product-Specific Bubble Point."

**Calculated Minimum Bubble Point (Water):** 50 psi  
**Calculated Minimum Bubble Point (Glucogen-XR Bulk):** 46.2 psi (Surface Tension: 62 dynes/cm)

---

#### **4.0 MICROBIAL RETENTION VALIDATION (BACTERIAL CHALLENGE)**

In accordance with **ASTM F838-20**, the ability of the 0.22 µm filter to produce a sterile filtrate was validated using *Brevundimonas diminuta* (ATCC 19146).

##### **4.1 Challenge Conditions**
*   **Challenge Organism Concentration:** $\geq 10^7$ CFU per cm² of effective filtration area (EFA).
*   **Temperature:** 25°C ± 2°C.
*   **Pressure:** Constant differential pressure of 30 psi.
*   **Batch Number:** GLUC-2025-CHAL-01 through 03.

**Table 3: Results of Microbial Challenge Testing**
| Test Batch | Filter Lot # | Total Challenge (CFU) | Effluent Count (CFU) | Log Reduction Value (LRV) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-CHAL-01 | PVDF-99821-A | $4.2 \times 10^{11}$ | 0 | >11.6 |
| GLUC-2025-CHAL-02 | PVDF-99821-B | $4.5 \times 10^{11}$ | 0 | >11.6 |
| GLUC-2025-CHAL-03 | PVDF-99821-C | $4.1 \times 10^{11}$ | 0 | >11.6 |

**Requirement:** All effluent must be sterile (0 CFU).  
**Result:** **PASS**. All three replicates demonstrated total retention of the challenge organism.

---

#### **5.0 PROCESS VALIDATION PARAMETERS (Vmax and Flux)**

To prevent membrane polarization and peptide shear, critical flux parameters were established during the scale-up from pilot to commercial (2000L) scale.

##### **5.1 Sizing Calculations**
The required Filtration Area ($A_{req}$) was calculated using the Vmax method:
$$V_{max} = \frac{V}{t \cdot A}$$
Where:
*   $V$ = Total Batch Volume (2150 L including overfill)
*   $t$ = Target Process Time (120 minutes)
*   $Safety Factor$ = 1.5

**Calculated EFA:** 4.5 m²  
**Implemented EFA:** 6.0 m² (using three 30-inch cartridges in parallel).

##### **5.2 Integrity Testing Protocol (SOP-GHS-FILT-09)**
1.  **Pre-use/Post-sterilization (PUPSIT):** Filters are wetted with WFI and tested for integrity via Forward Flow/Diffusion testing prior to contact with the product.
    *   *Limit:* $\leq 13.5$ mL/min at 40 psi.
2.  **Post-use Integrity Test:** Filters are rinsed with WFI to remove residual peptide and re-tested.
    *   *Limit:* $\leq 13.5$ mL/min at 40 psi.

---

#### **6.0 ADSORPTION AND POTENCY LOSS EVALUATION**

Because Glucogen-XR is a peptide therapeutic, the risk of potency loss due to adsorption to the filter surface is critical.

**Table 4: Potency Recovery Post-Filtration (Lot GLUC-2025-004)**
| Sampling Point | Peptide Concentration (mg/mL) | Recovery (%) | Aggregation (SEC-HPLC %) |
| :--- | :--- | :--- | :--- |
| Pre-Filtration | 5.02 | 100% | 0.12% |
| First 5 Liters | 4.91 | 97.8% | 0.14% |
| Steady State (1000L)| 5.01 | 99.8% | 0.12% |
| Composite Bulk | 5.00 | 99.6% | 0.13% |

**Conclusion:** A "flush volume" of 20 Liters of formulated bulk is discarded during commercial manufacture to saturate potential binding sites, ensuring 100% potency in the final sterile bulk.

---

#### **7.0 REGULATORY COMPLIANCE AND REFERENCES**

This validation study was conducted in accordance with:
1.  **ICH Q9:** Quality Risk Management.
2.  **PDA Technical Report No. 26:** Sterilizing Filtration of Liquids.
3.  **21 CFR 211.113:** Control of microbiological contamination.
4.  **ISO 13408-2:** Aseptic processing of health care products — Part 2: Filtration.

---

**[END OF SECTION 3.2.S.2.2.8]**  
*Approved by: Dr. Elena Rodriguez, Head of Bioprocess Validation, Google Health Sciences.*

---

## Filtration Conditions

### **MODULE 3: QUALITY**
### **3.2.S DRUG SUBSTANCE (GLUCOGEN-XR)**
### **3.2.S.2 MANUFACTURE**
### **3.2.S.2.4 PROCESS CONTROLS AND INTERMEDIATE CONTROLS**

---

# **SECTION: STERILE FILTRATION – DETAILED FILTRATION CONDITIONS**

## **1.0 Introduction and Scope**
This section delineates the comprehensive technical parameters, validation matrices, and operational protocols for the sterile filtration of Glucogen-XR (glucapeptide extended-release) Drug Substance. As a high-concentration GLP-1 receptor agonist peptide-fusion protein produced via the GHS-CHO-001 cell line, Glucogen-XR exhibits non-Newtonian fluid characteristics at concentrations exceeding 150 mg/mL. Consequently, the filtration conditions described herein are engineered to maintain sterility (per 21 CFR 211.113) while mitigating shear-induced aggregation and ensuring maximal product recovery.

The filtration process is executed at the Google Health Sciences (GHS) Manufacturing Suite 4, located at 3000 Innovation Drive, South San Francisco. All procedures comply with ICH Q7, Q11, and the FDA Guidance for Industry: *Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice.*

---

## **2.0 Filtration System Configuration**

### **2.1 Membrane Specifications**
The sterile filtration of Glucogen-XR utilizes a redundant (serial) 0.22 μm filtration assembly. The primary and secondary filters are identical to ensure process consistency and to provide a validated safety margin for microbial retention.

**Table 1: Filter Membrane Specifications and Material of Construction (MOC)**

| Parameter | Specification | Manufacturer/Model |
| :--- | :--- | :--- |
| **Filter Type** | Hydrophilic Polyethersulfone (PES) | BioPharma Millipore Durapore / Sartorius Sartopore 2 |
| **Pore Size Rating** | 0.22 μm (Sterilizing Grade) | Dual-layer (0.45 μm / 0.22 μm) |
| **Effective Filtration Area (EFA)** | 1.1 m² per 10-inch cartridge | GHS-FIL-STD-10 |
| **Support Media** | Polypropylene | Medical Grade USP Class VI |
| **O-Rings** | Silicone (Platinum Cured) | USP <88> Biological Reactivity |
| **Housing Material** | 316L Stainless Steel | Ra < 0.4 μm, Electropolished |
| **Adsorption Profile** | Low Protein Binding | < 5.0 μg/cm² (BSA equivalent) |

### **2.2 Redundant Filtration Architecture**
The system is configured in a serial redundant arrangement. 
1.  **Filter A (Bioburden Reduction Filter):** Acts as the primary microbial barrier.
2.  **Filter B (Sterilizing Filter):** Acts as the final sterile barrier prior to the aseptic filling or bulk storage of the Drug Substance (DS).

---

## **3.0 Operational Filtration Conditions**

### **3.1 Critical Process Parameters (CPPs)**
The following parameters are controlled to ensure the Glucogen-XR peptide remains monomeric and stable during the high-pressure transit across the PES membrane.

**Table 2: Validated Operational Ranges for Glucogen-XR Filtration**

| Parameter | Unit | Lower Limit | Target | Upper Limit | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Inlet Pressure** | bar (psi) | 0.5 (7.2) | 1.5 (21.7) | 2.5 (36.2) | Prevent membrane rupture / aggregation |
| **Differential Pressure (ΔP)** | bar (psi) | N/A | < 1.0 (14.5) | 1.8 (26.1) | Indicator of membrane fouling |
| **Flux Rate** | L/m²/hr (LMH) | 50 | 120 | 250 | Shear stress management |
| **Product Temperature** | °C | 2.0 | 5.0 | 8.0 | Stability of GLP-1 peptide |
| **Hold Time (Pre-Filtration)**| Hours | 0 | < 12 | 24 | Microbial control (Bioburden) |
| **Agitation Speed (Feed Tank)**| RPM | 20 | 45 | 60 | Homogeneity without foaming |

### **3.2 Volumetric Throughput and Sizing**
The Vmax (Maximum Volumetric Throughput) was determined during the scale-up studies (Report GHS-RPT-2024-GLUC-08) using GLUC-2025-001X pilot lots.

**Calculation of Required Filter Area:**
$$A_{req} = \frac{V_{batch}}{V_{max} \times SF}$$
Where:
*   $V_{batch}$ = 250 L (Standard Commercial Scale)
*   $V_{max}$ = 800 L/m² (Determined for Glucogen-XR at 200 mg/mL)
*   $SF$ = Safety Factor of 1.5
*   $A_{req} = \frac{250}{800 \times 1.5} \approx 0.46 \text{ m}^2$

To ensure process robustness, GHS employs a **1.1 m² filter**, providing a >100% safety margin over the calculated requirement.

---

## **4.0 Step-by-Step Filtration Protocol**

### **4.1 System Preparation and Sterilization**
1.  **Assembly:** Install Filter A and Filter B into the 316L housings.
2.  **Sterilization-in-Place (SIP):** Subject the entire downstream assembly, including the receiving vessel (V-502), to a validated SIP cycle ($121.1^\circ\text{C}$ for 30 minutes).
3.  **Cooling:** Flush the system with sterile WFI (Water for Injection) at $5^\circ\text{C}$ until the outlet temperature reaches $< 10^\circ\text{C}$.

### **4.2 Integrity Testing (Pre-Use Pre-Sterilization - PUPSIT)**
In accordance with Annex 1 requirements, Filter B is subjected to a PUPSIT procedure using the Bubble Point method.
*   **Wetting Agent:** Sterile WFI or Product-specific Buffer (Phosphate/Citrate, pH 6.8).
*   **Minimum Bubble Point:** $\geq 3.4$ bar (49.3 psi).
*   **Result Recording:** Automated via the GHS-Cloud-LIMS interface linked to the Sartocheck tester.

### **4.3 Product Filtration Execution**
1.  **Conditioning:** Prime the system with 20 L of Formulation Buffer (GHS-BUF-772) to saturate any remaining binding sites on the membrane.
2.  **Product Transfer:** Initiate the transfer of Glucogen-XR from the DS Holding Tank (T-401) using a low-shear peristaltic pump (Watson-Marlow 630 series).
3.  **Pressure Monitoring:** Continuous monitoring of $P_{in}$ and $P_{out}$ via the Siemens PCS7 control system.
4.  **End of Run:** When the feed tank reaches the "Low-Low" level sensor, initiate a Nitrogen (N₂) blow-down at 0.5 bar to recover the dead-volume of product within the filter housing.

---

## **5.0 Representative Batch Data (Historical Performance)**

The following table summarizes the filtration data from the three most recent Process Performance Qualification (PPQ) batches of Glucogen-XR.

**Table 3: Filtration Performance Data for Batches GLUC-2025-001 through GLUC-2025-003**

| Parameter | Unit | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **Starting Volume** | L | 248.5 | 251.2 | 249.8 |
| **Protein Concentration** | mg/mL | 201.4 | 199.8 | 200.5 |
| **Total Filtration Time** | min | 112 | 118 | 115 |
| **Average Flux** | LMH | 121 | 116 | 118 |
| **Initial ΔP** | bar | 0.22 | 0.24 | 0.21 |
| **Final ΔP** | bar | 0.45 | 0.48 | 0.44 |
| **Post-Use Bubble Point** | bar | 3.8 (Pass) | 3.7 (Pass) | 3.8 (Pass) |
| **Product Yield** | % | 99.2% | 98.9% | 99.1% |
| **Aggregates (SEC-HPLC)** | % | 0.4% | 0.5% | 0.4% |

---

## **6.0 Filtration Challenges and Deviations Management**

### **6.1 Handling of High-Viscosity Intermediates**
At the target concentration of 200 mg/mL, Glucogen-XR reaches a dynamic viscosity of approximately 12.5 cP. To prevent localized heating and shear degradation:
*   The pump speed is limited to a maximum linear velocity of $1.2 \text{ m/s}$ within the tubing.
*   In the event of a pressure spike ($> 2.0$ bar), the system is programmed to automatically ramp down the pump speed by 25% to allow for membrane stabilization.

### **6.2 Filter Clogging (Fouling) Protocol**
Should the $\Delta P$ exceed 1.8 bar before the batch is complete:
1.  The filtration is paused.
2.  The redundant "Backup Filter C" (if pre-validated) is brought online via the automated manifold.
3.  A deviation report is initiated per **GHS-SOP-QA-0045** to investigate possible protein aggregation or sub-visible particulate formation.

---

## **7.0 Quality Control and Validation Standards**

### **7.1 Microbial Retention Validation**
The 0.22 μm filters have been validated to provide a Sterility Assurance Level (SAL) of $10^{-6}$ using a challenge of *Brevundimonas diminuta* (ATCC 19146) at a concentration of $\geq 10^7$ CFU per cm² of effective filtration area, in accordance with **ASTM F838-20**.

### **7.2 Extractables and Leachables (E&L)**
Extensive E&L studies (Report GHS-RPT-DS-2024-012) were conducted using a model solvent approach (Ethanol/Water, pH 3.0 and pH 10.0). The levels of N-Nitrosodimethylamine (NDMA) and other potential leachables from the PES membrane were found to be below the Analytical Evaluation Threshold (AET) of $0.15 \text{ μg/day}$ based on the maximum daily dose of Glucogen-XR.

### **7.3 Regulatory References**
*   **ICH Q5A:** Quality of Biotechnological Products: Viral Safety Evaluation.
*   **USP <788>:** Particulate Matter in Injections.
*   **USP <71>:** Sterility Tests.
*   **FDA Guidance (2004):** Sterile Drug Products Produced by Aseptic Processing.

---

## **8.0 Conclusion**
The filtration conditions for Glucogen-XR have been optimized to balance the requirements of sterile manufacturing with the physical constraints of a high-concentration peptide biologic. Through the use of redundant PES membranes, controlled flux rates, and low-temperature processing, Google Health Sciences ensures the delivery of a sterile, monomeric, and potent drug substance for the treatment of Type 2 Diabetes Mellitus.

---
**Document End**
**Approver:** *Director of Regulatory Affairs, Google Health Sciences*
**Date:** *24-Oct-2024*
**Ref ID:** *GHS-DS-MFG-SEC32S24-V2*

---

## Integrity Testing

### 3.2.S.2.4 Process Controls and Intermediate Testing
#### 3.2.S.2.4.8 Sterile Filtration Validation and Integrity Testing
**Document ID:** GHS-GLUC-XR-M3-DS-FILT-001
**Revision:** 4.0
**Product:** Glucogen-XR (glucapeptide extended-release)
**Facility:** 3000 Innovation Drive, South San Francisco, CA 94080, USA

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection details the critical quality control procedures for the integrity testing of sterile filtration assemblies used in the manufacture of Glucogen-XR Drug Substance (DS). Sterile filtration is defined as a Critical Process Parameter (CPP) within the Google Health Sciences (GHS) Quality Management System (QMS). All procedures described herein are conducted in strict accordance with FDA 21 CFR Part 211, ICH Q7, and the "Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice."

The primary sterile filtration process for Glucogen-XR utilizes a redundant 0.22 μm polyethersulfone (PES) membrane system. Integrity testing is performed both pre-use/post-sterilization (PUPSIT) and post-use to ensure the microbial retention capabilities of the filters are maintained throughout the duration of the batch processing.

---

#### 2.0 REGULATORY COMPLIANCE AND STANDARDS
The integrity testing protocols for Glucogen-XR align with the following international standards:
1.  **USP <1229.4>:** Sterilizing Filtration of Liquids.
2.  **PDA Technical Report No. 26:** Sterilizing Filtration of Liquids.
3.  **EMA/CHMP/CVMP/QWP/850374/2015:** Guideline on the sterilisation of the medicinal product, active substance, excipient and primary container.
4.  **ISO 13408-2:** Aseptic processing of health care products — Part 2: Sterilizing filtration.
5.  **ASTM F838-20:** Standard Test Method for Determining Bacterial Retention of Membrane Filters Utilized for Liquid Filtration.

---

#### 3.0 EQUIPMENT AND MATERIALS
Integrity testing is performed using the **GHS-Automated-Integ-05** (Sartocheck® 5 Plus or equivalent), an automated pressure-decay and bubble point testing unit integrated with the Google Cloud Life Sciences Manufacturing Execution System (MES).

| Equipment ID | Manufacturer | Model | Serial Number | Last Calibration | Due Date |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GHS-IT-001 | Sartorius | Sartocheck 5 | SC5-2023-9981 | 12-JAN-2025 | 12-JAN-2026 |
| GHS-IT-002 | Sartorius | Sartocheck 5 | SC5-2023-9982 | 15-JAN-2025 | 15-JAN-2026 |
| GHS-NITRO-04 | Airgas | High Purity N2 | N/A | Gas Cert. Attached | N/A |

**Filter Specification:**
*   **Primary Filter (F1):** Sartopore® 2 XLG, 0.2 μm PES, 0.6 m²
*   **Redundant Filter (F2):** Sartopore® 2 XLG, 0.2 μm PES, 0.6 m²
*   **Housing:** Stainless Steel 316L, Electropolished < 0.4 μm Ra.

---

#### 4.0 INTEGRITY TESTING METHODS AND CALCULATIONS

The Glucogen-XR process utilizes two distinct integrity tests: the **Bubble Point Test** and the **Forward Flow (Diffusion) Test**.

##### 4.1 Forward Flow (Diffusion) Test
The Forward Flow test measures the rate of gas diffusion through the liquid-saturated pores of the membrane under a constant pressure, typically set at 80% of the expected bubble point.

**Calculation Formula:**
$$Q = \frac{D \cdot \Delta P \cdot A \cdot \epsilon}{L}$$
Where:
*   $Q$ = Diffusion rate (mL/min)
*   $D$ = Diffusivity coefficient of the gas in the liquid
*   $\Delta P$ = Differential pressure
*   $A$ = Area of the membrane
*   $\epsilon$ = Porosity of the membrane
*   $L$ = Thickness of the membrane

**Acceptance Criteria:**
For a Sartopore 2 XLG 0.6 m² filter wetted with Water for Injection (WFI), the diffusion rate must be $\leq$ 15.0 mL/min at a test pressure of 2500 mbar (36.2 psi).

##### 4.2 Bubble Point Test
The Bubble Point test identifies the pressure at which the gas overcomes the surface tension of the liquid within the largest pores, resulting in bulk flow.

**Calculation Formula (Young-Laplace Equation):**
$$P = \frac{4\gamma \cos \theta}{d}$$
Where:
*   $P$ = Bubble point pressure
*   $\gamma$ = Surface tension of the liquid
*   $\theta$ = Contact angle
*   $d$ = Pore diameter

**Acceptance Criteria:**
Minimum Bubble Point (WFI) $\geq$ 3200 mbar (46.4 psi).
Minimum Bubble Point (Product-wetted) $\geq$ 3350 mbar (48.6 psi) (Correction factor applied for Glucapeptide viscosity).

---

#### 5.0 STEP-BY-STEP OPERATIONAL PROTOCOL (SOP-GHS-PRO-088)

##### 5.1 Pre-Use Post-Sterilization Integrity Testing (PUPSIT)
This procedure is performed after Steam-in-Place (SIP) but before the introduction of the Glucogen-XR bulk drug substance.

1.  **System Cooling:** Ensure the filter housing temperature has returned to ambient (20°C - 25°C) following SIP.
2.  **Wetting:** Flush the filter with $\geq$ 20 liters of sterile WFI at a flow rate of 5 L/min using the transfer pump P-204.
3.  **Connectivity:** Connect the GHS-Automated-Integ-05 to the upstream vent port of the filter housing.
4.  **Test Selection:** Select "Glucogen-XR_PUPSIT_WFI" on the touch interface.
5.  **Diffusion Test:** Pressurize the upstream side to 2500 mbar. Stabilize for 180 seconds. Measure diffusion over 60 seconds.
6.  **Bubble Point Test:** Gradually increase pressure from 2800 mbar to 4000 mbar at a rate of 50 mbar/sec.
7.  **Documentation:** The MES automatically captures the result. If "PASS," proceed to filtration. If "FAIL," perform one re-wetting cycle; a second failure requires a mandatory Deviation Report (DR) and filter replacement.

##### 5.2 Post-Use Integrity Testing
Performed immediately after the completion of the batch filtration to confirm the filter remained intact during the process.

1.  **Product Flush:** Flush the housing with 10 liters of WFI to remove residual Glucogen-XR peptide.
2.  **Product-Wetted Test:** Alternatively, perform the test using residual product (Product-Wetted Bubble Point).
3.  **Pressure Decay:** Conduct a 10-minute pressure decay test at 3000 mbar to detect gross leaks.
4.  **Final Integrity:** Perform Diffusion and Bubble Point tests as per Section 5.1 criteria.

---

#### 6.0 DATA SUMMARY FOR PIVOTAL CLINICAL BATCHES
The following table summarizes the integrity testing data for the 2025 GMP production campaign of Glucogen-XR.

**Table 1: Integrity Test Results for Glucogen-XR DS Batches**

| Batch Number | Filter ID | Test Stage | Wetting Fluid | Diff. Result (mL/min) | BP Result (mbar) | Status | Date |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | S2-XLG-991 | Pre-Use | WFI | 11.2 | 3450 | **PASS** | 05-FEB-2025 |
| GLUC-2025-001 | S2-XLG-991 | Post-Use | Product | 12.8 | 3510 | **PASS** | 06-FEB-2025 |
| GLUC-2025-002 | S2-XLG-995 | Pre-Use | WFI | 10.9 | 3445 | **PASS** | 12-FEB-2025 |
| GLUC-2025-002 | S2-XLG-995 | Post-Use | Product | 13.1 | 3505 | **PASS** | 13-FEB-2025 |
| GLUC-2025-003 | S2-XLG-004 | Pre-Use | WFI | 11.5 | 3480 | **PASS** | 19-FEB-2025 |
| GLUC-2025-003 | S2-XLG-004 | Post-Use | Product | 12.5 | 3525 | **PASS** | 20-FEB-2025 |
| GLUC-2025-004 | S2-XLG-012 | Pre-Use | WFI | 11.8 | 3460 | **PASS** | 26-FEB-2025 |
| GLUC-2025-004 | S2-XLG-012 | Post-Use | Product | 14.2 | 3490 | **PASS** | 27-FEB-2025 |

---

#### 7.0 FAILURE INVESTIGATION AND CONTINGENCY (RE-TESTING POLICY)
In the event of an Initial Integrity Test Failure (IITF), the following decision matrix is applied per SOP-GHS-QA-412:

1.  **Incomplete Wetting:** The most common cause of failure. The filter must be flushed with an additional 40L of WFI and re-tested.
2.  **Temperature Fluctuation:** If the ambient temperature deviates by >±2°C during the test, the test is voided.
3.  **System Leak:** Inspect all Tri-Clamp connections and O-rings. If a leak is found and corrected, the test is restarted.
4.  **Membrane Failure:** If three (3) consecutive tests fail despite adequate wetting and confirmed system tightness, the filter is deemed failed. The batch must be quarantined, and a root cause analysis (RCA) including SEM (Scanning Electron Microscopy) of the membrane must be performed.

**Table 2: Corrective Action/Preventive Action (CAPA) Log for Integrity Failures**

| Event ID | Batch Impacted | Root Cause | Corrective Action | Effectiveness |
| :--- | :--- | :--- | :--- | :--- |
| CAPA-25-04 | N/A (Mock) | Improper O-ring seating | Replacement of Viton O-ring | Successful |
| CAPA-25-09 | GLUC-2025-008 | Insufficient wetting volume | Updated SOP to 20L min. flush | Successful |

---

#### 8.0 PRODUCT-SPECIFIC BUBBLE POINT CORRECTION
Because the Glucogen-XR formulation contains 0.05% polysorbate-20 and high-concentration glucapeptide, the surface tension of the fluid differs from WFI. Google Health Sciences conducted a validation study (**Report V-7721**) to determine the Product-Specific Bubble Point (PSBP).

**Statistical Analysis of PSBP:**
A linear regression analysis was performed comparing WFI bubble points to Glucogen-XR bubble points across 10 different membrane lots.

*   **Regression Equation:** $BP_{product} = 0.98(BP_{WFI}) + 115$
*   **Correlation Coefficient (r²):** 0.994
*   **Validated Safety Factor:** 10% below the lowest clinical BP observed.

---

#### 9.0 CONCLUSION
The integrity testing strategy for Glucogen-XR ensures that every milligram of therapeutic peptide is processed through a validated, intact sterile barrier. By utilizing PUPSIT and automated Sartocheck 5 technology, Google Health Sciences mitigates the risk of non-sterile product release, maintaining full compliance with FDA 21 CFR 211.113.

---
**END OF SECTION**
**Approved By:**
*Dr. Alistair Wayfair, VP Regulatory Affairs*
*Date: 14-MAY-2025*

---

# Bulk Drug Substance Fill and Storage

## Aseptic Filling into Storage Containers

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.2: DRUG SUBSTANCE MANUFACTURE
### SUBSECTION: ASEPTIC FILLING INTO STORAGE CONTAINERS

---

#### 1.0 SCOPE AND OBJECTIVE
This section delineates the comprehensive technical protocols, engineering controls, and validated parameters for the aseptic filtration, filling, and long-term cryogenic storage of **Glucogen-XR (glucapeptide extended-release)** Bulk Drug Substance (BDS). The process described herein is conducted at the Google Health Sciences (GHS) Biopharmaceutical Manufacturing Facility located at 3000 Innovation Drive, South San Francisco, CA.

The primary objective of this terminal stage of manufacture is to transition the purified Glucogen-XR protein from the final chromatography elution pool into a stabilized, concentrated, and sterile state suitable for international transport and long-term stability without compromise to the peptide’s secondary/tertiary structure or biological potency.

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The aseptic filling operation for Glucogen-XR is designed to comply with the following international regulatory frameworks:
*   **FDA Guidance for Industry:** Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice (2004).
*   **ICH Q5A (R2):** Quality of Biotechnological Products: Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <797> / <1211>:** Pharmaceutical Compounding – Sterile Preparations and Sterilization and Sterility Assurance of Compendial Articles.
*   **EU GMP Annex 1:** Manufacture of Sterile Medicinal Products (2022 Revision).

#### 3.0 FACILITY DESIGN AND CLASSIFICATION (GRADE A/B)
The aseptic filling process occurs in Suite 405 (Fill-Finish Operations) of the South San Francisco facility. 

##### 3.1 Environmental Monitoring (EM) Specifications
The filling zone utilizes a restricted access barrier system (RABS) maintained at ISO Class 5 (Grade A) conditions, nested within an ISO Class 7 (Grade B) background.

**Table 3.1-1: Environmental Monitoring Action/Alert Limits for Filling Operations**
| Parameter | Grade A (In-Operation) | Grade B (In-Operation) | Frequency |
| :--- | :--- | :--- | :--- |
| **Non-Viable Particulates (≥0.5 µm/m³)** | ≤ 3,520 | ≤ 352,000 | Continuous |
| **Non-Viable Particulates (≥5.0 µm/m³)** | ≤ 20 | ≤ 2,900 | Continuous |
| **Active Air Samples (CFU/m³)** | < 1 | < 10 | Per Shift |
| **Settle Plates (90mm, CFU/4 hrs)** | < 1 | < 5 | Per Shift |
| **Contact Plates (Glove/Surface, CFU)** | < 1 | < 5 | Post-Operation |

#### 4.0 EQUIPMENT AND MATERIALS
All equipment in contact with the Glucogen-XR drug substance is single-use technology (SUT) to mitigate cross-contamination risks and eliminate the need for Cleaning Validation (CV) between batches.

**Table 4.0-1: Critical Equipment List**
| Equipment ID | Manufacturer | Model / Material | Description |
| :--- | :--- | :--- | :--- |
| **PUMP-405-01** | Watson Marlow | 630S/R Peristaltic | Precision filling pump |
| **FILT-405-A/B** | BioPharma Millipore | Durapore PVDF 0.22µm | Dual redundant sterile filters |
| **SCALE-405-02** | Mettler Toledo | IND780 (High Precision) | Load cells for mass-based fill |
| **CONT-GHS-01** | Sartorius Stedim | Celsius® FFT (1L/6L/12L) | EVA/LDPE 3-layer storage bags |
| **TUBE-GHS-SUT** | Saint-Gobain | C-Flex® 374 | Thermoplastic tubing for welding |

#### 5.0 PROCESS FLOW AND STEP-BY-STEP PROTOCOL

##### 5.1 Pre-Filtration Preparation
The purified Bulk Drug Substance (approximately 45L to 60L per batch) is held in the Final Formulated Pool Tank (T-800) at 2-8°C. Prior to filling, the solution is sampled for Bioburden and Endotoxin.

1.  **System Assembly:** The Single-Use Fill Manifold (SU-MAN-2025) is removed from double-sterile packaging within the Grade A RABS.
2.  **Integrity Testing (Pre-use):** The dual 0.22µm filters are integrity tested using the Bubble Point method.
    *   *Specification:* ≥ 50 psi (Water wetted).
    *   *Calculation:* $P = \frac{4\gamma\cos\theta}{d}$ (where $\gamma$ is surface tension).

##### 5.2 Sterile Filtration (Bioburden Reduction)
The Glucogen-XR solution is pumped through the redundant filter train at a constant flow rate of 1.2 L/min to minimize shear stress on the glucapeptide molecules.

*   **Critical Process Parameter (CPP):** Filtration Pressure < 2.5 bar.
*   **CPP:** Temperature 2.0°C – 8.0°C.

##### 5.3 Filling Operations
Filling is conducted via weight-controlled automated dispensers. Each storage container (Celsius® FFT) is filled to a target weight based on the density of the formulation ($\rho = 1.042 \text{ g/mL}$ at 5°C).

**Table 5.3-1: Fill Configuration for Batch GLUC-2025-001 (Example Data)**
| Container ID | Target Vol (L) | Target Mass (kg) | Acceptable Range (±1%) | Actual Mass (kg) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001-B01** | 6.00 | 6.252 | 6.189 - 6.315 | 6.255 |
| **GLUC-2025-001-B02** | 6.00 | 6.252 | 6.189 - 6.315 | 6.251 |
| **GLUC-2025-001-B03** | 6.00 | 6.252 | 6.189 - 6.315 | 6.248 |
| **GLUC-2025-001-B04** | 2.00 | 2.084 | 2.063 - 2.105 | 2.085 |

##### 5.4 Post-Fill Integrity and Sealing
Each bag is sealed using a Terumo BCT sterile tubing welder. A secondary overwrap (aluminized Mylar) is applied to provide a light barrier and an additional moisture vapor transmission rate (MVTR) protection layer.

#### 6.0 STORAGE CONDITIONS AND CRYOPRESERVATION
Glucogen-XR is stored in the frozen state to ensure long-term stability of the GLP-1 receptor agonist moiety.

*   **Storage Temperature:** -70°C ± 10°C (Ultra-Low Temperature Freezer).
*   **Freezing Rate:** Controlled rate freezing at 0.5°C/min to avoid cryoconcentration and protein aggregation at the ice-liquid interface.
*   **Inventory Management:** All containers are tracked via the Google Cloud Life Sciences ERP (SAP S/4HANA) using GS1-128 barcodes.

#### 7.0 BATCH RELEASE TESTING (ASEPTIC FILL FOCUS)
The following tests are performed specifically on the filled BDS containers prior to release for Drug Product manufacture.

**Table 7.0-1: Analytical Specifications for BDS Release**
| Test | Method | Specification |
| :--- | :--- | :--- |
| **Sterility** | USP <71> | No Growth (14 days) |
| **Bacterial Endotoxin** | USP <85> | < 0.5 EU/mg |
| **Particulate Matter** | USP <788> | ≥10µm: <6000; ≥25µm: <600 |
| **Appearance** | Visual | Clear to slightly opalescent |
| **Purity (SEC-HPLC)** | GHS-METH-112 | ≥ 98.0% Monomer |
| **Potency (Cell-based)** | GHS-METH-405 | 80% - 125% of Reference |

#### 8.0 DEVIATION AND NON-CONFORMANCE MANAGEMENT
Any excursion from the parameters defined in the Master Batch Record (MBR) is documented via the Quality Management System (QMS).

*   **Example Case GLUC-2025-DEV-04:** During the filling of batch GLUC-2025-012, a pressure spike of 2.8 bar was noted. Root Cause Analysis (RCA) determined partial filter fouling. Impact assessment confirmed no loss of protein integrity via SEC-HPLC and the batch was released based on successful post-use integrity testing.

#### 9.0 APPENDICES AND DATA TABLES

**Table 9.0-1: Historical Fill Data Summary (Validation Batches)**
| Batch Number | Date of Fill | Operator ID | Total Vol (L) | Yield (%) | Sterility Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | J. DOE | 58.4 | 99.2% | Pass |
| GLUC-2025-002 | 28-JAN-2025 | A. SMITH | 60.1 | 98.8% | Pass |
| GLUC-2025-003 | 14-FEB-2025 | R. ROE | 59.7 | 99.5% | Pass |

#### 10.0 REFERENCES
1.  *Google Health Sciences Standard Operating Procedure (SOP) 88-001: Operation of the Watson Marlow Filling System.*
2.  *Validation Report VAL-GHS-2024-X102: Media Fill and Aseptic Process Simulation for Glucogen-XR.*
3.  *Technical Report TR-405-22: Stability of Glucogen-XR at -70°C in EVA Storage Containers.*

---
**END OF SECTION**

---

## Labeling and Storage Conditions

# MODULE 3: QUALITY (CMC)
## SECTION 3.2.S.2.4: MANUFACTURE - BULK DRUG SUBSTANCE FILL AND STORAGE
### SUBSECTION: LABELING AND STORAGE CONDITIONS

---

#### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive technical description of the labeling, primary packaging, container closure systems, and validated storage conditions for Glucogen-XR (glucapeptide extended-release) Bulk Drug Substance (BDS). Google Health Sciences (GHS) ensures that all BDS handling operations are conducted in accordance with Current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210, 211, and 600, as well as ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients).

The Glucogen-XR BDS is a highly purified GLP-1 receptor agonist peptide produced via recombinant DNA technology in the GHS-CHO-001 cell line. Due to the inherent sensitivity of the glucapeptide secondary and tertiary structures to thermal stress, shear, and light, the labeling and storage parameters have been engineered to maintain a strict Stability-Indication Profile (SIP) over the intended shelf life.

#### 2.0 LABELING SPECIFICATIONS AND CONTROL

##### 2.1 Regulatory Compliance of Labeling
Labeling for Glucogen-XR BDS is executed under Grade C (ISO 7) environmental conditions within the Drug Substance Fill/Finish Suite at the 3000 Innovation Drive facility. Labels are generated via the Google Cloud Life Sciences Manufacturing Execution System (MES) to ensure 100% traceability.

**Table 1: BDS Labeling Content Requirements (per 21 CFR 610.60/610.67)**

| Data Element | Specification/Source | Format/Example |
| :--- | :--- | :--- |
| **Product Name** | Glucogen-XR (glucapeptide) | Proprietary/Non-proprietary |
| **Batch Number** | MES Generated | GLUC-2025-001 |
| **Manufacturer** | Google Health Sciences | Name and Address |
| **Concentration** | 50.0 mg/mL ± 2.5 mg/mL | UV-Vis Spectrophotometry |
| **Total Volume** | 10.0 L nominal | Gravimetric Determination |
| **Storage Temperature** | -70°C to -90°C | Ultra-Low Temperature (ULT) |
| **Expiry Date** | 36 Months (Validated) | DD-MMM-YYYY |
| **Safety Warning** | "Caution: For Further Manufacturing Use Only" | Regulatory Text |
| **Barcode** | GS1-128 2D DataMatrix | Machine Readable |

##### 2.2 Label Material Science and Adhesive Integrity
The labels used for Glucogen-XR BDS are specifically qualified for cryogenic storage. Standard pressure-sensitive adhesives often fail at temperatures below -40°C. GHS utilizes the **Cryo-Guard™ 9000** labeling system.

*   **Substrate:** Polypropylene film (2.4 mil thickness).
*   **Adhesive:** Ultra-low temperature acrylic-based permanent adhesive.
*   **Inks:** UV-cured, smudge-resistant resin ribbons qualified for ethanol (70%) and isopropyl alcohol (IPA) wipe-down procedures.
*   **Testing:** Label adhesion is tested per ASTM D3330 (Standard Test Method for Peel Adhesion) after 12 months of storage at -80°C.

#### 3.0 PRIMARY CONTAINER CLOSURE SYSTEM (CCS)

Glucogen-XR BDS is filled into Single-Use Systems (SUS) to minimize the risk of cross-contamination and to facilitate rapid freezing.

##### 3.1 SUS Technical Specifications
The primary container is a 10L **Bio-Shield™ Fluoropolymer Bag** (FEP/PTFE blend), chosen for its chemical inertness and resistance to brittle fracture at -80°C.

**Table 2: Material of Construction (MOC) and Extractables/Leachables (E&L) Profile**

| Component | Material | Regulatory Compliance |
| :--- | :--- | :--- |
| **BDS Contact Layer** | Fluorinated Ethylene Propylene (FEP) | USP <88> Class VI, USP <661> |
| **Outer Reinforcement** | Polyester Scrim | USP <87> Non-Cytotoxic |
| **Tubing** | C-Flex® (Braid Reinforced) | USP <381> |
| **Connectors** | AseptiQuik® S Sterile Connectors | ISO 10993 |

##### 3.2 Container Integrity Testing (CCIT)
Every batch of BDS containers undergoes 100% Helium Leak Testing prior to sterilization. The integrity of the final filled container is further validated via Vacuum Decay (ASTM F2338).

#### 4.0 FILLING PROTOCOLS AND WEIGHT VERIFICATION

##### 4.1 Step-by-Step Filling Procedure (Protocol GHS-BDS-FILL-09)
1.  **System Setup:** Aseptically assemble the single-use manifold in the Grade A (ISO 5) Laminar Flow Hood.
2.  **Filter Integrity:** Perform pre-use/post-sterilization integrity testing (PUPSIT) on the 0.22 μm polyethersulfone (PES) sterilizing-grade filter using the Bubble Point method.
3.  **Tare Weight:** Place the empty 10L Bio-Shield™ bag on the calibrated Mettler-Toledo IND780 scale (Equipment ID: GHS-SC-402). Record weight ($W_{tare}$).
4.  **Filling:** Initiate peristaltic pump (Watson-Marlow 630) at a flow rate of 500 mL/min to minimize shear stress on the peptide.
5.  **Final Weight:** Stop fill once the target weight ($W_{target}$) is achieved.
    *   $W_{target} = (Volume_{target} \times \rho_{BDS}) + W_{tare}$
    *   Where $\rho_{BDS} = 1.042 \text{ g/mL}$ at 20°C.
6.  **Sampling:** Collect 5 x 50 mL aliquots into PETG bottles for Quality Control (QC) and Retain samples.

#### 5.0 STORAGE CONDITIONS AND STABILITY MANAGEMENT

##### 5.1 Temperature Specification
Glucogen-XR BDS must be stored at **-80°C ± 10°C**. This temperature was selected based on Differential Scanning Calorimetry (DSC) data indicating the glass transition temperature ($T_g'$) of the formulated matrix is -34.2°C. Storage at -80°C ensures the product remains in a vitrified state, preventing peptide aggregation and deamidation.

##### 5.2 Freeze-Thaw Validation
The stability of the glucapeptide was assessed over five (5) freeze-thaw cycles. Data indicates that the secondary structure (measured by Circular Dichroism) remains within specification.

**Table 3: Stability Data Summary (Batch GLUC-2025-001, 24-Month Intermediate Data)**

| Test Parameter | Method | Acceptance Criteria | Result (T=24M) |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual | Clear to slightly opalescent | Conforms |
| **Purity (SEC-HPLC)** | USP <621> | $\ge 98.5\%$ monomer | 99.4% |
| **Potency (Bioassay)** | Cell-based | 80% - 120% of Reference | 102% |
| **Charge Variants** | cIEF | Acidic: $\le 10\%$; Basic: $\le 5\%$ | Acidic 4.2%; Basic 1.1% |
| **Endotoxin** | USP <85> | $\le 0.5 \text{ EU/mg}$ | $< 0.05 \text{ EU/mg}$ |

#### 6.0 LOGISTICS AND COLD CHAIN SECURITY

##### 6.1 Ultra-Low Temperature (ULT) Freezer Redundancy
BDS is stored in Thermo Scientific™ TSX Series ULT Freezers equipped with dual-compressor technology. In the event of a primary cooling circuit failure, the secondary circuit maintains -75°C indefinitely.

*   **Backup Power:** Connected to the Google Health Sciences 2MW redundant diesel generator system.
*   **Monitoring:** Continuous temperature logging via the **GHS-Cloud-Sentinel** platform with 1-minute sampling intervals. Alarms are triggered if the temperature deviates to > -70°C for more than 15 minutes.

##### 6.2 Shipment and Tertiary Packaging
For inter-site transfer (e.g., from 3000 Innovation Drive to the Drug Product fill site), BDS is shipped in **CryoPortal™** liquid nitrogen vapor shippers (dry-shippers) or specialized VIP (Vacuum Insulated Panel) shippers with dry ice.

1.  **Pre-Conditioning:** Shippers are pre-conditioned to -78.5°C using CO2 pellets.
2.  **Data Loggers:** Each shipment contains two (2) calibrated NIST-traceable TempTale® Ultra probes placed at the top and bottom of the payload.
3.  **Documentation:** A Chain of Custody (CoC) form and Certificate of Analysis (CoA) must accompany every shipment.

#### 7.0 STATISTICAL ANALYSIS OF STORAGE TRENDS
GHS utilizes JMP® 17 software to perform linear regression analysis on stability data. The 95% confidence interval for the degradation rate of the Glucogen-XR monomer (via SEC-HPLC) suggests a predicted shelf life of 62 months at -80°C, though a conservative 36-month limit is currently claimed in this IND/BLA.

$$y = -0.012x + 99.8$$
*(Where $y$ = % Purity and $x$ = time in months)*

#### 8.0 REFERENCES
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <659>:** Packaging and Storage Requirements.
4.  **USP <1117>:** Microbiological Best Laboratory Practices.
5.  **GHS-SOP-QA-045:** Procedure for Investigating Cold Chain Excursions.

---
**END OF SECTION**

---

## Hold Time Studies

### 3.2.S.2.6 Manufacturing Process Development
#### 3.2.S.2.6.1 Bulk Drug Substance Fill, Hold, and Storage Validation

---

# **SECTION: HOLD TIME STUDIES FOR GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)**

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive validation summary of the hold time studies conducted for Glucogen-XR (glucapeptide extended-release) Bulk Drug Substance (BDS). These studies ensure that the quality, safety, potency, and purity of the drug substance are maintained throughout various stages of the manufacturing process where intermediate materials or the final bulk drug substance may be stored prior to subsequent processing or final fill-finish operations.

Google Health Sciences has implemented a robust stability-indicating framework to define the Maximum Allowable Hold Time (MAHT) for all critical process intermediates and the final BDS. These studies were executed in accordance with:
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.

The hold time validation program for Glucogen-XR is designed to simulate worst-case manufacturing conditions, including temperature excursions, mechanical agitation during transport, and container-closure interactions using a scale-down model validated to represent the commercial manufacturing process at 3000 Innovation Drive.

---

### 2.0 HOLD TIME STUDY STRATEGY: THE "BRACKETING" APPROACH
To ensure maximum regulatory flexibility and robust data coverage, Google Health Sciences utilized a bracketing and matrixing design for hold time studies.

#### 2.1 Scale-Down Model Validation
Studies were performed using a qualified scale-down model (SDM). The SDM utilizes identical materials of construction (MOC) as the commercial-scale equipment.
*   **Commercial Scale:** 2000L Single-Use Bioreactor (SUB) / 50L BDS Storage Carboys.
*   **Scale-Down Model:** 2L Glass vessels and 125mL Polycarbonate/PETG bottles.
*   **Surface Area to Volume (SA/V) Ratio:** The SDM was designed to provide a higher SA/V ratio than the commercial scale to simulate "worst-case" leaching and adsorption scenarios.

#### 2.2 Analytical Testing Battery
All hold time samples were subjected to the following Stability Indicating Profile (SIP):

| Test Parameter | Methodology | Specification/Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual Inspection (USP <790>) | Clear to slightly opalescent, colorless to yellowish liquid |
| **Protein Concentration** | UV280 (A280) | 50.0 mg/mL ± 5.0 mg/mL |
| **Purity (Monomer %)** | SE-HPLC (Size Exclusion) | ≥ 98.0% Monomer |
| **Charge Heterogeneity** | iCIEF (Capillary Isoelectric Focusing) | Main Peak: 65.0% – 75.0% |
| **Purity (R-HPLC)** | Reversed-Phase HPLC | Total Impurities ≤ 2.0% |
| **Potency (In Vitro)** | Cell-based GLP-1R Activation | 80% – 125% of Reference Standard |
| **Bioburden** | Membrane Filtration (USP <61>) | ≤ 10 CFU/100 mL |
| **Endotoxin** | LAL Kinetic Chromogenic (USP <85>) | ≤ 0.5 EU/mg |

---

### 3.0 PROCESS STEP SPECIFIC HOLD TIMES

#### 3.1 Post-Harvest Cell-Free Intermediate (PH-CFI)
**Step ID:** S.2.2.1
**Hold Point:** Post-Clarification, Pre-Chromatography Capture.
**Storage Condition:** 2°C to 8°C or Ambient (15°C to 25°C).

##### 3.1.1 Validation Protocol: GLUC-VAL-HT-001
This study assessed the stability of the unpurified glucapeptide in the presence of residual host cell proteins (HCPs) and proteases.

**Table 3.1.1: Hold Time Data for PH-CFI (Batch GLUC-2025-001-H)**
*Storage at 2-8°C*

| Time Point | Purity (SE-HPLC) | HCP Level (ppm) | Bioburden (CFU/mL) | pH |
| :--- | :--- | :--- | :--- | :--- |
| T=0 | 94.2% | 245,000 | 0 | 7.2 |
| 24 Hours | 94.1% | 244,800 | 0 | 7.2 |
| 48 Hours | 93.9% | 246,100 | 1 | 7.1 |
| 72 Hours (MAHT) | 93.5% | 245,500 | 1 | 7.2 |
| 96 Hours (FTS) | 91.2% | 258,000 | 4 | 6.9 |

*Note: FTS = Failure Target Study (beyond MAHT). Acceptable limit for PH-CFI is 72 hours at 2-8°C.*

---

#### 3.2 Ultrafiltration/Diafiltration (UF/DF-1) Pool
**Step ID:** S.2.2.4
**Hold Point:** Intermediate after Viral Inactivation and before Polishing.
**Storage Condition:** 2°C to 8°C.

**Table 3.2.1: UF/DF Pool Hold Time Stability (Batch GLUC-2025-002-H)**

| Parameter | T=0 | 72 Hours | 120 Hours | 168 Hours (MAHT) |
| :--- | :--- | :--- | :--- | :--- |
| **Protein Conc (mg/mL)** | 42.1 | 42.1 | 42.2 | 42.0 |
| **High Mol. Weight (%)** | 0.4% | 0.5% | 0.6% | 0.7% |
| **Acidic Variants (%)** | 12.1% | 12.4% | 12.8% | 13.2% |
| **Endotoxin (EU/mL)** | <0.05 | <0.05 | <0.05 | <0.05 |

---

### 4.0 FINAL BULK DRUG SUBSTANCE (BDS) FILL AND STORAGE

The BDS fill operation involves the transfer of the final formulated Glucogen-XR into 50L Single-Use Gamma-Irradiated Storage Bags (Sartorius Flexboy or equivalent) or 20L PETG Carboys.

#### 4.1 Frozen Storage Stability and Freeze-Thaw Validation
Glucogen-XR BDS is stored at -70°C (Nominal) for long-term stability. Validation included five (5) consecutive freeze-thaw cycles.

**Calculations for Freeze-Thaw Stress:**
The rate of freezing ($dT/dt$) was controlled to simulate the thermal lag in a 20L carboy.
*   **Cooling Rate:** -0.5°C/min to -1.0°C/min.
*   **Thawing Rate:** Controlled at 20°C (Ambient Water Bath).

**Table 4.1.1: Multi-Cycle Freeze-Thaw Analysis (Batch GLUC-2025-005-FT)**

| Cycle Number | Monomer Purity (%) | Potency (%) | Sub-visible Particles (≥10µm) |
| :--- | :--- | :--- | :--- |
| **Initial (Pre-F)** | 99.6% | 102% | 45 particles/mL |
| **Cycle 1** | 99.6% | 101% | 52 particles/mL |
| **Cycle 3** | 99.5% | 100% | 88 particles/mL |
| **Cycle 5** | 99.4% | 98% | 112 particles/mL |
| **Limit** | **≥98.0%** | **80-125%** | **≤6000 particles/mL** |

---

### 5.0 MICROBIAL CHALLENGE STUDIES (PROVOCATIVE TESTING)
To validate the "No Growth" hold times, Google Health Sciences conducted microbial challenge studies on the BDS buffer and the formulated drug substance.

**Protocol:**
1.  Inoculate 100 mL of Glucogen-XR BDS with <100 CFU of *Staphylococcus aureus*, *Pseudomonas aeruginosa*, and *Candida albicans*.
2.  Store at 20-25°C.
3.  Perform counts at 0, 24, 48, and 72 hours.

**Results:**
The Glucogen-XR formulation (containing acetate buffer at pH 5.5) demonstrated bacteriostatic properties, with no significant increase (>0.5 log10) in microbial population over 72 hours.

---

### 6.0 SHIPPING AND AGITATION VALIDATION
BDS may be shipped from the South San Francisco site to contract fill-finish facilities.

**Study GLUC-2025-SHIP-01:**
*   **Method:** ISTA 3A Standardized Shipping Simulation (Vibration, Drop, Pressure Change).
*   **Equipment:** Lansmont Vibration Table.
*   **Duration:** Simulated 48-hour transit (Air and Ground).

**Table 6.1: Post-Shipping Simulation Quality Attributes**

| Test | Post-Vibration Result (GLUC-2025-009) | Specification |
| :--- | :--- | :--- |
| **SEC-HPLC Purity** | 99.2% | ≥98.0% |
| **DLS (Polydispersity)** | 0.12 | Report |
| **Visible Particles** | None | Essentially Free |
| **Potency** | 104% | 80-125% |

---

### 7.0 SUMMARY OF APPROVED HOLD TIMES (MAHT)

Based on the cumulative data presented in this section, the following Maximum Allowable Hold Times have been established for the Glucogen-XR manufacturing process:

| Process Intermediate | Storage Temperature | Maximum Hold Time |
| :--- | :--- | :--- |
| Harvested Cell Culture Fluid | 2 - 8°C | 48 Hours |
| Clarified Lysate / PH-CFI | 2 - 8°C | 72 Hours |
| Protein A Eluate | 2 - 25°C | 24 Hours |
| Viral Inactivated Pool | 15 - 25°C | 12 Hours |
| Final Formulated BDS (Pre-Fill) | 2 - 8°C | 96 Hours |
| **Final BDS (Frozen Storage)** | **-70°C (Nominal)** | **36 Months (Provisional)** |

---

### 8.0 DEVIATION MANAGEMENT AND EXCURSIONS
In the event that a hold time exceeds the MAHT defined above, the batch will be placed on Quality Hold. Impact assessment will require:
1.  Full panel testing against Release Specifications.
2.  Extended degradation analysis (Mass Spectrometry for deamidation/oxidation).
3.  Evaluation of bioburden kinetics.

Google Health Sciences utilizes the Google Cloud Life Sciences AI Monitoring system to track real-time temperature data across all storage units (GHS-FREEZER-001 through 099), ensuring immediate notification of excursions that could impact the validated hold times.

---
**References:**
1. *Technical Report No. 43: Identification and Classification of Nonconformities in Molded and Tubular Glass Containers for Pharmaceutical Manufacturing.*
2. *GHS-SOP-550: Management of Bulk Drug Substance Storage and Transport.*
3. *USP <788> Particulate Matter in Injections.*

---

# Process Controls and Monitoring

## Critical Process Parameters (CPPs)

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.4: CONTROLS OF CRITICAL STEPS AND INTERMEDIATES
### SUBSECTION: 3.2.S.2.4.1 CRITICAL PROCESS PARAMETERS (CPPs) – Glucogen-XR (glucapeptide)

---

**Proprietary Notice:**  
The information contained within this document is the confidential and proprietary property of Google Health Sciences, a Division of Google Cloud Life Sciences. Reproduction, distribution, or disclosure to unauthorized third parties is strictly prohibited.

**Site of Manufacture:**  
Google Health Sciences  
3000 Innovation Drive  
South San Francisco, CA 94080, USA  
FEI: 3012345678  

---

### 1.0 INTRODUCTION AND SCOPE

This section provides an exhaustive delineation of the Critical Process Parameters (CPPs) for the manufacture of Glucogen-XR (glucapeptide), a recombinant GLP-1 receptor agonist produced in the proprietary CHO-K1 GS knockout cell line (GHS-CHO-001). In accordance with **ICH Q8(R2) Pharmaceutical Development** and **ICH Q11 Development and Manufacture of Drug Substances**, Google Health Sciences has implemented a Quality by Design (QbD) framework to identify and control parameters whose variability has a direct impact on the Critical Quality Attributes (CQAs) of the drug substance.

The manufacturing process is divided into three primary phases:
1.  **Upstream Processing (USP):** Cell culture expansion and N-stage production.
2.  **Downstream Processing (DSP):** Recovery, purification, and viral inactivation.
3.  **Drug Substance Formulation and Fill:** Final concentration and stabilization.

---

### 2.0 PHILOSOPHY OF PARAMETER CLASSIFICATION

Google Health Sciences utilizes a risk-based approach to categorize process parameters based on their impact on product quality (Safety, Identity, Strength, Purity, and Potency).

#### 2.1 Definitions
*   **Critical Process Parameter (CPP):** A process parameter whose variability has an impact on a critical quality attribute and therefore should be monitored or controlled to ensure the process produces the desired quality.
*   **Key Process Parameter (KPP):** A parameter that does not impact quality but has a significant impact on process consistency or yield.
*   **Non-Critical Process Parameter (NCPP):** A parameter that has been demonstrated to have no significant impact on product quality or yield within the operating range.

#### 2.2 Risk Assessment Methodology (FMEA)
Failure Mode and Effects Analysis (FMEA) was conducted for each unit operation. Risk Priority Numbers (RPN) were calculated as:
$$RPN = S \times O \times D$$
Where:
- **S (Severity):** Impact on CQA (1–10)
- **O (Occurrence):** Likelihood of deviation (1–10)
- **D (Detectability):** Ability to detect the event (1–10)

Parameters with an RPN > 50 or a Severity score ≥ 7 were automatically classified as CPPs.

---

### 3.0 UPSTREAM CRITICAL PROCESS PARAMETERS (USP-CPP)

The upstream process involves the cultivation of GHS-CHO-001 cells in a serum-free, chemically defined medium. The stability of the glucapeptide molecule is highly sensitive to metabolic byproducts (lactic acid, ammonia) and enzymatic degradation.

#### 3.1 Unit Operation: N-Stage Production Bioreactor (2,000L)
The N-stage bioreactor (Equipment ID: BR-2000-01) is the primary site of protein expression. The following parameters are controlled via the Google Cloud Manufacturing Control System (GCMCS) utilizing real-time sensor feedback.

##### Table 3.1-A: N-Stage Bioreactor CPPs and Control Limits

| Parameter ID | Parameter Description | Control Range | Proven Acceptable Range (PAR) | Impacted CQA | Sensitivity Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| USP-CPP-01 | Temperature (Phase 1: Growth) | 37.0°C ± 0.3°C | 36.0°C – 38.0°C | Cell Viability / Growth Rate | High |
| USP-CPP-02 | Temperature (Phase 2: Prod) | 33.0°C ± 0.5°C | 31.0°C – 35.0°C | Glycosylation / Aggregation | Critical |
| USP-CPP-03 | pH Control (pCO2/Base) | 7.00 ± 0.10 | 6.80 – 7.20 | Charge Variants / Deamidation | Critical |
| USP-CPP-04 | Dissolved Oxygen (DO) | 40% ± 5% | 20% – 60% | Post-translational Mod | Moderate |
| USP-CPP-05 | Agitation (Power Input/Vol) | 25 W/m³ ± 2 | 15 – 35 W/m³ | Shear Stress / HMWS | High |
| USP-CPP-06 | Feed Start (VCD Trigger) | $5.0 \times 10^6$ cells/mL | $4.5 - 5.5 \times 10^6$ | Titer / Glycan Profile | Moderate |
| USP-CPP-07 | Glucose Concentration | 4.0 ± 1.0 g/L | 2.0 – 8.0 g/L | Glycation / Growth | High |

##### 3.1.1 Rationale for Temperature Shift (USP-CPP-02)
Glucogen-XR expression is optimized by a temperature shift from 37.0°C to 33.0°C at 96 hours post-inoculation. Studies (Ref: GHS-RPT-0045) indicate that maintaining 37.0°C throughout the run leads to a 45% increase in High Molecular Weight Species (HMWS) due to misfolding.
*   **Calculation of Heat Transfer Coefficient ($U$):**
    $$Q = U \cdot A \cdot \Delta T_{lm}$$
    Where $Q$ is the metabolic heat load. During the shift, $U$ must be maintained above 500 W/m²K to ensure the shift occurs within < 4 hours to avoid cellular stress.

#### 3.2 Unit Operation: Harvesting and Clarification
The primary objective of clarification is the removal of cells and debris while minimizing the release of host cell proteins (HCP) and proteases.

##### Table 3.2-A: Harvest CPPs (Centrifugation and Depth Filtration)

| Parameter ID | Parameter | Set Point | Action Limit | Impacted CQA |
| :--- | :--- | :--- | :--- | :--- |
| USP-CPP-08 | Bowl Speed (Centrifuge) | 8,000 RPM | ± 100 RPM | Cell Lysis / HCP Levels |
| USP-CPP-09 | Discharge Frequency | 60 mins | 55 – 65 mins | Yield / Solids Carryover |
| USP-CPP-10 | Depth Filter Flux (LMH) | 100 L/m²/h | < 120 L/m²/h | Turbidity / DNA Removal |
| USP-CPP-11 | Harvest Temp | 4.0°C – 8.0°C | < 10.0°C | Proteolytic Degradation |

---

### 4.0 DOWNSTREAM CRITICAL PROCESS PARAMETERS (DSP-CPP)

The purification of Glucogen-XR utilizes a three-step chromatographic process: Protein A Capture, Cation Exchange (CEX), and Anion Exchange (AEX).

#### 4.1 Unit Operation: Capture Chromatography (Protein A)
The Protein A step (Batch Series: GLUC-2025-001 to GLUC-2025-050) is critical for isolating the glucapeptide from the bulk harvest.

##### Table 4.1-A: Protein A Capture CPPs

| Parameter ID | Parameter | Specification | Control Method | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| DSP-CPP-01 | Load Ratio (g DS/L Resin) | ≤ 35 g/L | In-line UV / Flow Integration | Prevents Breakthrough |
| DSP-CPP-02 | Elution pH | 3.2 ± 0.1 | Mettler Toledo Pro | Purity / Yield |
| DSP-CPP-03 | Residence Time | 4.0 mins | Pump Rate Control | Binding Kinetics |

*   **Step-by-Step Elution Protocol (DSP-SOP-012):**
    1.  Equilibrate column with 5 CV of Buffer A (20 mM Sodium Phosphate, pH 7.2).
    2.  Load clarified harvest at 150 cm/hr.
    3.  Wash 1 (High Salt): 3 CV of Buffer B (20 mM Sodium Phosphate, 1M NaCl, pH 7.2) to remove DNA.
    4.  Wash 2 (Intermediate pH): 2 CV of Buffer C (50 mM Sodium Acetate, pH 5.5).
    5.  Elution: Apply Buffer D (50 mM Citrate, pH 3.2). Collect peak from 500 mAU (ascending) to 500 mAU (descending).

#### 4.2 Unit Operation: Low pH Viral Inactivation (VI)
Viral safety is a regulatory mandate per **ICH Q5A(R1)**. The glucapeptide must be held at low pH to ensure inactivation of enveloped viruses.

##### Table 4.2-A: Viral Inactivation CPPs

| Parameter ID | Parameter | Target | Range | Verification |
| :--- | :--- | :--- | :--- | :--- |
| DSP-CPP-04 | Target pH | 3.50 | 3.40 – 3.60 | Dual pH Probe Check |
| DSP-CPP-05 | Inactivation Time | 60 mins | 60 – 90 mins | NIST-Calibrated Timer |
| DSP-CPP-06 | Temperature | 20.0°C | 18.0°C – 25.0°C | Jacket Temperature |

**Statistical Analysis of VI Robustness:**
A Design of Experiments (DoE) study (GHS-DOE-2024-09) demonstrated that the Log Reduction Value (LRV) for X-MuLV is > 4.5 across the entire range of pH 3.4–3.6.
*   **Regression Equation:** $LRV = 12.4 - 2.1(pH) - 0.05(Temp)$
*   **Result:** Even at the upper limit (pH 3.6), LRV remains > 4.2, providing a safety factor of 100x.

---

### 5.0 BATCH ANALYSIS DATA (GLUC-2025 SERIES)

The following table summarizes the CPP monitoring results for the first five cGMP batches of Glucogen-XR produced at the South San Francisco facility.

##### Table 5.0-A: Summary of CPP Compliance across GMP Batches

| Batch Number | USP-CPP-02 (Temp Shift) | DSP-CPP-02 (Elution pH) | DSP-CPP-05 (VI Time) | Result |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 33.1°C | 3.21 | 62 mins | **PASS** |
| GLUC-2025-002 | 32.9°C | 3.19 | 65 mins | **PASS** |
| GLUC-2025-003 | 33.0°C | 3.22 | 61 mins | **PASS** |
| GLUC-2025-004 | 33.0°C | 3.20 | 60 mins | **PASS** |
| GLUC-2025-005 | 33.2°C | 3.18 | 64 mins | **PASS** |

---

### 6.0 EXTENDED RELEASE FORMULATION AND CPPs

As an "XR" (Extended Release) formulation, the final Ultrafiltration/Diafiltration (UF/DF) and formulation steps are critical to ensure the glucapeptide is correctly associated with the poly(lactic-co-glycolic acid) (PLGA) microspheres (where applicable) or the high-concentration surfactant matrix.

#### 6.1 Unit Operation: Ultrafiltration/Diafiltration (UF/DF)
##### Table 6.1-A: UF/DF Critical Parameters

| Parameter ID | Parameter | Limit | Monitoring | Impact |
| :--- | :--- | :--- | :--- | :--- |
| DSP-CPP-07 | Transmembrane Pressure (TMP) | 1.2 ± 0.2 bar | Pressure Transducers | Aggregation/Fouling |
| DSP-CPP-08 | Final Concentration | 100 mg/mL | In-line Refractometry | Dose Accuracy |
| DSP-CPP-09 | Diafiltration Volumes | ≥ 8 DV | Flow Totalizer | Buffer Exchange Purity |

**Calculation of Shear Rate at the Membrane Wall ($\gamma_w$):**
$$\gamma_w = \frac{4Q}{\pi r^3}$$
To minimize denaturation, $\gamma_w$ must be maintained below 4,000 $s^{-1}$. For the Millipore Pellicon 3 system used, this equates to a feed flow rate of < 450 L/h.

---

### 7.0 REGULATORY COMPLIANCE AND ARCHIVAL

All CPPs are monitored via the Google Cloud "PharmaStack" platform, which provides 21 CFR Part 11 compliant data logging.
*   **Audit Trail:** Every adjustment to a CPP setpoint is logged with a timestamp and electronic signature.
*   **Deviation Management:** Any CPP excursion outside of the PAR results in an automatic "Quality Hold" (QH) status for the batch, requiring a formal investigation (CAPA) before release.

#### 7.1 References
1.  **USP <1058>:** Analytical Instrument Qualification.
2.  **ICH Q9:** Quality Risk Management.
3.  **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
4.  **GHS-SOP-550:** Manufacturing Control Limits for Biologics.

---

### 8.0 CONCLUSION

The identification and control of the aforementioned CPPs ensure that Glucogen-XR is manufactured with high batch-to-batch consistency. The use of real-time monitoring and stringent control ranges minimizes the risk of CQA deviations, particularly regarding the glycan profile and the levels of high molecular weight aggregates, which are critical for the safety and efficacy of GLP-1 receptor agonists.

**End of Subsection 3.2.S.2.4.1**

---

## In-Process Testing and Acceptance Criteria

### **3.2.S.2.4 Process Controls and Operational Monitoring**
#### **Subsection: In-Process Testing (IPT) and Acceptance Criteria**

---

### **1.0 Introduction and Scope**
This section details the comprehensive In-Process Testing (IPT) framework, Critical Process Parameters (CPPs), and Acceptance Criteria (AC) established by **Google Health Sciences (GHS)** for the manufacture of **Glucogen-XR (glucapeptide extended-release)**. The control strategy outlined herein is designed to ensure the consistent production of a high-quality therapeutic peptide derived from the proprietary **GHS-CHO-001** cell line.

The manufacturing process for Glucogen-XR utilizes a high-density perfusion bioreactor system integrated with continuous downstream purification. Consequently, the IPT strategy employs a hybrid of **Process Analytical Technology (PAT)** for real-time monitoring and traditional discrete sampling for laboratory-based verification.

All testing methodologies are validated in accordance with **ICH Q2(R1)** and aligned with **USP <1225>** (Validation of Compendial Procedures).

---

### **2.0 Regulatory Alignment and Quality Risk Management (QRM)**
The selection of in-process controls and their respective limits is based on extensive Quality by Design (QbD) studies, including Failure Mode and Effects Analysis (FMEA).
*   **ICH Q8(R2):** Pharmaceutical Development (Design Space definition).
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
*   **21 CFR 211.110:** Control of in-process materials and drug products.

---

### **3.0 Upstream In-Process Controls (USP-IPT)**

The upstream process encompasses the expansion of the GHS-CHO-001 cell line from the Working Cell Bank (WCB) through the N-1 expansion stage and into the Production Bioreactor (N stage).

#### **3.1 Seed Train and N-1 Expansion Monitoring**
The primary objective of the IPTs during the seed train is to ensure culture viability, phenotypic stability, and the absence of adventitious agents.

**Table 1: IPT Acceptance Criteria for Seed Train (Flasks to N-1 Bioreactor)**

| Parameter ID | Sampling Point | Test Methodology | Frequency | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IPT-USP-001** | Post-Thaw (24h) | Trypan Blue Exclusion (Vi-Cell BLU) | Once | Viability ≥ 92.0% | Ensures successful recovery from cryopreservation. |
| **IPT-USP-002** | Every Passage | Automated Cell Counter | Every 24h | VCD: 0.5 – 8.0 x 10⁶ cells/mL | Maintenance of logarithmic growth phase. |
| **IPT-USP-003** | Every Passage | Metabolite Analyzer (BioProfile FLEX2) | Every 24h | Glucose: 2.0 – 6.0 g/L | Prevention of nutrient limitation. |
| **IPT-USP-004** | N-1 Transfer | Sterility (USP <71>) | Pre-Transfer | No Growth (14 days) | Verification of aseptic integrity before scale-up. |
| **IPT-USP-005** | N-1 Mid-stage | Mycoplasma (NAT) | Once per stage | Negative | Required per ICH Q5A(R2). |

#### **3.2 Production Bioreactor (N-Stage) Controls**
Glucogen-XR is produced in a 2,000L Single-Use Bioreactor (SUB). Due to the extended-release nature of the peptide and the sensitivity of the CHO-K1 GS-knockout line, specific focus is placed on glycosylation precursors and ammonia accumulation.

**Table 2: N-Stage Bioreactor Operational Controls (Batch Series GLUC-2025-001 through GLUC-2025-010)**

| Control Parameter | Instrument/Method | Range/Limit | Action Level | Impact on CQA |
| :--- | :--- | :--- | :--- | :--- |
| **Temperature** | In-line RTD | 36.5°C ± 0.2°C | ± 0.5°C | Protein folding & Glycosylation |
| **pH** | Optical Sensor / Off-line | 7.00 ± 0.05 | ± 0.10 | Deamidation & Cell Health |
| **Dissolved Oxygen (DO)** | Clark Polarographic | 40% ± 5% | < 30% | Metabolic shift to lactate |
| **Viable Cell Density** | Capacitance Probe | 80 - 120 x 10⁶ | < 70 x 10⁶ | Titer and Harvest Timing |
| **Lactate** | Enzymatic (FLEX2) | < 2.5 g/L | > 3.0 g/L | pH drift and toxicity |
| **Ammonia (NH₄⁺)** | ISE | < 8.0 mmol/L | > 10.0 mmol/L | Inhibition of sialylation |

---

### **4.0 Downstream In-Process Controls (DSP-IPT)**

The downstream process for Glucogen-XR involves a complex sequence of Protein A capture, viral inactivation, multi-modal chromatography, and ultrafiltration.

#### **4.1 Capture Stage: Protein A Chromatography (Chrom-1)**
The capture step utilizes a MabSelect SuRe LX resin to isolate the Glucapeptide from host cell proteins (HCP) and DNA.

**Protocol DSP-01: Load Verification and Breakout Analysis**
1.  **Preparation:** Equilibrate column with 5 CV of 20mM Sodium Phosphate, 150mM NaCl, pH 7.2.
2.  **Loading:** Continuous feed from harvest tank via 0.22µm filter.
3.  **Monitoring:** UV absorbance at A280nm and A300nm.
4.  **IPT-DSP-101 (Step Yield):** Calculated via HPLC-SEC post-elution.

**Table 3: Chrom-1 IPT Acceptance Criteria**

| Test Code | Parameter | Method | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **IPT-DSP-102** | Eluate pH | Potentiometric | 3.5 – 3.8 |
| **IPT-DSP-103** | Eluate Concentration | UV A280 (Ext. Coeff: 1.45) | 15.0 – 25.0 mg/mL |
| **IPT-DSP-104** | Step Yield | Analytical HPLC | ≥ 85.0% |
| **IPT-DSP-105** | Monomer Content | SEC-HPLC | ≥ 95.0% |

#### **4.2 Low pH Viral Inactivation (VI)**
**Procedure:** The eluate from Chrom-1 is adjusted to pH 3.5 ± 0.1 using 1M Phosphoric Acid.
*   **Hold Time:** 60 – 90 minutes.
*   **Temperature:** 20°C – 25°C.
*   **IPT-DSP-201:** pH verification (Dual probe redundancy).
*   **Acceptance Criteria:** pH must remain between 3.40 and 3.60 for the entire 60-minute duration.

#### **4.3 Intermediate and Polishing Chromatography (Chrom-2 and Chrom-3)**
Glucogen-XR requires stringent removal of truncated peptide variants and high-molecular-weight (HMW) species.

**Table 4: Polishing Step Acceptance Criteria (Batch GLUC-2025-AVG)**

| Stage | Parameter | Method | Limit |
| :--- | :--- | :--- | :--- |
| **Chrom-2 (AEX)** | DNA Removal | qPCR | < 10 pg/mg |
| **Chrom-3 (HIC)** | Truncated Variants | RP-HPLC | < 2.0% |
| **Chrom-3 (HIC)** | HCP Level | ELISA | < 50 ppm |

---

### **5.0 Detailed Analytical Protocols for In-Process Samples**

#### **5.1 Protocol for Host Cell Protein (HCP) Monitoring (ELISA)**
This procedure (SOP-GHS-ANA-042) is used for testing intermediate pools after each chromatography step.

1.  **Standard Curve:** Prepare 7-point standard curve using GHS-CHO-001 Mock Protein (5 ng/mL to 200 ng/mL).
2.  **Sample Preparation:** Dilute in-process pools 1:100 and 1:500 in Assay Buffer.
3.  **Incubation:** 2 hours at RT on orbital shaker (400 rpm).
4.  **Detection:** TMB substrate addition; stop reaction with 1N HCl.
5.  **Calculation:** 4-Parameter Logistic (4-PL) curve fit.
    *   *Calculation:* $HCP_{conc} = (\text{Result from curve}) \times \text{Dilution Factor}$

---

### **6.0 Ultrafiltration/Diafiltration (UF/DF) and Formulation**
The final drug substance is concentrated and buffer-exchanged into the Glucogen-XR proprietary extended-release matrix (Sodium Succinate, Polysorbate 80, Trehalose).

**Table 5: Final DS In-Process Control (Pre-Fill)**

| Test Item | Specification/Criteria | Method |
| :--- | :--- | :--- |
| **Protein Concentration** | 100.0 mg/mL ± 5.0 mg/mL | UV-Vis (SoloVPE) |
| **Osmosticity** | 290 ± 30 mOsm/kg | Freezing Point Depression |
| **Bioburden** | < 1 CFU/10 mL | USP <61> |
| **Endotoxin** | < 0.5 EU/mg | USP <85> (LAL) |
| **Turbidity** | < 10 NTU | Nephelometry |

---

### **7.0 Historical Batch Data Analysis (Process Capability)**
Below is a summary of in-process data from three consecutive validation batches.

**Table 6: Batch Comparison Data (GLUC-2025-001 to 003)**

| Process Step | Attribute | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **N-Stage** | Peak VCD ($10^6$) | 104.2 | 108.5 | 101.9 |
| **Harvest** | Viability (%) | 94.2 | 93.8 | 95.1 |
| **Chrom-1** | Recovery (%) | 88.4 | 89.1 | 87.9 |
| **VI Step** | Min pH Reached | 3.48 | 3.51 | 3.49 |
| **UF/DF** | Final Conc (mg/mL) | 100.2 | 99.8 | 101.1 |

---

### **8.0 Deviations and Out of Specification (OOS) Handling**
Any in-process test result falling outside the "Action Level" triggers an immediate Quality Investigation (QI) per **SOP-QA-009**. If an "Acceptance Criteria" (AC) is breached, the material is quarantined, and a formal OOS investigation (per **FDA Guidance for Industry: Investigating Out-of-Specification (OOS) Test Results**) is initiated to determine the impact on the Critical Quality Attributes (CQAs) of the Drug Substance.

---

### **9.0 References**
1.  **ICH Q5B:** Quality of Biotechnological Products: Analysis of the Expression Construct.
2.  **USP <121>:** Insulin Assays (Cross-reference for peptide bioidentity).
3.  **Google Health Sciences QM-2024-001:** Global Quality Manual.
4.  **Smith, J. et al. (2023):** "Advancements in CHO-K1 GS-Knockout Perfusion Systems," *Journal of Biotech Engineering*, 45(2), 112-128.

---

## Statistical Process Control

# MODULE 3: QUALITY (DATA)
## 3.2.S DRUG SUBSTANCE (GLUCOGEN-XR)
### 3.2.S.2 MANUFACTURE
#### 3.2.S.2.4 Process Controls and Monitoring
##### 3.2.S.2.4.X Statistical Process Control (SPC)

---

### 1.0 INTRODUCTION AND SCOPE OF SPC IMPLEMENTATION

Statistical Process Control (SPC) at Google Health Sciences (GHS) represents the pinnacle of Quality by Design (QbD) integration within the Glucogen-XR manufacturing framework. This section details the rigorous mathematical and procedural frameworks used to monitor, control, and optimize the production of Glucogen-XR (glucapeptide extended-release). 

The SPC program for Glucogen-XR is designed in alignment with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, and **ICH Q10 Pharmaceutical Quality System**. Furthermore, GHS adheres to the **FDA Guidance for Industry: Process Validation: General Principles and Practices (2011)**, specifically Stage 3: Continued Process Verification (CPV).

The objective of this SPC framework is twofold:
1.  **Detection of Non-Random Variation:** To distinguish between "common cause" variation (inherent to the process) and "special cause" variation (due to external factors, equipment drift, or raw material shifts).
2.  **Process Capability Assurance:** To ensure that the manufacturing process for the GLP-1 receptor agonist consistently remains within established Critical Quality Attribute (CQA) and Critical Process Parameter (CPP) limits, maintaining a $C_{pk} \geq 1.33$.

---

### 2.0 STATISTICAL METHODOLOGY AND ALGORITHMS

#### 2.1 Control Chart Selection Logic
GHS utilizes an automated decision matrix for selecting the appropriate control chart type based on data distribution and subgroup size ($n$).

| Data Type | Subgroup Size ($n$) | Primary Control Chart | Secondary/Diagnostic Chart |
| :--- | :--- | :--- | :--- |
| Variable (Continuous) | $n = 1$ | Individuals-Moving Range ($I-MR$) | CUSUM (Small shifts) |
| Variable (Continuous) | $n = 2$ to $10$ | $\bar{X}$ and $R$ (Mean and Range) | EWMA |
| Variable (Continuous) | $n > 10$ | $\bar{X}$ and $S$ (Mean and Std. Dev) | Box-Whisker Plot |
| Attribute (Counts) | Variable | $u$-chart (Non-conformities/unit) | Pareto Analysis |
| Attribute (Pass/Fail) | Fixed | $np$-chart | $p$-chart |

#### 2.2 Calculation Formulas
For the monitoring of the Glucogen-XR Upstream Yield and Downstream Purity, the following formulas are embedded into the GHS Cloud Life Sciences SPC Engine:

**A. Shewhart Control Limits ($3\sigma$):**
$$UCL = \mu + 3\sigma$$
$$LCL = \mu - 3\sigma$$
*Where $\mu$ is the process mean and $\sigma$ is the estimated standard deviation derived from the mean moving range ($\overline{MR}/1.128$).*

**B. Process Capability Index ($C_{pk}$):**
$$C_{pk} = \min \left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
*Targets: $C_{pk} > 1.33$ (Capable), $C_{pk} > 1.67$ (Highly Capable).*

---

### 3.0 UPSTREAM PROCESS MONITORING (CELL CULTURE)

The proprietary GHS-CHO-001 cell line used for Glucogen-XR expression requires hyper-specific monitoring of metabolic flux.

#### 3.1 Batch Sequence Analysis: GLUC-2025-001 through GLUC-2025-025
The following table represents the SPC data for the N-1 and N Production Bioreactor stages.

| Batch ID | VCD at Harvest ($10^6$ cells/mL) | Viability (%) | Lactate Peak (mM) | Glucapeptide Titer (g/L) | SPC Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 18.42 | 98.2 | 24.1 | 4.22 | In Control |
| GLUC-2025-002 | 19.10 | 97.9 | 22.8 | 4.35 | In Control |
| GLUC-2025-003 | 17.85 | 96.5 | 26.3 | 4.10 | In Control |
| GLUC-2025-004 | 18.99 | 98.0 | 23.5 | 4.41 | In Control |
| GLUC-2025-005 | 22.10 | 94.2 | 31.4 | 3.85 | **Alert (Rule 1)** |
| GLUC-2025-006 | 18.55 | 98.1 | 23.0 | 4.28 | Recovered |
| GLUC-2025-007 | 18.66 | 97.8 | 24.2 | 4.25 | In Control |
| GLUC-2025-008 | 19.02 | 98.3 | 21.9 | 4.48 | In Control |

**Statistical Analysis of Outlier (GLUC-2025-005):**
Batch GLUC-2025-005 triggered a Nelson Rule 1 violation (point outside $3\sigma$). Investigation via Google Cloud's AI-Anomaly Detector revealed a deviation in the Carbon Dioxide ($CO_2$) sparging rate, leading to transient acidification and subsequent lactate accumulation. 

#### 3.2 Multi-variate Statistical Process Control (MSPC)
GHS utilizes Principal Component Analysis (PCA) to monitor the "Golden Batch" trajectory.
*   **PC1 (Yield Drivers):** $O_2$ Transfer Rate, Feed Rate, Temperature.
*   **PC2 (Quality Drivers):** pH, Osmolality, Glutamine concentration.

---

### 4.0 DOWNSTREAM PROCESS MONITORING (PURIFICATION)

#### 4.1 Chromatography Step Yields (Protein A and Ion Exchange)
Control of the purification of the glucapeptide is monitored via Step Yield (%) and Step Purity (%).

**Protocol for SPC Data Entry (SOP-PUR-SPC-04):**
1.  Immediately following elution, the AKTA Process™ system exports the Chromatographic Area Under Curve (AUC).
2.  Data is pushed to the GHS-LIMS (Laboratory Information Management System).
3.  The SPC engine calculates the Moving Range ($MR$) relative to the previous 5 batches.
4.  If $MR > UCL_{MR}$, the Quality Assurance (QA) lead is notified via automated alert.

##### Table 4.1.1: SEC-HPLC Purity SPC Data (Final Bulk DS)
| Batch ID | Main Peak (%) | Pre-Peak (%) | Post-Peak (%) | Aggregate (%) | $\sigma$ (Z-score) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-010 | 99.45 | 0.22 | 0.33 | <0.05 | +0.2 |
| GLUC-2025-011 | 99.38 | 0.31 | 0.31 | <0.05 | -0.1 |
| GLUC-2025-012 | 99.52 | 0.20 | 0.28 | <0.05 | +0.4 |
| GLUC-2025-013 | 99.40 | 0.25 | 0.35 | <0.05 | 0.0 |
| GLUC-2025-014 | 99.12 | 0.45 | 0.43 | <0.05 | -1.8 |

---

### 5.0 ESTABLISHED CONTROL LIMITS AND ACTION THRESHOLDS

The following limits are derived from the characterization phase (Batches GLUC-2023-001 to GLUC-2024-050).

| Parameter | Unit | Target | Action Limit (LAL/UAL) | Control Limit (LCL/UCL) |
| :--- | :--- | :--- | :--- | :--- |
| **Upstream** | | | | |
| Inoculum Density | $10^5$ cells/mL | 5.0 | 4.5 - 5.5 | 4.2 - 5.8 |
| Peak VCD | $10^6$ cells/mL | 20.0 | 16.0 - 24.0 | 15.0 - 25.0 |
| **Downstream** | | | | |
| Step 1 Yield | % | 85.0 | > 78.0 | > 75.0 |
| Viral Inactivation pH | pH | 3.65 | 3.50 - 3.80 | 3.45 - 3.85 |
| **Drug Substance** | | | | |
| Potency (Bioassay) | % Relative | 100.0 | 85.0 - 115.0 | 80.0 - 120.0 |
| Endotoxin | EU/mg | < 0.05 | 0.04 | 0.05 |

---

### 6.0 STATISTICAL RULES FOR INTERPRETATION (WECO & NELSON)

To ensure proactive intervention, GHS applies the Western Electric Rules (WECO) to all Glucogen-XR SPC charts:

1.  **Rule 1:** Any single point falls outside the $3\sigma$ control limits.
2.  **Rule 2:** Two out of three consecutive points fall beyond the $2\sigma$ warning limit on the same side of the mean.
3.  **Rule 3:** Four out of five consecutive points fall beyond the $1\sigma$ limit on the same side of the mean.
4.  **Rule 4:** Eight consecutive points fall on the same side of the mean (indicating a process shift).
5.  **Rule 5:** Six consecutive points increasing or decreasing (indicating a trend/drift).

**Escalation Protocol (SOP-REG-SPC-09):**
*   **Level 1 (Alert):** Violation of Rule 2 or 3. Investigation by Process Engineer. No batch hold required.
*   **Level 2 (Action):** Violation of Rule 1, 4, or 5. Quality Incident (QI) opened. Production Manager must authorize next step.
*   **Level 3 (OOS):** Result outside of Specification. Full Root Cause Analysis (RCA) via Ishikawa diagram and 5-Whys.

---

### 7.0 RAW MATERIAL VARIABILITY TRACKING

GHS recognizes that Glucogen-XR consistency is highly dependent on the variability of the chemically defined media (GHS-CDM-002).

#### 7.1 Vendor Lot SPC Analysis
GHS tracks the concentration of Trace Metals (Zinc, Copper) in the incoming media lots using ICP-MS.

| Media Lot ID | Zn Conc. ($\mu$M) | Cu Conc. ($\mu$M) | Related DS Batches | Yield Impact |
| :--- | :--- | :--- | :--- | :--- |
| MED-2025-A1 | 14.2 | 2.1 | GLUC-2025-001/002 | Baseline |
| MED-2025-A2 | 14.5 | 2.3 | GLUC-2025-003/004 | +2% |
| MED-2025-A3 | 11.2 | 1.8 | GLUC-2025-005/006 | -5% (See Alert) |

The reduction in Zinc concentration in lot `MED-2025-A3` was statistically correlated ($R^2 = 0.89$) with the harvest titer dip observed in batch GLUC-2025-005. Consequently, GHS has tightened the Raw Material Specification (RMS) for Zinc to $14.0 \pm 1.0 \mu M$.

---

### 8.0 ANNUAL PRODUCT REVIEW (APR) AND CONTINUED PROCESS VERIFICATION (CPV)

On an annual basis, the SPC data is aggregated into the Glucogen-XR APR. The CPV plan (PLN-GLUC-CPV) requires a re-evaluation of control limits every 30 batches or 12 months, whichever comes first.

**Statistical Software utilized:**
*   SAS® JMP v17.2 for advanced modeling.
*   Minitab® v21 for standard control charting.
*   Google Vertex AI for predictive maintenance and drift forecasting.

**Conclusion:**
The Statistical Process Control framework for Glucogen-XR ensures that every unit of the glucapeptide extended-release therapeutic is manufactured under a state of high statistical control. By integrating real-time cloud-based monitoring with traditional Shewhart methodologies, Google Health Sciences guarantees the safety, purity, and potency of the drug substance for the treatment of Type 2 Diabetes Mellitus.

---
*End of Subsection 3.2.S.2.4.X*

---

# Process Validation

## Validation Strategy and Lifecycle Approach

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.5: PROCESS VALIDATION AND EVALUATION
### SUBSECTION: VALIDATION STRATEGY AND LIFECYCLE APPROACH (GLUCOGEN-XR)

---

#### 1.0 INTRODUCTION AND REGULATORY COMPLIANCE STATEMENT
Google Health Sciences (GHS), a Division of Google Cloud Life Sciences, adopts a holistic, science-based, and risk-oriented lifecycle approach to the process validation of **Glucogen-XR (glucapeptide extended-release)**. This strategy is strictly aligned with the **FDA Guidance for Industry: Process Validation: General Principles and Practices (January 2011)** and the International Council for Harmonisation (ICH) guidelines, specifically:

*   **ICH Q8(R2):** Pharmaceutical Development
*   **ICH Q9:** Quality Risk Management
*   **ICH Q10:** Pharmaceutical Quality System
*   **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities)

The validation of Glucogen-XR manufacture utilizes a Three-Stage Lifecycle approach, integrating Process Design (Stage 1), Process Qualification (Stage 2), and Continued Process Verification (Stage 3). This ensures that the manufacturing process is capable of consistently delivering a drug substance that meets its critical quality attributes (CQAs) and predefined specifications.

---

#### 2.0 VALIDATION LIFECYCLE OVERVIEW

The following table summarizes the integrated validation framework applied to the GHS-CHO-001 cell line-derived Glucogen-XR process.

**Table 2-1: Glucogen-XR Validation Lifecycle Matrix**

| Lifecycle Stage | Objective | Key Deliverables | Regulatory Focus |
| :--- | :--- | :--- | :--- |
| **Stage 1: Process Design** | Define Process Design Space and Control Strategy | DoE Studies, QTPP definition, Risk Assessments (pFMEA) | ICH Q8, Q11 |
| **Stage 2: Process Qualification** | Confirm process design and reproducibility | PPQ Protocol (GLUC-2025-PPQ-01), Facility/Equipment IQ/OQ | FDA 2011 Guidance |
| **Stage 3: Continued Process Verification (CPV)** | Ongoing assurance of process control | CPV Reports (Quarterly), Annual Product Reviews (APR) | ICH Q10 |

---

#### 3.0 STAGE 1: PROCESS DESIGN AND RISK MANAGEMENT

##### 3.1 Quality Target Product Profile (QTPP) and CQAs
The foundation of the Glucogen-XR validation strategy is the definition of the QTPP. The primary goal is the subcutaneous delivery of a stable GLP-1 receptor agonist with extended-release kinetics.

**Table 3-1: Critical Quality Attributes (CQAs) for Glucogen-XR DS**

| CQA ID | Attribute | Analytical Method | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| CQA-01 | Purity (Monomer) | SE-HPLC (Method MET-001) | ≥ 98.0% |
| CQA-02 | Potency (In-vitro) | Cell-based Bioassay (MET-005) | 80% – 125% of Reference |
| CQA-03 | Glycan Profile | HILIC-FLD (Method MET-012) | Within Established Range |
| CQA-04 | Host Cell Protein | ELISA (Method MET-022) | < 100 ppm |
| CQA-05 | Host Cell DNA | qPCR (Method MET-025) | < 10 ng/dose |

##### 3.2 Quality Risk Management (QRM) Process
GHS utilizes Failure Mode and Effects Analysis (FMEA) to identify Critical Process Parameters (CPPs). 

**Calculation Formula for Risk Priority Number (RPN):**
$$RPN = S \times O \times D$$
*   **S (Severity):** Impact on CQA (1-10)
*   **O (Occurrence):** Likelihood of deviation based on historical GHS-CHO-001 data (1-10)
*   **D (Detectability):** Likelihood of detection by PAT or offline testing (1-10)

*Note: Any parameter with an RPN > 40 is classified as a CPP and included in the PPQ monitoring plan.*

---

#### 4.0 STAGE 2: PROCESS QUALIFICATION (PPQ)

Stage 2 represents the transition from development to commercial manufacturing. It is divided into two sub-stages:
1.  **Stage 2a:** Design of Facility and Qualification of Utilities/Equipment.
2.  **Stage 2b:** Process Performance Qualification (PPQ).

##### 4.1 PPQ Campaign Strategy
The PPQ campaign for Glucogen-XR consists of three (3) consecutive successful batches manufactured at the 2,000L scale at the South San Francisco facility (Building 3000).

**Table 4-1: PPQ Batch Identification and Scheduled Parameters**

| Batch Number | Scale | Site ID | Rationale |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | SSF-01-B3 | Initial PPQ Run (Confirmatory) |
| **GLUC-2025-002** | 2,000L | SSF-01-B3 | Reproducibility Run |
| **GLUC-2025-003** | 2,000L | SSF-01-B3 | Final PPQ Run / Release for Stability |

##### 4.2 Upstream Process Validation Parameters (USP)
The GHS-CHO-001 GS knockout line requires stringent metabolic monitoring.

**Step-by-Step Protocol: Bioreactor Inoculation and Expansion**
1.  **Thaw:** Vials from WCB (Lot WCB-2024-X) thawed at 37°C.
2.  **Seed Train:** Expansion in N-1 Wave Bioreactor until VCD reaches $6.0 \times 10^6$ cells/mL.
3.  **Transfer:** Inoculate 2,000L Production Bioreactor at an initial density of $0.5 \pm 0.05 \times 10^6$ cells/mL.

**Table 4-2: Upstream CPPs and IPC Limits**

| Parameter | Unit | Target | Control Range | Method |
| :--- | :--- | :--- | :--- | :--- |
| Temperature | °C | 36.5 | 36.0 – 37.0 | PID Control |
| pH (Pre-shift) | pH | 7.00 | 6.85 – 7.15 | Online Probe |
| Dissolved Oxygen | % | 40.0 | 30.0 – 50.0 | Sparging ($O_2/Air$) |
| Glucose Conc. | g/L | 4.0 | 2.0 – 6.0 | Off-line BioProfile |

##### 4.3 Downstream Process Validation Parameters (DSP)
The purification process employs a three-step chromatography strategy (Protein A Capture, AEX, CEX) followed by Nanofiltration.

**Step-by-Step Protocol: Protein A Affinity Chromatography**
1.  **Equilibration:** 5 CV of 20mM Sodium Phosphate, 150mM NaCl, pH 7.2.
2.  **Loading:** Filtered Harvest loaded at $\leq 30$ g/L resin.
3.  **Wash 1:** High salt wash to remove HCPs (1M NaCl).
4.  **Elution:** 50mM Citrate, pH 3.5.
5.  **Low pH Viral Inactivation:** Hold eluate at pH $3.55 \pm 0.05$ for $60 \pm 5$ minutes at $20^{\circ}C$.

---

#### 5.0 ANALYTICAL METHOD VALIDATION
All methods used for PPQ batch release have been validated per **USP <1225>** and **ICH Q2(R1)**. 

**Table 5-1: Summary of Analytical Validation Results for SE-HPLC**

| Parameter | Result | Acceptance Criteria | Status |
| :--- | :--- | :--- | :--- |
| Linearity ($r^2$) | 0.9998 | ≥ 0.995 | Pass |
| Precision (RSD %) | 0.45% | ≤ 2.0% | Pass |
| Accuracy (Recovery) | 99.2% | 98.0% – 102.0% | Pass |
| LOD | 0.01 mg/mL | Report | Pass |

---

#### 6.0 STAGE 3: CONTINUED PROCESS VERIFICATION (CPV)

Post-PPQ, Glucogen-XR enters the CPV phase. This phase utilizes Google Cloud's AI/ML infrastructure to monitor process trends in real-time.

##### 6.1 Statistical Monitoring Plan
Data from every commercial batch (GLUC-2025-XXX) is uploaded to the **GHS Vertex AI Quality Platform**. 

**Calculations for Process Capability ($C_{pk}$):**
$$C_{pk} = \min \left[ \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right]$$
Where:
*   $\mu$ = Process Mean
*   $\sigma$ = Standard Deviation
*   USL/LSL = Upper and Lower Specification Limits

**Action Limits:**
*   **$C_{pk} \geq 1.33$:** Process is highly capable.
*   **$1.00 \leq C_{pk} < 1.33$:** Process is capable; increase monitoring frequency.
*   **$C_{pk} < 1.00$:** Process is not capable; initiate CAPA investigation.

---

#### 7.0 VALIDATION OF ANCILLARY SYSTEMS

##### 7.1 Cleaning Validation (CV)
Cleaning procedures for the 2,000L stainless steel bioreactors (ID: B-3000-01) are validated using a "worst-case" soil approach.
*   **Cleaning Agent:** 1% CIP-100 (Alkaline)
*   **Analytical Target:** Glucogen-XR peptide residues and TOC.
*   **Acceptance Limit:** $\leq 10$ ppm or 1/1000th of the lowest clinical dose.

##### 7.2 Media Fill / Aseptic Process Simulation (APS)
To validate the aseptic filling of Glucogen-XR, three consecutive media fills (Tryptic Soy Broth) are performed annually.
*   **Target:** Zero growth in 5,000 units per run.
*   **Incubation:** 7 days at 20-25°C followed by 7 days at 30-35°C.

---

#### 8.0 DEVIATION MANAGEMENT AND CHANGE CONTROL
Any deviation during the PPQ campaign (e.g., a temperature excursion in Batch GLUC-2025-002) will be documented in the GHS Quality Management System (QMS). Impact assessments will determine if the deviation affects the "Validated State." Changes to the validated process will follow **ICH Q12** principles for post-approval lifecycle management.

---

#### 9.0 CONCLUSION
The validation strategy for Glucogen-XR ensures that Google Health Sciences maintains a state of control throughout the product lifecycle. By integrating rigorous Stage 2 PPQ with advanced Stage 3 CPV monitoring, GHS guarantees that the GLP-1 therapy consistently meets the highest standards of safety, identity, strength, quality, and purity.

---
**Approvals:**
*   *Head of Quality Assurance, Google Health Sciences*
*   *Director of Regulatory Affairs, Google Cloud Life Sciences*
*   *Chief Manufacturing Officer, GHS*

**Date of Issue:** 15-Oct-2024
**Document ID:** GHS-PV-2025-01-V1

---

## Process Performance Qualification (PPQ)

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.5: PROCESS VALIDATION AND EVALUATION
### SUBSECTION: PROCESS PERFORMANCE QUALIFICATION (PPQ)

---

**Document ID:** GHS-GLUC-XR-M3-PV-PPQ-001  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA  
**Regulatory Status:** Pre-Approval Submission (IND/BLA)  
**Revision:** 1.0  

---

#### 1.0 Executive Summary

The Process Performance Qualification (PPQ) for Glucogen-XR Drug Substance (DS) represents the culmination of Stage 2 of the Process Validation lifecycle, in alignment with the FDA Guidance for Industry: *Process Validation: General Principles and Practices (2011)* and ICH Q8, Q9, Q10, and Q11. This section details the successful completion of three (3) consecutive conformance lots (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) at the commercial scale of 2,000L.

The PPQ strategy was designed to demonstrate that the commercial manufacturing process—utilizing the GHS-CHO-001 cell line and Google’s proprietary Cloud-Integrated Bioprocessing (CIB) system—consistently produces Glucogen-XR of the requisite quality, purity, and potency. All predetermined Critical Process Parameters (CPPs) were maintained within defined ranges, and all Critical Quality Attributes (CQAs) met the established acceptance criteria.

#### 2.0 Scope and Objectives

The scope of this PPQ study encompasses the entire drug substance manufacturing process, from the thawing of the Working Cell Bank (WCB) through cell culture expansion, production bioreactor phases, harvest, downstream purification, and final formulation/filling of the Drug Substance.

**Primary Objectives:**
1.  Verify that the commercial-scale manufacturing process is robust and reproducible.
2.  Confirm that Critical Process Parameters (CPPs) and Key Process Parameters (KPPs) are maintained within the Proven Acceptable Ranges (PARs) defined during Process Design (Stage 1).
3.  Demonstrate that the process effectively removes process-related impurities (HCP, ProA, DNA) and product-related impurities (aggregates, fragments).
4.  Establish a baseline for Continuous Process Verification (CPV, Stage 3).

#### 3.0 Regulatory and Quality Standards

All activities were conducted under Current Good Manufacturing Practices (cGMP) and in accordance with the following:
*   **FDA:** *Guidance for Industry: Process Validation: General Principles and Practices (2011)*.
*   **ICH Q5A:** *Viral Safety Evaluation of Biotechnology Products*.
*   **ICH Q5B:** *Analysis of the Expression Construct in Cells*.
*   **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*.
*   **USP <1058>:** *Analytical Instrument Qualification*.
*   **USP <1225>:** *Validation of Compendial Procedures*.

#### 4.0 Batch Identification and Manufacturing Schedule

The PPQ campaign was executed over a three-month period at the South San Francisco facility (Building 4, Suite 200).

| Batch Number | Batch Role | Start Date | Completion Date | Manufacturing Suite |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | PPQ Run 1 | 15-JAN-2025 | 08-FEB-2025 | Suite 202 (CIB-1) |
| **GLUC-2025-002** | PPQ Run 2 | 22-JAN-2025 | 15-FEB-2025 | Suite 202 (CIB-1) |
| **GLUC-2025-003** | PPQ Run 3 | 29-JAN-2025 | 22-FEB-2025 | Suite 202 (CIB-1) |

#### 5.0 Upstream Process Performance (Cell Culture & Harvest)

##### 5.1 Inoculum Expansion (N-x to N-1)
The expansion phase involves the sequential scale-up from a 1.0 mL WCB vial to the N-1 bioreactor. Parameters monitored include Viable Cell Density (VCD), viability, and doubling time.

**Table 1: Inoculum Expansion Performance Metrics (Average of 3 runs)**

| Parameter | Unit | Acceptance Criteria | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **VCD at Transfer (N-1)** | x10⁶ cells/mL | 12.0 – 18.0 | 15.4 | 14.9 | 15.8 |
| **Viability at Transfer** | % | ≥ 95.0% | 98.2% | 97.9% | 98.5% |
| **Population Doubling Time** | Hours | 22.0 – 28.0 | 24.1 | 24.5 | 23.8 |
| **Metabolic Profile (Gluc)** | g/L | 2.0 – 5.0 | 3.4 | 3.2 | 3.5 |

##### 5.2 Production Bioreactor (N Stage - 2,000L)
The production bioreactor utilizes a fed-batch strategy with Google’s "SmartFeed" AI-driven nutrient delivery system. Control of pH, Dissolved Oxygen (DO), and Temperature is critical for the glycosylation profile of Glucogen-XR.

**Table 2: Production Bioreactor CPP/KPP Control Summary**

| Process Parameter | Type | Setpoint/Range | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Temperature** | CPP | 36.5 ± 0.5°C | 36.5 ± 0.1 | 36.5 ± 0.1 | 36.5 ± 0.1 | PASS |
| **pH (Pre-shift)** | CPP | 7.00 ± 0.10 | 7.01 ± 0.02 | 6.99 ± 0.03 | 7.02 ± 0.02 | PASS |
| **DO Saturation** | KPP | 40% ± 10% | 40.2% | 39.8% | 40.5% | PASS |
| **VCD Peak** | KPP | Report | 24.5 x10⁶ | 23.9 x10⁶ | 25.1 x10⁶ | N/A |
| **Harvest Viability** | CPP | ≥ 70% | 82.4% | 81.1% | 83.7% | PASS |
| **Titer (Protein A)** | KPP | ≥ 3.5 g/L | 4.12 g/L | 3.98 g/L | 4.25 g/L | PASS |

###### 5.2.1 Statistical Analysis of Titer Consistency
The titer results across the three PPQ batches were analyzed using the JMP 17 Statistical Discovery Software. 
*   **Mean Titer:** 4.117 g/L
*   **Standard Deviation:** 0.135
*   **Coefficient of Variation (%CV):** 3.28%
*   **P-value (Levene's Test):** 0.89 (indicating no significant difference in variance).

#### 6.0 Downstream Process Performance (Purification)

The purification process consists of Protein A Capture, Low pH Inactivation, Cation Exchange (CEX) Chromatography, Anion Exchange (AEX) Chromatography, Viral Filtration (VF), and Ultrafiltration/Diafiltration (UF/DF).

##### 6.1 Protein A Capture (Unit Operation 04)
The Protein A step is critical for primary purification and volume reduction.

**Table 3: Protein A Step Performance**

| Parameter | Unit | Acceptance Criteria | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Step Yield** | % | 85.0 – 105.0 | 94.2% | 92.8% | 95.1% |
| **Eluate pH** | pH | 3.4 – 3.8 | 3.58 | 3.61 | 3.55 |
| **HCP Reduction** | LRV | ≥ 2.0 | 2.4 | 2.3 | 2.5 |
| **HMW (SEC-HPLC)** | % | ≤ 5.0% | 1.8% | 2.1% | 1.9% |

##### 6.2 Viral Inactivation and Filtration
Viral safety is ensured through a multi-modal approach (Low pH and 20nm Filtration).

**Table 4: Viral Clearance Confirmation**

| Step | Parameter | Target | Actual (Avg) | Validation Status |
| :--- | :--- | :--- | :--- | :--- |
| **Low pH Inactivation** | Incubation Time | 60 – 90 min | 72 min | Validated |
| **Low pH Inactivation** | Target pH | 3.50 ± 0.1 | 3.51 | Validated |
| **Viral Filtration** | Flux (LMH) | 20 – 50 | 34.5 | Validated |
| **Viral Filtration** | Integrity Test | Pass | PASS | Validated |

##### 6.3 Final UF/DF and Formulation (Unit Operation 09)
This step concentrates the drug substance to the target concentration of 100 mg/mL in the formulation buffer (Histidine-HCl, Sucrose, Polysorbate 20).

**Table 5: UF/DF and Final Formulation Results**

| Attribute | Method | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Protein Conc.** | UV A280 | 95 - 105 mg/mL | 100.2 | 99.8 | 101.1 |
| **Final pH** | Potentiometric | 6.0 ± 0.3 | 6.1 | 6.0 | 6.0 |
| **Osmolality** | Freezing Pt | 280 - 340 mOsm | 305 | 312 | 308 |
| **Bioburden** | USP <61> | ≤ 10 CFU/10mL | < 1 | < 1 | < 1 |
| **Endotoxin** | USP <85> | ≤ 0.5 EU/mg | < 0.05 | < 0.05 | < 0.05 |

#### 7.0 Analytical Results and CQA Assessment (Drug Substance)

The following table summarizes the release data for the three PPQ batches against the proposed commercial specification.

**Table 6: PPQ Batch Release Data Summary**

| Test Category | Attribute | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Identity** | RT (HPLC) | Conforms to Ref | Conforms | Conforms | Conforms |
| **Purity** | SEC-HPLC (Monomer) | ≥ 98.0% | 99.4% | 99.2% | 99.5% |
| **Purity** | Reduced SDS-PAGE | Main Band ≥ 95% | 98.9% | 98.7% | 99.1% |
| **Charge Heterogeneity** | iCE (Main Peak) | 60.0 – 75.0% | 68.4% | 67.9% | 69.1% |
| **Potency** | In Vitro Bioassay | 80 – 125% | 102% | 98% | 105% |
| **Impurities** | Host Cell Protein | ≤ 100 ppm | 12 ppm | 15 ppm | 11 ppm |
| **Impurities** | Residual DNA | ≤ 10 pg/mg | < 1 pg/mg | < 1 pg/mg | < 1 pg/mg |
| **Appearance** | Visual | Clear, Colorless | Pass | Pass | Pass |

#### 8.0 Process Deviations and Non-Conformances

During the execution of the PPQ campaign, one (1) minor deviation was recorded.

*   **Deviation ID:** DEV-2025-042 (Batch GLUC-2025-002)
*   **Description:** A momentary spike in the CEX column inlet pressure was observed during the loading phase due to a partially clogged pre-filter.
*   **Impact Assessment:** The filter was swapped out as per SOP-GHS-009. The elution profile and HMW removal were unaffected. The product met all specifications. 
*   **Root Cause:** Lot-to-lot variability in the filter membrane permeability.
*   **CAPA:** Updated the filter sizing calculation to include a 20% safety margin for the CEX loading step.

#### 9.0 Cleaning Validation Linkage

The PPQ runs served as the "dirty hold time" and "cleaning verification" vehicles for the automated CIP (Clean-in-Place) cycles. Following each run, swab samples and rinse water were analyzed for Total Organic Carbon (TOC) and residual protein.

**Table 7: Post-PPQ Cleaning Verification (Selected Data)**

| Equipment | Parameter | Limit | Result (GLUC-2025-003) |
| :--- | :--- | :--- | :--- |
| **2000L Bioreactor** | TOC (Rinse) | < 500 ppb | 112 ppb |
| **Protein A Column** | Residual Protein | < 1.0 µg/cm² | 0.04 µg/cm² |
| **UF/DF Skid** | Conductivity | < 1.3 µS/cm | 0.82 µS/cm |

#### 10.0 Conclusion

The PPQ campaign for Glucogen-XR Drug Substance successfully demonstrated that the manufacturing process is capable of consistent, high-quality production at the 2,000L scale. All three batches met the pre-defined acceptance criteria for process performance and product quality. The analytical data shows a high degree of inter-batch consistency, with %CV values for critical attributes well below the 5% threshold.

Based on these results, the process for Glucogen-XR is considered validated and ready for commercial supply, pending final regulatory approval.

#### 11.0 References

1.  GHS-VMP-2024: Master Validation Plan for Glucogen-XR.
2.  GHS-TR-2024-088: Small-Scale Characterization and Design Space for CIB System.
3.  USP <121> Insulin Assays (modified for glucapeptides).
4.  FDA *Guidance for Industry: Analytical Procedures and Methods Validation for Drugs and Biologics (2015)*.

---
*End of Subsection 3.2.S.2.5 (PPQ)*

---

## Continued Process Verification (CPV)

### 3.2.S.2.5. Process Validation and Evaluation
#### 3.2.S.2.5.4. Continued Process Verification (CPV) Protocol and Implementation Report

---

**Proprietary Information of Google Health Sciences (GHS)**
**Document ID:** GHS-GLUC-PV-004-2025
**Effective Date:** 15-OCT-2025
**Review Cycle:** Annual/Biannual
**Subject:** Continued Process Verification (CPV) for Glucogen-XR (glucapeptide extended-release) Drug Substance

---

### 1.0 Executive Summary

In alignment with the FDA Guidance for Industry, *Process Validation: General Principles and Practices (2011)*, and ICH Q10 *Pharmaceutical Quality System*, Google Health Sciences (GHS) has implemented a robust Stage 3 Continued Process Verification (CPV) program for Glucogen-XR (glucapeptide extended-release). 

The CPV program is designed to provide continual assurance that the manufacturing process remains in a state of control throughout the commercial lifecycle. This document outlines the monitoring strategy, statistical methodologies, Critical Process Parameter (CPP) tracking, and Key Performance Indicator (KPI) thresholds for the production of Glucogen-XR at the Google Cloud Life Sciences South San Francisco facility (Building 3000).

The Glucogen-XR manufacturing process utilizes a recombinant CHO-K1 GS knockout cell line (GHS-CHO-001) producing a 31-amino acid peptide fused to a proprietary extended-release moiety. Given the high potency and sensitivity of GLP-1 receptor agonists, the CPV program emphasizes glycosylation consistency, aggregate monitoring, and impurity clearance.

---

### 2.0 Regulatory Framework and Compliance Standards

The Glucogen-XR CPV program is constructed upon the following regulatory foundations:

1.  **FDA 21 CFR Part 211.100 and 211.110:** Requirements for written procedures for production and process control.
2.  **FDA Guidance for Industry (January 2011):** Process Validation: General Principles and Practices.
3.  **ICH Q8(R2):** Pharmaceutical Development (Quality by Design).
4.  **ICH Q9(R1):** Quality Risk Management.
5.  **ICH Q10:** Pharmaceutical Quality System.
6.  **ICH Q11:** Development and Manufacture of Drug Substances.
7.  **ISPE Good Practice Guide:** Process Statistics (2014) and Continued Process Verification (2016).
8.  **USP <1010>:** Analytical Data—Interpretation and Treatment.

---

### 3.0 Monitoring Strategy and Data Management

#### 3.1 Data Acquisition (Google Cloud Life Sciences Integration)
Unlike traditional legacy systems, Google Health Sciences utilizes the **Vertex AI Biotech Platform** for real-time data ingestion. 
*   **Upstream Data:** Integrated via DeltaV distributed control systems (DCS) for bioreactor parameters.
*   **Downstream Data:** Captured through UNICORN™ software and Process Analytical Technology (PAT) interfaces (Near-Infrared/Raman).
*   **Analytical Data:** Automatically synced from Empower 3 LIMS (Laboratory Information Management System).

#### 3.2 Batch Identification Strategy
For the 2025-2026 reporting period, the following batch numbering convention is utilized:
`GLUC-YYYY-NNN`
*   `GLUC`: Product Identifier
*   `YYYY`: Manufacturing Year
*   `NNN`: Sequential Batch Number (e.g., GLUC-2025-001 through GLUC-2025-150)

---

### 4.0 Upstream Process Monitoring (Stage 3A)

The upstream process for Glucogen-XR consists of an N-1 seed train and a 20,000L production bioreactor (U-20K-01).

#### 4.1 Critical Process Parameters (CPPs) and In-Process Controls (IPCs)
The following table outlines the monitoring frequency and statistical control limits (UCL/LCL) derived from the Stage 2 Process Performance Qualification (PPQ) results.

**Table 4.1: Upstream CPP/IPC Control Limits for CPV Monitoring**

| Parameter ID | Parameter Description | Unit | Target | LCL (3σ) | UCL (3σ) | Monitoring Frequency | Data Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| UP-001 | Inoculation VCD (N-1) | 10^6 cells/mL | 1.20 | 1.05 | 1.35 | Per Batch | LIMS |
| UP-002 | Viability at Harvest | % | > 92.0 | 88.5 | N/A | Per Batch | Vi-CELL |
| UP-003 | Cumulative Glucose Feed | kg | 450.0 | 425.0 | 475.0 | Continuous | DeltaV |
| UP-004 | Dissolved Oxygen (DO) | % | 40.0 | 38.5 | 41.5 | Continuous | DeltaV |
| UP-005 | pH (Post-drift correction) | pH | 7.05 | 6.95 | 7.15 | Continuous | DeltaV |
| UP-006 | Temp Shift Initiation | Hour | 120.0 | 118.0 | 122.0 | Per Batch | DeltaV |
| UP-007 | Final Titer (Glucapeptide)| g/L | 5.20 | 4.85 | 5.55 | Per Batch | HPLC |

#### 4.2 Statistical Analysis of Upstream Performance (Batches GLUC-2025-001 to GLUC-2025-010)

| Batch Number | Harvest Viability (%) | VCD at Harvest (10^6/mL) | Titer (g/L) | Lactate Peak (mmol/L) | NH3 Peak (mmol/L) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 94.2 | 18.5 | 5.15 | 22.4 | 4.2 |
| GLUC-2025-002 | 93.8 | 19.1 | 5.22 | 23.1 | 4.5 |
| GLUC-2025-003 | 94.5 | 18.8 | 5.18 | 21.8 | 4.1 |
| GLUC-2025-004 | 92.9 | 17.9 | 5.05 | 24.5 | 4.8 |
| GLUC-2025-005 | 94.1 | 18.4 | 5.21 | 22.1 | 4.3 |
| GLUC-2025-006 | 93.7 | 18.6 | 5.19 | 23.0 | 4.4 |
| GLUC-2025-007 | 95.0 | 19.3 | 5.30 | 20.9 | 3.9 |
| GLUC-2025-008 | 94.3 | 18.7 | 5.17 | 22.6 | 4.2 |
| GLUC-2025-009 | 93.9 | 18.2 | 5.11 | 23.5 | 4.6 |
| GLUC-2025-010 | 94.4 | 18.9 | 5.24 | 21.7 | 4.0 |
| **Mean** | **94.08** | **18.64** | **5.18** | **22.56** | **4.30** |
| **Std Dev** | **0.55** | **0.42** | **0.07** | **1.01** | **0.27** |
| **Cpk** | **1.26** | **1.11** | **1.57** | **N/A** | **N/A** |

*Note: Cpk calculation based on Specification Limits: Titer Lower Spec = 4.0 g/L.*

---

### 5.0 Downstream Process Monitoring (Stage 3B)

The downstream process utilizes a three-step chromatographic purification: Protein A Capture (Chrom-01), Cation Exchange (Chrom-02), and Hydrophobic Interaction (Chrom-03), followed by Nanofiltration and Tangential Flow Filtration (TFF-02).

#### 5.1 Purification Step Yield and Purity Tracking
Critical Quality Attributes (CQAs) such as High Molecular Weight (HMW) species and Host Cell Protein (HCP) levels are monitored at each elution step.

**Table 5.1: Downstream CPV Performance Data (GLUC-2025-001 to GLUC-2025-005)**

| Process Step | Attribute | Unit | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | GLUC-2025-004 | GLUC-2025-005 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Chrom-01** | Eluate Yield | % | 92.4 | 91.8 | 93.1 | 90.9 | 92.5 |
| | Purity (SEC) | % Main | 96.5 | 96.2 | 96.8 | 95.9 | 96.4 |
| **Chrom-02** | Step Yield | % | 88.5 | 89.1 | 87.9 | 88.2 | 88.7 |
| | HCP Level | ppm | 120 | 135 | 115 | 142 | 128 |
| **Chrom-03** | Step Yield | % | 94.2 | 93.8 | 94.5 | 93.5 | 94.1 |
| | HMW Species | % | 0.45 | 0.48 | 0.42 | 0.51 | 0.46 |
| **Nanofilt** | Flux (LMH) | L/m²/h | 45.2 | 44.8 | 45.5 | 43.9 | 45.0 |
| **Final UF/DF** | Conc. (mg/mL)| mg/mL | 100.2 | 99.8 | 100.5 | 99.5 | 100.1 |

#### 5.2 Calculation of Process Capability (Ppk)
For commercial release, Google Health Sciences requires a Ppk > 1.33. The formula utilized is:
$$Ppk = \min\left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
Where:
*   $\mu$ = Process Mean
*   $\sigma$ = Overall Standard Deviation
*   $USL/LSL$ = Upper/Lower Specification Limits

---

### 6.0 Analytical Methods and Reference Standards

Ongoing monitoring includes the evaluation of analytical method performance to ensure no "method drift" occurs.

#### 6.1 HPLC Assay Stability Monitoring
The potency assay for Glucogen-XR is performed via RP-HPLC (Method MET-GLUC-001). During CPV, the retention time and peak symmetry of the Working Reference Standard (WRS-2025-A) are tracked.

**Table 6.1: Method Performance Control Limits**

| Metric | Target | Warning Limit (±2σ) | Action Limit (±3σ) |
| :--- | :--- | :--- | :--- |
| Retention Time (min)| 14.50 | 14.25 - 14.75 | 14.10 - 14.90 |
| Peak Symmetry (Tailing)| 1.05 | 0.95 - 1.15 | 0.90 - 1.20 |
| Theoretical Plates (N) | > 8500 | 8200 | 8000 |

---

### 7.0 Step-by-Step CPV Implementation Protocol

#### 7.1 Protocol Number: GHS-SOP-QA-550
**Step 1: Data Collection**
*   Batch records (eBR) are closed within 10 days of manufacturing completion.
*   Data is pulled from the Vertex AI Biotech Cloud Data Lake.
*   The CPV Data Integrity Specialist verifies data accuracy against the raw instrument files.

**Step 2: Statistical Processing**
*   Control charts (Shewhart, X-bar, R-charts) are generated for all CPPs.
*   Western Electric Rules (WER) are applied to detect non-random patterns:
    1.  One point exceeds the 3σ control limit.
    2.  Eight consecutive points on one side of the mean.
    3.  Two out of three consecutive points outside 2σ.
    4.  Four out of five consecutive points outside 1σ.

**Step 3: Exception Handling (OOT and OOS)**
*   **Out of Trend (OOT):** If a trend is identified (e.g., 6 batches with increasing aggregate levels), a Low-Level Investigation (LLI) is triggered.
*   **Out of Specification (OOS):** Handled via SOP-QA-020 (Deviations and OOS).

**Step 4: Reporting**
*   **Monthly CPV Dashboard:** Distributed to Site Leadership.
*   **Quarterly CPV Review:** Presented to the Quality Management Review (QMR) board.
*   **Annual Product Review (APR):** Comprehensive summary of all CPV data for FDA submission.

---

### 8.0 Risk Assessment and Mitigation (ICH Q9 Integration)

A Failure Mode and Effects Analysis (FMEA) was conducted to identify risks to process stability during commercial scale-up.

**Table 8.1: CPV Risk Matrix**

| Process Step | Potential Failure Mode | Severity (S) | Occurrence (O) | Detection (D) | RPN | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Media Prep | Micronutrient Oxidation | 7 | 2 | 4 | 56 | Store under Nitrogen blanket; track TOC. |
| Fermentation | CO2 Accumulation | 6 | 3 | 2 | 36 | Real-time pCO2 probes; linked to agitation. |
| Chrom-01 | Resin Ligand Leaching | 8 | 2 | 5 | 80 | ELISA for Protein A leaching per batch. |
| Lyophilization | Collapse of Cake | 9 | 1 | 3 | 27 | PAT (Pirani gauge) monitoring during primary dry. |

---

### 9.0 Change Control and Continuous Improvement

Any modifications to the CPV plan, including adjustment of control limits based on accumulated data (typically after 30 batches), must be managed through the **Veeva Vault Quality Management System**.

#### 9.1 Revision of Control Limits Procedure
1.  Collect data for a minimum of 30 commercial batches.
2.  Assess process stability using the Anderson-Darling Normality Test.
3.  Recalculate 3σ limits.
4.  If the new limits are narrower than the PPQ limits, the CPV plan is updated.
5.  If the new limits are wider, a process improvement investigation is required before the limits can be expanded.

---

### 10.0 Conclusion

The Continued Process Verification program for Glucogen-XR at Google Health Sciences ensures that the glucapeptide manufacturing process remains within its validated design space. By integrating advanced cloud-based data analytics with traditional statistical process control (SPC), GHS provides the FDA with high confidence in the quality, safety, and efficacy of every batch of Glucogen-XR produced.

---
**Approved By:**
*Dr. Aris Thompson, VP of Quality Regulatory Affairs*
*Google Cloud Life Sciences*
*Date: 20-OCT-2025*

**Footnotes:**
1. GHS Internal Report R-2025-009: "Characterization of GHS-CHO-001 Post-Induction Stability."
2. Smith, J. et al. (2024). "Next-Generation CPV in Peptide Therapeutics." *Journal of Pharmaceutical Sciences.*
3. Data stored on GCP (Google Cloud Platform) Instance: `PROD-GLUC-VAULT-01`.

---

# Comparability Studies

## Pre-Commercial to Commercial Process Comparison

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.6: MANUFACTURING PROCESS DEVELOPMENT
### SUBSECTION: Pre-Commercial to Commercial Process Comparison (Comparability Studies)

---

#### 1.0 INTRODUCTION AND SCOPE OF COMPARABILITY
This subsection provides a comprehensive evaluation and side-by-side comparison of the manufacturing process for Glucogen-XR (glucapeptide extended-release), transitioning from the Pre-Commercial (Phase 3 Clinical) Process (designated as **Process V.3**) to the Commercial Manufacturing Process (designated as **Process V.4 – "Project Aurora"**).

The objective of this comparability assessment is to demonstrate that the changes implemented in the commercial process do not adversely impact the identity, strength, quality, purity, or potency of the drug substance. This assessment is conducted in alignment with **ICH Q5E: Comparability of Biotechnological/Biological Products** and **FDA Guidance for Industry: Quality Systems Approach to Pharmaceutical CGMP Regulations**.

The manufacturing transition occurred at the Google Health Sciences (GHS) facility located at 3000 Innovation Drive, South San Francisco, CA.

#### 2.0 OVERVIEW OF PROCESS CHANGES
The evolution from Process V.3 to Process V.4 was driven by the requirement for increased scale (from 2,000L to 15,000L bioreactor capacity) and the integration of Google Cloud’s "Vertex AI Manufacturing" (V-AIM) real-time predictive analytics suite.

##### 2.1 Tabulated Summary of Process Evolution
| Process Parameter | Pre-Commercial (Process V.3) | Commercial (Process V.4) | Rationale for Change |
| :--- | :--- | :--- | :--- |
| **Cell Line** | GHS-CHO-001 (Clone 14-B) | GHS-CHO-001 (Clone 14-B) | No Change |
| **Bioreactor Scale** | 2,000 L (Single-Use) | 15,000 L (Stainless Steel) | Commercial throughput requirements |
| **Feed Strategy** | Manual Bolus (Days 3, 5, 7, 9) | Predictive AI-Driven Continuous Feed | Optimization of glycosylation profile |
| **Harvest Method** | Centrifugation + Depth Filtration | High-Performance Tangential Flow (HPTFF) | Scale-up efficiency & yield |
| **Capture Step** | Protein A Affinity (Styrene-based) | High-Capacity Protein A (MabSelect PrismA) | Reduced cycle time & increased purity |
| **Viral Inactivation** | Solvent/Detergent (S/D) Treatment | Low pH Inactivation (Continuous Flow) | Process intensification |
| **Polishing Step 2** | Anion Exchange (AEX) - Bind/Elute | AEX - Membrane Chromatography (Flow-through) | Faster processing; lower buffer usage |
| **Formulation** | Manual Batch Compounding | Automated In-Line Dilution & Mixing | Reduced human error; precision control |

---

#### 3.0 COMPARABILITY PROTOCOL GHS-CMP-2025-001
To ensure statistical significance, the comparability study utilized a 3-batch versus 3-batch design.

##### 3.1 Representative Batches
The following batches were selected for the comparability exercise:
*   **Pre-Commercial Batches (Process V.3):**
    *   GLUC-2025-001 (Site: SSF-Pilot-01)
    *   GLUC-2025-002 (Site: SSF-Pilot-01)
    *   GLUC-2025-003 (Site: SSF-Pilot-01)
*   **Commercial Batches (Process V.4):**
    *   GLUC-2025-101 (Site: SSF-COMM-A1)
    *   GLUC-2025-102 (Site: SSF-COMM-A1)
    *   GLUC-2025-103 (Site: SSF-COMM-A1)

##### 3.2 Acceptance Criteria Methodology
Acceptance criteria were established based on the tolerance intervals of the Phase 3 clinical data ($\bar{x} \pm 3SD$). For Critical Quality Attributes (CQAs), a tighter specification of $\pm 2SD$ or historical process capability (Cpk > 1.33) was applied.

---

#### 4.0 UPSTREAM PROCESS COMPARISON (UP-COMP)

##### 4.1 Seed Train and Inoculum Expansion
The expansion protocol was modified to accommodate the 15,000 L production bioreactor (N-stage).

*   **Process V.3:** N-4 to N-1 stages were performed in 50L and 500L single-use bioreactors (SUBs).
*   **Process V.4:** N-1 stage was scaled to 3,000L to maintain an inoculation density of $0.5 \times 10^6$ cells/mL.

**Table 2: Comparison of Cell Growth and Viability (N-Stage)**
| Parameter | Process V.3 (Avg, n=3) | Process V.4 (Avg, n=3) | P-Value (t-test) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Peak VCD ($10^6$ cells/mL)** | $18.4 \pm 1.2$ | $19.1 \pm 0.8$ | 0.42 | Comparable |
| **Viability at Harvest (%)** | $92.3 \pm 1.5$ | $93.8 \pm 0.9$ | 0.18 | Comparable |
| **Specific Growth Rate ($\mu$ h⁻¹)** | $0.028$ | $0.029$ | 0.65 | Comparable |
| **Doubling Time (hr)** | $24.7$ | $23.9$ | 0.51 | Comparable |

##### 4.2 Bioreactor Control Strategy (V-AIM Integration)
Process V.4 utilizes the Google Vertex AI platform for real-time monitoring of Dissolved Oxygen (DO) and pH. Unlike the fixed PID loops in Process V.3, Process V.4 uses Model Predictive Control (MPC) to adjust gas flow rates (O2/Air/CO2) and nutrient feed rates based on RAMAN spectroscopy data (USP <1039>).

**Protocol for RAMAN Calibration (GHS-SOP-RAM-04):**
1.  Initialize RAMAN probe (785 nm laser) after SIP (Sterilization-in-Place).
2.  Collect spectra every 15 minutes.
3.  Cross-reference with offline BioProfile FLEX2 measurements for Glucose, Lactate, and Glutamine.
4.  Apply Partial Least Squares (PLS) regression models for real-time concentration estimation.

---

#### 5.0 DOWNSTREAM PROCESS COMPARISON (DS-COMP)

##### 5.1 Capture Chromatography (Protein A)
The scale-up to 15,000 L necessitated a transition from a 60 cm diameter column to a 160 cm diameter column (100 cm bed height).

**Table 3: Protein A Step Performance Comparison**
| Metric | Process V.3 (GLUC-2025-001/003) | Process V.4 (GLUC-2025-101/103) | Specification |
| :--- | :--- | :--- | :--- |
| **Step Yield (%)** | $94.2\% \pm 2.1\%$ | $95.8\% \pm 1.4\%$ | $\ge 85\%$ |
| **Eluate pH** | $3.55 \pm 0.05$ | $3.52 \pm 0.03$ | $3.4 - 3.7$ |
| **HCP Reduction (LRV)** | $2.4 \pm 0.2$ | $2.6 \pm 0.1$ | Report Value |
| **Leached Protein A (ng/mg)** | $4.2 \pm 1.1$ | $3.8 \pm 0.8$ | $\le 10$ |

##### 5.2 Viral Inactivation and Clearance
In Process V.4, the Low pH Viral Inactivation step was transitioned to a continuous plug-flow reactor (PFR) to minimize product exposure time to low pH, thereby reducing the formation of high molecular weight species (HMWS).

**Calculation for Residence Time in PFR:**
$$t_{res} = \frac{V_{reactor}}{Q_{flow}}$$
Where $Q_{flow} = 15.5$ L/min and $V_{reactor} = 930$ L, resulting in a residence time of 60 minutes, ensuring a safety factor of 2x the validated minimum inactivation time.

---

#### 6.0 ANALYTICAL COMPARABILITY DATA (DRUG SUBSTANCE)

##### 6.1 Primary and Secondary Structure
Characterization of primary structure was performed using LC-MS Peptide Mapping (Trypsin/Glu-C digestion).

*   **Amino Acid Sequence:** Confirmed 100% coverage for both processes. No sequence variants or unexpected modifications detected above 0.05%.
*   **Disulfide Bonding:** Correct linkages (Cys7-Cys23, etc.) were confirmed for all batches.
*   **Circular Dichroism (CD):** Far-UV spectra (190-250 nm) showed identical alpha-helical content ($42\% \pm 2\%$).

##### 6.2 Purity and Impurities (The "Comparability Matrix")

**Table 4: Side-by-Side Analytical Comparison (Release Data)**
| Attribute | Method | Process V.3 (n=3 Avg) | Process V.4 (n=3 Avg) | Difference |
| :--- | :--- | :--- | :--- | :--- |
| **Monomer Purity** | SE-HPLC | $99.12\%$ | $99.45\%$ | $+0.33\%$ |
| **HMWS (%)** | SE-HPLC | $0.65\%$ | $0.42\%$ | $-0.23\%$ |
| **LMWS (%)** | SE-HPLC | $0.23\%$ | $0.13\%$ | $-0.10\%$ |
| **Acidic Variants** | CEX-HPLC | $12.4\%$ | $11.8\%$ | $-0.6\%$ |
| **Main Peak** | CEX-HPLC | $84.2\%$ | $85.1\%$ | $+0.9\%$ |
| **Basic Variants** | CEX-HPLC | $3.4\%$ | $3.1\%$ | $-0.3\%$ |
| **Potency (GLP-1R)** | Cell-based Bioassay | $104\%$ | $102\%$ | $-2\%$ |
| **Endotoxin** | LAL (USP <85>) | $< 0.05$ EU/mg | $< 0.05$ EU/mg | N/A |

##### 6.3 Glycosylation Profile
Glucogen-XR contains a specific N-linked glycosylation site at Asn-122. Comparability of the glycan profile is critical for maintaining the extended-release PK profile.

**Table 5: Quantitative N-Glycan Analysis (2-AB Labeling)**
| Glycan Species | Process V.3 (%) | Process V.4 (%) | ∆ (Delta) |
| :--- | :--- | :--- | :--- |
| **G0F** | $45.2$ | $44.8$ | $-0.4$ |
| **G1F** | $32.1$ | $32.9$ | $+0.8$ |
| **G2F** | $8.4$ | $8.6$ | $+0.2$ |
| **Man5** | $2.1$ | $1.9$ | $-0.2$ |
| **Sialylated** | $4.5$ | $4.7$ | $+0.2$ |

---

#### 7.0 STATISTICAL ANALYSIS OF COMPARABILITY
A statistical equivalence test (TOST - Two One-Sided T-tests) was performed for critical quality attributes. The equivalence margin ($\theta$) was set at $1.5 \times SD$ of the clinical process.

**Results of TOST for Main Peak Purity (CEX-HPLC):**
*   **Mean Difference:** $0.9\%$
*   **90% CI for Difference:** $[-0.2, 2.0]$
*   **Equivalence Margin:** $\pm 2.5\%$
*   **Conclusion:** The 90% CI falls entirely within the equivalence margin; processes are statistically comparable.

---

#### 8.0 FORCED DEGRADATION STUDIES (STRESS COMPARABILITY)
To ensure the commercial process does not introduce latent instabilities, batches GLUC-2025-001 and GLUC-2025-101 were subjected to stress conditions.

1.  **Thermal Stress:** $40^\circ\text{C} / 75\% \text{ RH}$ for 4 weeks.
2.  **Photostability:** 1.2 million lux-hours (ICH Q1B).
3.  **Oxidative Stress:** $0.03\% \text{ H}_2\text{O}_2$ for 24 hours.
4.  **Low pH Stress:** pH 3.0 for 72 hours.

**Results:** Degradation pathways (primarily deamidation at Asn-44 and oxidation at Met-110) were identical in both rate and product distribution across both processes. No new degradation products were observed in Process V.4.

---

#### 9.0 CONCLUSION
Based on the extensive physicochemical, biological, and process performance data presented, Process V.4 (Commercial) is considered **comparable** to Process V.3 (Pre-Commercial). The implemented changes—including scale-up to 15,000 L and AI-driven process controls—maintain the safety and efficacy profile of Glucogen-XR as established during clinical development.

---

#### 10.0 REFERENCES
1.  ICH Q5E: Comparability of Biotechnological/Biological Products.
2.  ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  USP <121> Insulin Assays / USP <1039> Chemometrics.
4.  Google Health Sciences Technical Report: GHS-TR-2025-99 (Statistical Equivalence Report for Project Aurora).

---

## Analytical Comparability Data

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S: DRUG SUBSTANCE
### 3.2.S.2: MANUFACTURE
#### 3.2.S.2.6: MANUFACTURING PROCESS DEVELOPMENT
#### **SUBSECTION: ANALYTICAL COMPARABILITY DATA**

---

### 1.0 INTRODUCTION AND SCOPE

This subsection provides a comprehensive evaluation of the analytical comparability for **Glucogen-XR (glucapeptide extended-release)** drug substance (DS) following the transition from Phase 2 (Process Version 2.0) to the commercial-scale Phase 3/Pivotal Manufacturing Process (Process Version 3.0). The manufacturing site for the commercial process is located at Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA 94080 (Site ID: GHS-SSF-01).

The comparability exercise was designed in accordance with **ICH Q5E: Comparability of Biotechnological/Biological Products** and **FDA Guidance for Industry: Development of Therapeutic Protein Biosimilars (2015)**, adapted for internal process changes. The primary objective is to demonstrate that the changes in the manufacturing scale (from 500L to 2,000L) and the optimization of the downstream purification steps (incorporation of the proprietary Google Cloud-optimized AI-driven chromatography elution profiles) do not adversely affect the safety, identity, purity, or potency of Glucogen-XR.

#### 1.1 Summary of Manufacturing Process Changes
The transition from Process V2.0 to V3.0 involved several key modifications intended to increase yield and ensure long-term supply robustness:
*   **Scale-Up:** Increase from 500L Single-Use Bioreactor (SUB) to 2,000L SUB.
*   **Media Optimization:** Transition from GHS-Media-Alpha to GHS-Media-Delta (enriched for specific micronutrients to reduce glycan heterogeneity).
*   **Purification:** Introduction of a multi-column continuous chromatography (MCC) step for Initial Capture (Protein A replacement).
*   **Viral Inactivation:** Automated pH adjustment using real-time sensor feedback loops.

---

### 2.0 COMPARABILITY STRATEGY AND STATISTICAL APPROACH

#### 2.1 Batch Selection
Comparability was assessed by comparing three (3) representative batches from Process V2.0 (Reference Batches) against three (3) representative batches from Process V3.0 (Test Batches).

**Table 1: Identification of Batches Used in Comparability Study**

| Batch Number | Process Version | Scale (L) | Manufacturing Date | Site | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2024-012 | V2.0 | 500 | 14-MAY-2024 | GHS-SSF-01 | Reference / Phase 2 |
| GLUC-2024-015 | V2.0 | 500 | 02-JUL-2024 | GHS-SSF-01 | Reference / Phase 2 |
| GLUC-2024-018 | V2.0 | 500 | 20-SEP-2024 | GHS-SSF-01 | Reference / Phase 2 |
| **GLUC-2025-001**| **V3.0** | **2,000**| **15-JAN-2025** | **GHS-SSF-01**| **Commercial / Test**|
| **GLUC-2025-002**| **V3.0** | **2,000**| **02-FEB-2025** | **GHS-SSF-01**| **Commercial / Test**|
| **GLUC-2025-003**| **V3.0** | **2,000**| **19-FEB-2025** | **GHS-SSF-01**| **Commercial / Test**|

#### 2.2 Statistical Criteria
The "Tiered Approach" to comparability was utilized:
*   **Tier 1 (Equivalence Testing):** Applied to Critical Quality Attributes (CQAs) that are highly sensitive to process changes (e.g., Potency by Bioassay, Purity by SE-HPLC). A 90% confidence interval for the difference in means was required to fall within ±1.5 standard deviations (SD) of the reference mean.
*   **Tier 2 (Quality Ranges):** Applied to attributes with moderate sensitivity (e.g., Charge Variants by cIEF). Results must fall within $\mu \pm 3 \sigma$ of the reference batches.
*   **Tier 3 (Visual Evaluation):** Applied to qualitative data (e.g., Peptide Mapping chromatograms, UV Spectra).

---

### 3.0 ANALYTICAL CHARACTERIZATION PROTOCOLS

#### 3.1 Primary Structure and Amino Acid Sequence
The primary sequence of Glucogen-XR was confirmed using Liquid Chromatography-Mass Spectrometry (LC-MS/MS) following tryptic and Glu-C digestion.

**Protocol GHS-ANA-SEQ-09:**
1.  **Reduction/Alkylation:** 100 µg of DS reduced with 10 mM DTT at 56°C for 45 min, alkylated with 25 mM Iodoacetamide at RT in the dark for 30 min.
2.  **Digestion:** Tryptic digestion at a 1:20 (w/w) enzyme-to-protein ratio in 50 mM Ammonium Bicarbonate (pH 8.2) for 16 hours at 37°C.
3.  **Analysis:** Orbitrap Fusion Lumos Mass Spectrometer coupled with Vanquish UHPLC.
4.  **Data Processing:** Google Cloud Life Sciences Bio-Parser (v4.2) for sequence alignment against the theoretical GLP-1-XR template.

**Table 2: Primary Sequence Coverage Results**

| Batch Number | Sequence Coverage (%) | Observed Mass (Da) | Theoretical Mass (Da) | Δ (ppm) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2024-012 | 100.0% | 48,234.56 | 48,234.52 | 0.83 |
| GLUC-2025-001 | 100.0% | 48,234.54 | 48,234.52 | 0.41 |
| GLUC-2025-002 | 100.0% | 48,234.53 | 48,234.52 | 0.21 |

#### 3.2 Secondary and Tertiary Structure
**Circular Dichroism (CD) Spectroscopy:**
Far-UV (190–260 nm) and Near-UV (250–320 nm) spectra were recorded to assess alpha-helical content and aromatic environment.
*   *Equipment:* Jasco J-1500 CD Spectrometer.
*   *Parameters:* 0.1 cm path length, 20 nm/min scan speed, 1.0 nm bandwidth.

**Table 3: Secondary Structure Estimation (Mean Residue Ellipticity)**

| Attribute | V2.0 Mean (n=3) | V3.0 Mean (n=3) | Comparison Result |
| :--- | :--- | :--- | :--- |
| Alpha-Helix (%) | 42.4 ± 0.5 | 42.6 ± 0.3 | Comparable |
| Beta-Sheet (%) | 12.1 ± 0.8 | 11.9 ± 0.4 | Comparable |
| Random Coil (%) | 45.5 ± 1.2 | 45.5 ± 0.9 | Comparable |

---

### 4.0 PRODUCT PURITY AND IMPURITY PROFILES

#### 4.1 Size-Exclusion HPLC (SE-HPLC)
SE-HPLC is used to monitor the presence of high molecular weight species (HMWS) and low molecular weight species (LMWS).
*   **Column:** TSKgel G3000SWxl, 7.8 mm x 30 cm.
*   **Mobile Phase:** 0.2 M Sodium Phosphate, pH 6.8.
*   **Flow Rate:** 0.5 mL/min.

**Table 4: Purity by SE-HPLC (Comparability Data)**

| Batch Number | Monomer (%) | HMWS (%) | LMWS (%) | Retention Time (min) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2024-012 | 99.45 | 0.45 | 0.10 | 14.21 |
| GLUC-2024-015 | 99.38 | 0.52 | 0.10 | 14.22 |
| GLUC-2024-018 | 99.41 | 0.49 | 0.10 | 14.20 |
| **GLUC-2025-001**| **99.52** | **0.40** | **0.08** | **14.21** |
| **GLUC-2025-002**| **99.49** | **0.43** | **0.08** | **14.21** |
| **GLUC-2025-003**| **99.50** | **0.41** | **0.09** | **14.22** |
| **Mean (V3.0)** | **99.50** | **0.41** | **0.08** | **-** |
| **Acceptance** | **≥ 98.5%** | **≤ 1.0%** | **≤ 0.5%** | **Pass** |

#### 4.2 Charge Heterogeneity by cIEF
Capillary Isoelectric Focusing (cIEF) was utilized to determine the distribution of acidic, main, and basic variants.
*   **Instrument:** ProteinSimple iCE3.
*   **Carrier Ampholytes:** pH 3–10 Pharmalyte.

**Table 5: Charge Variant Distribution**

| Batch | Acidic Region (%) | Main Peak (%) | Basic Region (%) | Isoelectric Point (pI) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2024-015 | 14.2 | 82.5 | 3.3 | 5.42 |
| GLUC-2025-001 | 13.8 | 83.1 | 3.1 | 5.41 |
| GLUC-2025-002 | 14.0 | 82.9 | 3.1 | 5.42 |
| **Equivalence** | **Pass (Tier 2)** | **Pass (Tier 1)** | **Pass (Tier 2)** | **Pass** |

---

### 5.0 BIOLOGICAL ACTIVITY (POTENCY)

The biological activity of Glucogen-XR is measured using a cell-based reporter gene assay that quantifies GLP-1 receptor activation via cAMP production.

#### 5.1 cAMP Bioassay Protocol
1.  **Cell Line:** HEK293 cells stably transfected with the human GLP-1 receptor and a luciferase reporter gene under the control of a cAMP-responsive element (CRE).
2.  **Incubation:** Cells treated with serial dilutions of DS (0.1 pM to 10 nM) for 4 hours.
3.  **Detection:** Luciferase activity measured via EnVision Plate Reader.
4.  **Analysis:** 4-parameter logistic (4PL) curve fit; potency expressed as a percentage relative to the Reference Standard (GHS-GLP1-STD-002).

**Table 6: Biological Potency Results**

| Batch Number | Relative Potency (%) | 95% CI (Lower) | 95% CI (Upper) | Result |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2024-012 | 102 | 98 | 106 | Reference |
| GLUC-2024-015 | 98 | 94 | 102 | Reference |
| GLUC-2024-018 | 105 | 101 | 109 | Reference |
| **GLUC-2025-001**| **101** | **97** | **105** | **Test** |
| **GLUC-2025-002**| **103** | **99** | **107** | **Test** |
| **GLUC-2025-003**| **99** | **95** | **103** | **Test** |
| **V3.0 Mean** | **101.0%** | **N/A** | **N/A** | **Equivalent** |

---

### 6.0 GLYCAN ANALYSIS

Since Glucogen-XR is produced in a CHO-K1 derivative, the N-glycosylation profile is a critical quality attribute (CQA) impacting half-life and immunogenicity.

**Methodology:** PNGase F release, 2-AB labeling, and NP-HPLC with fluorescence detection.

**Table 7: Major N-Glycan Species Distribution (%)**

| Glycan Species | V2.0 Mean (n=3) | V3.0 Mean (n=3) | Difference | Tolerance (3SD) |
| :--- | :--- | :--- | :--- | :--- |
| G0F | 22.4 | 21.8 | -0.6 | ± 2.1 |
| G1F | 45.8 | 46.2 | +0.4 | ± 3.4 |
| G2F | 18.2 | 18.9 | +0.7 | ± 1.9 |
| Sialylated | 8.5 | 8.2 | -0.3 | ± 1.2 |
| Others | 5.1 | 4.9 | -0.2 | N/A |

*Note: The shift in G1F/G2F ratio is attributed to the GHS-Media-Delta formulation, which provides higher concentrations of galactose. This change is within the established design space and does not impact PK/PD based on preclinical modeling (See Section 2.6.4).*

---

### 7.0 PROCESS-RELATED IMPURITIES

Comparability of the removal of process-related impurities ensures that the modified purification process (MCC) is as effective as the Phase 2 batch process.

**Table 8: Residual Host Cell Protein (HCP) and DNA**

| Batch Number | HCP (ppm) [ELISA] | Residual DNA (pg/mg) [qPCR] | Protein A Leachate (ng/mg) |
| :--- | :--- | :--- | :--- |
| GLUC-2024-018 | 12.4 | 0.8 | 1.2 |
| **GLUC-2025-001**| **8.5** | **0.4** | **0.9** |
| **GLUC-2025-002**| **9.1** | **0.5** | **0.8** |
| **Acceptance** | **< 100 ppm** | **< 10 pg/mg** | **< 20 ng/mg** |

*Observation: The V3.0 process demonstrates superior HCP clearance compared to V2.0, likely due to the enhanced resolution of the Google Cloud AI-optimized elution gradient.*

---

### 8.0 CONCLUSION

The analytical comparability study between Process V2.0 (Phase 2) and Process V3.0 (Commercial/Pivotal) confirms that the Glucogen-XR drug substance remains highly consistent in terms of physicochemical properties, purity, biological potency, and impurity profiles. All pre-defined statistical criteria for equivalence and quality ranges were met. Consequently, the drug substance produced by the V3.0 process is considered analytically comparable to that used in Phase 2 clinical trials, supporting the use of Process V3.0 batches for commercial supply and pivotal Phase 3 studies.

---
**Footnotes & References:**
1. ICH Q5E, *Comparability of Biotechnological/Biological Products*, 2005.
2. USP <121.1>, *Physicochemical Analytical Procedures for Therapeutic Proteins*.
3. GHS Internal Report: *Statistical Analysis of Comparability for GLUC-2025 Batches (RPT-GHS-2025-044)*.
4. GHS Protocol GHS-ANA-SEQ-09: *Peptide Mapping of Glucapeptides by Orbitrap MS*.

---

## Nonclinical and Clinical Bridging if Applicable

### **3.2.S.2.6. Manufacturing Process Development**
#### **Section 3.2.S.2.6.4: Comparability Studies**
#### **Subsection: Nonclinical and Clinical Bridging if Applicable**

---

### **1.0 Introduction and Scope**
This section details the Nonclinical and Clinical Bridging program implemented by **Google Health Sciences (GHS)** to support the transition of **Glucogen-XR (glucapeptide extended-release)** from Phase II clinical materials (Process Gen-1) to the proposed commercial-scale manufacturing process (Process Gen-2). 

The bridging strategy follows the principles outlined in **ICH Q5E (Comparability of Biotechnological/Biological Products)** and **FDA Guidance for Industry: Demonstration of Comparability of Human Biological Products, Including Therapeutic Proteins.** The primary objective is to demonstrate that the changes in the manufacturing process—specifically the transition from a 500L fed-batch system to a 2,000L intensified perfusion-capable system—do not adversely affect the safety, identity, purity, or efficacy of Glucogen-XR.

#### **1.1 Overview of Process Changes Subject to Bridging**
| Parameter | Phase II Process (Gen-1) | Commercial Process (Gen-2) | Rationale for Change |
| :--- | :--- | :--- | :--- |
| **Scale** | 500 L Single-Use Bioreactor (SUB) | 2,000 L Stainless Steel (SS) | Commercial demand forecast |
| **Cell Line** | GHS-CHO-001 (Original Clone) | GHS-CHO-001 (Sub-cloned for Stability) | Long-term genetic stability |
| **Media** | GHS-Basal-V2 (Liquid) | GHS-Basal-V3 (Dry Powder Reconstituted) | Supply chain optimization |
| **Purification** | 3-Column Chromatography | 3-Column + Inline Viral Filtration | Enhanced viral safety margin |
| **Formulation** | Liquid Vials | Extended-Release Lyophilized Powder | Enhanced shelf-life stability |

---

### **2.0 Analytical Comparability Framework**
Before initiating nonclinical and clinical bridging, an extensive analytical comparability exercise was conducted. Three (3) Consistency Batches from the commercial process (Gen-2) were compared against five (5) Phase II clinical batches (Gen-1).

#### **Table 2.1: Batch Genealogy for Bridging Studies**
| Batch Number | Process Version | Site | Purpose |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Gen-1 | SSF-Bldg-A | Phase II Clinical Supply |
| **GLUC-2025-002** | Gen-1 | SSF-Bldg-A | Phase II Clinical Supply |
| **GLUC-2025-005** | Gen-1 | SSF-Bldg-A | Retained Stability Samples |
| **GLUC-2025-501** | Gen-2 | SSF-Bldg-C | Process Validation (PPQ-1) |
| **GLUC-2025-502** | Gen-2 | SSF-Bldg-C | Process Validation (PPQ-2) |
| **GLUC-2025-503** | Gen-2 | SSF-Bldg-C | Process Validation (PPQ-3) |

#### **2.2 Statistical Methods for Bridging Assessment**
Comparability was assessed using a **Tiered Statistical Approach**:
*   **Tier 1 (Critical Quality Attributes - CQAs):** Equivalence Testing (Two-One Sided T-Test, TOST) with a margin of $\pm 3\sigma$.
*   **Tier 2 (Key Quality Attributes):** Quality Range (QR) method ($Mean \pm 3SD$).
*   **Tier 3 (Process Performance):** Visual trend analysis and descriptive statistics.

---

### **3.0 Nonclinical Bridging Program (Pharmacology/Toxicology)**
To bridge the Gen-1 and Gen-2 processes, GHS conducted a 4-week comparative repeat-dose toxicity study in Cynomolgus monkeys (Macaca fascicularis).

#### **3.1 Study Design: Study GHS-TOX-2025-09**
*   **Test Systems:** Cynomolgus monkeys (N=5/sex/group).
*   **Administration:** Subcutaneous injection, once weekly.
*   **Dose Levels:** 0 (Vehicle), 1.0 mg/kg (Gen-1), 1.0 mg/kg (Gen-2).
*   **Duration:** 28 days with a 14-day recovery period.

#### **3.2 Pharmacokinetic (PK) Comparison**
PK parameters were analyzed to ensure bioequivalence between the two manufacturing processes.

**Table 3.2.1: Comparative PK Parameters (Mean ± SD)**
| Parameter | Unit | Gen-1 (GLUC-2025-002) | Gen-2 (GLUC-2025-501) | GMR (90% CI) |
| :--- | :--- | :--- | :--- | :--- |
| **$C_{max}$** | ng/mL | $452.3 \pm 38.4$ | $458.1 \pm 41.2$ | 1.01 (0.94 - 1.08) |
| **$AUC_{0-168h}$** | ng·h/mL | $12,450 \pm 1,120$ | $12,680 \pm 1,310$ | 1.02 (0.96 - 1.09) |
| **$T_{max}$** | h | $24.5 \pm 2.1$ | $23.8 \pm 2.4$ | N/A |
| **$T_{1/2}$** | h | $112.4 \pm 12.8$ | $115.1 \pm 14.2$ | N/A |

**Calculation Note:** The Geometric Mean Ratio (GMR) for $C_{max}$ and $AUC$ falls within the 0.80–1.25 acceptance interval, confirming PK equivalence in the nonclinical model.

#### **3.3 Immunogenicity Assessment (ADA Bridging)**
Anti-drug antibody (ADA) profiles were monitored using a validated bridging Electrochemiluminescence (ECL) assay.
*   **Gen-1 Incidence:** 1/10 (10%) - Low titer, non-neutralizing.
*   **Gen-2 Incidence:** 1/10 (10%) - Low titer, non-neutralizing.
*   **Conclusion:** No statistically significant difference in immunogenic potential ($p > 0.05$).

---

### **4.0 Clinical Bridging Strategy**
Per FDA advice (Type B Meeting, Oct 2024), a dedicated Phase I clinical PK/PD bridging study (Protocol GHS-GLUC-104) was performed to definitively link the Gen-1 and Gen-2 materials.

#### **4.1 Protocol GHS-GLUC-104: Randomized, Double-Blind, Cross-over Study**
*   **Population:** 48 Healthy Volunteers.
*   **Treatment A:** Single 5mg dose of Glucogen-XR (Gen-1, Batch GLUC-2025-005).
*   **Treatment B:** Single 5mg dose of Glucogen-XR (Gen-2, Batch GLUC-2025-502).
*   **Washout:** 42 days.

#### **4.2 Clinical PK Results**
The primary endpoints were $AUC_{inf}$ and $C_{max}$.

**Table 4.2.1: Clinical PK Equivalence Data**
| Endpoint | Gen-1 (n=48) | Gen-2 (n=48) | Ratio (%) | 90% Confidence Interval |
| :--- | :--- | :--- | :--- | :--- |
| $C_{max}$ (pg/mL) | 895.4 | 912.2 | 101.8% | 96.4% - 107.5% |
| $AUC_{0-t}$ (pg·h/mL) | 48,500 | 49,200 | 101.4% | 95.2% - 108.1% |

#### **4.3 Pharmacodynamic (PD) Bridging: Glucose Excursion Control**
PD was measured via Mean Amplitude of Glycemic Excursion (MAGE) following a Mixed Meal Tolerance Test (MMTT).

**Table 4.3.1: Comparative PD Metrics**
| Metric | Gen-1 | Gen-2 | Difference (95% CI) |
| :--- | :--- | :--- | :--- |
| **Max Glucose (mg/dL)** | $134.2 \pm 12.1$ | $135.5 \pm 11.8$ | 1.3 (-2.1 to 4.7) |
| **Insulin AUC (uU/mL·h)** | $458 \pm 54$ | $462 \pm 51$ | 4 (-12 to 20) |

---

### **5.0 Detailed Analytical Characterization (The "Scientific Bridge")**
To support the biological findings, high-resolution mass spectrometry (HRMS) was used to ensure the molecular fingerprint remained unchanged.

#### **5.1 Peptide Mapping (LC-MS/MS)**
Peptide mapping using Trypsin/Glu-C digestion confirmed 100% sequence coverage for both batches.
*   **Procedure ID:** GHS-SOP-QC-9921
*   **Equipment:** Thermo Fisher Orbitrap Exploris 480
*   **Batch Comparison:** GLUC-2025-002 vs GLUC-2025-501.
*   **Result:** No new peaks detected $>0.05\%$ relative abundance.

#### **5.2 Glycan Profiling (N-linked)**
Although Glucogen-XR is a peptide, the C-terminal fusion fragment contains one N-glycosylation site (Asn-142).

**Table 5.2.1: Relative Percent of Glycoforms**
| Glycan Species | Gen-1 (%) | Gen-2 (%) | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **G0F** | 45.2 | 44.8 | 40.0 - 50.0% |
| **G1F** | 32.1 | 31.9 | 28.0 - 35.0% |
| **G2F** | 8.4 | 8.6 | 5.0 - 12.0% |
| **Sialylated** | 2.1 | 2.3 | $\leq 5.0\%$ |

---

### **6.0 Impurity Bridging**
A critical component of bridging is ensuring the impurity profile of the commercial process is equal to or better than the clinical process.

#### **6.1 Product-Related Impurities**
Measured by Reverse-Phase HPLC (RP-HPLC) and Size-Exclusion Chromatography (SEC).

**Table 6.1.1: Impurity Levels**
| Impurity | Gen-1 (Avg) | Gen-2 (Avg) | Trend |
| :--- | :--- | :--- | :--- |
| **High Mol. Wt. (HMW)** | 0.82% | 0.45% | Improved |
| **Deamidated Species** | 1.15% | 1.08% | Comparable |
| **Oxidized Species** | 0.54% | 0.49% | Comparable |
| **Truncated Variants** | 0.33% | 0.21% | Improved |

#### **6.2 Process-Related Impurities**
Comparison of Host Cell Protein (HCP) and Residual DNA.

**Table 6.2.1: Host Cell Residuals**
| Impurity | Method | Gen-1 | Gen-2 | USP/ICH Limit |
| :--- | :--- | :--- | :--- | :--- |
| **HCP** | ELISA | 12 ppm | 8 ppm | $< 100$ ppm |
| **rDNA** | qPCR | 2 pg/mg | $< 1$ pg/mg | $< 10$ pg/mg |
| **Protein A** | ELISA | 1.2 ng/mg | 0.8 ng/mg | N/A |

---

### **7.0 Stability Data Bridging**
Stability profiles of Gen-1 and Gen-2 materials were compared under accelerated conditions ($25^\circ C/60\% RH$).

#### **7.1 Comparison of Degradation Rates**
The degradation rate constant ($k$) for the primary purity peak (RP-HPLC) was calculated:
*   **Gen-1 $k$:** $0.012\% \text{ loss/week}$
*   **Gen-2 $k$:** $0.011\% \text{ loss/week}$
*   **Statistical Analysis:** $p = 0.88$ (No significant difference in stability kinetics).

---

### **8.0 Conclusion**
Based on the comprehensive analytical, nonclinical, and clinical bridging data provided in this section, Google Health Sciences concludes that **Glucogen-XR manufactured via the Gen-2 commercial process is highly comparable to the Gen-1 material** used in pivotal Phase II clinical trials. 

1.  **Analytical:** Met all pre-defined equivalence criteria for CQAs.
2.  **Nonclinical:** Demonstrated identical PK and safety profiles in NHP models.
3.  **Clinical:** Confirmed bioequivalence (80-125% CI) for $C_{max}$ and $AUC$ in humans.
4.  **Safety:** No new impurities or altered immunogenicity profiles were observed.

Therefore, the clinical data generated with Gen-1 material are considered representative of and applicable to the proposed commercial product.

---

### **9.0 References**
1.  **ICH Q5E:** Comparability of Biotechnological/Biological Products.
2.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **USP <121>:** Insulin Assays and Peptide Mapping.
4.  **FDA Guidance (2023):** Statistical Approaches to Establishing Bioequivalence.
5.  **GHS-RPT-2025-044:** Comprehensive Comparability Report for Glucogen-XR.

---

# Manufacturing Batch Records

## Batch Record Format and Content

### **MODULE 3: QUALITY**
### **SECTION 3.2.S.2.2: MANUFACTURE - BATCH RECORD FORMAT AND CONTENT**

---

#### **3.2.S.2.2.1 Introduction and Scope**
This section delineates the structural framework, informational hierarchy, and data integrity protocols governing the Master Batch Record (MBR) and Executed Batch Record (EBR) for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS). The batch record system is designed in accordance with **21 CFR Part 211 (Subpart J)**, **ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients)**, and **ICH Q11 (Development and Manufacture of Drug Substances)**.

The Glucogen-XR manufacturing process utilizes a highly automated, Google Cloud-integrated Manufacturing Execution System (MES). This section details the specific requirements for documenting every stage of the recombinant peptide production—from vial thaw and expansion in CHO-K1 GS knockout cells to the complex acylation and purification steps required for extended-release kinetics.

---

#### **3.2.S.2.2.2 Structural Hierarchy of the Batch Record**
The Batch Record for Glucogen-XR is partitioned into distinct "Process Blocks" to ensure modularity and ease of quality oversight. Each Process Block contains its own set of Critical Process Parameters (CPPs), In-Process Controls (IPCs), and Critical Quality Attributes (CQAs).

##### **Table 1: Batch Record Modular Architecture**
| Module ID | Module Title | Primary Focus | Regulatory Reference |
| :--- | :--- | :--- | :--- |
| **BR-UPS-01** | Upstream: Inoculum Expansion | Thaw to N-1 Stage | 21 CFR 211.188(a) |
| **BR-UPS-02** | Upstream: Production Bioreactor | 2,000L Fed-Batch Process | ICH Q7 Section 6 |
| **BR-DNS-03** | Downstream: Primary Recovery | Centrifugation & Filtration | USP <1059> |
| **BR-DNS-04** | Downstream: Purification I | Capture Chromatography | ICH Q11 |
| **BR-MOD-05** | Chemical Modification | Acylation for Extended Release | USP <1043> |
| **BR-DNS-06** | Downstream: Purification II | Polishing & Viral Clearance | ICH Q5A |
| **BR-FAL-07** | Formulation and Fill | Final Bulk DS Preparation | 21 CFR 211.188(b) |

---

#### **3.2.S.2.2.3 Administrative Header and Traceability Data**
Every page of the Batch Record (MBR and EBR) must contain the following identifiers to ensure 100% traceability under ALCOA+ principles.

*   **Drug Name:** Glucogen-XR (glucapeptide)
*   **Batch Number Format:** `GLUC-2025-XXX` (e.g., GLUC-2025-001)
*   **Manufacturing Site:** 3000 Innovation Drive, South San Francisco, CA 94080
*   **Master Document Version:** GHS-MBR-V.4.2
*   **Date of Execution:** YYYY-MM-DD
*   **Equipment ID:** GS-BIO-2000-04 (Example)

---

#### **3.2.S.2.2.4 Detailed Content Requirements: Upstream Process (BR-UPS-01/02)**

The upstream documentation focuses on the biological viability and productivity of the GHS-CHO-001 cell line.

##### **Section A: Media Preparation and Sterilization**
Batch records must document the exact weights and lot numbers of all media components. For Glucogen-XR, the proprietary GHS-CDM-04 (Chemically Defined Media) is utilized.

**Step-by-Step Procedure for Media Hydration:**
1.  Verify the cleanliness of the 2,500L mixing vessel (V-101).
2.  Add 1,800L of WFI (Water for Injection) at $25^\circ C \pm 2^\circ C$.
3.  Add GHS-CDM-04 Powder (Lot # CDM-XXXX) while stirring at 150 RPM.
4.  Conduct pH adjustment using 1.0M NaOH until $pH = 7.15 \pm 0.05$.
5.  Perform sterile filtration through a 0.22µm polyethersulfone (PES) filter.

##### **Table 2: In-Process Controls (Upstream)**
| Parameter | Method | Specification | Frequency |
| :--- | :--- | :--- | :--- |
| Viable Cell Density (VCD) | Vi-CELL BLU | $>1.5 \times 10^7$ cells/mL | Daily |
| Viability | Trypan Blue | $\geq 95.0\%$ | Daily |
| Glucose Concentration | BioProfile FLEX | $2.0 - 6.0$ g/L | Every 12 hours |
| Dissolved Oxygen (DO) | In-situ Probe | $40\% \pm 5\%$ | Continuous |
| Ammonia ($NH_3$) | Ion-Selective Electrode | $<8.0$ mmol/L | Daily |

---

#### **3.2.S.2.2.5 Detailed Content Requirements: Downstream and Modification (BR-DNS-04/05)**

The "Extended-Release" (XR) functionality of Glucogen-XR is achieved via site-specific acylation of the peptide backbone. The Batch Record must meticulously document this chemical conjugation.

##### **Section B: Acylation Reaction Protocol**
The acylation process involves the conjugation of a C-18 fatty acid diacid side chain to the Lysine residues of the peptide.

**Reaction Parameters Calculation:**
The amount of Acyl-Agent (GHS-AC-99) required is calculated based on the protein concentration determined by $A_{280}$ spectroscopy.

$$Amount_{Acyl} (g) = (Concentration_{Peptide} \times Volume_{Batch} \times MolarRatio \times MW_{Acyl}) / 10^6$$

*   **Step 5.1:** Charge the reaction vessel (RX-501) with purified intermediate.
*   **Step 5.2:** Adjust pH to $10.5 \pm 0.1$ using sodium carbonate buffer.
*   **Step 5.3:** Slow addition of Acyl-Agent over 120 minutes.
*   **Step 5.4:** Quench reaction with Glycine ($2.0 M$) after 4 hours of incubation at $4^\circ C$.

##### **Table 3: Representative Batch Execution Data (Batch GLUC-2025-102)**
| Step | Action | Actual Result | Operator ID | Verifier ID |
| :--- | :--- | :--- | :--- | :--- |
| 4.1 | Column Equilibration | 3.2 CV Flow | J. Doe | S. Smith |
| 4.2 | Protein Loading | 42.5 kg | J. Doe | S. Smith |
| 4.3 | Elution Peak (mAU) | 1,450 mAU | J. Doe | S. Smith |
| 4.4 | Step Yield (%) | 94.2% | Calc-Bot | S. Smith |

---

#### **3.2.S.2.2.6 Viral Safety and Clearance Documentation**
In compliance with **ICH Q5A(R2)**, the Batch Record includes a dedicated section for "Viral Inactivation" and "Viral Filtration."

1.  **Low pH Inactivation:** The intermediate is held at $pH 3.5 \pm 0.1$ for $60 - 90$ minutes.
    *   *Requirement:* Log start/stop times and pH meter calibration ID.
2.  **Nanofiltration:** Use of a Planova 20N filter.
    *   *Requirement:* Pre-use and Post-use Integrity Testing (Bubble Point or Pressure Hold).

---

#### **3.2.S.2.2.7 Data Integrity and Google Cloud Life Sciences Integration**
As a division of Google, GHS utilizes a proprietary Cloud-based eBR (Electronic Batch Record) system.

*   **Audit Trails:** Every entry generates a metadata stamp including UTC timestamp, User UUID, and IP address of the HMI (Human Machine Interface).
*   **Statistical Process Control (SPC):** The eBR system automatically plots CPPs against historical means. Any deviation $>3 \sigma$ triggers an automated "Alert Note" within the record.
*   **Electronic Signatures:** Compliant with **21 CFR Part 11**, utilizing multi-factor authentication (MFA) for "Done By" and "Checked By" signatures.

---

#### **3.2.S.2.2.8 Deviations and Non-Conformances**
The Batch Record contains a "Deviation Summary Log."
*   **Minor Deviations:** Documented within the record (e.g., pH probe drift recalibrated mid-run).
*   **Major/Critical Deviations:** Cross-referenced to an external Quality Management System (QMS) report number (e.g., QMS-2025-DEV-004).

---

#### **3.2.S.2.2.9 Final Yield and Reconciliation**
At the conclusion of the Drug Substance manufacture, a full mass balance reconciliation is performed.

**Formula for Theoretical Yield:**
$$Yield_{Theoretical} = \sum (Input_{Amino Acids}) \times Efficiency_{Expression} \times Recovery_{Downstream}$$

**Acceptance Criteria:**
*   **Final Bulk Yield:** $85.0\% - 105.0\%$ of validated average.
*   **Unaccountable Loss:** $<2.0\%$.

---

#### **3.2.S.2.2.10 List of Appendices in the Batch Record**
1.  **Appendix A:** Printouts of Chromatography Chromatograms (AKTA Process).
2.  **Appendix B:** Certificates of Analysis (CoA) for critical raw materials.
3.  **Appendix C:** Cleaning Validation (CIP) cycle completion reports.
4.  **Appendix D:** Sterility and Endotoxin test results (LAL).

---
*End of Subsection 3.2.S.2.2: Batch Record Format and Content.*
*Document ID: GHS-GLUC-DS-M3-B-001*
*Author: Google Health Sciences Regulatory Affairs*

---

## Representative Batch Production Data

# MODULE 3: QUALITY (MODALITIES 3.2.S.2.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: REPRESENTATIVE BATCH PRODUCTION DATA

---

### 3.2.S.2.2.1 Introduction and Scope of Batch Data

This section provides a comprehensive analysis of representative batch production data for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS) at the South San Francisco facility (Facility ID: 3000-INNOV-SF). The data presented herein encompasses three (3) consecutive Process Performance Qualification (PPQ) batches, identified as **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003**.

These batches represent the commercial-scale manufacturing process (2,000L working volume) utilizing the proprietary GHS-CHO-001 cell line. The objective of this submission is to demonstrate process consistency, robustness, and adherence to the pre-defined Critical Quality Attributes (CQAs) and Key Performance Indicators (KPIs) as established in the Quality Target Product Profile (QTPP).

#### 3.2.S.2.2.1.1 Manufacturing Site Information
*   **Site Name:** Google Health Sciences, a Division of Google Cloud Life Sciences
*   **Address:** 3000 Innovation Drive, South San Francisco, CA 94080, USA
*   **FEI Number:** 300XXXXXXX
*   **Production Suite:** Biologics Suite 4 (BS4) - ISO 7/8 Classification

---

### 3.2.S.2.2.2 Batch Identification and Chronology

The following table summarizes the chronology of the representative batches utilized for the validation of the Glucogen-XR Drug Substance manufacturing process.

**Table 3.2.S.2.2-1: Summary of Representative Manufacturing Batches**

| Batch Number | Scale (L) | Purpose | Start Date | Completion Date | Disposition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000 | PPQ Run 1 | 12-JAN-2025 | 04-FEB-2025 | Released |
| **GLUC-2025-002** | 2,000 | PPQ Run 2 | 20-JAN-2025 | 12-FEB-2025 | Released |
| **GLUC-2025-003** | 2,000 | PPQ Run 3 | 27-JAN-2025 | 19-FEB-2025 | Released |

---

### 3.2.S.2.2.3 Upstream Process Data (Cell Culture and Harvesting)

The upstream process utilizes a fed-batch strategy designed for high-density growth of the GHS-CHO-001 cell line, expressing the glucapeptide fusion protein.

#### 3.2.S.2.2.3.1 Inoculum Expansion (Seed Train)
The seed train involves the expansion of cells from the Working Cell Bank (WCB) through N-x stages (Shake Flasks) to the N-1 Bioreactor.

**Table 3.2.S.2.2-2: Seed Train Performance Metrics (N-3 to N-1)**

| Parameter | Unit | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **WCB Vial ID** | - | GHS-WCB-04 | V-882 | V-883 | V-884 |
| **Viability at Thaw** | % | $\ge$ 95.0 | 98.4 | 97.9 | 98.1 |
| **N-3 VCD (Day 3)** | x$10^6$ cells/mL | 4.5 – 6.5 | 5.2 | 5.4 | 5.1 |
| **N-2 VCD (Day 3)** | x$10^6$ cells/mL | 4.5 – 6.5 | 5.8 | 5.7 | 5.9 |
| **N-1 VCD at Transfer** | x$10^6$ cells/mL | 8.0 – 12.0 | 10.4 | 10.1 | 10.8 |
| **N-1 Viability** | % | $\ge$ 97.0 | 99.1 | 98.8 | 99.2 |

#### 3.2.S.2.2.3.2 Production Bioreactor (N Stage - 2,000L)
The production stage lasts 14 days. pH, dissolved oxygen (DO), and temperature are maintained via automated Google Cloud Life Sciences (GCLS) AI-driven controllers.

**Table 3.2.S.2.2-3: Critical Process Parameters (CPP) - Production Bioreactor**

| CPP | Setpoint | Range | GLUC-2025-001 (Mean) | GLUC-2025-002 (Mean) | GLUC-2025-003 (Mean) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Temperature** | 36.5 °C | ± 0.5 °C | 36.51 | 36.49 | 36.50 |
| **pH (Day 0-3)** | 7.00 | ± 0.10 | 7.01 | 7.00 | 7.02 |
| **pH (Day 4-14)** | 6.85 | ± 0.10 | 6.86 | 6.84 | 6.85 |
| **DO Saturation** | 40% | ± 10% | 39.8 | 40.2 | 40.1 |
| **Agitation** | 65 RPM | ± 5 RPM | 65.0 | 65.0 | 65.0 |

**Analytical Formula for Viable Cell Density (VCD) Calculation:**
$$VCD = \frac{\text{Total Cell Count} \times \text{Viability (%) \times Dilution Factor}}{\text{Sample Volume (mL)} \times 100}$$

#### 3.2.S.2.2.3.3 Harvest and Clarification
Harvest is initiated when viability drops below 70% or on Day 14. Clarification is performed via primary and secondary depth filtration followed by 0.22 $\mu$m membrane filtration.

**Table 3.2.S.2.2-4: Harvest Quality Data**

| Parameter | Unit | Acceptable Limit | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Harvest Day** | Day | 14 | 14 | 14 | 14 |
| **Final VCD** | x$10^6$ cells/mL | Report | 18.4 | 19.1 | 17.9 |
| **Final Viability** | % | $\ge$ 65.0 | 72.4 | 74.1 | 71.8 |
| **Titer (Protein A HPLC)**| g/L | $\ge$ 3.5 | 4.2 | 4.4 | 4.1 |
| **Turbidity (Post-Clar)** | NTU | < 10 | 4.2 | 3.8 | 4.5 |

---

### 3.2.S.2.2.4 Downstream Process Data (Purification)

The purification process is designed to remove Host Cell Proteins (HCP), Pro-A leachates, High Molecular Weight (HMW) species, and DNA.

#### 3.2.S.2.2.4.1 Step 1: Protein A Affinity Chromatography (Capture)
*   **Resin:** MabSelect SuRe LX
*   **Column ID:** COL-2000-A
*   **Load Ratio:** $\le$ 40 g protein / L resin

**Table 3.2.S.2.2-5: Protein A Chromatography Performance**

| Parameter | Unit | Range | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Eluate pH** | pH | 3.4 - 3.8 | 3.55 | 3.52 | 3.58 |
| **Step Yield** | % | $\ge$ 85.0 | 92.1 | 93.4 | 91.8 |
| **HMW (SEC-HPLC)** | % | < 5.0 | 1.8 | 1.6 | 1.9 |
| **Leachate Pro-A** | ppm | < 20 | 4.2 | 3.9 | 4.5 |

#### 3.2.S.2.2.4.2 Step 2: Viral Inactivation (Low pH)
The Protein A eluate is adjusted to pH 3.5 ± 0.1 for viral inactivation for a duration of 60-90 minutes at 20 °C.

**Table 3.2.S.2.2-6: Viral Inactivation Parameters**

| Parameter | Requirement | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **Inactivation pH** | 3.5 ± 0.1 | 3.52 | 3.49 | 3.51 |
| **Hold Time** | 60 - 90 min | 75 min | 72 min | 78 min |
| **Temperature** | 18 - 25 °C | 21.4 | 22.1 | 21.8 |

#### 3.2.S.2.2.4.3 Step 3: Anion Exchange (AEX) Chromatography (Flow-Through)
AEX is utilized to remove residual DNA, Endotoxins, and acidic variants.

**Table 3.2.S.2.2-7: AEX Chromatography Data**

| Parameter | Unit | Range | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Loading Conductivity**| mS/cm | 4.5 - 5.5 | 4.9 | 5.1 | 5.0 |
| **Step Yield** | % | $\ge$ 90.0 | 96.5 | 97.2 | 95.8 |
| **HCP (ELISA)** | ng/mg | < 100 | 12 | 10 | 14 |
| **DNA (qPCR)** | pg/mg | < 10 | < 1.0 | < 1.0 | < 1.0 |

---

### 3.2.S.2.2.5 Final Formulation and Drug Substance Fill

The purified glucapeptide is concentrated and diafiltered into the final formulation buffer (Histidine-Sucrose-Polysorbate 80) using a 10 kDa Tangential Flow Filtration (TFF) system.

**Table 3.2.S.2.2-8: Final Ultrafiltration/Diafiltration (UF/DF) Data**

| Parameter | Unit | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Final Conc.** | mg/mL | 50.0 ± 5.0 | 50.2 | 49.8 | 51.1 |
| **Diavolumes** | N | $\ge$ 10 | 10.5 | 11.0 | 10.8 |
| **Final pH** | pH | 6.0 ± 0.3 | 6.0 | 6.1 | 6.0 |
| **Osmolality** | mOsm/kg | 280 - 330 | 305 | 302 | 308 |

**Calculation for Diafiltration Efficiency:**
$$C_n = C_0 \times e^{-N \times (1-R)}$$
*Where $C_n$ is final impurity concentration, $C_0$ is initial, $N$ is diavolumes, and $R$ is retention coefficient (assumed 0 for salts).*

---

### 3.2.S.2.2.6 Cumulative Batch Release Testing Results (Summary)

The following table provides the analytical release results for the three PPQ batches compared against the proposed Drug Substance specifications.

**Table 3.2.S.2.2-9: Drug Substance Release Results**

| Test Attribute | Test Method | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Visual | Clear, Colorless | Conforms | Conforms | Conforms |
| **Identity** | LC-MS | Confirmed | Confirmed | Confirmed | Confirmed |
| **Purity (SEC)** | SE-HPLC | $\ge$ 98.0% Main | 99.4% | 99.5% | 99.3% |
| **Purity (CEX)** | IE-HPLC | $\ge$ 90.0% Main | 94.2% | 93.8% | 94.5% |
| **Potency (In Vitro)**| Cell-based | 80 - 120% | 104% | 102% | 107% |
| **Endotoxin** | LAL | < 0.5 EU/mg | < 0.05 | < 0.05 | < 0.05 |
| **Bioburden** | USP <61> | < 10 CFU/10mL | 0 | 0 | 0 |

---

### 3.2.S.2.2.7 Deviations and Investigations

During the production of the representative batches, no Critical or Major deviations were recorded. Minor deviations were assessed and deemed to have no impact on product quality, safety, or efficacy.

1.  **DEV-GLUC-2025-002-01:** Temperature excursion in the N-1 bioreactor (-0.6 °C for 12 minutes). Investigation confirmed that cell growth kinetics and viability remained within historical control limits. Impact: Negligible.
2.  **DEV-GLUC-2025-003-04:** Pressure spike in AEX chromatography due to air bubble in the manifold. System auto-restarted. No loss of product; purity profile was consistent with other batches.

---

### 3.2.S.2.2.8 Conclusion

The manufacturing data for batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003** demonstrate a highly controlled and reproducible process for the production of Glucogen-XR Drug Substance. All critical process parameters were maintained within established ranges, and all finished product attributes met the rigorous quality standards required for Type 2 Diabetes Mellitus therapeutics under FDA regulatory oversight.

---
**Footnotes & References:**
*   *ICH Q11: Development and Manufacture of Drug Substances.*
*   *USP <121> Insulin Assays / USP <1043> Ancillary Materials.*
*   *GHS Internal Document: GHS-VAL-RPT-2025-09 (Process Validation Summary).*

---

## Deviation Management

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.2: MANUFACTURE - DEVIATION MANAGEMENT (BATCH RECORDS)

**Document ID:** GHS-GLUC-XR-M3-DS-DEV-001  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA (FEI: 3001234567)  
**Date of Compilation:** 15 October 2024  
**Regulatory Context:** 21 CFR Parts 210, 211, and 600; ICH Q7, Q8(R2), Q9, and Q10  

---

### 1.0 INTRODUCTION AND SCOPE

This subsection of Module 3 details the Deviation Management System (DMS) integrated into the manufacturing batch records for Glucogen-XR Drug Substance (DS). At Google Health Sciences (GHS), deviation management is not merely a reactive process but a fundamental component of the Pharmaceutical Quality System (PQS) as defined in ICH Q10. 

For the production of Glucogen-XR—a complex recombinant peptide expressed in the GHS-CHO-001 cell line—any departure from established Batch Production Records (BPR), Standard Operating Procedures (SOPs), or validated parameters (PARs/NORs) is documented, investigated, and assessed for impact on product Quality Target Product Profile (QTPP) and Critical Quality Attributes (CQAs).

#### 1.1 Regulatory Compliance Framework
The deviation management procedures described herein comply with the following:
*   **21 CFR 211.192:** Production record review and investigation of any unexplained discrepancy.
*   **21 CFR 600.14:** Reporting of biological product deviations (BPDR).
*   **ICH Q7 Section 15:** Complaints and Recalls (specifically regarding deviations in API manufacturing).
*   **ICH Q9:** Quality Risk Management (used for severity classification).
*   **USP <1185>:** Biological Assay Validation and deviation tracking.

---

### 2.0 DEVIATION CLASSIFICATION ARCHITECTURE

GHS utilizes a risk-based classification matrix for all deviations occurring during the manufacture of Glucogen-XR. Classification is determined by a cross-functional team including Manufacturing, Quality Assurance (QA), and Google Cloud Life Sciences Data Analytics.

#### Table 2.1: Deviation Severity Classification Matrix

| Classification | Definition | Impact on CQA / Specification | Required Action |
| :--- | :--- | :--- | :--- |
| **Minor (Level 1)** | A departure from SOP or BPR that does not affect process performance or product quality. | No impact on CQAs or safety. | Document in BPR; trend in quarterly Quality Review. |
| **Major (Level 2)** | A departure that impacts a non-critical parameter or has the potential to impact product quality if not remediated. | Potential impact on NORs (Normal Operating Ranges). | Formal investigation (7-day); QA approval required for stage progression. |
| **Critical (Level 3)** | A departure that directly impacts a Critical Process Parameter (CPP) or CQA, or represents a total system failure. | High probability of impact on purity, potency, or safety. | Immediate stop-work; 30-day Root Cause Analysis (RCA); CAPA required. |

---

### 3.0 PROTOCOL: DEVIATION IDENTIFICATION AND INITIAL TRIAGE

Every batch record for Glucogen-XR (e.g., Batch GLUC-2025-001 through GLUC-2025-999) contains an integrated "Deviation and Discrepancy Log." 

#### 3.1 Procedure for Real-Time Reporting
1.  **Detection:** Upon detection of an anomaly (e.g., a dissolved oxygen (DO) spike in the 2000L Bioreactor GHS-BIO-20K), the operator immediately flags the electronic Batch Record (eBR).
2.  **Initial Containment:** If the deviation involves mechanical failure, the operator follows SOP-MFG-099 "Equipment Failure Containment."
3.  **Data Capture:** The Google Cloud Life Sciences "Smart-Factory" AI monitors the sensor data (1Hz frequency). If a deviation is detected by the AI (e.g., anomalous Fourier Transform Infrared (FTIR) spectrum during purification), a "Data-Driven Deviation" (DDD) is automatically generated.

#### 3.2 Table of Common Process Deviations and Triage Paths

| Deviation Type | Typical Root Cause | Impacted Step | Initial Triage |
| :--- | :--- | :--- | :--- |
| **Temperature Excursion** | Cooling jacket seal failure | Step 4: Fermentation (CHO-K1 Growth) | Move to Major; check Glycosylation Profile. |
| **pH Drift** | CO2 sensor drift | Step 5: Induction Phase | Move to Minor/Major; check Aggregation. |
| **Flow Rate Variance** | Column packing degradation | Step 8: Protein A Chromatography | Move to Major; check HCP (Host Cell Protein). |
| **Sterility Breach** | Aseptic connector failure | Step 12: Bulk Fill | Move to Critical; Reject Batch. |

---

### 4.0 CASE STUDY: ANALYSIS OF REPRESENTATIVE DEVIATIONS (BATCHES GLUC-2025-001 TO GLUC-2025-015)

The following table summarizes the deviation landscape during the initial scale-up and validation batches produced at the South San Francisco facility.

#### Table 4.1: Historical Deviation Log for Glucogen-XR DS

| Batch Number | Deviation ID | Deviation Description | Classification | Root Cause | Disposition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | DEV-GLUC-001 | 2.5-hour delay in Feed C addition due to pump calibration. | Minor | Human error (Operator fatigue) | Released (No CQA impact) |
| **GLUC-2025-004** | DEV-GLUC-004 | Conductivity spike during Elution 2 (Cation Exchange). | Major | Buffer preparation error (0.5M vs 0.05M) | Released (Purity met spec) |
| **GLUC-2025-009** | DEV-GLUC-009 | Failure of HVAC in Grade C zone for 14 minutes. | Minor | Power surge in South SF Grid | Released (Settle plates negative) |
| **GLUC-2025-012** | DEV-GLUC-012 | Agitator RPM drop below 45 RPM (Lower Limit). | Critical | VFD Motor Controller Fault | **REJECTED** (High aggregation) |

---

### 5.0 ROOT CAUSE ANALYSIS (RCA) METHODOLOGIES

For Major and Critical deviations, GHS utilizes a multi-modal RCA approach. This is integrated into the "Investigation" section of the Batch Record.

#### 5.1 The 5-Whys / Ishikawa Integration
Investigators must populate a digital Ishikawa (Fishbone) diagram within the eBR, addressing:
*   **Measurement:** Were the sensors (pH, DO, Temp) calibrated?
*   **Material:** Was the Media Lot (Lot# MED-CHO-2025) within expiry?
*   **Machine:** Was the Bioreactor GHS-BIO-20K maintained per SOP-MAINT-400?
*   **Mother Nature:** Was the ambient humidity within the cleanroom limits?
*   **Method:** Was the BPR revision 04 used correctly?
*   **Manpower:** Was the operator certified on Module 3 (Upstream Processing)?

#### 5.2 Statistical Analysis of Process Shifts
In the event of a deviation, GHS utilizes JMP® and Google Cloud AI Platform to perform a "Comparative Batch Analysis."

**Formula for Z-Score Deviation Analysis:**
$$Z = \frac{x - \mu}{\sigma}$$
Where:
*   $x$ = Observed value during deviation (e.g., peak area of impurity)
*   $\mu$ = Process mean from 30 previous batches
*   $\sigma$ = Standard deviation

If $|Z| > 3$, the deviation is automatically escalated to a "Significant Process Shift" requiring a Detailed Impact Assessment (DIA).

---

### 6.0 IMPACT ASSESSMENT ON CRITICAL QUALITY ATTRIBUTES (CQAs)

When a deviation occurs, the DS is subjected to "Enhanced Characterization" to ensure the QTPP remains intact.

#### Table 6.1: CQA Impact Assessment Matrix

| Deviation Parameter | Likely CQA Impacted | Analytical Test for Resolution |
| :--- | :--- | :--- |
| **Over-Heating (>38.0°C)** | Potency; Deamidation | RP-HPLC and Bioassay |
| **pH Instability** | N-linked Glycosylation | HILIC-FLD (Glycan Mapping) |
| **Shear Stress (Agitation)** | Aggregation / High Molecular Weight (HMW) | SEC-HPLC (Size Exclusion) |
| **Buffer Molarity Shift** | Charge Heterogeneity | cIEF (Capillary Isoelectric Focusing) |

---

### 7.0 CORRECTIVE AND PREVENTIVE ACTIONS (CAPA)

Post-investigation, CAPAs are assigned a unique ID (e.g., CAPA-2025-XXX) and tracked via the Google Cloud Quality Management System (GC-QMS).

#### 7.1 CAPA Effectiveness Checks (EC)
A deviation is not "Closed" until an Effectiveness Check is performed. 
*   **Procedure:** 3 subsequent batches (e.g., GLUC-2025-016, 017, 018) must be produced without a recurrence of the specific deviation.
*   **Success Metric:** $P(Recurrence) < 0.01$ based on historical trend analysis.

---

### 8.0 CONCLUSION

The deviation management system for Glucogen-XR ensures that every batch record is a comprehensive narrative of the manufacturing process, including all anomalies. By leveraging Google Cloud's computational power, GHS provides a level of granularity in deviation investigation that exceeds traditional industry standards, ensuring the safety and efficacy of Glucogen-XR for patients with Type 2 Diabetes Mellitus.

---
**End of Section**
*Confidential - Google Health Sciences Internal Use Only - Prepared for FDA Submission*

---

# Equipment Qualification

## Major Equipment List and Specifications

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S: DRUG SUBSTANCE (MANUFACTURE)
### SUBSECTION 3.2.S.2.2.3: MAJOR EQUIPMENT LIST AND SPECIFICATIONS (EQUIPMENT QUALIFICATION)

---

#### 1.0 INTRODUCTION AND SCOPE
This document provides a comprehensive inventory, technical specification, and qualification status for all major equipment utilized in the commercial manufacture of **Glucogen-XR (glucapeptide extended-release)**, a GLP-1 receptor agonist, at the **Google Health Sciences (GHS)** manufacturing facility located at 3000 Innovation Drive, South San Francisco, CA.

The manufacturing process utilizes a proprietary CHO-K1 GS knockout derivative (GHS-CHO-001) and consists of high-density perfusion cell culture followed by a multi-stage chromatographic purification and an integrated extended-release formulation step. All equipment listed herein has been qualified in accordance with **ICH Q7 (Section 12)**, **21 CFR Part 211.63, 211.65, and 211.67**, and the **ISPE Baseline Guide: Commissioning and Qualification**.

#### 2.0 REGULATORY COMPLIANCE AND DESIGN STANDARDS
All equipment described in this section conforms to the following international standards:
*   **ASME BPE (Bioprocessing Equipment)**: Current edition for surface finishes (Ra < 0.5 μm) and electropolishing.
*   **21 CFR Part 11**: Electronic records and signatures for integrated PLC/SCADA systems.
*   **USP <1058>**: Analytical Instrument Qualification (AIQ).
*   **GAMP 5**: A Risk-Based Approach to Compliant GxP Computerized Systems.

---

#### 3.0 UPSTREAM MANUFACTURING EQUIPMENT (INOCULUM THROUGH HARVEST)

The upstream process for Glucogen-XR utilizes a continuous perfusion strategy to maintain steady-state peptide production.

##### 3.1 Bioreactor Systems: Technical Specifications
The primary production vessel is the GHS-HyperScale™ 2000L Perfusion Bioreactor.

| Equipment ID | Equipment Name | Manufacturer | Model / Type | Capacity / Range | Material of Construction (Contact) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BR-101-GHS** | Seed Train Bioreactor 1 | Sartorius | Biostat STR 50L | 10L - 50L | Single-use PE/EVOH |
| **BR-201-GHS** | Seed Train Bioreactor 2 | Sartorius | Biostat STR 200L | 40L - 200L | Single-use PE/EVOH |
| **PBR-501-GHS** | Production Bioreactor | Google Life Sciences / ABEC | Custom Perfusion | 2000L Working | 316L SS (EP Ra < 0.4μm) |
| **ATF-001-GHS** | Cell Retention System | Repligen | XCell™ ATF 10 | 100L - 2000L | Polyethersulfone / 316L SS |

###### 3.1.1 PBR-501-GHS Detailed Specifications
*   **Agitation**: Dual Rushton and Marine impellers; Range 10–150 RPM (± 1.0 RPM).
*   **Thermal Control**: Jacket-cooled/heated with integrated TCUs. Range: 4.0°C to 45.0°C (± 0.1°C).
*   **Gas Sparging**: Micro-sparger (O2, N2, Air) and CO2 overlay. Mass Flow Controllers (MFC) calibrated to NIST standards.
*   **Sensors**: Triple-redundant Mettler Toledo InPro 3253i pH probes and InPro 6860i DO sensors.

##### 3.2 Automated Media Preparation Systems
Media preparation for the CHO-K1 GS line (GHS-CHO-M-04) involves high-shear mixing to ensure total dissolution of hydrophobic amino acid components.

| Equipment ID | Name | Tank Volume | Agitator Power | Weigh Scale Precision |
| :--- | :--- | :--- | :--- | :--- |
| **MP-701-GHS** | Primary Media Prep | 5000L | 5.5 kW | ± 0.05% Full Scale |
| **MP-702-GHS** | Feed Media Prep | 1000L | 2.2 kW | ± 0.05% Full Scale |

---

#### 4.0 DOWNSTREAM PURIFICATION EQUIPMENT (CHROMATOGRAPHY & FILTRATION)

The purification of Glucogen-XR requires precise gradient control to separate the active glucapeptide from truncated variants and host cell proteins.

##### 4.1 Chromatography Skids (Low Pressure)
The **GHS-Purify™ Max** systems are used for Protein A capture and subsequent Ion Exchange steps.

| Equipment ID | System Name | Flow Rate Range | Pressure Rating | Software |
| :--- | :--- | :--- | :--- | :--- |
| **CH-301-GHS** | Chromatography Skid A | 0.5 - 20.0 L/min | 6.0 Bar | UNICORN 7.6 / GHS-Cloud v2 |
| **CH-302-GHS** | Chromatography Skid B | 0.5 - 20.0 L/min | 6.0 Bar | UNICORN 7.6 / GHS-Cloud v2 |
| **CH-401-GHS** | RP-HPLC Skid (Fine) | 0.1 - 5.0 L/min | 70.0 Bar | GHS-Control v4.1 |

###### 4.1.1 Component Specification for CH-401-GHS (Polishing Step)
*   **Pumps**: Quaternary gradient pumps with pulse dampeners.
*   **Detection**: Multi-wavelength UV (214nm, 280nm, 300nm) with 0.1mm path length flow cell.
*   **Conductivity**: Range 0.1 to 250 mS/cm (± 0.5%).

##### 4.2 Ultrafiltration / Diafiltration (UF/DF) Systems
The UF/DF systems are used for concentration of the peptide and buffer exchange into the final formulation matrix.

| Equipment ID | Filter Holder | Pump Type | Recirculation Rate | Feed Tank Vol |
| :--- | :--- | :--- | :--- | :--- |
| **UF-601-GHS** | Pellicon 3 | Quaternary Diaphragm | 10 - 150 LPH | 200L |

---

#### 5.0 EXTENDED-RELEASE FORMULATION AND FILL EQUIPMENT

Glucogen-XR utilizes a proprietary polymer-encapsulation technology to achieve its 7-day pharmacokinetic profile.

##### 5.1 Microsphere Encapsulation Unit (MEU-901-GHS)
This unit is a custom-engineered aseptic processing module designed for the co-precipitation of the glucapeptide with PLGA (poly-lactic-co-glycolic acid).

*   **Nozzle Type**: Ultrasonic Atomizer (60 kHz).
*   **Solvent Extraction**: Integrated vacuum-jacketed vessel for methylene chloride removal.
*   **Control System**: Google Cloud AI-Optimized PID loop for particle size distribution (PSD) control.

##### 5.2 Aseptic Fill-Finish Line
| Equipment ID | Module | Manufacturer | Capacity | ISO Class |
| :--- | :--- | :--- | :--- | :--- |
| **FF-1001-GHS** | Vial Washer | Bosch/Syntegon | 200 vials/min | ISO 7/8 |
| **FF-1002-GHS** | Depyrogenation Tunnel | Bosch/Syntegon | 350°C setpoint | ISO 5 |
| **FF-1003-GHS** | Rotary Piston Filler | Groninger | ± 0.1% accuracy | ISO 5 (RABS) |

---

#### 6.0 EQUIPMENT QUALIFICATION PROTOCOLS (IQ/OQ/PQ)

All equipment listed above follows the **GHS Master Validation Plan (MVP-2024-001)**. Below is a representative protocol for the Production Bioreactor (PBR-501-GHS).

##### 6.1 Installation Qualification (IQ) Protocol Summary
*   **Verification of Design**: Comparison of "As-Built" drawings against P&IDs.
*   **Material Certification**: Verification of 316L SS Mill Certificates and USP Class VI compliance for gaskets (EPDM/PTFE).
*   **Instrument Calibration**: Verification that all sensors (pH, DO, Temp, Pressure) are calibrated against NIST-traceable standards.
*   **Input/Output (I/O) Check**: Point-to-point wiring verification from the sensor to the PLC.

##### 6.2 Operational Qualification (OQ) Protocol Summary
*   **Temperature Mapping**: Empty and full vessel mapping (12 probes) to ensure ± 0.5°C uniformity at 37.0°C.
*   **Agitator Speed Study**: Verification of RPM accuracy and vibration analysis.
*   **SIP (Steam-In-Place) Validation**: Verification of F0 values ≥ 15 minutes at all cold spots (e.g., harvest valves).
*   **CIP (Clean-In-Place) Validation**: Riboflavin spray ball coverage testing.

##### 6.3 Performance Qualification (PQ) - Batch Record Integration
PQ is demonstrated through three successful consecutive manufacturing campaigns (Process Performance Qualification - PPQ).
*   **Batch Numbers**: GLUC-2025-001, GLUC-2025-002, GLUC-2025-003.

---

#### 7.0 MAINTENANCE AND CALIBRATION SCHEDULE

Maintenance is managed via the **Google Asset Management Platform (GAMP-Cloud)**.

| Equipment Category | Criticality | Calibration Frequency | Preventive Maintenance (PM) |
| :--- | :--- | :--- | :--- |
| **Bioreactor Sensors** | High | Every Batch (Pre-sterilization) | Quarterly |
| **Chromatography Pumps** | High | Semi-Annually | Annual Seal Replacement |
| **Tanks/Vessels** | Medium | N/A | Annual Visual/Boroscope |
| **Mass Flow Controllers**| High | Annual | Annual |

---

#### 8.0 STATISTICAL ANALYSIS OF EQUIPMENT PERFORMANCE
To ensure the robustness of the Glucogen-XR manufacturing process, equipment performance is monitored using **Statistical Process Control (SPC)**. For the chromatography skid (CH-401-GHS), the **Process Capability Index (Cpk)** for HETP (Height Equivalent to a Theoretical Plate) must be maintained at **> 1.33**.

$$Cpk = \min\left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$

Where:
*   $USL$: Upper Specification Limit
*   $LSL$: Lower Specification Limit
*   $\mu$: Mean performance
*   $\sigma$: Standard deviation

---

#### 9.0 APPENDICES AND REFERENCED DOCUMENTS
*   **GHS-SOP-ENG-001**: Maintenance of Stainless Steel Pressure Vessels.
*   **GHS-VAL-REP-501**: Qualification Report for PBR-501-GHS.
*   **USP <1225>**: Validation of Compendial Procedures.
*   **ASME BPE-2022**: Bioprocessing Equipment Standard.

---
**End of Subsection**
**Confidential - Google Health Sciences Internal Regulatory Document**
**Date of Issue**: 22-Oct-2024
**Revision**: 1.0.2

---

## IQ/OQ/PQ Summaries

# MODULE 3: QUALITY (3.2.S. DRUG SUBSTANCE)
## SECTION 3.2.S.2.2: MANUFACTURE - EQUIPMENT QUALIFICATION (IQ/OQ/PQ SUMMARIES)

**Document Reference:** GHS-GLUC-XR-M3-DS-2.2-EQP-QUAL  
**Manufacturer:** Google Health Sciences (GHS), Division of Google Cloud Life Sciences  
**Facility:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Process Scale:** 2,000L (Working Volume)  

---

### 1.0 INTRODUCTION AND SCOPE

This section provides a comprehensive summary of the Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) for critical manufacturing equipment utilized in the production of Glucogen-XR Drug Substance (DS). All qualification activities were conducted in accordance with Google Health Sciences (GHS) Global Quality Management System (QMS) Policy 0056 (Validation Life Cycle) and comply with ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients) and FDA 21 CFR Part 210/211.

The Glucogen-XR process involves high-density CHO-K1 GS knockout (GHS-CHO-001) cell culture, sophisticated chromatography purification, and a proprietary extended-release pegylation/conjugation step. Consequently, the qualification parameters are designed to ensure strict control over critical process parameters (CPPs) and material attributes.

---

### 2.0 REGULATORY COMPLIANCE MATRIX

All qualification protocols were designed to meet or exceed the following regulatory and industry standards:

| Standard ID | Title/Description | Application to Glucogen-XR |
|:---|:---|:---|
| **ICH Q7** | Good Manufacturing Practice Guide for APIs | General manufacturing compliance |
| **ICH Q9** | Quality Risk Management | Risk-based approach to equipment testing |
| **FDA 21 CFR Part 11** | Electronic Records; Electronic Signatures | SCADA, PLC, and DeltaV control systems |
| **USP <1058>** | Analytical Instrument Qualification | Process Analytical Technology (PAT) tools |
| **ISPE GAMP 5** | Risk-Based Approach to Compliant GxP IT Systems | Software automation and control logic |
| **ASME BPE** | Bioprocessing Equipment Standard | Clean-ability, surface finish (Ra), and drainability |

---

### 3.0 INSTALLATION QUALIFICATION (IQ) SUMMARY

The IQ phase confirms that all critical equipment components are installed according to the manufacturer’s specifications, approved engineering drawings, and Google Health Sciences’ User Requirement Specifications (URS).

#### 3.1 IQ Protocol Methodology (GHS-PROT-IQ-001)
1. **Document Verification:** Collection of manuals, certificates of compliance (CoC), and material mill certificates (3.1b).
2. **Piping and Instrumentation Diagram (P&ID) Walkdown:** Physical verification of the "as-built" configuration against the design.
3. **Component Identification:** Tagging and logging of motors, sensors, valves, and PLC modules.
4. **Materials of Construction (MOC):** Verification of 316L Stainless Steel for product contact surfaces and medical-grade polymers (EPDM, PTFE) for seals.

#### 3.2 Summary Table: Critical Equipment IQ Results (Batch Range GLUC-2025-001 to 015 Support)

| Equipment ID | Description | Serial Number | IQ Protocol ID | Result | Completion Date |
|:---|:---|:---|:---|:---|:---|
| **STR-2000-01** | 2,000L Bioreactor (Upstream) | AB-9920-X | GHS-IQ-STR-01 | Pass | 12-JAN-2025 |
| **CFR-500-04** | Continuous Centrifuge | CF-7721-P | GHS-IQ-CFR-04 | Pass | 15-JAN-2025 |
| **CHR-COL-10** | Protein A Chromatography Column | COL-5542 | GHS-IQ-CHR-10 | Pass | 18-JAN-2025 |
| **PEG-RX-05** | Pegylation Reaction Vessel | RX-1120-G | GHS-IQ-PEG-05 | Pass | 22-JAN-2025 |
| **UFDF-02** | Ultrafiltration/Diafiltration System | UF-8839-Q | GHS-IQ-UFDF-02 | Pass | 25-JAN-2025 |

---

### 4.0 OPERATIONAL QUALIFICATION (OQ) SUMMARY

The OQ phase demonstrates that the equipment operates within defined functional limits across the entire anticipated operating range.

#### 4.1 OQ Test Parameters and Acceptance Criteria
For the Glucogen-XR process, OQ testing focused on the precision of automated control loops (PID loops) and the integrity of safety interlocks.

**Critical Test Case: Temperature Control Loop (Bioreactor STR-2000-01)**
*   **Procedure:** Step-change testing from 25.0°C to 37.0°C.
*   **Acceptance Criteria:** Stability within ± 0.2°C of setpoint; zero overshoot > 0.5°C.
*   **Result:** Mean stability achieved at 37.02°C with a Standard Deviation of 0.04°C.

#### 4.2 OQ Data Table: Automation & Functional Testing

| Test ID | System / Function | Parameter | Setpoint / Range | Actual Result | Status |
|:---|:---|:---|:---|:---|:---|
| OQ-BIO-01 | STR-2000-01 Agitation | RPM | 50 - 250 RPM | ± 1 RPM | Pass |
| OQ-BIO-02 | STR-2000-01 Gas Mix | O2/CO2 Flow | 0.1 - 10.0 L/min | ± 0.05 L/min | Pass |
| OQ-CHR-05 | CHR-COL-10 Gradient | Buffer B % | 0% to 100% | Linear R²=0.999 | Pass |
| OQ-UFDF-08 | UFDF-02 TMP Control | Pressure | 5.0 - 25.0 psi | ± 0.5 psi | Pass |
| OQ-PEG-03 | PEG-RX-05 Dosing | PEG Volume | 50.0 - 150.0 L | ± 0.1 L | Pass |

---

### 5.0 PERFORMANCE QUALIFICATION (PQ) SUMMARY

PQ provides documented evidence that the equipment, integrated into the specific Glucogen-XR process, consistently produces a product meeting all predetermined specifications and quality attributes.

#### 5.1 PQ Protocol (GHS-PROT-PQ-GLUC-01)
The PQ was executed using three consecutive "Consistency Batches" of Glucogen-XR Drug Substance:
1. **GLUC-2025-001**
2. **GLUC-2025-002**
3. **GLUC-2025-003**

#### 5.2 Upstream Performance (Bioreactor PQ)
The PQ for the 2,000L Bioreactor evaluated cell viability, VCD (Viable Cell Density), and metabolic byproduct profiles.

**Table: Bioreactor Performance Consistency Data**

| Parameter | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
|:---|:---|:---|:---|:---|
| Peak VCD | ≥ 15.0 x 10⁶ cells/mL | 18.4 | 18.2 | 18.7 |
| Harvest Viability | ≥ 85.0% | 92.4% | 91.8% | 93.1% |
| Titer (Unpurified) | ≥ 2.5 g/L | 2.85 g/L | 2.79 g/L | 2.91 g/L |
| Lactate Peak | < 4.0 g/L | 3.1 g/L | 3.3 g/L | 3.0 g/L |

#### 5.3 Downstream Performance (Purification & Pegylation PQ)
The PQ for the purification suite focused on Step Yield, Purity (via SEC-HPLC), and Host Cell Protein (HCP) removal.

**Table: Purification Performance (Final DS)**

| Attribute | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
|:---|:---|:---|:---|:---|
| Monomer Purity (SEC) | ≥ 98.0% | 99.4% | 99.5% | 99.4% |
| Pegylation Efficiency | 85.0% - 95.0% | 91.2% | 89.8% | 90.5% |
| Residual HCP | ≤ 100 ppm | 12 ppm | 15 ppm | 11 ppm |
| Endotoxin | ≤ 0.5 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg |

---

### 6.0 CLEANING VALIDATION (CV) INTEGRATION

Equipment PQ includes verification of "Clean-In-Place" (CIP) effectiveness. Google Health Sciences utilizes a "Worst-Case" residue approach based on the solubility and toxicity of the Glucogen-XR glucapeptide.

#### 6.1 CIP Parameters (GHS-CIP-GLUC-01)
*   **Cleaning Agent:** 0.5N NaOH (Caustic)
*   **Temperature:** 65°C ± 5°C
*   **Flow Rate:** ≥ 150 L/min (to ensure turbulent flow/Reynolds number > 4000)
*   **Acceptance Criteria:** Total Organic Carbon (TOC) < 500 ppb; Conductivity < 1.3 µS/cm (final rinse).

**CIP Verification Data (Batch GLUC-2025-003 Post-Harvest):**
*   **Sample Point:** Bioreactor Spray Ball Dead Leg
*   **TOC Result:** 112 ppb (PASS)
*   **Conductivity:** 0.88 µS/cm (PASS)
*   **Visual Inspection:** Clean to sight and smell (PASS)

---

### 7.0 STEAM-IN-PLACE (SIP) AND STERILITY ASSURANCE

For the Upstream Bioreactor (STR-2000-01), PQ included a Thermal Mapping study to ensure a Sterility Assurance Level (SAL) of $10^{-6}$.

#### 7.1 Thermal Mapping Results
*   **Minimum $F_0$ achieved:** 24.5 minutes (Required: ≥ 15.0 minutes)
*   **Cold Spot Identification:** Bottom Drain Valve (TC-104)
*   **Biological Indicator (BI):** *Geobacillus stearothermophilus* (10⁶ spores) - **Negative Growth Post-SIP.**

---

### 8.0 DISCREPANCY AND DEVIATION SUMMARY

During the IQ/OQ/PQ of the Glucogen-XR manufacturing line, two (2) minor deviations were recorded.

1. **DEV-EQP-2025-001:** During OQ of CFR-500-04, the vibration sensor tripped at 85% of maximum RPM.
    *   **Root Cause:** Loose mounting bolt on the motor housing.
    *   **Corrective Action:** Re-torqued all mounting bolts per manufacturer specs. Retesting at 100% RPM showed stability.
    *   **Impact:** No impact on product quality as centrifugation occurs at 60% capacity for Glucogen-XR.
2. **DEV-EQP-2025-004:** Temporary loss of communication between the Chromatography PLC and the Historian.
    *   **Root Cause:** Network switch firmware incompatibility.
    *   **Corrective Action:** Patched firmware to v4.2.1.
    *   **Impact:** Data integrity was maintained via local buffer storage on the PLC.

---

### 9.0 CONCLUSION

Based on the results of the IQ, OQ, and PQ summarized above, the manufacturing equipment at Google Health Sciences (3000 Innovation Drive) is fully qualified for the commercial production of Glucogen-XR Drug Substance. The systems consistently operate within the validated state, ensuring the safety, identity, strength, and purity of the glucapeptide product.

---

### 10.0 LIST OF APPENDICES (AVAILABLE UPON REQUEST)
*   **GHS-RPT-IQ-STR-2000-01:** Final IQ Report for 2,000L Bioreactor
*   **GHS-VAL-CALC-04:** Statistical Analysis of Pegylation Yield Consistency
*   **GHS-MAP-TEMP-02:** Thermal Mapping Profile for SIP Cycle 04
*   **GHS-MOC-316L-CERT:** Mill Certificates for Product Contact Surfaces

---
**Author:**  
*Senior Director, Regulatory Affairs (CMC)*  
*Google Health Sciences*  
*Date: 24-MAY-2025*

---

## Maintenance and Calibration Programs

### 3.2.S.2.2.3.2 Maintenance and Calibration Programs

**Document ID:** GHS-GLUC-XR-M3-DS-0045  
**Section Title:** Equipment Maintenance and Calibration Programs (EMCP)  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences (GHS), 3000 Innovation Drive, South San Francisco, CA  
**Regulatory Framework:** 21 CFR Part 211.67, 21 CFR Part 211.68, ICH Q7 Section 5.2  

---

#### 1.0 SCOPE AND OBJECTIVES
This section describes the comprehensive Maintenance and Calibration Program (MCP) governing all Critical Process Parameters (CPPs) and Equipment Attributes relevant to the manufacture of Glucogen-XR Drug Substance (DS). This program ensures that all manufacturing equipment, analytical instrumentation, and utility systems used in the production of the recombinant glucapeptide (expressed via GHS-CHO-001) consistently operate within defined specifications to guarantee product quality, safety, and purity.

The program is managed via the **Google Cloud Enterprise Asset Management (GCEAM)** system, a validated GxP-compliant platform that integrates real-time sensor data with scheduled maintenance workflows.

---

#### 2.0 REGULATORY COMPLIANCE MATRIX
The EMCP for Glucogen-XR adheres to the following international standards and regulatory requirements:

| Reference | Title / Description | Application to Glucogen-XR |
| :--- | :--- | :--- |
| **21 CFR Part 211.67** | Equipment Cleaning and Maintenance | Primary US requirement for preventing cross-contamination. |
| **21 CFR Part 11** | Electronic Records; Electronic Signatures | Governance of the GCEAM digital maintenance logs. |
| **ICH Q7 (5.2)** | Maintenance and Calibration (API) | Global standard for biotechnological active substances. |
| **USP <1058>** | Analytical Instrument Qualification | Framework for lab equipment (HPLC, MS, SEC) calibration. |
| **ISO 10012:2003** | Measurement Management Systems | Framework for metrological confirmation of instruments. |
| **GAMP 5** | Risk-Based Approach to Compliant GxP IT Systems | Software-driven maintenance scheduling. |

---

#### 3.0 MAINTENANCE STRATEGY AND CATEGORIZATION
Google Health Sciences employs a three-tiered maintenance hierarchy to mitigate the risk of mechanical failure during the 21-day extended-release peptide synthesis and purification cycle.

##### 3.1 Tier 1: Preventive Maintenance (PM)
PM is performed at pre-defined intervals (time-based or usage-based) to prevent degradation or failure. For Glucogen-XR, this includes the replacement of O-rings in chromatography columns (ÄKTA Process™ systems) and the verification of impeller mechanical seals in the 2000L Single-Use Bioreactors (SUBs).

##### 3.2 Tier 2: Predictive Maintenance (PdM)
Utilizing Google Cloud AI/ML models, real-time vibration data from centrifuges and pressure differentials from tangential flow filtration (TFF) skids are analyzed. Deviations from the "Golden Batch" mechanical profile trigger an automated "Alert Maintenance" event before a breakdown occurs.

##### 3.3 Tier 3: Corrective Maintenance (CM)
Unscheduled maintenance performed in response to an equipment failure. All CM events for Glucogen-XR production (e.g., Batch GLUC-2025-001 through GLUC-2025-500) require an Impact Assessment (IA) to determine if the failure affected the quality of the batch-in-progress.

---

#### 4.0 CALIBRATION PROGRAM PROTOCOLS
Calibration is performed against National Institute of Standards and Technology (NIST) traceable standards.

##### 4.1 Metrological Hierarchy
1.  **Primary Standards:** Maintained at the GHS Metrology Lab (ISO/IEC 17025 accredited).
2.  **Working Standards:** Field-portable units used for floor-level calibration (e.g., Fluke 754 Documenting Process Calibrators).
3.  **Process Instrumentation:** Sensors integrated into the Glucogen-XR production line (e.g., Rosemount™ pH probes, Endress+Hauser flowmeters).

##### 4.2 Calibration Tolerance and Accuracy Ratio (TAR)
A minimum TAR of 4:1 is required for all critical instruments. If a TAR of 4:1 cannot be achieved, a statistical guard-band analysis is performed per **GHS-SOP-MET-092**.

**Calculation of Measurement Uncertainty:**
$$U_{total} = k \cdot \sqrt{u_{std}^2 + u_{res}^2 + u_{rep}^2 + u_{drift}^2}$$
*Where:*
*   $k$ = Coverage factor (typically 2 for 95% confidence)
*   $u_{std}$ = Uncertainty of the reference standard
*   $u_{res}$ = Resolution of the unit under test (UUT)
*   $u_{rep}$ = Repeatability of the measurement

---

#### 5.0 DETAILED EQUIPMENT CALIBRATION SCHEDULE (CORE DS LINE)

The following table outlines the calibration frequency and critical limits for the equipment used in the manufacture of Glucogen-XR.

| Equipment ID | Component | Criticality | Calibration Frequency | Tolerance | Last Cal (Batch GLUC-2025-102) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GHS-SUB-2000-01** | RTD Temp Sensor | Critical | 6 Months | ± 0.1°C | 12-JAN-2025 |
| **GHS-SUB-2000-01** | pH Transmitter | Critical | Per Batch | ± 0.05 pH | 04-FEB-2025 |
| **GHS-SUB-2000-01** | dO2 Sensor | Critical | Per Batch | ± 2% Sat | 04-FEB-2025 |
| **GHS-CHRO-500-04** | Conductivity Cell | Critical | 3 Months | ± 1.0% FS | 15-DEC-2024 |
| **GHS-CHRO-500-04** | UV Detector (280nm)| Critical | 6 Months | ± 2 mAU | 10-JAN-2025 |
| **GHS-TFF-02** | Pressure Xducer | Critical | 6 Months | ± 0.5 psi | 20-NOV-2024 |
| **GHS-CENT-01** | RPM / Tachometer | Major | 12 Months | ± 10 RPM | 05-AUG-2024 |

---

#### 6.0 SPECIFIC PROTOCOL: CALIBRATION OF BIOREACTOR TEMPERATURE SENSORS (RTD)
This procedure (GHS-CAL-PRT-201) is executed for the 2000L Production Bioreactor used for the expansion of GHS-CHO-001 cells.

**Step-by-Step Procedure:**
1.  **Isolation:** Tag-out the bioreactor heating jacket control loop.
2.  **Standard Selection:** Utilize a Hart Scientific 9102S Dry-Well Calibrator (NIST-traceable).
3.  **Point 1 (Lower):** Set Dry-Well to 15.0°C. Allow stabilization for 15 minutes. Record as-found value.
4.  **Point 2 (Operating):** Set Dry-Well to 37.0°C (Process Setpoint). Record as-found value.
5.  **Point 3 (Upper):** Set Dry-Well to 60.0°C (SIP temperature). Record as-found value.
6.  **Adjustment:** If deviation exceeds ± 0.1°C, perform 3-point trim in the DeltaV Distributed Control System (DCS).
7.  **Verification:** Repeat steps 3-5 (As-Left data).
8.  **Documentation:** Generate Calibration Certificate GLUC-CAL-2025-RTD-001.

---

#### 7.0 MAINTENANCE RECORDS FOR RECENT VALIDATION BATCHES
The following maintenance logs refer to the process validation campaign (PPQ) for Glucogen-XR.

| Batch Number | Process Step | Equipment | Maintenance Event Type | Result |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-101** | Inoculum Exp. | CO2 Incubator | PM: HEPA Filter Change | PASS |
| **GLUC-2025-101** | Harvest | Disc-Stack Centrifuge | PdM: Bearing Vibration Scan | GREEN |
| **GLUC-2025-102** | Capture (Protein A) | ÄKTA Process™ | CM: Leak at Valve V102 | SEAL REPLACED |
| **GLUC-2025-103** | Final Bulk Fill | Fill-Finish Skid | PM: Pump Head Replacement | PASS |

---

#### 8.0 INSTRUMENTATION "OUT OF TOLERANCE" (OOT) INVESTIGATION
Per **GHS-SOP-QA-044**, any instrument found to be Out of Tolerance during a scheduled calibration must trigger a Deviation Report (DR).

**Root Cause Analysis (RCA) Framework:**
1.  **Historical Review:** Check the last 3 calibration cycles for drift patterns.
2.  **Batch Impact:** Identify all Glucogen-XR batches produced since the last successful calibration (e.g., if GHS-TFF-02 was OOT on 20-MAY-2025, batches GLUC-2025-201 through 215 are impacted).
3.  **Risk Assessment:** Perform a Quality Risk Management (QRM) study to determine if the OOT condition could have resulted in sub-potent or impure Glucapeptide.
4.  **CAPA:** Implement Corrective and Preventive Actions (e.g., increase calibration frequency from 6 months to 3 months).

---

#### 9.0 CRITICAL SPARE PARTS MANAGEMENT
To ensure the uninterrupted production of Glucogen-XR, GHS maintains a "Gold-Stock" of critical spare parts identified through Failure Mode and Effects Analysis (FMEA).

**Critical Parts List (Sample):**
*   **Part ID GHS-SP-001:** Single-use Impeller Assembly for 2000L SUB (Lead time: 12 weeks).
*   **Part ID GHS-SP-012:** PEEK Tubing for HPLC Analytical In-line Monitoring.
*   **Part ID GHS-SP-045:** Repligen X06 USP VI Silicone Tubing (validated for glucapeptide stability).

---

#### 10.0 COMPUTERIZED SYSTEM MAINTENANCE (GCEAM & DELTAV)
The software controlling the production of Glucogen-XR (Emerson DeltaV and Google Cloud AI) undergoes periodic "System Health Checks."

**Maintenance Activities for Digital Assets:**
*   **Daily:** Database backup of batch records for GLUC-2025 series.
*   **Monthly:** Security patch application and "Least Privilege" access audit.
*   **Annual:** Disaster Recovery simulation and Data Integrity (ALCOA+) audit.

---

#### 11.0 CONCLUSION
The Maintenance and Calibration Programs for Glucogen-XR are designed to provide a high level of assurance that the manufacturing process remains in a state of control. By integrating NIST-traceable calibration with AI-driven predictive maintenance, Google Health Sciences ensures the consistent delivery of high-quality glucapeptide therapeutics.

---
**End of Section**
**Authorized By:**
*Director of Engineering, Google Health Sciences*
*Date: 14-FEB-2025*

---

# Cleaning Validation

## Cleaning Procedures for Multi-Product Equipment

### **3.2.S.2.2.3. Cleaning Procedures for Multi-Product Equipment**

---

#### **1. INTRODUCTION AND REGULATORY SCOPE**

This subsection details the cleaning procedures, validation strategies, and maintenance protocols for multi-product equipment utilized in the manufacture of **Glucogen-XR (glucapeptide extended-release)** at the Google Health Sciences (GHS) facility located at 3000 Innovation Drive, South San Francisco, CA.

As a high-potency GLP-1 receptor agonist produced via a proprietary CHO-K1 GS knockout cell line (GHS-CHO-001), Glucogen-XR necessitates rigorous cleaning protocols to prevent cross-contamination. These procedures are designed to comply with:
*   **FDA 21 CFR Part 211.67:** Equipment Cleaning and Maintenance.
*   **ICH Q7:** Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients (Section 12.7).
*   **EMA/CHMP/CVMP/ SWP/169430/2012:** Guideline on setting health-based exposure limits for use in risk identification in the manufacture of different medicinal products in shared facilities.
*   **USP <1059>:** Excipient Performance.
*   **ISPE Baseline Guide:** Volume 7 – Risk-Based Manufacture of Pharmaceutical Products (Risk-MaPP).

---

#### **2. CLEANING PHILOSOPHY AND RISK-BASED APPROACH**

Google Health Sciences employs a **Worst-Case Scenario** matrix for cleaning validation. Equipment is cleaned using automated Clean-in-Place (CIP) systems where possible, supplemented by Manual Cleaning (MC) and Clean-out-of-Place (COP) for intricate components.

##### **2.1. Health-Based Exposure Limits (HBEL)**
The cleaning limits for Glucogen-XR are derived using the **Permitted Daily Exposure (PDE)** calculation, as outlined in the *GHS Toxicological Assessment Report (GHS-TOX-2024-08)*.

**Formula for PDE Calculation:**
$$PDE = \frac{NOAEL \times Weight\ Adjustment}{F1 \times F2 \times F3 \times F4 \times F5}$$

*Where:*
*   **NOAEL:** 0.05 mg/kg/day (Based on 52-week cynomolgus monkey study).
*   **F1-F5:** Uncertainty factors (Totaling 200 for this molecule).
*   **Resulting PDE for Glucogen-XR:** 15.0 μg/day.

##### **2.2. Acceptance Criteria (Maximum Allowable Carryover - MACO)**
The MACO for the next product (Product B) is calculated based on the smallest batch size and the maximum daily dose (MDD).

**MACO Formula:**
$$MACO = \frac{PDE \times SBS}{MDD_{next}}$$

*   **SBS (Smallest Batch Size):** 500,000 units.
*   **MDD (Max Daily Dose):** 2.0 mg.
*   **MACO Limit:** 3.75 mg total carryover across the entire shared surface area.

---

#### **3. EQUIPMENT CLASSIFICATION MATRIX**

The following table categorizes the primary equipment used in the manufacture of Glucogen-XR (Batch Series: GLUC-2025-XXX).

**Table 3.2.S.2.2.3-1: Multi-Product Equipment Inventory and Surface Area**

| Equipment ID | Description | Material of Construction | Total Surface Area (cm²) | Cleaning Method |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-BR-2000L** | 2000L Bioreactor | SS 316L (Ra < 0.4 μm) | 145,000 | Automated CIP |
| **GHS-UF-400** | Ultrafiltration Unit | SS 316L / PES | 82,000 | CIP / Manual |
| **GHS-CH-500** | Chromatography Column | Acrylic / SS 316L | 34,500 | SIP / Manual Wash |
| **GHS-ST-5000L** | Harvest Surge Tank | SS 316L | 210,000 | Automated CIP |
| **GHS-FIL-100** | Sterile Filter Housing | SS 316L | 4,200 | COP / Autoclave |

---

#### **4. CLEANING AGENTS AND SOLVENTS**

Cleaning agents are selected based on their ability to degrade the peptide backbone of Glucogen-XR and solubilize the extended-release polymer matrix.

1.  **GHS-Clean-A (Alkaline):** 2.0% Potassium Hydroxide based detergent (Target: Protein hydrolysis).
2.  **GHS-Clean-B (Acidic):** 1.5% Citric Acid based solution (Target: Mineral deposit removal).
3.  **WFI (Water for Injection):** Final rinse and conductivity verification.
4.  **70% IPA:** Manual wiping of external surfaces.

---

#### **5. STEP-BY-STEP CLEANING PROTOCOLS (CIP)**

The following protocol is executed via the **Rockwell Automation PlantPAx** control system.

##### **5.1. Protocol ID: CP-GLUC-CIP-01 (Bioreactor Sequence)**

**Step 1: Initial Rinse**
*   **Media:** Deionized Water (DIW).
*   **Duration:** 15 minutes.
*   **Temperature:** 20–25°C.
*   **Objective:** Remove bulk cellular debris and spent media.

**Step 2: Alkaline Wash (Recirculation)**
*   **Media:** 2.0% GHS-Clean-A.
*   **Temperature:** 65°C ± 5°C.
*   **Flow Rate:** 150 L/min through spray balls (Equipment ID: SB-101/102).
*   **Duration:** 45 minutes.

**Step 3: Intermediate Rinse**
*   **Media:** WFI.
*   **Duration:** 10 minutes or until pH is neutral (6.5–7.5).

**Step 4: Acidic Wash (Optional/Mineral Removal)**
*   **Media:** 1.5% GHS-Clean-B.
*   **Temperature:** 50°C.
*   **Duration:** 20 minutes.

**Step 5: Final WFI Rinse**
*   **Flow Rate:** 200 L/min.
*   **End-point:** Conductivity < 1.3 μS/cm at 25°C per USP <645>.

**Step 6: Drying**
*   **Media:** 0.2 μm Filtered Compressed Air.
*   **Duration:** 60 minutes or until visual dryness is confirmed via sight glass.

---

#### **6. ANALYTICAL METHODS FOR RESIDUE DETECTION**

To ensure the effectiveness of the cleaning procedures, GHS utilizes two primary analytical techniques:

##### **6.1. Total Organic Carbon (TOC) Analysis**
*   **Method:** GHS-AN-TOC-004.
*   **Instrument:** Sievers M9 TOC Analyzer.
*   **LOD/LOQ:** 5 ppb / 25 ppb.
*   **Acceptance Limit:** < 500 ppb above WFI baseline.

##### **6.2. HPLC-UV Residue Method**
*   **Method:** GHS-AN-HPLC-092.
*   **Column:** C18, 5μm, 4.6 x 150mm.
*   **Detection:** 214 nm.
*   **Sensitivity:** Capable of detecting Glucogen-XR at 0.05 μg/mL.

---

#### **7. CLEANING VALIDATION DATA (REPRESENTATIVE BATCHES)**

Validation was performed on three consecutive batches of Glucogen-XR.

**Table 3.2.S.2.2.3-2: Cleaning Validation Results for GLUC-2025-001 through 003**

| Batch Number | Equipment Sampled | Swab/Rinse | TOC Result (ppb) | HPLC Result (μg/swab) | Visual Inspection |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Bioreactor Dome | Swab | 42 | < LOQ | Pass |
| **GLUC-2025-001** | Impeller Shaft | Swab | 68 | < LOQ | Pass |
| **GLUC-2025-001** | Final Rinse | Rinse | 18 | N/A | Pass |
| **GLUC-2025-002** | Bioreactor Dome | Swab | 35 | < LOQ | Pass |
| **GLUC-2025-002** | Discharge Valve | Swab | 112 | 0.08 | Pass |
| **GLUC-2025-003** | Surge Tank Wall | Swab | 22 | < LOQ | Pass |

---

#### **8. DIRTY HOLD TIME (DHT) AND CLEAN HOLD TIME (CHT)**

*   **Maximum Dirty Hold Time (DHT):** 72 hours. If equipment remains uncleaned for >72 hours, an "Extended Cleaning Cycle" (XCC-01) involving a 4% NaOH soak is required.
*   **Maximum Clean Hold Time (CHT):** 120 hours. If equipment is not used within 120 hours, a "Sanitization Cycle" (WFI rinse + Steam-in-Place) must be performed prior to use.

---

#### **9. CONTINUED PROCESS VERIFICATION (CPV)**

Cleaning effectiveness is monitored post-validation through:
1.  **Visual Inspection:** Conducted after every cleaning cycle by Quality Control (QC) using a high-intensity 1000 lux lamp.
2.  **Conductivity Monitoring:** Real-time data logging for every CIP final rinse.
3.  **Annual Verification:** One full cleaning validation swab study is performed annually on a rotating equipment schedule to ensure no "drift" in cleaning efficacy.

---

#### **10. DEVIATION MANAGEMENT AND RESAMPLING**

In the event of a failing TOC or HPLC result (e.g., > 3.75 mg MACO):
1.  A **Major Deviation** (Level 2) is opened in the GHS Quality Management System (Veeva Vault).
2.  Equipment is tagged "OUT OF SERVICE."
3.  Root cause analysis (RCA) is performed (e.g., spray ball blockage, pump failure).
4.  Re-cleaning and triple-sampling are required for release.

---
**END OF SECTION**
*Confidential - Property of Google Health Sciences*

---

## Residue Limits and Acceptance Criteria

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.2: MANUFACTURE - CLEANING VALIDATION (CLEANING RESIDUE LIMITS AND ACCEPTANCE CRITERIA)

---

### 1.0 INTRODUCTION AND SCOPE
This document outlines the scientific rationale, calculation methodology, and specific acceptance criteria for cleaning validation (CV) residue limits regarding the manufacture of **Glucogen-XR (glucapeptide extended-release)**. Glucogen-XR is a recombinant GLP-1 receptor agonist produced via a proprietary CHO-K1 GS knockout derivative cell line (GHS-CHO-001) at Google Health Sciences, South San Francisco facility.

As an extended-release peptide therapeutic, Glucogen-XR presents unique challenges in cleaning validation, specifically regarding its potency, potential for molecular degradation, and its affinity for stainless steel surfaces (316L). This section adheres to **ICH Q7 (Section 12.7)**, **FDA Guidance for Industry: Validation of Cleaning Processes (7/93)**, and **EMA Guideline on setting health-based exposure limits (EMA/CHMP/CVMP/SWP/169430/2012)**.

---

### 2.0 REGULATORY ALIGNMENT AND GUIDANCE COMPLIANCE
The residue limits established herein are designed to meet or exceed the following global regulatory standards:
*   **FDA 21 CFR 211.67:** Equipment cleaning and maintenance.
*   **ICH Q3C/Q3D:** Residual solvents and elemental impurities in the context of cleaning agents.
*   **USP <1225>:** Validation of Analytical Procedures for residue detection.
*   **ASTM E3106-18:** Standard Guide for Science-Based and Risk-Based Cleaning Process Development and Validation.
*   **Eudralex Volume 4, Annex 15:** Qualification and Validation.

---

### 3.0 CALCULATIVE RATIONALE FOR ACCEPTANCE CRITERIA
Acceptance criteria for Glucogen-XR are established based on three primary pillars:
1.  **Health-Based Exposure Limits (HBEL):** Derived from the Permitted Daily Exposure (PDE).
2.  **General Limit (10 ppm):** A traditional visual and safety baseline.
3.  **Dose-Based Limit:** 1/1000th of the lowest clinical dose.

The most stringent of these three criteria is selected as the Maximum Allowable Carryover (MACO).

#### 3.1 Determination of Permitted Daily Exposure (PDE)
The PDE for Glucogen-XR is calculated using the No Observed Adverse Effect Level (NOAEL) from the 6-month non-human primate (Cynomolgus monkey) toxicology study (Study ID: GHS-TOX-2023-08).

**Formula:**
$$PDE = \frac{NOAEL \times Weight\ Adjustment}{F1 \times F2 \times F3 \times F4 \times F5}$$

**Variables:**
*   **NOAEL:** 0.5 mg/kg/day.
*   **Weight Adjustment:** 50 kg (Standard human weight per ICH).
*   **F1 (Interspecies):** 10 (Monkey to Human).
*   **F2 (Intraspecies):** 10 (Variability in humans).
*   **F3 (Subchronic study):** 1 (Study was of sufficient duration).
*   **F4 (Severity of Toxicity):** 1 (Non-genotoxic, non-carcinogenic).
*   **F5 (PK/PD):** 2 (Extended-release profile factor).

**Calculation:**
$$PDE = \frac{0.5 \times 50}{10 \times 10 \times 1 \times 1 \times 2} = \frac{25}{200} = 0.125\ \text{mg/day} = 125\ \mu\text{g/day}$$

#### 3.2 Maximum Allowable Carryover (MACO) Calculation
The MACO is the amount of Glucogen-XR that can be carried over into the next product (Product B) manufactured in the same equipment train. For this facility, the worst-case "Next Product" is defined as a high-frequency, low-dose pediatric formulation (GHS-PED-04).

**Formula:**
$$MACO = \frac{PDE \times MBS}{TDD_{next}}$$

**Where:**
*   **MBS:** Minimum Batch Size of next product (50,000,000 mg).
*   **TDD_next:** Maximum Therapeutic Daily Dose of next product (5 mg).

**Result:**
$$MACO = \frac{125\ \mu\text{g} \times 50,000,000\ \text{mg}}{5\ \text{mg}} = 1,250,000\ \mu\text{g} = 1,250\ \text{mg} = 1.25\ \text{g}$$

---

### 4.0 SURFACE RESIDUE LIMITS (SWAB AND RINSE)
The MACO must be translated into actionable limits for Swab and Rinse samples based on the total Shared Surface Area (SSA) of the equipment train.

#### Table 4.1: Shared Surface Area Analysis (Upstream and Downstream)
| Equipment ID | Equipment Name | Material of Construction | Surface Area ($cm^2$) | Swab Locations |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-BR-3000** | 3000L Bioreactor | 316L Stainless Steel | 450,000 | Agitator, Sparger, Dome |
| **GHS-CENT-01** | Disk Stack Centrifuge | 316L/Silicone | 120,000 | Bowl, Inlet Pipe |
| **GHS-UFDF-02** | TFF Skid | 316L/PES | 85,000 | Manifold, Recirc Tank |
| **GHS-CHRO-05** | Chromatography Skid | 316L/PTFE | 35,000 | Bubble Trap, Valve Block |
| **GHS-FILL-10** | Fill-Finish Manifold | 316L/Silicone | 15,000 | Needle Assembly |
| **TOTAL SSA** | | | **705,000** | |

#### 4.2 Swab Limit Calculation
The limit per swab area (typically $25\ cm^2$ or $100\ cm^2$) is calculated as follows:

$$L_{swab} = \frac{MACO \times \text{Swab Area}}{SSA} \times \text{Recovery Factor}$$

Assuming a Recovery Factor (RF) of 0.75 (determined in Study GHS-REC-2024-11):
$$L_{swab} = \frac{1,250\ \text{mg} \times 100\ cm^2}{705,000\ cm^2} \times 0.75 = 0.133\ \text{mg/swab} = 133\ \mu\text{g}/100\ cm^2$$

#### 4.3 Rinse Limit Calculation
The rinse limit assumes the total MACO is dissolved in the final rinse volume ($V_{rinse} = 500\ L$ for the 3000L train).

$$L_{rinse} = \frac{MACO}{V_{rinse}} = \frac{1,250\ \text{mg}}{500\ L} = 2.5\ \text{mg/L} = 2.5\ \mu\text{g/mL}$$

---

### 5.0 CLEANING AGENT RESIDUE LIMITS
Google Health Sciences utilizes **CIP-100 (Alkaline)** and **CIP-200 (Acidic)** from STERIS for the cleaning of Glucogen-XR equipment. Limits are based on the LD50 of the surfactants within these detergents.

#### Table 5.1: Detergent Acceptance Criteria
| Detergent | Active Component | LD50 (mg/kg) | Calculated Limit (TOC) |
| :--- | :--- | :--- | :--- |
| CIP-100 | Potassium Hydroxide | 273 | < 10 ppm |
| CIP-200 | Phosphoric Acid | 1,530 | < 10 ppm |

---

### 6.0 VALIDATION BATCH MONITORING DATA (PROSPECTIVE)
Validation is conducted over three consecutive successful batches of Glucogen-XR. The following table represents the data format and required outcomes for the upcoming validation campaign starting January 2025.

#### Table 6.1: Acceptance Criteria for Validation Batches GLUC-2025-001 to 003
| Test Parameter | Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Visual Inspection** | Direct Observation | "Visibly Clean" - No residue, film, or odor |
| **Active Residue (Swab)** | RP-HPLC | $\le 133\ \mu\text{g}/100\ cm^2$ |
| **Active Residue (Rinse)** | RP-HPLC | $\le 2.5\ \mu\text{g/mL}$ |
| **Total Organic Carbon (TOC)** | USP <643> | $\le 10\ \text{ppm}$ (Above Baseline) |
| **Conductivity (Rinse)** | USP <645> | $\le 1.3\ \mu\text{S/cm}$ at $25^\circ C$ |
| **Bioburden (Rinse)** | USP <61> | $\le 10\ \text{CFU/100 mL}$ |
| **Endotoxin (Rinse)** | USP <85> | $\le 0.25\ \text{EU/mL}$ |

---

### 7.0 STEP-BY-STEP SWAB SAMPLING PROTOCOL (GHS-SOP-CV-442)
To ensure consistency across the validation of Glucogen-XR, the following swab protocol is mandated:

1.  **Preparation:** Use Texwipe TX714K Large Alpha Swabs pre-saturated with 70/30 IPA or Dilute Phosphoric Acid (0.1M).
2.  **Primary Swabbing:** Apply 10 strokes horizontally across the $10\ cm \times 10\ cm$ template area with firm pressure.
3.  **Secondary Swabbing:** Flip the swab head; apply 10 strokes vertically across the same area.
4.  **Edge Swabbing:** Use the side of the swab to wipe the perimeter of the template.
5.  **Extraction:** Place swab in 10 mL of Diluent (Tris-HCl, pH 8.0 with 0.1% Polysorbate 80). Vortex for 60 seconds.
6.  **Analysis:** Transfer to HPLC vial for analysis via Method GHS-ANA-202-HPLC.

---

### 8.0 RE-VALIDATION POLICY
Re-validation of the "Residue Limits and Acceptance Criteria" for Glucogen-XR shall be triggered by:
*   Any change in the manufacturing process (e.g., increase in fermentation titer > 20%).
*   Introduction of a new product with a lower PDE than GHS-PED-04.
*   Modification of CIP cycle parameters (Temperature, Time, Concentration).
*   Major equipment repairs or replacement of critical components (e.g., replacement of the 3000L Agitator).

---

### 9.0 STATISTICAL ANALYSIS OF RESIDUE DATA
During the validation of batches **GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003**, data will be subjected to a 95%/95% confidence/reliability analysis. If the Process Capability Index (Cpk) for cleaning effectiveness is $< 1.33$, the cleaning cycle shall be deemed "Unstable" and require optimization of the mechanical spray ball impingement pattern.

---
**END OF SECTION**
**Approver:** Dr. Lawrence Page, Head of Regulatory Affairs
**Date:** 24-Oct-2024
**Document ID:** GHS-XR-M3-22-CL-VALID-001

---

## Validation Study Results

# **MODULE 3: QUALITY**
## **3.2.S DRUG SUBSTANCE**
### **3.2.S.2 Manufacture**
#### **3.2.S.2.6 Manufacturing Process Development**
---
### **SECTION 3.2.S.2.6.4: VALIDATION STUDY RESULTS – CLEANING VALIDATION (CV)**

#### **1.0 EXECUTIVE SUMMARY**
This section details the comprehensive Cleaning Validation (CV) results for the manufacturing process of Glucogen-XR (glucapeptide extended-release), produced by Google Health Sciences at the South San Francisco (SSF) facility. The validation program was designed to demonstrate that the Cleaning-in-Place (CIP) and manual cleaning procedures consistently reduce residues of the drug substance (Glucogen-XR), cleaning agents, and bioburden to levels below pre-defined Maximum Allowable Carryover (MACO) limits.

The validation campaign comprised three (3) consecutive successful cleaning cycles following the production of three conformance batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003). All analytical results for swab and rinse samples met the acceptance criteria, confirming the efficacy of the cleaning protocols in preventing cross-contamination in a multi-product facility environment.

---

#### **2.0 REGULATORY BASIS AND GUIDELINES**
The validation study was executed in strict accordance with the following regulatory frameworks and industry standards:
*   **FDA Guidance for Industry:** *Validation of Cleaning Processes (7/93)*.
*   **ICH Q7:** *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*.
*   **ICH Q9:** *Quality Risk Management*.
*   **EMA/CHMP/CVMP/ SWP/169430/2012:** *Guideline on setting health-based exposure limits for use in risk identification in the manufacture of different medicinal products in shared facilities*.
*   **USP <1058>:** *Analytical Instrument Qualification*.
*   **ASME BPE-2022:** *Bioprocessing Equipment Standard*.

---

#### **3.0 CLEANING PHILOSOPHY AND STRATEGY**
Google Health Sciences employs a "Worst-Case" matrix approach for cleaning validation. Glucogen-XR is a 31-amino acid peptide produced via recombinant CHO-K1 GS knockout cell culture. Due to its high potency as a GLP-1 receptor agonist (PDE value calculated at 12.5 µg/day), it is categorized as a "High Potency/High Solubility" molecule.

##### **3.1 Worst-Case Rating System**
Equipment cleaning was validated based on the following risk factors:
1.  **Solubility:** High (Aqueous buffers).
2.  **Toxicity (PDE):** 12.5 µg/day.
3.  **Cleanability:** Rated 4/5 (due to the presence of PEGylated stabilizers in the extended-release formulation).
4.  **Surface Area:** Total contact surface area for the 2,000L Bioreactor train is calculated at 1,450,200 cm².

---

#### **4.0 CALCULATION OF ACCEPTANCE LIMITS**

##### **4.1 Maximum Allowable Carryover (MACO)**
The MACO is calculated based on the Health-Based Exposure Limit (HBEL), specifically the Permitted Daily Exposure (PDE).

**Formula:**
$$MACO = \frac{PDE_{prev} \times MBS_{next}}{TDD_{next}}$$

Where:
*   $PDE_{prev}$ = 0.0125 mg/day (Glucogen-XR)
*   $MBS_{next}$ = Minimum Batch Size of the next product (1,000,000 mg)
*   $TDD_{next}$ = Maximum Daily Dose of the next product (10 mg/day)

**Result:**
$$MACO = \frac{0.0125 \times 1,000,000}{10} = 1,250 \text{ mg per equipment chain}$$

##### **4.2 Swab Limit Calculation**
The swab limit ($L_{swab}$) is derived from the MACO and the total shared surface area ($SSA$).

**Formula:**
$$L_{swab} = \frac{MACO \times A_{swab}}{SSA}$$

Where:
*   $A_{swab}$ = Area swabbed (25 cm²)
*   $SSA$ = Total shared surface area (1,450,200 cm²)

**Result:**
$$L_{swab} = \frac{1,250 \text{ mg} \times 25 \text{ cm}^2}{1,450,200 \text{ cm}^2} = 0.0215 \text{ mg/swab} \approx 0.86 \text{ \mu g/cm}^2$$

---

#### **5.0 ANALYTICAL METHODS**
The following validated methods were used to evaluate cleaning efficacy:

| Method ID | Analyte | Technique | Limit of Quantitation (LOQ) |
| :--- | :--- | :--- | :--- |
| **GHS-AN-672** | Glucogen-XR Peptide | Micro-BCA / HPLC-UV | 0.05 µg/mL |
| **GHS-AN-991** | Cleaning Agent (CIP-100) | TOC (Total Organic Carbon) | 50 ppb |
| **GHS-AN-102** | Bioburden | Membrane Filtration | 1 CFU/100 mL |
| **GHS-AN-103** | Endotoxin | LAL Kinetic Chromogenic | 0.05 EU/mL |

---

#### **6.0 PROTOCOL EXECUTION AND BATCH TRACEABILITY**

The validation was performed over three consecutive runs following the production of Glucogen-XR Drug Substance batches.

**Table 1: Validation Run Traceability**
| Validation Run ID | Manufacturing Batch | Date of Manufacture | Equipment Train | Cleaning Protocol |
| :--- | :--- | :--- | :--- | :--- |
| **CV-2025-01** | GLUC-2025-001 | 12-Jan-2025 | Line A (2kL) | CP-DS-001 Rev 4 |
| **CV-2025-02** | GLUC-2025-002 | 19-Jan-2025 | Line A (2kL) | CP-DS-001 Rev 4 |
| **CV-2025-03** | GLUC-2025-003 | 26-Jan-2025 | Line A (2kL) | CP-DS-001 Rev 4 |

---

#### **7.0 VALIDATION RESULTS: SWAB AND RINSE SAMPLES**

##### **7.1 Detailed Results for Run 1 (Batch GLUC-2025-001)**
The following table summarizes the data from the first validation run. Swab samples were taken from "worst-case" locations (e.g., spray balls, agitator shafts, discharge valves).

**Table 2: Cleaning Validation Results – Batch GLUC-2025-001**
| Equipment ID | Sampling Point | Analyte | Result | Acceptance Limit | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BIO-2000-1** | Agitator Blade (Swab) | Peptide | 0.12 µg/cm² | < 0.86 µg/cm² | Pass |
| **BIO-2000-1** | Bottom Drain (Swab) | Peptide | 0.21 µg/cm² | < 0.86 µg/cm² | Pass |
| **BIO-2000-1** | Final Rinse | TOC | 115 ppb | < 500 ppb | Pass |
| **UFDF-100** | Retentate Port (Swab) | Peptide | 0.09 µg/cm² | < 0.86 µg/cm² | Pass |
| **UFDF-100** | Final Rinse | TOC | 88 ppb | < 500 ppb | Pass |
| **CHROM-01** | Column Inlet (Swab) | Peptide | 0.15 µg/cm² | < 0.86 µg/cm² | Pass |
| **STORAGE-05** | Manway Gasket (Swab) | Peptide | < LOQ | < 0.86 µg/cm² | Pass |

##### **7.2 Detailed Results for Run 2 (Batch GLUC-2025-002)**
**Table 3: Cleaning Validation Results – Batch GLUC-2025-002**
| Equipment ID | Sampling Point | Analyte | Result | Acceptance Limit | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BIO-2000-1** | Spray Ball (Swab) | Peptide | 0.18 µg/cm² | < 0.86 µg/cm² | Pass |
| **BIO-2000-1** | Final Rinse | Conductivity | 1.1 µS/cm | < 1.3 µS/cm | Pass |
| **UFDF-100** | Membrane Surface | Peptide | 0.25 µg/cm² | < 0.86 µg/cm² | Pass |
| **CHROM-01** | Frit Support (Swab) | Peptide | 0.11 µg/cm² | < 0.86 µg/cm² | Pass |

##### **7.3 Detailed Results for Run 3 (Batch GLUC-2025-003)**
**Table 4: Cleaning Validation Results – Batch GLUC-2025-003**
| Equipment ID | Sampling Point | Analyte | Result | Acceptance Limit | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BIO-2000-1** | Agitator Hub (Swab) | Peptide | 0.08 µg/cm² | < 0.86 µg/cm² | Pass |
| **UFDF-100** | Permeate Line (Swab)| Peptide | 0.05 µg/cm² | < 0.86 µg/cm² | Pass |
| **STORAGE-05** | Dip Tube (Swab) | Peptide | 0.14 µg/cm² | < 0.86 µg/cm² | Pass |
| **ALL TRAIN** | Final Rinse | Endotoxin | < 0.05 EU/mL | < 0.25 EU/mL | Pass |

---

#### **8.0 RECOVERY STUDY DATA**
To ensure the accuracy of swab results, recovery studies were performed on various surfaces (316L Stainless Steel, EPDM, PTFE).

**Table 5: Surface Recovery Percentages**
| Surface Material | Recovery Factor (Peptide) | Recovery Factor (TOC) |
| :--- | :--- | :--- |
| 316L Stainless Steel | 92.4% | 95.1% |
| EPDM Gasket | 78.6% | 82.3% |
| PTFE (Teflon) | 88.2% | 90.5% |
| Borosilicate Glass | 94.8% | 96.0% |

*Note: All analytical results in Tables 2-4 were corrected using these recovery factors to provide a conservative estimate of residual levels.*

---

#### **9.0 MICROBIOLOGICAL VALIDATION RESULTS**
Bioburden and Endotoxin levels were monitored to ensure that the cleaning and sanitization (using 0.5N NaOH) were effective in maintaining the aseptic integrity of the equipment.

**Table 6: Microbiological Data Summary**
| Batch Number | Average Bioburden (CFU/100mL) | Average Endotoxin (EU/mL) |
| :--- | :--- | :--- |
| **GLUC-2025-001** | 0 | < 0.05 |
| **GLUC-2025-002** | 1 | < 0.05 |
| **GLUC-2025-003** | 0 | < 0.05 |
| **Limit** | **< 10 CFU/100mL** | **< 0.25 EU/mL** |

---

#### **10.0 DEVIATIONS AND INVESTIGATIONS**
During the execution of CV-2025-02, a minor deviation (**DEV-CV-004**) was recorded. A swab sample from the UFDF-100 permeate port was initially reported as "Out of Specification" (OOS) for TOC.

*   **Investigation:** The OOS was traced to an analyst error during sampling where the swab handle touched a non-cleaned exterior surface.
*   **Corrective Action:** Re-sampling was performed following a 10-minute rinse with WFI. The re-test result was 45 ppb (well below the 500 ppb limit).
*   **Impact Assessment:** The deviation had no impact on the validity of the cleaning study as the underlying cleaning process was not flawed.

---

#### **11.0 CLEAN HOLD TIME (CHT) AND DIRTY HOLD TIME (DHT)**
*   **Dirty Hold Time (DHT):** Validated for **72 hours**. The validation runs included a deliberate 72-hour hold period between the end of production and the start of CIP.
*   **Clean Hold Time (CHT):** Validated for **120 hours**. Equipment was stored dry and sampled after 120 hours for bioburden; all results remained within specification.

---

#### **12.0 CONCLUSION**
The cleaning validation results for Glucogen-XR demonstrate that the CIP and manual cleaning procedures are robust, reproducible, and effective. The maximum observed residue was 0.25 µg/cm², representing less than 30% of the calculated safety limit (0.86 µg/cm²). Consequently, the equipment cleaning processes are considered validated for commercial manufacturing.

---
**END OF SECTION**

---

# Shipping and Transportation

## Stability During Transport

### 3.2.S.2.5 Process Validation and/or Evaluation
#### 3.2.S.2.5.4 Stability During Transport and Shipping Validation

---

**Document ID:** GHS-GLUC-STB-098  
**Sponsor:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Document Status:** Final / Regulatory Submission Ready  
**Effective Date:** 14-Oct-2025  

---

### 1.0 Executive Summary

This subsection provides comprehensive technical data, validation protocols, and analytical results supporting the stability of Glucogen-XR (glucapeptide) drug substance (DS) during multi-modal transportation from the primary manufacturing site (3000 Innovation Drive, South San Francisco, CA) to secondary fill-finish facilities and global distribution hubs. 

Glucogen-XR is a high-molecular-weight glucapeptide derivative expressed in the proprietary GHS-CHO-001 cell line. Due to the presence of specific C-terminal acylation and an extended-release PEG-like polymeric moiety, the molecule is sensitive to thermal fluctuations, mechanical shear, and interfacial stress (air-liquid interface). 

The validation strategy described herein follows the **ICH Q1A(R2)**, **ICH Q5C**, and **PDA Technical Report No. 66 (Application of Single-Use Systems in Pharmaceutical Manufacturing)**. The shipping validation was performed using a "Worst-Case" approach, utilizing Batch Nos. **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003**, representing full-scale commercial manufacturing volumes.

---

### 2.0 Shipping Configuration and Container Closure System (CCS)

The Glucogen-XR Drug Substance is stored in high-density polyethylene (HDPE) or single-use bioprocess containers (BPCs) depending on the batch size.

#### 2.1 Primary Packaging System
*   **Manufacturer:** Google Health Sciences / Advanced Bio-Packaging Div.
*   **Component:** 20L GHS-FlexWave Single-Use Bag.
*   **Material of Construction:** Multi-layer film (outer layer: EVOH; inner contact layer: Ultra-Low Density Polyethylene [ULDPE]).
*   **Connectors:** CPC AseptiQuik® S Sterile Connectors.

#### 2.2 Secondary and Tertiary Packaging (Shipping Shippers)
*   **Shipper Type:** Credo Xtreme® Series 4 Passive Thermal Shipper.
*   **Coolant:** Phase Change Material (PCM) - TIC™ 5°C panels.
*   **Data Loggers:** Sensitech TempTale® Ultra (redundant monitoring).

---

### 3.0 Shipping Validation Protocol (GHS-VAL-TRANS-2025)

#### 3.1 Objective
To demonstrate that the Glucogen-XR Drug Substance remains within predefined specifications when subjected to physical stresses (vibration, shock) and thermal excursions (extreme heat/cold) mimicking the global supply chain.

#### 3.2 Stress Simulation Parameters
Validation was conducted using both **Real-World Shipping Studies (RWSS)** and **Controlled Environmental Simulation (CES)** as per ASTM D4169-22 (Standard Practice for Performance Testing of Shipping Containers and Systems).

**Table 1: Simulation Stress Parameters for Glucogen-XR DS**

| Stress Type | Specification / Standard | Duration / Intensity |
| :--- | :--- | :--- |
| **Random Vibration** | ASTM D4169, Schedule D (Truck) | 180 Minutes (Overall Grms: 0.52) |
| **Random Vibration** | ASTM D4169, Schedule E (Air) | 120 Minutes (Overall Grms: 1.06) |
| **Mechanical Shock** | ASTM D4169, Schedule A (Handling) | 8 Drops from 12 inches (30.5 cm) |
| **Thermal Cycling** | ISTA 7D (Summer Profile) | 72 Hours (Range: 22°C to 45°C) |
| **Thermal Cycling** | ISTA 7D (Winter Profile) | 72 Hours (Range: -10°C to 10°C) |

---

### 4.0 Analytical Testing Program

Samples were pulled pre-shipment ($T_0$) and post-shipment ($T_{final}$) and subjected to a comprehensive stability-indicating analytical battery.

#### 4.1 Acceptance Criteria
The product must meet the following Release Specifications after transport simulation:

1.  **Purity by SE-HPLC:** $\ge 98.0\%$ (Main Peak)
2.  **Purity by RP-HPLC:** $\ge 95.0\%$ (Main Peak)
3.  **HMW (High Molecular Weight Species):** $\le 1.0\%$
4.  **Sub-visible Particulates (USP <788>):** $\ge 10 \mu m: \le 6000$; $\ge 25 \mu m: \le 600$
5.  **Biological Activity (In-vitro Bioassay):** 80% to 125% of Reference Standard.
6.  **pH (USP <791>):** $6.8 \pm 0.3$

---

### 5.0 Transport Stability Data - Real-World Studies (RWSS)

Three commercial-scale batches were shipped from South San Francisco (SFO) to a contract fill-finish site in Dublin, Ireland (DUB), and back to SFO to maximize duration and stress exposure.

**Table 2: Summary of Shipping Validation Batches**

| Batch Number | Manufacture Date | Route | Total Duration | Mean Temp (°C) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-Jan-2025 | SFO -> DUB -> SFO | 108 Hours | 4.8°C |
| **GLUC-2025-002** | 22-Jan-2025 | SFO -> DUB -> SFO | 114 Hours | 5.1°C |
| **GLUC-2025-003** | 02-Feb-2025 | SFO -> DUB -> SFO | 102 Hours | 4.9°C |

#### 5.1 Analytical Results Post-Transport (Real-World)

**Table 3: Comparative Analysis Pre- and Post-Shipping for GLUC-2025-001**

| Parameter | Pre-Shipment ($T_0$) | Post-Shipment ($T_{final}$) | Delta ($\Delta$) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Main Peak (SE-HPLC)** | 99.4% | 99.3% | -0.1% | Pass |
| **HMW Species (%)** | 0.4% | 0.5% | +0.1% | Pass |
| **Purity (RP-HPLC)** | 97.2% | 97.1% | -0.1% | Pass |
| **Bioactivity (%)** | 102% | 101% | -1.0% | Pass |
| **Particulates $\ge 10 \mu m$** | 120/mL | 145/mL | +25 | Pass |
| **Oxidized Forms** | 0.8% | 0.8% | 0.0% | Pass |

---

### 6.0 Forced Degradation During Transport (Worst-Case Simulation)

To define the "Operational Design Space" for shipping, Batch **GLUC-2025-004** was subjected to intentional temperature excursions and excessive mechanical agitation.

#### 6.1 Temperature Excursion Protocol (The "GHS-Extreme-72" Study)
The DS was exposed to 25°C for 72 hours and 40°C for 12 hours to simulate a refrigeration failure during tarmac transit.

**Table 4: Stability of GLUC-2025-004 Under Forced Excursion**

| Condition | Purity (SE-HPLC) | Aggregation (HMW) | Potency | Result |
| :--- | :--- | :--- | :--- | :--- |
| Control (2-8°C) | 99.5% | 0.3% | 104% | N/A |
| 25°C / 72 Hours | 99.1% | 0.7% | 102% | Acceptable |
| 40°C / 12 Hours | 98.2% | 1.6% | 98% | Marginal |

*Note: The results indicate that Glucogen-XR is robust against brief excursions up to 25°C, but shows accelerated aggregation (HMW formation) when exposed to 40°C for durations exceeding 6 hours.*

---

### 7.0 Agitation and Shear Stress Analysis

Given the PEG-like moiety in Glucogen-XR, mechanical shear at the air-liquid interface can lead to denaturation. A study was performed using a reciprocating shaker at 250 RPM for 48 hours.

#### 7.1 Protocol for Agitation Stress
1.  **Fill Volume:** 50% (High Headspace) vs 95% (Standard Fill).
2.  **Equipment:** New Brunswick™ Scientific Excella E24 Shaker.
3.  **Measurement:** Concentration by $A_{280}$ and Micro-Flow Imaging (MFI).

**Table 5: Effect of Headspace and Agitation on Protein Stability**

| Batch | Headspace | Duration | MFI Count (Particles/mL) | SE-HPLC Purity |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-005 | 5% | 48h | 850 | 99.4% |
| GLUC-2025-005 | 50% | 48h | 12,400 | 97.8% |

**Conclusion:** To minimize shear-induced aggregation, shipping containers must be filled to $\ge 90\%$ capacity to reduce the air-liquid interface.

---

### 8.0 Statistical Analysis of Transport Data

A two-tailed t-test (p < 0.05) was applied to compare the pre- and post-shipping attributes across the three validation batches. 

**Formula for Confidence Interval (95%):**
$$CI = \bar{x} \pm t_{\alpha/2, n-1} \left( \frac{s}{\sqrt{n}} \right)$$

Statistical analysis confirmed no significant difference (p = 0.42) in the purity profile of Glucogen-XR before and after transcontinental shipping, confirming the efficacy of the Credo Xtreme® shipper and the TIC™ 5°C PCM panels.

---

### 9.0 Regulatory Compliance and Guidelines

The transport validation program for Glucogen-XR adheres to:
*   **21 CFR 211.94:** Drug product containers and closures.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1079>:** Good Storage and Distribution Practices for Drug Products.
*   **EU GDP (2013/C 343/01):** Guidelines on Good Distribution Practice of Medicinal Products for Human Use.

---

### 10.0 Post-Approval Shipping Monitoring Program

Google Health Sciences commits to the following ongoing monitoring:
1.  **Continuous Temperature Logging:** Every commercial shipment will include at least two calibrated GPS-enabled data loggers.
2.  **Annual Verification:** One commercial batch per year will undergo full analytical testing post-transport to ensure no drift in the shipping process.
3.  **Deviation Management:** Any excursion outside the 2-8°C range will trigger an automatic Quality Notification (QN) in the GHS Cloud-LIMS system for immediate impact assessment.

---

**End of Subsection 3.2.S.2.5.4**

---

## Temperature Monitoring

### 3.2.S.2.5 Process Controls: Shipping and Transportation
#### Subsection: 3.2.S.2.5.4 Temperature Monitoring and Cold Chain Integrity

---

### 1.0 SCOPE AND REGULATORY ALIGNMENT
The temperature monitoring strategy for **Glucogen-XR (glucapeptide extended-release)** Drug Substance (DS) encompasses a multi-layered, risk-based approach designed to ensure the biological activity, tertiary folding structure, and chemical stability of the glucapeptide moiety remain uncompromised during transit from the Google Health Sciences (GHS) manufacturing facility (3000 Innovation Drive, South San Francisco) to the Fill-Finish site.

This protocol adheres to the following regulatory frameworks:
*   **FDA Guidance for Industry:** *Q1A(R2) Stability Testing of New Drug Substances and Products.*
*   **ICH Q5C:** *Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.*
*   **USP <1079>:** *Risks and Mitigation Strategies for the Storage and Transportation of Finished Drug Products.*
*   **PDA Technical Report No. 39:** *Guidance for Temperature-Controlled Medicinal Products: Maintaining the Quality of Temperature-Sensitive Medicinal Products through the Transportation Environment.*

---

### 2.0 TEMPERATURE MONITORING SPECIFICATIONS
Glucogen-XR is a highly sensitive GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. Analytical data from stress studies (Section 3.2.S.3.2) indicates that temperatures exceeding -60°C for prolonged periods lead to accelerated deamidation and aggregation. Consequently, the DS is shipped in a deep-frozen state.

#### Table 2.1: Critical Process Parameters (CPP) for DS Transportation
| Parameter | Set Point | Allowable Range | Monitoring Frequency |
| :--- | :--- | :--- | :--- |
| **Storage Temperature** | -80°C | -90°C to -65°C | Continuous (1-min intervals) |
| **Max Excursion Limit** | N/A | > -60°C for < 30 mins | Real-time Alert Trigger |
| **CO2 Concentration** | N/A | Sublimation rate dependent | Periodic (Data Logger) |
| **Vibration/Shock** | < 2.0 G | 3-axis monitoring | Continuous |

---

### 3.0 HARDWARE SPECIFICATIONS AND CALIBRATION
Google Health Sciences utilizes the **GHS-Quantum-Temp™ IoT Monitoring System** integrated with Google Cloud’s Vertex AI for predictive excursion modeling.

#### 3.1 Data Logger Specifications
For each shipment (e.g., Batch **GLUC-2025-001** through **GLUC-2025-500**), a minimum of four (4) NIST-traceable, redundant data loggers are utilized:
1.  **Primary Logger:** Internal, embedded within the DS primary container (HDPE bottle) secondary overwrap.
2.  **Secondary Logger:** External, positioned at the geometric center of the Dry Ice/LN2 shipper.
3.  **Tertiary Logger:** Peripheral, positioned at the corner wall of the shipping container.
4.  **Ambient Logger:** Attached to the exterior of the pallet to monitor external environmental stress.

#### Table 3.1: Equipment Calibration and Identification
| Equipment ID | Type | Precision | Last Cal. Date | Re-Cal. Due |
| :--- | :--- | :--- | :--- | :--- |
| **TL-8829-GHS** | Pt100 RTD (NIST) | ±0.1°C | 12-JAN-2025 | 12-JUL-2025 |
| **TL-8830-GHS** | Thermistor (High-Res) | ±0.05°C | 14-JAN-2025 | 14-JUL-2025 |
| **GHS-SAT-001** | Satellite GPS/Temp | ±0.5°C | 01-FEB-2025 | 01-FEB-2026 |

---

### 4.0 PROTOCOL FOR TEMPERATURE MONITORING DURING TRANSIT (SOP-LOG-4402)

#### 4.1 Pre-Shipment Validation
1.  **Verification of Loggers:** Ensure all loggers are synchronized to Coordinated Universal Time (UTC).
2.  **Activation:** Loggers must be activated in a stabilized environment at -80°C for 2 hours prior to being introduced to the shipment batch to prevent "start-up lag" noise in the data.
3.  **Batch Association:** Link Logger IDs (e.g., S/N GHS-9921) to the specific Drug Substance Batch (e.g., **GLUC-2025-012**) via the Google Cloud Life Sciences ERP.

#### 4.2 Loading and Positioning Procedure
*   **Step 1:** The Glucogen-XR DS bottles are placed in a secondary containment bag.
*   **Step 2:** The primary logger is taped directly to the side of the bottle, ensuring direct thermal contact without compromising the seal.
*   **Step 3:** Bottles are placed into the **Aero-Shield Ultra-Low Shipper**.
*   **Step 4:** Dry ice (pellet size 16mm) or LN2 vapor phase charging is completed according to validated thermal profile GHS-V-2024-09.
*   **Step 5:** The external loggers are placed at the "warm spot" identified during the OQ/PQ of the shipping container (typically the top-right corner near the lid gasket).

#### 4.3 Monitoring and Cloud Integration
Real-time data is transmitted via 5G/Satellite link to the Google Health Life Sciences Command Center. The following formula is used by the AI engine to calculate the **Mean Kinetic Temperature (MKT)** during transit:

$$T_{mkt} = \frac{\Delta H / R}{-\ln \left( \frac{\sum e^{-\Delta H / RT_n}}{n} \right)}$$

Where:
*   $\Delta H$ = Activation energy for Glucogen-XR degradation (determined as 83.1 kJ/mol).
*   $R$ = Gas constant.
*   $T_n$ = Temperature at sample point $n$ in Kelvin.

---

### 5.0 HISTORICAL SHIPMENT DATA (PILOT & CLINICAL BATCHES)
The following table summarizes the monitoring results for the initial scale-up batches of Glucogen-XR.

#### Table 5.1: Shipping Temperature Performance Summary
| Batch Number | Shipping Date | Duration (hrs) | Min Temp (°C) | Max Temp (°C) | MKT (°C) | Deviation ID |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 15-MAR-2025 | 48.5 | -84.2 | -78.1 | -81.4 | None |
| **GLUC-2025-002** | 22-MAR-2025 | 52.0 | -82.9 | -76.5 | -79.8 | None |
| **GLUC-2025-003** | 02-APR-2025 | 74.2 | -81.1 | -72.0 | -76.5 | None |
| **GLUC-2025-004** | 10-APR-2025 | 46.1 | -85.5 | -79.4 | -82.6 | None |
| **GLUC-2025-005** | 18-APR-2025 | 110.5* | -83.0 | -68.4 | -74.2 | DEV-LOG-09 |

*\*Note: Batch GLUC-2025-005 experienced a customs delay. Thermal integrity was maintained via the use of an extended-duration vacuum-insulated panel (VIP) shipper.*

---

### 6.0 DEVIATION MANAGEMENT AND EXCURSION PROTOCOL
In the event of a temperature excursion (Temp > -65°C), the following hierarchy of actions is mandated:

#### 6.1 Immediate Action (Tier 1)
*   **Trigger:** Automated alert from GHS-Quantum-Temp system.
*   **Action:** Receiving site must move the DS to a validated -80°C backup freezer within 15 minutes.
*   **Documentation:** Initiation of Quality Notification (QN) in the GHS Quality Management System (QMS).

#### 6.2 Impact Assessment (Tier 2)
Analytical testing must be performed on the "Excursion Batch" prior to release for fill-finish:
1.  **SEC-HPLC:** Assessment of high molecular weight species (HMWS). Limit: < 0.5%.
2.  **RP-HPLC:** Purity and related substances (deamidation at Asp-15). Limit: > 98.0%.
3.  **In Vitro Potency:** GLP-1 receptor activation assay. Limit: 80%–125% of reference standard.
4.  **DLS:** Dynamic Light Scattering for sub-visible aggregate detection.

---

### 7.0 DATA RETENTION AND REPORTING
Following the arrival of each Glucogen-XR shipment:
1.  **Data Extraction:** The PDF and raw CSV files from all loggers are uploaded to the **GHS Regulatory Vault**.
2.  **Signature Requirement:** The Quality Assurance (QA) lead at both the shipping and receiving sites must electronically sign the **Certificate of Conformance (CoC)** and the **Temperature Monitoring Report (TMR)**.
3.  **Archiving:** All temperature records are retained for the life of the product plus 5 years, in accordance with 21 CFR Part 11 and Part 211 requirements.

---

### 8.0 REFERENCES
1.  *Google Health Sciences Technical Report GHS-TR-2024-55: Thermal Stability of Glucapeptide Agonists in Cryogenic States.*
2.  *ISO 13485:2016 - Medical devices — Quality management systems.*
3.  *IATA Perishable Cargo Regulations (PCR) - Chapter 17.*

---
**[End of Subsection: Temperature Monitoring]**
**[Confidential - Property of Google Health Sciences]**

---

## Qualification of Shipping Containers

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.5: PROCESS CONTROLS - SHIPPING AND TRANSPORTATION
### SUBSECTION: 3.2.S.2.5.4 QUALIFICATION OF SHIPPING CONTAINERS

---

#### 1.0 SCOPE AND OBJECTIVE
This section details the comprehensive qualification program for the primary and secondary shipping systems utilized for the transport of **Glucogen-XR (glucapeptide extended-release)** Drug Substance (DS) from the Google Health Sciences (GHS) manufacturing facility (3000 Innovation Drive, South San Francisco, CA) to various fill-finish sites and long-term storage repositories.

The objective of this qualification is to provide documented evidence that the cold-chain distribution process maintains the critical quality attributes (CQAs) of Glucogen-XR, specifically ensuring the product remains within the validated temperature range of **2.0°C to 8.0°C** under "worst-case" seasonal and logistical scenarios. This qualification follows a three-tiered approach:
1.  **Operational Qualification (OQ):** Thermal Mapping and Empty Container Stress Tests.
2.  **Performance Qualification (PQ):** Real-world "Live Load" shipments using Batch GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003.
3.  **Transit Integrity Testing:** Physical vibration, drop, and pressure simulation.

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
All qualification activities were performed in strict accordance with the following regulatory frameworks:
*   **FDA 21 CFR Part 211.94:** Drug Product Containers and Closures.
*   **ICH Q1A (R2):** Stability Testing of New Drug Substances and Products.
*   **USP <1079>:** Good Distribution Practices for Drug Products.
*   **USP <1118>:** Monitoring Devices—Time, Temperature, and Humidity.
*   **PDA Technical Report No. 39 (Revised 2007):** Guidance for Temperature-Controlled Medicinal Products.
*   **ISTA 7E:** Thermal Analysis Standard for Insulated Shipping Containers.

#### 3.0 SYSTEM DESCRIPTION: THE GHS-THERMOPHILE-X5 SYSTEM
The primary shipping container selected for Glucogen-XR is the **GHS-Thermophile-X5**, a high-performance vacuum-insulated panel (VIP) system utilizing Phase Change Materials (PCM).

##### 3.1 Components of the Shipping Configuration
| Component ID | Description | Material Specification | Dimensions/Capacity |
| :--- | :--- | :--- | :--- |
| **GHS-OUT-09** | Outer Corrugated Shipper | Double-wall fluted Kraft paper | 60cm x 60cm x 75cm |
| **GHS-VIP-12** | Vacuum Insulated Panels | Nanoporous silica core | 25mm thickness (R-value >40) |
| **PCM-05-BLUE** | Phase Change Material (Liquid) | Tetradecane-based organic PCM | Transition Point: +5.0°C |
| **PCM-05-FROZ** | Phase Change Material (Solid) | Tetradecane-based organic PCM | Pre-conditioned at -20°C |
| **GHS-BOT-5L** | Primary DS Container | Type 1 Borosilicate / Fluoropolymer-lined | 5.0 Liter Capacity |

#### 4.0 OPERATIONAL QUALIFICATION (OQ) - THERMAL MAPPING
The OQ phase evaluated the thermal performance of the GHS-Thermophile-X5 under extreme ambient conditions using the **MKT (Mean Kinetic Temperature)** calculation model.

##### 4.1 Ambient Temperature Profiles (Worst-Case)
Two profiles were simulated in a calibrated environmental chamber (Asset ID: GHS-CHAMB-88):
1.  **The "Death Valley" Summer Profile:** Sustained 45.0°C for 72 hours with spikes to 50.0°C.
2.  **The "Arctic Circle" Winter Profile:** Sustained -20.0°C for 72 hours.

##### 4.2 OQ Test Methodology and Sensor Placement
A total of twelve (12) NIST-traceable Thermocouples (Model: GHS-TEMP-LOG) were placed inside the payload area of a dummy load (saline solution mimicking the viscosity of Glucogen-XR).

**Table 1: Thermal Sensor Mapping Positions**
| Sensor ID | Position | Rationale |
| :--- | :--- | :--- |
| T1 | Top Right Corner (Front) | Proximity to lid seal/thermal bridge |
| T2 | Top Left Corner (Back) | Proximity to lid seal/thermal bridge |
| T3 | Bottom Center | Most insulated point |
| T4 | Geometric Center | Product core simulation |
| T5 | Side Wall (North) | External heat flux point |
| T6-T12 | Distributed | Redundancy and gradient analysis |

##### 4.3 OQ Results Summary (Batch Equivalence: GLUC-2025-OQ-REF)
| Profile | Duration | Max Internal Temp | Min Internal Temp | Result |
| :--- | :--- | :--- | :--- | :--- |
| Summer (High) | 120 Hours | 7.2°C | 3.4°C | **PASS** |
| Winter (Low) | 120 Hours | 4.8°C | 2.1°C | **PASS** |

#### 5.0 PERFORMANCE QUALIFICATION (PQ) - LIVE SHIPMENT PROTOCOL
The PQ phase involved the actual transit of Glucogen-XR Drug Substance (Batch GLUC-2025-001 through 003) across international shipping lanes.

##### 5.1 Protocol GHS-PQ-SHP-2025: Step-by-Step Procedure
1.  **Pre-Conditioning (T-minus 48 hours):**
    *   Place PCM-05-BLUE units in a 5.0°C ± 2.0°C incubator for 48 hours.
    *   Place PCM-05-FROZ units in a -20.0°C ± 5.0°C freezer for 48 hours.
2.  **Verification of Loggers:**
    *   Initialize dual Red-Trans GHS-5G GPS/Temp loggers (Asset IDs: RT-990, RT-991).
    *   Set sampling interval to 5 minutes.
3.  **Packing Sequence:**
    *   Insert bottom VIP panel.
    *   Layer 1: Three (3) frozen PCM bricks.
    *   Layer 2: Three (3) 5.0°C conditioned PCM bricks (Thermal Buffer).
    *   Insert Glucogen-XR DS bottles (Batch GLUC-2025-001).
    *   Surround with lateral PCM bricks.
    *   Apply top buffer and frozen layers.
4.  **Seal and Dispatch:**
    *   Apply tamper-evident security tape (ID: GHS-SEC-XXX).
    *   Affix "Perishable: Bio-Therapeutic" and "Do Not Freeze" labels.

##### 5.2 Live Shipment Data (Domestic: CA to NY)
**Table 2: Transit Data for Batch GLUC-2025-001**
| Event | Date/Time (UTC) | External Temp | Internal Temp | Status |
| :--- | :--- | :--- | :--- | :--- |
| Pack-out | 2025-MAY-12 08:00 | 22.1°C | 4.5°C | Initialized |
| Ground Transport | 2025-MAY-12 14:00 | 31.4°C | 4.7°C | Transit |
| Airport Tarmac | 2025-MAY-12 18:00 | 38.9°C | 5.2°C | Exposure |
| Flight (Cargo) | 2025-MAY-13 02:00 | 18.5°C | 4.9°C | In-Air |
| Receipt at Site B | 2025-MAY-14 10:00 | 20.2°C | 4.6°C | **SUCCESS** |

#### 6.0 MECHANICAL INTEGRITY TESTING (ISTA 3A SIMULATION)
To ensure the glucapeptide molecule remains structurally intact (preventing aggregation due to shear stress), containers were subjected to mechanical stress.

##### 6.1 Vibration and Drop Test Parameters
*   **Vibration:** Random vibration profile (1.15 Grms) for 180 minutes per axis (X, Y, Z).
*   **Drop Test:** 10 drops from a height of 76cm onto concrete (various orientations: corners, edges, faces).
*   **Pressure:** Vacuum chamber simulation of cargo hold decompression (8.0 psi) for 4 hours.

##### 6.2 Analytical Post-Shipment Verification
After mechanical stress, Glucogen-XR samples (Batch GLUC-2025-002) were analyzed for purity.

| Attribute | Methodology | Specification | Result (Post-Test) |
| :--- | :--- | :--- | :--- |
| **SEC-HPLC Purity** | Size Exclusion | ≥ 98.0% Main Peak | 99.4% |
| **HMW Species** | SEC-HPLC | ≤ 1.0% Aggregates | 0.2% |
| **Visible Particulates** | USP <790> | Essentially Free | Meets |
| **Potency (Bioassay)** | Cell-based cAMP | 80% - 125% Label | 104% |

#### 7.0 STATISTICAL ANALYSIS OF THERMAL STABILITY
The stability of the internal environment was calculated using the Arrhenius equation to determine the impact of any minor excursions.

$$k = A e^{-E_a/RT}$$

Where:
*   $E_a$ (Activation Energy for Glucogen-XR degradation) = 85 kJ/mol.
*   $R$ = 8.314 J/mol·K.
*   $T$ = Temperature in Kelvin.

Calculations confirmed that even if the internal temperature reached 10.0°C for 4 hours, the cumulative loss of potency would be <0.001%, which is statistically insignificant.

#### 8.0 DEVIATION MANAGEMENT AND CAPA
During the qualification of Batch **GLUC-2025-003**, a temperature excursion occurred (T = 8.4°C) due to a delay in customs processing at FRA (Frankfurt).

*   **Deviation ID:** DEV-GHS-2025-442.
*   **Impact Assessment:** SEC-HPLC and SDS-PAGE confirmed no increase in degradation products.
*   **Corrective Action:** Implementation of "Passive-Active Hybrid" shippers for trans-continental shipments exceeding 96 hours.

#### 9.0 CONCLUSION
Based on the results of OQ-2025-01 and the PQ results for batches **GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003**, the GHS-Thermophile-X5 shipping system is qualified for the transport of Glucogen-XR Drug Substance. The system ensures the maintenance of a 2°C to 8°C environment for a minimum of 120 hours, protecting the peptide from thermal degradation and mechanical aggregation.

---
**Approvals:**
*   *Director of Quality Assurance, Google Health Sciences*
*   *Head of Supply Chain Logistics, GHS Life Sciences*
*   *Regulatory Affairs Lead, GLP-1 Program*

**Date of Document:** 15-OCT-2024
**Revision:** 1.0 (Final)

---

# Control of Critical Raw Materials

## Cell Culture Media Components

### **3.2.S.2.3. Control of Materials: Cell Culture Media Components**

#### **3.2.S.2.3.1. Introduction and Strategy for Raw Material Control**

The manufacturing process for Glucogen-XR (glucapeptide extended-release), produced by Google Health Sciences (GHS), utilizes a sophisticated chemically defined (CD) media strategy designed to optimize the growth and productivity of the proprietary GHS-CHO-001 cell line. Given the sensitivity of the CHO-K1 GS knockout derivative and the complex glycosylation profile required for the glucapeptide moiety, the control of cell culture media components is classified as a Critical Quality Attribute (CQA) driver.

Google Health Sciences adheres to the principles outlined in **ICH Q6B**, **ICH Q11**, and **USP <1043> (Ancillary Materials for Cell, Gene, and Tissue-Engineered Products)**. All media components are sourced from qualified vendors and are subject to rigorous Tier-1, Tier-2, or Tier-3 testing based on their impact on the final Drug Substance (DS).

---

#### **3.2.S.2.3.2. Categorization of Media Components**

Media components for Glucogen-XR production are divided into three functional categories:
1.  **GHS-Basal-09 (Basal Medium):** A proprietary, chemically defined, protein-free formulation providing essential amino acids, vitamins, and inorganic salts.
2.  **GHS-Feed-A/B (Feed Supplements):** Highly concentrated nutrient streams added during the fed-batch process to maintain metabolic activity and extend culture longevity.
3.  **Specific Additives:** Including GlutaMAX™, insulin-like growth factors (r-Insulin), and anti-foaming agents.

##### **Table 1: Master List of Critical Media Components (Batch Series GLUC-2025-XXX)**

| Component ID | Material Name | Function | Grade | Supplier | Storage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| RM-GLUC-001 | L-Tyrosine Disodium Salt | Amino Acid (Feed) | USP/EP | Ajinomoto | 15-30°C |
| RM-GLUC-002 | D-Glucose (Anhydrous) | Carbon Source | USP/NF | Roquette | 15-30°C |
| RM-GLUC-003 | L-Glutamine | Nitrogen Source | USP | Sigma-Aldrich | 15-30°C |
| RM-GLUC-015 | Recombinant Human Insulin | Growth Factor | cGMP/Ph. Eur. | Novo Nordisk | -20°C |
| RM-GLUC-042 | Poloxamer 188 (Pluronic F-68) | Shear Protectant | NF/EP | BASF | 15-30°C |
| RM-GLUC-109 | Ferrous Sulfate Heptahydrate | Trace Metal | ACS/USP | BioPharma | 15-30°C |
| RM-GLUC-221 | Proprietary Trace Element Mix 4 | Co-factors | GHS Spec | Thermo Fisher | 2-8°C |

---

#### **3.2.S.2.3.3. Detailed Technical Specifications and Testing Limits**

Each raw material is governed by a **Material Specification Sheet (MSS)**. For the Glucogen-XR process, Google Health Sciences has implemented "Fingerprinting" via Raman Spectroscopy and ICP-MS for all incoming lots to ensure batch-to-batch consistency.

##### **3.2.S.2.3.3.1. Specification for L-Tyrosine Disodium Salt (RM-GLUC-001)**
L-Tyrosine is critical for the synthesis of the glucapeptide chain. Variations in tyrosine concentration have been linked to sequence variants in the GHS-CHO-001 cell line.

| Test Parameter | Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual (SOP-QC-01) | White to off-white powder |
| **Identification (IR)** | USP <197K> | Matches Reference Standard |
| **Purity (HPLC)** | Internal Method | $\ge$ 99.0% |
| **Endotoxin** | USP <85> | $\le$ 0.1 EU/mg |
| **Heavy Metals (as Pb)** | ICP-MS (USP <232>) | $\le$ 10 ppm |
| **Solubility (50 g/L in H2O)**| Visual | Clear, colorless solution |

---

#### **3.2.S.2.3.4. Media Preparation Protocol (Batch GLUC-2025-MED)**

The preparation of GHS-Basal-09 is a multi-stage process performed in the Grade C formulation suite at the South San Francisco facility.

##### **Step-by-Step Procedure for 2,000L Scale Preparation:**

1.  **WFI Pre-fill:** Charge the 2,500L stainless steel mixing vessel (EQ-SR-502) with 1,600L of Water for Injection (WFI) at 25°C $\pm$ 2°C.
2.  **Agitation:** Set agitation to 60 Hz (350 RPM).
3.  **Component Addition (Order of Addition is Critical):**
    *   Add RM-GLUC-002 (Glucose) and mix for 20 minutes.
    *   Add RM-GLUC-042 (Poloxamer) slowly to avoid clumping.
    *   Add Amino Acid Pre-mix (Batch GLUC-2025-AA01).
4.  **pH Adjustment (Initial):** Adjust pH to 5.5 $\pm$ 0.1 using 1M HCl to facilitate the dissolution of hydrophobic amino acids.
5.  **Trace Element Integration:** Add RM-GLUC-221.
6.  **Final Volume Adjustment:** QS (Quantum Satis) to 2,000L with WFI.
7.  **Final pH and Osmolality Check:**
    *   **Target pH:** 7.10 $\pm$ 0.05
    *   **Target Osmolality:** 295 $\pm$ 10 mOsm/kg
8.  **Sterile Filtration:** Pass the media through a redundant 0.22 $\mu$m PES filter (Millipore Express SHR) into a sterile 2,000L Single-Use Bag (SUB).

---

#### **3.2.S.2.3.5. Quality Control Data: Batch Analysis (Historical Trends)**

Google Health Sciences tracks the performance of media lots across clinical manufacturing runs. The following table represents data for three representative batches used in the production of Glucogen-XR Drug Substance.

##### **Table 2: Comparative Media Batch Analysis (GLUC-2025-Series)**

| Parameter | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Batch GLUC-2025-003 |
| :--- | :--- | :--- | :--- |
| **Sterility** | No Growth | No Growth | No Growth |
| **pH (Post-filtration)** | 7.12 | 7.09 | 7.11 |
| **Osmolality (mOsm/kg)** | 298 | 292 | 296 |
| **Endotoxin (EU/mL)** | < 0.05 | < 0.05 | < 0.05 |
| **Glucose Conc. (g/L)** | 6.02 | 5.98 | 6.01 |
| **Clarity (NTU)** | 0.4 | 0.3 | 0.5 |

---

#### **3.2.S.2.3.6. Management of Adventitious Agents and BSE/TSE Risk**

In accordance with **EMA/410/01 Rev. 3**, Google Health Sciences certifies that all media components used in the manufacture of Glucogen-XR are of non-animal origin (NAO). 

1.  **Insulin Sourcing:** The recombinant human insulin (RM-GLUC-015) is produced via microbial fermentation (E. coli) and is certified free of any animal-derived raw materials.
2.  **Viral Clearance of Components:** While the media is chemically defined, certain complex components (like soy-derived hydrolysates, if used in emergency backup formulations) undergo HTST (High-Temperature Short-Time) pasteurization.
3.  **Supplier Audits:** All suppliers of critical components (e.g., Ajinomoto, Sigma) are audited every 24 months to verify their TSE/BSE statements and contamination control strategies.

---

#### **3.2.S.2.3.7. Impact of Media Components on Glycosylation (Statistical Analysis)**

The concentration of Manganese (Mn2+) in the media (RM-GLUC-109) is a critical process parameter (CPP) for the extended-release profile of Glucogen-XR. Manganese acts as a co-factor for $\beta$-1,4-galactosyltransferase.

**Equation 1: Galactosylation Index (GI) Calculation**
$$GI = \frac{\sum (G1F + 2 \times G2F)}{\sum (G0F + G1F + G2F)} \times 100$$

A Design of Experiments (DoE) study (Report GHS-TR-2024-88) determined that a Manganese concentration of $2.5 \mu M \pm 0.5 \mu M$ maintains the GI within the required range of 15.0% - 22.0%, ensuring the metabolic stability of the glucapeptide.

---

#### **3.2.S.2.3.8. Stability and Storage of Prepared Media**

Prepared GHS-Basal-09 media is stored at 2-8°C in light-protected single-use containers. Stability studies (Study No. GLUC-STAB-2024) confirm a shelf life of 45 days.

**Parameters monitored during stability:**
*   **L-Glutamine Degradation:** Monitored via HPLC (limit $\le$ 10% decrease).
*   **Ammonia Accumulation:** Monitored via enzymatic assay (limit $\le$ 2 mM).
*   **Growth Promotion Test (GPT):** A standardized inoculation of GHS-CHO-001 must achieve a Viable Cell Density (VCD) of $\ge 10 \times 10^6$ cells/mL by Day 4.

---

#### **3.2.S.2.3.9. Conclusion**

The control strategy for cell culture media components for Glucogen-XR is robust, utilizing high-purity, chemically defined ingredients and stringent analytical testing. By maintaining tight control over the chemical environment of the GHS-CHO-001 cell line, Google Health Sciences ensures the production of a consistent, high-quality GLP-1 receptor agonist with the desired therapeutic extended-release properties.

---
**Footnotes & References:**
1. *ICH Q11: Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).*
2. *USP <1043>: Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.*
3. *GHS Internal Report GLUC-2025-RAW-VAL: Validation of Trace Metal Control in Fed-Batch Systems.*

---

## Chromatography Resins

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.2.3: CONTROL OF MATERIALS
### SUBSECTION: CHROMATOGRAPHY RESINS AND STATIONARY PHASES

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection details the qualification, procurement, testing, and lifecycle management of the chromatography resins utilized in the downstream purification process for **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences**. 

The purification of Glucogen-XR, a high-affinity GLP-1 receptor agonist, requires a multi-stage chromatographic approach to ensure the removal of process-related impurities (Host Cell Proteins [HCP], Host Cell DNA [HCD], and Endotoxins) and product-related impurities (truncated peptides, aggregates, and misfolded isoforms). 

The resins described herein are critical raw materials (CRMs) as defined by **ICH Q7** and **ICH Q11**. Their performance directly impacts the Critical Quality Attributes (CQAs) of the drug substance.

---

#### 2.0 OVERVIEW OF CHROMATOGRAPHY STEPS
The manufacturing process for Glucogen-XR involves four primary chromatographic operations:

1.  **Capture Stage:** Protein A Affinity Chromatography (MabSelect SuRe™ or equivalent proprietary GHS-Affinity-01).
2.  **Intermediate Purification:** Cation Exchange Chromatography (CEX) using SP Sepharose Fast Flow.
3.  **Polishing Step 1:** Anion Exchange Chromatography (AEX) using Capto Q.
4.  **Polishing Step 2 (Final):** Hydrophobic Interaction Chromatography (HIC) or Reversed-Phase HPLC (RP-HPLC) for isoform separation.

---

#### 3.0 SPECIFICATIONS AND SUPPLIER QUALIFICATION
All resins are sourced from qualified vendors under strict Quality Assurance (QA) oversight. Suppliers are audited biennially in accordance with Google Health Sciences' Global Supplier Quality Management System (GSQMS-2024-V3).

##### Table 3.2.S.2.3-1: Summary of Critical Chromatography Resins

| Resin Common Name | Phase Type | Functional Group | Base Matrix | Target Impurities Removed | Supplier |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GHS-Affinity-01** | Protein A | Recombinant Protein A | Cross-linked Agarose | HCP, HCD, Media components | Cytiva/Internal |
| **GHS-SP-FF-04** | Cation Exchange | Sulfopropyl (Strong) | 6% Cross-linked Agarose | Aggregates, Leached ProA | Tosoh/Cytiva |
| **GHS-CaptoQ-99** | Anion Exchange | Quaternary Ammonium | High-flow Agarose | Endotoxins, DNA, Acidic variants | Cytiva |
| **GHS-Butyl-HP** | HIC | Butyl | High-performance Agarose | Truncated species, misfolds | BioPharma KGaA |

---

#### 4.0 DETAILED RESIN SPECIFICATIONS AND ACCEPTANCE CRITERIA

Each lot of resin received at the South San Francisco facility (3000 Innovation Drive) undergoes rigorous inspection. 

##### 4.1 Protein A Affinity Resin (GHS-Affinity-01)
*   **Identification:** FTIR Spectrum vs. Reference Standard.
*   **Particle Size Distribution:** Mean diameter 85 µm (Range: 60–120 µm).
*   **Dynamic Binding Capacity (DBC):** ≥ 45 mg Glucogen-XR / mL resin at 6-minute residence time.
*   **Leachable Protein A:** < 10 ng/mg product (Assay: GHS-ELISA-PROA).
*   **Microbial Limits:** Total Aerobic Microbial Count (TAMC) < 10 CFU/mL; Total Yeast and Mold Count (TYMC) < 5 CFU/mL.

##### 4.2 Cation Exchange Resin (GHS-SP-FF-04)
*   **Ionic Capacity:** 0.15–0.20 mmol H+/mL resin.
*   **Pressure/Flow Characteristics:** < 3 bar at 300 cm/h in a 20 cm bed height.
*   **pH Stability:** 2–12 (long term), 1–14 (short term/CIP).

---

#### 5.0 RECEIPT, SAMPLING, AND RELEASE PROTOCOLS
Upon arrival of a new batch (e.g., **Lot GLUC-2025-RES-001**), the following protocol is executed:

**Step 1: Visual Inspection**
Check for integrity of seals, temperature loggers (if applicable), and Certificate of Analysis (CoA) matching.

**Step 2: Sampling (Procedure SOP-GHS-PROC-440)**
1.  Move resin containers to ISO Class 7 sampling booth.
2.  Homogenize resin slurry by gentle rotation for 30 minutes.
3.  Aseptically extract 50 mL for QC testing using a sterile vacuum-controlled thief sampler.
4.  Label as **GLUC-2025-RES-XXX-SAMP**.

**Step 3: Analytical Verification**
Testing is performed against the specifications listed in Table 3.2.S.2.3-2.

##### Table 3.2.S.2.3-2: Representative QC Data for Resin Batch Release (Lot GLUC-2025-088)

| Parameter | Method | Requirement | Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Visual | White to off-white slurry | Complies | Pass |
| **Bead Diameter** | Laser Diffraction | 75 - 95 µm (D50) | 88.4 µm | Pass |
| **Binding Capacity** | Frontal Chromatog. | > 40 mg/mL | 48.2 mg/mL | Pass |
| **Endotoxin** | USP <85> | < 0.25 EU/mL | < 0.05 EU/mL | Pass |
| **Bioburden** | USP <61> | 0 CFU/mL | 0 CFU/mL | Pass |

---

#### 6.0 RESIN LIFECYCLE AND RE-USE VALIDATION
Google Health Sciences employs a multi-cycle re-use strategy for all resins to optimize manufacturing costs while maintaining product purity.

##### 6.1 Lifetime Study Protocol (GHS-VAL-2025-77)
Validation studies are conducted on small-scale columns (e.g., 1.0 cm i.d. x 20 cm) to determine the "End of Life" (EoL) for each resin type.

*   **Cycles Validated:** 50 cycles for Protein A; 100 cycles for IEX/HIC.
*   **Monitoring Parameters:**
    1.  HETP (Height Equivalent to a Theoretical Plate).
    2.  Asymmetry Factor (As).
    3.  Step Yield (%).
    4.  Impurity Clearance (Log Reduction Values - LRV).

##### 6.2 Calculation of Column Efficiency
The HETP is calculated using the following formula:
$$HETP = \frac{L}{N}$$
Where:
*   $L$ = Bed height (cm)
*   $N$ = Number of theoretical plates, calculated via:
    $$N = 5.54 \times \left(\frac{t_R}{w_{1/2}}\right)^2$$
    *(where $t_R$ is retention time and $w_{1/2}$ is peak width at half-height).*

Acceptance criteria for Glucogen-XR production:
*   **Asymmetry (As):** 0.8 to 1.8.
*   **HETP:** < 0.05 cm (for Capture); < 0.02 cm (for Polishing).

---

#### 7.0 CLEANING AND SANITIZATION (CIP/SIP)
To prevent cross-contamination between batches (e.g., between **GLUC-2025-001** and **GLUC-2025-002**), the following Cleaning-in-Place (CIP) protocols are strictly enforced.

##### 7.1 CIP Protocol for GHS-Affinity-01
1.  **Strip:** 0.1 M Glycine-HCl, pH 2.5 (3 Column Volumes [CV]).
2.  **Sanitization:** 0.1 M NaOH or 6 M Guanidine-HCl (contact time: 15 mins).
3.  **Re-equilibration:** PBS pH 7.4 (5 CV).
4.  **Storage:** 20% Ethanol or 2% Benzyl Alcohol.

##### 7.2 Resin Regeneration Evaluation
After every 10 cycles, a "Harsh Regeneration" is performed using 1 M Acetic Acid to remove tightly bound hydrophobic proteins that escape standard CIP.

---

#### 8.0 STORAGE AND SHELF-LIFE
Resins are stored in a controlled environment (2–8°C) in the designated CRM Warehouse at the South San Francisco site. 

*   **Bulk Storage:** 20% Ethanol (USP/EP grade).
*   **Shelf Life:** 5 years from date of manufacture (DOM) if unopened; 2 years once opened and used in a validated cycle.
*   **Expiry Monitoring:** Controlled via the Google Life Sciences ERP (SAP S/4HANA Cloud).

---

#### 9.0 REGULATORY COMPLIANCE AND RISK ASSESSMENT (FMEA)
A Failure Mode and Effects Analysis (FMEA) was performed for chromatography resin failure.

| Potential Failure Mode | Cause | Impact on Glucogen-XR | Mitigation |
| :--- | :--- | :--- | :--- |
| **Resin Fines Build-up** | High pressure/Mechanical stress | Increased backpressure, yield loss | Inline 0.2 µm filtration; monitoring ΔP |
| **Ligand Leaching** | Proteolysis/Harsh CIP | Product contamination (ProA) | Residual ProA ELISA on every batch |
| **Microbial Growth** | Inadequate Sanitization | Pyrogenicity/Endotoxin OOS | Bioburden testing post-CIP |

---

#### 10.0 REFERENCES
1.  **ICH Q11:** Development and Manufacture of Drug Substances.
2.  **USP <631>:** Color and Achromicity.
3.  **USP <1059>:** Excipient Performance.
4.  **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
5.  **GHS-SOP-QC-992:** Testing of Chromatography Media for Glucapeptide Production.

---
*End of Subsection 3.2.S.2.3 (Chromatography Resins)*
*Document Ref: GHS-GLUC-REG-M3-2025-04*
*Author: Senior Director, Regulatory Affairs (25+ YXP)*

---

## PEG Reagent Specifications

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.3: CONTROL OF MATERIALS
### SUBSECTION 3.2.S.2.3.4: PEG REAGENT SPECIFICATIONS

---

#### 3.2.S.2.3.4.1 Introduction and Strategic Rationale

The therapeutic efficacy and pharmacokinetic profile of **Glucogen-XR (glucapeptide extended-release)** are fundamentally dependent upon the site-specific conjugation of a high-molecular-weight, branched Polyethylene Glycol (PEG) moiety to the glucapeptide backbone. The PEG reagent utilized, internal code **GHS-PEG-40K-NHS**, is a 40 kDa branched (Y-shape) PEG functionalized with an N-hydroxysuccinimide (NHS) ester group.

Google Health Sciences (GHS) recognizes that the quality, polydispersity, and purity of the PEG reagent directly impact the final Drug Substance (DS) critical quality attributes (CQAs), including potency, half-life, and immunogenicity profile. Consequently, this section details the stringent specifications, analytical methodologies, and supplier qualification protocols established for the GHS-PEG-40K-NHS reagent.

#### 3.2.S.2.3.4.2 Technical Description of GHS-PEG-40K-NHS

The reagent is a branched PEG consisting of two linear methoxy polyethylene glycol (mPEG) chains of approximately 20 kDa each, covalently linked to a lysine core, with the carboxyl group of the lysine activated as an NHS ester.

*   **Chemical Name:** α-Methyl-ω-(3-{(2,5-dioxopyrrolidin-1-yl)oxy}-3-oxopropoxy)poly(oxy-1,2-ethanediyl), branched.
*   **Molecular Formula:** $CH_3O(CH_2CH_2O)_n-C_{core}-NHS$
*   **Nominal Molecular Weight:** 40,000 Da ± 10%
*   **Target Site:** Primary ε-amino group of Lysine residues or N-terminus of Glucogen-XR.

---

#### 3.2.S.2.3.4.3 Regulatory Compliance and Compendial Alignment

While specific high-molecular-weight branched PEG reagents are not yet fully monographed in the USP-NF or Ph. Eur., GHS adheres to the overarching principles of:
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
3.  **FDA Guidance for Industry:** "Liposome Drug Products: Chemistry, Manufacturing, and Controls; Human Pharmacokinetics and Bioavailability; and Labeling Documentation" (as a proxy for complex polymer characterization).

---

#### 3.2.S.2.3.4.4 Detailed Specification Table (Release Criteria)

All batches of GHS-PEG-40K-NHS must meet the following criteria prior to release into the manufacturing suite at the 3000 Innovation Drive facility.

**Table 3.2.S.2.3.4-1: Release Specifications for GHS-PEG-40K-NHS**

| Test Parameter | Analytical Procedure | Acceptance Criteria | Rationale for Limit |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual Inspection (SOP-PEG-001) | White to off-white solid; free of visible foreign matter. | Consistency and purity. |
| **Identity (NMR)** | 1H-NMR (SOP-PEG-002) | Spectra must conform to reference standard; characteristic PEG backbone and NHS peaks present. | Confirms chemical structure. |
| **Identity (FT-IR)** | USP <197K> (SOP-PEG-003) | Comparable to reference spectrum. | Secondary structural confirmation. |
| **Average Mol. Wt. (Mn)** | GPC/SEC-MALS (SOP-PEG-004) | 38,000 – 42,000 Da | Ensures consistent PK/PD profile. |
| **Polydispersity Index (PDI)** | GPC/SEC (SOP-PEG-004) | ≤ 1.05 | Minimizes molecular weight variability. |
| **Activation Efficiency (%)** | Titration/HPLC (SOP-PEG-005) | ≥ 95.0% | Ensures high conjugation yield. |
| **Free NHS Content** | RP-HPLC (SOP-PEG-006) | ≤ 1.0% (w/w) | Residual reactant control. |
| **Di-NHS Content** | SEC (SOP-PEG-007) | ≤ 0.5% (w/w) | Prevents cross-linking of peptide. |
| **Residual Ethylene Oxide** | GC-Headspace (USP <467>) | ≤ 1 ppm | Toxicological safety (ICH Q3C). |
| **Residual 1,4-Dioxane** | GC-Headspace (USP <467>) | ≤ 10 ppm | Toxicological safety (ICH Q3C). |
| **Water Content** | Karl Fischer (USP <921>) | ≤ 0.5% (w/w) | Prevents premature hydrolysis of NHS. |
| **Heavy Metals** | ICP-MS (USP <232>/<233>) | Consistent with ICH Q3D (As, Cd, Hg, Pb ≤ 0.5 ppm) | Safety. |
| **Bacterial Endotoxins** | LAL Method (USP <85>) | < 0.1 EU/mg | Control of pyrogens. |
| **Total Aerobic Count** | USP <61> | < 10 CFU/g | Microbiological control. |

---

#### 3.2.S.2.3.4.5 Analytical Protocol: Determination of Activation Efficiency (SOP-PEG-005)

The activation efficiency is the percentage of PEG molecules successfully functionalized with the NHS ester. High efficiency is critical to avoid "dead" PEG (mPEG-OH or mPEG-COOH) which competes for volume but does not conjugate, complicating downstream purification.

**Procedure Step-by-Step:**
1.  **Standard Preparation:** Prepare a 10 mg/mL solution of N-hydroxysuccinimide reference standard in 100 mM Phosphate Buffer (pH 8.0).
2.  **Sample Hydrolysis:** Weigh 100 mg of GHS-PEG-40K-NHS. Dissolve in 5.0 mL of 0.1N NaOH. Incubate at 37°C for 60 minutes to force complete hydrolysis of the NHS ester into free NHS and PEG-carboxylate.
3.  **Neutralization:** Adjust pH to 7.0 using 0.1N HCl.
4.  **HPLC Analysis:**
    *   **Column:** C18 Reverse Phase (4.6 x 150 mm, 5 µm).
    *   **Mobile Phase:** 5% Acetonitrile / 95% Water (0.1% TFA).
    *   **Detection:** UV at 260 nm (specific for the NHS ring).
5.  **Calculation:**
    *   $C_{NHS} = (Area_{sample} / Area_{std}) \times Concentration_{std}$
    *   $Moles_{NHS} = C_{NHS} \times Volume / MW_{NHS}$
    *   $Theoretical Moles_{PEG} = Mass_{sample} / Mn_{PEG}$
    *   $\% Activation = (Moles_{NHS} / Theoretical Moles_{PEG}) \times 100$

---

#### 3.2.S.2.3.4.6 Batch Analysis Data (Realistic Data Set)

The following table summarizes the data from the most recent clinical batches utilized in the Glucogen-XR Phase III expansion.

**Table 3.2.S.2.3.4-2: Batch Analysis for GHS-PEG-40K-NHS**

| Batch Number | Mfg. Date | Mn (Da) | PDI | Activation (%) | Water (%) | Endotoxin (EU/mg) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 40,102 | 1.02 | 98.2 | 0.12 | < 0.05 |
| **GLUC-2025-002** | 02-FEB-2025 | 39,875 | 1.03 | 97.5 | 0.15 | < 0.05 |
| **GLUC-2025-003** | 28-MAR-2025 | 40,440 | 1.02 | 99.1 | 0.09 | < 0.05 |
| **GLUC-2025-004** | 15-MAY-2025 | 39,910 | 1.04 | 96.8 | 0.21 | < 0.05 |

---

#### 3.2.S.2.3.4.7 Stability and Storage Requirements

GHS-PEG-40K-NHS is highly sensitive to moisture (hydrolysis) and oxidative degradation. 

*   **Storage Temperature:** -20°C ± 5°C.
*   **Primary Packaging:** High-density polyethylene (HDPE) bottles, double-bagged in heat-sealed Mylar bags with desiccant and oxygen scavengers.
*   **Headspace:** Nitrogen overlaid (99.999% purity).
*   **Re-test Period:** 24 months from the date of manufacture.

**Stability Study Protocol (Summary):**
Samples from batches GLUC-2025-001 and GLUC-2025-002 are currently on long-term stability (25°C/60% RH and -20°C). Data collected at T=6 months indicates no significant drop in activation efficiency (<0.5% change) and no increase in PDI.

---

#### 3.2.S.2.3.4.8 Supplier Qualification and Supply Chain Security

The PEG reagent is manufactured under cGMP conditions by Google Health Sciences' preferred partner, **Polymer Dynamics Corp (PDC)**, and undergoes secondary testing at the GHS South San Francisco facility.

1.  **Audit Frequency:** Bi-annual on-site quality audits.
2.  **Criticality Tier:** Tier 1 (Critical Raw Material). Any change in the polymer backbone synthesis or NHS activation chemistry requires a Formal Supplement (PAS) filing.
3.  **Traceability:** Every batch is linked to the ethylene oxide monomer lot and the specific lysine core peptide lot via GHS Cloud ERP (SAP-integrated).

---

#### 3.2.S.2.3.4.9 Justification of Limits (Statistical Analysis)

The limit for Polydispersity (PDI ≤ 1.05) was established based on 3-sigma deviation from the clinical pilot lots (Batches CP-001 through CP-10). A PDI exceeding 1.05 correlates with a broadening of the elution profile in the final DS Purified Bulk (Section 3.2.S.2.4), which complicates the separation of the mono-PEGylated species from the di-PEGylated impurities.

$PDI = Mw / Mn$

Statistical evaluation of the correlation between PEG water content and NHS hydrolysis rate was performed using a Linear Regression model:
$Y_{Hydrolysis} = 0.45(X_{Water}) + 0.02$
This model confirms that maintaining water content below 0.5% ensures the reagent maintains >95% activation over its 24-month shelf life.

---
*End of Subsection 3.2.S.2.3.4*

---

