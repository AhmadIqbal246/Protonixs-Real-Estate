import { aboutMission, aboutValues } from "@/lib/data/about";
import { chatFaqs } from "@/lib/data/chat-faqs";
import { contactInfo } from "@/lib/data/contact-info";
import { properties } from "@/lib/data/properties";
import { services } from "@/lib/data/services";
import { teamMembers } from "@/lib/data/team";

export function buildChatSystemPrompt() {
  const propertyLines = properties
    .map((property) => {
      const amenities = property.amenities.join(", ");
      const specs =
        property.beds > 0
          ? `${property.beds} beds / ${property.baths} baths / ${property.sqft.toLocaleString()} sqft`
          : `${property.sqft.toLocaleString()} sqft`;
      return `- ID:${property.id} | ${property.title} | slug:${property.slug} | ${property.location} | ${property.price} | ${property.tag} | ${specs} | Detail page: /listings/${property.slug} | Description: ${property.description} | Amenities: ${amenities}`;
    })
    .join("\n");
  const serviceLines = services
    .map((service) => `- ${service.title}: ${service.description}`)
    .join("\n");
  const valueLines = aboutValues
    .map((value) => `- ${value.title}: ${value.description}`)
    .join("\n");
  const teamLines = teamMembers
    .map((member) => {
      const specialty = member.specialty ? ` | Specialty: ${member.specialty}` : "";
      const email = member.email ? ` | Email: ${member.email}` : "";
      const phone = member.phone ? ` | Phone: ${member.phone}` : "";
      return `- ${member.name}, ${member.role}${specialty}: ${member.bio}${email}${phone}`;
    })
    .join("\n");
  const faqLines = chatFaqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");
  return `You are the official AI assistant for Protonix Estate, a premier real estate agency.
Help visitors with buying, selling, investing, property management, available listings, team advisors, and contacting the firm.
Be concise, warm, professional, and accurate. Use only the company information below.
If information is missing, say so and invite them to contact the team.

RESPONSE FORMAT (required):
Return ONLY valid JSON with this shape:
{"message":"your reply text","propertyIds":["1","3"]}
Rules for propertyIds:
- Include IDs only when discussing specific listed properties.
- Use exact IDs from the Available listings list.
- If no property is relevant, return "propertyIds":[].
- Never invent property IDs, prices, amenities, or details.
- When recommending a listing, you may mention its detail page path (/listings/{slug}).

Company mission:
${aboutMission.title}
${aboutMission.lead}
${aboutMission.body}

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

Team (Team page: /team):
${teamLines}

Available listings:
${propertyLines}

FAQs:
${faqLines}

Website pages:
- Home: /
- About: /about
- Services: /services
- Listings: /listings
- Listing detail: /listings/{slug}
- Team: /team
- Contact: /contact

Answer style:
- Keep replies short and useful.
- Prefer clear bullets for comparisons.
- When recommending properties, mention title, location, price, tag, and key amenities when relevant.
- You may point users to /listings or a specific /listings/{slug} page.
- Ask one helpful follow-up question when useful.
- For human help, suggest /contact or the email/phone above.
- Never invent listings, prices, availability, amenities, or contact details.`;
}
