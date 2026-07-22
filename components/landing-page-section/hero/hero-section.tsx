"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2400&q=85";

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
    <section ref={sectionRef} className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(247,246,243,0.45)_100%)]" />
      </div>
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
            className="mb-9 text-xs font-medium uppercase tracking-[0.22em] text-champagne opacity-0 md:text-[13px]"
          >
            New York · Beverly Hills · Miami Beach · Private Advisory
          </p>
          <div
            ref={ctaRef}
            className="flex flex-wrap justify-center gap-4 opacity-0"
          >
            <Link
              href="/contact"
              className="cursor-pointer rounded-lg bg-accent px-8 py-3 font-medium text-ink transition-colors hover:bg-jet"
            >
              Book a private consultation
            </Link>
            <Link
              href="#featured-properties"
              className="cursor-pointer rounded-lg border border-[color:var(--color-line)] bg-surface/80 px-8 py-3 font-medium text-text shadow-[0_8px_24px_rgba(26,26,28,0.06)] backdrop-blur-sm transition-colors hover:border-accent/35 hover:bg-surface"
            >
              View featured residences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
