import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { aboutMission } from "@/lib/data/about";

export function MissionSection() {
  return (
    <section className="relative px-6 py-16 md:px-12 lg:px-16">
      <div className="rounded-2xl border border-white/20 bg-black/25 p-6 backdrop-blur-sm md:p-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Mission"
            title={aboutMission.title}
            description={aboutMission.description}
            align="center"
            className="mb-0"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
