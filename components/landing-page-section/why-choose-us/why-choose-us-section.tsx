import { SectionHeading } from "@/components/shared-components/section-heading";
import { BenefitTimeline } from "./benefit-timeline";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto mb-14 flex max-w-2xl justify-center">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted by buyers, sellers, and investors"
          description="We combine market intelligence with a personal approach to deliver results that last."
          align="center"
        />
      </div>
      <BenefitTimeline />
    </section>
  );
}
