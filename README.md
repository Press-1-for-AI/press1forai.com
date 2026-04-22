# press1forai.com

Company website for **Press 1 for AI** — a small studio building tactile,
handheld-first software. Makers of [The Button](https://github.com/Press-1-for-AI/TheButton).

## Stack

Plain HTML + CSS. No framework, no build step. GitHub Pages serves the
repo root at `https://press1forai.com`.

## Local preview

Open `index.html` in a browser, or run any static server:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

Pushing to `main` deploys to GitHub Pages automatically. The `CNAME`
file points Pages at `press1forai.com`.

### One-time setup

1. **Repo settings → Pages:**
   - Source: `Deploy from a branch`
   - Branch: `main` / `/` (root)
2. **DNS (at the domain registrar):**
   Point the apex to GitHub Pages IPs:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www  press-1-for-ai.github.io.
   ```
3. Back in GitHub Pages settings, tick **Enforce HTTPS** once the cert provisions (~10 min after DNS propagates).

## Files

| Path          | Purpose                                                |
| ------------- | ------------------------------------------------------ |
| `index.html`  | Single-page landing — hero + product card + footer     |
| `styles.css`  | Gold-on-dark palette, matches The Button's app tokens  |
| `CNAME`       | Custom domain record for GitHub Pages                  |
| `.nojekyll`   | Skip Jekyll processing — serve files verbatim          |

## Contact

drkim@mdentistry.com
