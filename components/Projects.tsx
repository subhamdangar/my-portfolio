"use client";

import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-4" />
        <p className="text-slate-400 max-w-2xl">
          A selection of AI/ML projects spanning deep learning, distributed
          systems, and intelligent agents. Each project reflects real engineering
          challenges.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
