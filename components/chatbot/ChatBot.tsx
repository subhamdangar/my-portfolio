/* ===================================================================
   CHATBOT — components/chatbot/ChatBot.tsx
   =====================================================================
   The floating AI assistant chatbot panel.

   WHAT THIS FILE CONTROLS:
   → The floating chat button (bottom-right corner)
   → The chat panel (messages, input, header)
   → AI thinking states ("Analyzing portfolio knowledge...")
   → "Ask AI" integration (listens for events from project cards)

   HOW "ASK AI" INTEGRATION WORKS:
   → When you click "Ask AI" on a project card, it dispatches
     a custom browser event called "askAiAboutProject"
   → This component listens for that event and:
     1. Opens the chat panel
     2. Sends a contextual question about that project
     3. The AI uses the project's "aiContext" to answer

   WHERE CHATBOT KNOWLEDGE IS STORED:
   → knowledge_base/portfolio_context.ts — general portfolio knowledge
   → data/projects.ts → aiContext field — project-specific knowledge
   → app/api/chat/route.ts — the server-side AI logic

   WHERE TO EDIT SUGGESTED PROMPTS:
   → Search for "SUGGESTED_PROMPTS" below and edit the array
   ===================================================================== */

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Trash2, Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

// ---- Message type ----
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  /** If true, the message is being "streamed" (words appear gradually) */
  isStreaming?: boolean;
}

// ===== SUGGESTED PROMPTS =====
// These appear when the chat is first opened (empty state).
// Edit these to match your portfolio content.
const SUGGESTED_PROMPTS = [
  "Who is Subham?",
  "What are his key projects?",
  "What AI technologies has he used?",
  "Tell me about his education",
  "Which projects use deep learning?",
];

// ===== THINKING MESSAGES =====
// These rotate while waiting for the AI response.
// They make the chatbot feel intelligent and purposeful.
const THINKING_MESSAGES = [
  "Analyzing portfolio knowledge",
  "Searching project database",
  "Generating response",
];

// ---- Module-level message ID counter (avoids React compiler issues) ----
let messageIdCounter = 0;

// ===== THINKING INDICATOR COMPONENT =====
// Self-contained component that cycles through thinking messages.
// Encapsulated so it doesn't trigger lint issues in the parent component.
function ThinkingIndicator() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % THINKING_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-start mb-3">
      <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400 typing-dot" />
            <span className="w-2 h-2 rounded-full bg-indigo-400 typing-dot" />
            <span className="w-2 h-2 rounded-full bg-indigo-400 typing-dot" />
          </div>
          <span className="text-xs text-slate-500 ml-1 thinking-text">
            {THINKING_MESSAGES[textIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // ---- Auto-scroll to latest message ----
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // ---- Prevent body scroll when chat is open on mobile ----
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ---- Open handler ----
  const handleOpen = useCallback(() => {
    setShowPulse(false);
    setIsOpen(true);
  }, []);

  // ---- Close handler ----
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // (Thinking state is handled by the ThinkingIndicator component below)

  // ===== STREAMING EFFECT =====
  // After receiving the full AI response, reveal it word by word
  // to create a ChatGPT-like streaming appearance.
  const streamResponse = useCallback((fullContent: string) => {
    messageIdCounter += 1;
    const msgId = `msg-${messageIdCounter}`;
    const words = fullContent.split(" ");
    let wordIndex = 0;

    // Start with empty streaming message
    setMessages((prev) => [
      ...prev,
      { id: msgId, role: "assistant", content: "", isStreaming: true },
    ]);

    // Reveal one word at a time
    const streamInterval = setInterval(() => {
      wordIndex++;
      const visibleText = words.slice(0, wordIndex).join(" ");
      setMessages((prev) =>
        prev.map((m) =>
          m.id === msgId
            ? { ...m, content: visibleText, isStreaming: wordIndex < words.length }
            : m
        )
      );
      if (wordIndex >= words.length) {
        clearInterval(streamInterval);
      }
    }, 30); // 30ms per word — fast but visible
  }, []);

  // ===== SEND MESSAGE =====
  // Sends user message to the API and handles the response
  const sendMessage = useCallback(
    async (content: string, hiddenContext?: string) => {
      messageIdCounter += 1;
      const userMessage: Message = {
        id: `msg-${messageIdCounter}`,
        role: "user",
        content,
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            hiddenContext, // Pass the project-specific context to the server
          }),
        });

        const data = await response.json();
        const fullResponse =
          data.message ||
          "I apologize, but I couldn't generate a response. Please try again.";

        // Use streaming effect for the AI response
        streamResponse(fullResponse);
      } catch {
        messageIdCounter += 1;
        const errorMessage: Message = {
          id: `msg-${messageIdCounter}`,
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again in a moment, or explore the portfolio sections above!",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, streamResponse]
  );

  // ===== "ASK AI" EVENT LISTENER (Improvement 3) =====
  // Listens for custom events from ProjectCard "Ask AI" buttons.
  // When received, opens the chatbot and sends a project-specific question.
  useEffect(() => {
    const handleAskAi = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail?.projectTitle) return;

      // Open the chatbot
      setShowPulse(false);
      setIsOpen(true);

      // Send a contextual question about the project
      // We pass detail.projectContext as hiddenContext so the AI knows about it
      // Small delay so the chat panel animation completes first
      setTimeout(() => {
        sendMessage(
          `Explain the architecture and key technologies of the ${detail.projectTitle} project.`,
          detail.projectContext
        );
      }, 400);
    };

    window.addEventListener("askAiAboutProject", handleAskAi);
    return () => window.removeEventListener("askAiAboutProject", handleAskAi);
  }, [sendMessage]);

  // ---- Clear chat ----
  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <>
      {/* ===== FLOATING ACTION BUTTON ===== */}
      <motion.button
        onClick={handleOpen}
        className={`fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
      >
        <MessageCircle size={24} />
        {showPulse && (
          <span className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping" />
        )}
      </motion.button>

      {/* ===== CHAT PANEL ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (mobile only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="fixed z-50
                inset-0
                md:inset-auto md:bottom-5 md:right-5 md:w-[420px] md:h-[600px] md:max-h-[80vh]
                flex flex-col
                bg-[#0c0c14] md:rounded-2xl md:border md:border-white/[0.08] md:shadow-2xl md:shadow-black/50
                overflow-hidden"
              ref={chatContainerRef}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0c0c14] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-semibold">
                      AI Portfolio Assistant
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Ask me about Subham
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <button
                      onClick={clearChat}
                      className="p-2 text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-colors"
                      title="Clear chat"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                  <button
                    onClick={handleClose}
                    className="p-2 text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-lg transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 chat-scrollbar">
                {messages.length === 0 ? (
                  /* ===== EMPTY STATE — Welcome + Suggested Prompts ===== */
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                      <Sparkles size={24} className="text-indigo-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">
                      Hi! I&apos;m Subham&apos;s AI assistant
                    </h4>
                    <p className="text-slate-500 text-sm mb-6">
                      Ask me anything about his projects, skills, or background.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {SUGGESTED_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          onClick={() => sendMessage(prompt)}
                          className="px-3 py-2 text-xs sm:text-sm text-indigo-300 bg-indigo-500/10 rounded-xl border border-indigo-500/15 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-200"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ===== CHAT MESSAGES ===== */
                  <>
                    {messages.map((msg) => (
                      <ChatMessage
                        key={msg.id}
                        role={msg.role}
                        content={msg.content}
                        isStreaming={msg.isStreaming}
                      />
                    ))}

                    {/* Thinking Indicator — self-contained component */}
                    {isLoading && <ThinkingIndicator />}

                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input */}
              <ChatInput onSend={sendMessage} isLoading={isLoading} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
