// src/components/ExperienceSection.tsx
"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-background-500/10">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-12">
        Projects
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-background-500/20 p-6 rounded-xl shadow-md flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
            {proj.period && (
              <p className="text-white/70 text-sm mb-2">{proj.period}</p>
            )}
            <p className="text-white/80 flex-grow">{proj.details}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-accent-500 hover:underline"
              >
                View code
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
