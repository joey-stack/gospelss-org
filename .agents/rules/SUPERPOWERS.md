# SUPERPOWERS DISCIPLINE — Operational Excellence for Autonomous Agents

> The core professional discipline required of every autonomous subagent and developer agent in this factory.

---

## 1. The Four Pillars of Superpowers

### 🎯 1. Specification Before Execution
- No code is written without an approved spec or task checklist.
- Every architectural decision must trace to an ADR or explicit acceptance criterion in `PROJECT.md`.
- Unclear requirements must be clarified before writing implementation code.

### 🔴 2. Test-Driven Development (TDD)
- **Red**: Write a targeted failing test or verification script before implementing functionality.
- **Green**: Write the minimal code required to satisfy the test.
- **Refactor**: Clean up and optimize while keeping all tests passing.
- Never mark a task done without verified execution output.

### 📦 3. Atomic, Traceable Commits
- Commit early and often using Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`).
- One logical responsibility per commit.
- Never commit secrets, temporary clone folders, or build caches.

### 🔍 4. Systematic Root-Cause Debugging
- Never guess or apply speculative band-aids.
- 5-step loop: **Reproduce** → **Localize** → **Hypothesize** → **Minimal Fix** → **Regression Test**.
