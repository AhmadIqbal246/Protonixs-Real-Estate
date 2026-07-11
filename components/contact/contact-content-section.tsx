import { ContactDetails } from "@/components/landing-page-section/contact/contact-details";
import { ContactForm } from "@/components/landing-page-section/contact/contact-form";
import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { contactInfo } from "@/lib/data/contact-info";

export function ContactContentSection() {
  return (
    <section className="relative px-6 py-16 md:px-12 lg:px-16">
      <div className="light-glass mx-auto max-w-6xl overflow-hidden rounded-2xl p-6 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <ScrollReveal variant="slide-right">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="We are here to help"
                description="Send us a message or reach out directly. Our team responds within 24 hours."
                className="mb-8 lg:mb-10"
              />
              <ContactDetails />
              <div className="mt-6 rounded-xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Hours</p>
                <p className="mt-1 text-sm font-medium text-white">{contactInfo.hours}</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" delay={150}>
            <div className="light-glass-card rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 text-lg font-medium text-white drop-shadow-md">Send us a message</h3>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
