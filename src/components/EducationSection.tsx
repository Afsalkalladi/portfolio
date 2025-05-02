"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-background-500/10">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-12">
        Education
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-background-500/20 p-6 rounded-xl shadow-md"
          >
            {/* Degree first */}
            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
            {/* Institution second */}
            <p className="text-white/80 font-medium mb-2">{edu.institution}</p>
            {/* Period */}
            <p className="text-white/70 mb-3">{edu.period}</p>
            {/* Details if present
            {edu.details && (
              <p className="text-white/80 text-sm">{edu.details}</p>
            )} */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
