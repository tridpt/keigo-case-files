/* =========================================================================
 * HỒ SƠ HIGASHINO — Web Audio API Noir Synthesizer (Zero External Assets)
 * ========================================================================= */
window.NoirAudio = (function () {
  let ctx = null;
  let muted = false;
  let bgmTimer = null;
  let bgmPlaying = false;

  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function tone(freq, dur, type = 'sine', gainVal = 0.08, delay = 0) {
    if (muted) return;
    const c = ensureCtx();
    if (!c) return;
    const now = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gainVal, now + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.connect(g);
    g.connect(c.destination);
    osc.start(now);
    osc.stop(now + dur + 0.02);
  }

  function playClue() {
    tone(523.25, 0.16, 'triangle', 0.09, 0);
    tone(659.25, 0.22, 'triangle', 0.09, 0.09);
    tone(783.99, 0.32, 'sine', 0.1, 0.18);
  }

  function playInsight() {
    // Japanese In-sen pentatonic chord chime
    [440, 466.16, 587.33, 659.25, 880].forEach((f, idx) => {
      tone(f, 0.45, 'triangle', 0.08, idx * 0.08);
    });
  }

  function playError() {
    tone(220, 0.18, 'sawtooth', 0.06, 0);
    tone(185, 0.25, 'sawtooth', 0.06, 0.12);
  }

  function playClick() {
    tone(380, 0.05, 'sine', 0.04, 0);
  }

  function playSolved() {
    [440, 523.25, 659.25, 880, 1046.5].forEach((f, idx) => {
      tone(f, 0.55, 'triangle', 0.1, idx * 0.11);
    });
  }

  function toggleBgm() {
    bgmPlaying = !bgmPlaying;
    if (bgmPlaying) {
      ensureCtx();
      const notes = [220, 233.08, 293.66, 329.63, 392, 440, 293.66, 233.08];
      let step = 0;
      bgmTimer = setInterval(() => {
        if (!muted && bgmPlaying) {
          const n = notes[step % notes.length];
          tone(n, 1.4, 'sine', 0.025, 0);
          step++;
        }
      }, 1600);
    } else if (bgmTimer) {
      clearInterval(bgmTimer);
      bgmTimer = null;
    }
    return bgmPlaying;
  }

  function toggleMute() {
    muted = !muted;
    return muted;
  }

  return {
    playClue,
    playInsight,
    playError,
    playClick,
    playSolved,
    toggleBgm,
    toggleMute,
    isMuted: () => muted,
    isBgmPlaying: () => bgmPlaying
  };
})();
