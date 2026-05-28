"use client";

import { motion } from "framer-motion";
import { Code, Brain, Cpu, Bot, Network, Wrench } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/data/skills";

// Map icon strings to lucide components
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Brain,
  Cpu,
  Bot,
  Network,
  Wrench,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => {
          const IconComponent = iconMap[category.icon] || Code;

          return (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <IconComponent size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-indigo-500/10 text-indigo-300 rounded-lg border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-500/15 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
