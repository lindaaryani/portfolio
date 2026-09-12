"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">

      <SectionTitle
        title="Certifications"
        subtitle="Learning & Training"
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {certifications.map((item, index) => (

          <motion.div
            key={`${item.title}-${item.issuer}`}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            whileHover={{
              y: -6,
            }}
            className="h-full"
          >

            <GlassCard className="group flex h-full min-h-[190px] flex-col items-center justify-center gap-4 p-7 text-center transition-all duration-300 hover:shadow-xl">

              {/* ICON */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-950/40">

                <BadgeCheck
                  size={30}
                  strokeWidth={2}
                  className="text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

              </div>

              {/* TITLE */}

              <div className="space-y-2">

                <p className="font-semibold leading-6 text-slate-900 dark:text-white">
                  {item.title}
                </p>

                {/* ISSUER + YEAR */}

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.issuer} · {item.year}
                </p>

              </div>

            </GlassCard>

          </motion.div>

        ))}

      </div>

    </SectionWrapper>
  );
}