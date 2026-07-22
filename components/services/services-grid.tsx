"use client";

import { ScrollStack } from "@/components/shared-components/scroll-stack/scroll-stack";
import { ScrollStackItem } from "@/components/shared-components/scroll-stack/scroll-stack-item";
import { services } from "@/lib/data/services";
import { servicePageDetails } from "@/lib/data/services-page";
import { ServiceStackCard } from "./service-stack-card";

export function ServicesGrid() {
  return (
    <section className="relative">
      <ScrollStack
        itemDistance={140}
        itemStackDistance={32}
        baseScale={0.9}
        itemScale={0.025}
        stackPosition="18%"
        scaleEndPosition="8%"
        blurAmount={1.25}
      >
        {services.map((service, index) => {
          const details = servicePageDetails[service.id];
          return (
            <ScrollStackItem
              key={service.id}
              itemClassName="my-8 overflow-hidden rounded-[2rem] border border-white/[0.12] bg-[#0c0c0e] shadow-[0_28px_80px_rgba(0,0,0,0.55)] md:rounded-[2.5rem]"
            >
              <ServiceStackCard
                index={index}
                title={service.title}
                icon={service.icon}
                description={details.longDescription}
                features={details.features}
              />
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
}
