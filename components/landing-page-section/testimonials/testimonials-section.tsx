"use client";

import { SectionHeading } from "@/components/shared-components/section-heading";
import { testimonials } from "@/lib/data/testimonials";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";
import { TestimonialCarousel } from "./testimonial-carousel";

export function TestimonialsSection() {
  const sectionRef = useSectionReveal<HTMLElement>();
  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-transparent px-6 py-14 md:px-12 md:py-16 lg:px-16"
    >
      <div data-reveal className="mx-auto mb-12 flex max-w-2xl justify-center">
        <SectionHeading
          tone="cinematic"
          eyebrow="Testimonials"
          title="What our clients say"
          description="Real stories from people who found their place with Protonix Estate."
          align="center"
          className="mb-0"
        />
      </div>
      <div data-reveal className="mx-auto max-w-6xl">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
