import { benefits } from "@/lib/data/benefits";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { BenefitCard } from "./benefit-card";

function TimelineNode() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/60 shadow-[0_0_16px_rgba(255,255,255,0.15)] backdrop-blur-md">
      <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    </div>
  );
}

export function BenefitTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl px-2">
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 top-6 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/35 to-transparent md:block"
      />
      <ul className="flex flex-col gap-8 md:gap-10">
        {benefits.map((benefit, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li key={benefit.id}>
              <ScrollReveal
                delay={index * 100}
                variant={isLeft ? "slide-right" : "slide-left"}
                className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2rem_1fr] md:items-center md:gap-8"
              >
                {isLeft ? (
                  <>
                    <div className="order-2 w-full max-w-md justify-self-center md:order-none md:col-start-1 md:justify-self-end">
                      <BenefitCard benefit={benefit} step={index + 1} align="right" />
                    </div>
                    <div className="order-1 flex justify-center md:col-start-2">
                      <TimelineNode />
                    </div>
                    <div className="hidden md:col-start-3 md:block" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:col-start-1 md:block" aria-hidden="true" />
                    <div className="order-1 flex justify-center md:col-start-2">
                      <TimelineNode />
                    </div>
                    <div className="order-2 w-full max-w-md justify-self-center md:order-none md:col-start-3 md:justify-self-start">
                      <BenefitCard benefit={benefit} step={index + 1} align="left" />
                    </div>
                  </>
                )}
              </ScrollReveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
