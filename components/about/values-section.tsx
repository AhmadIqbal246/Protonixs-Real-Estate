import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { aboutValues } from "@/lib/data/about";

export function ValuesSection() {
  return (
    <section className="relative px-6 py-16 md:px-12 lg:px-16">
      <ScrollReveal>
        <div className="mx-auto mb-12 flex max-w-2xl justify-center">
          <SectionHeading
            eyebrow="Our Values"
            title="What guides every decision we make"
            description="The principles that shape how we serve our clients and communities."
            align="center"
            className="mb-0"
          />
        </div>
      </ScrollReveal>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {aboutValues.map((value, index) => (
          <ScrollReveal key={value.id} delay={index * 100} variant="fade-up">
            <article className="rounded-2xl border border-white/25 bg-black/35 p-6 backdrop-blur-md">
              <h3 className="text-lg font-medium text-white drop-shadow-md">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">{value.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
