# Drug Product - Pharmaceutical Development

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 23:11:33

---

# Quality Target Product Profile (QTPP)

## Target Product Attributes

# MODULE 3: QUALITY OVERALL SUMMARY (QOS) – PRODUCT DEVELOPMENT
## SECTION 3.2.P.1: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.1.1: QUALITY TARGET PRODUCT PROFILE (QTPP)
#### SUB-PART 3.2.P.1.1.2: TARGET PRODUCT ATTRIBUTES (TPA)

---

### 1.0 INTRODUCTION AND SCOPE
The Target Product Attributes (TPA) for **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences**, establish the foundational quality parameters required to ensure the safety, efficacy, and stability of this novel GLP-1 receptor agonist. This document outlines the rigorous technical specifications, critical quality attributes (CQAs), and the underlying scientific rationale driving the development of this biologics-based peptide therapeutic.

Glucogen-XR is formulated using a proprietary extended-release (XR) platform that utilizes a biodegradable poly(lactic-co-glycolic acid) (PLGA) microsphere matrix, engineered for a 7-day sustained release profile following subcutaneous administration. The TPA is developed in accordance with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q11 Development and Manufacture of Drug Substances**, and **FDA Guidance for Industry: PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance**.

---

### 2.0 SUMMARY OF QUALITY TARGET PRODUCT PROFILE (QTPP)
The QTPP serves as the prospective summary of the quality characteristics of Glucogen-XR that ideally will be achieved to ensure the desired quality, taking into account safety and efficacy.

#### Table 1: Glucogen-XR QTPP Overview
| QTPP Element | Target Attribute | Rationale |
| :--- | :--- | :--- |
| **Dosage Form** | Extended-Release Injectable Suspension | Required for once-weekly (QW) dosing to improve patient compliance in T2DM. |
| **Route of Administration** | Subcutaneous (SC) Injection | Standard for GLP-1 agonists; ensures optimal bioavailability and patient self-administration. |
| **Dosage Strength** | 2.5 mg, 5.0 mg, 10.0 mg per dose | Allows for dose titration to manage gastrointestinal side effects. |
| **Pharmacokinetics** | $T_{max}$ 24-48h; Sustained release over 168h | Minimizes "peak-to-trough" variability; maintains steady-state glycemic control. |
| **Stability** | 24 months at 2°C to 8°C | Ensures product availability and supply chain robustness. |
| **Device Compatibility** | Autoinjector (Single-use) | Ergonomic design for patients with limited dexterity due to diabetic neuropathy. |

---

### 3.0 DETAILED TARGET PRODUCT ATTRIBUTES (TPA) AND CRITICAL QUALITY ATTRIBUTES (CQAs)

#### 3.1 PRIMARY PEPTIDE STRUCTURE AND PURITY
The drug substance, Glucapeptide, is produced in the **GHS-CHO-001** cell line. The TPA for the primary structure ensures that the recombinant peptide maintains 100% homology with the targeted human GLP-1 analog sequence.

##### 3.1.1 Amino Acid Sequence Integrity
The sequence must be verified via LC-MS/MS peptide mapping.
*   **Target:** 100% sequence coverage matching Reference Standard **GLUC-RS-2024**.
*   **Acceptance Criteria:** No unauthorized substitutions or deletions at a detection limit of 0.05%.

##### 3.1.2 Purity and Related Substances
As per **ICH Q3A(R2)** and **Q3B(R2)**, impurities must be strictly controlled.

#### Table 2: Target Purity Profile for Glucogen-XR Drug Product
| Attribute | Test Method | Target Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Main Peak (Purity)** | RP-HPLC | $\geq$ 98.0% | Ensures maximal pharmacological activity. |
| **Deamidated Forms** | Hydrophilic Interaction LC (HILIC) | $\leq$ 1.0% | Deamidation at Asn-residues can reduce potency. |
| **Oxidized Forms** | RP-HPLC | $\leq$ 0.5% | Met-oxidation may impact receptor binding affinity. |
| **High Molecular Weight Species (HMWS)** | SEC-HPLC | $\leq$ 0.5% | Aggregates are potential drivers of immunogenicity. |
| **Host Cell Proteins (HCP)** | ELISA (GHS-CHO-Specific) | $\leq$ 10 ppm | Prevents adverse immunological reactions. |

---

### 4.0 FORMULATION ATTRIBUTES AND MICROSPHERE ARCHITECTURE

The extended-release functionality of Glucogen-XR is dependent on the precise engineering of the PLGA microspheres. These attributes are considered **Critical Quality Attributes (CQAs)**.

#### 4.1 PARTICLE SIZE DISTRIBUTION (PSD)
PSD governs the syringeability and the initial burst release profile.
*   **Target $D_{50}$:** 45 $\mu$m $\pm$ 5 $\mu$m.
*   **Target $D_{90}$:** $\leq$ 85 $\mu$m.
*   **Analytical Procedure (GHS-SOP-4421):** Laser Diffraction using a Malvern Mastersizer 3000.

#### 4.2 POLYMER COMPOSITION (PLGA 75:25)
The ratio of Lactide to Glycolide dictates the degradation rate via hydrolysis.
*   **Target Ratio:** 75% Lactide : 25% Glycolide ($\pm$ 2%).
*   **Molecular Weight ($M_w$):** 40,000 – 60,000 Daltons.
*   **Intrinsic Viscosity:** 0.45 – 0.55 dL/g (measured in $CHCl_3$ at 25°C).

---

### 5.0 MANUFACTURING PROCESS CONTROLS: STEP-BY-STEP
To achieve the Target Product Attributes, Google Health Sciences utilizes a continuous emulsification process.

#### 5.1 Protocol for Microsphere Formation (GHS-PROC-099)
1.  **Phase A Preparation (Organic):** Dissolve 100g of PLGA (Batch GLUC-2025-RAW01) in 500mL of Dichloromethane (DCM).
2.  **Phase B Preparation (Aqueous/Peptide):** Dissolve 10g Glucapeptide in 50mL of Phosphate Buffered Saline (pH 7.4).
3.  **Primary Emulsion ($W_1/O$):** Homogenize Phase B into Phase A at 8,000 RPM for 120 seconds using an IKA Ultra-Turrax T25.
4.  **Secondary Emulsion ($W_1/O/W_2$):** Inject the primary emulsion into a 1.0% Polyvinyl Alcohol (PVA) solution under high-shear mixing (12,000 RPM).
5.  **Solvent Evaporation:** Transfer to a 200L stirred tank reactor. Maintain temperature at 32.5°C for 4 hours to remove DCM.
6.  **Hardening and Collection:** Wash spheres three times with USP Water for Injection (WFI).
7.  **Lyophilization:** Freeze-dry the microspheres according to Cycle LYO-GLUC-04 (Shelf temp -40°C to +20°C over 48 hours).

---

### 6.0 RELEASE AND STABILITY DATA (REPRESENTATIVE BATCHES)
The following data represents the consistency of TPA achievement across early clinical batches.

#### Table 3: Batch Analysis for Glucogen-XR (Phase II Clinical Supply)
| Attribute | Batch: GLUC-2025-001 | Batch: GLUC-2025-002 | Batch: GLUC-2025-003 |
| :--- | :--- | :--- | :--- |
| **Peptide Content (mg/vial)** | 5.02 | 4.98 | 5.05 |
| **Burst Release (24h)** | 4.2% | 3.8% | 4.5% |
| **Cumulative Release (168h)** | 94.2% | 92.8% | 95.1% |
| **Residual DCM (ppm)** | 120 (Target < 600) | 115 | 132 |
| **Bacterial Endotoxins** | < 0.5 EU/mg | < 0.5 EU/mg | < 0.5 EU/mg |
| **Sterility (USP <71>)** | Pass | Pass | Pass |

---

### 7.0 PHARMACOLOGICAL PERFORMANCE ATTRIBUTES

#### 7.1 IN VITRO RELEASE TESTING (IVRT)
The IVRT method is designed to correlate with human $PK$ data (In-Vitro In-Vivo Correlation - IVIVC).

**Mathematical Model for Release:**
The release follows a tri-phasic profile described by the modified Higuchi equation:
$$Q = K \cdot t^{1/2} + B$$
Where:
*   $Q$ = Cumulative % released.
*   $K$ = Diffusion constant.
*   $B$ = Initial burst component.

#### 7.2 RECEPTOR BINDING AFFINITY
*   **Method:** Surface Plasmon Resonance (SPR) using Biacore T200.
*   **Target:** $K_d$ (Dissociation Constant) $\leq$ 0.5 nM for GLP-1R.
*   **Comparison:** Must be within 80-125% of the Glucapeptide Reference Standard.

---

### 8.0 CONTAINER CLOSURE SYSTEM (CCS) ATTRIBUTES
The CCS is critical for maintaining the stability of the lyophilized microspheres and the diluent.

1.  **Vial:** Type 1 Borosilicate glass (USP <660>).
2.  **Stopper:** 20mm Bromobutyl rubber with FluroTec® coating (USP <381>).
3.  **Seal:** Aluminum flip-off cap.
4.  **Diluent:** Sterile water for injection with 0.9% Benzyl Alcohol (preservative) and 0.02% Polysorbate 20 (wetting agent).

---

### 9.0 REGULATORY COMPLIANCE AND DOCUMENTATION
This TPA section has been cross-referenced with the following regulatory filings and standards:
*   **USP <1217>:** Tablet Fragility (Applied to microsphere cake integrity).
*   **USP <788>:** Particulate Matter in Injections.
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **21 CFR Part 210/211:** Current Good Manufacturing Practice (cGMP).

#### Statistical Analysis of Attributes:
To ensure process capability ($C_{pk} > 1.33$), Google Health Sciences utilizes JMP 17 software to monitor "Inter-Batch Variability."
*   **Analysis of Variance (ANOVA)** is performed on $D_{50}$ particle size across 10 consecutive batches (GLUC-2025-001 through GLUC-2025-010).
*   **Null Hypothesis ($H_0$):** No significant difference in mean peptide loading between batches at $\alpha = 0.05$.

---

### 10.0 CONCLUSION
The Target Product Attributes for Glucogen-XR defined herein represent a state-of-the-art approach to GLP-1 therapy. By integrating advanced Google Cloud computational fluid dynamics (CFD) to model microsphere formation with traditional pharmaceutical rigor, Google Health Sciences ensures that every batch of Glucogen-XR meets the highest standards of quality, consistency, and therapeutic efficacy for the treatment of Type 2 Diabetes Mellitus.

---
**End of Subsection 3.2.P.1.1.2**
*Approved by: Regulatory Affairs Department, Google Health Sciences*
*Date: 24-Oct-2025*
*Document ID: GHS-REG-2025-M3-DP-004*

---

## Patient and Clinical Needs

# **MODULE 3: QUALITY OVERALL SUMMARY (QOS) – DRUG PRODUCT**
## **SECTION 3.2.P.1: PHARMACEUTICAL DEVELOPMENT**
### **SUBSECTION 1.1: QUALITY TARGET PRODUCT PROFILE (QTPP)**
#### **PART 1.1.2: PATIENT AND CLINICAL NEEDS ANALYSIS**

---

### **1.1.2.1 Introduction and Scope**
The development of Glucogen-XR (glucapeptide extended-release) by Google Health Sciences (GHS) is predicated on a patient-centric Quality by Design (QbD) framework. As per **ICH Q8(R2) Pharmaceutical Development**, the Quality Target Product Profile (QTPP) forms the basis of design for the drug product. This subsection details the comprehensive analysis of patient and clinical needs that define the critical quality attributes (CQAs) of Glucogen-XR.

Glucogen-XR is a recombinant GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001** cell line. The clinical objective is to provide a once-weekly, subcutaneous therapeutic option for patients with Type 2 Diabetes Mellitus (T2DM) that minimizes the "peaks and troughs" associated with immediate-release peptides, thereby reducing gastrointestinal side effects and improving long-term glycemic control (HbA1c).

---

### **1.1.2.2 Clinical Rationale for Extended-Release Glucapeptide**
The therapeutic landscape for T2DM necessitates agents that not only lower blood glucose but also provide cardiovascular protection and weight management. Glucapeptide, a synthetic analog of human GLP-1, has a native half-life of approximately 2 minutes due to rapid degradation by Dipeptidyl Peptidase-4 (DPP-4).

The clinical need for the "XR" (Extended Release) formulation is driven by:
1.  **Patient Adherence:** Reduction of injection frequency from daily to weekly.
2.  **Pharmacokinetic Stability:** Maintaining plasma concentrations within the therapeutic window (15–25 nmol/L) to avoid nausea (associated with $C_{max}$ spikes) and loss of efficacy (associated with $C_{min}$ troughs).
3.  **Stability at Room Temperature:** Enhancing patient lifestyle flexibility by ensuring stability outside of cold-chain storage for up to 21 days.

#### **Table 1.1.2-A: Comparison of Clinical Requirements vs. Glucogen-XR Target Specifications**

| Clinical Requirement | Current Standard (Daily) | Glucogen-XR Target (Weekly) | Regulatory/Clinical Justification |
| :--- | :--- | :--- | :--- |
| **Dosing Frequency** | 1x Daily | 1x Weekly (QW) | Improved compliance (WHO Medication Adherence Guidelines) |
| **Injection Volume** | 0.5 - 1.0 mL | $\le$ 0.75 mL | Minimize injection site pain and tissue distension |
| **Needle Gauge** | 29G - 31G | 31G - 33G Thin Wall | Patient comfort (visual analog scale < 2/10) |
| **Steady State Conc.** | High Fluctuation Index | Fluctuation Index < 15% | Reduced GI adverse events (Nausea/Vomiting) |
| **Storage Flexibility** | 2°C - 8°C Constantly | 21 Days at 25°C/60% RH | Patient travel and "out-of-fridge" usage |

---

### **1.1.2.3 Analysis of Patient Population and Therapeutic Needs**
The target population comprises adults with T2DM, often presenting with comorbidities such as obesity, hypertension, and mild-to-moderate renal impairment. 

#### **1.1.2.3.1 Pediatric and Geriatric Considerations**
Under the **Pediatric Research Equity Act (PREA)**, GHS is evaluating the use of Glucogen-XR in adolescents (12–17 years). The QTPP accounts for:
*   **Geriatric Ease of Use:** The delivery system (GHS-SmartPen) must accommodate patients with decreased manual dexterity or visual impairment.
*   **Viscosity Specifications:** Target viscosity is maintained at $< 10 \text{ cP}$ at $25^\circ\text{C}$ to ensure low glide force ($< 10 \text{ N}$) during self-administration.

---

### **1.1.2.4 Technical Specification of Clinical Needs (The QTPP Matrix)**

The following table outlines the link between clinical needs and the resulting technical requirements for the Drug Product.

#### **Table 1.1.2-B: Quality Target Product Profile (QTPP) for Glucogen-XR**

| QTPP Element | Target | Rationale |
| :--- | :--- | :--- |
| **Dosage Form** | Sterile Solution for Injection in Pre-filled Syringe (PFS) | Ease of use for self-administration; elimination of vial/syringe drawing errors. |
| **Route of Administration** | Subcutaneous (SC) | Standard for GLP-1 therapies; allows patient independence. |
| **Strength** | 2.5 mg, 5.0 mg, 10.0 mg per dose | Allows for dose titration to manage GI side effects. |
| **Pharmacokinetics** | $T_{max}$ 24-48h; $T_{1/2}$ 120-140h | Supports once-weekly dosing schedule. |
| **Purity (Related Substances)** | Total Impurities $\le$ 2.0% | Minimizes immunogenicity and ensures potency (ICH Q6B). |
| **Stability** | 24 months at 2-8°C; 21 days at 25°C | Ensures product integrity throughout global supply chain. |
| **Sterility** | Must be sterile (USP <71>) | Mandatory for parenteral administration. |
| **Particulate Matter** | USP <788> / <787> | Minimize risk of vascular complications or immune response. |

---

### **1.1.2.5 Human Factors and Usability Engineering**
In alignment with **FDA Guidance: Applying Human Factors and Usability Engineering to Medical Devices**, GHS conducted a series of formative studies (Study ID: GHS-HF-2024-09).

#### **1.1.2.5.1 Injection Force Protocol (GHS-SOP-MECH-042)**
To ensure the clinical need for "painless and easy injection" is met, the following protocol is applied to all clinical batches (e.g., **GLUC-2025-001** through **GLUC-2025-015**).

**Procedure for Glide Force Testing:**
1.  **Equipment:** Instron 5942 Universal Testing System with a 50N load cell.
2.  **Sample Size:** $n=30$ units per batch.
3.  **Environmental Conditions:** $23^\circ\text{C} \pm 2^\circ\text{C}$; $50\% \text{ RH} \pm 5\%$.
4.  **Test Speed:** 200 mm/min (simulating typical human thumb pressure).
5.  **Data Capture:** 
    *   **Break-loose Force ($F_b$):** The force required to initiate plunger movement.
    *   **Gliding Force ($F_g$):** The average force required to maintain movement through the 0.75 mL delivery.
6.  **Acceptance Criteria:** $F_b < 15 \text{ N}$; $F_g < 10 \text{ N}$.

#### **Table 1.1.2-C: Glide Force Data for Clinical Lead Batches**

| Batch Number | Mfg Date | Viscosity (cP) | Avg Glide Force (N) | Result |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 8.2 | 7.4 | Pass |
| **GLUC-2025-002** | 15-JAN-2025 | 8.5 | 7.8 | Pass |
| **GLUC-2025-003** | 02-FEB-2025 | 8.1 | 7.2 | Pass |
| **GLUC-2025-004** | 10-FEB-2025 | 9.0 | 8.9 | Pass |

---

### **1.1.2.6 Pharmacokinetic (PK) Modeling and Clinical Correlation**
The clinical need for extended release is achieved through a combination of the glucapeptide amino acid sequence (modified to resist DPP-4) and the formulation matrix (containing a non-covalent albumin-binding moiety).

#### **1.1.2.6.1 Calculation of Predicted Plasma Concentration ($C_p$)**
The target $C_{ss}$ (Steady State Concentration) is calculated using the following formula for a one-compartment model with first-order absorption and elimination:

$$C_{ss,avg} = \frac{F \cdot Dose}{CL \cdot \tau}$$

Where:
*   $F$ (Bioavailability) = 0.82 (determined in Phase 1 study GHS-GLUC-101)
*   $CL$ (Clearance) = 0.05 L/h
*   $\tau$ (Dosing Interval) = 168 hours (7 days)
*   Target $C_{ss,avg} \approx 20 \text{ nmol/L}$

#### **Table 1.1.2-D: PK Parameters vs. Formulation Variants**

| Formulation Code | Excipient Ratio (Proprietary) | $T_{1/2}$ (h) | Peak-to-Trough Ratio | Clinical Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **F-01 (Reference)** | 1:0 | 18 | 4.2 | High Nausea Risk |
| **F-09 (XR-Lead)** | 1:2.5 | 132 | 1.15 | Optimal |
| **F-12 (XR-Late)** | 1:5.0 | 190 | 1.05 | Risk of Accumulation |

---

### **1.1.2.7 Immunogenicity and Safety Profiles**
Peptide therapeutics are inherently prone to inducing Anti-Drug Antibodies (ADAs). Clinical needs dictate a "Low Immunogenicity Risk" profile.
*   **Aggregate Control:** Aggregates are potent triggers for immune response. The QTPP sets a limit for High Molecular Weight Species (HMWS) at $< 1.0\%$ by SE-HPLC.
*   **Host Cell Protein (HCP) Limits:** Using the GHS-CHO-001 line, HCP levels are strictly controlled to $< 10 \text{ ppm}$ to prevent infusion-related reactions.

#### **Table 1.1.2-E: Purity Profile and Immunogenicity Risk Mitigation**

| Attribute | Method | Specification | Clinical Rationale |
| :--- | :--- | :--- | :--- |
| **Monomer Content** | SE-HPLC | $\ge 99.0\%$ | Prevention of aggregate-induced ADA |
| **HCP Content** | ELISA (GHS-HCP-Kit) | $\le 10 \text{ ppm}$ | Avoidance of hypersensitivity |
| **Endotoxin** | USP <85> | $\le 5.0 \text{ EU/mg}$ | Prevention of pyrogenic response |
| **Sub-visible Particles** | HIAC (USP <788>) | $\ge 10 \mu\text{m}: < 6000/\text{cont.}$ | Patient safety/capillary blockage |

---

### **1.1.2.8 Detailed Step-by-Step Clinical Batch Preparation Protocol (GHS-CP-500)**
To ensure that clinical needs are consistently met across all Phase 3 manufacturing lots (Batch series **GLUC-2025-XXX**), the following critical steps are implemented:

1.  **Thawing of Drug Substance (DS):**
    *   Retrieve DS (Batch GHS-DS-2025-01) from $-70^\circ\text{C}$ storage.
    *   Thaw at $22^\circ\text{C}$ for 12 hours in a controlled temperature cabinet (Equipment ID: GHS-TEMP-09).
2.  **Sterile Formulation Buffer Prep:**
    *   Prepare Histidine-Sucrose-Polysorbate 80 buffer.
    *   Verify pH is $6.5 \pm 0.1$ using a calibrated Metrohm pH meter.
3.  **Mixing and Homogenization:**
    *   Utilize a low-shear magnetic mixer (Bio-Pure 500L) to prevent peptide denaturing.
    *   Mix at 150 RPM for 45 minutes.
4.  **Sterile Filtration (Double Redundant):**
    *   Pass through two $0.22 \mu\text{m}$ PES filters in series (Millipore Express SHC).
    *   Perform Bubble Point Test post-filtration (Specification: $> 50 \text{ psi}$).
5.  **Aseptic Filling:**
    *   Fill 0.75 mL into BD Neopak 1mL Long syringes.
    *   Vacuum stoppering to ensure zero headspace (minimizing oxidation risk).

---

### **1.1.2.9 References**
1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **USP <790>:** Visible Particulates in Injections.
4.  **FDA Guidance for Industry:** Type 2 Diabetes Mellitus: Evaluating the Safety of New Drugs for Improving Glycemic Control.
5.  **Knudsen, L. B., & Lau, J. (2019):** The Discovery and Development of Liraglutide and Semaglutide. *Frontiers in Endocrinology*.

---
**End of Subsection 1.1.2**

---

## Regulatory and Compendial Requirements

### **MODULE 3: QUALITY**
### **SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT**
### **SUBSECTION: 3.2.P.2.1.1 REGULATORY AND COMPENDIAL REQUIREMENTS**

---

#### **1.0 Introduction and Scope**
The Quality Target Product Profile (QTPP) for **Glucogen-XR (glucapeptide extended-release)**, manufactured by Google Health Sciences, is established based on the clinical necessity for a long-acting, stable GLP-1 receptor agonist delivered via a subcutaneous (SC) route. This subsection details the regulatory and compendial framework ensuring that Glucogen-XR meets the stringent standards of the **United States Food and Drug Administration (FDA)**, **European Medicines Agency (EMA)**, and other global regulatory bodies.

The development of Glucogen-XR is governed by the principles of **ICH Q8(R2) (Pharmaceutical Development)**, **ICH Q9 (Quality Risk Management)**, and **ICH Q10 (Pharmaceutical Quality System)**. Given its nature as a recombinant peptide therapeutic expressed in the proprietary **GHS-CHO-001** cell line, specific attention is paid to **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products).

---

#### **2.0 Compliance with Global Pharmacopoeias**
Glucogen-XR is designed to comply with the harmonized requirements of the **United States Pharmacopeia (USP)**, **European Pharmacopoeia (Ph. Eur.)**, and **Japanese Pharmacopoeia (JP)**. In instances where monographs do not exist for the specific glucapeptide moiety, Google Health Sciences has established "In-House" (IH) specifications that meet or exceed general chapters for parenterals.

##### **Table 2.1: Primary Compendial Reference Standards for Glucogen-XR**
| Compendial Reference | Title / Description | Applicability to Glucogen-XR |
| :--- | :--- | :--- |
| **USP <1>** | Injections and Implanted Drug Products | General requirements for SC administration |
| **USP <71>** | Sterility Tests | Membrane filtration method validation |
| **USP <77>** | Glycan Analysis | Characterization of post-translational modifications |
| **USP <85>** | Bacterial Endotoxins Test | Kinetic Chromogenic Method (LAL) |
| **USP <121.1>** | Physico-chemical Analytical Procedures | Validation of HPLC/UPLC methods |
| **USP <787>** | Subvisible Particulate Matter in Therapeutic Protein Injections | HIAC and Micro-Flow Imaging (MFI) |
| **USP <788>** | Particulate Matter in Injections | Light Obscuration and Microscopic methods |
| **USP <790>** | Visible Particulates in Injections | 100% inspection and AQL requirements |
| **USP <1207>** | Package Integrity Evaluation | HVLD and Helium Leak Rate testing |
| **Ph. Eur. 2.6.14** | Bacterial Endotoxins | Harmonized with USP <85> |
| **Ph. Eur. 0520** | Parenteral Preparations | General requirements for Extended Release |

---

#### **3.0 Detailed Specification Framework (ICH Q6B Compliance)**
The specification for Glucogen-XR is based on data derived from the engineering batches (GLUC-2025-001 through GLUC-2025-010). The following table outlines the regulatory limits established for the Drug Product (DP).

##### **Table 3.1: Regulatory Specifications and Acceptance Criteria for Glucogen-XR DP**
| Test Parameter | Method | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual (Ph. Eur. 2.2.1) | Clear to slightly opalescent; colorless to pale yellow | Confirmation of physical state |
| **Identity (RT)** | RP-UPLC | Retention time matches standard ± 2% | Identification of active moiety |
| **Identity (Mass)** | ESI-TOF MS | 4,284.6 Da ± 0.5 Da | Molecular weight confirmation |
| **Purity (Purity %)** | SE-UPLC | ≥ 98.0% Monomer | Control of aggregation |
| **Charge Heterogeneity**| iCE3 (cIEF) | Main Peak: 65-75%; Acidic: ≤ 20%; Basic: ≤ 15% | Control of deamidation/glycation |
| **Assay (Potency)** | Cell-based Bioassay | 80% - 120% of Reference Standard | Biological activity (cAMP induction) |
| **Assay (Content)** | RP-UPLC | 95.0% - 105.0% of label claim | Concentration control |
| **Polysorbate 80** | RP-HPLC-ELSD | 0.015% - 0.025% (w/v) | Surfactant stability |
| **Particulates (≥10µm)** | USP <788> | ≤ 6000 per container | Patient safety (emboli risk) |
| **Particulates (≥25µm)** | USP <788> | ≤ 600 per container | Patient safety (emboli risk) |
| **Sterility** | USP <71> | No Growth | Microbiological safety |
| **Endotoxins** | USP <85> | ≤ 50 EU/mg | Pyrogenicity control |

---

#### **4.0 Stability Testing Protocol (ICH Q1A-Q1E)**
Stability studies are conducted to support the shelf-life of 24 months at 2-8°C. Data from Batch **GLUC-2025-015** (Primary Stability Batch) is utilized for the following calculations.

##### **4.1 Statistical Calculation of Shelf Life**
The shelf life is determined using the 95% confidence interval of the degradation slope.
The degradation of Glucogen-XR follows pseudo-first-order kinetics:
$$C_t = C_0 \cdot e^{-kt}$$
Where:
- $C_t$ = Concentration at time $t$
- $C_0$ = Initial concentration
- $k$ = Degradation rate constant

**Arrhenius Equation for Accelerated Stability:**
$$\ln(k) = \ln(A) - \frac{E_a}{RT}$$
For Glucogen-XR, the activation energy ($E_a$) for the primary degradation pathway (aspartic acid isomerization at position 12) was calculated to be **84.3 kJ/mol**.

---

#### **5.0 Manufacturing Controls and IPC (In-Process Controls)**
To ensure compliance with **21 CFR Part 210/211**, Google Health Sciences employs an Automated Process Control System (APCS) integrated with Google Cloud Life Sciences AI for real-time monitoring of Critical Process Parameters (CPPs).

##### **Table 5.1: Critical Process Parameters (CPPs) for Glucogen-XR Fill-Finish**
| Process Step | Parameter | Control Limit | Equipment ID |
| :--- | :--- | :--- | :--- |
| **Sterile Filtration** | Pressure Differential | ≤ 2.5 bar | FILT-2025-A |
| **Sterile Filtration** | Bubble Point Test | ≥ 3.2 bar | INTEG-101 |
| **Filling** | Fill Volume | 1.05 mL ± 0.02 mL | FILL-AUTO-09 |
| **Stoppering** | Vacuum Level | 50 mbar ± 5 mbar | STOP-VAC-02 |
| **Lyophilization** | Primary Drying Temp | -25°C ± 1°C | LYO-GHS-005 |

---

#### **6.0 Detailed Protocol: Validation of Sterility by Membrane Filtration**
Pursuant to **USP <71>**, the following protocol is executed for every batch (e.g., **GLUC-2025-102**).

**Step-by-Step Procedure:**
1.  **Preparation:** Aseptically transfer 20 units of Glucogen-XR (1.0 mL each) to the testing suite (ISO Class 5).
2.  **Filtration:** Filter the entire contents through two 0.45 µm cellulose nitrate membranes using a Millipore Steritest™ system.
3.  **Rinsing:** Rinse each membrane with 3 x 100 mL of Fluid A (USP).
4.  **Inoculation:**
    *   **Canister A:** Add 100 mL of Tryptic Soy Broth (TSB). Incubate at 20-25°C for 14 days (detection of fungi and aerobic bacteria).
    *   **Canister B:** Add 100 mL of Fluid Thioglycollate Medium (FTM). Incubate at 30-35°C for 14 days (detection of anaerobic and aerobic bacteria).
5.  **Observation:** Inspect for turbidity on Days 3, 7, and 14.
6.  **Negative Control:** Simultaneous filtration of sterile 0.9% NaCl.

---

#### **7.0 Characterization of the GHS-CHO-001 Host Cell Impurities**
As per **ICH Q6B**, host cell proteins (HCP) and host cell DNA (hcDNA) must be quantified to ensure the safety profile of the glucapeptide.

##### **Table 7.1: Impurity Profile Data (Batch GLUC-2025-050 through GLUC-2025-055)**
| Impurity Category | Analytical Method | Target | Observed Range |
| :--- | :--- | :--- | :--- |
| **HCP** | ELISA (Polyclonal) | < 100 ppm | 12.4 - 28.9 ppm |
| **hcDNA** | qPCR (Alu-seq) | < 10 pg/dose | 0.8 - 2.1 pg/dose |
| **Protein A** | ELISA | < 1 ppm | < LOQ |
| **Endotoxin** | LAL | < 50 EU/mg | 0.2 - 1.5 EU/mg |

---

#### **8.0 Container Closure Integrity (CCI) Strategy**
In accordance with **USP <1207>**, Google Health Sciences has replaced the traditional Blue Dye Ingress test with **High Voltage Leak Detection (HVLD)** for 100% of the commercial batches.

**Validation Parameters for HVLD (Equipment: HVLD-GHS-99):**
*   **Voltage:** 25 kV
*   **Probe Speed:** 200 mm/s
*   **Detection Sensitivity:** 5 µm capillary leak (validated using positive controls with laser-drilled orifices).
*   **Rejection Criteria:** Peak current > 45 µA.

---

#### **9.0 Regulatory Citations and Literature References**
1.  **FDA Guidance for Industry:** *Q8(R2) Pharmaceutical Development (2009).*
2.  **FDA Guidance for Industry:** *Q11 Development and Manufacture of Drug Substances (2012).*
3.  **USP-NF General Chapter <1058>:** *Analytical Instrument Qualification.*
4.  **Google Health Sciences Internal Report GHS-2024-RD-01:** *Glycosylation Mapping of Glucapeptide-XR via Google-AI Mass Spec Analysis.*
5.  **Muller, R. et al. (2023):** "Advanced PK/PD Modeling of Long-Acting GLP-1 Analogs in CHO-K1 Systems," *Journal of Pharmaceutical Sciences*, Vol. 112, No. 4.

---

#### **10.0 Conclusion**
The regulatory and compendial requirements for **Glucogen-XR** ensure a robust quality framework. By adhering to the interconnected standards of ICH and USP, and utilizing the high-fidelity manufacturing capabilities of the **GHS-CHO-001** cell line at the South San Francisco facility, Google Health Sciences guarantees a product that is safe, pure, and efficacious for the treatment of Type 2 Diabetes Mellitus. All data presented in this section, including batch **GLUC-2025-XXX** series, confirms that the drug product is within the validated design space.

---

# Critical Quality Attributes (CQAs) of Drug Product

## Potency and Delivered Dose

### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### 3.2.P.2.1 Critical Quality Attributes (CQAs) of Drug Product
#### 3.2.P.2.1.4 Potency and Delivered Dose Uniformity

---

#### 1.0 OVERVIEW AND REGULATORY RATIONALE
The potency and delivered dose uniformity (DDU) of **Glucogen-XR (glucapeptide extended-release)** are classified as Critical Quality Attributes (CQAs) according to ICH Q8(R2) *Pharmaceutical Development*. Given the narrow therapeutic index of GLP-1 receptor agonists and the potential for severe hypoglycemia or gastrointestinal toxicity associated with dosing excursions, Google Health Sciences (GHS) has implemented a multi-tiered control strategy.

The biological activity of Glucogen-XR is intrinsically linked to the conformational integrity of the 31-amino acid peptide chain and its site-specific PEGylation. Potency is measured via a validated cell-based bioassay, while Delivered Dose represents the reliability of the proprietary GHS-Inject™ autoinjector system to provide the specified 2.0 mg dose over the 7-day extended-release profile.

---

#### 2.0 BIOLOGICAL POTENCY (ICH Q6B COMPLIANCE)

##### 2.1 Potency Specification and Mechanism of Action (MoA)
Glucogen-XR acts as an agonist at the GLP-1 receptor (GLP-1R). Potency is expressed as a percentage of the Reference Standard (GHS-RS-GLP-02). The acceptance criteria for release are defined as 80% to 125% of the label claim, in accordance with USP <121.1> *Physicochemical Analytical Procedures for Insulins and Insulin Analogs* and ICH Q6B.

##### 2.2 Analytical Methodology: In Vitro Cell-Based Bioassay
The potency is determined using a recombinant HEK-293 cell line overexpressing the human GLP-1 receptor. The assay measures the accumulation of intracellular cyclic adenosine monophosphate (cAMP) via a Homogeneous Time-Resolved Fluorescence (HTRF) readout.

**Table 2.1.4-1: Potency Assay Technical Parameters**
| Parameter | Specification/Description |
| :--- | :--- |
| **Cell Line** | HEK-293 Human GLP-1R Clone GHS-77 |
| **Reporting Range** | 50% to 150% of Reference Standard |
| **Detection Method** | HTRF (FRET-based cAMP competitive immunoassay) |
| **Standard Curve** | 4-Parameter Logistic (4-PL) Fit |
| **EC50 Target** | 12.5 pM ± 2.5 pM |
| **Incubation Time** | 30 minutes at 37°C |

##### 2.3 Step-by-Step Bioassay Protocol (SOP-GHS-BIO-442)
1. **Cell Preparation:** Thaw one vial of GHS-77 working cell bank. Culture in DMEM/F12 supplemented with 10% FBS and G418 selection pressure.
2. **Plate Seeding:** Seed 10,000 cells/well in a 384-well white microplate. Incubate for 18 hours.
3. **Sample Preparation:** Dilute Glucogen-XR (Batch GLUC-2025-XXX) in Assay Buffer (HBSS + 0.1% BSA + 0.5 mM IBMX).
4. **Stimulation:** Add 5 µL of serial dilutions of Sample and Reference Standard.
5. **Detection:** Add HTRF reagents (Europium cryptate-labeled anti-cAMP and d2-labeled cAMP).
6. **Measurement:** Read on a BMG PHERAstar FSX plate reader at 665 nm and 620 nm.
7. **Calculation:** Ratio = (665nm/620nm) × 10,000.

---

#### 3.0 DELIVERED DOSE UNIFORMITY (DDU)

##### 3.1 Design of the GHS-Inject™ Delivery System
The Glucogen-XR delivery system is a pre-filled, single-use autoinjector designed to deliver 0.5 mL of a 4.0 mg/mL solution (Total Dose: 2.0 mg). The DDU CQA ensures that every patient receives a consistent dose regardless of manufacturing variability or device friction.

##### 3.2 Delivered Dose Testing Protocol (USP <602>)
Dose delivery is characterized across the shelf-life. Testing is conducted using a Mettler Toledo high-precision analytical balance (ID: GHS-BAL-992) equipped with an evaporation trap.

**Calculation for Delivered Dose:**
$$D_{mass} = (W_{post} - W_{pre}) \times \rho_{density}$$
Where:
- $D_{mass}$: Mass of delivered drug peptide.
- $W_{post}$: Weight of the collection vial after activation.
- $W_{pre}$: Weight of the collection vial before activation.
- $\rho_{density}$: Density adjustment factor for the polymer-peptide matrix ($1.042 \text{ g/cm}^3$).

---

#### 4.0 BATCH CHARACTERIZATION DATA (GLUC-2025 SERIES)

The following table summarizes the potency and DDU results for three pivotal clinical batches manufactured at the South San Francisco facility.

**Table 2.1.4-2: Batch Analysis for Potency and DDU**
| Batch Number | Date of Manufacture | Potency (% Relative to RS) | Mean Delivered Dose (mg) | RSD (%) (n=10) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 102.4% | 1.99 | 1.2% | Pass |
| **GLUC-2025-002** | 28-JAN-2025 | 98.7% | 2.01 | 0.9% | Pass |
| **GLUC-2025-003** | 15-FEB-2025 | 105.1% | 2.03 | 1.5% | Pass |
| **GLUC-2025-004** | 02-MAR-2025 | 99.2% | 1.98 | 1.1% | Pass |

---

#### 5.0 SENSITIVITY ANALYSIS AND RISK ASSESSMENT

##### 5.1 Impact of Peptide Aggregation on Potency
Extensive SEC-HPLC (Size Exclusion Chromatography) studies indicate that the formation of high molecular weight species (HMWS) > 2.0% leads to a statistically significant decrease in GLP-1R activation. 

**Statistical Correlation Formula:**
$$Potency_{adj} = Potency_{initial} \times e^{-k[HMWS]}$$
Where $k = 0.14$ (Degradation Constant).

##### 5.2 Device Friction and Glide Force (CFA)
The Delivered Dose is sensitive to the Silicone Oil (Dimethicone) distribution within the syringe barrel. 

**Table 2.1.4-3: Glide Force vs. Dose Accuracy**
| Break-loose Force (N) | Glide Force (N) | Delivered Dose (mg) | Outcome |
| :--- | :--- | :--- | :--- |
| 4.2 | 3.1 | 2.02 | Optimal |
| 6.8 | 5.5 | 1.97 | Acceptable |
| 12.4 | 9.8 | 1.65 | **FAIL (Incomplete Delivery)** |

---

#### 6.0 CONTROL STRATEGY (MODULE 3.2.P.3)

To ensure the CQA for Potency and Delivered Dose is met throughout the lifecycle of Glucogen-XR, Google Health Sciences implements the following:
1. **In-Process Control (IPC-09):** Fill volume check every 15 minutes during the filling of Batch GLUC-2025-XXX using automated sensors.
2. **Release Testing:** 100% visual inspection and n=30 DDU testing per USP <905>.
3. **Stability Monitoring:** Potency is assessed at T=0, 3, 6, 9, 12, 18, and 24 months under $25^\circ\text{C}/60\%\text{ RH}$ and $5^\circ\text{C}$ (Storage).

#### 7.0 REFERENCES
1. **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2. **USP <121>:** Biological Assay Formats.
3. **FDA Guidance for Industry:** Type 2 Diabetes Mellitus: Evaluating the Safety of New Drugs for Improving Glycemic Control (2023 Update).
4. **GHS-TR-2024-091:** Internal Technical Report on PEG-Glucapeptide Stability during High-Shear Mixing.

---
*End of Subsection 3.2.P.2.1.4*

---

## Purity and Impurities

### 3.2.P.2. Pharmaceutical Development
#### 3.2.P.2.2. Drug Product Components
#### 3.2.P.2.2.1. Critical Quality Attributes (CQAs)
##### 3.2.P.2.2.1.X. Purity and Impurities

---

### 1.0 OVERVIEW AND REGULATORY CONTEXT

In accordance with **ICH Q6B** (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products) and **ICH Q3A/Q3B** (Impurities in New Drug Substances/Products), the purity profile of **Glucogen-XR (glucapeptide extended-release)** has been characterized through a multi-dimensional analytical approach. Given the nature of Glucogen-XR as a long-acting GLP-1 receptor agonist produced via a proprietary **CHO-K1 GS knockout (GHS-CHO-001)** mammalian cell line, the impurity profile is categorized into product-related substances, product-related impurities, and process-related impurities.

The complexity of the extended-release formulation, which utilizes a PEGylated-peptide scaffold within a poly(lactic-co-glycolic acid) (PLGA) matrix, necessitates stringent control over degradation products that may arise during the secondary manufacturing process (encapsulation) or during the 30-day release window.

### 2.0 PRODUCT-RELATED SUBSTANCES AND IMPURITIES

Product-related impurities are molecular variants of the glucapeptide that possess properties different from those of the desired product. These arise primarily from post-translational modifications, chemical degradation during processing, or thermal stress during the extended-release window.

#### 2.1 Deamidation and Isomerization
Deamidation of asparagine (Asn) residues and isomerization of aspartic acid (Asp) residues are the primary degradation pathways for the Glucogen-XR peptide.

**Table 1: Characterization of Deamidation Sites in Glucogen-XR (Batch: GLUC-2025-001 through GLUC-2025-010)**

| Impurity ID | Residue Site | Identification Method | Potential Impact | Mean Level (%) | Spec Limit (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **D-Asn18** | Asn-18 | LC-MS/MS (Tryptic Map) | Reduced GLP-1R affinity | 0.24% | ≤ 0.50% |
| **D-Asn28** | Asn-28 | RP-HPLC / UPLC | Minimal potency shift | 0.12% | ≤ 0.30% |
| **Iso-Asp15** | Asp-15 | CEX-HPLC / MS | Significant loss of activity | 0.08% | ≤ 0.20% |
| **Succinimide** | Intermediate | pH-stress study | Precursor to Deamidation | 0.04% | Report Only |

##### 2.1.1 Analytical Procedure: Cation Exchange HPLC (CEX-HPLC)
The quantification of acidic and basic variants is performed using a **Thermo Scientific Vanquish UHPLC** system.
*   **Column:** ProPac™ WCX-10 Strong Cation Exchange (4 x 250 mm).
*   **Mobile Phase A:** 20 mM MES, pH 6.2.
*   **Mobile Phase B:** 20 mM MES, 500 mM NaCl, pH 6.2.
*   **Gradient:** 0-75% B over 45 minutes.
*   **Flow Rate:** 0.8 mL/min.
*   **Detection:** UV at 214 nm and 280 nm.

#### 2.2 Oxidation Profiles
Oxidation of methionine (Met) and tryptophan (Trp) residues is monitored as a CQA, as these modifications can alter the hydrophobicity of the peptide, leading to changes in the release kinetics from the PLGA microspheres.

**Table 2: Oxidation Impurity Monitoring (Stability Data - 25°C/60% RH)**

| Batch Number | T=0 (Met-Ox %) | T=3M (Met-Ox %) | T=6M (Met-Ox %) | T=12M (Met-Ox %) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0.05 | 0.08 | 0.12 | 0.18 |
| **GLUC-2025-002** | 0.04 | 0.07 | 0.11 | 0.19 |
| **GLUC-2025-003** | 0.06 | 0.09 | 0.14 | 0.21 |
| **GLUC-2025-004** | 0.05 | 0.08 | 0.13 | 0.20 |

#### 2.3 High Molecular Weight Species (HMWS) / Aggregation
Aggregation is a critical impurity for Glucogen-XR due to the high local concentration of the peptide within the PLGA matrix. Aggregated species are analyzed via **Size Exclusion Chromatography (SEC-HPLC)** and **Sedimentation Velocity Analytical Ultracentrifugation (SV-AUC)**.

*   **Acceptance Criteria:** Total HMWS ≤ 1.0%.
*   **Methodology:** TSKgel G2000SWxl column; Mobile phase: 0.1M Phosphate buffer with 0.2M NaCl, pH 6.8.

### 3.0 PROCESS-RELATED IMPURITIES

Process-related impurities are derived from the manufacturing process and are classified into three categories: Cell substrate-derived, Cell culture-derived, and Downstream-derived.

#### 3.1 Host Cell Proteins (HCP)
Google Health Sciences utilizes a highly sensitive, platform-specific **CHO-HCP ELISA (Third Generation)** validated for the GHS-CHO-001 cell line.

**Table 3: HCP Clearance Data (Log Reduction Value - LRV)**

| Process Step | HCP Concentration (ppm) | LRV |
| :--- | :--- | :--- |
| **Harvested Cell Culture Fluid** | 450,000 | N/A |
| **Protein A Affinity Capture** | 1,200 | 2.57 |
| **Mixed-Mode Chromatography** | 45 | 1.43 |
| **Nanofiltration (Planova 20N)** | 38 | 0.07 |
| **Ultrafiltration/Diafiltration** | < 5 | 0.88 |
| **Final Drug Substance** | **< 1.0 (LOD)** | **Cumulative: 5.65** |

#### 3.2 Host Cell DNA (hcDNA)
Residual DNA is quantified via **qPCR** targeting a highly repetitive Alu-like sequence specific to the CHO-K1 genome.
*   **Specification:** ≤ 10 pg hcDNA/mg peptide.
*   **Method:** Applied Biosystems™ ResDNASEQ™ Quantitative CHO DNA Kit.

**Table 4: Residual DNA Analysis (Batch GLUC-2025-XXX Series)**

| Batch Number | DNA Content (pg/mg) | Method Detection Limit (MDL) |
| :--- | :--- | :--- |
| GLUC-2025-001 | 0.42 | 0.10 |
| GLUC-2025-005 | 0.38 | 0.10 |
| GLUC-2025-009 | 0.45 | 0.10 |

#### 3.3 Leachable and Extractable Impurities (E&L)
Since Glucogen-XR is stored in a pre-filled syringe (PFS) with a bromobutyl stopper, extensive E&L studies were conducted per **USP <1663>** and **USP <1664>**.

**Table 5: Targeted Leachable Analysis (12-Month Real-Time Stability)**

| Leachable Species | Source | Concentration (µg/mL) | Analytical Technique |
| :--- | :--- | :--- | :--- |
| **Silicon Oil** | Barrel Lubricant | 0.15 | ICP-MS |
| **Tungsten** | Needle Insertion | < 0.01 (LOQ) | ICP-MS |
| **Antioxidants (BHT)** | Stopper | 0.03 | GC-MS |
| **Aluminum** | Glass Vials (Bulk) | 0.02 | ICP-MS |

### 4.0 PROTOCOL: QUANTIFICATION OF RESIDUAL SOLVENTS (ICH Q3C)

During the encapsulation of Glucogen-XR into PLGA microspheres, Dichloromethane (DCM) and Dimethyl Sulfoxide (DMSO) are utilized.

#### 4.1 Headspace Gas Chromatography (HS-GC) Procedure
1.  **Sample Preparation:** Weigh 100 mg of Glucogen-XR microspheres into a 20 mL headspace vial. Add 5 mL of N-Methyl-2-pyrrolidone (NMP) as a diluent.
2.  **Instrumentation:** Agilent 7890B GC with 7697A Headspace Sampler.
3.  **Column:** DB-624 (30m x 0.32mm x 1.8µm).
4.  **Carrier Gas:** Helium at 1.5 mL/min.
5.  **Oven Program:** 40°C (hold 5 min) to 240°C at 10°C/min.
6.  **Detector:** Flame Ionization Detector (FID) at 250°C.

**Table 6: Residual Solvent Specification and Results**

| Solvent | ICH Class | Limit (ppm) | Observed (Mean) |
| :--- | :--- | :--- | :--- |
| **Dichloromethane** | Class 2 | 600 | 42 ppm |
| **DMSO** | Class 3 | 5000 | 115 ppm |
| **Methanol** | Class 2 | 3000 | < 10 ppm |

### 5.0 CALCULATIONS AND STATISTICAL ANALYSIS

#### 5.1 Mass Balance Calculation
The mass balance of the Glucogen-XR purity profile is calculated using the following formula:
$$Mass\ Balance = \%Purity_{(RP-HPLC)} + \%Impurities_{(Deamidated + Oxidized)} + \%HMWS_{(SEC)} + \%Water\ Content_{(KF)}$$
Current data for Batch GLUC-2025-001:
$$98.2\% + (0.4\% + 0.1\%) + 0.3\% + 0.9\% = 99.9\%$$

#### 5.2 Purity Thresholds
In accordance with **ICH Q3B(R2)**, the following thresholds are applied for a 5 mg weekly dose:
*   **Reporting Threshold:** 0.05%
*   **Identification Threshold:** 0.10%
*   **Qualification Threshold:** 0.15%

All impurities exceeding 0.10% have been structurally characterized via high-resolution mass spectrometry (Orbitrap Exploris 480).

### 6.0 REFERENCES

1.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
2.  **ICH Q3B(R2):** Impurities in New Drug Products.
3.  **USP <121>:** Insulin Assays (modified for GLP-1 analogues).
4.  **USP <788>:** Particulate Matter in Injections.
5.  **FDA Guidance for Industry:** Characterization and Registration of Peptide Drug Products (2021).

---

**[END OF SECTION 3.2.P.2.2.1.X]**

---

## Sterility and Endotoxin

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SECTION 3.2.P.2.1.2: CRITICAL QUALITY ATTRIBUTES (CQAs) – STERILITY AND BACTERIAL ENDOTOXINS

---

#### 3.2.P.2.1.2.1 Introduction and Risk Assessment
As Glucogen-XR (glucapeptide extended-release) is an injectable polypeptide formulation intended for subcutaneous administration in the treatment of Type 2 Diabetes Mellitus, "Sterility" and "Bacterial Endotoxins" are classified as high-priority Critical Quality Attributes (CQAs). Failure to maintain these attributes poses a direct risk of systemic inflammatory response syndrome (SIRS), sepsis, and pyrogenic reactions in the target patient population. 

Google Health Sciences (GHS) has implemented a "Quality by Design" (QbD) approach to ensure that the drug product (DP) consistently meets USP <71> and USP <85> requirements. This section details the development, validation, and control strategy for these attributes.

---

#### 3.2.P.2.1.2.2 Microbial Control Strategy and Risk Mitigation
The manufacturing process for Glucogen-XR utilizes a closed-system aseptic processing line at the South San Francisco facility (Building 4, Suite 202). The following table summarizes the risk assessment for microbial contamination.

**Table 3.2.P.2.1.2-1: Quality Risk Management (QRM) for Sterility and Endotoxins**

| Risk Factor | Potential Impact | Severity | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Raw Materials** | Introduction of heat-stable endotoxins | High | Moderate | Qualification of vendors; USP <85> testing of all excipients; use of Low Endotoxin Grade sucrose. |
| **Water for Injection (WFI)** | Biofilm formation/Gram-negative bacteria | High | Low | Continuous TOC and Conductivity monitoring; daily microbial sampling; 80°C loop circulation. |
| **Equipment Surfaces** | Cross-contamination; biofilm | High | Low | Validated CIP/SIP cycles; VHP (Vaporized Hydrogen Peroxide) decontamination of isolators. |
| **Personnel** | Human-derived shedding (Staph. spp) | High | High | Use of Grade A Isolator technology; robotic filling; strict gowning qualification. |
| **Hold Times** | Microbial proliferation in bulk drug substance | Medium | Moderate | Defined Maximum Hold Time (MHT) validated at 2-8°C and 25°C. |

---

#### 3.2.P.2.1.2.3 Sterility Testing Development (USP <71>)

##### 3.2.P.2.1.2.3.1 Method Selection: Membrane Filtration
Due to the presence of the extended-release polymer matrix in Glucogen-XR, which may cause turbidity in direct inoculation media, the **Membrane Filtration Method** was selected and validated. This method allows for the removal of the inhibitory polypeptide active ingredient and the surfactant-rich vehicle before incubation.

**Technical Specifications for Filtration:**
*   **Filter Type:** Hydrophilic Polyvinylidene Fluoride (PVDF) 
*   **Pore Size:** 0.22 μm
*   **Filter Diameter:** 47 mm
*   **Apparatus:** Steritest™ NEO Symbio System (ISO 5 Class A environment)

##### 3.2.P.2.1.2.3.2 Validation Protocol: Bacteriostasis and Fungistasis (B&F)
Validation was performed to ensure that the Glucogen-XR formulation does not inhibit the growth of microorganisms. Three separate lots (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) were tested against the following USP <71> indicator organisms.

**Table 3.2.P.2.1.2-2: Microorganisms for B&F Validation**

| Organism | ATCC # | Media | Incubation Temp | Incubation Time |
| :--- | :--- | :--- | :--- | :--- |
| *Staphylococcus aureus* | 6538 | TSB | 20-25°C | ≤ 5 days |
| *Bacillus subtilis* | 6633 | TSB | 20-25°C | ≤ 5 days |
| *Pseudomonas aeruginosa* | 9027 | TSB | 20-25°C | ≤ 5 days |
| *Clostridium sporogenes* | 11437 | FTM | 30-35°C | ≤ 5 days |
| *Candida albicans* | 10231 | TSB | 20-25°C | ≤ 5 days |
| *Aspergillus brasiliensis* | 16404 | TSB | 20-25°C | ≤ 5 days |

**Step-by-Step Filtration Protocol:**
1.  **Preparation:** Aseptically open 20 vials of Glucogen-XR (1.0 mL each).
2.  **Dilution:** Pool contents into 100 mL of Fluid A (USP).
3.  **Filtration:** Pass the 100 mL diluted sample through two Steritest canisters (50 mL per canister).
4.  **Rinsing:** Rinse each membrane with three 100 mL portions of Fluid D (to remove any residual peptide/polymer).
5.  **Inoculation:** Add 100 mL of Fluid Thioglycollate Medium (FTM) to one canister and 100 mL of Soybean-Casein Digest Medium (TSB) to the other.
6.  **Positive Control:** Inoculate the final rinse of the validation run with < 100 CFU of the challenge organism.
7.  **Observation:** Monitor for visual turbidity.

**Table 3.2.P.2.1.2-3: Results of B&F Validation (Batch GLUC-2025-001)**

| Organism | Inoculum (CFU) | Growth in Presence of DP? | Recovery vs. Control (%) | Result |
| :--- | :--- | :--- | :--- | :--- |
| *S. aureus* | 42 | Yes | 94% | Pass |
| *P. aeruginosa* | 38 | Yes | 91% | Pass |
| *B. subtilis* | 51 | Yes | 98% | Pass |
| *C. sporogenes* | 29 | Yes | 88% | Pass |
| *C. albicans* | 62 | Yes | 102% | Pass |
| *A. brasiliensis* | 44 | Yes | 95% | Pass |

---

#### 3.2.P.2.1.2.4 Bacterial Endotoxins Testing Development (USP <85>)

##### 3.2.P.2.1.2.4.1 Maximum Valid Dilution (MVD) Calculation
Glucogen-XR is administered at a maximum dose of 10 mg (corresponding to 0.5 mL) per injection. The Endotoxin Limit ($L$) is calculated based on the USP formula:

$$L = \frac{K}{M}$$

Where:
*   $K$ = Threshold pyrogenic dose (5.0 EU/kg for non-intrathecal drugs).
*   $M$ = Maximum dose administered per kg per hour (assuming a 70 kg adult).

For Glucogen-XR:
$$M = \frac{0.5 \text{ mL}}{70 \text{ kg}} = 0.0071 \text{ mL/kg}$$
$$L = \frac{5.0 \text{ EU/kg}}{0.0071 \text{ mL/kg}} = 704.2 \text{ EU/mL}$$

To ensure a conservative safety margin, Google Health Sciences has set the internal release specification at **≤ 50 EU/mL**.

**MVD Calculation:**
$$MVD = \frac{L \times \text{Concentration}}{\lambda}$$
Assuming the sensitivity of the Lysate ($\lambda$) is 0.005 EU/mL:
$$MVD = \frac{50 \text{ EU/mL}}{0.005 \text{ EU/mL}} = 10,000$$

##### 3.2.P.2.1.2.4.2 Kinetic Chromogenic Method Validation
The Kinetic Chromogenic Viability (KCV) method was chosen for its high sensitivity and ability to quantify endotoxin levels in the presence of the glucapeptide's viscous matrix.

**Table 3.2.P.2.1.2-4: Inhibition/Enhancement (I/E) Validation Data**

| Test Sample | Dilution Factor | Measured Endotoxin (EU/mL) | Spike Recovery (%) | Requirement | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 1:100 | < 0.50 | 105% | 50-200% | Valid |
| GLUC-2025-001 | 1:200 | < 0.50 | 112% | 50-200% | Valid |
| GLUC-2025-002 | 1:100 | < 0.50 | 98% | 50-200% | Valid |
| GLUC-2025-003 | 1:100 | < 0.50 | 101% | 50-200% | Valid |

*Note: The 1:100 dilution was selected as the standard operating dilution for routine release testing.*

---

#### 3.2.P.2.1.2.5 Low Endotoxin Recovery (LER) Studies
As Glucogen-XR contains polysorbate 80 and phosphate buffers, it was evaluated for Low Endotoxin Recovery (LER), a phenomenon where endotoxins are masked over time.

**LER Study Design:**
*   **Spiking:** DP samples spiked with 5.0 EU/mL of RSE (Reference Standard Endotoxin).
*   **Storage:** 2-8°C and 25°C.
*   **Time Points:** T=0, 24h, 48h, 72h, 7 days.
*   **Acceptance:** Recovery within 50-200% of the T=0 spike.

**Table 3.2.P.2.1.2-5: LER Longitudinal Data (Batch GLUC-2025-001)**

| Time Point | Storage Temp | Recovery (%) | Masking Observed? |
| :--- | :--- | :--- | :--- |
| T=0 | N/A | 102% | No |
| 24 Hours | 25°C | 98% | No |
| 72 Hours | 25°C | 91% | No |
| 7 Days | 2-8°C | 88% | No |

*Conclusion: Glucogen-XR does not exhibit LER under the studied conditions, confirming that the USP <85> kinetic chromogenic method is stability-indicating for endotoxin detection.*

---

#### 3.2.P.2.1.2.6 Manufacturing Controls and In-Process Testing
To ensure the final DP meets sterility and endotoxin CQAs, the following in-process controls (IPCs) are mandated at the South San Francisco facility.

**Table 3.2.P.2.1.2-6: In-Process Controls for Microbial Quality**

| Process Step | Test Parameter | Frequency | Limit |
| :--- | :--- | :--- | :--- |
| Pre-Filtration Bulk | Bioburden | Every Batch | ≤ 10 CFU/100 mL |
| Pre-Filtration Bulk | Endotoxin | Every Batch | ≤ 5 EU/mL |
| Post-Sterile Filter | Bubble Point/Integirty | Every Batch | Per filter spec (≥ 50 psi) |
| Filling Room | Active Air Sample | Daily | < 1 CFU / m³ |
| Filling Room | Passive Settle Plate | Every Shift | < 1 CFU / 4 hours |
| Operator | Gowning (Gloved Fingertips) | Every Exit | 0 CFU |

**Sterilization of Components:**
1.  **Vials:** Dry Heat Depyrogenation Tunnel (Target: 3-log reduction of endotoxin; Cycle: 250°C for 45 minutes).
2.  **Stoppers:** Gamma Irradiation (25-40 kGy) validated per ISO 11137.
3.  **Drug Product:** Redundant Sterile Filtration (0.22 μm PVDF filters in series).

---

#### 3.2.P.2.1.2.7 Container Closure Integrity (CCI)
Sterility must be maintained throughout the shelf life of 24 months. Google Health Sciences utilizes **High Voltage Leak Detection (HVLD)** as a non-destructive alternative to the blue dye ingress test.

**CCI Validation Parameters:**
*   **Instrument:** Nikka Denshi HVLD System.
*   **Voltage:** 15 kV.
*   **Detection Limit:** 5 μm micro-leak (validated using laser-drilled positive controls).
*   **Batch Results (GLUC-2025-001 to 005):** 100% of vials passed CCI testing post-filling.

---

#### 3.2.P.2.1.2.8 References
1.  **USP <71>:** Sterility Tests.
2.  **USP <85>:** Bacterial Endotoxins Test.
3.  **USP <161>:** Medical Devices—Bacterial Endotoxin and Pyrogen Tests.
4.  **FDA Guidance (2004):** Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice.
5.  **ICH Q4B Annex 3:** Evaluation and Recommendation of Pharmacopoeial Texts for Use in the ICH Regions on Sterility Test.
6.  **GHS-SOP-QC-0921:** Procedure for Kinetic Chromogenic LAL Analysis for Glucapeptide Products.

---
**END OF SECTION**

---

## Particulates and Appearance

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.1.2: CRITICAL QUALITY ATTRIBUTES (CQAs) – PARTICULATES AND APPEARANCE

---

#### 3.2.P.2.1.2.1 Introduction and Strategic Alignment
The characterization of Physical Appearance and Particulate Matter for **Glucogen-XR (glucapeptide extended-release)** injection (5 mg/mL) is a multi-dimensional Critical Quality Attribute (CQA) assessment designed to ensure the safety, purity, and clinical efficacy of the drug product over its intended shelf-life. Given the nature of the Glucogen-XR formulation—a complex, high-concentration GLP-1 receptor agonist peptide stabilized within a proprietary polymeric/surfactant matrix—the control of visible and sub-visible particulates is paramount to mitigate immunogenic risks and ensure vascular safety.

As per **ICH Q6B** and **USP <787>**, the monitoring of particulates in proteinaceous and peptidic therapeutics requires a life-cycle approach. Google Health Sciences (GHS) has implemented a rigorous testing framework that exceeds standard pharmacopeial requirements, utilizing state-of-the-art orthogonal methods including Micro-Flow Imaging (MFI) and Resonant Mass Measurement (RMM).

#### 3.2.P.2.1.2.2 Definition of Appearance CQAs
Appearance is defined by the three primary attributes: Clarity/Opalescence, Coloration, and Presence of Visible Particulates.

##### 3.2.P.2.1.2.2.1 Visual Clarity and Opalescence
Glucogen-XR is a sterile, aqueous solution. In contrast to standard small molecules, the high-concentration peptide environment (5 mg/mL) and the presence of Poloxamer 188 may result in inherent opalescence due to Rayleigh scattering. 

**Table 1: Acceptance Criteria for Opalescence (Ref: USP <1791> & Ph. Eur. 2.2.1)**
| Attribute | Specification Limit | Rationalization |
| :--- | :--- | :--- |
| **Clarity** | ≤ Reference Suspension II | Minimization of high-molecular-weight (HMW) species and aggregates. |
| **Opalescence** | Slightly opalescent to Clear | Consistent with the micellar structure of the extended-release vehicle. |

##### 3.2.P.2.1.2.2.2 Degree of Coloration
The peptide backbone of Glucogen-XR contains specific aromatic amino acid residues (Tryptophan/Tyrosine) susceptible to photo-oxidation. Color monitoring is a surrogate for chemical degradation.

**Table 2: Color Specification (Ph. Eur. 2.2.2 Method II)**
| Color Grade | Specification | Significance |
| :--- | :--- | :--- |
| **Yellow (Y)** | ≤ Y7 | Indicator of oxidative degradation or Maillard reaction products. |
| **Brownish-Yellow (BY)** | ≤ BY7 | Indicator of severe thermal stress or impurity leaching. |

---

#### 3.2.P.2.1.2.3 Sub-visible Particulate Matter (SvPM) - Detailed Analysis
Sub-visible particulates are categorized by size (≥2 µm, ≥10 µm, and ≥25 µm). While **USP <788>** provides limits for ≥10 µm and ≥25 µm, Google Health Sciences monitors the ≥2 µm and ≥5 µm fractions to detect early-stage aggregation precursors.

##### 3.2.P.2.1.2.3.1 Light Obscuration (LO) vs. Micro-Flow Imaging (MFI)
For Glucogen-XR, LO (USP <788>) is the primary compendial method; however, because peptide aggregates often have a refractive index close to the buffer, LO may underestimate particle counts. MFI is used as a characterization tool to provide morphological data (circularity, aspect ratio, and intensity).

**Calculation for Particle Concentration ($P_c$):**
$$P_c = \frac{\sum n_i}{V_{sampled} \times (1 - \phi)}$$
Where:
*   $n_i$ = number of particles in size bin $i$
*   $V_{sampled}$ = Volume drawn by the syringe pump
*   $\phi$ = Coincidence loss factor (statistically determined for high-concentration samples)

---

#### 3.2.P.2.1.2.4 Batch Analysis Data: Particulates and Appearance
The following data represents the results from the GLUC-2025-XXX series manufactured at the South San Francisco facility (Building 3).

**Table 3: Batch Analysis Results for Appearance and Sub-visible Particles**
| Batch Number | Mfg Date | Appearance (Visual) | LO (≥10 µm) [parts/mL] | LO (≥25 µm) [parts/mL] | MFI (≥2 µm) [parts/mL] |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | Clear, < BY7 | 142 | 8 | 4,200 |
| **GLUC-2025-002** | 20-JAN-2025 | Clear, < BY7 | 189 | 12 | 5,150 |
| **GLUC-2025-003** | 02-FEB-2025 | Clear, < BY7 | 115 | 4 | 3,890 |
| **GLUC-2025-004** | 15-FEB-2025 | Sl. Opalescent | 210 | 15 | 6,200 |
| **GLUC-2025-005** | 01-MAR-2025 | Clear, < BY7 | 95 | 2 | 3,100 |
| **GLUC-2025-006** | 10-MAR-2025 | Clear, < BY7 | 160 | 9 | 4,450 |

*Note: All batches meet the USP <788> criteria (< 6000 per container for ≥10 µm).*

---

#### 3.2.P.2.1.2.5 Protocol: Visual Inspection for Visible Particulates
The following protocol (SOP-GHS-QA-099) is utilized for 100% visual inspection of Glucogen-XR Drug Product.

##### 3.2.P.2.1.2.5.1 Equipment and Environmental Conditions
1.  **Inspection Booth:** Equipped with a matte black and non-glare white background.
2.  **Illumination:** Calibrated light source providing 2,000 to 3,750 Lux at the point of inspection (Ref: **USP <1790>**).
3.  **Magnification:** 2x magnification lens (optional for investigative purposes).

##### 3.2.P.2.1.2.5.2 Step-by-Step Procedure
1.  **Preparation:** Clean the exterior of the vial (Batch GLUC-2025-XXX) with a lint-free wipe.
2.  **Agitation:** Gently swirl the vial to set any particles into motion. Avoid vigorous shaking to prevent air bubble formation, which may be misidentified as particles.
3.  **Black Background (5 seconds):** Hold the vial against the black background to detect light-colored or translucent particles (glass, fibers, peptide aggregates).
4.  **White Background (5 seconds):** Hold the vial against the white background to detect dark or colored particles (rubber, metal, charred material).
5.  **Inversion:** Slowly invert the vial to inspect the bottom and the neck region.
6.  **Reporting:** Classify findings as:
    *   *Intrinsic:* Related to the product (e.g., peptide precipitates).
    *   *Extrinsic:* Related to the environment (e.g., hair, dust, fibers).
    *   *Inherent:* Expected part of the formulation (e.g., occasional air bubbles).

---

#### 3.2.P.2.1.2.6 Advanced Characterization: Morphological Identification
To further qualify the particulates observed in early stability studies (Batch GLUC-2025-004), Google Health Sciences utilized Scanning Electron Microscopy (SEM) and Energy Dispersive X-ray Spectroscopy (EDX).

**Table 4: Particulate Morphological Characterization**
| Particle Type | Shape | EDX Signature | Probable Source |
| :--- | :--- | :--- | :--- |
| **Proteinaceous** | Irregular, "fluffy" | C, N, O, S | Peptide self-association |
| **Cellulose** | Fibrous | C, O | Gowning or filter shedding |
| **Silicone Oil** | Spherical | Si, O | Prefilled Syringe (PFS) lubricant |
| **Stainless Steel** | Metallic/Angular | Fe, Cr, Ni | Filling needle contact |

---

#### 3.2.P.2.1.2.7 Statistical Analysis of Particulate Distribution
To ensure process capability (Cpk), a Poisson distribution model is applied to the sub-visible counts across the pivotal clinical batches.

**Statistical Model for Particulate Limit Setting:**
$$\lambda = \frac{1}{n} \sum_{i=1}^{n} X_i$$
Where $\lambda$ is the mean number of particles per mL. Given that particulate counts follow a discrete distribution, the Control Limits (UCL/LCL) are defined as:
$$UCL = \lambda + 3\sqrt{\lambda}$$

For Batch Series GLUC-2025-XXX, the calculated $\lambda$ for ≥10 µm particles is 151.8.
$$UCL = 151.8 + 3\sqrt{151.8} \approx 188.8 \text{ particles/mL}$$

Batches exceeding this UCL are subject to an Internal Quality Notification (IQN) to assess the impact on the sterile fill-finish process.

---

#### 3.2.P.2.1.2.8 Regulatory References
1.  **FDA Guidance for Industry:** *Immunogenicity Assessment for Therapeutic Protein Products* (2014).
2.  **USP <787>:** *Subvisible Particulate Matter in Therapeutic Protein Injections*.
3.  **USP <788>:** *Particulate Matter in Injections*.
4.  **USP <790>:** *Visible Particulates in Injections*.
5.  **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*.
6.  **Ph. Eur. 2.9.19:** *Particulate Contamination: Sub-visible Particles*.

#### 3.2.P.2.1.2.9 Conclusion
The appearance and particulate profile of Glucogen-XR are strictly controlled through a combination of compendial visual inspection, LO, and high-resolution MFI. The data from the GLUC-2025-XXX batches demonstrates a high degree of process consistency and a low risk for particulate-induced immunogenicity. Continuous monitoring of the ≥2 µm fraction provides a "leading indicator" of potential stability shifts, ensuring that Google Health Sciences maintains the highest standards of product quality for patients with Type 2 Diabetes.

---

# Formulation Development

## Selection of Formulation Components

# MODULE 3: QUALITY (CMC)
## 3.2.P DRUG PRODUCT (GLUCOGEN-XR)
### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.2 FORMULATION DEVELOPMENT
##### 3.2.P.2.2.1 Selection of Formulation Components

The selection of formulation components for Glucogen-XR (glucapeptide extended-release) was governed by the Quality Target Product Profile (QTPP) established early in the development cycle. The primary objective was to ensure the chemical and physical stability of the GLP-1 receptor agonist over a 24-month shelf life at 2-8°C, while providing a robust extended-release profile compatible with a once-weekly subcutaneous injection via a pre-filled syringe (PFS) or autoinjector.

---

### 1. OBJECTIVE AND SCOPE
This section details the systematic evaluation of excipients utilized in the Glucogen-XR drug product. The selection process utilized a Quality by Design (QbD) approach, incorporating High-Throughput Screening (HTS), Accelerated Stress Testing (AST), and Forced Degradation Studies (FDS) to identify the optimal Qualitative and Quantitative (Q1/Q2) composition.

Specific focus was placed on:
1.  **Buffering Agents:** Maintenance of pH at the isoelectric point (pI) avoidance zone.
2.  **Stabilizers/Cryoprotectants:** Protection against mechanical shear and thermal denaturation.
3.  **Surfactants:** Mitigation of interfacial tension and sub-visible particulate formation.
4.  **Tonicity Modifiers:** Achievement of physiological osmolarity (280–320 mOsm/kg).
5.  **Viscosity Modifiers/Extended-Release Matrix:** Selection of the polymeric carrier for the "XR" profile.

---

### 2. PHYSICOCHEMICAL PROPERTIES UNDERLYING COMPONENT SELECTION

The Glucogen-XR molecule (GHS-001) is a 31-amino acid peptide with a molecular weight of 3,297.6 Da, modified with a C-16 fatty acid chain to facilitate albumin binding.

**Table 1: Critical Physicochemical Attributes Influencing Excipient Selection**
| Parameter | Value/Attribute | Impact on Formulation |
| :--- | :--- | :--- |
| **Isoelectric Point (pI)** | 4.85 (Calculated) | pH selection must be > 1.5 units from pI to prevent precipitation. |
| **Solubility** | > 50 mg/mL at pH 7.4 | Formulation concentration target is 10 mg/mL. |
| **Aggregation Propensity** | High (Beta-sheet formation) | Requires non-ionic surfactants. |
| **Deamidation Sites** | Asn-28, Gln-17 | Requires tight pH control (optimal pH 6.8 - 7.2). |
| **Oxidation Sites** | Met-8 | Requires antioxidant or headspace nitrogen purging. |

---

### 3. SELECTION OF THE BUFFERING SYSTEM

The selection of the buffering agent was based on the buffer capacity ($\beta$) at the target pH and the compatibility with the extended-release polymer matrix.

#### 3.2.P.2.2.1.1 Buffer Screening Protocol (Protocol ID: GHS-PHARM-0042)
1.  **Preparation:** Prepare 20 mM solutions of Citrate, Phosphate, Histidine, and Acetate.
2.  **Concentration:** Adjust Glucogen-XR concentration to 10 mg/mL.
3.  **Stress Condition:** Incubate samples at 40°C/75% RH for 28 days (Batch Ref: GLUC-2025-S1A).
4.  **Analysis:** Size Exclusion Chromatography (SEC-HPLC), Cation Exchange Chromatography (CEX-HPLC), and pH stability.

**Table 2: Buffer Screening Results (Batch GLUC-2025-S1A)**
| Buffer Type | Target pH | Actual pH (T=28d) | Purity by SEC (%) | Total Impurities (CEX) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Acetate** | 5.5 | 5.2 | 94.2% | 5.8% | Rejected (Instability) |
| **Histidine** | 6.0 | 5.9 | 97.8% | 2.1% | Candidate |
| **Phosphate** | 7.0 | 7.0 | 99.1% | 0.8% | **Selected** |
| **Citrate** | 6.5 | 6.3 | 96.5% | 3.4% | Rejected (Oxidation) |

**Rationale for Sodium Phosphate:** Sodium Phosphate (USP/EP/JP) provided the highest buffering capacity at pH 7.0 $\pm$ 0.2, the region where GHS-001 exhibits maximum solubility and minimum deamidation.

---

### 4. STABILIZERS AND CRYOPROTECTANTS

Glucogen-XR is subject to unfolding during the freeze-thaw cycles of drug substance storage and the filling process. Disaccharides were evaluated for their ability to form a glassy matrix and stabilize the peptide through preferential exclusion.

#### 4.2.P.2.2.1.2 Optimization of Trehalose vs. Sucrose
Studies were conducted using Batch GLUC-2025-T01 through GLUC-2025-T06.

**Table 3: Stability of Glucogen-XR in Various Saccharide Concentrations**
| Sample ID | Excipient | Conc. (mg/mL) | Osmolarity (mOsm) | HMW% (T=3mo @ 25°C) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-T01 | Sucrose | 40 | 220 | 1.2% |
| GLUC-2025-T02 | Sucrose | 80 | 340 | 0.9% |
| GLUC-2025-T03 | Trehalose | 40 | 215 | 0.8% |
| **GLUC-2025-T04** | **Trehalose** | **70** | **305** | **0.4%** |
| GLUC-2025-T05 | Mannitol | 50 | 310 | 2.5% |

**Conclusion:** Trehalose dihydrate was selected at 70 mg/mL. Trehalose demonstrated a higher Glass Transition Temperature ($T_g$) compared to Sucrose, providing superior long-term stability and protection against moisture-induced aggregation.

---

### 5. SELECTION OF SURFACTANT (NON-IONIC)

To prevent adsorption of the peptide to the borosilicate glass vials and the siliconized surfaces of the PFS, non-ionic surfactants were screened.

#### 5.2.P.2.2.1.3 Interfacial Tension and Particle Analysis
Polysorbate 20 (PS20) and Polysorbate 80 (PS80) were evaluated at concentrations ranging from 0.01 mg/mL to 1.0 mg/mL.

**Table 4: Sub-visible Particulate Matter (USP <788>) vs. Surfactant Concentration**
| Batch ID | Surfactant | Conc (mg/mL) | $\geq 10 \mu m$ (counts/mL) | $\geq 25 \mu m$ (counts/mL) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-P01 | None | 0.0 | 4,200 | 850 |
| GLUC-2025-P02 | PS20 | 0.1 | 450 | 20 |
| **GLUC-2025-P03** | **PS20** | **0.2** | **120** | **4** |
| GLUC-2025-P04 | PS80 | 0.1 | 680 | 45 |
| GLUC-2025-P05 | PS80 | 0.5 | 510 | 38 |

**Selection:** Polysorbate 20 (Super Refined™ grade) at 0.2 mg/mL was selected. It significantly reduced sub-visible particle formation and showed lower peroxide formation compared to PS80, reducing the risk of Methionine oxidation in the peptide chain.

---

### 6. THE EXTENDED-RELEASE (XR) MECHANISM COMPONENTS

The "XR" profile of Glucogen-XR is achieved through a proprietary Biodegradable Polymer Matrix. The selection involved screening various Poly(lactic-co-glycolic acid) (PLGA) ratios and molecular weights.

#### 6.2.P.2.2.1.4 PLGA Grade Selection
**Criteria:** Sustained release over 7 days with minimal "burst release" (<10% in the first 24 hours).

**Table 5: PLGA Matrix Evaluation (Batch GLUC-2025-XR-A/F)**
| Polymer Grade | Lactide:Glycolide Ratio | MW (kDa) | Burst Release (24h) | T80 (days) |
| :--- | :--- | :--- | :--- | :--- |
| PLGA 50:50 | 50:50 | 10 | 25% | 4 |
| PLGA 75:25 | 75:25 | 15 | 18% | 6 |
| **PLGA 75:25** | **75:25** | **25** | **6%** | **7.5** |
| PLGA 85:15 | 85:15 | 30 | 2% | 14 |

**Selection:** PLGA 75:25 (MW 25 kDa) was selected as the primary carrier. To further fine-tune the release, a small percentage (2% w/w) of Polyethylene Glycol (PEG) 400 was added as a plasticizer to ensure consistent syringeability through a 29G needle.

---

### 7. FINAL QUANTITATIVE COMPOSITION (FORMULATION OPTIMUM)

Based on the studies above, the final formulation for Glucogen-XR (Batch series GLUC-2025-XXX) was established.

**Table 6: Composition of Glucogen-XR Drug Product**
| Component | Function | Quantity (per mL) | Quality Standard |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR (GHS-001)** | Active Substance | 10.0 mg | In-house |
| **Sodium Phosphate Dibasic** | Buffering Agent | 1.42 mg | USP/EP |
| **Sodium Phosphate Monobasic** | Buffering Agent | 0.24 mg | USP/EP |
| **Trehalose Dihydrate** | Stabilizer/Tonicity | 70.0 mg | USP/EP |
| **Polysorbate 20** | Surfactant | 0.20 mg | USP/EP/JP |
| **PLGA (75:25)** | XR Matrix | 150.0 mg | In-house/GMP |
| **PEG 400** | Plasticizer | 3.0 mg | USP/EP |
| **Water for Injection** | Solvent | q.s. to 1.0 mL | USP/EP |

---

### 8. MANUFACTURING OVERAGE RATIONALE

A 2% manufacturing overage is applied to the bulk solution to account for losses during the sterile filtration (0.22 $\mu$m PES filters) and the filling process into the 1.0 mL Long PFS. This ensures that the delivered dose meets the label claim of 10 mg/mL throughout the shelf life.

**Calculation of Overage:**
$$C_{final} = C_{target} \times (1 + L_{process})$$
Where $L_{process}$ (0.02) represents the validated loss factor derived from three technical batches (GLUC-2025-T1, T2, T3).

---

### 9. COMPATIBILITY WITH CONTAINER CLOSURE SYSTEM (CCS)

Extensive leachables and extractables (E&L) studies were performed according to **USP <1663>** and **USP <1664>**. The formulation components were tested against the Type I Borosilicate glass and the FluroTec® coated elastomer plungers.

**Table 7: E&L Compatibility Summary (GLUC-2025-EL01)**
| Component | Extraction Solvent | Result | Threshold of Toxicological Concern (TTC) |
| :--- | :--- | :--- | :--- |
| Silicon Oil | Formulation | < 0.1 mg/vial | Compliant |
| Zinc | Formulation | < 0.05 ppm | Compliant |
| Volatile Organics | Formulation | Non-detectable | Compliant |

---

### 10. REGULATORY CONFORMANCE AND GUIDELINES
The selection of components follows:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **ICH Q9:** Quality Risk Management.
*   **FDA Guidance for Industry:** Nonclinical Studies for the Safety Evaluation of Pharmaceutical Excipients.
*   **USP <1151>:** Pharmaceutical Dosage Forms.

All excipients used in Glucogen-XR are "Generally Recognized as Safe" (GRAS) and are used within levels specified in the FDA Inactive Ingredient Database (IID) for subcutaneous administration.

---
**Document End**
**Confidential - Property of Google Health Sciences**

---

## pH and Buffer Selection

### **Module 3: Quality | 3.2.P.2 Pharmaceutical Development**
**Document ID:** GHS-GLUC-XR-M3DP-004  
**Drug Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences (GHS), South San Francisco, CA  
**Section:** 3.2.P.2.2.1 pH and Buffer Selection  

---

#### **3.2.P.2.2.1.1 Overview and Rationale for Study Design**
The selection of the optimal pH and buffering system for Glucogen-XR (glucapeptide extended-release) injection is a critical quality attribute (CQA) optimization step. Given that glucapeptide is a synthetic-recombinant chimeric GLP-1 receptor agonist produced in the GHS-CHO-001 cell line, it possesses a complex folding architecture sensitive to electrostatic interactions. 

The primary objective of the pH and buffer selection studies was to identify a formulation environment that:
1.  **Maximizes Physical Stability:** Minimizes reversible and irreversible aggregation (HMWP formation).
2.  **Maximizes Chemical Stability:** Minimizes deamidation at Asn residues and oxidation at Met sites.
3.  **Ensures Isotonicity and Biocompatibility:** Maintains a physiological range suitable for subcutaneous (SC) extended-release delivery via the Google Health Sciences "Smart-Pen" autoinjector.
4.  **Optimizes Solubility:** Prevents liquid-liquid phase separation (LLPS) at the target concentration of 100 mg/mL.

---

#### **3.2.P.2.2.1.2 pH Solubility and Stability Profiling (Pre-formulation)**
An initial pH-rate profile was generated across a range of pH 3.0 to 9.0 using a universal buffer system (Carmody buffer) to eliminate buffer-type bias.

##### **Table 1: pH-Rate Profile and Solubility of Glucapeptide (Batch: GLUC-2025-001-ALPHA)**
| Test pH | Buffer System (20 mM) | Solubility (mg/mL) | % HMWP (T=0) | % HMWP (T=4wk @ 40°C) | Main Peak Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 3.0 | Citrate | 12.5 | 4.2% | 22.8% | 72.1% |
| 4.0 | Citrate-Phosphate | 18.2 | 2.1% | 15.6% | 81.4% |
| 4.5 | Acetate | 45.1 | 1.1% | 9.4% | 88.2% |
| 5.0 | Acetate | >150 | 0.4% | 3.2% | 96.1% |
| **5.5** | **Histidine-HCl** | **>200** | **0.2%** | **1.1%** | **98.5%** |
| 6.0 | Histidine-HCl | >200 | 0.3% | 1.8% | 97.4% |
| 7.0 | Phosphate | 145.0 | 0.8% | 5.4% | 92.1% |
| 8.0 | Tris-HCl | 92.4 | 1.5% | 11.2% | 85.3% |
| 9.0 | Glycine | 65.2 | 3.1% | 18.9% | 78.5% |

**Calculations for Isoelectric Point (pI):**  
Theoretical pI calculation based on amino acid sequence (GHS-Seq-01):  
$pI \approx \sum (pK_a \text{ values}) / n \rightarrow$ Calculated pI: **4.85**.  
Experimental determination via cIEF (Capillary Isoelectric Focusing) confirmed a pI range of **4.7 to 5.1** for various glycoforms. Stability is maximized at pH 5.5, approximately 0.5 units above the pI, minimizing net-zero charge aggregation.

---

#### **3.2.P.2.2.1.3 Buffer Species Selection and Concentration Optimization**
Following the identification of pH 5.5 ± 0.3 as the stability "sweet spot," various USP/NF grade buffering agents were evaluated.

##### **Study Protocol: GHS-PROT-2025-098**
1.  **Preparation:** Prepare five buffer systems at pH 5.5: L-Histidine/Histidine-HCl, Sodium Citrate/Citric Acid, Sodium Succinate, and Sodium Acetate.
2.  **Concentration Gradient:** Test each buffer at 5 mM, 10 mM, 15 mM, 20 mM, and 30 mM.
3.  **Stress Testing:** Samples (Batch GLUC-2025-002-BETA) were subjected to five freeze-thaw cycles (-80°C to 25°C) and agitation stress (300 rpm for 72 hours).
4.  **Analytical Endpoint:** Measurement of sub-visible particles (USP <788>) and SEC-HPLC for monomer loss.

##### **Table 2: Comparative Buffer Performance Data (100 mg/mL Glucapeptide)**
| Buffer ID | Conc (mM) | Post-Agitation Turbidity (NTU) | Sub-visible Particles (≥10µm) | Δ% Purity (SEC) |
| :--- | :--- | :--- | :--- | :--- |
| **L-Histidine** | **10** | **1.2** | **145** | **-0.05%** |
| L-Histidine | 20 | 1.1 | 132 | -0.04% |
| Citrate | 10 | 4.8 | 890 | -0.62% |
| Citrate | 20 | 5.2 | 1,120 | -0.85% |
| Acetate | 10 | 3.1 | 640 | -0.41% |
| Succinate | 15 | 2.5 | 450 | -0.33% |

**Result Summary:** L-Histidine at 10 mM demonstrated superior protection against agitation-induced aggregation. While 20 mM L-Histidine provided slightly better buffering capacity, 10 mM was selected to minimize the total ionic strength, thereby reducing the risk of viscosity-induced injection site pain.

---

#### **3.2.P.2.2.1.4 Buffering Capacity Calculations**
The Van Slyke buffering capacity ($\beta$) was calculated to ensure the formulation can maintain pH during shelf-life and upon contact with physiological subcutaneous fluid (pH 7.4).

**Formula:**
$$\beta = 2.303 \cdot C \cdot \frac{K_a \cdot [H^+]}{(K_a + [H^+])^2}$$
*Where:*
*   $C$ = Total buffer concentration (0.010 M)
*   $pK_a$ for Histidine (imidazole side chain) $\approx$ 6.0
*   Target pH = 5.5

**Calculated $\beta$ for 10 mM Histidine at pH 5.5:**  
$\beta \approx 0.0048$ mol/L/pH unit.  
This value provides sufficient resistance to pH drift caused by leaching from the Type I borosilicate glass vials or the Daikyo Flurotec® plungers while allowing the body's natural interstitial fluid to neutralize the site post-injection.

---

#### **3.2.P.2.2.1.5 Impact of pH on Viscosity and Injectability**
As Glucogen-XR is a high-concentration (100 mg/mL) formulation, the relationship between pH and viscosity is critical for autoinjector performance.

##### **Table 3: Viscosity Profile at Various pH Levels (Batch GLUC-2025-003-GAMMA)**
*Measurements taken at 25°C using a m-VROC Viscometer.*
| Sample pH | Buffer (10 mM) | Viscosity (cP) | Injection Force (N) (27G Needle) |
| :--- | :--- | :--- | :--- |
| 5.0 | Histidine | 14.2 | 18.5 |
| **5.5** | **Histidine** | **8.4** | **9.2** |
| 6.0 | Histidine | 9.8 | 10.5 |
| 6.5 | Phosphate | 12.1 | 14.8 |

**Conclusion:** pH 5.5 minimizes intermolecular protein-protein interactions (PPI), resulting in a viscosity of 8.4 cP, which is well within the "Smart-Pen" autoinjector specification of <15 N glide force.

---

#### **3.2.P.2.2.1.6 Robustness Testing (Design of Experiments - DoE)**
A full factorial DoE was conducted to evaluate the interaction between pH (5.2 – 5.8) and buffer concentration (8 – 12 mM).

##### **Table 4: DoE Results for pH Robustness (Storage: 6 Months @ 5°C)**
| Run ID | pH Target | Histidine (mM) | % HMWP | % Deamidation | pH Final (6mo) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DOE-01 | 5.2 | 8 | 0.82% | 0.45% | 5.24 |
| DOE-02 | 5.8 | 8 | 0.88% | 1.12% | 5.76 |
| **DOE-03** | **5.5** | **10** | **0.41%** | **0.65%** | **5.51** |
| DOE-04 | 5.2 | 12 | 0.79% | 0.44% | 5.21 |
| DOE-05 | 5.8 | 12 | 0.85% | 1.05% | 5.79 |

**Statistical Analysis:** Analysis of Variance (ANOVA) indicated that pH is the dominant factor for deamidation ($p < 0.001$), while buffer concentration within this range had no statistically significant impact on aggregation. The "Design Space" for pH is established as 5.5 ± 0.2.

---

#### **3.2.P.2.2.1.7 Regulatory Compliance and Pharmacopeial Standards**
The selection process adheres to:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **USP <791>:** pH measurement protocols using calibrated electrode systems.
*   **USP <1059>:** Excipient performance and characterization.
*   **FDA Guidance for Industry:** "Submitting Documentation for the Manufacturing of and Controls for Drug Products" (Section VII: Stability).

All buffer components used in these studies (L-Histidine: Cat# HIST-1092; Histidine-HCl: Cat# HHCL-2021) are sourced from vendors compliant with cGMP and are tested against current USP/NF monographs prior to use in GLUC-2025 series batches.

---
**Author:** *Senior Regulatory Specialist, Google Health Sciences*  
**Date:** 14-Oct-2024  
**Document Status:** Final Approval (Internal ID: GHS-QA-2024-9981)

---

## Excipient Compatibility Studies

### 3.2.P.2.2.1.4 Excipient Compatibility Studies

#### 1.0 Executive Summary
The pharmaceutical development of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line, necessitates a rigorous evaluation of the physicochemical compatibility between the active pharmaceutical ingredient (API) and potential functional excipients. Given the high-order structural complexity of the glucapeptide—specifically its propensity for deamidation at the Asn-28 residue and oxidation at Met-8—the selection of an optimized excipient matrix is critical for maintaining long-term stability in the pre-filled syringe (PFS) presentation.

This section details the comprehensive compatibility screening (Phase I) and formal binary/ternary mixture stability studies (Phase II) conducted at Google Health Sciences’ South San Francisco facility. Studies were designed in alignment with ICH Q8(R2) *Pharmaceutical Development* and ICH Q1A(R2) *Stability Testing of New Drug Substances and Products*.

#### 2.0 Scope and Objectives
The primary objective of these studies was to identify potential deleterious interactions between Glucogen-XR and a library of compendial (USP/NF, Ph. Eur., JP) excipients. The studies focused on:
1.  **Chemical Stability:** Quantifying impurities, degradants, and covalent modifications via SE-HPLC, RP-HPLC, and LC-MS/MS.
2.  **Physical Stability:** Assessing protein aggregation, sub-visible particulate formation (MFI/HIAC), and secondary structure changes (Circular Dichroism).
3.  **Conformational Integrity:** Monitoring thermodynamic stability via Differential Scanning Calorimetry (DSC).

#### 3.0 Materials and Methods

##### 3.1 Drug Substance (API) Specifications
The API utilized for all compatibility studies was derived from Batch **GLUC-2025-AS-014**, a GMP-grade drug substance lot characterized by a purity of 99.4% (RP-HPLC) and a monomeric content of 99.8% (SEC).

**Table 1: Input API Specifications (Batch GLUC-2025-AS-014)**
| Parameter | Method | Specification | Result |
| :--- | :--- | :--- | :--- |
| Appearance | Visual Inspection | Clear to slightly opalescent | Conforms |
| Purity (%) | RP-HPLC | ≥ 98.0% | 99.4% |
| High Molecular Weight Species (%) | SE-HPLC | ≤ 1.0% | 0.2% |
| Deamidation (Relative %) | LC-MS/MS | < 1.5% | 0.35% |
| Bacterial Endotoxins | USP <85> | < 0.5 EU/mg | < 0.1 EU/mg |

##### 3.2 Excipient Library Selection
Excipients were selected based on their functional roles in the extended-release subcutaneous matrix, including buffering agents, tonicity modifiers, surfactants, and cryoprotectants.

**Table 2: List of Evaluated Excipients and Suppliers**
| Excipient Name | Function | Grade | Batch Number |
| :--- | :--- | :--- | :--- |
| L-Histidine | Buffering Agent | USP/EP | HIST-2024-092 |
| Sucrose | Cryoprotectant/Stabilizer | Ultra-Pure | SUCR-GH-551 |
| Polysorbate 80 (PS80) | Surfactant | Multi-Compendial | PS80-991-X |
| Sodium Chloride (NaCl) | Tonicity Modifier | USP | NACL-1122 |
| m-Cresol | Preservative | Ph. Eur. | MCRE-4401 |
| PLGA (50:50) | Release Matrix | Resomer® | PLGA-RES-009 |

#### 4.0 Phase I: Binary Mixture Screening Protocol
Binary mixtures were prepared at a 1:1 ratio (w/w) or at the maximum intended concentration relative to the API (5 mg/mL) to amplify potential degradation signals.

##### 4.1 Sample Preparation Procedure (Standard Operating Procedure GHS-DEV-772)
1.  **Preparation of API Stock:** Glucogen-XR API was concentrated to 10 mg/mL in 10 mM Histidine (pH 6.0) via tangential flow filtration (TFF).
2.  **Excipient Solution Preparation:** Each excipient was dissolved in Milli-Q water at 2x the target concentration.
3.  **Mixing:** 500 µL of API stock was mixed with 500 µL of excipient solution in a sterile 2R Type I borosilicate glass vial.
4.  **Sealing:** Vials were stoppered with FluroTec® coated chlorobutyl stoppers and crimped.
5.  **Incubation:** Samples were stored at 40°C ± 2°C / 75% RH ± 5% RH (Accelerated) and 25°C ± 2°C / 60% RH (Real-time) for 4 weeks.

#### 5.0 Analytical Characterization and Results

##### 5.1 Size-Exclusion Chromatography (SEC) Analysis
SEC was employed to detect soluble aggregates and fragments using a Tosoh TSKgel G3000SWxl column.

**Table 3: % Monomer Content in Binary Mixtures (T=4 Weeks, 40°C/75% RH)**
| Sample Code | Binary Pair (API + X) | T=0 Monomer (%) | T=4W Monomer (%) | Δ Change |
| :--- | :--- | :--- | :--- | :--- |
| CTRL-01 | API (Control) | 99.82 | 99.10 | -0.72 |
| BIN-01 | API + Sucrose | 99.85 | 99.45 | -0.40 |
| BIN-02 | API + PS80 | 99.81 | 99.20 | -0.61 |
| BIN-03 | API + m-Cresol | 99.80 | 95.12 | -4.68* |
| BIN-04 | API + NaCl (150mM)| 99.83 | 98.40 | -1.43 |

*\*Note: Significant reduction in monomeric content observed with m-Cresol, suggesting hydrophobic interaction-driven aggregation.*

##### 5.2 Reversed-Phase HPLC (RP-HPLC) Analysis
RP-HPLC was utilized to monitor chemical modifications, specifically the oxidation of methionine residues and deamidation of asparagine.

**Table 4: Total Related Substances and Purity (T=4 Weeks, 40°C/75% RH)**
| Sample Code | Primary Degradant (RRT 1.12) | Deamidation (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- |
| CTRL-01 | 0.22 | 0.35 | 0.57 |
| BIN-01 | 0.18 | 0.38 | 0.56 |
| BIN-05 | 0.45* | 0.92 | 1.37 |
| BIN-06 (PLGA) | 0.65 | 1.25 | 1.90 |

*\*Sample BIN-05 (API + Mannitol) showed a slight increase in oxidative species compared to Sucrose.*

#### 6.0 Phase II: Forced Degradation and Interaction Studies (Batch GLUC-2025-EXP-301)
To further explore the incompatibility noted with m-Cresol, a Phase II study was initiated using a Design of Experiments (DoE) approach to evaluate the impact of pH (5.5, 6.0, 6.5) and surfactant concentration on preservative-induced aggregation.

##### 6.1 DoE Matrix and Results
A 3-factor, 2-level Full Factorial design was implemented.

**Table 5: Phase II DoE Results for Glucogen-XR Stability**
| Run ID | pH | PS80 (mg/mL) | m-Cresol (mg/mL) | Turbidity (NTU) | SEC %HMW |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DOE-01 | 5.5 | 0.01 | 3.0 | 12.4 | 4.2% |
| DOE-02 | 6.5 | 0.01 | 3.0 | 8.9 | 3.1% |
| DOE-03 | 5.5 | 0.10 | 1.5 | 2.1 | 0.8% |
| DOE-04 | 6.5 | 0.10 | 1.5 | 1.5 | 0.5% |

**Statistical Analysis (ANOVA):**
The analysis indicated a statistically significant interaction (p < 0.005) between pH and PS80 concentration. Higher surfactant concentrations (0.10 mg/mL) effectively mitigated the preservative-induced aggregation of Glucogen-XR by providing a protective "micellar shield" around the peptide’s hydrophobic core.

#### 7.0 Differential Scanning Calorimetry (DSC)
The thermodynamic stability of the glucapeptide in the presence of the lead formulation excipients was evaluated using a TA Instruments Nano-DSC.

*   **Baseline Formulation:** 10 mM Histidine, pH 6.0
*   **Tm1 (Melting Temp):** 68.4°C
*   **Enthalpy (ΔH):** 412 kJ/mol

**Table 6: Impact of Excipients on Thermal Transition (Tm1)**
| Excipient Added | Concentration | Tm1 (°C) | ΔTm |
| :--- | :--- | :--- | :--- |
| Sucrose | 10% w/v | 71.2 | +2.8 |
| NaCl | 150 mM | 66.1 | -2.3 |
| PS80 | 0.02% w/v | 68.5 | +0.1 |

*Interpretation:* Sucrose provides significant thermal stabilization (preferential exclusion mechanism), increasing the Tm by 2.8°C. NaCl slightly destabilizes the protein structure, likely due to charge shielding effects on the peptide's electrostatic stabilization.

#### 8.0 Compatibility with Primary Packaging Materials
Compatibility was also extended to the contact surfaces of the Google Health Sciences proprietary delivery device.

**Table 7: Contact Surface Compatibility (4-Week Extraction Study)**
| Component | Material | Test Parameter | Result |
| :--- | :--- | :--- | :--- |
| Syringe Barrel | Cyclic Olefin Polymer (COP) | Adsorption | < 2% Loss |
| Plunger Stopper | FluroTec® Coated | Extractables | Below LOD |
| Needle | 29G Stainless Steel | Metal Leaching | < 10 ppb (Fe, Ni) |

#### 9.0 Conclusions and Final Excipient Selection
Based on the comprehensive excipient compatibility studies (Batches GLUC-2025-XXX), the following conclusions were drawn:
1.  **Buffering:** L-Histidine at pH 6.0 provides the optimal balance between solubility and chemical stability.
2.  **Stabilization:** Sucrose (8% w/v) is required to prevent aggregation during freeze-thaw cycles and long-term storage.
3.  **Surfactant:** Polysorbate 80 (0.02% w/v) is essential to mitigate surface-induced aggregation and compatibility issues with m-Cresol if used in multi-dose presentations.
4.  **Incompatibilities:** Mannitol showed a higher oxidative potential compared to sucrose and was excluded from the final formulation. Sodium chloride concentrations above 100 mM were found to reduce the peptide’s melting temperature (Tm).

The finalized formulation (Formulation F12) was selected for further GLP toxicology and Clinical Phase I/II trials.

#### 10.0 References
1. ICH Q8(R2) Pharmaceutical Development, Section 2.1.
2. USP <1207> Package Integrity Evaluation.
3. Wang, W., "Instability, stabilization, and formulation of liquid protein pharmaceuticals," Int. J. Pharm., 1999.
4. Google Health Sciences internal report: GHS-RPT-2025-004: *Biophysical Characterization of GLUC-2025 Series.*

---

# Stability and Degradation Pathways

## Physical Stability (Aggregation, Precipitation)

### 3.2.P.2.1.3 Physical Stability: Aggregation, Precipitation, and Sub-visible Particulate Matter

#### 3.2.P.2.1.3.1 Executive Summary of Physical Degradation Pathways
The physical stability of Glucogen-XR (glucapeptide extended-release) represents a critical quality attribute (CQA) due to the inherent propensity of GLP-1 receptor agonists to undergo non-covalent association, leading to the formation of soluble aggregates, insoluble precipitates, and fibrillar structures. Google Health Sciences (GHS) has conducted extensive characterization of these pathways under Section 3.2.P.2.2.1. 

Glucogen-XR, as a synthetic peptide-polymer conjugate, exhibits a complex thermodynamic profile. The aggregation kinetics are influenced by primary sequence motifs (specifically the hydrophobic patch at residues 22-27), concentration-dependent molecular crowding, and the presence of the extended-release matrix components. This section details the experimental evidence, analytical methodologies, and mitigation strategies employed to ensure the physical integrity of Glucogen-XR over its proposed 24-month shelf life.

#### 3.2.P.2.1.3.2 Analytical Methodologies for Physical Stability Assessment
To provide a comprehensive overview of the physical state of the Drug Product (DP), an orthogonal analytical suite was deployed. This approach aligns with **FDA Guidance for Industry: Immunogenicity Assessment for Therapeutic Protein Products (2014)** and **USP <787> Subvisible Particulate Matter in Therapeutic Protein Injections**.

| Technique | Parameter Measured | Sensitivity Range | Regulatory/Compendial Reference |
| :--- | :--- | :--- | :--- |
| **SE-UPLC** | Soluble Aggregates (Dimers, HMW species) | 1 nm – 50 nm | USP <129> |
| **DLS** | Hydrodynamic Radius (Rh), Polydispersity Index (PdI) | 0.5 nm – 1 µm | ISO 22412 |
| **MFI-5200** | Sub-visible Particles (Morphology & Count) | 2 µm – 70 µm | USP <788> / USP <787> |
| **Thioflavin T (ThT)** | Amyloid-like Fibril Formation | Fluorescence units | In-house Validated Method |
| **Nanosight (NTA)** | Particle Concentration and Size Distribution | 10 nm – 1000 nm | ASTM E2834-12 |
| **Turbidimetry (A350)** | Gross Precipitation / Opalescence | Absorbance units | Ph. Eur. 2.2.1 |

---

#### 3.2.P.2.1.3.3 Assessment of Soluble Aggregation (SE-UPLC Analysis)
Soluble aggregates are defined as non-covalent or covalent multimeric forms of the Glucogen-XR peptide that remain in solution but may compromise potency or increase immunogenic risk.

##### 3.2.P.2.1.3.3.1 Batch Analysis and Results
Data from three primary stability batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) stored at the intended storage condition (5°C ± 3°C) and accelerated conditions (25°C/60% RH) are provided below.

**Table 3.2.P.2.1.3-1: SE-UPLC Results for Glucogen-XR Stability Batches (% High Molecular Weight - %HMW)**

| Batch ID | Time Point | Storage Condition | % Monomer | % HMW (Dimer) | % HMW (Oligomer) | Total Aggregates |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | T=0 | N/A | 99.42 | 0.48 | 0.10 | 0.58 |
| | T=6M | 5°C | 99.21 | 0.62 | 0.17 | 0.79 |
| | T=12M | 5°C | 98.95 | 0.81 | 0.24 | 1.05 |
| | T=24M (est) | 5°C | 98.60 | 1.10 | 0.30 | 1.40 |
| | T=3M | 25°C/60% RH | 97.80 | 1.65 | 0.55 | 2.20 |
| **GLUC-2025-002** | T=0 | N/A | 99.55 | 0.38 | 0.07 | 0.45 |
| | T=6M | 5°C | 99.30 | 0.55 | 0.15 | 0.70 |
| | T=12M | 5°C | 99.10 | 0.72 | 0.18 | 0.90 |
| **GLUC-2025-003** | T=0 | N/A | 99.38 | 0.50 | 0.12 | 0.62 |
| | T=6M | 5°C | 99.15 | 0.65 | 0.20 | 0.85 |
| | T=12M | 5°C | 98.88 | 0.88 | 0.24 | 1.12 |

##### 3.2.P.2.1.3.3.2 Kinetic Modeling of Aggregation
The rate of aggregation ($k_{agg}$) was calculated using a first-order kinetic model for the initial 12 months:
$$Ln(C_t / C_0) = -k \cdot t$$
Where $C_t$ is the monomer concentration at time $t$. For batch GLUC-2025-001 at 25°C, the calculated rate constant $k$ was $2.4 \times 10^{-3}$ month⁻¹, indicating a highly stable monomeric state compared to non-extended release GLP-1 analogs.

---

#### 3.2.P.2.1.3.4 Sub-visible Particulate Matter (USP <787> and <788>)
Sub-visible particles (SVP) are a critical safety concern. Google Health Sciences utilizes Micro-Flow Imaging (MFI) to differentiate between silicone oil droplets, air bubbles, and proteinaceous aggregates.

##### 3.2.P.2.1.3.4.1 MFI Protocol for Glucogen-XR
1. **Instrument Preparation:** MFI-5200 equipped with a 100 µm flow cell.
2. **System Suitability:** Verify with 10 µm NIST-traceable polystyrene beads (Acceptance: 2700-3300 particles/mL).
3. **Sample Preparation:** Degas sample at 20 kPa for 10 minutes to remove air bubbles.
4. **Analysis:** Run 0.5 mL of sample (Batch GLUC-2025-XXX) with a 0.2 mL pre-run flush.
5. **Image Analysis:** Apply "Shape Filters" to exclude particles with Circularity > 0.95 (identified as silicone oil).

**Table 3.2.P.2.1.3-2: Sub-visible Particle Counts via MFI (Particles per Container)**

| Batch ID | Condition | Time | ≥ 2 µm | ≥ 10 µm | ≥ 25 µm | Morphology Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 5°C | T=0 | 1,240 | 85 | 4 | Translucent, irregular |
| | 5°C | T=12M | 3,150 | 142 | 9 | Low aspect ratio |
| | 40°C (Stress) | T=1M | 18,400 | 980 | 45 | High ECD, fibrillar |
| **USP <788> Limit** | | | **N/A** | **< 6000** | **< 600** | |

*Discussion:* All stability batches remained significantly below the USP <788> limits for particles ≥10 µm and ≥25 µm. The slight increase at 12 months is attributed to the slow degradation of the extended-release polymer matrix, releasing small fragments of non-immunogenic poly(lactic-co-glycolic acid) (PLGA) derivatives.

---

#### 3.2.P.2.1.3.5 Fibrillization Potential (Thioflavin T Assay)
The secondary structure of Glucogen-XR contains a propensity for $\beta$-sheet transition, leading to amyloid-like fibrils. This is monitored via ThT fluorescence.

**Protocol GHS-QC-STB-09:**
1. Prepare ThT stock solution (5 mM in PBS, pH 7.4).
2. Dilute Glucogen-XR sample (Batch GLUC-2025-XXX) to 1.0 mg/mL.
3. Mix sample and ThT to a final concentration of 50 µM ThT.
4. Incubate at 37°C with continuous orbital shaking (300 rpm).
5. Measure fluorescence (Ex: 440 nm, Em: 482 nm) every 15 minutes for 72 hours.

**Table 3.2.P.2.1.3-3: Lag Time to Fibrillization (Lag-T)**

| Formulation Variant | Batch Number | Lag Time (Hours) | Max Fluorescence (RFU) |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR (Final)** | GLUC-2025-001 | > 120 | 14 |
| **GHS-001 (No Poloxamer)** | GLUC-EXP-R&D | 18 | 480 |
| **Positive Control (Insulin)** | REF-INS-01 | 4 | 1,200 |

*Conclusion:* The incorporation of Poloxamer 188 in the Glucogen-XR formulation effectively inhibits the nucleation phase of fibrillization, extending the lag time beyond the window of clinical relevance.

---

#### 3.2.P.2.1.3.6 Effect of Mechanical Stress (Agitation and Freeze-Thaw)
To simulate transport and handling, Glucogen-XR was subjected to mechanical stress studies according to **ICH Q1A(R2)**.

##### 3.2.P.2.1.3.6.1 Agitation Study (Orbital Shaking)
- **Procedure:** 10 vials of GLUC-2025-002 were shaken at 300 rpm for 48 hours at 25°C.
- **Results:** No visible precipitation was observed. SE-UPLC showed a marginal increase in dimers from 0.42% to 0.51%. MFI counts for ≥10 µm particles increased from 90 to 210 particles/mL, well within specification.

##### 3.2.P.2.1.3.6.2 Freeze-Thaw Stability
Glucogen-XR is a "Refrigerate, Do Not Freeze" product. However, to evaluate the impact of accidental excursions:
- **Procedure:** 5 cycles of -20°C to 5°C.
- **Data (Batch GLUC-2025-003):**
    - Cycle 0: 99.4% Monomer
    - Cycle 1: 98.9% Monomer
    - Cycle 3: 97.2% Monomer (Observed Opalescence)
    - Cycle 5: 94.5% Monomer (Visible Precipitation)
- **Regulatory Action:** Based on these data, a "Protect from Freezing" warning is mandated on the primary and secondary packaging.

---

#### 3.2.P.2.1.3.7 Mathematical Correlation of Aggregation to Potency Loss
A linear regression analysis was performed to correlate the increase in %HMW (Total Aggregates) with the loss of biological activity as measured by the *in vitro* cAMP activation assay (Section 3.2.S.4.3).

**Equation:**
$$Potency (\%) = 100.4 - 1.85 \times (\%HMW)$$
*R² = 0.982*

For every 1% increase in high molecular weight species, a corresponding 1.85% decrease in receptor activation is observed. This correlation justifies the shelf-life specification of %HMW < 3.0%, ensuring the product remains within the 90-110% potency range.

---

#### 3.2.P.2.1.3.8 Conclusion on Physical Stability
The physical stability data for Glucogen-XR (Batches GLUC-2025-001, -002, -003) demonstrate a robust product profile. The combination of the proprietary GHS-CHO-001 cell line-derived peptide and the optimized surfactant system minimizes aggregation and precipitation. Under the recommended storage conditions (5°C), the product maintains a monomeric purity > 98.5% and sub-visible particle counts far below compendial limits for the duration of the 24-month registration period.

**References:**
1.  ICH Q5C: Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
2.  Wang, W. (2005). "Protein aggregation and its inhibition in biopharmaceutics." *International Journal of Pharmaceutics*.
3.  USP <787> Subvisible Particulate Matter in Therapeutic Protein Injections.

---

## Chemical Stability (Deamidation, Oxidation)

### **3.2.P.2 PHARMACEUTICAL DEVELOPMENT**
### **3.2.P.2.1 DRUG PRODUCT COMPONENTS**
### **3.2.P.2.2 DRUG PRODUCT CHARACTERIZATION**
#### **3.2.P.2.2.4 Stability and Degradation Pathways**
##### **3.2.P.2.2.4.1 Chemical Stability: Deamidation and Oxidation Kinetics**

---

#### **1. INTRODUCTION AND SCOPE**

This section provides a comprehensive technical evaluation of the chemical stability profile of **Glucogen-XR (glucapeptide extended-release)**, focusing specifically on the primary degradation pathways of deamidation and oxidation. Given the primary sequence of the glucapeptide (a 31-amino acid synthetic GLP-1 receptor agonist analog), several residues are inherently susceptible to chemical modification under accelerated and long-term storage conditions.

Google Health Sciences (GHS) has conducted extensive forced degradation, real-time stability, and stress-testing studies in accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products** and **ICH Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products**.

The objective of these studies was to:
1.  Identify specific "hotspots" for deamidation (Asn, Gln) and oxidation (Met, His, Trp).
2.  Quantify the rate constants ($k$) for these reactions across a pH range of 3.0 to 8.5.
3.  Establish the shelf-life impact of these impurities on the potency and safety profile of Glucogen-XR.
4.  Validate the analytical methodologies (RP-HPLC, LC-MS/MS, and cIEF) used to monitor these variants.

---

#### **2. DEAMIDATION PATHWAYS AND KINETICS**

Deamidation of asparagine (Asn) and glutamine (Gln) residues is a major degradation pathway for Glucogen-XR, leading to the formation of aspartate/isoaspartate and glutamate derivatives, respectively. These modifications introduce a negative charge, altering the isoelectric point (pI) and potentially affecting the binding affinity to the GLP-1 receptor.

##### **2.1 Identification of Deamidation Sites**
High-resolution Orbitrap mass spectrometry (LC-MS/MS) following tryptic and Asp-N digestion identified the following susceptible sites:
*   **Primary Site:** Asn-28 (located in the C-terminal flexible tail).
*   **Secondary Site:** Asn-14 (located within the alpha-helical core).
*   **Tertiary Site:** Gln-20 (minor contribution).

##### **2.2 Chemical Mechanism of Asn-28 Deamidation**
At physiological and formulation pH (pH 7.4), Asn-28 undergoes deamidation via a cyclic succinimide intermediate (Asu). The nucleophilic attack of the peptide bond nitrogen on the side-chain carbonyl of Asn results in the formation of L-succinimide, which then hydrolyzes into a mixture of L-aspartyl (L-Asp) and L-isoaspartyl (L-isoAsp) residues in an approximate ratio of 1:3.

**Equation 1: Rate of Deamidation**
$$ln([Asn]_t / [Asn]_0) = -k_{deam} \cdot t$$
Where $k_{deam}$ is the first-order rate constant influenced by temperature ($T$) and pH.

##### **2.3 Experimental Data: Deamidation Profiling**
The following data represents the analysis of three clinical batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) stored at $25^\circ\text{C}/60\%\text{RH}$ (Accelerated) and $5^\circ\text{C}$ (Long-term).

**Table 1: Percentage of Deamidated Variants (Asn-28 + Asn-14) Measured by RP-HPLC**

| Batch Number | Time Point (Months) | Storage Cond. | Total Deamidated (%) | L-isoAsp Variant (%) | L-Asp Variant (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0 (Release) | N/A | 0.42 | 0.31 | 0.11 |
| | 3 | $5^\circ\text{C}$ | 0.48 | 0.35 | 0.13 |
| | 6 | $5^\circ\text{C}$ | 0.55 | 0.40 | 0.15 |
| | 12 | $5^\circ\text{C}$ | 0.72 | 0.54 | 0.18 |
| | 3 | $25^\circ\text{C}$ | 1.85 | 1.38 | 0.47 |
| | 6 | $25^\circ\text{C}$ | 3.42 | 2.56 | 0.86 |
| **GLUC-2025-002** | 0 (Release) | N/A | 0.38 | 0.28 | 0.10 |
| | 12 | $5^\circ\text{C}$ | 0.69 | 0.51 | 0.18 |
| | 6 | $25^\circ\text{C}$ | 3.33 | 2.49 | 0.84 |
| **GLUC-2025-003** | 0 (Release) | N/A | 0.45 | 0.33 | 0.12 |
| | 12 | $5^\circ\text{C}$ | 0.78 | 0.58 | 0.20 |
| | 6 | $25^\circ\text{C}$ | 3.55 | 2.66 | 0.89 |

---

#### **3. OXIDATION PATHWAYS AND KINETICS**

Oxidation in Glucogen-XR primarily affects the Methionine (Met-8) and Tryptophan (Trp-31) residues. Methionine oxidation to methionine sulfoxide increases the polarity of the side chain and can significantly disrupt the hydrophobic interactions required for receptor activation.

##### **3.1 Identification of Oxidation Sites**
Forced degradation using 0.03% hydrogen peroxide ($H_2O_2$) at room temperature for 4 hours confirmed:
*   **Site 1:** Met-8 (Highly susceptible; surface-exposed).
*   **Site 2:** Trp-31 (Susceptible to photo-oxidation and radical-mediated pathways).

##### **3.2 Analytical Procedure for Oxidation Quantitation (SOP-GHS-QC-088)**
1.  **Enzymatic Digestion:** Dilute Drug Product to 1.0 mg/mL in 50 mM Tris-HCl, pH 7.5. Add Trypsin at a 1:20 (w/w) ratio. Incubate at $37^\circ\text{C}$ for 4 hours.
2.  **Quenching:** Add 1% Trifluoroacetic acid (TFA) to stop the reaction.
3.  **LC-MS Analysis:** Inject 10 $\mu$L onto a Waters ACQUITY UPLC C18 Column (1.7 $\mu$m, 2.1 x 150 mm).
4.  **Mobile Phases:** A: 0.1% FA in Water; B: 0.1% FA in Acetonitrile.
5.  **Detection:** Tandem Mass Spectrometry (MS/MS) monitoring $m/z$ shifts of +16 Da (sulfoxide) and +32 Da (sulfone).

##### **3.3 Experimental Data: Oxidation Rates**
The following table summarizes the levels of Met-8 Sulfoxide observed during the 24-month stability program.

**Table 2: Quantitation of Met-8 Oxidation (%) by Peptide Mapping LC-MS**

| Batch Number | Condition | 0 mo | 6 mo | 12 mo | 18 mo | 24 mo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | $5^\circ\text{C}$ | 0.12 | 0.15 | 0.19 | 0.24 | 0.29 |
| | $25^\circ\text{C}/60\%$ | 0.12 | 0.88 | 1.74 | 2.61 | 3.50 |
| | $40^\circ\text{C}/75\%$ | 0.12 | 4.12 | 8.45 | N/A* | N/A* |
| **GLUC-2025-002** | $5^\circ\text{C}$ | 0.10 | 0.14 | 0.18 | 0.22 | 0.27 |
| | $25^\circ\text{C}/60\%$ | 0.10 | 0.91 | 1.82 | 2.70 | 3.65 |
| **GLUC-2025-003** | $5^\circ\text{C}$ | 0.15 | 0.18 | 0.22 | 0.28 | 0.33 |
| | $25^\circ\text{C}/60\%$ | 0.15 | 0.95 | 1.90 | 2.85 | 3.80 |

*\*Note: Testing discontinued at $40^\circ\text{C}$ after 12 months due to significant aggregation exceeding specifications.*

---

#### **4. INFLUENCE OF PH AND FORMULATION EXCIPIENTS**

The formulation of Glucogen-XR includes a phosphate-citrate buffer system designed to maintain pH at 7.4 $\pm$ 0.2. This pH was selected based on a comprehensive "pH-stability profile" (pH 3.0 to 9.0) study.

##### **4.1 pH-Rate Profile Study (Protocol PHT-2024-GHS)**
*   **Procedure:** Glucogen-XR was diluted in universal buffers (Britton-Robinson) at pH intervals of 1.0. Samples were incubated at $40^\circ\text{C}$ for 30 days.
*   **Observation:** Deamidation rates were found to be minimal at pH 4.5. However, the peptide solubility and the extended-release polymer (PLGA-PEG) performance are optimized at pH 7.4.
*   **Conclusion:** The choice of pH 7.4 represents a balance between chemical stability and biological delivery efficiency. To mitigate deamidation at this pH, the formulation is stored at $2-8^\circ\text{C}$.

##### **4.2 Statistical Correlation: Deamidation vs. Potency**
A statistical analysis was performed to determine the "Critical Impurity Threshold."
*   **Model:** Linear regression of % Deamidation vs. % Relative Potency (cell-based bioassay).
*   **Result:** $R^2 = 0.982$. Every 1% increase in Total Deamidation results in a 0.75% decrease in relative potency.
*   **Specification Limit:** Based on this data, the specification for "Total Deamidated Species" is set at $\leq$ 5.0% to ensure the product remains within the potency limit of 90-110%.

---

#### **5. ANALYTICAL METHOD VALIDATION SUMMARY**

Monitoring of these chemical modifications is performed using the primary stability-indicating method: **RP-HPLC (Method MET-GLUC-002)**.

**Table 3: Validation Parameters for RP-HPLC Monitoring of Deamidation/Oxidation**

| Parameter | Result | Acceptance Criteria |
| :--- | :--- | :--- |
| **Specificity** | No interference from excipients or placebo | Peak purity index > 990 |
| **Linearity (Deamidation)** | $R^2 = 0.9998$ (0.1% to 10.0%) | $R^2 \geq 0.995$ |
| **LOD (Oxidation)** | 0.02% (w/w) | Reportable |
| **LOQ (Oxidation)** | 0.05% (w/w) | $\leq$ 0.10% |
| **Repeatability (n=6)** | RSD = 1.2% | RSD $\leq$ 2.0% |
| **Intermediate Precision** | RSD = 1.8% | RSD $\leq$ 3.0% |

---

#### **6. CONCLUSION**

The chemical stability of Glucogen-XR is well-characterized. Under the recommended storage condition of $5^\circ\text{C}$, the degradation via deamidation and oxidation is negligible, with predicted levels remaining well within the clinical safety and efficacy specifications for a 24-month shelf life. The use of refrigerated storage and high-purity excipients effectively suppresses the Met-8 oxidation and Asn-28 deamidation kinetics.

**Reference:**
1.  *ICH Q1A(R2) Stability Testing of New Drug Substances and Products.*
2.  *Patel, J. et al. (2022). "Kinetics of Deamidation in GLP-1 Analogs." Journal of Pharmaceutical Sciences.*
3.  *GHS Internal Report RPT-GLUC-2024-044: Forced Degradation Studies.*

---

## Formulation Optimization for Stability

# MODULE 3: QUALITY (MODALITIES: BIOLOGICS/PEPTIDES)
## SECTION 3.2.P: DRUG PRODUCT (GLUCOGEN-XR)
### SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
#### SUBSECTION 3.2.P.2.2.4: FORMULATION OPTIMIZATION FOR STABILITY

---

### 1.0 INTRODUCTION AND SCOPE
The development of the Glucogen-XR (glucapeptide extended-release) formulation represents a multi-year, iterative optimization process designed to ensure the physical, chemical, and conformational stability of the GLP-1 receptor agonist over a shelf-life exceeding 24 months at 2-8°C, and 30 days at room temperature (25°C). 

As a synthetic-biological hybrid peptide produced in the proprietary **GHS-CHO-001 cell line**, Glucogen-XR presents unique stability challenges, including high susceptibility to deamidation at the Asn-Gly motifs, C-terminal hydrolysis, and concentration-dependent aggregation (fibrillation) common to the glucagon-like peptide family. This section details the systematic "Quality by Design" (QbD) approach used to arrive at the final commercial formulation.

---

### 2.0 PHYSICOCHEMICAL DEGRADATION RISK ASSESSMENT
Prior to formulation optimization, Google Health Sciences (GHS) conducted a comprehensive Forced Degradation Study (FDS) on the drug substance (DS) to identify the primary pathways of instability.

#### Table 2.1: Identified Degradation Pathways for Glucogen-XR
| Degradation Pathway | Primary Site/Mechanism | Impact on Efficacy/Safety | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Deamidation** | Asn28, Asn34 (Asn-Gly sites) | Reduced receptor binding affinity | pH optimization (target 6.8 - 7.2) |
| **Oxidation** | Met8, Trp31 | Formation of sulfoxides; potential immunogenicity | Addition of L-Methionine/Antioxidants |
| **Aggregation** | Non-covalent β-sheet formation (Fibrillation) | Loss of potency; injection site reactions | Addition of Poloxamer 188 / Polysorbate 20 |
| **Hydrolysis** | Peptide bond cleavage at Asp-Pro | Fragmentation | Controlled ionic strength |
| **Adsorption** | Hydrophobic interactions with glass/needles | Sub-visible particle formation | Non-ionic surfactant optimization |

---

### 3.0 FORMULATION SCREENING PHASES (DoE)

Google Health Sciences utilized a **Design of Experiments (DoE)** approach, leveraging Google Cloud's Vertex AI to model 12,400 formulation variants based on initial high-throughput screening.

#### 3.1 Phase I: Buffer Selection and pH Optimization
The objective was to identify the pH of maximum stability (the "Isoelectric Minimum of Degradation").

**Protocol 3.1.A: High-Throughput pH Stability Mapping**
1. Prepare 50mM buffer solutions ranging from pH 4.0 to 9.0 in 0.2 unit increments.
2. Formulate Glucogen-XR at 5.0 mg/mL in each buffer.
3. Stress samples at 40°C for 14 days.
4. Analyze via RP-HPLC (Purity) and SEC-HPLC (Aggregation).

**Results: Data Table 3.1**
*Batch Series: GLUC-2025-SC-001 through GLUC-2025-SC-025*

| Buffer System | Target pH | Purity (T=0) | Purity (T=14d @ 40C) | Aggregation (%) |
| :--- | :--- | :--- | :--- | :--- |
| Citrate | 4.5 | 98.2% | 72.1% | 8.4% |
| Acetate | 5.5 | 98.1% | 81.4% | 4.2% |
| Histidine | 6.0 | 98.4% | 89.9% | 1.1% |
| **Phosphate** | **7.0** | **98.6%** | **94.2%** | **0.4%** |
| Tris-HCl | 8.0 | 98.3% | 84.5% | 2.1% |

**Conclusion:** A Phosphate-based buffer at pH 7.0 ± 0.2 was selected to minimize deamidation and maximize solubility.

---

### 4.0 OPTIMIZATION OF STABILIZING EXCIPIENTS (PHASE II)

#### 4.1 Surfactant Selection for Anti-Aggregation
Glucogen-XR is highly prone to surface-induced denaturation. We evaluated Polysorbate 20 (PS20), Polysorbate 80 (PS80), and Poloxamer 188 (P188).

**Calculation 4.1: Critical Micelle Concentration (CMC) Adjustment**
To ensure protection, the surfactant concentration must exceed the CMC in the presence of the peptide.
$$C_{surfactant} \geq 3 \times CMC_{effective}$$
For Poloxamer 188 in this matrix, $CMC \approx 0.1 mg/mL$.

#### Table 4.1: Surfactant Stability Study (Batch GLUC-2025-SURF)
| Excipient | Conc (%) | Sub-visible Particles (≥10µm) | % High Mol. Wt. Species (SEC) |
| :--- | :--- | :--- | :--- |
| None | 0.00 | 4,500/mL | 3.4% |
| PS20 | 0.01 | 420/mL | 0.8% |
| PS80 | 0.01 | 380/mL | 0.9% |
| **P188** | **0.15** | **45/mL** | **0.1%** |

**Selection:** Poloxamer 188 was selected due to its superior performance in preventing peptide-peptide interactions during shipping simulations (agitation studies).

---

### 5.0 FORMULATION ROBUSTNESS TESTING (ICH Q1A R2)

The final optimized formulation (Formulation GHS-7) was subjected to a Robustness Study to define the **Proven Acceptable Range (PAR)**.

**Final Lead Formulation (GHS-7):**
*   Glucogen-XR: 10.0 mg/mL
*   Sodium Phosphate Dibasic: 1.42 mg/mL
*   Sodium Phosphate Monobasic: 0.24 mg/mL
*   Propylene Glycol (Tonicity): 14.0 mg/mL
*   Poloxamer 188: 1.5 mg/mL
*   Phenol (Preservative): 5.0 mg/mL
*   pH: 7.0

#### Table 5.1: Robustness Matrix and Edge-of-Failure Analysis
*Batch Series: GLUC-2025-ROB-01 to GLUC-2025-ROB-12*

| Variable | Lower Limit (-10%) | Target | Upper Limit (+10%) | Resulting Stability Impact |
| :--- | :--- | :--- | :--- | :--- |
| pH | 6.7 | 7.0 | 7.3 | Negligible |
| Phenol | 4.5 mg/mL | 5.0 mg/mL | 5.5 mg/mL | Minor (Aggregation at <4.5) |
| P188 | 1.35 mg/mL | 1.5 mg/mL | 1.65 mg/mL | Negligible |
| Temp | 2°C | 5°C | 8°C | Controlled |

---

### 6.0 MANUFACTURING PROCESS STABILITY PROTOCOL

To ensure the formulation remains stable during the fill-finish process at the South San Francisco facility, the following protocol is implemented:

**Protocol 6.1: Shear Stress Mitigation during Filling**
1. **Equipment:** Groninger FlexiFill VF Series with Peristaltic Pump.
2. **Tubing:** Platinum-cured silicone (ID 3.2mm).
3. **Procedure:**
    *   Initialize pump at 150 RPM.
    *   Monitor inline pressure (Max 1.5 bar).
    *   Perform Bubble Point Test on 0.22µm PES Filter (Batch GLUC-2025-FILT).
    *   Sample at Start, Middle, and End of fill (n=20) for SEC-HPLC testing to ensure no shear-induced aggregation.

---

### 7.0 ANALYTICAL METHODS FOR STABILITY MONITORING

Verification of stability is performed using the validated methods outlined in Section 3.2.P.5.

1.  **RP-HPLC (Method GHS-MET-001):** Detection of deamidation and oxidation.
    *   *Column:* C18, 2.1 x 150mm, 1.7µm.
    *   *Mobile Phase A:* 0.1% TFA in Water.
    *   *Mobile Phase B:* 0.1% TFA in Acetonitrile.
2.  **SEC-HPLC (Method GHS-MET-004):** Quantification of dimers and polymers.
3.  **MFI (Micro-Flow Imaging):** Characterization of sub-visible particles (2µm to 100µm).

---

### 8.0 STATISTICAL ANALYSIS OF STABILITY DATA
Stability data for three primary registration batches (**GLUC-2025-001, GLUC-2025-002, GLUC-2025-003**) were analyzed using a linear regression model to determine shelf-life at 95% confidence intervals.

**Statistical Model:**
$$y = \beta_0 + \beta_1(time) + \epsilon$$
Where:
*   $y$ = Purity (%)
*   $\beta_1$ = Rate of degradation per month

The calculated degradation rate at 5°C is **-0.012% purity/month**, predicting a shelf-life of 36 months before reaching the lower specification limit (LSL) of 95.0%.

---

### 9.0 REGULATORY COMPLIANCE REFERENCES
*   **ICH Q1A (R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q8 (R2):** Pharmaceutical Development.
*   **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **USP <791>:** pH Measurement.
*   **FDA Guidance:** "Container Closure Systems for Packaging Human Drugs and Biologics" (May 1999).

---

### 10.0 CONCLUSION
The formulation optimization for Glucogen-XR successfully mitigated the inherent risks of peptide aggregation and chemical degradation. By utilizing a phosphate-buffered system at pH 7.0 with Poloxamer 188 as a stabilizer, Google Health Sciences has ensured a robust, stable product suitable for global distribution and patient use in Type 2 Diabetes Mellitus management.

**Document End**
*Revision: 1.0.4*
*Author: Senior Regulatory Affairs Lead, Google Health Sciences*

---

# Selection of Preservative System

## Antimicrobial Preservative Effectiveness

# MODULE 3: QUALITY (3.2.P.2.2.3)
## DRUG PRODUCT: GLUCOGEN-XR (glucapeptide extended-release)
## SECTION: ANTIMICROBIAL PRESERVATIVE EFFECTIVENESS (APE)

---

### 3.2.P.2.2.3.1 Executive Summary of Preservative Strategy
Glucogen-XR is presented as a multidose, extended-release aqueous solution for subcutaneous injection. Due to the multidose nature of the delivery system (proprietary GHS-SmartPen-04), the inclusion of an antimicrobial preservative system is mandatory under 21 CFR 211.165 and aligned with the requirements set forth in USP <51> *Antimicrobial Effectiveness Testing* and ICH Q8(R2) *Pharmaceutical Development*.

The primary objective of the preservative system in Glucogen-XR is to prevent the proliferation of microorganisms that may be inadvertently introduced during repeated withdrawals (patient use) and to maintain the chemical and physical stability of the glucapeptide molecule. Following an extensive screening of phenolic and paraben-based systems, Meta-Cresol (m-Cresol) was selected at a target concentration of 3.15 mg/mL.

### 3.2.P.2.2.3.2 Regulatory Framework and Compliance
The development and validation of the preservative system for Glucogen-XR were conducted in accordance with the following international standards:
1.  **USP <51>:** Antimicrobial Effectiveness Testing (Category 1 Products).
2.  **USP <1223>:** Validation of Alternative Microbiological Methods.
3.  **Ph. Eur. 5.1.3:** Efficacy of Antimicrobial Preservation.
4.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
5.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
6.  **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics.*

### 3.2.P.2.2.3.3 Selection and Optimization of m-Cresol
#### 3.2.P.2.2.3.3.1 Rationale for Meta-Cresol Selection
Meta-cresol was chosen over benzyl alcohol and phenol based on the following technical drivers:
*   **Peptide Compatibility:** Glucapeptide (GLP-1 RA) exhibits a high propensity for fibrillation at the air-water interface. m-Cresol demonstrated a stabilizing effect on the secondary structure of the peptide, as confirmed by Circular Dichroism (CD) and Thioflavin T (ThT) fluorescence assays.
*   **Partitioning Coefficient:** m-Cresol exhibits a favorable log P (1.96), ensuring sufficient concentration remains in the aqueous phase rather than migrating into the bromobutyl rubber plunger of the cartridge.
*   **Antimicrobial Spectrum:** Superior efficacy against *Pseudomonas aeruginosa* and *Staphylococcus aureus* compared to phenol in the specific pH range of the Glucogen-XR formulation (pH 7.4 ± 0.2).

#### 3.2.P.2.2.3.3.2 Optimization Studies (DoE)
A Design of Experiments (DoE) approach was utilized to define the Design Space for the preservative system. The factors investigated included m-Cresol concentration (1.5 mg/mL to 4.5 mg/mL) and pH (7.0 to 7.8).

**Table 1: DoE Matrix for Preservative Efficacy Screening**
| Run ID | m-Cresol (mg/mL) | pH | Target Organism | Result (Log Reduction @ Day 14) |
| :--- | :--- | :--- | :--- | :--- |
| DOE-001 | 1.5 | 7.0 | *S. aureus* | 2.1 |
| DOE-002 | 1.5 | 7.8 | *S. aureus* | 1.8 |
| DOE-003 | 3.15 | 7.4 | *S. aureus* | 4.2 |
| DOE-004 | 4.5 | 7.0 | *S. aureus* | >5.0 |
| DOE-005 | 4.5 | 7.8 | *S. aureus* | 4.8 |

### 3.2.P.2.2.3.4 Detailed Protocol for USP <51> Testing
The following protocol was executed for the pivotal Antimicrobial Preservative Effectiveness (APE) studies using clinical-scale batches manufactured at the South San Francisco facility.

#### 3.2.P.2.2.3.4.1 Test Microorganisms and Inoculum Preparation
The following ATCC strains were utilized, representing the standard panel for Category 1 parenteral products:
*   *Candida albicans* (ATCC No. 10231)
*   *Aspergillus brasiliensis* (ATCC No. 16404)
*   *Escherichia coli* (ATCC No. 8739)
*   *Pseudomonas aeruginosa* (ATCC No. 9027)
*   *Staphylococcus aureus* (ATCC No. 6538)

**Inoculum Standardization:**
Microorganisms were cultured on Soybean-Casein Digest Agar (SCDA) or Sabouraud Dextrose Agar (SDA). Suspensions were prepared in sterile 0.9% NaCl to achieve a microbial density of approximately $1 \times 10^8$ CFU/mL. The volume of the inoculum was calculated to be between 0.5% and 1.0% of the product volume to minimize the dilution of the preservative.

#### 3.2.P.2.2.3.4.2 Sample Preparation and Storage
Five containers of Glucogen-XR (Batch: GLUC-2025-001) were used for each organism.
1.  Aseptically transfer 10.0 mL of the product into sterile, borosilicate glass tubes.
2.  Inoculate each tube with the specific organism to reach a concentration of $1 \times 10^5$ to $1 \times 10^6$ CFU/mL.
3.  Vortex for 30 seconds to ensure homogeneity.
4.  Incubate at 22.5 ± 2.5°C in light-protected conditions.

#### 3.2.P.2.2.3.4.3 Sampling Timepoints
Samples were withdrawn for plate counts at the following intervals:
*   Day 0 (Initial count verification)
*   Day 7
*   Day 14
*   Day 28

### 3.2.P.2.2.3.5 Analytical Data for Batch GLUC-2025-001
The following table summarizes the raw data and log reduction calculations for the pivotal APE study.

**Table 2: Log Reduction Results for Glucogen-XR (m-Cresol 3.15 mg/mL)**
| Organism | Initial Inoculum (Log₁₀ CFU/mL) | Day 7 (Log₁₀) | Day 14 (Log₁₀) | Day 28 (Log₁₀) | Compliance (USP <51>) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *S. aureus* | 6.2 | 2.1 | <1.0 | <1.0 | Pass |
| *P. aeruginosa* | 6.1 | 1.8 | <1.0 | <1.0 | Pass |
| *E. coli* | 6.4 | 2.5 | <1.0 | <1.0 | Pass |
| *C. albicans* | 5.8 | 5.1 | 4.8 | 4.2 | Pass (No Increase) |
| *A. brasiliensis* | 5.5 | 5.4 | 5.2 | 5.1 | Pass (No Increase) |

**Statistical Analysis of Efficacy:**
The log reduction ($L$) is calculated as:
$$L = \log_{10}(N_0) - \log_{10}(N_t)$$
Where:
*   $N_0$ = Initial concentration of microorganisms in the inoculum.
*   $N_t$ = Concentration of microorganisms at time $t$.

For bacteria, USP <51> requires not less than 1.0 log reduction from the initial count at 7 days, not less than 3.0 log reduction from the initial count at 14 days, and no increase from the 14-day count to the 28-day count. For yeast and molds, no increase from the initial calculated count at 7, 14, and 28 days is required.

### 3.2.P.2.2.3.6 Preservative Content during Stability (ICH Q1A)
To ensure the preservative remains effective throughout the 24-month shelf life, m-Cresol content was monitored in Batch GLUC-2025-002 stored at 5°C ± 3°C and 25°C ± 2°C (Accelerated).

**Table 3: m-Cresol Stability Data (Batch GLUC-2025-002)**
| Storage Condition | Timepoint | m-Cresol (mg/mL) | % of Initial | Method Reference |
| :--- | :--- | :--- | :--- | :--- |
| 5°C | T=0 | 3.16 | 100.3% | RP-HPLC (GHS-METH-088) |
| 5°C | 6 Months | 3.14 | 99.7% | RP-HPLC (GHS-METH-088) |
| 5°C | 12 Months | 3.12 | 99.0% | RP-HPLC (GHS-METH-088) |
| 25°C / 60% RH | 1 Month | 3.10 | 98.4% | RP-HPLC (GHS-METH-088) |
| 25°C / 60% RH | 6 Months | 3.02 | 95.8% | RP-HPLC (GHS-METH-088) |

**Calculation of Preservative Loss Rate:**
The rate of m-Cresol loss due to sorption into the plunger was modeled using the Arrhenius equation. At 5°C, the projected loss over 36 months is <4%, maintaining the concentration well above the Minimum Effective Concentration (MEC) of 2.5 mg/mL determined in the DoE phase.

### 3.2.P.2.2.3.7 Verification of Minimum Effective Concentration (MEC)
The MEC was established by testing "worst-case" formulations containing 70%, 80%, and 90% of the target m-Cresol concentration.

**Table 4: MEC Determination (Batch GLUC-2025-MEC)**
| Formulation | m-Cresol Conc. | *S. aureus* Day 14 | *P. aeruginosa* Day 14 | Conclusion |
| :--- | :--- | :--- | :--- | :--- |
| 70% Target | 2.20 mg/mL | 2.8 log red. | 2.5 log red. | **FAIL** (Target >3.0) |
| 80% Target | 2.52 mg/mL | 3.4 log red. | 3.2 log red. | **PASS** |
| 100% Target | 3.15 mg/mL | 4.5 log red. | 4.8 log red. | **PASS** |

Based on these data, the specification for m-Cresol in the finished Drug Product has been set at 2.84 – 3.47 mg/mL (90% – 110% of label claim), ensuring efficacy even at the lower limit of the specification.

### 3.2.P.2.2.3.8 Neutralization Validation (Method Suitability)
To ensure the accuracy of the microbial counts, the antimicrobial activity of m-Cresol must be neutralized during the filtration or plating process.

**Neutralization Medium:**
Dey-Engley (D/E) Neutralizing Broth was utilized.
**Suitability Criteria:**
The recovery of the challenge organisms in the presence of the product (after neutralization) must be within 50% to 200% of the recovery in the absence of the product (viability control).

**Table 5: Neutralization Validation Results**
| Organism | Control Count (CFU) | Product + Neutralizer (CFU) | Recovery (%) |
| :--- | :--- | :--- | :--- |
| *S. aureus* | 88 | 82 | 93.2% |
| *E. coli* | 94 | 90 | 95.7% |
| *C. albicans* | 75 | 77 | 102.6% |

### 3.2.P.2.2.3.9 In-Use Efficacy Simulation
To simulate real-world patient use, a "Worst-Case Simulation Study" was performed.
1.  **Protocol:** A 3.0 mL cartridge (GLUC-2025-005) was subjected to 30 daily "injections" using a new needle each time.
2.  **Challenge:** On days 1, 15, and 30, the needle tip was intentionally contaminated with a $10^3$ CFU suspension of *S. epidermidis* (a common skin commensal).
3.  **Analysis:** On Day 31, the remaining contents of the cartridge were tested for sterility per USP <71>.
4.  **Results:** No growth was observed in any of the 10 replicates tested, confirming the robustness of the 3.15 mg/mL m-Cresol system against repetitive user-induced contamination.

### 3.2.P.2.2.3.10 Conclusion
The antimicrobial preservative system for Glucogen-XR, consisting of 3.15 mg/mL m-Cresol, has been rigorously validated. It meets all USP <51> Category 1 criteria, maintains stability throughout the intended shelf life, and provides a significant safety margin (MEC of 2.52 mg/mL) to protect patients from potential microbial contamination during multidose use.

---
**END OF SECTION**

---

## Phenol Selection and Concentration

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.2.2: SELECTION OF PRESERVATIVE SYSTEM
#### SUB-SUBSECTION 3.2.P.2.2.2.1: PHENOL SELECTION AND CONCENTRATION OPTIMIZATION

---

### 1.0 Executive Summary: Rationale for Phenol Selection
In the development of Glucogen-XR (glucapeptide extended-release), a multi-dose injectable GLP-1 receptor agonist, the selection of an antimicrobial preservative system is critical to ensuring patient safety throughout the 28-day in-use period. Given the peptide's primary sequence—a 31-amino acid recombinant analog—and its propensity for self-association and fibril formation, the choice of preservative was dictated not only by antimicrobial efficacy (per USP <51>) but also by the preservative's role as a conformational stabilizer.

Following extensive screening of USP/NF-compliant preservatives (m-cresol, phenol, benzyl alcohol, and chlorobutanol), **Phenol (Liquefied, USP)** was selected as the primary preservative. Phenol demonstrated superior compatibility with the GHS-CHO-001 derived peptide backbone, specifically promoting the formation of stable, reversible hexameric structures that protect the peptide from surface-induced denaturation during long-term storage in the 3.0 mL Type I glass cartridge.

### 2.0 Technical Specifications and Regulatory Standards
The selection process was conducted in strict adherence to the following regulatory frameworks and pharmacopeial standards:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **USP <51>:** Antimicrobial Effectiveness Testing (AET).
*   **USP <71>:** Sterility Tests.
*   **USP <1112>:** Application of Water Activity Determination to Nonsterile Pharmaceutical Products.
*   **FDA Guidance for Industry:** Nonclinical Studies for the Safety Evaluation of Pharmaceutical Excipients.

#### Table 1: Physicochemical Properties of Selected Phenol Grade
| Parameter | Specification | Result (Batch: GLUC-2025-PHN-01) | Method |
| :--- | :--- | :--- | :--- |
| **Appearance** | Colorless to light pink liquid | Complies | Visual |
| **Assay (GC)** | 99.0% - 100.5% | 99.8% | USP <621> |
| **Clarity of Solution** | Clear | Complies | USP <641> |
| **Congealing Point** | ≥ 39.5°C | 40.2°C | USP <651> |
| **Water Content** | ≤ 0.5% | 0.08% | USP <921> |
| **Nonvolatile Residue** | ≤ 0.05% | 0.01% | Gravimetric |

---

### 3.0 Comparative Preservative Screening Study (Study ID: GHS-GLUC-DEV-2025-004)
A comprehensive screening study was performed using the Glucogen-XR drug substance (Batch: GLUC-2025-DS-010) at a concentration of 5.0 mg/mL. The objective was to evaluate the impact of four preservative systems on peptide stability and antimicrobial efficacy.

#### 3.1 Experimental Design
Four formulations were prepared in a 20 mM Histidine buffer (pH 6.8) containing 150 mM NaCl.

*   **Formulation A:** 3.15 mg/mL m-Cresol
*   **Formulation B:** 5.0 mg/mL Phenol
*   **Formulation C:** 10.0 mg/mL Benzyl Alcohol
*   **Formulation D:** 2.0 mg/mL Phenol + 1.5 mg/mL m-Cresol (Co-preservative system)

#### 3.2 Evaluation of Peptide Aggregation (SEC-HPLC)
The primary stability indicator was the percentage of High Molecular Weight Species (HMWS) after 4 weeks of accelerated storage at 30°C.

#### Table 2: Comparative Stability Data (4 Weeks @ 30°C)
| Preservative | Initial HMWS (%) | T=4 Weeks HMWS (%) | Change (Δ) | Fibrillation (ThT Assay) |
| :--- | :--- | :--- | :--- | :--- |
| **m-Cresol** | 0.22 | 1.85 | +1.63 | Positive (72 hrs) |
| **Phenol** | **0.21** | **0.45** | **+0.24** | **Negative (500 hrs+)** |
| **Benzyl Alcohol** | 0.25 | 3.42 | +3.17 | Positive (24 hrs) |
| **Phenol + m-Cresol**| 0.23 | 0.98 | +0.75 | Negative (300 hrs) |

**Rationale for Selection:** Phenol demonstrated the lowest rate of HMWS formation. Biophysical characterization via Circular Dichroism (CD) and Dynamic Light Scattering (DLS) confirmed that Phenol facilitates a compact alpha-helical conformation, whereas m-Cresol induced partial unfolding, exposing the hydrophobic core of the glucapeptide and accelerating aggregation.

---

### 4.0 Concentration Optimization via Antimicrobial Effectiveness Testing (AET)
To define the Design Space for the Phenol concentration, a range of 2.0 mg/mL to 6.5 mg/mL was evaluated against USP <51> Category 1 requirements.

#### 4.1 Test Microorganisms
The following strains were utilized:
*   *Staphylococcus aureus* (ATCC 6538)
*   *Pseudomonas aeruginosa* (ATCC 9027)
*   *Escherichia coli* (ATCC 8739)
*   *Candida albicans* (ATCC 10231)
*   *Aspergillus brasiliensis* (ATCC 16404)

#### 4.2 AET Results Summary (Batch: GLUC-2025-EXP-55)
Concentrations were tested in the final drug product matrix: 5.0 mg/mL Glucogen-XR, 20 mM Histidine, 18 mg/mL Mannitol, pH 6.8.

#### Table 3: USP <51> Log Reduction Results (Day 14)
| Phenol Conc. (mg/mL) | S. aureus | P. aeruginosa | E. coli | C. albicans | A. brasiliensis | Outcome |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **2.5** (Sub-target) | 2.1 | 2.4 | 1.9 | 0.8 | 0.5 | **FAIL** |
| **3.5** | 3.2 | 3.5 | 3.1 | 1.2 | 1.1 | **PASS** |
| **5.0** (Target) | 4.8 | >5.0 | 4.5 | 2.5 | 2.2 | **PASS** |
| **6.5** (Upper Limit) | >5.0 | >5.0 | >5.0 | 3.8 | 3.1 | **PASS** |

**Determination:** A target concentration of **5.0 mg/mL Phenol** was selected. This provides a robust safety margin above the minimum effective concentration (MEC) of 3.5 mg/mL, accounting for potential preservative loss due to adsorption onto the rubber plunger (bromobutyl) or evaporation during the 28-day in-use period.

---

### 5.0 Protocol for Preservative Content Determination (RP-HPLC)
The following protocol (Method GHS-AN-088) is used to quantify Phenol in the Drug Product for release and stability testing.

#### 5.1 Chromatographic Conditions
*   **Column:** Waters XBridge C18, 3.5 µm, 4.6 x 150 mm
*   **Mobile Phase A:** 0.1% TFA in Water
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile
*   **Gradient:** Isocratic 70% A / 30% B
*   **Flow Rate:** 1.0 mL/min
*   **Detection:** UV at 270 nm
*   **Injection Volume:** 10 µL
*   **Run Time:** 15 minutes

#### 5.2 Calculation Formula
The concentration of Phenol is calculated using the following equation:
$$C_{phenol} = \frac{A_{sample} \times W_{std} \times P}{A_{std} \times V_{sample}}$$
Where:
*   $A_{sample}$ = Peak area of phenol in the sample injection
*   $A_{std}$ = Average peak area of phenol in the standard injection
*   $W_{std}$ = Weight of phenol standard (mg)
*   $P$ = Purity of standard (as decimal)
*   $V_{sample}$ = Volume of sample (mL)

---

### 6.0 Preservative Adsorption and Partitioning Study
As Glucogen-XR is housed in a 3.0 mL cartridge system with a bromobutyl plunger (West Pharmaceutical Services, FluroTec® coated), the partitioning of phenol into the elastomer was evaluated over 24 months.

#### Table 4: Phenol Recovery in Cartridges (Storage at 5°C)
| Timepoint | Batch GLUC-2025-001 (%) | Batch GLUC-2025-002 (%) | Batch GLUC-2025-003 (%) |
| :--- | :--- | :--- | :--- |
| **T=0** | 100.2 | 99.8 | 100.5 |
| **6 Months** | 98.5 | 98.1 | 98.8 |
| **12 Months** | 97.4 | 97.0 | 97.2 |
| **24 Months** | 96.2 | 95.8 | 96.1 |

**Conclusion:** The total loss of phenol due to adsorption is <5% over the shelf life, ensuring that the concentration remains well above the MEC of 3.5 mg/mL throughout the product's expiry.

---

### 7.0 Statistical Analysis of Phenol vs. Peptide Stability
A multivariate analysis was conducted to correlate phenol concentration with the rate of deamidation at the Asn-28 residue of the glucapeptide.

#### 7.1 Regression Model
The relationship followed a second-order polynomial:
$$Y_{Deamidation} = \beta_0 + \beta_1(X_{phenol}) + \beta_2(X_{phenol})^2 + \epsilon$$
Statistical modeling (JMP 17.0) indicates that at the target concentration of 5.0 mg/mL, the rate of deamidation is minimized due to the steric shielding provided by the phenol-induced hexameric state.

---

### 8.0 Manufacturing Process Integration
During the Formulation and Fill/Finish stage at the South San Francisco facility, Phenol is added via a concentrated stock solution (50 mg/mL) to the bulk drug substance.

#### 8.1 Step-by-Step Addition Protocol
1.  **Preparation:** Verify the temperature of the Histidine buffer is 20°C ± 2°C.
2.  **Aseptic Transfer:** Transfer 10.0 L of Phenol stock (GLUC-2025-PHN-S1) into the 100 L formulation vessel (Equipment ID: VESS-3000-A).
3.  **Mixing:** Agitate at 150 RPM for 20 minutes using a low-shear overhead impeller.
4.  **Verification:** Withdraw 5 mL sample for In-Process Control (IPC) testing.
5.  **IPC Limit:** Phenol must be 4.75 – 5.25 mg/mL (95-105% of target).
6.  **Final Filtration:** Proceed to sterile filtration through a 0.22 µm PES redundant filter.

### 9.0 References
1.  *Journal of Pharmaceutical Sciences (2022):* "Mechanistic Insight into Phenol-Induced Stabilization of GLP-1 Analogs."
2.  *ICH Q1A(R2):* Stability Testing of New Drug Substances and Products.
3.  *Google Health Sciences Internal Report:* GHS-PHARMA-2024-TR-011: "Biophysical Characterization of Glucogen-XR."

---
**[END OF SECTION 3.2.P.2.2.2.1]**

---

## Impact on Stability and Compatibility

### **3.2.P.2.2.3.4 Impact on Stability and Compatibility**

#### **1.0 Introduction and Scope**
The selection of the antimicrobial preservative system for **Glucogen-XR (glucapeptide extended-release)**—specifically the binary phenolic system comprising **m-Cresol** and **Phenol**—necessitates a comprehensive evaluation of its impact on the physicochemical stability of the active pharmaceutical ingredient (API) and its compatibility with the primary container closure system (CCS). 

As a GLP-1 receptor agonist, Glucogen-XR is a 31-amino acid peptide formulated at a high concentration (10 mg/mL) to support extended-release kinetics. The introduction of phenolic preservatives, while essential for multi-dose compliance per **USP <51>** and **EP 5.1.3**, introduces complex intermolecular forces, including hydrophobic interactions and potential induction of secondary structure transitions (α-helix to β-sheet). This section details the longitudinal studies (up to 36 months) assessing the influence of the preservative system on peptide aggregation, chemical degradation (deamidation/oxidation), and the physical integrity of the pre-filled syringe (PFS) components.

#### **2.0 Technical Specifications and Regulatory Framework**
All studies were conducted in accordance with the following regulatory and compendial standards:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1222>:** Terminally Sterilized Pharmaceutical Products—Parametric Release.
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (May 1999).

---

#### **3.0 Impact on Peptide Physical Stability: Aggregation and Fibrillation**
The primary risk associated with phenolic preservatives in peptide formulations is the promotion of "salting-out" effects or the shielding of electrostatic charges, which can lead to sub-visible particulate formation and macroscopic gelation.

##### **3.1 High-Performance Size Exclusion Chromatography (HP-SEC) Analysis**
HP-SEC was utilized to quantify high molecular weight species (HMWS) over a range of preservative concentrations.

**Table 1: Long-term HP-SEC Analysis of Glucogen-XR (Batch GLUC-2025-001 through 003)**
*Storage Conditions: 5°C ± 3°C; Preservative System: 1.5 mg/mL m-Cresol / 0.6 mg/mL Phenol*

| Batch Number | Time Point (Months) | Main Peak (%) | Total HMWS (%) | Dimer (%) | Higher Order Oligomers (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0 (Initial) | 99.82 | 0.15 | 0.12 | 0.03 |
| | 6 | 99.71 | 0.24 | 0.19 | 0.05 |
| | 12 | 99.55 | 0.41 | 0.32 | 0.09 |
| | 24 | 99.28 | 0.62 | 0.48 | 0.14 |
| | 36 | 98.94 | 0.91 | 0.71 | 0.20 |
| **GLUC-2025-002** | 0 (Initial) | 99.85 | 0.12 | 0.10 | 0.02 |
| | 12 | 99.58 | 0.38 | 0.30 | 0.08 |
| | 36 | 98.89 | 0.98 | 0.75 | 0.23 |
| **GLUC-2025-003** | 0 (Initial) | 99.81 | 0.16 | 0.12 | 0.04 |
| | 12 | 99.52 | 0.43 | 0.34 | 0.09 |
| | 36 | 98.81 | 1.02 | 0.79 | 0.23 |

*Acceptance Criteria: Main Peak ≥ 95.0%; Total HMWS ≤ 2.0%.*

##### **3.2 Sub-visible Particulate Matter (USP <788>)**
The interaction between m-Cresol and the silicone oil coating of the PFS can potentially nucleate protein aggregation. Studies were performed using Micro-Flow Imaging (MFI) and Light Obscuration (HIAC).

**Table 2: Sub-visible Particulate Counts (MFI) for Glucogen-XR at Accelerated Conditions**
*Conditions: 25°C / 60% RH (Batch GLUC-2025-004)*

| Particle Size Range | T=0 (Initial) | T=3 Months | T=6 Months | USP <788> Limit |
| :--- | :--- | :--- | :--- | :--- |
| **≥ 10 µm** | 112 particles/mL | 425 particles/mL | 890 particles/mL | ≤ 6000 per container |
| **≥ 25 µm** | 8 particles/mL | 22 particles/mL | 45 particles/mL | ≤ 600 per container |
| **≥ 2 µm (MFI Only)** | 1,450 particles/mL | 4,200 particles/mL | 12,800 particles/mL | For Information Only |

---

#### **4.0 Impact on Chemical Stability: Deamidation and Oxidation**
Preservatives can alter the local pH microenvironment or act as catalysts for specific chemical degradation pathways. Glucogen-XR is particularly sensitive to deamidation at the Asparagine-28 (Asn28) residue and oxidation at Methionine-8 (Met8).

##### **4.1 Reverse-Phase HPLC (RP-HPLC) for Purity Assessment**
**Table 3: Chemical Degradation Profile (RP-HPLC) - Batch GLUC-2025-007**
*Storage: 40°C / 75% RH (Stress Testing)*

| Degradation Product | T=0 (%) | T=1 Month (%) | T=2 Months (%) | T=3 Months (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Total Purity** | 99.4 | 97.2 | 94.8 | 91.5 |
| **Asn28 Deamidation** | 0.21 | 1.15 | 2.45 | 4.10 |
| **Met8 Oxidation** | 0.15 | 0.55 | 1.10 | 1.85 |
| **Preservative Adducts**| < LOD | 0.05 | 0.08 | 0.12 |

**Calculation of Arrhenius Activation Energy ($E_a$):**
Using the degradation rates ($k$) at 5°C, 25°C, and 40°C, the $E_a$ for Glucogen-XR deamidation in the presence of 1.5 mg/mL m-Cresol was calculated as:
$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R} \left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$
Result: $E_a \approx 84.5 \text{ kJ/mol}$, indicating a stable formulation under refrigerated conditions with no abnormal catalytic effect from the preservative system.

---

#### **5.0 Preservative-Container Closure Interaction (PCCI)**
The most significant compatibility challenge involves the partition of m-Cresol into the elastomeric components (plunger stopper) and its adsorption onto the Borosilicate Type I glass walls.

##### **5.1 Adsorption and Permeation Protocol**
**Protocol ID: GHS-STB-099-V1**
1.  **Objective:** Quantify the loss of m-Cresol and Phenol due to interaction with the FluroTec® coated chlorobutyl stopper.
2.  **Procedure:**
    *   Fill 1.0 mL of Glucogen-XR into 2.25 mL PFS.
    *   Invert samples to ensure maximum contact with the stopper.
    *   Store at 5°C, 25°C, and 40°C.
    *   Extract samples at specified intervals and assay via HPLC-UV (272 nm).

**Table 4: Preservative Content Recovery (%) over 24 Months**
*Batch: GLUC-2025-009; Nominal: m-Cresol (1.5 mg/mL), Phenol (0.6 mg/mL)*

| Time (Months) | Temp | m-Cresol Recovery (%) | Phenol Recovery (%) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **12** | 5°C | 99.2% | 99.5% | Pass |
| **12** | 25°C | 96.4% | 97.1% | Pass |
| **24** | 5°C | 98.1% | 98.8% | Pass |
| **24** | 25°C | 92.5% | 94.2% | Alert Limit |
| **36** | 5°C | 97.4% | 98.1% | Pass |

*Note: The decline at 25°C (controlled room temperature) underscores the requirement for "Store in Refrigerator" labeling to maintain antimicrobial efficacy.*

---

#### **6.0 Influence on Secondary and Tertiary Structure**
Circular Dichroism (CD) and Fourier Transform Infrared (FTIR) spectroscopy were employed to ensure that the phenolic system does not induce misfolding.

##### **6.1 Far-UV Circular Dichroism (190–260 nm)**
*   **Methodology:** Samples of Glucogen-XR were analyzed in the presence and absence of the preservative system.
*   **Observations:** The spectra for both samples showed characteristic minima at 208 nm and 222 nm, indicative of a high α-helical content.
*   **Calculated Alpha-Helix Content:**
    *   Without Preservatives: 44.2%
    *   With 1.5 mg/mL m-Cresol / 0.6 mg/mL Phenol: 43.8%
    *   *Conclusion:* No significant conformational shift was detected.

---

#### **7.0 Compatibility with Manufacturing Equipment**
The impact of the preservative system on the single-use technology (SUT) fluid path during the filling process was evaluated.

**Table 5: Extractables and Leachables (E&L) Post-Exposure**
*Equipment: Platinum-cured Silicone Tubing; Exposure Time: 24 Hours at 25°C*

| Analyte Class | Compound Identified | Concentration (µg/mL) | Safety Threshold (AET) |
| :--- | :--- | :--- | :--- |
| **Siloxanes** | Octamethylcyclotetrasiloxane | 0.12 | 1.50 |
| **Phenolic Antioxidants** | BHT (from tubing jacket) | 0.04 | 0.50 |
| **Preservative Interaction** | m-Cresol Dimer | < LOD | 0.10 |

---

#### **8.0 Summary of Stability Impact**
The comprehensive stability data package for **Glucogen-XR** confirms that the selected preservative system (m-Cresol/Phenol) is compatible with both the glucapeptide molecule and the primary packaging. While minor adsorption of m-Cresol to the elastomer occurs at room temperature, the levels remain well within the limits required for antimicrobial efficacy (AET) as per **USP <51>**. No significant impact on the degradation rate of the peptide was observed at the intended storage temperature (5°C).

**Approved by:**
*Dr. Helena V. Richards*
Principal Scientist, Google Health Sciences
Date: 14-Oct-2025
Batch Reference: GLUC-2025-DP-SUMMARY

---

# Tonicity and Isotonicity Considerations

## Osmolality Target Range

### 3.2.P.2.2.3.4 Tonicity and Isotonicity Considerations: Osmolality Target Range

#### 1.0 Executive Summary
The formulation development of Glucogen-XR (glucapeptide extended-release) 1.5 mg/mL solution for subcutaneous injection necessitated a rigorous characterization of osmotic properties to ensure patient safety, local tolerability, and product stability. Given the extended-release nature of the peptide delivery system—utilizing a proprietary PEGylated-GLP-1 conjugate—maintaining a physiological osmolality range is critical to minimize injection site pain and prevent tissue necrosis.

Google Health Sciences (GHS) has defined the target osmolality range based on the International Council for Harmonisation (ICH) Q8(R2) Pharmaceutical Development guidelines and USP <785> Osmolality and Freezing Point Depression. This section details the target specifications, the mathematical derivation of the tonicity agent concentrations, and the verification data across three (3) clinical-scale manufacturing batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003).

#### 2.0 Regulatory and Pharmacopeial Basis
The development of the osmolality specification for Glucogen-XR adheres to the following regulatory frameworks:
*   **USP <785>**: Providing the standard for freezing point depression osmometry.
*   **FDA Guidance for Industry (2014)**: *Immunogenicity Assessment for Therapeutic Protein Products*, highlighting the impact of formulation on localized immune responses.
*   **ISO 10993-4**: Selection of tests for interactions with blood.
*   **ICH Q6B**: Specifications for Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.

#### 3.0 Mathematical Derivation of Tonicity Adjustments
To achieve an isotonic target of ~290 mOsm/kg, GHS utilized the Sodium Chloride Equivalent ($E$-value) method. The formulation contains L-Histidine (buffer), Sucrose (cryoprotectant/tonicity agent), and Polysorbate 20 (surfactant).

##### 3.1 Formula for Calculated Osmolality
The theoretical osmolality ($Osm_{calc}$) is calculated using the summation of the molal concentrations of each solute multiplied by their respective osmotic coefficients ($\phi$) and dissociation constants ($i$):

$$Osm_{calc} = \sum (\phi \cdot i \cdot m)$$

Where:
*   $\phi$ = Osmotic coefficient (assumed 0.93 for therapeutic proteins)
*   $i$ = Van't Hoff factor
*   $m$ = Molality (mol/kg solvent)

##### 3.2 Component Contribution Analysis
The following table outlines the calculated contribution of each excipient to the final osmolality of Glucogen-XR.

**Table 3.2.P.2.2.3.4-1: Theoretical Osmolality Contribution of Glucogen-XR Excipients**

| Component | Concentration (mg/mL) | MW (Da) | Molarity (mM) | $i$ Factor | Theoretical mOsm/kg |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Glucapeptide-XR | 1.50 | ~44,500 | 0.034 | 1.0 | 0.03 |
| L-Histidine | 1.55 | 155.15 | 10.00 | 1.0 | 10.00 |
| L-Histidine HCl | 3.14 | 209.63 | 15.00 | 2.0 | 30.00 |
| Sucrose | 82.00 | 342.30 | 239.56 | 1.0 | 239.56 |
| Polysorbate 20 | 0.20 | 1,227.5 | 0.163 | 1.0 | 0.16 |
| **Total Calculated** | -- | -- | -- | -- | **279.75** |

*Note: The calculated value of 279.75 mOsm/kg represents the baseline, with the target range centered at 290 mOsm/kg to account for the slight displacement volume of the PEGylated peptide chain.*

#### 4.0 Target Range Specifications
Based on the subcutaneous route of administration, the acceptable range for Glucogen-XR has been established to ensure it remains "Isotonic" to "Slightly Hypertonic."

**Table 3.2.P.2.2.3.4-2: Osmolality Acceptance Criteria**

| Parameter | Specification | Classification |
| :--- | :--- | :--- |
| **Lower Limit** | 270 mOsm/kg | Borderline Isotonic |
| **Target** | 290 mOsm/kg | Physiological Isotonic |
| **Upper Limit** | 330 mOsm/kg | Slightly Hypertonic |

*Rationale for Upper Limit:* Clinical studies (GHS-GLUC-PH101) indicated that osmolality up to 350 mOsm/kg did not result in statistically significant increases in Visual Analog Scale (VAS) scores for pain at the injection site. However, 330 mOsm/kg was selected as the upper regulatory limit to provide a safety buffer.

#### 5.0 Batch Analytical Data (Verification)
Verification of the target range was conducted using three consistency batches produced at the South San Francisco facility (3000 Innovation Drive).

**Table 3.2.P.2.2.3.4-3: Osmolality Results for Clinical/Registration Batches**

| Batch Number | Manufacture Date | Equipment ID | Result (mOsm/kg) | Deviation from Target |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | OSMO-SYS-04 | 288 | -0.69% |
| GLUC-2025-002 | 19-JAN-2025 | OSMO-SYS-04 | 291 | +0.34% |
| GLUC-2025-003 | 26-JAN-2025 | OSMO-SYS-04 | 294 | +1.38% |
| **Mean** | -- | -- | **291.0** | -- |
| **RSD (%)** | -- | -- | **1.04%** | -- |

#### 6.0 Analytical Methodology: Freezing Point Depression
The determination of osmolality is performed via freezing point depression using an automated osmometer (e.g., Advanced Instruments Model 2020).

##### 6.1 Step-by-Step Measurement Protocol (SOP-QC-7742)
1.  **Instrument Calibration**: Calibrate using NIST-traceable standards (0, 300, and 900 mOsm/kg H2O).
2.  **Sample Preparation**: Ensure the Glucogen-XR drug product is equilibrated to room temperature (20-25°C). Do not vortex to avoid entrapment of air bubbles.
3.  **Aspiration**: Draw 20 $\mu$L of the drug product into the precision sampler tip.
4.  **Cooling Phase**: The sample is lowered into the cooling chamber and supercooled below its freezing point.
5.  **Heat of Fusion**: A physical vibratory pulse induces crystallization. The heat of fusion released raises the sample temperature to a "plateau" representing the true freezing point.
6.  **Calculation**: The instrument converts the millidegrees of freezing point depression into mOsm/kg.
7.  **Reporting**: Repeat in triplicate and report the mean value.

#### 7.0 Impact of Concentration on Osmolality (Design of Experiments)
During development, a Design of Experiments (DoE) study was conducted to evaluate the sensitivity of osmolality to variations in Sucrose and L-Histidine concentrations.

**Table 3.2.P.2.2.3.4-4: Sensitivity Analysis (DoE Matrix)**

| Trial ID | Sucrose (%) | Histidine (mM) | Result (mOsm/kg) | Impact Assessment |
| :--- | :--- | :--- | :--- | :--- |
| DOE-01 | 7.5% | 20 | 255 | **Fail** (Hypotonic) |
| DOE-02 | 8.2% | 25 | 292 | **Pass** (Target) |
| DOE-03 | 9.0% | 30 | 328 | **Pass** (Near Limit) |

#### 8.0 Stability and Shelf-Life Considerations
Osmolality is monitored as a stability-indicating parameter during Long-Term (2-8°C) and Accelerated (25°C/60% RH) stability studies.

**Table 3.2.P.2.2.3.4-5: Stability Data for Batch GLUC-2025-001 (Storage at 5°C)**

| Timepoint | Condition | Osmolality (mOsm/kg) | Specification |
| :--- | :--- | :--- | :--- |
| T=0 | Initial | 288 | 270-330 |
| T=3 Months | 5°C | 289 | 270-330 |
| T=6 Months | 5°C | 290 | 270-330 |
| T=12 Months | 5°C | 287 | 270-330 |

*Conclusion:* The data indicates that the PEGylated peptide does not undergo significant degradation or aggregation that would alter the osmotic pressure of the solution over the intended 24-month shelf life.

#### 9.0 Conclusion
The osmolality of Glucogen-XR is tightly controlled within the range of 270 to 330 mOsm/kg. This range ensures that the product is physiologically compatible with the subcutaneous tissue environment, minimizing the risk of adverse injection site reactions while maintaining the structural integrity of the Glucapeptide-XR molecule. All clinical batches to date have demonstrated high consistency, with a mean osmolality of 291 mOsm/kg.

---

## Sodium Chloride Adjustment

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SECTION 3.2.P.2.2.1.4 TONICITY AND ISOTONICITY CONSIDERATIONS: SODIUM CHLORIDE ADJUSTMENT

---

#### 3.2.P.2.2.1.4.1 Introduction and Rationale for Tonicity Adjustment
The formulation of **Glucogen-XR (glucapeptide extended-release)** is engineered as a subcutaneous (SC) injectable intended for chronic management of Type 2 Diabetes Mellitus. Given the subcutaneous route of administration, the physiological compatibility of the drug product with the interstitial fluid at the site of injection is paramount to minimize patient discomfort, avoid tissue irritation (myonecrosis or subcutaneous induration), and ensure the predictable release kinetics of the glucapeptide from the extended-release matrix.

The target osmolality for Glucogen-XR has been established at **290 ± 20 mOsm/kg**, aligning with human plasma tonicity (275–295 mOsm/kg). Initial prototype screenings indicated that the base formulation—comprising the glucapeptide active pharmaceutical ingredient (API), the proprietary polymeric delivery system, and the buffering agents—exhibited a hypotonic profile (approx. 110 mOsm/kg). Therefore, **Sodium Chloride (NaCl)**, USP/EP/JP grade, was selected as the primary tonicity adjusting agent (osmolyte) to bridge the osmotic gap.

#### 3.2.P.2.2.1.4.2 Physico-Chemical Characterization of Sodium Chloride Integration
Sodium chloride was selected due to its high solubility, established safety profile (GRAS status), and minimal interaction with the GLP-1 receptor agonist peptide backbone. Unlike divalent salts (e.g., $CaCl_2$), NaCl does not promote peptide aggregation or alter the $T_m$ (melting temperature) of the glucapeptide, as confirmed by Differential Scanning Calorimetry (DSC) studies (See Section 3.2.P.2.2.1.5).

##### Table 1: Physicochemical Specifications of Sodium Chloride (Excipient Grade)
| Parameter | Specification | Methodology |
| :--- | :--- | :--- |
| **CAS Number** | 7647-14-5 | N/A |
| **Purity (Assay)** | 99.0% – 100.5% (Dried Basis) | USP <191> / Titration |
| **Appearance** | White Crystalline Powder | Visual Inspection |
| **Solubility in Water** | 360 g/L at 20°C | USP General Chapter |
| **Endotoxin Limit** | < 2.5 IU/g | USP <85> (LAL) |
| **Iron (Fe)** | ≤ 2 ppm | ICP-OES |
| **Magnesium/Alkaline Earth Metals** | ≤ 100 ppm | USP <621> |

#### 3.2.P.2.2.1.4.3 Calculation Methodology for Isotonicity
The quantity of Sodium Chloride required to achieve isotonicity was calculated using the **Sodium Chloride Equivalent ($E$-value) Method** and verified via **Freezing Point Depression** calculations.

**1. The E-Value Equation:**
The $E$-value represents the weight of NaCl that produces the same osmotic effect as 1 gram of the drug/excipient.
$$E = 17 \times \frac{L_{iso}}{MW}$$
Where:
- $L_{iso}$ for Glucogen-XR (peptide-polymer complex) was determined empirically as 3.4.
- $MW$ (Molecular Weight) of the complex is approximately 45,500 Da.
- Calculated $E_{Glucogen} \approx 0.0013$. (Note: Due to the high molecular weight, the API contribution to osmolality is negligible).

**2. Calculation for Batch Size (Target 1000L):**
To achieve 290 mOsm/kg:
- Required NaCl concentration = $0.9\% w/v$ (standard saline equivalent).
- Contribution from Citrate Buffer (20mM) = ~45 mOsm/kg.
- Contribution from API/Excipients = ~15 mOsm/kg.
- **Deficit to be filled by NaCl** = 230 mOsm/kg.

**Formula for NaCl addition ($W$):**
$$W = \frac{(0.9\% - (E_{buffer} \times C_{buffer} + E_{API} \times C_{API})) \times Vol}{100}$$
Based on empirical titration, it was determined that **6.45 g/L** of NaCl is required to reach the target osmolality of 290 mOsm/kg.

#### 3.2.P.2.2.1.4.4 Technical Procedure for NaCl Adjustment (Protocol GHS-PRO-772)
The adjustment process occurs during the secondary compounding phase in the Google Health Sciences cleanroom suite (Room 402-B).

**Step-by-Step Manufacturing Integration:**
1. **Pre-equilibration:** Ensure the bulk drug substance (BDS) solution is stabilized at 2-8°C.
2. **Initial Osmolality Check:** Measure the baseline osmolality of the buffered solution using a freezing point osmometer (Equipment ID: GHS-OSMO-09).
3. **Calculated Addition:** Based on the baseline, the required mass of NaCl (Batch GLUC-2025-RAW-01) is weighed using a calibrated balance (Equipment ID: GHS-BAL-112, Accuracy ±0.001g).
4. **Dissolution:** NaCl is added slowly to the mixing vessel (GHS-MIX-05) under constant agitation at 150 RPM.
5. **Homogenization:** Stirring continues for 45 minutes to ensure uniform ionic distribution and to prevent localized high-salt pockets that could denature the glucapeptide.
6. **In-Process Testing:** A 5mL sample is drawn for osmolality verification. If osmolality is <280 mOsm/kg, supplemental "Micro-Addition" of NaCl is performed using the GHS-ADJ-Table.

#### 3.2.P.2.2.1.4.5 Osmolality Stability and Batch Consistency Data
The following table summarizes the data from three pivotal clinical batches produced at the South San Francisco facility.

##### Table 2: Tonicity Data for Clinical Batches (Process Validation)
| Batch Number | Batch Size (L) | NaCl Added (kg) | Target Osmolality (mOsm/kg) | Final Measured Osmolality | Deviation (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 500 | 3.225 | 290 | 288 | -0.69% |
| **GLUC-2025-002** | 500 | 3.225 | 290 | 292 | +0.69% |
| **GLUC-2025-003** | 1000 | 6.450 | 290 | 291 | +0.34% |
| **GLUC-2025-004** | 1000 | 6.450 | 290 | 289 | -0.34% |

#### 3.2.P.2.2.1.4.6 Impact of Sodium Chloride on Peptide Aggregation
A critical aspect of the development was ensuring that the addition of NaCl did not induce "salting-out" effects. Glucogen-XR was subjected to Size Exclusion Chromatography (SEC-HPLC) and Dynamic Light Scattering (DLS) at varying NaCl concentrations (0.1% to 1.5%).

##### Table 3: Effect of NaCl Concentration on Glucapeptide Monomer Content
| NaCl Conc (% w/v) | Calculated Osmolality | % Monomer (SEC-HPLC) | Polydispersity Index (PDI) |
| :--- | :--- | :--- | :--- |
| 0.0 (Control) | 62 | 99.8% | 0.045 |
| 0.4 | 185 | 99.7% | 0.048 |
| **0.645 (Target)** | **290** | **99.8%** | **0.042** |
| 0.9 (Standard) | 365 | 99.5% | 0.055 |
| 1.5 | 540 | 97.2% | 0.110 |

*Interpretation:* The target concentration of 0.645% NaCl (supplementing the buffer) maintains the glucapeptide in its optimal monomeric state (>99%) while achieving the required tonicity.

#### 3.2.P.2.2.1.4.7 Regulatory Compliance and Quality Control
All NaCl adjustment procedures are conducted in compliance with **ICH Q8(R2) Pharmaceutical Development** guidelines. The osmolality of the final drug product is a mandatory release specification, as per **USP <785> Osmolality and Osmolarity**.

**In-Process Control (IPC) Limits:**
- **Action Limit:** 280 – 300 mOsm/kg.
- **Reject Limit:** <270 or >310 mOsm/kg.

The use of Google Cloud Life Sciences' proprietary **GHS-Batch-Analyze AI** allows for real-time monitoring of salt dissolution kinetics, ensuring that every batch (GLUC-2025-XXX) adheres to the strict narrow-limit ionic strength requirements necessary for the extended-release profile of the glucapeptide.

---
*Reference GHS-DOC-3342: "Ionic Strength and the Release Kinetics of Glucapeptide Micro-suspensions (2024)."*
*Reference FDA Guidance: "Injectable Drug Products: Subcutaneous and Intramuscular (2021)."*

---

## Patient Comfort and Injection Site Reactions

# MODULE 3: QUALITY (3.2.P) – DRUG PRODUCT
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.2.1.4: TONICITY AND ISOTONICITY CONSIDERATIONS
#### SUB-SUBSECTION: PATIENT COMFORT AND INJECTION SITE REACTIONS (ISRs)

---

### 1.0 Executive Summary
The development of Glucogen-XR (glucapeptide extended-release) 15 mg/mL solution for subcutaneous injection necessitated a comprehensive evaluation of the physicochemical properties governing patient comfort. Given the chronic nature of Type 2 Diabetes Mellitus (T2DM) therapy, adherence is heavily contingent upon the minimization of Injection Site Reactions (ISRs) and procedural pain. This section details the strategic optimization of formulation tonicity, the selection of osmotic agents (tonicity modifiers), and the empirical validation of these parameters through *in vitro* hemolytic assays, *ex vivo* tissue modeling, and Phase I/II clinical tolerability assessments.

All developmental batches referenced herein (Series GLUC-2025-001 through GLUC-2025-150) were manufactured at the Google Health Sciences Clinical Manufacturing Facility (CMF) located at 3000 Innovation Drive, South San Francisco, CA.

### 2.0 Regulatory Framework and Compliance
The development program for Glucogen-XR was executed in strict accordance with the following regulatory guidances and pharmacopeial standards:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **FDA Guidance for Industry:** Immunogenicity Assessment for Therapeutic Protein Products.
*   **USP <785>:** Osmolality and Freezing Point Depression.
*   **USP <1>:** Injections and Implanted Drug Products (Parenterals) – Quality Attributes.
*   **ISO 10993-4:** Selection of tests for interactions with blood.

### 3.0 Tonicity Optimization Strategy
The physiological osmolality of human extracellular fluid is approximately 285–295 mOsm/kg. Deviations from this range—specifically extreme hypotonicity (<200 mOsm/kg) or extreme hypertonicity (>600 mOsm/kg)—are associated with acute nociception due to the activation of transient receptor potential (TRP) channels (specifically TRPV1 and TRPA1) in peripheral sensory neurons, as well as mechanical cellular stress (crenation or lysis).

#### 3.1 Target Product Profile (TPP) Constraints
| Parameter | Specification | Rationale |
| :--- | :--- | :--- |
| **Target Osmolality** | 290 ± 20 mOsm/kg | Alignment with physiological serum levels. |
| **Acceptable Range** | 270 – 330 mOsm/kg | Minimize osmotic shock to subcutaneous myocytes/adipocytes. |
| **Tonicity Agent** | D-Mannitol (USP/EP) | Non-reducing sugar; provides cryoprotection and stabilization. |
| **Injection Volume** | 0.5 mL | Reduced volume minimizes mechanical tissue distension. |

#### 3.2 Calculations for Isotonic Adjustment
The formulation utilizes a multi-component buffer system. To calculate the required concentration of D-Mannitol for the Glucogen-XR drug product, the following Sodium Chloride Equivalent ($E$-value) method was employed:

$$W = \frac{0.9 - \sum (C_i \times E_i)}{E_{agent}}$$

Where:
*   $W$ = Grams of tonicity agent per 100 mL.
*   $C_i$ = Concentration of formulation component $i$ (%).
*   $E_i$ = NaCl equivalent of component $i$.

**Table 1: Theoretical Osmolality Contributions (Batch GLUC-2025-012)**
| Component | Conc. (w/v %) | E-Value | NaCl Equiv. (g/100mL) |
| :--- | :--- | :--- | :--- |
| Glucapeptide (API) | 1.5% | 0.012 | 0.018 |
| Histidine Buffer | 0.31% | 0.150 | 0.0465 |
| Polysorbate 80 | 0.02% | 0.010 | 0.0002 |
| D-Mannitol | 4.40% | 0.180 | 0.792 |
| **Total NaCl Equiv.** | - | - | **0.8567** |

The resulting theoretical osmolality of 0.857% NaCl equivalent corresponds to ~288 mOsm/kg, falling within the "Iso-Comfort" zone defined during the Quality by Design (QbD) phase.

---

### 4.0 Comparative Analysis of Formulation Prototypes
During the DOE (Design of Experiments) phase, multiple prototypes were evaluated for their impact on cell viability and local irritation.

**Table 2: Physical Characterization of Tonicity Variants**
| Batch ID | Modifier | Osmolality (mOsm/kg) | pH | Viscosity (cP) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | NaCl | 295 | 6.5 | 1.2 | High Protein Aggregation |
| GLUC-2025-002 | Glycerol | 310 | 6.5 | 1.5 | Failed Accelerated Stability |
| GLUC-2025-005 | Sucrose | 305 | 6.5 | 2.1 | Viscosity > Target |
| **GLUC-2025-010** | **Mannitol** | **292** | **6.5** | **1.3** | **Selected Formulation** |

### 5.0 *In Vitro* and *Ex Vivo* Assessment of Injection Site Comfort

#### 5.1 Hemolysis Assay (USP <1151> adapted)
To simulate the potential for localized cell lysis, Batch GLUC-2025-010 was tested against human erythrocytes.
1.  **Procedure:** 0.1 mL of DP was added to 2.0 mL of 5% erythrocyte suspension.
2.  **Incubation:** 37°C for 45 minutes.
3.  **Measurement:** Centrifugation followed by spectrophotometric analysis of supernatant at 540 nm.
4.  **Result:** Hemolysis Index = 0.42% (Threshold for "Non-Hemolytic" is <2.0%).

#### 5.2 The "Bratislava" Rat Paw Edema Model
To assess acute inflammatory response, 50 $\mu$L of GLUC-2025-010 was injected into the subplantar region of Sprague-Dawley rats ($n=12$).
*   **Measurement:** Plethysmometer measurement of paw volume at 0, 1, 4, and 24 hours.
*   **Outcome:** No statistically significant increase in volume compared to 0.9% saline control ($p > 0.05$).

---

### 6.0 Clinical Characterization of Injection Site Reactions (ISRs)
Data from Phase I (GHS-GLUC-101) and Phase II (GHS-GLUC-202) clinical trials were aggregated to assess the real-world performance of the optimized formulation.

#### 6.1 ISR Grading Scale
Adverse events were graded according to the FDA "Toxicity Grading Scale for Healthy Adult and Adolescent Volunteers Enrolled in Preventive Vaccine Clinical Trials," adapted for therapeutic biologics.

| Grade | Erythema / Redness | Induration / Swelling | Pain |
| :--- | :--- | :--- | :--- |
| **1 (Mild)** | 25–50 mm | 25–50 mm | Does not interfere with activity |
| **2 (Mod)** | 51–100 mm | 51–100 mm | Interferes with activity |
| **3 (Severe)** | >100 mm | >100 mm | Prevents daily activity |

#### 6.2 Aggregated ISR Data (Batches GLUC-2025-080 thru GLUC-2025-095)
The following table summarizes the incidence of ISRs in a cohort of 450 patients over a 24-week period.

**Table 3: Summary of Injection Site Reactions**
| Reaction Type | Glucogen-XR (N=300) | Placebo (Saline) (N=150) | p-value |
| :--- | :--- | :--- | :--- |
| Any ISR | 6.3% | 5.8% | 0.84 |
| Pain at Injection | 2.1% | 2.0% | 0.95 |
| Erythema (Grade 1) | 3.0% | 2.7% | 0.90 |
| Pruritus | 1.2% | 1.1% | 0.98 |
| Nodule/Induration | 0.0% | 0.0% | N/A |

**Analysis:** The lack of statistically significant difference between Glucogen-XR and the saline placebo confirms that the isotonicity adjustment using D-Mannitol successfully mitigated the chemical irritation typically associated with high-concentration peptide therapeutics.

---

### 7.0 Manufacturing Controls and Release Specifications
To ensure every commercial batch maintains the established comfort profile, strict IPC (In-Process Controls) are implemented at the 3000 Innovation Drive facility.

#### 7.1 Analytical Procedure for Osmolality (SOP-QC-089)
*   **Equipment:** Fiske 210 Micro-Osmometer (Freezing Point Depression).
*   **Standardization:** 290 mOsm/kg NaCl standard (NIST traceable).
*   **Sample Volume:** 20 $\mu$L.
*   **Acceptance Criteria:** 275 – 315 mOsm/kg.

**Table 4: Batch Release Data – Tonicity & pH Stability**
| Batch Number | Manufacture Date | Osmolality (mOsm/kg) | pH | Appearance |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-101 | 12-JAN-2025 | 291 | 6.51 | Clear, Colorless |
| GLUC-2025-105 | 19-JAN-2025 | 289 | 6.49 | Clear, Colorless |
| GLUC-2025-110 | 26-JAN-2025 | 294 | 6.50 | Clear, Colorless |
| GLUC-2025-115 | 02-FEB-2025 | 290 | 6.52 | Clear, Colorless |

---

### 8.0 Impact of Extended Release Mechanism on Local Tissue
Glucogen-XR utilizes a proprietary Google Health Sciences (GHS) peptide conjugation that facilitates a slow release from the subcutaneous depot. A potential concern for ISRs in extended-release products is "depot-related induration."

#### 8.1 Histopathological Evaluation
In GLP-compliant porcine studies (Study #GHS-TOX-442), skin biopsies at the injection site were taken at Day 7 post-injection.
*   **Observation:** Minimal lymphocytic infiltration. No evidence of granuloma formation or tissue necrosis.
*   **Conclusion:** The isotonic formulation environment prevents initial tissue trauma, allowing the glucapeptide depot to reside in the interstitium without triggering a chronic foreign body response.

### 9.0 Mitigating Injection Pain: Needle Gauge and Force Analysis
Beyond tonicity, physical delivery factors contribute to patient comfort. Glucogen-XR is delivered via a pre-filled autoinjector (GHS-SmartJect).

*   **Needle Specification:** 31G Thin Wall (TW), 5mm length.
*   **Injection Force:** 5.2 N (mean).
*   **Injection Duration:** 4.8 seconds for 0.5 mL.

The combination of a 31G needle and an isotonic solution reduces the "burn" sensation frequently reported with GLP-1 analogues that utilize acidic pH (e.g., pH 4.0) or hypertonic concentrations.

### 10.0 Conclusion
The formulation of Glucogen-XR (Batch series GLUC-2025-XXX) has been meticulously engineered to ensure maximal patient comfort. By utilizing D-Mannitol as a precise tonicity modifier to achieve a target osmolality of 290 mOsm/kg at a physiological pH of 6.5, Google Health Sciences has minimized the risk of injection site reactions. Clinical and *in vitro* data confirm that the drug product is non-irritating, non-hemolytic, and bio-equivalent to physiological saline in terms of local tissue tolerability.

---
**Footnotes & References:**
1.  *GHS Internal Report R-2024-55: Physicochemical stability of Glucapeptide in Mannitol-based buffers.*
2.  *Journal of Pharmaceutical Sciences (2022), "Tonicity and Nociception in Subcutaneous Delivery of Biologics."*
3.  *USP 43-NF 38 <785> Osmolality and Freezing Point Depression.*
4.  *Clinical Study Report GHS-GLUC-202: Phase II assessment of Glucogen-XR.*

---

# Selection of Container Closure System

## Primary Packaging Selection

# MODULE 3: QUALITY (MODALITIES: BIOLOGICS/PEPTIDES)
## SECTION 3.2.P.2.4: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.P.2.4.1: PRIMARY PACKAGING SELECTION

---

#### 1.0 OVERVIEW AND STRATEGIC RATIONALE

The selection of the primary packaging system for **Glucogen-XR (glucapeptide extended-release)** was driven by the unique physiochemical requirements of the GLP-1 receptor agonist peptide and its specific extended-release (XR) formulation matrix. Given the drug’s high sensitivity to surface adsorption, pH fluctuations, and oxidative stress, Google Health Sciences (GHS) implemented a "Quality by Design" (QbD) approach to define the Critical Quality Attributes (CQAs) of the Container Closure System (CCS).

The primary packaging selected for Glucogen-XR is a **2.25 mL Long Type I Borosilicate Glass Pre-filled Syringe (PFS)** with a staked needle (29G thin wall), utilizing a fluoropolymer-coated plunger stopper. This configuration was selected to ensure 24-month stability at 2°C to 8°C and a 30-day room temperature excursion period.

---

#### 2.0 COMPONENT SPECIFICATIONS AND MATERIAL SCIENCE

##### 2.1 Glass Barrel Selection: Type I Plus® vs. Standard Type I
During the Phase II development program (Batch Series GLUC-2025-001 through GLUC-2025-015), comparative studies were performed between standard Type I borosilicate glass and an advanced aluminosilicate-strengthened glass with a low-alkali-leachable profile (GHS internal spec: GHS-PKG-GL-004).

**Table 1: Physical and Chemical Comparison of Glass Barrel Candidates**

| Parameter | Specification | Standard Type I (Control) | Type I Plus (Selected) | Test Method |
| :--- | :--- | :--- | :--- | :--- |
| **Alkali Release** | ≤ 0.1 mL (0.01M HCl) | 0.08 mL | 0.02 mL | USP <660> |
| **Surface Energy** | ≥ 45 mN/m | 38 mN/m | 52 mN/m | Contact Angle |
| **Boron Leaching** | ≤ 500 ppb | 420 ppb | < 5 ppb (LOQ) | ICP-MS |
| **Aluminum Leaching** | ≤ 100 ppb | 85 ppb | < 2 ppb (LOQ) | ICP-MS |
| **Delamination Risk** | Low | Moderate (pH 8.5+) | Negligible | ASTM F2491 |

**Calculations for Surface-to-Volume Ratio (S/V):**
For the 2.25 mL long syringe ($R = 4.325 \text{ mm}$):
$$V = \pi r^2 h$$
$$S = 2\pi r h + \pi r^2$$
For a fill volume of 1.5 mL ($h = 25.5 \text{ mm}$):
$$S/V \text{ Ratio} = \frac{2\pi(4.325)(25.5) + \pi(4.325)^2}{1500 \text{ mm}^3} \approx 0.501 \text{ mm}^{-1}$$
The low S/V ratio of the 2.25 mL long format compared to the 1.0 mL standard format reduces the relative concentration of potential leachables interacting with the glucapeptide.

---

#### 3.0 ELSTOMERIC CLOSURE SYSTEM: PLUNGER STOPPER SELECTION

The Glucogen-XR formulation contains a non-ionic surfactant (Polysorbate 80) to stabilize the peptide. However, Polysorbate 80 is known to accelerate the leaching of zinc and accelerators from standard halobutyl rubbers. Therefore, a FluroTec® (ETFE) laminated plunger was mandated.

##### 3.1 Plunger Comparative Analysis (Study Report GHS-RD-2024-098)
The study compared three plunger types over a 6-month accelerated period (40°C/75% RH).

**Table 2: Plunger Leachable and Functional Performance Data**

| Plunger ID | Coating Material | Zinc Leached (ppm) | Break-loose Force (N) | Gliding Force (N) | Peptide Adsorption (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PL-778 (Uncoated)** | None | 12.5 | 8.2 ± 1.2 | 5.5 ± 0.8 | 4.2% |
| **PL-882 (Siliconized)** | Silicone Oil | 8.2 | 4.5 ± 0.5 | 3.2 ± 0.4 | 2.1% |
| **PL-XR-001 (Selected)** | **ETFE Film** | **< 0.05 (LOD)** | **5.1 ± 0.3** | **4.8 ± 0.2** | **< 0.5%** |

*Note: Batch GLUC-2025-P1 used as the test lot. Statistics calculated at N=30.*

---

#### 4.0 PROTOCOL FOR SYRINGE FUNCTIONALITY TESTING (PFT)

The Glucogen-XR delivery system must interface seamlessly with the Autoinjector (GHS-AI-Gen2). The following protocol defines the selection criteria for the break-loose and glide force (BLGF).

**Protocol ID: GHS-SOP-5582: Mechanical Characterization of Primary Packaging**

1.  **Objective:** To determine the influence of aging on the lubrication profile of the PFS.
2.  **Equipment:** ZwickRoell Texture Analyzer with 50N Load Cell (Equipment ID: GHS-MECH-09).
3.  **Procedure:**
    *   3.1 Mount syringe in the universal fixture.
    *   3.2 Set crosshead speed to 100 mm/min (simulating autoinjector spring rate).
    *   3.3 Measure force at $t=0$ (Break-loose).
    *   3.4 Record mean force from $x=5\text{ mm}$ to $x=20\text{ mm}$ (Dynamic Glide Force).
    *   3.5 Analyze data using GHS-Stat v4.2 (Linear Regression for force drift).

**Table 3: Glide Force Stability Data (Lot GLUC-2025-009)**

| Storage Condition | Time Point | Break-loose (N) | Glide Force (N) | Result |
| :--- | :--- | :--- | :--- | :--- |
| 5°C | T=0 | 4.8 | 4.1 | PASS |
| 5°C | 12 Months | 5.0 | 4.3 | PASS |
| 25°C/60% RH | 6 Months | 5.4 | 4.9 | PASS |
| 40°C/75% RH | 3 Months | 7.2 | 6.5 | ALERT |

---

#### 5.0 EXTRACTABLES AND LEACHABLES (E&L) ASSESSMENT

In alignment with **USP <1663>** and **USP <1664>**, a comprehensive E&L program was conducted by Google Health Sciences to ensure that no components of the primary packaging compromise the safety or efficacy of the Glucapeptide.

##### 5.1 Extraction Solvents
The following solvents were used to bracket the Glucogen-XR formulation (pH 7.4):
*   Aqueous buffer at pH 3.0
*   Aqueous buffer at pH 9.0
*   50% Ethanol (to simulate surfactant-mediated leaching)

##### 5.2 Summary of Identified Leachables
Data derived from Batch **GLUC-2025-EXP-A1** stored for 18 months at 5°C.

**Table 4: Leachable Profile and Toxicological Thresholds**

| Compound | Source | Concentration (µg/day) | AET (Analytical Evaluation Threshold) | Safety Margin (MOS) |
| :--- | :--- | :--- | :--- | :--- |
| **Silicone Oil** | Syringe Lubricant | 12.4 | 150.0 | > 10x |
| **BHT** | Plunger Antioxidant | < 0.1 | 1.5 | > 15x |
| **Stearic Acid** | Rubber Processing Aid | 0.45 | 10.0 | > 20x |
| **Tungsten** | Needle Insertion | 0.002 | 0.05 | > 25x |

**Tungsten Sensitivity Analysis:**
Glucogen-XR is highly sensitive to tungsten-induced aggregation. During the selection process, Google Health Sciences specified "Low Tungsten" or "Tungsten-Free" vacuum-forming processes for the needle attachment. Evaluation of Lot **GLUC-2025-004** showed an aggregate level of 0.2% via SEC-HPLC, compared to 1.8% in standard tungsten-pin formed syringes.

---

#### 6.0 OXYGEN PERMEATION AND PEPTIDE OXIDATION

Glucapeptide contains a Methionine residue at position 14 (Met-14) which is susceptible to oxidation. The choice of the plunger stopper thickness and the integrity of the needle shield (RNS) were evaluated for oxygen ingress.

**Formula for Oxygen Transmission Rate (OTR):**
$$J = \frac{P \cdot \Delta p}{L}$$
Where:
*   $J = \text{Permeation flux}$
*   $P = \text{Permeability coefficient of the bromobutyl rubber}$
*   $\Delta p = \text{Partial pressure gradient of } O_2$
*   $L = \text{Seal width (plunger ribs)}$

**Table 5: Oxidation of Met-14 Relative to Plunger Rib Configuration**

| Plunger Design | Number of Ribs | Compression % | Oxygen Ingress (cc/day) | % Met-Oxidation (12M) |
| :--- | :--- | :--- | :--- | :--- |
| Design A | 2 | 3% | $1.2 \times 10^{-4}$ | 1.4% |
| **Design B (Selected)** | **3** | **6%** | $0.4 \times 10^{-4}$ | **0.3%** |

---

#### 7.0 REGULATORY COMPLIANCE MATRIX

The primary packaging components comply with the following international standards:

1.  **Glass Barrel:** USP <660> Type I Glass Containers; EP 3.2.1 Glass Containers for Pharmaceutical Use.
2.  **Elastomeric Plunger:** USP <381> Elastomeric Closures for Injections; EP 3.2.9 Rubber Closures for Containers.
3.  **Needle Shield (RNS):** ISO 11040-4: Prefilled syringes — Part 4: Glass barrels for injectables.
4.  **Biological Reactivity:** USP <87> (In vitro) and USP <88> (In vivo Class VI).

---

#### 8.0 CONCLUSION

Based on the extensive mechanical, chemical, and stability data generated across batches **GLUC-2025-001 through GLUC-2025-050**, the 2.25 mL Type I Borosilicate glass syringe with ETFE-coated plungers has been selected as the final primary packaging for Glucogen-XR. This system provides the necessary barrier properties to maintain peptide potency, minimizes leachable interaction, and ensures consistent delivery forces required for use in the autoinjector system.

---
**Footnotes:**
*   [1] GHS Document GHS-PHARM-2023-R01: "Risk Assessment of Silicone Oil Induced Aggregation in Glucapeptide Formulations."
*   [2] ICH Q3D (R1): "Guideline for Elemental Impurities."
*   [3] FDA Guidance for Industry: "Container Closure Systems for Packaging Human Drugs and Biologics."

---

## Device Selection and Design

# MODULE 3: QUALITY (CMC)
## 3.2.P DRUG PRODUCT
### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.4 Container Closure System
##### 3.2.P.2.4.1 Device Selection and Design (Glucogen-XR Autoinjector System)

---

### 1. OVERVIEW OF DEVICE STRATEGY

The delivery system for Glucogen-XR (glucapeptide extended-release), designated as the **GHS-AI-v4.2 Autoinjector**, represents a critical quality attribute (CQA) of the final drug-device combination product. Given the pharmacokinetic profile of Glucogen-XR—a high-concentration, high-viscosity (15-22 cP) peptide formulation—the selection and design of the device were governed by the need for subcutaneous (SC) delivery precision, patient adherence, and the physical stability of the biologic entity over a 24-month shelf life.

The GHS-AI-v4.2 is a single-use, disposable, spring-powered mechanical autoinjector integrated with a 1.0 mL Long Pre-filled Syringe (PFS). The design philosophy follows **ICH Q8(R2)** regarding Quality by Design (QbD) and **ISO 11608-1:2022** for needle-based injection systems.

---

### 2. DESIGN INPUTS AND TARGET PRODUCT PROFILE (TPP)

The device selection process was initiated by establishing the Functional Design Requirements (FDR) based on the target patient population (Type 2 Diabetes Mellitus) and the physicochemical properties of the glucapeptide.

#### Table 2.4.1-1: Device Design Input Specification (DDIS)

| Parameter | Requirement/Specification | Rationale/Reference |
| :--- | :--- | :--- |
| **Delivered Volume** | 0.5 mL ± 0.05 mL | Dosing accuracy for 5mg/10mg strengths |
| **Injection Time** | ≤ 10 seconds | Patient convenience/adherence |
| **Needle Gauge** | 27G Thin Wall (TW) | Balance of flow rate vs. injection pain |
| **Needle Insertion Depth** | 5.0 mm to 8.0 mm | Subcutaneous delivery optimization |
| **Activation Force** | 5 N to 15 N | Prevention of accidental firing; Ease of use for elderly |
| **Viscosity Compatibility** | Up to 25 cP at 25°C | Accommodation of Glucogen-XR formulation |
| **Extended-Release Integrity** | No shear-induced degradation | Preservation of peptide tertiary structure |
| **Biocompatibility** | ISO 10993 compliant | Safety of fluid path materials |

---

### 3. COMPONENT SELECTION AND TECHNICAL SPECIFICATIONS

The GHS-AI-v4.2 comprises three primary sub-assemblies: the Power Pack, the Drive Mechanism, and the Primary Container Closure System (PCCS).

#### 3.2.P.2.4.1.1 Primary Container Closure System (PCCS)
The core of the device is a 1.0 mL Long Type I Borosilicate Glass Syringe. Google Health Sciences (GHS) evaluated multiple glass vendors under protocol **GHS-DEV-PFS-2024-098**.

**Table 2.4.1-2: PCCS Component Matrix**
| Component | Material | Manufacturer/Grade | Batch/Lot Ref (Example) |
| :--- | :--- | :--- | :--- |
| **Syringe Barrel** | Type I Borosilicate Glass | Schott TopPac® / Fiolax® | GLUC-2025-MAT-001 |
| **Plunger Stopper** | Bromobutyl Rubber (FluroTec® coated) | West Pharmaceutical Services | GLUC-2025-MAT-002 |
| **Needle** | 27G TW, 1/2 inch, St. Steel | Becton Dickinson (BD) | GLUC-2025-MAT-003 |
| **Needle Shield** | Rigid Needle Shield (RNS) | FM30 Elastomer | GLUC-2025-MAT-004 |

#### 3.2.P.2.4.1.2 Power Spring Selection and Force Calculations
To ensure complete delivery of the 15-22 cP formulation within the 10-second window, the spring constant ($k$) was optimized using the Hagen-Poiseuille equation for fluid flow through a needle:

$$Q = \frac{\pi \cdot R^4 \cdot \Delta P}{8 \cdot \eta \cdot L}$$

Where:
*   $Q$ = Flow rate
*   $R$ = Needle inner radius
*   $\Delta P$ = Pressure drop (provided by spring force $F / \text{Area}$)
*   $\eta$ = Dynamic viscosity (22 cP)
*   $L$ = Needle length

**Calculated Required Spring Force:**
For a 27G TW needle ($R \approx 0.13$ mm), to achieve $Q = 0.05$ mL/sec, the required spring force at end-of-stroke (EOS) was calculated at **28.4 N**.

---

### 4. MANUFACTURING AND ASSEMBLY PROTOCOL

The assembly of the Glucogen-XR autoinjector is conducted at the GHS South San Francisco facility (Building 4) under Class 10,000 (ISO 7) cleanroom conditions.

#### Protocol GHS-ASSY-001: Autoinjector Integration
1.  **PFS Inspection:** Automated Visual Inspection (AVI) for glass cracks or protein aggregation (Batch: GLUC-2025-PFS-XX).
2.  **Lubrication:** Precise application of 0.4 mg of medical-grade silicone oil (Dow Corning 360) via diving nozzle to ensure consistent break-loose and gliding forces.
3.  **Power Pack Mating:** Insertion of the drive module into the outer housing.
4.  **Final Assembly:** Snap-fit engagement of the PFS sub-assembly into the housing until the primary lock-out click is acoustically verified.
5.  **Labeling:** Laser-etching of Lot Number and Expiry (e.g., **Lot: GLUC-2025-EXP01**).

---

### 5. PERFORMANCE TESTING AND VALIDATION DATA

Verification of the device design was performed using three pivotal batches of Glucogen-XR.

#### Table 2.4.1-3: Performance Data (Batch GLUC-2025-001 through 003)

| Test Parameter | Method | Acceptance Criteria | Results (Avg/SD) |
| :--- | :--- | :--- | :--- |
| **Dose Accuracy** | Gravimetric (ISO 11608) | 0.45 - 0.55 g | 0.502 g (SD 0.008) |
| **Injection Time** | High-speed Chronometry | ≤ 10.0 sec | 7.2 sec (SD 0.4) |
| **Needle Extension** | Optical Comparator | 5.0 - 8.0 mm | 6.4 mm (SD 0.2) |
| **Activation Force** | Force Transducer | 5.0 - 15.0 N | 11.2 N (SD 1.1) |
| **Cap Removal Force** | Pull-off Tester | 4.0 - 20.0 N | 14.5 N (SD 2.0) |

#### 5.1 Stress Testing (Simulated Misuse)
To comply with **FDA Guidance for Human Factors Engineering**, the device was subjected to drop testing (1 meter onto concrete) and temperature cycling (-20°C to +40°C).
*   **Results:** No cracking of the glass PFS (Batch GLUC-2025-STRESS-01). 100% of units remained functional and delivered the full dose within specifications.

---

### 6. HUMAN FACTORS AND USABILITY ENGINEERING

A summative human factors study (**GHS-HF-2024-SUM**) was conducted with 75 participants (25 Type 2 Diabetes patients, 25 caregivers, 25 HCPs).

**Key Findings:**
*   **Success Rate:** 98.7% successful injection on first attempt.
*   **Critical Errors:** Zero (0) needle stick injuries.
*   **User Feedback:** The "double-click" auditory feedback mechanism was cited as the most helpful feature for confirming dose completion.

---

### 7. REGULATORY COMPLIANCE AND STANDARDS

The GHS-AI-v4.2 design and selection process adheres to the following:
1.  **21 CFR Part 4:** Regulation of Combination Products.
2.  **21 CFR Part 820:** Quality System Regulation (Design Controls).
3.  **ISO 11608-1:2022:** Needle-based injection systems for medical use.
4.  **ISO 14971:2019:** Application of risk management to medical devices.
5.  **USP <1207>:** Sterile Product Packaging—Integrity Evaluation.

---

### 8. CONCLUSION

The selection of the GHS-AI-v4.2 autoinjector for Glucogen-XR is justified by its robust mechanical performance, its compatibility with the high-viscosity peptide formulation, and its proven usability in the target patient population. The use of premium components (Schott TopPac®, West FluroTec®) ensures minimal interaction between the drug substance and the container closure system, maintaining the long-term stability and potency of the glucapeptide.

**[End of Subsection 3.2.P.2.4.1]**

---

## Compatibility with Formulation

# MODULE 3: QUALITY (CMC)
## 3.2.P DRUG PRODUCT (GLUCOGEN-XR)
### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.4 Container Closure System
##### 3.2.P.2.4.3 Compatibility with Formulation

---

### 1.0 Executive Summary of Compatibility Studies

The compatibility of Glucogen-XR (glucapeptide extended-release), a high-potency GLP-1 receptor agonist, with its primary container closure system (CCS) is a critical quality attribute (CQA) ensuring long-term stability, safety, and efficacy. Given the amphiphilic nature of the glucapeptide moiety and the non-Newtonian viscosity profile of the extended-release matrix, the interaction between the formulation and the contact surfaces must be rigorously characterized.

This section details the extensive compatibility assessment performed between the Glucogen-XR drug product and the selected 1.5 mL Type I Borosilicate glass cartridge, the bromobutyl elastomeric plunger (fluorocarbon-coated), and the multi-layer seal assembly.

### 2.0 Regulatory Framework and Compliance

All compatibility studies were designed and executed in accordance with the following regulatory guidances and pharmacopeial standards:

*   **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics (May 1999)*.
*   **ICH Q1A(R2):** *Stability Testing of New Drug Substances and Products*.
*   **ICH Q3E (Draft):** *Assessment and Control of Extractables and Leachables (E&L)*.
*   **USP <1663>:** *Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <1664>:** *Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <381>:** *Elastomeric Components used in Injectable Pharmaceutical Product Packaging/Delivery Systems*.
*   **USP <660>:** *Containers—Glass*.
*   **ISO 11040-4:** *Prefilled syringes — Part 4: Glass barrels for injectables and sterilized subassembled syringes ready for filling*.

### 3.0 Materials of Construction (MOC) Specification

The following components were subjected to compatibility testing (Table 3.1).

**Table 3.1: Specifications of the Primary Container Closure System Components**

| Component ID | Description | Material of Construction | Manufacturer | DMF Number |
| :--- | :--- | :--- | :--- | :--- |
| **C-G-1.5** | 1.5 mL Cartridge | Type I Borosilicate Glass (FIOLAX®) | SCHOTT AG | 12345 |
| **P-B-882** | Plunger Stopper | Bromobutyl Rubber (4023/50) with FluroTec® Film | West Pharmaceutical Services | 56789 |
| **S-A-202** | Crimp Seal | Aluminum Shell with Bromobutyl/PTFE Septum | Datwyler | 91011 |
| **L-S-001** | Silicone Oil | Medical Grade Dimethicone (350 cSt) | Dow Corning | 13579 |

---

### 4.0 Adsorption and Surface Interaction Studies

Glucogen-XR contains a 31-amino acid peptide with significant hydrophobic regions. Interaction with the glass wall and the elastomeric plunger can lead to protein loss, denaturation, or the formation of sub-visible particles.

#### 4.1 Methodology for Adsorption Testing
To quantify the extent of peptide adsorption, Glucogen-XR (Batch: GLUC-2025-A01) was filled into the primary CCS and stored at 5°C and 25°C. At designated time points, the peptide concentration was measured using RP-HPLC-UV (Method GHS-TM-104) and compared against a Teflon-lined control container.

**Table 4.1: Recovery of Glucapeptide (%) as a Function of Surface Contact Time**

| Time Point | Storage Temp | Concentration (mg/mL) | Recovery (%) | RSD (%) (n=6) |
| :--- | :--- | :--- | :--- | :--- |
| Initial (T0) | N/A | 10.02 | 100.0% | 0.2% |
| 24 Hours | 5°C | 9.98 | 99.6% | 0.4% |
| 7 Days | 5°C | 9.97 | 99.5% | 0.5% |
| 30 Days | 5°C | 9.96 | 99.4% | 0.7% |
| 6 Months | 5°C | 9.94 | 99.2% | 0.8% |
| 24 Hours | 25°C | 9.96 | 99.4% | 0.5% |
| 30 Days | 25°C | 9.91 | 98.9% | 1.1% |

**Calculation of Surface Adsorption Rate (Γ):**
The surface adsorption was calculated using the formula:
$$\Gamma = \frac{(C_0 - C_e) \cdot V}{A}$$
Where:
*   $C_0$ = Initial concentration (10.0 mg/mL)
*   $C_e$ = Equilibrium concentration
*   $V$ = Fill volume (1.0 mL)
*   $A$ = Wetted surface area ($\approx 8.5 \text{ cm}^2$ for 1.5 mL cartridge)

**Result:** The calculated $\Gamma$ for Glucogen-XR on Type I glass was $< 0.05 \text{ \mu g/cm}^2$, which is well within the acceptable limits for biologics.

#### 4.2 Sub-visible Particle Analysis (USP <788>)
Interactions between the silicone oil (L-S-001) and the GLP-1 peptide can nucleate protein aggregation. Studies were conducted using Micro-Flow Imaging (MFI) and Light Obscuration (HIAC).

**Table 4.2: Sub-visible Particle Counts (Cumulative) per mL**

| Batch Number | Condition | Time Point | $\geq 10 \text{ \mu m}$ | $\geq 25 \text{ \mu m}$ | Particle Morphology |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-B04 | 5°C | 12 Mo | 142 | 8 | Spherical (Silicone) |
| GLUC-2025-B04 | 40°C/75% RH | 6 Mo | 485 | 42 | Proteinaceous/Fibrillar |
| **USP Limit** | **N/A** | **N/A** | **< 6000** | **< 600** | **N/A** |

---

### 5.0 Extractables and Leachables (E&L) Assessment

#### 5.1 Extractable Study (Component Level)
A "worst-case" extraction was performed on the P-B-882 plungers using IPA, Hexane, and Water (pH 3, 7, 10).

**Table 5.1: Summary of Extractables from FluroTec® Plungers**

| Extractant | Compound Identified | Level ($\mu\text{g/g}$) | Analytical Method |
| :--- | :--- | :--- | :--- |
| Hexane | Antioxidant 168 | 12.4 | GC-MS |
| IPA | Palmitic Acid | 5.2 | GC-MS |
| Water (pH 9.5) | Zinc Ion | 0.8 | ICP-OES |
| Water (pH 9.5) | Stearate Salts | 2.1 | LC-MS |

#### 5.2 Leachable Study (Drug Product Level)
Three registration batches (GLUC-2025-001, 002, 003) were monitored for leachables over 24 months.

**Analytical Thresholds:**
*   **Analytical Evaluation Threshold (AET):** Based on a Safety Concern Threshold (SCT) of $1.5 \text{ \mu g/day}$ and a maximum daily dose of 1 injection.
*   **$AET = \frac{SCT \cdot D_{total}}{D_{daily} \cdot UF} \rightarrow 0.15 \text{ \mu g/mL}$.**

**Table 5.2: Leachable Monitoring Results (24 Months at 5°C)**

| Leachable Species | Source | Detection (T24) | AET Limit | Status |
| :--- | :--- | :--- | :--- | :--- |
| BHT | Plunger | BQL ($< 0.05 \text{ \mu g/mL}$) | 0.15 | Pass |
| Aluminum | Glass | 0.012 ppm | 0.5 ppm | Pass |
| Tungsten | Glass/Pin | $< 2 \text{ ppb}$ | 10 ppb | Pass |
| PDMS (Silicone) | Lubricant | 4.2 ppm | N/A | Monitored |

---

### 6.0 pH and Buffering Compatibility

The Glucogen-XR formulation is buffered at pH 7.4. Borosilicate glass can undergo ion exchange, leading to "pH drift" or "glass lamellae" formation.

#### 6.1 pH Stability Protocol
1.  Fill 50 cartridges with Batch GLUC-2025-C01.
2.  Store inverted (to maximize plunger contact) and upright.
3.  Measure pH at intervals using a micro-electrode (USP <791>).

**Table 6.1: pH Variation over 36 Months**

| Batch | Orientation | Temp | T0 | T12M | T24M | T36M (Est) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-C01 | Inverted | 5°C | 7.42 | 7.43 | 7.45 | 7.46 |
| GLUC-2025-C01 | Upright | 5°C | 7.42 | 7.42 | 7.43 | 7.44 |
| GLUC-2025-C01 | Inverted | 25°C | 7.42 | 7.51 | 7.62 | N/A |

**Conclusion:** The pH shift is $\leq 0.05$ units at the recommended storage temperature, indicating excellent compatibility between the buffer system and the glass surface.

---

### 7.0 Gliding and Break-loose Force (Functional Compatibility)

The interaction between the silicone oil and the FluroTec® coating of the plunger affects the delivery force when used with the Google Health Sciences "G-Dose" autoinjector.

#### 7.1 Protocol for Force Measurement (ISO 11040-4)
*   **Equipment:** Texture Analyzer (Model TA-XT2i).
*   **Speed:** 100 mm/min.
*   **Parameters:** Break-loose Force (F_b), Glide Force (F_g).

**Table 7.1: Force Profile during Storage (Batch GLUC-2025-D02)**

| Storage Time (5°C) | Break-loose Force (N) | Mean Glide Force (N) | Max Glide Force (N) |
| :--- | :--- | :--- | :--- |
| 0 Months | 4.8 | 3.2 | 3.9 |
| 6 Months | 5.2 | 3.4 | 4.1 |
| 12 Months | 5.5 | 3.5 | 4.5 |
| 24 Months | 6.1 | 3.8 | 4.9 |
| **Specification** | **$\leq 10.0$** | **$\leq 8.0$** | **$\leq 10.0$** |

**Statistical Analysis:**
A regression analysis of $F_b$ vs. Time yields a slope of $0.054 \text{ N/month}$. Extrapolation to the 36-month shelf life suggests $F_b \approx 6.7 \text{ N}$, well below the autoinjector's failure limit of 15 N.

---

### 8.0 Delamination Propensity Study

Type I glass can be susceptible to delamination (formation of silica flakes). Following USP <1660>, Glucogen-XR was screened for glass durability.

**Table 8.1: Glass Surface Attack Indicators (Accelerated 40°C Storage)**

| Time (Months) | SiO2 (ppm) | B2O3 (ppm) | Al2O3 (ppm) | Visual (Tyndall) |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 0.2 | < 0.1 | 0.01 | Negative |
| 3 | 1.4 | 0.3 | 0.04 | Negative |
| 6 | 2.8 | 0.7 | 0.08 | Negative |

The low levels of elemental silicon and absence of visible flakes confirm the high chemical resistance of the FIOLAX® glass in the presence of the Glucogen-XR phosphate-citrate buffer matrix.

---

### 9.0 Oxygen and Moisture Permeation

Since Glucogen-XR is sensitive to oxidation (Methionine at residue 8), the seal integrity is paramount.

**Oxygen Transmission Rate (OTR):**
The OTR was measured using a MOCON OX-TRAN system. The average OTR for the assembled cartridge system was $0.005 \text{ cc/container/day}$, providing sufficient protection against oxidative degradation.

---

### 10.0 Final Conclusion on Compatibility

The cumulative data from chemical, physical, and functional studies confirm that the selected Container Closure System (1.5 mL Type I Glass, FluroTec® Plunger, and Aluminum Seal) is fully compatible with the Glucogen-XR formulation. There is no evidence of significant peptide adsorption, no leachable levels exceeding safety thresholds, and the mechanical performance remains stable throughout the proposed shelf life.

**Approval:**
*Technical Review by: Senior Regulatory Scientist, Google Health Sciences*
*Date: 14-Oct-2025*
*Document ID: GHS-GLUC-MOD3-243-COMPAT*

---

# Device Design and Development

## Autoinjector Mechanism

# MODULE 3: QUALITY (P.2 PHARMACEUTICAL DEVELOPMENT)
## SECTION: 3.2.P.2.4 DEVICE DESIGN AND DEVELOPMENT
### SUBSECTION: 3.2.P.2.4.1 Autoinjector Mechanism and Electromechanical Integration

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection details the design, functionality, and performance specifications of the proprietary **GHS-Dexterity™ Gen II Autoinjector**, the delivery system utilized for Glucogen-XR (glucapeptide extended-release) injection. The GHS-Dexterity™ Gen II is a single-use, disposable, electromechanically-assisted autoinjector designed to deliver a high-viscosity (15-22 cP) peptide formulation with high precision.

Due to the unique pharmacokinetic profile of Glucogen-XR, which utilizes a proprietary pegylated-glucapeptide backbone, the device must overcome significant fluid resistance while maintaining patient comfort. This section covers the internal drive mechanism, spring constants, force-to-fire dynamics, and the integration of the Google Cloud "Smart-Sync" NFC module for dose tracking.

---

#### 2.0 DEVICE ARCHITECTURE AND MECHANICAL COMPONENTS
The mechanism is divided into three primary functional sub-assemblies: the **Power Pack (Drive Train)**, the **Trigger/Safety Interlock**, and the **Dose Completion Indicator**.

##### 2.1 Mechanical Components Specification Table
The following table outlines the engineering tolerances for the primary mechanical components utilized in the GLUC-2025 series validation batches.

**Table 2.1-1: Component Specifications for GHS-Dexterity™ Gen II**

| Component ID | Description | Material Specification | Critical Dimension (mm) | Tolerance (μm) |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-MECH-001** | Main Compression Spring | Medical Grade SUS304 | Length: 45.5 mm | ± 0.15 |
| **GHS-MECH-002** | Plunger Rod (Fluted) | Polycarbonate (PC) | Diameter: 6.8 mm | ± 0.05 |
| **GHS-MECH-003** | Needle Shield Spring | SUS316 Stainless Steel | K-Constant: 0.22 N/mm | ± 5% |
| **GHS-MECH-004** | Internal Drive Chassis | ABS-PC Blend | Length: 112.0 mm | ± 0.10 |
| **GHS-MECH-005** | Friction Reducer Ring | PTFE-coated POM | ID: 7.15 mm | ± 0.02 |
| **GHS-MECH-006** | End-of-Dose Clicker | Beryllium Copper | Thickness: 0.12 mm | ± 0.01 |

---

#### 3.0 DRIVE MECHANISM DYNAMICS AND KINETICS
The Glucogen-XR formulation exhibits non-Newtonian behavior under high shear rates. To ensure a consistent delivery time of < 10 seconds, the drive mechanism utilizes a dual-stage spring system.

##### 3.1 Force Profile Analysis
The force required to initiate plunger movement ($F_{start}$) and maintain steady-state flow ($F_{dynamic}$) is calculated using the Modified Hagen-Poiseuille equation for viscous flow through a 29G Thin Wall (TW) needle:

$$F = \frac{8 \cdot \mu \cdot L \cdot Q}{\pi \cdot r^4} \cdot A_p$$

Where:
*   $\mu$ = Dynamic Viscosity (0.022 Pa·s)
*   $L$ = Needle Length (12.7 mm)
*   $Q$ = Volumetric Flow Rate ($m^3/s$)
*   $r$ = Inner Radius of Needle (0.000102 m)
*   $A_p$ = Area of Syringe Plunger ($3.11 \times 10^{-5} m^2$)

**Table 3.1-1: Calculated vs. Observed Delivery Forces (Batch GLUC-2025-001 through 005)**

| Batch Number | Viscosity (cP) | Theoretical Force (N) | Measured Mean Force (N) | Std Dev (σ) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 18.2 | 34.5 | 35.1 | 0.45 |
| GLUC-2025-002 | 19.5 | 36.8 | 37.2 | 0.52 |
| GLUC-2025-003 | 21.1 | 39.5 | 40.1 | 0.48 |
| GLUC-2025-004 | 17.9 | 33.8 | 34.2 | 0.41 |
| GLUC-2025-005 | 20.4 | 38.4 | 39.0 | 0.55 |

---

#### 4.0 STEP-BY-STEP ACTIVATION SEQUENCE (MECHANICAL)
The GHS-Dexterity™ Gen II follows a validated 4-step mechanical sequence to ensure needle safety and dosage accuracy.

1.  **Safety Cap Removal:** Upon removal of the rigid needle shield (RNS), the needle shield spring (GHS-MECH-003) is primed.
2.  **Skin Contact / Interlock Depression:** The user presses the device against the injection site. The needle shield moves proximally by 4.5 mm, aligning the internal firing pin with the sear of the plunger rod.
3.  **Trigger Release:** Upon pressing the activation button (or final depression of the shield in the "Push-to-Fire" variant), the main compression spring (GHS-MECH-001) releases stored energy.
4.  **Plunger Advance and Delivery:** The plunger rod drives the stopper through the 1.0 mL Long Pre-Filled Syringe (PFS).
5.  **Dose Completion:** At the end of the stroke, the plunger rod strikes the End-of-Dose Clicker (GHS-MECH-006), creating an audible "click" (min 65 dB) and a visual color change in the inspection window.

---

#### 5.0 REJECTION CRITERIA AND FAILURE MODE EFFECTS ANALYSIS (FMEA)
Following ISO 14971:2019, Google Health Sciences has performed a comprehensive FMEA on the autoinjector mechanism.

**Table 5.0-1: FMEA Extract - Mechanical Drive System**

| Failure Mode | Root Cause | Potential Effect | Risk Priority Number (RPN) | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Stalled Plunger** | Excessive Viscosity (>30 cP) | Incomplete Dose | 12 (Low) | 100% Viscosity testing of every batch (GLUC-2025-XP). |
| **Premature Activation** | Low Sear Engagement | Needle Stick Injury | 8 (Low) | Automated optical inspection (AOI) of sear geometry. |
| **Needle Shield Jam** | Flash on Molded Part | Failure to Fire | 15 (Low) | High-resolution mold maintenance schedule. |
| **No Audible Click** | Fatigue in Cu-Be Spring | Patient uncertainty | 24 (Med) | Fatigue testing to 5x expected shelf life. |

---

#### 6.0 SMART-SYNC™ NFC INTEGRATION PROTOCOL
The GHS-Dexterity™ Gen II includes a passive Near-Field Communication (NFC) tag (NXP NTAG 213 compatible) located in the upper housing. This module logs the exact time of activation when the plunger reaches the 95% delivery point, completing an electrical circuit.

##### 6.1 Circuit Continuity Protocol (GHS-PROT-ELEC-402)
1.  **Equipment:** Keysight E3631A Power Supply, Fluke 289 Multimeter.
2.  **Procedure:**
    *   Initialize the device by removing the safety pin.
    *   Simulate injection by depressing the plunger to $L = 52.4$ mm.
    *   Measure impedance across the "End-of-Dose" contacts.
    *   **Acceptance Criteria:** Resistance $< 0.5 \Omega$ upon contact; NFC data transmission triggered within 200ms.

---

#### 7.0 PERFORMANCE DATA: DOSE ACCURACY BY BATCH
The following table summarizes the dose accuracy (delivered volume) across representative clinical manufacturing batches. Target volume is 1.00 mL.

**Table 7.0-1: Dose Accuracy Data (ISO 11608-1)**

| Batch ID | $N$ | Mean Volume (mL) | Min Volume (mL) | Max Volume (mL) | RSD (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-010** | 300 | 1.002 | 0.988 | 1.015 | 0.85% |
| **GLUC-2025-011** | 300 | 0.998 | 0.982 | 1.011 | 0.91% |
| **GLUC-2025-012** | 300 | 1.005 | 0.990 | 1.020 | 0.77% |
| **GLUC-2025-013** | 300 | 0.999 | 0.985 | 1.012 | 0.88% |

---

#### 8.0 ENVIRONMENTAL ROBUSTNESS AND ACCELERATED AGING
Devices from batch **GLUC-2025-ENV** were subjected to extreme conditions per ASTM D4169.

*   **Free-Fall Drop Test:** 1.0 meter onto concrete (6 orientations).
    *   *Result:* 100% functionality maintained; no glass breakage in PFS.
*   **Temperature Cycling:** -20°C to +60°C for 96 hours.
    *   *Result:* Mean force-to-fire increased by only 1.2 N (within spec).
*   **Vibration (Shipping Simulation):** Random vibration spectrum for 180 minutes.
    *   *Result:* No activation or component displacement observed.

---

#### 9.0 REGULATORY COMPLIANCE AND STANDARDS
The GHS-Dexterity™ Gen II Autoinjector is developed and manufactured in accordance with the following international standards:

1.  **ISO 11608-1:2022:** Needle-based injection systems for medical use — Part 1: Requirements and test methods.
2.  **ISO 11608-5:2022:** Part 5: Automated functions.
3.  **FDA Guidance:** "Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products" (June 2013).
4.  **IEC 60601-1-2:** Medical electrical equipment - Electromagnetic disturbances (for NFC components).
5.  **USP <1>:** Injections and Implanted Drug Products (Parenterals)—Product Quality Tests.

---

#### 10.0 CONCLUSION
The mechanical and electromechanical design of the GHS-Dexterity™ Gen II Autoinjector ensures that Glucogen-XR is delivered with high precision (RSD < 1.0%) across a range of environmental conditions. The integration of high-force spring kinetics with low-friction internal components allows for a seamless patient experience despite the high viscosity of the extended-release formulation. All validation data from the GLUC-2025 series support the suitability of this device for commercial distribution.

**[END OF SUBSECTION]**

---

## Dose Selection and Accuracy

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## 3.2.P DRUG PRODUCT (GLUCOGEN-XR)
### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.4 DEVICE DESIGN AND DEVELOPMENT
##### 3.2.P.2.4.8 Dose Selection and Accuracy

---

### 1.0 Executive Summary
The dose selection and accuracy profile for the Glucogen-XR (glucapeptide extended-release) delivery system represents the culmination of extensive Quality by Design (QbD) principles applied to the Google Health Sciences (GHS) proprietary multidose autoinjector platform. Glucogen-XR is a GLP-1 receptor agonist indicated for Type 2 Diabetes Mellitus, formulated as a high-concentration (20 mg/mL) aqueous solution. Given the narrow therapeutic index of GLP-1 agonists regarding gastrointestinal tolerability and the critical nature of glycemic control, the device's ability to deliver precise, repeatable volumes (0.25 mg, 0.5 mg, and 1.0 mg increments) is paramount.

This section details the mechanical engineering tolerances, fluid dynamics simulations, and empirical verification studies (using Batch GLUC-2025-001 through GLUC-2025-015) that ensure compliance with **ISO 11608-1:2022** (Needle-based injection systems for medical use) and **FDA Guidance: Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013)**.

---

### 2.0 Regulatory Framework and Compliance Standards
The development of the dose selection mechanism adhered to the following international standards and regulatory guidelines:

*   **ISO 11608-1:2022**: Needle-based injection systems for medical use — Requirements and test methods.
*   **ISO 11608-5:2022**: Automated functions.
*   **FDA 21 CFR Part 820**: Quality System Regulation (Design Controls).
*   **ICH Q8(R2)**: Pharmaceutical Development.
*   **USP <1>**: Injections and Implanted Drug Products (Parenterals) — Quality Attributes.
*   **USP <1382>** and **<382>**: Assessment of Elastomeric Components and Systems Used in Injectable Drug Products.

---

### 3.0 Mechanical Design of the Dose Selection Mechanism

#### 3.1 Dial-Back Functionality and Torque Analysis
The Glucogen-XR device utilizes a non-linear helical lead screw mechanism that allows the patient to "dial up" the dose. A critical safety feature is the "dial-back" capability, which allows the user to correct an over-dialed dose without wasting the drug.

**Table 1: Mechanical Torque Specifications for Dose Selector (Equipment ID: GHS-TORQ-992)**
| Parameter | Specification (Ncm) | Rationale |
| :--- | :--- | :--- |
| Initial Breakaway Torque | 1.5 – 3.5 | Prevents accidental dialing while maintaining ease of use. |
| Incremental Dialing Torque | 0.8 – 2.2 | Ensures tactile feedback (clicks) are perceptible to geriatric patients. |
| Dial-Back Torque | 1.0 – 2.8 | Must be higher than dialing torque to prevent unintended reversal. |
| End-of-Dose Stop Torque | > 50.0 | Prevents over-dialing beyond the maximum 1.0 mg dose. |

#### 3.2 Lead Screw Geometry and Displacement Calculations
The accuracy of the dose is a direct function of the lead screw pitch ($P$) and the rotational angle ($\theta$). The linear displacement ($L$) of the plunger stopper is calculated as:

$$L = \frac{\theta}{360^\circ} \times P$$

For Glucogen-XR, the cartridge internal diameter ($ID$) is $6.35 \pm 0.05$ mm. The required volume ($V$) for a 0.5 mg dose (0.025 mL) is calculated by:

$$V = \pi \times \left(\frac{ID}{2}\right)^2 \times L$$

To account for the "Initial Injection Force" and "Plunger Compression," a compensation factor ($C_f$) of 1.02 is integrated into the screw pitch design to ensure the target volume is met under standard operating pressures (5-15 N).

---

### 4.0 Dose Accuracy Verification (Empirical Data)

Verification was performed using three distinct batches of the Glucogen-XR drug product to ensure consistency across the manufacturing spectrum.

#### 4.1 Test Methodology: Gravimetric Analysis
Dose accuracy was determined gravimetrically according to ISO 11608-1.
1.  **Analytical Balance**: Mettler Toledo XPR205 (Sensitivity: 0.01 mg).
2.  **Fluid Density**: $1.012$ g/cm³ at $23^\circ$C (determined for Batch GLUC-2025-004).
3.  **Procedure**: Each device was primed (2 units), followed by the delivery of the target dose into a tared evaporation-controlled vessel.

#### 4.2 Accuracy Results for Target Dose: 0.25 mg (Volume: 0.0125 mL)
**Table 2: Dose Accuracy Data for 0.25 mg Setting (Batch GLUC-2025-007)**
| Device Serial # | Target Mass (mg) | Delivered Mass (mg) | Deviation (%) | PASS/FAIL |
| :--- | :--- | :--- | :--- | :--- |
| GHS-DEV-1001 | 12.65 | 12.71 | +0.47 | PASS |
| GHS-DEV-1002 | 12.65 | 12.58 | -0.55 | PASS |
| GHS-DEV-1003 | 12.65 | 12.60 | -0.39 | PASS |
| GHS-DEV-1004 | 12.65 | 12.82 | +1.34 | PASS |
| GHS-DEV-1005 | 12.65 | 12.66 | +0.08 | PASS |
| **Mean (n=50)** | **12.65** | **12.67** | **+0.16** | **PASS** |
| **Std Dev** | -- | **0.09** | -- | -- |

#### 4.3 Accuracy Results for Target Dose: 1.0 mg (Volume: 0.05 mL)
**Table 3: Dose Accuracy Data for 1.0 mg Setting (Batch GLUC-2025-009)**
| Condition | Target Volume (µL) | Mean Delivered (µL) | SD (µL) | % CV | ISO 11608 Limit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Standard ($23^\circ$C) | 50.0 | 50.12 | 0.45 | 0.90% | $\pm$ 5% |
| Cold ($5^\circ$C) | 50.0 | 49.65 | 0.88 | 1.77% | $\pm$ 5% |
| Hot ($40^\circ$C) | 50.0 | 50.84 | 1.12 | 2.20% | $\pm$ 5% |

---

### 5.0 Influence of Fluid Dynamics and Viscosity

The Glucogen-XR formulation contains a high-molecular-weight PEGylated glucapeptide, resulting in a viscosity of $8.5 \pm 1.2$ cP at $25^\circ$C. This viscosity profile was characterized using a Brookfield DV2T Viscometer (Project ID: GHS-VISC-2025).

#### 5.1 Hagen-Poiseuille Flow Analysis
The pressure drop ($\Delta P$) across the 31G thin-wall needle during injection is modeled as:

$$\Delta P = \frac{8\mu LQ}{\pi R^4}$$

Where:
*   $\mu$ = dynamic viscosity ($0.0085$ Pa·s)
*   $L$ = needle length (12.7 mm)
*   $Q$ = flow rate ($0.025$ mL/s)
*   $R$ = needle internal radius (0.133 mm)

The resulting calculated injection force is 9.4 N, which falls well within the device spring capability (15.0 N peak force), ensuring that the full dose is delivered within the validated 5-second hold time.

---

### 6.0 Stress Testing and Robustness (Last-Dose Accuracy)

A critical regulatory requirement is the "Last Dose Lockout" mechanism. The device must prevent the user from selecting a dose greater than what remains in the 3 mL cartridge.

#### 6.1 Last-Dose Accuracy Protocol (GHS-PROT-DEV-004)
1.  **Objective**: Verify dose accuracy of the final possible dose in the cartridge.
2.  **Sample Size**: $n=30$ devices from Batch GLUC-2025-012.
3.  **Procedure**:
    *   Deliver doses of 1.0 mg sequentially until the dose selector locks.
    *   Measure the volume of the final delivered dose.
    *   Inspect the cartridge for residual "dead volume."

**Table 4: Last Dose Accuracy Performance (Batch GLUC-2025-012)**
| Metric | Specification | Observed Value | Result |
| :--- | :--- | :--- | :--- |
| Residual Volume (Dead Space) | < 0.05 mL | 0.038 mL | Compliant |
| Final Dose Accuracy | $\pm 0.005$ mL | $\pm 0.002$ mL | Compliant |
| Lockout Force | > 100 N | 142 N | Compliant |

---

### 7.0 Manufacturing Controls for Dose Accuracy

To ensure every Glucogen-XR device meets the specifications outlined above, Google Health Sciences employs an In-Line Automated Inspection System (GHS-VISION-X1) at the South San Francisco assembly facility.

**Sub-section 7.1: In-Process Quality Control (IPQC) Limits**
*   **Lead Screw Pitch Measurement**: Laser interferometry check on 100% of components. Limit: $P \pm 0.01$ mm.
*   **Spring Constant Verification**: $K = 1.2$ N/mm $\pm 5\%$.
*   **Lubrication Level**: 360-degree spray coverage of medical-grade silicone oil to minimize "stiction" (static friction) between the stopper and the glass barrel.

---

### 8.0 Statistical Analysis (CPK Values)

Process capability ($C_{pk}$) was calculated for the 0.5 mg dose across three registration batches.

**Table 5: Statistical Capability Summary**
| Batch ID | $n$ | Mean (mg) | Std Dev | $C_p$ | $C_{pk}$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 500 | 0.501 | 0.004 | 2.10 | 1.98 |
| GLUC-2025-005 | 500 | 0.499 | 0.005 | 1.95 | 1.88 |
| GLUC-2025-010 | 500 | 0.502 | 0.003 | 2.45 | 2.32 |

*Note: A $C_{pk} > 1.33$ is required for validated processes; Glucogen-XR consistently demonstrates $C_{pk} > 1.8$, indicating a highly capable and precise manufacturing process.*

---

### 9.0 Conclusion
The dose selection and accuracy of the Glucogen-XR delivery system have been rigorously validated through mechanical modeling, gravimetric verification, and statistical process control. The device ensures high precision ($CV < 3\%$) across all therapeutic dose settings and environmental conditions, fulfilling the requirements of ISO 11608-1 and supporting the clinical safety profile of the glucapeptide drug product.

---
**END OF SECTION**
**Document ID:** GHS-MOD3-DP-2.4.8-V1
**Effective Date:** 14-OCT-2025
**Author:** Google Health Sciences Regulatory Affairs (Device Division)

---

## Needle Design and Usability

# MODULE 3: QUALITY (PRE-MARKET SUBMISSION)
## 3.2.P DRUG PRODUCT (PHARMACEUTICAL DEVELOPMENT)
### 3.2.P.2.4 DEVICE DESIGN AND DEVELOPMENT
#### 3.2.P.2.4.8 Needle Design and Usability

---

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive technical justification for the needle selection, engineering specifications, and usability validation for the **Glucogen-XR (glucapeptide extended-release)** pre-filled syringe (PFS) and integrated autoinjector system. Given the high viscosity profile of the Glucogen-XR formulation (approximately 28 cP at 25°C), the selection of needle gauge, length, and wall thickness is critical to ensure patient comfort, reliable drug delivery, and adherence to the target pharmacokinetic (PK) profile.

The needle assembly, identified as **GHS-N-GEN2**, is a 29-gauge (29G) Thin-Wall (TW) stainless steel needle integrated into the primary container closure system. This design was optimized via Google Cloud Life Sciences’ proprietary "Digital Twin" simulation platform to minimize injection force while maximizing patient tolerability.

---

### 2.0 ENGINEERING SPECIFICATIONS AND MATERIALS
The needle used in the Glucogen-XR delivery system is manufactured in accordance with **ISO 7864:2016** (Sterile hypodermic needles for single use) and **ISO 9626:2016** (Stainless steel needle tubing for the manufacture of medical devices).

#### 2.1 Dimensional Analysis
The 29G Thin-Wall configuration was selected after a Comparative Optimization Study (Study ID: GHS-DEV-2024-009) evaluating 27G, 29G, and 31G options.

**Table 1: Technical Specifications for GHS-N-GEN2 Needle**

| Parameter | Specification | Tolerance | Rationale |
| :--- | :--- | :--- | :--- |
| **Needle Gauge** | 29G (Thin Wall) | N/A | Balanced flow vs. pain |
| **Outer Diameter (OD)** | 0.337 mm | ± 0.005 mm | ISO 9626 Compliance |
| **Inner Diameter (ID)** | 0.235 mm | ± 0.010 mm | Optimization for 28 cP viscosity |
| **Effective Length** | 12.7 mm | + 1.0 / - 0.5 mm | Subcutaneous delivery target |
| **Bevel Geometry** | 5-Bevel (Penta-point) | N/A | Reduced penetration force |
| **Material Grade** | SUS304 | N/A | Biocompatibility (ISO 10993) |
| **Lubrication** | Silicone Oil (Medical Grade) | < 0.25 mg/cm² | Reduced friction/tissue trauma |

#### 2.2 Material Compatibility and Extractables/Leachables (E&L)
The needle is bonded to the Type 1 Borosilicate glass barrel using a UV-cured epoxy resin (GHS-ADH-88). Extensive E&L studies (Batch: GLUC-2025-N01) were conducted under accelerated conditions (40°C/75% RH) for 6 months to ensure no heavy metal migration or adhesive leachables interact with the glucapeptide sequence.

---

### 3.0 FLUID DYNAMICS AND INJECTION FORCE CALCULATIONS
To ensure the Glucogen-XR formulation can be delivered within the required 10-second window by the autoinjector's power spring, the Hagen-Poiseuille equation was utilized to model the Pressure Drop ($\Delta P$).

#### 3.1 Mathematical Modeling
The required injection force ($F_{inj}$) is a function of the viscosity ($\eta$), the needle length ($L$), the flow rate ($Q$), and the internal radius ($r$) of the needle:

$$\Delta P = \frac{8 \eta L Q}{\pi r^4}$$

Where:
*   $\eta$ (Viscosity) = 0.028 Pa·s
*   $L$ (Length) = 0.0127 m
*   $Q$ (Flow Rate) = $1.0 \times 10^{-7}$ m³/s (1.0 mL in 10s)
*   $r$ (Radius) = $0.1175 \times 10^{-3}$ m (for 29G TW)

**Calculation Results:**
The calculated pressure drop for the 29G TW needle is approximately 482 kPa (69.9 psi). This allows the autoinjector spring (Constant: 14.2 N/mm) to maintain a delivery time of $8.2 \pm 0.4$ seconds across the operating temperature range (2°C to 30°C).

---

### 4.0 PENETRATION FORCE AND USABILITY TESTING
A critical factor in patient adherence for Type 2 Diabetes treatment is the "Injection Experience." Google Health Sciences conducted a Human Factors (HF) study (GHS-HF-2025-44) to evaluate the 5-bevel needle tip design.

#### 4.1 Penetration Force Protocol (GHS-SOP-00982)
**Equipment:** Instron 5942 Force Tester with 10N Load Cell.
**Substrate:** Polyurethane film (simulated human skin) per ISO 11608-2.

**Step-by-Step Procedure:**
1.  Mount the Glucogen-XR PFS (Batch: GLUC-2025-VAL01) into the Instron fixture.
2.  Calibrate the load cell to zero.
3.  Advance the needle at a constant velocity of 100 mm/min.
4.  Record the peak force (F-peak) required to breach the substrate.
5.  Record the drag force (F-drag) during the remaining 10mm of penetration.

**Table 2: Penetration Force Comparative Data**

| Test Batch | Needle Type | Peak Penetration Force (N) | Standard Deviation (σ) |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-N01** | 29G 5-Bevel (GHS) | 0.62 N | 0.04 |
| **Reference A** | 29G 3-Bevel (Std) | 0.88 N | 0.09 |
| **Reference B** | 27G 3-Bevel (Std) | 1.12 N | 0.12 |

**Conclusion:** The GHS-N-GEN2 needle reduces initial penetration force by 29.5% compared to standard 3-bevel 29G needles, significantly improving the patient's sensory perception of the injection.

---

### 5.0 NEEDLE CORING AND PATIENT SAFETY
Needle coring (the fragmentation of the rubber stopper or skin tissue) poses a risk of embolic events or injection site reactions.

#### 5.1 Fragmentation Test Results (USP <381>)
Testing was performed on the Glucogen-XR rigid needle shield (RNS) and the syringe plunger stopper (Batch: GLUC-2025-S09).

*   **Sample Size:** n=100 units.
*   **Procedure:** Needle was passed through the elastomer 10 times per unit.
*   **Observation:** No visible fragments (>50μm) were detected via microscopic inspection (Method: GHS-QC-55).
*   **Result:** PASS.

---

### 6.0 USABILITY AND HUMAN FACTORS INJECTION SIMULATION
Google Health Sciences performed a Summative Human Factors Validation study involving 75 participants (25 Naive Patients, 25 Experienced GLP-1 Users, 25 Healthcare Professionals).

#### 6.1 Usability Goals
1.  **Successful Deployment:** 100% of participants must successfully activate the device.
2.  **Needle Safety:** Zero instances of accidental needle stick injuries (NSI) post-injection.
3.  **Visual Confirmation:** 100% of participants must identify the "yellow plunger" indicating dose completion.

#### 6.2 Data Summary (Study GHS-HF-2025-44)

**Table 3: Usability Performance Metrics**

| Task ID | Description | Success Rate | Mean Time (sec) | Error Rate (%) |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Cap Removal | 100% | 2.1s | 0% |
| **T2** | Injection Site Prep | 98% | 12.4s | 2% |
| **T3** | Device Activation | 100% | 1.5s | 0% |
| **T4** | Hold Time (10s) | 96% | 10.2s | 4% |
| **T5** | Safety Shield Check | 100% | 1.1s | 0% |

**Sub-section 6.2.1: Use Errors and Mitigation**
The 4% error rate in Task T4 (Hold Time) was attributed to participants lifting the device before the second "click." This was mitigated in the Final Instruction for Use (IFU) by adding a bolded warning: **"Wait for the Green Checkmark and the Second Click."**

---

### 7.0 MANUFACTURING AND QUALITY CONTROL (QC)
The GHS-N-GEN2 needle is manufactured in a Class 10,000 (ISO 7) Cleanroom at the South San Francisco facility (Site ID: 3000-IN-SF).

#### 7.1 In-Process Controls (IPC)
During the production of Batch **GLUC-2025-LOT99**, the following IPCs are mandated:
1.  **Vision System Inspection:** 100% automated optical inspection (AOI) for needle straightness and bevel sharpness.
2.  **Pull Force Testing:** Sampling (n=20 per hour) to ensure the needle-to-glass bond strength exceeds 50N.
3.  **Siliconization Level:** Gravimetric analysis to confirm coating density ($0.20 \pm 0.05$ mg).

#### 7.2 Sterilization Validation
The needle assembly is sterilized using Ethylene Oxide (EtO) in accordance with **ISO 11135:2014**.
*   **Cycle ID:** GHS-ETO-P04.
*   **SAL (Sterility Assurance Level):** $10^{-6}$.
*   **Residuals:** EtO < 1 ppm; ECH < 1 ppm (Post-24 hour aeration).

---

### 8.0 REGULATORY COMPLIANCE STATEMENT
The needle design and usability program for Glucogen-XR conform to the following FDA Guidance Documents:
*   *Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (June 2013).*
*   *Applying Human Factors and Usability Engineering to Medical Devices (February 2016).*
*   *Glass Syringes for Therapeutic Antigen Injections (April 2011).*

Analytical data presented in this section supports the conclusion that the 29G TW needle is "Fit for Purpose" for the delivery of high-viscosity glucapeptide extended-release formulations, ensuring both mechanical reliability and patient safety.

---
**End of Section 3.2.P.2.4.8**
**Approver:** Dr. Alan Turing, Head of Device Regulatory Affairs, Google Health Sciences.
**Date:** 14-Oct-2025
**Document Ref:** GHS-XR-DP-M3-V1.2

---

# Human Factors and Usability Engineering

## User Studies and Feedback

# MODULE 3: QUALITY (3.2.P DRUG PRODUCT)
## SECTION: 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION: 3.2.P.2.1.2 HUMAN FACTORS AND USABILITY ENGINEERING
#### DOCUMENT REFERENCE: GHS-GLUCXR-HF-004: USER STUDIES AND FEEDBACK

---

### 1.0 Executive Summary
This subsection details the Human Factors (HF) Engineering and Usability Engineering (UE) validation studies performed for **Glucogen-XR (glucapeptide extended-release)**. These studies were conducted in accordance with FDA Guidance *“Applying Human Factors and Usability Engineering to Medical Devices”* (2016) and ISO/IEC 62366-1:2015. 

The primary objective was to evaluate the user interface of the Glucogen-XR Autoinjector (GHS-AI-V3) to ensure that the combination product can be used safely and effectively by the intended user populations (patients with Type 2 Diabetes, lay caregivers, and healthcare professionals) without resulting in serious medication errors or harm.

### 2.0 Regulatory Framework and Standards Compliance
The studies were designed and executed following the highest regulatory standards for biologic delivery systems:
*   **FDA CDER/CDRH Guidance:** *Applying Human Factors and Usability Engineering to Medical Devices* (February 2016).
*   **FDA Draft Guidance:** *Human Factors Studies and Related Clinical Study Considerations in Combination Product Design and Development* (February 2016).
*   **ANSI/AAMI HE75:2009:** *Human factors engineering – Design of medical devices.*
*   **ISO/IEC 62366-1:2015:** *Medical devices – Part 1: Application of usability engineering to medical devices.*
*   **USP <1176>:** *Dialysis-Related Devices and Human Factors.*

### 3.0 User Population Characterization
The Glucogen-XR user population was stratified into three distinct cohorts to represent the full spectrum of the intended market for Type 2 Diabetes Mellitus (T2DM) management.

#### 3.1 Participant Demographics and Inclusion Criteria
Participants were recruited to represent the known comorbidities of T2DM, including peripheral neuropathy, retinopathy, and varying levels of health literacy.

| Cohort ID | User Group | Description | N (Sample Size) | Age Range |
|:---|:---|:---|:---|:---|
| **UG-01** | Lay Users (Naïve) | Patients with T2DM never treated with injectables. | 25 | 18 - 85 |
| **UG-02** | Lay Users (Experienced) | Patients with T2DM currently using GLP-1 or Insulin pens. | 25 | 18 - 85 |
| **UG-03** | Caregivers (Lay) | Family members/friends providing injection assistance. | 15 | 18 - 75 |
| **UG-04** | HCPs | Nurses (RN/LPN) and Diabetes Educators. | 15 | 22 - 65 |

**Table 1: User Group Stratification and Inclusion Parameters**

### 4.0 Formative Study Phase (GHS-FS-2023-001 through 003)
Before the Summative (Validation) study, three formative cycles were completed using prototype iterations of the GHS-AI-V3 device.

#### 4.1 Formative Study 1: Component Evaluation
*   **Focus:** Needle shield removal force and cap ergonomics.
*   **Methodology:** 15 participants tested five different cap textures (ribbed, smooth, rubberized).
*   **Key Finding:** 40% of users with diabetic neuropathy struggled with the smooth cap. 
*   **Design Change:** Implementation of high-friction longitudinal ridges on the cap (Batch: GLUC-2025-PRE-01).

#### 4.2 Formative Study 2: Instructions for Use (IFU) Iteration
*   **Focus:** Comprehension of the "Click and Wait" instruction.
*   **Methodology:** Rapid iterative testing of IFU layout.
*   **Metric:** Success rate of holding the device for the full 10-second count after the second click.
*   **Outcome:** IFU was modified to include a visual "10-second" stopwatch icon.

---

### 5.0 Summative Human Factors Validation Study (GHS-SUM-2025-010)
This represents the final validation of the Glucogen-XR combination product.

#### 5.1 Test Article Specification
The devices used in the summative study were representative of the final commercial configuration, manufactured at the South San Francisco facility.

*   **Batch Number:** GLUC-2025-SUM-04
*   **Drug Constituent:** Placebo (buffered saline with 0.02% polysorbate 80 to match viscosity of Glucogen-XR).
*   **Device Lot:** GHS-AI-V3-LOT-998.
*   **Packaging:** Final commercial carton with IFU (Version 6.2).

#### 5.2 Critical Task Analysis (CTA) and Risk Assessment
The study focused on "Critical Tasks"—defined as steps which, if performed incorrectly, could lead to patient harm or suboptimal therapy.

| Task ID | Task Description | Risk Category | Failure Consequence |
|:---|:---|:---|:---|
| **CT-01** | Verification of medication (color/clarity) | High | Injection of degraded or contaminated product. |
| **CT-02** | Removal of the safety cap | Medium | Needle damage or premature activation. |
| **CT-03** | Proper injection site selection (Thigh/Abdomen) | Low | Slight variation in PK profile. |
| **CT-04** | Full depression of the autoinjector | High | Under-dosing/Partial dose delivery. |
| **CT-05** | Maintaining device position for 10 seconds | High | Wet injection / Incomplete dose. |

**Table 2: Critical Task Matrix**

#### 5.3 Step-by-Step Study Protocol
The study was conducted in a simulated clinical environment for HCPs and a simulated home environment (living room setting) for Lay Users.

1.  **Preparation:** Participant is presented with the boxed Glucogen-XR (GLUC-2025-XXX). No verbal instructions provided.
2.  **Training (Optional):** Cohort UG-02 (Experienced) received no training. Cohort UG-01 (Naïve) received a 2-minute video tutorial, reflecting real-world clinical practice.
3.  **Use Scenario 1 (Knowledge Tasks):** Participants are asked to identify if a hypothetical "cloudy" pen is safe to use.
4.  **Use Scenario 2 (Actual Injection):** Participant performs an injection into a standardized injection pad (SimSkin™ V4).
5.  **Post-Task Interview:** Probing questions regarding the "Second Click" perception and the force required to activate.

### 6.0 Results and Statistical Analysis

#### 6.1 Success Rates by Critical Task
The primary endpoint was the successful completion of all critical tasks without a "Use Error."

| Task | UG-01 (Naïve) | UG-02 (Exp) | UG-03 (Care) | UG-04 (HCP) | Total Success % |
|:---|:---|:---|:---|:---|:---|
| CT-01 (Check Drug) | 24/25 | 25/25 | 15/15 | 15/15 | 98.7% |
| CT-02 (Cap Removal) | 25/25 | 25/25 | 15/15 | 15/15 | 100.0% |
| CT-04 (Activation) | 25/25 | 25/25 | 14/15 | 15/15 | 98.7% |
| CT-05 (10s Hold) | 23/25 | 25/25 | 15/15 | 15/15 | 97.5% |

**Table 3: Critical Task Performance Data (Batch GLUC-2025-SUM-04)**

#### 6.2 Analysis of "Use Errors" and "Close Calls"
*   **Incident ID: UE-101 (Cohort UG-01):** One participant attempted to remove the cap by twisting rather than pulling.
    *   *Root Cause:* Habitual behavior from other medical devices.
    *   *Mitigation:* IFU was updated in the formative stage with a "Pull - Do Not Twist" arrow. The user eventually corrected the action (Close Call).
*   **Incident ID: UE-102 (Cohort UG-05):** One participant removed the device immediately after the first click.
    *   *Root Cause:* Misinterpretation of the sound.
    *   *Clinical Impact:* Resulted in a "wet injection" (approx. 50% volume loss).
    *   *Residual Risk:* Low. This occurred in only 1.25% of the total population, and the IFU includes a specific "What to do if a wet injection occurs" section.

#### 6.3 Subjective Feedback and Likert Scale Ratings
Participants rated the device on a scale of 1 (Difficult) to 7 (Very Easy).

| Metric | Mean Rating | Standard Deviation |
|:---|:---|:---|
| Ease of Cap Removal | 6.8 | 0.4 |
| Visibility of the Viewing Window | 6.5 | 0.6 |
| Comfort of the Injection | 6.2 | 0.8 |
| Clarity of the Audio Click | 6.9 | 0.2 |

### 7.0 Special Population Study: Visual Impairment & Dexterity
Given that T2DM leads to complications, Google Health Sciences conducted a sub-study (GHS-HF-SPEC-09) with 10 participants possessing a Snellen visual acuity of 20/70 or worse.

*   **Findings:** The high-contrast yellow plunger (the "End-of-Dose Indicator") was successfully identified by 10/10 participants once the injection was complete.
*   **Force Requirements:** The activation force of the GHS-AI-V3 is calibrated to 12.5 N ± 2.0 N. This was found to be manageable for 95% of the tested population with mild-to-moderate arthritis.

### 8.0 Root Cause Analysis (RCA) Methodology
For any observed errors during the Summative Study, an RCA was performed using the "5 Whys" method:
1.  **Observation:** User did not check the expiry date.
2.  **Why?** The date was printed in 6pt font.
3.  **Why?** Label real estate was limited by the viewing window.
4.  **Corrective Action:** Re-engineered the label layout (GLUC-2025-LBL-02) to use 8pt bold font for the expiration date and Lot number.

### 9.0 Conclusion: Statement of Usability
Based on the results of Study GHS-SUM-2025-010, the **Glucogen-XR Autoinjector** is determined to be safe and effective for its intended use. The residual risks associated with the identified use errors are considered acceptable when weighed against the clinical benefit of the glucapeptide extended-release therapy. The device interface is optimized for a diverse patient population, including those with physical limitations common in the Type 2 Diabetes demographic.

---
**END OF SECTION**
*Confidential - Property of Google Health Sciences*
*Document ID: 3.2.P.2.1.2-USF-V1*

---

## Risk Analysis (Use Errors)

# MODULE 3.2.P.2.4: PHARMACEUTICAL DEVELOPMENT – HUMAN FACTORS AND USABILITY ENGINEERING
## SUBSECTION: 3.2.P.2.4.7 RISK ANALYSIS (USE ERRORS) – GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)

---

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive Risk Analysis of potential use errors associated with the Glucogen-XR (glucapeptide extended-release) pre-filled autoinjector system (GHS-AI-01). As a Once-Weekly GLP-1 receptor agonist, Glucogen-XR requires a high degree of user interface reliability to ensure patient adherence and therapeutic efficacy in the management of Type 2 Diabetes Mellitus (T2DM).

The risk analysis documented herein has been conducted in accordance with:
*   **FDA Guidance:** *Applying Human Factors and Usability Engineering to Medical Devices* (2016).
*   **ANSI/AAMI/IEC 62366-1:2015:** *Medical devices – Part 1: Application of usability engineering to medical devices.*
*   **ISO 14971:2019:** *Medical devices – Application of risk management to medical devices.*
*   **Draft FDA Guidance (2022):** *Content of Human Factors Information in Medical Device Marketing Submissions.*

Google Health Sciences (GHS) has utilized a multi-disciplinary "Safety-by-Design" approach, integrating inputs from Clinical Affairs, Regulatory Affairs, Quality Engineering, and Human Factors Engineering (HFE).

---

### 2.0 METHODOLOGY FOR USE ERROR IDENTIFICATION
The identification of use errors for Glucogen-XR followed a rigorous, iterative process. Use errors are defined as "user action or lack of user action while using the medical device that leads to a different result than that intended by the manufacturer or expected by the user."

#### 2.1 Task Analysis (TA)
A comprehensive Task Analysis was performed to decompose the process of administering Glucogen-XR into discrete steps. This included:
1.  **Preparation Tasks:** Removal from refrigeration, inspection of the medication, selection of injection site.
2.  **Administration Tasks:** Cap removal, positioning, activation, and holding the device.
3.  **Disposal Tasks:** Sharps container utilization.

#### 2.2 Use Failure Mode and Effects Analysis (uFMEA)
The uFMEA served as the primary tool for quantifying risks. For each task identified in the TA, potential failure modes were hypothesized. 

**Risk Priority Number (RPN) Calculation:**
The RPN is calculated as:
$$RPN = S \times P \times D$$
Where:
*   **S (Severity):** 1 (Negligible) to 5 (Catastrophic/Death).
*   **P (Probability of Occurrence):** 1 (Rare) to 5 (Frequent).
*   **D (Detectability):** 1 (Highly Likely to detect) to 5 (Impossible to detect).

*Note: For Regulatory purposes, GHS prioritizes the Severity score. Any task with a Severity $\ge 4$ is classified as a "Critical Task."*

---

### 3.0 CRITICAL TASK IDENTIFICATION
A "Critical Task" is a user task which, if performed incorrectly or not at all, would or could cause serious harm to the patient or user, where harm includes compromised medical care.

#### Table 1: Critical Task Matrix for Glucogen-XR (Batch: GLUC-2025-001 through GLUC-2025-010)

| Task ID | Task Description | Potential Use Error | Clinical Consequence | Severity Rating (1-5) |
| :--- | :--- | :--- | :--- | :--- |
| **CT-01** | Inspection of Drug Product | Injecting cloudy/discolored solution | Adverse immune response; lack of efficacy | 4 |
| **CT-02** | Injection Site Selection | Injecting into scarred or lipohypertrophic tissue | Unpredictable PK/PD profile; hyperglycemia | 4 |
| **CT-03** | Device Positioning | Tilting device during activation | Incomplete dose; needle stick injury | 4 |
| **CT-04** | Activation (Button Press) | Failure to press button fully | No dose delivered | 3 |
| **CT-05** | Injection Duration | Removing device before 10-second count | Partial dose delivery | 4 |
| **CT-06** | Needle Safety | Recapping the needle (if applicable) | Accidental needle stick; Biohazard exposure | 5 |

---

### 4.0 DETAILED USE ERROR RISK ANALYSIS (uFMEA)
The following table provides the exhaustive risk analysis for the Glucogen-XR pre-filled autoinjector.

#### Table 2: Comprehensive uFMEA Table for GHS-AI-01

| User Step | Potential Use Error | Hazard / Effect | Current Controls | RPN | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Retrieve Device** | Failure to check expiration date | Injection of degraded peptide (Batch GLUC-2025-X) | Large print expiry on carton/label | 6 | Enhance Instructions for Use (IFU) visual cues |
| **2. Temperature Equil.** | Injecting cold medication | Increased injection pain; Vasovagal response | IFU Step 1: Wait 30 mins | 8 | Add "Wait" icon to device body |
| **3. Visual Inspection** | Ignoring particulates | Embolism (rare) or Lack of Efficacy | Transparent window design | 12 | Training video requirement |
| **4. Site Prep** | No alcohol swab used | Localized infection/abscess | IFU Step 2: Clean site | 10 | Co-package swabs in starter kits |
| **5. Cap Removal** | Removing cap too early | Needle contamination; Sterility breach | Cap design prevents accidental removal | 4 | None required |
| **6. Placement** | Placing at wrong angle | Subcutaneous vs. Intramuscular error | 90-degree design of shroud | 15 | Mechanical lockout if not flush |
| **7. Activation** | Premature trigger | Dose loss in air | Two-step activation (Press + Button) | 20 | Increase button resistance to 5N |
| **8. Completion** | Early removal | Partial dose (e.g., only 0.25mg of 1.0mg) | Audible "Click" at start and end | 25 | Add "Green Plunger" visual indicator |

---

### 5.0 HUMAN FACTORS EVALUATION OF RECENT BATCHES (GLUC-2025-004)
A Formative Usability Study (GHS-HF-2025-02) was conducted using 30 participants (15 Patients, 15 Caregivers).

#### 5.1 Protocol for Simulated Use Testing
1.  **Objective:** To evaluate the incidence of "Early Removal" (CT-05).
2.  **Environment:** Simulated home setting with common distractions (television, noise).
3.  **Materials:** Glucogen-XR Placebo Autoinjectors (Batch GLUC-2025-004-P).
4.  **Procedure:**
    *   Participants are given the IFU and the device.
    *   Participants perform a simulated injection into a synthetic skin pad (Shore A 10 hardness).
    *   Observers record the time from "Click 1" to "Device Withdrawal."

#### 5.2 Results Analysis
The target hold time is 10 seconds. In Batch GLUC-2025-004 testing, the following data was captured:

*   **Mean Hold Time:** 11.2 seconds.
*   **Standard Deviation:** 1.4 seconds.
*   **Minimum Hold Time:** 4.2 seconds (User ID: P-09).
*   **Use Error Rate (Early Removal):** 3.33%.

**Root Cause Analysis (User P-09):** The user mistook the "Click" of the internal spring mechanism for the completion of the dose.
**Mitigation:** The IFU has been revised to include the instruction: "Wait for the green bar to stop moving AND count to 10."

---

### 6.0 RISK MITIGATION PROTOCOLS
To address the highest RPN values (RPN > 20), Google Health Sciences has implemented the following Engineering and Labeling controls.

#### 6.1 Mechanical Mitigation: The "Dual-Click" System
The GHS-AI-01 device utilizes a proprietary mechanical lockout.
*   **Logic:** The second click occurs only when the plunger rod reaches the distal end of the glass syringe (USP <789> compliant).
*   **Specification:** The sound pressure level of Click 2 must be $\ge 65$ dB at a distance of 10cm to ensure detection by elderly users with mild hearing impairment.

#### 6.2 Labeling and Instruction (IFU) Optimization
Referencing **ISO 11608-1**, the IFU underwent three rounds of cognitive walk-throughs.
*   **Reading Level:** Verified at 6th Grade (Flesch-Kincaid scale).
*   **Contrast Ratio:** 7:1 for all critical text (Exceeding WCAG 2.1 standards for medical packaging).

---

### 7.0 QUANTITATIVE RISK ASSESSMENT FORMULA
GHS utilizes a predictive model for use error frequency based on historical GLP-1 class data:

$$P(ue) = \frac{\sum (E_{crit} \times W_i)}{n \times T}$$

Where:
*   $P(ue)$ = Probability of Use Error.
*   $E_{crit}$ = Count of critical task failures.
*   $W_i$ = Weighting factor based on user cognitive load.
*   $n$ = Number of users.
*   $T$ = Number of injection cycles per year (52 for Glucogen-XR).

Based on validation study GHS-VAL-2025, the predicted $P(ue)$ for Glucogen-XR is **0.00045 per injection**, which is well below the target threshold of 0.001.

---

### 8.0 POST-MARKET SURVEILLANCE PLAN (PMS)
Upon commercial launch of Batch GLUC-2025-100, Google Health Sciences will implement a "Smart-Surveillance" program utilizing Google Cloud AI to monitor:
1.  **Social Media Sentiment Analysis:** Specifically looking for keywords like "pain," "leaking," or "stuck" associated with the Glucogen-XR autoinjector.
2.  **Pharmacovigilance Integration:** Direct mapping of "Device Malfunction" vs. "Use Error" in the FAERS database.
3.  **Lot Traceability:** Every device is serialized (GS1 DataMatrix). In the event of a cluster of use errors, the specific molding batch (e.g., GLUC-2025-MOLD-01) can be isolated.

---

### 9.0 CONCLUSION
The Risk Analysis of Use Errors for Glucogen-XR demonstrates that the combination of mechanical safety features and an optimized user interface effectively mitigates the risks associated with self-injection of glucapeptide. The residual risk is deemed "As Low As Reasonably Practicable" (ALARP) and is outweighed by the clinical benefit of glycemic control in the T2DM patient population.

---
**Document Sign-off:**
*Director of Human Factors Engineering, Google Health Sciences*
*Date: 24-MAY-2025*
*Document ID: GHS-XR-M3-HF-RA-001*

---

## Design Verification and Validation

# MODULE 3: QUALITY (DATA AND DOCUMENTATION)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.1.2 HUMAN FACTORS AND USABILITY ENGINEERING

---

#### 3.2.P.2.1.2.1 DESIGN VERIFICATION AND VALIDATION (DV&V) OF THE GLUCOGEN-XR DRUG DELIVERY SYSTEM

**Document ID:** GHS-HF-DVV-2025-001  
**Product:** Glucogen-XR (glucapeptide extended-release) 2.5 mg/0.5 mL  
**Device Constituent:** GHS-Autopen-Gen2 (Single-use, disposable autoinjector)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Site:** 3000 Innovation Drive, South San Francisco, CA 94080  

---

### 1.0 INTRODUCTION AND SCOPE

The Design Verification and Validation (DV&V) program for Glucogen-XR (glucapeptide extended-release) was established to ensure that the integrated combination product—comprising the biologic drug substance (GHS-001) and the GHS-Autopen-Gen2 delivery system—meets all pre-defined User Interface (UI) requirements, Design Inputs, and Essential Performance Requirements (EPRs). 

This section details the Human Factors (HF) validation strategies, summative testing protocols, and the iterative verification of the device-user interface. This documentation is prepared in accordance with **FDA Guidance for Industry: "Applying Human Factors and Usability Engineering to Medical Devices" (2016)** and **ANSI/AAMI/IEC 62366-1:2015/AMD 1:2020**.

#### 1.1 Objective of HF Verification and Validation
The primary objective of the HF-DV&V program was to provide objective evidence that the Glucogen-XR autoinjector can be used by the intended users (adults with Type 2 Diabetes Mellitus, caregivers, and healthcare professionals) without serious medication errors or use-related hazards in the intended environment of use (home, clinic, or workplace).

---

### 2.0 REGULATORY REFERENCE FRAMEWORK

The verification and validation activities were conducted under the following regulatory and technical standards:

*   **21 CFR Part 4:** Regulation of Combination Products.
*   **21 CFR Part 820.30:** Design Controls.
*   **ISO 11608-1:2022:** Needle-based injection systems for medical use — Requirements and test methods.
*   **ISO 14971:2019:** Application of risk management to medical devices.
*   **HE75:2009/(R)2018:** Human factors engineering - Design of medical devices.
*   **ICH Q8(R2):** Pharmaceutical Development.

---

### 3.0 TRACEABILITY MATRIX: USER INTERFACE REQUIREMENTS TO VERIFICATION

The following table summarizes the mapping of specific User Interface (UI) requirements to the Verification (Vv) and Validation (Va) activities performed during the development of Glucogen-XR Batch Series **GLUC-2025-400 through GLUC-2025-900**.

#### Table 3.1: Traceability of User Requirements to Verification Methods

| UI ID | User Requirement Description | Design Input Requirement (DIR) | Verification Method | Validation Method |
| :--- | :--- | :--- | :--- | :--- |
| **UI-001** | User must be able to remove the cap with < 15N force. | DIR-MECH-04: Cap removal torque/force. | Mechanical Testing (Instron 5943) | Summative HF Study (Task 1) |
| **UI-002** | User must receive visual confirmation of dose completion. | DIR-OPT-09: Window color change (Yellow). | Optical Chromacity Test | Summative HF Study (Task 6) |
| **UI-003** | User must hear an audible "click" at start and end. | DIR-ACO-02: Acoustic output > 65dB at 1 meter. | Decibel Meter Testing | Summative HF Study (Task 4/6) |
| **UI-004** | User must be able to hold device for 10s during injection. | DIR-ERG-12: Ergonomic grip diameter (22mm). | Dimensional Analysis | Summative HF Study (Task 5) |
| **UI-005** | IFU must be legible to users with 20/40 vision. | DIR-LBL-01: Font size minimum 9pt (Sans Serif). | Label Inspection | Formative HF Study 3 |

---

### 4.0 DESIGN VERIFICATION (TECHNICAL SPECIFICATIONS)

Design Verification for the Glucogen-XR device was conducted on clinical scale batches to ensure mechanical integrity. 

#### 4.1 Mechanical Verification of the GHS-Autopen-Gen2
Verification was performed using automated test equipment (ATE) on Batch **GLUC-2025-502**.

**Testing Parameters:**
*   **Sample Size:** n=60 units.
*   **Environment:** 23°C ± 2°C; 50% RH ± 5%.
*   **Equipment:** Instron 5943 with Bluehill Central Software.

#### Table 4.1: Mechanical Verification Results (Batch GLUC-2025-502)

| Parameter | Specification | Mean Result | Std. Dev | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| **Cap Removal Force** | 5.0 N - 15.0 N | 8.42 N | 0.65 N | PASS |
| **Activation Force** | 10.0 N - 25.0 N | 18.21 N | 1.10 N | PASS |
| **Needle Extension** | 5.0 mm - 8.0 mm | 6.45 mm | 0.12 mm | PASS |
| **Injection Time** | 4.0 s - 10.0 s | 6.20 s | 0.40 s | PASS |
| **Delivered Volume** | 0.5 mL ± 0.025 mL | 0.498 mL | 0.004 mL | PASS |

---

### 5.0 DESIGN VALIDATION: SUMMATIVE HUMAN FACTORS STUDY (GHS-HF-SUM-2025)

The Summative Human Factors Validation Study was the final "summative" evaluation of the Glucogen-XR user interface.

#### 5.1 Study Design and Methodology
The study utilized a simulated-use environment to evaluate the ability of representative users to perform critical tasks.

*   **Participants:** N=75 (Split into 5 cohorts of 15).
*   **Cohorts:**
    1.  Adolescent T2DM (12-17 years)
    2.  Adult T2DM (18-64 years)
    3.  Geriatric T2DM (65+ years)
    4.  Caregivers (Laypeople)
    5.  Healthcare Providers (HCPs: Nurses/Pharmacists)
*   **Apparatus:** Glucogen-XR Training Devices (reusable) and Placebo-filled Autoinjectors (Batch **GLUC-2025-701**).
*   **Site:** Google Health Usability Labs, Mountain View, CA.

#### 5.2 Critical Task Analysis and Risk Mitigation
Tasks were categorized based on the Hazard Analysis and Critical Control Point (HACCP) findings in the UFMEA (Use Failure Mode and Effects Analysis).

**Critical Tasks Evaluated:**
1.  **Task 1:** Verification of drug name and expiration date.
2.  **Task 2:** Selection of injection site (abdomen, thigh, or upper arm).
3.  **Task 3:** Swabbing site with alcohol.
4.  **Task 4:** Removal of the base cap (Critical).
5.  **Task 5:** Placement and activation of the device (Critical).
6.  **Task 6:** Holding the device for 10 seconds (Critical for ER delivery).
7.  **Task 7:** Disposal in a sharps container.

#### 5.3 Protocol Procedure: Task 5 & 6 (Dose Administration)
1.  **Objective:** Validate that the user can trigger the injection and maintain contact for the full duration of the extended-release delivery.
2.  **Instruction:** "Administer the dose as you would at home."
3.  **Success Criteria:**
    *   Device is held perpendicular (90°) to the skin.
    *   The "click" is acknowledged.
    *   The yellow plunger is visible in the window before removal.
    *   The needle shield locks upon removal.

---

### 6.0 RESULTS OF SUMMATIVE VALIDATION STUDY

#### Table 6.1: Success Rates for Critical Tasks (N=75)

| Task ID | Description | Successful Completions | Use Errors | Close Calls |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Inspecting Drug/Expiry | 75 (100%) | 0 | 0 |
| **T4** | Cap Removal | 74 (98.6%) | 1* | 0 |
| **T5** | Device Activation | 75 (100%) | 0 | 2 |
| **T6** | 10-Second Hold Time | 72 (96.0%) | 3** | 4 |

*\*Note on T4 Error:* One geriatric participant attempted to unscrew the cap rather than pull. The Instructions for Use (IFU) were revised in the final version to include a "PULL" arrow icon.
*\*\*Note on T6 Error:* Three participants removed the device before the 10-second count. However, the internal mechanical verification (Section 4.1) confirms that the full dose is actually delivered by 7.5 seconds, providing a 2.5-second safety buffer. Residual volume in the rejected devices was < 0.05 mL, which is within the therapeutic window.

#### 6.2 Statistical Analysis of Usability Data
A 95% Confidence Interval (CI) was calculated for the primary endpoint (Successful Completion of All Critical Tasks).

**Formula:**
$$p \pm Z \sqrt{\frac{p(1-p)}{n}}$$

Where:
*   $p = 0.96$ (Success Rate)
*   $n = 75$
*   $Z = 1.96$

**Calculation:**
$$0.96 \pm 1.96 \sqrt{\frac{0.96(0.04)}{75}} = 0.96 \pm 0.044$$
The lower bound of the 95% CI is 91.6%, exceeding the internal GHS-Quality requirement of 90%.

---

### 7.0 EVALUATION OF RESIDUAL RISK

Following the Summative Study, a residual risk assessment was conducted.

1.  **Risk of Premature Removal:** While 3 users removed the device early, the mechanical buffer ensures 95% of the dose is delivered. The risk of sub-therapeutic dosing is categorized as "Low/Acceptable."
2.  **Needle Stick Injury:** 100% of participants successfully engaged the safety shield. Residual risk is "Negligible."
3.  **Labeling Confusion:** No participants confused Glucogen-XR with short-acting insulin during the "simulated pharmacy" task.

---

### 8.0 CONCLUSION

The Design Verification and Validation activities for Glucogen-XR (Batch Series **GLUC-2025-XXX**) demonstrate that the GHS-Autopen-Gen2 delivery system is robust, reliable, and safe for the intended user population. All Essential Performance Requirements were verified through mechanical testing, and the Summative Human Factors Study validated that the user interface minimizes the risk of use error.

The device constituent of Glucogen-XR is deemed **ready for commercial distribution** pending final FDA review of the NDA/BLA.

---

### 9.0 APPENDICES

*   **Appx A:** IFU (Instructions for Use) Final Version - Document GHS-IFU-V4.
*   **Appx B:** Raw Mechanical Data - Batch GLUC-2025-502.
*   **Appx C:** Participant Demographic Breakdown - Study GHS-HF-SUM-2025.

---
**Author:** *Senior Director, Regulatory Affairs - Device Lead*  
**Date:** October 24, 2025  
**Approver:** *VP of Quality, Google Health Sciences*

---

# Microbiological Considerations

## Sterile Manufacturing Requirements

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.5: MICROBIOLOGICAL CONSIDERATIONS
#### PART 3.2.P.2.5.1: STERILE MANUFACTURING REQUIREMENTS

---

### 1.0 INTRODUCTION AND SCOPE
This subsection details the sterile manufacturing requirements for Glucogen-XR (glucapeptide extended-release), a long-acting GLP-1 receptor agonist produced by Google Health Sciences. Given the proteinaceous nature of the drug substance and the extended-release microsphere delivery system, the manufacturing process necessitates stringent aseptic controls to ensure product sterility, endotoxin control, and the maintenance of biological activity.

Glucogen-XR is manufactured as a sterile, non-pyrogenic aqueous suspension for subcutaneous injection. The complexity of the formulation—incorporating the proprietary GHS-CHO-001 derived peptide within a PLGA-PEG matrix—precludes terminal sterilization via heat or irradiation. Consequently, the manufacturing process is designed as a fully integrated aseptic operation, validated under ICH Q11 and compliant with FDA "Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice."

---

### 2.0 REGULATORY COMPLIANCE FRAMEWORK
The sterile manufacturing program for Glucogen-XR is governed by the following regulatory benchmarks:
*   **USP <71> Sterility Tests:** Protocols for membrane filtration and direct inoculation.
*   **USP <85> Bacterial Endotoxins Test:** Kinetic Chromogenic and Turbidimetric methods.
*   **USP <788> Particulate Matter in Injections:** Light Obscuration and Microscopic Particle Count.
*   **USP <790> Visible Particulates in Injections:** 100% inspection protocols.
*   **ICH Q5A(R2):** Quality of Biotechnological Products: Viral Safety Evaluation.
*   **FDA 21 CFR Part 211.113:** Control of microbiological contamination.
*   **ISO 14644-1:2015:** Classification of air cleanliness in cleanrooms.

---

### 3.0 CLEANROOM CLASSIFICATION AND ENVIRONMENTAL MONITORING (EM)
Manufacturing occurs at the Google Health Sciences Facility (Site ID: 3000-ISF-CA), utilizing a Grade A (ISO 5) critical zone surrounded by a Grade B (ISO 7) background.

#### 3.1 Cleanroom Design Specifications
| Zone ID | Grade | Description | ISO Class (At Rest) | ISO Class (In Operation) | Air Velocity (m/s) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GHS-CZ-01** | A | Filling & Stoppering (RABS) | ISO 5 | ISO 5 | 0.45 ± 20% |
| **GHS-BG-02** | B | Aseptic Preparation Area | ISO 5 | ISO 7 | N/A |
| **GHS-TR-03** | C | Component Preparation | ISO 7 | ISO 8 | N/A |
| **GHS-NC-04** | D | Equipment Wash/Support | ISO 8 | Unclassified | N/A |

#### 3.2 Environmental Monitoring Limits
The EM program is executed per SOP-MICRO-7702. Limits are defined based on three consecutive successful media fill cycles (Batch IDs: GLUC-2025-MF01, GLUC-2025-MF02, GLUC-2025-MF03).

**Table 3.2.A: Microbiological Action and Alert Limits**
| Sample Type | Grade A (CFU) | Grade B (CFU) | Grade C (CFU) | Grade D (CFU) |
| :--- | :--- | :--- | :--- | :--- |
| Air Sample (per m³) | < 1 | 10 | 100 | 200 |
| Settle Plates (4 hrs) | < 1 | 5 | 50 | 100 |
| Contact Plates (Surface) | < 1 | 5 | 25 | 50 |
| Glove Print (5 fingers) | < 1 | 5 | N/A | N/A |

---

### 4.0 STERILIZATION PROTOCOLS FOR COMPONENTS AND EQUIPMENT

#### 4.1 Moist Heat Sterilization (Autoclave)
All product-contact equipment (vessels, tubing, manifolds) undergo validated Steam-In-Place (SIP) or autoclave cycles.
*   **Equipment ID:** STER-AC-09 (Fedegari Autoclave)
*   **Cycle Parameters:** 121.1°C for 21 minutes.
*   **Target $F_0$:** $\geq 15.0$ minutes.
*   **Biological Indicator:** *Geobacillus stearothermophilus* (ATCC 7953) with a $D_{121}$ value $\geq 1.5$ min.

#### 4.2 Depyrogenation (Dry Heat)
Glass vials (10R Type I Borosilicate) are processed through a depyrogenation tunnel.
*   **Equipment ID:** TUN-DP-02
*   **Temperature Profile:** $320^\circ C \pm 10^\circ C$.
*   **Residence Time:** 8.5 minutes in the hot zone.
*   **Validation Requirement:** 3-log reduction in *Escherichia coli* Endotoxin (EC-6).

---

### 5.0 FILTRATION AND ASEPTIC FILLING STRATEGY
Glucogen-XR drug substance is sterilized via redundant 0.22 $\mu$m filtration.

#### 5.1 Filter Validation Data
Filters utilized: BioPharma Millipore Durapore® PVDF (0.22 $\mu$m).

**Table 5.1: Filter Integrity Test Results (Batch GLUC-2025-001)**
| Test Parameter | Specification | Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| Pre-use Bubble Point | $\geq 50$ psi | 54.2 psi | Pass |
| Post-use Bubble Point | $\geq 50$ psi | 53.8 psi | Pass |
| Diffusive Flow Rate | $\leq 15$ mL/min | 11.2 mL/min | Pass |
| Bacterial Retention | $10^7$ CFU/$cm^2$ *B. diminuta* | Sterile Filtrate | Pass |

#### 5.2 Filling Parameters
The Filling Line (GHS-LINE-04) operates within a Restricted Access Barrier System (RABS).
*   **Fill Volume:** 1.25 mL $\pm$ 0.02 mL.
*   **Fill Speed:** 45 vials/minute.
*   **Oxygen Headspace:** $\leq 2.0\%$ (Nitrogen overlaid).

---

### 6.0 MEDIA FILL (PROCESS SIMULATION) PROTOCOLS
To validate the aseptic capability, Google Health Sciences performs semi-annual Process Simulations using Tryptic Soy Broth (TSB).

**Protocol GHS-VAL-MS-2025:**
1.  **Medium:** Gamma-irradiated TSB (non-animal derived).
2.  **Duration:** Full batch simulation (approx. 18 hours).
3.  **Interventions:** Includes 15 planned "worst-case" interventions (e.g., clearing downed vials, pump change-outs).
4.  **Incubation:** 7 days at $22.5^\circ C \pm 2.5^\circ C$, followed by 7 days at $32.5^\circ C \pm 2.5^\circ C$.
5.  **Acceptance Criteria:** Zero (0) growth from 5,000 filled units.

**Table 6.1: Historical Media Fill Summary**
| Run Number | Batch ID | Units Filled | Units Contaminated | Growth (%) |
| :--- | :--- | :--- | :--- | :--- |
| MS-24-001 | GLUC-2024-MF01 | 5,200 | 0 | 0.00% |
| MS-24-002 | GLUC-2024-MF02 | 5,180 | 0 | 0.00% |
| MS-25-001 | GLUC-2025-MF01 | 5,250 | 0 | 0.00% |

---

### 7.0 BIOBURDEN AND ENDOTOXIN CONTROL (IN-PROCESS)
Bioburden is monitored at three critical stages of the Glucogen-XR manufacturing process.

#### 7.1 Stage 1: Post-Formulation (Pre-Filtration)
*   **Limit:** $\leq 10$ CFU / 100 mL.
*   **Method:** Membrane Filtration (0.45 $\mu$m).

#### 7.2 Stage 2: Post-Sterile Filtration (Pre-Filling)
*   **Limit:** Sterile (Absence of growth).
*   **Method:** USP <71>.

#### 7.3 Bacterial Endotoxin (LAL) Control
Endotoxin levels are calculated based on the maximum dose of 1.0 mg/kg/hr for a 70 kg patient.
*   **Calculation:** $K/M = 5.0 EU/kg / (Dose)$.
*   **Drug Product Specification:** $\leq 0.5$ EU/mg.
*   **Equipment Wash Water (WFI):** $\leq 0.25$ EU/mL.

---

### 8.0 PERSONNEL QUALIFICATION AND GOWNING
All personnel entering the Grade B background (GHS-BG-02) and operating in Grade A (GHS-CZ-01) undergo rigorous training.

1.  **Initial Qualification:** 3 consecutive successful gowning samples (0 CFU).
2.  **Re-qualification:** Every 6 months.
3.  **Gowning Material:** Sterile, lint-free, Tyvek® coveralls, hoods, face masks, and goggles.
4.  **Sampling:** Monitoring of gloves, forearms, and chest after every exit from the aseptic core.

---

### 9.0 DISINFECTION AND DECONTAMINATION REGIMEN
The cleanroom is sanitized daily using a rotating disinfectant program to prevent the development of resistant microflora.

**Table 9.1: Disinfectant Rotation Schedule**
| Day | Agent Type | Active Ingredient | Concentration | Contact Time |
| :--- | :--- | :--- | :--- | :--- |
| Mon-Wed | Phenolic | Sodium phenolate | 1.0% | 10 min |
| Thu-Sat | Quaternary Ammonium | Alkyldimethylbenzylammonium | 0.5% | 10 min |
| Sunday | Sporicidal | Peracetic acid/H2O2 | 2.0% | 15 min |
| VHP | Gas | Hydrogen Peroxide Vapor | 35% | 4 hours (Monthly) |

---

### 10.0 CONCLUSION
The sterile manufacturing requirements for Glucogen-XR at Google Health Sciences have been designed with a "Quality by Design" (QbD) approach, ensuring that the microbiological attributes of the drug product are maintained throughout the lifecycle. The combination of redundant sterile filtration, RABS technology, and a validated environmental monitoring program provides a high degree of assurance that Glucogen-XR meets all FDA requirements for sterile parenteral therapeutics.

---
**END OF SECTION**
**Document ID:** GHS-GLUC-M3-DP-ST-2025
**Revision:** 01
**Author:** Regulatory Affairs Division, Google Health Sciences.

---

## Bioburden Control Strategy

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SECTION 3.2.P.2.5 MICROBIOLOGICAL CONSIDERATIONS

---

#### 3.2.P.2.5.1 BIOBURDEN CONTROL STRATEGY FOR GLUCOGEN-XR (GLUCAPEPTIDE ER)

Google Health Sciences (GHS), a division of Google Cloud Life Sciences, has implemented a robust, multi-tiered Bioburden Control Strategy (BCS) for the manufacture of Glucogen-XR (glucapeptide extended-release). This strategy is designed to ensure the safety, purity, and potency of the drug product by mitigating the risk of microbial contamination throughout the entire manufacturing lifecycle—from raw material intake to final fill/finish operations at our South San Francisco facility (Site ID: GHS-SSF-01).

The Glucogen-XR manufacturing process utilizes a proprietary CHO-K1 GS knockout derivative (GHS-CHO-001) in a continuous perfusion bioreactor system. Given the high nutrient density of the media and the extended duration of the production cycle, the BCS is integrated into the Quality by Design (QbD) framework, ensuring compliance with **FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice** and **USP <1111> Microbiological Examination of Nonsterile Products**.

---

### I. REGULATORY FRAMEWORK AND COMPLIANCE MATRIX

The Bioburden Control Strategy for Glucogen-XR adheres to the following international standards and regulatory guidelines:

| Reference ID | Title / Description | Application to Glucogen-XR |
|:---|:---|:---|
| **ICH Q4B** | Evaluation and Recommendation of Pharmacopoeial Texts | Harmonization of microbial limit tests. |
| **ICH Q9** | Quality Risk Management | Basis for the Failure Mode and Effects Analysis (FMEA) for bioburden. |
| **USP <61>** | Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests | Testing of raw materials and non-sterile intermediates. |
| **USP <62>** | Microbiological Examination of Nonsterile Products: Tests for Specified Microorganisms | Detection of *S. aureus*, *P. aeruginosa*, *E. coli*, and *Salmonella*. |
| **USP <85>** | Bacterial Endotoxins Test | Kinetic chromogenic LAL testing for all aqueous process streams. |
| **USP <1211>** | Sterility Assurance | Framework for aseptic processing validation. |
| **21 CFR 211.113** | Control of Microbiological Contamination | Statutory requirement for preventing objectionable organisms. |

---

### II. RISK ASSESSMENT: FAILURE MODE AND EFFECTS ANALYSIS (FMEA)

GHS conducted a comprehensive FMEA (Report ID: RPT-GLUC-MICRO-2024-001) to identify critical control points (CCPs) where microbial ingress or proliferation could occur.

#### Table 2.1: Bioburden Risk Assessment for Glucogen-XR Manufacturing

| Process Step | Potential Hazard (Microbial) | Probability (1-5) | Severity (1-5) | Detectability (1-5) | RPN | Mitigation Strategy |
|:---|:---|:---|:---|:---|:---|:---|
| **Media Prep** | Thermophilic spore-formers | 2 | 5 | 2 | **20** | HTST (High Temp Short Time) treatment & 0.1μm filtration. |
| **Cell Culture** | Mycoplasma contamination | 1 | 5 | 4 | **20** | PCR testing (9CFR) & 0.1μm redundant filtration. |
| **Purification** | Biofilm in Chromatography | 3 | 4 | 3 | **36** | Periodic 0.5N NaOH sanitization; 48-hr column storage limits. |
| **UF/DF** | Gram-negative proliferation | 2 | 5 | 2 | **20** | Closed-system processing; TFF sanitization post-use. |
| **Final Fill** | Environmental ingress | 1 | 5 | 1 | **5** | ISO 5 (Grade A) environment; RABS technology. |

*Note: RPN (Risk Priority Number) = Probability × Severity × Detectability. Any RPN > 15 requires a specific Control Procedure (CP).*

---

### III. RAW MATERIAL AND COMPONENT CONTROL

All raw materials utilized in the formulation of Glucogen-XR undergo rigorous microbiological screening.

#### 3.1 Microbial Specification for Key Excipients
The glucapeptide ER formulation utilizes a poly(lactic-co-glycolic acid) (PLGA) matrix. While PLGA is synthetic, the aqueous buffers used for peptide stabilization are high-risk.

**Table 3.1: Raw Material Bioburden Limits**

| Material ID | Component | USP Chapter | TAMC (CFU/g or mL) | TYMC (CFU/g or mL) |
|:---|:---|:---|:---|:---|
| RM-1002 | Glucapeptide DS | USP <61> | ≤ 10 | ≤ 5 |
| RM-5044 | PLGA Polymer | USP <61> | ≤ 100 | ≤ 10 |
| RM-2011 | Histidine Buffer | USP <61> | ≤ 10 | ≤ 1 |
| RM-9001 | WFI (Water for Inj.) | USP <1231> | < 0.1 CFU/100mL | N/A |

---

### IV. IN-PROCESS BIOBURDEN MONITORING (IPB)

In-process controls are established at every transition point in the downstream process (DSP).

#### 4.1 Sampling Protocol and Frequency
Sampling is performed using a "no-touch" aseptic technique via NovaSeptum® sterile sampling units.

**Table 4.1: In-Process Control (IPC) Limits for Batch Series GLUC-2025-XXX**

| IPC Code | Process Description | Sample Volume | Action Limit | Alert Limit |
|:---|:---|:---|:---|:---|
| IPC-BIO-01 | Post-Bioreactor Harvest | 100 mL | ≤ 10 CFU/100mL | ≤ 5 CFU/100mL |
| IPC-BIO-02 | Post-Protein A Eluate | 50 mL | ≤ 5 CFU/100mL | ≤ 2 CFU/100mL |
| IPC-BIO-03 | Pre-Viral Filtration | 100 mL | ≤ 1 CFU/100mL | 0 CFU/100mL |
| IPC-BIO-04 | Final Formulated Bulk | 500 mL | Sterility (USP <71>) | N/A |

#### 4.2 Bioburden Control during Extended Hold Times
As Glucogen-XR is an extended-release product, hold times are critical.
*   **Intermediate Bulk Storage:** Max 48 hours at 2-8°C.
*   **Sterilizing Grade Filters:** Changed every 24 hours of continuous flow or per 1,000L throughput.

---

### V. PROTOCOL: CLEAN-IN-PLACE (CIP) AND STEAM-IN-PLACE (SIP) VALIDATION

All stainless steel equipment (316L grade) is subjected to validated CIP/SIP cycles.

#### 5.1 CIP Procedure (SOP-GHS-CIP-009)
1.  **Initial Rinse:** WFI at 45°C for 10 minutes.
2.  **Caustic Wash:** 0.5M NaOH at 65°C for 30 minutes.
3.  **Acid Rinse:** 0.1M Phosphoric Acid (to neutralize residual caustic).
4.  **Final Rinse:** WFI until conductivity < 1.3 μS/cm.

#### 5.2 SIP Procedure (SOP-GHS-SIP-012)
*   **Target Temperature:** 121.1°C (minimum).
*   **F0 Value Calculation:**
    $$F_0 = \Delta t \sum 10^{(T-121.1)/10}$$
*   **Requirement:** Minimum $F_0$ of 15 minutes across all cold-spot thermocouples.

---

### VI. ENVIRONMENTAL MONITORING (EM) PROGRAM

The Glucogen-XR fill/finish suite (Building 3, Suite A) operates under a comprehensive EM program.

#### 6.1 Grade A (ISO 5) Continuous Monitoring
*   **Non-Viable Particulates:** Continuous laser particle counters (Set point: ≥ 0.5 μm and ≥ 5.0 μm).
*   **Viable Air Sampling:** Active air sampling (1000L) every 4 hours of operation.
*   **Settle Plates:** Exposed for a maximum of 4 hours.
*   **Surface Monitoring:** Contact plates (RODAC) at the end of each shift.

#### Table 6.1: Historical EM Data (Representative Batch GLUC-2025-001)

| Location | Sample Type | Limit | Result (GLUC-2025-001) | Status |
|:---|:---|:---|:---|:---|
| Fill Needle Area | Active Air | < 1 CFU/m³ | 0 CFU/m³ | Pass |
| Stopper Bowl | Settle Plate | < 1 CFU/4hr | 0 CFU/4hr | Pass |
| Operator Glove | Swab | < 1 CFU/glove | 0 CFU/glove | Pass |
| Grade B Prep | Surface | < 5 CFU/plate | 1 CFU/plate | Pass |

---

### VII. CALCULATION OF STERILIZATION ASSURANCE LEVEL (SAL)

For the final drug product, we utilize a redundant 0.22 μm filtration strategy followed by aseptic filling. The SAL is calculated based on the probability of a non-sterile unit (PNSU).

**Formula for Bioburden-Based Sterilization:**
$$SAL = N_0 \times 10^{-F_0/D_{121}}$$
*Where:*
*   $N_0$ = Initial bioburden count (measured at IPC-BIO-04).
*   $D_{121}$ = Decimal reduction time for *Geobacillus stearothermophilus*.

For Glucogen-XR, given the ultra-low pre-filtration bioburden (< 0.1 CFU/100mL), the calculated SAL exceeds $10^{-6}$.

---

### VIII. MEDIA FILL (PROCESS SIMULATION) DATA

To validate the BCS, GHS conducts semi-annual media fills using Tryptic Soy Broth (TSB).

**Table 8.1: Media Fill Summary (Year 2024-2025)**

| Run ID | Date | Units Filled | Growth Units | Duration | Result |
|:---|:---|:---|:---|:---|:---|
| MF-GLUC-2024-01 | 15-JAN-2024 | 15,400 | 0 | 72 hours | Valid |
| MF-GLUC-2024-02 | 20-JUL-2024 | 16,200 | 0 | 84 hours | Valid |
| MF-GLUC-2025-01 | 12-JAN-2025 | 15,950 | 0 | 72 hours | Valid |

---

### IX. ACTION AND ALERT LIMIT MANAGEMENT (SOP-GHS-MICRO-502)

Any excursion above the alert limit triggers an Internal Investigation (II). Any excursion above the action limit triggers a Deviation Report (DR) and a formal Impact Assessment.

1.  **Species Identification:** All isolates from Grade A/B zones are identified to the species level using MALDI-TOF Mass Spectrometry.
2.  **Root Cause Analysis (RCA):** Utilizing the Ishikawa (Fishbone) diagram to evaluate Man, Method, Machine, Material, and Mother Nature (Environment).
3.  **Corrective and Preventive Actions (CAPA):** May include re-sanitization, operator re-training, or modification of the HVAC airflow patterns.

---

### X. CONCLUSION

The Bioburden Control Strategy for Glucogen-XR is a living document, updated annually based on trending data and technological advancements in microbial detection (e.g., rapid microbiological methods). Through the combination of rigorous in-process testing, validated sterilization cycles, and stringent environmental controls, Google Health Sciences ensures that every batch of Glucogen-XR meets the highest standards of microbiological quality, safeguarding patient health in the treatment of Type 2 Diabetes Mellitus.

---
**Approvals:**
*   *Senior Director, Regulatory Affairs:* [Signature]
*   *Head of Microbiology, GHS:* [Signature]
*   *Quality Assurance Lead:* [Signature]

**Date of Issue:** 14-OCT-2024
**Document ID:** GHS-GLUC-XR-M3-25-MICRO-001_V1.0

---

## Sterilization or Aseptic Processing Justification

# MODULE 3: QUALITY (CMC)
## 3.2.P DRUG PRODUCT (Glucogen-XR)
### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.5 MICROBIOLOGICAL CONSIDERATIONS

---

### 3.2.P.2.5.1 Sterilization or Aseptic Processing Justification

#### 3.2.P.2.5.1.1 Introduction and Regulatory Scope
The selection of the sterilization process for Glucogen-XR (glucapeptide extended-release), a high-molecular-weight GLP-1 receptor agonist peptide, has been conducted in strict accordance with the **FDA Guidance for Industry: Submission Documentation for Sterilization Process Validation in Applications for Human and Veterinary Drug Products** and the **EMA Guideline on the Selection of the Sterilization Method (EMA/CHMP/CVMP/QWP/850371/2014)**.

Given the complex secondary and tertiary structure of the glucapeptide molecule and the proprietary poly(lactic-co-glycolic acid) (PLGA) extended-release matrix, the choice between terminal sterilization and aseptic processing was evaluated through a risk-based matrix. The primary objective is to ensure the highest level of sterility assurance (SAL 10⁻⁶) while maintaining the physicochemical integrity, biological potency, and pharmacokinetic profile of the drug product.

#### 3.2.P.2.5.1.2 Evaluation of Terminal Sterilization Methods
Terminal sterilization is the preferred regulatory approach for parenteral products. However, for Glucogen-XR, various methods of terminal sterilization were investigated and subsequently rejected based on the deleterious effects on the drug substance and the delivery vehicle.

##### 3.2.P.2.5.1.2.1 Moist Heat Sterilization (Autoclaving)
In accordance with **USP <1229.1> Steam Sterilization by Direct Contact**, moist heat sterilization (121°C for 15 minutes) was evaluated.
*   **Results:** Total degradation of the glucapeptide was observed. HPLC analysis (Method MET-GLUC-004) indicated a 94.2% increase in high-molecular-weight proteins (HMWP) and a complete loss of the primary peak at RT 14.2 min.
*   **Justification for Rejection:** The glucapeptide is thermally labile. Exposure to temperatures exceeding 60°C induces irreversible denaturation and aggregation. Furthermore, the PLGA microspheres undergo premature glass transition (Tg ~42-45°C), leading to immediate polymer collapse and loss of controlled-release properties.

##### 3.2.P.2.5.1.2.2 Dry Heat Sterilization
Evaluated per **USP <1229.8>**.
*   **Results:** Carbonization of the carbohydrate stabilizers and rapid oxidation of the peptide backbone.
*   **Justification for Rejection:** Temperatures required for depyrogenation or sterilization (160°C+) are incompatible with organic peptide therapeutics.

##### 3.2.P.2.5.1.2.3 Ionizing Radiation (Gamma and E-Beam)
Evaluated per **ISO 11137**.
*   **Study ID:** RT-GLUC-2025-001
*   **Dosage:** 25 kGy (Standard sterilization dose).
*   **Observation:** Significant radiolysis. Formation of free radicals within the PLGA matrix led to chain scission, reducing the polymer molecular weight (Mw) from 55kDa to 18kDa. This resulted in a "burst release" effect where 80% of the drug was released in <4 hours during *in vitro* dissolution tests.
*   **Chemical Impact:** Oxidation of Methionine residues (Met14, Met27) and deamidation of Asparagine.

##### 3.2.P.2.5.1.2.4 Ethylene Oxide (EtO) Sterilization
*   **Justification for Rejection:** EtO is a strong alkylating agent. It reacts with the amino groups of the glucapeptide, leading to the formation of hydroxyethyl adducts. Furthermore, the porous nature of the extended-release microspheres makes EtO residue removal (per **ISO 10993-7**) technically unfeasible without compromising the drug's stability.

#### 3.2.P.2.5.1.3 Decision for Aseptic Processing
Based on the physical and chemical sensitivities outlined above, **Aseptic Processing** (per **FDA Guidance: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice**) has been selected as the only viable manufacturing route for Glucogen-XR. The process involves the sterile filtration of the drug substance solution followed by aseptic microsphere formation and lyophilization.

---

#### 3.2.P.2.5.1.4 Critical Process Parameters (CPP) for Aseptic Filtration
To ensure the sterility of the final drug product, a dual-stage redundant filtration system (0.22 µm) is utilized.

##### Table 1: Filtration Specification for Glucogen-XR Bulk Solution
| Parameter | Specification | Rationale |
| :--- | :--- | :--- |
| **Filter Type** | Polyethersulfone (PES) | Low protein binding; high flux |
| **Pore Size** | 0.22 µm (Dual-redundant) | Sterilizing grade per ASTM F838 |
| **Max Pressure** | 3.2 bar (46.4 psi) | Prevent polymer shearing |
| **Flow Rate** | 150 - 250 mL/min | Optimized for 50L batch size |
| **Bubble Point** | > 3450 mbar | Integrity verification (post-use) |
| **Bioburden Limit** | < 10 CFU/100 mL | Pre-filtration limit per USP <1111> |

---

#### 3.2.P.2.5.1.5 Bioburden Control Strategy (Batch: GLUC-2025-001 to GLUC-2025-005)
Google Health Sciences employs a multi-tiered bioburden control strategy to mitigate risks prior to the final aseptic filling.

##### 3.2.P.2.5.1.5.1 Environmental Monitoring (EM) Performance Data
The following table summarizes the EM data during the filling of the three pivotal clinical batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) in the Grade A (ISO 5) RABS (Restricted Access Barrier System).

##### Table 2: Environmental Monitoring Summary for Pivotal Batches
| Batch ID | Date | Viable Air (CFU/m³) | Surface Swab (CFU/plate) | Personnel Gloved Finger (CFU/glove) | Non-Viable (>0.5µm) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | < 1 | 0 | 0 | 12 |
| **GLUC-2025-002** | 19-JAN-2025 | < 1 | 0 | 0 | 8 |
| **GLUC-2025-003** | 02-FEB-2025 | < 1 | 0 | 0 | 15 |
| **Limit (Grade A)** | N/A | < 1 | < 1 | < 1 | < 3520 |

---

#### 3.2.P.2.5.1.6 Detailed Protocol for Filter Integrity Testing (FIT)
In accordance with **USP <1229.4>**, the following procedure is executed for every Glucogen-XR production run to ensure the sterilizing-grade filters have not been compromised.

**Protocol ID: GHS-FIT-009-B**
1.  **Preparation:** Post-filtration, the filter housing is flushed with 5 liters of Water for Injection (WFI) to remove residual peptide.
2.  **Equilibration:** The system is pressurized to 500 mbar and held for 120 seconds to ensure temperature stabilization.
3.  **Pressure Hold Test:**
    *   The upstream pressure is increased to 2500 mbar using nitrogen.
    *   The pressure decay ($\Delta P$) is measured over 5 minutes.
    *   **Calculation:** $D = \frac{V \times \Delta P}{t \times P_{atm}}$
    *   *Where V is the upstream volume, $\Delta P$ is pressure drop, t is time.*
4.  **Bubble Point Test:**
    *   Pressure is ramped at 50 mbar/sec.
    *   The "Bubble Point" is recorded when a continuous stream of bubbles is detected via the automated integrity tester (Sartocheck® 5 Plus).
5.  **Acceptance Criteria:** The filter must meet a bubble point of $\geq$ 3450 mbar. If the filter fails, the batch is quarantined (Status: "Hold/Pending Investigation").

---

#### 3.2.P.2.5.1.7 Media Fill (Process Simulation) Strategy
To justify the aseptic processing approach, Google Health Sciences conducts semi-annual Media Fill trials (Aseptic Process Simulations or APS).

##### 3.2.P.2.5.1.7.1 Media Fill Parameters
*   **Media:** Tryptic Soy Broth (TSB), USP <71> compliant.
*   **Volume Filled:** 5.0 mL per vial.
*   **Container/Closure:** 10R Type I Borosilicate Glass vials with 20mm FluroTec® coated stoppers.
*   **Simulation Conditions:** Worst-case interventions (e.g., door openings, simulated power failure, line jams, tool changes).
*   **Incubation:** 7 days at 20-25°C followed by 7 days at 30-35°C.

##### Table 3: Summary of Recent Media Fill Trials (GHS-MF-2024/2025)
| Run ID | Date | Vials Filled | Vials Rejected | Vials Incubated | Results (Growth) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **MF-GLUC-098** | 15-NOV-2024 | 12,450 | 12 | 12,438 | 0 (Pass) |
| **MF-GLUC-099** | 22-NOV-2024 | 12,500 | 8 | 12,492 | 0 (Pass) |
| **MF-GLUC-100** | 10-JAN-2025 | 12,500 | 15 | 12,485 | 0 (Pass) |

---

#### 3.2.P.2.5.1.8 Bioburden and Endotoxin Limits (Drug Product)
Strict controls are applied to the raw materials and the bulk solution prior to the final aseptic step.

**Pre-Filtration Bioburden Calculation:**
The maximum allowable bioburden is calculated based on the filtration capacity:
$$N_{max} = \frac{SA \times LRV}{V_{batch}}$$
Where:
*   $SA$ (Surface Area) = 0.5 m²
*   $LRV$ (Log Reduction Value) = 7 (for *Brevundimonas diminuta*)
*   $V_{batch}$ = 50,000 mL

**Target Limits:**
*   **Pre-sterile bioburden:** $\leq 10$ CFU/100 mL.
*   **Bacterial Endotoxins (LAL):** $\leq 0.5$ EU/mg of Glucogen-XR.
*   **Procedure:** Conducted per **USP <85>** (Kinetic Chromogenic Method).

---

#### 3.2.P.2.5.1.9 Sterility Assurance Level (SAL) Justification
While terminal sterilization aims for a SAL of $10^{-6}$, the aseptic process for Glucogen-XR is designed to achieve an equivalent level of safety through:
1.  **Closed-System Manufacturing:** The entire synthesis and formulation process occurs within a 316L Stainless Steel closed loop.
2.  **Vaporized Hydrogen Peroxide (VHP):** The filling line (Line 4, GHS South SF) undergoes a 6-log reduction VHP decontamination cycle prior to every run.
3.  **Automation:** Use of robotic arms for vial loading and unloading to minimize human intervention (the primary source of microbial ingress).

#### 3.2.P.2.5.1.10 Conclusion
Based on the thermal sensitivity of the glucapeptide and the mechanical/structural instability of the PLGA-XR delivery system under ionizing radiation or chemical sterilization, **aseptic processing** is the only scientifically sound method for the production of Glucogen-XR. The comprehensive validation of the aseptic line, consistent Media Fill successes (as shown in Table 3), and rigorous environmental monitoring (Table 2) ensure that the drug product is consistently sterile and safe for the intended diabetic patient population.

---
**References:**
1.  *FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice (2004).*
2.  *USP <71> Sterility Tests.*
3.  *USP <1211> Sterility Assurance.*
4.  *ISO 13408-1: Aseptic processing of health care products.*
5.  *GHS Internal Report: Thermal Stability of Glucapeptide-1 (GHS-TR-2024-442).*

---

# Compatibility with Co-Administered Drugs

## Physical Compatibility Studies

### **3.2.P.2 PHARMACEUTICAL DEVELOPMENT**
#### **3.2.P.2.6 Compatibility with Co-Administered Drugs**
##### **3.2.P.2.6.2 Physical Compatibility Studies**

---

### **1.0 Introduction and Scope**

This subsection details the comprehensive physical compatibility assessment of Glucogen-XR (glucapeptide extended-release), a long-acting GLP-1 receptor agonist, when subjected to potential co-administration or sequential administration scenarios typical in the management of Type 2 Diabetes Mellitus (T2DM). Given that patients with T2DM frequently present with comorbidities—including hypertension, dyslipidemia, and chronic kidney disease—the likelihood of concurrent subcutaneous (SC) administration or shared delivery apparatus is high.

The primary objective of these studies was to evaluate the physical stability of the Glucogen-XR drug product (DP) formulation when mixed or in contact with common co-administered medications, intravenous (IV) fluids (for inpatient stabilization), and the materials of construction of delivery devices. This assessment complies with **ICH Q8(R2)** regarding the "Design Space" and **FDA Guidance for Industry: Quality Considerations for Dual-Chamber Syringes and Co-packaged Drug Products**.

**Primary Target Profile (QTPP) Considerations:**
*   **Maintenance of Clarity:** No precipitation, opalescence, or phase separation.
*   **Particulate Matter:** Compliance with **USP <787>** (Subvisible Particulate Matter in Therapeutic Protein Injections) and **USP <788>**.
*   **Viscosity Stability:** Maintenance of the 12.5 cP ± 2.0 cP range to ensure consistent extended-release kinetics.
*   **pH Stability:** Maintenance within pH 6.8 ± 0.2.

---

### **2.0 Study Design and Methodology**

#### **2.1 Rationale for Selection of Co-Administered Agents**
The following categories of medications were selected based on epidemiological data for T2DM patients:
1.  **Insulin Analogs:** Rapid-acting (Insulin Lispro) and Long-acting (Insulin Glargine).
2.  **Antihypertensives:** Furosemide (pH 8.0–9.3) and Lisinopril.
3.  **Diluents/Fluids:** 0.9% NaCl (Normal Saline), 5% Dextrose (D5W), and Lactated Ringer’s (LR).
4.  **Anti-inflammatory Agents:** Ketorolac tromethamine.

#### **2.2 Test Batches and Materials**
All studies utilized Glucogen-XR manufactured at the South San Francisco facility (3000 Innovation Drive).

**Table 1: Test Material Identification**
| Material | Batch Number | Concentration | Role |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR DP** | GLUC-2025-001A | 10 mg/mL | Test Article |
| **Glucogen-XR DP** | GLUC-2025-004C | 10 mg/mL | Test Article |
| **Insulin Lispro** | USP-REF-LIS-99 | 100 U/mL | Comparator |
| **Insulin Glargine** | USP-REF-GLA-22 | 100 U/mL | Comparator |
| **0.9% NaCl** | BAX-2024-8821 | N/A | Diluent |

---

### **3.0 Protocol for Physical Compatibility Assessment**

The physical compatibility was evaluated using a **Simulated Y-Site Administration Model** and a **Direct Admixture Model** (Worst-Case Scenario).

#### **3.1 Step-by-Step Procedure (Protocol GHS-QC-PHYS-442)**
1.  **Preparation:** Clean all glassware (USP Type I Borosilicate) according to **USP <1059>**. Degas all buffers using 0.22 μm filtration under vacuum.
2.  **Mixing Ratios:**
    *   Ratio A: 1:1 (v/v) Glucogen-XR to Co-medication.
    *   Ratio B: 1:5 (v/v) Glucogen-XR to Co-medication (simulating fluid bolus).
    *   Ratio C: 5:1 (v/v) Glucogen-XR to Co-medication (simulating priming).
3.  **Agitation:** Samples are placed on a horizontal orbital shaker at 60 RPM to simulate patient movement.
4.  **Time Points ($T$):** Initial ($T_0$), 1 hour, 4 hours, 24 hours, and 48 hours (refrigerated and room temperature).
5.  **Analytical Suite:**
    *   **Visual Inspection:** Against black and white backgrounds under 3500 lux (per **USP <790>**).
    *   **Micro-Flow Imaging (MFI):** To detect particles 2 μm – 70 μm.
    *   **Dynamic Light Scattering (DLS):** To detect sub-micron aggregates (Z-average diameter).
    *   **pH Measurement:** Micro-electrode (± 0.01 units).
    *   **Turbidimetry:** Measured at 350 nm (Optical Density).

---

### **4.0 Detailed Results and Tabulated Data**

#### **4.1 Visual Appearance and Turbidity**
The appearance of Glucogen-XR is a clear, colorless to slightly yellowish solution. Compatibility failure is defined as an increase in $OD_{350}$ of $>0.050$ units or visible precipitation.

**Table 2: Physical Compatibility Data - 1:1 Ratio at 25°C/60% RH**
| Co-administered Drug | Time (hr) | Visual Change | Turbidity ($OD_{350}$) | pH Result | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Control (Saline)** | 0 | Clear | 0.002 | 6.81 | Pass |
| | 24 | Clear | 0.003 | 6.80 | Pass |
| **Insulin Lispro** | 0 | Clear | 0.005 | 6.88 | Pass |
| | 4 | Clear | 0.008 | 6.89 | Pass |
| | 24 | Sl. Opalescent | 0.018 | 6.92 | Pass |
| **Insulin Glargine** | 0 | **Precipitation** | **0.842** | **5.42** | **FAIL** |
| | 4 | Dense White Ppt | 1.250 | 5.31 | FAIL |
| **Furosemide** | 0 | Clear | 0.004 | 7.45 | Pass |
| | 24 | Clear | 0.010 | 7.42 | Pass |

**Note on Insulin Glargine Failure:** Insulin Glargine is formulated at pH 4.0. Upon mixing with Glucogen-XR (pH 6.8), the Glargine reaches its isoelectric point ($pI \approx 5.4$), causing immediate precipitation. **Instruction:** Glucogen-XR must not be mixed with Insulin Glargine in the same syringe.

#### **4.2 Sub-visible Particulate Matter (USP <787>) Analysis**
Sub-visible particles were quantified using Light Obscuration (LO). The limits for a 1.0 mL subcutaneous injection are $\le 6000$ particles $\ge 10\mu m$ and $\le 600$ particles $\ge 25\mu m$.

**Table 3: Cumulative Particle Counts (Particles/mL) for Glucogen-XR:Diluent Mixtures**
| Sample ID | Batch | Condition | $\ge 10\mu m$ | $\ge 25\mu m$ | $\ge 50\mu m$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001A** | Neat | $T_0$ | 142 | 12 | 2 |
| **GLUC + 0.9% NaCl**| 1:1 | $T_{24}$ | 215 | 18 | 4 |
| **GLUC + 5% Dextrose**| 1:1 | $T_{24}$ | 340 | 25 | 3 |
| **GLUC + Lispro** | 1:1 | $T_{24}$ | 890 | 44 | 8 |
| **USP <787> Limit** | - | - | 6000 | 600 | N/A |

#### **4.3 Dynamic Light Scattering (DLS) and Polydispersity**
DLS was used to monitor the hydrodynamic radius ($R_h$) of the glucapeptide. Significant increases in $R_h$ indicate the formation of soluble oligomers/aggregates.

**Formula 1: Stokes-Einstein Equation for $R_h$ Calculation**
$$D_t = \frac{k_B T}{6 \pi \eta R_h}$$
Where:
*   $D_t$ = Translational diffusion coefficient
*   $k_B$ = Boltzmann's constant
*   $T$ = Absolute temperature (298.15 K)
*   $\eta$ = Solvent viscosity (1.25 cP for Glucogen-XR)

**Table 4: DLS Stability Data**
| Mixture | Z-Average (nm) | Polydispersity Index (PdI) |
| :--- | :--- | :--- |
| Glucogen-XR (Neat) | 8.42 | 0.12 |
| + 0.9% NaCl (1:1) | 8.55 | 0.14 |
| + Insulin Lispro (1:1) | 9.10 | 0.18 |
| + Furosemide (1:1) | 8.88 | 0.15 |

---

### **5.0 Viscosity and Syringeability Assessment**

Since Glucogen-XR is an extended-release (XR) formulation utilizing a proprietary peptide-polymer conjugation, the viscosity is critical for the "push force" required during administration.

#### **5.1 Rheological Protocol**
Using a Brookfield DV-III Ultra Programmable Rheometer with a CP-40 cone/plate spindle:
*   **Shear Rate:** 0 to 500 $s^{-1}$.
*   **Temperature:** 25°C.
*   **Volume:** 0.5 mL.

**Table 5: Viscosity Changes Upon Dilution (Batch GLUC-2025-004C)**
| Diluent | Ratio | Viscosity (cP) | Glide Force (N) |
| :--- | :--- | :--- | :--- |
| None (Control) | N/A | 12.5 | 8.2 |
| 0.9% NaCl | 1:1 | 6.4 | 4.1 |
| Human Serum Albumin | 1:1 | 14.2 | 9.4 |
| Lidocaine HCl 1% | 1:1 | 11.8 | 7.9 |

*Analysis:* Dilution with saline reduces viscosity, which remains within the acceptable safety profile but may slightly accelerate the initial "burst" release phase. This is addressed in the **Section 3.2.P.2.2 Drug Product: Formulation Development**.

---

### **6.0 Surface Adsorption and Material Compatibility**

Glucogen-XR was evaluated for compatibility with medical-grade plastics used in infusion sets and syringes (LDPE, PVC, and Polypropylene).

#### **6.1 Contact Study (72 Hours)**
Samples were stored in 3 mL Terumo syringes and Becton Dickinson (BD) Plastipak syringes.

**Table 6: Recovery of Glucapeptide (%) by RP-HPLC**
| Material | $T_0$ Recovery | $T_{24}$ Recovery | $T_{72}$ Recovery |
| :--- | :--- | :--- | :--- |
| **Borosilicate Glass** | 100.0% | 99.8% | 99.7% |
| **Polypropylene (PP)** | 99.9% | 99.5% | 99.2% |
| **LDPE** | 99.8% | 97.4% | 96.1% |
| **PVC (DEHP-free)** | 99.7% | 98.8% | 98.4% |

*Conclusion:* Minimal adsorption was noted in PP and PVC. A slight decrease in recovery in LDPE suggests hydrophobic interactions between the peptide's fatty acid tail and the LDPE matrix. Consequently, LDPE storage is not recommended.

---

### **7.0 Summary and Regulatory Conclusions**

The physical compatibility studies for Glucogen-XR (Batch series GLUC-2025-XXX) demonstrate that the drug product is physically stable and compatible with:
1.  **Rapid-acting insulin (Lispro)** at ratios up to 1:1 for 24 hours.
2.  **Standard IV diluents** (0.9% NaCl, D5W).
3.  **Common subcutaneous co-medications** like Furosemide and Lidocaine.

**Critical Contraindication:** Immediate physical incompatibility (precipitation) occurs when mixed with **Insulin Glargine**. This is a pH-dependent phenomenon resulting from the neutralization of the acidic Glargine buffer by the neutral Glucogen-XR formulation.

**Labeling Recommendation:**
"Glucogen-XR should not be mixed with Insulin Glargine or any solution with a pH below 5.0. If co-administration is required, separate injection sites must be used."

---

### **8.0 References**
1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
3.  **USP <790>:** Visible Particulates in Injections.
4.  **Google Health Sciences Internal SOP:** GHS-QC-PHYS-442 "Compatibility Testing of Biologics."
5.  *J. Pharm Sci.* (2023) "Protein-Protein Interactions in Concentrated GLP-1 Formulations," 112(4): 980-992.

---
**END OF SECTION 3.2.P.2.6.2**

---

## Chemical Compatibility if Mixing Occurs

### 3.2.P.2.6.2.3 Chemical Compatibility if Mixing Occurs

#### 3.2.P.2.6.2.3.1 Executive Summary and Scope
This section provides a comprehensive evaluation of the chemical and physical compatibility of **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences (GHS)**, when subjected to accidental or intentional mixing with other injectable medications common in the treatment of Type 2 Diabetes Mellitus (T2DM) and associated comorbidities. 

While Glucogen-XR is provided as a single-use, pre-filled autoinjector (the GHS-SmartPen™ system) and is intended for subcutaneous administration as a standalone therapy, the potential for co-administration—and therefore the risk of accidental mixing in the subcutaneous space or cross-contamination during sequential injections—must be rigorously evaluated. This assessment adheres to **ICH Q8(R2)** regarding pharmaceutical development and follows the risk-based approach outlined in **FDA Guidance for Industry: Protein Heterogeneity and Compatibility**.

#### 3.2.P.2.6.2.3.2 Physicochemical Rational for Compatibility Risk
Glucogen-XR is a 44-amino acid synthetic peptide analog of human GLP-1, stabilized with a proprietary C-terminal extension and a palmitoylated lysine residue (Lys-26) to facilitate albumin binding and extended-release kinetics. The formulation is maintained at a pH of **7.40 ± 0.05**, utilizing a dibasic sodium phosphate/monobasic potassium phosphate buffer system.

The primary risks associated with mixing Glucogen-XR with other therapeutic agents include:
1.  **Isoelectric Point (pI) Shift Precipitation:** The pI of Glucogen-XR is approximately **5.1**. Mixing with acidic formulations (e.g., Insulin Glargine, pH 4.0) may shift the local pH toward the pI, leading to immediate irreversible peptide precipitation.
2.  **Ionic Strength Destabilization:** High salt concentrations from co-administered drugs may screen the electrostatic repulsions necessary for maintaining the peptide in a monomeric/dimeric equilibrium.
3.  **Surfactant Competition:** Competition for the air-water interface between Polysorbate 80 (in Glucogen-XR) and other surfactants may lead to sub-visible particulate formation.

---

#### 3.2.P.2.6.2.3.3 Study Methodology and Analytical Controls
To assess these risks, Google Health Sciences conducted a series of "Worst-Case" mixing studies. All studies utilized Glucogen-XR drug product from **Batch GLUC-2025-004, GLUC-2025-007, and GLUC-2025-012**.

##### Table 1: Analytical Methods and Acceptance Criteria for Compatibility Testing
| Method ID | Parameter | Acceptance Criteria | Sensitivity/LOD |
| :--- | :--- | :--- | :--- |
| **GHS-RP-HPLC-01** | Purity/Related Substances | Main peak area ≥ 98.0%; No new impurities > 0.1% | 0.02% |
| **GHS-SEC-HPLC-02** | High Molecular Weight Species (HMWS) | Total HMWS ≤ 1.0% | 0.05% |
| **USP <788>** | Sub-visible Particulates | ≥10μm: <6000/cont.; ≥25μm: <600/cont. | 1 particle |
| **GHS-DLS-05** | Hydrodynamic Radius (Rh) | 3.2 nm ± 0.4 nm (Monomeric peak) | 0.1 nm |
| **USP <791>** | pH Stability | Change ≤ 0.2 units from theoretical mixture | 0.01 pH |

##### Step-by-Step Mixing Protocol (Protocol GHS-CP-2025-X1)
1.  **Preparation:** Under ISO Class 5 laminar flow, 1.0 mL of Glucogen-XR (10 mg/mL) is drawn into a siliconized borosilicate glass syringe.
2.  **Ratio Selection:** Mixtures are prepared in ratios of **1:1, 1:4, and 4:1** (v/v) to simulate various co-administration scenarios.
3.  **Mixing:** The secondary drug is introduced via a 3-way stopcock. The solution is gently swirled for 15 seconds.
4.  **Incubation:** Samples are held at **25°C/60% RH** and **37°C** (body temperature simulation) for 0, 1, 4, and 24 hours.
5.  **Quenching/Analysis:** Reactions are quenched with 0.1% TFA if necessary for HPLC, or analyzed directly for particulates.

---

#### 3.2.P.2.6.2.3.4 Results: Compatibility with Rapid-Acting Insulins
Testing was performed using Insulin Lispro and Insulin Aspart. Both are formulated at near-neutral pH (7.2–7.5), matching the Glucogen-XR profile.

##### Table 2: Physical and Chemical Compatibility Data (Glucogen-XR vs. Insulin Lispro)
*Data from Batch GLUC-2025-004; Mixing Ratio 1:1; Temp 37°C*

| Time Point (hr) | Appearance | pH | Main Peak (%) | Total HMWS (%) | Particulates (≥10μm) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 (Initial) | Clear, Colorless | 7.39 | 99.4 | 0.21 | 142 |
| 1 | Clear, Colorless | 7.40 | 99.3 | 0.23 | 185 |
| 4 | Clear, Colorless | 7.38 | 99.2 | 0.25 | 210 |
| 24 | Trace Opalescence| 7.35 | 98.8 | 0.42 | 550 |

**Technical Observation:** At 24 hours, a slight increase in HMWS was observed, likely due to hydrophobic interactions between the Glucogen-XR palmitoyl chain and the hexameric insulin structure. However, all values remained well within USP <788> and internal specification limits.

---

#### 3.2.P.2.6.2.3.5 Results: Compatibility with Long-Acting (Basal) Insulins
**CRITICAL INCOMPATIBILITY IDENTIFIED:** Mixing Glucogen-XR with **Insulin Glargine** (pH 4.0) resulted in immediate macroscopic precipitation.

##### Table 3: Compatibility Assessment with Acidic Formulations
| Mixture Combination | Visual Observation | pH of Mixture | Result |
| :--- | :--- | :--- | :--- |
| Glucogen-XR + Insulin Glargine | Immediate White Precipitate | 5.2 - 5.8 | **Incompatible** |
| Glucogen-XR + Insulin Detemir | Clear to Slightly Cloudy | 7.1 | Compatible |
| Glucogen-XR + Insulin Degludec | Clear | 7.4 | Compatible |

**Mechanism of Incompatibility with Glargine:**
The formulation of Insulin Glargine relies on acidity for solubility. Upon mixing with the phosphate-buffered Glucogen-XR (pH 7.4), the resulting pH of the mixture (~5.5) nears the isoelectric point of Glucogen-XR (pI 5.1). This leads to a loss of net charge on the peptide, inducing rapid aggregation and flocculation.

**Calculation of Saturation Index (SI):**
$SI = \log(Q/K_{sp})$
For Glucogen-XR in the presence of Glargine at pH 5.4, $SI > 1.8$, indicating a high thermodynamic drive for precipitation.

---

#### 3.2.P.2.6.2.3.6 Mathematical Modeling of Diffusion-Based Mixing
To simulate the "subcutaneous depot" effect where two drugs are injected sequentially at the same site, GHS utilized a **Fickian Diffusion Model** implemented in COMSOL Multiphysics.

**Model Parameters:**
*   Diffusion Coefficient ($D$): $8.5 \times 10^{-11} \text{ m}^2/\text{s}$
*   Subcutaneous Interstitial Fluid Velocity ($u$): $0.1 \mu\text{m/s}$
*   Reaction Rate ($k$): $1.2 \times 10^{-3} \text{ s}^{-1}$ (Aggregation rate)

**Findings:** The model indicates that if Glucogen-XR and Insulin Glargine are injected within 2 cm of each other, a "precipitation zone" forms at the interface of the two expanding boluses. This could potentially alter the pharmacokinetic (PK) profile of both drugs, leading to delayed absorption of the GLP-1 and erratic basal insulin coverage.

---

#### 3.2.P.2.6.2.3.7 Statistical Analysis of Recovery
Recovery of Glucogen-XR was calculated using the following formula:
$R = \frac{C_{observed}}{C_{theoretical}} \times 100$

Following 4 hours of contact with Insulin Aspart (Batch GLUC-2025-012), the 95% Confidence Interval for recovery was **[98.2%, 100.4%]**, confirming no significant loss of active pharmaceutical ingredient (API) due to adsorption or chemical degradation.

#### 3.2.P.2.6.2.3.8 Regulatory Conclusion and Labeling Recommendations
Based on the data presented in this section (3.2.P.2.6.2.3):
1.  **Glucogen-XR is chemically compatible** with neutral-pH injections (e.g., Insulin Lispro, Aspart, Degludec).
2.  **Glucogen-XR is chemically INCOMPATIBLE** with acidic injections (e.g., Insulin Glargine). Mixing results in immediate precipitation and potential loss of potency.
3.  **Labeling Requirement:** The United States Prescribing Information (USPI) Section 2.2 must explicitly state: *"Do not mix Glucogen-XR with any other injectable products. If co-administered with Insulin Glargine, injections should be administered at separate anatomical sites (e.g., opposite sides of the abdomen)."*

#### 3.2.P.2.6.2.3.9 References
1.  **USP <788>** Particulate Matter in Injections.
2.  **ICH Q8(R2)** Pharmaceutical Development.
3.  **Wang, W., et al. (2015).** *Protein Aggregation: Pathways, Chemistry, and Control.*
4.  **Google Health Sciences Internal Report GHS-RD-2024-442:** *Electrostatic Modeling of Glucapeptide-Insulin Interactions.*

---

## Instructions to Avoid Incompatibilities

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SECTION 3.2.P.2.6 COMPATIBILITY
#### SUBSECTION 3.2.P.2.6.4: INSTRUCTIONS TO AVOID INCOMPATIBILITIES

---

### 1.0 SCOPE AND REGULATORY FRAMEWORK

This subsection provides comprehensive technical instructions and clinical administration protocols designed to mitigate, eliminate, or manage potential physical and chemical incompatibilities of **Glucogen-XR (glucapeptide extended-release)**. As a high-molecular-weight acylated peptide therapeutic formulated in a proprietary extended-release (XR) matrix, Glucogen-XR exhibits specific sensitivities to pH shifts, ionic strength variations, and shear stress.

These instructions are authored in accordance with:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **FDA Guidance for Industry:** *Size, Shape, and Other Physical Attributes of Generic Tablets and Capsules* (Applicable to injectable suspension characteristics).
*   **USP <790>:** Visible Particulates in Injections.
*   **USP <788>:** Particulate Matter in Injections.
*   **FDA Guidance for Industry:** *Immunogenicity Assessment for Therapeutic Protein Products*.

---

### 2.0 PRODUCT CHARACTERIZATION AND VULNERABILITY PROFILE

Glucogen-XR consists of a recombinant GLP-1 receptor agonist peptide (GHS-772) conjugated to a 40 kDa branched PEG moiety, encapsulated within a poly(lactic-co-glycolic acid) (PLGA) microsphere suspension.

#### 2.1 Critical Material Attributes (CMAs) Relevant to Incompatibility
| Attribute ID | Property | Specification/Value | Sensitivity Level | Impact of Incompatibility |
| :--- | :--- | :--- | :--- | :--- |
| CMA-01 | pH Stability Range | 6.2 – 6.8 | High | Deamidation/Aggregation |
| CMA-02 | Isoelectric Point (pI) | 5.1 | Moderate | Precipitation if pH < 5.5 |
| CMA-03 | Shear Sensitivity | < 15,000 s⁻¹ | Critical | Primary structure fragmentation |
| CMA-04 | Surfactant Conc. | 0.02% Polysorbate 80 | High | Micellar destabilization |
| CMA-05 | Viscosity (at 25°C) | 12.5 cP (reconstituted) | Low | Syringeability issues |

---

### 3.0 INSTRUCTIONS FOR CLINICAL PREPARATION TO PREVENT INCOMPATIBILITIES

The following protocols must be strictly followed by healthcare professionals (HCPs) to ensure the integrity of the Glucogen-XR drug product during the "bedside" preparation phase.

#### 3.1 Diluent Compatibility and Restrictions
Glucogen-XR must **only** be reconstituted with the provided diluent (Sterile Water for Injection with 0.9% NaCl and 0.02% Polysorbate 80). 

**Table 3.1-A: Results of Diluent Incompatibility Testing (Batch GLUC-2025-004-D)**
| Test Diluent | pH Shift | Particle Count (USP <788>) | Result | Conclusion |
| :--- | :--- | :--- | :--- | :--- |
| D5W (5% Dextrose) | -1.2 | > 6,000 (≥ 10µm) | **FAIL** | Glycation of peptide |
| Lactated Ringer's | +0.8 | > 12,000 (≥ 25µm) | **FAIL** | Calcium-induced bridging |
| 0.45% Saline | -0.2 | 2,400 (≥ 10µm) | **FAIL** | Hypotonic destabilization |
| **GHS-Diluent-01** | **0.0** | **< 100 (≥ 10µm)** | **PASS** | **Optimized Vehicle** |

**Instruction 3.1.1:** DO NOT use bacteriostatic water for injection containing benzyl alcohol. Benzyl alcohol has been shown to induce secondary structure unfolding of the GHS-772 peptide, leading to a 40% reduction in potency within 30 minutes.

#### 3.2 Mixing and Reconstitution Protocol (The "Swirl-Not-Shake" Mandate)
To avoid shear-induced aggregation and foaming (which leads to inaccurate dosing), the following procedure is mandatory.

**Step-by-Step Reconstitution Protocol (SOP-GHS-CLIN-09):**
1.  **Thermal Equilibration:** Remove the Glucogen-XR vial from refrigeration (2-8°C) and allow it to reach room temperature (20-25°C) for exactly 45 minutes. *Incompatibility Risk: Cold reconstitution increases air entrainment.*
2.  **Aseptic Transfer:** Using a 21G needle, transfer 1.2 mL of the GHS-Diluent-01 into the vial. Aim the stream at the side wall of the glass, NOT directly onto the lyophilized cake.
3.  **The 360-Degree Swirl:** Gently rotate the vial between the palms of the hands. Perform 10 full rotations at a rate of 1 rotation per 2 seconds.
4.  **Inspection for "Fish-eyes":** Hold the vial against a black and white background (USP <790>). If translucent gelatinous masses ("fish-eyes") are visible, the product is incompatible with the mixing speed used and must be discarded.

---

### 4.0 CO-ADMINISTRATION AND Y-SITE COMPATIBILITY

In clinical settings, Glucogen-XR may be considered for administration alongside other subcutaneous therapies. However, due to the proprietary XR matrix, the following restrictions apply.

#### 4.1 Physical Incompatibility with Rapid-Acting Insulins
Glucogen-XR (pH 6.5) is strictly incompatible with insulin glargine (pH 4.0).

**Calculation of pH-Induced Precipitation:**
The solubility ($S$) of the GHS-772 peptide as a function of pH is defined by the Henderson-Hasselbalch derivative:
$$log(S/S_0) = |pH - pI|$$
Mixing Glucogen-XR with an acidic insulin (pH 4.0) drops the local environment pH to approximately 4.8, which is within 0.3 units of the pI (5.1). This results in an immediate 95% reduction in solubility.

**Instruction 4.1.1:** Never mix Glucogen-XR in the same syringe with any other injectable medication. Separate injection sites by at least 10 cm.

#### 4.2 Y-Site Compatibility Data
While Glucogen-XR is intended for SC injection, in certain research settings (e.g., Clamp Studies), Y-site compatibility with IV fluids has been assessed.

**Table 4.2-B: Y-Site Compatibility Matrix (1:1 Ratio)**
| Co-Administered Agent | Concentration | Observation (4hr) | Compatibility |
| :--- | :--- | :--- | :--- |
| Heparin Sodium | 100 U/mL | Immediate Cloudiness | **Incompatible** |
| Metformin HCl | 5 mg/mL | No change | Compatible |
| Hydrocortisone | 1 mg/mL | Micro-precipitation | **Incompatible** |
| Normal Saline | 0.9% | No change | Compatible |

---

### 5.0 CONTAINER CLOSURE SYSTEM (CCS) INCOMPATIBILITIES

The selection of the delivery device is critical. Glucogen-XR has demonstrated leaching potential with certain elastomers.

#### 5.1 Silicone Oil Sensitivity
The GHS-772 peptide is highly surface-active. Excess silicone oil (polydimethylsiloxane) in standard syringes can act as a nucleating agent for peptide fibrillation.

**Table 5.1-C: Particle Formation by Syringe Type (Batch GLUC-2025-009)**
| Syringe Type | Silicone Level | Sub-visible Particles (>10µm) | Result |
| :--- | :--- | :--- | :--- |
| Standard Polypropylene | High | 14,500/mL | **FAIL** |
| Low-Silicone (Baked) | Low | 1,200/mL | **PASS** |
| Silicone-Free (CZ Polymer) | None | 150/mL | **OPTIMAL** |

**Instruction 5.1.1:** Use only the Google Health Sciences-validated GHS-SYR-05 delivery system provided with the kit. Use of third-party syringes is an "Off-Label Incompatible Use."

---

### 6.0 ADSORPTION TO INFUSION SETS AND TUBING

In cases where Glucogen-XR is administered via a continuous subcutaneous insulin infusion (CSII) pump (investigational use only), adsorption to plastic surfaces must be managed.

**Formula for Adsorptive Loss:**
The mass of peptide adsorbed ($M_{ads}$) follows the Langmuir Isotherm:
$$M_{ads} = \frac{(N \cdot K \cdot C)}{(1 + K \cdot C)}$$
Where:
*   $N$ = Total binding sites on tubing surface
*   $K$ = Equilibrium constant for GHS-772
*   $C$ = Concentration of Glucogen-XR

**Instruction 6.0.1:** To saturate binding sites, prime all tubing with 5 mL of the reconstituted product at a flow rate of 1 mL/min before connecting to the patient.

---

### 7.0 STORAGE-RELATED INCOMPATIBILITIES (TEMPERATURE EXCURSIONS)

Incompatibility can be induced by improper storage, leading to "Chemical Incompatibility" with the intended therapeutic effect.

**Table 7.0-D: Kinetic Degradation at Non-Standard Temperatures (Batch GLUC-2025-012)**
| Temp (°C) | Stress Duration | % Purity (RP-HPLC) | High Molecular Weight Species (SEC) |
| :--- | :--- | :--- | :--- |
| 2-8°C | 24 Months | 99.2% | 0.4% |
| 25°C | 30 Days | 94.5% | 4.2% |
| 40°C | 48 Hours | 81.0% | 15.6% |

**Instruction 7.0.1:** If the product is exposed to temperatures exceeding 30°C for more than 4 hours, it must be considered "Incompatible for Human Use" and discarded due to the formation of immunogenic aggregates.

---

### 8.0 SUMMARY OF PROHIBITED ACTIONS

To ensure the safety and efficacy of Glucogen-XR, the following actions are strictly prohibited:
1.  **Vigorous Shaking:** Causes denaturation and irreversible aggregation.
2.  **Freezing:** Specifically damages the PLGA microsphere structure, causing a "dose dump" (loss of XR properties).
3.  **Dilution with Preservative-Containing Fluids:** Induces chemical modification of the peptide.
4.  **Exposure to Direct UV Light:** Photolysis of the acylated side chain occurs within 120 minutes of exposure.

---

### 9.0 REFERENCES
1.  Google Health Sciences Internal Report: *GHS-772-COMPAT-2024-001*.
2.  ICH Q8(R2) Pharmaceutical Development Guidance.
3.  Wang, W., "Instability, stabilization, and formulation of liquid protein pharmaceuticals," *International Journal of Pharmaceutics*, 185(2), 129-188.
4.  USP <787> Subvisible Particulate Matter in Therapeutic Protein Injections.

---

# Manufacturing Process Development

## Formulation and Filling Process

# MODULE 3: QUALITY (BIOLOGICS/PEPTIDES)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.3: Manufacturing Process Development
#### PART 3.2.P.2.3.4: Formulation and Filling Process (Detailed)

---

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive narrative and technical justification for the development of the formulation and aseptic filling process for **Glucogen-XR (glucapeptide extended-release)**, 2.5 mg/0.5 mL solution for injection in a pre-filled syringe (PFS).

The manufacturing process for Glucogen-XR was developed by **Google Health Sciences (GHS)** to ensure the long-term stability of the glucapeptide moiety while maintaining the integrity of the extended-release matrix. The development program adhered to **ICH Q8(R2) Pharmaceutical Development** principles, utilizing a Quality by Design (QbD) approach to define the Design Space and Control Strategy.

---

### 2.0 DRUG PRODUCT COMPOSITION AND SPECIFICATIONS
The formulation (GHS-F12 formulation) was selected following extensive screening of over 45 excipient combinations.

**Table 1: Quantitative Composition of Glucogen-XR Drug Product (Batch GLUC-2025-001 through 010)**

| Component | Function | Concentration (per mL) | Quantity per Unit (0.5 mL) | Quality Standard |
| :--- | :--- | :--- | :--- | :--- |
| Glucapeptide (GHS-001) | Active Pharmaceutical Ingredient | 5.00 mg | 2.50 mg | GHS In-house (ICH Q6B) |
| Sodium Citrate Dihydrate | Buffering Agent | 2.15 mg | 1.075 mg | USP/EP/JP |
| Citric Acid Monohydrate | pH Adjuster | 0.55 mg | 0.275 mg | USP/EP/JP |
| Polysorbate 80 (Crillet 4 HP) | Surfactant / Anti-aggregation | 0.20 mg | 0.10 mg | USP/EP/JP |
| Trehalose Dihydrate | Lyoprotectant / Osmolality | 65.0 mg | 32.5 mg | USP/EP/JP |
| L-Histidine | Stabilizer | 1.55 mg | 0.775 mg | USP/EP/JP |
| Water for Injection (WFI) | Solvent | q.s. to 1.0 mL | q.s. to 0.5 mL | USP/EP/JP |

---

### 3.0 FORMULATION DEVELOPMENT AND PROCESS RATIONALE

#### 3.1 pH Selection and Buffering Capacity
The isoelectric point (pI) of the glucapeptide is approximately 5.1. Initial stability studies (Study GHS-STAB-2023-A1) indicated maximum solubility and minimum deamidation at pH 6.2 ± 0.3.

**Table 2: pH Optimization and Degradation Rates (40°C Accelerated Storage)**

| pH Value | Deamidation (%) at 4 Weeks | Aggregation (SEC-HPLC %) | Visual Inspection |
| :--- | :--- | :--- | :--- |
| 5.5 | 4.2% | 0.85% | Slight Opalescence |
| 5.8 | 2.1% | 0.42% | Clear |
| 6.2 | 0.9% | 0.15% | Clear |
| 6.5 | 1.4% | 0.22% | Clear |
| 7.0 | 3.8% | 1.10% | Clear |

#### 3.2 Impact of Shear Stress during Filling
Glucapeptide is sensitive to shear forces encountered during high-speed filling pumps. Development studies compared Rotary Piston Pumps (RPP) vs. Peristaltic Pumps (PP).

**Data Analysis (Batch GLUC-2025-REF-01):**
*   **Peristaltic Pump (Watson-Marlow 505L):** 0.05% increase in high molecular weight species (HMWS).
*   **Rotary Piston Pump (Bausch + Ströbel):** 0.45% increase in HMWS due to friction-induced denaturation.
*   **Decision:** The manufacturing process utilizes peristaltic pumping systems to maintain peptide tertiary structure.

---

### 4.0 UNIT OPERATION: FORMULATION (COMPOUNDING)

The compounding process involves the sequential addition of excipients into WFI, followed by the addition of the Drug Substance (DS).

#### 4.1 Equipment List (Facility 3000 Innovation Drive)
*   **Vessel:** 200L 316L Stainless Steel Pressure Vessel (ID: EQ-VES-09)
*   **Agitator:** Magnetic Bottom-Mount Impeller (ID: EQ-AGI-09)
*   **Scale:** Mettler Toledo High-Precision (ID: EQ-SCL-14)

#### 4.2 Compounding Procedure (Protocol GHS-CP-004)
1.  **WFI Charging:** Charge 80% of the total batch volume of WFI at 20°C - 25°C.
2.  **Excipient Addition:**
    *   Add Sodium Citrate Dihydrate; mix for 15 mins at 200 RPM.
    *   Add L-Histidine; mix for 20 mins at 250 RPM.
    *   Add Trehalose Dihydrate; mix for 30 mins at 300 RPM.
3.  **Surfactant Addition:** Polysorbate 80 is added as a 10% stock solution to prevent undissolved "globules."
4.  **API Addition:** The Glucapeptide (GHS-001) is thawed (if frozen) or brought to room temperature and slowly transferred via a peristaltic transfer line to the vessel.
5.  **QS (Quantum Satis):** Adjust to final weight with WFI.
6.  **pH Verification:** Target 6.2. Adjust using 0.1M HCl or 0.1M NaOH if necessary.

**Table 3: Process Parameters for Compounding (Batch GLUC-2025-004)**

| Parameter | Set Point | Range | Observed Value | Result |
| :--- | :--- | :--- | :--- | :--- |
| Mixing Speed | 250 RPM | 200 - 300 RPM | 252 RPM | Pass |
| Temperature | 22.0°C | 18.0 - 25.0°C | 21.8°C | Pass |
| Final pH | 6.20 | 6.00 - 6.40 | 6.22 | Pass |
| Density | 1.045 g/mL | 1.040 - 1.050 | 1.046 g/mL | Pass |

---

### 5.0 UNIT OPERATION: STERILE FILTRATION

Sterile filtration is performed using two redundant 0.22 µm PVDF filters (Millipore Durapore) in series.

#### 5.1 Filter Validation
*   **Adsorption:** Studies showed <1% peptide loss on PVDF membrane.
*   **Integrity Testing:** Pre- and Post-use Bubble Point testing required.
    *   *Min Bubble Point:* 50 psi (WFI).

#### 5.2 Filtration Parameters
*   **Flow Rate:** 1.5 L/min
*   **Maximum Pressure:** 2.0 bar
*   **Hold Time (Post-Filtration):** Maximum 24 hours at 2-8°C.

---

### 6.0 UNIT OPERATION: ASEPTIC FILLING AND PLUNGER INSERTION

Filling is conducted in a Grade A (ISO 5) isolator environment.

#### 6.1 Container Closure System
*   **Syringe:** 1.0 mL Long Type I Glass (Schott TopPac)
*   **Plunger:** FluroTec® coated chlorobutyl rubber (West Pharmaceutical Services)
*   **Needle:** 29G Thin Wall, 1/2 inch.

#### 6.2 Filling Parameters and IPCs (In-Process Controls)
A 100% check-weighing system is utilized to ensure fill volume accuracy.

**Table 4: Statistical Analysis of Filling Accuracy (Batch GLUC-2025-005)**

| Metric | Specification | Result |
| :--- | :--- | :--- |
| Target Fill Mass | 0.523 g (calculated via density) | 0.523 g |
| Mean Fill Mass | N/A | 0.5234 g |
| Standard Deviation | ≤ 0.005 g | 0.0012 g |
| Relative Std Dev (RSD) | ≤ 1.0% | 0.23% |
| Minimum Individual Fill | 0.495 g | 0.519 g |
| Maximum Individual Fill | 0.550 g | 0.528 g |

#### 6.3 Plunger Insertion (Vacuum vs. Mechanical)
To prevent "wrinkling" of the FluroTec coating and ensure a consistent headspace (required for autoinjector compatibility), a vacuum-assisted plunger insertion process is utilized.

*   **Vacuum Level:** 50 mbar
*   **Insertion Depth:** 14.5 mm ± 0.5 mm
*   **Headspace Oxygen:** < 5% (verified by laser absorption spectroscopy).

---

### 7.0 PROCESS CHARACTERIZATION (DOE STUDIES)

A Definitive Screening Design (DSD) was performed to evaluate the impact of process variables on the Critical Quality Attributes (CQAs) of Glucogen-XR.

**Factors Evaluated:**
1.  Impeller Speed (100 - 500 RPM)
2.  Compounding Duration (30 - 240 mins)
3.  Dissolved Oxygen (2 ppm - 8 ppm)
4.  Pumping Speed (10 - 50 mL/min)

**Table 5: DOE Results Summary (Effect on Purity via RP-HPLC)**

| Factor | Effect Estimate | p-value | Significance |
| :--- | :--- | :--- | :--- |
| Compounding Duration | +0.02% Impurity | 0.142 | Not Significant |
| Dissolved Oxygen | +0.45% Impurity | 0.004 | **Significant** |
| Pumping Speed | +0.12% Aggregates | 0.021 | **Significant** |

*Conclusion:* Dissolved oxygen levels must be controlled via Nitrogen sparging during the compounding of the bulk solution to minimize oxidation of the Methionine residues at positions Met-14 and Met-27.

---

### 8.0 BATCH ANALYSIS AND TRACEABILITY

The following table summarizes the data from the three registration stability batches (RSB) produced at the Google Health Sciences commercial scale facility.

**Table 6: Summary of Clinical/Registration Batches**

| Batch Number | Scale | Date of Mfg | Site | Usage |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-007 | 50,000 units | 12-JAN-2025 | South San Francisco | Phase III / Stability |
| GLUC-2025-008 | 50,000 units | 25-JAN-2025 | South San Francisco | Phase III / Stability |
| GLUC-2025-009 | 50,000 units | 08-FEB-2025 | South San Francisco | PV / Stability |

---

### 9.0 REGULATORY COMPLIANCE AND GUIDELINES
The formulation and filling process development was conducted in accordance with:
*   **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
*   **USP <790>:** Visible Particulates in Injections.
*   **USP <788>:** Particulate Matter in Injections.
*   **FDA Guidance for Industry:** Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice.

---

### 10.0 CONCLUSION
The developed formulation (GHS-F12) and the corresponding aseptic filling process provide a robust method for producing Glucogen-XR. The use of peristaltic pumps, vacuum plunger insertion, and nitrogen sparging ensures the maintenance of the glucapeptide's potency and purity, meeting all predefined Quality Target Product Profile (QTPP) specifications.

[End of Section 3.2.P.2.3.4]

---

## In-Process Controls

# MODULE 3: QUALITY (DRUG PRODUCT)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.3: MANUFACTURING PROCESS DEVELOPMENT

---

#### 3.2.P.2.3.5: IN-PROCESS CONTROLS (IPC) STRATEGY AND RATIONALE

The In-Process Control (IPC) strategy for **Glucogen-XR (glucapeptide extended-release)** was developed in accordance with ICH Q8(R2) *Pharmaceutical Development*, ICH Q10 *Pharmaceutical Quality System*, and the FDA Guidance for Industry *Process Validation: General Principles and Practices*. 

Google Health Sciences has implemented a multi-tiered IPC framework designed to ensure that the Critical Quality Attributes (CQAs) of the drug product—specifically the sustained-release profile of the glucapeptide and the integrity of the PLGA-based microsphere matrix—are maintained throughout the manufacturing lifecycle. This section details the establishment of IPC limits, the analytical methodologies employed, and the statistical justification for the selected control points.

---

### 1. OVERARCHING IPC FRAMEWORK AND RISK-BASED DESIGN

The manufacturing of Glucogen-XR involves a complex Double Emulsion ($W_1/O/W_2$) Solvent Evaporation/Extraction process. Given the sensitivity of the GLP-1 receptor agonist peptide to shear stress, temperature, and organic solvent exposure, the IPCs are categorized into three critical phases:

1.  **Phase I: Primary Emulsion ($W_1/O$) Formation** (Focus: Droplet size and protein stability)
2.  **Phase II: Secondary Emulsion ($W_1/O/W_2$) and Hardening** (Focus: Microsphere morphology and encapsulation efficiency)
3.  **Phase III: Downstream Processing** (Focus: Solvent removal, sterilization, and filling)

#### 1.1 Process Analytical Technology (PAT) Integration
Google Health Sciences utilizes real-time monitoring via Focused Beam Reflectance Measurement (FBRM) and In-line Near-Infrared (NIR) spectroscopy to monitor chord length distribution and solvent concentration, respectively.

---

### 2. DETAILED IN-PROCESS CONTROL SPECIFICATIONS

The following table summarizes the IPCs established during the development of pivotal clinical batches (e.g., GLUC-2025-001 through GLUC-2025-015).

#### Table 2.3.5-1: Master In-Process Control Table for Glucogen-XR Manufacturing

| Process Step | IPC Parameter | Methodology | Frequency | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Step 1: $W_1$ Prep** | Glucapeptide Conc. | UV-Vis ($A_{280}$) | Every Batch | $50.0 \pm 2.0$ mg/mL | Ensures correct peptide loading ratio. |
| **Step 1: $W_1$ Prep** | pH Value | USP <791> | Every Batch | $4.5 \pm 0.2$ | Stability of peptide at isoelectric point. |
| **Step 2: $O$-Phase Prep** | Polymer Viscosity | Brookfield | Every Batch | $120 - 150$ cP | Affects microsphere size and release rate. |
| **Step 3: $W_1/O$ Mixing** | Droplet Size ($D_{50}$) | FBRM (In-line) | Continuous | $1.2 - 2.8 \mu m$ | Prevents "burst release" effect. |
| **Step 4: $W_2$ Prep** | PVA Concentration | Refractometry | Every Batch | $1.0\% \pm 0.05\% w/v$ | Surfactant levels control particle stability. |
| **Step 5: Emulsification** | Temperature Control | RTD Probe | Continuous | $4^\circ C - 8^\circ C$ | Prevents peptide denaturation. |
| **Step 6: Hardening** | Residual DCM | Headspace GC | Hourly | $< 5,000$ ppm (at T=4h) | Indicates rate of solvent extraction. |
| **Step 7: Filtration** | Flow Rate | Mass Flow Meter | Continuous | $2.0 - 5.0$ L/min | Prevents shear damage to microspheres. |
| **Step 8: Lyophilization** | Sublimation End Pt | Pressure Rise | Every Batch | $< 10$ mTorr/min | Ensures primary drying completion. |

---

### 3. STEP-BY-STEP IPC PROTOCOLS AND PROCEDURES

#### 3.1 Protocol IPC-001: Particle Size Distribution (PSD) Monitoring via Laser Diffraction
*Applicable to Step 5 (Secondary Emulsion)*

**Objective:** To ensure the secondary emulsion droplet size remains within the target range to achieve a 30-day release profile.

**Procedure:**
1.  **Sampling:** Withdraw 5.0 mL of the $W_1/O/W_2$ emulsion from the 300L bioreactor (Equipment ID: GHS-BR-3000) using a sterile port.
2.  **Dilution:** Dilute 1:100 in 0.1% PVA solution to prevent coalescence.
3.  **Measurement:** Analyze using Malvern Mastersizer 3000.
4.  **Calculations:**
    *   $Span = \frac{D_{90} - D_{10}}{D_{50}}$
5.  **Action Limit:** If $D_{50} > 65 \mu m$, increase homogenizer speed by 250 RPM. If $D_{50} < 45 \mu m$, decrease speed.

#### 3.2 Protocol IPC-002: Real-time Solvent Removal Monitoring
*Applicable to Step 6 (Solvent Evaporation)*

**Objective:** To determine the precise transition point from "soft" droplets to "hard" microspheres.

**Procedure:**
1.  Utilize the **GHS-NIR-Sense** probe inserted in the side-neck of the vessel.
2.  Calibrate against Dichloromethane (DCM) peaks at 1600-1800 nm.
3.  **Acceptance Criterion:** Solvent concentration must drop below 0.5% v/v before initiating the final cold-water wash.
4.  **Data Logging:** Data is pushed to Google Cloud Life Sciences (GCLS) BigQuery for real-time statistical process control (SPC) analysis.

---

### 4. BATCH DATA ANALYSIS AND STATISTICAL JUSTIFICATION

The following data represents the IPC results for three consecutive development batches produced at the South San Francisco facility (3000 Innovation Drive).

#### Table 2.3.5-2: IPC Result Summary for Pivotal Batches

| Parameter | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Batch GLUC-2025-003 | Mean | %RSD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **$W_1$ Droplet Size ($\mu m$)** | 1.95 | 2.01 | 1.88 | 1.95 | 3.3% |
| **Final PSD $D_{50}$ ($\mu m$)** | 54.2 | 53.8 | 55.1 | 54.4 | 1.2% |
| **Encapsulation Eff. (%)** | 92.4% | 91.8% | 93.1% | 92.4% | 0.7% |
| **Residual DCM (ppm)** | 142 | 158 | 135 | 145 | 8.1% |
| **Endotoxin (EU/mg)** | < 0.05 | < 0.05 | < 0.05 | N/A | N/A |

**Statistical Analysis (CpK):**
Based on the data above, the Process Capability Index (Cpk) for the $D_{50}$ parameter is calculated as:
$Cpk = \min\left[ \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right]$
Given USL=75, LSL=35, $\mu=54.4$, and $\sigma=0.65$:
$Cpk = \frac{75 - 54.4}{1.95} = 10.56$
A Cpk > 1.33 indicates a highly capable process with minimal risk of producing out-of-specification (OOS) material.

---

### 5. RATIONALE FOR REJECTION LIMITS

The IPC limits for Glucogen-XR are not merely based on historical data but are derived from **Quality by Design (QbD)** studies.

1.  **Viscosity (120-150 cP):** Extensive Design of Experiment (DoE) studies (see Section 3.2.P.2.1) showed that polymer viscosity below 100 cP leads to "hollow" microspheres, resulting in a catastrophic 24-hour burst release of >40% of the peptide.
2.  **pH Control (4.5 ± 0.2):** Glucapeptide exhibits maximum stability at pH 4.5. Deviations to >5.5 trigger deamidation at the $Asn^{28}$ residue, as confirmed by LC-MS/MS analysis.
3.  **Secondary Emulsion Cooling (4°C - 8°C):** Thermal stress studies (Section 3.2.P.2.1.4) indicate that at 15°C, the glucapeptide undergoes rapid fibrillation, rendering the drug product biologically inactive.

---

### 6. EQUIPMENT AND CALIBRATION STANDARDS

All IPC measurements are performed on qualified equipment (IQ/OQ/PQ) maintained under the Google Health Sciences Quality Management System (QMS).

*   **FBRM Probe:** Mettler Toledo ParticleTrack G400. Calibrated bi-annually using PVC reference beads (USP <776>).
*   **HPLC System:** Agilent 1290 Infinity II. System Suitability Test (SST) required before every IPC run: %RSD of 5 injections < 2.0%.
*   **Bio-Analyzer:** GHS-Proprietary Digital Droplet PCR for cell-line DNA residue monitoring.

---

### 7. REFERENCES AND GUIDELINES

1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **USP <729>:** Globule Size Distribution in Lipid Injectable Emulsions.
3.  **USP <788>:** Particulate Matter in Injections.
4.  **FDA Guidance:** *Development and Submission of Near-Infrared Analytical Procedures* (Aug 2021).
5.  **Internal SOP-GHS-4402:** In-Process Testing Requirements for Biologics.

---
**[End of Subsection 3.2.P.2.3.5]**

---

## Scale-Up from Clinical to Commercial

# MODULE 3: QUALITY (3.2.P.2.3) – MANUFACTURING PROCESS DEVELOPMENT
## SUBSECTION: 3.2.P.2.3.4 SCALE-UP FROM CLINICAL TO COMMERCIAL

---

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive technical justification and validation summary for the scale-up of **Glucogen-XR (glucapeptide extended-release)** from Phase III clinical manufacturing scales to the proposed commercial launch scale. Google Health Sciences (GHS) has implemented a Quality by Design (QbD) approach to ensure that the Critical Quality Attributes (CQAs) of the drug product remain consistent across all manufacturing scales.

The scale-up transition involves moving from the **Scale-B (Clinical/Pilot)** process (2,000L upstream / 20,000 unit drug product batch) to the **Scale-C (Commercial)** process (15,000L upstream / 150,000 unit drug product batch), utilizing the proprietary GHS-CHO-001 cell line and the Google Cloud-integrated Bio-Process Twin (BPT) analytics platform.

### 2.0 SCALE-UP STRATEGY AND PHILOSOPHY
The scale-up of Glucogen-XR was governed by ICH Q8(R2), Q9, and Q11 guidelines. The primary objective was to maintain a constant Power per Volume ($P/V$) and Oxygen Mass Transfer Coefficient ($k_La$) in the bioreactor stages, while ensuring shear stress remained below the critical threshold for the GHS-CHO-001 cell line ($<1.5 \times 10^2$ N/m²).

#### 2.1 Dimensional Analysis and Similarity Ratios
The transition from Clinical (Scale-B) to Commercial (Scale-C) followed a linear geometric scaling factor of approximately 7.5x for the final drug product fill-finish operations and 7.5x for the upstream cultivation volume.

**Table 1: Scale-Up Geometric and Operational Ratios**
| Parameter | Clinical Scale (Scale-B) | Commercial Scale (Scale-C) | Scaling Factor |
| :--- | :--- | :--- | :--- |
| **Working Volume (Vw)** | 2,000 L | 15,000 L | 7.5x |
| **Tank Diameter (D)** | 1.25 m | 2.42 m | 1.94x |
| **Impeller Diameter (Di)** | 0.48 m | 0.94 m | 1.96x |
| **H/D Ratio** | 1.6:1 | 1.6:1 | 1.0x |
| **Batch Size (Vials)** | 20,000 | 150,000 | 7.5x |
| **Fill Speed** | 40 vials/min | 200 vials/min | 5.0x |

### 3.0 UPSTREAM PROCESS SCALE-UP (DRUG SUBSTANCE INTERMEDIATE)
The cultivation of the glucapeptide peptide-fusion protein in the CHO-K1 GS knockout derivative line requires precise control over metabolic shifts.

#### 3.1 Bioreactor Parameter Mapping
The $k_La$ was modeled using the Van't Riet correlation:
$$k_La = a \cdot (P_g/V)^b \cdot (v_s)^c$$
Where:
- $P_g/V$ = Gassed power input per volume
- $v_s$ = Superficial gas velocity
- $a, b, c$ = Experimentally derived constants for the GHS-CHO-001 medium.

**Table 2: Comparison of Scale-Up Bioreactor Specifications (Batch GLUC-2025-V01 vs GLUC-2025-C01)**
| Specification | Clinical (GLUC-2025-V01) | Commercial (GLUC-2025-C01) | Deviation/Justification |
| :--- | :--- | :--- | :--- |
| **Agitation Rate** | 85 RPM | 48 RPM | To maintain constant Tip Speed ($3.2$ m/s) |
| **P/V Ratio** | 25 W/m³ | 25 W/m³ | Constant energy dissipation |
| **Air Sparging** | 0.02 vvm | 0.02 vvm | Linear Scale-up |
| **CO2 Sparging** | pH-controlled | pH-controlled | Automated PID via Google Cloud ML |
| **Temperature** | 36.5°C $\rightarrow$ 33.0°C | 36.5°C $\rightarrow$ 33.0°C | Biphasic shift maintained |

### 4.0 DRUG PRODUCT MANUFACTURING SCALE-UP
The Glucogen-XR Drug Product scale-up involves the transition from manual/semi-automated clinical lines to the fully automated High-Throughput Aseptic Filling Line 7 at the South San Francisco facility.

#### 4.1 Compounding and Mixing (Unit Operation 1)
The extended-release properties of Glucogen-XR are dependent on the formation of a stable peptide-polymer complex. Mixing intensity is critical to ensure uniform distribution of the poly(lactic-co-glycolic acid) (PLGA) microspheres within the aqueous vehicle.

**Table 3: Compounding Batch Records for Scale-Up**
| Batch Number | Phase | Batch Size (L) | Mixing Time (min) | Impeller Tip Speed (m/s) | Resulting Homogeneity (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-X01** | Clinical | 40 | 120 | 1.2 | 99.4 |
| **GLUC-2025-X02** | Clinical | 40 | 120 | 1.2 | 99.6 |
| **GLUC-2025-C01** | Commercial | 300 | 185 | 1.2 | 99.5 |
| **GLUC-2025-C02** | Commercial | 300 | 185 | 1.2 | 99.3 |

#### 4.2 Filtration and Sterilization (Unit Operation 2)
Glucogen-XR utilizes a dual 0.22 $\mu$m redundant filtration system. Scale-up required an increase in filter surface area to prevent transmembrane pressure (TMP) spikes due to the high viscosity of the glucapeptide concentration (120 mg/mL).

*Calculation for Filter Area:*
$$A = \frac{V \cdot \mu}{J \cdot t}$$
Where:
- $V = 300$ L
- $\mu = 15$ cP (viscosity)
- $J = 200$ L/m²/hr (flux)
- Required Area (Commercial) = $1.5$ m² (Using 3 x 0.5 m² cartridges in parallel).

### 5.0 PROCESS ANALYTICAL TECHNOLOGY (PAT) AND CLOUD INTEGRATION
A unique feature of the Google Health Sciences scale-up is the utilization of **Vertex AI** for real-time monitoring of the commercial scale-up batches.

1.  **In-line Raman Spectroscopy:** Used to monitor glucose, lactate, and Glucogen-XR concentration.
2.  **Soft Sensors:** Virtual sensors that calculate Oxygen Uptake Rate (OUR) and Carbon Evolution Rate (CER) in real-time, comparing them against the "Golden Batch" profile from the Phase III clinical runs.

### 6.0 COMPARABILITY DATA (CLINICAL VS. COMMERCIAL)
To demonstrate that the scale-up did not alter the product quality, three (3) commercial-scale validation batches (GLUC-2025-C01, C02, C03) were compared against the clinical pivotal batch (GLUC-2025-V09).

**Table 4: Analytical Comparability Results**
| Attribute | Acceptance Criteria | Clinical (V09) | Commercial (C01) | Commercial (C02) |
| :--- | :--- | :--- | :--- | :--- |
| **Purity (SEC-HPLC)** | $\ge$ 98.0% | 99.2% | 99.1% | 99.3% |
| **Potency (Cell-based)** | 80 - 125% | 102% | 104% | 101% |
| **Aggregate Level** | $\le$ 1.5% | 0.4% | 0.5% | 0.4% |
| **Polydispersity Index**| $\le$ 0.2 | 0.12 | 0.13 | 0.11 |
| **Endotoxin** | $\le$ 5.0 EU/mg | < 0.1 | < 0.1 | < 0.1 |

### 7.0 STEP-BY-STEP COMMERCIAL BATCH PROTOCOL (PROTOCOL GHS-SOP-774)
The following protocol was utilized for the 150,000-unit commercial scale-up:

1.  **Preparation:** Sterilization of the 300L compounding vessel via SIP (Steam-in-Place) at 121.1°C for 30 minutes. (F0 $\ge$ 15).
2.  **Excipient Addition:** Aseptic addition of L-histidine, polysorbate 20, and sucrose via the automated GHS-Transfer system.
3.  **Active Ingredient (API) Thawing:** Controlled thawing of 15 x 2L bottles of glucapeptide concentrate from -80°C to 4°C using the Google-designed thermal cycling cabinet.
4.  **Homogenization:** Activation of the magnetic drive stirrer at 150 RPM. Duration: 60 minutes.
5.  **Aseptic Filling:** Implementation of the peristaltic pump system (Watson-Marlow) with 100% in-process weight checks (IPWC).
6.  **Capping and Inspection:** Automated capping with fluoropolymer-coated stoppers and 100% visual inspection using AI-driven computer vision (Google Vision API for Pharma).

### 8.0 DEVIATION AND RISK MANAGEMENT (ICH Q9)
During the scale-up of batch **GLUC-2025-C02**, a minor temperature excursion (0.4°C) was noted during the final mixing phase. 
- **Risk Assessment:** Low. The glucapeptide remains stable up to 25°C for 48 hours. 
- **Mitigation:** The AI-control loop adjusted the jacket cooling flow rate within 45 seconds to return the bulk to the setpoint.
- **Impact:** No impact on CQAs; purity remained at 99.3%.

### 9.0 CONCLUSION
The scale-up of Glucogen-XR from 2,000L to 15,000L (Upstream) and 40L to 300L (Drug Product) has been successfully validated. The integration of Google Cloud-based process monitoring ensures that the commercial product is equivalent to the clinical material used in Phase III trials. All commercial batches meet the pre-defined specifications as outlined in the Quality Target Product Profile (QTPP).

---
**Footnotes & References:**
1. ICH Q8(R2) Pharmaceutical Development, FDA Guidance for Industry.
2. USP <1151> Pharmaceutical Dosage Forms - Extended Release.
3. Google Health Sciences Internal Report: GHS-RPT-2025-004: *Computational Fluid Dynamics (CFD) Modeling of Commercial Bioreactor 07.*
4. *Scale-up and Quality Control of Peptide Therapeutics*, J. Pharm Sci, 2024.

---

# Design Space and Control Strategy

## Critical Process Parameters (CPPs)

# MODULE 3: QUALITY (BIOLOGICS/PEPTIDES)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.3: DESIGN SPACE AND CONTROL STRATEGY
#### DOCUMENT ID: GHS-GLUCXR-DP-M3-P23-001

---

### 3.2.P.2.3.1 Introduction to Critical Process Parameters (CPPs)

In accordance with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q11 Development and Manufacture of Drug Substances**, and **FDA Guidance for Industry: Process Validation: General Principles and Practices (2011)**, Google Health Sciences (GHS) has implemented a Quality by Design (QbD) framework for the production of Glucogen-XR (glucapeptide extended-release). 

The identification of Critical Process Parameters (CPPs) for Glucogen-XR is based on a rigorous assessment of the relationship between process inputs (parameters) and the resulting Critical Quality Attributes (CQAs) of the Drug Product (DP). A process parameter is deemed "Critical" if its variability has a significant impact on a CQA and, therefore, must be monitored or controlled to ensure the process produces the desired quality.

This section details the design space, the risk assessment methodology (Failure Mode and Effects Analysis - FMEA), and the specific CPPs for each unit operation in the DP manufacturing process, from compounding to final primary packaging.

---

### 3.2.P.2.3.2 Risk Assessment Methodology: FMEA

GHS utilized a multi-disciplinary team comprising Process Development (PD), Quality Assurance (QA), Regulatory Affairs (RA), and Manufacturing Science and Technology (MSAT) to conduct a formal risk assessment.

#### 3.2.P.2.3.2.1 Risk Ranking and Filtering
The impact of process parameters on CQAs was evaluated using the following scoring criteria:
*   **Severity (S):** Impact on the patient if the CQA is out of specification.
*   **Occurrence (O):** Probability of the parameter deviating from the set point.
*   **Detectability (D):** Ability of the control system/testing to detect the deviation.

**Risk Priority Number (RPN) Calculation:**
$$RPN = S \times O \times D$$

Parameters with an RPN > 100 or a Severity score of 9-10 were automatically designated as CPPs requiring stringent control within a defined Design Space.

---

### 3.2.P.2.3.3 Unit Operation 1: Thawing and Bulk Solution Preparation

The Glucogen-XR drug substance (DS) is a highly concentrated glucapeptide stored at -80°C. The thawing process is critical to prevent peptide aggregation and denaturation.

#### Table 3.2.P.2.3.3-1: CPPs for Thawing and Compounding (Batch GLUC-2025-001 through GLUC-2025-015)

| Parameter ID | Process Parameter | CQA Impacted | Target Value | Proven Acceptable Range (PAR) | Criticality |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CPP-DP-01 | Thawing Temperature | High Molecular Weight Species (HMWS) | 25°C | 20°C - 30°C | **Critical** |
| CPP-DP-02 | Agitation Speed (Compounding) | Purity / Potency | 150 RPM | 100 - 200 RPM | **Critical** |
| KPP-DP-03 | Mixing Duration | Homogeneity | 45 min | 30 - 90 min | Key |
| CPP-DP-04 | pH Adjustment | Stability / Deamidation | pH 7.4 | pH 7.2 - 7.6 | **Critical** |

#### 3.2.P.2.3.3.2 Technical Justification for Thawing CPPs
The glucapeptide backbone of Glucogen-XR is sensitive to thermal stress. Kinetic studies (Reference GHS-TR-2024-992) demonstrate that temperatures exceeding 32°C for more than 4 hours lead to a 0.5% increase in HMWS. 

**Calculation of Activation Energy ($E_a$) for Aggregation:**
Using the Arrhenius Equation:
$$k = A \exp\left(-\frac{E_a}{RT}\right)$$
Where:
*   $k$ = rate constant for aggregation
*   $R$ = 8.314 J/mol·K
*   $T$ = absolute temperature (K)

Data from Batch GLUC-2025-004 showed that at 35°C, the rate constant $k$ doubled compared to 25°C, necessitating the strict limit of 30°C for the PAR.

---

### 3.2.P.2.3.4 Unit Operation 2: Extended-Release Polymer Conjugation

Glucogen-XR utilizes a proprietary PEG-PLGA microsphere encapsulation technology. The conjugation and encapsulation phase is the most sensitive stage of the DP manufacture.

#### 3.2.P.2.3.4.1 Design Space: Solvent Evaporation Rate
The rate of solvent removal (Dichloromethane) dictates the porosity of the microspheres and, consequently, the "Burst Release" profile.

**Protocol DP-PRO-022: Control of Homogenization Shear Stress**
1.  Initialize High-Shear Mixer (Equipment ID: HSM-4402).
2.  Set rotor speed to 8,500 RPM.
3.  Monitor temperature via integrated PT100 probe (Calibration ID: CAL-99-102).
4.  If temperature exceeds 15°C, the cooling jacket flow rate must increase to 5.0 L/min.

#### Table 3.2.P.2.3.4.2: Multivariate Analysis of Encapsulation CPPs

| Parameter | Impact on CQA: In-Vitro Release (24h) | Impact on CQA: Particle Size (D90) | Sensitivity Coefficient ($\alpha$) |
| :--- | :--- | :--- | :--- |
| Homogenization Speed | High | High | 0.88 |
| Polymer Concentration | Medium | High | 0.65 |
| Phase Ratio (O/W) | High | Medium | 0.72 |

---

### 3.2.P.2.3.5 Unit Operation 3: Sterile Filtration and Aseptic Filling

#### 3.2.P.2.3.5.1 Filtration Pressure and Flux
In accordance with **USP <797>** and **FDA Guidance for Sterile Drug Products Produced by Aseptic Processing**, the filtration process must be validated to ensure sterility without compromising the concentration of the peptide.

**CPP-DP-09: Maximum Transmembrane Pressure (TMP)**
The TMP must not exceed 1.5 bar. Higher pressures have been shown to cause "Protein Squeezing," where the peptide is forced through the 0.22 μm pores in an unfolded state, leading to post-filtration aggregation.

#### Table 3.2.P.2.3.5.2: Filtration Validation Data (Batch Series GLUC-2025-XXX)

| Batch Number | Pre-Filtration Bioburden (CFU/100ml) | Filter Integrity (Bubble Point) | Post-Filtration Purity (%) | Yield (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-007 | 0.2 | Pass (52 psi) | 99.4 | 98.2 |
| GLUC-2025-008 | 0.1 | Pass (53 psi) | 99.5 | 98.5 |
| GLUC-2025-009 | 0.4 | Pass (51 psi) | 99.3 | 97.9 |

---

### 3.2.P.2.3.6 Unit Operation 4: Lyophilization (Cycle GHS-LYO-V4)

Glucogen-XR is provided as a lyophilized powder for reconstitution. The lyophilization cycle is a critical process involving primary and secondary drying phases.

#### 3.2.P.2.3.6.1 Critical Process Parameters for Primary Drying
1.  **Shelf Temperature ($T_s$):** Target -35°C.
2.  **Chamber Pressure ($P_c$):** Target 100 mTorr.
3.  **Product Temperature ($T_p$):** Must remain below the Collapse Temperature ($T_c$) of -28°C.

**Statistical Process Control (SPC) for Moisture Content:**
The target residual moisture is <1.0%. The relationship between Secondary Drying Temperature and residual moisture is modeled as:
$$M_r = \beta_0 + \beta_1(T_{sd}) + \beta_2(t_{sd}) + \epsilon$$
Where:
*   $M_r$ = Residual Moisture
*   $T_{sd}$ = Secondary Drying Temp (30°C)
*   $t_{sd}$ = Time (12 hours)

---

### 3.2.P.2.3.7 Comprehensive Control Strategy Summary

The following table summarizes the global control strategy for all identified CPPs for Glucogen-XR.

#### Table 3.2.P.2.3.7-1: Master Control Strategy Matrix

| Process Step | Parameter | Control Method | Frequency | Action Limit |
| :--- | :--- | :--- | :--- | :--- |
| **Thawing** | Bath Temp | Automated SCADA | Continuous | ± 2°C |
| **Mixing** | Impeller Torque | Torque Transducer | Continuous | 5.0 - 7.5 Nm |
| **Microsphere Formation** | Shear Rate | Laser Diffraction (PAT) | Real-time | D50: 25-35 μm |
| **Filling** | Fill Volume | IPC (In-process check) | Every 15 min | 0.5 mL ± 1% |
| **Lyophilization** | Pirani vs. CMT | Vacuum Gauge Comparison | Continuous | Delta < 20 mTorr |

---

### 3.2.P.2.3.8 References

1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **ICH Q9:** Quality Risk Management.
3.  **ICH Q10:** Pharmaceutical Quality System.
4.  **USP <1222>:** Terminology and Concepts for Manufacturing of Pharmaceutical Articles.
5.  **GHS-TR-2024-001:** *Characterization of Glucapeptide Aggregation Kinetics under Shear Stress.*
6.  **FDA Guidance (2004):** *PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance.*

---
**[END OF SECTION 3.2.P.2.3]**
**Proprietary and Confidential - Google Health Sciences**

---

## Process Analytical Technology (PAT) if Applicable

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2.3: MANUFACTURING PROCESS DEVELOPMENT
### SUBSECTION 3.2.P.2.3.4: PROCESS ANALYTICAL TECHNOLOGY (PAT) AND ADVANCED CONTROL STRATEGY

---

#### 1.0 INTRODUCTION AND SCOPE
Google Health Sciences (GHS) has implemented a comprehensive Process Analytical Technology (PAT) framework for the drug product (DP) manufacturing of Glucogen-XR (glucapeptide extended-release), in accordance with FDA Guidance for Industry: *PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) and ICH Q8(R2), Q9, and Q11.

The Glucogen-XR manufacturing process utilizes an integrated PAT approach to ensure real-time quality assurance (RTQA) and to minimize batch-to-batch variability inherent in complex peptide extended-release formulations. This section details the application of Near-Infrared (NIR) spectroscopy, Raman spectroscopy, and Focused Beam Reflectance Measurement (FBRM) within the Design Space defined for Glucogen-XR.

#### 2.0 REGULATORY FRAMEWORK AND COMPLIANCE
The PAT strategy for Glucogen-XR adheres to the following regulatory standards:
*   **ICH Q8(R2):** Pharmaceutical Development (Quality by Design principles).
*   **ICH Q9:** Quality Risk Management (used to determine Critical Process Parameters [CPPs] requiring PAT).
*   **ICH Q10:** Pharmaceutical Quality System.
*   **USP <1119>:** Near-Infrared Spectroscopy.
*   **USP <1120>:** Raman Spectroscopy.
*   **21 CFR Part 11:** Electronic Records; Electronic Signatures (applied to all spectral data acquisition systems).

#### 3.0 PAT SENSORS AND INSTRUMENTATION TOPOLOGY
The manufacturing suite at 3000 Innovation Drive utilizes a distributed control system (DCS) integrated with a PAT Data Management System (PDMS).

##### Table 3.2.P.2.3.4-1: PAT Instrumentation Suite for Glucogen-XR DP
| Unit Operation | PAT Tool | Critical Quality Attribute (CQA) / CPP | Equipment ID |
| :--- | :--- | :--- | :--- |
| **P1: Peptide Synthesis/Folding** | Raman Spectroscopy | Folding Efficiency; Disulfide Bond Formation | RAMAN-7700-GHS |
| **P2: Polymeric Encapsulation** | FBRM (Mettler Toledo) | Particle Size Distribution (PSD); Chord Length | FBRM-G2-01 |
| **P3: Solvent Removal** | NIR (In-line) | Residual Solvent Content (DCM/Ethanol) | NIR-PH-09 |
| **P4: Lyophilization** | TDLAS / Heat Flux | Primary Drying End-point; Sublimation Rate | TDLAS-LYO-04 |
| **P5: Final Filling** | Check-weigher / X-ray | Fill Volume Uniformity; Container Closure Integrity | XRAY-FILL-22 |

---

#### 4.0 DETAILED APPLICATION: IN-LINE MONITORING OF MICROPARTICLE FORMATION (STEP P2)

##### 4.1 Objective
During the encapsulation of glucapeptide into the PLGA (poly-lactic-co-glycolic acid) matrix, the maintenance of a specific Chord Length Distribution (CLD) is critical to the extended-release profile. FBRM is utilized to monitor the emulsification process in real-time.

##### 4.2 Mathematical Modeling for FBRM
The chord length ($C$) measured by the FBRM probe is a function of the particle diameter ($D$) and the path of the laser beam across the particle. The relationship is governed by the probability density function $P(c, d)$:
$$P(c, d) = \frac{c}{\sqrt{d^2 - c^2}}$$
For Glucogen-XR, the target Mean Square Weight (MSW) chord length is maintained between 45 µm and 65 µm to ensure a T90 release of 28 days.

##### 4.3 Validation Batch Data (Series GLUC-2025-001 through GLUC-2025-010)
The following data represents the correlation between in-line FBRM measurements and off-line Laser Diffraction (Mastersizer 3000) for the pivotal clinical batches.

###### Table 3.2.P.2.3.4-2: Correlation of In-line FBRM vs. Off-line PSD
| Batch Number | FBRM Median Chord (µm) | Off-line D50 (µm) | Span (D90-D10)/D50 | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 52.4 | 54.1 | 1.12 | Pass |
| **GLUC-2025-002** | 51.9 | 53.8 | 1.15 | Pass |
| **GLUC-2025-003** | 53.1 | 55.2 | 1.09 | Pass |
| **GLUC-2025-004** | 55.5 | 58.1 | 1.21 | Pass |
| **GLUC-2025-005** | 50.1 | 51.9 | 1.18 | Pass |

---

#### 5.0 RAMAN SPECTROSCOPY FOR PEPTIDE CONFORMATION MONITORING

##### 5.1 Protocol: Monitoring Disulfide Bond Formation
The glucapeptide sequence contains two critical disulfide bridges (Cys7-Cys23 and Cys12-Cys30). Improper folding leads to loss of GLP-1 receptor affinity.

**Step-by-Step PAT Procedure (Protocol GHS-PAT-009):**
1.  **Probe Insertion:** Insert the Raman immersion probe (785 nm excitation) into the folding reactor (R-102) after the addition of the redox buffer (GSH/GSSG).
2.  **Acquisition Parameters:** Set exposure time to 10 seconds, 5 accumulations.
3.  **Spectral Region:** Focus on the 500–550 cm⁻¹ range (S-S stretching vibrations).
4.  **Data Processing:** Apply Second Derivative (Savitzky-Golay) to resolve the gauche-gauche-gauche (ggg) vs. gauche-gauche-trans (ggt) conformations.
5.  **Endpoint Determination:** The folding process is complete when the ratio of the 510 cm⁻¹ peak to the 525 cm⁻¹ peak reaches a plateau of $1.45 \pm 0.05$ for three consecutive readings.

##### 5.2 Multivariate Analysis (MVA)
A Principal Component Analysis (PCA) model was developed using 25 development batches. The Hotelling’s T² and Squared Prediction Error (SPE/DModX) limits are set at the 95% confidence interval.

*   **PC1 (92% Variance):** Correlates to total peptide concentration.
*   **PC2 (5% Variance):** Correlates to the transition from random coil to alpha-helix.

---

#### 6.0 NEAR-INFRARED (NIR) FOR RESIDUAL SOLVENT CONTROL (STEP P3)

The removal of Dichloromethane (DCM) during the solvent evaporation phase is a CPP. Failure to reduce DCM below 600 ppm (ICH Q3C Limit) results in toxicological risk and altered polymer glass transition temperature (Tg).

##### 6.1 Calibration Model: PLS (Partial Least Squares)
The NIR model (GLUC-NIR-MOD-04) was calibrated against Gas Chromatography (GC) Headspace analysis.

*   **Wavelength Range:** 1600 nm – 1850 nm (First overtone of C-H stretching).
*   **Preprocessing:** Standard Normal Variate (SNV) and 1st Derivative.
*   **RMSEC (Root Mean Square Error of Calibration):** 12.5 ppm.
*   **RMSEP (Root Mean Square Error of Prediction):** 18.2 ppm.

###### Table 3.2.P.2.3.4-3: NIR vs. GC Comparison for Batch Release (GLUC-2025-015)
| Time Point (Hours) | In-line NIR DCM (ppm) | Off-line GC DCM (ppm) | Deviation (%) |
| :--- | :--- | :--- | :--- |
| 1.0 | 4500 | 4620 | -2.6% |
| 2.0 | 2100 | 2050 | +2.4% |
| 3.0 | 850 | 880 | -3.4% |
| **4.0 (End)** | **340** | **355** | **-4.2%** |

---

#### 7.0 FEED-FORWARD AND FEEDBACK CONTROL LOOPS

Glucogen-XR manufacturing utilizes an Automated Process Control (APC) strategy where PAT data triggers physical adjustments to the process.

##### 7.1 Feedback Loop: Emulsification Shear Rate
If FBRM detects a shift in MSW chord length >5% from the target trajectory, the DCS automatically adjusts the homogenizer speed (RPM).
*   **Algorithm:** PID Control.
*   **Variable:** Homogenizer Speed (Range: 3000 – 7500 RPM).
*   **Response Time:** <15 seconds.

##### 7.2 Feed-forward Loop: Lyophilization
The concentration of Glucapeptide measured by Raman in the bulk solution (Step P5) is fed forward to the filling line. The fill volume is adjusted by ±0.2% to ensure exactly 5.0 mg of active peptide per vial, regardless of minor concentration fluctuations.

---

#### 8.0 CONTINUED PROCESS VERIFICATION (CPV) AND PAT MAINTENANCE

Google Health Sciences maintains a Lifecycle Management plan for all PAT models.

1.  **Model Validation:** Models are re-validated every 12 months or after any significant raw material change (e.g., new PLGA polymer lot).
2.  **Instrument Drift Monitoring:** Daily wavelength accuracy checks using Polystyrene (NIR) and Silicon (Raman) standards.
3.  **Data Integrity:** All PAT systems are integrated with the Google Cloud Life Sciences "BigQuery" environment, providing an immutable audit trail of every spectral acquisition.

#### 9.0 CONCLUSION
The integrated PAT strategy for Glucogen-XR represents a "Level 3: Robust Control Strategy" as defined by the FDA. By shifting from end-product testing to real-time monitoring and control, Google Health Sciences ensures that every vial of Glucogen-XR (from batch GLUC-2025-001 onwards) meets the stringent quality requirements for long-term glycemic control in Type 2 Diabetes patients.

---
**Footnotes:**
1. GHS Internal Report RPT-GLUC-2024-45: *Development of NIR Methods for Residual Solvents*.
2. Smith, J. et al. (2023). "Advanced Raman Applications in Peptide Folding." *Journal of Pharmaceutical Sciences*, 112(4), 890-905.
3. ICH Q8(R2) Section 2.5: *Process Analytical Technology*.

---

## Multivariate Analysis

### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.3.4 Design Space and Control Strategy
##### 3.2.P.2.3.4.10 Multivariate Analysis (MVA) for Glucogen-XR (glucapeptide extended-release)

---

### 1. Executive Overview of Multivariate Strategy
In accordance with **ICH Q8(R2)**, **ICH Q9**, and **ICH Q11**, Google Health Sciences has implemented a comprehensive Multivariate Analysis (MVA) framework to define the Design Space for Glucogen-XR. Unlike univariate analysis (OFAT - One Factor At a Time), MVA accounts for the synergistic and antagonistic interactions between Critical Process Parameters (CPPs) and their collective impact on Critical Quality Attributes (CQAs), specifically focusing on the extended-release kinetic profile and peptide stability.

The MVA for Glucogen-XR utilizes Principal Component Analysis (PCA) for raw material characterization and Partial Least Squares (PLS) regression for process monitoring and predictive modeling of the polymer-encapsulation stage.

---

### 2. Statistical Software and Computational Infrastructure
All MVA calculations were performed using the following validated systems:
*   **Software:** SIMCA® 17.0 (Sartorius Stedim Data Analytics AB) and SAS® Viya® on Google Cloud Vertex AI.
*   **Validation:** IQ/OQ/PQ performed under Protocol **VAL-GHS-STAT-2024-001**.
*   **Algorithms:** NIPALS (Non-linear Iterative Partial Least Squares) for PCA/PLS; Monte Carlo simulations for Design Space reliability.

---

### 3. Multivariate Characterization of Critical Material Attributes (CMAs)
The extended-release performance of Glucogen-XR is highly dependent on the Poly(lactic-co-glycolic acid) (PLGA) copolymer. We performed PCA on 25 batches of PLGA (Supplier Lot Series GLUC-2025-RAW-PLGA-01 through 25) to identify latent variables affecting drug release.

#### Table 3.2.P.2.3.4.10-1: PLGA Raw Material PCA Input Variables
| Variable ID | Description | Unit | Analytical Method |
| :--- | :--- | :--- | :--- |
| $X_1$ | Inherent Viscosity (IV) | dL/g | USP <911> |
| $X_2$ | Lactic:Glycolic Ratio | Mole % | 1H-NMR |
| $X_3$ | Residual Monomer (Lactide) | % w/w | GC-FID |
| $X_4$ | Glass Transition Temp ($T_g$) | °C | DSC (USP <891>) |
| $X_5$ | Polydispersity Index (PDI) | Mw/Mn | GPC-SEC |
| $X_6$ | Residual Tin Content | ppm | ICP-MS |

#### 3.3.1 Principal Component Analysis (PCA) Results
The PCA model resulted in two significant Principal Components (PCs) explaining 88.4% of the variance ($R^2X = 0.884, Q^2 = 0.792$).
*   **PC1 (56% variance):** Strongly correlated with IV and Molecular Weight ($M_w$).
*   **PC2 (32.4% variance):** Strongly correlated with the L:G ratio and $T_g$.

**Observation:** Batch **GLUC-2025-RAW-PLGA-14** was identified as a multivariate outlier (Hotelling’s T2 > 95% limit) due to an anomalous PDI of 2.4, resulting in its exclusion from the primary Design Space manufacturing runs.

---

### 4. Multivariate Process Modeling (PLS) for Microencapsulation
The Microencapsulation stage (Unit Operation 04) is the most critical step in determining the Glucogen-XR release profile. A Partial Least Squares (PLS) model was developed to correlate Process Parameters ($X$) with Quality Attributes ($Y$).

#### 4.1 Input Parameters (X-Block) and Response Variables (Y-Block)
The following variables were analyzed across 15 DOE batches (Batch IDs: **GLUC-2025-DOE-101** to **GLUC-2025-DOE-115**).

| Category | Parameter Code | Parameter Name | Range Tested |
| :--- | :--- | :--- | :--- |
| **X (CPP)** | $CPP_1$ | Primary Emulsification Speed | 4,000 – 12,000 RPM |
| **X (CPP)** | $CPP_2$ | Solvent Evaporation Temp | 25 – 45 °C |
| **X (CPP)** | $CPP_3$ | Hardening Time | 2 – 6 Hours |
| **X (CPP)** | $CPP_4$ | Phase Volume Ratio (O/W) | 1:10 – 1:30 |
| **Y (CQA)** | $CQA_1$ | Drug Loading Efficiency | 85 – 98% |
| **Y (CQA)** | $CQA_2$ | Burst Release (24h) | < 10% |
| **Y (CQA)** | $CQA_3$ | Residual Dichloromethane | < 600 ppm |

#### 4.2 PLS Model Coefficients and Interaction Effects
The relationship is defined by the following multivariate linear equation (standardized coefficients):
$$Y_{Burst} = \beta_0 + \beta_1(CPP_1) + \beta_2(CPP_2) + \beta_{12}(CPP_1 \cdot CPP_2) + \epsilon$$

Where:
*   $\beta_1$ (Speed) = -0.45 (High speed reduces particle size, increasing surface area but potentially increasing burst).
*   $\beta_2$ (Temp) = +0.62 (Higher temp leads to faster polymer skin formation).
*   $\beta_{12}$ (Interaction) = -0.28 (Significant interaction found between cooling rate and shear speed).

---

### 5. Design Space Derivation via Monte Carlo Simulation
To ensure a 99.9% probability of meeting CQA specifications, Google Health Sciences performed 10,000 Monte Carlo iterations using the PLS model error residuals.

#### Table 3.2.P.2.3.4.10-2: Multivariate Design Space Limits
| Parameter | Proven Acceptable Range (PAR) | Multivariate Operating Range (MOR) |
| :--- | :--- | :--- |
| Emulsification Speed | 6,000 - 10,000 RPM | 7,500 - 8,500 RPM |
| Evaporation Temp | 30 - 40 °C | 33 - 37 °C |
| Hardening Time | 3 - 5 Hours | 3.5 - 4.5 Hours |

---

### 6. Multivariate Statistical Process Control (MSPC) Protocol
For commercial manufacturing (Batch series **GLUC-2025-COM-XXX**), MSPC will be utilized to monitor the process in real-time.

#### 6.1 Step-by-Step Procedure for Batch Release via MVA
1.  **Data Alignment:** Align time-series data from the bioreactor and encapsulation unit (Data collected via Google Cloud IoT Core).
2.  **Unfolding:** Perform batch-wise unfolding of the three-way data matrix ($Batch \times Variable \times Time$).
3.  **Projection:** Project new batch data onto the established PCA/PLS model space.
4.  **Metric Calculation:**
    *   **D-Crit (Hotelling’s T2):** Measure of distance from the model center.
    *   **Q-Residual (DModX):** Measure of how well the new batch fits the model's correlation structure.
5.  **Acceptance Criteria:**
    *   $T^2 < T^2_{95\% \text{ limit}}$
    *   $DModX < 1.5 \times \text{pooled standard deviation of clinical batches}$.

#### 6.2 Example Deviations and Contribution Plots
In the event of a multivariate excursion (e.g., in hypothetical Batch **GLUC-2025-ERR-01**), a **Contribution Plot** must be generated. This plot identifies which specific variable contributed to the $T^2$ or $DModX$ breach, allowing for rapid root cause analysis (RCA).

---

### 7. References
1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **ICH Q11:** Development and Manufacture of Drug Substances.
3.  **USP <1039>:** Chemometrics.
4.  Eriksson, L., et al. (2013). *Multi- and Megavariate Data Analysis*.
5.  FDA Guidance for Industry: *PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance*.

---

### 8. Appendix: Detailed Batch Data Table (MVA Training Set)
| Batch Number | PLGA IV (dL/g) | Emulsification RPM | Burst Release % | Result |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 0.42 | 8,000 | 4.2 | Pass |
| GLUC-2025-002 | 0.41 | 8,200 | 4.5 | Pass |
| GLUC-2025-003 | 0.38 | 9,500 | 7.8 | Pass |
| GLUC-2025-004 | 0.45 | 7,000 | 3.1 | Pass |
| GLUC-2025-005 | 0.35 | 11,000 | 12.4 | **Fail (OOS)** |

*Footnote: Batch GLUC-2025-005 failed due to the synergistic effect of low polymer viscosity and high shear stress, a relationship only identifiable through the multivariate interaction terms.*

---

# Risk Assessment and FMEA

## Failure Modes and Effects Analysis

# MODULE 3: QUALITY (3.2.P DRUG PRODUCT)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.3 FAILURE MODES AND EFFECTS ANALYSIS (FMEA)

---

#### 3.2.P.2.3.1 Executive Summary of Risk Management Strategy
In alignment with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, and **ICH Q10 Pharmaceutical Quality System**, Google Health Sciences (GHS) has implemented a robust, science-based Quality Risk Management (QRM) framework for **Glucogen-XR (glucapeptide extended-release)**. 

The primary objective of this Failure Modes and Effects Analysis (FMEA) is to systematically identify potential failure modes within the drug product manufacturing process, assess their impact on Critical Quality Attributes (CQAs), and define mitigation strategies to reduce risks to an acceptable level. This document serves as a cornerstone of the Quality by Design (QbD) approach for the GLUC-2025-XXX series of clinical and commercial batches.

---

#### 3.2.P.2.3.2 Risk Assessment Methodology and Scoring Criteria
The FMEA utilized a multidisciplinary team of experts in peptide synthesis, formulation science, sterile manufacturing, and regulatory affairs at the South San Francisco facility (3000 Innovation Drive).

##### 3.2.P.2.3.2.1 Risk Priority Number (RPN) Calculation
The RPN is calculated as the product of three distinct variables:
$$RPN = S \times O \times D$$
Where:
*   **S (Severity):** Impact of the failure mode on the patient or product quality.
*   **O (Occurrence):** Probability of the failure mode occurring.
*   **D (Detection):** Probability of detecting the failure before the product reaches the patient.

##### 3.2.P.2.3.2.2 Scoring Scales
The following 1-10 scales were utilized, consistent with **USP <1117>** and **PDA Technical Report No. 44**.

**Table 1: Severity (S) Ranking Criteria**
| Score | Severity Level | Impact Description |
| :--- | :--- | :--- |
| 10 | Hazardous | Potential life-threatening effect; total loss of sterile assurance or potency. |
| 8 | Major | Significant impact on efficacy; non-compliance with USP monographs; significant delay in release. |
| 5 | Moderate | Noticeable degradation in quality; out-of-trend results; requires investigation. |
| 2 | Minor | Slight deviation with no impact on patient safety or product efficacy. |
| 1 | Insignificant | No impact on process or product quality. |

**Table 2: Occurrence (O) Ranking Criteria**
| Score | Probability | Failure Rate Benchmark |
| :--- | :--- | :--- |
| 10 | Very High | Failure is almost inevitable (e.g., > 1 in 10 batches). |
| 7 | High | Repeated failures observed in developmental lots (GLUC-2025-DEV). |
| 5 | Moderate | Occasional failures (e.g., 1 in 100 batches). |
| 2 | Low | Rare failures; process is historically stable. |
| 1 | Remote | Failure is unlikely to ever occur. |

**Table 3: Detection (D) Ranking Criteria**
| Score | Detection | Description |
| :--- | :--- | :--- |
| 10 | Absolute Uncertainty | No mechanism to detect the failure mode. |
| 7 | Low | Manual inspection only; statistically weak sampling. |
| 5 | Moderate | Automated detection (IPC) with periodic verification. |
| 2 | High | 100% automated inspection or validated real-time monitoring. |
| 1 | Almost Certain | Fail-safe design; process cannot proceed if failure occurs. |

---

#### 3.2.P.2.3.3 Comprehensive FMEA Table for Glucogen-XR Manufacturing
The following analysis covers the end-to-end manufacturing process of Glucogen-XR, from API thawing to final secondary packaging.

**Table 4: FMEA Matrix for Glucogen-XR (Glucapeptide Extended-Release)**
*Referenced Batches: GLUC-2025-001 through GLUC-2025-045*

| Process Step | Potential Failure Mode | Potential Effect (CQA Impact) | S | O | D | RPN | Mitigation / Control Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. API Thawing & Preparation** | Temperature excursion during thaw | Deamidation/aggregation of peptide (Potency) | 8 | 3 | 2 | **48** | Use of validated Thermo-Fisher Cryo-Staging Unit (ID: GHS-EQU-442). Real-time LogTag monitoring. |
| **2. Buffer Preparation** | pH deviation (>±0.05 units) | Altered peptide solubility & stability | 5 | 4 | 2 | **40** | High-precision calibrated pH meters (Mettler Toledo); double-verified buffer weights. |
| **3. Formulation/Blending** | Shear-induced degradation | Formation of high-molecular-weight species (HMWS) | 9 | 5 | 3 | **135** | Low-shear peristaltic pumping only; validated mixing speeds (max 150 RPM). |
| **4. Sterile Filtration** | Filter membrane rupture | Loss of sterility (Sterility/Endotoxin) | 10 | 2 | 5 | **100** | Redundant 0.22μm PES filters. Pre- and post-use Bubble Point testing (USP <797>). |
| **5. Filling Operation** | Fill volume inaccuracy | Under/Over-dosing (Uniformity of Dosage Units) | 8 | 4 | 2 | **64** | 100% In-process check (IPC) weigh scales on filling line GHS-LINE-01. |
| **6. Lyophilization** | Primary drying collapse | Reconstitution issues; loss of shelf life | 7 | 4 | 3 | **84** | PAT-monitored cycle (Pirani gauges vs. Capacitance Manometer); shelf temp mapping. |
| **7. Nitrogen Blanketing** | Oxygen levels > 1% in headspace | Oxidation of Methionine residues | 6 | 3 | 4 | **72** | Frequency-Modulated Spectroscopy (FMS) for 100% headspace oxygen inspection. |
| **8. Capping/Crimping** | Inadequate seal integrity | Loss of sterility over time | 10 | 2 | 4 | **80** | CCIT (Container Closure Integrity Testing) via high-voltage leak detection. |

---

#### 3.2.P.2.3.4 Detailed Analysis of High-Risk Failure Modes

##### 3.2.P.2.3.4.1 Formulation: Shear-Induced Aggregation (RPN 135)
During the compounding of Glucogen-XR, the glucapeptide is highly sensitive to interfacial tension and mechanical shear. Data from batch **GLUC-2025-012** indicated a 2.4% increase in HMWS when using a standard impeller at 300 RPM.

*   **Failure Analysis:** High-velocity gradients at the impeller tip cause unfolding of the peptide alpha-helix, exposing hydrophobic residues and leading to irreversible β-sheet aggregation.
*   **Corrective Action (CAPA-2025-09):** Transitioned to a customized low-shear bottom-mounted magnetic mixer (Model GHS-MIX-A1).
*   **Statistical Control:** Monitoring via Size Exclusion HPLC (SE-HPLC). Acceptance limit set at < 0.5% HMWS.

##### 3.2.P.2.3.4.2 Lyophilization: Collapse during Primary Drying (RPN 84)
The Glucogen-XR formulation contains a complex matrix of Trehalose and Polysorbate 80. The critical collapse temperature ($T_c$) was determined by Freeze-Drying Microscopy (FDM) to be -28.5°C.

*   **Risk:** If the product temperature ($T_p$) exceeds $T_c$ during the primary drying phase (specifically between hours 12 and 36 of the cycle), the cake structure fails.
*   **Protocol for Mitigation (GHS-PRO-LYO-04):**
    1.  Pre-freeze to -45°C for 4 hours.
    2.  Evacuate chamber to 100 mTorr.
    3.  Ramp shelf temperature to -20°C at 0.5°C/min.
    4.  Utilize Manometric Temperature Measurement (MTM) to calculate $T_p$ in real-time.

---

#### 3.2.P.2.3.5 Step-by-Step Protocol for Quarterly Risk Re-Evaluation (GHS-SOP-5502)
To ensure the FMEA remains a "living document," Google Health Sciences performs a quarterly review.

1.  **Data Collection:** Aggregate all Deviations (OOS/OOT), CAPAs, and Change Controls from the previous 90 days involving the GLUC-2025-XXX series.
2.  **Severity Verification:** Evaluate if any new clinical data changes the Severity (S) score. For example, if a new degradation product is identified, the severity of "Oxidation" may increase.
3.  **Occurrence Recalculation:** Use the formula:
    $$O = \frac{\text{Number of Observed Failures}}{\text{Total Batches Produced}} \times 10$$
4.  **Detection Assessment:** Audit the sensitivity of current analytical methods (e.g., LC-MS/MS sensitivity for host cell proteins).
5.  **Documentation:** Update the Master Risk Registry (MRR-GLUC-01) and obtain Quality Assurance (QA) sign-off.

---

#### 3.2.P.2.3.6 Analytical Control Limits and Statistical Process Control (SPC)
To support the "Detection" (D) scores in the FMEA, the following SPC parameters have been established for the Google Cloud Life Sciences manufacturing suite.

**Table 5: Control Limits for Critical Process Parameters (CPPs)**
| Parameter | Method | Target | Lower Action Limit (LAL) | Upper Action Limit (UAL) |
| :--- | :--- | :--- | :--- | :--- |
| API Bioburden | USP <61> | 0 CFU/10mL | N/A | < 10 CFU/10mL |
| Fill Weight | Gravimetric | 1.05g | 1.02g | 1.08g |
| Vacuum Level | Pirani Gauge | 80 mTorr | 50 mTorr | 110 mTorr |
| Residual Moisture | Karl Fischer | 1.5% | 0.5% | 3.0% |

---

#### 3.2.P.2.3.7 Conclusion of FMEA
The FMEA for Glucogen-XR demonstrates that all identified risks with an initial RPN > 100 have been successfully mitigated through engineering controls, process optimization, and stringent IPCs. The residual risk profile is deemed acceptable for the proposed Type 2 Diabetes Mellitus indication, supporting the safety and efficacy of the GLUC-2025-XXX batch series produced at Google Health Sciences.

---
**References:**
1.  FDA Guidance for Industry: Q9 Quality Risk Management (2006).
2.  ICH Q8(R2): Pharmaceutical Development (2009).
3.  Google Health Sciences Internal Report: GHS-2025-TECH-044 "Peptide Stability and Shear Analysis."
4.  USP <1117> Microbiological Best Laboratory Practices.

---

## Risk Mitigation Strategies

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.3: RISK ASSESSMENT AND FAILURE MODE AND EFFECTS ANALYSIS (FMEA)
#### DOCUMENT ID: GHS-GLUC-XR-M3-DP-PD-008
#### PART: RISK MITIGATION STRATEGIES (RMS)

---

### 1.0 INTRODUCTION AND SCOPE

This document provides the exhaustive Risk Mitigation Strategies (RMS) for Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist developed by Google Health Sciences. In accordance with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, and **ICH Q10 Pharmaceutical Quality System**, this section details the transition from the initial Risk Assessment (RA) to the implementation of the Control Strategy.

Glucogen-XR is a complex biologic delivered via a proprietary sustained-release PLGA-PEG microsphere matrix. Given the narrow therapeutic window of GLP-1 analogues regarding gastrointestinal tolerability and the critical nature of the release profile, these mitigation strategies are designed to ensure a Failure Mode and Effects Analysis (FMEA) Risk Priority Number (RPN) reduction to acceptable levels (RPN < 40).

---

### 2.0 REGULATORY FRAMEWORK AND GUIDANCE COMPLIANCE

The mitigation strategies outlined herein adhere to the following regulatory standards:
*   **FDA Guidance for Industry:** *Q8, Q9, & Q10 Questions and Answers - Appendix: QRM Annex II* (2011).
*   **USP <1041>:** *Biologics-Based Pharmaceuticals*.
*   **USP <790>:** *Visible Particulates in Injections*.
*   **ICH Q11:** *Development and Manufacture of Drug Substances*.
*   **21 CFR Part 211:** *Current Good Manufacturing Practice for Finished Pharmaceuticals*.

---

### 3.0 COMPREHENSIVE RISK MITIGATION MATRIX (FMEA DERIVED)

The following table (Table 3.1) delineates the high-risk failure modes identified during the initial FMEA (Pre-Mitigation RPN > 100) and the specific technical strategies deployed to mitigate these risks.

#### Table 3.1: Glucogen-XR Drug Product Risk Mitigation Matrix

| Failure Mode ID | Process Step | Potential Impact on CQA | Pre-Mitigation RPN (S x O x D) | Mitigation Strategy Description | Post-Mitigation RPN (S x O x D) | Verification Document / Batch ID |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **FM-DP-001** | Primary Emulsification (W1/O) | Particle Size Distribution (PSD) / Initial Burst | 9 x 4 x 5 = **180** | High-shear homogenization with real-time droplet size monitoring (PAT) via Focused Beam Reflectance Measurement (FBRM). | 9 x 2 x 2 = **36** | GLUC-2025-001 through 005 |
| **FM-DP-002** | Solvent Removal (Evaporation) | Residual Dichloromethane (DCM) | 8 x 5 x 6 = **240** | Implementation of a secondary vacuum stripping phase (40°C, 250 mbar) for 12 hours. | 8 x 2 x 2 = **32** | GLUC-2025-012 |
| **FM-DP-003** | Sterile Filtration | Protein Aggregation / Loss of Potency | 10 x 3 x 7 = **210** | Use of low-protein binding Polyethersulfone (PES) filters with 0.22 μm redundant setup; pre-conditioning with 5% Polysorbate 80. | 10 x 1 x 2 = **20** | GLUC-2025-008 |
| **FM-DP-004** | Lyophilization Cycle | Cake Collapse / Reconstitution Time | 7 x 6 x 4 = **168** | Optimization of Primary Drying (T_shelf = -15°C) and implementation of Tunable Diode Laser Absorption Spectroscopy (TDLAS). | 7 x 2 x 2 = **28** | GLUC-2025-015 |
| **FM-DP-005** | Filling Accuracy | Dose Uniformity | 10 x 4 x 3 = **120** | 100% In-process Weight Control (IPC) with feedback loop to peristaltic pump speed. | 10 x 1 x 2 = **20** | GLUC-2025-020 |

---

### 4.0 TECHNICAL DEEP-DIVE: MITIGATION OF PROTEIN AGGREGATION (FM-DP-003)

#### 4.1 Mechanism of Risk
Glucogen-XR (glucapeptide) is susceptible to shear-induced denaturation at the oil-water interface during the W1/O emulsification process. Denaturation leads to the formation of high molecular weight species (HMWS), which are immunogenic.

#### 4.2 Mitigation Strategy: The "Cryo-Shield" Protocol
To mitigate aggregation, Google Health Sciences developed the **Cryo-Shield Protocol (GHS-PROT-442)**. This involves:
1.  **Buffer Optimization:** Utilization of 20mM Histidine-HCl at pH 5.5 to maximize peptide stability.
2.  **Surfactant Protection:** Addition of 0.05% w/v Poloxamer 188 to the aqueous phase to competitively occupy the interface.
3.  **Temperature Control:** Maintaining the primary emulsion at 4°C ± 1°C using a jacketed Silverson High-Shear Mixer (Model L5M-A).

#### 4.3 Statistical Verification (DOE Analysis)
A Design of Experiments (DoE) was conducted using a 2^3 full factorial design to evaluate the efficacy of the mitigation.

*   **Variable A:** Poloxamer Concentration (0.01% - 0.1%)
*   **Variable B:** Homogenization Speed (3000 - 8000 RPM)
*   **Variable C:** Temperature (4°C - 25°C)

**Equation 1: Predicted %HMWS Formulation**
$$HMWS (\%) = 1.45 + 0.32(B) + 0.88(C) - 0.54(A) - 0.21(AC)$$

**Results:** The mitigation strategy successfully maintained HMWS below 0.5% (Target < 1.0%) across all pivotal clinical batches (GLUC-2025-001 through GLUC-2025-010).

---

### 5.0 MITIGATION OF RESIDUAL SOLVENT (FM-DP-002)

#### 5.1 Protocol for Solvent Extraction (GHS-SOP-778)
Residual Dichloromethane (DCM) is a Class 2 solvent (ICH Q3C). Standard evaporation often leaves entrapment within the PLGA matrix.

**Step-by-Step Mitigation Procedure:**
1.  **Initial Hardening:** Stir the microsphere suspension in 0.1% PVA for 4 hours at 500 RPM.
2.  **Thermal Ramp:** Gradually increase temperature from 20°C to 38°C at a rate of 0.5°C/min.
3.  **Nitrogen Sparging:** Introduce ultra-high purity N2 at 2 L/min through a porous sparger to strip vapor from the headspace.
4.  **Vacuum Post-Treatment:** Transfer to a Nutsche Filter-Dryer; apply 200 mbar vacuum for 8 hours at 35°C.

#### 5.2 Analytical Data (GC-Headspace)
The following table shows the reduction in DCM levels post-mitigation.

| Batch Number | Pre-Mitigation DCM (ppm) | Post-Mitigation DCM (ppm) | Regulatory Limit (ICH Q3C) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 4,500 | 120 | 600 |
| GLUC-2025-002 | 4,890 | 145 | 600 |
| GLUC-2025-003 | 5,100 | 98 | 600 |

---

### 6.0 EXTENDED RELEASE KINETICS AND BURST RELEASE MITIGATION

#### 6.1 The "Core-Shell" Encapsulation Strategy
A common failure mode in GLP-1 microspheres is "initial burst," where >20% of the drug is released within 4 hours, leading to nausea.

**Mitigation Step:** Google Health Sciences utilizes a "Double-Wall" microsphere approach.
*   **Step 1:** Primary encapsulation of Glucogen-XR in low-MW PLGA (50:50).
*   **Step 2:** Secondary coating with high-MW PLLA using a co-axial nozzle electrospray system (Equipment ID: GHS-ELECT-09).

#### 6.2 Dissolution Profile Comparison (USP <711>)
The impact of the mitigation is demonstrated in the comparative dissolution table below.

| Time Point (Days) | Unmitigated Release (%) | Mitigated Release (Core-Shell) (%) | Specification (%) |
| :--- | :--- | :--- | :--- |
| 0.25 (6h) | 28.5 | 4.2 | ≤ 10% |
| 1 | 35.2 | 8.5 | Report |
| 7 | 55.4 | 22.1 | 15% - 30% |
| 14 | 88.0 | 45.9 | 40% - 60% |
| 28 | 99.2 | 92.4 | ≥ 85% |

---

### 7.0 SCALE-UP RISK MITIGATION (TECH TRANSFER)

As manufacturing moves from the South San Francisco pilot plant to the Google Cloud Life Sciences commercial facility, the following scale-up mitigations are implemented:

#### 7.1 Computational Fluid Dynamics (CFD) Modeling
To mitigate the risk of non-uniform mixing in 500L reactors (Batch Size: GLUC-2025-COMM-01), CFD simulations (using Google Cloud HPC) were performed to map shear stress distribution.

**Key Parameter Mitigation:**
*   **Impeller Type:** Switched from Rushton Turbine to a Marine Blade to reduce local shear by 40%.
*   **Baffle Geometry:** Adjusted to 1/12th vessel diameter to prevent dead zones.

#### 7.2 Equipment Equivalency Table

| Process Step | Pilot Scale (5L) | Commercial Scale (500L) | Mitigation for Scale-up |
| :--- | :--- | :--- | :--- |
| Homogenization | Silverson L5M-A | Silverson 450LS | Tip speed maintained at 25 m/s |
| Drying | Labconco 70040 | Edwards Lyofast 40 | Heat transfer coefficient (Kv) matching |
| Filtration | Millipore 47mm | Millipore Pellicon 2 | Constant Flux (LMH) scaling |

---

### 8.0 CONTINUED PROCESS VERIFICATION (CPV)

Post-approval, the mitigation strategies will be monitored via a CPV program (Stage 3 Process Validation).

1.  **Statistical Process Control (SPC):** Control charts (Shewhart charts) will be generated for every batch (GLUC-2025-XXX) for the CQA of "Burst Release."
2.  **Alert/Action Limits:**
    *   **Alert:** ± 2 Sigma from the mean.
    *   **Action:** ± 3 Sigma from the mean (Requires immediate Deviation Investigation).

---

### 9.0 CONCLUSION

The risk mitigation strategies for Glucogen-XR represent a robust, data-driven approach to biologic manufacturing. By integrating advanced PAT, computational modeling, and rigorous chemical engineering protocols, Google Health Sciences ensures that the high-risk failure modes identified in the FMEA are effectively controlled. These strategies ensure that Glucogen-XR consistently meets its Quality Target Product Profile (QTPP), providing Type 2 Diabetes patients with a safe and effective long-acting therapeutic option.

---
**END OF SECTION**
**Approved by:**
*Dr. Aris V. C., Head of Regulatory Affairs, Google Health Sciences*
*Date: 24-Oct-2024*
*Ref: ICH-Q9-GHS-V4*

---

## Continuous Improvement

### **3.2.P.2.3.4 Continuous Improvement (CI) Framework and Lifecycle Management Strategy**

#### **1. Scope and Objectives**
The Continuous Improvement (CI) program for Glucogen-XR (glucapeptide extended-release) is designed to operate within the ICH Q10 Pharmaceutical Quality System (PQS) framework, specifically aligned with the "Continual Improvement of Process Performance and Product Quality" element. Google Health Sciences (GHS) utilizes an integrated Cloud-AI-driven approach (Google Cloud Life Sciences - Manufacturing Intelligence Platform) to monitor, analyze, and optimize the drug product manufacturing process throughout its commercial lifecycle.

The primary objective of this CI subsection is to detail the mechanisms by which GHS transitions from initial Failure Mode and Effects Analysis (FMEA) to a dynamic, data-driven risk management system. This ensures that the Control Strategy (as defined in 3.2.P.2.3) remains robust and that "Residual Risks" are systematically reduced as manufacturing experience matures.

#### **2. Regulatory Alignment and Compliance Matrix**
The Glucogen-XR CI program adheres to the following regulatory benchmarks:

*   **ICH Q8(R2):** Pharmaceutical Development (Quality by Design approach).
*   **ICH Q9(Q1):** Quality Risk Management (Iterative FMEA updates).
*   **ICH Q10:** Pharmaceutical Quality System (Lifecycle management).
*   **ICH Q12:** Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management (Post-approval changes).
*   **FDA Guidance:** *Process Validation: General Principles and Practices (2011)* – emphasizing Stage 3 Continued Process Verification (CPV).
*   **USP <1220>:** Analytical Procedure Lifecycle Management.

---

#### **3. The Glucogen-XR Dynamic Risk Assessment Lifecycle**

##### **3.1 Iterative FMEA Update Protocol (Protocol No: GHS-QA-SOP-00982)**
The baseline FMEA established in Section 3.2.P.2.3.3 is not static. GHS mandates a formal review of the FMEA following the completion of every 10 commercial batches (or annually, whichever comes first).

**Table 1: Trigger Criteria for FMEA Revision and Risk Re-scoring**

| Trigger Event Code | Event Description | Required Action | Responsibility |
| :--- | :--- | :--- | :--- |
| **TE-CI-001** | Out of Specification (OOS) Result | Immediate update of Severity (S) or Occurrence (O) | Quality Assurance (QA) |
| **TE-CI-002** | Out of Trend (OOT) Result | Trending analysis; update Occurrence (O) | Statistical Science |
| **TE-CI-003** | Adverse Event (Pharmacovigilance) | Re-evaluate Severity (S) related to safety | Medical Affairs |
| **TE-CI-004** | Process Deviation (Major/Critical) | Update Detection (D) if existing monitors failed | Manufacturing Science & Tech (MSAT) |
| **TE-CI-005** | New Analytical Technology | Potential improvement in Detection (D) score | Analytical R&D |
| **TE-CI-006** | Raw Material Change (New Vendor) | Full re-assessment of Input Material Risks | Procurement/MSAT |

---

#### **4. Data-Driven Process Optimization: The GHS-AI Manufacturing Engine**

GHS utilizes a proprietary GHS-CHO-001 specific modeling engine to predict glucapeptide degradation rates and microencapsulation efficiency.

##### **4.1 Statistical Process Control (SPC) Limits and Calculations**
The CI program utilizes Shewhart Control Charts (X-bar and R) to monitor Critical Quality Attributes (CQAs).

**Formula 1: Calculation of Process Capability Index (Cpk)**
$$Cpk = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$
*Where:*
*   $USL$ = Upper Specification Limit
*   $LSL$ = Lower Specification Limit
*   $\mu$ = Process Mean
*   $\sigma$ = Standard Deviation (calculated via $\bar{R}/d_2$ or $S$)

**Table 2: Historical Batch Performance Data for CI Analysis (Batches GLUC-2025-001 to GLUC-2025-015)**
*Note: This data represents the "Pre-Improvement" baseline used for the first CI cycle.*

| Batch Number | CQA: Encapsulation Efficiency (%) | CQA: Residual Solvent (PPM) | CQA: Release at 24h (%) | Purity (SEC-HPLC) (%) | Result Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 94.2 | 120 | 12.1 | 99.1 | Pass |
| **GLUC-2025-002** | 93.8 | 135 | 11.8 | 98.9 | Pass |
| **GLUC-2025-003** | 92.1 | 180 | 14.2 | 98.5 | Alert (OOT) |
| **GLUC-2025-004** | 94.5 | 115 | 11.5 | 99.2 | Pass |
| **GLUC-2025-005** | 95.1 | 105 | 10.9 | 99.4 | Pass |
| **GLUC-2025-006** | 89.9 | 210 | 16.5 | 97.8 | OOS (Limit <90%) |
| **GLUC-2025-007** | 93.4 | 140 | 12.5 | 99.0 | Pass |
| **GLUC-2025-008** | 94.0 | 130 | 11.9 | 99.1 | Pass |
| **GLUC-2025-009** | 93.7 | 128 | 12.2 | 99.1 | Pass |
| **GLUC-2025-010** | 94.2 | 110 | 11.1 | 99.3 | Pass |

---

#### **5. Root Cause Analysis (RCA) and Corrective Actions (CAPA)**

Following the OOS result in Batch **GLUC-2025-006**, a 6-Sigma "DMAIC" (Define, Measure, Analyze, Improve, Control) project was initiated.

##### **5.1 Investigation GHS-INV-2025-042 (Batch GLUC-2025-006)**
*   **Problem Statement:** Encapsulation efficiency dropped to 89.9% (Limit $\ge 90.0\%$) and Release at 24h increased to 16.5% (Limit $\le 15.0\%$).
*   **RCA Methodology:** 5-Whys and Ishikawa (Fishbone) Diagram.
*   **Primary Root Cause:** Variations in PLGA (Poly-lactic-co-glycolic acid) molecular weight distribution from Vendor B (Lot #PLGA-V2-88).
*   **CI Solution:** Implementation of a more stringent Incoming Raw Material Specification (IRMS) for PLGA, adding GPC (Gel Permeation Chromatography) testing for polydispersity index (PDI).

##### **5.2 Updated Control Strategy (Continuous Improvement Output)**
Based on the RCA, the following FMEA parameters were updated:

**Table 3: FMEA Update (Post-Improvement Strategy)**

| Process Step | Failure Mode | Original RPN (S x O x D) | Corrective Action Taken | New RPN |
| :--- | :--- | :--- | :--- | :--- |
| Polymer Dissolution | Inconsistent PLGA MW distribution | 7 x 4 x 3 = **84** | Implementation of GPC testing at Raw Material ID | 7 x 2 x 2 = **28** |
| Solvent Removal | High Residual DCM | 6 x 3 x 4 = **72** | Real-time Mass Spec monitoring during evaporation | 6 x 1 x 2 = **12** |
| Sterile Filtration | Filter Clogging/Shear Stress | 9 x 2 x 5 = **90** | Introduction of 100% redundant filtration with pressure-diff alarms | 9 x 1 x 2 = **18** |

---

#### **6. Continued Process Verification (CPV) Protocol**

As part of the CI program, GHS maintains a Stage 3 CPV plan for Glucogen-XR.

##### **6.1 Sampling Plan for CI Monitoring**
During routine commercial manufacturing, sampling frequency is enhanced for the first 30 batches to establish a high-confidence baseline.

**Table 4: CPV Sampling Matrix (GHS-CPV-GLUC-01)**

| Parameter Type | Parameter | Frequency | Method | CI Target (Ppk) |
| :--- | :--- | :--- | :--- | :--- |
| CPP | Solvent Evaporation Temp | Every 10 sec | Automated Sensor | $\ge 1.67$ |
| CPP | Stirring Speed (RPM) | Continuous | Digital Tachometer | $\ge 1.67$ |
| CQA | Residual Solvent (DCM) | 3 samples/batch | Headspace GC-FID | $\ge 1.33$ |
| CQA | Particle Size Distribution ($D_{50}$) | 5 samples/batch | Laser Diffraction | $\ge 1.33$ |
| CQA | Glucapeptide Content | 10 vials/batch | RP-HPLC | $\ge 1.33$ |

---

#### **7. Technology Roadmap: Future Improvements (2026-2030)**

GHS is committed to the "Glucogen-XR 2.0" initiative, which explores the following CI technological upgrades:

1.  **Process Analytical Technology (PAT) Integration:** Transitioning from offline HPLC to In-line Near-Infrared (NIR) spectroscopy for real-time monitoring of polymer-to-peptide ratios during the primary emulsification step.
2.  **Machine Learning (ML) Predictive Maintenance:** Utilizing Google Cloud Vertex AI to predict sterile filter failure based on flow-rate decay curves across multiple batch cycles (GLUC-2025-XXX series).
3.  **Continuous Manufacturing Transition:** Feasibility studies for a transition from batch-wise microencapsulation to a continuous flow process to further reduce the Occurrence (O) score of batch-to-batch variability.

---

#### **8. Conclusion of Continuous Improvement**
The CI framework for Glucogen-XR ensures that every deviation is converted into a learning event. By leveraging the computational power of Google Cloud Life Sciences, GHS transitions from traditional reactive quality control to a proactive, "Quality by Intelligence" paradigm. This approach guarantees that Glucogen-XR consistently meets its CQAs, ensuring patient safety and therapeutic efficacy for Type 2 Diabetes Mellitus over the product’s entire commercial lifespan.

---
**References:**
1. *Google Health Sciences SOP-QA-100: Global Lifecycle Management.*
2. *ICH Q10, Pharmaceutical Quality System, Section 3.2.1.*
3. *FDA Guidance for Industry: Process Validation (January 2011).*
4. *J. Pharmaceutical Science (2024), "Advanced Analytics in Peptide Microencapsulation," Vol 113, pp 45-58.*

---

# Lifecycle Management

## Post-Approval Changes Anticipated

# MODULE 3: QUALITY (3.2.P DRUG PRODUCT)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.7: LIFECYCLE MANAGEMENT – POST-APPROVAL CHANGES ANTICIPATED

---

#### 3.2.P.2.7.1 Introduction and Strategic Regulatory Framework
Google Health Sciences (GHS) presents this Post-Approval Change Management Protocol (PACMP) in accordance with FDA Guidance for Industry: *Postapproval Changes to Drug Substances and Drug Products* and ICH Q12 *Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management*. 

The development of Glucogen-XR (glucapeptide extended-release) utilizes a Quality by Design (QbD) approach. As such, GHS has identified specific areas where manufacturing optimization, scale-up, and site transfers are anticipated within the first 24–60 months post-initial licensure. This section outlines the prospective change categories, the data requirements for validation, and the proposed reporting categories (CBE-0, CBE-30, or PAS) based on risk assessment.

#### 3.2.P.2.7.2 Anticipated Change Category I: Scale-Up of Drug Product Manufacturing
Current commercial manufacturing for Glucogen-XR is validated at a batch size of 250,000 units (Type A). GHS anticipates a transition to a 1,000,000 unit batch size (Type B) to meet global demand projections for 2026-2030.

##### 3.2.P.2.7.2.1 Equipment Equivalency Assessment
The transition from the current 50L formulation vessel (ID: VSL-SS-09) to a 200L high-shear mixing vessel (ID: VSL-SS-42) requires rigorous hydrodynamic modeling.

**Table 1: Comparison of Mixing Parameters for Scale-Up**
| Parameter | Unit | Pilot Scale (Current) | Commercial Scale (Proposed) | Scaling Factor |
| :--- | :--- | :--- | :--- | :--- |
| Vessel ID | N/A | VSL-SS-09 | VSL-SS-42 | N/A |
| Working Volume | L | 45.0 | 180.0 | 4.0x |
| Impeller Diameter (D) | mm | 120 | 240 | 2.0x |
| Tank Diameter (T) | mm | 300 | 600 | 2.0x |
| Tip Speed (πDN) | m/s | 2.5 | 2.5 | 1.0x (Constant) |
| Reynolds Number (Re) | N/A | $1.2 \times 10^5$ | $4.8 \times 10^5$ | 4.0x |
| Power/Volume (P/V) | $W/m^3$ | 450 | 450 | 1.0x |

##### 3.2.P.2.7.2.2 Validation Protocol for Scale-Up (GLUC-VAL-SU-202)
Three consecutive validation batches will be manufactured using the proposed equipment:
1.  **GLUC-2025-SU01**
2.  **GLUC-2025-SU02**
3.  **GLUC-2025-SU03**

**Protocol Steps:**
1.  **Bioburden Testing:** Sample 500mL of formulated bulk prior to sterile filtration. Limit: $\le 10$ CFU/100 mL.
2.  **Filter Integrity:** Perform pre- and post-use Bubble Point testing on the 0.22 $\mu$m PES membrane.
3.  **Content Uniformity:** Sample 10 points across the filling line (Beginning, Middle, End). Acceptance Criteria: $L1 < 15.0$ per USP <905>.
4.  **Extended Release Profiling:** Comparison of dissolution curves using the f2 similarity factor. $f_2 = 50 \cdot \log \left\{ [1 + (1/n) \sum_{t=1}^n (R_t - T_t)^2]^{-0.5} \cdot 100 \right\}$. Acceptance: $f_2 > 50$.

#### 3.2.P.2.7.3 Anticipated Change Category II: Implementation of Site-Specific Container Closure System (CCS) Variations
To ensure supply chain resilience, GHS intends to qualify a secondary source for the Type I Borosilicate Glass vials and the Fluoropolymer-coated elastomeric stoppers.

##### 3.2.P.2.7.3.1 Comparison of Primary Packaging Components
Current Supplier: Schott AG (Vial) / West Pharmaceutical (Stopper).
Proposed Secondary: Gerresheimer (Vial) / Datwyler (Stopper).

**Table 2: CCS Specification Matrix and Comparison**
| Attribute | Specification | Current (West/Schott) | Proposed (Datwyler/Gerre) | Result |
| :--- | :--- | :--- | :--- | :--- |
| Vial Hydrolytic Res. | USP <660> | Type I Class A | Type I Class A | Equivalent |
| Stopper Extractables | GC-MS/LC-MS | < 5 ppm Siloxanes | < 5 ppm Siloxanes | Equivalent |
| CCI (Leak Rate) | $< 10^{-6}$ mbar·L/s | $4.2 \times 10^{-8}$ | $3.9 \times 10^{-8}$ | Pass |
| Particle Count | USP <788> | $\le 600$ per vial | $\le 600$ per vial | Pass |

#### 3.2.P.2.7.4 Anticipated Change Category III: Analytical Method Transfer and Modernization
GHS plans to transition the Potency Assay (currently an *in vivo* rat pharmacodynamic model) to an *in vitro* Cell-Based Bioassay utilizing the proprietary GHS-CHO-001 cell line expressing the human GLP-1 receptor.

##### 3.2.P.2.7.4.1 Validation of In Vitro Potency Method (IV-POT-33)
The modernization follows ICH Q2(R1) guidelines for validation of analytical procedures.

**Statistical Design:**
- **Accuracy:** 3 levels (80%, 100%, 120%) in triplicate.
- **Precision:** Repeatability (n=6) and Intermediate Precision (2 analysts, 3 days).
- **Linearity:** 5 concentrations, $R^2 \ge 0.99$.

**Table 3: Anticipated Results for Method Transfer GLUC-2025-MET01**
| Parameter | Acceptance Criteria | Anticipated Performance |
| :--- | :--- | :--- |
| Linearity ($R^2$) | $\ge 0.990$ | 0.9992 |
| Repeatability (%RSD) | $\le 5.0\%$ | 2.1% |
| Accuracy (Recovery) | 90% - 110% | 98.4% |
| LOQ | $\le 0.5$ $\mu$g/mL | 0.12 $\mu$g/mL |

#### 3.2.P.2.7.5 Anticipated Change Category IV: Optimization of Lyophilization Cycle
To reduce manufacturing lead times, GHS is investigating a "Fast-Freeze" annealing protocol to decrease the primary drying phase of Glucogen-XR by 12 hours.

##### 3.2.P.2.7.5.1 Cycle Parameters Comparison
**Table 4: Lyophilization Cycle Parameters (Current vs. Optimized)**
| Phase | Current Cycle (Time) | Optimized Cycle (Time) | Change Impact |
| :--- | :--- | :--- | :--- |
| Freezing | -45°C (6 hrs) | -45°C (4 hrs) | $\Delta$ 2 hrs |
| Annealing | None | -15°C (3 hrs) | Addition |
| Primary Drying | -20°C (48 hrs) | -15°C (34 hrs) | $\Delta$ 14 hrs |
| Secondary Drying | 25°C (10 hrs) | 25°C (10 hrs) | No change |
| **Total Time** | **64 hours** | **51 hours** | **13 hours saved** |

**Risk Assessment:**
The primary risk is the collapse of the cake structure or an increase in residual moisture. Batches **GLUC-2025-L10, L11, and L12** will be subjected to 6-month accelerated stability (40°C/75% RH) to ensure no degradation of the glucapeptide structure occurs due to altered cake morphology.

#### 3.2.P.2.7.6 Regulatory Reporting Strategy (Post-Approval Change Management Plan)
In accordance with the "Established Conditions" (ECs) identified in Section 3.2.R, the following reporting categories are proposed:

**Table 5: Reporting Categories for Anticipated Changes**
| Change Description | Protocol Reference | Reporting Category | Justification |
| :--- | :--- | :--- | :--- |
| Scale-up (4x) | GLUC-VAL-SU-202 | CBE-30 | Equivalent equipment design/principle |
| New Glass Supplier | GLUC-CCS-2025 | Annual Report | Meets current USP/EP specs |
| Method Modernization | IV-POT-33 | PAS | Significant change in principle (In vivo to In vitro) |
| Lyo Cycle Optimization| GLUC-LYO-OPT | CBE-0 | Analytical data proves product equivalence |

#### 3.2.P.2.7.7 Stability Protocol for Post-Approval Changes
Any changes classified as CBE-30 or PAS will trigger the following stability commitment:
1.  **Long Term:** 5°C ± 3°C; 0, 3, 6, 9, 12, 18, 24, 36 months.
2.  **Accelerated:** 25°C ± 2°C / 60% RH ± 5% RH; 0, 1, 3, 6 months.
3.  **Stress:** 40°C ± 2°C / 75% RH ± 5% RH; 0, 1 month (For info only).

#### 3.2.P.2.7.8 Conclusion
The lifecycle management strategy for Glucogen-XR is designed to leverage Google Health Sciences’ advanced data analytics and manufacturing automation. By prospectively defining these changes, GHS ensures a continuous supply of high-quality GLP-1 therapy while maintaining strict adherence to FDA 21 CFR 314.70 and ICH Q12 principles.

---
**Footnotes & References:**
1. FDA Guidance: *Changes to an Approved NDA or ANDA* (2004, Rev 1).
2. ICH Q12: *Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management*.
3. USP <121> *Insulin Assays* (Used as a surrogate for peptide potency validation).
4. Google Health Sciences internal SOP: GHS-QA-772-LIFECYCLE.
5. Batch records for GLUC-2025-XXX series are maintained in the Google Cloud Life Sciences GxP Data Warehouse.

---

## Change Control and Comparability Protocols

# MODULE 3: QUALITY (DRUG PRODUCT)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.6 LIFECYCLE MANAGEMENT: CHANGE CONTROL AND COMPARABILITY PROTOCOLS

---

#### 3.2.P.2.6.1 INTRODUCTION AND SCOPE
This subsection delineates the comprehensive lifecycle management strategy for **Glucogen-XR (glucapeptide extended-release)**, a long-acting GLP-1 receptor agonist developed by **Google Health Sciences (GHS)**. In accordance with **ICH Q8(R2)** (Pharmaceutical Development), **ICH Q10** (Pharmaceutical Quality System), and **ICH Q12** (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management), this document establishes the framework for post-approval changes, ensuring that the Product Quality Profile (PQP) and the Quality Target Product Profile (QTPP) remain invariant throughout the commercial lifespan.

The primary focus of this section is the **Comparability Protocol (CP)**, as defined by the **FDA Guidance for Industry: Comparability Protocols for Postapproval Changes to the Chemistry, Manufacturing, and Controls Information in an NDA, ANDA, or BLA (April 2016)**.

---

#### 3.2.P.2.6.2 REGULATORY FRAMEWORK AND QUALITY RISK MANAGEMENT (QRM)
Google Health Sciences employs a science-based, risk-managed approach to all manufacturing and analytical modifications. Every proposed change undergoes a rigorous Impact Assessment (IA) using Failure Mode and Effects Analysis (FMEA) or Hazard Analysis and Critical Control Points (HACCP).

**Table 1: Risk-Based Categorization of Post-Approval Changes**
| Change Category | Regulatory Pathway | Typical Examples | Quality Impact Level |
| :--- | :--- | :--- | :--- |
| **Major Change** | Prior Approval Supplement (PAS) | New manufacturing site; Change in primary sequence; Scale-up >10x. | High |
| **Moderate Change** | CBE-30 / CBE-0 | Change in supplier of critical excipient; Optimization of lyophilization cycle. | Medium |
| **Minor Change** | Annual Report (AR) | Tightening of in-process specifications; Secondary packaging design updates. | Low |

---

#### 3.2.P.2.6.3 THE COMPARABILITY PROTOCOL (CP) FOR GLUCOGEN-XR
The Glucogen-XR CP is a prospective plan describing the specific tests and studies to be performed and the acceptance criteria to be achieved to demonstrate the lack of adverse effects for specified CMC changes.

##### 3.2.P.2.6.3.1 Critical Quality Attributes (CQAs) for Comparability
To demonstrate comparability between pre-change (Reference) and post-change (Test) material, the following CQAs must be evaluated using validated analytical procedures (per ICH Q2(R1)).

**Table 2: CQA Assessment Matrix for GLUC-2025-XXX Series**
| CQA Parameter | Analytical Method | Acceptance Criteria (Statistical Limit) |
| :--- | :--- | :--- |
| **Primary Structure** | LC-MS/MS (Peptide Mapping) | Matches Reference Standard (± 0.05 Da) |
| **Purity (Main Peak)** | RP-HPLC | ≥ 98.0% |
| **High Molecular Weight Species (HMWS)** | SEC-HPLC | ≤ 0.5% |
| **Potency (In vitro bioassay)** | cAMP Reporter Gene Assay | 80% – 125% of Standard |
| **Glycation Levels** | HILIC-MS | ≤ 2.0% |
| **Deamidation (Asn-28)** | CEX-HPLC | ≤ 1.5% |
| **Extended Release Profile** | USP <711> Apparatus II | See Table 5 for dissolution stages |

---

#### 3.2.P.2.6.4 STEP-BY-STEP COMPARABILITY EXECUTION PROTOCOL
The following protocol applies to planned scale-up activities at the South San Francisco facility (Building 4, Suite 202).

##### Step 1: Selection of Reference Batches
Three (3) consecutive commercial-scale batches produced using the current validated process are selected as the "Reference State."
*   **Batch IDs:** GLUC-2025-001, GLUC-2025-002, GLUC-2025-003.

##### Step 2: Implementation of Change
The proposed change (e.g., transition from 500L to 2000L bioreactor scale) is implemented under strict Change Control (CC-GHS-2025-998).

##### Step 3: Manufacture of Comparability Batches
Three (3) batches are manufactured using the modified process.
*   **Batch IDs:** GLUC-2025-EXP01, GLUC-2025-EXP02, GLUC-2025-EXP03.

##### Step 4: Analytical Side-by-Side Comparison
Materials are tested concurrently to eliminate inter-day assay variability.

**Formula 1: Statistical Equivalency (Two One-Sided T-Tests - TOST)**
To demonstrate comparability, the 90% confidence interval (CI) for the difference in means between the Reference and Test sets must fall within the equivalence margin ($\theta$):
$$\mu_T - \mu_R \in [-\theta, +\theta]$$
Where $\theta$ is defined as $1.5 \times SD_{Reference}$.

---

#### 3.2.P.2.6.5 EXTENDED-RELEASE DISSOLUTION COMPARABILITY
As Glucogen-XR utilizes a proprietary PLGA-based microsphere delivery system, the dissolution profile is the most critical indicator of "In Vivo" performance.

**Table 3: Multi-Point Dissolution Specification (USP <711>)**
| Time Point | Sampling Interval | Specification (Pre-Change) | Required Similarity ($f_2$ value) |
| :--- | :--- | :--- | :--- |
| 2 Hours | Initial Burst | 5% – 15% | $f_2 \geq 50$ |
| 24 Hours | Lag Phase | 10% – 25% | $f_2 \geq 50$ |
| 168 Hours | Zero-Order Release | 45% – 65% | $f_2 \geq 50$ |
| 336 Hours | Completion | ≥ 85% | $f_2 \geq 50$ |

**Calculation for Similarity Factor ($f_2$):**
$$f_2 = 50 \cdot \log \left[ \left( 1 + \frac{1}{n} \sum_{t=1}^{n} (R_t - T_t)^2 \right)^{-0.5} \times 100 \right]$$

---

#### 3.2.P.2.6.6 CASE STUDY: SITE TRANSFER PROTOCOL (3000 INNOVATION DRIVE)
Google Health Sciences maintains a centralized Drug Product Manufacturing site. Any transfer of fill-finish operations (Line A to Line B) requires the following validation matrix.

**Table 4: Validation Matrix for Fill-Finish Site Transfer**
| Parameter | Method / Equipment | Sensitivity | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Fill Volume** | Gravimetric (WIP) | 0.001 g | 0.50 mL ± 1% |
| **Headspace O2** | Laser Absorption | 0.1% O2 | ≤ 2.0% |
| **Particulate Matter** | HIAC (USP <788>) | ≥ 10 µm | < 6000 per container |
| **Container Closure Integrity** | High Voltage Leak Detection | 5 µm hole | No Failures (N=300) |

---

#### 3.2.P.2.6.7 POST-APPROVAL STABILITY COMMITMENT
Following any "Moderate" or "Major" change approved via this Comparability Protocol, GHS commits to the following stability program:
1.  **Accelerated Stability:** 25°C / 60% RH for 6 months.
2.  **Long-Term Stability:** 5°C ± 3°C for the duration of the shelf-life (currently 24 months).
3.  **Photostability:** Per ICH Q1B (Option 2) for the first commercial batch post-change.

---

#### 3.2.P.2.6.8 ANNUAL PRODUCT REVIEW (APR) AND CONTINUED PROCESS VERIFICATION (CPV)
In alignment with **FDA Guidance on Process Validation (2011)**, Stage 3 (CPV) involves the continuous monitoring of Glucogen-XR production. All data generated under change control is aggregated into the APR.

**Statistical Process Control (SPC) Limits:**
*   Control charts (Shewhart) are utilized for Purity and Potency.
*   The Process Capability Index ($Cpk$) must remain $> 1.33$.

---

#### 3.2.P.2.6.9 REFERENCES
1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **ICH Q12:** Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management.
3.  **USP <1217>:** Tablet Breaking Force / USP <711> Dissolution.
4.  **FDA Guidance (2016):** Comparability Protocols for Postapproval Changes.
5.  **GHS Internal SOP-QA-9002:** Management of Global Change Control Systems.

---
**END OF SECTION 3.2.P.2.6**
*Confidential - Property of Google Health Sciences*

---

## Annual Product Review Process

# MODULE 3: QUALITY (3.2.P DRUG PRODUCT)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.7 LIFECYCLE MANAGEMENT
#### 3.2.P.2.7.4 ANNUAL PRODUCT REVIEW (APR) AND PRODUCT QUALITY REVIEW (PQR) PROCESS

---

### 1.0 PURPOSE AND SCOPE

The purpose of this document is to define the comprehensive methodology and procedural framework for the Annual Product Review (APR) of **Glucogen-XR (glucapeptide extended-release)**, manufactured by Google Health Sciences (GHS). This process is designed to comply with United States Food and Drug Administration (FDA) requirements under **21 CFR 211.180(e)**, as well as International Council for Harmonisation (ICH) Q10 Pharmaceutical Quality System guidelines and Eudralex Volume 4, Chapter 6 (Product Quality Review).

The APR serves as a periodic quality signal detection mechanism, ensuring that the manufacturing process for Glucogen-XR remains in a state of control, validating the appropriateness of current specifications, and identifying trends that may necessitate process optimization or regulatory filing updates.

#### 1.1 Scope
This protocol applies to all commercial batches of Glucogen-XR (1.5mg, 3.0mg, and 4.5mg strengths) produced at the Google Health Sciences Facility (Site ID: GHS-SSF-01) located at 3000 Innovation Drive, South San Francisco, CA. It encompasses:
*   Starting materials and primary packaging components.
*   In-process control (IPC) data.
*   Finished product analytical results.
*   Stability monitoring data.
*   Deviation, OOS (Out of Specification), and OOT (Out of Trend) investigations.
*   Validation status (Process, Cleaning, and Analytical).
*   Regulatory changes and commitment tracking.

---

### 2.0 REGULATORY REFERENCE FRAMEWORK

The Glucogen-XR APR process is governed by the following regulatory standards:

| Reference ID | Title | Application to Glucogen-XR |
| :--- | :--- | :--- |
| **21 CFR 211.180(e)** | Records and Reports | Requirement for annual evaluation of quality standards for each drug product. |
| **ICH Q7** | Good Manufacturing Practice Guide for APIs | Evaluation of the glucapeptide drug substance used in Glucogen-XR. |
| **ICH Q8(R2)** | Pharmaceutical Development | Utilization of Quality by Design (QbD) data in lifecycle management. |
| **ICH Q9** | Quality Risk Management | Risk-based assessment of deviations and change controls. |
| **ICH Q10** | Pharmaceutical Quality System | Overall management responsibility and continuous improvement. |
| **ICH Q12** | Lifecycle Management | Post-approval chemistry, manufacturing, and controls (CMC) changes. |
| **USP <1010>** | Analytical Data Interpretation | Statistical methods for trend analysis and outlier detection. |

---

### 3.0 DATA AGGREGATION AND STATISTICAL METHODOLOGY

#### 3.1 Batch Selection and Reporting Period
The APR for Glucogen-XR covers a 12-month rolling period (January 1st to December 31st). All batches initiated, completed, or rejected during this period are included. For the 2025 reporting cycle, the following batch numbering convention is utilized: **GLUC-2025-XXX**.

#### 3.2 Statistical Process Control (SPC)
GHS utilizes the Google Cloud Life Sciences AI-Driven Quality Analytics platform to perform automated SPC. Key Performance Indicators (KPIs) are calculated using the following formulas:

1.  **Process Capability Index (CpK):**
    $$Cpk = \min\left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
    *Where USL = Upper Specification Limit, LSL = Lower Specification Limit, $\mu$ = Mean, $\sigma$ = Standard Deviation.*
2.  **Relative Standard Deviation (RSD):**
    $$\%RSD = \left( \frac{\sigma}{\mu} \right) \times 100$$
3.  **Moving Range (MR) Charts:** Used for individual batch measurements to detect shifts in the mean.

---

### 4.0 DETAILED REVIEW OF MANUFACTURING DATA (BATCH RECORDS)

#### 4.1 Batch Disposition Summary
The following table summarizes the disposition of Glucogen-XR batches produced in the 2025 reporting period.

##### Table 1: Glucogen-XR Batch Summary (2025)
| Batch Number | Strength | Date of Mfg | Disposition | Yield (%) | Deviations (Y/N) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 1.5 mg | 12-Jan-2025 | Released | 98.4% | N |
| **GLUC-2025-002** | 1.5 mg | 18-Jan-2025 | Released | 97.9% | Y (Minor) |
| **GLUC-2025-003** | 3.0 mg | 05-Feb-2025 | Released | 99.1% | N |
| **GLUC-2025-004** | 3.0 mg | 12-Feb-2025 | Rejected | 82.3% | Y (Critical) |
| **GLUC-2025-005** | 4.5 mg | 01-Mar-2025 | Released | 98.8% | N |
| **GLUC-2025-006** | 1.5 mg | 15-Mar-2025 | Released | 97.5% | N |
| **GLUC-2025-007** | 3.0 mg | 22-Mar-2025 | Quarantined| TBD | Y (Major) |

*Note: Batch GLUC-2025-004 was rejected due to a failure in the extended-release polymer matrix homogenization step, leading to OOS dissolution results at the 12-hour interval.*

#### 4.2 Critical In-Process Control (IPC) Analysis
Glucogen-XR production involves a sophisticated microsphere encapsulation process. The following IPCs are tracked across all batches:

1.  **Primary Emulsion Droplet Size (D50):** Target 15-25 $\mu$m.
2.  **Solvent Evaporation Rate:** Target 0.5 - 0.8 L/hr.
3.  **Encapsulation Efficiency:** Target $\ge$ 95.0%.

##### Table 2: IPC Trend Analysis - Encapsulation Efficiency (%)
| Batch Number | Result (%) | Mean ($\mu$) | Control Limit (3$\sigma$) | Status |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 96.2 | 96.5 | 94.8 - 98.2 | Within Limits |
| GLUC-2025-002 | 95.8 | 96.5 | 94.8 - 98.2 | Within Limits |
| GLUC-2025-005 | 97.1 | 96.5 | 94.8 - 98.2 | Within Limits |

---

### 5.0 FINISHED PRODUCT ANALYTICAL REVIEW

The finished product must meet rigorous release specifications to ensure the extended-release profile of the glucapeptide.

#### 5.1 Dissolution Profile Testing
Dissolution is measured at 2, 8, 24, and 72 hours using USP Apparatus 2.

##### Table 3: Dissolution Trends (24-Hour Point) - Limit: 45-65%
| Batch Number | Strength | Result (%) | SD | Cpk |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 1.5 mg | 54.2 | 1.2 | 1.45 |
| GLUC-2025-003 | 3.0 mg | 55.8 | 0.9 | 1.62 |
| GLUC-2025-005 | 4.5 mg | 53.9 | 1.1 | 1.51 |

**Statistical Interpretation:** The Cpk values for all strengths exceed the internal GHS threshold of 1.33, indicating a highly capable and centered process for the extended-release mechanism.

---

### 6.0 DEVIATIONS, INVESTIGATIONS, AND CAPA

A critical component of the APR is the evaluation of all non-conformances.

#### 6.1 Summary of Deviations
During the 2025 period, 14 deviations were logged.
*   **Minor:** 10 (e.g., documentation errors, environmental monitoring excursions in Grade C zones).
*   **Major:** 3 (e.g., equipment calibration drift, cooling water temperature excursion).
*   **Critical:** 1 (Batch GLUC-2025-004: Mixer failure during matrix formation).

#### 6.2 CAPA Effectiveness Review
**CAPA-2025-012:** Initiated following the failure of GLUC-2025-004.
*   **Root Cause:** Mechanical fatigue of the high-shear impellor shaft.
*   **Action Taken:** Implementation of a vibration-monitoring sensor system (IoT-enabled) and revised preventative maintenance schedule (from 6 months to 4 months).
*   **Effectiveness:** No subsequent mechanical failures recorded in batches GLUC-2025-005 through GLUC-2025-020.

---

### 7.0 STABILITY MONITORING PROGRAM

Stability data for Glucogen-XR is maintained in the Google Cloud Life Sciences data lake. The APR reviews data from long-term (25°C/60% RH) and accelerated (40°C/75% RH) conditions.

#### 7.1 Stability Batch Table
| Stability Study ID | Batch Number | Time Point | Primary Marker (Assay %) | Degradants (%) |
| :--- | :--- | :--- | :--- | :--- |
| STAB-GLUC-001 | GLUC-2024-088 | 12 Months | 99.2% | 0.12% |
| STAB-GLUC-002 | GLUC-2024-095 | 12 Months | 98.8% | 0.15% |
| STAB-GLUC-003 | GLUC-2025-001 | 6 Months | 99.5% | 0.08% |

**Conclusion:** All stability results remain well within the specification of 95.0% - 105.0% assay and <1.0% total degradants. No significant changes or OOT trends observed.

---

### 8.0 CHANGE CONTROL AND REGULATORY COMMITMENTS

#### 8.1 Change Controls Summary
Total Change Controls (CC) processed: 8.
*   **CC-2025-004:** Update to the HPLC column supplier for glucapeptide assay. Validated and equivalent to the previous supplier.
*   **CC-2025-009:** Expansion of the South San Francisco secondary packaging line.

#### 8.2 Regulatory Commitments (Post-Approval)
GHS committed to the FDA to provide an additional extractables/leachables study on the new pre-filled syringe (PFS) plunger stopper (Component ID: GHS-PFS-77).
*   **Status:** Study completed (Report #GHS-EL-2025-01). Results indicate no safety concerns. To be included in the Annual Report.

---

### 9.0 PROTOCOL FOR APR GENERATION (STANDARD OPERATING PROCEDURE)

To ensure consistency, the following 10-step protocol is followed for every Glucogen-XR APR cycle:

1.  **Data Extraction:** Query the LIMS (Laboratory Information Management System) and MES (Manufacturing Execution System) for all batch data.
2.  **Statistical Screening:** Apply Nelson Rules to detect OOT trends in assay and dissolution.
3.  **Materials Review:** Audit COA (Certificate of Analysis) for key excipients, specifically the PLGA polymer (Poly-lactide-co-glycolide).
4.  **Deviation Audit:** Categorize all deviations and ensure all CAPAs are closed or tracked.
5.  **Environmental Monitoring (EM) Review:** Analyze Grade A and B cleanroom data (microbial and particulate) during Glucogen-XR fill-finish.
6.  **Yield Analysis:** Calculate theoretical vs. actual yield for each sub-process (Encapsulation, Lyophilization, Filling).
7.  **Complaints Review:** Analyze patient complaints. (Note: For 2025, complaint rate was 0.02 per 100,000 units).
8.  **Validation Status:** Confirm that the Process Performance Qualification (PPQ) remains valid and no re-validation triggers were met.
9.  **Drafting and Review:** Quality Assurance (QA) drafts the report; Manufacturing and Regulatory Affairs provide input.
10. **Executive Approval:** Final sign-off by the Head of Quality at Google Health Sciences.

---

### 10.0 CONCLUSION AND RECOMMENDATIONS

Based on the 2025 Annual Product Review for Glucogen-XR:
*   The manufacturing process is validated and remains in a state of statistical control.
*   The drug product meets all pre-defined quality attributes.
*   **Recommendation:** No changes to the current specifications or manufacturing instructions are required at this time.
*   **Continuous Improvement Item:** Evaluation of a more robust impellor design for the homogenization tank to prevent a recurrence of the mechanical failure observed in Batch GLUC-2025-004.

---
**END OF SECTION**
**Approved by:** *Director of Quality Regulatory Affairs, Google Health Sciences*
**Date:** 15-Jan-2026

---

# Cold Chain and Distribution Considerations

## Temperature Excursion Studies

# MODULE 3: QUALITY (DATA PTD)
## 3.2.P DRUG PRODUCT (GLUCOGEN-XR)
### 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
#### 3.2.P.2.4 COLD CHAIN AND DISTRIBUTION CONSIDERATIONS
##### 3.2.P.2.4.1 Temperature Excursion Studies (TES)

---

### 1.0 Executive Summary of Temperature Excursion Strategy
Google Health Sciences (GHS) has conducted a comprehensive suite of Temperature Excursion Studies (TES) to define the stability profile of Glucogen-XR (glucapeptide extended-release) injection (1.5 mg/0.5 mL) under non-standard storage conditions. As a GLP-1 receptor agonist formulated in a sophisticated polymeric microsphere suspension within a pre-filled syringe (PFS), Glucogen-XR is highly sensitive to thermal fluctuations that may impact peptide secondary structure, surfactant micelle integrity, and the controlled-release kinetics of the extended-release matrix.

The primary objective of these studies was to establish a "Stability Budget" or "Time-Out-Of-Refrigeration" (TOR) allowance to support the global supply chain, from the manufacturing site at 3000 Innovation Drive, South San Francisco, to clinical sites and eventually commercial pharmacies. These studies were designed in accordance with **ICH Q1A(R2)**, **ICH Q5C**, and **USP <1079>** *Risks and Mitigation for Drug Products in the Distribution Chain*.

### 2.0 Regulatory Framework and Compliance Standards
The TES protocols for Glucogen-XR were developed under the following regulatory umbrellas:
*   **FDA Guidance for Industry:** *Q1A(R2) Stability Testing of New Drug Substances and Products*.
*   **USP <1117>:** *Best Microbiological Practices*.
*   **USP <1207>:** *Package Integrity Evaluation – Sterile Products*.
*   **PDA Technical Report No. 53:** *Stability Testing to Support Distribution of New Biological Products*.
*   **WHO Technical Report Series, No. 961, Annex 9:** *Model guidance for the storage and transport of time- and temperature-sensitive pharmaceutical products*.

### 3.0 Technical Specifications of Glucogen-XR Relevant to Thermal Stress
Glucogen-XR utilizes a proprietary GHS-CHO-001 cell line-derived glucapeptide. The extended-release profile is achieved via encapsulation in Poly(lactic-co-glycolic acid) (PLGA) microspheres.
*   **Standard Storage:** 2°C to 8°C (36°F to 46°F), Protect from Light.
*   **Glass Transition Temperature (Tg) of PLGA Matrix:** 42.5°C ± 1.2°C.
*   **Isoelectric Point (pI) of Glucapeptide:** 4.8.
*   **Formulation pH:** 6.5 ± 0.2 (Phosphate Buffered Saline with Polysorbate 80).

---

### 4.0 Detailed Study Protocols

#### 4.1 Protocol TES-2025-001: Cyclic Thermal Stress Simulation
**Objective:** To evaluate the impact of repeated "Freeze-Thaw" and "Cold-to-Ambient" cycles simulating transit delays and handling errors.

**Scope:** This protocol utilizes three (3) primary validation batches of Glucogen-XR.
*   **Batch GLUC-2025-001** (Manufacturing Date: 12-JAN-2025)
*   **Batch GLUC-2025-002** (Manufacturing Date: 15-JAN-2025)
*   **Batch GLUC-2025-003** (Manufacturing Date: 20-JAN-2025)

**Procedure:**
1.  **Cycle A (Freeze-Thaw):** Samples are moved from 5°C to -20°C for 24 hours, then returned to 5°C for 24 hours. This constitutes one cycle. A total of 3 cycles are performed.
2.  **Cycle B (Ambient Excursion):** Samples are moved from 5°C to 25°C (60% RH) for 72 hours, then returned to 5°C. This simulates a "Left on Counter" pharmacy scenario.
3.  **Cycle C (Extreme Heat):** Samples are moved from 5°C to 40°C (75% RH) for 12 hours, simulating a delivery truck failure in summer.

##### Table 1: Cyclic Stress Test Matrix and Sampling Plan
| Cycle ID | Temperature Range | Duration per Cycle | Total Repetitions | Analytical Pull Points |
| :--- | :--- | :--- | :--- | :--- |
| **CT-01** | -20°C to +5°C | 48 Hours | 3 Cycles | Post-Cycle 1, 2, 3 |
| **CT-02** | +25°C to +5°C | 72 Hours | 2 Cycles | Post-Cycle 1, 2 |
| **CT-03** | +40°C to +5°C | 12 Hours | 1 Cycle | Immediate Post-Stress |

#### 4.2 Protocol TES-2025-002: Mean Kinetic Temperature (MKT) Boundary Analysis
To calculate the permissible duration of excursions, the MKT formula is applied:
$$T_{MKT} = \frac{\Delta H / R}{-\ln \left( \frac{\exp(-\Delta H / RT_1) + \exp(-\Delta H / RT_2) + \dots + \exp(-\Delta H / RT_n)}{n} \right)}$$
Where:
*   $\Delta H$ = Activation energy (assumed 83.144 kJ/mol for glucapeptide degradation).
*   $R$ = Gas constant (0.0083144 kJ/mol·K).
*   $T$ = Temperature in Kelvin.

---

### 5.0 Comprehensive Experimental Results and Data Analysis

The following tables represent the analytical results for Batch **GLUC-2025-001** following the completion of Protocol TES-2025-001.

#### 5.1 Analytical Results: Purity and Degradation
Purity was measured via Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC) and Size Exclusion Chromatography (SEC) to detect aggregates.

##### Table 2: RP-HPLC Purity (%) - Batch GLUC-2025-001
| Condition | Baseline (T0) | Post-Cycle 1 | Post-Cycle 2 | Post-Cycle 3 | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Control (5°C)** | 99.4% | 99.4% | 99.3% | 99.3% | ≥ 95.0% |
| **-20°C Stress** | 99.4% | 98.1% | 96.8% | 94.2% (FAIL) | ≥ 95.0% |
| **25°C Stress** | 99.4% | 99.1% | 98.8% | N/A | ≥ 95.0% |
| **40°C Stress** | 99.4% | 89.5% (FAIL)| N/A | N/A | ≥ 95.0% |

**GHS Technical Analysis:** The significant drop in purity at 40°C (89.5%) is attributed to the accelerated hydrolysis of the glucapeptide and the onset of PLGA matrix softening. The -20°C failure at Cycle 3 indicates that repeated freezing induces mechanical stress on the microspheres, leading to premature peptide release and subsequent oxidation.

#### 5.2 Analytical Results: Particulate Matter and Sub-visible Particles
USP <788> testing was performed using Light Obscuration (HIAC) to ensure that temperature excursions did not cause protein aggregation or polymer shedding.

##### Table 3: Sub-visible Particle Counts (USP <788>) - Batch GLUC-2025-002
| Stress Condition | ≥ 10 µm (Limit: 6000/container) | ≥ 25 µm (Limit: 600/container) | Result |
| :--- | :--- | :--- | :--- |
| **T0 Baseline** | 142 | 12 | PASS |
| **Post 25°C (14 days)** | 485 | 34 | PASS |
| **Post 40°C (48 hours)**| 5,820 | 540 | MARGINAL |
| **Post -20°C (Cycle 1)**| 2,100 | 115 | PASS |

---

### 6.0 Impact on Drug Delivery: In Vitro Release (IVR) Kinetics
A critical quality attribute (CQA) for Glucogen-XR is the extended-release profile. Temperature excursions can cause "burst release" (the premature dump of the peptide) or "lag phase expansion."

#### 6.1 IVR Protocol
Samples were placed in a Dissolution Apparatus 4 (Flow-through cell) using PBS at pH 7.4, 37°C.

##### Table 4: Cumulative Release Profile (%) after 25°C Excursion (Batch GLUC-2025-003)
| Day | Control (5°C) | 25°C (72 Hours) | 25°C (14 Days) | Spec Limit |
| :--- | :--- | :--- | :--- | :--- |
| **Day 1 (Burst)**| 4.2% | 5.1% | 12.8% | ≤ 15.0% |
| **Day 7** | 22.5% | 23.8% | 35.2% | Report |
| **Day 14** | 48.9% | 49.5% | 61.2% | Report |
| **Day 28** | 88.4% | 87.9% | 94.5% | ≥ 80.0% |

**Observation:** While a 72-hour excursion at 25°C shows negligible impact on release kinetics, a prolonged 14-day excursion at 25°C increases the initial burst release to 12.8%. This is close to the 15% specification limit, suggesting that 14 days is the absolute upper limit for ambient exposure.

---

### 7.0 Container Closure Integrity (CCI) under Thermal Stress
Temperature fluctuations cause expansion and contraction of the rubber plunger stoppers (Fluorotec® coated) and the glass barrel of the pre-filled syringe (BD Neopak™).

#### 7.1 Helium Leak Rate Testing
**Equipment:** Pfeiffer Vacuum Helium Leak Detector (ID: GHS-VAC-09).
**Acceptance Criteria:** Leak rate < 10^-7 mbar·L/s.

##### Table 5: CCI Testing Results
| Batch Number | Excursion Cycle | Mean Leak Rate (mbar·L/s) | Status |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 3x Freeze-Thaw (-20°C) | 4.2 x 10^-8 | PASS |
| GLUC-2025-002 | 40°C for 72 Hours | 1.1 x 10^-9 | PASS |
| GLUC-2025-003 | Pressure Stress (0.5 atm) | 8.8 x 10^-8 | PASS |

---

### 8.0 Specific Excursion Management Protocols (SOP-DIST-004)

In the event of a temperature deviation during shipment, the following step-by-step procedure is mandated for the Quality Assurance (QA) department at Google Health Sciences:

1.  **Data Logger Retrieval:** Extract data from the TempTale® Ultra sensors.
2.  **MKT Calculation:** Input the raw temperature data into the GHS-Cloud Stability Calculator (Validated System v4.2).
3.  **Classification:**
    *   **Level 1 (Minor):** 8.1°C to 15.0°C for < 24 hours. *Action:* Release for use.
    *   **Level 2 (Moderate):** 15.1°C to 25.0°C for < 72 hours. *Action:* Refer to TES-2025-001 data; release if within budget.
    *   **Level 3 (Major):** > 25°C or < 0°C (Freezing). *Action:* Quarantine and initiate Deviation Report (DR).
4.  **Bio-analytical Verification:** If a Level 3 excursion occurs, representative samples from the affected pallet must undergo SEC-HPLC and Peptide Mapping at the South San Francisco QC Lab.

---

### 9.0 Conclusions and Stability Budget
Based on the data generated in studies GLUC-2025-XXX, Google Health Sciences establishes the following "Time-Out-Of-Refrigeration" (TOR) allowances for Glucogen-XR:

1.  **Ambient Excursion (up to 25°C):** A cumulative total of **14 days** is permitted over the shelf life of the product.
2.  **Moderate Heat (25°C to 30°C):** A cumulative total of **72 hours** is permitted.
3.  **Extreme Heat (> 30°C):** Not permitted. Product must be discarded.
4.  **Freezing (< 0°C):** Not permitted. Even a single freeze event (as shown in Table 2) significantly degrades the glucapeptide purity below the 95% threshold and alters the microsphere structure.

**Final Disposition Recommendation:**
Glucogen-XR remains stable and efficacious when excursions are limited to the established TOR budget. These data will be included in the "Instructions for Use" (IFU) and the "Prescribing Information" (PI) to guide healthcare providers on handling deviations.

---
**END OF SECTION**
**Approved by:** Dr. Julian Thorne, Head of Regulatory Affairs, Google Health Sciences.
**Date:** 24-MAY-2025
**Document ID:** GHS-GLUC-M3-DP-TES-V01

---

## Packaging Qualification

# MODULE 3: QUALITY (3.2.P) – DRUG PRODUCT
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.4: COLD CHAIN AND DISTRIBUTION CONSIDERATIONS
#### PART 3.2.P.2.4.1: PACKAGING QUALIFICATION

---

### 1.0 SCOPE AND EXECUTIVE SUMMARY

This subsection details the comprehensive Packaging Qualification (PQ) program for Glucogen-XR (glucapeptide extended-release), a high-concentration GLP-1 receptor agonist (5.0 mg/mL) formulated in a thermally sensitive lipid-nanoparticle (LNP) matrix. Given the proteinaceous nature of the peptide and the kinetic stability profile of the extended-release delivery system, the Drug Product (DP) is strictly required to be maintained at $2^\circ\text{C}$ to $8^\circ\text{C}$ (Refrigerated) throughout the entirety of its lifecycle—from primary manufacturing at the Google Health Sciences (GHS) facility (South San Francisco, CA) to the point of clinical administration.

The qualification strategy described herein follows a risk-based approach aligned with **ICH Q8(R2)** (Pharmaceutical Development), **ICH Q9** (Quality Risk Management), and **USP <1079>** (Risks and Mitigation Strategies for the Storage and Transportation of Finished Drug Products). The qualification includes the physical integrity of the primary container-closure system (CCS), the thermal performance of the secondary and tertiary packaging, and the robustness of the distribution configuration against mechanical stressors (vibration, shock, pressure) encountered during global transit via the Google Cloud Global Logistics network.

---

### 2.0 REGULATORY REFERENCE STANDARDS

The qualification protocols were designed and executed in accordance with the following international standards:

*   **ASTM D4169-22**: Standard Practice for Performance Testing of Shipping Containers and Systems.
*   **ISTA 3A / 7E**: Packaged-Products for Parcel Delivery System Shipment / Thermal Evaluation of Shipping Packaging for Medical Product Transport.
*   **USP <1207>**: Sterile Product Packaging—Integrity Evaluation.
*   **USP <659>**: Packaging and Storage Requirements.
*   **21 CFR 211.94**: Drug Product Containers and Closures.
*   **WHO Annex 9**: Model guidance for the storage and transport of time- and temperature-sensitive pharmaceutical products.

---

### 3.0 DRUG PRODUCT CONFIGURATION (BATCH SERIES GLUC-2025-XXX)

The data presented in this section utilizes representative batches produced during the scale-up phase. The primary container is a 3 mL Type I Borosilicate Glass pre-filled syringe (PFS) with a FluroTec®-coated plunger stopper.

#### Table 1: Components of the Finished Goods Configuration

| Component Level | Description | Material of Construction | Manufacturer / ID |
| :--- | :--- | :--- | :--- |
| **Primary** | 3 mL Pre-filled Syringe (PFS) | Type I Borosilicate Glass / 27G Fixed Needle | GHS-PPS-3ML |
| **Primary Closure** | Elastomeric Plunger Stopper | Bromobutyl Rubber (FluroTec® coated) | West Pharma / 4023/50 |
| **Secondary** | Single-unit Carton | 18pt SBS Paperboard (UV Gloss) | GHS-CART-01 |
| **Tertiary** | 10-Unit Shipper Box | Double-wall Corrugated (C-Flute) | GHS-SHIP-10 |
| **Quaternary** | Thermal Passive Shipper | Vacuum Insulated Panels (VIP) / PCM | ColdChainX-20L |

---

### 4.0 THERMAL QUALIFICATION (COLD CHAIN)

#### 4.1 Thermal Profile Definition
To ensure the stability of the glucapeptide moiety (Batch GLUC-2025-001 through GLUC-2025-015), the packaging must withstand external ambient temperatures ranging from $-20^\circ\text{C}$ (Winter Extreme) to $+45^\circ\text{C}$ (Summer Extreme) while maintaining internal temperatures between $2.0^\circ\text{C}$ and $8.0^\circ\text{C}$.

#### 4.2 Phase Change Material (PCM) Strategy
The system utilizes a Phase Change Material (PCM) with a melting point of $5.5^\circ\text{C}$.
*   **PCM Formula**: $C_{n}H_{2n+2}$ based paraffinic wax blend.
*   **Latent Heat of Fusion**: $210 \text{ kJ/kg}$.

#### 4.3 Qualification Protocol: Thermal Stress Test (Protocol GHS-QC-TH-2025-09)
The protocol involves three cycles of the ISTA 7E 72-hour profile.

**Step-by-Step Procedure:**
1.  Condition the PCM bricks at $5^\circ\text{C} \pm 1^\circ\text{C}$ for 48 hours.
2.  Instrument the internal payload with six (6) NIST-traceable thermocouples (TC-01 to TC-06) placed at the corners and geometric center.
3.  Load 10 units of Glucogen-XR (Batch GLUC-2025-004) into the payload cavity.
4.  Seal the VIP shipper and place in the environmental chamber (Equipment ID: GHS-CHAMB-09).
5.  Execute the "Summer Profile" (see Table 2).

#### Table 2: ISTA 7E Summer Profile for Glucogen-XR

| Segment | Duration (hrs) | Temp (°C) | Simulation Intent |
| :--- | :--- | :--- | :--- |
| 1 | 6 | 45 | Tarmac Exposure (High Heat) |
| 2 | 10 | 30 | Distribution Center |
| 3 | 12 | 40 | Delivery Van (Midday) |
| 4 | 20 | 25 | Warehouse Holding |
| 5 | 24 | 35 | Final Mile Delivery |

#### 4.4 Results of Thermal Qualification (Batch GLUC-2025-004)

Internal temperature data was logged every 5 minutes. The critical limit is $2.0^\circ\text{C} < T < 8.0^\circ\text{C}$.

| Sensor Location | Min Temp (°C) | Max Temp (°C) | Mean Kinetic Temp (MKT) | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| TC-01 (Top-Left) | 3.2 | 6.8 | 4.1 | Pass |
| TC-02 (Bottom-Right)| 2.8 | 6.4 | 3.9 | Pass |
| TC-03 (Center) | 4.0 | 5.2 | 4.6 | Pass |
| TC-04 (Near PCM) | 2.1 | 5.9 | 3.5 | Pass |
| **Statistical Aggregate** | **2.1** | **6.8** | **4.02** | **PASS** |

**Calculated MKT (Mean Kinetic Temperature):**
$$T_{k} = \frac{\Delta H / R}{-\ln \left( \frac{e^{-\Delta H / RT_1} + e^{-\Delta H / RT_2} + \dots + e^{-\Delta H / RT_n}}{n} \right)}$$
*Where $\Delta H = 83.14 \text{ kJ/mol}$, $R = 8.314 \times 10^{-3} \text{ kJ/mol-K}$.*
Result: $4.02^\circ\text{C}$, confirming negligible thermal degradation during the 72-hour excursion simulation.

---

### 5.0 MECHANICAL DISTRIBUTION QUALIFICATION (ASTM D4169)

Glucogen-XR syringes are susceptible to plunger movement (stopper travel) caused by pressure differentials and vibration-induced protein aggregation.

#### 5.1 Vibration Profile
Random vibration tests were conducted per ASTM D4169, Schedule D, Assurance Level I (the most stringent).
*   **Frequency Range**: $1 \text{ Hz}$ to $200 \text{ Hz}$.
*   **Duration**: 180 minutes per axis (X, Y, Z).
*   **Total Power Spectral Density (PSD)**: $0.52 \text{ g}^2/\text{Hz}$ (Truck/Air simulation).

#### 5.2 Vacuum/Pressure Simulation
To simulate cargo hold depressurization in air transit:
*   **Standard**: ASTM D6653.
*   **Pressure**: $59.5 \text{ kPa}$ (equivalent to 14,000 ft altitude).
*   **Duration**: 60 minutes.
*   **Acceptance Criteria**: No leakage, no stopper movement > 1mm.

#### Table 3: Mechanical Integrity Test Results (Batch GLUC-2025-007)

| Test Metric | Sample Size (N) | Observation | Result |
| :--- | :--- | :--- | :--- |
| Stopper Movement | 50 | Mean: 0.2 mm; Max: 0.4 mm | Pass (< 1.0 mm) |
| Container Leakage | 50 | Dye Penetration Negative | Pass (No leaks) |
| Visible Particulates | 50 | < 10 particles/mL (Sub-visible) | Pass (USP <788>) |
| SEC-HPLC Purity | 5 | 99.4% Monomer | Pass (> 98.5%) |

---

### 6.0 EXTRACTABLES AND LEACHABLES (E&L) DURING DISTRIBUTION

A critical aspect of packaging qualification for biologics is the assessment of leachables under the influence of mechanical stress (agitation).

#### 6.1 Leachable Study Design
*   **Analytical Techniques**: GC-MS, LC-MS/MS, ICP-MS.
*   **Incubation**: 30 days at $5^\circ\text{C}$ following the ASTM D4169 vibration protocol.

#### Table 4: Targeted Leachable Summary (Post-Distribution Simulation)

| Compound | Source | Threshold (µg/mL) | Detected Level | Margin of Safety |
| :--- | :--- | :--- | :--- | :--- |
| Tungsten | Syringe Needle | < 0.1 | 0.02 | 5x |
| Silicone Oil | Barrel Coating | < 1.0 | 0.45 | 2.2x |
| BHT | Plunger Stopper | < 0.5 | ND (< 0.05) | > 10x |

---

### 7.0 CLOUD-INTEGRATED MONITORING SYSTEM (GOOGLE CLOUD LIFE SCIENCES)

As part of the Google Health Sciences infrastructure, every tertiary shipper of Glucogen-XR is equipped with a **GHS-SmartTrack-IoT** sensor.

1.  **Connectivity**: LTE-M / NB-IoT with fallback to localized Bluetooth Low Energy (BLE).
2.  **Data Integration**: Real-time telemetry is streamed to the Google Cloud Pub/Sub architecture.
3.  **Algorithmic Excursion Prediction**: Uses BigQuery ML to predict potential temperature breaches based on external weather data and flight delays.
4.  **Batch-Level Traceability**: Each sensor ID is cryptographically linked to the batch number (e.g., GLUC-2025-012) in the SAP S/4HANA ERP system.

---

### 8.0 CONCLUSION

The packaging qualification for Glucogen-XR (glucapeptide extended-release) demonstrates that the proposed container-closure and shipping configuration is robust, maintains the required $2^\circ\text{C}$ to $8^\circ\text{C}$ environment under extreme seasonal variations, and protects the physical integrity of the pre-filled syringes. All batches (GLUC-2025-001 through GLUC-2025-015) utilized in these studies met the pre-defined acceptance criteria for purity, sterility, and functionality. These data support the commercial distribution of Glucogen-XR across global markets under the specified storage conditions.

---
**End of Subsection 3.2.P.2.4.1**
*Confidential - Google Health Sciences Internal Regulatory Document*

---

## Global Distribution Strategy

# MODULE 3: QUALITY (3.2.P.2.4) - PHARMACEUTICAL DEVELOPMENT
## SECTION: COLD CHAIN AND DISTRIBUTION CONSIDERATIONS
### SUBSECTION: 3.2.P.2.4.1 GLOBAL DISTRIBUTION STRATEGY (GLUCOGEN-XR)

---

#### 1.0 INTRODUCTION AND SCOPE
The Global Distribution Strategy for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences, a Division of Google Cloud Life Sciences, is designed to ensure the uncompromising integrity of the drug product from the point of secondary packaging at our South San Francisco facility (3000 Innovation Drive) to the point of clinical or commercial administration. 

Given the thermosensitive nature of the GLP-1 receptor agonist peptide and the specific visco-elastic properties of the extended-release formulation, the distribution strategy adheres strictly to **ICH Q10 (Pharmaceutical Quality System)** and **USP <1079> (Good Storage and Distribution Practices for Drug Products)**. This document outlines the technical specifications for the cold chain infrastructure, the validated shipping configurations, and the real-time monitoring ecosystem powered by Google Cloud IoT Core and BigQuery analytics.

#### 2.0 THERAPEUTIC PRODUCT STABILITY PROFILE (TPSP)
The distribution strategy is predicated on the stability profile established in Section 3.2.P.8.3. Glucogen-XR is a sterile, aqueous-based peptide formulation that is highly sensitive to thermal excursions, mechanical shear, and light exposure.

| Parameter | Specification | Impact of Deviation |
| :--- | :--- | :--- |
| **Storage Temperature** | 2°C to 8°C (36°F to 46°F) | Aggregation, deamidation, and loss of potency |
| **Short-term Excursion** | Up to 25°C for maximum 72 hours | Accelerated degradation of peptide backbone |
| **Freezing Point** | -0.5°C | Irreversible denaturation and precipitate formation |
| **Light Sensitivity** | Protect from direct UV | Photodegradation of the peptide |
| **Vibration Sensitivity** | Low-Shear Requirement | Potential for particulate formation in the XR matrix |

---

#### 3.0 VALIDATED SHIPPING CONFIGURATION (VSC)
Google Health Sciences utilizes a multi-tiered thermal packaging strategy. All shipping containers are qualified per **ISTE Standard 7D** (Thermal Performance Testing for Shipping Containers).

##### 3.1 Passive Cooling Systems (PCS)
For domestic and regional distribution, Glucogen-XR utilizes the **GHS-ThermoShield-X1** series, a high-performance vacuum-insulated panel (VIP) system.

**Table 3.1: Technical Specifications of Shipping Containers**
| Component ID | Manufacturer | Material | R-Value | Target Duration |
| :--- | :--- | :--- | :--- | :--- |
| **VIP-72-GHS** | Vacu-Tech Corp | Vacuum Insulated Panels | > R-40 | 120 Hours (Controlled) |
| **PCM-05-BLUE** | Phase Change Materials | Bio-based PCM (5°C) | N/A | High Thermal Inertia |
| **CORR-DB-01** | Google Logistics | Double-wall Corrugated | N/A | Mechanical Protection |

##### 3.2 Active Cooling Systems (ACS)
For international transcontinental shipments (e.g., US to EU/APAC), active RKN/RAP units (e.g., Envirotainer Revo) are mandated. These units utilize compressor-based cooling and electric heating to maintain a strict 5.0°C setpoint regardless of ambient conditions.

---

#### 4.0 REAL-TIME MONITORING AND GOOGLE CLOUD INTEGRATION
A cornerstone of the Glucogen-XR distribution strategy is the integration of **GHS-SmartTrack IoT Nodes** within every shipping unit (Batch ID Tracking: GLUC-2025-001 through GLUC-2025-999).

##### 4.1 IoT Node Specifications
The nodes (Model: GHS-IoT-v4) provide the following telemetry:
1.  **Temperature:** NIST-traceable sensors (+/- 0.1°C accuracy)
2.  **Relative Humidity:** 0-100% range
3.  **Shock/Tilt:** 3-axis accelerometer (detecting events > 2G)
4.  **Geolocation:** GPS/GNSS and Wi-Fi triangulation
5.  **Light Exposure:** Detection of unauthorized box opening

##### 4.2 Data Pipeline (The "Cold Chain Digital Twin")
Data from the IoT nodes is streamed via the **Google Cloud IoT Core** to a **BigQuery** data warehouse. A custom AI model (Vertex AI) predicts potential temperature excursions based on weather patterns and transit delays.

**Formula 4.2.1: Mean Kinetic Temperature (MKT) Calculation**
The MKT is calculated for every shipment to assess the cumulative thermal stress:
$$T_{K} = \frac{\Delta H / R}{-\ln \left( \frac{e^{-\Delta H / RT_1} + e^{-\Delta H / RT_2} + \dots + e^{-\Delta H / RT_n}}{n} \right)}$$
*Where:*
*   $\Delta H$ = Activation energy (83.144 kJ/mol for Glucogen-XR)
*   $R$ = Universal gas constant
*   $T$ = Absolute temperature in Kelvin

---

#### 5.0 PROTOCOL: QUALIFICATION OF A NEW COLD CHAIN LANE
Before any new distribution route is activated, a "Lane Qualification" protocol must be executed using placebo batches (GLUC-2025-PLB).

##### 5.1 Step-by-Step Procedure
1.  **Risk Assessment:** Evaluate political stability, airport infrastructure, and seasonal weather extremes of the destination.
2.  **Mapping:** Conduct a 3-point mapping study (Winter/Summer/Shoulder) using empty containers with data loggers at 10 internal positions.
3.  **Operational Qualification (OQ):** Execute three (3) consecutive "stress test" shipments with simulated delays of 24 hours at 40°C.
4.  **Performance Qualification (PQ):** Execute three (3) consecutive shipments with live Glucogen-XR drug product (Batches GLUC-2025-401, GLUC-2025-402, GLUC-2025-403).
5.  **Release:** Post-shipment testing includes SEC-HPLC (purity), potency assays, and sub-visible particulate counts (USP <788>).

---

#### 6.0 LOGISTICS PARTNER AND WAREHOUSING DATA
Google Health Sciences maintains a Tier-1 list of Qualified Logistics Providers (QLPs).

**Table 6.1: Distribution Center (DC) Capabilities**
| DC Location | Tier | Storage Capacity (Pallets) | Backup Power Duration | Compliance Status |
| :--- | :--- | :--- | :--- | :--- |
| **San Francisco (SFO)** | Hub | 5,000 | 72 Hours (Diesel Gen) | FDA / EMA Inspected |
| **Amsterdam (AMS)** | Regional | 2,500 | 48 Hours | EU GDP Certified |
| **Singapore (SIN)** | Regional | 1,800 | 96 Hours | HSA Approved |

---

#### 7.0 EMERGENCY RESPONSE AND RECOVERY (ERR)
In the event of a deviation (e.g., temperature rise to 9°C), the following SOP (SOP-LOG-099) is triggered:

1.  **Automatic Alert:** The Google Cloud Pub/Sub sends an SMS/Email to the Quality Assurance (QA) Distribution Lead.
2.  **Quarantine:** The shipment is electronically locked in the ERP system (SAP S/4HANA).
3.  **Physical Inspection:** Upon arrival, the "Excursion Analysis Kit" is used to verify product integrity.
4.  **Stability Assessment:** QA compares the excursion duration/magnitude against the **Accelerated Stability Data (Section 3.2.P.8.1)**.
5.  **Disposition:**
    *   *Green:* Within validated MKT limits -> Release to stock.
    *   *Red:* Exceeds limits -> Immediate destruction and root cause analysis (RCA).

---

#### 8.0 BATCH-SPECIFIC DISTRIBUTION RECORDS (REPRESENTATIVE SAMPLE)
The following table reflects a historical summary of the distribution performance for the Glucogen-XR Pilot Program.

**Table 8.1: Distribution Performance Summary (Fiscal Year 2025)**
| Batch Number | Route | Start Date | End Date | Max Temp (°C) | Min Temp (°C) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-101 | SFO -> LHR | 2025-01-12 | 2025-01-14 | 6.2 | 3.8 | PASSED |
| GLUC-2025-105 | SFO -> JFK | 2025-02-03 | 2025-02-04 | 5.8 | 4.1 | PASSED |
| GLUC-2025-112 | SFO -> SYD | 2025-03-10 | 2025-03-14 | 7.9 | 2.5 | PASSED |
| GLUC-2025-115 | SFO -> FRA | 2025-04-20 | 2025-04-22 | 8.5* | 4.0 | QA REVIEW** |

*\*Excursion occurred due to tarmac delay in Frankfurt; MKT calculated and product remained within stability limits.*
*\*\*Batch GLUC-2025-115 subsequently released after SEC-HPLC confirmed purity > 98.5%.*

---

#### 9.0 REGULATORY REFERENCES
1.  **FDA 21 CFR Part 203:** Prescription Drug Marketing Act.
2.  **EU Guidelines 2013/C 343/01:** Good Distribution Practice (GDP).
3.  **WHO Annex 5:** Guide to good storage practices for pharmaceuticals.
4.  **USP <1117>:** Microbiological Best Laboratory Practices.
5.  **ISO 13485:2016:** Quality management systems for medical devices (applicable to pre-filled syringe components).

---

#### 10.0 CONCLUSION
The Glucogen-XR Global Distribution Strategy represents the pinnacle of pharmaceutical logistics, merging traditional cold-chain rigors with the computational power of Google Cloud. This multi-layered approach guarantees that every patient receiving Glucogen-XR receives a product that is as potent and safe as the day it was released from the Google Health Sciences manufacturing suite.

---

# Comparability Studies Across Manufacturing Sites

## Commercial Site vs. Clinical Site

### **MODULE 3: QUALITY**
### **SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT**
### **SUBSECTION 3.2.P.2.3 COMPARABILITY STUDIES ACROSS MANUFACTURING SITES**

---

#### **3.2.P.2.3.1 Executive Summary of Site Comparability**
This section provides a comprehensive evaluation of the comparability between Glucogen-XR (glucapeptide extended-release) drug product manufactured at the **Clinical Trial Material (CTM) Site** (Pilot Plant A, Building 4, Mountain View, CA) and the proposed **Commercial Manufacturing Site** (Google Health Sciences Facility, 3000 Innovation Drive, South San Francisco, CA).

The comparability exercise was executed in accordance with **ICH Q5E: Comparability of Biotechnological/Biological Products** and **FDA Guidance for Industry: Quality Systems Approach to Pharmaceutical CGMP Regulations**. The objective was to demonstrate that the transition from Phase III clinical manufacturing to commercial scale does not adversely impact the identity, strength, quality, purity, or potency of the drug product.

---

#### **3.2.P.2.3.2 Comparison of Manufacturing Facilities**

The transition involves a scale-up from the 200L clinical scale to the 2,000L commercial scale. While the manufacturing process remains fundamentally identical in terms of unit operations, the equipment train and automation systems have been modernized at the South San Francisco site to support high-throughput commercial demand.

##### **Table 1: Comparison of Clinical vs. Commercial Manufacturing Sites**

| Parameter | Clinical Site (CTM) | Commercial Site (GHS-SSF) | Rational for Change / Impact Assessment |
| :--- | :--- | :--- | :--- |
| **Location** | Bldg 4, Mountain View, CA | 3000 Innovation Dr, SSF, CA | Strategic consolidation of Google Health Sciences. |
| **Facility Class** | Multi-product R&D/Pilot | Dedicated Commercial Suite | Enhanced segregation and environmental controls. |
| **Scale (Bioreactor)** | 200L Single-Use (SUB) | 2,000L Stainless/SUB Hybrid | Scale-up Factor: 10x. Validated via mixing studies. |
| **Fill/Finish Line** | Manual/Semi-Auto Bosch | Fully Automated High-Speed Optima | Improved precision and reduced human intervention. |
| **Water System** | USP Purified Water | USP WFI (Water for Injection) | Upgraded to meet global pharmacopeia standards. |
| **DCS/Control System** | DeltaV v12.0 | Google Cloud Bio-OS (GHS-V1) | Enhanced data integrity and real-time monitoring. |
| **Cleaning Validation** | Manual Swabbing | Automated CIP (Clean-in-Place) | Increased reproducibility of sanitization cycles. |

---

#### **3.2.P.2.3.3 Manufacturing Process Equivalency**

The Glucogen-XR manufacturing process utilizes a proprietary GHS-CHO-001 cell line. The process flow remains consistent across sites.

##### **Step-by-Step Procedure Comparison**
1.  **Vial Thaw & Inoculum Expansion:** Identical protocols.
2.  **N-1 Seed Train:** Commercial site utilizes an additional expansion stage (N-2) to accommodate the 2,000L volume.
3.  **Production Bioreactor:** Parameters (pH 7.0 ± 0.1, Temp 36.5°C, DO 40%) are maintained via scaled-up agitation (P/V ratios constant).
4.  **Harvest/Clarification:** Transition from centrifugal separation to high-area depth filtration.
5.  **Purification (Protein A/IEX):** Column bed heights maintained; diameters increased to handle mass load.
6.  **Formulation/Fill-Finish:** Concentration target (10 mg/mL) remains identical.

---

#### **3.2.P.2.3.4 Comparability Batch Records and Inventory**

Three (3) representative batches from each site were selected for the Side-by-Side Comparability Study (SBSCS).

##### **Table 2: Representative Batches for Comparability Analysis**

| Site | Batch Number | Date of Manufacture | Scale | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Clinical** | GLUC-2025-001A | 14-JAN-2025 | 200L | Phase III Clinical Supply |
| **Clinical** | GLUC-2025-002A | 28-FEB-2025 | 200L | Phase III Clinical Supply |
| **Clinical** | GLUC-2025-003A | 15-MAR-2025 | 200L | Stability/Retain |
| **Commercial** | GLUC-2025-101C | 01-JUN-2025 | 2,000L | PPQ Batch 1 |
| **Commercial** | GLUC-2025-102C | 15-JUN-2025 | 2,000L | PPQ Batch 2 |
| **Commercial** | GLUC-2025-103C | 30-JUN-2025 | 2,000L | PPQ Batch 3 |

---

#### **3.2.P.2.3.5 Analytical Comparability Strategy**

The comparability assessment utilized a tiered approach based on the criticality of the attribute:
*   **Tier 1:** Statistical Equivalence Testing (Critical Quality Attributes - CQAs)
*   **Tier 2:** Quality Range Testing (Non-critical but important)
*   **Tier 3:** Visual Comparison/Trend Analysis (Process Indicators)

##### **Statistical Formula for Equivalence (Tier 1)**
The Equivalence Margin ($E$) was defined as:
$$E = 1.5 \times SD_{clinical}$$
Where $SD$ is the standard deviation of the clinical historical data set (n=15 batches).
The hypothesis tested:
$$H_0: |\mu_{comm} - \mu_{clin}| \ge E$$
$$H_1: |\mu_{comm} - \mu_{clin}| < E$$

---

#### **3.2.P.2.3.6 Comparative Results: Physicochemical Characterization**

##### **Table 3: Side-by-Side Analytical Data (Release Testing)**

| Test Parameter | Method | Clinical Mean (n=3) | Commercial Mean (n=3) | Acceptance Criteria | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Visual | Clear, Colorless | Clear, Colorless | Conforms | PASS |
| **Protein Conc.** | UV/Vis (A280) | 10.02 mg/mL | 10.05 mg/mL | 9.5 - 10.5 | PASS |
| **Purity (Monomer)** | SE-HPLC | 99.4% | 99.3% | $\ge$ 98.5% | PASS |
| **Charge Profile** | cIEF (Main) | 68.2% | 67.9% | 65.0 - 75.0% | PASS |
| **Potency (In Vitro)** | Cell-based | 102% | 99.8% | 80 - 125% | PASS |
| **Glycan Map** | HILIC-FLD | G0F: 42% | G0F: 41.5% | $\pm$ 5% of Clin | PASS |
| **Residual DNA** | qPCR | 0.8 pg/mg | 0.6 pg/mg | $\le$ 10 pg/mg | PASS |
| **Endotoxin** | LAL | < 0.05 EU/mg | < 0.05 EU/mg | $\le$ 0.5 EU/mg | PASS |

---

#### **3.2.P.2.3.7 Extended Characterization (Ortho-Methods)**

To ensure that the "higher-order structure" (HOS) was not impacted by the change in site or scale, Circular Dichroism (CD) and Hydrogen-Deuterium Exchange Mass Spectrometry (HDX-MS) were performed on Batch GLUC-2025-001A and GLUC-2025-101C.

1.  **Far-UV Circular Dichroism (190-260 nm):** Superimposable spectra were obtained. Secondary structure calculation:
    *   $\alpha$-helix: 34.2% (Clin) vs 34.1% (Comm)
    *   $\beta$-sheet: 22.1% (Clin) vs 22.3% (Comm)
2.  **HDX-MS Peptide Mapping:** Comparison of 142 peptic peptides covering 99.8% of the sequence showed no significant difference in deuterium uptake ($> \pm 0.5$ Da difference), confirming identical folding kinetics.

---

#### **3.2.P.2.3.8 Stability Data Comparison**

Accelerated stability studies ($25^\circ\text{C} / 60\% \text{ RH}$) were conducted for 6 months to compare degradation pathways.

##### **Table 4: 6-Month Accelerated Stability Comparison (Purity by SE-HPLC)**

| Time Point | Clinical (GLUC-2025-001A) | Commercial (GLUC-2025-101C) | Difference |
| :--- | :--- | :--- | :--- |
| **T=0** | 99.4% | 99.3% | 0.1% |
| **T=1 Month** | 99.0% | 98.9% | 0.1% |
| **T=3 Months** | 98.2% | 98.3% | -0.1% |
| **T=6 Months** | 97.4% | 97.5% | -0.1% |

**Statistical Conclusion:** The degradation rate constants ($k_{clin} = 0.33\%/\text{month}$; $k_{comm} = 0.30\%/\text{month}$) are not statistically different ($p > 0.05$), indicating equivalent shelf-life behavior.

---

#### **3.2.P.2.3.9 Process Performance Qualification (PPQ) Protocol**

The commercial site qualification followed **SOP-GHS-0992: Biological Process Validation**.

**Step 1: Mixing Studies (Scale-up Verification)**
*   Equipment: 2,000L SS Tank (ID: TANK-702)
*   Requirement: $T_{95}$ (95% homogeneity) within 15 minutes at 60 RPM.
*   Result: $T_{95}$ achieved in 11.4 minutes using conductivity tracer method.

**Step 2: Media Fill Simulation**
*   Three consecutive successful runs (Zero growth) at the South San Francisco Fill/Finish suite (Room 202).
*   Total units filled: 15,000 units per run.

**Step 3: Shipping Validation**
*   Simulated transport from SSF to Distribution Hub (Memphis, TN) using Smart-Pallet IoT monitoring.
*   Temp maintenance: $2-8^\circ\text{C}$ throughout 72-hour transit.

---

#### **3.2.P.2.3.10 Conclusion**

Based on the extensive physicochemical, biological, and stability data presented above, Glucogen-XR manufactured at the South San Francisco commercial site is highly comparable to the material used in Phase III clinical trials. All Tier 1 CQAs met the predefined equivalence margins. The increased scale and site change do not introduce new risks to the patient population or the efficacy of the GLP-1 receptor agonist.

**References:**
1. *ICH Q5E: Comparability of Biotechnological/Biological Products (2005).*
2. *USP <129> Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies.*
3. *Google Health Sciences Internal Report: GHS-REP-2025-042: Final Comparability Report.*

---

## Analytical Comparability

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2.2.1: PHARMACEUTICAL DEVELOPMENT – ANALYTICAL COMPARABILITY
### SUBSECTION: COMPARABILITY STUDIES ACROSS MANUFACTURING SITES (SITES A AND B)

---

#### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive analytical comparability assessment for **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced by **Google Health Sciences (GHS)**. This assessment is designed to support the bridging of Drug Product (DP) manufacturing from the Clinical Lead Site (Site A: GHS Innovation Drive, South San Francisco) to the Commercial Launch Site (Site B: GHS Global Manufacturing Hub, Durham, NC).

The comparability exercise follows the principles outlined in **ICH Q5E: Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process**, and **FDA Guidance for Industry: Development of Therapeutic Protein Biosimilars: Comparative Analytical Assessment and Other Quality Considerations**.

The objective is to demonstrate that the Glucogen-XR Drug Product produced at Site B is highly similar to the Drug Product produced at Site A, such that no adverse impact on safety, purity, or efficacy is expected.

#### 2.0 REGULATORY FRAMEWORK AND GUIDELINES
The analytical comparability program was executed in strict adherence to the following regulatory standards:
*   **ICH Q5E**: Comparability of Biotechnological/Biological Products.
*   **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q2(R1)**: Validation of Analytical Procedures: Text and Methodology.
*   **USP <129>**: Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for peptide scaffolds).
*   **USP <788>**: Particulate Matter in Injections.
*   **21 CFR Part 210/211**: Current Good Manufacturing Practice for Finished Pharmaceuticals.

#### 3.0 COMPARABILITY STRATEGY AND STATISTICAL APPROACH
GHS employed a "Three-Tiered" statistical approach for the evaluation of analytical comparability, ensuring that critical quality attributes (CQAs) are assessed with the appropriate level of rigor.

##### 3.1 Tiered Statistical Analysis Plan (SAP)
1.  **Tier 1: Equivalence Testing (Statistical Equivalence)**
    *   Applied to CQAs with the highest impact on efficacy and safety (e.g., Protein Content, Potency by Cell-Based Assay).
    *   *Acceptance Criteria:* The 90% confidence interval (CI) for the difference in means between Site A and Site B must fall within the equivalence margin (-1.5$\sigma$ to +1.5$\sigma$ of the Site A reference range).
2.  **Tier 2: Quality Ranges (Standard Deviation Approach)**
    *   Applied to CQAs with moderate impact or higher variability (e.g., Purity by RP-HPLC, Charge Heterogeneity by iCE).
    *   *Acceptance Criteria:* $\ge$95% of Site B values must fall within Mean $\pm$ 3SD of the Site A reference data.
3.  **Tier 3: Visual Comparison / Side-by-Side Analysis**
    *   Applied to qualitative or descriptive attributes (e.g., Color, Clarity, Peptide Mapping profiles).
    *   *Acceptance Criteria:* Profiles must be visually superimposable; no new peaks $>0.05\%$ in chromatograms.

#### 4.0 BATCH SELECTION AND MANUFACTURING HISTORY
Comparability was assessed using five (5) representative GMP batches from each site.

**Table 1: Description of Glucogen-XR Batches Evaluated in Comparability Study**

| Batch Number | Site | Scale | Date of Manufacture | Intended Use |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | Site A | 500L | 12-JAN-2025 | Clinical Phase III |
| GLUC-2025-002 | Site A | 500L | 04-FEB-2025 | Clinical Phase III |
| GLUC-2025-003 | Site A | 500L | 22-MAR-2025 | Clinical Phase III |
| GLUC-2025-004 | Site A | 500L | 15-APR-2025 | Stability Studies |
| GLUC-2025-005 | Site A | 500L | 02-MAY-2025 | Stability Studies |
| GLUC-2025-101 | Site B | 2000L | 10-JUN-2025 | Commercial PPQ 1 |
| GLUC-2025-102 | Site B | 2000L | 28-JUN-2025 | Commercial PPQ 2 |
| GLUC-2025-103 | Site B | 2000L | 15-JUL-2025 | Commercial PPQ 3 |
| GLUC-2025-104 | Site B | 2000L | 05-AUG-2025 | Commercial Reserve |
| GLUC-2025-105 | Site B | 2000L | 20-AUG-2025 | Commercial Reserve |

#### 5.0 ANALYTICAL METHODOLOGY AND CHARACTERIZATION PROTOCOLS

##### 5.1 Primary Structure and Sequence Confirmation
**Procedure: Reduced and Non-Reduced Peptide Mapping (LC-MS/MS)**
*   **Equipment:** Thermo Fisher Orbitrap Exploris 480 Mass Spectrometer linked to Vanquish Horizon UHPLC.
*   **Enzymatic Digestion:** Glucogen-XR samples were denatured with 6M Guanidine HCl, reduced with 10mM DTT at 56°C, and alkylated with 20mM Iodoacetamide. Digestion was performed using Trypsin (Promega Gold) at a 1:20 (w/w) ratio for 16 hours at 37°C.
*   **Analysis:** Digested peptides were separated on a C18 column (Acclaim RSLC, 2.1 x 150 mm, 2.2 µm) using a 120-minute gradient of 0.1% Formic Acid in Water/Acetonitrile.
*   **Criteria:** Sequence coverage must be $\ge$98% for both sites.

##### 5.2 Purity and Impurity Profiling
**Procedure: Reversed-Phase HPLC (RP-HPLC)**
*   **Protocol:** USP <621> compliant.
*   **Column:** Zorbax 300SB-C18, 4.6 x 250 mm, 5 µm.
*   **Mobile Phase A:** 0.1% TFA in Water.
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile.
*   **Detection:** 214 nm and 280 nm.

**Table 2: Comparative Purity Results (RP-HPLC % Main Peak)**

| Batch Number | Main Peak (%) | Pre-Peaks (%) | Post-Peaks (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Site A Mean (n=5)** | **98.42** | **0.76** | **0.82** | **1.58** |
| GLUC-2025-101 (B) | 98.45 | 0.72 | 0.83 | 1.55 |
| GLUC-2025-102 (B) | 98.39 | 0.78 | 0.83 | 1.61 |
| GLUC-2025-103 (B) | 98.41 | 0.75 | 0.84 | 1.59 |
| GLUC-2025-104 (B) | 98.48 | 0.70 | 0.82 | 1.52 |
| GLUC-2025-105 (B) | 98.44 | 0.74 | 0.82 | 1.56 |
| **Site B Mean** | **98.43** | **0.74** | **0.83** | **1.57** |
| *P-Value (t-test)* | 0.892 | 0.612 | 0.754 | 0.821 |

##### 5.3 Higher-Order Structure (HOS) Analysis
To ensure that the secondary and tertiary folding of the glucapeptide is consistent between sites, Circular Dichroism (CD) and Fourier Transform Infrared (FTIR) spectroscopy were employed.

**Procedure: Far-UV Circular Dichroism**
*   **Equipment:** Jasco J-1500 Spectropolarimeter.
*   **Conditions:** Nitrogen flushed, 0.1 cm pathlength cell, 190–260 nm scan.
*   **Data Processing:** Mean Residue Ellipticity $[\theta]$ was calculated and compared via Spectral Similarity Index (SSI).

**Table 3: Secondary Structure Distribution (Far-UV CD)**

| Parameter | Site A Average (%) | Site B Average (%) | Acceptance Margin | Result |
| :--- | :--- | :--- | :--- | :--- |
| Alpha-Helix | 42.4 $\pm$ 1.1 | 42.1 $\pm$ 0.9 | $\pm$ 3.0% | Pass |
| Beta-Sheet | 12.8 $\pm$ 0.5 | 13.1 $\pm$ 0.4 | $\pm$ 3.0% | Pass |
| Random Coil | 44.8 $\pm$ 1.5 | 44.8 $\pm$ 1.2 | $\pm$ 3.0% | Pass |

#### 6.0 BIOLOGICAL ACTIVITY (POTENCY)
The potency of Glucogen-XR is determined by a cell-based luciferase reporter gene assay using a CHO cell line transfected with the human GLP-1 receptor (GLP1R).

**Procedure: Potency Assay (GHS-SOP-BP-09)**
1.  Cells are seeded at $2.0 \times 10^4$ cells/well in a 96-well plate.
2.  Cells are incubated with serial dilutions of Reference Standard or Test Sample (Site A vs. Site B).
3.  cAMP production triggers luciferase expression.
4.  Luminescence is measured after 4 hours using a multimode plate reader.
5.  Relative potency is calculated using a 4-parameter logistic (4-PL) curve fit (PLA 3.0 software).

**Table 4: Statistical Equivalence Testing for Potency (Relative to Reference Std)**

| Batch Number | Potency (% Relative) | Site Mean | Lower 90% CI | Upper 90% CI | Equivalence Margin |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 102% | **Site A Mean:** | - | - | - |
| GLUC-2025-002 | 98% | **100.2%** | - | - | - |
| GLUC-2025-003 | 101% | SD: 1.64 | - | - | - |
| GLUC-2025-101 | 99% | **Site B Mean:** | **98.8%** | **101.4%** | **[95.0%, 105.0%]** |
| GLUC-2025-102 | 101% | **100.1%** | - | - | - |
| GLUC-2025-103 | 100% | SD: 1.14 | - | - | - |

*Analysis: The 90% CI for the difference in means is fully contained within the -1.5 to +1.5 standard deviation margin of Site A, demonstrating statistical equivalence in biological activity.*

#### 7.0 PRODUCT-RELATED VARIANTS (CHARGE HETEROGENEITY)
Charge variants (acidic and basic species) were evaluated using imaged Capillary Isoelectric Focusing (iCE3).

**Table 5: Charge Heterogeneity Analysis by iCE3**

| Batch Number | Acidic Species (%) | Main Peak (%) | Basic Species (%) |
| :--- | :--- | :--- | :--- |
| **Site A Range** | **12.1 – 14.5** | **82.0 – 85.5** | **2.2 – 3.8** |
| GLUC-2025-101 | 13.2 | 84.1 | 2.7 |
| GLUC-2025-102 | 13.5 | 83.8 | 2.7 |
| GLUC-2025-103 | 13.1 | 84.2 | 2.7 |
| GLUC-2025-104 | 12.9 | 84.4 | 2.7 |
| GLUC-2025-105 | 13.0 | 84.3 | 2.7 |
| **Site B Mean** | **13.14** | **84.16** | **2.7** |

#### 8.0 GLYCOSYLATION ANALYSIS (N-GLYCAN PROFILING)
Although Glucogen-XR is a peptide-based scaffold, the CHO-K1 expression system introduces a single N-glycosylation site at Asn-24. Comparability of glycan species is critical for pharmacokinetic (PK) consistency.

**Method:** PNGase-F release followed by labeling with 2-aminobenzamide (2-AB) and NP-HPLC detection.

**Table 6: Comparison of Major N-Glycan Species**

| Glycan Species | Site A (Mean %) | Site B (Mean %) | Difference | Significance (p<0.05) |
| :--- | :--- | :--- | :--- | :--- |
| G0F | 48.2 | 47.9 | -0.3 | No |
| G1F | 32.5 | 32.8 | +0.3 | No |
| G2F | 8.4 | 8.6 | +0.2 | No |
| Man5 | 2.1 | 2.0 | -0.1 | No |
| Sialylated | 4.8 | 4.7 | -0.1 | No |

#### 9.0 STABILITY COMPARABILITY (FORCED DEGRADATION)
To further challenge the comparability of the product from both sites, forced degradation studies were performed. This ensures that the degradation pathways (deamidation, oxidation, and aggregation) are identical.

**Stress Conditions:**
1.  **Thermal:** 40°C / 75% RH for 28 days.
2.  **Oxidative:** 0.3% $H_2O_2$ for 4 hours.
3.  **Photostability:** 1.2 million lux hours (ICH Q1B).

*Results Summary:* Both Site A and Site B batches exhibited identical degradation kinetics. The primary degradation product under thermal stress was identified via LC-MS as deamidation at Asp-17. The rate of deamidation was calculated as $0.12\% \pm 0.01\%$/day for Site A and $0.11\% \pm 0.01\%$/day for Site B.

#### 10.0 CONCLUSION
Extensive analytical comparability studies involving primary, secondary, and tertiary structure, purity, impurity profiles, biological potency, and degradation pathways demonstrate that **Glucogen-XR Drug Product manufactured at Site B is analytically comparable to the material manufactured at Site A.**

The slight differences observed in minor glycan species and charge variants are well within the pre-defined Quality Ranges (Tier 2) and are not expected to impact the safety or efficacy profile of the product. Based on these data, the manufacturing process at Site B is considered validated and bridged.

---
**Approvals:**
*   *Dr. Alicia Chen, VP Regulatory Affairs, Google Health Sciences*
*   *Dr. Marcus Thorne, Head of Biopharmaceutical Manufacturing, Site B*
*   *Date: 15-SEP-2025*

---

## Stability Comparability

### **3.2.P.2.6.4.1. Stability Comparability: Glucogen-XR (glucapeptide extended-release)**

#### **1.0 Introduction and Scope**
The stability comparability program for Glucogen-XR (glucapeptide extended-release) was designed in accordance with **ICH Q5E (Comparability of Biotechnological/Biological Products)** and **ICH Q1A(R2) (Stability Testing of New Drug Substances and Products)** to demonstrate that the relocation of manufacturing from the Pilot Plant (Site A: South San Francisco, CA) to the Commercial Launch Facility (Site B: Google Health Sciences Manufacturing Center, Vacaville, CA) does not adversely impact the degradation profile, shelf-life, or storage requirements of the finished drug product.

This section provides an exhaustive analysis of real-time, accelerated, and stress stability data comparing three (3) primary validation batches from Site A against three (3) process performance qualification (PPQ) batches from Site B.

#### **2.0 Regulatory Framework and Compliance Standards**
The stability protocols were executed in strict adherence to the following regulatory guidances and compendial standards:
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (applied where applicable to peptide-fusion platforms).
*   **USP <787> / <788>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **FDA Guidance for Industry:** Q1A(R2) Stability Testing of New Drug Substances and Products (Revision 2).

#### **3.0 Comparison of Manufacturing Batches**
The following batches were utilized for the formal stability comparability exercise. All batches were manufactured using the GHS-CHO-001 cell line and the proprietary extended-release PLGA-microsphere encapsulation technology.

**Table 3.2.P.2.6.4.1-1: Batches Evaluated in Stability Comparability Study**

| Batch Number | Site of Manufacture | Scale (L) | Manufacturing Date | Fill Volume (mL) | Intended Use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Site A (SSF) | 2,000 | 12-JAN-2025 | 1.0 mL | Clinical/Stability |
| **GLUC-2025-002** | Site A (SSF) | 2,000 | 25-JAN-2025 | 1.0 mL | Clinical/Stability |
| **GLUC-2025-003** | Site A (SSF) | 2,000 | 05-FEB-2025 | 1.0 mL | Clinical/Stability |
| **GLUC-2025-PPQ-01**| Site B (Vacaville) | 10,000 | 15-MAR-2025 | 1.0 mL | Process Validation |
| **GLUC-2025-PPQ-02**| Site B (Vacaville) | 10,000 | 22-MAR-2025 | 1.0 mL | Process Validation |
| **GLUC-2025-PPQ-03**| Site B (Vacaville) | 10,000 | 29-MAR-2025 | 1.0 mL | Process Validation |

---

#### **4.0 Stability Protocol and Test Matrix**
The stability program utilizes a matrixing design as per ICH Q1D to maximize statistical power while maintaining efficiency. However, for the primary comparability batches, full testing was performed at every interval.

**Table 3.2.P.2.6.4.1-2: Stability Storage Conditions**

| Condition | Temperature (°C) | Relative Humidity (RH) | Duration |
| :--- | :--- | :--- | :--- |
| **Long-Term** | 5°C ± 3°C | Ambient | 24 Months |
| **Accelerated** | 25°C ± 2°C | 60% RH ± 5% | 6 Months |
| **Stress** | 40°C ± 2°C | 75% RH ± 5% | 1 Month |
| **Photostability**| ICH Q1B Option 2 | N/A | Total illumination >1.2M lux-hr |

##### **4.1 Analytical Methodologies for Stability Assessment**
The following stability-indicating methods were utilized to compare the degradation kinetics of Site A and Site B batches:

1.  **RP-HPLC (Purity/Related Substances):** Measures deamidation and oxidation (Met14, Met20).
2.  **SE-HPLC (Aggregation):** Quantifies high molecular weight species (HMWS) and fragments.
3.  **CEX-HPLC (Charge Heterogeneity):** Monitors acidic and basic variants.
4.  **In Vitro Bioassay (Potency):** cAMP-based reporter gene assay measuring GLP-1 receptor activation (EC50).
5.  **Micro-Flow Imaging (MFI):** Characterization of subvisible particles (2 µm to 100 µm).
6.  **Differential Scanning Calorimetry (DSC):** Assessment of thermal unfolding temperature (Tm).

---

#### **5.0 Statistical Methods for Comparability Assessment**
To demonstrate "no significant difference" between Site A and Site B, the following statistical analyses were performed:

*   **Analysis of Covariance (ANCOVA):** Used to compare the slopes of the degradation lines for Site A and Site B batches over time.
*   **Equivalence Testing:** A Two One-Sided Test (TOST) approach was used for purity and potency data at the T=6 month (Accelerated) and T=12 month (Long-term) marks.
*   **Confidence Intervals:** 95% CIs were calculated for the rate of degradation ($k$).

**Formula 1: Degradation Rate Constant Calculation**
$$ln(C/C_0) = -kt$$
*Where $C$ is the concentration/purity at time $t$, $C_0$ is the initial value, and $k$ is the first-order degradation rate constant.*

---

#### **6.0 Detailed Results: Long-Term Stability (5°C ± 3°C)**

**Table 3.2.P.2.6.4.1-3: Comparative SE-HPLC Purity (Main Peak %) at 5°C**

| Time Point | Site A (Mean, n=3) | Site A (RSD %) | Site B (Mean, n=3) | Site B (RSD %) | Diff (B-A) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T=0 | 99.42% | 0.05% | 99.45% | 0.04% | +0.03% |
| T=3M | 99.38% | 0.08% | 99.39% | 0.06% | +0.01% |
| T=6M | 99.31% | 0.11% | 99.30% | 0.09% | -0.01% |
| T=9M | 99.25% | 0.14% | 99.27% | 0.12% | +0.02% |
| T=12M | 99.18% | 0.18% | 99.19% | 0.15% | +0.01% |

**Evaluation:** The SE-HPLC data shows no significant increase in HMWS for Site B batches compared to Site A. Both sites maintain >99% purity through 12 months at the intended storage temperature.

---

#### **7.0 Detailed Results: Accelerated Stability (25°C ± 2°C / 60% RH)**

The accelerated condition is the most sensitive indicator of comparability in the degradation pathway.

**Table 3.2.P.2.6.4.1-4: Comparative RP-HPLC Total Related Substances (%) at 25°C**

| Time Point | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-PPQ-01 | GLUC-2025-PPQ-02 | Mean Site A | Mean Site B |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T=0 | 0.45% | 0.48% | 0.44% | 0.46% | 0.47% | 0.45% |
| T=1M | 0.88% | 0.91% | 0.86% | 0.89% | 0.90% | 0.88% |
| T=3M | 1.65% | 1.72% | 1.68% | 1.70% | 1.69% | 1.69% |
| T=6M | 2.95% | 3.10% | 3.02% | 2.98% | 3.03% | 3.00% |

**Degradation Kinetics Analysis:**
The degradation rate ($k$) for total related substances at 25°C was calculated:
*   **Site A:** $k = 0.426$ %/month ($R^2 = 0.998$)
*   **Site B:** $k = 0.424$ %/month ($R^2 = 0.999$)
The difference in slopes is statistically insignificant ($p = 0.84$), confirming that the chemical degradation pathways (primarily deamidation at Asn28) are identical across sites.

---

#### **8.0 Biological Potency Comparability (Bioassay)**

Potency is expressed as a percentage of the Reference Standard (GHS-RS-2024).

**Table 3.2.P.2.6.4.1-5: Potency (% Relative Activity) – Stability Comparison**

| Condition | Time (Months) | Site A (Avg %) | Site B (Avg %) | 90% CI of Diff |
| :--- | :--- | :--- | :--- | :--- |
| 5°C | T=12 | 102% | 101% | [-2.5%, 1.8%] |
| 25°C | T=6 | 94% | 95% | [-1.9%, 2.2%] |
| 40°C | T=1 | 82% | 83% | [-2.1%, 2.4%] |

*Acceptance Criteria: 90% CI of the difference must fall within [-10%, 10%].*
**Result:** PASSED. Site B batches exhibit equivalent biological activity retention compared to Site A.

---

#### **9.0 Forced Degradation and Stress Testing (Photostability & Thermal Stress)**

##### **9.1 Photostability (ICH Q1B)**
Vials from both sites were exposed to a minimum of 1.2 million lux-hours of visible light and 200 watt-hours/m² of UV light.

**Table 3.2.P.2.6.4.1-6: Photostability Outcomes**

| Parameter | Site A (Post-Exposure) | Site B (Post-Exposure) |
| :--- | :--- | :--- |
| **Appearance** | Clear to slightly opalescent | Clear to slightly opalescent |
| **Main Peak (RP-HPLC)** | 94.2% | 94.5% |
| **Oxidized Species** | 3.1% | 2.9% |
| **HMW Species** | 1.2% | 1.1% |

Both sites showed a similar sensitivity to light, resulting in a minor increase in oxidation at the Met14 residue. Protective secondary packaging (amber glass or light-shielding cartons) is confirmed as effective for both sites.

---

#### **10.0 Subvisible Particulate Matter (USP <788>)**
The move to the commercial facility involved the use of a new automated filling line (FL-002 in Vacaville). Particulate matter was monitored to ensure the high-speed filling process did not induce protein aggregation via shear stress.

**Table 3.2.P.2.6.4.1-7: USP <788> Particulate Counts (Mean per container)**

| Batch | Size ≥ 10 µm (Limit <6000) | Size ≥ 25 µm (Limit <600) |
| :--- | :--- | :--- |
| GLUC-2025-001 (Site A) | 142 | 8 |
| GLUC-2025-002 (Site A) | 165 | 12 |
| GLUC-2025-PPQ-01 (Site B) | 138 | 9 |
| GLUC-2025-PPQ-02 (Site B) | 150 | 11 |

**Conclusion:** Site B batches demonstrate lower or equivalent particulate counts, validating the aseptic filling process at the commercial site.

---

#### **11.0 Conclusion on Stability Comparability**
The comprehensive stability data package for Glucogen-XR demonstrates that the drug product manufactured at the Google Health Sciences Vacaville facility (Site B) is highly comparable to the clinical batches manufactured at the South San Francisco Pilot Plant (Site A). 

1.  **Chemical Degradation:** Slopes for impurities (RP-HPLC) are statistically equivalent.
2.  **Physical Stability:** Aggregation rates (SE-HPLC) and particulate profiles remain well within specifications.
3.  **Biological Activity:** Potency retention is consistent across all temperature conditions.
4.  **Shelf Life:** The data supports the proposed shelf-life of 24 months at 2-8°C for commercial product manufactured at Site B.

No new degradation products were observed in the Site B batches, and the impurity profile remains qualitatively and quantitatively consistent with the established profile for Glucogen-XR.

---
**Footnotes & References:**
1. *Google Health Sciences Report GHS-STAB-2025-04: Comparison of Accelerated Stability Profiles for Site A and Site B.*
2. *Statistical Analysis Plan SAP-GLUC-009: Equivalence testing for Site-to-Site Comparability.*
3. *USP <129> Analytical Procedures for Recombinant Proteins.*

---

# Regulatory Guidance Application

## ICH Q8 (Pharmaceutical Development)

# MODULE 3: QUALITY (3.2.P.2 PHARMACEUTICAL DEVELOPMENT)
## SECTION: 3.2.P.2.1.1 REGULATORY GUIDANCE APPLICATION: ICH Q8(R2) COMPLIANCE STRATEGY

### 1.0 INTRODUCTION AND SCOPE
This subsection details the systematic approach to the pharmaceutical development of **Glucogen-XR (glucapeptide extended-release)**, a long-acting GLP-1 receptor agonist, in strict accordance with the International Council for Harmonisation (ICH) Guideline Q8(R2): Pharmaceutical Development. 

Google Health Sciences (GHS) has implemented an "Enhanced Approach" to development, integrating Quality by Design (QbD) principles, formal risk assessments, and Design of Experiments (DoE) to establish a robust Design Space and Control Strategy. This document provides the scientific rationale for the selection of the dosage form, formulation components, container closure system, and manufacturing process, ensuring that the Critical Quality Attributes (CQAs) of Glucogen-XR are consistently met throughout the product lifecycle.

### 2.0 QUALITY TARGET PRODUCT PROFILE (QTPP)
The QTPP forms the basis of design for Glucogen-XR. It defines the performance characteristics required to ensure the safety and efficacy of the 2.5 mg/mL, 5.0 mg/mL, and 10.0 mg/mL strengths administered via a multi-dose pre-filled pen.

#### Table 2.1: Quality Target Product Profile (QTPP) for Glucogen-XR
| Element | Target | Rationale |
| :--- | :--- | :--- |
| **Dosage Form** | Extended-Release Injectable Solution | Required for once-weekly subcutaneous administration to improve patient compliance. |
| **Route of Administration** | Subcutaneous Injection | Standard for GLP-1 receptor agonists; allows for self-administration. |
| **Dosage Strengths** | 2.5 mg/mL, 5.0 mg/mL, 10.0 mg/mL | To allow for dose escalation and maintenance as per clinical requirements. |
| **Pharmacokinetics** | $T_{max}$ of 48-72h; Half-life $>160$ hours | Essential for steady-state glycemic control over a 7-day period. |
| **Stability** | 24 months at 2-8°C; 30 days at 25°C (In-use) | Necessary for global supply chain and patient convenience. |
| **Sterility** | Sterile (as per USP <71>) | Requirement for parenteral dosage forms. |
| **Particulate Matter** | Meets USP <788> limits | Safety requirement for subcutaneous injections. |
| **Assay (Potency)** | 95.0% - 105.0% of label claim | Ensures therapeutic efficacy and safety. |
| **pH** | 6.8 ± 0.2 | Optimized for peptide stability and patient comfort (iso-osmotic). |

---

### 3.0 IDENTIFICATION OF CRITICAL QUALITY ATTRIBUTES (CQAs)
The CQAs of Glucogen-XR were identified based on the QTPP and the potential impact of variability on patient safety and efficacy.

#### Table 3.1: Critical Quality Attributes (CQAs) and Justification
| CQA | Target/Limit | Impact on Safety/Efficacy |
| :--- | :--- | :--- |
| **Identity** | Positive for Glucapeptide | Ensures the correct active ingredient is present. |
| **Assay** | 95.0% - 105.0% | Impact on glycemic control (efficacy) and hypoglycemia risk (safety). |
| **Purity (Related Substances)** | Total Impurities $\leq$ 2.0% | Potential for immunogenicity or altered PK/PD profile. |
| **High Molecular Weight Species (HMWS)** | $\leq$ 1.0% | Aggregates are a primary driver of anti-drug antibodies (ADA). |
| **pH** | 6.6 - 7.0 | Stability of the peptide and injection site reaction. |
| **Osmolality** | 270 - 330 mOsm/kg | Patient comfort during subcutaneous administration. |
| **Preservative Content (m-Cresol)** | 90.0% - 110.0% | Essential for multi-dose antimicrobial efficacy (USP <51>). |
| **Endotoxins** | $\leq$ 50 EU/mL | Prevents pyrogenic reactions. |

---

### 4.0 FORMULATION DEVELOPMENT (ICH Q8 SECTION 2.2)
The formulation of Glucogen-XR was optimized through a series of compatibility studies and statistical DoE to ensure the stability of the glucapeptide in an aqueous environment.

#### 4.1 Excipient Selection and Compatibility
The selection of excipients (m-Cresol, L-Histidine, Polysorbate 20, and Mannitol) was based on their established safety profiles in FDA-approved biologics and their specific function in stabilizing the Glucogen-XR molecule.

**Protocol GLUC-DEV-P-012: Excipient Interaction Screening**
1. **Objective:** Evaluate the impact of varying concentration of m-Cresol (preservative) and Polysorbate 20 (surfactant) on HMWS formation.
2. **Procedure:** Prepare 12 formulations with Glucapeptide (5.0 mg/mL) varying m-Cresol (1.5 - 3.5 mg/mL) and PS-20 (0.01% - 0.10%).
3. **Analysis:** SEC-HPLC for HMWS and RP-HPLC for chemical purity after 4 weeks at 40°C.

#### Table 4.1.1: Factorial Design Results for Excipient Optimization (Batch GLUC-2025-DEV01)
| Run ID | m-Cresol (mg/mL) | PS-20 (%) | HMWS (%) | Purity (%) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01-A | 1.5 | 0.01 | 0.45 | 98.2 | Pass |
| 01-B | 3.5 | 0.01 | 0.89 | 97.1 | Pass |
| 01-C | 1.5 | 0.10 | 0.42 | 98.4 | Pass |
| 01-D | 3.5 | 0.10 | 0.78 | 97.5 | Pass |
| 01-E (Center) | 2.5 | 0.05 | 0.55 | 98.0 | Pass |

**Mathematical Model for HMWS Growth:**
$HMWS(\%) = 0.55 + 0.15 \times [mCresol] - 0.03 \times [PS20] + \epsilon$

*Calculation Analysis:* The statistical analysis (ANOVA) indicated that m-Cresol concentration has a statistically significant effect ($p < 0.001$) on HMWS formation, necessitating strict control limits (2.8 - 3.2 mg/mL) in the final drug product.

---

### 5.0 MANUFACTURING PROCESS DEVELOPMENT (ICH Q8 SECTION 2.3)
The manufacturing process for Glucogen-XR comprises Formulation/Compounding, Sterile Filtration, and Aseptic Filling.

#### 5.1 Unit Operation 1: Compounding
The compounding process involves the sequential addition of excipients to Water for Injection (WFI), followed by the addition of the Glucapeptide Drug Substance. 

**Risk Assessment (FMEA) for Compounding:**
*   **Risk:** Incomplete dissolution of the peptide leading to low assay.
*   **Mitigation:** Implementation of high-shear mixing parameters ($1500 \pm 100$ RPM) and real-time conductivity monitoring.

#### Table 5.1.1: Design Space for Compounding Parameters (Batch Series GLUC-2025-CPD)
| Parameter | Range Tested | Proposed Operating Range | Impact on CQA |
| :--- | :--- | :--- | :--- |
| Mixing Speed | 500 - 2500 RPM | 1200 - 1800 RPM | Homogeneity/Assay |
| Temperature | 2°C - 25°C | 2°C - 8°C | HMWS/Degradation |
| Dissolution Time | 10 - 120 mins | 30 - 60 mins | Assay/Solubility |

#### 5.2 Unit Operation 2: Sterile Filtration
Filtration is performed using a redundant 0.22 $\mu$m PES (Polyethersulfone) filter system. 

**Filter Validation Protocol (Ref: ICH Q8, USP <797>):**
*   **Vmax Studies:** Conducted to determine the maximum volume of Glucogen-XR that can be filtered per unit area before fouling. 
*   **Adsorption Study:** Quantified the loss of Glucapeptide and m-Cresol to the filter membrane.
    *   *Result:* Peptide adsorption < 0.5% at volumes > 10L. 

---

### 6.0 CONTROL STRATEGY AND DESIGN SPACE
Based on the characterization studies (DoE) and risk assessments, a Design Space has been established where the interaction of process parameters ensures CQA compliance.

#### 6.1 Design Space Definition
The Design Space for Glucogen-XR is defined by the multidimensional combination of input variables (e.g., pH, Temperature, Mixing Speed) and material attributes.

**Calculation of Proven Acceptable Ranges (PAR):**
The PAR for pH was determined using a 3-month accelerated stability study.
*   $pH < 6.5$: Increased deamidation of the peptide.
*   $pH > 7.2$: Increased aggregation (HMWS).
*   **Established PAR:** 6.6 to 7.0.

#### Table 6.1.1: Summary of Control Strategy for Commercial Batches (GLUC-2025-XXX)
| Process Step | Control Parameter | Method of Control | Frequency |
| :--- | :--- | :--- | :--- |
| Compounding | pH | In-line Probe | Continuous |
| Compounding | Bioburden | USP <61> | Pre-filtration |
| Filling | Fill Volume | IPC (Gravimetric) | Every 15 mins |
| Filling | Oxygen Headspace | Laser Headspace Analysis | 100% of Vials |

---

### 7.0 CONTAINER CLOSURE SYSTEM (ICH Q8 SECTION 2.4)
Glucogen-XR is packaged in a Type I Borosilicate glass cartridge with a bromobutyl plunger and a disc seal.

**Leachable and Extractable (L&E) Assessment:**
Extensive studies were conducted as per USP <1663> and <1664>. 
*   **Batch GLUC-2025-LE01:** Cartridges were stored with drug product for 18 months at 25°C/60% RH.
*   **Finding:** No leachables were detected above the Analytical Evaluation Threshold (AET) of 1.5 $\mu$g/day. Silicon oil migration from the plunger was quantified at $< 0.1$ mg/cartridge, posing no risk to peptide stability or patient safety.

---

### 8.0 CONCLUSION
The development of Glucogen-XR has followed a rigorous ICH Q8(R2) framework. Through the application of QbD, Google Health Sciences has demonstrated a deep scientific understanding of the product and process. The established Design Space and Control Strategy provide a high degree of assurance that all commercial batches (GLUC-2025-XXX) will meet their predefined quality specifications, ensuring the consistent delivery of therapeutic Glucapeptide to patients with Type 2 Diabetes.

---
**References:**
1. ICH Q8(R2): Pharmaceutical Development.
2. USP <1151>: Pharmaceutical Dosage Forms.
3. FDA Guidance for Industry: Process Validation (2011).
4. Google Health Sciences Internal Report: GHS-GLUC-RPT-004 (Peptide Stability).

---

## ICH Q9 (Quality Risk Management)

# MODULE 3: QUALITY (3.2.P.2 PHARMACEUTICAL DEVELOPMENT)
## SECTION 3.2.P.2.7: REGULATORY GUIDANCE APPLICATION
### SUBSECTION 3.2.P.2.7.1: ICH Q9 QUALITY RISK MANAGEMENT (QRM) IMPLEMENTATION

---

#### 1.0 INTRODUCTION AND SCOPE
Google Health Sciences (GHS), a division of Google Cloud Life Sciences, has implemented a robust Quality Risk Management (QRM) framework for the development, manufacturing, and lifecycle management of **Glucogen-XR (glucapeptide extended-release)**. In alignment with the **ICH Q9(R1) Guideline on Quality Risk Management**, GHS utilizes a systematic process for the assessment, control, communication, and review of risks to the quality of the drug product across the product lifecycle.

The primary objective of this QRM program is to ensure that the safety, efficacy, and quality of Glucogen-XR are maintained through a science-based and data-driven approach. By integrating Google Cloud’s advanced computational capabilities with traditional pharmaceutical risk assessment tools (FMEA, HACCP, PHA), GHS identifies potential failure modes in the extended-release matrix of the glucapeptide and mitigates them prior to pivotal clinical batch manufacturing.

#### 2.0 RISK MANAGEMENT METHODOLOGY
The GHS QRM process follows the lifecycle model defined in ICH Q9, consisting of:
1.  **Risk Assessment**: Identification, Analysis, and Evaluation.
2.  **Risk Control**: Reduction and Acceptance.
3.  **Risk Communication**: Documentation and Stakeholder Reporting.
4.  **Risk Review**: Periodic monitoring of events and trends.

##### 2.1 Risk Assessment Tools and Software
GHS utilizes the **GHS-QRM-Cloud v4.2** platform, a proprietary software suite that integrates real-time manufacturing data from the South San Francisco facility (3000 Innovation Drive) with predictive modeling for peptide stability.

| Tool | Application for Glucogen-XR | Reference Standard |
| :--- | :--- | :--- |
| **FMEA (Failure Mode & Effects Analysis)** | Detailed analysis of the fill-finish process and pen-injector assembly. | IEC 60812 |
| **HACCP (Hazard Analysis & Critical Control Points)** | Identification of microbial contamination risks in the peptide synthesis chain. | WHO TRS 908 |
| **PHA (Preliminary Hazard Analysis)** | Early-stage assessment of the GHS-CHO-001 cell line stability. | ISO 14971 |
| **FTA (Fault Tree Analysis)** | Investigation of potential "burst release" kinetics in the XR formulation. | NUREG-0492 |

#### 3.0 RISK ASSESSMENT FOR GLUCOGEN-XR (GLUC-2025-XXX SERIES)
This section details the risk assessments performed on the initial clinical batches (GLUC-2025-001 through GLUC-2025-015) to define the Critical Quality Attributes (CQAs) and Critical Process Parameters (CPPs).

##### 3.1 Initial Risk Identification (Step-by-Step Protocol)
1.  **Selection of Multi-disciplinary Team:** Includes Lead Formulator, Regulatory Affairs Expert (25+ yrs exp), Analytical Chemist, and Cloud Systems Architect.
2.  **Definition of Quality Target Product Profile (QTPP):** Focus on the 7-day sustained release profile of the glucapeptide.
3.  **Process Mapping:** Deployment of high-resolution flowcharts for the GHS-CHO-001 fermentation process.
4.  **Identification of Hazards:** Use of Ishikawa (Fishbone) diagrams to categorize risks into: Materials, Machine, Man, Method, Mother Nature (Environment), and Measurement.

##### 3.2 Detailed FMEA for Glucogen-XR Extended-Release Matrix
The following table represents the FMEA conducted for the formulation of the extended-release microspheres, which are critical for the Type 2 Diabetes Mellitus indication to prevent hypoglycemic spikes.

**Table 3.2.P.2.7.1-1: FMEA for Glucogen-XR Formulation (Batch Series GLUC-2025-XXX)**

| Process Step | Potential Failure Mode | Potential Cause | Impact on CQA | S (1-10) | O (1-5) | D (1-5) | RPN | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Peptide Loading** | Incomplete encapsulation | Improper pH during primary emulsion | Accelerated release (Burst) | 9 | 3 | 2 | **54** | Implementation of AI-driven pH control loop in Bioreactor GHS-BR-09. |
| **Solvent Evaporation** | Residual Dichloromethane (DCM) | Insufficient vacuum duration | Toxicity / Patient Safety | 10 | 2 | 2 | **40** | GC-Headspace testing for every batch (USP <467>). |
| **Sterile Filtration** | Peptide Aggregation | Shear stress at 0.22μm membrane | Reduced Potency | 8 | 4 | 3 | **96** | Transition to low-protein binding PVDF filters; Max pressure <1.5 bar. |
| **Pen Assembly** | Needle Occlusion | Peptide precipitation in cannula | Dose Inaccuracy | 9 | 2 | 4 | **72** | Automated vision inspection system (GHS-VIS-01). |

*Note: S=Severity, O=Occurrence, D=Detectability, RPN=Risk Priority Number (S x O x D). RPN > 60 requires mandatory mitigation.*

#### 4.0 RISK CONTROL AND REDUCTION PLAN
Based on the RPN values identified in Table 3.2.P.2.7.1-1, GHS initiated the following Risk Reduction protocols.

##### 4.1 Mitigation of Peptide Aggregation (RPN 96)
To address the high risk of peptide aggregation during the filtration of GLUC-2025-004, the following control strategy was implemented:
*   **Action 1:** Installation of a peristaltic pump (Model: Watson-Marlow 530) to ensure low-shear transfer.
*   **Action 2:** Implementation of real-time Dynamic Light Scattering (DLS) monitoring (Malvern Zetasizer) to detect sub-visible particles.
*   **Action 3:** Temperature control of the filtration suite maintained at 5°C ± 2°C.

**Statistical Verification of Risk Reduction:**
Post-mitigation, the Occurrence (O) was reduced from 4 to 1, and Detectability (D) improved from 3 to 1.
*Revised RPN = 8 (S) x 1 (O) x 1 (D) = 8.*

#### 5.0 INTEGRATION WITH QUALITY BY DESIGN (QbD)
ICH Q9 application at Google Health Sciences is intrinsically linked to ICH Q8 (Pharmaceutical Development) and ICH Q10 (Pharmaceutical Quality System).

##### 5.1 Design Space Definition
The risk assessment defined the Design Space for the glucapeptide concentration. Using a Design of Experiments (DoE) approach, GHS analyzed 18 runs (Data Log: GHS-DOE-2025-GLUC).

**Calculation of Risk-Based Design Space:**
The probability of failure ($P_f$) was calculated using the following Bayesian formula integrated into the Google Cloud Life Sciences AI engine:
$$P_f = \int_{\Omega} p(\theta | Data) \cdot I(CQA \notin Specs) d\theta$$
Where:
*   $\theta$ represents the process parameters (Temperature, Stirring Speed, Polymer Ratio).
*   $I$ is the indicator function for specifications.

#### 6.0 RISK COMMUNICATION AND DOCUMENTATION
All QRM activities are documented in the **Master Risk Register (MRR-GLUC-001)**. This register is reviewed quarterly by the Quality Management Review (QMR) board at the South San Francisco site.

##### 6.1 Regulatory Reporting
In accordance with **FDA 21 CFR Part 211** and **ICH Q9**, any significant changes to the risk profile of Glucogen-XR are communicated to the Agency via the Annual Report or a Prior Approval Supplement (PAS) if the change affects the validated state of the process.

**Table 3.2.P.2.7.1-2: History of Risk Reviews for Glucogen-XR**

| Review Date | Batch ID Impacted | Trigger for Review | Outcome | Approval Signature |
| :--- | :--- | :--- | :--- | :--- |
| 12-JAN-2025 | GLUC-2025-001 | Initial Tech Transfer | Baseline risks established | Dr. A. V. Schmidt |
| 15-MAR-2025 | GLUC-2025-008 | Change in Resin Supplier | No increase in RPN; Accepted | Dr. L. Chen |
| 22-MAY-2025 | GLUC-2025-012 | Deviation GHS-DEV-2025-04 | Revised FMEA for Sterility | Dr. J. Marcus |

#### 7.0 RISK REVIEW AND CONTINUOUS IMPROVEMENT
The QRM process is not static. GHS utilizes "Knowledge Management" (as per ICH Q10) to feed back clinical performance data into the risk model. For instance, if Phase III clinical data indicates a lower-than-expected immunogenicity profile, the Severity (S) rating for "Peptide Impurities" in the FMEA may be downgraded.

##### 7.1 Lifecycle Management Protocol
1.  **Annual Product Review (APR):** Trending of OOS (Out of Specification) results against RPN values.
2.  **CAPA Integration:** Corrective and Preventive Actions are linked directly to the FMEA to ensure that the "Detectability" of failures is continuously enhanced.
3.  **External Vigilance:** Monitoring of FDA MAUDE database for similar GLP-1 receptor agonists to proactively identify emerging class risks.

#### 8.0 CONCLUSION
The application of ICH Q9 Quality Risk Management principles ensures that Glucogen-XR is manufactured under a controlled and understood environment. By quantifying risks associated with the GHS-CHO-001 cell line and the extended-release formulation, Google Health Sciences guarantees a product that meets the highest standards of the FDA and international regulatory bodies.

---
**References:**
1. FDA Guidance for Industry: Q9 Quality Risk Management (2006).
2. ICH Q9(R1) Step 4 version (2023).
3. Google Health Sciences Standard Operating Procedure: GHS-QA-SOP-0045 "Risk Management for Biologics."
4. USP <1224> Transfer of Analytical Procedures.
5. ISO 14971:2019 Application of Risk Management to Medical Devices.

**End of Subsection 3.2.P.2.7.1**

---

## ICH Q11 (API Development and Manufacturing)

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.1.1: REGULATORY GUIDANCE APPLICATION – ICH Q11 (API DEVELOPMENT AND MANUFACTURING)

---

**Document ID:** GHS-GLUCXR-M3-Q11-2025  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Status:** Final Submission Version  

---

#### 1.0 INTRODUCTION AND SCOPE OF ICH Q11 ALIGNMENT

In accordance with the International Council for Harmonisation (ICH) Guidance for Industry Q11: *Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities)*, Google Health Sciences (GHS) provides herein a comprehensive justification for the development strategy, manufacturing process selection, and control strategy for the Glucogen-XR active pharmaceutical ingredient (API), a recombinant glucapeptide.

The development of Glucogen-XR follows an "Enhanced Approach" as defined in ICH Q11, leveraging Quality by Design (QbD) principles, extensive prior knowledge from the Google Cloud Life Sciences (GCLS) protein engineering database, and high-throughput experimentation (HTE) utilizing Google’s proprietary Vertex AI-driven predictive modeling for protein folding and stability.

##### 1.1 Objective of the Q11 Strategy
The primary objectives of this section are to:
1.  Demonstrate a holistic understanding of the manufacturing process and its impact on the Critical Quality Attributes (CQAs) of the glucapeptide.
2.  Define the "Design Space" for upstream and downstream operations based on multivariate analysis.
3.  Establish a science-based Control Strategy to ensure consistent product quality across the lifecycle.
4.  Justify the selection of the GHS-CHO-001 cell line and the proprietary media formulations.

---

#### 2.0 DRUG SUBSTANCE IDENTIFICATION AND CHARACTERIZATION

Glucogen-XR is a 42-amino acid synthetic-biological hybrid peptide, produced via recombinant DNA technology in a Chinese Hamster Ovary (CHO) cell line, followed by site-specific conjugation to a 40kDa branched Polyethylene Glycol (PEG) moiety to enable extended-release pharmacokinetics.

##### 2.1 Critical Quality Attributes (CQAs) Identification
CQAs were identified using a Failure Mode and Effects Analysis (FMEA) scoring system, evaluating the Impact (I) and Uncertainty (U) of various molecular attributes on safety and efficacy.

**Table 1: Glucogen-XR CQA Risk Assessment and Linkage to ICH Q11**

| CQA ID | Quality Attribute | Potential Clinical Impact | Impact Score (1-10) | Severity of Impact | Control Strategy Reference |
| :--- | :--- | :--- | :---: | :--- | :--- |
| CQA-01 | Primary Sequence Identity | Loss of potency/Immunogenicity | 10 | Critical | DNA Sequencing, LC-MS/MS |
| CQA-02 | Glycosylation Profile | PK/PD variability | 7 | High | N-linked Glycan Analysis |
| CQA-03 | Deamidation (Asn-28) | Reduced biological activity | 6 | Moderate | RP-HPLC (Method MET-GLUC-04) |
| CQA-04 | High Molecular Weight Species (HMWS) | Immunogenicity / Aggregation | 9 | Critical | SEC-HPLC (Method MET-GLUC-09) |
| CQA-05 | Host Cell Protein (HCP) | Immunogenicity | 8 | High | ELISA / LC-MS (Google Deep-Proteome) |
| CQA-06 | PEG Conjugation Site | Altered PK profile | 9 | Critical | Peptide Mapping (Trypsin/Glu-C) |
| CQA-07 | Residual DNA | Oncogenic risk | 7 | High | qPCR (Method MET-GLUC-12) |

---

#### 3.0 MANUFACTURING PROCESS DEVELOPMENT (ENHANCED APPROACH)

Consistent with ICH Q11 Section 3, GHS utilized a systematic approach to define the manufacturing process.

##### 3.1 Upstream Process: Cell Line Development (CLD)
The host cell line, **GHS-CHO-001**, is a Glutamine Synthetase (GS) knockout derivative of CHO-K1. The expression vector pGHS-GLUC-XR25 utilizes a dual-promoter system for high-level expression of the glucapeptide precursor.

**Table 2: Cell Line Stability Data (Batch GLUC-2025-STB01)**

| Parameter | Limit | Result (Gen 0) | Result (Gen 60) | Status |
| :--- | :--- | :--- | :--- | :--- |
| Viable Cell Density (VCD) | >15 x 10^6 cells/mL | 18.4 x 10^6 | 17.9 x 10^6 | Pass |
| Specific Productivity (Qp) | >25 pg/cell/day | 32.1 | 30.8 | Pass |
| Genetic Copy Number | ± 20% of Master | 12 copies | 11 copies | Pass |
| Mycoplasma | Negative | Negative | Negative | Pass |

##### 3.2 Medium Optimization via Design of Experiments (DoE)
A 128-run fractional factorial design was executed to optimize the concentrations of L-Glutamine, Trace Elements (Set B), and the GHS-Proprietary Growth Factor (GHS-GF-9).

**Equation 1: Response Surface Model for Titer Optimization**
$$Y_{Titer} = \beta_0 + \sum \beta_i X_i + \sum \beta_{ii} X_i^2 + \sum \beta_{ij} X_i X_j + \epsilon$$
Where:
*   $X_1$: Insulin concentration (mg/L)
*   $X_2$: Glucose feed rate (g/L/day)
*   $X_3$: pH setpoint

---

#### 4.0 MANUFACTURING PROCESS DESCRIPTION AND PROCESS CONTROLS

The manufacturing process is divided into eight (8) Unit Operations (UO). Each operation is governed by specific Critical Process Parameters (CPPs).

##### 4.1 Unit Operation 1 (UO1): Inoculum Expansion
*   **Equipment:** GHS-BioEXP-50L (Single-use bioreactor)
*   **Procedure:** Thawing of Working Cell Bank (WCB) vial (Batch GLUC-2025-WCB04) into 10mL proprietary GHS-Media-A1.

##### 4.2 Unit Operation 4 (UO4): Production Bioreactor (2000L)
The production stage utilizes a fed-batch strategy over 14 days.

**Table 3: Production Bioreactor CPPs and PARs (Proven Acceptable Ranges)**

| Parameter | Unit | Target | Action Limit (Lower) | Action Limit (Upper) | Impacted CQA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Temperature | °C | 36.5 | 36.0 | 37.0 | Glycosylation |
| pH | pH units | 6.95 | 6.85 | 7.05 | Deamidation |
| Dissolved Oxygen (DO) | % | 40 | 30 | 60 | Titer/Aggregation |
| Sparge Rate (O2) | SLPM | 5.0 | 2.0 | 8.0 | Cell Viability |
| Feed Start Time | Hour | 72 | 70 | 74 | Metabolite Profile |

---

#### 5.0 DOWNSTREAM PURIFICATION AND VIRAL CLEARANCE

The purification process is designed to remove product-related impurities (aggregates, fragments) and process-related impurities (HCP, DNA, Leachable Protein A).

##### 5.1 Protocol for Chromatography Column Packing (UO6: Protein A Capture)
1.  **Column ID:** GHS-COL-PROTA-99
2.  **Resin:** MabSelect SuRe LX
3.  **Procedure:**
    *   Sanitize column with 0.5M NaOH for 60 minutes.
    *   Equilibrate with 50mM Tris, 150mM NaCl, pH 7.5.
    *   Load Clarified Harvest (Batch GLUC-2025-CH08) at 300 cm/hr.
    *   Wash with 1M NaCl to remove HCPs.
    *   Elute with 50mM Citrate, pH 3.2.

**Table 4: Intermediate Purification Results (Batch GLUC-2025-DS01 through DS05)**

| Batch Number | Step Yield (%) | Purity by SEC (%) | HCP (ppm) | DNA (pg/mg) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-DS01 | 88.4 | 99.2 | 12 | < 0.5 |
| GLUC-2025-DS02 | 89.1 | 99.4 | 9 | < 0.5 |
| GLUC-2025-DS03 | 87.5 | 99.1 | 14 | < 0.5 |
| GLUC-2025-DS04 | 88.9 | 99.5 | 11 | < 0.5 |
| GLUC-2025-DS05 | 88.2 | 99.3 | 10 | < 0.5 |

##### 5.2 Viral Clearance Validation
In accordance with ICH Q5A, the process includes two orthogonal viral inactivation/removal steps.

*   **Step 1:** Low pH Inactivation (pH 3.5 for 60 mins).
*   **Step 2:** Nanofiltration (Planova 20N).

**Table 5: Log Reduction Factors (LRF) for Model Viruses**

| Step | X-MuLV (Enveloped RNA) | PRV (Enveloped DNA) | MMV (Non-env DNA) |
| :--- | :--- | :--- | :--- |
| Low pH | > 4.8 | > 4.2 | N/A |
| Nanofiltration | > 5.1 | > 4.9 | > 4.5 |
| **Cumulative LRF** | **> 9.9** | **> 9.1** | **> 4.5** |

---

#### 6.0 CONTROL STRATEGY (ICH Q11 SECTION 6)

The control strategy for Glucogen-XR is a multi-layered approach incorporating:
1.  **Input Material Controls:** Qualification of all animal-free raw materials.
2.  **In-Process Controls (IPCs):** Real-time monitoring of bioreactor metabolites via NIR (Near-Infrared Spectroscopy).
3.  **Release Testing:** Final Drug Substance testing against specifications.
4.  **Stability Monitoring:** Evaluation of long-term and accelerated degradation.

##### 6.1 Input Material Control
All raw materials are categorized based on risk.
*   **High Risk:** GHS-Proprietary Growth Factor (Batch-to-batch variability).
*   **Medium Risk:** PEG-maleimide (40kDa).
*   **Low Risk:** Sodium Chloride, USP.

##### 6.2 Process Analytical Technology (PAT) Implementation
GHS utilizes the Google Cloud "Vertex AI Edge" to perform real-time multivariate analysis of the bioreactor state.

**Algorithm 1: PCA-based Fault Detection**
The system calculates the Hotelling’s T-squared ($T^2$) and Squared Prediction Error (SPE) every 15 minutes.
$$T^2 = x^T P \Lambda^{-1} P^T x \leq T_{\alpha}^2$$
If $T^2$ exceeds the 95% confidence interval, the system triggers an automatic feed adjustment to bring the metabolic profile back to the "Golden Batch" trajectory.

---

#### 7.0 JUSTIFICATION OF DESIGN SPACE

The Design Space (DS) was established for the PEGylation reaction (UO7), where the peptide-to-PEG ratio and temperature are critical to minimize di-PEGylated impurities.

**Table 6: Multivariate Design Space for UO7**

| Parameter | Unit | Range Tested | Design Space Limit |
| :--- | :--- | :--- | :--- |
| Molar Ratio (PEG:Peptide) | ratio | 0.8:1 to 2.5:1 | 1.1:1 to 1.3:1 |
| Reaction Temperature | °C | 4 to 25 | 18 to 22 |
| pH | pH | 5.5 to 7.5 | 6.2 to 6.8 |
| Reaction Time | Minutes | 30 to 240 | 120 to 180 |

*Resulting CQA Impact:* If the process remains within the defined DS, the Di-PEGylated species remains < 2.0% (Acceptance Criterion).

---

#### 8.0 BATCH ANALYSIS AND CONFORMANCE

Data from three (3) consecutive validation batches (GLUC-2025-VAL01, VAL02, VAL03) demonstrate the robustness of the ICH Q11-aligned process.

**Table 7: Conformance Batch Results summary**

| Test | Specification | VAL01 | VAL02 | VAL03 |
| :--- | :--- | :--- | :--- | :--- |
| Appearance | Clear, colorless | Conforms | Conforms | Conforms |
| Purity (SEC) | ≥ 98.5% | 99.6% | 99.4% | 99.7% |
| Potency (Cell-based) | 80-120% | 102% | 98% | 105% |
| Bacterial Endotoxins | ≤ 5 EU/mg | < 0.1 | < 0.1 | < 0.1 |
| Bioburden | ≤ 10 CFU/10mL | 0 | 0 | 0 |

---

#### 9.0 REGULATORY REFERENCES AND GUIDELINES

1.  **ICH Q11:** Development and Manufacture of Drug Substances (November 2012).
2.  **ICH Q8(R2):** Pharmaceutical Development.
3.  **ICH Q9:** Quality Risk Management.
4.  **ICH Q10:** Pharmaceutical Quality System.
5.  **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
6.  **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).

---

#### 10.0 CONCLUSION

The development and manufacturing strategy for Glucogen-XR API, as detailed in this ICH Q11 subsection, provides a science-based assurance of quality. By integrating advanced AI-driven predictive modeling with traditional QbD principles, Google Health Sciences ensures that every batch of Glucogen-XR produced at the South San Francisco facility (Site ID: GHS-SSF-01) meets the stringent requirements for safety, purity, and efficacy required by the FDA.

**End of Subsection 3.2.P.2.1.1**

---

# Design of Experiments (DoE)

## Formulation Optimization Studies

### **MODULE 3: QUALITY**
### **SECTION 3.2.P.2: PHARMACEUTICAL DEVELOPMENT**
### **SUBSECTION 3.2.P.2.2.1: FORMULATION OPTIMIZATION STUDIES (DOE)**

---

#### **1.0 INTRODUCTION AND OBJECTIVE**

The formulation development of **Glucogen-XR (glucapeptide extended-release)**, a long-acting GLP-1 receptor agonist, was executed through a systematic Quality by Design (QbD) approach. The primary objective of these Formulation Optimization Studies was to define the **Design Space** and establish the **Proven Acceptable Ranges (PARs)** for critical excipient concentrations that ensure the stability, bioactivity, and controlled release kinetics of the glucapeptide moiety over a 168-hour (7-day) subcutaneous delivery profile.

The therapeutic efficacy of Glucogen-XR is highly dependent on the maintenance of the peptide’s secondary structure (alpha-helix content) and the prevention of covalent aggregation (dimers/multimers) and non-covalent fibril formation. Given the high concentration (50 mg/mL) required for the extended-release profile, the risk of viscosity-induced syringeability issues and protein-protein interactions (PPI) was a central focus of these studies.

#### **2.0 REGULATORY COMPLIANCE AND GUIDELINES**

All studies detailed herein were conducted in alignment with the following international standards:
*   **ICH Q8(R2):** Pharmaceutical Development.
*   **ICH Q9:** Quality Risk Management.
*   **ICH Q10:** Pharmaceutical Quality System.
*   **USP <1151>:** Pharmaceutical Dosage Forms.
*   **USP <790>:** Visible Particulates in Injections.
*   **FDA Guidance for Industry:** *Q8, Q9, & Q10 Questions and Answers - Appendix Q&As from Training Sessions.*

---

#### **3.0 RISK ASSESSMENT: INITIAL QUALITY ATTRIBUTE IDENTIFICATION**

Prior to initiating the Design of Experiments (DoE), a Failure Mode and Effects Analysis (FMEA) was performed to identify variables with the highest impact on Critical Quality Attributes (CQAs).

**Table 1: FMEA Risk Assessment for Glucogen-XR Formulation Variables**

| Variable (Input) | Impact on Stability | Impact on Bioavailability | Impact on Manufacturability | Risk Priority Number (RPN) |
| :--- | :--- | :--- | :--- | :--- |
| **pH (Range 5.5 - 7.5)** | High | Medium | Low | 180 (Critical) |
| **Surfactant (Polysorbate 80)** | High | Low | Medium | 144 (Critical) |
| **Tonicity Agent (Mannitol)** | Low | High | Low | 90 (Moderate) |
| **Buffer Concentration** | Medium | Low | Low | 72 (Moderate) |
| **Peptide Concentration** | High | High | High | 210 (Critical) |
| **Antioxidant (Methionine)** | High | Low | Low | 120 (Critical) |

---

#### **4.0 PHASE I DoE: SCREENING OF BUFFER SYSTEMS AND pH OPTIMIZATION**

The initial screening phase utilized a Fractional Factorial Design to evaluate the impact of three buffer systems (Sodium Citrate, Histidine-HCl, and Sodium Phosphate) across a pH range of 5.5 to 7.5.

**4.1 Study Protocol (GHS-PRO-DEV-092)**
1.  **Preparation:** 25 mL batches of Glucogen-XR intermediate (25 mg/mL) were prepared in designated buffers.
2.  **Stress Conditions:** Samples were subjected to accelerated thermal stress (40°C ± 2°C / 75% RH ± 5% RH) for 14 days.
3.  **Analytical Testing:** SEC-HPLC for purity, Thioflavin T (ThT) fluorescence for fibrillation, and Circular Dichroism (CD) for secondary structure.

**Table 2: Design Matrix for Buffer/pH Screening (Batch Series GLUC-2025-S01 to S09)**

| Batch ID | Buffer Type | pH Target | Ionic Strength (mM) | Result: % Purity (Day 14, 40°C) | Result: ThT Fluorescence (Relative) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-S01** | Histidine | 6.0 | 20 | 98.4% | 1.0 |
| **GLUC-2025-S02** | Histidine | 6.5 | 20 | 98.1% | 1.2 |
| **GLUC-2025-S03** | Histidine | 7.0 | 20 | 96.5% | 2.5 |
| **GLUC-2025-S04** | Citrate | 5.5 | 20 | 94.2% | 4.8 |
| **GLUC-2025-S05** | Citrate | 6.0 | 20 | 95.8% | 3.2 |
| **GLUC-2025-S06** | Citrate | 6.5 | 20 | 95.1% | 3.9 |
| **GLUC-2025-S07** | Phosphate | 6.5 | 20 | 93.2% | 6.5 |
| **GLUC-2025-S08** | Phosphate | 7.0 | 20 | 92.1% | 8.9 |
| **GLUC-2025-S09** | Phosphate | 7.5 | 20 | 89.5% | 12.4 |

**4.2 Conclusion of Phase I:**
Histidine buffer at pH 6.0 - 6.5 demonstrated superior stabilizing effects. Phosphate buffers led to significant aggregation, likely due to pH shifts during the freezing process of the drug substance.

---

#### **5.0 PHASE II DoE: MULTIVARIATE OPTIMIZATION OF EXCIPIENT CONCENTRATIONS**

A Central Composite Design (CCD) was implemented to optimize the concentrations of Polysorbate 80 (PS80), L-Methionine (antioxidant), and Sucrose (cryoprotectant/tonicity agent).

**5.1 Statistical Model Parameters**
*   **Factors:** 3 (PS80, Methionine, Sucrose)
*   **Levels:** 5 (-α, -1, 0, +1, +α)
*   **Total Runs:** 20 (including 6 center points)
*   **Software:** Design-Expert® v13 (Stat-Ease)

**Table 3: Factors and Levels for CCD Optimization Study**

| Factor | Name | Units | Low (-1) | High (+1) | -α (Alpha) | +α (Alpha) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **A** | Polysorbate 80 | % w/v | 0.01 | 0.05 | 0.00 | 0.07 |
| **B** | L-Methionine | mM | 5 | 15 | 0 | 20 |
| **C** | Sucrose | % w/v | 5.0 | 10.0 | 2.5 | 12.5 |

**5.2 Execution Protocol: Batch GLUC-2025-OPT-01 to OPT-20**
1.  **Compounding:** Using a 1L stainless steel jacketed vessel (GHS-EQ-302), excipients were dissolved in WFI.
2.  **Peptide Addition:** Glucogen-XR DS was added to achieve a final concentration of 50 mg/mL.
3.  **Filtration:** Sterile filtered via 0.22 μm PVDF membrane.
4.  **Filling:** 1.0 mL fill into USP Type I glass syringes (1.0 mL Long).
5.  **Stress Testing:** Agitation (300 rpm, 48h) and Thermal Stress (25°C for 3 months).

**Table 4: Experimental Results for Factorial Optimization**

| Run | Batch ID | PS80 (%) | Methionine (mM) | Sucrose (%) | % HMW (SEC) | Oxidation (%) | Viscosity (cP) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **GLUC-2025-OPT-01** | 0.01 | 5 | 5.0 | 1.45 | 1.12 | 4.2 |
| 2 | **GLUC-2025-OPT-02** | 0.05 | 5 | 5.0 | 0.88 | 1.15 | 4.5 |
| 3 | **GLUC-2025-OPT-03** | 0.01 | 15 | 5.0 | 1.42 | 0.22 | 4.3 |
| 4 | **GLUC-2025-OPT-04** | 0.05 | 15 | 5.0 | 0.85 | 0.24 | 4.6 |
| 5 | **GLUC-2025-OPT-05** | 0.01 | 5 | 10.0 | 1.35 | 1.08 | 6.8 |
| 6 | **GLUC-2025-OPT-06** | 0.05 | 5 | 10.0 | 0.82 | 1.10 | 7.1 |
| 7 | **GLUC-2025-OPT-07** | 0.01 | 15 | 10.0 | 1.30 | 0.20 | 6.9 |
| 8 | **GLUC-2025-OPT-08** | 0.05 | 15 | 10.0 | 0.78 | 0.21 | 7.2 |
| 9 (C)| **GLUC-2025-OPT-09** | 0.03 | 10 | 7.5 | 0.92 | 0.55 | 5.4 |
| 10 (C)| **GLUC-2025-OPT-10** | 0.03 | 10 | 7.5 | 0.93 | 0.54 | 5.5 |
| ... | ... | ... | ... | ... | ... | ... | ... |
| 20 | **GLUC-2025-OPT-20** | 0.03 | 10 | 7.5 | 0.94 | 0.56 | 5.5 |

*(Note: Data for runs 11-19 maintained within center point variances)*

**5.3 Statistical Analysis of Data**
The High Molecular Weight (HMW) species formation followed a linear model with respect to PS80 concentration ($p < 0.0001$).
The oxidation rate was inversely proportional to Methionine concentration, with a plateau effect observed at $> 10 \text{ mM}$.

**Mathematical Equation for Oxidation Prediction:**
$$Y_{\text{Oxid}} = 1.15 - 0.082[B] + 0.0014[B]^2$$
Where $[B]$ is the concentration of L-Methionine.

---

#### **6.0 PHASE III: EXTENDED-RELEASE POLYMER LOAD OPTIMIZATION**

To achieve the 7-day pharmacokinetic profile, the glucapeptide is encapsulated in a proprietary biodegradable PLGA-PEG-PLGA triblock copolymer (GHS-Polymer-X).

**6.1 Polymer Concentration vs. Release Rate**
A study was conducted to determine the optimal polymer-to-drug ratio.

**Table 5: Release Profile Evaluation (Batch Series GLUC-2025-ER01 to ER05)**

| Batch ID | Polymer Load (%) | Drug Load (%) | Burst Release (2h) | T50 (Time to 50% Release) | Final Viscosity (cP) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-ER01** | 10.0 | 5.0 | 18% | 36 hours | 12.4 |
| **GLUC-2025-ER02** | 15.0 | 5.0 | 12% | 72 hours | 24.8 |
| **GLUC-2025-ER03** | 20.0 | 5.0 | 7% | 104 hours | 48.9 |
| **GLUC-2025-ER04** | 25.0 | 5.0 | 4% | 158 hours | 92.4 |
| **GLUC-2025-ER05** | 30.0 | 5.0 | 2% | 210 hours | 185.0 |

**6.2 Optimization Result:**
Batch **GLUC-2025-ER04** provided the target release kinetics (T50 ~160 hours) while maintaining a viscosity ($<100 \text{ cP}$) compatible with a 29G thin-wall needle.

---

#### **7.0 FINAL FORMULATION AND DESIGN SPACE ESTABLISHMENT**

Based on the cumulative data from DoE Phases I-III, the Design Space for Glucogen-XR was defined.

**Table 6: Final Optimized Formulation Composition**

| Component | Function | Optimized Concentration | PAR (Proven Acceptable Range) |
| :--- | :--- | :--- | :--- |
| **Glucogen-XR Peptide** | Active Ingredient | 50.0 mg/mL | 45.0 - 55.0 mg/mL |
| **L-Histidine** | Buffering Agent | 20 mM | 15 - 25 mM |
| **Polysorbate 80** | Stabilizer (Anti-aggregation) | 0.04% w/v | 0.02 - 0.06% w/v |
| **Sucrose** | Tonicity/Cryoprotectant | 8.5% w/v | 7.5 - 9.5% w/v |
| **L-Methionine** | Antioxidant | 12 mM | 10 - 15 mM |
| **GHS-Polymer-X** | Extended-Release Matrix | 25% w/v | 22.5 - 27.5% w/v |
| **HCl/NaOH** | pH Adjustment | pH 6.2 | 6.0 - 6.4 |

#### **8.0 VERIFICATION OF THE DESIGN SPACE (CONFIRMATORY RUNS)**

Three verification batches (**GLUC-2025-V01, V02, V03**) were manufactured at the set-point and at the edges of the Design Space to confirm the robustness of the formulation.

**Table 7: Verification Batch Analytical Results**

| Test | Method | Acceptance Criteria | GLUC-2025-V01 (Set Point) | GLUC-2025-V02 (Lower Edge) | GLUC-2025-V03 (Upper Edge) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Assay** | RP-HPLC | 90.0 - 110.0% | 100.2% | 98.4% | 101.5% |
| **Purity (HMW)** | SEC-HPLC | $\le 2.0\%$ | 0.7% | 0.9% | 0.8% |
| **In-Vitro Release (7d)** | USP <711> | 80 - 110% | 94% | 98% | 91% |
| **Sub-visible Particles** | USP <788> | $\le 6000 (\ge 10 \mu m)$ | 420 | 510 | 380 |

---

#### **9.0 REFERENCES**

1.  **ICH Q8(R2):** Pharmaceutical Development, August 2009.
2.  **Wang, W., et al.** (2015). "Protein Aggregation and its Inhibition in Biopharmaceuticals." *Journal of Pharmaceutical Sciences*, 104(12).
3.  **Google Health Sciences Internal Report GHS-TR-2024-442:** *Mechanistic Modeling of Glucapeptide Degradation Pathways.*
4.  **USP Chapter <121>:** Insulin Assays (modified for GLP-1 analogues).

[END OF SECTION 3.2.P.2.2.1]

---

## Process Optimization Studies

### 3.2.P.2.3.1.2 Process Optimization Studies (DoE Analysis)

#### 1.0 Executive Summary of Process Optimization
The development of Glucogen-XR (glucapeptide extended-release) represents a paradigm shift in GLP-1 receptor agonist formulation, utilizing a proprietary sustained-release matrix designed for bi-weekly subcutaneous administration. To ensure a robust Quality Target Product Profile (QTPP), Google Health Sciences (GHS) implemented an extensive Quality by Design (QbD) framework. 

This section details the **Process Optimization Studies** conducted under Section 3.2.P.2, specifically focusing on the Design of Experiments (DoE) utilized to define the Proven Acceptable Ranges (PARs) and the Normal Operating Ranges (NORs) for the Drug Product (DP) manufacturing process. Optimization was focused on three critical stages: 
1.  **Peptide-Polymer Complexation (Aqueous Phase)**
2.  **Double Emulsion (w/o/w) Formation**
3.  **Solvent Evaporation and Microsphere Hardening**

#### 2.0 Regulatory Framework and Statistical Methodology
All studies were performed in accordance with **ICH Q8(R2) Pharmaceutical Development**, **ICH Q9 Quality Risk Management**, and **ICH Q11 Development and Manufacture of Drug Substances**. 

##### 2.1 Statistical Software and Design Selection
Statistical analysis was performed using JMP® Clinical 16.2 and Design-Expert® v13. A Resolution V Fractional Factorial design was initially employed for screening, followed by a **Central Composite Design (CCD)** for response surface modeling (RSM) of the critical process parameters (CPPs).

##### 2.2 Mathematical Model for Optimization
The relationship between independent variables ($X$) and the dependent responses ($Y$) was modeled using the following second-order polynomial equation:

$$Y = \beta_0 + \sum_{i=1}^{k} \beta_i X_i + \sum_{i=1}^{k} \beta_{ii} X_i^2 + \sum_{i<j}^{k} \beta_{ij} X_i X_j + \varepsilon$$

Where:
*   $Y$: Predicted response (e.g., Encapsulation Efficiency)
*   $\beta_0$: Constant intercept
*   $\beta_i, \beta_{ii}, \beta_{ij}$: Linear, quadratic, and interaction coefficients
*   $X_i, X_j$: Independent variables (CPPs)
*   $\varepsilon$: Residual error

---

#### 3.0 Study DP-OPTIM-001: Optimization of the Primary Emulsion ($W_1/O$)
The primary emulsion determines the initial distribution of the glucapeptide within the polymer matrix. High shear can degrade the peptide, while low shear results in large internal water droplets, leading to a high "burst release."

##### 3.1 Design Matrix for Primary Emulsion
**Table 1: Independent Variables and Levels for $W_1/O$ Optimization**

| Factor ID | Parameter (CPP) | Units | Low (-1) | Mid (0) | High (+1) | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **X1** | Homogenization Speed | RPM | 8,000 | 12,000 | 16,000 | Impact on droplet size ($d_{50}$) |
| **X2** | Homogenization Time | min | 2.0 | 5.0 | 8.0 | Protein stability/denaturation risk |
| **X3** | Polymer Concentration | % w/v | 5.0 | 12.5 | 20.0 | Viscosity impact on shear |
| **X4** | Phase Ratio (W:O) | Ratio | 1:10 | 1:5 | 1:2.5 | Stability of the primary emulsion |

##### 3.2 Experimental Data (Batch Series GLUC-2025-010 through GLUC-2025-028)
**Table 2: CCD Results for Primary Emulsion Optimization**

| Batch No. | X1 (RPM) | X2 (min) | X3 (%) | X4 (Ratio) | Response: $d_{50}$ (nm) | Response: Encapsulation (%) | Purity (SEC-HPLC %) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-010 | 8,000 | 2.0 | 5.0 | 0.1 | 450 | 72.4 | 99.8 |
| GLUC-2025-011 | 16,000 | 2.0 | 5.0 | 0.1 | 210 | 81.2 | 99.1 |
| GLUC-2025-012 | 8,000 | 8.0 | 5.0 | 0.1 | 380 | 74.5 | 98.4 |
| GLUC-2025-013 | 16,000 | 8.0 | 5.0 | 0.1 | 185 | 88.9 | 95.2* |
| GLUC-2025-014 | 12,000 | 5.0 | 12.5 | 0.2 | 290 | 84.1 | 99.5 |
| GLUC-2025-015 | 12,000 | 5.0 | 12.5 | 0.2 | 295 | 83.8 | 99.4 |
| GLUC-2025-016 | 20,000** | 5.0 | 12.5 | 0.2 | 140 | 91.2 | 92.1* |

*\*Note: Purity dropped below specification (>98.0%) at high shear/high time (Batch GLUC-2025-013 and GLUC-2025-016), indicating mechanical degradation of the glucapeptide.*

---

#### 4.0 Study DP-OPTIM-002: Secondary Emulsion ($W_1/O/W_2$) and Solvent Extraction
This stage defines the final microsphere size distribution and surface morphology. The focus was on the concentration of Polyvinyl Alcohol (PVA) and the evaporation rate of Dichloromethane (DCM).

##### 4.1 Step-by-Step Optimization Protocol (SOP-DP-550)
1.  **Preparation:** Charge the 50L jacketed reactor with $W_2$ phase (PVA solution).
2.  **Activation:** Initialize the Silverson High-Shear In-line Mixer.
3.  **Injection:** Inject the primary emulsion ($W_1/O$) via a peristaltic pump at a controlled rate of 50 mL/min.
4.  **Hardening:** Transfer the double emulsion to the 500L evaporation tank.
5.  **Solvent Removal:** Apply a vacuum gradient (starting at 800 mbar, reducing to 100 mbar over 4 hours).
6.  **Monitoring:** Perform In-Process Control (IPC) for residual DCM using Headspace GC every 30 minutes.

##### 4.2 Detailed DoE Results for Microsphere Size Control
**Table 3: Interaction of PVA Concentration and Stirring Speed**

| Batch ID | PVA Conc. (%) | Stir Speed (RPM) | Temp (°C) | Mean Particle Size ($\mu m$) | Span [($d_{90}-d_{10})/d_{50}$] | Residual DCM (ppm) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-040 | 0.1 | 400 | 25 | 115.4 | 1.8 | 450 |
| GLUC-2025-041 | 0.5 | 400 | 25 | 72.1 | 1.2 | 410 |
| GLUC-2025-042 | 1.0 | 400 | 25 | 45.3 | 0.9 | 380 |
| GLUC-2025-043 | 0.5 | 800 | 25 | 32.2 | 0.7 | 405 |
| GLUC-2025-044 | 0.5 | 600 | 35 | 55.8 | 1.1 | 120 |

##### 4.3 Statistical Analysis of Residual Solvent
The ANOVA for residual DCM levels indicated that **Temperature (T)** and **Vacuum Duration (t)** were the most significant factors ($p < 0.001$).
*   **Regression Equation:** $DCM_{res} = 540.2 - 12.4(T) - 45.1(t) + 0.85(T \cdot t)$
*   **Target:** < 600 ppm (ICH Q3C limit).
*   **Optimization:** A temperature of 30°C and a duration of 5 hours were selected to ensure levels < 150 ppm (Safety Margin > 4x).

---

#### 5.0 Control Strategy and Design Space Mapping

##### 5.1 Design Space Definition
Based on the DoE results, the Design Space for Glucogen-XR manufacturing is defined by the multidimensional combination of input variables that ensure a 99% probability of meeting the following specifications:
*   **Encapsulation Efficiency:** $\geq 85\%$
*   **Particle Size ($d_{50}$):** $45 - 75 \mu m$
*   **Burst Release (24h):** $\leq 15\%$
*   **Glucapeptide Purity:** $\geq 98.0\%$

##### 5.2 Critical Process Parameter (CPP) Summary Table
**Table 4: Final Optimized Process Parameters**

| Process Step | Critical Process Parameter | Optimized Target | Proven Acceptable Range (PAR) |
| :--- | :--- | :--- | :--- |
| **Phase 1: $W_1$ Prep** | Glucapeptide Concentration | 50 mg/mL | 45 - 55 mg/mL |
| **Phase 2: Primary Emulsion** | Homogenization Speed | 12,000 RPM | 11,000 - 13,000 RPM |
| **Phase 2: Primary Emulsion** | Mixing Time | 5.0 min | 4.0 - 6.0 min |
| **Phase 3: Secondary Emulsion** | PVA Concentration | 0.75% w/v | 0.5% - 1.0% w/v |
| **Phase 4: Hardening** | Evaporation Temp | 30°C | 25°C - 35°C |
| **Phase 4: Hardening** | Stirring Rate | 500 RPM | 450 - 550 RPM |

---

#### 6.0 Conclusion of Process Optimization
The optimization studies (GLUC-2025-010 to GLUC-2025-065) confirm that the Glucogen-XR manufacturing process is robust and capable of consistently producing a high-quality DP. The identification of the $W_1/O$ homogenization speed as the most sensitive parameter has led to the implementation of a redundant laser-tachometer control system in the South San Francisco facility (Building 3000) to ensure real-time compliance with the PAR.

#### 7.0 References
1.  **USP <724>:** Drug Release Testing for Extended-Release Dosage Forms.
2.  **USP <788>:** Particulate Matter in Injections.
3.  **FDA Guidance for Industry:** *Analytical Procedures and Methods Validation for Drugs and Biologics (2015)*.
4.  **GHS Internal Report:** *Characterization of GHS-CHO-001 Glucapeptide Secretion Kinetics (2023)*.

---

## Statistical Analysis and Modeling

### **3.2.P.2 PHARMACEUTICAL DEVELOPMENT**
#### **3.2.P.2.3 Manufacturing Process Development**
---
### **Subsection: 3.2.P.2.3.4 Statistical Analysis and Modeling (Quality by Design Framework)**

#### **3.2.P.2.3.4.1 Introduction and Scope**
The development of Glucogen-XR (glucapeptide extended-release) utilized a comprehensive Quality by Design (QbD) approach, as outlined in ICH Q8(R2), Q9, and Q10. This subsection details the statistical methodologies, mathematical modeling, and algorithmic frameworks employed by Google Health Sciences (GHS) to establish the Design Space (DS) for the Drug Product (DP). 

The primary objective of the statistical analysis was to quantify the relationships between Critical Process Parameters (CPPs), Material Attributes (MAs), and Critical Quality Attributes (CQAs). Given the complex nature of a peptide extended-release formulation involving poly(lactic-co-glycolic acid) (PLGA) microsphere encapsulation, non-linear modeling and Bayesian optimization were utilized to ensure a high level of process robustness.

---

#### **3.2.P.2.3.4.2 Software and Computational Platforms**
Statistical analysis was performed using the following validated software systems at the GHS South San Francisco facility:
*   **JMP® Clinical/Pro v17.2:** For primary Design of Experiments (DoE) construction and ANOVA.
*   **Vertex AI (Google Cloud):** Custom TensorFlow-based neural networks for modeling non-linear interactions in the microsphere solidification phase.
*   **Design-Expert® v22:** Used for Response Surface Methodology (RSM) and contour plot generation.
*   **Minitab® 21.4:** Used for Gauge R&R studies and process capability ($C_{pk}$) assessments.

---

#### **3.2.P.2.3.4.3 Design of Experiments (DoE) Strategy**
A multi-staged DoE strategy was executed across three distinct manufacturing phases for Glucogen-XR:
1.  **Phase I: Screening (Definitive Screening Design - DSD)**
2.  **Phase II: Optimization (Central Composite Design - CCD)**
3.  **Phase III: Robustness (Monte Carlo Simulation & Tolerance Analysis)**

##### **Table 1: Summary of Experimental Factors and Ranges for Glucogen-XR Encapsulation Phase**
| Factor ID | Process Parameter | Unit | Low (-1) | Mid (0) | High (+1) | Rationale for Selection |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **X1** | Homogenization Speed | RPM | 4,000 | 6,000 | 8,000 | Impact on microsphere size ($D_{50}$) |
| **X2** | Phase Ratio (Org:Aq) | Ratio | 1:5 | 1:10 | 1:15 | Impact on Encapsulation Efficiency (EE) |
| **X3** | PLGA Concentration | % w/v | 10.0 | 15.0 | 20.0 | Impact on Release Kinetics ($T_{80\%}$) |
| **X4** | Hardening Temperature | °C | 4.0 | 15.0 | 25.0 | Solvent evaporation rate & porosity |
| **X5** | Peptide Loading | % w/w | 2.0 | 5.0 | 8.0 | Stability and Burst Release ($R_{24h}$) |

---

#### **3.2.P.2.3.4.4 Statistical Modeling Protocols (Step-by-Step)**

**Protocol GHS-STAT-009: Construction of Response Surface Models**

1.  **Data Pre-processing:**
    *   Normalize raw data from batches **GLUC-2025-001** through **GLUC-2025-048**.
    *   Perform Outlier Detection using Cook’s Distance (Threshold $D > 1.0$).
2.  **Model Selection:**
    *   Apply a Second-Order Polynomial Model for all CQAs:
        $$Y = \beta_0 + \sum \beta_i X_i + \sum \beta_{ii} X_i^2 + \sum \beta_{ij} X_i X_j + \epsilon$$
    *   Utilize Stepwise Backward Elimination ($p > 0.05$) to simplify the model.
3.  **Verification of Assumptions:**
    *   Residual analysis (Normal probability plots).
    *   Box-Cox Transformation if heteroscedasticity is detected in the residual vs. predicted plots.
4.  **Model Validation:**
    *   Calculate $R^2$, $R^2_{adj}$, and $R^2_{pred}$. A difference of $> 0.2$ between $R^2_{adj}$ and $R^2_{pred}$ triggers a re-evaluation of model terms.

---

#### **3.2.P.2.3.4.5 Detailed Analysis of Experimental Results**

##### **3.2.P.2.3.4.5.1 Critical Quality Attribute: Encapsulation Efficiency (EE%)**
The goal for EE% is $\ge 85.0\%$. Data from the CCD study (Batches GLUC-2025-012 to GLUC-2025-036) demonstrated a significant interaction between PLGA Concentration (X3) and Phase Ratio (X2).

##### **Table 2: ANOVA for Encapsulation Efficiency (Model $Y_1$)**
| Source | Sum of Squares | df | Mean Square | F-value | p-value (Prob > F) | Significance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Model** | 452.12 | 9 | 50.24 | 45.82 | < 0.0001 | Significant |
| **X1-Homogenization** | 12.04 | 1 | 12.04 | 10.98 | 0.0034 | Significant |
| **X3-PLGA Conc** | 215.40 | 1 | 215.40 | 196.44 | < 0.0001 | Critical |
| **X2*X3 Interaction** | 45.10 | 1 | 45.10 | 41.13 | < 0.0001 | Significant |
| **Residual** | 21.93 | 20 | 1.10 | | | |
| **Total** | 474.05 | 29 | | | | |

**Statistical Inference:**
The model indicates that EE% is highly sensitive to the viscosity of the organic phase. The regression equation in terms of actual factors is:
$$EE\% = 42.5 + 2.1(X_1) + 12.4(X_3) - 3.8(X_2 \cdot X_3) + 0.5(X_3^2)$$

---

#### **3.2.P.2.3.4.6 Design Space Derivation and Multidimensional Optimization**
The Design Space (DS) was defined by the intersection of the acceptable ranges for the primary CQAs:
*   **CQA 1:** Particle Size $D_{50}$ (Target: $45 - 65 \mu m$)
*   **CQA 2:** Burst Release $R_{24h}$ (Target: $< 10\%$)
*   **CQA 3:** Total Release at 28 days (Target: $> 80\%$)
*   **CQA 4:** Residual Solvent (DCM) (Target: $< 600 ppm$)

##### **Table 3: Design Space Constraints and Verification Batches**
| Batch Number | X1 (RPM) | X2 (Ratio) | X3 (PLGA %) | Observed EE% | Predicted EE% | % Bias |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-050** | 6000 | 1:10 | 15.0 | 91.2 | 90.5 | 0.77% |
| **GLUC-2025-051** | 7000 | 1:12 | 17.5 | 88.4 | 89.1 | -0.79% |
| **GLUC-2025-052** | 5500 | 1:8 | 12.5 | 86.1 | 85.8 | 0.35% |

---

#### **3.2.P.2.3.4.7 Monte Carlo Simulation for Risk Assessment**
To satisfy ICH Q9 Quality Risk Management requirements, a Monte Carlo simulation was performed ($N = 10,000$ iterations). The simulation accounted for the inherent variability (Standard Deviation) of the manufacturing equipment:
*   Homogenization Speed: $\pm 50$ RPM
*   Temperature Control: $\pm 0.5$ °C
*   Mass Balance Accuracy: $\pm 0.1\%$

**Results:**
The simulation predicted a **Process Capability Index ($P_{pk}$)** of **1.88** for the primary CQA (Release Rate), implying a defect rate of $< 0.001\%$. This confirms that the proposed Normal Operating Ranges (NOR) are sufficiently centered within the Proven Acceptable Ranges (PAR).

---

#### **3.2.P.2.3.4.8 Multivariate Latent Variable Modeling (MVDA)**
For real-time monitoring of Glucogen-XR production, Principal Component Analysis (PCA) and Partial Least Squares (PLS) models were developed.

1.  **PCA Model:** Used for batch-to-batch consistency check.
    *   $R^2X[1] = 0.54$ (First principal component explains 54% of variation).
    *   Hotelling’s $T^2$ ellipse (95% confidence interval) used to identify drifting batches.
2.  **PLS Model:** Relates in-process NIR (Near-Infrared) spectra of the drying microspheres to the final residual solvent content.
    *   **RMSEP (Root Mean Square Error of Prediction):** $12.4 ppm$.

---

#### **3.2.P.2.3.4.9 Regulatory References**
1.  **ICH Q8(R2):** Pharmaceutical Development.
2.  **ICH Q9:** Quality Risk Management.
3.  **ICH Q11:** Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities).
4.  **FDA Guidance for Industry:** Process Validation: General Principles and Practices (2011).
5.  **USP <1010>:** Analytical Data—Interpretation and Treatment.

---

#### **3.2.P.2.3.4.10 Conclusion**
The statistical analysis and modeling phase for Glucogen-XR confirms that the manufacturing process is robust and mathematically sound. The integration of Google Cloud’s high-performance computing (HPC) for Monte Carlo simulations allowed for a deeper exploration of the design space than traditional methods. All models demonstrate high predictive power ($Q^2 > 0.75$), ensuring that the commercial manufacture of Glucogen-XR will consistently meet the predefined Quality Target Product Profile (QTPP).

---
**Approvals:**
*   *Digital Signature:* **Dr. Lawrence Page**, Chief Scientific Officer, GHS.
*   *Verification:* **GHS Quality Assurance Regulatory Division (QARD)**.
*   *Date:* 14-Oct-2025.
*   *Document ID:* GHS-GLUC-MOD-V4.2.

---

# Google Cloud AI Integration in Development

## Machine Learning for Formulation Screening

# MODULE 3: QUALITY (3.2.P.2 PHARMACEUTICAL DEVELOPMENT)
## SECTION 3.2.P.2.7: GOOGLE CLOUD AI INTEGRATION IN DEVELOPMENT
### SUBSECTION 3.2.P.2.7.1: MACHINE LEARNING FOR FORMULATION SCREENING

#### 1.0 Executive Summary of AI-Driven Formulation Optimization
The development of Glucogen-XR (glucapeptide extended-release) utilized a proprietary High-Throughput Predictive Formulation (HTPF) engine hosted on Google Cloud Vertex AI. Traditional formulation screening for GLP-1 receptor agonists typically requires a trial-and-error approach involving months of accelerated stability studies across hundreds of candidate buffers. By leveraging Google Health Sciences’ (GHS) Deep-Peptide-Stabilizer (DPS) architecture—a specialized Transformer-based neural network—the formulation development timeline was compressed by 14 months, achieving a 0.98 R² correlation between predicted and observed monomeric purity over 24 months of real-time equivalent data.

#### 2.0 Technical Infrastructure and Dataset Preparation
The formulation space for Glucogen-XR was defined by an 8-dimensional hyperspace comprising pH, ionic strength, surfactant concentration, preservative levels, and specific stabilizing polyols.

##### 2.1 Training Data Acquisition (Historical Data Migration)
The model was pre-trained on a curated dataset (Dataset ID: GHS-GLP1-HIST-2024) consisting of:
*   **Data Points:** 14.2 million physicochemical measurements.
*   **Sources:** Historical GLP-1 analogues, GLP-2 sequences, and synthetic peptide libraries.
*   **Analytical Inputs:** SEC-HPLC (Monomeric Purity), RP-HPLC (Chemical Stability), DLS (Hydrodynamic Radius), and Thioflavin T (ThT) fluorescence (Aggregation Propensity).

##### 2.2 Data Normalization and Feature Engineering
Prior to model training, all raw analytical data was normalized via Google Cloud Dataflow. Features were engineered using the following mathematical transformation for chemical stability degradation rates ($k$):

$$k = \frac{\ln(C_0 / C_t)}{t}$$

Where:
*   $C_0$ = Initial peptide concentration (mg/mL)
*   $C_t$ = Concentration at time $t$
*   $t$ = Time in days at stress temperature ($40^\circ\text{C}/75\%\text{RH}$)

#### 3.0 Machine Learning Architecture (GHS-DPS-01)
The GHS-DPS-01 model utilizes a multi-modal deep learning architecture designed to predict the Gibbs Free Energy of unfolding ($\Delta G_{unfolding}$) and the rate of deamidation at the Asn-28 residue of Glucogen-XR.

##### 3.1 Neural Network Layers and Hyperparameters
| Layer Type | Configuration | Activation Function | Dropout Rate |
| :--- | :--- | :--- | :--- |
| Input Layer | 128 Features (Chemical + Physical) | Linear | N/A |
| Dense Hidden 1 | 512 Neurons | Swish | 0.25 |
| Dense Hidden 2 | 256 Neurons | Swish | 0.20 |
| Attention Layer | 8-Head Self-Attention | Softmax | 0.10 |
| Output Layer 1 | Monomeric Purity (Regression) | ReLU | N/A |
| Output Layer 2 | Aggregate Formation (Classification) | Sigmoid | N/A |

#### 4.0 Iterative In Silico Screening (High-Throughput)
The model performed 1,500,000 virtual screenings (Virtual Batches V-GLUC-00001 to V-GLUC-1500000) to identify the optimal "Stability Island" within the formulation design space.

##### Table 4.1: Predicted vs. Observed Stability for Top Candidate Formulations
| Virtual Batch ID | Predicted pH | Buffering Agent | Predicted Monomer (%) @ 24M | Observed Monomer (%) (Batch GLUC-2025-001) | Variance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| V-GLUC-00912 | 6.5 | Histidine | 94.2% | 94.1% | -0.1% |
| V-GLUC-11204 | 7.0 | Phosphate | 88.5% | 87.2% | -1.3% |
| V-GLUC-44910 | 7.4 | Citrate | 82.1% | 80.5% | -1.6% |
| V-GLUC-99211 | 6.8 | Histidine/Acetate | 96.8% | 97.1% | +0.3% |

*Note: Batch GLUC-2025-001 was the first pilot batch produced at the South San Francisco facility (3000 Innovation Drive) to validate the AI prediction.*

#### 5.0 Protocol for AI-Guided Formulation Optimization (SOP-GHS-AI-044)
This protocol describes the step-by-step procedure for utilizing Google Cloud Vertex AI for the final selection of Glucogen-XR excipient concentrations.

**Step 1: Input Vector Initialization**
Define the Excipient Concentration Ranges (ECR):
*   L-Histidine: 5 mM to 50 mM
*   Polysorbate 20: 0.001% to 0.05%
*   Mannitol: 100 mM to 300 mM
*   Glucogen-XR Concentration: 2 mg/mL to 20 mg/mL

**Step 2: Monte Carlo Simulation**
Run 50,000 iterations of the Monte Carlo simulation to account for manufacturing variability (e.g., pH drift of $\pm 0.2$ units).

**Step 3: Sensitivity Analysis (Sobol Indices)**
Determine the influence of each variable on the Global Stability Score (GSS).
Calculation for Total-Effect Index ($S_{Ti}$):
$$S_{Ti} = \frac{E_{X_{\sim i}}(Var_{X_i}(Y|X_{\sim i}))}{Var(Y)}$$

**Step 4: Bayesian Optimization**
Use Bayesian search to converge on the Global Optimum formulation. For Glucogen-XR, the optimum was identified as:
*   **Final Formulation:** 20 mM L-Histidine, 250 mM Mannitol, 0.02% Polysorbate 20, pH 6.8.

#### 6.0 Experimental Validation and Wet-Lab Correlation
To validate the ML model, a DoE (Design of Experiments) was performed on a 24-well plate using a Liquid Handling Robot (Equipment ID: GHS-LHR-09).

##### Table 6.1: Real-Time Stability Data vs. ML Prediction (Batch GLUC-2025-EXP7)
| Time Point | Condition | Parameter | ML Predicted | Analytical Result | Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T=0 | $5^\circ\text{C}$ | Purity | 99.5% | 99.7% | SEC-HPLC |
| T=3M | $25^\circ\text{C}$ | Purity | 98.1% | 98.3% | SEC-HPLC |
| T=6M | $25^\circ\text{C}$ | Purity | 96.4% | 96.2% | SEC-HPLC |
| T=1M | $40^\circ\text{C}$ | HMWP* | 1.2% | 1.1% | SEC-HPLC |
| T=3M | $40^\circ\text{C}$ | Deamidation | 2.4% | 2.6% | LC-MS/MS |

*\*HMWP: High Molecular Weight Proteins (Aggregates)*

#### 7.0 Regulatory Compliance and Algorithmic Transparency (QbD 2.0)
Consistent with **ICH Q8(R2)** (Pharmaceutical Development) and the FDA’s discussion paper on **Artificial Intelligence and Machine Learning (AI/ML) for Drug and Biological Product Development**, Google Health Sciences maintains a "Locked Model" for the final stage of development.

*   **Model Version:** GHS-DPS-01.v.4.2
*   **Validation Checksum:** SHA-256: 8f92b... (Verify against GHS Quality Cloud Logs)
*   **Human-in-the-Loop (HITL) Review:** Every ML-recommended formulation was reviewed and approved by a Senior Formulation Scientist (25+ years experience) before pilot batch manufacturing.

#### 8.0 Statistical Robustness and Confidence Intervals
The ML model outputs a probability distribution rather than a single point estimate. The 95% Confidence Interval (CI) for the stability of Glucogen-XR at the end of its 24-month shelf life (refrigerated) is calculated as:

$$\hat{y} \pm t_{\alpha/2, n-p} \sqrt{\hat{\sigma}^2 \mathbf{x}_0^T (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{x}_0}$$

Based on Batch GLUC-2025-015 through GLUC-2025-020, the predicted stability remains $>95.0\%$ with a 99.8% probability, significantly exceeding the USP acceptance criterion of $>90.0\%$.

#### 9.0 Continuous Learning and Post-Market Monitoring Plan
Post-approval, real-world stability data from commercial batches (e.g., Batch Series GLUC-2026-XXX) will be fed back into the Google Cloud BigQuery data warehouse. This "Digital Twin" of the Glucogen-XR formulation will allow for:
1.  **Proactive Deviation Detection:** Identifying batch-to-batch drift before it impacts product quality.
2.  **Excipient Lot Variability Assessment:** Using ML to adjust process parameters (e.g., fill speed) based on the specific molecular weight distribution of the Polysorbate 20 lot used.

#### 10.0 Conclusion
The integration of Machine Learning for formulation screening represents a paradigm shift in the CMC (Chemistry, Manufacturing, and Controls) strategy for Glucogen-XR. By utilizing Google Cloud AI, Google Health Sciences has ensured a formulation that is not only optimized for peptide stability but is also resistant to the thermal stresses encountered during the cold-chain distribution process.

***

**References:**
1.  *ICH Q8(R2) Pharmaceutical Development.*
2.  *FDA Guidance: "Using Artificial Intelligence and Machine Learning in the Development of Drug and Biological Products."*
3.  *Google Cloud Life Sciences Whitepaper: "Accelerating Peptide Therapeutics with Vertex AI."*
4.  *USP <129> Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for peptides).*

---

## Predictive Modeling for Stability

# MODULE 3: QUALITY (3.2.P.2 PHARMACEUTICAL DEVELOPMENT)
## SECTION: 3.2.P.2.1.2 Google Cloud AI Integration in Development
### SUBSECTION: Predictive Modeling for Stability (P.2.1.2.1)

---

#### 1.0 Executive Summary
The development of **Glucogen-XR (glucapeptide extended-release)** utilizes the **Google Health Sciences (GHS) Stability-AI Engine**, a proprietary machine learning framework hosted on Google Cloud Vertex AI. This approach shifts the stability paradigm from reactive empirical testing to a proactive, predictive computational model. By integrating high-throughput molecular dynamics (MD), historical GLP-1 receptor agonist datasets, and real-time degradation analytics, GHS has established a predictive stability profile that exceeds the requirements outlined in **ICH Q1A(R2)** and **ICH Q5C**.

This subsection details the architectural integration of AI in predicting the long-term stability of the Glucogen-XR drug product, specifically focusing on the degradation kinetics of the glucapeptide moiety and the structural integrity of the extended-release polymer matrix.

---

#### 2.0 Regulatory Framework and Compliance
The predictive modeling protocols for Glucogen-XR are designed to align with the following regulatory guidelines:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1E:** Evaluation of Stability Data.
*   **ICH Q8(R2):** Pharmaceutical Development (Quality by Design principles).
*   **FDA Guidance:** *Development and Submission of Near-Infrared Analytical Procedures* (for real-time monitoring).
*   **USP <1049>:** Guidelines for the Quality of Biological Products.

---

#### 3.0 Computational Architecture: The GHS Stability-AI Engine
The predictive model is built upon a multi-layered neural network architecture optimized for biochemical degradation pathways.

##### 3.1 Data Input Layers (Feature Engineering)
The model ingests high-dimensional data from three primary streams:
1.  **Primary Sequence & Structural Data:** AA sequence of Glucogen-XR, post-translational modification (PTM) sites, and 3D folding dynamics calculated via AlphaFold-Multimer (v3.1).
2.  **Environmental Stress Parameters:** Temperature ($2^{\circ}C$ to $40^{\circ}C$), Relative Humidity (RH 25% to 75%), Light exposure (ICH Q1B), and pH gradients (3.5 to 8.5).
3.  **Excipient Interaction Matrices:** Diffusion coefficients of the extended-release polymer, surfactant concentration gradients, and buffer capacity.

##### 3.2 Machine Learning Model Specifications
*   **Algorithm:** Gradient Boosted Decision Trees (XGBoost) combined with a Long Short-Term Memory (LSTM) Recurrent Neural Network for time-series forecasting.
*   **Training Set:** >450,000 data points from historical GLP-1 analogs and internal GHS developmental batches.
*   **Validation:** K-fold cross-validation ($k=10$) with an R² target of >0.98 for primary degradants.

---

#### 4.0 Predictive Stability Protocols: Step-by-Step Procedure

The following protocol defines the "AI-Accelerated Stability Assessment" (AASA) used to support the shelf-life assignment of Glucogen-XR.

| Step | Phase | Action | Technical Requirement |
| :--- | :--- | :--- | :--- |
| 1 | **Molecular Docking** | Simulate glucapeptide interaction with ER-Matrix | GROMACS 2024.1 on Google Cloud TPU v5p |
| 2 | **In Silico Stress** | Apply virtual Arrhenius stress models ($k = Ae^{-E_a/RT}$) | Simulation of 24 months in 48 hours |
| 3 | **Feature Extraction** | Identify High-Risk Degradation Sites (e.g., Asn-deamidation) | LC-MS/MS mapping correlated to AI predictions |
| 4 | **Model Refinement** | Feed real-time 6-month stability data into Vertex AI | Bayesian Optimization |

---

#### 5.0 Comparative Analysis: AI Prediction vs. Empirical Results
The following data represents the validation of the AI model against actual stability results for **Batch GLUC-2025-001** through **GLUC-2025-005**.

##### Table 5.1: Predicted vs. Observed Purity (%) at 25°C/60% RH
*Note: Data represents % Main Peak by SE-HPLC.*

| Batch Number | Timepoint | AI Predicted Purity (%) | Actual Observed Purity (%) | Variance ($\Delta$) | Statistical Confidence (P) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | T=0 | 99.85 | 99.88 | +0.03 | 0.999 |
| GLUC-2025-001 | T=3M | 99.12 | 99.08 | -0.04 | 0.994 |
| GLUC-2025-001 | T=6M | 98.45 | 98.41 | -0.04 | 0.991 |
| GLUC-2025-002 | T=6M | 98.42 | 98.46 | +0.04 | 0.992 |
| GLUC-2025-003 | T=12M*| 97.10 | 97.02 | -0.08 | 0.987 |
| GLUC-2025-004 | T=12M*| 97.08 | 97.15 | +0.07 | 0.988 |

*\*T=12M data for GLUC-2025-003/004 uses extrapolated AI modeling verified by accelerated 40°C data.*

---

#### 6.0 Forced Degradation and Pathway Prediction
The GHS Stability-AI Engine identified three primary degradation pathways for the Glucogen-XR molecule. Predictive modeling allowed for the optimization of the formulation (specifically the addition of Polysorbate 80 and Citrate buffer) to mitigate these risks.

##### 6.1 Pathway A: Asparagine Deamidation (Asn-28)
*   **Mechanism:** Hydrolytic cleavage of the amide group.
*   **AI Prediction:** Predicted rate constant $k_d = 1.2 \times 10^{-7} s^{-1}$ at pH 7.4.
*   **Mitigation Strategy:** Optimized pH to 6.2 ± 0.2, reducing predicted deamidation by 42%.

##### 6.2 Pathway B: Aggregation and Fibrillation
*   **Mechanism:** Hydrophobic collapse of the alpha-helix leading to beta-sheet formation.
*   **Simulation Data:**
    *   **Hydrophobic Exposure Score:** 0.42 (Calculated via Google Cloud AI).
    *   **Predicted T_m (Melting Temp):** $68.4^{\circ}C$.
    *   **Observed T_m (DSC):** $68.2^{\circ}C$.

---

#### 7.0 Batch-Specific Stability Forecasting (Real-Time Monitoring)
Every batch manufactured at the South San Francisco facility (Site ID: GHS-SSF-3000) is assigned a "Digital Twin" in Google Cloud.

##### Table 7.1: Batch GLUC-2025-009 Accelerated Stability Forecast (40°C/75% RH)
| Parameter | Method | Limit | Predicted Failure (Days) | Actual Failure (Days) |
| :--- | :--- | :--- | :--- | :--- |
| Assay | RP-HPLC | 90-110% | 184 | 181 |
| Total Impurities | RP-HPLC | NMT 2.0% | 142 | 145 |
| pH | USP <791> | 6.0-6.4 | >365 | >365 |
| Sub-visible Particles| USP <788> | NMT 6000/cont | 210 | 218 |

---

#### 8.0 Calculation of Arrhenius Activation Energy ($E_a$)
The AI engine utilizes a modified Arrhenius equation to incorporate moisture-induced degradation (Humidity Sensitivity Coefficient, $\gamma$).

$$k = A \cdot \exp\left(\frac{-E_a}{RT}\right) \cdot \exp(\gamma \cdot \%RH)$$

**Calculated Values for Glucogen-XR:**
*   $E_a$: $105.4 kJ/mol$
*   $A$ (Pre-exponential factor): $4.2 \times 10^{14} day^{-1}$
*   $\gamma$ (Humidity Factor): $0.034$

These constants are derived from the aggregate data of batches **GLUC-2025-001** through **GLUC-2025-015** using Google Cloud’s BigQuery ML.

---

#### 9.0 Sensitivity Analysis: Impact of Excipient Variability
The model assessed the impact of $\pm 10\%$ variation in the concentration of the extended-release polymer (GHS-Polymer-X).

| Excipient | Var (%) | Predicted Impact on T90 (Months) | Risk Level |
| :--- | :--- | :--- | :--- |
| GHS-Polymer-X | +10% | +1.2 | Low |
| GHS-Polymer-X | -10% | -0.8 | Low |
| Citrate Buffer | -20% | -4.5 | High (pH Drift) |
| Polysorbate 80| -50% | -12.0 | Critical (Aggregation)|

---

#### 10.0 Conclusion
The predictive modeling for stability confirms that **Glucogen-XR** maintains a robust quality profile. The GHS Stability-AI Engine predicts a shelf-life of **36 months at $2-8^{\circ}C$** and **60 days at room temperature ($25^{\circ}C$)**, with a 99.7% confidence interval. This modeling allows for a "Release by Exception" framework, where real-time AI monitoring alerts quality units to potential stability deviations before they cross regulatory thresholds.

---
**End of Subsection P.2.1.2.1**
*Confidential - Google Health Sciences Internal Regulatory Document*
*Document ID: GHS-GLUC-STAB-2025-REV01*

---

## Data Analytics for Process Optimization

# MODULE 3: QUALITY (3.2.P DRUG PRODUCT)
## SECTION 3.2.P.2 PHARMACEUTICAL DEVELOPMENT
### SUBSECTION 3.2.P.2.7: GOOGLE CLOUD AI INTEGRATION IN DEVELOPMENT
#### SUB-SUBSECTION 3.2.P.2.7.4: DATA ANALYTICS FOR PROCESS OPTIMIZATION

---

### 1.0 Executive Summary
In the development of **Glucogen-XR (glucapeptide extended-release)**, Google Health Sciences (GHS) has implemented a revolutionary "Data-First" paradigm for process optimization. Leveraging the proprietary **Google Cloud Life Sciences (GCLS) AI/ML Engine**, specifically the **Vertex AI** and **BigQuery ML** frameworks, GHS has transitioned from traditional One-Factor-at-a-Time (OFAT) and standard Design of Experiments (DoE) to a continuous, high-dimensional **Multivariate Data Analysis (MVDA)** and **Reinforcement Learning (RL)** optimization strategy.

This section details the deployment of advanced analytics to optimize the formulation and fill-finish parameters for Glucogen-XR, ensuring a Critical Quality Attribute (CQA) profile that meets the stringent requirements for a long-acting GLP-1 receptor agonist.

### 2.0 Regulatory Framework and Compliance
The data analytics workflows described herein comply with the following international guidelines and regulatory frameworks:
*   **ICH Q8(R2):** Pharmaceutical Development (Quality by Design principles).
*   **ICH Q9:** Quality Risk Management.
*   **ICH Q10:** Pharmaceutical Quality System.
*   **FDA Guidance:** "Process Validation: General Principles and Practices" (Jan 2011).
*   **FDA Guidance:** "PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance."
*   **21 CFR Part 11:** Electronic Records; Electronic Signatures (All GCLS AI models are validated under GxP-compliant pipelines).

### 3.0 Architecture of the GCLS AI Analytics Engine
The Glucogen-XR optimization platform utilizes a tiered architecture to ingest, process, and analyze batch data from the South San Francisco manufacturing site (3000 Innovation Drive).

#### 3.1 Data Ingestion (The "Data Lakehouse")
All raw data from equipment (e.g., Cytiva ÄKTA™ systems, Bosch Fill-Finish lines) is streamed via **Cloud IoT Core** into **BigQuery**.
*   **Time-Series Data:** Sensor data at 1Hz frequency (Temperature, Pressure, pH, Conductivity).
*   **LIMS Data:** Analytical results from HPLC, CE-SDS, and Bioassays.
*   **Metadata:** Batch numbers (Format: GLUC-2025-XXX), operator IDs, and reagent lot numbers.

#### 3.2 Machine Learning Model Selection
For Glucogen-XR process optimization, three primary model types are utilized:
1.  **Bayesian Optimization Models:** Used for initial DoE to find the "Global Optimum" with minimal experimental runs.
2.  **Recurrent Neural Networks (RNN/LSTM):** Used for real-time anomaly detection in the extended-release polymer conjugation phase.
3.  **Random Forest Regressors:** Used for feature importance ranking (identifying Critical Process Parameters or CPPs).

---

### 4.0 Case Study: Optimization of Glucogen-XR Polymer Conjugation Efficiency
A critical step in Glucogen-XR production is the site-specific conjugation of the glucapeptide to the proprietary extended-release (XR) polymer matrix.

#### 4.1 Problem Statement
Initial pilot batches (GLUC-2025-001 to GLUC-2025-005) showed high variability in conjugation efficiency (65% to 82%), leading to inconsistent pharmacokinetics. Traditional DoE identified pH and Temperature as key, but failed to account for the synergistic effect of agitation speed and buffer ionic strength.

#### 4.2 Data Analytics Protocol (GHS-AI-SOP-402)
The following protocol was executed using the Google Vertex AI Workbench:

**Step 1: Data Aggregation**
Extract all historical data for GLUC-2025-series batches.
```sql
SELECT batch_id, ph_value, temp_c, agitation_rpm, ionic_strength, conjugation_yield_pct
FROM `google-health-sciences.glucogen_xr.process_data`
WHERE batch_id LIKE 'GLUC-2025-%'
```

**Step 2: Feature Engineering**
Calculate the **Thermal Integral (TI)** for each batch—a measure of total energy input:
$$TI = \int_{t_0}^{t_{end}} (T(t) - T_{ambient}) dt$$

**Step 3: Model Training**
A Gradient Boosted Tree (XGBoost) model was trained to predict `conjugation_yield_pct`.
*   **Learning Rate:** 0.05
*   **Max Depth:** 6
*   **Subsample:** 0.8

**Step 4: Sensitivity Analysis (Shapley Values)**
SHAP (SHapley Additive exPlanations) values were used to determine the contribution of each parameter to the yield.

#### 4.3 Results: Feature Importance and Interaction Matrix
The AI model identified a non-linear interaction between pH and Agitation RPM that was previously unknown.

| Parameter | Impact Score (SHAP) | Optimal Range (AI-Derived) | Historical Range |
| :--- | :--- | :--- | :--- |
| **pH** | 0.42 | 7.42 - 7.48 | 7.20 - 7.80 |
| **Temperature** | 0.28 | 4.1°C - 4.3°C | 2.0°C - 8.0°C |
| **Agitation (RPM)** | 0.15 | 125 - 130 | 100 - 150 |
| **Ionic Strength** | 0.10 | 145 - 155 mM | 120 - 180 mM |
| **Impurity Level** | 0.05 | < 0.2% | < 0.5% |

---

### 5.0 Batch Analytics Data Table (Optimization Phase)
The following table presents the data from the optimization cohort (GLUC-2025-010 to GLUC-2025-020), where AI-recommended setpoints were applied.

**Table 1: Comparison of Process Parameters and Outcomes**

| Batch Number | Date of Mfg | AI-Optimized? | pH (Mean) | Temp (°C) | Yield (%) | Purity (%) | Aggregate (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-010 | 2025-02-12 | No | 7.35 | 5.2 | 74.2 | 98.1 | 1.2 |
| GLUC-2025-011 | 2025-02-14 | No | 7.62 | 3.8 | 71.5 | 97.8 | 1.5 |
| **GLUC-2025-012** | **2025-02-18** | **Yes** | **7.45** | **4.2** | **94.8** | **99.6** | **0.2** |
| GLUC-2025-013 | 2025-02-20 | Yes | 7.46 | 4.2 | 95.1 | 99.7 | 0.1 |
| GLUC-2025-014 | 2025-02-22 | Yes | 7.44 | 4.1 | 93.9 | 99.5 | 0.3 |
| GLUC-2025-015 | 2025-02-25 | Yes | 7.45 | 4.2 | 96.2 | 99.8 | 0.1 |
| GLUC-2025-016 | 2025-02-27 | Yes | 7.45 | 4.3 | 94.7 | 99.4 | 0.2 |
| GLUC-2025-017 | 2025-03-01 | Yes | 7.47 | 4.2 | 95.5 | 99.6 | 0.2 |
| GLUC-2025-018 | 2025-03-03 | Yes | 7.45 | 4.1 | 94.2 | 99.5 | 0.3 |
| GLUC-2025-019 | 2025-03-05 | Yes | 7.45 | 4.2 | 95.8 | 99.7 | 0.1 |
| GLUC-2025-020 | 2025-03-07 | Yes | 7.46 | 4.2 | 95.3 | 99.7 | 0.2 |

**Statistical Summary of AI vs. Non-AI Batches:**
*   **Mean Yield (Non-AI):** 72.85% (σ = 1.35)
*   **Mean Yield (AI-Optimized):** 95.05% (σ = 0.72)
*   **P-Value:** < 0.0001 (Highly Significant)

---

### 6.0 Predictive Stability Modeling (Digital Twins)
Google Cloud AI was used to develop a "Digital Twin" of Glucogen-XR. By training on accelerated stability data (25°C/60%RH and 40°C/75%RH), the AI predicted the long-term stability at 5°C.

#### 6.1 Kinetic Modeling Equations
The model incorporates an AI-enhanced Arrhenius equation:
$$k = A \cdot e^{\frac{-(E_a + \delta E_a)}{RT}}$$
where $\delta E_a$ is the variance term learned by the ML model based on excipient lot-to-lot variability.

#### 6.2 Predicted Shelf-Life Data
Using the GCLS stability predictor, Glucogen-XR is projected to maintain >95% potency for 36 months when stored at 2-8°C.

**Table 2: Predicted vs. Observed Potency (Batch GLUC-2025-012)**

| Time Point (Months) | Predicted Potency (%) | Actual Observed (%) | Deviation |
| :--- | :--- | :--- | :--- |
| 0 | 100.0 | 100.0 | 0.00 |
| 3 | 99.8 | 99.7 | -0.10 |
| 6 | 99.5 | 99.6 | +0.10 |
| 12 | 98.9 | 99.1 | +0.20 |
| 24 | 97.4 | TBD | N/A |
| 36 | 95.8 | TBD | N/A |

---

### 7.0 Real-Time Multivariate Process Control (MPC)
Google Health Sciences has implemented a **closed-loop feedback system** for the fill-finish operation. This system utilizes a Convolutional Neural Network (CNN) to monitor vial integrity and fill-volume precision.

#### 7.1 Fill-Finish Monitoring Protocol
1.  **Image Capture:** 400 frames per second (fps) using high-speed cameras on the Bosch line.
2.  **Processing:** Vertex AI Edge Manager processes images in <5ms.
3.  **Classification:**
    *   *Class 0:* Acceptable Fill.
    *   *Class 1:* Particle Detected (Reject).
    *   *Class 2:* Improper Stopper Seating (Reject).
    *   *Class 3:* Volume Deviation >±0.5% (Recalibrate Pump).

#### 7.2 Performance Metrics (Validation Batches)
For batches GLUC-2025-050 through GLUC-2025-060, the AI-driven MPC reduced rejection rates by 42%.

**Table 3: Fill-Finish Rejection Analysis**

| Batch Number | Total Vials | AI Rejects (Particles) | AI Rejects (Stopper) | AI Rejects (Volume) | Net Yield (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-050 | 50,000 | 12 | 8 | 15 | 99.93 |
| GLUC-2025-051 | 50,000 | 10 | 5 | 11 | 99.95 |
| GLUC-2025-052 | 50,000 | 15 | 12 | 19 | 99.91 |
| GLUC-2025-053 | 50,000 | 8 | 4 | 9 | 99.96 |
| **Total/Avg** | **200,000** | **45 (0.02%)** | **29 (0.01%)** | **54 (0.03%)** | **99.94%** |

---

### 8.0 Statistical Quality Control (SQC) and CPK Analysis
The AI platform calculates Process Capability Indices (Cpk) in real-time. For Glucogen-XR, the target Cpk for Conjugation Efficiency is >1.67.

#### 8.1 Calculation of Cpk
$$Cpk = \min\left[ \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right]$$
Where:
*   $USL$ (Upper Specification Limit) = 100%
*   $LSL$ (Lower Specification Limit) = 90%
*   $\mu$ (Mean) = 95.05%
*   $\sigma$ (Standard Deviation) = 0.72%

$$Cpk = \min\left[ \frac{100 - 95.05}{2.16}, \frac{95.05 - 90}{2.16} \right] = \min [2.29, 2.34] = 2.29$$

A Cpk of **2.29** indicates an "Ultra-Lean" Six Sigma process, significantly reducing the risk of batch failure.

### 9.0 Future Directions: Generative AI for Formulation
Google Health Sciences is currently piloting **Generative Pre-trained Transformers (GPT)** tailored for protein-polymer interactions. These models (GHS-Formulate-v1) are being used to predict the next generation of Glucogen-XR stabilizers, potentially allowing for room-temperature stability.

### 10.0 Conclusion
The integration of Google Cloud AI into the development of Glucogen-XR represents a paradigm shift in pharmaceutical manufacturing. By utilizing BigQuery ML, Vertex AI, and real-time MPC, Google Health Sciences has achieved unprecedented process control, maximizing yield and ensuring the highest level of patient safety and product quality. All AI models remain under strict version control (Git-based) and are audited annually per GxP requirements.

---
**END OF SUBSECTION**
**Document ID:** GHS-M3-DP-2.7.4-2025
**Author:** Google Health Sciences Regulatory Affairs
**Confidentiality:** Level 4 (Proprietary Information)

---

