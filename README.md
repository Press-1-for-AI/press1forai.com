# press1forai.com

Company website for **Press 1 for AI** — a small studio building tactile,
handheld-first software. Makers of
[The Button](https://github.com/Press-1-for-AI/TheButton).

## Stack

Next.js 15 (App Router) + React 19 + TypeScript. The homepage is the
**Switchboard Operator** direction — a retro-CRT amber interface with a
working DTMF keypad, scrolling ticker, product showcase, shield
section, and dial-in contact form.

## Local development

```sh
npm install
npm run dev      # http://localhost:3000
```

## Production build

```sh
npm run build
npm start        # serves .next/ via Node
```

## Hosting

Served from [Hostinger](https://hostinger.com) via their GitHub
integration — Hostinger pulls this repo's `main` branch on push. Two
integration options depending on your Hostinger plan:

- **Node.js hosting** — Hostinger runs `npm install && npm run build`
  and serves `npm start`. Use the default config in this repo.
- **Static hosting** — add `output: "export"` to `next.config.ts`,
  then `npm run build` emits a static `out/` folder. Configure
  Hostinger to publish `out/` (or commit the built `out/` to a
  separate branch).

## Design archive

Original HTML/JSX prototypes from the Claude Design handoff live under
`project/` — includes all three explored directions (Switchboard
Operator, Neo-Brutalist Party Line, Holographic Waveform) and the
side-by-side design canvas. Kept for reference.

## Files

| Path               | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `app/`             | Next.js App Router entry (`layout`, `page`, CSS) |
| `components/`      | `AudioToggle` + Switchboard section components   |
| `lib/sounds.ts`    | Web Audio sound library (DTMF, chimes, etc.)     |
| `project/`         | Original HTML/JSX design prototypes              |

## Contact

drkim@mdentistry.com
