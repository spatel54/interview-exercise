# Context Engineering Rules

Modular rule file for Claude Code. Loaded on demand — not required for every task.

## Principles

1. **Progressive disclosure** — `CLAUDE.md` → rules → `docs/context/` → source files
2. **Retrieval before read** — consult `docs/context/retrieval-index.md` first
3. **Budget awareness** — target 40–60% context utilization
4. **Write-back** — discoveries go to `docs/progress.md`, durable decisions to `docs/memory.md`

## Context layers

| Layer | Files | When to load |
| --- | --- | --- |
| L0 Bootstrap | `CLAUDE.md` | Always (system / project root) |
| L1 Session | `docs/plan.md`, `docs/progress.md` | Every coding session |
| L2 Domain | `docs/context/system-map.md`, `docs/memory.md` | Architecture or unfamiliar area |
| L3 Implementation | Target `src/` files | After L1–L2 narrow scope |
| L4 Governance | `docs/adr/`, `.claude/rules/` | Structural changes only |

## RALPH write-back

After meaningful work, append to `docs/progress.md`:

```markdown
## YYYY-MM-DD — [topic]

### Reasoning
### Action
### Learning
### Progression
### History
```

## Write-back after an important decision

Applies in both coding sessions and design/whiteboarding sessions (see `CLAUDE.md` → Design Thinking Partner Mode). The moment a decision is made — a chosen direction, an architectural choice, a rejected alternative and why, a constraint agreed to — write back before moving on, unprompted:

- RALPH block to `docs/progress.md` (see format above).
- `docs/memory.md` entry if the decision must survive into a future session.

Do not defer this to end-of-session compaction; do it at the decision point.

## Compaction

When compacting, produce:
- Updated `docs/progress.md` (required)
- Updated `docs/plan.md` checkboxes (required)
- `docs/memory.md` entry if a decision must persist (optional)

Do not compact by deleting history — append new blocks.

## Interview mode

When user signals time pressure ("quickly", "interview", "skip gate"):
- Skip confirmation gate
- Prefer `make verify` over exhaustive polish
- Document shortcuts in PROGRESS History section
