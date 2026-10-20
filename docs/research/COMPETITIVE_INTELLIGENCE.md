# COMPETITIVE_INTELLIGENCE.md — Market, SEO & Competitor Analysis

> **Market**: Non-Profit Gospel Music & Worship Outreach Platforms  
> **Primary Jurisdiction**: Gothenburg (Göteborg), Sweden & the Nordics  
> **Organization**: Gospels (Swedish Org.nr: `802557-4883`)  
> **Date**: October 2026  

---

## 1. Competitive Landscape Overview

In the Nordic and Swedish faith-based music and event landscape, digital discovery is divided across three distinct tiers:

1. **Local Gothenburg Church Gatherings** (Smyrna Göteborg, Saronkyrkan, Hillsong Sweden, Frälsningsarmén):
   - *Strengths*: Established localized congregation bases, physical church buildings in Gothenburg.
   - *Weaknesses*: Text-heavy websites built on legacy WordPress/Drupal; buried Swish giving numbers with no recurring donor portals; lack of dedicated concert discovery; fragmented Facebook-only event pages.
2. **National Gospel Choirs & Festivals** (Stockholm Gospel Choir Festival, Gospelfest):
   - *Strengths*: Strong musical heritage and choral tradition.
   - *Weaknesses*: Clunky third-party ticketing platforms (Tickster, Billetto) with ad tracking and forced logins; zero continuous digital community engagement; seasonal-only activity.
3. **Global Contemporary Worship Movements** (Elevation Worship, Bethel Music, Hillsong Worship):
   - *Strengths*: Top-tier musical production, world-class branding, immersive video archives.
   - *Weaknesses*: Geographically distant; lack of local Nordic/Swedish roots; commercialized merchandise operations rather than grassroots community outreach.

---

## 2. GOSPELS Strategic Differentiation Matrix

| Dimension | Traditional Swedish Church Sites | Commercial Ticketing / Events | GOSPELS Platform (`gospelss.org`) |
| :--- | :--- | :--- | :--- |
| **Aesthetic Experience** | Outdated, institutional, dull grey | Commercial, crowded with ads | **Contemporary Sacred Excellence**: Warm Grey (`#F5F5F3`) base + Tech Turquoise (`#14B8A6`) energy |
| **Event Registration** | Static Facebook RSVP or PDF flyers | 5-step checkout with mandatory accounts | **Frictionless RSVP**: 2 fields (Name + Email), automated 24h reminders via Resend |
| **Financial Transparency** | Buried Swish number, zero reporting | Commercial fee surcharges | **Charity: Water Benchmark**: 100% transparent impact metrics + recurring Kingdom Partners |
| **Spiritual Confidentiality** | Unencrypted generic contact forms | N/A | **GDPR Article 9 Compliance**: Encrypted spiritual requests with explicit consent |
| **Youth Safeguarding** | Unmonitored signups | Basic age checkbox | **Parental Consent Enforcement**: Affirmative consent verification for volunteers `< 18` |

---

## 3. SEO & GEO Keyword Strategy (Sweden & Gothenburg)

To capture organic traffic from seekers, worshipers, and gospel music enthusiasts in Western Sweden, GOSPELS targets high-intent keyword clusters:

### Primary Swedish Local Keywords (Gothenburg High-Intent)
- `gospelkonsert göteborg` (Primary high-intent term)
- `lovsång göteborg` / `lovsångskonsert göteborg`
- `holy spirit worship göteborg`
- `gratis konsert göteborg` / `gratis evenemang göteborg`
- `kristna konserter västra götaland`

### Community & Growth Keywords
- `gospelkör göteborg` / `sjunga gospel göteborg`
- `bli volontär göteborg`
- `stödja kristet arbete sverige` / `ge gåva swish kristen`
- `kyrkor göteborg samarbete`

### Technical SEO Actions for Next.js 15
- **Structured Data (`JSON-LD`)**: Embed `Event` schema on `/events/holy-spirit-worship` and `/events/goteborgs-lovsangskonsert` with `isAccessibleForFree: true`, venue geolocation (`Gothenburg, Sweden`), and performer metadata.
- **Dynamic OpenGraph Cards**: Pre-rendered social cards featuring high-contrast Tech Turquoise event banners for WhatsApp, Facebook, and Instagram sharing.
- **Fast Core Web Vitals**: Target `100/100` Performance score via Next.js server components and optimized SVG vectors.

---

## 4. Key Takeaways & Developer Action Brief
1. **Never require user account creation** for attending free concerts. Name + Email is sufficient.
2. **Prominently display the Swedish Organisation Number (`802557-4883`)** in header and footer to establish non-profit legal legitimacy.
3. **Feature dual-mode giving UI**: One-click Swish on mobile; seamless Stripe card elements for international recurring Kingdom Partners.
4. **Implement automated Resend transactional pipeline** for 24h pre-event reminders and prayer request internal routing.
