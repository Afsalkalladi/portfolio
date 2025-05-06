"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SECTIONS = ["home", "education", "certifications", "projects"] as const;
type Section = (typeof SECTIONS)[number];

export default function Navbar() {
  const [active, setActive] = useState<Section>("home");

  // Scroll-spy to highlight the active section
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 120; // 120px offset for better precision
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos && el.offsetTop + el.offsetHeight > pos) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 inset-x-4 z-50">
      <div
        className="
          mx-auto w-fit px-4 md:px-8 py-2
          bg-gray-100/20 dark:bg-gray-800/20
          backdrop-blur-lg
          rounded-full
          flex items-center gap-x-4 md:gap-x-8 text-sm md:text-base
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
      </div>
    </nav>
  );
}
