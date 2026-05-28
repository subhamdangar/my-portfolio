/* ===================================================================
   CHAT MESSAGE — components/chatbot/ChatMessage.tsx
   =====================================================================
   Renders a single chat message bubble (user or assistant).

   WHAT THIS FILE CONTROLS:
   → Message bubble appearance (colors, alignment)
   → Basic text formatting (bold, bullet points)
   → Streaming cursor (blinking cursor while words are still appearing)

   STREAMING EFFECT:
   → When "isStreaming" is true, a small blinking cursor appears
     at the end of the message to show it's still generating
   ===================================================================== */

"use client";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  /** If true, shows a blinking cursor (message is still being "typed") */
  isStreaming?: boolean;
}

export default function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-indigo-500 text-white rounded-br-md"
            : "bg-white/[0.06] text-slate-300 border border-white/[0.08] rounded-bl-md"
        }`}
      >
        {/* Render content with basic formatting */}
        {content.split("\n").map((line, i) => {
          // Bold text: **text**
          const parts = line.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={i} className={i > 0 ? "mt-2" : ""}>
              {parts.map((part, j) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={j} className="font-semibold text-white">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                // Bullet points
                if (part.startsWith("• ") || part.startsWith("- ")) {
                  return <span key={j} className="block ml-2">{part}</span>;
                }
                return <span key={j}>{part}</span>;
              })}
            </p>
          );
        })}

        {/* Streaming cursor — shows while response is still generating */}
        {isStreaming && (
          <span className="inline-block w-1.5 h-4 bg-indigo-400 rounded-sm ml-1 animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}
