"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

import { organizations } from "@/data/portfolio";

export default function Organizations() {
  return (
    <SectionWrapper id="organizations">

      <SectionTitle
        title="Organizational & Volunteer Experience"
        subtitle="Beyond the Classroom"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {organizations.map((item, index) => (

          <motion.div
            key={`${item.role}-${item.org}`}
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
              delay: index * .08,
            }}
          >

            <GlassCard className="flex h-full flex-col">

              <div className="flex items-start justify-between gap-4">

                <div className="rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/20">
                  <Users
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                </div>

                <Badge>{item.period}</Badge>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {item.role}
              </h3>

              <p className="mt-1 font-semibold text-blue-600 dark:text-blue-400">
                {item.org}
              </p>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>

            </GlassCard>

          </motion.div>

        ))}

      </div>

    </SectionWrapper>
  );
}
