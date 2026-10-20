# ADR.md — Architecture Decision Records

> **Project**: GOSPELS (`gospelss.org`)  
> **Status**: Living Architectural Invariants  
> **Date**: October 2026  

---

## ADR-001: Next.js 15 (App Router) & TypeScript
- **Status**: Approved
- **Context**: Need high-speed server rendering, dynamic OpenGraph previews, and top-tier Core Web Vitals for Gothenburg worship discovery.
- **Decision**: Adopt Next.js 15 App Router with TypeScript. Server Components used by default for data fetching; Client Components reserved strictly for leaf interactive widgets (RSVP modal, giving toggles, media player).

---

## ADR-002: PostgreSQL Relational Database Schema
- **Status**: Approved
- **Context**: GOSPELS data models require strict foreign key constraints between Events, RSVPs, Volunteers, Partner Churches, and Donations.
- **Decision**: Use PostgreSQL (InsForge / Supabase / Neon) paired with Prisma/Drizzle ORM for type-safe queries, migration traceability, and ACID consistency.

---

## ADR-003: Hybrid Giving Pipeline (Swish & Stripe)
- **Status**: Approved
- **Context**: Swedish donors heavily prefer Swish mobile payments; international donors and monthly recurring Kingdom Partners (150 kr/mo) require card subscription management.
- **Decision**: Integrate dual-stream giving. Swish and Bankgiro handle domestic Swedish transactions with zero card fees; Stripe Elements & Customer Portal securely manage recurring subscriptions without storing card PAN numbers.

---

## ADR-004: Frictionless Event RSVP Engine
- **Status**: Approved
- **Context**: GOSPELS concerts are free community outreach events. Requiring user account creation induces high drop-off.
- **Decision**: Zero-friction RSVP requiring only Name and Email. Automatically dispatches calendar invite and schedules a 24-hour reminder email via Resend API.

---

## ADR-005: Swedish GDPR Article 9 Pastoral Privacy & Youth Safeguarding
- **Status**: Approved
- **Context**: Spiritual prayer requests constitute sensitive personal data under EU GDPR Article 9 (religious beliefs). Volunteer applications also involve youth under 18.
- **Decision**: Explicit, opt-in consent checkboxes on all prayer forms; encrypted storage with access restricted strictly to authorized pastoral prayer leads; mandatory parental consent verification for volunteers under 18.

---

## ADR-006: Reference Synthesis Architectural Invariance
- **Status**: Approved
- **Context**: Reference websites must inform structural rhythm and UX patterns without copying visual assets or exact styles.
- **Decision**: All UI components must consume design tokens strictly from `docs/design/BRAND_GUIDELINES.md` rather than adopting raw CSS from third-party references.

---

## ADR-007: Floating Island Navigation Architecture (Morrow Church Reference)
- **Status**: Approved
- **Context**: Community platforms benefit from unobtrusive, high-elegance floating navigation that allows rich hero photography and twilight gradients to extend behind the navigation surface.
- **Decision**: Adopt a floating island navigation container:
  - Fixed outer wrapper with `pointer-events: none` and `top: 1rem`, max-width `1280px`.
  - Inner island with `pointer-events: auto`, `backdrop-filter: blur(16px)`, `border-radius: 18px`, hair-line structural border, and soft elevation shadow.
  - Segmented pill navigation links with soft hover states (`hover:bg-primary/5`) and active indicators.
  - Seamless mobile expandable island card with internal drawer navigation and integrated bilingual `SV | EN` toggle.

