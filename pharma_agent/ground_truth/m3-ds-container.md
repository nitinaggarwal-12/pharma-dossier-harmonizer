# Drug Substance - Container Closure System

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 23:00:00

---

# Container Closure System Description

## Container Type and Material

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.1: CONTAINER TYPE AND MATERIAL

---

#### 3.2.S.6.1.1 Overview and Regulatory Compliance Strategy

Google Health Sciences (GHS), a division of Google Cloud Life Sciences, has implemented a robust, science-based selection process for the primary and secondary container closure systems (CCS) for Glucogen-XR (glucapeptide extended-release) drug substance (DS). The selection of materials is predicated on ensuring the long-term stability, potency, and safety of the GLP-1 receptor agonist, maintaining a closed system to prevent microbial ingress, and mitigating risks associated with extractables and leachables (E&L).

The primary container closure system for Glucogen-XR Drug Substance consists of a high-density polyethylene (HDPE) carboy system or a multi-layered fluoropolymer-lined bioprocess bag system, depending on the scale of the batch (Standard Batch Size: 2,000L bioreactor output).

This document provides exhaustive technical specifications, material safety data, validation protocols, and compliance certifications for all components in contact with the drug substance, in accordance with:
*   **USP <661.1>** Plastic Materials of Construction
*   **USP <661.2>** Plastic Packaging Systems for Pharmaceutical Use
*   **USP <87>** Biological Reactivity Test, In Vitro
*   **USP <88>** Biological Reactivity Test, In Vivo (Class VI Plastics)
*   **ICH Q5E** Comparability of Biotechnological/Biological Products
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (May 1999)

---

#### 3.2.S.6.1.2 Detailed Component Specifications: Primary Contact Materials

The Glucogen-XR Drug Substance is stored in specialized **GHS-BIO-FLEX-50** units. These are 50-liter medical-grade, single-use, gamma-irradiated fluoropolymer bags designed for cryogenic and sub-zero storage (-70°C to -80°C).

##### Table 1: Detailed Specifications for Primary Container (GHS-BIO-FLEX-50)

| Parameter | Specification | Testing Method | Reference Standard |
| :--- | :--- | :--- | :--- |
| **Material Composition** | Multi-layer Co-extruded Film (LDPE/EVOH/Fluoropolymer) | FTIR Spectroscopy | USP <661.1> |
| **Fluid Contact Layer** | Fluoropolymer (FEP/PFA Blend) | GC-MS / LC-MS | Internal SOP-442 |
| **Nominal Capacity** | 50.0 Liters | Volumetric Gravimetric | ISO 11607 |
| **Working Volume** | 10.0 L to 45.0 L | Calibrated Load Cell | GHS-ENG-SPEC-09 |
| **Thickness (Total)** | 325 µm ± 15 µm | Micrometer Caliper | ASTM D374 |
| **Tensile Strength** | > 25 MPa | Tensile Tester | ASTM D882 |
| **Water Vapor Transmission** | < 0.01 g/m²/24h | Permeation Analysis | ASTM F1249 |
| **Oxygen Permeability** | < 0.05 cc/m²/24h/atm | Coulometric Sensor | ASTM D3985 |
| **Sterility Assurance Level** | 10⁻⁶ | Gamma Irradiation | ISO 11137 |
| **Endotoxin Level** | < 0.25 EU/mL | LAL Kinetic Chromogenic | USP <85> |

##### 3.2.S.6.1.2.1 Tubing and Connector Assembly
The assembly utilizes platinum-cured silicone tubing and polycarbonate connectors to ensure an inert fluid path during the fill-finish and transfer operations.

**Table 2: Tubing and Accessory Specifications**
*   **Tubing:** AdvantaPure® Platinum-Cured Silicone (Reference: GHS-SIL-2025-01)
*   **Connectors:** Colder Products Company (CPC) AseptiQuik® S Sterile Connectors
*   **Clamps:** Nylon Pinch Clamps (Gamma-stable)

---

#### 3.2.S.6.1.3 Extractables and Leachables (E&L) Assessment

GHS conducted an exhaustive E&L study for Glucogen-XR. Given the peptide nature of the drug substance and the presence of non-ionic surfactants in the formulation (Polysorbate 80), the risk of leaching is categorized as "Moderate" per FDA risk matrices.

##### 3.2.S.6.1.3.1 Extraction Study Protocol
Extractions were performed using three model solvents:
1.  **WFI (Water for Injection)**
2.  **50% Ethanol / 50% WFI** (to simulate organic solubility)
3.  **Glucogen-XR Placebo Buffer** (Phosphate buffer, pH 7.4, with Polysorbate 80)

**Analytical Techniques Employed:**
*   **HS-GC-MS:** For volatile organic compounds (VOCs).
*   **GC-MS:** For semi-volatile organic compounds (SVOCs).
*   **LC-HRMS (Orbitrap):** For non-volatile organic compounds (NVOCs).
*   **ICP-MS:** For elemental impurities (As, Cd, Hg, Pb, etc., per ICH Q3D).

##### Table 3: Summary of Extractables Data (Batch: GLUC-2025-EXT-01)

| Analyte Class | Compound Identified | Concentration (µg/cm²) | Safety Threshold (AET) | Result |
| :--- | :--- | :--- | :--- | :--- |
| **VOC** | Acetone | 0.04 | 1.5 | Compliant |
| **SVOC** | BHT (Butylated hydroxytoluene) | 0.12 | 0.5 | Compliant |
| **NVOC** | Irganox 1010 | 0.08 | 0.5 | Compliant |
| **Elemental** | Aluminum (Al) | < 0.01 | 0.2 | Compliant |
| **Elemental** | Silicon (Si) | 0.05 | 5.0 | Compliant |

---

#### 3.2.S.6.1.4 Secondary Packaging and Protective Systems

To ensure the integrity of the frozen drug substance during transit from the South San Francisco manufacturing site (3000 Innovation Drive) to various fill-finish facilities, a secondary containment system is utilized.

1.  **Protective Outer Shell:** Stainless Steel 316L secondary canister for 50L bags.
2.  **Thermal Insulation:** Vacuum-insulated panels (VIP) within the "GHS-COLD-CHAIN-MAX" shipping system.
3.  **Monitoring:** Real-time IoT temperature logging (Google Cloud Integrated Sensors) recording internal temperatures at 1-minute intervals.

---

#### 3.2.S.6.1.5 Verification of Material Performance (Batch Specific Data)

The following table summarizes the Certificate of Analysis (CoA) verification for three recent batches of container closure components used in the production of Glucogen-XR DS.

##### Table 4: Component Verification Results (Batches GLUC-2025-001 through 003)

| Component Batch ID | Supplier Lot Number | Bio-Reactivity (USP <88>) | Particulate Matter (USP <788>) | Result |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-C01** | B-77821-X | Pass (Class VI) | < 10 particles/mL ≥ 10µm | Conforms |
| **GLUC-2025-C02** | B-79012-Y | Pass (Class VI) | < 10 particles/mL ≥ 10µm | Conforms |
| **GLUC-2025-C03** | B-80114-Z | Pass (Class VI) | < 10 particles/mL ≥ 10µm | Conforms |

---

#### 3.2.S.6.1.6 Standard Operating Procedure (SOP) for Container Preparation and Filling

**SOP ID: GHS-PROD-DS-774**
**Title: Aseptic Filling of Glucogen-XR Drug Substance into GHS-BIO-FLEX-50 Units**

1.  **Prerequisite Check:** Verify the Gamma Irradiation Certificate (Minimum dose 25 kGy) for the specific bag lot.
2.  **Inspection:** Perform visual inspection of the primary bag for punctures or weld irregularities under 1000 lux lighting.
3.  **Integrity Test (Pre-use):** Perform a pressure decay test at 50 mbar for 180 seconds using the GHS-INTEG-AUTO tester.
4.  **Aseptic Connection:** Using the Colder AseptiQuik® connector, mate the DS transfer line to the bag inlet in a Grade A laminar airflow environment.
5.  **Filling:** Initiate peristaltic pump (Watson-Marlow 600 series) at a flow rate not exceeding 5.0 L/min to prevent shear stress on the glucapeptide.
6.  **Sampling:** Utilize the integrated needleless sampling port to extract 50 mL for QC release testing.
7.  **Sealing:** Double-weld the silicone inlet tubing using a thermal sealer (Model GHS-SEAL-V3).
8.  **Labeling:** Affix cryo-resistant labels containing: Batch Number, Date of Manufacture, Volume, and "Store at -80°C."

---

#### 3.2.S.6.1.7 Calculations and Statistical Analysis of Barrier Properties

To determine the shelf-life impact of moisture permeation, the following calculation was performed for Glucogen-XR DS stored at -80°C for a projected 24-month period:

**Formula for Water Vapor Transmission Rate (WVTR) Loss:**
$$W_{loss} = WVTR \times Surface Area \times Time$$

*   $WVTR$ = $0.01 \, \text{g/m}^2/\text{day}$
*   $Surface Area$ = $0.85 \, \text{m}^2$ (for 50L bag)
*   $Time$ = $730 \, \text{days}$

$$W_{loss} = 0.01 \times 0.85 \times 730 = 6.205 \, \text{grams}$$

Given a fill weight of 45,000g (45L), a loss of 6.2g represents a negligible **0.013% change in concentration**, which is well within the acceptable drift limit of ±2.0% defined in the Glucogen-XR DS specification.

---

#### 3.2.S.6.1.8 Conclusion on Container Suitability

The container closure system for Glucogen-XR Drug Substance has been rigorously qualified. The use of fluoropolymer contact layers ensures minimal peptide adsorption (measured at < 0.5% via Bradford Assay), while the HDPE and stainless steel secondary layers provide mechanical robustness for global distribution. All components meet or exceed the requirements set forth by the US FDA and ICH for the storage of high-value biologic therapeutics.

---
*End of Subsection 3.2.S.6.1*

---

## Closure Components

### 3.2.S.6 Container Closure System (Glucogen-XR Drug Substance)
#### 3.2.S.6.1 Closure Components: Technical Specification and Qualification

The primary container closure system for Glucogen-XR (glucapeptide extended-release) drug substance (DS) has been engineered to maintain the physicochemical stability, biological potency, and sterility of the polypeptide throughout its defined shelf-life. Given the high-concentration nature of the Glucogen-XR bulk drug substance and its sensitivity to oxidative stress and surface-mediated denaturation, the closure components have been selected based on exhaustive extractable/leachable (E&L) profiles and gas permeability kinetics.

---

### I. Detailed Component Identification and Material Science

The Glucogen-XR drug substance is stored in high-density polyethylene (HDPE) carboys (20L and 50L configurations) or stainless steel cryogenic vessels for long-term storage at -70°C. The closure system described herein refers to the multi-component sealing assembly used for the 20L Primary Storage Vessel (PSV).

#### 1.1 Stopper/Seal Configuration (GHS-CS-2025-01)
The primary seal consists of a customized Fluoropolymer-coated Bromobutyl Elastomer Plug.
*   **Manufacturer:** West Pharmaceutical Services (Contracted Specification)
*   **Material:** 4432/45 Gray Bromobutyl
*   **Coating:** FluroTec® (ETFE) film applied to the drug-contact surface and the flange to minimize protein adsorption and sub-visible particulate (SVP) generation.
*   **Reference Standard:** USP <381> Elastomeric Components in Injections; ISO 8871.

#### 1.2 Table 1: Physical and Chemical Specifications of the Primary Closure
| Parameter | Specification | Test Method | Batch Reference (Example) |
| :--- | :--- | :--- | :--- |
| **Material ID** | Bromobutyl 4432/45 | FTIR Spectroscopy | GLUC-2025-MAT-001 |
| **Durometer Hardness** | 45 ± 5 Shore A | ASTM D2240 | GLUC-2025-MAT-002 |
| **Specific Gravity** | 1.15 ± 0.03 g/cm³ | USP <661> | GLUC-2025-MAT-003 |
| **Extractable Zinc** | ≤ 10 ppm | ICP-MS (Internal SOP-09) | GLUC-2025-MAT-004 |
| **Water Vapor Permeability** | < 0.05 g/m²/24h | ASTM E96 | GLUC-2025-MAT-005 |
| **Residual Ethylene Oxide** | < 0.1 µg/g | GC-FID (ISO 10993-7) | GLUC-2025-MAT-006 |

---

### II. Manufacturing and Sterilization Protocols

The closure components undergo a validated "Ready-to-Use" (RtU) processing cycle at the Google Health Sciences (GHS) South San Francisco facility (Facility ID: 3000-Innovation-SSF).

#### 2.1 Component Preparation Protocol (SOP-DS-662)
1.  **Initial Inspection:** Verification of Certificate of Analysis (CoA) from the elastomer vendor.
2.  **Ultrasonic Cleaning:** Components are submerged in 18MΩ.cm Water for Injection (WFI) and subjected to 40kHz ultrasonic cavitation for 15 minutes to remove exogenous silicone oil and particulates.
3.  **Detergent Wash:** Use of 0.5% v/v Low-Foam Acidic Detergent (CIP-200) followed by a 1.0% v/v Alkaline wash (CIP-100).
4.  **Final Rinse:** Continuous flow WFI rinse until conductivity is < 1.3 µS/cm at 25°C per USP <645>.

#### 2.2 Table 2: Sterilization Validation Data (Batch: GLUC-2025-STER-09)
The closures are sterilized via Gamma Irradiation to ensure a Sterility Assurance Level (SAL) of $10^{-6}$.

| Parameter | Targeted Range | Actual (GLUC-2025-011) | Result |
| :--- | :--- | :--- | :--- |
| **Minimum Dose (kGy)** | 25.0 kGy | 27.4 kGy | Pass |
| **Maximum Dose (kGy)** | 45.0 kGy | 41.2 kGy | Pass |
| **Bioburden (Pre-Steril)** | < 100 CFU/10 units | 12 CFU/10 units | Pass |
| **Bacterial Endotoxin** | < 0.25 EU/mL | < 0.05 EU/mL | Pass |

---

### III. Extractables and Leachables (E&L) Comprehensive Analysis

A rigorous E&L study was conducted in accordance with PQRI (Product Quality Research Institute) recommendations and USP <1663>/<1664>.

#### 3.1 Extraction Methodology
Extraction solvents included:
1.  **WFI (pH 5.5)** - Simulating bulk aqueous environment.
2.  **Phosphate Buffer (pH 8.0)** - Simulating Glucogen-XR formulation matrix.
3.  **20% Ethanol/Water** - Simulating organic-aqueous interactions.

#### 3.2 Table 3: Identified Extractables and Safety Thresholds
| Analyte Class | Identified Compound | Concentration (µg/vessel) | AET (Analytical Evaluation Threshold) | Safety Result |
| :--- | :--- | :--- | :--- | :--- |
| **Antioxidant** | Irganox 1010 | 0.12 | 0.50 | Below Risk |
| **Plasticizer** | BHT | 0.04 | 0.50 | Below Risk |
| **Oligomer** | PE-Oligomers (C10-C24) | 0.88 | 1.00 | Acceptable |
| **Metal Ions** | Aluminum (Al) | 0.005 | 0.10 | Acceptable |

---

### IV. Functional Integrity and Barrier Performance

The Glucogen-XR peptide is susceptible to oxidation at the Methionine residues (Met-14 and Met-27). Consequently, the closure must provide an absolute oxygen barrier.

#### 4.1 Oxygen Transmission Rate (OTR) Calculation
The OTR for the closure assembly was calculated using the following differential pressure formula:
$$OTR = \frac{V \cdot \Delta P}{R \cdot T \cdot A \cdot \Delta t}$$
Where:
*   $V$ = Headspace volume (250 mL)
*   $\Delta P$ = Change in partial pressure of $O_2$
*   $R$ = Gas constant ($0.0821 \text{ L}\cdot\text{atm/K}\cdot\text{mol}$)
*   $T$ = Storage Temperature (203 K / -70°C)
*   $A$ = Surface area of the seal ($12.5 \text{ cm}^2$)

**Result:** The calculated OTR for the GLUC-2025 series closure is $< 0.001 \text{ cc/pkg/day}$ at storage conditions, ensuring that the dissolved oxygen levels in the Glucogen-XR drug substance remain below $0.5 \text{ ppm}$ over a 36-month period.

#### 4.2 Container Closure Integrity Testing (CCIT)
GHS utilizes High Voltage Leak Detection (HVLD) and Helium Leak Rate testing for DS vessels.
*   **Validation Limit:** $1.0 \times 10^{-7} \text{ mbar}\cdot\text{L/s}$
*   **Observed Leak Rate (GLUC-2025-VAL):** $4.2 \times 10^{-9} \text{ mbar}\cdot\text{L/s}$

---

### V. Stability Data for Closure Components

Extended contact studies (36 months) between the Glucogen-XR DS and the FluroTec® coated stoppers have shown no evidence of:
1.  **Delamination:** No ETFE particles detected via Micro-Flow Imaging (MFI).
2.  **Adsorption:** Recovery of Glucogen-XR peptide remains at $100.2\% \pm 0.4\%$, indicating negligible binding to the closure surface.
3.  **pH Drift:** Formulation pH remained constant at $7.4 \pm 0.1$, confirming no leaching of acidic or basic vulcanization by-products.

#### 5.1 Table 4: Long-term Leachable Monitoring (Batch GLUC-2025-DS-101)
| Time Point | Storage Temp | Leachable Profile | Particulate Matter (USP <788>) |
| :--- | :--- | :--- | :--- |
| **T=0** | -70°C | ND | 12 particles/mL (≥10µm) |
| **T=12mo** | -70°C | ND | 15 particles/mL (≥10µm) |
| **T=24mo** | -70°C | ND | 14 particles/mL (≥10µm) |
| **T=36mo** | -70°C | Trace (<AET) | 18 particles/mL (≥10µm) |

*ND: Not Detected; AET: Analytical Evaluation Threshold.*

---

### VI. Conclusion
The closure components for Glucogen-XR drug substance, specifically the ETFE-coated bromobutyl elastomers processed via the GHS-DS-662 protocol, provide a robust, inert, and high-integrity barrier. These components meet all criteria defined in ICH Q5C (Quality of Biotechnological Products: Stability Testing) and USP <1207> (Package Integrity Evaluation). The use of the GLUC-2025-XXX standardized batching ensures traceability and consistency across the commercial lifecycle of the product.

---

## Supplier Information

### 3.2.S.6 CONTAINER CLOSURE SYSTEM (GLUCOGEN-XR)
#### 3.2.S.6.1 Supplier Information and Qualification Matrix

This subsection provides a comprehensive overview of the primary and secondary packaging component suppliers for **Glucogen-XR (glucapeptide extended-release)**. In accordance with **ICH Q8(R2)** (Pharmaceutical Development) and **ICH Q10** (Pharmaceutical Quality System), Google Health Sciences (GHS) maintains a robust Supplier Quality Management System (SQMS) to ensure that all materials contacting the drug substance meet predefined specifications for identity, strength, quality, and purity.

---

### 1.0 SCOPE AND REGULATORY ALIGNMENT

The supplier qualification and information strategy for Glucogen-XR align with the following regulatory frameworks:
*   **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics (May 1999)*.
*   **USP <1663>:** *Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <1664>:** *Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <381>:** *Elastomeric Components in Injection*.
*   **USP <660>:** *Containers — Glass*.
*   **ISO 15378:** *Primary packaging materials for medicinal products — Particular requirements for the application of ISO 9001:2015, with reference to Good Manufacturing Practice (GMP)*.

---

### 2.0 PRIMARY SUPPLIER REGISTRY

The following table (Table 2.0-1) details the approved suppliers for the primary container closure system (CCS) components used for the Glucogen-XR drug substance (DS) and intermediate storage.

#### Table 2.0-1: Primary Container Closure Supplier Matrix
| Component ID | Component Description | Manufacturer Name | Manufacturing Site Address | DMF Number |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-CCS-001** | Type I Borosilicate Glass Vial (20 mL) | Schott Pharma USA, Inc. | 40 Montvale Ave, Stoneham, MA 02180 | DMF #012345 |
| **GHS-CCS-002** | 20mm FluroTec® Coated Bromobutyl Stopper | West Pharmaceutical Services | 530 Herman O. West Drive, Exton, PA 19341 | DMF #009876 |
| **GHS-CCS-003** | 20mm Flip-Off® Aluminum Seal | West Pharmaceutical Services | 101 Gordon Drive, Lionville, PA 19341 | DMF #011223 |
| **GHS-CCS-004** | High-Density Polyethylene (HDPE) Storage Bottles (1L) | Thermo Fisher Scientific | 75 Panorama Creek Dr, Rochester, NY 14625 | DMF #005544 |
| **GHS-CCS-005** | Platinum-Cured Silicone Tubing (Transfer) | AdvantaPure (NewAge Industries) | 145 James Way, Southampton, PA 18966 | DMF #018900 |

---

### 3.0 SUPPLIER QUALIFICATION PROTOCOL (GHS-SOP-QA-0098)

Google Health Sciences employs a multi-tiered qualification process for all suppliers of primary packaging. No batch of Glucogen-XR (e.g., **GLUC-2025-001** through **GLUC-2025-999**) is released unless the CCS components are sourced from a "Qualified" or "Preferred" vendor status.

#### 3.1 Step-by-Step Qualification Procedure

**Phase I: Initial Risk Assessment and Desktop Audit**
1.  **Vendor Identification:** Sourcing department identifies potential suppliers based on technical capability to provide low-extractable, high-purity glass and elastomers.
2.  **Quality Questionnaire:** Supplier completes a 150-point GHS Quality Questionnaire (Form Q-102) covering ISO certifications, cleanroom classifications (ISO 5/7/8), and change control procedures.
3.  **Regulatory Review:** GHS Regulatory Affairs verifies the existence and "Active" status of Type III Drug Master Files (DMF) with the FDA.

**Phase II: On-Site Technical Audit**
1.  **Scope:** Evaluation of production lines, water systems (WFI/PW), environmental monitoring (EM) data, and deviation management.
2.  **Personnel:** Audit team consists of one Lead Auditor (CQA) and one Subject Matter Expert (SME) from Packaging Engineering.
3.  **Verification:** Inspection of batch records for representative lots (e.g., equivalent to **GLUC-2025-REF-01**).

**Phase III: Analytical Testing and Verification (The "Three-Lot" Rule)**
1.  **Sampling:** Three non-consecutive lots of the component are procured.
2.  **USP Testing:** Components are subjected to full compendial testing (USP <660>, <381>, <87>, <88>).
3.  **Extractable Profile Mapping:** GHS Analytical Sciences performs Headspace GC-MS, LC-UV-MS, and ICP-MS on component extracts to establish a baseline chemical fingerprint.

---

### 4.0 DETAILED SUPPLIER SPECIFICATIONS AND COA PARAMETERS

#### 4.1 Glass Container Supplier (Schott Pharma) - GHS-CCS-001
The Type I Borosilicate glass is critical for preventing "delamination" and minimizing alkali release that could destabilize the Glucogen-XR peptide.

**Table 4.1-1: Critical Quality Attributes (CQAs) for Glass Vials**
| Parameter | Specification Limit | Test Method | Typical Result (Batch GLUC-2025-S01) |
| :--- | :--- | :--- | :--- |
| **Hydrolytic Resistance** | $\leq 1.0$ mL 0.01N HCl / 100g glass | USP <660> | 0.45 mL |
| **Arsenic Content** | $\leq 0.1$ ppm | USP <660> | < 0.01 ppm |
| **Dimensional: Height** | $58.0 \pm 0.5$ mm | Caliper (GHS-ME-01) | 58.02 mm |
| **Dimensional: Neck ID** | $13.0 \pm 0.2$ mm | Go/No-Go Gauge | 13.05 mm |
| **Visual Defects** | AQL 0.065 (Critical) | Manual/Auto Vision | Pass |

#### 4.2 Elastomeric Closure Supplier (West Pharma) - GHS-CCS-002
The FluroTec® coating (ETFE film) is mandated to provide a barrier between the bromobutyl rubber and the Glucogen-XR formulation, reducing the adsorption of the GLP-1 receptor agonist to the stopper surface.

**Table 4.2-1: Physicochemical Specifications for Stoppers**
| Test Description | Requirement | Method Reference |
| :--- | :--- | :--- |
| **Identification** | Matches Infrared (IR) Spectrum | USP <381> / GHS-AN-55 |
| **Extractable Zinc** | $\leq 5 \mu g/mL$ | ICP-OES |
| **Ammonium** | $\leq 2 \mu g/mL$ | Colorimetric |
| **Volatile Sulfides** | No blackening of Lead Acetate paper | USP <381> |
| **Penetration Force** | $\leq 10$ N | Texture Analyzer |
| **Fragmentation** | $\leq 5$ particles per 12 punctures | USP <381> |

---

### 5.0 EXTRACTABLES DATA AND SUPPLIER COMPARISON

GHS has performed an exhaustive Extractables study on components provided by primary and secondary suppliers to ensure consistency across the Glucogen-XR lifecycle.

#### Table 5.0-1: Comparative Extractable Profile (Calculated in $\mu g/unit$)
*Note: Data derived from 72-hour extraction in 50% Ethanol/Water at 40°C.*

| Analyte Type | Supplier A (Primary) | Supplier B (Secondary) | Safety Threshold (SCT) |
| :--- | :--- | :--- | :--- |
| **Antioxidants (BHT)** | 0.12 | 0.15 | 1.50 |
| **Plasticizers (DEHP)** | ND (< 0.01) | 0.02 | 1.50 |
| **Silicone Oil** | 4.5 | 5.2 | N/A (Functional) |
| **Cyclic Siloxanes** | 0.08 | 0.11 | 0.50 |
| **Aluminum (Leachable)** | 0.005 | 0.007 | 5.00 |

---

### 6.0 SUPPLY CHAIN RISK MANAGEMENT AND CONTINUITY

Google Health Sciences employs a "Cloud-Integrated Supply Chain" (CISC) monitoring system to track supplier performance in real-time.

#### 6.1 Criticality Ranking
Each supplier is assigned a Risk Priority Number (RPN) based on:
$$RPN = S \times O \times D$$
Where:
*   **S (Severity):** Impact of component failure on Glucogen-XR stability (1-10).
*   **O (Occurrence):** Probability of supplier stock-out or quality deviation (1-10).
*   **D (Detection):** Ability of GHS incoming QC to detect the failure (1-10).

**Table 6.1-1: Supplier Risk Metrics**
| Supplier | S | O | D | RPN | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Schott Pharma | 9 | 2 | 2 | **36** | Dual-sourcing (Schott/Gerresheimer) |
| West Pharma | 10 | 3 | 2 | **60** | 12-month Safety Stock at GHS |
| AdvantaPure | 5 | 2 | 2 | **20** | Standard Catalog Item |

---

### 7.0 CHANGE CONTROL AND NOTIFICATION PROTOCOL

Suppliers are contractually obligated via Quality Agreements (QA-AGREE-2025-01) to notify Google Health Sciences of any changes to:
1.  **Raw Material Composition:** Any change in the polymer resin or glass melt formulation.
2.  **Manufacturing Location:** Moving production to a different facility or line.
3.  **Processing Aids:** Changes in mold release agents or sterilization parameters (Gamma vs. EtO).

#### 7.1 Impact Assessment for Glucogen-XR
Upon receipt of a "Change Notification" from a supplier, GHS initiates a formal Impact Assessment (IA). If the change affects a "Critical Component" (e.g., the stopper coating), a minimum of one stability batch of Glucogen-XR (e.g., **GLUC-2025-CHG-01**) must be placed on accelerated stability ($40^\circ C / 75\% RH$) for 6 months prior to implementation.

---

### 8.0 CONCLUSION

The supplier information provided herein demonstrates that Google Health Sciences has selected industry-leading partners for the Glucogen-XR container closure system. Through rigorous qualification, analytical verification of extractables, and continuous risk monitoring, GHS ensures that the DS primary packaging remains compatible and protective over the intended shelf life. All batch records for the upcoming 2025 campaign (Series **GLUC-2025-XXX**) will include Certificates of Analysis (CoA) from these specific, qualified locations.

---
**END OF SUBSECTION**
*Document ID: GHS-M3-DS-CCS-SUPPLIER-2025*
*Version: 1.0*
*Confidential - Google Health Sciences Internal Regulatory Use Only*

---

# Suitability for Intended Use

## Protection from Environmental Factors

### **3.2.S.6.3.1.2 PROTECTION FROM ENVIRONMENTAL FACTORS**

#### **1.0 EXECUTIVE SUMMARY AND REGULATORY BASIS**
This subsection provides an exhaustive validation of the primary and secondary packaging systems utilized for **Glucogen-XR (glucapeptide extended-release)**. The packaging configuration is engineered to safeguard the drug substance (DS) against specific environmental stressors—namely actinic radiation (photostability), oxidative degradation (atmospheric exposure), moisture ingress (humidity), and mechanical compromise during cryogenic storage and transport.

Google Health Sciences (GHS) has conducted these studies in accordance with:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **USP <671>:** Containers – Performance Testing.
*   **USP <1207>:** Package Integrity Evaluation – Sterile Products.
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (May 1999).

The Glucogen-XR drug substance is a recombinant GLP-1 receptor agonist produced in the proprietary **GHS-CHO-001** cell line. Given its peptide nature and the extended-release formulation matrix, the molecule is susceptible to deamidation at pH extremes and oxidation of methionine residues (Met-8 and Met-27) if exposed to ambient light or uncontrolled atmospheric oxygen.

---

#### **2.0 SPECIFICATIONS OF THE CONTAINER CLOSURE SYSTEM (CCS)**
The primary container closure system for Glucogen-XR drug substance consists of a high-density polyethylene (HDPE) fluorinated carboy (20L) or a specialized 2D single-use biocontainer (SUT) for smaller clinical batches.

**Table 2.1: Primary Packaging Components and Material Specifications**

| Component ID | Manufacturer | Material of Construction | Regulatory Compliance |
| :--- | :--- | :--- | :--- |
| **GHS-CCS-001** | Sartorius Stedim | Flexboy® Biocontainer (PE/EVOH) | USP <87>, <88>, <661.2> |
| **GHS-CCS-002** | Nalgene / Thermo | HDPE Fluorinated Carboy (Level 3) | 21 CFR 177.1520 |
| **GHS-CCS-003** | West Pharmaceutical | FluroTec® Lined Stopper (Bromobutyl) | USP <381> |
| **GHS-CCS-004** | GHS Proprietary | Secondary Mylar Foil Overwrap (Opaque) | MIL-PRF-131K Class 1 |

---

#### **3.0 PROTECTION FROM PHOTODEGRADATION (ICH Q1B)**

Glucogen-XR contains aromatic amino acids (Tyrosine, Tryptophan) which act as chromophores. Exposure to ultraviolet (UV) and visible light triggers the formation of reactive oxygen species (ROS), leading to covalent cross-linking and aggregation.

##### **3.1 Photostability Testing Protocol (Protocol GHS-QC-PHO-2025)**
Studies were conducted on three registration batches: **GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003**.

**Exposure Criteria:**
1.  **Option 1 (Cool White Fluorescent):** Not less than 1.2 million lux-hours.
2.  **Option 2 (Near UV):** Not less than 200 watt-hours/square meter (320 nm to 400 nm).

**Table 3.1: Results of Photostability Stress Testing (Unprotected vs. Protected)**

| Batch Number | Parameter | Initial T=0 | Unprotected (Exposed) | Protected (Mylar Overwrap) | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | Purity (SEC-HPLC) | 99.4% | 91.2% | 99.3% | ≥ 98.0% |
| | Aggregates (%) | 0.2% | 6.8% | 0.3% | ≤ 0.5% |
| | Deamidation (%) | 0.4% | 2.0% | 0.4% | ≤ 1.0% |
| **GLUC-2025-002** | Purity (SEC-HPLC) | 99.6% | 90.8% | 99.5% | ≥ 98.0% |
| | Aggregates (%) | 0.1% | 7.2% | 0.2% | ≤ 0.5% |
| | Potency (In Vitro) | 102% | 84% | 101% | 90-110% |

**Calculation of Light Transmission:**
$$T = \frac{I}{I_0} \times 100$$
Where $I$ is the intensity transmitted through the secondary Mylar foil and $I_0$ is the incident intensity. For GHS-CCS-004, $T < 0.001\%$ across the 300-800 nm spectrum.

---

#### **4.0 PROTECTION FROM MOISTURE AND GAS PERMEATION**

For the lyophilized intermediate of Glucogen-XR, moisture ingress is the primary driver of glass transition temperature ($T_g$) reduction, which leads to "cake collapse" and accelerated hydrolysis.

##### **4.1 Water Vapor Transmission Rate (WVTR) Analysis**
Testing performed per **USP <671> Method S**. Containers were filled with desiccant and stored at 40°C / 75% RH (Accelerated Conditions).

**Table 4.1: WVTR Data for Glucogen-XR Primary Containers**

| Container ID | Wall Thickness (mm) | Test Duration | Weight Gain (mg/day/L) | Result |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-CCS-002** | 2.45 | 14 Days | 0.004 | Pass (Tight) |
| **GHS-CCS-001** | 0.35 (Multi-layer) | 14 Days | 0.012 | Pass (Tight) |

##### **4.2 Oxygen Transmission Rate (OTR) and Oxidation Control**
Glucogen-XR is highly sensitive to methionine oxidation (MetO). The CCS utilizes an Ethylene Vinyl Alcohol (EVOH) gas barrier layer in the SUT and a nitrogen blanket (overpressure 0.2 bar) during the filling of the HDPE carboys.

**Analytical Procedure for Oxidation Monitoring (RP-HPLC):**
1.  Column: C18, 2.1 x 150mm, 1.7μm.
2.  Mobile Phase A: 0.1% TFA in H2O.
3.  Mobile Phase B: 0.1% TFA in ACN.
4.  Detection: 214 nm.
5.  Calculated Oxidation: $\text{Area\% (MetO)} = \frac{A_{ox}}{A_{total}} \times 100$.

**Table 4.2: Oxidation Profile over 24 Months Storage (-70°C)**

| Batch | Month 0 | Month 6 | Month 12 | Month 24 | Spec |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 0.12% | 0.14% | 0.15% | 0.18% | < 1.0% |
| **GLUC-2025-003** | 0.10% | 0.11% | 0.13% | 0.17% | < 1.0% |

---

#### **5.0 PROTECTION FROM LOW-TEMPERATURE MECHANICAL STRESS**

Since Glucogen-XR DS is stored at ultra-low temperatures (-70°C to -80°C), the CCS must maintain **Container Closure Integrity (CCI)** without brittle fracture.

##### **5.1 Helium Leak Detection Protocol (USP <1207.2>)**
This deterministic method was used to validate the seal integrity of the carboys at cryogenic temperatures.

**Protocol Step-by-Step:**
1.  **Preparation:** Charge the empty container with Helium gas to 1.0 atm.
2.  **Freezing:** Submerge the container in liquid nitrogen ($LN_2$) vapor phase for 72 hours.
3.  **Measurement:** Place the container in a vacuum chamber connected to a mass spectrometer (Model Pfeiffer ASM 340).
4.  **Threshold:** A leak rate of $< 10^{-7}$ mbar·L/s is required to ensure microbial and moisture exclusion.

**Table 5.1: Helium Leak Test Results post Cryo-Stress**

| Batch Sample | Container ID | Temp (°C) | Leak Rate (mbar·L/s) | Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **Sample 1** | GLUC-2025-004-C1 | -80 | $2.4 \times 10^{-10}$ | Pass |
| **Sample 2** | GLUC-2025-004-C2 | -80 | $3.1 \times 10^{-10}$ | Pass |
| **Sample 3** | GLUC-2025-004-C3 | -80 | $1.9 \times 10^{-10}$ | Pass |

---

#### **6.0 ADHESION AND LEACHABLES SHIELDING**

The internal surface of the HDPE carboys (GHS-CCS-002) is fluorinated (Level 3) to create a chemically inert barrier. This prevents the adsorption of the Glucogen-XR peptide to the container walls and minimizes the leaching of plasticizers or catalyst residues (e.g., Chromium, Aluminum) into the DS.

##### **6.1 Protein Adsorption Assessment**
Total Protein Recovery was measured using the Bradford Assay and RP-HPLC.
*   **Formula:** $\text{Recovery \%} = \frac{C_{final}}{C_{initial}} \times 100$.
*   **Result:** Mean recovery across three batches was **99.7%**, confirming that the fluorinated surface effectively prevents peptide loss.

##### **6.2 Extractables/Leachables (E&L) Strategy**
Leachable studies were conducted using a "worst-case" solvent (Ethanol/Water mix) and the DS itself. Analysis involved GC-MS, LC-MS, and ICP-MS.
*   **Safety Concern Threshold (SCT):** 0.15 μg/day.
*   **Results:** All identified leachables (primarily Irganox 1010 and Irgafos 168 oxidation products) were found to be below the **Analytical Evaluation Threshold (AET)**.

---

#### **7.0 SUMMARY OF PROTECTIVE CONTROLS**

| Environmental Factor | Protective Mechanism | Validation Study Ref |
| :--- | :--- | :--- |
| **Light (UV/Vis)** | Opaque Mylar Secondary Wrap | GHS-QC-PHO-2025 |
| **Oxygen ($O_2$)** | EVOH Barrier + $N_2$ Blanket | GHS-QC-OX-2025 |
| **Moisture ($H_2O$)** | HDPE / Vapor Barrier Seals | USP <671> Report |
| **Microbial** | Deterministic CCI (Helium Leak) | USP <1207> Report |
| **Temperature** | Validated Cold Chain (PCM Shippers) | GHS-LOG-2025-01 |

In conclusion, the data presented in this subsection demonstrate that the chosen container closure system for Glucogen-XR provides comprehensive protection against all relevant environmental factors. The integrity of the drug substance is maintained throughout the proposed shelf-life when stored under the recommended conditions of -70°C, protected from light.

---

## Compatibility with Drug Substance

### **3.2.S.6 CONTAINER CLOSURE SYSTEM [GLUCOGEN-XR]**
#### **3.2.S.6.2 Suitability for Intended Use**
##### **3.2.S.6.2.1 Compatibility with Drug Substance (Glucapeptide Extended-Release)**

---

### **1.0 Introduction and Scope**
This section provides a comprehensive evaluation of the compatibility between the Glucogen-XR (glucapeptide extended-release) drug substance (DS) and the primary container closure system (CCS) components. Google Health Sciences has conducted exhaustive Extractable and Leachable (E&L) studies, adsorption kinetics evaluations, and protein stability assessments to ensure that the CCS maintains the identity, strength, quality, purity, and potency of the drug substance over its intended shelf life.

The drug substance, Glucogen-XR, is a 31-amino acid recombinant human GLP-1 analog produced in the proprietary GHS-CHO-001 cell line. Given its peptide nature and the extended-release formulation characteristics, maintaining the integrity of the secondary and tertiary structures is paramount. The primary CCS consists of high-purity Type I borosilicate glass vials (USP <660>), fluoropolymer-coated chlorobutyl rubber stoppers (USP <381>), and aluminum flip-off seals.

---

### **2.0 Material Specifications and Selection Rationale**

#### **2.1 Primary Container: Type I Borosilicate Glass**
The Glucogen-XR drug substance is stored in 10R clear Type I borosilicate glass vials (Schott TopLine®). This material was selected based on its superior chemical resistance and low alkali release profile.

**Table 1: Technical Specifications for Glass Vials**
| Parameter | Specification | Standard/Method |
| :--- | :--- | :--- |
| **Material** | Type I Borosilicate Glass | USP <660> / EP 3.2.1 |
| **Hydrolytic Resistance** | $\leq$ 0.10 mL of 0.01M HCl/g glass | USP <660> |
| **Arsenic Leachable** | < 0.1 ppm | USP <660> |
| **Surface Treatment** | None (Inherently Inert) | N/A |
| **Dimensions** | 24.0 mm (D) x 45.0 mm (H) | ISO 8362-1 |

#### **2.2 Closure System: Fluoropolymer-Coated Chlorobutyl Rubber**
To mitigate the risk of peptide adsorption and the leaching of vulcanization agents (e.g., zinc, sulfur, or antioxidants), the Google Health Sciences engineering team selected West Pharmaceutical Services NovaPure® stoppers with a FluroTec® (ETFE) film coating.

**Table 2: Technical Specifications for Elastomeric Closures**
| Parameter | Specification | Standard/Method |
| :--- | :--- | :--- |
| **Polymer Base** | Chlorobutyl Rubber | USP <381> |
| **Coating** | FluroTec® (ETFE) | Proprietary |
| **Reducing Substances** | $\leq$ 0.3 mL of 0.01M $I_2$ | USP <381> |
| **Extractable Zinc** | $\leq$ 5 $\mu$g/g | ICP-MS |
| **Fragmentation** | $\leq$ 5 fragments per 12 punctures | USP <381> |

---

### **3.0 Extractables and Leachables (E&L) Program**

The E&L program was designed in accordance with **PQRI (Product Quality Research Institute)** recommendations and **USP <1663>/<1664>**. The goal was to identify potential migrants from the CCS and quantify their presence in the Glucogen-XR drug substance matrix under accelerated and real-time storage conditions.

#### **3.1 Extractable Study Protocol (Controlled Extraction Study)**
Extraction was performed using three solvents of varying polarity to bracket the drug substance formulation (pH 7.4 phosphate buffer with polysorbate 80).

**Protocol Step-by-Step:**
1. **Component Preparation:** Vials and stoppers were subjected to standard WFI (Water for Injection) rinsing and autoclaving (121°C for 30 minutes).
2. **Extraction Media:** 
    * a) Pure WFI (Polar)
    * b) 50% Ethanol / 50% WFI (Semi-polar)
    * c) Hexane (Non-polar)
3. **Conditioning:** Components were refluxed for 24 hours or sonicated for 4 hours at 60°C.
4. **Analytical Techniques:**
    * **HS-GC/MS:** For volatile organic compounds (VOCs).
    * **GC/MS:** For semi-volatile organic compounds (SVOCs).
    * **LC/MS/MS (ESI +/-):** For non-volatile organic compounds (NVOCs).
    * **ICP-MS:** For elemental impurities (USP <232>/<233>).

#### **3.2 Summary of Extractable Data**
**Table 3: Controlled Extraction Results (Batch GLUC-2025-EXT-01)**
| Component | Solvent | Analyte Identified | Concentration ($\mu$g/cm²) | Safety Concern Threshold (SCT) |
| :--- | :--- | :--- | :--- | :--- |
| **Stopper** | Hexane | BHT (Antioxidant) | 0.45 | 1.5 $\mu$g/day (Below) |
| **Stopper** | Ethanol | Stearic Acid | 0.12 | N/A (GRAS) |
| **Glass Vial** | WFI | Silicon (Si) | 0.05 | N/A |
| **Glass Vial** | WFI | Aluminum (Al) | 0.002 | < 0.25 $\mu$g/L (USP <659>) |

---

### **4.0 Leachable Assessment in Drug Substance Matrix**

Leachable studies were conducted on three registration batches of Glucogen-XR stored at the recommended storage temperature (2°C to 8°C) and accelerated conditions (25°C/60% RH).

**Batches Evaluated:**
* GLUC-2025-001 (Stored 24 months)
* GLUC-2025-002 (Stored 18 months)
* GLUC-2025-003 (Stored 12 months)

#### **4.1 Analytical Methodology for Leachables**
The analytical methods were validated per ICH Q2(R1) to detect target leachables identified in the extractable study at an **Analytical Evaluation Threshold (AET)** of 0.15 $\mu$g/mL.

**Formula for AET Calculation:**
$$AET = \left( \frac{SCT}{D \times N} \right) \times UF$$
Where:
* $SCT$ = 1.5 $\mu$g/day
* $D$ = 1 dose/day
* $N$ = 1 container
* $UF$ = Uncertainty Factor (0.1 for MS-based methods)

#### **4.2 Leachable Results (Real-Time 24 Months)**
**Table 4: Leachable Profile of Glucogen-XR DS (Batch GLUC-2025-001)**
| Leachable Compound | Limit ($\mu$g/mL) | T=0 | T=12mo | T=24mo | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BHT** | < 0.15 | ND | < 0.05 | 0.06 | Pass |
| **Palmitic Acid** | Report | ND | 0.08 | 0.11 | Pass |
| **Total Silicon** | < 1.0 | 0.02 | 0.03 | 0.05 | Pass |
| **2-mercaptobenzothiazole** | < 0.10 | ND | ND | ND | Pass |

*ND = Not Detected (Below LOD of 0.01 $\mu$g/mL)*

---

### **5.0 Peptide Adsorption Studies**

One of the critical risks for low-concentration peptide therapeutics like Glucogen-XR is the loss of potency due to adsorption to the glass surface or the elastomeric closure.

#### **5.1 Surface Adsorption Protocol**
1. **Saturation Study:** Glucogen-XR DS at 5 mg/mL was filled into the CCS.
2. **Analysis:** Samples were taken at T=0, 2h, 4h, 8h, 24h, and 7 days.
3. **Detection:** High-Performance Liquid Chromatography (RP-HPLC) with UV detection at 214 nm.
4. **Mass Balance Calculation:**
   $$ \% Adsorption = \left( \frac{C_{initial} - C_{final}}{C_{initial}} \right) \times 100 $$

#### **5.2 Adsorption Results**
**Table 5: Peptide Recovery Rate (%) vs. Time**
| Time Point | 2°C - 8°C Recovery | 25°C Recovery | Observation |
| :--- | :--- | :--- | :--- |
| **0 Hours** | 100.0% | 100.0% | Baseline |
| **24 Hours** | 99.8% | 99.4% | Minimal Adsorption |
| **7 Days** | 99.6% | 98.9% | Equilibrium reached |
| **30 Days** | 99.5% | 98.7% | Stable |

The data indicates that the use of Polysorbate 80 (0.02% w/v) in the formulation effectively occupies the glass surface sites, preventing Glucogen-XR peptide loss.

---

### **6.0 Interaction with Formulation Excipients**

#### **6.1 Polysorbate 80 Degradation and CCS Interactions**
Polysorbate 80 (PS80) is known to potentially interact with metal ions leached from glass.
* **Mechanism:** Trace Aluminum or Iron can catalyze the autoxidation of PS80, leading to the formation of peroxides and subsequent peptide oxidation (specifically at the Met-8 and Trp-23 residues of Glucogen-XR).
* **Mitigation:** The use of Schott TopLine® vials with low metal ion release was verified by ICP-MS.

**Table 6: Peroxide Value (meq/kg) in DS over Time**
| Batch ID | T=0 | T=6mo (25°C) | T=12mo (25°C) | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 0.01 | 0.03 | 0.05 | < 0.20 |
| GLUC-2025-002 | 0.01 | 0.02 | 0.04 | < 0.20 |

---

### **7.0 Mechanical Integrity and Container Closure Integrity Testing (CCIT)**

The compatibility is not only chemical but physical. The closure must maintain a microbial barrier throughout the shelf life.

#### **7.1 Helium Leak Detection**
Helium leak testing was conducted per **USP <1207>** to quantify the gas-tightness of the vial-stopper combination.
* **Instrument:** Pfeiffer Vacuum HLT560.
* **Criteria:** Leak rate < $6.0 \times 10^{-10}$ Pa·m³/s.

**Table 7: CCIT Results for Registration Batches**
| Batch Number | Compression (%) | Helium Leak Rate | Microbial Challenge |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 15.2% | $1.2 \times 10^{-11}$ | Pass (No Growth) |
| GLUC-2025-002 | 14.8% | $2.4 \times 10^{-11}$ | Pass (No Growth) |
| GLUC-2025-003 | 15.5% | $1.8 \times 10^{-11}$ | Pass (No Growth) |

---

### **8.0 Conclusion on Compatibility**

Based on the extensive E&L studies, peptide recovery assays, and CCIT data, the chosen container closure system for Glucogen-XR is deemed highly compatible with the drug substance. 
1. **Chemical Compatibility:** No leachables were detected above the safety concern threshold.
2. **Physical Compatibility:** The CCS maintains a robust seal, protecting the peptide from oxidation and microbial ingress.
3. **Biological Compatibility:** The FluroTec® coating effectively prevents peptide adsorption, ensuring 100% dose delivery.

Google Health Sciences concludes that the Type I borosilicate glass vial and fluoropolymer-coated chlorobutyl stopper assembly are suitable for the storage of Glucogen-XR drug substance for the duration of its 24-month shelf life when stored at 2°C to 8°C.

---
**References:**
1. *USP <660> Containers—Glass.*
2. *USP <381> Elastomeric Closures for Injections.*
3. *USP <1663> Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.*
4. *ICH Q3D(R1) Guideline for Elemental Impurities.*
5. *PQRI Safety Thresholds and Best Practices for Extractables and Leachables (2006/2021).*

---

## Ease of Use and Extractability

### **MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)**
**SECTION 3.2.P.7: CONTAINER CLOSURE SYSTEM**
**SUBSECTION: SUITABILITY FOR INTENDED USE – EASE OF USE AND EXTRACTABILITY**

---

#### **1.0 INTRODUCTION AND SCOPE**
This section provides a comprehensive technical evaluation of the ease of use and extractability of **Glucogen-XR (glucapeptide extended-release)** 2.0 mg/0.5 mL solution for injection, housed within the proprietary GHS-Pen-Gen2 multidose delivery system. As a long-acting GLP-1 receptor agonist developed by Google Health Sciences (GHS), the drug product requires precise dosing, high-viscosity fluid dynamics management, and consistent user interface ergonomics to ensure patient adherence in Type 2 Diabetes Mellitus (T2DM) populations.

The evaluation presented herein adheres to **FDA Guidance for Industry: Container Closure Systems for Packaging Human Drugs and Biologics (1999)** and **USP <661.1> (Plastic Materials of Construction)**, **USP <661.2> (Plastic Packaging Systems for Pharmaceutical Use)**, and **USP <381> (Elastomeric Components in Injection Systems)**.

---

#### **2.0 EXTRACTABLE VOLUME AND DOSE ACCURACY**

##### **2.1 Rationale for Overfill and Extractable Volume**
To ensure the delivery of the labeled dose (2.0 mg per 0.5 mL) across the intended multi-dose regimen (4 doses per pen), Glucogen-XR is filled into a 3 mL Type I Borosilicate glass cartridge with a target fill volume of 2.22 mL. This includes a strategic overfill to account for:
1.  **Dead Space:** Residual volume in the needle hub and cartridge neck.
2.  **Priming (Air Clearance):** Volume required for the initial "flow check" by the patient.
3.  **Expansion/Contraction:** Thermal variances during refrigerated storage (2°C to 8°C).

##### **2.2 Statistical Analysis of Extractable Volume (USP <1151>)**
Testing was conducted on three registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003).

**Table 2.2-1: Summary of Extractable Volume Data (n=30 per batch)**

| Batch Number | Nominal Fill (mL) | Mean Extractable (mL) | Standard Deviation | Min (mL) | Max (mL) | RSD (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2.22 | 2.185 | 0.0042 | 2.179 | 2.192 | 0.19% |
| **GLUC-2025-002** | 2.22 | 2.188 | 0.0038 | 2.181 | 2.195 | 0.17% |
| **GLUC-2025-003** | 2.22 | 2.182 | 0.0051 | 2.172 | 2.190 | 0.23% |

**Calculations for Deliverable Mass:**
The deliverable mass of glucapeptide is calculated using the formula:
$$M_{delivered} = V_{extracted} \times C_{assay}$$
Where:
*   $V_{extracted}$ = Mean extractable volume per dose (0.50 mL target).
*   $C_{assay}$ = Potency determined by RP-HPLC (nominal 4.0 mg/mL).

For Batch GLUC-2025-001, at 100.2% LC:
$$M = 0.501 \text{ mL} \times 4.008 \text{ mg/mL} = 2.008 \text{ mg per dose}$$
*(Requirement: 1.90 mg – 2.10 mg per dose; 95% – 105% LC).*

---

#### **3.0 EASE OF USE: HUMAN FACTORS AND FUNCTIONAL PERFORMANCE**

The GHS-Pen-Gen2 is a spring-assisted, dial-and-dose mechanical injector. Ease of use is quantified via Break Loose Force (BLF), Gliding Force (GF), and Dose Torque.

##### **3.1 Gliding Force and Break Loose Force (ISO 11608-1)**
Testing was performed using an Instron 5942 Tensile Tester equipped with a 50N load cell (Equipment ID: GHS-QA-INS-09).

**Protocol GHS-PROT-QC-882:**
1.  Mount the cartridge/pen assembly in the fixture.
2.  Set crosshead speed to 150 mm/min (simulating average thumb depression).
3.  Measure the peak force to initiate movement (BLF).
4.  Measure the mean force during the delivery of 0.5 mL (GF).

**Table 3.1-1: Force Profiles for Glucogen-XR Injection**

| Parameter | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **Break Loose Force (N)** | $\leq 15.0$ N | 8.42 ± 0.6 | 8.11 ± 0.5 | 8.55 ± 0.7 |
| **Mean Gliding Force (N)** | $5.0 - 12.0$ N | 7.21 ± 0.3 | 7.05 ± 0.2 | 7.18 ± 0.4 |
| **Maximum Gliding Force (N)** | $\leq 15.0$ N | 9.10 | 8.85 | 9.32 |

*Technical Note: The use of medical-grade silicone oil (Dow Corning 360, 1000 cSt) at a concentration of 0.4 mg/cm² on the inner cartridge wall ensures the gliding force remains stable over the 24-month shelf life.*

##### **3.2 Dose Setting Torque and Auditory Feedback**
To accommodate elderly patients with reduced grip strength or visual impairment, the GHS-Pen-Gen2 is designed with high-contrast numbering and tactile/auditory "clicks."

*   **Dose Setting Torque:** 0.02 Nm to 0.10 Nm (Measured via Tohnichi Torque Gauge).
*   **Auditory Click Volume:** 65–75 dB at 10 cm (Measured via Sound Level Meter GHS-SLM-02).

---

#### **4.0 EXTRACTABLES AND LEACHABLES (E&L) ASSESSMENT**

In accordance with **USP <1663>** and **USP <1664>**, a rigorous E&L program was executed to ensure that no components of the glass cartridge, bromobutyl stopper, or plunger pose a toxicological risk or impact the stability of the glucapeptide.

##### **4.1 Controlled Extraction Study (CES) Parameters**
*   **Solvents:** Water (pH 3.0, pH 7.4, pH 9.0), Isopropanol (IPA), and Hexane.
*   **Conditions:** Reflux for 24 hours or Accelerated Aging (50°C for 72 hours).
*   **Analytical Techniques:**
    *   **GC-MS:** For volatile and semi-volatile organic compounds.
    *   **LC-HRMS:** For non-volatile organic compounds (NVR).
    *   **ICP-MS:** For elemental impurities (As, Cd, Hg, Pb, etc., per ICH Q3D).

##### **4.2 Extractables Data Summary**
**Table 4.2-1: Primary Extractables identified in Bromobutyl Plunger (Batch: GLUC-PLU-2025)**

| Compound ID | Source | Analytical Method | Conc. (µg/g) | Toxicological Threshold (AET) |
| :--- | :--- | :--- | :--- | :--- |
| **BHT (Butylated hydroxytoluene)** | Antioxidant | GC-MS | 12.4 | Below SCT |
| **Stearic Acid** | Processing Aid | LC-MS | 45.1 | Qualified |
| **Zinc Oxide derivatives** | Vulcanizing Agent | ICP-MS | 2.3 | Within ICH Q3D |
| **Silicone Oil (Dimethicone)** | Lubricant | FTIR/GC | 420.0 | Functional Requirement |

*AET (Analytical Evaluation Threshold) was calculated as 1.5 µg/day based on the maximum daily dose of Glucogen-XR.*

---

#### **5.0 SIMULATED USE AND "EASE OF EXTRACTION" PROTOCOL**

To simulate real-world patient interaction, a "Stress Extraction" study was performed.

**Step-by-Step Procedure (Protocol GHS-HF-004):**
1.  **Preparation:** Remove 10 Glucogen-XR pens from refrigerated storage (5°C).
2.  **Equilibration:** Allow pens to reach ambient temperature (25°C) for 30 minutes.
3.  **Priming:** Attach a 32G x 4mm NovoFine® needle. Dial 2 units (0.02 mL) and expel. Repeat until a drop appears.
4.  **Dose Delivery:** Dial the full dose (0.5 mL). Depress the dose button fully. Hold for 10 seconds (as per Instructions for Use).
5.  **Gravimetric Verification:** Collect the expelled fluid in a tared HPLC vial. Calculate volume based on the density of Glucogen-XR ($\rho = 1.012 \text{ g/mL}$).
6.  **Repeating:** Repeat steps 4-5 for all 4 doses per pen.

**Table 5.0-1: Success Rate and Precision of Extraction**

| Performance Metric | Acceptance Criteria | Result (n=40 doses) | Status |
| :--- | :--- | :--- | :--- |
| **Dose Volume Precision** | CV < 5.0% | 1.8% | Pass |
| **Incomplete Dose Events** | 0 events | 0 | Pass |
| **Thumb Force (Subjective)** | Rating > 4/5 | 4.8/5 | Pass |

---

#### **6.0 CONCLUSION**

The container closure system for Glucogen-XR (glucapeptide extended-release) has been exhaustively validated for ease of use and extractability. The overfill strategy ensures 100% dose compliance even under worst-case handling conditions. The mechanical performance of the GHS-Pen-Gen2 provides a low-force, high-precision delivery mechanism suitable for the target patient demographic. Furthermore, the E&L profile demonstrates that the components are chemically inert and compatible with the peptide therapeutic, ensuring safety and efficacy over the intended shelf life.

---

**References:**
1.  *ICH Q3D(R2) Guideline for Elemental Impurities.*
2.  *ISO 11608-1:2022 Needle-based injection systems for medical use.*
3.  *USP <661> Containers - Plastics; USP <1663> Assessment of Extractables.*
4.  *GHS Internal Report R&D-2024-GLUC-099: Ergonomic Evaluation of GHS-Pen-Gen2.*

---

# Container Material Specifications

## Compendial Requirements

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.2.1: COMPENDIAL REQUIREMENTS

---

#### 1.0 INTRODUCTION AND REGULATORY SCOPE

This subsection delineates the comprehensive compendial requirements, testing matrices, and qualification protocols for the primary container closure system (CCS) utilized for **Glucogen-XR (glucapeptide extended-release)** drug substance. Google Health Sciences (GHS) mandates that all materials in direct contact with the drug substance comply with the highest standards of the United States Pharmacopeia (USP), European Pharmacopoeia (Ph. Eur.), and Japanese Pharmacopoeia (JP), as well as relevant ICH Q6B and ICH Q3D guidelines.

The drug substance is stored in high-density polyethylene (HDPE) bioprocess containers (BPCs) with specialized platinum-cured silicone tubing and polycarbonate connectors. The following specifications ensure the integrity, safety, and compatibility of the Glucogen-XR peptide during long-term storage at -70°C to -80°C.

---

#### 2.0 COMPENDIAL SPECIFICATION MATRIX BY COMPONENT

##### 2.1 Primary Storage Vessel: HDPE Bioprocess Bottles
The primary storage container for Glucogen-XR drug substance (Batch Series: GLUC-2025-XXX) is a 2L or 5L Fluorinated High-Density Polyethylene (HDPE) vessel.

**Table 1: Compendial Requirements for HDPE Primary Containers**

| Test Parameter | Compendial Reference | Acceptance Criteria | Method ID |
| :--- | :--- | :--- | :--- |
| **Physical Identification** | USP <661.1> / Ph. Eur. 3.1.3 | IR Spectrum matches reference standard for HDPE | GHS-QC-8821 |
| **Heavy Metals (ICP-MS)** | USP <232>, <233> | Pb ≤ 0.5 ppm; Cd ≤ 0.5 ppm; Hg ≤ 0.1 ppm | GHS-QC-9004 |
| **Non-Volatile Residue (NVR)** | USP <661.1> | ≤ 15 mg (per 100 mL solvent extract) | GHS-QC-1120 |
| **Residue on Ignition** | USP <661.1> | ≤ 0.05% w/w | GHS-QC-1122 |
| **Buffering Capacity** | USP <661.1> | ≤ 10.0 mL of 0.01 N HCl or NaOH | GHS-QC-1125 |
| **Extractable Organic Carbon** | USP <643> | ≤ 500 ppb (μg/L) | GHS-QC-2022 |
| **Biological Reactivity (In Vivo)** | USP <88> | Class VI - 70°C (Systemic, Intracutaneous, Implant) | External (ISO 10993) |
| **Biological Reactivity (In Vitro)** | USP <87> | No reactivity (Grade 0) / L929 Mammalian Cell | External (ISO 10993) |

---

#### 3.0 DETAILED ANALYTICAL PROTOCOLS FOR COMPENDIAL COMPLIANCE

##### 3.1 Protocol for USP <661.1> Plastic Materials of Construction (HDPE)

The qualification of Glucogen-XR storage containers follows a rigorous extraction protocol to simulate worst-case degradation of the polymer matrix.

**3.1.1 Sample Preparation and Extraction Procedure**
1. **Container Selection:** Select three (3) containers from Batch GLUC-2025-CONT-01.
2. **Extraction Media:** Purified Water (USP), 50% Ethanol (v/v), and 0.1 N HCl.
3. **Surface-to-Volume Ratio:** 6 cm² per 1 mL of extraction solvent.
4. **Thermal Exposure:** Place the sealed containers in a validated incubator at 70°C ± 2°C for 24 hours.
5. **Decantation:** Transfer the extract to a borosilicate Type I flask and allow to cool to 25°C.

**3.1.2 Physicochemical Testing Methodology**
*   **Absorbance:** Scanning the range of 220 nm to 340 nm. The absorbance of the aqueous extract must not exceed 0.2 units per USP <661.1>.
*   **Total Organic Carbon (TOC):** Performed on the aqueous extract using the GHS-TOC-Analyzer (Model G-700).
    *   *Calculation:* $TOC_{sample} - TOC_{blank} \leq 5.0 mg/L$.

##### 3.2 Protocol for USP <788> Particulate Matter in Injections

While USP <788> typically applies to the final drug product, Google Health Sciences applies these limits to the Drug Substance container extractables to ensure sub-visible particulate control (SVPC) during the freezing/thawing of the glucapeptide.

**Table 2: Particulate Matter Thresholds (Batch GLUC-2025-XXX)**

| Particle Size | Limit (Light Obscuration) | Limit (Microscopic) |
| :--- | :--- | :--- |
| **≥ 10 µm** | ≤ 25 particles per mL | ≤ 12 particles per mL |
| **≥ 25 µm** | ≤ 3 particles per mL | ≤ 2 particles per mL |

---

#### 4.0 ELUCIDATION OF EXTRACTABLES AND LEACHABLES (E&L)

GHS conducted a comprehensive E&L study for Glucogen-XR drug substance storage. Given the peptide's sensitivity to oxidative species, the primary focus was on **Anti-oxidants (BHT/Irganox 1010)** and **Catalyst Residues**.

##### 4.1 Target Leachables and Safety Assessment
The following table outlines the specific chemical species monitored during the stability of GLUC-2025-001 through GLUC-2025-010.

**Table 3: Target Leachable Profile and Analytical Detection Limits**

| Compound | Source | Analytical Method | Limit of Quantitation (LOQ) |
| :--- | :--- | :--- | :--- |
| **Irganox 1010** | HDPE Stabilizer | LC-MS/MS | 0.01 µg/mL |
| **Irgafos 168** | HDPE Stabilizer | GC-MS | 0.05 µg/mL |
| **Stearic Acid** | Lubricant | GC-FID | 0.10 µg/mL |
| **Aluminum** | Ziegler-Natta Catalyst | ICP-MS | 1.0 ppb |
| **Chromium** | Phillips Catalyst | ICP-MS | 0.5 ppb |

---

#### 5.0 RELEVANT COMPENDIAL CHAPTERS AND GUIDELINES

The container system for Glucogen-XR adheres to the following regulatory framework:

1.  **USP <661.1>:** Plastic Materials of Construction.
2.  **USP <661.2>:** Plastic Packaging Systems for Pharmaceutical Use.
3.  **USP <87> / <88>:** Biological Reactivity Tests (In Vitro/In Vivo).
4.  **USP <1663>:** Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.
5.  **USP <1664>:** Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems.
6.  **Ph. Eur. 3.1.3:** Polyolefins.
7.  **ICH Q3D:** Guideline for Elemental Impurities.

---

#### 6.0 STATISTICAL ANALYSIS OF BATCH CONSISTENCY

To ensure the reproducibility of the container closure performance, Google Health Sciences utilizes a Ppk (Process Performance Index) analysis for critical dimensions and extractable levels across container batches GLUC-2025-C01 through GLUC-2025-C50.

**Equation 1: Process Performance Index (Ppk)**
$$P_{pk} = \min \left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
*Where:*
*   $USL$: Upper Specification Limit
*   $LSL$: Lower Specification Limit
*   $\mu$: Mean of the batch data
*   $\sigma$: Standard deviation

GHS maintains a target $P_{pk} \geq 1.33$ for all compendial attributes related to container integrity.

---

#### 7.0 CONCLUSION

The compendial requirements for the Glucogen-XR drug substance container closure system are designed to mitigate risks associated with peptide adsorption, oxidative degradation, and particulate contamination. All materials are qualified for storage at -80°C, ensuring that the critical quality attributes (CQAs) of the glucapeptide remain within specified limits throughout the shelf life of the drug substance.

[End of Subsection 3.2.S.6.2.1]

---

## Physical and Chemical Properties

### **3.2.S.6. CONTAINER CLOSURE SYSTEM [GLUCOGEN-XR]**
#### **3.2.S.6.1. Physical and Chemical Properties of Container Materials**

---

### **1.0 INTRODUCTION AND SCOPE**
This section provides an exhaustive characterization of the physical and chemical properties of the primary container closure system (CCS) components utilized for the storage and distribution of **Glucogen-XR (glucapeptide extended-release)** drug substance. In accordance with **ICH Q6B**, **USP <661.1>**, **USP <661.2>**, and **FDA Guidance for Industry: Container Closure Systems for Packaging Human Drugs and Biologics (1999)**, Google Health Sciences has performed comprehensive qualification of the materials of construction (MOC) to ensure product stability, potency, and safety throughout the shelf life.

The primary container for Glucogen-XR drug substance is a high-density polyethylene (HDPE) carboy system (20L and 50L) equipped with a platinum-cured silicone gasket and a polypropylene (PP) screw cap.

---

### **2.0 PRIMARY CONTAINER: HIGH-DENSITY POLYETHYLENE (HDPE) CARBOY**
#### **2.1 Material Identification and Grade**
The HDPE resin utilized is a medical-grade, hexene-copolymer HDPE (Grade: GHS-HDPE-9000).
*   **CAS Number:** 25213-02-9
*   **Regulatory Compliance:** USP <87>, USP <88> Class VI, ISO 10993, and 21 CFR 177.1520.

#### **2.2 Physical Property Specifications (Batch Series GLUC-2025-MAT-01 through 05)**

| Parameter | Test Method | Specification | Typical Result (Batch GLUC-2025-MAT-01) |
| :--- | :--- | :--- | :--- |
| **Density** | ASTM D1505 | 0.952 – 0.965 g/cm³ | 0.958 g/cm³ |
| **Melt Flow Index (190°C/2.16kg)** | ASTM D1238 | 2.0 – 4.5 g/10 min | 3.2 g/10 min |
| **Tensile Strength at Yield** | ASTM D638 | > 25 MPa | 28.4 MPa |
| **Elongation at Break** | ASTM D638 | > 600% | 740% |
| **Flexural Modulus** | ASTM D790 | 1,000 – 1,300 MPa | 1,145 MPa |
| **Vicat Softening Point** | ASTM D1525 | 120°C – 130°C | 126.4°C |
| **Crystallinity (DSC)** | USP <891> | 65% – 80% | 72.3% |

#### **2.3 Chemical Characterization and Spectroscopic Fingerprinting**
To ensure consistency across manufacturing sites (3000 Innovation Drive), every incoming lot of HDPE undergoes **Fourier Transform Infrared (FTIR)** spectroscopy.

**Protocol GHS-QC-FTIR-09:**
1.  Sample preparation: Thin film compression molding at 190°C.
2.  Scan range: 4000 cm⁻¹ to 400 cm⁻¹.
3.  Resolution: 4 cm⁻¹.
4.  Acceptance Criteria: The spectrum must demonstrate characteristic CH₂ rocking vibrations at 719 cm⁻¹ and 730 cm⁻¹, and C-H stretching at 2848 cm⁻¹ and 2915 cm⁻¹. The Correlation Coefficient ($r$) compared to the reference standard (Ref: GHS-STD-HDPE-01) must be $\geq 0.98$.

---

### **3.0 CLOSURE SYSTEM: POLYPROPYLENE (PP) CAPS**
#### **3.1 Thermal Properties and Differential Scanning Calorimetry (DSC)**
The screw caps are manufactured from medical-grade polypropylene (PP) homopolymer. Thermal stability is critical for the integrity of the seal during cold-chain storage at -20°C and -80°C.

**Table 3.1: DSC Analysis of PP Cap Batches (GLUC-2025-CAP-X)**

| Batch ID | Glass Transition ($T_g$) | Melting Point ($T_m$) | Heat of Fusion ($\Delta H_f$) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-CAP-01 | -12.4°C | 164.8°C | 98.2 J/g |
| GLUC-2025-CAP-02 | -11.9°C | 165.2°C | 100.1 J/g |
| GLUC-2025-CAP-03 | -12.1°C | 164.9°C | 99.5 J/g |

*Calculation for % Crystallinity ($X_c$):*
$$X_c = \frac{\Delta H_f}{\Delta H_f^0} \times 100$$
Where $\Delta H_f^0$ for 100% crystalline PP = 207 J/g.
For GLUC-2025-CAP-01: $X_c = (98.2 / 207) \times 100 = 47.44\%$.

---

### **4.0 CHEMICAL RESISTANCE AND LEACHABLES EVALUATION**
#### **4.1 USP <661.1> Physicochemical Tests (Aqueous Extraction)**
The Glucogen-XR drug substance is an aqueous solution containing phosphate buffer, polysorbate 80, and sucrose. Chemical resistance was tested using "Worst Case" extraction conditions.

**Table 4.1: USP <661.1> Test Results for HDPE Carboys (Batch GLUC-2025-EXT-01)**

| Test | Procedure | Limit | Result |
| :--- | :--- | :--- | :--- |
| **Absorbance** | 200-360 nm | NMT 0.20 | 0.04 AU |
| **Acidity/Alkalinity** | Titration | < 1.5 mL of 0.01N NaOH | 0.25 mL |
| **Total Organic Carbon (TOC)** | USP <643> | NMT 5 mg/L | 0.82 mg/L |
| **Non-Volatile Residue (NVR)** | Gravimetric | NMT 15.0 mg | 2.1 mg |
| **Heavy Metals** | ICP-MS | NMT 1 ppm | < 0.1 ppm |

#### **4.2 Extractables Profile (Non-Targeted Screening)**
Extraction was performed using:
1.  Polar solvent: Water for Injection (WFI)
2.  Semi-polar solvent: Isopropanol (IPA)
3.  Non-polar solvent: n-Hexane

**Analytical Instrumentation:**
*   **GC-MS:** For volatile and semi-volatile organic compounds (VOCs/SVOCs).
*   **LC-HRMS (Q-Exactive):** For non-volatile organic compounds.
*   **ICP-OES:** For elemental impurities.

**Table 4.2: Identified Extractables from HDPE Carboy (Surface Area 1250 cm²)**

| Compound | Class | Concentration ($\mu$g/mL in Hexane) | Safety Threshold (AET) |
| :--- | :--- | :--- | :--- |
| **Irganox 1010** | Antioxidant | 1.2 | Below SCT |
| **Irgafos 168** | Processing Stabilizer | 0.8 | Below SCT |
| **13-Docosenamide** | Slip Agent | 4.5 | Below SCT |
| **Stearic Acid** | Lubricant | 2.1 | N/A (GRAS) |

---

### **5.0 MECHANICAL INTEGRITY AND PERFORMANCE TESTING**
#### **5.1 Vacuum Leak Test (Muehlbauer Protocol)**
To ensure microbial ingress is prevented, the 20L carboy assemblies (Batch GLUC-2025-LEAK-01) were subjected to a vacuum decay test according to **ASTM F2338-09**.

**Procedure:**
1.  Assemble carboy with 50 Nm torque on the PP cap.
2.  Apply vacuum of 500 mbar for 60 seconds.
3.  Monitor pressure rise ($\Delta P$).
4.  **Acceptance Criteria:** $\Delta P < 0.05$ mbar/sec.
5.  **Result:** Average $\Delta P = 0.008$ mbar/sec (PASS).

#### **5.2 Low-Temperature Impact Resistance**
Since Glucogen-XR is stored at -20°C, the brittleness of the HDPE was tested via a drop test.
*   **Standard:** ISO 2248.
*   **Conditioning:** 48 hours at -25°C.
*   **Drop Height:** 1.2 meters.
*   **Orientation:** Base, 45° edge, and closure.
*   **Observation:** Zero failures observed across $n=30$ units (Batch GLUC-2025-DROP-01).

---

### **6.0 GAS PERMEATION STUDIES**
#### **6.1 Oxygen Transmission Rate (OTR)**
OTR is critical to prevent the oxidation of methionine residues in the glucapeptide sequence.

**Formula:**
$$OTR = \frac{V \times \Delta C}{A \times t \times \Delta P}$$
Where:
*   $V$ = Internal volume (20L)
*   $A$ = Surface area
*   $\Delta C$ = Change in $O_2$ concentration

**Data (Standardized to 23°C, 50% RH):**
*   **Material Thickness:** 2.5 mm
*   **OTR Result:** $12.5$ cc/$m^2 \cdot$ day $\cdot$ atm.

#### **6.2 Water Vapor Transmission Rate (WVTR)**
Tested per **ASTM E96**.
*   **Result:** $0.05$ g/$m^2 \cdot$ day.
*   **Conclusion:** The HDPE carboy provides an excellent moisture barrier, maintaining the nominal concentration of Glucogen-XR ($150$ mg/mL) within $\pm 0.5\%$ over an accelerated 6-month study.

---

### **7.0 COMPONENT SPECIFICATION SUMMARY TABLE**

| Component | Material | Manufacturer | Drawing Number | Key Specification |
| :--- | :--- | :--- | :--- | :--- |
| **Carboy Body** | HDPE | Google Health Sciences | GHS-DWG-001 | Wall thickness $\geq 2.0$ mm |
| **Screw Cap** | Polypropylene | GHS Plastic Molding | GHS-DWG-002 | Torque range 40-60 Nm |
| **Gasket** | Silicone (Pt-cured) | GHS Elastomers | GHS-DWG-003 | Durometer (Shore A) 65 |

---

### **8.0 REGULATORY COMPLIANCE STATEMENT**
The container closure system for Glucogen-XR has been evaluated and found to be compliant with:
1.  **USP <661.1>** Plastic Materials of Construction.
2.  **USP <661.2>** Plastic Packaging Systems for Pharmaceutical Use.
3.  **USP <87>** Biological Reactivity Tests, In Vitro.
4.  **USP <88>** Biological Reactivity Tests, In Vivo (Class VI).
5.  **EP 3.1.3** Polyolefins.
6.  **FDA 21 CFR 177.1520** Olefin Polymers.

All manufacturing is performed under cGMP at the South San Francisco facility (FEI: 3000-INN-CA). Batch records for all CCS components are archived for 15 years post-distribution.

---
**[End of Subsection 3.2.S.6.1]**

---

## Certificates of Conformance

# MODULE 3: QUALITY (DRUG SUBSTANCE)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.4: CERTIFICATES OF CONFORMANCE (CoC) AND ANALYTICAL VERIFICATION

---

**Document ID:** GHS-GLUC-M3-DS-CONT-004  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Manufacturing Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Date:** 15 October 2025  
**Confidentiality:** Highly Confidential – Proprietary Manufacturing Information  

---

### 1.0 INTRODUCTION AND REGULATORY SCOPE

This section provides a comprehensive repository and technical analysis of the Certificates of Conformance (CoC) and Certificates of Analysis (CoA) for the primary container closure system (CCS) used for the storage and shipment of Glucogen-XR Drug Substance (DS). 

The primary container for Glucogen-XR DS is a 10L Sartorius Stedim Biotech Celsius® FFT (Flexible Freeze-Thaw) Bag system, utilized in conjunction with the Google Health Sciences (GHS) proprietary cryogenic management platform. 

All components are qualified in accordance with:
*   **USP <661.1>:** Plastic Materials of Construction
*   **USP <661.2>:** Plastic Packaging Systems for Pharmaceutical Use
*   **USP <87>:** Biological Reactivity Test, In Vitro
*   **USP <88>:** Biological Reactivity Test, In Vivo (Class VI)
*   **ISO 10993:** Biological Evaluation of Medical Devices
*   **ICH Q6B:** Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products

### 2.0 COMPONENT IDENTIFICATION AND TRACEABILITY

The Glucogen-XR Drug Substance is contained within a multi-layer film structure (S71 Film). Every batch of containers delivered to the South San Francisco facility undergoes a mandatory Quality Assurance (QA) reconciliation against the manufacturer’s CoC.

#### Table 2.1: Primary Container Component Mapping

| Component Description | Manufacturer | Catalog Number | GHS Internal Part ID | Material of Construction |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Bag (10L)** | Sartorius Stedim | FFT-10L-S71 | GHS-CCS-001 | Ethyl Vinyl Acetate (EVA) / EVOH / PE |
| **Transfer Tubing** | AdvantaPure | APST-0375-0500 | GHS-CCS-002 | Platinum-Cured Silicone |
| **Aseptic Connector** | Colder Products Co (CPC) | MPC-1234-QS | GHS-CCS-003 | Medical Grade Polycarbonate |
| **Sampling Port** | Sartorius Stedim | TAKE-OFF-S71 | GHS-CCS-004 | Multi-layer Film / Silicone Septum |

---

### 3.0 DETAILED CERTIFICATE OF CONFORMANCE DATA (BATCH-SPECIFIC)

The following tables represent the consolidated CoC data for the container lots used during the production of Glucogen-XR DS registration batches (GLUC-2025-001 through GLUC-2025-015).

#### Table 3.1: Consolidated CoC Results - Film Integrity and Biological Safety

| Test Parameter | Methodology | Specification Limits | Result (Batch: GLUC-2025-001-C) | Result (Batch: GLUC-2025-002-C) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **USP <87> Reactivity** | L929 MEM Elution | No Reactivity (Grade 0) | Grade 0 | Grade 0 | Pass |
| **USP <88> Class VI** | Systemic/Intracutaneous | No Adverse Reaction | Meets Requirements | Meets Requirements | Pass |
| **Bacterial Endotoxins** | USP <85> (LAL) | < 0.25 EU/mL | < 0.005 EU/mL | < 0.005 EU/mL | Pass |
| **Particulate Matter** | USP <788> | < 25 per mL (≥10µm) | 1.2 per mL | 0.9 per mL | Pass |
| **TOC (Total Organic Carbon)** | USP <643> | < 500 ppb | 112 ppb | 108 ppb | Pass |
| **Water Conductivity** | USP <645> | < 1.3 µS/cm | 0.82 µS/cm | 0.79 µS/cm | Pass |

---

### 4.0 EXTRACTABLES AND LEACHABLES (E&L) CERTIFICATION PROTOCOL

Google Health Sciences mandates a rigorous extractable profile verification for every new resin lot used in the S71 film production. The CoC provided by the vendor is verified by GHS via Headspace Gas Chromatography-Mass Spectrometry (HS-GC-MS) and Inductively Coupled Plasma Mass Spectrometry (ICP-MS).

#### 4.1 Extractable Testing Protocol (Internal Verification GHS-SOP-552)

1.  **Extraction Media Selection:**
    *   WFI (Water for Injection)
    *   50% Ethanol (Ethanol/Water)
    *   0.1 M HCl
    *   0.1 M NaOH
2.  **Surface-to-Volume Ratio:** 6 cm²/mL
3.  **Temperature/Time:** 40°C for 21 days (Accelerated)
4.  **Analytical Thresholds:**
    *   Analytical Evaluation Threshold (AET): 1.5 µg/day (based on Chronic Dosing for Type 2 Diabetes)
    *   Safety Concern Threshold (SCT): 0.15 µg/day

#### Table 4.2: Extraction Profile Verification Data (Lot GLUC-2025-X102)

| Analyte | Identity | Concentration (µg/mL) | AET Comparison | Risk Assessment |
| :--- | :--- | :--- | :--- | :--- |
| BHT | Antioxidant | 0.04 | Below AET | Negligible |
| Irganox 1010 | Processing Stabilizer | 0.02 | Below AET | Negligible |
| Stearic Acid | Lubricant | 0.11 | Below AET | Negligible |
| Aluminum | Catalyst Residue | < 0.001 | Below AET | Negligible |

---

### 5.0 STERILIZATION VALIDATION AND DOSIMETRY RECORDS

All Glucogen-XR DS containers are sterilized via Gamma Irradiation. The CoC must confirm that the absorbed dose falls within the validated range required to achieve a Sterility Assurance Level (SAL) of $10^{-6}$.

#### 5.1 Gamma Irradiation Parameters
*   **Validated Dose Range:** 25.0 kGy to 45.0 kGy
*   **Reference Standard:** ISO 11137-2 (VDmax25)

#### Table 5.1: Dosimetry Results for Container Batches

| Container Batch ID | Irradiation Site ID | Min Dose Received (kGy) | Max Dose Received (kGy) | Date of Sterilization |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001-S** | STERIS-CA-01 | 27.4 | 38.2 | 12-JAN-2025 |
| **GLUC-2025-005-S** | STERIS-CA-01 | 28.1 | 39.5 | 04-FEB-2025 |
| **GLUC-2025-010-S** | STERIS-CA-01 | 26.9 | 37.1 | 15-MAR-2025 |

---

### 6.0 MECHANICAL INTEGRITY AND PHYSICOCHEMICAL SPECIFICATIONS

The CoC for the Glucogen-XR DS containers includes mechanical stress testing results, particularly critical for frozen storage at -80°C.

#### 6.1 Tensile Strength and Elongation
Calculations for tensile stress ($\sigma$) are performed according to ASTM D882:
$$\sigma = \frac{F}{A}$$
Where:
*   $F$ = breaking force (N)
*   $A$ = cross-sectional area ($mm^2$)

#### Table 6.1: Physical Property Verification

| Test | Method | Specification | Actual Result (Avg) |
| :--- | :--- | :--- | :--- |
| **Tensile Strength (MD)** | ASTM D882 | ≥ 20 MPa | 24.5 MPa |
| **Tensile Strength (TD)** | ASTM D882 | ≥ 18 MPa | 22.1 MPa |
| **Burst Pressure** | Internal SOP-99 | ≥ 2.5 bar | 3.1 bar |
| **Low Temp Brittleness** | ASTM D746 | Pass at -80°C | No Cracking Observed |

---

### 7.0 QUALITY ASSURANCE STATEMENT AND SIGN-OFF

The undersigned Quality Lead for Google Health Sciences confirms that the Certificates of Conformance for all container batches associated with Glucogen-XR (glucapeptide extended-release) have been reviewed and found to be in full compliance with the regulatory requirements of 21 CFR Part 211.94 and ICH Q7.

Any deviations from the container specifications (e.g., out-of-specification dosimetry) result in immediate quarantine and the generation of a Non-Conformance Report (NCR) within the Google Quality Management System (QMS).

**Signed:**
*Dr. Amara Singh*
Global Head of Quality Regulatory Affairs
Google Health Sciences
3000 Innovation Drive, South San Francisco, CA

---

### 8.0 REFERENCES

1.  **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics (1999)*.
2.  **USP <1663>:** *Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems*.
3.  **USP <1664>:** *Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems*.
4.  **ISO 11607-1:** *Packaging for terminally sterilized medical devices*.
5.  **Technical Report No. 66 (PDA):** *Application of Single-Use Systems in Pharmaceutical Manufacturing*.

---
*End of Subsection 3.2.S.6.4*

---

# Extractables and Leachables Studies

## Extractables Profile

### **Module 3: Quality (Chemistry, Manufacturing, and Controls)**
### **Section 3.2.S.6: Container Closure System**
### **Subsection 3.2.S.6.2.1: Extractables Profile – Glucogen-XR (glucapeptide extended-release)**

---

#### **1.0 Introduction and Scope**
The assessment of the extractables profile for the Glucogen-XR primary container closure system (CCS) and the associated manufacturing single-use systems (SUS) is a critical component of the safety and compatibility evaluation for Google Health Sciences’ glucapeptide extended-release formulation. 

Glucogen-XR is a long-acting GLP-1 receptor agonist produced in the GHS-CHO-001 cell line. Given the presence of complex excipients (including specialized lipids for extended release) and the peptide's sensitivity to sub-visible particulates and chemical impurities, a comprehensive extractables study was conducted to identify potential migrant species under "worst-case" exaggerated conditions.

This report documents the extractables profile for the following components:
1.  **Primary Drug Substance Storage Container:** 10L High-Density Polyethylene (HDPE) Carboys with Polypropylene (PP) closures.
2.  **Manufacturing Single-Use Assemblies:** Platinum-cured silicone tubing, Polyethersulfone (PES) filter membranes, and Ethylene-vinyl acetate (EVA) bioprocess bags.
3.  **Final Drug Product Container:** Type I Borosilicate glass syringes with FluroTec® coated bromobutyl rubber plungers.

---

#### **2.0 Regulatory Compliance Framework**
All extractables studies were performed in accordance with the following international standards and regulatory guidance:
*   **USP <1663>:** *Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.*
*   **USP <1664>:** *Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems.*
*   **ICH Q3D(R2):** *Guideline for Elemental Impurities.*
*   **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.*
*   **FDA Guidance for Industry:** *Container Closure Systems for Packaging Human Drugs and Biologics (1999).*
*   **PQRI (Product Quality Research Institute):** *Safety Thresholds and Best Practices for Extractables and Leachables in Non-Inhalation Drug Products.*

---

#### **3.0 Component Characterization and Material Specifications**

The materials listed below were subjected to controlled extraction studies (CES). Each component was traced via the Google Health Sciences Supply Chain Management System (GS-SCM).

**Table 3.1: Component Description and Materials of Construction**

| Component ID | Description | Manufacturer | Material of Construction (MOC) | Batch Number |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-CCS-001** | DS Storage Carboy (10L) | Thermo Fisher Scientific | HDPE (High-Density Polyethylene) | GLUC-2025-X01 |
| **GHS-CCS-002** | Carboy Closure | Thermo Fisher Scientific | PP (Polypropylene) | GLUC-2025-X02 |
| **GHS-CCS-003** | Transfer Tubing | Saint-Gobain | Platinum-cured Silicone | GLUC-2025-X03 |
| **GHS-CCS-004** | Sterile Filter (0.22µm) | MilliporeSigma | PES (Polyethersulfone) / PP Housing | GLUC-2025-X04 |
| **GHS-CCS-005** | Pre-filled Syringe Barrel | BD Neopak | Type I Borosilicate Glass | GLUC-2025-X05 |
| **GHS-CCS-006** | Syringe Plunger Stopper | West Pharmaceutical | Bromobutyl Rubber (FluroTec® coated) | GLUC-2025-X06 |

---

#### **4.0 Extraction Methodology and Experimental Design**

##### **4.1 Solvents Selection Rationale**
To bracket the polarity and chemical properties of the Glucogen-XR formulation (pH 7.4, phosphate-buffered saline with polysorbate 80 and lipid-based stabilizers), three solvents of varying polarity were utilized:
1.  **Polar:** Ultrapure Water (UPW) adjusted to pH 2.0 and pH 10.0.
2.  **Semi-Polar:** 50% Ethanol / 50% UPW (v/v).
3.  **Non-Polar:** n-Hexane.

##### **4.2 Extraction Conditions (Time/Temperature)**
The extractions were performed under exaggerated conditions to ensure a robust safety margin, exceeding the expected shelf-life temperatures of Glucogen-XR (stored at 2-8°C, with excursions up to 25°C).

*   **Condition A (Sustained Heat):** 55°C for 21 days (modeling long-term storage).
*   **Condition B (Aggressive/Reflux):** Reflux in n-Hexane at 69°C for 24 hours (specific to polymer breakdown).
*   **Condition C (Microwave-Assisted):** For metallic elements (ICH Q3D) using concentrated Nitric Acid ($HNO_3$).

##### **4.3 Analytical Techniques and Instrumentation**
The identification and quantification of extractables were performed using a multi-detector approach:
*   **Volatile Organic Compounds (VOCs):** Headspace Gas Chromatography-Mass Spectrometry (HS-GC-MS).
*   **Semi-Volatile Organic Compounds (SVOCs):** Direct Injection GC-MS.
*   **Non-Volatile Organic Compounds (NVOCs):** Liquid Chromatography-High Resolution Mass Spectrometry (LC-HRMS - QToF).
*   **Elemental Impurities:** Inductively Coupled Plasma-Mass Spectrometry (ICP-MS).
*   **Total Organic Carbon (TOC):** USP <643> methodology.
*   **Non-Volatile Residue (NVR):** Gravimetric analysis.

---

#### **5.0 Detailed Extraction Protocols**

##### **5.1 Protocol for HDPE Carboy (GHS-CCS-001)**
1.  **Preparation:** Three carboys from batch GLUC-2025-X01 were rinsed with UPW to remove surface debris.
2.  **Filling:** Carboys were filled to 100% nominal volume with the respective extraction solvent.
3.  **Sealing:** Closures (GHS-CCS-002) were applied at the validated torque of 10.0 N-m.
4.  **Incubation:** Carboys were placed in a validated stability chamber at 55°C ± 2°C for 21 days.
5.  **Sampling:** At the end of the period, 500 mL aliquots were withdrawn for analysis.
6.  **Concentration:** For SVOC/NVOC analysis, solvent aliquots were concentrated 10x using a rotary evaporator at 40°C under vacuum.

##### **5.2 Protocol for Elastomeric Plungers (GHS-CCS-006)**
1.  **Surface-to-Volume Ratio:** Extractions were performed at a ratio of 2.0 $cm^2/mL$.
2.  **Solvent:** 50% Ethanol (modeling the surfactant properties of Polysorbate 80).
3.  **Agitation:** Plungers were placed in sealed borosilicate vials and agitated at 100 RPM in a 55°C water bath for 72 hours.

---

#### **6.0 Extractables Results and Data Tables**

##### **6.1 Table of Detected Organic Extractables**
The following table summarizes the identified species, their source, and the concentration found in the 50% Ethanol extract (the most representative worst-case solvent).

**Table 6.1: Summary of Organic Extractables (GC-MS and LC-HRMS)**

| Analyte ID | Chemical Name | CAS No. | Source | Max Conc. ($\mu g/mL$) | Detection Method | Safety Threshold (AET) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **EXT-01** | BHT (Butylated hydroxytoluene) | 128-37-0 | Antioxidant (PE/PP) | 0.45 | GC-MS | 0.15 |
| **EXT-02** | Irgafos 168 | 31570-04-4 | Process Stabilizer | 1.20 | LC-MS | 0.15 |
| **EXT-03** | Irgafos 168 Oxidized | 95906-11-9 | Degradant of EXT-02 | 0.88 | LC-MS | 0.15 |
| **EXT-04** | Stearic Acid | 57-11-4 | Lubricant (Rubber) | 3.10 | GC-MS | 0.15 |
| **EXT-05** | Palmitic Acid | 57-10-3 | Lubricant (Rubber) | 2.45 | GC-MS | 0.15 |
| **EXT-06** | Erucamide | 112-84-5 | Slip Agent (PE) | 0.12 | LC-MS | 0.15 |
| **EXT-07** | Cyclic Siloxanes (D3-D6) | Various | Silicone Tubing | 0.08 | HS-GC-MS | 0.15 |
| **EXT-08** | 2,4-Di-tert-butylphenol | 96-76-4 | Degradant | 0.55 | GC-MS | 0.15 |

##### **6.2 Analytical Evaluation Threshold (AET) Calculation**
The AET was calculated based on the PQRI recommendation for parenteral products, using a Safety Concern Threshold (SCT) of 1.5 $\mu g/day$.

$$AET = \frac{SCT \times D_t}{D_d \times n}$$

Where:
*   $SCT$ = 1.5 $\mu g/day$
*   $D_t$ = Doses per container (1 dose/syringe)
*   $D_d$ = Daily dose (1.0 mL)
*   $n$ = Concentration factor (10x)

**Resulting AET:** 0.15 $\mu g/mL$. All peaks above this threshold were identified and subjected to toxicological risk assessment.

##### **6.3 Table of Elemental Impurities (ICP-MS)**
Extractions were performed using 5% $HNO_3$ at 55°C for 10 days.

**Table 6.2: Elemental Impurities Profile (ICH Q3D Reference)**

| Element | Class | Result ($\mu g/L$) | LOD ($\mu g/L$) | PDE (Parenteral) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cadmium (Cd)** | 1 | < 0.01 | 0.01 | 2 $\mu g/day$ | Pass |
| **Lead (Pb)** | 1 | 0.05 | 0.02 | 5 $\mu g/day$ | Pass |
| **Arsenic (As)** | 1 | < 0.05 | 0.05 | 15 $\mu g/day$ | Pass |
| **Mercury (Hg)** | 1 | < 0.01 | 0.01 | 3 $\mu g/day$ | Pass |
| **Cobalt (Co)** | 2A | 0.12 | 0.05 | 5 $\mu g/day$ | Pass |
| **Vanadium (V)** | 2A | < 0.10 | 0.10 | 10 $\mu g/day$ | Pass |
| **Nickel (Ni)** | 2A | 0.45 | 0.10 | 20 $\mu g/day$ | Pass |
| **Aluminum (Al)** | 4 | 12.4 | 1.00 | N/A (USP <1>) | Pass |

---

#### **7.0 Toxicological Risk Assessment of Extractables**

Each identified extractable exceeding the AET (0.15 $\mu g/mL$) was evaluated by a board-certified toxicologist. 

*   **Irgafos 168 / Oxidized Form:** The total concentration (2.08 $\mu g/mL$) is well below the calculated NOAEL (No Observed Adverse Effect Level) for this class of phosphite stabilizers. No genotoxic potential identified via Derek Nexus™ QSAR analysis.
*   **Fatty Acids (Stearic/Palmitic):** These are endogenous substances and are considered "Generally Recognized as Safe" (GRAS) at the levels detected.
*   **BHT:** The detected level of 0.45 $\mu g/mL$ results in a daily exposure of 0.45 $\mu g$, which is significantly below the ADI (Acceptable Daily Intake) of 0.3 mg/kg body weight.

---

#### **8.0 Summary of Single-Use Systems (SUS) Extractables**

The Glucogen-XR manufacturing process utilizes a single-use flow path. The extractables profile for the SUS was evaluated using the **BPOG (BioPhorum Operations Group)** standardized extraction protocol.

**Table 8.1: BPOG Protocol Extraction Results for EVA Bioprocess Bags (GLUC-2025-X09)**

| Extraction Solvent | Temp/Time | TOC (ppm) | pH Change | UV Abs (214nm) |
| :--- | :--- | :--- | :--- | :--- |
| 0.1 M HCl | 40°C / 7 days | 4.2 | +0.1 | 0.05 |
| 0.1 M NaOH | 40°C / 7 days | 12.8 | -0.2 | 0.18 |
| 50% EtOH | 40°C / 7 days | 85.0 | N/A | 1.45 |
| WFI | 40°C / 7 days | 2.1 | ±0.05 | 0.02 |

*Detailed MS-spectra for SUS extractables are located in Appendix 3.2.S.6.2.1-A.*

---

#### **9.0 Conclusion**

The controlled extraction studies for the Glucogen-XR container closure systems and manufacturing components demonstrate a low risk of chemical migration. All detected species have been identified, and their concentrations are significantly below toxicological safety limits. 

The data generated in this "Extractables Profile" subsection serves as the "fingerprint" for the subsequent Leachable Studies (Section 3.2.S.6.2.2), where the Glucogen-XR drug substance will be monitored throughout its shelf life for the presence of these specific analytes under real-time storage conditions.

---

**End of Subsection**
**Authorized by:** *Director of Regulatory Affairs, Google Health Sciences*
**Date:** 24 May 2025
**Document ID:** GHS-GLUC-M3-DS-CCS-EXT-001

---

## Leachables Assessment

### 3.2.S.6 Container Closure System
#### 3.2.S.6.2 Extractables and Leachables Studies
##### 3.2.S.6.2.2 Leachables Assessment for Glucogen-XR (glucapeptide extended-release) Drug Substance

---

### 1.0 EXECUTIVE SUMMARY
The Leachables Assessment for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences, provides a comprehensive toxicological and chemical evaluation of potential migratory species originating from the Primary Packaging Component (PPC) and Secondary Packaging Component (SPC) systems. Given the nature of Glucogen-XR as a long-acting GLP-1 receptor agonist peptide, the assessment focuses on the potential for organic and inorganic leachables to impact the stability, safety, and immunogenicity profile of the drug substance.

This assessment follows the regulatory framework established by:
*   **USP <1663>** Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **USP <1664>** Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **ICH Q3D(R2)** Guideline for Elemental Impurities.
*   **PQRI (Product Quality Research Institute)** Recommendations for Parenteral and Ophthalmic Drug Products (PODP).
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (1999).

The study confirms that all identified leachables remain below the Safety Concern Threshold (SCT) of 0.15 µg/day and the Analytical Evaluation Threshold (AET) calculated specifically for the Glucogen-XR dosing regimen.

---

### 2.0 SCOPE AND OBJECTIVES
The scope of this document encompasses the identification, quantification, and toxicological risk characterization of leachables in Glucogen-XR drug substance stored in the commercial primary container closure system (CCS) under long-term (5°C ± 3°C) and accelerated (25°C ± 2°C / 60% RH) storage conditions.

**Primary Objectives:**
1.  To monitor the migration of chemical species from the CCS into the Glucogen-XR matrix over a 24-month stability period.
2.  To correlate leachable profiles with previously established extractable profiles (Section 3.2.S.6.2.1).
3.  To assess the impact of leachables on the peptide's secondary and tertiary structure (aggregation/misfolding).
4.  To establish the Analytical Evaluation Threshold (AET) based on the Maximum Daily Dose (MDD) of Glucogen-XR.

---

### 3.0 MATERIALS AND CONTAINER CLOSURE SYSTEM SPECIFICATIONS
The Glucogen-XR Drug Substance is housed in a high-performance storage system designed for peptide stability.

#### 3.1 Primary Packaging Components (PPC)
| Component ID | Description | Material of Construction | Manufacturer |
| :--- | :--- | :--- | :--- |
| GHS-CCS-001 | 10 mL Type I Borosilicate Glass Vial | USP/EP Type I Borosilicate | Corning/Schott |
| GHS-CCS-002 | 20mm FluroTec® Stopper | Bromobutyl rubber with ETFE film | West Pharmaceutical |
| GHS-CCS-003 | 20mm Flip-Off® Seal | Aluminum/Polypropylene | West Pharmaceutical |

#### 3.2 Test Batches (Registration Batches)
The following batches of Glucogen-XR were utilized for the formal Leachables Assessment:

| Batch Number | Scale | Date of Manufacture | Site of Manufacture |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-JAN-2025 | 3000 Innovation Drive, SSF, CA |
| **GLUC-2025-002** | 2000L | 02-FEB-2025 | 3000 Innovation Drive, SSF, CA |
| **GLUC-2025-003** | 2000L | 22-MAR-2025 | 3000 Innovation Drive, SSF, CA |

---

### 4.0 ANALYTICAL EVALUATION THRESHOLD (AET) CALCULATIONS
The AET is the concentration at or above which a leachable must be identified and reported for toxicological assessment.

**Parameters:**
*   **Safety Concern Threshold (SCT):** 0.15 µg/day (Standard for parenteral biologics).
*   **Maximum Daily Dose (MDD) of Glucogen-XR:** 2.0 mg of peptide in 0.5 mL volume.
*   **Number of Doses per Container (n):** 20 (multi-dose vial formulation).
*   **Uncertainty Factor (UF):** 3.0 (Accounting for analytical variability and response factor variation).

**Formula:**
$$AET = \frac{SCT}{MDD \times UF} \times \frac{V_t}{n}$$

*Where:*
*   $SCT = 0.15 \mu g/day$
*   $V_t = 10 mL$ (total volume in vial)
*   $n = 1$ (conservative approach assuming single dose concentration impact)

**Calculated AET for Glucogen-XR:**
$$AET_{conc} = \frac{0.15 \mu g/day}{1 \text{ dose/day} \times 3.0} = 0.05 \mu g/mL \text{ (or 50 ppb)}$$

Any signal in the chromatographic profile exceeding the response equivalent to 50 ppb of the internal standard is subjected to identification via Mass Spectrometry (HRMS).

---

### 5.0 ANALYTICAL METHODOLOGIES
The Glucogen-XR leachables program utilizes a "Multi-Detector Orthogonal Approach" to ensure no chemical species are missed due to ionization bias or UV inactivity.

#### 5.1 HS-GC-MS (Volatile Organic Compounds)
*   **System:** Agilent 8890 GC / 5977B MSD with 7697A Headspace Sampler.
*   **Column:** DB-624 UI (30m x 0.25mm x 1.4µm).
*   **Oven Program:** 40°C (hold 5 min) to 240°C at 10°C/min.
*   **Target Analytes:** Residual solvents, monomers (e.g., 1,3-butadiene), low molecular weight siloxanes.

#### 5.2 GC-MS (Semi-Volatile Organic Compounds)
*   **Extraction:** Dichloromethane (DCM) liquid-liquid extraction of the DS.
*   **System:** Thermo Scientific Trace 1310 / ISQ 7000.
*   **Column:** HP-5MS UI.
*   **Target Analytes:** Plasticizers (Phthalates), Antioxidants (Irganox 1010, Irgafos 168), Vulcanization agents.

#### 5.3 LC-HRMS (Non-Volatile Organic Compounds)
*   **System:** Waters ACQUITY UPLC / Orbitrap Exploris 120.
*   **Mobile Phase A:** 0.1% Formic Acid in Water.
*   **Mobile Phase B:** 0.1% Formic Acid in Acetonitrile.
*   **Gradient:** 5% to 95% B over 20 minutes.
*   **Ionization:** ESI (+/-) and APCI.
*   **Target Analytes:** Polymer degradation products, slip agents (Erucamide), photoinitiators.

#### 5.4 ICP-MS (Elemental Impurities)
*   **System:** Agilent 7800 ICP-MS.
*   **Sample Prep:** Microwave-assisted acid digestion (HNO3/HCl).
*   **Elements:** Target list per ICH Q3D (As, Cd, Hg, Pb, V, Co, Ni, Cu, Li, Sb, Ba, Mo, Sn, Cr).

---

### 6.0 RESULTS AND DATA TABLES

#### 6.1 Summary of Leachables Detected in Batch GLUC-2025-001 (T=24 Months, 5°C)
The following table summarizes findings from the primary stability batch.

| Analyte ID | Tentative Identification | Source | Max Conc. Found (µg/mL) | AET (µg/mL) | Toxicological Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **L-001** | BHT (Butylated hydroxytoluene) | Stopper | 0.012 | 0.05 | Below AET |
| **L-002** | Palmitic Acid | Processing Aid | 0.041 | 0.05 | Below AET |
| **L-003** | Stearic Acid | Processing Aid | 0.038 | 0.05 | Below AET |
| **L-004** | Cyclo-di-BA (Nylon oligomer) | Secondary Pkg | 0.004 | 0.05 | Trace |
| **L-005** | Al (Aluminum) | Glass/Crimping | 0.022 | N/A | < USP <232> |
| **L-006** | Si (Silicon) | Glass/Coating | 0.115 | N/A | Normal for Type I |

#### 6.2 Comparison of Stability Data (Batch GLUC-2025-001 vs. GLUC-2025-002)
Comparative analysis of two independent batches at T=12 months accelerated (25°C).

| Analyte | GLUC-2025-001 (µg/mL) | GLUC-2025-002 (µg/mL) | RPD (%) |
| :--- | :--- | :--- | :--- |
| Irganox 1010 Degradant | 0.008 | 0.009 | 11.7 |
| 2,4-di-tert-butylphenol | 0.015 | 0.014 | 6.8 |
| Caprolactam | 0.021 | 0.023 | 9.1 |

---

### 7.0 TOXICOLOGICAL RISK ASSESSMENT (TRA)
A formal risk assessment was conducted for all leachables detected, even those below the AET.

#### 7.1 Compound: 2,4-di-tert-butylphenol (2,4-DTBP)
*   **CAS No:** 96-76-4
*   **Observed Concentration:** 0.015 µg/mL.
*   **Daily Intake Calculation:** $0.015 \mu g/mL \times 0.5 mL/day = 0.0075 \mu g/day$.
*   **Permissible Daily Exposure (PDE):** 50 µg/day (based on NOAEL of 5 mg/kg/day).
*   **Margin of Safety (MoS):** $> 6000$.
*   **Conclusion:** The levels of 2,4-DTBP present no safety risk to patients.

#### 7.2 Impact on Peptide Conformation
To evaluate the potential for "protein-leachable interaction," Google Health Sciences conducted Circular Dichroism (CD) and Size Exclusion Chromatography (SEC-MALS) on samples containing the highest observed leachable levels.
*   **Result:** No significant change in alpha-helical content was observed in GLUC-2025-001 at T=24 compared to T=0.
*   **Aggregation:** High Molecular Weight Species (HMWS) remained <0.5% for all batches, indicating that leachables (specifically siloxanes or fatty acids) are not seeding aggregation.

---

### 8.0 PROTOCOL FOR FUTURE LEACHABLE MONITORING (ANNUAL)
As part of the Post-Approval Monitoring Program (PAMP), Google Health Sciences will perform the following:
1.  **Sample Selection:** One commercial batch per year will be designated as the "Leachables Surveillance Batch."
2.  **Sampling Intervals:** 0, 12, 24, and 36 months.
3.  **Acceptance Criteria:**
    *   No unidentified leachable > AET (0.05 µg/mL).
    *   Total organic leachables < 0.5 µg/mL.
    *   Elemental impurities within ICH Q3D specifications.
4.  **Deviation Management:** Any new leachable detected must trigger a Q3R (Quality Risk Review) and be evaluated by the Corporate Toxicologist.

---

### 9.0 CONCLUSION
The Leachables Assessment for Glucogen-XR Drug Substance demonstrates that the Primary Container Closure System (Corning Type I Glass and West FluroTec® Stoppers) is chemically compatible with the glucapeptide formulation. All detected species are significantly below the toxicological thresholds and do not interfere with the drug's safety, purity, or potency.

---

### 10.0 REFERENCES
1.  **USP <1663>** and **USP <1664>**, United States Pharmacopeia.
2.  **ICH Q3D(R2)** Guideline for Elemental Impurities.
3.  **PQRI PODP Working Group** Final Report (2021).
4.  Internal Google Health Sciences Report: *GHS-2024-L-TECH: Mass Spectrometric Identification of Rubber-Derived Oligomers.*

---
**Document End**
**Confidential - Google Health Sciences Internal/Regulatory Use Only**
**Approver:** *Dr. Alan Turing, Head of Regulatory Affairs*
**Date:** *22-MAY-2025*

---

## Risk Assessment and Acceptance Criteria

### **3.2.S.6 Container Closure System (Glucogen-XR)**
#### **3.2.S.6.2 Extractables and Leachables (E&L) Risk Assessment and Acceptance Criteria**

---

### **1.0. Scope and Executive Summary**

This subsection details the comprehensive **Risk Assessment and Acceptance Criteria** for extractables and leachables (E&L) associated with the Primary Packaging System (PPS) for **Glucogen-XR (glucapeptide extended-release)**. As a high-concentration peptide therapeutic intended for long-term chronic subcutaneous administration via a pre-filled syringe (PFS) and auto-injector assembly, Glucogen-XR falls under the "High Risk" category according to the FDA Guidance for Industry: *Container Closure Systems for Packaging Human Drugs and Biologics (1999)* and the *USP <1663>* and *USP <1664>* frameworks.

Google Health Sciences has implemented a Quality by Design (QbD) approach to E&L, utilizing the Analytical Evaluation Threshold (AET) to ensure that any potential migrant from the container closure system does not compromise the safety, potency, or stability of the glucapeptide active substance.

---

### **2.0. Regulatory and Guidance Framework**

The E&L program for Glucogen-XR was designed in accordance with the following international standards and regulatory expectations:

*   **FDA Guidance:** *Container Closure Systems for Packaging Human Drugs and Biologics (May 1999)*.
*   **ICH Q3D(R2):** *Guideline for Elemental Impurities*.
*   **ICH Q6B:** *Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*.
*   **USP <1663>:** *Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <1664>:** *Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <381>:** *Elastomeric Components in Injection Packaging/Delivery Systems*.
*   **PQRI (Product Quality Research Institute):** *Recommendations for Parenteral and Ophthalmic Drug Products (PODP)*.
*   **ISO 10993-18:** *Chemical characterization of medical device materials within a risk management process*.

---

### **3.0. Risk Assessment Methodology (FMEA)**

Google Health Sciences utilized a **Failure Mode and Effects Analysis (FMEA)** to quantify the risk of leachables. Each component of the PPS was evaluated based on material composition, contact surface area, and proximity to the drug substance.

#### **Table 3.2.S.6.2-1: Risk Priority Number (RPN) Matrix for PPS Components**

| Component ID | Material of Construction | Function | Surface Area Contact (cm²) | Solubility Risk (Lipophilicity) | RPN Score | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PFS-001** | Type I Borosilicate Glass (Flint) | Primary Reservoir | 4.85 | Low | 12 | Low |
| **PLN-002** | Bromobutyl Rubber (Flouro-polymer coated) | Plunger Stopper | 1.12 | Moderate | 45 | Moderate |
| **NDL-003** | 29G Stainless Steel (304L) | Subcutaneous Needle | 0.08 | Low | 8 | Low |
| **ADH-004** | UV-Cured Acrylate Adhesive | Needle Bonding | <0.01 | High | 60 | High |
| **LUB-005** | Medical Grade Silicone Oil (1000 cSt) | Lubricant | N/A | High | 72 | High |
| **CAP-006** | Synthetic Isoprene | Needle Shield | Indirect | Low | 15 | Low |

**RPN Calculation Formula:**
$$RPN = S \times O \times D$$
*   **S (Severity):** Impact of leachable on peptide stability (1-10)
*   **O (Occurrence):** Probability of migration based on material chemistry (1-10)
*   **D (Detectability):** Ability to identify the compound via LC-MS/GC-MS (1-10)

---

### **4.0. Analytical Evaluation Threshold (AET) Derivation**

The AET is the concentration threshold at or above which an extractable or leachable must be identified and reported. For Glucogen-XR, the AET is derived based on the Safety Concern Threshold (SCT) of **1.5 µg/day**, consistent with the PQRI recommendations for parenteral products.

#### **4.1. Calculation Parameters**
*   **SCT (Safety Concern Threshold):** 1.5 µg/day.
*   **Maximum Daily Dose (MDD):** 1.0 mL (one full syringe injection per day).
*   **Syringes per Container:** 1.
*   **Dilution Factor:** 1.0.
*   **Uncertainty Factor (UF):** 3.0 (to account for analytical response variation across different chemical classes).

#### **4.2. Formula**
$$AET = \frac{SCT}{MDD \times UF}$$

$$AET = \frac{1.5 \mu g/day}{1.0 mL/day \times 3.0} = 0.5 \mu g/mL (500 ng/mL)$$

**Acceptance Criterion:** Any peak detected in the leachable studies exceeding **0.5 µg/mL** must be structurally identified and toxicologically assessed.

---

### **5.0. Extractables Study Protocol and Results**

Controlled Extraction Studies (CES) were performed on the primary components using "worst-case" solvent polarity (Water, IPA, and Hexane) and exaggerated conditions (Reflux for 24 hours).

#### **Table 3.2.S.6.2-2: Extractables Profile for Plunger Stopper (Batch GLUC-2025-012X)**

| Compound ID | Retention Time (min) | Tentative Identification | Method | Quantified Amt (µg/device) | Threshold Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **EXT-01** | 12.45 | BHT (Butylated hydroxytoluene) | GC-MS | 2.15 | Above AET |
| **EXT-02** | 18.22 | Stearic Acid | LC-MS | 0.88 | Above AET |
| **EXT-03** | 22.10 | Palmitic Acid | LC-MS | 0.64 | Above AET |
| **EXT-04** | 5.30 | Cyclic Siloxane (D4) | GC-MS | 12.40 | Above AET |
| **EXT-05** | 31.15 | Irganox 1010 | LC-MS | 0.12 | Below AET |

---

### **6.0. Leachables Acceptance Criteria (Specification Table)**

Based on the extractables data and toxicological qualification, the following acceptance criteria have been established for the formal stability program of Glucogen-XR (Real-time and Accelerated).

#### **Table 3.2.S.6.2-3: Leachables Specification for Glucogen-XR Drug Substance**

| Analyte Class | Specific Marker | Analytical Method | Acceptance Limit | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Volatiles** | Benzene, Toluene | HS-GC-MS | $\le 1.0 ppm$ | USP <467> / ICH Q3C |
| **Semi-Volatiles** | BHT, BHT-quinone | GC-MS | $\le 0.5 \mu g/mL$ | SCT-derived AET |
| **Non-Volatiles** | Irganox 1010, 1076 | UHPLC-QTOF | $\le 0.5 \mu g/mL$ | SCT-derived AET |
| **Silicone Oil** | Polydimethylsiloxane | FTIR / Micro-flow | $\le 0.5 mg/syringe$ | Functionality/Sub-visible particles |
| **Elements** | Tungsten (W) | ICP-MS | $\le 50 ppb$ | Peptide aggregation risk |
| **Elements** | Aluminum (Al) | ICP-MS | $\le 25 ppb$ | USP <1664> |

---

### **7.0. Toxicological Assessment Strategy**

Any leachable exceeding the AET of 0.5 µg/mL undergoes a tiered toxicological evaluation:

1.  **Tier I: Structural Alert Check:** Utilization of DEREK Nexus or Toxtree for *in silico* mutagenicity (QSAR) assessment.
2.  **Tier II: Threshold of Toxicological Concern (TTC):** Comparison against known TTC values for parenteral administration.
3.  **Tier III: Permitted Daily Exposure (PDE):** Calculation of a compound-specific PDE if chronic toxicity data is available.

**PDE Calculation Formula:**
$$PDE = \frac{NOAEL \times Weight Adjustment}{F1 \times F2 \times F3 \times F4 \times F5}$$
*Where $F1-F5$ are safety factors for interspecies variation, individual variability, study duration, toxicity nature, and data completeness.*

---

### **8.0. Experimental Protocol: Leachable Determination in Drug Substance**

**Protocol Number:** GHS-LAB-PRO-0992
**Batch Support:** GLUC-2025-001, GLUC-2025-002, GLUC-2025-003

#### **8.1. Sample Preparation**
1.  Invert syringe 10 times to ensure homogeneity.
2.  Expel 1.0 mL of Glucogen-XR into a deactivated glass vial.
3.  Perform Liquid-Liquid Extraction (LLE) using Dichloromethane (DCM) for GC-compatible analytes.
4.  Perform Protein Precipitation using Acetonitrile (ACN) for LC-compatible analytes to prevent peptide interference with the column.

#### **8.2. Instrumentation Parameters (LC-MS/MS)**
*   **Column:** Waters Acquity UPLC BEH C18, 1.7 µm.
*   **Mobile Phase A:** 0.1% Formic Acid in Water.
*   **Mobile Phase B:** 0.1% Formic Acid in ACN.
*   **Gradient:** 5% B to 95% B over 15 minutes.
*   **Mass Spec:** Electrospray Ionization (ESI) in Positive/Negative switching mode.

---

### **9.0. Conclusion**

The risk assessment for Glucogen-XR extractables and leachables demonstrates that the chosen primary packaging system (Type I glass, Flouro-polymer coated bromobutyl rubber) is chemically compatible with the glucapeptide drug substance. The established **Acceptance Criteria of 0.5 µg/mL** for unknown leachables ensures that patient safety is maintained throughout the 24-month shelf life. All batch results to date (GLUC-2025-001 through 005) confirm that migrants remain well below the SCT.

---
*End of Subsection 3.2.S.6.2*

---

# Container Closure Integrity Testing

## Test Methods (Vacuum Decay, Helium Leak Detection)

# MODULE 3: QUALITY (3.2.S.6 CONTAINER CLOSURE SYSTEM)
## SECTION 3.2.S.6.2: CONTAINER CLOSURE INTEGRITY TESTING (CCIT)
### SUBSECTION 3.2.S.6.2.1: TEST METHODS (VACUUM DECAY AND HELIUM LEAK DETECTION)

---

#### 1.0 INTRODUCTION AND STRATEGIC RATIONALE

Google Health Sciences (GHS) employs a dual-methodology approach for the validation and routine monitoring of the Container Closure Integrity (CCI) of Glucogen-XR (glucapeptide extended-release). In accordance with **USP <1207> Package Integrity Evaluation—Sterile Products**, GHS has transitioned from probabilistic methods (e.g., microbial challenge or dye ingress) to deterministic physical methods.

The integrity of the primary packaging system—comprising a Type I borosilicate glass vial, a chlorobutyl elastomeric stopper with FluroTec® coating, and an aluminum flip-off seal—is critical to maintaining the sterility and stability of the Glucogen-XR drug substance. This document details the technical specifications, validation parameters, and operational protocols for:

1.  **Vacuum Decay (Method A):** Utilized for 100% non-destructive in-process testing and stability monitoring.
2.  **Helium Leak Detection (Method B):** Utilized for initial package design qualification, Maximum Allowable Leakage Limit (MALL) determination, and "worst-case" component fit analysis.

---

#### 2.0 METHOD A: VACUUM DECAY LEAK DETECTION (VDLD)

Vacuum Decay testing for Glucogen-XR is performed using the **VeriPac 455/V Core System** (Equipment ID: GHS-VAC-099), which operates on the principle of the ASTM F2338-09 standard.

##### 2.1 Principle of Operation
The test vial is placed in a custom-machined stainless steel test chamber (Chamber ID: VC-GLUC-01) designed to minimize dead space. A vacuum is pulled on the test chamber. After an initial equalization period, the pressure change ($\Delta P$) is monitored over a predetermined time interval ($\Delta t$). If the package has a defect, air or headspace gas will leak into the chamber, causing a rise in pressure that exceeds a predefined threshold (Pass/Fail limit).

##### 2.2 Technical Specifications and Equipment Configuration
| Parameter | Specification | Rationale |
| :--- | :--- | :--- |
| **Equipment Model** | VeriPac 455/V | Deterministic, non-destructive, high sensitivity |
| **Sensor Type** | Absolute Pressure Transducer | Precision in low-micron range |
| **Chamber Insert ID** | GHS-CI-2R-004 | Custom fit for 2R vial to minimize dead space |
| **Test Vacuum** | < 5.0 mbar (abs) | High vacuum required for peptide stability |
| **Transducer Sensitivity** | 0.01 Pa/sec | Detects leaks down to 1.5 - 2.0 $\mu$m |
| **Reference Standard** | NIST Traceable Capillary | Verified against certified leak rates |

##### 2.3 Method Development and Sensitivity (MALL Linkage)
The MALL for Glucogen-XR has been established at $10^{-6}$ mbar·L/s, correlating to a 2.0 $\mu$m orifice. Vacuum decay is validated to detect a 5.0 $\mu$m defect with 99.9% confidence, serving as a rapid surrogate for sterility assurance.

**Table 3.2.S.6.2.1-1: Vacuum Decay Validation Parameters (Batch: GLUC-2025-VAL-01)**
| Test Run ID | Defect Size ($\mu$m) | Target Leak Rate (Pa/s) | Observed $\Delta P$ (Pa) | Result |
| :--- | :--- | :--- | :--- | :--- |
| VAL-VD-01 | 0.0 (Control) | < 0.20 | 0.12 | PASS |
| VAL-VD-02 | 2.0 (Laser) | 0.45 - 0.60 | 0.58 | DETECTED |
| VAL-VD-03 | 5.0 (Laser) | 1.20 - 1.50 | 1.42 | DETECTED |
| VAL-VD-04 | 10.0 (Laser) | > 5.00 | 8.90 | DETECTED |

##### 2.4 Detailed Operational Protocol (SOP-GHS-QC-088)
1.  **System Preparation:** Verify the vacuum pump oil level and calibrate the pressure transducer using NIST-traceable weights and gauges.
2.  **Chamber Cleaning:** Clean the O-ring seal of the test chamber with 70% IPA; ensure no particulate matter exists in the "dead space" blocks.
3.  **Baseline Verification:** Perform three "Dry Runs" with an empty chamber to establish the Baseline Noise Floor ($N_f$).
4.  **Sample Loading:** Place Glucogen-XR vial (e.g., Batch GLUC-2025-001) into the chamber. Ensure the vial is at room temperature ($20-25^\circ C$).
5.  **Cycle Initiation:** 
    *   *Evacuation Phase:* 10.0 seconds to reach < 5 mbar.
    *   *Equalization Phase:* 5.0 seconds to allow for adiabatic cooling stabilization.
    *   *Test Phase:* 15.0 seconds monitoring of $\Delta P$.
6.  **Data Analysis:** The system calculates the slope ($m$) of the pressure rise.
    $$ \text{Result} = \frac{P_{final} - P_{initial}}{T_{test}} $$
7.  **Criteria:** If $\text{Result} > 0.40 \text{ Pa/s}$, the vial is rejected as a "Leaker."

---

#### 3.0 METHOD B: HELIUM LEAK DETECTION (HLD)

Helium Leak Detection is used for high-sensitivity qualification. This method follows **ASTM E499** and **USP <1207.2>**. GHS utilizes the **LDS-3000 Helium Mass Spectrometer** (Equipment ID: GHS-HEL-202).

##### 3.1 Principle of Operation (Helium Sniffer/Vacuum Mode)
Vials are placed in a pressurized helium environment (He-Bombing) or are filled with Helium during the stopper insertion process in the isolator. The vial is then placed in a vacuum chamber connected to a Mass Spectrometer tuned to the atomic mass of Helium-4.

##### 3.2 Maximum Allowable Leakage Limit (MALL) Analysis
For Glucogen-XR, the peptide is highly sensitive to oxidation. The MALL is defined as:
$$ Q_{MALL} = 6.0 \times 10^{-6} \text{ mbar}\cdot\text{L/s} $$
This value was derived using the **Kirsch Equation** for gas flow through micro-channels, ensuring that even after 24 months of storage, oxygen ingress remains below 0.5% v/v.

##### 3.3 Helium Leakage Data - Component Robustness Study
To validate the container closure system, Google Health Sciences performed a study on "Worst-Case" components (Minimum Stopper OD vs. Maximum Vial ID).

**Table 3.2.S.6.2.1-2: Helium Leak Rates for Batch GLUC-2025-QC (n=30)**
| Sample ID | Compression (%) | Helium Leak Rate (mbar·L/s) | Status |
| :--- | :--- | :--- | :--- |
| GLUC-2025-001-H1 | 18.5% | $1.2 \times 10^{-10}$ | PASS |
| GLUC-2025-001-H2 | 19.2% | $0.9 \times 10^{-10}$ | PASS |
| GLUC-2025-001-H3 | 15.1% (Low) | $4.4 \times 10^{-8}$ | PASS |
| GLUC-2025-001-H4 | 22.0% (High) | $0.8 \times 10^{-10}$ | PASS |
| **Positive Control** | **N/A** | $5.5 \times 10^{-6}$ | **FAIL (Expected)** |

##### 3.4 Procedure for Helium Leakage Testing
1.  **Helium Charging:** Vials are subjected to a 2.0 bar (abs) Helium environment for 12 hours in a pressure vessel (GHS-PV-01).
2.  **Surface De-gassing:** Vials are rinsed with compressed air for 60 seconds to remove surface-adsorbed helium (avoiding "ghost leaks").
3.  **Measurement:**
    *   Place vial in the test port.
    *   Evacuate the test port to $10^{-3}$ mbar.
    *   Open the valve to the Mass Spectrometer.
    *   Record the steady-state Helium leak rate over a 30-second window.
4.  **Calculation of Actual Leak Rate:**
    $$ Q_{actual} = \frac{Q_{measured}}{P_{He} \times t_{bomb}} \times C_{vol} $$
    *(Where $C_{vol}$ is the internal volume correction factor for the 2R vial)*.

---

#### 4.0 STATISTICAL ANALYSIS AND ACCEPTANCE CRITERIA

The CCIT program for Glucogen-XR utilizes a **Three-Tiered Acceptance Strategy**:

1.  **Tier 1: 100% In-Process Inspection:** Every vial in Batch GLUC-2025-XXX is inspected by high-voltage leak detection (HVLD) or Vacuum Decay (if liquid-filled).
2.  **Tier 2: Statistical Sampling:** During stability studies (Months 0, 6, 12, 18, 24, 36), $n=30$ vials are tested via Vacuum Decay. Acceptance: $P_k > 1.33$.
3.  **Tier 3: Positive Control Verification:** Each test session must be bracketed by "Master Leakers" (vials with 2.0 $\mu$m laser-drilled orifices).

**Table 3.2.S.6.2.1-3: Summary of Method Capabilities**
| Feature | Vacuum Decay | Helium Leak |
| :--- | :--- | :--- |
| **Limit of Detection** | $1.5 - 2.0 \mu$m | $0.01 - 0.1 \mu$m |
| **Destructive?** | No | No (but requires He) |
| **Throughput** | High (30-60 samples/hr) | Low (5-10 samples/hr) |
| **Primary Use** | Routine Release/Stability | Validation/Design Space |
| **Guidance** | ASTM F2338 | USP <1207.2> |

---

#### 5.0 REGULATORY COMPLIANCE AND REFERENCES

All CCIT methods described herein have been validated in accordance with:
*   **FDA Guidance for Industry:** *Container and Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol for Sterile Biological Products* (2008).
*   **USP <1211>:** *Sterility Assurance*.
*   **USP <1207.1>:** *Package Integrity Testing in the Product Life Cycle*.
*   **ISO 11040-4:** *Prefilled Syringes and Glass Vials*.

The raw data for method validation, including the "Detection Limit vs. Pressure Delta" regression curves, are maintained in the Google Cloud Life Sciences Electronic Laboratory Notebook (ELN) under Project **GLUC-2025-INTEGRITY**.

---
**[END OF SECTION 3.2.S.6.2.1]**

---

## Validation of Test Methods

### **REGULATORY CONFIDENTIAL – FOR FDA REVIEW ONLY**
**Document ID:** GHS-GLUC-M3-DS-CCI-VAL-001  
**Module 3:** Quality | **Section:** 3.2.S.6 Container Closure System  
**Subsection:** 3.2.S.6.2 Validation of Test Methods – Container Closure Integrity (CCI)  
**Product:** Glucogen-XR (glucapeptide extended-release)  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Date:** 24 October 2025  

---

# **3.2.S.6.2 Validation of Test Methods: Container Closure Integrity Testing (CCIT)**

## **1.0 Introduction and Scope**
This section details the comprehensive validation of the Container Closure Integrity Testing (CCIT) methodologies employed for the Glucogen-XR (glucapeptide extended-release) drug substance (DS) storage system. In alignment with **USP <1207> "Package Integrity Evaluation—Sterile Products,"** and **FDA Guidance for Industry: Container and Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol**, Google Health Sciences (GHS) has implemented a deterministic, non-destructive leak detection strategy.

The primary container closure system for Glucogen-XR Drug Substance consists of a 10L High-Density Polyethylene (HDPE) carboy (certified USP <661.2>) with a reinforced Fluorinated Ethylene Propylene (FEP) liner and a specialized tri-port silicone stopper secured by a stainless steel crimp collar.

### **1.1 Regulatory Compliance Matrix**
The validation exercises described herein were conducted in accordance with the following regulatory frameworks:
*   **ICH Q2(R1):** Validation of Analytical Procedures: Text and Methodology.
*   **USP <1207.1>:** Package Integrity Testing in the Product Life Cycle—Test Method Selection and Validation.
*   **USP <1207.2>:** Package Integrity Leak Test Technologies.
*   **21 CFR Part 211.94:** Drug product containers and closures.
*   **EU GMP Annex 1:** Manufacture of Sterile Medicinal Products (2022 Revision).

---

## **2.0 Technical Specifications of the Container Closure System (CCS)**
Validation of test methods requires a defined "Maximum Allowable Leakage Limit" (MALL). For Glucogen-XR, which is a highly concentrated peptide solution stored at -70°C, the MALL has been established based on the gas ingress risk and microbial exclusion.

### **Table 2.1: Critical Component Specifications for CCIT Validation**
| Component | Material of Construction | Manufacturer | Part Number |
| :--- | :--- | :--- | :--- |
| Primary Vessel | HDPE (Medical Grade) | GHS-Plastics Div | GHS-HDPE-10L-01 |
| Internal Liner | FEP (Fluorinated Ethylene Propylene) | ChemProcess Inc. | CP-FEP-992 |
| Stopper | Platinum-cured Silicone | BioSil Solutions | BS-TRI-80A |
| Crimp Seal | 316L Stainless Steel | PrecisionMetals | PM-SS-102 |

**MALL Definition:** 6.0 x 10⁻⁶ mbar·L/s (Helium leak rate), equivalent to a nominal capillary diameter of approximately 0.2 μm, ensuring microbial exclusion.

---

## **3.0 Method 1: Helium Mass Spectrometry (Vacuum Mode)**
Helium Leak Detection (HLD) serves as the primary deterministic method for verifying the fundamental integrity of the Glucogen-XR CCS during process validation and initial stability timepoints.

### **3.1 Principles of Operation**
The system utilizes a Pfeiffer Vacuum ASM 340 Helium Leak Detector. The test involves evacuating the interstitial space between the FEP liner and the HDPE shell, or the entire vessel interior, while exposing the exterior to a helium-rich environment (100% He).

### **3.2 Validation Parameters: Sensitivity and Detection Limit**
Validation was performed using laser-drilled micro-orifice standards (certified by NIST-traceable providers).

#### **Table 3.2.1: Accuracy and Precision Data for Helium Leakage**
*Test Samples: GLUC-2025-VAL-CCI-001 through GLUC-2025-VAL-CCI-010*
*Reference Standard: 5.5 x 10⁻⁶ mbar·L/s*

| Sample ID | Replicate 1 (mbar·L/s) | Replicate 2 (mbar·L/s) | Replicate 3 (mbar·L/s) | Mean Leak Rate | % RSD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Control (Blank)** | 1.1 x 10⁻¹⁰ | 1.0 x 10⁻¹⁰ | 1.2 x 10⁻¹⁰ | 1.1 x 10⁻¹⁰ | 9.1% |
| **Standard A (5.5e-6)** | 5.48 x 10⁻⁶ | 5.52 x 10⁻⁶ | 5.51 x 10⁻⁶ | 5.50 x 10⁻⁶ | 0.36% |
| **Defect 1 (0.5 μm)** | 8.22 x 10⁻⁶ | 8.19 x 10⁻⁶ | 8.25 x 10⁻⁶ | 8.22 x 10⁻⁶ | 0.37% |
| **Defect 2 (2.0 μm)** | 4.12 x 10⁻⁴ | 4.15 x 10⁻⁴ | 4.11 x 10⁻⁴ | 4.13 x 10⁻⁴ | 0.52% |

### **3.3 Protocol for Helium Leak Detection (Standard Operating Procedure GHS-SOP-7721)**
1.  **Preparation:** Clean the HDPE carboy exterior with 70% IPA to remove adsorbed gasses.
2.  **Tracer Charging:** Fill the FEP liner with 100% Helium Grade 5.0 to a pressure of 1.5 bar absolute.
3.  **Vacuum Chamber Placement:** Place the assembly into the stainless steel vacuum chamber (Serial ID: VAC-CH-099).
4.  **Evacuation:** Initiate vacuum cycle until chamber pressure reaches < 0.1 mbar.
5.  **Detection:** Open the sniffing valve to the mass spectrometer.
6.  **Integration:** Monitor the 4He ion current for 60 seconds.
7.  **Pass/Fail Criteria:** A leak rate > 6.0 x 10⁻⁶ mbar·L/s constitutes a failure.

---

## **4.0 Method 2: High Voltage Leak Detection (HVLD) - Micro-Leak Discovery**
For routine commercial batch release (e.g., Batch GLUC-2025-001), HVLD is utilized as a non-destructive high-throughput method.

### **4.1 Method Validation: Specificity and Robustness**
Validation focused on the ability of the E-Scan 655 HVLD system to detect leaks at the seal interface of the silicone stopper under frozen conditions (-70°C) and ambient conditions.

#### **Table 4.1.1: HVLD Validation Results - Sensitivity vs. Temperature**
| Batch Number | Condition | Defect Size (μm) | Voltage (kV) | Signal (V) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-VAL-01 | Ambient | No Leak | 15.0 | 0.45 | Pass |
| GLUC-2025-VAL-01 | Ambient | 5 μm Microwire | 15.0 | 4.82 | Fail (Leak Detected) |
| GLUC-2025-VAL-02 | -70°C | No Leak | 18.5 | 0.62 | Pass |
| GLUC-2025-VAL-02 | -70°C | 5 μm Microwire | 18.5 | 3.91 | Fail (Leak Detected) |

### **4.2 Statistical Analysis of HVLD Reliability**
The detection probability ($P_d$) was calculated using the Wilson Score interval for 30 replicates of the 5 μm defect.
*   **Total Tests:** 30
*   **Successful Detections:** 30
*   **Lower 95% Confidence Bound:** 0.905
*   **Formula:** $\hat{p} \pm z \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$

---

## **5.0 Method 3: Vacuum Decay (ASTM F2338-09)**
Vacuum decay is validated for use during the 24-month stability program for Glucogen-XR.

### **5.1 System Configuration**
*   **Instrument:** PTI VeriPac 455
*   **Test Chamber:** Custom-molded for 10L Carboy geometry to minimize dead volume.
*   **Vacuum Level:** 500 mbar absolute.

### **5.2 Validation Data - Ruggedness**
Validation was performed by three different operators across three non-consecutive days.

#### **Table 5.2.1: Intermediate Precision (Ruggedness) Data**
| Date | Operator | Batch ID | Baseline (Pa) | Known Leak (Pa) | Delta (Pass/Fail) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 01-SEP-2025 | A. Smith | GLUC-2025-R1 | 12.1 | 88.4 | Pass |
| 02-SEP-2025 | B. Jones | GLUC-2025-R2 | 11.9 | 89.1 | Pass |
| 03-SEP-2025 | C. Lee | GLUC-2025-R3 | 12.5 | 87.2 | Pass |

---

## **6.0 Microbial Challenge Correlation (Bridging Study)**
In accordance with **USP <1207.1>**, a bridging study was performed to correlate the physical leak rates (Helium/Vacuum Decay) with biological safety.

### **6.1 Procedure**
1.  Ten (10) 10L carboys were prepared with laser-drilled holes ranging from 0.1 μm to 10.0 μm.
2.  Vessels were filled with Tryptic Soy Broth (TSB).
3.  Vessels were immersed in a high-density microbial bath ($10^6$ CFU/mL of *Brevundimonas diminuta*) for 24 hours with pressure cycling (0.5 to 1.5 bar).
4.  Incubation occurred at 30-35°C for 14 days.

### **Table 6.1.1: Microbial Ingress vs. Physical Leak Rate**
| Sample ID | Hole Size (μm) | He Leak Rate (mbar·L/s) | Sterility Result |
| :--- | :--- | :--- | :--- |
| GHS-MC-01 | Control (0) | 1.1 x 10⁻¹⁰ | Sterile |
| GHS-MC-02 | 0.1 μm | 2.2 x 10⁻⁷ | Sterile |
| GHS-MC-03 | 0.2 μm (MALL) | 5.8 x 10⁻⁶ | Sterile |
| GHS-MC-04 | 0.5 μm | 1.2 x 10⁻⁵ | Sterile |
| GHS-MC-05 | 2.0 μm | 4.4 x 10⁻⁴ | **Growth Observed** |
| GHS-MC-06 | 5.0 μm | 9.1 x 10⁻³ | **Growth Observed** |

**Conclusion:** The MALL of 6.0 x 10⁻⁶ mbar·L/s provides a 2x safety factor relative to the smallest defect size where microbial ingress was observed (2.0 μm).

---

## **7.0 Summary of Validated Test Parameters for Commercial Submission**

### **Table 7.1: Master Validation Summary Table**
| Parameter | Helium Leak (Primary) | HVLD (Release) | Vacuum Decay (Stability) |
| :--- | :--- | :--- | :--- |
| **Sensitivity** | 10⁻¹⁰ mbar·L/s | 5 μm defect | 5 μm defect |
| **Accuracy** | 99.2% | 100% (at 5 μm) | 98.5% |
| **Precision (%RSD)** | < 2% | N/A (Attribute) | < 5% |
| **LOQ** | 5.0 x 10⁻⁷ mbar·L/s | 1.0 μm (Signal/Noise) | 10 Pa/sec |
| **Range** | 10⁻⁴ to 10⁻¹⁰ | 0 - 10V | 0 - 500 Pa |

---

## **8.0 References**
1.  **Guazzo, D. M., et al.** (2025). *Deterministic Methods for Container Closure Integrity.* Journal of Pharmaceutical Sciences.
2.  **USP <1207> Package Integrity Evaluation.** USP-NF 2025.
3.  **Google Health Sciences Internal Report:** GHS-RPT-2025-044, "Correlation of Gas Leakage to Microbial Risk for Large Volume HDPE Systems."
4.  **ISO 11607-1:** Packaging for terminally sterilized medical devices.

---
**End of Section 3.2.S.6.2**

---

## Batch Testing Results

### **3.2.S.6 Container Closure System (CCS)**
#### **3.2.S.6.3 Batch Testing Results: Container Closure Integrity Testing (CCIT)**

---

### **1.0 Introduction and Scope**
This section provides a comprehensive analysis of the Container Closure Integrity Testing (CCIT) results for the Glucogen-XR (glucapeptide extended-release) drug substance (DS) and intermediate stages. These results support the suitability of the primary packaging system—specifically the high-density polyethylene (HDPE) bioprocessing carboys and the Type I borosilicate glass vials used for long-term stability and clinical distribution.

As per **ICH Q5C (Stability Testing of Biotechnological/Biological Products)** and **FDA Guidance for Industry: Container and Closure System Integrity Testing in Lieu of Sterility Testing**, Google Health Sciences (GHS) has implemented deterministic leak detection methods to ensure the maintenance of sterility and the prevention of ingress of oxygen, moisture, and microbial contaminants.

The testing strategy focuses on the transition from probabilistic methods (e.g., microbial ingress) to deterministic methods, in alignment with **USP <1207> (Package Integrity Evaluation—Sterile Products)**.

---

### **2.0 Technical Specifications of the Primary Container Closure System**

| Component ID | Manufacturer | Material of Construction | Specifications |
| :--- | :--- | :--- | :--- |
| **GHS-CCS-V01** | Schott AG | Type I Borosilicate Glass (Fiolax) | 10 mL Clear Vial, 20mm Neck |
| **GHS-CCS-S01** | West Pharmaceutical | FluroTec® Laminated Elastomeric Stopper | 20mm Bromobutyl (4432/50 Gray) |
| **GHS-CCS-C01** | West Pharmaceutical | Aluminum Flip-Off Seal | 20mm Blue Anodized |
| **GHS-CCS-B01** | Thermo Fisher / Nalgene | High-Density Polyethylene (HDPE) | 5L Bioprocessing Carboy (BDS) |

---

### **3.0 Analytical Methodologies and Limit of Detection (LOD)**

#### **3.1 Vacuum Decay Method (ASTM F2338-09)**
Used primarily for the 10 mL glass vials. The testing was performed using the **VeriPac 455-V (Equipment ID: GHS-LAB-VAC-02)**.
*   **Principle:** The vial is placed in a custom-fit chamber. A vacuum is pulled. If a leak is present, air or product escapes into the chamber, causing a rise in pressure.
*   **Critical Parameter:** $\Delta P$ (Pressure Change over Time).
*   **Limit of Detection (LOD):** 1.25 $\mu$m orifice size (Calculated at $10^{-6}$ mbar·L/s).

#### **3.2 Helium Leak Rate Mass Spectrometry (ASTM E499)**
Used for qualification and "worst-case" batch analysis of the HDPE carboys.
*   **Principle:** The container is evacuated and charged with Helium ($He$) gas. A mass spectrometer (Pfeiffer Vacuum ASM 340) measures the rate of He diffusion through seals.
*   **Acceptance Criteria:** Leak rate $\leq 1.0 \times 10^{-7}$ Pa·m³/s.

---

### **4.0 Summary of Batch Testing Results (Manufacturing Campaign 2025)**

The following table summarizes the CCIT results for Glucogen-XR Drug Substance batches produced at the 3000 Innovation Drive facility.

#### **Table 4.1: Batch Testing Results for Glucogen-XR (DS) - Vacuum Decay Analysis**

| Batch Number | Manufacturing Date | Container Type | Test Method | Result (Max Leak Rate) | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 10 mL Glass Vial | Vacuum Decay | $0.012$ Pa/s | **PASS** |
| **GLUC-2025-002** | 28-JAN-2025 | 10 mL Glass Vial | Vacuum Decay | $0.010$ Pa/s | **PASS** |
| **GLUC-2025-003** | 15-FEB-2025 | 10 mL Glass Vial | Vacuum Decay | $0.015$ Pa/s | **PASS** |
| **GLUC-2025-004** | 02-MAR-2025 | 10 mL Glass Vial | Vacuum Decay | $0.009$ Pa/s | **PASS** |
| **GLUC-2025-005** | 19-MAR-2025 | 10 mL Glass Vial | Vacuum Decay | $0.011$ Pa/s | **PASS** |
| **GLUC-2025-006** | 05-APR-2025 | 10 mL Glass Vial | Vacuum Decay | $0.014$ Pa/s | **PASS** |
| **GLUC-2025-007** | 22-APR-2025 | 10 mL Glass Vial | Vacuum Decay | $0.012$ Pa/s | **PASS** |
| **GLUC-2025-008** | 10-MAY-2025 | 10 mL Glass Vial | Vacuum Decay | $0.013$ Pa/s | **PASS** |

*Note: The calculated pass/fail threshold for Vacuum Decay is set at < 0.050 Pa/s based on the validation study GHS-VAL-CCIT-2024-08.*

---

### **5.0 Detailed Protocol: Vacuum Decay Testing (SOP-GHS-QC-442)**

#### **5.1 Preparation of Positive Controls**
To ensure the sensitivity of the VeriPac 455-V system, positive controls are prepared using laser-drilled micro-orifices.
1.  **Orifice Selection:** 2 $\mu$m and 5 $\mu$m calibrated orifices.
2.  **Mounting:** The micro-orifice is integrated into a spare GHS-CCS-V01 vial.
3.  **Verification:** The orifice flow rate is verified via a flow meter (GHS-CAL-FL-99) prior to the batch run.

#### **5.2 Testing Procedure**
1.  **Chamber Setup:** Install the 10 mL vial nest into the VeriPac chamber.
2.  **Calibration Check:** Run the "System Suitability Test" (SST) using one negative control (evacuated empty vial) and one 2 $\mu$m positive control.
    *   *SST Requirement:* Positive control must trigger "FAIL" alarm; Negative control must trigger "PASS".
3.  **Sample Loading:** Place the Glucogen-XR batch sample into the chamber.
4.  **Vacuum Cycle:**
    *   Evacuation Time: 15.0 seconds.
    *   Stabilization Time: 10.0 seconds.
    *   Test (Measurement) Time: 30.0 seconds.
5.  **Data Recording:** The software calculates the pressure rise ($\Delta P$) in Pascals per second.

---

### **6.0 High-Sensitivity Helium Leak Rate Testing (Large Volume DS)**

For Bulk Drug Substance (BDS) stored in 5L HDPE carboys, Helium Leak Rate testing is conducted on a 10% representative sample of each lot to ensure the integrity of the screw-cap and gasket assembly under frozen storage conditions (-80°C).

#### **Table 6.1: Helium Leak Rate Data for Bulk Carboys**

| Batch Number | Storage Temp | Seal Torque (in-lb) | He Leak Rate (Pa·m³/s) | Recovery Time (s) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001-B** | -80°C | 45 | $2.4 \times 10^{-9}$ | 14.2 |
| **GLUC-2025-003-B** | -80°C | 45 | $3.1 \times 10^{-9}$ | 15.1 |
| **GLUC-2025-005-B** | -80°C | 45 | $1.9 \times 10^{-9}$ | 13.8 |
| **GLUC-2025-007-B** | -80°C | 45 | $2.8 \times 10^{-9}$ | 14.7 |

**Statistical Analysis of Helium Leak Rates:**
The Mean Leak Rate for the 2025 campaign was $2.55 \times 10^{-9}$ Pa·m³/s with a Standard Deviation of $0.51 \times 10^{-9}$. This is significantly below the Maximum Allowable Leakage Limit (MALL) of $1.0 \times 10^{-7}$ Pa·m³/s, providing a 100x safety margin for microbial exclusion.

---

### **7.0 Calculation of Maximum Allowable Leakage Limit (MALL)**

The MALL was determined based on the Knudsen flow and molecular flow regimes to prevent the entry of *Brevundimonas diminuta* (the industry standard for microbial ingress).

**Formula:**
$$Q_{L} = \frac{\pi \cdot d^4 \cdot \Delta P}{128 \cdot \eta \cdot L}$$

Where:
*   $Q_{L}$ = Leakage rate
*   $d$ = Orifice diameter (2.0 $\mu$m)
*   $\Delta P$ = Pressure differential (1.0 atm)
*   $\eta$ = Viscosity of air
*   $L$ = Length of the leak path (vial wall thickness, 1.2 mm)

Based on this calculation, a leak rate of $6.0 \times 10^{-8}$ mbar·L/s corresponds to the smallest possible path for a bacterium. Google Health Sciences has conservatively set the internal acceptance limit at **$1.0 \times 10^{-7}$ Pa·m³/s**.

---

### **8.0 Stability-Indicating CCIT Results**

Batch **GLUC-2025-001** was subjected to accelerated stability testing at 25°C / 60% RH. CCIT was performed at $T=0, T=3, T=6$ months.

#### **Table 8.1: CCIT Stability Data (GLUC-2025-001)**

| Time Point | Storage Condition | Method | Result (Average $\Delta P$) | Sterility (USP <71>) |
| :--- | :--- | :--- | :--- | :--- |
| **T=0** | 5°C | Vacuum Decay | 0.012 Pa/s | No Growth |
| **T=3m** | 25°C/60% RH | Vacuum Decay | 0.013 Pa/s | No Growth |
| **T=6m** | 25°C/60% RH | Vacuum Decay | 0.015 Pa/s | No Growth |

The correlation between CCIT results and USP <71> Sterility Testing confirms that the vacuum decay method is a reliable surrogate for microbial ingress testing, as permitted by **FDA 21 CFR 211.166**.

---

### **9.0 Regulatory Compliance and Standards**
*   **USP <1207>**: Package Integrity Evaluation.
*   **ASTM F2338-09**: Standard Test Method for Non-Destructive Detection of Leaks in Packages.
*   **ICH Q5C**: Stability of Biotechnological Products.
*   **ISO 11040-4**: Prefilled syringes and glass cartridges (Secondary reference for seal integrity).

### **10.0 Conclusion**
The batch testing results for Glucogen-XR manufactured by Google Health Sciences demonstrate consistent compliance with all container closure integrity requirements. The use of deterministic methods confirms that the GHS-CCS-V01 and GHS-CCS-B01 systems provide an robust barrier against microbial ingress and environmental degradation, ensuring the safety and efficacy of the glucapeptide drug substance through its shelf life.

---
*End of Subsection 3.2.S.6.3*

---

# Light Transmission Testing

## UV and Visible Light Protection

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.4.2: LIGHT TRANSMISSION TESTING AND PHOTOSTABILITY PROTECTION

---

#### 3.2.S.6.4.2.1 Executive Summary
Google Health Sciences (GHS) has conducted extensive UV and visible light transmission evaluations for the Glucogen-XR (glucapeptide extended-release) primary container closure system (CCS). As a GLP-1 receptor agonist, Glucogen-XR is highly sensitive to photo-oxidation, specifically at the Tryptophan (Trp) and Histidine (His) residues within the peptide sequence. This section details the methodology, validation, and empirical results for the light-shielding properties of the Type I Borosilicate glass syringe barrel, the plunger stopper, and the secondary light-protective labeling and carton system.

All testing was performed in accordance with:
*   **USP <671>**: Containers—Performance Testing (Spectral Transmission)
*   **ICH Q1B**: Photostability Testing of New Drug Substances and Products
*   **USP <660>**: Containers—Glass
*   **ISO 11040-4**: Prefilled Syringes (PFS) Part 4: Glass Barrels for Injectables

---

#### 3.2.S.6.4.2.2 Technical Specifications of the Container System
The primary container for Glucogen-XR is a 1.0 mL Long, Type I clear borosilicate glass prefilled syringe (PFS). Given the clear nature of the glass, the secondary packaging (aluminum-foil-lined blister and UV-opaque carton) is critical for maintaining the 24-month shelf life.

**Table 1: Physical Parameters of the Container Components**
| Component ID | Manufacturer | Material Composition | Optical Properties |
| :--- | :--- | :--- | :--- |
| **GHS-PFS-01** | Schott/Gerresheimer | Type I Borosilicate Glass | Clear / Non-tinted |
| **GHS-LBL-01** | Google Print Ops | Polypropylene/Adhesive | UV-blocking Overwrap |
| **GHS-BCK-01** | Google Life Sciences | 18pt SBS Folding Carton | 100% Opaque (Visible) |

---

#### 3.2.S.6.4.2.3 Spectral Transmission Testing Protocol (USP <671>)
The objective of this protocol is to measure the percentage of light transmission through the syringe wall between 290 nm and 450 nm.

##### 3.2.S.6.4.2.3.1 Equipment and Reagents
1.  **Spectrophotometer**: Agilent Cary 60 UV-Vis with integrating sphere (Serial: GHS-UV-2022-99)
2.  **Sample Holders**: Custom-machined jig to hold curved glass sections (P/N: GHS-JIG-45)
3.  **Reference Standard**: NIST-traceable Holmium Oxide filter for wavelength calibration

##### 3.2.S.6.4.2.3.2 Sample Preparation Procedure
1.  **Selection**: Select ten (10) syringes from Batch **GLUC-2025-001** through **GLUC-2025-005**.
2.  **Sectioning**: Using a diamond-tipped saw (Struers Accutom-10), excise a longitudinal section of the syringe barrel.
3.  **Cleaning**: Wash sections with 0.1M HCl, followed by Deionized (DI) water and Ethanol (95%). Air dry in a HEPA-filtered ISO 5 environment.
4.  **Placement**: Mount the section in the spectrophotometer beam path such that the beam is perpendicular to the glass surface.

##### 3.2.S.6.4.2.3.3 Calculation Formulas
The Spectral Transmission ($T$) is calculated as:
$$T(\lambda) = \frac{I_{sample}(\lambda)}{I_{reference}(\lambda)} \times 100$$
Where:
*   $I_{sample}$ = Intensity of light transmitted through the glass.
*   $I_{reference}$ = Intensity of light in the absence of the sample (air blank).

For USP <671> compliance for "light-resistant" containers, the transmission must not exceed 10% at any wavelength between 290 nm and 450 nm.

---

#### 3.2.S.6.4.2.4 Comparative Data: Unprotected vs. Protected Syringes
The following table summarizes the light transmission data for the glass barrel alone versus the barrel with the proprietary Google Health Sciences UV-blocking label.

**Table 2: Spectral Transmission Results (Mean of n=10 Samples)**
| Wavelength (nm) | Mean Transmission % (Clear Glass - Batch GLUC-2025-004) | Mean Transmission % (Labeled Glass - Batch GLUC-2025-004) | Acceptance Criteria (USP <671>) |
| :--- | :--- | :--- | :--- |
| 290 | 1.2% | < 0.01% | Pass (< 10%) |
| 310 | 12.4% | < 0.01% | Fail (Glass) / Pass (Label) |
| 330 | 45.8% | < 0.02% | Fail (Glass) / Pass (Label) |
| 350 | 78.2% | < 0.05% | Fail (Glass) / Pass (Label) |
| 370 | 88.1% | < 0.08% | Fail (Glass) / Pass (Label) |
| 400 | 91.5% | < 0.10% | Fail (Glass) / Pass (Label) |
| 450 (Visible) | 92.3% | < 0.15% | Fail (Glass) / Pass (Label) |

**Analysis**: The clear Type I glass does not inherently meet light-resistance requirements for wavelengths above 300 nm. Therefore, the UV-blocking label (GHS-LBL-01) is a mandatory component of the CCS.

---

#### 3.2.S.6.4.2.5 Photostability Stress Testing (ICH Q1B Option 2)
To validate the effectiveness of the UV protection, Glucogen-XR drug product was exposed to intensified light conditions.

**Study Parameters:**
*   **Light Source**: Cool White Fluorescent (ISO 10977) and Near UV Fluorescent (320-400 nm).
*   **Total Exposure**: 1.2 million lux-hours (Visible) and 200 watt-hours/m² (UV).
*   **Temperature Control**: 25°C ± 2°C using a Peltier-cooled chamber (Model: GHS-CH-700).

**Table 3: Impact of Light Exposure on Glucogen-XR Purity (RP-HPLC)**
| Sample Condition (Batch GLUC-2025-012) | Initial Purity (%) | Post-Exposure Purity (%) | Main Degradant Observed |
| :--- | :--- | :--- | :--- |
| **Dark Control (Wrapped in Foil)** | 99.4% | 99.3% | N/A |
| **Primary CCS (Glass Only)** | 99.4% | 82.1% | Oxidized Trp-18 |
| **Complete CCS (Syringe + Label)** | 99.4% | 99.1% | Trace Deamidation |
| **Secondary CCS (In Carton)** | 99.4% | 99.4% | None |

---

#### 3.2.S.6.4.2.6 Manufacturing Controls and In-Process Testing
During the assembly of the Glucogen-XR prefilled syringe, the UV-blocking label is applied at the **South San Francisco Fill/Finish Facility (Site ID: 3000-A)**.

**In-Process Protocol GHS-PROT-LBL-99:**
1.  **Automated Vision Inspection (AVI)**: Every syringe is scanned by an OCV (Optical Character Verification) system to ensure 100% label coverage.
2.  **Opacity Verification**: Samples from each batch are tested using a handheld densitometer (X-Rite Exact 2).
3.  **Adhesion Testing**: Label must withstand 1.5 N/cm pull force after exposure to 5°C (refrigeration) for 48 hours.

**Table 4: Batch Release Data for Light Transmission (Q3-Q4 2025)**
| Batch Number | Manufacture Date | Mean Transmission @ 350nm | RSD (%) | Release Status |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-101** | 12-OCT-2025 | 0.042% | 1.1 | Approved |
| **GLUC-2025-102** | 24-OCT-2025 | 0.039% | 0.9 | Approved |
| **GLUC-2025-103** | 02-NOV-2025 | 0.045% | 1.4 | Approved |
| **GLUC-2025-104** | 15-NOV-2025 | 0.041% | 0.8 | Approved |

---

#### 3.2.S.6.4.2.7 Mathematical Modeling of Photo-Degradation Kinetics
The rate of degradation ($k$) as a function of light intensity ($I$) is modeled using the following derivative of the Beer-Lambert Law integrated into a first-order kinetic equation:

$$C_t = C_0 \cdot e^{-k \cdot I \cdot t \cdot \Phi}$$

Where:
*   $C_t$ = Concentration of intact Glucapeptide at time $t$.
*   $I$ = Intensity of incident light (lux or $W/m^2$).
*   $\Phi$ = Quantum yield of the photo-oxidation reaction.
*   The transmission factor of the glass/label system acts as a multiplier to $I$. By reducing transmission from 90% to 0.05%, the degradation rate is effectively reduced by a factor of 1,800.

---

#### 3.2.S.6.4.2.8 Conclusion
The data presented in Section 3.2.S.6.4.2 confirms that the Glucogen-XR container closure system, specifically through the integration of the GHS-LBL-01 UV-blocking overwrap, provides robust protection against UV and visible light-induced degradation. The system meets and exceeds USP <671> and ICH Q1B requirements, ensuring the chemical stability and therapeutic efficacy of the glucapeptide drug substance throughout its shelf life.

---
**Footnotes & References:**
1. *ICH Q1B Photostability Testing of New Drug Substances and Products.*
2. *USP 43-NF 38 <671> Containers—Performance Testing.*
3. *GHS Internal Report R-2025-GLUC-09: Spectral Analysis of Polypropylene Adhesives.*
4. *Journal of Pharmaceutical Sciences, Vol 112, "Photo-oxidation of GLP-1 Analogs in Borosilicate Containers."*

---

## Container Color and Opacity

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.2.1: LIGHT TRANSMISSION TESTING – CONTAINER COLOR AND OPACITY

---

#### 1.0 INTRODUCTION AND SCOPE
This subsection details the comprehensive assessment of the primary container closure system (CCS) for Glucogen-XR (glucapeptide extended-release), specifically addressing the physicochemical properties of container color, opacity, and spectral light transmission. Given that Glucogen-XR is a highly concentrated GLP-1 receptor agonist peptide formulated for extended release, the stability of the active pharmaceutical ingredient (API) is susceptible to photo-oxidative degradation. Consequently, the primary container—a Type I Borosilicate glass syringe barrel with a proprietary UV-blocking amber tint—must meet stringent criteria for light exclusion.

This report documents the validation of the container’s ability to protect the drug substance from ultraviolet (UV) and visible light radiation in accordance with **USP <671> Containers—Performance Testing** and **ICH Q1B Photostability Testing of New Drug Substances and Products**.

---

#### 2.0 REGULATORY COMPLIANCE AND STANDARDS
The testing protocols and acceptance criteria outlined herein are governed by the following regulatory frameworks:

*   **USP <661.1>**: Plastic Materials of Construction (where applicable to plunger stoppers and shields).
*   **USP <661.2>**: Plastic Systems for Pharmaceutical Use.
*   **USP <671>**: Spectral Transmission Limits for Amber Glass and Plastic.
*   **EP 3.2.1**: Glass Containers for Pharmaceutical Use.
*   **ICH Q1B**: Photostability Testing of New Drug Substances and Products.
*   **21 CFR 211.94**: Drug product containers and closures.

---

#### 3.0 TEST ARTICLE SPECIFICATIONS
The test articles consist of the primary container components manufactured by Google Health Sciences’ certified partner under GMP conditions.

**Table 1: Technical Specifications of the Primary Container (Glucogen-XR)**

| Component ID | Material Description | Manufacturer | Color/Opacity Grade | Wall Thickness (Nominal) |
| :--- | :--- | :--- | :--- | :--- |
| GHS-SYR-01 | Type I Borosilicate Amber Glass | Schott/Gerresheimer | ISO 720 / USP Type I | 1.10 mm ± 0.05 mm |
| GHS-SHD-05 | Rigid Needle Shield (RNS) | Datwyler | Opaque Black (Latex-free) | N/A (Total Opacity) |
| GHS-PLG-09 | FluroTec® Coated Plunger | West Pharmaceutical | Opaque Grey | N/A (Total Opacity) |

---

#### 4.0 PROTOCOL FOR SPECTRAL TRANSMISSION ANALYSIS

##### 4.1 Objective
To quantify the percentage of light transmission through the amber glass barrel of the Glucogen-XR syringe across the spectrum from 290 nm to 450 nm.

##### 4.2 Equipment and Instrumentation
*   **Spectrophotometer:** Shimadzu UV-3600 Plus UV-VIS-NIR (Asset ID: GHS-LAB-SPEC-09).
*   **Attachment:** Integrating Sphere (ISR-3100) to account for diffused light and curvature of the syringe barrel.
*   **Calibration Standards:** Holmium Oxide Filter (NIST traceable) for wavelength accuracy; Neutral Density Filters for photometric accuracy.

##### 4.3 Sample Preparation (Procedure GHS-SOP-QC-772)
1.  Select ten (10) syringes from the designated batch (e.g., GLUC-2025-001).
2.  Empty the contents and rinse with deionized water (18.2 MΩ·cm), followed by an isopropyl alcohol (IPA) rinse.
3.  Dry under a filtered nitrogen stream (Class 100 air).
4.  Section the syringe barrel using a diamond-tipped precision saw to create a flat section of the wall if the integrating sphere cannot accommodate the curvature.
5.  Ensure the sample surface is free of fingerprints, scratches, or manufacturing defects.

##### 4.4 Measurement Procedure
1.  **Baseline:** Perform a baseline scan with an empty sample holder (Air).
2.  **Placement:** Position the sectioned amber glass sample perpendicular to the light path.
3.  **Scanning Range:** 290 nm to 800 nm.
4.  **Resolution:** 1.0 nm.
5.  **Integration Time:** 0.1 seconds per data point.

---

#### 5.0 BATCH ANALYSIS AND RESULTS (LIGHT TRANSMISSION)

The following tables summarize the light transmission data for three (3) consecutive validation batches of Glucogen-XR containers. Per USP <671>, the maximum allowed transmission for a container intended for a light-sensitive product (size 1 mL to 20 mL) is **10%** at any wavelength between 290 nm and 450 nm.

**Table 2: Light Transmission Results for Batch GLUC-2025-001**
*Manufacturing Date: 12-JAN-2025*
*Testing Date: 15-JAN-2025*

| Wavelength (nm) | Sample 1 (%) | Sample 2 (%) | Sample 3 (%) | Sample 4 (%) | Sample 5 (%) | Mean (%) | Std. Dev |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 290 | 0.01 | 0.01 | 0.02 | 0.01 | 0.01 | 0.012 | 0.004 |
| 320 | 0.04 | 0.05 | 0.04 | 0.06 | 0.04 | 0.046 | 0.009 |
| 350 | 0.12 | 0.14 | 0.11 | 0.13 | 0.12 | 0.124 | 0.011 |
| 400 | 1.45 | 1.62 | 1.55 | 1.48 | 1.59 | 1.538 | 0.071 |
| 420 | 3.88 | 4.02 | 3.95 | 3.82 | 4.10 | 3.954 | 0.109 |
| 450 | 7.12 | 7.45 | 7.33 | 7.21 | 7.38 | 7.298 | 0.128 |
| **Result** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | -- |

**Table 3: Light Transmission Results for Batch GLUC-2025-002**
*Manufacturing Date: 19-JAN-2025*

| Wavelength (nm) | Sample 1 (%) | Sample 2 (%) | Sample 3 (%) | Sample 4 (%) | Sample 5 (%) | Mean (%) | Std. Dev |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 290 | 0.02 | 0.01 | 0.01 | 0.02 | 0.02 | 0.016 | 0.005 |
| 350 | 0.15 | 0.16 | 0.14 | 0.15 | 0.15 | 0.150 | 0.007 |
| 450 | 7.55 | 7.62 | 7.48 | 7.70 | 7.59 | 7.588 | 0.081 |
| **Result** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | **PASS** | -- |

---

#### 6.0 OPACITY ANALYSIS OF CLOSURE COMPONENTS

While the barrel is translucent amber, the plunger and needle shield must be 100% opaque to prevent light piping into the formulation through the distal or proximal ends.

##### 6.1 Opacity Verification Protocol (GHS-VIS-004)
Opacity is measured using a Densitometer (X-Rite eXact) to ensure a minimum Optical Density (OD) of >4.0 (equivalent to 0.01% transmission).

**Table 4: Opacity Testing (Optical Density) for Closures**

| Component | Batch Number | Equipment ID | Measured OD (Avg) | Transmission Equiv. | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Plunger (GHS-PLG-09) | GLUC-2025-P01 | DENS-01 | 5.22 | < 0.001% | Pass |
| Needle Shield (RNS) | GLUC-2025-N01 | DENS-01 | 6.10 | < 0.001% | Pass |

---

#### 7.0 COLOR CONSISTENCY AND SPECTRAL COORDINATES (CIELAB)
To ensure manufacturing consistency and aesthetic uniformity, the color of the amber glass is quantified using the CIELAB color space ($L^*$, $a^*$, $b^*$).

##### 7.1 Mathematical Model
The color difference ($\Delta E^*$) between batches is calculated using the formula:
$$\Delta E^* = \sqrt{(L^*_2 - L^*_1)^2 + (a^*_2 - a^*_1)^2 + (b^*_2 - b^*_1)^2}$$

**Table 5: CIELAB Color Coordinates for GLUC-2025-XXX Series**

| Batch Number | $L^*$ (Lightness) | $a^*$ (Red/Green) | $b^*$ (Yellow/Blue) | $\Delta E^*$ (vs. Std) |
| :--- | :--- | :--- | :--- | :--- |
| Reference Standard | 45.20 | 18.50 | 55.40 | N/A |
| GLUC-2025-001 | 45.12 | 18.44 | 55.52 | 0.16 |
| GLUC-2025-002 | 45.35 | 18.62 | 55.30 | 0.22 |
| GLUC-2025-003 | 45.18 | 18.40 | 55.45 | 0.11 |

*Acceptance Criteria: $\Delta E^* \leq 2.0$ compared to the master reference.*

---

#### 8.0 ACCELERATED PHOTOSTABILITY CORRELATION
To validate that the container color and opacity provide sufficient protection, a photostability study was conducted on the drug substance (Glucapeptide) inside the GHS-SYR-01 container vs. clear glass.

*   **Light Source:** Xenon lamp (ICH Q1B Option 1).
*   **Total Exposure:** 1.2 million lux-hours.
*   **UV Energy:** 200 watt-hours/m².

**Table 6: Potency Retention After Light Exposure**

| Container Type | Initial Potency (%) | Post-Exposure Potency (%) | Main Degradant (RRT 0.82) |
| :--- | :--- | :--- | :--- |
| Clear Glass (Control) | 100.2% | 88.4% | 8.2% |
| **Amber GHS-SYR-01** | **100.1%** | **99.8%** | **0.4%** |

---

#### 9.0 CONCLUSION
The primary container for Glucogen-XR, Batch GLUC-2025-XXX, demonstrates superior light-shielding properties. All tested syringe barrels showed light transmission levels well below the USP <671> limit of 10%, with a mean transmission of approximately 7.3% at 450 nm and <0.1% in the critical UVC/UVB range. The high opacity of the plunger and needle shield, combined with the consistent CIELAB color profile of the glass, ensures the long-term stability and photo-integrity of the Glucogen-XR drug substance throughout its shelf life.

---
**END OF SECTION**
**Approved By:** Regulatory Affairs CMC Division, Google Health Sciences
**Date:** 24-MAY-2025

---

## Photostability Implications

# MODULE 3: QUALITY (3.2.S DRUG SUBSTANCE)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.3: LIGHT TRANSMISSION TESTING
#### DOCUMENT ID: GHS-GLUC-XR-M3DS-CONT-004
#### TOPIC: PHOTOSTABILITY IMPLICATIONS

---

### 1.0 INTRODUCTION AND SCOPE

The "Photostability Implications" subsection of the Drug Substance (DS) Container Closure System (CCS) evaluation for Glucogen-XR (glucapeptide extended-release) provides a comprehensive analysis of the potential for actinic degradation of the drug substance. Given the primary amino acid sequence of Glucogen-XR, which contains specific chromophores (Tryptophan, Tyrosine, and Phenylalanine) and a specialized extended-release lipid-anchor moiety, the molecule is inherently susceptible to photo-oxidation and subsequent aggregation if exposed to light within the 200 nm to 800 nm range.

This document details the photostability implications regarding the choice of primary packaging, the protective efficacy of the secondary packaging, and the specific degradation pathways identified during ICH Q1B stress testing.

### 2.0 REGULATORY ALIGNMENT AND GUIDANCE COMPLIANCE

Google Health Sciences (GHS) has designed the photostability assessment protocols for Glucogen-XR in strict accordance with the following regulatory frameworks:

*   **ICH Q1B:** Photostability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Stability Testing of Biotechnological/Biological Products.
*   **USP <671>:** Containers—Performance Testing (Spectral Transmission).
*   **USP <1044>:** Measurement of Subvisible Particulate Matter in Therapeutic Protein Injections (as a result of light-induced aggregation).
*   **FDA Guidance for Industry:** Q1B Photostability Testing of New Drug Substances and Products (1996).

### 3.0 MOLECULAR VULNERABILITY ANALYSIS (ACTINIC SENSITIVITY)

#### 3.1 Chromophore Profile of Glucogen-XR
Glucogen-XR is a 31-amino acid peptide derivative. Its sensitivity to light is primarily dictated by its aromatic amino acid composition:

1.  **Tryptophan (Trp) at Position 25:** High molar absorptivity at 280 nm. Subject to photo-oxidation forming N-formylkynurenine (NFK).
2.  **Tyrosine (Tyr) at Position 13 & 19:** Formation of dityrosine cross-links upon UV exposure.
3.  **Extended-Release Lipid Anchor:** The proprietary C18-diacid anchor attached via a gamma-Glu spacer is susceptible to radical-mediated peroxidation when exposed to high-intensity visible light in the presence of trace metal impurities.

#### 3.2 Predicted Degradation Pathways
| Degradation Product | Mechanism | Analytical Marker | Impact on Potency |
| :--- | :--- | :--- | :--- |
| **N-formylkynurenine** | Trp Oxidation | UV Absorbance at 320 nm | Significant Loss |
| **Dityrosine Cross-links** | Radical Coupling | Fluorescence (Ex 325nm/Em 400nm) | Aggregation/Immunogenicity |
| **Covalent Dimers** | Radical-mediated coupling | SE-HPLC (High MW species) | Safety Risk |
| **Peroxidized Lipid Tail** | Lipid Peroxidation | RP-HPLC (Hydrophilic shifts) | Altered PK Profile |

---

### 4.0 LIGHT TRANSMISSION TESTING PROTOCOL (PRIMARY CONTAINER)

To mitigate the risks identified in Section 3.0, Glucogen-XR is stored in high-purity Type I borosilicate glass vials. However, since the DS is often staged in bulk before final fill-finish, the light transmission of the bulk HDPE (High-Density Polyethylene) carboys and the final primary glass vials was rigorously tested.

#### 4.1 Procedure for Spectral Transmission (USP <671>)
1.  **Instrument:** Shimadzu UV-2600i Double Beam Spectrophotometer with Integrating Sphere (ID: GHS-INST-SPEC-09).
2.  **Range:** 200 nm to 800 nm.
3.  **Sample Preparation:** Sections of the container (vial wall) were cut and flattened or placed in a custom jig to ensure the beam passed perpendicular to the surface.
4.  **Acceptance Criteria:** For light-resistant containers, transmission must not exceed 10% at any wavelength between 290 nm and 450 nm.

#### 4.2 Transmission Results: Data Table 1
**Batch Testing: GLUC-2025-V-001 through GLUC-2025-V-005 (Schott Type I Clear Glass)**

| Wavelength (nm) | GLUC-2025-V-001 (%T) | GLUC-2025-V-002 (%T) | GLUC-2025-V-003 (%T) | Mean %T | SD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 250 | 0.02 | 0.01 | 0.02 | 0.017 | 0.006 |
| 300 | 12.4 | 12.8 | 12.5 | 12.57 | 0.208 |
| 350 | 88.2 | 87.9 | 88.1 | 88.07 | 0.153 |
| 400 | 91.5 | 91.2 | 91.4 | 91.37 | 0.153 |
| 450 | 92.1 | 92.0 | 92.3 | 92.13 | 0.153 |
| 500 | 93.4 | 93.1 | 93.2 | 93.23 | 0.153 |

**Conclusion:** The clear Type I glass provides negligible protection against visible and near-UV light. Consequently, the photostability implications require that all DS protection be managed through secondary opaque packaging and strict light-controlled manufacturing environments.

---

### 5.0 ICH Q1B PHOTOSTABILITY STRESS STUDY (DRUG SUBSTANCE)

A formal photostability study was conducted on three registration batches of Glucogen-XR Drug Substance to determine the threshold of degradation.

#### 5.1 Study Design (Option 2: Cool White Fluorescent and Near UV)
*   **Total Visible Light Exposure:** 1.2 million lux-hours.
*   **Total Near-UV Energy:** 200 watt-hours/m².
*   **Temperature Control:** 25°C ± 2°C using a Peltier-cooled Caron Photostability Chamber (ID: GHS-CHAM-04).

#### 5.2 Test Groups
*   **Group A (Fully Exposed):** DS in clear glass vials, horizontal.
*   **Group B (Primary Protected):** DS in clear glass vials wrapped in aluminum foil.
*   **Group C (Secondary Protected):** DS in clear glass vials inside the proposed secondary cardboard carton (Double-walled high-density paperboard).

#### 5.3 Analytical Results: Data Table 2 (Batch GLUC-2025-DS-010)

| Parameter | Initial (T0) | Group A (Exposed) | Group B (Foil) | Group C (Carton) | Specification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Purity (RP-HPLC %)** | 99.4% | 84.2% | 99.3% | 99.2% | ≥ 95.0% |
| **HMW Species (SEC %)** | 0.2% | 6.8% | 0.3% | 0.3% | ≤ 1.0% |
| **Oxidized Forms (%)** | 0.4% | 8.9% | 0.5% | 0.6% | ≤ 2.0% |
| **Potency (Bioassay)** | 102% | 76% | 101% | 101% | 90-110% |
| **Visible Color** | Clear | Pale Yellow | Clear | Clear | Clear |

#### 5.4 Statistical Calculation: Rate of Degradation
The rate of loss of purity ($k_{photo}$) for Group A was calculated using a pseudo-first-order kinetic model:
$$ln(P_t/P_0) = -k_{photo} \cdot E$$
Where:
*   $P_t$ = Purity at time $t$
*   $P_0$ = Initial Purity
*   $E$ = Exposure (Lux-hours)

Result: $k_{photo} = 1.37 \times 10^{-7}$ per lux-hour. This indicates that exposure to standard office lighting (500 lux) for more than 48 hours would lead to out-of-specification (OOS) results for Glucogen-XR.

---

### 6.0 IMPLICATIONS FOR MANUFACTURING AND HANDLING

Based on the data in Section 5.3, the following photoprotective mandates have been implemented at the Google Health Sciences manufacturing facility (3000 Innovation Drive, South San Francisco).

#### 6.1 Manufacturing Environment Controls
*   **Yellow Light Filters:** All suites involved in the purification (Downstream) and filling of Glucogen-XR utilize Encapsulite® UV-filtering yellow sleeves on all fluorescent fixtures (cutoff < 500 nm).
*   **Stainless Steel Shielding:** Bulk drug substance is held in 316L stainless steel pressure vessels (ID: GHS-VES-02) which provide 100% opacity.
*   **Transfer Lines:** All PFA transfer lines are opaque or wrapped in secondary insulation to prevent light ingress during DS transfer to the fill-finish manifold.

#### 6.2 Step-by-Step Procedure for Light-Sensitive Handling (SOP-GHS-PRO-22)
1.  **Step 1:** Verify room lighting is set to "Ambershield" mode.
2.  **Step 2:** Retrieve DS from -70°C storage in the secondary light-resistant crate.
3.  **Step 3:** Perform thawing in the GHS-THAW-01 unit with the light-tight lid closed.
4.  **Step 4:** During sampling for IPC (In-Process Control), use amber-tinted Eppendorf tubes (Reference: GLUC-2025-ACC-09).
5.  **Step 5:** Label all immediate containers with the "Light Sensitive" auxiliary label (Label ID: GHS-LAB-PHOTO).

---

### 7.0 PACKAGING EFFICACY EVALUATION

#### 7.1 Secondary Packaging Opacity Study
To ensure the secondary packaging (GHS-CART-004) provides sufficient protection during clinical transport, a light penetration test was conducted.

**Data Table 3: Light Penetration through Secondary Carton**

| Sample ID | External Lux | Internal Lux (Inside Carton) | Attenuation Factor (%) |
| :--- | :--- | :--- | :--- |
| GLUC-2025-C-01 | 10,000 | < 1 | > 99.99% |
| GLUC-2025-C-02 | 10,000 | < 1 | > 99.99% |
| GLUC-2025-C-03 | 10,000 | < 1 | > 99.99% |

The attenuation factor demonstrates that the secondary packaging effectively eliminates the risk of actinic degradation during the commercial shelf-life, provided the carton remains intact.

---

### 8.0 RISK ASSESSMENT SUMMARY

| Risk Factor | Probability | Severity | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| Photo-oxidation of Trp25 | High | High | Opaque secondary packaging; Yellow-light manufacturing. |
| Dityrosine-induced aggregation | Medium | High | SEC-HPLC monitoring; subvisible particle testing (USP <788>). |
| Patient non-compliance (storing out of box) | Medium | Medium | Explicit warning on the label and Patient Instructions for Use (IFU). |

### 9.0 CONCLUSION

The photostability implications for Glucogen-XR are significant due to the peptide's aromatic density and the susceptibility of the lipid-anchor. Testing of the primary container (clear Type I glass) confirms a transmission of >90% in the visible range, offering no protection. However, ICH Q1B stress testing confirms that the proposed secondary packaging provides a complete barrier to light.

By adhering to the light-controlled manufacturing protocols (SOP-GHS-PRO-22) and maintaining the DS within its secondary carton, the chemical and physical integrity of Glucogen-XR is preserved, ensuring a shelf-life of 24 months when stored at 2-8°C in the dark.

---
**End of Subsection 3.2.S.6.3**
*Approved by: Dr. Aris Jensen, Head of Regulatory Affairs, Google Health Sciences.*
*Date: 14-Oct-2025*
*Document Reference: GLUC-XR-REG-M3-2025-0982*

---

# Compatibility Studies

## Long-term Storage Studies

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.4: COMPATIBILITY STUDIES
#### SUB-SUBSECTION 3.2.S.6.4.2: LONG-TERM STORAGE STUDIES (STABILITY-INDICATING COMPATIBILITY)

---

### 1.0 Executive Summary of Long-Term Storage Compatibility
Google Health Sciences (GHS), a division of Google Cloud Life Sciences, has conducted an exhaustive 36-month longitudinal compatibility assessment for Glucogen-XR (glucapeptide extended-release), a novel GLP-1 receptor agonist. This study specifically addresses the physicochemical interactions between the Drug Substance (DS) and the primary container closure system (CCS) components under ICH Q1A(R2) and Q5C conditions.

The primary objective of the long-term storage compatibility program is to demonstrate that the integrity of the glucapeptide molecule is maintained and that no deleterious leachables or adsorptive losses occur when the DS is stored in its commercial configuration: High-Density Polyethylene (HDPE) bottles with heat-induction foil seals and specialized desiccants, or the primary bulk storage 50L SUS (Single-Use Systems) assemblies.

### 2.0 Regulatory Framework and Compliance Standards
The studies described herein were executed in strict accordance with the following regulatory mandates and pharmacopeial standards:
*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <661.1> and <661.2>:** Plastic Materials of Construction and Plastic Systems for Pharmaceutical Use.
*   **USP <1663> and <1664>:** Assessment of Extractables and Leachables (E&L) in Pharmaceutical Packaging.
*   **FDA Guidance for Industry:** Container Closure Systems for Packaging Human Drugs and Biologics (May 1999).
*   **EP 3.1.3:** Polyolefins.

### 3.0 Material Specifications and Batch Identification
The compatibility studies utilized three representative cGMP registration batches of Glucogen-XR Drug Substance.

#### Table 3.2.S.6.4.2-1: Drug Substance Batch Information for Long-Term Studies
| Batch Number | Scale | Site of Manufacture | Date of Manufacture | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 3000 Innovation Drive, SSF, CA | 12-JAN-2025 | Registration / Primary Stability |
| **GLUC-2025-002** | 2000L | 3000 Innovation Drive, SSF, CA | 05-FEB-2025 | Registration / Primary Stability |
| **GLUC-2025-003** | 2000L | 3000 Innovation Drive, SSF, CA | 01-MAR-2025 | Registration / Supporting Stability |

#### Table 3.2.S.6.4.2-2: Container Closure System (CCS) Components
| Component ID | Manufacturer | Material of Construction (MOC) | Specification No. |
| :--- | :--- | :--- | :--- |
| **GHS-CCS-01** | Google Life Sciences / Vendor A | HDPE (High-Density Polyethylene) | SPEC-HDPE-009 |
| **GHS-CAP-01** | Vendor B | Polypropylene (PP) with Induction Liner | SPEC-CAP-012 |
| **GHS-SUS-50L** | Vendor C | Multilayer Polyethylene Film (CX5-14) | SPEC-SUS-50L |

---

### 4.0 Detailed Experimental Protocol for Compatibility Testing
The compatibility protocol was designed to evaluate the drug-container interface at five distinct temperature/humidity setpoints.

#### 4.1 Storage Conditions and Sampling Frequency
Storage was conducted in qualified Environmental Chambers (Equipment IDs: GHS-STAB-01 through GHS-STAB-12).

*   **Long-Term:** 5°C ± 3°C (Refrigerated) - 36 Months
*   **Accelerated:** 25°C ± 2°C / 60% RH ± 5% RH - 6 Months
*   **Intermediate:** 30°C ± 2°C / 65% RH ± 5% RH - 12 Months
*   **Stress:** 40°C ± 2°C / 75% RH ± 5% RH - 3 Months
*   **Deep Freeze:** -20°C ± 5°C (Control Condition) - 36 Months

#### 4.2 Analytical Methodology
Analytical methods utilized were validated per ICH Q2(R1) standards.
1.  **RP-HPLC (Assay/Related Substances):** Column: C18, 4.6 x 150mm, 3µm. Detection: 214nm.
2.  **SEC-HPLC (Aggregation):** Column: TSKgel G3000SWxl. Detection: 214nm.
3.  **LC-MS/MS (Leachables):** High-resolution mass spectrometry for detection of plasticizers, antioxidants, and catalysts.
4.  **ICP-MS (Extractable Elements):** Evaluation for Al, Ti, Zn, and heavy metals per USP <232>.
5.  **Sub-Visible Particulate Matter (HIAC):** Per USP <788>.

---

### 5.0 Long-Term Compatibility Results (36 Months)
Results represent the mean values for Batches **GLUC-2025-001, 002, and 003**.

#### Table 3.2.S.6.4.2-3: Assay and Purity (RP-HPLC) Compatibility Data at 5°C
| Interval (Months) | Assay (%) | Total Impurities (%) | Deamidated Glucogen (%) | Oxidized Glucogen (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Initial (T0)** | 100.2 | 0.42 | 0.12 | 0.08 |
| **Month 3** | 100.1 | 0.43 | 0.12 | 0.09 |
| **Month 6** | 99.8 | 0.45 | 0.13 | 0.10 |
| **Month 12** | 99.5 | 0.48 | 0.15 | 0.12 |
| **Month 18** | 99.2 | 0.52 | 0.18 | 0.14 |
| **Month 24** | 98.9 | 0.58 | 0.22 | 0.16 |
| **Month 36** | 98.4 | 0.65 | 0.28 | 0.20 |
| **Specification** | **95.0 - 105.0** | **≤ 2.0%** | **Report** | **Report** |

#### Table 3.2.S.6.4.2-4: Leachables Analysis (LC-MS/MS) in Glucogen-XR Matrix
Values in ppm (parts per million). Analytical Evaluation Threshold (AET) = 0.05 ppm.

| Leachable Species | MOC Origin | T0 | T12 | T24 | T36 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Irganox 1010** | HDPE/PP | < AET | < AET | 0.06 | 0.07 |
| **Irgafos 168** | HDPE/PP | < AET | < AET | < AET | < AET |
| **Palmitic Acid** | Slip Agent | 0.08 | 0.12 | 0.15 | 0.18 |
| **Stearic Acid** | Slip Agent | 0.05 | 0.07 | 0.09 | 0.11 |
| **Formaldehyde** | Degradation | < AET | < AET | < AET | < AET |

---

### 6.0 Detailed Assessment of Glucapeptide Adsorption to HDPE Surface
One of the critical risks for peptide therapeutics is the non-specific adsorption to the hydrophobic surfaces of the primary container. GHS conducted a surface-depletion study using radioactive labeling and mass-balance calculations.

#### 6.1 Adsorption Protocol (Mass Balance Calculation)
The concentration of Glucogen-XR in the bulk liquid was compared against the total theoretical mass loaded into the HDPE container.
Formula used:
$$A_{surf} = \frac{M_{initial} - (C_{liquid} \times V_{liquid})}{S_{area}}$$
Where:
*   $A_{surf}$ = Adsorbed mass per unit surface area ($\mu g/cm^2$)
*   $M_{initial}$ = Total mass of peptide at T=0
*   $C_{liquid}$ = Concentration at time $T$
*   $V_{liquid}$ = Volume of solution
*   $S_{area}$ = Surface area of HDPE contact ($cm^2$)

#### 6.2 Adsorption Data
Results indicated that a saturable monolayer forms within the first 24 hours of contact, after which no further significant adsorption is observed.
*   **Saturation Point:** 0.12 $\mu g/cm^2$
*   **Impact on Assay:** < 0.05% total loss for a 50L bulk container, deemed negligible for potency.

---

### 7.0 Extractables and Leachables (E&L) Correlation Study
A comprehensive correlation between the extractables profile (generated under "worst-case" solvent conditions: Isopropanol, Water at pH 2, Water at pH 10) and the leachables profile (in drug substance matrix) was performed.

#### 7.1 Statistical Analysis of Migration Kinetics
The migration of Irganox 1010 was modeled using Fick’s Second Law of Diffusion:
$$\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$$
Based on the experimental data at 25°C (accelerated), the Diffusion Coefficient ($D$) for Irganox 1010 in the HDPE matrix (GHS-CCS-01) was calculated as $1.2 \times 10^{-12} cm^2/s$. This indicates a very slow migration rate, ensuring that the concentration of leachables will remain well below the Safety Concern Threshold (SCT) of 1.5 $\mu g/day$ even at the end of the 36-month shelf life.

---

### 8.0 Specific Case Study: Compatibility with Heat-Induction Foil Seals
Batch **GLUC-2025-002** was specifically monitored for any interaction with the induction sealing process. The high-frequency magnetic field used to heat the aluminum foil liner could theoretically cause localized thermal degradation of the glucapeptide.

#### Table 3.2.S.6.4.2-5: Post-Sealing Compatibility Assessment
| Parameter | Pre-Sealing | Post-Sealing (Immediate) | 24 Hours Post-Seal |
| :--- | :--- | :--- | :--- |
| **Visible Particles** | None | None | None |
| **High Molecular Weight Species (HMWS)** | 0.11% | 0.11% | 0.12% |
| **Assay (mg/mL)** | 5.02 | 5.02 | 5.01 |
| **Oxidation (Met-O)** | 0.06% | 0.06% | 0.07% |

*Conclusion:* The induction sealing process does not impart sufficient thermal energy to the drug substance to trigger degradation or compatibility issues.

---

### 9.0 Summary of Sub-Visible Particulate Matter (USP <788>)
Compatibility with the container includes the assessment of particulates shed from the MOC.

#### Table 3.2.S.6.4.2-6: Sub-visible Particles (Mean of 3 Batches)
| Timepoint | Condition | ≥ 10 µm (particles/mL) | ≥ 25 µm (particles/mL) |
| :--- | :--- | :--- | :--- |
| **T0** | - | 120 | 8 |
| **T12** | 5°C | 145 | 12 |
| **T24** | 5°C | 168 | 15 |
| **T36** | 5°C | 192 | 18 |
| **USP Limit** | - | **≤ 6000** | **≤ 600** |

---

### 10.0 Overall Compatibility Conclusion
The long-term storage compatibility studies for Glucogen-XR Drug Substance demonstrate that the HDPE container closure system is highly compatible with the glucapeptide molecule.
1.  **Chemical Stability:** No significant change in assay or impurity profile was observed over 36 months at the recommended storage temperature of 5°C.
2.  **Leachables:** All detected leachables were significantly below the toxicological qualification thresholds (AET and SCT).
3.  **Physical Integrity:** No significant adsorption or particulate matter generation was observed.
4.  **Protective Barrier:** The CCS effectively protected the DS from moisture ingress and oxidative stress.

Based on these data, the proposed container closure system (GHS-CCS-01) is qualified for the storage of Glucogen-XR Drug Substance for a shelf life of up to 36 months when stored at 2°C to 8°C.

---
**End of Subsection 3.2.S.6.4.2**
**Approver:** Google Health Sciences Regulatory Affairs Quality Unit
**Date:** 15-OCT-2025
**Document ID:** GHS-GLUC-MOD3-2025-v1.0

---

## Freeze-Thaw Studies if Applicable

### 3.2.S.5.3.3.4 Freeze-Thaw Stability Studies for Glucogen-XR Drug Substance (DS)

---

#### 1.0 Executive Summary
This section provides a comprehensive evaluation of the freeze-thaw stability profile of Glucogen-XR (glucapeptide extended-release), a recombinant GLP-1 receptor agonist produced via the proprietary GHS-CHO-001 cell line. Given the thermal sensitivity of large peptide-polymer conjugates and the requirement for long-term storage of the Bulk Drug Substance (BDS) at ultra-low temperatures to maintain biological potency, robust freeze-thaw (F/T) qualification is mandatory.

The studies described herein support the storage of Glucogen-XR DS at nominal temperatures of -70°C to -80°C and demonstrate the robustness of the molecule through repeated cycles of freezing and thawing. These studies were conducted in accordance with **ICH Q5C** (*Stability Testing of Biotechnological/Biological Products*) and **ICH Q1A(R2)**.

#### 2.0 Scope and Objectives
The primary objective of these studies was to assess the physical, chemical, and biological stability of Glucogen-XR DS when subjected to multiple freeze-thaw cycles using representative primary containers (Sartorius Stedim Celsius® Paks and 10L Polycarbonate carboys).

Specific objectives included:
*   Determination of the maximum number of allowable F/T cycles without impact on Critical Quality Attributes (CQAs).
*   Assessment of protein aggregation (high molecular weight species) via SEC-HPLC and DLS.
*   Evaluation of peptide fragmentation and chemical degradation via RP-HPLC.
*   Confirmation of biological potency (cell-based cAMP induction assay).
*   Evaluation of sub-visible particulate formation (USP <788>).

#### 3.0 Regulatory Framework and Compliance
The studies were designed and executed in alignment with the following regulatory and compendial standards:
1.  **ICH Q5C**: Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
2.  **ICH Q6B**: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products.
3.  **USP <787>**: Subvisible Particulate Matter in Therapeutic Protein Injections.
4.  **USP <788>**: Particulate Matter in Injections.
5.  **21 CFR Part 211.166**: Stability Testing.

#### 4.0 Materials and Methods

##### 4.1 Test Articles
The studies utilized three (3) independent GMP-scale batches of Glucogen-XR Drug Substance.

**Table 1: Test Article Information**
| Batch Number | Scale | Date of Manufacture | Concentration (mg/mL) | Formulation Buffer |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L | 12-Jan-2025 | 50.4 | 20 mM Citrate, 100 mM NaCl, 0.02% PS-80, pH 6.0 |
| **GLUC-2025-002** | 2000L | 04-Feb-2025 | 49.8 | 20 mM Citrate, 100 mM NaCl, 0.02% PS-80, pH 6.0 |
| **GLUC-2025-003** | 2000L | 15-Feb-2025 | 51.2 | 20 mM Citrate, 100 mM NaCl, 0.02% PS-80, pH 6.0 |

##### 4.2 Freeze-Thaw Protocol
The study design utilized a "Worst-Case" approach regarding volume-to-surface area ratios and cooling/warming rates.

**Protocol ID: GHS-STB-PRO-044-FT**
1.  **Initial Sampling (Cycle 0 - Control):** Aliquots taken immediately after final filtration and before the first freeze.
2.  **Freezing Phase:** DS placed in a calibrated ultra-low temperature freezer (Asset ID: GHS-ULT-9922) set at -80°C ± 5°C. Samples held for a minimum of 24 hours to ensure complete solidification (verified by internal temperature probes).
3.  **Thawing Phase:** Samples moved to a controlled environment at +5°C ± 3°C or +25°C ± 2°C (ambient). Thawing continued until no visible ice crystals remained.
4.  **Cycling:** This process was repeated for up to 5 cycles (F/T1 to F/T5).
5.  **Sampling Intervals:** Samples were pulled for full analytical testing after Cycle 1, Cycle 3, and Cycle 5.

#### 5.0 Analytical Methodology and Acceptance Criteria
To ensure high sensitivity to degradation, the following validated methods were employed.

**Table 2: Analytical Methods and Specifications**
| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Appearance** | Visual (Ph. Eur. 2.2.1/2.2.2) | Clear to slightly opalescent, colorless |
| **Purity (Monomer)** | SEC-HPLC (Waters Alliance) | ≥ 98.0% |
| **High Molecular Weight (HMW)** | SEC-HPLC | ≤ 1.5% |
| **Chemical Purity** | RP-HPLC (Agilent 1260) | ≥ 95.0% |
| **Charge Variants** | cIEF (iCE3) | Main Peak: 65.0% - 80.0% |
| **Biological Potency** | Cell-based cAMP Assay | 80% - 125% of Reference Standard |
| **Sub-visible Particles** | HIAC (USP <788>) | ≥10μm: ≤6000/cont; ≥25μm: ≤600/cont |
| **Polysorbate 80** | RP-HPLC / ELSD | 0.015% - 0.025% (w/v) |

#### 6.0 Detailed Results (Batch GLUC-2025-001)

The following tables summarize the impact of five (5) freeze-thaw cycles on the CQAs of Batch GLUC-2025-001.

**Table 3: SEC-HPLC Purity Profile (Batch GLUC-2025-001)**
| Cycle # | % Monomer | % HMW Species | % LMW Species | Delta Monomer (vs C0) |
| :--- | :--- | :--- | :--- | :--- |
| **Cycle 0 (T0)** | 99.42 | 0.44 | 0.14 | N/A |
| **Cycle 1** | 99.40 | 0.45 | 0.15 | -0.02 |
| **Cycle 3** | 99.38 | 0.46 | 0.16 | -0.04 |
| **Cycle 5** | 99.35 | 0.48 | 0.17 | -0.07 |

*Statistical Analysis:* The p-value for the slope of monomer decline across 5 cycles was calculated at 0.14 (α=0.05), indicating no statistically significant degradation.

**Table 4: RP-HPLC Purity and Potency (Batch GLUC-2025-001)**
| Cycle # | RP-HPLC Purity (%) | Potency (% Relative) | pH (±0.1) | Osmolality (mOsm/kg) |
| :--- | :--- | :--- | :--- | :--- |
| **Cycle 0** | 97.8 | 102 | 6.0 | 285 |
| **Cycle 1** | 97.7 | 104 | 6.0 | 284 |
| **Cycle 3** | 97.6 | 101 | 6.1 | 286 |
| **Cycle 5** | 97.6 | 99 | 6.0 | 285 |

#### 7.0 Assessment of Aggregation and Sub-visible Particles
Cryoconcentration and ice-liquid interface denaturing are primary risks for GLP-1 peptides.

**Table 5: Sub-visible Particle Counts (USP <788>) per mL**
| Cycle # | ≥ 10 μm Particles | ≥ 25 μm Particles | Visual Observation |
| :--- | :--- | :--- | :--- |
| **Cycle 0** | 142 | 8 | Pass |
| **Cycle 1** | 155 | 11 | Pass |
| **Cycle 3** | 188 | 14 | Pass |
| **Cycle 5** | 212 | 19 | Pass |

*Note:* Particle counts remained orders of magnitude below USP <788> limits, suggesting that the formulation (specifically the 0.02% Polysorbate 80) provides adequate protection against surface-induced aggregation during phase transitions.

#### 8.0 Cumulative Stability Analysis (Batches GLUC-2025-001 through 003)
Across all three validation batches, the maximum observed increase in HMW species after five cycles was 0.06%. This is well within the acceptable variability of the SEC-HPLC method (RSD < 0.5%).

##### 8.1 Calculations for Cryoconcentration Risk
The cryoconcentration factor ($C_f$) was estimated using the solute distribution coefficient during slow freezing:
$$C_f = \frac{C_{liquid}}{C_{initial}}$$
For Glucogen-XR, $C_f$ remained below the critical threshold of 4.5, confirming that the buffer capacity (20 mM Citrate) is sufficient to maintain pH within ±0.2 units despite local concentration increases during ice formation.

#### 9.0 Conclusion
Based on the data presented for batches **GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003**, Glucogen-XR Drug Substance is physically and chemically stable for up to **five (5) freeze-thaw cycles** when stored at -80°C and thawed at +5°C or ambient temperatures.

There were no significant trends observed in:
1.  **Purity:** SEC and RP-HPLC results remained within specification.
2.  **Potency:** Biological activity remained within the 80-125% range.
3.  **Particulates:** Sub-visible particle counts showed negligible increases.

**Recommended Storage Instruction:** "Store Bulk Drug Substance at -80°C to -60°C. Protect from light. Product may undergo up to 5 validated freeze-thaw cycles."

---
*Footnotes:*
1. *GHS internal report #RPT-DS-2025-049: Qualification of Freeze-Thaw Profiles for Glucogen-XR.*
2. *Equipment used: Agilent 1260 Infinity II, HIAC 9703+, ProteinSimple iCE3.*
3. *Statistical analysis performed using JMP v16.2.*

---

## Adsorption Assessment

### 3.2.S.6.2.1 Adsorption Assessment of Glucogen-XR (glucapeptide extended-release)

#### 1.0 Executive Summary of Adsorption Risk
The therapeutic efficacy of Glucogen-XR, a long-acting GLP-1 receptor agonist, is highly dependent on maintaining a precise monomeric concentration within the drug product (DP) matrix. Due to the amphiphilic nature of the glucapeptide sequence and the presence of hydrophobic motifs required for extended-release properties, Glucogen-XR exhibits a high propensity for non-specific adsorption (NSA) to contact surfaces.

This assessment details the comprehensive study of Glucogen-XR adsorption kinetics across various primary packaging components, manufacturing contact materials (MCM), and clinical administration sets. In accordance with **ICH Q5C** and **FDA Guidance for Industry: Immunogenicity Assessment for Therapeutic Protein Products**, these studies quantify the mass balance of the API and identify strategies (e.g., surfactant optimization) to mitigate potency loss.

#### 2.0 Regulatory Framework and Compliance
All studies were conducted under cGLP conditions. The methodologies align with the following standards:
*   **USP <1206>**: Sterile Product Packaging—Integrity Evaluation.
*   **USP <1663>**: Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems.
*   **ICH Q1A(R2)**: Stability Testing of New Drug Substances and Products.
*   **ISO 10993-12**: Biological evaluation of medical devices — Sample preparation and reference materials.

#### 3.0 Technical Specifications of Glucogen-XR Molecule
The adsorption profile is governed by the physicochemical properties of the glucapeptide:
*   **Molecular Weight:** 4,113.6 Da.
*   **Isoelectric Point (pI):** 4.85.
*   **Hydrophobicity (LogP):** -1.2 (at pH 7.4).
*   **Secondary Structure:** Alpha-helical content 42% (determined by Circular Dichroism).
*   **Batch Material Used:** GLUC-2025-001, GLUC-2025-004, and GLUC-2025-012.

---

#### 4.0 Adsorption Kinetics on Primary Contact Materials
The following study evaluates the adsorptive loss of Glucogen-XR onto Type 1 Borosilicate glass (vials) and Fluoropolymer-coated chlorobutyl rubber (stoppers).

##### 4.1 Methodology: Quartz Crystal Microbalance with Dissipation (QCM-D)
To determine the real-time mass of Glucogen-XR adhering to surfaces, QCM-D (Biolin Scientific Q-Sense) was employed using sensor crystals coated with materials mimicking the final container closure system (CCS).

**Protocol ID: GHS-PROT-ADS-099**
1.  **Sensor Preparation:** Gold sensors were coated with a thin film of Silicon Dioxide (SiO2) to simulate Type 1 Glass.
2.  **Baseline Stabilization:** PBS buffer (pH 7.4) was flowed at 50 µL/min until a stable frequency (Δf < 0.1 Hz/10 min) was achieved.
3.  **Sample Injection:** Glucogen-XR solution (1.0 mg/mL) was injected for 60 minutes.
4.  **Rinse Phase:** Buffer rinse to determine "Irreversible Adsorption."
5.  **Calculation:** The Sauerbrey equation was used for rigid films; the Voigt model was used for viscoelastic peptide layers.

**Equation 1: Sauerbrey Relation**
$$\Delta m = - \frac{C \cdot \Delta f}{n}$$
Where:
*   $\Delta m$ = Change in mass ($ng/cm^2$)
*   $C$ = Mass sensitivity constant ($17.7 ng \cdot cm^{-2} \cdot Hz^{-1}$ at 5 MHz)
*   $\Delta f$ = Change in frequency
*   $n$ = Overtone number

##### 4.2 Results: Surface Mass Density
The table below summarizes the adsorption density across different contact materials for Batch GLUC-2025-001.

**Table 1: Adsorption Mass Balance on Contact Surfaces (n=3)**

| Surface Material | Surface Treatment | Temp (°C) | Total Adsorbed Mass (ng/cm²) | Reversibility (%) | Equilibrium Time (min) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Type 1 Borosilicate | None | 5 | 425.3 ± 12.4 | 12.1% | 45 |
| Type 1 Borosilicate | None | 25 | 618.9 ± 18.2 | 8.4% | 30 |
| Type 1 Borosilicate | Siliconized (350 cSt) | 25 | 112.5 ± 5.6 | 45.2% | 15 |
| Chlorobutyl Rubber | Uncoated | 25 | 890.2 ± 32.1 | 4.2% | 120 |
| Chlorobutyl Rubber | Fluoropolymer (FluroTec®) | 25 | 45.3 ± 2.1 | 88.7% | 10 |
| Stainless Steel 316L | Electropolished | 25 | 740.1 ± 22.4 | 15.5% | 60 |

---

#### 5.0 Effect of Surfactant Concentration on Adsorption Mitigation
To minimize the loss of API during fill-finish operations and long-term storage, Poloxamer 188 (P188) was evaluated as a competitive inhibitor of surface adsorption.

##### 5.1 Experimental Setup
Glucogen-XR (Batch GLUC-2025-004) was formulated at 5.0 mg/mL with varying concentrations of P188 (0.00% to 0.10% w/v). Solutions were stored in 2R vials for 72 hours at 2-8°C. Protein recovery was measured via RP-HPLC.

**Table 2: Protein Recovery as a Function of Poloxamer 188 Concentration**

| Sample ID | P188 Conc. (% w/v) | Initial Conc. (mg/mL) | 72h Conc. (mg/mL) | % Recovery | Observation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ADS-01-A | 0.000 | 5.02 | 4.31 | 85.8% | Visible opalescence |
| ADS-01-B | 0.005 | 5.01 | 4.78 | 95.4% | Clear solution |
| ADS-01-C | 0.010 | 5.03 | 4.98 | 99.0% | Clear solution |
| ADS-01-D | 0.020 | 5.00 | 4.99 | 99.8% | Target concentration |
| ADS-01-E | 0.050 | 5.02 | 5.01 | 99.8% | No benefit >0.02% |

**Statistical Analysis:** A regression analysis indicates that the Critical Micelle Concentration (CMC) of the surfactant in the presence of Glucogen-XR is effectively reached at 0.015% w/v, providing a protective monolayer that prevents hydrophobic peptide interaction with the glass silanol groups.

---

#### 6.0 Manufacturing Scale Adsorption Assessment (MCM)
During the fill-finish process at the Google Health Sciences facility (3000 Innovation Drive), the drug substance travels through approximately 12 meters of silicone tubing and across multiple 316L stainless steel holding tanks.

##### 6.1 Pilot Scale Study: Batch GLUC-2025-012
A "worst-case" hold time study was conducted using a 50L stainless steel surge tank and Platinum-cured silicone tubing (ID 1/4").

**Table 3: Cumulative Loss Across Manufacturing Train**

| Process Step | Contact Material | Contact Area (cm²) | Residence Time | Cumulative Loss (mg) | % of Batch |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Bulk Thaw | LDPE Bag | 4,500 | 12 hrs | 12.4 | 0.01% |
| Mixing Tank | 316L SS | 12,200 | 4 hrs | 85.6 | 0.07% |
| Transfer Line | Silicone | 1,200 | 30 min | 45.2 | 0.04% |
| Sterile Filter | PES Membrane | 2,000 | 2 hrs | 210.5 | 0.18% |
| **Total Loss** | -- | -- | -- | **353.7** | **0.30%** |

**Conclusion on MCM:** The total cumulative loss of 0.30% is within the acceptable potency variation limit (±5.0%). No adjustment to the overfill volume is required based on MCM adsorption.

---

#### 7.0 Clinical Administration Set Adsorption (Infusion Study)
While Glucogen-XR is primarily a subcutaneous injection, compatibility with IV administration sets was evaluated for potential hospital-based clinical trials involving insulin-sensitization protocols.

##### 7.1 Protocol for Infusion Set Compatibility
*   **Set A:** PVC with DEHP.
*   **Set B:** PVC Non-DEHP (Trio-layer).
*   **Set C:** Polyethylene (PE) lined.
*   **Flow Rate:** 2 mL/hr (Simulating low-flow micro-infusion).

**Table 4: Effluent Concentration Over Time (Relative to Input)**

| Time Point (min) | Set A (PVC) % Recovery | Set B (Non-DEHP) % Recovery | Set C (PE-Lined) % Recovery |
| :--- | :--- | :--- | :--- |
| 0 | 0.0% | 0.0% | 0.0% |
| 15 | 42.1% | 55.4% | 88.9% |
| 30 | 68.4% | 72.1% | 94.5% |
| 60 | 82.3% | 85.9% | 98.2% |
| 120 | 91.0% | 93.4% | 99.5% |
| 240 | 96.5% | 97.2% | 99.8% |

**Table 4 Analysis:** Significant "lag time" is observed in PVC sets due to high internal surface area and hydrophobic binding sites. **Instruction:** For any clinical use involving infusion, PE-lined sets are mandatory, and a 20 mL prime volume is required to saturate remaining binding sites.

---

#### 8.0 Impact on Secondary Structure (Conformational Adsorption)
Adsorption is often followed by protein unfolding (denaturation). This was assessed using Attenuated Total Reflection Fourier Transform Infrared (ATR-FTIR) spectroscopy on surfaces post-exposure to Glucogen-XR.

*   **Spectral Region:** Amide I band (1600–1700 cm⁻¹).
*   **Findings:** On untreated glass, a shift in the peak from 1654 cm⁻¹ (Alpha-helix) to 1622 cm⁻¹ (Intermolecular Beta-sheet) was observed, indicating that adsorbed molecules undergo aggregation.
*   **Mitigation Success:** In the presence of 0.02% Poloxamer 188, the Amide I signal remained centered at 1655 cm⁻¹, confirming that the surfactant prevents the conformational change associated with surface-induced aggregation.

---

#### 9.0 Summary of Adsorption Control Strategy
Based on the data presented in sections 4.0 through 8.0, Google Health Sciences has implemented the following controls for Glucogen-XR:

1.  **Formulation:** Inclusion of 0.02% (w/v) Poloxamer 188 to saturate hydrophobic interfaces.
2.  **Primary Packaging:** Utilization of FluroTec® coated stoppers to reduce rubber-interface adsorption by >90%.
3.  **Manufacturing:** Minimization of silicone tubing lengths and mandatory "pre-conditioning" of the sterile filter with 500 mL of formulation buffer prior to the start of filtration.
4.  **Shelf-Life Monitoring:** Ongoing stability batches (GLUC-2025-001, 002, 003) include sub-visible particulate testing (USP <788>) to ensure adsorbed/desorbed species do not seed large-scale aggregation.

---
**References:**
1. *Google Health Sciences Internal Report GHS-RPT-2025-044: Surface Plasmon Resonance Analysis of Glucapeptide Binding.*
2. *Journal of Pharmaceutical Sciences (2023), "Adsorption of GLP-1 Analogs to Borosilicate Glass: A Kinetic Study."*
3. *USP <1663> Assessment of Extractables.*
4. *ICH Q5C Quality of Biotechnological Products: Stability Testing.*

---

# Stability Data in Container Closure System

## Real-Time Stability

**CONFIDENTIAL – FOR REGULATORY SUBMISSION PURPOSES ONLY**
**Document ID:** GHS-GLUC-XR-M3-S-7-3-STAB-RT
**Module 3:** Quality (Chemical, Pharmaceutical, and Biological Information)
**Section 3.2.S.7.3:** Stability Data – Real-Time / Long-Term Stability Studies
**Sponsor:** Google Health Sciences, a Division of Google Cloud Life Sciences
**Drug Substance:** Glucogen-XR (glucapeptide extended-release)
**Manufacturing Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA

---

# 3.2.S.7.3 REAL-TIME STABILITY DATA IN CONTAINER CLOSURE SYSTEM

## 1.0 Executive Summary
This section provides a comprehensive analysis of the real-time (long-term) stability data for Glucogen-XR drug substance (DS), a recombinant glucapeptide GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. In accordance with ICH Q1A(R2) *Stability Testing of New Drug Substances and Products* and ICH Q5C *Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products*, three primary registration batches (GLUC-2025-001, GLUC-2025-002, and GLUC-2025-003) were placed on long-term stability monitoring.

The data presented herein supports a retest period of 36 months when stored at the recommended long-term storage condition of -70°C ± 10°C (Ultra-Low Temperature Freezer) in the primary container closure system.

## 2.0 Stability Protocol and Statistical Design

### 2.1 Study Objectives
The primary objective of the real-time stability program is to establish the shelf-life and storage conditions for Glucogen-XR DS by monitoring the physical, chemical, and biological integrity of the peptide over time. The study assesses:
1.  **Potency:** Maintenance of GLP-1 receptor activation via cell-based bioassay.
2.  **Purity:** Monitoring of high-molecular-weight species (HMWS) and degradation products (deamidated/oxidized forms).
3.  **Safety:** Monitoring of endotoxin levels and microbial purity.
4.  **Container Compatibility:** Assessment of leachable profiles and container integrity at cryogenic temperatures.

### 2.2 Storage Conditions and Sampling Intervals
The stability program follows a formal matrixing/bracketing design where applicable, though for the primary registration batches, full testing is performed at every interval.

**Table 2.2-1: Stability Storage Conditions**
| Condition | Temperature | Humidity | Purpose |
| :--- | :--- | :--- | :--- |
| **Long-Term (LT)** | -70°C ± 10°C | N/A | Primary Retest Period Support |
| **Intermediate (INT)** | -20°C ± 5°C | N/A | Support for Excursion Management |
| **Accelerated (ACC)** | 5°C ± 3°C | Ambient | Degradation Pathway Identification |
| **Stress (STR)** | 25°C ± 2°C | 60% ± 5% RH | Forced Degradation/Safety Margin |

**Table 2.2-2: Sampling Schedule (Months)**
| Condition | 0 | 3 | 6 | 9 | 12 | 18 | 24 | 36 | 48 | 60 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| -70°C | X | X | X | X | X | X | X | X | X | X |
| -20°C | X | X | X | X | X | X | X | X | - | - |
| 5°C | X | X | X | X | X | - | - | - | - | - |

### 2.3 Container Closure System (CCS)
The Drug Substance is stored in 10L Sartorius Stedim Celsius® FFT (Flexible Freeze-Thaw) bags.
*   **Product Contact Layer:** Ethylene Vinyl Acetate (EVA) / Ultra-low-density Polyethylene (ULDPE).
*   **Shell:** Polycarbonate (PC).
*   **Tubing:** Thermoplastic Elastomer (TPE) with C-Flex® 374.
*   **Connectors:** MPC/MPX quick-connectors and sterile weldable tubing.

## 3.0 Analytical Procedures and Specifications
Stability-indicating methods were validated per ICH Q2(R1).

### 3.1 List of Stability-Indicating Methods (SIM)
*   **RP-HPLC (Reversed-Phase):** Measures purity and related substances (deamidation at Asn-28 and oxidation at Met-8).
*   **SE-HPLC (Size-Exclusion):** Measures monomers, dimers, and high-molecular-weight aggregates.
*   **cIEF (Capillary Isoelectric Focusing):** Measures charge variants (acidic and basic species).
*   **Cell-Based Bioassay (HEK293 GLP-1R/CRE-luc):** Measures biological activity (EC50).
*   **Microbial Enumeration (USP <61>/<62>):** Ensures sterility and absence of specified pathogens.

## 4.0 Batch Analysis Data (Long-Term: -70°C)

### 4.1 Batch GLUC-2025-001 (Primary Registration Batch)
**Manufacturing Date:** 15-JAN-2025
**Scale:** 2000L Bioreactor
**Fill Volume:** 8.5L per bag

**Table 4.1-1: Stability Data for GLUC-2025-001 at -70°C ± 10°C**
| Test Parameter | Specification | T=0 (Initial) | T=6 Months | T=12 Months | T=24 Months |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear to opalescent | Confirms | Confirms | Confirms | Confirms |
| **pH** | 6.5 ± 0.3 | 6.51 | 6.52 | 6.50 | 6.53 |
| **Protein Conc. (A280)** | 25.0 ± 2.5 mg/mL | 25.1 mg/mL | 25.0 mg/mL | 25.2 mg/mL | 25.1 mg/mL |
| **SE-HPLC (% Monomer)** | ≥ 98.0% | 99.8% | 99.7% | 99.7% | 99.6% |
| **RP-HPLC (% Purity)** | ≥ 95.0% | 98.5% | 98.3% | 98.1% | 97.9% |
| **Potency (% Relative)** | 80% – 125% | 102% | 104% | 99% | 101% |
| **Endotoxin (LAL)** | ≤ 0.5 EU/mg | < 0.05 | < 0.05 | < 0.05 | < 0.05 |
| **Bioburden** | < 10 CFU/100 mL | 0 | 0 | 0 | 0 |

### 4.2 Batch GLUC-2025-002 (Primary Registration Batch)
**Manufacturing Date:** 05-FEB-2025
**Scale:** 2000L Bioreactor

**Table 4.2-1: Stability Data for GLUC-2025-002 at -70°C ± 10°C**
| Test Parameter | Specification | T=0 (Initial) | T=6 Months | T=12 Months | T=24 Months |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Appearance** | Clear to opalescent | Confirms | Confirms | Confirms | Confirms |
| **pH** | 6.5 ± 0.3 | 6.55 | 6.54 | 6.55 | 6.54 |
| **Protein Conc. (A280)** | 25.0 ± 2.5 mg/mL | 24.8 mg/mL | 24.9 mg/mL | 24.7 mg/mL | 24.8 mg/mL |
| **SE-HPLC (% Monomer)** | ≥ 98.0% | 99.7% | 99.7% | 99.6% | 99.5% |
| **RP-HPLC (% Purity)** | ≥ 95.0% | 98.2% | 98.0% | 97.8% | 97.5% |
| **Potency (% Relative)** | 80% – 125% | 98% | 101% | 97% | 100% |

### 4.3 Batch GLUC-2025-003 (Primary Registration Batch)
**Manufacturing Date:** 28-FEB-2025
**Scale:** 2000L Bioreactor

**Table 4.3-1: Stability Data for GLUC-2025-003 at -70°C ± 10°C**
| Test Parameter | Specification | T=0 (Initial) | T=6 Months | T=12 Months | T=24 Months |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SE-HPLC (% Monomer)** | ≥ 98.0% | 99.9% | 99.8% | 99.7% | 99.7% |
| **RP-HPLC (% Purity)** | ≥ 95.0% | 98.7% | 98.5% | 98.3% | 98.2% |
| **Potency (% Relative)** | 80% – 125% | 105% | 103% | 105% | 102% |

---

## 5.0 Degradation Pathway Analysis

### 5.1 Aggregation (SE-HPLC)
The primary degradation pathway for Glucogen-XR is the formation of dimers and higher-order aggregates. At -70°C, the rate of aggregation is negligible ($k < 0.001\% \text{ per month}$). 

**Statistical Modeling of Aggregation:**
Regression analysis of the pooled data from batches GLUC-2025-001/002/003 shows a 95% confidence interval that does not cross the 98.0% limit before 60 months.
*   **Equation:** $Y = -0.0083X + 99.81$
*   **$R^2$:** 0.942

### 5.2 Deamidation and Oxidation (RP-HPLC)
Glucapeptides are susceptible to deamidation at the Asparagine (Asn) residue in position 28 and oxidation at Methionine (Met) at position 8. At -70°C, these chemical modifications are kinetically frozen. Under accelerated conditions (5°C), deamidation increases to ~0.5% per month, confirming the stability-indicating nature of the RP-HPLC method.

---

## 6.0 Detailed Stability Protocol for Retest Extension

### 6.1 Sample Management Protocol (SOP-GHS-STAB-01)
1.  **Retrieval:** Samples are removed from the ULT freezer by qualified personnel using cryogenic PPE.
2.  **Thawing:** Samples are thawed in a controlled $25^\circ C$ water bath for 45 minutes to ensure uniform temperature transition and minimize localized concentration gradients (the "cryoconcentration effect").
3.  **Homogenization:** After thawing, the DS bag is gently inverted 10 times.
4.  **Aliquoting:** Under a Class II Type A2 Biosafety Cabinet (BSC), 2 mL aliquots are taken for analytical testing.

### 6.2 Analytical Acceptance Criteria
The DS is considered stable if:
*   Purity by SE-HPLC remains $\ge 98\%$.
*   Relative Potency remains within $80-125\%$ of the reference standard.
*   No new degradation peaks $> 0.1\%$ appear in the RP-HPLC chromatogram.

---

## 7.0 Statistical Evaluation (ICH Q1E)
A linear regression analysis was performed on the quantitative stability data (Purity and Potency).

**Calculation of 95% Lower Confidence Bound for SE-HPLC Monomer:**
Using the formula:
$$\hat{Y} \pm t_{\alpha, n-2} \cdot \sqrt{MSE \cdot \left( \frac{1}{n} + \frac{(X - \bar{X})^2}{\sum (X_i - \bar{X})^2} \right)}$$
The projected time to reach the lower specification limit (98.0%) at -70°C is **74.2 months**. Per FDA guidance, a retest period of 36 months is conservatively proposed, representing less than half of the statistically projected stability.

---

## 8.0 Conclusion
The real-time stability data for Glucogen-XR Drug Substance demonstrates excellent stability over 24 months of available data at the recommended storage temperature of -70°C. There are no significant trends toward degradation, and all parameters remain well within the established specifications. Google Health Sciences proposes a **36-month retest period** for Glucogen-XR DS stored at -70°C ± 10°C in the approved container closure system.

---
**End of Section**
**Approved By:**
*Dr. Elizabeth Chen, Head of Quality Regulatory Affairs*
*Date: 14-OCT-2025*

---

## Accelerated Stability

### 3.2.S.7.3 Stability Data: Accelerated Stability Testing for Glucogen-XR (glucapeptide)

#### 3.2.S.7.3.1 Introduction and Objective
The Accelerated Stability program for Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) was designed in strict accordance with **ICH Q1A(R2) Stability Testing of New Drug Substances and Products**, **ICH Q5C Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products**, and **USP <1049> Content and Quality of Biopharmaceutical Products**.

The primary objective of this study is to characterize the degradation kinetics of the glucapeptide molecule under increased thermal and humidity stress. By exposing Glucogen-XR to conditions of $25^\circ\text{C} \pm 2^\circ\text{C} / 60\% \text{RH} \pm 5\% \text{RH}$ (accelerated) and $40^\circ\text{C} \pm 2^\circ\text{C} / 75\% \text{RH} \pm 5\% \text{RH}$ (stress), Google Health Sciences (GHS) establishes the "shelf-life limiting" degradation pathways, specifically deamidation, aggregation (high molecular weight species), and oxidation.

#### 3.2.S.7.3.2 Selection of Batches
Three primary registration batches of Glucogen-XR Drug Substance were utilized. These batches were manufactured at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco, CA) using the proprietary GHS-CHO-001 cell line and represent the commercial scale process (2,000L).

**Table 3.2.S.7.3-1: Identification of Batches for Accelerated Stability Studies**

| Batch Number | Manufacturing Date | Scale (Liters) | Use in Clinical Trials | Container Closure System |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 12-JAN-2025 | 2,000 L | Phase III (GHS-P3-09) | 5L HDPE Bottle / Teflon Liner |
| GLUC-2025-002 | 02-FEB-2025 | 2,000 L | Phase III (GHS-P3-10) | 5L HDPE Bottle / Teflon Liner |
| GLUC-2025-003 | 24-MAR-2025 | 2,000 L | Process Validation | 5L HDPE Bottle / Teflon Liner |

#### 3.2.S.7.3.3 Protocol and Sampling Schedule
Samples were pulled from the stability chambers (Chamber ID: GHS-STAB-09, calibrated per SOP-ENG-044) at the following intervals.

**Table 3.2.S.7.3-2: Sampling Matrix for Accelerated Conditions ($25^\circ\text{C} / 60\% \text{RH}$)**

| Test Parameter | T=0 | 1 Mo | 2 Mo | 3 Mo | 6 Mo |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Appearance | X | X | X | X | X |
| pH (USP <791>) | X | X | X | X | X |
| Protein Concentration (A280) | X | X | X | X | X |
| Purity by SE-HPLC | X | X | X | X | X |
| Purity by RP-HPLC | X | X | X | X | X |
| Charge Variants (iCEF) | X | X | X | X | X |
| Potency (Cell-based Bioassay) | X | - | - | X | X |
| Bioburden/Endotoxin | X | - | - | - | X |

#### 3.2.S.7.3.4 Detailed Analytical Methodologies
To ensure the sensitivity required to detect minor degradants in the extended-release formulation, the following validated methods were employed:

##### 3.2.S.7.3.4.1 Size Exclusion HPLC (SE-HPLC)
Used to monitor High Molecular Weight Species (HMWS).
*   **Column:** TSKgel G3000SWxl, $7.8 \text{ mm ID} \times 30 \text{ cm}$.
*   **Mobile Phase:** 50 mM Sodium Phosphate, 300 mM NaCl, pH 6.8.
*   **Flow Rate:** 0.5 mL/min.
*   **Detector:** 214 nm and 280 nm.
*   **Acceptance Criteria:** Main Peak $\geq 98.0\%$; HMWS $\leq 1.5\%$.

##### 3.2.S.7.3.4.2 Reversed-Phase HPLC (RP-HPLC)
Used to monitor chemical modifications such as oxidation at Met-14 and deamidation at Asn-28.
*   **Column:** Zorbax 300SB-C18, $4.6 \times 250 \text{ mm}, 5 \mu\text{m}$.
*   **Gradient:** Water/Acetonitrile with 0.1% TFA.
*   **Acceptance Criteria:** Main Peak $\geq 95.0\%$.

#### 3.2.S.7.3.5 Results for Batch GLUC-2025-001 ($25^\circ\text{C} / 60\% \text{RH}$)

**Table 3.2.S.7.3-3: Stability Data Summary for GLUC-2025-001**

| Time Point | Appearance | pH | Concentration (mg/mL) | Purity (SE-HPLC %) | HMWS (%) | Purity (RP-HPLC %) | Potency (% Reference) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T=0** | Clear, Colorless | 6.51 | 50.1 | 99.4 | 0.5 | 98.2 | 102 |
| **1 Month** | Clear, Colorless | 6.50 | 50.2 | 99.2 | 0.6 | 97.8 | N/A |
| **2 Month** | Clear, Colorless | 6.52 | 49.9 | 98.9 | 0.9 | 97.1 | N/A |
| **3 Month** | Clear, Colorless | 6.51 | 50.0 | 98.7 | 1.1 | 96.5 | 98 |
| **6 Month** | Clear, Sl. Opalescent| 6.49 | 49.8 | 98.1 | 1.4 | 95.4 | 96 |

#### 3.2.S.7.3.6 Degradation Kinetics and Statistical Analysis
The degradation of Glucogen-XR follows pseudo-first-order kinetics for HMWS formation. Using the Arrhenius equation:
$$k = A \cdot e^{-E_a / RT}$$
Where:
*   $k$ = rate constant
*   $E_a$ = Activation Energy (calculated at $74.2 \text{ kJ/mol}$ for aggregation)
*   $R$ = Universal Gas Constant ($8.314 \text{ J/mol}\cdot\text{K}$)
*   $T$ = Absolute Temperature (K)

Based on the 6-month accelerated data, the predicted purity at the recommended storage condition ($5^\circ\text{C}$) remains above 98% for a duration of 36 months. However, the $25^\circ\text{C}$ data indicates a "significant change" (as defined by ICH Q1A(R2)) would occur at approximately 9 months, justifying the refrigerated storage claim.

#### 3.2.S.7.3.7 Forced Degradation (Stress Stability) at $40^\circ\text{C}$
To support the robustness of the analytical methods, Batch GLUC-2025-002 was exposed to $40^\circ\text{C} / 75\% \text{RH}$ for 1 month.

**Table 3.2.S.7.3-4: Stress Data for GLUC-2025-002 ($40^\circ\text{C} / 75\% \text{RH}$)**

| Interval | Test | Result | Observation |
| :--- | :--- | :--- | :--- |
| **T=0** | SE-HPLC | 99.3% | Initial state |
| **2 Weeks** | SE-HPLC | 94.2% | Significant increase in dimer/trimer |
| **4 Weeks** | SE-HPLC | 88.5% | Visible precipitation observed |
| **4 Weeks** | iCEF | 72.1% (Main) | Heavy acidic variant increase (deamidation) |

#### 3.2.S.7.3.8 Conclusion on Accelerated Stability
The accelerated stability data for Glucogen-XR (Batches GLUC-2025-001, -002, and -003) demonstrate that the Drug Substance is physically and chemically stable for at least 6 months at $25^\circ\text{C}$. The primary degradation pathway is the formation of HMWS and acidic variants. These results support the proposed retest period when stored at the intended storage condition of $2^\circ\text{C} - 8^\circ\text{C}$. All parameters remained within the established shelf-life specifications throughout the 6-month accelerated study period.

*This concludes the summary for Accelerated Stability. Long-term stability data (ongoing) are provided in Section 3.2.S.7.3.9.*

---

## Stress Conditions

### **3.2.S.7.3 Stability Summary and Conclusions: Stress Conditions (Forced Degradation Studies)**

#### **3.2.S.7.3.1 Introduction and Objective**
The objective of the forced degradation (stress testing) program for Glucogen-XR (glucapeptide extended-release) drug substance is to elucidate the intrinsic stability characteristics of the molecule, identify potential degradation products, and validate the stability-indicating power of the analytical procedures employed in the formal stability program (Section 3.2.S.7.1). 

In alignment with **ICH Q1A(R2) *Stability Testing of New Drug Substances and Products*** and **ICH Q1B *Photostability Testing of New Drug Substances and Products***, Google Health Sciences (GHS) has subjected Glucogen-XR to conditions exceeding those of accelerated testing. These studies are designed to achieve a degradation level of approximately 10% to 20% of the initial main peak area by Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC) and Size Exclusion Chromatography (SEC), ensuring that the primary degradation pathways are adequately characterized without inducing secondary degradation artifacts.

#### **3.2.S.7.3.2 Test Materials and Batch Information**
The studies were conducted on three representative GMP-grade batches of Glucogen-XR Drug Substance (DS) manufactured at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco, CA).

**Table 3.2.S.7.3-1: Batch Identification for Stress Studies**
| Batch Number | Scale | Date of Manufacture | Usage |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2000L (Commercial) | 12-JAN-2025 | Primary Stress Profile |
| **GLUC-2025-002** | 2000L (Commercial) | 18-JAN-2025 | Confirmatory Study |
| **GLUC-2025-003** | 2000L (Commercial) | 25-JAN-2025 | Photo/Thermal Robustness |

---

#### **3.2.S.7.3.3 Experimental Design and Protocol**
The forced degradation program encompasses a matrix of stressors including thermal, hydrolytic (pH-dependent), oxidative, and photolytic challenges. All samples were analyzed using a suite of stability-indicating assays validated under **ICH Q2(R1)**.

##### **3.2.S.7.3.3.1 Thermal Stress (Dry and Solution State)**
Glucogen-XR DS was exposed to elevated temperatures to evaluate the kinetics of deamidation, aggregation, and peptide bond hydrolysis.
*   **Protocol TS-01 (Solid State):** 500 mg of lyophilized DS was stored at 60°C ± 2°C in a calibrated incubator (Equipment ID: GHS-INC-09) for 14 days.
*   **Protocol TS-02 (Liquid State):** DS at 10 mg/mL in formulation buffer (20 mM Histidine, 10% Sucrose, pH 6.5) was stored at 40°C ± 2°C for 28 days.

##### **3.2.S.7.3.3.2 pH-Mediated Hydrolysis**
The vulnerability of the glucapeptide backbone and side chains to acid and base catalysis was assessed.
*   **Acidic Stress:** Samples adjusted to pH 2.0 using 1.0M HCl and incubated at 25°C for 48 hours.
*   **Basic Stress:** Samples adjusted to pH 10.0 using 1.0M NaOH and incubated at 25°C for 24 hours.
*   **Neutralization:** Following incubation, samples were neutralized to pH 6.5 ± 0.2 prior to analysis to prevent further degradation during the chromatographic run.

##### **3.2.S.7.3.3.3 Oxidative Stress**
Susceptibility to oxidation of Methionine (Met) and Tryptophan (Trp) residues was evaluated.
*   **Protocol OX-01:** Exposure to 0.3% H₂O₂ (v/v) at 25°C for 6 hours and 24 hours.
*   **Protocol OX-02:** Trace metal-induced oxidation using 0.1 mM FeCl₃ for 48 hours to simulate potential leaching from manufacturing equipment.

##### **3.2.S.7.3.3.4 Photostability (ICH Q1B)**
Samples were exposed to a total illumination of not less than 1.2 million lux-hours and an integrated near-ultraviolet energy of not less than 200 watt-hours/square meter.
*   **Apparatus:** Caron Photostability Chamber (Model 6545-2).
*   **Controls:** "Dark" controls wrapped in aluminum foil were placed adjacent to the test samples.

---

#### **3.2.S.7.3.4 Analytical Methodology**
To ensure mass balance and comprehensive characterization, the following validated methods were utilized:
1.  **SE-HPLC (Size Exclusion):** For detection of high molecular weight species (HMWS) and fragments.
2.  **RP-HPLC (Reverse Phase):** For detection of chemical modifications (oxidation, deamidation).
3.  **CEX-HPLC (Cation Exchange):** For charge variant profiling (acidic and basic variants).
4.  **LC-MS/MS (Peptide Mapping):** To localize specific sites of degradation.
5.  **Potency (Cell-based Bioassay):** To measure GLP-1 receptor activation.

---

#### **3.2.S.7.3.5 Results and Discussion**

**Table 3.2.S.7.3-2: Summary of Forced Degradation Results (Batch GLUC-2025-001)**
| Stress Condition | Duration | Purity by RP-HPLC (%) | Purity by SE-HPLC (%) | Major Degradation Pathway |
| :--- | :--- | :--- | :--- | :--- |
| **Control (T=0)** | N/A | 98.4% | 99.2% | Baseline |
| **Thermal (60°C Liquid)** | 7 Days | 78.2% | 82.1% | Aggregation & Deamidation |
| **Acid (pH 2.0)** | 48 Hours | 84.5% | 94.6% | Asp-cleavage/Hydrolysis |
| **Base (pH 10.0)** | 24 Hours | 72.1% | 88.3% | Deamidation/Racemization |
| **Oxidation (0.3% H2O2)**| 6 Hours | 81.3% | 98.1% | Met³⁶ Oxidation |
| **Photostability (Option 2)**| 1.2M Lux-hr | 91.5% | 96.4% | Trp Photo-oxidation |

##### **3.2.S.7.3.5.1 Detailed Analysis of Thermal Degradation**
At 60°C in liquid state, Glucogen-XR exhibits a significant increase in High Molecular Weight Species (HMWS). Statistical analysis using a first-order kinetic model ($ln[C] = -kt + ln[C_0]$) yielded a degradation rate constant ($k$) of $0.032 day^{-1}$.
*   **Observation:** SE-HPLC chromatograms show a distinct dimer peak at Relative Retention Time (RRT) 0.85 and a multimer peak at RRT 0.72.
*   **Mechanism:** Non-covalent association followed by disulfide scrambling as confirmed by non-reducing SDS-PAGE.

##### **3.2.S.7.3.5.2 Chemical Characterization of pH Stress**
Under basic conditions (pH 10.0), Glucogen-XR is highly susceptible to deamidation at the $Asn^{28}$ position. 
*   **LC-MS/MS Data:** Peptide mapping of the Trypsin-digested stressed sample identified an increase in the mass of the T4 fragment by +0.98 Da, consistent with the conversion of Asparagine to Aspartic Acid/Iso-aspartic acid.
*   **Regulatory Significance:** This deamidation results in a "Basic Variant" shift in CEX-HPLC, which is monitored as a Critical Quality Attribute (CQA).

##### **3.2.S.7.3.5.3 Mass Balance Calculations**
Mass balance was calculated for all stressed samples by comparing the sum of the main peak and all degradants in the stressed sample to the main peak area of the unstressed control (adjusted for dilution).
$$Mass Balance (\%) = \frac{\Sigma Area_{Main} + \Sigma Area_{Degradants}}{Area_{Control}} \times 100$$
For all conditions except photolysis, mass balance was within **95.0% - 105.0%**, confirming that the analytical methods are capable of detecting all significant degradation products.

---

#### **3.2.S.7.3.6 Conclusion of Stress Studies**
The forced degradation studies for Glucogen-XR (GLUC-2025-001 through 003) demonstrate that the drug substance is most sensitive to:
1.  **Oxidation:** Specifically at the $Met^{36}$ residue.
2.  **Basic pH:** Leading to rapid deamidation.
3.  **High Temperature:** Inducing both aggregation and chemical degradation.

The analytical methods (RP-HPLC, SE-HPLC, CEX-HPLC) have been proven to be **stability-indicating**, as they can resolve the degradants formed under these extreme conditions from the main glucapeptide peak. These results support the proposed storage condition of **2°C to 8°C (protected from light)** and the use of a pH 6.5 histidine-based buffer system to minimize the identified degradation pathways.

---
**Footnotes & References:**
1. *ICH Q1A(R2): Stability Testing of New Drug Substances and Products.*
2. *Google Health Sciences Internal Report GHS-AN-2025-044: Characterization of Glucogen-XR Degradants.*
3. *USP <1049>: Quality Attributes of Therapeutic Peptides.*

---

# Regulatory Standards Compliance

## USP <661> Plastic Containers

# MODULE 3.2.S.6: CONTAINER CLOSURE SYSTEM
## SUBSECTION: REGULATORY STANDARDS COMPLIANCE – USP <661> PLASTIC PACKAGING SYSTEMS AND THEIR MATERIALS OF CONSTRUCTION

### 1.0 Executive Summary
This subsection details the comprehensive qualification and characterization of the primary packaging system components for Glucogen-XR (glucapeptide extended-release), manufactured by Google Health Sciences. The drug substance is housed in a high-density polyethylene (HDPE) reservoir integrated into the delivery device. In accordance with FDA Guidance for Industry "Container Closure Systems for Packaging Human Drugs and Biologics," and the mandatory requirements of the United States Pharmacopeia (USP), all plastic materials have been subjected to rigorous testing under USP <661>, encompassing USP <661.1> (Plastic Materials of Construction) and USP <661.2> (Plastic Packaging Systems for Pharmaceutical Use).

The primary focus of this section is to demonstrate that the plastic materials utilized in the storage of Glucogen-XR are chemically inert, do not leach harmful substances into the glucapeptide formulation, and maintain the physicochemical stability of the protein throughout the intended shelf life.

---

### 2.0 Material Specification and Identification
The primary container for Glucogen-XR is a customized 3.0 mL reservoir constructed from medical-grade High-Density Polyethylene (HDPE), designated internally as GHS-POL-044.

#### Table 1: Component Material Specification
| Component ID | Part Name | Material | Manufacturer | Grade | DMF Number |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GHS-RES-001 | Glucogen-XR Reservoir | HDPE | Polymer Corp International | MedGrade 9021 | 012345 |
| GHS-CAP-002 | Reservoir Cap | Polypropylene (PP) | Polymer Corp International | PP-Ultra-77 | 012346 |
| GHS-GAS-003 | Gasket/O-Ring | Bromobutyl Rubber | Elastomer Solutions | B-45-Low-Extract | 098765 |

---

### 3.0 USP <661.1> Plastic Materials of Construction Assessment
The HDPE (GHS-POL-044) used in the Glucogen-XR reservoir was evaluated to ensure it meets the requirements for a plastic material of construction intended for pharmaceutical use.

#### 3.1 Physicochemical Testing Protocols
Testing was performed on three distinct lots of HDPE resin used in the production of batches **GLUC-2025-001**, **GLUC-2025-002**, and **GLUC-2025-003**.

##### 3.1.1 Infrared Spectroscopy (Identification)
**Procedure:** A thin film of the material was prepared by heat compression. The IR spectrum was recorded from 3800 cm⁻¹ to 650 cm⁻¹ using a Fourier Transform Infrared (FTIR) Spectrophotometer (Equipment ID: GHS-FTIR-09).
**Acceptance Criteria:** The spectrum must exhibit absorption maxima only at the same wavelengths as the reference spectrum of USP High-Density Polyethylene RS.
**Result:** Pass. Characteristic peaks observed at 2915, 2848, 1471, and 718 cm⁻¹.

##### 3.1.2 Differential Scanning Calorimetry (DSC)
**Procedure:** 10 mg of the sample was heated under nitrogen at a rate of 10°C/min from 40°C to 200°C.
**Acceptance Criteria:** The melting peak temperature must be within 133°C to 138°C for HDPE.
**Result:** 135.4°C (Batch GLUC-2025-001).

#### Table 2: Physicochemical Characterization Data (USP <661.1>)
| Parameter | Test Method | Limit | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Absorbance** | USP <661.1> | ≤ 0.20 (220-340nm) | 0.04 | 0.05 | 0.04 |
| **TOC** | USP <643> | ≤ 5.0 mg/L | 1.2 mg/L | 1.4 mg/L | 1.1 mg/L |
| **Acidity/Alkalinity** | USP <661.1> | ≤ 0.4 mL 0.01N NaOH | 0.08 mL | 0.07 mL | 0.09 mL |
| **Extractable Metals** | ICP-MS | Complies with ICH Q3D | Complies | Complies | Complies |

---

### 4.0 USP <661.2> Plastic Packaging Systems for Pharmaceutical Use
The fully assembled reservoir (GHS-RES-001) was tested as a system. This ensures that the manufacturing processes (injection molding, sterilization) do not alter the safety profile of the material.

#### 4.1 Biological Reactivity Testing
The Glucogen-XR reservoir components underwent USP <87> (Biological Reactivity Test, In Vitro) and USP <88> (Biological Reactivity Test, In Vivo).

*   **USP <87> Results:** No reactivity (Grade 0) was observed in the Elution Test using L-929 mammalian fibroblast cells.
*   **USP <88> Results:** The material met the requirements for Class VI Plastics.
    *   *Systemic Injection Test (Mice):* No adverse reactions.
    *   *Intracutaneous Test (Rabbits):* No erythema or edema.
    *   *Implantation Test (Rabbits):* No significant tissue response over 7 days.

#### 4.2 Physicochemical Testing of System Extracts
Extracts were prepared using Purified Water, 50% Ethanol, and Polyethylene Glycol 400.

##### 4.2.1 Nonvolatile Residue (NVR) Calculation
The NVR was determined by evaporating 100 mL of the extract and drying at 105°C for 1 hour.
**Formula:**
$$NVR = (W_{sample} - W_{blank}) / V_{extract}$$
*Where:*
$W_{sample}$ = Weight of residue from sample (mg)
$W_{blank}$ = Weight of residue from control (mg)
$V_{extract}$ = Volume of extract used (100 mL)

#### Table 3: System Suitability Testing (USP <661.2>)
| Test | Condition | Limit | Result (GLUC-2025-001) |
| :--- | :--- | :--- | :--- |
| **NVR (Water)** | 70°C, 24h | < 15.0 mg | 2.1 mg |
| **NVR (Alcohol)** | 70°C, 24h | < 50.0 mg | 8.4 mg |
| **Residue on Ignition** | 800°C | < 5.0 mg | 0.4 mg |
| **Heavy Metals** | Method II | < 1 ppm | < 1 ppm |

---

### 5.0 Extractables and Leachables (E&L) Strategy
Beyond the baseline USP <661> requirements, Google Health Sciences performed an extensive E&L study in alignment with USP <1663> and USP <1664>.

#### 5.1 Controlled Extraction Study (CES)
The CES utilized three solvents of varying polarity:
1.  **Water at pH 3.0 and pH 9.0** (Modified with phosphate buffers)
2.  **Isopropanol (IPA)**
3.  **Hexane**

**Extraction Ratios:** 6 cm² surface area per 1 mL of solvent.
**Incubation:** 121°C for 1 hour (autoclave simulation) and 40°C for 30 days.

#### 5.2 Analytical Methodologies
*   **Volatile Organic Compounds (VOCs):** Headspace GC-MS (GHS-GC-04).
*   **Semi-Volatile Organic Compounds (SVOCs):** GC-MS (GHS-GC-05) after liquid-liquid extraction.
*   **Non-Volatile Organic Compounds (NVOCs):** UHPLC-QTOF-MS (GHS-LC-12).
*   **Inorganic Elements:** ICP-MS (GHS-ICP-01).

#### Table 4: Identified Extractables and Toxicological Evaluation
| Extractable Name | Source | Max Conc. Observed (µg/mL) | AET (Analytical Evaluation Threshold) | Toxicological Assessment |
| :--- | :--- | :--- | :--- | :--- |
| Irganox 1010 | Antioxidant | 0.45 | 0.10 | Below PDE |
| Irgafos 168 | Processing Stabilizer | 0.12 | 0.10 | Below PDE |
| Stearic Acid | Lubricant | 2.10 | 0.10 | Generally Recognized as Safe |
| Butylated Hydroxytoluene (BHT) | Antioxidant | 0.08 | 0.10 | Below AET |

**Analytical Evaluation Threshold (AET) Calculation:**
The AET was calculated based on a Safety Concern Threshold (SCT) of 1.5 µg/day, a dose volume of 0.5 mL per day, and a safety factor of 10.
$$AET = \frac{SCT \times D_t}{V_d \times n} \times RF$$
*Where:*
$SCT$ = 1.5 µg/day
$D_t$ = Dosing period
$V_d$ = Daily volume (0.5 mL)
$n$ = Number of containers (1)
$RF$ = Response Factor (0.1)

---

### 6.0 Detailed Protocol for USP <661> Compliance Verification

#### Protocol GHS-PROT-661-A: Physicochemical Testing of Plastic Systems

**1. Scope:**
This protocol applies to all HDPE reservoirs (GHS-RES-001) produced for Glucogen-XR clinical and commercial batches.

**2. Equipment:**
*   Calibrated Analytical Balance (Sartorius Entris II)
*   UV-Vis Spectrophotometer (Agilent Cary 60)
*   TOC Analyzer (Sievers M9)
*   Muffle Furnace (Thermolyne F6000)

**3. Sample Preparation (The "Extract"):**
1.  Select 10 reservoirs from Batch **GLUC-2025-XXX**.
2.  Fill each reservoir to 90% capacity with Purified Water (USP).
3.  Seal and place in a validated oven at 70°C ± 2°C for 24 hours.
4.  Allow to cool to room temperature.
5.  Pool the liquid into a clean, borosilicate glass flask.

**4. Absorbance Measurement:**
1.  Blank the UV-Vis with Purified Water.
2.  Scan the extract from 220 nm to 340 nm.
3.  Record the maximum absorbance. If > 0.2, the batch is rejected.

**5. Total Organic Carbon (TOC):**
1.  Acidify the extract to pH 2.0.
2.  Aerate to remove inorganic carbon.
3.  Inject into the TOC analyzer.
4.  Calculate TOC by subtracting the water blank value.

---

### 7.0 Batch Analysis Data
Below is the summary of compliance data for the registration batches.

#### Table 5: Multi-Batch USP <661> Comparison Report
| Test Parameter | Specification | GLUC-2025-001 | GLUC-2025-002 | GLUC-2025-003 |
| :--- | :--- | :--- | :--- | :--- |
| **Identification (FTIR)** | Match Reference | Conforms | Conforms | Conforms |
| **Heavy Metals** | < 1 ppm | < 0.2 ppm | < 0.2 ppm | < 0.2 ppm |
| **Nonvolatile Residue** | < 15 mg | 1.8 mg | 2.3 mg | 1.9 mg |
| **Residue on Ignition** | < 5 mg | 0.2 mg | 0.4 mg | 0.3 mg |
| **Buffering Capacity** | < 10.0 mL | 0.4 mL | 0.5 mL | 0.4 mL |

---

### 8.0 Conclusion
Based on the extensive testing performed under USP <661.1> and USP <661.2>, the GHS-RES-001 HDPE reservoir system is deemed suitable for the primary packaging of Glucogen-XR. The material demonstrates high chemical purity, negligible extractable levels, and full biological compatibility. There is no evidence of significant interaction between the glucapeptide and the plastic surface that would impact the safety or efficacy of the product.

---

### 9.0 References
1.  **USP <661.1>**: Plastic Materials of Construction.
2.  **USP <661.2>**: Plastic Packaging Systems for Pharmaceutical Use.
3.  **USP <87>**: Biological Reactivity Tests, In Vitro.
4.  **USP <88>**: Biological Reactivity Tests, In Vivo.
5.  **ICH Q3D**: Guideline for Elemental Impurities.
6.  **FDA Guidance**: Container Closure Systems for Packaging Human Drugs and Biologics (May 1999).
7.  **GHS-SOP-QC-992**: Quality Control Procedure for Plastic Resin Qualification.

---

## USP <1663> and <1664> Extractables and Leachables

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S.6: CONTAINER CLOSURE SYSTEM
### SUBSECTION 3.2.S.6.4: USP <1663> AND <1664> ASSESSMENT OF EXTRACTABLES AND LEACHABLES

---

#### 3.2.S.6.4.1 Executive Summary and Regulatory Rationale
Google Health Sciences (GHS) has conducted an exhaustive Extractables and Leachables (E&L) assessment for Glucogen-XR (glucapeptide extended-release), a high-concentration GLP-1 receptor agonist. Given the therapeutic nature of the drug substance (biologic/peptide) and the chronic administration route (subcutaneous), the risk assessment according to the FDA Guidance for Industry *Container Closure Systems for Packaging Human Drugs and Biologics (1999)* and the *ICH Q3E (draft)* identifies this product as High Risk (Route of Administration: Injectable; Likelihood of Interaction: High).

Consequently, GHS has implemented a comprehensive evaluation framework aligned with **USP <1663> Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems** and **USP <1664> Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems**.

#### 3.2.S.6.4.2 Scope of the Assessment
The scope covers the primary container closure system (CCS) components utilized during the drug substance (DS) storage and the final drug product (DP) configuration:
1.  **Component A:** Type I Borosilicate Glass Syringe Barrel (5.0 mL)
2.  **Component B:** Fluorocarbon-coated Bromobutyl Rubber Plunger Stopper (GHS-SPEC-772)
3.  **Component C:** Stainless Steel Needle (27G) with Rigid Needle Shield (RNS)
4.  **Component D:** Secondary Packaging (Foil-lined laminate for moisture barrier)

---

#### 3.2.S.6.4.3 USP <1663> Controlled Extraction Study (CES)

##### 3.2.S.6.4.3.1 Extraction Strategy and Selection of Solvents
In accordance with USP <1663>, extraction conditions were designed to be "vigorous" but not "destructive." The solvents were selected based on the polarity range of the drug product vehicle (pH 7.4 phosphate buffer with polysorbate 80).

**Table 1: Extraction Solvent Selection and Rationale**
| Solvent ID | Polarity Index | Rationale | Extraction Condition |
| :--- | :--- | :--- | :--- |
| Water (HPLC Grade) | 9.0 | Mimics aqueous base of formulation | 121°C, 1 hour (Autoclave) |
| Ethanol (Absolute) | 5.2 | Mimics organic soluble components | 55°C, 72 hours (Incubation) |
| Hexane (95%) | 0.1 | Mimics non-polar grease/silicone oils | 40°C, 24 hours (Agitation) |
| Citrate/Phosphate Buffer | 7.4 (pH) | Mimics exact pH of Glucogen-XR | 70°C, 120 hours |

##### 3.2.S.6.4.3.2 Analytical Evaluation Threshold (AET) Calculation
The AET was calculated based on the Safety Concern Threshold (SCT) of 1.5 µg/day for an individual leachable (as per PQRI recommendations for parenteral products).

**Formula:**
$$AET = \frac{SCT \times D_t}{D_d \times n}$$
*Where:*
*   $SCT$ = 1.5 µg/day
*   $D_t$ = Total components in CCS (1)
*   $D_d$ = Maximum Daily Dose (0.5 mL for Glucogen-XR)
*   $n$ = Concentration factor during sample prep (10x)

**Calculated AET:** 0.3 µg/mL (adjusted for analytical uncertainty factor of 2.0 = **0.15 µg/mL**).

---

#### 3.2.S.6.4.4 Analytical Methodologies for Extractables Profiling

GHS utilized a multi-detector approach to ensure comprehensive coverage of volatile, semi-volatile, and non-volatile organic compounds, as well as inorganic elements.

##### 3.2.S.6.4.4.1 HS-GC-MS (Headspace Gas Chromatography-Mass Spectrometry)
*   **Target:** Volatile Organic Compounds (VOCs).
*   **Equipment:** Agilent 7890B GC / 5977B MSD (Equipment ID: GHS-GCMS-04).
*   **Column:** DB-624 UI (30m x 0.25mm x 1.4µm).
*   **Temp Program:** 40°C (hold 5 min) to 240°C at 10°C/min.

##### 3.2.S.6.4.4.2 GC-MS (Gas Chromatography-Mass Spectrometry)
*   **Target:** Semi-Volatile Organic Compounds (SVOCs).
*   **Preparation:** Dichloromethane (DCM) liquid-liquid extraction of aqueous extracts.
*   **Library:** NIST 20, Wiley 12, and proprietary Google Life Sciences Bio-Polymer Library.

##### 3.2.S.6.4.4.3 LC-HRMS (Liquid Chromatography-High Resolution Mass Spectrometry)
*   **Target:** Non-Volatile Organic Compounds (NVOCs) / Antioxidants / Slip Agents.
*   **Equipment:** Thermo Scientific Q Exactive Plus (Orbitrap).
*   **Ionization:** ESI (+) and ESI (-) modes.

##### 3.2.S.6.4.4.4 ICP-MS (Inductively Coupled Plasma Mass Spectrometry)
*   **Target:** Elemental Impurities (USP <232>/<233>).
*   **Elements Scanned:** As, Cd, Hg, Pb, Sb, Li, V, Co, Ni, Cu, Ba, Mo, Sn, Al.

---

#### 3.2.S.6.4.5 Extractables Study Results: Batch GLUC-2025-EXT-01
The following table summarizes the compounds identified exceeding the AET in the controlled extraction study of the Fluorocarbon-coated Bromobutyl Plunger.

**Table 2: Extractable Compounds Identified (GLUC-2025-EXT-01)**
| Compound Name | CAS Number | Source | Max Conc. (µg/g) | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| BHT (Butylated hydroxytoluene) | 128-37-0 | Antioxidant | 42.5 | Low |
| Palmitic Acid | 57-10-3 | Lubricant | 12.1 | Low |
| Stearic Acid | 57-11-4 | Processing Aid | 18.4 | Low |
| Irganox 1010 | 6683-19-8 | Stabilizer | 5.2 | Low |
| N-butyl benzenesulfonamide | 3622-84-2 | Plasticizer | 0.8 | Moderate |
| Cyclic Trimer (PDMS) | 541-05-9 | Silicone Oil | 115.0 | High (Leachable Potential) |
| Aluminum (Al) | 7429-90-5 | Glass/Stopper | 2.1 | Moderate |

---

#### 3.2.S.6.4.6 USP <1664> Leachables Assessment

Leachable studies were performed on the final drug product stored in the intended CCS under long-term (5°C ± 3°C) and accelerated (25°C / 60% RH) conditions.

##### 3.2.S.6.4.6.1 Leachable Study Protocol
*   **Batch Numbers:** GLUC-2025-001, GLUC-2025-002, GLUC-2025-003.
*   **Time Points:** T=0, 3M, 6M, 12M, 18M, 24M (Ongoing).
*   **Orientation:** Inverted (to maximize drug contact with the plunger) and Upright.

**Table 3: Leachables Monitoring Results (12-Month Data - Batch GLUC-2025-001)**
| Leachable Compound | Retention Time (min) | T=0 (µg/mL) | T=6M (µg/mL) | T=12M (µg/mL) | Threshold (AET) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| BHT | 14.2 | ND | < 0.05 | 0.08 | 0.15 |
| BHT-quinone | 15.5 | ND | ND | 0.02 | 0.15 |
| Silicone Oil | 18.9 - 22.0 | 0.45 | 0.62 | 0.88 | N/A (Visual/Particulate) |
| Palmitic Acid | 11.2 | < 0.05 | 0.09 | 0.11 | 0.15 |
| Aluminum (ICP) | N/A | 0.01 | 0.01 | 0.02 | 5.0 (USP <232>) |

*ND = Not Detected (< LOD 0.01 µg/mL)*

---

#### 3.2.S.6.4.7 Toxicological Risk Assessment (TRA)
A formal toxicological assessment was conducted for every leachable detected above the LOD.

1.  **Silicone Oil (Dimethicone):** Detected at 0.88 µg/mL. While below systemic toxicity limits, silicone oil is monitored for its impact on peptide aggregation. Sub-visible particulate analysis (USP <788>) confirms levels remain within limits (Mean < 100 particles/mL ≥ 10µm).
2.  **BHT & BHT-quinone:** Cumulative levels (0.10 µg/mL) represent a daily intake of 0.05 µg/day, which is 30x lower than the SCT of 1.5 µg/day. No mutagenic or carcinogenic risk is indicated.
3.  **Aluminum:** The observed level of 0.02 µg/mL is significantly below the parenteral exposure limit for patients with renal impairment (5 µg/kg/day).

---

#### 3.2.S.6.4.8 Interaction of Leachables with Glucapeptide
Given the sensitivity of GLP-1 analogues to oxidative stress, GHS evaluated the potential for "secondary leachables" (reaction products between the drug and CCS components).

**Analytical Procedure for Peptide-Leachable Adducts:**
1.  **Sample:** Glucogen-XR stability samples (T=12M, 25°C).
2.  **Method:** Peptide mapping via LC-MS/MS (Trypsin digestion).
3.  **Findings:** No modification of the lysine residues or N-terminus was observed. There was no evidence of palmitoylation or adduct formation with rubber-derived sulfur vulcanizing agents.

---

#### 3.2.S.6.4.9 Conclusion
The E&L program for Glucogen-XR demonstrates compliance with **USP <1663>** and **USP <1664>**. The Controlled Extraction Study successfully identified potential risks, and the subsequent Leachable Study confirmed that no species migrate into the Glucogen-XR drug product at levels exceeding safety thresholds. The CCS is deemed safe for its intended use over the proposed 24-month shelf life.

---
*End of Subsection 3.2.S.6.4*
*Document Reference: GHS-REG-2025-EL-004*
*Approved by: Dr. Sarah Jenkins, Head of Regulatory Affairs, Google Health Sciences.*

---

## ISO and ICH Guidelines

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.S: DRUG SUBSTANCE (GLUCOGEN-XR)
### SUBSECTION: 3.2.S.6: CONTAINER CLOSURE SYSTEM
#### DOCUMENT ID: GHS-GLUC-M3DS-CONT-001
#### TOPIC: REGULATORY STANDARDS COMPLIANCE – ISO AND ICH GUIDELINES

---

### 1.0 INTRODUCTION AND SCOPE

This subsection provides a comprehensive technical justification and evidence of compliance for the container closure system (CCS) used for the storage and handling of **Glucogen-XR (glucapeptide extended-release)** drug substance. Google Health Sciences (GHS) has implemented a rigorous quality framework that integrates International Council for Harmonisation (ICH) guidelines and International Organization for Standardization (ISO) requirements to ensure the physicochemical stability, biological activity, and sterility of the drug substance throughout its retest period.

The Glucogen-XR drug substance is a recombinant GLP-1 receptor agonist produced in the proprietary GHS-CHO-001 cell line. Given the sensitivity of peptide therapeutics to surface adsorption, leachables, and oxidative stress, the selection of the primary packaging—specifically the **GHS-BioVault™ 20L Single-Use System (SUS)**—is governed by stringent regulatory alignment.

---

### 2.0 REGULATORY HIERARCHY AND APPLICABILITY MATRIX

The following table summarizes the primary ICH and ISO standards applicable to the Glucogen-XR drug substance container closure system.

| Standard Reference | Title / Description | Applicability to Glucogen-XR CCS |
|:---|:---|:---|
| **ICH Q1A(R2)** | Stability Testing of New Drug Substances and Products | Evaluation of container integrity under long-term and accelerated conditions. |
| **ICH Q3D(R2)** | Guideline for Elemental Impurities | Assessment of metal ions leaching from film layers and connectors. |
| **ICH Q5C** | Stability Testing of Biotechnological/Biological Products | Specific requirements for peptide stability in the primary container. |
| **ICH Q6B** | Specifications: Test Procedures for Biotechnological/Biological Products | Establishing acceptance criteria for DS-container interactions. |
| **ISO 10993-1** | Biological evaluation of medical devices – Part 1 | Cytotoxicity and biocompatibility of contact surfaces (LDPE/EVOH). |
| **ISO 11607-1** | Packaging for terminally sterilized medical devices | Validation of sterile barrier integrity and seal strength. |
| **ISO 15378:2017** | Primary packaging materials for medicinal products | Quality Management System (QMS) requirements for CCS manufacturers. |
| **USP <661.2>** | Plastic Packaging Systems for Pharmaceutical Use | Physicochemical characterization of the GHS-BioVault™ film. |
| **USP <788>** | Particulate Matter in Injections | Assessment of sub-visible particles generated by the CCS. |

---

### 3.0 ICH Q5C AND Q1A(R2) COMPLIANCE: STABILITY AND INTERACTION

The stability of Glucogen-XR is highly dependent on the inertness of the contact surface. Google Health Sciences utilizes a multi-layer co-extruded film (GHS-Film-7) comprising Low-Density Polyethylene (LDPE) as the fluid-contact layer and Ethylene Vinyl Alcohol (EVOH) as the gas barrier.

#### 3.1 Stability Protocol for Container Interaction
To satisfy ICH Q5C, GHS conducted a 24-month stability study using three validation batches of drug substance stored in the final CCS configuration.

**Table 3.1: Stability Testing Parameters for CCS Interaction (Batch GLUC-2025-001)**
*Storage Condition: -70°C ± 10°C (Deep Freeze)*

| Interval | Test Parameter | Methodology | Acceptance Criteria | Result (Batch 001) |
|:---|:---|:---|:---|:---|
| Month 0 | Purity (SEC-HPLC) | GHS-ANA-012 | ≥ 98.0% monomer | 99.4% |
| Month 6 | Purity (SEC-HPLC) | GHS-ANA-012 | ≥ 98.0% monomer | 99.3% |
| Month 12 | Leachables (GC-MS) | GHS-ANA-045 | < 0.1 ppm total | < LOD |
| Month 24 | Biological Activity | Cell-based Bioassay | 80% - 120% | 102% |

#### 3.2 Calculation of Surface Area to Volume Ratio (SA:V)
In accordance with ICH guidelines, the impact of the container on the drug substance is evaluated via the SA:V ratio. A higher ratio increases the risk of peptide adsorption.

**Formula:**
$$R_{sa/v} = \frac{A_{contact}}{V_{nominal}}$$

Where:
*   $A_{contact}$ = Total internal surface area of the 20L bag ($6,400 \text{ cm}^2$).
*   $V_{nominal}$ = Fill volume ($20,000 \text{ mL}$).

**Calculation:**
$$R_{sa/v} = \frac{6,400}{20,000} = 0.32 \text{ cm}^{-1}$$

*Regulatory Assessment:* The SA:V ratio of 0.32 is significantly lower than the threshold for high-risk adsorption, ensuring that the concentration of Glucogen-XR remains within ±0.5% of the target specification (50 mg/mL).

---

### 4.0 ISO 10993 COMPLIANCE: BIOCOMPATIBILITY AND TOXICOLOGY

The GHS-BioVault™ system underwent comprehensive biocompatibility testing per ISO 10993-1 to ensure no deleterious substances migrate into the Glucogen-XR drug substance.

#### 4.1 Extractables and Leachables (E&L) Program
Following ICH Q3D and ISO 10993-18 (Chemical Characterization), a "Worst-Case" extraction study was performed using Batch **GLUC-2025-EXT-01**.

**Extractive Solvents used:**
1.  Water for Injection (WFI)
2.  Ethanol (50%)
3.  0.1M Phosphoric Acid (to simulate low pH stress)

**Table 4.1: Summary of Extractables Data (ISO 10993-18 Alignment)**

| Component ID | Chemical Name | Category | Concentration (µg/cm²) | AET Threshold |
|:---|:---|:---|:---|:---|
| E-001 | Irganox 1010 | Antioxidant | 0.045 | 0.150 |
| E-002 | Palmitic Acid | Slip Agent | 0.012 | 0.150 |
| E-005 | Aluminium | Metal Ion | 0.003 | 0.050 |

*Statistical Note:* The Analytical Evaluation Threshold (AET) was calculated based on a Dose-Based Threshold (DBT) of 1.5 µg/day per ICH M7 guidelines for genotoxic impurities.

---

### 5.0 ISO 11607: VALIDATION OF PHYSICAL INTEGRITY

To ensure the Glucogen-XR drug substance remains sterile during inter-site transport (from South San Francisco to finishing facilities), the CCS must comply with ISO 11607-1.

#### 5.1 Protocol for Seal Strength and Integrity (Protocol P-CCS-098)
1.  **Tensile Testing (ASTM F88):** Seals must withstand ≥ 25 N/15mm.
2.  **Bubble Leak Test (ASTM F2096):** Submerge pressurized bag in water to detect localized failures.
3.  **Dye Penetration (ASTM F1929):** Verification of capillary-level leaks in the GHS-BioVault™ ports.

**Table 5.2: Physical Integrity Validation Results (Batch GLUC-2025-VAL-04)**

| Test Reference | Equipment ID | Requirement | Result | Pass/Fail |
|:---|:---|:---|:---|:---|
| Seal Strength | Instron 5965 | > 25 N | 42.4 N | Pass |
| Burst Pressure | GHS-PRESS-01 | > 1.5 bar | 2.1 bar | Pass |
| Sterility (B/S) | ISO 11737-1 | No Growth | No Growth | Pass |

---

### 6.0 ICH Q3D: ELEMENTAL IMPURITIES RISK ASSESSMENT

Per ICH Q3D, the risk of elemental impurity (EI) contamination from the container closure system was assessed. The GHS-BioVault™ uses a catalyst-free polymerization process for the contact layer to minimize Group 1 and Group 2A metals.

**Risk Assessment Methodology:**
The concentration of EI in the drug substance ($C_{DS}$) is calculated as:
$$C_{DS} = \frac{\sum (M_{i} \times S_{i})}{V_{total}}$$
Where $M_i$ is the mass of impurity $i$ extracted from the surface area $S_i$.

**Table 6.1: Elemental Impurity Limits vs. Observed Values**

| Element | ICH Q3D Class | PDE (µg/day) | Observed (µg/day) | % of PDE |
|:---|:---|:---|:---|:---|
| Cadmium (Cd) | 1 | 5.0 | < 0.1 | 2% |
| Lead (Pb) | 1 | 5.0 | < 0.2 | 4% |
| Arsenic (As) | 1 | 15.0 | < 0.1 | 0.6% |
| Cobalt (Co) | 2A | 5.0 | 0.05 | 1% |

---

### 7.0 MANUFACTURING SITE COMPLIANCE (ISO 15378)

The manufacturing facility at **3000 Innovation Drive, South San Francisco** operates under a Quality Management System certified to **ISO 15378:2017**. This standard integrates ISO 9001 with Good Manufacturing Practices (GMP) specifically for primary packaging materials.

#### 7.1 Component Traceability Procedure
All components of the Glucogen-XR CCS are tracked via the Google Cloud SAP-Integrated Quality Module (GHS-QM-Cloud).

**Traceability Map for Batch GLUC-2025-001:**
*   **Film Lot:** FILM-LDPE-99082 (Supplier: PolyChem)
*   **Tube Lot:** SIL-TUBE-4432 (Supplier: SilcoMed)
*   **Connector Lot:** MPC-CON-8821 (Supplier: Colder Products)
*   **Sterilization Lot:** GAMMA-2025-012 (Sterigenics, 25-40 kGy)

---

### 8.0 CONCLUSION

The container closure system for Glucogen-XR drug substance demonstrates full compliance with all applicable ISO and ICH guidelines. The integration of high-barrier polymers (EVOH) with inert contact layers (LDPE) ensures that the glucapeptide remains stable, potent, and free from deleterious leachables or microbial contamination. The data presented for batches **GLUC-2025-001** through **GLUC-2025-003** confirm that the GHS-BioVault™ system is fit for its intended use in the global distribution of this Type 2 Diabetes Mellitus therapeutic.

---
**End of Subsection**

---

# Vendor Qualification and Quality Agreements

## Supplier Audit Program

**Module 3: Quality | Section 3.2.S.2.3. Control of Materials**
**Document ID:** GHS-GLUCXR-M3-DS-QUAL-004
**Subject:** Supplier Audit Program (SAP)
**Product:** Glucogen-XR (glucapeptide extended-release)
**Manufacturer:** Google Health Sciences (GHS), 3000 Innovation Drive, South San Francisco, CA 94080
**Date:** 24 May 2024
**Revision:** 04 (Current)

---

### 1.0 PURPOSE AND SCOPE

This document delineates the comprehensive Supplier Audit Program (SAP) implemented by Google Health Sciences (GHS) to ensure that all vendors, contractors, and service providers contributing to the manufacture of Glucogen-XR (glucapeptide extended-release) adhere to the highest standards of Current Good Manufacturing Practice (cGMP), as mandated by 21 CFR Parts 210, 211, and 600, and ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients).

The scope of this program covers the lifecycle management of all Critical Material Suppliers (CMS) involved in the production of the GHS-CHO-001 cell line derivative products, including raw materials, primary packaging components (Container Closure Systems), and outsourced analytical services.

### 2.0 REGULATORY FRAMEWORK AND GUIDANCE COMPLIANCE

The GHS Supplier Audit Program is designed to comply with the following international and domestic regulatory frameworks:

*   **FDA 21 CFR Part 211.84:** Testing and approval or rejection of components, drug product containers, and closures.
*   **FDA 21 CFR Part 600.11:** Physical establishment, equipment, animals, and care (Biologics).
*   **ICH Q9 (R1):** Quality Risk Management.
*   **ICH Q10:** Pharmaceutical Quality System.
*   **USP <1085>:** Guidelines on the Quality of Imported Materials.
*   **USP <1079>:** Good Storage and Distribution Practices for Drug Products.
*   **ISO 19011:2018:** Guidelines for auditing management systems.

### 3.0 SUPPLIER CLASSIFICATION ARCHITECTURE

GHS utilizes a risk-based classification system to determine the depth, frequency, and intensity of the audit cycle. Materials are categorized based on their impact on the Critical Quality Attributes (CQAs) of Glucogen-XR.

#### Table 3.1: Risk-Based Supplier Classification Matrix

| Risk Tier | Category | Description | Audit Type | Frequency |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1** | Critical | Manufacturers of the Glucogen-XR Drug Substance (DS), Primary Packaging (Vials/Stoppers), and Specialized Media Components (GHS-CHO-001 Proprietary Feed). | On-site (Full GMP) | Every 24 Months |
| **Tier 2** | Essential | Providers of reagents, buffers, and chromatography resins used in downstream processing. | Remote/Paper-based or Targeted On-site | Every 36 Months |
| **Tier 3** | General | Suppliers of standard laboratory chemicals, USP-grade salts, and cleaning agents. | Questionnaire (SAQ) | Every 48 Months |
| **Tier 4** | Commodity | Generic supplies (stationary, standard safety gear). | No Audit Required | Performance Review |

### 4.0 AUDIT PROTOCOL AND PROCEDURES (GHS-SOP-QA-0092)

The following procedures are strictly followed for all Tier 1 and Tier 2 suppliers involved in the GLUC-2025-XXX series production.

#### 4.1 Pre-Audit Phase: Documentation Review
Prior to the on-site visit, the Lead Auditor (minimum 15 years experience in Biologics) reviews the "Supplier Master File" (SMF). This includes:
1.  History of Batch Success (Batch GLUC-2025-001 through GLUC-2025-500).
2.  Prior 483s or Warning Letters issued by the FDA.
3.  Change Control history related to GHS-specific materials.
4.  Annual Quality Product Review (APQR) summaries.

#### 4.2 On-Site Audit Execution (Technical Specifications)
Audits for Glucogen-XR suppliers focus on the prevention of cross-contamination and the stability of the extended-release peptide matrix.

**Audit Checklist Item 4.2.1: Viral Safety and TSE/BSE Controls**
*   Review of certificates of origin for all animal-derived raw materials.
*   Verification of viral clearance studies for bovine-derived components (if any).
*   *Note: GHS-CHO-001 is a chemically defined, animal-component-free process; audits must verify "Veggie-Pure" certification of the manufacturing suite.*

**Audit Checklist Item 4.2.2: Data Integrity (ALCOA+ Compliance)**
*   Verification of 21 CFR Part 11 compliance for chromatography software (e.g., Empower 3, Chromeleon).
*   Audit trail reviews for Glucogen-XR stability testing batches (GLUC-2025-STAB-01).

### 5.0 SUPPLIER AUDIT METRICS AND HISTORICAL DATA (2023-2025)

The following table summarizes the audit outcomes for critical vendors associated with the Glucogen-XR program.

#### Table 5.1: Tier 1 Supplier Audit Log and CAPA Status

| Supplier ID | Component Supplied | Last Audit Date | Batch Association | Findings (Major/Minor) | Status | Re-Audit Date |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **VND-0982-GS** | CHO-K1 Media Base | 12-JAN-2024 | GLUC-2025-001 | 0/3 | Approved | JAN-2026 |
| **VND-4431-GC** | Recombinant Protein A Resin | 15-FEB-2024 | GLUC-2025-015 | 1/2 (CAPA-992) | Conditional | AUG-2024 |
| **VND-1102-ST** | Borosilicate Vials (Type 1) | 03-MAR-2024 | GLUC-2025-044 | 0/1 | Approved | MAR-2027 |
| **VND-8821-ER** | XR-Polymer Matrix | 10-APR-2024 | GLUC-2025-090 | 2/5 (CAPA-1004)| Critical | SEP-2024 |

### 6.0 CALCULATION OF THE SUPPLIER RELIABILITY INDEX (SRI)

GHS employs a quantitative formula to determine the risk score of a supplier. This score dictates the level of incoming material sampling (Reduced Testing vs. Full Testing).

**Formula:**
$$SRI = \frac{(A \times 0.5) + (Q \times 0.3) + (D \times 0.2)}{N}$$

Where:
*   **A** = Audit Score (0-100 scale).
*   **Q** = Quality Incident Rate (100 - (Number of Deviations/Batches Produced $\times$ 100)).
*   **D** = Delivery/Compliance Score.
*   **N** = Normalization Factor (1.0).

*Example Calculation for GLUC-2025-XXX Resin Supplier:*
*   Audit Score: 85
*   Quality Incident Rate: 98 (2 deviations in 100 batches)
*   Delivery Score: 95
*   **SRI** = $(85 \times 0.5) + (98 \times 0.3) + (95 \times 0.2) = 42.5 + 29.4 + 19 = \mathbf{90.9}$ (Category: High Reliability)

### 7.0 STEP-BY-STEP PROTOCOL FOR CRITICAL MATERIAL DISCREPANCIES

In the event that a supplier fails an audit or a critical material (Batch GLUC-2025-X) is found non-compliant:

1.  **Immediate Quarantine (T+0 hours):** All inventory from the affected supplier batch is locked in the SAP-S/4HANA ERP system.
2.  **Impact Assessment (T+24 hours):** QA evaluates if any Glucogen-XR DS batches were manufactured using the suspect material.
3.  **Supplier Notification (T+48 hours):** Official "Notice of Non-Conformance" sent to the vendor.
4.  **Root Cause Analysis (RCA):** Utilizing the "5-Whys" or "Ishikawa Diagram" to identify the failure point in the vendor’s process.
5.  **For-Cause Audit:** If the failure is Tier 1, an unannounced for-cause audit is triggered within 5 business days.

### 8.0 QUALITY AGREEMENTS (QA-AG)

Every Tier 1 and Tier 2 vendor must sign a GHS-approved Quality Agreement. This document defines:
*   **Change Control:** The vendor must notify GHS 180 days prior to any change in manufacturing location or critical process parameters (CPPs).
*   **Access to Records:** GHS has the right to audit the facility and review all batch records associated with Glucogen-XR.
*   **Retention Samples:** Vendors must retain samples for 2 years post-expiry of the final drug product batch.

### 9.0 CONCLUSION

The Supplier Audit Program for Glucogen-XR represents a robust, data-driven approach to supply chain integrity. By integrating Google Cloud’s advanced data analytics with traditional cGMP auditing practices, Google Health Sciences ensures that every component of the GLUC-2025-XXX production cycle meets stringent FDA and ICH requirements, thereby guaranteeing the safety and efficacy of the glucapeptide extended-release therapeutic.

---
**End of Section**
**Approved by:**
*Dr. Elizabeth Wu, Head of Global Quality Assurance*
*Google Health Sciences*
*Ref: GHS-GLUC-QA-2024-001*

---

## Change Control Procedures

# MODULE 3: QUALITY (3.2.S.6) – DRUG SUBSTANCE CONTAINER CLOSURE SYSTEM
## SECTION 3.2.S.6.2: VENDOR QUALIFICATION AND QUALITY AGREEMENTS
### SUBSECTION 3.2.S.6.2.4: CHANGE CONTROL PROCEDURES

---

#### 3.2.S.6.2.4.1 Introduction and Scope
This section delineates the robust Change Control Procedures (CCP) established between **Google Health Sciences (GHS)** and its primary vendors for the Glucogen-XR (glucapeptide extended-release) Drug Substance (DS) Container Closure System (CCS). As Glucogen-XR is a high-potency GLP-1 receptor agonist, the integrity of the primary packaging—specifically the Type I Borosilicate glass vials and the elastomeric fluoropolymer-coated stoppers—is critical to maintaining the stability, sterility, and extended-release profile of the peptide.

These procedures are governed by **GHS Global Quality SOP-7720: Management of External Supplier Changes** and align with **ICH Q10 (Pharmaceutical Quality System)** and **21 CFR 211.160**.

#### 3.2.S.6.2.4.2 Regulatory Framework and Compliance Standards
All change control activities for the Glucogen-XR CCS components are executed in strict adherence to the following regulatory benchmarks:

*   **FDA Guidance for Industry:** *Changes to an Approved NDA or ANDA (2004)*.
*   **USP <1663>:** *Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **USP <1664>:** *Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems*.
*   **ICH Q7:** *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*.
*   **ISO 15378:** *Primary packaging materials for medicinal products — Particular requirements for the application of ISO 9001:2015, with reference to GMP*.

#### 3.2.S.6.2.4.3 Classification of Changes
Changes initiated by the vendor (e.g., Change in raw material source, manufacturing site, or equipment) are categorized based on their potential impact on the Critical Quality Attributes (CQAs) of Glucogen-XR.

##### Table 3.2.S.6.2.4-1: Change Classification Matrix for CCS Components

| Change Category | Impact Level | Description of Change | Required Action / Regulatory Pathway |
| :--- | :--- | :--- | :--- |
| **Level 1 (Minor)** | Low | Change in secondary packaging (outer cartons), update to administrative contact info. | Annual Report (AR) notification; GHS internal documentation. |
| **Level 2 (Moderate)** | Medium | Change in mold lubricant for stoppers, relocation of QC testing lab within the same campus. | CBE-0 or CBE-30 (Changes Being Effected); 3-batch comparability. |
| **Level 3 (Major)** | High | Change in glass formulation, change in elastomeric resin source, move to a new manufacturing site. | Prior Approval Supplement (PAS); Full extractable/leachable study; 6-month accelerated stability. |

---

#### 3.2.S.6.2.4.4 Step-by-Step Change Notification Protocol (SOP-SUP-009)
The following protocol must be followed by all Tier 1 vendors (e.g., Glass and Elastomer suppliers) providing components for Batch Series **GLUC-2025-XXX**.

**Step 1: Initiation and Internal Assessment (Vendor Side)**
*   The vendor identifies a required change (e.g., equipment modernization at the South San Francisco site).
*   Vendor’s Quality Assurance (QA) performs an internal risk assessment using Failure Mode and Effects Analysis (FMEA).

**Step 2: Formal Notification to Google Health Sciences**
*   Notification must be sent via the **GHS Supplier Portal** within 5 business days for Level 3 changes and 30 days for Level 1 changes.
*   The notification must include the "Impact Analysis Report" and a proposed "Validation Master Plan" (VMP).

**Step 3: GHS Multi-Disciplinary Review**
*   The GHS Change Control Board (CCB), consisting of representatives from CMC (Chemistry, Manufacturing, and Controls), Toxicology, Regulatory Affairs, and Supply Chain, reviews the proposal.
*   **Calculation of Risk Priority Number (RPN):**
    *   $RPN = S \times O \times D$
    *   *S (Severity):* Impact on Glucogen-XR peptide stability.
    *   *O (Occurrence):* Likelihood of the change causing a deviation.
    *   *D (Detection):* Probability that the current QC testing will detect a failure.
    *   *Threshold:* Any RPN > 80 requires immediate Level 3 escalation.

**Step 4: Experimental Validation and Sampling**
*   For changes in stopper coating (e.g., FluroTec®), the vendor must provide three (3) non-commercial pilot batches for GHS internal testing.
*   GHS performs **Surface Plasmon Resonance (SPR)** to ensure the peptide does not exhibit increased adsorption to the new surface.

**Step 5: Final Approval and Implementation**
*   Upon successful validation, GHS QA issues a "Notice of Authorization to Implement."
*   Inventory transition is managed via "First-In-First-Out" (FIFO) protocols to ensure no co-mingling of legacy and new components within a single GLUC-2025-XXX batch.

---

#### 3.2.S.6.2.4.5 Technical Specification Comparison (Data Table)
The following table provides a historical record of Change Control #CC-2024-VEND-08 (Change in Glass Tubing Supplier for Batch Series GLUC-2025).

##### Table 3.2.S.6.2.4-2: Comparative Analytical Data for Glass Vial Change (CC-2024-VEND-08)

| Parameter | Method | Specification | Pre-Change (Batch GLUC-2024-099) | Post-Change (Batch GLUC-2025-001) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hydrolytic Resistance** | USP <660> | $\leq 1.0$ mL 0.02N HCl | 0.42 mL | 0.39 mL | Pass |
| **Arsenic Extractables** | ICP-MS | $\leq 0.1$ ppm | 0.012 ppm | 0.009 ppm | Pass |
| **Dimensional: Total Height** | Laser Micrometer | $45.0 \pm 0.5$ mm | 45.02 mm | 45.11 mm | Pass |
| **Delamination Propensity** | Accelerated Aging | No visible flakes | None detected | None detected | Pass |
| **Surface Alkalinity** | ISO 4802 | $\leq 12$ µg $Na_2O/mL$ | 8.4 µg/mL | 7.9 µg/mL | Pass |

---

#### 3.2.S.6.2.4.6 Extractables and Leachables (E&L) Re-Validation Procedure
Any change in the formulation of the elastomeric stopper (Level 3) requires a full re-evaluation of the E&L profile as per **USP <1663>**.

**E&L Extraction Conditions:**
1.  **Solvents:** Water for Injection (WFI), 10% Ethanol, and Glucogen-XR Formulation Buffer (pH 7.4).
2.  **Temperature:** 40°C and 60°C.
3.  **Duration:** 24 hours (accelerated) and 90 days.
4.  **Analytical Techniques:**
    *   GC-MS (Volatile Organics)
    *   LC-MS/MS (Semi-volatile and Non-volatile)
    *   ICP-OES (Heavy Metals)

**Statistical Equivalence Calculation:**
To approve a change, the concentration of new extractables ($C_{new}$) must satisfy:
$$\frac{C_{new} - C_{old}}{\sigma} < \text{Acceptable Analytical Drift (0.15)}$$
Where $\sigma$ is the standard deviation of the validated method.

---

#### 3.2.S.6.2.4.7 Quality Agreement Integration
The Change Control Procedures are legally codified in the **Quality Agreement (Doc ID: GHS-QA-2023-AGR-04)**. Key clauses include:

*   **Clause 7.2:** The Vendor shall not implement any "Major" change without written consent from Google Health Sciences QA.
*   **Clause 7.3:** Emergency changes (e.g., equipment failure) may be implemented to maintain supply, provided GHS is notified within 24 hours and a "Deviation Report" is filed.
*   **Clause 8.1:** Right to Audit. GHS reserves the right to perform an on-site audit at 3000 Innovation Drive within 10 days of a Level 3 change notification.

#### 3.2.S.6.2.4.8 Documentation and Archiving
All change control records, including the original notification, the technical assessment, and the final approval, are archived in the **GHS Veeva Vault Quality Management System (QMS)**. These records are maintained for the life of the product plus 15 years, ensuring full traceability for every batch in the **GLUC-2025-XXX** series.

**References:**
1.  FDA 21 CFR Part 210/211.
2.  Google Health Sciences Internal Quality Manual v4.0.
3.  Parenteral Drug Association (PDA) Technical Report No. 43: *Identification and Classification of Nonconformities in Molded and Tubular Glass Containers for Pharmaceutical Manufacturing*.

---

## Quality Agreement Terms

### **3.2.S.2.1. Manufacturer(s) - Subsection: Quality Agreement Terms**

#### **1.0 Introduction and Scope of Quality Agreement (QAgr)**
This subsection defines the comprehensive Quality Agreement (QAgr) framework established between **Google Health Sciences (GHS)**, a Division of Google Cloud Life Sciences, and its qualified strategic partners, contract manufacturing organizations (CMOs), and material suppliers involved in the production of **Glucogen-XR (glucapeptide extended-release)**.

The Quality Agreement is a legally binding document that outlines the roles and responsibilities of the "Contract Giver" (Google Health Sciences) and the "Contract Acceptor" (External Partners) regarding the Current Good Manufacturing Practices (cGMP) requirements as defined in 21 CFR Parts 210, 211, and 600-680, as well as ICH Q7, Q9, and Q10 guidelines.

**Table 1.0-1: Regulatory Foundation for Glucogen-XR Quality Agreements**
| Guideline ID | Description | Application to Glucogen-XR |
| :--- | :--- | :--- |
| **ICH Q7** | Good Manufacturing Practice Guide for APIs | Primary framework for Glucapeptide substance production. |
| **ICH Q9** | Quality Risk Management | Applied to the evaluation of vendor deviation impacts. |
| **ICH Q10** | Pharmaceutical Quality System | Defines the oversight model for Google Cloud Life Sciences. |
| **21 CFR 211** | Current GMP for Finished Pharmaceuticals | Specifically applicable to the XR formulation and fill-finish. |
| **21 CFR 600** | Biological Products: General | Applicable to the GHS-CHO-001 cell line management. |
| **USP <1043>** | Ancillary Materials for Cell, Gene, and Tissue Products | Quality requirements for cell culture media and supplements. |

---

#### **2.0 Organizational Structure and Communication Protocols**
Effective quality oversight of Glucogen-XR requires a formalized communication hierarchy. The QAgr specifies designated Quality Points of Contact (QPOCs) who are responsible for the immediate notification of "Critical Events."

##### **2.1 Notification Timelines for Quality Events**
Google Health Sciences enforces strict timelines for the notification of deviations, out-of-specification (OOS) results, and changes.

**Table 2.1-1: Notification Requirements and Response Metrics**
| Event Type | Initial Notification (Business Days) | Preliminary Report (Days) | Final Investigation Report (Days) |
| :--- | :--- | :--- | :--- |
| **Critical Deviation** | < 24 Hours | 3 Days | 15 Days |
| **Major Deviation** | 3 Days | 7 Days | 30 Days |
| **OOS Result** | < 24 Hours | 5 Days | 20 Days |
| **Planned Change** | 90 Days (Pre-implementation) | N/A | N/A |
| **Regulatory Audit** | < 24 Hours | 2 Days (Summary) | 10 Days (Responses) |

---

#### **3.0 Manufacturing and In-Process Control (IPC) Requirements**
The Quality Agreement specifies that all manufacturing of Glucogen-XR drug substance (DS) using the **GHS-CHO-001** cell line must occur within "Validated Zones."

##### **3.1 Batch Numbering Convention**
All batches produced under the QAgr must adhere to the GHS standardized numbering system to ensure traceability across the Google Cloud Life Sciences global supply chain.
*   **Format:** `GLUC-YYYY-XXX`
*   `GLUC`: Product Identifier (Glucogen-XR)
*   `YYYY`: Year of Manufacture
*   `XXX`: Sequential Batch Number (e.g., GLUC-2025-001)

##### **3.2 Master Batch Record (MBR) and Executed Batch Record (EBR) Review**
The QAgr stipulates that the Contract Acceptor shall maintain an Electronic Batch Record (eBR) system integrated with Google Cloud’s **Vertex AI Quality Insights** platform. This allows for real-time monitoring of Critical Process Parameters (CPPs).

**Table 3.2-1: Glucogen-XR Critical Process Parameters (CPPs) for Monitoring**
| Parameter ID | Description | Target Specification | QAgr Limit |
| :--- | :--- | :--- | :--- |
| **CPP-01** | Bioreactor Temp (Stage 1) | 37.0°C | ± 0.5°C |
| **CPP-02** | Dissolved Oxygen (DO) | 40% | ± 5% |
| **CPP-03** | pH (Post-Transfection) | 7.15 | ± 0.10 |
| **CPP-04** | Viable Cell Density (VCD) | > 15 x 10^6 cells/mL | Min 12 x 10^6 |
| **CPP-05** | XR-Polymer Coupling Efficiency | > 92.5% | Min 89.0% |

---

#### **4.0 Change Control and Technical Transfer Terms**
No changes to the "Validated State" of Glucogen-XR manufacturing may be made without prior written approval from Google Health Sciences Quality Assurance (GHS-QA).

##### **4.1 Classification of Changes**
*   **Level 1 (Minor):** Changes with no potential to impact the safety, identity, strength, quality, or purity (SISQP) of the drug substance. (e.g., editorial changes to SOPs). *Notification only.*
*   **Level 2 (Moderate):** Changes that may affect SISQP (e.g., change in supplier of a non-critical raw material). *Approval required before batch release.*
*   **Level 3 (Major):** Changes that impact the validated process, equipment, or facility (e.g., relocation of a chromatography column, modification of the GHS-CHO-001 feed strategy). *FDA notification (CBE-30 or PAS) required.*

---

#### **5.0 Laboratory Controls and Analytical Testing**
The QAgr defines the analytical responsibilities for the testing of Glucogen-XR intermediate and drug substance.

##### **5.1 Out-of-Specification (OOS) Protocol**
In the event of an OOS result during the testing of any GLUC-2025-XXX batch, the following multi-phase protocol (per FDA Guidance *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production*) must be followed:

1.  **Phase I (Laboratory Investigation):** Determination of lab error.
    *   *Calculation for Assay Re-testing:* $Avg = \frac{\sum_{i=1}^{n} X_i}{n}$
    *   If no lab error is found, proceed to Phase II.
2.  **Phase II (Full Investigation):** Review of manufacturing records and environmental data.
3.  **Phase III (Disposition):** Decision by GHS Quality Review Board (QRB).

**Table 5.1-1: Analytical Specifications for Glucogen-XR Release**
| Test Parameter | Methodology | Acceptance Criteria |
| :--- | :--- | :--- |
| **Identity** | RP-HPLC (Retention Time) | Conforms to Reference Standard |
| **Purity (Monomer)** | SE-HPLC | ≥ 98.5% |
| **Host Cell Protein (HCP)** | ELISA (GHS Proprietary) | ≤ 100 ppm |
| **Residual DNA** | qPCR | ≤ 10 pg/mg |
| **Endotoxin** | LAL (Kinetic Chromogenic) | ≤ 0.5 EU/mg |
| **Glycosylation Profile** | N-Glycan Mapping (LC-MS) | Matches GHS-GLUC-REF-01 |

---

#### **6.0 Facilities, Equipment, and Utilities**
The Contract Acceptor must ensure that all equipment used in the manufacture of Glucogen-XR (e.g., 2000L Single-Use Bioreactors, AKTA Chromatography systems) is maintained in a qualified state.

##### **6.1 Calibration and Maintenance**
All instruments must be calibrated against NIST-traceable standards. The QAgr mandates a **99.5% Calibration Compliance Rate** for all equipment designated as "Critical."

##### **6.2 Environmental Monitoring (EM)**
The QAgr specifies the EM requirements for Grade A/B (ISO 5) zones during the fill-finish of Glucogen-XR.

**Table 6.2-1: Environmental Monitoring Action Levels**
| Zone | Viable Air (CFU/m³) | Settle Plates (CFU/4 hrs) | Surface (CFU/plate) |
| :--- | :--- | :--- | :--- |
| **Grade A** | < 1 | < 1 | < 1 |
| **Grade B** | 10 | 5 | 5 |
| **Grade C** | 100 | 50 | 25 |

---

#### **7.0 Supply Chain and Materials Management**
Google Health Sciences retains the right to approve all "Tier 1" suppliers of raw materials.

##### **7.1 Raw Material Specifications**
All bovine-derived materials are strictly prohibited to mitigate TSE/BSE risks. The GHS-CHO-001 cell line media is chemically defined and animal-component free (ACF).

##### **7.2 Storage and Cold Chain**
Glucogen-XR Drug Substance must be stored at **-70°C ± 10°C** in GHS-approved cryo-vessels. The QAgr requires continuous temperature monitoring with redundant sensors (Equipment ID: GHS-FREEZE-2025-01).

---

#### **8.0 Audits and Inspections**
GHS reserves the right to perform "For-Cause" audits within 24 hours of a critical failure. Routine audits will occur every 24 months.

**Table 8.1-1: Audit Performance Metrics (Year-to-Date 2025)**
| Audit ID | Facility Site | Date | Findings (Critical/Major/Minor) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **AUD-GLUC-25-01** | 3000 Innovation Dr | 12-JAN-2025 | 0 / 1 / 4 | Closed |
| **AUD-GLUC-25-02** | CMO Site Alpha | 05-FEB-2025 | 0 / 2 / 7 | In-Progress |
| **AUD-GLUC-25-03** | Logistics Partner | 18-FEB-2025 | 0 / 0 / 2 | Closed |

---

#### **9.0 Product Release and Certification**
The "Qualified Person" (QP) or designated Quality Assurance Head of the Contract Acceptor shall provide a **Certificate of Analysis (CoA)** and a **Certificate of Conformance (CoC)** for every batch (e.g., GLUC-2025-001).

##### **9.1 Final Disposition Statement**
"I hereby certify that batch GLUC-2025-XXX has been manufactured, tested, and inspected in full compliance with the Quality Agreement, the approved Master Batch Record, and applicable cGMP regulations as defined by the FDA."

---

#### **10.0 Dispute Resolution and Legal Clauses**
In the event of a quality-related dispute that cannot be resolved at the Quality Head level, the issue shall be escalated to the **Google Health Sciences Executive Steering Committee**. Technical arbitration will be conducted using ICH Q9 risk-based principles.

**End of Subsection: Quality Agreement Terms**
*Reference: GHS-SOP-QA-0098: Management of External Quality Agreements.*

---

