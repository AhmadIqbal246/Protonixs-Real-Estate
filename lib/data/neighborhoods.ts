import type { Neighborhood } from "@/lib/types/neighborhood";

export const neighborhoods: Neighborhood[] = [
  {
    id: "1",
    name: "Manhattan Heights",
    description: "Luxury high-rises with skyline views and world-class dining at your doorstep.",
    listings: 42,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  },
  {
    id: "2",
    name: "Pacific Shores",
    description: "Coastal living with beach access, modern architecture, and a relaxed lifestyle.",
    listings: 28,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "3",
    name: "Greenwood District",
    description: "Family-friendly suburbs with top schools, parks, and strong long-term appreciation.",
    listings: 35,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
  },
];
