# Memory

Durable agent memory for **interview-exercise**. Update when a decision must survive across sessions.

## Project identity

- **Purpose:** Timed interview prototype sandbox
- **Stack:** Next.js 15, TypeScript, Tailwind v4, Zustand, Vitest
- **Default port:** 3000 (`make dev`)

## Non-negotiables

1. `make verify` must pass before declaring a feature done.
2. Context loading follows `docs/context/retrieval-index.md` — no blind directory dumps.
3. Architectural changes require an ADR in `docs/adr/`.
4. Interview urgency: user may say "skip gate" to bypass confirmation protocol.

## Current baseline

- Starter UI: `src/components/PrototypeShell.tsx`
- Demo store: `src/store/prototype-store.ts`
- Context layer: `CLAUDE.md`, `.claude/rules/`, `docs/`

## Open questions

<!-- Add interview-specific requirements as they arrive -->
