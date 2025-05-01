// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const SECTIONS = ["home", "education", "projects"] as const;
type Section = (typeof SECTIONS)[number];

export default function Navbar() {
  const [active, setActive] = useState<Section>("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // Init theme
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
    else setTheme("light");
  }, []);

  // Apply & persist theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll-spy
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 120;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) setActive(id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background-500/80 backdrop-blur-md z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-primary-500">afsalkalladi</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {SECTIONS.map((sec) => (
            <li key={sec}>
              <Link
                href={`#${sec}`}
                className={`capitalize px-3 py-1 rounded-xl transition ${
                  active === sec
                    ? "bg-accent-500 text-background-500 font-semibold"
                    : "text-white/70 hover:bg-accent-500/30"
                }`}
              >
                {sec}
              </Link>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="p-2 rounded-full bg-background-500/20 hover:bg-background-500/40 transition"
          >
            {theme === "dark" ? (
              <FiSun className="text-accent-500" size={20} />
            ) : (
              <FiMoon className="text-accent-500" size={20} />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded bg-background-500/20 hover:bg-background-500/40 transition"
          >
            {menuOpen ? (
              <FiX className="text-white" size={24} />
            ) : (
              <FiMenu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-background-500/95 backdrop-blur-sm flex flex-col items-stretch justify-center gap-4 px-6 py-10 z-40">
          {/* Close button */}
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded bg-background-500/20 hover:bg-background-500/40 transition"
          >
            <FiX className="text-white" size={24} />
          </button>

          {SECTIONS.map((sec) => (
            <div key={sec} className="w-full flex justify-center">
              <Link
                href={`#${sec}`}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg capitalize py-2 rounded-lg transition ${
                  active === sec
                    ? "text-accent-500 font-semibold"
                    : "text-white/80 hover:text-accent-500"
                }`}
              >
                {sec}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
