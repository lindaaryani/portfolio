"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        title="Experience"
        subtitle="My Journey"
      />

      <div className="relative mt-16">

        {/* Timeline Line */}

        <div className="absolute left-6 top-0 h-full w-[2px] bg-slate-200 dark:bg-slate-700" />

        <div className="space-y-12">

          {experiences.map((item, index) => (

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
              className="relative flex gap-8"
            >

              {/* Timeline Dot */}

              <div className="relative z-10 mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg">

                <HiAcademicCap
                  className="text-2xl text-white"
                />

              </div>

              {/* Card */}

              <GlassCard>

                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">

                  {item.year}

                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">

                  {item.title}

                </h3>

                <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">

                  {item.company}

                </p>

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">

                  {item.description}

                </p>

              </GlassCard>

            </motion.div>

          ))}
          </div>
      </div>
    </SectionWrapper>
  );
}