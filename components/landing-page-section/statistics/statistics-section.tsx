import { statistics } from "@/lib/data/statistics";
import type { Statistic } from "@/lib/types/statistic";

interface StatItemProps {
  stat: Statistic;
}

function StatItem({ stat }: StatItemProps) {
  return (
    <div className="text-center">
      <p
        className="text-4xl font-normal md:text-5xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        {stat.value}
      </p>
      <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
    </div>
  );
}

export function StatisticsSection() {
  return (
    <section className="relative border-y border-white/10 px-6 py-16 md:px-12 lg:px-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {statistics.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}
