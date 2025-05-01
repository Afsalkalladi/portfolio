// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-primary-500"
      >
        Afsal K
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-xl text-lg sm:text-xl text-white/80 mb-6"
      >
        Motivated third‐year B.Tech student in Electrical & Electronics
        Engineering at CUSAT, seeking a 2-month internship in VLSI design & FPGA
        development. Experienced in Verilog HDL, RTL design, digital logic, and
        hardware simulation tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="/afsalkalladi_CV.pdf"
          download
          className="inline-block px-6 py-3 rounded-xl bg-accent-500 text-background-500 font-semibold hover:bg-accent-500/80 transition"
        >
          Download CV
        </a>
        <a
          href="https://github.com/afsalkalladi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl border border-accent-500 text-accent-500 hover:bg-accent-500/10 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/afsalkalladi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl border border-accent-500 text-accent-500 hover:bg-accent-500/10 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
