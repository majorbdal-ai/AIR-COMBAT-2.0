const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(freq, type, duration, vol = 0.1) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

// Game Sound Effects
const SFX = {
    shoot: () => playSound(880, 'square', 0.1),
    explosion: () => {
        playSound(100, 'sawtooth', 0.3, 0.2);
        playSound(50, 'square', 0.3, 0.2);
    },
    pickup: () => playSound(660, 'sine', 0.2, 0.2)
};
