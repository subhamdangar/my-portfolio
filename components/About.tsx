"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Bot, Network } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/personal";

const highlights = [
  {
    icon: GraduationCap,
    title: "MSc Data Science & AI",
    description: "Strong mathematical foundations with advanced AI specialization",
  },
  {
    icon: Brain,
    title: "Deep Learning & Neural Networks",
    description: "PyTorch, Transformers, CNNs, GANs, and Diffusion Models",
  },
  {
    icon: Bot,
    title: "RAG & Agentic AI",
    description: "Building autonomous multi-agent systems and RAG pipelines",
  },
  {
    icon: Network,
    title: "Distributed Systems",
    description: "Scalable ML infrastructure with Kafka, Spark, and Kubernetes",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Bio */}
        <div className="space-y-5">
          {personalInfo.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-slate-400 leading-relaxed text-base sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-5 sm:p-6 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <item.icon size={20} className="text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
