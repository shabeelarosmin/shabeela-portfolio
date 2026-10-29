"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    number: "01",
    title: "Clean Code",
    detail:
      "I write clean, organized and maintainable code to build responsive websites that work smoothly across different devices.",
    tag: "QUALITY FIRST",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Modern Design",
    detail:
      "I create clean and intuitive interfaces with thoughtful layouts, elegant typography and a consistent visual experience.",
    tag: "USER FOCUSED",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Creative Ideas",
    detail:
      "I enjoy turning creative ideas into engaging digital experiences using modern web technologies and subtle animations.",
    tag: "ALWAYS CREATE",
  },
];

export default function About() {
  return (
    <section id="about" className="section-wrap relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#d8b15a]/[0.07] blur-[100px]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#b8892f]/[0.06] blur-[100px]" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-4 flex items-center gap-3 font-[var(--font-space)] text-xs tracking-[0.3em] text-[#d8b15a] sm:text-sm"
        >
          <span className="h-px w-8 bg-[#d8b15a]" />
          GET TO KNOW ME
        </motion.p>

        <h2 className="font-[var(--font-playfair)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          About <span className="gold-text">Me.</span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 85 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-[#b8892f] to-[#ffe7a0]"
        />

        {/* Extended description */}
        <div className="mt-7 max-w-4xl space-y-4 font-[var(--font-poppins)] text-sm leading-8 text-neutral-400 sm:text-base">
          <p>
            Hi, I'm{" "}
            <span className="font-medium text-[#f5d98b]">Shabeela Rosmin</span>,
            a passionate MERN Stack Developer who loves building modern,
            responsive and user-friendly web applications. I enjoy transforming
            ideas into meaningful digital experiences through clean code and
            thoughtful design.
          </p>

          <p>
            I work with{" "}
            <span className="text-neutral-200">
              MongoDB, Express.js, React and Node.js
            </span>{" "}
            to explore full-stack web development, create interactive interfaces
            and understand how complete web applications work from front end to
            back end.
          </p>

          <p>
            I'm always eager to learn new technologies, improve my
            problem-solving skills and take on new challenges. My goal is to
            build digital products that look beautiful, perform well and provide
            a great user experience.
          </p>
        </div>

        {/* Developer badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#d8b15a]/20 bg-[#d8b15a]/[0.05] px-4 py-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8b15a]/10 text-[#e4bf68]">
            <Terminal size={18} />
          </span>

          <span className="font-[var(--font-space)] text-sm text-neutral-300">
            Turning ideas into code
          </span>

          <Heart size={15} className="text-[#d8b15a]" />
        </motion.div>
      </motion.div>

      {/* Feature cards */}
      <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-3">
        {features.map(({ icon: Icon, number, title, detail, tag }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 45, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.16,
              ease: "easeOut",
            }}
            whileHover={{
              y: -9,
              rotateX: 2,
              scale: 1.015,
              transition: { duration: 0.25 },
            }}
            className="group relative overflow-hidden rounded-2xl border border-[#d8b15a]/15 bg-[#101010]/80 p-7 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-[#d8b15a]/45 hover:shadow-[0_15px_45px_#d8b15a12]"
            style={{ transformPerspective: 900 }}
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d8b15a]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#d8b15a]/15" />

            {/* Card top row */}
            <div className="relative flex items-center justify-between">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d8b15a]/20 bg-[#d8b15a]/[0.07] text-[#e4bf68] transition-colors duration-300 group-hover:bg-[#d8b15a]/15"
              >
                <Icon size={25} />
              </motion.div>

              <span className="font-[var(--font-jetbrains)] text-xs text-[#9d8248]/80">
                {number}
              </span>
            </div>

            <h3 className="relative mt-7 font-[var(--font-playfair)] text-xl font-bold text-neutral-100 transition-colors group-hover:text-[#f5d98b] sm:text-2xl">
              {title}
            </h3>

            <p className="relative mt-3 font-[var(--font-poppins)] text-sm leading-7 text-neutral-400">
              {detail}
            </p>

            {/* Bottom label */}
            <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
              <span className="font-[var(--font-space)] text-[10px] tracking-[0.18em] text-[#b89a59]">
                {tag}
              </span>

              <ArrowUpRight
                size={17}
                className="text-neutral-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f5d98b]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
