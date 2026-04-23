"use client";

import { useState } from "react";
import { play } from "@/lib/sounds";
import { AMBER, AMBER_DIM } from "./constants";

type Status = "LIVE" | "BETA" | "PRE-ALPHA";

const APPS: {
  num: string;
  name: string;
  tag: string;
  pitch: string;
  status: Status;
  features: string[];
}[] = [
  {
    num: "01",
    name: "ANONYME",
    tag: "Big-Tech Anonymizer",
    pitch:
      "Become a stranger to Google, Meta & friends. One click, hundreds of dossiers scrubbed — on a schedule you control.",
    status: "LIVE",
    features: ["Auto-scrub", "Dossier map", "Signal jammer"],
  },
  {
    num: "02",
    name: "THE BUTTON GAME",
    tag: "Prompt Injection Training",
    pitch:
      "A silly-serious game that trains teams to spot prompt injections, jailbreaks, and LLM footguns before they ship.",
    status: "BETA",
    features: ["Leaderboards", "Red-team puzzles", "Cert. issued"],
  },
  {
    num: "03",
    name: "STOCKIT",
    tag: "Inventory Hero",
    pitch:
      "Coming soon: AI that will reorder at 3am, argue with your suppliers, and send you a nice morning summary. Get on the list first.",
    status: "PRE-ALPHA",
    features: ["Auto-reorder", "Supplier bot", "Forecast"],
  },
];

const STATUS_COLOR: Record<Status, string> = {
  LIVE: "#4ade80",
  BETA: AMBER,
  "PRE-ALPHA": "#ff7a7a",
};

export default function AppsSection() {
  const [hover, setHover] = useState(0);

  return (
    <section id="d1-apps" style={{ padding: "100px 40px", position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <span style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: "0.3em" }}>
          [02]
        </span>
        <h2 style={{ fontSize: 48, margin: 0, letterSpacing: "-0.02em" }}>
          THE SWITCHBOARD<span style={{ color: AMBER_DIM }}>.</span>
        </h2>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            color: AMBER_DIM,
            letterSpacing: "0.2em",
          }}
        >
          ◉ 3 LINES OPEN
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {APPS.map((a, i) => (
          <div
            key={a.num}
            onMouseEnter={() => {
              setHover(i);
              play("blip");
            }}
            style={{
              border: `1.5px solid ${hover === i ? AMBER : AMBER_DIM}`,
              padding: 28,
              background:
                hover === i
                  ? "rgba(255,179,71,0.07)"
                  : "rgba(255,179,71,0.02)",
              transition: "all 0.2s",
              cursor: "pointer",
              position: "relative",
              boxShadow: hover === i ? `0 0 40px ${AMBER}33` : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: AMBER_DIM,
                  letterSpacing: "0.3em",
                }}
              >
                LINE·{a.num}
              </span>
              <span
                style={{
                  fontSize: 10,
                  padding: "3px 8px",
                  border: `1px solid ${STATUS_COLOR[a.status]}`,
                  color: STATUS_COLOR[a.status],
                  letterSpacing: "0.2em",
                }}
              >
                ◉ {a.status}
              </span>
            </div>
            <h3
              style={{
                fontSize: 32,
                margin: "0 0 6px",
                letterSpacing: "-0.01em",
              }}
            >
              {a.name}
            </h3>
            <div
              style={{
                fontSize: 12,
                color: AMBER_DIM,
                letterSpacing: "0.2em",
                marginBottom: 20,
              }}
            >
              {a.tag.toUpperCase()}
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.5,
                color: "#e8c27f",
                minHeight: 84,
              }}
            >
              {a.pitch}
            </p>
            <div
              style={{
                borderTop: `1px dashed ${AMBER_DIM}`,
                marginTop: 20,
                paddingTop: 16,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                fontSize: 10,
                letterSpacing: "0.15em",
              }}
            >
              {a.features.map((f) => (
                <span key={f} style={{ color: AMBER_DIM }}>
                  ▸ {f.toUpperCase()}
                </span>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                play("chime");
              }}
              style={{
                marginTop: 20,
                width: "100%",
                background: "transparent",
                color: AMBER,
                border: `1px solid ${AMBER}`,
                padding: "12px",
                fontFamily: "inherit",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.25em",
                cursor: "pointer",
              }}
            >
              [ DIAL EXT. {a.num} ]
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
