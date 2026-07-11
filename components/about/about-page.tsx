import { PageShell } from "@/components/shared-components/page-shell";
import { AboutHero } from "./about-hero";
import { AboutStatsSection } from "./about-stats-section";
import { MissionSection } from "./mission-section";
import { TeamSection } from "./team-section";
import { ValuesSection } from "./values-section";

export function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <AboutStatsSection />
    </PageShell>
  );
}
