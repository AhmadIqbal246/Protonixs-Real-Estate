import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-black/25 p-6 backdrop-blur-sm md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <ScrollReveal variant="slide-right">
            <div>
              <SectionHeading
                eyebrow="Contact Us"
                title="Ready to find your next property?"
                description="Reach out for a free consultation, property valuation, or to schedule a private viewing."
                className="mb-8 lg:mb-10"
              />
              <ContactDetails />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" delay={150}>
            <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl md:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <h3 className="relative mb-6 text-lg font-medium text-white drop-shadow-md">Send us a message</h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
