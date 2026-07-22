import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import type { Property } from "@/lib/types/property";

interface ListingDetailHeroProps {
  property: Property;
}

export function ListingDetailHero({ property }: ListingDetailHeroProps) {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden md:min-h-[88vh]">
      <Image
        src={property.image}
        alt={property.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
      <div className="relative z-10 flex min-h-[78vh] flex-col justify-end px-6 pb-12 pt-28 md:min-h-[88vh] md:px-12 md:pb-16 lg:px-16">
        <ScrollReveal variant="fade-up">
          <div className="mx-auto w-full max-w-6xl">
            <Link
              href="/listings"
              className="mb-6 inline-flex cursor-pointer text-xs font-medium uppercase tracking-[0.22em] text-accent transition-colors hover:text-text"
            >
              Back to listings
            </Link>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-accent">
              {property.tag}
            </p>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-text md:text-5xl lg:text-6xl">
              {property.title}
            </h1>
            <p className="mt-4 text-base text-muted md:text-lg">{property.location}</p>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <p className="font-display text-3xl tracking-tight text-text md:text-4xl">
                {property.price}
              </p>
              <Link
                href={`/contact?property=${encodeURIComponent(property.title)}`}
                className="cursor-pointer rounded-lg bg-accent px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#dce0e6]"
              >
                Request a private viewing
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
