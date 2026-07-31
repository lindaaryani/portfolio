"use client";

import { motion } from "framer-motion";

export default function FloatingBlob() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute -left-24 top-24 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 70, 0],
          scale: [1, .9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]"
      />
    </>
  );
}