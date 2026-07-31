"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

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
                scale: 1.03,
              }}
              transition={{
                duration: .3,
              }}
            >

              <GlassCard>

                <div className="group relative overflow-hidden rounded-2xl">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={600}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

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

              <div className="mt-10 flex flex-wrap gap-4">
                                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <FaGithub className="mr-2" />
                    GitHub
                  </Button>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <HiOutlineExternalLink className="mr-2" />
                    Live Demo
                  </Button>
                </a>

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </SectionWrapper>
  );
}