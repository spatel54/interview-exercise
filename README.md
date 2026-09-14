# Interview Exercise

Rapid-prototype workspace for timed interview exercises. Stack is pre-wired so you can focus on the feature, not the boilerplate.

## Quick start

```bash
make install   # install dependencies
make dev       # start Next.js dev server (http://localhost:3000)
make verify    # typecheck + lint + test
```

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| Tests | Vitest + Testing Library |

## Project layout

```
src/
  app/           # routes and global styles
  components/    # UI components
  store/         # Zustand stores
docs/
  context/       # agent context maps and retrieval index
  adr/           # architecture decision records
.claude/rules/   # modular Claude Code rules
```

## Agent context

This repo ships with **advanced context engineering** for Claude and other coding agents:

- `CLAUDE.md` — session workflow, confirmation gate, RALPH loop
- `docs/context/retrieval-index.md` — what to load for each task type
- `PROGRESS.md` — cross-session state handover
- `MEMORY.md` — durable decisions that must not drift

Pin only the files relevant to your current task. See `docs/context/retrieval-index.md`.

## Interview workflow

1. Read the prompt and capture requirements in the scratch notes UI (or `docs/plan.md`).
2. Research existing patterns — grep before reading whole directories.
3. Plan in `docs/plan.md`, then implement in small verified chunks.
4. Run `make verify` before declaring done.
