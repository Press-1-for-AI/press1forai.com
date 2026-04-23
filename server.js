// Production server for Next.js — used by hosts (like Hostinger) that
// expect a single JS startup file. Locally, `npm run dev` / `npm start`
// via the Next.js CLI is still the easiest path.

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, hostname, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
