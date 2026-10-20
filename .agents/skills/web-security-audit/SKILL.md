---
name: web-security-audit
description: Audits web applications for OWASP Top 10 vulnerabilities, secure headers, sensitive data leakage, and authentication boundaries.
---

# Web Security Audit Skill

## Purpose
Enforces rigorous application-layer security across all Next.js routes, server actions, and endpoints.

## Audit Checklist
1. **Confidentiality & GDPR Article 9**: Verify that sensitive prayer requests and volunteer personal data are never returned in public API payloads or log files.
2. **Input Sanitization & Injection Defense**: Prevent XSS and SQL injection across form inputs and rich-text fields.
3. **HTTP Security Headers**: Enforce Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options (`nosniff`), and frame protection.
4. **Environment Isolation**: Ensure `.env.local` keys never leak into client-side JS bundles.
