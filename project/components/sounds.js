// Shared Web Audio sound library for Press 1 for AI
// Exposes window.P1Sound with .play(name), .setMuted(bool), .isMuted()
(function () {
  let ctx = null;
  let muted = localStorage.getItem('p1-muted') === 'true';
  let unlocked = false;

  function getCtx() {
    if (!ctx) {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        return null;
      }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, duration, type = 'sine', gain = 0.15, delay = 0) {
    if (muted) return;
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(g).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  // DTMF frequency pairs for phone keypad
  const DTMF = {
    '1': [697, 1209], '2': [697, 1336], '3': [697, 1477],
    '4': [770, 1209], '5': [770, 1336], '6': [770, 1477],
    '7': [852, 1209], '8': [852, 1336], '9': [852, 1477],
    '*': [941, 1209], '0': [941, 1336], '#': [941, 1477],
  };

  function dtmf(key) {
    if (muted) return;
    const pair = DTMF[key];
    if (!pair) return;
    tone(pair[0], 0.18, 'sine', 0.12);
    tone(pair[1], 0.18, 'sine', 0.12);
  }

  function click() { dtmfPress(); }
  function softClick() { dtmfPress(0.4); }
  function chime() {
    tone(880, 0.3, 'sine', 0.1, 0);
    tone(1320, 0.4, 'sine', 0.08, 0.08);
  }
  function dtmfPress(volScale = 1) {
    // A short, generic DTMF-style button press (uses digit "5" by default — the most neutral-sounding pair)
    if (muted) return;
    tone(770, 0.09, 'sine', 0.11 * volScale);
    tone(1336, 0.09, 'sine', 0.11 * volScale);
  }
  function dialTone() {
    tone(350, 0.8, 'sine', 0.08);
    tone(440, 0.8, 'sine', 0.08);
  }
  function ringback() {
    tone(440, 0.4, 'sine', 0.1, 0);
    tone(480, 0.4, 'sine', 0.1, 0);
    tone(440, 0.4, 'sine', 0.1, 0.5);
    tone(480, 0.4, 'sine', 0.1, 0.5);
  }
  function whoosh() {
    if (muted) return;
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime;
    const bufLen = c.sampleRate * 0.4;
    const buf = c.createBuffer(1, bufLen, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-3 * i / bufLen);
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    const filt = c.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.setValueAtTime(600, t0);
    filt.frequency.exponentialRampToValueAtTime(3000, t0 + 0.3);
    const g = c.createGain();
    g.gain.setValueAtTime(0.1, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.4);
    src.connect(filt).connect(g).connect(c.destination);
    src.start(t0);
  }
  function blip() { dtmfPress(0.55); }
  function lowBoom() {
    if (muted) return;
    const c = getCtx();
    if (!c) return;
    const t0 = c.currentTime;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t0);
    osc.frequency.exponentialRampToValueAtTime(40, t0 + 0.4);
    g.gain.setValueAtTime(0.25, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.5);
    osc.connect(g).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + 0.55);
  }

  window.P1Sound = {
    play(name, arg) {
      if (!unlocked) { getCtx(); unlocked = true; }
      switch (name) {
        case 'click': return click();
        case 'softClick': return softClick();
        case 'chime': return chime();
        case 'dial': return dialTone();
        case 'ring': return ringback();
        case 'whoosh': return whoosh();
        case 'blip': return blip();
        case 'boom': return lowBoom();
        case 'dtmf': return dtmf(arg);
        default: return;
      }
    },
    setMuted(v) {
      muted = !!v;
      localStorage.setItem('p1-muted', muted ? 'true' : 'false');
    },
    isMuted() { return muted; },
  };
})();
