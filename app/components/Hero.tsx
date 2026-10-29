"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const GoldScene = dynamic(() => import("./GoldScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] animate-pulse rounded-full bg-[#d8b15a]/5 sm:h-[430px]" />
  ),
});

const technologies = ["MongoDB", "Express.js", "React", "Node.js"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-5 pb-20 pt-28 text-white md:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#b8892f]/10 blur-[100px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#d8b15a]/5 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#d8b15a]/5 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 flex items-center gap-3 font-[var(--font-space)] text-xs tracking-[0.25em] text-[#d8b15a] sm:text-sm"
          >
            <span className="h-px w-9 bg-[#d8b15a]" />
            HELLO, I'M SHABEELA ROSMIN
          </motion.p>

          {/* Main heading */}
          <h1 className="font-[var(--font-playfair)] text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Creative
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="gold-text inline-block"
            >
              MERN Stack
            </motion.span>
            <br />
            <span className="text-neutral-300">
              Developer<span className="text-[#d8b15a]">.</span>
            </span>
          </h1>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-5 flex items-center gap-2 font-[var(--font-space)] text-sm text-[#d8b15a] sm:text-base"
          >
            <Code2 size={18} />
            <span>Building ideas into digital experiences.</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-5 max-w-lg font-[var(--font-poppins)] text-sm leading-7 text-neutral-400 sm:text-base"
          >
            I'm Shabeela Ros, a MERN Stack Developer passionate about building
            responsive websites and interactive web applications. I enjoy
            creating clean user interfaces and turning ideas into meaningful
            digital experiences using modern web technologies.
          </motion.p>

          {/* Technology badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="rounded-full border border-[#d8b15a]/25 bg-[#d8b15a]/5 px-3 py-1.5 font-[var(--font-space)] text-xs text-[#e7cf96]"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="gold-button inline-flex items-center gap-2"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-full border border-[#d8b15a]/40 px-6 py-3 font-[var(--font-space)] text-sm text-[#f5d98b] transition duration-300 hover:bg-[#d8b15a]/10 hover:shadow-[0_0_20px_#d8b15a15]"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="mr-1 font-[var(--font-space)] text-xs tracking-wider text-neutral-500">
              LET'S CONNECT
            </span>

            {/* GitHub */}
            <motion.a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition duration-300 hover:border-[#d8b15a] hover:text-[#f5d98b] hover:shadow-[0_0_18px_#d8b15a25]"
            >
              <FaGithub size={18} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition duration-300 hover:border-[#d8b15a] hover:text-[#f5d98b] hover:shadow-[0_0_18px_#d8b15a25]"
            >
              <FaLinkedinIn size={18} />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:your-email@example.com"
              aria-label="Email"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition duration-300 hover:border-[#d8b15a] hover:text-[#f5d98b] hover:shadow-[0_0_18px_#d8b15a25]"
            >
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT: 3D DEVELOPER SCENE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Animated glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-10 rounded-full bg-[#d8b15a]/15 blur-[70px]"
          />

          <div className="relative z-10">
            <GoldScene />
          </div>

          {/* Floating specialization card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[20%] hidden rounded-xl border border-[#d8b15a]/30 bg-[#0b0b0b]/90 px-4 py-3 shadow-lg backdrop-blur-md sm:block"
          >
            <p className="font-[var(--font-space)] text-xs text-neutral-500">
              SPECIALIZATION
            </p>
            <p className="mt-1 font-[var(--font-jetbrains)] text-sm text-[#f5d98b]">
              {"< Full Stack />"}
            </p>
          </motion.div>

          {/* Floating focus card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[14%] right-0 hidden rounded-xl border border-[#d8b15a]/30 bg-[#0b0b0b]/90 px-4 py-3 shadow-lg backdrop-blur-md sm:block"
          >
            <p className="font-[var(--font-space)] text-xs text-neutral-500">
              CURRENT FOCUS
            </p>
            <p className="mt-1 font-[var(--font-space)] text-sm text-[#f5d98b]">
              Web Development ✦
            </p>
          </motion.div>

          <p className="mt-2 text-center font-[var(--font-space)] text-xs tracking-[0.3em] text-[#9d8248]">
            DESIGN · DEVELOP · DEPLOY
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[#d8b15a]"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
