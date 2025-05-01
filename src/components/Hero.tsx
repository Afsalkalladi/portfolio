// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Text */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white"
          >
            Hi, I’m Afsal K
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-md"
          >
            Crafting crisp digital circuits & FPGA systems with Verilog HDL,
            embedded C, and hands-on hardware design. Dive into my projects
            below!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/afsalkalladi_CV.pdf"
              download
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-accent-500 text-background-500 font-semibold hover:bg-accent-500/80 transition text-sm sm:text-base"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-accent-500 text-accent-500 hover:bg-accent-500/10 transition text-sm sm:text-base"
            >
              See projects
            </a>
          </motion.div>
        </div>

        {/* Circular headshot */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Afsal K"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
