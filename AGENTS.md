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
