"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const marketsRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = [
      brandRef.current,
      titleRef.current,
      copyRef.current,
      marketsRef.current,
      ctaRef.current,
    ];
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(brandRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.75 })
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4",
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          marketsRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.35",
        );
    }, section);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-transparent" />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-28 text-center md:px-12 md:pb-16 lg:px-16">
        <div className="max-w-3xl">
          <p
            ref={brandRef}
            className="mb-5 font-display text-2xl tracking-wide text-accent opacity-0 md:text-3xl"
          >
            Protonix Estate
          </p>
          <h1
            ref={titleRef}
            className="mb-5 font-display text-4xl leading-[1.08] text-text opacity-0 md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Private estates.
            <br />
            Iconic locations.
          </h1>
          <p
            ref={copyRef}
            className="mx-auto mb-5 max-w-xl text-base text-muted opacity-0 md:text-lg"
          >
            Discreet advisory for buyers, sellers, and investors seeking exceptional residences
            across the world&apos;s most desirable markets.
          </p>
          <p
            ref={marketsRef}
            className="mb-9 text-xs font-medium uppercase tracking-[0.22em] text-accent/90 opacity-0 md:text-[13px]"
          >
            New York · Beverly Hills · Miami Beach · Private Advisory
          </p>
          <div
            ref={ctaRef}
            className="flex flex-wrap justify-center gap-4 opacity-0"
          >
            <Link
              href="/contact"
              className="cursor-pointer rounded-lg bg-accent px-8 py-3 font-medium text-ink transition-colors hover:bg-[#dce0e6]"
            >
              Book a private consultation
            </Link>
            <Link
              href="#featured-properties"
              className="cursor-pointer rounded-lg border border-[color:var(--color-line)] bg-surface/60 px-8 py-3 font-medium text-text transition-colors hover:border-accent/50 hover:bg-surface"
            >
              View featured residences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
