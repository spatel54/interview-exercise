# Memory

Durable, non-obvious facts about this repo that outlive a single session — decisions, constraints, and context that aren't derivable from reading the code. Not a changelog; see `PROGRESS.md` for session-by-session status.

Keep entries short. Update or remove entries that go stale.

## Scenario

WonderPark: amusement park, ~200 found items/day. Guests submit lost-item descriptions; staff manually search for matches while also answering calls and coordinating across shifts.

## Primary user

Staff (front-desk/floor staff handling walk-ins and calls). Supervisors exist above staff (scheduling/oversight, escalations like full storage room or people claiming items not theirs).

## Pain points (drive the design)

- Staff have a hard time searching for matches between guest descriptions and logged found items.
- Staff must coordinate across multiple shifts (intraday/interday handoffs) and manage multiple communication channels (calls, walk-ins) at once.

## User flow (behavioral)

Guest walks in or calls → staff reviews request → identify feasibility/ownership of request → verify information → take action (search inventory, coordinate handoff across shifts, follow up with guest) → confirm / event-driven close.

## Decisions

- Chosen design direction: **Direction 2** (request list + detail view with staff-driven verification and action), with AI summarization/drafting capabilities borrowed from Direction 3.
- Phone-call requests are assumed auto-logged by the system; in-person requests are logged manually by staff (flagged by the user as worth revisiting — not fully settled).
- AI role is **Suggest → Confirm**, not automate: AI drafts (item report, guest response message) but staff must accept/reject before anything sends — no AI-authored guest comms without staff review.
- Screen 1 (request list): filterable list of requests, each row shows item name, short description preview, guest name, last-missing date/location, status (found/missing), and a "view request" action. Top of screen has an AI-generated summary of currently outstanding issues with an explanation and a way to drill into them.
- Screen 3 (contact/draft): shows full request context plus a draft-message panel (guest name, phone/email, message body, optional photo upload). AI prefills the draft; staff can accept or edit before submit. Submitting shows a confirmation modal (issue, who was contacted, resulting status).

## Constraints

- Volume: ~200 found items/day — matching and search must scale to that, not a handful of items.
- Coordination spans multiple shifts (morning/afternoon) and multiple channels (phone, walk-in, and possibly text — proposed, not confirmed).

## Open questions (unresolved)

- What other communication channels exist beyond call/walk-in? (text suggested as a candidate, not confirmed.)
- How often do conflicting requests come in? (e.g., two guests claiming the same item, or calls about items not actually present — a verification problem.)
- In-person manual logging step: still needs design — is it a fast structured form, freeform, photo-first?

## Known gotchas / edge cases

- Two similar requests for the same item type/brand — ambiguous match, needs a disambiguation step, not silent auto-match.
- Guests calling about items that are not actually in the system — a verification/trust issue, not just a search miss.
- Storage room can be full — staff may be unable to physically store or even locate an item; this is an operational/capacity failure mode, not a search failure.
- **Unresolved / not designed:** staff currently have no way to know what's expired or eligible to be recycled/discarded from lost & found storage. Documented only — no design decision made yet on retention rules, expiry tracking, or a recycle/discard workflow.
