"use client";

import { AnimatedHeading } from "@/components/shared-components/animated-heading";
import { FadeIn } from "@/components/shared-components/fade-in";
import Link from "next/link";
import { HeroNavbar } from "./hero-navbar";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <HeroNavbar />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:px-12 lg:px-16">
        <div className="max-w-3xl -translate-y-16 md:-translate-y-24 lg:-translate-y-28">
          <AnimatedHeading
            text={"Where legacy\nmeets location."}
            className="mb-4 text-4xl font-normal md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ letterSpacing: "-0.04em" }}
          />
          <FadeIn delay={800} duration={1000}>
            <p className="mx-auto mb-5 max-w-xl text-base text-gray-300 md:text-lg">
              A premier real estate agency for buyers, sellers, and investors who move with purpose.
            </p>
          </FadeIn>
          <FadeIn delay={1200} duration={1000}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="cursor-pointer rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
              >
                Start a Chat
              </Link>
              <Link
                href="/about"
                className="liquid-glass cursor-pointer rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Explore Now
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
