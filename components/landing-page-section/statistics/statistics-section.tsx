import { statistics } from "@/lib/data/statistics";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import type { Statistic } from "@/lib/types/statistic";

interface StatItemProps {
  stat: Statistic;
}

function StatItem({ stat }: StatItemProps) {
  return (
    <div className="text-center">
      <p
        className="text-4xl font-normal text-white drop-shadow-md md:text-5xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        {stat.value}
      </p>
      <p className="mt-2 text-sm text-gray-300 drop-shadow-sm">{stat.label}</p>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="relative border-y border-white/10 px-6 py-16 md:px-12 lg:px-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {statistics.map((stat, index) => (
          <ScrollReveal key={stat.id} delay={index * 100} variant="fade-up">
            <StatItem stat={stat} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
