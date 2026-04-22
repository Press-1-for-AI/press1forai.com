# press1forai.com

Company website for **Press 1 for AI** — a small studio building tactile,
handheld-first software. Makers of [The Button](https://github.com/Press-1-for-AI/TheButton).

## Stack

Plain HTML + CSS. No framework, no build step.

## Hosting

Served from [Hostinger](https://hostinger.com) via their GitHub
integration — Hostinger pulls this repo's `main` branch and publishes
the root directory at `press1forai.com`. Pushing to `main` redeploys.

## Local preview

Open `index.html` in a browser, or run any static server:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files

| Path          | Purpose                                                |
| ------------- | ------------------------------------------------------ |
| `index.html`  | Single-page landing — hero + product card + footer     |
| `styles.css`  | Gold-on-dark palette, matches The Button's app tokens  |

## Contact

drkim@mdentistry.com
