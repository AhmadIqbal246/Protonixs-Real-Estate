"use client";

import { ChatMessageBubble } from "@/components/chat/chat-message-bubble";
import type { ChatMessage } from "@/lib/types/chat";
import { useEffect, useRef } from "react";

interface ChatPanelProps {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  error: string | null;
  onInputChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}

export function ChatPanel({
  messages,
  input,
  isLoading,
  error,
  onInputChange,
  onSubmit,
  onClose,
}: ChatPanelProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);
  return (
    <div className="flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/25 bg-black/55 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Protonix Assistant</p>
          <p className="text-xs text-gray-300">Ask about properties, services, or contact</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          aria-label="Close chat"
        >
          &#10005;
        </button>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message, index) => (
          <ChatMessageBubble key={`${message.role}-${index}`} role={message.role} content={message.content} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-white/25 bg-white/10 px-3.5 py-2.5 text-sm text-gray-300 backdrop-blur-md">
              Thinking...
            </div>
          </div>
        )}
        {error && (
          <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
            {error}
          </p>
        )}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={onSubmit} className="border-t border-white/15 p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="min-w-0 flex-1 rounded-xl border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-400 focus:border-white/45"
            aria-label="Chat message"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="cursor-pointer rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
