---
name: architecture-guardrails
description: Enforces module boundaries, prevents architectural drift, checks ADR compliance, and audits clean separation of concerns.
---

# Architecture Guardrails Skill

## Purpose
Maintains systemic integrity by enforcing architectural invariants, module boundaries, and ADR compliance.

## Guardrail Rules
1. **ADR Invariance**: Code must not contradict recorded ADRs in `PROJECT.md` without an explicit amendment.
2. **Layer Isolation**: UI components must never make direct database queries or bypass API/Server Action validation.
3. **Sensitive Data Boundary**: GDPR Article 9 data (confidential spiritual requests) must pass through encryption and access-control validation.
4. **Secret Isolation**: Secrets and private keys must never appear in client bundles, public templates, or version control.
