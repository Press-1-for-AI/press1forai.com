// Direction 1: Switchboard Operator — retro-futuristic CRT terminal meets sci-fi phone system
const D1 = (() => {
  const AMBER = '#ffb347';
  const AMBER_DIM = '#c77a1f';
  const SCAN = 'rgba(255,179,71,0.04)';
  const BG = '#0a0604';

  function CRTWrap({ children }) {
    return (
      <div style={{
        position: 'relative',
        background: BG,
        color: AMBER,
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        minHeight: '100%',
        overflow: 'hidden',
      }}>
        {/* Scanlines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 50,
          backgroundImage: `repeating-linear-gradient(0deg, ${SCAN} 0 2px, transparent 2px 4px)`,
          mixBlendMode: 'overlay',
        }} />
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 49,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }} />
        {/* Flicker overlay */}
        <div className="d1-flicker" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 48,
          background: 'rgba(255,179,71,0.015)',
        }} />
        {children}
      </div>
    );
  }

  function Nav() {
    return (
      <nav style={{
        position: 'sticky', top: 0, zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 40px',
        borderBottom: `1px solid ${AMBER_DIM}`,
        background: 'rgba(10,6,4,0.9)',
        backdropFilter: 'blur(8px)',
        fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="d1-dot" style={{
            width: 10, height: 10, borderRadius: 999, background: '#4ade80',
            boxShadow: '0 0 8px #4ade80',
          }} />
          <span style={{ fontWeight: 700, color: AMBER }}>PRESS_1_FOR_AI</span>
          <span style={{ color: AMBER_DIM, fontSize: 10 }}>// v4.26.26 // OPERATOR_ONLINE</span>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 11 }}>
          <a href="#apps" style={{ color: AMBER }}>[01]·APPS</a>
          <a href="#shield" style={{ color: AMBER }}>[02]·SHIELD</a>
          <a href="#dial" style={{ color: AMBER }}>[03]·DIAL-IN</a>
        </div>
      </nav>
    );
  }

  // Animated keypad hero
  function Keypad() {
    const [pressed, setPressed] = React.useState(null);
    const [display, setDisplay] = React.useState('');
    const [phase, setPhase] = React.useState(0);
    const messages = [
      '> booting operator…',
      '> dial tone acquired.',
      '> press 1 to begin.',
    ];

    React.useEffect(() => {
      const t = setInterval(() => setPhase(p => (p + 1) % messages.length), 2800);
      return () => clearInterval(t);
    }, []);

    const press = (key) => {
      setPressed(key);
      window.P1Sound && window.P1Sound.play('dtmf', key);
      setDisplay(d => (d + key).slice(-16));
      setTimeout(() => setPressed(null), 200);
    };

    const keys = ['1','2','3','4','5','6','7','8','9','*','0','#'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{
          border: `1px solid ${AMBER_DIM}`,
          padding: '14px 18px',
          background: 'rgba(255,179,71,0.04)',
          fontSize: 14,
          minHeight: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ color: AMBER_DIM }}>{messages[phase]}</span>
          <span style={{ color: AMBER, letterSpacing: '0.3em' }}>{display || '________'}<span className="d1-cursor">█</span></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {keys.map(k => (
            <button
              key={k}
              onClick={() => press(k)}
              className="d1-key"
              style={{
                aspectRatio: '1.3 / 1',
                background: pressed === k ? AMBER : 'transparent',
                color: pressed === k ? BG : AMBER,
                border: `1.5px solid ${AMBER}`,
                fontFamily: 'inherit',
                fontSize: 36,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.08s',
                boxShadow: pressed === k ? `0 0 24px ${AMBER}` : 'inset 0 0 0 2px rgba(255,179,71,0.05)',
                position: 'relative',
              }}
            >
              {k}
              <span style={{
                position: 'absolute', bottom: 6, right: 8,
                fontSize: 9, color: pressed === k ? BG : AMBER_DIM,
                letterSpacing: '0.1em',
              }}>{k === '1' ? 'AI' : k === '2' ? 'ABC' : k === '3' ? 'DEF' : k === '4' ? 'GHI' : k === '5' ? 'JKL' : k === '6' ? 'MNO' : k === '7' ? 'PQRS' : k === '8' ? 'TUV' : k === '9' ? 'WXYZ' : ''}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: 60,
        padding: '80px 40px 120px',
        alignItems: 'center',
        position: 'relative',
      }}>
        <div>
          <div style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: '0.3em', marginBottom: 24 }}>
            ◉ NOW CONNECTING · EXT. 2026
          </div>
          <h1 style={{
            fontSize: 'clamp(56px, 8vw, 124px)',
            lineHeight: 0.92,
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.03em',
            textShadow: `0 0 30px ${AMBER}66, 0 0 60px ${AMBER}33`,
          }}>
            Press 1<br/>
            <span style={{ color: AMBER_DIM }}>for</span> AI.
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.5, marginTop: 32, maxWidth: 480,
            color: '#e8c27f',
          }}>
            Software with the intelligence of 2026 and the hold music of 1986.
            We build AI that works for you — and a shield that keeps it from working <em>against</em> you.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
            <button
              className="d1-cta"
              onClick={() => {
                window.P1Sound && window.P1Sound.play('dial');
                document.getElementById('d1-apps')?.scrollIntoView({behavior:'smooth'});
              }}
              style={{
                background: AMBER, color: BG, border: 'none',
                padding: '16px 28px', fontFamily: 'inherit', fontSize: 13,
                fontWeight: 800, letterSpacing: '0.2em', cursor: 'pointer',
                textTransform: 'uppercase',
              }}>
              ▶ Take the call
            </button>
            <button
              onClick={() => window.P1Sound && window.P1Sound.play('click')}
              style={{
                background: 'transparent', color: AMBER,
                border: `1.5px solid ${AMBER_DIM}`,
                padding: '16px 28px', fontFamily: 'inherit', fontSize: 13,
                fontWeight: 800, letterSpacing: '0.2em', cursor: 'pointer',
                textTransform: 'uppercase',
              }}>
              Leave a message
            </button>
          </div>
          <div style={{
            marginTop: 60, display: 'flex', gap: 24,
            fontSize: 10, color: AMBER_DIM, letterSpacing: '0.2em',
          }}>
            <span>◉ SOC2 in progress</span>
            <span>◉ Human-in-loop</span>
            <span>◉ No data sold, ever</span>
          </div>
        </div>
        <div style={{
          border: `2px solid ${AMBER}`,
          padding: 24,
          background: 'rgba(255,179,71,0.03)',
          boxShadow: `0 0 60px ${AMBER}22, inset 0 0 40px ${AMBER}11`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -12, left: 20,
            background: BG, padding: '0 10px', fontSize: 11, letterSpacing: '0.2em',
          }}>OPERATOR_CONSOLE.v1</div>
          <Keypad />
        </div>
      </section>
    );
  }

  // Ticker
  function Ticker() {
    const items = [
      'PRESS 1 FOR SMARTER INVENTORY',
      'PRESS 2 TO DISAPPEAR FROM BIG TECH',
      'PRESS 3 TO PLAY THE BUTTON GAME',
      'PRESS 9 IF YOU HEAR A DEEPFAKE',
      'PRESS ★ TO JOIN THE UPRISING',
    ];
    return (
      <div style={{
        borderTop: `1px solid ${AMBER_DIM}`,
        borderBottom: `1px solid ${AMBER_DIM}`,
        padding: '14px 0',
        overflow: 'hidden',
        background: 'rgba(255,179,71,0.04)',
      }}>
        <div className="d1-ticker" style={{
          display: 'flex', gap: 60, whiteSpace: 'nowrap',
          fontSize: 14, letterSpacing: '0.3em', fontWeight: 700,
        }}>
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} style={{ color: i % 2 ? AMBER_DIM : AMBER }}>◉ {t}</span>
          ))}
        </div>
      </div>
    );
  }

  // Product cards with animated "line" selector
  function AppsSection() {
    const apps = [
      {
        num: '01',
        name: 'ANONYME',
        tag: 'Big-Tech Anonymizer',
        pitch: 'Become a stranger to Google, Meta & friends. One click, hundreds of dossiers scrubbed — on a schedule you control.',
        status: 'LIVE',
        features: ['Auto-scrub', 'Dossier map', 'Signal jammer'],
      },
      {
        num: '02',
        name: 'THE BUTTON GAME',
        tag: 'Prompt Injection Training',
        pitch: 'A silly-serious game that trains teams to spot prompt injections, jailbreaks, and LLM footguns before they ship.',
        status: 'BETA',
        features: ['Leaderboards', 'Red-team puzzles', 'Cert. issued'],
      },
      {
        num: '03',
        name: 'STOCKIT',
        tag: 'Inventory Hero',
        pitch: 'Coming soon: AI that will reorder at 3am, argue with your suppliers, and send you a nice morning summary. Get on the list first.',
        status: 'PRE-ALPHA',
        features: ['Auto-reorder', 'Supplier bot', 'Forecast'],
      },
    ];
    const [hover, setHover] = React.useState(0);
    return (
      <section id="d1-apps" style={{ padding: '100px 40px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 40 }}>
          <span style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: '0.3em' }}>[02]</span>
          <h2 style={{ fontSize: 48, margin: 0, letterSpacing: '-0.02em' }}>
            THE SWITCHBOARD<span style={{ color: AMBER_DIM }}>.</span>
          </h2>
          <span style={{ marginLeft: 'auto', fontSize: 11, color: AMBER_DIM, letterSpacing: '0.2em' }}>
            ◉ 3 LINES OPEN
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {apps.map((a, i) => (
            <div
              key={a.num}
              onMouseEnter={() => { setHover(i); window.P1Sound && window.P1Sound.play('blip'); }}
              style={{
                border: `1.5px solid ${hover === i ? AMBER : AMBER_DIM}`,
                padding: 28,
                background: hover === i ? 'rgba(255,179,71,0.07)' : 'rgba(255,179,71,0.02)',
                transition: 'all 0.2s',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: hover === i ? `0 0 40px ${AMBER}33` : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontSize: 11, color: AMBER_DIM, letterSpacing: '0.3em' }}>LINE·{a.num}</span>
                <span style={{
                  fontSize: 10, padding: '3px 8px',
                  border: `1px solid ${a.status === 'LIVE' ? '#4ade80' : a.status === 'BETA' ? AMBER : '#ff7a7a'}`,
                  color: a.status === 'LIVE' ? '#4ade80' : a.status === 'BETA' ? AMBER : '#ff7a7a',
                  letterSpacing: '0.2em',
                }}>◉ {a.status}</span>
              </div>
              <h3 style={{ fontSize: 32, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{a.name}</h3>
              <div style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: '0.2em', marginBottom: 20 }}>
                {a.tag.toUpperCase()}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: '#e8c27f', minHeight: 84 }}>{a.pitch}</p>
              <div style={{ borderTop: `1px dashed ${AMBER_DIM}`, marginTop: 20, paddingTop: 16,
                display: 'flex', flexWrap: 'wrap', gap: 10, fontSize: 10, letterSpacing: '0.15em' }}>
                {a.features.map(f => (
                  <span key={f} style={{ color: AMBER_DIM }}>▸ {f.toUpperCase()}</span>
                ))}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); window.P1Sound && window.P1Sound.play('chime'); }}
                style={{
                  marginTop: 20, width: '100%',
                  background: 'transparent', color: AMBER,
                  border: `1px solid ${AMBER}`,
                  padding: '12px', fontFamily: 'inherit', fontSize: 11,
                  fontWeight: 700, letterSpacing: '0.25em', cursor: 'pointer',
                }}>
                [ DIAL EXT. {a.num} ]
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Animated cable / neural network
  function CableNet() {
    const nodes = React.useMemo(() => (
      Array.from({length: 24}, (_, i) => ({
        x: 50 + (i % 8) * 100,
        y: 50 + Math.floor(i / 8) * 100,
        d: Math.random() * 2,
      }))
    ), []);
    return (
      <svg viewBox="0 0 900 320" style={{ width: '100%', height: 320, display: 'block' }}>
        <defs>
          <filter id="d1-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {nodes.map((n, i) => nodes.slice(i+1).map((m, j) => {
          const dx = Math.abs(n.x - m.x), dy = Math.abs(n.y - m.y);
          if (dx > 150 || dy > 150) return null;
          return (
            <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y}
              stroke={AMBER_DIM} strokeWidth="0.5" opacity="0.5"/>
          );
        }))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="3" fill={AMBER} filter="url(#d1-glow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + n.d}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </svg>
    );
  }

  function ShieldSection() {
    const safeguards = [
      { n: '01', t: 'DEEPFAKE RADAR', d: 'Flags synthetic voices and faces the moment they hit your inbox.' },
      { n: '02', t: 'PROMPT-INJECTION FILTER', d: 'Stops the "ignore previous instructions" crowd at the door.' },
      { n: '03', t: 'DATA BLEACH', d: 'Scrubs PII before it ever reaches a third-party model.' },
      { n: '04', t: 'PROVENANCE STAMPS', d: 'Cryptographic receipts so you know what a human wrote and what a model did.' },
    ];
    return (
      <section id="d1-shield" style={{
        padding: '100px 40px',
        borderTop: `1px solid ${AMBER_DIM}`,
        background: 'linear-gradient(180deg, rgba(255,179,71,0.03), transparent)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 20 }}>
          <span style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: '0.3em' }}>[03]</span>
          <h2 style={{ fontSize: 48, margin: 0, letterSpacing: '-0.02em' }}>
            COUNTER-INTELLIGENCE<span style={{ color: AMBER_DIM }}>.</span>
          </h2>
        </div>
        <p style={{ maxWidth: 640, color: '#e8c27f', fontSize: 16, marginBottom: 40 }}>
          AI is a double-edged ethernet cable. We ship the good edge AND we ship the
          kevlar for the bad one. Every tool we make ships with guardrails built in — and sold separately.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}>
          <div style={{ display: 'grid', gap: 16 }}>
            {safeguards.map(s => (
              <div key={s.n} style={{
                border: `1px solid ${AMBER_DIM}`,
                padding: '20px 24px',
                display: 'grid', gridTemplateColumns: '40px 1fr', gap: 20,
                background: 'rgba(255,179,71,0.02)',
              }}>
                <span style={{ color: AMBER_DIM, fontSize: 11, letterSpacing: '0.2em' }}>{s.n}</span>
                <div>
                  <div style={{ color: AMBER, fontSize: 14, letterSpacing: '0.2em', marginBottom: 6 }}>{s.t}</div>
                  <div style={{ color: '#e8c27f', fontSize: 13, lineHeight: 1.5 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            border: `1.5px solid ${AMBER}`,
            padding: 20, background: 'rgba(255,179,71,0.03)',
            boxShadow: `0 0 40px ${AMBER}22`,
          }}>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', color: AMBER_DIM, marginBottom: 10 }}>
              ◉ LIVE MESH · 24 nodes
            </div>
            <CableNet />
            <div style={{
              borderTop: `1px dashed ${AMBER_DIM}`, paddingTop: 14, marginTop: 6,
              fontSize: 11, color: AMBER_DIM, letterSpacing: '0.15em', display: 'flex', justifyContent: 'space-between',
            }}>
              <span>INGRESS: 412/s</span>
              <span>BLOCKED: 27</span>
              <span>CPU: 12%</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function DialSection() {
    const [step, setStep] = React.useState(0);
    const [form, setForm] = React.useState({ name: '', ext: '1', msg: '' });
    return (
      <section id="d1-dial" style={{
        padding: '100px 40px 80px',
        borderTop: `1px solid ${AMBER_DIM}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 40 }}>
          <span style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: '0.3em' }}>[04]</span>
          <h2 style={{ fontSize: 48, margin: 0, letterSpacing: '-0.02em' }}>DIAL IN<span style={{ color: AMBER_DIM }}>.</span></h2>
        </div>
        <div style={{ maxWidth: 640 }}>
          <div style={{
            border: `1.5px solid ${AMBER}`,
            padding: 32, background: 'rgba(255,179,71,0.03)',
          }}>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', color: AMBER_DIM, marginBottom: 24 }}>
              ◉ LEAVE A MESSAGE AT THE TONE · BEEEEP
            </div>
            {step === 0 && (
              <div style={{ display: 'grid', gap: 16 }}>
                <label style={{ fontSize: 11, letterSpacing: '0.2em', color: AMBER_DIM }}>YOUR NAME</label>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  style={{
                    background: 'transparent', border: `1px solid ${AMBER_DIM}`,
                    color: AMBER, padding: 14, fontFamily: 'inherit', fontSize: 16,
                  }}/>
                <label style={{ fontSize: 11, letterSpacing: '0.2em', color: AMBER_DIM, marginTop: 8 }}>SELECT EXTENSION</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['1 Demo', '2 Buy', '3 Jobs', '4 Press'].map(e => (
                    <button key={e} onClick={() => { setForm({...form, ext: e[0]}); window.P1Sound && window.P1Sound.play('dtmf', e[0]); }}
                      style={{
                        flex: 1, background: form.ext === e[0] ? AMBER : 'transparent',
                        color: form.ext === e[0] ? BG : AMBER,
                        border: `1px solid ${AMBER}`, padding: 12,
                        fontFamily: 'inherit', fontSize: 12, letterSpacing: '0.15em',
                        cursor: 'pointer', fontWeight: 700,
                      }}>{e}</button>
                  ))}
                </div>
                <label style={{ fontSize: 11, letterSpacing: '0.2em', color: AMBER_DIM, marginTop: 8 }}>MESSAGE</label>
                <textarea value={form.msg} onChange={e => setForm({...form, msg: e.target.value})}
                  rows={4}
                  style={{
                    background: 'transparent', border: `1px solid ${AMBER_DIM}`,
                    color: AMBER, padding: 14, fontFamily: 'inherit', fontSize: 14,
                    resize: 'none',
                  }}/>
                <button onClick={() => { setStep(1); window.P1Sound && window.P1Sound.play('ring'); }}
                  style={{
                    background: AMBER, color: BG, border: 'none',
                    padding: '16px', fontFamily: 'inherit', fontSize: 13,
                    fontWeight: 800, letterSpacing: '0.25em', cursor: 'pointer',
                    marginTop: 8,
                  }}>▶ TRANSMIT</button>
              </div>
            )}
            {step === 1 && (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📞</div>
                <div style={{ fontSize: 18, marginBottom: 8 }}>CONNECTED, {form.name.toUpperCase() || 'CALLER'}.</div>
                <div style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: '0.2em' }}>
                  WE'LL RING YOU BACK WITHIN ONE BUSINESS DAY.
                </div>
                <button onClick={() => { setStep(0); setForm({name:'', ext:'1', msg:''}); }}
                  style={{
                    marginTop: 24, background: 'transparent', color: AMBER,
                    border: `1px solid ${AMBER_DIM}`, padding: '10px 20px',
                    fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.25em', cursor: 'pointer',
                  }}>← HANG UP</button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer style={{
        borderTop: `1px solid ${AMBER_DIM}`,
        padding: '40px',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, color: AMBER_DIM, letterSpacing: '0.2em',
      }}>
        <span>© 2026 PRESS 1 FOR AI · ALL LINES REDACTED</span>
        <span>◉ UPTIME: 99.999% · LAST CALL: JUST NOW</span>
      </footer>
    );
  }

  function App() {
    return (
      <CRTWrap>
        <Nav />
        <Hero />
        <Ticker />
        <AppsSection />
        <ShieldSection />
        <DialSection />
        <Footer />
        <style>{`
          @keyframes d1flicker { 0%, 100% { opacity: 0; } 50% { opacity: 1; } 92% { opacity: 0.6; } }
          .d1-flicker { animation: d1flicker 6s infinite; }
          @keyframes d1cursor { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
          .d1-cursor { animation: d1cursor 1s infinite; margin-left: 2px; }
          @keyframes d1ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
          .d1-ticker { animation: d1ticker 40s linear infinite; }
          @keyframes d1pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          .d1-dot { animation: d1pulse 1.5s infinite; }
          .d1-key:hover { background: rgba(255,179,71,0.12) !important; box-shadow: 0 0 12px ${AMBER}44 !important; }
        `}</style>
      </CRTWrap>
    );
  }

  return { App };
})();
window.D1 = D1;
