"use client";

import { motion } from "framer-motion";

import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <SectionWrapper id="contact">

      <SectionTitle
        title="Let's Work Together"
        subtitle="Contact"
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

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
            duration: .6,
          }}
        >

          <GlassCard>

            <h3 className="text-3xl font-black text-slate-900 dark:text-white">

              Have an idea?

            </h3>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

              I'm currently open to internships, freelance projects,
              collaborations, research, and exciting opportunities.

            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-100 p-3 dark:bg-blue-500/20">

                  <HiOutlineMail
                    className="text-2xl text-blue-600 dark:text-blue-400"
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500 dark:text-slate-400">

                    Email

                  </p>

                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold hover:text-blue-600"
                  >

                    {profile.email}

                  </a>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-emerald-100 p-3 dark:bg-emerald-500/20">

                  <HiOutlineLocationMarker
                    className="text-2xl text-emerald-600 dark:text-emerald-400"
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500 dark:text-slate-400">

                    Location

                  </p>

                  <p className="font-semibold">

                    {profile.location}

                  </p>

                </div>

              </div>

            </div>

          </GlassCard>

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
            duration: .6,
          }}
        >

          <GlassCard>

            <h3 className="text-3xl font-black text-slate-900 dark:text-white">

              Connect With Me

            </h3>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">

              You can also find me on GitHub and LinkedIn.

            </p>

            <div className="mt-10 flex gap-5">
                            <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <FaGithub className="mr-2" />
                  GitHub
                </Button>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </Button>
              </a>

            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-block"
            >
              <Button className="w-full">
                <HiOutlineMail className="mr-2" />
                Send Email
              </Button>
            </a>

          </GlassCard>

        </motion.div>

      </div>

    </SectionWrapper>
  );
}