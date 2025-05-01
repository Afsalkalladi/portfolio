// src/components/Footer.tsx
"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-background-500/20 text-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Afsal K.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/afsalkalladi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent-500 transition"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/afsalkalladi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent-500 transition"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:afsalkalladi@gmail.com"
            aria-label="Email"
            className="hover:text-accent-500 transition"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
