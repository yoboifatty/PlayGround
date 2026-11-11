// Audio: fully synthesized, no external assets. Must be unlocked from a gesture.
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.engineOsc = null;
    this.engineGain = null;
    this.engineFilter = null;
    this.rainGain = null;
    this.sirenOsc = null;
    this.sirenGain = null;
    this.volume = 0.55;
    this._lastShot = 0;
    this._lastThunder = 0;
  }
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);

    // continuous rain noise
    const rain = this._noiseBuffer(2.5);
    const rs = this.ctx.createBufferSource();
    rs.buffer = rain; rs.loop = true;
    const rf = this.ctx.createBiquadFilter();
    rf.type = 'highpass'; rf.frequency.value = 900;
    this.rainGain = this.ctx.createGain(); this.rainGain.gain.value = 0;
    rs.connect(rf); rf.connect(this.rainGain); this.rainGain.connect(this.master);
    rs.start();

    // engine
    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 50;
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass'; this.engineFilter.frequency.value = 380;
    this.engineGain = this.ctx.createGain(); this.engineGain.gain.value = 0;
    this.engineOsc.connect(this.engineFilter); this.engineFilter.connect(this.engineGain); this.engineGain.connect(this.master);
    this.engineOsc.start();

    // siren (two-tone)
    this.sirenOsc = this.ctx.createOscillator();
    this.sirenOsc.type = 'square'; this.sirenOsc.frequency.value = 650;
    this.sirenGain = this.ctx.createGain(); this.sirenGain.gain.value = 0;
    const sf = this.ctx.createBiquadFilter(); sf.type = 'bandpass'; sf.frequency.value = 800; sf.Q.value = 2;
    this.sirenOsc.connect(sf); sf.connect(this.sirenGain); this.sirenGain.connect(this.master);
    this.sirenOsc.start();
    this._sirenT = 0;
  }
  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }
  _noiseBuffer(seconds = 1) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }
  _noise(dur, gain, type = 'lowpass', freq = 1200) {
    if (!this.ctx) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer(Math.max(0.08, dur));
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = this.ctx.createGain();
    const t = this.ctx.currentTime;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(); src.stop(t + dur);
  }
  shot(kind = 'pistol') {
    if (!this.ctx) return;
    const now = performance.now();
    if (now - this._lastShot < 35) return;
    this._lastShot = now;
    const cfg = kind === 'shotgun' ? [0.35, 0.55, 700] : kind === 'smg' ? [0.16, 0.32, 1800] : [0.22, 0.42, 1400];
    this._noise(cfg[0], cfg[1], 'lowpass', cfg[2]);
    const osc = this.ctx.createOscillator(); const g = this.ctx.createGain();
    osc.type = 'triangle'; osc.frequency.setValueAtTime(kind === 'shotgun' ? 120 : 220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.12);
    g.gain.setValueAtTime(0.22, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.14);
    osc.connect(g); g.connect(this.master); osc.start(); osc.stop(this.ctx.currentTime + 0.16);
  }
  hit() { if (!this.ctx) return; this._noise(0.08, 0.25, 'bandpass', 1800); }
  reload() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (const [d, f] of [[0, 420], [0.14, 300], [0.3, 520]]) {
      const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
      o.type = 'square'; o.frequency.value = f;
      g.gain.setValueAtTime(0.06, t + d); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.05);
      o.connect(g); g.connect(this.master); o.start(t + d); o.stop(t + d + 0.06);
    }
  }
  thunder() {
    if (!this.ctx) return;
    const now = performance.now();
    if (now - this._lastThunder < 4000) return;
    this._lastThunder = now;
    this._noise(2.4, 0.6, 'lowpass', 240);
    this._noise(0.5, 0.4, 'lowpass', 900);
  }
  explosion() {
    if (!this.ctx) return;
    this._noise(1.2, 0.9, 'lowpass', 500);
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(90, this.ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(20, this.ctx.currentTime + 0.9);
    g.gain.setValueAtTime(0.5, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.0);
    o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime + 1.05);
  }
  pickup(good = true) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = good ? [660, 990] : [220, 160];
    notes.forEach((f, i) => {
      const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
      o.type = 'triangle'; o.frequency.value = f;
      g.gain.setValueAtTime(0.001, t + i * 0.09);
      g.gain.exponentialRampToValueAtTime(0.14, t + i * 0.09 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.16);
      o.connect(g); g.connect(this.master); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.18);
    });
  }
  ui() { if (!this.ctx) return; this._noise(0.03, 0.08, 'bandpass', 2400); }
  tick() { if (!this.ctx) return; this._noise(0.02, 0.1, 'bandpass', 3000); }
  alarm() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
      o.type = 'square'; o.frequency.value = 1150;
      g.gain.setValueAtTime(0.001, t + i * 0.18); g.gain.linearRampToValueAtTime(0.09, t + i * 0.18 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.18 + 0.15);
      o.connect(g); g.connect(this.master); o.start(t + i * 0.18); o.stop(t + i * 0.18 + 0.16);
    }
  }
  horn() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (const f of [330, 415]) {
      const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
      o.type = 'square'; o.frequency.value = f;
      g.gain.setValueAtTime(0.001, t); g.gain.linearRampToValueAtTime(0.1, t + 0.02);
      g.gain.setValueAtTime(0.1, t + 0.28); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.42);
    }
  }
  setEngine(active, speed, throttle) {
    if (!this.engineGain) return;
    const t = this.ctx.currentTime;
    const target = active ? 0.05 + Math.min(1, Math.abs(speed) / 45) * 0.07 + (throttle ? 0.02 : 0) : 0;
    this.engineGain.gain.setTargetAtTime(target, t, 0.08);
    this.engineOsc.frequency.setTargetAtTime(42 + Math.abs(speed) * 3.4 + (throttle ? 16 : 0), t, 0.09);
    this.engineFilter.frequency.setTargetAtTime(280 + Math.abs(speed) * 22, t, 0.12);
  }
  setRain(v) {
    if (!this.rainGain) return;
    this.rainGain.gain.setTargetAtTime(v * 0.16, this.ctx.currentTime, 0.6);
  }
  setSiren(v, t) {
    if (!this.sirenGain) return;
    this.sirenGain.gain.setTargetAtTime(v * 0.035, this.ctx.currentTime, 0.15);
    if (v > 0.01) {
      const phase = Math.floor(t * 1.6) % 2;
      this.sirenOsc.frequency.setTargetAtTime(phase ? 880 : 610, this.ctx.currentTime, 0.05);
    }
  }
}
