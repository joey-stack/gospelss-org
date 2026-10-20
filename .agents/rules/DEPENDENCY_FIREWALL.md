# DEPENDENCY_FIREWALL.md — Supply Chain Security & Dependency Policy

> Governs the addition, auditing, and maintenance of external packages in the GOSPELS platform.

---

## 1. Zero Trust Dependency Rules
1. **Never install unverified dependencies**: Any new npm or Go package must have active maintenance, permissive licensing (MIT, Apache 2.0, BSD), and zero known high/critical CVEs.
2. **Lockfile Integrity**: Always commit `package-lock.json` and never bypass integrity hashes.
3. **Automated Audit**: Run `npm audit` on dependency additions; fail on unmitigated critical vulnerabilities.
4. **Secret Isolation**: Build scripts and external packages must never have access to `.env.local` runtime secrets during the build phase.
