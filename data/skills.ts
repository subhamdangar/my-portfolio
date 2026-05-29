// ===== SKILLS DATA =====
// Update the skills in each category to match your actual expertise.
// The 'icon' field maps to a lucide-react icon name used in the Skills component.
// ===== REPLACE WITH YOUR REAL SKILLS =====

export interface SkillCategory {
  title: string;
  icon: string; // lucide-react icon name: "Code" | "Brain" | "Cpu" | "Bot" | "Network" | "Wrench"
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code",
    skills: ["Python", "C++", "C",],
  },
  {
    title: "Machine Learning",
    icon: "Brain",
    skills: [
      "Scikit-learn",
      "Regression and Classification",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "Deep Learning",
    icon: "Cpu",
    skills: [
      "PyTorch",
      "Transformers",
      "CNNs",
      "RNNs",
      "LSTM",
      "GANs",
      "Diffusion Models",
    ],
  },
  {
    title: "AI Systems",
    icon: "Bot",
    skills: [
      "LangChain",
      "RAG Pipelines",
      "Vector Databases",
      "Prompt Engineering",
      "Agentic AI",
      "Multi-Agent Systems",
      "MCP",
    ],
  },
  {
    title: "Distributed Systems",
    icon: "Network",
    skills: [
      "Apache Kafka",
      "Apache Spark",
      "Ray",
      "Docker",
      "Hadoop",
      "Dask",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: "Wrench",
    skills: ["Git","GitHub", "MLflow", "Weights & Biases", "FastAPI",],
  },
];
