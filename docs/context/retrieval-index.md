# Retrieval Index

**Advanced context engineering:** load the minimum file set for each task type. This index is the routing table — agents should consult it before reading the repo.

Target context budget: **40–60% utilization**. If over budget, compact to `PROGRESS.md` and start a fresh session.

---

## Task → Context bundle

| Task signal | Load first | Load if needed | Do NOT load |
| --- | --- | --- | --- |
| **Cold start / orient** | `CLAUDE.md`, `docs/plan.md`, `PROGRESS.md` | `docs/context/system-map.md` | Entire `src/` tree |
| **New UI component** | Target route in `src/app/`, similar component in `src/components/` | `src/app/globals.css` for tokens | All stores |
| **State change** | Relevant `src/store/*.ts`, consumers via grep | `MEMORY.md` for invariants | Unrelated components |
| **API route** | `docs/context/system-map.md`, nearest `route.ts` pattern | `src/types/` | Client components |
| **Bug / test failure** | `PROGRESS.md`, failing test file, implementation file | Terminal output only | Full git history |
| **Architecture change** | `docs/adr/`, `MEMORY.md` | `docs/context/system-map.md` | Implementation until ADR drafted |
| **Interview time crunch** | `docs/plan.md` + 1–3 target files | — | Rules docs (already in system prompt) |

---

## Keyword → File map

Use grep before loading; this table tells you *where to look*.

| Keywords | Primary files |
| --- | --- |
| counter, notes, demo UI | `src/components/PrototypeShell.tsx`, `src/store/prototype-store.ts` |
| layout, fonts, metadata | `src/app/layout.tsx` |
| styles, theme, colors | `src/app/globals.css` |
| tests, vitest | `vitest.config.ts`, `src/test/setup.ts`, `*.test.ts` |
| scripts, make | `Makefile`, `package.json` |
| agent workflow, RALPH | `CLAUDE.md`, `PROGRESS.md` |
| decisions, ADR | `docs/adr/` |
| durable memory | `MEMORY.md` |

---

## Compaction triggers

Compact session state when any of:

- Same topic exceeds ~10 exchanges
- Repeated file re-reads without progress
- Context feels noisy (duplicate instructions, stale plan)

**Compaction output:** updated `PROGRESS.md` (RALPH) + `docs/plan.md` checkboxes + optional `MEMORY.md` entry.

---

## Anti-patterns

1. **Directory dump** — `find src -type f` then read all
2. **Speculative prefetch** — loading ADRs for a one-line CSS fix
3. **Stale plan** — implementing from memory instead of re-reading `docs/plan.md`
4. **Silent drift** — changing architecture without ADR or `MEMORY.md` update
