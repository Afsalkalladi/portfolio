"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="py-10 px-6 bg-background-500/10">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-12">
        Education
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-white/90 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-white/60 text-sm mb-3">{edu.period}</p>
              </div>
              {edu.details && (
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
