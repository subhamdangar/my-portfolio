/* ===================================================================
   HERO SECTION — components/Hero.tsx
   =====================================================================
   This is the first section visitors see — the big landing area.

   WHAT THIS FILE CONTROLS:
   → Profile image (circular photo with glow ring)
   → Your name with typing animation
   → Your job title
   → Your tagline
   → CTA buttons (View Projects, Resume, GitHub, LinkedIn)

   WHERE TO CHANGE TEXT:
   → data/personal.ts — name, title, tagline, links are all stored there.
   → This file just DISPLAYS that data.

   WHERE TO CHANGE THE PROFILE IMAGE:
   → Replace the file at: public/images/profile.webp
   → Supported formats: .webp, .jpg, .png
   → Recommended size: square, at least 300×300px

   WHERE TO CHANGE TYPING ANIMATION SPEED:
   → Look for <TypeWriter> below — the "speed" prop controls letters/ms
   ===================================================================== */

"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { personalInfo } from "@/data/personal";
import TypeWriter from "./TypeWriter";

// ---- GitHub SVG icon (lucide-react removed brand icons) ----
const GitHubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ---- LinkedIn SVG icon ----
const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ---- Framer Motion animation variants ----
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20"
      >
        {/* Badge — "Open to opportunities" pill */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to AI/ML Engineering Opportunities
          </span>
        </motion.div>

        {/* ===== PROFILE IMAGE (Improvement 1) =====
          HOW IT WORKS:
          - Shows your photo from public/images/profile.webp
          - If the image file doesn't exist or fails to load,
            it shows your initials "SD" as a fallback
          - The initials are HIDDEN by default and only appear on error

          TO REPLACE YOUR PHOTO:
          1. Put your photo at: public/images/profile.webp
          2. The photo will appear automatically — no code changes needed!
          3. For best results use a square image (300×300px or larger)
        */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative group">
            {/* Animated gradient ring (the glowing border effect) */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-500 animate-[spin_6s_linear_infinite]" />

            {/* Image container — circular with dark background */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#0a0a0f] bg-[#12121a]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.webp"
                alt={personalInfo.name}
                className="relative z-10 w-full h-full object-cover"
                onError={(e) => {
                  // Image failed to load → hide the <img> and show the initials fallback
                  (e.target as HTMLImageElement).style.display = "none";
                  const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />

              {/* Initials fallback — HIDDEN by default, only shown if image fails */}
              <div
                className="absolute inset-0 items-center justify-center bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"
                style={{ display: "none" }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-accent select-none">
                  SD
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== NAME WITH TYPING ANIMATION (Improvement 2) =====
          HOW IT WORKS:
          - The TypeWriter component types out each letter one by one
          - A blinking cursor appears during typing, then fades out
          - The name comes from data/personal.ts → personalInfo.name

          TO CHANGE THE NAME:
          → Edit data/personal.ts → personalInfo.name

          TO CHANGE TYPING SPEED:
          → "speed" prop below = milliseconds between each letter (lower = faster)
          → "startDelay" prop = milliseconds before typing begins
        */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <TypeWriter
            text={personalInfo.name}
            speed={80}
            startDelay={800}
            className="gradient-text"
          />
        </motion.h1>

        {/* Title — e.g., "AI/ML Engineer & Data Scientist" */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-indigo-400 mb-6"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline — short description paragraph */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons — main action buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-2"
          >
            <FileText size={18} />
            Resume
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-white/20 text-slate-300 font-medium rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-white/20 text-slate-300 font-medium rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            <LinkedInIcon size={18} />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator — bouncing arrow */}
        <motion.div
          variants={item}
          className="mt-16 sm:mt-20"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
