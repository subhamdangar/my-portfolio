// ===== CERTIFICATIONS DATA =====
// Add, remove, or edit certifications here.
// Set credentialUrl to null if you don't have a verification link.
// ===== REPLACE WITH YOUR REAL CERTIFICATIONS =====

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string | null; // null = no "View Credential" link shown
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "joy-of-computing-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL (IIT Madras)",
    date: "April 2026",
    credentialUrl: "https://drive.google.com/file/d/12uM1uz6Jv30XMiegj7zsofs0_b9IAeR8/view?usp=drive_link",
    description:
      "12-week NPTEL course covering Python programming fundamentals, problem solving, computational thinking, functions, recursion, data structures, and algorithmic concepts.",
},
  {
    id: "programming-modern-cpp",
    title: "Programming in Modern C++",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "October 2025",
    credentialUrl: "https://drive.google.com/file/d/1mtuBziqdkld_yjBOdHxqTINp6rVxICyB/view?usp=sharing",
    description:
      "12-week NPTEL course covering modern C++ programming concepts including object-oriented programming, STL, templates, memory management, lambda expressions, exception handling, and efficient software development practices.",
},
  // {
  //   id: "distributed-spark",
  //   title: "Distributed Computing with Spark",
  //   issuer: "UC Davis (Coursera)",
  //   date: "June 2024",
  //   credentialUrl: null, // No credential link
  //   description:
  //     "Big data processing with Apache Spark, covering RDDs, DataFrames, Spark SQL, and distributed ML with MLlib.",
  // },
  // {
  //   id: "generative-ai-llm",
  //   title: "Generative AI with Large Language Models",
  //   issuer: "AWS & DeepLearning.AI (Coursera)",
  //   date: "September 2024",
  //   credentialUrl: "https://coursera.org/verify/EXAMPLE3", // ===== REPLACE =====
  //   description:
  //     "LLM lifecycle covering transformer architectures, fine-tuning, RLHF, prompt engineering, and deployment strategies.",
  // },

  // ===== ADD YOUR NEW CERTIFICATIONS BELOW =====
];
