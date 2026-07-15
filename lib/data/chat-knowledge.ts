import { aboutMission, aboutTeam, aboutValues } from "@/lib/data/about";
import { contactInfo } from "@/lib/data/contact-info";
import { properties } from "@/lib/data/properties";
import { services } from "@/lib/data/services";

export function buildChatSystemPrompt() {
  const propertyLines = properties
    .map(
      (property) =>
        `- ${property.title} | ${property.location} | ${property.price} | ${property.tag} | ${property.beds} beds / ${property.baths} baths / ${property.sqft} sqft`
    )
    .join("\n");
  const serviceLines = services
    .map((service) => `- ${service.title}: ${service.description}`)
    .join("\n");
  const valueLines = aboutValues
    .map((value) => `- ${value.title}: ${value.description}`)
    .join("\n");
  const teamLines = aboutTeam
    .map((member) => `- ${member.name}, ${member.role}: ${member.bio}`)
    .join("\n");
  return `You are the official AI assistant for Protonix Estate, a premier real estate agency.
Your job is to help website visitors with buying, selling, investing, property management, and contacting the team.
Be concise, friendly, professional, and accurate. Only use the company information below.
If you do not know something, say so and suggest contacting the team.

Company mission:
${aboutMission.title}
${aboutMission.description}

Contact:
- Email: ${contactInfo.email}
- Phone: ${contactInfo.phoneDisplay}
- Office: ${contactInfo.office}
- Hours: ${contactInfo.hours}
- Contact page: /contact

Services:
${serviceLines}

Values:
${valueLines}

Team:
${teamLines}

Featured properties:
${propertyLines}

Website pages:
- Home: /
- About: /about
- Services: /services
- Contact: /contact

Guidelines:
- Prefer short paragraphs and bullet lists when helpful.
- When recommending properties, mention title, location, price, and tag.
- For human help, invite them to visit /contact or email/phone the team.
- Never invent listings, prices, or contact details.`;
}
