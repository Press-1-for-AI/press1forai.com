"use client";

import { BG, INK, IRIS, LIME, PINK, SUN, box } from "./constants";

const CARDS: { t: string; c: string; d: string }[] = [
  {
    t: "confuse the algorithm",
    c: PINK,
    d: "anonyme feeds big tech just enough noise to blur who you really are. you stay you; their dossier gets amnesia.",
  },
  {
    t: "monetize your own data",
    c: LIME,
    d: "mineme (coming soon) lets you pick exactly what you'll expose for AI training — and get paid for it. your data, your call, your cut.",
  },
  {
    t: "consent, on your terms",
    c: IRIS,
    d: 'granular toggles for what leaves your device and what stays. no dark patterns, no shady defaults, no "agree to continue."',
  },
  {
    t: "always, opt-in",
    c: SUN,
    d: "we don't sell your info, we don't sneak-train on it, and we make it trivially easy to walk away with everything you've given us.",
  },
];

export default function ShieldSection() {
  return (
    <section
      id="d2-shield"
      style={{
        padding: "100px 32px",
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: PINK,
          color: BG,
          padding: "6px 14px",
          border: `2px solid ${INK}`,
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.1em",
          transform: "rotate(1deg)",
          marginBottom: 20,
        }}
      >
        ⚡ your data, your rules
      </div>
      <h2
        style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          margin: 0,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          color: INK,
        }}
      >
        your data is a{" "}
        <span style={{ background: INK, color: PINK, padding: "0 12px" }}>
          double-edged
        </span>{" "}
        ethernet cable.
      </h2>
      <p
        style={{
          fontSize: 20,
          color: INK,
          maxWidth: 640,
          marginTop: 24,
          lineHeight: 1.4,
          fontWeight: 500,
        }}
      >
        big tech&apos;s been eating it for free. we think you should either keep
        it, or get paid for it — your choice. here&apos;s how we tilt the table
        back.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginTop: 60,
        }}
      >
        {CARDS.map((c, i) => (
          <div
            key={i}
            style={{
              ...box(c.c, "10px"),
              padding: 32,
              color: INK,
              transform: i % 2 ? "rotate(-0.4deg)" : "rotate(0.4deg)",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                background: c.c,
                border: `2px solid ${INK}`,
                display: "grid",
                placeItems: "center",
                fontSize: 28,
                fontWeight: 700,
                color: BG,
                marginBottom: 20,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3
              style={{
                fontSize: 28,
                margin: 0,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              {c.t}
            </h3>
            <p
              style={{
                fontSize: 15,
                color: INK,
                marginTop: 12,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {c.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
