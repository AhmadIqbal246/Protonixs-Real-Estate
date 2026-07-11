import { ServiceIcon } from "@/components/landing-page-section/services/service-icon";
import { ScrollReveal } from "@/components/shared-components/scroll-reveal";
import { services } from "@/lib/data/services";
import { servicePageDetails } from "@/lib/data/services-page";

export function ServicesGrid() {
  return (
    <section className="relative px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-5xl gap-6">
        {services.map((service, index) => {
          const details = servicePageDetails[service.id];
          return (
            <ScrollReveal key={service.id} delay={index * 100} variant="fade-up">
              <article className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/14 via-white/6 to-black/50 p-6 backdrop-blur-2xl md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white drop-shadow-md">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-200">{details.longDescription}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {details.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
