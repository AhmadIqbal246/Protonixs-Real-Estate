import { SectionHeading } from "@/components/shared-components/section-heading";
import { properties } from "@/lib/data/properties";
import { PropertyCarousel } from "./property-carousel";

export function FeaturedPropertiesSection() {
  return (
    <section
      id="featured-properties"
      className="relative px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="rounded-2xl border border-white/20 bg-black/25 p-6 backdrop-blur-sm md:p-10">
        <SectionHeading
          eyebrow="Featured Properties"
          title="Handpicked homes and investments"
          description="Explore our curated selection of premium listings across top markets."
          align="center"
        />
        <PropertyCarousel properties={properties} />
      </div>
    </section>
  );
}
