"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Achievements",
    "Certifications",
    "Organizations",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-tight"
        >
          LA
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 xl:flex">
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
        <div className="hidden items-center gap-4 xl:flex">
          <ThemeToggle />

          <Button
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm"
          >
            Download CV
          </Button>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 xl:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="text-3xl text-slate-800 dark:text-white"
          >
            {open ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 xl:hidden">

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
            {profile.resumeAvailable ? (
              <Button
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Download CV
              </Button>
            ) : (
              <Button
                disabled
                title="CV upload coming soon"
                className="w-full"
              >
                CV Coming Soon
              </Button>
            )}
          </div>

        </div>
      )}
    </nav>
  );
}