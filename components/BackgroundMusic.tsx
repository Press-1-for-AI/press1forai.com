"use client";

import { useEffect, useRef } from "react";
import { isMuted, subscribeMuted } from "@/lib/sounds";

const SRC = "/press1_background.mp3";
const VOLUME = 0.32; // background level — leaves headroom for SFX over the top

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = VOLUME;
    audio.muted = isMuted();
    audio.loop = true;

    // Try to start playback. Browsers permit muted autoplay on most pages,
    // but iOS Safari and a few hardened policies still require a user
    // gesture even for muted media — fall back to starting on first click.
    let gestureCleanup: (() => void) | null = null;
    const start = () => {
      audio.play().catch(() => {
        const onGesture = () => {
          audio.play().catch(() => {});
          if (gestureCleanup) gestureCleanup();
        };
        document.addEventListener("click", onGesture, { once: true });
        document.addEventListener("keydown", onGesture, { once: true });
        document.addEventListener("touchstart", onGesture, { once: true });
        gestureCleanup = () => {
          document.removeEventListener("click", onGesture);
          document.removeEventListener("keydown", onGesture);
          document.removeEventListener("touchstart", onGesture);
        };
      });
    };
    start();

    // Stay in sync with the global mute state — when the user flips the
    // AudioToggle, the music mutes/unmutes alongside the SFX.
    const unsub = subscribeMuted((m) => {
      audio.muted = m;
      // Restart playback if it had been blocked / paused while muted.
      if (!m && audio.paused) {
        audio.play().catch(() => {});
      }
    });

    return () => {
      unsub();
      if (gestureCleanup) gestureCleanup();
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={SRC}
      preload="auto"
      loop
      // Start muted by default; the effect above syncs to the persisted
      // state on hydration so SSR markup matches the initial client state.
      muted
      aria-hidden="true"
    />
  );
}
