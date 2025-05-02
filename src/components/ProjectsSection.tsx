"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10 px-6 bg-background-500/10">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {proj.title}
            </h3>

            {proj.period && (
              <p className="text-white/60 text-sm mb-3">{proj.period}</p>
            )}

            <p className="text-white/80 text-sm flex-grow leading-relaxed">
              {proj.details}
            </p>

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-accent-500 font-medium hover:underline"
              >
                View Code
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
