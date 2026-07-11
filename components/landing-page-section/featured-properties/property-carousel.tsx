"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Property } from "@/lib/types/property";
import { PropertyCard } from "./property-card";

interface PropertyCarouselProps {
  properties: Property[];
}

const AUTO_SCROLL_SPEED = 0.6;
const RESUME_DELAY_MS = 2500;

export function PropertyCarousel({ properties }: PropertyCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const loopItems = [...properties, ...properties];
  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true;
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      setIsPaused(false);
    }, RESUME_DELAY_MS);
  }, []);
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId = 0;
    const tick = () => {
      if (!isPausedRef.current) {
        track.scrollLeft += AUTO_SCROLL_SPEED;
        const loopWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= loopWidth) {
          track.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(tick);
    };
    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, []);
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black/50 to-transparent" />
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => {
          isPausedRef.current = true;
          setIsPaused(true);
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
          setIsPaused(false);
        }}
        onTouchStart={pauseAutoScroll}
        onScroll={pauseAutoScroll}
        aria-label="Featured properties carousel"
      >
        {loopItems.map((property, index) => (
          <PropertyCard key={`${property.id}-${index}`} property={property} />
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-gray-400">
        Drag left or right to browse · Auto-plays when idle
      </p>
    </div>
  );
}
