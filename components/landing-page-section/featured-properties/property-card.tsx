import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/types/property";

interface PropertyCardProps {
  property: Property;
}

function formatSpecs(property: Property) {
  if (property.tag === "Investment" && property.beds === 0) {
    return `${property.sqft.toLocaleString()} sqft commercial`;
  }
  return `${property.beds} Beds · ${property.baths} Baths · ${property.sqft.toLocaleString()} sqft`;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group w-[220px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/25 bg-black/35 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-md sm:w-[240px] md:w-[252px]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="252px"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-0.5 text-[11px] font-semibold text-black">
          {property.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white drop-shadow-sm">{property.title}</h3>
        <p className="mt-1 text-xs text-gray-300 drop-shadow-sm">{property.location}</p>
        <p className="mt-2 text-base font-semibold text-white drop-shadow-sm">{property.price}</p>
        <p className="mt-2 text-[11px] text-gray-300 drop-shadow-sm">{formatSpecs(property)}</p>
        <Link
          href="#contact"
          className="mt-3 inline-block cursor-pointer text-xs font-medium text-white transition-colors hover:text-gray-300"
        >
          View Details &rarr;
        </Link>
      </div>
    </article>
  );
}
