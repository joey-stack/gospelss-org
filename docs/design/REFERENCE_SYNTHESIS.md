# REFERENCE_SYNTHESIS.md — Architectural & Visual Study Translation

> **Governing Protocol**: Reference Study Rules (ADR Compliance, Token Distributions, No Direct Cloning)  
> **Target**: GOSPELS Platform (`gospelss.org`)  
> **Date**: October 2026  

---

## 1. Executive Summary
In compliance with the **Reference Study Rules**, this document synthesizes structural, functional, and aesthetic patterns from the 5 approved design references. None of the reference code, direct CSS values, or media assets are cloned; instead, we extract **token distribution ranges** and define **original distinctive moves** that exceed the benchmarks while staying true to the sacred non-profit mission of GOSPELS in Gothenburg, Sweden.

---

## 2. Reference Analysis & Synthesis

### 1. Morrow Church (`morrowchurch.org`) — *Relational Warmth & Welcoming Copy*
- **Observed Structure**: Light warm backgrounds (`#FAFAFA` range), high vertical whitespace (80–120px section paddings), authentic community copy focusing on hospitality and grace.
- **Token Distributions**:
  - Primary text contrast: `14:1` to `16:1`
  - Spacing rhythm: Generous vertical padding (`5rem` to `7.5rem`)
  - Border radius: Soft, organic corners (`12px` to `16px`)
- **GOSPELS Distinctive Move**: Pair warm Scandinavian grey backgrounds (`#F5F5F3`) with bilingual welcoming copy (Swedish & English) and an embedded confidential prayer request module satisfying Swedish GDPR Article 9.

---

### 2. Planfest — *Event Clarity & Frictionless RSVP*
- **Observed Structure**: Clear visual hierarchy for dates; floating calendar badge on card upper-left; high-visibility RSVP action bar.
- **Token Distributions**:
  - Date badge font weight: `700`–`800`
  - Card elevation: Subtle ambient shadow (`0 4px 20px rgba(0,0,0,0.04)`) with crisp `1px` border stroke
  - RSVP click target: Minimum `48px` touch target for mobile usability
- **GOSPELS Distinctive Move**: Two-tier event cards:
  - *Active Annual Gathering* (*Holy Spirit Worship*): Instant modal RSVP requiring only Name and Email (zero login friction) with automated 24-hour reminder email dispatch via Resend.
  - *2027 Outreach* (*Göteborgs Lovsångskonsert*): "Save the Date" / "Notify Me" pre-launch engagement flow.

---

### 3. REYNA — *Immersive Live Worship Media Hub*
- **Observed Structure**: Deep charcoal/black media containers, high dynamic range video thumbnails, smooth horizontal touch carousels.
- **Token Distributions**:
  - Background surface: Dark charcoal (`#18181B` / `#121214`)
  - Accent contrast: Vibrant neon/cyan accent over dark surfaces (`7:1`+)
  - Aspect ratio: `16:9` cinematic video frames with rounded `16px` corners
- **GOSPELS Distinctive Move**: High-fidelity *Watch & Listen* player featuring YouTube concert performance embeds, Spotify audio track links, and real Gothenburg testimony highlights.

---

### 4. Karuna — *Transparency & Non-Profit Giving Blocks*
- **Observed Structure**: Impact stats (attendees reached, artists developed, volunteer hours), warm segmented giving tier pills, transparent fund allocation breakdown (Charity: Water benchmark).
- **Token Distributions**:
  - Stat counter font size: `2.5rem` to `3.5rem` bold
  - Segmented control pills: Active background in primary accent with crisp focus states
- **GOSPELS Distinctive Move**: Dual-channel Nordic giving interface:
  - Domestic Swedish giving via **Swish** mobile deep-link / QR code and **Bankgiro** (Org.nr: `802557-4883`).
  - Recurring monthly **Kingdom Partner** subscription (`150 kr/month`) powered by Stripe Elements and customer portal.

---

### 5. HOO Festival — *Open-Air Community Storytelling*
- **Observed Structure**: Culturally rooted event branding, transit directions, open-air map coordinates, energetic photography.
- **Token Distributions**:
  - Headline hierarchy: Expressive modern sans-serif typography with generous line-height
  - Mobile responsiveness: Sticky bottom action drawer on viewports `< 768px`
- **GOSPELS Distinctive Move**: Gothenburg transit badge (Västtrafik tram/bus stops near Gothenburg city square) and volunteer shift signup with mandatory `< 18` parental consent safeguarding.

---

## 3. ADR-006: Reference Synthesis Architectural Invariance
- **Status**: Approved
- **Decision**: All UI components built in Phase 3 onwards must strictly utilize the original token tokens defined in `docs/design/BRAND_GUIDELINES.md` rather than adopting raw styles from reference websites.
- **Traceability**: Satisfies AGENTS.md §5 (Reference Study Rules) and PROJECT.md §3.
