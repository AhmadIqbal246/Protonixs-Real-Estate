import { aboutMission, aboutTeam, aboutValues } from "@/lib/data/about";
import { chatFaqs } from "@/lib/data/chat-faqs";
import { contactInfo } from "@/lib/data/contact-info";
import { properties } from "@/lib/data/properties";
import { services } from "@/lib/data/services";

export function buildChatSystemPrompt() {
  const propertyLines = properties
    .map(
      (property) =>
        `- ID:${property.id} | ${property.title} | ${property.location} | ${property.price} | ${property.tag} | ${property.beds} beds / ${property.baths} baths / ${property.sqft.toLocaleString()} sqft`
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
  const faqLines = chatFaqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");
  return `You are the official AI assistant for Protonix Estate, a premier real estate agency.
Help visitors with buying, selling, investing, property management, featured listings, and contacting the team.
Be concise, warm, professional, and accurate. Use only the company information below.
If information is missing, say so and invite them to contact the team.

RESPONSE FORMAT (required):
Return ONLY valid JSON with this shape:
{"message":"your reply text","propertyIds":["1","3"]}
Rules for propertyIds:
- Include IDs only when discussing specific featured properties.
- Use exact IDs from the Featured properties list.
- If no property is relevant, return "propertyIds":[].
- Never invent property IDs, prices, or details.

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

FAQs:
${faqLines}

Website pages:
- Home: /
- About: /about
- Services: /services
- Contact: /contact

Answer style:
- Keep replies short and useful.
- Prefer clear bullets for comparisons.
- When recommending properties, mention title, location, price, and tag.
- Ask one helpful follow-up question when useful.
- For human help, suggest /contact or the email/phone above.
- Never invent listings, prices, availability, or contact details.`;
}
