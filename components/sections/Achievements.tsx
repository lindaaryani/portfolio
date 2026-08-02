"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  ShieldCheck,
  Cloud,
} from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import { achievements } from "@/data/portfolio";

const icons = [
  Trophy,
  Award,
  ShieldCheck,
  Medal,
  Cloud,
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">

      <SectionTitle
        title="Achievements"
        subtitle="Recognition & Certifications"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {achievements.map((item, index) => {

          const Icon = icons[index % icons.length];

          return (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * .08,
              }}
            >

              <GlassCard>

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-500/20">

                    <Icon
                      size={30}
                      className="text-blue-600 dark:text-blue-400"
                    />

                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-slate-800">
                    Achievement
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">

                  {item.description}

                </p>              
                </GlassCard>

            </motion.div>

          );

        })}

      </div>

    </SectionWrapper>
  );
}