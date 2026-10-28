"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Layers,
  ShieldCheck,
  GitBranch,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "HTML",
    level: "Web Structure",
    icon: Code2,
  },
  {
    name: "CSS",
    level: "Styling & Layout",
    icon: Palette,
  },
  {
    name: "JavaScript",
    level: "Programming",
    icon: Braces,
  },
  {
    name: "React",
    level: "Frontend Development",
    icon: Atom,
  },
  {
    name: "Next.js",
    level: "Web Development",
    icon: Layers,
  },
  {
    name: "TypeScript",
    level: "Type Safety",
    icon: ShieldCheck,
  },
  {
    name: "Git",
    level: "Version Control",
    icon: GitBranch,
  },
  {
    name: "Responsive Design",
    level: "UI Development",
    icon: MonitorSmartphone,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-amber-400/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2">
            <Sparkles size={14} className="text-amber-300" />
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-200">
              WHAT I WORK WITH
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            The technologies and tools I use to build modern, responsive, and
            user-friendly digital experiences.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151515] to-[#0c0c0c] p-6 transition-colors duration-300 hover:border-amber-300/40"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-400/0 blur-3xl transition-colors duration-500 group-hover:bg-amber-400/15"
                />

                <div className="relative flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.07] transition-colors duration-300 group-hover:bg-amber-300/15"
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-amber-300"
                    />
                  </motion.div>

                  <span className="text-lg text-amber-300/60 transition-colors group-hover:text-amber-300">
                    ✦
                  </span>
                </div>

                <h3 className="relative mt-6 text-lg font-semibold text-white transition-colors group-hover:text-amber-200">
                  {skill.name}
                </h3>

                <p className="relative mt-2 text-sm text-neutral-500">
                  {skill.level}
                </p>

                <div className="relative mt-5 h-px w-full overflow-hidden bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.07,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-amber-300/50 to-yellow-500"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-neutral-500"
        >
          <Sparkles size={15} className="shrink-0 text-amber-300" />
          Always learning, building, and improving.
        </motion.div>
      </div>
    </section>
  );
}
