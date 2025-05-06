"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { CertificationEntry, certificationsData } from "@/data/certifications";
import Image from "next/image";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationEntry | null>(
    null
  );

  return (
    <section id="certifications" className="py-10 px-6 bg-background-500/10">
      <h2 className="text-3xl font-semibold text-primary-500 text-center mb-12">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificationsData.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedCert(cert)}
            role="button"
            aria-label={`View details for ${cert.title}`}
          >
            {cert.icon && (
              <Image
                src={cert.icon}
                alt={cert.issuer}
                width={40}
                height={40}
                className="h-10 w-10 mb-3 rounded"
              />
            )}

            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded mb-2">
              {cert.type}
            </span>

            <h3 className="text-xl font-semibold text-white mb-1">
              {cert.title}
            </h3>
            <p className="text-white/90 font-medium mb-1">{cert.issuer}</p>
            <p className="text-white/60 text-sm mb-3">{cert.date}</p>
            <p className="text-white/70 text-sm line-clamp-2">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-labelledby="cert-modal-title"
            aria-hidden={!selectedCert}
          >
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl max-w-md w-full relative text-white shadow-xl">
              <button
                className="absolute top-3 right-4 text-white/70 text-xl"
                onClick={() => setSelectedCert(null)}
                aria-label="Close Modal"
              >
                &times;
              </button>
              {selectedCert.icon && (
                <Image
                  src={selectedCert.icon}
                  alt={selectedCert.issuer}
                  width={48}
                  height={48}
                  className="h-12 w-12 mb-3 rounded"
                />
              )}
              <h3 id="cert-modal-title" className="text-2xl font-bold mb-1">
                {selectedCert.title}
              </h3>
              <p className="text-white/80 font-medium mb-2">
                {selectedCert.issuer}
              </p>
              <p className="text-white/60 text-sm mb-4">{selectedCert.date}</p>
              <p className="text-white/80 text-sm mb-4">
                {selectedCert.description}
              </p>
              {selectedCert.link && (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
