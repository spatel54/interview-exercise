# Architecture Rules

## Boundaries

- **In scope:** `src/` prototype, API routes in `src/app/api/`, client state in `src/store/`
- **Out of scope:** External backend services, databases, auth providers — unless interview prompt requires and ADR is added

## Change protocol

1. Read relevant ADR in `docs/adr/`
2. If no ADR covers the change and it affects stack or structure → draft new ADR
3. Update `docs/context/system-map.md` if directory contract changes
4. Record in `MEMORY.md` if non-obvious

## File placement

| Need | Location |
| --- | --- |
| Page / route | `src/app/` |
| Reusable UI | `src/components/` |
| Client state | `src/store/` |
| Shared types | `src/types/` (create when >1 consumer) |
| Hooks | `src/hooks/` |
| API | `src/app/api/<name>/route.ts` |

## Verify before merge

```bash
make verify
```

Must pass unless user explicitly accepts debt (document in PROGRESS History).
