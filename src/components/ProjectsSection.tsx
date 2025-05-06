"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// Import the type from the project data file
import { projectsData, ProjectEntry } from "@/data/projects";

// Function to return badge color classes based on project type
const getBadgeColor = (type: string) => {
  const normalized = type.toLowerCase();
  if (normalized.includes("academic")) return "bg-blue-500/20 text-blue-300";
  if (normalized.includes("personal"))
    return "bg-purple-500/20 text-purple-300";
  if (normalized.includes("mini")) return "bg-yellow-500/20 text-yellow-300";
  if (normalized.includes("major")) return "bg-red-500/20 text-red-300";
  if (normalized.includes("freelance"))
    return "bg-emerald-500/20 text-emerald-300";
  return "bg-gray-500/20 text-gray-300"; // default
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(
    null
  );

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
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedProject(proj)}
          >
            {proj.period && (
              <span
                className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${getBadgeColor(
                  proj.period
                )}`}
              >
                {proj.period}
              </span>
            )}
            <h3 className="text-xl font-semibold text-white mb-2">
              {proj.title}
            </h3>
            <p className="text-white/70 text-sm line-clamp-2">{proj.details}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl max-w-md w-full relative text-white shadow-xl">
            <button
              className="absolute top-3 right-4 text-white/70 text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-1">{selectedProject.title}</h3>
            {selectedProject.period && (
              <span
                className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${getBadgeColor(
                  selectedProject.period
                )}`}
              >
                {selectedProject.period}
              </span>
            )}
            <p className="text-white/80 text-sm mb-4">
              {selectedProject.details}
            </p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
