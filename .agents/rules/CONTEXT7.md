# CONTEXT7 & PONYTAIL PROTOCOL — Context Optimization & Session Preservation

> Governs context window discipline, rolling memory checkpoints, and state preservation across factory development sessions.

---

## 1. Context Optimization Principles (Context7)
1. **Targeted Reading**: Never read entire directory trees or bulk dumps when slice queries or grep searches suffice.
2. **Deterministic Checkpointing**: Every session boundary and phase completion must be recorded in `.factory/state.json`.
3. **Brain-to-Docs Bridge**: Ephemeral reasoning is kept in conversation memory; validated architecture is promoted immediately to `docs/` and tracked in git.
4. **No State Amnesia**: Before undertaking any new slice or architectural task, verify `.factory/state.json` and `PROJECT.md` to prevent duplicated work or drift.

---

## 2. Ponytail Session Lifecycle
- **Session Startup**: Read `.factory/state.json` first; verify git branch status.
- **Micro-Checkpoints**: After passing tests or completing a component, stage git commits with Conventional Commit titles.
- **Phase Gate**: Update phase status in `.factory/state.json`, push commits, and present the next phase in spoon-feed format.
