// src/components/Footer.tsx
"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="py-8 px-4
                 bg-transparent
                 border-t border-white/20 dark:border-black/20"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
        {/* Social media pill */}
        <div
          className="w-fit
                     bg-gray-200/20 dark:bg-gray-800/20 backdrop-blur-md
                     rounded-full px-6 py-3 flex items-center gap-4
                     border border-gray-400 dark:border-gray-600"
        >
          <div className="flex gap-4 text-gray-100 dark:text-gray-300">
            <a
              href="https://github.com/afsalkalladi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/afsalkalladi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:afsalkalladi@gmail.com"
              className="hover:text-gray-400"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright text */}
        <p className="text-sm text-white/50">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
