"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    text: "Writing readable, organized, and maintainable code.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    text: "Turning creative ideas into meaningful digital experiences.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    text: "Exploring new technologies and improving my skills.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-amber-200/[0.08] bg-[#0b0b0b] px-5 py-24 sm:px-8 lg:px-[7%] lg:py-28"
    >
      {/* Subtle gold background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-amber-400">
            GET TO KNOW ME
          </p>

          <h2 className="font-serif text-4xl font-medium text-stone-100 sm:text-5xl">
            About <span className="text-amber-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </motion.div>

        {/* About content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Intro card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative rounded-2xl border border-amber-200/15 bg-gradient-to-br from-[#19160f] via-[#111111] to-[#0b0b0b] p-7 sm:p-9"
          >
            <span className="absolute right-7 top-5 font-serif text-6xl text-amber-400/10">
              “
            </span>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              A LITTLE INTRODUCTION
            </p>

            <h3 className="mb-5 max-w-lg font-serif text-2xl leading-snug text-stone-100 sm:text-3xl">
              Passionate about building{" "}
              <span className="text-amber-400">
                meaningful digital experiences.
              </span>
            </h3>

            <p className="text-sm leading-7 text-stone-400 sm:text-base sm:leading-8">
              I&apos;m Shabeela Rosmin, an aspiring web developer interested in
              creating responsive websites and intuitive user interfaces. I
              enjoy learning new technologies, solving problems, and bringing
              creative ideas to life through code.
            </p>

            <div className="mt-8 border-t border-amber-100/10 pt-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
              >
                Let&apos;s Connect
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group rounded-xl border border-amber-100/10 bg-[#111111] p-6 transition-colors duration-300 hover:border-amber-400/50 hover:bg-[#17140e] ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-xl border border-amber-400/20 bg-amber-400/[0.07] text-amber-400 transition-all duration-300 group-hover:border-amber-400/50 group-hover:bg-amber-400/15">
                  <Icon size={24} strokeWidth={1.6} />
                </div>

                <h3 className="mb-2 text-base font-semibold text-stone-100">
                  {title}
                </h3>

                <p className="text-sm leading-6 text-stone-400">{text}</p>

                <div className="mt-5 h-px w-8 bg-amber-400/40 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-400" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
