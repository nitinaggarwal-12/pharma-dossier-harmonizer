# Drug Substance - Characterization

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 22:59:43

---

# Introduction to Characterization Studies

## Objectives and Scope

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.3.1: ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS
### SUBSECTION: OBJECTIVES AND SCOPE OF CHARACTERIZATION STUDIES

---

**Document ID:** GHS-GLUCXR-M3DS-CHAR-001  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)  
**Date of Issue:** October 24, 2023  
**Regulatory Status:** IND/NDA Submission Supporting Documentation  
**Confidentiality:** Highly Confidential – Proprietary Manufacturing Information  

---

### 1.0 INTRODUCTION AND REGULATORY BASIS

The characterization of Glucogen-XR (glucapeptide extended-release), a novel recombinant GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line, represents a critical component of the Chemistry, Manufacturing, and Controls (CMC) dossier. This subsection delineates the comprehensive objectives and the expansive scope of the analytical programs designed to establish the physicochemical properties, biological activity, and structural integrity of the drug substance (DS).

In accordance with **ICH Guideline Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **ICH Q11** (*Development and Manufacture of Drug Substances*), Google Health Sciences has implemented an orthogonal analytical strategy. This strategy ensures that the molecular entity is characterized beyond the routine release testing, providing a molecular "fingerprint" that guarantees safety, efficacy, and batch-to-batch consistency.

### 2.0 PRIMARY OBJECTIVES

The overarching objective of the characterization program for Glucogen-XR is to provide definitive scientific evidence regarding the molecular identity and functional potency of the peptide. The specific objectives are categorized as follows:

#### 2.1 Structural Confirmation and Primary Sequence Verification
*   **Objective 1.1:** To confirm the primary amino acid sequence of the glucapeptide moiety (4.5 kDa) and its conjugation/fusion state with the extended-release (XR) scaffolding.
*   **Objective 1.2:** To verify the N-terminal and C-terminal sequences using automated Edman degradation and High-Resolution Mass Spectrometry (HRMS).
*   **Objective 1.3:** To map the disulfide bridge patterns (if applicable) and identify any potential post-translational modifications (PTMs), specifically deamidation, oxidation, and glycation.

#### 2.2 Physicochemical Characterization
*   **Objective 2.1:** To determine the molecular weight with a precision of ± 0.001% using Electrospray Ionization Time-of-Flight (ESI-TOF) mass spectrometry.
*   **Objective 2.2:** To elucidate the secondary and tertiary folding patterns using Circular Dichroism (CD) and Fourier-Transform Infrared (FTIR) spectroscopy.
*   **Objective 2.3:** To assess the molar absorptivity (extinction coefficient) experimentally for accurate quantification.

#### 2.3 Potency and Biological Activity
*   **Objective 3.1:** To quantify the binding affinity ($K_d$) to the human GLP-1 receptor (GLP-1R) using Surface Plasmon Resonance (SPR).
*   **Objective 3.2:** To establish the *in vitro* biological activity (EC50) through a cell-based cAMP activation assay, ensuring alignment with the reference standard.

#### 2.4 Purity and Impurity Profiling
*   **Objective 4.1:** To characterize product-related variants, including truncated forms, aggregates (dimers, trimers, and high-molecular-weight species), and chemically modified isoforms.
*   **Objective 4.2:** To identify and quantify process-related impurities, including Host Cell Proteins (HCP), Host Cell DNA (hcDNA), and residual solvents or leachables.

---

### 3.0 SCOPE OF THE CHARACTERIZATION PROGRAM

The scope of this study encompasses all pivotal clinical and registration batches produced at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco, CA). The program covers the Drug Substance (DS) in its intermediate liquid form and the final processed state.

#### 3.1 Batch Selection and Representative Sampling
The characterization data presented herein are derived from the following representative batches of Glucogen-XR. These batches were manufactured using the commercial-scale process (2,000L Bioreactor) utilizing the GHS-CHO-001 GS-knockout cell line.

**Table 1: Clinical and Registration Batches Subjected to Extensive Characterization**

| Batch Number | Manufacturing Date | Scale (Liters) | Purpose | Site of Manufacture |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-Jan-2025 | 2,000L | Phase III Clinical Supply | GHS-SSF-01 |
| **GLUC-2025-002** | 04-Feb-2025 | 2,000L | Phase III Clinical Supply | GHS-SSF-01 |
| **GLUC-2025-003** | 01-Mar-2025 | 2,000L | Registration Stability (T0) | GHS-SSF-01 |
| **GLUC-2025-004** | 15-Mar-2025 | 2,000L | Process Performance Qualification (PPQ-1) | GHS-SSF-01 |
| **GLUC-2025-005** | 22-Mar-2025 | 2,000L | Process Performance Qualification (PPQ-2) | GHS-SSF-01 |
| **GLUC-2025-006** | 05-Apr-2025 | 2,000L | Process Performance Qualification (PPQ-3) | GHS-SSF-01 |

#### 3.2 Analytical Orthogonality Matrix
To ensure comprehensive coverage, Google Health Sciences employs an "Orthogonal Verification Matrix." This ensures that every critical quality attribute (CQA) is interrogated by at least two independent physical or chemical principles.

**Table 2: Orthogonal Characterization Matrix**

| Attribute | Primary Method | Supporting/Orthogonal Method |
| :--- | :--- | :--- |
| **Molecular Mass** | LC-ESI-MS (Intact) | MALDI-TOF MS |
| **Primary Sequence** | Peptide Mapping (LC-MS/MS) | N-terminal Edman Degradation |
| **Secondary Structure** | Far-UV Circular Dichroism (CD) | FTIR Spectroscopy |
| **Aggregation State** | SEC-MALS | Sedimentation Velocity (AUC-SV) |
| **Charge Heterogeneity** | cIEF (Capillary Isoelectric Focusing) | Ion-Exchange Chromatography (IEX) |
| **Glycosylation (if any)** | HPAEC-PAD | N-Glycan Profiling (Mass Spec) |
| **Potency** | GLP-1R Binding (SPR) | Cell-based cAMP Bioassay |

---

### 4.0 DETAILED TECHNICAL SPECIFICATIONS AND PROTOCOLS

#### 4.1 Protocol for Intact Mass Analysis (Protocol GHS-ANA-MS-01)
The objective is to confirm the total molecular weight of the Glucogen-XR peptide.

1.  **Instrument Calibration:** Waters Vion IMS QTof, calibrated using NaCsI (Sodium Cesium Iodide) cluster ions to within 1 ppm mass accuracy.
2.  **Sample Preparation:** Dilute Glucogen-XR DS to 1.0 mg/mL in 0.1% Formic Acid.
3.  **Chromatographic Conditions:** 
    *   Column: ACQUITY UPLC Protein BEH C4, 300Å, 1.7 µm.
    *   Mobile Phase A: 0.1% FA in Water.
    *   Mobile Phase B: 0.1% FA in Acetonitrile.
    *   Gradient: 5% to 80% B over 15 minutes.
4.  **Data Analysis:** Deconvolution performed using MaxEnt1 algorithm.
5.  **Target Result:** $MW_{experimental} = 48,234.56 \text{ Da} \pm 2 \text{ Da}$.

#### 4.2 Protocol for Peptide Mapping (Protocol GHS-ANA-PM-04)
To ensure 100% sequence coverage and identify site-specific PTMs.

1.  **Denaturation:** 6M Guanidine HCl in 50mM Tris-HCl.
2.  **Reduction:** 10mM DTT at 56°C for 45 minutes.
3.  **Alkylation:** 25mM Iodoacetamide (IAM) at room temperature in the dark for 30 minutes.
4.  **Digestion:** Trypsin/Lys-C enzyme blend at 1:20 (w/w) ratio; 37°C for 16 hours.
5.  **Separation:** Reverse-phase HPLC (C18) coupled with Orbitrap MS/MS.
6.  **Data Scoring:** Identification of y- and b-ion series for every predicted peptide fragment.

---

### 5.0 STATISTICAL ANALYSIS AND ACCEPTANCE CRITERIA

The scope includes the application of rigorous statistical controls to the characterization data. For the three PPQ batches (GLUC-2025-004 through 006), the following criteria apply:

*   **Similarity Index:** For CD and FTIR spectra, a correlation coefficient ($r$) of $> 0.98$ compared to the Internal Reference Standard (IRS-GLUC-2024).
*   **Purity Requirements:** 
    *   Monomer content by SEC-MALS: $\geq 98.5\%$.
    *   Total related substances by RP-HPLC: $\leq 2.0\%$.
*   **Mass Accuracy:** $< 20 \text{ ppm}$ error for all major peptide fragments identified in mapping studies.

---

### 6.0 CALCULATION OF THE THEORETICAL EXTINCTION COEFFICIENT

The scope of work includes the determination of the extinction coefficient ($\epsilon$) to facilitate accurate protein quantification by $A_{280}$. Based on the amino acid sequence of Glucogen-XR:

$$ \epsilon = (n_W \times 5500) + (n_Y \times 1490) + (n_C \times 125) $$

Where:
*   $n_W$ (Tryptophan count) = 2
*   $n_Y$ (Tyrosine count) = 4
*   $n_C$ (Cystine count) = 0 (reduced state)

$$ \epsilon = (2 \times 5500) + (4 \times 1490) = 11,000 + 5,960 = 16,960 \text{ M}^{-1}\text{cm}^{-1} $$

Experimental verification via Amino Acid Analysis (AAA) is included in the scope of Section 3.2.S.3.1.2.

---

### 7.0 REGULATORY COMPLIANCE REFERENCES

1.  **FDA Guidance for Industry:** *Q6B Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products (August 1999).*
2.  **USP <121>:** *Insulin Assays / GLP-1 Receptor Agonist Methodologies.*
3.  **USP <1052>:** *Biotechnology-Derived Articles—Amino Acid Analysis.*
4.  **ICH Q2(R2):** *Validation of Analytical Procedures.*
5.  **21 CFR Part 211:** *Current Good Manufacturing Practice for Finished Pharmaceuticals.*

---

### 8.0 SUMMARY OF CHARACTERIZATION SCOPE

By executing the studies outlined in this objective and scope statement, Google Health Sciences ensures that Glucogen-XR is characterized to the highest industry standards. The use of the GHS-CHO-001 cell line and the specific XR-technology requires the granular level of detail provided in the subsequent technical reports (S.3.1.2 through S.3.1.8). These studies collectively demonstrate that the drug substance is a homogenous, potent, and structurally intact GLP-1 receptor agonist suitable for the treatment of Type 2 Diabetes Mellitus.

**[END OF SUBSECTION]**

---

## Analytical Strategy

# MODULE 3: QUALITY (D-S-CHARACTERIZATION)
## SECTION 3.2.S.3.1: ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS

### SUBSECTION: ANALYTICAL STRATEGY FOR GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)

---

#### 3.2.S.3.1.1 Overview of the Analytical Hierarchy
The analytical strategy for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences, is predicated on a multi-dimensional orthogonal approach designed to ensure the comprehensive structural, functional, and physicochemical characterization of the drug substance (DS). Given the complexity of the glucapeptide molecule—a recombinant GLP-1 receptor agonist expressed in the proprietary GHS-CHO-001 cell line—the strategy employs a tiered framework aligned with ICH Q6B, ICH Q11, and USP <1047>.

The strategy is bifurcated into two primary domains:
1.  **Primary Structural Confirmation:** Establishing the fundamental identity of the polypeptide backbone, post-translational modifications (PTMs), and higher-order structure (HOS).
2.  **Product-Related Substance and Impurity Profiling:** Quantifying variants such as deamidation, oxidation, aggregation, and truncation products.

#### 3.2.S.3.1.2 Risk-Based Selection of Analytical Modalities
The selection of methodologies was guided by a Critical Quality Attribute (CQA) assessment. For Glucogen-XR, the primary risks identified during development included N-terminal truncation (affecting potency) and C-terminal heterogeneity.

**Table 1: Analytical Strategy Matrix for Glucogen-XR Characterization**

| Attribute Category | Primary Analytical Technique | Orthogonal/Confirmatory Technique | Regulatory/Compendial Reference |
| :--- | :--- | :--- | :--- |
| **Primary Sequence** | LC-MS/MS Peptide Mapping (Trypsin/Glu-C) | Edman Degradation (N-term 15 residues) | ICH Q6B, USP <121.1> |
| **Molecular Weight** | Intact Mass Spectrometry (Orbitrap FTMS) | SEC-MALS | ICH Q6B |
| **Glycosylation** | HPAEC-PAD (Sialic Acid Profiling) | MALDI-TOF (Released Glycans) | USP <129>, ICH Q6B |
| **Secondary Structure** | Far-UV Circular Dichroism (CD) | FTIR Spectroscopy | USP <197> |
| **Tertiary Structure** | Near-UV CD | Intrinsic Fluorescence | USP <129> |
| **Purity/Impurity** | RP-HPLC (Gradient elution) | CEX-HPLC / icIEF | USP <621>, <121> |
| **Aggregation** | SE-HPLC | Dynamic Light Scattering (DLS) | USP <788>, <789> |
| **Biological Activity** | Cell-based cAMP Reporter Assay | SPR (Binding Affinity - Biacore) | ICH Q6B |

---

#### 3.2.S.3.1.3 Detailed Protocol: Primary Structural Characterization

##### 3.2.S.3.1.3.1 Peptide Mapping by LC-MS/MS (Protocol GHS-ANA-PM-09)
The objective is to achieve >98% sequence coverage.

**Step-by-Step Procedure:**
1.  **Denaturation:** Dilute 100 µg of Glucogen-XR (Batch GLUC-2025-001) in 6M Guanidine-HCl, 50 mM Tris-HCl, pH 8.0.
2.  **Reduction:** Add 10 mM Dithiothreitol (DTT); incubate at 56°C for 45 minutes.
3.  **Alkylation:** Add 25 mM Iodoacetamide (IAM); incubate in the dark at room temperature for 30 minutes.
4.  **Buffer Exchange:** Use Zeba Spin Desalting Columns into 50 mM Ammonium Bicarbonate, pH 7.8.
5.  **Digestion:**
    *   *Enzyme 1:* Trypsin (Sequencing Grade) at 1:20 (w/w) ratio; 16 hours at 37°C.
    *   *Enzyme 2:* Glu-C at 1:10 (w/w) ratio; 16 hours at 25°C.
6.  **Quenching:** Add 1% Trifluoroacetic acid (TFA).
7.  **Analysis:** LC-MS/MS using a Thermo Scientific™ Orbitrap™ Exploris 480. Mobile Phase A: 0.1% FA in Water; Mobile Phase B: 0.1% FA in Acetonitrile.

**Calculations for Sequence Coverage:**
$$Sequence Coverage (\%) = \left( \frac{\text{Number of amino acids identified}}{\text{Total amino acids in theoretical sequence}} \right) \times 100$$

**Table 2: Characterization Batch Analysis Results (Peptide Mapping)**

| Batch Number | Date of Manufacture | Site | Sequence Coverage (%) | PTM: Oxidation (Met) | PTM: Deamidation (Asn) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | SSF-3000 | 99.4% | 0.45% | 1.12% |
| GLUC-2025-002 | 02-FEB-2025 | SSF-3000 | 99.1% | 0.51% | 1.08% |
| GLUC-2025-003 | 15-MAR-2025 | SSF-3000 | 99.7% | 0.38% | 0.95% |

---

#### 3.2.S.3.1.4 Physicochemical Characterization Strategy

##### 3.2.S.3.1.4.1 Higher-Order Structure (HOS) Analysis
The extended-release profile of Glucogen-XR is dependent on the maintenance of its helical conformation. The analytical strategy employs Circular Dichroism (CD) to monitor the alpha-helical content.

**Formula for Mean Residue Ellipticity (MRE):**
$$[\theta]_{mre} = \frac{\theta_{obs} \times MRW}{10 \times l \times c}$$
Where:
*   $\theta_{obs}$ = Observed ellipticity (mdeg)
*   $MRW$ = Mean Residue Weight (Da)
*   $l$ = Path length (cm)
*   $c$ = Concentration (g/mL)

##### 3.2.S.3.1.4.2 Size Heterogeneity and Aggregation
SEC-MALS (Size Exclusion Chromatography with Multi-Angle Light Scattering) is utilized to determine the absolute molecular weight of the Glucogen-XR monomers and any high-molecular-weight species (HMWS).

**Equipment Specifications:**
*   **HPLC:** Agilent 1260 Infinity II
*   **Column:** TSKgel G3000SWxl, 7.8 mm ID x 30 cm
*   **MALS Detector:** Wyatt DAWN HELEOS II
*   **Refractive Index Detector:** Wyatt Optilab T-rEX

**Table 3: SEC-MALS Data for Clinical Batches**

| Batch Number | Monomer Content (%) | HMWS (%) | Measured MW (kDa) | Theoretical MW (kDa) | Polydispersity (Mw/Mn) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.42 | 0.58 | 44.12 | 44.15 | 1.002 |
| GLUC-2025-005 | 99.15 | 0.85 | 44.09 | 44.15 | 1.005 |
| GLUC-2025-010 | 98.88 | 1.12 | 44.18 | 44.15 | 1.003 |

---

#### 3.2.S.3.1.5 Biological Strategy: Potency and Binding Affinity
The analytical strategy ensures that the recombinant peptide maintains high fidelity to the human GLP-1 receptor.

**Cell-Based Bioassay (HEK293-GLP1R-CRE-Luc):**
1.  **Preparation:** Seed cells at $5 \times 10^4$ cells/well.
2.  **Incubation:** Add serial dilutions of Glucogen-XR (Reference Standard GHS-RS-001 vs. Sample GLUC-2025-XXX).
3.  **Measurement:** Measure luciferase activity using a luminometer.
4.  **Analysis:** Four-parameter logistic (4PL) regression model to determine $EC_{50}$.

**Calculated Relative Potency:**
$$Relative Potency = \frac{EC_{50} \text{ (Reference)}}{EC_{50} \text{ (Sample)}} \times 100\%$$

---

#### 3.2.S.3.1.6 Impurity Profiling Strategy: Product-Related Variants
Google Health Sciences utilizes an orthogonal approach to monitor charge variants using icIEF (isoelectric focusing) and CEX-HPLC.

**Table 4: Charge Variant Profile (icIEF Results)**

| Peak Identification | pI Range | GLUC-2025-001 (%) | GLUC-2025-002 (%) | Specification |
| :--- | :--- | :--- | :--- | :--- |
| **Acidic Variants** | 4.2 - 4.8 | 4.2 | 4.5 | ≤ 10.0% |
| **Main Peak** | 4.9 - 5.3 | 94.1 | 93.8 | ≥ 85.0% |
| **Basic Variants** | 5.4 - 5.9 | 1.7 | 1.7 | ≤ 5.0% |

#### 3.2.S.3.1.7 Strategy for Process-Related Impurities
Residual Host Cell Proteins (HCP) are quantified via a validated sandwich ELISA using polyclonal antibodies generated specifically against the GHS-CHO-001 cell line proteome.

**Calculations for HCP (ppm):**
$$HCP (ppm) = \frac{\text{Measured HCP (ng/mL)}}{\text{Protein Concentration (mg/mL)}}$$

**Table 5: Residual Impurities Summary**

| Analyte | Method | Detection Limit | Result (GLUC-2025-001) |
| :--- | :--- | :--- | :--- |
| Host Cell Protein | GHS-ELISA-01 | 0.5 ng/mL | 12 ppm |
| Residual DNA | qPCR | 1.0 pg/mg | < LOD |
| Protein A (Leached) | ELISA | 0.1 ng/mL | N/A (Non-Protein A process) |
| Residual Methanol | GC-Headspace | 10 ppm | < LOD |

---

#### 3.2.S.3.1.8 References and Standards
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <1047>:** Gene Therapy Products (applied for recombinant peptides).
3.  **FDA Guidance:** "Points to Consider in the Manufacture and Testing of Monoclonal Antibody Products for Human Use" (adapted for GLP-1 agonists).
4.  **Google Health Internal Standard Operating Procedure:** GHS-SOP-QC-445: *Advanced Characterization of Glycapeptides using Orbitrap Mass Spectrometry.*

#### 3.2.S.3.1.9 Conclusion of Analytical Strategy
The data generated through this analytical strategy for Glucogen-XR demonstrates a high level of batch-to-batch consistency and structural integrity. The use of advanced Orbitrap mass spectrometry, combined with robust cell-based functional assays, provides high assurance that the drug substance produced at the 3000 Innovation Drive facility meets the stringent requirements for Type 2 Diabetes Mellitus therapeutic intervention.

---

## Samples Used for Characterization

### 3.2.S.3.1.1 Samples Used for Characterization

The structural and functional characterization of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist produced in the GHS-CHO-001 cell line, was conducted using a comprehensive panel of drug substance (DS) lots, drug product (DP) lots, and reference standards. This section provides an exhaustive catalog of all lots utilized to establish the physicochemical property profile, biological activity, immunochemical properties, and purity/impurity profiles as required by ICH Q6B (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*).

#### 3.2.S.3.1.1.1 Rationale for Sample Selection

The selection of samples for the characterization program was designed to encompass the full breadth of the Glucogen-XR development lifecycle, ensuring that the defined "Quality Target Product Profile" (QTPP) is met consistently. The selection includes:

1.  **Primary Reference Standard (PRS):** Lot GLUC-2025-REF-01, established to serve as the benchmark for all comparative studies.
2.  **Clinical Trial Material (CTM):** Lots utilized in Phase I, II, and III clinical trials to correlate clinical safety and efficacy with molecular structure.
3.  **Process Development Lots:** Lots produced during the optimization of the upstream (perfusion bioreactor) and downstream (chromatography) processes at the South San Francisco facility.
4.  **Process Performance Qualification (PPQ) Lots:** Three consecutive commercial-scale batches produced at 2,000L scale to demonstrate process consistency.
5.  **Degraded/Stressed Samples:** Intentionally stressed samples (thermal, photolytic, oxidative, and pH-driven) used to identify degradation pathways and validate stability-indicating methods.

---

#### 3.2.S.3.1.1.2 Detailed Inventory of Characterization Batches

The following table (Table 3.2.S.3.1-1) summarizes the extensive list of Glucogen-XR samples subjected to orthogonal characterization.

**Table 3.2.S.3.1-1: Comprehensive List of Glucogen-XR Batches for Characterization**

| Batch Number | Scale (L) | Manufacturing Site | Purpose of Use | Manufacture Date | Storage Temp (°C) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-REF-01** | 500 | GHS-SSF-Bldg 1 | Primary Reference Standard | 12-JAN-2025 | -80 ± 5 |
| **GLUC-2025-001** | 50 | GHS-SSF-Bldg 2 | Early-stage Structural Elucidation | 05-FEB-2025 | -70 ± 10 |
| **GLUC-2025-002** | 200 | GHS-SSF-Bldg 2 | Phase I Clinical Material / Tox | 15-MAR-2025 | 2 - 8 |
| **GLUC-2025-003** | 200 | GHS-SSF-Bldg 2 | Phase II Clinical / Glycan Profiling | 22-MAY-2025 | 2 - 8 |
| **GLUC-2025-004-S** | 200 | GHS-SSF-Bldg 2 | Forced Degradation Study (Low pH) | 01-JUN-2025 | Variable |
| **GLUC-2025-005-S** | 200 | GHS-SSF-Bldg 2 | Forced Degradation (Oxidative) | 01-JUN-2025 | Variable |
| **GLUC-2025-006** | 500 | GHS-SSF-Bldg 1 | Process Development / Scalability | 14-AUG-2025 | -70 ± 10 |
| **GLUC-2025-007** | 2000 | GHS-SSF-Bldg 1 | Phase III / Pivotal Characterization | 10-OCT-2025 | 2 - 8 |
| **GLUC-2025-008** | 2000 | GHS-SSF-Bldg 1 | PPQ Lot 1 / Impurity Profiling | 05-NOV-2025 | 2 - 8 |
| **GLUC-2025-009** | 2000 | GHS-SSF-Bldg 1 | PPQ Lot 2 / Higher Order Structure | 12-NOV-2025 | 2 - 8 |
| **GLUC-2025-010** | 2000 | GHS-SSF-Bldg 1 | PPQ Lot 3 / Biological Potency | 19-NOV-2025 | 2 - 8 |
| **GLUC-2025-WCB-01**| N/A | GHS-SSF-Bldg 3 | Working Cell Bank Genetic Testing | 01-JAN-2025 | LN2 Vapor |

---

#### 3.2.S.3.1.1.3 Sample Preparation Protocols and Chain of Custody

To ensure the integrity of the characterization data, all samples were handled according to Google Health Sciences Standard Operating Procedure **GHS-SOP-7742: Handling of Biological Samples for Analytical Characterization**.

##### Protocol for Thawing and Dilution (GHS-PRO-SOP-01)
1.  **Retrieval:** Retrieve cryovials (e.g., Lot GLUC-2025-008) from -80°C ultra-low temperature freezer (Asset ID: GHS-FRZ-992).
2.  **Equilibration:** Allow vials to thaw on ice for 45 minutes. Avoid vortexing to prevent mechanical shear of the glucapeptide chain.
3.  **Buffer Exchange:** For studies requiring specific pH (e.g., Circular Dichroism), samples are exchanged into 10mM Sodium Phosphate buffer (pH 7.4) using 10 kDa MWCO centrifugal filters (Millipore Amicon Ultra-15).
4.  **Concentration Measurement:** Protein concentration is determined by $A_{280}$ using a NanoDrop One spectrophotometer, utilizing the calculated extinction coefficient ($\epsilon = 1.45 \text{ L}\cdot\text{g}^{-1}\cdot\text{cm}^{-1}$).

---

#### 3.2.S.3.1.1.4 Forced Degradation (Stress) Sample Matrix

To fully characterize the molecular vulnerabilities of Glucogen-XR, specific lots were subjected to stress conditions. This allows for the identification of "Product-Related Variants" (e.g., deamidation at Asn residues, methionine oxidation).

**Table 3.2.S.3.1-2: Stress Conditions for Characterization Samples**

| Stress Factor | Lot Number | Conditions | Duration | Primary Analytical Endpoint |
| :--- | :--- | :--- | :--- | :--- |
| **Thermal** | GLUC-2025-007 | 40°C / 75% RH | 4 Weeks | SEC-HPLC (Aggregation) |
| **Acidic** | GLUC-2025-004-S | pH 3.0 (0.1M HCl) | 24 Hours | CEX-HPLC (Deamidation) |
| **Alkaline** | GLUC-2025-004-S | pH 10.0 (0.1M NaOH) | 24 Hours | Peptide Map (Fragmentation) |
| **Oxidative** | GLUC-2025-005-S | 0.3% $H_{2}O_{2}$ | 6 Hours | RP-HPLC (Met-Oxidation) |
| **Photolytic** | GLUC-2025-008 | 1.2M Lux hours | ICH Q1B | Fluorescence (Trp degradation) |

---

#### 3.2.S.3.1.1.5 Statistical Analysis of Characterization Data

For comparability between clinical lots (GLUC-2025-002) and commercial-scale PPQ lots (GLUC-2025-008 through 010), statistical equivalence testing was performed.

**Formula for Calculating Relative Difference:**
$$\% \text{Difference} = \frac{|\text{Value}_{\text{PPQ}} - \text{Value}_{\text{CTM}}|}{\text{Value}_{\text{CTM}}} \times 100$$

The acceptance criterion for primary characterization parameters (e.g., Molecular Weight by ESI-MS) was set at $\leq 0.01\%$ deviation from the theoretical mass of 48,542.4 Da.

---

#### 3.2.S.3.1.1.6 Detailed Batch Analysis Data: Primary Reference Standard (GLUC-2025-REF-01)

The following data represents the baseline characterization of the Primary Reference Standard used to calibrate all subsequent assays.

*   **Amino Acid Analysis (AAA):** Recoveries within $\pm 5\%$ of theoretical composition (USP <121.1>).
*   **N-Terminal Sequencing:** Confirmed sequence H-G-E-G-T-F-T-S-D-V... (Matches 100% of theoretical).
*   **Carbohydrate Content:** Neutral sugars determined via HPAEC-PAD. Sialic acid content: 4.2 mol/mol protein.
*   **Purity by SE-HPLC:** 99.4% Monomer (GHS-MET-221).
*   **Host Cell Protein (HCP):** 12 ppm (using GHS-CHO-001 specific ELISA).

---

#### 3.2.S.3.1.1.7 Regulatory Compliance and Quality Standards

All characterization studies were performed in compliance with:
1.  **ICH Q6B:** Specifications for Biotechnological/Biological Products.
2.  **USP <1047>:** Gene Therapy Products (where applicable for cell line lineage).
3.  **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for Glucapeptides).
4.  **21 CFR Part 11:** Electronic Records and Signatures.

The raw data for these samples is archived in the **Google Cloud Life Sciences Data Repository (GCLS-DR)** under Project ID: `GHS-GLUC-PHASE3-2025`. All data transfers from mass spectrometry (Orbitrap Exploris 480) to the cloud environment utilized end-to-end encryption and metadata tagging for traceability.

#### 3.2.S.3.1.1.8 Conclusion of Sample Inventory

The selection of these 12 distinct lots, ranging from early development to final process validation, provides a statistically significant and scientifically robust basis for the characterization of Glucogen-XR. The inclusion of stressed samples ensures that the characterization program is not only descriptive of the "ideal" state of the molecule but also predictive of its behavior under physiological and shelf-life conditions.

---

# Primary Structure

## Amino Acid Sequence Confirmation by Peptide Mapping

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.3 CHARACTERIZATION
### SECTION 3.2.S.3.1 ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS

---

#### **3.2.S.3.1.2 AMINO ACID SEQUENCE CONFIRMATION BY PEPTIDE MAPPING**

---

##### **3.2.S.3.1.2.1 Introduction and Scope**
The primary structure of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist produced in a proprietary CHO-K1 GS knockout cell line (GHS-CHO-001), is a critical quality attribute (CQA). To ensure the fidelity of the translation process and the absence of post-translational modifications (PTMs) that could impact safety or efficacy, comprehensive amino acid sequence confirmation is performed.

This section details the peptide mapping strategy utilized for the identification and characterization of Glucogen-XR. The methodology employs high-performance liquid chromatography coupled with tandem mass spectrometry (LC-MS/MS) following multi-enzymatic digestion (Trypsin, Chymotrypsin, and Asp-N). This orthogonal approach ensures 100% sequence coverage, including the confirmation of the N-terminal acylation and C-terminal amidation states characteristic of the Glucogen-XR peptide scaffold.

All studies were conducted in accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **USP <1047>** (*Gene Therapy Products - though applied here to biological peptide mapping standards*).

---

##### **3.2.S.3.1.2.2 Reference Standards and Batch Information**
The characterization was performed on three (3) consecutive GMP-grade drug substance batches and compared against the Primary Reference Standard (PRS-GLUC-001).

**Table 3.2.S.3.1.2-1: Batch Inventory for Sequence Confirmation Studies**
| Batch Number | Scale | Manufacturing Date | Site | Intended Use |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | 12-JAN-2025 | South San Francisco, CA | Clinical Phase III / PPQ |
| **GLUC-2025-002** | 2,000L | 02-FEB-2025 | South San Francisco, CA | Clinical Phase III / PPQ |
| **GLUC-2025-003** | 2,000L | 22-FEB-2025 | South San Francisco, CA | Clinical Phase III / PPQ |
| **PRS-GLUC-001** | N/A | 15-OCT-2024 | South San Francisco, CA | Primary Reference Standard |

---

##### **3.2.S.3.1.2.3 Analytical Methodology: Step-by-Step Protocol**

The primary objective of the peptide mapping protocol is to fragment the 12.4 kDa Glucogen-XR polypeptide into manageable peptides (typically 500–3,000 Da) to allow for unambiguous MS/MS sequencing.

###### **Step 1: Protein Denaturation and Reduction**
1.  **Preparation**: Dilute Glucogen-XR drug substance to a final concentration of 2.0 mg/mL using 6M Guanidine Hydrochloride (GuHCl) in 50 mM Tris-HCl buffer (pH 7.8).
2.  **Reduction**: Add Dithiothreitol (DTT) to a final concentration of 10 mM.
3.  **Incubation**: Heat the mixture at 56°C for 45 minutes in a calibrated thermomixer (ID: GHS-TM-09).
    *   *Rationale*: Ensures complete unfolding of the peptide backbone and reduction of any transient disulfide linkages.

###### **Step 2: Alkylation**
1.  **Procedure**: Cool to room temperature. Add Iodoacetamide (IAM) to a final concentration of 25 mM.
2.  **Incubation**: Incubate for 30 minutes at room temperature in the dark.
    *   *Rationale*: Prevents the reformation of disulfide bonds by carbamidomethylation of cysteine residues.

###### **Step 3: Desalting and Buffer Exchange**
1.  **Buffer Exchange**: Utilize Zeba™ Spin Desalting Columns (7K MWCO) to exchange the sample into the digestion buffer (50 mM Ammonium Bicarbonate, pH 8.0).
2.  **Recovery Check**: Verify protein concentration via UV-Vis (A280) using an extinction coefficient of $\epsilon = 1.45 \text{ L}\cdot\text{g}^{-1}\cdot\text{cm}^{-1}$.

###### **Step 4: Enzymatic Digestion (Tryptic)**
1.  **Enzyme**: Sequencing Grade Modified Trypsin (Promega).
2.  **Ratio**: Add Trypsin at a 1:20 (w/w) enzyme-to-substrate ratio.
3.  **Incubation**: 18 hours at 37°C.
4.  **Quenching**: Add 10% Trifluoroacetic acid (TFA) to adjust pH to < 3.0 to terminate enzymatic activity.

###### **Step 5: UHPLC-MS/MS Analysis**
*   **Instrument**: Thermo Scientific™ Orbitrap™ Exploris 480 coupled with Vanquish™ Horizon UHPLC.
*   **Column**: Waters ACQUITY UPLC Peptide BEH C18, 130Å, 1.7 µm, 2.1 mm x 150 mm.
*   **Mobile Phase A**: 0.1% Formic Acid (FA) in H2O.
*   **Mobile Phase B**: 0.1% FA in Acetonitrile (ACN).
*   **Gradient**: 2% to 45% B over 60 minutes.
*   **MS Mode**: Positive ESI, Data-Dependent Acquisition (DDA), HCD fragmentation.

---

##### **3.2.S.3.1.2.4 Theoretical vs. Observed Tryptic Peptides**

The theoretical sequence of Glucogen-XR contains specific cleavage sites at Lysine (K) and Arginine (R). The following table correlates the expected fragments with those observed in batch GLUC-2025-001.

**Table 3.2.S.3.1.2-2: Predicted vs. Observed Tryptic Peptides (Batch GLUC-2025-001)**
| Peptide ID | Sequence Location | Theoretical Mass (Da, Monoisotopic) | Observed Mass (Da, [M+H]+) | Mass Error (ppm) | Modification Found |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **T1** | 1-12 | 1450.7231 | 1450.7238 | 0.48 | N-terminal Acetyl |
| **T2** | 13-24 | 1342.6510 | 1342.6519 | 0.67 | None |
| **T3** | 25-38 | 1588.7744 | 1588.7752 | 0.50 | None |
| **T4** | 39-55 | 1922.9812 | 1922.9825 | 0.68 | Met-Oxidation (0.5%) |
| **T5** | 56-78 | 2455.2104 | 2455.2120 | 0.65 | None |
| **T6** | 79-94 | 1711.8841 | 1711.8850 | 0.53 | C-term Amidation |

---

##### **3.2.S.3.1.2.5 Confirmation of Sequence Coverage**

To achieve 100% sequence coverage and verify overlapping regions, secondary and tertiary digestions were performed using Chymotrypsin (cleaves at F, Y, W) and Endoproteinase Asp-N (cleaves at D).

**Table 3.2.S.3.1.2-3: Summary of Sequence Coverage by Enzyme**
| Enzyme | Number of Peptides Identified | Sequence Coverage (%) | Minimum Confidence (p-value) |
| :--- | :--- | :--- | :--- |
| **Trypsin** | 14 (inc. missed cleavages) | 94.2% | < 10^-5 |
| **Chymotrypsin** | 18 | 88.5% | < 10^-5 |
| **Asp-N** | 12 | 82.1% | < 10^-5 |
| **Combined** | **44** | **100.0%** | **N/A** |

**Calculation of Sequence Coverage:**
$$Coverage \% = \left( \frac{\text{Total Unique Amino Acids Identified}}{\text{Total Amino Acids in Theoretical Sequence}} \right) \times 100$$
For Glucogen-XR, total amino acids = 118. Total unique identified residues = 118. Result = 100%.

---

##### **3.2.S.3.1.2.6 Comparative Analysis of Clinical Batches**

The peptide maps of three representative batches were overlaid to demonstrate manufacturing consistency. The Total Ion Chromatograms (TIC) were evaluated for "fingerprint" consistency.

**Table 3.2.S.3.1.2-4: Peak Area Precision and Consistency across Batches**
| Peak ID (Tryptic) | Retention Time (min) | GLUC-2025-001 (Area %) | GLUC-2025-002 (Area %) | GLUC-2025-003 (Area %) | CV (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **T1** | 12.45 | 14.22 | 14.18 | 14.25 | 0.25 |
| **T2** | 18.92 | 12.10 | 12.05 | 12.15 | 0.41 |
| **T3** | 22.31 | 16.55 | 16.60 | 16.52 | 0.24 |
| **T4** | 29.15 | 18.90 | 18.88 | 18.95 | 0.19 |
| **T5** | 35.60 | 22.10 | 22.15 | 22.08 | 0.16 |
| **T6** | 42.12 | 16.13 | 16.14 | 16.05 | 0.31 |

---

##### **3.2.S.3.1.2.7 Detailed Characterization of Post-Translational Modifications (PTMs)**

Extensive MS/MS fragmentation (High-Energy Collisional Dissociation - HCD) was utilized to localize and quantify low-abundance modifications.

1.  **Deamidation (Asn)**: Observed at $Asn^{28}$ and $Asn^{52}$. Level was < 0.8% in all batches, which is within the established specification of $\leq 2.0\%$.
2.  **Oxidation (Met)**: Observed at $Met^{44}$. Level was consistently 0.4%–0.6%.
3.  **N-terminal Acetylation**: Confirmed by a mass shift of +42.01 Da on the T1 peptide. MS/MS b-ion and y-ion series confirmed the acetyl group is localized to the N-terminal $His^1$.
4.  **C-terminal Amidation**: Confirmed by a mass shift of -0.98 Da (loss of OH, gain of $NH_2$) on the T6 peptide.

---

##### **3.2.S.3.1.2.8 Conclusion**

The amino acid sequence of Glucogen-XR produced by Google Health Sciences has been unequivocally confirmed across multiple GMP batches (GLUC-2025-001, 002, 003). The multi-enzyme peptide mapping strategy provided 100% sequence coverage, confirming the primary structure is identical to the intended design and consistent with the Master Cell Bank (MCB) genetic sequence. The low levels of PTMs identified demonstrate a highly controlled manufacturing process capable of producing a consistent product.

---

**References:**
1.  **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **Google Health Sciences SOP-AN-4402**: *LC-MS Peptide Mapping of GLP-1 Analogs*.
3.  **Liu, H., et al. (2022)**: *Advanced Mass Spectrometry for the Characterization of Therapeutic Peptides*. J. Pharm. Sci. 111(4): 980-995.

---

## Edman Degradation N-Terminal Sequencing

### 3.2.S.3.1.2.1 Edman Degradation N-Terminal Sequencing

#### 1.0 Executive Summary of N-Terminal Identity
N-terminal sequencing of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist expressed in the proprietary GHS-CHO-001 cell line, was performed to confirm the primary amino acid sequence and to assess N-terminal homogeneity. Edman degradation remains the gold standard for unambiguous identification of the amino-terminal residue and subsequent sequence motifs, complementing the Mass Spectrometric (MS/MS) peptide mapping data provided in Section 3.2.S.3.1.1.

The analysis was conducted on three (3) primary Process Performance Qualification (PPQ) batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) to ensure manufacturing consistency. Results confirm that the N-terminal sequence of Glucogen-XR is 100% congruent with the theoretical sequence derived from the genetic construct, with the initial residue identified as Histidine (His-1). No evidence of N-terminal truncation, signal peptide leader sequence retention, or N-terminal modifications (e.g., pyroglutamate formation or acetylation) was detected above the limit of quantitation (LOQ).

---

#### 2.0 Methodological Principle: Automated Edman Degradation
The sequencing was performed using an automated Applied Biosystems (ABI) 494 Procise® Protein Sequencing System, utilizing the Edman degradation chemistry. The process involves three distinct, repetitive steps:

1.  **Coupling:** The phenylisothiocyanate (PITC) reagent reacts with the α-amino group of the N-terminal amino acid under basic conditions (pH 9.0–10.0) to form a phenylthiocarbamyl (PTC) protein derivative.
2.  **Cleavage:** Under acidic conditions (trifluoroacetic acid, TFA), the N-terminal amino acid is cleaved as an anilinothiazolinone (ATZ) derivative, leaving the remainder of the peptide chain intact for the next cycle.
3.  **Conversion:** The unstable ATZ-amino acid is converted into a more stable phenylthiohydantoin (PTH) derivative by treatment with aqueous acid (25% TFA).

The resulting PTH-amino acids are identified and quantified via on-line High-Performance Liquid Chromatography (HPLC) using a reverse-phase C18 column, compared against a standard mixture of PTH-amino acids.

---

#### 3.0 Standard Operating Procedure (SOP-GHS-BIO-4492)
The following protocol was strictly adhered to during the characterization of Glucogen-XR Drug Substance.

##### 3.1 Sample Preparation and Desalting
Given that Glucogen-XR is formulated in a buffer containing stabilizing polyols and surfactants (refer to Section 3.2.P.1), extensive desalting is required to prevent interference with the PITC reaction.

1.  **Loading:** Approximately 500 pmol of Glucogen-XR (Batch GLUC-2025-XXX) is diluted in 0.1% TFA.
2.  **Immobilization:** The sample is loaded onto a ProSorb™ PVDF (polyvinylidene difluoride) membrane.
3.  **Washing:** The membrane is washed three times with 100 µL of 0.1% TFA to remove non-proteinaceous excipients.
4.  **Drying:** The PVDF membrane is dried in a vacuum concentrator (SpeedVac) for 15 minutes to ensure no residual moisture inhibits the coupling reaction.

##### 3.2 Instrument Parameters (ABI 494 Procise)
| Parameter | Setting/Value |
| :--- | :--- |
| **Cycle Type** | Pulsed Liquid / PVDF |
| **Number of Cycles** | 20 (Target) |
| **PTH-AA Column** | Brownlee C18 (2.1 x 220 mm) |
| **Solvent A** | 3.5% Tetrahydrofuran (THF) in water |
| **Solvent B** | Acetonitrile containing 1.2% Isopropanol |
| **Detector Wavelength** | 269 nm (primary), 313 nm (secondary) |
| **Oven Temperature** | 55.0°C ± 0.5°C |
| **Flow Rate** | 325 µL/min |

---

#### 4.0 Detailed Results and Batch Analysis
Sequencing was performed through 20 cycles for each batch. The theoretical N-terminal sequence for Glucogen-XR is:
**H-G-E-G-T-F-T-S-D-V-S-S-Y-L-E-G-Q-A-A-K...**

##### Table 1: N-Terminal Sequence Results for Batch GLUC-2025-001
| Cycle # | Predicted Residue | Observed Residue | Yield (pmol) | Retention Time (min) | % Confidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **His (H)** | His | 412.5 | 8.42 | 99.8% |
| 2 | **Gly (G)** | Gly | 385.2 | 11.15 | 99.5% |
| 3 | **Glu (E)** | Glu | 352.8 | 14.56 | 99.2% |
| 4 | **Gly (G)** | Gly | 340.1 | 11.16 | 99.4% |
| 5 | **Thr (T)** | Thr | 315.4 | 12.88 | 98.9% |
| 6 | **Phe (F)** | Phe | 295.2 | 22.10 | 99.1% |
| 7 | **Thr (T)** | Thr | 268.3 | 12.87 | 98.7% |
| 8 | **Ser (S)** | Ser | 240.1 | 9.54 | 97.5% |
| 9 | **Asp (D)** | Asp | 225.8 | 13.92 | 98.2% |
| 10 | **Val (V)** | Val | 210.4 | 19.34 | 99.0% |

##### Table 2: Comparative Yield and Purity Across Clinical Batches
| Batch Number | Initial Yield (pmol) | Repetitive Yield (%) | Sequence Fidelity | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 412.5 | 94.2% | 100% Match | Pass |
| **GLUC-2025-002** | 398.9 | 93.8% | 100% Match | Pass |
| **GLUC-2025-003** | 425.1 | 94.5% | 100% Match | Pass |
| **GHS-REF-001\*** | 405.0 | 94.1% | 100% Match | Pass |
*\*Internal Reference Standard*

---

#### 5.0 Data Analysis and Calculations

##### 5.1 Calculation of Repetitive Yield
The repetitive yield ($R_y$) is a measure of the efficiency of the Edman degradation cycles and is calculated using the following logarithmic regression:
$$\ln(Y_n) = n \cdot \ln(R_y) + \ln(Y_0)$$
Where:
*   $Y_n$ = Yield of the PTH-amino acid at cycle $n$
*   $n$ = Cycle number
*   $Y_0$ = Theoretical initial yield

For Batch GLUC-2025-001, the calculated repetitive yield was **94.2%**, which exceeds the USP <1055> recommendation of >90% for high-fidelity sequencing of therapeutic peptides.

##### 5.2 N-Terminal Heterogeneity and "Lag" Analysis
No "preview" sequences (indicative of N-terminal truncation) or "lag" sequences (indicative of incomplete cleavage) were observed above the background noise level (approx. 2.5 pmol). Specifically, the absence of a secondary sequence starting at Gly-2 confirms that the signal peptidase cleavage during secretion from GHS-CHO-001 is highly specific.

---

#### 6.0 Regulatory Compliance and Guidelines
This study was performed in accordance with the following regulatory frameworks:
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products. Section 6.1.1 (a) Amino Acid Sequence.
2.  **USP <1055>:** Biotechnology-Derived Articles—Peptide Mapping and Amino Acid Analysis.
3.  **FDA Guidance for Industry:** Characterization and Registration of Biotech Products (Section III-A).

#### 7.0 Conclusion
The N-terminal sequencing of Glucogen-XR via Edman degradation definitively confirms the identity of the first 20 amino acids of the polypeptide chain. The results across three PPQ batches demonstrate exceptional manufacturing consistency. The N-terminal His-1 residue is critical for GLP-1 receptor activation; its unambiguous confirmation ensures the biological potency of the drug substance. All batches met the pre-defined acceptance criteria of 100% sequence identity for the N-terminal region.

---
**Internal Cross-References:**
*   *For C-terminal Sequencing, see Section 3.2.S.3.1.2.2.*
*   *For Intact Mass Analysis, see Section 3.2.S.3.1.1.1.*
*   *For Biological Potency/Bioassay, see Section 3.2.S.3.2.1.*

---

## Mass Spectrometry Analysis

### 3.2.S.3.1.2 Mass Spectrometry Analysis (Primary Structure)

#### 3.2.S.3.1.2.1 Introduction and Scope
This section provides a comprehensive characterization of the primary structure of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist expressed in the proprietary GHS-CHO-001 cell line. Mass spectrometry (MS) serves as the orthogonal confirmatory technique to verify the amino acid sequence, identify post-translational modifications (PTMs), and ensure the integrity of the C-terminal and N-terminal sequences. 

The analysis was performed using ultra-high-performance liquid chromatography coupled with electrospray ionization tandem mass spectrometry (UHPLC-ESI-MS/MS). All experiments were conducted in compliance with **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **USP <1047>** (Gene Therapy Products, applied here for peptide mapping rigor).

---

#### 3.2.S.3.1.2.2 Instrumentation and Data Acquisition Parameters
All mass spectrometric evaluations were executed using a Thermo Scientific™ Orbitrap™ Exploris 480 Mass Spectrometer coupled with a Vanquish™ Horizon UHPLC system.

**Table 1: Mass Spectrometry Operating Parameters (Intact Mass and Peptide Mapping)**

| Parameter | Setting/Specification |
| :--- | :--- |
| **Ion Source** | H-ESI (Heated Electrospray Ionization) |
| **Spray Voltage** | Positive Ion Mode: 3.5 kV; Negative Ion Mode: 2.8 kV |
| **Sheath Gas Flow Rate** | 40 Arb |
| **Aux Gas Flow Rate** | 10 Arb |
| **Ion Transfer Tube Temp** | 320 °C |
| **Vaporizer Temp** | 300 °C |
| **Scan Range (m/z)** | 400 – 4000 (Intact); 150 – 2000 (Peptide Map) |
| **Resolution (FWHM)** | 120,000 at m/z 200 (Intact); 60,000 (MS/MS) |
| **S-Lens RF Level** | 50% |
| **Collision Energy (HCD)** | Stepped 25%, 30%, 35% |
| **Data Acquisition Software** | Chromeleon™ 7.3.1 / BioPharma Finder™ 4.1 |

---

#### 3.2.S.3.1.2.3 Intact Mass Analysis (Molecular Weight Verification)
The theoretical monoisotopic mass of Glucogen-XR, calculated based on the predicted amino acid sequence (C187H291N45O59S2), is **4169.0521 Da**. Intact mass analysis was performed to confirm the molecular weight of the drug substance across three formal stability batches.

**Protocol GLUC-MS-001: Intact Mass Determination**
1. **Sample Preparation:** Glucogen-XR DS (1.0 mg/mL) is diluted to 0.1 mg/mL using 0.1% Formic Acid (FA) in LC-MS grade water.
2. **Desalting:** On-line desalting using a Waters ACQUITY UPLC Protein BEH C4 Column (300Å, 1.7 µm, 2.1 mm x 50 mm).
3. **Mobile Phase A:** 0.1% FA in Water; **Mobile Phase B:** 0.1% FA in Acetonitrile (ACN).
4. **Gradient:** 5% B to 90% B over 10 minutes.
5. **Deconvolution:** MS spectra are deconvoluted using the ReSpect™ algorithm within BioPharma Finder software (Mass Tolerance: 10 ppm).

**Table 2: Intact Mass Results for Clinical Batches**

| Batch Number | Theoretical Mass (Da) | Observed Mass (Da) | Delta (ppm) | Purity (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 4169.0521 | 4169.0532 | +0.26 | 99.82 |
| GLUC-2025-002 | 4169.0521 | 4169.0519 | -0.05 | 99.78 |
| GLUC-2025-003 | 4169.0521 | 4169.0528 | +0.17 | 99.85 |
| **Reference Std** | 4169.0521 | 4169.0523 | +0.05 | 99.91 |

*Note: The observed mass is within the ±5 ppm specification for high-resolution mass spectrometry confirmation of therapeutic peptides.*

---

#### 3.2.S.3.1.2.4 Peptide Mapping (Sequence Coverage)
To confirm 100% of the primary amino acid sequence, Glucogen-XR was subjected to enzymatic digestion using multiple proteases (Trypsin and Glu-C) to ensure overlapping peptide coverage.

##### 3.2.S.3.1.2.4.1 Tryptic Digestion Protocol (GHS-SOP-552)
1. **Denaturation:** 100 µg of Glucogen-XR is dissolved in 6M Guanidine-HCl, 50 mM Tris-HCl (pH 8.0).
2. **Reduction:** Add Dithiothreitol (DTT) to a final concentration of 10 mM; incubate at 56°C for 45 minutes.
3. **Alkylation:** Add Iodoacetamide (IAM) to 25 mM; incubate in the dark at room temperature for 30 minutes.
4. **Quenching:** Add 10 mM DTT to consume excess IAM.
5. **Buffer Exchange:** Use Zeba™ Spin Desalting Columns (7K MWCO) into 50 mM Ammonium Bicarbonate (pH 7.8).
6. **Digestion:** Add Sequencing Grade Modified Trypsin (Promega) at a 1:20 (w/w) enzyme-to-substrate ratio. Incubate at 37°C for 16 hours.
7. **Termination:** Add Trifluoroacetic acid (TFA) to 0.1% to stop the reaction.

**Table 3: Predicted Tryptic Fragments for Glucogen-XR**

| Fragment ID | Sequence | Theoretical m/z [M+H]+ | Observed m/z |
| :--- | :--- | :--- | :--- |
| T1 | HAEGTFTSDVSSYLEGQAAK | 2096.0122 | 2096.0135 |
| T2 | EFIAWLVK | 967.5499 | 967.5512 |
| T3 | GRG | 289.1625 | 289.1620 |
| T4 (Tail) | GGGGSGGGGSGGGGS | 1110.4211 | 1110.4205 |

*Total Sequence Coverage for Trypsin: 94.2% (Overlap required for short C-terminal motifs).*

##### 3.2.S.3.1.2.4.2 Glu-C Digestion Protocol (GHS-SOP-553)
To bridge the T1-T2 junction, Glu-C protease was utilized in 50 mM Phosphate Buffer (pH 7.0) to cleave at Glutamic acid (E) residues.

**Table 4: Overlapping Glu-C Fragments**

| Fragment ID | Sequence | Theoretical m/z [M+H]+ | Observed m/z |
| :--- | :--- | :--- | :--- |
| E1 | HAE | 343.1612 | 343.1609 |
| E2 | GTFTSDVSSYLE | 1290.5891 | 1290.5902 |
| E3 | GQAAKEFIAWLVKGRGGGGGSGGGGSGGGGS | 2605.3218 | 2605.3241 |

*Cumulative Sequence Coverage (Trypsin + Glu-C): 100%.*

---

#### 3.2.S.3.1.2.5 Post-Translational Modification (PTM) Assessment
Google Health Sciences monitors PTMs strictly, as deamidation and oxidation can affect the binding affinity of the GLP-1RA to its receptor.

**Table 5: Quantitative PTM Analysis (Batch GLUC-2025-001)**

| Modification Type | Site | Modification % | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Oxidation** | Met(O) - Internal | 0.42% | < 2.0% |
| **Deamidation** | Asn (N) - Position 28 | 1.15% | < 5.0% |
| **N-terminal Pyro-Glu** | His (H) | < 0.05% (LOD) | < 1.0% |
| **C-terminal Amidation** | Gly (G) | 98.4% | > 95.0% |

**Statistical Analysis of PTMs:**
PTM percentages were calculated using the Peak Area Ratio method:
$$ \% \text{Mod} = \left( \frac{\text{Area}_{\text{modified}}}{\text{Area}_{\text{modified}} + \text{Area}_{\text{native}}} \right) \times 100 $$
Calculations for Batch GLUC-2025-001 indicate an oxidation level of 0.42%, demonstrating high process consistency and effective antioxidant inclusion (L-Methionine) in the formulation.

---

#### 3.2.S.3.1.2.6 Disulfide Bridge Mapping
Glucogen-XR contains a specific disulfide linkage critical for the stability of the extended-release moiety. Mapping was performed by comparing non-reduced and reduced peptide maps.

1. **Non-reduced Map:** Samples were alkylated with N-ethylmaleimide (NEM) prior to digestion to "cap" free thiols and prevent disulfide shuffling.
2. **Analysis:** MS/MS fragmentation (HCD) of the linked peptide $[Cys_{X}-Cys_{Y}]$ confirmed the bridge location between $Cys_{XX}$ and $Cys_{YY}$.
3. **Results:** No free sulfhydryls were detected above the limit of quantitation (LOQ = 0.1%), confirming 100% disulfide bond formation.

---

#### 3.2.S.3.1.2.7 MS/MS Fragmentation (Sequence Validation)
Collision-Induced Dissociation (CID) and Higher-energy Collisional Dissociation (HCD) were used to generate b-ion and y-ion series for the T1 fragment (HAEGTFTSDVSSYLEGQAAK).

**Table 6: Representative b/y Ion Series for T1 Fragment**

| Ion | b-ion (m/z) | y-ion (m/z) | Amino Acid |
| :--- | :--- | :--- | :--- |
| 1 | 138.06 | - | H |
| 2 | 209.10 | 1958.96 | A |
| 3 | 338.14 | 1887.92 | E |
| 4 | 395.16 | 1758.88 | G |
| 5 | 496.21 | 1701.86 | T |
| ... | ... | ... | ... |
| 20 | - | 147.11 | K |

The fragmentation pattern confirms the primary sequence without amino acid substitutions or mistranslations (e.g., Norleucine for Methionine substitution), validating the fidelity of the GHS-CHO-001 expression system.

---

#### 3.2.S.3.1.2.8 Conclusion
The mass spectrometry analysis of Glucogen-XR provides definitive evidence of the primary structure. The intact mass results align with theoretical values within 1 ppm, and peptide mapping confirms 100% sequence coverage across multiple clinical batches (GLUC-2025-001 through 003). PTM levels remain well below the established safety and efficacy thresholds, ensuring a consistent product profile for the treatment of Type 2 Diabetes Mellitus.

---

# PEG Attachment Site Confirmation

## Proteolytic Digestion and LC-MS/MS

### **3.2.S.3.1.2.4 Proteolytic Digestion and LC-MS/MS for PEG Attachment Site Confirmation**

---

#### **1. Scope and Executive Summary**
This subsection provides a comprehensive analytical characterization of the site-specific covalent attachment of the 40 kDa branched Polyethylene Glycol (PEG) moiety to the Glucogen-XR peptide backbone. Glucogen-XR is a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. The primary sequence contains a single site-directed mutation facilitating the conjugation of the PEG maleimide functional group.

Confirmation of the PEGylation site is critical to ensure the biological activity, pharmacokinetic profile, and safety of Glucogen-XR. Misplaced PEGylation or non-specific attachment (e.g., at unintentional cysteine residues or lysine N-termini) could lead to altered receptor binding affinity or increased immunogenicity. The methodology described herein utilizes a bottom-up proteomic approach involving multiple enzyme digestions (Trypsin, Chymotrypsin, and Asp-N) followed by High-Resolution Liquid Chromatography coupled with Tandem Mass Spectrometry (LC-MS/MS).

Data provided in this section pertains to three (3) consecutive Process Performance Qualification (PPG) batches: **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003**.

---

#### **2. Regulatory Compliance and Reference Standards**
The analytical procedures described were developed, validated, and performed in accordance with the following regulatory frameworks and pharmacopeial standards:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **FDA Guidance for Industry:** "Development of Therapeutic Protein Biosimilars: Comparative Analytical Assessment and Other Quality Considerations."
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (for general LC-MS principles).
*   **USP <1047>:** Gene Therapy Products (regarding sequence confirmation).
*   **ISO/IEC 17025:** General requirements for the competence of testing and calibration laboratories.

---

#### **3. Instrumentation and Materials**

##### **3.1 Equipment Specifications**
| Equipment ID | Description | Manufacturer/Model | Calibration Due Date |
| :--- | :--- | :--- | :--- |
| **MS-UHPLC-09** | Orbitrap Exploris 480 Mass Spectrometer | Thermo Fisher Scientific | 12-Nov-2025 |
| **LC-SYS-22** | Vanquish Neo UHPLC System | Thermo Fisher Scientific | 15-Oct-2025 |
| **COL-C18-04** | Hypersil GOLD C18 (150 x 2.1mm, 1.9µm) | Thermo Fisher Scientific | N/A (Disposable) |
| **CENT-05** | Refrigerated Microcentrifuge (5424 R) | Eppendorf | 20-Jun-2025 |
| **THRM-02** | Thermomixer C with SmartBlock | Eppendorf | 14-Aug-2025 |

##### **3.2 Reagents and Reference Materials**
*   **Dithiothreitol (DTT):** BioUltra grade (Sigma-Aldrich, Cat# 43815).
*   **Iodoacetamide (IAM):** Proteomics grade (Sigma-Aldrich, Cat# I1149).
*   **Trypsin/Lys-C Mix:** Mass Spec Grade (Promega, Cat# V5071).
*   **Formic Acid (FA):** Optima™ LC/MS Grade (Fisher Chemical, Cat# A11750).
*   **Acetonitrile (ACN):** Optima™ LC/MS Grade (Fisher Chemical, Cat# A955).
*   **Water (H2O):** Optima™ LC/MS Grade (Fisher Chemical, Cat# W6).
*   **Internal Standard:** Isoselenium-labeled Glucogen-XR reference (GHS-REF-2024-V2).

---

#### **4. Analytical Protocol: Multi-Enzyme Digestion**

Because the 40 kDa PEG chain significantly hinders proteolytic access to the peptide backbone due to steric hindrance and "cloud" effects, a multi-enzyme approach is required to ensure 100% sequence coverage and definitive identification of the PEGylated peptide fragment.

##### **4.1 Sample Preparation and Denaturation**
1.  Dilute **100 µg** of Glucogen-XR drug substance (Batch GLUC-2025-XXX) to a concentration of 2.0 mg/mL using 8M Urea / 50 mM Tris-HCl buffer (pH 8.0).
2.  **Reduction:** Add DTT to a final concentration of 10 mM. Incubate at 37°C for 45 minutes at 600 RPM.
3.  **Alkylation:** Cool to room temperature. Add IAM to a final concentration of 25 mM. Incubate in the dark at room temperature for 30 minutes.
4.  **Quenching:** Add DTT to a final concentration of 5 mM to neutralize excess IAM.

##### **4.2 Proteolytic Cleavage (Trypsin/Lys-C)**
1.  Dilute the denatured/alkylated sample 1:8 with 50 mM Ammonium Bicarbonate to reduce Urea concentration to <1M (ensuring enzyme activity).
2.  Add Trypsin/Lys-C mixture at a ratio of 1:20 (w/w, enzyme:protein).
3.  Incubate at 37°C for 16 hours.
4.  Acidify with 10% FA to reach pH < 3.0 to terminate digestion.

##### **4.3 Alternative Digestion (Asp-N) for PEG-Linker Coverage**
To specifically isolate the PEG-attachment site (Cys-32 position in the synthetic sequence), a parallel digestion using Endoproteinase Asp-N is performed.
1.  Asp-N is added at a 1:50 ratio in 50 mM Sodium Phosphate buffer (pH 8.0).
2.  Incubate at 37°C for 12 hours.
3.  This cleavage yields the specific fragment **[Gly-22 to Gly-35]** containing the Cys-32 PEG attachment.

---

#### **5. LC-MS/MS Parameters**

##### **5.1 Liquid Chromatography (UHPLC) Settings**
*   **Mobile Phase A:** 0.1% Formic Acid in Water.
*   **Mobile Phase B:** 0.1% Formic Acid in 80% Acetonitrile / 20% Water.
*   **Gradient Profile:**
    *   0.0–5.0 min: 2% B (Equilibration)
    *   5.0–65.0 min: 2% to 45% B (Linear Gradient)
    *   65.0–75.0 min: 45% to 95% B (Wash)
    *   75.0–85.0 min: 2% B (Re-equilibration)
*   **Flow Rate:** 300 nL/min.
*   **Column Temp:** 45°C.

##### **5.2 Mass Spectrometry (MS) Settings**
*   **Ionization:** Positive Electrospray (ESI).
*   **Scan Range:** 350–2000 m/z (MS1), 100–2000 m/z (MS2).
*   **Resolution:** 120,000 (MS1), 30,000 (MS2).
*   **Fragmentation:** Higher-Energy Collisional Dissociation (HCD) at 28% Normalized Collision Energy (NCE).
*   **Dynamic Exclusion:** 30 seconds.

---

#### **6. Data Analysis and Site Identification Strategy**

The PEG moiety in Glucogen-XR (40 kDa) is polydisperse, which creates a significant analytical challenge for MS. The PEGylated peptide does not appear as a single sharp peak but rather as a characteristic "hump" of multiply charged species separated by 44 Da (ethylene oxide unit).

**Calculation of Expected m/z for PEGylated Peptide:**
$$m/z_{total} = \frac{MW_{peptide} + MW_{PEG} + (n \cdot H^+)}{n}$$
Where:
*   $MW_{peptide}$ = Exact mass of the specific proteolytic fragment.
*   $MW_{PEG}$ = Distribution centered around 40,000 Da.
*   $n$ = Charge state (typically +15 to +45 for PEGylated fragments).

**Site Confirmation Criteria:**
1.  **Retention Time Shift:** The PEGylated peptide fragment must show a significant shift in retention time compared to the non-PEGylated version.
2.  **Diagnostic Fragment Ions:** Presence of $a, b, y$ ions corresponding to the peptide backbone, with a mass gap at the Cys-32 residue representing the linker mass.
3.  **Absence of Unmodified Peptide:** The "naked" peptide fragment containing Cys-32 must be absent or below 0.1% relative abundance.

---

#### **7. Results: PEG Attachment Site Confirmation (PPQ Batches)**

The following table summarizes the identification of the PEGylated peptide fragment [Fragment T9: Sequence A-B-C-D-**C***-E-F-R] across three batches.

##### **Table 1: Identification of Cys-32 PEGylated T9 Fragment**
| Batch Number | Observed m/z (Center of Distribution) | Charge State (Dominant) | Calculated Neutral Mass (Da) | Sequence Coverage (%) | Retention Time (min) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 1345.82 | +32 | 43,034.24 | 100% | 48.2 |
| **GLUC-2025-002** | 1345.79 | +32 | 43,033.28 | 100% | 48.1 |
| **GLUC-2025-003** | 1345.85 | +32 | 43,035.20 | 100% | 48.3 |
| **Reference Std** | 1345.81 | +32 | 43,033.92 | 100% | 48.2 |

##### **Table 2: Verification of Specificity (Non-target Residues)**
Evaluation of potential off-target PEGylation at Lysine (K) residues or the N-terminus.
| Potential Site | Residue Type | Detected? | Limit of Detection (LOD) | Status |
| :--- | :--- | :--- | :--- | :--- |
| N-Terminus | Histidine-1 | NO | 0.05% | PASS |
| Lys-12 | Lysine | NO | 0.05% | PASS |
| Lys-26 | Lysine | NO | 0.05% | PASS |
| Lys-34 | Lysine | NO | 0.05% | PASS |

---

#### **8. Statistical Analysis of PEG Distribution**

To ensure batch-to-batch consistency of the PEGylation process, the Polydispersity Index (PDI) of the PEG moiety attached to the peptide was calculated using the following formula:
$$PDI = \frac{M_w}{M_n}$$
Where $M_w$ is the weight-average molecular weight and $M_n$ is the number-average molecular weight, derived from the deconvoluted MS spectra of the T9 fragment.

| Batch Number | $M_n$ (Da) | $M_w$ (Da) | PDI | Mean PEG Mass |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 41,250 | 42,075 | 1.020 | 40,150 |
| GLUC-2025-002 | 41,310 | 42,136 | 1.020 | 40,210 |
| GLUC-2025-003 | 41,280 | 42,105 | 1.020 | 40,180 |

*Target Specification: PDI < 1.05; Mean PEG Mass 40,000 ± 2,000 Da.*

---

#### **9. MS/MS Fragment Ion Analysis (Cys-32 Verification)**

The HCD fragmentation of the PEGylated peptide T9 produced a comprehensive series of $y$ and $b$ ions. While the PEG-linked Cys-32 residue shows suppressed fragmentation due to the 40 kDa mass, the flanking $y$-ions ($y_1$ to $y_4$) and $b$-ions ($b_1$ to $b_4$) provide definitive proof of the attachment location.

**Diagnostic Ions for Cys-32 (PEGylated):**
*   $y_1$ to $y_4$: Match the theoretical masses for the C-terminal sequence of the T9 fragment.
*   $b_5$: Displays a mass shift of +40,000 Da (nominal) relative to the $b_4$ ion, confirming the addition of PEG at the fifth residue of the fragment (Cys-32).

---

#### **10. Conclusion**
The LC-MS/MS analysis of proteolytic digests from Glucogen-XR PPQ batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003** provides unambiguous evidence of site-specific PEGylation at Cys-32. No evidence of off-target PEGylation was observed above the LOD of 0.05%. The PEG distribution and polydispersity remain consistent across batches, demonstrating the robustness of the Google Health Sciences conjugation process.

---
**END OF SUBSECTION**

---

## Site Occupancy Determination

# MODULE 3: QUALITY (DATA AND ANALYSIS)
## 3.2.S.3.1 ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS
### 3.2.S.3.1.4 PEG ATTACHMENT SITE CONFIRMATION
#### 3.2.S.3.1.4.2 Site Occupancy Determination

---

### 1.0 SCOPE AND EXECUTIVE SUMMARY
This subsection provides the comprehensive technical data and analytical validation regarding the site occupancy determination for Glucogen-XR (glucapeptide extended-release), a site-specific PEGylated GLP-1 receptor agonist. The manufacturing process utilizes a 40 kDa branched Polyethylene Glycol (PEG) maleimide, covalently conjugated to a unique C-terminal cysteine residue (Cys-38) engineered into the recombinant peptide sequence.

Site occupancy determination is a critical quality attribute (CQA) that defines the potency, pharmacokinetic profile, and immunological safety of Glucogen-XR. Unlike non-specific PEGylation strategies, the Google Health Sciences (GHS) platform aims for >99.0% mono-PEGylation at the Cys-38 locus. This section details the multi-modal analytical approach used to quantify the extent of PEGylation, the presence of unreacted peptide, and the characterization of positional isomers or multi-PEGylated species.

---

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The methodologies and validation protocols described herein are in strict accordance with the following regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for PEG-peptides).
*   **FDA Guidance for Industry:** "Liposome Drug Products: Chemistry, Manufacturing, and Controls; Human Pharmacokinetics and Bioavailability; and Labeling Documentation" (referenced for complex parenteral considerations).
*   **EMA/CHMP/BWP/253546/2006:** Guideline on the Development, Production, Characterization and Specification of Monoclonal Antibodies and Related Products (PEG-conjugate sections).

---

### 3.0 ANALYTICAL METHODOLOGY OVERVIEW

To determine site occupancy and distribution, Google Health Sciences employs three orthogonal analytical techniques:
1.  **Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC)** with UV and Evaporative Light Scattering Detection (ELSD).
2.  **Ion-Exchange Chromatography (IEX)** for charge-based distribution of species.
3.  **Matrix-Assisted Laser Desorption/Ionization Time-of-Flight Mass Spectrometry (MALDI-TOF MS)** for absolute molecular weight confirmation and polydispersity indexing.

#### 3.1 Protocol: RP-HPLC/ELSD for PEG-Peptide Ratio
**Purpose:** To separate and quantify non-PEGylated peptide, mono-PEGylated Glucogen-XR, and potential poly-PEGylated impurities.

**Equipment and Reagents:**
*   **System:** Waters Acquity UPLC H-Class with Dual Wavelength UV Detector and Waters 2424 ELSD.
*   **Column:** Waters XBridge Protein BEH C4, 300Å, 3.5 µm, 4.6 mm X 150 mm.
*   **Mobile Phase A:** 0.1% Trifluoroacetic acid (TFA) in HPLC-grade Water.
*   **Mobile Phase B:** 0.08% TFA in Acetonitrile (MeCN).

**Chromatographic Conditions:**
| Parameter | Value |
| :--- | :--- |
| Flow Rate | 1.0 mL/min |
| Injection Volume | 20 µL (Target concentration 1.0 mg/mL) |
| Column Temperature | 45°C ± 1°C |
| UV Detection | 214 nm, 280 nm |
| ELSD Gain | 100 |
| ELSD Drift Tube | 60°C |
| ELSD Pressure | 40 psi (N2) |

**Gradient Profile:**
| Time (min) | %A | %B | Curve |
| :--- | :--- | :--- | :--- |
| 0.0 | 75 | 25 | - |
| 5.0 | 75 | 25 | 6 |
| 35.0 | 45 | 55 | 6 |
| 40.0 | 10 | 90 | 6 |
| 45.0 | 75 | 25 | 1 |

---

### 4.0 BATCH ANALYSIS DATA (SITE OCCUPANCY)

The following data represents the site occupancy results for three pivotal clinical batches and three commercial-scale validation batches produced at the Google Health Sciences South San Francisco facility (Building 3000 Innovation Drive).

#### Table 4.1: Site Occupancy Distribution by RP-HPLC (% Area)
| Batch Number | Date of Manufacture | Mono-PEG (Target) | Free Peptide | Di-PEG | Other Impurities |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 99.42% | 0.18% | 0.25% | 0.15% |
| GLUC-2025-002 | 18-JAN-2025 | 99.51% | 0.12% | 0.21% | 0.16% |
| GLUC-2025-003 | 25-JAN-2025 | 99.38% | 0.22% | 0.28% | 0.12% |
| GLUC-2025-004* | 05-FEB-2025 | 99.65% | 0.09% | 0.15% | 0.11% |
| GLUC-2025-005* | 12-FEB-2025 | 99.58% | 0.14% | 0.18% | 0.10% |
| GLUC-2025-006* | 19-FEB-2025 | 99.49% | 0.15% | 0.24% | 0.12% |

*\*Denotes Process Performance Qualification (PPQ) scale batches.*

**Analysis of Results:**
The mean site occupancy for the Cys-38 position across all batches is **99.51% (SD ± 0.10%)**. The consistency between clinical and PPQ batches demonstrates the robustness of the maleimide-thiol conjugation chemistry under the controlled pH (6.5) and temperature (4°C) conditions utilized in the Google Health Sciences manufacturing process.

---

### 5.0 CALCULATION OF THE PERCENT OCCUPANCY

The occupancy rate is calculated based on the molar response factors derived from the UV absorbance at 214 nm, corrected for the presence of the PEG moiety which contributes negligibly to the absorbance at this wavelength but significantly alters the hydrodynamic radius and mass.

#### 5.1 Formula for Occupancy
$$Occupancy (\%) = \left( \frac{Area_{Mono-PEG}}{Area_{Total\_Peptide\_Related\_Peaks}} \right) \times 100$$

Where:
*   $Area_{Mono-PEG}$ = Peak area of the conjugated peptide.
*   $Area_{Total\_Peptide\_Related\_Peaks}$ = Sum of areas for free peptide, mono-PEG, and multi-PEG species.

#### 5.2 Stoichiometric Verification
During the conjugation step for Batch **GLUC-2025-004**, the following molar ratios were applied:
*   Peptide Amount: 500.0 g (120.3 mmol)
*   PEG-Maleimide: 5.31 kg (132.3 mmol)
*   Molar Ratio (PEG:Peptide): 1.10 : 1.00

Theoretical Yield Calculation:
$Expected\_Mass = (n_{peptide} \times MW_{peptide}) + (n_{peptide} \times MW_{PEG})$
$Expected\_Mass = (120.3 \times 4,156.5) + (120.3 \times 40,000) \approx 5.312 kg$

Actual recovered Glucogen-XR (after UF/DF): 5.12 kg (96.4% step yield).

---

### 6.0 DETAILED PEPTIDE MAPPING AND FRAGMENTATION (LC-MS/MS)

To confirm that the PEG attachment is strictly limited to Cys-38 and does not involve nucleophilic attack by internal lysine residues (Lys-12, Lys-20, or Lys-28), enzymatic digestion followed by LC-MS/MS was performed.

#### 6.1 Digestion Protocol
1.  **Enzyme:** Trypsin (Sequencing Grade).
2.  **Reduction/Alkylation:** Not performed (to maintain the PEG-Cys linkage).
3.  **Buffer:** 50 mM Ammonium Bicarbonate, pH 7.8.
4.  **Incubation:** 37°C for 16 hours.
5.  **Quenching:** 1% Formic Acid.

#### 6.2 Fragment Identification Table
The peptide sequence for Glucogen-XR is: `HGEGTFTSDVSSYLEGQAAKEFIAWLVKGRC` (plus extension).

| Fragment ID | Sequence | Theoretical Mass (Da) | Observed Mass (m/z) | PEG Present? |
| :--- | :--- | :--- | :--- | :--- |
| T1 | HGEGTFTSDVSSY | 1432.65 | 1432.68 | No |
| T2 | LEGQAAK | 715.39 | 715.41 | No |
| T3 | EFIAWLVK | 989.58 | 989.60 | No |
| T4 | **GRC-PEG** | **40348.12** | **~41,200 (broad)** | **YES** |

**Observation:** The T4 fragment (containing Cys-38) shows a massive shift in molecular weight corresponding to the 40 kDa PEG addition. Fragments T1, T2, and T3 (containing all internal Lysine residues) were identified in their native, non-modified states. No evidence of "over-PEGylation" at the N-terminus or Lysine side chains was detected (LOD < 0.05%).

---

### 7.0 SITE-SPECIFICITY STABILITY DATA (6-MONTH ACCELERATED)

Stability studies were conducted to ensure the maleimide-thiol bond does not undergo "retro-Michael" addition or thiol exchange during storage.

#### Table 7.1: Accelerated Stability (25°C/60% RH) - Batch GLUC-2025-001
| Timepoint | Site Occupancy (%) | Free Peptide (%) | De-PEGylation (%) |
| :--- | :--- | :--- | :--- |
| T=0 | 99.42% | 0.18% | N/A |
| 1 Month | 99.40% | 0.19% | 0.02% |
| 3 Months | 99.35% | 0.23% | 0.07% |
| 6 Months | 99.28% | 0.28% | 0.14% |

The data confirms the high stability of the Cys-38 attachment site, with less than 0.2% de-PEGylation observed over 6 months at accelerated conditions.

---

### 8.0 CONCLUSION
The site occupancy determination for Glucogen-XR across all manufacturing scales (clinical to commercial) consistently exceeds **99.3%**. The use of site-specific cysteine conjugation at the Cys-38 residue, supported by Google Health Sciences' high-precision purification techniques, ensures a homogeneous product with minimal peptide-related impurities. These results meet the stringent specifications required for long-acting GLP-1 receptor agonists and support the safety and efficacy profile of Glucogen-XR in the treatment of Type 2 Diabetes Mellitus.

---
**End of Subsection 3.2.S.3.1.4.2**
*Document ID: GHS-GLUC-REG-M3-2025-089*
*Electronic Signature: Dr. Elena V. Rostova, Senior Director of Regulatory Affairs, Google Health Sciences.*

---

## PEG Chain Length Verification

### 3.2.S.3.1.4.2 PEG Chain Length Verification (Polydispersity and Molecular Weight Distribution)

#### 3.2.S.3.1.4.2.1 Introduction and Objective
The active pharmaceutical ingredient (API) of Glucogen-XR (glucapeptide extended-release) consists of a synthetic glucagon-like peptide-1 (GLP-1) analog site-specifically conjugated to a linear methoxy-polyethylene glycol (mPEG) maleimide chain via a distal cysteine residue (Cys-37). Given that polyethylene glycol is a polydisperse polymer, the control of the PEG chain length and the verification of its molecular weight distribution (MWD) are critical quality attributes (CQAs) that directly influence the pharmacokinetic (PK) profile, hydrodynamic volume, and renal clearance rates of the final conjugate.

The primary objective of this subsection is to detail the orthogonal analytical strategies employed by Google Health Sciences to verify the PEG chain length, ensure batch-to-batch consistency, and confirm that the polydispersity index (PDI) remains within the strictly defined regulatory limits established during the Phase III clinical manufacturing transition.

#### 3.2.S.3.1.4.2.2 Regulatory Compliance and Standards
This characterization study has been performed in accordance with the following international guidelines:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <1055>:** Biotechnology-Derived Articles—Peptide Mapping.
*   **USP <735>:** X-Ray Fluorescence Spectrometry (for trace catalyst analysis in PEG).
*   **FDA Guidance for Industry:** Liposome Drug Products (for PEGylation considerations).

#### 3.2.S.3.1.4.2.3 Technical Specifications of the mPEG-Maleimide Starting Material
The mPEG-maleimide utilized in the production of Glucogen-XR is a 20 kDa nominal weight linear polymer. Google Health Sciences utilizes a high-purity, activated PEG sourced from a validated vendor, which is further purified using Google Cloud-driven predictive purification algorithms to narrow the distribution.

**Table 3.2.S.3.1.4.2-1: Raw Material Specifications for mPEG-Maleimide (20kDa)**

| Parameter | Specification | Analytical Method |
| :--- | :--- | :--- |
| **Number Average MW (Mn)** | 19,500 – 20,500 Da | MALDI-TOF MS |
| **Weight Average MW (Mw)** | 19,800 – 21,200 Da | GPC / SEC-MALS |
| **Peak Molecular Weight (Mp)** | 20,000 ± 500 Da | GPC / SEC-MALS |
| **Polydispersity Index (Mw/Mn)** | ≤ 1.03 | Calculated |
| **Maleimide Substitution** | ≥ 98.0 mol % | ¹H-NMR (6.7 ppm) |
| **Residual Ethylene Oxide** | < 1 ppm | GC-Headspace |
| **Total Heavy Metals** | < 10 ppm | ICP-MS |

---

#### 3.2.S.3.1.4.2.4 Analytical Protocol: Matrix-Assisted Laser Desorption/Ionization Time-of-Flight (MALDI-TOF) Mass Spectrometry

MALDI-TOF MS is the primary technique for absolute molecular weight determination and chain length distribution analysis of the PEG moiety after its release from the peptide backbone.

**3.2.S.3.1.4.2.4.1 Sample Preparation and Enzymatic Cleavage**
To isolate the PEG chain for high-resolution mass analysis, the Glucogen-XR conjugate must undergo site-specific proteolysis.
1.  **Deconjugation Protocol:** 10 mg of Glucogen-XR (Batch GLUC-2025-001) is dissolved in 50 mM Tris-HCl, pH 7.5.
2.  **Reduction:** Addition of 10 mM Dithiothreitol (DTT) to ensure the cysteine-maleimide bond is accessible (though the thioether bond is stable, auxiliary disulfide reduction ensures globular unfolding).
3.  **Enzymatic Digestion:** Process-specific endoproteinase Lys-C is added at a 1:20 (w/w) ratio.
4.  **Incubation:** 16 hours at 37°C.
5.  **Recovery:** The PEGylated C-terminal fragment is isolated via RP-HPLC using a C18 column (Phenomenex Jupiter, 5μm, 300Å).

**3.2.S.3.1.4.2.4.2 MALDI-TOF Parameters**
*   **Instrument:** Bruker Daltonics Reflex IV / Google-Alpha-MS System.
*   **Matrix:** 2,5-Dihydroxybenzoic acid (DHB) in 70:30 Acetonitrile:Water (0.1% TFA).
*   **Laser:** Nitrogen Laser (337 nm).
*   **Mode:** Linear / Positive ion mode.
*   **Acceleration Voltage:** 20 kV.
*   **Mass Range:** 5,000 – 45,000 m/z.

**3.2.S.3.1.4.2.4.3 Calculation of Molecular Weight Averages**
The mass spectrum provides a series of peaks separated by 44.05 Da (the mass of the oxyethylene repeat unit $-CH_2CH_2O-$). The following formulas are applied via the Google Life Sciences Analytics (GLSA) software:

$$M_n = \frac{\sum N_i M_i}{\sum N_i}$$
$$M_w = \frac{\sum N_i M_i^2}{\sum N_i M_i}$$

Where $N_i$ is the intensity (abundance) of the ion at mass $M_i$.

---

#### 3.2.S.3.1.4.2.5 Analytical Protocol: SEC-MALS (Size Exclusion Chromatography with Multi-Angle Light Scattering)

While MALDI-TOF provides high-resolution data on individual oligomers, SEC-MALS provides information on the hydrodynamic behavior and the global population of the PEG chain in its native state.

**3.2.S.3.1.4.2.5.1 Equipment and Chromatographic Conditions**
*   **System:** Agilent 1260 Infinity II HPLC coupled with Wyatt Dawn Heleos II MALS detector.
*   **Column:** TSKgel G3000PWxl (7.8 mm ID x 30 cm).
*   **Mobile Phase:** 0.1 M Phosphate Buffer, 0.2 M NaCl, pH 7.0.
*   **Flow Rate:** 0.5 mL/min.
*   **Injection Volume:** 50 μL.
*   **dn/dc Value:** 0.135 mL/g (for mPEG in aqueous buffer).

---

#### 3.2.S.3.1.4.2.6 Batch Analysis Results (Chain Length Verification)

The following table summarizes the PEG chain length verification results for three representative GMP batches produced at the South San Francisco facility (Innovation Drive).

**Table 3.2.S.3.1.4.2-2: Comparative Data for PEG Chain Length Across Process Validation Batches**

| Batch Number | Mn (Da) | Mw (Da) | PDI (Mw/Mn) | Mp (Peak) | Degree of Polymerization (Avg) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 20,105 | 20,402 | 1.015 | 20,088 | 456.4 |
| **GLUC-2025-002** | 19,980 | 20,310 | 1.016 | 20,012 | 453.6 |
| **GLUC-2025-003** | 20,150 | 20,480 | 1.016 | 20,110 | 457.4 |
| **GLUC-2025-004** | 20,022 | 20,322 | 1.015 | 20,045 | 454.5 |
| **Mean (n=4)** | **20,064** | **20,378** | **1.0155** | **20,064** | **455.5** |
| **% RSD** | **0.38%** | **0.39%** | **0.05%** | **0.21%** | **N/A** |

---

#### 3.2.S.3.1.4.2.7 Statistical Evaluation of Chain Length Distribution

To ensure the safety profile of Glucogen-XR, Google Health Sciences employs a proprietary statistical model (GHS-STAT-PEG) to evaluate the "high-mass tail" of the PEG distribution. It is critical that the fraction of chains exceeding 30 kDa is less than 0.5% of the total population to prevent unexpected accumulation in the lysosomal compartments of renal proximal tubule cells.

**3.2.S.3.1.4.2.7.1 Distribution Analysis (Gaussian Fit)**
The mass distribution of Batch GLUC-2025-001 was subjected to a Gaussian fitting algorithm:
*   **$R^2$ (Correlation Coefficient):** 0.9982
*   **Standard Deviation ($\sigma$):** 425 Da
*   **99% Confidence Interval:** 18,789 Da to 21,321 Da

**3.2.S.3.1.4.2.7.2 Integration of High Molecular Weight Species (HMWS)**
Integration of the SEC-MALS chromatogram for Batch GLUC-2025-001 indicates that species > 40 kDa (dimeric PEG or coupling artifacts) represent < 0.05% of the total area under the curve (AUC), confirming the efficiency of the purification process at the 3000 Innovation Drive site.

---

#### 3.2.S.3.1.4.2.8 Summary of Findings for PEG Chain Length
1.  **Uniformity:** All tested batches (GLUC-2025-001 through GLUC-2025-004) demonstrate a PDI of ≤ 1.02, indicating a "near-monodisperse" polymer distribution.
2.  **Consistency:** The Peak Molecular Weight ($M_p$) remains within ± 1% of the target 20,000 Da across multiple production cycles.
3.  **Site Confirmation:** MALDI-TOF analysis of the Lys-C fragments confirms that the PEG chain of the verified length is exclusively attached to the Cys-37 residue of the glucapeptide.
4.  **Stability:** Accelerated stability studies (data presented in 3.2.S.7) show no evidence of PEG chain scission or oxidative degradation of the polyether backbone when stored at 2-8°C.

#### 3.2.S.3.1.4.2.9 References
1.  **GHS-SOP-5521:** MALDI-TOF Analysis of PEGylated Peptides.
2.  **GHS-VAL-0098:** Validation Report for the SEC-MALS Method for Glucogen-XR.
3.  **Knop, K., et al. (2010):** "Poly(ethylene glycol) in Drug Delivery: Pros and Cons and Potential Alternatives." *Angewandte Chemie International Edition*.
4.  **USP Chapter <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for PEGylated therapeutics).

---
**Document End (Subsection 3.2.S.3.1.4.2)**
**Confidential - Google Health Sciences Internal and Regulatory Use Only**

---

# Higher-Order Structure (HOS)

## Secondary Structure by Circular Dichroism

# 3.2.S.3.1.2.1. Secondary Structure Analysis by Far-UV Circular Dichroism (CD)

## 1. Executive Summary

This subsection provides a comprehensive characterization of the secondary structural elements of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist produced by Google Health Sciences. Using Far-UV Circular Dichroism (CD) spectroscopy, we demonstrate that the polypeptide backbone adopts a predominantly $\alpha$-helical conformation, consistent with the functional requirements for GLP-1 receptor binding and activation. 

The analysis detailed herein covers five (5) distinct drug substance process performance qualification (PPQ) batches (GLUC-2025-001 through GLUC-2025-005), establishing a baseline for higher-order structure (HOS) consistency. This documentation fulfills the requirements set forth in **ICH Q6B** regarding the physicochemical characterization of biotechnological/biological products and follows the analytical principles outlined in **USP <1053>** and **USP <1224>**.

---

## 2. Technical Principles of Far-UV Circular Dichroism

Circular Dichroism (CD) refers to the differential absorption of left- and right-circularly polarized light ($A_L - A_R$) by chiral molecules. In the context of Glucogen-XR, the amide chromophores of the peptide backbone exhibit characteristic CD signals in the far-ultraviolet (Far-UV) region (190 nm to 260 nm). These signals arise from $n \rightarrow \pi^*$ and $\pi \rightarrow \pi^*$ transitions, the positions and intensities of which are sensitive to the $\phi$ and $\psi$ torsion angles of the polypeptide chain.

*   **$\alpha$-Helix:** Characterized by a strong positive band at ~192 nm and two distinct negative minima at 208 nm and 222 nm.
*   **$\beta$-Sheet:** Characterized by a negative band at ~216-218 nm and a positive band at ~195-198 nm.
*   **Random Coil (Unordered):** Characterized by a strong negative band near 195 nm and low ellipticity above 210 nm.

For Glucogen-XR, the maintenance of the $\alpha$-helical motif is a Critical Quality Attribute (CQA) as it correlates directly with the potency of the GLP-1 receptor agonist.

---

## 3. Materials and Instrumentation

### 3.1. Equipment Specifications
All measurements were performed using the following validated system:
*   **Instrument:** Jasco J-1500 Circular Dichroism Spectrometer (System ID: GHS-CD-SPEC-09)
*   **Light Source:** 150W Xenon Arc Lamp (Air-cooled)
*   **Detector:** Photomultiplier Tube (PMT) with high sensitivity in the VUV range
*   **Temperature Controller:** PTC-510 Peltier Thermostatic Cell Holder (Accuracy: $\pm 0.05^\circ C$)
*   **Purge Gas:** High-purity Nitrogen (99.999%) at a flow rate of 5 L/min to prevent ozone formation and optics degradation.

### 3.2. Consumables and Reagents
*   **Cuvettes:** Suprasil® Quartz Micro-cuvettes (Hellma Analytics), Pathlength: 0.1 mm (Serial No: H-01-992).
*   **Buffer:** 10 mM Sodium Phosphate, pH 7.4. (Note: Chloride ions were excluded to minimize absorbance interference below 200 nm).
*   **Reference Standard:** Glucogen-XR Internal Reference Material (IRM Batch: GHS-GLUC-REF-2024).

---

## 4. Analytical Protocol (SOP-GHS-BIO-442)

### 4.1. Sample Preparation
1.  **Concentration Adjustment:** The Glucogen-XR drug substance (initially at 50 mg/mL) is diluted to a target concentration of 0.2 mg/mL using the formulated phosphate buffer.
2.  **Verification:** Precise protein concentration is verified post-dilution using UV-Vis spectroscopy ($A_{280}$) based on the theoretical extinction coefficient ($\epsilon = 1.45 \text{ mL } \text{mg}^{-1} \text{ cm}^{-1}$).
3.  **Equilibration:** Samples are allowed to equilibrate at $25^\circ C$ for 30 minutes prior to measurement.

### 4.2. Acquisition Parameters
The instrument parameters are optimized for high signal-to-noise ratio in the far-UV region:
*   **Wavelength Range:** 190 nm – 260 nm
*   **Data Pitch:** 0.1 nm
*   **Scanning Speed:** 20 nm/min
*   **Response Time (D.I.T.):** 2 seconds
*   **Bandwidth:** 1.0 nm
*   **Accumulations:** 8 scans (averaged to reduce stochastic noise)
*   **Temperature:** $25.0^\circ C \pm 0.1^\circ C$

### 4.3. Data Processing and Calculations
Raw data is collected as ellipticity ($\theta$) in millidegrees (mdeg). This is converted to Mean Residue Ellipticity ($[\theta]_{MRE}$) to allow for comparison between different batches and literature values.

#### 4.3.1. Formula for Mean Residue Ellipticity:
$$[\theta]_{MRE} = \frac{\theta_{obs} \cdot MRW}{10 \cdot l \cdot c}$$

Where:
*   $[\theta]_{MRE}$ = Mean Residue Ellipticity ($\text{deg} \cdot \text{cm}^2 \cdot \text{dmol}^{-1}$)
*   $\theta_{obs}$ = Observed ellipticity (mdeg)
*   $MRW$ = Mean Residue Weight ($\text{Molecular Weight} / (\text{Number of residues} - 1)$)
*   $l$ = Pathlength (cm)
*   $c$ = Concentration ($\text{g/cm}^3$ or $\text{mg/mL}$)

For Glucogen-XR: $MRW = 112.4$ Da.

---

## 5. Results and Batch Consistency Data

### 5.1. CD Spectral Overlay
Five independent PPQ batches were analyzed. The spectra show nearly identical profiles with characteristic minima at 208 nm and 222 nm, indicating a stable $\alpha$-helical structure.

**Table 1: Observed Ellipticity Maxima/Minima for Glucogen-XR Batches**

| Batch Number | Concentration (mg/mL) | Min 1 (nm) | $\theta$ at 208 nm (mdeg) | Min 2 (nm) | $\theta$ at 222 nm (mdeg) | Max 1 (nm) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0.201 | 208.2 | -18.44 | 222.1 | -17.89 | 192.4 |
| **GLUC-2025-002** | 0.198 | 208.1 | -18.21 | 222.0 | -17.65 | 192.5 |
| **GLUC-2025-003** | 0.203 | 208.4 | -18.67 | 222.2 | -18.12 | 192.3 |
| **GLUC-2025-004** | 0.200 | 208.2 | -18.35 | 222.1 | -17.94 | 192.4 |
| **GLUC-2025-005** | 0.199 | 208.3 | -18.29 | 222.0 | -17.78 | 192.6 |
| **Reference Std** | 0.200 | 208.2 | -18.40 | 222.1 | -17.90 | 192.5 |

### 5.2. Secondary Structure Estimation (Deconvolution)
The CD spectra were deconvoluted using the **BeStSel (Beta Structure Selection)** algorithm and **CDNN software** to quantify the percentage of secondary structural elements.

**Table 2: Calculated Secondary Structure Composition (%)**

| Batch Number | $\alpha$-Helix (%) | $\beta$-Sheet (%) | $\beta$-Turn (%) | Unordered (%) | Total (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 64.2 | 8.4 | 11.2 | 16.2 | 100.0 |
| **GLUC-2025-002** | 63.9 | 8.7 | 11.0 | 16.4 | 100.0 |
| **GLUC-2025-003** | 64.5 | 8.2 | 11.3 | 16.0 | 100.0 |
| **GLUC-2025-004** | 64.1 | 8.5 | 11.1 | 16.3 | 100.0 |
| **GLUC-2025-005** | 64.0 | 8.6 | 11.2 | 16.2 | 100.0 |
| **Average** | **64.1** | **8.5** | **11.2** | **16.2** | -- |
| **% RSD** | **0.35** | **2.21** | **1.03** | **0.91** | -- |

### 5.3. Statistical Analysis of Similarity (Spectral Correlation Coefficient)
To ensure the higher-order structure is statistically indistinguishable across batches, a Spectral Correlation Coefficient (SCC) was calculated relative to the Reference Standard (GHS-GLUC-REF-2024).

$$SCC = \frac{\sum (x_i \cdot y_i)}{\sqrt{\sum x_i^2 \cdot \sum y_i^2}}$$

Where $x$ is the reference intensity and $y$ is the sample intensity at wavelength $i$.

**Table 3: Statistical Comparison to Reference Standard**

| Batch ID | Spectral Correlation Coefficient ($r$) | Difference in Helix % vs Ref | Pass/Fail (Limit: $r > 0.99$) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 0.9994 | +0.1 | Pass |
| GLUC-2025-002 | 0.9989 | -0.2 | Pass |
| GLUC-2025-003 | 0.9991 | +0.4 | Pass |
| GLUC-2025-004 | 0.9996 | +0.0 | Pass |
| GLUC-2025-005 | 0.9992 | -0.1 | Pass |

---

## 6. Thermal Stability and Unfolding Profile

To assess the robustness of the secondary structure, a thermal ramp was performed on Batch GLUC-2025-001.

### 6.1. Temperature Ramp Parameters
*   **Range:** $20^\circ C$ to $95^\circ C$
*   **Ramp Rate:** $1.0^\circ C / \text{min}$
*   **Monitoring Wavelength:** 222 nm (Helix-sensitive)
*   **Data Collection:** Every $0.5^\circ C$

### 6.2. Melting Temperature ($T_m$) Determination
The $T_m$ was determined using the first derivative of the ellipticity vs. temperature curve ($d\theta_{222}/dT$).

**Table 4: Thermal Transition Data**

| Parameter | Result (Batch GLUC-2025-001) | Result (Reference) |
| :--- | :--- | :--- |
| **Onset of Unfolding ($T_{onset}$)** | $58.4^\circ C$ | $58.1^\circ C$ |
| **Melting Temperature ($T_m$)** | $68.2^\circ C$ | $68.4^\circ C$ |
| **Reversibility at $25^\circ C$** | 94.2% | 95.1% |

*Interpretation: The high $T_m$ of $68.2^\circ C$ indicates significant structural stability, which is attributed to the optimized peptide sequence and the proprietary extended-release formulation components.*

---

## 7. Quality Control and System Suitability

To ensure the validity of the CD data, the following system suitability criteria were met for every analysis session:
1.  **Camphor-10-sulfonic acid (CSA) Calibration:** The ratio of the peak intensity at 192.5 nm to 290.5 nm must be $2.0 \pm 0.05$.
2.  **Baseline Stability:** The buffer-only baseline must exhibit fluctuations $< \pm 0.2$ mdeg between 200 nm and 260 nm.
3.  **HT Voltage:** The Photomultiplier High Tension (HT) voltage must remain below 600V throughout the scanning range (190-260 nm) to ensure signal linearity.

---

## 8. Conclusion

The Far-UV CD characterization of Glucogen-XR confirms a highly consistent secondary structure across all PPQ batches. The predominant $\alpha$-helical content (avg. 64.1%) is consistent with the molecule's design and pharmacological function as a GLP-1 receptor agonist. The structural integrity is maintained up to a $T_{onset}$ of $58.4^\circ C$, demonstrating significant conformational stability. These data support the consistency of the Google Health Sciences manufacturing process at the 3000 Innovation Drive facility and provide a rigorous baseline for future post-approval comparability studies.

---
**References:**
1.  *Greenfield, N. J. (2006). Using circular dichroism spectra to estimate protein secondary structure. Nature Protocols, 1(6), 2876-2890.*
2.  *ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
3.  *USP <1053>: Capillary Electrophoresis and Circular Dichroism (Section on Spectroscopic Methods).*
4.  *Micsonai, A., et al. (2018). BeStSel: a web server for accurate protein secondary structure prediction and fold recognition from the circular dichroism spectra. Nucleic Acids Research.*

---

## Tertiary Structure by Fluorescence Spectroscopy

### 3.2.S.3.1.2.4 Tertiary Structure Assessment by Fluorescence Spectroscopy

#### 1.0 Executive Summary
As part of the comprehensive Higher-Order Structure (HOS) characterization program for Glucogen-XR (glucapeptide extended-release), Google Health Sciences (GHS) has employed multi-dimensional Fluorescence Spectroscopy to probe the tertiary folding environment and conformational stability of the drug substance (DS). Glucogen-XR, a 42-amino acid synthetic peptide analog of human Glucagon-Like Peptide-1 (GLP-1), contains specific aromatic residues—namely Tryptophan (Trp), Tyrosine (Tyr), and Phenylalanine (Phe)—which serve as intrinsic fluorophores. 

The primary objective of this study is to confirm the consistency of the tertiary fold across multiple clinical and process validation batches (GLUC-2025-XXX series) and to establish a baseline for conformational integrity. This section details the Steady-State Intrinsic Fluorescence, Synchronous Fluorescence, and Quenching Dynamics used to define the tertiary landscape of the therapeutic peptide.

---

#### 2.0 Regulatory and Theoretical Framework
This characterization is performed in strict adherence to:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <1294>:** Investigational Methods for Characterization of Higher-Order Structure.
*   **FDA Guidance:** "Scientific Considerations in Demonstrating Biosimilarity to a Reference Product" (applied here for internal comparability and structural fingerprinting).

The tertiary structure of Glucogen-XR is dictated by the spatial arrangement of its α-helical domains and the orientation of the hydrophobic core. Fluorescence spectroscopy is sensitive to the polarity of the microenvironment surrounding aromatic side chains. A shift in the maximum emission wavelength ($\lambda_{max}$) or changes in quantum yield provide direct evidence of conformational transitions or denaturation.

---

#### 3.0 Instrumentation and System Suitability
**Table 1: Instrumentation Specifications**
| Component | Specification / Model |
| :--- | :--- |
| **Spectrofluorometer** | Horiba Duetta™ / Fluorolog-QM with Double Monochromators |
| **Light Source** | 75W Xenon Arc Lamp (Ozone-free) |
| **Detector** | R928P PMT (cooled) or CCD array for simultaneous acquisition |
| **Cuvette** | Hellma Analytics 10mm Quartz Suprasil® (1.5 mL capacity) |
| **Temperature Control** | Peltier-controlled cell holder (±0.05°C precision) |
| **Calibration Standard** | Water Raman Peak ($S/N > 25,000$) |
| **Software** | FluorEssence™ v3.9 with GHS-Proprietary Validation Script |

**System Suitability Criteria:**
1.  **Water Raman Signal:** Signal-to-noise ratio must exceed 25,000:1 at 350 nm excitation.
2.  **Wavelength Accuracy:** Emission maxima for N-acetyl-L-tryptophanamide (NATA) must be 350 nm ± 0.5 nm.
3.  **Precision:** Triplicate scans of Batch GLUC-2025-REF must show CV < 0.5% for intensity and < 0.2 nm for $\lambda_{max}$.

---

#### 4.0 Analytical Protocol (SOP-GHS-FLU-09)

##### 4.1 Sample Preparation
1.  **Buffer Exchange:** Samples are dialyzed into the standard formulation buffer (10 mM Sodium Phosphate, 5% Mannitol, pH 7.4) to eliminate potential interference from formulation excipients.
2.  **Concentration Adjustment:** Samples are diluted to a final concentration of 0.15 mg/mL. This concentration is selected to ensure an absorbance of < 0.05 AU at the excitation wavelength to mitigate the Inner Filter Effect (IFE).
3.  **Filtration:** All samples are filtered through a 0.22 µm PES low-protein binding filter (Millex-GV).
4.  **Degassing:** Samples are degassed via gentle vacuum for 2 minutes to prevent oxygen quenching during high-sensitivity measurements.

##### 4.2 Steady-State Intrinsic Fluorescence (SSIF)
SSIF targets the Trp residues (Trp23 and Trp31 in Glucogen-XR).
*   **Excitation Wavelength ($\lambda_{ex}$):** 280 nm (Total Protein) and 295 nm (Selective Trp).
*   **Emission Range:** 300 nm to 450 nm.
*   **Slit Widths:** 2.0 nm (Excitation) / 2.0 nm (Emission).
*   **Integration Time:** 0.1 seconds.
*   **Temperature:** 25.0°C.

##### 4.3 Synchronous Fluorescence Mapping
This technique simultaneously scans excitation and emission monochromators at a fixed wavelength offset ($\Delta\lambda$).
*   **$\Delta\lambda = 15$ nm:** Selective for Tyrosine residues.
*   **$\Delta\lambda = 60$ nm:** Selective for Tryptophan residues.
*   **Purpose:** To resolve overlapping spectral features and identify subtle changes in the local environment of individual residue types.

---

#### 5.0 Results and Data Analysis

##### 5.1 Batch Comparison (GLUC-2025-001 through GLUC-2025-010)
Extensive testing was conducted on ten consecutive batches of Glucogen-XR drug substance produced at the South San Francisco facility.

**Table 2: Comparative Intrinsic Fluorescence Data (Ex 280 nm)**
| Batch Number | Mfg Date | $\lambda_{max}$ (nm) | Peak Intensity (cps) | FWHM (nm) | $I_{330}/I_{350}$ Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 338.4 | $1.22 \times 10^6$ | 54.2 | 1.14 |
| GLUC-2025-002 | 19-JAN-2025 | 338.5 | $1.21 \times 10^6$ | 54.1 | 1.13 |
| GLUC-2025-003 | 26-JAN-2025 | 338.4 | $1.23 \times 10^6$ | 54.3 | 1.14 |
| GLUC-2025-004 | 02-FEB-2025 | 338.6 | $1.20 \times 10^6$ | 54.2 | 1.12 |
| GLUC-2025-005 | 09-FEB-2025 | 338.4 | $1.22 \times 10^6$ | 54.4 | 1.14 |
| GLUC-2025-006 | 16-FEB-2025 | 338.3 | $1.24 \times 10^6$ | 54.1 | 1.15 |
| GLUC-2025-007 | 23-FEB-2025 | 338.5 | $1.21 \times 10^6$ | 54.2 | 1.13 |
| GLUC-2025-008 | 02-MAR-2025 | 338.4 | $1.22 \times 10^6$ | 54.3 | 1.14 |
| GLUC-2025-009 | 09-MAR-2025 | 338.5 | $1.23 \times 10^6$ | 54.2 | 1.14 |
| GLUC-2025-010 | 16-MAR-2025 | 338.4 | $1.22 \times 10^6$ | 54.3 | 1.14 |
| **Mean** | -- | **338.44** | **1.217** | **54.23** | **1.137** |
| **% RSD** | -- | **0.03%** | **0.98%** | **0.18%** | **0.72%** |

*Interpretation:* The $\lambda_{max}$ of ~338.4 nm indicates that the Trp residues are partially buried within the hydrophobic core of the Glucogen-XR helical bundle. A fully denatured peptide (6M Guanidine HCl) exhibits a red-shift to 352 nm. The high degree of consistency across batches confirms the robustness of the folding process in the CHO-K1 GS knockout derivative line.

##### 5.2 Quenching Kinetics (Acrylamide Quenching)
To assess the accessibility of the Trp residues to the solvent, quenching studies were performed using Acrylamide as a neutral quencher.

**Formula: Stern-Volmer Equation**
$$ \frac{F_0}{F} = 1 + K_{sv}[Q] $$
Where:
*   $F_0$ = Fluorescence intensity in the absence of quencher.
*   $F$ = Fluorescence intensity at quencher concentration $[Q]$.
*   $K_{sv}$ = Stern-Volmer quenching constant.

**Table 3: Acrylamide Quenching Constants ($K_{sv}$)**
| Batch | $K_{sv}$ ($M^{-1}$) at 25°C | Correlation ($R^2$) | Accessiblity Class |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 4.82 | 0.9992 | Partially Shielded |
| GLUC-2025-005 | 4.79 | 0.9995 | Partially Shielded |
| GLUC-2025-010 | 4.81 | 0.9991 | Partially Shielded |
| **Denatured Reference**| 12.45 | 0.9988 | Fully Exposed |

The low $K_{sv}$ values relative to the denatured state indicate that the tertiary structure of Glucogen-XR effectively shields the Trp residues from the aqueous environment, providing a sensitive quantitative metric for "correct folding."

---

#### 6.0 Thermal Conformational Stability
To evaluate the stability of the tertiary structure, the fluorescence signal was monitored during a controlled thermal ramp from 20°C to 95°C.

**Table 4: Thermal Transition Parameters (Fluorescence-derived)**
| Batch | $T_m$ (Onset) °C | $T_m$ (Midpoint) °C | $\Delta H_{unfolding}$ (kcal/mol)* |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 54.2 | 68.4 | 82.5 |
| GLUC-2025-005 | 54.5 | 68.6 | 81.9 |
| GLUC-2025-010 | 54.1 | 68.2 | 83.1 |

*\*Calculated via Van't Hoff analysis of the equilibrium constant $K = (F_n - F_{obs}) / (F_{obs} - F_u)$.*

The thermal profiles demonstrate a cooperative unfolding transition with a midpoint ($T_m$) of ~68.4°C. This high thermal stability is attributed to the proprietary extended-release glucapeptide backbone modifications, which enhance the structural rigidity compared to native GLP-1 (native GLP-1 $T_m \approx 42^\circ\text{C}$).

---

#### 7.0 Forced Degradation and Sensitivity Analysis
To validate that fluorescence spectroscopy is "stability-indicating," samples of GLUC-2025-001 were subjected to controlled stressors:
1.  **Thermal Stress:** 60°C for 48 hours.
2.  **Oxidative Stress:** 0.3% $H_2O_2$ for 4 hours.
3.  **Photo Stress:** 1.2 million lux hours.

**Table 5: Sensitivity to Structural Perturbation**
| Stress Condition | $\Delta\lambda_{max}$ | % Intensity Change | $I_{330}/I_{350}$ Change | Result |
| :--- | :--- | :--- | :--- | :--- |
| **Control** | 0.0 nm | 0.0% | 0.00 | Native |
| **60°C / 48hr** | +4.2 nm | -18.4% | -0.12 | Partial Unfolding |
| **0.3% $H_2O_2$** | +1.1 nm | -45.6% | -0.04 | Trp Oxidation |
| **Photo Stress** | +2.8 nm | -32.1% | -0.09 | Photo-degradation |

The red-shift in $\lambda_{max}$ under thermal stress confirms the ability of the method to detect the transition from a compact tertiary fold to a more solvent-exposed random coil state.

---

#### 8.0 Conclusion
Tertiary structural analysis by fluorescence spectroscopy confirms that Glucogen-XR (glucapeptide extended-release) maintains a consistent, well-defined hydrophobic core and α-helical organization across all tested batches. The high degree of spectral overlap, reproducible $K_{sv}$ values, and stable thermal transition temperatures (mean $T_m = 68.4^\circ\text{C}$) provide robust evidence for conformational homogeneity. These data support the structural integrity of the drug substance manufactured by Google Health Sciences and satisfy the regulatory requirements for HOS characterization according to ICH Q6B and USP <1294>.

---
**Approvals:**
*   *Analytical Development Lead:* Dr. Samantha V. Cloud, PhD (Date: 22-MAR-2025)
*   *Quality Assurance:* Marcus T. Rheo (Date: 24-MAR-2025)
*   *Regulatory Affairs:* Elena G. Specter (Date: 25-MAR-2025)

---

## Conformational Stability by Differential Scanning Calorimetry

### 3.2.S.3.1.2.4 Conformational Stability by Differential Scanning Calorimetry (DSC)

#### 3.2.S.3.1.2.4.1 Executive Summary and Purpose
The evaluation of the higher-order structure (HOS) and thermodynamic stability of Glucogen-XR (glucapeptide extended-release) is a critical component of the physicochemical characterization program required under ICH Q6B. Differential Scanning Calorimetry (DSC) serves as the primary orthogonal technique to Circular Dichroism (CD) and Hydrogen-Deuterium Exchange Mass Spectrometry (HDX-MS) for assessing the global conformational stability of the drug substance.

Glucogen-XR is a recombinant GLP-1 receptor agonist peptide-Fc fusion protein. Its stability is governed by the melting behavior of two distinct domains: the glucapeptide moiety and the engineered IgG1 Fc domain (comprising CH2 and CH3 domains). DSC provides a precise measurement of the transition midpoint temperature ($T_m$), the calorimetric enthalpy ($\Delta H_{cal}$), and the van’t Hoff enthalpy ($\Delta H_{vH}$), which are indicative of the energy required to unfold the molecule. These parameters serve as sensitive indicators of structural integrity, batch-to-batch consistency, and the impact of process-related changes.

#### 3.2.S.3.1.2.4.2 Regulatory Compliance and Standards
This study was conducted in accordance with the following regulatory guidelines and compendial standards:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **USP <1211>:** Sterilization and Sterility Assurance of Compendial Articles (Contextual thermal stability).
*   **FDA Guidance for Industry:** Characterization and Quality Control of Aldehyde-Terminated Proteins and Peptide-Fc Fusions.

#### 3.2.S.3.1.2.4.3 Instrumental Configuration and Materials
All DSC measurements were performed at the Google Health Sciences (GHS) Analytical Characterization Laboratory (South San Francisco, CA) using the following equipment:

**Table 1: Instrumentation and Materials for DSC Analysis**
| Component | Specification/Model | Equipment ID |
| :--- | :--- | :--- |
| DSC System | MicroCal PEAQ-DSC (Automated) | GHS-DSC-09 |
| Control Software | MicroCal PEAQ-DSC Software v1.2 | N/A |
| Analysis Software | Origin 7.0 (Iterative Curve Fitting) | GHS-SW-42 |
| Sample Cell Material | Tantalum (High Chemical Resistance) | N/A |
| Cell Volume | 130 µL | N/A |
| Cleaning Solution | 5% Decon-90 / 20% Nitric Acid Scan | GHS-SOL-901 |
| Reference Buffer | Formulation Buffer (pH 6.2, Citrate-Phosphate) | GHS-BUF-112 |

#### 3.2.S.3.1.2.4.4 Detailed Analytical Protocol (SOP-GHS-ANA-772)

**Step 1: Sample Preparation and Concentration Normalization**
Samples of Glucogen-XR (from batches GLUC-2025-001 through GLUC-2025-010) are removed from storage at 2-8°C and allowed to equilibrate to room temperature (22°C ± 2°C) for 30 minutes. Samples are diluted using the specific lot-matched formulation buffer to a final protein concentration of 1.0 mg/mL ± 0.05 mg/mL. Concentration is verified via UV-Vis absorbance at 280 nm ($A_{280}$) using an extinction coefficient of $1.45 \text{ mL} \cdot \text{mg}^{-1} \cdot \text{cm}^{-1}$.

**Step 2: Degassing**
To prevent bubble formation during the heating ramp, both the sample and the reference buffer are degassed under vacuum (25 in Hg) for 15 minutes at 10°C using the MicroCal Cleaning/Degassing Station.

**Step 3: Baseline Equilibration**
The instrument is programmed to perform five "buffer-vs-buffer" scans using the formulation buffer in both the sample and reference cells. This ensures thermal history stabilization and establishes a reproducible baseline.

**Step 4: Experimental Parameters**
*   **Temperature Range:** 10°C to 110°C
*   **Scan Rate:** 60°C/hour (1.0°C/min)
*   **Pre-scan Isotherm:** 15 minutes at 10°C
*   **Feedback Mode:** High sensitivity
*   **Filtering Period:** 2 seconds
*   **Pressure:** 3.0 atm (Nitrogen) to suppress boiling

**Step 5: Data Processing and Deconvolution**
Raw data (Power in µcal/sec vs. Temperature in °C) are processed by:
1.  **Buffer Subtraction:** Subtracting the average of the last two buffer-buffer scans from the sample-buffer scan.
2.  **Baseline Correction:** Application of a Progressional Baseline to account for the change in heat capacity ($\Delta C_p$) between the native and denatured states.
3.  **Normalization:** Dividing the data by the molar concentration and cell volume to yield Molar Heat Capacity ($C_p$) in $\text{kcal/mol} \cdot \text{K}$.
4.  **Fitting:** The thermograms are fitted using a Non-2-State model to resolve overlapping transitions (CH2, CH3, and Glucapeptide domains).

#### 3.2.S.3.1.2.4.5 Theoretical Calculations
The thermodynamic parameters are derived using the following equations:

**1. Calorimetric Enthalpy ($\Delta H_{cal}$):**
The total area under the $C_p$ curve represents the total heat required to unfold the molecule.
$$\Delta H_{cal} = \int_{T_1}^{T_2} C_p(T) dT$$

**2. Van’t Hoff Enthalpy ($\Delta H_{vH}$):**
Calculated from the shape of the transition peak, providing insight into the cooperativity of the unfolding.
$$\Delta H_{vH} = 4R T_m^2 \frac{C_{p,max}}{\Delta H_{cal}}$$
*Where $R$ is the gas constant ($1.987 \text{ cal/mol} \cdot \text{K}$), $T_m$ is the midpoint temperature in Kelvin, and $C_{p,max}$ is the peak height.*

#### 3.2.S.3.1.2.4.6 Results and Batch Analysis
Glucogen-XR typically exhibits three distinct thermal transitions ($T_{m1}$, $T_{m2}$, and $T_{m3}$), corresponding to the unfolding of the CH2 domain, the glucapeptide/linker region, and the CH3 domain, respectively.

**Table 2: Thermodynamic Parameters for Clinical and Process Validation Batches**
| Batch Number | Manufacture Date | $T_{m1}$ (°C) (CH2) | $T_{m2}$ (°C) (Glucapeptide) | $T_{m3}$ (°C) (CH3) | Total $\Delta H_{cal}$ (kcal/mol) | $\Delta H_{vH} / \Delta H_{cal}$ Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 68.42 | 74.15 | 82.31 | 542.3 | 1.04 |
| GLUC-2025-002 | 28-JAN-2025 | 68.39 | 74.22 | 82.28 | 539.8 | 1.02 |
| GLUC-2025-003 | 15-FEB-2025 | 68.45 | 74.18 | 82.35 | 545.1 | 1.05 |
| GLUC-2025-004 | 02-MAR-2025 | 68.41 | 74.11 | 82.30 | 541.0 | 1.03 |
| GLUC-2025-005 | 19-MAR-2025 | 68.48 | 74.25 | 82.33 | 544.7 | 1.06 |
| **Mean** | **N/A** | **68.43** | **74.18** | **82.31** | **542.6** | **1.04** |
| **% RSD** | **N/A** | **0.05%** | **0.08%** | **0.03%** | **0.42%** | **1.54%** |

#### 3.2.S.3.1.2.4.7 Peak Assignment and Structural Correlation
Detailed deconvolution studies were performed to assign the observed transitions to specific structural domains of Glucogen-XR.

1.  **$T_{m1}$ (68.4°C):** This transition is assigned to the CH2 domain of the Fc fusion. The CH2 domain is known to be the least thermally stable region of the IgG1 Fc fragment due to the lack of extensive inter-chain interactions compared to the CH3 domain.
2.  **$T_{m2}$ (74.2°C):** This transition is unique to the Glucogen-XR molecule and represents the unfolding of the GLP-1 receptor agonist peptide and the glycine-serine ($G_4S$) linker. The relatively high $T_m$ suggests that the fusion to the Fc scaffold provides significant conformational stabilization to the peptide moiety.
3.  **$T_{m3}$ (82.3°C):** This transition represents the highly cooperative unfolding of the CH3 domain, which forms the core dimeric interface of the Fc region.

#### 3.2.S.3.1.2.4.8 Forced Degradation and Sensitivity Analysis
To demonstrate the sensitivity of DSC to structural alterations, Batch GLUC-2025-001 was subjected to pH stress (pH 3.0 and pH 9.0) and oxidative stress (0.1% $H_2O_2$).

**Table 3: Impact of Stress Conditions on $T_m$ Values**
| Condition | $T_{m1}$ (°C) | $T_{m2}$ (°C) | $T_{m3}$ (°C) | Δ$T_m$ (relative to Control) | Structural Interpretation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Control (pH 6.2) | 68.42 | 74.15 | 82.31 | - | Native Fold |
| Acidic (pH 3.0) | 51.20 | 62.15 | 75.40 | -17.22 | Significant destabilization of Fc |
| Basic (pH 9.0) | 65.10 | 71.30 | 80.05 | -3.32 | Minor deamidation-driven shifts |
| Oxidation ($H_2O_2$) | 62.45 | 73.80 | 81.90 | -5.97 | Met-oxidation in CH2 domain |

The results indicate that DSC is highly sensitive to pH-induced unfolding and methionine oxidation within the CH2 domain, which is reflected in a $5.97^\circ\text{C}$ decrease in $T_{m1}$.

#### 3.2.S.3.1.2.4.9 Conclusion
The DSC analysis of Glucogen-XR confirms a highly stable, multi-domain protein structure. The consistency of $T_m$ values across five independent manufacturing batches (RSD < 0.1% for $T_m$) demonstrates excellent process control and structural reproducibility. The thermodynamic profile established here serves as a "fingerprint" for Glucogen-XR, ensuring that any future process changes or site transfers (e.g., from South San Francisco to global manufacturing hubs) can be rigorously evaluated for impact on higher-order structure.

#### 3.2.S.3.1.2.4.10 References
1.  Ghirlando, R., et al. (1999). "The analysis of macromolecular interactions by isothermal titration calorimetry." *Immunology Letters*.
2.  Remmele, R. L., et al. (1998). "Differential scanning calorimetry: A hydrogen bonding study of protein stability." *Pharmaceutical Research*.
3.  Google Health Sciences Internal Method Validation Report: VLD-ANA-DSC-2024.
4.  Johnson, C. M. (2013). "Differential scanning calorimetry: Theory and practice." *Methods in Molecular Biology*.

---

# Molecular Weight and Size

## Intact Mass by LC-MS

### **3.2.S.3.1.2.1 Intact Mass Analysis by Liquid Chromatography-Mass Spectrometry (LC-MS)**

#### **1.0 Introduction and Objective**
The primary structural characterization of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line, necessitates the precise determination of the molecular mass of the intact glycoprotein. The objective of this study is to confirm the primary amino acid sequence, verify the integrity of the C-terminal amidation (if applicable) or acid terminus, and assess the distribution of major glycoforms. 

This section details the methodology, instrumentation, validation parameters, and results for the intact mass analysis of Glucogen-XR. The analysis was performed in accordance with **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q3D** (Guideline for Elemental Impurities), ensuring that the therapeutic protein aligns with the theoretical mass derived from the genetic sequence.

#### **2.0 Analytical Strategy and Instrumentation**
Due to the high molecular weight and inherent heterogeneity of the Glucogen-XR molecule (owing to its extended-release PEGylation or fusion protein architecture, as specified in the Master Cell Bank records), a high-resolution, accurate-mass (HRAM) mass spectrometry approach was utilized.

**2.1 Equipment Configuration**
The following instrumentation was utilized at the Google Health Sciences Analytical Excellence Center (GHS-AEC), South San Francisco:

*   **LC System:** Agilent 1290 Infinity II UHPLC equipped with a multisampler (maintained at 4°C) and a high-speed binary pump.
*   **Mass Spectrometer:** Thermo Scientific Q Exactive Plus Hybrid Quadrupole-Orbitrap Mass Spectrometer.
*   **Software:** Chromeleon 7.3 CDS for data acquisition; BioPharma Finder 4.1 for protein deconvolution and glycan mapping.
*   **Column:** Waters ACQUITY UPLC Protein BEH C4 Column (300Å, 1.7 µm, 2.1 mm X 100 mm).

**2.2 Theoretical Mass Calculation**
The theoretical average mass of the Glucogen-XR polypeptide backbone (de-glycosylated and reduced) was calculated using the ProtParam tool and verified against the GHS-Genomic Sequence Registry.

| Component | Sequence/Formula | Theoretical Average Mass (Da) |
| :--- | :--- | :--- |
| **Backbone (Unmodified)** | $C_{1450}H_{2210}N_{380}O_{440}S_{12}$ | 32,455.62 |
| **N-terminal Pyroglutamate** | -$NH_3 + H_2O$ | -17.03 |
| **C-terminal Amidation** | $-OH + NH_2$ | -0.98 |
| **Total (N-term PyroGlu/C-term Amide)** | — | 32,437.61 |

#### **3.0 Detailed Experimental Protocol (SOP-GHS-MS-0992)**

**3.1 Sample Preparation**
1.  **Concentration Adjustment:** Glucogen-XR Drug Substance (DS) samples are diluted to a final concentration of 1.0 mg/mL using MS-grade water (0.1% Formic Acid).
2.  **Deglycosylation (Optional for Backbone Verification):** To confirm the amino acid mass without glycan interference, 100 µg of sample is incubated with 5 µL of PNGase F (Glycerol-free) at 37°C for 16 hours in 50 mM Ammonium Bicarbonate buffer (pH 8.0).
3.  **Reduction:** For "Reduced Intact" analysis, samples are treated with 10 mM Dithiothreitol (DTT) at 56°C for 45 minutes to reduce inter-chain disulfide bonds.
4.  **Desalting:** All samples are processed through a Zeba™ Spin Desalting Column (7K MWCO) prior to injection.

**3.2 LC Parameters**
*   **Mobile Phase A:** 0.1% Formic Acid in Water (LC-MS Grade).
*   **Mobile Phase B:** 0.1% Formic Acid in 90% Acetonitrile / 10% Water.
*   **Flow Rate:** 0.300 mL/min.
*   **Gradient Profile:**
    *   0.0–2.0 min: 5% B (Washing)
    *   2.0–12.0 min: 5% to 65% B (Linear Gradient)
    *   12.0–14.0 min: 80% B (Column Clean-out)
    *   14.0–20.0 min: 5% B (Re-equilibration)
*   **Column Temperature:** 75°C (to minimize secondary structure interactions).

**3.3 MS Parameters (Orbitrap Settings)**
*   **Ionization:** Positive Electrospray Ionization (ESI+).
*   **Spray Voltage:** 3.8 kV.
*   **Capillary Temperature:** 320°C.
*   **S-lens RF Level:** 60.
*   **Resolution:** 140,000 (at m/z 200).
*   **Scan Range:** 600 – 4000 m/z.
*   **In-source CID:** 0 eV.
*   **Microscans:** 10.

#### **4.0 Analytical Results and Batch Comparison**

Testing was performed on three clinical-scale batches and one engineering batch (GLUC-2025-001) to demonstrate process consistency.

**Table 1: Summary of Observed vs. Theoretical Intact Mass for Glucogen-XR Batches**

| Batch Number | Manufacturing Date | State | Theoretical Mass (Da) | Observed Mass (Da) | Mass Error (ppm) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | Deglycosylated | 32,437.61 | 32,437.64 | 0.92 | Pass |
| **GLUC-2025-002** | 02-FEB-2025 | Deglycosylated | 32,437.61 | 32,437.68 | 2.16 | Pass |
| **GLUC-2025-003** | 15-MAR-2025 | Deglycosylated | 32,437.61 | 32,437.59 | -0.62 | Pass |
| **GLUC-2025-004** | 10-APR-2025 | Deglycosylated | 32,437.61 | 32,437.65 | 1.23 | Pass |

**4.1 Glycoform Distribution (Intact Glycoprotein)**
The intact (non-deglycosylated) mass spectrum exhibits a characteristic "sawtooth" pattern corresponding to the various glycoforms (G0F, G1F, G2F) attached to the Asn-142 site.

**Table 2: Deconvolution of Major Glycoforms (Batch GLUC-2025-003)**

| Glycan Species | Structure | Theoretical Mass (Da) | Observed Mass (Da) | Relative Abundance (%) |
| :--- | :--- | :--- | :--- | :--- |
| **G0F/G0F** | $(GlcNAc)_2(Man)_3(Fuc)_1(GlcNAc)_2$ | 35,333.12 | 35,333.21 | 42.5% |
| **G0F/G1F** | Add Galactose (+162 Da) | 35,495.26 | 35,495.38 | 31.2% |
| **G1F/G1F** | Add 2x Galactose | 35,657.40 | 35,657.55 | 18.4% |
| **G1F/G2F** | Add 3x Galactose | 35,819.54 | 35,819.72 | 5.9% |
| **Other** | Sialylated/Man5 | — | — | 2.0% |

#### **5.0 Statistical Analysis of Mass Accuracy**
The mass accuracy was calculated using the following formula:
$$\text{Error (ppm)} = \left( \frac{\text{Observed Mass} - \text{Theoretical Mass}}{\text{Theoretical Mass}} \right) \times 10^6$$

For the pivotal clinical batch **GLUC-2025-003**:
$$\text{Error} = \left( \frac{32,437.59 - 32,437.61}{32,437.61} \right) \times 10^6 = -0.616 \text{ ppm}$$
This value is well within the pre-defined acceptance criterion of $\pm 10$ ppm for intact protein mass by HRAM-MS.

#### **6.0 Data Interpretation and Regulatory Compliance**
The results provided in this subsection confirm that the primary structure of Glucogen-XR is consistent with the predicted sequence across multiple manufacturing lots. The absence of significant peaks at +128 Da (C-terminal Lysine clipping) or -17 Da (Pyroglutamate formation deviations) suggests a highly controlled downstream process.

**6.1 Peak Identification and Assignment**
Deconvolution was performed using the **ReSpect™ Algorithm** (for isotopically unresolved spectra) and **Xtract** (for isotopically resolved spectra). All dominant peaks in the mass spectrum were assigned to either the main product or known glycan variants. No unidentified impurities exceeding 1% of the total ion chromatogram (TIC) were observed in the mass range of 10,000 to 50,000 Da.

#### **7.0 Quality Control and Reference Standards**
Each LC-MS run was preceded by the analysis of the **GHS-Glucogen-RS-2024** (Internal Reference Standard). The system suitability was confirmed by the detection of the reference standard mass within 5 ppm of its certified value and a signal-to-noise ratio (S/N) > 100 for the most abundant glycoform peak.

#### **8.0 References**
1. **USP <129>** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies.
2. **ICH Q6B** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3. **FDA Guidance for Industry (2015):** Scientific Considerations in Demonstrating Biosimilarity to a Reference Product (utilized for characterization framework).
4. **Google Health Sciences Internal Report:** GHS-RPT-MS-2025-004; *Mass Spectrometric Characterization of Glucapeptide Extended-Release Derivatives.*

***

**[END OF SECTION 3.2.S.3.1.2.1]**

---

## Size Exclusion Chromatography

# MODULE 3: QUALITY
## 3.2.S DRUG SUBSTANCE (NAME, MANUFACTURER)
### 3.2.S.3 Characterization
#### 3.2.S.3.1 Elucidation of Structure and Other Characteristics

---

# SECTION: 3.2.S.3.1.2 Molecular Weight and Size
## SUBSECTION: 3.2.S.3.1.2.1 Size Exclusion Chromatography (SEC-HPLC/UPLC)

### 1.0 Executive Summary
The determination of the molecular weight distribution, hydrodynamic radius, and purity profile of Glucogen-XR (glucapeptide extended-release) is conducted via high-resolution Size Exclusion Chromatography (SEC). This analytical technique is pivotal in the characterization of the drug substance (DS) produced by Google Health Sciences to ensure the absence of high-molecular-weight species (HMWS), aggregates (dimers, trimers, and higher-order multimers), and low-molecular-weight species (LMWS) such as fragments or truncated peptides. 

Given the nature of Glucogen-XR as a long-acting GLP-1 receptor agonist produced in a proprietary CHO-K1 GS knockout line (GHS-CHO-001), the monitoring of the monomeric state is critical for predicting clinical immunogenicity and pharmacological potency. This section details the methodology, validation parameters, and comprehensive batch analysis data for GLUC-2025-XXX series.

### 2.0 Analytical Methodology and Instrumentation

#### 2.1 Principle of the Method
Size Exclusion Chromatography separates molecules based on their hydrodynamic volume. For Glucogen-XR, an aqueous mobile phase is utilized under non-denaturing conditions to maintain the native conformation of the peptide-linker complex. The stationary phase consists of a hydrophilic, bonded-phase silica gel with a pore size of 200 Å, optimized for the separation of proteins and peptides in the 10 kDa to 500 kDa range.

#### 2.2 Instrumentation and Equipment Specifications
All analyses are performed using a qualified Waters ACQUITY UPLC H-Class Bio System or equivalent Agilent 1290 Infinity II Bio-LC, integrated with Google Cloud Life Sciences' proprietary LIMS (GHS-LIMS-2025) for real-time data ingestion and refractive index (RI) / Multi-Angle Light Scattering (MALS) correlation.

| Equipment ID | Description | Specification/Requirement |
| :--- | :--- | :--- |
| **GHS-EQ-SEC-01** | UPLC Pump | Quaternary solvent manager, bio-compatible |
| **GHS-EQ-SEC-02** | Autosampler | Fixed-loop injector, 4°C - 40°C range |
| **GHS-EQ-SEC-03** | Detector | Photodiode Array (PDA) + MALS + dRI |
| **GHS-EQ-SEC-04** | Column Oven | ± 0.5°C stability |
| **GHS-COL-2025-09** | Stationary Phase | Waters ACQUITY UPLC Protein BEH SEC, 200Å, 1.7 µm |
| **GHS-SFT-001** | Software | Empower 3 FR4 / Wyatt ASTRA 8.1 |

### 3.0 Detailed Analytical Protocol (SOP-GHS-AN-5502)

#### 3.1 Mobile Phase Preparation
The mobile phase is designed to minimize secondary interactions (ionic or hydrophobic) between the Glucogen-XR molecule and the silica matrix.

1.  **Buffer Composition:** 50 mM Sodium Phosphate, 300 mM Sodium Chloride, pH 6.8 ± 0.1.
2.  **Preparation:**
    *   Dissolve 3.55 g of $Na_2HPO_4$ (anhydrous) and 3.40 g of $KH_2PO_4$ in 900 mL of Milli-Q water.
    *   Add 17.53 g of NaCl.
    *   Adjust pH using 1.0 M NaOH or 1.0 M HCl.
    *   Filter through a 0.1 µm PES membrane filter.
    *   Degas via continuous helium sparge or inline vacuum degasser.

#### 3.2 Sample Preparation
Samples of Glucogen-XR Drug Substance (GLUC-2025-XXX) are diluted to a target concentration of 2.0 mg/mL using the mobile phase.
*   **Procedure:** 200 µL of DS is added to 800 µL of mobile phase in a 1.5 mL low-protein-binding microcentrifuge tube.
*   **Centrifugation:** Samples are centrifuged at 10,000 x g for 5 minutes at 4°C to remove any particulate matter prior to injection.

#### 3.3 Chromatographic Conditions
*   **Flow Rate:** 0.3 mL/min (isocratic)
*   **Detection Wavelength:** 214 nm (primary peptide bond), 280 nm (aromatic residues)
*   **Column Temperature:** 25°C
*   **Injection Volume:** 10 µL (total mass 20 µg)
*   **Run Time:** 20 minutes

### 4.0 System Suitability Criteria
As per ICH Q2(R2) and USP <621>, the following criteria must be met for a valid analytical run:

1.  **Tailing Factor ($T_f$):** $\leq$ 1.5 for the Glucogen-XR monomer peak.
2.  **Resolution ($R_s$):** $\geq$ 1.8 between the monomer and the closest dimer peak.
3.  **Retention Time Repeatability:** RSD $\leq$ 0.5% for $n=5$ injections.
4.  **Peak Area Repeatability:** RSD $\leq$ 1.0% for $n=5$ injections.

### 5.0 Batch Analysis Data (GLUC-2025-XXX Series)

The following table summarizes the SEC-UPLC results for three (3) consecutive validation batches of Glucogen-XR DS.

#### Table 1: SEC-UPLC Purity and Molecular Weight Distribution Results

| Batch Number | Date of Manufacture | Monomer Content (%) | HMWS (Dimer/Agg) (%) | LMWS (Frags) (%) | Retention Time (min) | Apparent MW (kDa) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 99.42 | 0.45 | 0.13 | 8.421 | 64.2 |
| **GLUC-2025-002** | 19-JAN-2025 | 99.38 | 0.51 | 0.11 | 8.419 | 64.1 |
| **GLUC-2025-003** | 26-JAN-2025 | 99.51 | 0.39 | 0.10 | 8.423 | 64.3 |
| **GLUC-2025-004** | 02-FEB-2025 | 99.45 | 0.43 | 0.12 | 8.420 | 64.2 |
| **Mean** | -- | **99.44** | **0.445** | **0.115** | **8.421** | **64.2** |
| **% RSD** | -- | **0.05%** | **11.2%** | **10.8%** | **0.02%** | **0.12%** |

### 6.0 SEC-MALS Analysis (Multi-Angle Light Scattering)

To confirm the absolute molecular weight independent of column calibration standards (Thyroglobulin, Ovalbumin, Ribonuclease A), SEC was coupled with MALS. This is crucial for Glucogen-XR due to its extended-release linker, which may cause non-standard elution behavior.

#### 6.1 MALS Theory and Calculation
The light scattering intensity is proportional to the product of the concentration ($c$) and the molar mass ($M$):
$$R(\theta) = K^* c M P(\theta) [1 - 2 A_2 c M P(\theta)]$$
Where:
*   $R(\theta)$ is the excess Rayleigh ratio.
*   $K^*$ is an optical constant.
*   $P(\theta)$ is the form factor.
*   $dn/dc$ (refractive index increment) was determined to be **0.185 mL/g** for Glucogen-XR.

#### 6.2 Results of SEC-MALS
Detailed analysis of Batch **GLUC-2025-001** provided the following mass distribution:

| Peak Assignment | Retention Volume (mL) | Molar Mass (g/mol) | Mass Fraction (%) | Polydispersity ($M_w/M_n$) |
| :--- | :--- | :--- | :--- | :--- |
| **Aggregate** | 2.1 - 2.4 | $1.28 \times 10^6$ | 0.08 | 1.05 |
| **Dimer** | 2.4 - 2.8 | $1.29 \times 10^5$ | 0.37 | 1.01 |
| **Monomer** | 2.8 - 3.5 | $6.45 \times 10^4$ | 99.42 | 1.001 |
| **Fragment** | 3.5 - 4.2 | $2.10 \times 10^4$ | 0.13 | 1.02 |

*Conclusion:* The absolute molecular weight of 64.5 kDa correlates with the theoretical mass calculated from the amino acid sequence and glycan profile of Glucogen-XR.

### 7.0 Forced Degradation and Sensitivity Studies

To demonstrate that the SEC method is "stability-indicating," Glucogen-XR samples (Batch GLUC-2025-001) were subjected to various stress conditions.

#### Table 2: SEC Recovery and Aggregate Detection under Stress

| Stress Condition | Duration | Monomer (%) | HMWS (%) | LMWS (%) | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Control (T=0)** | N/A | 99.42 | 0.45 | 0.13 | 100.0 |
| **Thermal (40°C)** | 14 Days | 96.12 | 2.85 | 1.03 | 98.8 |
| **Low pH (pH 3.0)** | 24 Hours | 92.45 | 6.10 | 1.45 | 97.2 |
| **Oxidation ($H_2O_2$)** | 12 Hours | 98.10 | 0.95 | 0.95 | 99.1 |
| **Photostability** | 1.2M Lux-hr| 97.55 | 1.80 | 0.65 | 98.5 |

### 8.0 Statistical Analysis of Size Distribution
The homogeneity of the Glucogen-XR molecular size is assessed using the Polydispersity Index (PDI). For GLUC-2025 batches, the PDI consistently remains < 1.02, indicating a highly monodisperse population.

**Statistical Process Control (SPC) Limits:**
*   Upper Control Limit (UCL) for HMWS: 1.0%
*   Lower Control Limit (LCL) for Monomer: 98.5%

### 9.0 References
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <129>:** Analytical Procedures for Recombinant Therapeutic Proteins.
3.  **FDA Guidance for Industry:** Development of Therapeutic Protein Biosimilars (Comparative Characterization).
4.  **Google Health Sciences Internal Report:** GHS-RPT-2024-0012, *Size Exclusion Method Validation for Glucapeptide Therapeutics*.

### 10.0 Appendices
*   *Appendix A:* Representative Chromatograms for Batch GLUC-2025-001 through GLUC-2025-004.
*   *Appendix B:* MALS Light Scattering Overlays.
*   *Appendix C:* Column Qualification Log (GHS-COL-2025-09).

---
**Document End**
**Confidential - Google Health Sciences Proprietary**

---

## Light Scattering Analysis

# MODULE 3: QUALITY (CHARACTERIZATION)
## SECTION 3.2.S.3.1: ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS
### SUBSECTION: LIGHT SCATTERING ANALYSIS (MALLS, DLS, AND SLS)

---

#### 3.2.S.3.1.4.1 Introduction and Scope
Light scattering analysis constitutes a critical component of the biophysical characterization program for **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences**. As a long-acting GLP-1 receptor agonist, Glucogen-XR exhibits a complex molecular profile designed for extended pharmacokinetics. Precise determination of the absolute molecular weight (MW), polydispersity ($Pd$), and hydrodynamic radius ($R_h$) is essential to ensure product consistency, monitor the presence of sub-visible aggregates, and validate the stability of the monomeric peptide-polymer conjugate.

This section details the methodologies, instrumentation, validation parameters, and comprehensive results of Multi-Angle Laser Light Scattering (MALLS) coupled with Size Exclusion Chromatography (SEC-MALLS), Dynamic Light Scattering (DLS), and Static Light Scattering (SLS) utilized to characterize the Drug Substance (DS).

---

#### 3.2.S.3.1.4.2 SEC-MALLS Characterization
SEC-MALLS provides a first-principles measurement of the absolute molecular weight, independent of column calibration standards or elution time, which is critical for Glucogen-XR due to its non-globular conformation and potential for non-specific interactions with stationary phases.

##### 3.2.S.3.1.4.2.1 Instrumentation and Software Configuration
The analysis was performed using the following high-performance liquid chromatography (HPLC) and light scattering assembly:

*   **HPLC System:** Agilent 1260 Infinity II Bio-inert LC System (Equip ID: GHS-LC-094)
*   **MALLS Detector:** Wyatt Technology DAWN HELEOS II (18 angles, 658 nm laser) (Equip ID: GHS-LS-012)
*   **Refractive Index (RI) Detector:** Wyatt Optilab T-rEX (Equip ID: GHS-RI-005)
*   **Software:** ASTRA Version 8.1.2 (Wyatt Technology)
*   **Column:** Tosoh TSKgel G3000SWxl, 7.8 mm x 30 cm, 5 µm (Serial: TS-9921-G)

##### 3.2.S.3.1.4.2.2 Experimental Parameters and Protocol
The following protocol was strictly adhered to for the analysis of clinical and stability batches (GLUC-2025-001 through GLUC-2025-015):

1.  **Mobile Phase Preparation:** 50 mM Sodium Phosphate, 150 mM Sodium Chloride, pH 7.0. The buffer was filtered through a 0.1 µm polyethersulfone (PES) membrane and degassed via continuous helium sparging.
2.  **Specific Refractive Index Increment ($dn/dc$):** A $dn/dc$ value of 0.185 mL/g was utilized for the protein/peptide moiety, and a weighted average of 0.147 mL/g was applied for the extended-release conjugate (calculated based on the mass fraction of the glucapeptide vs. the polyethylene-glycol-like linker).
3.  **System Normalization:** Bovine Serum Albumin (BSA, NIST traceable) was injected to normalize the 18 photodiode detectors and to determine the inter-detector delay volume and band broadening constants.
4.  **Sample Injection:** 100 µg of Glucogen-XR (at 2.0 mg/mL) was injected at a flow rate of 0.5 mL/min.

##### 3.2.S.3.1.4.2.3 Data Analysis and Calculations
The Rayleigh equation for light scattering is defined as:
$$\frac{K^* c}{R(\theta, c)} = \frac{1}{M_w P(\theta)} + 2A_2 c$$
Where:
*   $K^*$ is the optical constant.
*   $c$ is the concentration.
*   $R(\theta, c)$ is the excess Rayleigh ratio.
*   $M_w$ is the weight-average molecular weight.
*   $P(\theta)$ is the form factor.
*   $A_2$ is the second virial coefficient.

For Glucogen-XR, the Zimm model was applied for extrapolation to zero angle to derive the absolute molecular weight.

---

##### 3.2.S.3.1.4.2.4 SEC-MALLS Results for Clinical Batches
Table 1 summarizes the results for three representative batches produced at the 3000 Innovation Drive facility.

**Table 1: SEC-MALLS Molecular Weight and Polydispersity Data**

| Batch Number | Date of Manufacture | Peak Retention Time (min) | Calculated $M_w$ (kDa) | $M_w/M_n$ (Polydispersity) | Mass Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 16.42 | 54.21 ± 0.15 | 1.002 | 98.4 |
| **GLUC-2025-002** | 28-JAN-2025 | 16.38 | 54.18 ± 0.12 | 1.001 | 99.1 |
| **GLUC-2025-003** | 15-FEB-2025 | 16.40 | 54.25 ± 0.18 | 1.003 | 97.9 |
| **NIST mAb Std** | N/A | 14.22 | 148.2 ± 2.10 | 1.005 | 100.2 |

*Note: The theoretical molecular weight of Glucogen-XR based on primary sequence and conjugation chemistry is 54.15 kDa. The experimental values demonstrate high fidelity to the theoretical construct.*

---

#### 3.2.S.3.1.4.3 Dynamic Light Scattering (DLS) Analysis
DLS was utilized to determine the hydrodynamic radius ($R_h$) and to detect the presence of trace-level high molecular weight (HMW) species or sub-visible aggregates that may not be resolved by SEC.

##### 3.2.S.3.1.4.3.1 DLS Methodology
*   **Instrument:** Malvern Panalytical Zetasizer Ultra (Equip ID: GHS-DLS-022)
*   **Measurement Angle:** 173° (Backscatter detection)
*   **Temperature:** 25.0°C ± 0.1°C (Controlled by Peltier)
*   **Cuvette:** Quartz micro-cuvette (12 µL)
*   **Analysis Algorithm:** General Purpose (Non-Negative Least Squares, NNLS)

##### 3.2.S.3.1.4.3.2 Sample Preparation
Samples were diluted to 1.0 mg/mL in the formulation buffer (20 mM Citrate, pH 6.5). All samples were centrifuged at 14,000 x g for 10 minutes to remove dust particles prior to analysis.

##### 3.2.S.3.1.4.3.3 Diffusion Coefficient and $R_h$ Calculation
The Stokes-Einstein equation was used to calculate the $R_h$:
$$R_h = \frac{k_B T}{6 \pi \eta D}$$
Where:
*   $k_B$ is the Boltzmann constant.
*   $T$ is the absolute temperature.
*   $\eta$ is the solvent viscosity (measured as 0.894 cP for water/buffer at 25°C).
*   $D$ is the translational diffusion coefficient.

---

##### 3.2.S.3.1.4.3.4 DLS Results and Size Distribution
The autocorrelation functions for batches GLUC-2025-004 through GLUC-2025-006 showed a single, robust decay curve, indicating a highly monodisperse population.

**Table 2: DLS Hydrodynamic Radius and Percent Polydispersity**

| Batch Number | Z-Average $R_h$ (nm) | PDI (Polydispersity Index) | % Intensity (Main Peak) | % Mass (Main Peak) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-004** | 4.82 | 0.042 | 99.8% | 100% |
| **GLUC-2025-005** | 4.85 | 0.038 | 99.9% | 100% |
| **GLUC-2025-006** | 4.79 | 0.045 | 99.7% | 100% |

The consistent $R_h$ of ~4.8 nm suggests that the Glucogen-XR molecule adopts a partially extended conformation in solution, which is characteristic of the glucapeptide-PEG-like conjugate architecture designed for slow renal clearance.

---

#### 3.2.S.3.1.4.4 Aggregation Propensity and Thermal Stability (Temperature Ramp SLS/DLS)
To assess the physical stability of Glucogen-XR, a temperature ramp was performed from 20°C to 90°C at a rate of 0.5°C/min. Both the scattering intensity (SLS) and the Z-average diameter (DLS) were monitored.

##### 3.2.S.3.1.4.4.1 Determination of $T_{onset}$ and $T_{agg}$
*   **$T_{onset}$ (Onset of Melting):** Defined as the temperature at which the $R_h$ increases by 10% from the baseline.
*   **$T_{agg}$ (Aggregation Temperature):** Defined as the temperature at which the SLS intensity increases exponentially.

**Table 3: Thermal Stability Profiles via Light Scattering**

| Batch Number | Concentration | $T_{onset}$ (°C) | $T_{agg}$ (°C) | Final $R_h$ at 90°C (nm) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-007** | 5 mg/mL | 64.2 | 68.5 | 452.1 |
| **GLUC-2025-008** | 5 mg/mL | 63.9 | 68.8 | 438.4 |
| **GLUC-2025-009** | 10 mg/mL | 62.1 | 66.2 | 892.5 |

The data indicates that Glucogen-XR is thermally stable up to ~64°C, which is well above the intended storage (2-8°C) and physiological (37°C) temperatures. The concentration-dependent decrease in $T_{agg}$ at 10 mg/mL is consistent with the behavior of therapeutic peptides at high concentrations.

---

#### 3.2.S.3.1.4.5 Second Virial Coefficient ($A_2$) and Diffusion Interaction Parameter ($k_D$)
To characterize the colloidal stability and intermolecular interactions, $A_2$ (via SLS) and $k_D$ (via DLS) were measured for batch GLUC-2025-010.

*   **Positive $A_2/k_D$:** Indicates repulsive interactions (stabilizing).
*   **Negative $A_2/k_D$:** Indicates attractive interactions (potential for aggregation).

Measurements were performed across a concentration range of 1.0 to 10.0 mg/mL in the final formulation buffer.

**Calculated Parameters:**
*   **$k_D$:** +6.42 mL/g (Standard Deviation: 0.12)
*   **$A_2$:** +2.15 x 10⁻⁴ mol·mL/g² (Standard Deviation: 0.08)

The positive values for both $k_D$ and $A_2$ confirm that the formulation conditions provide a repulsive environment that minimizes self-association, supporting the long-term shelf-life of the Drug Product.

---

#### 3.2.S.3.1.4.6 Conclusion of Light Scattering Characterization
The comprehensive light scattering analysis of Glucogen-XR confirms:
1.  **Absolute Molecular Weight:** Consistently measured at 54.2 kDa, aligning with the theoretical molecular weight of the conjugate.
2.  **Monodispersity:** The PDI values (< 0.05) and $M_w/M_n$ values (< 1.01) indicate a highly homogeneous product.
3.  **Hydrodynamic Size:** A consistent $R_h$ of ~4.8 nm confirms the intended conformational state of the glucapeptide extended-release entity.
4.  **Colloidal Stability:** Positive $A_2$ and $k_D$ values demonstrate a robust formulation that resists aggregation.

These results satisfy the requirements of **ICH Q6B** regarding the characterization of physicochemical properties and support the suitability of the manufacturing process at the Google Health Sciences facility.

---
**References:**
1.  *ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
2.  *USP <1788> Methods for the Determination of Particulate Matter in Therapeutic Protein Injections.*
3.  *Wyatt, P. J. (1993). Light scattering and the absolute characterization of macromolecules. Analytica Chimica Acta.*

---

# Charge Heterogeneity

## Isoelectric Focusing (IEF)

### **3.2.S.3. CHARACTERIZATION**
#### **3.2.S.3.1. ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS**
---
### **SUBSECTION: 3.2.S.3.1.4. Charge Heterogeneity – Isoelectric Focusing (IEF)**

#### **3.2.S.3.1.4.1. Introduction and Rationale**
Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS), is a recombinant GLP-1 receptor agonist expressed in the proprietary GHS-CHO-001 cell line. Given the complex nature of this acylated peptide-fusion protein, the distribution of charge isomers is a Critical Quality Attribute (CQA). Charge heterogeneity in Glucogen-XR primarily arises from post-translational modifications (PTMs), including C-terminal amidation efficiency, N-terminal gluconoylation, deamidation of asparagine residues (specifically at positions N28 and N52), and variations in the sialic acid content of the glycosylated linker region.

Isoelectric Focusing (IEF), implemented via both traditional gel-based IEF and high-resolution Capillary Isoelectric Focusing (cIEF), is utilized to determine the isoelectric point (pI) of the drug substance (DS) and to quantify the relative distribution of acidic, main, and basic variants. This subsection details the methodology, validation, and batch analysis data supporting the charge profile of Glucogen-XR.

---

#### **3.2.S.3.1.4.2. Methodology: Capillary Isoelectric Focusing (cIEF)**

The primary quantitative method for monitoring charge heterogeneity is imaged Capillary Isoelectric Focusing (iCE3/Maurice system). This technique allows for the real-time monitoring of focused protein zones within a capillary using whole-column imaging detection (WCID) at 280 nm.

##### **3.2.S.3.1.4.2.1. Reagents and Equipment**
*   **System:** ProteinSimple Maurice or iCE3 System with Alcott 720NV Autosampler.
*   **Capillary:** Fluorocarbon-coated (FC) capillary, 50 mm length, 100 µm I.D.
*   **Ampholytes:** Pharmalyte 3–10 (broad range) and Pharmalyte 5–8 (narrow range).
*   **pI Markers:** 5.85, 7.05, 8.40, and 9.46 (Synthetic peptide markers).
*   **Anolyte:** 80 mM Phosphoric acid ($H_3PO_4$) in 0.1% Methylcellulose.
*   **Catholyte:** 100 mM Sodium Hydroxide ($NaOH$) in 0.1% Methylcellulose.
*   **Stabilizers:** Urea (8M) and Arginine/Methylcellulose blend to prevent precipitation at the pI.

##### **3.2.S.3.1.4.2.2. Sample Preparation Protocol (Protocol Ref: GHS-ANA-SOP-772)**
1.  **Desalting:** Samples are desalted using Zeba™ Spin Desalting Columns (7K MWCO) to remove excess buffer salts that interfere with the pH gradient.
2.  **Dilution:** The desalted DS is diluted to a final concentration of 1.0 mg/mL in Milli-Q water.
3.  **Master Mix Preparation:**
    *   0.1% Methylcellulose (MC): 100 µL
    *   Pharmalyte 3–10: 8 µL
    *   Pharmalyte 5–8: 12 µL
    *   Urea (8M): 200 µL
    *   pI Markers (0.5 µL each): 2 µL
    *   Purified Glucogen-XR (1 mg/mL): 80 µL
4.  **Mixing:** The master mix is vortexed for 10 seconds and centrifuged at 10,000 x g for 3 minutes to remove air bubbles.

##### **3.2.S.3.1.4.2.3. Instrumental Parameters**
| Parameter | Setting |
| :--- | :--- |
| **Pre-focusing Voltage** | 1500 V for 1.0 minute |
| **Focusing Voltage** | 3000 V for 6.0 minutes |
| **Detection** | UV Absorption at 280 nm |
| **Integration Range** | pI 4.5 to pI 9.5 |
| **Capillary Temperature** | 25°C |

---

#### **3.2.S.3.1.4.3. Data Integration and Calculations**

The electropherogram is integrated to determine the percentage peak area for the acidic, main, and basic species.

**Calculation for Relative Area Percentage (%):**
$$\% \text{Peak Area} = \left( \frac{A_i}{\sum A_{total}} \right) \times 100$$
Where:
*   $A_i$ = Area of the individual peak or group (e.g., Acidic Region).
*   $\sum A_{total}$ = Sum of all peak areas from the start of the acidic region to the end of the basic region, excluding pI markers.

**pI Determination:**
The pI of Glucogen-XR variants is calculated using a linear regression model based on the migration distance of known pI markers:
$$pI_{sample} = \frac{(t_{sample} - t_{marker1}) \times (pI_{marker2} - pI_{marker1})}{(t_{marker2} - t_{marker1})} + pI_{marker1}$$
*(Where $t$ represents the detection time/position).*

---

#### **3.2.S.3.1.4.4. Batch Analysis Results (Representative Clinical and PPQ Batches)**

The following table summarizes the charge heterogeneity data for Glucogen-XR Drug Substance batches produced between 2024 and 2025.

**Table 3.2.S.3.1.4-1: cIEF Analysis of Glucogen-XR Batches**

| Batch Number | Manufacture Date | Site | Main Peak pI | Main Peak (%) | Acidic Variants (%) | Basic Variants (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2024-001** | 12-JAN-2024 | SSF-01 | 7.24 | 74.2 | 18.5 | 7.3 |
| **GLUC-2024-005** | 03-MAR-2024 | SSF-01 | 7.23 | 73.9 | 19.1 | 7.0 |
| **GLUC-2025-010** | 15-JAN-2025 | SSF-02 | 7.25 | 75.1 | 17.8 | 7.1 |
| **GLUC-2025-011 (PPQ)**| 22-JAN-2025 | SSF-02 | 7.24 | 74.8 | 18.2 | 7.0 |
| **GLUC-2025-012 (PPQ)**| 29-JAN-2025 | SSF-02 | 7.24 | 75.5 | 17.5 | 7.0 |
| **GLUC-2025-013 (PPQ)**| 05-FEB-2025 | SSF-02 | 7.25 | 74.9 | 18.0 | 7.1 |
| **Mean** | - | - | **7.24** | **74.7** | **18.2** | **7.1** |
| **% RSD** | - | - | **0.11%** | **0.82%** | **3.1%** | **1.6%** |

*Note: All batches meet the proposed specification of Main Peak $\ge$ 70.0% and Acidic Variants $\le$ 22.0%.*

---

#### **3.2.S.3.1.4.5. Identification of Charge Variants**

To characterize the peaks observed in the cIEF profile, fractional collection was performed using a semi-preparative IEF system, followed by LC-MS/MS peptide mapping.

##### **3.2.S.3.1.4.5.1. Acidic Variants (pI 5.5 – 7.1)**
Characterization reveals two primary contributors to the acidic region:
1.  **Deamidation:** Deamidation of $Asn^{28}$ to $Asp^{28}$ or iso$Asp^{28}$ introduces an additional negative charge, shifting the pI by approximately 0.15 pH units per deamidation event.
2.  **Sialylation:** The O-glycans located on the linker region (Ser-Thr rich sequence) contain variable Neu5Ac (sialic acid) residues. Each sialic acid moiety increases the acidity of the molecule. Treatment with Sialidase (Neuraminidase) results in a collapse of several acidic peaks into the main peak, confirming sialylation as a major source of heterogeneity.

##### **3.2.S.3.1.4.5.2. Basic Variants (pI 7.4 – 8.5)**
1.  **C-terminal Lysine Clipping:** Incomplete processing of the C-terminal Lysine on the fusion partner leads to a more basic profile. However, for Glucogen-XR, this is minimized by the use of an optimized CHO-K1 GS knockout strain.
2.  **Succinimid Formation:** An intermediate of the deamidation process at position $Asn^{52}$, which lacks the negative charge of the aspartate form, can appear in the basic region relative to the deamidated species.

---

#### **3.2.S.3.1.4.6. Analytical Validation Summary (Method GHS-ANA-SOP-772)**

The cIEF method was validated according to ICH Q2(R1) guidelines.

**Table 3.2.S.3.1.4-2: Validation Characteristics for Glucogen-XR cIEF**

| Parameter | Performance Result | Acceptance Criteria |
| :--- | :--- | :--- |
| **Specificity** | No interference from placebo/buffer matrix | No co-eluting peaks with DS |
| **Repeatability (n=6)** | Main Peak Area %: RSD = 0.45% | RSD $\le$ 2.0% |
| **Intermediate Precision** | Inter-analyst RSD = 0.92% | RSD $\le$ 3.0% |
| **Linearity (Range)** | 0.25 mg/mL to 2.5 mg/mL ($R^2 = 0.999$) | $R^2 \ge 0.990$ |
| **Accuracy (Recovery)** | 98.5% – 101.2% | 95.0% – 105.0% |
| **LOD (Acidic Peaks)** | 0.02 mg/mL | S/N $\ge$ 3 |
| **LOQ (Acidic Peaks)** | 0.05 mg/mL | S/N $\ge$ 10 |

---

#### **3.2.S.3.1.4.7. Comparison of Gel-Based IEF and cIEF**

While cIEF is the release method, traditional vertical slab gel IEF was used during early development to establish the pI range.

**Experimental Procedure (Gel-IEF):**
*   **Gel:** Pre-cast pH 3–10 IEF polyacrylamide gels.
*   **Running Conditions:** 100V for 60 min, 200V for 60 min, 500V for 30 min.
*   **Staining:** Coomassie Brilliant Blue R-250.
*   **Results:** The gel-based IEF confirmed a band pattern consistent with the cIEF electropherogram, with the most intense band at pH 7.2.

**Figure 3.2.S.3.1.4-A: Representative cIEF Electropherogram of PPQ Batch GLUC-2025-011**
*(Description: The figure shows a dominant peak at pI 7.24, representing the monomeric glucapeptide. Three distinct acidic peaks are visible between pI 6.2 and 7.1, and one minor basic peak at pI 7.8).*

---

#### **3.2.S.3.1.4.8. Forced Degradation and Sensitivity to Charge Changes**

To demonstrate the stability-indicating nature of the IEF method, Glucogen-XR (Batch GLUC-2025-011) was subjected to thermal stress (40°C for 21 days).

**Table 3.2.S.3.1.4-3: Stability Sensitivity – Thermal Stress**

| Time Point | Main Peak (%) | Acidic Variants (%) | Change from $T_0$ |
| :--- | :--- | :--- | :--- |
| **Initial (T=0)** | 74.8 | 18.2 | - |
| **7 Days (40°C)** | 70.1 | 22.4 | +4.2% Acidic |
| **14 Days (40°C)** | 64.5 | 28.1 | +9.9% Acidic |
| **21 Days (40°C)** | 58.2 | 34.5 | +16.3% Acidic |

*Conclusion:* The increase in acidic variants correlates with deamidation rates confirmed by Orthogonal Mass Spectrometry, proving the method is sensitive to degradation-induced charge shifts.

---

#### **3.2.S.3.1.4.9. Regulatory References**
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (Referenced for general charge heterogeneity principles).
3.  **USP <1055>:** Isoelectric Focusing.
4.  **FDA Guidance for Industry:** Q2B Validation of Analytical Procedures: Methodology.

---
**End of Subsection**

---

## Capillary Isoelectric Focusing (cIEF)

# MODULE 3: QUALITY (3.2.S.3.1) - ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS

## SECTION: 3.2.S.3.1.4.2 Charge Heterogeneity: Capillary Isoelectric Focusing (cIEF)

### 3.2.S.3.1.4.2.1 Introduction and Objective
The charge heterogeneity profile of Glucogen-XR (glucapeptide extended-release) is a Critical Quality Attribute (CQA) that reflects the post-translational modifications (PTMs) and chemical degradation products inherent to the manufacturing of recombinant proteins in the proprietary GHS-CHO-001 cell line. Capillary Isoelectric Focusing (cIEF) is utilized as a high-resolution identity and purity assay to monitor the distribution of acidic, main, and basic isoforms. 

This section details the analytical methodology, validation parameters, and comprehensive characterization data for Glucogen-XR Drug Substance (DS) batches produced at the Google Health Sciences (GHS) facility in South San Francisco. The objective is to demonstrate consistent control over the isoelectric point (pI) and the relative percentage of charge variants, which are indicative of deamidation, C-terminal lysine processing, sialylation, and glycation levels.

---

### 3.2.S.3.1.4.2.2 Methodology and Instrumentation
Glucogen-XR is analyzed using a high-performance cIEF platform equipped with whole-column imaging detection (WCID). Unlike traditional mobilized cIEF, WCID allows for the real-time monitoring of the focusing process, ensuring the achievement of steady-state equilibrium without the deleterious effects of mobilization-induced peak distortion.

#### 3.2.S.3.1.4.2.2.1 Instrumentation Specifications
| Component | Specification/Model | Equipment ID |
| :--- | :--- | :--- |
| **Main Unit** | ProteinSimple iCE3 / Maurice cIEF System | GHS-CE-1002 / GHS-CE-1105 |
| **Detection** | UV Absorption (280 nm) | Integrated CMOS Sensor |
| **Capillary** | Fluorocarbon (FC) Coated Capillary (50 µm ID, 5 cm) | P/N 010-022 |
| **Autosampler** | Temperature-controlled (4°C ± 2°C) | Integrated |
| **Software** | Compass for iCE / Empower 3 | Ver. 2.1 / FR 4 |

#### 3.2.S.3.1.4.2.2.2 Reagent Preparation and Working Solutions
1.  **Anolyte:** 80 mM Phosphoric acid ($H_3PO_4$) in 0.1% Methylcellulose (MC).
2.  **Catholyte:** 100 mM Sodium Hydroxide ($NaOH$) in 0.1% Methylcellulose (MC).
3.  **Carrier Ampholytes:** Pharmalyte 3-10 (Broad range) and Pharmalyte 5-8 (Narrow range) blended at a 1:4 ratio to optimize resolution around the Glucogen-XR pI (~6.2 - 6.8).
4.  **Additives:** 4M Urea is utilized to prevent peptide aggregation and ensure complete denaturation during the focusing phase.
5.  **pI Markers:** Synthetic peptide markers with pI values of 5.12, 5.85, 7.05, and 8.22 are used for internal calibration of the pH gradient.

---

### 3.2.S.3.1.4.2.3 Step-by-Step Analytical Protocol (SOP-GHS-QC-0942)

**Step 1: Sample Preparation**
*   Dilute Glucogen-XR Drug Substance to a final concentration of 1.0 mg/mL using Milli-Q water.
*   Prepare the "Master Mix" solution containing:
    *   4% Pharmalyte 5-8
    *   1% Pharmalyte 3-10
    *   pI Markers (0.5% v/v each)
    *   4M Urea (final concentration)
    *   0.35% Methylcellulose
*   Mix 20 µL of diluted sample with 180 µL of Master Mix. Vortex gently for 30 seconds and centrifuge at 10,000 RPM for 2 minutes to remove microbubbles.

**Step 2: Capillary Conditioning**
*   Pressure-rinse the FC-capillary with deionized water for 120 seconds.
*   Pressure-rinse with 0.5% MC for 180 seconds to ensure a uniform coating and suppress electroosmotic flow (EOF).

**Step 3: Sample Injection and Focusing**
*   Inject the sample/ampholyte mixture for 60 seconds at 2.0 psi.
*   **Focusing Phase I:** Apply 1500 V for 1.0 minute.
*   **Focusing Phase II:** Apply 3000 V for 8.0 minutes.
*   Monitor current throughout the run; stable current (typically < 10 µA) indicates completion of the pH gradient formation.

**Step 4: Image Acquisition and Integration**
*   Capture UV absorption at 280 nm using the whole-column imaging sensor.
*   Perform pI calibration using the linear regression of the pI markers.
*   Integrate peaks according to the following windows:
    *   **Acidic Region:** All peaks eluting before the main peak.
    *   **Main Peak:** The predominant isoform (Glucogen-XR intact peptide).
    *   **Basic Region:** All peaks eluting after the main peak.

---

### 3.2.S.3.1.4.2.4 Representative Data for Glucogen-XR Batches
The following table summarizes the cIEF results for five (5) consecutive GLP and GMP batches of Glucogen-XR Drug Substance.

#### Table 1: cIEF Charge Variant Distribution and pI Summary
| Batch Number | Manufacture Date | Main Peak pI | Main Peak (%) | Total Acidic (%) | Total Basic (%) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 6.54 | 72.4 | 18.2 | 9.4 | Pass |
| **GLUC-2025-002** | 28-JAN-2025 | 6.55 | 71.9 | 18.8 | 9.3 | Pass |
| **GLUC-2025-003** | 15-FEB-2025 | 6.54 | 73.1 | 17.5 | 9.4 | Pass |
| **GLUC-2025-004** | 03-MAR-2025 | 6.53 | 72.8 | 17.9 | 9.3 | Pass |
| **GLUC-2025-005** | 19-MAR-2025 | 6.55 | 72.2 | 18.4 | 9.4 | Pass |
| **Mean** | -- | **6.54** | **72.48** | **18.16** | **9.36** | -- |
| **% RSD** | -- | **0.12%** | **0.65%** | **2.74%** | **0.51%** | -- |

#### Table 2: Detailed Peak Identification and Characterization
| Peak Group | Apparent pI Range | Proposed Modification | Impact on Bioactivity |
| :--- | :--- | :--- | :--- |
| **Acidic 2** | 6.10 - 6.25 | Double Deamidation / Multi-Sialylation | Moderate Reduction |
| **Acidic 1** | 6.26 - 6.45 | Single Deamidation (Asn to Asp) | Negligible |
| **Main Peak** | 6.46 - 6.65 | Intact Glucapeptide | Full Potency |
| **Basic 1** | 6.66 - 6.80 | Succinimide Intermediate / C-term Amidation | Negligible |
| **Basic 2** | 6.81 - 7.00 | Non-enzymatic Glycation / Aggregates | Monitor for Immunogenicity |

---

### 3.2.S.3.1.4.2.5 Data Analysis and Statistical Control
Statistical process control (SPC) is applied to the cIEF data to ensure that the charge heterogeneity profile remains within the validated Design Space.

**Calculations:**
1.  **Corrected Area (CA):**
    $$CA = \frac{Area}{Migration Time (not applicable for WCID)}$$
    *Note: For iCE3/Maurice, peak area is integrated directly against the spatial coordinate.*
2.  **Relative Percent Area:**
    $$\% Peak = \frac{Area_{peak}}{\sum Area_{all peaks}} \times 100$$
3.  **Resolution ($R_s$):**
    $$R_s = \frac{2(pI_2 - pI_1)}{W_1 + W_2}$$
    *The system suitability requirement for resolution between the Main Peak and Acidic 1 is $R_s \geq 1.2$.*

#### Statistical Analysis of Batch Uniformity
The analysis of variance (ANOVA) performed on batches GLUC-2025-001 through GLUC-2025-005 yields a p-value of 0.89 for the Main Peak percentage, indicating no statistically significant difference between production lots. This confirms the robustness of the GHS-CHO-001 cell line and the downstream purification process (specifically the Cation Exchange Chromatography step).

---

### 3.2.S.3.1.4.2.6 Analytical Validation Summary
The cIEF method has been validated according to **ICH Q2(R1)** guidelines.

*   **Specificity:** No interference from the formulation buffer or placeholders. Blank injections show a baseline noise of < 0.001 AU.
*   **Linearity:** Evaluated from 0.25 mg/mL to 2.0 mg/mL. $R^2 = 0.9992$.
*   **Repeatability (Intra-day):** %RSD for Main Peak % area is 0.45% ($n=6$).
*   **Intermediate Precision (Inter-day/Inter-analyst):** %RSD for Main Peak % area is 0.88% ($n=12$).
*   **Accuracy:** Recovery of spiked charge variants ranged from 96.5% to 103.2%.
*   **LOD/LOQ:** The Limit of Quantitation for minor acidic variants is 0.5% of total area.

---

### 3.2.S.3.1.4.2.7 Robustness Testing (Design of Experiments - DoE)
A JMP-based DoE study was conducted to evaluate the impact of critical method parameters (CMPs) on the resolution of the Glucogen-XR charge profile.

| Parameter | Target | Tested Range | Impact |
| :--- | :--- | :--- | :--- |
| **Focusing Time** | 8.0 min | 7.0 - 9.0 min | Low (Current stabilizes by 6 min) |
| **Urea Concentration** | 4.0 M | 3.5 - 4.5 M | High (Lower urea leads to peak broadening) |
| **Pharmalyte Conc.** | 5% total | 4% - 6% | Medium (Affects gradient slope) |
| **Anolyte/Catholyte** | Freshly prepared | Up to 48 hrs old | Low |

**Conclusion on Robustness:** The method is highly sensitive to Urea concentration. SOP-GHS-QC-0942 mandates the use of freshly prepared Urea solutions (stored < 24 hrs at 4°C) to prevent the formation of cyanate ions, which could lead to artefactual carbamylation and subsequent "basic shifts" in the cIEF profile.

---

### 3.2.S.3.1.4.2.8 Regulatory Compliance and Reference Standards
This methodology complies with the following regulatory frameworks:
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for GLP-1 peptides).
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **FDA Guidance:** "Points to Consider in the Manufacture and Testing of Monoclonal Antibody Products for Human Use."

Glucogen-XR Reference Standard (Batch: GHS-RS-2024-A) is run with every sequence to ensure system suitability. The pI of the Reference Standard is established at $6.54 \pm 0.05$.

---

### 3.2.S.3.1.4.2.9 Forced Degradation and Sensitivity to PTMs
To confirm that the cIEF method is stability-indicating, Glucogen-XR was subjected to various stress conditions:
1.  **Thermal Stress (40°C for 14 days):** Resulted in a 12% increase in the Acidic 1 peak (confirmed as deamidation at $Asn^{28}$ via LC-MS).
2.  **High pH (pH 9.0):** Rapid increase in acidic variants due to base-catalyzed deamidation.
3.  **Oxidative Stress ($0.3\% H_2O_2$):** Negligible impact on pI, as methionine oxidation does not significantly alter the net charge of the glucapeptide molecule.

This confirms the cIEF method is specifically sensitive to modifications that alter the ionic state of the peptide, providing a critical window into the molecular integrity of Glucogen-XR.

---
**End of Subsection 3.2.S.3.1.4.2**
*Confidential - Google Health Sciences Internal Use Only*

---

## Ion Exchange Chromatography

### 3.2.S.3. CHARACTERIZATION
#### 3.2.S.3.2. Impurities and Charge Heterogeneity
##### 3.2.S.3.2.1. Ion Exchange Chromatography (IEX-HPLC/UPLC)

---

**1. SCOPE AND OVERVIEW**

This section provides a comprehensive technical characterization of the charge heterogeneity profile for Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist fusion protein produced in the proprietary GHS-CHO-001 cell line. Charge heterogeneity is a Critical Quality Attribute (CQA) for Glucogen-XR, as variations in surface charge distribution can significantly impact the molecule's pharmacokinetics (PK), receptor binding affinity, and systemic half-life.

The analytical strategy for monitoring charge variants utilizes Strong Cation Exchange (SCX) High-Performance Liquid Chromatography (HPLC) and Ultra-Performance Liquid Chromatography (UPLC). This method is validated to resolve the main peak from acidic and basic variants resulting from post-translational modifications (PTMs), including N-terminal pyroglutamate formation, deamidation, C-terminal lysine clipping, and sialylation variations in the glycan moieties.

**2. REGULATORY ALIGNMENT AND COMPLIANCE**

The characterization studies described herein were performed in strict accordance with the following regulatory guidelines:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for GLP-1 fusion proteins).
*   **USP <1055>:** Biotechnology-Derived Articles - Peptide Mapping and Charge Heterogeneity.
*   **FDA Guidance for Industry:** Quality Considerations in Demonstrating Biosimilarity (where applicable for analytical rigor).

**3. ANALYTICAL METHODOLOGY: SCX-UPLC PARAMETERS**

The determination of charge isoforms for Glucogen-XR is conducted using a pH-gradient-based Strong Cation Exchange method. Unlike salt gradients, the pH gradient offers superior resolution for the specific pI (isoelectric point) of Glucogen-XR, which is calculated at 6.12 (theoretical).

###### 3.2.S.3.2.1.1. Equipment and Instrumentation
All analyses were performed using the Google Health Sciences (GHS) Advanced Chromatography Suite.
*   **System:** Waters ACQUITY UPLC H-Class Bio System with Quaternary Solvent Manager (QSM) and Bio-Inert Flow Path.
*   **Detector:** Tunable Ultraviolet (TUV) Detector or Photodiode Array (PDA) at 214 nm and 280 nm.
*   **Column:** Thermo Scientific ProPac™ WCX-10 (4 x 250 mm) or ProPac™ Elite SCX (4 x 250 mm).
*   **Column Temperature:** 30.0°C ± 0.5°C.
*   **Sample Manager Temperature:** 5.0°C ± 2.0°C.
*   **Data System:** Empower 3 FR4 Chromatography Data Software (CDS).

###### 3.2.S.3.2.1.2. Buffer Systems and Mobile Phases
To ensure maximum reproducibility across batches (GLUC-2025-XXX), a binary pH gradient system is utilized.
*   **Mobile Phase A (Low pH):** 20 mM MES (2-(N-morpholino)ethanesulfonic acid), pH 5.5.
*   **Mobile Phase B (High pH):** 20 mM HEPES (4-(2-hydroxyethyl)-1-piperazineethanesulfonic acid), 20 mM CHES (N-Cyclohexyl-2-aminoethanesulfonic acid), pH 9.5.
*   **Wash Buffer:** 1M NaCl in Mobile Phase B for column regeneration.

###### 3.2.S.3.2.1.3. Gradient Profile
| Time (min) | Flow Rate (mL/min) | %A | %B | Curve Type |
| :--- | :--- | :--- | :--- | :--- |
| 0.00 | 0.500 | 100.0 | 0.0 | Initial |
| 5.00 | 0.500 | 100.0 | 0.0 | 6 (Linear) |
| 45.00 | 0.500 | 30.0 | 70.0 | 6 (Linear) |
| 45.10 | 0.500 | 0.0 | 100.0 | 6 (Linear) |
| 50.00 | 0.500 | 0.0 | 100.0 | 6 (Linear) |
| 50.10 | 0.500 | 100.0 | 0.0 | 6 (Linear) |
| 65.00 | 0.500 | 100.0 | 0.0 | 6 (Linear) |

**4. SAMPLE PREPARATION AND PROTEOLYSIS MITIGATION**

To prevent *ex vivo* artifact formation during analysis, samples are diluted to 2.0 mg/mL using Mobile Phase A. For characterization of C-terminal lysine heterogeneity, samples are treated with Carboxypeptidase B (CpB).

*   **Protocol for CpB Digestion:**
    1.  Aliquot 100 µg of Glucogen-XR Drug Substance.
    2.  Add CpB (Sigma-Aldrich, Regulatory Grade) at a ratio of 1:100 (w/w).
    3.  Incubate at 37°C for 60 minutes.
    4.  Quench reaction with 1% Phosphoric Acid to pH 5.0.
    5.  Inject 20 µL onto the SCX column.

**5. TABULATED RESULTS: CHARACTERIZATION OF CLINICAL AND PV BATCHES**

The following table summarizes the charge variant distribution across representative batches produced at the 3000 Innovation Drive facility.

**Table 3.2.S.3.2.1-1: Charge Heterogeneity Distribution for Glucogen-XR Batches (GLUC-2025-XXX)**

| Batch Number | Manufacture Date | Total Acidic Variants (%) | Main Peak (%) | Total Basic Variants (%) | Resolution (Main/Basic) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 14.2 | 82.5 | 3.3 | 1.82 |
| **GLUC-2025-002** | 28-JAN-2025 | 13.9 | 83.1 | 3.0 | 1.79 |
| **GLUC-2025-003** | 15-FEB-2025 | 14.5 | 81.9 | 3.6 | 1.85 |
| **GLUC-2025-004** | 02-MAR-2025 | 15.1 | 81.2 | 3.7 | 1.77 |
| **GLUC-2025-005** | 20-MAR-2025 | 13.8 | 83.5 | 2.7 | 1.90 |
| **Mean** | -- | **14.3** | **82.4** | **3.3** | **1.83** |
| **% RSD** | -- | **3.6%** | **1.1%** | **12.4%** | **2.7%** |

**6. IDENTIFICATION OF CHARGE VARIANTS**

Extensive characterization using SCX-UPLC coupled with Electrospray Ionization Mass Spectrometry (ESI-MS) was performed to identify the molecular species within each peak cluster.

###### 3.2.S.3.2.1.4. Acidic Variants (Pre-peaks)
The acidic variants elute prior to the main peak (Retention Time $R_t \approx 22-28$ minutes). These are characterized by a decrease in pI.
1.  **Deamidation:** Major acidic species identified at $Asn^{28}$ and $Asn^{52}$. Deamidation converts neutral asparagine to negatively charged aspartate or iso-aspartate, shifting the elution earlier.
2.  **Sialylation:** The GHS-CHO-001 cell line produces complex N-glycans. Higher sialic acid content (Neu5Ac) increases the negative charge density. Treatment with Neuraminidase (Sialidase) results in a significant reduction of the acidic cluster, confirming sialylation as a primary driver.
3.  **Glycation:** Non-enzymatic attachment of glucose to lysine residues ($Lys^{12}$, $Lys^{26}$).

###### 3.2.S.3.2.1.5. Main Peak
The main peak ($R_t \approx 32.5$ minutes) represents the intact, fully active Glucogen-XR molecule with the desired glycoform profile and minimal PTMs.

###### 3.2.S.3.2.1.6. Basic Variants (Post-peaks)
The basic variants elute after the main peak ($R_t \approx 36-42$ minutes).
1.  **C-terminal Lysine ($Lys^{452}$):** Incomplete processing of the C-terminal lysine by endogenous CHO carboxypeptidases results in a $+1$ charge per lysine. Addition of exogenous CpB (as described in Section 4) collapses these peaks into the main peak.
2.  **Succinimide Formation:** An intermediate of deamidation that carries a slight basic shift under specific mobile phase conditions.
3.  **Aggregation:** High molecular weight species (HMWS) often exhibit shifted retention times; however, these are primarily monitored via SEC-HPLC (See Section 3.2.S.3.2.2).

**7. STATISTICAL ANALYSIS AND SYSTEM SUITABILITY**

For the validation of the IEX method, the following statistical parameters were applied to Batch GLUC-2025-001:

*   **Repeatability:** $n=6$ injections. The %RSD for the Main Peak area was 0.45%, demonstrating high precision.
*   **Intermediate Precision:** Performed by two analysts over three days using different UPLC systems. The cumulative %RSD for Total Acidic Variants was 2.1%.
*   **Linearity:** Established from 50% to 150% of the nominal protein concentration (1.0 to 3.0 mg/mL). The correlation coefficient ($R^2$) was $> 0.999$.

**Calculations for Resolution ($R_s$):**
$$R_s = \frac{2(t_{R2} - t_{R1})}{w_1 + w_2}$$
Where:
*   $t_{R1}, t_{R2}$ = Retention times of the main peak and the closest basic variant.
*   $w_1, w_2$ = Peak widths at the baseline.

The acceptance criterion for system suitability is $R_s \geq 1.5$ between the main peak and the first major basic variant.

**8. FORCED DEGRADATION CORRELATION**

To confirm the sensitivity of the SCX-UPLC method, Glucogen-XR (Batch GLUC-2025-001) was subjected to thermal stress ($40^{\circ}C$ for 28 days).

| Condition | Acidic (%) | Main (%) | Basic (%) | Key Observation |
| :--- | :--- | :--- | :--- | :--- |
| Control (T=0) | 14.2 | 82.5 | 3.3 | Baseline profile |
| Thermal (40°C) | 28.6 | 62.1 | 9.3 | Significant increase in deamidation |
| Alkaline (pH 9.0) | 42.1 | 51.2 | 6.7 | Rapid deamidation and potential fragmentation |

This data confirms that the IEX method is stability-indicating and capable of detecting chemical degradation that may occur during the shelf-life of the Drug Product.

**9. CONCLUSION**

The Ion Exchange Chromatography characterization of Glucogen-XR demonstrates a highly consistent charge profile across five consecutive manufacturing batches (GLUC-2025-001 through GLUC-2025-005). The main peak purity consistently exceeds 80%, with acidic and basic variants well-characterized and within established clinical limits. This method is suitable for routine quality control and stability monitoring of Glucogen-XR drug substance and drug product.

---
**Footnotes:**
1. GHS Internal Method SOP-AN-00452: *Strong Cation Exchange Analysis of GLP-1 Fusion Proteins.*
2. Raw data archived in Google Cloud Life Sciences ELN (Electronic Lab Notebook) under Project GLUC-XR-2025.
3. Reference Standard: GHS-RS-GLUC-2024-A.

---

# Glycosylation Profiling (if applicable)

## N-Glycan and O-Glycan Mapping

### 3.2.S.3. CHARACTERIZATION
#### 3.2.S.3.1. Elucidation of Structure and Other Characteristics
---
### SUBSECTION: N-GLYCAN AND O-GLYCAN MAPPING (GLUCOGEN-XR)

#### 1.0 INTRODUCTION AND SCOPE
This subsection provides an exhaustive analytical characterization of the carbohydrate moieties associated with Glucogen-XR (glucapeptide extended-release), produced via the proprietary GHS-CHO-001 mammalian cell line. As a GLP-1 receptor agonist fusion protein, the glycosylation profile is a Critical Quality Attribute (CQA) influencing serum half-life, receptor binding affinity, immunogenicity, and solubility.

The characterization follows **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q11** (Development and Manufacture of Drug Substances). Analytical procedures were validated according to **USP <121>** and **USP <1055>**.

---

#### 2.0 METHODOLOGY: N-GLYCAN ANALYSIS

##### 2.1 Sample Preparation and Enzymatic Release (PNGase F)
N-glycans are enzymatically cleaved from the peptide backbone using Peptide-N-Glycosidase F (PNGase F). 

**Protocol GLUC-SOP-552: N-Glycan Release**
1. **Denaturation:** 100 µg of Glucogen-XR (Batch: GLUC-2025-001 through GLUC-2025-010) is diluted in 50 mM ammonium bicarbonate buffer (pH 7.8).
2. **Reduction:** Addition of 10 mM Dithiothreitol (DTT) at 56°C for 45 minutes.
3. **Alkylation:** Addition of 25 mM Iodoacetamide (IAM) in the dark at room temperature for 30 minutes.
4. **Deglycosylation:** 5 units of recombinant PNGase F (GHS-ENZ-Q4) are added. Incubation occurs at 37°C for 18 hours.
5. **Clean-up:** Glycans are isolated using HILIC-based Solid Phase Extraction (SPE) cartridges (GHS-SPE-99).

##### 2.2 Derivatization (2-AB Labeling)
Released glycans are labeled at the reducing end with 2-Aminobenzamide (2-AB) via reductive amination to facilitate fluorescence detection.

**Reaction Stoichiometry:**
$$ \text{Glycan-CHO} + \text{2-AB} \xrightarrow{NaBH_3CN / \text{Acetic Acid}} \text{Glycan-CH}_2\text{-NH-Benzamide} $$

##### 2.3 UPLC-FLD-MS Characterization
Analysis is performed on a Waters ACQUITY UPLC System coupled with a Q-ToF mass spectrometer.

**Table 1: Chromatographic Parameters for N-Glycan Mapping**
| Parameter | Specification |
| :--- | :--- |
| **Column** | ACQUITY UPLC Glycan BEH Amide, 1.7 µm, 2.1 x 150 mm |
| **Mobile Phase A** | 50 mM Ammonium Formate, pH 4.4 |
| **Mobile Phase B** | 100% Acetonitrile |
| **Gradient** | 75% B to 55% B over 60 minutes |
| **Flow Rate** | 0.4 mL/min |
| **Temperature** | 60°C |
| **Detection** | FLD (λex = 330 nm, λem = 420 nm); MS (ESI+) |

---

#### 3.0 N-GLYCAN DATA AND BATCH COMPARABILITY (GLUC-2025-XXX)

The following table summarizes the relative abundance of N-glycan species across three pivotal clinical batches.

**Table 2: Quantitative N-Glycan Profile (%) for Glucogen-XR**
| Glycan Code | Structure Description | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Mean (%) | RSD (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **G0** | Asialo, agalacto | 2.14 | 2.08 | 2.11 | 2.11 | 1.4 |
| **G0F** | G0 + Core Fucose | 18.45 | 17.92 | 18.15 | 18.17 | 1.5 |
| **G1F** | Monogalacto + Fucose | 32.10 | 33.05 | 32.45 | 32.53 | 1.5 |
| **G2F** | Digalacto + Fucose | 22.15 | 21.80 | 22.05 | 22.00 | 0.8 |
| **G2FS1** | G2F + 1 Sialic Acid | 12.40 | 12.85 | 12.60 | 12.62 | 1.8 |
| **G2FS2** | G2F + 2 Sialic Acids | 8.20 | 8.45 | 8.35 | 8.33 | 1.5 |
| **Man5** | High Mannose | 1.55 | 1.62 | 1.58 | 1.58 | 2.2 |
| **Other** | Minor species (<0.5%) | 3.01 | 2.23 | 2.71 | 2.65 | N/A |

---

#### 4.0 METHODOLOGY: O-GLYCAN ANALYSIS

Glucogen-XR contains specific O-glycosylation sites within the linker regions of the glucapeptide moiety. O-glycans are characterized via Reductive β-Elimination.

##### 4.1 Reductive β-Elimination Protocol
1. **Reaction:** Glucogen-XR (2 mg/mL) is treated with 1.0 M NaBH₄ in 0.1 M NaOH at 45°C for 24 hours.
2. **Neutralization:** The reaction is quenched with 10% Acetic Acid until pH 5.0.
3. **Desalting:** Samples are passed through a Dowex 50W-X8 cation exchange column.
4. **Borate Removal:** Borate ions are removed as methyl borate by repeated evaporation with methanol containing 1% acetic acid.

##### 4.2 LC-MS/MS Analysis of O-Glycans
O-glycans are analyzed as alditols using High-Performance Anion-Exchange Chromatography with Pulsed Amperometric Detection (HPAEC-PAD).

**Table 3: O-Glycan Species Identified in Glucogen-XR**
| Site ID | Dominant Structure | m/z (Observed) | Theoretical Mass |
| :--- | :--- | :--- | :--- |
| **Ser-14** | Core 1 (Gal-GalNAc) | 383.15 | 383.14 |
| **Ser-14** | Mono-sialylated Core 1 | 674.25 | 674.24 |
| **Thr-22** | Di-sialylated Core 1 | 965.35 | 965.33 |

---

#### 5.0 CALCULATIONS AND STATISTICAL ANALYSIS

##### 5.1 Sialylation Index (SI)
The Sialylation Index is calculated to ensure consistency in the extended-release pharmacokinetics, as terminal sialic acids prevent premature clearance by the asialoglycoprotein receptor (ASGPR) in the liver.

**Formula:**
$$ SI = \frac{\sum (\text{Number of Sialic Acids} \times \text{Relative \% Area})}{\text{Total Area of Glycans}} $$

**Table 4: Sialylation Index (SI) Comparison**
| Batch Number | SI Value | Specification Range |
| :--- | :--- | :--- |
| **GLUC-2025-001** | 0.452 | 0.40 - 0.55 |
| **GLUC-2025-002** | 0.461 | 0.40 - 0.55 |
| **GLUC-2025-003** | 0.458 | 0.40 - 0.55 |

---

#### 6.0 SITE-SPECIFIC GLYCOSYLATION MAPPING
To confirm the occupancy of glycosylation sites, Glucogen-XR is subjected to multi-enzyme digestion (Trypsin and Glu-C) followed by LC-MS/MS.

##### 6.1 Tryptic Peptide Mapping Procedure
1. **Digestion:** Protein-to-enzyme ratio of 20:1.
2. **Analysis:** Orbitrap Exploris 480 Mass Spectrometer.
3. **Software:** Data processed via GHS-GlycoCloud™ v4.2.

**Table 5: Glycosylation Site Occupancy Data**
| Peptide Fragment | Residue | Modification | Occupancy (%) |
| :--- | :--- | :--- | :--- |
| **T12-T15** | Asn-122 | N-Linked | 99.8% |
| **T28-T30** | Ser-14 | O-Linked | 84.5% |
| **T35-T38** | Thr-22 | O-Linked | 72.1% |

---

#### 7.0 COMPLIANCE AND REGULATORY SUMMARY
All analyses were conducted in a cGMP environment. The glycosylation profile of Glucogen-XR demonstrates high consistency across developmental and clinical batches. The absence of non-human glycans, such as N-Glycolylneuraminic acid (Neu5Gc) and α-1,3-galactose (Gal-alpha-1,3-Gal), has been confirmed via high-sensitivity HPAEC-PAD (Limit of Detection: 0.05%), mitigating the risk of neutralizing immunogenic responses.

**References:**
1.  **USP <129>** Analytical Procedures for Recombinant Therapeutic Proteins.
2.  **ICH Q6B** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **Varki A, et al.** Essentials of Glycobiology, 3rd edition. Cold Spring Harbor Laboratory Press.
4.  **FDA Guidance for Industry:** Quality Considerations in Demonstrating Biosimilarity of a Therapeutic Protein Product to a Reference Product (for comparative logic).

---
**END OF SECTION**

---

## Sialic Acid Content

# MODULE 3: QUALITY (3.2.S.3.1 CHARACTERIZATION)
## SECTION: GLYCOSYLATION PROFILING
### SUBSECTION: 3.2.S.3.1.2.4 SIALIC ACID CONTENT (QUANTITATIVE DETERMINATION)

---

#### 1.0 INTRODUCTION AND SCOPE
The terminal capping of N-linked and O-linked oligosaccharides with sialic acids (neuraminic acids) is a critical quality attribute (CQA) for Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. Sialylation significantly impacts the glycoprotein’s pharmacokinetic (PK) profile by shielding underlying galactose residues from the asialoglycoprotein receptor (ASGPR) in the liver, thereby extending the circulatory half-life—a core requirement for the "XR" (extended-release) designation of this therapeutic.

This subsection details the quantitative analysis of total sialic acid content, specifically $N$-acetylneuraminic acid (Neu5Ac) and $N$-glycolylneuraminic acid (Neu5Gc). While Neu5Ac is the desired human-like isoform, Neu5Gc is a non-human sialic acid that is potentially immunogenic. Google Health Sciences (GHS) monitors these species to ensure product safety, efficacy, and batch-to-batch consistency.

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The characterization strategies described herein are compliant with the following international standards:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (General Principles).
*   **USP <1084>:** Glycoprotein Glycan Analysis – General Considerations.
*   **FDA Guidance for Industry:** Scientific Considerations in Demonstrating Biosimilarity to a Reference Product (for benchmarking XR properties).

---

#### 3.0 METHODOLOGY: HPAEC-PAD QUANTITATION
Google Health Sciences employs High-Performance Anion-Exchange Chromatography with Pulsed Amperometric Detection (HPAEC-PAD) for the absolute quantitation of sialic acids following mild acid hydrolysis.

##### 3.1 Equipment and Materials
*   **System:** Thermo Scientific™ Dionex™ ICS-6000 HPIC System.
*   **Column:** Dionex CarboPac™ PA20 Analytical Column (3 x 150 mm) with PA20 Guard Column.
*   **Detector:** Pulsed Amperometric Detector (PAD) with Gold (Au) disposable electrode.
*   **Data System:** Chromeleon™ 7.2 CDS.
*   **Reagents:** 18.2 MΩ·cm deionized water; 50% (w/w) NaOH (carbonate-free); 1.0 M Sodium Acetate (HPLC grade).

##### 3.2 Protocol: Sample Preparation and Hydrolysis (SOP-GHS-CH-442)
Sialic acids are covalently linked to the glycan terminus via $\alpha2,3$ or $\alpha2,6$ linkages. To quantify total content, these must be released.

1.  **Dilution:** Dilute Glucogen-XR Drug Substance (DS) to a concentration of 2.0 mg/mL using 1x PBS.
2.  **Hydrolysis:** Aliquot 100 $\mu$L of sample into a 1.5 mL screw-cap microcentrifuge tube. Add 100 $\mu$L of 0.1 M Hydrochloric Acid (HCl).
3.  **Incubation:** Incubate the mixture at $80^\circ\text{C} \pm 2^\circ\text{C}$ for exactly 60 minutes.
    *   *Note:* Over-incubation leads to degradation of Neu5Ac into 2-deoxy-2,3-dehydro-N-acetylneuraminic acid.
4.  **Neutralization:** Cool samples on ice for 5 minutes. Add 50 $\mu$L of 0.2 M NaOH to neutralize.
5.  **Clean-up:** Centrifuge at 14,000 x g for 10 minutes. Transfer supernatant to a 0.22 $\mu$m centrifugal filter to remove protein precipitates.

##### 3.3 Chromatographic Conditions
*   **Mobile Phase A:** 100 mM NaOH.
*   **Mobile Phase B:** 100 mM NaOH / 1.0 M Sodium Acetate.
*   **Gradient Program:**
    *   0–5 min: 50 mM Sodium Acetate (Isocratic)
    *   5–15 min: 50–250 mM Sodium Acetate (Linear Gradient)
    *   15–20 min: 500 mM Sodium Acetate (Column Wash)
    *   20–30 min: 50 mM Sodium Acetate (Re-equilibration)
*   **Flow Rate:** 0.5 mL/min.
*   **Injection Volume:** 10 $\mu$L.

---

#### 4.0 CALCULATIONS AND STATISTICAL PARAMETERS
Total Sialic Acid (TSA) is expressed as moles of sialic acid per mole of protein.

**Formula 1: Concentration Calculation**
$$C_{sample} = \frac{A_{sample} - b}{m} \times DF$$
Where:
*   $C_{sample}$ = Concentration of Sialic Acid ($\mu$mol/mL)
*   $A_{sample}$ = Peak Area from HPAEC
*   $b$ = Y-intercept of standard curve
*   $m$ = Slope of standard curve
*   $DF$ = Dilution Factor

**Formula 2: Molar Ratio**
$$Ratio = \frac{\mu\text{mol Sialic Acid}}{\mu\text{mol Glucogen-XR Protein}}$$
*(Molecular Weight of Glucogen-XR monomer: 58.4 kDa)*

---

#### 5.0 BATCH ANALYSIS DATA (PROCESS VALIDATION BATCHES)
The following table summarizes the Sialic Acid Content for three (3) consecutive Process Performance Qualification (PPQ) batches of Glucogen-XR DS manufactured at the South San Francisco facility.

**Table 1: Quantitative Sialic Acid Results for Glucogen-XR**

| Batch Number | Mfg Date | Neu5Ac (mol/mol protein) | Neu5Gc (mol/mol protein) | Total Sialic Acid (TSA) | % Neu5Gc | Result (Pass/Fail) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 7.82 | < LOD | 7.82 | 0.0% | Pass |
| **GLUC-2025-002** | 24-JAN-2025 | 8.01 | 0.02 | 8.03 | 0.25% | Pass |
| **GLUC-2025-003** | 05-FEB-2025 | 7.94 | < LOD | 7.94 | 0.0% | Pass |
| **Mean** | -- | **7.92** | **N/A** | **7.93** | **0.08%** | -- |
| **% RSD** | -- | **1.21%** | -- | **1.33%** | -- | -- |

*LOD (Limit of Detection) = 0.01 mol/mol protein.*

---

#### 6.0 DETAILED COMPARATIVE CHARACTERIZATION (CLINICAL VS. COMMERCIAL)
To ensure the transition from Phase III clinical supply to commercial-scale manufacturing (3000 Innovation Drive) did not alter the glycosylation profile, a side-by-side comparability study was performed.

**Table 2: Comparison of Clinical and Commercial Scale Batches**

| Parameter | Clinical (GLUC-2024-CLIN) | Commercial (GLUC-2025-001) | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Total Neu5Ac** | 7.75 mol/mol | 7.82 mol/mol | 7.0 - 9.0 mol/mol |
| **Total Neu5Gc** | 0.03 mol/mol | < LOD | ≤ 0.05 mol/mol |
| **$\alpha$2,3-linkage %** | 92.4% | 93.1% | Report Results |
| **$\alpha$2,6-linkage %** | 7.6% | 6.9% | Report Results |

---

#### 7.0 IMPACT OF SIALYLATION ON BIOLOGICAL ACTIVITY
Sialic acid content is directly correlated with the *in vivo* potency of Glucogen-XR. Desialylation studies (using Neuraminidase from *Arthrobacter ureafaciens*) were conducted to evaluate the sensitivity of the molecule.

**Table 3: Effect of Enzymatic Desialylation on PK Parameters (Rat Model, n=6)**

| Sample State | TSA (mol/mol) | Half-life ($T_{1/2}$) | $C_{max}$ (ng/mL) | AUC (0-inf) |
| :--- | :--- | :--- | :--- | :--- |
| **Native DS** | 7.92 | 142 hours | 450 | 85,000 |
| **Partial Desial.** | 4.10 | 68 hours | 310 | 42,000 |
| **Fully Desial.** | 0.15 | 4 hours | 85 | 3,200 |

*Statistical significance ($p < 0.001$) was observed between Native and Fully Desialylated samples, confirming that sialic acid is a critical component of the "Extended Release" mechanism.*

---

#### 8.0 ANALYTICAL METHOD VALIDATION SUMMARY (VAL-GHS-CH-2025-01)
The HPAEC-PAD method was validated according to ICH Q2(R1) guidelines.

1.  **Specificity:** No interference was observed from formulation excipients (mannitol, histidine, polysorbate 20).
2.  **Linearity:** $R^2 > 0.999$ for Neu5Ac over the range of 0.5 to 50 $\mu$g/mL.
3.  **Accuracy (Recovery):** Mean recovery of spiked Neu5Ac into Glucogen-XR matrix was 98.4% (range 96.2% – 101.5%).
4.  **Precision (Intermediate):** % RSD of 1.8% across 6 preparations performed by two different analysts on three different days.
5.  **Robustness:** Variations in hydrolysis temperature ($\pm 2^\circ\text{C}$) and time ($\pm 5$ min) were tested; the method remained within $\pm 5\%$ of target values.

---

#### 9.0 CONCLUSION
The sialic acid content of Glucogen-XR is consistently maintained at approximately 7.8 - 8.1 mol/mol protein across the validated manufacturing process. The GHS-CHO-001 cell line produces predominantly Neu5Ac, with negligible levels of the potentially immunogenic Neu5Gc. This high level of terminal sialylation ensures the sustained therapeutic window required for Type 2 Diabetes management. Control of this attribute is maintained through the DS specification and release testing using the validated HPAEC-PAD procedure described.

---
**Footnotes:**
1. *Google Health Sciences Internal Report GHS-DS-2025-088: Glycan Structure/Function Relationship.*
2. *Varki A. (2017) Biological roles of glycans. Glycobiology 27(1): 3-49.*
3. *ICH Q6B, Section 2.1.4: Carbohydrate Content and Structure.*

---

## Glycan Structure Elucidation

### **3.2.S.3.1.4 Glycan Structure Elucidation: Detailed Analytical Characterization**

#### **1. Introduction and Scope of Glycan Analysis**
Glucogen-XR (glucapeptide extended-release) is a recombinant GLP-1 receptor agonist fusion protein produced in a proprietary CHO-K1 GS knockout derivative (GHS-CHO-001). Given that the therapeutic efficacy, pharmacokinetic (PK) profile, and immunogenicity of glucapeptide-based therapeutics are heavily influenced by the glycosylation pattern—specifically the site-occupancy and branching of N-linked glycans—Google Health Sciences has performed an exhaustive glycan structure elucidation.

This section details the primary structure, linkage analysis, and distribution of glycoforms for Glucogen-XR. The analysis follows **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **FDA Guidance for Industry: Quality Considerations in Demonstrating Biosimilarity of a Therapeutic Protein Product**, specifically regarding post-translational modification (PTM) fingerprinting.

---

#### **2. Analytical Strategy for Glycan Mapping**
To provide a holistic view of the carbohydrate landscape, a multi-orthogonal approach was utilized. This ensures that isobaric structures are differentiated and low-abundance species (e.g., terminal α-Gal or N-glycolylneuraminic acid [Neu5Gc]) are detected.

| Technique | Purpose | Equipment ID |
| :--- | :--- | :--- |
| **HILIC-UPLC-FLR-MS** | Quantitative profiling of 2-AB labeled N-glycans | Waters ACQUITY H-Class / Xevo G2-XS QToF |
| **MALDI-TOF MS** | High-throughput mass mapping of permethylated glycans | Bruker Daltonics autoflex speed |
| **High pH Anion Exchange (HPAEC-PAD)** | Monosaccharide composition and sialic acid ratios | Thermo Scientific Dionex ICS-6000 |
| **LC-MS/MS (Peptide Mapping)** | Site-specific glycan occupancy (N-X-S/T motifs) | Orbitrap Exploris 480 |
| **Exoglycosidase Array Sequencing** | Linkage and sequence determination (α2-3 vs α2-6) | Sequential digestion (ProZyme/Agilent) |

---

#### **3. Detailed Protocol: N-Glycan Release and Labeling (SOP-GHS-7724)**

**Step 1: Enzymatic Release**
1. Dilute 100 µg of Glucogen-XR (Batch: GLUC-2025-001 through GLUC-2025-015) in 50 mM ammonium bicarbonate buffer (pH 7.8).
2. Denature the protein using 0.1% RapiGest SF at 60°C for 15 minutes to expose sequestered N-linked sites.
3. Add 5.0 U of PNGase F (Glycerol-free, Recombinant). Incubate at 37°C for 18 hours.
4. Precipitate the deglycosylated protein with cold ethanol (80% v/v) at -20°C for 2 hours. Centrifuge at 14,000 x g.

**Step 2: 2-Aminobenzamide (2-AB) Labeling**
1. Dry the glycan-containing supernatant in a vacuum centrifugal evaporator (CentriVap).
2. Prepare labeling reagent: 0.35 M 2-AB and 1.0 M Sodium Cyanoborohydride in Dimethyl Sulfoxide (DMSO):Glacial Acetic Acid (70:30 v/v).
3. Add 10 µL of reagent to the dried glycans. Incubate at 65°C for 2.5 hours.
4. Clean up excess 2-AB using GlycoClean S cartridges (Waters) to remove salts and unreacted dye.

---

#### **4. Results: N-Glycan Distribution and Species Identification**

The following table summarizes the glycoform distribution across three clinical manufacturing batches. Data is expressed as a percentage of the total relative area from HILIC-UPLC chromatograms.

##### **Table 1: Glycan Species Profile for Glucogen-XR (Batches GLUC-2025-001, -002, -003)**

| Glycan ID | Structure (Oxford Notation) | Monoisotopic Mass (Da) | GLUC-2025-001 (%) | GLUC-2025-002 (%) | GLUC-2025-003 (%) | Significance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **G0F** | $GlcNAc_2Man_3Fuc_1GlcNAc_2$ | 1445.47 | 32.45 | 31.88 | 32.10 | Core Fucosylation |
| **G1F** | $Gal_1GlcNAc_2Man_3Fuc_1GlcNAc_2$ | 1607.54 | 28.12 | 28.90 | 28.45 | Branching |
| **G2F** | $Gal_2GlcNAc_2Man_3Fuc_1GlcNAc_2$ | 1769.60 | 12.34 | 12.05 | 12.55 | Full Galactosylation |
| **G0** | $GlcNAc_2Man_3GlcNAc_2$ | 1299.39 | 2.15 | 2.04 | 2.20 | Afucosylated |
| **Man5** | $Man_5GlcNAc_2$ | 1216.42 | 4.88 | 5.12 | 4.95 | High Mannose |
| **A1F** | $Neu5Ac_1Gal_2GlcNAc_2Man_3Fuc_1GlcNAc_2$ | 2060.71 | 8.90 | 9.22 | 8.85 | Sialylated |
| **A2F** | $Neu5Ac_2Gal_2GlcNAc_2Man_3Fuc_1GlcNAc_2$ | 2351.81 | 3.50 | 3.33 | 3.42 | Disialylated |
| **Other** | Minor Hybrid/Sialylated | - | 7.66 | 7.46 | 7.48 | - |

**Statistical Summary:**
*   **Total Fucosylation:** 85.3% ± 0.6%
*   **Total Sialylation:** 12.4% ± 0.3%
*   **High Mannose (Man5-Man9):** 5.0% ± 0.2%
*   **Galactosylation (G-index):** 0.54 (calculated via formula: $G = \frac{G1 + 2 \times G2}{2 \times (G0 + G1 + G2)}$)

---

#### **5. Monosaccharide Composition Analysis (USP <129>)**

To confirm the molar ratios of the carbohydrate building blocks, HPAEC-PAD was performed following acid hydrolysis ($2.0 \text{ M TFA at } 100^\circ\text{C for 4 hours}$).

##### **Table 2: Monosaccharide Molar Ratios (Relative to 3.0 Mannose)**

| Monosaccharide | Expected Ratio (Theoretical) | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Fucose** | 0.8 - 1.0 | 0.88 | 0.86 | 98.2 |
| **Glucosamine** | 4.0 - 5.0 | 4.42 | 4.39 | 102.5 |
| **Galactose** | 1.0 - 2.5 | 1.85 | 1.91 | 97.4 |
| **Mannose** | 3.0 (Fixed) | 3.00 | 3.00 | N/A |
| **Sialic Acid (NANA)**| 0.2 - 0.8 | 0.42 | 0.45 | 95.1 |

**Note on Neu5Gc:** N-Glycolylneuraminic acid (Neu5Gc) levels were monitored for immunogenicity concerns. Neu5Gc was detected at $<0.05 \text{ mol/mol}$ of protein, which is well below the safety threshold for CHO-derived biologics.

---

#### **6. Site-Specific Occupancy via LC-MS/MS**

Glucogen-XR contains two potential N-glycosylation sites at **Asn-54** and **Asn-82**. To determine the macro-heterogeneity (occupancy), the protein was digested with Trypsin/Glu-C and analyzed via High-Resolution Accurate Mass (HRAM) spectrometry.

##### **Calculation of Occupancy Percentage:**
$$\text{Occupancy (\%)} = \frac{\sum \text{Ion Intensity of Glycopeptide}}{\sum \text{Ion Intensity of Glycopeptide} + \sum \text{Ion Intensity of Deglycosylated Peptide}} \times 100$$

##### **Table 3: Site-Specific Occupancy Results**

| Site | Peptide Sequence | Predicted Mass (Unmodified) | Occupancy (%) GLUC-2025-001 | Dominant Glycan |
| :--- | :--- | :--- | :--- | :--- |
| **Asn-54** | $L-V-A-N^{54}-V-T-L-V-K$ | 985.58 Da | 98.4% | G0F |
| **Asn-82** | $S-G-N^{82}-E-T-Y-R$ | 854.38 Da | 92.1% | G1F / A1F |

The lower occupancy at Asn-82 is attributed to the local steric hindrance caused by the proximity of the tyrosine residue (Tyr-84) in the C-terminal fusion domain.

---

#### **7. Exoglycosidase Linkage Analysis**

To differentiate between α2-3 and α2-6 linked sialic acids, which impact the circulatory half-life via the asialoglycoprotein receptor (ASGPR), specific neuraminidases were employed.

1.  **Sialidase S (ABS):** Cleaves α2-3 linked Neu5Ac.
2.  **Sialidase A (AUM):** Cleaves α2-3, α2-6, and α2-8 linked Neu5Ac.

**Results for GLUC-2025-001:**
*   Treatment with **Sialidase S** resulted in an 88% reduction in sialylated peaks (A1F, A2F), indicating that the vast majority of sialic acid linkages in the GHS-CHO-001 cell line are **α2-3**.
*   This is consistent with the CHO-K1 genotype, which lacks a functional ST6Gal-I sialyltransferase. This profile is beneficial for Glucogen-XR as it mimics the endogenous GLP-1 clearance pathways while avoiding α2-6 immunogenic motifs found in other expression systems.

---

#### **8. Conclusion of Structural Elucidation**
The glycan characterization of Glucogen-XR demonstrates a highly consistent profile across clinical batches (GLUC-2025-001 to -003). The structures are predominantly complex, bi-antennary, core-fucosylated N-glycans with varying degrees of galactosylation and α2-3 sialylation. The absence of non-human glycans (α-Gal) and negligible Neu5Gc levels mitigate the risk of neutralizing antibody formation. These data support the analytical bridge between the Phase II and Phase III manufacturing processes at the South San Francisco facility.

---
**References:**
1. ICH Guideline Q6B, "Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products."
2. Varki A, et al. "Essentials of Glycobiology," 3rd Edition.
3. Google Health Sciences Internal SOP-GHS-7724: Characterization of Glycopeptides by MS.

---

# Product-Related Variants

## Aggregates and Fragments

# MODULE 3: QUALITY (3.2.S.3.1)
## SECTION: CHARACTERIZATION OF DRUG SUBSTANCE
### SUBSECTION: PRODUCT-RELATED VARIANTS
#### PART 3.2.S.3.1.2: AGGREGATES AND FRAGMENTS (GLUCOGEN-XR)

---

### 1.0 INTRODUCTION AND SCOPE
This subsection provides an exhaustive characterization of product-related variants for Glucogen-XR (glucapeptide extended-release), specifically addressing high molecular weight (HMW) species—commonly referred to as aggregates—and low molecular weight (LMW) species—commonly referred to as fragments. 

As a GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001 cell line** (a CHO-K1 GS knockout derivative), Glucogen-XR is a complex glycopeptide-fusion protein. Due to its extended-release profile and structural complexity, the monitoring of physical and chemical stability regarding size-based heterogeneity is paramount. This document details the analytical methodologies, validation parameters, historical batch data, and degradation pathways identified during the development of Glucogen-XR at **Google Health Sciences (GHS), 3000 Innovation Drive, South San Francisco, CA**.

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
All characterization studies documented herein have been conducted in accordance with the following international regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (where applicable to peptide fusions).
*   **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **FDA Guidance for Industry:** Quality Considerations in Demonstrating Biosimilarity (for structural context).

---

### 3.0 ANALYTICAL STRATEGY FOR SIZE HETEROGENEITY
GHS employs an orthogonal approach to detect, quantify, and characterize aggregates and fragments. No single method is sufficient to capture the full spectrum of size-based variants.

#### 3.1 Overview of Orthogonal Methodologies
| Method ID | Technique | Primary Target | Sensitivity / LOD |
| :--- | :--- | :--- | :--- |
| **GHS-MET-0045** | SE-UPLC (UV/RI) | Soluble Dimers, Trimers, HMW | 0.01% |
| **GHS-MET-0092** | CE-SDS (Reducing) | Covalent Fragments, Non-covalent Agg | 0.05% |
| **GHS-MET-0093** | CE-SDS (Non-Reducing) | Disulfide-linked Aggregates/Fragments | 0.05% |
| **GHS-MET-0112** | AUC-SV | True Monomer/Aggregate Distribution | 0.1% |
| **GHS-MET-0155** | AF4-MALS | Large Soluble Aggregates (>10 MDa) | 0.01% |
| **GHS-MET-0201** | Micro-Flow Imaging (MFI) | Subvisible Particulates (2µm - 100µm) | 10 particles/mL |

---

### 4.0 HIGH MOLECULAR WEIGHT (HMW) SPECIES / AGGREGATES

#### 4.1 SE-UPLC Characterization (Size Exclusion Ultra-Performance Liquid Chromatography)
The primary release and stability method for HMW species is SE-UPLC. This method utilizes a stationary phase with controlled pore size to separate the Glucogen-XR monomer from higher molecular weight species.

**Methodology Details (GHS-MET-0045):**
*   **Column:** ACQUITY UPLC Protein BEH SEC Column, 200Å, 1.7 µm, 4.6 mm X 300 mm.
*   **Mobile Phase:** 200 mM Potassium Phosphate, 250 mM Potassium Chloride, pH 6.2.
*   **Flow Rate:** 0.3 mL/min (Isocratic).
*   **Detection:** UV at 214 nm and 280 nm.
*   **Column Temperature:** 25°C ± 2°C.

**Table 4.1.1: Historical Batch Analysis for HMW Species (Release Data)**
| Batch Number | Manufacturing Date | Site | HMW (%) | Monomer (%) | LMW (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | SSF-Bldg 1 | 0.42 | 99.48 | 0.10 |
| GLUC-2025-002 | 28-JAN-2025 | SSF-Bldg 1 | 0.38 | 99.55 | 0.07 |
| GLUC-2025-003 | 14-FEB-2025 | SSF-Bldg 1 | 0.45 | 99.44 | 0.11 |
| GLUC-2025-004 | 02-MAR-2025 | SSF-Bldg 2 | 0.51 | 99.40 | 0.09 |
| GLUC-2025-005 | 15-MAR-2025 | SSF-Bldg 2 | 0.39 | 99.53 | 0.08 |
| **Mean (n=5)** | -- | -- | **0.43** | **99.48** | **0.09** |

#### 4.2 Analytical Ultracentrifugation - Sedimentation Velocity (AUC-SV)
AUC-SV is used as a "gold standard" to validate the SE-UPLC results, as it does not involve a stationary phase, thereby eliminating potential artifactual dissociation or filtration of aggregates.

**Protocol GHS-PROT-AUC:**
1.  **Sample Prep:** Dilute DS to 0.5 mg/mL in formulation buffer.
2.  **Rotor:** ProteomeLab XL-I with 8-hole An-50 Ti rotor.
3.  **Speed:** 42,000 RPM at 20°C.
4.  **Data Analysis:** SEDFIT software using continuous c(s) distribution.

**Table 4.2.1: Comparison of SE-UPLC vs. AUC-SV (Batch GLUC-2025-001)**
| Species | SE-UPLC Result (%) | AUC-SV Result (%) | Difference (%) |
| :--- | :--- | :--- | :--- |
| Monomer | 99.48 | 99.21 | 0.27 |
| Dimer | 0.35 | 0.48 | 0.13 |
| Higher Aggregates | 0.07 | 0.31 | 0.24 |

#### 4.3 Aggregation Pathway Analysis
Studies conducted under thermal stress (40°C for 30 days) indicate that Glucogen-XR aggregates primarily through non-covalent hydrophobic interactions in the GLP-1 domain. However, a minor population of disulfide-linked dimers has been identified via LC-MS/MS peptide mapping of HMW fractions collected from SE-UPLC.

---

### 5.0 LOW MOLECULAR WEIGHT (LMW) SPECIES / FRAGMENTS

Fragments in Glucogen-XR are primarily generated through proteolytic cleavage during the upstream fermentation process or via chemical hydrolysis during long-term storage.

#### 5.1 CE-SDS (Capillary Electrophoresis - Sodium Dodecyl Sulfate)
CE-SDS provides superior resolution for fragments compared to traditional SDS-PAGE. Both reducing (R) and non-reducing (NR) conditions are utilized.

**Methodology Details (GHS-MET-0092/93):**
*   **Capillary:** 50 µm ID bare fused silica, 30 cm effective length.
*   **Gel Matrix:** SDS-Gel Buffer (pH 8.0).
*   **Voltage:** -15 kV (Reverse Polarity).
*   **Sample Prep (R):** Heat at 70°C for 10 min with 100 mM DTT.

**Table 5.1.1: CE-SDS Fragment Profile (Batch GLUC-2025-003)**
| Peak ID | Approx MW (kDa) | Identification | % Area (NR) | % Area (R) |
| :--- | :--- | :--- | :--- | :--- |
| Pre-peak 1 | 12.5 | N-terminal Truncation | 0.04 | 0.05 |
| Pre-peak 2 | 34.2 | Asp-Pro Hydrolysis Prod | 0.06 | 0.08 |
| **Main Peak** | **~62.0** | **Intact Glucogen-XR** | **99.62** | **99.71** |
| Post-peak 1 | 128.0 | Covalent Dimer | 0.28 | N/D |

#### 5.2 Identification of Fragment Sites
Using Orbitrap Lumos Mass Spectrometry, GHS identified a specific "hotspot" for fragmentation at the **His7-Gly8** bond and the **Asp15-Gly16** site of the GLP-1 sequence.

**Cleavage Site Statistical Analysis:**
*   **Site 1 (H7-G8):** Frequency 0.02% (Standard manufacturing conditions).
*   **Site 2 (D15-G16):** Frequency 0.01% (Standard manufacturing conditions).

---

### 6.0 SUBVISIBLE PARTICULATE MATTER
In accordance with USP <787>, particulates in the 2–100 µm range are monitored as they represent the continuum between soluble HMW species and visible precipitates.

**Table 6.1.1: MFI Data for Clinical Batches**
| Batch | ≥ 2 µm (counts/mL) | ≥ 10 µm (counts/mL) | ≥ 25 µm (counts/mL) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 450 | 12 | 1 |
| GLUC-2025-003 | 512 | 18 | 2 |
| GLUC-2025-005 | 388 | 9 | 0 |
| **Acceptance Criteria** | **Report** | **≤ 6000** | **≤ 600** |

---

### 7.0 IMPACT OF MANUFACTURING PARAMETERS ON AGGREGATION
Google Health Sciences utilizes an AI-driven "Digital Twin" of the bioreactor (GHS-Cloud-Sim-v4.2) to predict aggregation rates based on metabolic flux.

#### 7.1 Effect of Shear Stress in Downstream Processing
During the Protein A chromatography step (Step 3), the elution pH (pH 3.2) is a critical quality attribute (CQA). Prolonged exposure (>120 mins) to low pH increases HMW from 0.4% to 1.8%.

**Table 7.1.1: Low pH Hold Study Results**
| Hold Time (min) | HMW by SE-UPLC (%) | Bioactivity (IU/mg) |
| :--- | :--- | :--- |
| 0 | 0.41 | 102 |
| 60 | 0.45 | 101 |
| 120 | 0.52 | 99 |
| 240 | 1.12 | 94 |
| 480 | 2.85 | 88 |

---

### 8.0 CALCULATION FORMULARY
For all SE-UPLC and CE-SDS analyses, the percentage of aggregates and fragments is calculated as follows:

$$ \% \text{Variant} = \left( \frac{\text{Area}_{\text{Peak}}}{\sum \text{Area}_{\text{All Peaks}}} \right) \times 100 $$

Where:
*   $\text{Area}_{\text{Peak}}$ = Integration of the specific HMW or LMW peak.
*   $\sum \text{Area}_{\text{All Peaks}}$ = Total area excluding the injection void and buffer-related artifacts.

---

### 9.0 CONCLUSION
The comprehensive characterization of Aggregates and Fragments for Glucogen-XR demonstrates a highly pure product with HMW species consistently <0.6% and LMW species <0.2% across multiple manufacturing sites. The orthogonal methods (SE-UPLC, AUC, CE-SDS, MFI) provide high confidence in the size-based purity profile, ensuring the safety and efficacy of the Glucogen-XR drug substance for Type 2 Diabetes treatment.

---
**Author:** Google Health Sciences Regulatory Affairs  
**Date:** 22-MAY-2025  
**Document ID:** GHS-GLUC-M3-DS-012  
**Confidentiality:** HIGHLY CONFIDENTIAL - INTERNAL USE ONLY

---

## Oxidation and Deamidation

# MODULE 3: QUALITY (3.2.S.3. CHARACTERIZATION)
## SECTION: 3.2.S.3.2 PRODUCT-RELATED SUBSTANCES AND IMPURITIES
### SUBSECTION: 3.2.S.3.2.2 OXIDATION AND DEAMIDATION OF GLUCOGEN-XR (GLUCAPEPTIDE)

---

#### 3.2.S.3.2.2.1 Introduction and Scope
The characterization of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line, requires rigorous quantification of post-translational modifications (PTMs). Specifically, oxidation and deamidation represent the primary chemical degradation pathways that impact the potency, receptor affinity, and immunogenic profile of the therapeutic peptide.

In accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **ICH Q3A(R2)** (*Impurities in New Drug Substances*), Google Health Sciences has implemented high-resolution mass spectrometry (HRMS) and ultra-high-performance liquid chromatography (UHPLC) protocols to monitor these variants. This section details the structural identification, quantification methodologies, and batch analysis results for oxidation and deamidation variants across the clinical development lifecycle.

---

#### 3.2.S.3.2.2.2 Oxidative Modifications
Oxidation of Glucogen-XR primarily occurs at the Methionine (Met) and Tryptophan (Trp) residues. Given the primary sequence of Glucogen-XR, the residues identified as high-risk for oxidation are **Met14** and **Trp31**.

##### 3.2.S.3.2.2.2.1 Mechanism of Met14 and Trp31 Oxidation
The oxidation of Met14 to Methionine Sulfoxide (MetO) and subsequently to Methionine Sulfone ($MetO_2$) is a nucleophilic reaction often catalyzed by residual trace metals (e.g., $Fe^{2+}$, $Cu^{2+}$) or exposure to atmospheric oxygen during the formulation process. Trp31 oxidation results in the formation of hydroxytryptophan, kynurenine, or N-formylkynurenine.

**Table 1: Theoretical Mass Shifts for Oxidative Variants**
| Modification | Residue | Mass Delta (Da) | Chemical Formula Change |
| :--- | :--- | :--- | :--- |
| Methionine Sulfoxide | Met14 | +15.9949 | +O |
| Methionine Sulfone | Met14 | +31.9898 | +$O_2$ |
| 5-Hydroxytryptophan | Trp31 | +15.9949 | +O |
| N-formylkynurenine | Trp31 | +31.9898 | +$O_2$ |

##### 3.2.S.3.2.2.2.2 Analytical Protocol for Oxidation Quantification (RP-HPLC-MS/MS)
Google Health Sciences utilizes a "Bottom-Up" peptide mapping approach for the site-specific quantification of oxidation.

**Protocol GHS-QC-OX-402:**
1.  **Denaturation:** 100 µg of Glucogen-XR Drug Substance (DS) is denatured in 6M Guanidine-HCl, 50 mM Tris-HCl (pH 8.0).
2.  **Reduction:** Addition of 10 mM Dithiothreitol (DTT); incubation at 37°C for 60 minutes.
3.  **Alkylation:** Addition of 25 mM Iodoacetamide (IAM); incubation in the dark at room temperature for 30 minutes.
4.  **Digestion:** Trypsin (Sequencing Grade) is added at a 1:20 (w/w) enzyme-to-protein ratio. Digestion proceeds at 37°C for 16 hours.
5.  **Quenching:** 1% Trifluoroacetic acid (TFA) is added to lower the pH to <3.0.
6.  **LC-MS/MS Analysis:**
    *   **Column:** Waters ACQUITY UPLC BEH C18, 1.7 µm, 2.1 x 150 mm.
    *   **Mobile Phase A:** 0.1% Formic Acid in $H_2O$.
    *   **Mobile Phase B:** 0.1% Formic Acid in Acetonitrile.
    *   **Mass Spectrometer:** Thermo Scientific Orbitrap Exploris 480 (Resolution: 60,000 at m/z 200).

##### 3.2.S.3.2.2.2.3 Batch Analysis Data: Oxidation (GLUC-2025 Series)
The following table summarizes the levels of Met14 and Trp31 oxidation observed in pivotal clinical and stability batches.

**Table 2: Summary of Oxidation Levels in Glucogen-XR Drug Substance**
| Batch Number | Manufacturing Date | Site | Met14 Oxidation (%) | Trp31 Oxidation (%) | Total Oxidation (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | South SF | 0.42 | 0.11 | 0.53 |
| GLUC-2025-002 | 18-JAN-2025 | South SF | 0.38 | 0.09 | 0.47 |
| GLUC-2025-003 | 02-FEB-2025 | South SF | 0.51 | 0.15 | 0.66 |
| GLUC-2025-004* | 15-FEB-2025 | South SF | 0.88 | 0.22 | 1.10 |
| GLUC-2025-005 | 01-MAR-2025 | South SF | 0.45 | 0.12 | 0.57 |
| **Acceptance Criteria** | **N/A** | **N/A** | **≤ 1.5%** | **≤ 0.5%** | **≤ 2.0%** |
*\*Batch GLUC-2025-004 was subjected to intentional light stress (ICH Q1B) to validate method sensitivity.*

---

#### 3.2.S.3.2.2.3 Deamidation Modifications
Deamidation is a critical degradation pathway for Glucogen-XR, typically occurring at Asparagine (Asn) and Glutamine (Gln) residues. The reaction involves the conversion of the amide side chain into a carboxylate group, introducing a negative charge and shifting the pI of the molecule.

##### 3.2.S.3.2.2.3.1 Primary Deamidation Sites
Structural modeling and forced degradation studies have identified **Asn28** and **Gln34** as the most labile sites. Deamidation at Asn28 proceeds through a succinimide intermediate, leading to a mixture of L-Aspartic Acid and L-isoAspartic Acid.

**Calculation for Charge Variant Shift:**
The transition from Asn (neutral) to Asp/isoAsp (negative) results in a -1 net charge change per deamidation event. This is monitored via Cation Exchange Chromatography (CEX-HPLC).

$$pI \approx \text{Theoretical } pI - (0.15 \times \text{number of deamidated sites})$$

##### 3.2.S.3.2.2.3.2 Analytical Protocol for Deamidation (CEX-HPLC)
To quantify deamidation variants as "Acidic Species," a high-resolution CEX method is employed.

**Protocol GHS-QC-DA-709:**
*   **Column:** Thermo ProPac™ WCX-10, 4 x 250 mm.
*   **Buffer A:** 20 mM MES, pH 6.2.
*   **Buffer B:** 20 mM MES, 500 mM NaCl, pH 6.2.
*   **Gradient:** 0% B to 25% B over 45 minutes.
*   **Flow Rate:** 1.0 mL/min.
*   **Detection:** UV at 214 nm and 280 nm.

**Table 3: Deamidation and Acidic Variant Distribution (GLUC-2025 Series)**
| Batch Number | Main Peak (%) | Acidic Variant 1 (Asn28) | Acidic Variant 2 (Gln34) | Total Acidic Species (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 96.8 | 1.2 | 0.4 | 3.2 |
| GLUC-2025-002 | 97.1 | 1.1 | 0.3 | 2.9 |
| GLUC-2025-003 | 96.5 | 1.4 | 0.5 | 3.5 |
| GLUC-2025-005 | 96.9 | 1.2 | 0.4 | 3.1 |
| **Release Limit** | **≥ 95.0%** | **Report** | **Report** | **≤ 5.0%** |

---

#### 3.2.S.3.2.2.4 Forced Degradation and Characterization of Variants
To confirm that the analytical methods are stability-indicating, Glucogen-XR (Batch GLUC-2025-001) was subjected to accelerated degradation.

##### 3.2.S.3.2.2.4.1 Thermal Stress (Deamidation Enrichment)
Incubation at 40°C/75% RH for 30 days resulted in a significant increase in the Asn28 deamidation peak (from 1.2% to 8.4%). LC-MS/MS peptide mapping confirmed the +0.984 Da mass shift at the T3 fragment (residues 20-30).

##### 3.2.S.3.2.2.4.2 Oxidative Stress ($H_2O_2$ Treatment)
Exposure to 0.3% $H_2O_2$ for 4 hours at room temperature led to near-complete oxidation of Met14. The resulting Met14-sulfoxide variant showed a 15% reduction in *in vitro* GLP-1 receptor activation potency, establishing Met14 oxidation as a Critical Quality Attribute (CQA).

**Table 4: Statistical Analysis of Degradation Rates ($k$)**
| Condition | Variant | Rate Constant ($k$, $day^{-1}$) | $R^2$ |
| :--- | :--- | :--- | :--- |
| 5°C (Storage) | Total Acidic | $1.2 \times 10^{-4}$ | 0.992 |
| 25°C (Accelerated) | Total Acidic | $8.5 \times 10^{-4}$ | 0.998 |
| 40°C (Stress) | Total Acidic | $4.2 \times 10^{-3}$ | 0.995 |

---

#### 3.2.S.3.2.2.5 Impact on Biological Activity
The biological impact of oxidation and deamidation was assessed using the GLP-1 receptor-mediated cAMP accumulation assay (GHS-BIO-300).

1.  **Met14-Oxidation:** Purified Met14-Ox variants showed a potency of 84% relative to the Reference Standard (GLUC-RS-2024).
2.  **Asn28-Deamidation:** Purified Asn28-Asp variants showed a potency of 92% relative to the Reference Standard.

Given that these variants maintain >80% potency, the current specification limits (2.0% for total oxidation and 5.0% for total acidic species) provide a robust safety margin to ensure consistent clinical efficacy.

---

#### 3.2.S.3.2.2.6 Control Strategy
Based on the characterization data, the following control strategy is implemented:
*   **In-Process Controls (IPC):** Monitoring of dissolved oxygen (DO) during fermentation to minimize Met oxidation.
*   **Drug Substance Specification:** CEX-HPLC and RP-HPLC are performed for every batch release.
*   **Storage:** Glucogen-XR is stored at 2-8°C in Type I borosilicate glass vials with ETFE-coated stoppers to minimize leachables that could catalyze oxidation.

---

**References:**
1. ICH Q6B: Specifications for Biotechnological/Biological Products.
2. USP <129>: Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (for general LC-MS principles).
3. Google Health Sciences Internal Report: GHS-RPT-2024-088: *Impact of PTMs on Glucogen-XR Potency.*
4. *Bioconjugate Chemistry (2022), 33(4), 567-578:* Kinetics of Methionine Oxidation in Glucapeptides.

---

## Characterization of Major Variants

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.3.1: CHARACTERIZATION OF DRUG SUBSTANCE
### SUBSECTION: CHARACTERIZATION OF PRODUCT-RELATED VARIANTS

---

#### 3.2.S.3.1.1 Overview of Variant Profiling for Glucogen-XR (glucapeptide)

In accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **ICH Q11** (*Development and Manufacture of Drug Substances*), Google Health Sciences (GHS) has conducted a comprehensive characterization of product-related variants for Glucogen-XR (glucapeptide extended-release). 

Glucogen-XR is a recombinant GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001** (CHO-K1 GS knockout) cell line. Due to the complex nature of the biosynthetic process and the extended-release formulation architecture, the drug substance exhibits a micro-heterogeneous profile. This section details the identification, quantification, and biological relevance of major variants, categorized as **Charge Variants**, **Size Variants**, and **Hydrophobicity/Oxidation Variants**.

---

#### 3.2.S.3.1.2 Identification and Classification Strategy

The strategy for variant characterization utilizes an orthogonal analytical platform designed to provide high-resolution mapping of the glucapeptide molecular surface.

**Table 3.2.S.3.1-1: Analytical Matrix for Variant Characterization**

| Variant Category | Primary Analytical Method | Secondary/Confirmatory Method | Criticality Assessment |
| :--- | :--- | :--- | :--- |
| **Charge Variants** | iCE3 (Imaging Capillary Isoelectric Focusing) | CEX-HPLC with MS/MS | High (Impacts PK/PD) |
| **Size Variants** | SE-UPLC (Size Exclusion) | Multi-Angle Light Scattering (SEC-MALS) | High (Immunogenicity Risk) |
| **Oxidation States** | RP-HPLC (Reversed-Phase) | Peptide Mapping (LC-MS/MS) | Moderate (Potency Impact) |
| **Deamidation** | HILIC (Hydrophilic Interaction) | Ion-Exchange Chromatography | Moderate (Stability Indicator) |
| **Truncations** | SDS-PAGE (Reduced/Non-red) | N-Terminal Sequencing (Edman) | High (Biological Activity) |

---

#### 3.2.S.3.1.3 Detailed Analysis of Charge Variants

Glucogen-XR possesses a theoretical isoelectric point (pI) of 5.12. Charge heterogeneity arises primarily from deamidation of asparagine (Asn) residues, C-terminal lysine variability (if applicable to the construct), and sialylation of glycan moieties.

##### 3.2.S.3.1.3.1 Imaging Capillary Isoelectric Focusing (iCE3) Protocol

**Equipment ID:** GHS-ICE-09 / GHS-ICE-12
**Reagents:** Pharmalyte 3-10, Methylcellulose (0.35%), pI Markers 4.22 and 6.14.

**Step-by-Step Procedure:**
1. **Sample Preparation:** Dilute Glucogen-XR drug substance (Batch GLUC-2025-001 through GLUC-2025-015) to a final concentration of 1.0 mg/mL in a master mix containing 4% Pharmalyte, 0.35% MC, and 10 mM Arginine.
2. **Focusing Conditions:** 
   - Pre-focusing: 1500 V for 1.0 minute.
   - Focusing: 3000 V for 6.0 minutes.
3. **Detection:** UV absorbance at 280 nm.
4. **Integration:** Peak areas are integrated using Empower 3 software using a "Valley-to-Valley" baseline approach.

**Table 3.2.S.3.1-2: Charge Variant Profile for Clinical Manufacturing Batches**

| Batch Number | Acidic Variants (%) | Main Peak (%) | Basic Variants (%) | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12.4 | 84.1 | 3.5 | 99.2 |
| GLUC-2025-002 | 11.9 | 85.0 | 3.1 | 98.8 |
| GLUC-2025-003 | 13.1 | 83.5 | 3.4 | 99.5 |
| GLUC-2025-004 | 12.8 | 84.4 | 2.8 | 99.1 |
| GLUC-2025-005 | 12.2 | 84.9 | 2.9 | 99.7 |
| **Mean** | **12.48** | **84.38** | **3.14** | **--** |

*Note: Acidic variants are primarily composed of Asp-36 deamidated species. Basic variants include C-terminal glycine-extended precursors.*

---

#### 3.2.S.3.1.4 Characterization of Size Variants (Aggregates and Fragments)

Size variants are monitored to ensure the safety profile of Glucogen-XR, as high molecular weight species (HMWS) are known drivers of anti-drug antibody (ADA) formation.

##### 3.2.S.3.1.4.1 SE-UPLC Analysis

**Method Parameters:**
- **Column:** Waters ACQUITY UPLC Protein SEC (200Å, 1.7 µm, 4.6 mm x 150 mm)
- **Mobile Phase:** 200 mM Sodium Phosphate, 150 mM NaCl, pH 7.0
- **Flow Rate:** 0.3 mL/min
- **Injection Volume:** 5 µL (approx. 10 µg protein)

**Table 3.2.S.3.1-3: SEC Data Across Scale-Up Batches (3000L Bioreactor)**

| Batch ID | HMWS (%) | Monomer (%) | LMWS (%) | RMT (min) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-008 | 0.42 | 99.45 | 0.13 | 4.12 |
| GLUC-2025-009 | 0.38 | 99.51 | 0.11 | 4.13 |
| GLUC-2025-010 | 0.45 | 99.40 | 0.15 | 4.11 |
| GLUC-2025-011 | 0.41 | 99.48 | 0.11 | 4.12 |

**Statistical Analysis of Aggregate Formation:**
The variance in HMWS levels across five GMP batches was analyzed using a one-way ANOVA (Alpha = 0.05). The calculated P-value (0.124) indicates no statistically significant difference between early-stage and late-stage clinical manufacturing lots, confirming process consistency at the South San Francisco facility.

---

#### 3.2.S.3.1.5 Hydrophobicity Variants and Oxidation

Oxidation of Methionine (Met) or Tryptophan (Trp) residues can alter the binding affinity to the GLP-1 receptor. Glucogen-XR contains a critical Met residue at position 27 (Met-27).

##### 3.2.S.3.1.5.1 RP-HPLC with MS Detection for Oxidation Sites

**Protocol GHS-QC-402:**
1. **Digestion:** Samples are reduced with DTT and alkylated with Iodoacetamide, followed by Trypsin/Lys-C digestion for 16 hours at 37°C.
2. **Separation:** C18 Reverse-Phase Column (2.1 x 150 mm, 1.8 µm).
3. **Detection:** Thermo Q-Exactive Plus Orbitrap MS.

**Results of Oxidation Mapping:**
- **Met-27 Sulfoxide:** Detected at a level of 1.2% in GLUC-2025-001. Forced degradation (0.3% H2O2 for 2 hours) increased this variant to 14.5%, correlating with a 10% decrease in *in vitro* potency (EC50).
- **Trp-31 Oxidation:** Detected at trace levels (<0.1%) across all clinical lots.

---

#### 3.2.S.3.1.6 Detailed Characterization of Glycan Variants

Though Glucogen-XR is primarily a peptide backbone, the extended-release technology involves a glycosylated linker region.

**Table 3.2.S.3.1-4: N-Glycan Distribution (2-AB Labeling)**

| Glycan Species | Structure Type | Average (%) | Range (%) |
| :--- | :--- | :--- | :--- |
| G0F | Complex/Fucosylated | 45.2 | 42.1 - 48.3 |
| G1F | Complex/Fucosylated | 32.8 | 30.2 - 35.5 |
| G2F | Complex/Fucosylated | 8.4 | 7.1 - 9.9 |
| Man5 | High Mannose | 2.1 | 1.5 - 2.8 |
| Sialylated | Acidic | 1.4 | 0.8 - 2.0 |

---

#### 3.2.S.3.1.7 Biological Activity of Purified Variants

To determine the criticality of the identified variants, Google Health Sciences performed semi-preparative fractionation of batch GLUC-2025-012 to isolate Acidic, Basic, and HMWS components.

**Table 3.2.S.3.1-5: Potency of Isolated Variants (Cell-Based Bioassay)**

| Fraction | Identity | Relative Potency (%) | 95% CI |
| :--- | :--- | :--- | :--- |
| Reference Standard | Glucogen-XR RS-001 | 100.0 | N/A |
| Acidic Fraction | Deamidated (Asn-36) | 94.2 | 91.5 - 97.8 |
| Basic Fraction | C-term Glycine Precursor | 72.5 | 68.4 - 76.1 |
| HMWS | Dimer/Aggregates | 45.8 | 41.2 - 50.3 |

**Assessment:**
- The **Acidic Fraction** maintains >90% potency, suggesting that deamidation at the distal C-terminus is a non-critical modification.
- The **Basic Fraction** shows significantly reduced potency, leading to the implementation of a strict specification (<5.0%) for basic variants in the drug substance release criteria.
- **HMWS** exhibits low potency and represents a potential safety risk; levels are controlled to <1.0% by SEC-UPLC.

---

#### 3.2.S.3.1.8 Conclusion of Characterization Studies

The characterization of product-related variants for Glucogen-XR demonstrates a well-understood and controlled molecular profile. The GHS-CHO-001 cell line provides a consistent glycan and charge distribution. All major variants have been identified via high-resolution mass spectrometry and their biological impacts have been quantified. This data supports the proposed specifications for clinical and commercial release of Glucogen-XR.

---

**References:**
1. ICH Q6B: Specifications for Biotechnological/Biological Products.
2. USP <129> Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for GLP-1 peptides).
3. FDA Guidance for Industry: Quality Considerations in Demonstrating Biosimilarity (2015).
4. Google Health Sciences Internal Report: GHS-RPT-2024-112: *Structural Elucidation of Glucapeptide Dimers*.

---

# Process-Related Impurities

## Host Cell Proteins (HCP) Identification

# MODULE 3: QUALITY (3.2.S.3.2 CHARACTERIZATION - IMPURITIES)
## SECTION 3.2.S.3.2.2: PROCESS-RELATED IMPURITIES
### SUBSECTION 3.2.S.3.2.2.1: HOST CELL PROTEINS (HCP) IDENTIFICATION AND QUANTITATION

---

#### 3.2.S.3.2.2.1.1 Introduction and Scope
The characterization and identification of Host Cell Proteins (HCPs) in the Glucogen-XR (glucapeptide extended-release) drug substance represent a critical component of the Google Health Sciences (GHS) control strategy. HCPs are endogenous proteins derived from the *Cricetulus griseus* (Chinese Hamster Ovary, CHO) cell line (Proprietary GHS-CHO-001) used for the recombinant expression of the GLP-1 receptor agonist.

Given the potential for HCPs to impact product safety (immunogenicity), efficacy (enzymatic degradation of the peptide), and stability (proteolysis or aggregation), GHS has implemented a multi-dimensional orthogonal approach for HCP identification. This section details the qualitative and quantitative assessment of HCPs using advanced Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS) and high-sensitivity Enzyme-Linked Immunosorbent Assay (ELISA).

#### 3.2.S.3.2.2.1.2 Regulatory Compliance and Standards
The identification and quantification of HCPs for Glucogen-XR are conducted in accordance with the following regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1132>:** Residual Host Cell Protein Measurement in Biopharmaceuticals.
*   **FDA Guidance for Industry:** Immunogenicity Assessment for Therapeutic Protein Products.
*   **Ph. Eur. 2.6.34:** Host-cell protein assays.

#### 3.2.S.3.2.2.1.3 Analytical Strategy: The Orthogonal Approach
Google Health Sciences employs a three-tiered strategy for HCP management:
1.  **Tier 1: Comprehensive HCP Discovery (Mass Spectrometry):** Used for process characterization and identification of "hitchhiker" proteins.
2.  **Tier 2: Multi-Antigen ELISA (Polyclonal):** Used for routine release testing and monitoring of total HCP burden.
3.  **Tier 3: Risk-Based Assessment of Problematic HCPs:** Identification of specific enzymes (e.g., Lipases, Proteases) that may impact product quality at sub-ppm levels.

---

### 3.2.S.3.2.2.1.4 LC-MS/MS Identification of Residual HCPs
To overcome the limitations of ELISA (which provides a single numerical value), LC-MS/MS was utilized to identify the specific molecular species present in the Glucogen-XR drug substance across three pivotal clinical batches.

#### 3.2.S.3.2.2.1.4.1 Sample Preparation Protocol (GHS-SOP-MS-099)
**Objective:** To enrich low-abundance HCPs while depleting the Glucogen-XR peptide (approx. 4.2 kDa) to increase the dynamic range of detection.

**Procedure:**
1.  **Denaturation:** 500 µg of Glucogen-XR Drug Substance (DS) is diluted in 6 M Guanidine-HCl, 50 mM Tris-HCl (pH 8.0).
2.  **Reduction:** Addition of 10 mM Dithiothreitol (DTT); incubation at 56°C for 45 minutes.
3.  **Alkylation:** Addition of 30 mM Iodoacetamide (IAM); incubation in the dark at room temperature for 30 minutes.
4.  **Buffer Exchange:** Samples are desalted using 3 kDa MWCO centrifugal filters into 50 mM Ammonium Bicarbonate.
5.  **Tryptic Digestion:** Sequencing-grade modified trypsin (Promega) added at a 1:20 (w/w) ratio. Digestion proceeds for 16 hours at 37°C.
6.  **Peptide Depletion (Optional):** For Glucogen-XR, the high concentration of the active peptide (GLP-1 analog) can mask HCP signals. A proprietary GHS-C18-Strong Cation Exchange (SCX) fractionation is used to remove the majority of the drug substance peptides.

#### 3.2.S.3.2.2.1.4.2 LC-MS/MS Instrumental Parameters
*   **System:** Thermo Scientific Orbitrap Exploris 480 coupled with an EASY-nLC 1200 system.
*   **Column:** Acclaim PepMap 100 C18 (75 µm x 25 cm, 2 µm particle size).
*   **Gradient:** 2% to 35% Mobile Phase B (0.1% Formic Acid in Acetonitrile) over 120 minutes.
*   **MS1 Resolution:** 120,000 at m/z 200.
*   **MS2 Resolution:** 30,000 (Data-Dependent Acquisition).
*   **Search Engine:** Proteome Discoverer 2.5 using the *Cricetulus griseus* RefSeq database.

#### 3.2.S.3.2.2.1.4.3 Identification Results (Pivotal Batches)
The following table summarizes the HCP species identified in the three pivotal registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003).

**Table 3.2.S.3.2.2.1-1: LC-MS/MS Identification of Host Cell Proteins in Glucogen-XR DS**

| Protein Name | Accession No. (NCBI) | MW (kDa) | pI | Function | Batch GLUC-2025-001 (ppm) | Batch GLUC-2025-002 (ppm) | Batch GLUC-2025-003 (ppm) | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Clusterin | XP_003505412 | 52.3 | 4.8 | Chaperone | 1.2 | 0.9 | 1.1 | Low |
| Glyceraldehyde-3-phosphate dehydrogenase | XP_003502124 | 36.1 | 8.5 | Glycolysis | 0.4 | 0.3 | 0.5 | Low |
| Lipoprotein Lipase (LPL) | XP_003510982 | 53.2 | 8.1 | Lipase | < LOD | < LOD | 0.05 | Moderate* |
| Annexin A2 | XP_003501102 | 38.6 | 7.6 | Membrane Binding | 0.8 | 0.7 | 0.9 | Low |
| Peroxiredoxin-1 | XP_003504312 | 22.1 | 8.2 | Antioxidant | 1.5 | 1.3 | 1.4 | Low |
| **Total Identified MS-HCP** | -- | -- | -- | -- | **3.9 ppm** | **3.2 ppm** | **3.95 ppm** | -- |

*\*Lipoprotein Lipase is monitored closely as it may impact the polysorbate 80 (PS80) stabilizer in the final drug product formulation.*

---

### 3.2.S.3.2.2.1.5 Quantitative HCP Analysis (ELISA)
While MS provides identification, the validated GHS-HCP-v4 ELISA is the primary tool for quantitation against a process-specific HCP standard.

#### 3.2.S.3.2.2.1.5.1 Generation of Process-Specific HCP Standard
Google Health Sciences developed a process-specific HCP reagent by using a "Mock Run" of the GHS-CHO-001 cell line.
1.  **Cell Line:** GHS-CHO-001 (null cell line, non-producing).
2.  **Culture:** 500L Bioreactor mimicking the Glucogen-XR production parameters (Media, pH, Temperature, Feed strategy).
3.  **Purification:** The supernatant was processed through the primary capture step (Protein A equivalent for GLP-1 fusions or Multi-modal Chromatography) to ensure the HCP profile reflects the downstream process.
4.  **Immunogen:** The resulting HCP pool was used to immunize New Zealand White rabbits for polyclonal antibody (pAb) production.

#### 3.2.S.3.2.2.1.5.2 ELISA Validation Summary
The GHS-HCP-v4 ELISA was validated per ICH Q2(R1) guidelines.
*   **Limit of Quantitation (LOQ):** 1.5 ng/mg (ppm).
*   **Limit of Detection (LOD):** 0.5 ng/mg (ppm).
*   **Accuracy (Recovery):** 85% - 115% across the range of 2 ng/mg to 100 ng/mg.
*   **Precision (Intermediate):** < 12.5% RSD.

#### 3.2.S.3.2.2.1.5.3 Batch Release Data
The following table provides the quantitative HCP results for all GMP batches produced at the 3000 Innovation Drive facility.

**Table 3.2.S.3.2.2.1-2: Quantitative HCP Results via Validated ELISA**

| Batch Number | Date of Manufacture | Scale (L) | HCP Concentration (ng/mg) | Status |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 2000 | 4.2 | Pass |
| GLUC-2025-002 | 28-JAN-2025 | 2000 | 3.8 | Pass |
| GLUC-2025-003 | 14-FEB-2025 | 2000 | 4.5 | Pass |
| GLUC-2025-004 | 02-MAR-2025 | 2000 | 4.1 | Pass |
| GLUC-2025-005 | 18-MAR-2025 | 2000 | 3.9 | Pass |
| **Acceptance Criterion** | -- | -- | **≤ 20 ng/mg** | -- |

---

### 3.2.S.3.2.2.1.6 2D-PAGE and Western Blot Analysis (Coverage Assessment)
To ensure the ELISA antibody covers a sufficient percentage of the HCPs present in the process, 2D-Differential In-Gel Electrophoresis (DIGE) and Western Blotting were performed.

#### 3.2.S.3.2.2.1.6.1 Procedure
1.  **First Dimension:** Isoelectric focusing (IEF) on a pH 3–10 non-linear gradient strip.
2.  **Second Dimension:** SDS-PAGE on a 4–12% Bis-Tris gel.
3.  **Visualization:** One gel stained with Silver Stain (total protein); a second gel transferred to a PVDF membrane and probed with GHS-HCP-v4 pAb (HCP coverage).
4.  **Analysis:** Software-assisted spot matching using Delta2D (version 4.8).

#### 3.2.S.3.2.2.1.6.2 Coverage Results
*   **Total Spots Detected (Silver Stain):** 452 spots.
*   **Spots Recognized by Antibody (Western):** 398 spots.
*   **Calculated Coverage:** 88.1%.
*   **Regulatory Threshold:** > 80% is considered highly robust for process-specific assays.

---

### 3.2.S.3.2.2.1.7 Clearance of Specific High-Risk HCPs
Two specific HCPs—**Cathepsin L** (protease) and **Phospholipase B-Like 2 (PLBL2)**—were identified in early-stage development as potential risks.

#### 3.2.S.3.2.2.1.7.1 PLBL2 Monitoring
PLBL2 is known to bind to various biologics and can persist through purification.
*   **Quantitation Method:** Targeted LC-MRM (Multiple Reaction Monitoring).
*   **Batch GLUC-2025-001 Result:** < 0.1 ppm.
*   **Batch GLUC-2025-002 Result:** < 0.1 ppm.
*   **Conclusion:** The Step 3 Ion Exchange Chromatography (IEX) effectively removes PLBL2 below the level of clinical significance.

#### 3.2.S.3.2.2.1.7.2 Calculation of HCP Clearance (Log Reduction Value - LRV)
The efficiency of the purification process in removing HCPs is calculated as follows:

$$LRV = \log_{10} \left( \frac{\text{Total HCP in Feed}}{\text{Total HCP in Eluate}} \right)$$

**Table 3.2.S.3.2.2.1-3: HCP Clearance Across Purification Steps (Batch GLUC-2025-001)**

| Purification Step | Feed HCP (mg) | Eluate HCP (mg) | Step LRV | Cumulative LRV |
| :--- | :--- | :--- | :--- | :--- |
| Harvested Cell Culture Fluid | 1,450,000 | -- | -- | -- |
| Step 1: Protein A Capture | 1,450,000 | 12,200 | 2.07 | 2.07 |
| Step 2: HIC Chromatography | 12,200 | 450 | 1.43 | 3.50 |
| Step 3: AEX Chromatography | 450 | 8.2 | 1.74 | 5.24 |
| Step 4: Nanofiltration/UFDF | 8.2 | 0.42 | 1.29 | 6.53 |

**Summary:** The Glucogen-XR manufacturing process demonstrates a cumulative 6.53 log reduction of HCPs, ensuring the safety profile of the drug substance.

---

### 3.2.S.3.2.2.1.8 Discussion and Impact on Product Quality
The residual HCP levels in Glucogen-XR are consistently below 5 ppm across all GMP batches. This level is significantly lower than the industry-standard threshold of 100 ppm. Detailed MS analysis confirms the absence of problematic immunogenic proteins (e.g., Galactosyltransferase) and minimal levels of degrading enzymes.

**Conclusion:** The Host Cell Protein profile of Glucogen-XR is well-characterized, consistently controlled, and poses minimal risk to patient safety or product stability. The use of a process-specific ELISA, supplemented by LC-MS/MS, provides a comprehensive regulatory package for the identification and monitoring of these impurities.

---

## Residual DNA Characterization

### **3.2.S.3.2.3 Process-Related Impurities: Residual Host Cell DNA Characterization**

#### **1. Scope and Introduction**
This section provides an exhaustive characterization and risk assessment of residual deoxyribonucleic acid (rDNA) derived from the host cell line (CHO-K1 GS knockout derivative, GHS-CHO-001) used in the manufacture of Glucogen-XR (glucapeptide extended-release). 

Google Health Sciences (GHS) adheres to the stringent requirements set forth in the **FDA Guidance for Industry: Characterization and Qualification of Cell Substrates and Other Biological Materials Used in the Production of Viral Vaccines for Infectious Disease Indications (2010)** and **ICH Topic Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products**. Given that Glucogen-XR is a chronic-use peptide therapeutic, the management of residual DNA is critical to mitigate potential oncogenic and infectious risks.

The manufacturing process for Glucogen-XR utilizes a proprietary Google Cloud Life Sciences platform incorporating advanced purification modalities. The removal of host cell DNA is monitored across multiple downstream steps to ensure that levels remain well below the safety threshold of **10 ng/dose**, as recommended by the World Health Organization (WHO) and the FDA.

---

#### **2. Regulatory Framework and Compliance Standards**
The characterization of residual DNA for Glucogen-XR is performed in compliance with the following regulatory and compendial standards:
*   **ICH Q5B:** Quality of Biotechnological Products: Analysis of the Expression Construct in Cells Used for Production of R-DNA Derived Protein Products.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in Their Manufacturing Process.
*   **USP <1130>:** Nucleic Acid-Based Techniques – Approaches for Detecting Trace Nucleic Acids.
*   **USP <507>:** Protein Determination Procedures.
*   **Ph. Eur. 2.6.21:** Nucleic Acid Amplification Techniques.
*   **FDA 21 CFR 610.13:** Purity Requirements for Biological Products.

---

#### **3. Analytical Methodology: Quantitative Polymerase Chain Reaction (qPCR)**
GHS utilizes a high-sensitivity, proprietary qPCR assay (Method MET-GHS-DNA-04) targeting a multi-copy sequence within the CHO-K1 genome (Alu-like repetitive elements) to ensure maximum sensitivity and precision.

##### **3.1 Technical Specifications of the GHS-CHO-001 DNA Detection System**
| Parameter | Specification | Rationale |
| :--- | :--- | :--- |
| **Target Sequence** | Highly Repetitive CHO SINE element | Enhances sensitivity/LOD |
| **Platform** | Applied Biosystems QuantStudio 7 Flex | High-throughput, cloud-integrated |
| **Standard Curve Range** | 100 fg/µL to 10 ng/µL | Covers clinical/process ranges |
| **Limit of Detection (LOD)** | 1.5 fg/µL | Industry-leading sensitivity |
| **Limit of Quantitation (LOQ)** | 10.0 fg/µL | Validated for Drug Substance (DS) |

##### **3.2 Detailed Extraction Protocol (The "GHS-Cloud-Extract" Method)**
To eliminate matrix interference from the high-concentration peptide environment of Glucogen-XR, a specialized magnetic bead-based extraction is performed.

1.  **Sample Pre-treatment:** 500 µL of Glucogen-XR Drug Substance is diluted 1:1 with Proteinase K digestion buffer (Buffer GHS-PK-101).
2.  **Digestion:** Incubation at 56°C for 45 minutes at 1000 RPM to liberate DNA from nucleoprotein complexes.
3.  **Lysis:** Addition of Guanidinium Hydrochloride (GuHCl) and Isopropanol to facilitate binding to silica-coated magnetic beads (GHS-Mag-04).
4.  **Washing:** Three sequential wash steps using ethanol-based buffers to remove residual peptide and salts.
5.  **Elution:** DNA is eluted in 50 µL of low-TE buffer (10 mM Tris-HCl, 0.1 mM EDTA, pH 8.0).

---

#### **4. Validation and Recovery Data**
Validation was performed on three representative batches of Glucogen-XR Drug Substance to demonstrate the accuracy of the DNA recovery process.

**Table 1: Matrix Interference and Recovery Validation (Spike-Recovery Study)**
*Batch Reference: GLUC-2025-001 through GLUC-2025-003*

| Batch Number | Spike Level (pg/mg Protein) | Measured DNA (pg/mg) | Recovery (%) | RSD (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 100.0 | 94.2 | 94.2% | 1.2 |
| GLUC-2025-002 | 100.0 | 97.8 | 97.8% | 0.8 |
| GLUC-2025-003 | 100.0 | 92.5 | 92.5% | 1.5 |
| **Mean Recovery** | — | — | **94.8%** | **N/A** |

---

#### **5. Process Clearance Studies (Step-by-Step Removal)**
The Glucogen-XR manufacturing process involves several orthogonal steps designed to clear host cell DNA. The following data summarizes the Log Reduction Value (LRV) calculated during the Process Characterization Phase.

##### **5.1 DNA Clearance Profile Across Downstream Unit Operations**
| Process Step | Input DNA (ng/mL) | Output DNA (ng/mL) | Step LRV | Cumulative LRV |
| :--- | :--- | :--- | :--- | :--- |
| **Harvest (Clarified)** | 450,000 | 25,000 | 1.26 | 1.26 |
| **Protein A Capture** | 25,000 | 450 | 1.74 | 3.00 |
| **Low pH Inactivation** | 450 | 440 | 0.01 | 3.01 |
| **Cation Exchange (CEX)** | 440 | 2.5 | 2.25 | 5.26 |
| **Anion Exchange (AEX)** | 2.5 | < 0.010 (LOQ) | > 2.40 | **> 7.66** |
| **Nanofiltration** | < 0.010 | < 0.010 | N/A | > 7.66 |

*Note: The Anion Exchange (AEX) chromatography step in "Bind-and-Elute" mode is the primary DNA clearance vehicle, leveraging the strong negative charge of the DNA backbone at operating pH 7.2.*

---

#### **6. Residual DNA Size Distribution Characterization**
Per FDA requests for long-acting biologics, GHS conducted fragment size analysis using High Sensitivity Capillary Electrophoresis (Agilent Bioanalyzer 2100). Small DNA fragments (<200 bp) are considered to have significantly lower risk of functional gene transfer or oncogenic potential.

**Table 2: Fragment Size Analysis Results**
| Batch Number | % < 200 bp | % 200 - 500 bp | % > 500 bp | Largest Detected (bp) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 92.4% | 7.1% | 0.5% | 610 |
| GLUC-2025-002 | 94.8% | 4.9% | 0.3% | 580 |
| GLUC-2025-003 | 91.9% | 7.9% | 0.2% | 550 |

**Interpretation:** The manufacturing process, specifically the low pH treatment and high-shear filtration steps, effectively shears the residual DNA into small fragments (median size ~115 bp). No intact functional genes (e.g., DHFR, GS) from the host cell were detected.

---

#### **7. Batch Release Data for Drug Substance (Process Validation Batches)**
Quantitative results for the registration batches demonstrate that the levels of residual DNA are consistently below the limit of quantitation (LOQ) and well within the safety limit of < 10 pg/mg of peptide.

**Table 3: Residual DNA Content in Glucogen-XR Commercial-Scale Batches**
| Batch ID | Date of Manufacture | Scale (L) | DNA Content (pg/mg) | DNA per Max Dose (pg) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-004** | 12-JAN-2025 | 2000 | < 1.0 (BQL) | < 5.0 |
| **GLUC-2025-005** | 24-JAN-2025 | 2000 | < 1.0 (BQL) | < 5.0 |
| **GLUC-2025-006** | 05-FEB-2025 | 2000 | 1.2 | 6.0 |
| **GLUC-2025-007** | 18-FEB-2025 | 2000 | < 1.0 (BQL) | < 5.0 |
| **GLUC-2025-008** | 01-MAR-2025 | 2000 | < 1.0 (BQL) | < 5.0 |

*BQL: Below Quantitation Limit (1.0 pg/mg).*

---

#### **8. Calculation of Safety Margin**
Based on the maximum clinical dose of Glucogen-XR (5 mg peptide per week), the total exposure to residual host cell DNA is calculated as follows:

**Formula:**
$$Total DNA Exposure (pg) = [Residual DNA (pg/mg)] \times [Max Dose (mg)]$$

**Calculation for Batch GLUC-2025-006 (Highest Value):**
$$1.2 \text{ pg/mg} \times 5 \text{ mg} = 6.0 \text{ pg per dose}$$

**Safety Margin Analysis:**
*   **WHO/FDA Limit:** 10,000 pg (10 ng) per dose.
*   **Glucogen-XR Observed Max:** 6.0 pg per dose.
*   **Safety Factor:** ~1,666-fold margin below the regulatory limit.

---

#### **9. Specific Characterization of the GS Expression Construct**
In accordance with **ICH Q5B**, GHS performed targeted qPCR analysis to ensure the absence of the glutamine synthetase (GS) expression vector DNA in the final Drug Substance.

*   **Target:** CMV Promoter and GS Gene sequence.
*   **Method:** Duplex qPCR (MET-GHS-DNA-09).
*   **Result:** All commercial-scale batches (GLUC-2025-004 to 008) showed "Not Detected" (LOD = 0.5 pg/mg) for vector-specific sequences.

---

#### **10. Risk Assessment and Conclusions**
The comprehensive characterization of residual DNA in Glucogen-XR demonstrates that:
1.  The purification process provides a high degree of redundancy and clearance (>7.66 LRV).
2.  Residual DNA levels in clinical and validation batches are consistently < 2 pg/mg, providing a massive safety margin relative to FDA/WHO guidelines.
3.  The DNA is highly fragmented (< 200 bp), virtually eliminating the risk of accidental genetic integration.
4.  There is no detectable carryover of the GS expression vector.

Based on these data, the residual host cell DNA in Glucogen-XR is controlled and does not pose a significant safety risk to patients. GHS will continue to monitor this impurity as a routine release test for every Drug Substance batch using the validated qPCR method described herein.

---
*End of Section 3.2.S.3.2.3*

---

## Leached Protein A (if applicable)

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.3.2: PROCESS-RELATED IMPURITIES
### SUBSECTION 3.2.S.3.2.4: LEACHED PROTEIN A

---

#### 3.2.S.3.2.4.1 Introduction and Scope
The manufacturing process for **Glucogen-XR (glucapeptide extended-release)**, produced by **Google Health Sciences**, utilizes an affinity chromatography step (Capture Step 1) employing a recombinant Protein A ligand immobilized on a highly cross-linked agarose matrix. While Protein A chromatography provides exceptional selectivity and purity for the glucapeptide fusion protein, the potential for ligand leaching—resulting from proteolytic cleavage of the Protein A molecule or physical degradation of the resin matrix—necessitates rigorous monitoring and clearance validation.

This subsection details the analytical methodologies, validation parameters, historical batch data, and risk assessment strategies employed to ensure that residual leached Protein A in the Glucogen-XR Drug Substance (DS) remains below the qualified safety threshold of $\leq 10$ ppm (parts per million, equivalent to ng Protein A per mg of glucapeptide).

#### 3.2.S.3.2.4.2 Regulatory Framework and Compliance
The strategy for monitoring and controlling leached Protein A follows a risk-based approach aligned with the following regulatory and industry standards:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q3A(R2):** Impurities in New Drug Substances.
*   **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
*   **USP <1103>:** Immunological Methods - Enzyme-Linked Immunosorbent Assay (ELISA).
*   **USP <1105>:** Immunological Methods - Surface Plasmon Resonance (SPR).

#### 3.2.S.3.2.4.3 Analytical Methodology: GHS-SOP-7729 (High-Sensitivity ELISA)
Google Health Sciences employs a proprietary, sandwich-type Enzyme-Linked Immunosorbent Assay (ELISA) specifically optimized for the detection of the recombinant Protein A ligand used in the Glucogen-XR process.

##### 3.2.S.3.2.4.3.1 Principle of the Assay
The assay utilizes a polyclonal "Capture Antibody" (rabbit anti-Protein A) immobilized on a 96-well microtiter plate. Samples containing Glucogen-XR are pre-treated with a dissociation buffer to break the high-affinity bond between the glucapeptide and any leached Protein A. Following neutralization, the sample is added to the plate. A secondary "Detection Antibody" (biotinylated chicken anti-Protein A) is added, followed by Streptavidin-conjugated Horseradish Peroxidase (HRP). The concentration of Protein A is quantified via the colorimetric reaction of Tetramethylbenzidine (TMB) substrate, measured at 450 nm.

##### 3.2.S.3.2.4.3.2 Detailed Analytical Procedure (Step-by-Step)
1.  **Plate Coating:** Coat Nunc MaxiSorp plates with 100 µL of Capture Antibody (2.0 µg/mL in PBS, pH 7.4). Incubate for 16 hours at 2-8°C.
2.  **Blocking:** Wash 3x with PBST (PBS + 0.05% Tween-20). Add 200 µL of 3% BSA in PBS. Incubate for 2 hours at RT.
3.  **Sample Dissociation Protocol:**
    *   Mix 100 µL of Glucogen-XR sample (diluted to 10 mg/mL) with 50 µL of Dissociation Buffer (0.2 M Phosphoric Acid, pH 1.5).
    *   Incubate at 37°C for 20 minutes with gentle agitation (300 RPM).
    *   Neutralize with 50 µL of 1.0 M Tris-HCl (pH 9.0).
    *   *Calculation for Final Dilution Factor ($DF$):* $DF = \frac{V_{final}}{V_{initial}} = \frac{200 \mu L}{100 \mu L} = 2.0$.
4.  **Standard Curve Preparation:** Prepare a 7-point standard curve using USP Protein A Reference Standard (Lot #GHS-STD-99) ranging from 0.1 ng/mL to 10 ng/mL.
5.  **Loading:** Load 100 µL of standards, controls, and dissociated samples in triplicate.
6.  **Incubation:** Incubate for 90 minutes at 25°C.
7.  **Detection:** Add Biotin-Ab (1:5000 dilution), incubate 60 mins. Add SA-HRP (1:10000), incubate 30 mins.
8.  **Development:** Add 100 µL TMB substrate. Stop reaction with 50 µL 1N $H_2SO_4$ after 15 minutes.
9.  **Measurement:** Read OD at 450 nm with 630 nm reference correction.

#### 3.2.S.3.2.4.4 Validation Data and System Suitability
The GHS-SOP-7729 method was validated according to ICH Q2(R1).

**Table 1: Validation Parameters for Leached Protein A ELISA**
| Parameter | Specification/Criterion | Result | Status |
| :--- | :--- | :--- | :--- |
| **LOD (Limit of Detection)** | Reportable | 0.025 ng/mL | Pass |
| **LOQ (Limit of Quantitation)** | $\leq 0.1$ ng/mL | 0.080 ng/mL | Pass |
| **Linearity ($R^2$)** | $\geq 0.990$ | 0.9985 | Pass |
| **Accuracy (Spike Recovery)** | 80% to 120% | 94.2% - 106.8% | Pass |
| **Intra-Assay Precision** | $\%CV \leq 10\%$ | 3.4% | Pass |
| **Inter-Assay Precision** | $\%CV \leq 15\%$ | 5.1% | Pass |
| **Specificity** | No interference from DS matrix | No matrix effect observed | Pass |

#### 3.2.S.3.2.4.5 Process Clearance Data (Clearance Study Report GHS-CSR-2024-012)
The clearance of leached Protein A was evaluated across three independent purification runs at the 2000L scale. Samples were taken post-Protein A elution (neutralized), post-Low pH Viral Inactivation, post-Cation Exchange Chromatography (CEX), and post-Anion Exchange Chromatography (AEX).

**Table 2: Clearance of Leached Protein A across Downstream Stages**
| Batch ID | Post-Capture (ng/mg) | Post-VI (ng/mg) | Post-CEX (ng/mg) | Post-AEX/Final DS (ng/mg) | Log Reduction Value (LRV) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 24.5 | 22.1 | 1.4 | < LOQ (0.08) | > 2.48 |
| **GLUC-2025-002** | 28.2 | 26.5 | 1.8 | < LOQ (0.08) | > 2.54 |
| **GLUC-2025-003** | 21.9 | 20.4 | 1.2 | < LOQ (0.08) | > 2.43 |
| **Mean** | **24.8** | **23.0** | **1.4** | **< LOQ** | **> 2.48** |

*Note: LOQ is 0.08 ng/mL. At a protein concentration of 50 mg/mL, this corresponds to 0.0016 ppm.*

#### 3.2.S.3.2.4.6 Batch Analysis Data (DS Release)
The following table summarizes the residual Protein A levels for the last ten (10) GMP manufacturing batches of Glucogen-XR Drug Substance.

**Table 3: Summary of Residual Protein A in GMP Batches (GLUC-2025-004 to GLUC-2025-013)**
| Batch Number | Manufacturing Date | Scale (L) | Protein A Result (ppm) | Method |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-004 | 12-JAN-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-005 | 25-JAN-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-006 | 08-FEB-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-007 | 22-FEB-2025 | 2000 | 0.12 | GHS-SOP-7729 |
| GLUC-2025-008 | 07-MAR-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-009 | 21-MAR-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-010 | 04-APR-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-011 | 18-APR-2025 | 2000 | 0.09 | GHS-SOP-7729 |
| GLUC-2025-012 | 02-MAY-2025 | 2000 | < LOQ | GHS-SOP-7729 |
| GLUC-2025-013 | 16-MAY-2025 | 2000 | < LOQ | GHS-SOP-7729 |

#### 3.2.S.3.2.4.7 Lifetime Resin Study (Leaching Profile)
To ensure that resin aging does not lead to increased Protein A leaching, a resin lifetime study (GHS-RS-2024-05) was conducted. The Protein A resin (MabSelect Sure LX equivalent) was subjected to 200 cycles of use, including Cleaning-in-Place (CIP) with 0.1 M NaOH.

**Table 4: Protein A Leaching as a Function of Resin Cycles**
| Cycle Number | Eluate Protein A (ppm) | Final DS (ppm) - Predicted* |
| :--- | :--- | :--- |
| 1 | 18.5 | < LOQ |
| 50 | 22.1 | < LOQ |
| 100 | 29.8 | < LOQ |
| 150 | 35.4 | 0.15 |
| 200 | 48.2 | 0.22 |

*\*Predicted based on minimum LRV of 2.4 observed in clearance studies.*
**Conclusion:** Even at the end of the resin's validated lifespan (200 cycles), the secondary purification steps (CEX/AEX) provide sufficient clearance to keep Protein A levels well below the 10 ppm specification.

#### 3.2.S.3.2.4.8 Risk Assessment and Safety Justification
Protein A is a known immunomodulator and can potentially cause adverse reactions if present at high levels. However, the Glucogen-XR process consistently reduces Protein A to levels $< 1$ ppm.
1.  **Safety Margin:** Based on a maximum daily dose of 20 mg Glucogen-XR, a 10 ppm limit results in an exposure of 200 ng Protein A/day. This is significantly below the levels reported to elicit physiological responses in clinical literature ($> 1$ mg/day).
2.  **Mitigation Strategy:** The Cation Exchange (Step 2) and Anion Exchange (Step 3) chromatography steps are orthogonal to the Protein A capture step. Protein A (pI ~5.0) and the Glucogen-XR fusion protein (pI ~6.2) are effectively separated during CEX at pH 5.0, where Protein A remains largely unbound or is partitioned differently than the product.

#### 3.2.S.3.2.4.9 Summary of Control Strategy
The control of leached Protein A in Glucogen-XR Drug Substance is maintained through:
*   **In-Process Monitoring:** Testing of every Capture Step eluate pool (GHS-IPC-102).
*   **Release Testing:** Mandatory testing of every Drug Substance batch using validated ELISA (GHS-SOP-7729).
*   **Residue Limits:** Strict adherence to a limit of $\leq 10$ ppm.
*   **Resin Management:** Retirement of affinity resin after 200 cycles or upon failure of system suitability.

---
**End of Subsection 3.2.S.3.2.4**

---

# PEG Reagent Impurities

## Free PEG Content

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## 3.2.S DRUG SUBSTANCE (GLUCAPEPTIDE EXTENDED-RELEASE)
### 3.2.S.3 CHARACTERIZATION
#### 3.2.S.3.2 IMPURITIES
##### 3.2.S.3.2.1 PEG Reagent Impurities: Free Polyethylene Glycol (PEG) Content

---

### 1.0 INTRODUCTION AND SCOPE

This section provides a comprehensive characterization and quantification of residual non-conjugated Polyethylene Glycol (Free PEG) within the Glucogen-XR (glucapeptide extended-release) drug substance. Glucogen-XR is a site-specific mono-PEGylated peptide (40 kDa branched PEG) produced via a proprietary conjugation process between the recombinant glucapeptide (expressed in GHS-CHO-001) and a maleimide-activated methoxy-polyethylene glycol (mPEG2-MAL-40K).

The presence of "Free PEG"—defined as any PEG species not covalently bound to the glucapeptide moiety—is a critical quality attribute (CQA) for Glucogen-XR. Free PEG comprises unreacted mPEG-maleimide, hydrolyzed mPEG-acid, and PEG-diol impurities inherent to the starting material. Excess Free PEG can influence the viscosity of the final drug product, impact the pharmacokinetic profile by altering the effective dose concentration, and potentially increase the risk of immunological responses or vacuolation in specific tissues (e.g., renal tubular cells), as per ICH Q6B and FDA guidance on PEGylated biologics.

Google Health Sciences (GHS) utilizes an ultra-high performance liquid chromatography (UHPLC) method coupled with Charged Aerosol Detection (CAD) for the precise quantification of Free PEG, ensuring levels remain below the established safety threshold of $\le 2.0\%$ (w/w) relative to the total PEGylated protein.

---

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES

The characterization of Free PEG in Glucogen-XR aligns with the following regulatory frameworks:

*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q3C (R8):** Impurities: Guideline for Residual Solvents (principles applied to polymer residues).
*   **FDA Guidance for Industry:** *Liposome Drug Products: Chemistry, Manufacturing, and Controls; Human Pharmacokinetics and Bioavailability; and Labeling Documentation* (Technical principles applied to complex polymeric carriers).
*   **USP <1059>:** Excipient Performance (Assessment of polymeric attributes).
*   **USP <729>:** Globule Size Distribution (Contextual relevance for extended-release formulations).

---

### 3.0 ANALYTICAL METHODOLOGY: UHPLC-CAD FOR FREE PEG

#### 3.1 Principle of Operation
Due to the lack of a chromophore in the PEG molecule, standard UV detection is insufficient for the quantification of Free PEG at low levels. GHS employs **Charged Aerosol Detection (CAD)**, which offers a universal response for non-volatile and semi-volatile analytes. The method utilizes a reversed-phase gradient to separate the hydrophobic PEGylated peptide (Glucogen-XR) from the non-conjugated Free PEG species.

#### 3.2 Instrumentation and Equipment
The analysis is performed using the GHS-Analytical-UHPLC-09 system (Table 3.2-1).

**Table 3.2-1: Equipment Specifications for Free PEG Analysis**
| Equipment ID | Component | Specification/Manufacturer |
| :--- | :--- | :--- |
| GHS-LC-09-A | UHPLC Pump | Binary High-Pressure Gradient, 15,000 psi limit |
| GHS-LC-09-B | Autosampler | Thermostated (4°C ± 2°C), Low-carryover needle |
| GHS-LC-09-C | Column Oven | Forced air circulation (± 0.5°C stability) |
| GHS-LC-09-D | Detector | Charged Aerosol Detector (CAD), Corona Veo RS |
| GHS-LC-09-E | Column | Waters ACQUITY UPLC Protein BEH C4, 300Å, 1.7 µm |
| GHS-SOFT-01 | Data System | Chromeleon 7.3 CDS |

#### 3.3 Reagents and Standards
*   **Reference Standard:** GHS-mPEG2-MAL-40K-RS (Batch: RS-PEG-2024-05).
*   **Mobile Phase A:** 0.1% Trifluoroacetic acid (TFA) in Water (Milli-Q).
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile (LC-MS Grade).
*   **Diluent:** 20 mM Sodium Phosphate, pH 7.2.

---

### 4.0 DETAILED ANALYTICAL PROTOCOL (SOP-QC-PEG-005)

#### 4.1 Sample Preparation
1.  **Drug Substance Samples:** Dilute Glucogen-XR DS (Batch GLUC-2025-XXX) to a final concentration of 5.0 mg/mL using the diluent.
2.  **Standard Curve Generation:** Prepare five levels of mPEG2-MAL-40K standard (0.05, 0.1, 0.2, 0.5, and 1.0 mg/mL) to bracket the expected 2% impurity limit.
3.  **Spike Recovery Control:** Spike DS sample with 1.0% (w/w) mPEG standard to ensure method accuracy.

#### 4.2 Chromatographic Conditions
*   **Flow Rate:** 0.4 mL/min.
*   **Injection Volume:** 5.0 µL.
*   **Column Temp:** 55°C (to ensure complete denaturation and separation).
*   **CAD Settings:** Evaporation Temp: 35°C; Power Function: 1.0; Filter: 5.0s.

**Table 4.2-1: Gradient Profile**
| Time (min) | % Mobile Phase A | % Mobile Phase B | Curve Type |
| :--- | :--- | :--- | :--- |
| 0.0 | 80 | 20 | Initial |
| 2.0 | 80 | 20 | Linear |
| 12.0 | 20 | 80 | Linear |
| 15.0 | 10 | 90 | Step |
| 18.0 | 80 | 20 | Equilibration |

#### 4.3 Data Processing and Calculations
The Free PEG content is calculated using a power-function fit (typical for CAD detection) or a linear fit over a narrow range.

**Formula 1: Response Factor (RF)**
$$Area = a \times (Concentration)^b$$
*Where 'a' is the intercept and 'b' is the power function (typically 1.0 - 1.4).*

**Formula 2: Percentage Free PEG**
$$\% \text{Free PEG} = \left( \frac{C_{\text{found}} \times V_{\text{dilution}}}{W_{\text{sample}}} \right) \times 100$$
*Where:*
*   $C_{\text{found}}$ = Concentration of PEG from calibration curve (mg/mL)
*   $V_{\text{dilution}}$ = Total volume of sample solution (mL)
*   $W_{\text{sample}}$ = Total weight of Glucogen-XR in sample (mg)

---

### 5.0 BATCH ANALYSIS DATA (GLUC-2025 SERIES)

The following table summarizes the Free PEG results for five consecutive GMP batches produced at the South San Francisco facility.

**Table 5.0-1: Free PEG Content in Glucogen-XR Drug Substance Batches**
| Batch Number | Manufacture Date | Total Protein (mg/mL) | Free PEG (mg/mL) | % Free PEG (w/w) | Pass/Fail (Limit $\le 2.0\%$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 52.4 | 0.42 | 0.80% | Pass |
| GLUC-2025-002 | 28-JAN-2025 | 51.9 | 0.51 | 0.98% | Pass |
| GLUC-2025-003 | 15-FEB-2025 | 53.1 | 0.38 | 0.72% | Pass |
| GLUC-2025-004 | 02-MAR-2025 | 52.8 | 0.47 | 0.89% | Pass |
| GLUC-2025-005 | 20-MAR-2025 | 52.2 | 0.32 | 0.61% | Pass |

**Table 5.0-2: Statistical Summary of Batch Data**
| Parameter | Value |
| :--- | :--- |
| Mean % Free PEG | 0.80% |
| Standard Deviation (SD) | 0.142 |
| Relative Standard Deviation (RSD) | 17.75% |
| Maximum Observed Value | 0.98% |
| Minimum Observed Value | 0.61% |
| 95% Confidence Interval | [0.62%, 0.98%] |

---

### 6.0 VALIDATION OF ANALYTICAL PROCEDURES (Summary)

The UHPLC-CAD method was validated according to ICH Q2(R1).

#### 6.1 Specificity
Specificity was demonstrated by injecting the diluent (blank), the unconjugated glucapeptide, and the mPEG2-MAL-40K reagent. No interference was observed at the retention time of Free PEG (RT ≈ 8.4 min).

#### 6.2 Linearity and Range
Linearly was evaluated from 0.025 mg/mL to 1.5 mg/mL.
*   **Regression Equation:** $y = 12.45x^{1.12}$
*   **Correlation Coefficient ($R^2$):** 0.9994

#### 6.3 Limit of Detection (LOD) and Limit of Quantitation (LOQ)
*   **LOD:** 0.008 mg/mL (S/N ratio 3:1)
*   **LOQ:** 0.025 mg/mL (S/N ratio 10:1)

#### 6.4 Accuracy (Recovery)
Accuracy was determined by spiking Glucogen-XR DS with known amounts of Free PEG.

**Table 6.4-1: Recovery Results**
| Spiked Level (%) | Replicate | Amount Added (mg) | Amount Recovered (mg) | Recovery (%) | Mean Recovery |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0.5% | 3 | 0.25 | 0.244 | 97.6% | 98.2% |
| 1.0% | 3 | 0.50 | 0.495 | 99.0% | |
| 2.0% | 3 | 1.00 | 1.011 | 101.1% | |

---

### 7.0 CHARACTERIZATION OF PEG SPECIES BY MALDI-TOF MS

To further characterize the nature of the "Free PEG" detected via UHPLC-CAD, Matrix-Assisted Laser Desorption/Ionization Time-of-Flight Mass Spectrometry (MALDI-TOF MS) was employed using a Bruker Autoflex Speed system.

#### 7.1 Mass Spectral Analysis
The mass spectrum of the Free PEG fraction isolated from batch GLUC-2025-002 shows a broad polydisperse peak centered at 41,230 Da. This is consistent with the starting material mPEG2-MAL-40K.

**Table 7.1-1: PEG Molecular Weight Distribution**
| Parameter | Value (Da) | Definition |
| :--- | :--- | :--- |
| Mn | 40,850 | Number Average Molecular Weight |
| Mw | 41,420 | Weight Average Molecular Weight |
| Mz | 42,100 | Z-Average Molecular Weight |
| PDI (Mw/Mn) | 1.014 | Polydispersity Index |

The PDI of 1.014 indicates a highly uniform polymer distribution, confirming that the Free PEG present in the DS is not a result of polymer degradation during the conjugation or purification processes.

---

### 8.0 IMPACT OF MANUFACTURING SCALE-UP

The transition from the 50L pilot scale to the 2,000L commercial scale (using GHS-CHO-001 cell line) necessitated optimizations in the Tangential Flow Filtration (TFF) parameters to ensure efficient removal of Free PEG.

#### 8.1 TFF Clearance Efficiency
The purification process utilizes a 50 kDa molecular weight cut-off (MWCO) membrane. While the Glucogen-XR conjugate (approx. 45 kDa total mass) is retained, the branched 40 kDa Free PEG exhibits a larger hydrodynamic radius than expected, occasionally leading to slower clearance. GHS implemented a "High-Volume Diafiltration" (HVD) protocol, utilizing 15 diavolumes (DV) of phosphate buffer.

**Table 8.1-1: Free PEG Clearance During TFF (Batch GLUC-2025-005)**
| Diavolume (DV) | Free PEG in Retentate (%) | Reduction Factor |
| :--- | :--- | :--- |
| 0 (Initial) | 18.5% | - |
| 5 | 6.2% | 2.98 |
| 10 | 1.8% | 10.28 |
| 15 | 0.61% | 30.33 |

---

### 9.0 CONCLUSION

Characterization studies confirm that the Glucogen-XR drug substance contains consistently low levels of Free PEG, with all clinical and GMP batches showing values $< 1.0\%$, well within the specification of $\le 2.0\%$. The UHPLC-CAD method is robust and sensitive, and the MALDI-TOF data confirms the integrity of the PEG species. No evidence of PEG-induced toxicity or immunogenicity related to these residual levels has been observed in non-clinical models.

---

### 10.0 REFERENCES

1.  Knop, K., et al. (2010). "Poly(ethylene glycol) in Drug Delivery: Pros and Cons as Well as Potential Alternatives." *Angewandte Chemie International Edition*.
2.  GHS Technical Report GHS-TR-2023-089: *Validation of UHPLC-CAD for the Quantification of Residual PEG in Glucogen-XR*.
3.  FDA Guidance for Industry: *Analytical Procedures and Methods Validation for Drugs and Biologics* (2015).
4.  USP Chapter <1225> *Validation of Compendial Procedures*.

---

## PEG Degradation Products

# MODULE 3: QUALITY (3.2.S.3.2) - CHARACTERIZATION
## SECTION 3.2.S.3.2.4: IMPURITIES - PEG REAGENT AND DEGRADATION PRODUCTS

### 3.2.S.3.2.4.1 Introduction to Polyethylene Glycol (PEG) Degradation in Glucogen-XR
The Glucogen-XR (glucapeptide extended-release) drug substance utilizes a high-molecular-weight, branched methoxy-polyethylene glycol (mPEG) maleimide reagent (40 kDa) to extend the pharmacokinetic profile of the glucapeptide moiety. Given the susceptibility of the polyether backbone to oxidative and thermal degradation, Google Health Sciences (GHS) has conducted extensive characterization of PEG degradation products.

This section details the identification, quantification, and safety assessment of degradation species arising from the PEG reagent during storage, handling, and conjugation processes.

---

### 3.2.S.3.2.4.2 Mechanism of PEG Degradation
The degradation of the 40 kDa branched PEG used in Glucogen-XR primarily follows an autoxidation pathway. This process is initiated by the formation of carbon-centered radicals on the ethylene oxide units, facilitated by trace transition metals, heat, or exposure to ionizing radiation/light.

#### 3.2.S.3.2.4.2.1 Formaldehyde and Acetaldehyde Formation
The primary low-molecular-weight (LMW) organic impurities generated via the random cleavage of the PEG backbone are formaldehyde and acetaldehyde. The reaction mechanism follows the Bailey-North-GHS kinetic model:

$$ \text{R-O-CH}_2\text{CH}_2\text{-O-R} + \text{O}_2 \xrightarrow{h\nu/\Delta} \text{R-O-CH}(\text{OOH})\text{CH}_2\text{-O-R} $$
$$ \text{R-O-CH}(\text{OOH})\text{CH}_2\text{-O-R} \rightarrow \text{R-O} \cdot + \cdot\text{O-CH}_2\text{CH}_2\text{-O-R} \rightarrow \text{HCHO} + \text{CH}_3\text{CHO} $$

#### 3.2.S.3.2.4.2.2 PEG-Peroxides and Hydroperoxides
Peroxides are the most critical reactive impurities as they can cause site-specific oxidation of the Methionine (Met) and Tryptophan (Trp) residues in the Glucogen-XR peptide sequence.

---

### 3.2.S.3.2.4.3 Characterization of Degradation Products in Active Batches
Table 3.2.S.3.2.4-1 summarizes the degradation profile across three pivotal clinical batches manufactured at the South San Francisco facility.

**Table 3.2.S.3.2.4-1: Quantitative Analysis of PEG Degradation Products in Glucogen-XR Batches**

| Impurity ID | Category | Detection Method | GLUC-2025-001 (PPM) | GLUC-2025-002 (PPM) | GLUC-2025-003 (PPM) | USP <782> Limit |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Formaldehyde** | Carbonyl | DNPH-HPLC | 0.42 | 0.38 | 0.45 | < 5.0 |
| **Acetaldehyde** | Carbonyl | DNPH-HPLC | 1.12 | 0.95 | 1.08 | < 10.0 |
| **Formic Acid** | Organic Acid | IC-MS | 2.50 | 2.10 | 2.33 | Report |
| **Total Peroxides** | Reactive Oxygen | Tri-Iodide Spec | 0.08 μEq/g | 0.07 μEq/g | 0.09 μEq/g | < 0.5 μEq/g |
| **Ethylene Glycol**| Diol | GC-FID | < LOQ | < LOQ | < LOQ | < 620 |
| **Diethylene Glycol**| Diol | GC-FID | < LOQ | < LOQ | < LOQ | < 620 |

---

### 3.2.S.3.2.4.4 Analytical Procedures for PEG Degradation Monitoring

#### 3.2.S.3.2.4.4.1 Protocol GHS-PEG-098: Quantification of Carbonyls by DNPH Derivatization
This procedure is utilized for the trace detection of formaldehyde and acetaldehyde.

1.  **Sample Preparation**: Dissolve 100 mg of Glucogen-XR Drug Substance in 2 mL of acidified Water/Acetonitrile (80:20).
2.  **Derivatization**: Add 500 μL of 2,4-Dinitrophenylhydrazine (DNPH) reagent. Incubate at 40°C for 60 minutes under Nitrogen blanket (Equip ID: GHS-INC-992).
3.  **Extraction**: Extract DNPH-derivatives using Solid Phase Extraction (SPE) C18 cartridges.
4.  **Chromatography**: 
    *   **Column**: Zorbax SB-C18, 4.6 x 150mm, 3.5μm.
    *   **Mobile Phase A**: Water/Methanol/Acetonitrile (60:30:10).
    *   **Mobile Phase B**: Acetonitrile.
    *   **Gradient**: 0-15 min (30% B to 100% B).
    *   **Detection**: UV at 360 nm.

#### 3.2.S.3.2.4.4.2 Protocol GHS-PEG-112: Hydrodynamic Size Distribution (SEC-MALS)
To detect backbone fragmentation (chain scission), Multi-Angle Light Scattering (MALS) coupled with Size Exclusion Chromatography (SEC) is employed.

*   **System**: Agilent 1260 HPLC coupled with Wyatt DAWN HELEOS II.
*   **Calculations**: The weight-average molecular weight ($M_w$) and polydispersity index ($PDI$) are calculated using the Zimm equation:
    $$ \frac{Kc}{R_\theta} = \frac{1}{M_w P(\theta)} + 2A_2c $$
    Where $K$ is the optical constant, $c$ is concentration, and $R_\theta$ is the excess Rayleigh ratio.

**Table 3.2.S.3.2.4-2: SEC-MALS Results for Degradation Assessment**

| Batch Number | Storage Condition | Duration | $M_w$ (kDa) | $PDI$ ($M_w/M_n$) | % Polydisperse Fragments |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | T=0 | N/A | 42.1 | 1.03 | < 0.1% |
| **GLUC-2025-001** | 25°C/60% RH | 6 Months | 41.8 | 1.05 | 0.4% |
| **GLUC-2025-001** | 40°C/75% RH | 3 Months | 39.2 | 1.12 | 2.8% |

---

### 3.2.S.3.2.4.5 Stress Testing and Forced Degradation Study (GHS-STR-2025-04)
To establish the degradation kinetics of the PEG-Glucapeptide conjugate, the drug substance was subjected to oxidative stress using hydrogen peroxide ($H_2O_2$) and thermal stress.

#### 3.2.S.3.2.4.5.1 Oxidative Stress Results
Exposure to 0.1% $H_2O_2$ for 24 hours at 5°C resulted in:
1.  **Met-Oxidation**: 14.2% increase in Glucogen-XR Sulfoxide species (detected by RP-HPLC).
2.  **PEG Chain Scission**: 5% reduction in $M_w$ as measured by SEC-MALS.
3.  **Impurity Formation**: Detection of methoxy-acetic acid via IC-MS at 12 ppm.

#### 3.2.S.3.2.4.5.2 Photostability Results (ICH Q1B)
Samples exposed to 1.2 million lux-hours (cool white fluorescent) and 200 watt-hours/m² (near UV) showed significant yellowing.
*   **Result**: Significant increase in low-molecular-weight glycols (Oligomers $n=2$ to $n=5$).
*   **Conclusion**: Primary packaging must include light-protective secondary cartons.

---

### 3.2.S.3.2.4.6 Risk Assessment of PEG Degradants
Google Health Sciences has conducted a toxicological qualification for all identified PEG degradation products.

1.  **Formaldehyde/Acetaldehyde**: Levels in Glucogen-XR are well below the Threshold of Toxicological Concern (TTC) for parenteral administration as defined in ICH M7.
2.  **PEG-Aldehydes**: Reactive PEG-intermediates (mPEG-propionaldehyde) are monitored to ensure they do not exceed 0.1% w/w, preventing unwanted protein-protein crosslinking.
3.  **Formate/Glycolate**: These organic acids are typical metabolic byproducts and at the levels detected (Table 3.2.S.3.2.4-1) pose no safety risk to the Type 2 Diabetes patient population.

---

### 3.2.S.3.2.4.7 Summary of Control Strategy
Based on the characterization data, the following controls are implemented for the PEG reagent and Glucogen-XR Drug Substance:
*   **Reagent Specification**: mPEG-Maleimide (40kDa) must have a peroxide value $\le$ 0.1 μEq/g at release.
*   **Storage**: Drug substance must be stored at -70°C in amber-colored PETG bottles to mitigate further oxidative degradation.
*   **In-Process Monitoring**: Monitoring of Glycol levels during the Ultrafiltration/Diafiltration (UF/DF) stage of GLUC-2025 manufacturing.

---
**References:**
1. ICH Q3A(R2): Impurities in New Drug Substances.
2. ICH Q3B(R2): Impurities in New Drug Products.
3. USP <782>: Polyethylene Glycol.
4. GHS Internal Report R-2024-GLUC-PEG: *Kinetics of 40kDa PEG Degradation in Glucapeptide Matrices.*

---

## Impact on Product Quality

### **3.2.S.3. CHARACTERIZATION**
#### **3.2.S.3.2. Impurities**
#### **Subsection: Impact of PEG Reagent Impurities on Product Quality**

---

### **1.0 INTRODUCTION AND SCOPE**

This subsection provides a comprehensive assessment of the impact of Polyethylene Glycol (PEG) reagent impurities on the quality, safety, efficacy, and stability of Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist manufactured by Google Health Sciences. 

Glucogen-XR utilizes a site-specific PEGylation strategy involving a 40 kDa branched PEG-maleimide reagent (mPEG2-MAL-40K) conjugated to a cysteine residue at position 24 of the glucapeptide backbone. Given the polydisperse nature of PEG polymers and the potential for process-related degradants, the characterization of PEG-related impurities is critical to ensuring a consistent Target Product Quality Profile (TPQP).

The evaluation follows **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q3C/Q3D** regarding residual solvents and elemental impurities, as well as the **FDA Guidance for Industry: Nonclinical Studies for the Safety Evaluation of Pharmaceutical Excipients**.

---

### **2.0 TAXONOMY OF PEG-RELATED IMPURITIES**

The impact on product quality is categorized based on the origin and chemical nature of the impurity:

1.  **Reagent-Derived Polydispersity:** Variations in the molecular weight distribution ($M_w/M_n$) of the PEG starting material.
2.  **Reactive Functional Group Impurities:** Residual PEG-OH (non-reactive), PEG-diol (cross-linking agent), and hydrolyzed maleimide (mPEG-Acid).
3.  **Low Molecular Weight (LMW) PEG Fragments:** Degradation products resulting from oxidative cleavage of the polyoxyethylene chain.
4.  **Residual Catalyst and Solvent Impurities:** Trace levels of catalysts (e.g., TEA) and solvents (e.g., DCM, Toluene) used in PEG synthesis.

---

### **3.0 IMPACT ON BIOLOGICAL ACTIVITY AND POTENCY**

#### **3.1 Receptor Binding Affinity and Signal Transduction**
The primary mechanism of action (MoA) for Glucogen-XR is the activation of the GLP-1 receptor (GLP-1R). The attachment of a 40 kDa PEG moiety provides the necessary hydrodynamic radius to reduce renal clearance. However, impurities in the PEG reagent can impact potency.

**Table 1: Impact of PEG Polydispersity and Low MW Fragments on Potency**

| Batch Number | PEG Reagent Polydispersity ($PD$) | Mean MW (Da) | % LMW PEG (<20kDa) | GLP-1R Activation ($EC_{50}$) (pM) | Relative Potency (%) |
|:---|:---|:---|:---|:---|:---|
| **GLUC-2025-001** | 1.02 | 41,200 | 0.12% | 12.4 ± 0.8 | 102% |
| **GLUC-2025-002** | 1.03 | 40,850 | 0.15% | 12.8 ± 0.9 | 99% |
| **GLUC-2025-003** | 1.05 | 39,200 | 1.45% | 14.2 ± 1.1 | 89% |
| **GLUC-2025-004** | 1.08 | 37,500 | 3.20% | 16.5 ± 1.5 | 76% |
| **Ref. Std (RS-2024)**| 1.01 | 40,500 | <0.1% | 12.2 ± 0.5 | 100% |

*Statistical Note: A shift in polydispersity >1.05 correlates with a statistically significant ($p < 0.05$) decrease in relative potency due to increased steric hindrance from high MW fractions or reduced residence time from LMW fractions.*

#### **3.2 Impact of PEG-Diol Contamination (Cross-linking)**
PEG-diol impurities in the mPEG-MAL reagent can lead to the formation of "bridged" peptides (Peptide-PEG-Peptide).

**Formula for Theoretical Cross-linking:**
$$X_{link} = [PEG(MAL)_2] \times [Peptide]^2 \times K_{eq}$$

The presence of bridged dimers increases the apparent molecular weight to ~84 kDa, significantly altering the diffusion coefficient and access to the GLP-1R binding pocket.

---

### **4.0 IMPACT ON PHARMACOKINETICS (PK) AND BIODISTRIBUTION**

#### **4.1 Renal Clearance and Vacuolization Risk**
The impact of LMW PEG impurities (<10 kDa) is primarily on the rate of renal filtration. Conversely, excessively high MW fractions (>60 kDa) pose a risk of accumulation in the Reticuloendothelial System (RES).

**Table 2: Pharmacokinetic Correlation with PEG Impurity Profile**

| Impurity Type | Threshold | Impact on $T_{1/2}$ | Impact on $V_d$ | Safety Implication |
|:---|:---|:---|:---|:---|
| **LMW Fragments** | > 5% | Decrease (30%) | Increase | Reduced Efficacy |
| **HMW Fractions** | > 2% | Increase (15%) | Decrease | Vacuolization in Renal Tubules |
| **PEG-Acid** | > 1% | No Change | No Change | None (Inactive) |

#### **4.2 Protocol for PK Assessment of PEG Impurities (GHS-SOP-PK-09)**
1. **Subject:** Male Sprague-Dawley rats (n=12 per group).
2. **Dose:** 0.5 mg/kg subcutaneous injection of Glucogen-XR spiked with 5% LMW PEG (10kDa).
3. **Sampling:** 0, 4, 8, 24, 48, 72, 96, 120, 144, 168 hours post-dose.
4. **Analysis:** Competitive ELISA for Glucogen-XR; LC-MS/MS for PEG fragments.

---

### **5.0 IMPACT ON IMMUNOGENICITY AND SAFETY**

#### **5.1 Anti-PEG Antibodies (APA)**
The presence of PEG-aldehyde or unsaturated PEG-maleimide impurities can act as haptens, increasing the risk of inducing Anti-PEG Antibodies (IgM and IgG). Google Health Sciences has implemented a tiered testing approach to monitor APA formation.

**Table 3: Clinical Immunogenicity Correlation (Phase II Data)**

| Patient Cohort | PEG Impurity Level in Batch | APA Incidence (Week 12) | Clinical Impact |
|:---|:---|:---|:---|
| Group A (n=100) | Low (<0.05% Diol) | 2.1% | Negligible |
| Group B (n=100) | Mid (0.5% Diol) | 5.4% | Transient ISR* |
| Group C (n=50) | High (2.0% Diol) | 12.8% | Accelerated Clearance |

*\*ISR: Injection Site Reaction*

---

### **6.0 PHYSICOCHEMICAL STABILITY AND AGGREGATION**

#### **6.1 Accelerated Stability Study (GHS-STAB-2025)**
PEG impurities, particularly residual peroxides from PEG degradation, can catalyze the oxidation of Methionine (Met) residues in the glucapeptide sequence.

**Calculated Peroxide Value (PV) Influence:**
$$Oxidation\% = \beta_0 + \beta_1[Peroxide] + \beta_2(Time) + \beta_3(Temp)$$

**Table 4: Stability of Batch GLUC-2025-005 (Spiked with 100 ppm Peroxide)**

| Time Point | Storage Temp | % High MW Aggregates | % Oxidized Species | Appearance |
|:---|:---|:---|:---|:---|
| 0 Months | 2-8°C | 0.2% | 0.5% | Clear |
| 3 Months | 2-8°C | 0.3% | 0.8% | Clear |
| 6 Months | 2-8°C | 0.5% | 1.2% | Clear |
| 1 Month | 40°C/75% RH | 2.8% | 8.4% | Opalescent |

---

### **7.0 ANALYTICAL METHODOLOGY FOR QUANTIFICATION**

To ensure product quality, the following validated methods are utilized for monitoring PEG reagent impurities in the Drug Substance:

#### **7.1 Size Exclusion Chromatography with Multi-Angle Light Scattering (SEC-MALS)**
*   **Column:** TSKgel G4000PWxl
*   **Mobile Phase:** 50mM Phosphate Buffer, 150mM NaCl, pH 7.2
*   **Flow Rate:** 0.5 mL/min
*   **Detection:** RI (Refractive Index) and MALS (Laser 658nm)

#### **7.2 Proton NMR ($^1$H-NMR) for Maleimide Integrity**
*   **Instrument:** Bruker Avance III 600 MHz
*   **Solvent:** $D_2O$
*   **Target Signal:** $\delta$ 6.7 ppm (Symmetric CH=CH of maleimide)
*   **Calculation:** % Functionalization = $\frac{Integration(6.7 ppm)}{Integration(PEG backbone)} \times 100$

---

### **8.0 REGULATORY COMPLIANCE AND SPECIFICATIONS**

Google Health Sciences adheres to the following acceptance criteria for PEG reagent impurities to maintain Glucogen-XR quality:

**Table 5: Final Drug Substance Specifications (PEG-Related)**

| Parameter | Specification Limit | Test Method |
|:---|:---|:---|
| **PEG Polydispersity** | $\le$ 1.05 | SEC-MALS |
| **Residual Free PEG** | $\le$ 2.0% (w/w) | RP-HPLC-ELSD |
| **PEG-Peptide Dimer** | $\le$ 1.5% | SE-HPLC |
| **Residual Maleimide** | Report Results | $^1$H-NMR |
| **Ethylene Oxide** | $\le$ 1 ppm | Headspace GC |
| **1,4-Dioxane** | $\le$ 10 ppm | Headspace GC |

---

### **9.0 CONCLUSION**

The impact of PEG reagent impurities on the quality of Glucogen-XR is multifaceted, affecting potency via steric effects, safety via immunogenic potential, and stability via oxidative pathways. Through stringent control of the mPEG2-MAL-40K starting material and the implementation of advanced analytical characterization (SEC-MALS, NMR, LC-MS), Google Health Sciences ensures that Glucogen-XR consistently meets the required safety and efficacy standards for the treatment of Type 2 Diabetes Mellitus.

---
**References:**
1. ICH Q6B: Specifications for Biological Products.
2. USP <1667>: Characterization of Polyethylene Glycol.
3. *Journal of Pharmaceutical Sciences*, "Impact of PEGylation on Protein Conformation," 2023.
4. GHS Internal Report: *GLUC-RPT-2024-089: Risk Assessment of PEG-Maleimide Impurities.*

---

# Biological Activity

## GLP-1 Receptor Binding Assay

# MODULE 3: QUALITY (3.2.S.3 CHARACTERIZATION)
## SECTION: 3.2.S.3.2 BIOLOGICAL ACTIVITY
### SUBSECTION: 3.2.S.3.2.1 GLP-1 RECEPTOR BINDING ASSAY (COMPETITIVE RADIOLIGAND BINDING)

---

#### 3.2.S.3.2.1.1 Executive Summary
The biological activity of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist manufactured by Google Health Sciences, is fundamentally defined by its binding affinity to the human Glucagon-Like Peptide-1 Receptor (hGLP-1R). This subsection details the development, validation, and routine implementation of the competitive radioligand binding assay used to determine the equilibrium dissociation constant ($K_i$) and relative potency of Glucogen-XR against the International Reference Standard (IRS) for GLP-1 agonists.

The assay utilizes a membrane preparation derived from a stable CHO-K1 cell line overexpressing the human GLP-1 receptor (GHS-CHO-hGLP1R-A12). The method is based on the displacement of $[^{125}I]$-GLP-1(7-36)amide by increasing concentrations of Glucogen-XR. All procedures are conducted in compliance with USP <1103> *Immunological Analytical Procedures — Enzyme-Linked Immunosorbent Assay (ELISA)* and USP <1105> *Drug Product Assay Validation*, adapted for radioligand methodologies.

---

#### 3.2.S.3.2.1.2 Reagents and Equipment Specifications

To ensure maximum reproducibility and adherence to ICH Q6B guidelines, the following standardized reagents and high-precision equipment are utilized.

##### Table 1: Critical Reagent Specifications
| Reagent Name | Grade/Source | Catalog Number | Storage Condition | Function |
| :--- | :--- | :--- | :--- | :--- |
| $[^{125}I]$-GLP-1(7-36)amide | HPLC Purified (2200 Ci/mmol) | PerkinElmer NEX308 | -20°C | Radioligand |
| Human GLP-1R Membrane | Proprietary (GHS-CHO-hGLP1R-A12) | Lot #MEM-2024-09 | -80°C | Target Receptor |
| HEPES Buffer | Molecular Biology Grade | Sigma-Aldrich H3375 | RT | Buffering Agent |
| Bovine Serum Albumin (BSA) | Protease-Free, Fraction V | Roche 10735078001 | 4°C | Non-specific Binding Blocker |
| MgCl2 | Hexahydrate, ACS Grade | Sigma-Aldrich M2670 | RT | Cofactor |
| EDTA | Disodium salt, 0.5M pH 8.0 | Invitrogen 15575 | RT | Metalloprotease Inhibitor |
| Bacitracin | USP Grade | Sigma-Aldrich B0125 | 4°C | Protease Inhibitor |
| Polyethyleneimine (PEI) | 50% w/v aqueous solution | Sigma-Aldrich P3143 | 4°C | Filter Pre-treatment |

##### Table 2: Equipment and Instrumentation
| Equipment | Manufacturer/Model | Serial Number / ID | Calibration Due Date |
| :--- | :--- | :--- | :--- |
| Gamma Counter | PerkinElmer Wizard² 2470 | GHS-GC-009 | 15-OCT-2025 |
| Microplate Scintillation Counter | TopCount NXT | GHS-TC-004 | 22-NOV-2025 |
| Multichannel Pipettes | Rainin XLS+ (20-200µL) | GHS-PIP-442 | 01-JUL-2025 |
| Automated Liquid Handler | Hamilton Microlab STAR | GHS-HAM-02 | 12-DEC-2025 |
| Cell Harvester | Brandel M-48 | GHS-CH-01 | 30-JUN-2025 |
| Refrigerated Centrifuge | Beckman Coulter Avanti JXN-30 | GHS-CEN-12 | 14-SEP-2025 |

---

#### 3.2.S.3.2.1.3 Experimental Protocol: Step-by-Step Procedure

The binding assay is performed over a 2-day period, including membrane preparation and data acquisition.

**Step 1: Buffer Preparation (Assay Buffer A)**
The binding buffer is critical for maintaining receptor stability.
*   50 mM HEPES, pH 7.4
*   5 mM MgCl2
*   1 mM EDTA
*   0.1% (w/v) BSA (Protease-free)
*   0.1 mg/mL Bacitracin (added fresh on day of assay)

**Step 2: Serial Dilution of Test Samples and Reference Standard**
Glucogen-XR test samples (Batch Series GLUC-2025-XXX) and the Google Internal Reference Standard (GHS-REF-GLP1) are diluted using the Hamilton Microlab STAR system to ensure volumetric precision.
1.  Prepare a stock solution of 1.0 µM in Assay Buffer A.
2.  Perform a 12-point serial dilution (1:3 ratio).
3.  Final concentrations in the assay range from 100 nM to 0.0005 nM.

**Step 3: Receptor Preparation**
1.  Thaw GHS-CHO-hGLP1R-A12 membrane aliquots on ice.
2.  Resuspend in Assay Buffer A to a final protein concentration of 10 µg/well.
3.  Homogenize using a Dounce homogenizer (5 strokes) to ensure a uniform suspension.

**Step 4: Incubation Protocol**
The total reaction volume is 250 µL per well in a 96-well deep-well polypropylene plate.
1.  Add 50 µL of Diluted Test Sample or Reference Standard.
2.  Add 50 µL of $[^{125}I]$-GLP-1(7-36)amide (final concentration 50 pM).
3.  Add 150 µL of Membrane Suspension (10 µg protein).
4.  Seal plates and incubate for 120 minutes at 25°C (room temperature) with gentle shaking (300 rpm).

**Step 5: Filtration and Harvesting**
1.  Pre-wet GF/B filter plates (Whatman) with 0.5% PEI for 60 minutes to reduce non-specific binding.
2.  Harvest the reaction mixture using the Brandel M-48 Cell Harvester.
3.  Wash the filter plates 5 times with 1 mL of ice-cold Wash Buffer (50 mM Tris-HCl, pH 7.4).
4.  Dry the plates for 2 hours at 37°C.

**Step 6: Detection**
1.  Add 50 µL of Microscint-20 to each well.
2.  Count radioactivity using the TopCount NXT for 2 minutes per well.

---

#### 3.2.S.3.2.1.4 Calculation of Binding Affinity and Potency

The binding data are analyzed using a four-parameter logistic (4-PL) non-linear regression model.

##### Mathematical Models:
The $IC_{50}$ (concentration causing 50% inhibition of specific binding) is calculated using the following equation:

$$Y = \text{Bottom} + \frac{\text{Top} - \text{Bottom}}{1 + 10^{((\log IC_{50} - X) \cdot \text{HillSlope})}}$$

Where:
*   $Y$ = Bound radioactivity (CPM)
*   $X$ = Log concentration of Glucogen-XR
*   $\text{Top}$ = Total binding (no inhibitor)
*   $\text{Bottom}$ = Non-specific binding (1 µM unlabeled GLP-1)

The Equilibrium Dissociation Constant ($K_i$) is derived via the Cheng-Prusoff Equation:

$$K_i = \frac{IC_{50}}{1 + \frac{[L]}{K_d}}$$

Where:
*   $[L]$ = Concentration of $[^{125}I]$-GLP-1 (50 pM)
*   $K_d$ = Dissociation constant of the radioligand (determined by saturation binding, typically 42 pM).

---

#### 3.2.S.3.2.1.5 Characterization Data for Batch Release (GLUC-2025 Series)

The following table summarizes the binding affinity results for several representative clinical-scale batches of Glucogen-XR. These batches were manufactured at the 3000 Innovation Drive facility using the proprietary GHS-CHO-001 cell line.

##### Table 3: Summary of GLP-1R Binding Affinity for Glucogen-XR Batches
| Batch Number | Manufacture Date | $IC_{50}$ (nM) | $K_i$ (nM) | Relative Potency (%) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GHS-REF-GLP1** | 01-JAN-2024 | 0.42 | 0.19 | 100.0 (Ref) | Pass |
| **GLUC-2025-001** | 12-JAN-2025 | 0.44 | 0.20 | 95.4 | Pass |
| **GLUC-2025-002** | 15-JAN-2025 | 0.41 | 0.18 | 102.4 | Pass |
| **GLUC-2025-003** | 20-JAN-2025 | 0.43 | 0.19 | 97.7 | Pass |
| **GLUC-2025-004** | 02-FEB-2025 | 0.45 | 0.21 | 93.3 | Pass |
| **GLUC-2025-005** | 05-FEB-2025 | 0.40 | 0.18 | 105.0 | Pass |
| **GLUC-2025-006** | 11-FEB-2025 | 0.42 | 0.19 | 100.0 | Pass |

*Note: Acceptance criteria for relative potency is 80% to 125% of the Reference Standard.*

---

#### 3.2.S.3.2.1.6 Method Validation (ICH Q2(R1))

The assay was validated for its intended use according to ICH Q2(R1) *Validation of Analytical Procedures: Text and Methodology*.

##### 3.2.S.3.2.1.6.1 Specificity
Specificity was demonstrated by comparing the binding of Glucogen-XR to the GLP-1R against other related receptors (Glucagon Receptor, GIP Receptor, GLP-2 Receptor). No significant displacement (>10%) was observed for non-target receptors at concentrations up to 10 µM, yielding a selectivity ratio of >20,000-fold.

##### 3.2.S.3.2.1.6.2 Linearity and Range
Linearity was assessed by evaluating the relative potency of Glucogen-XR across five concentration levels (50%, 75%, 100%, 125%, and 150% of the target concentration).
*   **Regression Equation:** $y = 1.02x - 0.03$
*   **Correlation Coefficient ($R^2$):** 0.998
*   **Range:** 0.2 nM to 1.0 nM ($IC_{50}$ equivalent)

##### 3.2.S.3.2.1.6.3 Precision
Intermediate precision was evaluated by three different analysts over three separate days.

| Precision Metric | Intermediate Precision (% RSD) | Repeatability (% RSD) |
| :--- | :--- | :--- |
| $IC_{50}$ Determination | 4.8% | 3.2% |
| Relative Potency | 5.2% | 3.9% |

##### 3.2.S.3.2.1.6.4 Accuracy (Recovery)
Accuracy was determined by spiking known amounts of Glucogen-XR into a matrix of degraded product.
*   **Mean Recovery:** 98.4%
*   **95% Confidence Interval:** 96.5% - 100.3%

---

#### 3.2.S.3.2.1.7 Robustness Assessment

To ensure the assay is resilient to minor variations in laboratory conditions, a Factorial Design of Experiments (DoE) was conducted.

##### Table 4: Robustness Parameters and Observed Impact
| Parameter | Nominal Value | Tested Range | Observed Impact on $K_i$ | Conclusion |
| :--- | :--- | :--- | :--- | :--- |
| Incubation Temp | 25°C | 22°C - 28°C | Negligible (<3%) | Robust |
| Incubation Time | 120 min | 100 - 140 min | Negligible (<2%) | Robust |
| BSA Concentration | 0.1% | 0.05% - 0.2% | Shift in NSB observed | **Critical Parameter** |
| pH of Buffer | 7.4 | 7.2 - 7.6 | 5% shift in $IC_{50}$ | Robust within ±0.2 |

The concentration of BSA was identified as a critical parameter; thus, strictly controlled 0.1% Protease-free BSA is mandatory for all GMP testing.

---

#### 3.2.S.3.2.1.8 Comparison with Native GLP-1(7-36)

To characterize the extended-release modification's impact on receptor interaction, the binding kinetics of Glucogen-XR were compared to native GLP-1(7-36).

*   **Native GLP-1(7-36):** $K_i = 0.12 \pm 0.02 \text{ nM}$
*   **Glucogen-XR (GHS-CHO-001 derivative):** $K_i = 0.19 \pm 0.03 \text{ nM}$

The slight increase in $K_i$ (decrease in affinity) is attributed to the presence of the extended-release peptide tail, which provides the necessary pharmacokinetic profile for weekly dosing without significantly compromising the pharmacodynamic efficacy at the receptor level.

---

#### 3.2.S.3.2.1.9 Statistical Quality Control (Control Charts)

A Shewhart control chart is maintained for the $IC_{50}$ of the Reference Standard (GHS-REF-GLP1) to monitor assay drift.
*   **Warning Limit (±2 SD):** 0.38 - 0.46 nM
*   **Action Limit (±3 SD):** 0.36 - 0.48 nM

Any assay run where the Reference Standard falls outside the Action Limit is invalidated, and a formal deviation report is initiated per Google Health Sciences Quality Management System (QMS-SOP-0045).

---

#### 3.2.S.3.2.1.10 References
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <1103>:** Immunological Analytical Procedures.
3.  **Cheng Y, Prusoff WH.** Relationship between the inhibition constant (Ki) and the concentration of inhibitor which causes 50 per cent inhibition (IC50) of an enzymatic reaction. *Biochem Pharmacol.* 1973;22(23):3099-3108.
4.  **FDA Guidance for Industry:** Bioanalytical Method Validation (2018).

---
**End of Subsection 3.2.S.3.2.1**

---

## Cell-Based Potency Assay (cAMP Signaling)

# MODULE 3: QUALITY (3.2.S.3.1) - CHARACTERIZATION
## SECTION: BIOLOGICAL ACTIVITY
### SUBSECTION 3.2.S.3.1.2: Cell-Based Potency Assay (cAMP Signaling)

---

#### 3.2.S.3.1.2.1 Introduction and Rationale
The biological activity of **Glucogen-XR (glucapeptide extended-release)**, a long-acting synthetic analog of human glucagon-like peptide-1 (GLP-1), is primarily mediated through its high-affinity binding to the GLP-1 receptor (GLP-1R), a G-protein coupled receptor (GPCR) predominantly expressed on the surface of pancreatic beta cells. Upon ligand binding, the GLP-1R undergoes a conformational change that activates the stimulatory G-protein ($G\alpha_s$), which subsequently activates adenylate cyclase. This enzymatic activation leads to the conversion of adenosine triphosphate (ATP) into cyclic adenosine monophosphate (cAMP).

The quantification of intracellular cAMP accumulation serves as a proximal and highly sensitive marker of GLP-1R activation. For the purpose of regulatory submission and batch release (as specified in **Section 3.2.S.4.2**), Google Health Sciences (GHS) has developed and validated a robust cell-based reporter system. This assay utilizes a recombinant CHO-K1 cell line (GHS-CHO-001) engineered to stably overexpress the human GLP-1R and a luciferase reporter gene under the control of a cAMP-responsive element (CRE).

#### 3.2.S.3.1.2.2 Regulatory Compliance and Guidelines
This assay protocol and the subsequent validation data (presented in **Section 3.2.S.4.3**) have been developed in strict accordance with the following regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1032>:** Design and Development of Biological Assays.
*   **USP <1033>:** Biological Assay Validation.
*   **USP <1034>:** Analysis of Biological Assays.
*   **FDA Guidance for Industry:** Bioanalytical Method Validation (2018).

#### 3.2.S.3.1.2.3 Assay Principle: Homogeneous Time-Resolved Fluorescence (HTRF)
While the primary release assay utilizes the CRE-Luciferase reporter, the characterization of the drug substance (DS) and drug product (DP) relies on the **Homogeneous Time-Resolved Fluorescence (HTRF)** cAMP Gs Dynamic Kit. This method is preferred for characterization because it provides a direct, stoichiometric measurement of cAMP molecules produced per cell, allowing for precise kinetic modeling.

The HTRF assay is a competitive immunoassay between native cAMP produced by the cells and cAMP labeled with the dye d2 (acceptor). The specific antibody is labeled with Cryptate (donor).
1.  **High cAMP (Agonist effect):** Low FRET signal (native cAMP outcompetes d2-cAMP).
2.  **Low cAMP (Basal/Antagonist):** High FRET signal (d2-cAMP binds to the Cryptate-antibody).

#### 3.2.S.3.1.2.4 Detailed Experimental Protocol

##### 3.2.S.3.1.2.4.1 Reagents and Consumables
| Reagent Name | Manufacturer | Catalog Number | Grade/Purity |
| :--- | :--- | :--- | :--- |
| GHS-CHO-001 Master Cell Bank | Google Health Sciences | MCB-GLUC-001 | cGMP Grade |
| Ham's F12 Medium | Thermo Fisher | 11765054 | Cell Culture |
| Dialyzed FBS (10%) | Sigma-Aldrich | F0392 | Heat Inactivated |
| IBMX (PDE Inhibitor) | Sigma-Aldrich | I5879 | $\geq$99% (HPLC) |
| Forskolin (Positive Control) | BioPharma | 344270 | $\geq$98% |
| HTRF cAMP Gs Dynamic Kit | Cisbio/Revvity | 62AM4PEJ | Diagnostic Grade |
| Glucogen-XR Reference Standard | GHS | RS-GLUC-2024-01 | Primary RS |

##### 3.2.S.3.1.2.4.2 Preparation of Test Solutions
**Step 1: Assay Buffer Preparation**
*   Buffer A: HBSS (1x) + 20 mM HEPES + 0.1% BSA + 0.5 mM IBMX. 
*   Adjust pH to 7.4 $\pm$ 0.1 using 1N NaOH.
*   Filter through 0.22 $\mu$m PES membrane.

**Step 2: Sample Dilution Series**
The Reference Standard (RS) and Test Samples (TS) are diluted in a 10-point series using a 1:3 serial dilution factor to capture the full sigmoidal dose-response curve.
*   **Starting Concentration:** 1.0 $\mu$M
*   **Final Concentration:** 0.05 nM
*   **Intermediate Dilution Plates:** 96-well polypropylene (Greiner Bio-One, Cat# 651201).

##### 3.2.S.3.1.2.4.3 Cell Seeding and Stimulation
1.  **Harvesting:** GHS-CHO-001 cells are harvested at 85% confluency using Accutase to maintain receptor integrity.
2.  **Seeding:** Cells are resuspended in Assay Buffer at a density of $1 \times 10^6$ cells/mL. 5 $\mu$L of cell suspension (5,000 cells/well) is added to a 384-well white OptiPlate (PerkinElmer).
3.  **Stimulation:** 5 $\mu$L of the diluted Glucogen-XR (RS or TS) is added to the wells.
4.  **Incubation:** Plates are sealed and incubated at $37^\circ$C with 5% $CO_2$ for exactly 30 minutes.

##### 3.2.S.3.1.2.4.4 Detection and Measurement
1.  **Lysis:** Add 5 $\mu$L of cAMP-d2 and 5 $\mu$L of Anti-cAMP-Cryptate (diluted in Lysis Buffer).
2.  **Incubation:** 60 minutes at Room Temperature ($22^\circ$C) in the dark.
3.  **Reading:** Measurement is performed on an EnVision Multilabel Plate Reader (Model 2104) using the HTRF protocol:
    *   **Excitation:** 320 nm
    *   **Emission 1:** 615 nm (Donor)
    *   **Emission 2:** 665 nm (Acceptor)

#### 3.2.S.3.1.2.5 Data Analysis and Potency Calculation
The raw fluorescence data is converted into a ratio ($R$):
$$R = \left( \frac{\text{Signal at } 665\text{nm}}{\text{Signal at } 615\text{nm}} \right) \times 10,000$$

The relative potency is calculated using a **4-Parameter Logistic (4PL) Model** as defined in USP <1034>:
$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$
Where:
*   $A$ = Minimum response (Bottom asymptote)
*   $B$ = Hill slope (Sensitivity)
*   $C$ = $EC_{50}$ (Potency parameter)
*   $D$ = Maximum response (Top asymptote)

**Relative Potency Calculation:**
$$\text{Relative Potency} = \frac{EC_{50} (\text{Reference Standard})}{EC_{50} (\text{Test Sample})} \times 100\%$$

#### 3.2.S.3.1.2.6 Statistical Acceptance Criteria (System Suitability)
For an assay run to be considered valid, the following criteria must be met:
1.  **$R^2$ (Coefficient of Determination):** $\geq$ 0.98 for both RS and TS.
2.  **Slope Ratio:** The ratio of the Hill slopes ($B_{TS} / B_{RS}$) must be between 0.80 and 1.25 (Parallelism).
3.  **Asymptote Ratio:** The ratio of the upper asymptotes ($D_{TS} / D_{RS}$) must be between 0.90 and 1.10.
4.  **Signal-to-Noise (S/N):** $\geq$ 10.0.

---

#### 3.2.S.3.1.2.7 Analytical Results for Characterization Batches
The following table summarizes the potency results for three consecutive clinical-scale batches of Glucogen-XR Drug Substance manufactured at the South San Francisco facility.

**Table 3.2.S.3.1.2-1: Potency Results for Glucogen-XR DS Batches**

| Batch Number | Manufacture Date | $EC_{50}$ (nM) | 95% CI (nM) | Rel. Potency (%) | Parallelism (p-value) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-Jan-2025 | 0.142 | 0.138–0.146 | 101.4% | 0.88 (Pass) |
| **GLUC-2025-002** | 28-Jan-2025 | 0.139 | 0.135–0.143 | 103.6% | 0.92 (Pass) |
| **GLUC-2025-003** | 15-Feb-2025 | 0.145 | 0.141–0.149 | 99.3% | 0.95 (Pass) |
| **Reference Std** | 01-Nov-2024 | 0.144 | 0.140–0.148 | 100.0% | N/A |

#### 3.2.S.3.1.2.8 Specificity and Interference Studies
To confirm the specificity of the Glucogen-XR cAMP assay, the drug substance was tested against related peptide families.

**Table 3.2.S.3.1.2-2: Cross-Reactivity and Specificity**

| Analyte | Concentration | cAMP Response (Ratio) | % Cross-Reactivity |
| :--- | :--- | :--- | :--- |
| Glucogen-XR | 10 nM | 8,450 | 100% |
| Native GLP-1 (7-36) | 10 nM | 8,120 | 96.1% |
| Glucagon | 1000 nM | 420 | < 0.01% |
| GIP | 1000 nM | 385 | < 0.01% |
| Exendin-4 | 10 nM | 8,900 | 105.3% |

*Interpretation:* The assay shows high specificity for GLP-1R agonists. No significant activation was observed with Glucagon or Glucose-dependent Insulinotropic Polypeptide (GIP) at concentrations 100x the $EC_{50}$ of Glucogen-XR.

#### 3.2.S.3.1.2.9 Robustness Parameters
Robustness was evaluated by introducing deliberate variations in the assay parameters using a Design of Experiments (DoE) approach.

| Parameter | Nominal Value | Tested Range | Impact on $EC_{50}$ |
| :--- | :--- | :--- | :--- |
| Cell Seeding Number | 5,000 cells/well | 4,000 – 6,000 | Negligible ($p > 0.05$) |
| Incubation Temp | $37^\circ$C | $35^\circ$C – $39^\circ$C | Significant (>10% dev) |
| Incubation Time | 30 min | 25 – 35 min | Negligible ($p > 0.05$) |
| IBMX Concentration | 0.5 mM | 0.4 – 0.6 mM | Negligible ($p > 0.05$) |

*Note: Strict temperature control at $37^\circ$C is identified as a Critical Process Parameter (CPP) for the potency assay.*

#### 3.2.S.3.1.2.10 Conclusion
The cell-based cAMP signaling assay is a highly sensitive, precise, and specific method for determining the biological potency of Glucogen-XR. The results from batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003** demonstrate consistent manufacturing quality, with all batches falling within 95-105% of the primary reference standard's activity. This assay remains the primary tool for stability testing and release of the drug substance.

---
**End of Subsection**

---

## Comparison to Reference Material

### **3.2.S.3 CHARACTERIZATION**
### **3.2.S.3.1 ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS**
### **3.2.S.3.1.2 BIOLOGICAL ACTIVITY**
---
#### **Subsection: Comparison to Reference Material (m3-ds-characterization-bio-ref)**

---

### **1.0 INTRODUCTION AND SCOPE**
This section provides a comprehensive comparative analysis of the biological activity of **Glucogen-XR (glucapeptide extended-release)** drug substance (DS) lots relative to the **Google Health Sciences (GHS) Primary Reference Standard (PRS)**, Batch ID: **GLUC-PRS-001**. 

The biological characterization of Glucogen-XR is foundational to ensuring clinical efficacy and safety. As a GLP-1 receptor agonist (GLP-1RA), the therapeutic potency of Glucogen-XR is defined by its ability to bind the human GLP-1 receptor (hGLP-1R) and initiate the intracellular signaling cascade, primarily the activation of adenylate cyclase and the subsequent elevation of cyclic adenosine monophosphate (cAMP).

In accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*), this comparison utilizes a multi-tiered bioassay strategy to evaluate:
1.  **Potency (In Vitro Cell-Based Bioassay):** Quantitation of cAMP induction.
2.  **Receptor Binding Affinity (Surface Plasmon Resonance - SPR):** Measurement of $K_D$, $k_{on}$, and $k_{off}$ kinetics.
3.  **Extended Release Kinetics (In Vitro Release - IVR):** Evaluation of the peptide release profile from the extended-release matrix.

---

### **2.0 REFERENCE MATERIAL STRATEGY**

#### **2.1 Establishment of Primary Reference Standard (GLUC-PRS-001)**
The Primary Reference Standard (PRS) was derived from a highly purified, representative clinical-grade lot (GLUC-2024-V01) produced at the South San Francisco facility. The PRS has undergone exhaustive characterization, including amino acid sequencing, post-translational modification (PTM) mapping, and secondary/tertiary structural analysis (CD, NMR).

#### **2.2 Batch Genealogy for Comparison**
The following batches (Table 1) represent the drug substance lots utilized in this comparative biological activity assessment, encompassing both clinical material and process validation (PV) lots.

**Table 1: Batch Identification for Biological Comparison**
| Batch Number | Type | Scale | Manufacturing Site | Date of Manufacture |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-PRS-001** | Primary Ref Standard | 1000L | SSF-Bldg 3 | 12-JAN-2024 |
| **GLUC-2025-001** | PV Lot 1 | 2000L | SSF-Bldg 3 | 05-FEB-2025 |
| **GLUC-2025-002** | PV Lot 2 | 2000L | SSF-Bldg 3 | 19-FEB-2025 |
| **GLUC-2025-003** | PV Lot 3 | 2000L | SSF-Bldg 3 | 04-MAR-2025 |
| **GLUC-2025-008** | Clinical Stability | 1000L | SSF-Bldg 3 | 12-APR-2025 |

---

### **3.0 ANALYTICAL METHODOLOGY: CELL-BASED BIOASSAY (cAMP)**

#### **3.1 Principle of the Assay**
The biological potency of Glucogen-XR is determined using a reporter gene assay or direct cAMP quantitation in a stable cell line overexpressing the human GLP-1 receptor. For this submission, Google Health Sciences utilizes the **GHS-HEK293-hGLP1R-G6** cell line. 

Potency is calculated using a parallel line assay (PLA) model, where the response of the Test Sample is compared to the Reference Standard across a 10-point dilution curve.

#### **3.2 Step-by-Step Procedure (SOP-BIO-4492)**
1.  **Cell Seeding:** HEK293-hGLP1R cells are seeded at a density of $5.0 \times 10^4$ cells/well in a 96-well white-walled microplate.
2.  **Incubation:** Cells are incubated for 24 hours at $37^\circ\text{C}$ in a $5\% \text{ CO}_2$ environment.
3.  **Sample Preparation:**
    *   Reference Standard (GLUC-PRS-001) and Test Samples (GLUC-2025-XXX) are reconstituted in Assay Buffer (HEPES-buffered DMEM + 0.1% BSA).
    *   Serial dilutions are prepared in a range from $1 \times 10^{-12} \text{ M}$ to $1 \times 10^{-7} \text{ M}$.
4.  **Stimulation:** Media is removed, and cells are stimulated with 50 µL of sample for 30 minutes at $37^\circ\text{C}$.
5.  **Detection:** cAMP levels are measured using the HTRF (Homogeneous Time-Resolved Fluorescence) cAMP Gs kit (Cisbio). 
6.  **Readout:** Fluorescence is measured at 665 nm and 620 nm on a BMG PHERAstar plate reader.

#### **3.3 Statistical Analysis (Four-Parameter Logistic Model)**
The dose-response curve is analyzed using the 4-PL model according to the equation:
$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$
Where:
*   $A$ = Bottom asymptote (minimum response)
*   $B$ = Hill slope (slope factor)
*   $C$ = $EC_{50}$ (concentration achieving 50% of maximal response)
*   $D$ = Top asymptote (maximum response)

**Relative Potency Calculation:**
$$\text{Relative Potency} = \frac{EC_{50} \text{ (Reference)}}{EC_{50} \text{ (Test)}} \times 100\%$$

---

### **4.0 RESULTS: BIOLOGICAL POTENCY COMPARISON**

The following table summarizes the comparative potency results. All test lots must fall within the acceptance criterion of **80% to 125%** of the Reference Standard.

**Table 2: Summary of Relative Potency Results (cAMP Induction)**
| Batch Number | Mean $EC_{50}$ (nM) | 95% CI (nM) | Hill Slope | Relative Potency (%) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-PRS-001** | 0.422 | 0.398 - 0.446 | 1.12 | 100% (Fixed) | N/A |
| **GLUC-2025-001** | 0.418 | 0.392 - 0.444 | 1.15 | 100.9% | Pass |
| **GLUC-2025-002** | 0.431 | 0.405 - 0.457 | 1.09 | 97.9% | Pass |
| **GLUC-2025-003** | 0.425 | 0.401 - 0.449 | 1.11 | 99.3% | Pass |
| **GLUC-2025-008** | 0.440 | 0.412 - 0.468 | 1.14 | 95.9% | Pass |

**Data Interpretation:**
The $EC_{50}$ values for the PV lots (GLUC-2025-001, -002, -003) show remarkable consistency with the Primary Reference Standard. The maximum deviation in relative potency was observed in lot GLUC-2025-008 (4.1% difference), which remains well within the pre-defined regulatory specification.

---

### **5.0 KINETIC BINDING ANALYSIS (SPR)**

To ensure that the molecular interactions between Glucogen-XR and the hGLP-1R are maintained across batches, Surface Plasmon Resonance (SPR) was performed using a Biacore™ T200 instrument.

#### **5.1 Method Parameters (SOP-ANA-882)**
*   **Chip Type:** Series S Sensor Chip CM5.
*   **Ligand Immobilization:** Human GLP-1 Receptor (extracellular domain) immobilized via amine coupling (approx. 500 RU).
*   **Running Buffer:** HBS-EP+ (10 mM HEPES, 150 mM NaCl, 3 mM EDTA, 0.05% v/v Surfactant P20, pH 7.4).
*   **Flow Rate:** 30 µL/min.
*   **Contact Time:** 180 seconds; **Dissociation Time:** 600 seconds.
*   **Regeneration:** 10 mM Glycine-HCl pH 2.0.

#### **5.2 Kinetic Data Comparison**

**Table 3: SPR Kinetic Parameters ($25^\circ\text{C}$)**
| Batch Number | $k_{on}$ ($10^5 \text{ M}^{-1}\text{s}^{-1}$) | $k_{off}$ ($10^{-4} \text{ s}^{-1}$) | $K_D$ (nM) | Binding Affinity vs. PRS (%) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-PRS-001** | $2.45 \pm 0.12$ | $5.12 \pm 0.08$ | $2.09 \pm 0.05$ | 100.0 |
| **GLUC-2025-001** | $2.41 \pm 0.10$ | $5.08 \pm 0.09$ | $2.11 \pm 0.04$ | 99.1 |
| **GLUC-2025-002** | $2.48 \pm 0.15$ | $5.20 \pm 0.11$ | $2.10 \pm 0.06$ | 99.5 |
| **GLUC-2025-003** | $2.44 \pm 0.09$ | $5.15 \pm 0.07$ | $2.11 \pm 0.03$ | 99.1 |

**Calculation of Dissociation Constant ($K_D$):**
$$K_D = \frac{k_{off}}{k_{on}}$$

The results indicate that the binding affinity ($K_D$) remains stable across all commercial-scale PV lots, confirming that the manufacturing process does not alter the peptide’s structural epitopes required for receptor docking.

---

### **6.0 EXTENDED RELEASE BIOLOGICAL INTEGRITY**

Because Glucogen-XR utilizes a proprietary PEGylated-polylactide (PEG-PLA) matrix, it is critical to demonstrate that the biological activity of the peptide is preserved throughout the duration of the extended-release window.

#### **6.1 In Vitro Release (IVR) Bioactivity Protocol**
1.  **Release Conditions:** 100 mg of DS is placed in 10 mL of PBS (pH 7.4) at $37^\circ\text{C}$ with constant agitation.
2.  **Sampling Intervals:** Days 1, 7, 14, 21, and 28.
3.  **Bioactivity Recovery:** The released peptide is collected and tested in the cAMP bioassay described in Section 3.0.
4.  **Requirement:** The specific activity of the released peptide must be $\geq 90\%$ of the initial activity.

**Table 4: Bioactivity of Released Glucogen-XR over 28 Days**
| Batch | Day 1 Potency (%) | Day 14 Potency (%) | Day 28 Potency (%) | Maintenance of Activity |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-PRS-001** | 99.8% | 98.4% | 96.2% | Confirmed |
| **GLUC-2025-001** | 100.2% | 97.9% | 95.8% | Confirmed |
| **GLUC-2025-002** | 98.5% | 97.1% | 94.9% | Confirmed |
| **GLUC-2025-003** | 99.1% | 98.0% | 95.5% | Confirmed |

---

### **7.0 FORCED DEGRADATION AND BIOLOGICAL SENSITIVITY**
To validate the sensitivity of the biological comparison, "Control-Degraded" samples were compared to the Reference Standard.

*   **Oxidized Sample (2% $H_2O_2$):** Showed a 45% reduction in potency ($EC_{50} = 0.767 \text{ nM}$).
*   **Deamidated Sample (pH 9.0, $40^\circ\text{C}$):** Showed a 30% reduction in potency ($EC_{50} = 0.603 \text{ nM}$).

The bioassay’s ability to detect these shifts ensures that the "Comparison to Reference Material" is a robust indicator of product quality and stability.

---

### **8.0 REGULATORY CONFORMANCE STATEMENT**
The comparative biological data for Glucogen-XR batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003** demonstrate high comparability to the Primary Reference Standard **GLUC-PRS-001**. All results meet the criteria specified in **USP <121> Biological Control Assays** and **USP <1033> Biological Assay Validation**.

The manufacturing process consistently produces a drug substance with biological activity that is indistinguishable from the material used in pivotal clinical trials, supporting the consistency of the GHS-CHO-001 expression system and the downstream purification process.

---
**Approvals:**
*Digitally signed by:*
**Dr. Sarah Jenkins**, Head of Biologics Quality, Google Health Sciences
**Dr. Michael Zhao**, Principal Scientist, Regulatory Affairs
**Date:** 15-MAR-2025

---

# Receptor Selectivity Studies

## GLP-1R vs. GIP Receptor Selectivity

### 3.2.S.3.1.2.3 Receptor Selectivity: GLP-1R vs. GIP Receptor Binding and Activation Profiling

#### 1.0 Executive Summary of Selectivity Profile
Glucogen-XR (glucapeptide extended-release), developed by Google Health Sciences, is engineered as a highly potent, long-acting GLP-1 receptor (GLP-1R) agonist. A critical component of the Characterization (m3-ds) section involves demonstrating the exquisite selectivity of Glucogen-XR for the human GLP-1 receptor over the closely related Gastric Inhibitory Polypeptide Receptor (GIPR). Given the structural homology between the GLP-1 peptide family and the GIP peptide (approximately 42% sequence identity), establishing the absence of GIPR cross-reactivity is vital to ensuring the observed clinical outcomes—specifically glucose-dependent insulin secretion and appetite suppression—are mediated through the intended GLP-1R pathway without confounding GIP-mediated adipogenic effects.

This subsection details the comparative pharmacological profiling of Glucogen-XR (Batch GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) against native GLP-1(7-36)amide and native GIP(1-42).

---

#### 2.0 Comparative Sequence Analysis and Structural Rationale
The selectivity of Glucogen-XR is governed by the specific amino acid substitutions at the N-terminal and mid-region of the peptide chain.

| Position (Glucogen-XR) | Native GLP-1 Residue | Native GIP Residue | Glucogen-XR Modification | Rationale for Selectivity |
| :--- | :--- | :--- | :--- | :--- |
| **Pos 1** | His | Tyr | His | Maintenance of GLP-1R N-terminal pocket fit. |
| **Pos 2** | Ala | Ala | Aib (α-aminoisobutyric acid) | DPP-IV resistance; GIPR has lower tolerance for Aib at Pos 2. |
| **Pos 8** | Ser | Ser | Glu | Enhanced helical stability; steric clash with GIPR extracellular domain. |
| **Pos 22** | Gly | Phe | Glu | GLP-1R specificity; GIPR requires bulky hydrophobic at 22. |
| **Pos 26** | Lys | Lys | Lys (Ac-OEG2-OEG2-γGlu-C18) | Large fatty acid side chain sterically hinders GIPR binding. |

---

#### 3.0 Experimental Protocol: In Vitro Receptor Binding Affinity

**3.1 Objective**
To determine the equilibrium dissociation constant ($K_i$) of Glucogen-XR for human GLP-1R and human GIPR using radioligand competition binding assays.

**3.2 Test Systems**
*   **Cell Line A:** CHO-K1 cells stably transfected with human GLP-1R (Target Density: $2.5 \times 10^5$ receptors/cell).
*   **Cell Line B:** CHO-K1 cells stably transfected with human GIPR (Target Density: $2.2 \times 10^5$ receptors/cell).
*   **Membrane Preparation:** Membranes were harvested via nitrogen cavitation at 800 psi, followed by differential centrifugation (100,000 x g for 60 min).

**3.3 Assay Procedure (SOP-GHS-PHARM-088)**
1.  **Buffer:** 50 mM HEPES, 5 mM $MgCl_2$, 1 mM EDTA, 0.1% (w/v) BSA, pH 7.4.
2.  **Radioligands:**
    *   $[^{125}I]-GLP-1(7-36)amide$ (Specific Activity: 2200 Ci/mmol).
    *   $[^{125}I]-GIP(1-42)$ (Specific Activity: 2200 Ci/mmol).
3.  **Incubation:** 50 $\mu g$ of membrane protein incubated with 0.1 nM radioligand and increasing concentrations of Glucogen-XR ($10^{-12}$ to $10^{-5}$ M) for 120 minutes at $25^\circ C$.
4.  **Separation:** Rapid filtration through Whatman GF/B filters presoaked in 0.5% Polyethyleneimine (PEI).
5.  **Detection:** Gamma counting (PerkinElmer Wizard 2).

**3.4 Calculation Formulas**
The $IC_{50}$ values were determined using a non-linear regression (four-parameter logistic fit):
$$Y = Bottom + \frac{Top - Bottom}{1 + 10^{(LogIC_{50} - X) \times HillSlope}}$$
The $K_i$ was calculated using the Cheng-Prusoff equation:
$$K_i = \frac{IC_{50}}{1 + \frac{[L]}{K_d}}$$
*Where $[L]$ is the radioligand concentration and $K_d$ is the dissociation constant of the radioligand.*

---

#### 4.0 Detailed Results: Binding Affinity (Batch Analysis)

Table 1 summarizes the binding affinities across three clinical-grade batches of Glucogen-XR.

**Table 1: Comparative Binding Affinities ($K_i$ in nM)**

| Analyte | GLP-1R $K_i$ (nM) | GIPR $K_i$ (nM) | Selectivity Ratio (GIPR/GLP-1R) |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR (GLUC-2025-001)** | $0.42 \pm 0.05$ | $> 10,000$ | $> 23,800$ |
| **Glucogen-XR (GLUC-2025-002)** | $0.39 \pm 0.04$ | $> 10,000$ | $> 25,600$ |
| **Glucogen-XR (GLUC-2025-003)** | $0.41 \pm 0.06$ | $> 10,000$ | $> 24,300$ |
| **Native GLP-1(7-36)** | $0.28 \pm 0.03$ | $850 \pm 120$ | 3,035 |
| **Native GIP(1-42)** | $> 5,000$ | $0.18 \pm 0.02$ | < 0.00003 |

**Analytical Interpretation:**
Glucogen-XR exhibits sub-nanomolar affinity for the GLP-1R, comparable to the native ligand. Crucially, even at concentrations up to $10 \mu M$, Glucogen-XR failed to reach 50% displacement of the GIPR radioligand. This establishes a selectivity window of $> 20,000$-fold, ensuring no meaningful GIPR occupancy at therapeutic plasma levels ($C_{max} \approx 15-25$ nM).

---

#### 5.0 Functional Selectivity: cAMP Activation Assays

Binding alone does not confirm receptor activation. We conducted functional assays to measure the stimulation of Adenylate Cyclase, the primary downstream effector for both GLP-1R and GIPR ($G_{\alpha s}$ coupling).

**5.1 Protocol (SOP-GHS-PHARM-092)**
*   **Cell Lines:** HEK293 cells expressing human GLP-1R or human GIPR.
*   **Method:** Homogeneous Time-Resolved Fluorescence (HTRF) cAMP dynamic kit.
*   **Procedure:** Cells were seeded at $5 \times 10^3$ cells/well in a 384-well plate. Cells were stimulated with test articles in the presence of 0.5 mM IBMX (phosphodiesterase inhibitor) for 30 minutes at $37^\circ C$.

**5.2 Data Analysis: Potency ($EC_{50}$) and Efficacy ($E_{max}$)**

**Table 2: Functional Potency and Selectivity Data**

| Test Article | Receptor | $EC_{50}$ (pM) | $E_{max}$ (% of Native) |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR** | GLP-1R | $18.5 \pm 2.1$ | $102 \pm 3\%$ |
| **Native GLP-1** | GLP-1R | $12.1 \pm 1.4$ | $100\%$ |
| **Glucogen-XR** | GIPR | $> 1,000,000$ | $< 5\%$ |
| **Native GIP** | GIPR | $7.4 \pm 0.9$ | $100\%$ |

**Statistical Analysis:**
A Two-Way ANOVA was performed to compare the $EC_{50}$ values across batches. No statistically significant difference was observed between batches GLUC-2025-001 through 003 (p > 0.05). The dose-response curve for Glucogen-XR on the GIPR remained flat at all tested concentrations (up to 1 $\mu M$), confirming it is not a partial or full agonist of GIPR.

---

#### 6.0 Secondary Messenger Cross-Talk: Calcium Mobilization
While $G_{\alpha s}$ is the primary pathway, some GLP-1R agonists can trigger $G_{\alpha q}$ mediated Calcium ($Ca^{2+}$) release. To ensure selectivity, we evaluated $Ca^{2+}$ mobilization in CHO-GIPR cells.

**6.1 Methodology**
*   **Indicator:** FLIPR Calcium 6 Assay Kit.
*   **Equipment:** FLIPR Tetra High Throughput Cellular Screening System.
*   **Concentration Range:** 0.1 nM to 10 $\mu M$.

**6.2 Results**
*   **GLP-1R Cells:** Glucogen-XR induced a dose-dependent increase in intracellular $Ca^{2+}$ with an $EC_{50}$ of $145 \pm 18$ nM.
*   **GIPR Cells:** No detectable $Ca^{2+}$ flux was observed for Glucogen-XR at any concentration. Native GIP showed an $EC_{50}$ of $22 \pm 4$ nM in the GIPR-transfected line.

---

#### 7.0 Regulatory Compliance and Standards
These studies were conducted in accordance with:
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **FDA Guidance for Industry:** "Nonclinical Safety Evaluation of Drug-Induced Liver Injury" (where receptor cross-reactivity is relevant to off-target toxicity).
3.  **USP <1225>:** Validation of Compendial Procedures.

**Quality Control Statement:**
All experiments were performed under GLP (Good Laboratory Practice) conditions at the Google Health Sciences Characterization Lab (Building 4, South San Francisco). Raw data are archived in the Electronic Laboratory Notebook (ELN) system under Project ID: GHS-GLUC-2025-RECEPTOR-001.

---

#### 8.0 Conclusion of Selectivity Profile
The data presented in this subsection definitively demonstrate that **Glucogen-XR (glucapeptide extended-release)** is a highly selective agonist for the human GLP-1 receptor. The selectivity ratio exceeds 20,000-fold relative to the GIP receptor in both binding and functional activation assays. This lack of GIPR activity distinguishes Glucogen-XR from dual-agonist compounds (e.g., Tirzepatide) and ensures that its metabolic profile is purely driven by GLP-1R agonism, as required by the clinical development plan for Type 2 Diabetes Mellitus under IND [REDACTED].

---
*Internal Cross-Reference: For data regarding selectivity against the Glucagon Receptor (GCGR), refer to Section 3.2.S.3.1.2.4.*

---

## Off-Target Receptor Screening

# MODULE 3: QUALITY (3.2.S.3 CHARACTERIZATION)
## SECTION: 3.2.S.3.1 ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS
### SUBSECTION: OFF-TARGET RECEPTOR SCREENING AND SELECTIVITY PROFILING

---

#### 3.2.S.3.1.8 Off-Target Receptor Screening

**1. Executive Summary**
Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist developed by Google Health Sciences, has undergone comprehensive off-target receptor screening to ensure safety, minimize potential side effects, and confirm high molecular specificity. Given the structural modifications—including the C-terminal PEGylation and specific amino acid substitutions (Aib8, Glu22, Arg34)—it was imperative to demonstrate that these changes did not introduce de novo affinity for non-target G-protein coupled receptors (GPCRs), ion channels, or enzymes.

The screening program utilized a tiered approach, combining high-throughput primary screens with secondary orthologous validation assays. This assessment was conducted in accordance with *ICH S7A (Safety Pharmacology Studies for Human Pharmaceuticals)* and *ICH S6(R1) (Preclinical Safety Evaluation of Biotechnology-Derived Pharmaceuticals)*.

**2. Investigative Rationale and Strategy**
The therapeutic window of Glucogen-XR is predicated on its high selectivity for the GLP-1 receptor (GLP-1R) over closely related class B1 GPCRs, specifically the Glucagon Receptor (GCGR), Glucose-dependent Insulinotropic Polypeptide Receptor (GIPR), and Glucagon-like Peptide-2 Receptor (GLP-2R).

Off-target binding can lead to adverse clinical outcomes, such as:
*   **GCGR Binding:** Potential for paradoxical hyperglycemia.
*   **GIPR Binding:** Modulation of lipid metabolism outside the intended GLP-1 profile.
*   **GLP-2R Binding:** Risk of unwanted intestinal mucosal growth.
*   **Non-related GPCRs (e.g., hERG, Adrenergic):** Cardiovascular and systemic safety risks.

**3. Test Material Identification**
All studies were conducted using representative clinical-grade batches manufactured at the South San Francisco facility.

| Test Material ID | Batch Number | Purity (%) | Concentration | Manufacturing Date |
| :--- | :--- | :--- | :--- | :--- |
| Glucogen-XR | GLUC-2025-001 | 99.4% | 10 mg/mL | 12-JAN-2025 |
| Glucogen-XR | GLUC-2025-002 | 99.6% | 10 mg/mL | 04-FEB-2025 |
| Glucogen-XR | GLUC-2025-005 | 99.2% | 10 mg/mL | 18-MAR-2025 |

---

#### 4. Primary Screening: The "GHS-G-80" Panel
Google Health Sciences utilized the proprietary GHS-G-80 panel, which screens against 80 critical human targets, including GPCRs, ion channels, transporters, and nuclear receptors.

**4.1 Methodology: Radioligand Binding Assays**
The primary screen utilized competitive radioligand binding assays. Membranes were prepared from recombinant CHO-K1 or HEK293 cells expressing the human target receptors.

*   **Incubation Buffer:** 50 mM Tris-HCl, pH 7.4, 5 mM MgCl2, 0.1% BSA.
*   **Test Concentration:** 10 µM (representing >1000x the therapeutic Cmax).
*   **Detection Method:** Scintillation Proximity Assay (SPA) or filtration using a Brandel harvester.

**4.2 Protocol for GPCR Competitive Binding (SOP-RA-0098)**
1.  Thaw receptor-expressing membranes on ice.
2.  Dilute membranes to a final concentration of 5-20 µg/well in incubation buffer.
3.  Add 10 µL of Glucogen-XR (Batch GLUC-2025-001) to achieve a 10 µM final concentration.
4.  Add the radiolabeled reference ligand (e.g., [125I]-labeled peptide or [3H]-labeled small molecule) at its Kd concentration.
5.  Incubate for 120 minutes at 25°C with gentle orbital shaking (300 rpm).
6.  Terminate the reaction by rapid filtration through GF/B glass fiber filters pre-soaked in 0.3% PEI.
7.  Wash filters 3x with 5 mL of ice-cold 50 mM Tris-HCl.
8.  Measure radioactivity using a TopCount NXT liquid scintillation counter.

**4.3 Results of Primary 80-Target Screen**
Results are expressed as percent inhibition of specific binding. Significant "hits" are defined as ≥50% inhibition.

| Target Class | Receptor Subtype | Ligand Used | % Inhibition (at 10 µM) | Result |
| :--- | :--- | :--- | :--- | :--- |
| **GPCR - Class B** | GLP-1R (Target) | [125I]-GLP-1(7-36) | 99.8% | Positive |
| **GPCR - Class B** | GCGR | [125I]-Glucagon | 4.2% | Negative |
| **GPCR - Class B** | GIPR | [125I]-GIP | 1.8% | Negative |
| **GPCR - Class B** | GLP-2R | [125I]-GLP-2 | 0.9% | Negative |
| **GPCR - Class A** | Adrenergic α1A | [3H]-Prazosin | -2.1% | Negative |
| **GPCR - Class A** | Adrenergic β1 | [3H]-DHA | 3.5% | Negative |
| **GPCR - Class A** | Dopamine D2L | [3H]-Spiperone | 0.4% | Negative |
| **GPCR - Class A** | Muscarinic M1 | [3H]-QNB | -1.2% | Negative |
| **GPCR - Class A** | Serotonin 5-HT2B| [3H]-LSD | 5.3% | Negative |
| **Ion Channel** | hERG (K+ channel) | [3H]-Dofetilide | 2.7% | Negative |
| **Ion Channel** | Nav1.5 (Na+ channel)| [3H]-Batrachotoxin | 1.1% | Negative |
| **Transporter** | SERT (Serotonin) | [3H]-Paroxetine | -0.5% | Negative |

*Note: Negative values represent minor fluctuations in background counts.*

---

#### 5. High-Resolution Selectivity against Class B1 GPCRs
Because Glucogen-XR is a peptide analog of GLP-1, it shares structural homology with Glucagon, GIP, and GLP-2. Therefore, full concentration-response curves were generated for these specific receptors to determine the Selectivity Index (SI).

**5.1 Assay Conditions for IC50 Determination**
*   **Concentration Range:** 1.0 pM to 100 µM (11-point curve).
*   **Cell Line:** GHS-CHO-001 derivative clones stably expressing human GCGR, GIPR, or GLP-2R.
*   **Software:** GraphPad Prism 9.0 using a non-linear regression (four-parameter logistic fit).

**5.2 Comparative IC50 Values (Binding)**

| Batch Number | GLP-1R IC50 (nM) | GCGR IC50 (nM) | GIPR IC50 (nM) | GLP-2R IC50 (nM) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0.24 ± 0.03 | > 25,000 | > 50,000 | > 100,000 |
| **GLUC-2025-002** | 0.22 ± 0.02 | > 25,000 | > 50,000 | > 100,000 |
| **GLUC-2025-005** | 0.26 ± 0.04 | > 25,000 | > 50,000 | > 100,000 |

**5.3 Functional Selectivity (cAMP Activation)**
Binding does not always correlate with activation. To confirm "silent" binding or lack thereof, a functional cAMP accumulation assay was performed using the Cisbio HTRF (Homogeneous Time-Resolved Fluorescence) kit.

**Protocol (SOP-BIO-442):**
1.  Seed cells (2,000 cells/well) in a 384-well white microplate.
2.  Stimulate with Glucogen-XR in the presence of 0.5 mM IBMX (phosphodiesterase inhibitor).
3.  Incubate for 30 minutes at 37°C.
4.  Lyse cells and add d2-labeled cAMP and cryptate-labeled anti-cAMP antibody.
5.  Incubate for 60 minutes at room temperature.
6.  Read 665nm/620nm ratio on a PHERAstar FSX.

**Table 3.2.S.3.1-8A: EC50 and Relative Potency for Functional Activation**

| Receptor | Natural Ligand EC50 (nM) | Glucogen-XR EC50 (nM) | Relative Selectivity (Fold) |
| :--- | :--- | :--- | :--- |
| **GLP-1R** | 0.015 (GLP-1) | 0.042 | 1 (Baseline) |
| **GCGR** | 0.022 (Glucagon) | > 10,000 | > 238,000 |
| **GIPR** | 0.018 (GIP) | > 10,000 | > 238,000 |
| **GLP-2R** | 0.055 (GLP-2) | > 10,000 | > 238,000 |

---

#### 6. In Vitro Cardiac Safety: hERG Inhibition
In alignment with *ICH S7B*, the potential for Glucogen-XR to inhibit the human Ether-à-go-go-Related Gene (hERG) potassium channel was evaluated using automated patch-clamp electrophysiology.

**6.1 System Parameters**
*   **Platform:** SyncroPatch 384PE (Nanion Technologies).
*   **Cell Line:** HEK293-hERG.
*   **Temperature:** 35 ± 2°C (Physiological temperature).
*   **Positive Control:** E-4031 (100 nM).

**6.2 Results**
Application of Glucogen-XR (Batch GLUC-2025-001) at concentrations up to 50 µM (solubility limit in assay buffer) resulted in a mean inhibition of hERG tail current of 1.4% (n=8).

| Concentration (µM) | Mean Inhibition (%) | SEM |
| :--- | :--- | :--- |
| 0.1 | 0.2% | 0.1% |
| 1.0 | 0.5% | 0.2% |
| 10.0 | 0.8% | 0.3% |
| 50.0 | 1.4% | 0.5% |

**Conclusion:** The IC50 for hERG is determined to be > 50 µM. Given the projected clinical Cmax of ~12 nM, the safety margin for hERG-mediated QT prolongation is > 4,000-fold.

---

#### 7. Off-Target Interaction with DPP-IV and Other Peptidases
While Glucogen-XR is designed to be resistant to Dipeptidyl Peptidase IV (DPP-IV), it is essential to ensure it does not act as a competitive inhibitor of the enzyme, which could interfere with the metabolism of endogenous peptides (e.g., PYY, NPY).

**7.1 Enzyme Inhibition Assay**
*   **Enzyme:** Recombinant Human DPP-IV (R&D Systems).
*   **Substrate:** H-Gly-Pro-AMC (fluorogenic).
*   **Glucogen-XR Concentration:** 100 µM.

**Results:**
No significant inhibition of DPP-IV activity was observed.
*   **Control (Sitagliptin):** IC50 = 18 nM.
*   **Glucogen-XR:** IC50 > 100,000 nM.

---

#### 8. Statistical Analysis and Validation Criteria
For a screening assay to be considered valid, the following parameters must be met:
1.  **Z'-Factor:** Must be > 0.5 for all primary screens.
2.  **Reference Ligand IC50:** Must fall within ± 0.5 log units of the historical mean.
3.  **Coefficient of Variation (CV):** Duplicate samples must have a CV < 20%.

**Calculation of Z'-Factor:**
$$Z' = 1 - \frac{3(\sigma_p + \sigma_n)}{|\mu_p - \mu_n|}$$
*Where $\sigma_p$ and $\sigma_n$ are standard deviations of positive and negative controls; $\mu_p$ and $\mu_n$ are the means.*

For Batch GLUC-2025-001 (GLP-1R Binding Screen), the calculated Z'-factor was **0.88**, indicating an excellent assay window.

---

#### 9. Conclusion of Off-Target Profiling
The extensive off-target receptor screening of Glucogen-XR (glucapeptide extended-release) across a broad panel of 80 human targets, supplemented by high-sensitivity functional assays for Class B1 GPCRs and hERG electrophysiology, demonstrates an exceptional selectivity profile.

*   No significant binding was detected at any non-target site at concentrations up to 10 µM.
*   Selectivity for GLP-1R over GCGR, GIPR, and GLP-2R exceeds 200,000-fold in functional assays.
*   No risk of cardiac repolarization interference (hERG) or DPP-IV inhibition was identified.

These data support the conclusion that the clinical effects of Glucogen-XR are mediated exclusively through the GLP-1 receptor, with a negligible risk of off-target toxicity.

---
**References:**
1.  *ICH S7A: Safety Pharmacology Studies for Human Pharmaceuticals (2001).*
2.  *ICH S7B: The Non-clinical Evaluation of the Potential for Delayed Ventricular Repolarization (QT Interval Prolongation) by Human Pharmaceuticals (2005).*
3.  *Knudsen LB, Lau J. The Discovery and Development of Liraglutide and Semaglutide. Front Endocrinol. 2019;10:155.*
4.  *USP <1106> Immunogenicity Assays — Design and Validation of Immunoassays to Detect Anti-Drug Antibodies.*

**End of Subsection.**

---

## Functional Selectivity Assessment

# MODULE 3: QUALITY (DRUG SUBSTANCE CHARACTERIZATION)
## SECTION 3.2.S.3.1: ELUCIDATION OF STRUCTURE AND OTHER CHARACTERISTICS
### SUBSECTION 3.2.S.3.1.4: FUNCTIONAL SELECTIVITY ASSESSMENT (BIAS SIGNALING PROFILING)

---

#### 3.2.S.3.1.4.1 Introduction and Executive Summary

This subsection provides a comprehensive characterization of the functional selectivity (biased signaling) profile of Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences. As a novel GLP-1 receptor (GLP-1R) agonist, Glucogen-XR is engineered to provide sustained glycemic control via a specific pharmacokinetic profile; however, the pharmacodynamic efficacy and safety are intrinsically linked to its intracellular signaling bias.

In accordance with **FDA Guidance for Industry: Characterizing the Pharmacodynamic Effects of Biological Products** and **ICH Q6B**, Google Health Sciences has conducted exhaustive 
*in vitro* assessments to quantify the coupling efficiency of Glucogen-XR to multiple intracellular pathways, including the canonical Gαs-mediated cAMP pathway and the non-canonical β-arrestin recruitment pathways (β-arrestin 1 and 2). 

Functional selectivity, or "signal bias," is a critical quality attribute (CQA) for Glucogen-XR. Literature suggests that GLP-1R agonists exhibiting a bias toward G-protein activation over β-arrestin recruitment may demonstrate superior sustained insulinotropic effects and reduced receptor internalization (tachyphylaxis). The studies detailed herein demonstrate that Glucogen-XR (Batch Series GLUC-2025-001 through GLUC-2025-010) maintains a highly favorable signaling bias, optimized for chronic Type 2 Diabetes Mellitus (T2DM) management.

---

#### 3.2.S.3.1.4.2 Comparative Reference Standards and Test Articles

The following biological entities and batches were utilized in the functional selectivity matrix:

| Test Article / Reference | Batch Number | Source | Purity (RP-HPLC) | Role in Study |
|:---|:---|:---|:---|:---|
| **Glucogen-XR** | GLUC-2025-001 | GHS Manufacturing (SSF) | 99.4% | Clinical Lead Batch |
| **Glucogen-XR** | GLUC-2025-002 | GHS Manufacturing (SSF) | 99.2% | Stability Batch |
| **Glucogen-XR** | GLUC-2025-003 | GHS Manufacturing (SSF) | 99.6% | Validation Batch |
| **Native GLP-1 (7-36)NH2** | REF-GLP1-2024 | USP/Internal Ref | >99.8% | Endogenous Reference |
| **Exenatide (Generic)** | EXEN-2024-05 | Commercial Source | 99.1% | Active Comparator (Peptide) |
| **Liraglutide (Generic)** | LIRA-2024-12 | Commercial Source | 99.3% | Active Comparator (Long-acting) |

---

#### 3.2.S.3.1.4.3 Experimental Methodology and Protocols

##### 3.2.S.3.1.4.3.1 Cell Line Engineering (GHS-CHO-001 Derivative)
The primary system utilized is the proprietary **GHS-CHO-001** cell line (CHO-K1 GS knockout derivative). 
1. **GLP-1R Expression:** Cells were transfected with human GLP-1R cDNA (NCBI Ref Seq: NM_002062.5) using a lentiviral vector system.
2. **Selection:** Stable clones were selected using puromycin (10 µg/mL).
3. **Characterization:** Receptor density ($B_{max}$) was determined via $[^{125}I]$-GLP-1 binding assays to be $450 \pm 50$ fmol/mg protein, ensuring physiological relevance.

##### 3.2.S.3.1.4.3.2 cAMP Accumulation Assay (Gαs Pathway)
*Objective:* To measure the potency ($EC_{50}$) and efficacy ($E_{max}$) of Glucogen-XR in stimulating the primary Gαs-mediated adenylate cyclase pathway.

*Protocol (SOP-GHS-BIO-442):*
1.  **Seeding:** GHS-CHO-001-GLP1R cells are seeded at 5,000 cells/well in 384-well white OptiPlates.
2.  **Starvation:** Cells are incubated for 16 hours in serum-free DMEM/F12.
3.  **Stimulation:** Cells are treated with Glucogen-XR (Batch GLUC-2025-XXX) in a 12-point serial dilution (0.1 pM to 1 µM) in the presence of 500 µM IBMX (phosphodiesterase inhibitor).
4.  **Incubation:** 30 minutes at 37°C.
5.  **Detection:** cAMP levels are quantified using the HTRF (Homogeneous Time-Resolved Fluorescence) cAMP Gs Dynamic kit.
6.  **Analysis:** Fluorescence ratios (665nm/620nm) are converted to cAMP concentrations using a standard curve and analyzed via a four-parameter logistic (4PL) regression.

##### 3.2.S.3.1.4.3.3 β-Arrestin 1 and 2 Recruitment Assays
*Objective:* To determine the recruitment of β-arrestin to the GLP-1R, a marker for receptor desensitization and internalization.

*Protocol (SOP-GHS-BIO-445 - PathHunter® Enzyme Fragment Complementation):*
1.  **System:** CHO-K1 cells expressing ProLink™ (PK)-tagged GLP-1R and Enzyme Acceptor (EA)-tagged β-arrestin (1 or 2).
2.  **Agonist Exposure:** Cells are exposed to Glucogen-XR (GLUC-2025-XXX) for 90 minutes at 37°C.
3.  **Detection:** Addition of PathHunter® detection reagent triggers chemiluminescence upon the interaction of PK and EA.
4.  **Signal Capture:** Luminescence measured on a PerkinElmer EnVision™ plate reader (Model 2105).

---

#### 3.2.S.3.1.4.4 Statistical Framework for Bias Calculation

To quantify functional selectivity, Google Health Sciences employs the **Black and Leff Operational Model of Agonism** to derive the Transduction Coefficient ($\Delta\log(\tau/K_A)$).

**Step 1: Determine the Transduction Coefficient ($\log(\tau/K_A)$)**
For each pathway (cAMP and β-arrestin), the following formula is applied:
$$\text{Response} = \frac{E_{max} \cdot \tau \cdot [A]}{[A] + K_A(1 + \tau \cdot [A]/K_A)}$$
Where:
*   $[A]$ = Concentration of Glucogen-XR.
*   $K_A$ = Functional equilibrium dissociation constant.
*   $\tau$ = Efficacy of the agonist-receptor complex.

**Step 2: Calculate the Relative Transduction Coefficient ($\Delta\log(\tau/K_A)$)**
This value normalizes the test article (Glucogen-XR) against the endogenous reference (Native GLP-1):
$$\Delta\log(\tau/K_A) = \log(\tau/K_A)_{\text{Glucogen-XR}} - \log(\tau/K_A)_{\text{Native GLP-1}}$$

**Step 3: Calculate the Bias Factor ($\Delta\Delta\log(\tau/K_A)$)**
The final bias factor compares the relative efficacy of two pathways:
$$\text{Bias Factor} = 10^{\Delta\Delta\log(\tau/K_A)}$$
$$\Delta\Delta\log(\tau/K_A) = \Delta\log(\tau/K_A)_{\text{Pathway 1}} - \Delta\log(\tau/K_A)_{\text{Pathway 2}}$$

---

#### 3.2.S.3.1.4.5 Results: Functional Signaling Matrix

The data below represents the aggregate results for three GMP production batches of Glucogen-XR.

##### Table 3.2.S.3.1.4.5-A: Potency ($EC_{50}$) and Efficacy ($E_{max}$) Summary

| Pathway | Ligand | Batch ID | $EC_{50}$ (pM) | 95% CI (pM) | $E_{max}$ (% Native) |
|:---|:---|:---|:---|:---|:---|
| **cAMP (Gαs)** | Native GLP-1 | N/A | 12.4 | 10.8 - 14.2 | 100.0 |
| **cAMP (Gαs)** | Glucogen-XR | GLUC-2025-001 | 18.9 | 16.5 - 21.4 | 102.3 |
| **cAMP (Gαs)** | Glucogen-XR | GLUC-2025-002 | 19.2 | 17.1 - 22.0 | 101.8 |
| **β-Arrestin 2** | Native GLP-1 | N/A | 145.2 | 128.0 - 165.0 | 100.0 |
| **β-Arrestin 2** | Glucogen-XR | GLUC-2025-001 | 850.4 | 780.2 - 940.8 | 68.4 |
| **β-Arrestin 2** | Glucogen-XR | GLUC-2025-002 | 875.1 | 795.5 - 965.2 | 67.9 |

##### Table 3.2.S.3.1.4.5-B: Calculation of Signaling Bias (Gαs vs. β-Arrestin 2)

| Batch ID | $\Delta\log(\tau/K_A)$ cAMP | $\Delta\log(\tau/K_A)$ β-Arr2 | $\Delta\Delta\log(\tau/K_A)$ | **Bias Factor** |
|:---|:---|:---|:---|:---|
| GLUC-2025-001 | -0.18 | -1.15 | +0.97 | **9.33** |
| GLUC-2025-002 | -0.19 | -1.18 | +0.99 | **9.77** |
| GLUC-2025-003 | -0.17 | -1.14 | +0.97 | **9.33** |
| *Liraglutide* | -0.12 | -0.45 | +0.33 | 2.14 |

**Interpretation:** A Bias Factor of ~9.5 indicates that Glucogen-XR is approximately 10-fold more selective for the Gαs-mediated cAMP pathway relative to the β-arrestin 2 recruitment pathway when compared to native GLP-1. This "G-protein bias" is intended to minimize receptor internalization and maximize the duration of the insulinotropic response.

---

#### 3.2.S.3.1.4.6 Kinetics of cAMP Signaling (Glucapeptide Extended-Release Profile)

Unlike immediate-release GLP-1R agonists, Glucogen-XR exhibits a unique "sustained-fire" signaling kinetics profile.

**Protocol 3.2.S.3.1.4.6-1: Time-Resolved cAMP Kinetic Profiling**
1. Cells are stimulated with an $EC_{80}$ concentration of Glucogen-XR.
2. cAMP levels are measured at intervals: 5, 15, 30, 60, 120, 240, and 480 minutes.
3. No IBMX is added to allow for natural phosphodiesterase-mediated degradation of cAMP, thereby measuring the *net* signaling flux.

**Kinetic Data (Batch GLUC-2025-001):**
*   **Time to Peak cAMP ($T_{max-cAMP}$):**
    *   Native GLP-1: 12 minutes
    *   Glucogen-XR: 48 minutes
*   **Area Under the Curve (AUC 0-480 min):**
    *   Native GLP-1: 4,500 units
    *   Glucogen-XR: 18,200 units (indicative of extended-release signaling)

---

#### 3.2.S.3.1.4.7 Internalization and Recycling Studies

To confirm the physiological implications of the observed G-protein bias, receptor trafficking was assessed using confocal microscopy and flow cytometry.

**Methodology:**
*   **Equipment:** BD LSRFortessa™ Flow Cytometer and Zeiss LSM 880 Confocal.
*   **Procedure:** Cells were incubated with AlexaFluor-488 labeled Glucogen-XR for 2 hours. Surface GLP-1R was labeled with an APC-conjugated anti-GLP-1R mAb (Clone GHS-GLP1R-Alpha).

**Results:**
*   **Surface Receptor Loss at 2 Hours:**
    *   Native GLP-1 (100 nM): 78% reduction
    *   Glucogen-XR (100 nM): 31% reduction
*   **Recycling Rate ($t_{1/2}$):**
    *   Glucogen-XR showed a 2.4-fold faster return of receptors to the plasma membrane compared to Exenatide, correlating with lower β-arrestin affinity.

---

#### 3.2.S.3.1.4.8 Impact of Manufacturing Process on Functional Selectivity

To ensure process consistency, functional selectivity was assessed across varying scales and potential impurities.

| Process Variable | Batch Impacted | Gαs $EC_{50}$ (pM) | β-Arr2 $EC_{50}$ (pM) | Bias Factor |
|:---|:---|:---|:---|:---|
| **Standard Process** | GLUC-2025-001 | 18.9 | 850.4 | 9.33 |
| **Low-Temp (32°C)** | GLUC-2025-EX01 | 19.5 | 860.2 | 9.12 |
| **High-Temp (38°C)** | GLUC-2025-EX02 | 19.1 | 845.1 | 9.21 |
| **Des-amino Impurity (1%)** | GLUC-IMP-DA01 | 24.5* | 1205.4* | 10.2 |

*\*Note: While the des-amino impurity (a common degradation product) reduces overall potency, the bias toward Gαs is preserved.*

---

#### 3.2.S.3.1.4.9 Conclusion on Functional Selectivity

The characterization of Glucogen-XR (GLUC-2025 series) confirms a consistent, engineered signaling bias toward the Gαs/cAMP pathway. This profile distinguishes Glucogen-XR from first-generation GLP-1R agonists. The data support the therapeutic hypothesis that Glucogen-XR provides prolonged glycemic control with reduced potential for receptor desensitization. All batches tested met the predetermined specification of a Bias Factor $\geq 7.5$ relative to native GLP-1.

---

#### 3.2.S.3.1.4.10 References
1.  **Kenakin, T.** (2019). "Biased Agonism as a Pathway to Drug Discovery." *Pharmacological Reviews*, 71(2), 267-315.
2.  **FDA Guidance Document:** *S6(R1) Preclinical Safety Evaluation of Biotechnology-Derived Pharmaceuticals.*
3.  **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
4.  **Google Health Sciences SOP-GHS-BIO-442:** *Quantitative Determination of cAMP via HTRF in GHS-CHO-001 Cell Lines.*
5.  **Zhang, et al. (2023):** "GLP-1 Receptor Signaling Bias and Clinical Outcomes in T2DM." *Journal of Clinical Endocrinology*, 44, 1012-1029.

---
**Document End: Subsection 3.2.S.3.1.4**
**Author:** *Senior Director, Regulatory Affairs, Google Health Sciences*
**Date:** 24 May 2025
**Approval Status:** Finalized / Electronic Signature Attached [GHS-SIG-99221]

---

# Immunochemical Properties

## Binding to Therapeutic Antibodies if Applicable

### 3.2.S.3.1.4 Immunochemical Properties: Binding to Therapeutic Antibodies (If Applicable)

#### 3.2.S.3.1.4.1 Executive Summary
As Glucogen-XR (glucapeptide extended-release) is a recombinant GLP-1 receptor agonist peptide-fusion construct produced in the proprietary GHS-CHO-001 cell line, characterization of its immunochemical profile is mandatory under **ICH Q6B** and **FDA Guidance for Industry: Immunogenicity Assessment for Therapeutic Protein Products**. 

This section details the extensive binding studies conducted to characterize the interaction between Glucogen-XR and various antibody reagents. While Glucogen-XR is not a monoclonal antibody (mAb) itself, immunochemical characterization is required to:
1.  Verify conformational integrity and epitope mapping.
2.  Establish potency via Surface Plasmon Resonance (SPR) and Enzyme-Linked Immunosorbent Assay (ELISA).
3.  Assess potential cross-reactivity with endogenous GLP-1 antibodies.
4.  Validate the anti-drug antibody (ADA) assay reagents used in Clinical Phase I/II/III trials.

#### 3.2.S.3.1.4.2 Theoretical Framework and Justification
The Glucogen-XR molecule consists of a modified human GLP-1 sequence (7-37) linked to a proprietary extended-release moiety. The maintenance of the N-terminal histidine and the secondary alpha-helical structure is critical for biological activity. Immunochemical binding studies utilize specific monoclonal antibodies (mAbs) targeting the N-terminus, the mid-region, and the C-terminal fusion junction to ensure structural consistency across manufacturing batches (GLUC-2025-001 through GLUC-2025-025).

#### 3.2.S.3.1.4.3 Surface Plasmon Resonance (SPR) Kinetics Data
Kinetic binding analysis was performed using a Biacore™ T200 (Equipment ID: GHS-EQ-SPR-09) to determine the Association Rate Constant ($k_a$), Dissociation Rate Constant ($k_d$), and Equilibrium Dissociation Constant ($K_D$).

**Protocol GHS-SPR-001: Capture Kinetics Method**
1.  **Sensor Chip:** Series S Sensor Chip CM5.
2.  **Immobilization:** Anti-GLP-1 Capture Antibody (Clone GHS-mAb-7A12) immobilized via amine coupling ($pH\ 4.5$) to 8,000 RU.
3.  **Running Buffer:** HBS-EP+ (10 mM HEPES, 150 mM NaCl, 3 mM EDTA, 0.05% v/v Surfactant P20, $pH\ 7.4$).
4.  **Temperature:** $25.0^\circ C \pm 0.1^\circ C$.
5.  **Analyte Concentrations:** 0.625 nM, 1.25 nM, 2.5 nM, 5 nM, 10 nM, 20 nM.

**Table 1: SPR Binding Kinetics for Glucogen-XR Registration Batches (n=3 replicates)**

| Batch Number | Description | $k_a$ ($M^{-1}s^{-1}$) | $k_d$ ($s^{-1}$) | $K_D$ (pM) | Chi² ($\chi^2$) | Rmax (RU) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Reference Standard | $4.22 \times 10^5$ | $1.15 \times 10^{-5}$ | 27.2 | 0.084 | 45.2 |
| **GLUC-2025-002** | GMP Lot (Phase 1) | $4.18 \times 10^5$ | $1.20 \times 10^{-5}$ | 28.7 | 0.091 | 44.8 |
| **GLUC-2025-003** | GMP Lot (Phase 2) | $4.25 \times 10^5$ | $1.12 \times 10^{-5}$ | 26.3 | 0.077 | 46.1 |
| **GLUC-2025-004** | Commercial Scale | $4.20 \times 10^5$ | $1.18 \times 10^{-5}$ | 28.1 | 0.088 | 45.5 |
| **GLUC-2025-005** | Commercial Scale | $4.21 \times 10^5$ | $1.16 \times 10^{-5}$ | 27.5 | 0.082 | 45.0 |
| **GLUC-2025-006** | Commercial Scale | $4.19 \times 10^5$ | $1.19 \times 10^{-5}$ | 28.4 | 0.090 | 44.9 |
| **Acceptance Criteria** | **N/A** | **$3.5-5.0 \times 10^5$** | **$< 2.0 \times 10^{-5}$** | **$20-40$** | **$< 0.1$** | **$40-50$** |

*Statistical Note: Data analyzed using Biacore T200 Evaluation Software v3.0. Global fit 1:1 binding model applied.*

#### 3.2.S.3.1.4.4 Epitope Mapping and Competitive ELISA
To confirm that the manufacturing process does not alter the immunogenic "face" of the GLP-1 moiety, a competitive ELISA was utilized using three distinct monoclonal antibodies:
*   **mAb-N (Clone GHS-N1):** Specific for the His-Ala-Glu-Gly sequence at the N-terminus.
*   **mAb-M (Clone GHS-M5):** Specific for the mid-region amphipathic alpha-helix.
*   **mAb-C (Clone GHS-C9):** Specific for the C-terminal linker region.

**Protocol GHS-ELISA-992: Competitive Inhibition Binding**
1.  **Coating:** Biotinylated Glucogen-XR (Reference Standard GLUC-2025-001) at 100 ng/mL on Streptavidin-coated 96-well plates.
2.  **Competitor:** Unlabeled Glucogen-XR test batch or Endogenous GLP-1.
3.  **Detection:** Horseradish Peroxidase (HRP) conjugated mAb-N.
4.  **Substrate:** TMB (3,3',5,5'-Tetramethylbenzidine).
5.  **Stop Solution:** 2N $H_2SO_4$.

**Table 2: Comparative $IC_{50}$ Values for Epitope Integrity**

| Analyte | $IC_{50}$ (nM) - mAb-N | $IC_{50}$ (nM) - mAb-M | $IC_{50}$ (nM) - mAb-C |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | $1.42 \pm 0.05$ | $2.11 \pm 0.08$ | $0.88 \pm 0.02$ |
| **GLUC-2025-004** | $1.45 \pm 0.04$ | $2.08 \pm 0.07$ | $0.86 \pm 0.03$ |
| **GLUC-2025-010** | $1.41 \pm 0.06$ | $2.15 \pm 0.09$ | $0.89 \pm 0.04$ |
| **Endogenous GLP-1** | $1.20 \pm 0.03$ | $1.95 \pm 0.05$ | No Binding |
| **GLP-1 (9-37) metabolite** | No Binding | $2.02 \pm 0.06$ | No Binding |

#### 3.2.S.3.1.4.5 Assessment of Cross-Reactivity with Anti-Drug Antibodies (ADAs)
In accordance with **USP <1106>** and **USP <1106.1>**, Google Health Sciences developed a bridging immunoassay to detect treatment-emergent ADAs. Characterization included assessing the ability of Glucogen-XR to neutralize a panel of positive control antibodies (PCAs).

**Calculation of Titer and Neutralization Capacity:**
The Neutralization Capacity ($NC$) is calculated as follows:
$$NC = \left( 1 - \frac{OD_{sample}}{OD_{control}} \right) \times 100$$
Where:
*   $OD_{sample}$ = Optical density of the sample containing Glucogen-XR + PCA.
*   $OD_{control}$ = Optical density of the sample containing PCA alone.

**Table 3: Neutralization of Polyclonal Anti-Glucogen-XR Antibodies**

| Batch Number | PCA Concentration ($\mu g/mL$) | Glucogen-XR ($\mu g/mL$) | Observed Inhibition (%) | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-015** | 1.0 | 0.5 | 98.4 | 100.2 |
| **GLUC-2025-015** | 1.0 | 0.05 | 45.6 | 99.8 |
| **GLUC-2025-015** | 1.0 | 0.005 | 4.2 | 101.5 |

#### 3.2.S.3.1.4.6 Stability of Immunochemical Profile (Long-Term Storage)
To ensure that storage conditions at $5^\circ C \pm 3^\circ C$ do not cause conformational changes that alter antibody binding (potentially exposing neo-epitopes), binding affinity was monitored over 24 months.

**Table 4: Long-Term Stability Data - SPR Binding Affinity ($K_D$)**

| Storage Month | Condition | Batch GLUC-2025-001 ($K_D$ pM) | Batch GLUC-2025-004 ($K_D$ pM) |
| :--- | :--- | :--- | :--- |
| T0 | $5^\circ C$ | 27.2 | 28.1 |
| T6 | $5^\circ C$ | 27.5 | 28.3 |
| T12 | $5^\circ C$ | 28.0 | 28.8 |
| T18 | $5^\circ C$ | 27.8 | 29.1 |
| T24 | $5^\circ C$ | 28.4 | 29.5 |
| **T6 (Accelerated)** | $25^\circ C / 60\% RH$ | 35.2 | 36.8 |

#### 3.2.S.3.1.4.7 Conclusion on Immunochemical Properties
Comprehensive binding studies using SPR and ELISA confirm that Glucogen-XR maintains a consistent immunochemical profile across all clinical and commercial batches (GLUC-2025-XXX). The N-terminal integrity required for GLP-1 receptor activation is preserved, and the fusion junction exhibits predictable binding kinetics with therapeutic-grade analytical antibodies. No significant neo-epitope formation was observed during stability testing, supporting the safety and efficacy profile of the drug substance.

#### 3.2.S.3.1.4.8 References
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **FDA Guidance (2019):** Immunogenicity Assessment for Therapeutic Protein Products.
3.  **USP <1106>:** Immunogenicity Assays — Design and Validation of Immunoassays to Detect Anti-Drug Antibodies.
4.  **Google Health Sciences Internal Report:** GHS-RPT-2024-088: Structural Integrity of GLP-1 Peptides.

---

## Epitope Mapping

### 3.2.S.3.1.4 Immunochemical Properties: Epitope Mapping of Glucogen-XR (glucapeptide)

#### 1. Executive Summary: Epitope Mapping and Structural Immunogenicity Assessment
The immunochemical characterization of Glucogen-XR (glucapeptide), manufactured by Google Health Sciences, involves a multi-dimensional approach to define the primary, secondary, and tertiary antigenic determinants. As a long-acting GLP-1 receptor agonist, Glucogen-XR contains a modified peptide backbone designed for extended pharmacokinetics. Epitope mapping is critical for assessing potential immunogenicity, ensuring batch-to-batch consistency, and confirming that the structural modifications (PEGylation and fatty acid acylation) do not create neo-epitopes that could elicit a neutralizing antibody (NAb) response.

This section details the high-resolution epitope mapping conducted on three representative GMP batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) using Hydrogen-Deuterium Exchange Mass Spectrometry (HDX-MS), Peptide Scanning (PepScan) ELISA, and Surface Plasmon Resonance (SPR) competition assays.

#### 2. Regulatory Compliance and Guidelines
All studies were performed in accordance with the following regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **FDA Guidance for Industry:** Immunogenicity Assessment for Therapeutic Protein Products (2019).
*   **USP <1106>:** Immunogenicity Assays — Design and Validation of Immunoassays to Detect Anti-Drug Antibodies.
*   **EMA/CHMP/BMWP/14327/2006:** Guideline on Immunogenicity Assessment of Biotechnology-derived Therapeutic Proteins.

#### 3. Characterization Strategy and Methodology
The epitope mapping program for Glucogen-XR was executed via a "Tiered Orthogonal Approach" to identify both linear and conformational epitopes.

##### 3.1. Methodology Overview
| Technique | Objective | Scope |
| :--- | :--- | :--- |
| **Peptide Scanning (PepScan)** | Identification of linear B-cell epitopes | 15-mer overlapping synthetic peptides |
| **HDX-MS** | Identification of conformational epitopes | Intact protein backbone dynamics |
| **Alanine Scanning Mutagenesis** | Identification of critical binding residues | Point-mutated Glucogen-XR variants |
| **SPR Competition Analysis** | Evaluation of epitope overlapping | mAb-Target interaction kinetics |

---

#### 4. Detailed Protocol: High-Resolution HDX-MS Mapping
HDX-MS was utilized to determine the solvent accessibility of the Glucogen-XR peptide backbone when bound to the GLP-1 receptor (GLP-1R) extracellular domain (ECD).

##### 4.1. Equipment and Reagents
*   **Mass Spectrometer:** Waters Synapt G2-Si HDMS with ESI source.
*   **HPLC System:** Waters ACQUITY UPLC M-Class with HDX Manager.
*   **Protease:** Immobilized Pepsin Column (2.1 x 30 mm).
*   **Quench Buffer:** 100 mM Potassium Phosphate, 0.5 M TCEP, 4 M Guanidine HCl, pH 2.5 at 0°C.
*   **Labelling Buffer:** 10 mM PBS in $D_2O$ (99.9% D), pD 7.4.

##### 4.2. Step-by-Step Procedure
1.  **Preparation:** Equilibrate Glucogen-XR (Batch GLUC-2025-001) and GLP-1R ECD in a 1:1.2 molar ratio.
2.  **Deuterium Labeling:** Initiate exchange by diluting 5 $\mu$L of protein complex into 45 $\mu$L of $D_2O$ labeling buffer at 25°C.
3.  **Timepoints:** Incubation intervals: 10s, 60s, 600s, 3600s, and 14400s.
4.  **Quenching:** Stop the reaction by adding 50 $\mu$L of ice-cold Quench Buffer (pH 2.5).
5.  **Proteolysis:** Inject into the pepsin column at 100 $\mu$L/min in 0.1% Formic Acid.
6.  **Separation:** Peptides are trapped and separated on a C18 UPLC column at 0°C to minimize "back-exchange."
7.  **Analysis:** MS/MS identification of peptic fragments and calculation of Deuterium uptake using DynamX 3.0 software.

##### 4.3. Mathematical Calculation of Deuterium Incorporation ($D$)
The percentage of deuterium incorporation is calculated as:
$$D\% = \frac{m_{obs}(t) - m_{0\%}}{m_{100\%} - m_{0\%}} \times 100$$
Where:
*   $m_{obs}(t)$ = Observed centroid mass at time $t$.
*   $m_{0\%}$ = Mass of the undeuterated peptide.
*   $m_{100\%}$ = Mass of the fully deuterated control.

---

#### 5. Results: Linear Epitope Mapping (PepScan)
Overlapping 15-mer peptides (offset by 3 amino acids) covering the entire sequence of Glucogen-XR were synthesized and screened against polyclonal anti-drug antibodies (ADA) derived from hyper-immunized cynomolgus monkeys and humanized mice.

**Table 1: PepScan Reactivity Matrix (Batch: GLUC-2025-001)**
| Peptide ID | Sequence Segment | ADA Binding (OD 450nm) | Relative Immunogenicity |
| :--- | :--- | :--- | :--- |
| P-01 | HAEGTFTSDVSSYLE | 0.102 | Negligible |
| P-02 | GTFTSDVSSYLEGQA | 0.115 | Negligible |
| P-03 | TSDVSSYLEGQAAKE | 0.450 | Low |
| P-04 | VSSYLEGQAAKEFIA | 1.890 | **High (Immunodominant)** |
| P-05 | YLEGQAAKEFIAWLV | 2.120 | **High (Immunodominant)** |
| P-06 | GQAAKEFIAWLVKGR | 1.450 | Moderate |
| P-07 | AKEFIAWLVKGRG-R | 0.098 | Negligible |

*Note: The sequence segment "YLEGQAAKEFIA" (P-04/P-05) shows the highest reactivity, corresponding to the amphipathic $\alpha$-helix region of the glucapeptide.*

---

#### 6. Conformational Epitope Analysis: Glucogen-XR vs. Native GLP-1
To ensure that the extended-release modifications (the C-terminal spacer and fatty acid tail) do not alter the native epitope profile, a comparative HDX study was performed.

**Table 2: Protection Factors in Glucogen-XR vs. GLP-1 Native**
| Residue Range | Native GLP-1 Exchange (%) | Glucogen-XR Exchange (%) | $\Delta$ Exchange (%) | Interpretation |
| :--- | :--- | :--- | :--- | :--- |
| 1 - 7 | 85.4 | 86.1 | +0.7 | N-terminus Flexible |
| 8 - 15 | 42.3 | 41.9 | -0.4 | Conserved $\alpha$-helix |
| 16 - 25 | 15.2 | 14.8 | -0.4 | Receptor Binding Core |
| 26 - 37 | 55.1 | 62.3 | +7.2 | Modification Site |

**Statistical Analysis of Variance (ANOVA):**
$F = \frac{MS_{between}}{MS_{within}}$. Resulting $p$-value for the structural core (residues 8-25) was 0.89, indicating no statistically significant conformational difference between Glucogen-XR and the reference peptide in the critical binding domain.

---

#### 7. Site-Directed Mutagenesis (Alanine Scanning)
To pinpoint individual amino acids contributing to the epitope's binding energy ($\Delta\Delta G_{binding}$), Alanine substitution was performed on the immunodominant region (residues 15-22).

**Table 3: Alanine Scanning Results (Binding to Reference mAb-GHS-01)**
| Variant | Residue Mutation | $K_D$ (M) via SPR | Fold Change in Affinity | Role in Epitope |
| :--- | :--- | :--- | :--- | :--- |
| Wild Type | N/A | $1.2 \times 10^{-10}$ | 1.0 | Baseline |
| V-15A | Tyr15 $\rightarrow$ Ala | $4.5 \times 10^{-8}$ | 375 | **Critical Core** |
| V-16A | Leu16 $\rightarrow$ Ala | $2.1 \times 10^{-10}$ | 1.7 | Peripheral |
| V-17A | Glu17 $\rightarrow$ Ala | $8.9 \times 10^{-10}$ | 7.4 | Minor |
| V-19A | Gln19 $\rightarrow$ Ala | $5.6 \times 10^{-8}$ | 466 | **Critical Core** |
| V-22A | Lys22 $\rightarrow$ Ala | $1.1 \times 10^{-10}$ | 0.9 | Non-contributing |

---

#### 8. Batch Consistency in Epitope Presentation
To satisfy FDA requirements for manufacturing consistency, three separate GMP batches were analyzed via HDX-MS and Peptide Mapping.

**Table 4: Inter-batch Comparison of Epitope Accessibility**
| Batch Number | Manufacture Date | Purity (%) | Major Epitope Recovery (%) | Conformational Similarity Index |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 99.4 | 98.2 | 0.998 |
| GLUC-2025-002 | 02-FEB-2025 | 99.1 | 97.9 | 0.997 |
| GLUC-2025-003 | 15-MAR-2025 | 99.6 | 98.5 | 0.999 |

*Reference Standard: GHS-REF-GLUC-V1*

---

#### 9. Impact of Glycosylation and Post-Translational Modifications (PTMs)
Glucogen-XR is produced in GHS-CHO-001 cells. While the peptide backbone is not N-glycosylated, O-glycan heterogeneities at the C-terminal extension were evaluated for epitope masking.
*   **Method:** Mass spectrometric analysis after neuraminidase treatment.
*   **Observation:** Sialic acid capping on the C-terminal Serine residues reduces the binding affinity of polyclonal ADA by approximately 12%, suggesting a minor protective effect of the glycan shield against immune recognition.

#### 10. Summary and Conclusion
Epitope mapping of Glucogen-XR (glucapeptide) confirms:
1.  The primary immunodominant epitope is located within the residues **YLEGQAAK**.
2.  The secondary structure (the central $\alpha$-helix) is essential for epitope integrity; denaturation leads to a 100-fold decrease in ADA recognition.
3.  Modifications for extended release (PEG/Acylation) do not introduce de novo linear epitopes.
4.  Manufacturing batches **GLUC-2025-001, -002, and -003** demonstrate exceptional consistency in their immunochemical profiles.

The data presented in this section supports the conclusion that Glucogen-XR maintains a structural profile comparable to endogenous GLP-1 in its receptor-binding domain, minimizing the risk of neutralizing antibody formation against the active site.

---
**Footnotes:**
1. Google Health Sciences internal protocol GHS-SOP-5542 (High-Resolution HDX-MS).
2. Data processed using BioPharma Finder™ 4.1.
3. Protein Databank (PDB) coordinates for GLP-1R complex: 5VAI.

---

## Immunogenicity Risk Assessment

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.3 CHARACTERIZATION
### SECTION 3.2.S.3.2 IMMUNOCHEMICAL PROPERTIES: IMMUNOGENICITY RISK ASSESSMENT

---

#### 3.2.S.3.2.1 Executive Summary of Immunogenicity Strategy
The immunogenicity risk assessment for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences, follows a multi-tiered, risk-based approach as outlined in **FDA Guidance for Industry: Immunogenicity Assessment for Therapeutic Protein Products (2014)** and **ICH S6(R1) Preclinical Safety Evaluation of Biotechnology-Derived Pharmaceuticals**. 

Glucogen-XR is a synthetic-recombinant hybrid glucapeptide produced in the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line. While the primary sequence shares 94% homology with endogenous human GLP-1 (7-36), the extended-release profile achieved via the proprietary C-terminal "G-Cloud-Linker" and lipid-conjugation moiety necessitates a comprehensive evaluation of potential neo-epitopes, impurities (Host Cell Proteins - HCPs), and product-related aggregates that may enhance immunogenicity.

---

#### 3.2.S.3.2.2 Product-Specific Risk Factors
The assessment of immunogenicity risk is categorized into three primary vectors: (1) Molecule-specific factors, (2) Process-specific factors, and (3) Patient/Indication-specific factors.

##### 3.2.S.3.2.2.1 Primary Sequence and Structure-Based Risk
The primary sequence of Glucogen-XR was analyzed using the *In Silico* Epivax-GHS Algorithm (Version 4.2). 

**Table 1: *In Silico* T-cell Epitope Mapping (MHC Class II Binding Affinity)**
| Peptide Fragment (15-mer) | Sequence ID | Predicted Affinity (K_d nM) | Binding Score (Z-score) | Relative Risk Category |
|:---|:---|:---|:---|:---|
| GLUC-1-15 | HAEGTFTSDVSSYLE | 45.2 | 1.1 | Low |
| GLUC-12-26 | SYLEGQAAKEFIAWL | 12.8 | 2.4 | Moderate |
| GLUC-25-39 | WLVKGRG-LINKER | 240.5 | 0.4 | Low |
| GLUC-Link-Lipid | GGGGS-C16-PALM | 890.1 | -0.2 | Negligible |

*Calculations for Immunogenicity Score (IS):*
The IS is derived using the formula:
$$IS = \sum_{i=1}^{n} (W_i \times A_i)$$
Where:
- $W_i$ = Weighting factor based on HLA frequency in the T2DM population.
- $A_i$ = Normalized affinity score.
For Glucogen-XR, the cumulative $IS$ was calculated at **18.4**, well below the threshold of **25.0** typically associated with high-risk biologics.

##### 3.2.S.3.2.2.2 Glycosylation and Post-Translational Modifications (PTMs)
Glucogen-XR is non-glycosylated; however, the lipid-conjugation site at Lysine-26 (K26) presents a potential risk for "hapten-like" behavior. 

**Table 2: PTM Characterization and Immunogenic Potential (Batch GLUC-2025-001 through GLUC-2025-010)**
| Batch Number | Deamidation (%) | Oxidation (%) | Truncation (%) | Lipid Occupancy (%) |
|:---|:---|:---|:---|:---|
| GLUC-2025-001 | 0.42 | 0.11 | <0.05 | 99.8 |
| GLUC-2025-002 | 0.38 | 0.15 | <0.05 | 99.7 |
| GLUC-2025-005 | 0.45 | 0.12 | <0.05 | 99.9 |
| **Specification** | **≤ 2.0%** | **≤ 1.0%** | **≤ 0.5%** | **≥ 98.0%** |

---

#### 3.2.S.3.2.3 Impurity-Related Immunogenicity Risk
Host Cell Proteins (HCPs) from the GHS-CHO-001 line are monitored via a proprietary 4G-ELISA.

##### 3.2.S.3.2.3.1 Host Cell Protein (HCP) Profile
High-sensitivity Mass Spectrometry (LC-MS/MS) was used to identify residual HCPs. Total HCP levels must remain below 10 ppm per dose.

**Table 3: Residual HCP Analysis in Clinical Batches**
| Analyte | Method | Sensitivity (LOD) | Result (GLUC-2025-004) | Result (GLUC-2025-007) |
|:---|:---|:---|:---|:---|
| Total HCP | GHS-ELISA-01 | 0.5 ng/mg | 2.1 ng/mg | 1.8 ng/mg |
| DNA (Residual) | qPCR | 1 pg/mg | <0.1 pg/mg | <0.1 pg/mg |
| Protein A (Leached) | ELISA | 0.2 ng/mL | N/A (Non-Affinity) | N/A |

---

#### 3.2.S.3.2.4 Analytical Procedure: Anti-Drug Antibody (ADA) Assay Development
The strategy for ADA detection follows the **FDA 2019 Guidance for Industry: Assay Development and Validation for Immunogenicity Testing**.

##### 3.2.S.3.2.4.1 Screening Assay Protocol (GHS-SOP-IMM-09)
1. **Coating:** 96-well Meso Scale Discovery (MSD) plates are coated with 1.0 µg/mL of Glucogen-XR in PBS (Batch GLUC-2025-REF).
2. **Blocking:** Plates are blocked with 3% BSA in PBST for 2 hours at 25°C.
3. **Sample Preparation:** Human serum samples are diluted 1:10 in acid-dissociation buffer (300 mM Acetic Acid) to dissociate pre-existing drug-ADA complexes.
4. **Neutralization:** Samples are neutralized with 1M Tris-HCl (pH 9.0) containing Biotinylated-Glucogen-XR and Sulfo-Tagged-Glucogen-XR.
5. **Incubation:** The bridge complex is allowed to form overnight (16 hours) at 4°C.
6. **Detection:** Plates are read on the MSD Sector S 600.

##### 3.2.S.3.2.4.2 Determination of Cut-Point (CP)
The Screening Cut-Point (SCP) was determined using 50 drug-naïve individual human serum samples from T2DM patients.
*   **Statistical Analysis:** 95th percentile using a One-way ANOVA to identify outliers (Tukey’s test).
*   **Calculated SCP:** 1.15 (Normalized Ratio).
*   **Confirmatory Cut-Point (CCP):** 20.4% Signal Inhibition (based on 99th percentile).

---

#### 3.2.S.3.2.5 Comparative Immunogenicity Assessment
Google Health Sciences performed a head-to-head *in vitro* T-cell proliferation assay (MAPPS - MHC Associated Peptide Proteomics) comparing Glucogen-XR to the reference product (Generic Liraglutide).

**Table 4: T-Cell Stimulation Index (SI) Comparison**
| Donor ID | HLA Type | Glucogen-XR (SI) | Ref Product (SI) | Positive Control (KLH) |
|:---|:---|:---|:---|:---|
| GHS-H-001 | DRB1*04:01 | 1.12 | 1.45 | 12.4 |
| GHS-H-002 | DRB1*07:01 | 0.98 | 1.10 | 15.1 |
| GHS-H-003 | DRB1*15:01 | 1.25 | 1.30 | 10.8 |
| **Mean SI** | | **1.11** | **1.28** | **12.7** |

*Interpretation:* An SI < 2.0 is considered non-stimulatory. Glucogen-XR demonstrates a significantly lower immunogenic footprint compared to existing GLP-1 therapies, likely due to the "G-Cloud" stabilization technology which minimizes sub-visible particle formation.

---

#### 3.2.S.3.2.6 Stability-Induced Immunogenicity Risk
Aggregation is a known driver of immunogenicity. Glucogen-XR (Batch GLUC-2025-009) was subjected to accelerated stress (40°C/75% RH for 6 months).

**Table 5: Aggregation and Sub-visible Particle Count (USP <788>)**
| Storage Condition | SEC-HPLC (% Monomer) | MFI (Particles ≥10µm) | MFI (Particles ≥25µm) |
|:---|:---|:---|:---|
| T=0 | 99.9% | 142 / mL | 8 / mL |
| T=3mo (5°C) | 99.8% | 155 / mL | 12 / mL |
| T=6mo (25°C) | 99.4% | 410 / mL | 45 / mL |
| T=6mo (40°C) | 97.8% | 1,850 / mL | 210 / mL |

*Note: Even under accelerated stress, the particle counts remain significantly below the USP <788> limits of 6,000 per container for ≥10µm.*

---

#### 3.2.S.3.2.7 Clinical Monitoring Plan
The Phase III clinical program (GHS-GLUC-301) incorporates a tiered ADA testing strategy:
1.  **Tier 1: Screening** (Sensitivity: 5 ng/mL).
2.  **Tier 2: Confirmation** (Competitive inhibition).
3.  **Tier 3: Titration** (Serial dilution to determine magnitude).
4.  **Tier 4: Neutralizing Antibody (NAb) Assay** (Cell-based cAMP induction assay using GLP-1R transfected HEK293 cells).

**Calculation of NAb Neutralization Capacity:**
$$% Neutralization = \left( 1 - \frac{RLU_{Sample} - RLU_{Blank}}{RLU_{Positive Control} - RLU_{Blank}} \right) \times 100$$

---

#### 3.2.S.3.2.8 Regulatory References
1.  **USP <1106>** - Immunogenicity Assays — Design and Validation of Immunoassays to Detect Anti-Drug Antibodies.
2.  **ICH Q6B** - Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **FDA Guidance (2019)** - Immunogenicity Testing of Therapeutic Protein Products — Developing and Validating Assays for Anti-Drug Antibody Detection.
4.  **EMA/CHMP/BMWP/14327/2006** - Guideline on Immunogenicity assessment of biotechnology-derived therapeutic proteins.

---

#### 3.2.S.3.2.9 Conclusion of Risk Assessment
Based on the *in silico* modeling, low HCP levels (GLUC-2025-XXX series), and the absence of significant T-cell stimulation in MAPPS assays, the immunogenicity risk for Glucogen-XR is categorized as **LOW**. The extended-release lipid moiety does not introduce novel immunogenic "hotspots," and the manufacturing process at the South San Francisco facility maintains high product purity, minimizing the risk of adjuvant-like effects from impurities.

[End of Section 3.2.S.3.2]

---

# Physicochemical Properties

## pH and Ionic Strength Effects

### **3.2.S.3.1.4 pH and Ionic Strength Effects**

#### **1. Scope and Objective**
This subsection provides a comprehensive characterization of the physicochemical stability and structural integrity of **Glucogen-XR (glucapeptide extended-release)** under varying conditions of hydrogen ion concentration (pH) and ionic strength ($\mu$). As a complex GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line, Glucogen-XR exhibits a sophisticated higher-order structure (HOS) that is sensitive to the electrostatic environment.

The primary objectives of these studies were:
1.  To define the **Stability Landscape** of the drug substance (DS) across a pH range of 2.0 to 10.0.
2.  To evaluate the impact of salt concentration (0 mM to 500 mM NaCl) on protein solubility, aggregation kinetics, and tertiary folding.
3.  To determine the **Isoelectric Point (pI)** and the net charge distribution using capillary isoelectric focusing (cIEF).
4.  To establish critical process parameters (CPPs) for downstream purification and long-term storage conditions.

---

#### **2. Experimental Methodology and Analytical Protocols**

##### **2.1 Sample Preparation and Buffering Systems**
To ensure accurate assessment without interference from specific buffer ions, a "Universal Buffer System" was employed for pH mapping.

**Protocol GLUC-SOP-552: Preparation of Multi-Component Buffer Matrix**
*   **Buffer Components:** 20 mM Citrate, 20 mM Phosphate, 20 mM Borate, and 20 mM Histidine.
*   **pH Adjustment:** 1.0 M HCl or 1.0 M NaOH was used to titrate samples to the target pH (± 0.02 units).
*   **Ionic Strength Adjustment:** Stock solutions of 5.0 M NaCl (TraceSelect grade) were added to reach targeted molarity.
*   **Protein Concentration:** Samples were standardized to 10.0 mg/mL ± 0.5 mg/mL using a Mettler Toledo analytical balance and UV-Vis ($A_{280}$) verification (Extinction Coefficient $\epsilon = 1.45 \text{ mL}\cdot\text{mg}^{-1}\cdot\text{cm}^{-1}$).

##### **2.2 Analytical Techniques**
1.  **Circular Dichroism (CD) Spectroscopy:** Far-UV (190-260 nm) for secondary structure and Near-UV (250-320 nm) for tertiary environment.
2.  **Dynamic Light Scattering (DLS):** To measure the hydrodynamic radius ($R_h$) and polydispersity index (PDI) using a Malvern Zetasizer Ultra.
3.  **Size-Exclusion Chromatography (SEC-HPLC):** To quantify High Molecular Weight Species (HMWS) and Low Molecular Weight Species (LMWS).
4.  **Differential Scanning Calorimetry (DSC):** To determine the melting temperature ($T_m$) and enthalpy of unfolding ($\Delta H$).

---

#### **3. Detailed pH Profiling Results**

##### **3.1 pH-Dependent Solubility and Physical State**
Glucogen-XR contains multiple acidic and basic residues (Asp, Glu, Lys, Arg, His). The solubility profile follows a typical U-shaped curve, with minimum solubility observed near the theoretical pI.

**Table 1: Solubility and Aggregation Status as a Function of pH**
*Batch: GLUC-2025-001; Temperature: 25°C; Ionic Strength: 150 mM NaCl*

| pH Point | Solubility (mg/mL) | % Monomer (SEC) | $R_h$ (nm) | PDI | Visual Appearance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2.5 | > 100 | 99.4% | 3.21 | 0.08 | Clear, colorless |
| 3.5 | 88.2 | 98.2% | 3.45 | 0.12 | Clear |
| 4.5 | 12.4 | 82.5% | 12.80 | 0.35 | Opalescent |
| **5.2 (pI)**| **0.85** | **45.1%** | **45.20** | **0.62** | **Visible Precipitate** |
| 6.0 | 45.3 | 94.2% | 4.10 | 0.15 | Slightly hazy |
| 7.4 (Phys) | > 100 | 99.8% | 3.15 | 0.05 | Clear, colorless |
| 8.5 | > 100 | 99.5% | 3.12 | 0.06 | Clear |
| 10.0 | 92.1 | 96.4% | 3.80 | 0.18 | Clear |

**Analysis of Results:**
The drug substance demonstrates maximum instability and aggregation between pH 4.5 and 5.8. This coincides with the determined isoelectric point ($pI = 5.23$). At this pH, the net charge approaches zero, reducing inter-peptide electrostatic repulsion and facilitating hydrophobic collapse.

##### **3.2 Impact on Secondary and Tertiary Structure (CD Spectroscopy)**
The $\alpha$-helical content of Glucogen-XR is a critical quality attribute (CQA) for GLP-1 receptor binding.

**Table 2: Secondary Structure Composition (Mean Residue Ellipticity at 222 nm)**
*Batch: GLUC-2025-004; Buffer: 10 mM Phosphate; $\mu = 50 \text{ mM}$*

| pH | $[\theta]_{222} \text{ (deg}\cdot\text{cm}^2\cdot\text{dmol}^{-1})$ | % $\alpha$-Helix | % $\beta$-Sheet | % Random Coil |
| :--- | :--- | :--- | :--- | :--- |
| 3.0 | -18,450 | 42.1 | 12.4 | 45.5 |
| 5.0 | -12,100 | 28.5 | 35.6 | 35.9 |
| 7.0 | -22,150 | 51.2 | 8.2 | 40.6 |
| 8.5 | -21,980 | 50.8 | 8.5 | 40.7 |

*Note: The significant decrease in $\alpha$-helix and increase in $\beta$-sheet at pH 5.0 indicates the formation of intermolecular $\beta$-structures characteristic of pre-amyloid aggregates.*

---

#### **4. Ionic Strength Effects**

Ionic strength ($\mu$) modulates the Debye screening length ($\kappa^{-1}$), which dictates the range of electrostatic interactions between Glucogen-XR molecules.

##### **4.1 Determination of Second Virial Coefficient ($B_{22}$)**
The $B_{22}$ was measured via Static Light Scattering (SLS) to quantify the protein-protein interaction potential.

**Formula:**
$$\frac{Kc}{R_{\theta}} = \frac{1}{M_w} + 2B_{22}c$$
*Where $K$ is the optical constant, $c$ is concentration, $R_{\theta}$ is the Rayleigh ratio, and $M_w$ is the weight-average molecular weight.*

**Table 3: $B_{22}$ Values at Variable Ionic Strength**
*Batch: GLUC-2025-007; pH 7.4 (Fixed)*

| NaCl (mM) | $B_{22} (10^{-4} \text{ mol}\cdot\text{mL}/\text{g}^2)$ | Interpretation |
| :--- | :--- | :--- |
| 0 | + 4.52 | Strong Repulsion (Stable) |
| 50 | + 2.10 | Moderate Repulsion |
| 150 | + 0.85 | Balanced Interactions |
| 300 | - 1.20 | Attractive Forces (Aggregation Risk) |
| 500 | - 4.80 | Strong Attraction (Salting Out) |

**Conclusion on Ionic Strength:**
Glucogen-XR is stabilized by low-to-moderate ionic strength. High salt concentrations (> 300 mM NaCl) lead to "charge screening," where the protective hydration shell is disrupted, exposing hydrophobic patches and leading to salt-induced aggregation.

---

#### **5. Conformational Stability (DSC Studies)**

To assess the energetic barriers to unfolding, Differential Scanning Calorimetry was performed across a matrix of pH and Salt.

**Table 4: Thermodynamic Parameters of Glucogen-XR Unfolding**
*Equipment: MicroCal PEAQ-DSC; Scan Rate: 60°C/hr*

| Sample ID | pH | NaCl (mM) | $T_m$ (°C) | $\Delta H \text{ (kcal/mol)}$ | $T_{onset}$ (°C) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-002 | 4.0 | 150 | 58.4 | 102.5 | 51.2 |
| GLUC-2025-002 | 5.2 | 150 | 52.1 | 78.4 | 44.5 |
| GLUC-2025-002 | 7.4 | 150 | 68.9 | 145.2 | 62.8 |
| GLUC-2025-002 | 7.4 | 0 | 71.2 | 158.9 | 65.1 |
| GLUC-2025-002 | 7.4 | 500 | 62.3 | 112.1 | 55.4 |

---

#### **6. Regulatory Context and Compliance**

The studies described in this section were conducted in accordance with:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **USP <1053>:** Capillary Electrophoresis.
*   **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.

**Data Integrity Statement:**
All raw data files (Zetasizer .zxt, DSC .itc, SEC .lcd) are archived in the Google Cloud Life Sciences GxP-compliant repository (Project ID: GHS-GLUC-STAB-2025).

#### **7. Summary of Findings for Formulation Development**
Based on the extensive pH and ionic strength mapping, the following parameters have been established for the Glucogen-XR Drug Product:
1.  **Target pH:** 7.4 ± 0.2 (Optimal for conformational stability and $T_m$).
2.  **Ionic Strength:** 100–150 mM NaCl (Balances isotonicity with colloidal stability).
3.  **Forbidden Zone:** pH 4.8 to 5.6 must be avoided during manufacturing to prevent irreversible precipitation.
4.  **Buffer Choice:** Sodium Phosphate or Histidine-HCl are recommended due to minimal interactions with the GLP-1 peptide backbone.

---
*End of Subsection 3.2.S.3.1.4*

---

## Thermal Stability

### 3.2.S.3.1.4 Thermal Stability and Conformational Integrity

#### 3.2.S.3.1.4.1 Introduction and Scope
The thermal stability profile of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist produced by Google Health Sciences, is a critical quality attribute (CQA) that defines the molecule's structural robustness, shelf-life potential, and resistance to temperature-induced denaturation. Given the complex secondary structure of the glucapeptide moiety and the steric constraints imposed by the extended-release conjugation chemistry, a multi-dimensional analytical approach was employed to characterize the thermodynamic landscape of the drug substance.

This section details the thermal transition temperatures ($T_m$), enthalpy of unfolding ($\Delta H$), and the kinetics of thermal degradation under accelerated and stress conditions. These data support the selection of storage conditions (2°C to 8°C) and establish the biophysical fingerprint of Glucogen-XR across multiple clinical and registration batches.

---

#### 3.2.S.3.1.4.2 Differential Scanning Calorimetry (DSC) Analysis
Differential Scanning Calorimetry (DSC) was utilized as the primary orthogonal technique to determine the melting temperature ($T_m$) and thermodynamic stability of the Glucogen-XR polypeptide backbone.

**A. Methodology and Instrumentation**
All DSC experiments were performed using the MicroCal PEAQ-DSC Automated System (Malvern Panalytical, Equipment ID: GHS-DSC-09). The drug substance was analyzed in its formulated state (Phosphate-Citrate Buffer, pH 6.5) at a concentration of 2.0 mg/mL.

*   **Scan Rate:** 60°C/hour (1°C/min)
*   **Temperature Range:** 10°C to 110°C
*   **Pressure:** 3.0 atm (Nitrogen)
*   **Baseline Correction:** Buffer-buffer scans were performed prior to sample analysis to ensure thermal equilibrium.

**B. Data Analysis and Calculation**
The molar heat capacity ($C_p$) was plotted as a function of temperature. The $T_m$ was identified as the midpoint of the thermal transition peak. The enthalpy of unfolding ($\Delta H$) was calculated by integrating the area under the transition peak after baseline subtraction using the Levenberg-Marquardt non-linear least-squares fit algorithm (OriginPro 2024 software).

**Table 1: Thermal Transition Parameters for Registration Batches (DSC)**

| Batch Number | Manufacture Date | Concentration (mg/mL) | $T_{m1}$ (°C) | $T_{m2}$ (°C) | $\Delta H$ (kcal/mol) | Calorimetric Ratio ($T_{1/2}$) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 2.02 | 68.42 | 74.15 | 142.8 | 0.94 |
| **GLUC-2025-002** | 04-FEB-2025 | 1.98 | 68.39 | 74.11 | 141.5 | 0.93 |
| **GLUC-2025-003** | 18-MAR-2025 | 2.05 | 68.45 | 74.19 | 143.2 | 0.95 |
| **GLUC-2025-004** | 10-MAY-2025 | 2.01 | 68.40 | 74.12 | 141.9 | 0.94 |
| **Mean (n=4)** | -- | -- | **68.41** | **74.14** | **142.35** | **0.94** |
| **Std Dev** | -- | -- | 0.026 | 0.035 | 0.79 | 0.008 |

*Note: $T_{m1}$ represents the unfolding of the glucapeptide alpha-helical domain; $T_{m2}$ represents the dissociation of the extended-release stabilization complex.*

---

#### 3.2.S.3.1.4.3 Nano Differential Scanning Fluorimetry (nanoDSF)
To validate DSC results and assess the impact of concentration on stability, nanoDSF was employed using the Prometheus NT.48 (NanoTemper Technologies). This technique monitors the intrinsic fluorescence change of Tryptophan (Trp) and Tyrosine (Tyr) residues at 330 nm and 350 nm during thermal ramp.

**Protocol GHS-SOP-552-THERM:**
1.  Load 10 µL of Glucogen-XR into high-sensitivity quartz capillaries.
2.  Set excitation power to 20%.
3.  Apply a thermal gradient from 20°C to 95°C at a rate of 1.0°C/min.
4.  Monitor the Ratio (350/330 nm) and the first derivative of the ratio to identify $T_{onset}$ and $T_m$.

**Table 2: nanoDSF Results for Thermal Unfolding and Aggregation**

| Batch Number | $T_{onset}$ (°C) | $T_m$ (Inflection Point) | $T_{agg}$ (Static Light Scattering) |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 61.2 | 68.5 | 71.2 |
| **GLUC-2025-002** | 61.0 | 68.3 | 71.0 |
| **GLUC-2025-003** | 61.3 | 68.6 | 71.5 |
| **GLUC-2025-004** | 61.1 | 68.4 | 71.1 |

The high $T_{onset}$ (>60°C) across all batches indicates a significant energy barrier to unfolding, suggesting robust stability under standard refrigeration and short-term excursions at room temperature.

---

#### 3.2.S.3.1.4.4 Isothermal Accelerated Degradation Study (Arrhenius Kinetics)
To predict long-term stability, an accelerated thermal degradation study was conducted. Samples of GLUC-2025-001 were incubated at four temperatures: 5°C (Control), 25°C, 37°C, and 45°C.

**A. Degradation Pathways Monitored:**
*   **Purity by RP-HPLC:** Detection of deamidation and oxidation.
*   **High-Molecular Weight (HMW) Species by SEC-HPLC:** Detection of thermal aggregation.
*   **Potency by In Vitro Bioassay:** GLP-1 receptor activation (EC50).

**Table 3: Rate of HMW Formation (%/Day) and Calculated Shelf-Life**

| Temperature (°C) | Rate Constant ($k$) (days⁻¹) | $R^2$ (Linearity) | Predicted $t_{90}$ (Days) |
| :--- | :--- | :--- | :--- |
| 25°C | $1.2 \times 10^{-4}$ | 0.9982 | 833 |
| 37°C | $8.5 \times 10^{-4}$ | 0.9991 | 117 |
| 45°C | $3.2 \times 10^{-3}$ | 0.9975 | 31 |

**B. Activation Energy Calculation ($E_a$):**
Using the Arrhenius Equation:
$$\ln(k) = \ln(A) - \frac{E_a}{RT}$$
The calculated Activation Energy ($E_a$) for Glucogen-XR thermal aggregation is **108.4 kJ/mol**. This value is consistent with high-stability peptide biologics and suggests that the extended-release modification provides a protective effect against intermolecular hydrophobic interactions.

---

#### 3.2.S.3.1.4.5 Circular Dichroism (CD) Spectroscopy under Thermal Stress
Far-UV CD (190-260 nm) was used to assess secondary structural changes (Alpha-helix vs. Beta-sheet) as a function of temperature.

**Equipment:** Jasco J-1500 CD Spectrometer (Equipment ID: GHS-CD-02).
**Parameters:** 0.1 cm pathlength, 0.2 mg/mL concentration, 5°C to 90°C.

**Observations:**
*   **At 25°C:** Glucogen-XR exhibits characteristic minima at 208 nm and 222 nm, indicative of high alpha-helical content (~42%).
*   **Transition Phase (65°C - 75°C):** A gradual loss of the 222 nm signal is observed, coinciding with the $T_m$ measured by DSC.
*   **Post-Transition (85°C):** The spectra shift toward a random coil configuration, though a residual 215 nm shoulder suggests some β-turn persistence due to the cross-linking in the XR matrix.

**Table 4: Molar Ellipticity [$\theta$] at 222 nm across Temperature Gradient**

| Temperature (°C) | Batch GLUC-2025-001 | Batch GLUC-2025-002 | % Helicity (Calculated) |
| :--- | :--- | :--- | :--- |
| 5 | -18,450 | -18,420 | 44.2% |
| 25 | -17,900 | -17,880 | 42.8% |
| 40 | -16,800 | -16,750 | 40.1% |
| 60 | -14,200 | -14,150 | 33.9% |
| 70 | -8,500 | -8,450 | 20.3% |
| 80 | -4,200 | -4,150 | 10.0% |

---

#### 3.2.S.3.1.4.6 Impact of Freeze-Thaw Cycles on Thermal Stability
Given the potential for cold-chain interruptions, the thermal stability of Glucogen-XR was evaluated after five (5) consecutive freeze-thaw (F/T) cycles (from -80°C to Room Temperature).

**Procedure:**
1.  Aliquot 1.0 mL of drug substance (GLUC-2025-003).
2.  Freeze at -80°C for 24 hours.
3.  Thaw at 25°C for 2 hours.
4.  Repeat for 5 cycles.
5.  Analyze by DSC and SEC-HPLC.

**Table 5: Stability Post-Freeze-Thaw Cycles**

| Attribute | Initial (Pre-F/T) | Post-Cycle 1 | Post-Cycle 3 | Post-Cycle 5 |
| :--- | :--- | :--- | :--- | :--- |
| $T_m$ (°C) | 68.45 | 68.44 | 68.41 | 68.38 |
| Purity by SEC (%) | 99.6 | 99.5 | 99.4 | 99.2 |
| Sub-visible Particles (≥10µm) | 120/mL | 135/mL | 158/mL | 210/mL |
| Relative Potency (%) | 102% | 101% | 100% | 99% |

*Conclusion:* Glucogen-XR demonstrates remarkable resilience to freeze-thaw stress, with no significant shift in the melting temperature or increase in aggregate formation beyond the established specification of <2.0% HMW.

---

#### 3.2.S.3.1.4.7 Regulatory Compliance and Reference Standards
The thermal stability program for Glucogen-XR was designed in accordance with the following regulatory guidelines:
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
3.  **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for GLP-1 peptides).
4.  **FDA Guidance for Industry:** Characterization and Physicochemical Self-Similarity of Therapeutic Peptides.

#### 3.2.S.3.1.4.8 Summary of Thermal Stability Profile
The thermal characterization of Glucogen-XR confirms a highly stable molecular architecture. The primary thermal transition at ~68.4°C indicates that the molecule is well-protected against denaturation at physiological and ambient temperatures. The low rate of HMW formation at 25°C ($1.2 \times 10^{-4}$ days⁻¹) supports the proposed shelf-life and confirms that the Google Health Sciences proprietary CHO-K1 expression system produces a peptide with consistent folding and thermodynamic properties.

Further details regarding the degradation products formed during extreme thermal stress (e.g., 60°C for 7 days) are provided in Section 3.2.S.3.2 (Impurities).

---

## Susceptibility to Oxidation and Light

### 3.2.S.3.1.2.4 Susceptibility to Oxidation and Light

#### 1.0 Introduction and Scope
This subsection provides a comprehensive characterization of the susceptibility of Glucogen-XR (glucapeptide extended-release) to oxidative stress and photolytic degradation. As a synthetic/recombinant hybrid glucapeptide receptor agonist, Glucogen-XR contains specific amino acid residues—namely Methionine (Met), Tryptophan (Trp), and Histidine (His)—that are inherently vulnerable to reactive oxygen species (ROS) and photon-induced excitation. 

The studies outlined herein were conducted in accordance with **ICH Q1B (Photostability Testing of New Drug Substances and Products)** and **ICH Q5E (Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process)**. The primary objective is to define the degradation pathways, identify relevant degradation products (impurities), and establish the protective requirements for the primary packaging and manufacturing environment.

#### 2.0 Oxidative Susceptibility Profile

##### 2.1 Theoretical Vulnerability Assessment
Glucogen-XR consists of a 31-amino acid peptide chain conjugated to a 40 kDa branched PEG moiety. Sequence analysis identifies the following "Hot Spots" for oxidation:
*   **Met14:** Highly susceptible to conversion into Methionine Sulfoxide [Met(O)] and Methionine Sulfone [Met(O₂)].
*   **Trp25:** Susceptible to kynurenine pathway degradation and hydroxylation.
*   **His1:** N-terminal histidine, sensitive to photo-oxidation and metal-catalyzed oxidation (MCO).

##### 2.2 Forced Degradation Protocol: Chemical Oxidation
To characterize the oxidative impurities, Drug Substance Batch **GLUC-2025-001** and **GLUC-2025-002** were subjected to controlled oxidative stress using Hydrogen Peroxide ($H_2O_2$) and tert-Butyl Hydroperoxide (tBHP).

**Step-by-Step Procedure (Protocol GHS-OX-2025):**
1.  **Preparation:** Dilute Drug Substance to a final concentration of 5.0 mg/mL using 20 mM Histidine buffer (pH 6.5).
2.  **Reagent Addition:** Add 30% $H_2O_2$ to achieve final concentrations of 0.03%, 0.3%, and 3.0% (v/v).
3.  **Incubation:** Incubate at 25°C ± 2°C in the dark for 4, 12, 24, and 48 hours.
4.  **Quenching:** Add 100-fold molar excess of L-Methionine or Catalase to terminate the reaction.
5.  **Analysis:** Immediate analysis via RP-HPLC (C18), LC-MS/MS, and Peptide Mapping.

**Table 1: Oxidative Degradation Data Summary (Batch GLUC-2025-001)**
| Timepoint (hr) | $H_2O_2$ Conc (%) | Main Peak (%) | Met14-Oxide (%) | Trp-Oxide (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 (Control) | 0.0 | 99.42 | 0.15 | 0.08 | 0.58 |
| 4 | 0.03 | 97.20 | 1.85 | 0.12 | 2.80 |
| 24 | 0.03 | 92.15 | 6.45 | 0.45 | 7.85 |
| 4 | 0.3 | 88.40 | 10.20 | 0.85 | 11.60 |
| 24 | 0.3 | 64.10 | 31.40 | 2.50 | 35.90 |
| 4 | 3.0 | 45.30 | 48.20 | 4.10 | 54.70 |
| 24 | 3.0 | 12.40 | 78.60 | 6.20 | 87.60 |

##### 2.3 Metal-Catalyzed Oxidation (MCO)
Peptides are frequently sensitive to trace metals (e.g., $Fe^{3+}$, $Cu^{2+}$) leaching from stainless steel or glass.
**Procedure:** DS samples were spiked with 10 $\mu$M $FeCl_3$ and 1.0 mM Ascorbic Acid (to facilitate redox cycling) and incubated for 72 hours at 5°C and 25°C.

**Table 2: Metal-Catalyzed Oxidation Results (Batch GLUC-2025-003)**
| Sample ID | Temperature | Conditions | % High Mol. Wt. Species (SEC) | % Main Peak (RP-HPLC) |
| :--- | :--- | :--- | :--- | :--- |
| Control | 5°C | No Metal | 0.12 | 99.51 |
| MCO-01 | 5°C | $Fe^{3+}$/Ascorbate | 0.45 | 98.10 |
| MCO-02 | 25°C | $Fe^{3+}$/Ascorbate | 2.84 | 91.35 |

*Note: The increase in HMW species indicates that oxidative stress triggers covalent cross-linking of the peptide chains, likely via dityrosine formation.*

#### 3.0 Photostability Profile (ICH Q1B)

##### 3.1 Experimental Design
Photostability was evaluated using an Atlas Suntest CPS+ Xenon Test Chamber. Samples were exposed to:
1.  **Option 2 Light Source:** Cool white fluorescent (1.2 million lux-hours) and near-UV (200 watt-hours/$m^2$).
2.  **Controls:** Samples wrapped in aluminum foil (Dark Controls) were placed adjacent to the exposed samples to differentiate thermal degradation from photolytic degradation.

##### 3.2 Results of Light Exposure
Glucogen-XR exhibits significant sensitivity to UV light, resulting in "yellowing" of the solution and the formation of aggregated species.

**Table 3: Photostability Assessment of Glucogen-XR DS (Batch GLUC-2025-004)**
| Condition | Duration | Appearance | Assay (%) | Purity by SE-HPLC (%) | Purity by RP-HPLC (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Dark Control | 14 days | Clear, Colorless | 100.2 | 99.85 | 99.40 |
| UV/Visible Light | 1.2M lux-hr | Faint Yellow | 94.2 | 92.10 | 88.35 |

**Specific Photodegradants Identified:**
*   **Impurity RT-14.2:** Identified via Orbitrap LC-MS as a di-hydroxylated Tryptophan derivative ($+32$ Da).
*   **Impurity RT-18.9:** Identified as a truncated peptide fragment (Cleavage at the His1-Gly2 bond).

#### 4.0 Calculation of Oxidation Kinetics
To determine the shelf-life impact of oxidative stress, the first-order rate constant ($k_{obs}$) for Met14 oxidation was calculated:

$$ln([Glucogen]_{t} / [Glucogen]_{0}) = -k_{obs} \cdot t$$

Where:
*   $[Glucogen]_{0}$ = Initial concentration
*   $t$ = Time in days
*   $k_{obs}$ at 25°C was determined to be $1.45 \times 10^{-3} \text{ day}^{-1}$, indicating that without stabilization (e.g., methionine addition or nitrogen overlay), oxidation would exceed the 1.0% qualification threshold within 7 days at room temperature.

#### 5.0 Mitigation and Control Strategies
Based on the data in Sections 2.0 and 3.0, the following controls are implemented for Glucogen-XR:
1.  **Formulation:** Inclusion of 10 mM L-Methionine as a sacrificial antioxidant.
2.  **Primary Packaging:** USP Type I Borosilicate glass vials with ETFE-faced stoppers, packaged in secondary cartons to prevent light exposure.
3.  **Manufacturing:** Headspace nitrogen overlay during the fill-finish process to maintain dissolved oxygen levels below 1.0 ppm.
4.  **In-Process Limits:** A maximum holdup time for the bulk drug substance has been established at 48 hours at 2-8°C under nitrogen.

#### 6.0 Conclusion
Glucogen-XR is highly susceptible to oxidation at the Met14 residue and photolytic degradation at the Trp25 residue. The forced degradation studies using batch **GLUC-2025-XXX** series demonstrate that strict adherence to light protection and oxygen exclusion is mandatory to maintain a purity profile $>95.0\%$ throughout the shelf life.

***

**References:**
1.  **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
2.  **USP <1044>:** Measurement and Characterization of Visible Particulates in Biopharmaceutical Injections.
3.  **Li, S. et al. (2021):** "Oxidative Pathways in GLP-1 Analogs," *Journal of Pharmaceutical Sciences*, 110(4), 1452-1460.

---

# Forced Degradation Studies

## Acid and Base Hydrolysis

### 3.2.S.3. CHARACTERIZATION
### 3.2.S.3.2. Impurities (Forced Degradation Studies)
#### 3.2.S.3.2.1. Subsection: Acid and Base Hydrolysis (Solvolytic Stability)

---

#### 1.0 Executive Summary
As part of the comprehensive structural characterization and stability profile of Glucogen-XR (glucapeptide extended-release), Google Health Sciences (GHS) has conducted extensive forced degradation studies involving extreme pH conditions. Acid and base hydrolysis studies are critical for defining the intrinsic stability of the GLP-1 receptor agonist peptide backbone, identifying potential degradation products (including deamidation, peptide bond cleavage, and isomerization), and validating the stability-indicating nature of the primary analytical methods (RP-HPLC, SEC-HPLC, and LC-MS/MS).

The studies described herein were performed in accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*).

---

#### 2.0 Material and Methods

##### 2.1 Test Articles
The test articles utilized for these studies were sourced from representative cGMP batches manufactured at the South San Francisco facility (Building 4, Suite 200).

**Table 1: Test Article Specifications for Hydrolysis Studies**
| Batch Number | Scale | Date of Manufacture | Purity (RP-HPLC) | Concentration |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 50L (Clinical) | 12-JAN-2025 | 99.4% | 10.0 mg/mL |
| GLUC-2025-002 | 50L (Clinical) | 28-JAN-2025 | 99.2% | 10.5 mg/mL |
| GLUC-2025-003 | 500L (Engineering) | 15-FEB-2025 | 99.6% | 10.2 mg/mL |

##### 2.2 Reagents and Equipment
*   **Hydrochloric Acid (HCl):** 1.0 M and 0.1 M, Trace Metal Grade (Sigma-Aldrich Cat# 320331)
*   **Sodium Hydroxide (NaOH):** 1.0 M and 0.1 M, Carbonate-free (Fisher Chemical Cat# S318-1)
*   **Quenching Buffer (Acid):** 1.0 M Tris-HCl, pH 8.0
*   **Quenching Buffer (Base):** 1.0 M Phosphoric Acid, pH 2.0
*   **HPLC System:** Agilent 1290 Infinity II LC (Equipment ID: GHS-LC-094)
*   **Mass Spectrometer:** Orbitrap Exploris 480 (Equipment ID: GHS-MS-021)
*   **Incubator:** Thermo Scientific Heratherm (Equipment ID: GHS-INC-005), calibrated to ± 0.5°C.

---

#### 3.0 Experimental Protocol: Forced Degradation Procedure

The objective of this protocol was to achieve approximately 10% to 20% degradation of the parent molecule, which is considered the "gold standard" for validating stability-indicating assays without over-degrading the sample into secondary fragments that are not representative of real-time stability.

##### 3.1 Acid Hydrolysis Protocol (Protocol ID: GHS-STAB-PH-01)
1.  **Preparation:** Dilute Glucogen-XR Drug Substance (Batch GLUC-2025-003) to 2.0 mg/mL using Milli-Q water.
2.  **Acid Stress:** Add 0.1 M HCl to the sample to achieve a final concentration of 0.01 M HCl or 0.1 M HCl (depending on the study arm).
3.  **Incubation:** Aliquot samples into HPLC vials (1.0 mL each). Place samples in the incubator at 25°C, 40°C, and 60°C.
4.  **Sampling Intervals:** T = 0, 6h, 24h, 48h, 7 days, and 14 days.
5.  **Quenching:** At each time point, remove the vial and immediately add a stoichiometric amount of 1.0 M Tris-HCl (pH 8.0) to neutralize the sample to pH 7.0 ± 0.2.
6.  **Storage:** Store quenched samples at -80°C until analysis.

##### 3.2 Base Hydrolysis Protocol (Protocol ID: GHS-STAB-PH-02)
1.  **Preparation:** Dilute Glucogen-XR Drug Substance (Batch GLUC-2025-003) to 2.0 mg/mL.
2.  **Base Stress:** Add 0.1 M NaOH to achieve a final concentration of 0.01 M NaOH or 0.1 M NaOH.
3.  **Incubation:** Aliquot samples and place in the incubator at 25°C and 40°C. (Note: 60°C was excluded for base studies due to instantaneous precipitation observed in pilot runs).
4.  **Sampling Intervals:** T = 0, 1h, 3h, 6h, 12h, and 24h.
5.  **Quenching:** Neutralize with 1.0 M Phosphoric acid to pH 7.0 ± 0.5.
6.  **Storage:** Store at -80°C.

---

#### 4.0 Results: Acid Hydrolysis (0.1 M HCl)

Acidic conditions typically promote the hydrolysis of amide bonds, particularly at Asparagine (Asn) and Glutamine (Gln) residues, leading to deamidation, and can facilitate peptide bond cleavage at Aspartyl (Asp) residues via the formation of a cyclic intermediate.

**Table 2: Degradation Kinetics of Glucogen-XR in 0.1 M HCl at 40°C (Batch GLUC-2025-003)**
| Time Point | Purity (% Peak Area) | Total Impurities (%) | Deamidated Form (%) | N-Terminal Cleavage (%) | Mass Balance (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T=0 | 99.62 | 0.38 | 0.12 | 0.05 | 100.0 |
| 6 Hours | 98.15 | 1.85 | 0.88 | 0.42 | 99.8 |
| 24 Hours | 94.40 | 5.60 | 2.45 | 1.95 | 99.4 |
| 48 Hours | 89.12 | 10.88 | 4.88 | 3.12 | 98.7 |
| 7 Days | 72.30 | 27.70 | 12.45 | 10.33 | 96.5 |
| 14 Days | 54.10 | 45.90 | 18.90 | 19.45 | 94.2 |

*Note: Mass balance decrease at later time points is attributed to the formation of small, highly hydrophilic di-peptides not retained by the RP-HPLC column.*

##### 4.1 Identification of Acidic Degradants
LC-MS/MS analysis of the T=48h sample (Acid) identified three primary degradation pathways:
1.  **Deamidation at Asn-28:** Identification of a +0.984 Da mass shift. The conversion of Asn to Asp/Iso-Asp was confirmed by Asp-N protease digestion.
2.  **Asp-Pro Cleavage:** Significant cleavage at the Asp-9 position was observed, resulting in two fragments: Gluc(1-8) and Gluc(9-31).
3.  **Glutamine Cyclization:** Formation of pyroglutamate at the N-terminus (Gln-1).

---

#### 5.0 Results: Base Hydrolysis (0.1 M NaOH)

Glucogen-XR demonstrated significantly higher sensitivity to alkaline conditions compared to acidic conditions. Base-catalyzed degradation involves rapid deamidation, racemization of chiral centers (L-amino acids to D-amino acids), and peptide backbone fragmentation via $\beta$-elimination of disulfide bridges (though Glucogen-XR is a non-disulfide linked peptide, the serine and threonine residues remain vulnerable).

**Table 3: Degradation Kinetics of Glucogen-XR in 0.1 M NaOH at 25°C (Batch GLUC-2025-003)**
| Time Point | Purity (% Peak Area) | Total Impurities (%) | Deamidated Form (%) | Racemized Variants (%) | Mass Balance (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T=0 | 99.62 | 0.38 | 0.12 | <0.05 | 100.0 |
| 1 Hour | 91.20 | 8.80 | 5.40 | 2.10 | 99.5 |
| 3 Hours | 82.45 | 17.55 | 10.12 | 5.30 | 98.2 |
| 6 Hours | 65.30 | 34.70 | 18.90 | 12.15 | 96.4 |
| 12 Hours | 41.20 | 58.80 | 24.55 | 22.10 | 92.1 |
| 24 Hours | 18.40 | 81.60 | 32.10 | 38.45 | 88.5 |

##### 5.1 Identification of Basic Degradants
1.  **Succinimide Intermediate:** High-resolution MS detected the formation of a succinimide ring (+18 Da loss from the deamidated state), particularly at the Asp-Gly motifs.
2.  **Isomerization:** Extensive formation of D-Ser at position 8 and D-His at position 1.
3.  **Aggregation:** SEC-HPLC analysis of the 24h base-stressed sample indicated a 12.5% increase in high-molecular-weight species (HMWS), likely due to covalent cross-linking through dehydroalanine intermediates.

---

#### 6.0 Statistical Analysis and Kinetic Modeling

To determine the shelf-life impact of pH excursions, the degradation rates ($k$) were calculated using first-order kinetics:
$$\ln[C] = \ln[C_0] - kt$$
Where:
*   $[C]$ = Concentration at time $t$
*   $[C_0]$ = Initial concentration
*   $k$ = Degradation rate constant

**Table 4: Calculated Rate Constants ($k$) for Glucogen-XR**
| Condition | Temperature | $k$ ($days^{-1}$) | Half-life ($t_{1/2}$, days) | $R^2$ Correlation |
| :--- | :--- | :--- | :--- | :--- |
| 0.1 M HCl | 40°C | 0.052 | 13.32 | 0.994 |
| 0.1 M NaOH | 25°C | 1.684 | 0.41 | 0.989 |

The Arrhenius equation was applied to the acid hydrolysis data across 25°C, 40°C, and 60°C to calculate the Activation Energy ($E_a$).
$$k = A e^{-E_a/RT}$$
The calculated $E_a$ for acid-catalyzed hydrolysis of Glucogen-XR is **84.5 kJ/mol**, consistent with standard peptide amide bond hydrolysis.

---

#### 7.0 Analytical Method Validation (Stability-Indicating Power)

A key requirement of this study was to demonstrate that the RP-HPLC method (Method GHS-ANA-001) can resolve all hydrolysis products from the main peak.

*   **Peak Purity:** Diode Array Detection (DAD) peak purity analysis was performed for the Glucogen-XR peak in all stressed samples. In all cases (up to 20% degradation), the Peak Purity Angle was less than the Threshold Angle, confirming no co-eluting impurities.
*   **Resolution:** The resolution ($R_s$) between the main peak and the closest eluting degradant (Deamidated-Asn28) was maintained at $>1.8$.

---

#### 8.0 Conclusion
The acid and base hydrolysis studies confirm that Glucogen-XR is highly sensitive to alkaline environments, necessitating strict control of pH during the manufacturing process (Target pH 5.5 ± 0.3). The primary degradation pathways under acidic stress are deamidation and Asp-cleavage, while basic stress leads to rapid isomerization and aggregation. All major degradants identified in these forced studies are monitored via the proposed stability-indicating RP-HPLC and SEC-HPLC methods, ensuring the safety and efficacy of the drug substance over its intended shelf life.

---
**References:**
1.  *ICH Q1A(R2): Stability Testing of New Drug Substances and Products.*
2.  *ICH Q6B: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
3.  *USP <1049>: Content of Biological Products.*
4.  *GHS Internal Report: GHS-RP-2025-044, "Comprehensive Impurity Characterization of Glucogen-XR."*

---

## Oxidative Stress

# MODULE 3: QUALITY (3.2.S)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
### SECTION 3.2.S.3.1: CHARACTERIZATION - FORCED DEGRADATION STUDIES
#### SUBSECTION: 3.2.S.3.1.4: OXIDATIVE STRESS ELUCIDATION

---

### 3.2.S.3.1.4.1 Introduction and Scope
In accordance with ICH Q1A(R2) *Stability Testing of New Drug Substances and Products* and ICH Q6B *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*, Google Health Sciences (GHS) has conducted comprehensive forced degradation studies to evaluate the oxidative susceptibility of Glucogen-XR (glucapeptide extended-release).

Glucogen-XR is a synthetic 31-amino acid peptide analog of human Glucagon-Like Peptide-1 (GLP-1), modified with a C-terminal extension and conjugated to a proprietary 40 kDa branched PEG (Polyethylene Glycol) moiety to facilitate extended-release kinetics. Given the presence of oxidation-sensitive residues—specifically Methionine (Met), Tryptophan (Trp), and Histidine (His)—within the primary sequence, characterizing the oxidative degradation pathways is critical for defining the stability profile, establishing shelf-life, and validating the stability-indicating nature of the proposed analytical methods.

This subsection details the experimental design, the mechanisms of site-specific oxidation, the impact on higher-order structure (HOS), and the subsequent effect on biological potency (GLP-1 receptor activation).

---

### 3.2.S.3.1.4.2 Materials and Manufacturing Batches
The oxidative stress studies were performed using representative clinical-scale batches manufactured at the South San Francisco facility (Site ID: GHS-SSF-01).

**Table 3.2.S.3.1.4-1: Batches Utilized for Oxidative Forced Degradation**
| Batch Number | Scale | Date of Manufacture | Purity (RP-HPLC) | Specific Activity (IU/mg) |
|:---|:---|:---|:---|:---|
| GLUC-2025-001 | 2000L | 12-JAN-2025 | 99.4% | 1.02 x 10^6 |
| GLUC-2025-004 | 2000L | 04-FEB-2025 | 99.2% | 0.98 x 10^6 |
| GLUC-2025-009 | 2000L | 22-MAR-2025 | 99.5% | 1.05 x 10^6 |

---

### 3.2.S.3.1.4.3 Experimental Design and Protocol
Oxidation was induced via two primary pathways: Nucleophilic (2nd order) oxidation using Hydrogen Peroxide ($H_2O_2$) and Free Radical-mediated oxidation using 2,2'-Azobis(2-amidinopropane) dihydrochloride (AAPH).

#### 3.2.S.3.1.4.3.1 Protocol for Peroxide-Induced Oxidation ($H_2O_2$)
**Objective:** To target the thioether group of the Methionine residues (Met8 and Met24) and generate sulfoxide ($\text{Met(O)}$) and sulfone ($\text{Met(O}_2\text{)}$) derivatives.

**Step-by-Step Procedure:**
1. **Sample Preparation:** Dilute Glucogen-XR Drug Substance (DS) to a final concentration of 5.0 mg/mL using 20 mM Sodium Phosphate buffer (pH 7.0).
2. **Reagent Preparation:** Prepare a fresh solution of 30% w/w $H_2O_2$ (USP Grade).
3. **Initiation:** Add $H_2O_2$ to the DS solution to reach final concentrations of 0.01%, 0.1%, and 1.0% (v/v).
4. **Incubation:** Incubate samples in the dark at 25.0°C ± 0.5°C using a calibrated Thermomixer (Equipment ID: GHS-EQ-0982).
5. **Sampling Timepoints:** T = 0, 4, 8, 24, and 48 hours.
6. **Quenching:** Quench the reaction by adding 100 mM L-Methionine in a 10-fold molar excess relative to $H_2O_2$ or by rapid buffer exchange using Zeba™ Spin Desalting Columns (7K MWCO).
7. **Storage:** Store quenched samples at -80°C until multi-attribute analysis (MAM).

#### 3.2.S.3.1.4.3.2 Protocol for Free Radical-Induced Oxidation (AAPH)
**Objective:** To simulate metal-catalyzed oxidation and ambient light-induced degradation targeting aromatic residues (Trp23 and His1).

**Step-by-Step Procedure:**
1. **Sample Preparation:** Glucogen-XR DS adjusted to 2.0 mg/mL in Formulation Buffer (pH 6.5).
2. **Reagent Preparation:** 100 mM AAPH solution in Milli-Q water.
3. **Initiation:** Add AAPH to samples (Final Conc: 10 mM).
4. **Incubation:** Incubate at 40°C for 24 hours to initiate thermal decomposition of AAPH into peroxyl radicals.
5. **Control:** Parallel control samples maintained at 40°C without AAPH.
6. **Analysis:** Direct injection into LC-MS/MS for peptide mapping.

---

### 3.2.S.3.1.4.4 Results: Kinetic Elucidation of Oxidative Species
The degradation kinetics followed a pseudo-first-order model for $H_2O_2$ concentrations up to 0.1%.

**Table 3.2.S.3.1.4-2: Quantitation of Oxidized Variants (GLUC-2025-001) via RP-HPLC-UV**
| Condition | Time (h) | % Main Peak | % Total Oxidation | % Met8-O | % Met24-O | % Trp-O |
|:---|:---|:---|:---|:---|:---|:---|
| Control (T0) | 0 | 99.4 | 0.21 | 0.10 | 0.11 | < LOD |
| 0.1% $H_2O_2$ | 4 | 92.3 | 7.15 | 3.42 | 3.68 | 0.05 |
| 0.1% $H_2O_2$ | 8 | 85.1 | 14.32 | 6.88 | 7.33 | 0.11 |
| 0.1% $H_2O_2$ | 24 | 62.8 | 36.45 | 17.55 | 18.20 | 0.70 |
| 1.0% $H_2O_2$ | 24 | 14.5 | 84.90 | 41.20 | 42.10 | 1.60 |
| 10 mM AAPH | 24 | 78.4 | 20.80 | 5.20 | 6.10 | 9.50 |

#### 3.2.S.3.1.4.4.1 Kinetic Rate Constant Calculation
The rate of oxidation for Methionine residues was calculated using the equation:
$$\ln\left(\frac{[C]_t}{[C]_0}\right) = -kt$$
Where $[C]_t$ is the concentration of the non-oxidized peptide at time $t$. For 0.1% $H_2O_2$ at 25°C, the calculated rate constant ($k$) was $1.92 \times 10^{-2} \text{ h}^{-1}$.

---

### 3.2.S.3.1.4.5 Site-Specific Analysis by LC-MS/MS (Peptide Mapping)
To identify the specific sites of modification, samples from batch GLUC-2025-004 treated with 0.1% $H_2O_2$ (24h) were subjected to Trypsin/Glu-C dual digestion and analyzed via Orbitrap Exploris 480 Mass Spectrometry.

**Table 3.2.S.3.1.4-3: Mass Shifts Observed in Oxidized Fragments**
| Fragment | Sequence Region | Theoretical Mass (Da) | Observed Mass (Da) | $\Delta$ Mass | Modification |
|:---|:---|:---|:---|:---|:---|
| T1-G2 | HAEGTFTSDV... | 1245.58 | 1261.57 | +15.99 | Met8 $\rightarrow$ Met(O) |
| T3 | ...AAKEFIAWLM...| 2450.21 | 2466.20 | +15.99 | Met24 $\rightarrow$ Met(O) |
| T3-v2 | ...AAKEFIAWLM...| 2450.21 | 2482.19 | +31.98 | Met24 $\rightarrow$ Met(O2) |
| T3-v3 | ...AAKEFIAWLM...| 2450.21 | 2466.18 | +15.97 | Trp23 $\rightarrow$ 5-OH-Trp |

**Observations:**
1. **Met8 vs. Met24:** Both Methionine residues show nearly identical susceptibility to nucleophilic attack, suggesting both are solvent-exposed in the extended-release PEGylated conformation.
2. **Trp23 Oxidation:** Observed primarily under AAPH stress. The presence of Kynurenine and oxindolylalanine was confirmed by MS/MS fragmentation patterns (b and y ion series), showing a characteristic shift in the y7 and y8 ions.
3. **PEG Interference:** The 40 kDa PEG moiety did not impede the identification of peptide fragments due to the use of an in-line PPE (Protein Precipitation Extraction) step prior to LC-MS.

---

### 3.2.S.3.1.4.6 Impact on Secondary and Tertiary Structure
High-order structural integrity was assessed via Far-UV Circular Dichroism (CD) and Fluorescence Spectroscopy.

*   **Circular Dichroism:** Control Glucogen-XR exhibits a characteristic alpha-helical signature with minima at 208 nm and 222 nm. Upon 40% total oxidation, a 12% decrease in mean residue ellipticity ([$\theta$]) at 222 nm was observed, indicating partial de-structuring of the helical segment (residues 15-25).
*   **Intrinsic Fluorescence:** Excitation at 280 nm showed a 15 nm red shift (335 nm to 350 nm) in emission maxima for AAPH-stressed samples, signifying the movement of Trp23 into a more polar, aqueous environment as a result of peptide unfolding or local oxidation.

---

### 3.2.S.3.1.4.7 Impact on Biological Potency
The potency of oxidized variants was evaluated using the *In Vitro* GLP-1 Receptor Activation Assay (HEK293-hGLP1R-CRE-Luciferase).

**Table 3.2.S.3.1.4-4: Potency Evaluation of Stressed Samples**
| Sample Description | Oxidation Level | $EC_{50}$ (pM) | Relative Potency (%) |
|:---|:---|:---|:---|
| Reference Standard | 0.2% | 12.4 | 100.0 |
| Stressed (0.1% $H_2O_2$, 8h) | 14.3% | 18.9 | 65.6 |
| Stressed (0.1% $H_2O_2$, 24h) | 36.4% | 45.2 | 27.4 |
| Stressed (AAPH, 24h) | 20.8% | 31.5 | 39.4 |

**Conclusion on Potency:** Oxidation of Met8 and Trp23 significantly impairs receptor binding and activation. Met8 is located within the N-terminal region responsible for receptor signaling, while Trp23 facilitates hydrophobic stabilization of the ligand-receptor interface.

---

### 3.2.S.3.1.4.8 Conclusion and Control Strategy
The forced degradation studies for oxidative stress successfully generated a diverse profile of degradants, including Met(O), Met(O2), and various Tryptophan oxidation products. 
1.  **Stability-Indicating Methods:** The RP-HPLC method (Method AM-042) and the Peptide Mapping method (Method AM-085) are demonstrated to be stability-indicating, as they effectively resolve oxidized species from the main peak.
2.  **Product Handling:** To mitigate oxidative risk during secondary manufacturing and long-term storage, Glucogen-XR Drug Product is filled in Type I borosilicate glass vials with nitrogen head-space overlay.
3.  **Specification:** Based on these data, a cumulative limit for "Total Oxidized Impurities" is established in the DS and DP release and stability specifications (Section 3.2.S.4.1).

---
**References:**
*   *FDA Guidance for Industry: INDs for Phase 2 and Phase 3 Studies, Chemistry, Manufacturing, and Controls Information (2003).*
*   *ICH Q1A(R2): Stability Testing of New Drug Substances and Products.*
*   *Vlasak, J., et al. (2009). "Oxidation of Methionine and Tryptophan in Therapeutic Proteins." Analytical Biochemistry, 392(2), 145-154.*

---

## Photostability Testing per ICH Q1B

# MODULE 3: QUALITY (3.2.S)
## 3.2.S.3 CHARACTERIZATION
### 3.2.S.3.2 Impurities (Forced Degradation Studies)

---

#### 3.2.S.3.2.4 Photostability Testing per ICH Q1B

##### 3.2.S.3.2.4.1 Executive Summary and Regulatory Rationale
In accordance with the International Council for Harmonisation (ICH) Guideline Q1B *Photostability Testing of New Drug Substances and Products*, Google Health Sciences (GHS) has conducted comprehensive photostability assessments of Glucogen-XR (glucapeptide extended-release). As a synthetic peptide therapeutic produced via high-fidelity recombinant expression in the GHS-CHO-001 cell line, Glucogen-XR contains specific amino acid residues (notably Tryptophan at position 25 and Tyrosine at position 13) that are intrinsically susceptible to photo-oxidation and subsequent radical-mediated chain reactions.

The primary objective of this study was to evaluate the intrinsic photostability of the drug substance (DS) and to determine whether exposure to light results in unacceptable changes to the molecular integrity, purity profile, or potency. These studies inform the requirements for primary packaging, labeling (e.g., "Protect from Light"), and the establishment of retest periods.

##### 3.2.S.3.2.4.2 Test Facilities and Quality Systems
All photostability testing was performed at the Google Health Sciences Analytical Excellence Center (3000 Innovation Drive, South San Francisco, CA). The studies were conducted under strict adherence to Current Good Manufacturing Practices (cGMP) and internal Quality Management System (QMS) protocols.

**Table 1: Equipment and Instrumentation Specifications**
| Equipment ID | Manufacturer/Model | Description | Validation Status |
| :--- | :--- | :--- | :--- |
| **PSC-099** | Caron Model 7001-30 | Photostability Chamber (ICH Q1B Compliant) | Validated Q3 2024 |
| **RAD-202** | International Light IL1400A | Radiometer with UVA and VIS sensors | Calibrated (NIST Traceable) |
| **HPLC-04** | Waters ACQUITY UPLC H-Class | Related Substances & Assay | Validated Method GHS-ANA-GLU-02 |
| **SEC-02** | Agilent 1290 Infinity II | Size Exclusion (Aggregation) | Validated Method GHS-ANA-GLU-05 |
| **UPLC-MS-01** | Thermo Orbitrap Exploris 480 | Peak Identification / Mass Spec | Characterization Only |

##### 3.2.S.3.2.4.3 Batch Selection and Material History
Testing was performed on three (3) primary GMP registration batches of Glucogen-XR Drug Substance. These batches represent the commercial manufacturing process (Scale: 2,000L Bioreactor) utilizing the proprietary GHS-CHO-001 cell line.

**Table 2: Glucogen-XR Batches Evaluated for Photostability**
| Batch Number | Manufacture Date | Fill Date | Purity (Initial) | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 14-JAN-2025 | 99.42% | Primary Registration |
| **GLUC-2025-002** | 28-JAN-2025 | 30-JAN-2025 | 99.38% | Primary Registration |
| **GLUC-2025-003** | 10-FEB-2025 | 12-FEB-2025 | 99.45% | Primary Registration |

##### 3.2.S.3.2.4.4 Exposure Protocol (Option 2 ICH Q1B)
Google Health Sciences selected **Option 2** as defined in ICH Q1B for the light source. The samples were exposed to both a cool white fluorescent lamp (ISO 10977 equivalent) and a near-UV fluorescent lamp (320 nm to 400 nm).

###### 3.2.S.3.2.4.4.1 Exposure Requirements and Target Criteria
To ensure a robust "challenge" to the molecule, the following minimum exposure targets were maintained throughout the study:
1.  **Visible Light (Cool White):** Not less than 1.2 million lux-hours.
2.  **Near Ultraviolet (UVA):** Not less than 200 watt-hours/square meter ($Wh/m^2$).

**Calculations for Exposure Duration:**
The PSC-099 chamber outputs were monitored daily.
*   Measured Visible Intensity: $7.5 \text{ klux}$
*   Measured UVA Intensity: $1.8 \text{ } W/m^2$
*   Required Time (Visible): $1.2 \times 10^6 \text{ lux-hr} / 7500 \text{ lux} = 160 \text{ hours}$
*   Required Time (UVA): $200 \text{ } Wh/m^2 / 1.8 \text{ } W/m^2 = 111.1 \text{ hours}$
*   **Study Duration:** 168 hours (7 days) to ensure both limits were exceeded simultaneously.

##### 3.2.S.3.2.4.5 Sample Preparation and Presentation
Samples were prepared in three distinct configurations to differentiate between the effects of light and the effects of temperature/humidity (Dark Control).

1.  **Exposed Sample (Light):** Glucogen-XR DS (10 mg/mL in acetate buffer) filled into clear Type I Borosilicate glass vials (2 mL fill). Vials were laid horizontally in the chamber to maximize surface area exposure.
2.  **Dark Control:** Vials prepared identically to the exposed samples but wrapped in three layers of heavy-duty aluminum foil and placed adjacent to the exposed samples in the same chamber.
3.  **Physical Integrity Control:** Lyophilized powder in clear vials (to assess solid-state vs. liquid-state sensitivity).

##### 3.2.S.3.2.4.6 Analytical Methodology
Samples were analyzed at $T_{initial}$ and $T_{final}$ (168 hours) using a suite of stability-indicating assays:

*   **Purity by RP-UPLC (Method GHS-ANA-GLU-02):** Gradient elution using TFA/Acetonitrile mobile phase, detection at 214 nm.
*   **Purity by SEC-UPLC (Method GHS-ANA-GLU-05):** Isocratic elution, TSKgel SuperSW2000 column, to detect HMWP (High Molecular Weight Proteins/Aggregates).
*   **Charge Heterogeneity (icIEF):** To detect photo-induced deamidation or oxidation resulting in pI shifts.
*   **Mass Spectrometry (Peptide Mapping):** To localize sites of photo-oxidation (e.g., Met, Trp, His residues).

##### 3.2.S.3.2.4.7 Detailed Results: Batch GLUC-2025-001 (Liquid State)

**Table 3: Photostability Data for Batch GLUC-2025-001 (Liquid)**
| Parameter | Acceptance Criteria | Initial (T=0) | Dark Control (7 Days) | Exposed (7 Days) | Change (Exp - Dark) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear/Colorless | Clear | Clear | Clear/Pale Yellow | Color Change |
| **Assay (mg/mL)** | 9.0 - 11.0 | 10.12 | 10.09 | 9.45 | -0.64 |
| **Purity (RP-UPLC %)** | $\ge 98.0\%$ | 99.42 | 99.35 | 91.22 | -8.13 |
| **HMWP (SEC %)** | $\le 1.0\%$ | 0.21 | 0.25 | 4.88 | +4.63 |
| **Oxidized Species (%)**| Report | 0.45 | 0.48 | 6.55 | +6.07 |
| **pH** | 5.5 $\pm$ 0.2 | 5.51 | 5.52 | 5.38 | -0.14 |

**Statistical Analysis of Degradation Rate (GLUC-2025-001):**
Analysis of the 168-hour exposure data indicates a degradation rate of approximately 0.048% purity loss per hour of exposure under ICH Q1B conditions ($R^2 = 0.989$). The primary degradation products were identified via UPLC-MS as $[+16]$ Da and $[+32]$ Da adducts, consistent with the oxidation of Trp25 to hydroxytryptophan and kynurenine derivatives.

##### 3.2.S.3.2.4.8 Detailed Results: Batch GLUC-2025-002 (Liquid State)

**Table 4: Photostability Data for Batch GLUC-2025-002 (Liquid)**
| Parameter | Acceptance Criteria | Initial (T=0) | Dark Control (7 Days) | Exposed (7 Days) | Change (Exp - Dark) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear/Colorless | Clear | Clear | Clear/Pale Yellow | Color Change |
| **Assay (mg/mL)** | 9.0 - 11.0 | 9.98 | 9.95 | 9.31 | -0.64 |
| **Purity (RP-UPLC %)** | $\ge 98.0\%$ | 99.38 | 99.30 | 90.95 | -8.35 |
| **HMWP (SEC %)** | $\le 1.0\%$ | 0.24 | 0.28 | 5.02 | +4.74 |
| **Oxidized Species (%)**| Report | 0.42 | 0.45 | 6.88 | +6.43 |

##### 3.2.S.3.2.4.9 Detailed Results: Batch GLUC-2025-003 (Lyophilized State)
To determine if the Glucogen-XR glucapeptide is more stable in the solid state, batch GLUC-2025-003 was tested as a lyophilized powder.

**Table 5: Photostability Data for Batch GLUC-2025-003 (Lyophilized)**
| Parameter | Acceptance Criteria | Initial (T=0) | Dark Control (7 Days) | Exposed (7 Days) | Change (Exp - Dark) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | White Cake | White Cake | White Cake | Off-white Cake | Slight Color |
| **Purity (RP-UPLC %)** | $\ge 98.0\%$ | 99.45 | 99.41 | 98.92 | -0.49 |
| **HMWP (SEC %)** | $\le 1.0\%$ | 0.18 | 0.19 | 0.42 | +0.23 |

**Observation:** The lyophilized drug substance demonstrates significantly higher photostability compared to the liquid formulation. The "caging effect" of the solid matrix likely restricts the molecular mobility required for the radical propagation of photo-oxidative species.

##### 3.2.S.3.2.4.10 Characterization of Photo-Degradants
UPLC-MS/MS analysis (Method GHS-ANA-GLU-MS-01) was performed on the exposed sample from Batch GLUC-2025-001 to characterize the major impurities formed ($> 0.10\%$).

1.  **Impurity RRT 0.85 (Oxidation at Trp25):** Mass increase of +16.0 Da. MS/MS fragmentation confirms oxygen insertion at the C3 position of the indole ring.
2.  **Impurity RRT 1.12 (Dimerization):** SEC-MALS analysis confirmed this peak corresponds to a covalent non-reducible dimer (MW ~14.2 kDa). This is hypothesized to form via dityrosine cross-linking (Tyr13-Tyr13).
3.  **Impurity RRT 0.92 (Deamidation):** Mass increase of +0.98 Da. Likely photo-induced acceleration of Asn18 deamidation.

##### 3.2.S.3.2.4.11 Step-by-Step Procedure: Protocol GHS-STB-015
The following protocol was utilized for all ICH Q1B studies:

1.  **Preparation:** Clean the interior of the PSC-099 chamber with 70% IPA. Calibrate the RAD-202 radiometer.
2.  **Loading:**
    *   Place 5 vials of DS in the center of the tray (Sample).
    *   Place 5 vials wrapped in foil adjacent (Dark Control).
    *   Place 1 "Chemical Actinometer" (Quinine Hydrochloride solution) to verify exposure if electronic monitoring fails.
3.  **Initiation:** Set the chamber temperature to 25.0°C. Power on the Cool White and UVA lamps simultaneously.
4.  **Monitoring:** Record Lux and $W/m^2$ every 24 hours. If temperature exceeds 30°C, pause the study to prevent thermal degradation artifacts.
5.  **Termination:** Once 1.2M lux-hr is achieved, remove all samples.
6.  **Quenching:** Immediately transfer samples to 2-8°C storage, protected from light, until analysis.

##### 3.2.S.3.2.4.12 Conclusion and Protective Measures
The photostability results demonstrate that Glucogen-XR Drug Substance is **photo-labile** in the liquid state. Significant degradation (approx. 8-9% loss in purity) was observed upon exposure to ICH Q1B confirmatory light levels. The degradation is characterized by:
*   Substantial increase in oxidation (primarily at Trp25).
*   Formation of covalent aggregates/dimers.
*   Visible yellowing of the solution.

**Regulatory Recommendation:**
Based on these data, Glucogen-XR drug substance and drug product must be protected from light during storage and handling. The primary container closure system (vials) must be stored in secondary packaging (cartons) that provide light occlusion. A cautionary statement "Keep vials in the outer carton in order to protect from light" is mandatory for the Prescribing Information (USPI).

---
**References:**
1. ICH Q1B, *Photostability Testing of New Drug Substances and Products*, November 1996.
2. USP <1065>, *Measurement of Radiofrequency and Light Exposure*.
3. GHS Internal Report RPT-2025-GLU-PHOTO, *Comprehensive Evaluation of Glucogen-XR Photo-sensitivity*.

---

# Characterization of Reference Standard

## Primary Reference Standard Preparation

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.5: REFERENCE STANDARDS OR MATERIALS
### SUBSECTION 3.2.S.5.1: PRIMARY REFERENCE STANDARD PREPARATION AND QUALIFICATION

---

#### 3.2.S.5.1.1 Introduction and Strategic Objectives
The establishment of the Primary Reference Standard (PRS) for Glucogen-XR (glucapeptide extended-release) represents the foundational benchmark for all subsequent analytical comparisons, potency determinations, and quality control assessments throughout the lifecycle of the product. Google Health Sciences, a Division of Google Cloud Life Sciences, has developed the PRS (Batch No: **GLUC-2025-PRS-01**) to serve as the ultimate traceable material for the GLP-1 receptor agonist therapeutic protein produced in the proprietary GHS-CHO-001 cell line.

The PRS is utilized to calibrate Working Reference Standards (WRS) and is not intended for routine release testing. This subsection details the rigorous manufacturing, purification, lyophilization, and qualification protocols employed to ensure the PRS exhibits the highest degree of purity, structural integrity, and biological activity.

#### 3.2.S.5.1.2 Manufacturing Origin of the Primary Reference Standard
The material designated as the Primary Reference Standard was derived from a dedicated manufacture run at the South San Francisco facility (Site ID: GHS-SSF-3000). The process utilized the "Golden Batch" parameters defined in the Master Batch Record (MBR-GLUC-XR-V.2.1).

**Table 3.2.S.5.1-1: Manufacturing Summary for PRS Batch GLUC-2025-PRS-01**

| Parameter | Specification/Detail | Actual Result |
| :--- | :--- | :--- |
| **Manufacturing Date** | Q1 2025 | 12-Jan-2025 to 28-Jan-2025 |
| **Cell Line** | GHS-CHO-001 (GS Knockout) | Confirmed via Genotyping |
| **Bioreactor Scale** | 2,000 L Single-Use Bioreactor | 2,000.4 L |
| **Upstream Process ID** | USP-GLUC-500 | Compliant |
| **Downstream Process ID** | DSP-GLUC-900 | Compliant |
| **Purification Stages** | Protein A / AEX / CEX / HIC | 4-Stage Chromatographic |
| **Bulk Drug Substance (BDS) Lot** | GLUC-2025-BDS-101 | Verified |
| **Total Yield (Post-UF/DF)** | 1.25 kg | 1.284 kg |

#### 3.2.S.5.1.3 Detailed Purification Protocol for PRS Selection
While the PRS is derived from a representative GMP batch, additional ultra-purification steps were applied to the PRS candidate (Sub-lot GLUC-2025-PRS-01A) to ensure the absence of trace host cell proteins (HCP) and product-related variants.

##### 3.2.S.5.1.3.1 High-Resolution Polishing
The candidate material underwent an additional High-Performance Liquid Chromatography (HPLC) polishing step using a Preparative C18 column (Phenomenex Luna, 10 μm, 250 x 50 mm). 

**Step-by-Step Preparative Procedure:**
1. **Column Equilibration:** 5 Column Volumes (CV) of 95% Water/5% Acetonitrile with 0.1% TFA.
2. **Loading:** Protein concentration adjusted to 5.0 mg/mL; total load not exceeding 2.0 g per injection.
3. **Gradient Elution:** Linear gradient from 25% to 45% Mobile Phase B over 120 minutes at a flow rate of 45 mL/min.
4. **Fraction Collection:** Fractions collected at 30-second intervals.
5. **Analytical Screening:** Fractions analyzed by UPLC-SEC (Size Exclusion) and RP-UPLC. Only fractions with >99.8% purity were pooled.

#### 3.2.S.5.1.4 Formulation and Lyophilization of the PRS
To ensure multi-decade stability, the PRS is maintained in a lyophilized state. The formulation was optimized to prevent deamidation and aggregation during the freeze-drying process.

**Table 3.2.S.5.1-2: PRS Final Formulation Composition**

| Component | Function | Concentration (Pre-Lyophilization) |
| :--- | :--- | :--- |
| Glucogen-XR | Active Moiety | 10.0 mg/mL |
| Histidine-HCl | Buffering Agent | 20 mM (pH 6.5 ± 0.1) |
| Sucrose | Cryoprotectant | 8.0% (w/v) |
| Polysorbate 20 | Surfactant | 0.02% (w/v) |
| Methionine | Antioxidant | 5 mM |

##### 3.2.S.5.1.4.1 Lyophilization Cycle Parameters (Cycle ID: LYO-GLUC-PRS-01)
The lyophilization was performed in a SP Scientific Virtis Genesis pilot-scale freeze dryer (Equipment ID: GHS-LYO-04).

1. **Freezing:** Ramp to -45°C at 0.5°C/min; Hold for 360 minutes.
2. **Primary Drying:** Shelf temperature -15°C; Chamber pressure 80 mTorr; Duration 48 hours.
3. **Secondary Drying:** Ramp to +25°C at 0.2°C/min; Chamber pressure 50 mTorr; Duration 12 hours.
4. **Stoppering:** Under high-purity Nitrogen (99.999%) at 600 mTorr.

#### 3.2.S.5.1.5 Qualification and Characterization Testing
The qualification of GLUC-2025-PRS-01 involved an exhaustive orthogonal testing suite, exceeding routine release requirements.

**Table 3.2.S.5.1-3: Characterization Results for Primary Reference Standard**

| Test Category | Method Reference | Acceptance Criteria | Result (Batch GLUC-2025-PRS-01) |
| :--- | :--- | :--- | :--- |
| **Appearance (Solid)** | USP <790> | White to off-white cake | White, homogenous cake |
| **Appearance (Recon)** | Visual | Clear, colorless, free of visible particulates | Clear, colorless, no particulates |
| **Identity (RT)** | RP-UPLC | Matches standard chromatogram | Conforms |
| **Identity (Intact Mass)** | ESI-QTOF MS | 54,321.45 Da ± 0.5 Da | 54,321.42 Da |
| **Purity (Monomer)** | SEC-UPLC | ≥ 99.5% | 99.88% |
| **Purity (Charged)** | iCIEF | Main peak ≥ 92.0% | 94.2% |
| **Potency (In Vitro)** | Cell-based Bioassay | 80% - 125% of Target | 102.4% (Assigned as 100%) |
| **Residual Moisture** | USP <921> (Karl Fischer) | ≤ 1.0% | 0.42% |
| **Host Cell Protein** | ELISA (Proprietary) | < 10 ppm | 1.2 ppm |
| **Endotoxin** | USP <85> (LAL) | < 0.5 EU/mg | < 0.05 EU/mg |

##### 3.2.S.5.1.5.1 Primary Structure Confirmation (Peptide Mapping)
Primary sequence coverage was confirmed via Tryptic and Glu-C enzymatic digestion followed by LC-MS/MS (Orbitrap Exploris 480). 100% sequence coverage was achieved, confirming the absence of amino acid substitutions or truncated forms.

**Calculated Theoretical Mass vs. Observed:**
$$Mass_{Observed} - Mass_{Theoretical} = 54,321.42 - 54,321.45 = -0.03 Da$$
*Statistical Confidence: p < 0.001*

#### 3.2.S.5.1.6 Storage and Inventory Management
The PRS is stored at the Google Health Sciences Central Repository (GHS-CR) under controlled conditions.

*   **Storage Temperature:** -70°C ± 10°C (Ultra-Low Temperature Freezer, ID: GHS-ULT-99).
*   **Vial Configuration:** 2.0 mL Type I Borosilicate Glass vials with FluroTec® coated stoppers.
*   **Inventory:** 500 vials designated for the 10-year Primary Lifecycle Program.
*   **Recertification:** Annual requalification via a Tier 1 stability program (Protocol STP-GLUC-2025-01).

#### 3.2.S.5.1.7 Regulatory Compliance Statements
The preparation of the PRS complies with the following guidelines:
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **ICH Q2(R2):** Validation of Analytical Procedures.
3.  **FDA Guidance for Industry:** Characterization and Physicochemical Self-Similarity of Therapeutic Proteins.
4.  **USP <1225>:** Validation of Compendial Procedures.

#### 3.2.S.5.1.8 Assignment of Potency
Per international standards, the biological activity of the PRS (GLUC-2025-PRS-01) is assigned a value of **1.0 Unit per mg of protein**. All subsequent Working Reference Standards will be calibrated against this absolute value using a parallel-line assay model (PLA 3.0 software) to ensure continuity of the dose-response curve across the product's clinical and commercial life.

---
**Document End (Subsection 3.2.S.5.1)**
*Revision: 1.0.0*
*Approved by: GHS Regulatory Affairs Quality Council*

---

## Comprehensive Analytical Testing

# MODULE 3: QUALITY (DATA SUPPLEMENT)
## SECTION 3.2.S.5: REFERENCE STANDARDS OR MATERIALS
### SUBSECTION 3.2.S.5.2: COMPREHENSIVE ANALYTICAL TESTING (GLUCOGEN-XR)

---

### 1.0 INTRODUCTION AND SCOPE
This subsection provides an exhaustive technical account of the analytical testing performed for the qualification and characterization of the Primary Reference Standard (PRS) and Working Reference Standard (WRS) for Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced by Google Health Sciences.

The characterization program was designed in accordance with **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q2(R1)** (Validation of Analytical Procedures). Given the extended-release nature of the peptide—achieved through a proprietary conjugation with a 40kDa branched Polyethylene Glycol (PEG) moiety—the analytical strategy encompasses primary structure verification, higher-order structure (HOS) assessment, purity/impurity profiling, and biological potency.

---

### 2.0 BATCH IDENTIFICATION AND SPECIFIC GRAVITY
The testing described herein refers specifically to the following qualification batches:
*   **Primary Reference Standard (PRS):** Batch GLUC-2025-001-PRS
*   **Working Reference Standard (WRS):** Batch GLUC-2025-002-WRS
*   **Manufacturing Site:** Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA 94080.

---

### 3.0 PRIMARY STRUCTURE CHARACTERIZATION

#### 3.1 Amino Acid Sequencing by Edman Degradation
To confirm the N-terminal sequence of the glucapeptide moiety, 10 cycles of automated Edman degradation were performed using a Shimadzu PPSQ-53A Gradient System.

**Table 1: N-Terminal Sequence Results (Batch GLUC-2025-001-PRS)**
| Cycle No. | Predicted Amino Acid | Observed Amino Acid | Yield (pmol) | Purity (%) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | His (H) | His | 42.5 | 98.2 |
| 2 | Gly (G) | Gly | 38.1 | 99.1 |
| 3 | Glu (E) | Glu | 35.4 | 97.8 |
| 4 | Gly (G) | Gly | 31.0 | 98.5 |
| 5 | Thr (T) | Thr | 28.2 | 96.4 |
| 6 | Phe (F) | Phe | 25.1 | 99.0 |
| 7 | Thr (T) | Thr | 22.8 | 95.8 |
| 8 | Ser (S) | Ser | 20.1 | 94.2 |
| 9 | Asp (D) | Asp | 18.5 | 97.1 |
| 10 | Val (V) | Val | 16.2 | 98.9 |

#### 3.2 Intact Mass Spectrometry (LC-MS/MS)
Characterization of the PEGylated peptide requires high-resolution mass spectrometry (HRMS) to account for the polydispersity of the 40kDa PEG chain.

**Protocol GHS-MS-09-A:**
1. **Instrument:** Orbitrap Exploris 480 coupled with Vanquish UHPLC.
2. **Column:** Waters ACQUITY UPLC Protein BEH C4 (300Å, 1.7 µm, 2.1 mm x 100 mm).
3. **Mobile Phase A:** 0.1% Formic Acid in Water.
4. **Mobile Phase B:** 0.1% Formic Acid in Acetonitrile.
5. **Deconvolution Software:** BioPharma Finder 4.1.

**Results:**
The observed mass centered at **44,231.5 Da**, consistent with the theoretical mass of the glucapeptide (4,230.1 Da) + PEG moiety (nominal 40,000 Da) + linker. The polydispersity index (PDI) was calculated at 1.02.

---

### 4.0 HIGHER-ORDER STRUCTURE (HOS) ANALYSIS

#### 4.1 Circular Dichroism (CD) Spectroscopy
CD spectra were recorded to evaluate secondary structural elements (α-helix, β-sheet, and random coil).

**Table 2: Secondary Structure Estimation via Far-UV CD**
| Parameter | PRS (GLUC-2025-001) | WRS (GLUC-2025-002) | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| Alpha-Helix (%) | 42.1% | 41.8% | 38.0% - 46.0% |
| Beta-Sheet (%) | 12.5% | 12.9% | Report Value |
| Random Coil (%) | 45.4% | 45.3% | Report Value |

#### 4.2 Nuclear Magnetic Resonance (NMR) - 1D 1H NMR
NMR was utilized to provide a "fingerprint" of the folding state.
*   **Buffer:** 20 mM Sodium Phosphate, pH 7.0, 10% D2O.
*   **Equipment:** Bruker Avance III 600 MHz.
*   **Observation:** The methyl region (0.5 – 1.5 ppm) and the amide region (6.0 – 9.0 ppm) showed sharp, well-resolved peaks, indicating a stable, folded conformation in the PRS batch.

---

### 5.0 PURITY AND IMPURITY PROFILING

#### 5.1 Size Exclusion Chromatography (SEC-HPLC)
To quantify high molecular weight species (HMWS) and aggregates.

**Protocol GHS-SEC-04:**
*   **Column:** TSKgel G3000SWxl (7.8 mm x 30 cm).
*   **Flow Rate:** 0.5 mL/min.
*   **Detection:** UV 214 nm.

**Table 3: SEC-HPLC Purity Profile**
| Batch ID | Monomer (%) | HMWS (%) | LMWS (%) | Retention Time (min) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.42 | 0.45 | 0.13 | 14.21 |
| GLUC-2025-002 | 99.28 | 0.58 | 0.14 | 14.19 |

#### 5.2 Reversed-Phase HPLC (RP-HPLC)
To identify chemically modified variants (oxidized, deamidated).

**Table 4: RP-HPLC Impurity Analysis**
| Impurity Type | PRS (GLUC-2025-001) | WRS (GLUC-2025-002) | Limit |
| :--- | :--- | :--- | :--- |
| Oxidized Species | 0.22% | 0.28% | < 1.0% |
| Deamidated Species| 0.35% | 0.41% | < 1.5% |
| Unconjugated Peptide| < LOD | < LOD | < 0.1% |
| Total Purity | 99.43% | 99.31% | > 97.0% |

---

### 6.0 BIOLOGICAL ACTIVITY (POTENCY)

#### 6.1 In Vitro Cell-Based Bioassay
The potency of Glucogen-XR is determined by its ability to activate the GLP-1 receptor and induce cAMP production in a HEK-293 cell line stably transfected with the human GLP-1R.

**Formula for Relative Potency:**
$$Relative Potency = \frac{EC_{50} (Reference)}{EC_{50} (Sample)} \times 100\%$$

**Table 5: Potency Results**
| Test Date | PRS Result (Unit/mg) | WRS Result (% of PRS) | 95% Confidence Interval |
| :--- | :--- | :--- | :--- |
| 12-JAN-2025 | 1,250 | 99.2% | 96.4% - 102.1% |
| 14-JAN-2025 | 1,245 | 100.5% | 97.1% - 103.8% |
| **Mean** | **1,247.5** | **99.85%** | **Pass** |

---

### 7.0 GLYCAN ANALYSIS (IF APPLICABLE)
*Note: Glucogen-XR is produced in CHO-K1 GS-null cells; however, the peptide sequence does not contain N-linked glycosylation sites (Asn-X-Ser/Thr). O-glycosylation analysis by HPAEC-PAD confirmed the absence of significant carbohydrate moieties.*

---

### 8.0 PRODUCT-SPECIFIC TESTS

#### 8.1 Free PEG Determination
A critical quality attribute (CQA) for Glucogen-XR is the level of unreacted 40kDa PEG.
*   **Method:** Validated Thiobarbituric Acid Reactive Substances (TBARS) modified assay.
*   **Result:** GLUC-2025-001: 12 µg/mg; GLUC-2025-002: 15 µg/mg (Spec: < 50 µg/mg).

#### 8.2 PEG Polydispersity by MALDI-TOF
*   **Instrument:** Bruker Autoflex Speed.
*   **Matrix:** Sinapinic acid (SA).
*   **Data:** The mass distribution follows a Gaussian curve with an average molecular weight (Mw) of 40,102 Da and a number average molecular weight (Mn) of 39,215 Da.

---

### 9.0 STABILITY AND STORAGE OF REFERENCE STANDARDS
The PRS (GLUC-2025-001) is stored in the dark at **-80°C ± 5°C** in medical-grade Type I borosilicate glass vials with FluroTec® coated stoppers. The WRS is stored at **-20°C ± 2°C**.

**Table 6: Stability Monitoring Program (Reference Standard)**
| Time Point | Test Conducted | Acceptance Criteria | Result (T=0) |
| :--- | :--- | :--- | :--- |
| 0 Months | Full Characterization | Meet Specifications | Complies |
| 6 Months | Potency, SEC, RP-HPLC | ± 10% of T0 | Pending |
| 12 Months | Full Characterization | Meet Specifications | Pending |
| 24 Months | Full Characterization | Meet Specifications | Pending |

---

### 10.0 CONCLUSION
Based on the comprehensive analytical testing described above, Batch **GLUC-2025-001-PRS** is hereby qualified as the Primary Reference Standard for Glucogen-XR. It demonstrates high purity (>99%), correct primary and secondary structure, and potent biological activity. Batch **GLUC-2025-002-WRS** is qualified against the PRS for routine use in quality control release and stability testing.

---
**Approved By:**
*Dr. Aris V. C., Head of Regulatory Affairs, Google Health Sciences*
*Date: 15-FEB-2025*
*Document ID: GHS-32S52-CAT-001*

---

## Assignment of Potency Value

### **3.2.S.5. Reference Standards or Materials**
#### **3.2.S.5.3. Assignment of Potency Value**

---

#### **1. INTRODUCTION AND SCOPE**
The assignment of the potency value for the Glucogen-XR (glucapeptide extended-release) Primary Reference Standard (PRS), Lot GLUC-2025-001, and subsequent Working Reference Standards (WRS), represents a critical juncture in the CMC (Chemistry, Manufacturing, and Controls) dossier. This section details the multi-tiered, statistically rigorous approach employed by Google Health Sciences to define the biological activity of the drug substance.

As a GLP-1 receptor agonist, Glucogen-XR’s clinical efficacy is directly correlated with its ability to bind to and activate the human GLP-1 receptor (GLP-1R), leading to glucose-dependent insulin secretion. Therefore, the potency assignment is not merely a measure of mass, but a measure of biological functional integrity. 

This assignment follows the directives outlined in:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <111>:** Design and Analysis of Biological Assays.
*   **USP <1032>:** Design and Development of Biological Assays.
*   **USP <1033>:** Biological Assay Validation.
*   **USP <1034>:** Analysis of Biological Assays.

---

#### **2. STATISTICAL MODEL AND CALCULATION FORMULAE**
The potency of Glucogen-XR is expressed as a relative value against a predefined internal standard or, in the case of the initial PRS, as an absolute bioactivity value derived from an $N$-weighted average of multiple independent runs.

##### **2.1. The Four-Parameter Logistic (4-PL) Model**
The biological response (luminescence or cAMP concentration) is modeled using a 4-parameter logistic equation:

$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$

Where:
*   **$y$**: The measured response (e.g., Relative Light Units, RLU).
*   **$x$**: The concentration of Glucogen-XR.
*   **$A$**: The asymptotic maximum (upper plateau), representing maximal receptor activation ($E_{max}$).
*   **$D$**: The asymptotic minimum (lower plateau), representing baseline activity.
*   **$C$**: The $EC_{50}$ (half-maximal effective concentration), the primary inflection point.
*   **$B$**: The Hill Slope (Slope Factor), representing the cooperativity of ligand-receptor binding.

##### **2.2. Relative Potency Calculation**
Relative Potency ($RP$) is calculated by comparing the $EC_{50}$ of the Sample ($S$) to the $EC_{50}$ of the Reference Standard ($R$):

$$RP = \frac{EC_{50(Reference)}}{EC_{50(Sample)}} \times 100\%$$

For the initial assignment of Lot GLUC-2025-001, an absolute potency value (Units/mg) was established based on the specific activity determined via the cAMP-responsive element (CRE) reporter gene assay.

---

#### **3. PRIMARY POTENCY ASSAY PROTOCOL: IN VITRO CELL-BASED BIOASSAY**
The potency of Glucogen-XR is determined using a proprietary HEK-293 cell line stably transfected with the human GLP-1 receptor and a luciferase reporter gene under the control of the cAMP-Response Element (CRE).

##### **3.1. Technical Specifications**
*   **Cell Line ID:** GHS-HEK-GLP1R-092
*   **Passage Range:** 5 to 22
*   **Equipment:** Molecular Devices SpectraMax® i3x Multi-Mode Microplate Reader
*   **Software:** SoftMax® Pro 7.1 GxP (Validated)

##### **3.2. Detailed Step-by-Step Procedure**
1.  **Cell Preparation:** Thaw one vial of GHS-HEK-GLP1R-092 and expand in DMEM/F12 supplemented with 10% FBS and selective antibiotics (Hygromycin B).
2.  **Seeding:** Seed 20,000 cells/well in a 96-well white-walled, clear-bottom plate. Incubate for 24 hours at 37°C, 5% $CO_2$.
3.  **Sample Preparation (Lot GLUC-2025-001):**
    *   Reconstitute the lyophilized PRS in Assay Buffer (HBSS + 0.1% BSA + 0.5 mM IBMX).
    *   Prepare a 10-point serial dilution series ranging from $1 \times 10^{-7}$ M to $1 \times 10^{-13}$ M.
4.  **Stimulation:** Remove growth media and add 50 $\mu$L of the dilution series to the cell plate. Incubate for 4 hours at 37°C.
5.  **Detection:** Add 50 $\mu$L of Steady-Glo® Luciferase Reagent. Incubate for 10 minutes at room temperature in the dark.
6.  **Measurement:** Read luminescence.

---

#### **4. POTENCY ASSIGNMENT DATA FOR PRS LOT GLUC-2025-001**
The assignment was based on 15 independent assay runs performed by three different analysts over five days.

**Table 1: Summary of Potency Results for Primary Reference Standard GLUC-2025-001**

| Run ID | Date | Analyst | $EC_{50}$ (pM) | Hill Slope | $S/B$ Ratio* | Result (Units/mg)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| R-2025-01-A | 12-Jan-2025 | J. Doe | 12.4 | 1.12 | 45.2 | 100,200 |
| R-2025-01-B | 12-Jan-2025 | J. Doe | 12.1 | 1.09 | 48.1 | 101,500 |
| R-2025-01-C | 12-Jan-2025 | J. Doe | 12.8 | 1.15 | 44.9 | 98,400 |
| R-2025-02-A | 13-Jan-2025 | A. Smith | 11.9 | 1.05 | 50.2 | 102,100 |
| R-2025-02-B | 13-Jan-2025 | A. Smith | 12.5 | 1.10 | 46.8 | 99,800 |
| R-2025-02-C | 13-Jan-2025 | A. Smith | 12.2 | 1.08 | 47.5 | 101,200 |
| R-2025-03-A | 14-Jan-2025 | L. Chen | 13.0 | 1.18 | 42.1 | 96,500 |
| R-2025-03-B | 14-Jan-2025 | L. Chen | 12.7 | 1.14 | 43.5 | 98,900 |
| R-2025-03-C | 14-Jan-2025 | L. Chen | 12.4 | 1.11 | 45.9 | 100,400 |
| ... | ... | ... | ... | ... | ... | ... |
| **Mean** | -- | -- | **12.41** | **1.11** | **46.0** | **99,889** |
| **%RSD** | -- | -- | **2.8%** | **3.5%** | **5.2%** | **2.1%** |

*\*S/B Ratio: Signal-to-Background (Max RLU / Min RLU).*
*\*\*Units/mg: Defined as the inverse of the $EC_{50}$ in molarity multiplied by a correction factor for specific molecular weight (45.2 kDa).*

**Assigned Potency for GLUC-2025-001:** **100,000 Units/mg** (Rounded for standard application).

---

#### **5. SYSTEM SUITABILITY AND ACCEPTANCE CRITERIA**
To ensure the validity of the potency assignment, each assay run had to meet the following criteria:

1.  **Coefficient of Determination ($R^2$):** $\ge 0.98$.
2.  **Signal-to-Background Ratio:** $\ge 20$.
3.  **Sample Parallelism:** The slope of the sample curve must be within 0.80 to 1.25 of the reference curve (F-test probability > 0.05).
4.  **Precision of Replicates:** %CV of RLU values for each concentration point $\le 15\%$.
5.  **Recovery of Quality Control (QC):** A pre-qualified control must recover within 80%–120% of its target potency.

---

#### **6. MASS BALANCE AND ORTHOGONAL CHARACTERIZATION**
Potency is further corroborated by mass-based purity assessments to ensure that the assigned biological activity corresponds to the chemical integrity of the peptide.

**Table 2: Orthogonal Data for Potency Correlation**

| Method | Parameter | Result (Batch GLUC-2025-001) |
| :--- | :--- | :--- |
| RP-HPLC | Purity (%) | 99.4% |
| SEC-HPLC | Monomer Content (%) | 99.8% |
| LC-MS/MS | Intact Mass (Da) | 45,212.4 (Matches Theory) |
| Glycan Mapping | Total Sialylation | 2.8 mol/mol protein |
| CD Spectroscopy | Molar Ellipticity | Consistent with $\alpha$-helical structure |

---

#### **7. WORKING REFERENCE STANDARD (WRS) QUALIFICATION PROTOCOL**
When the PRS supply is depleted, a WRS (e.g., Lot GLUC-2025-002) is qualified against the PRS.

##### **7.1. Bridging Study Design**
*   **Direct Comparison:** 10 independent assays comparing WRS to PRS.
*   **Calibration:** The WRS is assigned a relative potency (%) against the PRS.
*   **Standardization:** The WRS mass is adjusted so that 1.0 mg of WRS provides exactly the same biological response as 1.0 mg of PRS.

**Table 3: Bridging Study - WRS (GLUC-2025-002) vs. PRS (GLUC-2025-001)**

| Parameter | Acceptance Criteria | Observed Value | Result |
| :--- | :--- | :--- | :--- |
| Relative Potency | 90% - 110% | 102.4% | Pass |
| 95% CI of RP | Within 80% - 125% | 98.6% - 106.2% | Pass |
| Slope Ratio | 0.90 - 1.10 | 0.98 | Pass |

---

#### **8. CONTINUOUS MONITORING AND STABILITY OF POTENCY**
The potency of the reference standard is monitored via the **Reference Standard Stability Program (RSSP)**.

*   **Frequency:** Months 0, 3, 6, 9, 12, 18, 24, 36, 48, 60.
*   **Storage:** $-80^\circ C \pm 5^\circ C$ in evacuated Type I borosilicate glass vials.
*   **Stability Indicating Protocol:** Any decrease in potency $> 10\%$ from the initial T=0 value triggers a formal investigation (CAPA) and potential re-qualification of a new lot.

---

#### **9. REGULATORY CONFORMANCE STATEMENT**
The assignment of potency for Glucogen-XR follows the "well-characterized biologic" paradigm. The data presented in this section demonstrate that the Primary Reference Standard GLUC-2025-001 possesses the requisite biological activity, purity, and stability to serve as the benchmark for all future clinical and commercial lots. All statistical analyses were performed using SAS® version 9.4 in compliance with 21 CFR Part 11.

---
**Footnotes:**
1. *Google Health Sciences internal SOP-BIO-0098: Bioassay Statistical Analysis.*
2. *European Pharmacopoeia (Ph. Eur.) 5.3: Statistical Analysis of Results of Biological Assays.*
3. *ICH Q2(R1): Validation of Analytical Procedures.*

---

# Comparability of Drug Substance Batches

## Batch-to-Batch Consistency

### 3.2.S.3. CHARACTERIZATION
### 3.2.S.3.2. COMPARABILITY OF DRUG SUBSTANCE BATCHES
#### SUBSECTION: 3.2.S.3.2.1. Batch-to-Batch Consistency

---

#### 1.0 INTRODUCTION AND SCOPE

The assessment of batch-to-batch consistency for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences, is a multi-dimensional evaluative process designed to ensure the stability, safety, and efficacy of the Drug Substance (DS). This section provides an exhaustive analysis of ten (10) consecutive Good Manufacturing Practice (GMP) batches produced at the South San Francisco facility (3000 Innovation Drive).

Consistency is established through a rigorous comparison of primary, secondary, and tertiary structural attributes, post-translational modification (PTM) profiles, glycan distribution, and biological potency. The manufacturing process utilizes the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line, integrated with a high-throughput, automated perfusion bioreactor system controlled by Google Cloud AI-driven process analytics.

The objective of this documentation is to demonstrate that the Glucogen-XR manufacturing process is under a state of statistical control, yielding a product that adheres to the predefined Quality Target Product Profile (QTPP) and meets all Critical Quality Attributes (CQAs) as defined in ICH Q6B and ICH Q11.

---

#### 2.0 BATCH IDENTIFICATION AND MANUFACTURING HISTORY

The following table (Table 3.2.S.3.2.1-1) identifies the specific Drug Substance batches utilized for the consistency evaluation. These batches represent the clinical and scale-up validation campaign conducted between Q1 2024 and Q1 2025.

**Table 3.2.S.3.2.1-1: Summary of Glucogen-XR DS Batches for Consistency Evaluation**

| Batch Number | Manufacturing Date | Scale (Working Volume) | Primary Purpose | Site of Manufacture |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 2,000 L | Clinical Phase III | SSF-Bldg 3 |
| GLUC-2025-002 | 26-JAN-2025 | 2,000 L | Clinical Phase III | SSF-Bldg 3 |
| GLUC-2025-003 | 09-FEB-2025 | 2,000 L | Process Validation (PV-1) | SSF-Bldg 3 |
| GLUC-2025-004 | 23-FEB-2025 | 2,000 L | Process Validation (PV-2) | SSF-Bldg 3 |
| GLUC-2025-005 | 09-MAR-2025 | 2,000 L | Process Validation (PV-3) | SSF-Bldg 3 |
| GLUC-2025-006 | 23-MAR-2025 | 2,000 L | Stability Testing / PPQ | SSF-Bldg 3 |
| GLUC-2025-007 | 06-APR-2025 | 2,000 L | Commercial Launch Stock | SSF-Bldg 3 |
| GLUC-2025-008 | 20-APR-2025 | 2,000 L | Commercial Launch Stock | SSF-Bldg 3 |
| GLUC-2025-009 | 04-MAY-2025 | 2,000 L | Retention / Reference | SSF-Bldg 3 |
| GLUC-2025-010 | 18-MAY-2025 | 2,000 L | Retention / Reference | SSF-Bldg 3 |

---

#### 3.0 PHYSICOCHEMICAL CHARACTERIZATION CONSISTENCY

Characterization was performed using a suite of orthogonal analytical techniques. Each batch was analyzed in triplicate to ensure statistical relevance.

##### 3.1 Primary Structure and Amino Acid Sequence
Consistency of the primary sequence was verified via Liquid Chromatography-Mass Spectrometry (LC-MS/MS) peptide mapping.

**Protocol GHS-ANA-PM-01: Tryptic Digestion and Orbitrap MS Analysis**
1.  **Denaturation:** DS samples diluted to 2.0 mg/mL in 6M Guanidine-HCl.
2.  **Reduction:** Addition of 10mM DTT at 56°C for 45 minutes.
3.  **Alkylation:** Addition of 20mM Iodoacetamide at RT for 30 minutes in the dark.
4.  **Digestion:** Tryptic digestion (1:20 enzyme-to-protein ratio) for 16 hours at 37°C.
5.  **Quenching:** 0.1% Formic acid.
6.  **Analysis:** Thermo Scientific™ Orbitrap™ Exploris 480; Gradient: 2% to 45% ACN over 90 minutes.

**Table 3.2.S.3.2.1-2: Sequence Coverage and Mass Accuracy Data**

| Batch Number | Sequence Coverage (%) | Theoretical Mass (Da) | Observed Mass (Da) | Delta (ppm) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 100% | 48,256.42 | 48,256.45 | 0.62 |
| GLUC-2025-002 | 100% | 48,256.42 | 48,256.41 | -0.21 |
| GLUC-2025-003 | 100% | 48,256.42 | 48,256.43 | 0.21 |
| GLUC-2025-004 | 100% | 48,256.42 | 48,256.47 | 1.04 |
| GLUC-2025-005 | 100% | 48,256.42 | 48,256.40 | -0.41 |
| GLUC-2025-006 | 100% | 48,256.42 | 48,256.44 | 0.41 |
| GLUC-2025-007 | 100% | 48,256.42 | 48,256.42 | 0.00 |
| GLUC-2025-008 | 100% | 48,256.42 | 48,256.46 | 0.83 |
| GLUC-2025-009 | 100% | 48,256.42 | 48,256.41 | -0.21 |
| GLUC-2025-010 | 100% | 48,256.42 | 48,256.44 | 0.41 |
| **Mean** | **100%** | **N/A** | **48,256.43** | **0.37** |
| **Std Dev** | **0.00** | **N/A** | **0.023** | **0.47** |

---

##### 3.2 Secondary and Tertiary Structure (CD and DSC)
To confirm folding consistency across batches, Circular Dichroism (CD) and Differential Scanning Calorimetry (DSC) were employed.

**Protocol GHS-ANA-CD-04: Far-UV CD Spectroscopy**
*   Instrument: Jasco J-1500.
*   Path length: 0.1 cm.
*   Wavelength range: 190 nm to 260 nm.
*   Concentration: 0.2 mg/mL in Phosphate Buffer (pH 7.4).

**Table 3.2.S.3.2.1-3: Secondary Structure Percentages via CD Deconvolution**

| Batch Number | Alpha-Helix (%) | Beta-Sheet (%) | Random Coil (%) | Tm (°C) via DSC |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 42.1 | 18.2 | 39.7 | 68.4 |
| GLUC-2025-002 | 41.9 | 18.5 | 39.6 | 68.5 |
| GLUC-2025-003 | 42.0 | 18.3 | 39.7 | 68.3 |
| GLUC-2025-004 | 42.3 | 18.1 | 39.6 | 68.6 |
| GLUC-2025-005 | 42.2 | 18.4 | 39.4 | 68.4 |
| **Acceptance Criteria** | **40-45%** | **15-20%** | **35-45%** | **67.0 - 70.0** |

---

#### 4.0 PURITY AND IMPURITY PROFILES

Purity is assessed through Size-Exclusion Chromatography (SE-HPLC) for aggregates and Ion-Exchange Chromatography (IEX) for charge variants.

##### 4.1 Size-Exclusion Chromatography (SEC)
High-molecular-weight species (HMWS) and Low-molecular-weight species (LMWS) must be minimized.

**Calculation of Purity:**
$$ \% \text{Monomer} = \left( \frac{\text{Area}_{\text{Monomer}}}{\sum \text{Area}_{\text{Total}}} \right) \times 100 $$

**Table 3.2.S.3.2.1-4: SEC-HPLC Purity Results (Column: TSKgel G3000SWxl)**

| Batch Number | % Monomer | % HMWS | % LMWS | Resolution ($R_s$) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.42 | 0.45 | 0.13 | 2.1 |
| GLUC-2025-002 | 99.38 | 0.48 | 0.14 | 2.0 |
| GLUC-2025-003 | 99.51 | 0.40 | 0.09 | 2.2 |
| GLUC-2025-004 | 99.45 | 0.44 | 0.11 | 2.1 |
| GLUC-2025-005 | 99.40 | 0.49 | 0.11 | 2.1 |
| GLUC-2025-006 | 99.47 | 0.42 | 0.11 | 2.2 |
| GLUC-2025-007 | 99.39 | 0.50 | 0.11 | 2.1 |
| GLUC-2025-008 | 99.41 | 0.47 | 0.12 | 2.0 |
| GLUC-2025-009 | 99.44 | 0.43 | 0.13 | 2.1 |
| GLUC-2025-010 | 99.46 | 0.41 | 0.13 | 2.2 |
| **Standard Dev** | **0.041** | **0.033** | **0.015** | **0.07** |

---

#### 5.0 GLYCOSYLATION PATTERN CONSISTENCY

Glucogen-XR is an O-glycosylated peptide. The N-acetylgalactosamine (GalNAc) and Sialic Acid (NANA) content are critical for the *in vivo* half-life (extended-release properties).

##### 5.1 N-Glycan Analysis (Post-PNGase F) and O-Glycan Mapping
The O-glycan profile was determined via HPAEC-PAD (High-Performance Anion-Exchange Chromatography with Pulsed Amperometric Detection).

**Table 3.2.S.3.2.1-5: Distribution of Major Glycan Species (Relative Area %)**

| Batch ID | Core 1 (Gal-GalNAc) | Monosialylated | Disialylated | Total Sialic Acid (mol/mol) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12.4 | 45.6 | 42.0 | 4.8 |
| GLUC-2025-002 | 12.1 | 46.2 | 41.7 | 4.7 |
| GLUC-2025-003 | 12.8 | 44.9 | 42.3 | 4.9 |
| GLUC-2025-004 | 12.5 | 45.3 | 42.2 | 4.8 |
| GLUC-2025-005 | 12.3 | 45.8 | 41.9 | 4.8 |
| **Limit (Spec)** | **Report** | **Report** | **$\ge 38.0\%$** | **4.5 - 5.5** |

---

#### 6.0 BIOLOGICAL ACTIVITY AND POTENCY CONSISTENCY

Biological activity is measured using a cell-based reporter gene assay (GHS-BIO-77) utilizing a HEK-293 cell line transfected with the human GLP-1 receptor and a cAMP-response element (CRE) coupled to luciferase.

**Potency Calculation (Parallel Line Analysis):**
The $EC_{50}$ of the Sample is compared to the $EC_{50}$ of the Google Health Sciences Reference Standard (GHS-REF-GLUC-002).

$$ \% \text{Relative Potency} = \left( \frac{EC_{50, \text{Standard}}}{EC_{50, \text{Sample}}} \right) \times 100 $$

**Table 3.2.S.3.2.1-6: Biological Potency Results (n=6 per batch)**

| Batch Number | Relative Potency (%) | 95% Confidence Interval | Dose-Response Slope |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 102 | 98 - 106 | 1.12 |
| GLUC-2025-002 | 98 | 94 - 102 | 1.09 |
| GLUC-2025-003 | 105 | 101 - 109 | 1.15 |
| GLUC-2025-004 | 101 | 97 - 105 | 1.10 |
| GLUC-2025-005 | 99 | 95 - 103 | 1.11 |
| GLUC-2025-006 | 100 | 96 - 104 | 1.13 |
| GLUC-2025-007 | 103 | 99 - 107 | 1.14 |
| GLUC-2025-008 | 97 | 93 - 101 | 1.08 |
| GLUC-2025-009 | 101 | 97 - 105 | 1.11 |
| GLUC-2025-010 | 104 | 100 - 108 | 1.12 |
| **Average** | **101.0%** | **--** | **1.115** |

---

#### 7.0 PROCESS-RELATED IMPURITIES

To demonstrate consistency in the purification process (Protein A capture, AEX, CEX, and Nano-filtration), host cell proteins (HCP) and residual DNA (rDNA) were quantified.

**Table 3.2.S.3.2.1-7: Residual Process Impurities**

| Batch Number | HCP (ppm) [ELISA] | r-DNA (pg/mg) [qPCR] | Residual Protein A (ppm) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12.4 | 0.8 | < LOD |
| GLUC-2025-002 | 14.1 | 1.2 | < LOD |
| GLUC-2025-003 | 11.8 | 0.5 | < LOD |
| GLUC-2025-004 | 13.5 | 0.9 | < LOD |
| GLUC-2025-005 | 10.9 | 0.7 | < LOD |
| **Action Limit** | **< 100 ppm** | **< 10 pg/mg** | **< 5 ppm** |

---

#### 8.0 STATISTICAL ANALYSIS OF CONSISTENCY

A Statistical Process Control (SPC) analysis was performed on the ten batches. The Process Capability Index ($C_{pk}$) was calculated for the primary potency assay and the SEC purity.

**Formula for $C_{pk}$:**
$$ C_{pk} = \min \left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right) $$
Where:
*   $USL$ = Upper Specification Limit
*   $LSL$ = Lower Specification Limit
*   $\mu$ = Process Mean
*   $\sigma$ = Process Standard Deviation

**Statistical Results:**
*   **Potency $C_{pk}$:** 2.45 (indicates highly capable process)
*   **SEC Purity $C_{pk}$:** 3.12 (indicates exceptionally low variability)

---

#### 9.0 REGULATORY COMPLIANCE AND GUIDELINES

The characterization and consistency data presented herein have been generated in accordance with:
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in Their Manufacturing Process.
3.  **USP <121>:** Insulin Assays (referenced for general peptide bioassay alignment).
4.  **21 CFR Part 211:** Current Good Manufacturing Practice for Finished Pharmaceuticals.

---

#### 10.0 CONCLUSION

The data from the ten evaluated batches (GLUC-2025-001 through GLUC-2025-010) demonstrate a high degree of batch-to-batch consistency. The Glucogen-XR Drug Substance exhibits reproducible primary, secondary, and tertiary structures, consistent glycan occupancy, and highly uniform biological activity. All observed variations remain well within the established release specifications and statistical control limits, confirming the robustness of the Google Health Sciences manufacturing platform.

---

## Process Changes and Comparability

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.6: MANUFACTURING PROCESS DEVELOPMENT
### SUBSECTION: PROCESS CHANGES AND COMPARABILITY

---

## 1.0 INTRODUCTION AND SCOPE

This section provides a comprehensive assessment of the comparability of **Glucogen-XR (glucapeptide extended-release)** drug substance (DS) throughout the clinical development program, specifically focusing on the transition from Clinical Phase II (Process Gen-1.2) to Commercial Scale Manufacturing (Process Gen-2.0). 

As a GLP-1 receptor agonist produced via recombinant DNA technology in a proprietary **GHS-CHO-001 cell line**, Glucogen-XR exhibits high sensitivity to process parameters. Google Health Sciences (GHS) has adhered to **ICH Q5E: Comparability of Biotechnological/Biological Products** to ensure that changes in the manufacturing process do not adversely affect the safety, identity, purity, or potency of the drug substance.

### 1.1 Regulatory Framework
The comparability studies described herein were conducted in accordance with:
*   **ICH Q5E**: Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **FDA Guidance for Industry**: Q5E Comparability of Biotechnological/Biological Products (2005).
*   **USP <129>**: Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for peptide therapeutics).

---

## 2.0 CHRONOLOGY OF PROCESS CHANGES

The evolution of the Glucogen-XR manufacturing process is categorized into three primary milestones. The "Process Changes and Comparability" analysis focuses on the high-impact transition between the Clinical (Phase II/III) and Commercial processes.

### Table 2.1: Summary of Manufacturing Process Generations

| Process Version | Site of Manufacture | Scale (L) | Clinical Phase | Primary Changes |
| :--- | :--- | :--- | :--- | :--- |
| **Gen-1.0** | GHS Pilot Plant (SSF) | 200 L | Phase I | Original peptide sequence; manual purification. |
| **Gen-1.2** | GHS Clinical Suite | 1,000 L | Phase II/III | Optimized media (Serum-free); automated chromatography. |
| **Gen-2.0** | 3000 Innovation Dr, SSF | 5,000 L | Commercial | Scale-up; new Protein-A resin; inclusion of Viral Inactivation (VI) step. |

### 2.2 Detailed Description of "Gen-2.0" Process Enhancements
The transition to the commercial process (Gen-2.0) involved four critical modifications (CMs):

1.  **CM-01: Upstream Scale-Up**: Increase from 1,000 L to 5,000 L working volume using a stainless-steel bioreactor (Equip ID: BIO-5K-009).
2.  **CM-02: Media Formulation**: Transition from GHS-Med-V4 to GHS-Med-V5 (increased glutamine and zinc concentrations to stabilize the glucapeptide secondary structure).
3.  **CM-03: Chromatography Resin**: Switch from Resin-Alpha to **Resin-Beta-HighCap** (increased binding capacity by 25% for better recovery of the XR-linked peptide).
4.  **CM-04: Filtration Methodology**: Implementation of tangential flow filtration (TFF) with a 30 kDa cutoff instead of the previous 10 kDa cutoff to reduce HCP (Host Cell Protein) carryover.

---

## 3.0 COMPARABILITY STRATEGY AND STATISTICAL PLAN

To demonstrate comparability, GHS utilized a **Three-Tiered Analytical Approach** designed to evaluate primary, secondary, and tertiary structures, as well as biological activity and impurity profiles.

### 3.1 Tiered Comparability Framework
*   **Tier 1 (Release Specifications):** Direct comparison of release data against approved specifications.
*   **Tier 2 (Characterization):** Extended characterization including N/C-terminal sequencing, PTM (Post-Translational Modification) mapping, and glycan profiling (if applicable to the XR-linker).
*   **Tier 3 (Stability):** Side-by-side accelerated stability studies (25°C/60% RH) for 6 months.

### 3.2 Statistical Methodology
Comparability was established using **Equivalence Testing** for quantitative attributes. The acceptance criterion was defined as:
$$ ( \mu_{Gen2.0} - \mu_{Gen1.2} ) \in [-k \cdot \sigma_{Gen1.2}, +k \cdot \sigma_{Gen1.2}] $$
Where $k=3$ (the "3-sigma" rule) was applied for critical quality attributes (CQAs).

---

## 4.0 BATCH ANALYSIS AND RESULTS

The following batches were utilized for the comparability exercise. 

### Table 4.1: Batches Included in the Comparability Study
| Batch Number | Process Version | Manufacturing Date | Facility | Use |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | Gen-1.2 | 12-JAN-2025 | Clinical Suite | Phase III Clinical Supply |
| GLUC-2025-002 | Gen-1.2 | 05-FEB-2025 | Clinical Suite | Phase III Clinical Supply |
| GLUC-2025-003 | Gen-1.2 | 01-MAR-2025 | Clinical Suite | Retrospective Control |
| **GLUC-2025-101** | **Gen-2.0** | **15-APR-2025** | **Innovation Dr.** | **Commercial PPQ-1** |
| **GLUC-2025-102** | **Gen-2.0** | **02-MAY-2025** | **Innovation Dr.** | **Commercial PPQ-2** |
| **GLUC-2025-103** | **Gen-2.0** | **20-MAY-2025** | **Innovation Dr.** | **Commercial PPQ-3** |

### 4.2 Physicochemical Characterization (Extended Profile)

#### 4.2.1 Primary Structure: Peptide Mapping by LC-MS/MS
Samples were digested with Trypsin/Chymotrypsin and analyzed via Orbitrap Mass Spectrometry.

**Protocol GLUC-PRO-772 (Digestion):**
1. Denature 100 µg DS in 6M Guanidine HCl.
2. Reduce with 10 mM DTT at 56°C for 45 mins.
3. Alkylate with 25 mM Iodoacetamide in the dark for 30 mins.
4. Quench with Excess Cysteine.
5. Digest at 1:20 enzyme-to-protein ratio.

**Results:**
The chromatograms for GLUC-2025-001 (Clinical) and GLUC-2025-101 (Commercial) showed **99.8% sequence coverage overlap**. No new peptide peaks >0.05% relative area were identified in the Gen-2.0 batches.

#### Table 4.2: Comparison of Post-Translational Modifications (PTMs)
| Attribute | Gen-1.2 Mean (n=3) | Gen-2.0 Mean (n=3) | Difference | Acceptance Criteria | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Deamidation (N28) | 1.2% | 1.3% | +0.1% | ±0.5% | Pass |
| Oxidation (M14) | 0.8% | 0.9% | +0.1% | ±0.4% | Pass |
| C-term Lysine Clipping | 98.5% | 98.7% | +0.2% | ±1.0% | Pass |
| Pyro-Glu Formation | 0.4% | 0.4% | 0.0% | ±0.2% | Pass |

---

## 5.0 HIGHER-ORDER STRUCTURE (HOS) ANALYSIS

To ensure the extended-release (XR) properties remained intact, the secondary and tertiary structures were analyzed via Circular Dichroism (CD) and Differential Scanning Calorimetry (DSC).

### 5.1 Circular Dichroism (Far-UV)
*   **Equipment:** Jasco J-1500 Spectropolarimeter.
*   **Pathlength:** 0.1 cm.
*   **Spectral Range:** 190 nm to 260 nm.

**Analysis:**
Both Gen-1.2 and Gen-2.0 batches exhibited the characteristic double minima at 208 nm and 222 nm, indicative of high $\alpha$-helical content (approx. 42%). The Mean Residue Ellipticity ($\theta$) at 222 nm for GLUC-2025-101 was $-18,500$ deg·cm²/dmol, compared to $-18,450$ for the clinical reference.

### 5.2 DSC Thermal Stability
The thermal transition midpoint ($T_m$) represents the stability of the glucapeptide-XR complex.

*   **Batch GLUC-2025-001:** $T_m = 68.4^\circ\text{C}$
*   **Batch GLUC-2025-101:** $T_m = 68.6^\circ\text{C}$
*   **Statistical Delta:** $0.2^\circ\text{C}$ (within the instrument precision of $\pm0.5^\circ\text{C}$).

---

## 6.0 BIOLOGICAL ACTIVITY AND POTENCY

Potency was assessed using a Cell-Based GLP-1 Receptor Activation Assay (Luminescence-based cAMP induction).

### 6.1 Potency Protocol (GHS-BIO-440)
1. Seed HEK293 cells expressing human GLP-1R at $5 \times 10^4$ cells/well.
2. Incubate with serial dilutions of Glucogen-XR ($10^{-12}$ to $10^{-6}$ M).
3. Measure cAMP production using the GloSensor™ luciferase kit.
4. Calculate $EC_{50}$ using a 4-parameter logistic (4PL) model.

### Table 6.1: Comparative Potency Data
| Batch Number | Relative Potency (%) | 95% CI Lower | 95% CI Upper | Slope |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 102% | 98% | 106% | 1.05 |
| GLUC-2025-002 | 99% | 95% | 103% | 1.02 |
| GLUC-2025-101 | 101% | 97% | 105% | 1.04 |
| GLUC-2025-102 | 103% | 99% | 107% | 1.06 |
| **Acceptance** | **80 - 125%** | **N/A** | **N/A** | **0.8 - 1.2** |

---

## 7.0 IMPURITY PROFILES (PRODUCT-RELATED AND PROCESS-RELATED)

### 7.1 Purity by RP-HPLC and SEC-HPLC
Size-exclusion chromatography (SEC-HPLC) was used to quantify high molecular weight species (HMWS/Aggregates).

**SEC-HPLC Conditions:**
*   Column: TSKgel G3000SWxl
*   Mobile Phase: 0.1M Phosphate, 0.2M NaCl, pH 6.8
*   Flow Rate: 0.5 mL/min

| Batch | % Main Peak | % HMWS | % LMWS |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.42 | 0.51 | 0.07 |
| GLUC-2025-101 | 99.38 | 0.55 | 0.07 |
| GLUC-2025-102 | 99.40 | 0.53 | 0.07 |

### 7.2 Process-Related Impurities (HCP and ProA)
The transition to Gen-2.0 involved a scale-up of the Protein-A capture step. 

*   **Host Cell Protein (HCP):** Measured via 3rd Gen CHO HCP ELISA (Cygnus Technologies).
    *   Gen-1.2: 12 ppm (avg)
    *   Gen-2.0: 8 ppm (avg) - *Improved due to optimized TFF wash.*
*   **Leached Protein A:** Measured via ELISA.
    *   Gen-1.2: <1.5 ng/mg
    *   Gen-2.0: <1.5 ng/mg (Below LOD)

---

## 8.0 VIRAL CLEARANCE VALIDATION

The Gen-2.0 process introduced a dedicated Solvent/Detergent (S/D) Viral Inactivation step (Step 4.2). A viral clearance study was conducted using model viruses: XMuLV (Enveloped) and MMV (Non-enveloped).

### Table 8.1: Log Reduction Factors (LRF) for Gen-2.0 Process
| Process Step | XMuLV (Log10) | MMV (Log10) |
| :--- | :--- | :--- |
| S/D Inactivation | > 4.82 | N/A |
| Protein A | 3.45 | 1.20 |
| Cation Exchange | 2.10 | 1.55 |
| Viral Filtration | > 5.12 | 4.30 |
| **Total LRF** | **> 15.49** | **7.05** |

---

## 9.0 STABILITY COMPARABILITY

A side-by-side stability study was initiated to confirm that the Gen-2.0 process does not introduce new degradation pathways.

### 9.1 Accelerated Conditions (25°C ± 2°C / 60% RH ± 5% RH)
Data for the first 3 months of the 6-month study are provided.

| Test | Timepoint | GLUC-2025-001 (Ref) | GLUC-2025-101 (Test) |
| :--- | :--- | :--- | :--- |
| **Purity (RP-HPLC)** | T=0 | 99.1% | 99.2% |
| | T=1M | 98.8% | 98.7% |
| | T=3M | 98.2% | 98.1% |
| **Aggregates (SEC)** | T=0 | 0.5% | 0.5% |
| | T=1M | 0.7% | 0.6% |
| | T=3M | 1.1% | 1.0% |

---

## 10.0 CONCLUSION

Based on the extensive physicochemical, biological, and stability data presented in this subsection, Google Health Sciences concludes that **Glucogen-XR Drug Substance manufactured via the Gen-2.0 process is comparable to the Gen-1.2 process.** 

The minor differences observed in Host Cell Protein levels (improvement in Gen-2.0) do not impact the safety profile. The primary sequence, higher-order structure, and biological potency remain identical within statistical margins. The "Gen-2.0" process is therefore validated for commercial supply of Glucogen-XR for the treatment of Type 2 Diabetes Mellitus.

---
**Footnotes & References:**
1. *Ref-001: GHS Internal Report 2025-RPT-044: Process Characterization for 5,000L Bioreactor.*
2. *Ref-002: ICH Q5E Guideline: Comparability of Biotechnological/Biological Products.*
3. *Ref-003: USP <129> Analytical Procedures for Recombinant Proteins.*
4. *Software used for statistical analysis: JMP Version 17.2 Pro.*

---

## Statistical Analysis of Batch Data

### **3.2.S.3. CHARACTERIZATION**
#### **3.2.S.3.2. Impurities and Comparability**
---
## **Subsection: Statistical Analysis of Batch Data (Comparability Assessment)**

### **1.0 Introduction and Scope**
This subsection provides a comprehensive statistical evaluation of the comparability between clinical development batches (Phase 2/3) and the proposed commercial-scale batches of **Glucogen-XR (glucapeptide extended-release)** produced at the Google Health Sciences (GHS) South San Francisco facility (Site ID: GHS-SSF-01). 

The primary objective is to demonstrate, through rigorous mathematical modeling and Frequentist statistical frameworks, that the manufacturing scale-up (from 500L to 2,000L) and the implementation of the proprietary Google Cloud AI-driven bioreactor control system (G-BioControl v4.2) do not adversely affect the Critical Quality Attributes (CQAs) of the drug substance.

#### **1.1 Regulatory Alignment**
All statistical methodologies employed herein are in strict accordance with the following regulatory frameworks:
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **FDA Guidance for Industry:** Statistical Approaches to Establishing Bioequivalence (2022).
*   **USP <1010>:** Analytical Data—Interpretation and Treatment.
*   **USP <1210>:** Statistical Concepts in Assay Development and Validation.

---

### **2.0 Batch Inventory and Data Sets**
The statistical analysis encompasses twelve (12) independent batches of Glucogen-XR Drug Substance. These are categorized into two primary cohorts:
1.  **Reference Cohort (Clinical/Pilot Scale):** Batches GLUC-2025-001 through GLUC-2025-006 (500L scale).
2.  **Test Cohort (Commercial Scale/PPQ):** Batches GLUC-2025-007 through GLUC-2025-012 (2,000L scale).

#### **Table 2.1: Detailed Batch Pedigree for Comparability Analysis**
| Batch Number | Scale (L) | Manufacturing Date | Site ID | Purpose | Cell Line Lot |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 500 | 12-JAN-2025 | GHS-SSF-01 | Phase 2 Clinical | GHS-CHO-001-MCB |
| **GLUC-2025-002** | 500 | 02-FEB-2025 | GHS-SSF-01 | Phase 3 Clinical | GHS-CHO-001-MCB |
| **GLUC-2025-003** | 500 | 15-MAR-2025 | GHS-SSF-01 | Phase 3 Clinical | GHS-CHO-001-MCB |
| **GLUC-2025-004** | 500 | 10-APR-2025 | GHS-SSF-01 | Stability Study | GHS-CHO-001-WCB |
| **GLUC-2025-005** | 500 | 05-MAY-2025 | GHS-SSF-01 | Retained Sample | GHS-CHO-001-WCB |
| **GLUC-2025-006** | 500 | 28-JUN-2025 | GHS-SSF-01 | Process Characterization| GHS-CHO-001-WCB |
| **GLUC-2025-007** | 2,000 | 15-AUG-2025 | GHS-SSF-01 | PPQ Run 1 | GHS-CHO-001-WCB |
| **GLUC-2025-008** | 2,000 | 01-SEP-2025 | GHS-SSF-01 | PPQ Run 2 | GHS-CHO-001-WCB |
| **GLUC-2025-009** | 2,000 | 18-SEP-2025 | GHS-SSF-01 | PPQ Run 3 | GHS-CHO-001-WCB |
| **GLUC-2025-010** | 2,000 | 05-OCT-2025 | GHS-SSF-01 | Commercial Launch | GHS-CHO-001-WCB |
| **GLUC-2025-011** | 2,000 | 22-OCT-2025 | GHS-SSF-01 | Commercial Launch | GHS-CHO-001-WCB |
| **GLUC-2025-012** | 2,000 | 10-NOV-2025 | GHS-SSF-01 | Commercial Launch | GHS-CHO-001-WCB |

---

### **3.0 Statistical Methodology and Acceptance Criteria**

#### **3.1 Strategy for Comparability Tiers**
Google Health Sciences utilizes a tiered statistical approach based on the criticality of the attribute and the type of data (quantitative vs. qualitative).

1.  **Tier 1: Equivalence Testing (TOST - Two One-Sided T-tests).** Reserved for high-risk CQAs such as Biopotency and Purity by SE-HPLC.
2.  **Tier 2: Quality Range (QR) Method ($\pm$ 3 SD).** Applied to moderate-risk attributes like N-linked Glycosylation profiles and Charge Variants.
3.  **Tier 3: Visual Inspection and Descriptive Statistics.** Applied to low-risk attributes and qualitative data (e.g., Color, Appearance, Peptide Map Fingerprinting).

#### **3.2 Mathematical Formulas for Tier 1 (Equivalence)**
The equivalence of the mean values is tested using a margin based on the standard deviation of the reference (clinical) batches.

**The Null Hypothesis ($H_0$):**
$$H_0: \mu_T - \mu_R \le -\theta \text{ or } \mu_T - \mu_R \ge \theta$$
**The Alternative Hypothesis ($H_a$):**
$$H_a: -\theta < \mu_T - \mu_R < \theta$$

Where:
*   $\mu_T$: Mean of the Test (Commercial) batches.
*   $\mu_R$: Mean of the Reference (Clinical) batches.
*   $\theta$: Equivalence Margin (calculated as $1.5 \times SD_R$).

The 90% Confidence Interval (CI) for the difference between the means is calculated. If the 90% CI falls entirely within $(-\theta, \theta)$, equivalence is established.

---

### **4.0 Tier 1 Statistical Analysis: Critical Quality Attributes**

#### **4.1 Biopotency (In Vitro GLP-1 Receptor Activation)**
Biopotency is measured using a cell-based luciferase reporter gene assay. Data are expressed as a percentage of the Reference Standard (% RS).

**Table 4.1.1: Raw Data for Biopotency (%)**
| Batch ID | Biopotency (%) | Residual Error | Transformation (Log) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 102.1 | 0.4 | 2.0090 |
| GLUC-2025-002 | 98.5 | -3.2 | 1.9934 |
| GLUC-2025-003 | 104.3 | 2.6 | 2.0183 |
| GLUC-2025-004 | 101.9 | 0.2 | 2.0082 |
| GLUC-2025-005 | 99.8 | -1.9 | 1.9991 |
| GLUC-2025-006 | 103.6 | 1.9 | 2.0154 |
| **Reference Mean ($\mu_R$)** | **101.7%** | **SD:** 2.16 | **CV%:** 2.1% |
| GLUC-2025-007 | 101.5 | -0.2 | 2.0065 |
| GLUC-2025-008 | 102.3 | 0.6 | 2.0099 |
| GLUC-2025-009 | 100.9 | -0.8 | 2.0039 |
| GLUC-2025-010 | 101.8 | 0.1 | 2.0077 |
| GLUC-2025-011 | 103.1 | 1.4 | 2.0133 |
| GLUC-2025-012 | 102.4 | 0.7 | 2.0103 |
| **Test Mean ($\mu_T$)** | **102.0%** | **SD:** 0.78 | **CV%:** 0.76% |

**Tier 1 Analysis for Biopotency:**
1.  **Reference SD ($SD_R$):** 2.16
2.  **Equivalence Margin ($\theta = 1.5 \times 2.16$):** 3.24
3.  **Difference in Means ($\mu_T - \mu_R$):** 0.3%
4.  **90% CI for Difference:** [-0.85, 1.45]
5.  **Result:** Since [-0.85, 1.45] is contained within [-3.24, 3.24], the batches are **equivalent** in biopotency.

#### **4.2 Monomer Content by Size Exclusion HPLC (SE-HPLC)**
Monomer purity is a critical indicator of molecular stability and extended-release efficacy.

**Table 4.2.1: SE-HPLC Purity (%) Data Summary**
| Batch Cohort | N | Mean (%) | Std Dev | Min | Max |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Reference (500L) | 6 | 99.42 | 0.11 | 99.25 | 99.58 |
| Test (2000L) | 6 | 99.48 | 0.08 | 99.38 | 99.61 |

**Statistical Conclusion:**
The difference in mean monomer content between the two scales was 0.06%. The 90% CI for the difference was [-0.03, 0.15], which is well within the pre-defined equivalence margin of $\pm$ 0.165% ($1.5 \times SD_{Ref}$).

---

### **5.0 Tier 2 Statistical Analysis: Quality Range (QR) Attributes**

For Tier 2 attributes, comparability is established if at least 90% of the Test batch values fall within the Quality Range defined as $(\mu_R - 3 \times SD_R)$ to $(\mu_R + 3 \times SD_R)$.

#### **5.1 Charge Variant Analysis (CEX-HPLC)**
The acidic and basic variants are evaluated to ensure the Google Cloud-controlled fermentation pH profile remains consistent.

**Table 5.1.1: Main Peak (%) by CEX-HPLC**
| Batch | Main Peak % | Batch | Main Peak % |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 82.1 | GLUC-2025-007 | 82.5 |
| GLUC-2025-002 | 81.9 | GLUC-2025-008 | 83.0 |
| GLUC-2025-003 | 83.4 | GLUC-2025-009 | 82.2 |
| GLUC-2025-004 | 82.7 | GLUC-2025-010 | 82.4 |
| GLUC-2025-005 | 82.5 | GLUC-2025-011 | 82.9 |
| GLUC-2025-006 | 83.1 | GLUC-2025-012 | 82.6 |

**QR Calculation:**
*   $\mu_R = 82.62$
*   $SD_R = 0.56$
*   **Quality Range (QR):** [80.94% - 84.30%]
*   **Test Results Evaluation:** All 6 Test batches (100%) fall within the QR. Comparability is confirmed.

#### **5.2 Glycan Profiling (N-linked Glycosylation - G0F Content)**
G0F is the predominant glycan species in the GHS-CHO-001 cell line.

**Table 5.2.1: G0F Relative Abundance (%)**
| Statistic | Reference (n=6) | Test (n=6) |
| :--- | :--- | :--- |
| Mean | 45.3% | 46.1% |
| SD | 1.2% | 0.9% |
| **Quality Range** | **41.7% - 48.9%** | **N/A** |

**Observation:** The Test mean (46.1%) and all individual Test batch values (Range: 45.2% - 47.3%) are situated comfortably within the Reference-derived Quality Range.

---

### **6.0 Multivariate Data Analysis (MVDA)**
To further ensure process consistency at the 2,000L scale, GHS conducted a Principal Component Analysis (PCA) on the combined dataset (22 analytical parameters).

#### **6.1 PCA Model Parameters**
*   **Software:** SIMCA v17.0 / Google Vertex AI Workbench.
*   **Scaling:** Unit Variance (UV).
*   **Components:** 3 Principal Components (PCs) explaining 88.4% of total variance.

#### **6.2 PCA Result Discussion**
The PCA score plot (PC1 vs PC2) demonstrates that the Test batches (GLUC-2025-007 to 012) form a tight cluster that is entirely superimposed upon the Reference batch cluster. There is no separation along the primary axes, indicating that the multi-dimensional analytical fingerprint of Glucogen-XR is unchanged by the scale-up.

---

### **7.0 Process Impurities Analysis (HCP and Pro-A)**
Host Cell Protein (HCP) and Protein A (Pro-A) leaching are analyzed using a High-Sensitivity ELISA (GHS-Immuno-04).

#### **Table 7.1: Impurity Levels (ppm)**
| Batch ID | HCP (ppm) | Residual Protein A (ppm) |
| :--- | :--- | :--- |
| **Limit** | **< 100 ppm** | **< 10 ppm** |
| GLUC-2025-007 | 14.2 | 0.8 |
| GLUC-2025-008 | 18.5 | 1.2 |
| GLUC-2025-009 | 12.9 | 0.7 |
| GLUC-2025-010 | 15.6 | 0.9 |
| GLUC-2025-011 | 14.8 | 1.0 |
| GLUC-2025-012 | 16.1 | 1.1 |

**Statistical Interpretation:**
Levene’s test for equality of variances was performed ($p = 0.42$), indicating no significant difference in the variability of impurities between clinical and commercial scales.

---

### **8.0 Stability Data Correlation**
While long-term stability is documented in Section 3.2.S.7, an accelerated stability comparison (25°C/60% RH for 3 months) was performed for the first three PPQ batches (GLUC-2025-007, 008, 009) versus the clinical batches.

#### **Table 8.1: Degradation Rate Comparison (Main Peak Loss % per Month)**
| Cohort | Mean Loss (%/month) | 95% CI |
| :--- | :--- | :--- |
| Reference (500L) | -0.42 | [-0.48, -0.36] |
| Test (2000L) | -0.40 | [-0.44, -0.36] |

The degradation kinetics are statistically indistinguishable ($p > 0.05$ via ANCOVA), confirming that the extended-release properties of the glucapeptide are preserved.

---

### **9.0 Conclusion**
The statistical analysis of data from twelve (12) batches of **Glucogen-XR** demonstrates comprehensive comparability across the scale-up from 500L to 2,000L. All Tier 1 attributes passed Equivalence Testing (TOST), Tier 2 attributes fell within established Quality Ranges, and MVDA showed no shift in the molecular fingerprint. The drug substance produced at commercial scale is analytically comparable to the drug substance used in pivotal clinical trials.

---
**Approvals:**
*   *Dr. Arvind Chen, Head of Biostatistics, Google Health Sciences*
*   *Sarah Jenkins, Director of Regulatory Affairs*
*   *Date: 15-DEC-2025*

**References:**
1.  *Google Cloud Life Sciences Whitepaper: AI Integration in Bioprocess Control (2024).*
2.  *Montgomery, D. C. (2019). Design and Analysis of Experiments, 10th Ed.*
3.  *Chow, S.C. (2017). Statistical Design and Analysis in Pharmaceutical Science.*

---

# Summary and Conclusions

## Key Structural Features

### **3.2.S.3.1.2 Key Structural Features**

This subsection provides a comprehensive, high-resolution structural elucidation of **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced by Google Health Sciences. The characterization follows the principles outlined in **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q11** (Development and Manufacture of Drug Substances).

Glucogen-XR is a 118-amino acid synthetic-biological hybrid peptide engineered for extended pharmacokinetic profile via a proprietary "Cloud-Linker" technology and site-specific acylation.

---

### **1. Primary Structure Elucidation**

#### **1.1 Amino Acid Sequence Confirmation**
The primary sequence of Glucogen-XR was verified using a multi-orthogonal approach involving intact mass spectrometry (MS), N-terminal sequencing (Edman degradation), C-terminal sequencing, and high-performance liquid chromatography coupled with tandem mass spectrometry (LC-MS/MS) following enzymatic digestion.

**Table 1: Theoretical vs. Observed Molecular Weight of Glucogen-XR (Batch GLUC-2025-001 through 005)**

| Batch Number | Theoretical Mass (Da) | Observed Mass (Deconvoluted) | Mass Error (ppm) | Purity (%) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 14,284.62 | 14,284.65 | 2.1 | 99.4% |
| **GLUC-2025-002** | 14,284.62 | 14,284.61 | -0.7 | 99.6% |
| **GLUC-2025-003** | 14,284.62 | 14,284.68 | 4.2 | 99.2% |
| **GLUC-2025-004** | 14,284.62 | 14,284.63 | 0.7 | 99.8% |
| **GLUC-2025-005** | 14,284.62 | 14,284.66 | 2.8 | 99.5% |

#### **1.2 Peptide Mapping and MS/MS Sequencing**
To ensure 100% sequence coverage, Glucogen-XR was subjected to a triple-enzyme digestion protocol (Trypsin, Chymotrypsin, and Pepsin). The resulting fragments were analyzed via UPLC-ESI-QTOF (Waters ACQUITY I-Class / Xevo G2-XS).

**Protocol GHS-ANA-044: Enzymatic Digestion and LC-MS/MS Sequencing**
1. **Denaturation:** 1.0 mg of DS (Batch GLUC-2025-001) is dissolved in 6M Guanidine-HCl, 50 mM Tris-HCl (pH 7.5).
2. **Reduction:** 10 mM DTT at 56°C for 45 minutes.
3. **Alkylation:** 25 mM Iodoacetamide (IAM) in the dark at room temperature for 30 minutes.
4. **Buffer Exchange:** Use Zeba™ Spin Desalting Columns into 50 mM Ammonium Bicarbonate.
5. **Digestion:**
    - Trypsin (1:20 w/w ratio) at 37°C for 16 hours.
    - Separate aliquots treated with Chymotrypsin and Asp-N to resolve overlapping sequences.
6. **Analysis:** UPLC-MS using a C18 BEH column (1.7 µm, 2.1 x 150 mm) with a gradient of 2% to 60% Mobile Phase B (0.1% Formic Acid in Acetonitrile).

**Table 2: Fragment Mapping Data (Representative Batch GLUC-2025-001)**

| Fragment ID | Sequence Position | Expected m/z (z=2) | Observed m/z | Identity Confirmation |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | 1-12 | 684.34 | 684.35 | H-G-E-G-T-F-T-S-D-V-S-S |
| **T2** | 13-26 | 742.88 | 742.90 | Y-L-E-G-Q-A-A-K(Acyl)-E-F-I-A-W-L |
| **T3-Linker** | 27-58 | 1542.12 | 1542.15 | Proprietary Cloud-Linker Region |
| **T4** | 59-118 | 2894.45 | 2894.41 | Extended C-terminal Tail |

---

### **2. Post-Translational Modifications (PTMs) and Site-Specific Acylation**

#### **2.1 Acylation Site Occupancy (Lysine-26)**
The potency and long-acting nature of Glucogen-XR are derived from the covalent attachment of a C18 diacid fatty acid chain to the Lysine residue at position 26 via a glutamic acid spacer.

**Calculation of Acylation Occupancy:**
The ratio of acylated to non-acylated peptide was calculated using the following formula derived from Peak Area (PA) in UV-HPLC (214 nm):
$$\% \text{Acylation} = \left( \frac{PA_{\text{acylated}}}{PA_{\text{acylated}} + PA_{\text{unacylated}}} \right) \times 100$$

*   **Acceptance Criteria:** ≥ 98.5%
*   **Result (GLUC-2025-001):** 99.82%
*   **Method:** Reversed-Phase HPLC (RP-HPLC) using a specialized Phenyl-Hexyl stationary phase to resolve the hydrophobic fatty acid tail.

#### **2.2 Glycosylation Profile (N-linked and O-linked)**
While the GLP-1 peptide backbone is primarily non-glycosylated, the CHO-K1 GS knockout expression system (GHS-CHO-001) introduces minor glycan heterogeneity in the "Cloud-Linker" domain.

**Table 3: Glycan Distribution via HILIC-FLD-MS (Batch GLUC-2025-001)**

| Glycan Species | Structure (Oxford Notation) | Relative Abundance (%) | Significance |
| :--- | :--- | :--- | :--- |
| **G0F** | GlcNAc2Man3GlcNAc2Fuc | 42.5% | Major species |
| **G1F** | Gal1GlcNAc2Man3GlcNAc2Fuc | 31.2% | Galactosylation |
| **G2F** | Gal2GlcNAc2Man3GlcNAc2Fuc | 12.8% | High Galactosylation |
| **Man5** | Man5GlcNAc2 | 2.1% | Immature glycan |
| **Sialylated** | NeuAc1Gal2GlcNAc2Man3... | 5.4% | Clearance modifier |

---

### **3. Secondary and Tertiary Structural Characterization**

To confirm the functional folding and stability of Glucogen-XR, Google Health Sciences employed Circular Dichroism (CD), Nuclear Magnetic Resonance (NMR), and Fourier-Transform Infrared (FTIR) Spectroscopy.

#### **3.1 Far-UV Circular Dichroism (CD)**
CD spectra were recorded to evaluate the $\alpha$-helical content, which is critical for GLP-1 receptor activation.

*   **Instrument:** Jasco J-1500 Spectropolarimeter.
*   **Parameters:** 190-260 nm, 0.1 cm path length, 25°C.
*   **Results:** The spectra for all 2025-series batches show characteristic minima at 208 nm and 222 nm, indicating a predominant $\alpha$-helical conformation.

**Table 4: Helicity Calculations (Mean Residue Ellipticity at 222 nm)**

| Batch Number | $[\theta]_{222} \text{ (deg}\cdot\text{cm}^2/\text{dmol)}$ | Estimated $\alpha$-Helix (%) |
| :--- | :--- | :--- |
| **GLUC-2025-001** | -24,500 | 68.4% |
| **GLUC-2025-002** | -24,610 | 68.7% |
| **GLUC-2025-003** | -24,480 | 68.3% |

#### **3.2 Higher-Order Structure (HOS) via 2D-NMR**
2D $^1$H-$^{15}$N HSQC (Heteronuclear Single Quantum Coherence) spectroscopy was performed on $^{15}$N-labeled Glucogen-XR (produced for characterization purposes) to provide a "fingerprint" of the protein backbone.

*   **Statistical Analysis:** A Weighted Cross-Peak Deviation (WCPD) analysis was conducted between the reference standard (Ref-GHS-2024) and the clinical trial batches.
*   **Result:** All batches showed a Similarity Index (SI) of >0.98, confirming conformational consistency.

---

### **4. Aggregation and Self-Association States**

As a long-acting peptide, Glucogen-XR is designed to form transient heptamers under physiological conditions at the injection site. This self-association is a key structural feature for its extended-release profile.

#### **4.1 Size-Exclusion Chromatography with Multi-Angle Light Scattering (SEC-MALS)**
**Method:**
*   **Column:** TSKgel G3000SWxl
*   **Buffer:** 200 mM Sodium Phosphate, pH 7.0
*   **Flow Rate:** 0.5 mL/min

**Table 5: Molecular Weight Distribution and Association State**

| Peak ID | Retention Time (min) | Calculated MW (kDa) | Association State | % Area |
| :--- | :--- | :--- | :--- | :--- |
| **Peak 1** | 12.4 | 102.1 | Heptamer (7x) | 94.2% |
| **Peak 2** | 15.8 | 14.3 | Monomer (1x) | 5.6% |
| **Peak 3** | 20.1 | <2.0 | Fragments/Salts | 0.2% |

---

### **5. Summary of Key Structural Attributes**

The structural integrity of Glucogen-XR is defined by the following "Critical Quality Attributes" (CQAs) as per **ICH Q8(R2)**:

1.  **Sequence Fidelity:** 100% homology to the designed construct verified by MS/MS.
2.  **C18 Acylation:** Precise attachment at K26 ensures albumin binding and half-life extension.
3.  **Alpha-Helicity:** Maintained at >65% to ensure high-affinity binding to the GLP-1 receptor.
4.  **Heptameric State:** Predominant form in formulation, facilitating the "extended-release" (XR) mechanism.

**Regulatory Compliance Statement:**
All characterization studies were performed in accordance with 21 CFR Part 211 (cGMP) and utilized validated analytical procedures. Data from batches **GLUC-2025-001** through **GLUC-2025-005** demonstrate high manufacturing consistency and adherence to the structural Target Product Profile (TPP).

---
*End of Subsection 3.2.S.3.1.2*

---

## Impurity Profile

### **3.2.S.3.2 IMPURITY PROFILE**

---

#### **3.2.S.3.2.1 Introduction and Scope of Impurity Characterization**
The impurity profile of **Glucogen-XR (glucapeptide extended-release)**, manufactured by Google Health Sciences, has been established through a rigorous, multi-dimensional analytical program designed to satisfy the requirements of **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q3A(R2)** (Impurities in New Drug Substances).

As a recombinant peptide produced in a proprietary **GHS-CHO-001** cell line, the impurity landscape is bifurcated into:
1.  **Product-Related Impurities:** Molecular variants of the glucapeptide arising during biosynthesis, downstream processing, or storage (e.g., truncated forms, aggregates, deamidated species).
2.  **Process-Related Impurities:** Components derived from the manufacturing process, including cell culture media constituents, Host Cell Proteins (HCP), Host Cell DNA (HCD), protein A leachates, and residual solvents.

This section provides a granular summary of the identification, quantification, and qualification of these impurities across representative clinical and stability batches (GLUC-2025-001 through GLUC-2025-015).

---

#### **3.2.S.3.2.2 Product-Related Impurities**

The molecular structure of Glucogen-XR, a 31-amino acid peptide with an extended-release lipid tail (C18 diacid), renders it susceptible to specific chemical and physical degradation pathways.

##### **3.2.S.3.2.2.1 Truncated and Deleted Sequences**
During the ribosomal synthesis in the CHO-K1 GS knockout derivative line, premature chain termination or amino acid deletions may occur. These are monitored via High-Resolution Mass Spectrometry (HRMS) coupled with UPLC.

**Table 1: Identification of Major Truncated Species (Batch GLUC-2025-008)**
| Impurity ID | Description | Detection Method | Observed Mass (Da) | Theoretical Mass (Da) | Relative Abundance (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **G-XR-T1** | Des-His1 (N-terminal deletion) | RP-UPLC-MS | 4022.45 | 4022.48 | 0.12% |
| **G-XR-T2** | Des-Gly31 (C-terminal deletion) | RP-UPLC-MS | 4120.55 | 4120.58 | 0.08% |
| **G-XR-D1** | Des-Ala8 (Internal deletion) | Orbitrap MS/MS | 4106.52 | 4106.55 | <0.05% (LOD) |

##### **3.2.S.3.2.2.2 Deamidation and Isomerization**
Glucogen-XR contains sensitive Asn and Asp residues. Deamidation of Asparagine to Aspartic Acid or Iso-aspartic acid is a critical quality attribute (CQA).

*   **Protocol for Deamidation Mapping (GHS-SOP-ANA-088):**
    1.  **Enzymatic Digestion:** Tryptic digestion in 50mM Ammonium Bicarbonate (pH 7.8) for 4 hours at 37°C.
    2.  **Chromatographic Separation:** C18 Reverse Phase UPLC (Water/ACN gradient with 0.1% TFA).
    3.  **Detection:** UV at 214nm and MS/MS (HCD fragmentation).
    4.  **Calculation:** \% Deamidation = (Area of Deamidated Peptide / Total Peak Area) × 100.

**Table 2: Deamidation Profile Across Process Validation Batches**
| Batch Number | Site: Asn28 (%) | Site: Asn15 (%) | Total Deamidated (%) | Specification Limit |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 0.44 | 0.12 | 0.56 | ≤ 2.0% |
| GLUC-2025-002 | 0.48 | 0.11 | 0.59 | ≤ 2.0% |
| GLUC-2025-003 | 0.42 | 0.15 | 0.57 | ≤ 2.0% |
| GLUC-2025-004 | 0.51 | 0.13 | 0.64 | ≤ 2.0% |

##### **3.2.S.3.2.2.3 Aggregation and High Molecular Weight Species (HMWS)**
Aggregates are monitored using Size Exclusion Chromatography (SEC-UPLC) and Sedimentation Velocity Analytical Ultracentrifugation (SV-AUC).

**Calculation of Aggregation Rate (K_agg):**
$$K_{agg} = \frac{\ln([Aggregate]_{t} - [Aggregate]_{0})}{t}$$
*Where $t$ is time in months at 25°C/60% RH.*

**Table 3: SEC-UPLC HMWS Results (Equip ID: GHS-SEC-09)**
| Batch ID | Dimer (%) | Trimer/Multimer (%) | Total HMWS (%) | Method Precision (%RSD) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-010 | 0.18 | <0.02 | 0.18 | 1.2% |
| GLUC-2025-011 | 0.21 | <0.02 | 0.21 | 0.9% |
| GLUC-2025-012 | 0.19 | 0.03 | 0.22 | 1.1% |

---

#### **3.2.S.3.2.3 Process-Related Impurities**

Process-related impurities are managed via a "Clearance by Design" strategy. The downstream process (DSP) consists of three chromatography steps (Protein A, CEX, HIC) and two ultrafiltration/diafiltration (UF/DF) steps.

##### **3.2.S.3.2.3.1 Host Cell Proteins (HCP)**
Google Health Sciences uses a proprietary 3G-ELISA (Third Generation Enzyme-Linked Immunosorbent Assay) specific to the **GHS-CHO-001** cell line.

**Table 4: HCP Clearance Efficiency (Log Reduction Values - LRV)**
| Process Step | HCP Concentration (ng/mg) | Step LRV | Cumulative LRV |
| :--- | :--- | :--- | :--- |
| Harvested Cell Culture Fluid | 450,000 | N/A | N/A |
| Protein A Eluate | 2,250 | 2.3 | 2.3 |
| CEX Pool | 85 | 1.4 | 3.7 |
| HIC Pool | 4 | 1.3 | 5.0 |
| Final Drug Substance | < 1 (BQL) | 0.6 | 5.6 |

*BQL: Below Quantifiable Limit (< 0.5 ppm).*

##### **3.2.S.3.2.3.2 Host Cell DNA (HCD)**
HCD is quantified using a Fragment-Specific qPCR assay targeting a 100bp sequence of the CHO-K1 genome.

*   **Acceptance Criterion:** ≤ 10 pg DNA / mg Protein (Per **ICH Q3D** and **WHO** guidelines).
*   **Batch Results (GLUC-2025-005):** 1.2 pg/mg.
*   **Batch Results (GLUC-2025-006):** 0.8 pg/mg.

##### **3.2.S.3.2.3.3 Residual Solvents (ICH Q3C)**
Since the Glucogen-XR process utilizes Ethanol and Acetonitrile in the HIC and RP-HPLC polishing steps, residual solvent testing is performed.

**Table 5: Residual Solvent Analysis (GC-FID per USP <467>)**
| Solvent | Class | Limit (ppm) | Observed (GLUC-2025-014) |
| :--- | :--- | :--- | :--- |
| Acetonitrile | 2 | 410 | 12 ppm |
| Ethanol | 3 | 5000 | 145 ppm |
| Isopropyl Alcohol | 3 | 5000 | < 5 ppm (LOD) |

---

#### **3.2.S.3.2.4 Impurity Safety Qualification**

All impurities present at levels >0.10% have been qualified in GLP toxicology studies (Study ID: GHS-TOX-2024-GLP-01).

1.  **G-XR-T1 (Des-His1):** This variant was tested in a 28-day repeat-dose study in Cynomolgus monkeys at 5x the clinical dose. No adverse immunogenic or pharmacological effects were observed at concentrations up to 2.0% of the total peptide mass.
2.  **C-terminal Amidation Variants:** Naturally occurring in human GLP-1 analogues; deemed low risk.

**Statistical Analysis of Impurity Consistency:**
A JMP-based Monte Carlo simulation was performed on 15 batches to predict the probability of out-of-specification (OOS) results for Total Impurities.
*   **Mean Total Impurities:** 1.12%
*   **Standard Deviation:** 0.14%
*   **Ppk (Process Performance Index):** 2.1 (Indicating a highly capable process).

---

#### **3.2.S.3.2.5 Conclusion**
The impurity profile of Glucogen-XR is well-characterized and controlled. Product-related impurities are maintained at levels significantly below the qualification thresholds established in non-clinical studies. Process-related impurities (HCP, HCD) are removed to trace levels (ppm/ppb) by the robust downstream purification process. These data support the consistency and safety of the Google Health Sciences manufacturing platform for Type 2 Diabetes treatment.

---
**Footnotes:**
1. *ICH Q6B: Specifications for Biotechnological/Biological Products.*
2. *USP <121> Insulin Assays (modified for GLP-1 analogues).*
3. *GHS-DS-SPEC-2025: Current Specification Document for Glucogen-XR.*

---

## Linkage to Safety and Efficacy

### **MODULE 3: QUALITY**
#### **3.2.S.3 CHARACTERIZATION**
#### **3.2.S.3.2 Elucidation of Structure and Other Characteristics**
---
### **SUBSECTION: LINKAGE TO SAFETY AND EFFICACY**

#### **1.0 Introduction and Purpose**
The purpose of this subsection is to provide a comprehensive scientific bridge between the Critical Quality Attributes (CQAs) of Glucogen-XR (glucapeptide extended-release) and the clinical outcomes observed during the Phase 1, 2, and pivotal Phase 3 clinical trials (GHS-GLUC-301, 302, and 305). 

As a GLP-1 receptor agonist produced via recombinant DNA technology in the proprietary GHS-CHO-001 cell line, Glucogen-XR possesses a complex secondary and tertiary structure, including a specific acylation pattern required for its extended-release profile (14-day dosing interval). This section evaluates how variations in physicochemical properties, impurity profiles, and higher-order structures (HOS) directly influence the pharmacokinetics (PK), pharmacodynamics (PD), immunogenicity, and safety profile of the drug substance.

#### **2.0 Quality Attribute Criticality Assessment (QACA)**
Google Health Sciences (GHS) employs a risk-based approach to link quality attributes to clinical performance, as per ICH Q8(R2) and ICH Q11. 

##### **2.1 Severity and Impact Scoring Matrix**
The criticality of each attribute is determined by the potential impact on safety (immunogenicity, toxicity) and efficacy (potency, PK/PD).

| Attribute Category | Impact Factor (1-5) | Clinical Relevance |
| :--- | :--- | :--- |
| **Primary Sequence** | 5 | Direct impact on GLP-1 receptor binding and activation. |
| **Acylation Site (Lys26)** | 5 | Critical for albumin binding and extended half-life. |
| **Aggregates (HMMS)** | 4 | Primary driver of potential immunogenicity and injection site reactions. |
| **N-terminal Truncation** | 4 | Leads to loss of potency (DPP-IV-like degradation). |
| **Host Cell Proteins** | 3 | Risk of hypersensitivity/anaphylaxis. |

#### **3.0 Structural Attributes and Efficacy Linkage**

##### **3.1 Primary Sequence Integrity and Receptor Binding Affinity**
The efficacy of Glucogen-XR is fundamentally dependent on the 98% homology with human GLP-1 (7-37). Any deviation in the amino acid sequence, specifically at the N-terminus (His7), results in a total loss of insulinotropic activity.

**Table 3.2.S.3.2-1: Impact of Sequence Variations on GLP-1R Activation (In Vitro)**
| Batch Number | Variant Identified | Assay: cAMP Stimulation (EC50 nM) | Efficacy Correlation |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Reference Standard | 0.45 ± 0.05 | Optimal Clinical Response |
| **GLUC-2025-012** | Des-His7 Variant (2.5%) | 1.85 ± 0.12 | Reduced insulin secretion |
| **GLUC-2025-015** | Asp9 Iso-aspartate (1.8%) | 0.98 ± 0.08 | Moderate potency loss |

##### **3.2 Acylation Degree and Pharmacokinetics (PK)**
The C18 fatty acid chain attached to Lys26 facilitates non-covalent binding to human serum albumin (HSA). This prevents rapid renal clearance and protects the peptide from dipeptidyl peptidase-4 (DPP-4) degradation.

**Calculation of Binding Affinity ($K_d$) to HSA:**
The dissociation constant ($K_d$) is calculated using Surface Plasmon Resonance (SPR) to ensure the 14-day half-life:
$$K_d = \frac{k_{off}}{k_{on}}$$
Target $K_d$ for Glucogen-XR: $1.2 \times 10^{-7}$ M to $5.5 \times 10^{-7}$ M.

#### **4.0 Product-Related Impurities and Safety Linkage**

##### **4.1 High Molecular Weight Species (HMMS) and Immunogenicity**
High Molecular Weight Species (dimers, trimers, and larger aggregates) are known to enhance the risk of anti-drug antibody (ADA) formation. GHS monitors HMMS using SEC-MALS (Size Exclusion Chromatography with Multi-Angle Light Scattering).

**Protocol for Linking Aggregation to ADA Response (Study GHS-TX-402):**
1. **Preparation:** Samples from batches GLUC-2025-005 (0.2% HMMS) and GLUC-2025-019 (forced degradation, 4.5% HMMS).
2. **Model:** Cynomolgus monkeys (n=12 per group).
3. **Dosing:** 0.5 mg/kg SC bi-weekly for 12 weeks.
4. **Endpoint:** Titer of neutralizing antibodies (NAb) measured via cell-based bioassay.

**Table 3.2.S.3.2-2: Correlation of HMMS Levels with Clinical ADA Incidence**
| Batch Number | HMMS Level (%) | Clinical Study | ADA Incidence (%) | NAb Incidence (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 0.12 | Phase 1 (SAD) | 1.2 | 0.0 |
| GLUC-2025-008 | 0.45 | Phase 2 | 2.5 | 0.2 |
| GLUC-2025-022 | 0.88 | Phase 3 | 4.1 | 0.5 |
| **Spec. Limit** | **≤ 1.0** | **Target** | **< 5.0** | **< 1.0** |

##### **4.2 Deamidation and Isomerization**
Deamidation at Asn28 to Asp28 or Iso-Asp28 can alter the surface charge and potentially affect the stability of the extended-release matrix.

**Statistical Analysis of Deamidation vs. HbA1c Reduction:**
A linear regression analysis was performed linking the percentage of deamidated species in Phase 3 batches to the mean reduction in HbA1c at Week 24.
*   **Formula:** $\Delta HbA1c = \beta_0 + \beta_1(Deamidation\%) + \epsilon$
*   **Result:** $R^2 = 0.12$ (p > 0.05), indicating that within the proposed specification of $\leq 5\%$, deamidation does not significantly impact clinical efficacy.

#### **5.0 Process-Related Impurities and Safety**

##### **5.1 Host Cell Proteins (HCP)**
Using the proprietary GHS-CHO-001 cell line, HCPs are reduced to < 10 ppm via a three-step chromatography process (Protein A, AEX, CEX).

**Table 3.2.S.3.2-3: HCP Clearance and Safety Correlation**
| Purification Step | HCP Level (ng/mg) | Log Reduction Value (LRV) | Safety Margin |
| :--- | :--- | :--- | :--- |
| Harvest | 450,000 | N/A | High Risk |
| Protein A Eluate | 12,500 | 1.56 | Moderate Risk |
| Final Drug Substance | 4.2 | 5.03 | Negligible Risk |

*Note: Batch GLUC-2025-010 (5.2 ppm HCP) showed no hypersensitivity reactions in 450 subjects during Trial GHS-GLUC-301.*

#### **6.0 Biological Activity and Potency**

The potency of Glucogen-XR is defined by its ability to stimulate insulin secretion in a glucose-dependent manner. This is measured by the *In Vitro* GLP-1 Receptor Activation Bioassay (GHS-SOP-QC-772).

**Step-by-Step Potency Protocol:**
1.  **Cell Culture:** HEK293 cells transfected with human GLP-1R.
2.  **Incubation:** Cells treated with serial dilutions of Glucogen-XR (0.001 nM to 100 nM).
3.  **Measurement:** Intracellular cAMP levels measured using HTRF (Homogeneous Time-Resolved Fluorescence).
4.  **Analysis:** Data fitted to a 4-parameter logistic (4PL) model.
5.  **Requirement:** Relative potency must be 80-125% of the Reference Standard.

#### **7.0 Summary of Linkage Conclusions**
Based on the data generated from clinical batches GLUC-2025-001 through GLUC-2025-030, the following conclusions are drawn:

1.  **Safety:** Injection site reactions (ISRs) and immunogenicity are tightly correlated with HMMS levels. The specification of $\leq 1.0\%$ HMMS ensures a safety profile comparable to existing GLP-1 therapies.
2.  **Efficacy:** Maintaining the N-terminal integrity and acylation degree is paramount. Batch-to-batch consistency in acylation ($>97\%$ mono-acylated) ensures the 14-day PK profile, preventing sub-therapeutic troughs and reducing the risk of glycemic excursions.
3.  **Purity:** Process-related impurities (HCP, DNA) are cleared to levels well below the threshold for clinical concern, as evidenced by the lack of anti-CHO antibody responses in Phase 3.

#### **8.0 References**
1. ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2. FDA Guidance for Industry: Immunogenicity Assessment for Therapeutic Protein Products (2014).
3. USP <121.1> Physico-chemical Analytical Procedures for Therapeutic Peptides.
4. *Journal of Pharmaceutical Sciences*, "Structure-Function Relationships of Acylated GLP-1 Analogs" (2023).

---
**End of Subsection**
**Confidential - Property of Google Health Sciences**
**Document ID: M3-DS-CHAR-LSE-2025**

---

