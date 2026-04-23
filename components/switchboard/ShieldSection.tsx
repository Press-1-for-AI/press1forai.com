"use client";

import { AMBER, AMBER_DIM } from "./constants";
import CableNet from "./CableNet";

const SAFEGUARDS = [
  {
    n: "01",
    t: "DEEPFAKE RADAR",
    d: "Flags synthetic voices and faces the moment they hit your inbox.",
  },
  {
    n: "02",
    t: "PROMPT-INJECTION FILTER",
    d: 'Stops the "ignore previous instructions" crowd at the door.',
  },
  {
    n: "03",
    t: "DATA BLEACH",
    d: "Scrubs PII before it ever reaches a third-party model.",
  },
  {
    n: "04",
    t: "PROVENANCE STAMPS",
    d: "Cryptographic receipts so you know what a human wrote and what a model did.",
  },
];

export default function ShieldSection() {
  return (
    <section
      id="d1-shield"
      style={{
        padding: "100px 40px",
        borderTop: `1px solid ${AMBER_DIM}`,
        background:
          "linear-gradient(180deg, rgba(255,179,71,0.03), transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 24,
          marginBottom: 20,
        }}
      >
        <span style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: "0.3em" }}>
          [03]
        </span>
        <h2 style={{ fontSize: 48, margin: 0, letterSpacing: "-0.02em" }}>
          COUNTER-INTELLIGENCE<span style={{ color: AMBER_DIM }}>.</span>
        </h2>
      </div>
      <p
        style={{
          maxWidth: 640,
          color: "#e8c27f",
          fontSize: 16,
          marginBottom: 40,
        }}
      >
        AI is a double-edged ethernet cable. We ship the good edge AND we ship
        the kevlar for the bad one. Every tool we make ships with guardrails
        built in — and sold separately.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", gap: 16 }}>
          {SAFEGUARDS.map((s) => (
            <div
              key={s.n}
              style={{
                border: `1px solid ${AMBER_DIM}`,
                padding: "20px 24px",
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: 20,
                background: "rgba(255,179,71,0.02)",
              }}
            >
              <span
                style={{
                  color: AMBER_DIM,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                }}
              >
                {s.n}
              </span>
              <div>
                <div
                  style={{
                    color: AMBER,
                    fontSize: 14,
                    letterSpacing: "0.2em",
                    marginBottom: 6,
                  }}
                >
                  {s.t}
                </div>
                <div
                  style={{ color: "#e8c27f", fontSize: 13, lineHeight: 1.5 }}
                >
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            border: `1.5px solid ${AMBER}`,
            padding: 20,
            background: "rgba(255,179,71,0.03)",
            boxShadow: `0 0 40px ${AMBER}22`,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: AMBER_DIM,
              marginBottom: 10,
            }}
          >
            ◉ LIVE MESH · 24 nodes
          </div>
          <CableNet />
          <div
            style={{
              borderTop: `1px dashed ${AMBER_DIM}`,
              paddingTop: 14,
              marginTop: 6,
              fontSize: 11,
              color: AMBER_DIM,
              letterSpacing: "0.15em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>INGRESS: 412/s</span>
            <span>BLOCKED: 27</span>
            <span>CPU: 12%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
