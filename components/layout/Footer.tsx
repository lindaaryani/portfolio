import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">

        <h2 className="text-2xl font-bold">
          Ni Kadek Linda Aryani
        </h2>

        <div className="flex gap-6 text-2xl">

          <a href={profile.github}>
            <FaGithub />
          </a>

          <a href={profile.linkedin}>
            <FaLinkedin />
          </a>

          <a href={`mailto:${profile.email}`}>
            <HiOutlineMail />
          </a>

        </div>

        <p className="text-center text-slate-500">
          © {new Date().getFullYear()} Ni Kadek Linda Aryani.
          Built with Next.js & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}