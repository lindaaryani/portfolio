"use client";

import { motion } from "framer-motion";
import GradientText from "./GradientText";

type Props = {
  badge?: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-black md:text-5xl">
        <GradientText>{title}</GradientText>
      </h2>

      <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}