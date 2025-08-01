// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
            className="text-4xl sm:text-5xl font-railway font-bold text-white"
          >
            Hi, I’m Afsal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-md"
          >
            Engineering smart data pipelines & clean code solutions with Python,
            SQL, and system-level logic. Dive into my projects below!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/afsalkalladi.pdf"
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
            <Image
              src="/images/profile.png"
              alt="Afsalkalldi"
              width={500} // or set as per your layout
              height={500} // or set as per your layout
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
