"use client";

import { AMBER_DIM } from "./constants";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${AMBER_DIM}`,
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11,
        color: AMBER_DIM,
        letterSpacing: "0.2em",
      }}
    >
      <span>© 2026 PRESS 1 FOR AI · ALL LINES REDACTED</span>
      <span>◉ UPTIME: 99.999% · LAST CALL: JUST NOW</span>
    </footer>
  );
}
