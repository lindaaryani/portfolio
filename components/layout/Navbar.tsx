"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "About",
    "Experience",
    "Skills",
    "Achievements",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-tight"
        >
          LA
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {menu}
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Download CV
          </button>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-slate-800 dark:text-white"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:hidden">

          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {menu}
            </a>
          ))}

          <div className="p-6">
            <button className="w-full rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700">
              Download CV
            </button>
          </div>

        </div>
      )}
    </nav>
  );
}