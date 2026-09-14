# ADR 001: Prototype Stack Selection

**Status:** Accepted  
**Date:** 2026-09-13

## Context

The repository must support rapid interview prototyping with a familiar, batteries-included stack and fast feedback loops.

## Decision

Use **Next.js 15 (App Router) + TypeScript + Tailwind v4 + Zustand + Vitest**.

## Rationale

- **Next.js:** Single repo for UI and API routes; hot reload via Turbopack
- **TypeScript strict:** Catches shape errors during timed exercises
- **Tailwind v4:** Utility-first styling without design-system overhead
- **Zustand:** Minimal client state without boilerplate
- **Vitest:** Fast unit tests aligned with Vite ecosystem

## Consequences

- No separate backend service in this repo unless a later ADR adds one
- Server Components available but client components used for interactive demo
- `make verify` is the quality gate before demo

## Alternatives considered

| Option | Rejected because |
| --- | --- |
| Vite + React SPA | No built-in API routes for full-stack prompts |
| Redux | Too much ceremony for timed exercises |
| Jest | Slower; Vitest sufficient for unit scope |
