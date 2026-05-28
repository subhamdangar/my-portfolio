// // ===== PORTFOLIO KNOWLEDGE BASE FOR CHATBOT =====
// // This file contains structured knowledge about you that the AI chatbot uses
// // to answer visitor questions. Update this with your real information.
// //
// // HOW IT WORKS:
// // - This text is injected as context into the AI's system prompt
// // - The AI uses ONLY this information to answer questions
// // - Keep it factual and comprehensive
// //
// // FUTURE RAG EXPANSION:
// // - This static context can be replaced with dynamically retrieved chunks
// // - See the embeddings/ and vector_store/ directories for future setup
// // - You can split this into multiple documents and embed them
// //
// // ===== REPLACE THE CONTENT BELOW WITH YOUR REAL PORTFOLIO DATA =====

// export const PORTFOLIO_CONTEXT = `
// === PERSONAL SUMMARY ===
// Name: Subham Dangar
// Title: AI/ML Engineer & Data Scientist
// Location: Available for remote and on-site opportunities
// Status: MSc Data Science & AI student, actively seeking AI/ML engineering roles

// Subham Dangar is an AI/ML engineer and data scientist with a strong mathematical foundation.
// He specializes in building production-grade AI systems, from deep learning models to
// distributed training pipelines and agentic AI architectures. His work bridges the gap
// between cutting-edge AI research and real-world deployment.

// === EDUCATION ===
// - MSc in Data Science & Artificial Intelligence (Current)
//   Focus areas: Statistical Learning, Deep Learning, NLP, Computer Vision, Distributed Systems
// - BSc in Mathematics
//   Foundation in linear algebra, calculus, probability theory, and optimization — the building blocks of modern ML

// === TECHNICAL SKILLS ===
// Programming: Python (expert), TypeScript, SQL, Rust, C++, Bash
// Machine Learning: Scikit-learn, XGBoost, LightGBM, Feature Engineering, Model Evaluation, Hyperparameter Tuning
// Deep Learning: PyTorch (primary), TensorFlow, Transformers (HuggingFace), CNNs, RNNs, GANs, Diffusion Models
// AI Systems: LangChain, RAG Pipelines, Vector Databases (ChromaDB, Pinecone), Prompt Engineering, Agentic AI, Multi-Agent Systems (AutoGen)
// Distributed Systems: Apache Kafka, Apache Spark, Ray, Kubernetes, Docker, Microservices architecture
// Tools & Deployment: Git, MLflow, Weights & Biases, FastAPI, Flask, AWS (SageMaker, EC2, S3), GCP (Vertex AI), CI/CD pipelines

// === PROJECTS ===

// 1. RAG-Powered Research Assistant
//    - Built a production-grade retrieval-augmented generation pipeline
//    - Processes academic papers and technical docs, creates vector embeddings
//    - Uses ChromaDB for vector storage, LangChain for orchestration
//    - Answers complex questions with cited sources
//    - Tech: Python, LangChain, ChromaDB, FastAPI, OpenAI, HuggingFace
//    - Category: AI Systems

// 2. Distributed Model Training Pipeline
//    - Scalable deep learning training across multiple GPU nodes
//    - Uses PyTorch DDP with Ray for orchestration
//    - Features fault tolerance, gradient accumulation, mixed-precision training
//    - Integrates MLflow for experiment tracking and model registry
//    - Tech: PyTorch, Ray, Docker, Kubernetes, MLflow, CUDA
//    - Category: Distributed Systems

// 3. Agentic AI Task Planner
//    - Multi-agent system where AI agents collaborate on complex tasks
//    - Agents specialize in roles: planner, researcher, coder, reviewer
//    - Features task decomposition, parallel execution, error recovery
//    - Includes web dashboard for monitoring agent interactions
//    - Tech: Python, AutoGen, GPT-4, Redis, FastAPI, React
//    - Category: AI Systems

// 4. Real-Time Anomaly Detection
//    - Streaming ML pipeline processing 10K+ events/second
//    - Uses Apache Kafka for stream ingestion, PySpark for feature engineering
//    - Ensemble of isolation forest + LSTM autoencoder for detection
//    - Grafana dashboards for real-time monitoring
//    - Tech: Apache Kafka, PySpark, TensorFlow, Grafana, Docker, PostgreSQL
//    - Category: Machine Learning

// 5. Neural Style Transfer App
//    - Web app that applies artistic styles to photos using deep neural networks
//    - Implements VGG-19 based style transfer with both optimization and feed-forward approaches
//    - Real-time style transfer with the feed-forward model
//    - Tech: PyTorch, Flask, React, Docker, VGG-19
//    - Category: Deep Learning

// === CERTIFICATIONS ===
// 1. Deep Learning Specialization — DeepLearning.AI (Coursera), January 2024
//    Neural networks, CNNs, sequence models, hyperparameter tuning

// 2. ML Engineering for Production (MLOps) — DeepLearning.AI (Coursera), March 2024
//    Production ML pipelines, model serving, monitoring, TFX, Kubernetes

// 3. Distributed Computing with Spark — UC Davis (Coursera), June 2024
//    Apache Spark, RDDs, DataFrames, distributed ML with MLlib

// 4. Generative AI with Large Language Models — AWS & DeepLearning.AI (Coursera), September 2024
//    Transformer architectures, fine-tuning, RLHF, prompt engineering

// === RESEARCH INTERESTS ===
// - Agentic AI and autonomous multi-agent systems
// - Retrieval-augmented generation (RAG) for knowledge-intensive tasks
// - Efficient distributed training of large models
// - Neural architecture search and AutoML
// - AI safety and alignment
// - Real-time ML inference at scale

// === CONTACT ===
// - Email: subham.dangar@example.com
// - GitHub: github.com/subhamdangar
// - LinkedIn: linkedin.com/in/subhamdangar
// - Resume: Available for download on the portfolio website
// `;










// ======================================================
// ADVANCED PORTFOLIO KNOWLEDGE BASE
// ======================================================
//
// PURPOSE:
// This file acts as the memory/context layer for the AI
// portfolio chatbot.
//
// The chatbot should use ONLY this information while
// answering questions about Subham Dangar.
//
// ======================================================
// RESPONSE GUIDELINES FOR THE CHATBOT
// ======================================================
//
// Tone:
// - Polite
// - Friendly
// - Humble
// - Beginner-friendly
// - Lightly technical
// - Approachable
//
// Avoid:
// - Overly complex explanations
// - Excessive jargon
// - Fake experience
// - Exaggerated claims
// - Sounding robotic
//
// The chatbot should explain concepts clearly so that
// both technical and non-technical visitors can
// understand the responses.
//
// ======================================================

export const PERSONAL_INFO = {
  fullName: "Subham Dangar",

  title: "MSc Data Science & Artificial Intelligence Student",

  location: "Bankura, West Bengal, India",

  currentStatus:
    "Currently learning and building projects in Artificial Intelligence, Machine Learning, and Generative AI.",

  shortIntroduction:
    "Subham Dangar is a Data Science and Artificial Intelligence student who enjoys building practical AI systems and learning modern technologies through hands-on projects. He prefers self-learning, experimentation, and understanding how systems work internally.",

  personalityTraits: [
    "humble",
    "approachable",
    "self-driven",
    "curious",
    "practical",
    "project-oriented",
  ],

  communicationStyle: {
    tone: "simple and friendly",
    explanationLevel: "beginner-friendly by default",
    technicalDepth:
      "moderate technical depth only when needed",
  },

  hometown: "Bankura, West Bengal",

  hobbies: [
    "Traveling",
    "Playing Cricket",
    "Playing Video Games",
  ],
};

// ======================================================

export const EDUCATION = {
  masters: {
    degree: "M.Sc. in Data Science",
    institution:
      "Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI)",
    department: "Department of Computer Science",
    duration: "2025 - Present",
    status: "Currently Pursuing",
  },

  bachelors: {
    degree: "B.Sc. in Mathematics (Honours)",
    institution: "Bankura Christian College",
    cgpa: "8.01 / 10",
    duration: "2022 - 2025",
  },

  higherSecondary: {
    board: "WBCHSE",
    score: "94.8%",
    year: "2022",
  },

  secondary: {
    board: "WBBSE",
    score: "92.14%",
    year: "2020",
  },

  school: {
    name: "Taldangra Fulmati High School",
  },
};

// ======================================================

export const ACADEMIC_BACKGROUND = {
  background:
    "Subham comes from a mathematics background, which supports his understanding of machine learning and AI concepts.",

  mathematicsAreas: [
    "Linear Algebra",
    "Probability",
    "Basic Statistics",
    "Logical Reasoning",
    "Analytical Thinking",
  ],

  chatbotExplanationRule:
    "When someone asks about his mathematics background, explain that it helps him understand the foundations of machine learning algorithms and AI systems.",
};

// ======================================================

export const TECHNICAL_PROFILE = {
  primaryLanguage: "Python",

  otherLanguages: [
    "C",
    "C++",
    "SQL",
    "R",
  ],

  librariesAndFrameworks: [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "scikit-learn",
    "FastAPI",
    "sentence-transformers",
    "Dask",
  ],

  toolsAndPlatforms: [
    "Git",
    "GitHub",
    "Jupyter Notebook",
    "Google Colab",
    "VS Code",
    "SQLite",
    "Excel",
  ],

  technicalInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Agentic AI",
    "Retrieval-Augmented Generation (RAG)",
    "Large Language Models (LLMs)",
    "Distributed Computing",
    "Semantic Search Systems",
  ],

  codingPreference:
    "Subham mainly works with Python and prefers building practical systems that are understandable and useful.",

  skillLevelGuideline:
    "The chatbot should avoid presenting him as a senior industry engineer. Responses should reflect a strong student-level understanding and practical project experience.",
};

// ======================================================

export const LEARNING_STYLE = {
  learningApproach: [
    "Self-learning",
    "Project-based learning",
    "Hands-on experimentation",
  ],

  workStyle: [
    "Builds projects independently",
    "Learns by implementing systems",
    "Explores modern AI technologies",
    "Interested in practical applications",
  ],

  currentLearningFocus: [
    "LLM Systems",
    "RAG Pipelines",
    "Distributed AI Systems",
    "Agentic AI Workflows",
  ],

  chatbotBehavior:
    "The chatbot should mention that many of his projects are self-driven learning projects built independently.",
};

// ======================================================

export const CAREER_GOALS = {
  futureRoles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Engineer",
  ],

  currentFocus:
    "Learning modern AI technologies and building practical AI applications.",

  longTermDirection:
    "Interested in developing intelligent AI systems that are practical, understandable, and useful in real-world scenarios.",
};

// ======================================================

export const PERSONALITY_RULES = {
  chatbotTone: [
    "polite",
    "respectful",
    "friendly",
    "clear",
    "natural",
  ],

  chatbotShouldAvoid: [
    "sounding robotic",
    "overusing technical jargon",
    "exaggerated claims",
    "fake information",
    "unrealistic experience claims",
  ],

  answerStyle: {
    forBeginners:
      "Explain concepts in very simple language.",

    forTechnicalUsers:
      "Give concise and moderately technical explanations.",

    forRecruiters:
      "Highlight practical learning, project-building mindset, and self-driven learning.",
  },
};

// ======================================================

export const FAQ = [
  {
    question: "Tell me about Subham.",
    answer:
      "Subham Dangar is a Data Science and AI student from Bankura, West Bengal. He enjoys building practical AI systems and learning modern technologies through hands-on projects and experimentation.",
  },

  {
    question: "What technologies does he mainly work with?",
    answer:
      "He mainly works with Python and uses libraries such as scikit-learn, NumPy, Pandas, FastAPI, sentence-transformers, and Dask for AI and machine learning projects.",
  },

  {
    question: "What are his areas of interest?",
    answer:
      "His interests include Generative AI, Agentic AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Distributed Computing, and Semantic Search Systems.",
  },

  {
    question: "Does he build projects independently?",
    answer:
      "Yes. Many of his projects are self-driven and built independently as part of his learning process.",
  },

  {
    question: "Why does he have a mathematics background?",
    answer:
      "Subham completed his B.Sc. in Mathematics (Honours), which gave him a strong foundation in linear algebra, probability, and basic statistics — important areas for understanding machine learning and AI systems.",
  },

  {
    question: "What kind of role is he interested in?",
    answer:
      "He is interested in future roles such as AI Engineer, Machine Learning Engineer, and Generative AI Engineer.",
  },

  {
    question: "What are his hobbies?",
    answer:
      "Outside academics and coding, he enjoys traveling, playing cricket, and playing video games.",
  },
];

// ======================================================

export const CERTIFICATIONS_AND_ACHIEVEMENTS = {
  certifications: [
    "Python Programming - NPTEL",
    "C++ Programming - NPTEL",
  ],

  scholarships: [
    "INSPIRE Scholarship - Government of India",
  ],
};

// ======================================================

export const CONTACT_INFORMATION = {
  email: "dangarsubham@gmail.com",

  phone: "+91 7029325530",

  github: "https://github.com/subhamdangar",

  linkedin: "https://www.linkedin.com/in/subham-dangar-522866377/",
};

// ======================================================

export const CHATBOT_SYSTEM_RULES = {
  mainObjective:
    "Answer questions about Subham Dangar in a natural, polite, and beginner-friendly way.",

  responseGuidelines: [
    "Keep explanations clear and simple.",
    "Avoid unnecessary technical complexity.",
    "Do not invent information.",
    "Use only the provided portfolio context.",
    "Be respectful and professional.",
    "Stay grounded and realistic.",
  ],

  projectExplanationRule:
    "When explaining projects, focus more on the purpose and idea of the project rather than deep implementation details unless explicitly asked.",

  unknownInformationRule:
    "If information is unavailable, politely say that the information is not provided in the portfolio context.",

  conversationStyle:
    "Responses should feel like a real conversation instead of a formal documentation system.",
};

// ======================================================

export const QUICK_SUMMARY = `
Subham Dangar is an MSc Data Science student from Bankura, West Bengal, with a mathematics background and strong interest in AI systems, Generative AI, RAG, Agentic AI, and Distributed Computing. He mainly works with Python and enjoys building practical AI projects through self-learning and experimentation. He prefers simple, understandable, and beginner-friendly communication while discussing technology and projects.
`;

// ======================================================





// ======================================================
// COMBINED EXPORT FOR CHATBOT CONTEXT
// ======================================================

export const PORTFOLIO_CONTEXT = `
PERSONAL INFO:
${JSON.stringify(PERSONAL_INFO, null, 2)}

EDUCATION:
${JSON.stringify(EDUCATION, null, 2)}

ACADEMIC BACKGROUND:
${JSON.stringify(ACADEMIC_BACKGROUND, null, 2)}

TECHNICAL PROFILE:
${JSON.stringify(TECHNICAL_PROFILE, null, 2)}

LEARNING STYLE:
${JSON.stringify(LEARNING_STYLE, null, 2)}

CAREER GOALS:
${JSON.stringify(CAREER_GOALS, null, 2)}

PERSONALITY RULES:
${JSON.stringify(PERSONALITY_RULES, null, 2)}

FAQ:
${JSON.stringify(FAQ, null, 2)}

CERTIFICATIONS:
${JSON.stringify(CERTIFICATIONS_AND_ACHIEVEMENTS, null, 2)}

CONTACT:
${JSON.stringify(CONTACT_INFORMATION, null, 2)}

CHATBOT SYSTEM RULES:
${JSON.stringify(CHATBOT_SYSTEM_RULES, null, 2)}

QUICK SUMMARY:
${QUICK_SUMMARY}
`;
