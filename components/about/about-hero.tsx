import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { aboutHero } from "@/lib/data/about";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden md:min-h-[85vh]">
      <Image
        src={aboutHero.image}
        alt={aboutHero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="relative z-10 flex min-h-[78vh] items-end px-6 pb-12 pt-28 md:min-h-[85vh] md:px-12 md:pb-16 lg:px-16">
        <ScrollReveal variant="fade-up">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
              {aboutHero.eyebrow}
            </p>
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-text md:text-5xl lg:text-6xl">
              {aboutHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted md:text-lg">{aboutHero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={aboutHero.primaryCta.href}
                className="cursor-pointer rounded-lg bg-accent px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#dce0e6]"
              >
                {aboutHero.primaryCta.label}
              </Link>
              <Link
                href={aboutHero.secondaryCta.href}
                className="cursor-pointer rounded-lg border border-[color:var(--color-line)] bg-black/40 px-7 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50"
              >
                {aboutHero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
