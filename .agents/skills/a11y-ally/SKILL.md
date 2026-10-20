---
name: a11y-ally
description: Automated and manual accessibility audits ensuring WCAG 2.1 AA compliance, color contrast verification, and screen reader friendliness.
---

# Accessibility Ally (a11y-ally) Skill

## Purpose
Guarantees that every page on `gospelss.org` meets WCAG 2.1 AA accessibility standards.

## Accessibility Rules
1. **Color Contrast (Gate 3)**:
   - Primary Tech Turquoise (`#14B8A6` / `#0D9488`) must pass `4.5:1` contrast ratio for normal text and `3:1` for large buttons/headings against Warm Grey base (`#F5F5F3`) and Dark Surface (`#1A1918`).
2. **Keyboard Navigation**:
   - Every interactive element (event RSVP pills, prayer accordions, giving modals) must have visible focus rings and support `Tab`, `Enter`, and `Escape`.
3. **Screen Reader Readiness**:
   - Meaningful alt text on all imagery; descriptive `aria-label` tags on icons and modal triggers.
4. **Motion Safeguards**:
   - Honor `prefers-reduced-motion` across all hero animations and carousel transitions.
