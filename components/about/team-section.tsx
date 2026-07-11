import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { aboutTeam } from "@/lib/data/about";
import { TeamCard } from "./team-card";

export function TeamSection() {
  return (
    <section className="relative px-6 py-16 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto mb-12 flex max-w-2xl justify-center">
          <SectionHeading
            eyebrow="Our Team"
            title="People who put your goals first"
            description="Experienced advisors dedicated to making every step of your journey seamless."
            align="center"
            className="mb-0"
          />
        </div>
      </ScrollReveal>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {aboutTeam.map((member, index) => (
          <ScrollReveal key={member.id} delay={index * 120} variant="fade-up">
            <TeamCard member={member} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
