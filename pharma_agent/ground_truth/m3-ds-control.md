# Drug Substance - Control of Drug Substance

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 22:59:43

---

# Specification

## Release Specification

### 3.2.S.4 CONTROL OF DRUG SUBSTANCE
#### 3.2.S.4.1 Release Specification: Glucogen-XR (glucapeptide)

---

**1. INTRODUCTION AND REGULATORY COMPLIANCE**

The release specification for Glucogen-XR (glucapeptide), manufactured by Google Health Sciences (GHS), is established in accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*). The specifications defined herein ensure the identity, purity, potency, and safety of the Drug Substance (DS) intended for the treatment of Type 2 Diabetes Mellitus.

Glucogen-XR is a recombinant GLP-1 receptor agonist produced in a proprietary CHO-K1 GS knockout derivative cell line (GHS-CHO-001). Due to the extended-release nature of the final drug product, the DS specification focuses heavily on the structural integrity of the peptide and the absence of truncated or modified species that could alter the pharmacokinetic (PK) profile.

All analytical procedures are validated according to **ICH Q2(R1)**. Where applicable, testing is performed in compliance with current **United States Pharmacopeia (USP)** and **European Pharmacopeia (Ph. Eur.)** general chapters.

---

**2. SPECIFICATION TABLE: DRUG SUBSTANCE RELEASE**

The following table summarizes the release criteria for Glucogen-XR Drug Substance. Batch numbers following the format **GLUC-2025-XXX** (e.g., GLUC-2025-001, GLUC-2025-002) are utilized for all validation and commercial batches.

| Test Parameter | Analytical Procedure | Acceptance Criteria | Rationale/Reference |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual Inspection (USP <790>) | Clear to slightly opalescent, colorless to slightly yellow liquid. Free of visible particles. | Basic Quality/Safety |
| **Identity (RT)** | RP-HPLC (SOP-GHS-ANA-102) | Retention time of main peak conforms to reference standard (± 2.0%). | ICH Q6B |
| **Identity (MW)** | ESI-MS (SOP-GHS-ANA-305) | Intact mass: 32,455.6 ± 2.0 Da (Deconvoluted). | Structural Confirmation |
| **Identity (Peptide Map)** | Trypsin Digestion/LC-MS/MS | Chromatographic profile matches reference standard. All major fragments accounted for. | Primary Structure |
| **Purity (Monomer)** | SE-HPLC (SOP-GHS-ANA-110) | ≥ 98.0% Monomer; ≤ 1.5% Aggregates; ≤ 0.5% Fragments. | Efficacy/Immunogenicity |
| **Purity (Charge Variants)** | iCIEF (SOP-GHS-ANA-201) | Main Peak: 75.0% - 85.0%; Acidic: ≤ 15.0%; Basic: ≤ 10.0%. | Stability/Consistency |
| **Purity (Hydrophobic)** | RP-HPLC (SOP-GHS-ANA-102) | Main Peak: ≥ 96.0%; Total Impurities: ≤ 4.0%. | Process Control |
| **Potency (In Vitro)** | Cell-based cAMP Assay | 80.0% – 125.0% of Reference Standard Activity. | Biological Activity |
| **Protein Concentration** | UV/Vis A280 (USP <857>) | 50.0 mg/mL ± 2.5 mg/mL (1.48 mL/mg*cm extinction coeff). | Dosing Accuracy |
| **pH** | Potentiometric (USP <791>) | 6.8 ± 0.2 | Stability |
| **Osmolality** | Freezing Point (USP <785>) | 290 ± 30 mOsm/kg | Isotonicity |
| **Host Cell Protein (HCP)** | ELISA (SOP-GHS-QC-501) | ≤ 10 ppm (ng/mg) | Safety |
| **Host Cell DNA (HCD)** | qPCR (SOP-GHS-QC-505) | ≤ 100 pg/mg | Regulatory Requirement |
| **Endotoxin** | LAL Kinetic (USP <85>) | ≤ 0.5 EU/mg | Pyrogenicity |
| **Bioburden** | Membrane Filtration (USP <61>) | < 10 CFU/100 mL | Sterility Assurance |

---

**3. DETAILED ANALYTICAL PROTOCOLS AND CALCULATIONS**

#### 3.1 Purity and Impurities by Size-Exclusion HPLC (SE-HPLC)
**Procedure ID:** SOP-GHS-ANA-110
**Equipment:** Agilent 1260 Infinity II with Diode Array Detector (DAD).
**Column:** TSKgel G3000SWxl, 7.8 mm x 30 cm, 5 µm.

**Step-by-Step Protocol:**
1.  **Mobile Phase Preparation:** Prepare 50 mM Sodium Phosphate, 300 mM NaCl, pH 7.0. Filter through 0.22 µm PES filter.
2.  **Sample Preparation:** Dilute Glucogen-XR DS to 2.0 mg/mL using mobile phase.
3.  **System Suitability:** Inject Reference Standard (GLUC-STD-2024). The resolution between monomer and dimer must be > 1.5. Relative Standard Deviation (RSD) of area for 5 injections ≤ 2.0%.
4.  **Injection:** Inject 20 µL of sample.
5.  **Data Analysis:** Integrate peaks at 214 nm and 280 nm.

**Calculation of Purity:**
$$ \% \text{Monomer} = \left( \frac{Area_{\text{monomer}}}{\sum Area_{\text{all peaks}}} \right) \times 100 $$

#### 3.2 Biological Potency (Cell-Based cAMP Induction)
**Procedure ID:** SOP-GHS-BIO-442
**Cell Line:** CHO cells transfected with human GLP-1 Receptor (GLP-1R).

**Principle:** Glucogen-XR binds to GLP-1R, activating adenylate cyclase, which increases intracellular cAMP levels. cAMP is measured using a competitive immunoassay (HTRF - Homogeneous Time-Resolved Fluorescence).

**Protocol:**
1.  **Cell Seeding:** Plate cells at $1 \times 10^5$ cells/well in 96-well plates. Incubate for 24 hours.
2.  **Serial Dilution:** Prepare 10-point serial dilutions of Reference Standard and Test Sample (GLUC-2025-XXX) in Assay Buffer (HBSS + 0.5 mM IBMX).
3.  **Stimulation:** Add dilutions to cells; incubate for 30 minutes at 37°C.
4.  **Detection:** Add Cryptate-labeled anti-cAMP antibody and d2-labeled cAMP. Incubate for 1 hour.
5.  **Measurement:** Read fluorescence at 665 nm and 620 nm.

**Statistical Analysis:**
The potency is calculated using a 4-parameter logistic (4-PL) model.
$$ y = D + \frac{A - D}{1 + (\frac{x}{C})^B} $$
Where:
*   $A$ = Minimum Response
*   $B$ = Hill Slope
*   $C$ = $EC_{50}$
*   $D$ = Maximum Response

**Relative Potency Calculation:**
$$ \text{Relative Potency} = \left( \frac{EC_{50, \text{Standard}}}{EC_{50, \text{Sample}}} \right) \times 100\% $$

---

**4. BATCH ANALYSIS DATA (REPRESENTATIVE)**

The following table provides historical data for three representative batches produced at the South San Francisco facility.

| Batch Number | Manufacture Date | Monomer (%) | Potency (%) | HCP (ppm) | HCD (pg/mg) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 15-JAN-2025 | 99.4 | 102 | 4.2 | 12 |
| **GLUC-2025-002** | 02-FEB-2025 | 99.1 | 98 | 3.8 | 8 |
| **GLUC-2025-003** | 22-FEB-2025 | 99.2 | 105 | 5.1 | 15 |

---

**5. IMPURITY CHARACTERIZATION AND CONTROL STRATEGY**

#### 5.1 Product-Related Impurities
Product-related impurities include deamidated, oxidized, and phosphorylated species. These are primarily monitored via iCIEF and RP-HPLC.
*   **Deamidation:** Specifically at $Asn^{28}$, monitored via the acidic peak cluster in iCIEF.
*   **Oxidation:** $Met^{14}$ sulfoxide species, monitored via RP-HPLC. Limit set at ≤ 2.0% based on clinical batch experience.

#### 5.2 Process-Related Impurities
*   **Protein A Leachate:** Since the purification process involves Protein A affinity chromatography, residual Protein A is monitored using a validated ELISA (SOP-GHS-QC-502). The limit is $\le 5$ ng/mg.
*   **Residual Solvents:** Monitored per **USP <467>**. Since only Class 3 solvents (Ethanol) are used in the downstream process, testing is performed at the validation stage and skip-lot for commercial batches.

---

**6. JUSTIFICATION OF SPECIFICATIONS**

The acceptance criteria are established based on:
1.  **Clinical Experience:** Limits reflect the ranges used in Phase II/III clinical trials (Batches GLUC-2023-010 through GLUC-2024-050).
2.  **Manufacturing Capability:** Statistical analysis of 30 pilot-scale and 5 commercial-scale batches (3-sigma limits).
3.  **Stability Studies:** Accelerated and long-term stability data (Section 3.2.S.7) show that the selected parameters are stability-indicating.

**Footnotes & References:**
1.  ICH Q6B, *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*.
2.  USP <85> *Bacterial Endotoxins Test*.
3.  Google Health Sciences Report GHS-TR-2024-088: *Validation of the Cell-Based Potency Assay for Glucogen-XR*.
4.  USP <121> *Insulin Assays* (adapted for GLP-1).

---

## Shelf-Life Specification

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.1: SPECIFICATION (SHELF-LIFE SPECIFICATION)

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection details the Shelf-Life Specification for Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced by Google Health Sciences (GHS) via the proprietary GHS-CHO-001 cell line. The shelf-life specifications are established to ensure the continued safety, identity, strength, quality, and purity of the Drug Substance (DS) throughout its proposed retest period when stored under the recommended conditions of -70°C ± 10°C (Ultra-Low Temperature Long-Term Storage).

These specifications are developed in accordance with ICH Q6B (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*), ICH Q1A(R2) (*Stability Testing of New Drug Substances and Products*), and ICH Q5C (*Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*).

#### 2.0 SHELF-LIFE SPECIFICATION STRATEGY
The shelf-life specification for Glucogen-XR differs from the release specification by the inclusion of parameters sensitive to degradation over time and the adjustment of acceptance criteria for specific attributes that demonstrate a predictable trend during storage (e.g., deamidation, aggregation).

##### 2.1 Justification for Acceptance Criteria
The limits defined herein are based on:
1.  **Clinical Trial Material (CTM) Experience:** Data derived from Phase I/II/III batches (GLUC-2023-001 through GLUC-2024-015).
2.  **Stability Trends:** Extrapolated data from 36-month real-time stability studies and 6-month accelerated studies (at -20°C and 5°C).
3.  **Process Capability (Cpk):** Statistical analysis of batch consistency using JMP® 17 (Statistical Discovery from SAS).
4.  **Safety Thresholds:** Qualification of impurities according to ICH Q3A(R2).

---

#### 3.0 TABLE OF SHELF-LIFE SPECIFICATIONS (DS)
The following table summarizes the tests, analytical procedures, and acceptance criteria for Glucogen-XR Drug Substance at the end of the shelf-life.

**Table 3.2.S.4.1-1: Shelf-Life Specification for Glucogen-XR Drug Substance**

| Test Parameter | Analytical Procedure | Acceptance Criteria | Rationale for Shelf-Life |
| :--- | :--- | :--- | :--- |
| **Appearance (Color/Clarity)** | SOP-QC-001 (Visual/Ph. Eur. 2.2.1/2.2.2) | Clear to slightly opalescent; Colorless to pale yellow. Free of visible particulates. | Physical integrity and protein solubility. |
| **Identity (RT by RP-HPLC)** | SOP-QC-012 (RP-HPLC) | Retention time of main peak corresponds to Reference Standard (± 2.0%). | Confirmation of primary peptide structure. |
| **Identity (Charge Variant)** | SOP-QC-045 (icIEF) | Electropherogram profile matches Reference Standard. | Confirmation of post-translational modifications. |
| **Purity (Monomer Content)** | SOP-QC-022 (SE-HPLC) | $\ge$ 97.0% Monomer | Monitoring of covalent and non-covalent aggregation. |
| **Purity (Total Impurities)** | SOP-QC-012 (RP-HPLC) | $\le$ 4.0% Total Impurities | Monitoring of oxidation and deamidation products. |
| **High Molecular Weight (HMW)** | SOP-QC-022 (SE-HPLC) | $\le$ 2.0% | Control of immunogenic aggregate species. |
| **Deamidated Species** | SOP-QC-033 (CEX-HPLC) | $\le$ 5.0% | Stability-indicating parameter for peptide backbone. |
| **Potency (In Vitro Bioassay)** | SOP-QC-088 (Cell-based cAMP) | 80% to 125% of Reference Standard | Measurement of GLP-1 receptor activation efficacy. |
| **Concentration (UV $A_{280}$)** | SOP-QC-009 (Variable Pathlength UV) | 50.0 mg/mL ± 5.0 mg/mL (45.0 - 55.0) | Consistency of protein content (mg/mL). |
| **pH** | SOP-QC-005 (USP <791>) | 6.5 ± 0.3 | Maintenance of formulation stability. |
| **Bacterial Endotoxins** | SOP-QC-099 (USP <85>) | $\le$ 0.5 EU/mg | Safety and pyrogen control. |
| **Bioburden** | SOP-QC-105 (USP <61>) | $\le$ 10 CFU/100 mL | Maintenance of microbial quality. |

---

#### 4.0 DETAILED ANALYTICAL PROTOCOLS AND CALCULATIONS

##### 4.1 Purity by Size Exclusion Chromatography (SE-HPLC)
**Protocol ID:** SOP-QC-022
**Equipment:** Waters ACQUITY UPLC H-Class Bio System with TUV Detector.
**Column:** TSKgel G3000SWxl, 7.8 mm ID x 30 cm, 5 µm.
**Mobile Phase:** 0.2 M Potassium Phosphate, 0.25 M Sodium Chloride, pH 7.0.

**Calculation of % Monomer:**
$$\text{\% Monomer} = \left( \frac{Area_{Monomer}}{Area_{Total}} \right) \times 100$$
Where $Area_{Total} = Area_{HMW} + Area_{Monomer} + Area_{LMW}$.

**Shelf-Life Consideration:**
During stability studies of Batch GLUC-2025-001, a rate of aggregation of 0.05% per month was observed at 5°C. However, at the storage condition of -70°C, no significant change ($\pm 0.1\%$) was detected over 24 months. The shelf-life limit of $\ge 97.0\%$ provides a robust buffer for excursion management.

##### 4.2 Biological Potency (cAMP Activation Assay)
**Protocol ID:** SOP-QC-088
**System:** HEK293 cells transfected with human GLP-1R.
**Method:** Homogeneous Time-Resolved Fluorescence (HTRF).

The potency is calculated using a 4-parameter logistic (4PL) curve fit model:
$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$
Where:
- $A$ = Minimum response
- $B$ = Hill slope
- $C$ = $EC_{50}$
- $D$ = Maximum response

**Relative Potency Calculation:**
$$\text{Relative Potency} = \left( \frac{EC_{50, \text{Reference}}}{EC_{50, \text{Sample}}} \right) \times 100$$

---

#### 5.0 BATCH ANALYSIS DATA (REPRESENTATIVE SHELF-LIFE TRENDS)

The following table represents the stability data for three primary registration batches used to support the shelf-life specification.

**Table 3.2.S.4.1-2: Stability Data Summary (Storage: -70°C)**

| Batch Number | Timepoint (Months) | Purity (SE-HPLC) | Potency (%) | Deamidation (%) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | T=0 | 99.4% | 102% | 1.1% | Pass |
| | T=12 | 99.3% | 99% | 1.2% | Pass |
| | T=24 | 99.2% | 101% | 1.4% | Pass |
| **GLUC-2025-002** | T=0 | 99.5% | 98% | 0.9% | Pass |
| | T=12 | 99.4% | 103% | 1.1% | Pass |
| | T=24 | 99.3% | 97% | 1.3% | Pass |
| **GLUC-2025-003** | T=0 | 99.2% | 105% | 1.2% | Pass |
| | T=12 | 99.1% | 101% | 1.5% | Pass |
| | T=24 | 98.9% | 99% | 1.8% | Pass |

---

#### 6.0 STATISTICAL ANALYSIS AND EXTRAPOLATION
To establish the retest period, Google Health Sciences applied the ANCOVA (Analysis of Covariance) method as per ICH Q1E.

**Model Equations:**
For a degradation attribute $Y$ (e.g., % Purity) over time $t$:
$$Y = \beta_0 + \beta_1 t + \epsilon$$
The 95% confidence interval (lower bound) for the mean degradation was calculated. Based on the data from Batch GLUC-2025-001, the predicted time to reach the lower specification limit (97.0%) at -70°C exceeds 120 months. However, a conservative retest period of 36 months is proposed initially.

---

#### 7.0 REFERENCE STANDARDS
All shelf-life testing is performed against the Glucogen-XR Primary Reference Standard (Lot # GHS-REF-GLUC-01) and Working Reference Standard (Lot # GHS-WRS-2024-B).

- **Primary Reference Standard Storage:** Vapor phase liquid nitrogen ($\le -150$°C).
- **Working Reference Standard Storage:** $-70$°C $\pm 10$°C.

---

#### 8.0 REGULATORY COMMITMENTS
Google Health Sciences commits to:
1.  **Ongoing Stability:** Testing one commercial batch per year under the long-term storage condition (SOP-QC-500).
2.  **Reporting:** Any Out-of-Specification (OOS) result during shelf-life testing will be reported to the FDA within 15 working days as per 21 CFR 314.81.
3.  **Method Validation:** All analytical methods listed in Section 3.2.S.4.1 are validated in accordance with ICH Q2(R1).

---

**End of Subsection: Shelf-Life Specification**
*Confidential - Property of Google Health Sciences*

---

## Justification of Specification

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.5: JUSTIFICATION OF SPECIFICATION

---

#### 1.0 INTRODUCTION AND OVERARCHING PHILOSOPHY

This document provides the technical and scientific justification for the specifications established for **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line by Google Health Sciences.

The specification limits have been established in accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*). The selection of tests is based on the critical quality attributes (CQAs) identified during the Quality by Design (QbD) risk assessment, the manufacturing process capability, and the stability profile of the drug substance.

The specifications ensure that every batch of Glucogen-XR drug substance meets the defined standards for identity, purity, potency, and safety, thereby ensuring consistent clinical performance.

---

#### 2.0 BATCH ANALYSIS SUMMARY FOR LIMIT JUSTIFICATION

The proposed acceptance criteria are supported by the analysis of 12 representative batches (3 Toxicology/Phase 1 batches, 3 Phase 2 batches, and 6 Process Performance Qualification [PPQ] batches).

**Table 2.1: Summary of Batches Used for Specification Setting**

| Batch Number | Scale | Site | Use | Date of Manufacture |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 500L | SSF, CA | Tox/Phase 1 | 12-JAN-2025 |
| GLUC-2025-002 | 500L | SSF, CA | Phase 1 | 05-FEB-2025 |
| GLUC-2025-003 | 500L | SSF, CA | Phase 1 | 02-MAR-2025 |
| GLUC-2025-004 | 2000L | SSF, CA | Phase 2 | 15-JUN-2025 |
| GLUC-2025-005 | 2000L | SSF, CA | Phase 2 | 10-JUL-2025 |
| GLUC-2025-006 | 2000L | SSF, CA | Phase 2 | 01-AUG-2025 |
| GLUC-2025-PPQ1 | 2000L | SSF, CA | PPQ / Phase 3 | 12-OCT-2025 |
| GLUC-2025-PPQ2 | 2000L | SSF, CA | PPQ / Phase 3 | 20-OCT-2025 |
| GLUC-2025-PPQ3 | 2000L | SSF, CA | PPQ / Phase 3 | 28-OCT-2025 |
| GLUC-2025-PPQ4 | 2000L | SSF, CA | PPQ / Phase 3 | 05-NOV-2025 |
| GLUC-2025-PPQ5 | 2000L | SSF, CA | PPQ / Phase 3 | 12-NOV-2025 |
| GLUC-2025-PPQ6 | 2000L | SSF, CA | PPQ / Phase 3 | 19-NOV-2025 |

---

#### 3.0 JUSTIFICATION OF QUALITY ATTRIBUTES

##### 3.1 Appearance and Description
**Test Method:** Visual Inspection (SOP-GHS-QC-102, modeled after USP <790>)
**Acceptance Criteria:** Clear to slightly opalescent, colorless to slightly yellow liquid; essentially free from visible particulates.
**Justification:** Appearance is a fundamental quality attribute. Opalescence limits are justified by comparison to reference standards of the European Pharmacopoeia (Ph. Eur. 2.2.1). The "essentially free from particulates" requirement aligns with USP <790> and <1790> to ensure the absence of extrinsic contamination and intrinsic protein aggregation.

##### 3.2 Identity
**Test 3.2.1: Peptide Mapping (LC-MS/MS)**
**Method:** Tryptic digestion followed by RP-HPLC with Mass Spectrometry detection (SOP-GHS-QC-205).
**Acceptance Criteria:** The chromatogram must correspond to the Reference Standard; the mass of all identified peptide fragments must match theoretical values within ± 10 ppm.
**Justification:** Peptide mapping provides high-resolution primary structure confirmation. Glucogen-XR contains 31 amino acids with a specific sequence. As per ICH Q6B, the identity test must be highly specific. The use of LC-MS ensures that even single amino acid substitutions or post-translational modifications (PTMs) are detected.

**Test 3.2.2: Isoelectric Focusing (iCE3)**
**Method:** Capillary Isoelectric Focusing (cIEF) (SOP-GHS-QC-210).
**Acceptance Criteria:** pI of the main peak is 5.2 ± 0.2.
**Justification:** This confirms the charge profile of the molecule, ensuring no significant deamidation or C-terminal heterogeneity that would shift the net charge.

---

#### 4.0 PURITY AND IMPURITIES

The purification process for Glucogen-XR utilizes a four-step chromatography sequence designed to remove product-related and process-related impurities.

##### 4.1 Product-Related Impurities
**Test 4.1.1: Purity by RP-HPLC**
**Method:** Reversed-Phase High-Performance Liquid Chromatography (SOP-GHS-QC-301).
**Acceptance Criteria:** Main Peak ≥ 98.0%; Total Impurities ≤ 2.0%.
**Justification:** RP-HPLC is sensitive to oxidation (Met residues) and deamidation. Data from batches GLUC-2025-PPQ1 through PPQ6 show a mean purity of 99.1%. The limit of 98.0% provides a statistically sound guard band (Mean - 3SD) while ensuring clinical efficacy.

**Table 4.1.1: Historical RP-HPLC Data**
| Batch | Main Peak (%) | Impurity A (%) | Impurity B (%) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 98.8 | 0.5 | 0.7 |
| GLUC-2025-PPQ1 | 99.2 | 0.3 | 0.5 |
| **Proposed Limit**| **≥ 98.0%** | **Report** | **Report** |

**Test 4.1.2: Size Exclusion Chromatography (SEC-HPLC)**
**Method:** USP <129> / SOP-GHS-QC-305.
**Acceptance Criteria:** Monomer ≥ 99.0%; Aggregates/High Molecular Weight (HMW) ≤ 0.5%; Fragments/LMW ≤ 0.5%.
**Justification:** Protein aggregation is a critical safety risk due to potential immunogenicity. The GHS-CHO-001 line and the XR formulation (using sucrose/polysorbate 80) minimize HMW formation. Clinical batches used in Phase 3 showed <0.2% aggregates. The 0.5% limit is tighter than industry standard (1.0%) to reflect the high stability of Glucogen-XR.

##### 4.2 Process-Related Impurities
**Test 4.2.1: Host Cell Protein (HCP)**
**Method:** ELISA (Commercial Kit with GHS-CHO-001 Specificity Optimization) (SOP-GHS-QC-401).
**Acceptance Criteria:** ≤ 10 ng/mg (ppm).
**Justification:** HCPs can cause immunogenic reactions. The purification process includes a Protein A capture and two Ion Exchange steps. Clearance studies (see Module 3.2.S.2.6) demonstrate a Log Reduction Value (LRV) of >5.2. All clinical batches tested below the Limit of Quantitation (LOQ = 2 ng/mg). The 10 ppm limit is conservative and aligns with FDA expectations for recombinant peptides.

**Test 4.2.2: Residual DNA**
**Method:** qPCR (SOP-GHS-QC-405).
**Acceptance Criteria:** ≤ 10 pg/mg (pg DNA per mg protein).
**Justification:** WHO and FDA guidelines (Guidance for Industry: Chemistry, Manufacturing, and Control Information for Human Gene Therapy Next Generation) suggest a limit of 10 ng per dose. At the maximum clinical dose of Glucogen-XR, this limit results in DNA levels >1000-fold lower than the WHO recommendation.

---

#### 5.0 POTENCY (BIOLOGICAL ACTIVITY)

**Test 5.1: Cell-Based Reporter Gene Assay**
**Method:** In vitro GLP-1 Receptor Activation Assay using HEK-293 cells transfected with GLP-1R and a cAMP-response element (CRE) luciferase reporter (SOP-GHS-BIO-001).
**Acceptance Criteria:** 80% to 125% of Reference Standard.
**Calculation:**
Relative Potency is calculated using a 4-parameter logistic (4-PL) model:
$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$
Where:
- $A$ = Minimum response
- $D$ = Maximum response
- $C$ = $EC_{50}$
- $B$ = Hill slope

**Justification:** As Glucogen-XR is a GLP-1 receptor agonist, a functional bioassay is required by ICH Q6B to ensure the mechanism of action (MOA) is preserved. The range of 80-125% is the industry standard for biological potency, accounting for the inherent variability of cell-based systems (intermediate precision typically <15% CV).

---

#### 6.0 QUANTITY AND PHYSICOCHEMICAL PROPERTIES

##### 6.1 Protein Concentration
**Method:** UV Absorption at 280 nm ($A_{280}$) (SOP-GHS-QC-501).
**Extinction Coefficient:** $\epsilon = 1.45 \text{ L}\cdot\text{g}^{-1}\cdot\text{cm}^{-1}$ (derived from amino acid composition).
**Acceptance Criteria:** 10.0 mg/mL ± 0.5 mg/mL (95.0% - 105.0%).
**Justification:** Accurate dosing is dependent on concentration. The ± 5% range is standard for drug substance protein concentration.

##### 6.2 pH
**Method:** USP <791>.
**Acceptance Criteria:** 6.5 ± 0.3.
**Justification:** The pI of Glucogen-XR is 5.2. A pH of 6.5 ensures solubility and stability while remaining close to physiological pH to minimize injection site pain.

---

#### 7.0 SAFETY AND MICROBIOLOGICAL CONTROL

| Test | Method | Acceptance Criteria | Justification |
| :--- | :--- | :--- | :--- |
| **Bacterial Endotoxins** | USP <85> (LAL) | ≤ 5.0 EU/mg | Based on a max dose of 1 mg/kg. |
| **Bioburden** | USP <61> | ≤ 10 CFU/100 mL | Ensures sterility of subsequent DP. |
| **Mycoplasma** | USP <63> (PCR) | Negative | Cell line safety requirement. |

---

#### 8.0 STATISTICAL RATIONALE FOR LIMITS

The acceptance criteria were derived using the "3-Sigma" approach where applicable.
For an attribute $X$:
$$Upper Limit = \mu + 3\sigma$$
$$Lower Limit = \mu - 3\sigma$$
Where $\mu$ is the process mean and $\sigma$ is the standard deviation of the 12 pivotal batches. For impurities, where the distribution is non-normal, the 95/95 tolerance interval approach was utilized to ensure that at least 95% of the population will fall within the limits with 95% confidence.

---

#### 9.0 CONCLUSION

The specifications for **Glucogen-XR** drug substance are scientifically justified, based on extensive batch data (GLUC-2025-001 through PPQ6), and are compliant with **ICH Q6B, Q3A, and Q3C** guidelines. The combination of high-resolution analytics (LC-MS peptide mapping, cIEF) and functional bioassays ensures that the Google Health Sciences manufacturing process consistently produces a high-quality product for the treatment of Type 2 Diabetes Mellitus.

---
**Document End**
*Confidential - Property of Google Health Sciences*

---

# Analytical Procedures - Identity

## Peptide Mapping by HPLC-UV

# MODULE 3: QUALITY (3.2.S.4.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: ANALYTICAL PROCEDURES - IDENTITY
### SUBSECTION: PEPTIDE MAPPING BY REVERSED-PHASE HPLC WITH ULTRAVIOLET DETECTION (RP-HPLC-UV)

---

#### 1.0 INTRODUCTION AND SCOPE
This document provides the comprehensive analytical procedure for the identification and primary structural characterization of Glucogen-XR (glucapeptide) drug substance using proteolytic digestion followed by Reversed-Phase High-Performance Liquid Chromatography coupled with Ultraviolet Detection (RP-HPLC-UV). 

Peptide mapping serves as the "fingerprint" technique for Glucogen-XR, ensuring that the primary amino acid sequence is correct and that post-translational modifications (PTMs), specifically the site-specific attachment of the extended-release (XR) moiety at Lysine residues and the C-terminal amidation, are consistent with the Reference Standard. This procedure is designed to meet the requirements set forth in **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **USP <1055>** (Biotechnology-Derived Articles—Peptide Mapping).

#### 2.0 PRINCIPLE OF THE METHOD
The Glucogen-XR molecule is a synthetic-recombinant hybrid glucapeptide. Identification is achieved by:
1.  **Denaturation and Reduction:** Breaking of any non-covalent aggregates and reduction of any potential cysteine-related disulfide variants (though the primary sequence is linear, reduction ensures a uniform state).
2.  **Alkylation:** Capping of free thiols using iodoacetamide.
3.  **Enzymatic Digestion:** Site-specific cleavage using Sequencing Grade Endoproteinase Lys-C and Trypsin. Lys-C is utilized specifically to navigate the steric hindrance provided by the XR-alkane chain modifications.
4.  **Chromatographic Separation:** The resulting peptide fragments are separated based on hydrophobicity using a C18 stationary phase with a shallow acetonitrile gradient.
5.  **Detection:** UV absorbance at 214 nm (peptide bond) and 280 nm (aromatic residues).

The identity is confirmed if the "fingerprint" chromatogram of the Test Sample matches the profile of the Glucogen-XR Reference Standard (Lot # GHS-RS-GLUC-002) in terms of peak retention times and relative peak areas.

---

#### 3.0 REAGENTS AND MATERIALS
All reagents must be of Analytical Grade or higher. ACS or HPLC grade solvents are required.

##### 3.1 Equipment and Software
| Equipment ID | Description | Specification/Requirement |
| :--- | :--- | :--- |
| **GHS-HPLC-09** | Agilent 1290 Infinity II UHPLC | Quaternary Pump, Multisampler, Thermostatted Column Comp. |
| **GHS-DET-04** | Diodre Array Detector (DAD) | 190–600 nm range |
| **GHS-COL-402** | Waters XBridge Peptide BEH C18 | 130Å, 3.5 µm, 4.6 mm X 250 mm |
| **GHS-INC-02** | Eppendorf ThermoMixer C | Range: 1°C to 100°C; ± 0.5°C |
| **GHS-BAL-12** | Mettler Toledo XPR205 | Analytical Balance (d=0.01 mg) |
| **Empower 3** | Waters Chromatography Data System | Compliance with 21 CFR Part 11 |

##### 3.2 Chemicals and Reference Standards
*   **Glucogen-XR Reference Standard:** GHS-RS-GLUC-002 (Google Health Sciences).
*   **Trypsin, Sequencing Grade:** Promega (Cat# V5111) or equivalent.
*   **Endoproteinase Lys-C:** Roche (Cat# 11047825001).
*   **Guanidine Hydrochloride (Gnd-HCl):** Sigma-Aldrich, 8M solution.
*   **Tris(hydroxymethyl)aminomethane (Tris):** USP Grade.
*   **Dithiothreitol (DTT):** ≥99% purity.
*   **Iodoacetamide (IAM):** ≥99% purity, stored in dark.
*   **Trifluoroacetic Acid (TFA):** Optima™ LC/MS Grade.
*   **Acetonitrile (ACN):** HPLC Grade.
*   **Water:** Milli-Q 18.2 MΩ·cm.

---

#### 4.0 PREPARATION OF SOLUTIONS AND BUFFERS

##### 4.1 Digestion Buffer (6.0 M Gnd-HCl, 0.1 M Tris, pH 8.0)
Dissolve 1.21 g of Tris in 70 mL of Milli-Q water. Add 57.3 g of Guanidine Hydrochloride. Adjust pH to 8.0 ± 0.1 using 1.0 M HCl. Quantitatively transfer to a 100 mL volumetric flask and dilute to volume with water. Stable for 1 month at 2-8°C.

##### 4.2 Reducing Solution (0.5 M DTT)
Dissolve 77.1 mg of Dithiothreitol in 1.0 mL of Digestion Buffer. Prepare fresh daily.

##### 4.3 Alkylating Solution (0.5 M IAM)
Dissolve 92.5 mg of Iodoacetamide in 1.0 mL of Digestion Buffer. **Keep protected from light.** Prepare fresh before use.

##### 4.4 Mobile Phase A (0.1% TFA in Water)
Add 1.0 mL of TFA to 1000 mL of Milli-Q water. Mix thoroughly and degas via sonication for 10 minutes.

##### 4.5 Mobile Phase B (0.08% TFA in Acetonitrile)
Add 0.8 mL of TFA to 1000 mL of HPLC grade Acetonitrile. Mix thoroughly and degas.

---

#### 5.0 SAMPLE PREPARATION PROTOCOL (DIGESTION PROCEDURE)
This procedure must be performed in triplicate for both the Reference Standard (RS) and the Drug Substance (DS) batches (e.g., GLUC-2025-001, GLUC-2025-002).

##### 5.1 Sample Normalization
Dilute the Glucogen-XR drug substance to a final concentration of 2.0 mg/mL using the Digestion Buffer (Section 4.1). 

##### 5.2 Reduction and Alkylation
1.  Transfer 250 µL (500 µg) of the normalized sample into a 1.5 mL low-protein binding microcentrifuge tube.
2.  Add 25 µL of **0.5 M DTT** (Section 4.2). Vortex gently.
3.  Incubate at 56°C for 45 minutes in the ThermoMixer at 300 rpm.
4.  Cool to room temperature (approx. 22°C).
5.  Add 50 µL of **0.5 M IAM** (Section 4.3). Vortex gently.
6.  Incubate at room temperature for 30 minutes in the **dark**.
7.  Quench the reaction by adding 10 µL of 0.5 M DTT.

##### 5.3 Buffer Exchange (Desalting)
Since high concentrations of Gnd-HCl inhibit enzymatic activity, the sample must be desalted.
1.  Use a Zeba™ Spin Desalting Column (7K MWCO).
2.  Equilibrate the column with 50 mM Tris-HCl, pH 7.5.
3.  Load the reduced/alkylated sample and centrifuge at 1500 x g for 2 minutes.
4.  Recover the protein in the flow-through.

##### 5.4 Dual-Enzyme Digestion
1.  **Lys-C Digestion:** Add Endoproteinase Lys-C to the sample at an Enzyme-to-Protein ratio of 1:50 (w/w). Incubate at 37°C for 4 hours.
2.  **Trypsin Digestion:** Add Trypsin at an Enzyme-to-Protein ratio of 1:25 (w/w). Incubate at 37°C for an additional 12 hours (overnight).
3.  **Termination:** Stop the reaction by adding 10 µL of 10% TFA to lower the pH to < 3.0.
4.  Centrifuge at 14,000 x g for 5 minutes to remove any precipitate. Transfer the supernatant to an HPLC vial with a low-volume insert.

---

#### 6.0 CHROMATOGRAPHIC CONDITIONS

| Parameter | Setting |
| :--- | :--- |
| **Column** | Waters XBridge Peptide BEH C18, 130Å, 3.5 µm, 4.6 x 250 mm |
| **Column Temperature** | 40°C ± 1°C |
| **Autosampler Temperature** | 5°C ± 2°C |
| **Flow Rate** | 1.0 mL/min |
| **Injection Volume** | 50 µL (approx. 40 µg of digested peptide) |
| **Detection Wavelength** | 214 nm (Primary), 280 nm (Secondary) |
| **Run Time** | 120 minutes |

##### 6.1 Gradient Program
The gradient is optimized to resolve the XR-modified peptides which exhibit significant hydrophobicity.

| Time (min) | % Mobile Phase A | % Mobile Phase B | Curve Type |
| :--- | :--- | :--- | :--- |
| 0.0 | 98 | 2 | Initial |
| 5.0 | 98 | 2 | Linear |
| 85.0 | 45 | 55 | Linear |
| 95.0 | 10 | 90 | Linear |
| 105.0 | 10 | 90 | Linear |
| 106.0 | 98 | 2 | Linear |
| 120.0 | 98 | 2 | Equilibrium |

---

#### 7.0 DATA ANALYSIS AND EVALUATION

##### 7.1 System Suitability Criteria
The analysis is valid only if the following criteria are met for the Reference Standard injection:
1.  **Visual Matching:** The chromatogram of the RS must match the historical Master Profile.
2.  **Resolution ($R_s$):** The resolution between the critical pair (Peptide Fragment T4 and T5-XR) must be $\geq 1.5$.
3.  **Tailing Factor ($T$):** The tailing factor for the main peak (T1) must be between 0.8 and 1.5.
4.  **Repeatability:** The Relative Standard Deviation (RSD) of the retention times for five major peaks (T1, T3, T7, T9-XR, T12) must be $\leq 0.5\%$.

##### 7.2 Peak Identification Table (Expected Fragments)
Glucogen-XR is cleaved into specific fragments. The XR modification is located on Fragment T9 (Lysine-26).

| Peak ID | Sequence Range | Theoretical Mass (Da) | Expected RT (min) | Modification |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | 1-12 | 1452.6 | 14.2 ± 0.5 | N-term |
| **T2** | 13-18 | 710.4 | 22.8 ± 0.5 | - |
| **T3** | 19-23 | 625.3 | 31.4 ± 0.5 | - |
| **T9-XR** | 24-32 | 4892.1 | 74.2 ± 1.0 | **XR-Lipidation** |
| **T12** | 33-39 | 845.5 | 45.1 ± 0.5 | C-term Amide |

---

#### 8.0 REPRESENTATIVE BATCH DATA (VALIDATION RESULTS)
The following table summarizes the results for three clinical-scale batches of Glucogen-XR.

**Table 8.1: Comparative Peptide Mapping Results for Batches GLUC-2025-001, 002, and 003**

| Peak Parameter | RS (GHS-RS-GLUC-002) | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **RT T1 (min)** | 14.21 | 14.22 | 14.20 | 14.21 |
| **RT T9-XR (min)** | 74.35 | 74.38 | 74.32 | 74.36 |
| **% Area T9-XR** | 18.4% | 18.2% | 18.5% | 18.3% |
| **Similarity Index**| 1.00 | 0.998 | 0.999 | 0.997 |
| **Conformity** | PASS | PASS | PASS | PASS |

---

#### 9.0 CALCULATIONS
**Similarity Index (SI):**
The Similarity Index is calculated by comparing the peak area ratios of the Sample vs. the Reference Standard for the 10 most prominent peaks.

$$SI = \frac{\sum (R_{sample} \times R_{RS})}{\sqrt{\sum R_{sample}^2 \times \sum R_{RS}^2}}$$

Where $R$ is the relative retention time (RRT) or normalized peak area. An $SI > 0.98$ is required for confirmation of identity.

---

#### 10.0 REGULATORY COMPLIANCE AND REFERENCES
1.  **ICH Q2(R1):** Validation of Analytical Procedures.
2.  **ICH Q6B:** Specifications for Biological Products.
3.  **USP <121>:** Insulin Assays (for mapping methodologies).
4.  **FDA Guidance for Industry:** "Development of Therapeutic Peptides" (2023 Update).

**Approval:**
*Dr. Alister Vogel, Head of Quality Control, Google Health Sciences.*
*Date: 14-Oct-2025*

---

## LC-MS Intact Mass

### 3.2.S.4.2.1 Analytical Procedures: Identity via Liquid Chromatography-Mass Spectrometry (LC-MS) for Intact Mass Analysis

---

#### 1.0 INTRODUCTION AND SCOPE

This subsection details the analytical procedure, validation parameters, and comprehensive technical specifications for the determination of the intact molecular mass of **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line by Google Health Sciences.

The primary objective of this LC-MS Intact Mass procedure is to confirm the primary sequence identity and the profile of post-translational modifications (PTMs) by comparing the observed molecular weight against the theoretical mass derived from the known amino acid sequence. Given the complex nature of the Glucogen-XR molecule—which incorporates a 31-amino acid peptide backbone fused to a high-molecular-weight PEGylation moiety and specific fatty acid acylation for extended-release kinetics—the intact mass analysis serves as a critical quality attribute (CQA) for every drug substance (DS) batch.

**Regulatory Compliance Statement:**
This procedure is developed and validated in accordance with:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q2(R2):** Validation of Analytical Procedures.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (where applicable for protein characterization).
*   **USP <1730>:** Iterative Mass Spectrometry for Protein Identity.

---

#### 2.0 PRINCIPLE OF THE METHOD

The Glucogen-XR drug substance is subjected to Liquid Chromatography-Mass Spectrometry (LC-MS) using an electrospray ionization (ESI) source and a Quadrupole Time-of-Flight (Q-ToF) mass analyzer.

1.  **Desalting and Separation:** Samples are injected onto a reversed-phase chromatography (RPC) column. This step removes excipients (e.g., sodium chloride, polysorbate 80, buffering agents) that would interfere with ionization and provides a focused peak of the protein of interest.
2.  **Ionization:** The eluent is introduced into the ESI source under high voltage, generating a distribution of multiply charged ions (the charge state envelope).
3.  **Mass Analysis:** The Q-ToF analyzer measures the mass-to-charge (m/z) ratio of these ions with high accuracy (typically <10 ppm).
4.  **Deconvolution:** Mathematical algorithms (e.g., MaxEnt 1 or BayesSpray) are utilized to transform the multiply charged m/z spectrum into a zero-charge molecular mass spectrum.

---

#### 3.0 EQUIPMENT AND INSTRUMENTATION

The following equipment, or equivalent validated systems, are utilized at the Google Health Sciences Analytical Development Laboratory (Site ID: GHS-SSF-3000):

| Equipment Type | Manufacturer/Model | Technical Specification |
| :--- | :--- | :--- |
| **UPLC System** | Waters ACQUITY UPLC H-Class Plus | Binary Solvent Manager, Flow rate accuracy ±0.1% |
| **Mass Spectrometer** | Waters Xevo G3 Q-Tof | Mass Resolution >35,000 (FWHM at m/z 956) |
| **Column** | ACQUITY UPLC Protein BEH C4 | 1.7 µm, 300Å, 2.1 x 50 mm |
| **Data System** | UNIFI Scientific Information System | Version 1.9.12 (21 CFR Part 11 Compliant) |
| **Auto-sampler** | ACQUITY Sample Manager-FTN | Temperature control: 4.0°C ± 2.0°C |
| **Calibrant** | NaI/CsI or Glu-Fibrinopeptide B | Mass range calibration: 500 – 5000 m/z |

---

#### 4.0 REAGENTS AND REFERENCE MATERIALS

All reagents must be of LC-MS grade or higher.

1.  **Mobile Phase A:** 0.1% (v/v) Formic Acid (FA) in Water (Milli-Q, 18.2 MΩ·cm).
2.  **Mobile Phase B:** 0.1% (v/v) Formic Acid in Acetonitrile (ACN).
3.  **Seal Wash/Needle Wash:** 10% (v/v) Acetonitrile in Water.
4.  **Reference Standard:** Glucogen-XR Primary Reference Standard (Batch: GHS-RS-GLUC-001).
5.  **Quality Control (QC) Sample:** Glucogen-XR Internal Control (Batch: GHS-QC-GLUC-V2).

---

#### 5.0 SAMPLE PREPARATION PROTOCOL (SOP-AN-0442)

The sample preparation is critical to ensure the removal of interfering lipids or high-concentration surfactants used in the formulation.

**Step 5.1: Sample Dilution**
1.  Retrieve the Drug Substance (DS) vial from -80°C storage and thaw at room temperature for 30 minutes.
2.  In a 1.5 mL LoBind microcentrifuge tube, dilute the DS (nominal concentration 20 mg/mL) to a target concentration of 0.5 mg/mL using Mobile Phase A.
3.  *Calculation:* $V_{diluent} = (C_{initial} / C_{target} - 1) \times V_{sample}$
4.  For a 20 µL sample: $(20 / 0.5 - 1) \times 20 = 780$ µL of 0.1% FA in Water.

**Step 5.2: De-glycosylation (Optional for Sequence Confirmation)**
*Note: Glucogen-XR is not glycosylated; however, this step is included in the master protocol for platform consistency.*
1.  Add 1 µL of PNGase F to 50 µL of the 0.5 mg/mL sample.
2.  Incubate at 37°C for 2 hours in a thermomixer at 300 RPM.

**Step 5.3: Transfer**
1.  Transfer 200 µL of the diluted sample to a deactivated glass LC vial with a 300 µL insert.
2.  Ensure no air bubbles are trapped at the bottom of the insert.

---

#### 6.0 CHROMATOGRAPHIC AND MASS SPECTROMETRY PARAMETERS

##### 6.1 UPLC Gradient Program
The gradient is optimized to elute the Glucogen-XR peptide away from the salt front and hydrophobic impurities.

| Time (min) | Flow Rate (mL/min) | %A (0.1% FA in H2O) | %B (0.1% FA in ACN) | Curve |
| :--- | :--- | :--- | :--- | :--- |
| 0.00 | 0.300 | 95.0 | 5.0 | Initial |
| 2.00 | 0.300 | 95.0 | 5.0 | 6 (Linear) |
| 15.00 | 0.300 | 40.0 | 60.0 | 6 (Linear) |
| 17.00 | 0.300 | 5.0 | 95.0 | 6 (Linear) |
| 19.00 | 0.300 | 5.0 | 95.0 | 6 (Linear) |
| 20.00 | 0.300 | 95.0 | 5.0 | 6 (Linear) |

##### 6.2 Mass Spectrometer Settings (ESI+)
*   **Capillary Voltage:** 3.0 kV
*   **Sampling Cone:** 40 V
*   **Source Temperature:** 120°C
*   **Desolvation Temperature:** 450°C
*   **Desolvation Gas Flow:** 800 L/h
*   **Mass Range:** 500 – 4000 m/z
*   **Scan Time:** 1.0 second
*   **LockSpray:** Leu-Enkephalin (m/z 556.2771) sampled every 30 seconds.

---

#### 7.0 DATA ANALYSIS AND DECONVOLUTION

The raw m/z spectrum is processed using the **MaxEnt 1** algorithm within the UNIFI software suite.

1.  **Spectrum Extraction:** Sum the scans across the apex of the Glucogen-XR chromatographic peak (typically $t_R$ = 11.4 min).
2.  **Background Subtraction:** Subtract the baseline noise using a polynomial order of 15 and a 50% tolerance.
3.  **Deconvolution Parameters:**
    *   **Output Mass Range:** 4,000 – 8,000 Da (for the peptide portion) or 45,000 - 55,000 Da (for the full conjugate).
    *   **Resolution:** 0.1 Da/channel.
    *   **Model Peak Width:** 0.5 Da at half height.
    *   **Iteration Limit:** 20.

---

#### 8.0 THEORETICAL MASS CALCULATION

The theoretical mass is calculated based on the chemical formula of the Glucogen-XR molecule:

**Peptide Backbone:** $C_{151}H_{228}N_{40}O_{47}$
**Modifications:**
*   N-terminal Acetylation: $+42.01$ Da
*   C-terminal Amidation: $-0.98$ Da
*   Fatty Acid Acylation (C16): $+238.23$ Da

**Theoretical Monoisotopic Mass:** 3,421.68 Da (Peptide portion example)
**Theoretical Average Mass:** 3,423.88 Da

For the full extended-release construct (including PEG-linker):
**Target Mass:** 48,245.12 Da (Average Mass)

---

#### 9.0 REPRESENTATIVE DATA AND BATCH ANALYSIS (GLUC-2025-XXX)

The following table summarizes the intact mass results for the latest three clinical-scale batches produced at the GHS-SSF facility.

**Table 9.1: Intact Mass Confirmation Results for Glucogen-XR DS**

| Batch Number | Manufacture Date | Observed Mass (Da) | Theoretical Mass (Da) | Delta (ppm) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 48,245.18 | 48,245.12 | 1.24 | Pass |
| **GLUC-2025-002** | 28-JAN-2025 | 48,245.09 | 48,245.12 | -0.62 | Pass |
| **GLUC-2025-003** | 15-FEB-2025 | 48,245.14 | 48,245.12 | 0.41 | Pass |
| **GHS-RS-001** | 01-OCT-2024 | 48,245.12 | 48,245.12 | 0.00 | Reference |

**Statistical Summary:**
*   **Mean Observed Mass:** 48,245.14 Da
*   **Standard Deviation:** 0.045 Da
*   **% RSD:** 0.00009%
*   **Mass Accuracy Range:** -0.62 to 1.24 ppm

---

#### 10.0 ACCEPTANCE CRITERIA AND SYSTEM SUITABILITY

To ensure the validity of the identity test, the following criteria must be met:

1.  **System Suitability:**
    *   The resolution of the Q-ToF system must be $\ge$ 30,000 (FWHM) for the [M+3H]3+ ion of Glu-Fibrinopeptide B.
    *   Mass accuracy of the LockSpray calibrant must be $\le$ 2 ppm.
2.  **Sample Criteria:**
    *   The main peak in the deconvoluted spectrum must correspond to the theoretical mass of Glucogen-XR within a tolerance of $\pm$ 100 ppm (approximately $\pm$ 4.8 Da for the 48 kDa species).
    *   The signal-to-noise (S/N) ratio of the highest intensity charge state in the raw spectrum must be $\ge$ 20.
3.  **Impurity/Variant Reporting:**
    *   Any satellite peaks with an intensity $>5\%$ of the base peak must be identified (e.g., deamidation, oxidation, or truncated species).

---

#### 11.0 VALIDATION SUMMARY (METHOD GHS-MET-0089)

The LC-MS method for intact mass was validated for **Specificity, Accuracy, Precision (Repeatability and Intermediate Precision), and Robustness.**

**11.1 Specificity:**
The method was tested against the Glucogen-XR placebo (formulation buffer) and related peptide analogs (Exenatide, Liraglutide). No interfering peaks were observed at the retention time of Glucogen-XR.

**11.2 Precision:**
Repeatability was assessed by six (6) independent injections of Batch GLUC-2025-001.
*   Mean Mass: 48,245.12 Da
*   SD: 0.02 Da
*   Intermediate Precision (Day 2, Analyst 2): Mean Mass 48,245.15 Da.

**11.3 Robustness:**
Variations in Column Temperature ($\pm 5^\circ$C) and Flow Rate ($\pm 0.05$ mL/min) did not result in a mass shift greater than 5 ppm.

---

#### 12.0 FOOTNOTES AND REFERENCES

1.  **GHS-SOP-AN-0442:** "Intact Mass Analysis of Biologics via UPLC-QToF."
2.  **Google Health Sciences Technical Report GHS-TR-2024-08:** "Structural Characterization of GLP-1 Derivatives Using High-Resolution Mass Spectrometry."
3.  **ICH Q6B Guidance:** "Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products."
4.  **USP General Chapter <129>:** "Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies."

---
*End of Subsection 3.2.S.4.2.1*

---

## Amino Acid Analysis

### 3.2.S.4.2 ANALYTICAL PROCEDURES - IDENTITY
#### 3.2.S.4.2.1 SUBSECTION: AMINO ACID ANALYSIS (AAA) BY ION-EXCHANGE CHROMATOGRAPHY WITH POST-COLUMN NINHYDRIN DERIVATIZATION

---

#### 1.0 SCOPE AND APPLICATION
This analytical procedure provides the technical framework for the qualitative and quantitative determination of the amino acid composition of **Glucogen-XR (glucapeptide extended-release)**, a synthetic GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line at Google Health Sciences. 

Amino Acid Analysis (AAA) serves as a primary identity test for the Drug Substance (DS). It confirms that the primary structure of the glucapeptide matches the theoretical sequence and assesses the absolute protein concentration through the quantification of stable amino acids. This procedure is designed to comply with **USP <121> Insulin Assays**, **USP <1052> Amino Acid Analysis**, and **ICH Q6B (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products)**.

---

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINE ALIGNMENT
The methodology described herein has been validated according to **ICH Q2(R2)** guidelines for Specificity, Linearity, Accuracy, Precision, Limit of Quantitation (LOQ), and Robustness.

| Regulatory Reference | Application to Glucogen-XR AAA |
| :--- | :--- |
| **ICH Q6B** | Requirement for primary structure characterization (Amino Acid Composition). |
| **USP <1052>** | Methodology based on Method 1 (Post-column ninhydrin detection). |
| **21 CFR 211.165** | Testing and release for distribution requirements. |
| **Ph. Eur. 2.2.56** | Amino Acid Analysis requirements for European compliance. |

---

#### 3.0 PRINCIPLE OF THE METHOD
The Glucogen-XR molecule is a 31-amino acid peptide with an extended-release modification. To determine its composition, the peptide backbone must be hydrolyzed into its constituent monomers.

1.  **Hydrolysis:** The drug substance is subjected to liquid-phase acid hydrolysis using 6N Hydrochloric Acid (HCl) at 110°C for 24 hours under vacuum to prevent oxidative degradation.
2.  **Separation:** The resulting free amino acids are separated via Cation Exchange Chromatography (IEC) using a lithium-based buffer system designed for high resolution of complex peptide mixtures.
3.  **Derivatization:** Post-column reaction with Ninhydrin at 135°C converts the amino acids into colored complexes (Ruhemann's Purple for primary amines at 570 nm; yellow for secondary amines like Proline at 440 nm).
4.  **Quantification:** Comparison of peak areas against a NIST-traceable reference standard (Standard Amino Acid Mixture) to determine molar ratios.

---

#### 4.0 EQUIPMENT AND REAGENTS
All equipment is qualified under the Google Health Sciences (GHS) Master Validation Plan (MVP-2024-EQP).

**4.1 Instrumentation**
*   **HPLC System:** Waters Alliance e2695 with a dedicated Post-Column Reaction (PCR) module.
*   **Column:** High-efficiency Li-cation exchange column (4.6 mm x 100 mm, 3 µm particle size).
*   **Detector:** Dual-wavelength UV/Vis Detector (570 nm and 440 nm).
*   **Hydrolysis Station:** Eldex H/D Workstation with vacuum manifold and inert gas (Argon) purging capability.

**4.2 Reagents and Standards**
*   **HCl (6N):** Constant boiling, sequence grade.
*   **Phenol (99.9%):** Added as an antioxidant (0.1% v/v) to protect Tyrosine from halogenation.
*   **Internal Standard:** Norleucine (Nle), 2.5 µmol/mL in 0.1 N HCl.
*   **Reference Standard:** NIST SRM 2389a (Amino Acids in 0.1 mol/L HCl).
*   **Ninhydrin Reagent:** Trione® Ninhydrin Reagent (Pickering Laboratories).

---

#### 5.0 EXPERIMENTAL PROTOCOL (SOP-GHS-ANA-0442)

**5.1 Sample Preparation and Hydrolysis (Triple Analysis)**
1.  Aliquots of Glucogen-XR Drug Substance (Batch: GLUC-2025-XXX) are diluted to a concentration of 1.0 mg/mL in Water for Injection (WFI).
2.  Transfer 50 µL of the sample into a specialized hydrolysis vial.
3.  Add 10 µL of Internal Standard (Norleucine).
4.  Evaporate to dryness using a centrifugal evaporator (SpeedVac) at 35°C.
5.  Add 200 µL of 6N HCl containing 0.1% Phenol.
6.  Evacuate the vial to <50 mTorr and flush with Argon; repeat three times.
7.  Seal the vial and incubate at 110.0°C (± 1.0°C) for exactly 24 hours in a calibrated heating block (ID: GHS-BLK-09).

**5.2 Reconstitution**
Following hydrolysis, samples are dried under vacuum. The residue is reconstituted in 500 µL of Lithium Diluent (pH 2.20) and filtered through a 0.22 µm PVDF membrane into HPLC autosampler vials.

**5.3 Chromatographic Conditions**
*   **Flow Rate:** 0.40 mL/min
*   **Column Temp:** 37°C to 75°C (gradient temperature profile)
*   **PCR Temp:** 135°C
*   **Injection Volume:** 10 µL

---

#### 6.0 CALCULATION FORMULAE

**6.1 Response Factor (RF) for each Amino Acid:**
$$RF_{aa} = \frac{Area_{std} \times Conc_{Nle}}{Area_{Nle} \times Conc_{std}}$$

**6.2 Molar Content (nmol):**
$$M_{aa} = \frac{Area_{sample} \times Conc_{Nle}}{Area_{Nle, sample} \times RF_{aa}}$$

**6.3 Molar Ratio (Theoretical Comparison):**
$$Ratio_{aa} = \frac{M_{aa}}{\sum M_{stable} / \sum Theoretical_{stable}}$$
*Note: Stable amino acids used for normalization include Asp, Glu, Gly, Ala, Val, Ile, Leu, Phe, Lys, and Arg.*

---

#### 7.0 DATA SUMMARY AND BATCH RESULTS
The following table summarizes the data from three pivotal batches of Glucogen-XR produced at the South San Francisco facility.

**Table 1: Amino Acid Composition Results for Glucogen-XR (Batches GLUC-2025-001 through 003)**

| Amino Acid | Theoretical (Residues) | GLUC-2025-001 (Found) | GLUC-2025-002 (Found) | GLUC-2025-003 (Found) | % Recovery (Avg) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Aspartic Acid (Asx) | 1 | 0.98 | 1.01 | 0.99 | 99.3% |
| Threonine (Thr)^1 | 2 | 1.88 | 1.91 | 1.89 | 94.7% |
| Serine (Ser)^1 | 3 | 2.65 | 2.71 | 2.68 | 89.3% |
| Glutamic Acid (Glx) | 4 | 4.05 | 4.02 | 4.08 | 101.3% |
| Proline (Pro) | 1 | 1.05 | 1.03 | 1.02 | 103.3% |
| Glycine (Gly) | 4 | 4.02 | 3.98 | 4.01 | 100.1% |
| Alanine (Ala) | 2 | 2.01 | 2.00 | 2.03 | 100.7% |
| Valine (Val)^2 | 2 | 1.92 | 1.94 | 1.93 | 96.5% |
| Isoleucine (Ile)^2 | 1 | 0.94 | 0.95 | 0.95 | 94.7% |
| Leucine (Leu) | 2 | 2.04 | 2.02 | 2.05 | 101.8% |
| Tyrosine (Tyr) | 1 | 0.96 | 0.97 | 0.98 | 97.0% |
| Phenylalanine (Phe)| 2 | 1.99 | 2.01 | 2.00 | 100.0% |
| Lysine (Lys) | 2 | 2.03 | 2.04 | 2.02 | 101.5% |
| Histidine (His) | 1 | 0.97 | 0.98 | 0.99 | 98.0% |
| Arginine (Arg) | 2 | 2.01 | 1.99 | 2.02 | 100.3% |
| Tryptophan (Trp)^3 | 1 | N.D. | N.D. | N.D. | - |
| Cysteine (Cys)^4 | 0 | 0.00 | 0.00 | 0.00 | - |

**Footnotes:**
1.  Values for Serine and Threonine are corrected for degradative loss during hydrolysis (10% and 5% respectively per GHS-VLD-772).
2.  Isoleucine and Valine ratios are slightly lower due to the steric hindrance of the peptide bonds involving branched-chain residues, which require 72 hours for complete cleavage (standardized to 24h for routine release).
3.  Tryptophan is destroyed during acid hydrolysis and is verified separately by UV Spectroscopy (Second Derivative) and LC-MS/MS.
4.  Cysteine/Cystine are not present in the Glucogen-XR primary sequence.

---

#### 8.0 SYSTEM SUITABILITY CRITERIA
For a run to be considered valid for Glucogen-XR release, the following criteria must be met:
1.  **Resolution:** Resolution between Threonine and Serine must be ≥ 1.5.
2.  **Precision:** %RSD of the Internal Standard (Norleucine) peak area across 6 injections of the standard must be ≤ 2.0%.
3.  **Linearity:** Correlation coefficient ($R^2$) for the 5-point calibration curve must be ≥ 0.995 for all reported amino acids.
4.  **Sensitivity:** Signal-to-Noise (S/N) ratio for the least abundant amino acid (Histidine) must be ≥ 10:1.

---

#### 9.0 ANALYTICAL METHOD VALIDATION SUMMARY (VAL-GHS-022)

**9.1 Specificity**
Specificity was demonstrated by injecting a blank (diluent), the hydrolysis matrix, and a mixture of known degradation products. No interfering peaks were observed at the retention times of the 17 standard amino acids.

**9.2 Linearity and Range**
The method was found to be linear over the range of 50 pmol to 2500 pmol on-column.
*   *Equation for Glutamic Acid:* $y = 1.45e5x + 2.1e3$ ($R^2 = 0.9998$).

**9.3 Accuracy (Recovery)**
Accuracy was evaluated by spiking a known quantity of Glucogen-XR Reference Standard into the matrix. Recovery of amino acids ranged from 92.4% to 104.1%, meeting the acceptance criteria of 90-110%.

---

#### 10.0 CONCLUSION
The Amino Acid Analysis of Glucogen-XR (glucapeptide extended-release) confirms the identity and molar composition of the drug substance. The data obtained from batches **GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003** demonstrate consistent manufacturing performance and high-fidelity translation from the GHS-CHO-001 cell line. The results are in full alignment with the theoretical sequence of the GLP-1 receptor agonist.

---
**END OF SECTION**

---

# Analytical Procedures - Purity and Impurities

## SEC for Aggregates

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.2: ANALYTICAL PROCEDURES
#### PART 4.2.7: SIZE EXCLUSION CHROMATOGRAPHY (SEC) FOR THE QUANTIFICATION OF AGGREGATES AND HIGH MOLECULAR WEIGHT SPECIES (HMWS)

---

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive description of the Size Exclusion Chromatography (SEC) analytical procedure utilized for the monitoring, quantification, and control of High Molecular Weight Species (HMWS), dimers, and aggregates in Glucogen-XR (glucapeptide extended-release) Drug Substance. 

Glucogen-XR is a recombinant glucagon-like peptide-1 (GLP-1) receptor agonist fusion protein produced in the proprietary Google Health Sciences CHO-K1 GS knockout cell line (GHS-CHO-001). Given the propensity of peptide-fusion proteins to undergo self-association and covalent/non-covalent aggregation during the downstream purification process and long-term storage, the SEC-HPLC method serves as a critical quality control (CQC) stability-indicating assay.

The method is designed to resolve:
1.  **HMWS 1 (Higher Order Aggregates/Multimers):** Molecular weight > 500 kDa.
2.  **HMWS 2 (Dimers/Trimers):** Molecular weight range 120 kDa – 300 kDa.
3.  **Main Peak (Monomer):** Target therapeutic glucapeptide (Target MW: ~64.5 kDa).
4.  **Low Molecular Weight Species (LMWS):** Proteolytic fragments or truncated species.

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
This procedure has been developed, validated, and implemented in accordance with the following international regulatory frameworks:
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <621>:** Chromatography.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (where applicable to fusion proteins).
*   **FDA Guidance for Industry:** Quality Systems Approach to Pharmaceutical CGMP Regulations.

### 3.0 METHOD PRINCIPLE
The separation of Glucogen-XR species is based on the hydrodynamic volume of the molecules in a solution phase. The stationary phase consists of a hydrophilic, bonded silica gel with a pore size of 250 Å, optimized for the separation of proteins in the 10 kDa to 500 kDa range. As the mobile phase (phosphate-buffered saline with organic modifier) carries the sample through the column, larger aggregates are excluded from the pores and elute earlier, while the monomeric glucapeptide and smaller fragments penetrate the pores to varying degrees and elute later.

### 4.0 REAGENTS, MATERIALS, AND EQUIPMENT

#### 4.1 Equipment Specifications
The following equipment (or equivalent) is qualified for use in the GHS South San Francisco facility:

| Equipment ID | Description | Manufacturer/Model |
| :--- | :--- | :--- |
| **HPLC-SEC-01** | Binary or Quaternary Pump with Degasser | Agilent 1260 Infinity II / Waters Arc HPLC |
| **DET-VWD-05** | Variable Wavelength Detector (VWD) or DAD | Agilent G7114A |
| **COL-SEC-300** | Size Exclusion Column | TSKgel G3000SWxl (7.8 mm ID x 30 cm, 5 µm) |
| **G-COL-01** | Guard Column | TSKgel SWxl Guard Column (6.0 mm ID x 4 cm) |
| **AUTOS-22** | Autosampler with Cooling Module (set at 5°C) | Agilent G7129A |
| **THERM-09** | Column Thermostat (set at 25°C) | Agilent G7116A |

#### 4.2 Reagents and Reference Standards
All reagents must be ACS Grade or higher.

*   **Sodium Phosphate Monobasic (NaH2PO4·H2O):** USP Grade.
*   **Sodium Phosphate Dibasic (Na2HPO4·7H2O):** USP Grade.
*   **Sodium Chloride (NaCl):** USP Grade.
*   **Isopropanol (IPA):** HPLC Grade (used at 10% v/v to reduce non-specific hydrophobic interactions).
*   **Purified Water:** Milli-Q or USP Purified Water (18.2 MΩ-cm).
*   **Reference Standard:** Glucogen-XR Primary Reference Standard (Batch: GHS-REF-GLUC-001).

### 5.0 PREPARATION OF SOLUTIONS

#### 5.1 Mobile Phase Preparation (0.1M Phosphate, 0.2M NaCl, 10% IPA, pH 6.8)
1.  Measure 800 mL of Purified Water into a 2L graduated cylinder.
2.  Add 6.90 g of Sodium Phosphate Monobasic and 7.10 g of Sodium Phosphate Dibasic.
3.  Add 11.68 g of Sodium Chloride.
4.  Stir until fully dissolved.
5.  Adjust pH to 6.8 ± 0.05 using 1N NaOH or 1N HCl.
6.  Add 100 mL of Isopropanol (IPA).
7.  QS to 1000 mL with Purified Water.
8.  Filter through a 0.22 µm PES membrane filter.
9.  Degas via sonication for 15 minutes.

#### 5.2 System Suitability Sample (SSS) Preparation
The SSS is derived from the Working Reference Standard (WRS).
1.  Thaw one aliquot of WRS (Batch GLUC-2025-WRS-01) at room temperature.
2.  Dilute with Mobile Phase to a final concentration of 2.0 mg/mL.
3.  Transfer to an HPLC vial with a low-volume insert.

### 6.0 CHROMATOGRAPHIC CONDITIONS

| Parameter | Setting |
| :--- | :--- |
| **Flow Rate** | 0.5 mL/min (Isocratic) |
| **Detection Wavelength** | 280 nm (Primary) / 214 nm (Secondary for sensitivity) |
| **Column Temperature** | 25°C ± 2°C |
| **Autosampler Temperature** | 5°C ± 3°C |
| **Injection Volume** | 20 µL (for 2.0 mg/mL samples) |
| **Run Time** | 35 minutes |
| **Needle Wash** | 50% Methanol / 50% Water |

### 7.0 DETAILED ANALYTICAL PROTOCOL

#### 7.1 Column Equilibration
Prior to analysis, the TSKgel G3000SWxl column must be equilibrated with Mobile Phase for at least 60 minutes at 0.5 mL/min. A stable baseline must be achieved, defined as a drift of < 0.5 mAU/hour and noise < 0.02 mAU.

#### 7.2 Injection Sequence
The following injection sequence is mandatory for every GMP analytical run:

1.  **Blank (Mobile Phase):** 2 injections (to ensure baseline stability).
2.  **System Suitability (SSS):** 3 injections.
3.  **Sample 1 (Batch GLUC-2025-XXX):** 2 injections.
4.  **Sample 2 (Batch GLUC-2025-XXY):** 2 injections.
5.  **Bracketing Standard (SSS):** 1 injection every 10 samples.
6.  **Final Blank:** 1 injection.

#### 7.3 Integration Parameters
Integration is performed using OpenLab CDS or Empower 3 software.
*   **Integration Method:** Tangential skim for HMWS if poorly resolved; drop-line for well-resolved peaks.
*   **Inhibit Integration:** 0 to 5 minutes (injection void).
*   **Peak Width:** 0.2 min.
*   **Threshold:** 0.05 mAU.

### 8.0 CALCULATIONS AND DATA ANALYSIS

#### 8.1 Percentage Recovery and Purity
The purity of Glucogen-XR is expressed as the Area Percentage (%) of the Main Peak relative to the Total Peak Area.

$$ \% \text{Monomer} = \left( \frac{\text{Area}_{\text{Monomer}}}{\sum \text{Area}_{\text{All Peaks}}} \right) \times 100 $$

$$ \% \text{HMWS} = \left( \frac{\sum \text{Area}_{\text{HMWS Peaks}}}{\sum \text{Area}_{\text{All Peaks}}} \right) \times 100 $$

#### 8.2 Resolution (R)
The resolution between the HMWS (Dimer) and the Main Peak is calculated using the USP formula:

$$ R = \frac{2(t_{R2} - t_{R1})}{W_1 + W_2} $$

Where:
*   $t_{R1}, t_{R2}$ = Retention times of the two peaks.
*   $W_1, W_2$ = Peak widths at the baseline.

### 9.0 SYSTEM SUITABILITY CRITERIA
The run is considered valid only if the following criteria are met in the SSS injections:

| Parameter | Acceptance Criteria |
| :--- | :--- |
| **Tailing Factor (Main Peak)** | 0.8 – 1.5 |
| **Relative Standard Deviation (RSD) - Area** | ≤ 2.0% (n=3) |
| **RSD - Retention Time** | ≤ 1.0% (n=3) |
| **Resolution (Dimer/Monomer)** | ≥ 1.8 |
| **Theoretical Plates (N)** | > 5000 |

### 10.0 REPRESENTATIVE DATA FROM BATCH RELEASE (GLUC-2025 SERIES)

The following table summarizes the SEC results for recent Glucogen-XR Drug Substance batches manufactured at the South San Francisco facility.

**Table 10.1: SEC Purity Data for Glucogen-XR DS Batches**

| Batch Number | Mfg Date | Monomer (%) | Total HMWS (%) | LMWS (%) | Retention Time (min) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 98.42 | 1.45 | 0.13 | 18.24 |
| **GLUC-2025-002** | 19-JAN-2025 | 98.55 | 1.30 | 0.15 | 18.22 |
| **GLUC-2025-003** | 26-JAN-2025 | 97.98 | 1.82 | 0.20 | 18.25 |
| **GLUC-2025-004** | 02-FEB-2025 | 98.11 | 1.74 | 0.15 | 18.23 |
| **GLUC-2025-005** | 09-FEB-2025 | 98.60 | 1.25 | 0.15 | 18.24 |
| **GLUC-2025-006** | 16-FEB-2025 | 98.33 | 1.52 | 0.15 | 18.26 |

### 11.0 METHOD VALIDATION SUMMARY (Q2R1)

#### 11.1 Specificity
Specificity was demonstrated by analyzing the formulation buffer (placebo) and degraded samples. Forced degradation (40°C for 14 days) showed a significant increase in HMWS 2 (dimer) and the appearance of HMWS 1 (multimer), with no interference from the buffer matrix at the retention time of the monomer.

#### 11.2 Linearity
Linearity was established over the range of 0.5 mg/mL to 5.0 mg/mL (25% to 250% of nominal concentration).
*   **Correlation Coefficient (R²):** 0.9998
*   **Y-Intercept:** < 1% of nominal response.

#### 11.3 Precision
*   **Repeatability (Intra-day):** Six replicates of GLUC-2025-001 showed an RSD of 0.12% for % Monomer.
*   **Intermediate Precision (Inter-day):** Analysis performed by two different analysts over three days resulted in a cumulative RSD of 0.35%.

#### 11.4 Sensitivity (LOD/LOQ)
*   **Limit of Detection (LOD):** 0.01% (relative to 2.0 mg/mL load).
*   **Limit of Quantitation (LOQ):** 0.05% (relative to 2.0 mg/mL load).

### 12.0 ROBUSTNESS PARAMETERS
The following parameters were varied to assess method robustness:
1.  **Flow Rate:** 0.45 mL/min to 0.55 mL/min (± 10%).
2.  **Mobile Phase pH:** 6.6 to 7.0 (± 0.2 units).
3.  **Ionic Strength (NaCl):** 180 mM to 220 mM.
4.  **Column Temperature:** 22°C to 28°C.

In all cases, the resolution between the dimer and monomer remained > 1.6, and the % Monomer result varied by < 0.2%.

### 13.0 FORCED DEGRADATION AND STABILITY INDICATING PROPERTIES
To confirm the method is stability-indicating, Glucogen-XR DS (Batch GLUC-2025-001) was subjected to:
*   **Thermal Stress:** 40°C for 72 hours. Result: HMWS increased from 1.45% to 4.88%.
*   **Acidic Stress:** 0.1N HCl for 2 hours. Result: Increase in LMWS (fragments) to 2.30%.
*   **Oxidative Stress:** 0.3% H2O2 for 4 hours. Result: Shift in monomer RT but clear resolution from aggregates.

### 14.0 CONCLUSION
The SEC-HPLC method described herein is highly reproducible, robust, and sensitive for the detection of aggregates in Glucogen-XR. It is the primary method for the control of HMWS in both drug substance release and long-term stability programs, ensuring the safety and efficacy of the GLP-1 receptor agonist produced by Google Health Sciences.

---
**END OF SECTION 3.2.S.4.2 (SEC for Aggregates)**
*Confidential - Google Health Sciences Internal Regulatory Document*

---

## RP-HPLC for Related Substances

# MODULE 3: QUALITY (QU)
## 3.2.S DRUG SUBSTANCE (NAME, MANUFACTURER)
### 3.2.S.4 Control of Drug Substance
#### 3.2.S.4.2 Analytical Procedures
---

### **SECTION 3.2.S.4.2.X: RP-HPLC FOR RELATED SUBSTANCES (GLUCOGEN-XR)**

#### **1.0 Introduction and Scope**
This document provides the exhaustive analytical procedure for the determination of related substances, product-related impurities, and degradation products in Glucogen-XR (glucapeptide extended-release) drug substance using Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC). 

Glucogen-XR is a complex 31-amino acid peptide analogue produced via recombinant DNA technology in the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line. Due to the inherent nature of peptide synthesis and post-translational modification, the monitoring of deamidated, oxidized, acetylated, and truncated forms is critical to ensuring the safety, potency, and immunogenicity profile of the drug substance.

This method is validated in accordance with **ICH Q2(R1)** and complies with the requirements of **USP <621>** (Chromatography) and **USP <1225>** (Validation of Compendial Procedures).

---

#### **2.0 Scientific Principle**
The separation of Glucogen-XR from its related substances is achieved through gradient elution reversed-phase chromatography. The method utilizes a C18 stationary phase with high-density bonding and end-capping to minimize secondary interactions with silanol groups. 

The primary separation mechanism relies on the differential hydrophobic interactions between the peptide side chains and the stationary phase. Structural modifications—such as the conversion of Asparagine to Aspartic Acid (Deamidation) or Methionine to Methionine Sulfoxide (Oxidation)—alter the local hydrophobicity, allowing for baseline resolution of impurities. Detection is performed via UV absorbance at 214 nm, the wavelength corresponding to the peptide bond (n → π* transition), ensuring high sensitivity for all peptide-related species.

---

#### **3.0 Equipment and Instrumentation**
All analytical activities must be performed on qualified and calibrated systems.

| Equipment ID | Description | Specification/Requirement |
| :--- | :--- | :--- |
| **GHS-HPLC-SYS-01/02** | UHPLC/HPLC System | Agilent 1290 Infinity II or Waters Acquity H-Class |
| **DET-UV-004** | UV/Vis or PDA Detector | 190–600 nm range; Noise < ±0.5 x 10⁻⁵ AU |
| **COL-RP-099** | Analytical Column | C18, 2.1 x 150 mm, 1.7 µm (or 3.5 µm for HPLC) |
| **THERM-04** | Column Oven | Precise control at 45.0°C ± 0.5°C |
| **BAL-009** | Analytical Balance | Mettler Toledo (d = 0.01 mg) |
| **PH-012** | pH Meter | Thermo Scientific Orion (calibrated daily) |

---

#### **4.0 Reagents and Reference Standards**

##### **4.1 Reagents and Solvents**
1.  **Water (H₂O):** HPLC grade or Milli-Q ultrapure (18.2 MΩ·cm).
2.  **Acetonitrile (ACN):** Gradient Grade, LC-MS quality (e.g., Fisher Optima).
3.  **Trifluoroacetic Acid (TFA):** High purity, ≥99.9% (Sequanal Grade).
4.  **Phosphoric Acid (H₃PO₄):** 85% A.R. Grade.
5.  **Sodium Perchlorate (NaClO₄):** Monohydrate, Crystal, ACS Grade.

##### **4.2 Reference Materials**
*   **Glucogen-XR Primary Reference Standard (PRS):** Batch #GHS-PRS-2024-01 (Stored at -70°C).
*   **Glucogen-XR Working Reference Standard (WRS):** Batch #GHS-WRS-2025-02.
*   **System Suitability/Resolution Mix:** Contains Glucogen-XR, [Asp³]Glucogen-XR (Deamidated), and [Met(O)¹⁴]Glucogen-XR (Oxidized).

---

#### **5.0 Solution Preparation**

##### **5.1 Mobile Phase Preparation**
**Mobile Phase A (0.1% TFA in Water/ACN 95:5 v/v):**
1. Measure 950 mL of Ultrapure Water into a 1 L glass reservoir.
2. Add 50 mL of Acetonitrile.
3. Add 1.0 mL of Trifluoroacetic Acid (TFA) via a glass volumetric pipette.
4. Degas via sonication for 10 minutes or online degassing.

**Mobile Phase B (0.085% TFA in ACN/Water 95:5 v/v):**
1. Measure 950 mL of Acetonitrile into a 1 L glass reservoir.
2. Add 50 mL of Ultrapure Water.
3. Add 0.85 mL of Trifluoroacetic Acid (TFA).
4. Degas via sonication for 10 minutes.

##### **5.2 Sample and Standard Diluent**
*   **Diluent:** 20 mM Phosphate Buffer, pH 7.0 : Acetonitrile (90:10 v/v).

##### **5.3 Reference Standard Preparation (0.5 mg/mL)**
1. Weigh approximately 5.0 mg of Glucogen-XR Reference Standard into a 10 mL volumetric flask.
2. Dissolve in 7 mL of diluent.
3. Sonicate for 2 minutes in ice-cold water.
4. Dilute to volume with diluent and mix thoroughly.

##### **5.4 Test Sample Preparation (0.5 mg/mL)**
*Note: Samples must be prepared in duplicate.*
1. Aliquot drug substance (GLUC-2025-XXX) to achieve a final concentration of 0.5 mg/mL.
2. If the drug substance is frozen, thaw at 2-8°C and mix gently by inversion.
3. Dilute with the appropriate volume of diluent.

---

#### **6.0 Chromatographic Conditions**

The following parameters are optimized for the separation of closely related peptide species.

| Parameter | Setting |
| :--- | :--- |
| **Column** | C18 (1.7 µm, 2.1 x 150 mm) |
| **Flow Rate** | 0.3 mL/min |
| **Detection Wavelength** | 214 nm (Bandwidth 4 nm) |
| **Reference Wavelength** | 360 nm (Bandwidth 10 nm) |
| **Injection Volume** | 10 µL |
| **Column Temperature** | 45.0°C |
| **Autosampler Temp** | 5.0°C |
| **Run Time** | 75 minutes |

**Gradient Program:**
| Time (min) | % Mobile Phase A | % Mobile Phase B | Curve Profile |
| :--- | :--- | :--- | :--- |
| 0.0 | 80 | 20 | Linear |
| 5.0 | 75 | 25 | Linear |
| 45.0 | 60 | 40 | Linear |
| 55.0 | 20 | 80 | Linear |
| 60.0 | 20 | 80 | Isocratic |
| 62.0 | 80 | 20 | Linear |
| 75.0 | 80 | 20 | Re-equilibration |

---

#### **7.0 System Suitability Criteria**
Before analysis of the test samples, the following criteria must be met:

1.  **Tailing Factor ($T_f$):** For the Glucogen-XR main peak in the WRS injection, $0.8 \leq T_f \leq 1.5$.
2.  **Theoretical Plates ($N$):** > 50,000 for the main peak.
3.  **Resolution ($R_s$):** Between Glucogen-XR and the nearest impurity ([Asp³]-impurity) must be $\geq 1.5$.
4.  **Relative Standard Deviation (RSD):** $\leq 2.0\%$ for the peak area of Glucogen-XR in 5 replicate injections of WRS.
5.  **Blank Interference:** No peaks in the blank chromatogram at the retention time of the main peak or known impurities exceeding 0.05% area.

---

#### **8.0 Peak Identification and Integration**

##### **8.1 Known Impurities Table**
Impurity identification is based on Relative Retention Time (RRT) against the main peak (approximate RT = 32.5 min).

| Impurity Name | RRT | Origin/Type | Specification Limit |
| :--- | :--- | :--- | :--- |
| **Oxidized Glucogen-XR** | 0.82 | Process/Degradant | ≤ 0.5% |
| **Deamidated (Asn²⁸)** | 0.94 | Degradant | ≤ 1.0% |
| **Glucogen-XR (Main)** | 1.00 | API | N/A |
| **D-His¹ Derivative** | 1.08 | Process | ≤ 0.3% |
| **Acetylated Form** | 1.15 | Process | ≤ 0.2% |
| **Trifluoroacetyl-adduct** | 1.25 | Manufacturing | ≤ 0.15% |
| **Individual Unspecified** | Variable | N/A | ≤ 0.10% |
| **Total Impurities** | N/A | Sum of all | ≤ 3.0% |

---

#### **9.0 Calculations**

##### **9.1 Percent (%) Related Substance**
The percentage of each individual related substance and the total impurities are calculated using the area normalization method (Area%):

$$\% \text{Impurity}_i = \left( \frac{A_i}{\sum A_{\text{all peaks}}} \right) \times 100$$

Where:
*   $A_i$ = Area of the individual impurity peak.
*   $\sum A_{\text{all peaks}}$ = Sum of the areas of all peaks in the chromatogram (excluding blank-related peaks).

##### **9.2 Correction Factors**
Based on Relative Response Factor (RRF) studies (Ref: Validation Report V-2024-GHS-009), the RRF for all known impurities is $1.00 \pm 0.05$. Therefore, no correction factors are applied for the calculation of % Area for documented related substances.

---

#### **10.0 Representative Data: Batch Analysis (GLUC-2025-001 to 005)**

The following table summarizes the purity profile for five (5) consecutive validation batches of Glucogen-XR Drug Substance.

| Batch Number | Mfg Date | Main Peak (%) | Total Oxidized (%) | Total Deamidated (%) | Max Unspecified (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 98.85 | 0.21 | 0.45 | 0.06 | 1.15 |
| **GLUC-2025-002** | 20-JAN-2025 | 98.92 | 0.18 | 0.42 | 0.04 | 1.08 |
| **GLUC-2025-003** | 02-FEB-2025 | 98.70 | 0.25 | 0.51 | 0.07 | 1.30 |
| **GLUC-2025-004** | 15-FEB-2025 | 99.01 | 0.15 | 0.38 | 0.05 | 0.99 |
| **GLUC-2025-005** | 01-MAR-2025 | 98.88 | 0.20 | 0.44 | 0.06 | 1.12 |
| **Mean** | - | **98.87** | **0.20** | **0.44** | **0.06** | **1.13** |
| **Std Dev** | - | **0.11** | **0.04** | **0.05** | **0.01** | **0.11** |

---

#### **11.0 Method Robustness Parameters**
Robustness was evaluated by deliberately varying chromatographic conditions. Results remained within the system suitability criteria under the following variations:

*   **Flow Rate:** 0.28 mL/min to 0.32 mL/min.
*   **Column Temp:** 43.0°C to 47.0°C.
*   **Mobile Phase pH:** ± 0.2 units.
*   **ACN Percentage:** ± 2% absolute.

---

#### **12.0 References**
1.  **ICH Q3A(R2):** Impurities in New Drug Substances.
2.  **USP <621>:** Chromatography.
3.  **GHS-SOP-QC-4491:** Operation of Agilent 1290 UHPLC Systems.
4.  **Google Health Sciences Technical Report TR-2024-08:** Forced Degradation Profile of Glucogen-XR.

---
**END OF SECTION**

---

## HCP ELISA

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4.2 ANALYTICAL PROCEDURES
### SUBSECTION: HOST CELL PROTEIN (HCP) QUANTITATION BY ENZYME-LINKED IMMUNOSORBENT ASSAY (ELISA)

---

#### 1.0 INTRODUCTION AND SCOPE
This document defines the analytical procedure and validation parameters for the quantitation of residual Host Cell Protein (HCP) in **Glucogen-XR (glucapeptide extended-release)** drug substance. Glucogen-XR is a recombinant GLP-1 receptor agonist produced using a proprietary **CHO-K1 GS knockout derivative (GHS-CHO-001)** cell line. 

Given the risk of immunogenicity and potential impact on product stability, the removal of process-related impurities—specifically HCPs—is a critical quality attribute (CQA). This procedure utilizes a sandwich Enzyme-Linked Immunosorbent Assay (ELISA) format employing affinity-purified polyclonal antibodies generated against a mock-production lysate from the non-transfected GHS-CHO-001 host cell line.

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
This procedure and its validation have been developed in accordance with the following regulatory frameworks:
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1132>:** Residual Host Cell Protein Measurement in Biopharmaceuticals.
*   **USP <1225>:** Validation of Compendial Procedures.
*   **FDA Guidance for Industry:** Immunogenicity Assessment for Therapeutic Protein Products (2019).

#### 3.0 ANALYTICAL PRINCIPLE
The Glucogen-XR HCP ELISA is a multi-antigen "sandwich" immunoassay. 
1.  **Capture:** Affinity-purified goat anti-CHO HCP antibodies are immobilized onto the surface of a 96-well microtiter plate.
2.  **Binding:** Standards, controls, and Glucogen-XR samples are added to the wells. HCPs present in the sample bind to the immobilized antibodies.
3.  **Detection:** After washing to remove unbound material, a horseradish peroxidase (HRP)-conjugated goat anti-CHO HCP antibody (the "detection antibody") is added, which binds to the captured HCPs.
4.  **Signal Generation:** After a second wash step, the TMB (3,3',5,5'-tetramethylbenzidine) substrate is added. The HRP catalyzes the conversion of TMB to a blue product, which turns yellow upon the addition of a sulfuric acid stop solution.
5.  **Quantitation:** The optical density (OD) is measured at 450 nm (with a reference wavelength of 650 nm). The concentration of HCP in the samples is determined by interpolation from a 4-parameter logistic (4-PL) standard curve.

#### 4.0 REAGENTS AND MATERIALS
All reagents are sourced from qualified vendors and are subject to internal quality control (IQC) upon receipt.

| Material ID | Description | Storage Conditions | Manufacturer |
| :--- | :--- | :--- | :--- |
| **GHS-HCP-STD-01** | HCP Standard (GHS-CHO-001 derived) | -80°C ± 5°C | Google Health Sciences |
| **GHS-HCP-AB-C** | Capture Ab: Goat anti-CHO HCP | -20°C ± 2°C | Google Health Sciences |
| **GHS-HCP-AB-D** | Detection Ab: Goat anti-CHO HCP-HRP | 2-8°C (Dark) | Google Health Sciences |
| **TMB-ULT-500** | TMB Substrate Solution | 2-8°C (Dark) | ThermoFisher / Equivalent |
| **STP-H2SO4-01** | Stop Solution (1N H2SO4) | 15-25°C | Sigma-Aldrich |
| **PBS-BT-05** | Blocking Buffer (PBS + 1% BSA + 0.05% Tween-20) | 2-8°C | Internal Prep |
| **WASH-BST-20** | Wash Buffer (20x concentrate) | 15-25°C | Internal Prep |
| **PLATE-MAX-96** | High-binding 96-well Microplate | 15-25°C | Corning Costar 3590 |

#### 5.0 EQUIPMENT SPECIFICATIONS
*   **Microplate Reader:** Molecular Devices SpectraMax i3x (Software: SoftMax Pro v7.1).
*   **Automated Plate Washer:** BioTek ELx405.
*   **Incubator:** Thermomixer C with MTP block (set to 25°C ± 2°C).
*   **Pipettes:** Rainin XLS+ Multichannel and Single channel (calibrated semi-annually).

#### 6.0 DETAILED OPERATIONAL PROTOCOL

##### 6.1 Preparation of Standard Curve
The HCP Standard (GHS-HCP-STD-01) is thawed on ice. A master stock of 1,000 ng/mL is prepared in Sample Diluent. The standard curve is then prepared via serial dilution.

| Standard Point | Concentration (ng/mL) | Dilution Scheme |
| :--- | :--- | :--- |
| S7 (High) | 200.0 | 200 µL Stock + 800 µL Diluent |
| S6 | 100.0 | 500 µL S7 + 500 µL Diluent |
| S5 | 50.0 | 500 µL S6 + 500 µL Diluent |
| S4 | 25.0 | 500 µL S5 + 500 µL Diluent |
| S3 | 12.5 | 500 µL S4 + 500 µL Diluent |
| S2 | 6.25 | 500 µL S3 + 500 µL Diluent |
| S1 (Low) | 3.125 | 500 µL S2 + 500 µL Diluent |
| S0 (Blank) | 0.0 | 1000 µL Diluent |

##### 6.2 Sample Preparation
Glucogen-XR samples (Bulk Drug Substance) are typically tested at a starting concentration of 100 mg/mL. Samples must be diluted into the linear range of the assay (typically 1:100 to 1:1,000).
1.  **Dilution A (1:10):** 100 µL Sample + 900 µL Diluent.
2.  **Dilution B (1:100):** 100 µL Dilution A + 900 µL Diluent.
3.  **Dilution C (1:500):** 200 µL Dilution B + 800 µL Diluent.

##### 6.3 Assay Procedure
1.  **Coating:** Coat the 96-well plate with 100 µL/well of Capture Antibody (GHS-HCP-AB-C) diluted to 2 µg/mL in Carbonate-Bicarbonate buffer (pH 9.6). Incubate overnight (12–18 hours) at 2-8°C.
2.  **Blocking:** Wash plate 3x with Wash Buffer. Add 200 µL/well of Blocking Buffer. Incubate for 1 hour at 25°C with orbital shaking at 400 rpm.
3.  **Sample Loading:** Wash plate 3x. Add 100 µL of Standards, Controls, and Samples in triplicate. Incubate for 2 hours at 25°C (400 rpm).
4.  **Detection:** Wash plate 5x. Add 100 µL/well of HRP-conjugated Detection Antibody (diluted 1:10,000). Incubate for 1 hour at 25°C (400 rpm).
5.  **Substrate:** Wash plate 5x. Add 100 µL/well of TMB Substrate. Incubate in the dark for 15 minutes.
6.  **Stop:** Add 100 µL/well of 1N H2SO4.
7.  **Read:** Measure Absorbance at 450 nm (primary) and 650 nm (background subtraction).

#### 7.0 DATA ANALYSIS AND CALCULATIONS
The software (SoftMax Pro) utilizes a 4-Parameter Logistic (4-PL) curve fit:

$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$

Where:
*   $y$ = Optical Density (OD)
*   $x$ = Concentration (ng/mL)
*   $A$ = Asymptotic Min (Bottom)
*   $B$ = Hill Slope (Sensitivity)
*   $C$ = Inflection Point (ED50)
*   $D$ = Asymptotic Max (Top)

**Final Result Calculation:**
The HCP concentration in parts per million (ppm) relative to the drug substance (DS) concentration is calculated as:
$$\text{HCP (ppm)} = \frac{\text{Interpolated HCP (ng/mL)} \times \text{Dilution Factor}}{\text{Sample Concentration (mg/mL)}}$$

#### 8.0 SYSTEM SUITABILITY CRITERIA (SST)
For a run to be considered valid, the following criteria must be met:
1.  **Correlation Coefficient ($R^2$):** $\ge 0.990$.
2.  **Precision:** CV (%) of OD for triplicate standards and samples must be $\le 15.0\%$.
3.  **Accuracy:** Recovery of the Quality Control (QC) samples (Low, Mid, High) must be within 80%–120% of target.
4.  **Sensitivity:** S1 (3.125 ng/mL) OD must be at least 2x the S0 (Blank) OD.

#### 9.0 REPRESENTATIVE BATCH DATA (GLUC-2025 SERIES)
The following table summarizes HCP results for recent clinical production batches of Glucogen-XR.

| Batch Number | Date of Analysis | DS Conc. (mg/mL) | Mean HCP (ng/mL) | HCP (ppm) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 102.4 | 124.5 | 1.22 | PASS |
| GLUC-2025-002 | 19-JAN-2025 | 99.8 | 98.2 | 0.98 | PASS |
| GLUC-2025-003 | 02-FEB-2025 | 100.5 | 156.8 | 1.56 | PASS |
| GLUC-2025-004 | 14-FEB-2025 | 101.1 | 112.1 | 1.11 | PASS |
| GLUC-2025-005 | 01-MAR-2025 | 103.0 | 85.4 | 0.83 | PASS |

*Note: Internal Specification for DS Release is $\le 20$ ppm.*

#### 10.0 VALIDATION SUMMARY (METHOD GHS-ANA-HCP-01)

##### 10.1 Specificity and Dilutional Linearity
Specificity was confirmed by demonstrating that the Glucogen-XR protein (the API) does not interfere with HCP detection. Dilutional linearity was assessed by spiking high levels of HCP into 100 mg/mL DS and performing serial dilutions.

| Dilution | Measured HCP (ng/mL) | Recovery (%) |
| :--- | :--- | :--- |
| 1:100 | 185.4 | 102.3 |
| 1:200 | 92.1 | 98.7 |
| 1:400 | 44.8 | 95.1 |
| 1:800 | 22.9 | 101.5 |

##### 10.2 Sensitivity (LOD/LOQ)
*   **Limit of Detection (LOD):** 0.75 ng/mL (defined as 3x SD of Blank).
*   **Limit of Quantitation (LOQ):** 3.125 ng/mL (Lowest standard with CV < 20% and Recovery 80-120%).

##### 10.3 Accuracy (Spike Recovery)
HCP was spiked into drug substance at three levels (10, 50, and 150 ng/mL).

| Spike Level | Expected (ng/mL) | Observed (ng/mL) | % Recovery |
| :--- | :--- | :--- | :--- |
| Low | 10.0 | 9.4 | 94.0 |
| Mid | 50.0 | 52.3 | 104.6 |
| High | 150.0 | 148.2 | 98.8 |

#### 11.0 ANTIBODY COVERAGE ANALYSIS (2D-DIGE)
Per USP <1132>, the coverage of the polyclonal antibody was evaluated using 2D Differential In-Gel Electrophoresis (2D-DIGE).
*   **Methodology:** GHS-CHO-001 mock lysate was separated by 2D electrophoresis (pH 3-10). Proteins were transferred to a nitrocellulose membrane.
*   **Result:** The anti-CHO HCP antibody recognized 87.4% of the protein spots visible by silver staining. This exceeds the industry standard of >60% coverage for "comprehensive" HCP assays.

#### 12.0 CONCLUSION
The HCP ELISA for Glucogen-XR is a robust, sensitive, and specific method capable of detecting low-level host cell protein impurities in the Drug Substance. The method is fully validated for use in release and stability testing, ensuring the safety and purity of Glucogen-XR produced at the Google Health Sciences facility.

---
**END OF SECTION**

---

## Residual DNA by qPCR

### 3.2.S.4.2 ANALYTICAL PROCEDURES
#### SUBSECTION: 3.2.S.4.2.X RESIDUAL HOST CELL DNA BY QUANTITATIVE POLYMERASE CHAIN REACTION (qPCR)

---

### 1.0 SCOPE AND OBJECTIVE
This analytical procedure describes the quantitative determination of residual host cell DNA (hcDNA) in Glucogen-XR (glucapeptide extended-release) drug substance (DS) and drug product (DP) intermediate stages. Given that Glucogen-XR is manufactured utilizing a proprietary Chinese Hamster Ovary (CHO-K1 GS knockout derivative, GHS-CHO-001) cell line, the removal of process-related impurities—specifically genomic DNA—is a critical quality attribute (CQA) to ensure patient safety, mitigate potential oncogenicity, and comply with regulatory expectations set forth in **ICH Q3A(R2)**, **ICH Q6B**, and the **FDA Guidance for Industry: Characterization and Qualification of Cell Substrates and Other Biological Materials Used in the Production of Viral Vaccines for Infectious Disease Indications**.

The objective is to ensure that the residual hcDNA levels remain consistently below the specification limit of **≤ 10 ng/dose**, as recommended by the World Health Organization (WHO) and the FDA for parenteral biologics.

---

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
This method has been developed and validated in accordance with the following standards:
*   **USP <1130>** *Nucleic Acid-Based Techniques – Approaches for Real-Time Polymerase Chain Reaction (PCR)*.
*   **USP <507>** *Protein Determination Procedures* (Relevant for matrix interference).
*   **ICH Q2(R1)** *Validation of Analytical Procedures: Text and Methodology*.
*   **Ph. Eur. 2.6.21** *Nucleic Acid Amplification Techniques*.
*   **21 CFR Part 11** *Electronic Records; Electronic Signatures* (Data integrity compliance via the Google Cloud Life Sciences Vertex AI Analysis Suite).

---

### 3.0 PRINCIPLE OF THE METHOD
The procedure utilizes a TaqMan®-based real-time quantitative PCR (qPCR) assay targeting a high-copy-number, highly conserved repetitive sequence within the CHO-K1 genome (Alu-equivalent sequences). 

1.  **Sample Pre-treatment:** To overcome the inhibitory effects of the high-concentration glucapeptide matrix and the extended-release polymer components, samples undergo an automated magnetic bead-based DNA extraction.
2.  **Amplification:** The extracted DNA is subjected to PCR amplification using sequence-specific primers and a dual-labeled fluorescent probe (5’-FAM / 3’-TAMRA or 5’-FAM / 3’-MGB).
3.  **Detection:** During the extension phase, the 5’ to 3’ exonuclease activity of *Taq* DNA polymerase cleaves the probe, separating the reporter dye from the quencher, resulting in a fluorescent signal proportional to the amount of DNA template present.
4.  **Quantitation:** Residual DNA is quantified by comparing the cycle threshold (Ct) values of the samples against a standard curve generated from highly purified GHS-CHO-001 genomic DNA.

---

### 4.0 REAGENTS, STANDARDS, AND EQUIPMENT

#### 4.1 Reference Materials
| Material Description | Source / Part Number | Lot Number / Identifier | Storage Conditions |
| :--- | :--- | :--- | :--- |
| GHS-CHO-001 Genomic DNA Standard | Google Health Internal Reference | GHS-DNA-STD-2024-04 | -80°C ± 5°C |
| Internal Positive Control (IPC) DNA | Synthetic 500bp Fragment | GHS-IPC-099 | -20°C ± 5°C |
| Nuclease-Free Water (NFW) | Ambion / Invitrogen | AM9932 | 15°C to 30°C |

#### 4.2 Critical Reagents
| Reagent | Manufacturer | Purpose |
| :--- | :--- | :--- |
| ResDNASEQ® CHO DNA Kit | Applied Biosystems | Core Master Mix and Primers |
| Proteinase K (20 mg/mL) | Qiagen | Sample Digestion |
| Prep-RT™ Nucleic Acid Isolation Kit | Thermo Fisher | Magnetic Bead Extraction |
| Glycogen (Blue) | Roche | Co-precipitant |

#### 4.3 Equipment Specifications
| Equipment Name | Model/Manufacturer | Asset ID |
| :--- | :--- | :--- |
| Real-Time PCR System | Applied Biosystems QuantStudio 7 Flex | EQ-GHS-PCR-09 |
| Automated Liquid Handler | Hamilton Microlab STAR | EQ-GHS-LIQ-02 |
| Automated DNA Extractor | KingFisher Flex | EQ-GHS-KFF-05 |
| Microcentrifuge (Refrigerated) | Eppendorf 5424R | EQ-GHS-CEN-12 |

---

### 5.0 ANALYTICAL PROCEDURE (STEP-BY-STEP)

#### 5.1 Sample Preparation and Pre-treatment
Because Glucogen-XR is an extended-release formulation containing a specialized peptide-polymer complex, the dissociation of DNA from the drug substance matrix is vital.

1.  **Dilution:** Dilute the Drug Substance (DS) samples (GLUC-2025-XXX) to a target protein concentration of 10 mg/mL using DNA Dilution Buffer (PBS, pH 7.4, DNA-free).
2.  **Digestion:**
    *   To 200 µL of sample, add 20 µL of Proteinase K.
    *   Add 200 µL of Lysis Buffer (containing SDS and EDTA).
    *   Incubate at 56°C for 60 minutes with shaking at 900 RPM on a thermomixer.
3.  **Extraction (Magnetic Bead Protocol):**
    *   Transfer digested samples to a KingFisher 96-well deep-well plate.
    *   Add 450 µL of Binding Buffer and 20 µL of Magnetic Beads.
    *   Execute the "GHS-GLUC-EXTRACT-01" program (mixing, 3x wash with 70% ethanol, air dry 5 mins).
    *   Elute DNA in 50 µL of Elution Buffer.

#### 5.2 Preparation of the Standard Curve
The standard curve is prepared by serial dilution of the GHS-CHO-001 Genomic DNA Reference Standard.

| Standard Level | Concentration (pg/µL) | Final Amount in Well (pg) | Preparation Step |
| :--- | :--- | :--- | :--- |
| Std 1 | 30,000 | 300,000 | Stock DNA (neat) |
| Std 2 | 3,000 | 30,000 | 1:10 dilution of Std 1 |
| Std 3 | 300 | 3,000 | 1:10 dilution of Std 2 |
| Std 4 | 30 | 300 | 1:10 dilution of Std 3 |
| Std 5 | 3 | 30 | 1:10 dilution of Std 4 |
| Std 6 | 0.3 | 3 | 1:10 dilution of Std 5 |
| Std 7 | 0.03 | 0.3 | 1:10 dilution of Std 6 |

#### 5.3 PCR Setup and Thermal Cycling
The Master Mix is prepared as follows (Calculated for 96 wells + 10% overage):

| Component | Volume per Well (µL) |
| :--- | :--- |
| 2X Environmental Master Mix | 15.0 |
| 10X CHO Primer/Probe Mix | 3.0 |
| Extracted Sample / Standard | 10.0 |
| **Total Volume** | **28.0** |

**Cycling Parameters:**
1.  **UNG Activation:** 50°C for 2 minutes.
2.  **Polymerase Activation:** 95°C for 10 minutes.
3.  **Denaturation:** 95°C for 15 seconds (40 cycles).
4.  **Anneal/Extend:** 60°C for 1 minute (40 cycles).

---

### 6.0 CALCULATION AND STATISTICAL EVALUATION
The QuantStudio™ software (v1.3) utilizes the $C_t$ (Cycle Threshold) method. The unknown concentration of DNA ($X$) is determined via the regression equation:

$$C_t = m \cdot \log_{10}(X) + b$$

Where:
*   $m$ = Slope of the standard curve.
*   $b$ = Y-intercept.
*   $X$ = DNA concentration (pg/rxn).

**Final Calculation for Residual DNA in DS (pg/mg):**
$$\text{Residual DNA (pg/mg)} = \frac{(C \times DF \times V_{elution})}{M_{protein}}$$

Where:
*   $C$ = Concentration from standard curve (pg/µL).
*   $DF$ = Dilution Factor.
*   $V_{elution}$ = Total volume of eluted DNA (µL).
*   $M_{protein}$ = Total mass of protein in the starting sample (mg).

---

### 7.0 HISTORICAL BATCH RELEASE DATA (REPRESENTATIVE SAMPLES)
The following table summarizes the residual DNA results for Glucogen-XR Drug Substance batches produced in 2025 at the South San Francisco facility.

| Batch Number | Date of Analysis | Sample Mass (mg) | Mean Ct Value | Calc. DNA (pg/well) | Final Result (pg/mg) | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 15-JAN-2025 | 10.2 | 34.21 | 0.88 | 4.31 | 98.4 |
| GLUC-2025-002 | 22-JAN-2025 | 10.5 | 34.85 | 0.54 | 2.57 | 101.2 |
| GLUC-2025-003 | 05-FEB-2025 | 9.9 | 33.90 | 1.12 | 5.66 | 94.8 |
| GLUC-2025-004 | 19-FEB-2025 | 10.1 | 35.12 | 0.41 | 2.03 | 97.5 |
| GLUC-2025-005 | 04-MAR-2025 | 10.3 | 34.05 | 0.95 | 4.61 | 99.1 |

---

### 8.0 SYSTEM SUITABILITY CRITERIA
For the analysis to be considered valid, the following criteria must be met:

1.  **Standard Curve R² Value:** $\geq 0.99$.
2.  **PCR Efficiency:** 90% to 110% (Slope between -3.1 and -3.6).
3.  **No Template Control (NTC):** No amplification or $C_t > 38$.
4.  **Standard Deviation (Triplicates):** $C_t$ SD $\leq 0.3$.
5.  **Spike Recovery (IPC):** 70% to 130%.

---

### 9.0 METHOD VALIDATION SUMMARY (ICH Q2R1)

#### 9.1 Specificity
Specificity was demonstrated by testing the assay against DNA from other species (*E. coli*, Human, Bovine) and the Glucogen-XR peptide itself. No cross-reactivity was observed at levels up to 100 ng/well of non-target DNA.

#### 9.2 Limit of Detection (LOD) and Limit of Quantitation (LOQ)
*   **LOD:** Determined to be 0.01 pg/well (0.1 pg/mg DS), where the signal is detectable in 100% of replicates ($n=10$).
*   **LOQ:** Established as 0.03 pg/well (0.3 pg/mg DS) with an RSD of < 15%.

#### 9.3 Linearity and Range
Linearity was confirmed from 0.03 pg to 30,000 pg per reaction.
*   Slope: -3.34
*   $R^2$: 0.9994
*   Y-intercept: 38.2

#### 9.4 Accuracy (Recovery)
Accuracy was evaluated by spiking known amounts of GHS-CHO-001 DNA into three different lots of Glucogen-XR Drug Substance.

| Spike Level | Target (pg/mg) | Observed (pg/mg) | % Recovery |
| :--- | :--- | :--- | :--- |
| Low | 1.0 | 0.94 | 94.0% |
| Mid | 10.0 | 10.45 | 104.5% |
| High | 100.0 | 98.20 | 98.2% |

---

### 10.0 CONCLUSION
The qPCR method for determining residual host cell DNA in Glucogen-XR is highly sensitive, specific, and robust. It provides the necessary resolution to ensure that process-related impurities are controlled within the stringent limits required for a long-term, chronic treatment for Type 2 Diabetes Mellitus. All batch data to date for the 2025 production cycle confirm that the purification process (specifically the Protein A capture and subsequent anion exchange chromatography) effectively reduces hcDNA to levels significantly below the 10 ng/dose regulatory threshold.

---

# Analytical Procedures - Potency

## Cell-Based Potency Assay

# MODULE 3: QUALITY (3.2.S.4.2 ANALYTICAL PROCEDURES)
## SECTION: 3.2.S.4.2.3 POTENCY – CELL-BASED BIOLOGICAL ASSAY

### 1.0 INTRODUCTION AND SCOPE
The determination of biological potency for **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line, is a critical quality attribute (CQA). Given the therapeutic mechanism of action (MoA) involving high-affinity binding to the Glucagon-Like Peptide-1 Receptor (GLP-1R) and subsequent activation of the adenylate cyclase pathway, Google Health Sciences has implemented a robust, quantitative cell-based reporter gene assay (RGA) for release and stability testing.

This procedure, identified internally as **SOP-GHS-QC-7742 (Potency of Glucogen-XR by CRE-Luciferase Reporter Assay)**, measures the biological activity of the drug substance by quantifying the induction of cyclic adenosine monophosphate (cAMP)-mediated signaling.

---

### 2.0 METHODOLOGY OVERVIEW
The assay utilizes a genetically engineered HEK293 cell line stably transfected with two constructs:
1.  **Human GLP-1R:** Full-length human GLP-1 receptor.
2.  **CRE-Luciferase Reporter:** A firefly luciferase gene under the transcriptional control of multiple cAMP Response Elements (CRE).

Upon binding of Glucogen-XR to the GLP-1R, a G-protein mediated increase in intracellular cAMP occurs. This activates Protein Kinase A (PKA), leading to the phosphorylation of CREB (CRE-binding protein), which binds to the CRE promoter, driving the expression of Luciferase. The resulting luminescence, measured after the addition of a substrate (Bio-Glo™), is proportional to the concentration and biological activity of Glucogen-XR.

---

### 3.0 REGULATORY COMPLIANCE AND GUIDELINES
This analytical procedure has been developed and validated in accordance with the following regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **USP <1032>:** Design and Development of Biological Assays.
*   **USP <1033>:** Biological Assay Validation.
*   **USP <1034>:** Analysis of Biological Assays.
*   **FDA Guidance for Industry:** Bioanalytical Method Validation (2018).

---

### 4.0 REAGENTS, SOLUTIONS, AND MATERIALS

#### 4.1 Critical Biological Reagents
| Reagent ID | Description | Source/Manufacturer | Storage |
| :--- | :--- | :--- | :--- |
| **GHS-CB-293-GLP1** | HEK293/GLP-1R/CRE-Luc Cell Bank | GHS Internal (MCB/WCB) | Vapor Phase LN2 |
| **GHS-RS-GLUC-001** | Glucogen-XR Reference Standard | GHS Manufacturing | -80°C ± 5°C |
| **FBS-0112** | Fetal Bovine Serum (Qualified Lot) | ThermoFisher Scientific | -20°C |
| **DMEM-F12** | Culture Medium Base | Sigma-Aldrich | 2-8°C |
| **LUC-SUB-50** | Bio-Glo™ Luciferase Assay System | Promega | -20°C |

#### 4.2 Reagent Preparation Protocols
**4.2.1 Assay Medium (5% FBS):**
Combine 470 mL of DMEM/F-12, 25 mL of heat-inactivated FBS, and 5 mL of 100x Penicillin-Streptomycin-Glutamine. Filter through a 0.22 µm PES membrane. Stable for 30 days at 2-8°C.

**4.2.2 Glucogen-XR Dilution Buffer:**
Phosphate Buffered Saline (PBS) pH 7.4 supplemented with 0.1% (w/v) Bovine Serum Albumin (BSA) to prevent non-specific adsorption of the peptide to plastic surfaces.

---

### 5.0 INSTRUMENTATION AND SOFTWARE
*   **Luminescence Reader:** SpectraMax® iD5 Multi-Mode Microplate Reader (Molecular Devices).
*   **Software:** SoftMax® Pro 7.1.2 GxP with 4-Parameter Logistic (4-PL) curve fitting capabilities.
*   **Incubator:** Sanyo MCO-19AIC (UV) CO2 Incubator (37°C ± 1°C, 5.0% ± 0.5% CO2).
*   **Automated Cell Counter:** Vi-CELL™ BLT (Beckman Coulter).

---

### 6.0 STEP-BY-STEP OPERATIONAL PROCEDURE

#### 6.1 Cell Preparation and Seeding (Day 0)
1.  Thaw one vial of **GHS-CB-293-GLP1** (approx. 5.0 x 10^6 cells) in a 37°C water bath for 2 minutes.
2.  Transfer cells to 10 mL of pre-warmed Culture Medium. Centrifuge at 200 x g for 5 minutes.
3.  Resuspend in 10 mL Assay Medium. Perform cell count and viability assessment (Viability must be >95%).
4.  Dilute cells to a concentration of $2.0 \times 10^5$ cells/mL.
5.  Using a multichannel pipette, seed 100 µL of cell suspension into each well of a white-walled, clear-bottom 96-well microplate (20,000 cells/well).
6.  Incubate for 20-24 hours at 37°C, 5% CO2 in a humidified atmosphere.

#### 6.2 Reference Standard and Sample Preparation (Day 1)
**6.2.1 Preparation of Working Stock (WS):**
Dilute the Reference Standard (RS) and Test Samples (TS) (e.g., Batch **GLUC-2025-001**) to a starting concentration of 1.0 µg/mL in Dilution Buffer.

**6.2.2 Serial Dilution Scheme:**
Prepare an 11-point serial dilution for both RS and TS in a 96-well deep-well block.
*   **Dilution Factor:** 1:3
*   **Range:** 1000 ng/mL to 0.0169 ng/mL.
*   **Control:** Dilution Buffer only (Blank).

| Dilution Level | Concentration (ng/mL) | Volume of Previous Dilution | Volume of Diluent |
| :--- | :--- | :--- | :--- |
| S1 (Top) | 1000.00 | 100 µL Stock | 900 µL |
| S2 | 333.33 | 300 µL of S1 | 600 µL |
| S3 | 111.11 | 300 µL of S2 | 600 µL |
| S4 | 37.04 | 300 µL of S3 | 600 µL |
| ... | ... | ... | ... |
| S11 | 0.0169 | 300 µL of S10 | 600 µL |

#### 6.3 Sample Addition and Incubation
1.  Remove the 96-well cell plate from the incubator.
2.  Carefully aspirate the culture medium without disturbing the cell monolayer.
3.  Transfer 50 µL of each dilution (RS and TS) from the dilution block to the corresponding wells of the cell plate in triplicate.
4.  Incubate the plate for 6 hours ± 15 minutes at 37°C, 5% CO2.

#### 6.4 Detection (Luciferase Assay)
1.  Equilibrate Bio-Glo™ Reagent to room temperature.
2.  Add 50 µL of Bio-Glo™ Reagent to each well.
3.  Incubate for 10 minutes at room temperature in the dark to allow for cell lysis and signal stabilization.
4.  Measure luminescence (RLU) using the SpectraMax® iD5 (Integration time: 500ms).

---

### 7.0 DATA ANALYSIS AND CALCULATIONS

#### 7.1 Curve Fitting
The mean Relative Light Units (RLU) for each dilution are plotted against the log concentration of Glucogen-XR. The data is fitted using a **4-Parameter Logistic (4-PL) Model**:

$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$

Where:
*   $y$ = Luminescence response (RLU)
*   $x$ = Concentration of Glucogen-XR
*   $A$ = Minimum response (Bottom asymptote)
*   $B$ = Hill Slope (Slope factor)
*   $C$ = $EC_{50}$ (Concentration producing 50% of maximal response)
*   $D$ = Maximum response (Top asymptote)

#### 7.2 Relative Potency Calculation
The potency of the Test Sample is calculated relative to the Reference Standard:

$$\text{Relative Potency} = \frac{EC_{50} (\text{Reference Standard})}{EC_{50} (\text{Test Sample})} \times 100\%$$

---

### 8.0 SYSTEM SUITABILITY AND ACCEPTANCE CRITERIA
For a valid assay run, the following criteria must be met:

| Parameter | Acceptance Criteria |
| :--- | :--- |
| **R² (Reference and Sample)** | $\ge 0.98$ |
| **Signal-to-Noise (S/N) Ratio** | $\ge 10.0$ |
| **Reference $EC_{50}$ Stability** | Within 80-120% of historical mean |
| **Parallelism ($Slope_{Ratio}$)** | $0.80 \le \frac{Slope_{TS}}{Slope_{RS}} \le 1.25$ |
| **Sample Replicate CV%** | $\le 15\%$ |

---

### 9.0 REPRESENTATIVE BATCH DATA (VALIDATION SUMMARY)
The following table provides potency results for representative clinical and process validation batches.

**Table 9.1: Potency Results for Glucogen-XR Drug Substance Batches**
| Batch Number | Date of Manufacture | $EC_{50}$ (ng/mL) | Relative Potency (%) | Result |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 14.2 | 102.5 | Pass |
| **GLUC-2025-002** | 25-JAN-2025 | 15.1 | 96.4 | Pass |
| **GLUC-2025-003** | 08-FEB-2025 | 13.8 | 105.1 | Pass |
| **GLUC-2025-004** | 22-FEB-2025 | 14.5 | 100.2 | Pass |
| **GLUC-2025-005** | 05-MAR-2025 | 14.9 | 97.8 | Pass |

---

### 10.0 METHOD VALIDATION SUMMARY (NON-CONFIDENTIAL)
The assay was validated for:
*   **Accuracy:** Recovery was 94-108% across the range of 50% to 150% of target potency.
*   **Precision:** Intermediate precision (inter-day/inter-analyst) showed a %CV of 6.4%.
*   **Linearity:** $R^2 = 0.998$ over the range of 50-150% potency.
*   **Specificity:** No cross-reactivity observed with native GLP-1 (1-37) or other related peptides (Glucagon, GIP) at 10x concentrations.

---
**Footnotes:**
1. All manufacturing and testing performed at Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA.
2. Statistical analysis performed using SAS® version 9.4.
3. Equipment maintenance records are available upon request during site inspection.

---

## Receptor Binding Assay

# MODULE 3: QUALITY (3.2.S.4.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: ANALYTICAL PROCEDURES – POTENCY (RECEPTOR BINDING ASSAY)

---

### 3.2.S.4.2.1 Introduction to Potency Assessment
The potency of Glucogen-XR (glucapeptide extended-release) is determined through a multi-tiered analytical strategy. Given the mechanism of action (MoA) of Glucogen-XR as a long-acting Glucagon-Like Peptide-1 Receptor (GLP-1R) agonist, the assessment of biological activity is critical for ensuring therapeutic efficacy and batch-to-batch consistency.

The primary potency assay is a **Competitive Radioligand Receptor Binding Assay (RBA)**. This assay measures the affinity ($IC_{50}$ and $K_i$) of Glucogen-XR for the human GLP-1 receptor (hGLP-1R) expressed on a stabilized cell membrane preparation. This section details the methodology, reagents, instrumentation, and statistical models used to quantify the binding potency of Glucogen-XR against a Reference Standard (RS).

---

### 3.2.S.4.2.2 Receptor Binding Assay (RBA) Overview
#### 3.2.S.4.2.2.1 Principle of the Method
The RBA is a displacement assay utilizing $^{125}$I-labeled GLP-1 (7-36) amide as the tracer. Glucogen-XR competes with the radiolabeled ligand for binding sites on membranes derived from the proprietary GHS-CHO-001 cell line, which has been engineered to overexpress the human GLP-1 receptor (hGLP-1R) at high density ($B_{max} \approx 2.5 \text{ pmol/mg protein}$).

Following incubation to reach equilibrium, the membrane-bound ligand is separated from the free ligand via vacuum filtration through a glass fiber filter. The radioactivity captured on the filter is measured using a gamma counter. The reduction in signal is proportional to the concentration and binding affinity of the unlabeled Glucogen-XR.

#### 3.2.S.4.2.2.2 Regulatory Compliance and Guidelines
This procedure has been developed and validated in accordance with the following regulatory frameworks:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1032>:** Design and Development of Biological Assays.
*   **USP <1033>:** Biological Assay Validation.
*   **USP <1034>:** Analysis of Biological Assays.
*   **FDA Guidance for Industry:** Bioanalytical Method Validation (2018).

---

### 3.2.S.4.2.3 Reagents and Materials
The following materials are required for the execution of the Glucogen-XR RBA. All reagents must be of Analytical Grade or higher.

| Reagent Name | Grade/Source | Catalog Number | Storage Conditions |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR Reference Standard** | GHS Internal | RS-GLUC-2024-02 | -80°C |
| **hGLP-1R Membranes (GHS-CHO-001)** | GHS Manufacturing | MEM-GLP1R-09 | Liquid Nitrogen |
| **$^{125}$I-GLP-1 (7-36) amide** | PerkinElmer | NEX308 | 4°C (Lead shielded) |
| **HEPES Buffer (1M)** | Sigma-Aldrich | H3375 | 2-8°C |
| **Magnesium Chloride ($MgCl_2$)** | Sigma-Aldrich | M8266 | RT |
| **EDTA** | Thermo Fisher | 15575020 | RT |
| **Bovine Serum Albumin (BSA), Fraction V** | MilliporeSigma | A2153 | 2-8°C |
| **Bacitracin** | Sigma-Aldrich | B0125 | 2-8°C |
| **Aprotinin** | Sigma-Aldrich | A1153 | 2-8°C |
| **96-well GF/C Filter Plates** | PerkinElmer | 6005174 | RT |
| **MicroScint-20 Cocktail** | PerkinElmer | 6013621 | RT |

---

### 3.2.S.4.2.4 Preparation of Solutions and Buffers

#### 3.2.S.4.2.4.1 Assay Buffer (pH 7.4)
The assay buffer is designed to stabilize the peptide-receptor interaction while minimizing non-specific binding (NSB).
*   **Composition:** 25 mM HEPES, 5 mM $MgCl_2$, 1 mM EDTA, 0.1% (w/v) BSA, 0.1 mg/mL Bacitracin, 100 U/mL Aprotinin.
*   **Preparation:**
    1.  Dissolve 5.96 g HEPES in 800 mL DI water.
    2.  Add 1.02 g $MgCl_2 \cdot 6H_2O$ and 0.37 g EDTA.
    3.  Adjust pH to 7.40 ± 0.05 using 1N NaOH.
    4.  Add 1.0 g BSA and protease inhibitors (Bacitracin/Aprotinin).
    5.  Bring volume to 1000 mL and filter through a 0.22 µm PES membrane.

#### 3.2.S.4.2.4.2 Wash Buffer
*   **Composition:** 25 mM HEPES, 5 mM $MgCl_2$, 0.1% BSA, pH 7.4 (Ice cold).

---

### 3.2.S.4.2.5 Detailed Step-by-Step Procedure

#### 3.2.S.4.2.5.1 Sample Preparation and Serial Dilution
1.  **Reference Standard (RS) Preparation:** Thaw one vial of Glucogen-XR RS (Batch RS-GLUC-2024-02). Dilute to a starting concentration of $1 \times 10^{-6}$ M in Assay Buffer.
2.  **Test Sample (TS) Preparation:** Reconstitute/dilute Glucogen-XR Test Sample (e.g., Batch GLUC-2025-001) to $1 \times 10^{-6}$ M.
3.  **Serial Dilution:** Perform an 11-point, 1:3 serial dilution for both RS and TS in a 96-well polypropylene deep-well plate.
    *   *Concentration Range:* $10^{-6}$ M to $1.6 \times 10^{-11}$ M.
    *   *Volume:* Prepare 500 µL per dilution point to ensure sufficient volume for triplicates.

#### 3.2.S.4.2.5.2 Membrane Thawing and Preparation
1.  Remove GHS-CHO-001 membrane aliquot from liquid nitrogen.
2.  Thaw rapidly in a 37°C water bath.
3.  Resuspend in ice-cold Assay Buffer using a Polytron homogenizer (Setting 4, 10 seconds) to ensure a uniform suspension.
4.  Dilute to a final protein concentration of 10 µg/well (as determined by BCA protein assay). Keep on ice until use.

#### 3.2.S.4.2.5.3 Binding Incubation
1.  To each well of a 96-well incubation plate, add:
    *   50 µL of Diluted RS or TS (or buffer for Total Binding).
    *   50 µL of $^{125}$I-GLP-1 (7-36) amide (Target activity: 50,000 CPM per well; final concentration ~0.1 nM).
    *   100 µL of Membrane Suspension (10 µg).
2.  **Non-Specific Binding (NSB) Wells:** Add 50 µL of 1 µM unlabeled GLP-1 (7-36) amide instead of the test sample.
3.  Seal the plate with an adhesive film.
4.  Incubate for 120 minutes at 25°C (Room Temperature) with gentle agitation (300 rpm) on an orbital shaker to reach equilibrium.

#### 3.2.S.4.2.5.4 Filtration and Detection
1.  Pre-wet the GF/C filter plate with 0.3% Polyethylenimine (PEI) for 30 minutes to reduce non-specific binding of the tracer to the glass fibers.
2.  Transfer the contents of the incubation plate to the GF/C filter plate using a Brandel 96-well cell harvester.
3.  Wash each well 5 times with 200 µL of ice-cold Wash Buffer.
4.  Dry the filter plate in a 50°C oven for 20 minutes.
5.  Add 40 µL of MicroScint-20 to each well.
6.  Seal the plate and count for 2 minutes per well using a TopCount NXT Gamma/Scintillation Counter.

---

### 3.2.S.4.2.6 Data Analysis and Statistical Model

#### 3.2.S.4.2.6.1 Four-Parameter Logistic (4-PL) Model
The data (CPM vs. Log Concentration) are analyzed using a 4-PL regression model according to USP <1034>:

$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$

Where:
*   $y$ = Response (CPM)
*   $x$ = Concentration of Glucogen-XR
*   $A$ = Upper asymptote (Maximum binding/Total binding)
*   $B$ = Hill slope (Slope factor)
*   $C$ = $IC_{50}$ (Concentration at 50% displacement)
*   $D$ = Lower asymptote (Non-specific binding)

#### 3.2.S.4.2.6.2 Relative Potency Calculation
The Relative Potency (RP) is calculated as the ratio of the $IC_{50}$ of the Reference Standard to the $IC_{50}$ of the Test Sample:

$$Relative Potency = \frac{IC_{50} (RS)}{IC_{50} (TS)} \times 100\%$$

The $K_i$ (Inhibition Constant) is derived using the Cheng-Prusoff equation:

$$K_i = \frac{IC_{50}}{1 + \frac{[L]}{K_d}}$$

Where $[L]$ is the concentration of the radioligand and $K_d$ is the dissociation constant of the radioligand (determined via Saturation Binding Studies as $0.42 \pm 0.05$ nM).

---

### 3.2.S.4.2.7 Validation Criteria and System Suitability

To ensure the validity of each assay run, the following System Suitability Criteria (SSC) must be met:

| Parameter | Acceptance Criteria |
| :--- | :--- |
| **Total Binding (Total CPM)** | $\ge 25,000$ CPM |
| **Non-Specific Binding (NSB)** | $\le 10\%$ of Total Binding |
| **RS Curve Fit ($R^2$)** | $\ge 0.98$ |
| **RS Hill Slope ($B$)** | $0.8$ to $1.2$ |
| **Signal-to-Noise Ratio** | $\ge 10$ |
| **CV of Triplicates** | $\le 15\%$ |

---

### 3.2.S.4.2.8 Representative Batch Data: GLUC-2025 Series
The following table summarizes the Receptor Binding Assay results for clinical-scale batches manufactured at the South San Francisco facility.

**Table 3.2.S.4.2-1: RBA Potency Results for Glucogen-XR Batches**

| Batch Number | Date of Analysis | $IC_{50}$ (nM) | 95% CI (nM) | Relative Potency (%) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RS-GLUC-2024-02** | 12-JAN-2025 | 1.42 | 1.35 – 1.49 | 100.0 (Ref) | Pass |
| **GLUC-2025-001** | 15-JAN-2025 | 1.45 | 1.38 – 1.52 | 97.9 | Pass |
| **GLUC-2025-002** | 18-JAN-2025 | 1.39 | 1.31 – 1.47 | 102.2 | Pass |
| **GLUC-2025-003** | 22-JAN-2025 | 1.41 | 1.34 – 1.48 | 100.7 | Pass |
| **GLUC-2025-004** | 02-FEB-2025 | 1.58 | 1.49 – 1.67 | 89.9 | Pass |
| **GLUC-2025-005** | 10-FEB-2025 | 1.31 | 1.24 – 1.38 | 108.4 | Pass |

*Note: Release specification for Potency is 80% to 125% of Reference Standard.*

---

### 3.2.S.4.2.9 Specificity and Selectivity
The RBA was evaluated for specificity against related peptides in the GLP/Glucagon family to ensure no cross-reactivity or off-target binding contributes to the potency measurement.

**Table 3.2.S.4.2-2: Selectivity Profiles**

| Peptide | Receptor | $IC_{50}$ (nM) | Selectivity Ratio |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR** | hGLP-1R | 1.42 | 1 |
| **Native GLP-1** | hGLP-1R | 0.85 | 0.6 |
| **Glucagon** | hGLP-1R | > 10,000 | > 7,000 |
| **GIP** | hGLP-1R | > 10,000 | > 7,000 |
| **Exendin-4** | hGLP-1R | 1.15 | 0.8 |

---

### 3.2.S.4.2.10 Robustness and Intermediate Precision
Statistical evaluation of the RBA robustness was performed by varying critical parameters including incubation time (±30 min), temperature (22°C to 28°C), and membrane concentration (±20%).

*   **Incubation Time:** Equilibrium is stable between 90 and 150 minutes.
*   **Temperature:** No significant shift in $IC_{50}$ observed within the 22-28°C range ($p > 0.05$).
*   **Intermediate Precision:** The Inter-assay CV across three analysts over five days was 6.4%, demonstrating high reproducibility.

### 3.2.S.4.2.11 References
1.  Holst, J. J. (2007). The Physiology of Glucagon-like Peptide 1. *Physiological Reviews*, 87(4), 1409-1439.
2.  Knudsen, L. B., & Lau, J. (2019). The Discovery and Development of Liraglutide and Semaglutide. *Frontiers in Endocrinology*, 10, 155.
3.  USP <1032> Design and Development of Biological Assays.
4.  ICH Q6B Specifications for Biotechnological/Biological Products.

---
**END OF SECTION**

---

## Assay Qualification and Validation

### **3.2.S.4.3. Analytical Procedures - Potency (Assay Qualification and Validation)**

---

#### **3.2.S.4.3.1. Overview and Strategic Framework**

The determination of biological potency for **Glucogen-XR (glucapeptide extended-release)** is a critical quality attribute (CQA) that ensures the consistency, safety, and efficacy of the drug substance. Given the complex mechanism of action (MoA) of glucapeptide as a long-acting GLP-1 receptor agonist, Google Health Sciences (GHS) has developed a cell-based reporter gene assay (RGA) to quantify the activation of the human GLP-1 receptor (hGLP-1R).

This section details the formal validation of the **GHS-POT-001: In Vitro Cell-Based cAMP Activation Assay**, conducted in accordance with **ICH Q2(R1) Validation of Analytical Procedures**, **USP <1032> Design and Development of Biological Assays**, **USP <1033> Biological Assay Validation**, and **USP <1034> Analysis of Biological Assays**.

The validation was executed at the Google Health Sciences Analytical Development Laboratory (South San Francisco, CA) under Protocol **VAL-POT-2025-098**.

---

#### **3.2.S.4.3.2. Assay Principle and Mechanism of Action (MoA)**

Glucogen-XR is a recombinant peptide produced in the **GHS-CHO-001** cell line. Its primary MoA involves binding to the G-protein coupled receptor (GPCR) GLP-1R, leading to the activation of adenylate cyclase and the subsequent increase in intracellular cyclic adenosine monophosphate (cAMP).

**Assay Components:**
1.  **Effector Cells:** A proprietary HEK-293 cell line stably transfected with the human GLP-1 receptor (hGLP-1R) and a luciferase reporter gene under the control of a cAMP-responsive element (CRE).
2.  **Detection System:** Bio-luminescent signal generated via the oxidation of luciferin, which is proportional to the concentration of intracellular cAMP.
3.  **Data Modeling:** A 4-parameter logistic (4-PL) curve fit model is utilized to determine the $EC_{50}$ of the Reference Standard and Test Samples.

---

#### **3.2.S.4.3.3. Reference Standard and Reagent Characterization**

All reagents utilized in the validation were qualified according to GHS internal quality standards.

**Table 1: Reference Materials and Critical Reagents**
| Material ID | Description | Lot Number | Expiry/Retest Date | Function |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-RS-002** | Glucogen-XR Primary Reference Standard | RS-2024-001 | 12-DEC-2027 | Calibration |
| **GHS-WS-005** | Glucogen-XR Working Standard | WS-2025-012 | 15-JUN-2026 | Routine Assay |
| **HEK-CRE-GLP1R** | Target Cell Line (MCB) | MCB-HEK-001 | N/A | Biological Activity |
| **GLUC-2025-001** | Validation Sample (100% Target) | GLUC-2025-001 | 01-JAN-2027 | Accuracy/Precision |
| **GLUC-2025-050** | Validation Sample (50% Target) | GLUC-2025-050 | 01-JAN-2027 | Linearity |
| **GLUC-2025-150** | Validation Sample (150% Target) | GLUC-2025-150 | 01-JAN-2027 | Linearity |

---

#### **3.2.S.4.3.4. Validation Parameters and Methodology**

The validation followed a matrix design to assess the following parameters:

##### **3.2.S.4.3.4.1. Specificity**
Specificity was evaluated by assessing the response of the assay to structurally related peptides (e.g., native Glucagon, GLP-2, and Exendin-4) and formulation buffer components. 

*   **Procedure:** Samples were tested at a concentration equivalent to the $EC_{100}$ of Glucogen-XR.
*   **Acceptance Criteria:** Related peptides must show no significant luciferase induction (< 5% of maximum Glucogen-XR response).

##### **3.2.S.4.3.4.2. Accuracy (Recovery)**
Accuracy was assessed by preparing samples at five potency levels relative to the nominal concentration (50%, 75%, 100%, 125%, and 150%).

*   **Calculation:**
    $$\text{\% Recovery} = \left( \frac{\text{Measured Potency}}{\text{Theoretical Potency}} \right) \times 100$$
*   **Statistical Model:** Mean recovery and 95% Confidence Intervals (CI).

##### **3.2.S.4.3.4.3. Precision (Repeatability and Intermediate Precision)**
*   **Repeatability (Intra-assay):** Six replicates of the 100% potency level performed by a single analyst in a single run.
*   **Intermediate Precision (Inter-assay):** Assessed across three days, two analysts, and two different sets of equipment (e.g., Plate Readers ID: GHS-READ-09 and GHS-READ-12).

##### **3.2.S.4.3.4.4. Linearity and Range**
Linearity was determined across the 50% to 150% potency range. The relationship between the assigned potency and measured potency was analyzed using linear regression.

---

#### **3.2.S.4.3.5. Detailed Assay Protocol (GHS-POT-001)**

The following step-by-step procedure was utilized during validation:

1.  **Cell Preparation:**
    *   Thaw one vial of HEK-CRE-GLP1R cells from liquid nitrogen.
    *   Resuspend in DMEM/F12 supplemented with 10% FBS and 1% Pen/Strep.
    *   Seed cells at a density of $5.0 \times 10^4$ cells/well in a 96-well white-walled tissue culture plate.
    *   Incubate for $24 \pm 2$ hours at $37^\circ\text{C}, 5\% \text{CO}_2$.

2.  **Sample Preparation (Serial Dilution):**
    *   Prepare a 10-point serial dilution of Reference Standard (RS) and Test Samples (TS) in Assay Buffer (HBSS + 0.1% BSA + 0.5 mM IBMX).
    *   Starting concentration: 1000 nM.
    *   Dilution factor: 1:3.

3.  **Sample Treatment:**
    *   Remove growth media from the 96-well plate.
    *   Transfer 50 $\mu$L of each dilution to the plate.
    *   Incubate for $4.0 \pm 0.5$ hours at $37^\circ\text{C}$.

4.  **Detection:**
    *   Add 50 $\mu$L of Steady-Glo® Luciferase Assay System reagent per well.
    *   Agitate for 5 minutes on an orbital shaker at 300 RPM.
    *   Measure Luminescence (RLU) using the SpectraMax i3x multi-mode reader.

5.  **Data Analysis:**
    *   Fit RLU data to a 4-parameter logistic (4-PL) equation:
        $$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$
        *Where: A = Bottom, B = Hill Slope, C = $EC_{50}$, D = Top.*

---

#### **3.2.S.4.3.6. Validation Results and Statistical Analysis**

##### **3.2.S.4.3.6.1. Accuracy and Linearity Data**

**Table 2: Accuracy and Recovery Results for Glucogen-XR Potency (n=9 per level)**
| Nominal Potency (%) | Mean Observed Potency (%) | % Recovery | 95% CI (Lower) | 95% CI (Upper) | Batch Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **50%** | 48.2 | 96.4 | 94.1 | 98.7 | GLUC-2025-050 |
| **75%** | 76.1 | 101.5 | 99.2 | 103.8 | GLUC-2025-075 |
| **100%** | 100.8 | 100.8 | 98.5 | 103.1 | GLUC-2025-100 |
| **125%** | 124.3 | 99.4 | 97.1 | 101.7 | GLUC-2025-125 |
| **150%** | 152.6 | 101.7 | 99.4 | 104.0 | GLUC-2025-150 |

**Table 3: Regression Statistics (50% - 150% Range)**
| Parameter | Result | Acceptance Criteria | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Correlation Coefficient (r)** | 0.9982 | $r \geq 0.990$ | Pass |
| **Slope** | 1.02 | 0.90 – 1.10 | Pass |
| **Y-Intercept** | -1.5% | $\leq \pm 5.0\%$ | Pass |

##### **3.2.S.4.3.6.2. Precision Analysis**

**Table 4: Intermediate Precision (Inter-Assay Variation)**
| Run ID | Analyst | Date | Plate Reader ID | Mean Potency (%) | % CV (Intra-run) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RUN-001** | A. Smith | 12-JAN-2025 | GHS-READ-09 | 101.2 | 3.2% |
| **RUN-002** | A. Smith | 13-JAN-2025 | GHS-READ-09 | 98.5 | 4.1% |
| **RUN-003** | B. Jones | 14-JAN-2025 | GHS-READ-12 | 102.4 | 2.9% |
| **RUN-004** | B. Jones | 15-JAN-2025 | GHS-READ-12 | 99.1 | 3.8% |
| **Grand Mean** | | | | **100.3** | **4.2% (Inter-run)** |

*Acceptance Criteria: Intermediate Precision %CV $\leq$ 15.0%.*

---

#### **3.2.S.4.3.7. System Suitability Criteria**

To ensure the validity of each routine assay run, the following system suitability criteria (SSC) must be met:

1.  **Reference Standard Curve Fit:** The $R^2$ of the 4-PL fit for the RS must be $\geq 0.985$.
2.  **Signal-to-Noise Ratio:** The ratio of the "Top" plateau (D) to the "Bottom" plateau (A) must be $\geq 15.0$.
3.  **Parallelism:** The slope ratio ($B_{TS} / B_{RS}$) must be within $0.80 - 1.25$.
4.  **Replicate Variability:** The %CV between duplicate $EC_{50}$ values for any sample must be $\leq 20\%$.

---

#### **3.2.S.4.3.8. Robustness Assessment**

Robustness was evaluated by deliberately varying critical assay parameters (DoE approach).

**Table 5: Robustness Testing Results**
| Parameter | Variation | Effect on Potency | Significance (p < 0.05) |
| :--- | :--- | :--- | :--- |
| **Incubation Time** | $4.0 \text{ hrs} \pm 30 \text{ min}$ | No Significant Effect | No |
| **Cell Seeding Density** | $5.0 \pm 0.5 \times 10^4$ | No Significant Effect | No |
| **Incubation Temp** | $37^\circ\text{C} \pm 1^\circ\text{C}$ | Minor shift in $EC_{50}$ | No |
| **Reagent Lot Change** | Lot A vs Lot B | No Significant Effect | No |

---

#### **3.2.S.4.3.9. Conclusion**

The analytical procedure **GHS-POT-001** for the determination of the biological potency of Glucogen-XR has been successfully validated. The assay demonstrates high specificity for the GLP-1 receptor, excellent accuracy (96.4% to 101.7% recovery), and robust precision (%CV < 5.0%). The procedure is suitable for its intended use in drug substance release and stability testing.

---

**References:**
1.  *ICH Q2(R1): Validation of Analytical Procedures: Text and Methodology.*
2.  *USP <1032>: Design and Development of Biological Assays.*
3.  *USP <1033>: Biological Assay Validation.*
4.  *FDA Guidance for Industry: Bioanalytical Method Validation (2018).*

**Appendices:**
*   *Appendix 1: Statistical Output from JMP v16.0 (Run ID: RUN-001 through RUN-004).*
*   *Appendix 2: Representative Chromatograms and Plate Maps for Batch GLUC-2025-001.*

---

# Analytical Procedures - Quantity

## Protein Concentration by UV280

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## 3.2.S DRUG SUBSTANCE (GLUCOGEN-XR)
### 3.2.S.4 Control of Drug Substance
#### 3.2.S.4.2 Analytical Procedures
##### 3.2.S.4.2.X Quantity: Determination of Protein Concentration by Ultraviolet-Visible (UV) Spectroscopy at 280 nm

---

### 1.0 PURPOSE AND SCOPE

This document describes the validated analytical procedure for the determination of the protein concentration of Glucogen-XR (glucapeptide extended-release) drug substance using Ultraviolet-Visible (UV) spectroscopy at a wavelength of 280 nm. 

Glucogen-XR is a recombinant GLP-1 receptor agonist peptide expressed in the proprietary GHS-CHO-001 cell line. Given the presence of aromatic amino acid residues (Tryptophan, Tyrosine, and Cysteine-Cysteine disulfide bridges) within the primary sequence of the glucapeptide moiety, UV absorbance at 280 nm serves as a highly accurate, non-destructive, and high-throughput method for quantifying protein content during release testing, stability studies, and in-process control monitoring.

This procedure adheres to the requirements set forth in:
*   **USP <857>** Ultraviolet-Visible Spectroscopy
*   **USP <1057>** Protein Determination (Method 1)
*   **ICH Q2(R1)** Validation of Analytical Procedures: Text and Methodology
*   **ICH Q6B** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products

---

### 2.0 PRINCIPLE OF THE METHOD

The concentration of Glucogen-XR is determined based on the Beer-Lambert Law, which establishes a linear relationship between the absorbance of a solution and the concentration of the absorbing species.

#### 2.1 The Beer-Lambert Equation
The fundamental equation utilized for calculation is:
$$A = \epsilon \cdot c \cdot l$$

Where:
*   **$A$**: Observed absorbance at 280 nm (dimensionless).
*   **$\epsilon$**: Molar extinction coefficient ($M^{-1} cm^{-1}$) or mass extinction coefficient ($L \cdot g^{-1} \cdot cm^{-1}$). For Glucogen-XR, the experimentally derived and theoretically validated mass extinction coefficient ($E^{0.1\%}$) is used.
*   **$c$**: Concentration of the protein (mg/mL).
*   **$l$**: Path length of the quartz cuvette or the sampling head (cm).

#### 2.2 Theoretical Molar Extinction Coefficient Calculation
The theoretical extinction coefficient for Glucogen-XR was calculated based on the amino acid sequence (incorporating the extended-release peptide scaffold) using the Pace et al. (1995) method:

$$\epsilon_{280} = (n_{Trp} \times 5500) + (n_{Tyr} \times 1490) + (n_{Cys} \times 125)$$

For Glucogen-XR:
*   Number of Tryptophan (Trp) residues: 4
*   Number of Tyrosine (Tyr) residues: 8
*   Number of Disulfide Bonds (Cys-Cys): 3

Calculation:
$$\epsilon = (4 \times 5500) + (8 \times 1490) + (3 \times 125) = 22,000 + 11,920 + 375 = 34,295 \, M^{-1} cm^{-1}$$

To convert to the mass extinction coefficient ($E^{0.1\%}$, representing 1 mg/mL):
$$E^{0.1\%} = \frac{\epsilon}{MW} \times 10$$
Given the Molecular Weight (MW) of Glucogen-XR is approximately 32,450 Da:
$$E^{0.1\%} = \frac{34,295}{32,450} \times 10 = 1.057 \, mL \cdot mg^{-1} \cdot cm^{-1}$$

This value was experimentally verified during method validation (Report VAL-GLUC-UV-2024) using amino acid analysis (AAA) as the orthogonal reference method. The validated $E^{0.1\%}$ used for all GMP calculations is **1.06**.

---

### 3.0 EQUIPMENT AND MATERIALS

#### 3.1 Equipment
The following equipment (or equivalent) is qualified for use:
1.  **Spectrophotometer:** Agilent Cary 60 UV-Vis or Thermo Scientific NanoDrop OneC (for micro-volume assessment). Must be qualified per USP <857> for wavelength accuracy, stray light, and photometric linearity.
2.  **Cuvettes:** Suprasil® Quartz micro-cuvettes, 10 mm path length (matched set), certified for use in the 200–800 nm range.
3.  **Analytical Balance:** Mettler Toledo XPR205 (Readability: 0.01 mg).
4.  **Pipettes:** Rainin LTS calibrated single-channel pipettes (20 µL, 200 µL, 1000 µL).
5.  **Vortex Mixer:** VWR Signature Digital Vortexer.

#### 3.2 Reagents and Solutions
1.  **Formulation Buffer (Blank):** 20 mM Histidine-HCl, 150 mM NaCl, 0.02% Polysorbate 20, pH 6.0 (Lot # GHS-BUFF-2025-01).
2.  **Purified Water:** USP/EP Grade (Milli-Q or equivalent, 18.2 MΩ·cm).
3.  **Cleaning Solution:** 6N Nitric Acid (for cuvette cleaning) or Hellmanex III.

---

### 4.0 DETAILED ANALYTICAL PROCEDURE

#### 4.1 System Suitability and Warm-up
1.  Initialize the spectrophotometer and allow the lamp (Xenon or Deuterium) to warm up for a minimum of 30 minutes.
2.  Perform the internal diagnostic check (Self-Test).
3.  Verification of Wavelength Accuracy: Using a Holmium Oxide filter, ensure the peak at 279.3 nm is within ± 0.5 nm.

#### 4.2 Sample Preparation (Serial Dilution)
Drug Substance (DS) is typically manufactured at a high concentration (approx. 50 mg/mL). To ensure absorbance remains within the linear range of the instrument (0.2 to 1.5 AU), a dilution is required.

**Step 1: Preparation of Diluent**
Use the exact batch-specific formulation buffer as the diluent to ensure matrix matching and proper baseline subtraction.

**Step 2: Dilution Protocol**
To achieve a target concentration of 1.0 mg/mL (Target $A_{280} \approx 1.06$):
1.  Pipette 980 µL of formulation buffer into a sterile 1.5 mL microcentrifuge tube.
2.  Gently invert the Drug Substance vial (Batch GLUC-2025-XXX) 5 times. Do not vortex.
3.  Withdraw 20 µL of DS and dispense into the 980 µL of buffer (Dilution Factor, DF = 50).
4.  Vortex gently for 5 seconds.
5.  Prepare the sample in triplicate (Preparation A, B, and C).

#### 4.3 Spectrophotometric Measurement
1.  **Baseline Correction:** Fill the reference and sample cuvettes with formulation buffer. Perform a "Zero" or "Baseline" scan from 240 nm to 340 nm.
2.  **Blank Check:** Record the absorbance of the buffer. The absorbance at 280 nm must be 0.000 ± 0.005 AU.
3.  **Scattering Check (320 nm):** Measure the sample absorbance at 320 nm. Protein solutions should not absorb at 320 nm; absorbance > 0.02 AU indicates aggregation or turbidity.
4.  **Sample Measurement:**
    *   Rinse the cuvette three times with ~200 µL of Sample Preparation A.
    *   Fill the cuvette and record the $A_{280}$.
    *   Repeat for Preparations B and C.

---

### 5.0 DATA TABULATION AND STATISTICAL ANALYSIS

The following table represents the data requirements for a standard release of Glucogen-XR Drug Substance.

**Table 1: UV280 Analysis for Glucogen-XR Batch GLUC-2025-001**
| Parameter | Rep 1 | Rep 2 | Rep 3 | Mean | % RSD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dilution Factor (DF)** | 50 | 50 | 50 | 50 | N/A |
| **Measured $A_{280}$** | 1.062 | 1.059 | 1.065 | 1.062 | 0.28% |
| **Measured $A_{320}$** | 0.002 | 0.003 | 0.002 | 0.002 | N/A |
| **Corrected Absorbance ($A_{corr}$)** | 1.060 | 1.056 | 1.063 | 1.060 | 0.33% |
| **Calculated Conc. (mg/mL)** | 50.00 | 49.81 | 50.14 | **49.98** | 0.33% |

*Note: $A_{corr} = A_{280} - A_{320}$*

---

### 6.0 CALCULATIONS

The final concentration ($C_{final}$) of the drug substance is calculated using the following formula:

$$C_{final} = \frac{(A_{280} - A_{320}) \times DF}{E^{0.1\%}}$$

Where:
*   $A_{280}$ = Absorbance of the diluted sample at 280 nm.
*   $A_{320}$ = Absorbance of the diluted sample at 320 nm (correction for light scattering).
*   $DF$ = Dilution Factor (e.g., 50).
*   $E^{0.1\%}$ = 1.06 (Extinction coefficient for 1 mg/mL solution).

**Example Calculation (from Table 1, Rep 1):**
$$C = \frac{(1.062 - 0.002) \times 50}{1.06} = \frac{1.060 \times 50}{1.06} = 50.00 \, mg/mL$$

---

### 7.0 SYSTEM SUITABILITY AND ACCEPTANCE CRITERIA (SST)

To ensure the validity of the results, the following criteria must be met:

| Criterion | Requirement |
| :--- | :--- |
| **Blank Absorbance (280 nm)** | $\leq 0.005$ AU |
| **Spectral Profile** | Peak maximum must be at $280 \pm 2$ nm |
| **Scattering Ratio ($A_{320}/A_{280}$)** | $\leq 0.05$ |
| **Triplicate Precision (%RSD)** | $\leq 2.0\%$ |
| **Linearity Range Check** | Measured $A_{280}$ must be between 0.2 and 1.5 AU |

If any SST criterion fails, a Laboratory Investigation (LIR) must be initiated per SOP-GHS-QA-05.

---

### 8.0 COMPARATIVE BATCH DATA (HISTORICAL TRENDING)

Below is a summary of the protein concentration results for recent GMP batches of Glucogen-XR manufactured at the South San Francisco facility.

**Table 2: Historical Batch Analysis (Quantity)**
| Batch Number | Date of Analysis | Facility ID | Concentration (mg/mL) | Purity by SEC (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | GHS-SSF-01 | 49.98 | 99.4 |
| GLUC-2025-002 | 05-FEB-2025 | GHS-SSF-01 | 50.12 | 99.2 |
| GLUC-2025-003 | 19-MAR-2025 | GHS-SSF-01 | 49.85 | 99.5 |
| GLUC-2025-004 | 10-APR-2025 | GHS-SSF-01 | 50.05 | 99.3 |

---

### 9.0 METHOD VALIDATION SUMMARY (REF: VAL-GLUC-UV-2024)

The UV280 method for Glucogen-XR was validated according to ICH Q2(R1) guidelines.

1.  **Accuracy:** Recovery was 99.5% to 100.8% across 80% to 120% of the target concentration.
2.  **Precision:** Intra-day repeatability %RSD was 0.4%; Inter-day intermediate precision %RSD was 0.9%.
3.  **Linearity:** Correlation coefficient ($R^2$) was 0.9999 in the range of 0.1 mg/mL to 2.0 mg/mL.
4.  **Specificity:** No interference was observed from formulation excipients (Histidine, NaCl, Polysorbate 20) at their maximum usage levels.

---

### 10.0 REFERENCES

1.  Pace, C.N., et al. (1995). "How to measure and predict the molar absorption coefficient of a protein." *Protein Science*, 4(11), 2411-2423.
2.  USP <857> Ultraviolet-Visible Spectroscopy.
3.  USP <1057> Protein Determination.
4.  ICH Guideline Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
5.  Google Health Sciences Internal SOP-ANA-012: Operation and Maintenance of Cary 60 Spectrophotometers.

---

## Total Protein by BCA or Bradford

### **3.2.S.4.2 ANALYTICAL PROCEDURES**
#### **SUBSECTION: QUANTITY – TOTAL PROTEIN DETERMINATION BY BICINCHONINIC ACID (BCA) AND BRADFORD COLORIMETRIC ASSAYS**

---

### **1.0 SCOPE AND APPLICATION**
This technical document details the validated analytical procedures for the determination of total protein concentration of Glucogen-XR (glucapeptide extended-release) Drug Substance (DS). These procedures are designed to satisfy the regulatory requirements set forth in **ICH Q6B (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products)** and **USP <1057> Protein Determination**.

Glucogen-XR is a recombinant peptide produced in the proprietary GHS-CHO-001 cell line. Due to the complex extended-release formulation and the specific glyco-conjugation of the peptide, accurate quantification is critical for ensuring potency and dosage uniformity. Google Health Sciences (GHS) utilizes two complementary orthogonal methods:
1.  **BCA Assay:** Primary release method for bulk drug substance.
2.  **Bradford Assay:** Secondary/confirmatory method used during process characterization and in-process monitoring (IPC) to detect potential surfactant interference.

---

### **2.0 REGULATORY COMPLIANCE AND GUIDELINES**
The methodologies described herein comply with the following international standards:
*   **USP <1057>:** Method I (Colorimetric) and Method II (BCA).
*   **ICH Q2(R1):** Validation of Analytical Procedures.
*   **21 CFR Part 211.165:** Testing and release for distribution.
*   **EMA/CHMP/BWP/157653/2007:** Guideline on Development, Production, Characterization and Specifications for Monoclonal Antibodies and Related Products (applied to large peptides).

---

### **3.0 METHOD 1: BICINCHONINIC ACID (BCA) PROTEIN ASSAY**

#### **3.1 Principle of the Procedure**
The BCA assay relies on a two-step reaction. First, the peptide bonds in Glucogen-XR reduce $Cu^{2+}$ ions from the cupric sulfate to $Cu^{+}$ (the biuret reaction). Second, two molecules of bicinchoninic acid chelate with each $Cu^{+}$ ion, forming a purple-colored water-soluble complex. The absorbance is measured at 562 nm. This complex exhibits a strong linear relationship between protein concentration and absorbance over a range of 20–2000 µg/mL.

#### **3.2 Equipment and Instrumentation**
All equipment is qualified under GHS Installation/Operational Qualification (IQ/OQ) protocols.
*   **Spectrophotometer:** Thermo Scientific™ Multiskan™ SkyHigh Microplate Spectrophotometer (Asset ID: GHS-SPEC-0992) or equivalent.
*   **Plate Reader Software:** SkanIt™ Software v7.0 (21 CFR Part 11 compliant).
*   **Pipettes:** Rainin LTS single and multi-channel (0.2 µL to 1000 µL).
*   **Incubator:** Binder KB Series Cooled Incubator (Asset ID: GHS-INC-441), set to $37^\circ \text{C} \pm 1^\circ \text{C}$.
*   **Microplates:** Corning™ 96-well Clear Polystyrene High Bind Flat Bottom Microplates (Ref: 3590).

#### **3.3 Reagents and Standards**
*   **Working Reagent (WR):** Prepared by mixing BCA Reagent A (containing sodium carbonate, sodium bicarbonate, bicinchoninic acid, and sodium tartrate in 0.1 M sodium hydroxide) and BCA Reagent B (containing 4% cupric sulfate) at a ratio of 50:1.
*   **Reference Standard:** Glucogen-XR Reference Standard (Lot: GHS-RS-GLUC-2024-05), concentration 2.5 mg/mL, stored at $-80^\circ \text{C}$.
*   **Diluent:** Phosphate Buffered Saline (PBS), pH 7.4 (GHS-BUF-0012).

#### **3.4 Detailed Step-by-Step Protocol**

**3.4.1 Preparation of Standard Curve**
The standard curve is prepared by serial dilution of the Glucogen-XR Reference Standard. The curve must be generated fresh for every plate.

| Standard ID | Final Concentration (µg/mL) | Volume of Diluent (µL) | Volume of Glucogen-XR RS (µL) |
| :--- | :--- | :--- | :--- |
| **S1 (Stock)** | 2000 | 250 | 2000 (from 2.5mg/mL stock) |
| **S2** | 1500 | 125 | 375 of S1 |
| **S3** | 1000 | 250 | 250 of S1 |
| **S4** | 750 | 250 | 250 of S2 |
| **S5** | 500 | 250 | 250 of S3 |
| **S6** | 250 | 250 | 250 of S5 |
| **S7** | 125 | 250 | 250 of S6 |
| **S8 (Blank)** | 0 | 500 | 0 |

**3.4.2 Sample Preparation**
Drug Substance samples (e.g., Batch GLUC-2025-001) are diluted to fall within the midpoint of the standard curve (approx. 500–1000 µg/mL).
1.  Thaw DS sample on ice.
2.  Perform a 1:10 initial dilution in PBS.
3.  Perform a secondary 1:2 dilution to achieve target concentration.
4.  All samples are prepared in triplicate.

**3.4.3 Assay Procedure**
1.  Pipette 25 µL of each standard, control, and sample into the 96-well plate.
2.  Add 200 µL of the BCA Working Reagent (WR) to each well using a multi-channel pipette.
3.  Cover the plate with an adhesive sealer and mix on a plate shaker for 30 seconds at 500 RPM.
4.  Incubate the plate at $37^\circ \text{C}$ for exactly 30 minutes.
5.  Cool the plate at room temperature for 5 minutes.
6.  Measure absorbance at 562 nm using the Multiskan SkyHigh.

---

### **4.0 METHOD 2: BRADFORD (COOMASSIE BLUE) PROTEIN ASSAY**

#### **4.1 Principle of the Procedure**
The Bradford assay is used as an orthogonal check. It is based on the binding of Coomassie Brilliant Blue G-250 dye to the peptide. Under acidic conditions, the dye is in a protonated red form; upon binding to basic or aromatic amino acids (specifically Arginine, Lysine, and Histidine residues in Glucogen-XR), the dye converts to a stable unprotonated blue form. The absorbance maximum shifts from 465 nm to 595 nm.

#### **4.2 Protocol Specifics**
*   **Reagent:** Bio-Rad Protein Assay Dye Reagent Concentrate (Phosphoric acid and methanol solution).
*   **Incubation:** 10 minutes at room temperature (protected from light).
*   **Detection:** 595 nm.

---

### **5.0 DATA ANALYSIS AND CALCULATIONS**

#### **5.1 Standard Curve Fitting**
A four-parameter logistic (4-PL) regression model or a quadratic polynomial fit is utilized to represent the relationship between concentration ($x$) and absorbance ($y$).

Equation for 4-PL:
$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$

Where:
*   $A$ = Minimum asymptote
*   $B$ = Hill slope
*   $C$ = $EC_{50}$ (inflection point)
*   $D$ = Maximum asymptote

#### **5.2 Acceptance Criteria for System Suitability**
1.  **Correlation Coefficient ($R^2$):** $\geq 0.995$
2.  **%CV of Replicates:** $\leq 5.0\%$ for standards and samples.
3.  **Accuracy of Back-calculated Standards:** 80–120% of nominal value.
4.  **Sensitivity (LOD):** $\leq 10 \text{ µg/mL}$.

---

### **6.0 REPRESENTATIVE BATCH DATA (VALIDATION SUMMARY)**

The following table summarizes the protein determination results for Glucogen-XR Drug Substance batches manufactured at the South San Francisco facility.

**Table 1: Protein Quantification Results for GLUC-2025 Series**

| Batch Number | Manufacture Date | BCA Result (mg/mL) | Bradford Result (mg/mL) | % Difference | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 10.02 ± 0.12 | 9.88 ± 0.15 | 1.4% | Pass |
| **GLUC-2025-002** | 19-JAN-2025 | 9.95 ± 0.08 | 9.92 ± 0.11 | 0.3% | Pass |
| **GLUC-2025-003** | 02-FEB-2025 | 10.15 ± 0.15 | 10.01 ± 0.09 | 1.4% | Pass |
| **GLUC-2025-004** | 09-FEB-2025 | 9.89 ± 0.10 | 9.75 ± 0.13 | 1.4% | Pass |
| **GLUC-2025-005** | 16-FEB-2025 | 10.05 ± 0.07 | 10.08 ± 0.14 | -0.3% | Pass |

---

### **7.0 INTERFERENCE ANALYSIS AND ROBUSTNESS**

Google Health Sciences conducted an extensive interference study to ensure the Glucogen-XR formulation components (e.g., Polysorbate 80, Sucrose, and extended-release polymers) do not bias the protein measurement.

**Table 2: Interference Recovery Study**

| Excipient | Concentration in DS | BCA Recovery (%) | Bradford Recovery (%) | Result |
| :--- | :--- | :--- | :--- | :--- |
| Polysorbate 80 | 0.02% (w/v) | 99.2% | 94.5% | No Interference |
| Sucrose | 10% (w/v) | 101.4% | 98.2% | No Interference |
| Histidine | 20 mM | 100.5% | 99.1% | No Interference |
| EDTA | 1 mM | 88.4%* | 99.8% | *BCA sensitive to EDTA |

*Note: BCA assay sensitivity to EDTA is managed by ensuring DS samples do not contain EDTA concentrations exceeding 0.5 mM during the final diafiltration step.*

---

### **8.0 PRECISION AND ACCURACY**

The method precision was evaluated by three different analysts across three separate days (n=18).

**Table 3: Intermediate Precision (Analyst-to-Analyst)**

| Analyst ID | Day | Batch ID | Mean Conc (mg/mL) | % RSD |
| :--- | :--- | :--- | :--- | :--- |
| ANL-402 | 1 | GLUC-2025-001 | 10.04 | 1.2% |
| ANL-889 | 2 | GLUC-2025-001 | 10.01 | 1.5% |
| ANL-112 | 3 | GLUC-2025-001 | 9.98 | 1.1% |
| **Cumulative** | -- | -- | **10.01** | **1.3%** |

---

### **9.0 CONCLUSION**
The BCA and Bradford assays described for Glucogen-XR provide a robust, accurate, and precise means of quantifying total protein. The BCA method is the designated release method due to its higher tolerance for surfactants and lower coefficient of variation. All results for the GLUC-2025-XXX series demonstrate high batch-to-batch consistency, ensuring the safety and efficacy of the Drug Substance.

---
**Footnotes & References:**
1. *Google Health Sciences SOP-QC-7721: BCA Analysis of Glycopeptides.*
2. *Smith, P.K., et al. (1985). Measurement of protein using bicinchoninic acid. Anal. Biochem. 150: 76-85.*
3. *Bradford, M.M. (1976). A rapid and sensitive method for the quantitation of microgram quantities of protein. Anal. Biochem. 72: 248-254.*

---

## HPLC-based Quantitation

### **3.2.S.4.2 ANALYTICAL PROCEDURES**
#### **SUBSECTION: HPLC-based Quantitation of Glucogen-XR (Glucapeptide Extended-Release)**

---

### **1. INTRODUCTION AND SCOPE**
This section delineates the high-performance liquid chromatography (HPLC) analytical procedure validated for the precise quantitation of Glucogen-XR (glucapeptide extended-release) active pharmaceutical ingredient (API). The method, internal reference **GHS-SOP-QC-7742-REV04**, utilizes a reversed-phase (RP-HPLC) approach to ensure the accurate measurement of the protein concentration, supporting both release testing and stability monitoring programs.

The Glucogen-XR molecule is a recombinant human glucapeptide analog produced in the proprietary GHS-CHO-001 (CHO-K1 GS knockout) cell line. Given the extended-release nature and the specific acylation patterns required for its pharmacokinetic profile, the HPLC method must differentiate the intact monomer from degradation products to provide a specific "Quantity" value (expressed in mg/mL or mg/vial).

#### **1.1 Regulatory Compliance**
The development and validation of this procedure comply with the following international standards:
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1225>:** Validation of Compendial Procedures.
*   **USP <621>:** Chromatography.
*   **21 CFR Part 211.165:** Testing and release for distribution.

---

### **2. METHOD PRINCIPLE**
The quantitation of Glucogen-XR is achieved through Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC) using a hydrophobic stationary phase (C18) and a binary gradient system. The glucapeptide is eluted based on its hydrophobic interaction with the octadecyl-silane ligands. Detection is performed via Ultraviolet (UV) spectroscopy at **214 nm**, the wavelength corresponding to the peptide bond absorption, which provides high sensitivity and a wide linear range for protein quantitation. Secondary monitoring at **280 nm** is utilized for identity confirmation based on aromatic amino acid content (Tryptophan/Tyrosine).

---

### **3. REAGENTS, MATERIALS, AND EQUIPMENT**

#### **3.1 Equipment Specifications**
The following equipment (or equivalent) is qualified for use under Google Health Sciences (GHS) Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) protocols.

| Equipment ID | Description | Specification Requirement |
| :--- | :--- | :--- |
| **GHS-HPLC-09** | Agilent 1290 Infinity II LC System | Binary pump, Autosampler with cooling, Column Oven, DAD |
| **GHS-COL-442** | Waters XBridge Peptide BEH C18 | 130Å, 3.5 µm, 4.6 mm X 150 mm |
| **GHS-BAL-02** | Mettler Toledo XPR205 | Sensitivity: 0.01 mg |
| **GHS-WTR-01** | Milli-Q IQ 7000 | Type 1 Ultrapure Water (18.2 MΩ·cm) |

#### **3.2 Reagents and Reference Standards**
| Reagent Name | Grade | Manufacturer | Catalog Number |
| :--- | :--- | :--- | :--- |
| **Acetonitrile (ACN)** | HPLC/MS Grade | Fisher Chemical | A955-4 |
| **Trifluoroacetic Acid (TFA)** | Sequencing Grade | Sigma-Aldrich | 302031 |
| **Water** | Type 1 Ultrapure | GHS In-house | N/A |
| **Glucogen-XR Ref Std** | Primary Reference | GHS (Batch: GLUC-RS-2024) | Potency: 1.02 mg/mg |

---

### **4. SOLUTION PREPARATION**

#### **4.1 Mobile Phase A (0.1% TFA in Water)**
1.  Measure 2000 mL of Type 1 Ultrapure Water into a glass graduated cylinder.
2.  Transfer to a 2L HPLC reservoir.
3.  Add 2.0 mL of Trifluoroacetic Acid (TFA) using a precision glass pipette.
4.  Sonicate for 15 minutes to degas.
5.  Expiration: 7 days at room temperature.

#### **4.2 Mobile Phase B (0.1% TFA in Acetonitrile)**
1.  Measure 2000 mL of HPLC-grade Acetonitrile.
2.  Transfer to a 2L HPLC reservoir.
3.  Add 2.0 mL of TFA.
4.  Sonicate for 10 minutes.
5.  Expiration: 30 days at room temperature.

#### **4.3 Standard and Sample Diluent**
*   **Composition:** 90% Mobile Phase A / 10% Mobile Phase B.
*   Note: Use chilled diluent (2-8°C) to maintain stability during sample preparation.

---

### **5. CHROMATOGRAPHIC CONDITIONS**

| Parameter | Setting |
| :--- | :--- |
| **Column Temperature** | 45°C ± 0.5°C |
| **Autosampler Temp** | 5°C ± 2°C |
| **Flow Rate** | 1.0 mL/min |
| **Detection Wavelength** | 214 nm (Primary), 280 nm (Secondary) |
| **Injection Volume** | 20 µL (Adjustable based on concentration) |
| **Run Time** | 45 minutes |

#### **5.1 Gradient Program**
| Time (min) | % Mobile Phase A | % Mobile Phase B | Flow (mL/min) | Curve |
| :--- | :--- | :--- | :--- | :--- |
| 0.00 | 75 | 25 | 1.0 | Initial |
| 5.00 | 75 | 25 | 1.0 | Linear |
| 30.00 | 45 | 55 | 1.0 | Linear |
| 35.00 | 10 | 90 | 1.0 | Linear |
| 38.00 | 10 | 90 | 1.0 | Hold |
| 40.00 | 75 | 25 | 1.0 | Linear |
| 45.00 | 75 | 25 | 1.0 | Equilibration |

---

### **6. ANALYTICAL PROCEDURE (STEP-BY-STEP)**

#### **6.1 System Suitability Preparation**
1.  **Blank:** Inject Diluent (Section 4.3).
2.  **Resolution Solution:** Utilize a degraded Glucogen-XR sample (exposed to 40°C for 48 hours) to ensure baseline resolution between the main peak and the deamidated impurities.
3.  **Standard Curve:** Prepare five concentrations of Glucogen-XR Reference Standard: 0.25, 0.50, 1.00, 1.50, and 2.00 mg/mL.

#### **6.2 Sample Preparation (Batch: GLUC-2025-XXX)**
1.  Retrieve three vials of Glucogen-XR Drug Substance from frozen storage (-80°C).
2.  Thaw at room temperature for 30 minutes.
3.  Invert gently 10 times (do not vortex to avoid protein aggregation).
4.  Dilute the sample with Diluent to a target concentration of 1.0 mg/mL.
    *   *Calculation:* $V_{sample} = (C_{target} \times V_{final}) / C_{estimated}$
5.  Filter through a 0.22 µm PVDF low-protein binding syringe filter into an HPLC vial.

#### **6.3 Injection Sequence**
| Sequence No. | Sample Description | No. of Injections |
| :--- | :--- | :--- |
| 1 | Blank (Diluent) | 2 |
| 2 | System Suitability (1.0 mg/mL Std) | 5 (RSD calculation) |
| 3 | Resolution Solution | 1 |
| 4 | Working Standard (Calibration) | 1 per level |
| 5 | Blank | 1 |
| 6 | GLUC-2025-001 (Sample A) | 2 (Brackets) |
| 7 | GLUC-2025-002 (Sample B) | 2 (Brackets) |
| 8 | Working Standard (Check) | 1 |

---

### **7. DATA ANALYSIS AND CALCULATIONS**

#### **7.1 Integration Criteria**
The peak area for Glucogen-XR is integrated from the start of the rising baseline to the return to baseline. A consistent integration window of ± 0.5 minutes relative to the reference standard retention time must be applied.

#### **7.2 System Suitability Requirements**
For the analytical run to be considered valid, the following must be met:
1.  **Repeatability:** Relative Standard Deviation (RSD) of peak areas for 5 replicate injections of the 1.0 mg/mL standard must be $\leq 1.0\%$.
2.  **Tailing Factor ($T_f$):** Must be between 0.8 and 1.5.
3.  **Theoretical Plates ($N$):** Must be $> 5000$.
4.  **Linearity:** Correlation coefficient ($R^2$) of the 5-point calibration curve must be $\geq 0.999$.

#### **7.3 Calculation Formula**
The concentration of Glucogen-XR in the sample is calculated using the linear regression equation derived from the reference standard:

$$y = mx + b$$

Where:
*   $y$ = Peak area of the sample.
*   $m$ = Slope of the calibration curve.
*   $x$ = Concentration of the sample (mg/mL).
*   $b$ = Y-intercept.

Final Concentration (Corrected for Dilution):
$$Conc_{final} = \frac{(Area_{sample} - b)}{m} \times DF$$
Where $DF$ = Dilution Factor.

---

### **8. REPRESENTATIVE DATA (BATCH RELEASE)**

The following table represents the results for the most recent production campaign of Glucogen-XR Drug Substance.

**Table 8.1: Quantitation Results for GLUC-2025 Series**

| Batch Number | Date of Analysis | Main Peak Area (counts) | Calculated Conc (mg/mL) | % of Target (50 mg/mL) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 4582910 | 50.12 | 100.2% | PASS |
| **GLUC-2025-002** | 12-JAN-2025 | 4561002 | 49.88 | 99.8% | PASS |
| **GLUC-2025-003** | 13-JAN-2025 | 4600122 | 50.31 | 100.6% | PASS |
| **GLUC-2025-004** | 14-JAN-2025 | 4555098 | 49.81 | 99.6% | PASS |

---

### **9. METHOD VALIDATION SUMMARY (FOR REFERENCE)**

#### **9.1 Specificity**
Specificity was confirmed by comparing the chromatograms of the drug substance with those of the formulation matrix (placebo). No interfering peaks were observed at the retention time of Glucogen-XR ($RT \approx 18.5$ min). Forced degradation studies (Acid, Base, Thermal, Photolytic, and Oxidative) demonstrated that the method is stability-indicating, as degradation products were resolved from the main peak.

#### **9.2 Linearity and Range**
The method was validated over a range of 0.05 mg/mL to 5.0 mg/mL (5% to 500% of nominal concentration).
*   **Slope:** 4582.1
*   **Intercept:** 124.5
*   **$R^2$:** 0.9999

#### **9.3 Intermediate Precision**
Analysis performed by two different analysts on different days using different HPLC systems (GHS-HPLC-09 vs GHS-HPLC-12) resulted in a combined RSD of 0.85%, well within the acceptance criterion of $\leq 2.0\%$.

---

### **10. CONCLUSION**
The RP-HPLC method for Glucogen-XR quantitation is robust, precise, and specific. It provides the necessary sensitivity to ensure that the drug substance meets the required concentration specifications for Google Health Sciences' Type 2 Diabetes Mellitus clinical and commercial programs.

---
**Document Approved By:**
*Dr. Althea Sterling, VP Regulatory Affairs, Google Health Sciences*
*Date: 25-FEB-2025*
*Ref: GHS-REG-3.2.S-782*

---

# Analytical Procedures - PEGylation

## PEG Content Determination

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION: ANALYTICAL PROCEDURES – PEGYLATION CHARACTERIZATION
#### DOCUMENT ID: GHS-GLUC-XR-M3-DS-ANALYTICAL-042
#### SUBJECT: PEG CONTENT DETERMINATION (QUANTITATIVE REVERSED-PHASE HPLC AND NMR SPECTROSCOPY)

---

### 1.0 INTRODUCTION AND SCOPE

The therapeutic efficacy and pharmacokinetic profile of **Glucogen-XR (glucapeptide extended-release)** are fundamentally dependent upon the precise covalent conjugation of a 40 kDa branched Polyethylene Glycol (PEG) moiety to the Lysine residue at position 26 (K26) of the synthetic glucapeptide backbone. As Glucogen-XR is a GLP-1 receptor agonist intended for once-weekly (or bi-weekly) subcutaneous administration, the determination of PEG content is a Critical Quality Attribute (CQA) that impacts drug solubility, half-life, and immunogenicity.

This document details the validated analytical procedures employed by **Google Health Sciences** for the determination of PEG content in Glucogen-XR Drug Substance (DS) and Drug Product (DP). This includes:
1.  **Quantitative Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC)** following enzymatic deconjugation.
2.  **Proton Nuclear Magnetic Resonance (1H-NMR) Spectroscopy** for molar ratio verification.
3.  **Colorimetric Barium Iodide/Ammonium Ferrothiocyanate assays** for residual free PEG quantification.

---

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES

The methodologies described herein have been developed and validated in accordance with the following regulatory frameworks:
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1225>:** Validation of Compendial Procedures.
*   **FDA Guidance for Industry:** "Liposome Drug Products: Chemistry, Manufacturing, and Controls; Human Pharmacokinetics and Bioavailability; and Labeling Documentation" (Applied by analogy for PEGylated complex molecules).
*   **USP <761>:** Nuclear Magnetic Resonance Spectroscopy.

---

### 3.0 ANALYTICAL METHOD A: REVERSED-PHASE HPLC (RP-HPLC) FOR TOTAL PEG CONTENT

#### 3.1 Principle of the Method
Since the 40 kDa branched PEG lacks a strong chromophore, direct UV detection of the conjugated moiety in the intact molecule is hindered by the peptide’s absorption. The validated approach involves the quantitative enzymatic cleavage of the PEG-peptide bond using a site-specific protease (GHS-Protease-Sigma-9), followed by the chromatographic separation of the released 40 kDa PEG from the peptide fragments. Detection is achieved via Refractive Index (RI) or Evaporative Light Scattering Detection (ELSD).

#### 3.2 Equipment and Instrumentation
*   **HPLC System:** Agilent 1290 Infinity II or Waters ACQUITY UPLC.
*   **Detector:** Agilent 1260 Infinity II Refractive Index Detector (RID) maintained at 35°C.
*   **Column:** Waters XBridge Protein BEH C4, 300Å, 3.5 µm, 4.6 mm x 150 mm.
*   **Data System:** Waters Empower 3 Chromatography Data Software (CDS).
*   **Analytical Balance:** Mettler Toledo XPR205 (Sensitivity 0.01 mg).
*   **Thermostatic Shaker:** Eppendorf ThermoMixer C.

#### 3.3 Reagents and Standards
*   **Reference Standard:** Glucogen-XR Primary Reference Standard (Batch: GHS-RS-GLUC-001).
*   **PEG Standard:** 40 kDa Branched PEG-Maleimide (Internal Grade).
*   **Mobile Phase A:** 0.1% Trifluoroacetic acid (TFA) in Water (LC-MS Grade).
*   **Mobile Phase B:** 0.085% TFA in Acetonitrile (LC-MS Grade).
*   **Digestion Buffer:** 50 mM Tris-HCl, pH 8.0.

#### 3.4 Detailed Step-by-Step Procedure

##### 3.4.1 Sample Preparation (Deconjugation Protocol)
1.  **Concentration Adjustment:** Dilute the Glucogen-XR Drug Substance to a target concentration of 2.0 mg/mL using the Digestion Buffer.
2.  **Enzyme Addition:** Add GHS-Protease-Sigma-9 at a ratio of 1:20 (w/w) to the sample.
3.  **Incubation:** Incubate the mixture at 37.0°C ± 0.5°C for 12 hours in a thermostatic shaker at 300 RPM.
4.  **Reaction Quenching:** Terminate the reaction by adding 10% TFA to achieve a final pH of 2.5.
5.  **Filtration:** Filter the sample through a 0.22 µm PVDF syringe filter into a deactivated glass HPLC vial.

##### 3.4.2 Chromatographic Conditions
| Parameter | Setting |
| :--- | :--- |
| **Flow Rate** | 1.0 mL/min |
| **Injection Volume** | 20 µL |
| **Column Temp** | 45°C ± 1°C |
| **Detector Temp (RID)** | 35°C |
| **Gradient Program** | 0-5 min: 20% B; 5-25 min: 20-80% B; 25-30 min: 80% B |

#### 3.5 Calculations
The PEG content (expressed as % w/w) is calculated using the external standard curve generated from the 40 kDa PEG reference material:

$$PEG_{content} (\% w/w) = \frac{A_{sample} \times C_{std} \times DF}{A_{std} \times C_{sample}} \times 100$$

Where:
*   $A_{sample}$ = Peak area of PEG in the sample.
*   $A_{std}$ = Peak area of PEG in the standard.
*   $C_{std}$ = Concentration of PEG standard (mg/mL).
*   $C_{sample}$ = Concentration of Glucogen-XR sample (mg/mL).
*   $DF$ = Dilution Factor.

---

### 4.0 ANALYTICAL METHOD B: 1H-NMR SPECTROSCOPY FOR MOLAR RATIO

#### 4.1 Principle
1H-NMR provides a direct, non-destructive measurement of the molar ratio between the PEG protons and the peptide backbone protons (specifically the aromatic protons of Phenylalanine, Tyrosine, and Histidine). This confirms the 1:1 stoichiometry of the conjugation.

#### 4.2 Instrumentation
*   **Spectrometer:** Bruker Avance III 600 MHz NMR Spectrometer.
*   **Probe:** 5 mm CPTCI CryoProbe.
*   **Solvent:** Deuterium Oxide (D2O, 99.9% D) with 0.05% TSP (Trimethylsilylpropanoic acid) as internal reference.

#### 4.3 Protocol
1.  **Preparation:** Dissolve 10 mg of Glucogen-XR in 0.7 mL of D2O.
2.  **Acquisition:**
    *   Pulse Sequence: `zg30`
    *   Number of Scans: 128
    *   Relaxation Delay (D1): 20 seconds (to ensure full relaxation of PEG protons)
    *   Spectral Width: 20 ppm
3.  **Integration:** Integrate the PEG methylene signal (-CH2CH2O-) at $\delta$ 3.64 ppm and the aromatic peptide signals between $\delta$ 6.5 and 8.5 ppm.

---

### 5.0 REPRESENTATIVE DATA AND BATCH ANALYSIS (GLUC-2025-XXX SERIES)

The following table summarizes the PEG content determination for three recent GMP batches of Glucogen-XR Drug Substance manufactured at the South San Francisco facility.

**Table 1: PEG Content Results for Glucogen-XR Batches**

| Batch Number | Manufacture Date | Test Date | RP-HPLC PEG (% w/w) | NMR Molar Ratio (PEG:Peptide) | Appearance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-Jan-2025 | 15-Jan-2025 | 88.4% | 1.02 : 1 | Clear, Colorless |
| **GLUC-2025-002** | 19-Jan-2025 | 22-Jan-2025 | 87.9% | 0.99 : 1 | Clear, Colorless |
| **GLUC-2025-003** | 02-Feb-2025 | 05-Feb-2025 | 88.1% | 1.00 : 1 | Clear, Colorless |
| **Specifications** | **N/A** | **N/A** | **85.0% – 92.0%** | **0.95 : 1 – 1.05 : 1** | **Report Results** |

---

### 6.0 VALIDATION SUMMARY (METHOD GHS-MET-094)

#### 6.1 Linearity and Range
The linearity of the RP-HPLC method was evaluated over a range of 50% to 150% of the nominal PEG concentration.
*   **Regression Equation:** $y = 1245.6x + 12.3$
*   **Correlation Coefficient ($R^2$):** 0.9998

#### 6.2 Precision
**Table 2: Repeatability (Intra-assay Precision) n=6**

| Injection | Measured PEG Content (%) | Deviation from Mean (%) |
| :--- | :--- | :--- |
| 1 | 88.2 | +0.1 |
| 2 | 87.9 | -0.2 |
| 3 | 88.5 | +0.4 |
| 4 | 88.1 | 0.0 |
| 5 | 87.8 | -0.3 |
| 6 | 88.1 | 0.0 |
| **Mean** | **88.1** | **RSD: 0.28%** |

#### 6.3 Accuracy (Recovery)
Recovery was assessed by spiking known amounts of 40 kDa PEG into "naked" (non-PEGylated) glucapeptide.
*   **Low Spike (80%):** 99.4% recovery
*   **Target Spike (100%):** 100.2% recovery
*   **High Spike (120%):** 99.7% recovery

---

### 7.0 PROCEDURAL NOTES AND TROUBLESHOOTING

1.  **Enzymatic Efficiency:** If deconjugation efficiency falls below 98%, as determined by the residual intact conjugate peak, the incubation time must be extended by 2-hour increments up to 18 hours.
2.  **Column Backpressure:** Due to the high viscosity of 40 kDa PEG, ensure the HPLC system is equipped with a high-pressure pump capable of sustaining 600 bar.
3.  **NMR Baseline:** Ensure a flat baseline during integration of the $\delta$ 3.64 ppm peak; use "Cubic Spline" baseline correction if necessary to avoid overestimating PEG content.

---

### 8.0 REFERENCES

1.  Google Health Sciences Standard Operating Procedure GHS-SOP-QC-442: *HPLC Analysis of Large Molecule PEGylates*.
2.  Turecek, P. L., et al. (2016). "Structure-Function Relationships of PEGylated Proteins." *Journal of Pharmaceutical Sciences*.
3.  USP <761> Nuclear Magnetic Resonance Spectroscopy, USP-NF 2024.
4.  Internal Google Cloud Life Sciences Technical Report GHS-TR-2024-089: *Validation of Deconjugation Proteolysis for Glucogen-XR*.

---
**End of Subsection**
**Authorized by:** 
*Director of Regulatory Affairs, Google Health Sciences*
*Date: 15-Feb-2025*

---

## PEG Site Occupancy

# MODULE 3: QUALITY (3.2.S DRUG SUBSTANCE)
## SECTION: 3.2.S.4 CONTROL OF DRUG SUBSTANCE
### SUBSECTION: 3.2.S.4.2 ANALYTICAL PROCEDURES
#### DOCUMENT ID: GHS-GLUC-XR-M3-DS-AN-088
---

### 1.0 INTRODUCTION: PEG SITE OCCUPANCY DETERMINATION

The structural integrity and pharmacological consistency of **Glucogen-XR (glucapeptide extended-release)** are fundamentally dependent upon the precise attachment of the 40 kDa branched Methoxy-Polyethylene Glycol (mPEG) maleimide moiety to the specific C-terminal cysteine residue (Cys-31) of the Glucogen-XR peptide backbone. 

**PEG Site Occupancy** refers to the quantitative determination of the percentage of peptide chains that have successfully undergone covalent conjugation with the PEG polymer versus those that remain unconjugated (free peptide) or are over-conjugated (multi-PEGylated species). Given the steric hindrance provided by the 40 kDa branched PEG architecture, ensuring >98.5% site occupancy is a critical quality attribute (CQA) linked directly to the drug’s pharmacokinetic (PK) profile and half-life extension.

This section details the analytical methodology, validation parameters, and historical batch data for the determination of PEG Site Occupancy using High-Performance Size Exclusion Chromatography (HP-SEC) coupled with Multi-Angle Light Scattering (MALS) and Refractive Index (RI) detection, supplemented by Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC) for residual free-peptide quantification.

---

### 2.0 ANALYTICAL METHODOLOGY: HP-SEC-MALS-RI (SOP-AN-00442)

#### 2.1 Principle of the Method
The primary method for PEG Site Occupancy utilizes the hydrodynamic volume differential between the PEGylated peptide and the native peptide. Because a 40 kDa PEG polymer possesses a significantly larger Stokes radius than the 4.2 kDa peptide backbone, SEC provides baseline resolution. 

The MALS/RI detection system allows for the "Protein Conjugate Analysis" (also known as the Three-Detector Method). By utilizing the different $dn/dc$ (refractive index increment) values for the peptide backbone ($\approx 0.185$ mL/g) and the PEG moiety ($\approx 0.135$ mL/g), the software (Astra v8.1) calculates the molecular weight of the protein and PEG components independently for every slice across the chromatographic peak.

#### 2.2 Equipment and Chromatographic Conditions

| Parameter | Specification |
| :--- | :--- |
| **HPLC System** | Waters Acquity UPLC H-Class Bio System |
| **Detector 1** | PDA (UV) at 214 nm and 280 nm |
| **Detector 2** | Wyatt DAWN HELEOS II (MALS) |
| **Detector 3** | Wyatt Optilab T-rEX (Refractive Index) |
| **Column** | Tosoh TSKgel G4000SWxl, 7.8 mm x 30 cm, 8 µm |
| **Guard Column** | TSKgel SWxl Guard Column, 6.0 mm x 4.0 cm |
| **Mobile Phase** | 50 mM Sodium Phosphate, 300 mM NaCl, 0.05% $NaN_3$, pH 7.0 |
| **Flow Rate** | 0.5 mL/min (Isocratic) |
| **Column Temp** | 25°C ± 2°C |
| **Injection Volume** | 20 µL (Target concentration 1.0 mg/mL) |
| **Run Time** | 45 minutes |

#### 2.3 Step-by-Step Analytical Protocol

1.  **System Equilibration:** Flush the SEC column with 0.1M NaOH for 30 minutes, followed by 10 column volumes of deionized water. Equilibrate with Mobile Phase for at least 3 hours until RI and MALS baselines are stable (drift < 1.0 x $10^{-7}$ RIU/hr).
2.  **Normalization and Alignment:** Inject Bovine Serum Albumin (BSA, 2 mg/mL) to normalize MALS detector gains and align the peak offsets between UV, MALS, and RI detectors.
3.  **Sample Preparation:** Dilute Glucogen-XR Drug Substance (DS) or Drug Product (DP) to 1.0 mg/mL using the mobile phase. Filter through a 0.22 µm PVDF low-protein binding filter.
4.  **Data Acquisition:** Inject samples in triplicate.
5.  **Data Processing:** 
    *   Define the $dn/dc$ for the Glucogen-XR peptide ($dn/dc_p = 0.187$) and PEG ($dn/dc_{peg} = 0.134$).
    *   Apply the "Conjugate Analysis" template in Astra Software.
    *   Integrate the main peak (PEGylated species) and any low-molecular-weight (LMW) peaks (unconjugated peptide).

---

### 3.0 CALCULATIONS AND ACCEPTANCE CRITERIA

#### 3.1 Calculation of PEG Occupancy (%)
The occupancy is calculated by comparing the mass fraction of the PEGylated peptide peak to the total mass detected (PEGylated + Unconjugated).

$$Occupancy (\%) = \left( \frac{Area_{PEG-Peptide}}{Area_{PEG-Peptide} + Area_{Free-Peptide}} \right) \times 100$$

*Note: For MALS-based calculations, the "Mass Recovery" function is used to ensure all injected material is accounted for.*

#### 3.2 Molar Ratio Determination
The molar ratio ($M_{ratio}$) of PEG to peptide is derived from the calculated molecular weights of each component:

$$M_{ratio} = \frac{MW_{observed\_PEG} / MW_{theoretical\_PEG}}{MW_{observed\_Peptide} / MW_{theoretical\_Peptide}}$$

The theoretical molar ratio for Glucogen-XR is **1.0**.

#### 3.3 Acceptance Criteria
| Attribute | Specification |
| :--- | :--- |
| **Mono-PEGylated Glucogen-XR** | $\ge$ 98.5% |
| **Free (Unconjugated) Peptide** | $\le$ 1.0% |
| **Multi-PEGylated Species** | $\le$ 0.5% |

---

### 4.0 REPRESENTATIVE BATCH DATA (SITE OCCUPANCY)

The following table summarizes the PEG Site Occupancy results for recent GMP batches of Glucogen-XR Drug Substance manufactured at the Google Health Sciences South San Francisco facility.

**Table 4.1: Batch Analysis for PEG Site Occupancy (Process Validation Batches)**

| Batch Number | Mfg Date | Scale | PEG Occupancy (%) | Free Peptide (%) | Multi-PEG (%) | Molar Ratio | Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 2000L | 99.42 | 0.38 | 0.20 | 1.01 | Pass |
| GLUC-2025-002 | 28-JAN-2025 | 2000L | 99.15 | 0.62 | 0.23 | 0.99 | Pass |
| GLUC-2025-003 | 15-FEB-2025 | 2000L | 99.60 | 0.25 | 0.15 | 1.00 | Pass |
| GLUC-2025-004 | 02-MAR-2025 | 2000L | 98.98 | 0.82 | 0.20 | 1.02 | Pass |
| GLUC-2025-005 | 18-MAR-2025 | 2000L | 99.27 | 0.44 | 0.29 | 1.00 | Pass |
| **Mean** | - | - | **99.28** | **0.50** | **0.21** | **1.00** | - |
| **RSD (%)** | - | - | **0.24** | **45.2** | **23.8** | **1.14** | - |

---

### 5.0 ORTHOGONAL CHARACTERIZATION: RP-HPLC METHOD (SOP-AN-00450)

To ensure the sensitivity of the SEC-MALS method, Google Health Sciences employs an orthogonal RP-HPLC method specifically optimized for the detection of trace unconjugated peptides.

#### 5.1 Chromatographic Conditions (RP-HPLC)
*   **Column:** Agilent Zorbax 300SB-C18, 4.6 x 250 mm, 5 µm.
*   **Mobile Phase A:** 0.1% TFA in Water.
*   **Mobile Phase B:** 0.08% TFA in Acetonitrile.
*   **Gradient:** 30% B to 60% B over 40 minutes.
*   **Rationale:** The PEG moiety significantly shifts the retention time of the peptide. The unconjugated Glucogen-XR peptide elutes at approx. 18.5 mins, while the PEGylated species elutes at 28.2 mins.

#### 5.2 Limit of Detection (LOD) and Quantitation (LOQ)
Validation according to **ICH Q2(R1)** demonstrates high sensitivity for the unconjugated species:
*   **LOD:** 0.02% (w/w)
*   **LOQ:** 0.05% (w/w)

---

### 6.0 REGULATORY COMPLIANCE AND GUIDELINES

The determination of PEG Site Occupancy for Glucogen-XR is performed in accordance with the following regulatory frameworks:
1.  **FDA Guidance for Industry:** *Purity Considerations for the Design of Peptide and Polymeric Formulations (2023 Update).*
2.  **USP <129>:** *Analytical Procedures for Recombinant Therapeutic Proteins.*
3.  **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
4.  **USP <788>:** *Particulate Matter in Injections* (Indirectly related via PEG solubility).

---

### 7.0 DEGRADATION STUDIES AND IMPACT ON SITE OCCUPANCY

#### 7.1 De-PEGylation Stress Study (Batch GLUC-2025-001)
To validate the stability of the thioether bond between the Cys-31 and the maleimide-PEG, samples were subjected to accelerated pH and temperature stress.

**Table 7.1: Forced Degradation Results**

| Condition | Duration | PEG Occupancy (%) | Observation |
| :--- | :--- | :--- | :--- |
| **Control (5°C)** | T=0 | 99.42 | Baseline |
| **pH 9.0 (40°C)** | 7 Days | 96.15 | Significant Maleimide hydrolysis (Ring Opening) |
| **pH 2.0 (40°C)** | 7 Days | 98.88 | Minimal de-PEGylation |
| **H2O2 (0.3%)** | 24 Hours | 99.30 | Oxidation of Met, no loss of PEG |

*Conclusion:* The C-terminal PEG linkage is highly stable under physiological and slightly acidic conditions. Ring opening of the succinimide (formed post-conjugation) actually stabilizes the linkage against retro-Michael reactions, as confirmed by LC-MS/MS peptide mapping.

---

### 8.0 SUMMARY OF ANALYTICAL CONTROL STRATEGY

The control of PEG Site Occupancy for Glucogen-XR is a multi-layered approach:
*   **In-Process Control (IPC):** Monitoring of the conjugation reaction completion via IPC-SEC at the 120-minute mark.
*   **Release Testing:** HP-SEC-MALS-RI for absolute mass determination and RP-HPLC for residual peptide quantification.
*   **Stability Testing:** Annual monitoring of site occupancy to ensure no "leaky" PEG release occurs during the 24-month shelf life.

**Approved By:**
*Dr. Alistair Waymo, Head of Quality Control*
*Google Health Sciences, a Division of Google Cloud Life Sciences*
*3000 Innovation Drive, South San Francisco, CA*

---

## Free PEG Quantitation

### **3.2.S.4.2 ANALYTICAL PROCEDURES – PEGYLATION**
#### **Subsection: 3.2.S.4.2.14 Free PEG Quantitation in Glucogen-XR (glucapeptide extended-release)**

---

### **1.0 SCOPE AND APPLICATION**

This section describes the validated analytical procedure for the identification and quantification of residual, non-conjugated methoxy-polyethylene glycol (mPEG) and related free PEG species in the Drug Substance (DS) of Glucogen-XR. Glucogen-XR is a recombinant GLP-1 receptor agonist peptide site-specifically conjugated to a 40 kDa branched mPEG-maleimide moiety.

The presence of free PEG (unreacted starting material or degradation products) must be strictly controlled to ensure the consistency of the pharmacokinetic (PK) profile and to mitigate potential immunogenic risks associated with high levels of non-conjugated polymers. This procedure utilizes High-Performance Liquid Chromatography (HPLC) coupled with Refractive Index Detection (RID) or Evaporative Light Scattering Detection (ELSD) following a selective protein precipitation step.

**Regulatory Compliance Statement:**
This procedure has been developed and validated in accordance with:
*   **ICH Q2(R1):** Validation of Analytical Procedures.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1055>:** Biotechnology-Derived Articles—Polymer-Based Drug Delivery Systems.
*   **USP <1225>:** Validation of Compendial Procedures.

---

### **2.0 PRINCIPLE OF THE METHOD**

The quantitative determination of free PEG in Glucogen-XR is challenging due to the structural similarity between the free polymer and the PEGylated peptide. To achieve accurate quantitation, the proteinaceous component (the glucapeptide) must be removed to prevent co-elution and interference.

1.  **Protein Precipitation:** The drug substance sample is treated with a specific concentration of Trichloroacetic Acid (TCA) or Acetonitrile (ACN) to induce denaturation and precipitation of the PEGylated peptide and any unreacted peptide.
2.  **Centrifugation/Filtration:** The precipitate is removed via high-speed centrifugation, leaving the highly soluble free mPEG in the supernatant.
3.  **Chromatographic Separation:** The supernatant is analyzed via Size Exclusion Chromatography (SEC) or Reversed-Phase HPLC (RP-HPLC). The stationary phase is selected to resolve the 40 kDa branched PEG from low-molecular-weight PEG fragments and residual reagents.
4.  **Detection:** Since PEG lacks a significant UV chromophore, Refractive Index (RI) detection is utilized for universal mass-based detection.

---

### **3.0 EQUIPMENT AND REAGENTS**

#### **3.1 Equipment Specifications**
All equipment must be qualified under Google Health Sciences (GHS) IQ/OQ/PQ protocols.

| Equipment ID | Description | Specification/Model |
| :--- | :--- | :--- |
| **GHS-HPLC-09** | HPLC System | Agilent 1260 Infinity II with Isocratic Pump |
| **GHS-RID-04** | Detector | Agilent 1260 Refractive Index Detector (Thermostated) |
| **GHS-COL-882** | Analytical Column | Shodex OHpak SB-804 HQ (8.0 mm ID x 300 mm) |
| **GHS-CENT-12** | Centrifuge | Eppendorf 5424R (Refrigerated) |
| **GHS-VORT-02** | Vortex Mixer | Digital Vortex-Genie 2 |
| **GHS-BAL-05** | Analytical Balance | Mettler Toledo XPR205 (d=0.01 mg) |

#### **3.2 Reagents and Standards**
| Reagent Name | Grade | Manufacturer | Part Number |
| :--- | :--- | :--- | :--- |
| **mPEG-Maleimide (40kDa)** | GMP Grade | NOF Corporation | Sunbright® GL2-400MA |
| **Acetonitrile (ACN)** | HPLC Grade | Fisher Scientific | A998-4 |
| **Trichloroacetic Acid (TCA)** | ACS Grade | Sigma-Aldrich | T6399 |
| **Milli-Q Water** | 18.2 MΩ·cm | In-house System | N/A |
| **Sodium Phosphate** | USP Grade | BioPharma | 106580 |

---

### **4.0 PREPARATION OF SOLUTIONS AND STANDARDS**

#### **4.1 Mobile Phase Preparation (0.1M Sodium Phosphate, pH 7.0)**
1.  Dissolve 14.2 g of anhydrous Na₂HPO₄ in 950 mL of Milli-Q water.
2.  Adjust pH to 7.0 ± 0.05 using 1.0 M Phosphoric Acid.
3.  Filter through a 0.22 µm PES membrane filter.
4.  Degas via sonication for 20 minutes prior to use.

#### **4.2 Standard Curve Preparation (Free mPEG-Mal 40kDa)**
The reference standard is the same mPEG-maleimide lot used in the conjugation reaction of Glucogen-XR.

| Standard Level | Concentration (µg/mL) | Preparation Method |
| :--- | :--- | :--- |
| **STD 1** | 500.0 | 50 mg PEG into 100 mL Mobile Phase |
| **STD 2** | 250.0 | 1:1 dilution of STD 1 |
| **STD 3** | 100.0 | 2:5 dilution of STD 1 |
| **STD 4** | 50.0 | 1:2 dilution of STD 3 |
| **STD 5 (LLOQ)** | 10.0 | 1:5 dilution of STD 4 |

---

### **5.0 SAMPLE PREPARATION PROTOCOL**

To ensure maximum recovery of free PEG, the following precipitation protocol must be followed strictly.

**Procedure GHS-SOP-PEG-042:**
1.  **Sample Dilution:** Dilute the Glucogen-XR Drug Substance to a protein concentration of 10.0 mg/mL using Mobile Phase.
2.  **Precipitation:** Transfer 500 µL of the diluted sample into a 1.5 mL microcentrifuge tube. Add 500 µL of 20% (w/v) TCA solution.
3.  **Incubation:** Vortex for 30 seconds. Incubate at 4°C for 60 minutes to ensure complete precipitation of the PEG-peptide conjugate.
4.  **Phase Separation:** Centrifuge at 15,000 x g for 20 minutes at 4°C.
5.  **Collection:** Carefully aspirate the supernatant (containing free PEG).
6.  **Neutralization:** Adjust supernatant to pH 7.0 using 2M NaOH (approximately 50-100 µL required).
7.  **Final Filtration:** Filter through a 0.22 µm PVDF centrifugal filter.

---

### **6.0 CHROMATOGRAPHIC CONDITIONS**

| Parameter | Setting |
| :--- | :--- |
| **Flow Rate** | 0.8 mL/min (Isocratic) |
| **Injection Volume** | 50 µL |
| **Column Temperature** | 40°C ± 1°C |
| **RID Temperature** | 40°C (must match column) |
| **Run Time** | 35 minutes |
| **Needle Wash** | 50% Methanol |

---

### **7.0 DATA ANALYSIS AND CALCULATIONS**

#### **7.1 Calibration Curve**
Construct a linear regression of the Peak Area (y) versus Concentration (x) of the mPEG standards.
$$y = mx + b$$
The correlation coefficient ($R^2$) must be $\ge 0.995$.

#### **7.2 Calculation of Free PEG in Sample**
The concentration of free PEG in the supernatant ($C_{super}$) is calculated from the regression equation. The percentage of free PEG relative to the total PEGylated peptide is determined as follows:

$$\% \text{Free PEG (w/w)} = \left( \frac{C_{super} \times DF \times V_{final}}{W_{sample}} \right) \times 100$$

Where:
*   $DF$ = Dilution factor from precipitation (typically 2.0).
*   $V_{final}$ = Final volume of sample.
*   $W_{sample}$ = Total weight of Glucogen-XR in the sample.

---

### **8.0 REPRESENTATIVE BATCH DATA (VALIDATION PHASE)**

The following table summarizes results from recent GMP batches of Glucogen-XR manufactured at the South San Francisco facility.

**Table 1: Free PEG Analysis for Glucogen-XR Process Validation Batches**

| Batch Number | Date of Analysis | Total Protein (mg/mL) | Free PEG Found (µg/mL) | % Free PEG (w/w) | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 10.02 | 45.2 | 0.45% | 98.2 |
| **GLUC-2025-002** | 15-JAN-2025 | 9.98 | 38.9 | 0.39% | 97.5 |
| **GLUC-2025-003** | 19-JAN-2025 | 10.05 | 42.1 | 0.42% | 99.1 |
| **GLUC-2025-004** | 22-JAN-2025 | 10.00 | 51.0 | 0.51% | 96.8 |
| **GLUC-2025-005** | 02-FEB-2025 | 10.01 | 35.4 | 0.35% | 98.7 |

*Acceptance Criterion: Free PEG $\le$ 2.0% (w/w) of total peptide.*

---

### **9.0 METHOD VALIDATION SUMMARY**

#### **9.1 Specificity**
Specificity was demonstrated by injecting a blank (TCA-precipitated buffer), the 40 kDa mPEG standard, and a "spiked" DS sample. No interference was observed at the retention time of the mPEG peak (approx. 14.5 minutes).

#### **9.2 Linearity and Range**
The method is linear from 5.0 µg/mL to 1000 µg/mL.
*   **Equation:** $y = 1245.2x + 102.3$
*   **$R^2$:** 0.9998

#### **9.3 Precision**
*   **Repeatability (n=6):** RSD = 1.2%
*   **Intermediate Precision (2 days, 2 analysts):** RSD = 2.4%

#### **9.4 Accuracy (Recovery)**
Spiking experiments were performed at 50%, 100%, and 150% of the target limit (2.0%).

| Spike Level | Expected (µg/mL) | Observed (µg/mL) | % Recovery |
| :--- | :--- | :--- | :--- |
| 0.5% Spike | 50.0 | 49.1 | 98.2% |
| 1.0% Spike | 100.0 | 101.5 | 101.5% |
| 2.0% Spike | 200.0 | 197.8 | 98.9% |

---

### **10.0 SYSTEM SUITABILITY CRITERIA**

For any GMP release assay to be valid, the following criteria must be met:
1.  **Tailing Factor ($T$):** The mPEG peak must have a tailing factor $\le 1.5$.
2.  **Theoretical Plates ($N$):** $N \ge 5,000$ for the mPEG peak.
3.  **Relative Standard Deviation (RSD):** RSD of peak areas for five replicate injections of STD 3 must be $\le 2.0\%$.
4.  **Blank Check:** No peaks $>$ LOD at the retention time of mPEG in the mobile phase blank.

---

### **11.0 REFERENCES**
1.  Google Health Sciences Analytical Method Validation Report **VAL-GLUC-PEG-2024**.
2.  *Journal of Pharmaceutical Sciences*, "Quantitation of Free PEG in PEGylated Proteins by HPLC-RID," Vol. 98, No. 12.
3.  FDA Guidance for Industry: *Analytical Procedures and Methods Validation for Drugs and Biologics* (2015).
4.  ICH Q2(R1) *Validation of Analytical Procedures: Text and Methodology*.

---

# Analytical Procedures - General Properties

## pH Measurement

# MODULE 3: QUALITY (3.2.S.4.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: ANALYTICAL PROCEDURES – GENERAL PROPERTIES
### SUBSECTION: pH MEASUREMENT (SOP-GHS-AN-0822-PH)

---

#### 1.0 SCOPE AND APPLICABILITY
This analytical procedure describes the potentiometric determination of pH for Glucogen-XR (glucapeptide extended-release) drug substance (DS). This procedure is applicable to the characterization, release, and stability testing of Glucogen-XR bulk drug substance manufactured by Google Health Sciences (GHS). The method is designed to ensure the physiochemical stability of the GLP-1 receptor agonist peptide, as the solubility and aggregation kinetics of the proprietary glucapeptide sequence are highly sensitive to hydronium ion concentration.

This procedure adheres strictly to the requirements set forth in:
*   **USP <791> pH**: Potentiometric determination.
*   **Ph. Eur. 2.2.3**: Potentiometric determination of pH.
*   **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q2(R1)**: Validation of Analytical Procedures.

#### 2.0 PRINCIPLE OF THE METHOD
The pH is defined as the negative logarithm (base 10) of the activity of the hydrogen ion ($a_{H^+}$). For the Glucogen-XR drug substance, which is formulated in a complex proteinaceous matrix, the measurement is performed using a glass-combination electrode. 

The potential difference ($E$) between the glass electrode and a reference electrode is measured by a high-impedance voltmeter (pH meter). The relationship between the potential and the pH is governed by the Nernst equation:

$$E = E_0 + \frac{2.303 RT}{nF} \log a_{H^+}$$

Where:
*   $E_0$ = Standard potential of the electrode system.
*   $R$ = Universal gas constant ($8.314\, \text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$).
*   $T$ = Absolute temperature in Kelvin.
*   $n$ = Ion charge (for $H^+$, $n=1$).
*   $F$ = Faraday constant ($9.648 \times 10^4\, \text{C}\cdot\text{mol}^{-1}$).

At 25°C ($298.15\,\text{K}$), the theoretical Nernstian slope is $59.16\,\text{mV}$ per pH unit.

#### 3.0 EQUIPMENT AND INSTRUMENTATION
The following equipment (or equivalent) is qualified for use in the GHS South San Francisco facility (Building 3000):

##### 3.1 pH Meter Specifications
*   **Manufacturer**: Metrohm / Mettler Toledo (Integrated with Google Cloud Life Sciences LIMS).
*   **Model**: SevenExcellence S400 or Titrando 905.
*   **Input Impedance**: $> 10^{12}\,\Omega$.
*   **Resolution**: $0.001\,\text{pH}$ units.
*   **Accuracy**: $\pm 0.002\,\text{pH}$ units.
*   **Temperature Compensation**: Automatic Temperature Compensation (ATC) via Pt1000 probe.

##### 3.2 Electrode Specifications
*   **Type**: Semi-micro combination glass electrode with integrated temperature sensor.
*   **Diaphragm**: Movable sleeve or ceramic frit (to prevent clogging by peptide aggregates).
*   **Electrolyte**: $3\,\text{M}\,\, \text{KCl}$ (Bridge electrolyte: $1\,\text{M}\,\, \text{LiCl}$ in ethanol if measuring organic-aqueous intermediates, though standard $3\,\text{M}\,\, \text{KCl}$ is used for final DS).
*   **Equipment ID Reference**: GHS-EQP-PH-044 through GHS-EQP-PH-060.

#### 4.0 REAGENTS AND STANDARDS
All reagents must be of ACS Reagent Grade or higher.

| Reagent/Standard | Grade | Manufacturer | Part Number |
| :--- | :--- | :--- | :--- |
| pH 4.01 Buffer (Phthalate) | NIST Traceable | Thermo Scientific | 910104 |
| pH 7.00 Buffer (Phosphate) | NIST Traceable | Thermo Scientific | 910107 |
| pH 10.01 Buffer (Carbonate) | NIST Traceable | Thermo Scientific | 910110 |
| Potassium Chloride ($3\,\text{M}$) | Reagent Grade | Sigma-Aldrich | P9541 |
| Deionized (DI) Water | Type I ($18.2\,\text{M}\Omega\cdot\text{cm}$) | In-house (Millipore) | N/A |
| Electrode Cleaning Soln | Pepsin/HCl | Mettler Toledo | 51350100 |

#### 5.0 CALIBRATION AND STANDARDIZATION PROTOCOL
Calibration must be performed daily or prior to each use. A three-point calibration is mandatory for Glucogen-XR DS testing to ensure linearity across the target range (pH 5.5 to 7.5).

##### 5.1 Procedure
1.  Verify the electrode is clean and the electrolyte level is adequate.
2.  Rinse the electrode with Type I DI water and blot dry with lint-free tissue (Kimwipe). **Note: Do not rub the glass bulb to avoid static charge buildup.**
3.  Immerse the electrode in the pH 7.00 buffer. Wait for stabilization.
4.  Standardize the meter.
5.  Repeat the process for pH 4.01 and pH 10.01 buffers.
6.  The pH meter software automatically calculates the slope ($S$).

##### 5.2 Acceptance Criteria for Calibration
*   **Slope ($S$)**: $95\% \leq S \leq 105\%$ (Theoretical: $59.16\,\text{mV/pH}$ at 25°C).
*   **Offset ($E_0$ at pH 7.0)**: $\pm 15\,\text{mV}$.
*   **Correlation Coefficient ($r^2$)**: $\geq 0.999$.

#### 6.0 ANALYTICAL PROCEDURE (STEP-BY-STEP)

**Step 1: Sample Preparation**
Glucogen-XR Drug Substance is typically supplied at a concentration of $20\,\text{mg/mL}$ in a formulated buffer. No dilution is required for pH measurement as per USP <791>.
*   Ensure the sample has reached thermal equilibrium ($25 \pm 2^\circ\text{C}$).
*   Aliquot $5\,\text{mL}$ of the DS into a clean, dry $10\,\text{mL}$ beaker.

**Step 2: Measurement**
1.  Rinse the calibrated electrode with DI water, then with a small portion of the sample.
2.  Submerge the electrode into the sample beaker.
3.  Engage moderate stirring using a magnetic stir bar (Teflon-coated, $10\,\text{mm}$) to ensure homogeneity. Avoid creating a vortex.
4.  Allow the reading to stabilize. Stabilization is defined as a change of $< 0.005\,\text{pH}$ units over 30 seconds.
5.  Record the pH value to two decimal places and the temperature.

**Step 3: Verification**
After the sample measurement, rinse the electrode and measure the pH 7.00 buffer as a check standard. The reading must be within $\pm 0.05\,\text{pH}$ units of the certified value.

#### 7.0 REPRESENTATIVE DATA: BATCH RELEASE ANALYSIS
The following table summarizes the pH measurement results for recent GMP batches of Glucogen-XR DS.

**Table 1: pH Measurement Results for Glucogen-XR DS Batches (GLUC-2025 series)**

| Batch Number | Date of Analysis | Replicate 1 | Replicate 2 | Mean pH | Temp (°C) | Result (Pass/Fail) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 6.52 | 6.51 | 6.52 | 24.9 | Pass |
| GLUC-2025-002 | 19-JAN-2025 | 6.48 | 6.49 | 6.49 | 25.1 | Pass |
| GLUC-2025-003 | 02-FEB-2025 | 6.55 | 6.54 | 6.55 | 25.0 | Pass |
| GLUC-2025-004 | 15-FEB-2025 | 6.50 | 6.50 | 6.50 | 24.8 | Pass |
| GLUC-2025-005 | 01-MAR-2025 | 6.47 | 6.48 | 6.48 | 25.2 | Pass |
| GLUC-2025-006 | 14-MAR-2025 | 6.53 | 6.53 | 6.53 | 25.0 | Pass |

*Acceptance Criteria: pH 6.2 - 6.8*

#### 8.0 METHOD VALIDATION SUMMARY
The pH measurement method was validated according to ICH Q2(R1).

##### 8.1 Accuracy and Precision
Six replicates of Batch GLUC-2025-001 were measured by two different analysts over three days.

**Table 2: Intermediate Precision Data**

| Analyst | Day | Mean pH ($n=3$) | Std. Dev. | % RSD |
| :--- | :--- | :--- | :--- | :--- |
| Analyst A | 1 | 6.512 | 0.008 | 0.12% |
| Analyst B | 1 | 6.520 | 0.011 | 0.17% |
| Analyst A | 2 | 6.515 | 0.005 | 0.08% |
| Analyst B | 2 | 6.518 | 0.009 | 0.14% |

**Overall Intermediate Precision RSD**: $0.15\%$.

##### 8.2 Robustness
The method was evaluated for robustness by varying the sample temperature ($\pm 2^\circ\text{C}$) and stirring speed.

| Variable | Deviation | Measured pH | Difference |
| :--- | :--- | :--- | :--- |
| Temperature | 23.0°C | 6.54 | +0.02 |
| Temperature | 27.0°C | 6.49 | -0.03 |
| Stir Speed | 100 RPM | 6.52 | 0.00 |
| Stir Speed | 500 RPM | 6.51 | -0.01 |

#### 9.0 MAINTENANCE AND TROUBLESHOOTING
1.  **Electrode Fouling**: Due to the peptide nature of Glucogen-XR, the glass membrane may acquire a protein film. If response time exceeds 60 seconds, soak the electrode in $0.1\,\text{M}\,\, \text{HCl}$ containing $1\%\, \text{pepsin}$ for 1 hour.
2.  **Storage**: Always store the electrode in $3\,\text{M}\,\, \text{KCl}$ storage solution. Never store in DI water.
3.  **LIMS Integration**: All pH measurements are automatically uploaded to the Google Cloud Life Sciences Vertex AI Quality Suite for real-time trend monitoring and out-of-specification (OOS) alerts.

#### 10.0 REFERENCES
1. United States Pharmacopeia (USP), Chapter <791>, "pH."
2. European Pharmacopoeia (Ph. Eur.), Chapter 2.2.3, "Potentiometric Determination of pH."
3. Google Health Sciences Internal Quality Manual: GHS-QM-2025-01.
4. "Peptide Formulation Stability and the Impact of pH," *Journal of Pharmaceutical Sciences*, Vol. 112, 2024.

---
**END OF SECTION**

---

## Osmolality

### **Module 3: Quality - 3.2.S.4 Control of Drug Substance**
### **Section: 3.2.S.4.2 Analytical Procedures**
### **Subsection: 2.1.8 Osmolality Determination**

---

#### **2.1.8.1 Objective and Scope**
The objective of this analytical procedure is to provide a standardized, validated method for the determination of the osmolality of Glucogen-XR (glucapeptide extended-release) drug substance. Osmolality is a critical quality attribute (CQA) for the drug substance, as it ensures the tonicity of the final formulation is within physiological limits and serves as a primary indicator of batch-to-batch consistency regarding solute concentration, including the active pharmaceutical ingredient (API), buffering agents, and cryoprotectants.

This procedure applies to all batches of Glucogen-XR manufactured by Google Health Sciences at the South San Francisco facility (3000 Innovation Drive). The method utilizes the principle of Freezing Point Depression (FPD) in accordance with **United States Pharmacopeia (USP) General Chapter <785> Osmolality and Osmolarity** and **European Pharmacopoeia (Ph. Eur.) 2.2.35**.

---

#### **2.1.8.2 Regulatory Alignment and Standards**
The determination of osmolality for Glucogen-XR is performed under strict adherence to the following regulatory guidelines and industry standards:
1.  **USP <785>**: Providing the foundational methodology for freezing point depression.
2.  **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **ICH Q2(R1)**: Validation of Analytical Procedures: Text and Methodology.
4.  **21 CFR Part 211.165**: Testing and release for distribution.
5.  **ISO 17025**: General requirements for the competence of testing and calibration laboratories.

---

#### **2.1.8.3 Principles of the Procedure (Freezing Point Depression)**
Osmolality is a measure of the number of osmoles of solute per kilogram of solvent (mOsm/kg). For Glucogen-XR, which is a peptide-based biologic, the freezing point of the solution is lower than that of pure water. This depression ($\Delta T_f$) is directly proportional to the molal concentration of the solutes.

The relationship is defined by the following equation:
$$Osmolality = \frac{\Delta T_f}{K_f}$$
Where:
*   $\Delta T_f$ = Freezing point depression (calculated as $T_{pure\_solvent} - T_{solution}$).
*   $K_f$ = Cryoscopic constant of the solvent (for water, $K_f = 1.86 \text{ K}\cdot\text{kg}/\text{mol}$).

The instrument (Advanced Instruments OsmoTech XT or equivalent) utilizes a high-precision thermistor to sense the sample temperature. The sample is supercooled below its freezing point; a physical pulse (vibration) induces crystallization, and the heat of fusion released causes the temperature to rise to a plateau, which represents the true freezing point of the solution.

---

#### **2.1.8.4 Equipment and Instrumentation**
The following equipment is qualified for use in the Google Health Sciences Quality Control (QC) laboratory:

| Equipment ID | Manufacturer | Model | Description | Last Qualification |
| :--- | :--- | :--- | :--- | :--- |
| **EQ-OSM-001** | Advanced Instruments | OsmoTech XT | Single-Sample Micro-Osmometer | 12-JAN-2025 |
| **EQ-OSM-002** | Advanced Instruments | OsmoTech PRO | Multi-Sample Osmometer | 15-JAN-2025 |
| **EQ-PIP-102** | Rainin | L-200XLS+ | Manual Pipette (20-200 µL) | 02-FEB-2025 |
| **EQ-BAL-045** | Mettler Toledo | XPR205 | Analytical Balance | 10-JAN-2025 |

---

#### **2.1.8.5 Reagents and Reference Standards**
All standards must be NIST-traceable and used within their expiration dates.

| Reagent/Standard | Catalog Number | Lot Number | Target Value (mOsm/kg) |
| :--- | :--- | :--- | :--- |
| Osmolality Standard | 3MA005 | 240115A | 50 mOsm/kg H₂O |
| Osmolality Standard | 3MA029 | 240210B | 290 mOsm/kg H₂O |
| Osmolality Standard | 3MA085 | 240120C | 850 mOsm/kg H₂O |
| Clinitrol™ 290 Ref | 3LA029 | 231155D | 290 mOsm/kg H₂O |
| Deionized (DI) Water | N/A | Lab-Gen-01 | 0 mOsm/kg H₂O |

---

#### **2.1.8.6 Detailed Analytical Protocol**

##### **Step 1: Instrument Preparation and System Suitability**
1.  Power on the OsmoTech XT (EQ-OSM-001) and allow a warm-up period of 30 minutes.
2.  Perform a "Probe Clean" cycle using lint-free wipes and DI water.
3.  **Calibration Verification**:
    *   Test a 0 mOsm/kg standard (DI Water).
    *   Test a 290 mOsm/kg reference standard (Clinitrol).
    *   **Acceptance Criteria**: The 290 mOsm/kg standard must read $290 \pm 2$ mOsm/kg. If outside this range, a full 3-point calibration is required.

##### **Step 2: Sample Preparation (Glucogen-XR DS)**
1.  Retrieve Glucogen-XR Drug Substance (e.g., Batch **GLUC-2025-001**) from $-80^\circ\text{C}$ storage.
2.  Thaw at room temperature ($20\text{--}25^\circ\text{C}$) for approximately 60 minutes. Do not vortex; gently invert 10 times to ensure homogeneity.
3.  Inspect for particulates. If present, consult the Principal Investigator (PI).
4.  Aspirate 20 µL of the sample using a calibrated micropipette (EQ-PIP-102).

##### **Step 3: Measurement Procedure**
1.  Place the 20 µL sample into a clean, disposable sample tip.
2.  Lower the sampling head into the cooling chamber.
3.  Initiate the measurement cycle. The instrument will:
    *   Cool the sample to the supercooled state.
    *   Initiate the "Freeze Pulse."
    *   Monitor the heat of fusion plateau.
    *   Display the result in mOsm/kg H₂O.
4.  Record the result and repeat the measurement in triplicate ($n=3$).

---

#### **2.1.8.7 Data Management and Statistical Calculation**
The final reported value for a batch is the mean of the triplicate injections.

**Formulas:**
1.  **Mean ($\bar{x}$):**
    $$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$
2.  **Standard Deviation (SD):**
    $$SD = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}}$$
3.  **Relative Standard Deviation (%RSD):**
    $$\%RSD = \left(\frac{SD}{\bar{x}}\right) \times 100$$

**System Suitability Acceptance Criteria:**
*   %RSD of triplicate samples must be $\leq 2.0\%$.
*   Reference standard (290 mOsm/kg) drift must be $< 1\%$.

---

#### **2.1.8.8 Historical Batch Data (Developmental and Clinical Batches)**
The following table summarizes the osmolality results for recent Glucogen-XR Drug Substance batches, demonstrating the stability of the manufacturing process at the Google Health Sciences facility.

**Table 2.1.8-1: Glucogen-XR Batch Osmolality Results**

| Batch Number | Manufacture Date | Test Date | Result 1 (mOsm) | Result 2 (mOsm) | Result 3 (mOsm) | Mean (mOsm/kg) | %RSD |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 05-JAN-2025 | 07-JAN-2025 | 302 | 304 | 303 | **303.0** | 0.33% |
| **GLUC-2025-002** | 12-JAN-2025 | 14-JAN-2025 | 298 | 300 | 299 | **299.0** | 0.33% |
| **GLUC-2025-003** | 19-JAN-2025 | 21-JAN-2025 | 305 | 307 | 306 | **306.0** | 0.33% |
| **GLUC-2025-004** | 02-FEB-2025 | 04-FEB-2025 | 301 | 301 | 302 | **301.3** | 0.19% |
| **GLUC-2025-005** | 09-FEB-2025 | 11-FEB-2025 | 310 | 308 | 309 | **309.0** | 0.32% |
| **GLUC-2025-006** | 16-FEB-2025 | 18-FEB-2025 | 304 | 305 | 304 | **304.3** | 0.19% |

---

#### **2.1.8.9 Method Validation Summary (Report VAL-GLUC-OSM-2024)**
The method was validated according to ICH Q2(R1) guidelines.

1.  **Accuracy**: Evaluated using 3 levels of NIST standards (50, 290, 850 mOsm/kg). Recovery was between 99.2% and 100.8%.
2.  **Precision (Repeatability)**: Ten replicates of batch GLUC-2025-001 showed a %RSD of 0.25%.
3.  **Intermediate Precision**: Two different analysts on two different days using two different instruments (EQ-OSM-001 and EQ-OSM-002) showed a cumulative %RSD of 0.48%.
4.  **Linearity**: Demonstrated from 0 to 2000 mOsm/kg with a correlation coefficient ($R^2$) of 0.9999.
5.  **Robustness**: Small variations in sample volume (18 µL vs 22 µL) did not significantly impact the result (p > 0.05).

---

#### **2.1.8.10 Specifications and Justification**
The specification for Glucogen-XR Drug Substance osmolality is set at **280 – 330 mOsm/kg**.

*   **Justification**: This range is chosen to ensure isotonicity with human plasma (approx. 285-295 mOsm/kg) upon final formulation, minimizing injection site reaction and pain. The range also accounts for the concentration of the GHS-CHO-001 cell-line derived peptide and the specific molarity of the phosphate-citrate buffer system used in the extended-release matrix.

---
**End of Subsection 2.1.8**

---

## Appearance and Clarity

### **Module 3: Quality**
#### **Section 3.2.S.4.2: Analytical Procedures – General Properties**
#### **Subsection: 3.2.S.4.2.1: Appearance and Clarity**

---

### **1.0 Introduction and Scope**

This section describes the validated analytical procedures for the determination of the appearance, clarity, and degree of opalescence of Glucogen-XR (glucapeptide extended-release) Drug Substance (DS). These procedures ensure that the physical characteristics of the drug substance meet the predetermined specifications (refer to **3.2.S.4.1 Specifications**) and align with the requirements of the United States Pharmacopeia (USP) General Chapters <790> *Visible Particulates in Injections* and <1790> *Visual Inspection of Injections*, as well as European Pharmacopoeia (Ph. Eur.) 2.2.1 and 2.2.2.

Glucogen-XR is a recombinant GLP-1 receptor agonist expressed in the proprietary GHS-CHO-001 cell line. Given the high concentration of the peptide in the final drug substance (100 mg/mL), maintaining a rigorous assessment of clarity and the absence of extraneous particulate matter is critical to ensuring product safety, efficacy, and stability.

---

### **2.0 Regulatory and Pharmacopeial Alignment**

The methodologies described herein have been developed and validated in accordance with the following International Council for Harmonisation (ICH) and regional regulatory guidelines:

*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <641>:** Completeness of Solution.
*   **USP <790>:** Visible Particulates in Injections.
*   **USP <1790>:** Visual Inspection of Injections.
*   **Ph. Eur. 2.2.1:** Clarity and Degree of Opalescence of Liquids.
*   **Ph. Eur. 2.2.2:** Degree of Coloration of Liquids.
*   **21 CFR Part 211.160:** General Requirements for Laboratory Controls.

---

### **3.0 Analytical Procedure: Clarity and Degree of Opalescence**

#### **3.1 Principle**
The clarity of Glucogen-XR DS is assessed by comparing the drug substance against a set of liquid primary standards and reference suspensions. The test is performed under controlled lighting conditions against a black and white background to detect any opalescence or turbidity caused by protein aggregation or precipitation.

#### **3.2 Preparation of Primary Standards and Reference Suspensions**
The primary standards are prepared according to Ph. Eur. 2.2.1 and USP <641>.

##### **3.2.1 Hydrazine Sulfate Solution**
1.  Dissolve 1.000 g of Hydrazine Sulfate ($N_2H_4 \cdot H_2SO_4$, Sigma-Aldrich Grade or equivalent) in distilled, deionized water ($dH_2O$).
2.  Dilute to 100.0 mL in a volumetric flask.
3.  Allow the solution to stand for 4 to 6 hours.

##### **3.2.2 Hexamethylenetetramine Solution**
1.  Dissolve 2.500 g of Hexamethylenetetramine ($C_6H_{12}N_4$) in 25.0 mL of $dH_2O$ in a 100 mL ground-glass-stoppered flask.

##### **3.2.3 Primary Opalescent Stock Suspension**
1.  To the Hexamethylenetetramine solution prepared in 3.2.2, add 25.0 mL of the Hydrazine Sulfate solution prepared in 3.2.1.
2.  Mix well and allow to stand for 24 hours at $25^\circ \text{C} \pm 2^\circ \text{C}$.
3.  Note: This suspension is stable for 2 months when stored in a glass container free from surface defects.

##### **3.2.4 Preparation of Reference Suspensions (I, II, III, IV)**
The following table (Table 1) outlines the dilution protocol for creating the standard reference suspensions used for the visual assessment of Glucogen-XR.

**Table 1: Preparation of Reference Opalescent Suspensions**
| Reference Suspension | Primary Opalescent Suspension (mL) | Water (mL) | NTU (Nominal Turbidity Units) |
| :--- | :--- | :--- | :--- |
| **Standard I** | 5.0 | 95.0 | 3 |
| **Standard II** | 10.0 | 90.0 | 6 |
| **Standard III** | 30.0 | 70.0 | 18 |
| **Standard IV** | 50.0 | 50.0 | 30 |

#### **3.3 Test Procedure (Clarity)**
1.  **Preparation of Sample:** Transfer 5.0 mL of Glucogen-XR Drug Substance (Batch GLUC-2025-XXX) into a clean, dry, colorless, transparent neutral glass tube with an internal diameter of 15 mm to 25 mm.
2.  **Comparison:** Fill a similar tube with $dH_2O$ (Reference Blank) and other tubes with Reference Suspensions I, II, III, and IV.
3.  **Observation:** Compare the sample against the reference standards in diffused daylight 5 minutes after preparation. View vertically against a black background.
4.  **Acceptance Criteria:** A liquid is considered "clear" if its clarity is the same as water or if its opalescence is not more pronounced than that of Reference Suspension I.

---

### **4.0 Analytical Procedure: Coloration and Appearance**

#### **4.1 Principle**
The color of the Glucogen-XR DS is examined by comparing the liquid against standard colorimetric solutions (Yellow, Brown-Yellow, and Red-Yellow scales).

#### **4.2 Standard Solutions for Coloration (BY - Brown-Yellow Scale)**
Glucogen-XR typically exhibits a "colorless to slightly yellowish" appearance. The BY scale is the primary reference.

**Table 2: Composition of BY Standard Stock Solutions**
| Reagent | Concentration / Preparation |
| :--- | :--- |
| **Ferric Chloride ($FeCl_3 \cdot 6H_2O$)** | 45.0 g/L in 25 g/L HCl |
| **Cobaltous Chloride ($CoCl_2 \cdot 6H_2O$)** | 59.5 g/L in 25 g/L HCl |
| **Cupric Sulfate ($CuSO_4 \cdot 5H_2O$)** | 62.4 g/L in 25 g/L HCl |

#### **4.3 Procedure**
1.  Compare the sample (GLUC-2025-XXX) in a 15 mm diameter tube against the BY standard series (BY1 to BY7).
2.  The comparison is made against a white background under uniform lighting (minimum 2000 lux).
3.  **Acceptance Criteria:** The solution must be colorless or not more intensely colored than Reference Standard BY6.

---

### **5.0 Analytical Procedure: Visible Particulate Matter (USP <790>)**

#### **5.1 Equipment and Environment**
*   **Inspection Station:** Google Health Sciences Custom Visual Inspection Station (GHS-VIS-09).
*   **Lighting:** Adjusted to provide an illumination level between 2,000 lux and 3,750 lux at the point of inspection.
*   **Background:** High-contrast non-glare black and white backgrounds.
*   **Personnel:** Validated and qualified inspectors with 20/20 vision (corrected) and passing results on the Farnsworth-Munsell 100 Hue Test.

#### **5.2 Step-by-Step Inspection Protocol**
1.  **Initialization:** Ensure the exterior of the DS container (polycarbonate carboy or stainless steel vessel) is cleaned with 70% IPA to remove dust.
2.  **Agitation:** Gently swirl or invert the container to mobilize any potential particles from the bottom surface. Avoid vigorous shaking to prevent air bubble entrapment, which can be misidentified as particles.
3.  **Hold Time:** Allow air bubbles to dissipate for 30–60 seconds.
4.  **Inspection (White Background):** Hold the container against the white background for 5 seconds. Scan for dark particles.
5.  **Inspection (Black Background):** Hold the container against the black background for 5 seconds. Scan for light-colored or reflective particles (proteinaceous fibers, glass, etc.).
6.  **Recording:** Log results using the GHS LIMS system (Module: VIS-PART).

---

### **6.0 Representative Data and Batch Analysis**

The following table summarizes the appearance data for recent GMP batches of Glucogen-XR Drug Substance produced at the South San Francisco facility.

**Table 3: Appearance and Clarity Data for Glucogen-XR DS Batches**
| Batch Number | Date of Manufacture | Appearance (Visual) | Clarity (Ph. Eur. 2.2.1) | Color (Ph. Eur. 2.2.2) | Visible Particles (USP <790>) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | Clear, colorless liquid | < Ref. I (Clear) | < BY7 (Colorless) | Essentially Free |
| **GLUC-2025-002** | 25-JAN-2025 | Clear, colorless liquid | < Ref. I (Clear) | < BY7 (Colorless) | Essentially Free |
| **GLUC-2025-003** | 08-FEB-2025 | Clear, colorless liquid | < Ref. I (Clear) | < BY7 (Colorless) | Essentially Free |
| **GLUC-2025-004** | 22-FEB-2025 | Clear, slightly yellow | < Ref. I (Clear) | BY6 (Slight Yellow) | Essentially Free |
| **GLUC-2025-005** | 05-MAR-2025 | Clear, colorless liquid | < Ref. I (Clear) | < BY7 (Colorless) | Essentially Free |

---

### **7.0 Statistical Evaluation of Opalescence**

To quantify the degree of opalescence beyond qualitative visual assessment, Google Health Sciences utilizes a Hach 2100AN Turbidimeter calibrated against Formazin Turbidity Standards.

#### **7.1 Calculation of Turbidity (NTU)**
The turbidity is measured directly in Nephelometric Turbidity Units (NTU). The relationship between visual reference suspensions and NTU values is defined by the following regression:
$$NTU_{sample} = \frac{(R_s - R_b)}{k}$$
Where:
*   $R_s$ = Instrument response for sample
*   $R_b$ = Instrument response for buffer blank
*   $k$ = Slope of the calibration curve established using Formazin standards (0.1, 1, 10, 100 NTU).

#### **7.2 Validation Results**
**Table 4: Instrument-Based Clarity Validation (Nephelometry)**
| Sample ID | Replicate 1 (NTU) | Replicate 2 (NTU) | Replicate 3 (NTU) | Mean NTU | % RSD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 1.12 | 1.15 | 1.11 | 1.13 | 1.8% |
| GLUC-2025-002 | 0.98 | 1.02 | 1.01 | 1.00 | 2.1% |
| GLUC-2025-003 | 1.25 | 1.22 | 1.24 | 1.24 | 1.2% |

---

### **8.0 Acceptance Criteria**

| Attribute | Specification | Method |
| :--- | :--- | :--- |
| **Physical State** | Liquid | Visual |
| **Color** | Colorless to slightly yellowish ($\leq$ BY6) | Ph. Eur. 2.2.2 |
| **Clarity** | Clear to slightly opalescent ($\leq$ Ref. I) | Ph. Eur. 2.2.1 |
| **Visible Particulates** | Essentially free from visible particulates | USP <790> |

---

### **9.0 Abbreviations**
*   **CHO-K1:** Chinese Hamster Ovary Cell Line K1
*   **DS:** Drug Substance
*   **GLP-1:** Glucagon-like Peptide-1
*   **NTU:** Nephelometric Turbidity Units
*   **USP:** United States Pharmacopeia
*   **BY:** Brown-Yellow (Color Standard)

### **10.0 References**
1.  Google Health Sciences Standard Operating Procedure GHS-QC-0045: *Visual Inspection of Glucogen-XR*.
2.  ICH Q6B, *Specifications for Biotechnological/Biological Products*, 1999.
3.  USP <790>, *Visible Particulates in Injections*, 2023.

---

# Analytical Procedures - Microbiological Testing

## Bioburden

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.2: ANALYTICAL PROCEDURES - MICROBIOLOGICAL TESTING
#### PART B: BIOBURDEN ANALYSIS

---

### 1.0 INTRODUCTION AND SCOPE

This section delineates the analytical procedures, validation parameters, and operational protocols for the assessment of bioburden (total viable aerobic count) in Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) and its associated in-process intermediates. These procedures are established by Google Health Sciences (GHS) in strict accordance with the harmonized requirements of USP <61> (Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests), USP <62> (Microbiological Examination of Nonsterile Products: Tests for Specified Microorganisms), and the ICH Q6B guidance for biotechnological/biological products.

As Glucogen-XR is a peptide therapeutic produced via a proprietary CHO-K1 GS knockout derivative cell line (GHS-CHO-001), rigorous control of microbial populations throughout the upstream and downstream manufacturing processes is critical to ensure product safety, stability, and the absence of pyrogenic contaminants.

### 2.0 REGULATORY COMPLIANCE AND STANDARDS

All bioburden testing protocols for Glucogen-XR are designed to satisfy the following regulatory frameworks:
*   **USP <61> / Ph. Eur. 2.6.12 / JP 4.05, I:** Microbial Enumeration Tests.
*   **USP <62> / Ph. Eur. 2.6.13 / JP 4.05, II:** Tests for Specified Microorganisms.
*   **USP <1111>:** Microbiological Examination of Nonsterile Products: Acceptance Criteria for Pharmaceutical Preparations and Substances for Pharmaceutical Use.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **FDA Guidance for Industry:** Submission of Documentation for Sterilization Process Validation in Applications for Human and Veterinary Drug Products.

### 3.0 ANALYTICAL METHODOLOGY: MEMBRANE FILTRATION

The primary method for determining the bioburden of Glucogen-XR Drug Substance is the **Membrane Filtration Method**. This method is preferred due to its ability to concentrate microorganisms from large volumes of sample and its efficacy in removing potential antimicrobial properties of the peptide or preservative systems via rinsing.

#### 3.1 Equipment and Reagents
*   **Filtration Apparatus:** Sterile 47 mm diameter manifold system (ID: GHS-MICRO-FILT-09).
*   **Membrane Filters:** Sterile, hydrophilic Polyethersulfone (PES) or Cellulose Nitrate filters, 0.45 µm pore size (ID: GHS-MEMB-45).
*   **Incubators:** 
    *   30°C to 35°C (Validated Range: 32.5 ± 2.5°C) for Total Aerobic Microbial Count (TAMC).
    *   20°C to 25°C (Validated Range: 22.5 ± 2.5°C) for Total Combined Yeasts and Molds Count (TYMC).
*   **Culture Media:**
    *   Soybean Casein Digest Agar (SCDA/TSA) for TAMC.
    *   Sabouraud Dextrose Agar (SDA) for TYMC.
*   **Rinsing Fluid:** Fluid A (USP) (Peptone water 0.1% w/v).

#### 3.2 Detailed Step-by-Step Procedure

**Step 1: Sample Preparation (Aseptic Technique)**
1.  Aseptically transfer 10 grams (or 10 mL) of Glucogen-XR Drug Substance (Batch GLUC-2025-XXX) into a sterile 100 mL dilution flask.
2.  Dilute 1:10 using Fluid A. For viscous intermediates, a 1:100 dilution may be required, provided the limit of detection remains within specification.
3.  Vortex gently for 60 seconds to ensure homogeneity without denaturing the peptide.

**Step 2: Filtration Protocol**
1.  Pre-wet the 0.45 µm membrane filter with 50 mL of sterile Fluid A.
2.  Apply the prepared sample (e.g., 10 mL of 1:10 dilution) to the filter under vacuum.
3.  Perform three (3) sequential rinses of the membrane with 100 mL of Fluid A per rinse to ensure removal of the glucapeptide, which may exhibit mild bacteriostatic activity at high concentrations.

**Step 3: Incubation and Observation**
1.  **TAMC:** Transfer the membrane to the surface of SCDA. Invert plates and incubate at 30–35°C for 3 to 5 days.
2.  **TYMC:** Transfer the membrane to the surface of SDA. Invert plates and incubate at 20–25°C for 5 to 7 days.
3.  Negative Controls: Use 100 mL of Fluid A as a negative control for each filtration session.

### 4.0 METHOD VALIDATION (SUITABILITY OF THE COUNTING METHOD)

Validation was conducted to demonstrate that the Glucogen-XR matrix does not inhibit the growth of microorganisms. Recovery of the challenge organisms must be at least 50% (0.5 to 2.0-fold) compared to the inoculum control.

#### 4.1 Challenge Organisms
The following USP-standard strains were utilized for validation:
*   *Staphylococcus aureus* (ATCC 6538)
*   *Pseudomonas aeruginosa* (ATCC 9027)
*   *Bacillus subtilis* (ATCC 6633)
*   *Candida albicans* (ATCC 10231)
*   *Aspergillus brasiliensis* (ATCC 16404)

#### 4.2 Validation Results Table (Representative Data)
The following table summarizes the suitability testing for Glucogen-XR Drug Substance Batch GLUC-2025-V01.

| Microorganism | Inoculum (CFU) | Recovery (CFU) in Presence of DS | Recovery Percentage (%) | Acceptance Criteria | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *S. aureus* | 62 | 58 | 93.5% | ≥ 50% | Pass |
| *P. aeruginosa* | 75 | 71 | 94.7% | ≥ 50% | Pass |
| *B. subtilis* | 54 | 49 | 90.7% | ≥ 50% | Pass |
| *C. albicans* | 48 | 45 | 93.8% | ≥ 50% | Pass |
| *A. brasiliensis* | 32 | 30 | 93.8% | ≥ 50% | Pass |

### 5.0 IN-PROCESS CONTROL (IPC) LIMITS AND SPECIFICATIONS

Bioburden monitoring occurs at multiple stages of the manufacturing process (3000 Innovation Drive facility).

#### 5.1 Bioburden Limits for Drug Substance and Intermediates

| Sampling Point | Sample Code | TAMC Limit (CFU/10 mL) | TYMC Limit (CFU/10 mL) | Action Level |
| :--- | :--- | :--- | :--- | :--- |
| Post-Cell Harvest | IPC-CH-01 | ≤ 100 | ≤ 10 | > 50 CFU/10 mL |
| Post-Protein A Capture | IPC-PA-02 | ≤ 10 | ≤ 2 | > 5 CFU/10 mL |
| Final Drug Substance | DS-GXR-03 | ≤ 1 | ≤ 1 | > 1 CFU/10 mL |

### 6.0 BATCH ANALYSIS DATA (GLUC-2025 SERIES)

The following table provides historical bioburden data for recent GMP batches of Glucogen-XR Drug Substance.

| Batch Number | Date of Analysis | Test Site | TAMC (CFU/g) | TYMC (CFU/g) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | GHS-SF-LAB1 | < 1 | < 1 | Comply |
| GLUC-2025-002 | 19-JAN-2025 | GHS-SF-LAB1 | < 1 | < 1 | Comply |
| GLUC-2025-003 | 02-FEB-2025 | GHS-SF-LAB1 | 1 | < 1 | Comply |
| GLUC-2025-004 | 15-FEB-2025 | GHS-SF-LAB1 | < 1 | < 1 | Comply |
| GLUC-2025-005 | 01-MAR-2025 | GHS-SF-LAB1 | < 1 | < 1 | Comply |

### 7.0 CALCULATIONS AND STATISTICAL EVALUATION

#### 7.1 Calculation of CFU
The number of Colony Forming Units (CFU) is calculated using the following formula:

$$CFU/unit = \frac{N \times D}{V}$$

Where:
*   $N$ = Average number of colonies counted on the membrane.
*   $D$ = Dilution factor (e.g., 10 for a 1:10 dilution).
*   $V$ = Volume of sample filtered (in mL or g).

#### 7.2 Alert and Action Levels
Alert and action levels are established based on a 3-sigma ($3\sigma$) statistical evaluation of the historical mean of 30 consecutive batches.
*   **Mean ($\mu$):** 0.2 CFU/10 mL
*   **Standard Deviation ($\sigma$):** 0.15
*   **Alert Level ($\mu + 2\sigma$):** 0.5 CFU/10 mL
*   **Action Level ($\mu + 3\sigma$):** 0.65 CFU/10 mL (Rounded to 1 CFU/10 mL for practical application).

### 8.0 INVESTIGATION OF OUT-OF-SPECIFICATION (OOS) RESULTS

In the event of a bioburden result exceeding the Action Level or the Specification, a formal investigation is initiated per **SOP-GHS-QA-0042: Management of Microbiological OOS**.

1.  **Phase I Investigation:** Laboratory investigation to identify potential sampling or testing error.
    *   Review of negative controls.
    *   Review of analyst training records.
    *   Assessment of environmental monitoring (EM) data in the testing zone at the time of analysis.
2.  **Phase II Investigation:** Manufacturing investigation.
    *   Review of SIP (Sterilization-in-Place) and CIP (Clean-in-Place) logs for the GLUC-2025-XXX batch.
    *   Microbial Identification (ID): Any isolate found in DS must be identified to the species level using 16S rRNA sequencing or MALDI-TOF mass spectrometry to determine if the organism is process-related or an environmental contaminant.
3.  **Impact Assessment:** Evaluation of the impact of the specific organism on the peptide's stability and the efficacy of the subsequent sterile filtration step in the Drug Product (DP) process.

### 9.0 CONCLUSION

The bioburden control strategy for Glucogen-XR, implemented by Google Health Sciences, utilizes validated membrane filtration methods in compliance with USP <61>. The data from the GLUC-2025 batch series consistently demonstrates levels well below regulatory thresholds, ensuring the high purity and safety profile of the glucapeptide extended-release drug substance.

---
*End of Subsection: Bioburden*

---

## Endotoxin by LAL Assay

### 3.2.S.4.2 ANALYTICAL PROCEDURES – MICROBIOLOGICAL TESTING
#### SUBSECTION: ENDOTOXIN BY LIMULUS AMEBOCYTE LYSATE (LAL) ASSAY

---

**CONFIDENTIAL**
**Document ID:** GHS-GLUCXR-M3DS-4.2-MICRO-004
**Sponsor:** Google Health Sciences, a Division of Google Cloud Life Sciences
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)
**Revision:** 1.0.4 (Effective Date: 14 October 2024)

---

### 1.0 PURPOSE AND SCOPE

This procedure describes the quantitative determination of bacterial endotoxins in the Glucogen-XR (glucapeptide) drug substance (DS) using the Kinetic Chromogenic Limulus Amebocyte Lysate (LAL) method. This analytical procedure is designed to comply with the requirements set forth in:

*   **USP <85>:** Bacterial Endotoxins Test
*   **Ph. Eur. 2.6.14:** Bacterial Endotoxins
*   **JP 4.01:** Bacterial Endotoxins Test
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products
*   **FDA Guidance for Industry:** Pyrogen and Endotoxins Testing: Questions and Answers (2012)

This method is applied to all release batches manufactured at Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA (Facility ID: GHS-SSF-01). The assay ensures that the Glucogen-XR drug substance, produced via the proprietary GHS-CHO-001 cell line, maintains an endotoxin profile below the established safety threshold for parenteral administration.

### 2.0 PRINCIPLE OF THE METHOD

The Kinetic Chromogenic LAL assay utilizes the biochemical cascade of the *Limulus polyphemus* amebocyte lysate. In the presence of Gram-negative bacterial endotoxins (lipopolysaccharides), a proenzyme (Factor C) is activated. The activated Factor C subsequently activates Factor B, which then activates the Proclotting Enzyme into the Clotting Enzyme.

In the chromogenic variant used for Glucogen-XR, the Clotting Enzyme cleaves a colorless synthetic peptide-substrate (Ac-Ile-Glu-Ala-Arg-pNA), releasing $p$-nitroaniline (pNA). The pNA is measured spectrophotometrically at 405 nm. The time required to reach a specific absorbance threshold (the "Onset Time") is inversely proportional to the logarithm of the endotoxin concentration.

### 3.0 CALCULATIONS AND SPECIFICATIONS

#### 3.1 Endotoxin Limit (K/M)
The endotoxin limit for Glucogen-XR is calculated based on the maximum clinical dose as per USP <85>.

**Formula:**
$$EL = \frac{K}{M}$$

Where:
*   **EL:** Endotoxin Limit (EU/mg)
*   **K:** Threshold Pyrogenic Dose (5.0 EU/kg for parenteral drugs, excluding intrathecal)
*   **M:** Maximum dose of Glucogen-XR administered per kg per hour.

**Parameters for Glucogen-XR:**
*   **K** = 5.0 EU/kg
*   **Max Human Dose (MHD):** 2.4 mg (weekly dose)
*   **Patient Weight (Average):** 70 kg
*   **M** = $2.4 \text{ mg} / 70 \text{ kg} = 0.034 \text{ mg/kg}$

**Calculation:**
$$EL = \frac{5.0 \text{ EU/kg}}{0.034 \text{ mg/kg}} = 147.05 \text{ EU/mg}$$

**Google Health Sciences Internal Specification:** 
To provide a significant safety margin and align with ICH Q6B purity expectations for biologics, Google Health Sciences has established a release specification of:
**$\leq 0.5$ EU/mg for Glucogen-XR Drug Substance.**

#### 3.2 Maximum Valid Dilution (MVD)
The MVD is the maximum factor by which the drug substance can be diluted while still allowing for the detection of the endotoxin limit.

**Formula:**
$$MVD = \frac{EL \times C}{\lambda}$$

Where:
*   **C:** Concentration of Glucogen-XR DS (nominal: 50 mg/mL)
*   **$\lambda$:** Lowest point on the standard curve (Sensitivity of the assay, typically 0.005 EU/mL)

**Calculation:**
$$MVD = \frac{0.5 \text{ EU/mg} \times 50 \text{ mg/mL}}{0.005 \text{ EU/mL}} = 5,000$$

The routine assay dilution is validated at **1:100** and **1:200**, providing high sensitivity while remaining well within the MVD.

---

### 4.0 REAGENTS AND EQUIPMENT

| Material ID | Description | Manufacturer/Source |
| :--- | :--- | :--- |
| GHS-RE-092 | Limulus Amebocyte Lysate (Kinetic Chromogenic) | Charles River / Lonza |
| GHS-RE-093 | Control Standard Endotoxin (CSE) | E. coli O113:H10 |
| GHS-RE-094 | LAL Reagent Water (LRW) | USP/EP Grade (<0.001 EU/mL) |
| GHS-EQ-442 | Molecular Devices SpectraMax iD3 | Plate Reader |
| GHS-EQ-551 | Depyrogenated Glassware (250°C, 60 min) | Internal - QC Metrology |
| GHS-MT-101 | Endosafe Nexgen-PTS (Alternative) | Charles River |

---

### 5.0 ANALYTICAL PROCEDURE (STEP-BY-STEP)

#### 5.1 Preparation of Standard Curve
A 5-point standard curve is prepared daily using Reference Standard Endotoxin (RSE) or Control Standard Endotoxin (CSE) calibrated against RSE.

1.  Reconstitute CSE with LRW to a concentration of 100 EU/mL. Vortex for 15 minutes.
2.  Perform serial dilutions to achieve the following range:
    *   S1: 5.0 EU/mL
    *   S2: 0.5 EU/mL
    *   S3: 0.05 EU/mL
    *   S4: 0.005 EU/mL
    *   S5: 0.001 EU/mL (Optional sensitivity check)
3.  Each dilution step must involve at least 30 seconds of vigorous vortexing.

#### 5.2 Sample Preparation (Glucogen-XR DS)
1.  Thaw one vial of Glucogen-XR Drug Substance (Batch GLUC-2025-XXX).
2.  Aseptically transfer 100 $\mu$L of sample into a depyrogenated tube.
3.  Dilute with LRW to the target concentration (e.g., 1:100 dilution).
4.  **Positive Product Control (PPC):** Spike a replicate of the diluted sample with a known concentration of CSE (typically the midpoint of the standard curve, 0.05 EU/mL).

#### 5.3 Plate Loading and Measurement
1.  Load 100 $\mu$L of Blank (LRW), Standards, Samples, and PPC into a 96-well pyrogen-free plate in triplicate.
2.  Incubate the plate at $37 \pm 1^\circ \text{C}$ for 10 minutes within the plate reader.
3.  Rapidly add 100 $\mu$L of LAL Reagent to each well.
4.  Initiate the kinetic read at 405 nm. Data points are collected every 30 seconds for up to 90 minutes.

---

### 6.0 VALIDATION DATA AND HISTORICAL BATCH ANALYSIS

The following table summarizes the endotoxin results for the three pivotal process validation batches manufactured at the South San Francisco site.

**Table 1: Endotoxin Release Results for Glucogen-XR (PV Batches)**

| Batch Number | Date of Manufacture | Concentration | Dilution Factor | Result (EU/mg) | PPC Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 50.2 mg/mL | 1:100 | < 0.010 | 108.4% |
| **GLUC-2025-002** | 19-JAN-2025 | 49.8 mg/mL | 1:100 | < 0.010 | 94.2% |
| **GLUC-2025-003** | 26-JAN-2025 | 51.1 mg/mL | 1:100 | < 0.010 | 112.7% |
| **GLUC-2025-004** | 02-FEB-2025 | 50.0 mg/mL | 1:100 | < 0.010 | 101.5% |

**Table 2: Statistical Summary of Assay Performance (N=50 Runs)**

| Metric | Acceptance Criteria | Observed Performance | Status |
| :--- | :--- | :--- | :--- |
| **Standard Curve $R$** | $|r| \geq 0.980$ | $0.998 - 0.999$ | Pass |
| **PPC Recovery** | 50% to 200% | 88% - 124% | Pass |
| **Blank (LRW)** | < Sensitivity | No detection | Pass |
| **Sample CV%** | $\leq 25\%$ | 4.2% | Pass |

---

### 7.0 INTERFERING FACTORS AND INHIBITION/ENHANCEMENT (I/E)

Glucogen-XR contains a poly-histidine tail and a PEGylated moiety to extend half-life. These structural features were evaluated for potential inhibition of the LAL enzyme cascade.

#### 7.1 Inhibition/Enhancement Screen
Testing was conducted at dilutions ranging from 1:10 to 1:500.
*   **At 1:10 dilution:** PPC recovery was 42% (Inhibition observed).
*   **At 1:50 dilution:** PPC recovery was 68%.
*   **At 1:100 dilution:** PPC recovery was 104% (Optimal).

**Conclusion:** A minimum dilution of 1:100 is required to overcome the inhibitory effects of the peptide concentration on the LAL proenzyme activation.

---

### 8.0 QUALITY CONTROL AND SYSTEM SUITABILITY

A run is considered valid only if the following conditions are met:
1.  **Correlation Coefficient:** The absolute value of the correlation coefficient ($r$) for the standard curve must be $\geq 0.980$.
2.  **Negative Control:** The LRW blank must show no detectable endotoxin above the noise level of the instrument.
3.  **Positive Product Control (PPC):** The recovery of the spiked endotoxin in the sample must be between 50% and 200% of the nominal spike concentration.
4.  **Repeatability:** The Coefficient of Variation (%CV) between replicates of the standards and samples must be $\leq 25\%$.

### 9.0 REFERENCES

1.  **USP-NF <85>:** Bacterial Endotoxins Test.
2.  **USP-NF <1085>:** Guidelines on the Endotoxin Test.
3.  **FDA Guidance for Industry:** *Pyrogens and Endotoxins Testing: Questions and Answers*, June 2012.
4.  **ISO 14644-1:** Classification of Air Cleanliness for Cleanrooms and Associated Controlled Environments.
5.  **GHS-SOP-6622:** Operation and Maintenance of the Molecular Devices SpectraMax iD3 for LAL Testing.

---
**END OF SECTION**

---

## Sterility Testing

# MODULE 3: QUALITY (3.2.S.4.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: ANALYTICAL PROCEDURES – MICROBIOLOGICAL TESTING
## SUBSECTION: 3.2.S.4.2.1 STERILITY TESTING PROTOCOL

---

### 1.0 INTRODUCTION AND SCOPE
This section delineates the comprehensive analytical procedures, validation parameters, and compliance frameworks for the sterility testing of Glucogen-XR (glucapeptide extended-release) drug substance, manufactured by Google Health Sciences. As a high-potency GLP-1 receptor agonist produced via recombinant DNA technology in the GHS-CHO-001 cell line, maintaining absolute sterility is a critical quality attribute (CQA) to ensure patient safety and product stability.

Testing is conducted in strict accordance with **USP <71> Sterility Tests**, **EP 2.6.1 Sterility**, and **JP 4.06 Sterility Test**, harmonized via the Tripartite ICH guidelines. This protocol applies to the final bulk drug substance (BDS) prior to fill-finish operations.

### 2.0 REGULATORY COMPLIANCE AND GUIDELINES
The sterility testing program for Glucogen-XR is designed to meet or exceed the following regulatory expectations:
*   **FDA 21 CFR 610.12:** General Biological Products Standards – Sterility.
*   **ICH Q5D:** Quality of Biotechnological Products: Derivation and Characterization of Cell Substrates.
*   **USP <1211>:** Sterilization and Sterility Assurance of Compendial Articles.
*   **ISO 14644-1:** Classification of Air Cleanliness in Cleanrooms and Associated Controlled Environments.

### 3.0 ENVIRONMENTAL MONITORING AND TEST CONDITIONS
Sterility testing is performed within a Grade A (ISO Class 5) laminar airflow workbench (LAFW) located within a Grade B (ISO Class 7) cleanroom environment at the Google Health Sciences South San Francisco facility (Building 4, Suite 202).

#### 3.1 Environmental Monitoring (EM) Parameters
Each sterility test session (defined by a Batch ID, e.g., GLUC-2025-001) must be accompanied by concurrent EM data.

**Table 1: Environmental Monitoring Action Limits during Sterility Testing**
| Parameter | Method | Limit / Action Level | Equipment ID |
| :--- | :--- | :--- | :--- |
| Non-Viable Particulates (≥ 0.5 µm) | Isokinetic Probe | < 3,520 particles/m³ | MetOne 3400 |
| Viable Air (Active) | Slit-to-Agar Sampler | < 1 CFU/m³ | MAS-100 NT |
| Viable Air (Passive) | Settle Plates (90mm) | < 1 CFU / 4 hours | TSA/SDA Plates |
| Surface Monitoring | Contact Plates (RODAC) | < 1 CFU/plate | TSA w/ Neutralizers |
| Personnel (Gloves/Gown) | Contact Plates | 0 CFU | TSA Plates |

### 4.0 MEDIA AND REAGENTS
Two primary culture media are utilized to facilitate the growth of aerobic and anaerobic bacteria, as well as fungi/yeast.

#### 4.1 Fluid Thioglycollate Medium (FTM)
*   **Application:** Primarily for the detection of anaerobic bacteria, though it supports aerobic growth.
*   **Incubation Temperature:** 32.5°C ± 2.5°C.
*   **Growth Promotion Requirements:** Must support *Staphylococcus aureus* (ATCC 6538), *Pseudomonas aeruginosa* (ATCC 9027), and *Clostridium sporogenes* (ATCC 11437).

#### 4.2 Soybean-Casein Digest Medium (SCDM / TSB)
*   **Application:** Primarily for the detection of aerobic bacteria and fungi (yeast and molds).
*   **Incubation Temperature:** 22.5°C ± 2.5°C.
*   **Growth Promotion Requirements:** Must support *Bacillus subtilis* (ATCC 6633), *Candida albicans* (ATCC 10231), and *Aspergillus brasiliensis* (ATCC 16404).

### 5.0 SAMPLE PREPARATION AND QUANTITY
In accordance with USP <71> Table 2 and Table 3, the quantity of Glucogen-XR drug substance to be tested is determined by the batch size and the protein concentration (nominally 50 mg/mL).

**Table 2: Sampling Requirements for Glucogen-XR BDS**
| Batch Size (Bulk Volume) | Minimum Number of Containers | Volume per Container to be Tested |
| :--- | :--- | :--- |
| < 10 Liters | 2 Containers | 10 mL or 10% (whichever is greater) |
| 10 – 50 Liters | 4 Containers | 20 mL |
| > 50 Liters | 10 Containers | 50 mL |

*Note: For Batch GLUC-2025-104 (100L Scale), 10 containers are sampled, with 50 mL pooled for membrane filtration.*

---

### 6.0 ANALYTICAL METHOD: MEMBRANE FILTRATION (MF)
The Membrane Filtration method is the preferred technique for Glucogen-XR due to the presence of peptide-stabilizing excipients and the high-volume nature of the drug substance.

#### 6.1 Equipment and Materials
*   **Filtration Unit:** Millipore Steritest™ NEO Symbio Pump.
*   **Filter Units:** Steritest™ canisters (0.45 µm cellulose nitrate membrane).
*   **Rinsing Fluid:** Fluid A (300 mL per canister).

#### 6.2 Detailed Step-by-Step Procedure
1.  **Preparation:** Verify the integrity of the Steritest™ canisters and ensure the pump is calibrated (Asset ID: GHS-PUMP-09).
2.  **Aseptic Transfer:** Transfer the required volume of Glucogen-XR (e.g., Batch GLUC-2025-001) into the sterile filtration units using a closed-loop system.
3.  **Filtration:** Apply vacuum/pump pressure at a constant rate of 100 mL/min.
4.  **Rinsing Phase:**
    *   The Glucapeptide molecule may exhibit non-specific binding to the membrane. To prevent antimicrobial "masking," the membrane is rinsed three times with 100 mL of Fluid A.
    *   *Calculation for Rinsing:* $V_{total} = n \times 100mL$, where $n=3$.
5.  **Media Addition:** 
    *   Aseptically add 100 mL of FTM to Canister 1.
    *   Aseptically add 100 mL of SCDM to Canister 2.
6.  **Sealing:** Plug the canister inlets and outlets using the provided sterile stoppers.

### 7.0 INCUBATION AND OBSERVATION
Incubation periods are strictly monitored via the Google Cloud Life Sciences LIMS (Laboratory Information Management System).

**Table 3: Incubation Schedule**
| Canister | Medium | Temperature | Duration | Target Microorganisms |
| :--- | :--- | :--- | :--- | :--- |
| Canister 1 | FTM | 32.5 ± 2.5°C | 14 Days | Anaerobes / Aerobes |
| Canister 2 | SCDM | 22.5 ± 2.5°C | 14 Days | Fungi / Aerobes |

#### 7.1 Observation Frequency
*   **Day 3, 5, 7:** Intermediate visual checks for turbidity, flocculent growth, or pellicle formation.
*   **Day 14:** Final visual examination by two independent microbiologists.

---

### 8.0 METHOD VALIDATION (SUITABILITY TESTING)
Method suitability (Bacteriostasis and Fungistasis testing) was performed to ensure that the Glucogen-XR drug substance does not inhibit the growth of microorganisms under the test conditions.

#### 8.1 Inoculum Preparation
Microorganisms (see Section 4.0) were prepared to a concentration of < 100 CFU per mL. 

#### 8.2 Suitability Results for Batch GLUC-2025-VALID
Validation was performed on three representative batches to confirm reproducibility.

**Table 4: Method Suitability Results (B&F Testing)**
| Organism | Control (CFU) | Sample + Media (CFU) | Recovery (%) | Result |
| :--- | :--- | :--- | :--- | :--- |
| *S. aureus* | 45 | 42 | 93.3% | Pass |
| *P. aeruginosa* | 52 | 55 | 105.7% | Pass |
| *C. sporogenes* | 38 | 35 | 92.1% | Pass |
| *B. subtilis* | 61 | 58 | 95.1% | Pass |
| *C. albicans* | 29 | 31 | 106.9% | Pass |
| *A. brasiliensis* | 22 | 20 | 90.9% | Pass |

*Acceptance Criteria: Growth in the presence of the product must be visually comparable to the control within 3-5 days.*

---

### 9.0 BATCH RELEASE DATA (HISTORICAL TRENDING)
The following table summarizes sterility results for recent clinical and registration batches of Glucogen-XR DS.

**Table 5: Sterility Test Results for Glucogen-XR Batches (2025)**
| Batch Number | Manufacture Date | Test Start Date | Test End Date | Medium | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 14-JAN-2025 | 28-JAN-2025 | FTM/SCDM | Sterile |
| GLUC-2025-002 | 19-JAN-2025 | 21-JAN-2025 | 04-FEB-2025 | FTM/SCDM | Sterile |
| GLUC-2025-003 | 02-FEB-2025 | 04-FEB-2025 | 18-FEB-2025 | FTM/SCDM | Sterile |
| GLUC-2025-004 | 15-FEB-2025 | 17-FEB-2025 | 03-MAR-2025 | FTM/SCDM | Sterile |
| GLUC-2025-005 | 01-MAR-2025 | 03-MAR-2025 | 17-MAR-2025 | FTM/SCDM | Sterile |

---

### 10.0 INVESTIGATION OF POSITIVE RESULTS (OOS)
In the event of a positive sterility test (turbidity observed), a rigorous Out-of-Specification (OOS) investigation is triggered as per GHS-SOP-MIC-042.

#### 10.1 Phase I Investigation
1.  **Verification of Lab Error:** Review of environmental monitoring data, media growth promotion, and analyst training records.
2.  **Gram Staining and Speciation:** Use of MALDI-TOF (Matrix-Assisted Laser Desorption/Ionization Time-of-Flight) mass spectrometry for rapid identification of the contaminant.
3.  **Comparison:** Compare the isolate's genetic profile with the facility’s microflora database (Google Cloud Biotech-Micro-DB).

#### 10.2 Retesting Criteria (USP <71> Guidelines)
Retesting is only permitted if there is "unequivocal evidence" that the contamination was introduced during the testing procedure (e.g., EM failure in the Grade A zone). If the retest is required, the sample size must be doubled.

---

### 11.0 STATISTICAL ANALYSIS OF BIOBURDEN CORRELATION
To ensure the robustness of the sterility assurance level (SAL), sterility results are correlated with pre-filtration bioburden levels.

**Equation 1: Probability of Survival (P)**
$$P = 1 - (1 - 10^{-SAL})^n$$
Where:
*   $SAL = 10^{-6}$ (Standard for sterile biologics)
*   $n$ = Number of units in the batch.

For Glucogen-XR, the bioburden prior to the final 0.22 µm sterilizing grade filter must be $\leq 10$ CFU/100 mL.

---

### 12.0 CONCLUSION
The sterility testing procedures for Glucogen-XR drug substance at Google Health Sciences are fully validated and compliant with global regulatory standards. Through the use of advanced closed-system membrane filtration and stringent environmental controls, GHS ensures that every batch (GLUC-2025-XXX) meets the highest safety standards for clinical and commercial use in Type 2 Diabetes patients.

---
**END OF SECTION**
**Document Ref:** GHS-DS-M3-ST-2025-REV01
**Author:** Regulatory Affairs Microbiological Team, Google Cloud Life Sciences.

---

# Validation of Analytical Procedures

## ICH Q2 Validation Parameters

### **MODULE 3: QUALITY**
#### **3.2.S. DRUG SUBSTANCE (GLUCOGEN-XR)**
#### **3.2.S.4. CONTROL OF DRUG SUBSTANCE**
#### **3.2.S.4.3. VALIDATION OF ANALYTICAL PROCEDURES**

---

### **SECTION 3.2.S.4.3.1: ICH Q2(R2) VALIDATION PARAMETERS FOR REVERSED-PHASE HIGH-PERFORMANCE LIQUID CHROMATOGRAPHY (RP-HPLC) PURITY ANALYSIS**

This section details the comprehensive validation of the primary stability-indicating method (GHS-MET-0042) used for the determination of purity and related substances in Glucogen-XR (glucapeptide extended-release). This validation was conducted in accordance with **ICH Q2(R2) Validation of Analytical Procedures**, **USP <1225> Validation of Compendial Procedures**, and **FDA Guidance for Industry: Analytical Procedures and Methods Validation for Drugs and Biologics (2015)**.

---

#### **1.0 OBJECTIVE AND SCOPE**
The primary objective of this validation study was to demonstrate that the RP-HPLC method is suitable for its intended purpose: the quantitation of Glucogen-XR main peak, known degradants (deamidated, oxidized, and truncated species), and unknown impurities.

**Table 1.1: Scope of Validation Parameters**
| Parameter | ICH Q2 Category I (Assay) | ICH Q2 Category II (Quantitative Impurities) | Validated in this Report |
| :--- | :---: | :---: | :---: |
| Specificity | Yes | Yes | Yes |
| Linearity | Yes | Yes | Yes |
| Range | Yes | Yes | Yes |
| Accuracy | Yes | Yes | Yes |
| Precision (Repeatability) | Yes | Yes | Yes |
| Precision (Intermediate) | Yes | Yes | Yes |
| LOD / LOQ | No | Yes | Yes |
| Robustness | Yes | Yes | Yes |

---

#### **2.0 TEST SYSTEM AND EQUIPMENT**
All validation activities were performed using the following equipment at the Google Health Sciences Analytical Development Facility (Building 4, South San Francisco).

**Table 2.1: Equipment and Software Specifications**
| Component | Specification / Model | Equipment ID |
| :--- | :--- | :--- |
| HPLC System | Agilent 1290 Infinity II UHPLC | GHS-LC-092 / GHS-LC-114 |
| Detector | Diode Array Detector (DAD) FS | GHS-DET-088 |
| Column | Waters XBridge BEH C18, 130Å, 3.5 µm, 4.6 x 150 mm | Part # 186003023 |
| Column Temperature | 45.0°C ± 0.5°C | N/A |
| Data System | Chromeleon 7.3 CDS (Cloud-Based) | GHS-CDS-PROD-01 |
| Analytical Balance | Mettler Toledo XPR205 (0.01 mg) | GHS-BAL-012 |

---

#### **3.0 SPECIFICITY AND FORCED DEGRADATION**
Specificity was evaluated by demonstrating the lack of interference from the formulation matrix (placebo) and by the ability of the method to resolve Glucogen-XR from its degradation products.

##### **3.1 Placebo Interference Protocol**
1. Prepare a placebo solution containing all excipients (Sucrose, Histidine, Polysorbate 20) at the nominal concentrations used in the drug substance storage buffer.
2. Inject the placebo in triplicate.
3. Compare chromatograms against the Glucogen-XR Reference Standard (Batch: GLUC-2025-REF01).
4. **Acceptance Criteria:** No peaks in the placebo should elute at the retention time (RT) of Glucogen-XR (± 5% RT).

##### **3.2 Forced Degradation Study (Stress Testing)**
Glucogen-XR (Batch: GLUC-2025-001) was subjected to various stress conditions to generate degradation products. The samples were analyzed to confirm that the main peak remains pure (Peak Purity > 995 via DAD) and that degradants are baseline-resolved.

**Table 3.2: Forced Degradation Results**
| Stress Condition | Protocol / Duration | % Degradation | Peak Purity Angle | Peak Purity Threshold |
| :--- | :--- | :--- | :--- | :--- |
| **Control** | No treatment (T=0) | 0.4% (Initial) | 0.112 | 1.045 |
| **Acid** | 0.1 M HCl, 40°C, 24h | 12.4% | 0.204 | 1.150 |
| **Base** | 0.1 M NaOH, 25°C, 2h | 18.9% | 0.198 | 1.201 |
| **Oxidation** | 3% H2O2, 25°C, 6h | 9.5% | 0.155 | 1.090 |
| **Thermal** | 60°C, 72h | 15.2% | 0.210 | 1.180 |
| **Photolytic** | 1.2M lux hours (ICH Q1B) | 5.1% | 0.140 | 1.110 |

**Calculations for Peak Purity:**
The peak purity was calculated using the Ratio of Spectra method across the peak apex:
$$PurityIndex = \frac{\int_{\lambda_1}^{\lambda_2} [S(\lambda, t) \cdot S_{ref}(\lambda)] d\lambda}{\sqrt{\int S^2 \cdot \int S_{ref}^2}}$$

---

#### **4.0 LINEARITY AND RANGE**
The linearity of the method was evaluated by analyzing a minimum of seven (7) concentration levels ranging from the Limit of Quantitation (LOQ) to 150% of the nominal target concentration (0.5 mg/mL).

##### **4.1 Linearity Procedure**
Stock solutions of Glucogen-XR were diluted in Mobile Phase A to achieve concentrations of 0.005, 0.05, 0.1, 0.25, 0.5, 0.6, and 0.75 mg/mL. Each level was injected in triplicate.

**Table 4.1: Linearity Data (Batch: GLUC-2025-002)**
| Level (%) | Conc (mg/mL) | Average Area (mAU*s) | SD | % RSD |
| :--- | :--- | :--- | :--- | :--- |
| LOQ (1%) | 0.005 | 45.21 | 0.88 | 1.95% |
| 10% | 0.050 | 448.90 | 2.15 | 0.48% |
| 50% | 0.250 | 2245.12 | 5.60 | 0.25% |
| 80% | 0.400 | 3588.45 | 4.32 | 0.12% |
| 100% | 0.500 | 4492.30 | 3.10 | 0.07% |
| 120% | 0.600 | 5385.11 | 6.70 | 0.12% |
| 150% | 0.750 | 6740.95 | 9.20 | 0.14% |

**Statistical Analysis:**
*   **Regression Equation:** $y = 8984.5x + 2.14$
*   **Correlation Coefficient ($r^2$):** 0.99998
*   **Residual Sum of Squares:** 4.12
*   **Y-Intercept % of Nominal:** 0.048% (Meets criteria of < 2.0%)

---

#### **5.0 PRECISION**
Precision was assessed via Repeatability (Intra-day) and Intermediate Precision (Inter-day, Inter-analyst).

##### **5.1 Repeatability (System and Method Precision)**
Six (6) independent preparations of Glucogen-XR at the 100% target level (0.5 mg/mL) were analyzed.

**Table 5.1: Repeatability Results (Batch: GLUC-2025-003)**
| Prep # | Main Peak Area | % Purity | % Impurities |
| :--- | :--- | :--- | :--- |
| 1 | 4492.1 | 98.45 | 1.55 |
| 2 | 4495.3 | 98.42 | 1.58 |
| 3 | 4490.8 | 98.46 | 1.54 |
| 4 | 4493.5 | 98.44 | 1.56 |
| 5 | 4491.9 | 98.45 | 1.55 |
| 6 | 4494.0 | 98.43 | 1.57 |
| **Mean** | **4492.9** | **98.44** | **1.56** |
| **% RSD** | **0.04%** | **0.02%** | **0.89%** |

##### **5.2 Intermediate Precision**
A second analyst (Analyst B) repeated the precision study using a different HPLC system (GHS-LC-114) and a different column lot on a subsequent day.

**Table 5.2: Comparison of Precision Data**
| Parameter | Analyst A (n=6) | Analyst B (n=6) | Combined (n=12) |
| :--- | :--- | :--- | :--- |
| Mean Purity (%) | 98.44 | 98.39 | 98.42 |
| % RSD | 0.02% | 0.05% | 0.04% |
| F-test (p-value) | N/A | N/A | 0.145 (p > 0.05) |

---

#### **6.0 ACCURACY (RECOVERY)**
Accuracy was determined by spiking known amounts of Glucogen-XR into the placebo matrix at three levels: 80%, 100%, and 120% of the target concentration.

**Table 6.1: Accuracy Data**
| Spike Level | Amount Added (mg/mL) | Amount Recovered (mg/mL) | % Recovery | Mean Recovery |
| :--- | :--- | :--- | :--- | :--- |
| 80% (n=3) | 0.4005 | 0.3998 | 99.83 | |
| 100% (n=3) | 0.5012 | 0.5025 | 100.26 | 100.12% |
| 120% (n=3) | 0.6008 | 0.6024 | 100.27 | |

**Acceptance Criteria:** 98.0% – 102.0% recovery for the main peak.

---

#### **7.0 DETECTION LIMIT (LOD) AND QUANTITATION LIMIT (LOQ)**
LOD and LOQ were determined based on the Signal-to-Noise (S/N) ratio method as per ICH Q2.

1.  **LOD Calculation:** Concentration yielding S/N ≈ 3:1.
2.  **LOQ Calculation:** Concentration yielding S/N ≈ 10:1.

**Table 7.1: LOD and LOQ Values**
| Parameter | Concentration (µg/mL) | % of Target | S/N Ratio |
| :--- | :--- | :--- | :--- |
| **LOD** | 0.15 | 0.03% | 3.4 |
| **LOQ** | 0.50 | 0.10% | 10.8 |

**LOQ Precision Verification:**
Six injections at the LOQ level (0.50 µg/mL) showed a % RSD of 4.2%, which is well within the target of ≤ 10.0%.

---

#### **8.0 ROBUSTNESS**
Robustness was evaluated by deliberately varying critical chromatographic parameters and measuring the impact on the Resolution ($R_s$) between the main peak and the closest eluting degradant (Deamidated Glucogen-XR).

**Table 8.1: Robustness Parameters and Impact**
| Parameter | Nominal | Variation | Resolution ($R_s$) | Relative Retention Time (RRT) |
| :--- | :--- | :--- | :--- | :--- |
| **Column Temp** | 45°C | 42°C | 1.85 | 1.08 |
| | | 48°C | 1.79 | 1.09 |
| **Flow Rate** | 1.0 mL/min | 0.9 mL/min | 1.92 | 1.08 |
| | | 1.1 mL/min | 1.70 | 1.08 |
| **pH (Buffer A)** | 2.50 | 2.45 | 1.81 | 1.08 |
| | | 2.55 | 1.83 | 1.08 |
| **Gradient Slope**| 1.0%/min | 0.9%/min | 2.10 | 1.12 |
| | | 1.1%/min | 1.65 | 1.04 |

**Conclusion on Robustness:** The method is robust for all tested parameters, as the resolution remained above the target value of 1.5 in all cases.

---

#### **9.0 SOLUTION STABILITY**
The stability of the Glucogen-XR sample solution and reference standard solution was evaluated at room temperature (25°C) and refrigerated (5°C) conditions.

**Table 9.1: Stability of Sample Solutions (Batch: GLUC-2025-004)**
| Storage Time | % Purity (Refrigerated) | % Purity (Room Temp) | Difference from T=0 |
| :--- | :--- | :--- | :--- |
| 0 Hours | 98.44 | 98.44 | 0.00 |
| 12 Hours | 98.43 | 98.40 | 0.04 |
| 24 Hours | 98.45 | 98.35 | 0.09 |
| 48 Hours | 98.42 | 98.15 | 0.29 |

**Requirement:** Solutions are stable for up to 48 hours when refrigerated ($2-8^{\circ}C$) and up to 24 hours at room temperature.

---

#### **10.0 REFERENCES**
1.  **ICH Q2(R2):** Validation of Analytical Procedures: Text and Methodology.
2.  **USP <1225>:** Validation of Compendial Procedures.
3.  **GHS-SOP-0098:** General Procedure for Validation of HPLC Methods.
4.  **FDA Guidance (2015):** Analytical Procedures and Methods Validation for Drugs and Biologics.

---
**END OF SECTION**

---

## Method Qualification for Characterization Methods

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4.3: VALIDATION OF ANALYTICAL PROCEDURES
### SUBSECTION: METHOD QUALIFICATION FOR CHARACTERIZATION METHODS

---

#### 3.2.S.4.3.1. INTRODUCTION AND SCOPE

This document describes the qualification activities performed for the characterization methods utilized in the assessment of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist produced by Google Health Sciences. Unlike the compendial release assays, characterization methods are employed for deep-structure elucidation, higher-order structure (HOS) analysis, and impurity profiling to support the Quality Target Product Profile (QTPP).

In accordance with **ICH Q2(R2) Validation of Analytical Procedures**, **ICH Q6B Specifications**, and **FDA Guidance for Industry: Analytical Procedures and Methods Validation for Drugs and Biologics (2015)**, these methods have undergone rigorous qualification to ensure they are fit for their intended purpose.

The characterization suite for Glucogen-XR includes:
1.  **Primary Structure Assessment:** Intact Mass (LC-MS), Peptide Mapping (LC-MS/MS).
2.  **Higher-Order Structure (HOS):** Circular Dichroism (CD), Nuclear Magnetic Resonance (NMR), Differential Scanning Calorimetry (DSC).
3.  **Glycan Profiling:** (If applicable to derivative tags) N-Linked Oligosaccharide Analysis.
4.  **Product-Related Variants:** Charge Heterogeneity (icIEF), Aggregation (SEC-MALS).

---

#### 3.2.S.4.3.2. METHOD QUALIFICATION STRATEGY

The qualification of characterization methods at Google Health Sciences follows a risk-based approach. Since these methods are often used for "information only" or to support process development rather than batch release, the qualification focuses on **Precision, Specificity, and Sensitivity (LOD/LOQ)**.

##### 3.2.S.4.3.2.1. Reference Standards and Materials
The following materials were utilized across all qualification exercises:
*   **Reference Standard:** GLUC-RS-2024 (Primary Reference Standard, Lot #001).
*   **Qualification Batches:** GLUC-2025-001, GLUC-2025-002, GLUC-2025-003.
*   **Negative Control:** Formulation Buffer (10 mM Histidine, 5% Sucrose, 0.02% PS80, pH 6.0).

---

#### 3.2.S.4.3.3. METHOD 001: INTACT MASS ANALYSIS BY LC-ESI-TOF MS

**Objective:** To confirm the molecular weight of the Glucogen-XR peptide and detect major glycoforms or C-terminal processing variants.

##### 3.2.S.4.3.3.1. Equipment and Parameters
*   **System:** Agilent 1290 Infinity II UHPLC coupled to Sciex TripleTOF 6600+.
*   **Column:** Waters ACQUITY UPLC Protein BEH C4, 300Å, 1.7 µm, 2.1 mm x 50 mm.
*   **Mobile Phase A:** 0.1% Formic Acid in Water.
*   **Mobile Phase B:** 0.1% Formic Acid in Acetonitrile.
*   **Deconvolution Software:** BioPharmaView™ 3.0.

##### 3.2.S.4.3.3.2. Qualification Results (Precision and Accuracy)
Precision was evaluated by six (6) independent injections of Batch GLUC-2025-001.

**Table 1: Intact Mass Precision Data (Batch GLUC-2025-001)**
| Injection ID | Observed Mass (Da) | Theoretical Mass (Da) | Delta (Da) | Error (ppm) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001-01 | 42,345.62 | 42,345.58 | +0.04 | 0.94 |
| GLUC-2025-001-02 | 42,345.59 | 42,345.58 | +0.01 | 0.24 |
| GLUC-2025-001-03 | 42,345.65 | 42,345.58 | +0.07 | 1.65 |
| GLUC-2025-001-04 | 42,345.61 | 42,345.58 | +0.03 | 0.71 |
| GLUC-2025-001-05 | 42,345.57 | 42,345.58 | -0.01 | -0.24 |
| GLUC-2025-001-06 | 42,345.63 | 42,345.58 | +0.05 | 1.18 |
| **Mean** | **42,345.61** | -- | **0.03** | **0.75** |
| **%RSD** | **0.00007%** | -- | -- | -- |

**Acceptance Criteria:** Mass accuracy within ± 5 ppm; Precision %RSD < 0.01%.
**Status:** **Pass.**

---

#### 3.2.S.4.3.4. METHOD 002: TRYPTIC PEPTIDE MAPPING (LC-MS/MS)

**Objective:** To confirm 100% amino acid sequence coverage and identify Post-Translational Modifications (PTMs) such as deamidation, oxidation, and glycation.

##### 3.2.S.4.3.4.1. Sample Preparation Protocol
1.  **Denaturation:** Dilute Glucogen-XR to 2.0 mg/mL in 6M Guanidine-HCl.
2.  **Reduction:** Add 10 mM DTT; incubate at 37°C for 45 minutes.
3.  **Alkylation:** Add 25 mM Iodoacetamide; incubate in dark at RT for 30 minutes.
4.  **Buffer Exchange:** Use Zeba™ Spin Desalting Columns into 50 mM Tris-HCl, pH 7.8.
5.  **Digestion:** Add Trypsin (Promega Gold) at 1:20 (w/w) ratio; incubate at 37°C for 16 hours.
6.  **Quenching:** Add 1% TFA to stop reaction.

##### 3.2.S.4.3.4.2. Qualification Data: Sequence Coverage
Sequence coverage was determined using Byos® software (Protein Metrics).

**Table 2: Peptide Mapping Sequence Coverage Summary**
| Batch Number | Sequence Coverage (%) | Number of Peptides Identified | MS/MS Confidence Score |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 100.0% | 42 | > 99% |
| GLUC-2025-002 | 100.0% | 41 | > 99% |
| GLUC-2025-003 | 99.8% | 39 | > 99% |

**Note:** The minor drop in coverage for GLUC-2025-003 was due to a small di-peptide fragment (MW < 200 Da) eluting in the solvent front.

---

#### 3.2.S.4.3.5. METHOD 003: SECONDARY STRUCTURE BY FAR-UV CIRCULAR DICHROISM (CD)

**Objective:** Evaluation of alpha-helix and beta-sheet content.

##### 3.2.S.4.3.5.1. Instrument Settings
*   **Instrument:** Jasco J-1500 CD Spectrometer.
*   **Cuvette Pathlength:** 0.1 mm (Quartz).
*   **Wavelength Range:** 190 nm to 260 nm.
*   **Data Pitch:** 0.1 nm.
*   **Scanning Speed:** 50 nm/min.

##### 3.2.S.4.3.5.2. Qualification: Robustness to Concentration
The method was tested at 0.5, 1.0, and 1.5 mg/mL to ensure the Mean Residue Ellipticity ([θ]) is concentration-independent.

**Table 3: Far-UV CD Secondary Structure Quantitation (BeStSel Analysis)**
| Sample Conc. | Alpha-Helix (%) | Beta-Sheet (%) | Turn (%) | Disordered (%) |
| :--- | :--- | :--- | :--- | :--- |
| 0.5 mg/mL | 44.2 | 12.1 | 18.5 | 25.2 |
| 1.0 mg/mL | 44.5 | 11.9 | 18.2 | 25.4 |
| 1.5 mg/mL | 44.1 | 12.3 | 18.4 | 25.2 |
| **Average** | **44.27** | **12.10** | **18.37** | **25.27** |

**Calculations:**
The Mean Residue Ellipticity (MRE) is calculated as:
$$[\theta]_{MRE} = \frac{\theta_{obs} \cdot MRW}{10 \cdot l \cdot c}$$
Where:
*   $\theta_{obs}$ = Observed ellipticity in mdeg.
*   $MRW$ = Mean Residue Weight ($MW / (n-1)$).
*   $l$ = Pathlength in cm.
*   $c$ = Concentration in g/mL.

---

#### 3.2.S.4.3.6. METHOD 004: AGGREGATION ANALYSIS BY SEC-MALS

**Objective:** To determine the absolute molecular weight of species eluting in Size Exclusion Chromatography (SEC) and quantify high molecular weight species (HMWS).

##### 3.2.S.4.3.6.1. System Configuration
*   **HPLC:** Shimadzu Nexera X3.
*   **MALS Detector:** Wyatt DAWN HELEOS II.
*   **RI Detector:** Wyatt Optilab T-rEX.
*   **Column:** TSKgel G3000SWxl, 7.8 mm x 30 cm.

##### 3.2.S.4.3.6.2. Qualification: Precision of Molecular Weight Determination
Batch GLUC-2025-001 was injected in triplicate.

**Table 4: SEC-MALS Mass Accuracy and Precision**
| Run ID | Monomer MW (kDa) | Aggregate MW (kDa) | Monomer % Purity |
| :--- | :--- | :--- | :--- |
| Run 1 | 42.4 | 85.1 (Dimer) | 99.42 |
| Run 2 | 42.3 | 84.8 (Dimer) | 99.45 |
| Run 3 | 42.5 | 85.3 (Dimer) | 99.41 |
| **Mean** | **42.4** | **85.1** | **99.43** |
| **SD** | **0.10** | **0.25** | **0.02** |

---

#### 3.2.S.4.3.7. METHOD 005: CHARGE HETEROGENEITY BY icIEF

**Objective:** Quantification of acidic, main, and basic variants using the ProteinSimple iCE3 system.

##### 3.2.S.4.3.7.1. Method Parameters
*   **Ampholytes:** Pharmalyte 3-10.
*   **Additives:** 0.35% Methylcellulose, 4M Urea.
*   **pI Markers:** 5.85 and 9.46.
*   **Focusing:** 1 min at 1500 V, 6 min at 3000 V.

##### 3.2.S.4.3.7.2. Qualification: Intermediate Precision (Ruggedness)
Conducted by two analysts on two different days using different equipment (iCE3 vs. Maurice).

**Table 5: icIEF Intermediate Precision Data**
| Analyst / Day | Main Peak (%) | Acidic Variants (%) | Basic Variants (%) |
| :--- | :--- | :--- | :--- |
| A / Day 1 | 78.5 | 14.2 | 7.3 |
| A / Day 2 | 78.1 | 14.5 | 7.4 |
| B / Day 1 | 77.9 | 14.6 | 7.5 |
| B / Day 2 | 78.3 | 14.3 | 7.4 |
| **Average** | **78.2%** | **14.4%** | **7.4%** |
| **%RSD** | **0.33%** | **1.21%** | **1.08%** |

---

#### 3.2.S.4.3.8. STATISTICAL ANALYSIS AND ACCEPTANCE CRITERIA

All qualification data were subjected to statistical analysis using JMP Clinical (Google Cloud Life Sciences edition).
*   **Precision:** Evaluated via Relative Standard Deviation (%RSD). Limit: $\le 2.0\%$ for purity methods; $\le 10\%$ for impurity/variant methods.
*   **Linearity:** Correlation coefficient ($R^2$) must be $\ge 0.99$ for quantitative characterization methods.
*   **System Suitability:** Each run must meet the pre-defined system suitability criteria (e.g., Signal-to-Noise > 10).

---

#### 3.2.S.4.3.9. REFERENCES

1.  **ICH Q2(R2):** Validation of Analytical Procedures.
2.  **USP <1225>:** Validation of Compendial Procedures.
3.  **USP <129>:** Analytical Procedures for Recombinant Therapeutic Proteins.
4.  **Google Health Sciences Standard Operating Procedure:** GHS-SOP-QA-0045 "Qualification of Non-Release Characterization Assays."

---

*End of Subsection 3.2.S.4.3 - Method Qualification for Characterization Methods*

---

## Revalidation Strategy

### 3.2.S.4.3 Validation of Analytical Procedures: Revalidation Strategy

**Document ID:** GHS-GLUC-XR-M3DS-VAL-STRAT-001  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)  
**Date:** 24 October 2024  
**Status:** Final - Version 4.1  
**Confidentiality:** Highly Confidential – Proprietary Manufacturing Information  

---

#### 1.0 PURPOSE AND SCOPE

This subsection outlines the comprehensive revalidation strategy for analytical procedures employed in the testing of Glucogen-XR drug substance (glucapeptide). Adherence to this strategy ensures that all analytical methods remain suitable for their intended purpose throughout the lifecycle of the product, in alignment with **ICH Q2(R2) Validation of Analytical Procedures**, **ICH Q14 Analytical Procedure Development**, and **USP <1225> Validation of Compendial Procedures**.

The scope encompasses all release, stability, and in-process control (IPC) methods, including but not limited to:
*   Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC) for Purity/Impurity profiling.
*   Size Exclusion Chromatography (SEC-HPLC) for Aggregation/High Molecular Weight Species (HMWS).
*   Ion Exchange Chromatography (IEX-HPLC) for Charge Heterogeneity.
*   Liquid Chromatography-Mass Spectrometry (LC-MS/MS) for Primary Sequence and Post-Translational Modifications (PTMs).
*   Cell-based Bioassay for Potency (GLP-1 Receptor Activation).
*   Residual DNA (qPCR) and Residual Host Cell Protein (HCP) ELISA.

---

#### 2.0 REGULATORY FRAMEWORK AND GUIDANCE COMPLIANCE

Google Health Sciences (GHS) maintains compliance with the following regulatory frameworks to ensure the continued validity of analytical data for Glucogen-XR:

1.  **ICH Q2(R2):** Guidance on Validation of Analytical Procedures.
2.  **ICH Q12:** Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management.
3.  **FDA Guidance for Industry:** Analytical Procedures and Methods Validation for Drugs and Biologics (July 2015).
4.  **USP <1224>:** Transfer of Analytical Procedures.
5.  **USP <1226>:** Verification of Compendial Procedures.
6.  **21 CFR Part 211.165:** Testing and release for distribution.

---

#### 3.0 TRIGGER EVENTS FOR REVALIDATION (CHANGE CONTROL)

Revalidation is not a static requirement but a dynamic response to changes within the analytical lifecycle. GHS employs a risk-based approach to determine the necessity and extent of revalidation.

##### 3.1 Category A: Significant Changes (Full Revalidation Required)
*   **Changes in Drug Substance Manufacturing Process:** Modifications to the CHO-K1 GS knockout derivative (GHS-CHO-001) cell culture media, fermentation parameters (e.g., a >20% change in dissolved oxygen setpoints), or purification chromatography resins that may alter the impurity profile.
*   **Changes in Drug Substance Composition:** Alterations to the buffer concentration, pH (±0.5 units), or the introduction of new stabilizers in the extended-release formulation.
*   **Major Analytical Method Revision:** Significant changes to mobile phase composition (e.g., switching from Acetonitrile to Methanol), change in stationary phase chemistry (e.g., C18 to C8), or fundamental changes to the bioassay cell line.

##### 3.2 Category B: Moderate Changes (Partial/Targeted Revalidation)
*   **Equipment Upgrades:** Moving from an Agilent 1260 Infinity II to an Agilent 1290 Infinity II platform, or changing the MS detector model (e.g., Q-Exactive to Orbitrap Exploris).
*   **Software Updates:** Major version jumps in Empower 3 Chromatography Data System (CDS) or SoftMax Pro for bioassay calculations.
*   **Site Transfer:** Transfer of testing from 3000 Innovation Drive, South San Francisco, to a secondary contract testing laboratory (CTL).

##### 3.3 Category C: Periodic Review and Verification
*   **Compendial Updates:** Changes to USP/Ph. Eur. general chapters relevant to the method.
*   **Annual Product Review (APR):** Trending of System Suitability Testing (SST) data. If SST failure rates exceed 5% annually, a revalidation assessment is triggered.

---

#### 4.0 REVALIDATION PARAMETERS AND ACCEPTANCE CRITERIA

The following table (Table 4.1) defines the minimum parameters required for revalidation based on the type of change.

**Table 4.1: Revalidation Matrix for Glucogen-XR Analytical Methods**

| Parameter | Assay (Potency) | Purity (HPLC) | Impurities (LC-MS) | Identity | Residuals (HCP/DNA) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Specificity** | Yes | Yes | Yes | Yes | Yes |
| **Accuracy / Recovery** | Yes | Yes | Yes | No | Yes |
| **Precision (Repeatability)** | Yes | Yes | Yes | No | Yes |
| **Intermediate Precision** | Yes | Yes | Yes | No | Yes |
| **LOD / LOQ** | No | Yes | Yes | No | Yes |
| **Linearity / Range** | Yes | Yes | Yes | No | Yes |
| **Robustness** | No* | Yes | Yes | No | No |
| **Stability of Samples** | Yes | Yes | Yes | No | Yes |

*\*Robustness is typically evaluated during initial development/validation and only re-evaluated if the method parameters (e.g., flow rate, temperature) are permanently altered.*

---

#### 5.0 STEP-BY-STEP REVALIDATION PROTOCOL (RP-HPLC PURITY EXAMPLE)

The following protocol applies to the revalidation of Method GHS-AN-044 (Purity by RP-HPLC) following the implementation of a new column supplier for Glucogen-XR (Batch series GLUC-2025-XXX).

##### 5.1 Protocol Preparation and Approval
1.  **Protocol ID Generation:** VAL-PRT-GLUC-2025-089.
2.  **Sample Selection:** Utilize three consecutive batches of Drug Substance (e.g., GLUC-2025-001, GLUC-2025-002, GLUC-2025-003).
3.  **Reference Standard:** Use Glucogen-XR Primary Reference Standard (Lot # GHS-RS-2024-A).

##### 5.2 Specificity Verification
*   **Procedure:** Inject blank (mobile phase), placebo matrix, and degraded drug substance (forced degradation: Heat 60°C for 48h, 0.1M HCl for 2h).
*   **Acceptance Criteria:** No interfering peaks at the retention time of Glucogen-XR peptide ($R_t \approx 14.5$ min). Resolution ($R_s$) between main peak and closest impurity $> 1.5$.

##### 5.3 Linearity and Range
*   **Procedure:** Prepare five concentrations ranging from 50% to 150% of the nominal concentration ($0.5$ mg/mL).
*   **Calculation:** Perform linear regression analysis using the formula:
    $$y = mx + b$$
    Where $y$ is the peak area and $x$ is the concentration.
*   **Acceptance Criteria:** Correlation coefficient ($R^2$) $\ge 0.999$. Residual sum of squares $\le 2.0\%$.

##### 5.4 Accuracy (Recovery)
*   **Procedure:** Spike known amounts of Glucogen-XR into matrix at 80%, 100%, and 120% levels. Perform triplicates at each level.
*   **Acceptance Criteria:** Mean recovery must be between 98.0% and 102.0%.

---

#### 6.0 REPRESENTATIVE DATA: HISTORICAL VS. REVALIDATION BATCHES

**Table 6.1: Comparative Analysis of Validation Results for Glucogen-XR (GLUC-2025-012 through 014)**

| Test Parameter | Original Validation (2023) | Revalidation (2025) - Batch GLUC-2025-012 | Revalidation (2025) - Batch GLUC-2025-013 | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| **Main Peak Purity** | 99.4% | 99.5% | 99.3% | **Pass** |
| **Deamidated Form** | 0.22% | 0.20% | 0.25% | **Pass** |
| **Total Aggregates** | 0.15% | 0.18% | 0.16% | **Pass** |
| **Relative Potency** | 102% | 99% | 101% | **Pass** |
| **RSD (Retention Time)** | 0.05% | 0.08% | 0.06% | **Pass** |
| **Symmetry Factor** | 1.05 | 1.08 | 1.07 | **Pass** |

---

#### 7.0 STATISTICAL EVALUATION FOR REVALIDATION

GHS employs the **F-test** and **t-test** to compare the precision and means of the revalidation data set against the original validation data set.

##### 7.1 Precision Comparison (F-test)
The F-test is used to determine if the variances ($s^2$) of the two datasets are significantly different.
$$F = \frac{s_1^2}{s_2^2}$$
If $F_{calculated} < F_{critical}$ (at 95% confidence), the precision is considered equivalent.

##### 7.2 Mean Comparison (Two-Sample t-test)
$$t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$
If $t_{calculated} < t_{critical}$, there is no significant difference in accuracy/recovery between the original and revalidated method.

---

#### 8.0 EQUIPMENT AND SYSTEM SUITABILITY REQUIREMENTS

Every revalidation exercise must be performed on qualified equipment (IQ/OQ/PQ).

**Table 8.1: Equipment List for Glucogen-XR Revalidation**

| Equipment ID | Description | Last Calib. Date | Next Calib. Due |
| :--- | :--- | :--- | :--- |
| GHS-HPLC-09 | Agilent 1290 Binary Pump | 12-JAN-2025 | 12-JAN-2026 |
| GHS-DET-22 | Diode Array Detector (DAD) | 12-JAN-2025 | 12-JAN-2026 |
| GHS-COL-455 | Waters XBridge BEH C18, 130Å | N/A (New) | Replace after 500 inj. |
| GHS-MS-04 | Thermo Orbitrap Exploris 480 | 05-FEB-2025 | 05-AUG-2025 |

---

#### 9.0 REVALIDATION TIMELINE AND REPORTING

The revalidation process for a major change (Category A) follows a strict 90-day cycle:
1.  **T+0:** Change Control initiated in Veeva QualityDocs.
2.  **T+15:** Revalidation Protocol (VAL-PRT) approved.
3.  **T+45:** Laboratory execution completed.
4.  **T+60:** Statistical analysis and data verification.
5.  **T+75:** Final Revalidation Report (VAL-RPT) drafted.
6.  **T+90:** Quality Assurance (QA) approval and method update in LIMS.

All revalidation reports for Glucogen-XR are archived under the drug substance master file (DSMF) and cross-referenced in the Annual Report to the FDA.

---

#### 10.0 REFERENCES

1.  Google Health Sciences Standard Operating Procedure GHS-SOP-QA-0012: *Analytical Method Lifecycle Management*.
2.  United States Pharmacopeia (USP) <1225>, *Validation of Compendial Procedures*.
3.  FDA Guidance (2015), *Analytical Procedures and Methods Validation for Drugs and Biologics*.
4.  Data on file: Method Development Report GHS-GLUC-MDR-2023-001.

---

**[END OF SECTION 3.2.S.4.3]**

---

# Batch Analysis Data

## Release Testing Results for Clinical Batches

### 3.2.S.4.4 Batch Analysis Data: Release Testing Results for Clinical Batches

#### 3.2.S.4.4.1 Introduction and Scope
This section provides a comprehensive presentation and evaluation of the release testing results for all clinical drug substance (DS) batches of Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS) at the 3000 Innovation Drive facility in South San Francisco, CA. 

Glucogen-XR is a recombinant GLP-1 receptor agonist produced using the proprietary GHS-CHO-001 cell line (a CHO-K1 GS knockout derivative). The molecule is characterized by its extended-release profile, achieved through a site-specific conjugation to a high-molecular-weight branched polyethylene glycol (PEG) moiety. The following data demonstrate the consistency of the manufacturing process and the ability of the analytical control strategy to ensure the identity, strength, quality, purity, and potency of the drug substance intended for use in Phase 2 and Phase 3 clinical trials.

#### 3.2.S.4.4.2 Tabulated Batch Analysis Results
The following tables summarize the release data for primary clinical batches. All testing was performed in accordance with the specifications outlined in Section 3.2.S.4.1 and validated as per ICH Q2(R1).

##### Table 3.2.S.4.4-1: Release Results for Clinical Batches (Phase 2/3 Materials)

| Test Parameter | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | GLUC-2025-004 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Manufacturing Date** | N/A | 14-Jan-2025 | 02-Feb-2025 | 18-Feb-2025 | 10-Mar-2025 |
| **Scale (Bioreactor)** | 2,000 L | 2,000 L | 2,000 L | 2,000 L | 2,000 L |
| **Appearance** | Clear to slightly opalescent | Conforms | Conforms | Conforms | Conforms |
| **Identity (RP-HPLC)** | Ret. Time matches Std | Conforms | Conforms | Conforms | Conforms |
| **Identity (LC-MS)** | 48,234 ± 5 Da | 48,234.2 Da | 48,235.1 Da | 48,233.8 Da | 48,234.4 Da |
| **Purity (SEC-HPLC)** | ≥ 98.0% Main Peak | 99.4% | 99.2% | 99.5% | 99.3% |
| **High Mol. Wt. Species** | ≤ 1.5% | 0.4% | 0.5% | 0.3% | 0.4% |
| **Purity (RP-HPLC)** | ≥ 95.0% Main Peak | 97.2% | 96.8% | 97.5% | 97.1% |
| **Potency (In Vitro)** | 80% - 125% Reference | 102% | 98% | 105% | 101% |
| **pH** | 6.5 ± 0.3 | 6.51 | 6.49 | 6.52 | 6.50 |
| **Host Cell Protein** | ≤ 10 ppm | 2.1 ppm | 3.4 ppm | 1.8 ppm | 2.5 ppm |
| **Host Cell DNA** | ≤ 10 pg/mg | < LOD | < LOD | < LOD | < LOD |
| **Endotoxin** | ≤ 0.5 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg |
| **Bioburden** | ≤ 10 CFU/100 mL | 0 CFU/100 mL | 0 CFU/100 mL | 0 CFU/100 mL | 0 CFU/100 mL |

---

#### 3.2.S.4.4.3 Detailed Analytical Procedures and Step-by-Step Protocols

To ensure the integrity of the release data presented above, the following rigorous analytical protocols were employed. These methods are categorized by their role in assessing the Critical Quality Attributes (CQAs) of Glucogen-XR.

##### 3.2.S.4.4.3.1 Protocol for Purity Assessment via Size-Exclusion HPLC (SEC-HPLC)
*Method ID: GHS-ANA-SEC-04*

**Objective:** To quantify the monomeric purity and determine the percentage of high-molecular-weight (HMW) aggregates and low-molecular-weight (LMW) fragments.

**Equipment:** Agilent 1260 Infinity II Bio-inert LC System with Multi-Angle Light Scattering (MALS) detector.

**Procedure:**
1.  **Mobile Phase Preparation:** Prepare a buffer consisting of 50 mM Sodium Phosphate, 200 mM Arginine HCl, pH 6.8. Filter through a 0.22 µm PES membrane.
2.  **Column Equilibration:** Use a TSKgel G3000SWxl column (7.8 mm ID x 30 cm). Equilibrate at a flow rate of 0.5 mL/min for 60 minutes or until baseline stability is achieved ($\Delta$Pressure < 0.5%).
3.  **Sample Preparation:** Dilute Glucogen-XR Drug Substance to 1.0 mg/mL using the mobile phase.
4.  **Injection Volume:** 20 µL.
5.  **Detection:** UV absorbance at 214 nm and 280 nm.
6.  **Integration Strategy:** 
    *   Integrate all peaks from 5 minutes to 25 minutes.
    *   Calculate Percent Purity using the formula:
        $$ \% \text{Purity} = \left( \frac{\text{Area}_{\text{main peak}}}{\sum \text{Area}_{\text{all peaks}}} \right) \times 100 $$
7.  **System Suitability:** The tailing factor for the main peak must be between 0.8 and 1.2. The Relative Standard Deviation (RSD) for the retention time of five replicate injections of the Working Reference Standard (WRS) must be $\le$ 1.0%.

##### 3.2.S.4.4.3.2 Protocol for Potency (Cell-Based Bioassay)
*Method ID: GHS-BIO-012*

**Objective:** To measure the biological activity of Glucogen-XR by evaluating GLP-1 receptor activation in a cAMP-dependent reporter gene assay.

**Cell Line:** HEK293 cells stably transfected with the human GLP-1 receptor and a CRE-driven Luciferase reporter.

**Procedure:**
1.  **Cell Seeding:** Plate cells at a density of $5 \times 10^4$ cells/well in a 96-well white-walled plate. Incubate for 24 hours at 37°C, 5% $CO_2$.
2.  **Standard and Sample Preparation:** Prepare a 10-point serial dilution (1:3) of both the Glucogen-XR Reference Standard and the Test Sample (GLUC-2025-XXX), ranging from 1000 nM to 0.05 nM.
3.  **Stimulation:** Add diluted samples to the cell plate. Incubate for 4 hours.
4.  **Detection:** Add Steady-Glo® Luciferase Assay System reagent. Incubate for 10 minutes in the dark.
5.  **Measurement:** Read luminescence on a Spectramax M5 plate reader.
6.  **Data Analysis:**
    *   Fit the dose-response curve using a four-parameter logistic (4PL) model:
        $$ y = D + \frac{A - D}{1 + (\frac{x}{C})^B} $$
        Where $A$ = Bottom asymptote, $B$ = Hill slope, $C$ = $EC_{50}$, and $D$ = Top asymptote.
    *   Calculate Relative Potency:
        $$ \text{Relative Potency} = \left( \frac{EC_{50}(\text{Standard})}{EC_{50}(\text{Sample})} \right) \times 100 $$

---

#### 3.2.S.4.4.4 Host Cell Protein (HCP) Analysis and Trace Impurities

Google Health Sciences utilizes a high-sensitivity automated ELISA platform (Gyrolab™) for the detection of CHO-derived host cell proteins.

##### Table 3.2.S.4.4-2: Detailed Trace Impurity Analysis for Batch GLUC-2025-001

| Analyte | Method | Result | Limit of Detection (LOD) |
| :--- | :--- | :--- | :--- |
| **CHO Host Cell Protein** | Gyrolab ELISA | 2.1 ng/mg | 0.5 ng/mg |
| **Residual Protein A** | ELISA | < 0.1 ng/mg | 0.1 ng/mg |
| **Residual DNA** | qPCR (GS Gene) | 0.4 pg/mg | 0.2 pg/mg |
| **Gentamicin** | ELISA | < 5 ppb | 5 ppb |
| **Polysorbate 80** | RP-HPLC-ELSD | 0.021% w/v | 0.005% w/v |

**Statistical Evaluation of HCP Consistency:**
The mean HCP level across the four clinical batches is 2.45 ppm with a standard deviation of 0.61 ppm. This demonstrates a high degree of process consistency during the downstream purification (DSP) stages, specifically the Protein A capture and the subsequent Cation Exchange (CEX) and Anion Exchange (AEX) polishing steps.

---

#### 3.2.S.4.4.5 Characterization of Glycosylation and PEGylation Efficiency

Glucogen-XR requires precise control over the PEGylation reaction to ensure the extended-release pharmacokinetic profile.

**PEG-to-Peptide Ratio Calculation:**
The conjugation efficiency is monitored using the following mass balance equation:
$$ \eta_{PEG} = \frac{m_{conjugated}}{m_{total\_peptide}} \times 100 $$
Where $m_{conjugated}$ is determined by the peak area of the mono-PEGylated species in the RP-HPLC chromatogram relative to the total area.

**Batch Data for PEGylation:**
*   **GLUC-2025-001:** 98.4% mono-PEGylated
*   **GLUC-2025-002:** 97.9% mono-PEGylated
*   **GLUC-2025-003:** 98.8% mono-PEGylated
*   **GLUC-2025-004:** 98.1% mono-PEGylated

These values are well within the internal action limit of $\ge$ 95.0%, ensuring uniform pharmacological behavior across clinical subjects.

---

#### 3.2.S.4.4.6 Reference Standards
The primary reference standard (GHS-GLUC-RS-01) was used for all comparative analyses. This standard was calibrated against the USP GLP-1 international standard where applicable, though the unique PEGylated structure of Glucogen-XR necessitates the use of a product-specific working standard for potency and identity.

#### 3.2.S.4.4.7 Conclusion
The batch analysis data for GLUC-2025-001 through GLUC-2025-004 confirm that the manufacturing process at Google Health Sciences is robust and reproducible. All batches meet the pre-defined specifications for Phase 3 clinical supply. The purity levels (average 99.35% by SEC) and potency results (mean 101.5%) indicate a high-quality drug substance suitable for continued clinical development under IND requirements.

---
*Footnotes:*
1. ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2. USP <121> Insulin Assays (referenced for general peptide bioassay principles).
3. GHS Internal Report: RPT-2024-DS-VAL-09: Validation of the 2,000L Scale Glucogen-XR Process.

---

## Release Testing Results for Registration Batches

### 3.2.S.4.4 Batch Analyses: Release Testing Results for Registration Batches

---

#### 3.2.S.4.4.1 Introduction and Scope of Registration Batches
This section provides a comprehensive presentation and evaluation of the release testing data for three (3) consecutive primary registration (stability) batches of Glucogen-XR (glucapeptide extended-release) drug substance. These batches were manufactured by Google Health Sciences (GHS) at the South San Francisco cGMP facility (3000 Innovation Drive) to support the Biologics License Application (BLA) under the provisions of 21 CFR § 601.2 and in accordance with ICH Q6B (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*).

The registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) represent the commercial-scale manufacturing process (Process v2.1), utilizing the proprietary CHO-K1 GS knockout derivative cell line (GHS-CHO-001). These batches were produced at the 2,000L bioreactor scale and underwent identical purification sequences including Protein A affinity chromatography, viral inactivation, multimodal cation exchange, and nanofiltration.

#### 3.2.S.4.4.2 Tabulated Batch Analysis Summary
The following Table 3.2.S.4.4-1 summarizes the release data against the proposed commercial specifications. All results are reported as conforming to the predefined acceptance criteria.

**Table 3.2.S.4.4-1: Release Results for Glucogen-XR Registration Batches**

| Test Parameter | Test Method (SOP-GHS-ID) | Acceptance Criteria | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Batch GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | SOP-QC-102 (Visual) | Clear to slightly opalescent, colorless to slightly yellow liquid; free of visible particles | Conforms | Conforms | Conforms |
| **Identity (RT)** | SOP-QC-440 (RP-HPLC) | Retention time corresponds to Reference Standard (± 2%) | Conforms (14.21 min) | Conforms (14.19 min) | Conforms (14.22 min) |
| **Identity (Charge)** | SOP-QC-452 (icIEF) | Electropherogram profile matches Reference Standard | Conforms | Conforms | Conforms |
| **Purity (Monomer)** | SOP-QC-310 (SEC-HPLC) | ≥ 98.0% Monomer | 99.4% | 99.2% | 99.5% |
| **High Mol. Wt.** | SOP-QC-310 (SEC-HPLC) | ≤ 1.5% HMW | 0.4% | 0.5% | 0.3% |
| **Purity (Reduced)** | SOP-QC-501 (CE-SDS) | ≥ 97.0% Main Peak | 98.8% | 98.6% | 99.1% |
| **Charge Variants** | SOP-QC-452 (icIEF) | Main Peak: 65.0 - 80.0%; Acidic: ≤ 25.0%; Basic: ≤ 10.0% | Main: 72.4% Acid: 18.2% Basic: 9.4% | Main: 70.1% Acid: 20.4% Basic: 9.5% | Main: 73.8% Acid: 17.1% Basic: 9.1% |
| **Glycan Profile** | SOP-QC-612 (HILIC-FLD) | G0F: 40-60%; G1F: 20-35%; G2F: 5-15% | G0F: 48.2% G1F: 28.4% G2F: 11.2% | G0F: 50.1% G1F: 27.2% G2F: 10.8% | G0F: 47.9% G1F: 29.1% G2F: 11.5% |
| **Potency** | SOP-BIO-009 (Cell-based Bioassay) | 80% to 125% of Ref. Standard | 104% | 98% | 112% |
| **Concentration** | SOP-QC-201 (UV A280) | 100 mg/mL ± 5 mg/mL | 101.2 mg/mL | 99.8 mg/mL | 100.5 mg/mL |
| **Host Cell Protein** | SOP-QC-881 (ELISA) | ≤ 100 ppm | 12 ppm | 15 ppm | 10 ppm |
| **Residual DNA** | SOP-QC-890 (qPCR) | ≤ 10 pg/mg | < 1.0 pg/mg (LOQ) | < 1.0 pg/mg (LOQ) | < 1.0 pg/mg (LOQ) |
| **Endotoxin** | USP <85> (LAL) | ≤ 0.5 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg |
| **Bioburden** | USP <61> | ≤ 10 CFU/10 mL | 0 CFU/10 mL | 0 CFU/10 mL | 0 CFU/10 mL |

---

#### 3.2.S.4.4.3 Detailed Analytical Protocols and Calculation Methodology

##### 3.2.S.4.4.3.1 Purity by Size Exclusion Chromatography (SEC-HPLC)
**Equipment:** Agilent 1260 Infinity II Bio-inert LC System with Quaternary Pump (ID: GHS-EQ-HPLC-09).
**Column:** TSKgel G3000SWxl, 7.8 mm ID x 30 cm, 5 µm.

*   **Mobile Phase:** 50 mM Sodium Phosphate, 300 mM Sodium Chloride, pH 6.8 ± 0.1.
*   **Flow Rate:** 0.5 mL/min (Isocratic).
*   **Injection Volume:** 20 µL (Target concentration 2.0 mg/mL).
*   **Detection:** UV at 280 nm.

**Calculation Formula (Area %):**
The percentage of monomer, High Molecular Weight (HMW) species, and Low Molecular Weight (LMW) species is calculated using the following equation:
$$ \% \text{Component} = \left( \frac{A_{\text{target}}}{A_{\text{total}}} \right) \times 100 $$
Where:
*   $A_{\text{target}}$ = Peak area of the specific component (e.g., Monomer).
*   $A_{\text{total}}$ = Sum of all peak areas from 10 to 25 minutes, excluding the solvent front.

##### 3.2.S.4.4.3.2 Potency via Cell-Based Reporter Gene Assay
The biological activity of Glucogen-XR is determined by its ability to activate the GLP-1 receptor in a HEK-293 cell line stably transfected with the human GLP-1R and a cAMP-response element (CRE) coupled to a luciferase reporter gene.

**Procedure:**
1.  **Cell Seeding:** HEK-293/GLP-1R cells are seeded at $2.5 \times 10^4$ cells/well in a 96-well white-walled plate and incubated for 24 hours at 37°C, 5% $CO_2$.
2.  **Dilution Series:** Prepare an 8-point serial dilution of Reference Standard (Batch RS-2024-001) and Test Sample (Batch GLUC-2025-XXX) ranging from 0.001 nM to 100 nM.
3.  **Stimulation:** Cells are treated with dilutions and incubated for 4 hours.
4.  **Detection:** Bio-Glo™ Luciferase Assay Reagent is added. Luminescence is measured using a Spectramax M5e plate reader.

**Statistical Analysis:**
Data are analyzed using a 4-parameter logistic (4-PL) curve fit model:
$$ y = D + \frac{A-D}{1 + (\frac{x}{C})^B} $$
Where:
*   $A$ = Bottom asymptote
*   $B$ = Hill slope
*   $C$ = $EC_{50}$
*   $D$ = Top asymptote

**Relative Potency Calculation:**
$$ \text{Relative Potency} = \left( \frac{EC_{50, \text{Standard}}}{EC_{50, \text{Sample}}} \right) \times 100\% $$
The acceptance criteria require the parallelism of the curves (ratio of slopes between 0.8 and 1.2).

---

#### 3.2.S.4.4.4 Process Impurity Clearance Analysis (Summary of Results)
While host-related impurities are tested at release, the following data from the registration batches demonstrates the robust clearance across the downstream process.

**Table 3.2.S.4.4-2: HCP and rDNA Clearance Across Unit Operations**

| Process Step | HCP (ppm) GLUC-2025-001 | HCP (ppm) GLUC-2025-002 | DNA (pg/mg) GLUC-2025-001 | DNA (pg/mg) GLUC-2025-002 |
| :--- | :--- | :--- | :--- | :--- |
| **Harvested Cell Culture Fluid** | 450,000 | 485,000 | 1,200,000 | 1,150,000 |
| **Protein A Eluate** | 1,200 | 1,450 | 850 | 920 |
| **Cation Exchange (CEX) Pool** | 45 | 52 | < 5.0 | < 5.0 |
| **Final Drug Substance** | 12 | 15 | < 1.0 (LOQ) | < 1.0 (LOQ) |

*Calculations for Log Reduction Value (LRV):*
$$ \text{LRV} = \log_{10} \left( \frac{\text{Total Impurity Amount}_{\text{Load}}}{\text{Total Impurity Amount}_{\text{Pool}}} \right) $$

For GLUC-2025-001, the cumulative HCP LRV was calculated as 4.57, exceeding the process characterization target of >4.0.

---

#### 3.2.S.4.4.5 Reference Material Traceability
All release testing was performed against Glucogen-XR Primary Reference Standard (Lot # RS-2024-001), which was characterized using orthogonal techniques including LC-MS/MS peptide mapping (99.8% coverage), N-terminal sequencing (HGEGTFTSDV...), and sedimentation velocity analytical ultracentrifugation (SV-AUC).

#### 3.2.S.4.4.6 Conclusion on Batch Analysis
The analytical data for registration batches GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003 demonstrate high levels of batch-to-batch consistency. The purity profiles (SEC, icIEF, and CE-SDS) show minimal variance, with all critical quality attributes (CQAs) remaining well within the proposed clinical and commercial specification limits. These data support the conclusion that the Google Health Sciences manufacturing process is in a state of control and is capable of producing Glucogen-XR drug substance of consistent quality for commercial distribution.

---
**Footnotes & References:**
1. USP <121> *Insulin Assays*.
2. ICH Q11 *Development and Manufacture of Drug Substances*.
3. GHS Internal Report RPT-GLUC-2025-QA: *Statistical Process Control Analysis of Registration Batches*.
4. *Validation of Analytical Procedures: Text and Methodology* (ICH Q2(R1)).

---

## Statistical Summary

### **3.2.S.4.4 Batch Analysis: Statistical Summary**
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Document ID:** GHS-GLUC-M3DS-STAT-001  
**Revision:** 04 (Final Submission Version)  

---

#### **1.0 Introduction and Scope**
This section provides a comprehensive statistical evaluation of the Batch Analysis data for Glucogen-XR drug substance (DS). The objective of this summary is to demonstrate the consistency of the manufacturing process across the clinical, stability, and Process Performance Qualification (PPQ) scales. Google Health Sciences (GHS) has employed a robust statistical framework, utilizing Bayesian inference, multivariate analysis, and frequentist hypothesis testing to ensure that the Critical Quality Attributes (CQAs) of Glucogen-XR remain within defined acceptance criteria (3.2.S.4.1) and align with the Quality Target Product Profile (QTPP).

The statistical population includes $N=30$ batches manufactured between 2023 and 2025 at the South San Francisco facility (Site ID: GHS-SSF-3000).

---

#### **2.0 Statistical Methodology and Software Protocols**

##### **2.1 Computational Infrastructure**
Data processing was executed via the Google Cloud Life Sciences (GCLS) Advanced Analytics Engine. All statistical calculations were performed using R (Version 4.2.2) and SAS (Version 9.4).
*   **Confidence Intervals:** 95% (Two-sided) unless otherwise specified.
*   **Tolerance Intervals:** 99% coverage with 95% confidence ($k=3.588$ for $n=30$).
*   **Outlier Detection:** Grubbs’ Test and Mahalanobis Distance for multivariate outliers.

##### **2.2 Calculation Formulas**
1.  **Process Capability Index ($Cpk$):**
    $$Cpk = \min\left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
    *Where $USL$ = Upper Specification Limit, $LSL$ = Lower Specification Limit.*
2.  **Relative Standard Deviation (RSD%):**
    $$\%RSD = \left( \frac{\sigma}{\bar{x}} \right) \times 100$$
3.  **Pooled Variance ($s^2_p$):**
    $$s^2_p = \frac{\sum (n_i - 1)s_i^2}{\sum (n_i - 1)}$$

---

#### **3.0 Summary of Batch Data (Tabulated Results)**

The following table summarizes the primary CQAs for $N=30$ batches, including the GLUC-2025-XXX series (PPQ Batches).

##### **Table 3.2.S.4.4-1: Statistical Distribution of CQAs for Glucogen-XR DS**

| CQA Parameter | Specification Limit | Mean ($\mu$) | Std Dev ($\sigma$) | Min | Max | $Cpk$ | $P$-value (Normality) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Protein Content** | 95.0% - 105.0% | 100.2% | 0.85% | 98.4% | 101.9% | 2.04 | 0.742 |
| **Purity (RP-HPLC)** | $\ge 98.0\%$ | 99.42% | 0.18% | 99.10% | 99.75% | 2.63 | 0.410 |
| **HMW Species (SEC)** | $\le 1.0\%$ | 0.24% | 0.06% | 0.12% | 0.38% | 4.22 | 0.115 |
| **N-Terminal Trunc.** | $\le 0.5\%$ | 0.12% | 0.03% | 0.08% | 0.19% | 4.22 | 0.088 |
| **Host Cell Protein** | $\le 10$ ppm | 3.4 ppm | 1.1 ppm | 1.2 ppm | 5.8 ppm | 2.00 | 0.032* |
| **Residual DNA** | $\le 10$ pg/mg | 1.4 pg/mg | 0.6 pg/mg | 0.2 pg/mg | 2.8 pg/mg | 4.78 | 0.012* |
| **Glycosylation (Sia)** | 2.4 - 3.2 mol/mol | 2.85 | 0.11 | 2.62 | 3.10 | 1.36 | 0.560 |

*\*Note: Log-transformation applied for non-normal impurity distributions.*

---

#### **4.0 Batch-Specific Analytical Data (GLUC-2025-001 to 015)**

Detailed results for the most recent 15 batches produced using the commercial process (GHS-CP-V2).

##### **Table 3.2.S.4.4-2: Detailed Batch Analysis - Critical Quality Attributes**

| Batch Number | Mfg Date | Scale (L) | Potency (%) | Purity (%) | Endotoxin (EU/mg) | Bioburden (CFU/10mL) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 04-JAN-25 | 2000 | 100.4 | 99.4 | <0.01 | 0 |
| **GLUC-2025-002** | 12-JAN-25 | 2000 | 99.8 | 99.5 | <0.01 | 0 |
| **GLUC-2025-003** | 20-JAN-25 | 2000 | 101.1 | 99.3 | 0.02 | 0 |
| **GLUC-2025-004** | 01-FEB-25 | 2000 | 98.9 | 99.6 | <0.01 | 0 |
| **GLUC-2025-005** | 08-FEB-25 | 2000 | 100.2 | 99.2 | <0.01 | 0 |
| **GLUC-2025-006** | 15-FEB-25 | 2000 | 100.5 | 99.4 | <0.01 | 0 |
| **GLUC-2025-007** | 22-FEB-25 | 2000 | 99.7 | 99.7 | <0.01 | 0 |
| **GLUC-2025-008** | 01-MAR-25 | 2000 | 101.2 | 99.5 | 0.03 | 0 |
| **GLUC-2025-009** | 08-MAR-25 | 2000 | 99.1 | 99.3 | <0.01 | 0 |
| **GLUC-2025-010** | 15-MAR-25 | 2000 | 100.0 | 99.4 | <0.01 | 0 |
| **GLUC-2025-011** | 22-MAR-25 | 2000 | 99.6 | 99.8 | <0.01 | 0 |
| **GLUC-2025-012** | 01-APR-25 | 2000 | 100.8 | 99.2 | 0.02 | 0 |
| **GLUC-2025-013** | 08-APR-25 | 2000 | 100.3 | 99.5 | <0.01 | 0 |
| **GLUC-2025-014** | 15-APR-25 | 2000 | 98.7 | 99.1 | <0.01 | 0 |
| **GLUC-2025-015** | 22-APR-25 | 2000 | 101.5 | 99.4 | 0.04 | 0 |

---

#### **5.0 Multivariate Statistical Process Control (MSPC)**

##### **5.1 Principal Component Analysis (PCA)**
To assess batch-to-batch consistency and identify potential clusters, PCA was performed on 12 quality attributes (Purity, Potency, Aggregation, Charge Variants, Glycosylation, and Impurities).
*   **PC1 (42% variance):** Driven primarily by Charge Variant profile (Acidic/Basic variants).
*   **PC2 (18% variance):** Driven by Post-Translational Modifications (Sialylation levels).
*   **Results:** All GLUC-2025-XXX batches fell within the 95% Hotelling’s $T^2$ ellipse, indicating that the commercial scale manufacturing process is highly stable and reproduces the profiles of the clinical pivotal batches.

##### **5.2 Control Charts (Shewhart)**
Shewhart X-bar/R charts were generated for Purity (RP-HPLC). No "Western Electric Rules" violations were observed.
*   **Process Mean:** 99.42%
*   **Upper Control Limit (UCL):** 99.96%
*   **Lower Control Limit (LCL):** 98.88%

---

#### **6.0 Impurity Profile Analysis**

##### **6.1 Host Cell Protein (HCP) Clearance Efficiency**
HCP levels were monitored using a proprietary GHS-CHO-001 specific ELISA (Validation Report GHS-VAL-ELISA-77).
*   **Mean Level:** 3.4 ppm.
*   **Maximum Observed:** 5.8 ppm.
*   **Safety Threshold:** 10 ppm.
*   **Statistical Margin of Safety:** $5.4\sigma$ from the limit.

##### **6.2 Product-Related Impurities (Truncated Peptides)**
Statistical monitoring of the N-terminal Glu-peptide truncation (des-His1) is critical for GLP-1 receptor affinity.
*   **Observed Range:** 0.08% to 0.19%.
*   **Linear Regression Analysis:** No significant correlation ($R^2 = 0.04$) was found between fermentation duration (12-14 days) and truncation level, confirming the robustness of the harvest timing window.

---

#### **7.0 Step-by-Step Statistical Protocol for New Batch Incorporation**

Google Health Sciences adheres to the following protocol (SOP-STAT-09) for integrating new batch data into the Statistical Summary:

1.  **Data Verification:** Retrieve analytical results from LIMS (Laboratory Information Management System). Cross-check against Batch Production Record (BPR).
2.  **Normality Testing:** Perform Shapiro-Wilk test. If $W < 0.05$, apply Box-Cox transformation.
3.  **Outlier Screening:** Execute Grubbs’ Test (alpha = 0.01). Any outlier must be investigated via a Quality Deviation Report (QDR).
4.  **Cpk Calculation:** Re-calculate $Cpk$ for all CQAs. A $Cpk < 1.33$ triggers a preventive action review.
5.  **Trend Analysis:** Update the Exponentially Weighted Moving Average (EWMA) chart to detect small shifts in the mean.
6.  **Reporting:** Generate an updated "Rolling Batch Summary Report" for the Annual Product Review (APR).

---

#### **8.0 Regulatory Compliance and Guidelines**
This statistical summary has been prepared in accordance with the following:
*   **ICH Q8(R2):** Pharmaceutical Development (Quality by Design).
*   **ICH Q9:** Quality Risk Management.
*   **ICH Q10:** Pharmaceutical Quality System.
*   **ICH Q11:** Development and Manufacture of Drug Substances.
*   **FDA Guidance for Industry:** *Process Validation: General Principles and Practices (2011)*.
*   **USP <1010>:** Analytical Data—Interpretation and Treatment.

---

#### **9.0 Conclusion**
The statistical analysis of Glucogen-XR DS batches (GLUC-2025 series) confirms a highly capable manufacturing process ($Cpk > 1.33$ for all major CQAs). The low variability in glycan distribution and high purity levels ensure a consistent pharmacokinetic profile for the extended-release formulation. Google Health Sciences concludes that the drug substance manufacturing process is in a state of statistical control and is suitable for commercial supply.

---
*End of Subsection 3.2.S.4.4*

---

# Justification of Specification

## Critical Quality Attributes (CQAs)

### **3.2.S.4.5 Justification of Specification**
#### **Subsection: Critical Quality Attributes (CQAs)**

---

### **1.0 Introduction and Quality Risk Management (QRM) Approach**

The identification and justification of Critical Quality Attributes (CQAs) for **Glucogen-XR (glucapeptide extended-release)** follow a science-based, risk-oriented approach aligned with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, and **ICH Q11 Development and Manufacture of Drug Substances**.

Google Health Sciences (GHS) has implemented a robust Quality by Design (QbD) framework to ensure that the drug substance (DS) consistently meets the desired clinical performance profile. The CQAs for Glucogen-XR—a recombinant GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001 cell line**—are defined as physical, chemical, biological, or microbiological properties or characteristics that must be within an appropriate limit, range, or distribution to ensure the desired product quality, safety, and efficacy.

#### **1.1 Risk Assessment Methodology**
A Failure Mode and Effects Analysis (FMEA) was conducted during the transition from Phase II to Phase III to re-evaluate the impact of molecular attributes on:
1.  **Biological Activity (Potency):** Binding affinity to the GLP-1 receptor.
2.  **Pharmacokinetics/Pharmacodynamics (PK/PD):** Extended-release profile and half-life.
3.  **Immunogenicity:** Potential for anti-drug antibody (ADA) formation.
4.  **Safety:** Toxicity or hypersensitivity reactions.

**Table 1.1-1: Risk Ranking Criteria for CQA Identification**
| Severity Score | Impact Description | Regulatory/Clinical Implication |
| :--- | :--- | :--- |
| **9-10 (High)** | Significant impact on safety, efficacy, or PK/PD. | Must be a CQA; controlled in Specification. |
| **4-8 (Medium)** | Moderate impact; likely managed by process controls. | Potential CQA; monitored via In-Process Controls (IPC). |
| **1-3 (Low)** | Minimal impact on clinical performance. | Non-CQA; monitored via Characterization/Monitoring. |

---

### **2.0 Detailed Analysis of Critical Quality Attributes (CQAs)**

#### **2.1 Primary Structure and Amino Acid Sequence**
**Attribute ID:** CQA-001  
**Category:** Identity / Purity  
**Risk Score:** 10 (Critical)

Glucogen-XR is a 31-amino acid peptide fused to a proprietary extended-release (XR) motif. Any deviation in the primary sequence (e.g., amino acid substitution, deletion, or truncation) could fundamentally alter receptor binding or increase immunogenic potential.

*   **Analytical Control:** N-terminal sequencing (Edman Degradation) and LC-MS/MS Peptide Mapping.
*   **Justification:** Complete sequence coverage (100%) is required for every batch to ensure fidelity of the GHS-CHO-001 translation process.

**Table 2.1-1: Historical Sequence Fidelity Data (Pivotal Batches)**
| Batch Number | Date of Manufacture | Site | Sequence Coverage (%) | Result |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | SSF, CA | 100.0 | Confirms Primary Structure |
| GLUC-2025-002 | 02-FEB-2025 | SSF, CA | 100.0 | Confirms Primary Structure |
| GLUC-2025-003 | 28-FEB-2025 | SSF, CA | 100.0 | Confirms Primary Structure |

---

#### **2.2 Biological Potency (GLP-1 Receptor Activation)**
**Attribute ID:** CQA-002  
**Category:** Biological Activity  
**Risk Score:** 10 (Critical)

The therapeutic efficacy of Glucogen-XR is directly dependent on its ability to activate the GLP-1 receptor (GLP-1R), stimulating glucose-dependent insulin secretion. 

*   **Mechanism of Action (MoA):** Glucogen-XR binds to the extracellular domain of GLP-1R, inducing a conformational change that activates Gαs proteins, leading to cyclic AMP (cAMP) accumulation.
*   **Analytical Method:** Cell-based Bioassay (cAMP Response Element - CRE Reporter Gene Assay) using HEK293 cells overexpressing human GLP-1R.
*   **Specification Limit:** 80% to 125% of Reference Standard.

**Calculation for Relative Potency:**
The potency is calculated using a 4-parameter logistic (4-PL) model:
$$y = \frac{A - D}{1 + (\frac{x}{C})^B} + D$$
Where:
*   $y$ = Response (Luminescence)
*   $x$ = Concentration of Glucogen-XR
*   $A$ = Asymptotic Maximum
*   $B$ = Slope Factor (Hill Slope)
*   $C$ = $EC_{50}$ (Concentration at half-maximal response)
*   $D$ = Asymptotic Minimum

**Table 2.2-1: Potency Results for GLUC-2025 Series**
| Batch Number | EC50 (nM) - Sample | EC50 (nM) - Ref | Relative Potency (%) | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-004 | 0.42 | 0.41 | 102.4 | Pass |
| GLUC-2025-005 | 0.39 | 0.41 | 95.1 | Pass |
| GLUC-2025-006 | 0.45 | 0.41 | 109.8 | Pass |

---

#### **2.3 Glycosylation Profile (Sialylation and Galactosyl-N-Acetylglucosamine)**
**Attribute ID:** CQA-003  
**Category:** Heterogeneity  
**Risk Score:** 8 (High)

While the peptide backbone drives activity, the glycosylation of the XR-motif modulates the PK profile. Specifically, terminal sialic acid content (N-acetylneuraminic acid, NANA) protects the molecule from hepatic clearance via the asialoglycoprotein receptor (ASGPR).

*   **Total Sialic Acid Requirement:** $\ge$ 5.0 mol/mol of protein.
*   **Analytical Method:** HPAEC-PAD (High-Performance Anion-Exchange Chromatography with Pulsed Amperometric Detection).

**Table 2.3-1: Sialic Acid Content Quantification (USP <129>)**
| Batch Number | NANA Content (mol/mol) | NGNA Content (%) | Total Sialic Acid |
| :--- | :--- | :--- | :--- |
| GLUC-2025-007 | 6.2 | < 0.1 | 6.2 |
| GLUC-2025-008 | 5.9 | < 0.1 | 5.9 |
| GLUC-2025-009 | 6.5 | < 0.1 | 6.5 |

---

#### **2.4 High Molecular Weight (HMW) Species (Aggregates)**
**Attribute ID:** CQA-004  
**Category:** Purity / Product-Related Substances  
**Risk Score:** 9 (Critical)

Aggregates (dimers, trimers, and higher-order polymers) in peptide therapeutics are associated with increased immunogenicity risk and potential loss of potency. For Glucogen-XR, the extended-release motif can be prone to self-association if the pH or ionic strength deviates from the validated range.

*   **Specification Limit:** $\le$ 1.5% total HMW.
*   **Analytical Method:** Size Exclusion Chromatography (SEC-HPLC) using a TSKgel G3000SWxl column.
*   **Chromatographic Conditions:**
    *   Mobile Phase: 0.2 M Potassium Phosphate, 0.25 M KCl, pH 6.8.
    *   Flow Rate: 0.5 mL/min.
    *   Detection: UV at 214 nm and 280 nm.

**Table 2.4-1: SEC-HPLC Purity Results**
| Batch ID | Main Peak (%) | HMW (%) | LMW (%) | Acceptance |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-010 | 99.2 | 0.7 | 0.1 | Meets Spec |
| GLUC-2025-011 | 98.9 | 0.9 | 0.2 | Meets Spec |
| GLUC-2025-012 | 99.5 | 0.4 | 0.1 | Meets Spec |

---

#### **2.5 Deamidation (Asparagine Deamidation at Position 28)**
**Attribute ID:** CQA-005  
**Category:** Purity / Product-Related Substances  
**Risk Score:** 6 (Medium)

Deamidation of Asn28 to Asp28 or isoAsp28 occurs during downstream processing and storage. Excessive deamidation has been shown in *in vitro* studies to reduce GLP-1R affinity by approximately 15%.

*   **Analytical Method:** Cation Exchange Chromatography (CEX-HPLC).
*   **Specification Limit:** Sum of acidic variants $\le$ 10.0%.

---

### **3.0 Process-Related Impurities (Safety CQAs)**

Process-related impurities are managed according to **ICH Q6B**. These include Host Cell Proteins (HCP), Host Cell DNA (hcDNA), and residuals from the purification process.

#### **3.1 Host Cell Proteins (HCP)**
**Attribute ID:** CQA-006  
**Risk Score:** 9 (Critical)
Residual proteins from the GHS-CHO-001 cell line can cause anaphylaxis or generate anti-HCP antibodies.

*   **Analytical Method:** Multi-analyte ELISA using polyclonal antibodies raised against the GHS-CHO-001 null cell line lysate.
*   **Specification:** $\le$ 100 ppm (ng HCP/mg DS).

**Step-by-Step HCP Extraction Protocol (SOP-PUR-442):**
1.  Dilute Drug Substance to 1.0 mg/mL in Sample Diluent (Phosphate Buffered Saline + 0.1% BSA).
2.  Add 100 µL of sample, standards, and controls to pre-coated anti-HCP microplate.
3.  Incubate for 2 hours at room temperature (22°C ± 2°C) with orbital shaking (500 rpm).
4.  Wash 5 times with 300 µL Wash Buffer.
5.  Add 100 µL HRP-conjugated Detection Antibody.
6.  Incubate for 1 hour.
7.  Develop with TMB substrate for 20 minutes (protected from light).
8.  Stop reaction with 1M H2SO4 and read absorbance at 450/650 nm.

---

### **4.0 Summary Tabulation of CQA Justification**

The following table summarizes the justification for each attribute included in the formal Drug Substance Specification.

**Table 4.0-1: Comprehensive CQA Matrix and Control Strategy**
| Quality Attribute | Impact on | Rationale for CQA Designation | Control Strategy |
| :--- | :--- | :--- | :--- |
| **Appearance** | Safety | Indicates presence of visible particulates or oxidation. | Release & Stability (Visual) |
| **Identity (RT)** | Efficacy | Confirms correct molecule based on hydrophobic profile. | Release (RP-HPLC) |
| **Identity (MS)** | Safety | Confirms molecular weight (MW: 32,415.6 Da). | Characterization (Orbitrap MS) |
| **Purity (SEC)** | Safety | High risk of immunogenicity from aggregates. | Release & Stability (SEC) |
| **Purity (RP)** | Efficacy | Controls oxidized and truncated species. | Release & Stability (RP-HPLC) |
| **Potency** | Efficacy | Direct measure of biological activity. | Release & Stability (Bioassay) |
| **HCP** | Safety | Potential for allergic reaction/immunogenicity. | Release (ELISA) |
| **hcDNA** | Safety | Potential for oncogenicity (ICH Q3D/Q6B). | Release (qPCR) |
| **Endotoxin** | Safety | Pyrogenic response (USP <85>). | Release (LAL) |
| **Microbial Limit** | Safety | Product sterility/purity (USP <61>). | Release (Bioburden) |

---

### **5.0 References**
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **ICH Q8(R2):** Pharmaceutical Development.
3.  **USP <121.1>:** Physico-chemical Analytical Procedures for Peptides.
4.  **Google Health Sciences Technical Report GHS-TR-2024-08:** "Validation of GHS-CHO-001 Host Cell Protein Assay."
5.  **Knudsen, L. B., et al. (2020):** "The Chemistry and Pharmacokinetics of GLP-1 Receptor Agonists," *Journal of Medicinal Chemistry*.

---
**END OF SECTION**

---

## Link to Manufacturing Process

### **3.2.S.4.5 Justification of Specification**
#### **Subsection: Link to Manufacturing Process**

---

### **1.0 Introduction and Scope**
The justification of the specifications for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences, is fundamentally rooted in the profound understanding of the relationship between the manufacturing process parameters and the critical quality attributes (CQAs) of the drug substance. This section establishes the scientific bridge between the manufacturing process (as described in Section 3.2.S.2.2) and the control of the drug substance (Section 3.2.S.4.1). 

The specification limits for Glucogen-XR have been derived from the characterization of batches used in non-clinical, clinical, and stability studies, as well as the proven capability of the proprietary GHS-CHO-001 cell line platform. The manufacturing process utilizes a Google-designed AI-driven Bioprocess Control System (BCS-v4.2), which ensures that variability in raw materials or environment does not translate into product quality shifts.

### **2.0 Process-Derived Impurities and Their Control**
The Glucogen-XR manufacturing process involves several orthogonal purification steps designed to remove process-related impurities to levels below the limit of detection or within safe, predefined ranges.

#### **2.1 Host Cell Proteins (HCP)**
The GHS-CHO-001 cell line (a GS knockout derivative) is optimized for high-titer production; however, the secretion of endogenous proteins necessitates a robust purification strategy.

*   **Manufacturing Link:** The primary removal of HCP occurs during the Protein A capture (Column C-101) and the subsequent Cation Exchange (CEX) chromatography (Column C-102). 
*   **Data Analysis:** Analysis of ten (10) consecutive GMP-scale batches (GLUC-2025-001 through GLUC-2025-010) demonstrates consistent reduction of HCP.

**Table 1: HCP Clearance Across Unit Operations (Batches GLUC-2025-001 to GLUC-2025-005)**

| Process Step | HCP (ppm) Batch 001 | HCP (ppm) Batch 002 | HCP (ppm) Batch 003 | HCP (ppm) Batch 004 | HCP (ppm) Batch 005 | Log Reduction Value (LRV) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Harvested Cell Culture Fluid (HCCF) | 350,000 | 345,000 | 362,000 | 348,000 | 355,000 | N/A |
| Protein A Eluate (Step 1) | 1,200 | 1,150 | 1,280 | 1,190 | 1,210 | 2.47 |
| Cation Exchange (CEX) Eluate | 45 | 42 | 48 | 41 | 44 | 1.43 |
| Hydrophobic Interaction (HIC) | < 5 | < 5 | < 5 | < 5 | < 5 | 0.94 |
| **Drug Substance (Final)** | **< 2** | **< 2** | **< 2** | **< 2** | **< 2** | **Total: 5.24** |

*Note: HCP measured via proprietary GHS-Alpha-HCP ELISA kit. LOD = 0.5 ppm.*

#### **2.2 Host Cell DNA (hcDNA)**
Residual DNA is strictly controlled to < 10 pg/dose per FDA and ICH Q3A(R2) guidelines.
*   **Manufacturing Link:** The Low pH Viral Inactivation step (Tank T-201) and the Anion Exchange (AEX) chromatography (Column C-103) in flow-through mode are the primary drivers for DNA clearance.
*   **Justification:** Given that the process consistently achieves levels < 1 pg/mg, the specification limit of 10 pg/mg is justified as a conservative safety threshold.

---

### **3.0 Product-Related Substances and Impurities**
The manufacturing of Glucogen-XR, a complex glucapeptide, results in specific molecular variants. The "Link to Manufacturing Process" section justifies why the specification captures these variants accurately.

#### **3.1 High Molecular Weight Species (HMWS) / Aggregates**
HMWS are monitored via Size Exclusion High-Performance Liquid Chromatography (SE-HPLC).
*   **Manufacturing Source:** Aggregate formation is primarily linked to the concentration step during Ultrafiltration/Diafiltration (UF/DF-2) and exposure to air-liquid interfaces in the final formulation vessel (V-501).
*   **Control Mechanism:** The addition of Polysorbate 80 at the 0.05% (w/v) level during the final formulation step has been shown to stabilize the glucapeptide monomers.

**Table 2: HMWS Control During Process Validation (PV) Batches**

| Batch Number | UF/DF Inlet (%) | UF/DF Outlet (%) | Final DS (%) | Spec Limit (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 0.45 | 0.62 | 0.65 | ≤ 2.0 |
| GLUC-2025-002 | 0.38 | 0.55 | 0.58 | ≤ 2.0 |
| GLUC-2025-003 | 0.41 | 0.59 | 0.61 | ≤ 2.0 |
| GLUC-2025-004 | 0.44 | 0.60 | 0.63 | ≤ 2.0 |
| GLUC-2025-005 | 0.39 | 0.58 | 0.60 | ≤ 2.0 |

#### **3.2 Deamidated and Oxidized Variants**
The glucapeptide sequence contains sensitive residues (Asn and Met).
*   **Asn-28 Deamidation:** Managed by maintaining the pH of the DS at 6.2 ± 0.2 throughout the downstream process and storage.
*   **Met-14 Oxidation:** Linked to the presence of trace metal ions. The process utilizes USP-grade Water for Injection (WFI) and high-purity salts to minimize oxidative stress.

---

### **4.0 Step-by-Step Analytical Protocol for Process Control Verification**
To ensure the link between process and specification is maintained, the following protocol (GHS-SOP-QC-992) is executed for every batch.

#### **Protocol GHS-SOP-QC-992: Characterization of Glycan Profile Linkage**
1.  **Sample Preparation:** 100 µg of Glucogen-XR Drug Substance is enzymatically digested using PNGase F at 37°C for 16 hours.
2.  **Labeling:** Released glycans are labeled with 2-Aminobenzamide (2-AB) via reductive amination.
3.  **Separation:** HILIC-UPLC with Fluorescence Detection.
4.  **Integration:** Peak area for G0F, G1F, and G2F species must correlate within 15% of the Clinical Reference Batch (GLUC-2024-REF).
5.  **Correlation Analysis:**
    *   *Calculation:* $Relative\% = (\text{Peak Area}_{species} / \text{Total Peak Area}) \times 100$
    *   *Requirement:* Total Sialylation must be > 85% to ensure the "Extended Release" pharmacokinetic profile.

---

### **5.0 Justification of Numerical Limits based on Process Capability (CpK)**
Google Health Sciences applies a statistical approach to justify specifications. For the critical attribute of "Purity by RP-HPLC," we calculated the Process Capability Index (CpK) based on 20 pilot and clinical batches.

**Statistical Data for Purity (RP-HPLC):**
*   **Mean:** 98.4%
*   **Standard Deviation ($\sigma$):** 0.22%
*   **Upper Specification Limit (USL):** 100%
*   **Lower Specification Limit (LSL):** 96.0%

**Calculation:**
$$CpK = \min\left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
$$CpK = \min\left( \frac{100 - 98.4}{0.66}, \frac{98.4 - 96.0}{0.66} \right) = \min(2.42, 3.63) = 2.42$$

**Conclusion:** A CpK of 2.42 indicates a highly capable process, justifying the 96.0% lower limit as both reflective of manufacturing capability and clinically qualified purity levels.

---

### **6.0 Relationship Between Step Yields and Impurity Profiles**
There is a direct inverse correlation between the yield of the HIC step (Step 5) and the removal of truncated glucapeptide species.

**Table 3: HIC Yield vs. Product Purity Correlation**

| Run ID | Step Yield (%) | Truncated Species (%) | Final DS Purity (%) |
| :--- | :--- | :--- | :--- |
| GHS-DEV-01 | 85.0 | 0.8 | 98.5 |
| GHS-DEV-02 | 88.2 | 1.1 | 98.1 |
| GHS-DEV-03 | 92.1 | 1.9 | 97.4 |
| GHS-DEV-04 | 78.5 | 0.4 | 99.2 |

*Manufacturing Decision:* The process set-point for HIC collection is fixed at a 82-86% yield window to ensure truncated species never exceed the 1.5% specification limit while maintaining economic viability.

---

### **7.0 Regulatory References**
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
3.  **FDA Guidance for Industry:** "Analytical Procedures and Methods Validation for Drugs and Biologics" (July 2015).
4.  **USP <121>:** Insulin Assays (Applied by analogy for Glucapeptide Bioactivity).

### **8.0 Summary of Linkage**
The Glucogen-XR Drug Substance specifications are not merely arbitrary numbers but are the result of a rigorous "Quality by Design" (QbD) framework. Each parameter in the specification (Section 3.2.S.4.1) is directly linked to a specific unit operation in the manufacturing process (Section 3.2.S.2.2), ensuring that the final therapeutic delivered to the patient remains consistent with the material proven safe and effective in Phase III clinical trials (Protocols GHS-GLUC-003 and GHS-GLUC-004).

---

## Link to Clinical Safety and Efficacy

### 3.2.S.4.5 Justification of Specification
#### Subsection: Link to Clinical Safety and Efficacy (Linkage Analysis)

---

### 1.0 Executive Summary of Linkage Analysis
The justification for the specifications of Glucogen-XR (glucapeptide extended-release) is fundamentally rooted in the clinical performance observed during the Phase 1 (NCT-GHS-001), Phase 2b (NCT-GHS-012), and the pivotal Phase 3 (GLU-CORE-009) clinical trials. This section establishes the rigorous scientific nexus between the established acceptance criteria and the safety, immunogenicity, and glycemic efficacy profile of the drug substance (DS).

The specification limits for Glucogen-XR are not merely statistical artifacts of manufacturing capability; they are defined by the "Clinical Design Space"—the range of quality attributes (QAs) present in batches administered to over 4,500 patients. Google Health Sciences (GHS) has employed a Quality by Design (QbD) framework to ensure that any material released for commercial use will perform with the same safety and efficacy profile as the clinical trial material (CTM).

---

### 2.0 Correlation of Critical Quality Attributes (CQAs) to Clinical Performance

#### 2.1 Potency and Biological Activity (In Vitro GLP-1R Activation)
The primary efficacy of Glucogen-XR is mediated through the activation of the GLP-1 receptor (GLP-1R), leading to glucose-dependent insulin secretion.

**Clinical Linkage:**
The acceptance criterion for potency is 80.0% to 125.0% of the Reference Standard. This range is justified by the Dose-Response Curve established in Study GHS-P2-004, where doses of 0.5 mg, 1.0 mg, and 2.0 mg were evaluated.

| Batch Number | Clinical Study | Mean HbA1c Change (%) | Potency Result (%) | Efficacy Outcome |
|:---|:---|:---|:---|:---|
| GLUC-2025-001 | Phase 1 (SAD) | - | 102.3 | Safe/Effective |
| GLUC-2025-014 | Phase 2b | -1.45 | 98.6 | Target Reached |
| GLUC-2025-045 | Phase 3 (Pivotal) | -1.82 | 104.1 | Superiority Met |
| GLUC-2025-089 | Phase 3 (Long-term) | -1.79 | 94.2 | Sustained Efficacy |

**Statistical Justification:**
Analysis of the Phase 3 data using a mixed-effect model for repeated measures (MMRM) demonstrated that a ±15% variation in potency does not result in a statistically significant shift in the 52-week HbA1c nadir (p > 0.05).

---

### 3.0 Purity and Impurity Profile: Safety Implications

#### 3.1 High Molecular Weight Species (HMWS) / Aggregates
Aggregation in peptide therapeutics is a primary driver of immunogenicity. For Glucogen-XR, HMWS are controlled at ≤ 1.0% via Size Exclusion HPLC (SE-HPLC).

**Clinical Safety Thresholds:**
During the Phase 3 program, Batch GLUC-2025-022, which exhibited a forced-degradation-induced HMWS level of 1.2% (utilized in a subset of the safety expansion cohort), showed no statistically significant increase in Anti-Drug Antibody (ADA) titers compared to the primary CTM batches (HMWS < 0.5%).

**Table 3.1: HMWS Levels vs. Immunogenicity Incidence**
| Batch ID | HMWS (%) | Patient N | ADA Positive (%) | Neutralizing Ab (%) |
|:---|:---|:---|:---|:---|
| GLUC-2025-005 | 0.2 | 250 | 2.4 | 0.1 |
| GLUC-2025-018 | 0.5 | 400 | 2.1 | 0.0 |
| GLUC-2025-022* | 1.2 | 105 | 2.8 | 0.2 |
| **Proposed Spec** | **≤ 1.0** | **-** | **Expected < 3.0** | **N/A** |

*\*Intentional use of higher HMWS to bracket the specification.*

#### 3.2 Deamidated and Oxidized Variants
Glucogen-XR contains a specific Asparagine (Asn-28) residue susceptible to deamidation. In vitro studies confirm that deamidated Glucogen-XR retains ~92% biological activity. Clinical data from Study GHS-P3-009 confirms that patients receiving material with up to 5.0% deamidation experienced identical glycemic control to those receiving pristine material.

---

### 4.0 Detailed Protocol for Specification Justification (SOP-REG-099)

To maintain the link between manufacturing and clinical safety, GHS follows the "Iterative Clinical Linkage Protocol" (ICLP).

**Procedure:**
1. **Data Acquisition:** Extract Certificate of Analysis (CoA) data for all batches used in Phase 2 and Phase 3.
2. **Patient Mapping:** Map specific batch IDs to patient cohorts using the Interactive Response Technology (IRT) logs.
3. **Outcome Correlation:** Perform regression analysis (Pearson’s R) between specific QAs (e.g., C-terminal truncation levels) and clinical endpoints (e.g., incidence of nausea, HbA1c reduction).
4. **Tolerance Interval Calculation:** Apply a 95/99 tolerance interval approach (ISO 16269-6) to define the manufacturing limits based on clinical exposure.

**Calculation Formula for Acceptance Limits:**
$$L = \bar{X} \pm (k \cdot s)$$
*Where:*
*   $\bar{X}$ = Mean of clinical batch results.
*   $s$ = Standard deviation of clinical batches.
*   $k$ = Coverage factor based on N (number of clinical batches).

---

### 5.0 Glycosylation and Post-Translational Modifications (PTMs)

As a product of the GHS-CHO-001 cell line, Glucogen-XR exhibits a specific O-glycosylation pattern at Ser-12. This glycosylation is critical for the "Extended Release" (XR) properties by protecting against dipeptidyl peptidase-4 (DPP-4) degradation.

**Clinical Linkage to Pharmacokinetics (PK):**
Data from Phase 1 PK profiles (GLUC-PK-101) demonstrate that a Sialylation Index (SI) of > 1.8 is required to maintain the 14-day half-life.

**Table 5.1: Sialylation Index vs. Terminal Half-Life ($t_{1/2}$)**
| Batch ID | Sialylation Index (SI) | Mean $t_{1/2}$ (hours) | Clinical Dose Interval |
|:---|:---|:---|:---|
| GLUC-2025-009 | 2.2 | 310 | Bi-weekly |
| GLUC-2025-011 | 2.0 | 295 | Bi-weekly |
| GLUC-2025-033 | 1.9 | 288 | Bi-weekly |
| **Requirement** | **≥ 1.8** | **> 250** | **Validated** |

---

### 6.0 Process-Related Impurities

#### 6.1 Host Cell Protein (HCP) and DNA
Residual HCPs are controlled at ≤ 100 ng/mg. This limit is justified by the lack of injection site reactions (ISRs) in the Phase 3 population. Of the 3,200 patients receiving GLUC-2025-040 through GLUC-2025-060 (mean HCP = 45 ng/mg), the incidence of Grade 1 ISRs was < 0.5%, well below the class average for GLP-1 RAs.

#### 6.2 Residual Protein A
As the purification process utilizes Protein A affinity chromatography, residual Protein A is a potential safety concern. The specification limit of ≤ 10 ppm is supported by toxicological assessment and the absence of systemic inflammatory markers (CRP, IL-6) in clinical trial subjects.

---

### 7.0 Conclusion on Clinical Relevance

The specifications for Glucogen-XR (as detailed in Section 3.2.S.4.1) are scientifically justified and clinically qualified. The limits ensure that the drug substance will consistently provide:
1.  **Maximum Glycemic Control:** By maintaining potency within the 80-125% range established in pivotal trials.
2.  **Extended PK Profile:** By strictly controlling glycosylation and sialylation indices.
3.  **Optimal Safety/Immunogenicity Profile:** By limiting HMWS and HCPs to levels proven safe in the largest GLP-1 clinical program to date.

**References:**
1.  *ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
2.  *FDA Guidance for Industry: Immunogenicity Assessment for Therapeutic Protein Products (2014).*
3.  *GHS Internal Report: Clinical Linkage Study GLU-RPT-2026-04.*

---
*End of Subsection 3.2.S.4.5*

---

# Certificate of Analysis Template

## Format and Content

### **3.2.S.4.1 SPECIFICATIONS (CERTIFICATE OF ANALYSIS - FORMAT AND CONTENT)**

**Document ID:** GHS-GLUC-M3-DS-41-CoA  
**Version:** 4.0 (Draft for FDA NDA Submission)  
**Effective Date:** 15 October 2024  
**Product:** Glucogen-XR (glucapeptide extended-release) Drug Substance  
**Manufacturer:** Google Health Sciences (GHS), 3000 Innovation Drive, South San Francisco, CA 94080  

---

#### **1.0 SCOPE AND PURPOSE**
This section delineates the standardized format, technical content, and data integrity requirements for the Certificate of Analysis (CoA) of Glucogen-XR Drug Substance (DS). The CoA serves as the primary regulatory and quality document certifying that a specific batch of GLUC-2025-XXX has been manufactured, sampled, and tested in strict accordance with Current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210 and 211, and follows the harmonized requirements of ICH Q6B (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products).

The Glucogen-XR Drug Substance is a recombinant, pegylated glucagon-like peptide-1 (GLP-1) receptor agonist expressed in the proprietary GHS-CHO-001 cell line. Due to its extended-release profile and complex molecular architecture, the CoA content is designed to provide comprehensive assurance of identity, purity, potency, and safety.

---

#### **2.0 REGULATORY HIERARCHY AND GUIDANCE COMPLIANCE**
The CoA format adheres to the following regulatory frameworks:
1.  **ICH Q6B:** Specifications for Biological Products.
2.  **ICH Q11:** Development and Manufacture of Drug Substances.
3.  **USP <1047>:** Gene Therapy Products (relevant for recombinant expression verification).
4.  **USP <1058>:** Analytical Instrument Qualification.
5.  **21 CFR 211.165:** Testing and Release for Distribution.
6.  **FDA Guidance for Industry:** Q7A Good Manufacturing Practice Guidance for Active Pharmaceutical Ingredients.

---

#### **3.0 COA ADMINISTRATIVE DATA ARCHITECTURE**
Each CoA generated for Glucogen-XR must contain the following header metadata to ensure full traceability within the Google Cloud Life Sciences Quality Management System (QMS).

| Field Name | Data Format/Standard | Description |
| :--- | :--- | :--- |
| **Product Name** | Glucogen-XR (glucapeptide) | Non-proprietary and Proprietary Name |
| **Material Code** | GHS-9982-DS | Internal SAP/ERP code |
| **Batch Number** | GLUC-2025-XXX | Specific sequential identifier |
| **Manufacturing Date** | DD-MMM-YYYY | Date of final DS filtration |
| **Retest Date** | DD-MMM-YYYY | Based on ICH Q1A stability data (currently 24 mo) |
| **Storage Conditions** | -70°C ± 10°C | Validated storage temperature |
| **Container/Closure** | 10L Sartorius Flexboy Bag | Description of primary packaging |
| **Scale of Manufacture** | 2,000L Fed-Batch | Working volume of Bioreactor |

---

#### **4.0 SPECIFIC TEST CATEGORIES AND TECHNICAL CONTENT**

The CoA is partitioned into five distinct analytical tiers:
1.  **Compendial and Physical Characterization**
2.  **Identity Confirmation**
3.  **Purity and Impurity Profiling (Product-Related)**
4.  **Process-Related Impurities (Safety)**
5.  **Biological Activity (Potency)**

##### **4.1 Tier 1: Compendial and Physical Characterization**
These tests ensure the bulk drug substance meets fundamental physical requirements.

| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | USP <790> Visual Inspection | Clear to slightly opalescent, colorless to pale yellow, free from visible particulates |
| **pH** | USP <791> Potentiometric | 6.2 to 6.8 |
| **Osmolality** | USP <785> Freezing Point | 280 - 320 mOsm/kg |
| **Protein Concentration** | UV280 (A280) ε=1.45 | 50.0 mg/mL ± 2.5 mg/mL |
| **Visible Particulates** | USP <790> | Meets requirements |
| **Sub-visible Particulates** | USP <788> HIAC | ≥ 10 μm: ≤ 6000/container; ≥ 25 μm: ≤ 600/container |

##### **4.2 Tier 2: Identity Confirmation**
Identity is confirmed using three orthogonal methods to ensure primary sequence and glycan/PEG attachment site fidelity.

| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Identity by RT-HPLC** | RP-HPLC (C18) | Retention time of principal peak corresponds to Reference Standard (± 2%) |
| **Identity by Peptide Mapping** | Lys-C Digestion / LC-MS | Sequence coverage ≥ 98%; Mass accuracy < 5 ppm for diagnostic ions |
| **Identity by IEF** | Capillary Isoelectric Focusing (cIEF) | pI range 4.5 – 5.2; Electropherogram matches Ref. Std. |

##### **4.3 Tier 3: Purity and Impurity Profiling (Product-Related)**
High-resolution separation techniques are employed to quantify degradants such as deamidated, oxidized, and aggregated species.

| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Monomer Purity** | SEC-HPLC (Size Exclusion) | ≥ 98.5% Monomer |
| **High Molecular Weight (HMW)** | SEC-HPLC | ≤ 1.0% |
| **Low Molecular Weight (LMW)** | SEC-HPLC | ≤ 0.5% |
| **Purity (Charge Variants)** | Cation Exchange (CEX-HPLC) | Main Peak: ≥ 70.0%; Acidic: ≤ 20.0%; Basic: ≤ 10.0% |
| **Purity (Hydrophobicity)** | RP-HPLC | Main Peak: ≥ 95.0% |

##### **4.4 Tier 4: Process-Related Impurities (Safety)**
Residual components from the GHS-CHO-001 cell line and the downstream purification process.

| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Host Cell Protein (HCP)** | MSD-EIA (Multi-step) | ≤ 10 ng/mg (10 ppm) |
| **Host Cell DNA (HCD)** | qPCR (Alu-like sequences) | ≤ 1 pg/mg |
| **Residual Protein A** | ELISA | ≤ 1 ng/mg |
| **Residual Glucatose-10** | GC-MS (Proprietary Feed) | ≤ 5 ppm |
| **Endotoxin** | USP <85> LAL | ≤ 0.5 EU/mg |
| **Bioburden** | USP <61> | ≤ 1 CFU/10 mL |

##### **4.5 Tier 5: Biological Activity (Potency)**
Potency is measured via a cell-based bioassay reflecting the mechanism of action (MOA).

| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **In Vitro Bioactivity** | cAMP Induction (HEK293 GLP1R+) | 80% - 125% of Reference Standard |
| **Binding Affinity** | Surface Plasmon Resonance (SPR) | KD = 1.2 nM ± 0.3 nM |

---

#### **5.0 REPRESENTATIVE DATA TABLE: BATCH GLUC-2025-001**
The following table provides a simulated result set for a validation batch produced at the South San Francisco facility.

| Analysis | Specification | Result (Batch GLUC-2025-001) | Status |
| :--- | :--- | :--- | :--- |
| **Protein Conc.** | 47.5 - 52.5 mg/mL | 50.2 mg/mL | Pass |
| **SEC Purity** | ≥ 98.5% | 99.4% | Pass |
| **CEX Main Peak** | ≥ 70.0% | 74.2% | Pass |
| **HCP** | ≤ 10 ppm | 3.2 ppm | Pass |
| **HCD** | ≤ 1 pg/mg | < LOD (0.2 pg/mg) | Pass |
| **Potency** | 80 - 125% | 104% | Pass |
| **pH** | 6.2 - 6.8 | 6.5 | Pass |

---

#### **6.0 ANALYTICAL PROTOCOL: DETERMINATION OF PURITY VIA SEC-HPLC (SOP-AN-0042)**

**1.0 Equipment:** Agilent 1290 Infinity II UHPLC with Diode Array Detector (DAD).  
**2.0 Column:** TSKgel G3000SWxl, 7.8 mm ID x 30 cm, 5 μm.  
**3.0 Mobile Phase:** 0.2 M Potassium Phosphate, 0.25 M Potassium Chloride, pH 6.8.  
**4.0 Flow Rate:** 0.5 mL/min (Isocratic).  
**5.0 Sample Preparation:**  
- Dilute DS to 2.0 mg/mL using Mobile Phase.  
- Centrifuge at 10,000 x g for 5 minutes.  
- Load 20 μL into autosampler vial.  
**6.0 Integration Parameters:**  
- Baseline-to-baseline integration.  
- Minimum peak area: 0.05% of total area.  
**7.0 Calculation (Area %):**
$$ \% \text{Monomer} = \left( \frac{\text{Area}_{\text{monomer}}}{\sum \text{Area}_{\text{all peaks}}} \right) \times 100 $$

---

#### **7.0 DATA INTEGRITY AND SIGNATURE BLOCK**
The CoA is not valid unless it contains the electronic signatures of both the Analyst (Performer) and the Quality Assurance (QA) Manager, timestamped via the Google Cloud GxP-compliant platform.

**Prepared By:**  
*Name/Title:* Senior Analytical Scientist  
*Date:* 12-NOV-2025  
*Signature:* ______________________  

**Reviewed and Released By:**  
*Name/Title:* Director of Quality Assurance  
*Date:* 14-NOV-2025  
*Signature:* ______________________  

---
*Footnote: This document is the property of Google Health Sciences. Unauthorized distribution is prohibited. Reference ICH Q6B for detailed specifications on biological substances.*

---

## Testing Laboratory Information

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.1: TESTING LABORATORY INFORMATION

---

#### 3.2.S.4.1.1 Overview of Analytical Network for Glucogen-XR (glucapeptide)

The analytical control strategy for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS), is executed through a decentralized yet highly integrated network of Internal Centers of Excellence (CoE) and Qualified Contract Research Organizations (CROs). This subsection provides a granular accounting of the physical locations, capabilities, regulatory certifications, and specific analytical remits for every facility involved in the release and stability testing of Glucogen-XR Drug Substance (DS) and Drug Product (DP).

All testing facilities listed herein operate under current Good Manufacturing Practices (cGMP) as defined in 21 CFR Parts 210, 211, and 600. Furthermore, all analytical methodologies are validated in alignment with ICH Q2(R1) (Validation of Analytical Procedures) and verified for suitability under USP <1226>.

#### 3.2.S.4.1.2 Primary Testing Site (Sponsor Facility)

**Facility Name:** Google Health Sciences Central Analytical Laboratory (CAL)  
**Address:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**FDA Establishment Identifier (FEI):** 3004859210  
**DUNS Number:** 08-123-4567  

##### 3.2.S.4.1.2.1 Scope of Testing Responsibilities
The CAL serves as the primary site for high-resolution structural characterization and the primary release site for critical quality attributes (CQAs) of the Glucogen-XR drug substance.

**Table 3.2.S.4.1-1: Analytical Methodologies Conducted at GHS Central Analytical Laboratory**

| Test Category | Method ID | Technique | Specification Reference |
| :--- | :--- | :--- | :--- |
| **Primary Structure** | GHS-MET-001 | LC-MS/MS (Orbitrap Exploris 480) | De novo sequencing & peptide mapping |
| **Glycan Profiling** | GHS-MET-042 | HILIC-FLD/MS | N-linked glycan distribution |
| **Higher Order Structure** | GHS-MET-089 | Circular Dichroism (CD) & Microcalorimetry | Alpha-helix content & Thermal Melting (Tm) |
| **Potency (In-Vitro)** | GHS-BIO-112 | Cell-based GLP-1R cAMP Activation | Relative Potency (80-125%) |
| **Purity (Chromatographic)** | GHS-RP-202 | RP-HPLC (Agilent 1290 Infinity II) | Main peak purity >95.0% |
| **Impurity Profiling** | GHS-SEC-305 | Size Exclusion Chromatography (SEC) | High Molecular Weight Species (HMWS) <1.5% |

---

#### 3.2.S.4.1.3 Secondary and Specialized Testing Facilities

To ensure business continuity and specialized expertise (e.g., viral safety, radiolabeling, and high-sensitivity elemental analysis), Google Health Sciences utilizes the following partner laboratories.

##### 3.2.S.4.1.3.1 Google Cloud Life Sciences - Digital Metrology Division
**Address:** 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA  
**Remit:** Advanced computational analytics, AI-driven mass spectrometry data interpretation (using AlphaFold-Multimer for structural verification), and maintenance of the Master Analytical Database (MAD).

##### 3.2.S.4.1.3.2 Eurofins Lancaster Laboratories (Contract Site)
**Address:** 2425 New Holland Pike, Lancaster, PA 17601, USA  
**FEI:** 1316035  
**Remit:** Microbiological testing, including Sterility (USP <71>), Bacterial Endotoxins (USP <85>), and Bioburden (USP <61>).

---

#### 3.2.S.4.1.4 Personnel Qualifications and Laboratory Instrumentation

##### 3.2.S.4.1.4.1 Instrumentation Matrix
The following table details the specific equipment IDs and calibration cycles for instruments used in the testing of Batch Series **GLUC-2025-XXX**.

**Table 3.2.S.4.1-2: Laboratory Instrumentation and Calibration Status**

| Equipment ID | Description | Serial Number | Last Calibration | Next Due Date |
| :--- | :--- | :--- | :--- | :--- |
| HPLC-045-GHS | Waters ACQUITY UPLC H-Class | A21UPH394G | 12-JAN-2025 | 12-JUL-2025 |
| MS-012-GHS | Thermo Orbitrap Exploris 480 | SN-99321-X | 05-FEB-2025 | 05-FEB-2026 |
| BIO-SEC-09 | Agilent 1260 Bio-inert SEC | DEBAA01293 | 14-DEC-2024 | 14-JUN-2025 |
| PLATE-02 | Molecular Devices SpectraMax i3x | M500-11234 | 20-JAN-2025 | 20-JAN-2026 |
| VAC-DRY-01 | Buchi V-700 Vacuum System | B0092314 | 11-NOV-2024 | 11-MAY-2025 |

---

#### 3.2.S.4.1.5 Analytical Method Transfer Protocols (AMTP)

When moving Glucogen-XR testing between the GHS South San Francisco site and contract partners, a formal Method Transfer Protocol is executed. The following procedure is strictly adhered to (Ref: USP <1224> Transfer of Analytical Procedures).

**Step-by-Step Procedure for Method Transfer (GHS-SOP-QA-0092):**

1.  **Selection of Reference Standard:** Utilize Primary Reference Standard (PRS) Batch **GLUC-REF-2024-A**.
2.  **Gap Analysis:** The Receiving Laboratory (RL) undergoes a facility audit to ensure environmental controls (Temp: 20-25°C, Humidity: 30-60% RH) meet GHS-DS specifications.
3.  **Training Phase:** Sending Laboratory (SL) analysts provide on-site or virtual training for the RL personnel.
4.  **Execution of Comparative Testing:**
    *   **Precision:** 6 replicates of the same sample batch (e.g., GLUC-2025-001) by 2 analysts on 3 separate days.
    *   **Intermediate Precision:** Evaluation of inter-day and inter-analyst variability.
    *   **Accuracy/Recovery:** Spiking experiments at 80%, 100%, and 120% of target concentration.
5.  **Statistical Acceptance Criteria:**
    *   The Mean Difference between SL and RL results must be $\le 2.0\%$.
    *   The Relative Standard Deviation (RSD) for RL must be $\le 1.5\%$ for assay and $\le 5.0\%$ for impurities.
    *   F-test and t-test evaluation ($\alpha = 0.05$) to ensure no statistically significant difference between site populations.

---

#### 3.2.S.4.1.6 Certificate of Analysis (CoA) Generation and Data Integrity

All data generated by the testing laboratories are managed via the Google Life Sciences LIMS (Laboratory Information Management System), which is fully compliant with 21 CFR Part 11.

##### 3.2.S.4.1.6.1 Data Workflow and Verification
1.  **Raw Data Acquisition:** Electronic data from instruments (e.g., Empower 3, Chromeleon) is automatically synced to the GHS Cloud.
2.  **First-Level Review:** Performed by the Analyst (Verified via Digital Signature).
3.  **Second-Level Review:** Performed by the Laboratory Supervisor or Principal Scientist.
4.  **QA Release:** The Quality Assurance (QA) department performs a final audit of the data package against the approved Specification (3.2.S.4.1-SPEC).
5.  **CoA Issuance:** The CoA is generated with a unique tracking number (e.g., CoA-GLUC-2025-001-V1).

**Table 3.2.S.4.1-3: Representative Batch Analysis Results (GLUC-2025-001)**

| Test Parameter | Specification Limit | Result (GLUC-2025-001) | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Appearance** | White to off-white lyophilized powder | White lyophilized powder | Pass |
| **Identity (LC-MS)** | Matches Reference Standard | Matches Reference | Pass |
| **Assay (UPLC)** | 95.0% - 105.0% of label claim | 100.2% | Pass |
| **Related Substances** | Individual $\le 0.5\%$, Total $\le 2.0\%$ | Total: 0.82% | Pass |
| **Residual Solvents** | Ethanol $\le 5000$ ppm, Acetonitrile $\le 410$ ppm | Ethanol: 120 ppm | Pass |
| **Endotoxin** | $\le 5.0$ EU/mg | < 0.1 EU/mg | Pass |

---

#### 3.2.S.4.1.7 Detailed Protocol: Cell-Based Potency Assay for Glucogen-XR

**Method Code:** GHS-BIO-112  
**Principle:** This assay measures the ability of Glucogen-XR to activate the GLP-1 receptor (GLP-1R) in a stable CHO-K1 cell line expressing the human GLP-1 receptor. Receptor activation triggers the production of cyclic Adenosine Monophosphate (cAMP), which is quantified using a Homogeneous Time-Resolved Fluorescence (HTRF) detection system.

**Procedure:**
1.  **Cell Preparation:** Thaw one vial of GHS-CHO-GLP1R cells and expand in DMEM/F12 supplemented with 10% FBS.
2.  **Seeding:** Seed cells into 384-well plates at a density of $1.5 \times 10^4$ cells/well. Incubate for 24 hours at 37°C, 5% $CO_2$.
3.  **Sample Preparation:** Dilute Glucogen-XR Drug Substance (Batch GLUC-2025-XXX) and Reference Standard in assay buffer (HBSS + 0.1% BSA + 0.5 mM IBMX).
4.  **Concentration Gradient:** Prepare an 11-point serial dilution (1:3) ranging from 100 nM to 0.001 nM.
5.  **Stimulation:** Add samples to the cell plate. Incubate for 30 minutes at room temperature.
6.  **Detection:** Add HTRF cAMP detection reagents (anti-cAMP Cryptate and cAMP-d2). Incubate for 60 minutes.
7.  **Measurement:** Read fluorescence at 620 nm and 665 nm using the SpectraMax i3x.
8.  **Data Analysis:** Calculate the ratio ($665nm/620nm \times 10^4$). Fit data to a 4-parameter logistic (4PL) model using the following equation:

$$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$$

*Where:*  
$y$ = Response (Fluorescence Ratio)  
$x$ = Concentration  
$A$ = Bottom Asymptote  
$B$ = Hill Slope  
$C$ = $EC_{50}$  
$D$ = Top Asymptote

**Acceptance Criteria:** The $R^2$ of the curve must be $\ge 0.98$. The Relative Potency (Calculated as $EC_{50, Standard} / EC_{50, Sample} \times 100$) must fall between 80% and 125%.

---

#### 3.2.S.4.1.8 References and Standards
1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <1225>:** Validation of Compendial Procedures.
3.  **USP <121>:** Insulin Assays (Applied by analogy for glucapeptide quantification).
4.  **GHS-SOP-QC-0001:** General Requirements for Laboratory Notebooks and Electronic Record Keeping.
5.  **GHS-SOP-QC-0550:** Management of Out of Specification (OOS) Results.

---
**END OF SUBSECTION**

---

## Approval Process

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.4. CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.4: BATCH ANALYSES AND CERTIFICATE OF ANALYSIS (CoA) TEMPLATE
#### DOCUMENT ID: GHS-GLUC-M3-DS-COA-PROC
#### SUBJECT: APPROVAL PROCESS FOR CERTIFICATE OF ANALYSIS (CoA)

---

### 1.0 ADMINISTRATIVE OVERSIGHT AND REGULATORY ALIGNMENT

The approval process for the Certificate of Analysis (CoA) for **Glucogen-XR (glucapeptide extended-release)** is governed by the Google Health Sciences (GHS) Quality Management System (QMS) in strict accordance with **21 CFR Part 210/211 (cGMP)**, **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products), and **ICH Q7** (Good Manufacturing Practice Guidance for Active Pharmaceutical Ingredients).

As a Division of Google Cloud Life Sciences, GHS employs an automated, blockchain-validated Electronic Batch Record (eBR) and Laboratory Information Management System (LIMS) to ensure data integrity (ALCOA+ principles). This section details the multi-tiered approval workflow required before any Drug Substance (DS) batch is released for clinical or commercial use.

---

### 2.0 SCOPE AND RESPONSIBILITIES

This procedure applies to all batches of Glucogen-XR DS manufactured at the **South San Francisco Facility (Site ID: GHS-SSF-3000)**.

#### 2.1 Quality Control (QC) Analysts
- Execution of analytical methods (e.g., RP-HPLC, SE-HPLC, Cell-based Bioassay).
- Primary data entry into GHS-LIMS-V4.2.
- Preliminary verification of results against established specifications (M3-DS-S.4.1).

#### 2.2 Quality Control Reviewer (Level 1)
- Technical review of raw data, chromatograms, and calculation spreadsheets.
- Verification of instrument calibration status (e.g., Waters ACQUITY UPLC System ID: GHS-INST-099).

#### 2.3 Quality Assurance (QA) Batch Record Auditor
- Verification of "Cradle-to-Grave" traceability.
- Review of Deviations (OOS/OOT) and Environmental Monitoring (EM) data.

#### 2.4 Authorized Qualified Person (QP) / Head of Quality Release
- Final signatory authority.
- Digital signature application via Google Cloud KMS (Key Management Service) with timestamping.

---

### 3.0 STEP-BY-STEP APPROVAL WORKFLOW (PROTOCOL GHS-SOP-QA-0098)

The approval of a CoA is not a singular event but a synthesis of analytical, manufacturing, and quality oversight.

#### Phase I: Data Aggregation and Primary Verification
1. **Initiation**: Upon completion of the final 21-day sterility test (USP <71>), the LIMS triggers the "CoA Draft Generation" phase.
2. **Automated Check**: The system pulls data from the following modules:
    - **Upstream**: Harvest Titer (GHS-CHO-001 cell line performance).
    - **Downstream**: Purification yield and Viral Clearance logs.
    - **QC Lab**: Results for Purity, Identity, Potency, and Safety.
3. **Calculation Verification**: All calculations (e.g., Relative Potency vs. Reference Standard GHS-GLUC-RS-2024) are recalculated by the LIMS algorithm using a 4-parameter logistic (4PL) fit.

#### Phase II: Technical Review (The "Double-Blind" Peer Review)
A designated QC Lead (not involved in the testing) reviews the analytical package.
- **Reference Standard Check**: Ensure the Reference Standard used (e.g., Lot #RS-GLUC-005) was within its expiry period.
- **Column Lifecycle**: Verify that the HPLC columns (e.g., C18 1.7μm) did not exceed their validated 100-injection limit.

#### Phase III: Quality Assurance (Final Disposition)
QA conducts a final audit of the CoA against the Master Specification Table (Table 4.1 below). Any "Out of Specification" (OOS) result triggers a mandatory hold under **SOP-QC-050 (OOS Investigations)**. No CoA can be approved while an open investigation exists for that batch.

---

### 4.0 CERTIFICATE OF ANALYSIS (CoA) MASTER TEMPLATE

The following table represents the technical specifications and the template format for Glucogen-XR DS batches.

#### Table 4.1: Master Template and Acceptance Criteria for Glucogen-XR DS Release

| Test Parameter | Test Method (SOP Reference) | Acceptance Criteria (Specification) | Typical Result (Batch GLUC-2025-001) | Approval Status |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | GHS-QC-VIS-01 | Clear to slightly opalescent, colorless to pale yellow liquid | Clear, colorless liquid | Pass |
| **Identity (RT)** | GHS-QC-HPLC-02 | RT of main peak matches Reference Standard ± 2% | 14.25 min (Std: 14.30) | Pass |
| **Identity (MS)** | GHS-QC-MS-05 | Intact Mass: 42,560.4 ± 1.0 Da | 42,560.5 Da | Pass |
| **Purity (SE-UPLC)** | GHS-QC-SEC-03 | ≥ 98.5% Monomer; ≤ 1.0% Aggregates; ≤ 0.5% Fragments | 99.4% Monomer; 0.4% Aggregates | Pass |
| **Purity (RP-UPLC)** | GHS-QC-RPC-04 | ≥ 97.0% Main Peak | 98.2% | Pass |
| **Potency (In Vitro)** | GHS-QC-BIO-01 | 80% to 125% of Reference Standard | 104% | Pass |
| **Concentration** | GHS-QC-UV-08 | 50.0 mg/mL ± 2.5 mg/mL (A280, ε=1.45) | 50.2 mg/mL | Pass |
| **pH** | USP <791> | 6.5 ± 0.2 | 6.54 | Pass |
| **Osmolality** | USP <785> | 290 ± 30 mOsm/kg | 295 mOsm/kg | Pass |
| **Endotoxin** | USP <85> (LAL) | ≤ 0.5 EU/mg | < 0.05 EU/mg | Pass |
| **Bioburden** | USP <61> | ≤ 1 CFU/10 mL | 0 CFU/10 mL | Pass |
| **Host Cell Protein** | GHS-QC-ELISA-09 | ≤ 100 ppm | 12 ppm | Pass |
| **Host Cell DNA** | GHS-QC-qPCR-10 | ≤ 10 pg/mg | 1.2 pg/mg | Pass |
| **Protein A Leach** | GHS-QC-ELISA-12 | ≤ 5 ppm | < LOQ (0.5 ppm) | Pass |

---

### 5.0 REPRESENTATIVE BATCH DATA ANALYSIS (GLUC-2025-XXX SERIES)

The following longitudinal data shows the consistency of the approval process over three consecutive validation batches.

#### Table 5.1: Comparative Analysis of Validation Batches

| Batch Number | Manufacture Date | Release Date | Purity (SEC) | Potency (%) | Endotoxin (EU/mg) | Disposition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 05-FEB-2025 | 99.4% | 104% | <0.05 | Released |
| **GLUC-2025-002** | 19-JAN-2025 | 12-FEB-2025 | 99.2% | 98% | <0.05 | Released |
| **GLUC-2025-003** | 26-JAN-2025 | 19-FEB-2025 | 99.5% | 101% | <0.05 | Released |

---

### 6.0 CALCULATION METHODOLOGIES FOR COA APPROVAL

#### 6.1 Relative Potency Calculation
The potency is determined via a cell-based cAMP induction assay using a GLP-1R expressing HEK293 cell line. The approval requires the use of a Parallel Line Analysis (PLA).

$$Potency = \frac{EC_{50} (Reference)}{EC_{50} (Sample)} \times 100$$

The result is only valid if the slope ratio between the sample and the reference is within $0.9 - 1.1$ and the $R^2$ value is $> 0.99$.

#### 6.2 Purity by Area Percent
For UPLC methods, purity is calculated via Integration of Peak Area:
$$\% Purity = \left( \frac{Area_{Main Peak}}{\sum Area_{All Peaks}} \right) \times 100$$
*Note: Peaks < 0.05% (Reporting Threshold) are excluded per ICH Q3B.*

---

### 7.0 DIGITAL SIGNATURE AND ARCHIVING PROTOCOL

The final approval of the CoA for Glucogen-XR is performed within the **Google Cloud Life Sciences Compliance Environment**.

1. **Hash Generation**: A SHA-256 hash of the PDF CoA is generated.
2. **Metadata Tagging**: The document is tagged with metadata: `Product: Glucogen-XR`, `Lot: GLUC-2025-XXX`, `Site: SSF-3000`.
3. **Approval Trigger**: The Head of Quality Release executes a cryptographic signature.
4. **Distribution**: The approved CoA is automatically pushed to the Clinical Supply Chain portal and archived in a 21 CFR Part 11 compliant Cold Storage bucket with a 30-year retention policy.

---

### 8.0 REFERENCES
1. **ICH Q6B**: Specifications for Biotechnological/Biological Products.
2. **ICH Q3D**: Guideline for Elemental Impurities.
3. **USP <1225>**: Validation of Compendial Procedures.
4. **GHS-SOP-QA-001**: Management of Quality Records and Batch Release.
5. **FDA Guidance for Industry**: Pyrogen and Endotoxins Testing (2012).

---
**END OF SUBSECTION**
**CONFIDENTIAL - PROPERTY OF GOOGLE HEALTH SCIENCES**

---

# Reference Standards and Materials

## Primary Standard Preparation and Qualification

### 3.2.S.5 REFERENCE STANDARDS OR MATERIALS

#### 3.2.S.5.1 Primary Standard Preparation and Qualification: Glucogen-XR (glucapeptide)

---

**1. SCOPE AND OBJECTIVE**
This section details the rigorous establishment, characterization, and qualification of the **Glucogen-XR Primary Reference Standard (PRS)**, identified by Batch Number **GLUC-2025-PRS-01**. As Glucogen-XR is a recombinant glucapeptide (GLP-1 receptor agonist) expressed in the proprietary GHS-CHO-001 cell line, the primary standard serves as the foundational metrological anchor for all subsequent Working Reference Standards (WRS), clinical batch release, and long-term stability monitoring.

The qualification program has been designed in strict accordance with:
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q2(R2):** Validation of Analytical Procedures.
*   **USP <1103>:** Immunological Methods - Enzyme-Linked Immunosorbent Assay (ELISA).
*   **USP <121>:** Insulin Assays (as applicable to peptide hormones).

---

**2. SELECTION OF THE PRIMARY STANDARD BATCH**
Batch **GLUC-2025-PRS-01** was selected from a pivotal Phase 3 clinical manufacturing campaign (Run ID: GHS-2025-OPS-04). This batch demonstrated superior purity profiles and representative glycosylation patterns, reflecting the intended commercial process.

**Table 1: Manufacturing History of Primary Reference Standard GLUC-2025-PRS-01**

| Parameter | Specification/Details |
| :--- | :--- |
| **Manufacturer** | Google Health Sciences, 3000 Innovation Drive, SSF, CA |
| **Cell Line** | CHO-K1 GS Knockout (GHS-CHO-001) |
| **Fermentation Scale** | 2,000L Fed-Batch Bioreactor (Single-use) |
| **Purification Process** | 3-Step Chromatography (Protein A, AEX, CEX) |
| **Fill Date** | 14-Jan-2025 |
| **Container Closure** | 2.0 mL Type 1 Borosilicate Glass Vials, Fluorotec-coated Stoppers |
| **Storage Temperature** | -80°C ± 10°C |
| **Total Quantity** | 1,500 Vials (1.0 mg/vial Lyophilized) |

---

**3. CHARACTERIZATION STRATEGY AND ANALYTICAL TAXONOMY**
The qualification of GLUC-2025-PRS-01 utilizes a multi-tiered analytical approach to ensure the primary standard is "fit for purpose." The characterization is divided into:
1.  **Primary Structure & Identity:** Mass spectrometry, Amino acid sequencing.
2.  **Physicochemical Properties:** Purity (SEC, RP-HPLC, CEX), Isoelectric focusing.
3.  **Biological Activity:** *In vitro* GLP-1 receptor activation assay (cAMP induction).
4.  **Quantity and Content:** Nitrogen analysis, Amino acid analysis (AAA).

#### 3.1 Primary Structure Confirmation (Mass Spectrometry)
The molecular weight and sequence integrity were verified using Orbitrap Exploris™ 480 Mass Spectrometry coupled with UHPLC.

**Table 2: Intact Mass Analysis of GLUC-2025-PRS-01**

| Peak ID | Observed Mass (Da) | Theoretical Mass (Da) | Mass Error (ppm) | Assignment |
| :--- | :--- | :--- | :--- | :--- |
| Main | 32,456.82 | 32,456.78 | 1.23 | Intact Glucogen-XR |
| Imp-1 | 32,438.75 | 32,438.76 | -0.31 | Pyroglutamate |
| Imp-2 | 32,472.85 | 32,472.78 | 2.15 | Oxidation (+16 Da) |

---

**4. DETAILED ANALYTICAL QUALIFICATION PROTOCOLS (SOP-GHS-QC-992)**

#### 4.1 Step-by-Step Protocol: Purity by Size-Exclusion Chromatography (SEC-HPLC)
*Equipment: Waters Acquity Arc System | Column: TSKgel G3000SWxl*

1.  **Preparation of Mobile Phase:** Prepare 0.1M Sodium Phosphate buffer with 0.2M NaCl, adjusted to pH 6.8 ± 0.05.
2.  **Sample Reconstitution:** Reconstitute one vial of GLUC-2025-PRS-01 with 1.0 mL of Milli-Q water to achieve a concentration of 1.0 mg/mL.
3.  **Filtration:** Filter sample through a 0.22 μm PVDF membrane.
4.  **Injection Volume:** 20 μL.
5.  **Flow Rate:** 0.5 mL/min (Isocratic).
6.  **Detection:** UV at 214 nm and 280 nm.
7.  **Data Integration:** Integrate all peaks ≥ 0.05% area.

**Table 3: SEC-HPLC Purity Results for Qualification**

| Test Date | Replicate | % Monomer | % HMW (Aggregates) | % LMW (Fragments) |
| :--- | :--- | :--- | :--- | :--- |
| 02-Feb-2025 | 1 | 99.45% | 0.32% | 0.23% |
| 02-Feb-2025 | 2 | 99.42% | 0.35% | 0.23% |
| 02-Feb-2025 | 3 | 99.47% | 0.31% | 0.22% |
| **Mean** | -- | **99.45%** | **0.33%** | **0.23%** |

#### 4.2 Step-by-Step Protocol: Biological Potency (cAMP Reporter Gene Assay)
*Cell Line: HEK293 expressing human GLP-1R and CRE-luciferase*

1.  **Seeding:** Seed cells at 2.5 x 10⁴ cells/well in a 96-well white-walled plate.
2.  **Incubation:** Incubate for 24 hours at 37°C, 5% CO₂.
3.  **Dilution Series:** Prepare 10-point serial dilutions of GLUC-2025-PRS-01 (Reference) and the Test Sample starting from 100 nM down to 0.001 nM.
4.  **Stimulation:** Add GLUC-2025-PRS-01 dilutions to the cells and incubate for 4 hours.
5.  **Detection:** Add Bright-Glo™ Luciferase Reagent. Measure luminescence using a SpectraMax M5 plate reader.
6.  **Analysis:** Fit data to a 4-parameter logistic (4-PL) model.

**Formula: Calculation of Relative Potency**
$$Relative Potency = \frac{EC_{50} \text{ (Reference)}}{EC_{50} \text{ (Test Sample)}} \times 100$$

**Table 4: Potency Qualification Data**

| Parameter | Value | Acceptance Criteria |
| :--- | :--- | :--- |
| **EC50 (Mean)** | 12.4 pM | 10.0 - 15.0 pM |
| **Hill Slope** | 1.05 | 0.8 - 1.2 |
| **Signal-to-Noise** | 45.2 | > 20 |
| **Assigned Potency** | 100% | Assigned as Anchor |

---

**5. COMPREHENSIVE CERTIFICATE OF ANALYSIS (COA): GLUC-2025-PRS-01**

| Test Category | Test Method | Acceptance Criteria | Result |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual (Ph. Eur. 2.2.1) | White to off-white cake | Conforms |
| **Identity (MW)** | ESI-MS | 32,456.8 ± 3.0 Da | 32,456.82 Da |
| **Purity (SEC)** | SEC-HPLC | ≥ 98.0% Monomer | 99.45% |
| **Purity (RP)** | RP-HPLC | ≥ 95.0% Main Peak | 97.82% |
| **Charge Heterogeneity**| iCIEF | Report % Acidic/Main/Basic | 12.1% / 84.4% / 3.5% |
| **Host Cell Protein** | ELISA (GHS-CHO-K1) | ≤ 100 ppm | 12 ppm |
| **Host Cell DNA** | qPCR (GS Gene) | ≤ 10 pg/mg | < LOD |
| **Endotoxin** | LAL (USP <85>) | ≤ 5 EU/mg | < 0.5 EU/mg |
| **Protein Content** | AAA / UV ($A_{280}$) | 0.9 - 1.1 mg/vial | 1.02 mg/vial |

---

**6. STABILITY PROGRAM FOR PRIMARY REFERENCE STANDARD**
To ensure the long-term integrity of GLUC-2025-PRS-01, a dedicated stability protocol is active.

**Table 5: Stability Monitoring Schedule**

| Temperature | T=0 | 3M | 6M | 9M | 12M | 18M | 24M | 36M |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **-80°C (Long Term)** | X | X | X | X | X | X | X | X |
| **-20°C (Backup)** | X | X | X | X | X | -- | -- | -- |
| **5°C (Stressed)** | X | X | X | -- | -- | -- | -- | -- |

*Note: X denotes full qualification testing including Potency, SEC, RP-HPLC, and iCIEF.*

---

**7. ASSIGNMENT OF REFERENCE VALUES**
The values derived from the qualification of **GLUC-2025-PRS-01** are hereby established as the "True Values" for all future analytical comparisons. 
*   **Assigned Potency:** 100% (Absolute)
*   **Assigned Concentration:** 1.02 mg/vial (Correction factor of 1.02 applied to all gravimetric preparations).
*   **Retention Time (RRT):** Main peak established as RRT 1.00 for RP-HPLC and SEC-HPLC.

---

**8. REGULATORY FOOTNOTES AND REFERENCES**
1. **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*, International Council for Harmonisation (1999).
2. **Google Health Sciences Internal Report GHS-REP-2025-004:** *Mass Spectrometric Mapping of GLUC-2025-PRS-01*.
3. **USP <121>:** *Insulin Assays*, United States Pharmacopeia.
4. **USP <1027>:** *Capillary Gel Electrophoresis of Biopharmaceuticals*.

*End of Subsection 3.2.S.5.1*

---

## Working Standards

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.5: REFERENCE STANDARDS AND MATERIALS
### SUBSECTION 3.2.S.5.2: WORKING STANDARDS (WS)

---

#### 3.2.S.5.2.1 Introduction and Scope
The establishment, characterization, and maintenance of Working Standards (WS) for Glucogen-XR (glucapeptide extended-release) are conducted in accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **FDA Guidance for Industry: Analytical Procedures and Methods Validation**.

Working Standards are defined as highly characterized materials used for routine in-process testing, release testing, and stability monitoring of Glucogen-XR drug substance and drug product. These standards are calibrated against the Primary Reference Standard (PRS), currently identified as **Batch GLUC-2024-PRS-01**, to ensure continuity of measurement and traceability.

Google Health Sciences (GHS) utilizes a two-tier reference standard system:
1.  **Primary Reference Standard (PRS):** The benchmark material (established in Section 3.2.S.5.1).
2.  **Working Standard (WS):** The daily-use material, qualified against the PRS to preserve the inventory of the primary material.

#### 3.2.S.5.2.2 Current Working Standard Inventory
The following table summarizes the active and historical Working Standard lots utilized during the development and commercial scale-up of Glucogen-XR.

**Table 3.2.S.5.2-1: Working Standard Inventory and Status**

| WS Batch Number | Parent DS Batch | Qualification Date | Expiry/Retest Date | Usage Status | Storage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-WS-01** | GLUC-2025-004 | 12-JAN-2025 | 12-JAN-2027 | **Active** | -80°C ± 5°C |
| **GLUC-2025-WS-02** | GLUC-2025-012 | 15-MAR-2025 | 15-MAR-2027 | **In-Qualification**| -80°C ± 5°C |
| **GLUC-2024-WS-05** | GLUC-2024-088 | 05-SEP-2024 | 05-SEP-2026 | **Phased Out** | -80°C ± 5°C |
| **GLUC-2023-WS-02** | GLUC-2023-015 | 10-FEB-2023 | 10-FEB-2025 | **Expired** | -80°C ± 5°C |

---

#### 3.2.S.5.2.3 Selection Criteria for Working Standard Candidates
Candidate batches for Working Standards are selected from representative GMP-compliant manufacturing runs (3000L scale). Selection criteria include:
*   **Purity:** Must exceed 98.5% by RP-HPLC and 99.0% by SE-HPLC.
*   **Biological Activity:** Must demonstrate 95%–105% potency relative to the PRS.
*   **Stability:** Batch must show no significant degradation over a minimum of 6 months of real-time stability data at the intended storage condition (-80°C).
*   **Homogeneity:** High-volume fill (e.g., 2,000 vials) must demonstrate intra-batch consistency.

---

#### 3.2.S.5.2.4 Qualification Protocol (Protocol GHS-QC-REF-0042)
The qualification of a new Working Standard (e.g., **GLUC-2025-WS-02**) follows a pre-defined protocol involving side-by-side comparison with the Primary Reference Standard.

##### 3.2.S.5.2.4.1 Testing Matrix and Specification Limits
The following analytical methods are employed during qualification. All tests are performed in triplicate by two independent analysts (N=6 total).

**Table 3.2.S.5.2-2: Qualification Specifications for Working Standard GLUC-2025-WS-02**

| Quality Attribute | Analytical Procedure | Target Specification | Statistical Requirement |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual (USP <790>) | Clear to slightly opalescent | N/A |
| **Identity (RT)** | RP-HPLC | Matches PRS (± 0.2 min) | CV ≤ 0.5% |
| **Identity (MS)** | LC-MS/MS | 4186.5 Da ± 0.5 Da | Accuracy ± 10 ppm |
| **Purity (Monomer)** | SE-HPLC | ≥ 99.0% | SD ≤ 0.1% |
| **Purity (Total)** | RP-HPLC | ≥ 98.5% | SD ≤ 0.2% |
| **Charge Variants** | cIEF | Acidic: < 5%; Main: > 90% | CV ≤ 2.0% |
| **Potency (In-Vitro)** | GLP-1 Receptor Bioassay | 90% – 110% of PRS | 95% CI within 80-125% |
| **Protein Content** | UV (A280) | 10.0 mg/mL ± 0.5 mg/mL | CV ≤ 1.0% |
| **Host Cell Protein** | ELISA (GHS-HCP-01) | < 10 ppm | N/A |
| **Endotoxin** | LAL (USP <85>) | < 0.5 EU/mg | N/A |

##### 3.2.S.5.2.4.2 Step-by-Step Procedure for Calibration
1.  **Preparation:** Thaw 5 vials of PRS (GLUC-2024-PRS-01) and 10 vials of the candidate WS (GLUC-2025-WS-02) on ice.
2.  **Concentration Normalization:** Using the molar extinction coefficient ($\epsilon = 1.45 \text{ L}\cdot\text{g}^{-1}\cdot\text{cm}^{-1}$), dilute both materials to exactly 1.0 mg/mL in formulation buffer (20 mM Citrate, 100 mM NaCl, pH 5.5).
3.  **HPLC Analysis:**
    *   Perform 5 injections of PRS to establish system suitability (RSD < 1.0%).
    *   Perform 3 injections of WS.
    *   Calculate Relative Potency: $RP = (Area_{WS} / Area_{PRS}) \times (Conc_{PRS} / Conc_{WS})$.
4.  **Bioassay:** Perform cell-based luciferase reporter assay using CHO-K1 cells expressing the human GLP-1 receptor. Calculate $EC_{50}$ using a 4-parameter logistic (4PL) model.
5.  **Statistical Assessment:** Apply a Two-One-Sided Test (TOST) for equivalence.

---

#### 3.2.S.5.2.5 Characterization Data for Active Working Standard (GLUC-2025-WS-01)
Batch **GLUC-2025-WS-01** was derived from Drug Substance Batch **GLUC-2025-004**. It was qualified against Primary Standard **GLUC-2024-PRS-01**.

**Table 3.2.S.5.2-3: Comparison of WS GLUC-2025-WS-01 vs. PRS**

| Parameter | PRS (GLUC-2024-PRS-01) | WS (GLUC-2025-WS-01) | Difference/Ratio |
| :--- | :--- | :--- | :--- |
| **Main Peak (%)** | 99.2% | 99.1% | -0.1% |
| **Total Impurities (%)** | 0.8% | 0.9% | +0.1% |
| **Potency (Bioassay)** | 100% (Defined) | 102% | 1.02 |
| **Mass Spectrometry** | 4186.54 Da | 4186.55 Da | 0.01 Da |
| **Concentration (mg/mL)** | 10.12 | 10.08 | 0.996 |

##### 3.2.S.5.2.5.1 Peptide Mapping (Fingerprinting)
Tryptic digestion followed by LC-MS/MS was performed on GLUC-2025-WS-01. The resulting chromatogram was overlaid with the PRS.
*   **Correlation Coefficient:** $R^2 = 0.9998$
*   **Sequence Coverage:** 100% (confirmed sequence: HAEGTFTSDVSSYLEGQAAKEFIAWLVKGRG)
*   **Post-Translational Modifications (PTMs):**
    *   *Deamidation (Asn):* 0.4% (matches PRS)
    *   *Oxidation (Met):* 0.2% (matches PRS)

---

#### 3.2.S.5.2.6 Stability and Retest Program
Working Standards are subject to an ongoing stability monitoring program at the intended storage temperature of -80°C ± 5°C.

**Table 3.2.S.5.2-4: Stability Protocol for Working Standards**

| Frequency | Tests Performed | Acceptance Criteria |
| :--- | :--- | :--- |
| **T=0** | Full Qualification Suite | Per Table 3.2.S.5.2-2 |
| **6 Months** | RP-HPLC, SE-HPLC, Bioassay | No significant change (± 2%) |
| **12 Months** | Full Qualification Suite | Per Table 3.2.S.5.2-2 |
| **24 Months** | Full Qualification Suite | Retest/Replacement Trigger |

In the event that a Working Standard shows a >2% drift in potency or a >1% increase in total impurities compared to its initial qualification value, the batch is decommissioned and a new WS is qualified against the Primary Reference Standard.

---

#### 3.2.S.5.2.7 Handling, Storage, and Distribution
*   **Vialing:** WS is aliquoted into 0.5 mL medical-grade, skirted polypropylene cryovials (Lot #GHS-VIAL-992).
*   **Fill Volume:** 250 µL per vial.
*   **Labeling:** Each vial includes the Batch ID (GLUC-2025-WS-XXX), Concentration, Expiry Date, and "For Laboratory Use Only."
*   **Inventory Management:** Controlled via the Google Cloud LIMS (Laboratory Information Management System). Access is restricted to authorized QC personnel.
*   **Usage Policy:** Vials are for **single-use only**. Thawing and re-freezing are strictly prohibited to maintain peptide structural integrity.

#### 3.2.S.5.2.8 Traceability Matrix
The following hierarchy ensures that every measurement of Glucogen-XR in clinical and commercial lots is traceable to the original characterization of the molecule.

1.  **International Standard (If available):** Currently no WHO International Standard exists for this specific peptide sequence.
2.  **GHS Primary Reference Standard (GLUC-2024-PRS-01):** Validated by orthogonal techniques (NMR, AUC, CD).
3.  **GHS Working Standard (GLUC-2025-WS-01):** Calibrated against PRS.
4.  **Routine QC Testing:** Release of commercial lots (e.g., GLUC-2025-101).

---

#### 3.2.S.5.2.9 References
1.  **ICH Q6B:** Specifications for Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **USP <1225>:** Validation of Compendial Procedures.
3.  **USP <1226>:** Verification of Compendial Procedures.
4.  **GHS SOP-QC-088:** Management of Reference Standards for Biologics.
5.  **GHS SOP-QA-012:** Deviation and Out-of-Specification (OOS) Reporting for Reference Materials.

---
**END OF SECTION**

---

## In-House Reference Materials

### 3.2.S.5 Reference Standards or Materials

#### 3.2.S.5.1 In-House Reference Materials

The characterization, qualification, and maintenance of the In-House Reference Standards (IHRS) for Glucogen-XR (glucapeptide extended-release) are conducted in accordance with **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **FDA Guidance for Industry: Analytical Procedures and Methods Validation**. 

Google Health Sciences (GHS) employs a tiered reference standard strategy to ensure the consistent assessment of identity, purity, potency, and quality of Glucogen-XR throughout its lifecycle. This section details the establishment of the Primary Reference Standard (PRS), the Working Reference Standard (WRS), and the ongoing stability programs governing these materials.

---

### I. Hierarchy of Reference Materials

The reference material hierarchy for Glucogen-XR is structured into two distinct tiers to ensure long-term continuity of analytical measurements.

1.  **Primary Reference Standard (PRS):** Derived from a highly characterized clinical batch (GLUC-2025-001-PRS). This material serves as the "gold standard" against which all subsequent standards are calibrated. It is stored under ultra-low temperature conditions (-80°C ± 5°C) to maximize longevity.
2.  **Working Reference Standard (WRS):** Derived from representative GMP commercial-scale batches (e.g., GLUC-2025-WRS-01). The WRS is used for routine release and stability testing. It is qualified against the PRS to ensure bridgeability.

#### Table 1: Inventory of Current Glucogen-XR Reference Materials
| Standard ID | Batch Origin | Date of Manufacture | Current Status | Storage Condition |
| :--- | :--- | :--- | :--- | :--- |
| **PRS-GLUC-001** | GLUC-2025-001-PRS | 12-JAN-2025 | Active (Primary) | -80°C ± 5°C |
| **WRS-GLUC-01** | GLUC-2025-WRS-01 | 15-FEB-2025 | Active (Working) | -70°C ± 10°C |
| **WRS-GLUC-02** | GLUC-2025-WRS-02 | 02-MAY-2025 | In-Qualification | -70°C ± 10°C |

---

### II. Qualification Protocol for Primary Reference Standard (PRS)

The qualification of PRS-GLUC-001 involves an exhaustive orthogonal characterization program to define the "Signature Profile" of the glucapeptide.

#### 1. Identity Testing Protocols
The identity of the PRS is confirmed using a multi-attribute approach to verify the primary, secondary, and tertiary structures of the peptide.

*   **1.1 N-Terminal Sequencing (Edman Degradation):**
    *   *Procedure:* 15 cycles of automated Edman degradation using a Shimadzu PPSQ-53A Protein Sequencer.
    *   *Requirement:* Sequence must match the theoretical sequence: **H-G-E-G-T-F-T-S-D-V-S-S-Y-L-E...**
*   **1.2 Intact Mass Spectrometry (LC-MS/MS):**
    *   *Equipment:* Thermo Scientific™ Q Exactive™ Plus Hybrid Quadrupole-Orbitrap.
    *   *Method:* Deconvolution of the multicharged protein ions to determine the monoisotopic mass.
    *   *Acceptance:* ± 1.0 Da of the theoretical mass (4,186.6 Da for the peptide core).
*   **1.3 Amino Acid Analysis (AAA):**
    *   *Protocol:* Acid hydrolysis followed by HPLC with pre-column OPA/FMOC derivatization.
    *   *Calculation:* Molar ratios must deviate by < 10% from theoretical values for 18 amino acids.

#### 2. Purity and Impurity Profiling
The PRS must represent the highest achievable purity level, typically > 98.0% by RP-HPLC.

#### Table 2: Qualification Results for PRS-GLUC-001
| Test Parameter | Methodology | Acceptance Criteria | Result (Batch GLUC-2025-001-PRS) |
| :--- | :--- | :--- | :--- |
| **Purity (RP-HPLC)** | USP <621> / GHS-MTH-01 | ≥ 98.5% | 99.42% |
| **Charge Heterogeneity** | cIEF (iCE3) | Report Profile | Main Peak: 88.4%; Acidic: 7.2%; Basic: 4.4% |
| **Aggregation** | SE-HPLC (USP <789>) | ≤ 0.5% HMMS | 0.12% |
| **Potency (In Vitro)** | GLP-1 Receptor Activation | 80% - 120% Label | 104% (Relative to Clinical Mean) |
| **Bacterial Endotoxins** | USP <85> (LAL) | < 5.0 EU/mg | < 0.1 EU/mg |
| **Host Cell Protein** | ELISA (CHO-specific) | < 10 ppm | 2.4 ppm |

---

### III. Working Reference Standard (WRS) Bridging Protocol

To ensure continuity in drug substance testing, each new WRS batch must be "bridged" against the current PRS. This prevents "drift" in analytical results over the product lifecycle.

#### 1. Statistical Framework for Bridging
GHS utilizes a Two One-Sided Test (TOST) approach for equivalence testing. The null hypothesis is that the difference between the PRS and WRS means exceeds the pre-defined equivalence margin ($\theta$).

**Formula for Equivalence Calculation:**
$$90\% CI = (\bar{X}_{WRS} - \bar{X}_{PRS}) \pm t_{0.05, df} \cdot \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}$$
Where:
- $\bar{X}$ = Mean purity or potency
- $s$ = Standard deviation
- $n$ = Number of replicates (n=6 minimum for bridging)

#### 2. Step-by-Step Bridging Procedure (SOP-REF-0042)
1.  **Preparation:** Thaw 3 vials of PRS-GLUC-001 and 3 vials of the candidate WRS-GLUC-02.
2.  **Run Sequence:** Perform 3 independent HPLC runs. Each run must include the PRS as the calibration standard and the WRS as the "unknown."
3.  **Potency Assessment:** Execute the *In Vitro* GLP-1 Receptor reporter gene assay (HEK293-GLP1R cell line).
4.  **Comparison:** Calculate the Relative Potency (RP). The RP of the new WRS must fall between 0.95 and 1.05 compared to the PRS.
5.  **Documentation:** Generate a Reference Standard Qualification Report (RSQR).

#### Table 3: Bridging Data - WRS-GLUC-01 vs. PRS-GLUC-001
| Parameter | PRS Value | WRS Value | Delta ($\Delta$) | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| Purity (RP-HPLC) | 99.42% | 99.38% | -0.04% | Pass |
| Potency (EC50) | 12.4 nM | 12.6 nM | +1.6% | Pass |
| High Mol. Weight | 0.12% | 0.15% | +0.03% | Pass |

---

### IV. Stability and Re-Qualification Program

Reference materials are subjected to a rigorous stability program (ICH Q1A R2). Unlike clinical stability studies, RS stability focuses on the maintenance of the "assigned value."

#### 1. Storage Conditions
*   **Long-Term:** -80°C ± 5°C (Ultra-low freezer, monitored by Blue Mountain RAM system).
*   **Back-up:** -70°C ± 10°C (Geographically separate site: GHS Facility 2, Ashburn, VA).

#### 2. Re-test Frequency
*   **Year 1:** Every 6 months.
*   **Year 2+:** Annually.

#### 3. Protocol for Handling Out-of-Specification (OOS) in Reference Standards
If a reference standard fails a re-qualification parameter:
1.  Immediately suspend all release testing using the affected WRS.
2.  Initiate a Deviation Report (DR-GLUC-2025-XXXX).
3.  Perform a "Standard Check" against the PRS.
4.  If the PRS also shows degradation, initiate a Root Cause Analysis (RCA) focusing on storage excursion or container closure integrity (CCI).

---

### V. Characterization of Degradants in Reference Materials

As part of the lifecycle management, GHS characterizes forced degradation products (thermal, photolytic, and oxidative) to ensure that the analytical methods remain stability-indicating when using the IHRS.

*   **Deamidation (Asn-28):** Monitored via Cation Exchange Chromatography (CEX). The reference standard must contain < 2.0% deamidated species.
*   **Oxidation (Met-8):** Monitored via RP-HPLC. The reference standard must contain < 1.0% oxidized species.

#### Table 4: Historical Stability Data for PRS-GLUC-001 (T=24 Months)
| Interval | Condition | Purity (%) | Potency (%) | Appearance |
| :--- | :--- | :--- | :--- | :--- |
| T=0 | -80°C | 99.42 | 104 | Clear, Colorless |
| T=6m | -80°C | 99.41 | 102 | Clear, Colorless |
| T=12m | -80°C | 99.40 | 105 | Clear, Colorless |
| T=18m | -80°C | 99.38 | 103 | Clear, Colorless |
| T=24m | -80°C | 99.39 | 104 | Clear, Colorless |

---

### VI. Reference Standard Handling and Aliquoting

To prevent freeze-thaw degradation, the PRS and WRS are aliquoted into single-use, high-recovery cryovials (Nunc™ CryoTube™).

1.  **Aliquoting Volume:** 250 µL per vial.
2.  **Concentration:** 10.0 mg/mL (Determined by UV $A_{280}$ using an extinction coefficient $\epsilon = 1.45$ $mL \cdot mg^{-1} \cdot cm^{-1}$).
3.  **Labeling:** Each vial is barcoded with a unique Global Trade Item Number (GTIN) and serialized for tracking within the Google Cloud Life Sciences LIMS.

---

### VII. Regulatory References
*   **USP <111>:** Design and Analysis of Biological Assays.
*   **USP <1225>:** Validation of Compendial Procedures.
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.

**End of Subsection 3.2.S.5.1**

---

# Container Closure System for Drug Substance Storage

## Container Description

### 3.2.S.6 CONTAINER CLOSURE SYSTEM (DRUG SUBSTANCE)

#### 3.2.S.6.1 Container Description: Primary and Secondary Packaging for Glucogen-XR Drug Substance

The Glucogen-XR (glucapeptide extended-release) drug substance is a highly concentrated, biologically active GLP-1 receptor agonist produced via recombinant DNA technology using the proprietary GHS-CHO-001 cell line. Due to the inherent sensitivity of the glucapeptide molecule to shear stress, thermal fluctuations, and interfacial adsorption, Google Health Sciences (GHS) has implemented a robust, medical-grade, single-use technology (SUT) system for the storage and transport of the bulk drug substance (BDS).

The primary container closure system (CCS) is designed to maintain the sterility, stability, and biological potency of Glucogen-XR during long-term storage at frozen temperatures (-70°C to -80°C) and throughout the subsequent thawing processes prior to Drug Product (DP) formulation.

---

#### 3.2.S.6.1.1 Primary Container: Fluoropolymer Single-Use Bio-Process Container (BPC)

The primary containment for Glucogen-XR Drug Substance consists of the **GHS-FEP-UltraVial™ System**, a 5-liter nominal volume (3.5-liter fill volume) fluorinated ethylene propylene (FEP) single-use bag. This material was selected over standard Ethylene Vinyl Acetate (EVA) or Polyethylene (PE) due to its superior chemical inertness, negligible extractables/leachables profile, and high gas barrier properties at cryogenic temperatures.

##### 3.2.S.6.1.1.1 Material Science and Composition
The contact layer of the BPC is composed of 100% high-purity FEP. FEP is a copolymer of hexafluoropropylene and tetrafluoroethylene.

**Table 1: Technical Specifications of the Primary Contact Layer (FEP)**

| Parameter | Specification / Property | Reference Standard |
| :--- | :--- | :--- |
| **Material ID** | GHS-MAT-FEP-01 | Internal Specification |
| **Thickness** | 12.5 mil (0.3175 mm) | ASTM D2103 |
| **Density** | 2.12 – 2.17 g/cm³ | ASTM D792 |
| **Tensile Strength** | > 3500 psi | ASTM D638 |
| **Elongation at Break** | > 300% | ASTM D638 |
| **Water Vapor Transmission** | < 0.01 g/100 in²/24hr | ASTM F1249 |
| **Oxygen Permeability** | < 15.0 cc/100 in²/24hr | ASTM D3985 |
| **Extractables (Total)** | < 0.05% (w/w) | USP <661.2> |
| **Operating Temperature** | -196°C to +200°C | Manufacturer Data |

##### 3.2.S.6.1.1.2 Component Dimensions and Configuration
Each container is fabricated under ISO Class 5 cleanroom conditions. The bag geometry is optimized for the **GHS-CryoFreeze™** shell system to ensure uniform heat transfer during the freezing of the 3.5 L bulk drug substance.

**Table 2: BPC Dimensional and Capacity Specifications**

| Component ID | Description | Nominal Volume | Working Volume | Dimensions (Flat) |
| :--- | :--- | :--- | :--- | :--- |
| **BPC-5L-GHS** | FEP DS Storage Bag | 5.0 Liters | 3.5 Liters | 350 mm x 480 mm |
| **PORT-IN-01** | Fill Port (C-Flex 374) | N/A | N/A | 3/8" ID x 5/8" OD |
| **PORT-OUT-01** | Drain Port (FEP/PTFE) | N/A | N/A | 1/4" ID |
| **SAMP-01** | Needleless Sample Port | N/A | N/A | Luer-Lock Compatible |

---

#### 3.2.S.6.1.2 Secondary Packaging: Protective Shell and Cold Chain Integration

The FEP BPC is housed within a secondary containment system to provide mechanical rigidity and protection against physical breach during sub-zero storage and inter-site transit (from the Google Health Sciences South San Francisco facility to the fill-finish site).

##### 3.2.S.6.1.2.1 The GHS-CryoFreeze™ Protective Shell
The secondary container is a rigid, high-density polyethylene (HDPE) "clamshell" frame. This frame serves three primary functions:
1.  **Compression Management:** It maintains a constant thickness of the frozen DS block (approx. 2.5 cm), ensuring predictable thawing kinetics.
2.  **Impact Resistance:** It protects the FEP film, which can become brittle (though less so than PE) at -80°C.
3.  **Labeling Surface:** Provides a flat, secure area for the application of GS1-compliant thermal-transfer labels.

**Table 3: Secondary Container (HDPE Shell) Specifications**

| Property | Value/Requirement |
| :--- | :--- |
| **Material** | Medical Grade HDPE (BPA Free) |
| **Weight** | 1.2 kg |
| **Dimensions (External)** | 380 mm x 510 mm x 45 mm |
| **Compression Rating** | Up to 150 kg static load |
| **Cleaning Method** | 70% IPA Wipe or Vaporized Hydrogen Peroxide (VHP) |

---

#### 3.2.S.6.1.3 Tertiary Packaging and Shipment Logistics

For bulk drug substance batches (e.g., Batch GLUC-2025-001 through GLUC-2025-020), multiple secondary shells are packed into a tertiary insulated shipper.

*   **Insulated Shipper:** Vacuum Insulated Panels (VIP) with a thermal conductivity of <0.004 W/m·K.
*   **Coolant:** CO₂ (Dry Ice) pellets or liquid nitrogen (LN2) dry vapor shippers depending on the transport duration.
*   **Monitoring:** Every shipment includes dual redundant NIST-traceable GPS/Temperature data loggers (e.g., TempTale® Geo Ultra).

---

#### 3.2.S.6.1.4 Quality Control and Acceptance Testing of CCS Components

Each lot of the Glucogen-XR primary container closure system undergoes rigorous testing before being released for use in the manufacturing of DS.

**Table 4: Representative Incoming Quality Control (IQC) Data (Lot: CCS-FEP-2024-088)**

| Test Parameter | Method | Acceptance Criteria | Result (Batch CCS-FEP-2024-088) |
| :--- | :--- | :--- | :--- |
| **Visual Inspection** | USP <790> | No visible particles, creases, or pinholes | Pass |
| **Leak Test (Pressure)** | ASTM F2095 | No pressure drop at 5 psi for 10 min | Pass (0.01 psi drop) |
| **Endotoxin Content** | USP <85> | < 0.25 EU/mL (rinse) | < 0.05 EU/mL |
| **Particulate Matter** | USP <788> | ≤ 25 particles/mL @ ≥10µm | 2.4 particles/mL |
| **Sterility** | USP <71> | No Growth (14 days) | No Growth |
| **Bioburden (Pre-Gamma)**| ISO 11737-1 | < 100 CFU/bag | 12 CFU/bag |

---

#### 3.2.S.6.1.5 Protocol for Container Assembly and Integrity Verification (SOP-GHS-DS-4402)

The following step-by-step procedure is followed by Google Health Sciences technicians during the assembly of the CCS for Glucogen-XR DS.

1.  **Pre-Assembly Inspection:**
    *   Verify the sterilization indicator on the triple-bagged BPC.
    *   Ensure the "Use By" date has not been exceeded.
    *   Check for any discoloration of the C-Flex tubing.

2.  **Sterile Connection:**
    *   Using a sterile tubing welder (e.g., Terumo BCT TSCD-II), connect the BPC inlet line to the final 0.22 µm filtration assembly.
    *   *Calculation:* The weld strength must exceed 80% of the base tubing tensile strength (approx. 18 N/mm²).

3.  **Integrity Testing (In-Process):**
    *   Perform a Point-of-Use Leak Test (PULT) using nitrogen gas at 2.0 psi.
    *   Verify no flow is detected by the mass flow controller (Sensitivity: 0.1 sccm).

4.  **Filling Operation (Batch GLUC-2025-XXX):**
    *   Transfer 3.5 L ± 0.1 L of Glucogen-XR DS (Concentration: 50 mg/mL).
    *   Purge the headspace with ultra-high purity (UHP) Argon to minimize oxidative degradation of the methionine residues in the peptide.

5.  **Sealing:**
    *   Double-seal the C-Flex tubing using a thermal crimper.
    *   Apply a secondary mechanical clamp (Kynar®) as a redundant safety measure.

---

#### 3.2.S.6.1.6 Extractables and Leachables (E&L) Summary

A comprehensive E&L study was conducted under "worst-case" conditions: storage of the Glucogen-XR formulation buffer with 10% Polysorbate 80 at 40°C for 21 days (accelerated) and -80°C for 36 months (real-time).

**Table 5: Summary of Identified Extractables (Primary CCS)**

| Compound | Analytical Technique | Threshold (µg/bag) | Measured Level (µg/bag) | Risk Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **Fluoride Ion** | Ion Chromatography | 500 | 12 | Negligible |
| **Stearic Acid** | GC-MS | 100 | 4.5 | Below AET |
| **BHT** | HPLC-UV | 50 | Not Detected | N/A |
| **Irgafos 168** | LC-MS/MS | 50 | 1.2 | Negligible |

*Analytical Evaluation Threshold (AET) calculation:*
$$AET = \frac{SCT \cdot D_{total}}{D_{daily} \cdot UF}$$
Where:
*   SCT (Safety Concern Threshold) = 1.5 µg/day
*   $D_{total}$ = Number of doses per bag (approx. 700)
*   $D_{daily}$ = 1 dose
*   UF (Uncertainty Factor) = 10

---

#### 3.2.S.6.1.7 Regulatory Compliance Statements

The Glucogen-XR Container Closure System complies with the following regulatory frameworks:
*   **USP <661.1> and <661.2>:** Plastic Materials of Construction / Plastic Packaging Systems for Pharmaceutical Use.
*   **USP <87> and <88>:** Biological Reactivity Tests (In Vitro and In Vivo, Class VI).
*   **EP 3.1.9:** Silicone Elastomer for Closures and Tubing.
*   **21 CFR 177.1550:** Perfluorocarbon resins (FDA food contact compliance).
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in Their Manufacturing Process.

#### 3.2.S.6.1.8 Detailed Batch History: CCS Utilization

**Table 6: Historical CCS Performance for Clinical Batches**

| DS Batch Number | CCS Lot Number | Fill Date | Storage Temp | Integrity Result |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | CCS-FEP-2024-01 | 12-JAN-2025 | -80.4°C | Pass |
| **GLUC-2025-002** | CCS-FEP-2024-01 | 19-JAN-2025 | -79.8°C | Pass |
| **GLUC-2025-003** | CCS-FEP-2024-05 | 02-FEB-2025 | -80.1°C | Pass |
| **GLUC-2025-004** | CCS-FEP-2024-05 | 09-FEB-2025 | -80.2°C | Pass |

---

*This concludes the Container Description for the Glucogen-XR Drug Substance. For details regarding the stability of the CCS under long-term storage, refer to Section 3.2.S.7.*

---

## Compatibility Studies

### 3.2.S.6.2.1 Compatibility Studies for Drug Substance Container Closure System (CCS)

---

#### 3.2.S.6.2.1.1 Introduction and Scope
The primary objective of these compatibility studies is to demonstrate that the container closure system (CCS) selected for the storage of Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) is suitable for its intended use throughout the defined shelf-life and storage conditions. As a long-acting GLP-1 receptor agonist peptide produced via the proprietary GHS-CHO-001 cell line, Glucogen-XR is highly sensitive to interfacial phenomena, temperature fluctuations, and chemical leachables.

The DS CCS consists of a 20L high-density polyethylene (HDPE) primary carboy (Bioproduction Grade) equipped with a polypropylene (PP) screw cap and a platinum-cured silicone gasket. This section details the Extractables and Leachables (E&L) assessment, protein-surface adsorption kinetics, and integrity testing performed under various environmental stresses.

#### 3.2.S.6.2.1.2 Regulatory Framework and Standards
All studies were designed and executed in accordance with the following regulatory and industry standards:
*   **USP <1663>:** Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **USP <1664>:** Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **USP <661.2>:** Plastic Packaging Systems for Pharmaceutical Use.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (May 1999).
*   **EMA/CHMP/ICMWP/824930/2011:** Guideline on Plastic Immediate Packaging Materials.

---

#### 3.2.S.6.2.1.3 Extractables Profile Assessment (Component Level)
Extractables studies were conducted on the individual components of the CCS to establish a "worst-case" profile of potential migrants.

**Table 1: Components Subjected to Extractables Analysis**
| Component ID | Material of Construction (MOC) | Manufacturer | Part Number | Surface Area ($cm^2$) |
| :--- | :--- | :--- | :--- | :--- |
| CCS-01-A | HDPE (Medical Grade) | GHS Materials Div | HDPE-8822-G | 4,200 |
| CCS-01-B | Polypropylene (Cap) | GHS Materials Div | PP-CAP-20L | 150 |
| CCS-01-G | Platinum-Cured Silicone | Silico-Solutions | GASK-V7 | 25 |

**A. Extraction Protocol**
Extraction was performed using three solvents of varying polarity to ensure comprehensive recovery of organic and inorganic species:
1.  **Purified Water (USP):** Simulating aqueous environment.
2.  **50% Ethanol/Water:** Simulating semi-polar extraction.
3.  **n-Hexane:** Simulating non-polar extraction.

Extraction conditions: Reflux for 24 hours at 70°C.

**Table 2: Summary of Extractables Results (Batch: GLUC-2025-E01)**
| Analyte Class | Detection Method | Concentration Range ($\mu g/cm^2$) | Identified Compound(s) |
| :--- | :--- | :--- | :--- |
| Non-Volatile Organics | LC-MS/MS | 0.05 - 1.2 | Irganox 1010, Irgafos 168 |
| Semi-Volatile Organics | GC-MS | 0.02 - 0.45 | Palmitic Acid, Stearic Acid |
| Volatile Organics | HS-GC/MS | < 0.01 | Trace Acetone |
| Trace Metals | ICP-OES | < 0.005 | Catalyst residues (Ti, Al) |

---

#### 3.2.S.6.2.1.4 Leachables Study in Glucogen-XR Drug Substance
Leachables studies were performed on three GMP batches of Glucogen-XR DS stored in the intended CCS at the recommended storage condition (-70°C) and accelerated conditions (5°C and 25°C).

**Table 3: Batch Traceability for Compatibility Studies**
| Study Type | DS Batch Number | Date of Initiation | Equipment ID |
| :--- | :--- | :--- | :--- |
| Long-term Leachables | GLUC-2025-001 | 15-JAN-2025 | STAB-CH-09 |
| Accelerated Compatibility | GLUC-2025-002 | 22-JAN-2025 | STAB-CH-12 |
| Thermal Cycle Stress | GLUC-2025-003 | 01-FEB-2025 | CYC-FRZ-01 |

**A. Methodology for Leachables Analysis**
Quantitation was performed using the Analytical Evaluation Threshold (AET), calculated as:
$$AET = \left( \frac{SCT}{n \cdot D_d} \right) \cdot D_c$$
Where:
*   $SCT$ (Safety Concern Threshold) = 1.5 $\mu g/day$.
*   $n$ = Number of containers.
*   $D_d$ = Daily dose of Glucogen-XR.
*   $D_c$ = Dilution concentration.

For Glucogen-XR, the calculated AET for DS storage is 0.25 $\mu g/mL$.

**Table 4: Leachables Data - 12-Month Storage at -70°C (GLUC-2025-001)**
| Timepoint (Months) | Irganox 1010 Degradant ($\mu g/mL$) | Siloxanes ($\mu g/mL$) | Plasticizers ($\mu g/mL$) | Compliance |
| :--- | :--- | :--- | :--- | :--- |
| T0 | < LOQ | < LOQ | < LOQ | Pass |
| T3 | < LOQ | 0.002 | < LOQ | Pass |
| T6 | 0.005 | 0.004 | < LOQ | Pass |
| T12 | 0.008 | 0.006 | < LOQ | Pass |

*Note: All detected leachables remained significantly below the AET of 0.25 $\mu g/mL$.*

---

#### 3.2.S.6.2.1.5 Adsorption and Recovery Studies
Due to the hydrophobic nature of the GLP-1 peptide, the risk of adsorption to the HDPE surface was evaluated.

**Protocol: Recovery of Glucogen-XR Post-Storage**
1.  Charge 20L HDPE carboy with 18L of DS at 10 mg/mL concentration.
2.  Store at 2-8°C for 30 days (Worst-case liquid phase).
3.  Sample at T=0, 7, 14, 21, and 30 days.
4.  Measure protein concentration via UV-Vis ($A_{280}$) and purity via RP-HPLC.

**Table 5: Protein Adsorption Results (Batch: GLUC-2025-002)**
| Timepoint | Protein Conc (mg/mL) | Recovery (%) | Purity by RP-HPLC (%) |
| :--- | :--- | :--- | :--- |
| T0 | 10.02 | 100.0 | 99.4 |
| Day 7 | 9.98 | 99.6 | 99.4 |
| Day 14 | 9.97 | 99.5 | 99.3 |
| Day 30 | 9.95 | 99.3 | 99.2 |

*Statistical Analysis:* The mean recovery was 99.4% (SD = 0.21%). Based on the surface area to volume ratio ($S/V = 0.23 cm^{-1}$), the adsorption loss is negligible (< 1%) and does not impact the potency of the drug substance.

---

#### 3.2.S.6.2.1.6 Freeze-Thaw Compatibility Studies
Glucogen-XR is stored at -70°C. The compatibility of the CCS with multiple freeze-thaw (F/T) cycles was evaluated to ensure structural integrity and the absence of peptide aggregation triggered by container-surface interactions.

**Study Design:**
*   **Cycles:** 5 F/T cycles (Full frozen state to 25°C).
*   **Rate:** Controlled rate freezing at 0.5°C/min.
*   **Metrics:** Sub-visible particles (USP <788>), SEC-HPLC (aggregates), and Container Closure Integrity Testing (CCIT).

**Table 6: Impact of F/T Cycles on DS Quality (Batch: GLUC-2025-003)**
| Cycle # | SEC-HPLC % High Mol. Weight | Particles $\geq 10 \mu m$ (per mL) | CCIT (Helium Leak Rate) |
| :--- | :--- | :--- | :--- |
| Initial | 0.22 | 45 | $1.2 \times 10^{-8}$ mbar·L/s |
| Cycle 1 | 0.23 | 52 | $1.4 \times 10^{-8}$ mbar·L/s |
| Cycle 3 | 0.25 | 68 | $2.0 \times 10^{-8}$ mbar·L/s |
| Cycle 5 | 0.28 | 84 | $2.5 \times 10^{-8}$ mbar·L/s |

*Acceptance Criteria:* SEC %HMW < 1.0%; CCIT leak rate < $6.0 \times 10^{-7}$ mbar·L/s (Kirsch leak limit).
*Results:* The CCS maintained integrity and protected the DS from significant aggregation through 5 cycles.

---

#### 3.2.S.6.2.1.7 Photostability Compatibility
While DS is stored in opaque HDPE carboys and secondary cardboard packaging, a photostability study per ICH Q1B was conducted to ensure the CCS provides sufficient light protection during handling in the manufacturing suite.

**Experimental Setup:**
*   Exposure: 1.2 million lux hours (visible) and 200 watt hours/$m^2$ (UV).
*   Samples: DS in HDPE (intended CCS) vs. DS in Quartz (Control).

**Table 7: Photostability Assessment**
| Parameter | Dark Control | HDPE Protected | Exposed Control (Quartz) |
| :--- | :--- | :--- | :--- |
| Appearance | Clear, Colorless | Clear, Colorless | Opalescent |
| RP-HPLC Purity | 99.5% | 99.4% | 88.2% |
| Oxidized Species | 0.15% | 0.18% | 4.80% |

The HDPE CCS provides 99.8% attenuation of UV/Vis radiation, effectively preventing the photo-oxidation of the methionine residues in the Glucogen-XR peptide.

---

#### 3.2.S.6.2.1.8 Conclusion
The compatibility studies for the Glucogen-XR Drug Substance Container Closure System demonstrate that the 20L HDPE carboy system is chemically inert, physically robust, and protective of the peptide's critical quality attributes (CQAs). Leachables are well below the safety thresholds (AET), adsorption is minimal, and the system maintains integrity under extreme cryogenic storage and freeze-thaw conditions. The CCS is deemed suitable for the storage of Glucogen-XR DS for the duration of its proposed shelf life.

---
**End of Subsection**

---

## Integrity Testing

### 3.2.S.6. CONTAINER CLOSURE SYSTEM [GLUCOGEN-XR, GLUCAPEPTIDE]

#### 3.2.S.6.1. Integrity Testing of the Drug Substance Container Closure System (CCS)

---

### 1.0 INTRODUCTION AND SCOPE

The integrity of the Container Closure System (CCS) for Glucogen-XR (glucapeptide extended-release) drug substance (DS) is paramount to ensuring the maintenance of a sterile boundary, preventing microbial ingress, and protecting the physicochemical stability of the peptide from oxidative or hydrolytic degradation during long-term storage at ultra-low temperatures (-70°C to -80°C). 

Google Health Sciences (GHS) employs a multi-tiered Container Closure Integrity Testing (CCIT) strategy that aligns with **USP <1207> Package Integrity Evaluation—Sterile Products**, **USP <1207.1> Package Integrity Testing in the Product Life Cycle—Test Method Selection and Validation**, and **FDA Guidance for Industry: Container and Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol for Sterile Products**.

This section details the deterministic and probabilistic methods used to validate the integrity of the primary packaging components, including the high-density polyethylene (HDPE) carboys and the fluoropolymer-lined stainless steel cryogenic vessels used for bulk DS storage.

---

### 2.0 REGULATORY ALIGNMENT AND GUIDELINES

The integrity testing protocols for Glucogen-XR DS CCS were developed in accordance with the following international standards:

1.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
2.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
3.  **USP <1207> Suite:** Sterile Product Packaging—Integrity Evaluation.
4.  **ASTM F2391-05:** Standard Test Method for Measuring Package and Seal Integrity Using Helium as the Tracer Gas.
5.  **PDA Technical Report No. 27:** Pharmaceutical Package Integrity.

---

### 3.0 PRIMARY CONTAINER CLOSURE SPECIFICATIONS

The DS is stored in two primary configurations depending on the batch scale:

| Component ID | Description | Material of Construction | Closure Mechanism | Volume |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-CCS-A1** | Single-use Bioprocess Bag (Secondary/Backup) | Multi-layer PE/EVOH | Heat Seal / MPC Connectors | 20L |
| **GHS-CCS-B2** | Rigid HDPE Carboy | Medical Grade HDPE | Polypropylene Screw Cap with Silicone O-Ring | 10L / 50L |
| **GHS-CCS-C3** | Cryo-Vessel (Primary) | 316L Stainless Steel / PFA Lined | Tri-Clamp with EPDM Gasket | 100L |

---

### 4.0 DETERMINISTIC METHODOLOGY: HELIUM LEAK DETECTION (HLD)

In accordance with USP <1207.2>, Google Health Sciences utilizes **Helium Mass Spectrometry** as the primary deterministic method for verifying the Maximum Allowable Leakage Limit (MALL). 

#### 4.1 Maximum Allowable Leakage Limit (MALL) Calculation
The MALL for Glucogen-XR DS was calculated based on the risk of microbial ingress and the sensitivity of the glucapeptide to oxygen.

**Formula for Gas Flow (Knudsen Flow Range):**
$$Q = \frac{D^3}{6L} \sqrt{\frac{2\pi RT}{M}} \Delta P$$

*Where:*
*   $Q$ = Leak rate (mbar·L/s)
*   $D$ = Capillary diameter (m)
*   $M$ = Molar mass of air ($29 \times 10^{-3}$ kg/mol)
*   $R$ = Gas constant (8.314 J/mol·K)

Based on empirical studies using *Brevundimonas diminuta*, a leak diameter of 0.2 $\mu$m represents the threshold for microbial ingress. For the Glucogen-XR CCS, the MALL is established at **$1.0 \times 10^{-7}$ mbar·L/s**.

#### 4.2 HLD Test Procedure (Vacuum Mode)
1.  **Preparation:** The empty DS container (GHS-CCS-B2) is placed inside the vacuum chamber of the ASM 340 Helium Leak Detector (Equipment ID: GHS-VAC-992).
2.  **Evacuation:** The chamber is evacuated to a vacuum level of $< 0.1$ mbar.
3.  **Tracer Injection:** Helium gas (99.999% purity) is injected into the interior of the container through a modified cap assembly at a pressure of 1.5 bar.
4.  **Measurement:** The mass spectrometer measures the helium flow rate from the container into the vacuum chamber.
5.  **Dwell Time:** A minimum dwell time of 60 seconds is maintained to allow for gas equilibration.

---

### 5.0 VALIDATION DATA: CCS INTEGRITY FOR GLUC-2025 BATCHES

The following table summarizes the integrity testing results for the validation batches of Glucogen-XR DS.

**Table 5.1: Helium Leak Rate Results for Process Performance Qualification (PPQ) Batches**

| Batch Number | Container Type | Date of Test | Helium Leak Rate (mbar·L/s) | Result (MALL < 1x10^-7) | Operator ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | GHS-CCS-C3 | 12-JAN-2025 | $2.3 \times 10^{-9}$ | PASS | J. DOE |
| **GLUC-2025-002** | GHS-CCS-C3 | 14-JAN-2025 | $4.1 \times 10^{-10}$ | PASS | R. SMITH |
| **GLUC-2025-003** | GHS-CCS-C3 | 15-JAN-2025 | $1.8 \times 10^{-9}$ | PASS | J. DOE |
| **GLUC-2025-004** | GHS-CCS-B2 | 18-JAN-2025 | $6.7 \times 10^{-8}$ | PASS | A. GUPTA |
| **GLUC-2025-005** | GHS-CCS-B2 | 20-JAN-2025 | $5.2 \times 10^{-8}$ | PASS | A. GUPTA |
| **GLUC-2025-006** | GHS-CCS-C3 | 22-JAN-2025 | $3.3 \times 10^{-9}$ | PASS | R. SMITH |

---

### 6.0 MICROBIAL INGRESS TESTING (PROBABILISTIC METHOD)

While HLD is the primary release test, microbial ingress testing was performed during the initial CCS qualification (Report GHS-VTR-2024-088) to correlate the physical leak rate with biological safety.

#### 6.1 Protocol for Microbial Challenge
1.  **Media Fill:** Containers are filled with Tryptic Soy Broth (TSB).
2.  **Inmersion:** Containers are immersed in a concentrated suspension of *Brevundimonas diminuta* ($> 10^7$ CFU/mL).
3.  **Pressure Cycling:** The immersion tank is subjected to a pressure cycle (0.5 bar vacuum to 2.0 bar pressure) to simulate the stresses of air transport and freeze-thaw cycles.
4.  **Incubation:** Containers are incubated at 30-35°C for 14 days.
5.  **Inspection:** Visual inspection for turbidity followed by sub-culturing.

**Table 6.2: Microbial Ingress Validation Results**

| Test Group | Number of Units | Positive Controls | Negative Controls | Growth Observed |
| :--- | :--- | :--- | :--- | :--- |
| **Intact GHS-CCS-C3** | 30 | 3/3 | 0/3 | 0/30 |
| **Laser-Drilled (5 $\mu$m)** | 5 | 5/5 | 0/5 | 5/5 |
| **Intact GHS-CCS-B2** | 30 | 3/3 | 0/3 | 0/30 |

---

### 7.0 LOW-TEMPERATURE INTEGRITY VERIFICATION

Glucogen-XR DS is stored at -80°C. The difference in thermal expansion coefficients between the HDPE container and the polypropylene cap can potentially compromise the seal (the "Cold Storage Gap" effect).

#### 7.1 Headspace Analysis (HSA) at -80°C
Google Health Sciences utilizes Laser-Based Oxygen Headspace Analysis (FMS-Oxygen, Lighthouse Instruments) to monitor integrity during long-term stability studies. 

**Protocol GHS-QC-STB-011:**
1.  Store containers at -80°C for 6 months.
2.  Measure internal oxygen concentration using Tunable Diode Laser Absorption Spectroscopy (TDLAS).
3.  An increase in internal $O_2$ levels exceeding 1% from the initial baseline indicates a breach in CCS integrity.

**Table 7.1: Oxygen Headspace Data - Batch GLUC-2025-001 (Storage at -80°C)**

| Timepoint | $O_2$ Concentration (%) | Deviation from $T_0$ | Integrity Status |
| :--- | :--- | :--- | :--- |
| **$T_0$ (Post-Fill)** | 0.04% | N/A | Secure |
| **1 Month** | 0.05% | +0.01% | Secure |
| **3 Months** | 0.07% | +0.03% | Secure |
| **6 Months** | 0.11% | +0.07% | Secure |
| **12 Months** | 0.15% | +0.11% | Secure |

---

### 8.0 DYE INGRESS TESTING PROTOCOL (FOR DESTRUCTIVE ANALYSIS)

In the event of a suspected leak during shipment (e.g., Batch GLUC-2025-XXX deviation), the following Blue Dye Ingress protocol is utilized as a secondary verification.

**Step-by-Step Procedure:**
1.  **Deposition:** The DS container is emptied and cleaned.
2.  **Submersion:** The container is submerged in a 0.1% (w/v) Methylene Blue solution in a pressure vessel.
3.  **Vacuum Application:** Apply 0.5 bar vacuum for 30 minutes.
4.  **Restoration:** Return to atmospheric pressure and maintain for 30 minutes.
5.  **Rinsing:** Remove container and rinse the exterior thoroughly with DI water.
6.  **Inspection:** Visually and spectrophotometrically (664 nm) inspect the internal contents for blue dye presence.

---

### 9.0 STATISTICAL ANALYSIS OF INTEGRITY DATA

To ensure process capability (Cpk), leak rate data for the GLUC-2025 series is analyzed using Minitab 21.3.

**Statistical Parameters:**
*   **Mean Leak Rate ($\mu$):** $2.45 \times 10^{-9}$ mbar·L/s
*   **Standard Deviation ($\sigma$):** $1.12 \times 10^{-9}$
*   **Upper Specification Limit (USL):** $1.0 \times 10^{-7}$
*   **Calculated Cpk:** 28.1

The high Cpk value indicates that the manufacturing and closing process for Glucogen-XR DS containers is highly robust and far exceeds the minimum regulatory requirements for seal integrity.

---

### 10.0 CONCLUSION

The integrity testing data provided for the Glucogen-XR Drug Substance Container Closure System demonstrates that the selected packaging configurations (GHS-CCS-B2 and GHS-CCS-C3) maintain a robust microbial barrier and atmospheric seal. Through the use of deterministic Helium Leak Detection (HLD) for release and Oxygen Headspace Analysis for stability, Google Health Sciences ensures the continued safety, purity, and potency of the glucapeptide DS throughout its designated shelf life.

---
**References:**
1. *USP <1207.2> Package Integrity Leak Test Technologies.*
2. *Guazzo, D.M. et al. (2018). "Determinants of Container Closure Integrity," Journal of Pharmaceutical Science.*
3. *GHS Internal Report: GHS-VTR-2024-099: Comparison of Rigid vs. Flexible CCS for Cryogenic Peptide Storage.*

---

# Stability of Reference Standards

## Storage Conditions

### 3.2.S.5 Reference Standards or Materials
#### 3.2.S.5.1 Stability of Reference Standards
#### 3.2.S.5.1.1 Storage Conditions and Environmental Control Protocols

---

**1. SCOPE AND OVERVIEW**
This subsection details the stringent storage requirements, environmental monitoring protocols, and stability-testing frameworks established for the Primary Reference Standard (PRS) and Working Reference Standard (WRS) of Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences. Given the complex secondary and tertiary folding patterns of the glucapeptide moiety and its susceptibility to deamidation and aggregation, these conditions are engineered to maintain a thermodynamic state of maximum stability over a projected shelf-life of 60 months for the PRS.

**2. PRIMARY STORAGE CONFIGURATION (ULTRA-LOW TEMPERATURE)**
The Glucogen-XR Primary Reference Standard (Batch: GLUC-2025-PRS-01) is stored under ultra-low temperature conditions to kineticize the suppression of molecular degradation pathways, including oxidation at Methionine residues and hydrolysis of the peptide backbone.

| Parameter | Specification | Tolerance | Monitoring Frequency |
| :--- | :--- | :--- | :--- |
| **Set Point Temperature** | -80.0°C | ± 5.0°C | Continuous (24/7/365) |
| **Relative Humidity** | N/A (Hermetically Sealed) | N/A | Weekly visual check |
| **Light Exposure** | Total Darkness | 0 Lux | Continuous |
| **Backup Power** | Redundant UPS + Diesel Gen | < 2 second switch | Monthly Load Test |

**3. DETAILED BATCH REPOSITORY AND INVENTORY (GLUC-2025-XXX)**
The following table provides the current inventory status and storage locations for all Reference Standard batches currently active within the Google Health Sciences Life Sciences Quality Control (QC) network.

| Batch Number | Standard Type | Date of Manufacture | Storage Location (Site ID) | Current Retest Date | Container Closure System |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-PRS-01** | Primary (PRS) | 12-JAN-2025 | SSF-V3-FREEZER-09 | 12-JAN-2030 | 2mL Type I Borosilicate Glass |
| **GLUC-2025-WRS-01** | Working (WRS) | 15-FEB-2025 | SSF-V3-FREEZER-10 | 15-FEB-2027 | 1mL Cyclic Olefin Polymer (COP) |
| **GLUC-2025-WRS-02** | Working (WRS) | 18-FEB-2025 | DUB-V1-FREEZER-04 | 18-FEB-2027 | 1mL Cyclic Olefin Polymer (COP) |
| **GLUC-2025-CAL-04** | Calibration Std | 01-MAR-2025 | SSF-V3-FREEZER-12 | 01-SEP-2025 | 0.5mL Low-Protein Binding PP |

**4. ENVIRONMENTAL MONITORING SYSTEM (EMS) ARCHITECTURE**
Google Health Sciences utilizes a proprietary Google Cloud-integrated IoT monitoring system (GHS-Cloud-Sense v4.2) to ensure the integrity of the storage environment.

*   **4.1 Sensor Redundancy:** Each freezer (e.g., Equipment ID: EQ-ULT-2025-001) is equipped with dual calibrated Pt100 RTD probes.
*   **4.2 Alert Thresholds:**
    *   *Warning Limit:* -72.0°C to -75.0°C (Triggers automated SMS/Email to Facility Manager).
    *   *Action Limit:* Above -70.0°C for > 15 minutes (Triggers immediate physical intervention and Deviation Report per SOP-QA-099).
*   **4.3 Data Integrity:** All temperature data is logged directly to a BigQuery-backed immutable ledger, compliant with 21 CFR Part 11 requirements for electronic records.

**5. STEP-BY-STEP PROTOCOL FOR REFERENCE STANDARD RETRIEVAL (SOP-QC-RS-005)**
To prevent freeze-thaw degradation and moisture condensation (hygroscopy), the following protocol is strictly enforced during retrieval of Glucogen-XR standards.

1.  **Authorization:** Authenticate via multi-factor biometric access at the SSF-V3-Storage Vault.
2.  **Selection:** Identify the required aliquot using the Barcode Matrix (GHS-SCAN-2025).
3.  **Transfer:** Move the vial from -80°C storage into a pre-chilled (-20°C) transport carrier containing dry ice.
4.  **Equilibration (Phase I):** Place the vial in a 2°C to 8°C refrigerator for exactly 60 minutes. This allows for controlled transition from the vitreous state.
5.  **Equilibration (Phase II):** Allow the vial to reach room temperature (20-25°C) for 15 minutes inside a desiccant chamber. *Note: Do not open the vial until it reaches room temperature to prevent condensation.*
6.  **Reconstitution (if lyophilized):** Add 1.0 mL of Sterile Water for Injection (SWFI) using a non-coring needle. Gently swirl for 30 seconds. Do not vortex.
7.  **Usage:** Use the required volume immediately. Any remaining material in the vial is discarded; re-freezing of WRS/PRS aliquots is strictly prohibited.

**6. STABILITY CALCULATION AND ARRHENIUS EXTRAPOLATION**
The shelf-life of the PRS is validated using accelerated stability data. We apply the Arrhenius equation to predict the degradation rate ($k$) at different temperatures:

$$k = A \cdot e^{-\frac{E_a}{RT}}$$

Where:
*   $E_a$ (Activation Energy) for Glucogen-XR aggregation = $85 \text{ kJ/mol}$.
*   $R$ (Gas Constant) = $8.314 \text{ J/mol}\cdot K$.
*   $T$ (Temperature) in Kelvin.

Based on our Long-Term Stability Study (Study ID: GLUC-STAB-2025-01), the predicted purity at -80°C after 5 years remains > 99.8%, whereas at 25°C (Standard Room Temp), the purity drops below the 95.0% threshold within 72 hours due to deamidation at the Asn-28 residue.

**7. SECONDARY PACKAGING AND LIGHT PROTECTION**
Glucogen-XR is highly sensitive to photo-oxidation, specifically involving the Tryptophan residues at positions 25 and 31.
*   **Primary Container:** USP Type I Amber Borosilicate Glass Vials (for PRS).
*   **Secondary Container:** Aluminum foil overwrap with moisture-absorbent silica gel packets (USP <671> compliant).
*   **Tertiary Container:** Lead-lined, light-opaque polycarbonate storage boxes.

**8. REGULATORY COMPLIANCE AND REFERENCES**
This storage configuration is designed to meet and exceed the following regulatory expectations:
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
3.  **USP <1049>:** Content of Stability Protocols - Biologics.
4.  **FDA Guidance for Industry:** Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.

**9. RE-QUALIFICATION SCHEDULE**
The PRS is subjected to a "Full Re-Qualification" every 24 months, while the WRS is compared against the PRS every 6 months to ensure no "drift" in potency or glycosylation profile has occurred during storage.

| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Purity by RP-HPLC** | Method MET-GLUC-001 | $\ge 98.0\%$ |
| **Potency (Cell-based)** | Method MET-GLUC-005 | $90\% - 110\%$ of Initial |
| **Aggregation (SEC)** | Method MET-GLUC-002 | $\le 0.5\%$ High Molecular Weight Species |
| **Deamidation (CEX)** | Method MET-GLUC-003 | $\le 2.0\%$ Acidic Variants |

---
*End of Subsection 3.2.S.5.1.1 - Storage Conditions*

---

## Retest Schedule

### 3.2.S.5.3 RETEST SCHEDULE AND STABILITY PROGRAM FOR REFERENCE STANDARDS

#### 3.2.S.5.3.1 Introduction and Strategic Framework
The establishment of a robust retest schedule for Glucogen-XR (glucapeptide extended-release) Reference Standards (RS) is a critical component of the Google Health Sciences (GHS) Quality Management System. As a long-acting GLP-1 receptor agonist produced in the GHS-CHO-001 cell line, Glucogen-XR exhibits complex post-translational modification (PTM) profiles, including specific glycation and acylation patterns that necessitate high-resolution monitoring.

This section delineates the tiered retest intervals, the mathematical models used to derive these intervals, and the specific analytical protocols employed to ensure that the Primary Reference Standard (PRS) and Working Reference Standards (WRS) maintain their potency, purity, and identity throughout their lifecycle.

#### 3.2.S.5.3.2 Regulatory Compliance Matrix
The retest schedule is designed in strict accordance with the following regulatory frameworks:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <111>:** Design and Analysis of Biological Assays.
*   **USP <1049>:** Quality of Biotechnological Products: Analysis of the Expression Construct in Cells Used for Production of r-DNA Derived Protein Products.
*   **FDA Guidance for Industry:** Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.

---

#### 3.2.S.5.3.3 Tiered Retest Intervals and Designation
Google Health Sciences utilizes a bifurcated stability monitoring system for Reference Standards. 

**Table 3.2.S.5.3-1: Retest Frequency for Glucogen-XR Reference Materials**

| Standard Tier | Storage Condition | Initial Retest Interval | Subsequent Retest Interval | Max Cumulative Life |
| :--- | :--- | :--- | :--- | :--- |
| **Primary (PRS)** | -80°C ± 5°C | 24 Months | 12 Months | 120 Months |
| **Working (WRS)** | -20°C ± 2°C | 12 Months | 6 Months | 60 Months |
| **In-Use Aliquot** | 2°C to 8°C | 7 Days | N/A | 14 Days |

##### 3.2.S.5.3.3.1 Rationale for Tiered Intervals
The Primary Reference Standard (PRS), Batch **GLUC-2025-PRS-01**, is stored in ultra-low temperature (ULT) freezers (Equipment ID: GHS-ULT-9922) to minimize molecular kinetic energy and suppress hydrolytic or oxidative degradation. The Working Reference Standard (WRS), Batch **GLUC-2025-WRS-04**, is derived from the PRS and subjected to more frequent retesting due to the increased frequency of freeze-thaw cycles and standard laboratory handling.

---

#### 3.2.S.5.3.4 Detailed Retest Protocol (Protocol GHS-RS-STAB-2025)

The following procedure is executed by the Quality Control (QC) Stability Group at the South San Francisco facility (3000 Innovation Drive).

**Step 1: Sampling and Retrieval**
1.  Verify the Freezer Log for Equipment GHS-ULT-9922.
2.  Retrieve $n=5$ vials of Batch **GLUC-2025-XXX** using the "First-In-First-Out" (FIFO) principle within the stability cohort.
3.  Transfer vials to the QC Laboratory using a calibrated cold-chain transport unit (Maintaining -78.5°C via dry ice).

**Step 2: Physical Characterization**
1.  Perform visual inspection under 2000 lux illumination (USP <790> compliant).
2.  Record appearance: Must be a white to off-white lyophilized cake, free from foreign particulate matter.
3.  Reconstitute with 1.0 mL of Sterile Water for Injection (SWFI). Record reconstitution time (Target: < 60 seconds).

**Step 3: Analytical Execution (The "Stability-Indicating" Battery)**
The following table outlines the analytical matrix required for every retest event.

**Table 3.2.S.5.3-2: Retest Analytical Matrix and Acceptance Criteria**

| Parameter | Method ID | Specification | Significance |
| :--- | :--- | :--- | :--- |
| **Identity (RT)** | RP-HPLC (GHS-METH-102) | Matches PRS within ± 2% | Confirms primary structure |
| **Purity (SEC)** | SE-HPLC (GHS-METH-105) | Main Peak ≥ 98.5% | Monitors aggregation |
| **Purity (CEX)** | CEX-HPLC (GHS-METH-108) | Acidic Peaks ≤ 2.5% | Monitors deamidation |
| **Potency** | In Vitro Bioassay (GHS-BIO-44) | 90% - 110% of Target | GLP-1 Receptor Activation |
| **Oxidation** | Peptide Mapping (LC-MS) | Met-Oxidation < 1.0% | Monitors oxidative stress |
| **Residual Moisture** | Karl Fischer (USP <921>) | ≤ 2.0% w/w | Monitors vial integrity |

---

#### 3.2.S.5.3.5 Statistical Analysis of Retest Data
Google Health Sciences employs a linear regression model to predict the "Out of Specification" (OOS) date. The 95% confidence interval (CI) is calculated for the degradation slope.

**Equation 3.2.S.5.3-1: Degradation Rate Prediction**
$$y = \beta_0 + \beta_1x + \epsilon$$
Where:
*   $y$ = Measured Purity (%)
*   $\beta_0$ = Intercept (Initial Purity)
*   $\beta_1$ = Degradation rate constant (slope)
*   $x$ = Time in months

If the lower 95% CI of the slope indicates that the purity will drop below 98.0% within the next 6 months, the retest interval is halved, and an "Alert Limit" is triggered in the LIMS system.

---

#### 3.2.S.5.3.6 Historical Retest Data for GLUC-2025-WRS-01
The following data represents the real-time stability monitoring used to validate the current retest schedule.

**Table 3.2.S.5.3-3: Stability Data Summary for Working Standard GLUC-2025-WRS-01**

| Retest Date | Time Point | SEC Purity (%) | CEX Purity (%) | Bioassay (%) | Analyst ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 15-JAN-2025 | T=0 (Release) | 99.8% | 99.2% | 102% | GHS-772 |
| 15-JUL-2025 | T=6 Months | 99.7% | 99.1% | 101% | GHS-812 |
| 15-JAN-2026 | T=12 Months | 99.5% | 98.8% | 99% | GHS-904 |
| 15-JUL-2026 | T=18 Months | 99.4% | 98.5% | 100% | GHS-112 |
| 15-JAN-2027 | T=24 Months | 99.2% | 98.1% | 98% | GHS-045 |

*Note: All results remained within the "Validated" range. No OOS events were recorded during the initial 24-month cycle.*

---

#### 3.2.S.5.3.7 Protocol for Extending Retest Dates
If a Reference Standard batch (e.g., **GLUC-2025-PRS-02**) reaches its scheduled retest date and meets all specifications, the Quality Assurance (QA) department may authorize a "Retest Extension" based on the following protocol:

1.  **Data Review:** A cross-functional team (QC, QA, and Regulatory Affairs) reviews the past 3 retest cycles.
2.  **Trend Analysis:** Regression analysis must show a slope $\beta_1$ not significantly different from zero ($p > 0.05$).
3.  **Risk Assessment:** Evaluation of the impact of potential degradation products on the accuracy of the Drug Substance (DS) release testing.
4.  **Authorization:** Issuance of an updated "Certificate of Analysis" (CoA) with the new retest date, signed by the Head of Quality at 3000 Innovation Drive.

#### 3.2.S.5.3.8 Handling of Out-of-Specification (OOS) Results
In the event that a Reference Standard fails a retest (e.g., SEC Purity < 98.5% for **GLUC-2025-WRS-09**):
*   **Immediate Quarantine:** The batch is locked in the LIMS and physically moved to a "Red Zone" in the freezer.
*   **Impact Assessment:** All Drug Substance batches released using the failed RS since the *previous* successful retest must be investigated for potential impact on reported potency values.
*   **Notification:** The FDA Project Manager shall be notified if the OOS result suggests a fundamental stability issue with the Glucogen-XR molecule.

---

#### 3.2.S.5.3.9 Equipment and Software
All stability calculations and retest scheduling are managed via the **Google Life Sciences Cloud-LIMS (v.4.2)**. 
*   **Incubation:** Thermo Fisher Scientific Forma FDE Series ULT Freezers.
*   **Calibration:** Quarterly calibration against NIST-traceable thermometers (NIST-GHS-2025).
*   **Software Validation:** Validated per 21 CFR Part 11 requirements.

#### 3.2.S.5.3.10 Conclusion
The retest schedule for Glucogen-XR Reference Standards ensures that the analytical "anchor" for all potency and purity measurements remains scientifically sound. By utilizing a 12-month initial interval for PRS and a 6-month interval for WRS, Google Health Sciences mitigates the risk of drift in the quality profile of this critical GLP-1 therapeutic.

---
*Footnotes:*
1. ICH Q5C, Section 5.1: "Stability of the reference standard is the cornerstone of the analytical lifecycle."
2. GHS Standard Operating Procedure SOP-QC-0098: Reference Standard Qualification.
3. Batch GLUC-2025-PRS-01 was manufactured in Suite 4 of the South San Francisco facility under cGMP conditions.

---

## Qualification Data

# MODULE 3: QUALITY (3.2.S.5.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: CONTROL OF DRUG SUBSTANCE - REFERENCE STANDARDS OR MATERIALS
## SUBSECTION: QUALIFICATION DATA FOR PRIMARY AND WORKING REFERENCE STANDARDS

---

### 3.2.S.5.2.1 Introduction and Scope of Qualification
This subsection details the comprehensive qualification data for the Primary Reference Standard (PRS) and the Working Reference Standard (WRS) of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. 

The qualification program follows the principles outlined in **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q7** (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients). The qualification ensures that the reference materials are characterized with the highest degree of precision to serve as the benchmark for identity, purity, potency, and heterogenity for all subsequent clinical and commercial batches.

### 3.2.S.5.2.2 Primary Reference Standard (PRS) Qualification: Batch GLUC-2025-PRS01

The Primary Reference Standard, Batch **GLUC-2025-PRS01**, was derived from a highly purified pilot-scale production run (Lot # GHS-BIO-2024-09) and subjected to exhaustive orthogonal characterization.

#### 3.2.S.5.2.2.1 Batch History and Inventory Management
| Attribute | Specification/Details |
| :--- | :--- |
| **Batch Number** | GLUC-2025-PRS01 |
| **Manufacturing Date** | 14-Oct-2024 |
| **Manufacturing Site** | Google Health Sciences, 3000 Innovation Drive, SSF, CA |
| **Cell Line** | CHO-K1 GS knockout (GHS-CHO-001) |
| **Storage Temperature** | -80°C ± 5°C |
| **Container Closure** | 2.0 mL Cryogenic Grade USP Class VI Polypropylene Vials |
| **Fill Volume** | 0.5 mL per vial |
| **Concentration** | 10.05 mg/mL (by UV280) |

#### 3.2.S.5.2.2.2 Analytical Qualification Results (GLUC-2025-PRS01)
The following table summarizes the foundational qualification data for the PRS.

| Test Parameter | Analytical Procedure | Acceptance Criteria | Results (GLUC-2025-PRS01) |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual (Ph. Eur. 2.2.1) | Clear to opalescent, colorless liquid | Complies |
| **Identity (MW)** | ESI-TOF MS | 34,450.2 ± 2.0 Da | 34,450.4 Da |
| **Identity (Sequence)** | LC-MS/MS Peptide Map | Confirms 100% Sequence Coverage | 100% Match |
| **Purity (Monomer)** | SE-HPLC (USP <129>) | ≥ 99.0% | 99.72% |
| **Purity (Charge)** | iCE3 (cIEF) | Main Peak: 65.0 - 75.0% | 71.2% |
| **Potency (In Vitro)** | cAMP Bioassay (HEK-GLP1R) | 80% - 120% of Theoretical | 102.4% |
| **Host Cell Protein** | ELISA (GHS-Specific) | ≤ 10 ppm | 1.2 ppm |
| **Host Cell DNA** | qPCR (GS-System) | ≤ 1 ppm | < 0.1 ppm |

---

### 3.2.S.5.2.3 Detailed Characterization Protocols

#### 3.2.S.5.2.3.1 Primary Structure Confirmation (Mass Spectrometry)
The intact mass of GLUC-2025-PRS01 was determined using an Agilent 6545XT Q-TOF LC/MS system.
1. **Sample Preparation:** The sample was diluted to 1 mg/mL in 0.1% Formic Acid.
2. **Chromatography:** PLRP-S column (1000Å, 5 µm, 2.1 x 50 mm).
3. **Data Analysis:** Deconvolution using BioConfirm software (Maximum Entropy algorithm).
4. **Findings:** The observed mass of 34,450.4 Da is consistent with the theoretical mass calculated for the peptide backbone plus the specific C-terminal extended-release glycan moiety.

#### 3.2.S.5.2.3.2 Secondary and Tertiary Structure Analysis
To ensure the PRS represents the native conformation, Far-UV Circular Dichroism (CD) and Fourier Transform Infrared (FTIR) spectroscopy were performed.
*   **CD Protocol:** Measured from 190 nm to 260 nm at 25°C. The spectrum shows a double minimum at 208 nm and 222 nm, characteristic of a high alpha-helical content (approx. 48%), consistent with the GLP-1R agonist class.
*   **FTIR Protocol:** Amide I and II bands were analyzed using a Bruker Tensor 27. The Amide I peak at 1654 cm⁻¹ confirms the alpha-helical dominance.

---

### 3.2.S.5.2.4 Working Reference Standard (WRS) Qualification: Batch GLUC-2025-WRS01

The WRS is qualified against the PRS to be used in routine release and stability testing.

#### 3.2.S.5.2.4.1 Comparison Protocol (WRS vs. PRS)
Qualification of **GLUC-2025-WRS01** involved a head-to-head comparison with **GLUC-2025-PRS01** across six (6) independent analytical runs performed by three different analysts over five days.

**Statistical Criteria for Qualification:**
*   The difference in purity by RP-HPLC must be ≤ 0.5%.
*   The relative potency must have a 95% Confidence Interval (CI) overlapping with 100%.
*   The Relative Standard Deviation (RSD) of the main peak area in SE-HPLC must be ≤ 1.0%.

#### 3.2.S.5.2.4.2 Comparative Data Table

| Method | PRS (GLUC-2025-PRS01) | WRS (GLUC-2025-WRS01) | Statistical Difference / Ratio |
| :--- | :--- | :--- | :--- |
| **RP-HPLC Purity** | 98.9% | 98.7% | -0.2% (Pass) |
| **SE-HPLC Monomer** | 99.72% | 99.68% | -0.04% (Pass) |
| **cIEF Main Isoform**| 71.2% | 70.8% | 0.994 Ratio (Pass) |
| **Biological Activity**| 1.02 x 10⁶ IU/mg | 1.01 x 10⁶ IU/mg | 99.02% Relative Potency |

---

### 3.2.S.5.2.5 Stability Data of Reference Standards

#### 3.2.S.5.2.5.1 Protocol for Real-Time Stability
The stability of the Reference Standards is monitored under the following ICH conditions:
*   **Long Term:** -80°C ± 5°C (Evaluated every 6 months for the first 2 years, then annually).
*   **Accelerated:** -20°C ± 5°C (Evaluated at 1, 3, and 6 months).

#### 3.2.S.5.2.5.2 Cumulative Stability Data (Batch GLUC-2025-PRS01)

| Timepoint (Months) | Storage Temp | SE-HPLC (% Monomer) | iCE3 (% Main Peak) | Bioassay (% Potency) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T0 (Initial) | N/A | 99.72 | 71.2 | 102.4 | Initial |
| T3 | -80°C | 99.71 | 71.3 | 101.9 | Stable |
| T6 | -80°C | 99.69 | 71.0 | 103.1 | Stable |
| T3 (Accel) | -20°C | 99.45 | 70.1 | 98.7 | Stable |
| T6 (Accel) | -20°C | 98.82 | 68.5 | 96.2 | Minor Degrad. |

---

### 3.2.S.5.2.6 Impurity Profile Qualification
The reference standard was spiked with known process-related impurities (Host Cell Proteins, Protein A leachates) and product-related impurities (Deamidated Glucogen, Oxidized Glucogen) to validate the limit of detection (LOD) and limit of quantitation (LOQ).

**Calculations for Relative Response Factor (RRF):**
The RRF for the major deamidated form (Asn-28) was calculated as follows:
$$RRF = \frac{Slope_{Impurity}}{Slope_{API}} = \frac{142.5}{145.2} = 0.98$$
*Conclusion: A correction factor is not required for the quantification of deamidated species.*

---

### 3.2.S.5.2.7 Reference Standard Re-qualification Schedule
To ensure the integrity of the reference materials over the lifecycle of the Glucogen-XR program, Google Health Sciences implements a rolling re-qualification strategy:
1.  **Annual Verification:** A full testing suite (Table 3.2.S.5.2.2.2) is performed against the primary standard.
2.  **Extension of Shelf Life:** If data remains within ± 2% of the T0 value for all critical quality attributes (CQAs), the expiration date is extended by 12 months.
3.  **Two-Tiered System:** The WRS will be replaced every 24 months or when the inventory drops below 50 vials.

### 3.2.S.5.2.8 Conclusion
The qualification data presented for **GLUC-2025-PRS01** and **GLUC-2025-WRS01** demonstrate that these materials are of high purity, correctly identified, and maintain potent biological activity. They are suitable for use as reference materials for all Phase III clinical trials and subsequent commercialization of Glucogen-XR.

---
**END OF SECTION**

---

# Specification Setting Rationale

## Historical Data Analysis

### 3.2.S.4.5 Justification of Specification: Historical Data Analysis

#### 3.2.S.4.5.1 Executive Summary of Historical Data
This section provides a comprehensive statistical and analytical justification for the established specifications of Glucogen-XR (glucapeptide extended-release), a synthetic GLP-1 receptor agonist produced by Google Health Sciences. The following analysis encompasses data derived from thirty-five (35) independent drug substance (DS) batches produced between 2022 and 2025. These batches include Clinical Trial Material (CTM) for Phase I, II, and III studies, as well as Process Performance Qualification (PPQ) batches.

The rationale for the specification limits presented in **Section 3.2.S.4.1** is based on the distribution of this historical data, the capability of the manufacturing process (Process Capability Index, CpK), and the clinical relevance of the attributes as defined in the Critical Quality Attribute (CQA) assessment.

#### 3.2.S.4.5.2 Data Source and Batch Pedigree
The data set comprises batches manufactured at the Google Health Sciences South San Francisco facility (Site ID: GHS-SSF-3000). The manufacturing process utilizes a proprietary GHS-CHO-001 cell line with a fed-batch bioreactor process followed by a multi-step purification sequence involving Protein A capture, Ion Exchange (IEX), and Hydrophobic Interaction Chromatography (HIC).

**Table 3.2.S.4.5-1: Batch Inventory for Specification Setting Rationale**

| Batch Number | Scale (L) | Manufacturing Date | Purpose | Release Status |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2022-001 | 50 | 14-JAN-2022 | Tox/Pre-clinical | Accepted |
| GLUC-2022-005 | 200 | 22-MAR-2022 | Phase I CTM | Accepted |
| GLUC-2022-012 | 200 | 11-JUL-2022 | Phase I CTM | Accepted |
| GLUC-2023-045 | 500 | 05-FEB-2023 | Phase II CTM | Accepted |
| GLUC-2023-089 | 500 | 19-AUG-2023 | Phase II CTM | Accepted |
| GLUC-2024-112 | 2000 | 12-JAN-2024 | Phase III CTM | Accepted |
| GLUC-2024-115 | 2000 | 28-JAN-2024 | Phase III CTM | Accepted |
| GLUC-2024-201 | 2000 | 15-JUN-2024 | PPQ Run 1 | Accepted |
| GLUC-2024-202 | 2000 | 22-JUN-2024 | PPQ Run 2 | Accepted |
| GLUC-2024-203 | 2000 | 29-JUN-2024 | PPQ Run 3 | Accepted |
| GLUC-2025-001 | 2000 | 04-JAN-2025 | Commercial Launch | Accepted |
| *[Truncated for brevity; 35 batches total analyzed]* | ... | ... | ... | ... |

---

#### 3.2.S.4.5.3 Statistical Methodology
The statistical analysis was performed in accordance with **ICH Q6B** and **ICH Q11**. The following parameters were calculated for each critical quality attribute:

1.  **Mean ($\mu$):** The arithmetic average of the batch results.
2.  **Standard Deviation ($\sigma$):** The measure of dispersion within the data set.
3.  **Tolerance Intervals (TI):** Calculated at 99% coverage with 95% confidence ($k$-factor based on $n$ samples).
4.  **Process Capability Index (CpK):** Calculated as:
    $$CpK = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$
    *Where USL = Upper Specification Limit and LSL = Lower Specification Limit.*

---

#### 3.2.S.4.5.4 Analysis of Purity and Impurities
The purity of Glucogen-XR is determined via Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC) and Size Exclusion Chromatography (SEC).

##### 3.2.S.4.5.4.1 SEC-HPLC (Monomer Content)
Historical data for monomer content across 35 batches shows exceptional consistency.

**Table 3.2.S.4.5-2: SEC-HPLC Purity Historical Data Summary**

| Metric | Historical Result (%) | Proposed Specification |
| :--- | :--- | :--- |
| Minimum | 98.9 | $\ge$ 98.0% |
| Maximum | 99.8 | N/A |
| Mean ($\mu$) | 99.42 | N/A |
| Std Dev ($\sigma$) | 0.21 | N/A |
| 3$\sigma$ Limit | 98.79 - 100.05 | N/A |
| Calculated CpK | 2.25 | (Target > 1.33) |

**Protocol for SEC-HPLC Analysis (Method MET-GLUC-001):**
1.  **Column:** TSKgel G3000SWxl (7.8 mm ID x 30 cm, 5 µm).
2.  **Mobile Phase:** 0.1 M Phosphate Buffer, 0.2 M NaCl, pH 6.8.
3.  **Flow Rate:** 0.5 mL/min.
4.  **Injection Volume:** 20 µL (target concentration 1.0 mg/mL).
5.  **Detection:** UV at 214 nm and 280 nm.
6.  **Integration:** Manual baseline correction for aggregate peaks eluting before the main peak.

---

#### 3.2.S.4.5.5 Detailed Batch Result Matrices (2024-2025)
The following table provides raw data for the most recent 12 batches, including the PPQ campaign.

**Table 3.2.S.4.5-3: Analytical Results for Recent Commercial-Scale Batches**

| Batch ID | Purity (RP-HPLC) % | Related Substances % | Aggregates (SEC) % | HCP (ppm) | DNA (pg/mg) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2024-201 | 99.1 | 0.8 | 0.1 | < 5 | < 1 |
| GLUC-2024-202 | 99.3 | 0.6 | 0.1 | < 5 | < 1 |
| GLUC-2024-203 | 98.9 | 1.0 | 0.1 | 6.2 | 1.2 |
| GLUC-2025-001 | 99.5 | 0.4 | 0.1 | < 5 | < 1 |
| GLUC-2025-002 | 99.2 | 0.7 | 0.2 | < 5 | < 1 |
| GLUC-2025-003 | 99.4 | 0.5 | 0.1 | 5.8 | < 1 |
| GLUC-2025-004 | 99.0 | 0.9 | 0.1 | 7.1 | 1.5 |
| GLUC-2025-005 | 99.1 | 0.8 | 0.2 | < 5 | < 1 |
| GLUC-2025-006 | 99.6 | 0.3 | 0.1 | < 5 | < 1 |
| GLUC-2025-007 | 99.3 | 0.6 | 0.1 | < 5 | < 1 |
| GLUC-2025-008 | 98.8 | 1.1 | 0.1 | 8.4 | 1.8 |
| GLUC-2025-009 | 99.2 | 0.7 | 0.1 | < 5 | < 1 |

---

#### 3.2.S.4.5.6 Process Impurities: Host Cell Proteins (HCP)
The removal of Host Cell Proteins (HCP) is a critical step in the downstream process. The Google Health Sciences proprietary ELISA (Method MET-GHS-HCP-01) is used for quantification.

**Historical Trend Analysis (HCP):**
An analysis of the 35-batch history indicates that the HIC (Hydrophobic Interaction Chromatography) step is the most robust step for HCP clearance. The mean HCP level in the Final Drug Substance (FDS) is 5.4 ppm, with a standard deviation of 1.2 ppm.

**Statistical Calculation for HCP Limit:**
*   Mean: 5.4 ppm
*   Max Observed: 8.4 ppm
*   Limit Setting: Based on the safety profile established in clinical trials (where batches up to 15 ppm were used without adverse immunogenic events), the specification is set at **$\le$ 20 ppm**. 
*   **Safety Margin:** The proposed limit provides a 2.4x safety margin over the highest observed historical value, ensuring that any drift in the process is captured while maintaining product safety.

---

#### 3.2.S.4.5.7 Biological Activity (Potency)
The biological activity of Glucogen-XR is assessed using a cell-based cAMP induction assay (Method MET-GLUC-POT). This assay measures the activation of the GLP-1 receptor in a recombinant HEK293 cell line.

**Table 3.2.S.4.5-4: Potency Historical Data (Relative to Reference Standard)**

| Batch Number | Potency (% of RS) | Batch Number | Potency (% of RS) |
| :--- | :--- | :--- | :--- |
| GLUC-2024-112 | 102 | GLUC-2024-203 | 97 |
| GLUC-2024-115 | 98 | GLUC-2025-001 | 101 |
| GLUC-2024-201 | 105 | GLUC-2025-002 | 104 |
| GLUC-2024-202 | 99 | GLUC-2025-003 | 100 |

**Potency Specification Rationale:**
The historical mean is 101.2% with a %RSD of 4.3%. Following **USP <111>** recommendations for biological assays, the specification is set at **80% to 125%**. This wide range accounts for the inherent variability of cell-based bioassays while ensuring clinical efficacy.

---

#### 3.2.S.4.5.8 Protocol for Outlier Identification (Grubbs' Test)
During the historical data analysis, Google Health Sciences employed the Grubbs' Test to identify potential outliers that could skew the specification limits.

**Procedure:**
1.  Calculate the $G$ statistic: $G = \frac{|X_i - \mu|}{\sigma}$
2.  Compare $G$ to the critical value $G_{crit}$ for $n=35$ ($\alpha = 0.05$).
3.  If $G > G_{crit}$, the data point is investigated for laboratory error.
4.  *Note:* No batches in the GLUC-2025-XXX series were excluded as outliers, indicating high process stability.

---

#### 3.2.S.4.5.9 Conclusion
The historical data analysis for Glucogen-XR demonstrates a manufacturing process in a state of statistical control. The proposed specifications are justified by:
1.  Consistency across clinical and PPQ batches (GLUC-2022 through GLUC-2025).
2.  High process capability (CpK > 1.5 for primary purity markers).
3.  Alignment with the safety and efficacy profile observed in Type 2 Diabetes patients during Phase III clinical trials.

**References:**
*   ICH Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   ICH Q11: Development and Manufacture of Drug Substances.
*   USP <121> Insulin Assays / USP <1033> Biological Assay Validation.

---

## Regulatory Guideline Considerations

### **3.2.S.4.5 Justification of Specification: Regulatory Guideline Considerations**

#### **1.0 Introduction and Scope of Regulatory Compliance**

The establishment of the specification for **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences (GHS)**, is predicated upon a risk-based approach integrated with rigorous adherence to International Council for Harmonisation (ICH) guidelines and United States Food and Drug Administration (FDA) regulatory frameworks. This section provides a comprehensive technical rationale for the selection of analytical procedures and the derivation of acceptance criteria for the Drug Substance (DS), ensuring that the quality profile remains consistent with the material utilized in pivotal Phase III clinical trials and subsequent commercial scale-up.

The overarching strategy for specification setting is governed by **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*) and **ICH Q3D(R2)** (*Guideline for Elemental Impurities*). Given the nature of the Glucogen-XR molecule—a recombinant peptide produced in the proprietary **GHS-CHO-001** (CHO-K1 GS knockout) cell line—specialized considerations for post-translational modifications, host cell protein (HCP) profiles, and extended-release kinetics are integrated into the control strategy.

#### **2.0 Hierarchical Regulatory Framework**

The selection of specifications is mapped against the following primary regulatory pillars:

| Regulatory Reference | Title / Description | Application to Glucogen-XR |
| :--- | :--- | :--- |
| **ICH Q1A (R2)** | Stability Testing of New Drug Substances and Products | Establishment of shelf-life and retest periods based on forced degradation and real-time data. |
| **ICH Q2 (R1)** | Validation of Analytical Procedures: Text and Methodology | Ensures all methods (RP-HPLC, SEC, Bioassay) meet accuracy, precision, and robustness requirements. |
| **ICH Q3A (R2)** | Impurities in New Drug Substances | Defines thresholds for reporting, identification, and qualification of organic impurities. |
| **ICH Q5A (R1)** | Viral Safety Evaluation of Biotechnology Products Derived from Cell Lines of Human or Animal Origin | Rationalizes the testing for endogenous and adventitious viral agents in the DS. |
| **ICH Q5E** | Comparability of Biotechnological/Biological Products | Justifies specifications during the transition from Phase II (Clinical) to Phase III (Commercial) manufacturing. |
| **USP <1043>** | Ancillary Materials for Cell, Gene, and Tissue-Engineered Products | Qualification of raw materials used in the upstream perfusion process. |
| **21 CFR 211.160** | General Requirements for Laboratory Controls | Ensuring data integrity and scientifically sound sampling plans. |

---

#### **3.0 Detailed Rationale for Quality Attributes (CQA) Selection**

##### **3.1 Identity Testing (ICH Q6B Section 4.1.1)**
To confirm the identity of Glucogen-XR, Google Health Sciences employs a two-tier orthogonal approach. 
1.  **N-terminal Sequencing/Peptide Mapping (LC-MS/MS):** Confirms the primary amino acid sequence (1-31) of the glucapeptide.
2.  **Isoelectric Focusing (cIEF):** Confirms the charge distribution, sensitive to deamidation and C-terminal processing.

**Table 3.1-1: Identity Specification Rationale**
| Test Parameter | Methodology | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- |
| **Identity (Peptide Map)** | Trypsin Digestion / RP-HPLC-MS | Matches Reference Standard (GLUC-STD-2024) | Verification of primary structure and glycosylation sites. |
| **Identity (cIEF)** | Capillary Isoelectric Focusing | pI range 4.8 - 5.4 | Confirms correct folding and charge state; detects acidic variants. |

##### **3.2 Purity and Impurities (ICH Q3A/Q6B)**
Glucogen-XR is an extended-release peptide, necessitating strict control over monomeric purity to prevent immunogenicity associated with aggregates.

###### **3.2.1 Size Variants (Aggregates and Fragments)**
Aggregates are monitored via **Size Exclusion Chromatography (SEC-HPLC)**. Based on the lot history of batches **GLUC-2025-001** through **GLUC-2025-015**, the specification for high molecular weight (HMW) species is set at $\leq 0.5\%$.

**Protocol for SEC-HPLC Analysis (Method MET-DS-004):**
1.  **Column:** TSKgel G2000SWxl, 7.8 mm ID x 30 cm.
2.  **Mobile Phase:** 0.1M Sodium Phosphate, 0.2M NaCl, pH 6.8.
3.  **Flow Rate:** 0.5 mL/min.
4.  **Detection:** UV at 214 nm.
5.  **Calculation:** 
    $$ \% \text{HMW} = \left( \frac{\text{Area}_{\text{HMW}}}{\text{Area}_{\text{Total}}} \right) \times 100 $$

###### **3.2.2 Product-Related Impurities (Charge Variants)**
Charge variants (acidic and basic) are monitored via **Cation Exchange Chromatography (CEX-HPLC)**. 
*   **Acidic Variants:** Predominantly deamidated species. Limit: $\leq 5.0\%$.
*   **Basic Variants:** Predominantly C-terminal amidation or oxidation. Limit: $\leq 3.0\%$.

---

#### **4.0 Statistical Derivation of Acceptance Criteria**

Google Health Sciences utilizes a Tolerance Interval (TI) approach to set specifications. For Glucogen-XR, the calculation is based on $n=15$ GMP-grade batches.

**Formula for 95/99 Tolerance Interval:**
$$ \text{Limit} = \bar{x} \pm (k \times s) $$
Where:
*   $\bar{x}$ = Mean of the historical batches.
*   $s$ = Standard deviation.
*   $k$ = Coverage factor (for $n=15$, 95% confidence and 99% coverage, $k \approx 3.52$).

**Table 4.0-1: Batch Data Summary (GLUC-2025-001 to 015)**
| Batch ID | Purity (RP-HPLC %) | HMW (%) | Potency (IU/mg) | HCP (ppm) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.1 | 0.12 | 102 | 12 |
| GLUC-2025-002 | 98.8 | 0.15 | 98 | 15 |
| GLUC-2025-003 | 99.2 | 0.11 | 101 | 9 |
| GLUC-2025-004 | 99.0 | 0.18 | 105 | 22 |
| GLUC-2025-005 | 98.7 | 0.22 | 97 | 18 |
| **Mean ($\bar{x}$)** | **98.96** | **0.156** | **100.6** | **15.2** |
| **Std Dev ($s$)** | **0.21** | **0.045** | **3.1** | **5.1** |
| **Proposed Spec** | $\geq 97.0\%$ | $\leq 0.5\%$ | 90 - 110 | $\leq 50$ |

---

#### **5.0 Process-Related Impurities (ICH Q6B Section 4.1.2)**

The control of process-related impurities is critical for the GHS-CHO-001 cell line.

##### **5.1 Host Cell Protein (HCP) Management**
A proprietary 3rd-generation ELISA kit (GHS-ELISA-V3) is used. The qualification of this kit followed **USP <1132>** guidelines. 
*   **Limit:** $\leq 50 \text{ ppm}$.
*   **Rationale:** Clinical data from Study GHS-GLUC-301 showed no anti-drug antibodies (ADA) correlating with HCP levels up to 75 ppm; however, a safety factor was applied to maintain the limit at 50 ppm.

##### **5.2 Residual DNA**
Measured via qPCR using primers specific to the CHO-K1 GS lineage. 
*   **Limit:** $\leq 10 \text{ ng/dose}$ (per FDA guidance for biologics).
*   **Calculation:** 
    $$ \text{DNA (ng/mg)} \times \text{Max Dose (mg)} \leq 10 \text{ ng} $$

---

#### **6.0 Biological Activity (Potency) - USP <121> and ICH Q6B**

The potency of Glucogen-XR is evaluated using a cell-based **GLP-1 Receptor Activation Assay**. This assay measures the intracellular accumulation of cyclic Adenosine Monophosphate (cAMP) in a HEK293 cell line transfected with the human GLP-1 receptor.

**Step-by-Step Bioassay Protocol (SOP-GHS-BIO-09):**
1.  **Seeding:** Seed HEK293-hGLP1R cells at $5 \times 10^4$ cells/well in a 96-well plate.
2.  **Incubation:** Incubate for 24 hours at 37°C, 5% CO2.
3.  **Treatment:** Serial dilutions of Glucogen-XR (Reference and Test) ranging from 0.01 nM to 100 nM.
4.  **Lysis:** Lyse cells and add cAMP-detection reagents (HTRF - Homogeneous Time-Resolved Fluorescence).
5.  **Analysis:** Measure fluorescence ratios (665nm/620nm).
6.  **Data Fitting:** Use a 4-parameter logistic (4PL) model to determine $EC_{50}$.
7.  **Relative Potency Calculation:**
    $$ \text{Rel. Potency} = \frac{EC_{50} (\text{Standard})}{EC_{50} (\text{Sample})} \times 100\% $$

---

#### **7.0 Elemental Impurities (ICH Q3D)**

Google Health Sciences conducted a risk assessment for 24 elemental impurities. Based on the use of stainless steel 316L bioreactors and the purification reagents, only Lead (Pb), Arsenic (As), Cadmium (Cd), and Mercury (Hg) were identified as potential risks.

**Table 7.0-1: Elemental Impurity Risk Assessment**
| Element | Class | PDE ($\mu g$/day) | Observed (ppm) | Control Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Pb** | 1 | 5.0 | < 0.1 | Skip Lot Testing |
| **As** | 1 | 15.0 | < 0.05 | Skip Lot Testing |
| **Ni** | 2A | 20.0 | 2.1 | Batch Release |

*Note: Nickel (Ni) is monitored due to the use of Immobilized Metal Affinity Chromatography (IMAC) in the initial capture step.*

---

#### **8.0 Conclusion**

The specifications established for Glucogen-XR (glucapeptide extended-release) are scientifically justified, based on extensive manufacturing history (**GLUC-2025-XXX** series), and aligned with international regulatory expectations. Each attribute selected represents a Critical Quality Attribute (CQA) that directly impacts the safety, identity, strength, purity, or potency of the drug substance.

---
**Footnotes & References:**
1.  FDA Guidance for Industry: *Q6B Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products (August 1999).*
2.  Google Health Sciences Technical Report GHS-TR-2024-088: *Statistical Analysis of DS Release Data.*
3.  M. Wright, et al., "Peptide Potency Assays in the Era of Automation," *Journal of Pharmaceutical Sciences*, 2023.

---

## Risk Assessment

### **3.2.S.4.5.1 Risk Assessment for Specification Setting Rationale**

#### **1.0 Introduction and Scope**
This Risk Assessment (RA) document provides a comprehensive, science-based justification for the selection of critical quality attributes (CQAs) and the establishment of numerical acceptance criteria for **Glucogen-XR (glucapeptide extended-release)**, an innovative GLP-1 receptor agonist produced by **Google Health Sciences (GHS)**. 

The assessment is conducted in accordance with **ICH Q9 (Quality Risk Management)**, **ICH Q6B (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products)**, and **ICH Q11 (Development and Manufacture of Drug Substances)**. The primary objective is to evaluate the impact of material attributes, process parameters, and product-related variants on the safety and efficacy profile of the drug substance.

#### **2.0 Risk Management Methodology**
Google Health Sciences employs a multi-tiered Failure Mode and Effects Analysis (FMEA) approach. The risk score for each quality attribute is calculated based on the **Risk Priority Number (RPN)**, which is the product of Severity (S), Occurrence (O), and Detectability (D).

**Formula:** $RPN = S \times O \times D$

##### **2.1 Scoring Criteria**
*   **Severity (S):** 1 (No impact) to 10 (Patient death/Total loss of efficacy).
*   **Occurrence (O):** 1 (Extremely rare) to 10 (Frequent/Expected in every batch).
*   **Detectability (D):** 1 (Certain detection by validated method) to 10 (Undetectable).

| Risk Class | RPN Range | Action Required |
| :--- | :--- | :--- |
| **Low** | 1–30 | No specific specification required; monitor via in-process controls (IPC). |
| **Medium** | 31–80 | Justification required for exclusion from specs or inclusion with wide limits. |
| **High** | > 80 | Mandatory inclusion in Section 3.2.S.4.1 with tight acceptance criteria. |

---

#### **3.0 Detailed Risk Assessment Matrix for Quality Attributes**

The following table summarizes the risk assessment for potential impurities, variants, and process-related substances for Glucogen-XR (Batch series GLUC-2025-XXX).

##### **Table 3.2.S.4.5.1-1: Quality Attribute Risk Assessment Matrix**

| Attribute ID | Quality Attribute | Severity (S) | Occurrence (O) | Detectability (D) | RPN | Rationale / Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **QA-001** | **Monomer Content (Purity)** | 10 | 2 | 1 | **20** | Critical for efficacy. High S, but low O due to proprietary GHS-CHO-001 cell line stability. |
| **QA-002** | **High Molecular Weight Species (HMWS/Aggregates)** | 9 | 4 | 2 | **72** | Potential for immunogenicity. Controlled via SE-HPLC and monitored during stability. |
| **QA-003** | **C-Terminal Amidation** | 8 | 3 | 2 | **48** | Critical for GLP-1 receptor binding. Requires strict control via RP-HPLC. |
| **QA-004** | **Host Cell Protein (HCP)** | 9 | 3 | 3 | **81** | **High Risk.** Potential immunogenic response. Quantified by ELISA (GHS-HCP-Kit-01). |
| **QA-005** | **Host Cell DNA (hcDNA)** | 7 | 2 | 2 | **28** | Controlled via Protein A chromatography and depth filtration. Limit set per WHO/FDA guidelines. |
| **QA-006** | **N-Terminal Glu Oxidation** | 6 | 4 | 2 | **48** | Impact on potency is moderate. Controlled through storage at -70°C. |
| **QA-007** | **Glucapeptide Deamidation** | 7 | 5 | 2 | **70** | Common degradation pathway. Monitored via CEX-HPLC. |
| **QA-008** | **Residual Protein A** | 8 | 2 | 2 | **32** | Potential leaching from Affinity Column. Monitored in initial validation batches. |
| **QA-009** | **Endotoxins (LAL)** | 10 | 2 | 1 | **20** | Safety critical. Controlled by aseptic processing and USP <85>. |

---

#### **4.0 Impact of Process-Related Impurities**

##### **4.1 Host Cell Proteins (HCP) - Detailed Analysis**
Given the use of the proprietary **GHS-CHO-001 (GS knockout)** cell line, the HCP profile is unique. Google Health Sciences performed a Proteomic Characterization via LC-MS/MS to identify persistent HCPs.

**Calculation of Safety Margin for HCP:**
The maximum clinical dose of Glucogen-XR is 2.4 mg per week. 
The proposed specification is $\leq 100 \text{ ng/mg}$ (ppm).
$$Total HCP Exposure = 2.4 \text{ mg} \times 100 \text{ ng/mg} = 240 \text{ ng/week}$$
This level is significantly below the 1000 ng/dose threshold generally considered safe for biological products.

##### **Table 3.2.S.4.5.1-2: HCP Clearance Data Across Manufacturing Stages (Batch GLUC-2025-001)**

| Process Step | HCP Concentration (ng/mg) | Log Reduction Value (LRV) |
| :--- | :--- | :--- |
| Harvested Cell Culture Fluid (HCCF) | 450,000 | N/A |
| Protein A Eluate | 12,400 | 1.56 |
| Viral Inactivation (Low pH) | 11,800 | 0.02 |
| Cation Exchange (CEX) | 850 | 1.14 |
| Anion Exchange (AEX) | 45 | 1.28 |
| Final Ultrafiltration/Diafiltration (UF/DF) | 12 | 0.57 |
| **Total Cumulative LRV** | | **4.57** |

---

#### **5.0 Product-Related Variants and Degradants**

##### **5.1 Aggregation (HMWS)**
Aggregates of Glucogen-XR are defined as any species with a molecular weight greater than the monomer (~45 kDa). These are primarily dimers and trimers linked by non-covalent interactions or disulfide shuffling.

**Risk Mitigation Protocol (P-HMWS-2025):**
1. **Detection:** SE-HPLC (Size Exclusion) using a Tosoh TSKgel G3000SWxl column.
2. **Acceptance Criteria:** Monomer $\geq 98.0\%$; HMWS $\leq 1.5\%$.
3. **Statistical Justification:** Based on 15 GMP batches (GLUC-2025-001 through GLUC-2025-015), the mean HMWS was 0.42% with a Standard Deviation (SD) of 0.15%. The limit of 1.5% represents Mean + 7.2 SD, ensuring high process capability ($Cpk > 2.0$).

##### **5.2 Deamidation and Charge Heterogeneity**
Glucogen-XR contains multiple asparagine (Asn) and glutamine (Gln) residues susceptible to deamidation. 

**Table 3.2.S.4.5.1-3: Charge Variant Distribution (CEX-HPLC)**

| Batch Number | Acidic Variants (%) | Main Peak (%) | Basic Variants (%) | Date of Analysis |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 4.2 | 92.1 | 3.7 | 12-JAN-2025 |
| GLUC-2025-002 | 4.5 | 91.8 | 3.7 | 19-JAN-2025 |
| GLUC-2025-003 | 3.9 | 93.0 | 3.1 | 05-FEB-2025 |
| **Proposed Specs** | **$\leq 10.0$** | **$\geq 85.0$** | **$\leq 5.0$** | |

---

#### **6.0 Formulation-Related Risk: Extended-Release Mechanism**
Glucogen-XR utilizes a proprietary PEGylated linker and zinc-complexation to achieve a 7-day pharmacokinetic profile.

**Risk Assessment of Zinc Concentration:**
Excessive Zinc ($Zn^{2+}$) may lead to premature precipitation in the subcutaneous space, causing Injection Site Reactions (ISRs). 
*   **Target:** 0.5 moles of Zn per mole of peptide.
*   **Control:** Atomic Absorption Spectroscopy (AAS) per USP <211>.
*   **Risk Score:** S: 6, O: 2, D: 1 (RPN: 12). Low risk, but included in specifications to ensure consistency of the extended-release profile.

---

#### **7.0 Regulatory Compliance and Guidelines**
The specification-setting rationale aligns with:
1.  **USP <1225>:** Validation of Compendial Procedures.
2.  **ICH Q3A (R2):** Impurities in New Drug Substances.
3.  **FDA Guidance for Industry:** "Development and Submission of Near Infrared (NIR) Analytical Procedures" (Used for moisture content in lyophilized intermediates).
4.  **21 CFR Part 211.160:** General requirements for laboratory controls.

#### **8.0 Conclusion of Risk Assessment**
Based on the RPN scores and the extensive manufacturing history of the GLUC-2025 series at the South San Francisco facility, the attributes identified as High Risk (HCPs, HMWS, Potency, and Sterility) are controlled via redundant systems: validated cleaning protocols, stringent IPCs, and robust release specifications. All medium and low-risk attributes are monitored to ensure the "Google Quality Standard" for life-saving therapeutics.

**Approvals:**
*   *Dr. Arvind Chen, Head of Quality Regulatory, Google Health Sciences*
*   *Date: 24-MAY-2025*
*   *Document ID: GHS-GLUC-RA-04.1*

---

# Control Strategy Summary

## Integrated Approach to Quality

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.4: CONTROL OF DRUG SUBSTANCE
### SUBSECTION 3.2.S.4.6: CONTROL STRATEGY SUMMARY
#### PART 3.2.S.4.6.1: INTEGRATED APPROACH TO QUALITY

---

### 1.0 INTRODUCTION AND SCOPE

The Integrated Approach to Quality for Glucogen-XR (glucapeptide extended-release), manufactured by **Google Health Sciences (GHS)**, represents a holistic, multi-layered framework designed to ensure the consistent production of a high-quality biologic therapeutic. This strategy follows the principles outlined in **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, **ICH Q10 Pharmaceutical Quality System**, and **ICH Q11 Development and Manufacture of Drug Substances**.

The control strategy for Glucogen-XR is not a stagnant set of specifications but a dynamic lifecycle management system that integrates Quality by Design (QbD) principles, sophisticated Process Analytical Technology (PAT), and rigorous statistical process control (SPC). This section details how Google Health Sciences ensures that every batch, starting from the master cell bank (GHS-CHO-001) through the final purified drug substance (DS), meets the predefined Quality Target Product Profile (QTPP).

---

### 2.0 QUALITY TARGET PRODUCT PROFILE (QTPP)

The QTPP for Glucogen-XR defines the prospective summary of the quality characteristics of the drug substance that ideally will be achieved to ensure the desired quality, taking into account safety and efficacy.

#### Table 2.1: Glucogen-XR Drug Substance QTPP
| Element | Target | Rationale |
| :--- | :--- | :--- |
| **Dosage Form** | Extended-Release Lyophilized Powder for Reconstitution | Sustained GLP-1 receptor agonism over 7 days. |
| **Route of Administration** | Subcutaneous Injection | Patient compliance and bioavailability. |
| **Strength** | 5.0 mg/mL (post-reconstitution) | Clinical efficacy based on Phase II dose-finding. |
| **Biological Activity** | 90% - 110% of Reference Standard | Ensures therapeutic glucose lowering and weight loss. |
| **Purity (SEC-HPLC)** | ≥ 98.5% Monomer | Minimizes immunogenic potential of aggregates. |
| **Impurity Profile** | Below ICH Q3A(R2) thresholds | Safety and toxicology profile maintenance. |
| **Stability** | 24 Months at 2-8°C | Commercial viability and supply chain integrity. |

---

### 3.0 IDENTIFICATION OF CRITICAL QUALITY ATTRIBUTES (CQAS)

CQAs are physical, chemical, biological, or microbiological properties or characteristics that should be within an appropriate limit, range, or distribution to ensure the desired product quality.

#### 3.1 CQA Risk Assessment Methodology
Google Health Sciences utilized a Failure Mode and Effects Analysis (FMEA) to rank potential CQAs based on Impact (Severity) and Uncertainty.

**Formula for Risk Priority Number (RPN):**
$$RPN = S (Severity) \times O (Occurrence) \times D (Detection)$$

#### Table 3.1: Glucogen-XR CQA Summary and Rationale
| CQA ID | Attribute | Severity (1-10) | Control Mechanism | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| CQA-001 | Potency (Cell-based Bioassay) | 10 | Release Testing | Direct link to clinical efficacy (cAMP activation). |
| CQA-002 | High Molecular Weight Species (HMWS) | 9 | SEC-HPLC / UF/DF | Potential for immunogenicity and reduced PK. |
| CQA-003 | Glycosylation Pattern (Sialylation) | 7 | N-Glycan Mapping | Affects half-life and clearance rates. |
| CQA-004 | Host Cell Protein (HCP) | 8 | ELISA / LC-MS | Potential for inflammatory response. |
| CQA-005 | Residual DNA | 6 | qPCR | Regulatory safety requirement (<10 ng/dose). |
| CQA-006 | Endotoxin | 10 | LAL Kinetic Chromogenic | Patient safety / Pyrogenicity. |

---

### 4.0 MANUFACTURING PROCESS CONTROL STRATEGY

The manufacturing of Glucogen-XR at our South San Francisco facility (3000 Innovation Drive) utilizes a state-of-the-art perfusion bioreactor system linked to a continuous-ready downstream process.

#### 4.1 Upstream Process Controls (USP)
The proprietary GHS-CHO-001 cell line is cultured in chemically defined, animal-derived component-free (ADCF) media.

**Table 4.1: Critical Process Parameters (CPPs) for Fermentation (Unit Op 04)**
| Parameter | Range | Control Strategy | Impact on CQA |
| :--- | :--- | :--- | :--- |
| **Temperature** | 36.5°C ± 0.5°C | Automated PLC Control | Growth rate and Glycosylation |
| **Dissolved Oxygen (DO)** | 40% ± 5% | Sparging (O2/Air/N2) | Metabolic byproduct formation |
| **pH** | 7.00 ± 0.10 | CO2 addition / Base titration | Protein folding and stability |
| **Viable Cell Density (VCD)** | 120-150 x 10^6 cells/mL | Acoustic Wave Separation | Titer and HCP load |

#### 4.2 Downstream Process Controls (DSP)
The purification strategy employs a three-stage chromatographic approach designed to clear product-related and process-related impurities.

**Step-by-Step Protocol: Protein A Capture (Unit Op 07)**
1. **Equilibration:** 5 Column Volumes (CV) of Buffer A (20 mM Sodium Phosphate, 150 mM NaCl, pH 7.4).
2. **Loading:** Filtered harvest loaded at 300 cm/hr; Residence time ≥ 4 minutes.
3. **Wash 1:** 3 CV of Buffer A to remove unbound proteins.
4. **Wash 2:** 4 CV of Buffer B (20 mM Sodium Phosphate, 1M NaCl, pH 7.4) to remove HCPs.
5. **Elution:** Linear gradient (0-100%) of Buffer C (50 mM Citrate, pH 3.0).
6. **Collection:** Based on $A_{280}$ absorbance (Threshold: 50 mAU to 50 mAU).

---

### 5.0 ANALYTICAL CONTROL STRATEGY AND BATCH DATA

The analytical control strategy involves in-process testing (IPT), release testing, and stability monitoring. All methods are validated per **ICH Q2(R1)**.

#### 5.1 Batch Analysis Data (Representative Batches)
The following data represents the consistency achieved during the pivotal clinical manufacturing campaign.

**Table 5.1: Batch Analysis Results for Glucogen-XR Drug Substance**
| Test Parameter | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear, Colorless | Conforms | Conforms | Conforms |
| **Identity (RT)** | Matches Standard | Conforms | Conforms | Conforms |
| **Purity (SEC)** | ≥ 98.5% | 99.4% | 99.2% | 99.6% |
| **HCP (ppm)** | ≤ 100 ppm | 12 ppm | 18 ppm | 9 ppm |
| **Potency (%)** | 90 - 110% | 102% | 98% | 104% |
| **Endotoxin** | ≤ 0.5 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg | < 0.05 EU/mg |
| **Bioburden** | ≤ 1 CFU/10 mL | 0 CFU/10 mL | 0 CFU/10 mL | 0 CFU/10 mL |

---

### 6.0 RAW MATERIAL AND ADVENTITIOUS AGENT CONTROL

#### 6.1 Raw Material Quality Agreements
Google Health Sciences maintains a "Tier 1" supplier program. All critical raw materials (e.g., Protein A Resin, Cell Culture Media) undergo identity testing upon receipt at the 3000 Innovation Drive warehouse.

#### 6.2 Viral Safety Strategy
In accordance with **ICH Q5A(R1)**, the Glucogen-XR process includes dedicated viral clearance steps:
1.  **Solvent/Detergent (S/D) Treatment:** (1% Triton X-100) for enveloped virus inactivation.
2.  **Nanofiltration (Planova 20N):** Size-based exclusion of both enveloped and non-enveloped viruses.

**Calculated Log Reduction Factors (LRF):**
$$LRF_{Total} = \sum LRF_{S/D} + LRF_{Nano} + LRF_{Chromatography}$$
*   **X-MLV (Enveloped):** > 15.4 logs
*   **MVM (Non-enveloped):** > 12.2 logs

---

### 7.0 PROCESS ANALYTICAL TECHNOLOGY (PAT) IMPLEMENTATION

GHS leverages Google Cloud’s computational infrastructure to perform real-time multivariate analysis (MVA) of bioreactor data.

*   **Raman Spectroscopy:** Used for real-time monitoring of glucose, lactate, and glutamine concentrations.
*   **Soft Sensors:** Neural network models predict protein titer based on oxygen uptake rate (OUR) and carbon evolution rate (CER).
*   **Feedback Loops:** Automated glucose feeding prevents metabolic shifts that lead to undesirable glycan isoforms (e.g., high mannose).

---

### 8.0 CONTINUED PROCESS VERIFICATION (CPV)

Post-approval, Glucogen-XR quality is maintained through a Stage 3 CPV program.

1.  **Trend Monitoring:** Every batch (GLUC-2025-XXX) is plotted on Shewhart Control Charts.
2.  **Capability Analysis:** $C_{pk}$ and $P_{pk}$ values are calculated annually.
    *   *Target:* $C_{pk} > 1.33$ for all CQAs.
3.  **Annual Product Review (APR):** Synthesis of deviations, OOS (Out of Specification) results, and change controls to identify opportunities for "Quality Improvement."

---

### 9.0 REGULATORY REFERENCES AND GUIDELINES

1.  **FDA Guidance for Industry:** *Process Validation: General Principles and Practices (2011).*
2.  **USP <1225>:** *Validation of Compendial Procedures.*
3.  **ICH Q11:** *Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).*
4.  **21 CFR Part 210/211:** *Current Good Manufacturing Practice for Finished Pharmaceuticals.*

---

**End of Subsection 3.2.S.4.6.1**
*Document ID: GHS-GLUC-XR-M3-DS-CS-001*
*Approved by: Director of Quality Assurance, Google Health Sciences*
*Date: 24-Oct-2025*

---

## Risk-Based Testing

### **MODULE 3: QUALITY**
**3.2.S. DRUG SUBSTANCE (GLUCAPEPTIDE)**
**3.2.S.4. CONTROL OF DRUG SUBSTANCE**
**3.2.S.4.1. CONTROL STRATEGY SUMMARY**
**SUBSECTION: RISK-BASED TESTING AND ANALYTICAL CONTROL STRATEGY**

---

#### **1.0. Introduction and Philosophical Framework**
The Control Strategy for **Glucogen-XR (glucapeptide extended-release)**, manufactured by Google Health Sciences (GHS), is predicated on a comprehensive **Quality by Design (QbD)** framework in alignment with **ICH Q8(R2), Q9, Q10, and Q11**. 

The "Risk-Based Testing" (RBT) paradigm shifts away from traditional "fixed-interval" testing toward a dynamic, data-driven approach. This strategy utilizes the **GHS-ML-Alpha** (a proprietary Google Cloud Life Sciences machine learning engine) to integrate real-time process parameters (CPPs) from the bioreactor with historical Critical Quality Attribute (CQA) data from batches **GLUC-2025-001 through GLUC-2025-150**.

#### **2.0. Risk Assessment Methodology (FMEA)**
GHS utilized a Failure Mode and Effects Analysis (FMEA) to determine the testing frequency and stringency for the Glucogen-XR drug substance.

##### **Table 2.1: Risk Priority Number (RPN) Calculation Matrix for Analytical Attributes**
| Attribute ID | Quality Attribute (CQA) | Severity (S) | Probability (P) | Detectability (D) | RPN (S×P×D) | Testing Strategy |
|:---|:---|:---|:---|:---|:---|:---|
| CQA-01 | Primary Sequence Identity | 10 | 1 | 1 | 10 | Release (Skip-lot N/A) |
| CQA-02 | Glycan Profile (N-linked) | 7 | 4 | 3 | 84 | High-Frequency Monitoring |
| CQA-03 | Aggregation (SEC-HPLC) | 9 | 3 | 2 | 54 | Real-time Release Testing (RtRT) |
| CQA-04 | Host Cell Protein (HCP) | 8 | 2 | 4 | 64 | Periodic (Skip-lot Level 1) |
| CQA-05 | Residual DNA (qPCR) | 6 | 2 | 5 | 60 | Periodic (Skip-lot Level 2) |
| CQA-06 | Bioburden/Endotoxin | 10 | 2 | 2 | 40 | Every Batch |

*Note: RPN > 50 requires mandatory testing for the first 30 commercial batches (Validation Phase).*

---

#### **3.0. Risk-Based Testing Protocol for Impurities**
The elimination of routine testing for certain Process-Related Impurities (PRIs) is justified by "Process Capability Indices" ($Cpk$).

##### **3.1. Calculations for Reduced Testing Eligibility**
To transition from "Every Batch" to "Periodic" testing, a process must demonstrate a $Cpk > 1.67$ over 10 consecutive batches.
The formula utilized is:
$$Cpk = \min\left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
Where:
- $USL$ = Upper Specification Limit
- $\mu$ = Mean concentration of impurity
- $\sigma$ = Standard deviation

##### **Table 3.1: Historical Impurity Data (Batches GLUC-2025-010 to GLUC-2025-020)**
| Batch ID | HCP (ppm) [Limit <100] | Res. DNA (pg/mg) [Limit <10] | Leachables (ppb) [Limit <50] | Result Status |
|:---|:---|:---|:---|:---|
| GLUC-2025-010 | 12.4 | 0.8 | 2.1 | Pass |
| GLUC-2025-011 | 11.9 | 0.7 | 1.9 | Pass |
| GLUC-2025-012 | 13.1 | 1.1 | 2.5 | Pass |
| GLUC-2025-013 | 10.8 | 0.9 | 2.0 | Pass |
| GLUC-2025-014 | 14.2 | 0.6 | 2.2 | Pass |
| **Statistical Mean** | **12.48** | **0.82** | **2.14** | **N/A** |
| **Std Dev ($\sigma$)** | **1.27** | **0.19** | **0.23** | **N/A** |
| **Calculated Cpk** | **22.9** | **16.1** | **69.3** | **Eligible for RBT** |

---

#### **4.0. Analytical Procedures for Risk-Based Control**

##### **Protocol 4.1: Automated Multi-Attribute Method (MAM) by LC-MS/MS**
In lieu of multiple independent assays, GHS employs a validated MAM protocol for Glucogen-XR to monitor deamidation, oxidation, and glycation simultaneously.

1.  **Sample Preparation (Robotic Liquid Handler ID: GHS-AUT-09)**:
    *   Aliquot 100 $\mu$g of Drug Substance (GLUC-2025-XXX).
    *   Denature using 6M Guanidine HCl at $37^\circ\text{C}$ for 30 mins.
    *   Reduce using 10mM DTT; Alkylate with 50mM Iodoacetamide.
    *   Digestion: Trypsin/Lys-C enzyme blend at 1:20 ratio for 4 hours.
2.  **Chromatographic Separation (UPLC)**:
    *   Column: C18 Peptide BEH, 130Å, 1.7 $\mu$m.
    *   Mobile Phase A: 0.1% Formic Acid in $H_2O$.
    *   Mobile Phase B: 0.1% Formic Acid in Acetonitrile.
3.  **Mass Spectrometry (Orbitrap Exploris)**:
    *   Resolution: 60,000 at m/z 200.
    *   Dynamic Exclusion: Enabled (30s).
4.  **Data Analysis**:
    *   Automated peak identification via **Google Cloud Life Sciences Protein Search Engine**.
    *   Risk Trigger: If Oxidation at Met-14 exceeds 2.5%, the system triggers an "investigational hold" for the batch.

---

#### **5.0. Skip-Lot Testing Strategy (SLTS)**
Consistent with **ICH Q6B**, Google Health Sciences implements a tiered skip-lot testing strategy for non-critical attributes.

##### **Table 5.1: Tiered Testing Frequency**
| Tier Level | Criteria | Frequency | Reversion Trigger |
|:---|:---|:---|:---|
| **Level 0** | New Process / Post-Change | 100% of batches | Any OOS |
| **Level 1** | 20 consecutive passes ($Cpk > 1.67$) | 1 in 5 batches | 1 OOT (Trend) |
| **Level 2** | 50 consecutive passes ($Cpk > 2.0$) | 1 in 10 batches | 1 OOS |
| **Level 3** | Annual Product Review (APR) Validation | 1 batch per year | Any deviation |

##### **Table 5.2: Application of SLTS to Glucogen-XR Batches (Proposed 2025 Schedule)**
| Month | Batch ID | HCP Testing | rDNA Testing | Viral Safety |
|:---|:---|:---|:---|:---|
| Jan | GLUC-2025-101 | Full | Full | Full |
| Jan | GLUC-2025-102 | Skip | Skip | Skip |
| Feb | GLUC-2025-103 | Skip | Skip | Skip |
| Feb | GLUC-2025-104 | Skip | Skip | Skip |
| Mar | GLUC-2025-105 | Full | Full | Skip |

---

#### **6.0. Real-Time Release Testing (RtRT) for Physical Attributes**
For Glucogen-XR, RtRT is applied to **Concentration ($A_{280}$)** and **pH**.

**Procedure for RtRT Concentration Control:**
1.  **Sensor Deployment**: In-line variable pathlength UV-Vis (FlowVPE) positioned post-Ultrafiltration/Diafiltration (UF/DF).
2.  **Measurement**: Real-time absorbance at 280nm.
3.  **Feedback Loop**: The GHS-Control-System automatically adjusts the diafiltration buffer volume to reach the target concentration of $50.0 \pm 2.0 \text{ mg/mL}$.
4.  **Regulatory Validation**: Comparison of in-line FlowVPE data vs. off-line QC spectrophotometry for batches **GLUC-2025-001 to GLUC-2025-020** showed a correlation coefficient ($R^2$) of 0.998.

---

#### **7.0. Lifecycle Management and Continuous Improvement**
As per **ICH Q12**, the risk-based testing levels are reviewed annually. The "Post-Approval Change Management Protocol" (PACMP) allows GHS to move attributes between Tier levels based on the cumulative "Quality Score" generated in the Google Cloud Life Sciences Data Lake.

**Statistical Process Control (SPC) Monitoring:**
GHS utilizes Shewhart Control Charts (Individuals and Moving Range) to monitor the stability of the RBT program. Any point exceeding $3\sigma$ from the mean (even if within specification) requires a "Risk Re-Evaluation" (RRE).

---

#### **8.0. References**
1.  **FDA Guidance for Industry**: *Q8, Q9, & Q10 Questions and Answers - Appendix on Q-by-D Examples.*
2.  **ICH Q6B**: *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
3.  **USP <1106>**: *Immunogenicity Assays — Design and Validation of Immunoassays to Detect Anti-Drug Antibodies.*
4.  **Google Health Sciences Internal SOP**: *GHS-SOP-QC-9902: Risk-Based Analytical Decisions.*

---
**[END OF SECTION 3.2.S.4.1 - RISK-BASED TESTING]**

---

## Trending and Continuous Improvement

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.2.6: CONTROL STRATEGY SUMMARY
### SUBSECTION: TRENDING AND CONTINUOUS IMPROVEMENT

---

#### 1.0 OVERVIEW AND OBJECTIVE
The **Glucogen-XR (glucapeptide extended-release)** Control Strategy, as defined in Section 3.2.S.2.6, is a living framework designed according to the principles of ICH Q8(R2), Q9, Q10, and Q11. The **Trending and Continuous Improvement (TCI)** program at Google Health Sciences (GHS) serves as the primary mechanism for ensuring that the manufacturing process remains in a state of statistical control and that opportunities for lifecycle management are identified through data-driven analysis.

The TCI program for Glucogen-XR is integrated into the Pharmaceutical Quality System (PQS) and utilizes the **Google Cloud Life Sciences (GCLS) Vertex AI for Life Sciences** platform to perform real-time multivariate analysis of critical process parameters (CPPs), critical quality attributes (CQAs), and in-process controls (IPCs).

#### 2.0 REGULATORY BASIS AND GUIDANCE COMPLIANCE
The trending protocols described herein adhere to the following regulatory expectations:
*   **ICH Q10:** Pharmaceutical Quality System (Section 3.1: Process Performance and Product Quality Monitoring System).
*   **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011) – Stage 3: Continued Process Verification (CPV).
*   **ICH Q12:** Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management.
*   **USP <1010>:** Analytical Data—Interpretation and Treatment.
*   **USP <1225>:** Validation of Compendial Procedures.

#### 3.0 CONTINUED PROCESS VERIFICATION (CPV) FRAMEWORK
Google Health Sciences implements a three-tiered trending architecture for Glucogen-XR drug substance manufacturing at the South San Francisco (SSF-3000) facility.

##### 3.1 Tier 1: Intra-Batch Monitoring (Real-Time)
Real-time monitoring of critical parameters during the fermentation of the CHO-K1 GS knockout derivative (GHS-CHO-001).
*   **Platform:** GHS-Edge-Compute v4.2.
*   **Parameters:** Dissolved Oxygen (DO), pH, Temperature, Agitation, Feed Rates (Glucose/Amino Acids).
*   **Statistical Logic:** ±3 Standard Deviations (Sigma) from the Golden Batch Profile.

##### 3.2 Tier 2: Inter-Batch Trending (Campaign Level)
Analysis of data across sequential batches (e.g., GLUC-2025-001 through GLUC-2025-015) to identify drift, shift, or cyclic patterns.
*   **Reporting Frequency:** Monthly or at the conclusion of a manufacturing campaign.
*   **Tools:** Control Charts (Shewhart Charts, CUSUM, EWMA).

##### 3.3 Tier 3: Annual Product Quality Review (APQR) / PQR
Comprehensive lifecycle analysis including stability data, deviation trends, and environmental monitoring (EM) correlations.

---

#### 4.0 STATISTICAL METHODOLOGY FOR TREND ANALYSIS
GHS utilizes the following statistical calculations to determine the stability and capability of the Glucogen-XR process.

##### 4.1 Process Capability Indices
For each CQA, the Process Capability Index ($C_{pk}$) and Process Performance Index ($P_{pk}$) are calculated:

$$C_{pk} = \min \left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$

Where:
*   **USL:** Upper Specification Limit
*   **LSL:** Lower Specification Limit
*   **$\mu$:** Process Mean
*   **$\sigma$:** Within-batch standard deviation (estimated via $\bar{R}/d_2$ or $\bar{s}/c_4$)

**Table 1: Capability Thresholds and Action Requirements**
| $C_{pk}$ Value | Process State | Action Required |
| :--- | :--- | :--- |
| $> 1.33$ | Highly Capable | Routine monitoring; maintain current controls. |
| $1.00 - 1.33$ | Marginally Capable | Increase frequency of Tier 2 trending; investigate variability. |
| $< 1.00$ | Not Capable | Mandatory Deviation Investigation; Root Cause Analysis (RCA); Process Optimization. |

##### 4.2 Western Electric Rules (Modified for Biologics)
A "Trend Alert" is triggered if any of the following occur in the control charts for CPPs/CQAs:
1.  **Rule 1:** A single point falls outside the $\pm 3\sigma$ (Action Limit).
2.  **Rule 2:** Two out of three consecutive points fall outside the $\pm 2\sigma$ (Warning Limit).
3.  **Rule 3:** Four out of five consecutive points fall outside the $\pm 1\sigma$.
4.  **Rule 4:** Eight consecutive points fall on one side of the mean (Shift).
5.  **Rule 5:** Six consecutive points increasing or decreasing (Drift).

---

#### 5.0 DATA REPOSITORY AND BATCH ANALYSIS (GLUC-2025 SERIES)
The following table provides the consolidated trending data for the initial Phase 3/Commercial Launch batches produced at the 3000 Innovation Drive facility.

**Table 2: Manufacturing Trend Data for Glucogen-XR (Batches GLUC-2025-001 to GLUC-2025-010)**

| Batch Number | Date of Mfg | Harvest VCD ($10^6$ cells/mL) | Purity by RP-HPLC (%) | High Mol. Wt. Species (%) | Potency (% Label Claim) | Glycan Map Match (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Spec Limit** | **N/A** | **> 12.0** | **$\ge$ 97.0** | **$\le$ 1.5** | **90 - 110** | **$\ge$ 95.0** |
| GLUC-2025-001 | 05-JAN-2025 | 18.4 | 98.2 | 0.42 | 102.1 | 99.1 |
| GLUC-2025-002 | 12-JAN-2025 | 17.9 | 98.1 | 0.45 | 101.5 | 98.8 |
| GLUC-2025-003 | 19-JAN-2025 | 19.2 | 97.8 | 0.51 | 99.8 | 99.4 |
| GLUC-2025-004 | 26-JAN-2025 | 18.8 | 98.5 | 0.38 | 103.4 | 99.2 |
| GLUC-2025-005 | 02-FEB-2025 | 16.5 | 97.2 | 0.78 | 98.2 | 97.5 |
| GLUC-2025-006 | 09-FEB-2025 | 18.1 | 98.3 | 0.41 | 101.9 | 98.9 |
| GLUC-2025-007 | 16-FEB-2025 | 17.7 | 98.0 | 0.44 | 100.5 | 99.0 |
| GLUC-2025-008 | 23-FEB-2025 | 18.3 | 98.1 | 0.40 | 102.3 | 99.3 |
| GLUC-2025-009 | 02-MAR-2025 | 18.9 | 98.4 | 0.39 | 104.1 | 99.5 |
| GLUC-2025-010 | 09-MAR-2025 | 18.2 | 98.2 | 0.42 | 102.0 | 99.1 |
| **Mean ($\mu$)** | -- | **18.1** | **98.08** | **0.46** | **101.58** | **98.98** |
| **Std Dev ($\sigma$)** | -- | **0.76** | **0.37** | **0.12** | **1.76** | **0.56** |

*Analysis Note:* Batch GLUC-2025-005 showed a slight dip in VCD and an increase in HMW species (0.78%). While well within specifications, the TCI system flagged this for a Tier 1 investigation. The root cause was identified as a ±2°C fluctuation in the seed train incubator (Incubator ID: GHS-INC-09). Corrective action was implemented via GHS-CAPA-2025-042.

---

#### 6.0 PROTOCOLS FOR CONTINUOUS IMPROVEMENT

##### 6.1 Protocol TCI-001: Analytical Method Lifecycle Management
To ensure analytical methods (e.g., the proprietary GHS-GLP1-ELISA for potency) remain robust, the following steps are performed annually:
1.  **Reference Standard Re-qualification:** Compare current working standard against the Primary Reference Material (GHS-PRM-GLUC).
2.  **Intermediate Precision Verification:** Re-evaluation of analyst-to-analyst and day-to-day variability.
3.  **Method Robustness Review:** Analysis of system suitability failure rates. If failure rates exceed 5%, a formal Method Improvement Plan (MIP) is initiated.

##### 6.2 Protocol TCI-002: Multivariate Data Analysis (MVDA) for Process Drift
GHS employs Principal Component Analysis (PCA) and Partial Least Squares (PLS) to monitor the "Process Space."
1.  **Data Extraction:** Automatically pull data from the DeltaV Distributed Control System (DCS) and LIMS.
2.  **Model Alignment:** Align batch data by "Maturity Index" (normalized time based on metabolic rates).
3.  **D-Square and Q-Residual Calculation:** Determine if the batch resides within the $95\%$ confidence ellipse of the historical design space.
4.  **Contribution Plots:** If a batch drifts, generate contribution plots to identify which variable (e.g., Feed Rate, Gas Sparging) drove the deviation.

##### 6.3 Protocol TCI-003: Raw Material Variability Trending
Given the complexity of the CHO-K1 GS cell line, raw material variability—specifically in chemically defined media (CDM) lots—is tracked.
*   **Trace Element Analysis:** ICP-MS trending of Manganese and Copper concentrations across CDM lots.
*   **Correlation Mapping:** Statistical correlation between media lot number and C-terminal amidation levels of Glucogen-XR.

---

#### 7.0 EQUIPMENT LIFECYCLE AND CALIBRATION TRENDING
Monitoring the performance of the SSF-3000 manufacturing hardware is critical for long-term consistency.

**Table 3: Equipment Performance Trending (Critical Instruments)**

| Equipment ID | Description | Parameter Tracked | Calibration Drift (Avg) | Preventive Maint. Date |
| :--- | :--- | :--- | :--- | :--- |
| GHS-BR-2000L | Primary Bioreactor | pH Probe Slope | 0.02 pH/mo | 15-JUN-2025 |
| GHS-COL-UP-01 | Protein A Column | HETP (Plate Height) | +2% per 50 cycles | 20-AUG-2025 |
| GHS-UFDF-02 | TFF System | Flux Rate (LMH) | -1.5% per batch | 10-OCT-2025 |
| GHS-HPLC-QC-05 | QC Analytical HPLC | Baseline Noise | < 0.01 mAU | 12-JUL-2025 |

---

#### 8.0 POST-MARKET SURVEILLANCE INTEGRATION
Continuous improvement is not limited to manufacturing data. Feedback from the field is integrated into the control strategy:
1.  **Complaint Trending:** If a trend in "Difficult to Inject" is identified (even if the batch passed viscosity specs), the TCI team initiates a review of the PEGylation sub-process (Section 3.2.S.2.2).
2.  **Stability Trend Analysis:** Real-time stability data (ongoing at 5°C, 25°C, and 40°C) is compared against the "Degradation Model" to ensure shelf-life predictions remain accurate.

#### 9.0 CONCLUSION
The Trending and Continuous Improvement program for Glucogen-XR provides a robust, data-centric framework that exceeds basic regulatory requirements. By utilizing high-frequency data collection, advanced MVDA, and a structured CAPA integration, Google Health Sciences ensures that every batch of Glucogen-XR—from GLUC-2025-001 to future iterations—meets the highest standards of safety, purity, and potency.

---
**Footnotes & References:**
1. Google Cloud Life Sciences internal SOP-QC-772: *Statistical Analysis of Biological Assays*.
2. FDA Guidance for Industry (2011), *Process Validation: General Principles and Practices*.
3. ICH Q11, *Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities)*.
4. Batch Records for GLUC-2025 series are archived in the GHS Quality Management System (Veeva Vault).

---

