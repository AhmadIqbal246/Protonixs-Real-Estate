import type { Benefit } from "@/lib/types/benefit";

interface BenefitCardProps {
  benefit: Benefit;
  step: number;
  align?: "left" | "right";
}

export function BenefitCard({ benefit, step, align = "left" }: BenefitCardProps) {
  const alignClass = align === "right" ? "text-right" : "text-left";
  const dividerClass =
    align === "right"
      ? "bg-gradient-to-l from-white/25 to-transparent"
      : "bg-gradient-to-r from-white/25 to-transparent";
  return (
    <article
      className={`rounded-2xl bg-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 ${alignClass}`}
    >
      <div className={`mb-2 flex items-center gap-3 ${align === "right" ? "flex-row-reverse" : ""}`}>
        <span className="text-xs font-medium tracking-[0.2em] text-gray-400">0{step}</span>
        <div className={`h-px flex-1 ${dividerClass}`} />
      </div>
      <h3 className="text-lg font-medium text-white drop-shadow-md">{benefit.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-200 drop-shadow-md">{benefit.description}</p>
    </article>
  );
}
