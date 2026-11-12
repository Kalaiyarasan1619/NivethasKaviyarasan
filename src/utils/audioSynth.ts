/**
 * Auspicious Indian Wedding Nadaswaram / Shenai & Tanpura Harmony Synthesizer
 * Built with Web Audio API for 100% offline, zero-latency authentic sound.
 */

class WeddingMusicSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private droneGain: GainNode | null = null;
  private masterGain: GainNode | null = null;

  // Auspicious Carnatic Kalyani / Mohanam / Hamsadhwani raga frequencies (Hz)
  // Sa (C4), Ri2 (D4), Ga3 (E4), Pa (G4), Dha2 (A4), Sa' (C5)
  private melodyNotes: { freq: number; dur: number }[] = [
    { freq: 261.63, dur: 0.6 }, // Sa
    { freq: 293.66, dur: 0.6 }, // Ri
    { freq: 329.63, dur: 0.8 }, // Ga
    { freq: 392.00, dur: 0.8 }, // Pa
    { freq: 440.00, dur: 0.7 }, // Dha
    { freq: 523.25, dur: 1.2 }, // High Sa
    { freq: 440.00, dur: 0.6 }, // Dha
    { freq: 392.00, dur: 0.6 }, // Pa
    { freq: 329.63, dur: 0.9 }, // Ga
    { freq: 293.66, dur: 0.6 }, // Ri
    { freq: 261.63, dur: 1.4 }, // Sa
    
    // Celebratory phrase 2
    { freq: 329.63, dur: 0.5 },
    { freq: 392.00, dur: 0.5 },
    { freq: 523.25, dur: 0.9 },
    { freq: 587.33, dur: 0.7 },
    { freq: 523.25, dur: 1.2 },
    { freq: 440.00, dur: 0.6 },
    { freq: 392.00, dur: 0.8 },
    { freq: 329.63, dur: 0.7 },
    { freq: 293.66, dur: 0.6 },
    { freq: 261.63, dur: 1.6 },
  ];

  private currentNoteIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    // Sa (C3 = 130.81Hz) and Pa (G3 = 196Hz) soothing drone
    const droneFreqs = [130.81, 196.00, 261.63];
    
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.droneGain.connect(this.masterGain);

    droneFreqs.forEach(freq => {
      const osc = this.ctx!.createOscillator();
      const filter = this.ctx!.createBiquadFilter();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
      
      // Warm low-pass filter
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx!.currentTime);

      osc.connect(filter);
      filter.connect(this.droneGain!);
      osc.start();
    });
  }

  private playNextMelodyNote() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const note = this.melodyNotes[this.currentNoteIndex];
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melodyNotes.length;

    // Nadaswaram/Flute timbre using dual oscillator with rich harmonics & vibrato
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc2.type = 'sine';

    // Vibrato effect (5.5 Hz gentle modulation)
    vibrato.frequency.setValueAtTime(5.5, this.ctx.currentTime);
    vibratoGain.gain.setValueAtTime(4.5, this.ctx.currentTime);
    vibrato.connect(vibratoGain);
    vibratoGain.connect(osc1.frequency);
    vibratoGain.connect(osc2.frequency);

    const now = this.ctx.currentTime;
    osc1.frequency.setValueAtTime(note.freq, now);
    osc2.frequency.setValueAtTime(note.freq * 2, now); // Octave overtone

    // Filter to soften the reed sound like a real Nadaswaram/Flute
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(2.0, now);

    // Envelope
    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.linearRampToValueAtTime(0.22, now + 0.12); // Soft attack
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + note.dur * 0.95);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    vibrato.start(now);
    osc1.start(now);
    osc2.start(now);

    const stopTime = now + note.dur;
    vibrato.stop(stopTime);
    osc1.stop(stopTime);
    osc2.stop(stopTime);

    this.timer = window.setTimeout(() => {
      this.playNextMelodyNote();
    }, note.dur * 1000 * 0.9);
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.startTanpuraDrone();
    this.playNextMelodyNote();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const weddingMusic = new WeddingMusicSynthesizer();

