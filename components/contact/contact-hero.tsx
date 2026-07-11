import { ScrollReveal } from "@/components/shared-components/scroll-reveal";

export function ContactHero() {
  return (
    <section className="relative px-6 pb-12 pt-8 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">Contact Us</p>
          <h1
            className="text-4xl font-normal drop-shadow-lg md:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ready to find your next property?
          </h1>
          <p className="mt-4 text-base text-gray-300 drop-shadow-md md:text-lg">
            Reach out for a free consultation, property valuation, or to schedule a private viewing.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
