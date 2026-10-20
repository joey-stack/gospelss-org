# COMPLIANCE-SURFACE.md — GOSPELS (gospelss.org)

**Classification**: Category A (Direct Release with Swedish GDPR & Non-Profit Giving Governance)  
**Organization**: Gospels (Swedish Organisationsnummer: 802557-4883)  
**Jurisdiction**: Sweden / European Union (GDPR)  
**Date**: October 2026  

---

## 1. Compliance Classification & Decision
- **Category**: **Category A** (No pre-market SKU licensing barriers such as NAFDAC/FDA/CPNP; non-commercial ministry and cultural charity).
- **Flagship Initiatives**:
  - *Holy Spirit Worship* (Active Annual Indoor Gathering) → Live RSVP & Volunteer Intake.
  - *Göteborgs Lovsångskonsert* (Debuting 2027 Open-Air Outreach) → "Save the Date" / "Notify Me" pre-registration flow.

---

## 2. Regulatory Matrix & Frameworks

| Domain | Regulatory Body | Framework / Standard | Compliance Requirement |
| :--- | :--- | :--- | :--- |
| **Data Protection** | Integritetsskyddsmyndigheten (IMY) / EU | GDPR (EU 2016/679) | Server hosting within EU; strict data processing agreements; cookie consent banner. |
| **Special Category Data** | IMY / EU GDPR Art. 9 | Religious beliefs / Spiritual requests | **Explicit, opt-in consent** required for submitting confidential prayer requests. Must be encrypted at rest and accessible only by authorized pastoral prayer leads. |
| **Youth & Minors** | Swedish Law / GDPR Art. 8 | Child & Youth Protection | Volunteer applications for individuals under 18 require affirmative parental / guardian consent checkbox and contact record. |
| **Donations & Giving** | Skatteverket / Swedish Banking | Penningtvättslagen (AML) / Swish API / Bankgiro | Clear legal entity publication (Org nr 802557-4883), transparency reports (Charity: Water benchmark), verified recipient account. |
| **Payment Card Security** | PCI Security Standards Council | PCI-DSS SAQ-A | Zero storage of raw cardholder PAN/CVC; 100% offloaded tokenization via Stripe Elements / Checkout. |
| **Media & Photography** | Swedish Privacy Laws / GDPR | Image & Likeness Rights | Transparent event signage and RSVP terms regarding event crowd photography and video broadcast release. |

---

## 3. Explicit Implementation Rules
1. **Prayer Requests (GDPR Article 9)**:
   - Provide an explicit checkbox: *"I consent to GOSPELS prayer team processing this prayer request under strict confidentiality."*
   - Option to submit anonymously without retaining identifying personal information.
2. **Volunteers Under 18**:
   - Age verification question on volunteer intake.
   - If `< 18`, prompt for Parent/Guardian Name, Phone, and affirmative consent.
3. **Payments / Giving**:
   - One-off giving via Swish (standard Swedish mobile payment flow) and Bankgiro details.
   - Recurring "Kingdom Partner" giving (150 SEK/mo or custom) via Stripe recurring subscriptions with customer self-service portal for pausing/canceling.
4. **Media Releases**:
   - Terms on RSVP and public footers specifying that Holy Spirit Worship and Göteborgs Lovsångskonsert events are recorded for public gospel broadcast.

---

## 4. Out of Scope
- Commercial e-commerce / paid physical merchandise sales.
- Ingested, cosmetic, or medical claims.
- Commercial ticket brokering (all events are strictly free entry).
