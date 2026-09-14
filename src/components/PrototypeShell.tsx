"use client";

import { usePrototypeStore } from "@/store/prototype-store";

export function PrototypeShell() {
  const { count, increment, decrement, reset, notes, setNotes } = usePrototypeStore();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Interview Exercise
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">Prototype Sandbox</h1>
        <p className="max-w-xl text-zinc-400">
          Next.js, TypeScript, Tailwind, Zustand, and Vitest are ready. Replace this shell
          with your interview feature and iterate quickly.
        </p>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-medium">State demo</h2>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            className="rounded-lg border border-border px-4 py-2 transition hover:border-accent hover:text-accent"
            aria-label="Decrement counter"
          >
            −
          </button>
          <span className="min-w-12 text-center font-mono text-2xl" aria-live="polite">
            {count}
          </span>
          <button
            type="button"
            onClick={increment}
            className="rounded-lg border border-border px-4 py-2 transition hover:border-accent hover:text-accent"
            aria-label="Increment counter"
          >
            +
          </button>
          <button
            type="button"
            onClick={reset}
            className="ml-auto rounded-lg bg-accent px-4 py-2 font-medium text-white transition hover:bg-accent-muted"
          >
            Reset
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6">
        <label htmlFor="notes" className="mb-2 block text-lg font-medium">
          Scratch notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Capture interview requirements, API shapes, or edge cases here…"
          className="min-h-32 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-accent focus:ring-2"
        />
      </section>

      <footer className="text-sm text-zinc-500">
        Run <code className="rounded bg-surface px-1.5 py-0.5 font-mono">make dev</code> to
        start the dev server.
      </footer>
    </main>
  );
}
