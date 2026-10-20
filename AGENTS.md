# AGENTS.md — GOSPELS Development Orchestration & AI Context

> **Project**: GOSPELS (`gospelss.org`)  
> **Entity**: Gospels (Swedish Org.nr: `802557-4883`, Gothenburg, Sweden)  
> **Classification**: Category A Non-Profit Ministry Platform  
> **Primary References**: [`PROJECT.md`](file:///c:/Users/user/Desktop/Gospelss.org/PROJECT.md), [`docs/compliance/COMPLIANCE-SURFACE.md`](file:///c:/Users/user/Desktop/Gospelss.org/docs/compliance/COMPLIANCE-SURFACE.md), [`.factory/state.json`](file:///c:/Users/user/Desktop/Gospelss.org/.factory/state.json)

---

## 1. Team Orchestration Roles

Every change in this codebase follows a strict 3-role orchestration:

### 🎯 Tech Lead (`architect`, `tech-spec-writer`)
- Defines architecture, routes, database schemas, and data flow before coding begins.
- Enforces ADRs (001–005) recorded in `PROJECT.md`.
- Verifies compliance with Swedish GDPR Article 9 (confidential prayer requests) and youth safeguarding (<18 parental consent).

### 💻 Developer (`develop`, `ui-implementor`, `backend-go-expert`)
- Writes modular, type-safe Next.js 15 (App Router) and TypeScript code.
- Uses semantic HTML and modern design tokens (Warm Grey base `#F5F5F3` / `#EBEAE5`, Tech Turquoise accent `#14B8A6` / `#0D9488`).
- Never writes application code without test coverage or clear traceability.

### 🛡️ QA Lead (`qa-lead`, `check`, `test`)
- Enforces strict TDD: write/verify tests for every endpoint, form, and user flow.
- Audits accessibility: WCAG AA contrast on Tech Turquoise buttons, keyboard navigation, and screen reader friendliness.
- Validates verification gates (Swish/Stripe mock transactions, mobile responsiveness on Safari/Chrome, automated email delivery).

---

## 2. Core Operational Protocols

Located in [`.agents/rules/`](file:///c:/Users/user/Desktop/Gospelss.org/.agents/rules/):
1. **TDD Protocol** (`.agents/rules/TDD_PROTOCOL.md`): Write tests first, verify failure, implement minimal code, verify pass.
2. **Git Protocol** (`.agents/rules/GIT_PROTOCOL.md`): Use Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`) and descriptive branches.
3. **Traceability Protocol** (`.agents/rules/TRACEABILITY_PROTOCOL.md`): Code changes must map to approved specs in `PROJECT.md`.
4. **Documentation Protocol** (`.agents/rules/DOCUMENT_CREATION.md` & `BRAIN_TO_DOCS.md`): Keep persistent specs in `docs/` and memory in `.factory/state.json`.
5. **Context7 & Ponytail Protocol** (`.agents/rules/CONTEXT7.md`): Token-budget discipline, targeted reading, and rolling memory checkpoints.
6. **Superpowers Discipline** (`.agents/rules/SUPERPOWERS.md`): Spec-first development, mandatory Red-Green-Refactor TDD, atomic commits, and systematic root-cause debugging.

---

## 3. Brand & UI Standards
- **Emotions**: Sacred · Welcoming · Transformative.
- **Palette**: Warm Grey base + Tech Turquoise primary accent.
- **Typography**: Hanken Grotesk / Inter (Headings) + EB Garamond (Scripture / Accents).
- **Benchmarking**: Charity: Water (transparency) + Elevation/Hillsong (contemporary sacred excellence).
- **Prohibitions**: No generic bootstrap/unstyled primitives; no plain placeholder boxes; rich aesthetics required.

---

## 4. REA Rules
- Use REA for functional study only
- Use Firecrawl for structural
- Use Playwright for visual
- REA does not extract visual tokens or download assets
- Never clone functionality 1:1

---

## 5. Reference Study Rules
- Screenshot references, never scrape for assets
- Extract token distributions (ranges), not values
- Generate ORIGINAL tokens with same feel
- Document every reference in an ADR
- Every reference-derived design needs a distinctive move

---

## 6. Competitive Intelligence & GEO Rules
- Study competitors before building any platform slice; never copy copy, design, or assets.
- Extract structure, tokens, and UX patterns for analysis; generate original decisions with distinctive moves.
- Target high-intent local Swedish keywords on event and outreach pages.
- Embed Schema.org structured data (`Event`, `Organization`, `LocalBusiness`, `FAQPage`).
- Maintain `llms.txt` and permissive AI crawler access in `robots.txt` for Generative Engine Optimization (GEO).

---

## 7. UI Taste & Anti-Slop Standards
- Prohibit generic AI template slop, raw primary colors, and unstyled placeholder blocks.
- Every layout must follow the curated Warm Grey base + Tech Turquoise token hierarchy in `BRAND_GUIDELINES.md`.
- Enforce generous vertical rhythm (`5rem`+ section padding), subtle `1px` structural borders, and refined typography (Hanken Grotesk + EB Garamond).
- Run a Taste Audit before marking any UI slice or component complete.

---

## 8. UX Evaluation Rules
- Frictionless completion: Event RSVPs require $\le 2$ interactions on mobile; no forced user registration for free concerts.
- Eliminating dead-ends: Every confirmation screen must provide affirmative next steps ("Add to Calendar", "Worship Media", "Share").
## 9. Admin AI Sidekick Protocols (`admin-sidekick`)
- Enforce GDPR Article 9 privacy on all prayer requests: no sensitive request data may be logged in unencrypted client storage, publicly indexed, or syndicated.
- Urgency routing: Flag acute crises directly to designated pastoral leads while shielding standard requests behind role-based access.
- Free concert capacity modeling: Project actual attendance using 25–40% drop-off heuristics for non-ticketed community registrations.
