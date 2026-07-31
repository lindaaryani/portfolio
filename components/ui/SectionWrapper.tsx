"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`py-28 ${className}`}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .6,
        }}
        viewport={{
          once: true,
        }}
        className="mx-auto max-w-7xl px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}