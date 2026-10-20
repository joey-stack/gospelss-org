# PROJECT.md — GOSPELS Platform Specification

**Project**: GOSPELS  
**Primary Domain**: `gospelss.org`  
**Legal Entity**: Gospels (Swedish Organisationsnummer: 802557-4883)  
**Registered Jurisdiction**: Gothenburg, Sweden  
**Compliance Classification**: Category A (EU/Swedish Non-profit & GDPR Governance)  
**Document Status**: Approved Baseline  
**Compiled**: October 2026  

---

## 1. Identity
- **Project Name**: GOSPELS
- **Primary Domain**: `gospelss.org`
- **One-Sentence Mission**: GOSPELS is a non-profit gospel music ministry and charity based in Gothenburg, Sweden, creating exceptional, free gospel concerts (such as *Holy Spirit Worship* and *Göteborgs Lovsångskonsert*) to inspire worship, develop gifted gospel artists, and bring the transformative love of Christ beyond church walls and into the streets.
- **Operating Model**: Non-profit ministry / Ideell förening (free public worship concerts, community outreach, and kingdom partnership donations).

---

## 2. Client & Organization
- **Legal Business Name**: Gospels
- **Swedish Organisation Number (Org.nr)**: `802557-4883`
- **Founder / Leadership**: Founders & Pastoral Worship Leadership [PLACEHOLDER — names to be finalized prior to live launch]
- **Primary Contact Email**: `gospels26@proton.me`
- **Phone**: `+46 76 254 1764`
- **Primary Location**: Gothenburg (Göteborg), Sweden

---

## 3. Design References & Aesthetic Direction
Visual benchmark sites studied for functional, structural, and aesthetic excellence:
- **Morrow Church (`morrowchurch.org` / Framer)**: Calm, warm, light design, welcoming copy, high relational trust.
- **Planfest (Framer)**: Gold standard for event clarity — CMS-driven cards, floating date badges, and seamless RSVP interactions.
- **REYNA (Framer)**: Immersive dark media sections, smooth video carousels for premium live worship recordings.
- **Karuna (Framer)**: Non-profit trust, clear impact statistics, and warm giving blocks.
- **HOO Festival (Awwwards)**: Cultural storytelling, intimate warmth, and organic open-air festival branding.

---

## 4. Source Images & Assets
- **Founder & Leadership Portraits**: [PLACEHOLDER] Initial high-fidelity AI-assisted placeholders for layouts; client photoshoot scheduled prior to launch.
- **Concert & Event Photography**:
  - *Holy Spirit Worship*: Placeholder / atmospheric imagery until archival photos are supplied.
  - *Göteborgs Lovsångskonsert* (Debuts 2027): No prior street photos exist; AI-generated atmospheric imagery capturing Gothenburg open-air worship.
- **Logo & Visual Marks**: [TO BE CREATED] Complete fresh identity system generated in Phase 2.69 (Wordmark, SVG Icon mark, Favicon, Brand Guidelines).
- **Media Hub**: Video grid and music player embeds staged for YouTube and Spotify feeds.
- **Asset Directory Structure**:
  - `/public/assets/brand/`
  - `/public/assets/events/`
  - `/public/assets/team/`
  - `/public/assets/partners/`

---

## 5. Brand Identity & Emotional System
- **Core Brand Keywords**: **Sacred · Welcoming · Transformative** (with Modernity & Excellence as secondary pillars).
- **Core Color Palette**:
  - **Base Neutral**: Warm Grey (`#F5F5F3` / `#EBEAE5` / `#1A1918` dark surfaces)
  - **Primary Energy Accent**: Tech Turquoise (`#14B8A6` / `#0D9488`)
  - **Contrast & Text**: Deep Charcoal / Rich Slate (`#18181B`) and Pure White (`#FFFFFF`)
- **Typography System**:
  - **Headings & Navigation**: Modern Geometric Sans-Serif (*Hanken Grotesk* or *Inter*)
  - **Scripture, Quotes & Accents**: Classic Elegant Serif (*EB Garamond*)
- **Admired Brand Benchmarks**:
  - *Charity: Water*: Radical transparency, celebratory community impact storytelling.
  - *Elevation Worship / Hillsong*: Cultural relevance, creative excellence, and sacred reverence.

---

## 6. Domain Skills & Tooling Requirements
- **Core Web Platform**: Next.js 15 (App Router), React 19, TypeScript.
- **Styling**: Vanilla CSS / modern CSS Modules with design tokens matching Warm Grey + Tech Turquoise.
- **Email & Communications**: Resend API for automated 24-hour RSVP reminders, volunteer notifications, and prayer team alerts.
- **Giving & Financial Pipeline**:
  - Swish Handelsavtal integration (Sweden).
  - Bankgiro presentation & reference system.
  - Stripe Elements & Subscriptions (PCI-DSS compliant) for "Kingdom Partner" 150 kr/mo giving and international cards.
- **Compliance & Security**: Swedish GDPR compliance, IMY guidelines, Article 9 explicit consent handling.

---

## 7. Brand Source & Staging
- All generated graphics, vector badges, and responsive icons will be stored in `/public/assets/brand/`.
- Brand token definitions will be standardized in `src/styles/tokens.css` or equivalent root CSS variables.

---

## 8. Project-Specific Verification Gates
Before deployment of Phase 1, the following gates must be satisfied:
1. **Gate 1: Swish & Stripe Test Transactions**: Successful test verification of 150 SEK Swish donation flow and recurring Stripe Kingdom Partner subscription.
2. **Gate 2: Mobile Responsiveness**: Verified fluid experience on iOS Safari and Android Chrome (navigation drawer, sticky RSVP bar, horizontal scroll carousels).
3. **Gate 3: Accessibility & Contrast (WCAG AA)**: Strict validation that Tech Turquoise (`#14B8A6` / `#0D9488`) maintains WCAG AA contrast over light and dark backgrounds.
4. **Gate 4: Automated Transactional Delivery**: Verified delivery of 24h RSVP reminders and prayer request internal notifications via Resend.

---

## 9. Architectural Decision Records (ADRs)
- **ADR-001 (Next.js 15 App Router + TypeScript)**: Server-side rendering, top-tier SEO for Gothenburg gospel outreach queries, zero runtime hydration overhead for static content.
- **ADR-002 (PostgreSQL + Relational Schema)**: Structured relational database to manage Events, RSVPs, Volunteers, Prayer Requests, and Partners with full ACID guarantees.
- **ADR-003 (Hybrid Giving Pipeline)**: Dual-stream giving (Swish/Bankgiro for Swedish domestic users, Stripe for recurring international Kingdom Partners). Zero storage of raw card PAN.
- **ADR-004 (Frictionless RSVP Engine)**: Zero-friction event registration requiring only Name and Email; automatic generation of 24-hour reminder job.
- **ADR-005 (GDPR Art. 9 Spiritual Privacy & Youth Safeguarding)**: High-security handling of spiritual prayer requests with explicit consent checkbox and restricted pastoral access; mandatory affirmative parental consent capture for volunteer applicants under 18.

---

## 10. Build Slices & 22-Page Sitemap
### Public Core Pages
- `/` — Homepage (Hero, Next Flagship Event, Mission, Video Highlight, Prayer Banner, Giving Callout)
- `/events` — Events Listing & Filter
- `/events/holy-spirit-worship` — Dedicated Event & RSVP Page for Holy Spirit Worship
- `/events/goteborgs-lovsangskonsert` — Dedicated Page & Save-the-Date for Göteborgs Lovsångskonsert (2027)
- `/events/past` — Past Events Archive, Photos & Testimonies
- `/watch` — Watch & Listen (Live Recordings, Music Player, Testimonies)
- `/about/story` — Our Story & Roots in Gothenburg
- `/about/vision` — Vision, Mission & Values
- `/about/team` — Founders & Worship Leadership
- `/about/contact` — Contact Form & Information

### Community & Action Pages
- `/partners` — Partner Churches Directory (Map & Grid view)
- `/partners/become` — Church Partnership Application
- `/get-involved/volunteer` — Volunteer Signup (Teams: Hospitality, Setup, Sound, Media, Youth consent)
- `/get-involved/prayer-team` — Dedicated Prayer Team Intake
- `/get-involved/kingdom-partners` — Monthly Recurring Giving (150 kr/mo)
- `/give` — One-Time & Recurring Giving (Swish, Stripe, Bankgiro)
- `/prayer` — Confidential Prayer Request Form (GDPR Article 9 compliant)
- `/newsletter` — Email Newsletter Subscription

### Legal & Governance Pages
- `/legal/privacy` — Privacy Policy & GDPR Information
- `/legal/terms` — Terms of Use & Event Attendance Guidelines
- `/legal/organisation` — Legal Entity Transparency (Org.nr: 802557-4883)

### Protected Admin Portal
- `/admin` — Overview Dashboard & Key Metrics
- `/admin/events` — Event Manager & RSVP Roster
- `/admin/events/new` — Create / Edit Event
- `/admin/prayer` — Confidential Prayer Request Inbox
- `/admin/volunteers` — Volunteer & Prayer Team Applications
- `/admin/settings` — Platform & Notification Settings

---

## 11. Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Design Tokens (Warm Grey base, Tech Turquoise accents)
- **Database**: PostgreSQL (InsForge / Supabase / Neon)
- **ORM**: Prisma or Drizzle ORM
- **Email Delivery**: Resend
- **Payments**: Swish API / QR + Stripe Elements & Subscriptions
- **Hosting**: Vercel (EU Region)

---

## 12. Legal, Compliance & Privacy Surface
- **Governing Body**: Swedish Integritetsskyddsmyndigheten (IMY) / EU GDPR.
- **Religious Data Protection**: Explicit affirmative opt-in consent for prayer request submission (GDPR Art. 9).
- **Youth Protection**: Explicit parental consent field required for volunteer submissions under 18 years of age.
- **Crowd Photography**: Transparent disclaimer on event pages and onsite signage regarding live broadcast and event photography.
- **Reference Doc**: [`docs/compliance/COMPLIANCE-SURFACE.md`](file:///c:/Users/user/Desktop/Gospelss.org/docs/compliance/COMPLIANCE-SURFACE.md).

---

## 13. Data Models
1. **`Event`**: `id`, `title`, `slug`, `type`, `date_time`, `venue_name`, `venue_address`, `description`, `featured_image`, `rsvp_enabled`, `status`, `created_at`
2. **`RSVP`**: `id`, `event_id`, `name`, `email`, `reminder_sent`, `created_at`
3. **`PrayerRequest`**: `id`, `name` (optional/anonymous), `email`, `request_text`, `status` (new/prayed/archived), `created_at`
4. **`VolunteerApplication`**: `id`, `name`, `email`, `phone`, `team_preference`, `is_under_18`, `parent_consent_name`, `parent_consent_phone`, `is_prayer_team`, `pastoral_reference_url`, `status`, `created_at`
5. **`KingdomPartner`**: `id`, `donor_name`, `email`, `tier_amount`, `currency`, `payment_method`, `stripe_subscription_id`, `status`, `created_at`
6. **`PartnerChurch`**: `id`, `name`, `address`, `latitude`, `longitude`, `service_times`, `website_url`, `logo_url`, `is_active`
7. **`MediaItem`**: `id`, `type`, `title`, `embed_url`, `thumbnail_url`, `event_id`, `featured`, `published_at`
8. **`NewsletterSubscriber`**: `id`, `name`, `email`, `is_active`, `created_at`
9. **`User` (Admin)**: `id`, `name`, `email`, `password_hash`, `role`, `created_at`

---

## 14. Phase 2 Triggers & Milestones
- **Trigger 1**: *Göteborgs Lovsångskonsert 2027 Launch* — transition from "Save the Date" to live RSVP, confirmed city square venue, lineup, and street team shift scheduling.
- **Trigger 2**: *Artist Development & Audition Portal* — digital demo submissions and artist mentoring track.
- **Trigger 3**: *Full Bilingual CMS Translation* — automated or CMS-driven localized Swedish and English content publishing.
- **Trigger 4**: *Advanced Volunteer Scheduling* — shift roster management, automated SMS/email check-ins.
- **Trigger 5**: *Church Community Network Portal* — multi-church collaboration extranet.

---

## 15. Out of Scope for Phase 1
- Paid physical merchandise store or physical inventory handling.
- Paid event ticket checkout (all events are strictly free entry).
- Full bilingual editorial CMS backend (UI SV/EN switch is present, but multi-lingual CMS articles are Phase 2).
- Native iOS/Android apps (responsive web PWA only).
