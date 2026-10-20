# QUALITY_GATES.md — Mandatory Verification & Hardening Gates

> Verification gates that must pass with concrete terminal evidence before advancing across release boundaries.

---

## 1. Project-Specific Verification Gates (from PROJECT.md §8)
- **Gate 1: Payment Verification**: Automated mock/live transaction testing for 150 kr Swish payment flow and Stripe recurring subscription.
- **Gate 2: Mobile Responsiveness**: Verified touch layout on iOS Safari (390px) and Android Chrome (412px).
- **Gate 3: Accessibility Contrast (WCAG AA)**: Color contrast verification for Tech Turquoise (`#14B8A6` / `#0D9488`) against Warm Grey (`#F5F5F3`) and Dark Surfaces (`#1A1918`).
- **Gate 4: Automated Communications**: Successful delivery confirmation of 24h pre-event reminders and pastoral prayer alerts via Resend.

---

## 2. Developer Quality Gates
- **Static Analysis Gate**: `tsc --noEmit` must pass with zero type errors.
- **TDD Test Suite Gate**: All unit and integration test suites must report 100% pass before opening PRs or merging.
- **Taste Audit Gate**: Visual review confirming alignment with `BRAND_GUIDELINES.md` and anti-slop rules.
