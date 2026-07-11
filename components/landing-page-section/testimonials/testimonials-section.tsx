import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { testimonials } from "@/lib/data/testimonials";
import { TestimonialCarousel } from "./testimonial-carousel";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-6 py-20 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto mb-12 flex max-w-2xl justify-center">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            description="Real stories from people who found their place with Protonix Estate."
            align="center"
            className="mb-0"
          />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <div className="mx-auto max-w-6xl">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </ScrollReveal>
    </section>
  );
}
