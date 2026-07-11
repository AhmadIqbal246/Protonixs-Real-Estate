import type { AboutValue, TeamMember } from "@/lib/types/about";

export const aboutMission = {
  title: "Where legacy meets location",
  description:
    "Protonix Estate is a premier real estate agency built for buyers, sellers, and investors who move with purpose. We combine deep local knowledge with a personal, transparent approach to help you find not just a property, but the right place to grow.",
};

export const aboutValues: AboutValue[] = [
  {
    id: "1",
    title: "Integrity First",
    description: "Honest valuations, clear communication, and no hidden fees at every stage of your journey.",
  },
  {
    id: "2",
    title: "Client-Centered",
    description: "Your goals drive our strategy. Every recommendation is tailored to your timeline and ambitions.",
  },
  {
    id: "3",
    title: "Market Intelligence",
    description: "Data-backed insights and off-market access give our clients a decisive edge in competitive markets.",
  },
  {
    id: "4",
    title: "Long-Term Partnership",
    description: "We stay with you beyond closing—for management, resale, portfolio growth, and advisory.",
  },
];

export const aboutTeam: TeamMember[] = [
  {
    id: "1",
    name: "Ahmad Hassan",
    role: "Founder & Lead Advisor",
    bio: "15+ years guiding buyers, sellers, and investors through premium residential and commercial markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Sarah Khan",
    role: "Senior Property Consultant",
    bio: "Specializes in luxury residential acquisitions and neighborhood market analysis across top cities.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Omar Farooq",
    role: "Investment Strategist",
    bio: "Builds data-driven portfolios for investors seeking long-term growth and stable returns.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];
