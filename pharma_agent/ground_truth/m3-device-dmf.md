# Device Master File (Autoinjector)

**Drug:** Glucogen-XR
**Region:** FDA
**Generated:** 2026-01-08 23:11:33

---

# Device Description

## Design Overview

# MODULE 3.2.R: DEVICE DESCRIPTION AND CHARACTERIZATION
## SECTION 3.2.R.1: DEVICE DESIGN OVERVIEW
### SUBSECTION 3.2.R.1.1: INTEGRATED DESIGN ARCHITECTURE

---

#### 1.1.1 Introduction and Scope
This section provides an exhaustive technical overview of the design architecture for the **Glucogen-XR (glucapeptide extended-release) Autoinjector System (GHS-AI-V4)**. Developed by **Google Health Sciences (GHS)**, a division of Google Cloud Life Sciences, the GHS-AI-V4 is a single-use, disposable, electromechanical-assisted autoinjector integrated with a pre-filled syringe (PFS) containing the 2.4 mg/mL Glucogen-XR formulation.

The design philosophy integrates principles of **Quality by Design (QbD)** as outlined in **ICH Q8(R2)**, ensuring that the device's Critical Quality Attributes (CQAs) are directly linked to the patient's therapeutic outcomes for Type 2 Diabetes Mellitus. The device is classified as a **Class II medical device** under 21 CFR 880.5860 and is submitted as part of a **Combination Product** under 21 CFR Part 4.

#### 1.1.2 Comprehensive System Components
The GHS-AI-V4 system is comprised of three primary sub-assemblies, each engineered to tolerances within ±0.005 mm to ensure consistent delivery kinetics.

##### 1.1.2.1 Primary Container Sub-Assembly (PCSA)
The PCSA serves as the sterile barrier and drug reservoir.
*   **Syringe Barrel:** 1.0 mL Long, Type I Borosilicate Glass (USP <660>).
*   **Needle:** 29G Thin Wall (TW), 12.7 mm length, Stainless Steel 304.
*   **Plunger Stopper:** FluroTec® coated chlorobutyl elastomer (USP <381>).
*   **Rigid Needle Shield (RNS):** Synthetic polyisoprene with a rigid polypropylene shell.

##### 1.1.2.2 Drive and Activation Sub-Assembly (DASA)
The DASA contains the mechanical energy source (constant-force spring) and the electronic feedback loop.
*   **Power Spring:** Medical grade 301 Stainless Steel, 14.5 N nominal force.
*   **Google-Link™ Logic Chip:** A low-power CMOS integrated circuit that monitors plunger displacement via infrared (IR) sensors.
*   **Damping System:** Silicone-based fluidic damper to control the "strike force" of the plunger, preventing glass breakage.

##### 1.1.2.3 Outer Housing and Human Factors Interface (HFI)
*   **Main Body:** Medical-grade Polycarbonate (PC) / Acrylonitrile Butadiene Styrene (ABS) blend.
*   **Inspection Window:** Ultra-clear Cyclo-Olefin Polymer (COP) for 360° visibility of the medication.
*   **Cap/Safety Shield:** Integrated interlock mechanism preventing accidental activation (complies with ISO 11608-1).

---

### 1.1.3 Technical Specifications and Critical Performance Parameters

The following table outlines the nominal design specifications and the calculated tolerances for the Glucogen-XR device.

#### Table 1.1.3-A: Device Engineering Specifications (Batch Series GLUC-2025-XXX)

| Parameter ID | Component | Specification | Tolerance | Unit | Testing Standard |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GHS-SPEC-001** | Needle Insertion Depth | 8.5 | ± 0.5 | mm | ISO 11608-5 |
| **GHS-SPEC-002** | Activation Force | 12.0 | ± 2.0 | N | USP <1382> |
| **GHS-SPEC-003** | Injection Duration | 10.0 | ± 1.5 | s | Internal SOP-992 |
| **GHS-SPEC-004** | Delivered Volume | 1.00 | ± 0.05 | mL | USP <790> |
| **GHS-SPEC-005** | Breakloose Force | < 5.0 | N/A | N | ISO 7886-1 |
| **GHS-SPEC-006** | Gliding Force (Mean) | 8.2 | ± 1.1 | N | ISO 11040-4 |
| **GHS-SPEC-007** | RNS Removal Force | 4.5 | 2.5 - 7.5 | N | ISO 11608-1 |
| **GHS-SPEC-008** | End-of-Injection Click | > 65 | N/A | dB | GHS-ACU-01 |

---

### 1.1.4 Detailed Functional Design and Sequence of Operation

The Glucogen-XR device utilizes a **"Press-and-Hold"** activation sequence. The following step-by-step technical protocol describes the internal mechanical and electronic events during a standard administration cycle.

#### Protocol GHS-PRO-AI-01: Device Activation Sequence

1.  **Cap Removal Phase (T - 5s):**
    *   The user applies axial force to the Rigid Needle Shield (RNS) cap.
    *   The cap removal mechanism disengages the safety lock, transitioning the Google-Link™ Logic Chip from "Sleep Mode" to "Ready Mode" (Current draw: < 2μA).
    *   *Verification:* LED indicator flashes green once.

2.  **Skin Contact Phase (T - 2s):**
    *   The Needle Shield (NS) is depressed against the injection site.
    *   A compression spring (Spring-K2) is loaded. Once the displacement reaches 3.2 mm, the internal firing pin aligns with the trigger sear.

3.  **Initiation Phase (T = 0s):**
    *   The user applies the final activation force (>10 N).
    *   The constant-force drive spring releases the plunger rod.
    *   **Calculation of Instantaneous Force ($F_i$):**
        $$F_i = k \cdot (x_0 - x) - \mu \cdot N$$
        *Where:*
        *   $k$ = Spring constant ($1.2 N/mm$)
        *   $x$ = Displacement
        *   $\mu$ = Coefficient of friction (Syringe barrel/stopper interface)
        *   $N$ = Normal force

4.  **Delivery Phase (T + 0.5s to T + 10s):**
    *   The Glucogen-XR formulation (Viscosity: 15 cP) is expelled through the 29G needle.
    *   The Google-Link™ IR sensor tracks the movement of the plunger. If the velocity falls below 0.5 mm/s (indicating an occlusion), the device triggers a red "Service Required" light.

5.  **Completion Phase (T + 11s):**
    *   The plunger hits the glass flange shoulder.
    *   A secondary spring releases the Needle Shield lock, extending the shield to cover the needle permanently (passive sharps protection).

---

### 1.1.5 Batch Analysis and Design Verification Data (DVS)

Data from pivotal clinical trial batches (manufactured at the South San Francisco facility) demonstrate high process capability (Cpk) for critical device dimensions.

#### Table 1.1.5-B: Summary of Device Verification Results for Glucogen-XR

| Batch Number | Manufacture Date | Sample Size (n) | Injection Time (Avg) | Delivery Volume (Avg) | Pass/Fail (ISO 11608) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-JAN-2025 | 300 | 10.12 s | 0.998 mL | PASS |
| **GLUC-2025-002** | 18-JAN-2025 | 300 | 9.88 s | 1.002 mL | PASS |
| **GLUC-2025-003** | 02-FEB-2025 | 300 | 10.05 s | 1.001 mL | PASS |
| **GLUC-2025-004** | 14-FEB-2025 | 300 | 10.21 s | 0.995 mL | PASS |

**Statistical Analysis:**
The calculated Cpk for "Injection Time" across the GLUC-2025-XXX series is **1.84**, indicating a highly controlled manufacturing process that significantly exceeds the industry standard of 1.33.

---

### 1.1.6 Materials of Construction and Biocompatibility

All fluid-path components are evaluated per **ISO 10993-1:2018**.

*   **Fluid Path:** The Glucogen-XR peptide only contacts the Type I Borosilicate glass, the 304 Stainless Steel needle, and the FluroTec® stopper.
*   **Extractables/Leachables (E&L):** A comprehensive E&L study (Report GHS-EL-2024-09) was conducted using a 15% Ethanol/Water model solvent. No compounds were detected above the Analytical Evaluation Threshold (AET) of 1.5 μg/day.
*   **Latex Statement:** The GHS-AI-V4 is manufactured without the use of natural rubber latex.

### 1.1.7 Risk Management and FMEA

A Design Failure Mode and Effects Analysis (DFMEA) was performed in accordance with **ISO 14971**.

| Failure Mode | Effect | Probability | Severity | Mitigation |
| :--- | :--- | :--- | :--- | :--- |
| **Plunger Stalling** | Incomplete Dose | Remote | High | Low-friction siliconization of barrel; IR sensor alert. |
| **Glass Breakage** | Device Leakage | Improbable | Critical | Controlled damping system; 100% visual inspection. |
| **Needle Occlusion** | No Dose | Rare | Moderate | 5-micron filtration during filling; shelf-life stability testing. |

### 1.1.8 Regulatory References
1.  **FDA Guidance:** *Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013).*
2.  **ISO 11608-1:2022:** *Needle-based injection systems for medical use — Requirements and test methods.*
3.  **USP <1382>:** *Assessment of Drug Delivery Systems — Manufacturing and Quality Control.*
4.  **21 CFR Part 820:** *Quality System Regulation (Design Controls).*

---
**[End of Section 3.2.R.1.1]**
*Confidential - Property of Google Health Sciences*

---

## Components and Materials

# MODULE 3.2.P.7: CONTAINER CLOSURE SYSTEM / DEVICE DESCRIPTION
## SUBSECTION: 3.2.P.7.1 COMPONENTS AND MATERIALS

**Document ID:** GHS-GLUC-XR-M3-DEVICE-DMF-001  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Drug Product:** Glucogen-XR (glucapeptide extended-release)  
**Date of Issue:** October 24, 2024  
**Regulatory Context:** 21 CFR Part 820 (QSR), ISO 13485:2016, ISO 11608-1:2022  

---

### 1.0 INTRODUCTION AND SCOPE

This subsection provides an exhaustive technical characterization of the components and raw materials utilized in the manufacture of the Glucogen-XR Precision-Inject™ Autoinjector System. The device is a single-use, disposable, electromechanical-assisted spring-driven injector designed for the subcutaneous delivery of Glucogen-XR, a long-acting GLP-1 receptor agonist. 

The device architecture is categorized into three primary sub-assemblies:
1.  **The Primary Container Closure System (PCCS):** The 1.0 mL pre-filled syringe (PFS) containing the drug product.
2.  **The Drive Module (DM):** The mechanical engine responsible for needle insertion and plunger displacement.
3.  **The External Housing and User Interface (EHUI):** The ergonomic casing and safety lockout mechanisms.

All materials specified herein comply with USP <87>, USP <88> (Class VI), and ISO 10993 standards for biocompatibility.

---

### 2.0 PRIMARY CONTAINER CLOSURE SYSTEM (PCCS) COMPONENTS

The PCCS is the only sub-assembly in direct contact with the Glucogen-XR drug product. Google Health Sciences utilizes a Type I Borosilicate glass syringe system with a specialized internal silicone coating to ensure plunger glide force consistency over the 24-month shelf life.

#### 2.1 Technical Specifications of PCCS Components

| Component ID | Material Description | Manufacturer | Grade / Standard | Functional Role |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-PCCS-001** | Type I Borosilicate Glass (Clear) | Schott AG / Gerresheimer | USP <660>, EP 3.2.1 | Primary drug reservoir |
| **GHS-PCCS-002** | Bromobutyl Rubber (FluroTec® coated) | West Pharmaceutical Services | USP <381>, ISO 11040-5 | Plunger Stopper |
| **GHS-PCCS-003** | 29G Thin Wall Stainless Steel Needle | Terumo / Becton Dickinson | ISO 9626, SUS304 | Fluid delivery path |
| **GHS-PCCS-004** | Rigid Needle Shield (RNS) - Elastomer | Datwyler | USP <381> | Sterility barrier / Needle protection |
| **GHS-PCCS-005** | Medical Grade Silicone Oil (Highly Purified) | Dow Corning | USP <1311> | Lubrication for glide force |

#### 2.2 Glass Barrel Specifications (GHS-PCCS-001)

The glass barrel is manufactured using a continuous tubing process. To mitigate the risk of delamination (a known issue with GLP-1 peptides), Google Health Sciences employs the **Vial-Glass-Ion-Depletion (VGID)** process.

**Table 2.2.1: Dimensional Tolerances for 1.0 mL Glass Barrel**
| Parameter | Specification | Tolerance | Test Method |
| :--- | :--- | :--- | :--- |
| Overall Length | 54.00 mm | ± 0.10 mm | Caliper (GHS-QC-09) |
| Inner Diameter (ID) | 6.35 mm | ± 0.05 mm | Optical Profile |
| Outer Diameter (OD) | 8.15 mm | ± 0.10 mm | Optical Profile |
| Flange Thickness | 1.20 mm | ± 0.05 mm | Micrometer |
| Concentricity | ≤ 0.02 mm | Max | Laser Scan |

#### 2.3 Plunger Stopper (GHS-PCCS-002) - FluroTec® Laminate

The plunger stopper is a 4023/50 grey bromobutyl rubber formulation. To prevent peptide adsorption and reduce extractables/leachables (E&L), the product contact surface is laminated with a Fluoropolymer film (FluroTec®).

**Extractables Profile (Reference Batch: GLUC-2025-S01):**
*   **Total Organic Carbon (TOC):** < 0.5 ppm
*   **Conductivity:** < 2.0 µS/cm
*   **Non-Volatile Residue (NVR):** < 0.1 mg/unit
*   **Silicon Oil Concentration:** 0.4 - 0.6 mg/cm² (controlled via automated spraying)

---

### 3.0 DRIVE MODULE (DM) AND MECHANICAL COMPONENTS

The Drive Module is the "engine" of the Glucogen-XR device. It utilizes a high-tension Power Spring (GHS-DM-101) to provide the energy required for the high-viscosity extended-release formulation.

#### 3.1 Power Spring Specifications (GHS-DM-101)

Due to the non-Newtonian flow characteristics of the glucapeptide extended-release matrix, the spring constant ($k$) must be precisely calibrated.

**Calculation of Spring Force ($F$):**
$$F = k \cdot (L_0 - L)$$
Where:
*   $k = 2.45 \, \text{N/mm}$ (Spring Constant)
*   $L_0 = 85.0 \, \text{mm}$ (Free Length)
*   $L = 22.0 \, \text{mm}$ (Compressed Length at Start of Injection)

**Table 3.1.1: Power Spring Material Data**
| Property | Value | Unit | Standard |
| :--- | :--- | :--- | :--- |
| Material | Stainless Steel 17-7 PH | N/A | ASTM A313 |
| Wire Diameter | 0.85 | mm | GHS-MET-104 |
| Number of Coils | 18.5 | count | Visual |
| Surface Finish | Passivated | N/A | ASTM A967 |

#### 3.2 Plunger Rod (GHS-DM-102)

The plunger rod is manufactured via injection molding using Polycarbonate/Acrylonitrile Butadiene Styrene (PC/ABS) medical grade. This material was selected for its high impact strength and dimensional stability under load.

**Batch Control Example: GLUC-2025-DM-08**
*   **Resin Lot:** SABIC Cycoloy™ HC1204HF
*   **Molding Temperature:** 265°C
*   **Cycle Time:** 14.2 seconds
*   **Critical Dimension (Length):** 62.45 mm (+/- 0.05 mm)

---

### 4.0 EXTERNAL HOUSING AND USER INTERFACE (EHUI)

The EHUI comprises the outer shell, the needle guard, and the activation button. These components are designed for patients with potential dexterity issues (common in the Type 2 Diabetes population).

#### 4.1 Housing Materials

| Component | Material | Manufacturer | Characteristic |
| :--- | :--- | :--- | :--- |
| Outer Shell | ABS (Medical Grade) | BASF | Impact resistance |
| Viewing Window | Cyclo-Olefin Polymer (COP) | Zeonex® | Transparency/No yellowing |
| Needle Guard | Polypropylene (PP) | LyondellBasell | Low friction coefficient |
| Cap | Polyethylene (HDPE) | Dow | Moisture barrier |

#### 4.2 The "Precision-Click" Feedback Mechanism

The device incorporates a dual-audible feedback system (start and end of dose). The materials used for the "Clicker" (GHS-UI-302) are POM (Polyoxymethylene/Delrin) to ensure a distinct acoustic frequency of 3.2 kHz ± 0.5 kHz upon completion of delivery.

---

### 5.0 MANUFACTURING PROTOCOLS AND MATERIAL PREPARATION

#### 5.1 Protocol: Cleaning and Siliconization of Glass Barrels (GHS-PROC-442)

**Objective:** To ensure a sterile, low-friction environment for the drug product.

1.  **Ultrasonic Wash:** Barrels are submerged in 80°C WFI (Water for Injection) with 2% pharmaceutical-grade detergent for 300 seconds.
2.  **Rinse:** Three cycles of WFI rinsing at 5 bar pressure.
3.  **Drying:** Hot air tunnel at 120°C for 600 seconds.
4.  **Siliconization:** 
    *   **Method:** Dow Corning 360 Medical Fluid (1000 cSt) is atomized using a dual-nozzle system.
    *   **Verification:** Gravimetric analysis of 10 samples per batch (Batch GLUC-2025-S09). Limit: 0.5 mg ± 0.1 mg per barrel.
5.  **Depyrogenation:** 250°C for 45 minutes (validated 3-log reduction in endotoxins).

#### 5.2 Protocol: Drive Module Assembly (GHS-PROC-881)

**Step 1:** Load Power Spring (GHS-DM-101) into the Spring Retainer.  
**Step 2:** Apply 0.02g of Fluorinated Grease (Krytox™) to the trigger interface.  
**Step 3:** Insert Plunger Rod (GHS-DM-102) and compress to "Locked" position.  
**Step 4:** Torque test: Ensure release force is between 12N and 18N.  

---

### 6.0 RAW MATERIAL QUALITY CONTROL (INCOMING INSPECTION)

All materials received at the 3000 Innovation Drive facility undergo rigorous testing as per USP <1031>.

**Table 6.1: Acceptance Criteria for Incoming Device Components**
| Component | Test Parameter | Acceptance Limit | Sampling Plan (ANSI/ASQ Z1.4) |
| :--- | :--- | :--- | :--- |
| PCCS Glass | Hydrolytic Resistance | Class HGB1 | Level II, AQL 0.010 |
| Rubber Stopper | Fragmentation | < 5 fragments per 12 punctures | Level II, AQL 0.065 |
| Drive Spring | Load at 22mm | 154.5 N ± 5.0 N | Level S-3, AQL 1.0 |
| Plastic Housing | Tensile Strength | > 45 MPa | Level S-1, AQL 1.5 |

---

### 7.0 BIOCOMPATIBILITY AND TOXICOLOGICAL ASSESSMENT

In accordance with ISO 10993-1, the Glucogen-XR device is classified as a "Surface Device, Skin Contact, Prolonged Duration" (>24h for repeated use). However, the needle and fluid path are classified as "Externally Communicating, Tissue/Blood Path, Limited Duration."

**Table 7.1: ISO 10993 Testing Summary (Report GHS-TOX-2024-04)**
| Test | Standard | Result | Status |
| :--- | :--- | :--- | :--- |
| Cytotoxicity | ISO 10993-5 | Non-cytotoxic (Grade 0) | PASS |
| Sensitization | ISO 10993-10 | No evidence of sensitization | PASS |
| Irritation | ISO 10993-23 | Non-irritant | PASS |
| Hemocompatibility | ISO 10993-4 | Non-hemolytic | PASS |
| Pyrogenicity | ISO 10993-11 | Non-pyrogenic (<0.5 EU/mL) | PASS |

---

### 8.0 BATCH TRACEABILITY AND HISTORY RECORDS

Google Health Sciences utilizes an eBR (Electronic Batch Record) system integrated with Google Cloud Life Sciences API for real-time monitoring of device assembly.

**Sample Batch Traceability Matrix: GLUC-2025-AX-442**
*   **Assembly Date:** January 14, 2025
*   **PFS Batch:** GLUC-2025-S09
*   **Plunger Batch:** WEST-8821-2024
*   **Spring Batch:** SPR-119-GHS
*   **Final Yield:** 98.4%
*   **Deviations:** None recorded.

---

### 9.0 REFERENCES

1.  FDA Guidance: "Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products."
2.  ISO 11608-1:2022: Needle-based injection systems for medical use.
3.  USP <381>: Elastomeric Components in Injectable Drug Product Packaging/Delivery Systems.
4.  USP <661.1>: Plastic Materials of Construction.
5.  GHS Internal SOP-QA-992: Verification of Spring Constants for Autoinjector Modules.

---

**End of Section 3.2.P.7.1**

---

## Specifications

# MODULE 3.2.R: DEVICE DESCRIPTION AND SPECIFICATIONS
## SUBSECTION: 3.2.R.1.3 SPECIFICATIONS FOR THE GLUCOGEN-XR AUTO-INJECTOR SYSTEM (GHS-AI-V4)

**Document ID:** GHS-GLUC-M3-DEV-SPEC-2025  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Facility:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Product:** Glucogen-XR (glucapeptide extended-release) Injection  
**Device Type:** Single-use, disposable, spring-actuated mechanical auto-injector  

---

### 1.0 INTRODUCTION AND SCOPE
This section provides the comprehensive technical specifications for the GHS-AI-V4 Auto-Injector system, integrated with the 1.0 mL pre-filled syringe (PFS) containing the Glucogen-XR drug product. These specifications are established in accordance with **FDA 21 CFR Part 820 (Quality System Regulation)**, **ISO 11608-1:2022 (Needle-based injection systems for medical use)**, and **ICH Q6B (Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products)**.

The GHS-AI-V4 is a precision-engineered device designed to deliver a fixed dose of 2.4 mg (0.75 mL) of glucapeptide extended-release formulation subcutaneously. The specifications outlined herein encompass physical, functional, chemical, and microbiological parameters critical to the Safety and Efficacy (S&E) of the combination product.

---

### 2.0 PHYSICAL AND DIMENSIONAL SPECIFICATIONS (ISO 11608-1 COMPLIANCE)

The following table details the critical-to-quality (CTQ) physical dimensions of the fully assembled Glucogen-XR Auto-Injector. Measurements are conducted using calibrated digital calipers (Equipment ID: GHS-QC-CAL-099) and automated vision inspection systems (GHS-VIS-402).

#### Table 2.1: Physical Specification Matrix
| Parameter ID | Characteristic | Specification Limit | Unit | Test Method | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SPEC-PH-01** | Total Device Length | 155.50 ± 0.50 | mm | GHS-SOP-DEV-101 | Ensures compatibility with secondary packaging and ergonomics. |
| **SPEC-PH-02** | External Diameter (Body) | 18.25 ± 0.15 | mm | GHS-SOP-DEV-101 | Standardized grip circumference for arthritic patients. |
| **SPEC-PH-03** | Total Device Weight (Filled) | 42.45 ± 1.20 | g | GHS-SOP-DEV-102 | Quality control for component presence and fill weight. |
| **SPEC-PH-04** | Needle Shield Length (Extended) | 12.40 ± 0.25 | mm | GHS-SOP-DEV-101 | Ensures needle safety post-injection. |
| **SPEC-PH-05** | Viewing Window Clarity | ≥ 95% Transmittance | % | USP <855> | Allows patient to verify drug clarity and completion. |
| **SPEC-PH-06** | Cap Removal Force | 10.0 – 25.0 | N | ISO 11608-5 | Prevents accidental removal while ensuring user access. |

---

### 3.0 FUNCTIONAL PERFORMANCE SPECIFICATIONS (PRIMARY ENDPOINTS)

Functional specifications are validated across the operational temperature range (2°C to 30°C) to ensure performance under real-world conditions.

#### 3.1 Delivery Volume and Accuracy
The Glucogen-XR formulation is a high-viscosity non-Newtonian fluid. Delivery accuracy is calculated using the gravimetric method described in ISO 11608-1, Section 7.

**Calculation Formula for Delivered Mass ($M_d$):**
$$M_d = (W_{post} - W_{pre}) \times Z$$
*Where:*
*   $W_{pre}$ = Weight of device before activation (g)
*   $W_{post}$ = Weight of device after activation (g)
*   $Z$ = Evaporation correction factor (as per USP <905>)

#### Table 3.1: Functional Performance Matrix
| Parameter ID | Functional Requirement | Specification | Statistical Basis | Test Method |
| :--- | :--- | :--- | :--- | :--- |
| **SPEC-FN-01** | Delivered Volume | 0.75 mL ± 5% | 95/95 Confidence/Reliability | GHS-SOP-DEV-205 |
| **SPEC-FN-02** | Injection Time (2-8°C) | ≤ 15.0 Seconds | Mean + 3SD | GHS-SOP-DEV-206 |
| **SPEC-FN-03** | Injection Time (25°C) | ≤ 8.0 Seconds | Mean + 3SD | GHS-SOP-DEV-206 |
| **SPEC-FN-04** | Activation Force | 15.0 – 35.0 N | User Human Factors Study | ISO 11608-1 |
| **SPEC-FN-05** | Extended Needle Length | 5.0 – 8.0 mm | Subcutaneous Depth Target | GHS-SOP-DEV-208 |
| **SPEC-FN-06** | Needle Shield Lock-out | 100% Reliability | Critical Safety Feature | GHS-SOP-DEV-210 |

---

### 4.0 BATCH ANALYSIS AND RELEASE DATA (REPRESENTATIVE SAMPLES)

Data derived from three (3) pivotal registration batches manufactured at the South San Francisco facility.

#### Table 4.1: Release Data for Batches GLUC-2025-001 through GLUC-2025-003
| Test Parameter | GLUC-2025-001 (n=30) | GLUC-2025-002 (n=30) | GLUC-2025-003 (n=30) | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| **Mean Vol (mL)** | 0.752 | 0.749 | 0.751 | **PASS** |
| **RSD (%)** | 1.12% | 0.98% | 1.05% | **PASS** |
| **Mean Time (s)** | 7.2 | 7.4 | 7.1 | **PASS** |
| **Max Force (N)** | 22.4 | 21.8 | 23.1 | **PASS** |
| **Lock-out Failures** | 0/30 | 0/30 | 0/30 | **PASS** |

---

### 5.0 COMPONENT SPECIFICATIONS: PRIMARY CONTAINER CLOSURE (PFS)

The primary container is a 1.0 mL Long Type I Borosilicate Glass Syringe with a staked 27G Thin Wall (TW) needle.

#### 5.1 Glass Barrel (USP <660>)
*   **Material:** Type I Hydrolytic Glass (Schott Fiolax® or equivalent).
*   **Inner Diameter:** 6.35 mm ± 0.10 mm.
*   **Surface Treatment:** Internal silicone oil coating (Dow Corning 360) applied via baked-on process to minimize gliding force variability. Target: 0.4 mg/cm².

#### 5.2 Plunger Stopper (USP <381>)
*   **Material:** FluroTec® laminated bromobutyl rubber.
*   **Break-loose Force:** < 10 N.
*   **Sustaining Force:** < 8 N.

---

### 6.0 MANUFACTURING AND ASSEMBLY PROTOCOLS

#### 6.1 Step-by-Step Assembly Procedure (Protocol GHS-MFG-AI-400)
1.  **Preparation:** Verify cleanroom (ISO Class 7) environmental conditions (Temp: 20-22°C, Humidity: 35-50%).
2.  **Syringe Loading:** Automated pick-and-place robot (GHS-ROB-12) retrieves filled PFS (Batch GLUC-2025-XXX) from the tub.
3.  **Visual Inspection:** 360-degree camera check for glass cracks, particulate matter (USP <790>), and plunger position.
4.  **Chassis Integration:** Insert PFS into the internal carrier. Ensure the flange is seated against the shock-absorbing gasket (GHS-GSK-09).
5.  **Spring Compression:** Compress the main drive spring (Constant K = 1.45 N/mm) to the "Pre-load" position (45 mm displacement).
6.  **Ultrasonic Welding:** Secure the outer housing halves using ultrasonic welder (GHS-WELD-55) at 20 kHz.
7.  **Cap Fitment:** Apply the rigid needle shield (RNS) removal cap with an interference fit of 0.05 mm.
8.  **Final Labeling:** Apply 2D data matrix label containing Batch ID, Expiry, and Serial Number.

---

### 7.0 ENVIRONMENTAL AND STABILITY STRESS SPECIFICATIONS

The GHS-AI-V4 must maintain integrity under the following stress conditions as per **ISO 11608-1 Section 8**.

#### Table 7.1: Stress Testing Specifications
| Stress Condition | Parameters | Acceptance Criteria |
| :--- | :--- | :--- |
| **Free Fall (Drop)** | 1.0 meter onto concrete (3 orientations) | No glass breakage; Device remains functional. |
| **Vibration (Random)** | ASTM D4169 (DC-13) | No component dislodgement. |
| **Dry Heat** | 70°C for 96 Hours | Seal integrity maintained; Activation force within ±20%. |
| **Cold Storage** | -40°C for 96 Hours | No cracking of housing; Fluid remains contained. |
| **Accelerated Aging** | 40°C / 75% RH for 6 Months | Meet all functional specs (SPEC-FN-01 to 06). |

---

### 8.0 ANALYTICAL METHODOLOGY FOR SPECIFICATION VERIFICATION

#### 8.1 Break-Loose and Gliding Force (BLGF) Analysis
The BLGF is critical for ensuring the spring has sufficient energy to overcome friction.
*   **Equipment:** Instron 5942 Universal Testing System.
*   **Procedure:**
    1.  Secure the auto-injector in the custom GHS-JIG-V4.
    2.  Depress the activation button using a 50N load cell at a rate of 100 mm/min.
    3.  Record the peak force required to initiate plunger movement (Break-loose).
    4.  Record the mean force during the delivery phase (Gliding).
*   **Specification:** Peak Force < 15 N; Mean Gliding Force < 12 N.

#### 8.2 Needle Penetration Force
*   **Substrate:** 0.4mm Polyurethane film (simulated skin).
*   **Requirement:** Penetration force shall not exceed 1.5 N to ensure patient comfort.

---

### 9.0 REGULATORY COMPLIANCE AND STANDARDS CROSS-REFERENCE

| Regulatory Body | Standard / Guideline | Requirement Summary |
| :--- | :--- | :--- |
| **FDA** | 21 CFR 820.30 | Design Controls for Medical Devices |
| **ISO** | 11608-1:2022 | Needle-based injection systems – General requirements |
| **USP** | <1> | Injections and Implanted Drug Products |
| **USP** | <381> | Elastomeric Components in Injection Drug Products |
| **USP** | <661.1> | Plastic Materials of Construction |
| **ICH** | Q6B | Specifications for Biotechnological Products |

---

### 10.0 CONCLUSION
The specifications defined for the Glucogen-XR Auto-Injector (GHS-AI-V4) ensure that every unit produced under the GLUC-2025-XXX series meets the stringent requirements for subcutaneous delivery of glucapeptide. The combination of high-precision mechanical components and the proprietary Google Health Sciences GHS-CHO-001 derived drug product results in a delivery system with world-class reliability (calculated 99.999% success rate).

**Approvals:**
*   *Director of Device Engineering:* Dr. Alan Turing, PhD
*   *Head of Regulatory Affairs:* Sarah Jenkins, RAC
*   *Quality Assurance Lead:* Marcus Aurelius, ASQ CQE

**Date of Issue:** October 24, 2024  
**Effective Date:** January 01, 2025  
**Document Status:** FINAL / SUBMISSION READY

---

# Design History File Summary

## Design Inputs

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.R: REGIONAL INFORMATION – DESIGN HISTORY FILE SUMMARY
### SUBSECTION: DESIGN INPUTS (DI-GLUC-XR-001)

---

#### 1.0 INTRODUCTION AND SCOPE
The Design Inputs section for the **Glucogen-XR (glucapeptide extended-release)** single-use autoinjector system (Model GHS-AI-V4) establishes the comprehensive set of physical and performance requirements derived from both user needs and the specific physiological/biochemical demands of the glucapeptide molecule. 

As per **21 CFR 820.30(c)** and **ISO 13485:2016 Section 7.3.3**, Google Health Sciences (GHS) has translated clinical requirements, regulatory mandates, and risk-based controls into engineering specifications. This document serves as the foundation for the Design Verification (DV) and Design Validation (VAL) phases of the Glucogen-XR development program.

#### 2.0 REGULATORY REFERENCE FRAMEWORK
The design inputs documented herein were developed in strict accordance with the following international standards and FDA guidance documents:

| Reference ID | Title | Application to Glucogen-XR |
|:---|:---|:---|
| **FDA Guidance 2013** | Design Considerations for Devices that Condition the Patient Experience | Ergonomic and human factors inputs |
| **ISO 11608-1:2022** | Needle-based injection systems for medical use | General requirements and performance |
| **ISO 11608-5:2022** | Automated functions | Requirements for automated needle insertion/retraction |
| **IEC 60601-1-11** | Medical electrical equipment - Home healthcare environment | Environmental robustness for patient use |
| **USP <790>** | Visible Particulates in Injections | Inspection and delivery system cleanliness |
| **ANSI/AAMI HE75** | Human Factors Engineering - Design of Medical Devices | Anthropometric data for button force and grip |
| **ISO 10993-1** | Biological evaluation of medical devices | Biocompatibility of fluid-path components |

---

#### 3.0 PRIMARY DESIGN INPUT CATEGORIES
Design inputs for the Glucogen-XR system are categorized into five distinct domains to ensure full coverage of the device lifecycle.

##### 3.1 Functional and Performance Requirements (FPR)
These inputs define the mechanical capability of the autoinjector to deliver the high-viscosity glucapeptide formulation (15-22 cP at 25°C).

**Table 3.1.1: Mechanical Performance Inputs**
| Input ID | Requirement Description | Technical Specification | Rationale/Source |
|:---|:---|:---|:---|
| **DI-FPR-001** | Delivered Volume | 0.50 mL ± 0.025 mL | Clinical Dose Accuracy (95% CI) |
| **DI-FPR-002** | Injection Time | $\leq$ 10.0 seconds | User tolerance (HF-2024-R01) |
| **DI-FPR-003** | Injection Force | $\leq$ 15.0 N (Spring Activation) | Anthropometric limits for elderly patients |
| **DI-FPR-004** | Needle Gauge | 29G Thin Wall (TW) | Minimization of injection pain vs. flow rate |
| **DI-FPR-005** | Needle Extension | 5.0 mm to 8.0 mm | Subcutaneous delivery depth (Validated) |
| **DI-FPR-006** | Break-loose Force | $< 10$ N | Prevention of "stalling" after shelf-life |

**Calculations for Flow Resistance (Hagen-Poiseuille Equation):**
To determine the required spring force (DI-FPR-007), GHS utilized the following formula to account for the viscosity ($\eta$) of Glucogen-XR:
$$\Delta P = \frac{8 \eta L Q}{\pi R^4}$$
Where:
- $\eta = 22 \text{ mPa}\cdot\text{s}$ (Upper limit viscosity)
- $L = 12.7 \text{ mm}$ (Needle length)
- $Q = 0.05 \text{ mL/sec}$ (Target flow rate)
- $R = 0.12 \text{ mm}$ (Internal radius of 29G TW needle)

Based on these calculations, the drive spring (Batch: **GLUC-2025-SPR-09**) must provide a constant force of $F \geq 38\text{ N}$ throughout the plunger stroke to overcome glide force and fluid resistance.

---

##### 3.2 User Interface and Ergonomic Inputs (UIE)
The patient population for Type 2 Diabetes Mellitus (T2DM) frequently presents with comorbid conditions such as peripheral neuropathy or reduced grip strength.

**Table 3.2.1: Human Factors Design Inputs**
| Input ID | Requirement | Specification | Verification Method |
|:---|:---|:---|:---|
| **DI-UIE-01** | Visual Feedback | Viewing window transparency $> 92\%$ | Spectrophotometry |
| **DI-UIE-02** | Audible Feedback | "Click" at Start and End $\geq 65 \text{ dB}$ | Acoustic chamber testing |
| **DI-UIE-03** | Grip Diameter | $22\text{ mm} \pm 2\text{ mm}$ | Anthropometric fit (5th-95th percentile) |
| **DI-UIE-04** | Surface Texture | Non-slip TPE overmold | Coefficient of friction $> 0.6$ (wet) |
| **DI-UIE-05** | Label Legibility | Font size $\geq 8\text{ pt}$ sans-serif | ANSI/AAMI HE75 compliance |

---

#### 4.0 PRODUCT INTERACTION AND COMPATIBILITY (PIC)
The Glucogen-XR molecule is a complex glucapeptide produced in the **GHS-CHO-001** cell line. Design inputs must ensure the device does not catalyze degradation (e.g., aggregation or oxidation).

##### 4.1 Material Compatibility (Batch Reference: GLUC-2025-MAT)
*   **DI-PIC-001: Leachables/Extractables.** The primary container closure system (PCCS) shall utilize Type I Borosilicate Glass (USP <661.1>).
*   **DI-PIC-002: Silicone Oil Lubrication.** The syringe barrel shall be lubricated with medical-grade silicone oil ($1000 \text{ cSt}$) at a density of $0.4 \text{ mg/cm}^2 \pm 0.1 \text{ mg/cm}^2$.
*   **DI-PIC-003: Gas Permeability.** The needle shield (RNS) must prevent moisture loss $< 0.5\%$ over 24 months at $2\text{--}8^{\circ}\text{C}$.

##### 4.2 Chemical Resistance Protocols (SOP-DEV-440)
The external housing of the autoinjector (Medical Grade ABS/PC blend) must withstand common household disinfectants. 
*   **Test Procedure:** 10 cycles of wiping with 70% Isopropyl Alcohol (IPA).
*   **Acceptance Criteria:** No crazing, cracking, or degradation of the device markings.

---

#### 5.0 ENVIRONMENTAL AND STRESS INPUTS (ESI)
The device must remain functional after transport through global supply chains and home storage conditions.

| Input ID | Parameter | Specification | Standard Reference |
|:---|:---|:---|:---|
| **DI-ESI-01** | Storage Temp | $2^{\circ}\text{C}$ to $8^{\circ}\text{C}$ | ICH Q1A(R2) |
| **DI-ESI-02** | Excursion Temp | $-20^{\circ}\text{C}$ to $+40^{\circ}\text{C}$ (96 hours) | ASTM D4169 |
| **DI-ESI-03** | Free Fall Drop | $1.0\text{ meter}$ onto concrete (3 axes) | ISO 11608-1 |
| **DI-ESI-04** | Vibration | Random vibration (Truck/Air) | ISTA 3A |

---

#### 6.0 MANUFACTURING AND QUALITY INPUTS (MQI)
To ensure the high-volume production of Glucogen-XR (target $2.5$ million units/year), the following manufacturing inputs are defined.

*   **DI-MQI-01: Assembly Speed.** The final assembly line (Line GHS-AUTO-01) must support a cycle time of $\leq 4\text{ seconds}$ per unit.
*   **DI-MQI-02: Vision Inspection.** 100% automated vision inspection of the "Ready" and "Used" indicators (Batch Traceability: **GLUC-2025-VIS**).
*   **DI-MQI-03: Sterility Assurance.** The fluid path shall be sterilized via Gamma Irradiation (ISO 11137) or ETO, maintaining a Sterility Assurance Level (SAL) of $10^{-6}$.

---

#### 7.0 RISK-DERIVED DESIGN INPUTS (FMEA-DRIVEN)
Following the Failure Mode and Effects Analysis (FMEA-GLUC-001), specific inputs were added to mitigate identified risks.

1.  **Risk:** Premature activation during cap removal.
    *   **Input DI-RSK-01:** Cap removal force shall be $10\text{ N} < F < 25\text{ N}$.
2.  **Risk:** Needlestick injury post-injection.
    *   **Input DI-RSK-02:** Passive needle shield must lock in place with a force of $> 30\text{ N}$ resistance to override.
3.  **Risk:** Cold-chain failure visibility.
    *   **Input DI-RSK-03:** Integration of a thermochromic label on the secondary packaging (Required for Phase III clinical supply).

---

#### 8.0 TRACEABILITY MATRIX (ABBREVIATED)
The following table demonstrates the linkage between User Needs (UN) and Design Inputs (DI).

| User Need ID | User Need Description | Design Input ID | Verification Plan |
|:---|:---|:---|:---|
| **UN-001** | Easy to use for elderly | **DI-UIE-01, DI-FPR-003** | Summative HF Study |
| **UN-002** | Reliable drug delivery | **DI-FPR-001, DI-FPR-006** | Bench Testing (ISO 11608) |
| **UN-003** | Safe disposal | **DI-RSK-02** | Needle Safety Test |

---

#### 9.0 CONCLUSION
The Design Inputs for the Glucogen-XR autoinjector system represent a robust, data-driven framework that accounts for the unique rheological properties of the GHS-CHO-001 derived peptide. These inputs ensure that the final device constituent part is not only safe and effective for the T2DM patient population but also scalable within the Google Health Sciences manufacturing infrastructure located at **3000 Innovation Drive, South San Francisco**.

*End of Section 3.2.R - Design Inputs*

---

## Design Outputs

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.R: REGIONAL INFORMATION – DEVICE DESIGN HISTORY FILE (DHF) SUMMARY
### SUBSECTION: DESIGN OUTPUTS (GLUCOGEN-XR AUTO-INJECTOR SYSTEM)

---

**Document ID:** GHS-GLUC-M3-DHF-OUT-001  
**Version:** 1.0.4  
**Release Date:** October 14, 2024  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Product:** Glucogen-XR (glucapeptide extended-release) 2.0mg/0.5mL  
**Device Type:** Single-use, disposable, spring-driven pre-filled auto-injector (AI)  

---

#### 1.0 INTRODUCTION TO DESIGN OUTPUTS
Pursuant to 21 CFR 820.30(d), the Design Outputs for the Glucogen-XR Auto-Injector system constitute the finalized technical specifications, drawings, and manufacturing instructions required to ensure the device consistently performs its intended function. These outputs have been verified against the Design Inputs (GHS-GLUC-M3-DHF-INP-002) and serve as the basis for the Device Master Record (DMR).

The Glucogen-XR device is a complex electromechanical-analogous delivery system designed to handle the high-viscosity profile of the glucapeptide extended-release formulation (approx. 45 cP at 25°C).

#### 2.0 FINAL PRODUCT SPECIFICATIONS (THE "DEVICE MASTER SPECIFICATION")
The following table summarizes the primary design outputs translated from the engineering requirements into final product specifications.

| Specification ID | Parameter | Design Output Value | Tolerance | Verification Method |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-SPEC-001** | Total Delivered Volume | 0.50 mL | ± 0.025 mL | Gravimetric (ISO 11608-1) |
| **GHS-SPEC-002** | Injection Time | 8.5 seconds | ± 1.5 seconds | High-speed Video / Chronometer |
| **GHS-SPEC-003** | Needle Insertion Depth | 6.5 mm | ± 0.5 mm | Digital Caliper / CT Scan |
| **GHS-SPEC-004** | Activation Force | 12.5 N | +2.0 / -1.5 N | Force Transducer (Instron 5943) |
| **GHS-SPEC-005** | Extended Needle Shield Force | 8.0 N | Min. Threshold | Compression Test |
| **GHS-SPEC-006** | Break-loose Force | 4.2 N | ± 0.8 N | Static Load Cell |
| **GHS-SPEC-007** | Glide Force (Dynamic) | 6.8 N | ± 1.1 N | Displacement Force Profile |

#### 3.0 DRAWINGS AND GEOMETRIC DIMENSIONING AND TOLERANCING (GD&T)
Design outputs include a comprehensive suite of CAD models (SolidWorks v.2024 SP3) and 2D engineering drawings. All critical-to-quality (CTQ) dimensions are marked with the "Google G-Diamond" symbol on the prints.

##### 3.1 Primary Component Inventory
The Glucogen-XR system consists of the following primary sub-assemblies (Outputs):
1.  **Outer Housing (GHS-DWG-7721):** Medical-grade Polycarbonate (PC) / ABS blend.
2.  **Internal Drive Spring (GHS-DWG-4402):** Stainless Steel 302, fatigue-tested for 2-year shelf life.
3.  **Needle Shield Sub-assembly (GHS-DWG-1109):** Opaque PP with over-molded TPE tip.
4.  **Plunger Rod (GHS-DWG-8832):** Reinforced PEEK for high-viscosity resistance.
5.  **Primary Container Closure System (PCCS):** 1.0mL Long Type I Glass Syringe (USP <660>) with 27G Thin-wall (TW) staked needle.

#### 4.0 BILL OF MATERIALS (BOM) AND MATERIAL SPECIFICATIONS
The Design Output includes the validated BOM. All materials in the fluid path are compliant with ISO 10993-1 (Biological Evaluation of Medical Devices).

| Part Number | Description | Material Specification | Supplier | Biocompatibility Status |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-MAT-101** | Syringe Barrel | Borosilicate Glass Type I | Schott AG | ISO 10993 Pass |
| **GHS-MAT-102** | Elastomeric Stopper | FluroTec® Coated Bromobutyl | West Pharm | USP <87>, <88> Class VI |
| **GHS-MAT-103** | Drive Spring | SS 302 (Passivated) | Sandvik | N/A (Non-contact) |
| **GHS-MAT-104** | Needle Shield | Polypropylene (Huntsman) | Google Internal | ISO 10993 Pass |
| **GHS-MAT-105** | Glucapeptide Sol. | Glucogen-XR 2.0mg/0.5mL | GHS Mfg | N/A (Drug) |

#### 5.0 MANUFACTURING PROCESS PROTOCOLS (OUTPUTS)
A critical design output is the automated assembly sequence. The following protocol outlines the assembly of the Glucogen-XR device using the **GHS-AUTO-LINE-04** (Robotic Assembly System).

##### 5.1 Protocol: Final Device Assembly (GHS-PRO-ASM-500)
**Objective:** To assemble the pre-filled syringe (PFS) into the Glucogen-XR power pack and housing without compromising the integrity of the glass or the sterile barrier.

**Step-by-Step Procedure:**
1.  **PFS Inspection:** Visual inspection system (Cognex ViDi) scans for cracks, particulates, and plunger position.
2.  **Drive Spring Compression:** The main drive spring is compressed to 45.0mm (Force: 42N) and locked into the plunger rod trigger mechanism.
3.  **PFS Insertion:** The 1.0mL PFS (Batch GLUC-2025-001X) is inserted into the carrier sub-assembly.
4.  **Cap Installation:** The Rigid Needle Shield (RNS) remover is snapped onto the front end with a torque of 0.15 Nm.
5.  **Laser Marking:** Unique Device Identifier (UDI) is etched onto the housing per 21 CFR 801.20.

#### 6.0 RISK MANAGEMENT OUTPUTS (FMEA)
The Design Output phase finalized the Failure Mode and Effects Analysis (FMEA). Below is a summary of the high-risk items mitigated during design.

| Failure Mode | Effect | Probability | Severity | Mitigation (Design Output) |
| :--- | :--- | :--- | :--- | :--- |
| **Syringe Breakage** | Drug Leakage / Injury | Low | High | PEEK Plunger dampening ring added |
| **Short Dose** | Inadequate Therapy | Low | Med | Optimized spring constant (K=1.2 N/mm) |
| **Needle Stick** | Infection | Very Low | High | Passive needle shield locking mechanism |

#### 7.0 PACKAGING AND LABELING OUTPUTS
The packaging system is designed to maintain the cold chain (2°C to 8°C) and provide intuitive user instructions.

*   **Primary Label (GHS-LBL-001):** Includes 14pt font for high visibility, drug concentration, and storage requirements.
*   **IFU (Instructions for Use - GHS-IFU-V4):** Developed through three rounds of formative human factors testing.
*   **Secondary Packaging:** Insulated corrugated shippers validated under ISTA 3B protocols for the distribution of biologics.

#### 8.0 BATCH RELEASE DATA (REPRESENTATIVE OUTPUTS)
The following table represents the "Design Output" validation results from the clinical trial batch used in Phase III (Pivotal Study GHS-DIAB-301).

**Batch Number:** GLUC-2025-001A  
**Date of Manufacture:** January 12, 2025  
**Equipment ID:** GHS-ASSEMBLY-04  

| Test Parameter | Specification | Result (n=30) | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Dose Accuracy** | 0.475 - 0.525 mL | Mean: 0.502 mL (SD: 0.004) | PASS |
| **Injection Time** | 7.0 - 10.0 sec | Mean: 8.2 sec | PASS |
| **Activation Force** | 11.0 - 14.5 N | Mean: 12.8 N | PASS |
| **Needle Length** | 6.0 - 7.0 mm | Mean: 6.45 mm | PASS |

#### 9.0 STATISTICAL ANALYSIS OF OUTPUTS
To ensure the design outputs meet the 95%/99% reliability requirements for an FDA Category B Combination Product, a Ppk (Process Performance Index) analysis was conducted.

**Formula for Ppk:**
$$Ppk = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)$$

For the critical output **Dose Accuracy (GLUC-2025-001A)**:
*   **USL:** 0.525 mL
*   **LSL:** 0.475 mL
*   **Mean ($\mu$):** 0.502 mL
*   **Std Dev ($\sigma$):** 0.004 mL
*   **Calculated Ppk:** 1.91 (Exceeds the requirement of 1.33 for medical devices).

#### 10.0 REGULATORY COMPLIANCE AND STANDARDS CROSS-REFERENCE
The Design Outputs documented herein are in full compliance with the following international standards:
1.  **ISO 11608-1:2022:** Needle-based injection systems for medical use — Requirements and test methods.
2.  **ISO 14971:2019:** Application of risk management to medical devices.
3.  **FDA Guidance:** "Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products" (June 2013).
4.  **USP <1>:** Injections and Implanted Drug Products.

---
**END OF SECTION**  
*Confidential - Property of Google Health Sciences*

---

## Design Verification

# MODULE 3: QUALITY - DEVICE MASTER FILE (DMF)
## SECTION 3.2.R: DESIGN HISTORY FILE (DHF) SUMMARY
### SUBSECTION: DESIGN VERIFICATION (DV) - GLUCOGEN-XR AUTO-INJECTOR SYSTEM

---

#### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive summary of the Design Verification (DV) activities conducted for the Glucogen-XR (glucapeptide extended-release) Auto-Injector System. The verification process ensures that the medical device design output meets the specified design input requirements as mandated by **21 CFR 820.30(f)** and **ISO 13485:2016**.

The Glucogen-XR delivery system is a single-use, disposable, mechanical auto-injector integrated with a 1.0 mL Pre-Filled Syringe (PFS) containing a high-viscosity extended-release formulation of glucapeptide. Verification was conducted using clinical-scale production lots manufactured at the Google Health Sciences (GHS) facility in South San Francisco (Site ID: 3000-ISSF).

#### 2.0 REGULATORY COMPLIANCE AND STANDARDS
All verification activities were performed in accordance with the following international standards and FDA guidance documents:
*   **ISO 11608-1:2022**: Needle-based injection systems for medical use — Requirements and test methods.
*   **ISO 11608-5:2022**: Automated functions.
*   **ISO 10993-1:2018**: Biological evaluation of medical devices.
*   **FDA Guidance**: *Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products* (June 2013).
*   **USP <790>**: Visible Particulates in Injections.
*   **USP <1207>**: Package Integrity Testing.

#### 3.0 TEST ARTICLE IDENTIFICATION (BATCH TRACEABILITY)
Verification testing utilized three distinct registration batches to ensure intra-lot and inter-lot consistency. All units were conditioned at $25^\circ C \pm 2^\circ C / 60\% RH$ for 48 hours prior to testing unless otherwise specified.

**Table 1: Test Article Batch Information**
| Batch Number | Component Lot (Housing) | Component Lot (Spring) | PFS Lot Number | Manufacture Date | Quantity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | GHS-PLAST-992 | SPR-2025-A1 | P0001-GHS | 12-JAN-2025 | 1,500 units |
| **GLUC-2025-002** | GHS-PLAST-993 | SPR-2025-A1 | P0002-GHS | 19-JAN-2025 | 1,500 units |
| **GLUC-2025-003** | GHS-PLAST-994 | SPR-2025-B2 | P0003-GHS | 26-JAN-2025 | 1,500 units |

---

#### 4.0 DESIGN VERIFICATION MATRIX AND PROTOCOLS

The verification strategy was divided into five primary domains:
1.  **Physical/Mechanical Characterization**
2.  **Dose Accuracy and Delivery Performance**
3.  **Human Factors/Usability Verification**
4.  **Environmental and Transit Robustness**
5.  **Biocompatibility and Chemical Characterization**

##### 4.1 Physical and Mechanical Characterization (Protocol DV-MECH-001)

This protocol evaluated the mechanical integrity of the Glucogen-XR device under worst-case tolerances.

**4.1.1 Cap Removal Force**
The force required to remove the needle shield cap must be sufficient to prevent accidental exposure but low enough for patients with limited dexterity (T2DM geriatric population).
*   **Requirement (ID REQ-001):** Cap removal force $\geq 5.0\ N$ and $\leq 35.0\ N$.
*   **Equipment:** Instron 5965 Force Tester (ID: GHS-MECH-04).

**Table 2: Cap Removal Force Results (N=60 per Batch)**
| Batch ID | Mean (N) | Min (N) | Max (N) | Std. Dev | Ppk (Lower/Upper) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 18.42 | 12.10 | 22.34 | 2.15 | 2.08 / 2.57 | PASS |
| GLUC-2025-002 | 19.15 | 13.45 | 24.01 | 1.98 | 2.38 / 2.67 | PASS |
| GLUC-2025-003 | 17.88 | 11.90 | 21.80 | 2.44 | 1.76 / 2.34 | PASS |

**4.1.2 Activation Force (Skin Contact Force)**
The Glucogen-XR is a "push-on-skin" activated device.
*   **Requirement (ID REQ-002):** Activation force between $10.0\ N$ and $25.0\ N$.
*   **Procedure:** Device is mounted in the Instron tester; the needle guard is depressed at a rate of $100\ mm/min$.

**Table 3: Activation Force Statistical Summary**
| Parameter | Specification | Result (GLUC-2025-ALL) |
| :--- | :--- | :--- |
| Sample Size ($n$) | 180 | 180 |
| Mean Activation Force | $10.0 - 25.0\ N$ | $16.78\ N$ |
| Upper Tolerance Limit (95%/99%) | $< 25.0\ N$ | $21.32\ N$ |
| Lower Tolerance Limit (95%/99%) | $> 10.0\ N$ | $12.45\ N$ |

---

##### 4.2 Dose Accuracy and Delivery Performance (Protocol DV-DOSE-002)

Given the high viscosity of the Glucogen-XR formulation (approx. $45\ cP$), the delivery performance is critical. Verification was conducted at $5^\circ C$ (worst-case viscosity) and $25^\circ C$.

**4.2.1 Delivered Volume (Dose Accuracy)**
*   **Requirement (ID REQ-003):** Delivered volume must be $1.0\ mL \pm 5\%$ ($0.95\ mL$ to $1.05\ mL$).
*   **Method:** Gravimetric determination per ISO 11608-1. Density of formulation: $1.042\ g/cm^3$.

**Table 4: Dose Accuracy at $5^\circ C$ (Refrigerated Conditions)**
| Batch | Target ($g$) | Actual Mean ($g$) | Actual Mean ($mL$) | CV (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 1.042 | 1.039 | 0.997 | 0.82% |
| GLUC-2025-002 | 1.042 | 1.045 | 1.003 | 0.75% |
| GLUC-2025-003 | 1.042 | 1.041 | 0.999 | 0.91% |

**4.2.2 Injection Time**
*   **Requirement (ID REQ-004):** Injection time $\leq 15$ seconds for 100% of units at $5^\circ C$.
*   **Procedure:** Time is measured from the audible "click" of activation to the appearance of the visual end-of-dose indicator in the window.

**Table 5: Injection Time Analysis**
| Batch | Mean Time (sec) | Max Time (sec) | Min Time (sec) | Failure Rate |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 8.44 | 10.12 | 7.21 | 0/200 |
| GLUC-2025-002 | 8.91 | 11.45 | 7.45 | 0/200 |
| GLUC-2025-003 | 8.62 | 10.88 | 7.15 | 0/200 |

---

##### 4.3 Environmental and Stress Testing (Protocol DV-ENV-003)

**4.3.1 Free Fall / Drop Test**
Devices were subjected to a 1.0-meter drop onto a concrete surface in three orientations (horizontal, vertical-up, vertical-down).
*   **Requirement:** No premature activation; no glass breakage (PFS); device must function correctly post-drop.
*   **Test Batch:** GLUC-2025-001 ($n=30$).
*   **Results:** 30/30 units maintained integrity. No cracks observed in the cyclic olefin polymer (COP) housing.

**4.3.2 Accelerated Aging and Shelf Life**
Devices were stored at $40^\circ C / 75\% RH$ for 6 months to simulate 24 months of shelf life.
*   **Assessment:** Break-loose force of the plunger stopper and delivery time.
*   **Formula for Accelerated Aging:** $AAF = Q_{10}^{[(T_{AA} - T_{RT})/10]}$
    *   Where $Q_{10} = 2.0$, $T_{AA} = 40^\circ C$, $T_{RT} = 25^\circ C$.
    *   $AAF = 2.0^{1.5} = 2.83$.

**Table 6: Post-Accelerated Aging Functionality (T=6 Months)**
| Parameter | Specification | Result |
| :--- | :--- | :--- |
| Break-loose Force | $< 15\ N$ | $9.8\ N$ (Mean) |
| Glide Force | $< 20\ N$ | $14.2\ N$ (Mean) |
| Delivery Time | $< 15\ s$ | $9.1\ s$ (Mean) |

---

##### 4.4 Biocompatibility (Protocol DV-BIO-004)

The Glucogen-XR device contains external communicating components (needle) and surface-contacting components (needle guard/housing). Biocompatibility was assessed per **ISO 10993-1**.

**Table 7: ISO 10993 Biocompatibility Matrix**
| Test Category | Standard | Component | Result |
| :--- | :--- | :--- | :--- |
| **Cytotoxicity** | ISO 10993-5 | Needle Guard | Non-cytotoxic |
| **Sensitization** | ISO 10993-10 | Device Housing | Non-sensitizing |
| **Irritation** | ISO 10993-10 | Needle Guard | Non-irritant |
| **Acute Systemic Toxicity** | ISO 10993-11 | Full System | No adverse effects |
| **Subchronic Toxicity** | ISO 10993-11 | Full System | Passed (30-day) |

---

#### 5.0 STEP-BY-STEP TEST PROCEDURE: DOSE ACCURACY (SOP-DEV-099)

This procedure details the gravimetric method used to verify the $1.0\ mL$ dose delivery.

1.  **Preparation:**
    *   Ensure the analytical balance (Mettler Toledo XPR204) is calibrated and leveled.
    *   Verify the temperature of the test environment ($20^\circ C \pm 5^\circ C$).
2.  **Taring:**
    *   Place a clean glass vial (empty) on the balance.
    *   Tare the balance to $0.0000\ g$.
3.  **Activation:**
    *   Remove the cap from the Glucogen-XR device (Batch GLUC-2025-XXX).
    *   Position the device over the vial.
    *   Depress the device until the drive mechanism activates (audible click).
4.  **Collection:**
    *   Hold the device in place for 15 seconds after the second click (end-of-dose).
    *   Remove the device and inspect for residual droplets on the needle tip (USP <1151>).
5.  **Measurement:**
    *   Record the mass ($m$) in grams.
    *   Calculate volume ($V$) using: $V = m / \rho$, where $\rho$ is the density of the glucapeptide formulation ($1.042\ g/mL$).

---

#### 6.0 STATISTICAL ANALYSIS AND ACCEPTANCE CRITERIA

All verification data were analyzed using Minitab v21.1. The acceptance criterion for critical performance characteristics (Dose Accuracy, Activation Force) was a **Ppk $\geq 1.33$**, representing a $4\sigma$ quality level (less than 64 parts per million failure rate).

**Equation 1: Process Performance Index (Ppk)**
$$Ppk = \min \left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$
*Where $\mu$ = process mean, $\sigma$ = standard deviation, $USL$ = Upper Spec Limit, $LSL$ = Lower Spec Limit.*

For Batch **GLUC-2025-002** (Dose Accuracy):
*   $\mu = 1.003\ mL$
*   $\sigma = 0.0075\ mL$
*   $USL = 1.050\ mL$
*   $Ppk = (1.050 - 1.003) / (3 \times 0.0075) = 2.088$
*   **Conclusion:** Requirement met with significant margin.

---

#### 7.0 DESIGN VERIFICATION SUMMARY CONCLUSION
The Design Verification activities for the Glucogen-XR Auto-Injector System (utilizing batches **GLUC-2025-001, -002, and -003**) have successfully demonstrated that the device design meets all pre-defined Design Inputs. The device is capable of delivering the $1.0\ mL$ glucapeptide formulation with high precision ($CV < 1\%$) and maintaining structural integrity under environmental stress. The device is deemed safe and effective for its intended use in the treatment of Type 2 Diabetes Mellitus.

---
**END OF SECTION**
**Approved By:**
*Dr. Lawrence Page, Head of Device Development, Google Health Sciences*
*Date: 15-FEB-2025*

---

# Design Validation

## User Studies

# MODULE 3.2.R: DEVICE MASTER FILE (DMF)
## SECTION: DESIGN VALIDATION
### SUBSECTION: 3.2.R.1.4 HUMAN FACTORS AND USER INTERFACE VALIDATION (USER STUDIES)

---

#### 1.4.1 Executive Summary of User Interface Validation
Google Health Sciences (GHS), a division of Google Cloud Life Sciences, has conducted a comprehensive Human Factors (HF) Summative Validation Study for the Glucogen-XR (glucapeptide extended-release) Autoinjector System. This study was performed in accordance with FDA Guidance *“Applying Human Factors and Usability Engineering to Medical Devices” (2016)* and *ANSI/AAMI HE75:2009/(R)2018*.

The primary objective was to demonstrate that the intended users can safely and effectively use the Glucogen-XR device in its intended environment of use without patterns of use errors that could result in serious harm or sub-therapeutic dosing. This validation follows the iterative formative stages (Formative 1: Concept Evaluation; Formative 2: Prototype Refinement; Formative 3: Final Design Verification).

---

#### 1.4.2 Regulatory Standards and Compliance Framework
The design validation for User Studies adhered to the following international and domestic standards:
*   **FDA 21 CFR Part 820.30(g):** Design Validation.
*   **ISO 62366-1:2015:** Application of usability engineering to medical devices.
*   **ISO 11608-1:2022:** Needle-based injection systems for medical use.
*   **IEC 60601-1-11:** Requirements for medical electrical equipment and medical electrical systems used in the home healthcare environment.
*   **FDA Guidance:** *Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013).*

---

#### 1.4.3 Study Design and Methodology (Protocol HF-SUM-2025-001)

##### 1.4.3.1 Study Objectives
The summative study aimed to:
1.  Validate that the Glucogen-XR User Interface (UI) supports safe and effective use by the intended populations.
2.  Assess the effectiveness of the Instructions for Use (IFU) and packaging.
3.  Identify any unforeseen hazards or use errors associated with the final commercial design.
4.  Quantify the successful completion of Critical Tasks (CTs) as defined in the Use-Related Risk Analysis (URRA).

##### 1.4.3.2 Participant Recruitment and Categorization
A total of 75 participants were enrolled across three distinct cohorts to ensure representative coverage of the Type 2 Diabetes Mellitus (T2DM) population. All participants were required to be "Injection Naïve" regarding the Glucogen-XR system to represent a worst-case scenario.

**Table 1.4.3.2-A: Participant Demographics and Stratification**
| Group ID | User Category | Description | N= | Age Range (Years) | Hand Function (Dexterity) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **G1-PAT** | Adult Patients | Diagnosed T2DM; Self-injectors | 30 | 18 - 75 | Normal to Mild Impairment |
| **G2-CG** | Lay Caregivers | Non-medically trained family/friends | 15 | 21 - 65 | Normal |
| **G3-HCP** | Healthcare Prof. | Nurses/Physicians (Training use) | 15 | 25 - 65 | Normal |
| **G4-ELD** | Elderly Patients | Diagnosed T2DM; Aged 75+ | 15 | 75 - 88 | Moderate Osteoarthritis |

**Note:** All materials utilized Batch **GLUC-2025-DEV-09** (Mechanical Mock-ups) and **GLUC-2025-VAL-12** (Final Printed IFU).

---

#### 1.4.4 Critical Task Analysis (CTA) and Risk-Based Evaluation
The User Study focused on tasks where failure could lead to:
1.  **Dose Omission:** Failure to activate the device.
2.  **Partial Dosing:** Premature removal of the needle.
3.  **Needlestick Injury:** Improper disposal or handling.
4.  **Infection:** Compromising the sterile barrier.

**Table 1.4.4-A: Mapping of Critical Tasks to Potential Harm**
| Task ID | Task Description | Potential Error Mode | Severity (S) | Mitigation |
| :--- | :--- | :--- | :--- | :--- |
| CT-01 | Visual Inspection | Use of expired/cloudy drug | High | Transparent window; Labeling |
| CT-02 | Cap Removal | Premature activation/needle damage | Medium | Pull-off force spec (15-25N) |
| CT-03 | Site Selection | Injection into scarred tissue | Medium | IFU Diagrams |
| CT-04 | Device Placement | 90-degree angle failure | High | Flat shroud design |
| CT-05 | Activation | Failure to press button/shroud | High | Audible/Tactile 'Click' |
| CT-06 | Dwell Time | Premature removal ( < 10s) | High | Visual indicator window |

---

#### 1.4.5 Test Environment and Materials
Studies were conducted in "Simulated Use" environments designed to mimic typical home and clinic settings.
*   **Lighting:** Adjusted to 300-500 lux (standard home lighting).
*   **Noise:** Background noise levels of 45-55 dB.
*   **Injection Media:** Synthetic skin pads (3M™ simulated tissue) calibrated for 12.5mm needle penetration resistance.
*   **Hardware:** Glucogen-XR Autoinjector (pre-filled with placebo saline for safety).

---

#### 1.4.6 Step-by-Step Validation Protocol (SOP-HFE-04)

**Phase I: Knowledge Tasks (Pre-Injection)**
1.  **Participant Briefing:** Participants are informed they are testing the *system*, not their own abilities.
2.  **Unboxing:** Participants receive the box (Batch GLUC-2025-PKG-01) and are instructed to "Prepare to give the injection as you would at home."
3.  **Instruction Use:** No prompting is allowed. The moderator records if and when the IFU is consulted.

**Phase II: Simulated Injection (The "Usability Run")**
1.  **Preparation:** Removal of the device from the tray.
2.  **Inspection:** Checking the drug window.
3.  **Sanitization:** Swabbing the "injection site" (simulated pad).
4.  **Cap Removal:** Removing the safety cap.
5.  **Placement:** Positioning the device against the site.
6.  **Activation:** Pressing the injection button/shroud.
7.  **Hold Time:** Maintaining pressure for the full 10 seconds (timed by moderator).
8.  **Confirmation:** Checking the yellow plunger indicator.

**Phase III: Post-Use Interviews**
*   **Subjective Ease of Use:** 1-7 Likert Scale.
*   **Root Cause Analysis:** If a task was failed, the participant is asked to explain their thought process using "Think Aloud" retrospection.

---

#### 1.4.7 Data and Statistical Analysis of Results

##### 1.4.7.1 Success Rates for Critical Tasks
The following table summarizes the performance of the 75 participants across the validated batches.

**Table 1.4.7.1-A: Summative Validation Task Completion Data**
| Task ID | G1-PAT (%) | G2-CG (%) | G3-HCP (%) | G4-ELD (%) | Overall Pass Rate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CT-01 (Check Drug)** | 96.7% | 100% | 100% | 93.3% | **97.3%** |
| **CT-02 (Cap Removal)** | 100% | 100% | 100% | 100% | **100%** |
| **CT-04 (Placement)** | 100% | 100% | 100% | 93.3% | **98.7%** |
| **CT-05 (Activation)** | 100% | 100% | 100% | 100% | **100%** |
| **CT-06 (Dwell Time)** | 93.3% | 100% | 100% | 86.7% | **94.7%** |

##### 1.4.7.2 Calculation of Binomial Confidence Intervals
To ensure statistical significance for FDA review, the lower bound of the 95% confidence interval was calculated using the Clopper-Pearson method for the most critical task (Dwell Time).

$$LB = \left( 1 + \frac{n - x + 1}{x F_{2x, 2(n-x+1), 1-\alpha/2}} \right)^{-1}$$

*   Where $n=75$, $x=71$ (successes).
*   Calculated Lower Bound: **87.0%**.
*   *Conclusion:* Meets the pre-defined acceptance criteria of >85% for injection-naïve users.

---

#### 1.4.8 Use Error Analysis and Root Cause Descriptions

During the study (Batch **GLUC-2025-SUM-01**), four (4) instances of "Early Removal" (CT-06) were observed in the G4-ELD (Elderly) group.

**Root Cause Analysis for CT-06 Failures:**
*   **Observation:** Participants removed the device after the first "click" (start of injection) rather than waiting for the second "click" (end of injection) or the visual yellow bar.
*   **Participant Feedback:** "I thought it was done when it clicked."
*   **Risk Impact:** This would result in a partial dose.
*   **Design Response:** The IFU was updated in Revision C to include a large bolded warning: **"Wait for the 2nd Click and the Yellow Bar."** A follow-up formative study (F-4) confirmed this mitigation reduced the error rate to <2% in the elderly cohort.

---

#### 1.4.9 Detailed Test Data by Batch (Representative Samples)

**Table 1.4.9-A: Individual Participant Performance (Sample Subset)**
| Participant ID | Batch No. | Cohort | Task Success (Y/N) | Hold Time (s) | User Error Noted |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P-001 | GLUC-2025-001 | G1-PAT | Y | 11.2 | None |
| P-002 | GLUC-2025-001 | G1-PAT | Y | 10.5 | None |
| P-046 | GLUC-2025-003 | G4-ELD | N | 4.2 | Premature Removal (CT-06) |
| P-047 | GLUC-2025-003 | G4-ELD | Y | 10.8 | None |
| P-061 | GLUC-2025-005 | G3-HCP | Y | 12.1 | None |

---

#### 1.4.10 Conclusion of User Studies
The summative human factors validation for Glucogen-XR concludes that the user interface, including the physical device (Batch **GLUC-2025-XXX series**) and the accompanying labeling/IFU, is safe and effective for the intended use by patients with T2DM and their caregivers. Residual risks have been mitigated to the As Low As Reasonably Practicable (ALARP) level.

**Approval Sign-off:**
*   *Director of Human Factors Engineering:* [Signed]
*   *Head of Regulatory Affairs, Google Health Sciences:* [Signed]
*   *Date:* 14-Oct-2025

---
*Footnotes:*
1. *Refer to Appendix 12.4 for the complete "Raw Data Log" of all 75 participants.*
2. *Refer to Module 3.2.P.2 for Drug-Device Compatibility data regarding the GHS-CHO-001 cell line derived glucapeptide stability within the autoinjector primary container closure system.*

---

## Simulated Use Testing

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.R: REGIONAL INFORMATION – DEVICE DESIGN VALIDATION
### SUBSECTION: SIMULATED USE TESTING (SUT)

---

#### 1.0 Executive Summary of Simulated Use Testing
The Simulated Use Testing (SUT) program for Glucogen-XR (glucapeptide extended-release) pre-filled autoinjector system was conducted to provide high-fidelity empirical evidence that the integrated medicinal product-device constituent performs as intended under conditions mimicking the actual clinical environment. This testing validates the Human Factors Engineering (HFE) outputs and confirms that the mechanical, chemical, and biological integrity of the Glucogen-XR delivery system remains within specification when operated by the intended user populations (Type 2 Diabetes Mellitus patients, lay caregivers, and healthcare professionals).

This validation was performed in accordance with:
*   **FDA Guidance:** *Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products* (2013).
*   **FDA Guidance:** *Applying Human Factors and Usability Engineering to Medical Devices* (2016).
*   **ISO 11608-1:2022:** *Needle-based injection systems for medical use — Requirements and test methods*.
*   **ISO 11608-5:2022:** *Automated functions*.

#### 2.0 Scope and Objectives
The objective of the SUT is to evaluate the reliability of the 1.0 mg/0.5 mL extended-release formulation delivery via the GHS-AI-Gen2 Autoinjector. The testing focuses on the "worst-case" simulated scenarios, including geriatric users with limited manual dexterity, adolescent patients, and high-stress environments.

**Primary Endpoints:**
1.  **Dose Accuracy:** Verification that the delivered volume is $0.50 \text{ mL} \pm 5\%$ under simulated use conditions.
2.  **Activation Force:** Measurement of the force required to initiate the injection sequence.
3.  **Extended-Release Matrix Integrity:** Confirmation that the mechanical shear forces of the autoinjector do not degrade the glucapeptide peptide sequence or the PLGA-based extended-release microsphere suspension.
4.  **Needle Safety Shield Functionality:** Successful lockout of the needle guard post-injection.

---

#### 3.0 Test Article Identification
All test articles utilized in this validation were manufactured under cGMP at the Google Health Sciences facility (3000 Innovation Drive, South San Francisco).

**Table 1: Test Article Batch Characterization**
| Batch Number | Component Type | Manufacturing Date | Quantity (Units) | Storage Condition |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001-SUT** | Clinical/Validation Batch | 12-JAN-2025 | 1,500 | 2°C – 8°C |
| **GLUC-2025-002-SUT** | Extreme Temp Excursion Batch | 15-JAN-2025 | 500 | 25°C / 60% RH |
| **GLUC-2025-003-SUT** | Mechanical Stress Batch | 18-JAN-2025 | 500 | 2°C – 8°C |
| **GHS-DEVICE-2025-V** | Autoinjector Sub-Assembly | 10-JAN-2025 | 2,500 | Ambient |

---

#### 4.0 Simulated Use Environmental Parameters
To simulate real-world conditions, testing was performed in a multi-variable environment. 

**Table 2: Environmental Test Matrix**
| Parameter | Standard Condition | Stress Condition (Low) | Stress Condition (High) |
| :--- | :--- | :--- | :--- |
| Temperature | $22^\circ\text{C} \pm 2^\circ\text{C}$ | $5^\circ\text{C} \pm 1^\circ\text{C}$ | $38^\circ\text{C} \pm 1^\circ\text{C}$ |
| Relative Humidity | $45\% \pm 5\%$ | $15\% \pm 5\%$ | $85\% \pm 5\%$ |
| Lighting | 500 Lux | 100 Lux (Dim) | 1200 Lux (Bright) |
| Simulated Surface | Synthetic Skin (Silicone/Polyurethane) | Low-friction (Wet skin) | High-resistance (Clothed*) |

*\*Testing included injection through single-layer cotton fabric (0.4mm thickness) per patient use-case analysis.*

---

#### 5.0 Comprehensive Testing Protocols

##### 5.1 Protocol SUT-01: Dose Delivery Accuracy and Precision
**Purpose:** To quantify the mass of the delivered dose under simulated handling conditions (including 15-second "hold time").

**Equipment:**
*   Mettler Toledo Precision Balance (ID: GHS-BAL-9922)
*   High-Speed Video Camera (ID: GHS-CAM-04; 1000 fps)
*   Synthetic Skin Pad (Durometer 20A)

**Step-by-Step Procedure:**
1.  Equilibrate Glucogen-XR Autoinjector (Batch GLUC-2025-001-SUT) to room temperature for 30 minutes.
2.  Perform a 10-second manual agitation (swirling) to ensure microsphere homogeneity as per the Instructions for Use (IFU).
3.  Remove the safety cap (Force measurement recorded via Load Cell).
4.  Position the device perpendicular to the synthetic skin pad.
5.  Apply downward pressure to activate the needle shield.
6.  Depress the activation button.
7.  Maintain contact for 15 seconds after the second "click" is heard.
8.  Collect the delivered mass into a tared 5mL HPLC vial.
9.  Calculate volume using the density of Glucogen-XR formulation ($\rho = 1.042 \text{ g/cm}^3$).

**Statistical Methodology:**
The Mean Delivered Volume ($V_d$) must meet the following criteria:
$$V_d = \frac{\sum_{i=1}^{n} w_i / \rho}{n}$$
Where:
*   $w_i$ = weight of the $i$-th dose
*   $n = 300$ replicates
*   Acceptance Criteria: $0.475 \text{ mL} \le V_d \le 0.525 \text{ mL}$ with a Cpk $\ge 1.33$.

---

#### 6.0 Data Tables and Results

##### 6.1 Results for Dose Delivery (Batch GLUC-2025-001-SUT)
Data represents simulated use by 50 unique participants across 300 total injections.

**Table 3: Simulated Use Dose Accuracy Data**
| Participant Group | Number of Injections | Mean Weight (g) | Calculated Vol (mL) | Std Dev (mL) | %RSD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T2DM Patients (Self) | 100 | 0.5212 | 0.5002 | 0.0041 | 0.82% |
| Caregivers (Adult) | 100 | 0.5208 | 0.4998 | 0.0055 | 1.10% |
| Healthcare Prof. | 50 | 0.5221 | 0.5011 | 0.0032 | 0.64% |
| Geriatric (Manual Impair) | 50 | 0.5185 | 0.4976 | 0.0089 | 1.79% |
| **Combined Total** | **300** | **0.5207** | **0.4997** | **0.0054** | **1.08%** |

---

##### 6.2 Protocol SUT-02: Mechanical Performance (Activation and Lock-out)
**Purpose:** To validate the force profiles required for user interaction.

**Table 4: Force Profile Specifications vs. Simulated Results**
| Parameter | Specification (N) | Mean Observed (N) | Min (N) | Max (N) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Cap Removal Force | 5.0 – 15.0 | 9.4 | 7.2 | 12.1 | **PASS** |
| Shield Activation Force| 2.0 – 10.0 | 4.6 | 3.1 | 6.8 | **PASS** |
| Button Trigger Force | 3.0 – 12.0 | 7.1 | 5.5 | 9.2 | **PASS** |
| Lock-out Force (Safety) | > 25.0 | 44.3 | 38.1 | 51.0 | **PASS** |

---

#### 7.0 Extended-Release Matrix Integrity Post-Simulation
A critical aspect of the Glucogen-XR Simulated Use Testing is ensuring that the 27G thin-wall needle and the spring-driven plunger do not cause "mechanical milling" of the PLGA microspheres, which would result in a "dose dump" (loss of extended-release properties).

**Analytical Testing Post-Injection:**
Samples from Table 3 were collected and subjected to Particle Size Distribution (PSD) analysis via laser diffraction (Malvern Mastersizer 3000).

**Table 5: Microsphere Integrity Data (Pre- vs. Post-Injection)**
| Batch ID | Parameter | Pre-Injection (Bulk) | Post-Simulated Injection | Change (%) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | $D_{10}$ | $12.4 \mu\text{m}$ | $12.1 \mu\text{m}$ | -2.4% |
| GLUC-2025-001 | $D_{50}$ | $45.8 \mu\text{m}$ | $45.2 \mu\text{m}$ | -1.3% |
| GLUC-2025-001 | $D_{90}$ | $88.2 \mu\text{m}$ | $87.9 \mu\text{m}$ | -0.3% |

**Conclusion of Integrity Testing:**
The negligible change in $D_{50}$ confirms that the GHS-AI-Gen2 fluid path maintains the structural integrity of the glucapeptide microspheres under maximum spring-force loads.

---

#### 8.0 Simulated Misuse Scenarios (Robustness Testing)
Per ISO 11608-1, the device was tested against foreseeable misuse.

##### 8.1 Protocol SUT-03: Premature Removal
Simulated users removed the device from the injection site 3 seconds after the first click (before the 15-second recommended hold).
*   **Result:** The needle shield successfully deployed and locked out in 100% of cases ($n=50$).
*   **Dose Assessment:** An average of 0.15 mL was delivered, confirming that the device requires the full 15-second dwell time for complete delivery of the 0.5 mL dose, as stated in the WARNINGS section of the Labeling.

##### 8.2 Protocol SUT-04: Drop Testing (Simulated Handling Error)
Devices from Batch GLUC-2025-003-SUT were dropped from a height of 1.0 meter onto a concrete surface to simulate a patient dropping the device on a bathroom floor.
*   **Post-Drop Inspection:** No glass breakage of the 1mL Long Type I glass syringe was observed.
*   **Functionality:** 48 out of 50 devices functioned perfectly post-drop. 2 devices experienced cap-dislodgement but remained sterile due to the internal needle shield.

---

#### 9.0 Regulatory Compliance Statement
The results of the Simulated Use Testing for Glucogen-XR demonstrate that the GHS-AI-Gen2 Autoinjector is highly reliable and suitable for the intended T2DM patient population. The device exceeds the requirements set forth in USP <905> Uniformity of Dosage Units for delivered mass and satisfies the safety requirements of the Needlestick Safety and Prevention Act.

**Approvals:**
*   *Dr. Jane Doe, VP Regulatory Affairs, Google Health Sciences*
*   *Dr. John Smith, Head of Device Engineering, Google Cloud Life Sciences*

**Date of Report:** 15-FEB-2025
**Document ID:** GHS-GLUC-SUT-2025-REV01

---

## Design Validation Report

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.R: REGIONAL INFORMATION – DEVICE DESIGN DOSSIER
### DOCUMENT ID: GHS-GLUCXR-M3-DVD-004
### SUBSECTION: DESIGN VALIDATION REPORT (DVR)

---

**CONFIDENTIALITY NOTICE**
The information contained in this Design Validation Report is the proprietary property of Google Health Sciences, a Division of Google Cloud Life Sciences. This document is submitted to the U.S. Food and Drug Administration (FDA) in support of the New Drug Application (NDA) for Glucogen-XR (glucapeptide extended-release). Unauthorized reproduction or distribution is strictly prohibited.

---

## 1.0 EXECUTIVE SUMMARY

This Design Validation Report (DVR) provides comprehensive evidence that the Glucogen-XR Autoinjector (GHS-AI-V3), a single-use, prefilled, fixed-dose mechanical injector, conforms to defined user needs and intended uses within the representative clinical environment. Validation was conducted in accordance with **21 CFR 820.30(g)** (Design Validation) and follows the principles outlined in **ISO 11608-1:2022** and **FDA Guidance: Design Control Guidance for Medical Device Manufacturers**.

The validation program for Glucogen-XR utilized a multi-faceted approach involving:
1.  **Summative Human Factors Validation (HFV):** Assessment of the user-device interface with 75 representative participants (Lay Users, Caregivers, and Healthcare Professionals).
2.  **Clinical Performance Equivalence:** Verification of the delivery of the 2.5 mg/0.5 mL glucapeptide extended-release formulation under simulated home-use conditions.
3.  **Environmental Stress Validation:** Performance verification after exposure to real-world transit and storage extremes (ASTM D4169-22).

Based on the cumulative data presented herein, it is concluded that the Glucogen-XR device is safe and effective for its intended use in the treatment of Type 2 Diabetes Mellitus.

---

## 2.0 SCOPE AND APPLICABILITY

This report applies to the final finished combination product:
*   **Drug Constituent:** Glucapeptide extended-release (2.5 mg)
*   **Device Constituent:** GHS-AI-V3 Autoinjector
*   **Primary Packaging:** 1.0 mL Long Type I Glass Pre-filled Syringe (PFS) with 27G Thin Wall (TW) staked needle.

### 2.1 Regulatory Standards Compliance
The validation activities were executed in alignment with the following international standards and regulatory guidances:

| Standard/Guidance Reference | Title |
| :--- | :--- |
| **21 CFR Part 4** | Regulation of Combination Products |
| **21 CFR 820.30** | Quality System Regulation – Design Controls |
| **ISO 11608-1:2022** | Needle-based injection systems for medical use — Part 1 |
| **ISO 14971:2019** | Application of risk management to medical devices |
| **IEC 62366-1:2015** | Application of usability engineering to medical devices |
| **FDA Guidance (2016)** | Applying Human Factors and Usability Engineering to Medical Devices |
| **ASTM D4169-22** | Standard Practice for Performance Testing of Shipping Containers |

---

## 3.0 DEVICE DESCRIPTION AND INTENDED USE

### 3.1 Intended Use
The Glucogen-XR Autoinjector is intended for the subcutaneous injection of glucapeptide extended-release for the improvement of glycemic control in adults with Type 2 Diabetes Mellitus.

### 3.2 Intended User Population
*   **Adult Patients (18-85 years):** Including those with varying degrees of dexterity and visual impairment common in diabetic populations.
*   **Lay Caregivers:** Non-professional individuals assisting patients.
*   **Healthcare Professionals (HCPs):** Nurses or physicians performing injections in a clinical setting.

### 3.3 Design Input vs. Design Output (Traceability)
The validation ensures that the **User Needs (UN)** identified in Document GHS-UN-001 have been met by the **Design Outputs (DO)**.

| User Need ID | Requirement Description | Validation Method |
| :--- | :--- | :--- |
| **UN-001** | The device must be easy to use for patients with limited hand strength. | Summative HF Study (Task 4.2) |
| **UN-002** | The device must provide clear feedback of dose completion. | Audible/Visual Click Verification |
| **UN-003** | The needle must be shielded before and after injection. | Shield Activation Testing |
| **UN-004** | The device must deliver $0.5 mL \pm 0.05 mL$. | Gravimetric Analysis |

---

## 4.0 VALIDATION TEST PLAN AND PROTOCOLS

### 4.1 Summative Human Factors Validation (HFV-2025-01)
**Objective:** To demonstrate that the Glucogen-XR Autoinjector can be used by intended users without serious medication errors or use-related hazards.

#### 4.1.1 Methodology
*   **Participant Sample Size:** $N = 75$ (Total)
    *   Group A: Patients with T2DM (n=30)
    *   Group B: Lay Caregivers (n=15)
    *   Group C: HCPs (n=15)
    *   Group D: Patients with Hand Dexterity Impairment (n=15)
*   **Environment:** Simulated home environment and simulated clinical environment.
*   **Materials:** Final commercial presentation (GHS-AI-V3), Instructions for Use (IFU), and retail packaging.

#### 4.1.2 Critical Task Analysis (CTA)
The following tasks were identified through Risk Analysis (FMEA) as critical to safety:

| Task ID | Description | Potential Hazard of Failure |
| :--- | :--- | :--- |
| **T1** | Cap Removal | Needle damage or premature activation |
| **T2** | Injection Site Selection | Poor absorption / Pain |
| **T3** | Device Activation (Firm Press) | Underdose / No dose |
| **T4** | Holding for 10 Seconds | Partial dose |
| **T5** | Confirmation of Window Yellow Bar | Failure to verify dose delivery |

---

## 5.0 VALIDATION TEST RESULTS: BATCH DATA ANALYSIS

Validation was performed using three distinct production batches of the Glucogen-XR Autoinjector.

### 5.1 Batch Information Table

| Batch Number | Manufacture Date | Quantity Tested | Purpose |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12-Jan-2025 | 250 Units | HF Validation / Transit Testing |
| **GLUC-2025-002** | 15-Jan-2025 | 250 Units | Performance Verification |
| **GLUC-2025-003** | 20-Jan-2025 | 250 Units | Reliability / Life Cycle Testing |

### 5.2 Gravimetric Dose Accuracy Validation
Testing was conducted using a calibrated Mettler Toledo analytical balance (ID: GHS-BAL-09). The target delivery volume is 0.50 mL. Given the density of the glucapeptide ER formulation ($\rho = 1.042 g/mL$), the target mass is 0.521 g.

#### 5.2.1 Statistical Analysis of Dose Accuracy

| Statistic | Batch GLUC-2025-001 | Batch GLUC-2025-002 | Batch GLUC-2025-003 |
| :--- | :--- | :--- | :--- |
| **Mean Mass (g)** | 0.5208 | 0.5212 | 0.5210 |
| **Standard Deviation** | 0.0031 | 0.0028 | 0.0033 |
| **Min Value (g)** | 0.5144 | 0.5150 | 0.5139 |
| **Max Value (g)** | 0.5271 | 0.5268 | 0.5282 |
| **Ppk (LSL=0.47, USL=0.57)**| 2.45 | 2.61 | 2.38 |

**Result:** PASS. All batches met the requirement of $Ppk > 1.33$ for critical dose accuracy.

---

## 6.0 DETAILED TEST PROTOCOL: ACTIVATION FORCE (GHS-PROT-DEV-09)

### 6.1 Equipment
*   **Texture Analyzer:** Stable Micro Systems TA.XT Plus
*   **Load Cell:** 50 kg (Resolution 0.001N)
*   **Fixture:** Custom GHS-AI-V3 holder

### 6.2 Procedure
1.  Condition devices at $25^\circ C \pm 2^\circ C$ for 4 hours.
2.  Secure device vertically in the fixture.
3.  Set the analyzer probe to descend at a rate of 10 mm/s.
4.  Record the force required to depress the needle shield and trigger the internal spring mechanism.
5.  Requirement: Activation force must be between 10.0 N and 25.0 N.

### 6.3 Activation Force Results (N)

| Sample ID | Batch GLUC-2025-001 | Batch GLUC-2025-002 |
| :--- | :--- | :--- |
| **S1** | 14.2 | 13.8 |
| **S2** | 15.1 | 14.5 |
| **S3** | 13.9 | 15.2 |
| **S4** | 14.7 | 14.1 |
| **S5** | 16.0 | 14.9 |
| **Mean** | **14.78 N** | **14.50 N** |

---

## 7.0 ENVIRONMENTAL AND TRANSIT VALIDATION

To validate the design's robustness against real-world logistics, devices were subjected to ASTM D4169-22 Distribution Cycle 13 (Air and Motor Freight).

### 7.1 Temperature Cycling Protocol
Devices were cycled between $-20^\circ C$ and $+40^\circ C$ over a 72-hour period to simulate excursions during shipping.

| Phase | Temperature | Duration |
| :--- | :--- | :--- |
| **1** | $-20^\circ C$ | 12 Hours |
| **2** | $+5^\circ C$ | 24 Hours |
| **3** | $+40^\circ C$ | 12 Hours |
| **4** | $+25^\circ C$ | 24 Hours |

### 7.2 Post-Stress Functional Verification
After environmental stress, 30 units from Batch GLUC-2025-003 were tested for "Injection Time" (Target: < 10 seconds).

*   **Mean Injection Time:** 6.42 seconds
*   **Standard Deviation:** 0.31 seconds
*   **Failure Rate:** 0/30
*   **Conclusion:** The mechanical integrity of the power spring and viscous damping system is maintained post-environmental stress.

---

## 8.0 HUMAN FACTORS VALIDATION RESULTS SUMMARY

The Summative Study (HFV-2025-01) results for the 75 participants are summarized below.

### 8.1 Critical Task Success Rates

| Task | Success (No Assist) | Success (with IFU) | Use Error Count |
| :--- | :--- | :--- | :--- |
| **Remove Cap** | 100% | 0% | 0 |
| **Check Drug** | 98.7% | 1.3% | 0 |
| **Place on Skin** | 100% | 0% | 0 |
| **Activate Injection** | 97.3% | 2.7% | 0 |
| **Hold for 10s** | 96.0% | 4.0% | 3 (Close calls) |

### 8.2 Analysis of "Hold for 10s" Close Calls
Three participants in the "Hand Dexterity Impairment" group (Group D) removed the device at 8 or 9 seconds instead of 10.
*   **Root Cause:** Visual monitoring of the yellow bar was completed, but the internal "count to 10" was truncated.
*   **Risk Assessment:** Since the mechanical delivery is complete at 7 seconds, a 9-second hold still results in a 100% dose delivery. The risk is categorized as **Negligible**.

---

## 9.0 DESIGN VALIDATION CONCLUSION

The Design Validation for the Glucogen-XR Autoinjector (GHS-AI-V3) has been successfully completed. 
1.  **Dose Accuracy:** Met all gravimetric requirements across three registration batches.
2.  **Reliability:** $99.9\%$ reliability with $95\%$ confidence for successful activation and delivery.
3.  **Usability:** Summative HF studies confirmed that intended users can operate the device safely and effectively using the provided IFU.
4.  **Robustness:** The device maintains performance specifications following extreme transit and environmental conditions.

Based on these results, the device is validated for its intended use in the administration of glucapeptide extended-release.

---

## 10.0 APPROVALS

**Prepared By:**
*Digitally Signed: Robert J. Chen, Senior Regulatory Engineer, Google Health Sciences*
*Date: 24-Feb-2025*

**Reviewed By:**
*Digitally Signed: Sarah L. Sterling, PhD, Head of Device Development*
*Date: 26-Feb-2025*

**Approved By:**
*Digitally Signed: Marcus Aurelius, VP of Quality and Regulatory Affairs*
*Date: 01-Mar-2025*

---
**APPENDIX A: RAW DATA TABLES**
*(Extensive tables of individual unit data for GLUC-2025-001 through 003 are included in the subsequent 450 pages of this report.)*

**APPENDIX B: IFU USABILITY TRANSCRIPTS**
*(Verbatim user feedback from Summative Study HFV-2025-01.)*

[END OF SECTION]

---

# Human Factors Engineering

## Use-Related Risk Analysis

# MODULE 3.2.R: REGIONAL INFORMATION – DEVICE CONSTITUENT PART
## SECTION: HUMAN FACTORS ENGINEERING (HFE)
### SUBSECTION: 3.2.R.1.4 USE-RELATED RISK ANALYSIS (URRA)

---

**Document ID:** GHS-GLUC-XR-URRA-2025-001  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Drug Product:** Glucogen-XR (glucapeptide extended-release) Injection  
**Delivery System:** Single-Use Autoinjector (GHS-AI-V3)  
**Date of Report:** October 24, 2025  
**Regulatory Status:** IND XXX,XXX / NDA Pre-Submission  

---

### 1.0 INTRODUCTION AND SCOPE

The Use-Related Risk Analysis (URRA) for the Glucogen-XR (glucapeptide extended-release) delivery system serves as the foundational risk management document ensuring patient safety and efficacy during the administration of GLP-1 therapy. This analysis has been conducted in accordance with **ANSI/AAMI/IEC 62366-1:2015**, **ISO 14971:2019**, and the FDA Guidance for Industry, *"Applying Human Factors and Usability Engineering to Medical Devices"* (2016).

The URRA identifies potential use errors, their clinical consequences, and the risk control measures (mitigations) integrated into the design of the GHS-AI-V3 autoinjector. Given the extended-release nature of Glucogen-XR, precise dosing and subcutaneous delivery depth are critical to preventing both hypoglycemic events and suboptimal therapeutic outcomes.

#### 1.1 Scope of the Analysis
This URRA covers the entire "Use Scenario" lifecycle for Glucogen-XR, starting from the removal of the device from refrigerated storage (2°C to 8°C) to the final disposal in a sharps container. It includes:
*   **Target Population:** Adults with Type 2 Diabetes Mellitus (T2DM), including those with common comorbidities such as diabetic retinopathy and peripheral neuropathy.
*   **Environment of Use:** Home setting, workplace, and travel environments.
*   **Device Configuration:** Single-use, disposable, fixed-dose (2.5mg, 5.0mg, 10mg) autoinjector.

---

### 2.0 METHODOLOGY FOR RISK ASSESSMENT

Google Health Sciences utilizes a multidisciplinary approach to URRA, involving Clinical Affairs, Human Factors Engineering, Regulatory Affairs, and Device Engineering.

#### 2.1 Hazard Identification Process
Hazards were identified through:
1.  **Task Analysis:** Breaking down the use process into discrete steps.
2.  **PCA (Perception-Cognition-Action) Analysis:** Evaluating what the user sees, thinks, and does.
3.  **Historical Review:** Analysis of MAUDE database entries for similar GLP-1 autoinjectors.
4.  **Formative Evaluations:** Data from Pilot Study GLUC-2025-HF01.

#### 2.2 Severity Scoring Criteria
The clinical impact of use errors is categorized using the following 5-point scale:

| Severity Level | Description | Clinical Interpretation for Glucogen-XR |
| :--- | :--- | :--- |
| **5 (Catastrophic)** | Death or permanent impairment | Systemic anaphylaxis; extreme overdose leading to prolonged hypoglycemia. |
| **4 (Critical)** | Serious injury/impairment requiring medical intervention | Severe hyperglycemia due to missed dose; deep tissue infection. |
| **3 (Serious)** | Minor injury or temporary impairment | Significant bruising; localized allergic reaction; moderate gastrointestinal distress. |
| **2 (Minor)** | Slight inconvenience or temporary discomfort | Minimal bruising; slight delay in therapy. |
| **1 (Negligible)** | No injury | User confusion with no impact on dose delivery. |

---

### 3.0 COMPREHENSIVE USE-RELATED RISK ANALYSIS TABLE

The following table (Table 3.1) details the Task-Hazard-Mitigation relationship. This data is derived from Batch **GLUC-2025-QA01** through **GLUC-2025-QA15** testing.

#### Table 3.1: URRA Matrix for GHS-AI-V3 Autoinjector

| Task # | Use Step | Potential Use Error | Potential Clinical Hazard | Severity (S) | Mitigation Strategy (Design/Labeling) | Verification/Validation Method |
| :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| **1.1** | Remove device from refrigerator | User fails to check expiration date | Administration of degraded peptide; reduced efficacy | 3 | High-contrast font on label (12pt); EXP date in YYYY-MM-DD format | Summative HF Study (GHS-2025-SUM) |
| **1.2** | Allow device to reach room temp (30 min) | Injection of cold medication | Increased injection pain; user may withdraw needle early | 2 | Instruction Manual (IFU) Step 1; "Wait" icon on device packaging | Formative HF Study (GHS-2025-FOR) |
| **2.1** | Inspect medication in window | Fails to notice turbidity/particles | Injection of contaminated or aggregated peptide | 4 | Large, 360-degree viewing window; LED backlight feature (GHS-AI-V3 specific) | CQ/Incoming Inspection Prot. 882 |
| **3.1** | Prepare injection site | Failure to swab with alcohol | Injection site infection (Cellulitis) | 3 | IFU Step 2; Inclusion of alcohol swabs in the "Starter Kit" | Clinical Study GLUC-2025-PH3 |
| **4.1** | Remove Cap | User pulls cap at an angle | Needle damage or needle stick injury | 3 | Rigid Needle Shield (RNS) design; high pull-force resistance (15-25N) | Design Verification Report DVR-AI-2025 |
| **5.1** | Position device on skin | Incorrect angle (>90 degrees) | Intramuscular (IM) injection; altered PK/PD profile | 4 | Integrated skin-sensor collar; device will not fire unless flat | Force-to-Fire Test (Batch GLUC-2025-09) |
| **6.1** | Trigger Injection | User fails to press firmly | Incomplete dose delivery | 4 | Audible "Click 1" at start; Visible green plunger movement | HF Simulated Use Study |
| **6.2** | Hold device for 10 seconds | Premature removal from skin | Wet injection; under-dosing | 4 | Audible "Click 2" at end; 10-second countdown timer on digital variant | HF Summative Test GHS-SUM-02 |
| **7.1** | Disposal | Re-capping the device | Needle stick injury | 3 | Passive needle safety shield automatically locks over needle | ISO 23908:2011 Compliance Test |

---

### 4.0 CRITICAL TASK ANALYSIS AND MITIGATION (STEP-BY-STEP)

#### 4.1 Critical Task: Verification of Drug Integrity (Task 2.1)
*   **Description:** The user must confirm the liquid is clear and colorless.
*   **Risk:** Glucogen-XR is a complex peptide; aggregation (Batch GLUC-2025-AGG) can occur if exposed to temperatures >30°C.
*   **Step-by-Step Procedure for User:**
    1.  Hold the GHS-AI-V3 at eye level.
    2.  Rotate the device 180 degrees to view the entire fluid path.
    3.  Compare fluid to the "Clear" reference image in the IFU.
*   **HFE Mitigation:** The device utilizes a Google-patented "Prism-Window" that magnifies the fluid by 1.5x, allowing elderly patients with visual impairments (typical in T2DM) to identify particulates.

#### 4.2 Critical Task: Injection Site Stability (Task 5.1)
*   **Description:** Maintaining a 90-degree angle to the subcutaneous layer of the abdomen, thigh, or upper arm.
*   **Technical Specification:** 
    *   Target Depth: 5mm – 8mm.
    *   Needle Gauge: 29G Thin Wall.
*   **Calculations for Injection Pressure:**
    $P = \frac{F}{A}$
    Where $F$ (Spring Force) = 35N (at start of stroke) and $A$ (Plunger Area) = 15.2mm².
    Resultant pressure ensures viscosity of 10cP (Glucogen-XR formulation) is overcome within <10 seconds.

---

### 5.0 RELEVANT BATCH DATA AND MANUFACTURING CONTROLS

The URRA is supported by physical testing of clinical trial batches.

| Batch Number | Manufacture Date | Lot Size | Use-Error Testing Result | Failure Mode Identified |
| :--- | :--- | :--- | :--- | :---: |
| **GLUC-2025-QA01** | Jan 12, 2025 | 5,000 units | Pass | N/A |
| **GLUC-2025-QA02** | Feb 15, 2025 | 5,000 units | Pass | N/A |
| **GLUC-2025-DEV09** | Mar 02, 2025 | 500 units | **Fail** | Cap pull-force exceeded 40N (Redesign Triggered) |
| **GLUC-2025-QA03** | Apr 20, 2025 | 10,000 units | Pass | Optimized cap interface |

---

### 6.0 REGULATORY COMPLIANCE AND STANDARDS

This URRA complies with the following international standards:
1.  **FDA 21 CFR Part 820.30(f) and (g):** Design Validation and Human Factors.
2.  **ISO 11608-1:2022:** Needle-based injection systems for medical use.
3.  **HE75:2009 (R2018):** Human factors engineering - Design of medical devices.
4.  **ICH Q8(R2):** Pharmaceutical Development (Quality by Design).

---

### 7.0 CONCLUSION

Based on the Use-Related Risk Analysis, all identified hazards associated with the Glucogen-XR GHS-AI-V3 autoinjector have been mitigated to a level that is "As Low As Reasonably Practicable" (ALARP). Residual risks are primarily associated with user non-compliance (e.g., intentional misuse), which are addressed through comprehensive labeling and a robust patient training program provided via the Google Health Cloud Patient Portal.

**Approvals:**
*   *Head of HFE:* Dr. Sarah Jenkins, PhD (Date: Oct 25, 2025)
*   *VP of Regulatory Affairs:* Michael Chen, JD (Date: Oct 26, 2025)
*   *Quality Assurance Lead:* Elena Rodriguez (Date: Oct 26, 2025)

---
*End of Subsection 3.2.R.1.4*

---

## Formative Studies

# MODULE 3.2.R: REGIONAL INFORMATION – DEVICE CONSTITUENT PART
## SECTION: HUMAN FACTORS ENGINEERING (HFE) REPORT
### SUBSECTION 3.2.R.4.1: FORMATIVE USABILITY EVALUATIONS

---

#### 3.2.R.4.1.1 Overview and Purpose of Formative Studies
The development of the **Glucogen-XR (glucapeptide extended-release)** pre-filled autoinjector (AI) system by **Google Health Sciences** followed a robust Human Factors Engineering (HFE) lifecycle in accordance with **FDA Guidance: "Applying Human Factors and Usability Engineering to Medical Devices" (2016)** and **ANSI/AAMI/IEC 62366-1:2015**.

The Formative Study program was designed as an iterative process to identify potential use errors, evaluate user interface (UI) design concepts, and refine the Instructions for Use (IFU) and packaging. Unlike summative validation, these studies were intended to explore the boundaries of user interaction with the GHS-AI-01 device platform.

#### 3.2.R.4.1.2 Formative Study 1: Early Concept and Industrial Design (FS1-2023)
**Study Code:** GHS-HFE-FS1-2023
**Date of Execution:** March 15–22, 2023
**Location:** Google Health Sciences Usability Lab, South San Francisco, CA.
**Test Article:** Low-fidelity rapid prototypes (3D printed SLA) and early draft IFUs.

##### 4.1.2.1 Objectives
1.  Evaluate the ergonomic grip of three different barrel shapes (cylindrical, triangular-rounded, and oval).
2.  Assess user preference for cap removal force (Target: 10N–20N).
3.  Identify initial cognitive hurdles in the 3-step injection process: Prep, Inject, Dispose.

##### 4.1.2.2 Participant Demographics (N=15)
Participants were selected to represent the Type 2 Diabetes Mellitus (T2DM) population, including those with varying degrees of peripheral neuropathy and visual impairment.

| Participant ID | Age Group | User Group | Hand Function (1-5 Scale*) | Prior Biologic Experience |
| :--- | :--- | :--- | :--- | :--- |
| P01-FS1 | 45-55 | Lay User | 5 (Normal) | Naive |
| P02-FS1 | 65-75 | Lay User | 3 (Mild Neuropathy) | Experienced (Lantus) |
| P03-FS1 | 18-30 | HCP (Nurse) | 5 (Normal) | Professional |
| P04-FS1 | 70+ | Lay User | 2 (Moderate Arthritis) | Naive |
| P05-FS1 | 50-60 | Lay User | 4 (Slight Stiffness) | Experienced (Ozempic) |

*\*1 = Severe impairment, 5 = No impairment.*

##### 4.1.2.3 Methodology: Simulated Use Task Analysis
Participants were asked to perform "Think-Aloud" protocols while interacting with the prototypes. No actual drug was used; prototypes contained a spring-loaded mechanism to simulate the "click" of the Glucogen-XR delivery.

**Critical Task Observed: Cap Removal**
*   **Procedure:** User must grasp the device with the non-dominant hand and pull the green cap straight off with the dominant hand.
*   **Result:** 40% of users with arthritis (P04, P08, P12) attempted to "twist" the cap rather than pull, leading to potential internal needle shield (RNS) damage.

| Task ID | Task Description | Success Rate | Identified Use Error / Hazard |
| :--- | :--- | :--- | :--- |
| T1.1 | Identify Expiration Date | 93% | Small font size on early label |
| T1.2 | Remove Cap (Pull) | 60% | Twisting motion observed; risk of needle bend |
| T1.3 | Positioning on Thigh | 100% | Correct placement achieved |
| T1.4 | Activation (Push-on-Skin) | 86% | Premature lifting before 10s count |

---

#### 3.2.R.4.1.3 Formative Study 2: Iterative UI and IFU Optimization (FS2-2024)
**Study Code:** GHS-HFE-FS2-2024
**Batch Number (Device):** GLUC-2025-DEV-001
**Batch Number (Drug Component - Placebo):** GLUC-2025-PBO-01
**Date of Execution:** January 10–20, 2024

Following the findings of FS1, Google Health Sciences redesigned the device barrel to include a "flat-side" to prevent rolling and updated the IFU to include a large "DO NOT TWIST" icon.

##### 4.1.3.1 Technical Specifications of the GHS-AI-01 Device (Formative 2 Version)
*   **Needle Gauge:** 29G Thin Wall
*   **Injection Volume:** 0.5 mL
*   **Viscosity Range:** 2.5 - 5.0 cP (simulated with 5% CMC solution)
*   **Activation Force:** 12.5 N ± 2.5 N
*   **Extended-Release Window:** Simulated 10-second hold time.

##### 4.1.3.2 Protocol for Knowledge Task Evaluation
Knowledge tasks are critical for Glucogen-XR due to the storage requirements (Refrigerated 2°C–8°C).

**Protocol Step-by-Step:**
1.  **Stage 1: Unboxing.** Participant is handed the Glucogen-XR carton as received from a pharmacy.
2.  **Stage 2: Storage Check.** Participant is asked: "Where would you store this, and for how long can it stay out of the fridge?"
3.  **Stage 3: Preparation.** Participant must verify the liquid window.
4.  **Stage 4: Simulated Injection.** Use of a "Ballistics Gel" pad (60 Shore A hardness) to simulate human tissue.
5.  **Stage 5: Post-Injection Interview.** Evaluation of the "Final Click" and "Yellow Plunger" visual cues.

##### 4.1.3.3 Data Results: FS2 Error Analysis
The following table details the Root Cause Analysis (RCA) for observed errors during FS2.

| Participant | Error Description | Root Cause | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| P09-FS2 | Failed to check window for clarity. | Font size of instruction too small. | Increase font to 12pt; add "Check Liquid" icon. |
| P14-FS2 | Lifted device after 3 seconds. | Auditory click was too quiet (ambient noise). | Increase spring tension for louder "End of Dose" click. |
| P22-FS2 | Attempted to re-cap needle. | Fear of needle exposure. | Enhance IFU section on immediate sharps disposal. |

**Statistical Analysis of Task Completion Time (TCT):**
*   **Mean TCT (Pre-training):** 142 seconds
*   **Mean TCT (Post-training):** 88 seconds
*   **Standard Deviation:** 14.2s
*   **95% Confidence Interval:** [82.1, 93.9]

---

#### 3.2.R.4.1.4 Formative Study 3: High-Fidelity Pre-Summative (FS3-2024)
**Study Code:** GHS-HFE-FS3-2024
**Batch Number:** GLUC-2025-VAL-004
**Objective:** Final "dress rehearsal" before the Human Factors Validation (Summative) Study.

##### 4.1.4.1 Test Environment and Materials
The study was conducted in a simulated home environment (kitchen/bathroom setup) to maximize ecological validity. 
*   **Lighting:** 500 lux (standard indoor).
*   **Distractions:** Simulated television noise (65 dB).
*   **Materials:** Glucogen-XR 1.0mg Autoinjector (Placebo), Alcohol Swabs, Sharps Container, Printed Quick Reference Guide (QRG).

##### 4.1.4.2 Use Failure Mode and Effects Analysis (uFMEA) Correlation
During FS3, Google Health Sciences mapped observed behaviors back to the uFMEA (Document ID: GHS-RISK-772).

| Hazard ID | User Action | Clinical Impact | Severity | FS3 Occurrence |
| :--- | :--- | :--- | :--- | :--- |
| H-001 | Accidental Trigger | Needle stick injury; Loss of dose | Moderate | 0/45 |
| H-005 | Incomplete Insertion | Subcutaneous dose deposited in intradermal layer | High | 1/45 |
| H-009 | Failure to Prime | N/A (Device is pre-primed) | Low | 0/45 |

**Calculation of Residual Risk:**
The RPN (Risk Priority Number) for "Premature Withdrawal" was reduced from 12 to 4 following the inclusion of the **Yellow Window Indicator** which provides 100% visual confirmation of dose delivery.

$$RPN = S \times O \times D$$
*Where S = Severity (4), O = Occurrence (1), D = Detectability (1).*

#### 3.2.R.4.1.5 Conclusion of Formative Phase
The iterative formative evaluations (FS1, FS2, and FS3) for **Glucogen-XR** demonstrated that the GHS-AI-01 device is intuitive for the target T2DM population. The primary design changes resulting from these studies include:
1.  **Grip Texture:** Added micro-ribbing to the cap to assist users with reduced grip strength (Batch GLUC-2025-GEN2).
2.  **Color Coding:** Transitioned the safety guard from clear to bright orange to distinguish it from the device body.
3.  **Instructional Clarity:** Simplified the IFU from 12 steps to 5 primary steps with "Call-Out" boxes for critical safety information.

The device is deemed ready for **Human Factors Summative Validation (Section 3.2.R.4.2)**.

---
**References:**
1.  *FDA CDRH (2016) - Design Considerations for Devices that Deliver Drug-Constituent Parts.*
2.  *ISO 11608-1:2022 - Needle-based injection systems for medical use.*
3.  *Google Health Sciences Internal Standard Operating Procedure: GHS-SOP-HFE-01.*

---

## Validation Testing

# MODULE 3.2.R: DEVICE MASTER FILE (DMF)
## SECTION: HUMAN FACTORS ENGINEERING (HFE)
### SUBSECTION 3.2.R.4.5: VALIDATION TESTING (SUMMATIVE EVALUATION)

---

#### 3.2.R.4.5.1 Executive Summary of Summative Evaluation
This subsection details the Human Factors (HF) Summative Validation Testing for **Glucogen-XR (glucapeptide extended-release)**, an injectable GLP-1 receptor agonist delivered via the **GHS-Autopen-Gen2** (a single-use, pre-filled disposable autoinjector). This validation was conducted in accordance with FDA Guidance *“Applying Human Factors and Usability Engineering to Medical Devices” (2016)* and *ANSI/AAMI/IEC 62366-1:2015*.

The primary objective of this validation study (Protocol HF-SUM-2025-09) was to provide objective evidence that the Glucogen-XR drug-device combination product can be used by the intended users, in the intended environment, for the intended use, without resulting in unacceptable risk or serious harm.

---

#### 3.2.R.4.5.2 Regulatory Framework and Compliance Standards
The validation protocol was developed and executed following a rigorous interpretation of the following regulatory frameworks:

1.  **FDA 21 CFR 820.30(f):** Design Validation requirements for medical devices.
2.  **FDA Guidance (2016):** Applying Human Factors and Usability Engineering to Medical Devices.
3.  **FDA Guidance (2019):** Technical Considerations for Demonstrating Reliability of Self-Administrable Drug-Led Combination Products.
4.  **ISO 11608-1:2022:** Needle-based injection systems for medical use.
5.  **IEC 62366-1:2015+AMD1:2020:** Application of usability engineering to medical devices.
6.  **HE75:2009/(R)2013:** Human factors engineering - Design of medical devices.

---

#### 3.2.R.4.5.3 Methodology and Study Design

##### 3.2.R.4.5.3.1 Study Participants (User Populations)
Google Health Sciences (GHS) identified three distinct user groups (N=45 total) based on the intended use environment and the pathophysiology of Type 2 Diabetes Mellitus (T2DM).

**Table 1: Summative Validation Participant Matrix**
| User Group ID | Description | Sample Size (N) | Inclusion Criteria | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **UG1-NAIVE** | T2DM Patients (Treatment Naïve) | 15 | No prior use of GLP-1 or insulin autoinjectors. | Represents the highest risk for use errors due to lack of familiarity. |
| **UG2-EXP** | T2DM Patients (Experienced) | 15 | Current or former users of competitive GLP-1 devices. | Evaluates potential for "negative transfer" of habits from other devices. |
| **UG3-HCW** | Healthcare Professionals (HCPs) | 15 | RNs, Pharmacists, or MDs specializing in diabetes. | Evaluates the "Train-the-Trainer" model and clinical administration. |

##### 3.2.R.4.5.3.2 Testing Environments
Testing was conducted in simulated environments to replicate real-world conditions with high fidelity.

*   **Environment A (Home Simulation):** Low lighting (300 lux), distractions (simulated television noise at 60dB), and typical home furniture.
*   **Environment B (Clinical Simulation):** High lighting (750 lux), sterile surfaces, and time-pressure scenarios.

---

#### 3.2.R.4.5.4 Critical Task Identification (Use Risk Analysis)
Based on the Failure Mode and Effects Analysis (uFMEA) documented in Section 3.2.R.4.2, the following tasks were identified as **Critical Tasks (CT)**. A Critical Task is defined as a step where use error could lead to serious harm, under-dosing, or over-dosing.

**Table 2: Critical Task Mapping and Risk Assessment**
| Task ID | Task Description | Potential Use Error | Clinical Consequence |
| :--- | :--- | :--- | :--- |
| **CT-01** | Verification of Drug Name/Dose | Injection of wrong medication | Hypoglycemia/Hyperglycemia |
| **CT-02** | Inspection of Expiration Date | Use of degraded product | Reduced efficacy |
| **CT-03** | Cap Removal (Radial Force) | Premature activation/Needle stick | Device failure/Infection |
| **CT-04** | Site Selection & Cleaning | Injection into lipohypertrophy | Variable absorption |
| **CT-05** | Injection Pressure & Hold Time | Premature withdrawal | Partial dosing (Wet injection) |
| **CT-06** | Needle Safety Shield Check | Exposure to sharps | Needlestick injury/Biohazard |

---

#### 3.2.R.4.5.5 Validation Materials and Batch Traceability
All devices used in the summative validation were manufactured under cGMP conditions at the GHS South San Francisco facility (3000 Innovation Drive).

**Table 3: Traceability of Test Articles**
| Material ID | Batch Number | Formulation ID | Expiry Date | Quality Release Status |
| :--- | :--- | :--- | :--- | :--- |
| Glucogen-XR AI | **GLUC-2025-001** | GHS-77-ER | 12-DEC-2026 | PASSED |
| Glucogen-XR AI | **GLUC-2025-004** | GHS-77-ER | 15-JAN-2027 | PASSED |
| Training Device | **GLUC-2025-T01** | Placebo (Saline) | N/A | PASSED |
| IFU (Instruction) | **GHS-IFU-V4.2** | N/A | N/A | APPROVED |

---

#### 3.2.R.4.5.6 Step-by-Step Validation Protocol (Protocol #HF-SUM-2025-09)

**Step 1: Recruitment and Pre-Screening**
Participants are screened for visual acuity (Snellen chart 20/40), manual dexterity (Grooved Pegboard Test), and cognitive status.

**Step 2: Training (Decay Period)**
*   **Group A (Trained):** Receive a 5-minute training session using the GHS-IFU-V4.2 and a training device.
*   **Group B (Untrained):** Receive no training, provided only with the IFU packaged in the carton.
*   **Decay Period:** A minimum of 24 hours (for HCWs) and 48 hours (for Patients) is required between training and validation testing to evaluate memory retention.

**Step 3: Simulated Injection Sequence**
Participants are asked to perform a full injection sequence into a "Skin-Sim" injection pad (multi-layered synthetic tissue simulating subcutaneous fat).

**Step 4: Knowledge-Based Assessment (KBA)**
After the physical task, participants are interviewed regarding safety warnings that cannot be easily simulated (e.g., "What would you do if the medication is cloudy?").

---

#### 3.2.R.4.5.7 Success Criteria and Statistical Analysis
The study utilized a **Root Cause Analysis (RCA)** approach for all observed Errors, Close Calls, and Difficulties.

*   **Pass Criteria:** Zero (0) unmitigated use errors on Critical Tasks that lead to "Category 4" (Severe) harm.
*   **Success Metric:** 95% Confidence Interval (CI) lower bound analysis for task completion rates.
*   **Formula for Success Rate (S):**
    $$S = \frac{n - e}{n} \times 100$$
    *Where $n$ = total trials, $e$ = number of errors.*

---

#### 3.2.R.4.5.8 Results: Observed Data and Statistical Summary

**Table 4: Task Performance Data (Aggregated N=45)**
| Task ID | Description | Successes | Errors | Close Calls | Success Rate (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CT-01 | Check Label | 44 | 1 | 0 | 97.7% |
| CT-02 | Check Expiry | 43 | 2 | 0 | 95.5% |
| CT-03 | Cap Removal | 45 | 0 | 2 | 100% |
| CT-04 | Skin Pinch | 42 | 3 | 5 | 93.3% |
| **CT-05** | **Hold 10 Sec** | **45** | **0** | **1** | **100%** |

**Table 5: Root Cause Analysis (RCA) of Deviations**
| Participant ID | Task | Observation | Root Cause (RCA) | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| P-09 (UG1) | CT-01 | Failed to check label. | IFU font size for "Check Label" step. | Revised IFU font to 12pt Bold. |
| P-22 (UG2) | CT-04 | Did not clean site. | Habitual behavior from previous device. | Added "Prep Site" icon to device cap. |

---

#### 3.2.R.4.5.9 Conclusion of Validation
The HF Validation Testing for Glucogen-XR confirms that the **GHS-Autopen-Gen2** is safe and effective for its intended use. All observed "Close Calls" were analyzed and determined to be non-critical, with residual risks reduced to **As Low As Reasonably Practicable (ALARP)**. The integration of Google Cloud-based data analytics for tracking batch consistency (GLUC-2025-XXX series) ensures that the hardware performance aligns with the human factors requirements established during this summative study.

**Authorized Signatory:**
*Dr. Jane Doe, Senior Director of Regulatory Affairs, Google Health Sciences*
*Date: 24-MAY-2025*
*Document ID: GHS-HF-VAL-2025-FINAL*

---
**Footnotes:**
1. FDA-2016-D-0612; "Applying Human Factors and Usability Engineering to Medical Devices."
2. GHS Internal Standard SOP-HFE-400: "Selection of Participants for Validation."
3. Statistical calculations performed using GHS-BioStat Engine v3.1.2.

---

# Manufacturing Process

## Component Manufacturing

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.R: DEVICE CONSTITUENT PARTS
### SUBSECTION: 3.2.R.1.3 COMPONENT MANUFACTURING

---

#### 1.3.1 Introduction and Scope of Manufacturing Operations
This section details the manufacturing, fabrication, and assembly of the primary device constituent parts for the **Glucogen-XR (glucapeptide extended-release)** single-use autoinjector system. The device, designated internally as the **GHS-AI-V4 (Integrated Delivery System)**, is a spring-driven, mechanical delivery device integrated with a 1.0 mL Long Pre-filled Syringe (PFS) containing the GLP-1 receptor agonist drug product.

All manufacturing operations described herein are conducted in accordance with **21 CFR Part 820 (Quality System Regulation)** and **ISO 13485:2016** standards. The manufacturing process for the device components is subdivided into three primary phases:
1.  **Primary Primary Container Closure System (CCS) Fabrication**
2.  **Precision Injection Molding (PIM) of Mechanical Components**
3.  **Spring Fabrication and Surface Passivation**

Google Health Sciences (GHS) maintains ultimate responsibility for the Quality Management System (QMS), though specific component fabrication occurs at the GHS South San Francisco facility (Site ID: 3000-A) and certified sub-contractors.

---

#### 1.3.2 Manufacturing Site Information
The manufacturing of the GHS-AI-V4 components is executed across the following validated facilities:

| Component Category | Facility Name | Address | Responsibility |
| :--- | :--- | :--- | :--- |
| **Glass Syringe Barrel** | Schott Pharma AG | 123 Glass Way, Germany | Fabrication, Type I Borosilicate |
| **Plunger Stopper** | West Pharmaceutical | 530 Herman O. West Dr, PA | Elastomeric Component Molding |
| **Drive Spring** | GHS Precision Metal | 3005 Innovation Dr, CA | Coiling, Heat Treat, Passivation |
| **Main Housing/Cap** | GHS Plastics Div. | 3000 Innovation Dr, CA | Precision Injection Molding |
| **Final Assembly** | Google Health Sciences | 3000 Innovation Drive, CA | Drug-Device Integration |

---

#### 1.3.3 Precision Injection Molding (PIM) Protocols
The GHS-AI-V4 utilizes high-performance thermoplastic polymers to ensure structural integrity during the 14-day extended-release delivery profile.

##### 1.3.3.1 Material Specifications
The following materials are utilized for the structural components of the autoinjector:

| Component ID | Material Grade | Manufacturer | Performance Requirement |
| :--- | :--- | :--- | :--- |
| **AI-HOU-01** | Medical Grade Polycarbonate (PC) | Covestro Makrolon | Tensile Strength >60 MPa |
| **AI-SHL-02** | Polypropylene (PP) - Nucleated | LyondellBasell | Low Friction, Chemical Resist |
| **AI-BTN-03** | ABS (Acrylonitrile Butadiene Styrene) | SABIC Cycolac | Impact Resistance |

##### 1.3.3.2 Injection Molding Process Parameters (Protocol GHS-PIM-009)
The manufacturing of the Main Housing (**Batch GLUC-2025-PIM-001**) follows the validated cycle parameters:

1.  **Drying Phase**: Resin dried at 120°C for 4 hours (Dew point -40°C).
2.  **Melt Temperature**: Set at 285°C ± 5°C.
3.  **Injection Pressure**: 1400 Bar (Peak).
4.  **Hold Pressure**: 800 Bar for 4.5 seconds.
5.  **Cooling Time**: 18.5 seconds.
6.  **Mold Temperature**: 90°C (Stationary and Moving sides).

**Table 1.3.3-A: In-Process Quality Control (IPQC) for Injection Molding**
| Parameter | Method | Specification | Result (GLUC-2025-PIM-001) |
| :--- | :--- | :--- | :--- |
| **Critical Dimension A** | CMM (Hexagon) | 114.50 mm ± 0.05 | 114.52 mm (Pass) |
| **Flash Height** | Visual/Optical | < 0.02 mm | 0.008 mm (Pass) |
| **Part Weight** | Analytical Balance | 12.45g ± 0.10g | 12.46g (Pass) |
| **Gate Vestige** | Profile Projector | < 0.10 mm | 0.04 mm (Pass) |

---

#### 1.3.4 Drive Spring Fabrication (GHS-MET-SPRING-04)
The drive spring provides the mechanical force (measured in Newtons) required to overcome the viscosity of the Glucogen-XR extended-release formulation through a 27G Thin Wall needle.

##### 1.3.4.1 Metallurgy and Coiling
*   **Material**: Stainless Steel Wire, Type 302 (ASTM A313).
*   **Wire Diameter**: 1.20 mm ± 0.01 mm.
*   **Coiling Ratio**: Calculated to provide a constant force of 45N ± 3N at full compression.

**Calculations for Spring Rate ($k$):**
$$k = \frac{G \cdot d^4}{8 \cdot D^3 \cdot n}$$
*Where:*
*   $G$ = Shear Modulus ($79.3 \text{ GPa}$)
*   $d$ = Wire Diameter ($1.20 \text{ mm}$)
*   $D$ = Mean Coil Diameter ($8.50 \text{ mm}$)
*   $n$ = Number of Active Coils ($14$)

##### 1.3.4.2 Manufacturing Steps (Batch GLUC-2025-SPR-402)
1.  **Cold Coiling**: Automatic CNC Winder (Wafios).
2.  **Stress Relieving**: Heat treatment at 350°C for 30 minutes in a nitrogen-enriched atmosphere to prevent oxidation.
3.  **Passivation**: Nitric acid immersion per **ASTM A967** to ensure biocompatibility and corrosion resistance.
4.  **100% Load Testing**: Every spring in batch GLUC-2025-SPR-402 is tested at compressed height ($H_c = 22 \text{ mm}$).

---

#### 1.3.5 Primary Container Closure System (CCS) Manufacturing
The Glucogen-XR drug product is housed in a Type I Borosilicate glass syringe.

##### 1.3.5.1 Syringe Barrel Fabrication
*   **Glass Type**: USP Type I Borosilicate Glass (Schott Fiolax).
*   **Forming**: Vertical forming process followed by annealing in a Lehr oven at 560°C to eliminate internal stresses.
*   **Siliconization**: Controlled spraying of Dow Corning 360 Medical Fluid (12,500 cSt).

##### 1.3.5.2 Needle Integration
The 27G TW needle is staked into the barrel using a UV-cured adhesive (Loctite 4307). 
*   **Pull Force Requirement**: > 50 N.
*   **Testing Result (Batch GLUC-2025-SYR-99)**: Mean 74.2 N (Min 68 N, Max 81 N).

---

#### 1.3.6 Component Cleaning and Bioburden Control
All components undergo a validated cleaning cycle (Protocol GHS-CLN-12) prior to transfer to the ISO 7 (Class 10,000) cleanroom for final assembly.

**Table 1.3.6-A: Bioburden and Endotoxin Limits**
| Component | Cleaning Agent | Endotoxin Limit | Bioburden Limit |
| :--- | :--- | :--- | :--- |
| **Syringe Barrel** | WFI (Water for Inj) | < 0.25 EU/mL | < 10 CFU/unit |
| **Plunger Stopper** | Gamma Irradiation | < 2.15 EU/device | < 5 CFU/unit |
| **Plastic Housing** | Ionized Air / UV | N/A (Non-contact) | < 100 CFU/unit |

---

#### 1.3.7 Master Batch Record (MBR) Summary: GLUC-2025-COM-INT
The following table summarizes the reconciliation of all sub-components for a representative manufacturing run of 50,000 Glucogen-XR device sub-assemblies.

| Step | Operation Description | Equipment ID | Status |
| :--- | :--- | :--- | :--- |
| 1.1 | Resin Dehumidification | DRY-09 | Complete |
| 1.2 | Injection Molding (Housing) | IMM-22 | Complete |
| 1.3 | Spring Compression Testing | LST-04 | Complete |
| 1.4 | Visual Inspection (Automated) | AVI-101 | 99.8% Yield |
| 1.5 | Sub-assembly (Power Pack) | ASSM-02 | Complete |
| 1.6 | Packaging to Sterile Tubs | PKG-01 | Complete |

---

#### 1.3.8 Regulatory Compliance and Standards
The manufacturing processes described comply with:
*   **ISO 11608-1:2022**: Needle-based injection systems for medical use.
*   **ISO 10993-1**: Biological evaluation of medical devices.
*   **USP <790>**: Visible Particulates in Injections.
*   **USP <1724>**: Semi-solid Drug Products - Performance Tests.

#### 1.3.9 Statistical Process Control (SPC)
GHS employs $C_{pk}$ (Process Capability Index) monitoring for all critical-to-quality (CTQ) dimensions. For the injection molding of the internal trigger mechanism (Component AI-TRG-05), the $C_{pk}$ must exceed 1.33.

**Current Performance (Batch GLUC-2025-PIM-001):**
*   **Mean**: 5.402 mm
*   **Std Dev**: 0.004 mm
*   **USL**: 5.420 mm
*   **LSL**: 5.380 mm
*   **Calculated $C_{pk}$**: 1.50 (Exceeds requirement)

---
*End of Subsection 3.2.R.1.3*

---

## Assembly Process

# MODULE 3.2.R: DEVICE CONSTITUENT PART – MANUFACTURING PROCESS
## SECTION 3.2.R.1.3: ASSEMBLY PROCESS FOR GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE) PRE-FILLED SYRINGE AND AUTO-INJECTOR SYSTEM

---

### 1.0 INTRODUCTION AND SCOPE
This section provides a comprehensive description of the automated assembly process for the Glucogen-XR (glucapeptide extended-release) 2.0 mg/0.5 mL subcutaneous injection system. The device assembly is conducted at Google Health Sciences’ (GHS) Advanced Therapeutic Manufacturing Center (ATMC) in South San Francisco, CA. 

The assembly process integrates the Primary Container Closure System (PCCS)—a 1.0 mL long Type I glass syringe pre-filled with the GLP-1 receptor agonist drug product—into the GHS-Auto-Inject-04 proprietary mechanical delivery system. This process is governed by Current Good Manufacturing Practices (cGMP) as outlined in 21 CFR Part 4, 21 CFR Part 210/211, and 21 CFR Part 820.

#### 1.1 Regulatory Standards and Guidance
The assembly process design, validation, and control strategy have been developed in accordance with the following international standards and regulatory guidances:
*   **FDA Guidance:** *Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013)*.
*   **ISO 11608-1:2022:** *Needle-based injection systems for medical use — Requirements and test methods*.
*   **ISO 13485:2016:** *Medical devices — Quality management systems — Requirements for regulatory purposes*.
*   **ICH Q10:** *Pharmaceutical Quality System*.
*   **USP <1>:** *Injections and Implanted Drug Products*.

---

### 2.0 COMPONENT RECEIPT AND SPECIFICATIONS
The assembly process utilizes components sourced from validated vendors, verified against Google Health Sciences Material Specification (GHS-MS) documents.

#### Table 2.1: Critical Assembly Components and Identifiers
| Component Name | Part Number | Material of Construction | Quality Specification |
| :--- | :--- | :--- | :--- |
| Pre-filled Syringe (PFS) | GHS-PFS-10L | Type I Borosilicate Glass (USP <660>) | GHS-SPEC-0982 |
| Plunger Stopper | GHS-STP-13F | Bromobutyl Rubber (FluroTec® coated) | USP <381> |
| Auto-Injector Front Sub-Assembly | GHS-AI-FSA-04 | Polycarbonate / Stainless Steel | GHS-SPEC-1102 |
| Auto-Injector Rear Sub-Assembly | GHS-AI-RSA-04 | ABS / Power-Spring (Type 302 SS) | GHS-SPEC-1103 |
| Needle Shield / Cap | GHS-NSC-02 | Synthetic Isoprene | GHS-SPEC-0441 |

---

### 3.0 DETAILED ASSEMBLY PROCESS DESCRIPTION
The assembly of the Glucogen-XR Auto-Injector is performed on the High-Speed Automated Assembly Line (HSAAL-01), located in Cleanroom Suite CR-4 (ISO 7 / Class 10,000).

#### 3.1 Step 1: Component De-nesting and Induction
Pre-filled syringes (PFS) containing Glucogen-XR drug product (Batch Series GLUC-2025-XXX) are staged in a temperature-controlled environment (2°C – 8°C).

*   **Procedure 3.1.1:** Syringes are transferred from the tub/nest secondary packaging onto the induction conveyor using a vacuum-pick-and-place robotic arm (Fanuc M-1iA).
*   **In-Process Control (IPC-01):** 100% visual inspection via high-resolution Cognex sensors to ensure flange integrity and plunger position (Z-dimension).

#### 3.2 Step 2: Front Sub-Assembly (FSA) Preparation
The Front Sub-Assembly (FSA) contains the needle guard and the syringe carrier.
1.  The FSA components are fed via vibratory bowls (Equipment ID: VB-992).
2.  A 100% orientation check is performed using IR-sensors to ensure the needle guard is in the "locked-out" state prior to syringe insertion.

#### 3.3 Step 3: Syringe Insertion and Precision Seating
This is a Critical Process Parameter (CPP). The PFS is inserted into the FSA.

*   **Process Parameter (PP-01):** Insertion Force.
*   **Specification:** 12.0 N ± 2.0 N.
*   **Rationale:** Excessive force may cause micro-fractures in the glass flange (Type I glass fragility), while insufficient force results in incomplete seating, leading to "Dry-Fire" or failure to reach depth.

#### 3.4 Step 4: Rear Sub-Assembly (RSA) Integration
The RSA contains the drive spring (stored energy component).
1.  The RSA is coupled with the FSA/PFS sub-unit.
2.  **The Snap-Fit Protocol:** A dual-actuator press applies a linear force of 45.0 N to engage the internal locking lugs.
3.  **Acoustic Verification:** An ultrasonic sensor (Keyence US-10) detects the specific decibel frequency (range 65-72 dB) of the "click" to verify 100% mechanical engagement.

---

### 4.0 MANUFACTURING BATCH RECORDS AND DATA TABLES
The following data represents a validation run for Batch GLUC-2025-001-A.

#### Table 4.1: Critical Process Parameter (CPP) Monitoring Data
| Time Interval | Station ID | Parameter | Measured Value | Acceptance Limit | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 08:00 | S3 (Insertion) | Force (N) | 12.14 N | 10.0 - 14.0 N | Pass |
| 09:00 | S3 (Insertion) | Force (N) | 12.45 N | 10.0 - 14.0 N | Pass |
| 10:00 | S4 (Coupling) | Snap-Fit Depth | 44.22 mm | 44.1 - 44.4 mm | Pass |
| 11:00 | S5 (Torque) | Cap Torque | 18.5 Ncm | 15.0 - 22.0 Ncm | Pass |

#### Table 4.2: Theoretical vs. Actual Yield (Batch GLUC-2025-001-A)
| Stage | Input (Units) | Output (Units) | Rejects | Yield (%) |
| :--- | :--- | :--- | :--- | :--- |
| Induction | 10,000 | 9,998 | 2 (Glass chip) | 99.98% |
| Assembly | 9,998 | 9,985 | 13 (Misalignment) | 99.87% |
| Final Inspection| 9,985 | 9,980 | 5 (Label skew) | 99.95% |
| **Total Process** | **10,000** | **9,980** | **20** | **99.80%** |

---

### 5.0 IN-PROCESS QUALITY CONTROL (IPQC) PROTOCOLS

#### 5.1 Protocol GHS-IPQC-33: Break-Loose and Glide Force (BLGF) Testing
During assembly, 10 units are sampled every 2 hours to ensure the drug product’s extended-release viscosity has not impacted the mechanical delivery profile.

*   **Method:** Instron Universal Tester (Model 5944).
*   **Calculations:**
    *   $F_{BL}$ (Break-loose Force) = Max peak force required to initiate plunger movement.
    *   $F_{G}$ (Mean Glide Force) = $\frac{1}{d} \int_{0}^{d} F(x) dx$, where $d$ is the displacement of 18mm.
*   **Specification:** $F_{BL} \leq 15 N$; $F_{G} \leq 10 N$.

#### 5.2 Protocol GHS-IPQC-34: Vision System Calibration
The assembly line utilizes a 360-degree vision inspection system (GHS-Vision-Gen4) powered by Google Cloud AI-Vision models. 

**Calibration Procedure:**
1.  Introduce "Golden Seed" defects (labeled GHS-DEF-001 to GHS-DEF-010) into the line.
2.  Defects include: cracked flange, missing needle shield, under-filled syringe (<0.48 mL), and malformed plunger.
3.  **Acceptance Criteria:** 100% detection rate ($p < 0.0001$).

---

### 6.0 ENVIRONMENTAL CONTROLS AND BIOBURDEN MANAGEMENT
Assembly occurs in a Controlled Non-Classified (CNC) environment adjacent to the ISO 7 fill-finish suite.

*   **Temperature:** 20°C ± 2°C
*   **Relative Humidity:** 45% ± 5%
*   **Air Changes:** Minimum 20 per hour.
*   **Particulate Monitoring:** Continuous monitoring per ISO 14644-1.

---

### 7.0 PACKAGING AND LABELING
Following assembly, the Auto-Injectors proceed to the labeling module (LAB-01).

1.  **Label Application:** Pressure-sensitive labels containing the Batch Number (GLUC-2025-XXX) and Expiry Date are applied.
2.  **OCR Verification:** A Cognex In-Sight 7000 camera performs Optical Character Recognition (OCR) to confirm label accuracy against the Manufacturing Execution System (MES) database.
3.  **Secondary Packaging:** Units are placed into individual cartons with the Instructions for Use (IFU) and then into 5-count physician sample packs or 30-count commercial packs.

---

### 8.0 REFERENCES
1.  *Google Health Sciences Quality Manual (GHS-QM-2024)*.
2.  *Validation Report GHS-VAL-7721: Performance Qualification of Auto-Injector Assembly Line*.
3.  *USP <1207> Package Integrity Evaluation—Sterile Products*.
4.  *ISO 11608-5:2022: Automated functions of needle-based injection systems*.

---
**END OF SECTION**
**Approved By:** 
*Director of Regulatory Affairs, Google Health Sciences*
*Date: 22-Oct-2024*
*Document ID: GHS-XR-M3-DEV-ASM-001*

---

## Sterilization

# MODULE 3: QUALITY (DEVICE DRUG MASTER FILE)
## SECTION 3.2.P.3.3: MANUFACTURING PROCESS AND PROCESS CONTROLS
### SUBSECTION: STERILIZATION (GLUCOGEN-XR DELIVERY SYSTEM)

---

**Document ID:** GHS-DMF-M3-ST-001  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Facility:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Product:** Glucogen-XR (glucapeptide extended-release) Injection System  
**Sterilization Modality:** Terminal Gamma Irradiation (ISO 11137-1/2) and Aseptic Fill/Finish (ISO 13408-1)  

---

#### 3.3.1 Introduction and Scope
The sterilization strategy for Glucogen-XR (glucapeptide extended-release) follows a dual-pathway approach necessitated by the complex nature of the delivery system, which comprises a biological drug substance (a GLP-1 receptor agonist peptide expressed in CHO-K1 GS knockout derivative GHS-CHO-001) and a high-precision electromechanical autoinjector. 

Given the thermosensitivity of the Glucogen-XR peptide and the susceptibility of the onboard Google-proprietary "G-Silicon" microcircuitry to electron-beam radiation, terminal sterilization via Gamma Irradiation (Cobalt-60) is utilized for the primary container closure system (unfilled), while the drug substance undergoes redundant 0.22 μm sterile filtration and aseptic assembly within a Grade A (ISO 5) environment.

#### 3.3.2 Regulatory Compliance Standards
All sterilization activities are conducted in strict accordance with the following regulatory frameworks and international standards:

1.  **USP <71>**: Sterility Tests.
2.  **USP <85>**: Bacterial Endotoxins Test.
3.  **ISO 11137-1:2006/Amd 1:2013**: Sterilization of health care products — Radiation — Part 1: Requirements for development, validation and routine control of a sterilization process for medical devices.
4.  **ISO 11137-2:2013**: Sterilization of health care products — Radiation — Part 2: Establishing the sterilization dose.
5.  **ISO 13408-1:2008**: Aseptic processing of health care products — Part 1: General requirements.
6.  **FDA Guidance for Industry**: Submission Documentation for Sterilization Process Validation in Applications for Human and Veterinary Drug Products (2016).
7.  **ICH Q9**: Quality Risk Management.

---

#### 3.3.3 Component Sterilization (Terminal Gamma Irradiation)

The primary packaging components (Borosilicate Type 1 Glass Syringes, Elastomeric Plungers, and Rigid Needle Shields) are subjected to Gamma Irradiation at the Google Health Sciences Sterilization Suite (Bldg 4, GHS-ST-04).

##### 3.3.3.1 Dose Establishment (VDmax25 Methodology)
The verification dose was established using the ISO 11137-2 Method VDmax25. This method confirms that a sterilization dose of 25 kGy achieves a Sterility Assurance Level (SAL) of $10^{-6}$.

**Table 1: Bioburden Characterization for Batch GLUC-2025-001 through GLUC-2025-005**

| Batch Number | Component Type | Sample Size (n) | Bioburden (CFU/Unit) | Recovery Factor | Adjusted Bioburden |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | Syringe Barrel | 10 | 4.2 | 0.85 | 4.94 |
| GLUC-2025-002 | Syringe Barrel | 10 | 3.8 | 0.85 | 4.47 |
| GLUC-2025-003 | Syringe Barrel | 10 | 5.1 | 0.85 | 6.00 |
| GLUC-2025-004 | Plunger Stopper | 10 | 1.2 | 0.78 | 1.54 |
| GLUC-2025-005 | Plunger Stopper | 10 | 0.9 | 0.78 | 1.15 |

**Calculation for Verification Dose:**
Based on the Average Bioburden ($\bar{x} = 3.62$ CFU), and referring to ISO 11137-2, Table 9, the verification dose ($D^*$) is calculated as follows:
$$D^* = 8.2 \text{ kGy} \pm 10\%$$
The sterilization dose established for routine production is $D_{ster} = 25.0 \text{ kGy}$.

##### 3.3.3.2 Dose Mapping and Distribution
Dose mapping was performed on the maximum and minimum density configurations of the Glucogen-XR secondary shipping cartons (Model GHS-CART-V4).

**Table 2: Dose Mapping Results (KGy)**

| Position ID | Minimum Dose Recorded ($D_{min}$) | Maximum Dose Recorded ($D_{max}$) | $D_{max}/D_{min}$ Ratio |
| :--- | :--- | :--- | :--- |
| GHS-POS-01 (Internal Corner) | 26.4 | 28.1 | 1.06 |
| GHS-POS-12 (Center Core) | 25.2 | 26.8 | 1.06 |
| GHS-POS-24 (Top Surface) | 31.4 | 33.2 | 1.05 |
| **Acceptance Criteria** | **> 25.0 kGy** | **< 40.0 kGy** | **< 1.5** |

---

#### 3.3.4 Aseptic Filtration and Filling (Drug Substance)

The Glucogen-XR drug substance (glucapeptide ER) is a viscous aqueous suspension. Sterilization is achieved via redundant filtration through two 0.22 μm polyethersulfone (PES) membranes in series.

##### 3.3.4.1 Filtration Protocol (Procedure GHS-SOP-4492)
1. **Pre-Filtration Integrity Test (PIT):** Using the Forward Flow method (Palltronic Flowstar IV). Pressure set to 3450 mbar.
2. **First Stage Filtration:** GHS-CHO-001 derived peptide bulk is pumped via peristaltic pump (Watson-Marlow 630) at a constant flux of 150 $L/m^2/h$.
3. **Second Stage Filtration:** Redundant 0.22 μm filter (Sartorius Sartopore 2 XLG).
4. **Post-Filtration Integrity Test (PUPSIT):** Performed post-use/pre-sterilization to ensure membrane integrity during the duration of the batch run (Batch GLUC-2025-XXX).

**Table 3: Filter Integrity Testing Data for Clinical Batch GLUC-2025-010**

| Filter Serial No. | Test Type | Medium | Specification | Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| PES-2025-99A | Bubble Point | WFI | $\ge 3200$ mbar | 3455 mbar | Pass |
| PES-2025-99B | Diffusion Flow | WFI | $\le 12$ mL/min | 8.4 mL/min | Pass |

##### 3.3.4.2 Environmental Monitoring (EM) During Aseptic Fill
The filling operation occurs within a Restricted Access Barrier System (RABS).

*   **Non-Viable Particulates:** Continuous monitoring using Lasair III sensors. Limit: $\le 3520$ particles/$m^3$ at 0.5 μm.
*   **Viable Air Sampling:** Settle plates (90mm TSA) and Active Air Samples (1000L).
*   **Surface Monitoring:** Contact plates (RODAC) on 14 critical glove-port and conveyor locations.

---

#### 3.3.5 Sterilization of the Glucogen-XR Device (Electronic Components)

The Glucogen-XR Autoinjector contains sensitive Google-proprietary ML-optimized sensors. Conventional Gamma radiation exceeds the ionization threshold of the G-Silicon chips. Therefore, the device housing and mechanical drivetrain are sterilized via **Ethylene Oxide (EtO)**.

##### 3.3.5.1 Ethylene Oxide Cycle Parameters (Cycle GHS-EtO-V9)
*   **Preconditioning:** 12 hours at $45^\circ\text{C} \pm 5^\circ\text{C}$, 60% Relative Humidity.
*   **Gas Concentration:** $600 \text{ mg/L} \pm 50 \text{ mg/L}$ (100% EtO).
*   **Exposure Time:** 180 minutes.
*   **Aeration:** 48 hours in a forced-air chamber at $40^\circ\text{C}$ to reduce residual EtO/ECH.

**Table 4: EtO Residual Testing (ISO 10993-7) - Batch GLUC-2025-015**

| Analyte | Limit (mg/device) | Result (mg/device) | Status |
| :--- | :--- | :--- | :--- |
| Ethylene Oxide (EtO) | < 4.0 | 0.12 | Pass |
| Ethylene Chlorohydrin (ECH) | < 9.0 | 0.04 | Pass |

---

#### 3.3.6 Process Simulation (Media Fills)
To validate the aseptic assembly of the Glucogen-XR system, semi-annual media fills are conducted.

**Protocol GHS-VAL-772:**
*   **Media:** Tryptic Soy Broth (TSB).
*   **Units Filled:** 15,000 units.
*   **Duration:** 24 hours (simulating longest commercial batch run).
*   **Interventions:** Includes 45 planned interventions (e.g., clearing jams, glove changes) and 5 unplanned interventions.
*   **Incubation:** 7 days at $20-25^\circ\text{C}$ followed by 7 days at $30-35^\circ\text{C}$.
*   **Acceptance Criteria:** Zero growth ($\text{Growth} < 0.1\%$ with 95% confidence).

---

#### 3.3.7 Conclusion
The sterilization program for Glucogen-XR, managed by Google Health Sciences, ensures a cumulative SAL of $10^{-6}$ for the integrated device-drug product. The combination of validated Gamma irradiation for primary packaging, redundant sterile filtration for the glucapeptide, and controlled EtO sterilization for the electromechanical sub-assemblies provides a robust framework for patient safety and product stability.

---
**Approval:**
*Digital Signature: Dr. A. Turing, Head of Regulatory Affairs, Google Cloud Life Sciences*  
*Date: 14-Oct-2025*  
*Reference: GHS-QS-2025-9901*

---

# Quality Control

## Inspection and Testing

# MODULE 3.2.R: DEVICE DRUG MASTER FILE (DMF)
## SECTION 3.2.R.1: QUALITY CONTROL - INSPECTION AND TESTING
**Product:** Glucogen-XR (glucapeptide extended-release) Injection  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Document ID:** GHS-GLUC-QC-3.2.R  
**Revision:** 4.02 (Final Submission Build)  
**Date:** October 24, 2024  

---

### 1.0 SCOPE AND OBJECTIVE
This section delineates the comprehensive inspection and testing framework for the Glucogen-XR Integrated Delivery System (IDS). As a GLP-1 receptor agonist delivered via an electromechanical extended-release autoinjector, the device components must adhere to stringent Quality Control (QC) protocols to ensure patient safety, dose accuracy, and subcutaneous delivery reliability. 

The inspection strategy follows a risk-based approach aligned with **ISO 13485:2016**, **21 CFR Part 820**, and **ICH Q6B**. Testing is categorized into Incoming Quality Control (IQC), In-Process Quality Control (IPQC), and Final Release Testing (FRT).

---

### 2.0 REGULATORY COMPLIANCE AND STANDARDS REFERENCE
The inspection protocols for Glucogen-XR are governed by the following international standards and regulatory guidances:

| Standard ID | Title / Description | Relevance to Glucogen-XR |
|:---|:---|:---|
| **ISO 11608-1:2022** | Needle-based injection systems for medical use — Part 1 | Requirements for dose accuracy and functional reliability. |
| **ISO 2859-1:1999** | Sampling procedures for inspection by attributes | Defines AQL (Acceptable Quality Levels) for device components. |
| **USP <381>** | Elastomeric Components in Injection Drug Products | Testing for plunger stoppers and seals. |
| **USP <790>** | Visible Particulates in Injections | Inspection criteria for the pre-filled syringe (PFS) sub-assembly. |
| **21 CFR 820.30** | Design Controls | Verification that device output meets input requirements. |
| **ICH Q1A(R2)** | Stability Testing of New Drug Substances and Products | Evaluation of device performance over shelf-life. |

---

### 3.0 INCOMING QUALITY CONTROL (IQC): COMPONENT SPECIFICATIONS
Google Health Sciences (GHS) utilizes a Tier 1 supplier network for the injection-molded components of the Glucogen-XR device. All incoming lots are subjected to the following inspection battery.

#### 3.1 Mechanical and Dimensional Inspection
Dimensional integrity is verified using High-Resolution Coordinate Measuring Machines (CMM) and Multi-Sensor Vision Systems (Keyence VR-6000).

**Table 3.1: Critical Component Dimensional Specifications**

| Component ID | Parameter | Specification (mm) | Tolerance | Tooling ID | AQL |
|:---|:---|:---|:---|:---|:---|
| GHS-DRV-01 | Drive Screw Pitch | 0.750 | ± 0.005 | CMM-GHS-09 | 0.40 |
| GHS-HSG-04 | Outer Housing Length | 142.50 | ± 0.15 | Caliper-GHS-22 | 0.65 |
| GHS-PLG-09 | Plunger Head Diameter | 4.65 | ± 0.02 | Micrometer-GHS-1 | 0.25 |
| GHS-SPR-12 | Spring Constant (k) | 2.45 N/mm | ± 0.10 | Instron-5942 | 0.40 |

#### 3.2 Material Verification (FTIR)
To ensure no polymer substitution occurred at the molder (e.g., using non-medical grade Polycarbonate), Fourier Transform Infrared Spectroscopy (FTIR) is performed on every batch.

*   **Protocol:** SOP-QC-MAT-001
*   **Acceptance Criteria:** Correlation coefficient > 0.98 compared to GHS Reference Standard (Ref: GHS-STD-PC-2022).

---

### 4.0 IN-PROCESS QUALITY CONTROL (IPQC)
During the assembly of the Glucogen-XR device at the South San Francisco facility (Building 3), real-time automated inspections are conducted at critical assembly stations.

#### 4.1 Station 12: Glass Syringe Nesting and Integrity
The primary container closure system (PCCS) consists of a 1.0 mL Type I glass syringe pre-filled with the glucapeptide extended-release formulation.

**Procedure IPQC-4.1.A: Vacuum Leak Detection**
1.  **Batch Reference:** GLUC-2025-001 through GLUC-2025-999.
2.  **Equipment:** Pfeiffer Vacuum Leak Detector (Model ASM 340).
3.  **Step:** Following plunger insertion, the sub-assembly is placed in a vacuum chamber.
4.  **Requirement:** Leak rate must be < $10^{-6}$ mbar·L/s.
5.  **Failure Action:** Immediate rejection and investigation of the plunger-to-barrel interface.

#### 4.2 Station 18: Drive Train Torque Testing
The Glucogen-XR utilizes a micro-motor to control the extended-release profile. The torque required to initiate movement of the drive screw is a Critical Quality Attribute (CQA).

**Table 4.2: Drive Train Torque In-Process Data (Example Batch GLUC-2025-012)**

| Sub-Assembly ID | Test Sequence | Torque (mNm) | Result (Pass/Fail) | Operator ID |
|:---|:---|:---|:---|:---|
| GLUC-2025-012-SA01 | Initial Start | 4.22 | Pass | JS-442 |
| GLUC-2025-012-SA02 | 50% Extension | 3.89 | Pass | JS-442 |
| GLUC-2025-012-SA03 | Full Extension | 4.05 | Pass | JS-442 |
| **Statistical Mean** | **N=50** | **4.053** | **Std Dev: 0.12** | **Cpk: 1.48** |

---

### 5.0 FINAL RELEASE TESTING (FRT) - DEVICE PERFORMANCE
Final Release Testing is performed on the fully assembled, sterilized, and packaged Glucogen-XR device. Testing follows the **ISO 11608-1** "System Verification" protocol.

#### 5.1 Dose Accuracy (Gravimetric Analysis)
Dose accuracy is the primary CQA for Glucogen-XR. Due to the extended-release nature, the device is tested across its full delivery duration (7 days).

**Calculation Formula for Delivered Mass ($M_d$):**
$$M_d = (W_{post} - W_{pre}) \times Z$$
*Where:*
*   $W_{pre}$ = Weight of the collection vessel before delivery.
*   $W_{post}$ = Weight of the collection vessel after delivery.
*   $Z$ = Correction factor for buoyancy/density of the glucapeptide formulation ($1.042 \text{ g/mL}$ at $20^\circ\text{C}$).

**Table 5.1: Dose Accuracy Results for Batch GLUC-2025-104**
*Target Dose: 1.50 mg (Volume: 0.50 mL)*

| Device Serial No. | Delivered Mass (mg) | Deviation (%) | Acceptance ($\pm 5\%$) |
|:---|:---|:---|:---|
| 2025-104-001 | 1.492 | -0.53% | PASS |
| 2025-104-002 | 1.508 | +0.53% | PASS |
| 2025-104-003 | 1.521 | +1.40% | PASS |
| 2025-104-004 | 1.478 | -1.47% | PASS |
| **Batch Mean** | **1.4997** | **-0.02%** | **PASS** |

#### 5.2 Needle Extension and Retraction Force
The Glucogen-XR uses a 29G thin-wall needle. The force required to trigger the safety shield and the depth of needle penetration are measured.

*   **Test Method:** SOP-DEV-MEC-04
*   **Equipment:** Instron 5942 with 100N Load Cell.
*   **Penetration Depth Target:** 6.0 mm $\pm$ 1.0 mm.
*   **Activation Force Target:** < 15.0 N.

---

### 6.0 MICROBIOLOGICAL AND ENDOTOXIN TESTING
As a sterile injectable, the device and drug fluid path must be free of pyrogens.

#### 6.1 Bacterial Endotoxin Test (LAL)
*   **Standard:** USP <85>
*   **Method:** Kinetic Chromogenic
*   **Limit:** < 0.5 EU/mL (calculated based on max dose for a 70kg adult).
*   **Batch Result (GLUC-2025-104):** < 0.05 EU/mL (Pass).

#### 6.2 Sterility Testing
*   **Standard:** USP <71>
*   **Incubation:** 14 days in Tryptic Soy Broth (TSB) and Fluid Thioglycollate Medium (FTM).
*   **Sample Size:** $n=20$ per batch.

---

### 7.0 DATA INTEGRITY AND CLOUD MONITORING
Google Health Sciences leverages the **Google Cloud Manufacturing Data Engine** to monitor inspection results in real-time. Each inspection tool (CMM, Instron, Leak Detector) is interfaced via an IoT Gateway to a BigQuery dataset.

1.  **Automated Anomaly Detection:** Any test result falling outside 2-Sigma of the historical mean triggers an immediate "Hold" on the batch in the SAP S/4HANA system.
2.  **Audit Trail:** All inspection data is timestamped and cryptographically signed to ensure compliance with **21 CFR Part 11**.

---

### 8.0 BATCH RELEASE SUMMARY TABLE
*The following table summarizes the QC results for the pivotal Phase III clinical batch.*

**Batch Number: GLUC-2025-P3-01**
**Manufacturing Date: January 15, 2025**

| Test Category | Methodology | Requirement | Result |
|:---|:---|:---|:---|
| **Appearance** | Visual (USP <790>) | Clear, colorless, no particulates | Conforms |
| **Dose Accuracy** | ISO 11608-1 | 0.50 mL $\pm$ 0.025 mL | 0.498 mL |
| **Injection Time** | Timer | 10.0 sec $\pm$ 2.0 sec | 10.4 sec |
| **Needle Length** | Vision System | 5.0 mm to 7.0 mm | 6.2 mm |
| **Break Loose Force** | Force Gauge | < 10.0 N | 4.2 N |
| **Particulate Matter** | USP <788> | $\geq 10\mu m: < 6000$; $\geq 25\mu m: < 600$ | $10\mu m: 142$; $25\mu m: 12$ |
| **pH** | Potentiometric | 6.8 - 7.4 | 7.12 |
| **Purity (SEC)** | HPLC | $\geq 98.0\%$ | 99.4% |

---

### 9.0 APPENDICES
*   **Appendix A:** Calibration Certificates for CMM-GHS-09.
*   **Appendix B:** Validation Report for Automated Visual Inspection (AVI) System GHS-VIS-02.
*   **Appendix C:** Statistical Rationale for Reduced Sampling (ISO 2859-1 Skip-Lot Logic).

---
**END OF SECTION**

---

## Acceptance Criteria

# MODULE 3.2.P.3.5: PROCESS VALIDATION AND/OR EVALUATION
## SECTION: QUALITY CONTROL - ACCEPTANCE CRITERIA FOR THE DRUG DELIVERY DEVICE CONSTITUENT
**Document ID:** GHS-GLUCXR-M32P35-QC-AC-001  
**Manufacturer:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Drug Product:** Glucogen-XR (glucapeptide extended-release) 1.5mg/0.5mL  
**Device Type:** Single-use, disposable, fixed-dose autoinjector  
**Regulatory Context:** FDA 21 CFR Part 820 (QSR) / 21 CFR Part 4 (Combination Products)  
**Date of Issue:** October 24, 2023  
**Revision:** 4.0 (Final Submission)

---

### 1.0 INTRODUCTION AND SCOPE
This subsection defines the rigorous **Acceptance Criteria (AC)** for the delivery device constituent of the Glucogen-XR combination product. Given the critical nature of the GLP-1 receptor agonist delivery for Type 2 Diabetes Mellitus, the acceptance criteria are established to ensure dose accuracy, mechanical reliability, and patient safety throughout the labeled shelf-life.

The Glucogen-XR Autoinjector (GHS-AI-V3) is classified as a Class II medical device constituent. All criteria outlined herein comply with **ISO 11608-1:2022** (Needle-based injection systems for medical use) and **FDA Guidance: Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013)**.

---

### 2.0 STATISTICAL RATIONALE FOR ACCEPTANCE CRITERIA
Acceptance criteria are based on a Tolerance Interval approach. For critical performance parameters, the Google Health Sciences (GHS) Quality Management System (QMS) dictates a **99% Reliability with 95% Confidence (99/95)**.

#### 2.1 Statistical Formulas
For normally distributed data, the acceptance limit is calculated as:
$$X \pm (k \cdot s) \leq \text{Specification Limit}$$
Where:
*   **X**: Mean of the sample batch
*   **k**: Coverage factor for 99/95 (based on sample size *n*)
*   **s**: Standard deviation of the sample batch

For non-normal distributions (e.g., break-loose force), a non-parametric attribute-based sampling plan per **ANSI/ASQ Z1.4** is utilized, targeting an AQL of 0.01 for critical defects.

---

### 3.0 MECHANICAL PERFORMANCE ACCEPTANCE CRITERIA (MPAC)

Mechanical performance ensures that the autoinjector successfully triggers, delivers the full dose, and protects the needle post-injection.

#### Table 3.1: Critical Mechanical Specifications and Acceptance Limits
| Parameter ID | Attribute | Methodology | Specification | Acceptance Criterion (AQL/TI) |
| :--- | :--- | :--- | :--- | :--- |
| **MP-001** | Cap Removal Force | ISO 11608-5 | 5.0 N to 15.0 N | 99/95 TI within range |
| **MP-002** | Activation Force | Force Gauge (GHS-FG-99) | 10.0 N to 25.0 N | 99/95 TI within range |
| **MP-003** | Injection Time | Digital Chronometer | 5.0 s to 10.0 s | Mean $\leq$ 8.0s; Max < 10.0s |
| **MP-004** | Delivered Volume | Gravimetric Analysis | 0.50 mL $\pm$ 0.025 mL | 99/95 TI within range |
| **MP-005** | Needle Extension | Optical Comparator | 4.0 mm to 6.0 mm | $\pm$ 0.5 mm of target |
| **MP-006** | Shield Lock Force | Compressive Load | $\geq$ 30.0 N | Min Value $>$ 30.0 N |

---

### 4.0 DOSE ACCURACY AND VOLUMETRIC PRECISION
Dose accuracy is the primary critical quality attribute (CQA). For Glucogen-XR, the target volume is 0.50 mL of a high-viscosity (15 cP) non-Newtonian peptide solution.

#### 4.1 Gravimetric Test Protocol (GHS-SOP-772)
1.  **Equipment:** Mettler Toledo Excellence Level Balance (ID: GHS-BAL-042).
2.  **Environment:** Controlled at 23°C $\pm$ 2°C, 50% RH.
3.  **Procedure:**
    *   Tare the collection vial.
    *   Actuate the Glucogen-XR device (Batch: GLUC-2025-001 through GLUC-2025-010).
    *   Measure the mass of the expelled fluid.
    *   Convert mass to volume using the density ($\rho = 1.024 \, \text{g/cm}^3$).

#### Table 4.2: Dose Accuracy Batch Release Data (Example: GLUC-2025-001)
| Sample ID | Mass (g) | Calculated Volume (mL) | Deviation (%) | Status |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001-01 | 0.511 | 0.499 | -0.2% | PASS |
| GLUC-2025-001-02 | 0.513 | 0.501 | +0.2% | PASS |
| GLUC-2025-001-03 | 0.510 | 0.498 | -0.4% | PASS |
| ... | ... | ... | ... | ... |
| **Mean (n=30)** | **0.512** | **0.500** | **0.0%** | **PASS** |
| **Std Dev** | **0.002** | **0.002** | **N/A** | **PASS** |

---

### 5.0 MATERIAL AND CHEMICAL SPECIFICATIONS
The device components in the primary fluid path (PFP) must meet strict biocompatibility and chemical migration limits.

#### 5.1 Extractables and Leachables (E&L) Criteria
Per **USP <1663>** and **USP <1664>**, the following limits are applied to the glass syringe barrel and bromobutyl stopper:
*   **Total Organic Carbon (TOC):** $\leq$ 500 ppb
*   **Conductivity:** $\leq$ 1.3 $\mu$S/cm at 25°C
*   **N-Nitrosamines:** $<$ 0.03 ppm (Target: Below limit of quantitation)
*   **Silicone Oil Distribution:** Visual uniformity; no droplets $>$ 10 $\mu$m per **USP <788>** equivalent for particulates.

#### 5.2 Material Compliance (Sub-assemblies)
*   **Spring (Stainless Steel 304):** Tensile strength 1800-2000 MPa.
*   **Housing (Medical Grade PC/ABS):** ISO 10993-1 compliant (Skin sensitization and irritation).

---

### 6.0 VISUAL AND COSMETIC ACCEPTANCE CRITERIA
Google Health Sciences employs an Automated Optical Inspection (AOI) system integrated with Google Cloud Vision AI to detect defects in real-time on the manufacturing line at the South San Francisco facility.

#### Table 6.1: Visual Defect Classification
| Defect Category | Definition | Acceptance Limit (AQL) |
| :--- | :--- | :--- |
| **Critical** | Cracks in glass, missing needle, compromised sterile barrier. | 0.01 (Zero Tolerance in Batch) |
| **Major** | Significant scratches on the dose window, illegible lot number. | 0.65 |
| **Minor** | Small cosmetic scuffs on the outer housing ($\leq$ 2mm). | 4.0 |

---

### 7.0 ENVIRONMENTAL STRESS AND STABILITY CRITERIA
Acceptance criteria must be maintained after exposure to "Worst Case" shipping and storage conditions.

#### 7.1 Temperature Excursion Testing (GHS-STAB-09)
Devices from batches **GLUC-2025-004** and **GLUC-2025-005** were subjected to:
1.  **Freeze-Thaw:** -20°C to +40°C for 3 cycles (48 hours per cycle).
2.  **Vibration:** ASTM D4169 (DC-13) random vibration profile.

**Acceptance Criterion:** After stress, 100% of devices must demonstrate a "Click" sound upon activation and deliver a volume within $\pm$ 5% of the nominal 0.50 mL.

---

### 8.0 STEP-BY-STEP QC RELEASE PROTOCOL (GHS-QC-PRO-102)

**Step 1: Sampling**
*   Select $n$ units from batch GLUC-2025-XXX according to the sampling plan (Table 8.1).
*   Randomize units using the GHS-Cloud-Randomizer.

**Step 2: Dimensional Verification**
*   Measure critical path dimensions using a Keyence IM-8000 Series Image Dimension Measurement System.
*   *Criterion:* Needle shield diameter must be 12.0 mm $\pm$ 0.1 mm.

**Step 3: Functional Force Testing**
*   Mount device in the ZwickRoell Texture Analyzer.
*   Apply downward force at 100 mm/min until activation.
*   *Criterion:* Record "Trigger Force." Limit: 15N < F < 22N.

**Step 4: Dose Delivery and Timing**
*   Actuate into a waste container on a precision balance.
*   Start timer on first "Click," stop on second "Click."
*   *Criterion:* Time must be between 5.0 and 10.0 seconds.

**Step 5: Safety Feature Verification**
*   Confirm needle shield extends and locks (cannot be pushed back with $<$ 30N force).
*   Confirm "Used" indicator is visible in the dose window.

---

### 9.0 REGULATORY REFERENCES
1.  **ISO 11608-1:2022**: Needle-based injection systems for medical use — Requirements and test methods.
2.  **FDA 21 CFR Part 4**: Regulation of Combination Products.
3.  **USP <790>**: Visible Particulates in Injections.
4.  **ICH Q8(R2)**: Pharmaceutical Development.
5.  **ISO 14971:2019**: Application of risk management to medical devices.

---

### 10.0 CONCLUSION
The acceptance criteria outlined for the Glucogen-XR Autoinjector ensure that every unit produced at the South San Francisco site meets the highest standards of quality. By integrating Google Cloud’s data analytics with traditional pharmaceutical QC, Google Health Sciences ensures that Glucogen-XR (GLUC-2025-XXX series) provides safe and efficacious delivery for patients with Type 2 Diabetes.

**Approvals:**
*   *Director of Quality Assurance:* [Signature] - Date: Oct 2023
*   *VP of Regulatory Affairs:* [Signature] - Date: Oct 2023
*   *Lead Device Engineer:* [Signature] - Date: Oct 2023

---

## Statistical Sampling

### **MODULE 3: QUALITY CONTROL - DEVICE MASTER FILE (DMF)**
#### **SECTION 3.2.P.7: STATISTICAL SAMPLING STRATEGY AND ACCEPTANCE SAMPLING PLANS**

---

### **1.0 SCOPE AND REGULATORY ALIGNMENT**

This section delineates the comprehensive statistical sampling methodologies employed by **Google Health Sciences** for the **Glucogen-XR (glucapeptide extended-release)** delivery system. The sampling protocols described herein govern the lifecycle of the device components, sub-assemblies, and final finished combination product. 

This strategy is engineered to comply with the following regulatory frameworks and international standards:
*   **21 CFR Part 820.250:** Statistical Techniques (US FDA Quality System Regulation).
*   **21 CFR Part 4:** Regulation of Combination Products.
*   **ISO 2859-1:1999:** Sampling procedures for inspection by attributes.
*   **ISO 3951-1:2013:** Sampling procedures for inspection by variables.
*   **ISO 11608-1:2022:** Needle-based injection systems for medical use.
*   **ICH Q10:** Pharmaceutical Quality System.
*   **ASQ/ANSI Z1.4 & Z1.9:** Sampling Procedures and Tables for Inspection.

The overarching objective is to provide a statistically valid rationale for batch release, ensuring a Confidence Level ($CL$) of 95% or 99% depending on the criticality of the Quality Attribute (QA).

---

### **2.0 STATISTICAL RATIONALE AND RISK-BASED CLASSIFICATION**

Sampling frequencies and sample sizes ($n$) are determined based on a **Risk-Based Approach (RBA)**. Every specification linked to the Glucogen-XR device is categorized via Failure Mode and Effects Analysis (FMEA).

#### **2.1 Criticality Levels and AQL/RQL Definitions**
Google Health Sciences utilizes **Acceptable Quality Levels (AQL)** and **Rejectable Quality Levels (RQL/LTPD)** to define the operating characteristic (OC) curves for each batch.

| Criticality Class | Definition | AQL (%) | RQL (LTPD) (%) | Confidence Level |
| :--- | :--- | :--- | :--- | :--- |
| **Class I (Critical)** | Potential for life-threatening injury or device failure leading to total dose omission. | 0.010 | 0.10 | 99% |
| **Class II (Major)** | Potential for significant reduction in efficacy or moderate user harm. | 0.65 | 2.50 | 95% |
| **Class III (Minor)** | Cosmetic defects or non-functional discrepancies not affecting performance. | 4.0 | 10.0 | 90% |

#### **2.2 Formula for Sample Size Determination (Attribute Data)**
For attribute-based sampling (Pass/Fail) where the binomial distribution applies, the sample size $n$ is calculated using the formula derived from the **Binomial Cumulative Distribution Function**:

$$P(X \le c) = \sum_{i=0}^{c} \binom{n}{i} p^i (1-p)^{n-i} \le \beta$$

Where:
*   $n$ = Sample size
*   $c$ = Acceptance number (usually 0 for Critical attributes)
*   $p$ = Rejectable Quality Level (RQL)
*   $\beta$ = Consumer's Risk (typically 0.05 for 95% confidence)

---

### **3.0 INCOMING COMPONENT SAMPLING (P-IND-0042)**

All components for the Glucogen-XR device (e.g., Plunger Rods, Power Springs, Housing Sleeves) are sampled upon receipt at the South San Francisco facility (Building 4).

#### **3.1 Sampling Protocol for Injection-Molded Components**
*   **Batch Identifier Format:** GLUC-2025-COMP-XXXX
*   **Equipment:** Mitutoyo Quick Vision Apex CMM, Keyence IM-8000 Series.
*   **Procedure:** 
    1.  Verify the Certificate of Analysis (CoA) against the Master Specification.
    2.  Apply **ISO 2859-1 Single Sampling Plan**, Normal Inspection, Level II.
    3.  For Critical Dimensions (e.g., Needle Shield Trigger Force Interface), use **Reduced Inspection** only after 10 consecutive batches pass.

#### **3.2 Table 1: Sampling Plan for Glucogen-XR Components (Lot Size: 50,001 - 150,000 units)**

| Component ID | Attribute Category | Method | Sample Size ($n$) | Ac / Re |
| :--- | :--- | :--- | :--- | :--- |
| GHS-DRV-01 | Primary Housing (Critical Dim) | Variable (CMM) | 125 | $k$-value $\ge 1.98$ |
| GHS-SPR-09 | Power Spring (K-Constant) | Variable (Load Cell) | 80 | $k$-value $\ge 1.95$ |
| GHS-PLG-02 | Plunger Rod (Visual/Flash) | Attribute | 500 | 0 / 1 |
| GHS-LBL-05 | Device Label (OCR/OCV) | Attribute | 315 | 1 / 2 |

---

### **4.0 IN-PROCESS SAMPLING (IPC) DURING ASSEMBLY**

Assembly of the Glucogen-XR occurs on the Automated Assembly Line (AAL-01). Sampling is performed at discrete stages to ensure the mechanical integrity of the sub-assemblies.

#### **4.1 Stratified Sampling Procedure**
To account for "Within-Run" variability, Google Health Sciences employs **Stratified Random Sampling**. The production run is divided into $k$ strata (time-based intervals).

**Calculation of Interval ($i$):**
$$i = \frac{Total Production Time}{n_{required}}$$

For batch **GLUC-2025-ASSY-992**, with a projected run time of 12 hours and a required $n=200$:
*   Samples are pulled every 3.6 minutes from the conveyor output.

#### **4.2 Table 2: IPC Sampling Requirements (Assembly Stage)**

| IPC Stage | Parameter | Sampling Frequency | Statistical Tool |
| :--- | :--- | :--- | :--- |
| **Stage 1: Power Pack** | Spring Pre-load Tension | 10 units / hour | $\bar{X}$ & R Chart |
| **Stage 2: Syringe Insert** | Flange Alignment Angle | 5 units / 30 mins | Histograms / Ppk |
| **Stage 3: Cap Fitment** | Removal Torque | 8 units / hour | Capability Analysis |

---

### **5.0 FINISHED PRODUCT SAMPLING (RELEASE TESTING)**

The Finished Combination Product (Glucogen-XR ER Injection) undergoes final verification. This is the most rigorous sampling stage.

#### **5.1 Dose Accuracy and Delivery Time (ISO 11608-1 Verification)**
For Batch Release, the sample size is determined to provide a 99% reliability at 95% confidence for dose accuracy.

*   **Batch Number:** GLUC-2025-FIN-XXXX
*   **n-Size:** 299 units (zero failures allowed) for Attribute testing, or 60 units for Variable testing based on a standard deviation ($\sigma$) derived from Phase III Clinical batches.

#### **5.2 Step-by-Step Release Sampling Protocol (SOP-QC-772)**
1.  **Lot Segregation:** Segregate the finished batch into three sub-lots (Beginning, Middle, End of fill).
2.  **Randomization:** Utilize the **GHS-Stat-Tool (v4.2)** cloud-based random number generator to select unique serial numbers for testing.
3.  **Environmental Conditioning:** Place samples in a controlled environment (25°C ± 2°C / 60% RH) for 24 hours prior to activation.
4.  **Testing Execution:** 
    *   **Dose Mass:** Weigh the delivered mass using a Mettler Toledo Excellence Balance (Model XPR205).
    *   **Activation Force:** Measure the force required to trigger the needle shield using the Instron 5942 Universal Testing System.
5.  **Statistical Assessment:** Input data into the **Google Life Sciences Statistical Engine**. Calculate Mean, Standard Deviation, and $Ppk$.
    *   *Requirement:* $Ppk \ge 1.33$ for release.

---

### **6.0 DATA REPRESENTATION AND HISTORICAL TRENDING**

#### **6.1 Table 3: Historical Sampling Data (Batches GLUC-2025-001 to GLUC-2025-010)**

| Batch Number | Sample Size ($n$) | Mean Dose (mg) | Std. Dev ($\sigma$) | Min / Max | Cpk / Ppk | Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 125 | 1.502 | 0.012 | 1.48 / 1.53 | 1.44 | Pass |
| GLUC-2025-002 | 125 | 1.499 | 0.011 | 1.47 / 1.52 | 1.51 | Pass |
| GLUC-2025-003 | 125 | 1.510 | 0.015 | 1.46 / 1.55 | 1.35 | Pass |
| GLUC-2025-004 | 125 | 1.501 | 0.009 | 1.49 / 1.52 | 1.62 | Pass |
| GLUC-2025-005 | 125 | 1.498 | 0.014 | 1.45 / 1.54 | 1.39 | Pass |

---

### **7.0 STABILITY SAMPLING (ICH Q1B / Q5C)**

Sampling for stability studies (Long-term, Accelerated, and Intermediate) follows a "Matrixing" or "Bracketing" design as per ICH Q1D.

*   **Matrixing Design:** For multiple strengths (0.75mg, 1.5mg, 3.0mg), GHS samples the extremes (0.75mg and 3.0mg) at every time point, while the intermediate strength (1.5mg) is sampled at $T=0, 6, 12, 24,$ and $36$ months.
*   **Sample Size for Stability:** $n=30$ per time point per orientation (Horizontal/Upright) to ensure statistical significance for trend analysis (Slope $\ne$ 0).

---

### **8.0 DEVIATION MANAGEMENT AND RESAMPLING**

In the event of a sampling non-conformance (Out of Specification - OOS):
1.  **Phase I Investigation:** Determine if the OOS was a laboratory or sampling error.
2.  **Resampling (The "Rule of Three"):** If the investigation proves the original sample was unrepresentative, a re-sample size of $3n$ is required. This must be justified by the Quality Assurance (QA) Head and noted in the Batch Record for **GLUC-2025-XXX**.
3.  **Statistical Justification for Resampling:** The power of the test ($1-\beta$) must be maintained or increased.

---

### **9.0 APPROVALS AND REFERENCES**

**Prepared By:**
*Regulatory Affairs Specialist, Google Health Sciences*
*Date: 14-Oct-2024*

**Reviewed By:**
*Director of Biostatistics, Google Cloud Life Sciences*
*Date: 20-Oct-2024*

**References:**
1.  *GHS-SOP-550: Statistical Techniques for Device Verification.*
2.  *ASTM D1517: Standard Practice for Sampling and Selection.*
3.  *ISO 11608-1:2022 Section 5.3: Sampling for Dose Accuracy.*

---

# Biocompatibility

## ISO 10993 Testing

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.P.7: CONTAINER CLOSURE SYSTEM / DRUG DELIVERY DEVICE
### SUBSECTION: 3.2.P.7.4 BIOCOMPATIBILITY ASSESSMENT
#### DOCUMENT ID: GHS-GLUC-XR-M3-BIO-001

---

### **1.0 SCOPE AND REGULATORY FRAMEWORK**

This subsection details the comprehensive biocompatibility evaluation of the Glucogen-XR (glucapeptide extended-release) delivery system, a pre-filled, disposable auto-injector (Model GHS-AI-V4). The assessment was conducted in strict accordance with **ISO 10993-1:2018**, "Biological evaluation of medical devices – Part 1: Evaluation and testing within a risk management process," and the **FDA Guidance Document**, "Use of International Standard ISO 10993-1, 'Biological evaluation of medical devices - Part 1: Evaluation and testing within a risk management process'" (issued September 2020).

The Glucogen-XR delivery system is categorized as a **Surface Device** with **Limited Contact (≤ 24 hours)** for the external housing, and a **Skin-Contacting/Tissue-Contacting Device** for the fluid path components (External/Internal Communication Device, Indirect Blood Contact). Given the chronic nature of Type 2 Diabetes treatment, although each individual injection event is transient, the cumulative exposure over a lifetime is considered. Therefore, Google Health Sciences (GHS) has elected to perform testing aligned with **Permanent Contact (> 30 days)** for specific critical fluid-path components to ensure a maximal safety margin.

#### **1.1 Device Categorization (ISO 10993-1 Table 1)**
| Component ID | Contact Category | Contact Duration | Body Contact Type |
| :--- | :--- | :--- | :--- |
| **GHS-AI-V4 Housing** | Surface | Limited (< 24h) | Intact Skin |
| **GHS-AI-V4 Needle Shield** | Surface | Limited (< 24h) | Intact Skin |
| **GHS-AI-V4 Fluid Path (Needle)** | External Communicating | Limited (< 24h) | Tissue/Dentin/Bone/Circulating Blood |
| **GHS-AI-V4 Plunger Stopper** | Indirect Fluid Contact | Permanent (Cumulative) | Tissue/Blood Path |
| **GHS-AI-V4 Glass Barrel** | Indirect Fluid Contact | Permanent (Cumulative) | Tissue/Blood Path |

---

### **2.0 COMPONENT CHARACTERIZATION AND MATERIAL SELECTION**

Google Health Sciences utilizes a proprietary Master Parts List (MPL) for the Glucogen-XR device. All materials have undergone Chemical Characterization per **ISO 10993-18**.

#### **Table 2.1: Material Composition and Supplier Reference**
| Component Part Number | Description | Base Material | Supplier / Grade |
| :--- | :--- | :--- | :--- |
| **CP-AI-001** | External Shell | Polycarbonate/ABS Blend | Sabic Cycoloy HC1204HF |
| **CP-AI-002** | Needle (29G) | 304 Stainless Steel | Terumo Medical / ISO 9626 |
| **CP-AI-003** | Needle Lubricant | Polydimethylsiloxane | Dow Corning MDX4-4159 |
| **CP-AI-004** | Plunger Stopper | Bromobutyl Rubber | West Pharma NovaPure® |
| **CP-AI-005** | Cartridge Barrel | Type 1 Borosilicate Glass | Schott Fiolax® |

---

### **3.0 ISO 10993 TEST MATRICES AND BATCH IDENTIFICATION**

Testing was performed on finished, sterilized devices (Gamma Irradiated at 25-40 kGy) representing the final commercial configuration.

#### **Table 3.1: Representative Test Batches**
| Batch Number | Manufacture Date | Sterilization Date | Sterilization Batch |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-V01** | 12-JAN-2025 | 15-JAN-2025 | STER-GHS-9981 |
| **GLUC-2025-V02** | 14-JAN-2025 | 18-JAN-2025 | STER-GHS-9984 |
| **GLUC-2025-V03** | 22-JAN-2025 | 25-JAN-2025 | STER-GHS-9990 |

---

### **4.0 DETAILED TEST PROTOCOLS AND RESULTS**

#### **4.1 Cytotoxicity – ISO 10993-5 (MEM Elution Test)**
**Objective:** To determine the biological reactivity of mammalian cell cultures (L929 Mouse Fibroblasts) to the extractable substances of the Glucogen-XR device.

**Protocol GHS-BIO-PRO-01:**
1.  **Extraction:** Samples from Batch **GLUC-2025-V01** were extracted in MEM (Minimum Essential Medium) supplemented with 5% FBS at a ratio of 3 cm²/mL for 24 hours at 37°C.
2.  **Cell Preparation:** L929 cells were seeded into 96-well plates and grown to sub-confluence.
3.  **Exposure:** The cell culture medium was replaced with the device extract (100% concentration, and serial dilutions 50%, 25%).
4.  **Evaluation:** Cells were incubated for 48 hours and examined microscopically for morphological changes (lysis, crenation, vacuolization).

**Statistical Acceptance Criteria:** A reactivity grade of ≤ 2 (mild) is required.

**Results Table 4.1:**
| Sample Group | Dilution | Reactivity Grade | Morphological Observation | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-V01** | 100% | 0 | None | Pass |
| **GLUC-2025-V02** | 100% | 0 | None | Pass |
| **Positive Control** | (Phenol) | 4 | Severe Lysis (>70%) | N/A |
| **Negative Control** | (HDPE) | 0 | None | N/A |

---

#### **4.2 Sensitization – ISO 10993-10 (Guinea Pig Maximization Test - GPMT)**
**Objective:** To evaluate the potential of the device materials to cause delayed dermal hypersensitivity.

**Protocol GHS-BIO-PRO-02:**
*   **Extracts:** Polar (0.9% NaCl) and Non-polar (Sesame Oil).
*   **Induction Phase:** Intradermal injection of extracts with Freund’s Complete Adjuvant (FCA) followed by topical application 7 days later.
*   **Challenge Phase:** Topical application of extracts on Day 21 to a naïve site.
*   **Grading:** Magnusson and Kligman scale (0-3).

**Results Table 4.2:**
| Batch | Extract | Induction Response | Challenge Response (24h) | Challenge Response (48h) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-V01** | Saline | 0 | 0 | 0 |
| **GLUC-2025-V01** | Oil | 0 | 0 | 0 |
| **Positive Control** | DNCB | 3 (Severe) | 3 | 3 |

**Conclusion:** The Glucogen-XR device is considered a non-sensitizer under the conditions of this study.

---

#### **4.3 Irritation – ISO 10993-23 (Intracutaneous Reactivity)**
**Objective:** To assess the localized reaction of tissue to extracts of the device.

**Protocol GHS-BIO-PRO-03:**
*   **Test Animal:** New Zealand White Rabbit (n=3 per extract).
*   **Injection:** 0.2 mL of extract (Saline/Oil) injected intracutaneously at 5 sites.
*   **Evaluation:** Erythema and Edema scored at 24, 48, and 72 hours.

**Calculations:**
The Mean Score is calculated as:
$$Score_{Diff} = \frac{\sum (Erythema + Edema)_{Test}}{n} - \frac{\sum (Erythema + Edema)_{Control}}{n}$$

**Results Table 4.3:**
| Batch | Extract | Mean Score (Test) | Mean Score (Control) | Final Score | Interpretation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-V03** | Saline | 0.2 | 0.1 | 0.1 | Non-Irritant |
| **GLUC-2025-V03** | Oil | 0.4 | 0.3 | 0.1 | Non-Irritant |

---

#### **4.4 Systemic Toxicity (Acute) – ISO 10993-11**
**Objective:** To evaluate the potential for adverse effects occurring within 24 hours of a single exposure to extracts.

**Results Summary:**
No clinical signs of toxicity were observed in Albino Swiss mice (Batch **GLUC-2025-V01**) following intravenous injection of saline extracts and intraperitoneal injection of oil extracts. Weight gain was normal across all test groups.

---

#### **4.5 Hemocompatibility – ISO 10993-4**
**Objective:** To evaluate the effect of the fluid path (Needle and Cartridge) on blood components, specifically hemolysis, thrombosis, and coagulation.

**Protocol GHS-BIO-PRO-05 (Hemolysis - Direct & Extract):**
*   **Test System:** Human Blood (citrated).
*   **Measurement:** Free Hemoglobin using Cyanmethemoglobin method at 540nm.
*   **Formula:**
    $$\% Hemolysis = \frac{Hb_{Test} - Hb_{Neg}}{Hb_{Total} - Hb_{Neg}} \times 100$$

**Results Table 4.5:**
| Sample | Mean Absorbance (OD) | % Hemolysis | Result |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-V02** (Direct) | 0.045 | 0.42% | Non-Hemolytic |
| **Positive Control** (DI Water) | 2.105 | 98.6% | Hemolytic |
| **Negative Control** (Saline) | 0.038 | 0.01% | Non-Hemolytic |

*Note: According to ASTM F756, a Hemolytic Index < 2% is considered non-hemolytic.*

---

### **5.0 CHEMICAL CHARACTERIZATION (EXTRACTABLES/LEACHABLES)**
**Reference: ISO 10993-18**

Google Health Sciences conducted an exhaustive E&L study on the Glucogen-XR device to support the biological assessment and reduce the need for further animal testing (in vivo sub-chronic toxicity).

#### **5.1 Extraction Parameters**
*   **Solvents:** Water, 50% Ethanol, Hexane.
*   **Temperature/Duration:** 50°C for 72 hours (Exaggerated conditions).
*   **Analytical Techniques:** GC-MS (Volatiles/Semi-volatiles), LC-HRMS (Non-volatiles), ICP-MS (Elemental impurities).

#### **Table 5.1: Identified Extractables and Toxicological Thresholds**
| Compound | Source | Concentration (µg/device) | AET (µg/day) | Margin of Safety (MOS) |
| :--- | :--- | :--- | :--- | :--- |
| **2,4-Di-tert-butylphenol** | Polycarbonate | 12.4 | 120 | 9.67 |
| **Irganox 1010** | Stopper | 5.2 | 150 | 28.8 |
| **Aluminum** | Glass/Needle | 0.8 | 5.0 | 6.25 |
| **Tungsten** | Needle Forming | < 0.1 | 2.0 | > 20 |

**Toxicological Risk Assessment (TRA):**
All identified compounds were evaluated by a Board Certified Toxicologist (DABT). The calculated **Margin of Safety (MOS)** for all leachables, assuming a maximum daily dose of Glucogen-XR (1.5 mL), exceeds 1.0, indicating negligible risk to human health over chronic exposure.

---

### **6.0 PYROGENICITY ASSESSMENT**
**Reference: ISO 10993-11, Annex F (Material-Mediated Pyrogenicity)**

To distinguish between bacterial endotoxin-mediated pyrogenicity and material-mediated pyrogenicity, the **Rabbit Pyrogen Test (RPT)** was conducted per USP <151>.

**Data Summary (Batch GLUC-2025-V01):**
*   Total temperature rise (3 rabbits): 0.3°C.
*   Maximum individual rise: 0.15°C.
*   **Requirement:** Total rise < 1.15°C.
*   **Conclusion:** The device is non-pyrogenic.

---

### **7.0 SUB-CHRONIC AND CHRONIC TOXICITY CONSIDERATIONS**

Per ISO 10993-1, because the Glucogen-XR is a chronic-use device for T2DM, sub-chronic toxicity was evaluated via a 90-day systemic toxicity study in Sprague-Dawley rats.

**Study GHS-TOX-90D:**
*   **Dose:** Extract of 10 auto-injectors per kg body weight daily.
*   **Observations:** No statistically significant differences (p > 0.05) in hematology, clinical chemistry, or histopathology compared to control groups.
*   **Organ Weights:** No hypertrophy or atrophy of liver, kidneys, or spleen observed.

---

### **8.0 CONCLUSION**

The biocompatibility evaluation of the Glucogen-XR (glucapeptide extended-release) delivery system demonstrates that the device and its constituent parts are safe for their intended clinical use. All testing per **ISO 10993** series met the pre-defined acceptance criteria. The integration of chemical characterization (**ISO 10993-18**) and toxicological risk assessment confirms that the cumulative exposure to extractables does not pose a systemic or local risk to patients.

**Approvals:**
*   *Prepared By:* Regulatory Affairs Specialist, Google Health Sciences
*   *Reviewed By:* Principal Toxicologist, GHS Quality Assurance
*   *Dated:* February 14, 2025

---

## Cytotoxicity

# MODULE 3: QUALITY (PRE-FILLED DATA FOR DEVICE DMF)
## SECTION 3.2.P.7: CONTAINER CLOSURE SYSTEM – BIOCOMPATIBILITY
### SUBSECTION: 3.2.P.7.4.1 CYTOTOXICITY EVALUATION

---

**Document ID:** GHS-GLUC-XR-BIO-004  
**Sponsor:** Google Health Sciences (GHS), a Division of Google Cloud Life Sciences  
**Drug Product:** Glucogen-XR (glucapeptide extended-release)  
**Device Component:** Integrated Subcutaneous Delivery System (Pre-filled Syringe with proprietary 29G Thin-Wall Needle)  
**Assessment Period:** January 2024 – June 2025  
**GLP Compliance:** 21 CFR Part 58 (Good Laboratory Practice for Nonclinical Laboratory Studies)

---

### 1.0 INTRODUCTION AND SCOPE

This subsection details the cytotoxicity assessment of the Glucogen-XR delivery system components in accordance with ISO 10993-5:2009 (*Biological evaluation of medical devices — Part 5: Tests for in vitro cytotoxicity*). As the Glucogen-XR system is classified as a "Prolonged Exposure, Surface-Contacting Device" (exceeding 30 days of cumulative use via repeated injections), the potential for leachable-induced cellular damage is a critical safety parameter.

The evaluation utilizes the L929 mammalian fibroblast cell line (ATCC CCL-1) to determine the biological response of mammalian cells to extracts derived from the drug-contacting materials of the pre-filled syringe (PFS) and the needle assembly.

#### 1.1 Regulatory Framework
The studies described herein were designed and executed to comply with the following international standards:
*   **ISO 10993-1:2018:** Evaluation and testing within a risk management process.
*   **ISO 10993-5:2009:** Tests for *in vitro* cytotoxicity.
*   **ISO 10993-12:2021:** Sample preparation and reference materials.
*   **USP <87>:** Biological Reactivity Tests, *In Vitro*.
*   **FDA Guidance:** "Use of International Standard ISO 10993-1" (September 2023).

---

### 2.0 TEST ARTICLE IDENTIFICATION

The test articles consist of the final assembled primary container closure system (CCS) components used for Glucogen-XR.

#### Table 1: Component Breakdown for Cytotoxicity Testing
| Component ID | Material of Construction | Manufacturer | Batch Number Evaluated |
| :--- | :--- | :--- | :--- |
| **PFS-Barrel** | Type I Borosilicate Glass (Hydrolytic Class 1) | GHS-Subcontractor Alpha | GLUC-2025-001-A |
| **Plunger Stopper** | Bromobutyl Rubber (FluroTec® coated) | GHS-Subcontractor Beta | GLUC-2025-004-S |
| **Needle Hub** | Polycarbonate (Medical Grade) | GHS-Subcontractor Gamma | GLUC-2025-009-H |
| **Needle Shield** | Synthetic Isoprene (Latex-Free) | GHS-Subcontractor Delta | GLUC-2025-012-N |
| **Adhesive** | UV-Cured Acrylate | GHS-Internal Spec | GLUC-2025-AD-01 |

---

### 3.0 EXPERIMENTAL PROTOCOL: MEMBRANE ELUTION METHOD

The study utilized the **MEM Elution Method** to provide a qualitative and quantitative assessment of the cytotoxic potential of the extracts.

#### 3.1 Cell Line Preparation
*   **Cell Line:** L929 Mammalian Fibroblasts (Mouse).
*   **Source:** ATCC CCL-1.
*   **Culture Medium:** Minimum Essential Medium (MEM) supplemented with 10% Fetal Bovine Serum (FBS), 2mM L-Glutamine, 100 U/mL Penicillin, and 100 µg/mL Streptomycin.
*   **Incubation Conditions:** 37°C ± 1°C in a humidified atmosphere of 5% ± 0.1% CO2.

#### 3.2 Extract Preparation (ISO 10993-12)
The extraction ratio followed the surface area-to-volume requirements specified in ISO 10993-12.

*   **Extraction Solvent:** MEM supplemented with 5% FBS (reduced serum to increase sensitivity to toxins).
*   **Extraction Ratio:** 3 cm² / 1 mL or 0.2 g / 1 mL depending on component geometry.
*   **Extraction Conditions:** 37°C for 72 hours with continuous agitation (50 RPM).
*   **Filtration:** Extracts were filtered using a 0.22 µm PES membrane to ensure sterility prior to cell contact.

#### 3.3 Protocol Step-by-Step
1.  **Seed Cells:** L929 cells are seeded into 96-well plates at a density of $1 \times 10^4$ cells/well and incubated for 24 hours to achieve sub-confluence (approx. 80%).
2.  **Verify Confluency:** Microscopic examination (Nikon Eclipse Ti2) to ensure a healthy, fibroblastic morphology.
3.  **Aspiration:** The growth medium is aspirated and replaced with 100 µL of the test article extract (100% concentration, and dilutions of 50%, 25%, and 12.5%).
4.  **Incubation:** Plates are incubated for 24, 48, and 72 hours.
5.  **Assessment:** At each interval, cells are examined for morphological changes (lysis, crenation, vacuolization, or detachment).
6.  **Viability Quantification (XTT Assay):** Following the 72-hour exposure, 50 µL of XTT (2,3-bis-(2-methoxy-4-nitro-5-sulfophenyl)-2H-tetrazolium-5-carboxanilide) is added to each well.
7.  **Absorbance Reading:** Absorbance is measured at 450 nm using a SpectraMax iD3 microplate reader.

---

### 4.0 SCORING CRITERIA AND ACCEPTANCE LIMITS

#### 4.1 Qualitative Grading (ISO 10993-5 Table 1)
| Grade | Reactivity | Conditions of all Cultures |
| :--- | :--- | :--- |
| **0** | None | No detectable zone around or under specimen. |
| **1** | Slight | Some malformed or degenerated cells under specimen. |
| **2** | Mild | Zone limited to area under specimen (up to 0.5 cm). |
| **3** | Moderate | Zone extending 0.5 to 1.0 cm beyond specimen. |
| **4** | Severe | Zone extending greater than 1.0 cm beyond specimen. |

*Requirement: A score of >2 is considered a cytotoxic effect.*

#### 4.2 Quantitative Acceptance (XTT/MTT)
*   **Viability %** = $(Abs_{test} / Abs_{blank}) \times 100$.
*   **Pass Criterion:** Cell viability must remain $\geq 70\%$ of the blank control.

---

### 5.0 ANALYTICAL RESULTS: BATCH GLUC-2025-ALL-COMP

The following data represents the aggregate biocompatibility profile of the primary container components.

#### Table 2: Qualitative Morphological Assessment (24h, 48h, 72h)
| Test Article Extract | Batch Number | 24h Grade | 48h Grade | 72h Grade | Observation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PFS Barrel Extract** | GLUC-2025-001-A | 0 | 0 | 0 | No cell lysis. |
| **Stopper Extract** | GLUC-2025-004-S | 0 | 0 | 1 | Very slight vacuolization. |
| **Needle Hub Extract** | GLUC-2025-009-H | 0 | 1 | 1 | Rounded cells < 5%. |
| **Negative Control (HDPE)**| Lot #REF-001 | 0 | 0 | 0 | Discrete granules. |
| **Positive Control (ZDEC)**| Lot #POS-999 | 4 | 4 | 4 | Complete cell death. |

#### Table 3: Quantitative XTT Viability Analysis (%)
| Sample | Conc. (%) | Mean Absorbance (450nm) | Viability (%) | SD (n=6) |
| :--- | :--- | :--- | :--- | :--- |
| **Negative Control** | 100 | 1.842 | 100.0 | 0.04 |
| **Positive Control** | 100 | 0.102 | 5.5 | 0.01 |
| **PFS Component Mix** | 100 | 1.795 | 97.4 | 0.05 |
| **PFS Component Mix** | 50 | 1.821 | 98.9 | 0.03 |
| **PFS Component Mix** | 25 | 1.838 | 99.8 | 0.02 |

---

### 6.0 STATISTICAL ANALYSIS AND CALCULATIONS

The viability data were subjected to a One-Way ANOVA to determine significance relative to the negative control.

**Formula for Percent Viability:**
$$V = \frac{\overline{X}_{test} - \overline{X}_{background}}{\overline{X}_{negative\_control} - \overline{X}_{background}} \times 100$$

Where:
*   $\overline{X}_{test} = 1.795$
*   $\overline{X}_{negative\_control} = 1.842$
*   $\overline{X}_{background} (blank) = 0.045$

**Result:**
$$V = \frac{1.795 - 0.045}{1.842 - 0.045} \times 100 = \frac{1.750}{1.797} \times 100 = 97.38\%$$

Since $97.38\% \geq 70\%$, the Glucogen-XR delivery system is classified as **non-cytotoxic**.

---

### 7.0 EVALUATION OF LEACHABLES IN CYTOTOXICITY

To further ensure the safety of the long-term (extended release) profile of Glucogen-XR, Google Health Sciences conducted an additional "Exaggerated Extraction" cytotoxicity test.

#### 7.1 Method: Organic Solvent Extraction
*   **Solvent:** Isopropanol (IPA) and Hexane.
*   **Procedure:** Components were refluxed for 24 hours. The resulting residue was dried, reconstituted in MEM, and applied to L929 cells.
*   **Rationale:** To simulate "worst-case" leachable migration from the rubber stopper and adhesive.

#### 7.2 Results of Exaggerated Extraction
Even under aggressive solvent extraction, the residue reconstituted in culture medium yielded a cell viability of **84.2%** (Batch GLUC-2025-004-S), which remains well above the 70% regulatory threshold.

---

### 8.0 CONCLUSION

Based on the qualitative grading (Grade 0–1) and the quantitative XTT viability assay ($>97\%$), the materials comprising the Glucogen-XR Integrated Subcutaneous Delivery System are non-cytotoxic. The system meets the biological safety requirements of **ISO 10993-5** and **USP <87>**. There is no evidence of leachable substances from the glass barrel, bromobutyl stopper, or needle assembly that would adversely affect cellular health during the intended clinical use for Type 2 Diabetes Mellitus.

---

### 9.0 REFERENCES
1.  **ISO 10993-5:2009:** Biological evaluation of medical devices — Part 5: Tests for in vitro cytotoxicity.
2.  **USP <87>:** Biological Reactivity Tests, In Vitro.
3.  **GHS Standard Operating Procedure:** SOP-BIO-0098 "Cytotoxicity Testing via XTT".
4.  **Wallin, R.F.:** "A Practical Guide to ISO 10993-5: Cytotoxicity," *Medical Device & Diagnostic Industry*, 2021.

---

## Sensitization

# **3.2.P.7.3 Biocompatibility - Sensitization (Type IV Hypersensitivity)**

## **1.0 OVERVIEW AND SCOPE**

The sensitization profile of the **Glucogen-XR (glucapeptide extended-release)** delivery system (pre-filled syringe/autoinjector components) has been evaluated in accordance with **ISO 10993-10:2021** (*Biological evaluation of medical devices — Part 10: Tests for skin sensitization*) and **ISO 10993-1:2018**. As Glucogen-XR is categorized as a **Surface Device, Skin Contact, Prolonged Exposure (>24 hours to 30 days)** and also possesses **External Communicating components (Tissue/Bone/Dentin) with Permanent Exposure (>30 days)** due to the nature of the subcutaneous injection site, a rigorous assessment of the potential for Type IV delayed hypersensitivity was conducted.

The evaluation specifically focuses on the fluid path components (Borosilicate Glass Type 1, Bromobutyl Rubber Stopper, and 27G Thin-Wall Stainless Steel Needle) and the external housing materials (Polycarbonate, Polypropylene) of the Google Health Sciences (GHS) proprietary autoinjector.

### **1.1 Regulatory Compliance Matrix**
The studies detailed herein were conducted in strict adherence to the following global regulatory frameworks:
*   **FDA Guidance:** *Use of International Standard ISO 10993-1, "Biological evaluation of medical devices - Part 1: Evaluation and testing within a risk management process"* (Issued September 2023).
*   **ICH M3(R2):** *Guidance on Nonclinical Safety Studies for the Conduct of Human Clinical Trials and Marketing Authorization for Pharmaceuticals*.
*   **OECD TG 406:** *Skin Sensitization (Guinea Pig Maximization Test)*.
*   **21 CFR Part 58:** *Good Laboratory Practice (GLP) for Nonclinical Laboratory Studies*.
*   **USP <1031>:** *The Biocompatibility of Materials used in Drug Containers, Medical Devices, and Implants*.

---

## **2.0 TEST MATERIAL IDENTIFICATION AND PREPARATION**

Testing was performed on the finalized, sterilized (EO or Gamma as per specific component) device components. To ensure a worst-case scenario for leachable-induced sensitization, extracts were prepared using both polar and non-polar solvents.

### **2.1 Test Articles (Batch GLUC-2025-001 through GLUC-2025-005)**

| Component ID | Material Composition | Manufacturer | Batch Number | Sterilization State |
| :--- | :--- | :--- | :--- | :--- |
| **GHS-SYR-01** | Type 1 Borosilicate Glass | GHS Sub-contractor | GLUC-2025-110 | Autoclaved (121°C) |
| **GHS-STP-02** | Fluoropolymer-coated Bromobutyl | GHS Sub-contractor | GLUC-2025-112 | Gamma (25-40 kGy) |
| **GHS-NDL-03** | 304 Stainless Steel (Medical Grade) | GHS Sub-contractor | GLUC-2025-115 | ETO (Ethylene Oxide) |
| **GHS-HSG-04** | Medical Grade Polycarbonate (PC) | Google Health Sci. | GLUC-2025-201 | ETO (Ethylene Oxide) |

### **2.2 Extraction Protocol (ISO 10993-12:2021)**
Extraction was performed to maximize the surface area-to-volume ratio.

*   **Extraction Solvents:**
    1.  **Polar:** 0.9% Sodium Chloride (Physiological Saline).
    2.  **Non-Polar:** Cottonseed Oil (CSO) / Sesame Oil (SO).
*   **Extraction Ratio:** 3 cm²/mL (for thickness <0.5 mm) or 0.2 g/mL.
*   **Conditions:** 50°C ± 2°C for 72 ± 2 hours with continuous agitation (80 RPM).
*   **Blank Controls:** Negative controls (solvents only) were subjected to identical thermal and agitation conditions.

#### **Table 2.2.1: Extraction Parameters for Sensitization Testing**
| Component | Surface Area (Total) | Extractant Volume | Final pH (Saline) | Visual Clarity |
| :--- | :--- | :--- | :--- | :--- |
| GHS-SYR-01 | 12.5 cm² | 4.2 mL | 6.85 | Clear, no particulates |
| GHS-STP-02 | 4.8 cm² | 1.6 mL | 7.02 | Clear, no particulates |
| GHS-HSG-04 | 45.0 cm² | 15.0 mL | 6.90 | Clear, no particulates |

---

## **3.0 MAGNUSSON AND KLIGMAN GUINEA PIG MAXIMIZATION TEST (GPMT)**

The GPMT (ISO 10993-10, Annex C) was selected over the Buehler method due to its higher sensitivity in identifying weak sensitizers through the use of Freund’s Complete Adjuvant (FCA).

### **3.1 Animal Model Justification**
*   **Species:** *Cavia porcellus* (Hartley Guinea Pigs).
*   **Quantity:** 30 animals (20 Test, 10 Control) per extract type.
*   **Weight Range:** 300g – 500g at initiation.
*   **Source:** Accredited GLP Breeder (Charles River Laboratories).

### **3.2 Induction Phase I: Intradermal Injection**
On Day 0, the mid-scapular region was clipped. Three pairs of 0.1 mL intradermal injections were administered:
1.  **Injection 1:** 1:1 mixture (v/v) FCA and selected solvent.
2.  **Injection 2:** Test Extract (or Negative Control).
3.  **Injection 3:** 1:1 mixture of Test Extract and FCA emulsion.

### **3.3 Induction Phase II: Topical Application**
On Day 7, the same region was pre-treated with 10% Sodium Lauryl Sulfate (SLS) in petrolatum to induce mild inflammation (enhancing allergen penetration). On Day 8, a patch containing the extract (polar or non-polar) was applied for 48 hours.

### **3.4 Challenge Phase**
On Day 21, the flanks of the animals were clipped. A patch saturated with the test extract was applied to the left flank, and a patch with the control solvent was applied to the right flank for 24 hours.

---

## **4.0 EXPERIMENTAL DATA AND RESULTS**

The skin reaction was evaluated at 24 and 48 hours post-patch removal using the **Magnusson and Kligman Grading Scale**:
*   0 = No visible change
*   1 = Discrete or patchy erythema
*   2 = Moderate and confluent erythema
*   3 = Intense erythema and swelling

### **Table 4.1: Summary of Sensitization Scores (Polar Extract - Saline)**
**Batch Number: GLUC-2025-001**

| Animal Group | Number | 24-hr Score (Mean) | 48-hr Score (Mean) | Sensitization Rate (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Test Group** | 20 | 0.0 | 0.0 | 0% |
| **Negative Control**| 10 | 0.0 | 0.0 | 0% |
| **Positive Control***| 10 | 2.8 | 2.6 | 100% |
*\*Positive Control: 1-Chloro-2,4-dinitrobenzene (DNCB) 0.1%*

### **Table 4.2: Summary of Sensitization Scores (Non-Polar Extract - Cottonseed Oil)**
**Batch Number: GLUC-2025-002**

| Animal Group | Number | 24-hr Score (Mean) | 48-hr Score (Mean) | Sensitization Rate (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Test Group** | 20 | 0.05* | 0.0 | 0% |
| **Negative Control**| 10 | 0.0 | 0.0 | 0% |
| **Positive Control** | 10 | 2.9 | 2.7 | 100% |
*\*One animal showed grade 1 erythema at 24h, which resolved by 48h. Investigated as mechanical irritation.*

---

## **5.0 QUANTITATIVE RISK ASSESSMENT (QRA) FOR SENSITIZERS**

While no sensitization was observed in vivo, Google Health Sciences conducted a chemical characterization (ISO 10993-18) to identify potential trace sensitizers (e.g., residual monomers, antioxidants).

### **5.1 Calculation of Margin of Safety (MoS)**
For a hypothetical leachable "Substance X" (e.g., Irganox 1010) identified via LC-MS:

$$MoS = \frac{NEL (No Expected Effect Level)}{EED (Estimated Exposure Dose)}$$

*   **NEL for sensitization:** Derived from LLNA (Local Lymph Node Assay) EC3 values.
*   **EED:** $0.05 \mu g/day$ (based on worst-case migration studies of GLUC-2025-112).
*   **Calculation:**
    $$MoS = \frac{500 \mu g/cm^2}{0.005 \mu g/cm^2} = 100,000$$

Since the MoS is significantly > 1, the risk of sensitization from extractable/leachable components is deemed negligible.

---

## **6.0 STATISTICAL ANALYSIS**

The sensitization rate was analyzed using the **Fisher’s Exact Test** to determine if the frequency of positive responses in the test group differed significantly from the negative control group.

*   **Hypothesis:** $H_0: P_{test} = P_{control}$ vs $H_a: P_{test} > P_{control}$
*   **Alpha Level:** 0.05
*   **P-Value Result:** 1.000 (No statistical difference)

---

## **7.0 CONCLUSION**

Under the conditions of the Magnusson and Kligman Guinea Pig Maximization Test, the extracts of the **Glucogen-XR** delivery system (Batch GLUC-2025-XXX) did not elicit a sensitization response. The sensitization rate was 0%, and the Mean Grade at 24 and 48 hours was < 1.0. Therefore, the device components are classified as **non-sensitizers** and meet the requirements of **ISO 10993-10** and **FDA 21 CFR Part 58**.

### **8.0 REFERENCES**
1.  **ISO 10993-10:2021:** Biological evaluation of medical devices — Part 10: Tests for skin sensitization.
2.  **ASTM F720-13:** Standard Practice for Testing Guinea Pigs for Contact Allergens: Guinea Pig Maximization Test.
3.  **Kligman AM (1966):** The identification of contact allergens by human assay. III. The maximization test. *Journal of Investigative Dermatology*.
4.  **Google Internal Report:** GHS-BIO-2024-089 (Biocompatibility Validation for Glucogen-XR).

---
**Document End - Section: Sensitization**
**Authorized by:** Google Health Sciences Regulatory Affairs Division
**Date:** 22-May-2025
**Document ID:** GHS-REG-M3-73-001

---

## Irritation

# MODULE 3: QUALITY - DEVICE CONSTITUENT PART DATA
## SECTION: 3.2.R REGIONAL INFORMATION - BIOCOMPATIBILITY
### SUBSECTION: 3.2.R.4.2 IRRITATION EVALUATION

---

#### 1.0 OVERVIEW AND SCOPE
This subsection details the comprehensive Irritation assessment of the Glucogen-XR (glucapeptide extended-release) delivery system, a proprietary electromechanical autoinjector designed for subcutaneous administration. The assessment was performed in strict accordance with **ISO 10993-1:2018**, *Biological evaluation of medical devices — Part 1: Evaluation and testing within a risk management process*, and **ISO 10993-23:2021**, *Tests for irritation*.

As Glucogen-XR is categorized as a **Surface Device, Skin Contact, Prolonged Exposure (>24h to 30 days cumulative)** and a **达到 Externally Communicating Device, Tissue/Bone/Dentin Contact, Limited Exposure (<24h)** due to the fluid path and needle assembly, irritation potential must be evaluated for both the external housing (patient interface) and the internal fluid path (product interface).

#### 2.0 REGULATORY COMPLIANCE AND STANDARDS
The studies described herein were conducted at the Google Health Sciences Biocompatibility Center of Excellence (GHS-BCE) and GLP-compliant Contract Research Organizations (CROs). All procedures adhered to:
*   **OECD Principles of Good Laboratory Practice (GLP)** (as revised in 1997).
*   **21 CFR Part 58**, Good Laboratory Practice for Nonclinical Laboratory Studies.
*   **ISO 10993-10:2010**, *Tests for irritation and skin sensitization* (Historical reference for legacy data).
*   **ISO 10993-23:2021**, *Tests for irritation* (Current standard for primary data).
*   **USP <88>** *Biological Reactivity Test, In Vivo*.
*   **FDA Guidance**: *Use of International Standard ISO 10993-1, "Biological evaluation of medical devices - Part 1: Evaluation and testing within a risk management process"* (September 2023).

#### 3.0 TEST ARTICLE IDENTIFICATION AND CHARACTERIZATION
The test articles utilized in these studies represent the final, finished, sterilized (Gamma Radiation, 25-40 kGy) Glucogen-XR device.

**Table 3.2.R.4.2-1: Test Article Specifications for Irritation Testing**
| Parameter | Specification/Detail |
| :--- | :--- |
| **Product Name** | Glucogen-XR (glucapeptide extended-release) Autoinjector |
| **Batch Number(s)** | GLUC-2025-001, GLUC-2025-004, GLUC-2025-009 |
| **Device Classification** | Type B, Externally Communicating, Tissue Contact |
| **Materials of Construction** | Medical Grade Polycarbonate, 316L Stainless Steel, Bromobutyl Rubber |
| **Sterilization Method** | Gamma Irradiation (Cobalt-60) |
| **Sterility Assurance Level (SAL)** | 10^-6 |
| **Extraction Ratio** | 3 cm²/mL (Surface Area) or 0.2 g/mL (Mass) per ISO 10993-12 |

---

#### 4.0 IN VITRO SKIN IRRITATION (RECONSTRUCTED HUMAN EPIDERMIS - RHE)
In alignment with the 3Rs (Replacement, Reduction, Refinement), Google Health Sciences prioritized *in vitro* assessment using the RhE model prior to considering animal models.

##### 4.1 Test Method and Protocol (GHS-PROT-BIO-772)
The study utilized the **EpiDerm™ (EPI-200)** model, a reconstituted human epidermis consisting of normal, human-derived epidermal keratinocytes cultured to form a multilayered, highly differentiated model of the human epidermis.

**Protocol Steps:**
1.  **Extraction:** Test articles (GLUC-2025-001) were extracted in Polar (0.9% NaCl) and Non-polar (Sesame Oil) media for 72±2 hours at 37°C with continuous agitation (100 RPM).
2.  **Application:** 100 µL of the extract was applied topically to the RhE tissue surface.
3.  **Incubation:** Tissues were incubated for 18 hours at 37°C in a 5% CO2 atmosphere.
4.  **Rinsing:** Tissues were washed 15 times with Phosphate Buffered Saline (PBS) to remove any residual test material.
5.  **MTT Assay:** Tissues were transferred to a 24-well plate containing 0.3 mL of MTT solution (1 mg/mL) and incubated for 3 hours.
6.  **Extraction of Formazan:** The resulting blue formazan salt was extracted using 2 mL of isopropanol per well.
7.  **Quantification:** Optical density (OD) was measured at 570 nm.

##### 4.2 Acceptance Criteria
*   **Non-Irritant:** Mean tissue viability is > 50% of the negative control.
*   **Irritant:** Mean tissue viability is ≤ 50% of the negative control.

##### 4.3 Results (Study Report GHS-SR-2025-BIO-102)

**Table 3.2.R.4.2-2: In Vitro RhE Irritation Results**
| Extract Medium | Mean OD570 (± SD) | Percent Viability (%) | Result |
| :--- | :--- | :--- | :--- |
| **Negative Control (PBS)** | 1.842 ± 0.04 | 100.0% | N/A |
| **Positive Control (5% SDS)** | 0.092 ± 0.01 | 4.9% | Irritant |
| **GLUC-2025-001 (Saline)** | 1.798 ± 0.06 | 97.6% | **Non-Irritant** |
| **GLUC-2025-001 (Sesame Oil)**| 1.755 ± 0.08 | 95.3% | **Non-Irritant** |

---

#### 5.0 IN VIVO INTRACUTANEOUS REACTIVITY (IRRITATION) STUDY
To fulfill global regulatory requirements (specifically FDA 21 CFR 814 and PMDA requirements), an *in vivo* intracutaneous reactivity study was performed in New Zealand White rabbits to evaluate the potential of the device extracts to cause irritation.

##### 5.1 Experimental Design
*   **Species:** Rabbit (*Oryctolagus cuniculus*), New Zealand White.
*   **Number of Animals:** 3 per extract group.
*   **Route:** Intracutaneous injection.
*   **Extract Vehicles:** 
    *   0.9% Sodium Chloride (USP Phys. Saline)
    *   Sesame Oil (NF)
*   **Observation Period:** 24, 48, and 72 hours post-injection.

##### 5.2 Detailed Procedure
1.  **Preparation:** The dorsal hair of the rabbits was clipped 24 hours prior to the study.
2.  **Injections:** 0.2 mL of the test article extract (Batch GLUC-2025-004) was injected intracutaneously at five sites on the right side of each rabbit's spine. The vehicle control was injected at five sites on the left side.
3.  **Grading:** Sites were graded for erythema and edema according to the Draize scale.

**Table 3.2.R.4.2-3: Grading System for Intracutaneous Reactions**
| Reaction | Numerical Grading |
| :--- | :--- |
| **Erythema (and Eschar Formation)** | |
| No erythema | 0 |
| Very slight erythema (barely perceptible) | 1 |
| Well-defined erythema | 2 |
| Moderate to severe erythema | 3 |
| Severe erythema (beet redness) to slight eschar formation | 4 |
| **Edema Formation** | |
| No edema | 0 |
| Very slight edema (barely perceptible) | 1 |
| Slight edema (edges of area well defined) | 2 |
| Moderate edema (raised approx. 1 mm) | 3 |
| Severe edema (raised > 1 mm and extending beyond area) | 4 |

##### 5.3 Calculation of Primary Irritation Index (PII)
The PII is calculated by totaling the scores for erythema and edema at 24, 48, and 72 hours for both the test and control sites. The difference between the test and control averages determines the irritation score.

$$ \text{Mean Score} = \frac{\sum (\text{Erythema} + \text{Edema})}{\text{Number of Observations}} $$
$$ \text{Final Score} = \text{Mean Test Score} - \text{Mean Control Score} $$

##### 5.4 Results (Study Report GHS-SR-2025-BIO-449)

**Table 3.2.R.4.2-4: Summary of Intracutaneous Reactivity Scores (GLUC-2025-004)**
| Animal ID | Vehicle | Test Avg (24/48/72h) | Control Avg (24/48/72h) | Difference |
| :--- | :--- | :--- | :--- | :--- |
| R-1021 | Saline | 0.0 / 0.0 / 0.0 | 0.0 / 0.0 / 0.0 | 0.0 |
| R-1022 | Saline | 0.0 / 0.0 / 0.0 | 0.0 / 0.0 / 0.0 | 0.0 |
| R-1023 | Saline | 0.1 / 0.0 / 0.0 | 0.0 / 0.0 / 0.0 | 0.1 |
| **Mean Saline** | | **0.03** | **0.00** | **0.03** |
| R-1024 | Sesame Oil | 0.2 / 0.1 / 0.0 | 0.1 / 0.0 / 0.0 | 0.1 |
| R-1025 | Sesame Oil | 0.1 / 0.1 / 0.0 | 0.1 / 0.0 / 0.0 | 0.1 |
| R-1026 | Sesame Oil | 0.2 / 0.2 / 0.1 | 0.2 / 0.1 / 0.0 | 0.1 |
| **Mean Oil** | | **0.15** | **0.08** | **0.07** |

**Conclusion:** The requirements of the test were met. The difference between the mean score of the test extract and the control vehicle was < 1.0 for both vehicles. Glucogen-XR is considered a **non-irritant**.

---

#### 6.0 EXTRACTABLES AND LEACHABLES (E&L) CORRELATION TO IRRITATION
Chemical characterization (ISO 10993-18) was performed on the Glucogen-XR device to identify any potential chemical irritants that might leach during the extended shelf-life.

##### 6.1 Toxicological Threshold of Concern (TTC) for Irritation
The Analytical Evaluation Threshold (AET) was set at 1.5 µg/day based on the chronic dosing regimen of Glucogen-XR.

**Table 3.2.R.4.2-5: Identified Leachables with Irritation Potential**
| Compound | Source | Max Observed Level (µg/device) | Irritation Potential (Q)SAR | TTC Margin of Safety |
| :--- | :--- | :--- | :--- | :--- |
| **Stearic Acid** | Housing Polymer | 0.85 | Negligible | > 100x |
| **Irganox 1010** | Fluid Path Polymer | 0.42 | Negligible | > 100x |
| **Polydimethylsiloxane (PDMS)** | Syringe Lubricant | 12.4 | Low | > 10x |

*Analytical Method: GC-MS and LC-MS/MS. Extraction in Isopropanol/Water (50/50) at 40°C for 24 hours (Batch GLUC-2025-009).*

---

#### 7.0 CLINICAL IRRITATION DATA (PHASE III SUMMARY)
During the Phase III clinical trial (**Protocol GHS-GLUC-003**), "A 52-Week Randomized, Double-Blind Study of Glucogen-XR," Injection Site Reactions (ISRs) were meticulously monitored.

##### 7.1 Clinical Scoring Scale
Injection sites were monitored for:
1.  **Erythema** (Redness)
2.  **Induration** (Hardness)
3.  **Pain** (Visual Analog Scale - VAS)
4.  **Pruritus** (Itching)

##### 7.2 Results Summary (N=1,240)
The incidence of irritation-related events was comparable to the placebo autoinjector arm.

**Table 3.2.R.4.2-6: Summary of Injection Site Irritation in Human Subjects**
| Adverse Event (ISRs) | Glucogen-XR (N=620) | Placebo (N=620) | P-value |
| :--- | :--- | :--- | :--- |
| Mild Erythema | 2.1% (n=13) | 1.9% (n=12) | 0.84 |
| Moderate Erythema | 0.3% (n=2) | 0.2% (n=1) | 0.56 |
| Pain (VAS > 30mm) | 1.2% (n=7) | 1.1% (n=7) | 1.00 |
| Pruritus | 0.8% (n=5) | 0.6% (n=4) | 0.75 |

---

#### 8.0 POST-MARKETING SURVEILLANCE STRATEGY FOR IRRITATION
Google Health Sciences will implement a digital monitoring system via the Glucogen-XR Companion App. Patients will be prompted to report any localized skin changes. Data will be aggregated in the Google Cloud Life Sciences Safety Database and analyzed quarterly for signal detection related to device-material-induced irritation.

#### 9.0 CONCLUSION
Based on the results of *in vitro* RhE testing, *in vivo* intracutaneous reactivity studies in rabbits, chemical characterization, and Phase III clinical trial data, the Glucogen-XR autoinjector (Batch series GLUC-2025) does not pose a risk of clinically significant irritation. The device is biocompatible for its intended use and duration of contact.

---
**References:**
1. ISO 10993-1:2018 - *Evaluation and testing within a risk management process.*
2. ISO 10993-23:2021 - *Tests for irritation.*
3. USP <88> *Biological Reactivity Test, In Vivo.*
4. Internal GHS Document: BIO-2025-TECH-004 - *Material Risk Assessment for Glucogen-XR.*

---

# Mechanical Testing

## Dose Accuracy

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.R: REGIONAL INFORMATION – DEVICE DOSSIER
### DOCUMENT ID: GHS-GLUCXR-M3-MECH-004
### SUBSECTION: DOSE ACCURACY AND VOLUMETRIC PERFORMANCE

---

#### 1.0 INTRODUCTION AND SCOPE

This subsection provides comprehensive data, statistical analysis, and methodological validation regarding the **Dose Accuracy** of the Glucogen-XR (glucapeptide extended-release) pre-filled, multi-dose pen injector (The "GHS-PDI-V4"). As a Class II combination product constituent, the device must demonstrate high precision and accuracy in the delivery of a viscous, peptide-loaded extended-release formulation.

The Glucogen-XR delivery system is designed to deliver a fixed volume of 0.50 mL (5.0 mg of glucapeptide) per weekly injection from a 2.0 mL reservoir. The dose accuracy testing described herein confirms that the device meets the requirements of **ISO 11608-1:2022** (Needle-based injection systems for medical use — Requirements and test methods) and the **FDA Guidance for Industry: Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013)**.

#### 2.0 REGULATORY COMPLIANCE AND STANDARDS

The Dose Accuracy evaluation of Glucogen-XR was conducted in accordance with the following regulatory frameworks and international standards:

1.  **ISO 11608-1:2022**: Needle-based injection systems for medical use — Part 1: Requirements and test methods.
2.  **FDA 21 CFR Part 820**: Quality System Regulation (Design Controls).
3.  **USP <905>**: Uniformity of Dosage Units (adapted for delivered volume).
4.  **ISO 13485:2016**: Medical devices — Quality management systems.
5.  **ICH Q8(R2)**: Pharmaceutical Development.
6.  **ICH Q2(R2)**: Validation of Analytical Procedures.

#### 3.0 TEST SYSTEM AND EQUIPMENT

Testing was performed at the Google Health Sciences Device Characterization Laboratory (Facility ID: GHS-SSF-3000).

| Equipment Description | Manufacturer | Model Number | Asset ID | Calibration Due Date |
| :--- | :--- | :--- | :--- | :--- |
| Analytical Balance (6-place) | Mettler Toledo | XPR6UD5 | GHS-BAL-094 | 15-OCT-2025 |
| Environmental Chamber | Caron | 7400-25 | GHS-ENV-012 | 22-JAN-2026 |
| Automated Dose Actuator | ZwickRoell | Z0.5 / ProLine | GHS-MECH-44 | 11-MAR-2025 |
| Digital Thermohydrometer | Vaisala | HMT330 | GHS-MET-009 | 04-DEC-2025 |
| Evaporation Trap | Mettler Toledo | ErgoClip | GHS-ACC-221 | N/A |

#### 4.0 FORMULATION CHARACTERISTICS FOR TESTING

Dose accuracy is significantly influenced by the rheological properties of the Glucogen-XR formulation.

*   **Active Ingredient:** Glucapeptide (GLP-1 RA)
*   **Concentration:** 10 mg/mL
*   **Viscosity:** 18.5 cP ± 2.0 cP at 25°C
*   **Density ($\rho$):** 1.034 g/cm³ (Used for gravimetric to volumetric conversion)
*   **Surface Tension:** 42 mN/m

#### 5.0 DOSE ACCURACY PROTOCOL (GHS-SOP-MECH-088)

##### 5.1 Objective
To verify that the GHS-PDI-V4 device delivers the intended dose of 0.50 mL within the allowable tolerance of ±5% ($0.475\text{ mL} - 0.525\text{ mL}$) across the life of the pen (4 doses).

##### 5.2 Test Conditions
Testing was conducted under three environmental conditions per ISO 11608-1:
1.  **Standard Atmosphere (Tset):** $23^\circ\text{C} \pm 2^\circ\text{C}$, $50\% \pm 5\%\text{ RH}$.
2.  **Cold Storage (Tcold):** $5^\circ\text{C} \pm 3^\circ\text{C}$.
3.  **Hot/Dry Atmosphere (Thot):** $40^\circ\text{C} \pm 2^\circ\text{C}$, $\leq 25\%\text{ RH}$.

##### 5.3 Gravimetric Method Calculation
The delivered volume ($V_d$) is calculated using the following formula:
$$V_d = \frac{W_{after} - W_{before}}{\rho \times Z}$$
Where:
*   $W$: Weight of the collection vessel.
*   $\rho$: Density of the Glucogen-XR formulation ($1.034\text{ g/mL}$).
*   $Z$: Correction factor for air buoyancy (per ISO 11608-1 Annex C).

##### 5.4 Sample Size
For each batch, $n = 60$ devices were tested (20 per environmental condition), totaling 240 individual dose measurements per batch.

#### 6.0 BATCH SUMMARY DATA: GLUC-2025-001 THROUGH GLUC-2025-003

The following tables summarize the results of the Dose Accuracy verification for the three primary registration batches.

##### Table 1: Dose Accuracy Results – Batch GLUC-2025-001 (Standard Conditions $23^\circ\text{C}$)
*Target Dose: 0.500 mL | Tolerance: 0.475 – 0.525 mL*

| Device ID | Dose 1 (mL) | Dose 2 (mL) | Dose 3 (mL) | Dose 4 (mL) | Mean Error (%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GHS-001-01 | 0.501 | 0.499 | 0.502 | 0.500 | +0.10% |
| GHS-001-02 | 0.495 | 0.498 | 0.497 | 0.496 | -0.70% |
| GHS-001-03 | 0.508 | 0.505 | 0.506 | 0.507 | +1.30% |
| GHS-001-04 | 0.492 | 0.494 | 0.493 | 0.491 | -1.50% |
| GHS-001-05 | 0.500 | 0.501 | 0.500 | 0.500 | +0.05% |
| ... | ... | ... | ... | ... | ... |
| **Mean** | **0.4992** | **0.4994** | **0.4988** | **0.4988** | **-0.15%** |
| **Std Dev**| **0.0042** | **0.0038** | **0.0045** | **0.0041** | **N/A** |
| **Max** | **0.509** | **0.506** | **0.508** | **0.507** | **+1.80%** |
| **Min** | **0.489** | **0.491** | **0.488** | **0.489** | **-2.40%** |

##### Table 2: Statistical Tolerance Interval Analysis (ISO 11608-1)
Calculated using a 95% confidence level for 99% of the population ($k$-factor $= 2.566$ for $n=60$).

| Batch Number | Mean Delivered (mL) | Std Dev ($s$) | Lower Limit ($x - ks$) | Upper Limit ($x + ks$) | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001| 0.4991 | 0.0041 | 0.4886 | 0.5096 | PASS |
| GLUC-2025-002| 0.5004 | 0.0043 | 0.4893 | 0.5115 | PASS |
| GLUC-2025-003| 0.4987 | 0.0045 | 0.4871 | 0.5103 | PASS |

#### 7.0 DOSE ACCURACY UNDER STRESS CONDITIONS (TCOLD & THOT)

Extensive testing was performed to ensure the mechanical linkages (drive screw, lead nut, and ratchet) maintain integrity despite thermal expansion/contraction.

##### 7.1 Cold Storage Performance ($5^\circ\text{C}$)
Under cold conditions, the viscosity of the Glucogen-XR formulation increases to 24.2 cP.
*   **Result:** The drive spring (GHS-SPR-44) provided sufficient torque to overcome increased plunger friction ($f_{friction} = 8.2\text{ N}$).
*   **Dose Accuracy Mean ($n=60$):** 0.496 mL.
*   **Coefficient of Variation (CV):** 1.2%.

##### 7.2 Hot/Dry Performance ($40^\circ\text{C}$, 25% RH)
Potential for fluid expansion and evaporation was assessed.
*   **Result:** Thermal expansion of the COC (Cyclic Olefin Copolymer) cartridge was negligible ($<0.02\text{ mm}$).
*   **Dose Accuracy Mean ($n=60$):** 0.504 mL.
*   **CV:** 0.9%.

#### 8.0 DOSE ACCURACY AT END-OF-LIFE (LAST DOSE PHENOMENON)

A critical assessment was performed on the 4th (final) dose. In many pen injectors, "last dose accuracy" can be compromised by the plunger making contact with the cartridge shoulder.

**Protocol GHS-LAST-09:**
1.  Dose 1-3 were discharged into a waste container.
2.  The 4th dose was discharged into a tared 5 mL vial.
3.  The residual volume in the cartridge was measured via micro-CT scanning.

**Results for Batch GLUC-2025-002 (Last Dose):**
*   **Mean Volume:** 0.502 mL.
*   **Standard Deviation:** 0.003 mL.
*   **Residual Volume:** 0.045 mL (Safety margin to prevent air injection).

#### 9.0 MECHANICAL FACTORS INFLUENCING DOSE ACCURACY

##### 9.1 Plunger Travel Precision
The GHS-PDI-V4 utilizes a fine-pitch drive screw ($0.75\text{ mm/rev}$). The dose of 0.50 mL corresponds to a linear travel of $6.25\text{ mm}$.
*   **Tolerance of Screw Pitch:** $\pm 0.005\text{ mm}$.
*   **Rotational Accuracy of Dial:** $\pm 0.5$ degrees.

##### 9.2 Break-Loose and Glide Forces
Dose accuracy is maintained by ensuring the glide force remains constant throughout the injection.
*   **Average Glide Force:** $12.4\text{ N}$.
*   **Peak Break-loose Force:** $15.1\text{ N}$.
*   **Spring Force at End of Stroke:** $19.8\text{ N}$ (Ensures 1.5x safety factor over glide force).

#### 10.0 FAILURE MODE AND EFFECTS ANALYSIS (FMEA) – DOSE ACCURACY

| Failure Mode | Root Cause | Mitigation | RPN (Risk Priority) |
| :--- | :--- | :--- | :--- |
| Under-dosing | Plunger stiction | Siliconization optimization (USP <1664>) | 12 (Low) |
| Over-dosing | Mechanical backlash | Zero-clearance ratchet design | 9 (Low) |
| No Dose | Drive screw jam | 100% vision inspection during assembly | 4 (Negligible) |

#### 11.0 CONCLUSION

The dose accuracy testing for Glucogen-XR (GLUC-2025-001/002/003) demonstrates robust performance. All batches met the pre-defined acceptance criteria of $0.50\text{ mL} \pm 5\%$ with a high degree of statistical confidence ($P=0.99, C=0.95$). The device is suitable for its intended use in the delivery of the weekly 5.0 mg dose of Glucogen-XR.

---
**END OF SECTION**
**Approved by:**
*Dr. Elizabeth Chen, Head of Device Engineering, Google Health Sciences*
*Date: 24-MAY-2025*
*Document Hash: 8842-XDI-992-GHS*

---

## Injection Force

# MODULE 3.2.R: REGIONAL INFORMATION – DEVICE CONSTITUENT PART
## SECTION: MECHANICAL TESTING AND CHARACTERIZATION
### SUBSECTION: 3.2.R.1.4.2 INJECTION FORCE ANALYSIS (GLUC-2025-SERIES)

---

#### 1.4.2.1 Executive Summary of Injection Force Characterization
The injection force profile for the Glucogen-XR (glucapeptide extended-release) pre-filled autoinjector system represents a critical quality attribute (CQA) for the delivery system. As a long-acting GLP-1 receptor agonist formulated in a high-viscosity, non-Newtonian carrier system, Glucogen-XR requires precise mechanical actuation to ensure complete dose delivery within the labeled 10-second hold time. This section details the verification of glide force, break-loose force, and end-of-stroke impact force under ICH Q1A(R2) stability conditions using the final commercial device configuration (GHS-AI-V3).

The testing was conducted in accordance with **ISO 11608-1:2022** (Needle-based injection systems for medical use) and **ISO 11040-4** (Glass barrels for injectables). All testing was performed at the Google Health Sciences Device Characterization Laboratory in South San Francisco, CA.

---

#### 1.4.2.2 Technical Specifications and Requirements
The Glucogen-XR autoinjector is designed to deliver 1.0 mL of a 25 mg/mL peptide solution. Due to the extended-release microsphere suspension technology, the dynamic viscosity (η) of the drug product is 12.5 cP ± 2.0 cP at 25°C.

**Table 1: Design Input Requirements for Injection Force**
| Parameter ID | Requirement Description | Target Specification | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| DIR-MECH-01 | Initial Break-loose Force (F_bl) | < 15.0 N | Max ≤ 20.0 N |
| DIR-MECH-02 | Mean Dynamic Glide Force (F_dg) | 8.0 N - 12.0 N | 5.0 N < F_dg < 18.0 N |
| DIR-MECH-03 | Peak Injection Force (F_max) | < 25.0 N | Max ≤ 30.0 N |
| DIR-MECH-04 | End-of-Stroke Force (F_eos) | > 35.0 N | 30.0 N - 60.0 N |
| DIR-MECH-05 | Injection Time (t_inj) | 6.0 - 8.0 sec | ≤ 10.0 seconds |

---

#### 1.4.2.3 Materials and Equipment
Testing utilized the following validated equipment and materials:

1.  **Universal Testing Machine (UTM):** ZwickRoell Z0.5 with a 50N Xforce HP load cell (ID: GHS-EQ-UTM-09).
2.  **Environmental Chamber:** Memmert ICH260 (ID: GHS-EQ-ENV-04) for thermal equilibration.
3.  **Data Acquisition:** testXpert III software version 5.1, sampling at 1000 Hz.
4.  **Test Fixture:** Custom 3D-printed GHS-AI-Hold-01 fixture to simulate human grip and ensure 90-degree vertical alignment.
5.  **Test Samples:** Glucogen-XR Drug Product (Batch Series GLUC-2025-001 through GLUC-2025-015).

---

#### 1.4.2.4 Detailed Test Protocol (GHS-SOP-DEV-442)

##### 1.4.2.4.1 Sample Preparation and Equilibration
1.  Retrieve samples from 2-8°C refrigerated storage.
2.  Equilibrate samples to 25°C ± 2°C for a minimum of 120 minutes.
3.  Verify equilibration using a non-contact infrared thermometer (Fluke 62 Max).
4.  Visually inspect the autoinjector for cracks, particulate matter, or compromised seals.

##### 1.4.2.4.2 Machine Setup
1.  Initialize the ZwickRoell UTM and perform a load cell zero-balance.
2.  Verify the crosshead speed is set to 150 mm/min (simulating the spring-driven velocity of the GHS-AI-V3 drive module).
3.  Install the GHS-AI-Hold-01 fixture.
4.  Set the software trigger to start recording at 0.5 N force.

##### 1.4.2.4.3 Test Execution
1.  Remove the safety cap from the Glucogen-XR device.
2.  Position the device vertically in the fixture.
3.  Lower the crosshead until the compression plate is 2mm above the device's firing button.
4.  Initiate the test sequence:
    *   **Phase A:** Activation force measurement (button press).
    *   **Phase B:** Break-loose force (plunger initial movement).
    *   **Phase C:** Glide force (steady-state delivery).
    *   **Phase D:** End-of-stroke (bottoming out of the plunger).
5.  Record the force-displacement curve.
6.  Extract the time-to-delivery data.

---

#### 1.4.2.5 Statistical Analysis Formulae
The following calculations were applied to the raw data (n=30 per batch):

**1. Mean Dynamic Glide Force ($\bar{F}_{dg}$):**
$$\bar{F}_{dg} = \frac{1}{d_2 - d_1} \int_{d_1}^{d_2} F(x) dx$$
*Where $d_1 = 5mm$ and $d_2 = 25mm$ of the total plunger travel.*

**2. Hagen-Poiseuille Correction for Viscous Flow:**
$$F_{theoretical} = 8 \cdot \eta \cdot L \cdot \frac{Q}{r^2} \cdot A_p$$
*Where:*
*   $\eta$ = Dynamic Viscosity (Pa·s)
*   $L$ = Needle length (m)
*   $Q$ = Volumetric flow rate ($m^3/s$)
*   $r$ = Needle internal radius (m)
*   $A_p$ = Area of the plunger (m²)

---

#### 1.4.2.6 Test Results and Data Tables

The following data represents the primary verification run for the Glucogen-XR commercial launch batches.

**Table 2: Injection Force Results (Batch: GLUC-2025-001)**
| Sample ID | Break-loose Force (N) | Mean Glide Force (N) | Max Force (N) | Injection Time (s) | Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001-01 | 12.4 | 9.8 | 13.1 | 6.8 | PASS |
| GLUC-2025-001-02 | 11.9 | 10.1 | 12.8 | 7.1 | PASS |
| GLUC-2025-001-03 | 13.2 | 9.5 | 14.5 | 6.5 | PASS |
| GLUC-2025-001-04 | 12.8 | 10.4 | 13.9 | 7.3 | PASS |
| GLUC-2025-001-05 | 14.1 | 11.2 | 15.2 | 7.8 | PASS |
| **Mean** | **12.88** | **10.20** | **13.90** | **7.10** | **N/A** |
| **Std Dev** | **0.86** | **0.65** | **0.95** | **0.49** | **N/A** |

**Table 3: Comparison Across Stability Batches (T=0, 25°C/60% RH)**
| Batch Number | Quantity (n) | Avg Break-loose (N) | Avg Glide Force (N) | 95% CI (Glide Force) |
| :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 30 | 12.8 | 10.2 | [9.8, 10.6] |
| GLUC-2025-002 | 30 | 13.1 | 10.5 | [10.1, 10.9] |
| GLUC-2025-003 | 30 | 12.5 | 10.1 | [9.7, 10.5] |
| GLUC-2025-004 | 30 | 14.2 | 11.4 | [10.8, 12.0] |
| GLUC-2025-005 | 30 | 13.8 | 10.9 | [10.4, 11.4] |

---

#### 1.4.2.7 Impact of Viscosity and Needle Gauge
The Glucogen-XR device utilizes a 27G thin-wall (TW) needle. Experimental data indicated that a 2.0 cP increase in viscosity (representing the upper limit of the drug product specification) resulted in a 1.8 N increase in mean glide force. 

**Table 4: Viscosity Sensitivity Analysis (Sample Set GLUC-2025-V-MOD)**
| Viscosity (cP) | Measured Force (N) | Delivery Time (s) | Needle Gauge |
| :--- | :--- | :--- | :--- |
| 10.5 | 8.4 | 5.9 | 27G TW |
| 12.5 (Target) | 10.2 | 7.1 | 27G TW |
| 14.5 | 12.1 | 8.4 | 27G TW |
| 16.0 | 14.8 | 9.8 | 27G TW |

---

#### 1.4.2.8 Conclusion
The injection force characterization for Glucogen-XR demonstrates that the device operates well within the established safety and efficacy margins. Even at the highest viscosity limit and the lowest temperature range (refrigerated use case), the injection force does not exceed 18.5 N, ensuring that the 25N-rated internal drive spring provides a safety factor of 1.35x. 

These data confirm that the GHS-AI-V3 autoinjector is capable of delivering the full 1.0 mL dose of Glucogen-XR effectively, minimizing the risk of under-dosing or device stall.

---
**Footnotes & References:**
1.  *ISO 11608-1:2022, Needle-based injection systems for medical use — Part 1: Requirements and test methods.*
2.  *FDA Guidance for Industry: Technical Considerations for Pen, Jet, and Related Injectors.*
3.  *USP <1382> Assessment of Elastomeric Component Surrogates Used in Pharmaceutical Packaging/Delivery Systems.*
4.  *Internal Report GHS-RPT-MECH-2024-088: Plunger Friction and Glide Force Verification.*

---

## Container Closure Integrity

# MODULE 3.2.P.7: CONTAINER CLOSURE SYSTEM
## SECTION: 3.2.P.7.2.3 MECHANICAL TESTING – CONTAINER CLOSURE INTEGRITY (CCI)
**Document ID:** GHS-GLUC-XR-CCI-001  
**Product:** Glucogen-XR (glucapeptide extended-release) Injection  
**Manufacturer:** Google Health Sciences, South San Francisco, CA  
**Regulatory Status:** NDA Submission (21 CFR § 314.50)  

---

### 1.0 EXECUTIVE SUMMARY
This section details the comprehensive Container Closure Integrity (CCI) testing program for Glucogen-XR (glucapeptide extended-release), a long-acting GLP-1 receptor agonist. Given the sensitive nature of the peptide therapeutic and the extended-release formulation, maintaining a microbial barrier and preventing oxygen/moisture ingress is critical to ensuring product stability and patient safety.

The CCI program for Glucogen-XR utilizes a multi-modal, risk-based approach in alignment with **USP <1207> Sterile Product Packaging—Integrity Evaluation**. Google Health Sciences (GHS) has transitioned from traditional probabilistic methods (e.g., dye ingress) to deterministic methods to achieve higher sensitivity, reproducibility, and quantitative data. This report covers the validation of High Voltage Leak Detection (HVLD) and Vacuum Decay, as well as the correlation to microbial challenge studies.

---

### 2.0 REGULATORY COMPLIANCE AND STANDARDS
The studies described herein were conducted in accordance with the following regulatory frameworks and industry standards:

1.  **USP <1207.1>:** Package Integrity Testing in the Product Life Cycle.
2.  **USP <1207.2>:** Package Integrity Leak Test Technologies.
3.  **FDA Guidance for Industry:** Container and Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol for Sterile Products (2008).
4.  **ICH Q8(R2):** Pharmaceutical Development.
5.  **ICH Q9:** Quality Risk Management.
6.  **ISO 11040-4:** Prefilled Syringes – Part 4: Glass barrels for injectables and sterilized sub-assembled syringes ready for filling.
7.  **ASTM F2338-09:** Standard Test Method for Non-Destructive Detection of Leaks in Packages by Vacuum Decay Method.

---

### 3.0 SYSTEM DESCRIPTION
The Glucogen-XR container closure system (CCS) consists of a 1.0 mL Long Type I Borosilicate Glass Pre-filled Syringe (PFS), integrated with a 27G x 1/2" staked needle, a Fluorotec-coated bromobutyl plunger stopper, and a rigid needle shield (RNS).

#### Table 3.1: Component Specifications
| Component | Material | Manufacturer | Part Number |
| :--- | :--- | :--- | :--- |
| **Syringe Barrel** | Type I Borosilicate Glass | SCHOTT AG | syr-1ml-L-GHS |
| **Plunger Stopper** | Bromobutyl Rubber (Fluorotec coated) | West Pharmaceutical | W-4023-45 |
| **Rigid Needle Shield** | Synthetic Isoprene / Polypropylene | Aptar Pharma | RNS-772-GHS |
| **Adhesive** | UV-Cured Acrylate | Henkel Loctite | 4307-UV |

---

### 4.0 DETERMINISTIC METHOD 1: VACUUM DECAY (ASTM F2338)
Vacuum decay is utilized as the primary non-destructive leak detection method for the Glucogen-XR PFS during stability studies and routine IPC.

#### 4.1 Method Principle
The test syringe is placed in a custom-machined evacuation chamber closely matching the syringe geometry to minimize dead space. A vacuum is pulled to a target pressure ($P_{target} = 500 \text{ mbar}$). The system is isolated, and the pressure rise ($\Delta P$) is monitored over a predetermined time interval. A leak is identified if the pressure rise exceeds the calculated threshold based on the Maximum Allowable Leakage Limit (MALL).

#### 4.2 Statistical Basis for MALL
The MALL for Glucogen-XR was established based on the molecular size of the glucapeptide and the viscosity of the extended-release matrix. 
*   **Target MALL:** $10^{-6} \text{ mbar}\cdot\text{L/s}$
*   **Equivalent Hole Size:** $\sim 0.2 \mu\text{m}$ to $0.5 \mu\text{m}$ nominal diameter.

#### 4.3 Protocol GHS-VAC-2025-01: Validation Procedure
1.  **Positive Control Generation:** Micro-channels were laser-drilled into five glass barrels (GLUC-2025-PC-01 through 05) with diameters of $2 \mu\text{m}, 5 \mu\text{m}$, and $10 \mu\text{m}$.
2.  **Negative Control:** 50 units of pristine PFS filled with placebo (Batch GLUC-2025-NC).
3.  **Procedure:** Each unit is placed in the Pfeiffer Vacuum OmniControl leak tester.

#### Table 4.1: Vacuum Decay Validation Results
| Sample ID | Leak Size ($\mu\text{m}$) | $\Delta P$ (Pa) | Result |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-NC-01** | N/A (Pristine) | 1.2 | PASS |
| **GLUC-2025-NC-02** | N/A (Pristine) | 0.9 | PASS |
| **GLUC-2025-PC-01** | 2.0 | 45.4 | FAIL (Leak Detected) |
| **GLUC-2025-PC-02** | 5.0 | 112.8 | FAIL (Leak Detected) |
| **GLUC-2025-PC-03** | 10.0 | 480.1 | FAIL (Leak Detected) |

---

### 5.0 DETERMINISTIC METHOD 2: HIGH VOLTAGE LEAK DETECTION (HVLD)
HVLD is employed for 100% in-line inspection of the Glucogen-XR product during the primary packaging phase at the South San Francisco facility.

#### 5.1 Technical Specifications
*   **Equipment:** Nikka Denshi Pulse HVLD System (ID: GHS-HVLD-09).
*   **Voltage Range:** 15kV – 25kV.
*   **Rotation Speed:** 300 RPM.
*   **Probe Configuration:** Dual-electrode (Base and Needle Shield).

#### 5.2 Method Development for Glucapeptide Formulation
The extended-release formulation contains a high concentration of the peptide and specific excipients that increase the electrical conductivity of the fill compared to standard saline. This requires a precise calibration of the "Baseline Current" to avoid false positives.

**Calculation of Threshold:**
$$T = \mu_{baseline} + (k \cdot \sigma)$$
Where:
*   $T$ = Detection Threshold.
*   $\mu_{baseline}$ = Mean current of 1,000 pristine units (Batch GLUC-2025-BASE).
*   $k$ = Coverage factor (set to 6 for "Six Sigma" reliability).
*   $\sigma$ = Standard deviation of the baseline.

#### Table 5.1: HVLD Sensitivity Data (Batch GLUC-2025-VAL-01)
| Batch Number | Condition | Units Tested | Detection Rate |
| :--- | :--- | :--- | :--- |
| **GLUC-2025-S01** | Micro-crack (Neck) | 100 | 100% |
| **GLUC-2025-S02** | Pin-hole (Shoulder) | 100 | 100% |
| **GLUC-2025-S03** | Plunger Seating Gap | 100 | 99% |
| **GLUC-2025-S04** | Pristine (Negative) | 5000 | 0.02% (False Pos) |

---

### 6.0 MICROBIAL CHALLENGE CORRELATION
To validate the deterministic MALL, a physical-to-microbiological correlation study was performed (Study Report GHS-MICRO-2025-09).

#### 6.1 Study Design
PFS units with laser-drilled orifices (ranging from $0.1 \mu\text{m}$ to $10 \mu\text{m}$) were filled with Tryptic Soy Broth (TSB) and immersed in a concentrated suspension of *Brevundimonas diminuta* ($10^7$ CFU/mL) for 24 hours under a pressure cycling profile (Vacuum 0.5 bar for 30 mins, Pressure 2.0 bar for 30 mins).

#### 6.2 Results Summary
*   **$0.1 \mu\text{m}$ to $0.4 \mu\text{m}$:** No growth observed in 50/50 units after 14 days incubation.
*   **$0.5 \mu\text{m}$:** Growth observed in 2/50 units.
*   **$1.0 \mu\text{m}$ and above:** 100% growth.

**Conclusion:** The MALL of $10^{-6} \text{ mbar}\cdot\text{L/s}$ (correlating to $<0.5 \mu\text{m}$) provides a robust safety margin for maintaining sterility.

---

### 7.0 STABILITY DATA SUMMARY (CCI)
CCI is tested at Initial ($T=0$), 6, 12, 18, 24, and 36 months for the Glucogen-XR registration batches.

#### Table 7.1: CCI Stability Results (Storage: 5°C ± 3°C)
| Batch ID | Timepoint | Method | Units Sampled | Results |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | T=0 | Vacuum Decay | 30 | 30/30 PASS |
| **GLUC-2025-001** | T=12mo | Vacuum Decay | 30 | 30/30 PASS |
| **GLUC-2025-002** | T=0 | Vacuum Decay | 30 | 30/30 PASS |
| **GLUC-2025-002** | T=12mo | Vacuum Decay | 30 | 30/30 PASS |

---

### 8.0 DEVIATIONS AND INVESTIGATIONS
During the validation of Batch GLUC-2025-003, a single HVLD failure was noted at the plunger interface.
*   **Investigation ID:** INV-GHS-2025-042.
*   **Root Cause:** Silicone oil distribution was uneven at the barrel base, causing a temporary "break-loose" force variation that affected the HVLD sensor reading.
*   **Corrective Action:** Re-calibration of the siliconization sprayer nozzles in the SCHOTT glass line; updated SOP-GHS-MFG-440.

---

### 9.0 CONCLUSION
The Container Closure Integrity program for Glucogen-XR confirms that the selected CCS (PFS with Fluorotec stopper) provides a reliable microbial barrier. The use of HVLD for 100% inspection and Vacuum Decay for stability ensures that every unit reaching the patient maintains its quality attributes over its 36-month shelf life. All data generated meet or exceed USP <1207> and FDA requirements.

---
**End of Subsection**  
**Authorized by:**  
*Director of Regulatory Affairs, Google Health Sciences*  
*Date: 22-Oct-2025*

---

# Stability and Shelf Life

## Device Stability Testing

# MODULE 3: QUALITY (CHEMISTRY, MANUFACTURING, AND CONTROLS)
## SECTION 3.2.P.2.4: DEVICE STABILITY AND SHELF LIFE
### SUBSECTION: DEVICE STABILITY TESTING (COMBINATION PRODUCT)

---

#### 3.2.P.2.4.1. OVERVIEW AND STRATEGIC OBJECTIVE
This section delineates the comprehensive stability testing program for the Glucogen-XR (glucapeptide extended-release) pre-filled autoinjector (AI) system. Google Health Sciences (GHS) has designed this program to ensure the functional integrity, mechanical performance, and safety of the device components throughout the proposed shelf life of 24 months under refrigerated conditions (5°C ± 3°C) and a cumulative 30-day "in-use" period at room temperature (up to 30°C).

The Glucogen-XR delivery system is a Class II medical device constituent of a combination product. Stability testing complies with **21 CFR Part 4 (Current Good Manufacturing Practice Requirements for Combination Products)**, **ISO 11608-1:2022 (Needle-based injection systems for medical use)**, and **ICH Q1A(R2) (Stability Testing of New Drug Substances and Products)**.

#### 3.2.P.2.4.2. DEVICE CONSTITUENT DESCRIPTION
The device evaluated in this stability program is the **GHS-AI-v4.2 Single-Use Autoinjector**, which consists of:
1.  **Primary Container Closure System (CCS):** A 1.0 mL Long Type I Borosilicate Glass Syringe with a staked 29G thin-wall needle and a Fluorotec-coated chlorobutyl plunger stopper.
2.  **Drive Mechanism:** A high-tension medical-grade stainless steel power spring.
3.  **Housing Assembly:** Medical grade Polycarbonate/ABS blend.
4.  **Cap and Needle Shield:** Rigid Needle Shield (RNS) composed of synthetic polyisoprene.

#### 3.2.P.2.4.3. STABILITY PROTOCOL DESIGN AND STORAGE CONDITIONS
The stability program utilizes a matrixing and bracketing approach where applicable, covering three primary registration batches of the finished combination product.

##### Table 3.2.P.2.4-1: Storage Conditions for Device Stability
| Condition Identifier | Description | Temperature | Relative Humidity (RH) | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **STAB-LONG** | Long-term | 5°C ± 3°C | Ambient | Proposed storage condition |
| **STAB-ACC** | Accelerated | 25°C ± 2°C | 60% RH ± 5% | ICH/FDA requirement for excursions |
| **STAB-STRESS** | Stress/In-Use | 30°C ± 2°C | 75% RH ± 5% | Worst-case "in-use" scenario |
| **STAB-CYC** | Thermal Cycling | -20°C to 40°C | N/A | Transport simulation |

##### Table 3.2.P.2.4-2: Testing Frequency (Months)
| Condition | 0 | 3 | 6 | 9 | 12 | 18 | 24 | 36 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 5°C ± 3°C | X | X | X | X | X | X | X | X (Ext) |
| 25°C ± 2°C | X | X | X | X | - | - | - | - |
| 30°C ± 2°C | X | X | X | - | - | - | - | - |

---

#### 3.2.P.2.4.4. CRITICAL QUALITY ATTRIBUTES (CQA) AND ACCEPTANCE CRITERIA
Device stability is assessed based on mechanical performance metrics. These tests are conducted on the fully assembled autoinjector after the specified storage duration.

##### Table 3.2.P.2.4-3: Device Performance Specifications
| Test Parameter | Test Method | Acceptance Criteria | Rationale |
| :--- | :--- | :--- | :--- |
| **Cap Removal Force** | GHS-TP-0045 (Instron) | 10.0 N to 35.0 N | Ensure ease of use vs. accidental removal |
| **Activation Force** | GHS-TP-0048 (Instron) | 15.0 N to 45.0 N | Prevent premature firing |
| **Dose Accuracy** | ISO 11608-1 (Gravimetric) | 0.50 mL ± 0.025 mL | Maintain therapeutic window |
| **Injection Time** | GHS-TP-0052 (Acoustic/Visual) | 5.0 s to 12.0 s | Patient comfort and dose completion |
| **Extended Needle Length** | GHS-TP-0055 (Caliper) | 5.0 mm to 8.0 mm | Ensure subcutaneous delivery |
| **Needle Guard Lock-out** | GHS-TP-0060 (Manual/Visual) | Secure Lock-out | Sharps injury protection (ISO 23908) |

---

#### 3.2.P.2.4.5. DETAILED DATA TABLES: BATCH GLUC-2025-001 (5°C ± 3°C)
The following table provides representative data from the first primary registration batch stored at the recommended storage temperature.

##### Table 3.2.P.2.4-4: Stability Data for Batch GLUC-2025-001 (Long-Term 5°C)
| Month | Test Date | Cap Removal (N) | Activation Force (N) | Delivered Mass (g) | Injection Time (s) | Needle Length (mm) | Lock-out Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T=0** | 15-JAN-2025 | 22.4 (σ=1.2) | 28.5 (σ=2.1) | 0.502 (σ=0.004) | 7.2 (σ=0.4) | 6.4 (σ=0.1) | PASS |
| **T=3** | 15-APR-2025 | 23.1 (σ=1.4) | 29.1 (σ=1.9) | 0.501 (σ=0.005) | 7.4 (σ=0.5) | 6.5 (σ=0.1) | PASS |
| **T=6** | 15-JUL-2025 | 22.8 (σ=1.1) | 27.9 (σ=2.3) | 0.499 (σ=0.003) | 7.3 (σ=0.3) | 6.4 (σ=0.1) | PASS |
| **T=12** | 15-JAN-2026 | 24.2 (σ=1.5) | 30.2 (σ=2.0) | 0.503 (σ=0.006) | 7.8 (σ=0.6) | 6.5 (σ=0.2) | PASS |
| **T=18** | 15-JUL-2026 | 23.9 (σ=1.3) | 29.8 (σ=1.8) | 0.500 (σ=0.004) | 7.6 (σ=0.4) | 6.4 (σ=0.1) | PASS |
| **T=24** | 15-JAN-2027 | 25.1 (σ=1.8) | 31.4 (σ=2.5) | 0.498 (σ=0.007) | 8.1 (σ=0.7) | 6.6 (σ=0.2) | PASS |

---

#### 3.2.P.2.4.6. ACCELERATED STABILITY ANALYSIS (BATCH GLUC-2025-002)
Accelerated testing (25°C/60% RH) is utilized to assess the impact of temperature excursions on device polymers and spring tension.

##### Table 3.2.P.2.4-5: Stability Data for Batch GLUC-2025-002 (Accelerated 25°C)
| Month | Test Date | Cap Removal (N) | Activation Force (N) | Delivered Mass (g) | Injection Time (s) | Breakdown Analysis |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T=0** | 02-FEB-2025 | 21.9 | 27.4 | 0.501 | 7.1 | No anomalies |
| **T=1** | 02-MAR-2025 | 22.5 | 27.8 | 0.502 | 7.2 | No anomalies |
| **T=3** | 02-MAY-2025 | 24.8 | 29.2 | 0.498 | 7.9 | Trace lubricant migration |
| **T=6** | 02-AUG-2025 | 26.5 | 32.1 | 0.497 | 8.5 | Normal aging observed |

**Statistical Evaluation (Arrhenius Equation Application):**
To predict long-term polymer degradation in the housing (PC/ABS blend), GHS applied the Arrhenius model:
$$k = A \exp\left(-\frac{E_a}{RT}\right)$$
Where:
- $k$ = Rate constant for creep/deformation
- $E_a$ = Activation energy (calculated at 75 kJ/mol for this polymer blend)
- $R$ = Gas constant (8.314 J/mol·K)
- $T$ = Absolute temperature (K)

Data suggests that even at 25°C, the device retains $>95\%$ mechanical integrity for 12 months, supporting a 24-month refrigerated shelf life.

---

#### 3.2.P.2.4.7. DETAILED TEST PROTOCOL: GHS-TP-0048 (ACTIVATION FORCE)
**Objective:** To measure the force required to initiate the injection sequence by pressing the autoinjector against the injection site.

**Equipment:**
- Instron 5942 Universal Testing System
- Custom Load Cell (500N)
- GHS-Fix-09 Injection Site Simulator (Shore A 30 durometer silicone)

**Procedure:**
1. **Acclimatization:** Remove $n=30$ devices from storage (5°C) and allow to equilibrate to 23°C ± 2°C for 60 minutes.
2. **Setup:** Mount the autoinjector vertically in the Instron pneumatic grip.
3. **Alignment:** Ensure the needle shield is centered over the simulated injection site.
4. **Compression:** Lower the crosshead at a rate of 100 mm/min.
5. **Data Capture:** Record the peak force (N) required to trigger the "click" mechanism.
6. **Reporting:** Calculate mean, standard deviation, and ensure no individual value exceeds 45.0 N.

---

#### 3.2.P.2.4.8. EXTRACTABLES AND LEACHABLES (E&L) STABILITY LINKAGE
The stability of the device is inextricably linked to the chemical compatibility of the drug product with the primary CCS. Over 24 months, GHS monitors for:
- **Tungsten levels:** Potential for protein aggregation (Specification: <500 ppb).
- **Silicone oil migration:** Assessment of "stiction" or increased break-loose force.
- **Plunger Leachable Profile:** Monitoring for 2-ethenyl-1,1-dimethyl-cyclohexane and other stopper-related monomers via GC-MS.

##### Table 3.2.P.2.4-6: Leachable Trends (Batch GLUC-2025-001)
| Timepoint | Total Organic Carbon (ppm) | Silicone Oil (mg/syringe) | pH Change |
| :--- | :--- | :--- | :--- |
| T=0 | <0.1 | 0.45 | 0.0 |
| T=12 | 0.22 | 0.42 | +0.1 |
| T=24 | 0.35 | 0.40 | +0.2 |

---

#### 3.2.P.2.4.9. MECHANICAL FATIGUE AND VIBRATION (ISO 11608-1:2022)
As part of the stability program, devices at the T=12 and T=24 month intervals are subjected to a "Transit Stress Simulation" (per ASTM D4169, Schedule I, Level II) prior to performance testing. This ensures that an "aged" device can still withstand the rigors of the global cold chain.

**Vibration Protocol:**
- **Random Vibration:** 0.52 Grms for 180 minutes per axis.
- **Drop Test:** 1.0-meter drop onto concrete (6 orientations).
- **Result:** 100% of devices from GLUC-2025-001 at T=24 passed subsequent dose accuracy testing.

---

#### 3.2.P.2.4.10. REGULATORY CONFORMANCE SUMMARY
The device stability data presented herein confirms that Glucogen-XR remains compliant with:
- **USP <381>:** Elastomeric Components in Injection.
- **USP <790>:** Visible Particulates in Injections.
- **ISO 11608-1 Section 7:** Design Verification and Robustness.

**Conclusion:**
The GHS-AI-v4.2 autoinjector demonstrates exceptional mechanical stability. There is no significant trend toward failure in activation force or dose accuracy. The 24-month shelf life is fully supported by the real-time data from three registration batches (GLUC-2025-001, 002, 003).

---
*End of Subsection 3.2.P.2.4.10*

---

## Functionality Over Time

# MODULE 3: QUALITY (DEVICE CONSTITUENT PART)
## SECTION 3.2.P.8: STABILITY AND SHELF LIFE
### SUBSECTION 3.2.P.8.3.4: FUNCTIONALITY OVER TIME

---

#### 3.2.P.8.3.4.1 Executive Summary
This subsection details the functionality and performance characteristics of the Glucogen-XR (glucapeptide extended-release) pre-filled autoinjector system over the intended shelf life. Pursuant to **21 CFR Part 4 (Regulation of Combination Products)** and **ISO 11608-1:2022 (Needle-based injection systems)**, Google Health Sciences has conducted a longitudinal assessment of the mechanical and delivery performance of the device constituent part.

The objective of these studies is to demonstrate that the delivery system maintains its safety, efficacy, and usability profiles under real-time (5°C ± 3°C) and accelerated (25°C ± 2°C / 60% RH) storage conditions. This section covers critical quality attributes (CQAs) including break-loose force, glide force, dose accuracy, and lockout mechanism reliability.

---

#### 3.2.P.8.3.4.2 Test Methodology and Analytical Protocols

Functionality testing was performed using a calibrated **MTS Criterion® Model 43 Electromechanical Universal Test System** (Equipment ID: GHS-EQ-MTS-09) equipped with a 100N load cell (Asset ID: LC-556).

##### 3.2.P.8.3.4.2.1 Protocol GHS-STAB-PRO-882: Mechanical Force Characterization
The following steps outline the procedure for assessing mechanical integrity during the stability program:

1.  **Acclimatization:** Samples are removed from the stability chambers and equilibrated to ambient temperature (20°C to 25°C) for a minimum of 4 hours.
2.  **Visual Inspection:** Each unit is inspected for cracks, fluid leakage, or signs of material degradation.
3.  **Break-loose Force (F_b):** The force required to initiate movement of the plunger stopper within the 1.0 mL Long Type I Borosilicate glass syringe.
4.  **Glide Force (F_g):** The mean force required to maintain constant movement of the plunger at a crosshead speed of 100 mm/min.
5.  **Activation Force:** The force required to trigger the autoinjector spring mechanism upon contact with the injection site simulator.
6.  **Injection Time:** The duration from mechanism trigger to the appearance of the "Dose Complete" indicator in the viewing window.

##### 3.2.P.8.3.4.2.2 Calculation of Dose Accuracy
Dose accuracy is determined gravimetrically using the following formula:
$$V_{delivered} = \frac{W_{after} - W_{before}}{\rho_{solution}}$$
Where:
*   $W_{after}$ = Weight of the collection vial after delivery.
*   $W_{before}$ = Weight of the collection vial before delivery.
*   $\rho_{solution}$ = Density of Glucogen-XR formulation ($1.042 \text{ g/cm}^3$ at 20°C).

The target delivery volume is $0.50 \text{ mL} \pm 5\%$.

---

#### 3.2.P.8.3.4.3 Longitudinal Data Tables: Real-Time Storage (5°C ± 3°C)

The following data represents Batch **GLUC-2025-001** through **GLUC-2025-005**, representing the primary stability registration lots manufactured at the South San Francisco facility.

##### Table 3.2.P.8.3.4-A: Mean Mechanical Performance - Batch GLUC-2025-001 (Storage: 5°C)

| Time Point (Months) | Break-loose Force (N) | Glide Force (N) | Activation Force (N) | Injection Time (sec) | Dose Accuracy (%) | Lockout Success |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **0 (Release)** | 5.2 ± 0.4 | 4.1 ± 0.3 | 12.4 ± 1.1 | 6.2 ± 0.5 | 99.8% | 100/100 |
| **3** | 5.3 ± 0.5 | 4.2 ± 0.3 | 12.5 ± 0.9 | 6.3 ± 0.4 | 99.7% | 100/100 |
| **6** | 5.5 ± 0.6 | 4.3 ± 0.4 | 12.8 ± 1.2 | 6.4 ± 0.6 | 99.5% | 100/100 |
| **9** | 5.7 ± 0.4 | 4.4 ± 0.5 | 13.1 ± 1.0 | 6.5 ± 0.5 | 99.4% | 100/100 |
| **12** | 5.9 ± 0.7 | 4.6 ± 0.4 | 13.4 ± 1.3 | 6.7 ± 0.7 | 99.2% | 100/100 |
| **18** | 6.1 ± 0.8 | 4.8 ± 0.5 | 13.8 ± 1.4 | 6.9 ± 0.8 | 99.0% | 100/100 |
| **24** | 6.4 ± 0.9 | 5.1 ± 0.6 | 14.2 ± 1.5 | 7.1 ± 0.9 | 98.8% | 100/100 |
| **36 (Target)** | 6.8 ± 1.1 | 5.4 ± 0.8 | 14.9 ± 1.8 | 7.4 ± 1.1 | 98.5% | 100/100 |

*Specifications: Break-loose Force < 15N; Glide Force < 10N; Injection Time < 10 sec; Dose Accuracy 95-105%.*

---

#### 3.2.P.8.3.4.4 Accelerated Stability Assessment (25°C ± 2°C / 60% RH)

Accelerated testing is utilized to predict the impact of temperature excursions and to establish a 6-month excursion limit for the drug-device combination.

##### Table 3.2.P.8.3.4-B: Accelerated Functionality Data - Batch GLUC-2025-003

| Time Point (Months) | Break-loose Force (N) | Glide Force (N) | Viscosity Change (cP) | Dose Accuracy (%) | Seal Integrity (dye leak) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | 5.1 | 4.0 | 22.4 | 99.9% | Pass |
| **1** | 5.8 | 4.5 | 22.6 | 99.6% | Pass |
| **2** | 6.4 | 5.1 | 23.1 | 99.2% | Pass |
| **3** | 7.2 | 5.9 | 23.8 | 98.7% | Pass |
| **6** | 8.9 | 7.4 | 25.1 | 97.4% | Pass |

**Observation:** Under accelerated conditions, a slight increase in break-loose force is observed. This is attributed to the "stiction" phenomenon between the FluroTec® coated stopper and the siliconized glass barrel. However, all values remain significantly below the fail-safe threshold of 20N, ensuring patient usability.

---

#### 3.2.P.8.3.4.5 Material Degradation and Extractables/Leachables (E&L) Over Time

Functionality is not merely mechanical; it is also chemical. Over the shelf life, the interaction between the Glucogen-XR formulation and the device components (needle shield, syringe barrel, plunger stopper) is monitored.

1.  **Needle Shield Integrity:** The RNS (Rigid Needle Shield) was tested for pull-off force.
    *   *Baseline:* 18.5N
    *   *Month 24:* 19.2N
    *   *Requirement:* 10N < Force < 35N.
2.  **Spring Constant Stability:** The 302 Stainless Steel power spring was evaluated for relaxation.
    *   *Initial Load:* 45.5N
    *   *24-Month Load:* 44.8N (1.5% relaxation, within the <5% allowable limit).

---

#### 3.2.P.8.3.4.6 Statistical Analysis of Force Profiles

To ensure the 36-month shelf life is robust, a **Regression Analysis** was performed on the Break-loose Force (BLF) data from three registration batches.

*   **Regression Equation:** $F_b(t) = 0.042(t) + 5.18$
*   **Correlation Coefficient ($R^2$):** 0.965
*   **Predicted 36-Month BLF:** 6.69N
*   **Upper 95% Confidence Interval (UCI):** 7.82N

Since the 95% UCI at 36 months is significantly lower than the specification limit of 15N, the device functionality is considered stable and suitable for the proposed shelf life.

---

#### 3.2.P.8.3.4.7 Conclusion

The cumulative data from real-time and accelerated stability studies for Glucogen-XR (GLUC-2025-XXX) demonstrate that the autoinjector constituent part performs consistently over the duration of its life cycle. There is no evidence of mechanical fatigue, spring relaxation, or polymer degradation that would compromise dose accuracy or user safety. The device remains compliant with **ISO 11608-1** and **USP <1381>** requirements for the duration of the 36-month refrigerated storage period.

---
**References:**
1.  *FDA Guidance: Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products (2013).*
2.  *ISO 11608-5:2022: Needle-based injection systems for medical use — Automated functions.*
3.  *GHS Internal Report: GHS-D-2024-V01: Material Characterization of 1.0mL Long Pre-filled Syringe Components.*

---

## Expiration Dating

### **3.2.P.8.3.1. EXPIRATION DATING AND SHELF-LIFE SPECIFICATION**

#### **1.0 Introduction and Scope**
This section provides the comprehensive scientific and statistical justification for the assigned expiration dating period for **Glucogen-XR (glucapeptide extended-release)**, a Type 2 Diabetes Mellitus therapeutic developed by **Google Health Sciences (GHS)**. The drug product is a complex GLP-1 receptor agonist formulated within a proprietary biodegradable microsphere matrix, delivered via a pre-filled, single-use autoinjector.

The expiration dating period, or shelf-life, is defined as the time interval during which the drug product is expected to remain within its approved specification, provided it is stored under the conditions defined on the container label. For Glucogen-XR, the primary shelf-life is established for the finished drug product (FDP) in its primary packaging (Type I Borosilicate Glass Syringe) and secondary packaging (GHS-AutoInject-V4 Device).

---

#### **2.0 Regulatory Framework and Compliance Standards**
The determination of the expiration date for Glucogen-XR follows a multi-faceted regulatory approach, integrating international quality standards and specific FDA requirements for biologics and combination products:

*   **ICH Q1A(R2):** Stability Testing of New Drug Substances and Products.
*   **ICH Q1E:** Evaluation of Stability Data (Statistical Analysis).
*   **ICH Q5C:** Quality of Biotechnological Products: Stability Testing of Biotechnological/Biological Products.
*   **USP <1049>:** Expiration Dating and Stability Testing of Photolabile Biological Products.
*   **FDA Guidance for Industry:** "Container Closure System Integrity Testing in Lieu of Sterility Testing as a Component of the Stability Protocol."
*   **21 CFR 211.137:** Expiration Dating requirements for finished pharmaceuticals.
*   **21 CFR 610.10:** Potency requirements for biological products.

---

#### **3.0 Assigned Expiration Period**
Based on the real-time stability data presented in Section 3.2.P.8.1 and the statistical extrapolations provided herein, Google Health Sciences has established the following expiration dating:

| Storage Condition | Assigned Shelf Life | Temperature Range | Humidity/Light Requirements |
| :--- | :--- | :--- | :--- |
| **Long-Term Storage (Primary)** | **36 Months** | 2°C to 8°C (36°F to 46°F) | Protect from light; Do not freeze |
| **In-Use / Patient Room Temp** | **28 Days** | Up to 30°C (86°F) | Protect from excessive heat/light |
| **Shipping / Excursion** | **72 Hours** | -5°C to 25°C | Validated per ISTA 7D standards |

---

#### **4.0 Stability Data Summary and Statistical Analysis**

##### **4.1 Batch Selection for Expiration Assignment**
The expiration date is supported by data from three primary registration batches manufactured at the **3000 Innovation Drive, South San Francisco** facility. These batches utilize the GHS-CHO-001 cell line and reflect the commercial-scale manufacturing process.

**Table 4.1: Registration Batches for Expiration Dating Support**
| Batch Number | Scale | Date of Manufacture | Site | Intended Use |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 2,000L (Commercial) | 12-JAN-2025 | GHS-SSF-Bldg 1 | Primary Stability |
| **GLUC-2025-002** | 2,000L (Commercial) | 18-JAN-2025 | GHS-SSF-Bldg 1 | Primary Stability |
| **GLUC-2025-003** | 2,000L (Commercial) | 02-FEB-2025 | GHS-SSF-Bldg 1 | Primary Stability |

##### **4.2 Statistical Extrapolation Methodology (ICH Q1E)**
Google Health Sciences employs a linear regression model to determine the 95% confidence limit for the quantitative assays (Potency and Purity). For a 36-month shelf-life, the lower one-sided 95% confidence limit for the potency assay must not intersect the lower specification limit (LSL) of 90.0% of label claim.

**The Regression Equation:**
$$Y = \beta_0 + \beta_1X + \epsilon$$
Where:
*   $Y$ = Predicted Assay Value
*   $\beta_0$ = Intercept (Initial Potency)
*   $\beta_1$ = Degradation Rate (Slope)
*   $X$ = Time (Months)

**Calculation of 95% Lower Confidence Interval (LCI):**
$$LCI = \hat{Y} - t_{0.05, n-2} \cdot SE \cdot \sqrt{1 + \frac{1}{n} + \frac{(X - \bar{X})^2}{\sum(X_i - \bar{X})^2}}$$

---

#### **5.0 Detailed Stability Results (Batch GLUC-2025-001)**
The following table provides a high-resolution look at the stability attributes used to justify the 36-month expiration date under refrigerated conditions (5°C ± 3°C).

**Table 5.1: 36-Month Real-Time Stability Data (GLUC-2025-001)**
| Test Parameter | Specification | T=0 (Initial) | T=12 Months | T=24 Months | T=36 Months (Proj) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Potency (Cell-based)** | 90.0% - 110.0% | 101.2% | 100.1% | 98.8% | 97.4% |
| **Purity (SEC-HPLC)** | ≥ 95.0% | 99.4% | 98.9% | 98.2% | 97.1% |
| **Deamidation (CEX)** | ≤ 5.0% | 0.4% | 0.8% | 1.1% | 1.6% |
| **Particulate Matter** | USP <788> Pass | Pass | Pass | Pass | Pass |
| **pH** | 6.8 ± 0.3 | 6.8 | 6.8 | 6.9 | 6.8 |
| **Sterility** | No Growth | No Growth | No Growth | No Growth | No Growth |
| **Device Break-loose** | ≤ 15.0 N | 4.2 N | 4.8 N | 5.5 N | 6.2 N |

---

#### **6.0 Protocols for Expiration Dating Extension**

Google Health Sciences reserves the right to extend the expiration date beyond 36 months based on the "Annual Stability Commitment." This protocol outlines the steps for post-approval shelf-life extension.

##### **Protocol GHS-QC-STAB-009: Extension of Expiry**
1.  **Selection:** One commercial batch per year is added to the long-term stability program.
2.  **Testing Frequency:** 0, 3, 6, 9, 12, 18, 24, 36, 48, 60 months.
3.  **Data Evaluation:**
    *   Compare the slope ($\beta_1$) of the new batch to the registration batches.
    *   Perform an Analysis of Covariance (ANCOVA) to determine if batches can be pooled.
4.  **Regulatory Filing:**
    *   Extensions up to 12 months based on real-time data: **CBE-30 (Changes Being Effected in 30 Days)**.
    *   Extensions based on new statistical models or significant process changes: **PAS (Prior Approval Supplement)**.

---

#### **7.0 Impact of Temperature Excursions on Expiration**
The expiration date is predicated on maintaining the "Cold Chain." However, GHS has conducted **Mean Kinetic Temperature (MKT)** studies to evaluate the impact of deviations.

**Formula for MKT:**
$$T_{mkt} = \frac{\Delta H / R}{-\ln \left( \frac{e^{-\Delta H / RT_1} + e^{-\Delta H / RT_2} + ... + e^{-\Delta H / RT_n}}{n} \right)}$$
*Where $\Delta H$ is the activation energy ($83.144 \text{ kJ/mol}$ for Glucogen-XR).*

**Excursion Allowance:**
*   **Up to 25°C:** A single excursion of no more than 72 hours does not shorten the 36-month shelf life.
*   **Above 30°C:** Excursions trigger a mandatory "Do Not Use" status and immediate disposal, as the glucapeptide structure undergoes rapid denaturation.

---

#### **8.0 Container Closure Integrity (CCI) and Expiration**
The expiration date is also constrained by the physical integrity of the GHS-AutoInject-V4 system.

1.  **Plunger Stopper Movement:** Over time, "stiction" (static friction) can increase due to silicone oil migration.
    *   *Limit:* Glucogen-XR remains viable as long as the glide force remains < 20 N.
2.  **Helium Leak Rate:** The pre-filled syringe is tested for helium leak rates at T=0 and T=36.
    *   *Specification:* $\leq 6.0 \times 10^{-10} \text{ Pa}\cdot\text{m}^3/\text{s}$.
3.  **Moisture Vapor Transmission Rate (MVTR):**
    *   Critical for the lyophilized component of the microsphere matrix.
    *   *Specification:* Weight loss < 0.5% over 36 months.

---

#### **9.0 Labeling and Identification of Expiry**
Each unit of Glucogen-XR is laser-etched with the expiration date and batch number on the device housing, in addition to the secondary carton label.

*   **Format:** YYYY-MM-DD
*   **Example:** 2028-01-12 (For GLUC-2025-001)
*   **Placement:** Lower quadrant of the autoinjector window, ensuring visibility is not obstructed by the drug inspection window.

---

#### **10.0 Conclusion**
The requested **36-month expiration date** for Glucogen-XR (glucapeptide extended-release) at 2°C to 8°C is supported by rigorous real-time stability data, conservative statistical modeling per ICH Q1E, and robust container closure integrity testing. The data demonstrates that Glucogen-XR maintains its critical quality attributes (CQA), including potency, purity, and device functionality, throughout the proposed shelf-life, ensuring patient safety and therapeutic efficacy.

---
**Footnotes & References:**
1. Google Health Sciences Internal Report GHS-RPT-2024-045: *Statistical Analysis of Glucapeptide Degradation Pathways.*
2. USP <1207> *Package Integrity Evaluation—Sterile Products.*
3. ICH Q1B *Photostability Testing of New Drug Substances and Products.*

---

# Labeling

## Device Labeling

# MODULE 3.2.R: REGIONAL INFORMATION – DEVICE CONSTITUENT PART LABELING

**Document Number:** GHS-GLUCXR-M3-LAB-001  
**Product:** Glucogen-XR (glucapeptide extended-release) Injection  
**Device Component:** GHS-Autoinjector Gen-II (Single-Use, Fixed-Dose)  
**Sponsor:** Google Health Sciences, a Division of Google Cloud Life Sciences  
**Date:** October 24, 2024  
**Status:** Final - Regulatory Submission Version  

---

## 3.2.R.1 Introduction to Device Labeling

This section provides comprehensive specifications, design outputs, and validation data for the labeling of the device constituent part of the Glucogen-XR (glucapeptide extended-release) combination product. In accordance with **21 CFR Part 801** (Labeling) and **21 CFR Part 4** (Regulation of Combination Products), this documentation ensures that the user interface, instructions for use (IFU), and physical container labeling mitigate the risk of medication errors and ensure the safe and effective administration of the GLP-1 receptor agonist.

The labeling strategy for Glucogen-XR is designed to comply with **FDA Guidance for Industry: Safety Considerations for Product Design to Minimize Medication Errors** and **ISO 11608-1:2022** (Needle-based injection systems for medical use).

---

## 3.2.R.2 Labeling Design Specifications and Technical Requirements

The labeling for the GHS-Autoinjector Gen-II is categorized into three distinct layers of interaction: the Immediate Container Label (attached to the pen), the Secondary Packaging Label (the carton), and the Instructions for Use (IFU) / Medication Guide.

### 3.2.R.2.1 Material Specifications for Physical Labels

Labels must maintain integrity under refrigerated storage conditions (2°C to 8°C) and during the duration of the patient's use at room temperature.

| Specification ID | Parameter | Requirement/Standard | Testing Method |
| :--- | :--- | :--- | :--- |
| MAT-LBL-001 | Substrate Material | 50-micron biaxially oriented polypropylene (BOPP) | ASTM D3330 |
| MAT-LBL-002 | Adhesive Performance | Permanent Acrylic (Medical Grade) - No migration | USP <661.1> |
| MAT-LBL-003 | Ink Durability | UV-curable, low-migration, smear-resistant | ASTM D5264 |
| MAT-LBL-004 | Legibility | Minimum 6-point font (Arial/Helvetica) | ANSI Z535.4 |
| MAT-LBL-005 | Sterilization Compatibility | Gamma Irradiation & Ethylene Oxide Stable | ISO 11137 / 11135 |

### 3.2.R.2.2 Calculation of Label Surface Area and Placement

The Glucogen-XR autoinjector has a cylindrical body with a diameter of 16.5 mm. To ensure 360-degree visibility while maintaining a transparent "viewing window" for the patient to inspect the drug product (per **USP <790>**), the following calculation was used:

$$A_{total} = \pi \times D \times L_{label}$$
Where $D = 16.5 \text{ mm}$ and $L_{label} = 65 \text{ mm}$.
Total surface area $A = 3367.7 \text{ mm}^2$.

The "Drug Inspection Window" must remain clear of adhesive and print.
Window Dimensions: $8 \text{ mm} \times 25 \text{ mm}$.
Net Printable Area: $3167.7 \text{ mm}^2$.

---

## 3.2.R.3 Detailed Labeling Content (Immediate Container)

The following table details the specific content printed on the autoinjector body for Batch Series **GLUC-2025-XXX**.

### Table 3.2.R.3-1: Physical Label Content Elements

| Element # | Item | Text / Graphical Requirement | Regulatory Basis |
| :--- | :--- | :--- | :--- |
| 1 | Proprietary Name | **Glucogen-XR** (Bold, Blue 286C) | 21 CFR 201.10 |
| 2 | Proper Name | (glucapeptide extended-release) injection | 21 CFR 201.10 |
| 3 | Dosage Strength | **2.0 mg / 0.5 mL** (Boxed, High Contrast) | 21 CFR 201.19 |
| 4 | Route of Admin | For Subcutaneous Use Only | 21 CFR 201.5 |
| 5 | Lot Number | Lot: GLUC-2025-001 (Example) | 21 CFR 211.130 |
| 6 | Expiry Date | EXP: YYYY-MM-DD | 21 CFR 201.17 |
| 7 | Manufacturer | Google Health Sciences, Mountain View, CA | 21 CFR 201.1 |
| 8 | Use Warning | Single-use only. Discard after one use. | ISO 11608-1 |

---

## 3.2.R.4 Instructions for Use (IFU) Protocol and Human Factors Validation

The IFU for Glucogen-XR (Document ID: GHS-IFU-V4.2) was developed using iterative **Formative Human Factors Testing**. It utilizes a "Step-Step-Check" architecture to prevent premature activation of the device.

### 3.2.R.4.1 Step-by-Step Injection Procedure (Labeling Content)

1.  **Preparation:** Remove from refrigerator. Wait 30 minutes. Verify the drug is clear and colorless through the window.
    *   *Rationale:* Mitigates risk of injection site pain and ensures product stability.
2.  **Site Selection:** Clean the abdomen, thigh, or back of the upper arm with an alcohol swab.
3.  **Cap Removal:** Pull the green cap straight off. Do not twist.
    *   *Critical Note:* Twisting may damage the internal needle shield mechanism (Risk ID: R-0042).
4.  **Placement:** Push the yellow base flat against the skin at a 90-degree angle.
5.  **Activation:** Press the top purple button until a "Click" is heard.
6.  **Verification:** Hold for 10 seconds. Observe the green plunger fill the window.
    *   *Mathematical Verification:* The 10-second hold ensures 99.9% of the 0.5 mL dose is delivered, accounting for spring force decay ($F_s = kx$).

---

## 3.2.R.5 Labeling Control and Manufacturing Verification

To ensure that every device in Batch **GLUC-2025-XXX** is labeled correctly, Google Health Sciences employs a 100% vision-inspection system.

### 3.2.R.5.1 Automated Inspection Protocol (AIP-772)

**Equipment:** Cognex In-Sight 8000 Series Vision System  
**Batch Reference:** GLUC-2025-001 through GLUC-2025-500  

1.  **OCR Verification:** The system performs Optical Character Recognition on the Lot and Expiry strings.
    *   *Failure Limit:* Any mismatch results in immediate pneumatic rejection of the unit.
2.  **Color Match:** Verification of the "Dosage Color Band" (Pantone 286C for 2.0mg).
3.  **Skew Detection:** Label skew must be $< 0.5$ degrees relative to the longitudinal axis of the pen.
4.  **Adhesion Integrity:** Check for bubbles or "flagging" (lifting edges).

### Table 3.2.R.5.1: Labeling Accuracy Results (Validation Run GLUC-2025-VAL-01)

| Parameter | N Units | Passed | Failed | Defect Code |
| :--- | :--- | :--- | :--- | :--- |
| Text Legibility | 5,000 | 5,000 | 0 | N/A |
| Color Density | 5,000 | 4,998 | 2 | LBL-01 (Ink Thinning) |
| Lot/Exp Accuracy| 5,000 | 5,000 | 0 | N/A |
| Placement (Skew)| 5,000 | 4,995 | 5 | LBL-04 (Mechanical Misalignment) |

---

## 3.2.R.6 Environmental Stress Testing of Labeling

In accordance with **ASTM D4169** (Standard Practice for Performance Testing of Shipping Containers and Systems), the labeling was subjected to the following stress sequence to ensure readability at the point of care.

### 3.2.R.6.1 Accelerated Aging and Transport Simulation

**Test Sequence:**
1.  **Cold Chain Simulation:** 72 hours at -20°C (Simulating excursion).
2.  **High Humidity:** 96 hours at 40°C / 75% RH (Per ICH Q1A(R2)).
3.  **Vibration:** Random vibration profile (Truck/Air) for 180 minutes.
4.  **Chemical Resistance:** Swabbing with 70% Isopropyl Alcohol (IPA) to simulate user cleaning.

**Results:**
No delamination, color fading, or legibility degradation was observed. All samples met the acceptance criteria defined in **SOP-LBL-QC-09**.

---

## 3.2.R.7 Regulatory Compliance Matrix

| Regulation / Guideline | Requirement Summary | Compliance Status |
| :--- | :--- | :--- |
| **21 CFR 801.15** | Prominence of required statements | COMPLIANT - Uses high-contrast sans-serif fonts. |
| **21 CFR 801.437** | User labeling for devices containing natural rubber latex | COMPLIANT - "Not Made with Natural Rubber Latex" included. |
| **ISO 15223-1:2021** | Medical device symbols | COMPLIANT - Uses standard symbols (e.g., [LOT], [EXP], [REF]). |
| **FDA Guidance (2016)** | Human Factors and Usability Engineering | COMPLIANT - Labeling validated via Summative HF Study GHS-HF-2024. |

---

## 3.2.R.8 Conclusion

The labeling for Glucogen-XR (glucapeptide extended-release), Batch **GLUC-2025-XXX**, has been designed and validated to exceed FDA and ISO standards. The integration of high-resolution printing technology, automated vision inspection, and human-factors-driven IFU design ensures that patients with Type 2 Diabetes can safely and effectively utilize the GHS-Autoinjector Gen-II with minimal risk of error or device misuse.

---
*End of Subsection: Device Labeling*

---

## Instructions for Use

# MODULE 3.2.R: REGIONAL INFORMATION – DEVICE MASTER FILE
## SECTION: LABELING – INSTRUCTIONS FOR USE (IFU)
### DOCUMENT ID: GHS-GLUCXR-IFU-001
### PRODUCT: Glucogen-XR (glucapeptide extended-release) Injection
### DOSAGE FORM: 2.0 mg / 0.5 mL Single-Dose Autoinjector
### MANUFACTURER: Google Health Sciences, a Division of Google Cloud Life Sciences

---

#### 1.0 PURPOSE AND SCOPE
This document constitutes the comprehensive "Instructions for Use" (IFU) for the Glucogen-XR (glucapeptide extended-release) Single-Dose Autoinjector. This labeling component is designed in accordance with FDA Guidance for Industry: *Contents of a Complete Submission for the Evaluation of Proprietary Names* and *Safety Considerations for Product Design to Minimize Medication Errors*.

The Glucogen-XR device is a complex constituent of a combination product. These instructions are validated through human factors engineering (HFE) studies (Ref: GHS-HFE-2024-992) to ensure safe and effective use by the intended patient population (Adults with Type 2 Diabetes Mellitus) and healthcare providers.

---

#### 2.0 DEVICE SPECIFICATIONS AND IDENTIFICATION
The Glucogen-XR Autoinjector is a disposable, mechanical, spring-driven device containing a 1.0 mL Long Glass Prefilled Syringe (PFS) with a fixed 29G thin-wall needle.

| Component ID | Technical Specification | Material/Standard |
| :--- | :--- | :--- |
| **Primary Container** | 1.0 mL Long PFS | USP <1> Type I Borosilicate Glass |
| **Needle Gauge** | 29G TW (Thin Wall) | ISO 7864 / ISO 9626 |
| **Needle Length** | 12.7 mm (exposed length ~5mm) | Stainless Steel 304 |
| **Plunger Stopper** | 4023/50 Gray Bromobutyl | FluroTec® Coated (Non-Latex) |
| **Spring Force** | 45N ± 5N | Medical Grade Stainless Steel |
| **Injection Volume** | 0.5 mL ± 0.025 mL | Gravimetric Verification |
| **Viscosity Range** | 8 – 12 cP | Dynamic Viscosity at 25°C |

---

#### 3.0 SAFETY WARNINGS AND PRECAUTIONS (USER-FACING)

**3.1 Critical Safety Information**
*   **DO NOT** attempt to reuse the device. It is a single-dose, disposable unit.
*   **DO NOT** remove the White Needle Cap until you are ready to inject.
*   **DO NOT** touch the Needle Shield after the cap is removed; this may trigger the device prematurely.
*   **DO NOT** use if the device appears damaged or if the "Use By" date has passed.
*   **DO NOT** use if the liquid in the viewing window is cloudy, contains particles, or is colored (it should be clear and colorless to slightly yellowish).

**3.2 Storage Conditions**
*   Store in a refrigerator at 36°F to 46°F (2°C to 8°C).
*   If needed, the device can be kept at room temperature (up to 86°F or 30°C) for a single period of up to 14 days.
*   Keep the device in its original carton to protect it from light.
*   **DO NOT FREEZE.** If the device has been frozen, discard it in a sharps container.

---

#### 4.0 STEP-BY-STEP INSTRUCTIONS FOR USE

##### 4.1 Preparation Phase
**Step 1: Removal from Refrigeration**
Take one Glucogen-XR carton out of the refrigerator. Remove the individual autoinjector from the carton.
*   *Note:* Allow the device to sit at room temperature for at least 30 minutes. This ensures the viscosity of the glucapeptide solution is optimal for the spring-driven mechanism, reducing injection discomfort and ensuring full dose delivery.
*   *Validation Ref:* GLUC-V-30 (Thermal Equilibration Study).

**Step 2: Inspect the Device**
Examine the viewing window.
*   Verify the medicine is clear.
*   Verify the Batch Number (e.g., **GLUC-2025-001**) and Expiry Date.
*   Small air bubbles are normal and do not need to be removed.

**Step 3: Gather Supplies**
Gather the following items (not included in the Glucogen-XR pack):
1. Alcohol swab
2. Cotton ball or gauze
3. FDA-cleared sharps disposal container

##### 4.2 Injection Site Selection
**Step 4: Choose Your Site**
Select one of the following injection sites:
*   **Abdomen:** At least 2 inches away from the belly button.
*   **Thigh:** Front of the mid-thigh.
*   **Upper Arm:** Back of the arm (recommended only if a caregiver is administering the dose).

*Instruction:* Rotate injection sites weekly. Do not inject into areas where the skin is tender, bruised, red, or hard.

##### 4.3 Administration Procedure
**Step 5: Clean the Site**
Wipe the chosen injection site with an alcohol swab. Allow the skin to air dry. Do not fan or blow on the clean area.

**Step 6: Remove the Cap**
Pull the White Needle Cap straight off. 
*   *Precaution:* Do not twist the cap. Do not put the cap back on once removed.
*   *Technical Note:* Removing the cap arms the internal safety interlock.

**Step 7: Positioning**
Place the clear Needle Shield flat against your skin at a 90-degree angle.

**Step 8: Start the Injection**
Push the device down firmly against the skin. 
*   **First "Click":** You will hear a "Click." This signifies the needle has entered the subcutaneous tissue and the plunger has been released.
*   **Visual Confirmation:** The green indicator will begin to move through the viewing window.

**Step 9: Hold for 10 Seconds**
Continue to hold the device firmly against the skin.
*   **Second "Click":** You will hear a second "Click." This signifies the plunger has reached the end of its travel.
*   **Count to 10:** Slowly count to 10 to ensure all 0.5 mL of Glucogen-XR is delivered.

**Step 10: Completion**
Lift the device straight up. The Needle Shield will automatically extend and lock over the needle to prevent accidental needle sticks.
*   The viewing window should now be completely Green.

---

#### 5.0 POST-INJECTION AND DISPOSAL

**5.1 Sharps Disposal**
Immediately place the used Glucogen-XR autoinjector in an FDA-cleared sharps disposal container.
*   **DO NOT** throw away the device in your household trash.
*   **DO NOT** recycle the used sharps container.

**5.2 Site Care**
If there is a small amount of blood at the injection site, press a cotton ball or gauze lightly against the skin. Do not rub the area.

---

#### 6.0 BATCH-SPECIFIC VERIFICATION DATA (REPRESENTATIVE)
The following table provides representative verification data for the IFU's performance metrics across recent validation batches.

| Batch Number | Trigger Force (N) | Injection Time (sec) | Delivered Vol (mL) | Needle Depth (mm) |
| :--- | :--- | :--- | :--- | :--- |
| **GLUC-2025-001** | 12.4 | 6.8 | 0.501 | 4.85 |
| **GLUC-2025-002** | 11.9 | 7.2 | 0.498 | 4.91 |
| **GLUC-2025-003** | 13.1 | 6.5 | 0.504 | 4.88 |
| **GLUC-2025-004** | 12.8 | 7.0 | 0.499 | 4.82 |
| **USP Limit** | **10 - 20 N** | **< 10 sec** | **0.475 - 0.525** | **4.5 - 5.5** |

---

#### 7.0 TROUBLESHOOTING GUIDE

| Problem | Possible Cause | Action |
| :--- | :--- | :--- |
| Green indicator does not appear. | Device was not pressed hard enough. | For the next dose, ensure a firm 90-degree pressure is applied until the click is heard. |
| Medicine leaks from the needle after removal. | Device removed too early. | Ensure you hold the device for a full 10 seconds after the second click. |
| Needle Shield does not lock. | Internal spring malfunction. | Contact Google Health Sciences Patient Support at 1-800-GHS-LIFE. Do not touch the needle. |
| Cap is difficult to remove. | Temperature too low. | Ensure the device has reached room temperature (30 mins). |

---

#### 8.0 CALCULATIONS AND STATISTICAL ANALYSIS OF DOSE ACCURACY
The Glucogen-XR delivery volume ($V_d$) is calculated based on the internal diameter of the 1.0mL Long syringe ($ID$) and the plunger stroke length ($L_s$).

$$V_d = \pi \times (\frac{ID}{2})^2 \times L_s$$

For Batch **GLUC-2025-001**:
*   Mean $ID$ = 6.35 mm
*   Mean $L_s$ = 15.82 mm
*   Calculated $V_d = 3.14159 \times (3.175)^2 \times 15.82 = 500.98 \, \text{mm}^3 \approx 0.501 \, \text{mL}$

**Statistical Reliability:**
Based on ISO 11608-1, the reliability requirement for the Glucogen-XR device is $R \geq 0.999$ at a confidence level of $C = 0.95$ for dose accuracy.

---

#### 9.0 REGULATORY COMPLIANCE AND STANDARDS
This IFU and the associated device comply with:
1.  **ISO 11608-1:2022:** Needle-based injection systems for medical use.
2.  **ISO 11608-5:2022:** Automated functions.
3.  **FDA 21 CFR Part 801.10:** Labeling for prescription devices.
4.  **IEC 62366-1:** Application of usability engineering to medical devices.
5.  **USP <790>:** Visible Particulates in Injections.

---
**END OF SECTION**
**Approved By:** 
*Director of Quality Assurance, Google Health Sciences*
*Date: 14-MAY-2025*

---

## Symbols and Markings

# MODULE 3.2.P.7: CONTAINER CLOSURE SYSTEM – MEDICAL DEVICE COMPONENT
## DRUG PRODUCT: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE)
### SECTION: LABELING AND PACKAGING
### SUBSECTION: 3.2.P.7.4 SYMBOLS AND MARKINGS

---

### 1.0 SCOPE AND OBJECTIVE
This section provides a comprehensive technical specification and regulatory justification for the symbols and markings utilized on the Glucogen-XR (glucapeptide extended-release) delivery system, including the Primary Container Closure System (PCCS), the Secondary Packaging (Carton), and the Tertiary Transport Units. 

Google Health Sciences (GHS) has implemented a robust marking strategy in compliance with **ISO 15223-1:2021** (*Medical devices — Symbols to be used with information to be supplied by the manufacturer*), **21 CFR § 801.15**, and **FDA Guidance: "Select Symbols used in Medical Device Labeling"**. The objective is to ensure user safety, mitigate medication errors, and facilitate global traceability through the use of standardized, machine-readable, and human-readable identifiers.

---

### 2.0 REGULATORY REFERENCE FRAMEWORK
The symbols and markings strategy for Glucogen-XR is governed by the following international and regional standards:

| Reference ID | Title / Description | Applicability |
|:---|:---|:---|
| **ISO 15223-1:2021** | Medical devices — Symbols to be used with information to be supplied by the manufacturer — Part 1: General requirements | Global Standard for Graphic Symbols |
| **ISO 7000:2019** | Graphical symbols for use on equipment — Registered symbols | Reference for standardized icons |
| **21 CFR 801.1** | General Labeling Provisions | US Regulatory Requirement |
| **21 CFR 801.20** | Unique Device Identification (UDI) | Machine-readable identification |
| **GS1 General Specs** | GS1 DataMatrix and Barcoding Standards | Logistics and Traceability |
| **IEC 60601-1-8** | General requirements, tests and guidance for alarm systems in medical electrical equipment | Audio/Visual symbol safety |
| **USP <7>** | Labeling | Pharmacopeial compliance |

---

### 3.0 HIERARCHY OF MARKINGS
Markings are applied at three distinct levels of the Glucogen-XR product architecture to ensure redundancy and visibility during the product lifecycle.

#### 3.1 Level 1: Primary Device Markings (Direct Part Marking - DPM)
The Glucogen-XR Autoinjector (Model GHS-AI-V4) features laser-etched markings on the device housing. 
*   **Batch Number Format:** `GLUC-2025-XXX`
*   **Method:** UV Laser Ablation (minimal thermal impact on polymer integrity).
*   **Location:** Lateral surface of the injector barrel, 15mm from the proximal end.

#### 3.2 Level 2: Secondary Packaging (Sales Unit)
The folding carton contains the full array of regulatory symbols, UDI, and human-readable text.
*   **Material:** 18pt SBS (Solid Bleached Sulfate) with anti-counterfeit UV ink.

#### 3.3 Level 3: Tertiary Packaging (Shipper/Pallet)
Bulk transport markings focused on logistics and environmental constraints.

---

### 4.0 TECHNICAL SPECIFICATIONS FOR STANDARDIZED SYMBOLS
The following table details every symbol utilized on the Glucogen-XR labeling, its source, and its specific application to the glucapeptide extended-release formulation.

#### Table 4.1: Master Symbol Index

| Symbol Image (Description) | ISO/Reference No. | Meaning | Placement | Requirement / Justification |
|:---:|:---|:---|:---|:---|
| **[LOT]** | ISO 15223-1: 5.1.1 | Batch Code | All Levels | Required for traceability per 21 CFR 801. |
| **[REF]** | ISO 15223-1: 5.1.6 | Catalogue Number | Secondary | Identifies the GHS product SKU. |
| **[EXP]** | ISO 15223-1: 5.1.4 | Expiry Date | All Levels | Critical for GLP-1 stability (Shelf life: 24 months). |
| **[QTY]** | ISO 15223-1: 5.1.7 | Quantity | Secondary | Number of autoinjectors (4 per carton). |
| **[STERILE EO]** | ISO 15223-1: 5.2.3 | Sterilized using Ethylene Oxide | Primary/Secondary | Fluid path sterility for the needle sub-assembly. |
| **[TEMP LIMIT]** | ISO 15223-1: 5.3.7 | 2°C to 8°C | Secondary/Tertiary | Cold chain requirement for peptide integrity. |
| **[KEEP DRY]** | ISO 15223-1: 5.3.4 | Keep Dry | Tertiary | Prevents degradation of electronic feedback sensors. |
| **[RX ONLY]** | 21 CFR 801.109 | Prescription Only | Secondary | Federal law restriction. |
| **[UDI]** | ISO 15223-1: 5.7.10 | Unique Device Identifier | Secondary | Encapsulated in GS1 DataMatrix. |

---

### 5.0 UNIQUE DEVICE IDENTIFICATION (UDI) AND DATAMATRIX
The Glucogen-XR system utilizes a GS1-compliant DataMatrix for the UDI. This enables automated tracking from the South San Francisco manufacturing site (3000 Innovation Drive) to the end-user.

#### 5.1 UDI Components
The UDI consists of the Device Identifier (DI) and the Production Identifier (PI).

**Formula for UDI String:**
` (01)[GTIN](17)[YYMMDD](10)[BATCH_ID](21)[SERIAL_NO] `

**Example for Batch GLUC-2025-001:**
*   **GTIN:** 00810012345678
*   **Expiry:** 271231 (Dec 31, 2027)
*   **Batch:** GLUC-2025-001
*   **Serial:** SN88992233
*   **Resultant AIDC:** `(01)00810012345678(17)271231(10)GLUC-2025-001(21)SN88992233`

#### 5.2 Verification Protocol (SOP-LAB-992)
To ensure the legibility of symbols and the scanability of markings, Google Health Sciences employs the following verification protocol:

1.  **Equipment:** Microscan LVS-9510 Offline Barcode Verifier.
2.  **Sample Size:** $n=80$ per batch (Confidence level 95%, $RQL = 5\%$).
3.  **Acceptance Criteria:** ISO/IEC 15415 Grade 'A' or 'B' (Numerical Grade $\geq 3.0$).
4.  **Contrast Minimum:** $\geq 40\%$ between symbol and substrate background.

---

### 6.0 BATCH-SPECIFIC MARKING DATA (REPRESENTATIVE SAMPLES)
The following table represents the data logged for the initial validation batches produced at the GHS South San Francisco facility.

#### Table 6.1: Batch Marking Validation Log

| Batch Number | Date of Manufacture | Device Serial Range | Symbol Contrast Score | UDI Verification Status |
|:---|:---|:---|:---|:---|
| GLUC-2025-001 | 12-JAN-2025 | 100001 - 105000 | 4.0 (A) | PASS |
| GLUC-2025-002 | 19-JAN-2025 | 105001 - 110000 | 3.9 (A) | PASS |
| GLUC-2025-003 | 26-JAN-2025 | 110001 - 115000 | 3.8 (B) | PASS |
| GLUC-2025-004 | 02-FEB-2025 | 115001 - 120000 | 4.0 (A) | PASS |

---

### 7.0 HUMAN FACTORS AND ERGONOMICS OF MARKINGS
As Glucogen-XR is intended for patients with Type 2 Diabetes, who may suffer from diabetic retinopathy or reduced visual acuity, the markings are designed according to **ANSI/AAMI HE75:2009**.

#### 7.1 Font and Legibility
*   **Font Type:** Sans Serif (Helvetica Neue) to minimize visual noise.
*   **Minimum Point Size:** 9pt for critical safety information; 6pt for non-critical manufacturer addresses.
*   **Tactile Indicators:** The batch number `GLUC-2025-XXX` on the primary device is laser-etched with a depth of $0.05 \text{ mm}$ to providing a slight tactile feedback for orientation.

#### 7.2 Color Coding
Google Health Sciences utilizes color coding to distinguish between Glucogen-XR dosages (e.g., 5mg, 10mg, 15mg) to prevent medication errors.
*   **5mg Strength:** PMS 2935C (Blue)
*   **10mg Strength:** PMS 348C (Green)
*   **15mg Strength:** PMS 485C (Red)

---

### 8.0 CHEMICAL RESISTANCE AND DURABILITY OF MARKINGS
The markings on the Glucogen-XR autoinjector must remain legible after exposure to common disinfectants and typical storage conditions.

#### 8.1 Testing Protocol (SOP-DEV-442)
1.  **Reagent Exposure:** Swabbing with 70% Isopropyl Alcohol (IPA) for 30 seconds.
2.  **Abrasion Testing:** Taber Abraser (CS-10 wheel, 500g load, 100 cycles).
3.  **Tape Test:** 3M 810 tape adhesion test per ASTM D3359.
4.  **Calculations:**
    The durability index ($D_i$) is calculated as:
    $$D_i = \frac{C_{post}}{C_{pre}} \times 100$$
    Where $C_{pre}$ is the initial contrast and $C_{post}$ is the contrast after 100 cycles.
    *Requirement:* $D_i \geq 85\%$.

---

### 9.0 ENVIRONMENTAL AND DISPOSAL MARKINGS
In alignment with global sustainability initiatives (Google Green Bio-Pharma Initiative), the following environmental markings are included:

1.  **WEEE Symbol:** (Crossed-out wheeled bin) indicating that the electronic components of the autoinjector must not be disposed of in standard municipal waste.
2.  **Recycling Code:** "7" (Other - PC/ABS blend) for the outer shell.
3.  **Biohazard Warning:** Included in the Instructions for Use (IFU) regarding the needle component.

---

### 10.0 CONCLUSION
The symbols and markings for Glucogen-XR (GLUC-2025-XXX series) represent a synthesis of regulatory compliance and patient-centric design. By adhering to ISO 15223-1 and 21 CFR 801, Google Health Sciences ensures that the device provides clear, unambiguous information to both clinicians and patients, facilitating the safe administration of glucapeptide therapy for Type 2 Diabetes Mellitus.

---
**END OF SECTION 3.2.P.7.4**
**Document ID:** GHS-XR-M3-DEVICE-DMF-004
**Revision:** 1.0.2
**Approved By:** Regulatory Affairs Committee, Google Health Sciences.

---

# Risk Management

## Risk Analysis (ISO 14971)

# MODULE 3.2.P.7: DRUG PRODUCT MANUFACTURING – DEVICE CONSTITUENT PART
## SECTION: 3.2.P.7.4 RISK MANAGEMENT
### SUBSECTION: RISK ANALYSIS (ISO 14971:2019 COMPLIANCE)

---

#### 1.0 INTRODUCTION AND SCOPE
This section details the comprehensive Risk Analysis for the **Glucogen-XR (glucapeptide extended-release)** single-use autoinjector system, manufactured by **Google Health Sciences (GHS)**. This analysis has been conducted in strict accordance with **ISO 14971:2019** (*Medical devices — Application of risk management to medical devices*) and **FDA Guidance for Industry: Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products**.

The scope of this risk analysis covers the entire lifecycle of the Glucogen-XR device constituent, from raw material procurement (e.g., COC polymer resin for the pre-filled syringe) to final assembly at the South San Francisco facility (Site ID: GHS-SSF-3000), including user interface interactions and post-market clinical use.

#### 2.0 RISK MANAGEMENT POLICY AND CRITERIA
Google Health Sciences operates under Quality Management System (QMS) procedure **GHS-QMS-RM-001**. The risk acceptability criteria are based on a 5x5 matrix evaluating **Severity (S)** and **Probability of Occurrence (P)**.

##### 2.1 Severity Scale (S)
| Level | Descriptor | Clinical Impact Description |
| :--- | :--- | :--- |
| 5 | Catastrophic | Death or permanent impairment; anaphylaxis due to peptide degradation; extreme hypoglycemia. |
| 4 | Critical | Life-threatening injury or serious illness requiring hospitalization; significant local tissue necrosis. |
| 3 | Serious | Injury or impairment requiring professional medical intervention; severe injection site reaction. |
| 2 | Minor | Temporary discomfort or minor injury not requiring medical intervention; bruising/redness. |
| 1 | Negligible | No injury; inconvenience only (e.g., cosmetic defect on the pen cap). |

##### 2.2 Probability of Occurrence Scale (P)
| Level | Descriptor | Quantitative Probability (per unit) |
| :--- | :--- | :--- |
| 5 | Frequent | ≥ 10⁻² (1 in 100) |
| 4 | Probable | < 10⁻² to ≥ 10⁻³ (1 in 1,000) |
| 3 | Occasional | < 10⁻³ to ≥ 10⁻⁴ (1 in 10,000) |
| 2 | Remote | < 10⁻⁴ to ≥ 10⁻⁶ (1 in 1,000,000) |
| 1 | Improbable | < 10⁻⁶ |

#### 3.0 IDENTIFICATION OF HAZARDS AND CHARACTERISTICS
Following **ISO 14971 Annex C**, GHS utilized a multidisciplinary team (Quality, Regulatory, Engineering, Clinical) to identify potential hazards associated with the Glucogen-XR device.

##### Table 3.1: Identification of Device Characteristics (Partial List)
| ID | Characteristic | Potential Hazard |
| :--- | :--- | :--- |
| C-01 | Glucapeptide Formulation | Chemical degradation if contact with plunger stopper occurs for >24 months. |
| C-02 | Needle Shield (Spring-loaded) | Failure to retract; needle stick injury (NSI). |
| C-03 | Drive Spring (Tension: 45N) | Glass breakage of the Pre-Filled Syringe (PFS) during activation. |
| C-04 | User Interface (Window) | Misinterpretation of dose completion; premature removal of pen. |

#### 4.0 FAILURE MODE AND EFFECTS ANALYSIS (FMEA)
The following FMEA (Batch Reference: **GLUC-2025-001** through **GLUC-2025-500**) captures the detailed risk assessment of the Glucogen-XR mechanical and chemical interface.

##### Table 4.1: Design Failure Mode and Effects Analysis (dFMEA)
| Ref ID | Failure Mode | Potential Cause | Severity (S) | Probability (P) | RPN | Mitigation Measure (Control) | Residual S | Residual P |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DF-101** | Incomplete Dose Delivery | Friction between plunger and barrel due to uneven silicone oil distribution (Batch: GLUC-2025-012). | 4 | 3 | 12 | Implementation of **cross-linked siliconization** process (GHS-SOP-662). 100% vision inspection. | 4 | 1 |
| **DF-102** | Premature Needle Deployment | Weakened retention clips in the outer housing (Polycarbonate failure). | 3 | 2 | 6 | Structural FEA analysis; Stress testing under 40°C/75% RH (USP <1151>). | 3 | 1 |
| **DF-103** | Glass Syringe Fracture | Hydrostatic shock during high-viscosity glucapeptide expulsion. | 5 | 2 | 10 | Transition to **Cyclic Olefin Copolymer (COC)** syringe barrel (GHS-SPEC-78). | 5 | 1 |
| **DF-104** | Label Adhesion Failure | Adhesive interaction with cold-chain condensation (5°C storage). | 2 | 4 | 8 | ISO 11607 compliant adhesive testing; moisture-resistant synthetic labels. | 2 | 1 |

#### 5.0 PROCESS RISK ANALYSIS (pFMEA)
This section addresses risks introduced during the assembly and fill-finish process at the Google Health Sciences South San Francisco facility.

##### 5.1 Protocol for Process Risk Mitigation (GHS-PRO-029)
1. **Equipment Setup**: Ensure the Automated Assembly Line (**GHS-LINE-4**) is calibrated per NIST standards.
2. **Torque Validation**: Check cap torque (Target: 15.5 N-cm) using calibrated torque meter (ID: GHS-TM-99).
3. **Visual Inspection**: High-speed cameras (Cognex 9000 series) must detect particulates >50μm.
4. **Bioburden Control**: Monitor ISO 5 (Grade A) environment during PFS insertion.

##### Table 5.1: Process FMEA - Assembly Line GHS-LINE-4
| Process Step | Potential Failure | Impact on Product | Detection Method | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| Syringe Insertion | Misalignment | Broken flange; leak. | Laser sensor (LS-401). | Mechanical guides calibrated to ±0.05mm. |
| Power Spring Compression | Over-compression | Plastic deformation; weak injection. | Load cell monitoring. | Automated rejection of units exceeding 50N compression. |
| Final Labeling | Wrong Batch No. | Incorrect shelf-life tracking. | OCR/OCV Verification. | Database sync with SAP/ERP (GLUC-2025-XXX). |

#### 6.0 USE ERROR RISK ANALYSIS (uFMEA)
Per **IEC 62366-1:2015**, GHS conducted formative and summative usability studies.

**Scenario U-01: Injection into the wrong site.**
*   **Initial Risk**: High (Patient injecting into muscle vs. subcutaneous tissue).
*   **Mitigation**: The Instructions for Use (IFU) include high-contrast 3D diagrams. The pen shroud is designed to only activate on soft tissue (Sub-Q) compression of >10N.
*   **Validation**: Summative study GHS-HU-2025-A showed 100% success rate in 75/75 Type 2 Diabetes patients.

#### 7.0 CHEMICAL AND BIOCOMPATIBILITY RISK
The Glucogen-XR device contains a glucapeptide ligand (GLP-1 RA). The fluid path includes:
1.  **Needle**: 29G Thin Wall, Stainless Steel 304 (ISO 9626).
2.  **Elastomer**: Bromobutyl plunger (USP <381>).
3.  **Barrel**: COC (ISO 10993-5/10 compliant).

**Risk Calculation: Extractables and Leachables (E&L)**
$$AET = \frac{SCT \times n}{d \times m}$$
*Where:*
*   $AET$ = Analytical Evaluation Threshold (μg/vial)
*   $SCT$ = Safety Concern Threshold (0.15 μg/day per ICH Q3D)
*   $n$ = Number of doses per day (1 for Glucogen-XR)
*   $d$ = Dilution factor
*   $m$ = Number of devices pooled for extraction

*Result*: For Batch **GLUC-2025-088**, the calculated AET was 0.45 μg/device. Actual leachable levels of Silicon Oil and Tungsten were <0.01 μg/device, representing a **Negligible** risk.

#### 8.0 RISK BENEFIT ANALYSIS
The therapeutic benefit of Glucogen-XR (reduction of HbA1c by an average of 1.8% in clinical trials GHS-GLUC-PH3) significantly outweighs the residual risks identified in Table 4.1. Most residual risks are categorized as **Remote** or **Improbable** through the implementation of Google’s proprietary "Cloud-Quality" monitoring system, which tracks real-time manufacturing deviations using AI-driven predictive maintenance on the assembly line.

#### 9.0 CONCLUSION
In accordance with **ISO 14971:2019**, the risk management process for Glucogen-XR (GLUC-2025-XXX) has demonstrated that all identified hazards have been mitigated to levels **As Low As Reasonably Practicable (ALARP)**. No unacceptable risks remain.

---
**Approvals:**
*   *Head of Device Engineering:* Dr. Julian V. Aris (Date: 14-Oct-2025)
*   *Quality Assurance Lead:* Sarah Jenkins (Date: 15-Oct-2025)
*   *Regulatory Affairs Director:* Marc L. Thompson (Date: 16-Oct-2025)

**Footnotes:**
1. FDA 21 CFR Part 820.30(g) Design Validation requirements.
2. ISO 11608-1:2022 Needle-based injection systems for medical use.
3. GHS Internal Report GHS-RR-2025-09: "Accelerated Aging and Stress Testing of Glucogen-XR Pen Housing."

---

## FMEA

# MODULE 3.2.R: DEVICE CONSTITUENT PART - RISK MANAGEMENT
## SECTION 3.2.R.4: FAILURE MODE AND EFFECTS ANALYSIS (FMEA)
### DOCUMENT ID: GHS-GLUC-XR-FMEA-001
### DATE: 24 MAY 2025
### PRODUCT: GLUCOGEN-XR (GLUCAPEPTIDE EXTENDED-RELEASE) INJECTOR SYSTEM

---

#### 4.1. INTRODUCTION AND SCOPE
This Failure Mode and Effects Analysis (FMEA) has been conducted by Google Health Sciences (GHS) to evaluate the potential failure modes associated with the Glucogen-XR (glucapeptide extended-release) pre-filled autoinjector system. This analysis is a core component of the Risk Management File (RMF) required under **ISO 14971:2019** (Medical devices — Application of risk management to medical devices) and aligns with **FDA 21 CFR 820.30(g)** (Design Validation).

The scope of this FMEA encompasses the entire lifecycle of the device constituent part, from final assembly of the pre-filled syringe (PFS) into the autoinjector housing to the point of patient administration. It specifically addresses the interaction between the GLP-1 receptor agonist drug substance (Glucogen-XR, Batch Series GLUC-2025-XXX) and the mechanical components of the delivery system.

#### 4.2. RISK ASSESSMENT METHODOLOGY

##### 4.2.1. Risk Scoring Criteria
GHS utilizes a 5x5 matrix for the determination of the Risk Priority Number (RPN), incorporating Severity (S), Occurrence (O), and Detectability (D).

**Table 4.2.1-A: Severity (S) Ranking Criteria**
| Score | Descriptor | Clinical Impact / Patient Safety |
| :--- | :--- | :--- |
| 5 | Catastrophic | Death or permanent disability (e.g., anaphylaxis, air embolism). |
| 4 | Major | Serious injury/impairment requiring professional medical intervention (e.g., severe hypoglycemia). |
| 3 | Moderate | Minor injury requiring self-treatment or outpatient care (e.g., significant bruising, localized infection). |
| 2 | Minor | Temporary discomfort, no medical intervention required (e.g., slight pain at site). |
| 1 | Negligible | No injury or inconvenience; patient may not notice the failure. |

**Table 4.2.1-B: Occurrence (O) Ranking Criteria**
| Score | Descriptor | Probability of Failure | Frequency Rate |
| :--- | :--- | :--- | :--- |
| 5 | Very High | Inevitable; > 1 in 10 | ≥ 10% |
| 4 | High | Repeated failures; 1 in 100 | 1% to 10% |
| 3 | Moderate | Occasional failures; 1 in 1,000 | 0.1% to 1% |
| 2 | Low | Relatively few failures; 1 in 10,000 | 0.01% to 0.1% |
| 1 | Remote | Unlikely; < 1 in 1,000,000 | < 0.0001% |

**Table 4.2.1-C: Detectability (D) Ranking Criteria**
| Score | Descriptor | Detection Opportunity | Probability of Detection |
| :--- | :--- | :--- | :--- |
| 5 | Non-Detectable | No process control or test exists to detect failure. | 0% - 10% |
| 4 | Low | Detection depends on manual inspection/user observation. | 11% - 40% |
| 3 | Medium | Semi-automated inspection (e.g., visual inspection system). | 41% - 80% |
| 2 | High | Automated 100% in-process monitoring (e.g., torque sensors). | 81% - 95% |
| 1 | Certain | Physical impossibility of failure passing the line (e.g., Poka-Yoke). | > 99% |

##### 4.2.2. Risk Acceptance Thresholds
*   **RPN 1-15:** Acceptable; no further mitigation required.
*   **RPN 16-35:** ALARP (As Low As Reasonably Practicable); mitigation recommended to reduce risk.
*   **RPN 36-125:** Unacceptable; mandatory design or process change required.

---

#### 4.3. COMPREHENSIVE FMEA TABLE: DEVICE ASSEMBLY AND DRUG DELIVERY (BATCH GLUC-2025-XXX)

The following table summarizes the failure modes identified during the Design Verification (DV) and Process Validation (PV) stages at the South San Francisco facility.

| Item / Process Step | Potential Failure Mode | Potential Effect of Failure | S | O | D | RPN | Prevention / Mitigation Controls |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **4.3.1. Syringe Sub-Assembly** | **Glass Flange Breakage** | Drug leakage; incomplete dose; risk of glass shards in device housing. | 4 | 2 | 3 | **24** | 100% Visual Inspection; Compression force limits on assembly nest (GHS-EQ-882). |
| **4.3.2. Needle Shield Removal** | **Needle De-coring / Hooking** | Painful injection; blockage of fluid path; failed delivery. | 3 | 2 | 4 | **24** | Rigid Needle Shield (RNS) pull-force specification: 5N - 25N per ISO 11040-4. |
| **4.3.3. Plunger Stopper Travel** | **Stiction (Static Friction)** | "No-go" device; device stalls before full dose delivery. | 4 | 3 | 2 | **24** | Optimization of siliconization levels (GHS-SPEC-99). Use of FluroTec® film coating. |
| **4.3.4. Extended Release Matrix** | **Premature Precipitation** | Needle clogging (27G thin-wall); device stall. | 5 | 2 | 3 | **30** | Formulation pH control (6.8 ± 0.2); Viscosity monitoring in Batch GLUC-2025-401. |
| **4.3.5. Final Assembly (Nest)** | **Spring Misalignment** | Premature firing or failure to fire. | 4 | 2 | 2 | **16** | 100% Force-Distance monitoring on Assembly Line GHS-L5. |
| **4.3.6. Labeling/Serialization** | **Incorrect Dose Label** | Patient receives wrong concentration (0.5mg vs 1.0mg). | 5 | 1 | 2 | **10** | 2D DataMatrix verification; Vision system GHS-VIS-09 checks label ID. |

---

#### 4.4. DETAILED ANALYSIS OF HIGH-RISK FAILURE MODES

##### 4.4.1. Failure Mode: Needle Clogging due to Peptide Aggregation (FMEA ID: GHS-FMEA-BIO-09)
Glucogen-XR is a high-concentration glucapeptide formulation. As an extended-release (XR) product, the viscosity is significantly higher than standard GLP-1 analogues.

*   **Technical Root Cause:** Interaction between the peptide molecules and the 27G Thin Wall needle surface, leading to a nucleation event if the temperature exceeds 30°C for > 48 hours.
*   **Calculated Impact Force:**
    The force required to clear a clog is defined by:
    $F_{clog} = \Delta P \times A_{plunger}$
    Where $\Delta P$ is the pressure required to move the viscous plug through the 12.7mm needle.
    If $F_{clog} > F_{spring}$ (Spring force at End-of-Stroke), a partial dose occurs.
*   **Mitigation Protocol (MP-GLUC-2025-12):**
    1.  Implementation of cold-chain (2-8°C) monitoring using SmartSens™ tags on every pallet of Batch GLUC-2025-XXX.
    2.  Surface passivation of the internal needle lumen using a proprietary PEGylation process to reduce protein adsorption.
    3.  End-of-line sampling: 50 units per batch are tested for "Breakloose Force" and "Gliding Force" using Instron GHS-INST-04.

##### 4.4.2. Failure Mode: Excessive Injection Time (FMEA ID: GHS-FMEA-MECH-22)
Due to the extended-release matrix, the delivery time is sensitive to environmental temperature.

*   **Failure Criteria:** Injection time > 15 seconds (User-defined limit for "convenience and compliance").
*   **Statistical Analysis (Batch GLUC-2025-702):**
    Mean Injection Time: 8.4s
    Standard Deviation: 1.2s
    Calculated Upper Specification Limit (USL) at 3-Sigma: 12.0s.
*   **Risk Control:** The user manual (IFU) instructs the patient to allow the device to reach room temperature (20-25°C) for 30 minutes. The FMEA assumes a "worst-case" scenario of injection at 5°C.

---

#### 4.5. PROCESS FMEA (PFMEA) FOR FILL-FINISH AT SOUTH SAN FRANCISCO (FACILITY ID: GHS-SSF-01)

**Table 4.5-A: Manufacturing Process FMEA**
| Process Step | Potential Failure Cause | Current Control | S | O | D | RPN | Action Taken |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nitrogen Overlay** | Sensor drift in O2 monitor | Weekly calibration of GHS-O2-99 | 4 | 2 | 2 | 16 | Redundant O2 sensors installed June 2025. |
| **Aseptic Filling** | Pump shear degrading peptide | Periodic HPLC (Method GHS-MET-01) | 5 | 2 | 4 | 40 | Switched to peristaltic pumps for GLUC-2025-XXX. |
| **Stopper Insertion** | Vacuum loss in H2O2 chamber | Real-time pressure monitoring | 5 | 1 | 2 | 10 | Automatic line stop on pressure drop. |

---

#### 4.6. RISK REDUCTION VERIFICATION PROTOCOL
To verify the effectiveness of the mitigations listed in the FMEA, GHS-QA executes the following protocol:

**Protocol No: GHS-VER-2025-001**
1.  **Objective:** Verify that the 27G needle does not clog during a simulated 12-month shelf-life at 25°C.
2.  **Sample Size:** n=299 (based on 95/95 reliability/confidence).
3.  **Procedure:**
    *   3.1. Retrieve 299 units of Batch GLUC-2025-010.
    *   3.2. Subject units to ISTA 2A transportation vibration simulation.
    *   3.3. Actuate devices into a synthetic skin substrate (Shore A 40).
    *   3.4. Measure mass of delivered dose using a high-precision analytical balance (GHS-BAL-04).
4.  **Acceptance Criteria:** Delivered volume must be 0.5mL ± 0.025mL. No "Non-Fire" events.

---

#### 4.7. CONCLUSION
Based on the FMEA conducted for Glucogen-XR, all identified risks have been mitigated to an acceptable level (RPN ≤ 15) or are ALARP. The combination of design features (FluroTec stoppers, high-force springs) and process controls (100% visual inspection, vision-guided assembly) ensures that the device constituent part performs reliably under the conditions of use specified in the labeling.

**Sign-off:**
*   *Dr. Elizabeth Chen, Head of Device Regulatory Affairs, Google Health Sciences*
*   *Date: 28 MAY 2025*

---
**References:**
1. ISO 14971:2019 - Application of Risk Management to Medical Devices.
2. FDA Guidance: "Technical Considerations for Pen, Jet, and Related Injectors Intended for Use with Drugs and Biological Products."
3. USP <1151> Pharmaceutical Dosage Forms (Injections).
4. GHS Internal Report: GHS-2024-BIO-TECH-011 (Peptide Stability in High-Shear Environments).

---

## Risk Control Measures

# MODULE 3.2.R: DEVICE DRUG MASTER FILE (DMF)
## SECTION: RISK MANAGEMENT
### SUBSECTION 3.2.R.4.2: RISK CONTROL MEASURES (RCM)

---

**Proprietary Information of Google Health Sciences (GHS)**  
**Drug Product:** Glucogen-XR (glucapeptide extended-release)  
**Device Component:** GHS-Autoinjector Gen-II (Single-use, pre-filled)  
**Manufacturing Site:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  

---

#### 4.2.1 Introduction and Scope of Risk Control Strategy

The Risk Control Measures (RCM) for Glucogen-XR (glucapeptide extended-release) represent a multi-layered, defense-in-depth strategy designed to mitigate identified hazards associated with the subcutaneous delivery of a high-viscosity GLP-1 receptor agonist via an automated mechanical system. Following the Risk Analysis (Section 3.2.R.4.1) and Hazard Identification, Google Health Sciences (GHS) has implemented a hierarchical control framework in accordance with **ISO 14971:2019** and **FDA Guidance: "Design Considerations for Devices that Inject Regenerative Medicine, Biologics, and Drugs."**

The objective of these controls is to reduce the Residual Risk to "As Low As Reasonably Practicable" (ALARP) while ensuring that the therapeutic benefit-risk ratio remains favorable for the Type 2 Diabetes Mellitus (T2DM) patient population, which may present with comorbidities such as peripheral neuropathy or visual impairment.

#### 4.2.2 Regulatory and Quality Standards Compliance

All risk control measures detailed herein have been validated against the following regulatory benchmarks:
*   **ICH Q8(R2):** Pharmaceutical Development (Quality by Design)
*   **ICH Q9(R1):** Quality Risk Management
*   **ISO 11608-1:2022:** Needle-based injection systems for medical use
*   **USP <1168>:** Adhesive Technology and Device Assembly
*   **21 CFR Part 820.30:** Design Controls
*   **IEC 62366-1:2015:** Application of usability engineering to medical devices

---

#### 4.2.3 Technical Control Hierarchy: Design, Protective, and Informative

GHS utilizes a three-tiered hierarchy for Risk Control:
1.  **Tier 1: Inherently Safe Design:** Elimination of the hazard through physical architecture.
2.  **Tier 2: Protective Measures:** Inclusion of alarms, sensors, or mechanical interlocks.
3.  **Tier 3: Information for Safety:** Labeling, Instructions for Use (IFU), and training modules.

---

#### 4.2.4 Detailed Risk Control Matrix (RCM-101)

The following table details the specific risk control measures mapped to identified failure modes during the assembly and operation of Glucogen-XR (Batch Series GLUC-2025-XXX).

##### Table 4.2.4-A: Comprehensive Risk Control Matrix for GHS-Autoinjector Gen-II

| Risk ID | Failure Mode / Hazard | Severity (S) | Tier | Specific Risk Control Measure (RCM) | Verification/Validation Reference | Residual Risk |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H-001** | Needle Shield Detachment during transit | 4 (Critical) | 1 | Interference-fit optimization of the Rigid Needle Shield (RNS) with a pull-off force requirement of 15N < F < 35N. | DV-REP-2025-004 (Vibration Testing) | Low |
| **H-002** | Premature Activation (Misfire) | 5 (Catastrophic) | 2 | Dual-stage mechanical interlock: The device requires >10N of skin-contact force before the fire-button can be depressed. | DV-REP-2025-012 (Force-to-Fire Analysis) | Low |
| **H-003** | Incomplete Dose Delivery (Viscosity) | 4 (Critical) | 1 | High-force Power Spring (K=2.4 N/mm) calibrated to overcome 15cP viscosity at 2-8°C. | TM-MECH-992 (Spring Rate Verification) | Medium |
| **H-004** | Glass Syringe Fracture (Hydrostatic) | 5 (Catastrophic) | 2 | Flange reinforcement and implementation of a dampened plunger rod to reduce peak impact force. | GLUC-2025-088 (Impact Stress FEA) | Low |
| **H-005** | Incorrect Injection Site Selection | 3 (Serious) | 3 | Augmented Reality (AR) Instruction App via Google Health Link; High-contrast IFU illustrations. | HF-REP-2025-001 (Human Factors Study) | Low |
| **H-006** | Contamination (Non-Sterility) | 5 (Catastrophic) | 1 | ISO Class 5 Cleanroom Assembly; 100% Visual Inspection for RNS integrity. | SOP-GHS-QC-402 (Bioburden Control) | Negligible |

---

#### 4.2.5 Technical Specifications and Calculations for Control Measures

##### 4.2.5.1 Power Spring Force Calibration (Control for Under-dosing)
To mitigate the risk of incomplete delivery (Hazard H-003), the GHS-Autoinjector Gen-II utilizes a high-carbon steel compression spring. The delivery time ($t$) for the viscous Glucogen-XR solution is calculated using the Hagen-Poiseuille equation adapted for autoinjectors:

$$F_{spring} = \frac{8 \cdot \eta \cdot L \cdot Q}{\pi \cdot r^4} + F_{friction}$$

Where:
*   $\eta$ (Dynamic Viscosity) = 12.5 cP (at $5^\circ C$)
*   $L$ (Needle Length) = 12.7 mm
*   $r$ (Needle Inner Radius) = 0.125 mm (27G thin wall)
*   $F_{friction}$ (Plunger-Stopper Break-loose force) $\approx 5.5 N$

**Control Specification:** The spring must provide a minimum end-of-stroke force of 18.5 N to ensure full delivery within < 10 seconds.
**Batch Testing:** Every lot (e.g., GLUC-2025-001 through GLUC-2025-500) undergoes automated force-displacement profiling.

##### 4.2.5.2 Skin Contact Sensor Threshold (Control for Accidental Needlestick)
The device incorporates a sleeve-triggered mechanism. The force required to depress the needle guard ($F_{guard}$) is set to $12.0 \pm 2.0 N$.
*   **Rationale:** This threshold is high enough to prevent accidental activation by pediatric users or light contact, yet low enough for geriatric T2DM patients with limited dexterity.

---

#### 4.2.6 Manufacturing Process Controls (Quality by Design)

The risk of manufacturing-induced defects is controlled through a rigorous Critical Process Parameter (CPP) monitoring program at the South San Francisco facility.

##### Table 4.2.6-A: Manufacturing Risk Controls for Batch GLUC-2025-XXX

| Process Step | Control Parameter | Equipment ID | Tolerance / Limit | Detection Method |
| :--- | :--- | :--- | :--- | :--- |
| **Syringe Loading** | Flange Orientation | ROBOT-GHS-01 | $0^\circ \pm 5^\circ$ | High-speed Vision System (Cognex) |
| **Spring Compression** | Pre-load Force | PRESS-GHS-04 | $22.5 N \pm 1.0 N$ | Load Cell (Strain Gauge) |
| **Final Assembly** | Snap-fit Engagement | ASSY-GHS-09 | Acoustic Signature | Ultrasonic Sensor |
| **Labeling** | UDI Verification | PRINT-GHS-02 | GS1 DataMatrix | 1D/2D Barcode Scanner |

---

#### 4.2.7 Detailed Protocol: Verification of Force-to-Fire (Protocol P-DEV-2025-14)

**Objective:** To verify that the risk control measure for premature activation (H-002) is functional across environmental extremes.

**Procedure:**
1.  **Sampling:** Select 30 units from Batch **GLUC-2025-015**.
2.  **Conditioning:** 
    *   Sub-group A (n=10): Incubate at $-20^\circ C$ for 24 hours.
    *   Sub-group B (n=10): Incubate at $60^\circ C$ for 24 hours (Accelerated Aging).
    *   Sub-group C (n=10): Ambient $25^\circ C / 60\% RH$.
3.  **Measurement:** Mount the device in a Zwick-Roell Universal Testing Machine (UTM-GHS-07).
4.  **Compression:** Apply a downward force at a rate of 50 mm/min onto the needle guard.
5.  **Recording:** Log the force at which the internal firing pin is released.
6.  **Acceptance Criteria:** $10.0 N \le F_{fire} \le 16.0 N$.

**Results (Summary for Batch GLUC-2025-015):**
*   **Mean Force:** 12.8 N
*   **Standard Deviation:** 0.45 N
*   **Cpk Index:** 1.92 (Indicating high process capability)

---

#### 4.2.8 Human Factors and Usability Risk Controls

Given the complexity of extended-release GLP-1 therapy, "Information for Safety" (Tier 3) is a critical risk control.

**Control Measures:**
1.  **Dual-Auditory Confirmation:** The device provides a distinct "click" at the start of injection and a second "click" + visual plunger indicator when the dose is complete.
2.  **Color-Coded Feedback:** The viewing window transitions from Clear (Ready) to Green (Complete) to prevent "wet injections" caused by premature removal.
3.  **Tactile Grip:** The housing geometry was redesigned (Rev. C) following HF study **HF-REP-2024-09** to include a rubberized thermoplastic elastomer (TPE) overmold, reducing the risk of dropping the device.

---

#### 4.2.9 Post-Market Surveillance and Risk Re-Evaluation

The risk control strategy is not static. GHS employs a **Closed-Loop Quality System (CLQS)** where post-market complaints (e.g., via the Google Health Patient Portal) are fed back into the Risk Management File (RMF).

**Monitoring Thresholds:**
*   **Alert Limit:** 1 failure per 10,000 units (triggering Root Cause Analysis).
*   **Action Limit:** 3 failures per 10,000 units (triggering Field Safety Corrective Action).

---

#### 4.2.10 Conclusion

The Risk Control Measures for Glucogen-XR (GLUC-2025-XXX) ensure that all identified hazards are mitigated through robust engineering, precision manufacturing, and validated user interfaces. The residual risk profile is documented as acceptable, and the device is deemed safe for its intended use in the management of Type 2 Diabetes Mellitus.

---
**Approvals:**
*   *Electronically Signed:* Dr. Aris Zenon, Head of Regulatory Affairs, Google Health Sciences.
*   *Date:* 14-Oct-2024
*   *Document ID:* GHS-DX-RCM-2025-001-REV-B

---

# Post-Market Surveillance Plan

## Complaint Handling

# MODULE 3.2.P.7: DRUG PRODUCT DEVICE CONSTITUENT PART
## SECTION: POST-MARKET SURVEILLANCE PLAN
### SUBSECTION: 3.2.P.7.4.2 COMPLAINT HANDLING AND VIGILANCE PROCEDURES

---

#### 1.0 INTRODUCTION AND SCOPE
This document outlines the comprehensive Complaint Handling System (CHS) for **Glucogen-XR (glucapeptide extended-release)**, a GLP-1 receptor agonist delivered via a pre-filled, disposable autoinjector. As a combination product (21 CFR Part 3), Google Health Sciences (GHS) maintains a unified quality system that integrates requirements from **21 CFR Part 4**, **21 CFR Part 820 (Quality System Regulation)**, and **21 CFR Part 211 (Current Good Manufacturing Practice)**.

This section specifically details the procedures for receiving, reviewing, evaluating, investigating, and reporting complaints associated with the device constituent part of Glucogen-XR.

#### 2.0 REGULATORY COMPLIANCE FRAMEWORK
The Google Health Sciences Complaint Management System is designed to comply with the following international and domestic regulatory standards:

*   **21 CFR Part 4 Subpart A:** Compliance with CGMP Requirements for Combination Products.
*   **21 CFR 820.198:** Complaint Files.
*   **21 CFR Part 803:** Medical Device Reporting (MDR).
*   **21 CFR Part 806:** Medical Devices; Reports of Corrections and Removals.
*   **ISO 13485:2016:** Medical devices — Quality management systems.
*   **ISO 14971:2019:** Application of risk management to medical devices.
*   **ICH Q10:** Pharmaceutical Quality System.
*   **FDA Guidance:** *Postmarket Safety Reporting for Combination Products (2019).*

---

#### 3.0 ORGANIZATIONAL RESPONSIBILITIES
The Post-Market Surveillance (PMS) Unit within Google Health Sciences (3000 Innovation Drive, South San Francisco) is structured as follows:

| Role | Responsibility |
| :--- | :--- |
| **GHS Quality Assurance (QA)** | Final oversight, approval of investigation reports, and CAPA initiation. |
| **GHS Medical Safety (GMS)** | Clinical evaluation of adverse events (AEs) and seriousness assessment. |
| **GHS Device Engineering** | Technical Root Cause Analysis (RCA) and bench testing of returned units. |
| **Regulatory Affairs (RA)** | Submission of MDRs, eMDRs, and 15-day Alert Reports to the FDA. |
| **Customer Support/Call Center** | Initial intake, data entry into the Global Complaint Database (GCD). |

---

#### 4.0 COMPLAINT INTAKE AND TRIAGE PROTOCOL (CP-7001)

##### 4.1 Initial Intake (Step-by-Step)
All complaints regarding Glucogen-XR (Batch series GLUC-2025-XXX) are funneled through the Global Safety Database (GSD).

1.  **Data Capture:** Upon receipt of a call, email, or web-form, the Intake Specialist records the following mandatory fields:
    *   Reporter Information (Healthcare Provider, Patient, Pharmacist).
    *   Product Details: Lot/Batch Number (e.g., GLUC-2025-001), Expiration Date.
    *   Event Description: Mechanical failure, needle malfunction, medication leakage, or skin reaction.
2.  **Unique Identifier Assignment:** Each case is assigned a unique tracking number: `GHS-GLUC-YYYY-XXXXX`.
3.  **Device Retrieval:** A "Return Kit" is dispatched immediately for any mechanical malfunction complaint to facilitate physical testing.

##### 4.2 Triage and Classification
Complaints are classified within 24 hours of receipt based on the following matrix:

| Classification | Definition | Reporting Timeline (US FDA) |
| :--- | :--- | :--- |
| **Category 1: Death/Serious Injury** | Any event where the device may have caused or contributed to a death or serious injury. | **MDR within 30 days** (or 5 days if remedial action is required). |
| **Category 2: Malfunction (Likely)** | Device fails to meet specs; if it recurred, it would likely cause death/serious injury. | **MDR within 30 days**. |
| **Category 3: Non-Medical Malfunction** | Cosmetic defect or failure with no potential for injury. | Internal tracking only (Annual Report). |
| **Category 4: Adverse Event (AE) only** | No device failure reported; clinical symptoms only. | Processed via Pharmacovigilance (21 CFR 314.80). |

---

#### 5.0 TECHNICAL INVESTIGATION PROTOCOL (TIP-442)

For all Category 1 and 2 complaints involving the Glucogen-XR Autoinjector, a technical investigation is mandatory.

##### 5.1 Retention Sample Comparison
The Quality Control (QC) laboratory retrieves retention samples from the specified batch (e.g., **GLUC-2025-014**).
*   **Procedure:** Perform visual inspection and functional testing (activation force, glide force, needle extension) on $n=10$ retention units.
*   **Acceptance Criteria:** Must align with Certificate of Analysis (CoA) specifications provided in Section 3.2.P.5.

##### 5.2 Root Cause Analysis (RCA) Methodologies
GHS employs the following tools for investigation:
1.  **Fault Tree Analysis (FTA):** Mapping the mechanical sequence of the autoinjector.
2.  **Scanning Electron Microscopy (SEM):** Used for needle tip observations if "pain at injection" or "needle bending" is reported.
3.  **High-Speed Video X-Ray:** To observe internal spring mechanism movement without dismantling the device.

##### 5.3 Batch Record Review (BRR)
A review of the Batch Production Record (BPR) for the implicated lot is conducted to identify:
*   Any non-conformance reports (NCRs) during assembly.
*   Environmental monitoring (EM) excursions.
*   In-process control (IPC) failures during the secondary packaging phase (Unit Operations 405-410).

---

#### 6.0 STATISTICAL ANALYSIS OF COMPLAINT DATA
Google Health Sciences utilizes a "Trigger Level" system to detect signals in post-market data.

##### 6.1 Calculation of Complaint Rate
The complaint rate ($R_c$) is calculated monthly per batch:
$$R_c = \left( \frac{\text{Total Complaints for Batch } X}{\text{Total Units Distributed for Batch } X} \right) \times 1,000,000$$
*(Expressed as Complaints per Million Units - CPMU)*

##### 6.2 Thresholds and Action Limits
| Metric | Alert Limit (Yellow) | Action Limit (Red) |
| :--- | :--- | :--- |
| Activation Failure | 50 CPMU | 150 CPMU |
| Incomplete Dose | 75 CPMU | 200 CPMU |
| Needle Retraction Failure | 20 CPMU | 60 CPMU |

If the Action Limit is exceeded for any batch (e.g., **GLUC-2025-088**), a Corrective and Preventive Action (CAPA) is automatically opened.

---

#### 7.0 REPRESENTATIVE COMPLAINT DATA TRENDING (PROJECTIONS)
The following table reflects mock data for the first 6 months of market availability for Glucogen-XR.

| Month | Batch Number | Units Distributed | Reported Complaints | Malfunction Type | Severity | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Jan 2025 | GLUC-2025-001 | 50,000 | 2 | Premature Activation | Low | Closed |
| Feb 2025 | GLUC-2025-001 | 45,000 | 1 | Needle Bend | Med | Closed |
| Mar 2025 | GLUC-2025-002 | 110,000 | 14 | Incomplete Dose | High | Under Inv. |
| Apr 2025 | GLUC-2025-003 | 95,000 | 3 | Labeling Error | Low | Closed |
| May 2025 | GLUC-2025-004 | 120,000 | 5 | Activation Force | Med | Open |

---

#### 8.0 VIGILANCE REPORTING (FDA 3500A)
For events meeting the 21 CFR 803 criteria, GHS Regulatory Affairs will submit an eMDR.

##### 8.1 Reporting Decision Tree
1.  **Did the device cause death?** $\rightarrow$ **YES**: 30-day MDR.
2.  **Did the device cause serious injury?** $\rightarrow$ **YES**: 30-day MDR.
3.  **Did the device malfunction?** $\rightarrow$ **YES**: If recurrence would likely cause death/injury $\rightarrow$ 30-day MDR.
4.  **Is it a 5-day reportable event?** $\rightarrow$ Only if FDA requests or if GHS identifies a trend requiring remedial action to prevent public health harm.

---

#### 9.0 CORRECTIVE AND PREVENTIVE ACTION (CAPA) LINKAGE
Complaint handling is the primary input for the CAPA system (SOP-QA-009). If a technical investigation identifies a design flaw or manufacturing variance in the GLUC-2025 series:
1.  **Containment:** Quarantine of all undistributed units of the affected lot.
2.  **Investigation:** Cross-functional team (Engineering, Manufacturing, QA) performs RCA.
3.  **Implementation:** Validation of design changes or process improvements.
4.  **Effectiveness Check:** Review of subsequent batch data (e.g., **GLUC-2025-090** onward) to ensure the CPMU has returned to baseline.

#### 10.0 RECORD RETENTION
In accordance with **21 CFR 820.180**, all complaint files for Glucogen-XR will be retained for a period of seven (7) years from the date of closure, or for the expected life of the device, whichever is longer. Records are stored in the Google Cloud Life Sciences Vault with 256-bit encryption and full audit trail capabilities.

---
**END OF SECTION**
**Approved By:**
*Director of Quality, Google Health Sciences*
*Document ID: GHS-XR-PMS-001-V1.0*
*Date: 24-MAY-2024*

---

## Vigilance Reporting

# MODULE 3: QUALITY - DEVICE MASTER FILE (DMF)
## SECTION 5.3: POST-MARKET SURVEILLANCE PLAN
### SUBSECTION 5.3.4: VIGILANCE REPORTING PROCEDURES AND PROTOCOLS

---

#### 5.3.4.1 Executive Summary of Vigilance Framework
Google Health Sciences (GHS), a Division of Google Cloud Life Sciences, operates under a global unified Vigilance Reporting Framework (VRF) for the Glucogen-XR (glucapeptide extended-release) delivery system. Given the drug-device constituent nature of the product (under 21 CFR Part 4), the vigilance reporting system integrates requirements from 21 CFR Part 803 (Medical Device Reporting), 21 CFR Part 4 (Subpart B), and 21 CFR Part 314.80 (Postmarketing reporting of adverse drug experiences).

This document details the systematic approach to identifying, capturing, evaluating, and reporting adverse events (AEs) and product problems (PPs) associated with the Glucogen-XR autoinjector system (Batch Series GLUC-2025-XXX).

#### 5.3.4.2 Regulatory Standards and Compliance Matrix
The GHS Vigilance Reporting system is engineered to satisfy the following international and domestic standards:

| Standard/Regulation | Jurisdiction | Description |
|:---|:---|:---|
| **21 CFR Part 803** | USA (FDA) | Medical Device Reporting (MDR) requirements for manufacturers. |
| **21 CFR Part 4** | USA (FDA) | Regulation of Combination Products; Postmarketing Safety Reporting. |
| **ISO 13485:2016** | Global | Quality Management Systems – Requirements for regulatory purposes (Clause 8.2). |
| **ISO 14155:2020** | Global | Clinical investigation of medical devices for human subjects. |
| **ICH E2D** | International | Post-Approval Safety Data Management: Definitions and Standards for Expedited Reporting. |
| **MEDDEV 2.12/1** | EU (Legacy) | Guidelines on a Medical Devices Vigilance System. |
| **EU MDR 2017/745** | Europe | Regulation on medical devices (Articles 87-92). |

#### 5.3.4.3 Identification of Reportable Events
Events associated with Glucogen-XR are categorized into three primary streams for vigilance assessment:

##### 5.3.4.3.1 Adverse Drug Experiences (ADE)
In accordance with 21 CFR 314.80, any adverse event associated with the use of the glucapeptide extended-release formulation, whether or not considered drug-related, including:
*   Events occurring in the course of the use of a drug product in professional practice.
*   Events occurring from drug overdose (accidental or intentional).
*   Events occurring from drug withdrawal.
*   Significant failure of pharmacological action.

##### 5.3.4.3.2 Medical Device Reports (MDR)
In accordance with 21 CFR 803, GHS must report when it becomes aware of information that reasonably suggests that the Glucogen-XR delivery device:
1.  May have caused or contributed to a death or serious injury.
2.  Has malfunctioned and this device or a similar device that GHS markets would be likely to cause or contribute to a death or serious injury if the malfunction were to recur.

##### 5.3.4.3.3 Malfunction Thresholds for Glucogen-XR
A "Malfunction" is defined as the failure of the autoinjector to meet its performance specifications or otherwise perform as intended. Specific malfunction triggers for the GLUC-2025-XXX series include:
*   **Needle Fire Failure:** Needle fails to extend beyond the shroud.
*   **Incomplete Dose:** Delivery of <95% of the 1.0mL payload.
*   **Premature Activation:** Device triggers prior to skin contact pressure threshold (calculated at <15N).
*   **Stuck Plunger:** Plunger rod fails to transit the full length of the glass barrel.

---

#### 5.3.4.4 Incident Evaluation Protocol (IEP-GHS-09)
Upon receipt of a complaint or safety signal, the following 5-step evaluation protocol is initiated by the GHS Vigilance Committee.

**Step 1: Receipt and Triage (T+24 Hours)**
*   **Entry Point:** GHS Cloud Safety Portal or Medical Information Hotline.
*   **Data Minimums:** Identifiable patient, identifiable reporter, suspect device/drug (Batch No: GLUC-2025-001 through GLUC-2025-999), and description of event.

**Step 2: Seriousness Assessment**
Seriousness is defined by the outcome. An event is serious if it results in:
*   Death.
*   Life-threatening illness or injury.
*   Permanent impairment of a body function or permanent damage to a body structure.
*   Condition necessitating medical or surgical intervention to preclude permanent impairment/damage.

**Step 3: Relationship (Causality) Analysis**
The GHS Medical Safety Officer (MSO) utilizes the Naranjo Algorithm for the drug component and the IMDRF (International Medical Device Regulators Forum) causality framework for the device component.

**Step 4: Expectedness Determination**
Comparison of the event against the "Glucogen-XR Investigator’s Brochure" (IB) and the "Instructions for Use" (IFU) v4.2.

**Step 5: Reporting Decision**
Final determination of 15-day Alert report (FDA Form 3500A) or 5-day report (for events requiring remedial action to prevent an unreasonable risk of substantial harm).

---

#### 5.3.4.5 Data Management and Statistical Vigilance
Google Health Sciences leverages Google Cloud Vertex AI and BigQuery to perform real-time signal detection on post-market data. 

##### 5.3.4.5.1 Proportional Reporting Ratio (PRR) Calculation
The system automatically calculates the PRR for any new Device Malfunction Code (DMC):

$$PRR = \frac{a / (a + b)}{c / (c + d)}$$

Where:
*   $a$ = Number of reports of the specific malfunction with Glucogen-XR.
*   $b$ = Number of reports of all other malfunctions with Glucogen-XR.
*   $c$ = Number of reports of the specific malfunction with all other GLP-1 devices in the GHS database.
*   $d$ = Number of reports of all other malfunctions with all other GLP-1 devices in the GHS database.

A signal is triggered if $PRR \ge 2.0$, $Chi\text{-}square \ge 4.0$, and $a \ge 3$.

---

#### 5.3.4.6 Historical Vigilance Data (Simulation - Batch GLUC-2025-101 to 105)
The following table represents a simulated vigilance log for the initial pilot launch of the Glucogen-XR system.

| Case ID | Batch Number | Date Reported | Event Description | Device Malfunction Code (IMDRF) | Outcome | Reporting Status |
|:---|:---|:---|:---|:---|:---|:---|
| GHS-2025-001 | GLUC-2025-101 | 2025-03-12 | Injection site hematoma due to needle recoil. | E010302 (Recoil) | Recovered | MedWatch 3500A (15-day) |
| GHS-2025-004 | GLUC-2025-102 | 2025-03-15 | User reported "Click" but no drug dispensed. | A050501 (No dose) | No Injury | Malfunction (30-day) |
| GHS-2025-009 | GLUC-2025-101 | 2025-03-22 | Severe hypoglycemia following double-dose. | User Error | Hospitalized | ADE (15-day) |
| GHS-2025-012 | GLUC-2025-104 | 2025-04-01 | Glass barrel fracture during transport. | E0302 (Breakage) | Pre-use failure | Trend Report |
| GHS-2025-018 | GLUC-2025-105 | 2025-04-10 | Delayed needle retraction (15 seconds). | A0510 (Slow delivery) | Recovered | Malfunction (30-day) |

---

#### 5.3.4.7 Global Reporting Timelines and Templates
GHS adheres to the following maximum timelines for vigilance submission to the FDA Center for Devices and Radiological Health (CDRH) and Center for Drug Evaluation and Research (CDER).

| Report Type | Regulatory Reference | Timeline | Form/Method |
|:---|:---|:---|:---|
| **Individual Case Safety Report (ICSR)** | 21 CFR 314.80 | 15 Calendar Days | eCTD / Gateway |
| **Medical Device Report (Death/Serious Injury)** | 21 CFR 803.50 | 30 Calendar Days | eMDR (HL7) |
| **5-Day Report (Urgent Risk)** | 21 CFR 803.53 | 5 Working Days | eMDR (HL7) |
| **Malfunction Report (Non-Serious)** | 21 CFR 803.50 | 30 Calendar Days | eMDR (HL7) |
| **Periodic Adverse Drug Experience Report (PADER)** | 21 CFR 314.80 | Quarterly (Year 1-3) | eCTD |

#### 5.3.4.8 Recall and Field Safety Corrective Action (FSCA) Coordination
The Vigilance Reporting system is directly linked to the GHS Recall Management System (RMS). If a vigilance trend identifies a recurring defect in the GLUC-2025-XXX batch series (e.g., a failure rate $>0.5\%$ for needle shield deployment), the following protocol is triggered:

1.  **Health Hazard Assessment (HHA):** A multi-disciplinary team (Quality, Medical, Regulatory) evaluates the risk to patient health according to 21 CFR Part 7.
2.  **Quarantine:** Immediate digital lock of all unallocated inventory in the GHS supply chain via the Google Cloud ERP system.
3.  **FDA Notification:** Submission of a 21 CFR 806 report (Reports of Corrections and Removals) within 10 working days of initiating a field action.
4.  **Field Safety Notice (FSN):** Rapid dissemination of safety information to healthcare providers and patients.

#### 5.3.4.9 Personnel Training and Quality Oversight
All personnel involved in the Vigilance Reporting workflow must undergo mandatory biennial training on GHS-SOP-VIG-001 (Adverse Event Capture) and GHS-SOP-VIG-002 (MDR Submission).

*   **Training Record ID:** TR-2025-VIG-GLUC
*   **Audit Frequency:** The GHS Internal Audit team conducts quarterly reviews of the "Complaint-to-MDR" transition to ensure no under-reporting of device malfunctions.
*   **System Validation:** The GHS Safety Database is validated according to GAMP 5 standards and 21 CFR Part 11 for electronic signatures and audit trails.

---

*This concludes the Vigilance Reporting section for Glucogen-XR. Documentation continues in Section 5.4 regarding Post-Market Clinical Follow-up (PMCF) studies.*

---

## Trend Analysis

### **3.2.P.7.3.1 POST-MARKET SURVEILLANCE PLAN: TREND ANALYSIS PROTOCOL**

**Document Number:** GHS-XR-PMS-TRND-001  
**Version:** 4.0 (Final)  
**Sponsor:** Google Health Sciences (GHS), a Division of Google Cloud Life Sciences  
**Product:** Glucogen-XR (glucapeptide extended-release) 1.5mg/0.5mL Pre-filled Autoinjector Pen  
**Facility:** 3000 Innovation Drive, South San Francisco, CA 94080, USA  
**Applicable Regulations:** 21 CFR §822 (Postmarket Surveillance), 21 CFR §803 (Medical Device Reporting), ISO 13485:2016 (8.2.1), ISO 14971:2019, ICH Q9, ICH Q10.

---

#### **1.0 SCOPE AND OBJECTIVE**
This subsection details the statistical methodologies and operational frameworks for the **Trend Analysis** of post-market data related to Glucogen-XR. Unlike individual Case Safety Reports (ICSRs) which focus on single events, Trend Analysis focuses on identifying statistically significant increases in the frequency or severity of events that do not necessarily meet the criteria for individual expedited reporting but collectively indicate a shift in the benefit-risk profile.

The primary objective is the early detection of:
1.  **Product Quality Trends:** Mechanical failure rates of the autoinjector mechanism.
2.  **Safety Trends:** Increasing frequency of non-serious adverse events (e.g., injection site reactions).
3.  **User Error Trends:** Patterns in "malfunction" reports linked to the human-factor interface.
4.  **Stability Trends:** Efficacy decay or degradation patterns in specific batch clusters (GLUC-2025-XXX).

---

#### **2.0 STATISTICAL METHODOLOGY FOR TREND DETECTION**
GHS utilizes a Bayesian "Signal Detection" framework supplemented by frequentist Shewhart Control Charts (X-bar and R-charts) to monitor device performance.

##### **2.1 Calculation of Reporting Ratios (PRR)**
The Proportional Reporting Ratio (PRR) is calculated monthly for specific Failure Modes (FMs) as identified in the dFMEA/pFMEA.

$$PRR = \frac{a / (a + b)}{c / (c + d)}$$

*Where:*
*   **a** = Number of reports for specific failure mode (e.g., "Needle Shield Non-Retraction") for Glucogen-XR.
*   **b** = Number of all other reports for Glucogen-XR.
*   **c** = Number of reports for the same failure mode for all other GLP-1 devices in the GHS database.
*   **d** = Number of all other reports for all other GLP-1 devices in the GHS database.

**Threshold for Signal Generation:**
*   PRR ≥ 2.0
*   Chi-squared ($\chi^2$) ≥ 4.0
*   Minimum of 3 cases (a ≥ 3)

##### **2.2 Poisson Distribution for Rare Events**
For low-frequency, high-severity malfunctions (e.g., accidental needle sticks), a Poisson probability model is applied:
$$P(k; \lambda) = \frac{\lambda^k e^{-\lambda}}{k!}$$
Where $\lambda$ represents the historical mean of the event type per 100,000 units distributed.

---

#### **3.0 DATA SOURCES AND INTEGRATION**
Trend analysis integrates structured and unstructured data from the Google Cloud Life Sciences "Sentinel-AI" database.

| Data Source ID | Description | Refresh Frequency |
| :--- | :--- | :--- |
| DS-PQ-001 | Customer Complaint Management System (CCMS) | Real-time |
| DS-SF-002 | Global Safety Database (Argus/Veeva) | Weekly |
| DS-MF-003 | Batch Release Records (LIMS - GLUC-2025 series) | Per Batch |
| DS-SM-004 | Social Media Scraper (NLP-filtered for "Glucogen-XR") | Daily |
| DS-LR-005 | Literature Review (PubMed, EMBASE) | Monthly |

---

#### **4.0 HISTORICAL BASELINE AND THRESHOLDS (GLUC-2025 SERIES)**
The following table establishes the "Normal Operating Range" (NOR) and "Upper Control Limit" (UCL) for mechanical performance based on Phase III clinical trial data and validation testing.

**Table 4.1: Trend Analysis Thresholds by Failure Mode**

| Failure Mode (FM) | Criticality | Baseline (per 10k units) | UCL (Action Limit) | Statistical Method |
| :--- | :--- | :--- | :--- | :--- |
| **Non-Activation** | High | 0.04 | 0.12 | 3-Sigma Shewhart |
| **Premature Activation** | Med | 0.08 | 0.25 | 3-Sigma Shewhart |
| **Incomplete Dose** | High | 0.02 | 0.06 | Poisson Probability |
| **Needle Bend/Break** | Critical | 0.001 | >0.005 | Zero-Tolerance (Root Cause) |
| **Cap Removal Difficulty**| Low | 0.45 | 1.10 | C-Chart |

---

#### **5.0 STEP-BY-STEP TREND INVESTIGATION PROTOCOL**

In the event of a "Trend Trigger" (exceeding UCL), the following protocol is initiated by the Quality Management Team (QMT).

**Step 1: Data Verification (T+24 Hours)**
*   Audit the raw data for duplicate entries.
*   Confirm the batch numbers (e.g., check if events are clustered in **GLUC-2025-001** vs **GLUC-2025-015**).
*   *Requirement:* Ensure all events are confirmed malfunctions or adverse events, not "inquiry-only" entries.

**Step 2: Batch Analysis (T+72 Hours)**
*   Cross-reference the affected batch (GLUC-2025-XXX) with the Manufacturing Execution System (MES).
*   Review environmental conditions (humidity/temp) during the fill-finish of that specific lot at the 3000 Innovation Drive facility.
*   Evaluate raw material COAs (Certificates of Analysis) for the polymer resin used in the autoinjector housing.

**Step 3: Comparative Analysis (T+5 Days)**
*   Perform a "Cohort Study" comparing the performance of the current batch against the last 10 released batches.
*   Utilize ANOVA to determine if the variance is statistically significant ($p < 0.05$).

**Step 4: Risk Re-Assessment (T+10 Days)**
*   Update the Hazard Analysis (ISO 14971).
*   Determine if the "Residual Risk" is still acceptable.
*   Decision Point: Initiate CAPA (Corrective and Preventive Action) or continue monitoring.

---

#### **6.0 REPRESENTATIVE DATA: SIMULATED TREND REPORT (Q1 2025)**

Below is a representative sample of a Trend Analysis report for the first quarter of production.

**Table 6.1: Batch Performance Summary (GLUC-2025-001 to GLUC-2025-010)**

| Batch Number | Units Distributed | Mechanical Complaints | Rate (per 1,000) | PRR Value | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GLUC-2025-001 | 50,000 | 4 | 0.08 | 0.95 | Normal |
| GLUC-2025-002 | 50,000 | 5 | 0.10 | 1.02 | Normal |
| GLUC-2025-003 | 48,500 | 12 | 0.24 | 2.15 | **TRIGGER** |
| GLUC-2025-004 | 50,000 | 6 | 0.12 | 1.10 | Normal |
| GLUC-2025-005 | 50,000 | 3 | 0.06 | 0.88 | Normal |
| GLUC-2025-006 | 51,000 | 18 | 0.35 | 3.40 | **TRIGGER** |
| GLUC-2025-007 | 49,000 | 4 | 0.08 | 0.98 | Normal |

**Analysis of Trigger (Batch GLUC-2025-006):**
Investigation identified a correlation between high complaint rates in Batch 006 and a specific molding machine (ID: INJ-MOLD-SH-04) used during the 3rd shift. Micrometer measurements indicated a variance of 0.05mm in the needle shield track, leading to "Non-Activation" triggers.

---

#### **7.0 REPORTING TO REGULATORY AUTHORITIES**

Under 21 CFR §803 and the EU Medical Device Regulation (MDR) 2017/745, GHS adheres to the following reporting timelines for identified trends:

1.  **Imminent Public Health Threat:** 2 Days.
2.  **Death or Serious Injury Trend:** 15 Days.
3.  **Significant Trend (Non-Serious):** Quarterly Periodic Safety Update Reports (PSUR).

**Table 7.1: Regulatory Reporting Matrix for Trends**

| Trend Type | Notification Path | Documentation |
| :--- | :--- | :--- |
| Increase in Adverse Event Severity | FDA MedWatch 3500A | Supplemental NDA (sNDA) |
| Device Malfunction Rate > UCL | FDA CDRH (eMDR) | CAPA Summary Report |
| New Risk Identified | EMA / FDA | RMP (Risk Management Plan) Update |

---

#### **8.0 CONTINUOUS IMPROVEMENT (ICH Q10)**
The Trend Analysis results are fed directly into the **Google Health Sciences Annual Product Review (APR)**. This ensures that the "Post-Market" data informs "Pre-Market" design for Version 2.0 of the Glucogen-XR device.

**Calculation for Annual Reliability Index (ARI):**
$$ARI = \left( 1 - \frac{\sum \text{Critical Failures}}{\sum \text{Total Units Sold}} \right) \times 100$$
*Target ARI for Glucogen-XR:* **99.998%**

---

#### **9.0 REFERENCES**
1.  **FDA Guidance for Industry:** *Postmarket Surveillance Under Section 522 of the Federal Food, Drug, and Cosmetic Act.*
2.  **ISO/TR 20416:2020:** *Medical devices — Post-market surveillance for manufacturers.*
3.  **ICH E2C(R2):** *Periodic Benefit-Risk Evaluation Report (PBRER).*
4.  **USP <1106>:** *Immunogenicity Assays — Design and Validation of Immunoassays to Detect Anti-Drug Antibodies.*

---
*End of Subsection 3.2.P.7.3.1*

---

