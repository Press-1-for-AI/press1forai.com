// Direction 3: Holographic Waveform — iridescent gradients, glass, reactive voice wave
const D3 = (() => {
  const BG = '#050514';

  function Bg() {
    return (
      <div aria-hidden style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(900px circle at 15% 10%, rgba(120,80,255,0.4), transparent 50%),
          radial-gradient(800px circle at 85% 30%, rgba(255,80,180,0.28), transparent 50%),
          radial-gradient(700px circle at 50% 95%, rgba(80,220,255,0.25), transparent 55%),
          ${BG}`,
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: 'radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 70% 60%, #fff, transparent), radial-gradient(1px 1px at 40% 80%, #fff, transparent), radial-gradient(1px 1px at 90% 15%, #fff, transparent), radial-gradient(1px 1px at 10% 70%, #fff, transparent)',
          backgroundSize: '400px 400px',
        }} />
      </div>
    );
  }

  function Glass({ children, style, ...rest }) {
    return (
      <div {...rest} style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 20,
        ...style,
      }}>{children}</div>
    );
  }

  function Nav() {
    return (
      <nav style={{
        position: 'sticky', top: 16, zIndex: 40, margin: '0 20px',
      }}>
        <Glass style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '14px 24px', borderRadius: 999,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 999,
              background: 'conic-gradient(from 0deg, #7850ff, #ff50b4, #50dcff, #7850ff)',
              display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 900, fontSize: 14,
            }}>1</div>
            <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '-0.01em' }}>Press 1 for AI</span>
          </div>
          <div style={{ display: 'flex', gap: 8, fontSize: 14 }}>
            {['Apps', 'Shield', 'Contact'].map(x => (
              <a key={x} href={`#d3-${x.toLowerCase()}`}
                onMouseEnter={() => window.P1Sound && window.P1Sound.play('softClick')}
                style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  padding: '8px 14px', borderRadius: 999, transition: 'all 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}>{x}</a>
            ))}
            <button onClick={() => window.P1Sound && window.P1Sound.play('chime')} style={{
              background: '#fff', color: '#000', border: 'none', borderRadius: 999,
              padding: '8px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            }}>Get early access</button>
          </div>
        </Glass>
      </nav>
    );
  }

  // Reactive voice waveform
  function Wave() {
    const canvasRef = React.useRef(null);
    const mouseRef = React.useRef({ x: 0.5, y: 0.5 });
    const tRef = React.useRef(0);

    React.useEffect(() => {
      const c = canvasRef.current;
      if (!c) return;
      const ctx = c.getContext('2d');
      let raf;
      const size = () => {
        const r = c.getBoundingClientRect();
        c.width = r.width * devicePixelRatio;
        c.height = r.height * devicePixelRatio;
      };
      size();
      window.addEventListener('resize', size);
      const onMove = e => {
        const r = c.getBoundingClientRect();
        mouseRef.current = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
      };
      window.addEventListener('mousemove', onMove);

      const draw = () => {
        tRef.current += 0.015;
        const t = tRef.current;
        const { x: mx, y: my } = mouseRef.current;
        const W = c.width, H = c.height;
        ctx.clearRect(0, 0, W, H);
        const lines = 5;
        const colors = ['#7850ff', '#ff50b4', '#50dcff', '#c6ff3d', '#ffd93d'];
        for (let li = 0; li < lines; li++) {
          ctx.beginPath();
          ctx.lineWidth = (4 - li * 0.5) * devicePixelRatio;
          ctx.strokeStyle = colors[li];
          ctx.globalAlpha = 0.6 - li * 0.08;
          ctx.shadowBlur = 24 * devicePixelRatio;
          ctx.shadowColor = colors[li];
          const steps = 160;
          for (let i = 0; i <= steps; i++) {
            const px = (i / steps) * W;
            const nx = i / steps;
            const freq = 2 + li * 0.6 + mx * 4;
            const amp = H * 0.18 * (0.4 + my);
            const y = H / 2 +
              Math.sin(nx * Math.PI * freq + t + li) * amp +
              Math.sin(nx * Math.PI * (freq * 2.3) - t * 1.3 + li * 2) * amp * 0.3;
            if (i === 0) ctx.moveTo(px, y); else ctx.lineTo(px, y);
          }
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(draw);
      };
      draw();
      return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size); window.removeEventListener('mousemove', onMove); };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: 360, display: 'block' }} />;
  }

  function Hero() {
    return (
      <section style={{
        position: 'relative', zIndex: 1,
        padding: '60px 40px 80px', textAlign: 'center',
        color: '#fff',
      }}>
        <Glass style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '8px 16px', borderRadius: 999, fontSize: 13,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#c6ff3d', boxShadow: '0 0 12px #c6ff3d' }} />
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>Now shipping · Q2 2026</span>
        </Glass>
        <h1 style={{
          fontSize: 'clamp(64px, 10vw, 160px)',
          fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92,
          margin: '32px auto 24px', maxWidth: 1200,
          fontFamily: '"Instrument Serif", serif',
        }}>
          The future is calling.<br/>
          <span style={{
            background: 'linear-gradient(90deg, #7850ff, #ff50b4, #50dcff, #c6ff3d)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', fontStyle: 'italic',
          }}>Press 1 to pick up.</span>
        </h1>
        <p style={{
          fontSize: 20, lineHeight: 1.45, maxWidth: 640, margin: '0 auto',
          color: 'rgba(255,255,255,0.75)',
        }}>
          Software that uses AI gracefully. And a shield that keeps the rest of it from using <em>you</em>.
          Made for people who want the magic without the tradeoff.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          <button onClick={() => window.P1Sound && window.P1Sound.play('chime')} style={{
            background: '#fff', color: '#000', border: 'none', borderRadius: 999,
            padding: '16px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer',
          }}>Start your free line →</button>
          <button onClick={() => window.P1Sound && window.P1Sound.play('whoosh')} style={{
            background: 'rgba(255,255,255,0.08)', color: '#fff',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
            padding: '16px 28px', fontWeight: 500, fontSize: 15, cursor: 'pointer',
            backdropFilter: 'blur(12px)',
          }}>▶ Watch 60s demo</button>
        </div>

        <div style={{ marginTop: 72, maxWidth: 1100, margin: '72px auto 0' }}>
          <Glass style={{ padding: '24px 24px 8px', borderRadius: 28, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span>◉ Live voice signal · move your mouse</span>
              <span>144 Hz · iridescent</span>
            </div>
            <Wave />
          </Glass>
        </div>
      </section>
    );
  }

  function LogoStrip() {
    const trusted = ['stealth fintech', 'series B sass', 'that bookstore', 'a real hospital', 'your cousin', 'the lab'];
    return (
      <section style={{ position: 'relative', zIndex: 1, padding: '40px 40px', textAlign: 'center' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
          Trusted by people who refuse to get played
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40,
          color: 'rgba(255,255,255,0.7)', fontFamily: '"Instrument Serif", serif',
          fontSize: 22, fontStyle: 'italic' }}>
          {trusted.map(t => <span key={t}>{t}</span>)}
        </div>
      </section>
    );
  }

  function Apps() {
    const apps = [
      {
        name: 'Anonyme', tag: 'Big-Tech Anonymizer',
        color: '#ff50b4',
        blurb: 'Vanish from the dossiers. One click erases hundreds of profiles. We keep the receipts so you don\'t have to.',
        features: ['Auto-scrub schedule', 'Dossier heatmap', 'Signal jammer'],
        status: 'live',
      },
      {
        name: 'The Button Game', tag: 'Prompt-Injection Training',
        color: '#7850ff',
        blurb: 'Teach your team to spot AI jailbreaks through a game that\'s disturbingly fun. Certificates included.',
        features: ['100+ red-team puzzles', 'Multiplayer mode', 'Compliance-ready certs'],
        status: 'beta',
      },
      {
        name: 'Stockit', tag: 'Inventory Hero · Coming Soon',
        color: '#50dcff',
        blurb: "In the works: AI that will reorder at 3am, chat with your suppliers, and write you a sweet morning summary. Get notified when we open the line.",
        features: ['Auto-reorder', 'Supplier chat', 'Forecast briefs'],
        status: 'pre-alpha',
      },
    ];
    return (
      <section id="d3-apps" style={{ position: 'relative', zIndex: 1, padding: '80px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, color: '#fff' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
            ⤳ Our apps
          </div>
          <h2 style={{
            fontSize: 'clamp(48px, 7vw, 96px)', margin: 0, fontWeight: 600,
            letterSpacing: '-0.03em', fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          }}>Three tools. Zero regrets.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1320, margin: '0 auto' }}>
          {apps.map(a => (
            <Glass key={a.name}
              onMouseEnter={() => window.P1Sound && window.P1Sound.play('blip')}
              style={{
                padding: 32, borderRadius: 24,
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 24px 60px ${a.color}40`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: `radial-gradient(circle at 30% 30%, ${a.color}, ${a.color}33)`,
                boxShadow: `0 8px 24px ${a.color}66, inset 0 1px 0 rgba(255,255,255,0.4)`,
                marginBottom: 24, position: 'relative',
              }}>
                {a.status && (
                  <span style={{
                    position: 'absolute', top: -8, right: -8,
                    background: a.status === 'live' ? '#4ade80' : a.status === 'beta' ? '#ffd93d' : '#ff7a7a',
                    color: '#050514', fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '3px 8px', borderRadius: 999,
                  }}>{a.status}</span>
                )}
              </div>
              <div style={{ color: a.color, fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {a.tag}
              </div>
              <h3 style={{
                color: '#fff', fontSize: 36, margin: '6px 0 14px',
                fontWeight: 600, fontFamily: '"Instrument Serif", serif',
                letterSpacing: '-0.02em',
              }}>{a.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.5, minHeight: 92 }}>{a.blurb}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 20, paddingTop: 16,
                display: 'grid', gap: 8 }}>
                {a.features.map(f => (
                  <div key={f} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, display: 'flex', gap: 10 }}>
                    <span style={{ color: a.color }}>✦</span>{f}
                  </div>
                ))}
              </div>
              <button onClick={e => { e.stopPropagation(); window.P1Sound && window.P1Sound.play('chime'); }} style={{
                marginTop: 24, width: '100%',
                background: 'rgba(255,255,255,0.08)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
                padding: '12px', fontSize: 14, fontWeight: 500, cursor: 'pointer',
              }}>{a.status === 'pre-alpha' ? 'Join the waitlist →' : 'Learn more ↗'}</button>
            </Glass>
          ))}
        </div>
      </section>
    );
  }

  // Animated shield with rotating ring
  function ShieldGlyph() {
    const [rot, setRot] = React.useState(0);
    React.useEffect(() => {
      let raf;
      const tick = () => { setRot(r => (r + 0.3) % 360); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    return (
      <div style={{ position: 'relative', width: 280, height: 280, margin: '0 auto' }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'conic-gradient(from 0deg, #7850ff, #ff50b4, #50dcff, #c6ff3d, #7850ff)',
          transform: `rotate(${rot}deg)`,
          filter: 'blur(18px)', opacity: 0.7,
        }}/>
        <div style={{
          position: 'absolute', inset: 30, borderRadius: '50%',
          background: 'rgba(10,10,30,0.85)', border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(24px)',
          display: 'grid', placeItems: 'center',
        }}>
          <svg width="100" height="120" viewBox="0 0 100 120">
            <defs>
              <linearGradient id="d3shieldg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7850ff"/>
                <stop offset="0.5" stopColor="#ff50b4"/>
                <stop offset="1" stopColor="#50dcff"/>
              </linearGradient>
            </defs>
            <path d="M50 5 L90 20 L90 60 Q90 100 50 115 Q10 100 10 60 L10 20 Z"
              fill="none" stroke="url(#d3shieldg)" strokeWidth="2.5"/>
            <text x="50" y="72" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="700">1</text>
          </svg>
        </div>
      </div>
    );
  }

  function Shield() {
    const cards = [
      { t: 'Deepfake Radar', c: '#ff50b4', d: 'Flags synthetic voices and faces before they hit your inbox.' },
      { t: 'Injection Filter', c: '#7850ff', d: '"Ignore previous instructions" stops being a magic spell.' },
      { t: 'PII Data Bleach', c: '#50dcff', d: 'Scrubs personal info before it reaches any third-party LLM.' },
      { t: 'Provenance Stamps', c: '#c6ff3d', d: 'Cryptographic receipts for what humans wrote vs. what a model did.' },
    ];
    return (
      <section id="d3-shield" style={{ position: 'relative', zIndex: 1, padding: '100px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
          maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
              ⤳ Counter-intelligence
            </div>
            <h2 style={{
              color: '#fff', fontSize: 'clamp(44px, 6vw, 72px)', margin: 0,
              fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05,
              fontFamily: '"Instrument Serif", serif',
            }}>
              AI is a double-edged <em style={{
                background: 'linear-gradient(90deg,#7850ff,#ff50b4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>ethernet cable.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.5, marginTop: 20, maxWidth: 480 }}>
              We ship the good edge. We ship the armor for the other. Every tool has guardrails built in — and extras sold separately.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 32 }}>
              {cards.map(c => (
                <Glass key={c.t} style={{ padding: 18, borderRadius: 16 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: c.c, boxShadow: `0 4px 12px ${c.c}80`,
                    marginBottom: 12,
                  }}/>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{c.t}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.4 }}>{c.d}</div>
                </Glass>
              ))}
            </div>
          </div>
          <div><ShieldGlyph /></div>
        </div>
      </section>
    );
  }

  function Contact() {
    const [v, setV] = React.useState('');
    const [sent, setSent] = React.useState(false);
    return (
      <section id="d3-contact" style={{ position: 'relative', zIndex: 1, padding: '80px 40px' }}>
        <Glass style={{
          maxWidth: 900, margin: '0 auto', padding: '60px 40px',
          borderRadius: 32, textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(120,80,255,0.15), rgba(255,80,180,0.1))',
        }}>
          <h2 style={{
            color: '#fff', fontSize: 'clamp(40px, 6vw, 72px)', margin: 0,
            fontWeight: 600, letterSpacing: '-0.03em',
            fontFamily: '"Instrument Serif", serif',
          }}>Leave a message at the tone.</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
            We'll ring back. Probably while you're still thinking about it.
          </p>
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true); window.P1Sound && window.P1Sound.play('chime'); }}
              style={{ display: 'flex', gap: 10, marginTop: 36, maxWidth: 520, margin: '36px auto 0', flexWrap: 'wrap' }}>
              <input required type="email" placeholder="you@domain.com"
                value={v} onChange={e => setV(e.target.value)}
                style={{
                  flex: 1, minWidth: 240,
                  background: 'rgba(255,255,255,0.06)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
                  padding: '16px 22px', fontSize: 15, fontFamily: 'inherit',
                  outline: 'none',
                }}/>
              <button type="submit" style={{
                background: '#fff', color: '#000', border: 'none', borderRadius: 999,
                padding: '16px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer',
              }}>Transmit →</button>
            </form>
          ) : (
            <div style={{ marginTop: 36, color: '#c6ff3d', fontSize: 20 }}>✦ Signal received. Line is ringing.</div>
          )}
        </Glass>
      </section>
    );
  }

  function Footer() {
    return (
      <footer style={{
        position: 'relative', zIndex: 1,
        padding: '32px 40px',
        display: 'flex', justifyContent: 'space-between',
        color: 'rgba(255,255,255,0.5)', fontSize: 13,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span>© 2026 Press 1 for AI</span>
        <span>Built with caffeine and mild paranoia.</span>
      </footer>
    );
  }

  function App() {
    return (
      <div style={{
        background: BG, minHeight: '100%', position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
      }}>
        <Bg />
        <Nav />
        <Hero />
        <LogoStrip />
        <Apps />
        <Shield />
        <Contact />
        <Footer />
      </div>
    );
  }

  return { App };
})();
window.D3 = D3;
