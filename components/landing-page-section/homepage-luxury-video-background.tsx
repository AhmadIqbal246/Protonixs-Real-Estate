"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "/videos/luxury-night-home.mp4";

export function HomepageLuxuryVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    const play = () => {
      void video.play().catch(() => undefined);
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [reduceMotion]);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      {!reduceMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-ink/48" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/76 via-ink/32 to-ink/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,8,0.42)_72%,rgba(7,7,8,0.72)_100%)]" />
    </div>
  );
}
