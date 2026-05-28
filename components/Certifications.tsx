"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <Award size={20} className="text-indigo-400" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 text-base">
                  {cert.title}
                </h3>
                <p className="text-indigo-400 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-slate-500 text-xs mb-3">{cert.date}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {cert.description}
                </p>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={12} />
                    View Credential
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
