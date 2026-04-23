// Direction 2: Neo-Brutalist Party Line
const D2 = (() => {
  const BG = '#0f0f0f';
  const INK = '#ffffff';
  const PINK = '#ff3b6b';
  const LIME = '#c6ff3d';
  const IRIS = '#8b5cff';
  const SUN = '#ffd93d';

  const box = (color, offset = '8px') => ({
    border: `2px solid ${INK}`,
    boxShadow: `${offset} ${offset} 0 ${color}`,
    background: BG,
  });

  function Nav() {
    return (
      <nav style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: BG,
        borderBottom: `2px solid ${INK}`,
        padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36,
            background: LIME,
            border: `2px solid ${INK}`,
            display: 'grid', placeItems: 'center',
            fontWeight: 900, color: BG, fontSize: 20,
            transform: 'rotate(-5deg)',
          }}>1</div>
          <span style={{ color: INK, fontWeight: 900, fontSize: 20, letterSpacing: '-0.02em' }}>press 1 for ai</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['apps', PINK], ['shield', LIME], ['call', SUN]].map(([l, c]) => (
            <a key={l} href={`#d2-${l}`} style={{
              color: INK, textDecoration: 'none', fontWeight: 800, fontSize: 14,
              padding: '8px 14px', border: `2px solid ${INK}`,
              background: BG, textTransform: 'lowercase',
            }} onMouseEnter={e => { e.currentTarget.style.background = c; e.currentTarget.style.color = BG; window.P1Sound && window.P1Sound.play('softClick'); }}
               onMouseLeave={e => { e.currentTarget.style.background = BG; e.currentTarget.style.color = INK; }}>{l}</a>
          ))}
        </div>
      </nav>
    );
  }

  function Hero() {
    const [r, setR] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setR(x => x + 1), 30);
      return () => clearInterval(t);
    }, []);
    return (
      <section style={{
        padding: '60px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}>
        {/* Floating shapes */}
        <div aria-hidden style={{ position: 'absolute', top: 80, right: 60, width: 120, height: 120,
          background: IRIS, border: `2px solid ${INK}`, transform: `rotate(${r}deg)` }} />
        <div aria-hidden style={{ position: 'absolute', bottom: 80, left: 40, width: 80, height: 80,
          borderRadius: '50%', background: SUN, border: `2px solid ${INK}`,
          transform: `translateY(${Math.sin(r/20) * 20}px)` }} />
        <div aria-hidden style={{ position: 'absolute', top: 40, left: '45%', width: 60, height: 60,
          background: PINK, border: `2px solid ${INK}`,
          transform: `rotate(${-r}deg)`, clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />

        <div style={{
          display: 'inline-block',
          background: LIME, color: BG,
          padding: '6px 14px', border: `2px solid ${INK}`,
          fontWeight: 900, fontSize: 13, letterSpacing: '0.1em',
          transform: 'rotate(-2deg)', marginBottom: 24,
        }}>⚡ now with 100% more audacity</div>

        <h1 style={{
          fontSize: 'clamp(64px, 11vw, 180px)',
          fontWeight: 900, lineHeight: 0.88, margin: 0,
          color: INK, letterSpacing: '-0.04em',
        }}>
          AI that's<br/>
          <span style={{ background: PINK, color: BG, padding: '0 12px', display: 'inline-block', transform: 'rotate(-1deg)' }}>actually</span>
          &nbsp;<em style={{ fontStyle: 'italic', fontWeight: 900 }}>fun.</em>
        </h1>

        <p style={{
          fontSize: 22, lineHeight: 1.4, maxWidth: 620,
          marginTop: 40, color: INK, fontWeight: 500,
        }}>
          We build software that thinks faster than your group chat, and a security layer that's smarter than your crypto-bro cousin.
          Also: you're probably missing out. Just saying.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
          <button onClick={() => { window.P1Sound && window.P1Sound.play('boom'); }}
            style={{
              ...box(PINK), color: INK,
              padding: '18px 32px', fontWeight: 900, fontSize: 16, cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'transform 0.15s',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'translate(4px,4px)'}
            onMouseUp={e => e.currentTarget.style.transform = 'none'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >→ show me the goods</button>
          <button onClick={() => window.P1Sound && window.P1Sound.play('click')}
            style={{
              background: LIME, border: `2px solid ${INK}`, color: BG,
              padding: '18px 32px', fontWeight: 900, fontSize: 16, cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: `8px 8px 0 ${INK}`,
            }}>book a demo ⚡</button>
        </div>

        {/* Stat ribbon */}
        <div style={{
          marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
        }}>
          {[
            { n: '3', l: 'apps shipped', c: PINK },
            { n: '0', l: 'dark patterns', c: LIME },
            { n: '∞', l: 'vibes', c: IRIS },
            { n: '24/7', l: 'mild paranoia', c: SUN },
          ].map((s, i) => (
            <div key={i} style={{
              ...box(s.c, '6px'),
              padding: 20,
              background: BG,
            }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: s.c, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</div>
              <div style={{ fontSize: 13, color: INK, fontWeight: 600, marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function MarqueeBar() {
    const items = ['press 1 → anonyme', 'press 2 → the button game', 'press 3 → stockit', 'press ★ → join us', 'press # → the future'];
    return (
      <div style={{
        background: LIME, borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}`,
        padding: '18px 0', overflow: 'hidden',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}>
        <div className="d2-marquee" style={{
          display: 'flex', gap: 40, whiteSpace: 'nowrap',
          fontWeight: 900, fontSize: 22, color: BG, letterSpacing: '-0.01em',
        }}>
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i}>★ {t}</span>
          ))}
        </div>
      </div>
    );
  }

  function Apps() {
    const apps = [
      {
        name: 'Anonyme',
        sub: 'big-tech anonymizer',
        blurb: "disappear from google, meta, and everyone who's seen you naked in the search bar.",
        color: PINK,
        num: '01',
        bullets: ['scrubs 200+ dossiers', 'schedules itself', 'keeps a receipt'],
        status: 'live',
      },
      {
        name: 'The Button Game',
        sub: 'prompt-injection bootcamp',
        blurb: "a game that teaches your team how NOT to get tricked by sneaky prompts. it's more fun than it sounds.",
        color: IRIS,
        num: '02',
        bullets: ['100+ puzzles', 'multiplayer mode', 'real certs'],
        status: 'beta',
      },
      {
        name: 'Stockit',
        sub: 'inventory hero · coming soon',
        blurb: "an AI that WILL reorder at 3am, negotiate with suppliers, and still make you look smart in standup. we're building it. get on the list.",
        color: SUN,
        num: '03',
        bullets: ['auto-reorder', 'supplier chat', 'nightly brief'],
        status: 'pre-alpha',
      },
    ];
    return (
      <section id="d2-apps" style={{
        padding: '100px 32px',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        background: INK, color: BG,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 40 }}>
          <span style={{ fontWeight: 900, fontSize: 18 }}>[ apps ]</span>
          <h2 style={{ fontSize: 72, margin: 0, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
            three things. <span style={{ background: PINK, color: INK, padding: '0 10px' }}>all bangers.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {apps.map(a => (
            <div key={a.num}
              onMouseEnter={() => window.P1Sound && window.P1Sound.play('blip')}
              style={{
                background: BG, color: INK,
                border: `3px solid ${INK}`,
                boxShadow: `10px 10px 0 ${a.color}`,
                padding: 28,
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translate(-4px, -4px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'none'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  background: a.color, color: BG,
                  padding: '4px 10px', border: `2px solid ${INK}`,
                  fontWeight: 900, fontSize: 14,
                }}>#{a.num}</span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: INK }}>● {(a.status || 'live').toUpperCase()}</span>
              </div>
              <h3 style={{ fontSize: 40, margin: '20px 0 4px', fontWeight: 900, letterSpacing: '-0.03em' }}>{a.name}</h3>
              <div style={{ fontSize: 13, color: a.color, fontWeight: 700, marginBottom: 16 }}>{a.sub}</div>
              <p style={{ fontSize: 15, lineHeight: 1.4, color: INK, marginBottom: 20 }}>{a.blurb}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
                {a.bullets.map(b => (
                  <li key={b} style={{ fontSize: 13, color: INK, fontWeight: 600 }}>→ {b}</li>
                ))}
              </ul>
              <button
                onClick={(e) => { e.stopPropagation(); window.P1Sound && window.P1Sound.play('chime'); }}
                style={{
                  marginTop: 24, width: '100%',
                  background: a.color, border: `2px solid ${INK}`, color: BG,
                  padding: '14px', fontWeight: 900, fontSize: 14,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}>{a.status === 'pre-alpha' ? 'join waitlist →' : 'try it →'}</button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function Shield() {
    const cards = [
      { t: 'deepfake detection', c: PINK, d: 'we flag fake voices, fake faces, fake receipts. and sometimes, fake apologies.' },
      { t: 'prompt injection shield', c: LIME, d: '"ignore previous instructions" stops being a magic spell on our watch.' },
      { t: 'PII data bleach', c: IRIS, d: 'scrubs personal info before it ever touches a third-party LLM. goodbye, dear data.' },
      { t: 'provenance receipts', c: SUN, d: "cryptographic signatures say who (or what) wrote every word. receipts, not vibes." },
    ];
    return (
      <section id="d2-shield" style={{
        padding: '100px 32px',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}>
        <div style={{
          display: 'inline-block', background: PINK, color: BG,
          padding: '6px 14px', border: `2px solid ${INK}`,
          fontWeight: 900, fontSize: 13, letterSpacing: '0.1em',
          transform: 'rotate(1deg)', marginBottom: 20,
        }}>⚠ counter-intelligence</div>
        <h2 style={{
          fontSize: 'clamp(48px, 8vw, 96px)', margin: 0,
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, color: INK,
        }}>
          AI is a <span style={{ background: INK, color: PINK, padding: '0 12px' }}>double-edged</span> ethernet cable.
        </h2>
        <p style={{ fontSize: 20, color: INK, maxWidth: 640, marginTop: 24, lineHeight: 1.4, fontWeight: 500 }}>
          we ship the good edge. we also ship the armor. every tool we make comes with guardrails built in — and sold separately.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 60 }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              ...box(c.c, '10px'),
              padding: 32,
              color: INK,
              transform: i % 2 ? 'rotate(-0.4deg)' : 'rotate(0.4deg)',
            }}>
              <div style={{
                width: 56, height: 56, background: c.c, border: `2px solid ${INK}`,
                display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 900, color: BG,
                marginBottom: 20,
              }}>{String(i+1).padStart(2,'0')}</div>
              <h3 style={{ fontSize: 28, margin: 0, fontWeight: 900, letterSpacing: '-0.02em', color: INK }}>{c.t}</h3>
              <p style={{ fontSize: 15, color: INK, marginTop: 12, lineHeight: 1.5, fontWeight: 500 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function Call() {
    const [val, setVal] = React.useState('');
    const [sent, setSent] = React.useState(false);
    return (
      <section id="d2-call" style={{
        padding: '100px 32px', background: SUN, color: BG,
        borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}`,
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: '0.1em', marginBottom: 12 }}>[ dial us up ]</div>
          <h2 style={{
            fontSize: 'clamp(56px, 10vw, 140px)', margin: 0,
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9,
          }}>
            let's make<br/>
            <span style={{ textDecoration: 'underline', textDecorationThickness: 8 }}>something loud.</span>
          </h2>
          <p style={{ fontSize: 20, marginTop: 24, maxWidth: 540, fontWeight: 600, lineHeight: 1.4 }}>
            give us your email. we'll send you a short, very non-annoying note when we ship the next thing.
          </p>
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true); window.P1Sound && window.P1Sound.play('chime'); }}
              style={{ display: 'flex', gap: 12, marginTop: 32, maxWidth: 640, flexWrap: 'wrap' }}>
              <input required type="email" value={val} onChange={e => setVal(e.target.value)}
                placeholder="hello@you.com"
                style={{
                  flex: 1, minWidth: 240,
                  background: BG, color: INK,
                  border: `2px solid ${INK}`, padding: '18px 20px',
                  fontSize: 16, fontFamily: 'inherit', fontWeight: 600,
                  boxShadow: `8px 8px 0 ${PINK}`,
                }}/>
              <button type="submit" style={{
                background: PINK, border: `2px solid ${INK}`, color: INK,
                padding: '18px 32px', fontWeight: 900, fontSize: 16,
                fontFamily: 'inherit', cursor: 'pointer',
                boxShadow: `8px 8px 0 ${INK}`,
              }}>transmit ⚡</button>
            </form>
          ) : (
            <div style={{
              marginTop: 32, ...box(PINK, '10px'),
              padding: 32, display: 'inline-block', color: INK,
            }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>📞 got it.</div>
              <div style={{ fontSize: 15, marginTop: 6 }}>we'll be in touch. probably after lunch.</div>
            </div>
          )}
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer style={{
        background: BG, color: INK,
        padding: '32px', borderTop: `2px solid ${INK}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontSize: 14, fontWeight: 700 }}>© 2026 press 1 for ai · all rights unreserved</span>
        <span style={{ fontSize: 14, fontWeight: 700 }}>made with caffeine + mild paranoia ★</span>
      </footer>
    );
  }

  function App() {
    return (
      <div style={{ background: BG, minHeight: '100%' }}>
        <Nav />
        <Hero />
        <MarqueeBar />
        <Apps />
        <Shield />
        <Call />
        <Footer />
        <style>{`
          @keyframes d2marq { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
          .d2-marquee { animation: d2marq 30s linear infinite; }
        `}</style>
      </div>
    );
  }

  return { App };
})();
window.D2 = D2;
