"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineClock } from "react-icons/hi";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionWrapper id="projects">

      <SectionTitle
        title="Featured Projects"
        subtitle="My Portfolio"
      />

      <div className="mt-16 space-y-20">

        {projects.map((project, index) => (

          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .6,
              delay: index * .12,
            }}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >

            {/* IMAGE */}

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: .4,
                ease: "easeOut",
              }}
              className="group/card relative"
            >

              {/* Animated glow border — fades in on hover */}
              <div className="absolute -inset-px rounded-[calc(1.5rem+1px)] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] opacity-0 blur transition-opacity duration-500 group-hover/card:opacity-70 group-hover/card:animate-[gradient-move_3s_linear_infinite]" />

              <GlassCard className="relative">

                <div className="group relative overflow-hidden rounded-2xl">

                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    width={900}
                    height={600}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-[320px] w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                </div>

              </GlassCard>

            </motion.div>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .5,
              }}
            >

              <Badge>

                Project {index + 1}

              </Badge>

              <h3 className="mt-6 text-4xl font-black text-slate-900 dark:text-white">

                {project.title}

              </h3>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

                {project.description}

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {project.tech.map((tech) => (

                  <Badge key={tech}>

                    {tech}

                  </Badge>

                ))}

              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <Button
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="min-w-[140px]"
                >
                  <FaGithub className="mr-2" aria-hidden="true" />
                  GitHub
                </Button>

                {project.demo && project.demo !== "#" ? (
                  <Button
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[140px]"
                  >
                    <HiOutlineExternalLink className="mr-2" aria-hidden="true" />
                    Live Demo
                  </Button>
                ) : (
                  <Button
                    disabled
                    title="Live demo is not deployed yet"
                    className="min-w-[140px]"
                  >
                    <HiOutlineClock className="mr-2" aria-hidden="true" />
                    Coming Soon
                  </Button>
                )}

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </SectionWrapper>
  );
}