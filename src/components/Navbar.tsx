// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const SECTIONS = ["home", "education", "projects"] as const;
type Section = (typeof SECTIONS)[number];

export default function Navbar() {
  const [active, setActive] = useState<Section>("home");

  // Scroll-spy to highlight the active section
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 120;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-4 z-50">
      <div
        className="
          mx-auto w-fit px-8 py-3
          bg-gray-100/20 dark:bg-gray-800/20
          backdrop-blur-lg
          rounded-full
          flex items-center gap-x-8
        "
      >
        {/* Section links */}
        {SECTIONS.map((sec) => (
          <Link
            key={sec}
            href={`#${sec}`}
            className={`
              capitalize transition
              ${
                active === sec
                  ? "text-accent-500 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-accent-500"
              }
            `}
          >
            {sec}
          </Link>
        ))}

        {/* Social icons (desktop only) */}
        <div className="hidden md:flex gap-4 text-gray-700 dark:text-gray-300">
          <Link
            href="https://github.com/afsalkalladi"
            target="_blank"
            className="hover:text-accent-500"
          >
            <FiGithub size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/afsalkalladi"
            target="_blank"
            className="hover:text-accent-500"
          >
            <FiLinkedin size={20} />
          </Link>
          <Link
            href="mailto:afsalkalladi@gmail.com"
            className="hover:text-accent-500"
          >
            <FiMail size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
