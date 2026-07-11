import type { ServiceItem } from "@/lib/data/services";
import { ServiceCard } from "./service-card";

interface ServiceListProps {
  services: ServiceItem[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} step={index + 1} />
      ))}
    </div>
  );
}
