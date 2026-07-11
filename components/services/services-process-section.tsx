import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { processSteps } from "@/lib/data/process-steps";

export function ServicesProcessSection() {
  return (
    <section className="relative px-6 py-16 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto mb-12 flex max-w-2xl justify-center">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear path from search to keys"
            description="Four simple steps designed to remove friction and keep you informed at every stage."
            align="center"
            className="mb-0"
          />
        </div>
      </ScrollReveal>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {processSteps.map((step, index) => (
          <ScrollReveal key={step.id} delay={index * 100} variant="fade-up">
            <article className="rounded-2xl border border-white/25 bg-black/35 p-6 backdrop-blur-md">
              <span className="text-xs font-medium tracking-[0.2em] text-gray-400">{step.step}</span>
              <h3 className="mt-2 text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">{step.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
