"use client";

import { motion } from "framer-motion";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        badge="Skills"
        title="Technologies I Use"
        subtitle="The languages, frameworks, tools, and design methods I use in academic projects and real-world systems."
      />

      <div className="mt-16 space-y-14">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1,
            }}
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              {category.title}
            </h3>

            {category.items.length > 0 && (
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {category.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                    >
                      <GlassCard className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                        <Icon
                          size={42}
                          color={item.color}
                          className={
                            item.invertOnDark ? "dark:invert" : undefined
                          }
                          aria-hidden="true"
                        />

                        <p className="font-semibold text-slate-700 dark:text-slate-200">
                          {item.name}
                        </p>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {category.tags && category.tags.length > 0 && (
              <div
                className={`flex flex-wrap gap-3 ${
                  category.items.length > 0 ? "mt-5" : ""
                }`}
              >
                {category.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}