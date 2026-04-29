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

    // Browsers permit muted autoplay on most pages, but iOS Safari and a few
    // hardened policies still require a user gesture even for muted media —
    // fall back to starting on first click.
    let gestureCleanup: (() => void) | null = null;
    audio.play().catch(() => {
      const onGesture = () => {
        audio.play().catch(() => {});
        gestureCleanup?.();
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

    const unsub = subscribeMuted((m) => {
      audio.muted = m;
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
      preload="metadata"
      loop
      // Render muted on the server so SSR markup matches the initial client
      // state; the effect syncs to the persisted preference after hydration.
      muted
      aria-hidden="true"
    />
  );
}
