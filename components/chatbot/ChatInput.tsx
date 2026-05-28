"use client";

import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-3 border-t border-white/[0.06]">
      <div className="flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Subham's projects, skills..."
          disabled={isLoading}
          rows={1}
          className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 resize-none transition-colors disabled:opacity-50"
          style={{ maxHeight: "120px" }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="p-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none shrink-0"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
