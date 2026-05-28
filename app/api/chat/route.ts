import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT } from "@/knowledge_base/portfolio_context";

// ===== CHATBOT API CONFIGURATION =====
// This route handles chat requests server-side to protect your API key.
// The portfolio context from knowledge_base/ is injected as a system prompt.
//
// TO CHANGE THE AI MODEL:
// Update the 'model' field below. See https://openrouter.ai/models for options.
// Free models include: meta-llama/llama-4-maverick, google/gemma-3-27b-it:free
// =====================================

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

// ===== CHANGE THE MODEL HERE IF NEEDED =====
const DEFAULT_MODEL = "meta-llama/llama-4-maverick";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  hiddenContext?: string;
}

// System prompt that instructs the AI how to behave
const SYSTEM_PROMPT = `You are an AI assistant for Subham Dangar's portfolio website. You help visitors learn about Subham's background, skills, projects, and experience.

IMPORTANT RULES:
1. Only answer questions related to Subham's portfolio, skills, projects, education, and professional background.
2. Be concise but informative. Use a friendly, professional tone.
3. If asked about something not in your knowledge, politely say you don't have that information.
4. Never make up information that isn't in your context.
5. Format responses clearly. Use bullet points for lists.
6. Keep responses under 200 words unless the question requires a detailed explanation.

PORTFOLIO KNOWLEDGE BASE:
${PORTFOLIO_CONTEXT}`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    // Check if API key is configured
    if (!apiKey || apiKey === "your_openrouter_api_key_here" || apiKey.trim() === "") {
      // Return a helpful fallback response when no API key is set
      return NextResponse.json({
        message: getFallbackResponse((await request.json() as ChatRequest).messages),
        fallback: true,
      });
    }

    const body = (await request.json()) as ChatRequest;

    // Validate request
    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required and must not be empty." },
        { status: 400 }
      );
    }

    // Limit conversation history to prevent token overflow
    const recentMessages = body.messages.slice(-10);

    // Build the dynamic system prompt with optional project-specific context
    let dynamicSystemPrompt = SYSTEM_PROMPT;
    if (body.hiddenContext) {
      dynamicSystemPrompt += `\n\nADDITIONAL PROJECT CONTEXT (Use this to answer the user's question):\n${body.hiddenContext}`;
    }

    // Build the messages array with system prompt
    const messages: ChatMessage[] = [
      { role: "system", content: dynamicSystemPrompt },
      ...recentMessages,
    ];

    // Call OpenRouter API
    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://subhamdangar.vercel.app", // ===== REPLACE WITH YOUR URL =====
        "X-Title": "Subham Dangar Portfolio",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
        messages,
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter API error:", response.status, errorData);

      // Return fallback for API errors too
      return NextResponse.json({
        message: "I'm having trouble connecting to my AI backend right now. Please try again in a moment, or feel free to explore the portfolio sections above!",
        fallback: true,
      });
    }

    const data = await response.json();

    // Extract the assistant's response
    const assistantMessage =
      data.choices?.[0]?.message?.content ||
      "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
        fallback: true,
      },
      { status: 500 }
    );
  }
}

// ===== FALLBACK RESPONSES =====
// These are used when no API key is configured.
// They provide basic responses using the portfolio data.
function getFallbackResponse(messages: ChatMessage[]): string {
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

  if (lastMessage.includes("who") || lastMessage.includes("about") || lastMessage.includes("subham")) {
    return "Subham Dangar is an MSc Data Science & AI student with a strong foundation in mathematics. He specializes in building intelligent AI systems, including deep learning models, RAG pipelines, multi-agent systems, and distributed computing solutions. Feel free to explore the portfolio sections above for more details!";
  }

  if (lastMessage.includes("project")) {
    return "Subham has worked on several exciting AI/ML projects including:\n\n• **RAG-Powered Research Assistant** — A retrieval-augmented generation pipeline for intelligent document Q&A\n• **Distributed Model Training Pipeline** — Scalable deep learning training across GPU clusters\n• **Agentic AI Task Planner** — A multi-agent system for autonomous task decomposition\n• **Real-Time Anomaly Detection** — Streaming ML pipeline for detecting anomalies\n• **Neural Style Transfer App** — Deep learning-based artistic image generation\n\nCheck out the Projects section for more details!";
  }

  if (lastMessage.includes("skill") || lastMessage.includes("tech") || lastMessage.includes("stack")) {
    return "Subham's technical skills span multiple domains:\n\n• **Programming**: Python, TypeScript, SQL, Rust, C++\n• **ML/DL**: PyTorch, TensorFlow, Scikit-learn, Transformers\n• **AI Systems**: LangChain, RAG Pipelines, Vector Databases, Agentic AI\n• **Distributed**: Apache Kafka, Spark, Ray, Kubernetes\n• **Tools**: MLflow, W&B, FastAPI, Docker, AWS, GCP\n\nVisit the Skills section for the complete breakdown!";
  }

  if (lastMessage.includes("education") || lastMessage.includes("degree") || lastMessage.includes("study")) {
    return "Subham holds a BSc in Mathematics and is currently pursuing his MSc in Data Science & Artificial Intelligence. His mathematical foundation gives him deep understanding of the algorithms and theory behind modern AI systems.";
  }

  if (lastMessage.includes("contact") || lastMessage.includes("email") || lastMessage.includes("reach")) {
    return "You can reach Subham through:\n\n• **Email**: Check the Contact section below\n• **GitHub**: Visit his GitHub profile for code repositories\n• **LinkedIn**: Connect with him on LinkedIn\n\nScroll down to the Contact section for all the links!";
  }

  if (lastMessage.includes("deep learning") || lastMessage.includes("neural")) {
    return "Subham has extensive experience with deep learning, including:\n\n• **Architectures**: CNNs, RNNs, Transformers, GANs, Diffusion Models\n• **Frameworks**: PyTorch (primary), TensorFlow\n• **Projects**: Neural Style Transfer, Distributed Model Training\n• **Certifications**: Deep Learning Specialization from DeepLearning.AI\n\nHe applies deep learning to solve real-world problems in computer vision, NLP, and generative AI.";
  }

  return "Hi! I'm Subham's portfolio assistant. I can tell you about:\n\n• 👤 **Who Subham is** — his background and education\n• 🛠️ **Technical skills** — programming, ML, AI systems\n• 📂 **Projects** — AI/ML projects he's built\n• 🎓 **Certifications** — professional credentials\n• 📬 **Contact info** — how to reach him\n\nWhat would you like to know? (Note: For full AI-powered responses, an OpenRouter API key needs to be configured.)";
}
