interface ChatMessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessageBubble({ role, content }: ChatMessageBubbleProps) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-white text-black"
            : "border border-white/25 bg-white/10 text-white backdrop-blur-md"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
