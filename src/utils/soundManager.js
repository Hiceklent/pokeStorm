import { soundFiles } from '../config/soundConfig'

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const sounds = {};

const loadSound = async (url) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return audioContext.decodeAudioData(arrayBuffer);
};

const playSound = (buffer) => {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
};

export const initSounds = async () => {
    for (const [key, url] of Object.entries(soundFiles)) {
        sounds[key] = await loadSound(url);
    }
};

export const playSoundByKey = (key) => {
    const buffer = sounds[key];
    if (buffer) {
        playSound(buffer);
    }
};

// Maneja la mutación global
export let isMuted = true;

export const toggleMute = () => {
    isMuted = !isMuted;
    audioContext.destination.channelCount = isMuted ? 0 : 2; // Simplificación para mutear
};