"use client";

import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiGooglecloud,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Cloud",
    items: [
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        badge="Skills"
        title="Technologies I Use"
        subtitle="The technologies, frameworks, cloud platforms, and tools that I use in academic projects and personal development."
      />

      <div className="mt-16 space-y-14">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1,
            }}
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {category.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                  >
                    <GlassCard className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center transition hover:-translate-y-2">
                      <Icon
                        size={42}
                        color={item.color}
                      />

                      <p className="font-semibold text-slate-700 dark:text-slate-200">
                        {item.name}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}