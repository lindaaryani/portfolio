import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { HiOutlineMail, HiArrowUp } from "react-icons/hi";

import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-8 sm:flex-row sm:items-center sm:justify-between">

        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            {profile.name}
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6 text-2xl">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <FaLinkedin aria-hidden="true" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            <HiOutlineMail aria-hidden="true" />
          </a>

          <a
            href="#hero"
            aria-label="Back to top"
            className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <HiArrowUp aria-hidden="true" />
            Top
          </a>

        </div>

      </div>
    </footer>
  );
}