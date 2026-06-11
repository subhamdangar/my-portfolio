// ===== PERSONAL INFORMATION =====
// Update this file with your real information.
// This data is used across the portfolio (Hero, About, Contact sections).
// ===== REPLACE WITH YOUR REAL DATA =====

export const personalInfo = {
  name: "Subham Dangar",
  title: "Data Science and AI Student",
  tagline:
    "Building intelligent systems at the intersection of deep learning, distributed computing, and agentic AI — transforming research into production-grade AI solutions.",

  // ===== UPDATE YOUR CONTACT LINKS =====
  email: "dangarsubham@gmail.com",
  github: "https://github.com/subhamdangar",
  linkedin: "https://www.linkedin.com/in/subham-dangar-522866377/",
  // resumeUrl: "/resume.pdf",
  // resumeUrl: `/resume.pdf?v=${process.env.NEXT_PUBLIC_BUILD_ID}`,
  resumeUrl: `/resume.pdf?v=${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}`,

  // ===== UPDATE YOUR BIO PARAGRAPHS =====
  bio: [
    "I'm an MSc Data Science & AI student with a strong foundation in mathematics, passionate about building intelligent systems that solve real-world problems. My journey from pure mathematics to applied AI gives me a unique perspective on the theoretical underpinnings of machine learning algorithms.",
    "My work spans the full AI engineering stack — from designing deep learning architectures and fine-tuning large language models to building retrieval-augmented generation (RAG) pipelines and deploying models at scale with distributed computing frameworks.",
    "I'm particularly excited about the emerging field of agentic AI and multi-agent systems, where autonomous agents collaborate to solve complex tasks. I believe the future of AI lies in systems that can reason, plan, and act — not just predict.",
  ],
};
