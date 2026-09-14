# Interview Exercise

A small Next.js sandbox for timed interview prototypes. The stack is already wired so you can start on the feature instead of project setup.

## Requirements

- Node.js 22+
- npm 10+

## Quick start

```bash
make install
make dev
```

App runs at [http://localhost:3000](http://localhost:3000).

```bash
make verify   # typecheck, lint, and tests
```

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| State | Zustand |
| Tests | Vitest |

## Layout

```
src/app/          Routes and global styles
src/components/   UI
src/store/        Client state
src/test/         Test setup
docs/             Plan and architecture notes
```

## Commands

| Command | Purpose |
| --- | --- |
| `make install` | Install dependencies |
| `make dev` | Dev server |
| `make test` | Unit tests |
| `make verify` | Typecheck, lint, and tests |
| `make build` | Production build |

## License

MIT
