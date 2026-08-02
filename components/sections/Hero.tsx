"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiArrowDown,
} from "react-icons/hi";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

import {
  profile,
  heroStats,
} from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-50 pt-28 dark:bg-slate-950"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute right-0 top-60 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-[150px]" />

      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-20 px-6 lg:flex-row lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .8,
          }}
          className="flex-1"
        >

          {/* Badge */}

          {profile.available && (
            <Badge pulse tone="emerald">
              Available for Internship
            </Badge>
          )}

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .2,
              duration: .8,
            }}
            className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl dark:text-white"
          >

            Hi,

            <br />

            I&apos;m{" "}

            <GradientText>

              {profile.nickname}

            </GradientText>

          </motion.h1>

          {/* Role */}

          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .35,
            }}
            className="mt-6 text-2xl font-bold text-blue-600 dark:text-blue-400"
          >

            {profile.role}

          </motion.h2>

          {/* Tagline */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .45,
            }}
            className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300"
          >

            {profile.tagline}

          </motion.p>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .55,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
          >

            {profile.description}

          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .7,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Download CV
            </Button>

          </motion.div>

                    {/* Social */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="rounded-xl border border-slate-200 bg-white p-3 text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="rounded-xl border border-slate-200 bg-white p-3 text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <FaLinkedin aria-hidden="true" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="rounded-xl border border-slate-200 bg-white p-3 text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <HiOutlineMail aria-hidden="true" />
            </a>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6"
          >
            {heroStats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative rounded-full bg-gradient-to-br from-blue-600 to-blue-400 p-2 shadow-2xl">
            <div className="rounded-full bg-white p-3 dark:bg-slate-900">
              <Image
                src={profile.image}
                alt={profile.name}
                width={420}
                height={420}
                priority
                className="h-[420px] w-[420px] rounded-full object-cover lg:h-[470px] lg:w-[470px]"
              />
            </div>
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -left-5 top-16 rounded-2xl border border-white/30 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Currently
            </p>

            <p className="font-bold text-slate-900 dark:text-white">
              {profile.university}
            </p>
          </motion.div>

          <motion.div
            animate={{
              y: [8, -8, 8],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute -right-6 bottom-20 rounded-2xl border border-white/30 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Location
            </p>

            <p className="font-bold text-slate-900 dark:text-white">
              {profile.location}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll */}

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400"
      >
        <HiArrowDown size={30} aria-hidden="true" />
      </motion.a>
    </section>
  );
}