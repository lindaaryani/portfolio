"use client";

import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiLightBulb,
  HiSpeakerphone,
  HiCode,
} from "react-icons/hi";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

import { experiences } from "@/data/portfolio";

/** Picks a more meaningful icon per entry based on its title, without
 * requiring a new field in data/portfolio.ts. */
function iconFor(title: string) {
  if (/research/i.test(title)) return HiLightBulb;
  if (/speaking/i.test(title)) return HiSpeakerphone;
  if (/portfolio|project/i.test(title)) return HiCode;
  return HiAcademicCap;
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        title="Experience"
        subtitle="My Journey"
      />

      <div className="relative mt-16">

        {/* Timeline Line */}

        <div className="absolute left-5 top-0 h-full w-[2px] bg-slate-200 sm:left-6 dark:bg-slate-700" />

        <div className="space-y-12">

          {experiences.map((item, index) => {
            const Icon = iconFor(item.title);

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
              className="relative flex gap-5 sm:gap-8"
            >

              {/* Timeline Dot */}

              <div className="relative z-10 mt-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-lg sm:h-12 sm:w-12">

                <Icon
                  className="text-xl text-white sm:text-2xl"
                  aria-hidden="true"
                />

              </div>

              {/* Card */}

              <GlassCard className="flex-1">

                <Badge>{item.year}</Badge>

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
            );
          })}
          </div>
      </div>
    </SectionWrapper>
  );
}