# AGENTS.md

Guidance for Codex and other coding agents in **interview-exercise**.

See `CLAUDE.md` for the full protocol. This file mirrors the essentials for non-Claude agents.

## Stack

Next.js 15 · TypeScript · Tailwind v4 · Zustand · Vitest

## Workflow

1. Read `docs/plan.md` and `docs/progress.md` before coding.
2. Use `docs/context/retrieval-index.md` for selective context loading.
3. Implement minimal diffs; run `make verify`.
4. Record session output in `docs/progress.md` (RALPH format).

## Commands

```bash
make install   # dependencies
make dev       # dev server
make verify    # typecheck + lint + test
```

## Boundaries

- Prototype in `src/` — no backend service in this repo unless explicitly requested.
- Pin only relevant files; avoid whole-repo reads.
- State durable decisions in `docs/memory.md`.
