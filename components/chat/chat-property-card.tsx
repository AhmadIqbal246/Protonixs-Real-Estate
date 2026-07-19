import Image from "next/image";
import Link from "next/link";
import type { ChatPropertyCard } from "@/lib/types/chat";

interface ChatPropertyCardProps {
  property: ChatPropertyCard;
}

function formatSpecs(property: ChatPropertyCard) {
  if (property.tag === "Investment" && property.beds === 0) {
    return `${property.sqft.toLocaleString()} sqft`;
  }
  return `${property.beds} Beds · ${property.baths} Baths · ${property.sqft.toLocaleString()} sqft`;
}

export function ChatPropertyCardView({ property }: ChatPropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/25 bg-black/40 backdrop-blur-md">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          sizes="280px"
        />
        <span className="absolute left-2 top-2 rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-black">
          {property.tag}
        </span>
      </div>
      <div className="space-y-1 p-3">
        <h4 className="text-sm font-semibold text-white">{property.title}</h4>
        <p className="text-xs text-gray-300">{property.location}</p>
        <p className="text-sm font-semibold text-white">{property.price}</p>
        <p className="text-[11px] text-gray-400">{formatSpecs(property)}</p>
        <Link
          href="/contact"
          className="mt-2 inline-block cursor-pointer text-xs font-medium text-white transition-colors hover:text-gray-300"
        >
          Inquire about this property &rarr;
        </Link>
      </div>
    </article>
  );
}
