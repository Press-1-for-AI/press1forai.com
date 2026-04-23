"use client";

import { AMBER, AMBER_DIM } from "./constants";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 40px",
        borderBottom: `1px solid ${AMBER_DIM}`,
        background: "rgba(10,6,4,0.9)",
        backdropFilter: "blur(8px)",
        fontSize: 12,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          className="d1-dot"
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "#4ade80",
            boxShadow: "0 0 8px #4ade80",
          }}
        />
        <span style={{ fontWeight: 700, color: AMBER }}>PRESS_1_FOR_AI</span>
        <span style={{ color: AMBER_DIM, fontSize: 10 }}>
          // v4.26.26 // OPERATOR_ONLINE
        </span>
      </div>
      <div style={{ display: "flex", gap: 28, fontSize: 11 }}>
        <a href="#d1-apps" style={{ color: AMBER }}>
          [01]·APPS
        </a>
        <a href="#d1-shield" style={{ color: AMBER }}>
          [02]·SHIELD
        </a>
        <a href="#d1-dial" style={{ color: AMBER }}>
          [03]·DIAL-IN
        </a>
      </div>
    </nav>
  );
}
