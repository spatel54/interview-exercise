# Session Handover Protocol

Use when ending a long session or before starting a fresh agent with pinned context.

## Handover checklist

1. **PROGRESS.md** — append RALPH block with current status, errors, next steps
2. **docs/plan.md** — update checkboxes; strike completed items
3. **MEMORY.md** — add any decision that must not be reversed
4. **Uncommitted work** — commit or document WIP in PROGRESS

## Fresh session pin bundle

Pin these four files for maximum continuity with minimum tokens:

```
CLAUDE.md
docs/plan.md
PROGRESS.md
<1–3 files actively being edited>
```

## Handover message template

Copy into the first message of a new session:

```markdown
Continuing interview-exercise. Read PROGRESS.md and docs/plan.md first.

Current focus: [one sentence]
Blockers: [none | list]
Skip confirmation gate: [yes/no]
```

## Context budget heuristics

| Signal | Action |
| --- | --- |
| Re-explaining the same architecture | Compact + fresh session |
| Agent re-reads >3 files already in thread | Pin only deltas |
| User says "we're running out of time" | Skip gate, minimal verify, ship |
