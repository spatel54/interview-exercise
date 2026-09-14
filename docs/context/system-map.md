# System Map

High-level architecture for agent orientation. Read this for "where does X live?" questions — not for line-level implementation.

## Runtime layers

```
┌─────────────────────────────────────────┐
│  Browser (React 19 client components)   │
├─────────────────────────────────────────┤
│  Next.js App Router (src/app/)          │
├─────────────────────────────────────────┤
│  Components (src/components/)           │
├─────────────────────────────────────────┤
│  Zustand stores (src/store/)            │
└─────────────────────────────────────────┘
```

## Directory contract

| Path | Responsibility |
| --- | --- |
| `src/app/` | Routes, layout, global CSS |
| `src/components/` | Presentational and container UI |
| `src/store/` | Client state (Zustand) |
| `src/test/` | Vitest setup |
| `docs/` | Plan, session log, memory, ADRs |
| `docs/context/` | Agent retrieval maps |
| `.claude/rules/` | Modular Claude rules |

## Data flow (current baseline)

1. `page.tsx` renders `PrototypeShell`.
2. `PrototypeShell` reads/writes `usePrototypeStore`.
3. No server actions or API routes yet — add under `src/app/api/` when needed.

## Extension points

- **API routes:** `src/app/api/<name>/route.ts`
- **Server components:** colocate in `src/app/` or import from `src/components/`
- **Shared types:** add `src/types/` when models grow beyond one file
- **Hooks:** add `src/hooks/` for reusable client logic

## Verify pipeline

```
make verify
  ├── npm run typecheck  (tsc --noEmit)
  ├── npm run lint       (eslint)
  └── npm run test       (vitest)
```
