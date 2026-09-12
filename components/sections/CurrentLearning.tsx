"use client";

import { motion } from "framer-motion";
import { SiApple, SiSwift } from "react-icons/si";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

import { currentLearning } from "@/data/portfolio";

export default function CurrentLearning() {
  return (
    <SectionWrapper id="learning">

      <SectionTitle
        title="Currently Learning"
        subtitle="Apple / iOS Focus"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .5,
        }}
        className="mt-16"
      >

        <GlassCard>

          <div className="flex items-start gap-4">

            <div className="flex shrink-0 items-center gap-2 rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/20">
              <SiApple
                size={24}
                className="text-slate-900 dark:invert"
                aria-hidden="true"
              />
              <SiSwift
                size={24}
                color="#F05138"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {currentLearning.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                {currentLearning.provider} · {currentLearning.period}
              </p>
            </div>

          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {currentLearning.modules.map((module) => (
              <Badge key={module}>{module}</Badge>
            ))}
          </div>

        </GlassCard>

      </motion.div>

    </SectionWrapper>
  );
}
