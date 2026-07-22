"use client";

import { SectionHeading } from "@/components/shared-components/section-heading";
import { ScrollStack } from "@/components/shared-components/scroll-stack/scroll-stack";
import { ScrollStackItem } from "@/components/shared-components/scroll-stack/scroll-stack-item";
import { benefits } from "@/lib/data/benefits";
import { BenefitStackCard } from "./benefit-stack-card";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative bg-transparent">
      <div className="px-6 pt-14 md:px-12 md:pt-16 lg:px-16">
        <div className="mx-auto mb-4 flex max-w-2xl justify-center md:mb-6">
          <SectionHeading
            tone="cinematic"
            eyebrow="Why Choose Us"
            title="Trusted by buyers, sellers, and investors"
            description="We combine market intelligence with a personal approach to deliver results that last."
            align="center"
            className="mb-0"
          />
        </div>
      </div>
      <ScrollStack
        itemDistance={120}
        itemStackDistance={30}
        baseScale={0.88}
        itemScale={0.03}
        stackPosition="20%"
        scaleEndPosition="10%"
        blurAmount={1.5}
      >
        {benefits.map((benefit, index) => (
          <ScrollStackItem
            key={benefit.id}
            itemClassName="my-8 overflow-hidden rounded-[40px] border border-white/[0.1] bg-[#0a0a0c] shadow-[0_30px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <BenefitStackCard benefit={benefit} index={index} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
