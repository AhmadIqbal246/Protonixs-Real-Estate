import Image from "next/image";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import type { Property } from "@/lib/types/property";

interface ListingDetailGalleryProps {
  property: Property;
}

export function ListingDetailGallery({ property }: ListingDetailGalleryProps) {
  const images = property.gallery.length > 0 ? property.gallery : [property.image];
  const [primary, ...rest] = images;
  return (
    <section className="relative px-6 py-10 md:px-12 md:py-14 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Gallery
          </p>
          <h2 className="mb-10 font-display text-3xl tracking-tight text-text md:text-4xl">
            Spaces within the residence
          </h2>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto md:min-h-[28rem]">
              <Image
                src={primary}
                alt={`${property.title} primary gallery`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid gap-4">
              {rest.slice(0, 2).map((src, index) => (
                <div key={`${src}-${index}`} className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${property.title} gallery ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
