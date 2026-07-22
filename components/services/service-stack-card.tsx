import { ServiceIcon } from "@/components/landing-page-section/services/service-icon";

interface ServiceStackCardProps {
  index: number;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export function ServiceStackCard({
  index,
  title,
  icon,
  description,
  features,
}: ServiceStackCardProps) {
  return (
    <article className="relative isolate min-h-[22rem] overflow-hidden p-8 md:min-h-[24rem] md:p-12 lg:p-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,205,212,0.1),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/55 to-transparent" />
      <div className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent md:inset-y-10" />
      <div className="relative flex h-full flex-col justify-between gap-10 lg:flex-row lg:gap-16">
        <div className="flex max-w-2xl flex-1 flex-col">
          <div className="mb-8 flex items-center gap-5">
            <span className="font-display text-sm tracking-[0.28em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-10 bg-accent/50" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 text-accent">
              <ServiceIcon name={icon} />
            </div>
          </div>
          <h3 className="font-display text-3xl leading-[1.1] tracking-tight text-text md:text-4xl lg:text-[2.75rem]">
            {title}
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#b8b3ad] md:text-base">
            {description}
          </p>
        </div>
        <div className="w-full shrink-0 border-t border-white/[0.08] pt-8 lg:w-72 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2 xl:w-80">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            Included
          </p>
          <ul className="space-y-0">
            {features.map((feature) => (
              <li
                key={feature}
                className="border-b border-white/[0.07] py-3.5 text-sm text-[#d4d0cb] last:border-b-0"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
