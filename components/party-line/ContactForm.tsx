"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { play } from "@/lib/sounds";

const ENDPOINT = "https://formspree.io/f/xyklondq";

const INTERESTS: { id: string; label: string }[] = [
  { id: "anonyme", label: "Anonyme" },
  { id: "button_game", label: "The Button Game" },
  { id: "stockit", label: "Stockit" },
  { id: "other", label: "Other" },
];

export type FormTheme = {
  bg: string;
  inputBg: string;
  fg: string;
  fgDim: string;
  accent: string;
  border: string;
  err: string;
  btnBg: string;
  btnFg: string;
  font: string;
  labelCase: CSSProperties["textTransform"];
  labelSpacing: string;
  radius: number;
};

export default function ContactForm({ theme }: { theme: FormTheme }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [interests, setInterests] = useState<Record<string, boolean>>({});
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const t = theme;

  const toggleInterest = (id: string) =>
    setInterests((x) => ({ ...x, [id]: !x[id] }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const picked = Object.keys(interests).filter((k) => interests[k]);
    if (picked.length === 0) {
      setError("Pick at least one thing you want to hear about.");
      return;
    }
    if (honeypot) return;
    setBusy(true);
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("name", name);
      body.append("message", msg);
      body.append("interests", picked.join(", "));
      body.append("_subject", `press1forai.com · ${picked.join(", ")}`);
      body.append("_gotcha", honeypot);
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Formspree rejected the submission.");
      play("chime");
      setSent(true);
    } catch {
      setError(
        "Couldn't send. Try again in a moment or email us directly.",
      );
    } finally {
      setBusy(false);
    }
  };

  const labelStyle: CSSProperties = {
    fontSize: 11,
    letterSpacing: t.labelSpacing,
    textTransform: t.labelCase,
    color: t.fgDim,
    marginBottom: 6,
    display: "block",
    fontFamily: t.font,
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    background: t.inputBg,
    border: `1px solid ${t.border}`,
    borderRadius: t.radius,
    color: t.fg,
    padding: "12px 14px",
    fontSize: 14,
    fontFamily: t.font,
    outline: "none",
  };

  if (sent) {
    return (
      <div
        style={{
          padding: 28,
          border: `1.5px solid ${t.accent}`,
          background: t.bg,
          color: t.fg,
          borderRadius: t.radius,
          fontFamily: t.font,
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 10 }}>📞</div>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>
          Got it. We&apos;ll ring back.
        </div>
        <div style={{ color: t.fgDim, fontSize: 14 }}>
          Usually within one business day. Check your spam if you don&apos;t
          hear from us.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{ display: "grid", gap: 14, fontFamily: t.font }}
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          pointerEvents: "none",
          height: 0,
        }}
        aria-hidden="true"
      />

      <div>
        <label style={labelStyle}>
          What are you interested in?{" "}
          <span style={{ color: t.err }}>*</span>
        </label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          {INTERESTS.map((i) => {
            const on = !!interests[i.id];
            return (
              <button
                key={i.id}
                type="button"
                onClick={() => {
                  toggleInterest(i.id);
                  play("softClick");
                }}
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  border: `1.5px solid ${on ? t.accent : t.border}`,
                  background: on ? t.accent : t.inputBg,
                  color: on ? t.btnFg : t.fg,
                  borderRadius: t.radius,
                  fontFamily: t.font,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "all 0.12s",
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    border: `1.5px solid ${on ? t.btnFg : t.border}`,
                    background: on ? t.btnFg : "transparent",
                    color: on ? t.accent : "transparent",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {on ? "✓" : ""}
                </span>
                {i.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <div>
          <label style={labelStyle}>Your name</label>
          <input
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label style={labelStyle}>
            Email <span style={{ color: t.err }}>*</span>
          </label>
          <input
            required
            type="email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="what's on your mind?"
        />
      </div>

      {error && (
        <div
          style={{
            color: t.err,
            fontSize: 13,
            padding: "10px 14px",
            border: `1px solid ${t.err}`,
            background: `${t.err}15`,
            borderRadius: t.radius,
          }}
        >
          ⚠ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        style={{
          background: busy ? t.border : t.btnBg,
          color: t.btnFg,
          border: "none",
          borderRadius: t.radius,
          padding: "16px 28px",
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: t.font,
          cursor: busy ? "wait" : "pointer",
          justifySelf: "start",
        }}
      >
        {busy ? "Transmitting…" : "Transmit ▸"}
      </button>
    </form>
  );
}
