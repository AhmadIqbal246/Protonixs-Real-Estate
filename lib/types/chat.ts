export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const CHAT_WELCOME_MESSAGE =
  "Hi! I am the Protonix Estate assistant. Ask me about our services, featured properties, team, or how to get in touch.";
