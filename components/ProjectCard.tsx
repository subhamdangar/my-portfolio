/* ===================================================================
   PROJECT CARD — components/ProjectCard.tsx
   =====================================================================
   Renders a single project as a card in the Projects section.

   WHAT THIS FILE CONTROLS:
   → Project card appearance (image, title, description, tech tags)
   → Three action buttons: Code | Demo | Ask AI

   HOW "ASK AI" WORKS:
   → When clicked, it dispatches a custom browser event called "askAiAboutProject"
   → The ChatBot component listens for this event and:
     1. Opens the chatbot panel
     2. Sends a contextual question about this specific project
     3. The chatbot uses the project's "aiContext" field to answer

   WHERE PROJECT DATA COMES FROM:
   → data/projects.ts — each project object in the array
   ===================================================================== */

"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

// ---- GitHub SVG icon ----
const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // ---- "Ask AI" button handler ----
  // Dispatches a custom event that the ChatBot component listens for.
  // The event carries the project title and aiContext so the chatbot
  // can generate a relevant question and answer.
  const handleAskAI = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("askAiAboutProject", {
        detail: {
          projectTitle: project.title,
          projectContext: project.aiContext,
        },
      })
    );
  }, [project.title, project.aiContext]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="glass-card overflow-hidden group flex flex-col hover:-translate-y-1 transition-all duration-300"
    >
      {/* Project Image area */}
      <div className="relative aspect-video bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 overflow-hidden group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-shadow duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
        
        {/* Actual Project Image */}
        {/* We use standard img with an error handler to hide it and show the fallback letter if the image is missing */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // If the image doesn't exist, hide the img tag so the fallback letter shows
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Fallback Letter (only visible if image fails to load) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <span className="text-4xl sm:text-5xl font-bold text-white/5 select-none">
            {project.title.charAt(0)}
          </span>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 text-xs font-medium bg-black/50 text-indigo-300 rounded-full border border-white/10 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-white/5 text-slate-400 rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ===== ACTION BUTTONS: Code | Demo | Ask AI ===== */}
        <div className="flex items-center gap-2 mt-auto">
          {/* Code button — links to GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium text-white border border-white/15 rounded-xl hover:bg-white/5 transition-all duration-200"
          >
            <GitHubIcon size={14} />
            Code
          </a>

          {/* Demo button — active or disabled based on demoUrl */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          ) : (
            <button
              disabled
              title="Coming Soon — demo not yet deployed"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl opacity-40 cursor-not-allowed pointer-events-none"
            >
              <ExternalLink size={14} />
              Demo
            </button>
          )}

          {/* ===== ASK AI BUTTON (Improvement 3) =====
            When clicked:
            1. Dispatches a custom event "askAiAboutProject"
            2. ChatBot component catches it and opens
            3. Chatbot sends a question about this specific project
            4. The answer uses data from the project's "aiContext" field

            TO CHANGE WHAT THE CHATBOT SAYS:
            → Edit the "aiContext" field in data/projects.ts for this project
          */}
          <button
            onClick={handleAskAI}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium text-indigo-300 border border-indigo-500/30 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-200 transition-all duration-200"
            title={`Ask AI about ${project.title}`}
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">Ask AI</span>
            <span className="sm:hidden">AI</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
