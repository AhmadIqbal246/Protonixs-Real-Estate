import { SectionHeading } from "@/components/shared-components/section-heading";
import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-20 md:px-12 lg:px-16">
      <div className="light-glass mx-auto max-w-6xl overflow-hidden rounded-2xl p-6 md:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Ready to find your next property?"
              description="Reach out for a free consultation, property valuation, or to schedule a private viewing."
              className="mb-8 lg:mb-10"
            />
            <ContactDetails />
          </div>
          <div className="light-glass-card rounded-2xl p-6 md:p-8">
            <h3 className="mb-6 text-lg font-medium text-white drop-shadow-md">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
