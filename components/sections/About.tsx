"use client";

import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiCode,
  HiLocationMarker,
  HiSparkles,
  HiCheckCircle,
} from "react-icons/hi";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { profile, stats, education } from "@/data/portfolio";

const highlights = [
  "Cloud Computing",
  "Web Development",
  "Cybersecurity",
  "Backend Development",
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me"
      />

      <div className="mt-16 grid gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h3 className="text-4xl font-black text-slate-900 dark:text-white">
            Building Digital Solutions with Curiosity.
          </h3>

          <p className="mt-8 text-justify text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.description}
          </p>

          <div className="mt-10 space-y-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-500/20">
                  <HiCheckCircle
                    className="text-xl text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                </div>

                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-4 dark:border-slate-800">
            {stats.map((item) => (
              <div key={item.title}>
                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
                  <AnimatedCounter end={item.number} />
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="grid items-start gap-6 sm:grid-cols-2"
        >
          {/* EDUCATION */}
          <GlassCard className="h-fit">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/20">
                <HiAcademicCap
                  className="text-3xl text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Education
                </p>

                <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  {education.institution}
                </h4>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {education.degree}
                  <br />
                  {education.period}
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {education.relevantAreas.join(" · ")}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* CURRENT FOCUS */}
          <GlassCard className="h-fit">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/20">
                <HiCode
                  className="text-3xl text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Current Focus
                </p>

                <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  Cloud & Full Stack
                </h4>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Next.js
                  <br />
                  Google Cloud
                  <br />
                  Cybersecurity
                </p>
              </div>
            </div>
          </GlassCard>

          {/* LOCATION */}
          <GlassCard className="h-fit">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl bg-emerald-100 p-3 dark:bg-emerald-500/20">
                <HiLocationMarker
                  className="text-3xl text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Location
                </p>

                <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  {profile.location}
                </h4>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Available for remote collaboration and internship
                  opportunities.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* CAREER GOAL */}
          <GlassCard className="h-fit">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/20">
                <HiSparkles
                  className="text-3xl text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Career Goal
                </p>

                <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  Apple Developer Academy
                </h4>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Building impactful digital products while continuously
                  learning modern technologies.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}