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

## Hosting — Hostinger Node.js

Served from [Hostinger](https://hostinger.com) via their GitHub
integration — Hostinger pulls this repo's `main` branch on push.

In the Hostinger Node.js dashboard, set:

| Setting                  | Value                                  |
| ------------------------ | -------------------------------------- |
| Node.js version          | 20.x or newer                          |
| Application startup file | `server.js`                            |
| Install command          | `npm install`                          |
| Build command            | `npm run build`                        |
| Start command            | `npm start` (runs `node server.js`)    |

`server.js` is a thin wrapper around Next.js's request handler; it
respects `PORT` and `HOSTNAME` env vars that Hostinger injects.

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
