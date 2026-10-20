# ARCHITECTURE_RULES.md — Technical Architecture & Code Standards

> Technical invariants governing frontend structure, backend operations, database schemas, and API design for GOSPELS.

---

## 1. Frontend & React Patterns (Next.js 15)
1. **Server Components by Default**:
   - Fetch data directly on the server without client-side waterfalls.
   - Use `'use client'` only at interactive boundary nodes (forms, carousels, modals).
2. **Design Token Consumption**:
   - Never hardcode raw hex values in components. Always reference CSS variables defined in `docs/design/BRAND_GUIDELINES.md` (e.g. `var(--color-warm-grey-100)`, `var(--color-turquoise-500)`).
3. **Semantic Markup & SEO**:
   - Exactly one `<h1>` per page.
   - Embed JSON-LD structured data (`Event`, `Organization`, `FAQPage`) on public pages.

---

## 2. Backend & Server Action Patterns
1. **Zod Validation**:
   - Validate every incoming Server Action or API route payload with strict Zod schemas before database execution.
2. **Error Boundaries & Logging**:
   - User-facing error messages must remain polite, helpful, and non-leaking (e.g., *"Unable to process RSVP right now. Please try again in a moment."*).
   - Log technical stack traces internally.

---

## 3. Database Layer (PostgreSQL)
1. **UUID Primary Keys**:
   - Use `gen_random_uuid()` for all entity IDs.
2. **Indices on High-Frequency Lookups**:
   - Index `event_id`, `email`, `created_at`, and `slug`.
3. **Soft Deletes / GDPR Erasure**:
   - Provide explicit data erasure endpoints allowing users to withdraw prayer requests or unsubscribe from newsletters upon request.
