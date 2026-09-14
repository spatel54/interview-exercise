# HCI Protocol

Preview → Confirmation → Execute for non-trivial tasks.

## Preview stage

1. Emit structured XML block (see `CLAUDE.md`)
2. Answer: actual ask, minimum surface area, ambiguities
3. End with confirmation gate (unless skip gate)

## Execute stage

1. Match existing code conventions
2. Minimal diff
3. Run `make verify` when touching logic
4. Update `PROGRESS.md` for multi-step work

## Skip gate triggers

User says any of:
- "Yes" / "Proceed" / "Approved"
- "skip gate" / "just do it" / "no time"

## Output completeness

Deliver full files or complete diffs. No placeholders.
