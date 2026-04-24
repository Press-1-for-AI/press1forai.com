"use client";

import ContactForm from "./ContactForm";
import { BG, INK, PINK, SUN } from "./constants";

export default function CallSection() {
  return (
    <section
      id="d2-call"
      style={{
        padding: "100px 32px",
        background: SUN,
        color: BG,
        borderTop: `2px solid ${INK}`,
        borderBottom: `2px solid ${INK}`,
      }}
    >
      <div style={{ maxWidth: 800 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginBottom: 12,
          }}
        >
          [ dial us up ]
        </div>
        <h2
          style={{
            fontSize: "clamp(56px, 10vw, 140px)",
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
          }}
        >
          let&apos;s make
          <br />
          <span
            style={{
              textDecoration: "underline",
              textDecorationThickness: 8,
            }}
          >
            something loud.
          </span>
        </h2>
        <p
          style={{
            fontSize: 20,
            marginTop: 24,
            maxWidth: 540,
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          tell us what you want to hear about. we&apos;ll send a short,
          non-annoying note when we&apos;ve got news.
        </p>
        <div
          style={{
            marginTop: 32,
            maxWidth: 640,
            background: BG,
            color: INK,
            border: `2px solid ${INK}`,
            padding: 28,
            boxShadow: `8px 8px 0 ${PINK}`,
          }}
        >
          <ContactForm
            theme={{
              bg: BG,
              inputBg: BG,
              fg: INK,
              fgDim: "rgba(255,255,255,0.7)",
              accent: PINK,
              border: INK,
              btnBg: PINK,
              btnFg: INK,
              font: "inherit",
              radius: 0,
              labelCase: "lowercase",
              labelSpacing: "0.02em",
              err: PINK,
            }}
          />
        </div>
      </div>
    </section>
  );
}
