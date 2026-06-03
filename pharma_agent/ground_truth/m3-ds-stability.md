# Drug Substance - Stability

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 23:11:33

---

# Stability Protocol and Study Design

## ICH Stability Guidelines Application

### **3.2.S.7.1.1 ICH STABILITY GUIDELINES APPLICATION**

The stability program for **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences (GHS)**, is meticulously designed to adhere to the harmonized tripartite guidelines established by the International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH). This section delineates the application of specific ICH modules to the Drug Substance (DS) stability program, ensuring that the kinetic degradation profiles, shelf-life estimations, and storage conditions are scientifically robust and regulatory compliant for the US Food and Drug Administration (FDA).

---

#### **I. REGULATORY FRAMEWORK AND GUIDELINE ADHERENCE**

The stability assessment of Glucogen-XR is governed by the following primary regulatory frameworks:

1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
3.  **ICH Q1C:** Stability Testing for New Dosage Forms.
4.  **ICH Q1D:** Bracketing and Matrixing Designs for Stability Testing.
5.  **ICH Q1E:** Evaluation of Stability Data.
6.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
7.  **USP <1049>:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.

As a GLP-1 receptor agonist produced via a recombinant CHO-K1 GS knockout cell line (GHS-CHO-001), Glucogen-XR is classified as a large-molecule biologic/peptide therapeutic. Therefore, the rigorous requirements of **ICH Q5C** take precedence regarding the maintenance of higher-order structure (HOS) and biological potency.

---

#### **II. STABILITY STUDY DESIGN AND BATCH SELECTION**

In alignment with **ICH Q1A(R2) Section 2.1.3**, GHS has selected three primary registration batches for the formal stability program. These batches were manufactured at the Google Health Sciences commercial facility (3000 Innovation Drive, South San Francisco) using a process representative of the final commercial scale.

##### **Table 1: Identification of Primary Stability Batches for Glucogen-XR DS**

| Batch Number | Scale | Manufacturing Date | Site ID | Purpose | Container Closure System |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L (Pilot) | 12-JAN-2025 | GHS-SSF-01 | Primary Stability | Type 1 Borosilicate / Teflon-lined Cap |
| **GLUC-2025-002** | 2000L (Pilot) | 02-FEB-2025 | GHS-SSF-01 | Primary Stability | Type 1 Borosilicate / Teflon-lined Cap |
| **GLUC-2025-003** | 2000L (Commercial) | 15-MAR-2025 | GHS-SSF-02 | Registration Stability | Type 1 Borosilicate / Teflon-lined Cap |

---

#### **III. STORAGE CONDITIONS AND CLIMATIC ZONE ALIGNMENT**

Per **ICH Q1A(R2) Section 2.1.7**, the storage conditions are selected based on the proposed long-term storage of the drug substance. Since Glucogen-XR is a peptide-based biologic sensitive to thermal denaturation, the Long-Term storage condition is established at $-70^\circ\text{C} \pm 10^\circ\text{C}$ (Ultra-Low Temperature Frozen).

##### **Table 2: ICH Stability Testing Conditions for Glucogen-XR**

| Study Type | Storage Condition | Frequency (Months) | Duration |
| :--- | :--- | :--- | :--- |
| **Long-Term** | $-70^\circ\text{C} \pm 10^\circ\text{C}$ | 0, 3, 6, 9, 12, 18, 24, 36 | 36 Months |
| **Intermediate** | $-20^\circ\text{C} \pm 5^\circ\text{C}$ | 0, 3, 6, 9, 12 | 12 Months |
| **Accelerated** | $5^\circ\text{C} \pm 3^\circ\text{C}$ | 0, 1, 3, 6 | 6 Months |
| **Stress Testing** | $25^\circ\text{C} \pm 2^\circ\text{C}$ / 60% RH | 0, 7 days, 14 days, 1 month | 1 Month |

*Note: Accelerated testing at $5^\circ\text{C}$ is utilized to determine the impact of short-term excursions outside the frozen state, as per ICH Q5C.*

---

#### **IV. PROTOCOL FOR ANALYTICAL TESTING (STABILITY-INDICATING PROFILE)**

The following protocols are applied to every time point specified in Table 2. The methods have been validated as "Stability-Indicating" (SIM) in accordance with **ICH Q2(R1)**.

##### **4.1 Physical State and Appearance**
*   **Protocol:** Visual inspection under polarized light for clarity, color, and opalescence (USP <790>).
*   **Acceptance Criteria:** Clear to slightly opalescent, colorless to slightly yellow liquid, free from visible particulates.

##### **4.2 Potency and Biological Activity**
*   **Assay:** In vitro GLP-1 Receptor Activation Assay (cAMP Response Element - Luciferase Reporter).
*   **Calculation:** Relative potency is calculated using a 4-parameter logistic (4PL) model comparing the $EC_{50}$ of the stability sample (GLUC-2025-XXX) to the $EC_{50}$ of the Reference Standard (GHS-RS-2024).
*   **Acceptance Criteria:** 80% – 125% of Reference Standard.

##### **4.3 Purity and Degradation Products (Chromatographic)**
*   **RP-HPLC (Reversed-Phase):** Detects deamidation and oxidation (Met-sulfoxide species).
*   **SEC-HPLC (Size-Exclusion):** Detects high molecular weight species (HMWS) and aggregates.
*   **Calculation:**
    $$\text{Purity \%} = \left( \frac{\text{Area of Main Peak}}{\sum \text{Total Area}} \right) \times 100$$
*   **Acceptance Criteria:** SEC Purity $\ge 98.0\%$; Total Impurities $\le 2.0\%$.

---

#### **V. DATA EVALUATION AND STATISTICAL ANALYSIS (ICH Q1E)**

Google Health Sciences employs the statistical models outlined in **ICH Q1E** to determine the Re-test Period. If the data show a significant trend over time, a linear regression analysis is performed.

##### **5.1 Statistical Regression Formula**
The degradation rate is modeled as:
$$Y = \beta_0 + \beta_1 X + \epsilon$$
Where:
*   $Y$ = Quantitative attribute (e.g., % Purity)
*   $X$ = Time (Months)
*   $\beta_0$ = Intercept (calculated initial value)
*   $\beta_1$ = Slope (degradation rate)
*   $\epsilon$ = Error term

##### **5.2 Shelf-Life Estimation**
The shelf-life is defined as the time at which the **95% one-sided lower confidence limit** (for decreasing attributes like potency) or **upper confidence limit** (for increasing attributes like impurities) intersects the acceptance criterion.

---

#### **VI. PHOTOSTABILITY (ICH Q1B)**

Glucogen-XR DS is subjected to forced photodegradation to evaluate the sensitivity of the peptide backbone and the aromatic side chains (Trp, Tyr, Phe).

*   **Option 2 Light Source:** Cool white fluorescent lamp and near-UV lamp.
*   **Exposure:** Minimum 1.2 million lux hours and 200 watt-hours/m² (integrated UV energy).
*   **Samples:**
    1.  Fully Exposed (Direct).
    2.  Protected (Wrapped in Aluminum Foil - Dark Control).
    3.  Final Container Closure.

---

#### **VII. FORCED DEGRADATION STUDIES (STRESS TESTING)**

In accordance with **ICH Q1A(R2) Section 2.1.2**, stress studies are performed to establish the degradation pathways of Glucogen-XR and validate the stability-indicating power of the analytical methods.

##### **Table 3: Stress Testing Parameters and Observations (Batch GLUC-2025-001)**

| Stressor | Conditions | Primary Degradation Path | Impact on Potency |
| :--- | :--- | :--- | :--- |
| **Acid Hydrolysis** | 0.1M HCl, 24h | Deamidation at Asn-28 | Moderate Loss |
| **Base Hydrolysis** | 0.1M NaOH, 24h | Aggregation/Precipitation | Severe Loss |
| **Oxidation** | $0.3\% \text{ H}_2\text{O}_2$, 6h | Met-sulfoxide formation | Moderate Loss |
| **Thermal Stress** | $40^\circ\text{C}$, 7 days | $\alpha$-helix to $\beta$-sheet transition | Complete Loss |
| **Agitation** | 300 RPM, 48h | Mechanical Shear Aggregates | Minimal Loss |

---

#### **VIII. MATRIXING AND BRACKETING (ICH Q1D)**

For the DS stability program, Google Health Sciences has elected **not** to use bracketing or matrixing. A full testing design is applied to all three primary batches (GLUC-2025-001, -002, -003) at all time points to provide maximum data density for the initial BLA (Biologics License Application) filing. This conservative approach ensures the highest level of confidence in the proposed 36-month shelf life at $-70^\circ\text{C}$.

---

#### **IX. STABILITY COMMITMENT**

Following the approval of the BLA, Google Health Sciences commits to the following (per **ICH Q1A Section 2.1.9**):
1.  Continuing the long-term studies for the three primary batches through the proposed shelf-life of 36 months.
2.  Placing the first three commercial production batches on long-term stability.
3.  Placing at least one batch per year of produced drug substance on the annual stability program.

---

**End of Subsection 3.2.S.7.1.1**
*Document Reference: GHS-REG-M3-STAB-01*
*Effective Date: 15-MAY-2025*
*Approved by: Dr. Aris Xanthos, VP Regulatory Affairs, Google Health Sciences*

---

## Storage Conditions and Time Points

### 3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS: STORAGE CONDITIONS AND TIME POINTS

**Module:** 3.2.S.7.1  
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Document ID:** GHS-DS-STAB-PROT-2025-001  
**Date of Issue:** October 24, 2024  
**Regulatory Framework:** ICH Q1A(R2), ICH Q1B, ICH Q5C, ICH Q6B  

---

#### 1.0 INTRODUCTION AND OBJECTIVE

The purpose of this subsection is to delineate the comprehensive storage conditions and temporal testing matrices established for the Drug Substance (DS) stability program of Glucogen-XR. Glucogen-XR is a high-molecular-weight, long-acting GLP-1 receptor agonist produced via a proprietary CHO-K1 GS knockout derivative cell line (GHS-CHO-001). 

Given the thermodynamic sensitivity of the glucapeptide moiety and the complex polymer-matrix interactions required for extended-release kinetics, the stability program is designed to monitor biochemical degradation, physical aggregation, and functional potency over a range of environmental stressors. All studies are conducted under Good Manufacturing Practice (GMP) in compliance with 21 CFR Parts 210 and 211.

---

#### 2.0 STORAGE CONDITION HIERARCHY

Storage conditions are defined based on the intended long-term storage of the DS ($<-60^{\circ}\text{C}$ in the frozen state) and potential excursions encountered during drug product (DP) manufacturing and shipping.

##### 2.1 Primary Storage (Long-Term): $-70^{\circ}\text{C} \pm 10^{\circ}\text{C}$
The primary storage condition for Glucogen-XR DS is ultra-low temperature (ULT). This condition is intended to minimize the rate of deamidation, oxidation, and spontaneous hydrolysis. 
*   **Equipment:** Thermo Scientific™ TSU Series Upright ULT Freezers (Asset IDs: ULT-GHS-901 through ULT-GHS-912).
*   **Monitoring:** Continuous 24/7 monitoring via Google Cloud IoT Core integrated with the REES Scientific Centron system.

##### 2.2 Accelerated Storage: $-20^{\circ}\text{C} \pm 5^{\circ}\text{C}$
Used to evaluate the impact of significant temperature excursions and to establish a correlation between frozen states.
*   **Rational:** To determine if standard clinical site freezers can temporarily house the DS during formulation trials.

##### 2.3 Stressed Storage (Intermediate/Short-Term): $5^{\circ}\text{C} \pm 3^{\circ}\text{C}$
This condition represents the "thawed" state during drug product compounding.
*   **Duration:** Maximum of 120 hours (5 days) allowed for compounding; however, stability is tested up to 6 months to define the safety margin.

##### 2.4 Forced Degradation and Photostability
Conducted according to ICH Q1B (Option 2) to characterize the intrinsic stability of the molecule.

---

#### 3.0 TEMPORAL TESTING MATRICES (TIME POINTS)

The stability testing intervals are structured to provide a high-frequency data density in the first year of the product lifecycle to facilitate rapid shelf-life estimation via Arrhenius modeling.

##### 3.1 Table 1: Matrix for Long-Term Stability ($-70^{\circ}\text{C} \pm 10^{\circ}\text{C}$)
Testing is performed on three primary registration batches (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003).

| Time Point (Months) | Testing Category | Expected Date (GLUC-2025-001) | Sample Quantity (Alu-Pouch + Cryo) |
| :--- | :--- | :--- | :--- |
| 0 (Initial) | Full Release | Jan 15, 2025 | $n=10 \text{ vials}$ |
| 3 | Stability Suite A | Apr 15, 2025 | $n=5 \text{ vials}$ |
| 6 | Stability Suite A | Jul 15, 2025 | $n=5 \text{ vials}$ |
| 9 | Stability Suite A | Oct 15, 2025 | $n=5 \text{ vials}$ |
| 12 | Full Release + Suite B | Jan 15, 2026 | $n=12 \text{ vials}$ |
| 18 | Stability Suite A | Jul 15, 2026 | $n=5 \text{ vials}$ |
| 24 | Full Release + Suite B | Jan 15, 2027 | $n=12 \text{ vials}$ |
| 36 | Full Release + Suite B | Jan 15, 2028 | $n=12 \text{ vials}$ |
| 48 | End of Study | Jan 15, 2029 | $n=12 \text{ vials}$ |

**Suite A Includes:** Appearance, pH, Protein Concentration (UV A280), Purity (SEC-HPLC, RP-HPLC), Potency (Cell-based Bioassay), Visible Particulates.  
**Suite B Includes:** Suite A + N-terminal Sequencing, Peptide Mapping (LC-MS/MS), Sub-visible Particulates (USP <788>), Endotoxin, and Bioburden.

---

#### 4.0 DETAILED BATCH CHARACTERIZATION AND ALLOCATION

The following table details the specific batches of Glucogen-XR DS entered into the stability program. All batches were manufactured at the South San Francisco facility (3000 Innovation Drive).

##### 4.1 Table 2: Batch Enrollment and Inventory Strategy

| Batch Number | Scale | Date of Manufacture | Container Closure System | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | Jan 05, 2025 | 1L Polycarbonate Bottle / Teflon Cap | Active |
| **GLUC-2025-002** | 2000L | Jan 12, 2025 | 1L Polycarbonate Bottle / Teflon Cap | Active |
| **GLUC-2025-003** | 2000L | Jan 19, 2025 | 1L Polycarbonate Bottle / Teflon Cap | Active |
| **GLUC-2025-004** | 500L | Feb 02, 2025 | 250mL PC Bottle (Pilot Scale) | Supplemental |

---

#### 5.0 STEP-BY-STEP STABILITY PROTOCOLS

To ensure inter-lab reproducibility between Google Health Sciences and contract testing organizations (CTOs), the following procedures are mandated for sample handling.

##### 5.1 Sample Retrieval and Thawing Protocol (SOP-STAB-044)
1.  **Verification:** Confirm the Batch ID and Time Point in the LIMS (Laboratory Information Management System).
2.  **Retrieval:** Remove samples from $-70^{\circ}\text{C}$ storage using cryogenic PPE. Transfer immediately to a portable dry ice carrier.
3.  **Thawing:** Place the frozen PC bottle in a controlled water bath at $25^{\circ}\text{C} \pm 2^{\circ}\text{C}$.
4.  **Agitation:** Gently invert the bottle 10 times every 15 minutes. **Do not vortex.**
5.  **Equilibration:** Once no visible ice remains, allow the bottle to sit at room temperature for 30 minutes before withdrawing aliquots for Suite A/B testing.

##### 5.2 Freeze-Thaw Stress Protocol (SOP-STAB-089)
To simulate potential transport failures, DS is subjected to five (5) consecutive freeze-thaw cycles.
*   **Cycle Definition:** 24 hours at $-70^{\circ} \text{C}$ followed by 4 hours at $25^{\circ} \text{C}$.
*   **Assessment:** SEC-HPLC is the primary indicator of aggregate formation during these cycles. Limits are set at $\le 2.0\%$ High Molecular Weight Species (HMWS).

---

#### 6.0 STATISTICAL ANALYSIS AND SHELF-LIFE PROJECTION

Google Health Sciences utilizes a Bayesian linear regression model to predict the Time-to-Failure (TTF). The primary stability indicator for Glucogen-XR is the loss of "Main Peak" purity via RP-HPLC.

**Degradation Formula (First-Order Kinetics):**
$$C_t = C_0 \cdot e^{-kt}$$
Where:
*   $C_t$ = Concentration/Purity at time $t$
*   $C_0$ = Initial Purity
*   $k$ = Degradation rate constant
*   $t$ = Time in months

The shelf life ($t_{95}$) is defined as the time at which the lower 95% confidence interval for the mean degradation curve intersects the specification limit (e.g., 90.0% purity).

---

#### 7.0 PHOTODESENSITIVITY TESTING (ICH Q1B)

Glucogen-XR contains a tryptophan-rich sequence in the glucapeptide domain, making it susceptible to photo-oxidation.

**Condition 1: Light Exposure**
*   **Illuminance:** Not less than 1.2 million lux hours.
*   **Ultraviolet Energy:** Not less than 200 watt hours/square meter.
*   **Batch:** GLUC-2025-001.
*   **Resulting Action:** If degradation $>0.5\%$ is observed, the DS must be stored in amber-tinted primary containers or secondary light-protective foil over-wrap.

---

#### 8.0 DEVIATION MANAGEMENT AND EXCURSIONS

Per USP <1079>, any temperature excursion outside the $\pm 10^{\circ}\text{C}$ range for long-term storage must be documented in the Google Cloud Quality Management System (QMS).

1.  **Excursions $< 24$ hours:** No impact expected; continue study.
2.  **Excursions $> 24$ hours:** Samples must be analyzed immediately for "Suite A" parameters.
3.  **Mean Kinetic Temperature (MKT) Calculation:** 
    $$T_k = \frac{\Delta H / R}{-\ln \left( \frac{e^{-\Delta H / RT_1} + e^{-\Delta H / RT_2} + \dots + e^{-\Delta H / RT_n}}{n} \right)}$$
    Where $\Delta H$ is the activation energy for degradation (assumed 83.14 kJ/mol for Glucogen-XR).

---

#### 9.0 FOOTNOTES AND REFERENCES

1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
4.  **Internal Report GHS-2024-TR-09:** *Molecular Dynamics Simulation of Glucapeptide Aggregation at $-20^{\circ}\text{C}$ vs $-70^{\circ}\text{C}$.*

---

*End of Subsection 3.2.S.7.1*

---

## Sample Plan and Containers

### 3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS: SAMPLE PLAN AND CONTAINERS

**Document ID:** GHS-GLUC-XR-M3-DS-STAB-SPC-001  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Sponsor:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Effective Date:** 15-Oct-2024  

---

#### 3.2.S.7.1.1 Introduction and Scope
This section details the comprehensive Sampling Plan and Container-Closure System (CCS) evaluation for the Drug Substance (DS) of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line. The sampling strategy is designed in accordance with ICH Q1A(R2) (*Stability Testing of New Drug Substances and Products*), ICH Q5C (*Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*), and USP <1207> (*Package Integrity Evaluation—Sterile Products*).

The sampling plan ensures that representative aliquots of the DS are monitored under stressed, accelerated, and long-term storage conditions to provide statistically significant data regarding the shelf-life, retest period, and integrity of the primary packaging.

---

#### 3.2.S.7.1.2 Primary Container-Closure System (CCS) Specifications
The Glucogen-XR Drug Substance is stored in a high-density polyethylene (HDPE) or fluoropolymer-based system designed to withstand cryogenic storage (-70°C to -80°C) and ensure minimal leachable/extractable profiles.

##### 3.2.S.7.1.2.1 Component Detailed Description
The stability studies utilize a scale-down model of the commercial storage container to maintain a representative surface-area-to-volume (SA/V) ratio.

**Table 1: Drug Substance Primary Packaging Components**

| Component ID | Manufacturer | Material of Construction (MOC) | Specifications / Compliance |
| :--- | :--- | :--- | :--- |
| **Primary Bottle** | GHS-PKG-001 | High-Density Polyethylene (HDPE) | USP <661.2>, EP 3.1.3 |
| **Secondary Closure** | GHS-CAP-002 | Polypropylene (PP) with Bromobutyl Liner | USP <381>, USP <87>, <88> |
| **Sterile Barrier** | GHS-BAG-009 | Single-use Platinum-cured Silicone / LDPE | ISO 10993, USP <665> |
| **O-Ring** | GHS-OR-05 | Ethylene Propylene Diene Monomer (EPDM) | FDA 21 CFR 177.2600 |

##### 3.2.S.7.1.2.2 Rationale for Container Selection
The selection of the fluorinated HDPE system was based on comprehensive compatibility studies (Study ID: GHS-COMP-2023-012). Glucapeptide, being a highly hydrophobic peptide prone to surface adsorption, showed <0.5% loss of titer when stored in fluorinated HDPE compared to 4.2% loss in standard Type I Borosilicate glass over a 30-day period at 2-8°C.

---

#### 3.2.S.7.1.3 Statistical Sampling Plan and Sample Size Determination

The sampling plan utilizes a "Bracketing and Matrixing" approach as per ICH Q1D. However, for the primary registration batches (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003), a full-factor design is employed to establish the baseline degradation kinetics.

##### 3.2.S.7.1.3.1 Calculation of Minimum Sample Quantity
The volume of DS required for each time point is calculated based on the cumulative volume requirements of the analytical methods listed in the Stability Specification (Table 3.2.S.7.1-5).

**Formula for Total Sample Volume ($V_{total}$):**
$$V_{total} = (n \times V_{testing}) + V_{reserve} + V_{overfill}$$
Where:
*   $n$ = Number of time points (e.g., 0, 3, 6, 9, 12, 18, 24, 36 months)
*   $V_{testing}$ = Sum of volumes for RP-HPLC, SE-HPLC, iCE3, Bioassay, and Bioburden (approx. 12.5 mL)
*   $V_{reserve}$ = 100% contingency for re-testing
*   $V_{overfill}$ = Loss during pipetting/transfer (approx. 5%)

**Table 2: Sample Quantity per Time Point per Batch**

| Test Category | Methodology | Required Volume (mL) | Replicates | Total per Pull (mL) |
| :--- | :--- | :--- | :--- | :--- |
| Appearance/Color/pH | Visual/Potentiometric | 2.0 | 1 | 2.0 |
| Identity (UPLC-MS) | Peptide Mapping | 0.5 | 2 | 1.0 |
| Purity (SE-HPLC) | Aggr. & Fragments | 0.5 | 3 | 1.5 |
| Charge Variants (iCE3) | Isoelectric Focusing | 0.5 | 3 | 1.5 |
| Potency (Cell-based) | cAMP Induction | 1.5 | 3 | 4.5 |
| Safety (Endotoxin) | LAL Kinetic | 1.0 | 1 | 1.0 |
| **Sub-Total** | | | | **11.5 mL** |
| **Total with Reserve** | | | | **23.0 mL** |

---

#### 3.2.S.7.1.4 Detailed Stability Sampling Schedule

The following table outlines the pull dates and storage conditions for the three primary validation batches produced at the South San Francisco facility.

**Table 3: Master Stability Matrix for Glucogen-XR DS**

| Storage Condition | Temp (°C) | RH (%) | Pull Months | Batch Numbers |
| :--- | :--- | :--- | :--- | :--- |
| **Long-Term** | -80 ± 10 | N/A | 0, 3, 6, 9, 12, 18, 24, 36 | GLUC-2025-001/002/003 |
| **Intermediate** | -20 ± 5 | N/A | 0, 1, 3, 6, 9, 12 | GLUC-2025-001/002/003 |
| **Accelerated** | 5 ± 3 | Ambient | 0, 1, 2, 3, 6 | GLUC-2025-001/002/003 |
| **Stress** | 25 ± 2 | 60 ± 5 | 0, 7d, 14d, 1m | GLUC-2025-001 |
| **Photostability** | ICH Q1B | N/A | Final Cycle | GLUC-2025-002 |

---

#### 3.2.S.7.1.5 Sample Labeling and Tracking Protocol (GHS-SOP-STAB-044)

Each stability container is assigned a unique Global Trade Item Number (GTIN) and a 2D Data Matrix barcode integrated with the Google Cloud LIMS (Laboratory Information Management System).

**Step-by-Step Labeling Procedure:**
1.  **Generation:** Labels are generated by the LIMS upon completion of the DS Fill/Finish operation.
2.  **Information Fields:**
    *   Material Description: Glucogen-XR Drug Substance
    *   Batch Number: GLUC-2025-XXX
    *   Storage Condition: (e.g., -80°C)
    *   Time Point: (e.g., T=12M)
    *   Unique ID: GHS-DS-STAB-XXXXX
3.  **Application:** Labels are applied at room temperature. For cryogenic storage, labels utilize a low-temperature adhesive (GHS-ADH-09) validated for performance down to -196°C (Liquid Nitrogen phase).
4.  **Verification:** A secondary operator verifies the barcode readability and data accuracy against the Batch Production Record (BPR).

---

#### 3.2.S.7.1.6 Aliquoting and Filling Procedure

To minimize the impact of "freeze-thaw" cycles on the stability data, the stability samples are aliquoted into "single-use" containers. No container is re-entered after its initial thaw.

**Table 4: Aliquoting Scheme for a Single Batch (e.g., GLUC-2025-001)**

| Storage Condition | Number of Containers | Volume per Container (mL) | Total Volume (mL) |
| :--- | :--- | :--- | :--- |
| -80°C (Long-term) | 24 | 25.0 | 600.0 |
| 5°C (Accelerated) | 12 | 25.0 | 300.0 |
| Stress (25°C) | 6 | 25.0 | 150.0 |
| Retention Samples | 10 | 50.0 | 500.0 |
| **Grand Total** | **52 units** | | **1,550.0 mL** |

**Procedure for Filling (Class A/ISO 5 Environment):**
1.  Verify the bulk DS temperature is between 2°C and 8°C.
2.  Homogenize the bulk DS using a low-shear magnetic stirrer at 50 RPM for 15 minutes.
3.  Calibrate the automated pipette (P-1000 or equivalent) for a target volume of 25.0 mL.
4.  Aseptically transfer the DS into the stability HDPE bottles.
5.  Apply the secondary closure (PP cap) using a calibrated torque wrench to 1.5 N·m.
6.  Perform a visual inspection for particulate matter (as per USP <790>).

---

#### 3.2.S.7.1.7 Logistics of Sample Pulling and Testing Window

To ensure the integrity of the stability data, strict "Pull Windows" are defined. A pull is defined as the removal of the sample from the designated stability chamber and the initiation of testing.

**Table 5: Stability Pull Window Definitions**

| Time Point Range | Allowable Window (Days) |
| :--- | :--- |
| T=0 to T=1 Month | ± 1 Day |
| T=2 to T=6 Months | ± 7 Days |
| T=9 to T=36 Months | ± 15 Days |

**Protocol for "T-Zero" Baseline Testing:**
The T=0 data must be generated from the same DS lot used for filling the stability containers. Testing must be initiated within 48 hours of the aliquoting process to establish a true baseline before any degradation kinetics commence.

---

#### 3.2.S.7.1.8 Shipping and Excursion Management (Google Cloud Life Sciences Protocol)

In the event of a shipment between the South San Francisco manufacturing site and a third-party analytical lab (e.g., GHS-Contract-Lab-01), the following controls apply:
1.  **Temperature Monitoring:** All shipments must include at least two calibrated digital data loggers (e.g., Sensitech TempTale Ultra).
2.  **Container:** Validated vacuum-insulated panels (VIP) shipping containers.
3.  **Excursion Analysis:** Any deviation outside the -80°C ± 10°C range for >30 minutes requires an Impact Assessment (IA) using the Arrhenius Equation to determine the "Mean Kinetic Temperature" (MKT) impact on the peptide stability.

**Arrhenius Equation for Degradation Rate ($k$):**
$$k = A \exp\left(-\frac{E_a}{RT}\right)$$
Where:
*   $E_a$ = Activation Energy (determined during forced degradation studies)
*   $R$ = Gas Constant (8.314 J/mol·K)
*   $T$ = Temperature in Kelvin

---

#### 3.2.S.7.1.9 Regulatory Compliance and Standards Reference

*   **ICH Q1A(R2):** Stability Testing of New Drug Substances.
*   **ICH Q5C:** Quality of Biotechnological Products.
*   **USP <661.2>:** Plastic Packaging Systems for Pharmaceutical Use.
*   **USP <1207>:** Package Integrity Evaluation.
*   **21 CFR Part 211.166:** Stability Testing Requirements.

---

**End of Subsection 3.2.S.7.1**
*This document is the property of Google Health Sciences and contains proprietary information regarding the manufacture of Glucogen-XR.*

---

# Long-Term Stability Data

## Real-Time Data at 2-8°C

### **3.2.S.7.3 Stability Summary and Conclusions: Real-Time Data at 2-8°C**

---

#### **3.2.S.7.3.1 Introduction and Scope**
This section presents the comprehensive real-time stability data for Glucogen-XR (glucapeptide extended-release) drug substance (DS) stored under the primary recommended long-term storage condition of 5°C ± 3°C (2-8°C). These studies were conducted in accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, **ICH Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products**, and **USP <1049> Content of Stability Protocols**.

The primary objective of this longitudinal study is to establish the retest period and shelf-life for the glucapeptide DS when housed in the intended commercial primary packaging system. Data presented herein encompass three (3) primary registration batches manufactured at the Google Health Sciences (GHS) facility (3000 Innovation Drive, South San Francisco, CA) using the validated commercial process (Process Version 2.1).

#### **3.2.S.7.3.2 Regulatory Framework and Compliance**
The stability program for Glucogen-XR adheres to the following regulatory guidances:
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q1E:** Evaluation of Stability Data.
3.  **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
4.  **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
5.  **21 CFR Part 211.166:** Stability Testing Requirements.

#### **3.2.S.7.3.3 Study Design and Matrixing**
The stability protocol utilizes a full-factorial design for the primary registration batches. No bracketing or matrixing was applied to the drug substance stability program to ensure maximum data density for this first-in-class extended-release glucapeptide.

**Table 1: Identification of Primary Stability Batches**
| Batch Number | Scale | Manufacturing Date | Site | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | 12-JAN-2025 | GHS-SSF-01 | Primary Registration |
| **GLUC-2025-002** | 2,000L | 04-FEB-2025 | GHS-SSF-01 | Primary Registration |
| **GLUC-2025-003** | 2,000L | 22-FEB-2025 | GHS-SSF-01 | Primary Registration |

**Table 2: Storage Conditions and Testing Frequency**
| Condition | Temperature | Relative Humidity | Intervals (Months) |
| :--- | :--- | :--- | :--- |
| **Long-Term** | 5°C ± 3°C | Ambient | 0, 3, 6, 9, 12, 18, 24, 36 |
| **Accelerated** | 25°C ± 2°C | 60% RH ± 5% | 0, 1, 3, 6 |
| **Stressed** | 40°C ± 2°C | 75% RH ± 5% | 0, 0.5, 1 |

---

#### **3.2.S.7.3.4 Container Closure System (CCS)**
The drug substance is stored in a primary packaging system designed to mimic the commercial storage conditions exactly. 
*   **Primary Liner:** High-density polyethylene (HDPE) double-bag system (Class VI compliant).
*   **Secondary Packaging:** 10L Polycarbonate carboy with silicone gasket and polypropylene screw cap.
*   **Tertiary Packaging:** Corrugated fiberboard outer shipper with validated thermal insulation.

---

#### **3.2.S.7.3.5 Analytical Methodology and Acceptance Criteria**
Stability-indicating assays were selected based on their ability to detect changes in identity, purity, potency, and physicochemical properties.

##### **3.2.S.7.3.5.1 Purity by RP-HPLC (Reversed-Phase High-Performance Liquid Chromatography)**
*   **Equipment:** Agilent 1290 Infinity II LC System (ID: GHS-LC-09).
*   **Column:** C18, 2.1 x 150mm, 1.7µm.
*   **Mobile Phase A:** 0.1% TFA in Water.
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile.
*   **Acceptance Criteria:** Main Peak ≥ 95.0%; Total Impurities ≤ 5.0%.

##### **3.2.S.7.3.5.2 Potency by Cell-Based Bioassay (In Vitro)**
*   **Method:** Measurement of cAMP stimulation in CHO-K1 cells expressing the human GLP-1 receptor.
*   **Statistical Model:** 4-Parameter Logistic (4PL) regression.
*   **Acceptance Criteria:** 80% – 125% of Reference Standard.

---

#### **3.2.S.7.3.6 Stability Data Tabulation (Batch GLUC-2025-001)**
**Storage Condition: 2-8°C**

| Test Parameter | Method | Acceptance Criteria | Initial (T0) | 3 Months | 6 Months | 12 Months |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Visual | Clear to opalescent | Conforms | Conforms | Conforms | Conforms |
| **pH** | USP <791> | 6.5 ± 0.3 | 6.51 | 6.52 | 6.50 | 6.54 |
| **Protein Conc.** | UV (A280) | 50.0 ± 5.0 mg/mL | 50.2 | 50.1 | 50.3 | 50.2 |
| **Purity (RP-HPLC)** | GHS-SOP-102 | ≥ 95.0% | 98.9% | 98.7% | 98.5% | 98.2% |
| **Purity (SEC)** | GHS-SOP-104 | ≥ 98.0% | 99.4% | 99.3% | 99.2% | 99.0% |
| **Potency (Bioassay)** | GHS-SOP-201 | 80-125% | 104% | 102% | 99% | 101% |
| **Oxidation** | Peptide Map | ≤ 2.0% | 0.4% | 0.5% | 0.6% | 0.7% |
| **Deamidation** | Peptide Map | ≤ 3.0% | 0.8% | 1.0% | 1.1% | 1.3% |

---

#### **3.2.S.7.3.7 Detailed Procedural Protocol: Stability Sample Management**

**Step 1: Aliquoting and Labeling**
Upon completion of the Drug Substance fill/finish, 50 mL aliquots are transferred into the qualified HDPE primary liner segments within a laminar flow hood (ISO Class 5). Each aliquot is labeled with:
*   Batch Number (e.g., GLUC-2025-001)
*   Pull Date (calculated from T0)
*   Storage Condition (5°C)
*   "Stability Sample - Not for Clinical Use"

**Step 2: Chamber Placement and Mapping**
Samples are placed in a validated stability chamber (Model: Thermo TSX Series; ID: GHS-CHB-04). Chambers are equipped with:
*   Continuous NIST-traceable temperature monitoring.
*   Redundant alarm systems (SMS/Email notification for excursions > 2 hours).
*   Backup power supply (UPS) and emergency generator.

**Step 3: Sample Pulling and Reconstitution**
At each time point (± 7 days for months 3-12), the Stability Coordinator retrieves the designated samples. Samples are allowed to equilibrate to room temperature (15-25°C) for exactly 45 minutes prior to analytical testing to ensure consistent viscosity and volume measurement.

---

#### **3.2.S.7.3.8 Statistical Analysis and Trend Evaluation**
Linear regression analysis was performed using Minitab 21 for the primary stability indicator, **Purity by RP-HPLC**.

**Regression Equation for GLUC-2025-001:**
$$Purity (\%) = 98.91 - 0.058 \times (Time_{months})$$

*   **P-Value:** 0.012 (Significant slope, indicating a minor but predictable degradation).
*   **Lower 95% Confidence Interval (at 36 months):** 96.8% (Well above the 95.0% specification).

**Analysis of Variance (ANOVA) for Batch-to-Batch Variability:**
An ANOVA was conducted comparing the degradation rates (slopes) of batches GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003. The calculated F-statistic (1.42) was less than the F-critical (5.14), concluding that the batches are statistically similar and data can be pooled for shelf-life estimation according to **ICH Q1E**.

---

#### **3.2.S.7.3.9 Degradation Pathways at 2-8°C**
While Glucogen-XR is highly stable at refrigerated temperatures, two primary degradation pathways were identified via LC-MS/MS:

1.  **Deamidation at Asn-28:** A minor increase in the deamidated isoform was observed, rising from 0.8% at T0 to 1.3% at T12. This is below the threshold of toxicological concern and does not impact GLP-1 receptor binding affinity.
2.  **C-terminal Truncation:** Trace levels (<0.1%) of a (1-36) fragment were detected using high-resolution mass spectrometry. No significant trend was established at the 2-8°C condition.

---

#### **3.2.S.7.3.10 Conclusion of Real-Time Studies**
Based on the 12-month real-time data currently available for the three registration batches, Glucogen-XR drug substance remains well within all established specifications when stored at 2-8°C. The predictive modeling supports a preliminary retest period of **24 months**, which will be confirmed upon the completion of the full 36-month study duration.

---

**Footnotes:**
1.  *Standard Deviation (SD) for RP-HPLC is based on n=3 injections.*
2.  *Potency bioassay utilizes a internal Google Health Sciences Reference Standard (GHS-RS-004).*
3.  *Excursions: No temperature excursions outside the 2-8°C range were recorded during the reporting period for batches GLUC-2025-001/002/003.*

---

## Statistical Analysis of Trends

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.3: STABILITY DATA - STATISTICAL ANALYSIS OF TRENDS

---

### 3.2.S.7.3.1 Executive Overview of Statistical Methodology

Google Health Sciences (GHS) employs a robust, multi-tiered statistical framework for the evaluation of stability data for Glucogen-XR (glucapeptide extended-release) Drug Substance. This section details the statistical analysis performed on long-term stability data (5°C ± 3°C) to support the proposed retest period. The analysis is conducted in strict accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q1E** (*Evaluation of Stability Data*).

The primary objective of this statistical evaluation is to determine the rate of change for stability-indicating attributes and to establish, with a high degree of confidence (95% one-sided confidence limit), that the drug substance will remain within specification limits throughout the proposed shelf-life.

---

### 3.2.S.7.3.2 Data Inclusion and Batch Selection

The statistical trend analysis incorporates data from three (3) primary registration batches and two (2) supportive pilot-scale batches. All batches were manufactured at the South San Francisco facility (3000 Innovation Drive) using the GHS-CHO-001 cell line and the commercial-scale purification process.

#### Table 7.3-1: Inventory of Batches Included in Statistical Trend Analysis

| Batch Number | Scale | Date of Manufacture | Storage Condition | Container Closure System | Data Range (Months) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Commercial (2000L) | 12-JAN-2025 | 5°C ± 3°C | 10L Polycarbonate Carboy | 0, 3, 6, 9, 12, 18, 24 |
| **GLUC-2025-002** | Commercial (2000L) | 15-FEB-2025 | 5°C ± 3°C | 10L Polycarbonate Carboy | 0, 3, 6, 9, 12, 18, 24 |
| **GLUC-2025-003** | Commercial (2000L) | 10-MAR-2025 | 5°C ± 3°C | 10L Polycarbonate Carboy | 0, 3, 6, 9, 12, 18 |
| **GLUC-SUPP-098** | Pilot (200L) | 20-AUG-2024 | 5°C ± 3°C | 2L Polycarbonate Bottle | 0, 3, 6, 9, 12, 18, 24, 36 |
| **GLUC-SUPP-099** | Pilot (200L) | 15-SEP-2024 | 5°C ± 3°C | 2L Polycarbonate Bottle | 0, 3, 6, 9, 12, 18, 24, 36 |

---

### 3.2.S.7.3.3 Statistical Modeling Strategy

#### 3.2.S.7.3.3.1 Regression Model Selection
A linear regression model is applied to quantitative stability-indicating attributes. The model is defined by the following equation:

$$Y_t = \beta_0 + \beta_1 X_t + \epsilon_t$$

Where:
*   $Y_t$ = Measured value of the attribute at time $t$.
*   $\beta_0$ = Intercept (calculated value at $t=0$).
*   $\beta_1$ = Slope (rate of change over time).
*   $X_t$ = Time in months.
*   $\epsilon_t$ = Random error (assumed to be normally distributed with mean zero and constant variance $\sigma^2$).

#### 3.2.S.7.3.3.2 Analysis of Covariance (ANCOVA) for Batch Pooling
To determine if data from multiple batches can be pooled for a combined shelf-life estimate, an ANCOVA is performed testing the following null hypotheses ($H_0$):
1.  **Equality of Slopes:** $H_0: \beta_{1, batch1} = \beta_{1, batch2} = ... = \beta_{1, batchN}$
2.  **Equality of Intercepts:** $H_0: \beta_{0, batch1} = \beta_{0, batch2} = ... = \beta_{0, batchN}$

Per ICH Q1E, if the $p$-value for the test of equality of slopes is $> 0.25$, the slopes are considered statistically similar. If the $p$-value for the equality of intercepts (given similar slopes) is also $> 0.25$, the batches are pooled. If $p \leq 0.25$, a "worst-case" batch approach or a random-coefficients model is applied.

---

### 3.2.S.7.3.4 Trend Analysis of Main Peak Purity (RP-HPLC)

The purity of Glucogen-XR as measured by Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC) is a critical stability-indicating parameter. The specification limit is established at **$\geq 95.0\%$**.

#### Table 7.3-2: Raw Data and Statistical Parameters for RP-HPLC Purity (%)

| Batch Number | T=0 | T=6 | T=12 | T=24 | Slope (%/Mo) | SE of Slope | R² Value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 99.4 | 99.1 | 98.8 | 98.2 | -0.0503 | 0.0021 | 0.988 |
| **GLUC-2025-002** | 99.2 | 98.9 | 98.7 | 98.0 | -0.0511 | 0.0019 | 0.991 |
| **GLUC-2025-003** | 99.5 | 99.2 | 98.9 | N/A* | -0.0505 | 0.0025 | 0.985 |
| **Mean Trend** | **99.37** | **99.07** | **98.80** | **98.10** | **-0.0506** | **0.0022** | **0.988** |

*\*GLUC-2025-003 data currently available to 18 months; 24-month timepoint in progress.*

#### 3.2.S.7.3.4.1 Slope Significance and Confidence Intervals
The calculated mean degradation rate is **-0.051% per month**. To calculate the 95% one-sided Lower Confidence Limit (LCL) for the shelf-life, we use:

$$LCL = (\hat{\beta_0} + \hat{\beta_1}t) - t_{0.05, n-2} \cdot SE_{pred}$$

Where $SE_{pred}$ accounts for the uncertainty in the regression line.

#### 3.2.S.7.3.4.2 Analysis of Pooling (ANCOVA) for RP-HPLC
*   **Test for Parallelism (Slopes):** $F = 1.12$, $p = 0.385$ (Criteria $p > 0.25$ met).
*   **Test for Intercepts:** $F = 1.45$, $p = 0.291$ (Criteria $p > 0.25$ met).
*   **Result:** Batches are statistically poolable.

---

### 3.2.S.7.3.5 Trend Analysis of High Molecular Weight Species (SEC-HPLC)

High Molecular Weight Species (HMWS) representing aggregation are monitored via Size Exclusion Chromatography (SEC). The specification limit is **$\leq 2.0\%$**.

#### Table 7.3-3: SEC-HPLC HMWS Trend Data (%)

| Time (Mo) | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Average | 95% UCL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 0.21 | 0.24 | 0.20 | 0.217 | 0.245 |
| 3 | 0.25 | 0.28 | 0.26 | 0.263 | 0.298 |
| 6 | 0.31 | 0.33 | 0.30 | 0.313 | 0.355 |
| 9 | 0.38 | 0.39 | 0.37 | 0.380 | 0.422 |
| 12 | 0.44 | 0.46 | 0.45 | 0.450 | 0.495 |
| 18 | 0.58 | 0.61 | 0.59 | 0.593 | 0.648 |
| 24 | 0.72 | 0.75 | N/A | 0.735 | 0.812 |

**Calculation of Predicted Intersection with Limit:**
*   Rate of HMWS increase: +0.021% / month.
*   Starting value (max): 0.245%.
*   Distance to limit ($2.0\% - 0.245\%$) = 1.755%.
*   Predicted time to failure: $1.755 / 0.021 = 83.5$ months.
*   95% UCL Projection (at 36 months): $0.245 + (36 \times 0.024) = 1.11\%$.

The data indicates that HMWS remains well below the specification limit for the duration of the proposed shelf-life.

---

### 3.2.S.7.3.6 Trend Analysis of Bioactivity (Cell-Based Potency Assay)

The potency of Glucogen-XR is determined using a GLP-1 receptor-mediated cAMP stimulation assay in CHO-K1 cells expressing the human GLP-1 receptor. Results are reported as a percentage of the Reference Standard (% Relative Potency). Specification: **80% to 125%**.

#### Table 7.3-4: Potency Trend Analysis (% Relative Potency)

| Batch | 0 Mo | 6 Mo | 12 Mo | 18 Mo | 24 Mo | Residual Std Dev |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 102 | 101 | 99 | 100 | 98 | 1.45 |
| GLUC-2025-002 | 98 | 97 | 98 | 96 | 95 | 1.12 |
| GLUC-2025-003 | 105 | 103 | 102 | 101 | N/A | 1.67 |

**Statistical Summary of Potency:**
The potency data exhibits high analytical variability (typical for cell-based bioassays) but shows no statistically significant downward trend ($p > 0.05$ for the slope coefficient). The slope for batch GLUC-2025-001 is calculated as -0.15% per month, which is not significantly different from zero.

---

### 3.2.S.7.3.7 Outlier Detection and Investigation (OOS/OOT)

Google Health Sciences utilizes the **Modified Z-Score** and **Grubbs' Test** (per USP <1010>) for the identification of Out-of-Trend (OOT) data points.

#### 3.2.S.7.3.7.1 OOT Identification Protocol (SOP-QC-7742)
1.  **Input:** Collect data from current stability timepoint.
2.  **Regression Check:** Calculate the predicted value based on the previous $n-1$ data points.
3.  **Tolerance Interval:** If the new value falls outside the 3-sigma prediction interval, it is flagged as OOT.
4.  **Investigation:** Initiate a Laboratory Investigation Report (LIR).
    *   *Step 4a:* Review instrument logs (HPLC Column ID: GHS-COL-9981).
    *   *Step 4b:* Verify reagent preparation (Mobile Phase pH: 2.5 ± 0.05).
    *   *Step 4c:* Re-inject original vial (if applicable).
    *   *Step 4d:* Re-prepare sample from stability container.

During the reporting period for batches GLUC-2025-001 through 003, no results were identified as Out-of-Specification (OOS). One result for GLUC-2025-002 at 12 months (Potency 92%) was flagged as OOT; however, re-analysis in triplicate confirmed the value was an analytical outlier due to a pipetting error in the cAMP assay plate. The confirmed mean was 98%.

---

### 3.2.S.7.3.8 Cumulative Risk Assessment

#### 3.2.S.7.3.8.1 Arrhenius Kinetics for Accelerated Data
To support the stability profile, accelerated data (25°C / 60% RH) was evaluated using the Arrhenius equation to determine the Activation Energy ($E_a$) of the primary degradation pathway (deamidation).

$$\ln(k) = \ln(A) - \frac{E_a}{R} \left( \frac{1}{T} \right)$$

*   Calculated $E_a$ for Glucogen-XR: $24.2 \text{ kcal/mol}$.
*   This high activation energy confirms that the degradation rate is highly temperature-dependent, justifying the strict 5°C storage condition and explaining the excellent stability observed at the intended storage temperature.

---

### 3.2.S.7.3.9 Conclusion of Statistical Analysis

Based on the linear regression analysis of the three commercial-scale registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) and the supportive pilot batches, the following conclusions are drawn:

1.  **Primary Degradation Pathways:** The primary trends observed are a slight decrease in RP-HPLC purity and a minor increase in HMWS. All changes are linear and predictable.
2.  **Shelf-Life Estimate:** The 95% confidence limit for the most sensitive parameter (RP-HPLC Purity) does not cross the specification limit (95.0%) until **Month 62**.
3.  **Proposed Retest Period:** Consistent with ICH Q1E, a retest period of **24 months** is proposed for Glucogen-XR Drug Substance when stored at 5°C ± 3°C in the approved container closure system.

---
**End of Subsection 3.2.S.7.3**
*Confidential - Property of Google Health Sciences*

---

## Tabulated Results by Batch and Time Point

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.3: STABILITY DATA
### SUBSECTION: Tabulated Results by Batch and Time Point

---

#### 3.2.S.7.3.1 Introduction and Scope
This section presents the comprehensive tabulated stability data for Glucogen-XR (glucapeptide extended-release) Drug Substance (DS), manufactured by Google Health Sciences at the South San Francisco facility (Site ID: GHS-SSF-01). The data provided herein support the proposed retest period of 24 months when stored at the recommended long-term storage condition of -70°C ± 10°C (Ultra-Low Temperature Freezer).

The stability program was executed in strict adherence to **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, **ICH Q1E Evaluation of Stability Data**, and **ICH Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products**.

#### 3.2.S.7.3.2 Batch Identification and Matrix Design
The stability data encompass three (3) primary registration batches and two (2) supportive pilot-scale batches. All batches were produced using the proprietary GHS-CHO-001 cell line via a 2,000L fed-batch process.

**Table 3.2.S.7.3-1: Summary of Batches Included in Stability Assessment**
| Batch Number | Scale | Manufacturing Date | Site | Purpose | Container Closure System |
|:---|:---|:---|:---|:---|:---|
| **GLUC-2025-001** | 2,000L | 12-JAN-2025 | SSF, CA | Registration (PPQ-1) | 5L Sartorius Stedim Celsius® Bag |
| **GLUC-2025-002** | 2,000L | 02-FEB-2025 | SSF, CA | Registration (PPQ-2) | 5L Sartorius Stedim Celsius® Bag |
| **GLUC-2025-003** | 2,000L | 22-FEB-2025 | SSF, CA | Registration (PPQ-3) | 5L Sartorius Stedim Celsius® Bag |
| **GLUC-2024-SUP-A**| 200L | 15-OCT-2024 | SSF, CA | Supportive/Pilot | 1L Polycarbonate Bottle |
| **GLUC-2024-SUP-B**| 200L | 05-NOV-2024 | SSF, CA | Supportive/Pilot | 1L Polycarbonate Bottle |

#### 3.2.S.7.3.3 Analytical Methodology and Acceptance Criteria
All stability-indicating assays were validated per **ICH Q2(R1)**. The primary stability-indicating parameters include:
1.  **Purity by SE-HPLC:** Detection of high molecular weight species (HMWS) and aggregates.
2.  **Purity by RP-HPLC:** Detection of deamidation, oxidation, and hydrophobic variants.
3.  **Charge Heterogeneity by cIEF:** Detection of acidic and basic variants.
4.  **Biological Activity (Potency):** In vitro cell-based GLP-1 receptor activation assay (cAMP induction).
5.  **Sub-visible Particulate Matter (USP <788>):** Monitoring of proteinaceous particles.

---

### 3.2.S.7.3.4 Primary Registration Batch Data: GLUC-2025-001
**Storage Condition:** -70°C ± 10°C
**Container:** 5L Celsius® FFT (Flexible Freeze-Thaw) Bag
**Concentration:** 50 mg/mL in Phosphate-Citrate Buffer, pH 6.5, with Polysorbate 80 and Sucrose.

**Table 3.2.S.7.3-2: Long-Term Stability Data for GLUC-2025-001**
| Test Parameter | Acceptance Criteria | Initial (T0) | 3 Months | 6 Months | 9 Months | 12 Months |
|:---|:---|:---|:---|:---|:---|:---|
| **Appearance** | Clear to opalescent | Clear | Clear | Clear | Clear | Clear |
| **pH (USP <791>)** | 6.5 ± 0.3 | 6.51 | 6.49 | 6.52 | 6.50 | 6.53 |
| **Protein Conc. (A280)** | 50.0 ± 5.0 mg/mL | 50.2 | 50.1 | 50.3 | 49.9 | 50.2 |
| **Purity (SE-HPLC)** | ≥ 98.0% Main | 99.4% | 99.3% | 99.3% | 99.2% | 99.2% |
| **HMWS (SE-HPLC)** | ≤ 1.5% | 0.4% | 0.5% | 0.5% | 0.6% | 0.6% |
| **Purity (RP-HPLC)** | ≥ 95.0% Main | 97.2% | 97.0% | 96.9% | 96.8% | 96.8% |
| **Oxidized Variants** | ≤ 2.0% | 0.8% | 0.9% | 1.0% | 1.1% | 1.1% |
| **cIEF (Main Peak)** | 70.0% - 85.0% | 78.4% | 78.2% | 77.9% | 77.5% | 77.2% |
| **cIEF (Acidic)** | ≤ 20.0% | 12.1% | 12.4% | 12.8% | 13.2% | 13.5% |
| **Bioassay (Potency)** | 80% - 125% | 102% | 98% | 104% | 101% | 99% |
| **Sub-vis (≥10 µm)** | ≤ 6000 per container| 112 | 145 | 132 | 168 | 155 |
| **Endotoxin** | ≤ 0.5 EU/mg | < 0.05 | NT | NT | NT | < 0.05 |

*Abbreviations: NT = Not Tested; HMWS = High Molecular Weight Species; cIEF = Capillary Isoelectric Focusing.*

---

### 3.2.S.7.3.5 Primary Registration Batch Data: GLUC-2025-002
**Storage Condition:** -70°C ± 10°C

**Table 3.2.S.7.3-3: Long-Term Stability Data for GLUC-2025-002**
| Test Parameter | Acceptance Criteria | Initial (T0) | 3 Months | 6 Months | 9 Months | 12 Months |
|:---|:---|:---|:---|:---|:---|:---|
| **Appearance** | Clear to opalescent | Clear | Clear | Clear | Clear | Clear |
| **pH** | 6.5 ± 0.3 | 6.52 | 6.51 | 6.53 | 6.52 | 6.54 |
| **Protein Conc.** | 50.0 ± 5.0 mg/mL | 50.8 | 50.7 | 50.9 | 50.6 | 50.8 |
| **Purity (SE-HPLC)** | ≥ 98.0% Main | 99.5% | 99.4% | 99.4% | 99.3% | 99.2% |
| **HMWS (SE-HPLC)** | ≤ 1.5% | 0.3% | 0.4% | 0.4% | 0.5% | 0.6% |
| **Purity (RP-HPLC)** | ≥ 95.0% Main | 97.8% | 97.6% | 97.4% | 97.2% | 97.0% |
| **Oxidized Variants** | ≤ 2.0% | 0.6% | 0.7% | 0.8% | 0.9% | 1.0% |
| **cIEF (Main Peak)** | 70.0% - 85.0% | 79.1% | 78.8% | 78.5% | 78.1% | 77.8% |
| **Bioassay (Potency)** | 80% - 125% | 105% | 102% | 99% | 103% | 101% |

---

### 3.2.S.7.3.6 Analytical Protocol: SE-HPLC for Glucogen-XR
The monitoring of aggregation is critical for GLP-1 receptor agonists due to the potential for immunogenicity.

**Procedure ID:** GHS-SOP-ANA-045
**Column:** Tosoh TSKgel G3000SWxl, 7.8 mm x 30 cm, 5 µm
**Mobile Phase:** 200 mM Sodium Phosphate, 100 mM Sodium Sulfate, pH 6.8
**Flow Rate:** 0.5 mL/min (Isocratic)
**Detection:** UV at 214 nm and 280 nm
**Injection Volume:** 20 µL (Target load: 100 µg protein)

**Calculation for % HMWS:**
$$\text{\% HMWS} = \left( \frac{\sum \text{Area of Peaks Eluting Before Main Peak}}{\text{Total Chromatographic Area}} \right) \times 100$$

**System Suitability Requirements:**
1.  **Resolution:** ≥ 1.5 between Main Peak and Dimer.
2.  **Tailing Factor:** ≤ 1.4 for the Main Peak.
3.  **Repeatability:** RSD ≤ 2.0% for Main Peak area (n=5).

---

### 3.2.S.7.3.7 Accelerated Stability Data (5°C ± 3°C)
To assess the impact of short-term excursions and to identify degradation pathways, the DS was stored at refrigerated conditions.

**Table 3.2.S.7.3-4: Accelerated Stability Results (Batch GLUC-2025-001)**
| Time Point | Purity (SE-HPLC) | HMWS (%) | Purity (RP-HPLC) | Potency (%) |
|:---|:---|:---|:---|:---|
| T0 | 99.4% | 0.4% | 97.2% | 102% |
| 1 Month | 99.1% | 0.7% | 96.5% | 100% |
| 3 Months | 98.5% | 1.1% | 95.2% | 96% |
| 6 Months | 97.8% (OOS) | 1.8% (OOS) | 93.4% (OOS) | 91% |

*Statistical Note:* Linear regression analysis of the 5°C data indicates a degradation rate of 0.25% HMWS/month. This justifies the requirement for ultra-low temperature storage to ensure a 24-month shelf life.

---

### 3.2.S.7.3.8 Forced Degradation Profile
Forced degradation studies were performed on Batch GLUC-2025-001 to demonstrate the stability-indicating nature of the assays.

**Table 3.2.S.7.3-5: Forced Degradation Summary**
| Condition | Stress Parameters | Primary Degradate | Assay Response |
|:---|:---|:---|:---|
| **Thermal** | 40°C for 7 days | Aggregates | SE-HPLC ↓ 12% |
| **Acidic** | pH 3.0, 24h | Deamidation | RP-HPLC ↓ 8% |
| **Alkaline** | pH 10.0, 24h | Fragmentation | SDS-PAGE ↓ 15% |
| **Oxidative** | 0.3% H2O2, 4h | Met-Oxidation | RP-HPLC ↓ 22% |
| **Photolytic** | 1.2M Lux hours | Covalent Dimers | SE-HPLC ↓ 5% |

---

### 3.2.S.7.3.9 Statistical Evaluation (ICH Q1E)
A poolability test was performed on the slopes of the % Main Peak (SE-HPLC) for batches GLUC-2025-001, -002, and -003. Using an ANCOVA model (Analysis of Covariance), the p-value for the interaction between Time and Batch was found to be > 0.25 (p=0.48), indicating that the slopes are not significantly different.

**Regression Equation for Predicted Purity:**
$$Y = 99.42 - 0.015(X)$$
*where Y = % Main Peak and X = Time in Months.*

Based on the 95% one-sided confidence interval, the time to reach the 98.0% specification limit is 34.6 months. However, in accordance with the conservative approach for biologics, a retest period of **24 months** is proposed.

---

### 3.2.S.7.3.10 Sub-visible Particulate Matter (USP <788>)
Glucogen-XR is a highly concentrated protein solution. Particle monitoring is performed using Light Obscuration (HIAC).

**Table 3.2.S.7.3-6: Particle Counts for GLUC-2025-001 (Long-Term)**
| Time Point | ≥ 10 µm (Counts/mL) | ≥ 25 µm (Counts/mL) |
|:---|:---|:---|
| T0 | 22 | 2 |
| T6 | 28 | 3 |
| T12 | 31 | 5 |
| **USP Limit** | **≤ 6000/container** | **≤ 600/container** |

---

### 3.2.S.7.3.11 Conclusion
The tabulated stability data for Glucogen-XR Drug Substance demonstrate excellent stability at the intended storage condition of -70°C. No significant trends or Out-of-Specification (OOS) results were observed for the primary registration batches through 12 months of testing. The data support the stability of the glucapeptide molecule and the robustness of the Google Health Sciences manufacturing process. Testing is ongoing to reach the 36-month time point.

---
**References:**
1.  *ICH Q1A(R2), Stability Testing of New Drug Substances and Products.*
2.  *USP <788> Particulate Matter in Injections.*
3.  *GHS-VAL-STB-2025-01: Validation Report for Glucogen-XR DS Stability Assays.*
4.  *FDA Guidance for Industry: Quality Systems Approach to Pharmaceutical CGMP Regulations.*

---

# Accelerated Stability Data

## 25°C/60% RH Data

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7 STABILITY
### SUBSECTION 3.2.S.7.3: ACCELERATED STABILITY DATA (25°C ± 2°C / 60% RH ± 5% RH)

---

#### 3.2.S.7.3.1 Executive Summary of Accelerated Stability Results
Google Health Sciences (GHS) presents the formal accelerated stability data for **Glucogen-XR (glucapeptide extended-release)** Drug Substance. Glucogen-XR is a long-acting recombinant GLP-1 receptor agonist produced in a proprietary CHO-K1 GS knockout cell line (GHS-CHO-001). Due to the nature of the peptide-linker-polymer assembly, stability at intermediate temperatures is critical for determining the degradation kinetics and potential shelf-life.

The data presented in this section covers the **25°C/60% RH condition**, which serves as the "Accelerated" condition for this refrigerated product (Label Storage: 5°C). The studies were conducted in accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products** and **ICH Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products**.

#### 3.2.S.7.3.2 Study Design and Methodology

##### 3.2.S.7.3.2.1 Sample Selection and Batch Traceability
Three primary registration batches of Glucogen-XR Drug Substance were utilized for this study. These batches are representative of the commercial manufacturing process at the South San Francisco facility.

| Batch Number | Scale | Manufacture Date | Site | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | 12-JAN-2025 | 3000 Innovation Dr, SSF | Registration/Pivotal |
| **GLUC-2025-002** | 2,000L | 28-JAN-2025 | 3000 Innovation Dr, SSF | Registration/Pivotal |
| **GLUC-2025-003** | 2,000L | 15-FEB-2025 | 3000 Innovation Dr, SSF | Registration/Pivotal |

##### 3.2.S.7.3.2.2 Container Closure System
The Drug Substance is stored in high-density polyethylene (HDPE) bottles (1L) with a double low-density polyethylene (LDPE) liner. For stability testing, "scaled-down" models of the primary packaging were used (125 mL HDPE bottles with the same resin and liner composition) to ensure a representative surface-to-volume ratio.

##### 3.2.S.7.3.2.3 Storage Conditions and Pull Schedule
Samples were stored in validated environmental chambers (Chamber ID: STAB-25-A-04) maintained at **25°C ± 2°C and 60% RH ± 5% RH**.

**Pull Schedule Table:**
*   **T0:** Initial (Release Data)
*   **T1:** 1 Month (30 Days)
*   **T3:** 3 Months (90 Days)
*   **T6:** 6 Months (180 Days)

#### 3.2.S.7.3.3 Analytical Procedures and Acceptance Criteria
The stability-indicating profile of Glucogen-XR was assessed using a battery of validated assays capable of detecting deamidation, oxidation, aggregation, and loss of biological potency.

| Parameter | Method ID | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | SOP-QC-101 | Clear to slightly opalescent, colorless |
| **pH** | USP <791> | 6.8 ± 0.3 |
| **Purity (SE-HPLC)** | SOP-QC-205 | ≥ 98.0% Main Peak |
| **Purity (RP-HPLC)** | SOP-QC-208 | ≥ 95.0% Main Peak |
| **Purity (CEX-HPLC)** | SOP-QC-212 | ≥ 85.0% Main Peak |
| **Potency (Cell-based)** | SOP-QC-550 | 80% to 125% of Reference Standard |
| **Visible Particulates** | USP <790> | Essentially free |
| **Sub-visible Particulates** | USP <788> | ≤ 6000 per vial (≥ 10µm); ≤ 600 (≥ 25µm) |

---

#### 3.2.S.7.3.4 Tabulated Stability Data

##### 3.2.S.7.3.4.1 Batch GLUC-2025-001 Data (25°C/60% RH)

| Interval | Date | SE-HPLC (% Monomer) | RP-HPLC (% Purity) | CEX-HPLC (% Main) | Potency (%) | pH |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T0** | 12-JAN-25 | 99.8 | 98.9 | 92.1 | 102 | 6.81 |
| **T1** | 12-FEB-25 | 99.7 | 98.2 | 90.5 | 101 | 6.82 |
| **T3** | 12-APR-25 | 99.4 | 97.5 | 88.4 | 98 | 6.79 |
| **T6** | 12-JUL-25 | 98.8 | 96.1 | 86.2 | 94 | 6.83 |

##### 3.2.S.7.3.4.2 Batch GLUC-2025-002 Data (25°C/60% RH)

| Interval | Date | SE-HPLC (% Monomer) | RP-HPLC (% Purity) | CEX-HPLC (% Main) | Potency (%) | pH |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T0** | 28-JAN-25 | 99.7 | 99.1 | 91.8 | 105 | 6.80 |
| **T1** | 28-FEB-25 | 99.6 | 98.4 | 90.1 | 103 | 6.81 |
| **T3** | 28-APR-25 | 99.2 | 97.2 | 87.9 | 97 | 6.80 |
| **T6** | 28-JUL-25 | 98.7 | 95.9 | 85.8 | 93 | 6.78 |

##### 3.2.S.7.3.4.3 Batch GLUC-2025-003 Data (25°C/60% RH)

| Interval | Date | SE-HPLC (% Monomer) | RP-HPLC (% Purity) | CEX-HPLC (% Main) | Potency (%) | pH |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T0** | 15-FEB-25 | 99.9 | 99.2 | 92.5 | 100 | 6.82 |
| **T1** | 15-MAR-25 | 99.8 | 98.6 | 91.0 | 99 | 6.83 |
| **T3** | 15-MAY-25 | 99.5 | 97.8 | 88.8 | 96 | 6.82 |
| **T6** | 15-AUG-25 | 98.9 | 96.4 | 86.5 | 92 | 6.84 |

---

#### 3.2.S.7.3.5 Detailed Statistical Analysis of Degradation Kinetics

##### 3.2.S.7.3.5.1 Zero-Order vs First-Order Modeling
To evaluate the degradation of the glucapeptide under accelerated conditions, a linear regression analysis was performed on the CEX-HPLC Main Peak data, which demonstrated the most significant change over time.

**Regression Equation for GLUC-2025-001 (CEX-HPLC):**
$$y = -0.9833x + 91.75$$
*   Where $y$ is the % Main Peak and $x$ is time in months.
*   Correlation Coefficient ($R^2$) = 0.9942.

The degradation rate ($k$) at 25°C is calculated at approximately **0.98% per month** for the acidic/basic variant formation.

##### 3.2.S.7.3.5.2 Arrhenius Equation Calculation
Based on the data at 5°C (Long term) and 25°C (Accelerated), the Activation Energy ($E_a$) for the deamidation of Glucogen-XR was estimated using the Arrhenius equation:
$$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R} \left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$
Given the observed $k$ at 25°C (298.15K) and the negligible $k$ at 5°C (278.15K), the $E_a$ is approximately **85 kJ/mol**, which is consistent with similar peptide therapeutic degradation profiles in the literature (e.g., *Wang et al., 2015, Journal of Pharmaceutical Sciences*).

---

#### 3.2.S.7.3.6 Analytical Protocol for Stability Testing (SOP-STAB-M3)

To ensure consistency across the 25°C/60% RH study, the following rigorous protocol was followed:

1.  **Sample Pulling:**
    *   Samples must be pulled from the chamber within ± 24 hours of the scheduled time point.
    *   Upon pulling, samples must be immediately equilibrated to 2-8°C to "quench" the accelerated degradation before analysis.
2.  **Chromatographic Conditioning:**
    *   The SE-HPLC system (Waters ACQUITY UPLC) must be equilibrated for at least 120 minutes in the mobile phase (Phosphate Buffer pH 7.0 with 0.1M NaCl) to ensure baseline stability.
3.  **Standard Preparation:**
    *   The Glucogen-XR Internal Reference Standard (IRS-2024-V2) must be run in triplicate before stability samples. The CV (Coefficient of Variation) must be < 1.0% for peak area.
4.  **Data Integration:**
    *   Automatic integration using Empower 3 software with manual verification of baseline for the "aspartimic acid" variant shoulder peak at 14.5 minutes.

---

#### 3.2.S.7.3.7 Interpretation of Results

**1. Purity by Size-Exclusion (SE-HPLC):**
At 25°C, Glucogen-XR exhibits high stability against aggregation. Over 6 months, the monomer content decreased from ~99.8% to ~98.8%. The High Molecular Weight Species (HMWS) increased by only 1.0%, primarily consisting of dimeric forms. No large-scale precipitates were observed.

**2. Purity by Ion-Exchange (CEX-HPLC):**
The CEX-HPLC profile represents the most sensitive stability-indicating marker. A gradual increase in "Acidic Variants" was observed, which is attributed to the deamidation of the Asn-28 residue on the glucapeptide chain. This is a common degradation pathway for GLP-1 analogues. However, even at 6 months at 25°C, the main peak remained well above the 85.0% threshold.

**3. Biological Activity (Potency):**
The cell-based GLP-1 receptor activation assay showed a slight downward trend in potency, reaching ~92-94% at the 6-month mark. This correlates with the chemical degradation observed in CEX and RP-HPLC. The biological activity remains well within the specification of 80-125%.

**4. pH and Physical Stability:**
The pH of the formulation remained exceptionally stable (6.78 - 6.84), indicating the robustness of the phosphate-citrate buffer system utilized by Google Health Sciences.

#### 3.2.S.7.3.8 Conclusion for Accelerated Stability
The accelerated stability data at 25°C/60% RH supports the high quality and robustness of the Glucogen-XR Drug Substance. The observed degradation is predictable and follows pseudo-first-order kinetics. These results confirm that a brief excursion to room temperature during manufacturing or transport (as per **ICH Q1B**) will not adversely impact the safety or efficacy of the product.

*Confidential - Property of Google Health Sciences*
*Doc ID: GHS-GLUC-M3-STAB-004*
*Revision: 1.0*

---

## 40°C/75% RH Data if Applicable

### **3.2.S.7.3 Stability Data: Accelerated Storage Conditions (40°C ± 2°C / 75% RH ± 5% RH)**

---

#### **3.2.S.7.3.1 Introduction and Scope**
This section presents the comprehensive accelerated stability data for Glucogen-XR (glucapeptide extended-release) drug substance, manufactured by Google Health Sciences (GHS) at the South San Francisco facility (3000 Innovation Drive). In accordance with **ICH Q1A(R2) *Stability Testing of New Drug Substances and Products*** and **ICH Q5C *Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products***, accelerated testing was conducted at 40°C ± 2°C and 75% RH ± 5% RH to evaluate the effect of short-term excursions outside the proposed long-term storage condition (-20°C ± 5°C) and to support the establishment of the retest period and degradation profile.

Glucogen-XR is a highly engineered 44-amino acid synthetic peptide analog of human Glucagon-Like Peptide-1 (GLP-1), conjugated to a proprietary 40 kDa branched polyethylene glycol (PEG) moiety via a stable thioether linkage to extend its pharmacokinetic half-life. Due to the thermolabile nature of the peptide-polymer conjugate, the 40°C/75% RH condition serves as a "stress" or "accelerated" condition to identify primary degradation pathways, including deamidation, oxidation, and covalent aggregation.

#### **3.2.S.7.3.2 Batch Identification and Matrix**
Data are provided for three (3) primary registration batches manufactured at the commercial scale using the GHS-CHO-001 cell line and the validated downstream purification process (DSP).

**Table 3.2.S.7.3-1: Identification of Batches for Accelerated Stability Study**

| Batch Number | Batch Size | Manufacturing Date | Site of Manufacture | Use |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 1.2 kg | 12-JAN-2025 | South San Francisco (Bldg 4) | PPQ / Clinical |
| **GLUC-2025-002** | 1.2 kg | 02-FEB-2025 | South San Francisco (Bldg 4) | PPQ / Clinical |
| **GLUC-2025-003** | 1.2 kg | 18-MAR-2025 | South San Francisco (Bldg 4) | PPQ / Stability |

---

#### **3.2.S.7.3.3 Study Design and Protocol**
The study was executed under Protocol **GHS-STB-2025-098**. Samples were stored in the primary packaging configuration intended for commercial distribution: High-Density Polyethylene (HDPE) containers with heat-sealed pharmaceutical-grade aluminum induction liners and desiccant.

**Table 3.2.S.7.3-2: Accelerated Stability Testing Schedule**

| Condition | 0 Month (Initial) | 1 Month | 3 Months | 6 Months |
| :--- | :--- | :--- | :--- | :--- |
| **40°C ± 2°C / 75% RH ± 5% RH** | X | X | X | X |

*X = Full Specification Testing (Refer to Table 3.2.S.7.3-3 for Test Attributes)*

##### **3.2.S.7.3.3.1 Analytical Methodology and Acceptance Criteria**
Testing was performed using validated stability-indicating methods. The focus of the 40°C/75% RH data is the detection of "Significant Change" as defined by ICH Q1A(R2). For Glucogen-XR, a significant change is defined as a 5% change in assay from its initial value, or any failure to meet acceptance criteria for potency, purity, or physical attributes.

**Table 3.2.S.7.3-3: Stability Attributes and Acceptance Criteria**

| Test Attribute | Method Reference | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | USP <790> | White to off-white lyophilized cake |
| **Assay (HPLC)** | GHS-SOP-00451 | 95.0% - 105.0% of label claim |
| **Purity (RP-HPLC)** | GHS-SOP-00452 | ≥ 97.0% (Main Peak) |
| **Related Substances** | GHS-SOP-00452 | Total Impurities ≤ 3.0%; Max Individual ≤ 0.5% |
| **Size Exclusion (SEC)** | GHS-SOP-00460 | Monomer ≥ 98.0%; High Mol. Weight (HMW) ≤ 1.5% |
| **Potency (In-vitro)** | GHS-SOP-00510 | 80% - 125% of Reference Standard |
| **Deamidation (LC-MS)** | GHS-SOP-00900 | Reported for Information (RFI) |
| **pH (Reconstituted)** | USP <791> | 7.0 ± 0.5 |
| **Moisture Content** | USP <921> | ≤ 2.0% w/w |

---

#### **3.2.S.7.3.4 Tabulated Stability Data (40°C / 75% RH)**

##### **Table 3.2.S.7.3-4: Stability Data for Batch GLUC-2025-001**
*Container: HDPE Bottle; Storage: 40°C / 75% RH*

| Parameter | Initial (T=0) | 1 Month | 3 Months | 6 Months |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Conforms | Conforms | Conforms | Slight Shrinkage |
| **Assay (mg/vial)** | 50.1 | 49.8 | 48.5 | 47.1 |
| **Purity (RP-HPLC %)** | 99.1 | 98.4 | 96.2 | 93.4* |
| **HMW (SEC %)** | 0.2 | 0.4 | 0.9 | 1.8* |
| **Potency (%)** | 102 | 99 | 94 | 88 |
| **Moisture (%)** | 0.8 | 0.9 | 1.1 | 1.4 |
| **pH** | 7.1 | 7.1 | 7.0 | 7.0 |

*\*Indicates value outside of commercial shelf-life specification, but typical for accelerated stress conditions.*

##### **Table 3.2.S.7.3-5: Stability Data for Batch GLUC-2025-002**
*Container: HDPE Bottle; Storage: 40°C / 75% RH*

| Parameter | Initial (T=0) | 1 Month | 3 Months | 6 Months |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Conforms | Conforms | Conforms | Slight Shrinkage |
| **Assay (mg/vial)** | 50.3 | 49.9 | 48.8 | 47.4 |
| **Purity (RP-HPLC %)** | 99.2 | 98.6 | 96.5 | 93.7* |
| **HMW (SEC %)** | 0.2 | 0.3 | 0.8 | 1.7* |
| **Potency (%)** | 104 | 101 | 96 | 89 |
| **Moisture (%)** | 0.7 | 0.8 | 1.0 | 1.3 |
| **pH** | 7.1 | 7.1 | 7.1 | 7.0 |

---

#### **3.2.S.7.3.5 Analysis of Results and Degradation Trends**

##### **3.2.S.7.3.5.1 Physical Degradation (Moisture and Appearance)**
At the 40°C/75% RH condition, Glucogen-XR exhibited a gradual increase in moisture content from an initial average of 0.75% to 1.35% at 6 months. This increase correlates with a physical observation of "slight cake shrinkage" at the 6-month time point. However, the moisture remains below the 2.0% threshold, indicating the integrity of the induction seal and the efficacy of the desiccant system.

##### **3.2.S.7.3.5.2 Chemical Degradation (Purity and Assay)**
A significant downward trend was observed in purity by RP-HPLC.
*   **Deamidation:** LC-MS analysis of the 6-month samples (Batch GLUC-2025-001) confirmed that the primary degradation product is the Asp-3 derivative, resulting from the deamidation of Asn-3 in the GLP-1 sequence. The rate constant ($k$) for deamidation at 40°C was calculated using the Arrhenius equation:
    $$\ln(k) = \ln(A) - \frac{E_a}{RT}$$
    Where $E_a$ (Activation Energy) for Glucogen-XR deamidation was determined to be 85 kJ/mol.
*   **Assay:** The assay values dropped by ~6% over 6 months, exceeding the ICH "significant change" threshold of 5%. This confirms that 40°C is an inappropriate storage temperature but serves its purpose in identifying the temperature sensitivity of the thioether-PEG bond and the peptide backbone.

##### **3.2.S.7.3.5.3 Aggregation (SEC)**
High Molecular Weight (HMW) species increased from 0.2% to 1.8%. Size-exclusion chromatography coupled with Multi-Angle Light Scattering (SEC-MALS) indicates these species are primarily non-covalent dimers. The presence of the 40 kDa PEG chain provides a steric shield, significantly slowing the rate of aggregation compared to the un-PEGylated glucapeptide.

---

#### **3.2.S.7.3.6 Statistical Analysis and Shelf-Life Prediction**
Statistical analysis of the accelerated data was performed using **Minitab v21.4**. A linear regression model was applied to the purity data at 40°C to determine the 95% confidence interval (lower bound).

**Formula for Regression:**
$$Y_t = \beta_0 + \beta_1 X + \epsilon$$
Where:
*   $Y_t$ = Purity at time $t$
*   $\beta_0$ = Initial Purity (Intercept)
*   $\beta_1$ = Rate of Degradation (Slope)

**Calculated Slope at 40°C:** -0.96% purity per month.
**Calculated Slope at 5°C (Extrapolated):** -0.04% purity per month.

Based on the accelerated data, the Q10 factor (rate of change for every 10°C) is estimated at 3.2. This supports the proposed long-term storage at -20°C, where the degradation rate is negligible, ensuring a 36-month shelf life.

---

#### **3.2.S.7.3.7 Conclusion**
The accelerated stability data for Glucogen-XR (40°C/75% RH) show that the drug substance is susceptible to temperature-induced deamidation and minor aggregation. A "Significant Change" was observed between the 3-month and 6-month time points. These results are consistent with the known thermodynamic profile of PEGylated peptides. The data support the necessity of cold chain management and justify the rigorous primary packaging specifications (HDPE + Desiccant).

**Reference Guidelines:**
1.  *FDA Guidance for Industry: Q1A(R2) Stability Testing of New Drug Substances and Products.*
2.  *USP <1150> Pharmaceutical Stability.*
3.  *Google Health Sciences Quality Manual GHS-QM-2024-01.*

---
*End of Subsection 3.2.S.7.3*

---

## Arrhenius Extrapolation

### 3.2.S.7.3.3.4 Arrhenius Extrapolation and Predictive Degradation Modeling

#### 3.2.S.7.3.3.4.1 Executive Summary of Kinetic Modeling
To ensure the long-term stability and shelf-life determination of Glucogen-XR (glucapeptide extended-release), Google Health Sciences (GHS) has implemented a comprehensive Arrhenius-based extrapolation model. This model utilizes accelerated stability data generated across a range of temperatures (2°C to 40°C) to calculate the activation energy ($E_a$) of the primary degradation pathways—specifically the deamidation of the Asn-28 residue and the formation of high-molecular-weight proteins (HMWP). 

The application of the Arrhenius equation allows GHS to provide a statistically sound justification for the proposed 36-month shelf life under the recommended storage condition of 2°C to 8°C. This section details the mathematical framework, the raw experimental data across three primary validation batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003), and the resultant predictive curves.

#### 3.2.S.7.3.3.4.2 Mathematical Foundation and Theoretical Framework
The fundamental basis for this extrapolation is the Arrhenius equation, which describes the temperature dependence of reaction rates:

$$k = A \cdot e^{-\frac{E_a}{RT}}$$

Where:
*   **$k$**: Specific reaction rate constant (e.g., % degradation per month).
*   **$A$**: Pre-exponential factor or frequency factor (collision frequency).
*   **$E_a$**: Activation energy (Joules per mole, J/mol).
*   **$R$**: Universal gas constant ($8.314 \, \text{J/mol} \cdot \text{K}$).
*   **$T$**: Absolute temperature in Kelvin (K).

For the purpose of shelf-life extrapolation, the equation is linearized using the natural logarithm:

$$\ln(k) = \ln(A) - \left( \frac{E_a}{R} \right) \left( \frac{1}{T} \right)$$

By plotting $\ln(k)$ against the reciprocal of the absolute temperature ($1/T$), a linear relationship is established (the Arrhenius Plot). The slope of the resulting line ($m = -E_a/R$) is used to calculate the activation energy, while the y-intercept provides the value for $\ln(A)$.

#### 3.2.S.7.3.3.4.3 Experimental Design for Kinetic Determination
A dedicated "isoconversional" study was conducted using Drug Substance (DS) batches GLUC-2025-001 through GLUC-2025-003. Samples were pulled at high frequency to ensure a sufficient number of data points for regression analysis.

**Table 3.2.S.7.3.3.4-1: Stability Storage Matrix for Arrhenius Modeling**
| Condition | Temperature (°C) | Temperature (K) | Pull Points (Days) | Pull Points (Months) |
| :--- | :--- | :--- | :--- | :--- |
| **Refrigerated** | $5 \pm 3$ | 278.15 | 0, 90, 180, 270, 360, 540 | 0, 3, 6, 9, 12, 18 |
| **Intermediate** | $25 \pm 2$ | 298.15 | 0, 14, 30, 60, 90, 180 | 0, 0.5, 1, 2, 3, 6 |
| **Accelerated** | $40 \pm 2$ | 313.15 | 0, 7, 14, 21, 30, 60 | 0, 0.23, 0.46, 0.7, 1, 2 |
| **Stress** | $50 \pm 2$ | 323.15 | 0, 3, 7, 10, 14 | N/A |

#### 3.2.S.7.3.3.4.4 Degradation Rate Constant ($k$) Calculation
The primary degradant monitored for Arrhenius extrapolation is the **Total Related Substances (TRS)**, which primarily consists of the Deamidated Glucapeptide.

**Table 3.2.S.7.3.3.4-2: Observed Degradation Rates (Batch GLUC-2025-001)**
| Temperature (K) | $1/T \times 10^{-3}$ ($K^{-1}$) | Observed Rate $k$ (%/month) | $\ln(k)$ | Standard Error of $k$ |
| :--- | :--- | :--- | :--- | :--- |
| 278.15 | 3.595 | 0.042 | -3.170 | 0.005 |
| 298.15 | 3.354 | 0.485 | -0.724 | 0.012 |
| 313.15 | 3.193 | 2.114 | 0.749 | 0.045 |
| 323.15 | 3.095 | 5.820 | 1.761 | 0.110 |

#### 3.2.S.7.3.3.4.5 Determination of Activation Energy ($E_a$)
Using the data from Table 3.2.S.7.3.3.4-2, a linear regression was performed for each batch.

*   **Regression Equation (GLUC-2025-001):** $y = -9845.2x + 32.25$
*   **Coefficient of Determination ($R^2$):** 0.9988
*   **Slope ($m$):** -9845.2
*   **Activation Energy ($E_a$):** $m \times (-R) = -9845.2 \times (-8.314) = 81,853 \, \text{J/mol} \approx 81.9 \, \text{kJ/mol}$

**Table 3.2.S.7.3.3.4-3: Summary of Kinetic Parameters Across Validation Batches**
| Batch ID | $E_a$ (kJ/mol) | $\ln(A)$ | Correlation ($R^2$) | Calculated $k$ at 5°C |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 81.85 | 32.25 | 0.9988 | 0.0415 |
| **GLUC-2025-002** | 82.12 | 32.38 | 0.9991 | 0.0402 |
| **GLUC-2025-003** | 81.97 | 32.31 | 0.9985 | 0.0409 |
| **Mean** | **81.98** | **32.31** | **0.9988** | **0.0409** |

#### 3.2.S.7.3.3.4.6 Step-by-Step Extrapolation Protocol (GHS-SOP-6621)
The following procedure was utilized by the Stability Department at Google Health Sciences to perform the extrapolation:

1.  **Data Selection:** Only data points within the linear range of degradation (typically < 10% total loss of purity) are included to avoid complex second-order kinetics.
2.  **Rate Calculation:** Zero-order kinetics were assumed for the initial 24-month period based on empirical fit ($R^2 > 0.95$ for $k$ determination).
3.  **Temperature Conversion:** Celsius to Kelvin ($K = °C + 273.15$).
4.  **Reciprocal Plotting:** Plot $1/T$ (x-axis) vs. $\ln(k)$ (y-axis).
5.  **Statistical Validation:** Calculate the 95% Confidence Interval (CI) for the slope. If the $E_a$ varies by >15% between batches, the lowest $E_a$ is used for conservative shelf-life estimation.
6.  **Extrapolation:** Use the Mean $E_a$ and Mean $\ln(A)$ to calculate $k$ at the target storage temperature ($5^\circ \text{C}$).
7.  **Shelf Life ($t_{95}$):** Calculate the time required to reach the lower specification limit (LSL) for purity or upper specification limit (USL) for impurities using the 95% one-sided confidence limit.

#### 3.2.S.7.3.3.4.7 Predictive Shelf-Life Results
The specification limit for Total Related Substances in Glucogen-XR Drug Substance is $\leq 3.0\%$. Starting from an initial $T=0$ value of 0.45%, the extrapolation predicts the following:

*   **Projected Degradation at 36 Months (5°C):**
    $$Rate (k) = 0.0409\% / \text{month}$$
    $$\text{Total Degradation} = 0.0409 \times 36 = 1.472\%$$
    $$\text{Predicted Total Impurities} = 0.45\% + 1.472\% = 1.922\%$$

*   **Safety Margin:**
    The predicted value of 1.922% at 36 months is significantly below the $3.0\%$ USL, providing a safety margin of $1.078\%$.

#### 3.2.S.7.3.3.4.8 Humidity and Excipient Interactions (Q10 Calculations)
While the Arrhenius model primarily accounts for temperature, GHS also evaluated the $Q_{10}$ factor, which represents the factor by which the rate of degradation increases for every $10^\circ \text{C}$ rise in temperature.

$$Q_{10} = e^{\frac{E_a \cdot 10}{R \cdot T \cdot (T+10)}}$$

For Glucogen-XR between $5^\circ \text{C}$ and $15^\circ \text{C}$:
$$Q_{10} \approx 3.14$$

This indicates that the degradation rate triples for every $10^\circ \text{C}$ increase, underscoring the necessity of strict Cold Chain Management (CCM) as detailed in Section 3.2.P.3.

#### 3.2.S.7.3.3.4.9 Regulatory Compliance and ICH References
This extrapolation methodology is compliant with:
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q1E:** Evaluation of Stability Data.
3.  **USP <1150>:** Pharmaceutical Stability.

The use of Arrhenius modeling here serves as supportive data for the 36-month shelf life, which will be confirmed by real-time stability data as it matures from batches GLUC-2025-001, 002, and 003.

#### 3.2.S.7.3.3.4.10 Conclusion of Arrhenius Analysis
The kinetic modeling confirms that Glucogen-XR is highly stable at $2-8^\circ \text{C}$. The activation energy of $81.98 \, \text{kJ/mol}$ is characteristic of peptide deamidation in a stabilized lyophilized or concentrated liquid matrix. Based on the 95% confidence interval of the extrapolation, the risk of exceeding impurity specifications prior to 48 months is $< 0.1\%$, supporting the current regulatory filing for a 36-month shelf life.

---

# Stress Testing and Forced Degradation

## Temperature Stress

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS
### SUBSECTION: TEMPERATURE STRESS AND FORCED DEGRADATION (THERMAL)

---

#### 3.2.S.7.1.1 Overview of Thermal Stress Studies
Google Health Sciences (GHS) has conducted comprehensive temperature stress and forced degradation studies on Glucogen-XR (glucapeptide extended-release) drug substance (DS) in accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q5C** (*Quality of Biotechnological/Biological Products: Stability Testing of Biotechnological/Biological Products*). 

The primary objective of these studies is to:
1.  Elucidate the degradation pathways of the glucapeptide moiety.
2.  Determine the susceptibility of the extended-release polymeric matrix to thermal hydrolysis and glass transition shifts.
3.  Establish the "stability-indicating" nature of the analytical methods (RP-HPLC, SEC-HPLC, CEX-HPLC, and LC-MS/MS).
4.  Provide data supporting the selection of the primary storage condition (2°C to 8°C) and the retest period.

#### 3.2.S.7.1.2 Experimental Design and Methodology

##### 3.2.S.7.1.2.1 Sample Selection and Batch Identification
Testing was performed on three (3) representative GMP-scale batches produced at the South San Francisco facility (3000 Innovation Drive). These batches utilize the GHS-CHO-001 cell line and the proprietary Cloud-Link™ purification process.

| Batch Number | Scale | Date of Manufacture | Purpose |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 15-JAN-2025 | Primary Stability / Thermal Stress |
| **GLUC-2025-002** | 2000L | 02-FEB-2025 | Confirmatory Thermal Stress |
| **GLUC-2025-003** | 2000L | 20-FEB-2025 | Photo-Thermal Interaction Study |

##### 3.2.S.7.1.2.2 Thermal Stress Parameters
Samples were exposed to a tiered temperature matrix to differentiate between reversible conformational changes and irreversible chemical degradation.

*   **Condition A (Accelerated):** 25°C ± 2°C / 60% RH ± 5% RH (Up to 6 months)
*   **Condition B (Stress):** 40°C ± 2°C / 75% RH ± 5% RH (Up to 3 months)
*   **Condition C (Extreme Stress):** 60°C ± 2°C (Up to 14 days)
*   **Condition D (Freeze-Thaw):** -80°C to 25°C (5 cycles)

#### 3.2.S.7.1.3 Analytical Methods and Acceptance Criteria
To ensure full characterization of thermally induced degradants, a multi-attribute method (MAM) approach was employed.

| Method ID | Attribute Measured | Acceptance Criteria (Initial) |
| :--- | :--- | :--- |
| **GHS-TM-101 (RP-HPLC)** | Purity (Chemical) | ≥ 98.0% |
| **GHS-TM-104 (SEC-HPLC)** | Aggregates/HMWP | ≤ 1.0% |
| **GHS-TM-109 (CEX-HPLC)** | Charge Variants | Main Peak ≥ 75.0% |
| **GHS-TM-202 (Bioassay)** | Relative Potency | 80% – 125% |
| **GHS-TM-505 (mDSC)** | Glass Transition (Tg) | 48°C ± 3°C |

---

#### 3.2.S.7.1.4 Detailed Protocol for Extreme Thermal Stress (60°C)

**Protocol ID: GHS-STAB-PROT-2025-04**

1.  **Preparation:** Aliquot 5.0 mL of Glucogen-XR DS into USP Type I borosilicate glass vials. Stopper with FluroTec® coated chlorobutyl stoppers and crimp with aluminum seals.
2.  **Incubation:** Place vials in a calibrated Thermo Scientific Heratherm incubator (Equipment ID: GHS-INC-09) set to 60.0°C.
3.  **Sampling Intervals:** Pull samples at T=0, T=24h, T=72h, T=7 days, and T=14 days.
4.  **Quenching:** Immediately transfer pulled samples to a 2-8°C refrigerated bath to arrest further thermal degradation prior to analysis.
5.  **Analysis:** Perform full panel testing as defined in Section 3.2.S.7.1.3.

---

#### 3.2.S.7.1.5 Results and Discussion: Batch GLUC-2025-001 (60°C)

The following table summarizes the degradation kinetics observed under extreme thermal stress.

**Table 3.2.S.7.1.5-1: Thermal Degradation Data for GLUC-2025-001 at 60°C**

| Time Point | Purity (RP-HPLC) | Aggregates (SEC) | Acidic Variants (CEX) | Potency (%) | Physical State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Initial (T0)** | 99.4% | 0.2% | 4.1% | 102% | Clear Liquid |
| **24 Hours** | 98.1% | 0.5% | 6.8% | 99% | Clear Liquid |
| **72 Hours** | 94.2% | 1.8% | 12.4% | 91% | Sl. Opalescent |
| **7 Days** | 82.5% | 5.9% | 28.3% | 74% | Opalescent |
| **14 Days** | 61.2% | 14.7% | 49.5% | 42% | Precipitation |

**Analysis of Degradation Pathways at 60°C:**
*   **Deamidation:** CEX-HPLC revealed a significant increase in acidic variants. Mass spectrometry (LC-MS/MS) confirmed deamidation at the Asn-14 and Gln-28 residues of the glucapeptide chain.
*   **Aggregation:** SEC-HPLC showed a non-linear increase in High Molecular Weight Species (HMWS). At 60°C, the temperature exceeds the onset of unfolding (T_onset ~54°C), leading to hydrophobic exposure and subsequent irreversible aggregation.
*   **Fragmentation:** RP-HPLC identified a distinct pre-peak at T=7 days, identified via MS as the (1-21) fragment, suggesting peptide bond cleavage at the Asp-Pro site under sustained heat.

---

#### 3.2.S.7.1.6 Kinetic Modeling and Arrhenius Calculations
To predict the shelf-life and evaluate the impact of temperature excursions, the degradation rate constant ($k$) was calculated using the Arrhenius equation:

$$k = A e^{-E_a / RT}$$

Where:
*   $E_a$ = Activation Energy
*   $R$ = Universal Gas Constant (8.314 J/mol·K)
*   $T$ = Absolute Temperature (K)

Based on the purity loss (RP-HPLC) from 25°C, 40°C, and 60°C data, the calculated **Activation Energy ($E_a$)** for Glucogen-XR degradation is **84.2 kJ/mol**. This indicates a high sensitivity to temperature fluctuations, justifying the requirement for a strict 2-8°C cold chain.

**Table 3.2.S.7.1.6-1: Rate Constants (k) for Glucogen-XR**

| Temperature (°C) | 1/T (K⁻¹) | Ln(k) [days⁻¹] | Observed Purity Loss (%/month) |
| :--- | :--- | :--- | :--- |
| 5°C | 0.00359 | -9.21 | <0.05% |
| 25°C | 0.00335 | -5.10 | 0.45% |
| 40°C | 0.00319 | -3.05 | 2.80% |

---

#### 3.2.S.7.1.7 Impact on Extended-Release Matrix (Polymeric Integrity)
Glucogen-XR utilizes a proprietary PEG-PLGA block copolymer to achieve extended-release. Thermal stress at 40°C and 60°C was monitored for impact on the polymer matrix using Modulated Differential Scanning Calorimetry (mDSC).

**Results for Batch GLUC-2025-002:**
*   **Glass Transition (Tg):** At T=0, the Tg was 48.2°C. After 3 months at 40°C/75% RH, the Tg shifted to 44.1°C. This shift is attributed to "plasticization" caused by moisture uptake and minor polymer chain scission.
*   **Viscosity:** A 15% reduction in dynamic viscosity was observed after 14 days at 60°C, correlating with a decrease in the weight-average molecular weight (Mw) of the polymer as measured by GPC (Gel Permeation Chromatography).

---

#### 3.2.S.7.1.8 Freeze-Thaw Stability (Condition D)
Glucogen-XR DS is often stored frozen (-80°C) during bulk hold periods. A 5-cycle freeze-thaw study was conducted on batch **GLUC-2025-003**.

**Protocol:**
1.  Freeze at -80°C for 24 hours.
2.  Thaw at room temperature (25°C) for 4 hours.
3.  Repeat for 5 cycles.

**Table 3.2.S.7.1.8-1: Freeze-Thaw Results**

| Attribute | Initial | Cycle 1 | Cycle 3 | Cycle 5 |
| :--- | :--- | :--- | :--- | :--- |
| Purity (RP-HPLC) | 99.5% | 99.5% | 99.4% | 99.4% |
| HMWS (SEC-HPLC) | 0.21% | 0.22% | 0.25% | 0.28% |
| Sub-visible Particles (≥10µm) | 140/mL | 165/mL | 210/mL | 245/mL |

*Conclusion:* Glucogen-XR is robust against freeze-thaw stress, with negligible increases in aggregation and particle formation.

---

#### 3.2.S.7.1.9 Regulatory Compliance and Standards
This study adheres to the following regulatory frameworks:
1.  **FDA Guidance for Industry:** *Q1A(R2) Stability Testing of New Drug Substances and Products (2003).*
2.  **USP <1049>:** *Content Release of Biologics.*
3.  **USP <788>:** *Particulate Matter in Injections.*
4.  **Google Quality Standard:** *GHS-QS-400 (Stability Program Requirements).*

#### 3.2.S.7.1.10 Conclusion of Temperature Stress Testing
The forced degradation studies at elevated temperatures confirm that Glucogen-XR (glucapeptide extended-release) degrades primarily through **deamidation** and **aggregation**. The analytical methods employed have been demonstrated to be stability-indicating, as they successfully resolved degradants from the main peak even at 40% total degradation. The data support a storage temperature of 5°C ± 3°C. Temperature excursions up to 25°C for brief periods (e.g., during shipping or manufacturing) are unlikely to impact the Critical Quality Attributes (CQAs) of the drug substance, provided the cumulative exposure does not exceed 72 hours.

---
**End of Subsection: Temperature Stress**
*Document Reference: GHS-GLUC-DS-STAB-2025-VR1*
*Author: [Expert Regulatory Consultant], Google Health Sciences*

---

## pH Stress (Acidic and Basic)

### **MODULE 3: QUALITY**
### **SECTION 3.2.S.7.3: STRESS TESTING AND FORCED DEGRADATION**
---
**DOCUMENT ID:** GHS-GLUC-M3-DS-STAB-PH001
**DRUG SUBSTANCE:** Glucogen-XR (glucapeptide extended-release)
**MANUFACTURER:** Google Health Sciences, South San Francisco, CA
**DATE:** 24 October 2023
**CONFIDENTIALITY:** Highly Confidential – Trade Secret

---

#### **3.2.S.7.3.2 pH Stress (Acidic and Basic Degradation Studies)**

##### **1.0 Introduction and Rationale**
In accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q5C** (*Stability Testing of Biotechnological/Biological Products*), Google Health Sciences has conducted comprehensive forced degradation studies on Glucogen-XR Drug Substance (DS) to elucidate its inherent stability profile and to validate the stability-indicating nature of the proposed analytical procedures.

Glucogen-XR is a complex 31-amino acid peptide analog (GLP-1 receptor agonist) engineered with a proprietary C-terminal extension for extended-release kinetics. Given the presence of multiple acid-labile and base-labile moieties (e.g., Asp-Gly motifs, Asn residues, and the peptide backbone itself), pH stress testing is critical for:
1.  Identifying potential degradation products (impurities) such as deamidated species, succinimide intermediates, and truncated fragments.
2.  Determining the degradation pathways under extreme physiological and processing conditions.
3.  Establishing the Robustness and Specificity of the Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC) and Size Exclusion Chromatography (SEC) methods.

##### **2.0 Study Design and Methodology**

###### **2.1 Test Materials and Batch Information**
The studies were performed using representative clinical-scale batches manufactured at the South San Francisco facility.

**Table 1: Drug Substance Batches Used in pH Stress Studies**
| Batch Number | Scale | Date of Manufacture | Purity (Initial RP-HPLC %) | Protein Concentration (mg/mL) | Storage Condition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 99.42% | 15.2 | -70°C |
| **GLUC-2025-002** | 2000L | 04-FEB-2025 | 99.38% | 14.8 | -70°C |
| **GLUC-2025-003** | 2000L | 01-MAR-2025 | 99.51% | 15.5 | -70°C |

###### **2.2 Analytical Methods Overview**
To ensure a mass balance approach, multiple orthogonal techniques were employed:
*   **Purity/Degradants:** RP-HPLC (Method MET-GLUC-001) – C18 column, TFA/ACN gradient.
*   **Aggregation:** SE-HPLC (Method MET-GLUC-002) – TSKgel G2000SWxl.
*   **Charge Variants:** Cation Exchange Chromatography (CEX-HPLC) – Method MET-GLUC-003.
*   **Molecular Weight:** LC-MS/MS (Orbitrap Exploris 480) for identification of degradants.

---

##### **3.0 Detailed Protocol: Acidic Stress Testing**

###### **3.1 Objective**
To identify degradation products resulting from low pH exposure, mimicking potential acidic environments during downstream purification (e.g., Protein A elution or viral inactivation steps) or inadvertent exposure.

###### **3.2 Procedure (Protocol P-STAB-PH-01)**
1.  **Preparation:** Thaw Batch GLUC-2025-001 at room temperature.
2.  **Dilution:** Dilute the DS to a target concentration of 2.0 mg/mL using Milli-Q water.
3.  **Acidification:** Adjust the pH to **2.0 ± 0.1** using 1.0 M Hydrochloric Acid (HCl, Trace Metal Grade).
4.  **Incubation:**
    *   Condition A: 25°C for 24 hours, 48 hours, and 7 days.
    *   Condition B: 40°C for 6 hours, 12 hours, and 24 hours.
5.  **Neutralization:** At each time point, withdraw 500 µL and immediately neutralize to pH 7.0 using 1.0 M Sodium Hydroxide (NaOH).
6.  **Quenching:** Dilute 1:1 with mobile phase A to stabilize the sample for HPLC injection.
7.  **Storage:** Samples not immediately analyzed were stored at 2-8°C for no longer than 4 hours.

###### **3.3 Expected Chemical Transformations (Acidic)**
*   **Deamidation:** Conversion of Asparagine (Asn) to Aspartic Acid/Isoaspartic Acid via a succinimide intermediate.
*   **Peptide Bond Hydrolysis:** Specifically at Asp-Pro or Asp-Gly sites.
*   **N-terminal Truncation:** Cleavage of the N-terminal His residue.

---

##### **4.0 Detailed Protocol: Basic Stress Testing**

###### **4.1 Objective**
To evaluate the susceptibility of Glucogen-XR to alkaline conditions, which typically accelerate deamidation, racemization, and disulfide scrambling (though Glucogen-XR is a non-disulfide linked peptide, base-induced aggregation remains a risk).

###### **4.2 Procedure (Protocol P-STAB-PH-02)**
1.  **Preparation:** Thaw Batch GLUC-2025-002.
2.  **Dilution:** Dilute to 2.0 mg/mL.
3.  **Basification:** Adjust the pH to **10.0 ± 0.1** using 1.0 M Sodium Hydroxide (NaOH).
4.  **Incubation:**
    *   Condition A: 25°C for 4 hours, 8 hours, and 24 hours.
    *   Condition B: 40°C for 1 hour, 2 hours, and 4 hours (Note: High pH at 40°C is highly aggressive for peptides).
5.  **Neutralization:** Withdraw 500 µL and neutralize to pH 7.0 using 1.0 M HCl.
6.  **Analysis:** Immediate analysis via RP-HPLC and CEX-HPLC.

---

##### **5.0 Results and Technical Data**

###### **5.1 Acidic Stress Data (pH 2.0)**
The following table summarizes the degradation kinetics observed for Batch GLUC-2025-001.

**Table 2: Degradation of Glucogen-XR at pH 2.0 (Acidic)**
| Time Point | Temp (°C) | Main Peak (%) | Total Impurities (%) | Deamidated (%) | Hydrolysis Frags (%) | HMW species (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0 hr (Ctrl)** | N/A | 99.42 | 0.58 | 0.12 | < LOD | 0.10 |
| **24 hr** | 25°C | 96.15 | 3.85 | 1.45 | 1.10 | 0.15 |
| **48 hr** | 25°C | 92.40 | 7.60 | 3.20 | 2.85 | 0.22 |
| **7 days** | 25°C | 81.12 | 18.88 | 8.45 | 7.30 | 0.45 |
| **6 hr** | 40°C | 94.02 | 5.98 | 2.10 | 1.85 | 0.18 |
| **12 hr** | 40°C | 88.50 | 11.50 | 4.60 | 4.10 | 0.35 |
| **24 hr** | 40°C | 74.30 | 25.70 | 9.80 | 11.40 | 0.85 |

**Statistical Analysis of Acidic Degradation:**
Linear regression analysis of the 25°C data indicates a first-order degradation rate constant ($k_{acid}$) of approximately $1.15 \times 10^{-3} \text{ hr}^{-1}$.

###### **5.2 Basic Stress Data (pH 10.0)**
The Glucogen-XR peptide showed significantly higher sensitivity to alkaline conditions compared to acidic conditions.

**Table 3: Degradation of Glucogen-XR at pH 10.0 (Basic)**
| Time Point | Temp (°C) | Main Peak (%) | Total Impurities (%) | Deamidated (%) | Racemized (%) | HMW species (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0 hr (Ctrl)** | N/A | 99.38 | 0.62 | 0.14 | < LOD | 0.11 |
| **4 hr** | 25°C | 88.20 | 11.80 | 7.45 | 1.20 | 1.15 |
| **8 hr** | 25°C | 76.50 | 23.50 | 14.30 | 3.10 | 2.55 |
| **24 hr** | 25°C | 42.10 | 57.90 | 35.40 | 8.20 | 6.80 |
| **1 hr** | 40°C | 82.35 | 17.65 | 11.20 | 2.15 | 2.45 |
| **2 hr** | 40°C | 64.90 | 35.10 | 21.80 | 5.40 | 4.20 |
| **4 hr** | 40°C | 38.25 | 61.75 | 39.10 | 11.45 | 7.10 |

---

##### **6.0 Identification of Major Degradants (LC-MS/MS Data)**

Structural characterization of the peaks observed in the pH-stressed samples was performed using an Orbitrap mass spectrometer.

**Table 4: Peak Identification and Relative Retention Times (RRT)**
| Peak ID | RRT (RP-HPLC) | Mass Change (Da) | Proposed Identity | Condition Found |
| :--- | :--- | :--- | :--- | :--- |
| **DP-1** | 0.88 | +1.01 | Deamidation at Asn-28 | Acid/Base |
| **DP-2** | 0.92 | +18.02 | Asp-Gly Hydrolysis (Frags 1-15) | Acid |
| **DP-3** | 1.12 | -155.08 | N-terminal Histidine Loss | Acid |
| **DP-4** | 0.82 | +1.01 | Deamidation at Asn-9 | Base |
| **DP-5** | 1.05 | 0.00 | D-Serine Racemization | Base |

---

##### **7.0 Summary and Regulatory Conclusions**

###### **7.1 Mass Balance Assessment**
The mass balance for both acidic and basic stress studies was calculated as:
$$\text{Mass Balance} = \frac{\text{Area of Main Peak} + \sum \text{Area of Impurities}}{\text{Area of Control Peak}} \times 100$$
For all samples where degradation was $<30\%$, mass balance was maintained between **98.2% and 101.5%**, confirming the absence of significant "invisible" degradants (e.g., insoluble precipitates) at the concentrations tested.

###### **7.2 Stability-Indicating Nature of Methods**
The RP-HPLC method (MET-GLUC-001) successfully resolved all major pH-induced degradants from the main peak with a resolution ($R_s$) $> 2.0$. This demonstrates the method's fitness for purpose in routine stability monitoring of Glucogen-XR.

###### **7.3 Comparison to ICH Requirements**
The results provided herein fulfill the requirements of **USP <1049>** and **ICH Q1A**, demonstrating that the Google Health Sciences' Glucogen-XR DS is:
*   **Moderately stable** under acidic conditions (pH 2.0, 25°C) for up to 24 hours.
*   **Highly labile** under basic conditions (pH 10.0), necessitating strict control of pH during the final formulation and storage.

##### **8.0 References**
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products (2003).
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products (1995).
3.  **USP <1225>:** Validation of Compendial Procedures.
4.  *GHS Internal Report R-GLUC-2025-04*: Forced Degradation Profiles of Glucogen-XR.

---
**END OF SUBSECTION**

---

## Oxidative Stress

### **3.2.S.7.1.3.4 Forced Degradation: Oxidative Stress Studies**

#### **1. Purpose and Scope**
The objective of this sub-section is to delineate the oxidative susceptibility of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line. Under ICH Q1A(R2) *Stability Testing of New Drug Substances and Products* and ICH Q2(R1) *Validation of Analytical Procedures*, forced degradation studies are essential to establish the stability-indicating nature of the primary stability-indicating methods (HPLC-RP, LC-MS/MS, and SEC).

Oxidative stress is a primary degradation pathway for peptide therapeutics, specifically targeting sensitive residues such as Methionine (Met), Tryptophan (Trp), Cysteine (Cys) - if present in free form - and Histidine (His). Glucogen-XR contains a specific Met residue at position 14 and a Trp residue at position 31, both of which are critical for receptor binding affinity. This study quantifies the kinetics of sulfoxide formation and kynurenine-related transformation products under varying concentrations of hydrogen peroxide ($H_2O_2$) and metal-catalyzed oxidation (MCO) systems.

---

#### **2. Regulatory Compliance and Reference Standards**
This study was conducted in accordance with the following regulatory frameworks:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products (integrated into oxidative secondary effects).
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1049>:** Content of Stability Protocols.
*   **FDA Guidance for Industry:** *INDs for Phase 2 and Phase 3 Studies - Chemistry, Manufacturing, and Controls Information*.

---

#### **3. Materials and Batch Information**
The oxidative stress profile was evaluated using three (3) independent GMP batches of Glucogen-XR Drug Substance (DS) to ensure consistency across the manufacturing process.

**Table 3.2.S.7.1.3.4-1: Test Articles for Oxidative Stress Evaluation**
| Batch Number | Scale | Date of Manufacture | Storage Condition | Site of Manufacture |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000 L | 12-JAN-2025 | -70°C | South San Francisco (Bldg 4) |
| **GLUC-2025-002** | 2000 L | 04-FEB-2025 | -70°C | South San Francisco (Bldg 4) |
| **GLUC-2025-003** | 2000 L | 22-FEB-2025 | -70°C | South San Francisco (Bldg 4) |

**Reagents:**
1.  **Hydrogen Peroxide ($H_2O_2$):** 30% w/w, TraceMetal™ Grade (Sigma-Aldrich Cat# H1009).
2.  **Iron (II) Sulfate ($FeSO_4 \cdot 7H_2O$):** USP Reference Standard.
3.  **L-Methionine:** Used as a quenching agent (99.5% purity).
4.  **Catalase:** Lyophilized powder from bovine liver (for complete peroxide removal prior to Bioassay).

---

#### **4. Experimental Protocols and Procedures**

##### **4.1 Protocol A: Peroxide-Induced Oxidation (Soft vs. Harsh)**
This protocol evaluates the sensitivity of the peptide to direct nucleophilic attack by $H_2O_2$.

1.  **Preparation:** Dilute Glucogen-XR DS to a concentration of 5.0 mg/mL using 20 mM Histidine buffer (pH 6.5).
2.  **Inoculation:**
    *   *Condition A1 (Control):* No oxidant.
    *   *Condition A2 (Soft):* Add $H_2O_2$ to a final concentration of 0.3% (v/v).
    *   *Condition A3 (Harsh):* Add $H_2O_2$ to a final concentration of 3.0% (v/v).
3.  **Incubation:** Incubate samples at $25^\circ C \pm 2^\circ C$ in the dark.
4.  **Sampling Intervals:** $T = 0, 4, 24, 48, \text{ and } 72$ hours.
5.  **Quenching:** At each time point, remove 500 $\mu L$ and add 50 $\mu L$ of 100 mM L-Methionine solution to neutralize residual $H_2O_2$. Maintain at $2-8^\circ C$ until analysis.

##### **4.2 Protocol B: Metal-Catalyzed Oxidation (MCO/Fenton Reaction)**
This protocol mimics potential degradation occurring due to trace metal leachables from stainless steel bioreactors or primary packaging.

1.  **System:** $Fe^{2+} / Ascorbic\ Acid / O_2$ system.
2.  **Procedure:** 
    *   Prepare 1.0 mg/mL Glucogen-XR DS in Phosphate Buffered Saline (PBS) at pH 7.2.
    *   Add $FeCl_3$ to a final concentration of 50 $\mu M$.
    *   Add Ascorbic Acid to a final concentration of 1.0 mM.
    *   Aerate the headspace with medical-grade oxygen for 30 seconds.
3.  **Incubation:** $37^\circ C$ for 24 hours.
4.  **Quenching:** Add EDTA (Ethylenediaminetetraacetic acid) to a final concentration of 5 mM to chelate metal ions.

---

#### **5. Analytical Methodology and Data Acceptance Criteria**
To quantify the degradation, the following "Stability Indicating Methods" (SIMs) were utilized:

1.  **RP-HPLC (Method MET-0042):** Separation of Met-Sulfoxide derivatives. C18 Column, 150x4.6mm, 3.5 $\mu m$. Mobile Phase A: 0.1% TFA in Water; B: 0.1% TFA in ACN.
2.  **LC-MS Peptide Mapping (Method MET-0091):** Identification of specific oxidation sites using Trypsin/Glu-C digestion.
3.  **Potency (Method BIO-0012):** GLP-1 Receptor Activation Assay (cAMP-based) to determine the biological impact of oxidation.

**Acceptance Criteria for Method Validation in Stress Testing:**
*   **Mass Balance:** 95.0% – 105.0% recovery relative to $T=0$.
*   **Peak Purity:** PDA detector must confirm peak spectral homogeneity (Purity Angle < Purity Threshold).
*   **Resolution:** Resolution between the main peak and the Met-14 Sulfoxide peak $\geq 1.5$.

---

#### **6. Detailed Results and Statistical Analysis**

##### **6.1 Oxidation Kinetics (Peroxide Induction)**
The primary degradation product observed was the $Met_{14}$-sulfoxide Glucogen-XR (+16 Da). Under 3.0% $H_2O_2$ (Condition A3), a secondary peak representing the $Met_{14}$-sulfone (+32 Da) was observed after 48 hours.

**Table 3.2.S.7.1.3.4-2: Purity and Degradation Summary for Batch GLUC-2025-001**
| Time Point (Hrs) | Condition | Main Peak (%) | Met-Sulfoxide (%) | Other Impurities (%) | Total Purity (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | Control | 99.21 | 0.34 | 0.45 | 99.21 |
| **4** | 0.3% $H_2O_2$ | 95.44 | 4.12 | 0.44 | 95.44 |
| **24** | 0.3% $H_2O_2$ | 88.32 | 11.15 | 0.53 | 88.32 |
| **48** | 0.3% $H_2O_2$ | 82.10 | 17.20 | 0.70 | 82.10 |
| **72** | 0.3% $H_2O_2$ | 75.88 | 23.40 | 0.72 | 75.88 |
| **4** | 3.0% $H_2O_2$ | 78.12 | 21.05 | 0.83 | 78.12 |
| **24** | 3.0% $H_2O_2$ | 45.30 | 52.40 | 2.30 | 45.30 |
| **72** | 3.0% $H_2O_2$ | 12.45 | 81.10 | 6.45 | 12.45 |

**Calculated Degradation Rate Constant ($k_{obs}$):**
Using pseudo-first-order kinetics for 0.3% $H_2O_2$:
$$\ln([C]_t / [C]_0) = -kt$$
Where $[C]_t$ is the main peak area at time $t$.
For GLUC-2025-001: $k = 0.0037 \text{ hr}^{-1}$ at $25^\circ C$.

##### **6.2 Peptide Mapping and Site-Specific Oxidation**
LC-MS/MS analysis of the stressed samples (GLUC-2025-002, Condition A3, 24h) confirmed the location of oxygen adducts.

**Table 3.2.S.7.1.3.4-3: Site-Specific Oxidation Levels (%)**
| Fragment | Sequence | Residue | 0.3% $H_2O_2$ (24h) | MCO System (24h) |
| :--- | :--- | :--- | :--- | :--- |
| **T1-4** | HGEGTFTSDVSSYLEGQAAK | None | < LOD | 0.05% |
| **T5-16** | EFIAWLM**M**GR | **Met-14** | 10.8% | 4.2% |
| **T17-31** | GGRRDFGLU...**W** | **Trp-31** | 0.25% | 1.8% |

**Summary of Observations:**
1.  **Met-14** is the most labile site, showing significant conversion to the sulfoxide.
2.  **Trp-31** is relatively stable under peroxide stress but shows increased degradation (Kynurenine formation) under Metal-Catalyzed Oxidation (MCO), indicating a free-radical mechanism for Tryptophan degradation.
3.  **His-1** (N-terminus) remained intact, confirming the stability of the primary amino acid sequence against oxidative deamination under tested conditions.

---

#### **7. Impact on Biological Activity (Potency)**
The biological activity was assessed using a GLP-1R luciferase reporter gene assay.

**Table 3.2.S.7.1.3.4-4: Potency Retention vs. Oxidation Level**
| Sample Description | Oxidation Level (%) | Relative Potency (%) | 95% CI |
| :--- | :--- | :--- | :--- |
| Control (GLUC-2025-003) | 0.35% | 102% | 98 - 106% |
| Stressed (10% Oxidation) | 10.12% | 94% | 89 - 99% |
| Stressed (25% Oxidation) | 25.40% | 76% | 71 - 81% |
| Stressed (50% Oxidation) | 51.10% | 42% | 38 - 46% |

**Conclusion on Potency:** A linear correlation exists between $Met_{14}$ oxidation and loss of biological activity. A 1.0% increase in Met-sulfoxide results in approximately a 1.15% decrease in relative potency. This justifies a stringent limit for oxidative impurities in the drug substance specification ($\leq 2.0\%$).

---

#### **8. Evaluation of Antioxidant Strategies**
Based on the results in Section 6, Google Health Sciences evaluated the addition of L-Methionine as a sacrificial antioxidant in the final formulation.

*   **Experimental Design:** Comparison of DS with and without 10 mM L-Met under 0.3% $H_2O_2$ for 24 hours.
*   **Result:** The presence of 10 mM L-Met reduced the formation of $Met_{14}$-sulfoxide on Glucogen-XR from 11.15% to 0.85%, demonstrating highly effective protection.

---

#### **9. Section Summary and Conclusions**
1.  **Oxidative Pathways:** The primary degradation pathway for Glucogen-XR is the oxidation of $Met_{14}$ to $Met_{14}$-sulfoxide.
2.  **Method Sensitivity:** The RP-HPLC method (MET-0042) is fully capable of resolving oxidative species from the monomeric peptide, confirming its status as a stability-indicating method.
3.  **Risk Mitigation:** While the DS is sensitive to oxidation, the manufacturing process (conducted under nitrogen overlay) and the inclusion of sacrificial antioxidants in the DP formulation mitigate the risk of potency loss.
4.  **Mass Balance:** Mass balance across all oxidative studies was >97%, indicating no significant formation of insoluble aggregates or loss of material to vessel surfaces.

**End of Subsection 3.2.S.7.1.3.4**

---

## Light Exposure per ICH Q1B

### 3.2.S.7.1.3 Photostability Stress Testing (ICH Q1B)

#### 3.2.S.7.1.3.1 Executive Summary and Regulatory Rationale
The photostability of Glucogen-XR (glucapeptide extended-release) drug substance was evaluated in accordance with the International Council for Harmonisation (ICH) Tripartite Guideline Q1B: *Photostability Testing of New Drug Substances and Products*. Given the intrinsic structural complexity of the glucapeptide moiety—specifically the presence of aromatic amino acid residues (Tryptophan, Tyrosine, and Phenylalanine) and the potential for oxidative degradation of the methionine side chains—a comprehensive stress study was executed to define the intrinsic light sensitivity of the therapeutic protein.

The objective of this study was to provide evidence on how the quality of the drug substance varies under the influence of light exposure, to establish appropriate handling instructions, to determine the necessity of light-resistant primary packaging, and to support the overall degradation pathway mapping required for Method Validation (3.2.S.4.3).

#### 3.2.S.7.1.3.2 Study Design and Light Source Specifications
The study was conducted at the Google Health Sciences (GHS) Stability Operations Center in South San Francisco, CA, using a calibrated Caron Model 7001-25-1 Photostability Chamber (Equipment ID: GHS-STB-CHM-042).

**Table 3.2.S.7.1.3-1: Light Source Technical Specifications**

| Parameter | Specification (ICH Option 1) | Actual Performance (GHS-STB-CHM-042) |
| :--- | :--- | :--- |
| **Source Type** | D65/ID65 Emission Standard | Xenon Arc Lamp with UV/IR Filters |
| **Spectral Range** | 320 nm to 800 nm | 300 nm to 850 nm |
| **Visible Light Exposure** | Not less than 1.2 million lux-hours | 1.256 million lux-hours (Target) |
| **Near-UV Energy** | Not less than 200 watt-hours/m² | 212.4 watt-hours/m² (Target) |
| **Temperature Control** | Maintain at 25°C ± 2°C | 25.1°C Mean Kinetic Temp (MKT) |
| **Humidity Control** | Ambient (Recorded) | 40% RH ± 5% |

#### 3.2.S.7.1.3.3 Sample Preparation and Batch Identification
The study utilized three distinct GMP batches of Glucogen-XR Drug Substance (DS) to account for inter-batch variability in glycosylation patterns and residual impurity profiles.

**Table 3.2.S.7.1.3-2: Batch Identification and Configuration**

| Batch Number | Manufacture Date | Formulation Matrix | Sample Presentation |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 20 mM Histidine, 10% Sucrose, pH 6.5 | 2.0 mL Open Quartz Vial |
| **GLUC-2025-002** | 22-JAN-2025 | 20 mM Histidine, 10% Sucrose, pH 6.5 | 2.0 mL Open Quartz Vial |
| **GLUC-2025-003** | 04-FEB-2025 | 20 mM Histidine, 10% Sucrose, pH 6.5 | 2.0 mL Open Quartz Vial |

**Control Groups:**
1.  **Dark Control:** Samples wrapped in triple-layer aluminum foil and placed in the same chamber to account for thermal degradation effects separate from light.
2.  **Chemical Actinometry:** Quinine Monohydrochloride Dihydrate (2% w/v) was used to confirm UV exposure levels according to USP <1067>.

#### 3.2.S.7.1.3.4 Step-by-Step Exposure Protocol (GHS-SOP-55.22)
1.  **Initialization:** The photostability chamber was equilibrated at 25°C for 24 hours prior to sample loading.
2.  **Mapping:** A 9-point radiometer mapping was performed across the shelf to identify the "Sweet Spot" (Uniformity ± 5%).
3.  **Loading:** Samples were spread in a thin layer (not exceeding 3 mm thickness) in high-purity quartz vials to ensure maximum penetration of photons.
4.  **Monitoring:** Integrated lux-meters and UV-radiometers (calibrated to NIST standards) monitored cumulative exposure in real-time.
5.  **Sampling Intervals:**
    *   T=0 (Baseline)
    *   T=Intermediate (600,000 lux-hours / 100 W-hr/m²)
    *   T=Final (1.2 million lux-hours / 200 W-hr/m²)
6.  **Quenching:** Upon reaching the target exposure, samples were immediately moved to a -80°C storage environment to "freeze" the degradation state prior to analysis.

#### 3.2.S.7.1.3.5 Analytical Methodology
Samples were analyzed using the "Stability Indicating Suite" (SIS) validated under GHS-VAL-2024-99:
*   **SE-HPLC (Size Exclusion):** For detection of high molecular weight species (HMWS) and aggregates.
*   **RP-HPLC (Reversed Phase):** For detection of oxidized species and peptide fragments.
*   **CEX-HPLC (Cation Exchange):** For detection of deamidation and charge variants.
*   **Potency (In-Vitro GLP-1R Activation):** Cell-based bioassay.
*   **Sub-visible Particulate Matter:** Micro-flow imaging (MFI).

#### 3.2.S.7.1.3.6 Detailed Results and Statistical Data

The following table summarizes the primary degradation observed at the ICH Q1B endpoint.

**Table 3.2.S.7.1.3-3: Cumulative Photostability Data (Final Exposure: 1.2M Lux-hr / 212 W-hr/m²)**

| Analysis Type | Attribute | Batch: GLUC-2025-001 | Batch: GLUC-2025-002 | Batch: GLUC-2025-003 | Dark Control (Avg) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Purity (SE-HPLC)** | Main Peak (%) | 91.2% | 90.8% | 91.5% | 99.4% |
| **Aggregation** | % HMWS | 8.2% | 8.6% | 7.9% | 0.4% |
| **Oxidation (RP)** | % Met-Ox | 14.5% | 15.2% | 14.1% | 1.2% |
| **Deamidation (CEX)** | % Acidic Variants | 6.7% | 6.9% | 6.5% | 2.1% |
| **Bioactivity** | % Relative Potency | 78% | 74% | 81% | 98% |
| **Particulates** | Count >10µm/mL | 12,400 | 14,800 | 11,200 | 145 |

**Calculations for Degradation Rate ($\Delta$):**
Using the First-Order Kinetic Model for Photodegradation:
$$ln(C/C_0) = -k \cdot E$$
Where:
*   $C$ = Final concentration/purity
*   $C_0$ = Initial concentration
*   $E$ = Total exposure (Lux-hours)
*   $k$ = Photostability constant

For Batch GLUC-2025-001 (SE-HPLC):
$$ln(0.912/0.995) = -k \cdot (1,200,000)$$
$$-0.087 = -k \cdot 1,200,000$$
$$k = 7.25 \times 10^{-8} \text{ lux-hr}^{-1}$$

#### 3.2.S.7.1.3.7 Interpretation of Specific Degradation Pathways
1.  **Aromatic Residue Sensitization:** The significant increase in HMWS (High Molecular Weight Species) from <0.5% to >8.0% suggests that light exposure facilitates the formation of dityrosine cross-links. This is confirmed by fluorescence spectroscopy (Ex 325nm / Em 410nm), which showed a 5-fold increase in the dityrosine signal.
2.  **Oxidative Hotspots:** RP-HPLC-MS analysis of the stressed samples identified Methionine-14 and Tryptophan-31 as the primary sites of photo-oxidation. Met-14 converted to Methionine Sulfoxide, which is directly correlated with the 20-25% loss in biological potency, as this residue is critical for GLP-1 receptor binding.
3.  **Visible Change:** Samples exhibited a slight yellowish tint (B9 on the Ph. Eur. Color Scale) after full exposure, whereas dark controls remained "Colorless."

#### 3.2.S.7.1.3.8 Conclusions and Protective Measures
Glucogen-XR Drug Substance is classified as **Photolabile** according to the criteria defined in ICH Q1B. The extensive degradation observed (8% aggregation, 15% oxidation, and 20% loss of potency) necessitates stringent light protection.

**Required Actions:**
*   **Primary Packaging:** Drug Substance must be stored in light-blocking containers (e.g., amber Type 1 borosilicate glass or opaque HDPE carboys).
*   **Manufacturing Controls:** All downstream processing steps (Formulation, Fill, and Finish) must be conducted under yellow light (UV-filtered) conditions.
*   **Labeling:** Storage instructions must explicitly state: *"Store in the original package in order to protect from light."*
*   **Further Testing:** Since the Drug Substance is photolabile, confirmatory testing on the Drug Product (Glucogen-XR in pre-filled syringes) was initiated and is detailed in Section 3.2.P.8.3.

#### 3.2.S.7.1.3.9 References
1.  **ICH Q1B:** *Photostability Testing of New Drug Substances and Products.* (1996).
2.  **USP <1067>:** *Good Storage and Distribution Practices for Drug Products.*
3.  **GHS-TR-2025-442:** *Characterization of Photo-Oxidation Products in Glucapeptides via LC-MS/MS.*
4.  **Davies, M. J.:** *Reactive species formed on proteins by exposure to light.* Photochemical & Photobiological Sciences, 2018.

---

# Freeze-Thaw Stability

## Multiple Freeze-Thaw Cycles

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.3: STABILITY - FREEZE-THAW CYCLES
### SUBSECTION 3.2.S.7.3.1: MULTIPLE FREEZE-THAW STABILITY OF DRUG SUBSTANCE (GLUC-2025-BATCH-SERIES)

---

#### 1.0 Executive Summary
As part of the comprehensive stability program for Glucogen-XR (glucapeptide extended-release), Google Health Sciences (GHS) has conducted extensive multiple freeze-thaw (F/T) studies to evaluate the impact of repetitive thermal transitions on the structural integrity, potency, and impurity profile of the Drug Substance (DS). 

Given the high molecular complexity of the glucapeptide—a GLP-1 receptor agonist produced via the GHS-CHO-001 cell line—and its specific formulation requirements for extended-release kinetics, the DS is susceptible to interfacial stress, cryoconcentration, and pH shifts during the freezing and thawing processes. This report documents the robustness of the DS when subjected to five (5) consecutive freeze-thaw cycles, simulating worst-case scenarios during bulk storage, transportation, and subsequent drug product manufacturing.

#### 2.0 Scope and Objectives
The primary objective of this study was to demonstrate that the Glucogen-XR Drug Substance remains stable and meets all pre-defined specifications (per Section 3.2.S.4.1) when subjected to repeated freezing at -80°C and thawing at ambient temperature (20°C to 25°C).

**Specific Objectives Include:**
1.  **Protein Aggregation Analysis:** Quantification of high molecular weight (HMW) species via SEC-HPLC.
2.  **Chemical Stability:** Assessment of deamidation, oxidation, and truncation via RP-HPLC.
3.  **Biological Activity:** Verification of GLP-1 receptor activation potency using the cell-based luciferase reporter assay.
4.  **Sub-visible Particulate Matter:** Assessment of proteinaceous aggregates via Micro-Flow Imaging (MFI) and Light Obscuration (USP <788>).
5.  **Formulation Integrity:** Monitoring of pH and surfactant (Polysorbate 80) concentration.

#### 3.0 Regulatory Compliance and Guidelines
This study was designed and executed in accordance with the following regulatory frameworks:
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **FDA Guidance for Industry:** Characterization and Qualification of Cell Substrates and Other Biological Materials Used in the Production of Viral Vaccines for Infectious Disease Indications.

#### 4.0 Materials and Equipment
##### 4.1 Test Batches
Three (3) representative GMP batches of Glucogen-XR Drug Substance were utilized for this study. These batches were manufactured at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco) using the proprietary GHS-CHO-001 GS knockout line.

| Batch Number | Scale | Date of Manufacture | Primary Container Closure |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 10L Sartorius Celsius® FF bags |
| **GLUC-2025-002** | 2000L | 28-JAN-2025 | 10L Sartorius Celsius® FF bags |
| **GLUC-2025-003** | 2000L | 15-FEB-2025 | 10L Sartorius Celsius® FF bags |

##### 4.2 Equipment List
*   **Ultra-Low Temperature Freezer:** Thermo Scientific™ Forma™ FDE Series (Asset ID: GHS-EQ-882), maintained at -80°C ± 5°C.
*   **Controlled Thawing Chamber:** Proprietary GHS-TC-01 with agitation control (25°C ± 2°C).
*   **SEC-HPLC System:** Waters ACQUITY UPLC H-Class Bio System (Asset ID: GHS-LC-442).
*   **Micro-Flow Imaging:** ProteinSimple MFI 5200 (Asset ID: GHS-IMG-009).

#### 5.0 Experimental Protocol (SOP-STAB-FT-092)

The study followed a rigorous cyclic protocol to maximize the exposure of the protein to the liquid-solid interface.

**Step 1: Aliquoting**
Drug substance from each batch was aliquoted into 125 mL PETG bottles (mimicking the surface-area-to-volume ratio of the production scale bags) under aseptic conditions in a Grade A laminar flow hood.

**Step 2: Initial Testing (Cycle 0)**
The Control samples (T0) were analyzed immediately for all parameters listed in Section 6.0.

**Step 3: Freezing Phase**
Samples were placed in the -80°C freezer. Thermal probes were inserted into "dummy" containers to monitor the Rate of Cooling (RoC).
*   *Requirement:* Samples must reach a core temperature of -75°C and be maintained for at least 24 hours.
*   *Calculated RoC:* -0.85°C/min (Target: -0.5 to -1.5°C/min).

**Step 4: Thawing Phase**
Samples were removed and placed in the 25°C controlled environment.
*   *Requirement:* Samples must reach 20°C and be held for 4 hours to ensure complete dissociation of any reversible cold-induced aggregates.
*   *Calculated RoT (Rate of Thaw):* +0.42°C/min.

**Step 5: Repetition**
The process (Step 3 and Step 4) was repeated for a total of 5 cycles. Sampling was performed after Cycle 1 (F/T-1), Cycle 3 (F/T-3), and Cycle 5 (F/T-5).

#### 6.0 Analytical Methods and Acceptance Criteria

| Attribute | Method | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual (Ph. Eur. 2.2.1) | Clear to slightly opalescent; free of visible particles |
| **Purity (Monomer)** | SEC-HPLC | ≥ 98.0% |
| **High Molecular Weight (HMW)** | SEC-HPLC | ≤ 1.5% |
| **Purity (Main Peak)** | RP-HPLC | ≥ 95.0% |
| **Biological Potency** | Cell-based Bioassay | 80% – 125% of Reference Standard |
| **Subvisible Particles** | USP <788> | ≥ 10 μm: ≤ 6000/container; ≥ 25 μm: ≤ 600/container |
| **pH** | Potentiometric | 6.5 ± 0.3 |

#### 7.0 Results and Data Tables

##### 7.1 Stability Data for Batch GLUC-2025-001
This batch represents the primary clinical material.

| Parameter | Cycle 0 (Control) | Cycle 1 | Cycle 3 | Cycle 5 |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear | Clear | Clear | Clear |
| **Monomer (%)** | 99.42 | 99.40 | 99.38 | 99.35 |
| **HMW (%)** | 0.38 | 0.40 | 0.41 | 0.44 |
| **Main Peak (RP-HPLC) (%)** | 97.2 | 97.1 | 97.0 | 96.9 |
| **Potency (%)** | 102 | 101 | 100 | 99 |
| **pH** | 6.52 | 6.52 | 6.53 | 6.53 |
| **Particulates ≥ 10μm** | 142 | 165 | 188 | 210 |

##### 7.2 Stability Data for Batch GLUC-2025-002
This batch represents the process validation (PV) scale-down model.

| Parameter | Cycle 0 (Control) | Cycle 1 | Cycle 3 | Cycle 5 |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear | Clear | Clear | Clear |
| **Monomer (%)** | 99.51 | 99.49 | 99.45 | 99.41 |
| **HMW (%)** | 0.29 | 0.31 | 0.33 | 0.38 |
| **Main Peak (RP-HPLC) (%)** | 98.1 | 98.0 | 97.8 | 97.7 |
| **Potency (%)** | 105 | 104 | 103 | 102 |
| **pH** | 6.49 | 6.49 | 6.50 | 6.50 |
| **Particulates ≥ 10μm** | 88 | 102 | 125 | 144 |

##### 7.3 Stability Data for Batch GLUC-2025-003
This batch was intentionally formulated at the lower limit of the Polysorbate 80 range (0.015% w/v) to test worst-case stabilization.

| Parameter | Cycle 0 (Control) | Cycle 1 | Cycle 3 | Cycle 5 |
| :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear | Clear | Clear | Clear |
| **Monomer (%)** | 99.30 | 99.25 | 99.20 | 99.12 |
| **HMW (%)** | 0.45 | 0.48 | 0.55 | 0.62 |
| **Main Peak (RP-HPLC) (%)** | 96.8 | 96.7 | 96.5 | 96.3 |
| **Potency (%)** | 98 | 97 | 97 | 96 |
| **pH** | 6.55 | 6.55 | 6.56 | 6.55 |
| **Particulates ≥ 10μm** | 210 | 340 | 450 | 580 |

#### 8.0 Detailed Technical Discussion

##### 8.1 Impact on Aggregate Formation (SEC-HPLC)
The data indicates an extremely negligible increase in HMW species. In batch GLUC-2025-001, the HMW percentage shifted from 0.38% to 0.44% over 5 cycles ($ \Delta = 0.06\% $). This stability is attributed to the presence of 5% (w/v) Sucrose in the formulation, which acts as a cryoprotectant by preferential exclusion, thereby stabilizing the native folded state of the glucapeptide during the transition to the vitreous state.

##### 8.2 Sub-visible Particle Analysis (MFI)
Micro-Flow Imaging was employed to detect transparent, proteinaceous particles that might evade USP <788> light obscuration methods. 
*   **Batch GLUC-2025-003 (Worst Case):** Observed an increase in the 2–5 μm range from 1,200 particles/mL to 4,500 particles/mL after 5 cycles. However, particles ≥ 10 μm remained well below the 6,000 threshold. 
*   **Morphological Analysis:** The Aspect Ratio (AR) of detected particles remained high (> 0.85), suggesting spherical droplets or small silicone oil droplets rather than fibrillar protein aggregates (which typically show AR < 0.70).

##### 8.3 Chemical Degradation (RP-HPLC)
RP-HPLC results demonstrate that the freezing and thawing processes do not accelerate deamidation at the Asn-28 residue or oxidation of the Met-14 residue. The Main Peak purity for all batches remained > 96% after 5 cycles. The stability of the pH (variance < 0.05 units) suggests that the Phosphate-Citrate buffer system utilized in the Glucogen-XR DS formulation does not undergo significant selective crystallization (a common failure mode for sodium phosphate-only buffers).

#### 9.0 Statistical Analysis
A Regression Analysis of HMW species over cycle number was performed to predict potential failure points.
*   **Formula:** $ Y = \beta_0 + \beta_1(X) $
    *   Where $ Y $ = HMW %, $ X $ = Cycle Number.
*   **Results for GLUC-2025-001:** $ Y = 0.012X + 0.382 $ ($ R^2 = 0.988 $).
*   **Extrapolation:** Even at 20 freeze-thaw cycles, the predicted HMW would be 0.622%, which is significantly below the specification limit of 1.5%.

#### 10.0 Conclusion
The multiple freeze-thaw stability study confirms that the Glucogen-XR Drug Substance is robust and maintains its Critical Quality Attributes (CQAs) through at least five (5) cycles of freezing to -80°C and thawing to room temperature. The results across three independent batches, including a "worst-case" surfactant concentration batch, demonstrate that the manufacturing process and formulation provide adequate protection against the physical stresses of thermal cycling. 

Based on these data, a limit of **three (3) freeze-thaw cycles** is established for routine DS handling to provide a safety margin for clinical and commercial manufacturing operations.

---
**Footnotes:**
1. *Google Health Sciences internal report: GHS-TR-2025-449-STAB.*
2. *Cryoprotection mechanism based on Arakawa et al., "Protein-solvent interactions in pharmaceutical formulations," 2001.*
3. *All statistical analyses performed using Google Cloud Life Sciences AI-Statistical Suite (v4.2).*

---

## Effect on Critical Quality Attributes

### 3.2.S.7.3.3 Effect on Critical Quality Attributes (CQA) During Freeze-Thaw Cycling

#### 3.2.S.7.3.3.1 Introduction and Scope
The freeze-thaw (F/T) stability of Glucogen-XR (glucapeptide extended-release) drug substance (DS) is a critical component of the overall control strategy to ensure the preservation of the molecule’s physicochemical integrity, biological activity, and safety profile during large-scale manufacturing, transportation, and long-term storage. Given that Glucogen-XR is a highly concentrated synthetic-biological hybrid peptide (GLP-1 receptor agonist) expressed in the GHS-CHO-001 cell line, it is susceptible to interfacial stress, cryoconcentration, and pH shifts during phase transitions.

This section provides an exhaustive evaluation of the impact of multiple freeze-thaw cycles on the Critical Quality Attributes (CQAs) of Glucogen-XR. The study was designed to simulate worst-case scenarios in the manufacturing supply chain, including power failures during freezing, transport excursions, and repeated sampling protocols.

#### 3.2.S.7.3.3.2 Regulatory Alignment and Guidance
All studies were conducted in accordance with the following regulatory frameworks and pharmacopeial standards:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1044>:** Measurement of Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for GLP-1 peptides).

#### 3.2.S.7.3.3.3 Test Materials and Batch Identification
The freeze-thaw stability was assessed using three (3) independent primary stability batches produced at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco, CA).

**Table 1: Batch Identification and Material Specifications for F/T Studies**
| Batch Number | Scale | Date of Manufacture | Container Closure System | Initial Concentration |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 10L Sartorius Celsius® FF Bag | 55.4 mg/mL |
| **GLUC-2025-002** | 2000L | 04-FEB-2025 | 10L Sartorius Celsius® FF Bag | 54.8 mg/mL |
| **GLUC-2025-003** | 2000L | 01-MAR-2025 | 10L Sartorius Celsius® FF Bag | 55.1 mg/mL |

---

#### 3.2.S.7.3.3.4 Detailed Freeze-Thaw Protocol (SOP-GHS-772-B)
The study utilized a controlled-rate freezing and thawing process using the CryoPilot™ system to mimic large-scale operations.

**Step-by-Step Procedure:**
1.  **Aliquotting:** Under aseptic conditions (ISO 5), 100 mL aliquots of Glucogen-XR DS were filled into 125 mL PETG bottles and 10L bags (to evaluate surface-area-to-volume ratio effects).
2.  **Cycle Parameters:**
    *   **Freezing Phase:** Ramp from +5°C to -80°C at a rate of -0.5°C/min. Hold at -80°C for a minimum of 24 hours to ensure complete solidification of the core.
    *   **Thawing Phase:** Ramp from -80°C to +25°C at a rate of +0.2°C/min. Hold at +25°C until the internal temperature reaches 20°C.
3.  **Cycling:** Samples were subjected to 1, 3, 5, and 10 cycles (C1, C3, C5, C10).
4.  **Sampling:** After each designated cycle, samples were equilibrated to room temperature (22°C ± 2°C) and gently inverted 10 times before analytical testing.

---

#### 3.2.S.7.3.3.5 Evaluation of Primary Structure and Purity
The primary sequence of Glucogen-XR must remain intact to ensure GLP-1 receptor binding affinity.

##### 3.2.S.7.3.3.5.1 High-Performance Liquid Chromatography (RP-HPLC)
RP-HPLC was used to quantify the "Main Peak" and "Related Substances" (oxidized, deamidated, and truncated species).

**Table 2: RP-HPLC Purity Results Across 10 F/T Cycles (Batch GLUC-2025-001)**
| Cycle # | Main Peak (%) | Total Impurities (%) | Oxidation (Met) (%) | Deamidation (%) |
| :--- | :--- | :--- | :--- | :--- |
| **T0 (Control)** | 99.24 | 0.76 | 0.12 | 0.31 |
| **Cycle 1** | 99.21 | 0.79 | 0.13 | 0.32 |
| **Cycle 3** | 99.18 | 0.82 | 0.15 | 0.35 |
| **Cycle 5** | 99.10 | 0.90 | 0.18 | 0.39 |
| **Cycle 10** | 98.85 | 1.15 | 0.22 | 0.48 |
| **Acceptance Criteria** | ≥ 95.0% | ≤ 5.0% | Report | Report |

*Statistical Note:* The degradation rate (k) was calculated as $0.039\% \text{ purity loss/cycle}$. Using a 95% confidence interval, the predicted purity after 20 cycles remains >98%, exceeding the specification of 95%.

---

#### 3.2.S.7.3.3.6 Aggregation and High Molecular Weight Species (HMWS)
Glucopeptides are prone to non-covalent aggregation driven by hydrophobic interactions at the ice-liquid interface.

##### 3.2.S.7.3.3.6.1 Size Exclusion Chromatography (SEC-HPLC)
SEC-HPLC was performed using a Tosoh TSKgel G3000SWxl column to monitor dimer, oligomer, and polymer formation.

**Table 3: HMWS Accumulation During F/T Stress**
| Sample ID | Cycle | Monomer (%) | HMWS (%) | LMWS (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-002 | 0 | 99.88 | 0.12 | < LOD |
| GLUC-2025-002 | 1 | 99.87 | 0.13 | < LOD |
| GLUC-2025-002 | 5 | 99.75 | 0.25 | < LOD |
| GLUC-2025-002 | 10 | 99.58 | 0.42 | < LOD |

**Analysis of Cryoconcentration:**
During the freezing transition, solutes (peptide, sucrose, phosphate) are excluded from the growing ice crystal lattice. This leads to a local increase in peptide concentration (calculated via the Scheil equation) by up to 8.5-fold. Despite this, the inclusion of 8% (w/v) sucrose in the formulation buffer (GHS-FB-22) provides sufficient preferential exclusion to stabilize the native state of Glucogen-XR.

---

#### 3.2.S.7.3.3.7 Subvisible Particulate Matter (USP <787>/<788>)
Subvisible particles (SvP) are a sensitive indicator of protein denaturation and aggregation.

**Table 4: Cumulative Particle Counts per mL (HIAC Liquid Particle Counter)**
| Batch | Cycle | ≥ 10 µm (Counts/mL) | ≥ 25 µm (Counts/mL) | Observation |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-003** | T0 | 142 | 8 | Pass |
| **GLUC-2025-003** | C1 | 185 | 12 | Pass |
| **GLUC-2025-003** | C5 | 410 | 35 | Pass |
| **GLUC-2025-003** | C10 | 1,120 | 88 | Pass |
| **USP Limit** | - | ≤ 6,000 | ≤ 600 | - |

---

#### 3.2.S.7.3.3.8 Biological Activity (Potency)
Potency was evaluated using a cell-based cAMP reporter gene assay (GHS-BIO-044) using CHO-K1 cells transfected with the human GLP-1 receptor.

**Calculated Relative Potency ($RP$):**
$$RP = \frac{EC_{50, Reference}}{EC_{50, Sample}} \times 100$$

**Table 5: Biological Potency Stability**
| Cycle # | GLUC-2025-001 (%) | GLUC-2025-002 (%) | GLUC-2025-003 (%) | Mean (%) |
| :--- | :--- | :--- | :--- | :--- |
| **T0** | 104 | 98 | 101 | 101.0 |
| **C1** | 103 | 97 | 102 | 100.7 |
| **C5** | 101 | 96 | 99 | 98.7 |
| **C10** | 99 | 94 | 97 | 96.7 |

*Conclusion:* No significant loss in biological activity was observed. All values remained within the validated range of 80% to 125%.

---

#### 3.2.S.7.3.3.9 Physicochemical Parameter Stability
##### 3.2.S.7.3.3.9.1 pH Stability
The formulation uses a 20mM Sodium Phosphate buffer. A known risk in phosphate buffers is the selective crystallization of $Na_2HPO_4$, which can lead to a pH drop of 2-3 units.

**Table 6: pH and Osmolality Tracking**
| Cycle | pH Value | Osmolality (mOsm/kg) |
| :--- | :--- | :--- |
| T0 | 7.21 | 315 |
| C1 | 7.21 | 314 |
| C5 | 7.19 | 318 |
| C10 | 7.18 | 316 |

The maximum pH deviation observed was 0.03 units, confirming the robustness of the Google Health Sciences proprietary "Cryo-Shield" buffer additive which prevents phosphate stratification.

---

#### 3.2.S.7.3.3.10 Conclusion
The cumulative data from batches GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003 demonstrate that Glucogen-XR DS is highly resilient to freeze-thaw stress. Even after 10 aggressive F/T cycles—far exceeding the standard 3-cycle manufacturing requirement—the drug substance maintains:
1.  **Purity:** >98.8% by RP-HPLC.
2.  **Monomer Content:** >99.5% by SEC-HPLC.
3.  **Particulate Safety:** Well within USP <788> limits.
4.  **Biological Potency:** Maintained within 96-104% of reference.

Based on these results, the drug substance can be safely frozen and thawed for up to 5 cycles during routine manufacturing operations without impacting the Critical Quality Attributes.

---
**References:**
1. *Google Health Sciences Technical Report GHS-TR-2025-09: Cryogenic Robustness of Glucapeptides.*
2. *Wang, W. (2000). Instability, stabilization, and formulation of liquid protein pharmaceuticals. Int. J. Pharm., 185, 129-188.*
3. *Sussman, A., et al. (2023). "Digital Twin Modeling of Protein Freeze-Thaw Kinetics." Journal of Pharmaceutical Sciences.*

---

## Formulation Robustness

### 3.2.S.7.3.2.1 SUBSECTION: FORMULATION ROBUSTNESS – FREEZE-THAW STABILITY (GLUCOGEN-XR)

---

#### 1.0 Executive Summary
This subsection details the formulation robustness of Glucogen-XR (glucapeptide extended-release) drug substance (DS) when subjected to multiple freeze-thaw (F/T) cycles. Glucogen-XR is a complex GLP-1 receptor agonist peptide-fusion protein produced in the proprietary GHS-CHO-001 cell line. Given the propensity of large peptide-fusions to undergo interfacial denaturation, aggregation, and deamidation during phase transitions, Google Health Sciences (GHS) has conducted an exhaustive assessment under ICH Q1A(R2) and ICH Q5E guidelines.

The primary objective was to define the "Design Space" for storage and transport, ensuring that the critical quality attributes (CQAs)—including monomeric purity, bioactivity (cAMP induction), and sub-visible particulate counts—remain within the predefined Specifications (Section 3.2.S.4.1) after exposure to cumulative thermal stress.

---

#### 2.0 Regulatory Framework and Compliance
All studies were conducted in accordance with the following standards:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <787>:** Sub-visible Particulate Matter in Therapeutic Protein Injections.
*   **USP <129>:** Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies (adapted for peptide-fusions).
*   **FDA Guidance for Industry:** Q5C Quality of Biotechnological Products (July 1996).

---

#### 3.0 Materials and Equipment Identifiers

##### 3.1 Test Batches (Drug Substance)
Three representative GMP-scale batches were utilized to represent process variability.

| Batch ID | Scale | Manufacturing Date | Site ID | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | SSF-Bldg-1 | Clinical/Stability Phase III |
| **GLUC-2025-002** | 2000L | 04-FEB-2025 | SSF-Bldg-1 | Process Validation (PPQ-1) |
| **GLUC-2025-003** | 2000L | 28-FEB-2025 | SSF-Bldg-1 | Process Validation (PPQ-2) |

##### 3.2 Storage Container Closure System (CCS)
The study utilized the primary storage container intended for commercial distribution:
*   **Type:** Sartorius Stedim Celsius® FFT Green Line (Pre-sterilized, single-use bags).
*   **Material:** S71 film (Ethylene Vinyl Acetate/Polyethylene multilayer).
*   **Volume:** 10L fill in a 12L nominal capacity bag.

##### 3.3 Equipment Matrix
| Equipment Name | ID Number | Qualification Status | Calibration Due |
| :--- | :--- | :--- | :--- |
| Controlled-Rate Freezer | CRF-GHS-099 | Validated (OQ/PQ) | 15-DEC-2025 |
| SEC-HPLC (Agilent 1260) | HPLC-SYS-04 | Qualified | 01-JUN-2025 |
| Micro-Flow Imaging (MFI) | MFI-4200-02 | Qualified | 12-AUG-2025 |
| UV-Vis Spectrophotometer | UV-882 | Qualified | 10-OCT-2025 |

---

#### 4.0 Detailed Protocol: Multiple Freeze-Thaw Cycle Procedure

The "Freeze-Thaw Robustness Protocol" (GHS-PROT-DS-0098) was designed to simulate worst-case logistics scenarios (e.g., accidental thawing during transit or multiple aliquoting steps).

##### 4.1 Parameter Definitions
*   **Target Storage Temp:** -70°C ± 10°C (Ultra-Low Temperature).
*   **Thawing Conditions:** Passive thawing at Room Temperature (20°C - 25°C) until internal probe reaches 5°C, followed by gentle inversion.
*   **Cycle Definition:** One cycle consists of freezing to ≤ -60°C for 24 hours, followed by a complete thaw to 2°C–8°C for 6 hours.

##### 4.2 Step-by-Step Procedure
1.  **Aliquoting:** Under aseptic conditions (ISO 5), transfer 100mL of Glucogen-XR DS (Concentration: 50 mg/mL) from Batch GLUC-2025-001 into five (5) 125mL PETG bottles (representing the surface-to-volume ratio stress).
2.  **Initial Sampling (T0):** Perform baseline analysis for SEC-HPLC, CEX-HPLC, and MFI.
3.  **Freezing (Cycle 1):** Place containers into the CRF-GHS-099. Initiate a linear cooling ramp of -1.0°C/minute until the core temperature reaches -70°C. Hold for 24 hours.
4.  **Thawing (Cycle 1):** Transfer containers to a 20°C incubator. Monitor internal temperature using a dummy container with a Type-K thermocouple. Once the dummy reaches 4°C, remove and invert 10 times manually.
5.  **Repeat Cycles:** Repeat Steps 3 and 4 for a total of eight (8) cycles.
6.  **Interim Sampling:** Samples are pulled after Cycle 1, 3, 5, and 8.
7.  **Analytical Retesting:** All samples are stored at 2°C–8°C for no more than 12 hours prior to simultaneous analysis to minimize inter-assay variability.

---

#### 5.0 Data and Results: Physical and Chemical Stability

The following tables summarize the results for Batch **GLUC-2025-001** through **GLUC-2025-003**.

##### 5.1 Table: Purity by SEC-HPLC (% Monomer)
SEC-HPLC is used to monitor the formation of High Molecular Weight Species (HMWS) and Low Molecular Weight Species (LMWS).
*Acceptance Criteria: ≥ 97.0% Monomer.*

| Cycle Number | GLUC-2025-001 (%) | GLUC-2025-002 (%) | GLUC-2025-003 (%) | Mean | SD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Baseline (T0)** | 99.4 | 99.5 | 99.3 | 99.40 | 0.10 |
| **Cycle 1** | 99.4 | 99.4 | 99.3 | 99.37 | 0.06 |
| **Cycle 3** | 99.3 | 99.3 | 99.2 | 99.27 | 0.06 |
| **Cycle 5** | 99.1 | 99.2 | 99.1 | 99.13 | 0.06 |
| **Cycle 8 (Worst Case)** | 98.9 | 99.0 | 98.8 | 98.90 | 0.10 |

**Statistical Inference:** The p-value (ANOVA) across 8 cycles is 0.082 (p > 0.05), indicating no statistically significant degradation in monomeric content over 8 F/T cycles.

##### 5.2 Table: Sub-visible Particulate Matter (USP <787>)
Measured by MFI (Micro-Flow Imaging). Values represent particles per mL.

| Particle Size | T0 (Mean) | Cycle 3 (Mean) | Cycle 5 (Mean) | Cycle 8 (Mean) | Spec Limit |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **≥ 10 µm** | 142 | 188 | 215 | 310 | ≤ 6000 |
| **≥ 25 µm** | 4 | 9 | 12 | 18 | ≤ 600 |
| **≥ 2 µm (Ref)** | 1205 | 1450 | 1890 | 2450 | N/A |

**Technical Observation:** While a trend of increasing particulate counts is observed (r² = 0.94 for ≥ 10 µm), the absolute counts at Cycle 8 remain an order of magnitude below the USP <787> limits for protein therapeutics, confirming the protective effect of the Polysorbate 80 (0.05% w/v) in the formulation.

---

#### 6.0 Calculation of the "Cryoconcentration Risk Factor" (CRF)

To assess the risk of solute exclusion during slow freezing, the Cryoconcentration Risk Factor was calculated based on the following formula:

$$CRF = \frac{C_{local(max)}}{C_{bulk}}$$

Where:
*   $C_{bulk} = 50.0 \text{ mg/mL}$
*   $C_{local(max)}$ was determined by sampling the "last-to-freeze" core of a 10L bag using a fractional protein determination.

**Experimental Data:**
*   Core Concentration (GLUC-2025-001): 54.2 mg/mL
*   Peripheral Concentration: 48.1 mg/mL
*   **Calculated CRF:** $54.2 / 50.0 = 1.084$

**Regulatory Interpretation:** A CRF < 1.10 is considered "Low Risk" for Glucogen-XR, suggesting that the buffering capacity (20mM Histidine, pH 6.5) and the cryoprotectant (Sucrose 8% w/v) are sufficient to prevent localized pH shifts and protein precipitation during the phase transition.

---

#### 7.0 Biological Potency (Relative Potency by Cell-Based Bioassay)
The potency of Glucogen-XR is determined by its ability to stimulate cAMP production in a HEK-293 cell line overexpressing the GLP-1 receptor.

| Batch | T0 Rel. Potency | Cycle 5 Rel. Potency | Cycle 8 Rel. Potency |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 1.02 | 1.01 | 0.99 |
| **GLUC-2025-002** | 0.98 | 0.98 | 0.97 |
| **GLUC-2025-003** | 1.05 | 1.03 | 1.02 |
| **Mean** | **1.017** | **1.007** | **0.993** |

*Acceptance Criteria: 0.80 – 1.25.* All results fall well within the biological activity requirements.

---

#### 8.0 Formulation Robustness Conclusions

Based on the cumulative data from batches **GLUC-2025-001, -002, and -003**, the following conclusions are drawn regarding the robustness of the Glucogen-XR Drug Substance:

1.  **Freeze-Thaw Resilience:** The DS is robust up to eight (8) freeze-thaw cycles when frozen at -70°C and thawed at room temperature.
2.  **Aggregation Control:** SEC-HPLC and MFI data demonstrate that the inclusion of 8% Sucrose and 0.05% Polysorbate 80 successfully mitigates the risk of ice-liquid interfacial denaturation.
3.  **Chemical Stability:** No significant increases in acidic or basic variants (by CEX-HPLC, data in Appendix 3.2.S.7.3-A) were observed, indicating the peptide-fusion linkage is stable under cyclic thermal stress.
4.  **Operational Margin:** While the standard manufacturing process allows for a single freeze-thaw cycle, the data supports an operational safety margin of 800% (8 cycles vs. 1 cycle).

---

#### 9.0 Literature and Guidelines Reference
1.  **Wang, W. (2000).** "Instability, stabilization, and formulation of liquid protein pharmaceuticals." *International Journal of Pharmaceutics*, 185(2), 129-188.
2.  **USP Chapter <121>:** Insulin Assays (Methodological alignment for GLP-1).
3.  **GHS Internal Report:** RPT-GLUC-2024-044 "Impact of Cooling Rates on Glucogen-XR Aggregation Profiles."

---
**[END OF SECTION 3.2.S.7.3.2.1]**

---

# In-Use Stability

## Stability After Removal from Refrigeration

### **3.2.S.7.3 STABILITY DATA [GLUCOGEN-XR (GLUCAPEPTIDE)]**
### **SUBSECTION: STABILITY AFTER REMOVAL FROM REFRIGERATION (IN-USE STABILITY)**

---

#### **1.0 SCOPE AND OBJECTIVE**
This section provides a comprehensive evaluation of the stability profile of Glucogen-XR (glucapeptide extended-release) drug substance and final drug product when subjected to conditions simulating removal from long-term refrigerated storage ($2^\circ\text{C}$ to $8^\circ\text{C}$). 

Given the peptide nature of Glucogen-XR and its specific extended-release formulation—which utilizes a proprietary pegylated-liposomal matrix—it is imperative to define the "Out of Refrigeration" (OOR) window. This assessment supports the labeling instructions for healthcare providers and patients regarding the handling of the product during pharmacy dispensing, clinical administration, and potential accidental excursions at the site of use.

The objective is to demonstrate that Glucogen-XR maintains its Critical Quality Attributes (CQAs), including potency (biological activity), purity (monomer content), and structural integrity (deamidation/oxidation levels), for a period exceeding the proposed labeling allowance of 28 days at controlled room temperature (CRT) up to $30^\circ\text{C}$ ($86^\circ\text{F}$).

---

#### **2.0 REGULATORY COMPLIANCE AND GUIDELINES**
This stability program has been designed and executed in accordance with the following international and domestic regulatory frameworks:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **ICH Q1E:** Evaluation of Stability Data.
*   **USP <1049>:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **FDA Guidance for Industry:** Q1A(R2) Stability Testing of New Drug Substances and Products (Nov 2003).
*   **21 CFR 211.166:** Stability Testing Requirements for Finished Pharmaceuticals.

---

#### **3.0 TEST ARTICLES AND BATCH STRATEGY**
Testing was performed on three (3) primary registration stability batches manufactured at the Google Health Sciences commercial facility (South San Francisco, CA). These batches represent the commercial-scale manufacturing process (3,000L bioreactor scale).

**Table 1: Identification of Stability Batches for OOR Assessment**
| Batch Number | Scale | Date of Manufacture | Container Closure System | Intended Use |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 3,000 L | 12-JAN-2025 | Type I Glass Pre-filled Syringe (PFS) | Primary Stability |
| **GLUC-2025-002** | 3,000 L | 28-JAN-2025 | Type I Glass Pre-filled Syringe (PFS) | Primary Stability |
| **GLUC-2025-003** | 3,000 L | 05-FEB-2025 | Type I Glass Pre-filled Syringe (PFS) | Primary Stability |
| **GLUC-2025-004** | 3,000 L | 15-FEB-2025 | 2.0 mL Type I Glass Vial | Clinical/Supportive |

---

#### **4.0 STUDY DESIGN AND ANALYTICAL METHODOLOGY**

##### **4.1 Thermal Stress Tiers**
To simulate real-world handling, Glucogen-XR was removed from the long-term storage condition ($5^\circ\text{C} \pm 3^\circ\text{C}$) and placed into controlled environmental chambers at the following settings:
1.  **Controlled Room Temperature (CRT):** $25^\circ\text{C} \pm 2^\circ\text{C}$ / $60\% \pm 5\%$ RH.
2.  **Accelerated Excursion (AE):** $30^\circ\text{C} \pm 2^\circ\text{C}$ / $65\% \pm 5\%$ RH.
3.  **High Stress/Extreme Temperature:** $40^\circ\text{C} \pm 2^\circ\text{C}$ / $75\% \pm 5\%$ RH (7-day duration only).

##### **4.2 Analytical Matrix (Stability Indicating Profile)**
The following parameters were identified as critical for assessing the stability of glucapeptide after removal from refrigeration:

1.  **Purity by RP-HPLC:** Detection of deamidated and oxidized species.
2.  **Purity by SEC-HPLC:** Detection of high molecular weight species (HMWS) and aggregates.
3.  **Potency (Cell-Based Bioassay):** Measurement of cAMP induction in GLP-1 receptor-expressing cells (Reported as % Relative Potency).
4.  **pH (USP <791>):** Monitoring for shifts in the citrate-phosphate buffer system.
5.  **Particulate Matter (USP <788>):** Monitoring for sub-visible particles (HIAC).
6.  **Viscosity:** Monitoring the rheological stability of the extended-release matrix.

---

#### **5.0 STEP-BY-STEP STABILITY PROTOCOL (OOR-PROC-09)**

**Step 1: Equilibration**
*   Remove exactly 120 units (PFS) from the $2-8^\circ\text{C}$ storage walk-in (Asset ID: GHS-INV-772).
*   Allow units to equilibrate to room temperature for exactly 60 minutes on a cleanroom benchtop before placing in the stability chamber.

**Step 2: Chamber Loading**
*   Transfer units to the $25^\circ\text{C}/60\%$ RH chamber (Asset ID: GHS-STB-012).
*   Ensure units are stored in the final secondary packaging (cartons) to shield from light, as per commercial storage instructions.

**Step 3: Sampling Frequency**
*   T=0 (Baseline: Immediate removal from refrigeration).
*   T=7 Days.
*   T=14 Days.
*   T=21 Days.
*   T=28 Days (Primary End Point for Labeling).
*   T=42 Days (Data for Excursion Support).

**Step 4: Statistical Analysis**
*   Linear regression analysis of purity and potency data.
*   Calculation of the 95% confidence interval (CI) for the slope.
*   Comparison of the lower 95% CI to the shelf-life specification limit.

---

#### **6.0 DATA SUMMARY AND TABULATED RESULTS**

The following tables summarize the results for the primary batch (GLUC-2025-001) under the "In-Use" $25^\circ\text{C}/60\%$ RH condition.

**Table 2: Stability of GLUC-2025-001 at $25^\circ\text{C}$ (Post-Refrigeration)**
| Timepoint | Description | Potency (% Relative) | Purity (SEC % Monomer) | Purity (RP % Main Peak) | pH | Sub-visible Particles ($\geq 10\mu\text{m}$) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Specification** | Clear/Colorless | 80% - 120% | $\geq 95.0\%$ | $\geq 90.0\%$ | $6.8 \pm 0.3$ | $\leq 6000$/vial |
| **T=0** | Conforms | 102% | 99.4% | 97.2% | 6.8 | 112 |
| **T=7 Days** | Conforms | 101% | 99.3% | 97.0% | 6.8 | 134 |
| **T=14 Days** | Conforms | 100% | 99.1% | 96.5% | 6.9 | 158 |
| **T=21 Days** | Conforms | 98% | 98.8% | 95.8% | 6.8 | 204 |
| **T=28 Days** | Conforms | 97% | 98.5% | 95.1% | 6.9 | 245 |
| **T=42 Days** | Conforms | 94% | 97.9% | 94.0% | 6.9 | 312 |

**Table 3: Comparison Across Registration Batches (T=28 Days, $25^\circ\text{C}$)**
| Parameter | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Average | Std Dev |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Potency (%)** | 97 | 98 | 96 | 97.0 | 1.0 |
| **SEC Monomer (%)**| 98.5 | 98.7 | 98.4 | 98.5 | 0.15 |
| **RP-HPLC Main (%)**| 95.1 | 95.3 | 94.8 | 95.1 | 0.25 |

---

#### **7.0 TECHNICAL DISCUSSION AND KINETIC ANALYSIS**

##### **7.1 Degradation Pathways**
The primary degradation pathway observed during the OOR period is deamidation at the $Asn^{28}$ residue of the glucapeptide chain. Kinetic modeling using the Arrhenius equation suggests an activation energy ($E_a$) of approximately 85 kJ/mol for this reaction within the Glucogen-XR matrix.

The degradation rate constant ($k$) at $25^\circ\text{C}$ was calculated as follows:
$$k_{25} = \frac{\ln(C_0 / C_t)}{t}$$
Based on RP-HPLC data, the $k$ value is $0.0007 \text{ day}^{-1}$, indicating an extremely stable profile that easily supports a 28-day room temperature window.

##### **7.2 Aggregation and Physical Stability**
SEC-HPLC data shows a negligible increase in High Molecular Weight Species (HMWS). The proprietary PEG-liposomal formulation provides a steric barrier that prevents peptide-peptide interaction, thereby inhibiting the formation of fibrils or covalent aggregates often seen in other GLP-1 receptor agonists when removed from refrigeration.

---

#### **8.0 ACCIDENTAL EXCURSION DATA (UP TO $30^\circ\text{C}$)**
To support patient safety in warmer climates, stability was tested at $30^\circ\text{C}$.
*   **Result:** At $30^\circ\text{C}$ for 28 days, the purity remained at $93.8\%$ (RP-HPLC) and potency at $92\%$.
*   **Conclusion:** The product remains within commercial specifications even if exposed to moderate heat excursions during the "in-use" period.

---

#### **9.0 CONCLUSION**
The data presented in this subsection definitively demonstrate that **Glucogen-XR (glucapeptide extended-release)** is stable for at least 42 days when stored at temperatures up to $25^\circ\text{C}$ and for 28 days at temperatures up to $30^\circ\text{C}$.

Google Health Sciences proposes a conservative labeling instruction: *"Glucogen-XR may be stored at room temperature (up to $30^\circ\text{C}$ / $86^\circ\text{F}$) for a single period of up to 28 days. Once removed from refrigeration, the product must not be returned to the refrigerator and must be discarded if not used within the 28-day window."*

---

#### **10.0 REFERENCES**
1.  *GHS Internal Report R-2025-099: Kinetic Modeling of Glucapeptide Deamidation.*
2.  *USP <788> Particulate Matter in Injections.*
3.  *ICH Q1A(R2) Stability Testing of New Drug Substances and Products.*

---

## Post-Reconstitution Stability if Applicable

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.3: STABILITY DATA – IN-USE STABILITY
### SUBSECTION: POST-RECONSTITUTION STABILITY (IF APPLICABLE)

---

#### 3.2.S.7.3.1 Executive Summary: Post-Reconstitution Stability of Glucogen-XR
This section provides a comprehensive evaluation of the stability of Glucogen-XR (glucapeptide extended-release) following reconstitution of the lyophilized Drug Substance (DS) into the designated solvent system. While the commercial Drug Product (DP) is intended for a pre-filled syringe (PFS) or auto-injector format, the Drug Substance is stored in a lyophilized state at -20°C for long-term bulk holding. Consequently, this study validates the "Post-Reconstitution Stability" (PRS) required during the fill-finish process and potential clinical bedside preparation scenarios.

Glucogen-XR is a high-molecular-weight GLP-1 receptor agonist peptide-polymer conjugate. Due to its extended-release nature, the kinetic profile of the peptide must be maintained post-reconstitution to ensure the integrity of the microsphere-mimetic peptide clusters.

#### 3.2.S.7.3.2 Regulatory Alignment and Compliance Standards
The studies described herein were conducted in accordance with the following international and domestic regulatory frameworks:
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <797>:** Pharmaceutical Compounding – Sterile Preparations (relevant to in-use clinical windows).
4.  **USP <1207>:** Package Integrity Evaluation – Sterile Products.
5.  **FDA Guidance for Industry:** Q1A(R2) Stability Testing of New Drug Substances and Products (Revision 2).

---

#### 3.2.S.7.3.3 Reconstitution Protocol and Methodology
The reconstitution of Glucogen-XR is a critical process parameter (CPP). The following protocol was utilized to generate the samples for the stability matrices presented in this section.

##### 3.2.S.7.3.3.1 Reconstitution Procedure (Standardized for Stability Studies)
1.  **Preparation:** Remove Glucogen-XR lyophilized powder (Batch GLUC-2025-001 through GLUC-2025-003) from -20°C storage and allow to equilibrate to room temperature (20°C to 25°C) for 45 minutes.
2.  **Solvent Selection:** Use 1.2 mL of Sterile Water for Injection (sWFI) containing 0.02% Polysorbate 80 and 5% Mannitol (Reconstitution Buffer A-1).
3.  **Introduction:** Using a 21G needle, slowly inject the solvent along the side wall of the glass vial (Type I Borosilicate).
4.  **Agitation Protocol:**
    *   **Phase 1:** Gentle swirling for 60 seconds (do not shake).
    *   **Phase 2:** Static rest for 120 seconds to allow for initial hydration.
    *   **Phase 3:** Low-speed orbital shaking (50 RPM) for 5 minutes until a clear to slightly opalescent colorless solution is formed.
5.  **Verification:** Visual inspection under a high-intensity lamp (USP <790>) to ensure absence of visible particulates.

---

#### 3.2.S.7.3.4 Batch Identification and Selection
Three primary GMP-compliant batches of Glucogen-XR Drug Substance were utilized for the post-reconstitution stability program.

**Table 1: Identification of Batches for PRS Testing**
| Batch Number | Scale | Manufacturing Date | Site of Manufacture | Use in Stability |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 200L | 15-JAN-2025 | 3000 Innovation Dr, SSF | Primary Stability |
| **GLUC-2025-002** | 200L | 02-FEB-2025 | 3000 Innovation Dr, SSF | Confirmatory Stability |
| **GLUC-2025-003** | 200L | 18-MAR-2025 | 3000 Innovation Dr, SSF | Temperature Excursion |

---

#### 3.2.S.7.3.5 Stability Data Tables: Reconstituted State
The following tables represent the stability of Glucogen-XR after reconstitution and storage under two conditions: **Refrigerated (2°C - 8°C)** and **Controlled Room Temperature (20°C - 25°C)**.

##### 3.2.S.7.3.5.1 Storage Condition: Refrigerated (5°C ± 3°C)
**Table 2: Stability of Reconstituted Glucogen-XR (Batch GLUC-2025-001)**
*Solvent: Reconstitution Buffer A-1; Concentration: 50 mg/mL*

| Test Parameter | Specification | T=0 (Initial) | T=24 Hours | T=48 Hours | T=7 Days |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear to Opalescent | Clear | Clear | Clear | Sl. Opalescent |
| **pH** | 6.5 ± 0.3 | 6.52 | 6.51 | 6.53 | 6.58 |
| **Protein Conc. (UV)** | 47.5 - 52.5 mg/mL | 50.1 mg/mL | 50.0 mg/mL | 49.9 mg/mL | 49.2 mg/mL |
| **Purity (RP-HPLC)** | ≥ 95.0% | 98.4% | 98.3% | 98.1% | 97.4% |
| **Aggregates (SEC)** | ≤ 2.0% | 0.4% | 0.5% | 0.6% | 0.9% |
| **Bioactivity (Cell)** | 80% - 125% | 102% | 101% | 99% | 96% |
| **Particulates (HIAC)** | ≥10μm: ≤6000 | 112 | 145 | 188 | 450 |

##### 3.2.S.7.3.5.2 Storage Condition: Room Temperature (25°C ± 2°C / 60% RH)
**Table 3: Stability of Reconstituted Glucogen-XR (Batch GLUC-2025-002)**
*Solvent: Reconstitution Buffer A-1; Concentration: 50 mg/mL*

| Test Parameter | Specification | T=0 (Initial) | T=4 Hours | T=8 Hours | T=24 Hours |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear to Opalescent | Clear | Clear | Clear | Opalescent |
| **pH** | 6.5 ± 0.3 | 6.49 | 6.50 | 6.52 | 6.61 |
| **Purity (RP-HPLC)** | ≥ 95.0% | 98.6% | 98.2% | 97.8% | 96.1% |
| **Aggregates (SEC)** | ≤ 2.0% | 0.3% | 0.6% | 0.9% | 1.8% |
| **Deamidation (%)** | Report Result | 1.1% | 1.2% | 1.5% | 2.4% |
| **Sub-visible (HIAC)**| ≥25μm: ≤600 | 12 | 15 | 22 | 84 |

---

#### 3.2.S.7.3.6 Analytical Methodology and Instrumentation
To ensure the robustness of the post-reconstitution data, Google Health Sciences employed state-of-the-art analytical platforms.

1.  **Reverse Phase High-Performance Liquid Chromatography (RP-HPLC):**
    *   *Column:* C18, 2.1 x 150mm, 1.7μm.
    *   *Mobile Phase A:* 0.1% TFA in Water.
    *   *Mobile Phase B:* 0.1% TFA in Acetonitrile.
    *   *Detection:* 214nm.
    *   *Purpose:* Detection of hydrophilic and hydrophobic impurities (deamidation, oxidation).

2.  **Size Exclusion Chromatography (SEC-HPLC):**
    *   *Column:* TSKgel G3000SWxl.
    *   *Mobile Phase:* 200mM Phosphate Buffer, pH 7.0.
    *   *Flow Rate:* 0.5 mL/min.
    *   *Purpose:* Quantification of high molecular weight species (HMWS) and aggregates.

3.  **In Vitro Bioactivity Assay:**
    *   *System:* CHO-K1 cells expressing the human GLP-1 receptor.
    *   *Readout:* cAMP stimulation via TR-FRET (Time-Resolved Fluorescence Resonance Energy Transfer).
    *   *Calculation:* Relative potency vs. Internal Reference Standard (IRS-GLUC-2024).

---

#### 3.2.S.7.3.7 Statistical Analysis of Degradation Kinetics
The rate of degradation for Glucogen-XR in its reconstituted state was modeled using first-order kinetics. 

**Equation 1: First-Order Rate Constant**
$$ln[C]_t = ln[C]_0 - kt$$
Where:
*   $[C]_t$ = Concentration/Purity at time $t$
*   $[C]_0$ = Initial Concentration/Purity
*   $k$ = Degradation rate constant
*   $t$ = Time in hours

Based on the data from Batch GLUC-2025-002 at 25°C, the calculated $k$ for purity loss is approximately $0.0011 hr^{-1}$. This supports a "Use-Within" period of 24 hours at room temperature while maintaining a safety margin above the 95.0% purity specification limit.

---

#### 3.2.S.7.3.8 Photostability of Reconstituted Product
In accordance with **ICH Q1B**, the reconstituted Glucogen-XR was exposed to a total illumination of not less than 1.2 million lux hours and an integrated near ultraviolet energy of not less than 200 watt hours/square meter.

**Table 4: Photostability Results (Batch GLUC-2025-001)**
| Condition | Purity (RP-HPLC) | Aggregates (SEC) | Visible Change |
| :--- | :--- | :--- | :--- |
| **Protected (Control)** | 98.4% | 0.4% | None |
| **Exposed (Unprotected)** | 96.2% | 1.1% | Slight Yellowing |

*Conclusion:* Reconstituted Glucogen-XR is moderately sensitive to light. The instructions for use (IFU) will specify that the product should be protected from direct sunlight following reconstitution.

---

#### 3.2.S.7.3.9 Microbial Challenge Study (Preservative Effectiveness)
Since Glucogen-XR Reconstitution Buffer A-1 does not contain antimicrobial preservatives, a microbial challenge was conducted to support the holding time.

*   **Inoculum:** *Staphylococcus aureus* (ATCC 6538) and *Pseudomonas aeruginosa* (ATCC 9027).
*   **Target:** No more than 0.5 log increase from the initial count at 24 hours.
*   **Result:** Batch GLUC-2025-003 demonstrated no microbial growth within the 24-hour room temperature window and 7-day refrigerated window.

---

#### 3.2.S.7.3.10 Summary of Conclusions for Post-Reconstitution Stability
The extensive stability testing of Glucogen-XR (glucapeptide extended-release) across multiple GMP batches (GLUC-2025-001, 002, 003) confirms the following:
1.  **Refrigerated Storage (2°C - 8°C):** Reconstituted solution is stable for up to **7 days**.
2.  **Room Temperature Storage (20°C - 25°C):** Reconstituted solution is stable for up to **24 hours**.
3.  **Critical Quality Attributes (CQAs):** All CQAs, including purity, aggregate levels, and bioactivity, remained within the validated specification limits during these intervals.
4.  **Handling Recommendation:** Reconstituted Glucogen-XR should be administered immediately, or stored refrigerated and used within 24 hours for optimal safety and efficacy, consistent with USP <797> guidelines for low-risk level sterile preparations.

---
**End of Subsection 3.2.S.7.3**
*Confidential - Property of Google Health Sciences*

---

## Instructions for Storage After Opening

### **3.2.S.7.3.1.2 Instructions for Storage After Opening (In-Use Stability)**

---

#### **1.0 Introduction and Scope**
This section provides a comprehensive evaluation of the in-use stability for **Glucogen-XR (glucapeptide extended-release)**, manufactured by **Google Health Sciences (GHS)**. As a high-potency GLP-1 receptor agonist formulated for extended release via a proprietary pegylated peptide matrix, the integrity of the molecule post-constitution (if applicable) or post-first-entry (for multi-dose delivery systems) is critical to maintaining therapeutic efficacy and patient safety.

The objective of these studies is to define the specific storage conditions, temperature excursions, and maximum duration of use once the primary container closure system (CCS) has been breached or the drug product has been exposed to the environment. These instructions are derived from rigorous stress testing, microbial challenge studies (USP <51>), and chemical stability assessments conducted under ICH Q1A(R2) and ICH Q5C guidelines.

#### **2.0 Regulatory Basis and Compliance Standards**
The protocols and data presented herein comply with the following regulatory frameworks:
*   **FDA Guidance for Industry:** *Container Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol for Sterile Products.*
*   **ICH Q5C:** *Stability Testing of Biotechnological/Biological Products.*
*   **USP <797>:** *Pharmaceutical Compounding – Sterile Preparations.*
*   **USP <51>:** *Antimicrobial Effectiveness Testing.*
*   **EMA/CHMP/QWP/159/96 rev. 1:** *Note for Guidance on Maximum Shelf Life for Sterile Products for Human Use After First Opening or Following Reconstitution.*

#### **3.0 Component Identification and Batch Records**
The following batches of Glucogen-XR were utilized for the formal In-Use Stability Program. These batches represent the commercial-scale manufacturing process at the South San Francisco facility (3000 Innovation Drive).

**Table 1: Batch Identification for In-Use Stability Studies**
| Batch Number | Scale | Manufacturing Date | Container Closure System | API Concentration |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L (Commercial) | 12-JAN-2025 | 3mL Prefilled Pen (PFP) | 10 mg/mL |
| **GLUC-2025-002** | 2000L (Commercial) | 18-JAN-2025 | 3mL Prefilled Pen (PFP) | 10 mg/mL |
| **GLUC-2025-003** | 2000L (Commercial) | 02-FEB-2025 | 3mL Prefilled Pen (PFP) | 10 mg/mL |
| **GLUC-2025-004** | Pilot (Development) | 15-NOV-2024 | 2mL Type I Glass Vial | 10 mg/mL |

---

#### **4.0 Storage Instructions: The "First-Use" Protocol**

Upon initial administration (the "opening" event), the Glucogen-XR delivery system (GHS-Pen-Gen2) is subjected to mechanical stress and potential microbial ingress. 

##### **4.1 Temperature and Environment Specifications**
Once the cap is removed and the first dose is administered, Glucogen-XR must be stored according to the following bifurcated strategy to ensure peptide backbone stability and prevent pegyl-cleavage.

**Table 2: Authorized Post-Opening Storage Conditions**
| Condition ID | Temperature Range | Humidity | Maximum Duration |
| :--- | :--- | :--- | :--- |
| **In-Use A (Refrigerated)** | 2°C to 8°C (36°F to 46°F) | Ambient | 56 Days |
| **In-Use B (Room Temp)** | 15°C to 30°C (59°F to 86°F) | <60% RH | 30 Days |
| **Extreme Excursion** | Up to 40°C (104°F) | N/A | <4 Hours (Cumulative) |

*Note: The total "In-Use" period must not exceed 56 days regardless of the storage combination.*

##### **4.2 Protection from Light**
Glucogen-XR contains light-sensitive amino acid residues (Tryptophan at Pos-25 and Tyrosine at Pos-18). Exposure to direct UV light results in photo-oxidation.
*   **Instruction:** After each use, the pen cap must be replaced immediately.
*   **Requirement:** Store the pen in the original carton if the cap is damaged.

---

#### **5.0 Detailed Step-by-Step Procedure for Post-Opening Maintenance**

To ensure the patient maintains the stability of the GLP-1 analog, the following Standard Operating Procedure (SOP-GHS-772) is mandated for the user.

**Step 1: Verification of Integrity**
*   Before storing after the first dose, inspect the cartridge window.
*   The solution must be clear, colorless, and free of visible particulates (Reference USP <790>).
*   If "milky" or "cloudy" appearance is noted, the batch (e.g., GLUC-2025-XXX) may have undergone thermal denaturation; discard immediately.

**Step 2: Needle Removal (Critical for Stability)**
*   The needle must be removed immediately after injection.
*   **Reasoning:** Leaving the needle attached creates a "wicking" pathway for atmospheric oxygen and microbial contaminants into the non-preserved peptide reservoir.
*   **Data Reference:** Study GHS-STAB-2025-09 demonstrated a 14% increase in high-molecular-weight proteins (HMWP) over 7 days when needles remained attached.

**Step 3: Cap Re-engagement**
*   Align the GHS-Pen-Gen2 cap with the cartridge holder.
*   Snap into place to ensure an airtight seal against the septum.

**Step 4: Recording the "Discard Date"**
*   The patient must calculate the discard date (Current Date + 56 days).
*   Write this on the pen label space provided using a permanent marker.

---

#### **6.0 Analytical Evaluation of In-Use Stability**

Google Health Sciences performed comprehensive testing on Batch **GLUC-2025-001** through **GLUC-2025-003** to validate these instructions.

##### **6.1 Purity via RP-HPLC (Reverse Phase High Performance Liquid Chromatography)**
The degradation of glucapeptide-XR primarily occurs through deamidation and oxidation.

**Table 3: RP-HPLC Results Post-Opening (Stored at 30°C/60% RH)**
| Timepoint | Batch GLUC-2025-001 (%) | Batch GLUC-2025-002 (%) | Batch GLUC-2025-003 (%) | Specification |
| :--- | :--- | :--- | :--- | :--- |
| **Day 0** | 99.2% | 99.1% | 99.3% | ≥ 95.0% |
| **Day 14** | 98.8% | 98.7% | 98.9% | ≥ 95.0% |
| **Day 30** | 97.4% | 97.2% | 97.5% | ≥ 95.0% |
| **Day 56 (Extrapolated)** | 94.1%* | 93.8%* | 94.2%* | *Fails Room Temp Spec* |

*\*Data confirms that at 30°C, the product remains stable for 30 days, but requires refrigeration for the 56-day duration.*

##### **6.2 Aggregation via SEC-HPLC (Size Exclusion Chromatography)**
Aggregation (dimers/multimers) can increase immunogenicity.

**Table 4: HMWP (High Molecular Weight Proteins) (%) Post-Opening**
| Timepoint | 2°C - 8°C (Day 56) | 25°C (Day 30) | 40°C (Day 1) |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0.4% | 0.8% | 1.2% |
| **GLUC-2025-002** | 0.5% | 0.7% | 1.1% |
| **Spec** | **≤ 1.0%** | **≤ 1.0%** | **≤ 2.0%** |

---

#### **7.0 Microbial Challenge and Preservative Efficacy**
Glucogen-XR is a multi-dose product containing **m-Cresol** as an antimicrobial preservative.

##### **7.1 Antimicrobial Effectiveness Testing (USP <51>)**
Testing was performed to ensure that the preservative remains effective after the primary seal is punctured multiple times (up to 4 doses per pen).

**Table 5: Log Reduction Values for GLUC-2025-001 (Post-Opening Day 56)**
| Organism | Initial Inoculum (CFU/mL) | Log Reduction (Day 14) | Log Reduction (Day 28) | Result |
| :--- | :--- | :--- | :--- | :--- |
| *S. aureus* | $1.2 \times 10^6$ | 4.2 | No Recovery | Pass |
| *P. aeruginosa* | $0.9 \times 10^6$ | 4.8 | No Recovery | Pass |
| *C. albicans* | $2.1 \times 10^5$ | 3.5 | 4.1 | Pass |

##### **7.2 Septum Integrity Analysis**
The rubber septum (FM257/0 gray chlorobutyl) was tested for "coring" and resealability.
*   **Procedure:** 10 simulated injections using 31G needles.
*   **Test:** Dye ingress test (Methylene Blue 0.1%).
*   **Result:** 0/50 pens showed dye ingress, confirming the "Instructions for Storage After Opening" (specifically the "Remove Needle" instruction) are sufficient to prevent environmental contamination.

---

#### **8.0 Statistical Analysis of Stability Trends**
Regression analysis was performed using the **Arrhenius Equation** to predict the degradation of Glucogen-XR under various user storage scenarios.

$$k = A e^{-\frac{E_a}{RT}}$$

Where:
*   $k$ = Rate constant for deamidation.
*   $E_a$ = Activation energy determined to be 85 kJ/mol.
*   $R$ = Universal gas constant.
*   $T$ = Temperature in Kelvin.

**Calculated Shelf-Life Post-Opening ($t_{90}$):**
*   At **5°C**: 112 Days (Safety factor of 2 applied to reach 56-day claim).
*   At **25°C**: 42 Days (Safety factor applied to reach 30-day claim).

---

#### **9.0 Summary Table of Storage Instructions for Labeling**

| State | Storage Condition | Maximum Time |
| :--- | :--- | :--- |
| **Unopened (Pre-use)** | Refrigerated (2°C–8°C) | Until Expiration Date |
| **Opened (In-use)** | Refrigerated (2°C–8°C) | **56 Days** |
| **Opened (In-use)** | Room Temp (up to 30°C) | **30 Days** |

**Final Warning:** Do not freeze. If Glucogen-XR (Batch GLUC-2025-XXX) is frozen, it must be discarded immediately due to the irreversible denaturation of the pegylated peptide structure.

---
**References:**
1. *Google Health Sciences Internal Report GHS-STAB-2025-401: Validation of Multi-dose Stability.*
2. *ICH Q5C: Stability Testing of Biotechnological/Biological Products.*
3. *USP <1207>: Package Integrity Evaluation - Sterile Products.*

---

# Shipping and Transport Stability

## Temperature Excursion Studies

### **3.2.S.7.3.5 Temperature Excursion Studies (Shipping and Transport Stability)**

---

#### **3.2.S.7.3.5.1 Introduction and Scope**
The stability of Glucogen-XR (glucapeptide extended-release), a high-molecular-weight GLP-1 receptor agonist produced in the GHS-CHO-001 cell line, is highly dependent upon the maintenance of strictly controlled thermal environments. Given the peptide’s propensity for secondary structure degradation, aggregation, and deamidation when exposed to temperatures outside the validated long-term storage condition of 5°C ± 3°C, Google Health Sciences (GHS) has conducted a comprehensive series of Temperature Excursion Studies (TES).

These studies aim to define the "Acceptable Excursion Envelope" during the global supply chain lifecycle, encompassing primary transport from the South San Francisco manufacturing site (3000 Innovation Drive) to secondary packaging facilities, and eventually to regional distribution hubs. This section details the impact of "Freeze-Thaw" cycles and "Heat Spike" excursions, simulating worst-case logistics scenarios (e.g., customs delays, refrigeration failure, and extreme ambient transit).

#### **3.2.S.7.3.5.2 Regulatory Framework and Compliance**
All studies were designed and executed in accordance with the following international standards:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1079>:** Good Storage and Shipping Practices.
*   **PDA Technical Report No. 39:** Guidance for Temperature-Controlled Medicinal Products.
*   **FDA Guidance for Industry:** Submission of Documentation in Applications for Parametric Release of Sterile Drug Products.

#### **3.2.S.7.3.5.3 Test Material and Batch Selection**
Three (3) primary GMP drug substance batches were utilized to ensure statistical significance ($n=3$) and to account for inter-batch variability. These batches represent the commercial-scale manufacturing process at the South San Francisco facility.

**Table 1: Batches Assigned to Temperature Excursion Studies**
| Batch Number | Scale | Date of Manufacture | Fill Volume (L) | Initial Purity (SEC-HPLC) | Initial Potency (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 50.0 L | 99.4% | 102.1% |
| **GLUC-2025-002** | 2000L | 28-JAN-2025 | 50.0 L | 99.2% | 99.8% |
| **GLUC-2025-003** | 2000L | 15-FEB-2025 | 50.0 L | 99.5% | 100.5% |

---

#### **3.2.S.7.3.5.4 Study Protocol: Excursion Parameters**
The "Stress Matrix" was designed to simulate two distinct logistics failure modes:
1.  **Scenario A (Cold Chain Failure - Heat):** Exposure to 25°C (Controlled Room Temperature) and 40°C (Accelerated Stress).
2.  **Scenario B (Sub-Zero Failure - Freeze):** Exposure to -20°C and -80°C to evaluate the impact of unintended freezing during air freight or storage.

**Table 2: Temperature Excursion Matrix (The "Stress Cycle")**
| Study ID | Condition | Duration | Cycles | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **TES-01** | 25°C ± 2°C / 60% RH | 72 Hours | 1 | Short-term loading dock exposure. |
| **TES-02** | 25°C ± 2°C / 60% RH | 14 Days | 1 | Extended customs delay/mechanical failure. |
| **TES-03** | 40°C ± 2°C / 75% RH | 24 Hours | 1 | Extreme heat excursion (Tarmac exposure). |
| **TES-04** | -20°C ± 5°C | 48 Hours | 3 | Repeated freeze-thaw during transport. |
| **TES-05** | Cycling (5°C to 25°C) | 12h @ 25°C / 12h @ 5°C | 5 | Diurnal temperature fluctuations. |

---

#### **3.2.S.7.3.5.5 Analytical Methodologies for Stability Assessment**
To detect subtle degradants, a Stability-Indicating Analytical Profile (SIAP) was employed.

*   **Size-Exclusion HPLC (SEC-HPLC):** Detection of high-molecular-weight species (HMWS) and aggregates.
    *   *System:* Waters ACQUITY UPLC H-Class.
    *   *Column:* BioResolve SEC nD, 200Å.
*   **Ion-Exchange Chromatography (CEX-HPLC):** Detection of charge variants (deamidation/oxidation).
    *   *Buffer A:* 20 mM MES, pH 6.0.
    *   *Buffer B:* 20 mM MES, 500 mM NaCl, pH 6.0.
*   **Reversed-Phase HPLC (RP-HPLC):** Purity and hydrophobic degradants.
*   **In-Vitro Bioassay (HEK293 GLP-1R Cell Line):** Measurement of cAMP induction (Potency).
*   **Micro-Flow Imaging (MFI):** Detection of sub-visible particles (2µm - 100µm).

---

#### **3.2.S.7.3.5.6 Experimental Results: Scenario A (Heat Excursions)**

Data indicates that Glucogen-XR is remarkably stable at 25°C for up to 72 hours, but shows significant degradation at 40°C.

**Table 3: Results for TES-01 (25°C for 72 Hours)**
| Batch | Timepoint | Purity (SEC) | HMWS (%) | Deamidation (CEX) | Potency (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | T=0 | 99.4% | 0.4% | 2.1% | 102% |
| | T=72h | 99.3% | 0.5% | 2.3% | 101% |
| **GLUC-2025-002** | T=0 | 99.2% | 0.5% | 2.4% | 100% |
| | T=72h | 99.1% | 0.6% | 2.7% | 99% |
| **GLUC-2025-003** | T=0 | 99.5% | 0.3% | 1.9% | 101% |
| | T=72h | 99.4% | 0.4% | 2.2% | 100% |

**Statistical Analysis of TES-01:**
The Mean Kinetic Temperature (MKT) was calculated using the Arrhenius equation:
$$k = Ae^{-Ea/RT}$$
Where $E_a$ for glucapeptide aggregation was determined to be 85 kJ/mol. The 72-hour excursion at 25°C consumes approximately 4.2% of the total shelf-life stability margin, based on the predictive modeling platform (GHS-Predict-v4.1).

---

#### **3.2.S.7.3.5.7 Experimental Results: Scenario B (Freeze-Thaw Cycling)**

Biologics are often sensitive to the ice-liquid interface. Glucogen-XR contains Polysorbate 80 (0.02% w/v) to mitigate this.

**Table 4: Results for TES-04 (Three Cycles of -20°C to 5°C)**
| Batch | Cycle Count | Sub-visible Particles (≥10µm) | HMWS (%) | Potency (%) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Pre-study | 120/mL | 0.4% | 102% |
| | Cycle 3 | 450/mL | 0.6% | 101% |
| **GLUC-2025-002** | Pre-study | 145/mL | 0.5% | 100% |
| | Cycle 3 | 510/mL | 0.7% | 98% |
| **GLUC-2025-003** | Pre-study | 98/mL | 0.3% | 101% |
| | Cycle 3 | 380/mL | 0.5% | 100% |

*Observation:* While sub-visible particles increased slightly, they remained well below the USP <788> limit of 6,000 per container. No significant loss in potency was observed during repeated freezing.

---

#### **3.2.S.7.3.5.8 Step-by-Step Shipping Qualification Protocol (SQP-GLUC-09)**

To ensure the validity of these excursion studies, GHS utilizes the following shipping qualification protocol for all Drug Substance transfers:

1.  **Passive Shipper Preparation:** Condition Credo Cube Series 4 (2-8°C) vacuum-insulated panels at 5°C for a minimum of 48 hours.
2.  **Sensor Placement:** Affix NIST-traceable TempTale Ultra dataloggers (Serial Range: GHS-LOG-99XXXX) to the interior side-wall and the geometric center of the product payload.
3.  **Loading:** Place 5x 10L polycarbonate carboys containing GLUC-2025-XXX into the shipper.
4.  **Transit Path:** SSF Plant $\rightarrow$ SFO Airport $\rightarrow$ FRA (Frankfurt) $\rightarrow$ Secondary Site.
5.  **Data Retrieval:** Upon arrival, the Quality Assurance (QA) team must download datalogger files via the Google Cloud Stability Portal.
6.  **Excursion Triage:** Any deviation exceeding 8°C for >4 hours or falling below 2°C for >2 hours triggers a "Level 2 Deviation Investigation" using the data provided in Section 3.2.S.7.3.5.6.

---

#### **3.2.S.7.3.5.9 Cumulative Impact and Mathematical Modeling**

To support flexible logistics, GHS employs a **Cumulative Stability Budget (CSB)**. Each excursion "spends" a portion of the product's 24-month shelf life.

**Formula for Remaining Shelf Life (RSL):**
$$RSL = SL_{initial} - \sum (t_i \cdot AF_i)$$
Where:
*   $t_i$ = duration of excursion $i$.
*   $AF_i$ = Acceleration Factor at temperature $T_i$ (calculated via $Q_{10}$ factor of 3.5 for this peptide).

**Table 5: Calculated Acceleration Factors for Glucogen-XR**
| Temperature (°C) | Acceleration Factor (AF) vs. 5°C | Max Allowable Cumulative Time |
| :--- | :--- | :--- |
| 15°C | 3.5 | 336 Hours (14 Days) |
| 25°C | 12.25 | 168 Hours (7 Days) |
| 40°C | 52.5 | 24 Hours |

---

#### **3.2.S.7.3.5.10 Conclusion of Excursion Studies**
Based on the data generated from batches **GLUC-2025-001/002/003**, the Glucogen-XR drug substance is stable under the following excursion conditions:
1.  Up to **14 days at 25°C** (providing flexibility for global shipping delays).
2.  Up to **24 hours at 40°C** (mitigating risk of tarmac heat exposure).
3.  Up to **3 freeze-thaw cycles** to -20°C (ensuring stability in the event of refrigeration malfunction).

The data support the conclusion that the proposed transport configurations and the use of the Credo Cube thermal packaging system are sufficient to maintain the Critical Quality Attributes (CQAs) of Glucogen-XR throughout the commercial supply chain. Any excursion within the "Acceptable Excursion Envelope" (7 days at 25°C) does not require additional stability testing prior to batch release for clinical or commercial use.

---

## Simulated Shipping Conditions

### **3.2.S.7.3.4.1. Simulated Shipping Conditions (Glucogen-XR Drug Substance)**

---

#### **1.0 Introduction and Scope**
The purpose of this subsection is to detail the comprehensive qualification of the transport and logistics chain for Glucogen-XR (glucapeptide extended-release) Drug Substance (DS). Given the high-molecular-weight peptide structure and the specific formulation requirements of Glucogen-XR, maintaining a narrow temperature range ($2^{\circ}\text{C}$ to $8^{\circ}\text{C}$) and minimizing mechanical stress (vibration and agitation) is critical to preventing aggregation, deamidation, and oxidation.

The shipping validation strategy follows a "Matrix Design" approach, simulating worst-case environmental stressors including extreme ambient temperatures, pressure differentials (air transport), and mechanical shock. This protocol adheres to **ICH Q1A(R2)**, **ICH Q5C**, and **USP <1079>** (Good Storage and Shipping Practices).

---

#### **2.0 Regulatory Framework and Compliance Standards**
The simulated shipping studies were designed in accordance with the following regulatory and technical standards:
*   **FDA Guidance for Industry:** *Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.*
*   **USP <1079>:** *Risks and Mitigation Strategies for the Storage and Transportation of Finished Drug Products.*
*   **USP <1207>:** *Package Integrity Evaluation – Sterile Products.*
*   **ASTM D4169-22:** *Standard Practice for Performance Testing of Shipping Containers and Systems.*
*   **IATA Perishable Cargo Regulations (PCR):** *Chapter 17 (Air Transport of Temperature-Sensitive Healthcare Products).*

---

#### **3.0 Test Material and Batch Identification**
Three primary validation batches of Glucogen-XR DS, manufactured at the South San Francisco (3000 Innovation Drive) facility using the GHS-CHO-001 cell line, were utilized for these studies.

**Table 1: Batch Identification for Shipping Simulation Studies**
| Batch Number | Scale | Date of Manufacture | Container Closure System | Fill Volume |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L (Single-use) | 12-JAN-2025 | 10L Sartorius Celsius® FFT Bag | 8.5 L |
| **GLUC-2025-002** | 2000L (Single-use) | 02-FEB-2025 | 10L Sartorius Celsius® FFT Bag | 8.5 L |
| **GLUC-2025-003** | 2000L (Single-use) | 18-MAR-2025 | 10L Sartorius Celsius® FFT Bag | 8.5 L |

---

#### **4.0 Simulation Protocol: Thermal Stress (ISTA 7E Profile)**
The simulation utilized a controlled environmental chamber (Equipment ID: GHS-CHAMB-094) to subject the primary packaging to a 144-hour "Extreme Summer" and "Extreme Winter" profile.

##### **4.1 Thermal Profile Parameters**
The "Summer Profile" simulates a cross-continental transit involving exposure to high-heat tarmac conditions.

**Table 2: 144-Hour Summer Simulation Cycle (ISTA 7E High-Heat Profile)**
| Phase | Duration (Hours) | Set Point Temp (°C) | Relative Humidity (%) | Simulation Step |
| :--- | :--- | :--- | :--- | :--- |
| T1 | 0.0 - 6.0 | $35 \pm 2.0$ | $60 \pm 5$ | Initial Loading/Warehouse Transit |
| T2 | 6.0 - 18.0 | $40 \pm 2.0$ | $60 \pm 5$ | Tarmac Exposure (Origin) |
| T3 | 18.0 - 32.0 | $22 \pm 2.0$ | $50 \pm 5$ | In-Flight (Cargo Hold) |
| T4 | 32.0 - 48.0 | $45 \pm 2.0$ | $60 \pm 5$ | Tarmac Exposure (Transit Hub) |
| T5 | 48.0 - 72.0 | $25 \pm 2.0$ | $50 \pm 5$ | Warehouse Sorting |
| T6 | 72.0 - 144.0 | $30 \pm 2.0$ | $55 \pm 5$ | Final Mile Delivery/Wait Time |

---

#### **5.0 Simulation Protocol: Mechanical Stress (ASTM D4169)**
To simulate the physical hazards of transport (vibration, shock, and drops), the secondary shipping containers (VIP Insulated Shippers) containing Glucogen-XR DS bags were subjected to mechanical stress sequences.

##### **5.1 Vibration Simulation (Random Vibration)**
Vibration testing was performed using a Lansmont® Vibration Table (ID: GHS-VIB-02) following **ASTM D4169, Schedule D**, Air and Motor Freight (Level II).

*   **Frequency Range:** 1 Hz to 200 Hz.
*   **Duration:** 180 minutes (simulating 3,000 miles of air/road transport).
*   **Orientation:** Vertical, Side-to-Side, and Front-to-Back.

##### **5.2 Drop and Impact Testing**
The shippers were subjected to a series of drops from a height of 30 inches (76 cm) onto a concrete surface.
1.  **Bottom Face Drop**
2.  **Top Face Drop**
3.  **Edge Drop (Critical Edge)**
4.  **Corner Drop (Critical Corner)**

---

#### **6.0 Analytical Evaluation and Acceptance Criteria**
Post-simulation samples were drawn from three locations within the DS bag (Top, Middle, Bottom) to assess homogeneity and potential degradation.

**Table 3: Acceptance Criteria for Post-Shipping Simulation**
| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Purity (Monomer)** | SE-HPLC (USP <129>) | $\ge 98.0\%$ |
| **Purity (Related Substances)** | RP-HPLC | $\le 2.0\%$ Total Impurities |
| **Potency (Biological)** | Cell-based Bioassay | $80\% - 125\%$ of Reference Standard |
| **Visible Particulates** | Ph. Eur. 2.9.20 | Practically clear; free of particles |
| **Sub-visible Particulates** | HIAC (USP <788>) | $\ge 10 \mu m: \le 6000$ per container |
| **Aggregation State** | Dynamic Light Scattering | No detectable shift in Z-average diameter |
| **pH** | Potentiometric | $6.5 \pm 0.3$ |

---

#### **7.0 Experimental Results: Thermal and Mechanical Stress**

The following data represents the cumulative results for Batch **GLUC-2025-001** after completion of the 144-hour thermal cycle and the ASTM D4169 mechanical sequence.

**Table 4: Analytical Data Summary - Post-Simulated Shipping (GLUC-2025-001)**
| Time Point | Purity (SE-HPLC) | Purity (RP-HPLC) | Bioassay (%) | Sub-visible ($\ge 10 \mu m$) |
| :--- | :--- | :--- | :--- | :--- |
| **Pre-Simulation** | 99.4% | 0.45% | 102% | 142 |
| **Post-Thermal (Summer)** | 99.2% | 0.58% | 99% | 210 |
| **Post-Mechanical Stress** | 99.1% | 0.62% | 98% | 485 |
| **Combined Stress** | **99.0%** | **0.68%** | **97%** | **520** |

**Statistical Analysis (ANOVA):**
A One-Way ANOVA was performed comparing pre-simulation and post-simulation purity values.
*   **F-Stat:** 1.24 ($p = 0.31$)
*   **Conclusion:** No statistically significant degradation was observed under the simulated worst-case shipping conditions ($p > 0.05$).

---

#### **8.0 Container Closure Integrity (CCI) Post-Shipping**
Helium Leak Detection (USP <1207.2>) was performed on the DS bags after the mechanical drop sequence to ensure no breaches occurred at the weld points or port interfaces.

**Table 5: CCI Testing Post-Mechanical Stress**
| Container ID | Batch Reference | Helium Leak Rate (std.cc/sec) | Result |
| :--- | :--- | :--- | :--- |
| CCS-001 | GLUC-2025-001 | $2.1 \times 10^{-9}$ | PASS |
| CCS-002 | GLUC-2025-002 | $1.8 \times 10^{-9}$ | PASS |
| CCS-003 | GLUC-2025-003 | $2.4 \times 10^{-9}$ | PASS |
| **Limit** | -- | **$< 1.0 \times 10^{-7}$** | -- |

---

#### **9.0 Risk Assessment and Mitigation (FMEA)**
A Failure Mode and Effects Analysis (FMEA) was conducted based on the simulated shipping data.

*   **Risk:** Temperature excursion above $8^{\circ}\text{C}$ during tarmac wait.
    *   **Mitigation:** Implementation of the **Google Cloud Smart-Track™** IoT sensors on every DS shipment, providing real-time GPS and thermal alerts to the South San Francisco Logistics Command Center.
*   **Risk:** Bag rupture due to high-altitude pressure changes.
    *   **Mitigation:** Validation of the 10L Sartorius bags at 0.5 bar (simulated 30,000 ft altitude) confirmed the integrity of the secondary "over-pouching" system.

---

#### **10.0 Conclusion**
The simulated shipping studies for Glucogen-XR Drug Substance demonstrate that the product is robust and remains within all quality specifications when subjected to extreme environmental and mechanical conditions. The data supports a transport window of up to 144 hours using the qualified VIP shippers, maintaining a temperature range of $2-8^{\circ}\text{C}$ even during extreme summer ambient conditions.

---

**End of Subsection 3.2.S.7.3.4.1**

---

## Qualification of Packaging

### **3.2.S.7.3.4 Qualification of Packaging Systems for Shipping and Transport**

---

#### **1.0 Introduction and Scope**

This subsection details the qualification of the primary and secondary packaging systems utilized for the transport of **Glucogen-XR (glucapeptide extended-release)** drug substance (DS) and intermediate bulk. Given the high molecular weight and susceptibility of the glucapeptide sequence to shear-induced aggregation and thermal degradation, the packaging qualification follows a risk-based approach aligned with **ICH Q5C**, **ICH Q1A(R2)**, and **USP <1079>** (Good Storage and Distribution Practices for Drug Products).

Google Health Sciences (GHS) has implemented a "Quality by Design" (QbD) framework to ensure that the transport container closure system (CCS) maintains the Critical Quality Attributes (CQAs) of Glucogen-XR across the global supply chain, specifically targeting the 3000 Innovation Drive facility to global Fill-Finish sites.

#### **2.0 Regulatory Framework and Standards**

The qualification protocols described herein are compliant with the following regulatory and industry standards:
*   **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics* (May 1999).
*   **USP <1207>:** *Package Integrity Evaluation—Sterile Products*.
*   **USP <661.1> and <661.2>:** *Plastic Materials of Construction / Plastic Packaging Systems for Pharmaceutical Use*.
*   **ISTA 3C / 7D:** *Standardized Testing for Thermal Transport and Shock/Vibration*.
*   **ISO 11607:** *Packaging for Terminally Sterilized Medical Devices*.
*   **ICH Q1B:** *Photostability Testing of New Drug Substances and Products*.

---

#### **3.0 Packaging System Description**

The Glucogen-XR DS is packaged in a multi-layered system designed to mitigate risks of gas ingress (O₂/CO₂), moisture loss, and protein adsorption.

| Component Layer | Material Specification | Manufacturer / Grade | Technical Function |
| :--- | :--- | :--- | :--- |
| **Primary Container** | High-Density Polyethylene (HDPE) Bioprocess Bottle (2L/10L) | GHS-PPS-091 (USP Class VI) | Direct contact; Low protein binding; Leachables/Extractables (L&E) validated. |
| **Primary Closure** | Polypropylene (PP) Screw Cap with Platinum-Cured Silicone Liner | GHS-PPS-092 | Hermetic seal; Torque-validated (35 in-lbs). |
| **Secondary Layer** | Laminated Aluminum Foil Pouch | GHS-PPS-441 | Light barrier (ICH Q1B); Moisture Vapor Transmission Rate (MVTR) <0.01g/m²/day. |
| **Tertiary Packaging** | Expanded Polystyrene (EPS) Insulated Shipper | GHS-PPS-882 (Model: ThermoSafe X90) | Thermal insulation; Maintain 2°C to 8°C. |
| **Outer Shipper** | Double-Wall Corrugated Fiberboard | GHS-PPS-990 | Mechanical protection; ISTA 3C compliant. |

---

#### **4.0 Qualification Protocol: Mechanical Integrity and Vibration Analysis**

To simulate the rigors of air and ground transport, three representative batches of Glucogen-XR (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) were subjected to standardized stress tests.

##### **4.1 Protocol STP-DS-TRAN-2025: Vibration and Shock Simulation**
1.  **Preparation:** Fill 2L HDPE bottles with Glucogen-XR DS at nominal concentration (50 mg/mL).
2.  **Mounting:** Secure bottles in tertiary packaging using validated dunnage.
3.  **Vibration Profile (Random):** Execute per **ASTM D4169-22**, Assurance Level I (High Intensity).
    *   *Frequency Range:* 1 to 200 Hz.
    *   *Duration:* 180 minutes per axis (X, Y, Z).
    *   *Total Grms:* 0.73.
4.  **Drop Test:** Perform 10 drops from a height of 36 inches on all faces, edges, and corners.
5.  **Assessment:** Inspect for physical leaks and perform Size Exclusion Chromatography (SEC-HPLC) to detect shear-induced aggregates.

##### **4.2 Results: Mechanical Stress Analysis**

| Batch Number | Pre-Test Purity (SEC %) | Post-Test Purity (SEC %) | Δ Purity (%) | Visual Inspection | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 99.42 | 99.40 | -0.02 | No leaks/cracks | **Pass** |
| **GLUC-2025-002** | 99.38 | 99.35 | -0.03 | No leaks/cracks | **Pass** |
| **GLUC-2025-003** | 99.45 | 99.45 | 0.00 | No leaks/cracks | **Pass** |

*Note: Acceptance Criteria: Δ Purity < 0.5%; No visible particulates per USP <790>.*

---

#### **5.0 Thermal Performance Qualification (TPQ)**

The most critical factor for Glucogen-XR stability during transport is the maintenance of the cold chain (2°C to 8°C). Google Health Sciences utilizes a "Summer Profile" and "Winter Profile" to simulate extreme ambient conditions during transit.

##### **5.1 Thermal Mapping Protocol**
*   **Sensor Placement:** 12 calibrated NIST-traceable thermocouples placed at "worst-case" locations (corners, top surface, directly adjacent to gel packs).
*   **Loading Pattern:** Full load (8 x 2L bottles) and Minimum load (1 x 2L bottle).
*   **Equipment:** Environmental Chamber (Model: GHS-ENV-09).

##### **5.2 Thermal Profiles (ISTA 7D - 72 Hour Duration)**

| Time Interval (Hrs) | Summer Ambient Target (°C) | Winter Ambient Target (°C) |
| :--- | :--- | :--- |
| 0 - 6 | 35 | -10 |
| 6 - 18 | 25 | 0 |
| 18 - 30 | 45 | -15 |
| 30 - 48 | 30 | 5 |
| 48 - 72 | 22 | 10 |

##### **5.3 Table: Results of Thermal Qualification (Batch GLUC-2025-004)**

| Sensor Location | Max Temp (°C) - Summer | Min Temp (°C) - Winter | Mean Kinetic Temp (MKT) | Compliance |
| :--- | :--- | :--- | :--- | :--- |
| Center Bulk | 6.2 | 3.4 | 4.8 | **Yes** |
| Top Corner (Air) | 7.8 | 2.2 | 5.1 | **Yes** |
| Bottom Face | 5.5 | 2.5 | 4.1 | **Yes** |
| Adjacent to PCM | 4.8 | 2.1 | 3.5 | **Yes** |

---

#### **6.0 Container Closure Integrity Testing (CCIT)**

Following transport simulation, CCIT was performed to confirm the microbial barrier properties of the HDPE bottles. GHS utilizes **High Voltage Leak Detection (HVLD)** as a non-destructive method (USP <1207.2>).

##### **6.1 HVLD Parameters**
*   **Electrode Gap:** 2.5 mm.
*   **Sensitivity:** Capable of detecting 5 μm micro-leaks.
*   **Scanning Speed:** 100 mm/sec.

##### **6.2 CCIT Validation Data**

| Sample Group | Number of Units | HVLD Signal (Avg) | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Positive Control** (5μm hole) | 5 | 850 mV | Fail (Detected) |
| **Negative Control** (Intact) | 10 | 120 mV | Pass |
| **Transported GLUC-2025-005** | 24 | 122 mV | **Pass** |
| **Transported GLUC-2025-006** | 24 | 119 mV | **Pass** |

---

#### **7.0 Extractables and Leachables (E&L) Assessment**

A comprehensive E&L study was conducted for the HDPE primary container system. The study utilized three solvent systems (pH 4.0, pH 9.0, and 50% Ethanol) to simulate the Glucogen-XR formulation (pH 7.4).

##### **7.1 Analytical Methodology**
*   **Volatiles:** Headspace GC-MS.
*   **Semi-volatiles:** GC-MS (Direct Injection).
*   **Non-volatiles:** LC-HRMS (Orbitrap).
*   **Elements:** ICP-MS.

##### **7.2 Summary of Identified Leachables**

| Compound | Source | Concentration (μg/mL) | Analytical Evaluation Threshold (AET) | Safety Margin |
| :--- | :--- | :--- | :--- | :--- |
| Irganox 1010 | Antioxidant | 0.045 | 0.150 | >3x |
| Stearic Acid | Lubricant | 0.120 | 0.500 | >4x |
| Aluminum (Al) | Pouch Trace | < 0.005 | 0.050 | >10x |

*Calculations for AET:*
$$AET = \frac{SCT \cdot n}{d \cdot m}$$
Where:
$SCT$ = Safety Concern Threshold (0.15 μg/day)
$n$ = Number of containers (1)
$d$ = Daily dose (0.5 mL)
$m$ = Uncertainty Factor (3)

---

#### **8.0 Conclusion on Packaging Qualification**

The qualification data for Glucogen-XR packaging systems demonstrate that:
1.  The primary HDPE container maintains physicochemical and biological stability of the glucapeptide during 72-hour "worst-case" transport.
2.  The thermal insulation system effectively buffers against external excursions between -15°C and 45°C.
3.  The CCIT results confirm the maintenance of sterility and prevention of gas exchange.
4.  The E&L profile is well within the safety margins defined by the Safety Concern Threshold (SCT).

**Cross-References:**
*   For detailed chemical stability data post-transport, see *Section 3.2.S.7.3.1 - Stability Summary and Conclusions*.
*   For Raw Material Certificates of Analysis (CoA) for packaging components, see *Section 3.2.P.7*.

---

# Photostability Testing

## ICH Q1B Option 1 and 2 Studies

### 3.2.S.7.3 Stability Data [Glucogen-XR (glucapeptide extended-release)]
#### 3.2.S.7.3.4 Photostability Testing: ICH Q1B Option 1 and Option 2 Studies

---

**Proprietary Name:** Glucogen-XR  
**Non-Proprietary Name:** Glucapeptide Extended-Release (GHS-014)  
**Manufacturer:** Google Health Sciences (GHS), 3000 Innovation Drive, South San Francisco, CA  
**Regulatory Standard:** ICH Q1B "Stability Testing: Photostability Testing of New Drug Substances and Products"  
**Scope:** Evaluation of the intrinsic photostability of Glucogen-XR drug substance (DS) under standardized artificial light sources.

---

### 1.0 Executive Summary
In accordance with ICH Q1B guidelines, Google Health Sciences has conducted a comprehensive photostability assessment of Glucogen-XR (GHS-014), a GLP-1 receptor agonist peptide produced via the GHS-CHO-001 cell line. Testing was performed using a two-tiered approach: **Option 1 (Artificial Daylight)** for broad-spectrum evaluation and **Option 2 (Specific Lamp Types)** for targeted UV and Visible light stress. 

Studies were conducted on three primary registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003). Results indicate that Glucogen-XR is "Photostable" in its primary container closure system but exhibits "Photosensitivity" when exposed in the unprotected state (forced degradation), primarily characterized by the oxidation of Tryptophan (Trp) and Methionine (Met) residues.

---

### 2.0 Study Design and Methodology

#### 2.1 Sample Selection and Batch Identification
Three representative batches of Glucogen-XR Drug Substance were utilized for this study. These batches were manufactured at the Google Health Sciences South San Francisco facility (FEI: 300451298) using the 2,000L Bioreactor Scale-up process.

**Table 1: Identification of Glucogen-XR Batches for Photostability Testing**
| Batch Number | Scale | Date of Manufacture | Purity (HPLC % Area) | Water Content (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 2,000 L | 12-JAN-2025 | 99.42% | 3.2% |
| GLUC-2025-002 | 2,000 L | 28-JAN-2025 | 99.38% | 3.1% |
| GLUC-2025-003 | 2,000 L | 10-FEB-2025 | 99.45% | 3.3% |

#### 2.2 Light Source Specifications (ICH Q1B Options)
The study utilized a calibrated Atlas Suntest CPS+ Xenon Test Chamber (ID: GHS-EQ-STB-098) for Option 1 and a Sylvania Cool White Fluorescent/Near-UV system for Option 2.

**2.2.1 Option 1: Artificial Daylight**
*   **Lamp Type:** Xenon Arc Lamp with IR-suppression filters and glass filters to simulate daylight (D65/ID65 standard).
*   **Spectral Range:** 320 nm to 800 nm.
*   **Emission Standard:** ISO 10977 (1993).

**2.2.2 Option 2: Targeted Dual-Lamp System**
*   **Visible Light:** A cool white fluorescent lamp designed to produce an output similar to that specified in ISO 10977.
*   **Near-UV:** A near-UV fluorescent lamp with a spectral distribution from 320 nm to 400 nm, with maximum energy emission between 350 nm and 370 nm.

---

### 3.0 Detailed Protocol and Exposure Parameters

#### 3.1 Exposure Targets and Calculations
Per ICH Q1B, the samples were exposed to provide a total illumination of not less than **1.2 million lux-hours** and an integrated near-ultraviolet energy of not less than **200 watt-hours/square meter (W·h/m²)**.

**Formula for Total Exposure (E):**
$$E = I \times t$$
Where:
*   $E$ = Total exposure (Lux-hr or $W \cdot h/m^2$)
*   $I$ = Irradiance ($Lux$ or $W/m^2$)
*   $t$ = Time in hours

**Table 2: Calculated Exposure Durations (Option 2 Setup)**
| Light Type | Measured Irradiance (Average) | Required Exposure | Calculated Minimum Time |
| :--- | :--- | :--- | :--- |
| Visible (White) | 6,500 Lux | 1,200,000 Lux-hr | 184.6 Hours |
| Near-UV (365nm) | 1.85 $W/m^2$ | 200 $W \cdot h/m^2$ | 108.1 Hours |

#### 3.2 Sample Preparation and Presentation
Samples were presented in three distinct states to evaluate the degree of protection required:
1.  **Direct Exposure (Unprotected):** Glucogen-XR powder spread in a 2mm layer in a chemically inert transparent quartz dish.
2.  **Primary Packaging:** Glucogen-XR in Type I Borosilicate glass vials (USP <660>).
3.  **Dark Control:** Identical samples wrapped in multiple layers of aluminum foil and stored in the same chamber to monitor thermal degradation independent of light.

---

### 4.0 Analytical Methods and Acceptance Criteria

The samples were analyzed using the validated Stability Indicating Methods (SIMs) detailed in Module 3.2.S.4.

*   **RP-HPLC (Purity):** Detection of deamidation, oxidation, and peptide cleavage.
*   **SEC-HPLC (Aggregation):** Detection of covalent and non-covalent dimers and high molecular weight species (HMWS).
*   **LC-MS/MS:** Identification of specific photo-oxidation sites (Tryptophan-C3 and Methionine-Sulfoxide).
*   **Appearance:** Visual inspection for color change (Yellowness Index per ASTM E313).

**Table 3: Stability Acceptance Criteria**
| Test Parameter | Acceptance Criteria |
| :--- | :--- |
| **Appearance** | White to off-white lyophilized powder; no significant color change. |
| **Purity (RP-HPLC)** | $\ge 98.0\%$ |
| **Total Impurities** | $\le 2.0\%$ |
| **Aggregates (SEC)** | $\le 0.5\%$ |
| **Potency (Bioassay)** | 80% - 125% of Reference Standard |

---

### 5.0 Results: Option 1 Study (Xenon Arc - Artificial Daylight)

The Option 1 study was conducted over a period of 144 hours using the Xenon Arc system.

**Table 4: Summary of Results for Batch GLUC-2025-001 (Option 1)**
| Sample State | Condition | Total Purity (%) | Total Aggregates (%) | Oxidation (%) | Appearance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Initial** | T=0 | 99.42 | 0.08 | 0.12 | White |
| **Unprotected** | 1.2M Lux-hr | 96.15 | 1.45 | 2.10 | Slight Yellowing |
| **In-Vial** | 1.2M Lux-hr | 99.31 | 0.11 | 0.18 | White |
| **Dark Control** | Wrapped | 99.40 | 0.09 | 0.13 | White |

**Technical Observation 5.1:** The unprotected drug substance showed a significant increase in oxidation (from 0.12% to 2.10%). Mass spectrometry confirmed the formation of **+16 Da (Oxidation)** and **+32 Da (Dioxidation)** species at the $Trp^{25}$ and $Met^{8}$ residues.

---

### 6.0 Results: Option 2 Study (Fluorescent/Near-UV)

The Option 2 study was conducted on all three registration batches.

**Table 5: Comprehensive Data for Option 2 Studies (All Batches)**
| Batch ID | State | UV Exp ($Wh/m^2$) | Vis Exp ($Lux-hr$) | Purity (%) | HMWS (%) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Unprotected | 204.5 | 1.22M | 95.88 | 1.55 | Fail |
| | In-Vial | 204.5 | 1.22M | 99.28 | 0.14 | Pass |
| **GLUC-2025-002** | Unprotected | 205.1 | 1.24M | 95.72 | 1.62 | Fail |
| | In-Vial | 205.1 | 1.24M | 99.25 | 0.18 | Pass |
| **GLUC-2025-003** | Unprotected | 203.9 | 1.21M | 95.95 | 1.48 | Fail |
| | In-Vial | 203.9 | 1.21M | 99.32 | 0.12 | Pass |

---

### 7.0 Statistical Analysis of Photo-Degradation Kinetics

Regression analysis of the degradation rate ($k$) under Option 2 conditions indicates a pseudo-first-order kinetic model for the loss of Glucogen-XR purity when unprotected.

$$ln([A]_t / [A]_0) = -kt$$

Where:
*   $k_{unprotected} = 2.45 \times 10^{-4} hr^{-1}$
*   $k_{dark\_control} = 1.08 \times 10^{-6} hr^{-1}$

The calculated **Photosensitivity Factor (PF)**, defined as the ratio of degradation in light vs. dark, is **226.8**, confirming that Glucogen-XR is highly photolabile in the solid state when not shielded by secondary or tertiary packaging.

---

### 8.0 Site-Specific Photo-Oxidation Mapping (LC-MS/MS)

To understand the mechanism of degradation, samples from Batch GLUC-2025-001 (Unprotected, Option 2) were subjected to tryptic digestion and LC-MS/MS analysis.

**Table 6: Peptide Mapping of Photo-Degradants**
| Peptide Fragment | Sequence Position | Modification | % Abundance (Light) | % Abundance (Dark) |
| :--- | :--- | :--- | :--- | :--- |
| T1-T2 | 1-12 | Met(8)-Oxidation | 0.85% | 0.04% |
| T4 | 20-30 | Trp(25)-Oxidation | 1.12% | 0.02% |
| T4 | 20-30 | Trp(25)-Kynurenine | 0.44% | <LOD |

**Conclusion on Mechanism:** The primary photo-degradation pathway is the formation of singlet oxygen ($^1O_2$) sensitized by the Tryptophan residue, leading to the formation of Kynurenine derivatives and cross-linked aggregates.

---

### 9.0 Protective Measures and Final Assessment

Based on the ICH Q1B Option 1 and 2 studies, the following conclusions are reached:

1.  **Drug Substance:** Glucogen-XR DS is **light-sensitive**. It requires storage in containers that exclude light.
2.  **Packaging Requirement:** The primary container closure (Type I Amber Glass or Clear Glass with secondary aluminum pouching) provides sufficient protection to maintain the quality attributes within the specifications.
3.  **Labeling:** Labels must include "Store in original container" and "Protect from light."

#### 9.1 Confirmation Study (Step 4 of ICH Q1B)
A confirmatory study was performed using the final marketing secondary packaging (cardboard carton). After 1.2M Lux-hr exposure, no measurable change in purity or appearance was observed in the carton-protected samples (Purity: 99.41% vs. Initial 99.42%).

---

### 10.0 References
1.  **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
2.  **USP <1049>:** Review of Quality Attributes of Biological Products.
3.  **GHS-SOP-6672:** Procedure for Operating Atlas Suntest CPS+ Chambers.
4.  **Google Health Sciences Technical Report GHS-TR-2025-44:** "Molecular Mapping of Photo-Oxidation in Glucapeptides."

---
**Document End**
**Approver:** *Dr. Elizabeth Sterling, Head of Regulatory Affairs, Google Health Sciences*
**Date:** *24-MAR-2025*

---

## Effect of Light on CQAs

# MODULE 3: QUALITY (3.2.S DRUG SUBSTANCE)
## SECTION 3.2.S.7 STABILITY
### SUBSECTION 3.2.S.7.3 PHOTOSTABILITY TESTING

---

#### 3.2.S.7.3.1 Effect of Light on Critical Quality Attributes (CQAs)

**1.0 Executive Summary of Photostability Impact**
This subsection provides an exhaustive characterization of the sensitivity of Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist, to electromagnetic radiation within the ultraviolet (UV) and visible spectrums. Google Health Sciences (GHS) has conducted these studies in strict accordance with ICH Q1B *Stability Testing: Photostability Testing of New Drug Substances and Products*. 

As a therapeutic peptide produced via a proprietary CHO-K1 GS knockout derivative (GHS-CHO-001), Glucogen-XR contains specific amino acid residues—primarily Tryptophan (Trp), Tyrosine (Tyr), and Histidine (His)—that are intrinsically susceptible to photo-oxidation and subsequent radical-mediated degradation. The extended-release profile is achieved through a specific PEGylated-micellar conjugation which itself exhibits unique photo-reactivity. This section details the degradation pathways, the resultant impurities (Light-Induced Degradants, LIDs), and the protective measures integrated into the Primary Packaging Component (PPC).

**2.0 Regulatory Framework and Compliance Standards**
The studies described herein were performed under Full Current Good Manufacturing Practices (cGMP) and adhere to the following regulatory guidances:
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **ICH Q3A(R2):** Impurities in New Drug Substances.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **USP <1044>:** Measurement of Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **USP <800>:** Handling in Healthcare Settings (where applicable for hazardous assessment).

**3.0 Experimental Design and Exposure Criteria**
Studies were conducted using a Sylvania Environmental Chamber (Model GHS-PHOTO-9000) equipped with calibrated cool white fluorescent lamps and near-UV fluorescent lamps.

| Exposure Parameter | ICH Q1B Minimum Requirement | Google Health Sciences Target |
| :--- | :--- | :--- |
| **Visible Light Exposure** | ≥ 1.2 million lux-hours | 1.8 million lux-hours |
| **Integrated Near-UV Energy** | ≥ 200 watt-hours/m² | 350 watt-hours/m² |
| **Temperature Control** | 25°C ± 2°C | 25°C ± 0.5°C |
| **Relative Humidity** | Not Specified | 60% RH ± 5% |

**4.0 Test Materials: Representative Batches**
The following batches of Glucogen-XR Drug Substance (DS) were utilized for the photostability assessment. All batches were manufactured at the 3000 Innovation Drive, South San Francisco facility.

| Batch Number | Scale | Date of Manufacture | Purity (RP-HPLC) | State |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 99.4% | Lyophilized Cake |
| **GLUC-2025-002** | 2000L | 04-FEB-2025 | 99.2% | Liquid Concentrate |
| **GLUC-2025-003** | 2000L | 15-FEB-2025 | 99.5% | Lyophilized Cake |

---

### 5.0 Effect of Light on Specific Critical Quality Attributes (CQAs)

#### 5.1 CQA: Primary Sequence Integrity and Peptide Mapping
The primary sequence of Glucogen-XR is susceptible to site-specific cleavage upon UV exposure, particularly at the Asp-Gly hinge region.

**5.1.1 Protocol for Photo-Induced Peptide Mapping**
1. **Enzymatic Digestion:** Samples from Batch GLUC-2025-001 (Exposed vs. Dark Control) were reduced with 10 mM DTT, alkylated with 50 mM Iodoacetamide, and digested with Trypsin/Lys-C at a 1:20 ratio.
2. **LC-MS/MS Analysis:** Use of a Thermo Scientific Orbitrap Exploris 480. Mobile Phase A: 0.1% FA in H2O; Mobile Phase B: 0.1% FA in ACN.
3. **Identification:** Fragmentation patterns were analyzed using BioPharma Finder™ 4.1.

**5.1.2 Results: Table of Light-Induced Fragments**
| Fragment ID | Sequence Position | Observed Mass (Da) | Change from Control (%) | Significance |
| :--- | :--- | :--- | :--- | :--- |
| **LID-F1** | 1-14 (N-terminal) | 1542.76 | +4.2% | Oxidation of Trp8 |
| **LID-F2** | 15-28 (Mid-region) | 1621.88 | +0.8% | Deamidation at Asn22 |
| **LID-F3** | 29-37 (C-terminal) | 1088.54 | +1.5% | Tyrosine dimer formation |

#### 5.2 CQA: Purity and Impurity Profile (RP-HPLC)
Photolytic degradation typically manifests as an increase in "Late Eluting Peaks" (hydrophobic aggregates) and "Early Eluting Peaks" (truncated fragments/deamidated species).

**Table 5.2-A: Comparative Purity Analysis (Batch GLUC-2025-002)**
*Conditions: 1.8 million lux-hours, 350 Wh/m²*

| Attribute | Initial (T=0) | Dark Control (T=Final) | Exposed (Unprotected) | Exposed (Amber Glass) |
| :--- | :--- | :--- | :--- | :--- |
| **Main Peak (%)** | 99.21 | 99.18 | 84.12 | 98.95 |
| **Total Impurities (%)** | 0.79 | 0.82 | 15.88 | 1.05 |
| **RRT 0.85 (Deamidation)**| 0.12 | 0.15 | 3.45 | 0.22 |
| **RRT 1.22 (Photo-Ox)** | 0.05 | 0.06 | 8.92 | 0.14 |

**Statistical Analysis of Degradation Rate:**
The rate of degradation ($k_{photo}$) was calculated using a first-order kinetic model:
$$ln(C/C_0) = -k \cdot t$$
Where $C$ is the main peak area. For unprotected Glucogen-XR, $k_{photo}$ was determined to be $1.2 \times 10^{-2} \text{ lux-hr}^{-1}$.

#### 5.3 CQA: High Molecular Weight Species (HMWS) via SE-HPLC
Exposure to UV light catalyzes the formation of covalent cross-links through dityrosine bridges and disulfide scrambling.

**5.3.1 SEC Protocol (USP <129> Modified)**
*   **Column:** TSKgel G3000SWxl, 7.8 mm x 30 cm.
*   **Mobile Phase:** 0.2M Sodium Phosphate, pH 6.8.
*   **Flow Rate:** 0.5 mL/min.
*   **Detection:** UV 214 nm and Fluorescence (Ex: 280 nm, Em: 340 nm).

**Table 5.3-B: HMWS Accumulation (Batch GLUC-2025-003)**
| Exposure Level | Monomer (%) | Dimer (%) | Higher Order Aggregates (%) |
| :--- | :--- | :--- | :--- |
| **0 Lux (Control)** | 99.85 | 0.15 | < 0.05 |
| **600k Lux-hr** | 97.42 | 1.95 | 0.63 |
| **1.2M Lux-hr** | 91.20 | 5.82 | 2.98 |
| **1.8M Lux-hr** | 86.45 | 8.44 | 5.11 |

#### 5.4 CQA: Charge Heterogeneity (iCIEF)
Photo-oxidation of Histidine and deamidation of Asparagine residues significantly shift the Isoelectric Point (pI) of Glucogen-XR.

**Table 5.4-C: iCIEF Profile Shifts**
| Sample State | Acidic Variants (%) | Main Peak (%) | Basic Variants (%) |
| :--- | :--- | :--- | :--- |
| **Standard** | 12.4 | 82.1 | 5.5 |
| **Light-Stressed** | 42.8 | 48.2 | 9.0 |

*Analysis:* The 30.4% increase in acidic variants is directly correlated with the photo-deamidation of Asn22 and Asn28, as confirmed by LC-MS.

#### 5.5 CQA: Subvisible Particulate Matter (USP <788>)
Light exposure induces protein denaturations that lead to the formation of subvisible particles, which are a critical safety concern regarding immunogenicity.

**Table 5.5-D: Particle Counts (HIAC Royco Analysis)**
| Particle Size | Dark Control (per mL) | Light Exposed (per mL) | USP <788> Limit |
| :--- | :--- | :--- | :--- |
| **≥ 10 µm** | 124 | 4,820 | 6,000 |
| **≥ 25 µm** | 12 | 890 | 600 |

*Note:* The exposed sample failed USP <25 µm> limits, necessitating the "Protect from Light" labeling and the use of Type I Amber Glass vials for the drug product.

---

### 6.0 Mechanistic Discussion: Tryptophan Oxidation Pathway
The degradation of Glucogen-XR is primarily driven by the photo-excitation of the Trp8 residue. Upon absorption of UV radiation (λmax 280 nm), the indole ring enters an excited singlet state ($^1Trp^*$), transitioning to a triplet state ($^3Trp^*$) via intersystem crossing.

**The Reaction Formula:**
1. $Trp + h\nu \rightarrow Trp^*$
2. $Trp^* + O_2 \rightarrow Trp^{\bullet+} + O_2^{\bullet-}$
3. $Trp^{\bullet+} \rightarrow \rightarrow N-formylkynurenine (NFK)$

The presence of NFK was confirmed via Fluorescence Spectroscopy at an emission wavelength of 440 nm. In batch **GLUC-2025-001**, the NFK signal increased 15-fold following 1.2 million lux-hour exposure.

---

### 7.0 Conclusion and Protective Measures
The photostability testing of Glucogen-XR Drug Substance (Batches **GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003**) demonstrates that the molecule is "Light Sensitive" according to ICH Q1B criteria. Significant degradation was observed in:
*   **Purity:** 15.1% loss in main peak.
*   **Aggregation:** 5.11% increase in HMWS.
*   **Particulates:** Failure to meet USP <788> at ≥ 25 µm.

**Mandatory Protective Measures:**
1.  **Manufacturing:** All downstream processing (DSP), including ultrafiltration/diafiltration (UF/DF) and filling, must be performed under UV-filtered "yellow" light (λ > 500 nm).
2.  **Storage:** Drug Substance must be stored in HDPE carboys wrapped in black opaque polyethylene secondary over-wraps.
3.  **Labeling:** "Store in original container. Protect from light."

---
**References:**
1. *Google Health Sciences Internal Report: GHS-TR-2025-442, Photolytic Mapping of Glucapeptides.*
2. *Clinical Pharmacology and Therapeutics, Vol 112, "Peptide Photo-stability Challenges," 2023.*
3. *USP-NF <85> Bacterial Endotoxins Test.*

---

## Justification for Light-Protective Packaging

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7 STABILITY
### SUBSECTION 3.2.S.7.3 PHOTOSTABILITY TESTING

---

#### 3.2.S.7.3.1 Justification for Light-Protective Packaging

**Author:** Google Health Sciences (GHS) Regulatory Affairs CMC Group  
**Document ID:** GHS-GLUC-XR-M3-STAB-004  
**Date:** 24 May 2024  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Indication:** Type 2 Diabetes Mellitus  

---

### 1.0 Executive Summary of Justification

This document provides the technical and scientific justification for the implementation of light-protective primary and secondary packaging for Glucogen-XR (glucapeptide extended-release). Glucogen-XR is a synthetic 42-amino acid peptide agonist of the glucagon-like peptide-1 (GLP-1) receptor, formulated with a proprietary pegylated-lipid nanoparticle (LNP) delivery system for extended release. 

Based on forced degradation studies (Section 3.2.S.7.3.2) and ICH Q1B photostability testing (Option 1), Glucogen-XR Drug Substance (DS) and Drug Product (DP) have been classified as "Light Sensitive." The peptide moiety contains three tryptophan (Trp) residues, two tyrosine (Tyr) residues, and one phenylalanine (Phe) residue, which are susceptible to photo-oxidation via singlet oxygen ($^1O_2$) and superoxide radical mechanisms. Furthermore, the LNP matrix contains unsaturated lipid components prone to photo-peroxidation.

Consequently, to maintain the Critical Quality Attributes (CQAs) of potency, purity, and molecular integrity over the proposed shelf-life of 24 months, Google Health Sciences mandates the use of:
1.  **Primary Packaging:** Type I Borosilicate Amber Glass Vials (compliant with USP <660>).
2.  **Secondary Packaging:** Opaque high-density cardboard cartons with a UV-absorbent coating.

---

### 2.0 Molecular Rationale for Photosensitivity

#### 2.1 Peptide Sequence Susceptibility
The Glucogen-XR amino acid sequence includes specific chromophores that absorb electromagnetic radiation in the UV-A (315–400 nm) and UV-B (280–315 nm) ranges.

**Table 1: Molar Extinction Coefficients ($\epsilon$) of Glucogen-XR Chromophores at 280 nm**

| Amino Acid Residue | Position(s) | $\epsilon$ ($M^{-1}cm^{-1}$) | Photolytic Mechanism |
| :--- | :--- | :--- | :--- |
| Tryptophan (Trp) | 12, 25, 31 | ~5,500 | Formylkynurenine (NFK) formation; Indole ring cleavage |
| Tyrosine (Tyr) | 10, 19 | ~1,490 | Dityrosine cross-linking; Phenoxyl radical generation |
| Phenylalanine (Phe) | 6 | ~200 | Minor contribution to UV absorption |
| Disulfide Bridge | Cys7-Cys23 | N/A | S-S bond cleavage via solvated electrons |

#### 2.2 Lipid Nanoparticle (LNP) Matrix Photo-oxidation
The extended-release mechanism relies on a proprietary lipid blend (GHS-LIP-09). Photo-exposure triggers the formation of reactive oxygen species (ROS) in the aqueous phase, leading to:
*   **Peroxidation of Unsaturated Lipids:** Measured by Peroxide Value (PV).
*   **Formation of Secondary Degradants:** Malondialdehyde (MDA) and 4-hydroxynonenal (4-HNE), which can form covalent adducts with the Glucogen-XR peptide.

---

### 3.0 Summary of Photostability Testing Protocols (ICH Q1B)

Testing was conducted in accordance with ICH Topic Q1B *Note for Guidance on Photostability Testing of New Drug Substances and Products*.

#### 3.1 Exposure Conditions
Samples were exposed to a total illumination of not less than 1.2 million lux hours and an integrated near-ultraviolet energy of not less than 200 watt hours/square meter ($Wh/m^2$).

**Table 2: Equipment and Environmental Controls**

| Parameter | Specification | Equipment ID |
| :--- | :--- | :--- |
| Light Source | Xenon Arc Lamp (Filtered to simulate ID65) | ATLAS Suntest CPS+ (ID: EQ-GHS-772) |
| Temperature | $25^\circ C \pm 2^\circ C$ | Integrated Cooling System |
| Relative Humidity | $60\% \pm 5\% RH$ | External Humidity Controller |
| UV Radiometer | Calibrated 320–400 nm | SENS-UV-99 |
| Visible Radiometer | Calibrated 400–800 nm | SENS-VIS-88 |

#### 3.2 Sample Matrix for Justification Study
The following batches were utilized for the justification of light protection:

*   **Batch GLUC-2025-001:** Drug Substance (Bulk Liquid)
*   **Batch GLUC-2025-002:** Drug Product (Standard Clear Glass)
*   **Batch GLUC-2025-003:** Drug Product (Amber Glass - Proposed)

---

### 4.0 Comparative Data: Clear vs. Amber Packaging

Studies were conducted to evaluate the protective efficacy of the proposed packaging against standard clear glass (Control).

#### 4.1 Stability of Peptide Purity (RP-HPLC)
Purity was assessed using the validated RP-HPLC method (GHS-ANA-METHOD-012).

**Table 3: Purity (%) Post-ICH Q1B Exposure**

| Sample ID | Initial Purity (%) | Post-Exposure (No Packaging) | Post-Exposure (Clear Vial) | Post-Exposure (Amber Vial) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.4% | 84.2% | N/A | N/A |
| GLUC-2025-002 | 99.2% | N/A | 89.5% | N/A |
| GLUC-2025-003 | 99.3% | N/A | N/A | 98.9% |

**Statistical Analysis:** 
The decrease in purity for the clear vial (GLUC-2025-002) exceeded the USP specification limit of >2.0% degradation (p < 0.001). The Amber vial showed no statistically significant degradation compared to initial values (p = 0.45).

#### 4.2 Degradation Product Profiling (LC-MS/MS)
Forced degradation under light identified three primary photolytic impurities:
1.  **GHS-IMP-PHOTO-01:** $[+16 Da]$ (Oxidation at Trp-25)
2.  **GHS-IMP-PHOTO-02:** $[+32 Da]$ (Kynurenine formation at Trp-12)
3.  **GHS-IMP-PHOTO-03:** $[+14 Da]$ (Lipid adduct formation)

**Table 4: Impurity Levels (% w/w) after 1.2M Lux Hours**

| Impurity ID | Clear Glass (GLUC-2025-002) | Amber Glass (GLUC-2025-003) | RMT (Relative Migration Time) |
| :--- | :--- | :--- | :--- |
| GHS-IMP-PHOTO-01 | 4.12% | 0.08% | 0.85 |
| GHS-IMP-PHOTO-02 | 2.45% | < LOQ (0.05%) | 0.92 |
| GHS-IMP-PHOTO-03 | 1.88% | 0.06% | 1.15 |
| **Total Impurities** | **9.75%** | **0.42%** | **-** |

---

### 5.0 Spectral Transmission Specifications for Amber Glass

To justify the use of Amber Glass, transmission studies were performed according to USP <660> *Containers—Glass*. 

#### 5.1 Protocol for Transmission Measurement
1.  **Preparation:** Five vials from Batch GLUC-2025-PKG-01 (Amber) were sectioned into representative pieces.
2.  **Cleaning:** Sections were washed with deionized water and dried with ethanol.
3.  **Measurement:** Spectral transmission was recorded from 290 nm to 450 nm using a UV-Vis Spectrophotometer (Shimadzu UV-2600).

#### 5.2 Results
The amber glass effectively blocked >99.5% of radiation below 400 nm.

**Table 5: Transmission Data for Proposed Primary Packaging**

| Wavelength (nm) | Mean Transmission (%) | USP <660> Limit (%) | Result |
| :--- | :--- | :--- | :--- |
| 290 | 0.01 | < 10.0 | Pass |
| 350 | 0.15 | < 10.0 | Pass |
| 400 | 2.30 | < 10.0 | Pass |
| 450 | 18.50 | N/A | Information |

---

### 6.0 Impact of Secondary Packaging (Carton)

While the primary amber glass provides significant protection, the secondary carton is required to mitigate "Extreme Light Stress" during clinical handling and pharmacy storage.

#### 6.1 Carton Specification
*   **Material:** 18-pt Solid Bleached Sulfate (SBS) board.
*   **Coating:** UV-Varnish (GHS-SPEC-PKG-009).
*   **Optical Density (OD):** > 4.0 at 350 nm.

#### 6.2 Procedure: Step-by-Step "In-Use" Stability Study
This protocol simulates a patient leaving the product on a countertop.

1.  **Step 1:** Remove one Glucogen-XR vial (Amber) from the secondary carton.
2.  **Step 2:** Place vial under cool white fluorescent light (1000 lux) for 8 hours.
3.  **Step 3:** Perform Visual Inspection for Opalescence (USP <790>).
4.  **Step 4:** Analyze for Sub-visible Particulate Matter (USP <788>).
5.  **Step 5:** Compare results to a control vial kept inside the secondary carton.

**Table 6: Results of In-Use Light Exposure (8 Hours)**

| Test | Secondary Carton (Protected) | Amber Vial (Exposed) | Specification |
| :--- | :--- | :--- | :--- |
| Appearance | Clear, Colorless | Clear, Colorless | Clear to slightly opalescent |
| Particulates $\geq 10 \mu m$ | 14 particles/mL | 88 particles/mL | $\leq 6000$ per vial |
| Particulates $\geq 25 \mu m$ | 1 particle/mL | 4 particles/mL | $\leq 600$ per vial |
| Potency (HPLC) | 100.1% | 99.1% | 95.0% - 105.0% |

**Note:** While the amber glass alone maintains the product within specification for short durations, the accumulation of sub-visible particles (88 vs 14) suggests a photolytic nucleation mechanism that is further suppressed by the secondary carton.

---

### 7.0 Regulatory Compliance and Literature References

#### 7.1 Regulatory References
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **USP <660>:** Containers—Glass.
*   **USP <671>:** Containers—Performance Testing.
*   **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics* (May 1999).

#### 7.2 Scientific Literature
1.  Kerwin, B.A., & Remmele, R.L. (2007). "Protecting pharmaceutical proteins from light-induced oxidation." *Journal of Pharmaceutical Sciences*, 96(6), 1468-1479.
2.  Davies, M.J. (2003). "Singlet oxygen-mediated damage to proteins and its consequences." *Biochemical and Biophysical Research Communications*, 305(3), 761-770.

---

### 8.0 Conclusion

Based on the data presented in this subsection, Glucogen-XR is highly susceptible to photo-degradation. The primary degradation pathway involves the oxidation of tryptophan residues (Trp-12, 25, 31) and the formation of lipid peroxides within the extended-release matrix.

**Justification Summary:**
*   **Unprotected exposure** leads to a >15% loss in purity within the ICH Q1B timeframe.
*   **Clear glass packaging** fails to prevent significant impurity formation (9.75% total).
*   **Amber Glass (Type I)** reduces transmission of damaging UV radiation to <0.2% in the critical 290-380 nm range.
*   **Secondary Cartons** provide an additional layer of protection, ensuring robust stability during the "last mile" of the supply chain.

Therefore, the light-protective packaging configuration (Amber Vial + Opaque Carton) is essential to ensure the safety, efficacy, and quality of Glucogen-XR for the duration of its 24-month shelf life.

---
**End of Subsection 3.2.S.7.3.1**

---

# Analytical Methods for Stability Testing

## Stability-Indicating Methods

### 3.2.S.7.2.1 Stability-Indicating Methods for Glucogen-XR (Glucapeptide Extended-Release)

The stability-indicating nature of the analytical methods employed for the monitoring of Glucogen-XR (glucapeptide extended-release) drug substance has been established through extensive forced degradation studies (stress testing) and formal validation according to ICH Q2(R2) and ICH Q1A(R2) guidelines. These methods are designed to detect changes in the physicochemical properties, purity, and potency of the drug substance over time under the influence of environmental factors such as temperature, humidity, and light, as well as potential interactions with the container closure system.

---

#### 3.2.S.7.2.1.1 Overview of Stability-Indicating Analytical Suite

The following table summarizes the primary analytical procedures validated as stability-indicating for the Glucogen-XR drug substance, manufactured by Google Health Sciences at the South San Francisco (GHS-SSF-01) facility.

**Table 3.2.S.7.2.1-1: Summary of Stability-Indicating Methods**

| Method ID | Analytical Technique | Attribute Evaluated | Sensitivity / LOD | ICH Validation Status |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-AN-RP-001** | RP-HPLC (C18) | Chemical Purity / Degradants | 0.02% (w/w) | Validated (ICH Q2) |
| **GHS-AN-SEC-002** | SE-UPLC (Size Exclusion) | Aggregation / High MW Species | 0.05% (Area) | Validated (ICH Q2) |
| **GHS-AN-CEX-003** | Cation Exchange (CEX) | Charge Heterogeneity (Deamidation) | 0.10% (Area) | Validated (ICH Q2) |
| **GHS-AN-POT-004** | Cell-Based Bioassay (CRE-Luc) | Biological Potency (GLP-1R) | 15% (Relative) | Validated (ICH Q2) |
| **GHS-AN-LCMS-005** | Peptide Mapping (LC-MS/MS) | Structural Integrity / Oxidation | N/A (Characterization) | Qualified |
| **GHS-AN-HIAC-006** | Light Obscuration (HIAC) | Sub-visible Particulates | 1 particle/mL | USP <787/788> |

---

#### 3.2.S.7.2.1.2 Method GHS-AN-RP-001: Reversed-Phase HPLC for Related Substances

This method is the primary tool for quantifying chemical degradation products, including oxidation, truncation, and isomerization of the glucapeptide chain.

**A. Principle and Instrumentation**
The method utilizes a Waters Acquity UPLC H-Class System equipped with a Tunable Ultraviolet (TUV) detector. Separation is achieved using a C18 stationary phase with a shallow acetonitrile gradient in the presence of trifluoroacetic acid (TFA) as an ion-pairing agent.

**B. Chromatographic Conditions**
*   **Column:** Waters XBridge Peptide BEH C18, 130Å, 3.5 µm, 4.6 mm X 150 mm (Part # 186003566)
*   **Column Temperature:** 45.0°C ± 0.5°C
*   **Flow Rate:** 1.0 mL/min
*   **Mobile Phase A:** 0.1% TFA in Water (HPLC Grade)
*   **Mobile Phase B:** 0.085% TFA in Acetonitrile (HPLC Grade)
*   **Detection:** UV at 214 nm and 280 nm
*   **Injection Volume:** 20 µL
*   **Run Time:** 65 minutes

**C. Gradient Profile**
| Time (min) | % Mobile Phase A | % Mobile Phase B | Curve |
| :--- | :--- | :--- | :--- |
| 0.0 | 75.0 | 25.0 | Initial |
| 5.0 | 75.0 | 25.0 | 6 (Linear) |
| 45.0 | 55.0 | 45.0 | 6 (Linear) |
| 50.0 | 10.0 | 90.0 | 6 (Linear) |
| 55.0 | 10.0 | 90.0 | 6 (Linear) |
| 56.0 | 75.0 | 25.0 | 6 (Linear) |
| 65.0 | 75.0 | 25.0 | 6 (Linear) |

**D. Forced Degradation and Stability Indicating Power**
To demonstrate the stability-indicating nature of GHS-AN-RP-001, Batch GLUC-2025-001 was subjected to various stress conditions.

**Table 3.2.S.7.2.1-2: Degradation Results for Method GHS-AN-RP-001**

| Stress Condition | Duration/Intensity | % Main Peak | % Total Impurities | Major Degradant Identified |
| :--- | :--- | :--- | :--- | :--- |
| **Control (4°C)** | N/A | 99.4% | 0.6% | N/A |
| **Thermal (40°C)** | 14 Days | 92.1% | 7.9% | Deamidation (Asn-28) |
| **Oxidation (H2O2)** | 0.3% H2O2, 4h | 85.6% | 14.4% | Met-Oxidation (Met-8) |
| **Acidic (HCl)** | 0.1M HCl, 2h | 88.2% | 11.8% | N-terminal Truncation |
| **Alkaline (NaOH)** | 0.1M NaOH, 2h | 76.4% | 23.6% | Multiple Hydrolysis Peaks |
| **Photostability** | 1.2M Lux-hr | 96.8% | 3.2% | Tryptophan modification |

---

#### 3.2.S.7.2.1.3 Method GHS-AN-SEC-002: Size Exclusion Chromatography for Aggregates

Glucogen-XR is a long-acting peptide; therefore, monitoring for dimers, trimers, and higher-order aggregates (HMW) is critical for immunogenicity risk mitigation.

**A. Methodology**
*   **Column:** TSKgel G2000SWxl, 7.8 mm ID x 30 cm, 5 µm
*   **Mobile Phase:** 200 mM Sodium Phosphate, 300 mM NaCl, pH 6.8
*   **Isocratic Flow:** 0.5 mL/min
*   **System Suitability:** Resolution between monomer and dimer must be ≥ 1.5.

**B. Stability Data Correlation**
During the ICH long-term stability study (25°C/60% RH) for Batch GLUC-2025-002, GHS-AN-SEC-002 successfully detected a rise in dimer content from 0.12% at T=0 to 0.45% at T=12 months.

---

#### 3.2.S.7.2.1.4 Method GHS-AN-POT-004: In Vitro Cell-Based Potency Assay

As per USP <1033>, the biological activity of Glucogen-XR must be confirmed using a stability-indicating bioassay.

**A. Assay Principle**
The assay utilizes a recombinant HEK-293 cell line expressing the human GLP-1 receptor (GLP-1R) and a luciferase reporter gene under the control of a cAMP-responsive element (CRE).

**B. Protocol Steps**
1.  **Cell Seeding:** Seed HEK-293-GLP1R cells at 20,000 cells/well in a 96-well plate. Incubate 24 hours at 37°C.
2.  **Sample Preparation:** Dilute Reference Standard (Lot GHS-REF-2024) and Stability Samples (e.g., GLUC-2025-003) to a starting concentration of 100 nM.
3.  **Serial Dilution:** Perform 1:3 serial dilutions (10 points) in Serum-Free DMEM.
4.  **Stimulation:** Add samples to cells. Incubate for 4 hours.
5.  **Detection:** Add Steady-Glo® Luciferase Reagent. Read luminescence using a Molecular Devices SpectraMax L.
6.  **Analysis:** Data fitted using a 4-Parameter Logistic (4-PL) model.

**C. Statistical Requirements**
*   **Parallelism:** The slope ratio of the sample curve to the standard curve must be within 0.80 – 1.25.
*   **Precision:** The CV% of triplicate measurements must be < 15%.
*   **Relative Potency Calculation:**
    $$Relative Potency = \frac{EC_{50} (Standard)}{EC_{50} (Sample)} \times 100\%$$

---

#### 3.2.S.7.2.1.5 Verification of Stability-Indicating Ability via Peak Purity Analysis

To ensure that the primary purity method (GHS-AN-RP-001) does not mask co-eluting degradants, Photodiode Array (PDA) peak purity analysis was conducted on stressed samples of GLUC-2025-004.

**Analysis of Thermal Stress Sample (40°C, 1 Month):**
*   **Main Peak Purity Angle:** 0.045
*   **Main Peak Purity Threshold:** 0.112
*   **Conclusion:** The Purity Angle is less than the Threshold, indicating no detectable spectral co-elution. The method is confirmed to be stability-indicating for the primary peptide peak.

---

#### 3.2.S.7.2.1.6 Detailed Stability Results for Representative Batches

The following table provides raw stability data for three commercial-scale batches (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003) stored at the intended storage condition (5°C ± 3°C).

**Table 3.2.S.7.2.1-3: Stability Data Matrix (Primary Batches)**

| Batch ID | Time Point | Appearance | pH | RP-HPLC Purity (%) | SEC HMW (%) | Potency (% Label Claim) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | T=0 | Clear, Colorless | 7.4 | 99.4 | 0.11 | 102 |
| | T=3M | Clear, Colorless | 7.4 | 99.2 | 0.12 | 99 |
| | T=6M | Clear, Colorless | 7.3 | 98.9 | 0.15 | 101 |
| | T=12M | Clear, Colorless | 7.4 | 98.5 | 0.18 | 98 |
| **GLUC-2025-002** | T=0 | Clear, Colorless | 7.4 | 99.5 | 0.09 | 105 |
| | T=3M | Clear, Colorless | 7.4 | 99.3 | 0.11 | 103 |
| | T=6M | Clear, Colorless | 7.4 | 99.1 | 0.14 | 100 |
| | T=12M | Clear, Colorless | 7.5 | 98.7 | 0.20 | 97 |

---

#### 3.2.S.7.2.1.7 Reference Standards and Calibration

All stability-indicating methods are calibrated against the Primary Reference Standard (Lot: GHS-GLUC-PRS-01), which is stored at -80°C. Working standards (e.g., Lot GLUC-2025-WS) are qualified annually against the PRS.

**Calibration Curve Parameters (RP-HPLC):**
*   **Range:** 0.05 mg/mL to 1.5 mg/mL
*   **Linearity (r²):** 0.9998
*   **Weighting:** None
*   **Residuals:** < 2.0%

---

#### 3.2.S.7.2.1.8 Regulatory Compliance Statement

All analytical methods described in this section have been validated in accordance with:
1.  **ICH Q2(R2):** Validation of Analytical Procedures.
2.  **USP <1225>:** Validation of Compendial Procedures.
3.  **FDA Guidance for Industry:** Analytical Procedures and Methods Validation for Drugs and Biologics (July 2015).
4.  **Google Health Sciences Quality Management System (QMS-SOP-550):** Control of Stability Studies.

The data presented confirms that the analytical suite is capable of detecting significant change (as defined by ICH Q1A) and ensures the safety and efficacy of Glucogen-XR throughout its shelf life.

---

## Method Validation for Stability Studies

# MODULE 3: QUALITY (3.2.S.7.3)
## SUBSECTION: METHOD VALIDATION FOR STABILITY STUDIES
**Document ID:** GHS-GLUC-XR-M3-STAB-VAL-2025  
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Effective Date:** October 24, 2025  

---

### 1.0 Executive Summary
The stability-indicating nature of the analytical procedures used to monitor the quality of Glucogen-XR (glucapeptide extended-release) must be rigorously validated to ensure that any physical, chemical, or microbiological changes in the drug substance over time are accurately detected and quantified. This document provides the comprehensive validation package for the analytical methods employed in the stability program, in accordance with **ICH Q2(R2) Validation of Analytical Procedures**, **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, and **USP <1225> Validation of Compendial Procedures**.

Validation was performed using Glucogen-XR Drug Substance batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003**.

---

### 2.0 Scope and Regulatory Framework
This validation covers the stability-indicating assays (SIAs) used for long-term (25°C ± 2°C / 60% RH ± 5% RH), accelerated (40°C ± 2°C / 75% RH ± 5% RH), and stressed stability studies.

#### 2.1 Regulatory References
1.  **ICH Q2(R2):** Validation of Analytical Procedures: Text and Methodology.
2.  **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
3.  **ICH Q3A(R2):** Impurities in New Drug Substances.
4.  **USP <621>:** Chromatography.
5.  **USP <1210>:** Statistical Tools for Procedure Validation.

---

### 3.0 Analytical Method 1: Stability-Indicating RP-HPLC for Assay and Purity
**Method ID:** GHS-QC-HPLC-01  
**Objective:** To quantify the potency (assay) and identify/quantify related substances (degradants) including deamidation and oxidation products.

#### 3.1 Equipment and Chromatographic Conditions
*   **System:** Waters Acquity Arc UHPLC with PDA Detector and Quaternary Solvent Manager (System ID: GHS-LC-44).
*   **Column:** Phenomenex Luna C18(2), 5 μm, 100 Å, 250 x 4.6 mm (Serial No: 998244-1).
*   **Mobile Phase A:** 0.1% TFA in Water (Milli-Q).
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile (HPLC Grade).
*   **Flow Rate:** 1.2 mL/min.
*   **Injection Volume:** 20 μL.
*   **Detection:** 214 nm and 280 nm.
*   **Run Time:** 65 minutes.

#### 3.2 Forced Degradation Study (Specificity)
To demonstrate the stability-indicating nature of the RP-HPLC method, Glucogen-XR (Batch GLUC-2025-001) was subjected to stress conditions.

**Table 3.2.1: Forced Degradation Parameters and Mass Balance Results**
| Stress Condition | Protocol Detail | Duration | % Degradation | % Assay (Recovery) | Mass Balance (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Control** | Untreated Sample (5°C) | N/A | 0.42% | 100.0% | 100.42 |
| **Acid** | 0.1 N HCl, 60°C | 24 Hours | 12.4% | 87.5% | 99.9 |
| **Base** | 0.1 N NaOH, 25°C | 2 Hours | 15.8% | 83.2% | 99.0 |
| **Oxidation** | 3% H2O2, 25°C | 6 Hours | 18.2% | 81.5% | 99.7 |
| **Thermal** | Dry Heat, 80°C | 48 Hours | 8.5% | 91.2% | 99.7 |
| **Photolysis** | 1.2M Lux hours (ICH Q1B) | 10 Days | 4.1% | 95.8% | 99.9 |

**Observations:**
*   **Acid Degradation:** Primary peaks at RRT 0.88 and 1.12 (confirmed as deamidation products by LC-MS).
*   **Oxidative Degradation:** Major peak at RRT 0.92 (confirmed as Sulfoxide formation at Met-14).
*   **Peak Purity:** PDA peak purity analysis (Waters Empower 3 software) indicated purity angles < purity thresholds for all degraded samples, confirming no co-eluting impurities.

#### 3.3 Linearity and Range
Linearity was evaluated using seven concentration levels ranging from 50% to 150% of the target concentration (1.0 mg/mL).

**Table 3.3.1: Linearity Data for Glucogen-XR**
| Level (%) | Conc (mg/mL) | Response (Area Counts - Mean n=3) | SD | % RSD |
| :--- | :--- | :--- | :--- | :--- |
| 50 | 0.50 | 12,450,211 | 45,210 | 0.36 |
| 75 | 0.75 | 18,675,315 | 32,114 | 0.17 |
| 100 | 1.00 | 24,900,422 | 18,995 | 0.08 |
| 125 | 1.25 | 31,125,530 | 54,201 | 0.17 |
| 150 | 1.50 | 37,350,638 | 66,321 | 0.18 |

**Statistical Analysis:**
*   **Regression Equation:** $y = 24,900,425x + 124$
*   **Correlation Coefficient (r):** 0.9999
*   **Coefficient of Determination (R²):** 0.9998
*   **Y-Intercept:** 0.0005% of target response (negligible).

---

### 4.0 Analytical Method 2: Size Exclusion Chromatography (SEC)
**Method ID:** GHS-QC-SEC-02  
**Objective:** To detect and quantify high molecular weight species (HMWS/aggregates) and low molecular weight species (LMWS/fragments).

#### 4.1 System Suitability Criteria
1.  **Resolution:** ≥ 1.5 between monomer and dimer.
2.  **Tailing Factor:** ≤ 1.5 for the monomer peak.
3.  **Repeatability:** % RSD ≤ 2.0% for n=6 injections.

#### 4.2 Precision (Intermediate Precision)
Precision was assessed by two different analysts on two different days using two different HPLC systems.

**Table 4.2.1: Intermediate Precision Results (Total Monomer %)**
| Day/Analyst | Batch Number | Injection 1 | Injection 2 | Injection 3 | Mean (%) | % RSD |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Day 1/Analyst A | GLUC-2025-001 | 99.45 | 99.42 | 99.48 | 99.45 | 0.03 |
| Day 2/Analyst B | GLUC-2025-001 | 99.38 | 99.41 | 99.39 | 99.39 | 0.01 |
| **Combined** | | | | | **99.42** | **0.04** |

---

### 5.0 Analytical Method 3: Capillary Isoelectric Focusing (cIEF)
**Method ID:** GHS-QC-CIEF-03  
**Objective:** Determination of charge heterogeneity (acidic, main, and basic variants) which is critical for monitoring stability-related deamidation.

#### 5.1 Procedure for cIEF
1.  **Sample Prep:** Dilute Glucogen-XR to 1.0 mg/mL in cIEF Pharmalyte (pH 3-10).
2.  **Anolyte:** 91 mM Phosphoric Acid.
3.  **Catholyte:** 20 mM Sodium Hydroxide.
4.  **Focusing:** 1 minute at 1500 V; 7 minutes at 3000 V.

#### 5.2 Accuracy (Recovery)
Recovery was performed by spiking known amounts of purified acidic variants into the main peak fraction.

**Table 5.2.1: Recovery Study for Acidic Variants**
| Spiked Level (%) | Theoretical Conc (%) | Observed Conc (%) | % Recovery |
| :--- | :--- | :--- | :--- |
| 5.0 | 5.24 | 5.18 | 98.8 |
| 10.0 | 10.24 | 10.32 | 100.7 |
| 15.0 | 15.24 | 15.11 | 99.1 |

---

### 6.0 Analytical Method 4: Bioassay (Potency)
**Method ID:** GHS-QC-BIO-04  
**Objective:** To measure the biological activity of Glucogen-XR using a GLP-1 receptor-coupled cAMP reporter gene assay in CHO-K1 cells.

#### 6.1 Relative Potency Calculation
The potency is calculated using a 4-parameter logistic (4-PL) model.
$y = D + \frac{A - D}{1 + (\frac{x}{C})^B}$
Where:
*   $A$ = Bottom asymptote
*   $B$ = Hill slope
*   $C$ = EC50
*   $D$ = Top asymptote

#### 6.2 Stability Suitability
The bioassay was validated to ensure it can detect a loss in potency corresponding to the chemical degradation observed in RP-HPLC.

**Table 6.2.1: Potency vs. Degradation Correlation**
| Sample Condition | RP-HPLC Monomer % | Bioassay Relative Potency (%) |
| :--- | :--- | :--- |
| Reference (T0) | 99.5% | 102% |
| Heat Stressed (40°C/4 wks) | 92.1% | 88% |
| Heat Stressed (40°C/8 wks) | 84.5% | 79% |

---

### 7.0 Robustness Analysis
Robustness was evaluated by deliberately varying critical method parameters (CMP) for the RP-HPLC method (GHS-QC-HPLC-01).

**Table 7.0.1: Robustness Testing Results**
| Parameter | Deviation | Effect on Resolution | Effect on Tailing | Acceptable? |
| :--- | :--- | :--- | :--- | :--- |
| Flow Rate | 1.1 mL/min (-0.1) | 1.82 | 1.15 | Yes |
| Flow Rate | 1.3 mL/min (+0.1) | 1.75 | 1.18 | Yes |
| Column Temp | 38°C (-2°C) | 1.78 | 1.16 | Yes |
| Column Temp | 42°C (+2°C) | 1.79 | 1.14 | Yes |
| Mobile Phase pH | 2.15 (-0.05) | 1.69 | 1.21 | Yes |
| Mobile Phase pH | 2.25 (+0.05) | 1.72 | 1.19 | Yes |

---

### 8.0 Solution Stability
Stability of the sample solution and mobile phases was established to define the maximum allowable hold time during stability testing.

*   **Sample Solution (2-8°C):** Stable for 72 hours (Change in purity < 0.2%).
*   **Sample Solution (Ambient):** Stable for 24 hours (Change in purity < 0.2%).
*   **Mobile Phase:** Stable for 5 days at room temperature.

---

### 9.0 Summary of Validation Status
All analytical methods used for the stability testing of Glucogen-XR have been validated per ICH Q2(R2) requirements. The methods are demonstrated to be:
1.  **Specific:** Capable of resolving the drug substance from its degradation products and excipients.
2.  **Linear:** Demonstrating a proportional response over the intended range.
3.  **Precise:** Yielding reproducible results across multiple analysts and days.
4.  **Accurate:** Reflecting the true value of the analyte.
5.  **Robust:** Insensitive to minor changes in operational parameters.

These methods are deemed "Stability-Indicating" and are suitable for the evaluation of the shelf-life of Glucogen-XR Drug Substance and Drug Product.

---
**Approval:**
*Digital Signature*
**Dr. Elizabeth Chen**
Head of Quality Control, Google Health Sciences
Date: October 24, 2025

---

## Out-of-Specification Investigations

### 3.2.S.7.3.5 OUT-OF-SPECIFICATION (OOS) INVESTIGATIONS FOR STABILITY TESTING

#### 1.0 PURPOSE AND SCOPE
This section delineates the standardized, rigorous procedural framework for the identification, investigation, and resolution of Out-of-Specification (OOS) results encountered during the formal stability program of Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS). 

This protocol applies to all stability testing points (T=0 through T=36 months and beyond) for Glucogen-XR drug substance (DS) batches, specifically those utilized in pivotal Phase III trials and intended for commercial launch (e.g., Batch Series GLUC-2025-001 through GLUC-2025-500). The scope encompasses all analytical methodologies validated under ICH Q2(R1) and implemented per USP <1225>, including but not limited to:
*   Purity by SE-HPLC (USP <621>)
*   Charge Heterogeneity by cIEF
*   Biological Potency by Cell-Based Bioassay (Relative Potency)
*   Sub-visible Particulate Matter (USP <788>)
*   Degradation Product Profiling

The procedures described herein comply with FDA Guidance for Industry: *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production (October 2006)* and ICH Q1A(R2) *Stability Testing of New Drug Substances and Products*.

---

#### 2.0 REGULATORY COMPLIANCE AND GUIDELINE REFERENCING
The investigation of OOS results for Glucogen-XR is governed by a hierarchical structure of internal Quality Management System (QMS) documents and international regulatory expectations:

| Reference ID | Document Title | Relevance to Glucogen-XR |
| :--- | :--- | :--- |
| **21 CFR 211.165** | Testing and release for distribution | Statutory requirement for investigating deviations from standards. |
| **ICH Q1A(R2)** | Stability Testing of New Drug Substances | Defines "significant change" requiring OOS triggers. |
| **USP <1010>** | Analytical Data—Interpretation and Treatment | Statistical tools for outlier identification (Dixon’s/Grubbs). |
| **GHS-SOP-QA-09** | Management of Laboratory Investigations | Primary GHS internal procedural standard. |
| **GHS-SPEC-0042** | Specifications for Glucogen-XR DS | Defined limits for GLUC-2025-XXX series. |

---

#### 3.0 INVESTIGATIONAL PHASES: STEP-BY-STEP PROTOCOL

##### 3.1 Phase I: Laboratory Investigation (The Initial Assessment)
The Phase I investigation must be initiated within 24 hours of the generation of the suspect result. The primary objective is to determine if there was a clear, documented laboratory error.

**Step 1: Immediate Analyst Action**
Upon obtaining a result outside the specification limits (e.g., SE-HPLC Main Peak < 95.0% for Batch GLUC-2025-112 at the 12-month interval), the analyst shall:
1.  Retain all original sample preparations, mobile phases, and vials.
2.  Not discard any solutions until Phase I is concluded.
3.  Notify the Laboratory Manager and Quality Assurance (QA).

**Step 2: Analyst/Supervisor Assessment (The "Checklist" Approach)**
The supervisor shall perform a physical inspection of the laboratory setup and a review of the data using GHS Form-OOS-01.

| Checklist Item | Verification Detail | Example Data (GLUC-2025-112) |
| :--- | :--- | :--- |
| **Sample Prep** | Correct dilution factor (1:50) applied? | Dilution factor verified as 1:50.02 via balance printout. |
| **Reagents** | Mobile Phase A (pH 2.5) within expiry? | Expired 2 days prior to injection. **(Root Cause Found)** |
| **Equipment** | HPLC Column (GHS-COL-992) pressure stable? | Pressure spikes noted at 14.5 min. |
| **Integration** | Manual integration consistent with SOP? | Drift noted in baseline integration. |
| **Calculations** | Spreadsheet formulas validated? | Verified against manual calculator check. |

**Step 3: Phase Ia (Obvious Error)**
If an obvious error is identified (e.g., incorrect wavelength, calculation error, or reagent expiration), the result is invalidated. A "re-test" of the original sample preparation is performed. The OOS is closed with a "Laboratory Error" designation.

**Step 4: Phase Ib (No Obvious Error)**
If no obvious error is found, the investigation proceeds to Phase II. This requires a formal Investigation Plan approved by QA.

---

##### 3.2 Phase II: Full-Scale Investigation (Manufacturing & Expanded Lab)
Phase II involves a cross-functional team (Manufacturing, Stability Science, and MSAT).

**Subsection 3.2.1: Manufacturing Review**
For stability OOS, the manufacturing record for the specific batch (e.g., GLUC-2025-112) is re-evaluated to see if any deviations occurred during the 2025 production run that might manifest as long-term instability.

*   **Review of Ultrafiltration/Diafiltration (UF/DF) Parameters:** Check for shear stress.
*   **Review of Bioburden/Endotoxin:** Could enzymatic degradation be occurring?
*   **Storage Log Review:** Verify the stability chamber (Chamber ID: STAB-402, 5°C ± 3°C) did not experience excursions.

**Subsection 3.2.2: Retesting Protocol**
Retesting is performed on the original sample source (Stability Pull).
*   **Sample Size:** N=6 replicates.
*   **Personnel:** Two analysts (Analyst A who performed the original test and Analyst B, a senior analyst).
*   **Statistical Analysis:** All data points are reported. The mean of the retests is used to determine compliance, but individual results are analyzed for outliers.

---

#### 4.0 CASE STUDY: OOS INVESTIGATION LOG (BATCH GLUC-2025-204)
The following table represents a historical log of an OOS investigation conducted during the Accelerated Stability Study (25°C/60% RH) for Glucogen-XR.

| Date | Step | Batch ID | Test Parameter | Initial Result | Spec Limit | Final Disposition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 12-OCT-25 | Phase I | GLUC-2025-204 | Potency (Relative) | 0.72 | 0.80 - 1.20 | Invalidated |
| **Details:** | \--- | \--- | \--- | \--- | \--- | Cell line GHS-CHO-001 viability was <85% at time of assay. |
| 15-OCT-25 | Retest | GLUC-2025-204 | Potency (Relative) | 0.98 | 0.80 - 1.20 | **Pass** |

---

#### 5.0 STATISTICAL EVALUATION OF OOS TRENDS (OOT)
Google Health Sciences utilizes an "Out-of-Trend" (OOT) alert system to prevent OOS occurrences. If a stability result for Glucogen-XR deviates by >2 sigma from the regression line of the historical data for the GLUC-2025 series, an investigational alert is triggered even if the result is within specification.

**Formula for Stability Limit (SL) at Time (t):**
$$SL = \hat{y}_t \pm t_{0.95, n-2} \cdot s_{y.x} \sqrt{1 + \frac{1}{n} + \frac{(x_t - \bar{x})^2}{\sum(x_i - \bar{x})^2}}$$

Where:
*   $\hat{y}_t$ = Predicted stability value.
*   $s_{y.x}$ = Standard error of the regression.

---

#### 6.0 IMPACT ASSESSMENT ON CLINICAL INVENTORY
If an OOS result is confirmed (Phase III: Confirmed OOS), the following actions are mandatory:
1.  **Quarantine:** All remaining inventory of the affected batch (e.g., GLUC-2025-XXX) at clinical sites must be quarantined within 48 hours.
2.  **Field Alert Report (FAR):** For commercialized products, an FAR must be submitted to the FDA within 3 working days.
3.  **Root Cause Analysis (RCA):** Utilization of Fishbone (Ishikawa) diagrams to determine if the issue is inherent to the glucapeptide molecule or the extended-release formulation.

---

#### 7.0 ABBREVIATIONS
*   **CHO:** Chinese Hamster Ovary
*   **DS:** Drug Substance
*   **GHS:** Google Health Sciences
*   **OOS:** Out-of-Specification
*   **OOT:** Out-of-Trend
*   **SE-HPLC:** Size Exclusion High-Performance Liquid Chromatography

---

#### 8.0 APPROVAL SIGNATORIES
*Prepared By:* __________________________ (Stability Scientist, GHS) Date: 20-MAY-2025
*Reviewed By:* __________________________ (Director of Regulatory Affairs) Date: 22-MAY-2025
*Approved By:* __________________________ (Head of Quality Assurance) Date: 25-MAY-2025

---

# Container Orientation and Placement Effects

## Horizontal vs. Vertical Storage

### **3.2.S.7.3.3.1 Container Orientation and Placement Effects: Horizontal vs. Vertical Storage**

#### **1. Scope and Objective**
The objective of this sub-section is to provide a comprehensive analysis of the physical, chemical, and functional stability of Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) when stored in varied spatial orientations. Given the complex tertiary structure of the glucapeptide and the specific rheological properties of the extended-release matrix, the orientation of the primary storage container (30L Single-Use Systems [SUS] and 2L Glass Carboys) during long-term (5°C ± 3°C) and accelerated (25°C ± 2°C / 60% RH) storage is a critical quality parameter.

The study specifically evaluates the impact of "Horizontal" (side-lying) vs. "Vertical" (upright) storage on:
1.  **Interface Interaction:** The ratio of liquid-to-air interface vs. liquid-to-container surface area.
2.  **Protein Adsorption:** Potential for glucapeptide loss via adsorption to the container-closure system (CCS) surface.
3.  **Leachable Profiles:** Migration of volatiles and non-volatiles from the SUS film or gasket seals.
4.  **Particulate Matter Formation:** Mechanical stress at the air-liquid interface (meniscus) leading to aggregation.

#### **2. Regulatory Framework and Compliance**
This evaluation is conducted in strict accordance with the following regulatory guidances:
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **USP <790>:** Visible Particulates in Injections.
*   **USP <787>:** Subvisible Particulate Matter in Therapeutic Protein Injections.
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (May 1999).

---

#### **3. Experimental Design and Batch Selection**
Three (3) primary validation batches of Glucogen-XR were utilized for this comparative orientation study. These batches were manufactured at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco) using the GHS-CHO-001 cell line.

**Table 1: Batch Identification and Configuration for Orientation Studies**

| Batch Number | Manufacture Date | Fill Volume (L) | Container Type | Resin/Material | Orientation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 25.0 | 30L Flexboy SUS | Polyethylene (LDPE) | Vertical (V) |
| **GLUC-2025-002** | 14-JAN-2025 | 25.0 | 30L Flexboy SUS | Polyethylene (LDPE) | Horizontal (H) |
| **GLUC-2025-003** | 18-JAN-2025 | 25.0 | 30L Flexboy SUS | Polyethylene (LDPE) | Vertical (V) |
| **GLUC-2025-004** | 22-JAN-2025 | 2.0 | Type I Borosilicate | Glass / Fluoropolymer | Horizontal (H) |

#### **4. Rationale for Orientation Comparison**
In the **Vertical Orientation**, the liquid-to-air interface is minimized relative to the total volume, concentrated at the neck of the container. In the **Horizontal Orientation**, the liquid-to-air interface area is maximized (extending the length of the bag/carboy), which theoretically increases the risk of surface-induced denaturation and aggregation of the glucapeptide molecule. Furthermore, horizontal storage ensures constant contact of the drug substance with the container's gasket/seal area, increasing the risk of extractables leaching into the DS.

---

#### **5. Technical Specifications: Interface Area Calculations**

The potential for degradation is mathematically modeled based on the Surface Area to Volume (SA/V) ratio and the specific interface area ($A_{int}$).

**Formula 1: Liquid-Air Interface Area (Horizontal Cylindrical Approximation)**
$$A_{int(H)} = 2L \sqrt{R^2 - (R-h)^2}$$
*Where:*
*   $L$ = Length of container (50 cm)
*   $R$ = Radius of container (15 cm)
*   $h$ = Height of liquid level

**Formula 2: Liquid-Air Interface Area (Vertical Cylindrical Approximation)**
$$A_{int(V)} = \pi R^2$$

**Table 2: Calculated Interface Metrics for 30L SUS**

| Metric | Vertical Storage | Horizontal Storage | Delta (%) |
| :--- | :--- | :--- | :--- |
| Liquid-Air Interface ($cm^2$) | 706.8 | 1,412.5 | +100% |
| Liquid-CCS Contact Area ($cm^2$) | 4,241.1 | 4,947.9 | +16.6% |
| Headspace Volume ($cm^3$) | 5,000 | 5,000 | 0% |

---

#### **6. Analytical Testing Protocol (Step-by-Step)**

To ensure statistical significance (p < 0.05), the following protocol was executed for each batch at T=0, T=3, T=6, and T=12 months.

**Protocol ID: GHS-STAB-PRO-099**

1.  **Equilibration:** Remove containers from 5°C walk-in stability chamber (ID: CLOUD-STAB-05).
2.  **Visual Inspection:** Perform inspection per USP <790> under a calibrated light box (2,000–3,750 lux). Record any evidence of opalescence or pellicle formation at the interface.
3.  **Aseptic Sampling:**
    *   For **Vertical** units: Sample from the bottom drain port and the top surface.
    *   For **Horizontal** units: Sample from the side port and the geometric center.
4.  **High-Performance Size Exclusion Chromatography (HP-SEC):** Use Agilent 1260 Infinity II. Column: Tosoh TSKgel G3000SWxl. Detect monomeric purity and high-molecular-weight species (HMWS).
5.  **Reverse Phase-HPLC (RP-HPLC):** Evaluation of deamidation and oxidation (specifically Met-14 and Trp-25).
6.  **Micro-Flow Imaging (MFI):** Quantify subvisible particles (2 µm to 100 µm).

---

#### **7. Comparative Stability Data (12-Month Results)**

The following data summarizes the findings for Batch GLUC-2025-001 (Vertical) vs. GLUC-2025-002 (Horizontal) stored at 5°C.

**Table 3: Stability Summary - Orientation Impact (T=12 Months)**

| Parameter | Specification | Vertical (GLUC-2025-001) | Horizontal (GLUC-2025-002) |
| :--- | :--- | :--- | :--- |
| **Appearance** | Clear to slightly opalescent | Conforms (Clear) | Conforms (Sl. Opalescent) |
| **pH** | 6.5 ± 0.3 | 6.52 | 6.49 |
| **Monomer Purity (SEC)** | ≥ 98.0% | 99.4% | 98.2% |
| **HMWS (%)** | ≤ 1.5% | 0.4% | 1.3% |
| **Potency (Bioassay)** | 80% - 125% | 102% | 97% |
| **Subvisible Particles (≥10µm)** | ≤ 6000 / container | 420 | 2,150 |
| **Subvisible Particles (≥25µm)** | ≤ 600 / container | 12 | 88 |

**Observation 7.1: Aggregation Kinetics**
A statistically significant (p = 0.034) increase in HMWS was observed in the horizontal orientation (1.3%) compared to the vertical orientation (0.4%). This is attributed to the increased surface area of the liquid-air interface in horizontal bags, which promotes the unfolding of the glucapeptide alpha-helix and subsequent hydrophobic association into dimers and higher-order oligomers.

---

#### **8. Leachable and Extractable (L&E) Assessment**

Storage in the horizontal orientation places the Drug Substance in direct, constant contact with the closure port and the seam of the SUS bag.

**Table 4: Non-Volatile Leachable Detection (LC-MS/MS)**

| Component ID | Source | Vertical (ng/mL) | Horizontal (ng/mL) | Threshold of Evaluation |
| :--- | :--- | :--- | :--- | :--- |
| **Irganox 1010** | Film Antioxidant | < LOD | 4.2 | 10.0 |
| **Palmitic Acid** | Lubricant | 1.2 | 14.8 | 50.0 |
| **Caprolactam** | Nylon layer | 5.5 | 8.9 | 100.0 |

*Conclusion:* While leachables were higher in horizontal storage, all levels remained well below the Safety Concern Threshold (SCT) of 0.15 µg/day based on the maximum daily dose of Glucogen-XR.

---

#### **9. Statistical Analysis of Orientation Variability**

A Two-Way ANOVA was performed to determine the interaction between Storage Time (T) and Orientation (O).

**Table 5: ANOVA Summary for HMWS Formation**

| Source of Variation | SS | df | MS | F | P-value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Orientation (O)** | 0.812 | 1 | 0.812 | 12.45 | 0.0023 |
| **Time (T)** | 1.450 | 3 | 0.483 | 7.41 | 0.0051 |
| **Interaction (O x T)** | 0.320 | 3 | 0.107 | 1.64 | 0.2100 |

*Interpretation:* The P-value for Orientation (0.0023) indicates that the physical positioning of the container has a highly significant effect on the rate of HMWS accumulation.

---

#### **10. Procedural Recommendations for Handling and Shipping**

Based on the 12-month stability data, Google Health Sciences establishes the following requirements for Glucogen-XR DS storage:

1.  **Primary Storage:** All DS carboys and SUS bags must be stored in the **Vertical** orientation to minimize the liquid-air interface.
2.  **Labeling:** "THIS END UP" arrows must be clearly printed on the secondary and tertiary packaging.
3.  **Shipping:** During cold-chain transit (Batch GLUC-2025-005 study), temporary horizontal orientation for up to 72 hours is permitted, provided the temperature is maintained at 2-8°C.
4.  **Mixing:** Post-storage, containers must be gently inverted 5 times (vertical-to-horizontal-to-vertical) to ensure homogeneity of the extended-release matrix before filling operations.

#### **11. References**
1. Google Health Sciences Internal Report: GHS-RPT-2025-442, "Thermodynamic Stability of Glucapeptide at Interfaces."
2. Carpenter, J.F., et al. (1999). "Inhibition of Protein Aggregation," *Methods in Enzymology*.
3. USP <1207> Package Integrity Evaluation - Sterile Products.

---

## Contact with Closure

### **3.2.S.7. STABILITY**
#### **3.2.S.7.1. Stability Summary and Conclusions**
##### **3.2.S.7.1.X. Container Orientation and Placement Effects**
###### **3.2.S.7.1.X.1. Contact with Closure (Upright vs. Inverted/Horizontal Assessment)**

---

### **1. Executive Summary: The Criticality of Closure Contact**
In accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **FDA Guidance for Industry: Container Closure Systems for Packaging Human Drugs and Biologics**, Google Health Sciences (GHS) has executed a comprehensive "Contact with Closure" assessment for the Glucogen-XR (glucapeptide extended-release) drug substance. 

The primary objective of this study is to evaluate the physicochemical compatibility between the Glucogen-XR protein molecule and the elastomeric components of the primary container closure system (CCS). Because Glucogen-XR is a highly potent GLP-1 receptor agonist with specific hydrophobic motifs susceptible to interfacial adsorption and leachables-induced aggregation, the orientation of the storage container (upright vs. inverted/horizontal) represents a critical variable in the stability profile. 

This section details the comparative stability data between drug substance stored in the **upright orientation** (no contact with the stopper) and the **inverted orientation** (full, continuous contact with the stopper) over a period of 36 months at the intended storage condition (5°C ± 3°C) and 6 months under accelerated conditions (25°C ± 2°C / 60% RH).

---

### **2. Regulatory and Standard Compliance Framework**
The study design, analytical methodology, and acceptance criteria were established based on the following regulatory mandates:
*   **USP <1663>**: Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **USP <1664>**: Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **ICH Q5C**: Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **Technical Report No. 79 (PDA)**: Particulate Matter Control in Biopharmaceutical Product Development.

---

### **3. Material and Equipment Specifications**

#### **3.1. Primary Container Closure System (CCS) Components**
The Glucogen-XR Drug Substance is stored in high-density polyethylene (HDPE) or Type I Borosilicate glass carboys (depending on batch scale), utilizing a specialized bromobutyl rubber stopper.

| Component ID | Description | Manufacturer | Material Specification |
| :--- | :--- | :--- | :--- |
| **CCS-V-001** | 500 mL Type I Borosilicate Glass Bottle | Schott AG | USP <660> Type I Glass |
| **CCS-S-042** | 44mm FluroTec® Coated Stopper | West Pharmaceutical Services | Bromobutyl (4023/50) with ETFE coating |
| **CCS-C-99** | Aluminum Flip-Off® Seal | West Pharmaceutical Services | 44mm lacquered aluminum |

#### **3.2. Test Batches**
Three primary GMP batches were utilized for this orientation study.

| Batch Number | Scale | Date of Manufacture | Site of Manufacture |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 200 L (Pivotal) | 12-JAN-2025 | South San Francisco (Bldg 3) |
| **GLUC-2025-002** | 200 L (Pivotal) | 28-JAN-2025 | South San Francisco (Bldg 3) |
| **GLUC-2025-003** | 200 L (Confirmatory) | 15-FEB-2025 | South San Francisco (Bldg 3) |

---

### **4. Study Protocol: Orientation and Placement**

#### **4.1. Definition of Orientations**
1.  **Upright (Control):** Containers are placed vertically on the stability chamber shelves. The Drug Substance (DS) remains in contact only with the glass walls. There is a headspace of approximately 15% (nitrogen overlaid).
2.  **Inverted (Test):** Containers are placed upside down. The Drug Substance is in direct, continuous contact with the FluroTec® coated bromobutyl stopper. This maximizes the potential for leachable migration and surface-induced denaturation.

#### **4.2. Analytical Testing Matrix**
To detect subtle changes induced by closure contact, a specialized suite of assays was employed:
*   **SEC-HPLC**: High-performance Size Exclusion Chromatography (for aggregation/fragmentation).
*   **RP-HPLC**: Reversed-Phase HPLC (for chemical purity and oxidation).
*   **Micro-Flow Imaging (MFI)**: For sub-visible particulate counts (2µm - 100µm).
*   **ICP-MS**: Inductively Coupled Plasma Mass Spectrometry (targeted for metal leachables like Zinc, Aluminum, and Silicon).
*   **GC-MS/LC-MS**: Non-targeted screening for organic leachables (antioxidants, plasticizers).

---

### **5. Results: Comparative Analysis (Upright vs. Inverted)**

#### **5.1. Aggregate Formation (SEC-HPLC)**
Aggregates are the primary concern for inverted storage due to the hydrophobic nature of the air-liquid-stopper interface.

**Table 1: Comparative SEC-HPLC Purity (%) - Batch GLUC-2025-001 (Storage: 5°C)**

| Timepoint (Mo) | Upright (Purity %) | Inverted (Purity %) | Delta (Δ) | High MW Species (Inverted) |
| :--- | :--- | :--- | :--- | :--- |
| 0 (Initial) | 99.42 | 99.42 | 0.00 | 0.21 |
| 3 | 99.40 | 99.38 | 0.02 | 0.24 |
| 6 | 99.38 | 99.35 | 0.03 | 0.28 |
| 12 | 99.31 | 99.25 | 0.06 | 0.35 |
| 18 | 99.25 | 99.18 | 0.07 | 0.42 |
| 24 | 99.18 | 99.10 | 0.08 | 0.49 |
| 36 | 99.05 | 98.92 | 0.13 | 0.58 |

*Statistical Note: The p-value for the difference in purity at 36 months was 0.042 (Alpha = 0.05), indicating a statistically significant but clinically negligible increase in aggregation for inverted samples.*

#### **5.2. Sub-visible Particulate Matter (USP <787>/<788>)**
The contact with the elastomer can potentially introduce silicone oil droplets or elastomeric fragments.

**Table 2: MFI Data (Particles/mL) - Batch GLUC-2025-002 (Storage: 25°C - 6 Months)**

| Particle Size | Upright (T=6) | Inverted (T=6) | USP <788> Limit |
| :--- | :--- | :--- | :--- |
| ≥ 10 µm | 142 | 215 | 6000 |
| ≥ 25 µm | 12 | 19 | 600 |
| **Silicone Oil-like** | 45 | 110 | N/A (Internal Trend) |

---

### **6. Leachables Assessment (Inverted Orientation Only)**

Leachables were monitored using a risk-based approach focusing on the extractable profile of the CCS-S-042 stopper.

#### **6.1. Organic Leachables (GC-MS/LC-MS)**
Three specific compounds were tracked: BHT (Antioxidant), Irganox 1010, and Palmitic Acid.

**Table 3: Organic Leachable Quantification (ng/mL) - Batch GLUC-2025-001**

| Compound | T=0 | T=12 (5°C) | T=36 (5°C) | T=6 (25°C) | AET* (Limit) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BHT | < LOD | 4.2 | 8.1 | 15.4 | 150 |
| Irganox 1010 | < LOD | < LOQ | 2.5 | 5.8 | 150 |
| Palmitic Acid | 12.0 | 14.5 | 18.2 | 22.1 | 500 |

*\*AET: Analytical Evaluation Threshold based on a 1.5 µg/day Safety Concern Threshold (SCT).*

#### **6.2. Elemental Leachables (ICP-MS)**
The bromobutyl stopper contains Zinc as a vulcanizing agent.

**Table 4: Metal Ion Migration (ppb) - Batch GLUC-2025-003**

| Element | Upright (36 mo) | Inverted (36 mo) | PDE (Permitted Daily Exposure) |
| :--- | :--- | :--- | :--- |
| **Zinc (Zn)** | 5.2 | 14.8 | 13000 |
| **Aluminum (Al)**| 2.1 | 3.5 | 600 |
| **Silicon (Si)** | 450 | 485 | N/A |

---

### **7. Protein-Stopper Interaction: Mathematical Modeling**

To quantify the adsorption kinetics of Glucogen-XR onto the ETFE-coated stopper, a modified Langmuir Adsorption Isotherm was applied:

$$ \Gamma = \frac{\Gamma_{max} \cdot K_a \cdot C}{1 + K_a \cdot C} $$

Where:
*   $\Gamma$: Surface concentration of Glucogen-XR ($mg/m^2$)
*   $\Gamma_{max}$: Maximum adsorption capacity
*   $K_a$: Equilibrium affinity constant
*   $C$: Bulk concentration of DS (50 mg/mL)

**Calculated Values for Glucogen-XR:**
*   $\Gamma_{max}$: 2.15 $mg/m^2$
*   $K_a$: 0.12 $mL/mg$

*Conclusion:* The ETFE coating effectively reduces the adsorption potential by 85% compared to uncoated bromobutyl, maintaining the potency of the DS even in the inverted orientation.

---

### **8. Step-by-Step Stability Protocol for Orientation Assessment (SOP-GHS-0098)**

1.  **Aseptic Filling:** Fill 500 mL glass carboys with 425 mL of Glucogen-XR Drug Substance under Grade A conditions.
2.  **Stopper Application:** Insert CCS-S-042 stopper using an automated vacuum-assisted placement system to ensure uniform seating.
3.  **Capping:** Apply aluminum seal with a crimping force of $45 \pm 5$ N.
4.  **Labeling:** Affix orientation indicators ("THIS SIDE UP" or "INVERTED").
5.  **Placement:**
    *   Place Group A (Upright) on shelf 2A of Stability Chamber #402.
    *   Place Group B (Inverted) on shelf 2B of Stability Chamber #402, utilizing custom-designed stainless steel racks to prevent tipping.
6.  **Sampling:** At specified intervals, remove 3 containers per group.
7.  **Equilibration:** Allow inverted containers to stand upright for 4 hours at 5°C prior to opening to ensure all liquid has drained from the stopper surface, minimizing loss during sampling.

---

### **9. Conclusion**
The comparative stability data between the upright and inverted orientations demonstrate that Glucogen-XR is robust when in contact with the primary closure system. While a minor increase in High Molecular Weight Species (HMWS) and trace migration of Zinc and BHT were observed in the inverted samples, all values remained well within the established shelf-life specifications and safety thresholds (AET/PDE).

**Based on these results, Google Health Sciences concludes that the orientation of the Drug Substance during storage and transport does not adversely impact the Quality Target Product Profile (QTPP).** No specific "Store Upright" warning is required for the Drug Substance intermediate, though upright storage remains the preferred industrial practice.

---

### **10. References**
1.  **GHS-RPT-2025-044**: *Extractables/Leachables Final Report for Glucogen-XR CCS*.
2.  **ICH Q1A(R2)**: *Stability Testing of New Drug Substances and Products*.
3.  **USP <71>**: *Sterility Tests*.
4.  **Google Life Sciences Internal Method MET-GLUC-SEC-01**: *Quantification of Purity and Aggregation by SEC-HPLC*.

---

## Impact on Stability Results

### **3.2.S.7.3.3 Impact of Container Orientation and Placement Effects on Stability Results**

#### **1. Scope and Executive Summary**
This subsection of Module 3.2.S.7 (Stability) provides a comprehensive analysis of the impact of physical container orientation—specifically upright versus inverted/horizontal positioning—on the long-term stability profile of **Glucogen-XR (glucapeptide extended-release)** drug substance (DS).

In accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products** and **FDA Guidance for Industry: Q1A(R2) Stability Testing**, Google Health Sciences has conducted specialized "Orientation Stress Studies." These studies evaluate the potential for drug-to-closure interactions, leachable extraction from elastomeric components, and the physical stability of the glucapeptide molecule when in constant contact with the primary container closure system (CCS).

The data presented herein demonstrate that the stability of Glucogen-XR remains unaffected by container orientation, confirming the robustness of the 50L Single-Use Bioreactor bags and the 10L Type I Borosilicate Glass storage vessels utilized for long-term storage at -70°C and 2-8°C.

---

#### **2. Regulatory Framework and Quality Risk Management (QRM)**
The study design for orientation-dependent stability follows a risk-based approach as outlined in **ICH Q9 (Quality Risk Management)**.

| Regulatory Reference | Application to Glucogen-XR Orientation Studies |
| :--- | :--- |
| **ICH Q1A(R2)** | Defines the requirement to test products in orientations that represent "worst-case" contact with the closure. |
| **USP <1663>** | Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems. |
| **USP <1664>** | Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems. |
| **21 CFR 211.166** | Stability testing requirements for pharmaceutical products. |
| **ICH Q5C** | Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products. |

**Risk Assessment Parameters:**
1.  **Leachable Migration:** Risk of monomers or antioxidants migrating from the stopper/seal into the glucapeptide matrix.
2.  **Adsorption:** Potential for the peptide to adsorb onto the silicone oil or elastomeric surface of the closure.
3.  **Aggregation:** Shear stress at the air-liquid-closure interface during handling or orientation shifts.

---

#### **3. Study Design and Methodology**

##### **3.1 Batch Selection**
Three primary registration batches of Glucogen-XR DS were utilized for this assessment. All batches were manufactured at the Google Health Sciences South San Francisco facility (Building 4, Suite 200).

| Batch Number | Scale | Date of Manufacture | Storage Temperature | Container System |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | -70°C ± 5°C | 10L Type I Glass |
| **GLUC-2025-002** | 2000L | 02-FEB-2025 | -70°C ± 5°C | 10L Type I Glass |
| **GLUC-2025-003** | 2000L | 25-FEB-2025 | -70°C ± 5°C | 10L Type I Glass |

##### **3.2 Protocol for Orientation Testing (Protocol ID: GHS-STB-2025-PRO-09)**
To determine the impact of orientation, a "Bracketed Worst-Case" protocol was executed:

1.  **Upright (Control):** Containers stored in the standard vertical position, minimizing contact between the DS and the stopper.
2.  **Inverted (Stress):** Containers stored upside down, ensuring 100% contact between the DS liquid phase and the elastomeric closure throughout the duration of the study.
3.  **Horizontal (Representative):** Containers stored on their side to simulate potential shifting during international cold-chain logistics.

**Statistical Power Calculation:**
The sample size ($n=3$ per batch, per time point) was determined using a Power Analysis where $\alpha = 0.05$ and $\beta = 0.20$ to detect a 0.5% difference in Main Peak purity via SE-HPLC.

---

#### **4. Analytical Testing Program**

The analytical matrix for orientation impact focuses on attributes sensitive to surface interactions.

| Attribute | Method ID | Specification Limit | Rationale for Inclusion |
| :--- | :--- | :--- | :--- |
| **Purity (SE-HPLC)** | GHS-ANA-HPLC-01 | $\ge 98.0\%$ Main Peak | Detects aggregation/fragmentation. |
| **Purity (RP-HPLC)** | GHS-ANA-HPLC-02 | $\ge 95.0\%$ Main Peak | Detects oxidation/deamidation. |
| **Sub-visible Particles** | USP <788> | $\le 6000$ ($\ge 10\mu m$) | Detects protein-leachable complexes. |
| **Leachables (GC-MS)** | GHS-ANA-MS-12 | Below AET | Identifies closure-derived contaminants. |
| **Potency (Bioassay)** | GHS-BIO-004 | 80% - 125% Reference | Ensures functional stability. |

---

#### **5. Stability Results: Upright vs. Inverted Comparison**

##### **5.1 SEC-HPLC (Aggregation Analysis)**
The following table summarizes the high-molecular-weight (HMW) species formation for Batch **GLUC-2025-001** over 12 months.

**Table 3.2.S.7.3.3-1: HMW Species (%) for Upright vs. Inverted Storage (Batch GLUC-2025-001)**

| Time Point | Upright (%) | Inverted (%) | Difference ($\Delta$) | p-value ($t$-test) |
| :--- | :--- | :--- | :--- | :--- |
| T=0 | 0.12 | 0.12 | 0.00 | N/A |
| T=3m | 0.14 | 0.15 | 0.01 | 0.82 |
| T=6m | 0.18 | 0.19 | 0.01 | 0.77 |
| T=9m | 0.22 | 0.23 | 0.01 | 0.64 |
| T=12m | 0.25 | 0.27 | 0.02 | 0.45 |

*Data Interpretation:* The difference in aggregation rates between upright and inverted containers is statistically insignificant ($p > 0.05$). The glucapeptide molecule does not exhibit preferential aggregation at the elastomer interface.

##### **5.2 Leachable Profile Assessment (GC-MS/LC-MS)**
Extensive leachable testing was performed at T=12 months to evaluate if orientation increased the migration of vulcanizing agents or plasticizers.

**Table 3.2.S.7.3.3-2: Leachable Analysis (T=12 Months, Batch GLUC-2025-002)**

| Analyte | Source | Upright Conc. (ppm) | Inverted Conc. (ppm) | Analytical Evaluation Threshold (AET) |
| :--- | :--- | :--- | :--- | :--- |
| **BHT** | Antioxidant | < LOD | 0.02 | 0.10 ppm |
| **Stearic Acid** | Lubricant | 0.05 | 0.08 | 0.50 ppm |
| **Silicone Oil** | Coating | 0.11 | 0.14 | Report |
| **N-Nitrosamines** | Process Impurity| ND | ND | 0.001 ppm |

*Conclusion:* While a marginal increase in Stearic Acid and BHT was noted in the inverted orientation, all values remained significantly below the AET and well within safety margins established by GHS Toxicology.

---

#### **6. Impact of Shipping Vibrations and Placement (Placement Effects)**
Beyond orientation, the "Placement Effect" within the stability chamber (top shelf vs. bottom shelf; near door vs. back of chamber) was evaluated to ensure uniformity of the stability data.

##### **6.1 Temperature Mapping Correlation**
Data from the South San Francisco Storage Facility (Chamber ID: GHS-REF-99) was correlated with stability pull results.

*   **Zone A (Near Cooling Fan):** Average Temp -71.2°C
*   **Zone B (Near Door):** Average Temp -68.5°C

**Table 3.2.S.7.3.3-3: Potency by Chamber Placement (T=6 Months, GLUC-2025-003)**

| Placement | Replicate 1 (%) | Replicate 2 (%) | Mean Potency (%) | RSD (%) |
| :--- | :--- | :--- | :--- | :--- |
| Top Shelf (Front) | 102.1 | 101.8 | 101.95 | 0.21 |
| Mid Shelf (Back) | 101.5 | 102.3 | 101.90 | 0.55 |
| Bottom Shelf (Door) | 100.9 | 101.2 | 101.05 | 0.21 |

*Statistical Note:* One-way ANOVA performed on potency results across 9 placements yielded an $F$-stat of 1.12 ($F_{crit} = 3.44$), indicating no significant placement effect.

---

#### **7. Calculation of Degradation Kinetics ($k$) based on Orientation**
To further quantify the impact, the first-order degradation rate constant ($k$) for the Main Peak (RP-HPLC) was calculated for both orientations at the accelerated storage condition (25°C/60% RH).

**Formula:**
$$\ln(C/C_0) = -kt$$
Where:
*   $C$ = Purity at time $t$
*   $C_0$ = Purity at time 0
*   $k$ = Rate constant

**Results for 25°C Stress:**
*   **$k_{upright}$:** $4.2 \times 10^{-4}$ day$^{-1}$
*   **$k_{inverted}$:** $4.4 \times 10^{-4}$ day$^{-1}$

The similarity in $k$ values suggests that the activation energy ($E_a$) required for degradation is not lowered by contact with the container closure interface.

---

#### **8. Step-by-Step Procedure for Sample Pulling and Orientation Verification**
To ensure the integrity of the data presented, the following Standard Operating Procedure (SOP-STB-044) was followed:

1.  **Verification:** Prior to pulling, the Stability Technician (ST) verifies the container orientation marker (GHS-LBL-01).
2.  **Acclimatization:** Samples removed from -70°C must be thawed at 2-8°C for exactly 12 hours before analysis.
3.  **Inversion Cycle:** For inverted samples, the container must be gently swirled 3 times to incorporate any condensed droplets on the stopper into the bulk liquid prior to sampling.
4.  **Visual Inspection:** Conducted under a Mettler-Toledo polarized light station to detect visible particulates ($>$ 100 $\mu$m) potentially shed from the stopper.

---

#### **9. Detailed Observations on Sub-visible Particulates (USP <788>)**
A critical concern for peptide biologics stored in contact with elastomeric seals is the formation of sub-visible particles (SvP).

**Table 3.2.S.7.3.3-4: HIAC Particle Counts (Cumulative per mL)**

| Orientation | Batch | $\ge 10 \mu m$ | $\ge 25 \mu m$ | Observation |
| :--- | :--- | :--- | :--- | :--- |
| Upright | GLUC-2025-001 | 142 | 12 | Normal |
| Inverted | GLUC-2025-001 | 168 | 15 | No significant increase |
| Upright | GLUC-2025-002 | 115 | 8 | Normal |
| Inverted | GLUC-2025-002 | 129 | 11 | No significant increase |

---

#### **10. Conclusion**
The extensive stability data generated across three registration batches (**GLUC-2025-001, 002, 003**) demonstrate that the orientation of the container closure system does not adversely affect the quality, safety, or efficacy of Glucogen-XR drug substance.

*   **Chemical Stability:** No significant difference in deamidation or oxidation (RP-HPLC).
*   **Physical Stability:** No significant increase in aggregation (SEC-HPLC) or sub-visible particles (USP <788>).
*   **Leachable Safety:** All leachable species identified in inverted containers remain below the toxicological threshold of concern (TTC).

Based on these results, Google Health Sciences concludes that Glucogen-XR DS is robust to orientation-induced stress during storage and transit. No special instructions regarding upright storage are required for the drug substance; however, standard cGMP vertical storage remains the preferred facility practice.

---

**End of Subsection**

*Footnotes:*
1. *GHS-RPT-2025-442: Statistical Analysis of Orientation Stress Testing.*
2. *Reference: Cleland et al., "The Development of Stable Protein Formulations: A Review," Critical Reviews in Therapeutic Drug Carrier Systems, 2024.*
3. *All analytical methods validated under GHS-VAL-2024-XXX.*

---

# Batch Data Summary

## Registration Batches Stability

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7: STABILITY (DRUG SUBSTANCE)
### SUBSECTION 3.2.S.7.3: REGISTRATION BATCHES STABILITY DATA SUMMARY

---

#### 3.2.S.7.3.1. Executive Overview of Registration Stability Program
Google Health Sciences (GHS), a Division of Google Cloud Life Sciences, has implemented a comprehensive stability monitoring program for Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. This section provides a granular analysis of the stability profiles for the three primary registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) manufactured at the 3000 Innovation Drive facility in South San Francisco.

The stability program was designed in strict accordance with ICH Q1A(R2) *Stability Testing of New Drug Substances and Products*, ICH Q1E *Evaluation of Stability Data*, and ICH Q5C *Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*.

#### 3.2.S.7.3.2. Identification of Registration Batches
The registration stability campaign utilizes Drug Substance (DS) manufactured at the commercial scale (2,000L bioreactor volume) using the validated downstream purification process (GHS-PROC-774).

**Table 1: Identification of Primary Registration Stability Batches**
| Batch Number | Scale | Date of Manufacture | Site of Manufacture | Use | Storage Container |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000 L | 12-JAN-2025 | South San Francisco | Registration/Pivotal | 5L HDPE Bottle / LDPE Liner |
| **GLUC-2025-002** | 2,000 L | 28-JAN-2025 | South San Francisco | Registration/Pivotal | 5L HDPE Bottle / LDPE Liner |
| **GLUC-2025-003** | 2,000 L | 15-FEB-2025 | South San Francisco | Registration/Pivotal | 5L HDPE Bottle / LDPE Liner |

#### 3.2.S.7.3.3. Stability Protocol and Storage Conditions
The drug substance is stored as a frozen concentrate. To support the proposed shelf-life, the following storage conditions were evaluated:

1.  **Long-Term Storage:** $-70^{\circ}C \pm 10^{\circ}C$ (Proposed Storage Condition)
2.  **Accelerated Storage:** $-20^{\circ}C \pm 5^{\circ}C$
3.  **Stress/Short-Term Excursion:** $5^{\circ}C \pm 3^{\circ}C$ and $25^{\circ}C \pm 2^{\circ}C$ / $60\% RH \pm 5\% RH$

##### 3.2.S.7.3.3.1. Sampling Frequency
Testing intervals were defined to capture potential degradation kinetics:
*   **Long-Term ($-70^{\circ}C$):** 0, 3, 6, 9, 12, 18, 24, 36 months.
*   **Accelerated ($-20^{\circ}C$):** 0, 1, 3, 6 months.
*   **Stress ($5^{\circ}C$):** 0, 7, 14, 21, 30 days.

#### 3.2.S.7.3.4. Analytical Methodologies and Specification Limits
All stability-indicating assays were validated per ICH Q2(R1). The primary stability indicators include Reverse Phase HPLC (RP-HPLC) for purity, Size Exclusion Chromatography (SEC-HPLC) for aggregation, and Cell-Based Bioassay for potency.

**Table 2: Stability-Indicating Parameters and Acceptance Criteria**
| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual Inspection (USP <790>) | Clear to slightly opalescent, colorless |
| **pH** | Potentiometric (USP <791>) | $7.2 \pm 0.3$ |
| **Purity (RP-HPLC)** | GHS-QC-MTD-09 | $\ge 95.0\%$ Main Peak |
| **Aggregates (SEC-HPLC)** | GHS-QC-MTD-12 | $\le 1.0\%$ HMWP |
| **Charge Isoforms (icIEF)** | GHS-QC-MTD-15 | $65\% - 85\%$ Main Peak |
| **Potency (Bioassay)** | GLP-1R Activation | $80\% - 125\%$ of Reference Standard |
| **Oxidation (LC-MS)** | Peptide Mapping | $\le 2.5\%$ Met-Oxidation |

---

#### 3.2.S.7.3.5. Detailed Stability Data: Batch GLUC-2025-001
Batch GLUC-2025-001 represents the first conforming commercial-scale batch. Below is the longitudinal data for long-term storage ($-70^{\circ}C$).

**Table 3: Long-Term Stability Data for GLUC-2025-001 ($-70^{\circ}C$)**
| Interval (Months) | Appearance | pH | Purity (RP) % | Aggregates (SEC) % | Potency (%) | Met-Oxidation % |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0 (Initial)** | Conforms | 7.21 | 98.8 | 0.21 | 102 | 0.45 |
| **3** | Conforms | 7.20 | 98.7 | 0.22 | 104 | 0.48 |
| **6** | Conforms | 7.22 | 98.6 | 0.24 | 99 | 0.52 |
| **9** | Conforms | 7.19 | 98.5 | 0.23 | 101 | 0.55 |
| **12** | Conforms | 7.22 | 98.4 | 0.26 | 103 | 0.58 |

*(Note: Data for 18-36 months is ongoing and will be provided in a post-approval supplement).*

#### 3.2.S.7.3.6. Detailed Stability Data: Batch GLUC-2025-002
Batch GLUC-2025-002 was subjected to accelerated conditions to determine the degradation pathway, specifically focusing on deamidation and aggregation.

**Table 4: Accelerated Stability Data for GLUC-2025-002 ($-20^{\circ}C$)**
| Interval (Months) | Appearance | pH | Purity (RP) % | Aggregates (SEC) % | Charge Isoforms (icIEF) Main % | Potency (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0 (Initial)** | Conforms | 7.23 | 98.9 | 0.19 | 78.4 | 98 |
| **1** | Conforms | 7.22 | 98.2 | 0.35 | 77.1 | 97 |
| **3** | Conforms | 7.21 | 97.4 | 0.58 | 75.2 | 95 |
| **6** | Conforms | 7.19 | 96.1 | 0.89 | 72.8 | 91 |

**Observations for $-20^{\circ}C$:** A statistically significant ($p < 0.05$) increase in High Molecular Weight Protein (HMWP) was observed via SEC-HPLC, though levels remained well within the $\le 1.0\%$ specification.

#### 3.2.S.7.3.7. Statistical Evaluation of Stability Data (ICH Q1E)
Statistical analysis was performed using the Google Cloud Life Sciences AI-Stability Engine (v4.2). Linear regression analysis for Batch GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003 at $-70^{\circ}C$ indicates a degradation rate of approximately 0.04% purity loss per year.

##### 3.2.S.7.3.7.1. Calculation of Lower Confidence Limit
The shelf-life is determined by the time at which the 95% one-sided confidence limit for the mean curve intersects the acceptance criterion ($95.0\%$).

$$Y_{purity} = \beta_0 + \beta_1(t) + \epsilon$$
Where:
*   $\beta_0 = 98.85$ (Intercept)
*   $\beta_1 = -0.0034$ (Monthly degradation rate)
*   $t = time$

Based on the regression analysis, the predicted time to reach 95.0% purity at $-70^{\circ}C$ exceeds 60 months. GHS proposes an initial shelf-life of 24 months for the Drug Substance.

---

#### 3.2.S.7.3.8. Forced Degradation and Stress Studies
To demonstrate the stability-indicating nature of the assays, Batch GLUC-2025-003 was subjected to extreme conditions.

**Table 5: Forced Degradation Results (Batch GLUC-2025-003)**
| Stress Condition | Duration | Primary Degradation Mechanism | Purity Change | Mass Balance |
| :--- | :--- | :--- | :--- | :--- |
| **Thermal ($40^{\circ}C$)** | 7 Days | Aggregation/Fragmentation | -12.4% | 98.2% |
| **Photolysis (ICH Q1B)** | 1.2M Lux-hr | Oxidation (Trp, Met) | -8.1% | 97.5% |
| **Acid (0.1M HCl)** | 24 Hours | Deamidation | -15.2% | 96.8% |
| **Base (0.1M NaOH)** | 24 Hours | Deamidation/Racemization | -22.5% | 94.2% |
| **Oxidation (0.3% $H_2O_2$)** | 6 Hours | Methionine Oxidation | -18.9% | 99.1% |

#### 3.2.S.7.3.9. Photostability Testing (ICH Q1B)
Glucogen-XR DS was exposed to light according to ICH Q1B Option 2.
*   **Visible Light:** Exposure to $\ge 1.2$ million lux-hours.
*   **UV Light:** Exposure to $\ge 200$ watt-hours/square meter.

Samples were tested in primary packaging (transparent LDPE liner) and secondary packaging (HDPE bottle). Results indicated sensitivity to UV light in the primary liner, leading to the requirement for opaque secondary storage containers.

---

#### 3.2.S.7.3.10. Container Closure Integrity (CCI) During Stability
CCI was evaluated for the 5L HDPE Bottle system using vacuum decay (USP <1207>).

**Table 6: CCI Stability Monitoring**
| Batch | Timepoint | Method | Result | Limit |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | T=12M | Vacuum Decay | $1.2 \times 10^{-5}$ mbar·L/s | $< 5.0 \times 10^{-5}$ |
| GLUC-2025-002 | T=12M | Vacuum Decay | $0.9 \times 10^{-5}$ mbar·L/s | $< 5.0 \times 10^{-5}$ |

#### 3.2.S.7.3.11. Protocol for Freeze-Thaw Stability
Because Glucogen-XR is stored at $-70^{\circ}C$ and thawed for Drug Product manufacturing, freeze-thaw stability was rigorously assessed.

**Protocol GHS-STAB-FT-01:**
1.  **Freeze Cycle:** Ramp down at $1.0^{\circ}C/min$ to $-70^{\circ}C$; hold for 24 hours.
2.  **Thaw Cycle:** Thaw at room temperature ($25^{\circ}C$) until completely liquid.
3.  **Repetition:** Repeat for 5 cycles.

**Table 7: Freeze-Thaw Stability Results (Batch GLUC-2025-001)**
| Cycle | Purity (RP-HPLC) % | Aggregates (SEC) % | Sub-visible Particles ($\ge 10 \mu m$) |
| :--- | :--- | :--- | :--- |
| 0 | 98.8 | 0.21 | 120 per mL |
| 1 | 98.8 | 0.22 | 145 per mL |
| 3 | 98.7 | 0.25 | 180 per mL |
| 5 | 98.6 | 0.28 | 210 per mL |

*Conclusion:* Glucogen-XR DS is robust to at least 5 freeze-thaw cycles without significant impact on the Quality Target Product Profile (QTPP).

#### 3.2.S.7.3.12. Stability Commitments
Google Health Sciences commits to the following:
1.  Continuing the long-term stability studies for Batches GLUC-2025-001, -002, and -003 through the proposed 36-month period.
2.  Placing the first three commercial production batches on long-term stability.
3.  Reporting any Out-of-Specification (OOS) results or significant trends to the FDA within 15 working days.

#### 3.2.S.7.3.13. References
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Stability Testing of Biotechnological/Biological Products.
3.  **USP <788>:** Particulate Matter in Injections.
4.  **GHS-SOP-5509:** Handling of Stability Samples for Biologics.

---
**END OF SECTION**

---

## Clinical Batches Stability

### **3.2.S.7.3 Batch Analysis and Stability Summary: Clinical Batches**

---

#### **3.2.S.7.3.1 Introduction and Scope**
This section provides a comprehensive evaluation of the stability profile for Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) clinical batches. These batches were manufactured by Google Health Sciences (a Division of Google Cloud Life Sciences) at the 3000 Innovation Drive facility in South San Francisco, CA. 

The stability program for Glucogen-XR has been designed in strict accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*), **ICH Q5C** (*Stability Testing of Biotechnological/Biological Products*), and **ICH Q1E** (*Evaluation of Stability Data*). The primary objective is to establish a retest period and storage conditions that ensure the potency, purity, and molecular integrity of the GLP-1 receptor agonist over its intended lifecycle.

#### **3.2.S.7.3.2 Selection of Clinical Batches**
The stability data presented herein represent batches produced using the commercial-scale process (Process V2.1), utilizing the proprietary **GHS-CHO-001** (CHO-K1 GS knockout) cell line. These batches are representative of the material used in Phase IIb and Phase III clinical trials.

**Table 1: Identification of Glucogen-XR Clinical Stability Batches**
| Batch Number | Scale (L) | Manufacturing Date | Site of Manufacture | Use in Clinical Program |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | 12-JAN-2025 | South San Francisco (Bldg 4) | Phase IIb Dose-Ranging |
| **GLUC-2025-002** | 2,000L | 04-FEB-2025 | South San Francisco (Bldg 4) | Phase III (G-STORM-1) |
| **GLUC-2025-003** | 2,000L | 15-MAR-2025 | South San Francisco (Bldg 4) | Phase III (G-STORM-2) |
| **GLUC-2025-004** | 2,000L | 22-APR-2025 | South San Francisco (Bldg 4) | Registration/Stability |

---

#### **3.2.S.7.3.3 Stability Protocol and Study Design**
The stability studies are conducted under controlled environmental conditions. Glucogen-XR Drug Substance is stored in its primary container closure system: 10L High-Density Polyethylene (HDPE) carboys with platinum-cured silicone gaskets and sterile ported caps, mimicking the commercial storage configuration.

##### **3.2.S.7.3.3.1 Storage Conditions**
*   **Long-Term Storage:** -70°C ± 10°C (Ultra-Low Temperature Freezer, Equipment ID: ULT-GHS-098)
*   **Accelerated Storage:** -20°C ± 5°C (Standard Pharmaceutical Freezer)
*   **Stress Conditions:** 5°C ± 3°C (Refrigerated) and 25°C ± 2°C / 60% RH ± 5% RH (Ambient)

##### **3.2.S.7.3.3.2 Testing Frequency**
The testing schedule follows a matrixing/bracketing approach where appropriate, though the primary clinical batches are tested at all intervals:
*   **Long-Term (-70°C):** 0, 3, 6, 9, 12, 18, 24, 36, 48, 60 Months.
*   **Accelerated (-20°C):** 0, 1, 3, 6, 9, 12 Months.
*   **Stress (5°C):** 0, 1, 3, 6 Months.

---

#### **3.2.S.7.3.4 Analytical Methodologies and Acceptance Criteria**
Stability-indicating assays were validated per **ICH Q2(R1)**. The methods target the known degradation pathways of glucapeptides, including deamidation (Asparagine-28), oxidation (Methionine-8), and C-terminal truncation.

**Table 2: Stability-Indicating Parameters and Specifications**
| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual (USP <790>) | Clear to slightly opalescent; colorless |
| **Purity (Purity-RP)** | RP-HPLC (C18) | Main Peak ≥ 95.0% |
| **Impurities (Oxidized)** | RP-HPLC | Total Oxidized Species ≤ 2.0% |
| **Purity (SEC)** | SE-HPLC | Monomer ≥ 98.0%; Aggregates ≤ 1.5% |
| **Charge Variants** | iCIEF | Main Peak: 65.0-75.0%; Acidic ≤ 25.0% |
| **Potency (In Vitro)** | Cell-based cAMP Assay | 80% – 125% of Reference Standard |
| **pH** | Potentiometric | 6.8 ± 0.3 |
| **Endotoxin** | LAL (USP <85>) | ≤ 0.5 EU/mg |

---

#### **3.2.S.7.3.5 Comprehensive Stability Data Tables**

##### **3.2.S.7.3.5.1 Batch GLUC-2025-001 (Long-Term: -70°C)**
*Container: 10L HDPE Carboy; Fill Volume: 8.5L*

| Month | Appearance | Purity (RP-HPLC) | Aggregates (SEC) | iCIEF (Main %) | Potency (%) | pH |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | Pass | 99.2% | 0.2% | 72.1% | 102% | 6.81 |
| **3** | Pass | 99.1% | 0.2% | 71.8% | 99% | 6.80 |
| **6** | Pass | 99.2% | 0.3% | 72.0% | 101% | 6.82 |
| **9** | Pass | 99.0% | 0.3% | 71.5% | 104% | 6.81 |
| **12**| Pass | 98.9% | 0.4% | 70.9% | 98% | 6.81 |

##### **3.2.S.7.3.5.2 Batch GLUC-2025-001 (Accelerated: -20°C)**
| Month | Appearance | Purity (RP-HPLC) | Aggregates (SEC) | iCIEF (Main %) | Potency (%) | pH |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | Pass | 99.2% | 0.2% | 72.1% | 102% | 6.81 |
| **1** | Pass | 98.8% | 0.4% | 70.2% | 97% | 6.80 |
| **3** | Pass | 98.1% | 0.7% | 68.5% | 95% | 6.82 |
| **6** | Pass | 97.4% | 1.1% | 66.8% | 92% | 6.81 |

---

#### **3.2.S.7.3.6 Degradation Kinetic Analysis**
Statistical evaluation of the clinical batches was performed using the **Google Life Sciences Alpha-Fold Stability Predictor (v4.2)** and traditional linear regression analysis.

##### **3.2.S.7.3.6.1 Purity Decline (RP-HPLC)**
For the primary degradation product (Asp-28 deamidated variant), the rate constant ($k$) at -70°C was calculated as:
$$k = \frac{\ln(C_0/C_t)}{t}$$
Where $C_0$ is the initial purity (99.2%) and $C_t$ is the purity at 12 months. The calculated degradation rate is negligible ($<0.01\%$ per month), supporting a shelf-life of at least 60 months under ultra-low temperatures.

##### **3.2.S.7.3.6.2 Arrhenius Equation Modeling**
To predict stability at 5°C, the Arrhenius equation was applied:
$$k = A \cdot e^{-E_a/RT}$$
Based on accelerated data at -20°C and 5°C, the Activation Energy ($E_a$) for Glucogen-XR aggregation was determined to be $84.2 \text{ kJ/mol}$, suggesting high sensitivity to thermal excursions above the freezing point.

---

#### **3.2.S.7.3.7 Step-by-Step Stability Sampling Protocol (SOP-GHS-STAB-004)**

1.  **Retrieval:** At each time point, the designated stability carboy is retrieved from the ULT freezer by two operators (Qualified Person verification required).
2.  **Thawing:** The carboy is thawed at 2-8°C for $48 \pm 4$ hours. Mechanical agitation is strictly prohibited to prevent shear-induced aggregation.
3.  **Aseptic Aliquoting:** Inside a Class 100 (ISO 5) laminar flow hood, 10 x 5mL aliquots are withdrawn using a sterile, single-use pipette.
4.  **Labeling:** Each vial is labeled with:
    *   Batch ID (e.g., GLUC-2025-001)
    *   Timepoint (e.g., T=12M)
    *   Condition (e.g., -70°C)
5.  **Distribution:** Vials are distributed to the Quality Control (QC) laboratories for Purity, Potency, and Microbiological testing.

---

#### **3.2.S.7.3.8 Cumulative Data Evaluation and Conclusion**
As of the current reporting period (August 2025), all clinical batches (GLUC-2025-001 through GLUC-2025-004) remain well within the established specifications at the long-term storage condition (-70°C).

*   **Purity Trends:** No significant downward trend in RP-HPLC purity has been observed at -70°C. At -20°C, a slight increase in the "pre-peak" (deamidated) region is noted but remains below the 2.0% threshold.
*   **Aggregation:** SEC data indicates that high molecular weight species (HMWS) remain $<0.5\%$ at -70°C.
*   **Biological Activity:** The cell-based potency assay confirms that the GLP-1 receptor activation remains robust, with no loss of pharmacological efficacy.

**Conclusion:** The stability data support the use of clinical batches for the duration of the Phase III G-STORM clinical program. A retest period of **24 months** is currently assigned to Glucogen-XR Drug Substance when stored at -70°C ± 10°C in the approved HDPE container closure system.

---
**Footnotes & References:**
1.  *ICH Q1A(R2) Stability Testing Guidelines.*
2.  *Google Health Sciences Internal Report GHS-REP-2025-045: Statistical Evaluation of Glucapeptide Degradation.*
3.  *USP <1225> Validation of Compendial Procedures.*
4.  *SOP-GHS-STAB-004: Environmental Monitoring of Stability Chambers.*

---

## Pilot and Commercial Scale Comparison

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S: DRUG SUBSTANCE
### 3.2.S.4: CONTROL OF DRUG SUBSTANCE
#### 3.2.S.4.4: BATCH ANALYSES

---

### SUBSECTION: Pilot and Commercial Scale Comparison (Glucogen-XR / glucapeptide ER)

#### 1.0 Executive Summary of Scale-up Comparison
This subsection provides a comprehensive analytical and stability-based comparison between Pilot Scale batches (manufactured at the Google Health Sciences [GHS] Process Development Facility) and Commercial Scale batches (manufactured at the GHS South San Francisco Commercial Manufacturing Site, Facility ID: 3000-INN-CA). 

The scale-up of Glucogen-XR (glucapeptide extended-release) from the 200L Pilot Scale to the 2,000L Commercial Scale involves a 10-fold increase in bioreactor volume. This document demonstrates that the transition maintains Product Quality Attributes (PQAs), Impurity Profiles, and Stability Characteristics in accordance with **ICH Q5E (Comparability of Biotechnological/Biological Products)** and **ICH Q11 (Development and Manufacture of Drug Substances)**.

#### 2.0 Manufacturing Scale Definitions and Batch Identification
The following batches represent the pivotal datasets used to establish comparability. All batches were manufactured using the proprietary GHS-CHO-001 cell line (CHO-K1 GS knockout) utilizing a chemically defined, animal-origin-free (AOF) perfusion-based process.

##### Table 1: Summary of Batches Evaluated in Scale Comparison
| Batch Number | Scale | Purpose | Manufacturing Site | Date of Manufacture |
|:---|:---|:---|:---|:---|
| **GLUC-2025-P01** | 200 L | Phase 2 Clinical Material | GHS Pilot Plant (Bldg 4) | 12-JAN-2025 |
| **GLUC-2025-P02** | 200 L | Phase 3 Clinical Material | GHS Pilot Plant (Bldg 4) | 04-MAR-2025 |
| **GLUC-2025-P03** | 200 L | Stability/Retain Batch | GHS Pilot Plant (Bldg 4) | 22-MAY-2025 |
| **GLUC-2025-C01** | 2,000 L | Process Validation (PPQ) 1 | GHS Commercial (Bldg 12) | 10-AUG-2025 |
| **GLUC-2025-C02** | 2,000 L | Process Validation (PPQ) 2 | GHS Commercial (Bldg 12) | 28-SEP-2025 |
| **GLUC-2025-C03** | 2,000 L | Process Validation (PPQ) 3 | GHS Commercial (Bldg 12) | 15-NOV-2025 |

#### 3.0 Comparative Critical Process Parameters (CPPs)
To ensure the stability profile of the Drug Substance (DS) remains consistent, the fundamental bioreactor environment was scaled using a constant power-per-volume ($P/V$) and oxygen transfer coefficient ($k_L a$) strategy.

##### 3.1 Upstream Scale-up Calculations
The scale-up factor ($S_f$) is defined as:
$$S_f = \frac{V_{commercial}}{V_{pilot}} = \frac{2,000L}{200L} = 10$$

The impeller tip speed ($v_t$) was maintained within $\pm 15\%$ to minimize shear stress on the GHS-CHO-001 membranes:
$$v_t = \pi \cdot D \cdot N$$
Where $D$ is impeller diameter and $N$ is rotational speed (RPM).

##### Table 2: Comparative Bioreactor Parameters (Mean Values)
| Parameter | Unit | Pilot Scale (200L) | Commercial Scale (2,000L) | Result |
|:---|:---|:---|:---|:---|
| **Temperature** | °C | 36.5 ± 0.2 | 36.5 ± 0.1 | Equivalent |
| **pH Setpoint** | - | 6.95 ± 0.05 | 6.95 ± 0.03 | Equivalent |
| **Dissolved Oxygen (DO)** | % | 40% | 40% | Equivalent |
| **$VCD_{max}$** | $10^6$ cells/mL | $145.2 \pm 12$ | $148.7 \pm 9$ | Equivalent |
| **Specific Productivity ($q_p$)** | pg/cell/day | 28.4 | 29.1 | Equivalent |

#### 4.0 Analytical Comparability Testing (Release Data)
A "side-by-side" analysis was conducted using validated compendial and proprietary assays. All testing was performed at the GHS Central Quality Control Laboratory.

##### Table 3: Batch Analysis Comparison - Primary Quality Attributes
| Test Attribute | Method | Specification | Pilot (Mean, n=3) | Commercial (Mean, n=3) |
|:---|:---|:---|:---|:---|
| **Appearance** | Visual | Clear, colorless | Conforms | Conforms |
| **Purity (SEC-HPLC)** | GHS-M-102 | $\geq 98.0\%$ | 99.4% | 99.5% |
| **HMW Species** | SEC-HPLC | $\leq 1.0\%$ | 0.4% | 0.3% |
| **Purity (Reduced SDS-PAGE)** | USP <127> | $\geq 95.0\%$ | 98.9% | 99.1% |
| **Charge Profile (iCE)** | GHS-M-405 | 65-75% Main | 71.2% | 70.8% |
| **Host Cell Protein (HCP)** | ELISA | $\leq 10$ ppm | 4.2 ppm | 3.8 ppm |
| **Host Cell DNA (hcDNA)** | qPCR | $\leq 1$ pg/mg | 0.2 pg/mg | 0.15 pg/mg |
| **Potency (Cell-based)** | GHS-M-800 | 80-125% | 102% | 104% |

#### 5.0 Stability Data Comparison (Real-Time 2-8°C)
Stability is the primary indicator of whether the scale-up process introduced subtle conformational changes or post-translational modifications (PTMs).

##### 5.1 Protocol for Comparative Stability Study
1. **Container Closure:** 10mL Type I Borosilicate glass vials with FluroTec® coated stoppers.
2. **Storage Conditions:** $5^\circ C \pm 3^\circ C$ (Long Term), $25^\circ C \pm 2^\circ C$ (Accelerated).
3. **Sampling Points:** 0, 3, 6, 9, 12, 18, 24 months.
4. **Statistical Analysis:** Analysis of Covariance (ANCOVA) to compare degradation rates (slopes) between scales.

##### Table 4: Comparative Stability Data - Purity by SEC-HPLC (Storage: 5°C)
| Month | GLUC-2025-P01 (%) | GLUC-2025-P02 (%) | GLUC-2025-C01 (%) | GLUC-2025-C02 (%) |
|:---|:---|:---|:---|:---|
| 0 | 99.4 | 99.3 | 99.5 | 99.5 |
| 3 | 99.4 | 99.2 | 99.4 | 99.4 |
| 6 | 99.3 | 99.1 | 99.3 | 99.4 |
| 9 | 99.2 | 99.0 | 99.2 | 99.3 |
| 12 | 99.1 | 98.9 | 99.2 | 99.1 |

*Statistical Note: The p-value for the slope comparison between Pilot and Commercial scale is $p = 0.842$, indicating no significant difference in the rate of aggregate formation.*

#### 6.0 Forced Degradation Profile Comparison
To further confirm comparability, one batch from each scale (**GLUC-2025-P03** and **GLUC-2025-C03**) was subjected to extreme stress conditions to determine if the degradation pathways were identical.

##### 6.1 Stress Procedures
*   **Thermal Stress:** $40^\circ C$ for 21 days.
*   **Photostability:** 1.2 million lux-hours (ICH Q1B).
*   **Oxidative Stress:** 0.3% $H_2O_2$ for 4 hours.
*   **Low pH:** pH 3.0 for 12 hours.

##### Table 5: Forced Degradation Results (Glucapeptide Purity by RP-HPLC)
| Condition | Pilot (GLUC-2025-P03) | Commercial (GLUC-2025-C03) | Delta ($\Delta$) |
|:---|:---|:---|:---|
| **Control (T=0)** | 99.2% | 99.3% | 0.1% |
| **Thermal ($40^\circ C$)** | 88.4% | 88.6% | 0.2% |
| **UV Exposure** | 94.1% | 93.9% | 0.2% |
| **Oxidative ($H_2O_2$)** | 82.5% | 82.2% | 0.3% |
| **Acid (pH 3.0)** | 91.8% | 92.0% | 0.2% |

The degradation fingerprints (chromatographic profiles) were overlaid, showing that no new degradation products were formed in the commercial-scale material.

#### 7.0 Extended Characterization: Peptide Mapping (LC-MS/MS)
The primary sequence and PTMs were evaluated via Tryptic Map and ESI-QTOF Mass Spectrometry.

1. **Protocol:** DS samples were reduced with DTT, alkylated with Iodoacetamide, and digested with Trypsin (1:20 ratio).
2. **Analysis:** Peptides separated via C18 Reverse-Phase Gradient (Water/ACN + 0.1% FA).
3. **Data Analysis:** Comparison of "fingerprint" UV chromatograms and TIC (Total Ion Chromatograms).

**Results:**
*   **Sequence Coverage:** 100% for both Pilot (P01) and Commercial (C01).
*   **Deamidation (Asn-28):** 1.2% (Pilot) vs 1.1% (Commercial).
*   **Oxidation (Met-14):** 0.4% (Pilot) vs 0.5% (Commercial).
*   **Glycation:** Below Limit of Quantitation (<0.1%) for both.

#### 8.0 Conclusion
Based on the comprehensive analytical data, stability profiles, and forced degradation studies, Google Health Sciences concludes that Glucogen-XR Drug Substance manufactured at the 2,000L Commercial Scale is highly comparable to the 200L Pilot Scale material. The stability-indicating profiles (SEC, iCE, and Potency) remain within established specification limits and show identical degradation kinetics. The commercial process is therefore validated to produce material suitable for global therapeutic use.

---
**References:**
1. ICH Q5E: Comparability of Biotechnological/Biological Products.
2. ICH Q1A(R2): Stability Testing of New Drug Substances and Products.
3. USP <129>: Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies and Peptides.
4. GHS Internal Standard Operating Procedure: SOP-QC-7742 (Scale-up Comparability).

---

# Statistical Evaluation of Stability Data

## Trend Analysis

### 3.2.S.7.3.2 Statistical Evaluation of Stability Data: Trend Analysis

---

#### 3.2.S.7.3.2.1 Introduction and Scope of Trend Analysis
This subsection provides an exhaustive trend analysis of the stability data generated for Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist drug substance. In accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, **ICH Q1E Evaluation of Stability Data**, and **ICH Q5C Quality of Biotechnological Products**, Google Health Sciences (GHS) has implemented a robust statistical framework to monitor the degradation kinetics and identify shifts in the stability profile over time.

The primary objective of this trend analysis is to ensure that the drug substance remains within the established specifications throughout its retest period and to identify any "Out of Trend" (OOT) or "Out of Expectation" (OOE) results that, while potentially within specification (WOS), deviate from the historical or statistically predicted behavior of the peptide.

#### 3.2.S.7.3.2.2 Statistical Methodology and Software
All statistical computations and trend modeling were performed using the validated GHS-BioStat Platform (Version 4.2.1), which integrates R-based analytical engines with Google Cloud Life Sciences' high-performance computing environment.

**Statistical Parameters:**
*   **Confidence Level:** 95% (Two-sided)
*   **Significance Level ($\alpha$):** 0.05
*   **Model Selection:** Ordinary Least Squares (OLS) regression for linear trends; Nonlinear regression (Arrhenius-based) for accelerated conditions.
*   **Poolability Testing:** Analysis of Covariance (ANCOVA) was utilized to determine if data from different batches could be pooled to establish a common shelf-life.

#### 3.2.S.7.3.2.3 Data Selection and Batch Genealogy
The following primary stability batches (produced at the South San Francisco facility, Site ID: GHS-SSF-01) were included in this comprehensive trend analysis:

**Table 3.2.S.7.3.2-1: Batches Included in Longitudinal Trend Analysis**

| Batch Number | Scale | Manufacturing Date | Purpose | Cell Line ID |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 2000L | 12-JAN-2025 | Primary Stability / Clinical | GHS-CHO-001 |
| GLUC-2025-002 | 2000L | 04-FEB-2025 | Primary Stability / Clinical | GHS-CHO-001 |
| GLUC-2025-003 | 2000L | 28-FEB-2025 | Primary Stability / Validation | GHS-CHO-001 |
| GLUC-2025-004 | 2000L | 15-MAR-2025 | Registration / PPQ Batch | GHS-CHO-001 |
| GLUC-2025-005 | 2000L | 02-APR-2025 | Registration / PPQ Batch | GHS-CHO-001 |

---

#### 3.2.S.7.3.2.4 Quantitative Analysis of Primary Stability Indicators

##### 3.2.S.7.3.2.4.1 Purity by RP-HPLC (Reversed-Phase High-Performance Liquid Chromatography)
The purity of Glucogen-XR is a critical quality attribute (CQA). Trend analysis focuses on the rate of formation of related substances (deamidated, oxidized, and truncated species).

**Regression Equations for Main Peak (%) Loss (Long-term: 5°C ± 3°C):**
The degradation rate ($k$) follows pseudo-zero-order kinetics under refrigerated conditions.

*   **GLUC-2025-001:** $Y = -0.012x + 99.45$ ($R^2 = 0.998$)
*   **GLUC-2025-002:** $Y = -0.014x + 99.38$ ($R^2 = 0.997$)
*   **GLUC-2025-003:** $Y = -0.011x + 99.51$ ($R^2 = 0.999$)

**Table 3.2.S.7.3.2-2: Trend Data for RP-HPLC Purity (%) - Storage at 5°C ± 3°C**

| Time (Months) | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Mean (N=3) | SD | %RSD |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 (Initial) | 99.45 | 99.38 | 99.51 | 99.45 | 0.065 | 0.065 |
| 3 | 99.41 | 99.34 | 99.48 | 99.41 | 0.070 | 0.070 |
| 6 | 99.38 | 99.30 | 99.44 | 99.37 | 0.071 | 0.071 |
| 9 | 99.34 | 99.25 | 99.41 | 99.33 | 0.080 | 0.081 |
| 12 | 99.31 | 99.22 | 99.38 | 99.30 | 0.081 | 0.082 |
| 18 | 99.23 | 99.13 | 99.31 | 99.22 | 0.090 | 0.091 |
| 24 | 99.16 | 99.04 | 99.25 | 99.15 | 0.105 | 0.106 |

*Statistical Interpretation:* The slope of the regression line indicates a degradation rate of approximately 0.013% purity loss per month at 5°C. Extrapolation of the 95% Lower Confidence Interval (LCI) indicates that the purity will remain well above the specification limit of ≥ 95.0% for at least 60 months.

---

##### 3.2.S.7.3.2.4.2 Analysis of High Molecular Weight Species (HMWS) by SE-HPLC
Size Exclusion Chromatography is utilized to monitor the formation of covalent and non-covalent aggregates.

**Table 3.2.S.7.3.2-3: Trend Data for HMWS (%) - Storage at 25°C ± 2°C / 60% RH ± 5% RH (Accelerated)**

| Time (Months) | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Average Trend | Upper 95% CI |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 0.12 | 0.15 | 0.11 | 0.13 | 0.15 |
| 1 | 0.28 | 0.31 | 0.26 | 0.28 | 0.32 |
| 2 | 0.45 | 0.49 | 0.42 | 0.45 | 0.51 |
| 3 | 0.62 | 0.68 | 0.59 | 0.63 | 0.70 |
| 6 | 1.15 | 1.24 | 1.08 | 1.16 | 1.28 |

*Trend Evaluation:* Accelerated storage shows a linear increase in HMWS ($k \approx 0.17\%$ per month). Under long-term conditions (5°C), the rate of HMWS formation is negligible ($< 0.01\%$ per month), demonstrating the efficacy of the extended-release glucapeptide formulation's stabilizing agents.

---

#### 3.2.S.7.3.2.5 Protocol for Out-of-Trend (OOT) Investigation (SOP-QC-772)

To maintain regulatory compliance and ensure product safety, GHS follows a systematic protocol for identifying and investigating OOT results.

**Step 1: OOT Identification (Statistical Filtering)**
An OOT result is defined as a stability data point that falls outside the 3-sigma limits of the historical regression line.
*   *Calculation:* $Trend Limit = Predicted Value \pm (t \times SE)$
*   *Reference:* USP <1010> Interpretation of Analytical Data.

**Step 2: Phase I Investigation (Laboratory Assessment)**
*   Examination of HPLC chromatograms for baseline noise or integration errors.
*   Verification of volumetric glassware and pipette calibrations (Equip ID: CAL-GHS-2025-09).
*   Review of mobile phase preparation logs (Batch Ref: MP-GLUC-001).

**Step 3: Phase II Investigation (Manufacturing Assessment)**
*   Review of Batch Production Records (BPRs) for the specific lot.
*   Assessment of Deviation Management System (TrackWise) for any manufacturing excursions (e.g., temperature spikes during protein A chromatography).

---

#### 3.2.S.7.3.2.6 Evaluation of Potency (Biological Activity)
Potency is assessed using a cell-based GLP-1 receptor activation assay (GHS-BIO-009). The target potency is 100% of the reference standard.

**Table 3.2.S.7.3.2-4: Potency Trend Summary (Long-term 5°C)**

| Batch ID | Initial (%) | 12 Months (%) | 24 Months (%) | Est. Loss/Year |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 102.1 | 101.4 | 100.8 | 0.65% |
| GLUC-2025-002 | 99.8 | 98.9 | 98.2 | 0.80% |
| GLUC-2025-003 | 101.5 | 100.9 | 100.1 | 0.70% |
| **Statistical Mean** | **101.1** | **100.4** | **99.7** | **0.72%** |

*Analysis:* The slope of the potency decline is not statistically different from zero ($p > 0.05$), indicating no significant loss of biological activity over the current reporting period.

---

#### 3.2.S.7.3.2.7 Arrhenius Kinetics and Shelf-Life Prediction
To support the proposed retest period, Arrhenius modeling was applied to the purity data from accelerated (25°C) and stressed (40°C) storage conditions.

**Formula:**
$$\ln(k) = \ln(A) - \frac{E_a}{RT}$$
Where:
*   $k$ = Rate constant
*   $E_a$ = Activation energy (calculated at 84.5 kJ/mol for Glucogen-XR)
*   $R$ = Gas constant ($8.314 \text{ J/mol}\cdot\text{K}$)
*   $T$ = Absolute temperature (K)

Based on these kinetics, the predicted shelf life at 5°C exceeds 48 months with a high degree of statistical confidence.

#### 3.2.S.7.3.2.8 Conclusion of Trend Analysis
The trend analysis for Glucogen-XR Drug Substance (Batches GLUC-2025-001 through GLUC-2025-005) confirms a highly stable profile. All parameters remain well within specifications. No significant OOT results have been identified. The regression analysis supports a retest period of 24 months when stored at 2-8°C, with the potential for extension as additional real-time data becomes available.

---
*End of Subsection 3.2.S.7.3.2*

---

## Poolability Assessment

### **3.2.S.7.3.2 Statistical Evaluation of Stability Data: Poolability Assessment**

---

#### **1. INTRODUCTION AND OBJECTIVE**

The determination of the shelf-life (retest period) for **Glucogen-XR (glucapeptide extended-release)** Drug Substance (DS) is based on the rigorous statistical evaluation of long-term stability data across multiple registration batches. In accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q1E** (*Evaluation of Stability Data*), Google Health Sciences (GHS) has conducted a comprehensive **Poolability Assessment**.

The primary objective of this assessment is to determine whether the stability data from three (3) primary registration batches—**GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003**—can be combined (pooled) to derive a single, common degradation rate and intercept. This statistical process ensures that the proposed retest period is representative of the commercial manufacturing process and accounts for inter-batch variability.

#### **2. REGULATORY AND STATISTICAL FRAMEWORK**

This evaluation adheres to the following regulatory standards:
1.  **ICH Q1E, Section 2.4:** *Data Analysis for One-Factor, Full-Design Studies.*
2.  **FDA Guidance for Industry:** *Q1E Evaluation of Stability Data (June 2004).*
3.  **USP <1010>:** *Analytical Data—Interpretation and Treatment.*
4.  **ISO 16269-4:** *Statistical Interpretation of Data.*

The poolability assessment employs a hierarchical testing strategy (Analysis of Covariance—ANCOVA) to evaluate if the slopes (degradation rates) and intercepts (initial values) of the stability profiles are significantly different at the $\alpha = 0.25$ significance level, as recommended by the FDA for stability data.

---

#### **3. BATCH CHARACTERIZATION AND DATA SELECTION**

Three primary validation batches of Glucogen-XR DS were manufactured at the Google Health Sciences South San Francisco facility (Building 4, Suite 200). All batches were produced using the proprietary **GHS-CHO-001** cell line and the standardized 2,000L perfusion bioreactor process.

##### **Table 1: Batch Identification and Attributes for Poolability Analysis**
| Batch Number | Scale | Date of Manufacture | Site | Intended Use |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000 L | 12-JAN-2025 | South San Francisco, CA | Registration / Clinical |
| **GLUC-2025-002** | 2,000 L | 28-JAN-2025 | South San Francisco, CA | Registration / Clinical |
| **GLUC-2025-003** | 2,000 L | 15-FEB-2025 | South San Francisco, CA | Registration / Clinical |

The critical quality attribute (CQA) selected for the primary poolability assessment is **Purity by RP-HPLC (% Main Peak)**, as it demonstrates the most consistent time-dependent change and is the most sensitive indicator of peptide degradation (primarily deamidation and oxidation).

---

#### **4. STATISTICAL METHODOLOGY: ANCOVA PROTOCOL**

The poolability assessment follows a sequential step-down procedure using a linear regression model:
$$Y_{ij} = \beta_{0i} + \beta_{1i}X_{ij} + \epsilon_{ij}$$
Where:
*   $Y_{ij}$ = Observed response for batch $i$ at time $j$.
*   $\beta_{0i}$ = Intercept (Initial value) for batch $i$.
*   $\beta_{1i}$ = Slope (Degradation rate) for batch $i$.
*   $X_{ij}$ = Time in months.
*   $\epsilon_{ij}$ = Random error term.

##### **4.1. Step 1: Test for Equality of Slopes (Parallelism)**
We test the null hypothesis $H_0: \beta_{1,1} = \beta_{1,2} = \beta_{1,3}$.
*   **Statistical Tool:** F-test for the interaction between Batch and Time.
*   **Significance Level:** $\alpha = 0.25$.
*   **Decision Rule:** If $p \ge 0.25$, slopes are considered similar and we proceed to Step 2. If $p < 0.25$, batches cannot be pooled for slope; the shelf life is determined by the "worst-case" batch.

##### **4.2. Step 2: Test for Equality of Intercepts**
If slopes are poolable, we test $H_0: \beta_{0,1} = \beta_{0,2} = \beta_{0,3}$ assuming a common slope.
*   **Statistical Tool:** F-test for the Batch effect.
*   **Significance Level:** $\alpha = 0.25$.
*   **Decision Rule:** If $p \ge 0.25$, intercepts are similar and data can be fully pooled. If $p < 0.25$, data are pooled for slope only, and separate intercepts are used for each batch.

---

#### **5. RAW DATA FOR PURITY BY RP-HPLC (%)**

The following data represents the long-term storage condition: **$5^\circ\text{C} \pm 3^\circ\text{C}$**.

##### **Table 2: Long-Term Stability Data for Poolability (Purity by RP-HPLC %)**
| Storage (Months) | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **0 (T0)** | 98.85 | 99.02 | 98.79 | $\ge 95.0\%$ |
| **3** | 98.62 | 98.81 | 98.58 | $\ge 95.0\%$ |
| **6** | 98.41 | 98.60 | 98.35 | $\ge 95.0\%$ |
| **9** | 98.22 | 98.42 | 98.15 | $\ge 95.0\%$ |
| **12** | 98.01 | 98.18 | 97.94 | $\ge 95.0\%$ |
| **18** | 97.55 | 97.75 | 97.51 | $\ge 95.0\%$ |
| **24** | 97.10 | 97.32 | 97.08 | $\ge 95.0\%$ |

---

#### **6. POOLABILITY RESULTS AND ANALYSIS**

##### **6.1. Regression Parameters by Batch**
The individual linear regression analysis for each batch yielded the following parameters:

*   **GLUC-2025-001:** $Y = -0.0732x + 98.845$ ($R^2 = 0.9992$)
*   **GLUC-2025-002:** $Y = -0.0711x + 99.018$ ($R^2 = 0.9989$)
*   **GLUC-2025-003:** $Y = -0.0718x + 98.792$ ($R^2 = 0.9995$)

##### **6.2. ANCOVA Table for Poolability Assessment**
The analysis was performed using SAS v9.4 (PROC GLM).

| Source of Variation | Degrees of Freedom (DF) | Sum of Squares (SS) | Mean Square (MS) | F-Value | P-Value | Result ($\alpha=0.25$) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Batch** | 2 | 0.2854 | 0.1427 | 158.55 | < 0.0001 | Significant |
| **Time** | 1 | 8.4210 | 8.4210 | 9356.6 | < 0.0001 | N/A |
| **Batch * Time** | 2 | 0.0008 | 0.0004 | 0.444 | **0.651** | **Poolable** |
| **Residuals** | 15 | 0.0135 | 0.0009 | - | - | - |

---

#### **7. DETAILED INTERPRETATION OF STATISTICAL FINDINGS**

##### **7.1. Slope Poolability (Test for Parallelism)**
The p-value for the **Batch * Time** interaction term was calculated as **0.651**. Since $0.651 > 0.25$, we fail to reject the null hypothesis of equal slopes. This indicates that the rate of degradation (purity decrease over time) for Glucogen-XR is statistically consistent across the three registration batches. The common slope ($\beta_1$) is calculated as **-0.0720% purity/month**.

##### **7.2. Intercept Poolability (Test for Equality of Initial Values)**
Following the confirmation of common slopes, the Batch effect was tested. The p-value for the **Batch** effect was **< 0.0001**. Since this is significantly less than 0.25, the intercepts cannot be pooled. This reflects the inherent, though minor, variability in the initial purity of the drug substance immediately after purification and fill-finish.

##### **7.3. Determination of Model for Retest Period Estimation**
Based on the results above, the most appropriate statistical model for Glucogen-XR DS stability is the **"Common Slope, Separate Intercept"** model.

The predictive equations used for Lower Confidence Limit (LCL) calculations are:
1.  **GLUC-2025-001:** $\hat{Y} = 98.845 - 0.0720(Time)$
2.  **GLUC-2025-002:** $\hat{Y} = 99.018 - 0.0720(Time)$
3.  **GLUC-2025-003:** $\hat{Y} = 98.792 - 0.0720(Time)$

---

#### **8. CALCULATION OF RETEST PERIOD (SHELF-LIFE)**

The retest period is defined as the time at which the **95% one-sided lower confidence limit** of the regression line intersects the lower specification limit (LSL) of 95.0%.

##### **Table 3: Estimated Retest Periods (Months) per Batch**
| Batch | Predicted Intersection (Point Estimate) | 95% Lower Confidence Limit (LCL) Intersection |
| :--- | :--- | :--- |
| **GLUC-2025-001** | 53.4 Months | 48.2 Months |
| **GLUC-2025-002** | 55.8 Months | 50.5 Months |
| **GLUC-2025-003** | 52.7 Months | **47.1 Months** |

The limiting batch for the retest period is **GLUC-2025-003**, providing a statistical shelf-life estimate of 47.1 months at $5^\circ\text{C}$.

---

#### **9. CONCLUSION**

The poolability assessment for Glucogen-XR DS demonstrates that while initial purity levels vary slightly between batches, the rate of degradation is uniform across the commercial manufacturing scale. By applying the "Common Slope, Separate Intercept" model, GHS has established a robust statistical basis for a proposed **36-month retest period** for Glucogen-XR DS when stored at $2-8^\circ\text{C}$, providing a significant safety margin relative to the 47.1-month statistical limit.

---

#### **10. LIST OF ABBREVIATIONS AND FORMULAE**

*   **ANCOVA:** Analysis of Covariance
*   **CQA:** Critical Quality Attribute
*   **LSL:** Lower Specification Limit
*   **RP-HPLC:** Reversed-Phase High-Performance Liquid Chromatography

**Variance Formula for Slope Poolability:**
$$F = \frac{(SS_{separate} - SS_{common}) / (k-1)}{SS_{common} / (n-2k)}$$
*Where $k = 3$ (number of batches) and $n = 21$ (total observations).*

---
**END OF SECTION**

---

## Confidence Intervals for Retest Period

# MODULE 3: QUALITY (3.2.S DRUG SUBSTANCE)
## SECTION: 3.2.S.7 STABILITY
### SUBSECTION: 3.2.S.7.3 STATISTICAL EVALUATION OF STABILITY DATA
#### PART IV: CONFIDENCE INTERVALS FOR RETEST PERIOD ESTIMATION

---

### 1.0 Executive Summary of Statistical Rationale
The determination of the retest period for **Glucogen-XR (glucapeptide extended-release)** drug substance is governed by the principles outlined in **ICH Q1E (Evaluation of Stability Data)** and **ICH Q1A(R2) (Stability Testing of New Drug Substances and Products)**. To ensure a high degree of confidence in the chemical and physical integrity of the glucapeptide moiety, Google Health Sciences employs a frequentist statistical approach using linear regression analysis to establish a 95% one-sided confidence limit.

For Glucogen-XR, the primary stability-indicating parameter is the **Purity by RP-HPLC (% Main Peak)**. The retest period is defined as the time at which the lower 95% confidence bound for the mean degradation curve intersects the pre-defined acceptance criterion (Lower Specification Limit, LSL = 95.0%).

### 2.0 Regulatory Framework and Compliance
This evaluation is conducted in strict accordance with the following regulatory guidances and pharmacopeial standards:
1.  **ICH Q1E**: Evaluation of Stability Data (June 2003).
2.  **FDA Guidance for Industry**: Q1E Evaluation of Stability Data (Revision 1).
3.  **USP <1010>**: Analytical Data—Interpretation and Treatment.
4.  **ISO 13053-1**: Quantitative methods in process improvement – Six Sigma.
5.  **21 CFR 211.166**: Stability Testing requirements for finished pharmaceuticals (applied here to Drug Substance).

### 3.0 Mathematical Models and Statistical Methodology

#### 3.1 Linear Regression Equation
The relationship between time ($t$) and the quantitative attribute ($Y$) is modeled using the least-squares method:
$$Y_i = \beta_0 + \beta_1 t_i + \epsilon_i$$
Where:
*   $Y_i$: Observed stability result (e.g., % Purity) at time $t_i$.
*   $\beta_0$: Intercept (predicted value at time zero).
*   $\beta_1$: Slope (degradation rate per month).
*   $\epsilon_i$: Random error term, assumed $\epsilon \sim N(0, \sigma^2)$.

#### 3.2 Calculation of the One-Sided 95% Lower Confidence Bound
The lower confidence limit ($LCL$) for the mean at time $t$ is calculated as:
$$LCL(t) = \hat{Y}(t) - t_{\alpha, n-2} \cdot s_{y \cdot x} \sqrt{\frac{1}{n} + \frac{(t - \bar{t})^2}{\sum(t_i - \bar{t})^2}}$$
Where:
*   $\hat{Y}(t)$: Predicted value at time $t$.
*   $t_{\alpha, n-2}$: The upper $\alpha$-critical value of the Student’s t-distribution with $n-2$ degrees of freedom (for 95% confidence, $\alpha = 0.05$).
*   $s_{y \cdot x}$: Standard error of the estimate (residual standard deviation).
*   $n$: Total number of data points.
*   $\bar{t}$: Mean time of all observations.

#### 3.3 Poolability Testing (ANCOVA)
Prior to calculating the consolidated retest period, an Analysis of Covariance (ANCOVA) is performed to determine if data from different batches (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003) can be pooled.
*   **Step 1: Test for Equality of Slopes.** If $p > 0.25$, slopes are considered similar.
*   **Step 2: Test for Equality of Intercepts.** If $p > 0.25$, intercepts are considered similar.
*   **Outcome:** If both conditions are met, a single pooled model is used. If not, the retest period is based on the "worst-case" batch (the batch with the shortest predicted time to reach the LSL).

---

### 4.0 Primary Stability Data for Glucogen-XR (RP-HPLC Purity)

The following data represents the long-term stability results ($5^\circ\text{C} \pm 3^\circ\text{C}$) used for the statistical derivation of the 24-month retest period.

#### Table 4.1: Stability Data for Batch GLUC-2025-001
| Time point (Months) | Date of Analysis | Batch ID | Purity (% Main Peak) | Impurity A (%) | Water Content (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 (Release) | 15-JAN-2025 | GLUC-2025-001 | 99.42 | 0.12 | 2.1 |
| 3 | 15-APR-2025 | GLUC-2025-001 | 99.28 | 0.15 | 2.2 |
| 6 | 15-JUL-2025 | GLUC-2025-001 | 99.15 | 0.18 | 2.1 |
| 9 | 15-OCT-2025 | GLUC-2025-001 | 99.01 | 0.22 | 2.3 |
| 12 | 15-JAN-2026 | GLUC-2025-001 | 98.88 | 0.25 | 2.2 |
| 18 | 15-JUL-2026 | GLUC-2025-001 | 98.60 | 0.31 | 2.4 |
| 24 | 15-JAN-2027 | GLUC-2025-001 | 98.32 | 0.38 | 2.3 |

#### Table 4.2: Stability Data for Batch GLUC-2025-002
| Time point (Months) | Date of Analysis | Batch ID | Purity (% Main Peak) | Impurity A (%) | Water Content (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 (Release) | 02-FEB-2025 | GLUC-2025-002 | 99.38 | 0.14 | 2.0 |
| 3 | 02-MAY-2025 | GLUC-2025-002 | 99.25 | 0.17 | 2.1 |
| 6 | 02-AUG-2025 | GLUC-2025-002 | 99.10 | 0.21 | 2.2 |
| 9 | 02-NOV-2025 | GLUC-2025-002 | 98.95 | 0.26 | 2.1 |
| 12 | 02-FEB-2026 | GLUC-2025-002 | 98.82 | 0.29 | 2.3 |
| 18 | 02-AUG-2026 | GLUC-2025-002 | 98.55 | 0.35 | 2.2 |
| 24 | 02-FEB-2027 | GLUC-2025-002 | 98.28 | 0.42 | 2.4 |

#### Table 4.3: Stability Data for Batch GLUC-2025-003
| Time point (Months) | Date of Analysis | Batch ID | Purity (% Main Peak) | Impurity A (%) | Water Content (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 (Release) | 12-MAR-2025 | GLUC-2025-003 | 99.45 | 0.11 | 2.2 |
| 3 | 12-JUN-2025 | GLUC-2025-003 | 99.30 | 0.14 | 2.1 |
| 6 | 12-SEP-2025 | GLUC-2025-003 | 99.18 | 0.18 | 2.3 |
| 9 | 12-DEC-2025 | GLUC-2025-003 | 99.04 | 0.23 | 2.2 |
| 12 | 12-MAR-2026 | GLUC-2025-003 | 98.91 | 0.27 | 2.4 |
| 18 | 12-SEP-2026 | GLUC-2025-003 | 98.65 | 0.33 | 2.3 |
| 24 | 12-MAR-2027 | GLUC-2025-003 | 98.35 | 0.40 | 2.5 |

---

### 5.0 Statistical Analysis Procedure (Step-by-Step)

#### 5.1 Step 1: Data Verification and Normalization
Prior to analysis, all data points are verified against the Laboratory Information Management System (LIMS) and the Electronic Batch Record (EBR) from the South San Francisco manufacturing site (3000 Innovation Drive). No outliers were identified using Grubb’s Test ($\alpha = 0.05$).

#### 5.2 Step 2: Test for Poolability (ANCOVA Analysis)
Using SAS® Version 9.4 (SAS Institute, Inc.), an ANCOVA was performed to compare the regression lines.

**Table 5.2.1: ANCOVA Summary Table (Purity by RP-HPLC)**
| Source of Variation | Degrees of Freedom (DF) | Mean Square (MS) | F-Value | p-value | Interpretation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Batch (Intercept) | 2 | 0.0045 | 1.12 | 0.352 | Fail to Reject (Poolable) |
| Time x Batch (Slope) | 2 | 0.0008 | 0.45 | 0.641 | Fail to Reject (Poolable) |
| Error | 16 | 0.0012 | - | - | - |

**Result:** Since both $p$-values exceed the $0.25$ threshold specified in ICH Q1E, the data from the three batches are deemed poolable. A single common slope and common intercept model is utilized for the calculation of the confidence intervals.

#### 5.3 Step 3: Calculation of Pooled Regression Parameters
The pooled dataset ($n=21$) yields the following linear model:
*   **Intercept ($\hat{\beta}_0$):** 99.41%
*   **Slope ($\hat{\beta}_1$):** -0.0456 %/month
*   **Residual Standard Deviation ($s_{y \cdot x}$):** 0.034
*   **Correlation Coefficient ($R^2$):** 0.988

---

### 6.0 Determination of the Retest Period

#### 6.1 Graphical Analysis of 95% Confidence Bounds
The 95% lower one-sided confidence interval (LCI) was projected forward to determine the point of intersection with the LSL of 95.0%.

#### Table 6.1: Predicted Purity and Lower Confidence Limit (LCL)
| Time (Months) | Predicted Purity (%) | 95% One-Sided LCL (%) | Specification | Result |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 99.41 | 99.35 | $\ge 95.0$ | Pass |
| 12 | 98.86 | 98.81 | $\ge 95.0$ | Pass |
| 24 | 98.32 | 98.26 | $\ge 95.0$ | Pass |
| 36 | 97.77 | 97.68 | $\ge 95.0$ | Pass |
| 48 | 97.22 | 97.10 | $\ge 95.0$ | Pass |
| 60 | 96.68 | 96.51 | $\ge 95.0$ | Pass |
| 84 | 95.58 | 95.34 | $\ge 95.0$ | Pass |
| 92 | 95.22 | **95.01** | $\ge 95.0$ | Intersection |

#### 6.2 Statistical Extrapolation
Based on the intersection of the LCL with the LSL at 92 months, and following ICH Q1E Section 2.4, which allows for extrapolation up to double the available real-time data (but not exceeding 12 months beyond), Google Health Sciences proposes a conservative retest period.

Given that 24 months of real-time data is currently available for batches GLUC-2025-001 through GLUC-2025-003, and the statistical LCL remains well above 95.0% through 92 months, the proposed retest period for Glucogen-XR Drug Substance is **36 months**, when stored in the proposed commercial packaging (double LDPE bags inside a HDPE drum) at $5^\circ\text{C} \pm 3^\circ\text{C}$.

---

### 7.0 Conclusion
The statistical evaluation of stability data for Glucogen-XR demonstrates a highly stable profile with a low degradation rate. The 95% lower confidence interval confirms that the drug substance purity will remain significantly above the lower specification limit of 95.0% for the duration of the proposed 36-month retest period. Google Health Sciences will continue to monitor these batches and provide updated statistical reports as additional real-time data (36, 48, and 60 months) becomes available.

**Approved By:**
*Dr. Aris Thorne*
Head of Regulatory CMC, Google Health Sciences
Date: 15-MAY-2027

---
*Footnote 1: All calculations performed using Validated Software System GHS-STAT-09.*
*Footnote 2: ICH Q1E states: "If the data show very little degradation and very little variability, it may be apparent that the requested retest period or shelf life will be granted under the proposed storage conditions."*

---

# Retest Period or Expiration Dating Justification

## Proposed Retest Period

### 3.2.S.7.3 Stability Summary and Conclusions: Proposed Retest Period

#### 3.2.S.7.3.1 Executive Summary of Proposed Retest Period
Based upon the comprehensive real-time, long-term, and accelerated stability data generated across multiple registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) of **Glucogen-XR (glucapeptide extended-release)** Drug Substance, Google Health Sciences (GHS) proposes a **retest period of 24 months** when stored under the recommended long-term conditions of **-70°C ± 10°C** in the primary container closure system (High-Density Polyethylene [HDPE] fluorinated bottles with medical-grade polypropylene closures).

This proposal is substantiated by statistical analysis conducted in accordance with **ICH Q1E: Evaluation of Stability Data**, utilizing a one-sided 95% confidence limit approach to determine the time at which the drug substance remains within specified acceptance criteria. The stability profile indicates minimal degradation of the primary peptide sequence and maintenance of the extended-release pharmacokinetic profile, as verified by *in vitro* potency assays and size-exclusion chromatography (SEC).

---

#### 3.2.S.7.3.2 Regulatory Framework and Compliance
The justification for the proposed retest period adheres to the following international regulatory guidelines and pharmacopeial standards:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **ICH Q1E:** Evaluation of Stability Data.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1049>:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **21 CFR Part 211.166:** Stability Testing.

---

#### 3.2.S.7.3.3 Statistical Evaluation Protocol (SEP-GLUC-009)
To determine the retest period, Google Health Sciences employed a robust statistical modeling protocol. The primary degradant monitored for statistical extrapolation was the **High Molecular Weight Species (HMWS)**, as it represents the most sensitive indicator of thermal instability in the glucapeptide molecule.

##### 3.2.S.7.3.3.1 Regression Analysis Methodology
For a quantitative attribute (e.g., Purity by RP-HPLC or SEC), the relationship between the attribute and time was analyzed using a linear regression model:
$$Y = \beta_0 + \beta_1t + \epsilon$$
Where:
*   $Y$ = Response variable (e.g., % Main Peak)
*   $\beta_0$ = Intercept at $t=0$
*   $\beta_1$ = Slope (Degradation Rate)
*   $t$ = Time in months
*   $\epsilon$ = Random error

The retest period is defined as the time at which the 95% one-sided confidence limit for the mean degradation curve intersects the lower (or upper) acceptance criterion (e.g., NLT 95.0% Purity).

##### 3.2.S.7.3.3.2 Poolability Testing
Before combining data from batches GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003, an Analysis of Covariance (ANCOVA) was performed to test the equality of slopes and intercepts ($p > 0.25$ for poolability).

**Table 1: ANCOVA Results for Poolability of Glucogen-XR Batches (Purity by SEC)**
| Source of Variation | Degrees of Freedom | F-Statistic | p-value | Conclusion |
| :--- | :--- | :--- | :--- | :--- |
| Intercepts (Batch) | 2 | 1.12 | 0.384 | Poolable |
| Slopes (Time*Batch) | 2 | 0.89 | 0.442 | Poolable |
| Combined Error | 15 | - | - | - |

*Note: Since p-values exceed 0.25, data from all three batches were pooled for final retest period extrapolation.*

---

#### 3.2.S.7.3.4 Detailed Stability Data Summary (Registration Batches)
The following tables provide the cumulative data used to justify the 24-month retest period. All testing was performed at the Google Health Sciences Analytical Excellence Center (AEC-SF).

##### 3.2.S.7.3.4.1 Long-Term Storage: -70°C ± 10°C (Proposed Retest Condition)
**Table 2: Stability Data for Batch GLUC-2025-001 (Primary Registration Batch)**
| Test Parameter | Method ID | Specification | T=0 (Initial) | T=6 Months | T=12 Months | T=18 Months | T=24 Months |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | SOP-VIS-01 | Clear, colorless | Conforms | Conforms | Conforms | Conforms | Conforms |
| **Potency (Cell-based)** | SOP-BIO-44 | 80% - 125% | 102% | 101% | 99% | 100% | 98% |
| **Purity (SEC)** | SOP-SEC-09 | $\ge$ 97.0% | 99.4% | 99.3% | 99.2% | 99.1% | 99.0% |
| **Purity (RP-HPLC)** | SOP-RP-12 | $\ge$ 95.0% | 98.8% | 98.6% | 98.4% | 98.2% | 98.1% |
| **HMWS (%)** | SOP-SEC-09 | $\le$ 2.0% | 0.4% | 0.5% | 0.6% | 0.7% | 0.8% |
| **Oxidized Forms** | SOP-LCMS-05 | $\le$ 1.5% | 0.2% | 0.2% | 0.3% | 0.4% | 0.4% |
| **Bacterial Endotoxin** | USP <85> | $\le$ 5 EU/mg | <0.1 | <0.1 | <0.1 | <0.1 | <0.1 |

**Table 3: Stability Data for Batch GLUC-2025-002**
| Test Parameter | Method ID | Specification | T=0 (Initial) | T=6 Months | T=12 Months | T=18 Months | T=24 Months |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | SOP-VIS-01 | Clear, colorless | Conforms | Conforms | Conforms | Conforms | Conforms |
| **Potency (Cell-based)** | SOP-BIO-44 | 80% - 125% | 105% | 103% | 101% | 102% | 99% |
| **Purity (SEC)** | SOP-SEC-09 | $\ge$ 97.0% | 99.5% | 99.4% | 99.3% | 99.2% | 99.1% |
| **HMWS (%)** | SOP-SEC-09 | $\le$ 2.0% | 0.3% | 0.4% | 0.5% | 0.6% | 0.7% |

---

#### 3.2.S.7.3.5 Extrapolation and Justification for 24-Month Period
Under the provisions of **ICH Q1E (Appendix A)**, if long-term data show little or no change over time and accelerated data show little or no change, the retest period can be extended up to twice the period covered by real-time data, but not more than 12 months beyond.

1.  **Real-Time Data Available:** 24 months of data are presented for three GMP batches (GLUC-2025-001 through 003).
2.  **Accelerated Stability Analysis:** Data at -20°C ± 5°C (Accelerated condition for frozen DS) show no significant change over 6 months.
    *   *Purity (SEC) at 6 months (-20°C): 98.9% (vs 99.4% initial).*
3.  **Statistical Inference:** The 95% lower confidence limit for the main peak (SEC) remains well above 97.0% even when extrapolated to 36 months ($p < 0.01$).

Therefore, the **24-month retest period** is considered conservative and highly supported by the analytical trend analysis.

---

#### 3.2.S.7.3.6 Post-Approval Stability Commitment
Google Health Sciences commits to the following post-approval stability monitoring (Protocol CP-GLUC-02):

1.  **Annual Batch Monitoring:** One production-scale batch of Glucogen-XR Drug Substance per year will be added to the long-term stability program (-70°C).
2.  **Reporting:** Any Out-of-Specification (OOS) results or significant trends will be reported to the FDA within 15 working days.
3.  **Extension of Retest Period:** GHS may seek to extend the retest period beyond 24 months in future Annual Reports, provided real-time data from the ongoing stability program continue to meet all acceptance criteria and statistical evaluations support the extension.

---

#### 3.2.S.7.3.7 Step-by-Step Procedure for Retest Analysis (SOP-STAB-202)
In the event that a batch of Glucogen-XR reaches the 24-month retest date, the following protocol must be executed by Quality Control:

1.  **Sampling:** Under aseptic conditions, remove one 50mL aliquot from the primary storage container (GLUC-DS-STOR-01) while maintaining the cold chain (-70°C).
2.  **Thawing:** Thaw the sample at 2-8°C for 12-16 hours. Do not use a water bath or high-heat source.
3.  **Testing Requirements:**
    *   Perform Appearance (Visual).
    *   Perform SEC-HPLC for Aggregation (HMWS).
    *   Perform RP-HPLC for Chemical Purity.
    *   Perform Cell-Based Potency (Langerhans Cell Stimulation Index).
4.  **Evaluation:** If all results meet the DS Release Specifications, the batch may be extended for a "Use Period" of 6 months. A batch may only be retested once.

---

#### 3.2.S.7.3.8 Conclusion
The scientific evidence presented in this section demonstrates that **Glucogen-XR** is physically and chemically stable for a minimum of **24 months** when stored at **-70°C ± 10°C**. The minimal degradation rates observed across three independent batches demonstrate the robustness of the manufacturing process at the 3000 Innovation Drive facility and the effectiveness of the fluorinated HDPE container closure system.

**End of Subsection 3.2.S.7.3**

---
*Confidential - Property of Google Health Sciences. For Regulatory Submission Purposes Only.*

---

## Supporting Data

### **3.2.S.7.3.1 SUPPORTING DATA: RETEST PERIOD OR EXPIRATION DATING JUSTIFICATION**

---

#### **1.0 INTRODUCTION AND SCOPE**
This section provides the comprehensive technical and statistical justification for the proposed shelf-life and retest period for **Glucogen-XR (glucapeptide extended-release)** drug substance (DS). The data presented herein are derived from primary stability studies (Long-term, Accelerated, and Stressed conditions) as well as supportive data from pilot-scale batches and forced degradation studies.

Google Health Sciences (GHS) has conducted these studies in strict adherence to:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **ICH Q1E:** Evaluation of Stability Data.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1049>:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.

The objective of this supporting data package is to demonstrate that Glucogen-XR remains within the established specifications for potency, purity, safety, and efficacy when stored under the recommended conditions of **-70°C ± 10°C (Ultra-Low Temperature Freezer)** in the primary container closure system (High-Density Polyethylene [HDPE] bottles with medical-grade fluoropolymer liners).

---

#### **2.0 BATCH ANALYSIS AND DESCRIPTION OF STABILITY SAMPLES**
The stability program for Glucogen-XR DS utilizes three primary registration batches produced at the 2,000L commercial scale at the South San Francisco facility (Building 4, Suite 200). These batches were manufactured using the proprietary GHS-CHO-001 cell line and the validated downstream purification process involving Protein A affinity chromatography, multimodal cation exchange (CEX), and tangential flow filtration (TFF).

##### **Table 2.1: Primary Stability Batch Information**
| Batch Number | Scale | Date of Manufacture | Site of Manufacture | Use | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000 L | 12-JAN-2025 | 3000 Innovation Dr, SSF | Clinical/Stability | Primary Registration |
| **GLUC-2025-002** | 2,000 L | 28-JAN-2025 | 3000 Innovation Dr, SSF | Clinical/Stability | Primary Registration |
| **GLUC-2025-003** | 2,000 L | 15-FEB-2025 | 3000 Innovation Dr, SSF | Stability | Primary Registration |
| **GLUC-2024-SUPP-01** | 200 L | 05-OCT-2024 | 3000 Innovation Dr, SSF | Pilot/R&D | Supportive Data |

---

#### **3.0 STABILITY PROTOCOL AND TESTING STRATEGY**

##### **3.1 Storage Conditions and Sampling Frequencies**
The stability program is designed to assess the drug substance under various environmental stressors to determine the degradation kinetics of the glucapeptide moiety.

| Study Type | Storage Condition | Sampling Timepoints (Months) |
| :--- | :--- | :--- |
| **Long-Term** | -70°C ± 10°C | 0, 3, 6, 9, 12, 18, 24, 36, 48, 60 |
| **Intermediate** | -20°C ± 5°C | 0, 1, 3, 6, 9, 12 |
| **Accelerated** | 5°C ± 3°C | 0, 0.5, 1, 2, 3, 6 |
| **Stressed** | 25°C ± 2°C / 60% RH | 0, 7 days, 14 days, 1 month |
| **Photostability** | ICH Q1B Option 2 | End of Study (1.2M lux hours / 200 W·h/m²) |

##### **3.2 Analytical Procedures and Specification Limits**
The stability-indicating nature of the following assays has been validated per ICH Q2(R1).

| Test Parameter | Method ID | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- |
| **Appearance** | GHS-SOP-QC-001 | Clear to slightly opalescent, colorless liquid | Physical stability |
| **Potency (In Vitro Bioassay)** | GHS-SOP-BIO-044 | 80% – 125% of Reference | Biological activity (GLP-1R activation) |
| **Purity (RP-HPLC)** | GHS-SOP-CHM-012 | ≥ 95.0% Main Peak | Detection of deamidation/oxidation |
| **Purity (SE-UPLC)** | GHS-SOP-CHM-015 | ≥ 98.0% Monomer | Detection of aggregation/fragmentation |
| **Charge Heterogeneity (icIEF)** | GHS-SOP-CHM-019 | Main Peak: 60-75% | C-terminal clipping/deamidation |
| **Glycan Mapping** | GHS-SOP-BIO-098 | Report Profile (consistent with Ref) | Post-translational stability |
| **Sub-visible Particles** | USP <788> | ≤ 6000 (≥ 10µm); ≤ 600 (≥ 25µm) | Stability of formulation |

---

#### **4.0 DETAILED DATA TABLES: LONG-TERM STABILITY (-70°C)**

##### **Table 4.1: Stability Data for GLUC-2025-001 (Storage: -70°C)**
*Batch Site: SSF, Building 4; Container: 1L HDPE Bottle.*

| Month | Date | Appearance | Protein Conc. (mg/mL) | Purity (SE-UPLC) % Monomer | Purity (RP-HPLC) % Main Peak | Potency (% Relative) | pH |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | 12-JAN-25 | Conforms | 50.2 | 99.7 | 98.2 | 102 | 6.2 |
| **3** | 12-APR-25 | Conforms | 50.1 | 99.6 | 98.1 | 98 | 6.2 |
| **6** | 12-JUL-25 | Conforms | 50.3 | 99.6 | 98.0 | 101 | 6.3 |
| **9** | 12-OCT-25 | Conforms | 50.0 | 99.5 | 97.9 | 99 | 6.2 |
| **12** | 12-JAN-26 | Conforms | 50.1 | 99.5 | 97.8 | 100 | 6.2 |

##### **Table 4.2: Stability Data for GLUC-2025-002 (Storage: -70°C)**
| Month | Appearance | Purity (SE-UPLC) % Monomer | Purity (RP-HPLC) % Main Peak | Potency (% Relative) | HMW (%) | LMW (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | Conforms | 99.8 | 98.4 | 105 | 0.2 | <0.1 |
| **3** | Conforms | 99.7 | 98.3 | 102 | 0.3 | <0.1 |
| **6** | Conforms | 99.7 | 98.2 | 103 | 0.3 | <0.1 |
| **12** | Conforms | 99.6 | 98.1 | 101 | 0.4 | <0.1 |

---

#### **5.0 ACCELERATED AND STRESS DATA ANALYSIS**

##### **5.1 Accelerated Stability (5°C ± 3°C)**
Storage at 5°C represents a significant excursion from the frozen state. Data indicate a linear increase in high-molecular-weight species (HMWS) and a decrease in the main peak by RP-HPLC due to N-terminal glutamine cyclization and Asp-34 deamidation.

**Formula for Degradation Rate (k):**
$$k = \frac{\ln(C_0 / C_t)}{t}$$
Where $C_0$ is initial purity and $C_t$ is purity at time $t$.

At 5°C, the degradation rate $k$ for Glucogen-XR was calculated as $0.0021 \text{ month}^{-1}$, allowing for a 3-month shelf-life at refrigerated conditions for processing purposes.

##### **Table 5.1: Accelerated Data Batch GLUC-2025-001 (5°C)**
| Timepoint | Purity (RP-HPLC) | Purity (SE-UPLC) | Potency (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 98.2 | 99.7 | 102 | 1.8 |
| 1 Month | 97.5 | 99.1 | 99 | 2.5 |
| 3 Months | 96.2 | 98.4 | 94 | 3.8 |
| 6 Months | 93.1* | 96.8* | 85 | 6.9 |
*\*Indicates result outside of shelf-life specification.*

---

#### **6.0 STATISTICAL EVALUATION (ICH Q1E)**
Google Health Sciences utilized **JMP 17.2 Pro** to perform a linear regression analysis of the 12-month primary stability data.

##### **6.1 Purity (SE-UPLC) Trend Analysis**
The 95% confidence interval (CI) for the mean degradation rate was extrapolated to predict the time at which the lower acceptance limit (98.0% Monomer) would be reached.

*   **Slope (β):** -0.012% per month
*   **Intercept (α):** 99.75%
*   **P-value:** 0.245 (No significant slope detected at -70°C)
*   **Predicted Shelf Life:** > 60 months (Statistical extrapolation allows for 2x the available real-time data up to 36 months).

##### **6.2 Pooled Data Analysis**
An Analysis of Covariance (ANCOVA) was performed to test for poolability of the three registration batches (GLUC-2025-001, -002, -003).
*   **Equality of Slopes:** $p = 0.67$ (Accept $H_0$, slopes are similar)
*   **Equality of Intercepts:** $p = 0.12$ (Accept $H_0$, intercepts are similar)
*   **Result:** Data from all three batches were pooled for a more robust estimate of the retest period.

---

#### **7.0 FORCED DEGRADATION SUMMARY**
To validate the stability-indicating nature of the assays, Batch GLUC-2025-001 was subjected to extreme conditions.

| Stressor | Condition | Primary Degradation Pathway | Observed Change |
| :--- | :--- | :--- | :--- |
| **Acid** | 0.1M HCl, 24h | Hydrolysis/Deamidation | 15% drop in RP-HPLC main peak |
| **Base** | 0.1M NaOH, 24h | Aggregation/Clipping | 22% increase in HMWS |
| **Oxidation** | 0.3% $H_2O_2$, 4h | Methionine Oxidation (Met-12) | New peak at RRT 0.85 |
| **Thermal** | 40°C, 7 days | Denaturation | Loss of secondary structure (CD spectra) |

---

#### **8.0 CONTAINER CLOSURE SYSTEM SUITABILITY**
The stability of Glucogen-XR was assessed in 500 mL and 1000 mL HDPE bottles (GHS-MAT-882) manufactured by Google Cloud Life Sciences' approved vendor. Leachable and extractable (L&E) studies were performed per **USP <1663>** and **USP <1664>**. No migrant species from the HDPE or fluoropolymer liner were detected above the Analytical Evaluation Threshold (AET) of 0.15 µg/day during the first 12 months of storage at -70°C.

---

#### **9.0 POST-APPROVAL STABILITY COMMITMENT**
Google Health Sciences commits to the following:
1.  **Continuance of Primary Batches:** Stability testing for GLUC-2025-001, -002, and -003 will continue through the proposed 36-month period.
2.  **Annual Commitment Batches:** At least one production batch per year will be added to the long-term stability program (if produced).
3.  **Significant Change Reporting:** Any "Out of Specification" (OOS) result or significant trend change will be reported to the FDA within 15 working days.

---

#### **10.0 CONCLUSION AND PROPOSED RETEST PERIOD**
Based on the 12 months of real-time data for the commercial-scale registration batches and the supportive 24-month data from the pilot batch (GLUC-2024-SUPP-01), the following is justified:

*   **Proposed Retest Period:** 24 Months
*   **Storage Temperature:** -70°C ± 10°C
*   **Light Sensitivity:** Protect from light (secondary packaging)

The absence of significant degradation at the intended storage condition, combined with the robust statistical analysis per ICH Q1E, confirms that Glucogen-XR drug substance remains stable and fit for use in the manufacture of the drug product for at least 24 months.

---
*End of Subsection 3.2.S.7.3.1*

---

## Commitment to Continued Stability Studies

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.2: POST-APPROVAL STABILITY PROTOCOL AND STABILITY COMMITMENT

### 3.2.S.7.2.1 Introduction and Scope
Google Health Sciences (GHS), a division of Google Cloud Life Sciences, hereby submits this Post-Approval Stability Protocol (PASP) and formal Stability Commitment for Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. 

This document outlines the systematic program designed to monitor the stability of the Drug Substance (DS) post-approval, ensuring that the material remains within its established specifications throughout the proposed retest period. This commitment is designed in strict accordance with ICH Q1A(R2) *Stability Testing of New Drug Substances and Products*, ICH Q5C *Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*, and the FDA Guidance for Industry *Q1A(R2) Stability Testing of New Drug Substances and Products*.

---

### 3.2.S.7.2.2 Formal Stability Commitment

In accordance with 21 CFR 314.70 and 21 CFR 601.12, Google Health Sciences commits to the following stability monitoring program for Glucogen-XR Drug Substance:

1.  **Completion of Ongoing Primary Stability Studies:** GHS will continue to monitor the three (3) primary registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) currently under stability testing to the end of the proposed retest period of 36 months at the recommended storage condition of -70°C ± 10°C.
2.  **Annual Batch Monitoring (Annual Commitment Program):** Upon approval of the Biologics License Application (BLA), GHS will place at least one (1) production batch of Glucogen-XR Drug Substance into the stability program annually, provided that at least one batch is manufactured during that calendar year.
3.  **Post-Approval Changes:** Any significant changes to the manufacturing process, equipment, or primary packaging (container closure system) will be evaluated via a supplemental stability program, as per ICH Q5E requirements for comparability.
4.  **Reporting:** All stability data will be summarized and reported to the FDA in the Annual Report (21 CFR 601.70). Any "out-of-specification" (OOS) result or "out-of-trend" (OOT) result that may impact the safety or efficacy of the product will be reported to the agency immediately according to 21 CFR 600.14 (Biological Product Deviation Reporting).

---

### 3.2.S.7.2.3 Post-Approval Stability Protocol (PASP)

The following protocol defines the testing requirements for the annual commitment batches of Glucogen-XR Drug Substance.

#### 3.2.S.7.2.3.1 Test Batches and Selection Criteria
Batches selected for the commitment program must be representative of the commercial manufacturing process.
*   **Batch Type:** Full-scale commercial production batches.
*   **Lot Numbering Format:** GLUC-2025-XXX (where XXX is the sequential batch number).
*   **Scale:** 2,000L Fed-Batch Bioreactor (Single-use technology).
*   **Site of Manufacture:** Google Health Sciences, 3000 Innovation Drive, South San Francisco, CA 94080 (FEI: 3012345678).

#### 3.2.S.7.2.3.2 Container Closure System (CCS)
The stability samples will be stored in the commercial primary packaging system, which consists of:
*   **Primary Container:** 2L Sartorius Stedim Celsius® FFT (Flexible Freeze-Thaw) bags or equivalent 10L HDPE Nalgene Carboys for larger volumes.
*   **Material of Construction:** S71 multilayer film (PE/EVOH/PE).
*   **Secondary Packaging:** Protective outer clamshell and corrugated shippers.

#### 3.2.S.7.2.3.3 Storage Conditions
The following storage conditions are established based on the thermodynamic stability profile of the glucapeptide:

| Condition Type | Temperature | Relative Humidity (RH) | Rationale |
| :--- | :--- | :--- | :--- |
| **Long-Term** | -70°C ± 10°C | N/A | Recommended storage condition for DS |
| **Accelerated** | -20°C ± 5°C | N/A | Assessment of excursion impact |
| **Stress** | +5°C ± 3°C | Ambient | Forced degradation/Thermal shift |

#### 3.2.S.7.2.3.4 Sampling Frequency and Matrix
The testing schedule for the Long-Term stability batches follows the "X" marks in the table below:

| Storage Time (Months) | 0 | 3 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | 60 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Long-Term (-70°C)** | X | X | X | X | X | X | X | X | X | X |
| **Accelerated (-20°C)**| X | X | X | X | X | - | - | - | - | - |

---

### 3.2.S.7.2.4 Analytical Methods and Acceptance Criteria

The stability-indicating nature of the following methods has been validated (see Section 3.2.S.4.3).

#### Table 1: Stability Specifications for Glucogen-XR Drug Substance

| Test Parameter | Analytical Procedure | Acceptance Criteria | Stability-Indicating? |
| :--- | :--- | :--- | :---: |
| **Appearance** | Visual (USP <790>) | Clear to slightly opalescent, colorless to slightly yellow liquid | No |
| **Color/Clarity** | USP <709> / <711> | ≤ Reference Standard | No |
| **pH** | Potentiometric | 6.5 ± 0.3 | Yes |
| **Protein Conc.** | UV-Vis (A280) | 50.0 mg/mL ± 5.0 mg/mL | No |
| **Purity (Monomer)** | SE-HPLC | ≥ 98.0% | Yes |
| **High Mol. Wt. Species** | SE-HPLC | ≤ 1.5% | Yes |
| **Low Mol. Wt. Species** | SE-HPLC | ≤ 0.5% | Yes |
| **Purity (Main Peak)** | RP-HPLC | ≥ 95.0% | Yes |
| **Deamidated Species** | CEX-HPLC | ≤ 3.0% | Yes |
| **Acidic Variants** | cIEF | ≤ 15.0% | Yes |
| **Biological Activity** | Cell-based Bioassay | 80% to 125% of Reference | Yes |
| **Endotoxin** | USP <85> (LAL) | ≤ 0.5 EU/mg | No |
| **Bioburden** | USP <61> | ≤ 10 CFU/100 mL | No |

---

### 3.2.S.7.2.5 Statistical Analysis and Retest Period Justification

Data derived from the stability program will be subjected to statistical analysis to determine the 95% confidence interval of the degradation slope. 

#### 3.2.S.7.2.5.1 Statistical Formula for Shelf-Life/Retest Period
The retest period is defined as the time at which the 95% one-sided upper (or lower) confidence limit for the mean degradation curve intersects the acceptance criterion.
The regression model used is:
$$Y = \beta_0 + \beta_1 t + \epsilon$$
Where:
*   $Y$ = Quantitative attribute (e.g., Purity by RP-HPLC)
*   $\beta_0$ = Intercept at $t=0$
*   $\beta_1$ = Degradation rate (slope)
*   $t$ = Time in months
*   $\epsilon$ = Random error

#### 3.2.S.7.2.5.2 Data Integration and Pooling
Per ICH Q1E, if the slopes and intercepts of the three primary batches are statistically similar ($p > 0.25$), the data will be pooled to provide a single estimate for the retest period. If $p \leq 0.25$, the retest period will be based on the "worst-case" batch.

---

### 3.2.S.7.2.6 Anticipated Stability Data (Mock Table for Commitment Batches)

The following table represents the projected monitoring for the first three post-approval batches.

#### Table 2: Planned Stability Monitoring for Commitment Batches (Year 1)

| Batch Number | Manufacture Date | Start Date | 12M Date | 36M Date | Protocol ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-004** | 15-JAN-2025 | 20-JAN-2025 | 20-JAN-2026 | 20-JAN-2028 | GHS-STAB-DS-01 |
| **GLUC-2025-005** | 12-MAR-2025 | 18-MAR-2025 | 18-MAR-2026 | 18-MAR-2028 | GHS-STAB-DS-01 |
| **GLUC-2025-006** | 05-JUN-2025 | 10-JUN-2025 | 10-JUN-2026 | 10-JUN-2028 | GHS-STAB-DS-01 |

---

### 3.2.S.7.2.7 Detailed Stability Protocols and Step-by-Step Procedures

#### 3.2.S.7.2.7.1 Sample Aliquoting and Storage Step-by-Step
1.  **Aliquoting:** Perform all aliquoting in a Grade A laminar flow hood within a Grade B background to maintain sterility.
2.  **Volume:** Fill 2.0 mL of Glucogen-XR DS into 5.0 mL sterile, pyrogen-free cryovials.
3.  **Labeling:** Apply cryo-resistant labels containing: Batch ID, Storage Condition, Timepoint, and Date.
4.  **Transfer:** Use a validated cold-chain transport container to move samples to the stability chambers.
5.  **Inventory Management:** Log samples into the Laboratory Information Management System (LIMS) and the Google Cloud Life Sciences Stability Monitoring Dashboard.

#### 3.2.S.7.2.7.2 Procedure for Handling Stability Excursions
In the event of a temperature excursion (e.g., freezer failure):
1.  **Detection:** The 24/7 monitored Sensaphone® system triggers an alert to the Quality Control (QC) Manager.
2.  **Quarantine:** All affected samples are moved to a backup validated freezer (Equip ID: GHS-FRZ-99) maintained at -70°C.
3.  **Investigation:** A Deviation Report (DR) is opened. The Impact Assessment will utilize the Kinetic Mean Temperature (MKT) and Arrhenius equation:
    $$k = A e^{-E_a / RT}$$
    to determine if the excursion compromised the stability-indicating data points.

---

### 3.2.S.7.2.8 Reference Standards and Reagents
Stability testing will be performed against the Primary Reference Standard (GLUC-REF-001) or a qualified Working Reference Standard. 
*   **Reference Standard Storage:** -80°C in a dedicated, restricted-access freezer.
*   **Qualification:** Annual qualification of the working standard against the primary standard to ensure no drift in potency or purity.

---

### 3.2.S.7.2.9 References
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <129>:** Analytical Procedures for Recombinant Therapeutic Proteins.
4.  **Google Health Sciences SOP-QA-55.2:** Management of Stability Programs for Biologics.

---
**End of Section**
*Confidential - Property of Google Health Sciences*

---

# Post-Approval Stability Protocol

## Ongoing Stability Commitment

# MODULE 3: QUALITY (3.2.S.7.2)
## DRUG SUBSTANCE: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
## SECTION: ONGOING STABILITY COMMITMENT AND PROTOCOLS

---

### 3.2.S.7.2.1 Introduction and Scope of Commitment

Google Health Sciences (a Division of Google Cloud Life Sciences), hereinafter referred to as "The Applicant," provides the following Ongoing Stability Commitment for Glucogen-XR (glucapeptide extended-release) drug substance (DS). This commitment is established in accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, **ICH Q5C Stability Testing of Biotechnological/Biological Products**, and **21 CFR 211.166**.

The primary objective of the Ongoing Stability Program (OSP) is to monitor the chemical, physical, and biological stability of the Glucogen-XR drug substance under commercial manufacturing conditions and to verify that the drug substance remains within the established specifications throughout its assigned re-test period when stored under the recommended conditions of -70°C ± 10°C.

#### 3.2.S.7.2.1.1 Regulatory Compliance Framework
This protocol is designed to satisfy the post-approval requirements of the U.S. Food and Drug Administration (FDA). The Applicant commits to the following:

1.  **Submission of Data:** Stability data generated from the ongoing commitment batches will be summarized and submitted in the Annual Reports (21 CFR 314.81(b)(2)).
2.  **Out-of-Specification (OOS) Reporting:** Any confirmed OOS result or significant trend that may impact the safety or efficacy of the drug substance will be reported to the FDA within 15 working days as per Field Alert Report (FAR) requirements (21 CFR 314.81(b)(1)).
3.  **Continuous Monitoring:** The stability program will continue for the duration of the commercial life of the product.

---

### 3.2.S.7.2.2 Stability Protocol for Commercial Batches

The Applicant commits to placing at least one (1) commercial production batch of Glucogen-XR drug substance per year into the stability program, provided that at least one batch is manufactured during that calendar year. If no manufacturing occurs within a calendar year, no batch will be added; however, the first batch of the subsequent year will be entered into the program.

#### 3.2.S.7.2.2.1 Selection of Batches
Batches selected for the ongoing stability program must be representative of the commercial manufacturing process as defined in Module 3.2.S.2.2. These batches are produced using the proprietary GHS-CHO-001 cell line at the 3000 Innovation Drive facility.

**Table 1: Identification of Initial Commitment Batches (Year 2025-2026)**

| Batch Number | Manufacturing Date | Scale (L) | Purpose | Storage Condition |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 15-JAN-2025 | 2,000L | Annual Commitment | -70°C ± 10°C |
| GLUC-2025-042 | 22-MAY-2025 | 2,000L | Annual Commitment | -70°C ± 10°C |
| GLUC-2025-088 | 10-SEP-2025 | 2,000L | Process Validation / Stability | -70°C ± 10°C |
| GLUC-2026-012 | 05-FEB-2026 | 2,000L | Annual Commitment | -70°C ± 10°C |

#### 3.2.S.7.2.2.2 Storage Conditions and Orientation
Drug substance is stored in 5L High-Density Polyethylene (HDPE) fluorinated bottles with polypropylene screw caps and Teflon-lined inserts. 

*   **Long-Term Storage:** -70°C ± 10°C (Ultra-Low Temperature Freezer, Equipment ID: GHS-ULT-9902)
*   **Accelerated Storage:** -20°C ± 5°C (Standard Freezer, Equipment ID: GHS-FRZ-4410)
*   **Stressed Storage:** 5°C ± 3°C (Refrigerated, Equipment ID: GHS-REF-1102)

---

### 3.2.S.7.2.3 Testing Matrix and Frequency

The testing schedule for Glucogen-XR drug substance is designed to capture potential degradation pathways, including deamidation, oxidation, aggregation, and loss of biological potency.

**Table 2: Ongoing Stability Testing Schedule (Long-Term: -70°C ± 10°C)**

| Test Parameter | Initial (0M) | 3M | 6M | 9M | 12M | 18M | 24M | 36M | 48M | 60M |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Appearance/Color | X | X | X | X | X | X | X | X | X | X |
| pH (USP <791>) | X | - | X | - | X | X | X | X | X | X |
| Purity (SEC-HPLC) | X | X | X | X | X | X | X | X | X | X |
| Purity (RP-HPLC) | X | X | X | X | X | X | X | X | X | X |
| Charge Variants (cIEF) | X | - | X | - | X | X | X | X | X | X |
| Bioassay (Potency) | X | - | X | - | X | - | X | - | X | X |
| Glycan Profiling | X | - | - | - | X | - | X | - | - | X |
| Endotoxin (LAL) | X | - | - | - | - | - | - | - | - | X |
| Bioburden | X | - | - | - | - | - | - | - | - | X |

*Note: "X" denotes testing required. "-" denotes no testing required.*

---

### 3.2.S.7.2.4 Analytical Methods and Acceptance Criteria

The following analytical methods are validated according to **ICH Q2(R1)**. Acceptance criteria are based on clinical batch history and statistical analysis of the 3-sigma limits from the Process Performance Qualification (PPQ) campaign.

#### 3.2.S.7.2.4.1 SEC-HPLC (Size Exclusion Chromatography)
*   **Objective:** To quantify high molecular weight (HMW) species and aggregates.
*   **System:** Waters Acquity UPLC with PDA Detector.
*   **Column:** TSKgel G3000SWxl, 7.8 mm x 30 cm.
*   **Mobile Phase:** 50 mM Sodium Phosphate, 300 mM NaCl, pH 6.8.
*   **Acceptance Criteria:** Main Peak ≥ 98.0%; Total Aggregates ≤ 1.5%; Fragments ≤ 0.5%.

#### 3.2.S.7.2.4.2 RP-HPLC (Reversed-Phase Chromatography)
*   **Objective:** To detect chemically modified forms (oxidation/deamidation).
*   **Column:** C18, 2.1 mm x 150 mm, 1.7 µm.
*   **Mobile Phase A:** 0.1% TFA in Water; **Mobile Phase B:** 0.1% TFA in Acetonitrile.
*   **Acceptance Criteria:** Purity ≥ 95.0%.

#### 3.2.S.7.2.4.3 Cell-Based Bioassay (Potency)
*   **Objective:** To determine GLP-1 receptor activation through cAMP signaling in a HEK293 reporter cell line.
*   **Methodology:** Luciferase reporter gene assay.
*   **Acceptance Criteria:** 80% to 125% of the Reference Standard.

---

### 3.2.S.7.2.5 Protocol for Stability Deviations and Trend Analysis

#### 3.2.S.7.2.5.1 Statistical Evaluation (Regression Analysis)
As per **ICH Q1E**, the stability data will be subjected to statistical evaluation. For quantitative parameters (e.g., Potency, SEC Purity), a linear regression analysis will be performed to determine if there is a significant slope ($p < 0.05$).

$$Y = \beta_0 + \beta_1 X + \epsilon$$

Where:
*   $Y$ = Quality attribute (e.g., % Purity)
*   $\beta_0$ = Intercept at Time 0
*   $\beta_1$ = Rate of change (slope)
*   $X$ = Time (months)

If the 95% confidence interval for the mean degradation line intersects the acceptance criterion before the end of the re-test period, the re-test period must be re-evaluated.

#### 3.2.S.7.2.5.2 Out-of-Trend (OOT) Procedures
An OOT result is defined as a data point that is within specification but falls outside the expected statistical variability based on previous time points. 
*   **Alert Limit:** $\pm$ 2 Standard Deviations from the regression line.
*   **Action:** Initiate an internal investigation (Quality Management System Workflow: QMS-STB-004) to determine if the deviation is due to analytical error or product degradation.

---

### 3.2.S.7.2.6 Sample Management and Inventory

Sufficient quantities of Glucogen-XR DS are retained at the South San Francisco site to allow for:
1.  Full testing according to the protocol.
2.  Contingency re-testing in triplicate in the event of OOS results.
3.  Retained samples (Reserve samples) as per 21 CFR 211.170.

**Table 3: Sample Mass Requirements per Timepoint**

| Test | Mass Required (mg) | Volume (mL) @ 50mg/mL |
| :--- | :--- | :--- |
| Appearance | 50 mg | 1.0 mL |
| HPLC (SEC/RP) | 25 mg | 0.5 mL |
| Bioassay | 100 mg | 2.0 mL |
| CIEF | 10 mg | 0.2 mL |
| Compendial (pH/Endo) | 100 mg | 2.0 mL |
| **Total per Point** | **285 mg** | **5.7 mL** |

---

### 3.2.S.7.2.7 Data Management and Reporting

All stability data is stored in the **Google Cloud Life Sciences LIMS (Laboratory Information Management System)**. The system provides 21 CFR Part 11 compliant audit trails and automated alerts for upcoming pulls.

1.  **Pull Window:** Samples must be pulled within $\pm$ 2 days for 0-6 month points, and $\pm$ 7 days for points $\geq$ 12 months.
2.  **Annual Report:** A consolidated report for all active stability studies will be generated every 12 months.
3.  **Final Stability Report:** Upon completion of the 60-month study, a final report will be issued to confirm the permanent re-test period.

---

### 3.2.S.7.2.8 References

1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <1225>:** Validation of Compendial Procedures.
4.  **Google Health Sciences SOP-QA-550:** Stability Program Management for Biologics.

---
**[END OF SECTION 3.2.S.7.2]**

---

## Annual Batches and Time Points

### 3.2.S.7.2 Post-Approval Stability Protocol and Stability Commitment: Annual Batches and Time Points

#### 3.2.S.7.2.1 Introduction and Strategic Regulatory Framework
The Post-Approval Stability Protocol (PASP) for **Glucogen-XR (glucapeptide extended-release)** drug substance (DS) is designed in accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*), **ICH Q5C** (*Stability Testing of Biotechnological/Biological Products*), and **21 CFR 314.81(b)(1)(ii)**. 

As part of the lifecycle management strategy for Google Health Sciences (a Division of Google Cloud Life Sciences), this protocol ensures the continued monitoring of the drug substance’s quality, safety, and efficacy under the approved storage conditions of **-70°C ± 10°C (Ultra-Low Temperature Freezer)**. The protocol serves as a commitment to the FDA that any batch of Glucogen-XR produced after the initial submission and approval of the Biologics License Application (BLA) will be monitored to confirm that the assigned shelf-life (retest period) remains valid and that no atypical degradation profiles emerge during commercial-scale production.

#### 3.2.S.7.2.2 Annual Batch Selection Criteria
Google Health Sciences commits to placing at least **one (1) commercial-scale batch** of Glucogen-XR drug substance into the stability program per calendar year, provided that at least one batch is manufactured during that year. 

**Selection Logic and Risk-Based Approach:**
1.  **Representativeness:** The selected annual batch (designated as the "Annual Commitment Batch") must be manufactured using the validated process described in Section 3.2.S.2.2.
2.  **Campaign-Based Manufacturing:** In years where multiple manufacturing campaigns are executed at the South San Francisco facility (Site ID: GHS-SSF-3000), the first batch of the first campaign of the year is typically selected to provide the earliest possible data for that production year.
3.  **Process Deviations:** Any batch subject to a major non-conformance or deviation (even if released) is generally excluded from the *standard* annual stability program; such batches are instead placed on "Specific Investigation Stability" (SIS) protocols.
4.  **Scale-Up/Equipment Changes:** If a significant (Level 2 or 3 per SUPAC-SS/ICH Q5E) change occurs, the first batch produced under the modified conditions will fulfill the annual commitment.

#### 3.2.S.7.2.3 Detailed Stability Schedule and Time Points
The stability schedule for Glucogen-XR is designed to provide high-resolution data during the first year of storage and consistent monitoring through the end of the proposed retest period of **60 months**.

##### Table 3.2.S.7.2-1: Post-Approval Stability Testing Matrix (Long-Term Storage: -70°C ± 10°C)

| Time Point (Months) | Interval (Days) | Window (Days) | Testing Requirements | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **0 (Release)** | 0 | N/A | Full Release Specification | Baseline establishment (T=0) |
| **3** | 90 | ± 7 | Reduced Protocol A | Early-stage molecular aggregation check |
| **6** | 180 | ± 7 | Reduced Protocol A | Intermediate physical stability check |
| **9** | 270 | ± 7 | Reduced Protocol A | Trending of deamidation/oxidation |
| **12** | 365 | ± 14 | Full Specification | Annual comprehensive assessment |
| **18** | 545 | ± 14 | Reduced Protocol A | Mid-term stability check |
| **24** | 730 | ± 21 | Full Specification | Bi-annual comprehensive assessment |
| **36** | 1095 | ± 30 | Full Specification | Long-term stability verification |
| **48** | 1460 | ± 30 | Full Specification | Extended stability verification |
| **60** | 1825 | ± 30 | Full Specification | End-of-shelf-life (Retest Period) |

*Full Specification includes all attributes listed in Section 3.2.S.4.1 (Potency, Purity, Impurities, Safety, and Identity).*
*Reduced Protocol A focuses on stability-indicating markers (HCP-SEC, RP-HPLC, Bioassay, pH, and Visual).*

#### 3.2.S.7.2.4 Anticipated Annual Batch Identification (2025-2029)
The following table outlines the projected batch numbering and enrollment schedule for the next five years of commercial production at the 3000 Innovation Drive facility.

##### Table 3.2.S.7.2-2: Projected Annual Stability Batch Enrollment Schedule

| Calendar Year | Projected Batch ID | Manufacturing Site | Scale (Liters) | Proposed Enrollment Date | Expected Completion (60M) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **2025** | GLUC-2025-001 | GHS-SSF-3000 | 2,000L | Q1 2025 | Q1 2030 |
| **2026** | GLUC-2026-001 | GHS-SSF-3000 | 2,000L | Q1 2026 | Q1 2031 |
| **2027** | GLUC-2027-001 | GHS-SSF-3000 | 2,000L | Q1 2027 | Q1 2032 |
| **2028** | GLUC-2028-001 | GHS-SSF-3000 | 2,000L | Q1 2028 | Q1 2033 |
| **2029** | GLUC-2029-001 | GHS-SSF-3000 | 2,000L | Q1 2029 | Q1 2034 |

#### 3.2.S.7.2.5 Storage Conditions and Chamber Management
Samples are stored in validated ultra-low temperature freezers (Model: GHS-ULT-9000-Series) located in the Stability Storage Suite (Building 4, Room 402). 

1.  **Primary Storage:** -70°C ± 10°C.
2.  **Monitoring:** Continuous temperature monitoring via the Google Cloud IoT Core Telemetry System. Alarms are triggered if the temperature exceeds -60°C for >15 minutes.
3.  **Redundancy:** In the event of a catastrophic failure, 100% back-up capacity is maintained in an independent power-grid-connected chamber (GHS-ULT-9001).
4.  **Excursions:** Any temperature excursion outside the -70°C ± 10°C range will be documented via a Quality Management System (QMS) deviation and evaluated using the Mean Kinetic Temperature (MKT) for biologics (though MKT is generally not applicable to frozen storage; kinetic modeling of protein denaturation will be utilized instead).

#### 3.2.S.7.2.6 Analytical Testing Protocol and Methods
The testing of Glucogen-XR drug substance during stability is performed using validated stability-indicating methods.

##### Table 3.2.S.7.2-3: Analytical Methods and Stability-Indicating Significance

| Test Attribute | Method Reference | Category | Stability Significance |
| :--- | :--- | :--- | :--- |
| **Appearance** | USP <790> | Physical | Detection of particulates, opalescence, or color change. |
| **Potency (In-Vitro)** | GHS-MET-0045 (Cell-based Bioassay) | Biological | Detects loss of GLP-1 receptor activation capability. |
| **Purity (SEC-HPLC)** | GHS-MET-0012 | Chemical | Detects aggregation (dimers, trimers, high MW species). |
| **Purity (RP-HPLC)** | GHS-MET-0015 | Chemical | Detects chemical degradation (oxidation, deamidation). |
| **Charge Heterogeneity** | GHS-MET-0022 (iCIEF) | Chemical | Detects acidic and basic variant shifts over time. |
| **pH** | USP <791> | Physicochemical | Monitors buffering capacity and stability of the formulation. |
| **Sub-visible Particles** | USP <788> | Physical | Monitoring of proteinaceous and non-proteinaceous particulates. |

#### 3.2.S.7.2.7 Statistical Evaluation and Data Reporting
Stability data for Glucogen-XR are analyzed statistically to identify trends (OOT - Out of Trend) and to ensure the shelf-life remains within the 95% confidence interval of the specification limit.

**Linear Regression Analysis:**
The following formula is used to model the degradation of the main peak (RP-HPLC) over time:
$$Y = \beta_0 + \beta_1(t) + \epsilon$$
Where:
*   $Y$ = Measured attribute (e.g., % Purity)
*   $\beta_0$ = Intercept at $T=0$
*   $\beta_1$ = Rate of degradation (slope)
*   $t$ = Time in months
*   $\epsilon$ = Random error

If the slope ($\beta_1$) is significantly different from zero ($p < 0.05$), the time at which the lower 95% confidence limit intersects the acceptance criterion is calculated. If this time is less than the approved retest period, a formal investigation is initiated.

#### 3.2.S.7.2.8 Protocol for Out-of-Specification (OOS) Results
In the event of an OOS result during the post-approval stability program:
1.  **Immediate Notification:** The Quality Control (QC) Stability Manager and Regulatory Affairs are notified within 24 hours.
2.  **Phase I Laboratory Investigation:** Assessment of laboratory error, equipment malfunction, or analyst error (per GHS-SOP-QC-009).
3.  **Phase II Manufacturing Investigation:** If no lab error is found, a full manufacturing root cause analysis is conducted.
4.  **FDA Reporting:** Per **21 CFR 314.81(b)(1)(ii)**, any failure of a stability batch to meet specifications must be reported to the FDA as a "Field Alert Report" (FAR) within 3 working days of the confirmed OOS.

#### 3.2.S.7.2.9 Cumulative Stability Data Tables (Sample Representation)
The following table represents the data structure for the 2025 annual batch.

##### Table 3.2.S.7.2-4: Stability Data for GLUC-2025-001 (Simulated)

| Month | Appearance | Bioassay (% Potency) | SEC (% Main) | RP-HPLC (% Main) | pH | Sub-visible (>10µm) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Spec** | **Clear, Colorless** | **80-125%** | **≥ 98.0%** | **≥ 95.0%** | **6.5 ± 0.3** | **≤ 6000/cont** |
| 0 | Conforms | 102% | 99.8% | 98.7% | 6.5 | 112 |
| 3 | Conforms | 101% | 99.7% | 98.6% | 6.5 | 145 |
| 6 | Conforms | 103% | 99.7% | 98.4% | 6.6 | 130 |
| 12 | Conforms | 99% | 99.6% | 98.1% | 6.5 | 168 |

---
**Footnotes & References:**
1.  *ICH Q1A(R2): Stability Testing of New Drug Substances and Products.*
2.  *ICH Q5C: Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.*
3.  *USP <790> Visible Particulates in Injections.*
4.  *GHS-SOP-QA-552: Post-Approval Stability Management.*
5.  *Internal Reference: Glucogen-XR Drug Substance Retest Period Characterization Report (GHS-RPT-2024-DS01).*

---

## Bracketing and Matrixing Strategies

### **3.2.S.7.2 Post-Approval Stability Protocol and Stability Commitment**
#### **Subsection: Bracketing and Matrixing Strategies for Glucogen-XR (glucapeptide extended-release)**

---

### **1.0 Introduction and Regulatory Rationale**

The application of reduced stability testing designs—specifically bracketing and matrixing—for **Glucogen-XR (glucapeptide extended-release)** is predicated on a comprehensive risk assessment of the Drug Substance (DS) manufacturing process, the molecular complexity of the glucapeptide moiety, and the historical stability profile observed during Phase I-III clinical development. 

Google Health Sciences (GHS) has designed this protocol in strict accordance with:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1D:** Bracketing and Matrixing Designs for Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **FDA Guidance for Industry:** ANDAs: Stability Testing of Drug Substances and Products, Questions and Answers (2014).

Given that Glucogen-XR is a recombinant GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001 cell line**, the stability profile is sensitive to temperature-induced aggregation, deamidation, and oxidation. The bracketing and matrixing strategies outlined herein are intended to optimize resource utilization while maintaining a high degree of statistical confidence ($P > 0.95$) in the assigned retest period.

---

### **2.0 Bracketing Strategy**

#### **2.1 Definition of Bracketing for Glucogen-XR**
For the Drug Substance, bracketing is applied primarily to the container closure system (CCS) sizes and fill volumes, as the formulation of Glucogen-XR DS is uniform across all production scales ($2,000$L to $12,000$L bioreactor scale). 

#### **2.2 Bracketing Factors**
The DS is stored in high-density polyethylene (HDPE) bottles or 316L Stainless Steel (SS) mini-bulk cryo-vessels. 

**Table 2.2-1: Bracketing Design for Container Closure Systems**
| CCS Identifier | Material | Nominal Volume | Fill Range (L) | Bracketing Category |
| :--- | :--- | :--- | :--- | :--- |
| **CCS-A** | 316L Stainless Steel | 1.0 L | 0.5 - 0.8 L | **Extreme (Low)** |
| **CCS-B** | 316L Stainless Steel | 5.0 L | 2.5 - 4.0 L | *Intermediate (Bracketed)* |
| **CCS-C** | 316L Stainless Steel | 20.0 L | 10.0 - 18.0 L | **Extreme (High)** |

**Note:** According to ICH Q1D, if the DS is stored in the same material of construction (316L SS) across multiple sizes, testing only the extremes (1.0 L and 20.0 L) is sufficient to represent the intermediate (5.0 L) size, provided the surface-area-to-volume (SA/V) ratio is characterized.

#### **2.3 Surface Area to Volume (SA/V) Calculation**
The degradation kinetics of peptides at the solid-liquid interface (adsorption) and liquid-air interface (oxidation/denaturation) are influenced by the SA/V ratio.

$$SA/V = \frac{2\pi r^2 + 2\pi rh}{\pi r^2 h}$$

*   **CCS-A (1.0 L):** Calculated SA/V = $0.42 cm^{-1}$
*   **CCS-C (20.0 L):** Calculated SA/V = $0.18 cm^{-1}$

By testing CCS-A (worst-case for surface-mediated degradation) and CCS-C (worst-case for thermal mass lag), the intermediate CCS-B is statistically covered.

---

### **3.0 Matrixing Strategy**

#### **3.1 Statistical Justification**
Matrixing is applied to the time points for long-term and accelerated stability studies. Google Health Sciences utilizes a **1/3rd reduction design**. This design assumes that the stability of the intermediate time points can be predicted by the preceding and succeeding points.

#### **3.2 Matrixing Applicability Grid**
Matrixing is applied across three primary commercial lots produced at the South San Francisco (SSF) facility.

**Table 3.2-1: Master Matrixing Schedule (Long-Term: 5°C ± 3°C)**
| Batch Number | Month 0 | Month 3 | Month 6 | Month 9 | Month 12 | Month 18 | Month 24 | Month 36 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **GLUC-2025-001** | T | T | T | S | T | S | T | T |
| **GLUC-2025-002** | T | S | T | T | T | T | S | T |
| **GLUC-2025-003** | T | T | S | T | T | T | T | T |

*Legend: T = Full Testing; S = Statistical Sampling (No testing, data inferred via regression).*

#### **3.3 Criteria for Matrixing Eligibility**
1.  **Potency Range:** All batches must be within $95.0\% - 105.0\%$ of the target concentration ($150 mg/mL$).
2.  **Impurity Profile:** Total related substances must be $< 2.0\%$ at $t=0$.
3.  **Process Consistency:** Batches must be manufactured using the identical GHS-CHO-001 upstream process and the "Process B" downstream purification (Protein A, CEX, HIC, UF/DF).

---

### **4.0 Detailed Testing Protocols and Procedures**

#### **4.1 Sampling Protocol (SOP-GHS-STAB-09)**
1.  **Retrieval:** Pull samples from the stability chamber (Sanyo-Panasonic Environmental Chamber ID: **EQP-GHS-104**).
2.  **Equilibration:** Allow samples to reach ambient temperature ($20-25^\circ C$) for $45$ minutes before opening the CCS.
3.  **Aseptic Aliquoting:** Perform all sampling under a Class 100 (ISO 5) laminar flow hood.
4.  **Re-sealing:** Nitrogen overlay (99.99% purity) must be applied to the headspace of the container before re-sealing with a torque-calibrated cap ($12-15 in-lbs$).

#### **4.2 Analytical Testing Panel (Selection)**
For each stability pull, the following "Stability Indicating Methods" (SIMs) are performed:

*   **Purity by RP-HPLC (USP <121>):** Detection of deamidation (Asp/Iso-Asp) and oxidation (Met-sulfoxide).
*   **Purity by SEC-HPLC:** Detection of high-molecular-weight species (HMWS) and aggregates.
*   **Potency (Cell-Based Bioassay):** Measurement of cAMP induction in GLP-1 receptor-expressing HEK293 cells.
*   **Charge Heterogeneity (icIEF):** Monitoring of acidic and basic variants.

---

### **5.0 Statistical Evaluation and Data Interpretation**

#### **5.1 Data Pooling (ICH Q1E)**
Google Health Sciences uses an **Analysis of Covariance (ANCOVA)** to determine if stability data can be pooled across the bracketed batches.

*   **Null Hypothesis ($H_0$):** All batches have the same degradation slope and intercept.
*   **Significance Level:** $\alpha = 0.25$ (per ICH Q1E for pooling feasibility).

#### **5.2 Mathematical Model for Retest Period**
The retest period is defined by the time point where the **95% one-sided lower confidence limit** for the mean potency intersects the acceptance criterion ($90.0\%$).

$$Y_t = \beta_0 + \beta_1 X + \epsilon$$
Where:
*   $Y_t$ = Potency at time $t$
*   $\beta_0$ = Intercept (Initial Potency)
*   $\beta_1$ = Rate of degradation (Slope)
*   $X$ = Time (Months)

---

### **6.0 Commitment for New Batches**

Google Health Sciences commits to the following:
1.  **Post-Approval Monitoring:** The first three commercial production batches of Glucogen-XR DS (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003) will be placed on the long-term stability program according to the matrix design above.
2.  **Annual Batch Placement:** On an ongoing basis, at least one batch per year will be added to the stability program (the "Annual Commitment Batch").
3.  **Deviations:** Any OOS (Out of Specification) results or significant changes in trends will be reported to the FDA within 15 working days via a Supplement-Changes Being Effected (CBE-30) or Prior Approval Supplement (PAS) as appropriate.

---

### **7.0 Summary Table of Reduced Design**

**Table 7.0-1: Total Testing Reductions (Comparative Analysis)**
| Scenario | Total Testing Points (Full Design) | Total Testing Points (Matrix/Bracketed) | % Reduction |
| :--- | :---: | :---: | :---: |
| 24-Month Study (3 Lots) | 27 Pulls | 18 Pulls | 33.3% |
| 36-Month Study (3 Lots) | 33 Pulls | 22 Pulls | 33.3% |

**Author:**
*Regulatory Affairs Strategy Group*
Google Health Sciences
3000 Innovation Drive, South San Francisco, CA 94080

**Date:** 15-Oct-2024
**Document ID:** GHS-GLUC-M3DS-STAB-004-REV01

---

# Comparability of Stability Data Across Process Changes

## Pre-Change vs. Post-Change Batches

### 3.2.S.7.3.1.2 Pre-Change vs. Post-Change Batches: Comparative Stability Assessment

This section provides a granular, data-driven assessment of the stability profiles for Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) manufactured using the Phase 2 clinical process (Process B, Pre-Change) versus the proposed commercial manufacturing process (Process C, Post-Change). The primary modification involved the transition from a 500L fed-batch stirred-tank bioreactor (STR) to a 2,000L STR utilizing an optimized chemically defined (CD) feed strategy and an enhanced Protein A chromatography resin with a proprietary ligand for improved monomer recovery.

#### 1.0 Overview of Comparability Strategy
In accordance with **ICH Q5E: Comparability of Biotechnological/Biological Products**, Google Health Sciences (GHS) has executed a prospective stability comparability study. The objective is to demonstrate that the molecular integrity, potency, and impurity profile of Glucogen-XR remain unaffected by the scale-up and process refinements.

The comparability assessment utilizes a **Side-by-Side Stability Matrix**, evaluating three (3) representative batches from each process.

#### 2.0 Identification of Batches and Manufacturing Sites
All batches were manufactured at the Google Health Sciences facility located at 3000 Innovation Drive, South San Francisco, CA.

**Table 1: Batch Identification and Purpose**
| Batch Number | Process Version | Scale (L) | Manufacturing Date | Role in Stability Study |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Process B (Pre) | 500L | 12-JAN-2025 | Primary Clinical Lead |
| **GLUC-2025-002** | Process B (Pre) | 500L | 04-FEB-2025 | Supporting Clinical |
| **GLUC-2025-003** | Process B (Pre) | 500L | 02-MAR-2025 | Supporting Clinical |
| **GLUC-2025-101** | Process C (Post) | 2,000L | 15-MAY-2025 | Commercial Validation (PPQ) |
| **GLUC-2025-102** | Process C (Post) | 2,000L | 02-JUN-2025 | Commercial Validation (PPQ) |
| **GLUC-2025-103** | Process C (Post) | 2,000L | 20-JUN-2025 | Commercial Validation (PPQ) |

#### 3.0 Stability Protocol and Storage Conditions
The stability program follows **ICH Q1A(R2)** and **ICH Q5C** guidelines. Drug Substance is stored in 10L Sartorius Stedim Celsius® FFT paks (polyethylene/EVA) at -70°C ± 10°C (Long-Term) and 5°C ± 3°C (Accelerated).

**Table 2: Stability Testing Matrix for Comparative Batches**
| Condition | Temperature | Frequency (Months) |
| :--- | :--- | :--- |
| **Long-Term** | -70°C ± 10°C | 0, 3, 6, 9, 12, 18, 24, 36 |
| **Accelerated** | 5°C ± 3°C | 0, 1, 3, 6 |
| **Stress** | 25°C ± 2°C / 60% RH | 0, 0.5, 1 |

#### 4.0 Comparative Data Analysis: Long-Term Storage (-70°C)

##### 4.1 Purity by Size Exclusion Chromatography (SE-HPLC)
SE-HPLC is used to monitor the formation of High Molecular Weight Species (HMWS) and Low Molecular Weight Species (LMWS). The specification is ≥ 98.0% Monomer.

**Table 3: SE-HPLC Comparative Results (Monomer %)**
| Batch ID | T=0 | T=3M | T=6M | T=12M | Δ (0-12M) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001 (Pre)** | 99.42 | 99.38 | 99.35 | 99.30 | -0.12 |
| **GLUC-2025-002 (Pre)** | 99.39 | 99.35 | 99.33 | 99.28 | -0.11 |
| **GLUC-2025-003 (Pre)** | 99.45 | 99.40 | 99.38 | 99.33 | -0.12 |
| **Mean (Pre-Change)** | **99.42** | **99.38** | **99.35** | **99.30** | **-0.12** |
| **GLUC-2025-101 (Post)** | 99.51 | 99.48 | 99.45 | 99.41 | -0.10 |
| **GLUC-2025-102 (Post)** | 99.48 | 99.44 | 99.42 | 99.37 | -0.11 |
| **GLUC-2025-103 (Post)** | 99.53 | 99.50 | 99.46 | 99.42 | -0.11 |
| **Mean (Post-Change)** | **99.51** | **99.47** | **99.44** | **99.40** | **-0.11** |

*Analysis:* Post-change batches exhibit slightly higher initial monomer purity (avg. 99.51% vs. 99.42%) due to the optimized Protein A step. The degradation rate (slope) at -70°C is statistically equivalent (p > 0.05).

##### 4.2 Charge Heterogeneity by iCIEF
Monitoring acidic and basic variants is critical for GLP-1 analogs, as deamidation can impact potency.

**Table 4: iCIEF Comparative Results (Main Peak %)**
| Batch ID | T=0 | T=3M | T=6M | T=12M |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001 (Pre)** | 78.4 | 78.2 | 78.1 | 77.9 |
| **GLUC-2025-101 (Post)** | 79.1 | 78.9 | 78.8 | 78.6 |

*Statistical Note:* The Main Peak percentage remains within the established range of 75.0% - 85.0% for both processes. No new acidic peaks were observed in the Post-Change batches.

#### 5.0 Comparative Data Analysis: Accelerated Storage (5°C)
Accelerated studies are used to amplify differences in degradation kinetics.

**Table 5: Potency by In Vitro Bioassay (GLP-1R Activation % of Reference)**
*Protocol: cAMP response in HEK293 cells expressing human GLP-1R.*
| Batch ID | T=0 | T=1M | T=3M | T=6M |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-002 (Pre)** | 102% | 100% | 98% | 95% |
| **GLUC-2025-102 (Post)** | 104% | 101% | 100% | 97% |

#### 6.0 Detailed Degradation Kinetics Comparison
To further demonstrate comparability, the Arrhenius degradation rates for the primary degradation pathway (Formation of HMWS) were calculated.

**Formula: Rate of Degradation ($k$)**
$$k = \frac{\ln(C_0 / C_t)}{t}$$
Where $C_0$ is initial monomer % and $C_t$ is monomer % at time $t$.

**Calculated k-values at 5°C (x $10^{-4}$ day$^{-1}$):**
*   **Pre-Change Mean:** $1.88 \pm 0.04$
*   **Post-Change Mean:** $1.86 \pm 0.03$

The overlapping confidence intervals confirm that the process changes did not alter the physical-chemical stability of the Glucogen-XR molecule.

#### 7.0 Forced Degradation (Stress) Comparison
Stress testing at 25°C/60% RH for 30 days was performed to identify "fingerprint" degradation products.

**Table 6: Summary of Forced Degradation Profiles (T=30 Days)**
| Parameter | Pre-Change (GLUC-2025-003) | Post-Change (GLUC-2025-103) |
| :--- | :--- | :--- |
| **HMWS (%)** | 4.2% | 4.1% |
| **Acidic Variants (%)** | 12.5% | 12.8% |
| **Oxidized Met (%)** | 2.1% | 2.0% |
| **Clipping (RP-HPLC %)** | 0.8% | 0.7% |

#### 8.0 Conclusion of Comparability
Based on the side-by-side stability data presented above, including long-term, accelerated, and stress conditions, Google Health Sciences concludes that Glucogen-XR Drug Substance manufactured via Process C (Post-Change) is **highly comparable** to Process B (Pre-Change). The minor differences observed in initial purity favor the commercial process and do not impact the stability profile or the shelf-life of the product.

**Regulatory Compliance Statement:**
This comparability study was conducted in alignment with:
1.  **FDA Guidance for Industry:** *Q5E Comparability of Biotechnological/Biological Products* (2005).
2.  **USP <1049>:** *Content of Biological Products*.
3.  **Google Quality Standard:** *GHS-QS-500.2: Process Change Management*.

---
*End of Subsection 3.2.S.7.3.1.2*

---

## Equivalence Demonstration

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.3: STABILITY DATA – COMPARABILITY AND EQUIVALENCE DEMONSTRATION

---

### 3.2.S.7.3.1. Executive Summary of Equivalence Demonstration
The purpose of this subsection is to provide a comprehensive equivalence demonstration for **Glucogen-XR (glucapeptide extended-release)** following the transition from the Phase 2 clinical manufacturing process (Process v1.2) to the Phase 3/Commercial scale manufacturing process (Process v2.0). 

Google Health Sciences has implemented a rigorous comparability protocol governed by **ICH Q5E (Comparability of Biotechnological/Biological Products)** and **ICH Q1A(R2) (Stability Testing of New Drug Substances and Products)**. This demonstration utilizes statistical equivalence testing (TOST - Two One-Sided Tests) to confirm that the stability profile of the drug substance remains unchanged despite scale-up and optimization of the downstream purification train.

---

### 3.2.S.7.3.2. Regulatory Framework and Statistical Methodology

#### 3.2.S.7.3.2.1. Regulatory References
This equivalence demonstration adheres to the following regulatory guidances:
1.  **ICH Q5E**: Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
2.  **ICH Q1A(R2)**: Stability Testing of New Drug Substances and Products.
3.  **ICH Q1E**: Evaluation of Stability Data.
4.  **USP <1049>**: Quality Attributes of Protein Therapeutics.
5.  **FDA Guidance for Industry**: Statistical Approaches to Establishing Bioequivalence.

#### 3.2.S.7.3.2.2. Statistical Determination of Equivalence (TOST)
To demonstrate that Process v2.0 is equivalent to Process v1.2, Google Health Sciences employed the **Two One-Sided Test (TOST)** procedure. 

**Mathematical Model:**
Let $\mu_{v1.2}$ be the mean degradation rate of the Phase 2 process and $\mu_{v2.0}$ be the mean degradation rate of the Commercial process.
*   **Null Hypothesis ($H_0$):** $|\mu_{v1.2} - \mu_{v2.0}| \ge \theta$ (The processes are not equivalent)
*   **Alternative Hypothesis ($H_1$):** $|\mu_{v1.2} - \mu_{v2.0}| < \theta$ (The processes are equivalent)

Where $\theta$ represents the pre-defined equivalence margin (Acceptance Criterion), established as 1.5 times the standard deviation of the historical Process v1.2 data.

---

### 3.2.S.7.3.3. Batch Selection and Manufacturing Sites
The following batches were utilized for the Equivalence Demonstration. All batches were manufactured at the **Google Health Sciences Facility, 3000 Innovation Drive, South San Francisco, CA 94080**.

#### Table 1: Batch Pedigree for Equivalence Demonstration
| Batch Number | Process Version | Scale (Liters) | Cell Line | Manufacture Date | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Process v1.2 | 500 L | GHS-CHO-001 | 12-JAN-2025 | Clinical/Reference |
| **GLUC-2025-002** | Process v1.2 | 500 L | GHS-CHO-001 | 28-JAN-2025 | Clinical/Reference |
| **GLUC-2025-003** | Process v1.2 | 500 L | GHS-CHO-001 | 10-FEB-2025 | Clinical/Reference |
| **GLUC-2025-101** | Process v2.0 | 2000 L | GHS-CHO-001 | 15-MAR-2025 | Commercial/Equivalence |
| **GLUC-2025-102** | Process v2.0 | 2000 L | GHS-CHO-001 | 30-MAR-2025 | Commercial/Equivalence |
| **GLUC-2025-103** | Process v2.0 | 2000 L | GHS-CHO-001 | 14-APR-2025 | Commercial/Equivalence |

---

### 3.2.S.7.3.4. Analytical Protocol and Testing Parameters
Stability samples were stored at the following conditions:
*   **Long-Term:** -70°C ± 10°C (Primary Storage)
*   **Accelerated:** 5°C ± 3°C
*   **Stress:** 25°C ± 2°C / 60% RH

#### Table 2: Stability Testing Schedule and Methods
| Parameter | Method ID | Specification (Release) | ICH Stability Attribute |
| :--- | :--- | :--- | :--- |
| Purity (Monomer) | SEC-HPLC-01 | $\ge 98.0\%$ | High-Molecular Weight Species |
| Purity (Main Peak) | RP-HPLC-04 | $\ge 95.0\%$ | Deamidation/Oxidation |
| Charge Variants | cIEF-09 | Report Profile | Acidic/Basic Variants |
| Potency (In Vitro) | BIO-CELL-02 | 80% - 120% | Biological Activity |
| Glycan Profile | LC-MS-05 | Match Reference | Post-Translational Mod. |

---

### 3.2.S.7.3.5. Comparative Stability Results (Real-Time Data)

#### 3.2.S.7.3.5.1. SEC-HPLC Analysis (Aggregate Formation)
Aggregate formation is a Critical Quality Attribute (CQA) for Glucogen-XR. The table below summarizes the % Monomer over 12 months at -70°C.

#### Table 3: Comparative % Monomer Stability Data (-70°C)
| Month | GLUC-2025-001 (v1.2) | GLUC-2025-002 (v1.2) | GLUC-2025-101 (v2.0) | GLUC-2025-102 (v2.0) |
| :--- | :--- | :--- | :--- | :--- |
| T=0 | 99.8% | 99.7% | 99.8% | 99.9% |
| T=3 | 99.8% | 99.7% | 99.8% | 99.8% |
| T=6 | 99.7% | 99.6% | 99.7% | 99.8% |
| T=9 | 99.7% | 99.6% | 99.7% | 99.7% |
| T=12 | 99.6% | 99.5% | 99.6% | 99.7% |

**Statistical Evaluation:**
The slope of monomer degradation for Process v1.2 was calculated at **-0.016% per month**. The slope for Process v2.0 was **-0.014% per month**. The 95% Confidence Interval (CI) for the difference in slopes [ -0.005, 0.009] falls entirely within the pre-defined equivalence margin of [-0.015, 0.015], confirming stability equivalence for purity.

---

### 3.2.S.7.3.6. Detailed Protocol for Accelerated Stability (Stress Testing)
To further demonstrate equivalence, an "Equivalence-by-Stress" protocol was executed.

**Procedure GHS-STAB-PRO-552:**
1.  **Aliquot Preparation:** Under aseptic conditions (ISO 5), transfer 2.0 mL of Drug Substance (Concentration: 50 mg/mL) into Type 1 borosilicate glass vials.
2.  **Incubation:** Place vials in a calibrated stability chamber (ID: STAB-CH-09) maintained at 25°C ± 2°C and 60% ± 5% RH.
3.  **Sampling Intervals:** Samples are pulled at 0, 7, 14, 21, and 28 days.
4.  **Quenching:** Upon removal, samples are immediately transitioned to -70°C to halt further degradation.
5.  **Analysis:** All samples from a single batch are analyzed in the same analytical run to minimize inter-assay variability.

#### Table 4: Stress Data (25°C) - RP-HPLC Main Peak (%)
| Day | GLUC-2025-003 (v1.2) | GLUC-2025-103 (v2.0) | Difference |
| :--- | :--- | :--- | :--- |
| 0 | 97.4 | 97.6 | +0.2 |
| 7 | 95.8 | 96.1 | +0.3 |
| 14 | 94.2 | 94.5 | +0.3 |
| 21 | 92.5 | 92.9 | +0.4 |
| 28 | 91.0 | 91.4 | +0.4 |

**Observation:** The degradation pathways (primarily oxidation at Met-14 and deamidation at Asn-28) are identical between the two manufacturing processes.

---

### 3.2.S.7.3.7. Biological Potency Equivalence
Biological potency was assessed using a GLP-1 receptor activation cell-based assay (CRE-luciferase reporter).

#### Table 5: Potency Trends (% of Reference Standard)
| Timepoint | Process v1.2 Mean (n=3) | Process v2.0 Mean (n=3) | P-Value (t-test) |
| :--- | :--- | :--- | :--- |
| Initial | 102% | 104% | 0.34 |
| 6 Months | 101% | 102% | 0.45 |
| 12 Months | 99% | 101% | 0.28 |

*Note: P-values > 0.05 indicate no statistically significant difference between the process generations at any given timepoint.*

---

### 3.2.S.7.3.8. Evaluation of Glycan Heterogeneity
Given the use of the **GHS-CHO-001** cell line, glycosylation of the glucapeptide is a critical marker of process consistency.

#### Table 6: Comparison of N-Glycan Profiles (T=12 Months)
| Glycan Species | v1.2 (Batch 001) | v2.0 (Batch 101) | Acceptance Range |
| :--- | :--- | :--- | :--- |
| G0F (%) | 45.2 | 44.8 | 40.0 - 50.0 |
| G1F (%) | 32.1 | 32.9 | 28.0 - 36.0 |
| G2F (%) | 8.4 | 8.1 | 5.0 - 12.0 |
| Sialylated (%) | 2.1 | 2.3 | $\le 5.0$ |

The glycan profile remains stable over the 12-month period for both processes, indicating that the extended-release properties (influenced by protein-protein interactions and glycan-mediated clearance) will remain consistent.

---

### 3.2.S.7.3.9. Conclusion of Equivalence
Based on the comparative stability data presented for the Phase 2 (Process v1.2) and Commercial (Process v2.0) batches of **Glucogen-XR**, Google Health Sciences concludes that the processes are **highly comparable and stability-equivalent**. 

Statistical analysis of primary degradation pathways (aggregation, oxidation, and deamidation) confirms that the shelf-life established for the clinical material is applicable to the commercial product. No new degradation products were observed in the v2.0 batches, and the rates of change for all CQAs are within the established statistical margins ($\theta$).

---

### 3.2.S.7.3.10. References
1.  **GHS-SOP-QA-0012**: Statistical Comparison of Stability Slopes.
2.  **GHS-TR-2025-44**: Final Comparability Report - Process v1.2 vs. v2.0.
3.  **USP <121>**: Insulin Assays (modified for GLP-1).
4.  **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.

---

## Regulatory Commitments

### **3.2.S.7.3.5 Regulatory Commitments: Comparability of Stability Data Across Process Changes**

---

#### **1.0 Introduction and Scope of Regulatory Commitments**

Google Health Sciences (GHS) hereby submits the following Regulatory Commitments (RC) regarding the stability profiles and comparability assessments for Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist produced in the GHS-CHO-001 cell line. These commitments are established in accordance with **FDA Guidance for Industry: Q5E Comparability of Biotechnological/Biological Products Subject to a Registration Application** and **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**.

The transition from Phase 2 (Process Version 2.0) to Phase 3/Commercial (Process Version 3.1) manufacturing at the South San Francisco (SSF) facility (3000 Innovation Drive) necessitated comprehensive stability comparability studies. This document outlines the protocols, statistical thresholds, and reporting schedules GHS commits to maintaining to ensure that process modifications—including the integration of the Cloud-Based Bioprocess Monitoring (CBBM) system—do not adversely affect the long-term stability, safety, or efficacy of the Drug Substance (DS).

---

#### **2.0 Commitment to Post-Approval Stability Protocols (PASP)**

GHS commits to the execution of a Post-Approval Stability Protocol (PASP) for any subsequent minor or moderate changes (SUPPAC-SS levels) to the manufacturing process.

##### **2.1 Protocol Framework for Process Version 3.2 Implementation**
Should GHS transition to Process Version 3.2 (intended for scale-up from 2,000L to 5,000L bioreactors), the following stability commitment is invoked:

1.  **Batch Selection:** A minimum of three (3) consecutive conformance batches (GLUC-2025-5K-001, GLUC-2025-5K-002, GLUC-2025-5K-003) will be placed on long-term and accelerated stability.
2.  **Testing Frequency:** 0, 3, 6, 9, 12, 18, 24, and 36 months ($5^\circ\text{C} \pm 3^\circ\text{C}$).
3.  **Comparability Criteria:** Data must meet the predefined acceptance criteria established in Section 3.2.S.7.3.2.

##### **Table 2.1-1: Commitment Schedule for Post-Change Stability Monitoring**
| Event Identifier | Change Level (Scale/Site) | Batch Numbers (Planned) | Reporting Mechanism | Expected Filing Date |
| :--- | :--- | :--- | :--- | :--- |
| **PC-001** | Scale-up to 5,000L | GLUC-2025-SUP-01/03 | CBE-30 / PAS | Q4 2025 |
| **PC-002** | Secondary Purification Site | GLUC-2026-SPS-01/03 | PAS | Q2 2026 |
| **PC-003** | Resin Life Extension (>50 cycles) | GLUC-2025-RES-01/03 | CBE-0 | Q3 2025 |

---

#### **3.0 Statistical Comparability Thresholds (SCT) and Commitments**

GHS commits to the application of the **Equivalence Testing Framework** (two one-sided t-tests, TOST) for comparing degradation rates between pre-change (Process 2.0) and post-change (Process 3.1) batches.

##### **3.1 Commitment to Zero-Slope Deviation (ZSD)**
GHS commits that the degradation slope ($k$) for the Primary Degradant (GHS-deg-01, deamidated species) shall not deviate by more than $\pm 15\%$ between process versions.

**Calculation Formula:**
$$f_{sim} = 50 \cdot \log \left\{ \left[ 1 + \frac{1}{n} \sum_{t=1}^n (R_t - T_t)^2 \right]^{-0.5} \cdot 100 \right\}$$
*Where $R_t$ is the reference batch (Process 2.0) and $T_t$ is the test batch (Process 3.1).*

##### **Table 3.1-1: Pre-defined Statistical Limits for Comparability**
| Quality Attribute | Methodology | Acceptance Limit (Lower) | Acceptance Limit (Upper) |
| :--- | :--- | :--- | :--- |
| **Purity (SE-HPLC)** | Linear Regression | $-0.10\% \text{/month}$ | $+0.10\% \text{/month}$ |
| **Potency (Cell-based)** | Slope Comparison | $90\%$ Confidence | $110\%$ Confidence |
| **Charge Variants (CEX)** | Mean Difference | $-2.0\%$ Acidic | $+2.0\%$ Acidic |

---

#### **4.0 Commitments Regarding Manufacturing Process Changes**

GHS recognizes that Glucogen-XR is highly sensitive to shear stress and temperature fluctuations during the purification steps. As such, GHS makes the following regulatory commitments regarding the Comparability Protocol (CP):

##### **4.1 Commitment to Stress Testing (Forced Degradation)**
For any process change involving the Viral Inactivation (VI) or Tangential Flow Filtration (TFF) steps, GHS commits to conducting a head-to-head forced degradation study.

**Protocol 4.1.A: Step-by-Step Stress Commitment**
1.  **Thermal Stress:** Exposure of DS to $40^\circ\text{C} \pm 2^\circ\text{C}$ for 14 days.
2.  **Photolytic Stress:** Minimum 1.2 million lux hours and integrated near UV energy of $\geq 200$ watt hours/square meter (per ICH Q1B).
3.  **Oxidative Stress:** Exposure to 0.03% $H_2O_2$ for 4 hours at room temperature.
4.  **Reporting:** Results will be compared to Reference Standard Batch GLUC-2025-REF-001.

##### **Table 4.1-1: Comparability Data for Process 2.0 vs. 3.1 (Commitment Verification)**
| Batch ID | Process Version | Site | Stability Period | Main Peak (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-V2-01** | 2.0 | SSF | 12 Months ($5^\circ\text{C}$) | 98.4% | 1.6% |
| **GLUC-2025-V3-01** | 3.1 | SSF | 12 Months ($5^\circ\text{C}$) | 98.3% | 1.7% |
| **GLUC-2025-V3-02** | 3.1 | SSF | 12 Months ($5^\circ\text{C}$) | 98.5% | 1.5% |

---

#### **5.0 Commitment to Analytical Method Validation and Transfer**

To ensure the integrity of stability comparability data across different labs (GHS-SSF vs. GHS-Mountain View), GHS commits to:

1.  **Method Transfer Robustness:** All stability-indicating methods (SIMs), including **GHS-TM-442 (RP-HPLC for Purity)** and **GHS-TM-981 (Bioassay)**, shall undergo co-validation at the receiving site.
2.  **System Suitability:** GHS commits that no stability data will be utilized for comparability if the system suitability requirements (e.g., %RSD $\leq 2.0$, Tailing Factor $\leq 1.5$) are not met at every time point.

---

#### **6.0 Commitment to Annual Stability Reports (ASR)**

GHS commits to providing an annual update to the FDA in the Annual Report (21 CFR 314.81) for Glucogen-XR. This report will include:

1.  **Trend Analysis:** A regression analysis of all ongoing stability batches.
2.  **Out-of-Trend (OOT) Notifications:** GHS commits to notifying the FDA within 30 days if a stability trend suggests a shelf-life reduction of $\geq 6$ months, even if the result remains within specification.
3.  **Shelf-Life Extension:** GHS will not extend the expiration dating period for Glucogen-XR Drug Substance beyond the current 36-month limit without a formal Supplement - Changes Being Effected (CBE-30) submission supported by 24 months of real-time data from at least three Process 3.1 batches.

---

#### **7.0 Summary of Batch Identification and Tracking**

GHS maintains a rigorous nomenclature system for all stability-committed batches to ensure traceability to process versions.

##### **Table 7.0-1: Committed Stability Matrix for 2025-2026**
| Batch Number | Process Version | Change Description | Purpose | End Date |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-CP-01** | 3.1 | Baseline Process | Commercial Stability | Q1 2028 |
| **GLUC-2025-CP-02** | 3.1 | Baseline Process | Commercial Stability | Q2 2028 |
| **GLUC-2025-CP-03** | 3.1 | Baseline Process | Commercial Stability | Q2 2028 |
| **GLUC-2025-CH-01** | 3.1.1 | New Column Resin Lot | Comparability | Q4 2026 |

---

#### **8.0 References and Regulatory Standards**

1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5E:** Comparability of Biotechnological/Biological Products.
3.  **USP <1049>:** Quality Attributes of Synthetic Peptides and Recombinant Peptides.
4.  **21 CFR 314.70:** Supplements and other changes to an approved application.
5.  **GHS Internal Standard Operating Procedure (SOP-QA-0092):** Statistical Evaluation of Stability Data for Biologics.

---

**Authorized Signatory:**  
*Digital Signature via GHS-Cloud-Sign*  
**Dr. Elizabeth Thorne**  
Head of Regulatory Affairs, Biologics Division  
Google Health Sciences  
3000 Innovation Drive, South San Francisco, CA 94080  
Date: 15-Oct-2024

---

# Degradation Products Identification

## Degradation Pathway Elucidation

# MODULE 3: QUALITY (DENSELY FORMATTED TECHNICAL DATA)
## SECTION 3.2.S.7.3: STABILITY – DEGRADATION PRODUCTS IDENTIFICATION
### SUBSECTION: DEGRADATION PATHWAY ELUCIDATION (GLUCOGEN-XR)

---

#### 3.2.S.7.3.1 Executive Summary of Degradation Kinetics
The degradation profile of Glucogen-XR (glucapeptide extended-release), a synthetic GLP-1 receptor agonist analog, has been characterized through comprehensive forced degradation studies (FDS) and real-time stability monitoring. Given the primary sequence complexity and the presence of a proprietary C-terminal extended-release (XR) motif, the molecule is susceptible to specific chemical transformations including deamidation, oxidation, isomerization, and covalent aggregation.

This document provides a granular elucidation of the pathways governing the chemical and physical transformation of the Drug Substance (DS). All studies were conducted in accordance with ICH Q1A(R2) *Stability Testing of New Drug Substances and Products* and ICH Q1B *Photostability Testing of New Drug Substances and Products*.

---

#### 3.2.S.7.3.2 Forced Degradation Methodology and Stress Conditions
To elucidate the degradation pathways, Batch **GLUC-2025-001** (Process Validation Batch) was subjected to exaggerated stress conditions. The objective was to achieve 10–20% degradation of the parent molecule to facilitate the identification of secondary and tertiary degradants that may not be observed under long-term storage (2–8°C).

##### Table 1: Stress Protocol Matrix for Glucogen-XR Pathway Elucidation
| Stress Category | Specific Condition | Duration | Rationale/ICH Reference | Expected Transformation |
| :--- | :--- | :--- | :--- | :--- |
| **Hydrolytic (Acid)** | 0.1M HCl, pH 2.0, 40°C | 48 Hours | ICH Q1A(R2) Section 2.1.2 | N-terminal cleavage, Deamidation |
| **Hydrolytic (Base)** | 0.1M NaOH, pH 10.0, 25°C | 6 Hours | ICH Q1A(R2) Section 2.1.2 | Deamidation (Asn/Gln), Racemization |
| **Oxidative** | 3.0% H2O2, 25°C, Dark | 12 Hours | ICH Q1A(R2) | Met-sulfoxide, Trp-hydroxylation |
| **Thermal** | 60°C, Dry Heat / Liquid | 14 Days | ICH Q1A(R2) | Aggregation, Fragmentation |
| **Photolytic** | 1.2M lux-hr / 200 W-hr/m² | 10 Days | ICH Q1B Option 2 | Photo-oxidation of Tyr/Trp |
| **Mechanical** | 300 RPM Agitation | 72 Hours | Internal Risk Assessment | Non-covalent Aggregation |

---

#### 3.2.S.7.3.3 Detailed Pathway Analysis: Chemical Degradation

##### 3.2.S.7.3.3.1 Deamidation Pathways (Asn and Gln Residues)
Deamidation is identified as the primary degradation pathway for Glucogen-XR under physiological and accelerated storage conditions. The Glucogen-XR sequence contains three critical asparagine (Asn) residues at positions 12, 18, and 24, and two glutamine (Gln) residues at positions 3 and 15.

**Mechanism:**
The reaction proceeds via the formation of a cyclic succinimide intermediate (Asu), which is subsequently hydrolyzed into a mixture of L-aspartyl and L-isoaspartyl (iso-Asp) linkages. 

**Analytical Characterization:**
High-Resolution Mass Spectrometry (HRMS) using a Thermo Scientific™ Q Exactive™ Plus Hybrid Quadrupole-Orbitrap was utilized for site-specific mapping.

**Equation 1: Rate of Deamidation ($k$):**
$$k_{deam} = A \cdot e^{-E_a/RT} \cdot [OH^-]^n$$
Where $E_a$ for Glucogen-XR deamidation was calculated at 84.5 kJ/mol between pH 6.5 and 8.0.

##### Table 2: Site-Specific Deamidation Rates (GLUC-2025-002, 25°C/60% RH)
| Residue Position | Sequence Context | Half-life ($t_{1/2}$) Days | Degradant Code | % Total Impurity (Mo 6) |
| :--- | :--- | :--- | :--- | :--- |
| Asn-12 | -Gly-Asn-Leu- | 412 | IMP-DEAM-12 | 1.2% |
| Asn-24 | -Ala-Asn-Ser- | 185 | IMP-DEAM-24 | 4.8% |
| Gln-03 | -Glu-Gln-Thr- | 1240 | IMP-DEAM-03 | 0.1% |

---

##### 3.2.S.7.3.3.2 Oxidative Pathways (Methionine and Tryptophan)
Glucogen-XR contains a Methionine at position 8 (Met-8) and Tryptophan at position 20 (Trp-20). Oxidation of Met-8 to Methionine Sulfoxide is the most rapid chemical transformation under oxidative stress ($H_2O_2$).

**Protocol for Oxidation Mapping:**
1. Aliquot 1.0 mg/mL Glucogen-XR in 50mM Phosphate Buffer (pH 7.4).
2. Add $H_2O_2$ to a final concentration of 0.03% to 3.0%.
3. Quench with L-Methionine (excess) at $T=0, 2, 4, 8, 12$ hours.
4. Digestion: Trypsin/Lys-C Endoproteinase at 1:20 ratio.
5. LC-MS/MS Analysis: C18 RP-HPLC (Acquity BEH) coupled to Orbitrap MS.

**Results for Batch GLUC-2025-001:**
Met-8 oxidation results in a mass shift of +15.9949 Da. Tryptophan oxidation at Trp-20 produces Kynurenine and N-formylkynurenine derivatives, observed primarily under photolytic stress (ICH Q1B).

---

#### 3.2.S.7.3.4 Physical Degradation: Aggregation and Fibrillization
As a GLP-1 agonist, Glucogen-XR is prone to $\beta$-sheet transformation and subsequent fibril formation.

##### 3.2.S.7.3.4.1 Covalent Dimerization and Multimerization
Covalent aggregation is mediated via:
1.  **Disulfide Shuffling:** While the parent molecule is linear, intermolecular disulfide bridges can form between Cys-residues introduced in the XR-motif during synthesis errors.
2.  **Formaldehyde Cross-linking:** Residual formaldehyde from manufacturing components can induce methylene bridging.

##### Table 3: Size Exclusion Chromatography (SEC-HPLC) Data (Accelerated Stability)
**Condition:** 40°C/75% RH; **Column:** TSKgel G2000SWxl; **Mobile Phase:** 0.1M Sodium Phosphate, 0.1M Sodium Sulfate, pH 6.8.

| Time Point (Days) | Monomer (%) | High Molecular Weight (HMW) (%) | Low Molecular Weight (LMW) (%) | Batch ID |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 99.42 | 0.45 | 0.13 | GLUC-2025-003 |
| 30 | 97.10 | 1.95 | 0.95 | GLUC-2025-003 |
| 90 | 94.22 | 4.15 | 1.63 | GLUC-2025-003 |
| 180 | 89.85 | 7.40 | 2.75 | GLUC-2025-003 |

---

#### 3.2.S.7.3.5 Fragmentation Pathways
N-terminal truncation is observed under acidic conditions (pH < 3.0). Specifically, the His-Gly cleavage at the N-terminus is the rate-limiting step for loss of potency.

**Statistical Analysis of Fragmentation:**
The Arrhenius plot for N-terminal cleavage shows a linear relationship ($R^2 = 0.9982$) between $1/T$ and $\ln(k)$, allowing for the prediction of shelf-life at refrigerated conditions.

**Formula for Predicted Degradation at 5°C:**
$$\ln(k_{5C}) = \ln(A) - \frac{E_a}{R(278.15)}$$
Calculated Predicted Rate: $2.1 \times 10^{-5}$ %/day.

---

#### 3.2.S.7.3.6 Summary Table of Identified Degradants
| Degradant Name | Type | RRT (Relative Retention Time) | Mass Shift (Da) | Origin |
| :--- | :--- | :--- | :--- | :--- |
| D-IsoAsp-24 | Isomerization | 0.92 | 0.000 | Basic Stress |
| Sulfoxide-Met8 | Oxidation | 0.88 | +15.995 | Oxidative Stress |
| Des-His1-Gly2 | Fragmentation | 1.15 | -212.18 | Acidic Stress |
| Succinimide-12 | Intermediate | 1.04 | -18.01 | Thermal Stress |

---

#### 3.2.S.7.3.7 Conclusion
The degradation of Glucogen-XR is a multi-pathway process dominated by Asn-24 deamidation and Met-8 oxidation. The analytical control strategy, including the Ultra-High Performance Liquid Chromatography (UHPLC) method **MET-GLUC-STAB-01**, is validated to remain stability-indicating by resolving all primary degradants identified in this elucidation study. Google Health Sciences continues to monitor these pathways through the ongoing 36-month stability program for batches **GLUC-2025-001** through **GLUC-2025-010**.

---
**Footnotes & References:**
1. *ICH Q1A (R2): Stability Testing of New Drug Substances and Products.*
2. *USP <1049> Content of Stability Protocols.*
3. *GHS Internal Method Validation Report V-2024-990-GLUC.*
4. *Cleland, J. L., et al. (1993). The Development of Stable Protein Formulations.*

---

## Major Degradants Characterization

### **3.2.S.7.3.2. Major Degradants Characterization**

---

#### **1.0 Introduction and Scope**
This section provides a comprehensive characterization of the major degradation products identified during the stability evaluation of **Glucogen-XR (glucapeptide extended-release)**. In alignment with **ICH Q3A(R2)** (*Impurities in New Drug Substances*) and **ICH Q6B** (*Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*), Google Health Sciences has conducted exhaustive mapping of the degradation landscape under long-term (25°C/60% RH), accelerated (40°C/75% RH), and stressed (photolytic, thermal, oxidative, and pH-extremes) conditions.

Glucogen-XR is a 31-amino acid recombinant peptide analog of human GLP-1, expressed in the proprietary **GHS-CHO-001** cell line. Due to its specific primary sequence and the extended-release formulation matrix, the molecule is susceptible to specific chemical modifications, primarily deamidation, oxidation, and covalent aggregation.

---

#### **2.0 Analytical Strategy for Degradant Characterization**
To ensure the structural integrity and potency of Glucogen-XR, a multi-orthogonal analytical platform was utilized to identify and quantify degradants.

##### **2.1 Primary Characterization Methods**
| Method ID | Technique | Purpose | Sensitivity/LOD |
| :--- | :--- | :--- | :--- |
| **GHS-MS-098** | LC-ESI-QTOF-MS/MS | Molecular weight confirmation and sequence mapping | 0.01% |
| **GHS-HPLC-042** | RP-HPLC (C18) | Quantitation of hydrophobic variants (Oxidation) | 0.05% |
| **GHS-CEX-112** | Cation Exchange (uHPLC) | Quantitation of charge variants (Deamidation) | 0.10% |
| **GHS-SEC-005** | Size Exclusion (MALS) | Determination of HMWP (Aggregation) | 0.02% |

---

#### **3.0 Identification of Major Degradant: D-Gln-17 Deamidated Glucogen-XR**
The most prevalent degradation product identified across all stability batches (GLUC-2025-001 through GLUC-2025-015) is the deamidation of the Glutamine residue at position 17 (Gln-17).

##### **3.1 Structural Elucidation via Peptide Mapping (LC-MS/MS)**
The deamidation of Gln-17 results in a mass shift of **+0.984 Da**. 

**Protocol GHS-PROT-882: Tryptic Digestion for Deamidation Mapping**
1. **Denaturation:** Dilute Glucogen-XR DS to 2.0 mg/mL in 6M Guanidine HCl, 50mM Tris-HCl (pH 8.0).
2. **Reduction:** Add 10mM DTT; incubate at 37°C for 45 minutes.
3. **Alkylation:** Add 25mM Iodoacetamide; incubate in the dark at room temperature for 30 minutes.
4. **Buffer Exchange:** Use Zeba™ Spin Desalting Columns into 50mM Ammonium Bicarbonate (pH 7.8).
5. **Digestion:** Add Tryptic Protease (Sequencing Grade) at a 1:20 (w/w) ratio. Incubate at 37°C for 16 hours.
6. **Quenching:** Add 1% Trifluoroacetic acid (TFA) to stop the reaction.
7. **Analysis:** Inject 10 µL onto a Waters ACQUITY UPLC BEH C18 column (1.7 µm, 2.1 x 150 mm).

**Table 3.2.S.7.3.2-A: Mass Spectrometry Data for Tryptic Fragment T3 (Residues 15-22)**
*Sequence: Gln-Ala-Gln-Glu-Phe-Ile-Ala-Trp*

| Sample ID | Fragment | Expected Mass (Da) | Observed Mass (Da) | $\Delta$ Mass (Da) | Interpretation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001 (T0)** | T3 Native | 1045.512 | 1045.513 | +0.001 | Native Sequence |
| **GLUC-2025-001 (12m/40C)**| T3-Deam | 1045.512 | 1046.496 | +0.984 | Deamidation at Gln17 |

##### **3.2 Quantitative Stability Data: Deamidation (%)**
Monitoring of the Gln-17 deamidated variant via Cation Exchange Chromatography (CEX).

| Batch Number | Storage Condition | T=0 | T=3 Months | T=6 Months | T=12 Months |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 5°C ± 3°C | 0.42% | 0.44% | 0.48% | 0.52% |
| **GLUC-2025-001** | 25°C / 60% RH | 0.42% | 1.15% | 2.04% | 3.88% |
| **GLUC-2025-002** | 40°C / 75% RH | 0.45% | 4.89% | 9.12% | 17.45% |

---

#### **4.0 Identification of Major Degradant: Met-14 Sulfoxide (Oxidation)**
Oxidation of the Methionine residue at position 14 (Met-14) is the secondary degradation pathway. This creates a more hydrophilic variant that elutes earlier in RP-HPLC.

##### **4.1 Reaction Kinetics and Mechanism**
The oxidation follows pseudo-first-order kinetics under atmospheric oxygen exposure. The addition of a single oxygen atom results in a mass increase of **+15.995 Da**.

**Formula for Rate of Oxidation ($k$):**
$$\ln([Native]_t / [Native]_0) = -kt$$
Where $[Native]_t$ is the percentage of non-oxidized peptide at time $t$.

##### **4.2 Characterization via Forced Degradation (H2O2 Stress)**
To confirm the site of oxidation, Glucogen-XR was treated with 0.1% $H_2O_2$ for 4 hours at 25°C.

**Table 3.2.S.7.3.2-B: RP-HPLC Retention Times of Oxidized Species**
| Peak ID | Identity | Relative Retention Time (RRT) | % Area (Stressed) |
| :--- | :--- | :--- | :--- |
| Peak 1 | Met(O)-14 Glucogen-XR | 0.88 | 12.4% |
| Peak 2 | Native Glucogen-XR | 1.00 | 85.2% |
| Peak 3 | Di-oxidized Glucogen-XR | 0.72 | 2.4% |

---

#### **5.0 High Molecular Weight Products (HMWP) - Aggregation**
Aggregation in Glucogen-XR occurs via non-covalent hydrophobic interactions and, to a lesser extent, covalent disulfide bridging (inter-chain).

##### **5.1 SEC-MALS Analysis**
Size Exclusion Chromatography coupled with Multi-Angle Light Scattering (SEC-MALS) was used to determine the absolute molar mass of the degradants in stability samples stored at 40°C.

*   **Monomer Peak:** 4.2 kDa (Theoretical: 4.18 kDa)
*   **Dimer Peak:** 8.4 kDa (Identified as the primary HMWP)
*   **Multimer Peak:** >25 kDa (Trace amounts <0.1%)

##### **5.2 Covalent vs. Non-Covalent Assessment**
Samples from batch **GLUC-2025-005** (6 months at 40°C) were analyzed under reducing and non-reducing conditions via SDS-PAGE.
1. **Non-reducing:** Clear band at ~8 kDa indicating covalent dimers.
2. **Reducing (with DTT):** Disappearance of the 8 kDa band; reversion to 4 kDa monomer.
*Conclusion:* The major HMWP degradant involves a disulfide exchange mechanism between Cys residues if the stabilization matrix is compromised.

---

#### **6.0 Trace Degradants and Impurity Thresholds**
In accordance with **USP <1086>** and **ICH Q3B(R2)**, any degradant exceeding the **Identification Threshold (0.10%)** has been characterized.

| Degradant Code | Chemical Modification | Identification Method | Status |
| :--- | :--- | :--- | :--- |
| **DG-1** | Aspartate Isomerization (Asp9) | Iso-Asp specific assay | Characterized |
| **DG-2** | N-terminal Glu-cyclization | MS/MS mapping | Characterized |
| **DG-3** | Trp-Oxidation (Trp31) | UV-Vis Spectroscopy | Trace (<0.05%) |

---

#### **7.0 Biological Activity of Degradants (Potency Impact)**
To evaluate the safety and efficacy risk of these degradants, enriched fractions of the D-Gln-17 and Met(O)-14 variants were isolated via semi-preparative HPLC and tested in a **GLP-1 Receptor Transactivation Cell-Based Bioassay (GHS-BIO-202)**.

**Table 3.2.S.7.3.2-C: Relative Potency of Major Degradants**
| Molecule | EC50 (nM) | Relative Potency (%) | Impact Assessment |
| :--- | :--- | :--- | :--- |
| **Native Standard** | 0.12 | 100% | N/A |
| **D-Gln-17 (Deam)** | 0.18 | 66.7% | Moderate Reduction |
| **Met(O)-14 (Oxid)** | 0.13 | 92.3% | Minimal Impact |
| **HMWP (Dimer)** | 0.45 | 26.7% | Significant Reduction |

*Note: Based on these data, the specification limit for Total Degradants is set at $\leq$ 5.0% to ensure the therapeutic window of Glucogen-XR remains within clinical parameters.*

---

#### **8.0 Summary of Degradation Pathways**
The degradation of Glucogen-XR is primarily driven by temperature and pH.
1.  **Low pH (<4.5):** Promotes Asp-isomerization and peptide bond cleavage.
2.  **Neutral/High pH (>7.5):** Promotes deamidation at Gln-17.
3.  **Oxidative Stress:** Targets Met-14.
4.  **Thermal Stress:** Accelerates all chemical pathways and promotes HMWP formation.

Google Health Sciences has implemented a control strategy (see **3.2.S.3.2**) that includes refrigerated storage (2-8°C) and a specialized buffer system (Acetate-based, pH 5.5) to minimize these characterized degradation events over the 36-month proposed shelf life.

---
**References:**
1. ICH Q3A(R2): Impurities in New Drug Substances.
2. ICH Q6B: Specifications for Biotechnological/Biological Products.
3. USP <129>: Analytical Procedures for Recombinant Therapeutic Monoclonal Antibodies and Related Peptides.
4. *Journal of Pharmaceutical Sciences*, "Kinetics of Peptide Deamidation," 2023.

**[END OF SECTION]**

---

## Toxicological Qualification of Degradants

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION: 3.2.S.7 STABILITY
### SUBSECTION: 3.2.S.7.3.2 TOXICOLOGICAL QUALIFICATION OF DEGRADANTS

---

**Proprietary Name:** Glucogen-XR™  
**Non-Proprietary Name:** Glucapeptide Extended-Release  
**Manufacturer:** Google Health Sciences (GHS), a Division of Google Cloud Life Sciences  
**Manufacturing Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Document ID:** GHS-GLUC-M3-DS-STAB-QUAL-001  
**Revision:** 1.0  
**Effective Date:** 24 October 2025  

---

#### 1.0 INTRODUCTION AND SCOPE

This subsection provides a comprehensive toxicological assessment and qualification of degradation products observed in Glucogen-XR (glucapeptide extended-release) during formal stability studies conducted under ICH Q1A(R2) conditions. As a synthetic/recombinant hybrid peptide therapeutic (GLP-1 receptor agonist), Glucogen-XR is subject to complex degradation pathways including deamidation, oxidation, and covalent aggregation.

The primary objective of this qualification program is to establish that the degradation profile of the Drug Substance (DS) and Drug Product (DP), when stored under recommended conditions (2-8°C) and under accelerated/stressed conditions, does not pose an unacceptable safety risk to patients. This document aligns with **ICH Q3A(R2)** (Impurities in New Drug Substances), **ICH Q3B(R2)** (Impurities in New Drug Products), and **ICH S6(R1)** (Preclinical Safety Evaluation of Biotechnology-Derived Pharmaceuticals).

---

#### 2.0 REGULATORY FRAMEWORK AND THRESHOLDS

Google Health Sciences has established qualification thresholds based on the Maximum Daily Dose (MDD) of Glucogen-XR. Given that the MDD is 2.0 mg per week (administered as a single subcutaneous injection), the daily exposure is calculated at approximately 0.28 mg/day.

**Table 1: Regulatory Thresholds for Glucogen-XR Degradants (Based on ICH Q3B(R2))**

| Parameter | Threshold (%) | Threshold (TDI) | GHS Action Limit |
| :--- | :--- | :--- | :--- |
| Reporting Threshold | 0.05% | N/A | 0.05% |
| Identification Threshold | 0.10% or 1.0 mg per day | 1.0 mg | 0.10% |
| Qualification Threshold | 0.15% or 1.0 mg per day | 1.0 mg | 0.15% |

*Note: For peptides, the immunological potential and biological activity of degradants take precedence over strict ICH Q3A/B numerical limits. All degradants exceeding 0.10% are subject to structural characterization and in silico risk assessment.*

---

#### 3.0 IDENTIFIED DEGRADATION PRODUCTS REQUIRING QUALIFICATION

Stability studies on batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003** identified four primary degradation products (DP-1 through DP-4) that approached or exceeded the qualification threshold under accelerated conditions (25°C/60% RH).

**Table 2: Summary of Primary Degradants and Observed Maximum Levels**

| Degradant ID | Chemical Nature | Retention Time (RRT) | Max Level (12m, 25°C) | Structural Change |
| :--- | :--- | :--- | :--- | :--- |
| **DP-1** | [Asp³]-Glucapeptide | 0.88 | 0.22% | Deamidation at Asn³ |
| **DP-2** | [Met(O)¹⁴]-Glucapeptide | 0.94 | 0.18% | Oxidation at Met¹⁴ |
| **DP-3** | β-Aspartyl Isomer | 1.05 | 0.14% | Iso-aspartate formation |
| **DP-4** | Covalent Dimer | 1.45 | 0.09% | Intermolecular disulfide |

---

#### 4.0 TOXICOLOGICAL EVALUATION STRATEGY (STEP-BY-STEP PROTOCOL)

The qualification of these degradants followed a tiered approach as defined in **GHS Standard Operating Procedure (SOP) TOX-0098: Assessment of Impurities in Peptides**.

##### 4.1 Step 1: In Silico Structure-Activity Relationship (SAR) Assessment
All degradants were screened for mutagenic potential (Ames mutagenicity) and general toxicity using:
*   **Derek Nexus (v6.1):** Expert rule-based system.
*   **MultiCASE (v2.1):** Statistical-based system.
*   **Calculations:** Relative Binding Affinity (RBA) predictions to the GLP-1 receptor using Google Cloud's DeepMind AlphaFold-Multimer.

##### 4.2 Step 2: Biological Activity and Potency Testing
Degradants were synthesized *de novo* to >95% purity and subjected to *in vitro* bioassays to determine if the degradation resulted in a "gain-of-function" (hyper-agonism) or "loss-of-function" (antagonism).
*   **Assay:** cAMP Accumulation Assay (HEK-293 cells expressing human GLP-1R).
*   **Acceptance Criteria:** Potency must be 50% - 150% of the parent Glucogen-XR reference standard.

##### 4.3 Step 3: Immunogenicity Risk Assessment
Peptide degradants can create "neo-epitopes." Assessment included:
*   **ProImmune REVEAL® MHC Peptide Binding Assays:** Determining the binding affinity of degradant sequences to the 50 most common HLA-DR, DQ, and DP alleles.
*   **Epivax EpiMatrix Score:** In silico mapping of T-cell epitopes.

---

#### 5.0 DETAILED DATA AND RESULTS BY DEGRADANT

##### 5.1 DP-1: [Asp³]-Glucapeptide (Deamidation)
Deamidation of Asparagine to Aspartic Acid is a common degradation pathway in Glucogen-XR.

**Table 3: Qualification Data for DP-1**

| Test | Method | Results (Batch GLUC-2025-QUAL-01) | Conclusion |
| :--- | :--- | :--- | :--- |
| **Potency (EC₅₀)** | cAMP Bioassay | 112% vs. Reference | Comparable activity |
| **Ames Test** | OECD 471 | Negative | Non-mutagenic |
| **Chromosomal Aberr.** | OECD 473 | Negative | Non-clastogenic |
| **MHC Binding** | REVEAL Assay | Low affinity (Binding Score <10) | Low immunogenicity risk |

**Calculation of Margin of Safety (MoS) for DP-1:**
*   Maximum level at shelf-life: 0.22%
*   Dose (DP-1) = 2.0 mg/week * 0.0022 = 0.0044 mg/week (0.62 µg/day).
*   NOAEL in Cynomolgus monkeys for parent: 1.0 mg/kg/day.
*   **MoS** = (1000 µg/kg / (0.62 µg / 70kg)) = **~112,000-fold margin.**

##### 5.2 DP-2: [Met(O)¹⁴]-Glucapeptide (Oxidation)
Oxidation of the Methionine residue at position 14 occurs primarily under light stress and presence of peroxides in excipients (polysorbate 80).

**Table 4: Potency Degradation Analysis (DP-2 vs. Native)**

| Concentration (nM) | Native Glucogen-XR (% cAMP) | DP-2 (Oxidized) (% cAMP) |
| :--- | :--- | :--- |
| 0.01 | 5.2 | 4.8 |
| 0.1 | 22.4 | 18.2 |
| 1.0 | 88.5 | 82.1 |
| 10.0 | 99.1 | 96.5 |

*Result:* DP-2 shows a statistically insignificant decrease in GLP-1 receptor activation (p=0.45). No safety concerns regarding altered pharmacology.

---

#### 6.0 CUMULATIVE TOXICITY ASSESSMENT (CTA)

Under ICH S6(R1) guidelines, Google Health Sciences conducted a 4-week repeat-dose toxicity study in Sprague-Dawley rats using "Stressed Drug Substance" (Batch **GLUC-2025-STR-01**) to qualify the degradation profile collectively.

**Batch Composition for Qualification Study:**
*   Parent Glucogen-XR: 98.2%
*   DP-1: 0.5% (Spiked)
*   DP-2: 0.5% (Spiked)
*   DP-3/DP-4: Balance

**Study Parameters:**
*   **Species:** Rat (N=10/sex/group)
*   **Dose Levels:** 0.1, 0.5, 2.5 mg/kg/day (Subcutaneous)
*   **Duration:** 28 days

**Table 5: 28-Day Tox Study Results (Stressed Material)**

| Endpoint | Result | Significance |
| :--- | :--- | :--- |
| Clinical Signs | No treatment-related deaths. Decreased food intake (expected). | Pharmacological effect |
| Hematology | No adverse findings in WBC, RBC, or PLT. | No toxicity |
| Histopathology | Minimal injection site inflammation. No systemic organ toxicity. | Qualified |
| ADA (Antibodies) | 2/20 animals positive (Titer < 1:10). Comparable to control. | No increased immunogenicity |

---

#### 7.0 JUSTIFICATION FOR SPECIFICATION LIMITS

Based on the toxicological qualification data provided above, the following shelf-life specifications for degradants in Glucogen-XR are justified:

1.  **Total Impurities:** NMT 3.0% (Supported by 28-day Tox study).
2.  **[Asp³]-Glucapeptide (DP-1):** NMT 0.5% (Qualified via spike study and potency assay).
3.  **[Met(O)¹⁴]-Glucapeptide (DP-2):** NMT 0.5% (Qualified via potency assay).
4.  **Any Unspecified Degradant:** NMT 0.15% (ICH Q3B limit).

---

#### 8.0 CONCLUSION

The degradation products identified in Glucogen-XR (GLUC-2025 series) have been rigorously evaluated through in silico, in vitro, and in vivo methodologies. DP-1 and DP-2, which exceed the 0.15% qualification threshold under stressed conditions, have been demonstrated to possess pharmacological activity comparable to the parent peptide and do not introduce new toxicological or immunogenic risks. The proposed specifications ensure that the safety profile of Glucogen-XR remains intact throughout its proposed 24-month shelf-life at 2-8°C.

---
**References:**
1.  FDA Guidance for Industry: *Q3B(R2) Impurities in New Drug Products* (2006).
2.  ICH S6(R1): *Preclinical Safety Evaluation of Biotechnology-Derived Pharmaceuticals* (2011).
3.  USP <1222>: *Terminology and Characterization of Impurities and Degradants*.
4.  GHS-VLD-REPT-2025-442: *Structural Characterization of GLUC-2025 Degradation Products by LC-MS/MS.*

---

# Stability Data Presentation

## Tabular Summaries

### 3.2.S.7.3 Stability Data Presentation: Tabular Summaries

**Document ID:** GHS-GLUC-XR-M3-STAB-001  
**Manufacturer:** Google Health Sciences (GHS), South San Francisco, CA  
**Drug Substance:** Glucogen-XR (Glucapeptide Extended-Release)  
**Date of Report:** 14 October 2025  
**Confidentiality:** Highly Confidential – Proprietary Information

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection provides a comprehensive presentation of the stability data for Glucogen-XR (glucapeptide) drug substance (DS), presented in accordance with ICH Q1A(R2) *Stability Testing of New Drug Substances and Products* and ICH Q5C *Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*. 

Glucogen-XR is a recombinant human glucagon-like peptide-1 (GLP-1) analogue produced in a proprietary CHO-K1 GS knockout cell line (GHS-CHO-001). Given the inherent sensitivity of peptide therapeutics to deamidation, oxidation, and aggregation, these tabular summaries detail the physical, chemical, and biological stability of the DS under long-term, accelerated, and stress conditions.

#### 2.0 STABILITY PROTOCOL OVERVIEW
The stability of Glucogen-XR DS is evaluated using a matrixing and bracketing design where applicable, though primary registration batches (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003) are subjected to full testing.

##### 2.1 Storage Conditions and Sampling Frequencies
Table 2.1-1 summarizes the environmental conditions and the cadence of analytical testing.

**Table 2.1-1: Stability Storage Matrix for Glucogen-XR DS**
| Study Type | Storage Condition | Sampling Intervals (Months) | Status |
| :--- | :--- | :--- | :--- |
| **Long-Term** | -70°C ± 10°C (Ultra-Low) | 0, 3, 6, 9, 12, 18, 24, 36 | Ongoing |
| **Long-Term** | -20°C ± 5°C (Standard Freezer) | 0, 3, 6, 9, 12, 18, 24, 36 | Ongoing |
| **Accelerated** | 5°C ± 3°C (Refrigerated) | 0, 1, 3, 6 | Completed |
| **Stress** | 25°C ± 2°C / 60% RH | 0, 0.5, 1, 2 | Completed |
| **Photostability** | ICH Q1B Option 2 | End of Study (1.2M Lux hours) | Completed |

---

#### 3.0 BATCH IDENTIFICATION AND SPECIFICATIONS
The batches included in this summary represent the commercial manufacturing process at the 2,000L scale performed at the 3000 Innovation Drive facility.

**Table 3.0-1: Batch Genealogy for Stability Studies**
| Batch Number | Scale | Date of Manufacture | Use | Container Closure |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | 15-Jan-2025 | Registration/Clinical | 5L HDPE Bottle (Type III) |
| **GLUC-2025-002** | 2,000L | 22-Jan-2025 | Registration/Clinical | 5L HDPE Bottle (Type III) |
| **GLUC-2025-003** | 2,000L | 02-Feb-2025 | Registration/Validation | 5L HDPE Bottle (Type III) |

---

#### 4.0 TABULAR SUMMARY OF STABILITY DATA: LONG-TERM (-70°C)

The following tables present data for the primary storage condition. All results are verified against USP <1043> and ICH Q6B specifications.

##### 4.1 Batch GLUC-2025-001 (Long-Term Storage: -70°C)
**Equipment ID:** FRZ-70-GHS-09 | **Methodology:** Per Section 3.2.S.4.2

| Test Parameter | Method | Acceptance Criteria | T=0 | T=3M | T=6M | T=9M |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Visual | Clear, colorless | Complies | Complies | Complies | Complies |
| **Protein Conc.** | UV (A280) | 50.0 ± 5.0 mg/mL | 50.2 | 50.1 | 50.3 | 50.2 |
| **pH** | USP <791> | 6.5 ± 0.3 | 6.5 | 6.6 | 6.5 | 6.5 |
| **Purity (RP-HPLC)** | GHS-MTH-01 | ≥ 98.0% | 99.4% | 99.3% | 99.3% | 99.2% |
| **Aggregates (SEC)** | GHS-MTH-02 | ≤ 1.0% | 0.2% | 0.3% | 0.3% | 0.4% |
| **Bioassay (Relative Potency)** | Cell-based | 80% - 125% | 102% | 98% | 101% | 99% |
| **Deamidation (CEX)** | GHS-MTH-03 | ≤ 2.0% | 0.5% | 0.6% | 0.6% | 0.7% |
| **Endotoxin** | USP <85> | ≤ 0.5 EU/mg | < 0.05 | NT | NT | < 0.05 |
| **Bioburden** | USP <61> | ≤ 10 CFU/10mL | 0 | NT | NT | 0 |

*Abbreviations: NT = Not Tested; RP-HPLC = Reversed-Phase High-Performance Liquid Chromatography; SEC = Size Exclusion Chromatography; CEX = Cation Exchange Chromatography.*

---

#### 5.0 TABULAR SUMMARY OF STABILITY DATA: ACCELERATED (5°C)

Accelerated studies at 5°C provide insight into the degradation kinetics of the glucapeptide molecule, specifically regarding the formation of N-terminal truncated species.

##### 5.1 Batch GLUC-2025-001 (Accelerated Storage: 5°C)
**Equipment ID:** REF-05-GHS-22 | **Control:** ± 3.0°C

| Test Parameter | T=0 | T=1M | T=3M | T=6M | Trend Analysis (slope/month) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Purity (RP-HPLC)** | 99.4% | 99.1% | 98.5% | 98.1% | -0.21% / month |
| **SEC Aggregates** | 0.2% | 0.4% | 0.6% | 0.8% | +0.10% / month |
| **Deamidation (%)** | 0.5% | 0.8% | 1.2% | 1.7% | +0.20% / month |
| **Potency (%)** | 102% | 101% | 98% | 95% | -1.16% / month |
| **Oxidation (Met14)** | 0.1% | 0.3% | 0.5% | 0.7% | +0.10% / month |

**Calculated Degradation Rates (Arrhenius Plot Analysis):**
The activation energy ($E_a$) for the deamidation of Glucogen-XR at pH 6.5 was calculated using the Arrhenius equation:
$$k = A e^{-E_a / RT}$$
Based on the 5°C and 25°C data, the $E_a$ is estimated at 84.2 kJ/mol, which is consistent with similar GLP-1 analogs.

---

#### 6.0 STRESS TESTING AND DEGRADATION PROFILE

##### 6.1 Forced Degradation (Batch GLUC-2025-001)
Stress testing was performed to identify the likely degradation products and validate the stability-indicating nature of the analytical methods.

**Table 6.1-1: Forced Degradation Results**
| Stress Condition | Duration | RP-HPLC Purity | Principal Degradant Identified |
| :--- | :--- | :--- | :--- |
| **Thermal (40°C)** | 7 Days | 88.5% | Aggregates/Covalent Dimers |
| **Acidic (0.1M HCl)** | 2 Hours | 92.1% | Asp-cleavage products |
| **Alkaline (0.1M NaOH)** | 30 Mins | 85.4% | Multiple Deamidation (Asn) |
| **Oxidative (0.3% H2O2)** | 1 Hour | 78.2% | Met(O)14 Sulfoxide |
| **Photostability (UV)** | 1.2M Lux-hr | 94.6% | Tyrosine cross-linking |

---

#### 7.0 ANALYTICAL PROTOCOL FOR STABILITY TESTING

To ensure reproducibility across the Google Cloud Life Sciences network, the following step-by-step protocol (GHS-SOP-STAB-01) is utilized for all stability assessments.

##### 7.1 Sample Thawing and Preparation
1. Remove 5.0 mL aliquot from -70°C storage.
2. Thaw at room temperature (20-25°C) for exactly 45 minutes.
3. Gently invert the HDPE bottle 10 times to ensure homogeneity. Do not vortex to avoid shear-induced aggregation.
4. Filter 1 mL through a 0.22 µm PVDF low-protein binding filter (Millipore Millex-GV).
5. Dilute to a target concentration of 1.0 mg/mL using Mobile Phase A (0.1% TFA in Water).

##### 7.2 RP-HPLC Method for Purity (GHS-MTH-01)
*   **Column:** Waters XBridge Peptide BEH C18, 130Å, 3.5 µm, 4.6 mm X 150 mm.
*   **Flow Rate:** 1.0 mL/min.
*   **Detection:** 214 nm.
*   **Gradient:**
    *   0-5 min: 25% B
    *   5-35 min: 25-45% B
    *   35-40 min: 95% B (Wash)
    *   40-50 min: 25% B (Equilibration)
*   **Mobile Phase A:** 0.1% TFA in H2O.
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile.

---

#### 8.0 STATISTICAL ANALYSIS AND SHELF-LIFE PROJECTION
Statistical evaluation of the long-term stability data was performed using Minitab 21.0. A linear regression model was applied to the % Purity (RP-HPLC) data for Batches GLUC-2025-001, -002, and -003.

**Table 8.0-1: Regression Analysis for Purity at -70°C**
| Batch | Intercept ($β_0$) | Slope ($β_1$) | 95% Lower Confidence Limit (at 24M) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.42 | -0.015 | 98.9% |
| GLUC-2025-002 | 99.38 | -0.012 | 98.8% |
| GLUC-2025-003 | 99.45 | -0.018 | 98.7% |

**Conclusion:** Based on the one-sided 95% confidence interval, the predicted purity remains well above the 98.0% specification limit for at least 36 months when stored at -70°C.

---

#### 9.0 REGULATORY REFERENCES
1. **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2. **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
3. **ICH Q5C:** Stability Testing of Biotechnological/Biological Products.
4. **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.
5. **FDA Guidance for Industry:** *INDs for Human Gene Therapy: Early-Stage Clinical Investigations* (Applied for cross-reference on biological potency).

#### 10.0 SIGNATORIES
*Prepared by:*
**[Signature]**
Senior Regulatory Affairs Scientist, Google Health Sciences
Date: 14-Oct-2025

*Approved by:*
**[Signature]**
VP of Quality Assurance, Google Cloud Life Sciences
Date: 15-Oct-2025

---

## Graphical Trends

### **Module 3: Quality**
**Section 3.2.S.7.3: Stability Data Presentation**
**Subsection: 3.2.S.7.3.1: Graphical Trends and Statistical Interpretation**

---

#### **1. Scope and Objective**
This subsection provides an exhaustive graphical representation and statistical interpretation of the stability data for **Glucogen-XR (glucapeptide extended-release)** Drug Substance (DS), manufactured by Google Health Sciences (GHS). The objective is to visualize long-term, accelerated, and stress-testing trends to support the proposed retest period of 24 months when stored at -70°C ± 10°C.

Graphical analysis is performed in accordance with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q1E** (*Evaluation of Stability Data*).

---

#### **2. Batch Identification and Manufacturing Context**
The data represented in the following graphical trends are derived from three (3) primary registration batches and three (3) supportive clinical batches.

**Table 1: Batch Pedigree for Stability Trend Analysis**

| Batch Number | Scale | Manufacturing Date | Site | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 15-Jan-2025 | 3000 Innovation Dr, SSF | Registration / PPQ 1 |
| **GLUC-2025-002** | 2000L | 22-Jan-2025 | 3000 Innovation Dr, SSF | Registration / PPQ 2 |
| **GLUC-2025-003** | 2000L | 29-Jan-2025 | 3000 Innovation Dr, SSF | Registration / PPQ 3 |
| **GLUC-2024-C01** | 500L | 10-Nov-2024 | 3000 Innovation Dr, SSF | Phase III Supportive |
| **GLUC-2024-C02** | 500L | 15-Nov-2024 | 3000 Innovation Dr, SSF | Phase III Supportive |
| **GLUC-2024-C03** | 500L | 20-Nov-2024 | 3000 Innovation Dr, SSF | Phase III Supportive |

---

#### **3. Statistical Methodology for Trend Analysis**

##### **3.1 Regression Analysis Protocol**
For quantitative attributes (e.g., Purity by RP-HPLC, Bioassay Potency), a linear regression model is applied:
$$Y = \beta_0 + \beta_1 X + \epsilon$$
Where:
*   $Y$ = Stability Result (Attribute Value)
*   $\beta_0$ = Intercept (Initial Value at $T=0$)
*   $\beta_1$ = Slope (Rate of degradation/change per month)
*   $X$ = Time (Months)
*   $\epsilon$ = Random error term

##### **3.2 Poolability of Batches**
Prior to generating "Master Trends," an Analysis of Covariance (ANCOVA) is performed to determine if batches can be pooled.
*   **Step 1:** Test for equality of slopes ($p > 0.25$ indicates poolability).
*   **Step 2:** If slopes are poolable, test for equality of intercepts ($p > 0.25$ indicates poolability).
*   **Step 3:** If $p < 0.25$, individual batch trends are plotted alongside the 95% Confidence Interval (CI) for the worst-case batch.

##### **3.3 Calculation of the Lower/Upper Confidence Limit (95% CL)**
The one-sided 95% lower confidence limit (LCL) is used to estimate the time to reach the specification limit (e.g., Potency lower limit of 80%).
$$LCL = \hat{Y} - t_{(0.05, n-2)} \cdot SE_{pred}$$

---

#### **4. Graphical Trend: Purity by Reversed-Phase HPLC (RP-HPLC)**

**Attribute Definition:** Measures the percentage of the main glucapeptide peak relative to related substances (deamidated, oxidized, and truncated forms).
**Specification Limit:** Not Less Than (NLT) 95.0%.

##### **4.1 Tabulated Data (Long-Term Storage: -70°C ± 10°C)**

| Time (Months) | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 | Mean (%) |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 99.4 | 99.3 | 99.5 | 99.40 |
| 3 | 99.3 | 99.2 | 99.4 | 99.30 |
| 6 | 99.2 | 99.1 | 99.2 | 99.17 |
| 9 | 99.0 | 99.1 | 99.1 | 99.07 |
| 12 | 98.9 | 98.8 | 99.0 | 98.90 |
| 18 | 98.7 | 98.6 | 98.8 | 98.70 |
| 24 | 98.5 | 98.4 | 98.5 | 98.47 |

##### **4.2 Trend Visualization Analysis (Narrative for Chart)**
*   **X-Axis:** Time in Months (0 to 24).
*   **Y-Axis:** Purity (%). Scale 90% to 100%.
*   **Trend Observation:** The data points for all three PPQ batches show a highly linear relationship with a negligible downward slope ($k \approx -0.038\%/\text{month}$).
*   **Statistical Projection:** The 95% LCL at 24 months is 98.1%, which is significantly above the specification limit of 95.0%. Extrapolation suggests a shelf-life exceeding 60 months under these conditions.

---

#### **5. Graphical Trend: Biological Potency (Cell-Based GLP-1R Activation)**

**Attribute Definition:** Relative potency compared to the GHS Internal Reference Standard (IRS-GLUC-02) using a cAMP-reporter gene assay in CHO-K1 cells expressing the human GLP-1 receptor.
**Specification Limit:** 80% to 125% of Reference.

##### **5.1 Tabulated Data (Long-Term Storage: -70°C ± 10°C)**

| Time (Months) | GLUC-2025-001 (%) | GLUC-2025-002 (%) | GLUC-2025-003 (%) | 95% LCL |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 102 | 99 | 105 | 98.5 |
| 3 | 101 | 101 | 103 | 97.2 |
| 6 | 98 | 100 | 102 | 96.4 |
| 9 | 99 | 98 | 101 | 95.5 |
| 12 | 100 | 97 | 99 | 94.8 |
| 18 | 97 | 96 | 98 | 93.1 |
| 24 | 96 | 95 | 97 | 91.8 |

##### **5.2 Statistical Interpretation**
The bioassay displays higher analytical variability (RSD ~4.5%) compared to HPLC. However, the regression analysis confirms no statistically significant degradation ($p = 0.12 > 0.05$). The potency remains well within the target range.

---

#### **6. Graphical Trend: High Molecular Weight Species (HMWS) by SEC-HPLC**

**Attribute Definition:** Measurement of dimeric and aggregated forms.
**Specification Limit:** Not More Than (NMT) 2.0%.

##### **6.1 Tabulated Data (Accelerated Storage: 5°C ± 3°C)**
*Note: Accelerated conditions are used to calculate activation energy ($E_a$) via the Arrhenius equation.*

| Time (Months) | GLUC-2025-001 (%) | GLUC-2025-002 (%) | GLUC-2025-003 (%) | Mean HMWS |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 0.21 | 0.24 | 0.20 | 0.217 |
| 1 | 0.35 | 0.38 | 0.32 | 0.350 |
| 3 | 0.62 | 0.68 | 0.59 | 0.630 |
| 6 | 1.15 | 1.25 | 1.10 | 1.167 |

##### **6.2 Kinetic Modeling (Arrhenius Plot)**
To justify the retest period, a secondary graphical trend of $\ln(k)$ vs. $1/T$ (Kelvin) was performed.
*   **Degradation Rate (k) at 5°C:** $0.158\%/\text{month}$
*   **Degradation Rate (k) at -70°C:** Extrapolated to $1.2 \times 10^{-6} \%/\text{month}$
*   **Conclusion:** Aggregate formation is kinetically "frozen" at -70°C, supporting the long-term stability of the Glucogen-XR peptide.

---

#### **7. Sub-visible Particulate Matter (USP <788>)**

**Attribute Definition:** Monitoring of sub-visible particles (HIAC Liquid Particle Counter).
**Limits:** $\ge 10 \mu m$ (NMT 6000/container); $\ge 25 \mu m$ (NMT 600/container).

**Table 4: Long-term Particulate Trends (Batch GLUC-2025-001)**

| Time | $\ge 10 \mu m$ (Counts/mL) | $\ge 25 \mu m$ (Counts/mL) | Observation |
| :--- | :--- | :--- | :--- |
| T=0 | 142 | 8 | Pass |
| T=12 | 168 | 12 | Pass |
| T=24 | 195 | 15 | Pass |

*Graphical Trend Analysis:* The slope for particle generation is near zero, indicating that the proprietary GHS-CHO-001 cell line and subsequent purification process yield a highly stable monomeric peptide that does not nucleate over time in the formulation buffer (Sodium Phosphate, Sucrose, Polysorbate 20, pH 7.4).

---

#### **8. Procedure for Generating Stability Charts (SOP-QA-STAB-099)**

To ensure consistency across all Google Health Sciences regulatory filings, the following protocol is utilized:

1.  **Data Extraction:** Export raw data from the Laboratory Information Management System (LIMS) directly into the validated statistical software (JMP v16.2 or SAS v9.4).
2.  **Outlier Screening:** Perform Grubbs' Test or Dixon’s Q-test. Note: No outliers were removed from batches GLUC-2025-001/002/003.
3.  **Visualization Parameters:**
    *   Plot individual batch data points using distinct markers.
    *   Superimpose the linear regression line.
    *   Shade the 95% Confidence Interval region.
    *   Include a horizontal dashed red line representing the Specification Limit.
4.  **Shelf-life Estimation:** The intersection of the 95% CI (one-sided) and the Specification Limit determines the statistical shelf-life.

---

#### **9. Summary of Conclusions from Graphical Trends**
Based on the graphical assessment of the 24-month long-term and 6-month accelerated data:
1.  **Chemical Stability:** Deamidation and oxidation (measured by RP-HPLC) remain the primary degradants but occur at a rate that provides >30% margin of safety over 24 months.
2.  **Physical Stability:** SEC-HPLC data demonstrates no significant increase in HMWS at the intended storage temperature.
3.  **Biological Stability:** The cell-based potency remains robust, confirming the integrity of the glucapeptide tertiary structure.

**Table 5: Summary of Statistical Projections**

| Parameter | Observed Trend | Projected Failure Time (95% CI) |
| :--- | :--- | :--- |
| **RP-HPLC Purity** | -0.038% / month | 88 Months |
| **SEC-HPLC HMWS** | +0.005% / month | 142 Months |
| **Bioassay Potency**| -0.22% / month | 72 Months |

---

**References:**
1.  *ICH Q1A(R2): Stability Testing of New Drug Substances and Products.*
2.  *ICH Q1E: Evaluation of Stability Data.*
3.  *USP <788>: Particulate Matter in Injections.*
4.  *GHS Internal Standard SOP-QA-STAB-099: Statistical Analysis of Stability Trends.*

**End of Subsection 3.2.S.7.3.1**

---

## Narrative Interpretation

### **3.2.S.7.3 Stability Data Presentation and Narrative Interpretation**

---

#### **1. INTRODUCTION AND SCOPE OF NARRATIVE INTERPRETATION**

This subsection provides a comprehensive narrative interpretation of the stability data generated for **Glucogen-XR (glucapeptide extended-release)**, a recombinant GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001** cell line. This interpretation covers formal stability studies conducted on three primary registration batches (**GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003**) of Drug Substance (DS).

The interpretation is structured to align with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q5C** (*Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*). The objective is to establish the retest period and storage conditions based on the evaluation of physical, chemical, biological, and microbiological attributes over time under long-term, accelerated, and stress conditions.

---

#### **2. BATCH IDENTIFICATION AND STATISTICAL DESIGN**

The stability profile of Glucogen-XR is derived from the following representative batches manufactured at the South San Francisco facility (3000 Innovation Drive).

**Table 1: Identification of Primary Registration Batches for Stability Evaluation**

| Batch Number | Scale | Date of Manufacture | Container Closure System | Use in Submission |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 15-JAN-2025 | 10L HDPE Nalgene Fluorinated | Primary Stability / Clinical |
| **GLUC-2025-002** | 2000L | 02-FEB-2025 | 10L HDPE Nalgene Fluorinated | Primary Stability / Clinical |
| **GLUC-2025-003** | 2000L | 18-MAR-2025 | 10L HDPE Nalgene Fluorinated | Primary Stability / Clinical |

##### **2.1 Statistical Analysis Methodology (ICH Q1E)**
Linear regression analysis was applied to quantitative attributes (e.g., Purity by SE-HPLC, Potency by Bioassay) to determine the 95% confidence limit. The retest period is proposed where the 95% confidence interval intersects the acceptance criterion.

---

#### **3. DETAILED INTERPRETATION OF STABILITY ATTRIBUTES**

##### **3.1 Physical Appearance and Clarity**
Glucogen-XR DS is a clear to slightly opalescent, colorless to pale yellow solution.
*   **Narrative:** Across all three batches (GLUC-2025-001 through 003), no changes in appearance were observed at the long-term storage condition (-70°C ± 10°C) through 24 months. At the accelerated condition (5°C ± 3°C), a slight increase in opalescence was noted at the 6-month mark, though results remained within the specification of ≤ Ref Susp II.
*   **Data Analysis:** Refer to Table 4 for visual inspection scores (Method: USP <790>).

##### **3.2 Potency and Biological Activity (Cell-Based Bioassay)**
Potency is measured using a GLP-1 receptor-mediated cAMP stimulation assay using a HEK-293 cell line overexpressing the human GLP-1 receptor.
*   **Narrative:** The target potency is 100% of the reference standard.
*   **Batch GLUC-2025-001:** Initial: 102%; 24 Months (-70°C): 99%. Regression slope: -0.12% per year.
*   **Batch GLUC-2025-002:** Initial: 98%; 24 Months (-70°C): 97%.
*   **Interpretation:** No statistically significant loss of biological activity was observed. The data suggests that the peptide conformation remains intact, ensuring efficient receptor binding and signal transduction.

##### **3.3 Purity by Size Exclusion HPLC (SE-HPLC)**
SE-HPLC monitors the formation of high molecular weight species (HMWS) and aggregates, which are critical for immunogenicity risk mitigation.
*   **Specification:** ≥ 98.0% Monomer; ≤ 2.0% HMWS.
*   **Observed Trends:** At -70°C, HMWS remained below 0.5% for all batches. However, under stress conditions (25°C/60% RH), HMWS increased to 4.2% within 30 days.
*   **Formula for Degradation Rate:** $k = \frac{ln(C_0/C_t)}{t}$
    *   For GLUC-2025-001 at 5°C: $k = 0.0004$ month⁻¹, indicating extreme stability at refrigerated temperatures.

**Table 2: SE-HPLC Purity Profile (Monomer %) - Long Term (-70°C)**

| Batch ID | Initial | 6 Months | 12 Months | 18 Months | 24 Months |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 99.6% | 99.5% | 99.4% | 99.4% | 99.3% |
| GLUC-2025-002 | 99.5% | 99.5% | 99.4% | 99.3% | 99.3% |
| GLUC-2025-003 | 99.7% | 99.6% | 99.6% | 99.5% | 99.4% |

---

#### **4. CHEMICAL STABILITY: ION EXCHANGE CHROMATOGRAPHY (IEX-HPLC)**

IEX-HPLC is utilized to detect charge variants resulting from deamidation of asparagine residues or oxidation of methionine. Glucogen-XR contains a critical Met residue at position 14 and Asn at position 28.

*   **Acidic Variants:** Attributed to deamidation at Asn-28.
*   **Basic Variants:** Attributed to C-terminal amidation variations or succinimide formation.
*   **Narrative Interpretation:** A minor increase in acidic variants (from 3.2% to 4.5%) was observed in batch GLUC-2025-001 over 24 months at -70°C. This is well within the specification limit of ≤ 10.0%. Under accelerated conditions (5°C), the acidic variant peak increased to 8.9% at 12 months, indicating that deamidation is the primary chemical degradation pathway for this peptide.

---

#### **5. PROTOCOL FOR FORCED DEGRADATION (STRESS TESTING)**

To support the narrative interpretation, forced degradation studies were performed on Batch GLUC-2025-001 to demonstrate the stability-indicating nature of the analytical methods.

**Table 3: Stress Testing Protocol and Results Summary**

| Stress Condition | Duration | Primary Degradation Path | Observed Effect on Purity |
| :--- | :--- | :--- | :--- |
| **Photostability (ICH Q1B)** | 1.2M Lux-hr | Oxidation | 12% drop in Main Peak |
| **Thermal (40°C)** | 14 Days | Aggregation/Deamidation | 25% drop in Main Peak |
| **Acidic (0.1M HCl)** | 24 Hours | Fragmentation | 15% increase in LMWS |
| **Alkaline (0.1M NaOH)** | 24 Hours | Deamidation | 30% increase in Acidic Variants |
| **Oxidative (0.3% H2O2)** | 6 Hours | Met-Oxidation | 45% increase in Oxidized Peak |

---

#### **6. SUB-VISIBLE PARTICULATE MATTER (USP <788>)**

Particulate matter is monitored via Light Obscuration.
*   **Narrative:** Values for particles ≥ 10 µm and ≥ 25 µm remained significantly below USP limits (<6000 and <600 per container, respectively).
*   **Interpretation:** The formulation (histidine buffer, polysorbate 80) effectively prevents proteinaceous sub-visible particle formation even after three freeze-thaw cycles (Procedure: -70°C to 25°C, 1°C/min ramp rate).

---

#### **7. THERMODYNAMIC STABILITY CALCULATIONS**

The Arrhenius equation was applied to project stability at room temperature based on data from 5°C and 25°C.
$$k = A e^{-E_a / RT}$$
Where:
*   $E_a$ (Activation Energy) for GLUC-2025-001 monomer loss was calculated as **85.4 kJ/mol**.
*   This high activation energy confirms that the degradation rate is highly temperature-dependent, justifying the ultra-low temperature storage (-70°C).

---

#### **8. CONCLUSION ON RETEST PERIOD**

Based on the narrative interpretation of 24 months of real-time stability data from three primary batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003), the following conclusions are drawn:

1.  **Proposed Retest Period:** 36 months when stored at -70°C ± 10°C in the approved container closure system.
2.  **In-Use Stability:** The Drug Substance is stable for up to 48 hours at room temperature (20-25°C) to facilitate manufacturing operations (e.g., filtration and filling).
3.  **Shipping Conditions:** Must be maintained in a frozen state (-70°C) using validated thermal shippers equipped with calibrated dataloggers (Model: GHS-LOG-2025).

---

#### **9. REFERENCES**
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Stability Testing of Biotechnological/Biological Products.
3.  **USP <788>:** Particulate Matter in Injections.
4.  **Google Health Sciences Document GHS-SOP-0092:** Protocol for Real-Time Stability Monitoring of Biologics.

---
**End of Narrative Interpretation**
*Approval Signature: Dr. A. Turing, Head of Regulatory Affairs, Google Cloud Life Sciences*
*Date: 22-MAY-2025*

---

# Stability Indicating Capability

## Demonstration of Degradation Detection

# MODULE 3: QUALITY (3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS)
## SECTION: 3.2.S.7.1.4 DEMONSTRATION OF DEGRADATION DETECTION (STABILITY INDICATING CAPABILITY)

---

### 1.0 INTRODUCTION AND SCOPE

This section provides comprehensive analytical evidence demonstrating that the stability-monitoring methods employed for **Glucogen-XR (glucapeptide extended-release)**, manufactured by Google Health Sciences, are capable of detecting, quantifying, and characterizing degradation products that may reasonably be expected to form during the product’s shelf-life under recommended storage conditions ($5^\circ\text{C} \pm 3^\circ\text{C}$) and under accelerated ($25^\circ\text{C} \pm 2^\circ\text{C} / 60\% \text{ RH}$) and stress conditions.

Consistent with **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*) and **ICH Q2(R1)** (*Validation of Analytical Procedures*), the stability-indicating nature of the primary analytical methods was established through forced degradation (stress testing) of Drug Substance (DS) and Drug Product (DP).

### 2.0 ANALYTICAL METHODOLOGY OVERVIEW

The following primary stability-indicating methods (SIMs) are the focus of this demonstration:

1.  **RP-HPLC (Reversed-Phase High-Performance Liquid Chromatography):** Primary method for purity and related substances (deamidation, oxidation, and peptide fragments).
2.  **SE-HPLC (Size Exclusion Chromatography):** Primary method for the detection of high molecular weight species (HMWS), aggregates, and dimers.
3.  **CEX-HPLC (Cation Exchange Chromatography):** Detection of charge variants (acidic and basic species).
4.  **Bioassay (In-vitro GLP-1 Receptor Activation):** Determination of biological potency and functional integrity.

---

### 3.0 FORCED DEGRADATION PROTOCOL (STRESS TESTING)

To demonstrate the capability of the methods to detect degradation, Glucogen-XR Drug Substance (Batch No. **GLUC-2025-001**) was subjected to the following stress conditions.

#### 3.1 Stress Condition Parameters

| Stress Condition | Reagent/Environment | Temperature ($^\circ\text{C}$) | Duration | Target Degradation |
| :--- | :--- | :--- | :--- | :--- |
| **Control** | Phosphate Buffer (pH 7.4) | $5^\circ\text{C}$ | N/A | 0% |
| **Acid Hydrolysis** | $0.1\text{ N HCl}$ | $40^\circ\text{C}$ | 24 Hours | 10–20% |
| **Base Hydrolysis** | $0.1\text{ N NaOH}$ | $40^\circ\text{C}$ | 6 Hours | 10–20% |
| **Oxidation** | $3.0\% \text{ H}_2\text{O}_2$ | $25^\circ\text{C}$ | 4 Hours | 10–20% |
| **Thermal Stress** | Dry Heat | $60^\circ\text{C}$ | 72 Hours | 15–20% |
| **Photostability** | UV/Visible Light (ICH Q1B) | $25^\circ\text{C}$ | 1.2M lux-hr | 5–10% |

---

### 4.0 RESULTS OF DEGRADATION DETECTION BY RP-HPLC (PURITY)

The RP-HPLC method utilizes a C18 stationary phase with a water/acetonitrile/TFA gradient. Peak purity was assessed using Photodiode Array (PDA) detection and Mass Spectrometry (LC-MS/MS) to ensure no co-elution of degradants with the main Glucogen-XR peak.

#### 4.1 Quantitative Degradation Data (Batch GLUC-2025-001)

| Condition | Main Peak (%) | Deamidated Species (%) | Oxidized Species (%) | Total Impurities (%) | Mass Balance (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Control** | 99.12 | 0.45 | 0.12 | 0.88 | 100.0 |
| **Acid ($0.1\text{N HCl}$)** | 84.55 | 8.22 | 0.34 | 15.45 | 99.4 |
| **Base ($0.1\text{N NaOH}$)** | 72.10 | 18.45 | 0.88 | 27.90 | 98.6 |
| **Oxidation ($3\% \text{H}_2\text{O}_2$)**| 81.20 | 0.55 | 14.12 | 18.80 | 99.1 |
| **Thermal ($60^\circ\text{C}$)** | 88.40 | 6.10 | 2.45 | 11.60 | 98.9 |

#### 4.2 Specificity and Peak Purity Analysis
Using the PDA detector (190nm - 400nm), the peak purity angle was compared against the threshold angle for the main peak in all stressed samples. 

*   **Purity Angle < Purity Threshold:** Confirmed for all samples.
*   **Mass Balance:** All samples maintained a mass balance $>98\%$, indicating that all significant degradants are eluted and accounted for by the method.

---

### 5.0 DETECTION OF AGGREGATION BY SE-HPLC

Size Exclusion Chromatography is critical for detecting High Molecular Weight Species (HMWS), which are implicated in immunogenicity.

#### 5.1 SE-HPLC Degradation Profiles (Batch GLUC-2025-002)

| Sample ID | Monomer (%) | Dimer (%) | HMWS (%) | Fragements (%) | Recovery (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-002 (T=0)** | 99.85 | 0.10 | 0.05 | < LOD | 100.0 |
| **Thermal ($60^\circ\text{C}$/72h)** | 92.40 | 4.55 | 3.05 | < LOD | 99.5 |
| **Agitation (Vortex 24h)** | 96.10 | 2.20 | 1.70 | < LOD | 99.2 |
| **Freeze/Thaw (5 Cycles)** | 98.90 | 0.80 | 0.30 | < LOD | 99.8 |

**Statistical Analysis:** 
A Regression analysis of HMWS formation over time at $40^\circ\text{C}$ (Accelerated) showed a zero-order kinetic profile ($R^2 = 0.9982$), allowing for precise shelf-life modeling.

---

### 6.0 DETECTION OF CHARGE VARIANTS (CEX-HPLC)

The Cation Exchange Chromatography method resolves variants resulting from C-terminal amidation, deamidation of Asn residues, and succinimide formation.

#### 6.1 CEX Results Table

| Condition | Acidic Variants (%) | Main Peak (%) | Basic Variants (%) |
| :--- | :--- | :--- | :--- |
| **Reference Standard** | 2.1 | 96.5 | 1.4 |
| **Base Stress** | 18.4 | 74.2 | 7.4 |
| **Acid Stress** | 5.1 | 82.3 | 12.6 |

---

### 7.0 CHARACTERIZATION OF MAJOR DEGRADANTS (LC-MS/MS)

To satisfy **USP <1049>** and **ICH Q6B**, major degradation peaks observed in RP-HPLC were isolated and characterized via Electrospray Ionization Mass Spectrometry (ESI-MS).

#### 7.1 Identified Degradation Products

1.  **Degradant D1 (Relative Retention Time 1.12):** Identified as $[Met(O)^{14}]$ Glucogen-XR. Mass shift of +16 Da confirmed oxidation at the Methionine 14 residue.
2.  **Degradant D2 (Relative Retention Time 0.92):** Identified as $[Asp^{9}]$ Glucogen-XR. Result of deamidation at Asparagine 9. Mass shift of +1 Da.
3.  **Degradant D3 (Relative Retention Time 1.25):** C-terminal truncation (des-Gly-amide).

---

### 8.0 BIOLOGICAL ACTIVITY CORRELATION

To ensure that chemical degradation correlates with a loss of biological function, potency assays were performed on the stressed samples.

| Sample Condition | Chemical Purity (RP-HPLC %) | Relative Potency (%) | 95% Confidence Interval |
| :--- | :--- | :--- | :--- |
| **Control** | 99.1 | 105 | 98 – 112 |
| **Oxidized ($3\% \text{H}_2\text{O}_2$)** | 81.2 | 72 | 65 – 79 |
| **Base Treated** | 72.1 | 48 | 41 – 55 |

**Conclusion:** There is a strong linear correlation ($r = 0.94$) between the decrease in main peak purity via RP-HPLC and the loss of biological potency, confirming the RP-HPLC method is a valid surrogate for monitoring the stability of the drug's therapeutic effect.

---

### 9.0 STEP-BY-STEP PROTOCOL FOR REPEATABILITY OF DEGRADATION DETECTION

**Protocol ID:** GHS-STAB-PRO-004  
**Title:** Forced Degradation Procedure for Glucogen-XR DS

1.  **Sample Preparation:** Dilute Glucogen-XR DS to $2.0 \text{ mg/mL}$ using Formulation Buffer.
2.  **Oxidative Stress:** Add $100 \mu\text{L}$ of $30\% \text{ H}_2\text{O}_2$ to $900 \mu\text{L}$ of sample. Incubate at $25^\circ\text{C}$ for 4 hours. Quench with $100 \mu\text{L}$ of $100 \text{ mM}$ L-Methionine.
3.  **Acidic Stress:** Add $100 \mu\text{L}$ of $1 \text{ N HCl}$ to $900 \mu\text{L}$ of sample. Incubate at $40^\circ\text{C}$ for 24 hours. Neutralize with $100 \mu\text{L}$ of $1 \text{ N NaOH}$.
4.  **Analysis:** Inject $20 \mu\text{L}$ onto the RP-HPLC system using Method **MET-GLUC-001**.
5.  **Data Processing:** Calculate the percentage of each impurity peak relative to the total peak area.

---

### 10.0 REGULATORY COMPLIANCE AND SUMMARY

The data presented in this section demonstrate that the analytical suite for **Glucogen-XR** is robust and stability-indicating. All known and potential degradation pathways (oxidation, deamidation, aggregation, and peptide cleavage) are monitored by at least one validated method.

*   **ICH Q1A(R2):** Compliance achieved through rigorous stress testing.
*   **ICH Q2(R1):** Specificity and accuracy of the methods in the presence of degradants are validated.
*   **USP <1225>:** Methods meet requirements for Category II analytical procedures.

**Authorized by:**
*Dr. Jane Cloud, PhD*
Director of Quality Control, Google Health Sciences
Date: 14-OCT-2025

---

## Resolution of Degradants from Active

# MODULE 3: QUALITY (3.2.S.7.1)
## DOCUMENT: m3-ds-stability-summary
## SECTION: STABILITY INDICATING CAPABILITY
### SUBSECTION: RESOLUTION OF DEGRADANTS FROM ACTIVE (GLUCOGEN-XR)

---

#### 3.2.S.7.1.1 Overview of Chromatographic Resolution
The primary objective of the Stability Indicating Method (SIM) for Glucogen-XR (glucapeptide extended-release) is to ensure the absolute resolution of the active pharmaceutical ingredient (API) from its related substances, process-derived impurities, and forced degradation products. Given the complexity of the glucapeptide molecule—a 31-amino acid peptide with a C-terminal extension and a synthetic PEGylated linker—the analytical method must demonstrate high specificity to monitor chemical instabilities including deamidation, oxidation, isomerisation, and aggregation.

Google Health Sciences (GHS) has developed an Ultra-High Performance Liquid Chromatography (UHPLC) method utilizing a Charged Surface Hybrid (CSH) C18 stationary phase, optimized to resolve the main peak (Glucogen-XR) from at least 14 known degradation products. This section details the resolution capabilities, the theoretical plates ($N$), tailing factors ($T_f$), and resolution factors ($R_s$) achieved across clinical and stability batches (e.g., GLUC-2025-001 through GLUC-2025-015).

---

#### 3.2.S.7.1.2 Analytical Methodology (Method GHS-LC-09)
The stability-indicating method utilizes a binary gradient system with specialized additives to suppress secondary silanol interactions often observed with basic peptide residues.

**Table 1: UHPLC Method Parameters for Degradant Resolution**
| Parameter | Specification/Condition |
| :--- | :--- |
| **Instrument** | Waters ACQUITY UPLC H-Class Bio System (or equivalent) |
| **Column** | ACQUITY UPLC CSH C18, 130Å, 1.7 µm, 2.1 mm x 150 mm |
| **Mobile Phase A** | 0.05% Trifluoroacetic acid (TFA) in Water (LC-MS Grade) |
| **Mobile Phase B** | 0.045% TFA in Acetonitrile (ACN) |
| **Flow Rate** | 0.35 mL/min |
| **Column Temperature** | 45.0°C ± 0.5°C |
| **Sample Temperature** | 5.0°C ± 2.0°C |
| **Detection** | UV at 214 nm and 280 nm |
| **Injection Volume** | 2.0 µL (Target concentration 1.0 mg/mL) |
| **Gradient Profile** | 25% B to 45% B over 40 minutes (Linear) |

---

#### 3.2.S.7.1.3 Identification and Characterization of Resolved Degradants
The following degradants have been characterized via LC-MS/MS (Orbitrap Exploris 480) and are routinely resolved from the Glucogen-XR main peak.

**Table 2: Characterized Degradants and Relative Retention Times (RRT)**
| Degradant ID | Description of Modification | RRT (Relative to Main Peak) | Mechanism of Formation |
| :--- | :--- | :--- | :--- |
| **GHS-DEG-01** | [Asp³] Glucogen-XR (Deamidation) | 0.88 | Hydrolytic deamidation of Asn |
| **GHS-DEG-02** | [Met¹⁴(O)] Glucogen-XR (Oxidation) | 0.92 | Oxidation of Methionine sulfoxide |
| **GHS-DEG-03** | N-terminal Glu-cyclization | 0.95 | Pyroglutamate formation |
| **Main Peak** | **Glucogen-XR (Active)** | **1.00** | **N/A** |
| **GHS-DEG-04** | [isoAsp³] Glucogen-XR | 1.04 | Isomerization via succinimide |
| **GHS-DEG-05** | C-terminal Truncation (Des-Gly³¹) | 1.12 | Proteolytic cleavage (Trace) |
| **GHS-DEG-06** | HMW Species (Dimer) | 1.45 | Intermolecular disulfide/covalent |

---

#### 3.2.S.7.1.4 Forced Degradation and Peak Purity Assessment
To validate the stability-indicating nature of the method, Glucogen-XR Batch GLUC-2025-004 was subjected to stress conditions. Resolution was calculated using the USP formula:
$$R_s = \frac{2(t_2 - t_1)}{w_1 + w_2}$$
Where $t$ is retention time and $w$ is the width at the base.

**Table 3: Resolution Results from Forced Degradation Study (Batch GLUC-2025-004)**
| Stress Condition | Duration | Primary Degradant Produced | Resolution ($R_s$) from Main Peak | Peak Purity (PAD Angle < Threshold) |
| :--- | :--- | :--- | :--- | :--- |
| **Acid (0.1M HCl)** | 24h @ 40°C | Deamidation (RRT 0.88) | 2.4 | Pass |
| **Base (0.1M NaOH)** | 2h @ RT | Imide formation (RRT 1.04) | 1.9 | Pass |
| **Oxidative (3% H₂O₂)** | 4h @ RT | Met-Oxidation (RRT 0.92) | 2.1 | Pass |
| **Thermal (60°C)** | 7 Days | Aggregates (RRT 1.45) | 5.8 | Pass |
| **Photolytic (ICH Q1B)** | 1.2M Lux-hr | Multiple / Non-specific | 1.8 | Pass |

---

#### 3.2.S.7.1.5 Resolution Performance in Stability Batches (GMP Studies)
GHS monitors the resolution of the "Critical Pair" (Main Peak and GHS-DEG-04 isoAsp species). For all clinical batches produced at the South San Francisco site (3000 Innovation Drive), a minimum resolution of $R_s \ge 1.5$ is required for assay validity.

**Table 4: Long-term Stability Resolution Data (Storage: 5°C ± 3°C)**
| Batch Number | Timepoint | $R_s$ (Main vs GHS-DEG-04) | Main Peak (%) | Total Impurities (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | Release | 2.1 | 99.1 | 0.9 |
| GLUC-2025-001 | 6 Months | 2.0 | 98.7 | 1.3 |
| GLUC-2025-001 | 12 Months | 2.0 | 98.2 | 1.8 |
| GLUC-2025-002 | Release | 2.2 | 99.4 | 0.6 |
| GLUC-2025-002 | 12 Months | 2.1 | 98.5 | 1.5 |
| GLUC-2025-003 | Release | 2.1 | 99.2 | 0.8 |

---

#### 3.2.S.7.1.6 Detailed Protocol for Evaluating Peak Resolution (SOP-AN-442)
1.  **System Suitability**: Inject System Suitability Standard (GHS-STD-REF) containing known amounts of GHS-DEG-02 (Oxidation) and GHS-DEG-04 (isoAsp).
2.  **Resolution Calculation**: The software (Empower 3) automatically calculates the resolution between the active and the closest eluting degradant.
3.  **Thresholds**:
    *   $R_s$ between Glucogen-XR and GHS-DEG-04 must be $>1.5$.
    *   Tailing Factor ($T_f$) for the Glucogen-XR peak must be between 0.8 and 1.2.
    *   Theoretical Plates ($N$) must be $>50,000$.
4.  **Baseline Integration**: Integration is performed from 5 minutes to 45 minutes. Tangential skim integration is used for small degradant peaks eluting on the tail of the main peak.

---

#### 3.2.S.7.1.7 Statistical Evaluation of Resolution Consistency
To ensure the robustness of the resolution across different column lots and instrument configurations, a Six Sigma analysis was performed on 50 injections across three separate UHPLC systems (ID: GHS-UPLC-01, 02, 03).

**Table 5: Robustness and Intermediate Precision of Resolution ($R_s$)**
| Variable | Range Tested | Effect on $R_s$ (Active vs GHS-DEG-04) | Significance ($p$-value) |
| :--- | :--- | :--- | :--- |
| **Flow Rate** | 0.35 ± 0.05 mL/min | 2.0 - 2.2 | 0.45 (NS) |
| **Temperature** | 45.0 ± 2.0°C | 1.8 - 2.3 | 0.02 (S)* |
| **pH of Phase A** | 2.1 ± 0.1 | 1.9 - 2.1 | 0.38 (NS) |
| **Column Lot** | 3 Different Lots | 2.0 - 2.2 | 0.51 (NS) |
*\*Temperature is a critical parameter; control within ± 0.5°C is mandated by the method.*

---

#### 3.2.S.7.1.8 Conclusion
The data presented in this subsection demonstrates that the GHS-LC-09 method provides superior resolution of Glucogen-XR from all relevant degradants. The method is compliant with ICH Q2(R1) requirements for specificity and is highly suitable for the long-term stability monitoring of Glucogen-XR Drug Substance and Drug Product. The consistent resolution ($R_s > 1.8$ in all real-time stability samples) ensures that the potency and purity of the peptide are accurately quantified throughout its shelf life.

---
**References:**
1.  ICH Q1A(R2): Stability Testing of New Drug Substances and Products.
2.  USP <621> Chromatography - System Suitability.
3.  GHS Internal Report: RPT-GLUC-2024-088: "Characterization of Impurity Profiles in Google Health Sciences Peptide Therapeutics."

---

## Quantitation Range Validation

### **3.2.S.4.3.4.7 Quantitation Range Validation (QRV)**

#### **1.0 Introduction and Scope**
The Quantitation Range Validation (QRV) for Glucogen-XR (glucapeptide extended-release) serves as a critical component of the Stability Indicating Capability (SIC) assessment. This subsection details the rigorous verification of the analytical procedure’s ability to provide results with an acceptable degree of uncertainty, across the entirety of the specified range, from the Lower Limit of Quantitation (LLOQ) to the Upper Limit of Quantitation (ULOQ).

The validation was conducted in strict adherence to **ICH Q2(R2) Validation of Analytical Procedures**, **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, and **USP <1225> Validation of Compendial Procedures**. As Glucogen-XR is a peptide therapeutic produced via the proprietary GHS-CHO-001 cell line, the quantitation range must account for the specific degradation pathways inherent to GLP-1 receptor agonists, including deamidation, oxidation, and aggregation.

#### **2.0 Objective**
The primary objective of this validation study (Protocol No. GHS-VAL-GLUC-2025-088) was to demonstrate that the RP-HPLC-UV method (Method ID: GHS-ANA-012) maintains linearity, accuracy, and precision across a concentration range representing 50% to 150% of the nominal target concentration (0.5 mg/mL), while also validating the sensitivity required for detecting related substances at levels as low as 0.05% (w/w).

#### **3.0 Reference Standards and Batch Traceability**
The validation utilized Google Health Sciences Reference Standard (GHS-RS) Lot #GLUC-RS-2024-001. All test samples were derived from the following clinical-scale drug substance batches:

| Batch Number | Scale | Date of Manufacture | Site ID | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 2000L | 12-JAN-2025 | SSF-3000-B1 | Primary Validation |
| GLUC-2025-002 | 2000L | 28-JAN-2025 | SSF-3000-B1 | Support/Robustness |
| GLUC-2025-003 | 2000L | 15-FEB-2025 | SSF-3000-B2 | Accuracy/Precision |

#### **4.0 Method Overview and Instrumentation**
The quantitation is performed using an Agilent 1290 Infinity II LC system (Asset ID: GHS-EQ-HPLC-09) equipped with a binary pump, autosampler, and Photodiode Array (PDA) detector.

**Chromatographic Parameters:**
*   **Column:** Waters XBridge Peptide BEH C18, 130Å, 3.5 µm, 4.6 mm x 150 mm.
*   **Mobile Phase A:** 0.1% Trifluoroacetic Acid (TFA) in Water.
*   **Mobile Phase B:** 0.1% TFA in Acetonitrile.
*   **Gradient:** 25% B to 45% B over 35 minutes (Linear).
*   **Flow Rate:** 1.0 mL/min.
*   **Wavelength:** 214 nm (Quantitation) and 280 nm (Identity).
*   **Injection Volume:** 20 µL.

---

#### **5.0 Validation Parameters and Protocols**

##### **5.1 Linearity and Range**
Linearity was established by preparing eight (8) concentration levels of Glucogen-XR Drug Substance, ranging from 0.025 mg/mL to 0.75 mg/mL (representing 5% to 150% of the nominal concentration).

**Protocol GHS-PRO-772:**
1.  Prepare a stock solution of 1.0 mg/mL in 50 mM Phosphate Buffer (pH 7.4).
2.  Perform serial dilutions to achieve levels: L1 (0.025 mg/mL), L2 (0.1 mg/mL), L3 (0.25 mg/mL), L4 (0.4 mg/mL), L5 (0.5 mg/mL - Nominal), L6 (0.6 mg/mL), L7 (0.7 mg/mL), and L8 (0.75 mg/mL).
3.  Inject each level in triplicate.
4.  Perform Least Squares Linear Regression analysis on Peak Area (y) vs. Concentration (x).

**Table 1: Linearity Data for Glucogen-XR (Batch GLUC-2025-001)**

| Concentration Level | Concentration (mg/mL) | Mean Peak Area (mAU*s) | SD | % RSD | Response Factor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| L1 (5%) | 0.025 | 142.5 | 1.1 | 0.77 | 5700.0 |
| L2 (20%) | 0.100 | 571.2 | 2.4 | 0.42 | 5712.0 |
| L3 (50%) | 0.250 | 1432.8 | 5.8 | 0.40 | 5731.2 |
| L4 (80%) | 0.400 | 2288.4 | 7.2 | 0.31 | 5721.0 |
| L5 (100%) | 0.500 | 2865.1 | 4.9 | 0.17 | 5730.2 |
| L6 (120%) | 0.600 | 3429.5 | 10.3 | 0.30 | 5715.8 |
| L7 (140%) | 0.700 | 4012.2 | 12.1 | 0.30 | 5731.7 |
| L8 (150%) | 0.750 | 4301.8 | 15.6 | 0.36 | 5735.7 |

**Statistical Summary:**
*   **Regression Equation:** $y = 5728.4x - 1.84$
*   **Correlation Coefficient ($r$):** 0.99998
*   **Coefficient of Determination ($r^2$):** 0.99996
*   **Residual Sum of Squares (RSS):** 142.8
*   **Standard Error of the Slope ($S_b$):** 4.12
*   **Standard Error of the Intercept ($S_a$):** 1.95

**Acceptance Criteria:** $r^2 \geq 0.999$; Intercept within ±2.0% of nominal response; Residuals randomly distributed.
**Status:** **Pass**.

##### **5.2 Accuracy (Recovery)**
Accuracy was evaluated at five levels across the quantitation range (50%, 80%, 100%, 120%, and 150%) by spiking the Glucogen-XR drug substance into a placebo matrix (containing mannitol, histidine, and polysorbate 20).

**Table 2: Accuracy/Recovery Data (Batch GLUC-2025-002)**

| Level | Amount Spiked (mg/mL) | Amount Recovered (mg/mL) | % Recovery | Mean % Recovery | % RSD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 50% (n=3) | 0.250 | 0.248 | 99.2 | 99.4% | 0.52 |
| 80% (n=3) | 0.400 | 0.399 | 99.7 | 100.1% | 0.34 |
| 100% (n=3)| 0.500 | 0.501 | 100.2| 100.2% | 0.21 |
| 120% (n=3)| 0.600 | 0.602 | 100.3| 100.1% | 0.41 |
| 150% (n=3)| 0.750 | 0.746 | 99.5 | 99.6% | 0.48 |

**Calculation Formula:**
$$\% \text{Recovery} = \left( \frac{\text{Measured Concentration}}{\text{Theoretical Concentration}} \right) \times 100$$

**Acceptance Criteria:** Mean recovery at each level 98.0% - 102.0%.
**Status:** **Pass**.

##### **5.3 Precision (Repeatability and Intermediate Precision)**
Precision was assessed at the nominal concentration (0.5 mg/mL) and at the boundaries of the quantitation range.

**5.3.1 Repeatability (System Precision)**
Six replicates of Batch GLUC-2025-003 were analyzed by a single analyst on a single day.
*   **Mean Assay Value:** 0.501 mg/mL
*   **Standard Deviation (SD):** 0.0012
*   **% RSD:** 0.24% (Criteria: $\leq 1.0\%$)

**5.3.2 Intermediate Precision (Ruggedness)**
The analysis was repeated by a second analyst using a different HPLC system (GHS-EQ-HPLC-12) and a different column lot over three separate days.

**Table 3: Intermediate Precision Data Matrix**

| Variable | Analyst 1 / Day 1 | Analyst 2 / Day 2 | Combined Results |
| :--- | :--- | :--- | :--- |
| **Mean (mg/mL)** | 0.501 | 0.498 | 0.4995 |
| **SD** | 0.0012 | 0.0021 | 0.0018 |
| **% RSD** | 0.24 | 0.42 | 0.36 |

**Statistical Comparison (F-test and t-test):**
*   **F-calculated:** 3.06 (F-critical: 5.05) → No significant difference in variances.
*   **t-calculated:** 1.88 (t-critical: 2.23) → No significant difference in means ($p > 0.05$).

---

#### **6.0 Sensitivity: LOD and LOQ Validation**
The Limit of Detection (LOD) and Limit of Quantitation (LOQ) were determined based on the Standard Deviation of the Response and the Slope.

**Calculations:**
*   **LOD:** $3.3 \times (\sigma / S)$
*   **LOQ:** $10 \times (\sigma / S)$
*   Where $\sigma = \text{Standard Deviation of Intercept}$, $S = \text{Slope of Calibration Curve}$.

**Calculated Values:**
*   **LOD:** 0.0011 mg/mL (0.22% of nominal)
*   **LOQ:** 0.0034 mg/mL (0.68% of nominal)

**Verification of LOQ:**
The LOQ was verified by injecting six replicates at the 0.0035 mg/mL level.
*   **Mean Recovery:** 102.4%
*   **% RSD:** 3.8% (Criteria: $\leq 10.0\%$)

---

#### **7.0 Stability-Indicating Capability (SIC) in the Quantitation Range**
To ensure the range remains valid for stability samples, "Forced Degradation" samples (Acid, Base, Peroxide, Thermal, and Photolytic) were analyzed. The method demonstrated the ability to resolve the parent Glucogen-XR peak from degradation products (DP-1 through DP-6) with a resolution ($R_s$) > 2.0 and a Peak Purity Index > 999.

**Table 4: Mass Balance and Resolution in Stress Samples**

| Stress Condition | Batch No. | % Degradation | % Assay (Remaining) | Mass Balance | Min Resolution ($R_s$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Acid (0.1N HCl, 24h) | GLUC-2025-001 | 8.4% | 91.2% | 99.6% | 2.4 |
| Base (0.1N NaOH, 6h) | GLUC-2025-001 | 12.1% | 87.5% | 99.6% | 2.1 |
| Peroxide (3% H2O2) | GLUC-2025-002 | 15.6% | 84.1% | 99.7% | 3.2 |
| Thermal (60°C, 7 days)| GLUC-2025-003 | 5.2% | 94.5% | 99.7% | 2.8 |

---

#### **8.0 Robustness within the Quantitation Range**
Robustness was evaluated by deliberately varying chromatographic parameters:
1.  **Flow Rate:** ± 0.1 mL/min
2.  **Column Temperature:** ± 5°C
3.  **Mobile Phase pH:** ± 0.1 units
4.  **Gradient Slope:** ± 1.0% change in B/min

In all cases, the change in the assay value for the 100% nominal sample (Batch GLUC-2025-001) was < 1.0%, and system suitability (Tailing Factor < 1.5, USP Plate Count > 5000) was maintained.

#### **9.0 Conclusion**
The Quantitation Range Validation for Glucogen-XR confirms that the RP-HPLC method GHS-ANA-012 is accurate, precise, and linear between 0.025 mg/mL and 0.75 mg/mL. The method is sufficiently sensitive to detect stability-related impurities at the 0.05% level and remains robust under varied conditions. This range is fit for purpose for the long-term stability monitoring of Glucogen-XR Drug Substance and Drug Product.

#### **10.0 References**
1.  **ICH Q2(R2):** Validation of Analytical Procedures.
2.  **USP <1225>:** Validation of Compendial Procedures.
3.  **GHS-SOP-QA-0012:** Statistical Analysis of Analytical Data.
4.  **GHS-TR-2025-045:** Forced Degradation Study Report for Glucogen-XR.

---

# Regulatory Commitments for Ongoing Stability

## Long-Term Study Continuation

### **3.2.S.7.2 Post-Approval Stability Protocol and Stability Commitment**
#### **Subsection: Long-Term Study Continuation (LTSC)**

---

### **1.0 Introduction and Regulatory Rationale**

The Long-Term Study Continuation (LTSC) program for Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) is established in strict accordance with **ICH Q5C** (*Stability Testing of Biotechnological/Biological Products*), **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*), and **21 CFR 211.166**. 

Google Health Sciences (GHS) commits to a perpetual stability monitoring program to ensure the continued safety, purity, potency, and quality of the Glucogen-XR drug substance throughout its proposed retest period and beyond. This document outlines the rigorous scientific framework, statistical methodologies, and operational protocols for the continuation of stability studies for all primary validation batches and subsequent annual commercial production batches.

#### **1.1 Scope of the LTSC Program**
The LTSC program encompasses:
1.  **Primary Stability Batches:** Completion of the full 60-month real-time stability program for the three pivotal batches (GLUC-2025-001, GLUC-2025-002, GLUC-2025-003).
2.  **Commitment Batches:** Ongoing monitoring of the first three commercial scale batches produced post-approval.
3.  **Annual Monitoring Program (AMP):** The inclusion of at least one production batch per year into the long-term stability program (the "Annual Batch").
4.  **Significant Change Monitoring:** Protocol-driven stability assessment following any Major (Category I) changes to the manufacturing process, site, or scale as defined by **SUPAC-SS** and **ICH Q5E**.

---

### **2.0 Detailed Stability Protocols and Storage Conditions**

#### **2.1 Storage Configuration and Chambers**
Glucogen-XR Drug Substance is stored in its intended commercial primary packaging: 10L High-Density Polyethylene (HDPE) carboys with integrated platinum-cured silicone gaskets and sterile ported caps.

**Table 1: Stability Storage Conditions for Long-Term Continuation**

| Study Type | Storage Condition | Frequency of Testing (Months) | Objective |
| :--- | :--- | :--- | :--- |
| **Long-Term** | -20°C ± 5°C | 0, 3, 6, 9, 12, 18, 24, 36, 48, 60 | Define Retest Period |
| **Intermediate** | 5°C ± 3°C | 0, 1, 3, 6, 9, 12 | Excursion Support |
| **Accelerated** | 25°C ± 2°C / 60% RH ± 5% | 0, 1, 3, 6 | Degradation Profiling |
| **Photostability** | Per ICH Q1B | Single Cycle | Light Sensitivity |

**Note:** All stability chambers (Asset IDs: GHS-STAB-01 through GHS-STAB-12) are qualified under **IQ/OQ/PQ** protocols and are equipped with 24/7 continuous monitoring via the Google Cloud IoT Core Telemetry system, providing real-time alerts for any temperature excursions exceeding ± 0.5°C for more than 15 minutes.

---

### **3.0 Analytical Matrix and Acceptance Criteria**

The LTSC program utilizes a stability-indicating analytical matrix. Each test has been validated for specificity, linearity, accuracy, and precision (intermediate and repeatability) in the presence of degraded peptide species.

**Table 2: Stability-Indicating Specifications for LTSC**

| Test Parameter | Methodology | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- |
| **Appearance** | Visual (USP <790>) | Clear to slightly opalescent; colorless to pale yellow | Physical integrity |
| **Potency (Biological)** | Cell-based GLP-1R Activation | 80% – 125% of Reference Standard | Biological Efficacy |
| **Purity (RP-HPLC)** | Reversed-Phase HPLC | Main Peak: ≥ 95.0% | Chemical Purity |
| **Deamidated Species** | RP-HPLC (Method-098) | Total Deamidated: ≤ 3.0% | Stability Marker |
| **HMW Species** | SE-HPLC (Method-102) | High Molecular Weight: ≤ 1.5% | Aggregation Monitoring |
| **Charge Variants** | cIEF (Method-204) | Main Peak: 60-80% | Post-translational Mod. |
| **pH** | USP <791> | 6.5 ± 0.3 | Formulation Stability |
| **Bacterial Endotoxin** | USP <85> | ≤ 0.5 EU/mg | Safety/Sterility |
| **Bioburden** | USP <61> | ≤ 10 CFU/100 mL | Safety/Micro Control |

---

### **4.0 Batch Inventory and Sampling Schedule (2025-2030)**

The following table details the specific batches currently enrolled in the LTSC program.

**Table 3: LTSC Batch Enrollment and Testing Timeline**

| Batch Number | Batch Size | Manufacturing Date | Site | Status |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 5000L | 15-JAN-2025 | SSF, CA | 24M Testing Pending |
| **GLUC-2025-002** | 5000L | 02-FEB-2025 | SSF, CA | 24M Testing Pending |
| **GLUC-2025-003** | 5000L | 18-MAR-2025 | SSF, CA | 18M Testing Complete |
| **GLUC-2025-101*** | 5000L | 10-AUG-2025 | SSF, CA | Annual Batch (Year 1) |
| **GLUC-2026-044*** | 5000L | 12-MAY-2026 | SSF, CA | Annual Batch (Year 2) |

*\*Projected batches based on commercial production forecast.*

---

### **5.0 Procedural Protocol for LTSC Sample Management**

#### **5.1 Sample Pulling and Quarantine**
1.  **Automated Notification:** The Laboratory Information Management System (LIMS) generates a "Sample Pull Request" 14 days prior to the stability pull date.
2.  **Retrieval:** Samples are retrieved from the -20°C walk-in freezer (GHS-FRZ-09) by authorized stability technicians.
3.  **Equilibration:** Samples are allowed to reach room temperature (15-25°C) in a light-protected environment for exactly 120 minutes prior to analysis to prevent condensation-induced dilution or aggregation.
4.  **Aliquotting:** Under ISO Class 5 laminar flow, samples are aliquotted into secondary vials for specific tests (e.g., bioburden) to prevent cross-contamination.

#### **5.2 Handling of Out-of-Specification (OOS) Results**
Any stability result failing to meet the criteria defined in Table 2 triggers an immediate investigation per **SOP-QA-0098: Management of OOS Stability Results**.
*   **Phase I:** Laboratory investigation (instrument check, reagent check, analyst error).
*   **Phase II:** Manufacturing investigation and impact assessment on other batches.
*   **Reporting:** If the OOS is confirmed, the FDA will be notified within 15 working days via a **Field Alert Report (FAR)**.

---

### **6.0 Statistical Analysis of LTSC Data**

#### **6.1 Data Trending (ANCOVA)**
GHS utilizes Analysis of Covariance (ANCOVA) to analyze long-term stability data. The model evaluates the slope (rate of degradation) across different batches.

**Formula 1: Linear Regression for Retest Period Estimation**
$$Y_{ij} = \beta_0 + \beta_1 X_{ij} + \alpha_i + \epsilon_{ij}$$
Where:
*   $Y_{ij}$ = Measured quality attribute (e.g., Purity by RP-HPLC).
*   $X_{ij}$ = Time (months).
*   $\beta_1$ = Common slope across batches (rate of change).
*   $\alpha_i$ = Random intercept for batch $i$.
*   $\epsilon_{ij}$ = Residual error.

#### **6.2 Poolability of Data**
Per **ICH Q1E**, if the p-value for the batch-by-time interaction is > 0.25, the data from different batches are pooled to establish a single retest period. If p ≤ 0.25, the retest period is based on the "worst-case" batch (the one with the shortest time to reach the 95% confidence interval limit of the specification).

---

### **7.0 Post-Approval Commitment Summary**

Google Health Sciences hereby commits to the following actions regarding the Glucogen-XR Drug Substance:

1.  **Continuity:** GHS will continue the long-term stability studies for the initial three production batches through the proposed retest period of 60 months.
2.  **Annual Testing:** GHS will add at least one commercial batch of Glucogen-XR DS to the long-term stability program annually.
3.  **Reporting:** All stability data, including statistical trend analysis, will be submitted to the FDA in the **Annual Report (21 CFR 314.81)**.
4.  **Deviations:** Any significant change in the stability profile or failure to meet specifications will result in an immediate evaluation of product on the market and potential recall, followed by a formal supplement submission to the NDA/BLA.

---

### **8.0 References**
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <1049>:** Quality Attributes of Therapeutic Peptides.
4.  **FDA Guidance for Industry:** PAC-ATLS: Post-approval Changes—Analytical Testing Laboratory Sites.

---
**End of Subsection: Long-Term Study Continuation**
**Document ID:** GHS-M3-DS-STAB-2025-004-REV01
**Authorized By:** Regulatory Affairs Directorate, Google Health Sciences.

---

## Annual Reporting

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.7.2: POST-APPROVAL STABILITY PROTOCOL AND STABILITY COMMITMENT
### SUBSECTION: ANNUAL REPORTING AND POST-MARKETING SURVEILLANCE PROCEDURES

---

#### 1.0 INTRODUCTION AND REGULATORY SCOPE
This subsection delineates the comprehensive Annual Reporting framework for Glucogen-XR (glucapeptide extended-release), a GLP-1 receptor agonist manufactured by Google Health Sciences (GHS). In accordance with **21 CFR 314.70(d)**, **21 CFR 314.81(b)(2)**, and **ICH Q1A(R2)**, Google Health Sciences commits to the continuous monitoring of drug substance (DS) stability and the annual communication of these data to the United States Food and Drug Administration (FDA).

The reporting structure defined herein ensures that the stability profile of the glucapeptide remains consistent with the specifications established in the original New Drug Application (NDA) and subsequent supplements. This section covers the data aggregation, statistical analysis (via Google Cloud Life Sciences AI-Driven Stability Analytics), and submission workflows for the Annual Product Review (APR) and the Annual Report (AR).

#### 2.0 REGULATORY COMPLIANCE FRAMEWORK
The Annual Reporting for Glucogen-XR adheres to the following regulatory benchmarks:
1.  **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **USP <1049>:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
4.  **FDA Guidance for Industry:** *Premarket Notification [510(k)] Submissions for Medical Devices that Include Antimicrobial Agents* (where applicable for delivery systems).
5.  **21 CFR 211.180(e):** Requirements for written records to be maintained for at least one year after the expiration date of the batch.

#### 3.0 ANNUAL STABILITY REPORTING PROTOCOL (ASRP)
Google Health Sciences utilizes an automated Stability Information Management System (SIMS) integrated within the Google Cloud Life Sciences infrastructure. Each batch of Glucogen-XR DS is tracked from the point of lyophilization at the South San Francisco facility through its designated shelf-life.

##### 3.1 Data Aggregation and Metadata Requirements
The following metadata must be included in every Annual Report submission for each stability-commitment batch:

| Data Field ID | Description | Specification/Requirement |
| :--- | :--- | :--- |
| **GHS-REF-01** | Batch Number | Format: GLUC-2025-XXX |
| **GHS-REF-02** | Manufacturing Date | ISO 8601 (YYYY-MM-DD) |
| **GHS-REF-03** | Scale of Manufacture | Commercial Scale (2,000L Bioreactor) |
| **GHS-REF-04** | Storage Condition | -20°C ± 5°C (Long-term) |
| **GHS-REF-05** | Container Closure System | 10L Type I Borosilicate Glass Bottle with Fluoropolymer Liner |
| **GHS-REF-06** | Testing Frequency | 0, 3, 6, 9, 12, 18, 24, 36 Months |

##### 3.2 Statistical Methodology for Annual Trend Analysis
To detect potential drifts in the stability profile before they exceed OOS (Out of Specification) limits, GHS employs the **Stability Risk Assessment Algorithm (SRAA)**. 

**Formula for Linear Regression Analysis:**
$$Y = \beta_0 + \beta_1X + \epsilon$$
Where:
*   $Y$ = Stability Result (e.g., % Purity by RP-HPLC)
*   $\beta_0$ = Intercept at time zero
*   $\beta_1$ = Slope (Rate of degradation)
*   $X$ = Time in months
*   $\epsilon$ = Random error

The Annual Report includes a 95% confidence interval analysis for the slope. If the lower or upper 95% confidence limit for the shelf-life (intercept with the acceptance criterion) is less than the approved shelf-life, a "Stability Alert" is generated.

#### 4.0 REPRESENTATIVE DATA FOR ANNUAL SUBMISSION (CY2025-2026)
The following table provides a simulated representative dataset for three (3) primary commitment batches to be included in the upcoming Annual Report.

**Table 1: Stability Summary Data for Glucogen-XR DS (Long-Term: -20°C ± 5°C)**

| Batch ID | Timepoint (Mo) | Appearance (Clarity/Color) | Purity by RP-HPLC (%) [Spec: ≥98.0%] | High Mol. Wt. Species (SEC) [% Spec: ≤1.0%] | Potency (Cell-based Bioassay) [% Spec: 80-125%] | pH [Spec: 6.5 - 7.5] |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0 | Clear, Colorless | 99.8 | 0.12 | 102 | 7.1 |
| **GLUC-2025-001** | 6 | Clear, Colorless | 99.7 | 0.15 | 101 | 7.1 |
| **GLUC-2025-001** | 12 | Clear, Colorless | 99.5 | 0.18 | 99 | 7.2 |
| **GLUC-2025-002** | 0 | Clear, Colorless | 99.7 | 0.11 | 105 | 7.0 |
| **GLUC-2025-002** | 6 | Clear, Colorless | 99.6 | 0.14 | 103 | 7.0 |
| **GLUC-2025-002** | 12 | Clear, Colorless | 99.4 | 0.20 | 101 | 7.1 |
| **GLUC-2025-003** | 0 | Clear, Colorless | 99.9 | 0.09 | 104 | 7.1 |
| **GLUC-2025-003** | 6 | Clear, Colorless | 99.7 | 0.12 | 102 | 7.1 |
| **GLUC-2025-003** | 12 | Clear, Colorless | 99.6 | 0.17 | 100 | 7.1 |

#### 5.0 STEP-BY-STEP PROCEDURE FOR ANNUAL DATA REVIEW
GHS Quality Assurance (QA) and Regulatory Affairs (RA) follow **Standard Operating Procedure SOP-GHS-REG-099** for the generation of the stability section of the Annual Report.

1.  **Data Extraction:**
    *   Initiate extraction from the LIMS (Laboratory Information Management System) on the first business day of the anniversary month of the NDA approval.
    *   Verify that all batches (GLUC-2025-XXX) manufactured during the reporting period are included.

2.  **Verification of OOS/OOT Results:**
    *   Review all Out-of-Specification (OOS) and Out-of-Trend (OOT) investigations.
    *   *Note:* Any OOS result that was confirmed must have been reported via a **Field Alert Report (FAR)** within 3 working days of initial detection. The Annual Report must cross-reference these FARs.

3.  **Statistical Calculation:**
    *   Perform ANCOVA (Analysis of Covariance) to determine if data from different batches can be pooled.
    *   Calculation of the "Worst-Case" degradation rate.

4.  **Formatting the Report:**
    *   Convert all raw data into eCTD (electronic Common Technical Document) compliant XML and PDF formats.
    *   Populate Section 3.2.S.7.3 (Stability Data).

5.  **Executive Summary Generation:**
    *   A PhD-level Regulatory Scientist provides a narrative summary of the stability trends.
    *   "Based on the data for batches GLUC-2025-001 through GLUC-2025-015, Glucogen-XR DS remains stable under the proposed storage conditions, with no significant change (as defined by ICH Q1A) observed in critical quality attributes (CQAs)."

#### 6.0 ADVERSE TRENDS AND INVESTIGATORY TRIGGER POINTS
Google Health Sciences maintains a proactive stance on stability. The Annual Report includes a summary of "Near-Limit" observations.

| Parameter | Warning Limit (Trigger for Investigation) | Specification Limit (Action) |
| :--- | :--- | :--- |
| **Purity (RP-HPLC)** | < 98.5% | < 98.0% (OOS) |
| **Aggregation (SEC)** | > 0.7% | > 1.0% (OOS) |
| **Deamidation (CEX)** | > 4.0% increase from T=0 | Per validated range |
| **Residual Moisture** | > 2.5% | > 3.0% (OOS) |

#### 7.0 POST-MARKETING STABILITY COMMITMENT (POST-NDA APPROVAL)
In accordance with **21 CFR 314.81**, GHS commits to the following:
1.  **First Three Commercial Batches:** To be placed on long-term stability and reported in the first AR.
2.  **Annual Batch Program:** At least one (1) commercial production batch of Glucogen-XR DS (if manufactured) will be added to the stability monitoring program annually.
3.  **Major Changes:** Any major change to the manufacturing process (Scale-up, Site Change) will trigger a new stability study involving three batches, with data provided in a Prior Approval Supplement (PAS) and summarized in subsequent Annual Reports.

#### 8.0 STORAGE AND RETENTION OF SAMPLES
Stability samples are stored at the Google Health Sciences South San Francisco facility (Building 4, Stability Chamber Room G-102).
*   **Chamber ID:** STAB-CH-2024-09 (Primary -20°C)
*   **Backup Power:** Dual 500kW Caterpillar Diesel Generators with 72-hour fuel supply.
*   **Monitoring:** Continuous 24/7 digital monitoring with cellular alerts for any excursion > 2.0°C for more than 15 minutes.

#### 9.0 CONCLUSION
The Annual Reporting protocol for Glucogen-XR is designed to provide the FDA with a high-fidelity, data-rich longitudinal view of the product's quality. By leveraging Google's advanced computational infrastructure and adhering to strict ICH and FDA guidelines, GHS ensures that every batch of Glucogen-XR, from GLUC-2025-001 to the future of diabetic care, maintains the highest standards of safety and efficacy.

---
**END OF SECTION**
*Prepared by: GHS Regulatory Affairs Group*
*Date: 22-May-2024*
*Document ID: GHS-GLUC-M3DS-STAB-AR-001*

---

## Specification Revisions if Needed

### **3.2.S.7.3.3 Specification Revisions if Needed**

---

#### **1.0 Introduction and Regulatory Framework**

This section outlines the comprehensive procedural framework, technical criteria, and regulatory justification for the modification of Drug Substance (DS) specifications for Glucogen-XR (glucapeptide extended-release), as derived from ongoing stability data analysis. Google Health Sciences (GHS) adheres to a lifecycle management approach to product quality, ensuring that specifications remain reflective of the manufacturing process capability, the stability profile of the peptide, and clinical relevance.

The protocols described herein are developed in accordance with:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
*   **ICH Q3D(R2):** Guideline for Elemental Impurities.
*   **ICH Q5E:** Comparability of Biotechnological/Biological Products Subject to Changes in their Manufacturing Process.
*   **FDA Guidance for Industry:** Q1D Bracketing and Matrixing Designs for Stability Testing of New Drug Substances and Products.
*   **USP <1043>:** Ancillary Materials for Cell, Gene, and Tissue-Engineered Products.

#### **2.0 Triggers for Specification Revision**

Specifications for Glucogen-XR are not static. GHS maintains a "Quality by Design" (QbD) approach where the Control Strategy is periodically re-evaluated based on the following triggers:

1.  **Trend Analysis (OOT):** Identification of Out-of-Trend (OOT) results during long-term storage (5°C ± 3°C) or accelerated conditions (25°C ± 2°C / 60% RH) even if results remain within current Out-of-Specification (OOS) limits.
2.  **Manufacturing Process Refinement:** Implementation of Next-Generation (NG) purification steps at the South San Francisco facility (Facility ID: GHS-SSF-3000) that result in a significantly higher purity profile.
3.  **Analytical Method Lifecycle Management:** Transition from legacy HPLC methods to Ultra-High Performance Liquid Chromatography (UHPLC) or Multi-Attribute Methods (MAM) via Orbitrap mass spectrometry.
4.  **Cumulative Batch Data:** Statistical evaluation of the first 30 commercial-scale batches (GLUC-2025-001 through GLUC-2025-030).
5.  **Regulatory Feedback:** Direct requests from the FDA during the Post-Approval Change Control Supplement (PACCS) review process.

#### **3.0 Statistical Methodology for Tolerance Interval Recalculation**

When stability data indicates that a specification limit is either too wide (not reflective of process capability) or too narrow (not accounting for inherent glycopeptide degradation pathways), GHS utilizes the following statistical protocol to propose revisions.

##### **3.1 Calculation of Tolerance Intervals**
GHS applies a (95, 95) tolerance interval approach. The formula utilized for calculating the upper and lower acceptance limits ($LAL$ and $UAL$) is:

$$X \pm (k \cdot s)$$

Where:
*   **$X$**: The arithmetic mean of the stability data points at the end-of-shelf-life (EOSL) or the proposed retest period.
*   **$s$**: The standard deviation of the batch-to-batch variability.
*   **$k$**: The tolerance factor for a normal distribution, determined by the sample size ($n$), confidence level (0.95), and the proportion of the population covered (0.95).

##### **3.2 Slope Analysis for Degradation Products**
For stability-indicating markers such as **% Total Impurities** and **% Deamidated Glucogen**, a linear regression analysis is performed across all batches (e.g., GLUC-2025-001, GLUC-2025-002, GLUC-2025-003).

The regression model is defined as:
$$Y_{ij} = \beta_0 + \beta_1 \cdot t_j + \epsilon_{ij}$$
Where:
*   $Y_{ij}$ is the observed impurity level of batch $i$ at time $t_j$.
*   $\beta_0$ is the intercept (initial value at Release).
*   $\beta_1$ is the degradation rate (slope).

If the 95% upper confidence limit of the mean degradation rate results in an impurity level exceeding the current specification before Month 36, a revision of the initial release limit or the shelf-life limit is triggered.

#### **4.0 Case Study: Hypothetical Revision Protocol for "Related Substances"**

To illustrate the rigor of the Google Health Sciences regulatory team, Table 1 below details the proposed revision of the "Total Related Substances" specification based on 24-month real-time stability data from the South San Francisco site.

**Table 1: Proposed Specification Revision for Glucogen-XR Drug Substance (Total Impurities)**

| Parameter | Current Specification (IND Phase 3) | Proposed Revision (Commercial) | Rationale for Revision | Statistical Basis (N=12 Batches) |
| :--- | :--- | :--- | :--- | :--- |
| **Total Related Substances (by RP-UHPLC)** | ≤ 5.0% | **≤ 3.5%** | Enhanced purification efficiency in GHS-CHO-001 cell line and improved column chemistry. | Mean = 2.1%; SD = 0.35%; TI (95,95) = 3.22% |
| **Deamidated Peptide** | ≤ 2.0% | **≤ 1.5%** | Stability data shows slower than expected deamidation at 5°C. | Max observed at T=24M was 1.1% for GLUC-2025-004. |
| **High Molecular Weight Species (SEC)** | ≤ 1.0% | **≤ 0.8%** | Implementation of improved viral filtration and chilling protocols post-elution. | 3-Sigma limit calculated at 0.72%. |

#### **5.0 Procedural Workflow for Specification Modification**

GHS follows a standard operating procedure (SOP-QA-00984: *Lifecycle Management of Specifications*) for all revisions.

**Step 1: Data Aggregation**
The Stability Data Management System (SDMS) extracts all data for batches GLUC-2025-001 through GLUC-2025-050.

**Step 2: Degradation Kinetic Modeling**
GHS scientists apply the Arrhenius equation to predict long-term behavior if only accelerated data is available for newer batches:
$$k = A \cdot e^{-E_a / RT}$$
Where $E_a$ is the activation energy specific to Glucogen-XR peptide bond hydrolysis.

**Step 3: Quality Management Review (QMR)**
The "Specification Revision Committee" (comprising Analytical Development, Regulatory Affairs, and Quality Assurance) reviews the statistical output.

**Step 4: Regulatory Filing**
*   **Minor Changes:** Reported in the Annual Report (21 CFR 601.12(d)).
*   **Moderate Changes:** Submitted as a CBE-30 (Changes Being Effected in 30 Days) (21 CFR 601.12(c)).
*   **Major Changes:** (e.g., widening a limit) Submitted as a Prior Approval Supplement (PAS) (21 CFR 601.12(b)).

#### **6.0 Detailed Stability Data Table (Supporting Revision)**

The following table provides the historical stability data for the primary stability batches used to justify the tightening of the Glucogen-XR specifications.

**Table 2: Stability Summary for Total Impurities (%) - Storage 5°C ± 3°C**

| Batch Number | Site | T=0 (Release) | T=6M | T=12M | T=18M | T=24M | 95% UCL (T=36M)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | SSF-3000 | 1.12 | 1.25 | 1.38 | 1.55 | 1.68 | 2.10 |
| **GLUC-2025-002** | SSF-3000 | 1.05 | 1.18 | 1.30 | 1.48 | 1.62 | 2.05 |
| **GLUC-2025-003** | SSF-3000 | 1.15 | 1.30 | 1.45 | 1.62 | 1.75 | 2.22 |
| **GLUC-2025-004** | SSF-3000 | 1.08 | 1.22 | 1.35 | 1.50 | 1.65 | 2.15 |
| **GLUC-2025-005** | SSF-3000 | 1.20 | 1.35 | 1.52 | 1.70 | 1.88 | 2.45 |
| **GLUC-2025-006** | SSF-3000 | 1.10 | 1.24 | 1.40 | 1.58 | 1.72 | 2.18 |
| **GLUC-2025-007** | SSF-3000 | 1.02 | 1.15 | 1.28 | 1.42 | 1.58 | 2.02 |
| **GLUC-2025-008** | SSF-3000 | 1.18 | 1.32 | 1.48 | 1.65 | 1.82 | 2.30 |

*\*Extrapolated using linear regression analysis.*

#### **7.0 Impact Assessment of Analytical Method Variations**

A revision of specifications is often necessitated by the migration from HPLC to UHPLC. GHS has documented that the increased resolution of the Waters ACQUITY UPLC® system used in the South San Francisco lab identifies a minor degradant (Oxidized Methionine-14) that was previously co-eluting with the main peak in legacy HPLC.

**Table 3: Comparison of Specification Sensitivity**

| Method ID | Resolution ($R_s$) | LOD (% w/w) | LOQ (% w/w) | Impact on Specification |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-HPLC-V1** | 1.5 | 0.10 | 0.30 | Baseline |
| **GHS-UHPLC-V2** | 2.8 | 0.02 | 0.06 | Allows for tightening of individual impurity limits from ≤0.5% to ≤0.2%. |

#### **8.0 Regulatory Commitment for Future Revisions**

Google Health Sciences commits to the following:
1.  **Continuous Monitoring:** GHS will continue to monitor all stability batches (minimum of one batch per year, e.g., GLUC-2026-001, GLUC-2027-001) for the duration of the product's commercial lifecycle.
2.  **OOS/OOT Investigations:** Any result that deviates from the historical trend will undergo a Phase I laboratory investigation (as per USP <1010>) to determine if the deviation is an analytical artifact or a true change in the DS stability profile.
3.  **Compendial Alignment:** Should the USP or Ph. Eur. introduce a specific monograph for Glucapeptide Extended-Release, GHS will perform a gap analysis and revise specifications to ensure full compendial compliance within 180 days of the monograph's effective date.

#### **9.0 Conclusion**

The process for "Specification Revisions if Needed" for Glucogen-XR is a rigorous, data-driven protocol that ensures the safety and efficacy of the GLP-1 receptor agonist. By utilizing advanced statistical modeling and maintaining a state-of-the-art manufacturing facility in South San Francisco, Google Health Sciences ensures that Glucogen-XR remains at the forefront of Type 2 Diabetes treatment with a stability profile that is both robust and transparently managed.

---
**End of Subsection**
**Document Ref:** *GHS-MOD3-DS-STAB-REV-2025*
**Confidentiality:** *Proprietary Information of Google Health Sciences*

---

# Stability Study Master Plan

## Study Organization and Responsibilities

### **3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS**
**SUBSECTION: Study Organization and Responsibilities**
**DOCUMENT ID:** GHS-GLUC-XR-M3-STAB-ORG-001
**REVISION:** 04 (Final)
**EFFECTIVE DATE:** 14 October 2024
**SITES COVERED:** 3000 Innovation Drive, South San Francisco, CA; 100 Data Center Way, Council Bluffs, IA (Storage Repository)

---

### **1.0 SCOPE AND PURPOSE**
This subsection of Module 3.2.S.7.1 details the organizational hierarchy, functional responsibilities, and administrative oversight governing the stability testing program for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences (GHS). The stability program is designed to meet and exceed the requirements set forth in **ICH Q1A(R2)** (*Stability Testing of New Drug Substances and Products*), **ICH Q1B** (*Photostability Testing*), **ICH Q5C** (*Stability Testing of Biotechnological/Biological Products*), and **21 CFR Part 211.166**.

The organizational structure ensures that all data generated to support the shelf-life and storage conditions of Glucogen-XR are produced under strict Current Good Manufacturing Practice (cGMP) conditions, with clear lines of accountability between Quality Control (QC), Quality Assurance (QA), Analytical Development (AD), and Regulatory Affairs (RA).

---

### **2.0 ORGANIZATIONAL STRUCTURE**

The Glucogen-XR Stability Steering Committee (GSSC) oversees the execution of the Stability Master Plan. The following chart depicts the reporting structure:

*   **Executive Sponsor:** VP of Quality, Google Health Sciences
*   **Program Lead:** Senior Director of Stability & Analytical Science
*   **Operational Hubs:**
    *   **Analytical Testing:** QC Biologics Laboratory (SSF-3000)
    *   **Sample Management:** Global Stability Inventory Management (GSIM)
    *   **Compliance:** Quality Assurance Regulatory Compliance (QARC)
    *   **Data Science:** GHS Cloud Bio-Analytics Division (for statistical modeling)

---

### **3.0 KEY FUNCTIONAL RESPONSIBILITIES**

#### **3.1 Quality Assurance (QA) - Stability Oversight**
QA maintains ultimate responsibility for the integrity of the stability program. Specific duties include:
1.  **Protocol Approval:** Review and final sign-off on all Stability Protocols (SPs) for Registration, Commitment, and Annual Batches.
2.  **Deviation Management:** Investigation and closure of all Stability-related Deviations (SDs) and Out-of-Trend (OOT) / Out-of-Specification (OOS) events per **USP <1010>** guidelines.
3.  **Auditing:** Periodic auditing of the stability storage facilities (Chambers 101-140) to ensure compliance with temperature and humidity specifications.
4.  **Batch Release:** Ensuring only validated batches (e.g., GLUC-2025-001, GLUC-2025-002) are entered into the formal stability program.

#### **3.2 Quality Control (QC) - Stability Operations**
The QC department is responsible for the physical execution of the stability program:
1.  **Sample Pulling:** Timely extraction of samples from stability chambers within the windows defined in Table 3.2-1.
2.  **Testing Execution:** Performance of validated analytical methods, including SE-HPLC, RP-HPLC, Bioassay (Potency), and Sub-visible Particulate Matter (USP <787>).
3.  **Data Transcription:** Entry of results into the Laboratory Information Management System (LIMS - Google Cloud Pharma-Data Platform v4.2).

**Table 3.2-1: Standard Pull Windows for Glucogen-XR Stability**
| Storage Duration | Window (Calendar Days) | Action if Outside Window |
| :--- | :--- | :--- |
| ≤ 1 Month | ± 1 Day | Deviation - Impact Assessment Required |
| > 1 to 12 Months | ± 7 Days | Notification to QA Stability |
| > 12 Months | ± 15 Days | Non-conformance Report |

#### **3.3 Stability Inventory Management (SIM)**
The SIM team manages the environmental chambers located at the South San Francisco and Council Bluffs facilities.
1.  **Maintenance:** Preventive maintenance (PM) of walk-in chambers (e.g., Equipment ID: EQ-STAB-200-A, B, and C).
2.  **Monitoring:** 24/7 continuous monitoring via the GHS Sentinel Cloud system, utilizing redundant NIST-traceable probes.
3.  **Inventory Logging:** Managing the Chain of Custody for every vial of Glucogen-XR, from receipt (e.g., Batch GLUC-2025-005) to destruction.

---

### **4.0 DETAILED SAMPLE MANAGEMENT PROTOCOL (SMP-001)**

To ensure the integrity of the glucapeptide molecule, the following step-by-step protocol is mandated for all stability pulls.

#### **4.1 Protocol for Pulling Samples (Step-by-Step)**
1.  **Verification:** Verify the Pull Date in LIMS. Confirm the batch number (e.g., **GLUC-2025-010**) matches the protocol requirement.
2.  **Retrieval:** Access the stability chamber (Condition: 5°C ± 3°C). Limit door opening time to < 60 seconds.
3.  **Labeling:** Affix "Stability Testing in Progress" labels to the secondary packaging.
4.  **Transfer:** Transport samples in validated cold-chain shippers (Temp: 2-8°C) to the QC laboratory.
5.  **Acclimation:** For samples stored at -20°C or -70°C, follow the Thawing Protocol **GHS-BIO-THW-09** to ensure peptide folding stability.
6.  **Login:** Scan samples into the "Active Testing Queue" in LIMS.

---

### **5.0 DATA MANAGEMENT AND STATISTICAL ANALYSIS**

The "Responsibilities" section extends to the Google Cloud Life Sciences Data Team, which performs the statistical evaluation of stability data to determine shelf-life (T95).

#### **5.1 Statistical Calculations (Reference ICH Q1E)**
Stability data is analyzed using a linear regression model. The shelf-life is defined as the time when the 95% confidence interval for the mean degradation curve intersects the lower specification limit (LSL).

**Equation 1: Linear Regression for Degradation**
$$Y = \beta_0 + \beta_1X + \epsilon$$
*Where:*
*   $Y$ = Assay Value (%)
*   $X$ = Time (Months)
*   $\beta_0$ = Intercept (Initial Potency)
*   $\beta_1$ = Slope (Degradation Rate)
*   $\epsilon$ = Error Term

**Table 5.1-1: Responsibilities for Statistical Review**
| Task | Responsible Party | Standard / Tool |
| :--- | :--- | :--- |
| Data Extraction | QC Data Integrity Officer | LIMS / BigQuery |
| Regression Analysis | Biostatistician | R-Bioconductor / SAS v9.4 |
| Poolability Testing | Stability Scientist | ICH Q1E Appendix A |
| Final Report Writing | Regulatory Affairs | GHS Internal Template |

---

### **6.0 BATCH ASSIGNMENT AND TRACKING MATRIX**

The following table identifies the specific batches assigned to the Initial Registration Stability Study (IRSS) and the personnel responsible for their oversight.

**Table 6.1-1: Stability Program Batch Matrix (Glucogen-XR)**
| Batch Number | Manufacturing Site | Scale | Responsible Lead | Primary Chamber ID |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | SSF-3000 | 2000L | Dr. A. Vasant | CH-5C-9901 |
| **GLUC-2025-002** | SSF-3000 | 2000L | Dr. A. Vasant | CH-5C-9902 |
| **GLUC-2025-003** | SSF-3000 | 2000L | Dr. L. Chen | CH-25C-8810 |
| **GLUC-2025-004** | SSF-3000 | 500L (Eng) | Dr. S. Gupta | CH-40C-7705 |
| **GLUC-2025-005** | SSF-3000 | 2000L | Dr. L. Chen | CH-5C-9901 |

---

### **7.0 EXTERNAL CONTRACT LABORATORIES**

In instances where specialized testing is required (e.g., USP <1207> Container Closure Integrity Testing via Helium Leak), GHS utilizes qualified Contract Research Organizations (CROs).

**Table 7.1-1: External Responsibilities**
| Vendor Name | Location | Responsibility | Certification |
| :--- | :--- | :--- | :--- |
| BioSpec Analytics | San Diego, CA | Mass Spectrometry (Post-translational Mods) | ISO 17025 |
| CryoGuard Inc. | Austin, TX | Back-up Ultra-Low Temp Storage | cGMP |
| Steri-Test Ltd. | Dublin, IE | Sterility & Endotoxin Testing | EU-GMP |

The GHS Quality Vendor Management (QVM) team is responsible for performing bi-annual audits of these sites to ensure that the stability samples of Glucogen-XR are handled according to the master plan.

---

### **8.0 REGULATORY REFERENCES AND COMPLIANCE STANDARDS**

The organization of the Glucogen-XR stability program is strictly aligned with the following:
1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
3.  **FDA Guidance for Industry:** *Expiration Dating of Resurrected/Modified Biologics (2022).*
4.  **USP Chapter <1150>:** Pharmaceutical Stability.
5.  **USP Chapter <1049>:** Quality of Biotechnological Products.

---

### **9.0 APPROVAL SIGNATORIES**

*Electronically signed in the GHS Quality Management System.*

**Author:**
*Senior Stability Scientist, Google Health Sciences*
Date: 10 Oct 2024

**Reviewer:**
*Director of Analytical Development, Google Health Sciences*
Date: 12 Oct 2024

**Approver:**
*Head of Quality Assurance, Google Health Sciences*
Date: 14 Oct 2024

---
**[END OF SECTION 3.2.S.7.1 - ORGANIZATION]**

---

## Deviation Handling

### **3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS: DEVIATION HANDLING**

---

#### **1.0 SCOPE AND OBJECTIVES**
This subsection of the Stability Study Master Plan (SSMP) for Glucogen-XR (glucapeptide extended-release) establishes the rigorous procedural framework for the identification, documentation, investigation, and impact assessment of deviations occurring during the execution of stability protocols. This document applies to all stability studies performed by Google Health Sciences (GHS) at the South San Francisco facility (FEI: 3000-INN-CA) and contracted Stability Storage Organizations (SSOs).

The objective is to ensure that any departure from the approved stability protocol (e.g., temperature excursions, humidity fluctuations, missed pull dates, or analytical testing errors) is evaluated in accordance with **21 CFR Part 211.192**, **ICH Q1A(R2)**, and **ICH Q10 (Pharmaceutical Quality System)**.

---

#### **2.0 REGULATORY REFERENCE FRAMEWORK**
The deviation handling procedures outlined herein are compliant with the following global regulatory standards:
*   **FDA 21 CFR 211.160(b):** General requirements for laboratory controls.
*   **FDA 21 CFR 211.166:** Stability testing requirements.
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1150>:** Pharmaceutical Stability.
*   **USP <1079>:** Risks and Mitigation Strategies for the Storage and Transportation of Finished Drug Products.
*   **WHO Technical Report Series No. 961:** Annex 9: Guide to good storage practices for pharmaceuticals.

---

#### **3.0 DEFINITIONS AND CLASSIFICATIONS**

##### **3.1 Definitions**
*   **Stability Deviation:** Any unplanned or unintended event occurring during the storage, handling, sampling, or testing of Glucogen-XR stability samples that differs from the requirements specified in the Stability Master Protocol.
*   **Temperature Excursion:** Any event where the storage conditions for Glucogen-XR deviate from the specified ICH ranges (e.g., $5^{\circ}C \pm 3^{\circ}C$ for refrigerated storage).
*   **Mean Kinetic Temperature (MKT):** A simplified way of expressing the overall effect of temperature fluctuations during storage or transit of a drug product.

##### **3.2 Deviation Categorization Matrix**
Deviations are categorized based on their potential impact on the data integrity and the stability profile of the Glucogen-XR glucapeptide.

| Category | Definition | Examples | Investigation Level |
| :--- | :--- | :--- | :--- |
| **Minor** | Low potential impact on data integrity or product quality. | Missed pull date (within $\pm$ 2 days); minor equipment glitch with no loss of data. | Level 1: Summary Report |
| **Major** | Significant departure from protocol; potential impact on a specific time point. | Temperature excursion exceeding 24 hours but $< 72$ hours; analytical testing failure (non-OOS). | Level 2: Full Investigation |
| **Critical** | Fundamental breach of protocol; high risk to study validity or product safety. | Complete loss of environmental control; sample mix-up; cross-contamination; OOS result. | Level 3: CAPA & Root Cause |

---

#### **4.0 PROCEDURAL WORKFLOW FOR DEVIATION REPORTING**

##### **4.1 Phase I: Identification and Initial Reporting (0–24 Hours)**
Upon discovery of a deviation (e.g., a "Red Alert" from the REES Environmental Monitoring System), the Stability Laboratory Technician must:
1.  **Cease Activity:** If the deviation occurs during analytical testing, stop the procedure.
2.  **Isolate Samples:** Ensure samples are moved to a "Backup Validated Chamber" (e.g., Chamber ID: GHS-STAB-REFRIG-09) if the primary chamber is failing.
3.  **Initiate Form:** Open a Deviation Report (DR) in the Veeva QualityDocs system using the prefix `DR-GLUC-STAB-2025-XXX`.

##### **4.2 Phase II: Impact Assessment and MKT Calculation (24–72 Hours)**
For temperature excursions, a Mean Kinetic Temperature (MKT) must be calculated to determine if the excursion compromised the kinetic stability of the glucapeptide.

**Formula for MKT (based on Arrhenius Equation):**
$$T_k = \frac{\Delta H / R}{-\ln \left( \frac{e^{-\Delta H / RT_1} + e^{-\Delta H / RT_2} + \dots + e^{-\Delta H / RT_n}}{n} \right)}$$

Where:
*   $\Delta H$ = Activation energy (typically $83.144 \text{ kJ/mol}$ for peptides unless determined otherwise).
*   $R$ = Universal gas constant ($0.0083144 \text{ kJ/mol} \cdot K$).
*   $T$ = Temperature in Kelvin.

##### **4.3 Phase III: Root Cause Analysis (RCA)**
GHS utilizes the "5 Whys" and "Ishikawa (Fishbone) Diagram" for all Major and Critical deviations.
*   **Personnel:** Training records, qualification status.
*   **Equipment:** Calibration logs for HPLC (Agilent 1290 Infinity II), Chamber (Thermo Fisher Forma).
*   **Method:** Validation status of the SE-HPLC method for aggregate detection.
*   **Material:** Batch records for Glucogen-XR (e.g., GLUC-2025-001 through GLUC-2025-015).

---

#### **5.0 REPRESENTATIVE DEVIATION LOG: GLUCOGEN-XR (CY 2025)**

The following table summarizes deviations recorded during the Long-Term ($5^{\circ}C$) and Accelerated ($25^{\circ}C/60\% RH$) studies for the Clinical Trial Material (CTM) batches.

| Deviation ID | Batch Number | Study Condition | Date of Occurrence | Description of Deviation | Category | Disposition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DR-25-001** | GLUC-2025-001 | $5^{\circ}C \pm 3^{\circ}C$ | 12-JAN-2025 | Power failure to Chamber GHS-C1. Temp rose to $12^{\circ}C$ for 4 hours. | Minor | MKT calculated at $5.4^{\circ}C$. No impact. |
| **DR-25-004** | GLUC-2025-003 | $25^{\circ}C/60\% RH$ | 05-FEB-2025 | Sample pulled 5 days past the 6-month window (Protocol allows $\pm$ 2 days). | Major | Data trended; no statistical shift. Time point accepted. |
| **DR-25-012** | GLUC-2025-008 | $40^{\circ}C/75\% RH$ | 18-MAR-2025 | HPLC Column (SEC-3) failed resolution criteria during T=3 test. | Major | Re-test performed on backup column. Invalidated first run. |
| **DR-25-019** | GLUC-2025-012 | $5^{\circ}C \pm 3^{\circ}C$ | 22-MAY-2025 | Humidity sensor failed. No humidity control for 48 hours. | Minor | $5^{\circ}C$ storage is not humidity-dependent (sealed vials). |

---

#### **6.0 HANDLING OF OUT-OF-SPECIFICATION (OOS) RESULTS**
If a stability test result for Glucogen-XR (e.g., Purity by RP-HPLC $< 95.0\%$) falls outside the approved specification limits, the procedure defined in **SOP-GHS-QA-022 (OOS Investigations)** is triggered.

##### **6.1 Step-by-Step OOS Stability Protocol**
1.  **Phase Ia:** Laboratory Investigation (Check for "Obvious Error").
    *   Review integration of chromatograms.
    *   Verify dilutions of Glucapeptide standards.
    *   Check for pipette calibration (ID: GHS-PIP-5542).
2.  **Phase Ib:** Confirmation Testing.
    *   If no error is found, perform re-testing in triplicate by a second analyst.
3.  **Phase II:** Full Scale Investigation.
    *   Evaluate other batches in the same chamber.
    *   Perform Biophysical Characterization (Circular Dichroism, DSC) to check for peptide misfolding.
4.  **Reporting:** Notify the FDA Project Manager within 15 working days if the OOS is confirmed and impacts the shelf-life or safety of the product.

---

#### **7.0 ENVIRONMENTAL MONITORING AND ALARM LIMITS**
Stability chambers at the South San Francisco site are monitored by the **G-Life Cloud Monitoring System**.

| Chamber Type | Parameter | Set Point | Alert Limit | Action Limit |
| :--- | :--- | :--- | :--- | :--- |
| **Refrigerated** | Temperature | $5.0^{\circ}C$ | $\pm 2.0^{\circ}C$ | $\pm 3.0^{\circ}C$ |
| **Accelerated** | Temperature | $25.0^{\circ}C$ | $\pm 1.5^{\circ}C$ | $\pm 2.0^{\circ}C$ |
| **Accelerated** | Humidity | $60\% RH$ | $\pm 3\% RH$ | $\pm 5\% RH$ |

**Alarm Response Protocol:**
1.  **Immediate Notification:** SMS and Email alert to Stability Manager and On-call Engineer.
2.  **Redundancy:** If the Action Limit is exceeded for $> 30$ minutes, samples are automatically prioritized for transfer to Chamber **GHS-SAFE-STORAGE-01**.

---

#### **8.0 STATISTICAL ANALYSIS OF DEVIATION IMPACT**
For Major deviations involving temperature, GHS utilizes a **Least Squares Linear Regression** model to determine if the rate of degradation ($k$) was significantly altered.

**Arrhenius Equation for Rate Prediction:**
$$k = A e^{-E_a / RT}$$

The stability team compares the predicted purity at $T_{observed}$ vs. $T_{target}$. If the difference in predicted purity at the end of the 24-month shelf life is $< 0.5\%$, the deviation is deemed "Non-Critical to Product Quality."

---

#### **9.0 QUALITY ASSURANCE REVIEW AND APPROVAL**
All deviations recorded in this stability study are reviewed quarterly by the **Stability Quality Council (SQC)**. The final assessment of the cumulative impact of all deviations is documented in the *Annual Stability Report (ASR)* and submitted to the FDA as part of the Post-Marketing Commitment (PMC).

---

**Footnotes & References:**
[^1]: Google Health Sciences Internal SOP-STAB-005: "Management of Stability Excursions."
[^2]: ICH Q1B: "Photostability Testing of New Drug Substances and Products."
[^3]: Batch GLUC-2025-005 was subjected to a simulated excursion study to validate the MKT thresholds.

---

## Technology Transfer Considerations

# **MODULE 3: QUALITY**
## **3.2.S DRUG SUBSTANCE**
### **3.2.S.7 STABILITY**
#### **3.2.S.7.1 STABILITY SUMMARY AND CONCLUSIONS (STABILITY STUDY MASTER PLAN)**

---

### **SUBSECTION: TECHNOLOGY TRANSFER CONSIDERATIONS (STABILITY STUDIES)**

---

#### **1.0 SCOPE AND OBJECTIVE**

The purpose of this subsection within the **Stability Study Master Plan (SSMP)** for **Glucogen-XR (glucapeptide extended-release)** is to delineate the comprehensive strategy for the transfer of stability testing methodologies, protocols, and data integrity standards between the Sending Unit (SU) at Google Health Sciences (GHS) R&D facilities and the Receiving Unit (RU) at the Commercial Manufacturing Facility (3000 Innovation Drive, South San Francisco, CA).

This Technology Transfer (TT) protocol ensures that the stability profile established during clinical development (Phase I/II/III) remains consistent and valid throughout the commercial lifecycle. This document adheres strictly to **ICH Q10 (Pharmaceutical Quality System)**, **ICH Q1A(R2)**, and **FDA Guidance for Industry: Technology Transfer (2011)**.

#### **2.0 ROLES AND RESPONSIBILITIES**

| Role | Department | Responsibilities |
| :--- | :--- | :--- |
| **Sending Unit (SU)** | GHS R&D Analytics | Method development, initial stability data (GLUC-2023-001 through 012), drafting of transfer protocols. |
| **Receiving Unit (RU)** | GHS Quality Control (QC) | Execution of comparative testing, equipment qualification (IQ/OQ/PQ), stability chamber management. |
| **Tech Transfer Lead** | Regulatory Affairs | Oversight of ICH compliance and submission of 3.2.S.7 updates to the FDA. |
| **Data Integrity Officer** | IT/Quality Assurance | Validation of LIMS (Laboratory Information Management System) and Cloud-based data sync. |

#### **3.0 CRITICAL QUALITY ATTRIBUTES (CQAs) FOR STABILITY TRANSFER**

The Glucogen-XR peptide is a high-molecular-weight glucapeptide derivative expressed in the **GHS-CHO-001** cell line. Due to its extended-release nature, the stability profile is sensitive to temperature-induced aggregation and deamidation.

##### **3.1 Primary Stability Indicators**
The following parameters must demonstrate equivalence during the transfer process:

1.  **Purity by RP-HPLC:** Detection of $Des-His^{1}$ and $Glu^{9}$ degradants.
2.  **Purity by SE-UHPLC:** Detection of high-molecular-weight species (HMWS) / Aggregates.
3.  **Charge Heterogeneity (icIEF):** Assessment of acidic and basic variants.
4.  **Biological Potency (Cell-based Bioassay):** $EC_{50}$ determination using GLP-1R expressing HEK293 cells.
5.  **Particulate Matter (USP <788>):** Sub-visible particle counts.

#### **4.0 EQUIPMENT EQUIVALENCY AND QUALIFICATION (EEQ)**

To ensure zero-drift in stability data, the RU must utilize instrumentation that meets or exceeds the specifications of the SU.

##### **Table 4.1: Analytical Equipment Comparison**

| Instrument Type | SU Specification (R&D) | RU Specification (Commercial) | Qualification Status |
| :--- | :--- | :--- | :--- |
| **UHPLC System** | Agilent 1290 Infinity II | Waters ACQUITY UPLC H-Class | Equivalent (USP <621>) |
| **icIEF** | ProteinSimple iCE3 | ProteinSimple Maurice | Equivalent |
| **Mass Spec (LC-MS)** | Orbitrap Exploris 480 | Q Exactive Plus | Qualified |
| **Stability Chambers** | Caron 7000 Series | Environmental Specialties (Walk-in) | IQ/OQ/PQ Complete |

---

#### **5.0 ANALYTICAL METHOD TRANSFER (AMT) PROTOCOL**

The transfer of stability-indicating methods follows a **Comparative Testing Strategy**. Three (3) batches of Glucogen-XR Drug Substance (DS) will be tested in parallel at both the SU and RU.

##### **5.1 Acceptance Criteria for Transfer**
Statistical equivalence is determined using the Two One-Sided Test (TOST) approach.

*   **Purity (RP-HPLC):** The 90% Confidence Interval (CI) of the difference in means must fall within $\pm$ 0.5%.
*   **Potency ($EC_{50}$):** The ratio of RU/SU results must be within 0.80 to 1.25.
*   **Precision:** %RSD for $n=6$ injections at RU must be $\le 2.0\%$.

##### **Table 5.2: Method Transfer Data (Batch GLUC-2025-001)**

| Parameter | SU Result (Mean, n=6) | RU Result (Mean, n=6) | Difference | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| **Main Peak (%)** | 98.42% | 98.38% | -0.04% | **Pass** |
| **Aggregates (%)** | 0.12% | 0.14% | +0.02% | **Pass** |
| **Deamidation (%)** | 0.85% | 0.89% | +0.04% | **Pass** |
| **Potency (IU/mg)** | 102.1 | 101.8 | -0.3 | **Pass** |

---

#### **6.0 STABILITY CHAMBER MAPPING AND CLOUD MONITORING**

Google Health Sciences utilizes a proprietary cloud-based monitoring system (**GHS-Cloud-Log**) for real-time stability monitoring.

##### **6.1 Chamber Validation Protocol (USP <1079>)**
1.  **Empty Chamber Mapping:** 24 sensors placed at periphery and center for 24 hours.
2.  **Loaded Chamber Mapping:** Representative placebo vials used to simulate thermal mass.
3.  **Door Open Challenge:** Assessment of recovery time to set point (must be $< 15$ minutes).
4.  **Power Failure Test:** Assessment of temperature drift during a 4-hour simulated outage.

##### **Table 6.2: Stability Storage Conditions**

| Condition | Temperature | Relative Humidity | Sampling Intervals (Months) |
| :--- | :--- | :--- | :--- |
| **Long Term** | $5^\circ C \pm 3^\circ C$ | N/A (Ambient) | 0, 3, 6, 9, 12, 18, 24, 36 |
| **Accelerated** | $25^\circ C \pm 2^\circ C$ | $60\% \pm 5\% RH$ | 0, 1, 3, 6 |
| **Stressed** | $40^\circ C \pm 2^\circ C$ | $75\% \pm 5\% RH$ | 0, 0.5, 1 |

---

#### **7.0 BATCH SELECTION FOR POST-TRANSFER STABILITY COMMITMENT**

In accordance with **ICH Q1B**, the first three commercial batches manufactured at the 3000 Innovation Drive facility will be placed on the Long-Term Stability Program.

##### **Table 7.1: Planned Stability Batches**

| Batch Number | Scale | Date of Manufacture | Purpose |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L | Q1 2025 | Validation Batch 1 / Stability |
| **GLUC-2025-002** | 2,000L | Q1 2025 | Validation Batch 2 / Stability |
| **GLUC-2025-003** | 2,000L | Q2 2025 | Validation Batch 3 / Stability |

---

#### **8.0 STATISTICAL ANALYSIS AND SHELF-LIFE PROJECTION**

The shelf-life ($\text{t}_{95}$) will be calculated using a linear regression model of the stability-limiting CQA (typically SE-UHPLC Aggregates).

**Formula for Rate of Degradation:**
$$k = \frac{\sum (t_i - \bar{t})(C_i - \bar{C})}{\sum (t_i - \bar{t})^2}$$

Where:
*   $k$ = Degradation rate constant
*   $t_i$ = Time point
*   $C_i$ = Concentration/Purity at time $t$

The lower 95% confidence limit for the mean degradation line must intersect the specification limit (95.0%) at a time $\ge 24$ months.

---

#### **9.0 CONTINGENCY AND DEVIATION MANAGEMENT**

During technology transfer, any "Out of Specification" (OOS) or "Out of Trend" (OOT) result triggers an immediate investigation per **GHS-SOP-QC-009**.

1.  **Phase I:** Laboratory Investigation (Retest/Resample).
2.  **Phase II:** Manufacturing Investigation (Root cause analysis using Ishikawa diagrams).
3.  **Impact Assessment:** Evaluation of the transfer's validity and potential impact on the IND/BLA filing.

---

#### **10.0 REFERENCES**

1.  **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
2.  **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
3.  **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
4.  **USP <1224>:** Transfer of Analytical Procedures.
5.  **GHS Internal SOP-554:** Analytical Method Transfer for Peptides.

---

**[END OF SECTION 3.2.S.7.1 - TECHNOLOGY TRANSFER CONSIDERATIONS]**

---

