export interface ChatPropertyCard {
  id: string;
  title: string;
  location: string;
  price: string;
  tag: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  properties?: ChatPropertyCard[];
}

export interface ChatApiResponse {
  reply: string;
  properties: ChatPropertyCard[];
}

export const CHAT_WELCOME_MESSAGE =
  "Hi! I am the Protonix Estate assistant. Ask me about our services, featured properties, team, or how to get in touch.";
