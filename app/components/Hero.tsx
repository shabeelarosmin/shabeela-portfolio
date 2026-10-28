"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-[#080808] px-6 pb-16 pt-28 text-white sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-yellow-600/10 blur-[130px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-amber-200 sm:text-xs">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Hi, I’m
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-2 inline-block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text pb-2 text-transparent"
            >
              Shabeela Rosmin.
            </motion.span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-5 text-xl font-medium text-neutral-200 sm:text-2xl"
          >
            Web Developer <span className="text-amber-400">&amp;</span> Creative
            Thinker
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg"
          >
            I build modern, beautiful, and user-friendly digital experiences
            with clean code and creative ideas.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-500 px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-amber-500/10 transition-shadow hover:shadow-amber-400/25 sm:text-base"
            >
              Explore My Work
              <ArrowDownRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-amber-300/50 hover:bg-amber-300/[0.06] sm:text-base"
            >
              Let’s Talk
              <ArrowUpRight
                size={18}
                className="text-amber-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>

          {/* Email link */}
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ x: 4 }}
            className="mt-8 inline-flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-amber-300"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
              <Mail size={16} className="text-amber-300" />
            </span>
            Let’s create something meaningful together
          </motion.a>
        </motion.div>

        {/* Animated visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center py-8 lg:max-w-none"
        >
          {/* Decorative rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-amber-300/20 sm:h-[370px] sm:w-[370px]"
          />
          <div className="absolute h-[250px] w-[250px] rounded-full border border-amber-300/10 sm:h-[320px] sm:w-[320px]" />

          {/* Main card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[250px] overflow-hidden rounded-[2rem] border border-amber-300/25 bg-gradient-to-br from-[#19160d] via-[#101010] to-[#080808] p-5 shadow-2xl shadow-amber-500/[0.08] sm:w-[300px]"
          >
            {/* Code decoration */}
            <div className="absolute inset-0 overflow-hidden p-5 font-mono text-xs leading-7 text-amber-300/[0.12]">
              <p>const developer = {"{"}</p>
              <p className="pl-4">creative: true,</p>
              <p className="pl-4">ideas: "limitless",</p>
              <p className="pl-4">build: "with passion"</p>
              <p>{"}"}</p>
              <p className="mt-2">{"// Turning ideas into reality"}</p>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <Code2 size={18} className="text-amber-300" />
              </div>

              <div className="flex min-h-[245px] flex-col items-center justify-center sm:min-h-[285px]">
                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-5 flex h-32 w-32 items-center justify-center rounded-full border border-amber-300/25 bg-gradient-to-br from-amber-300/15 to-yellow-600/5 text-7xl shadow-[0_0_60px_rgba(251,191,36,0.08)] sm:h-36 sm:w-36 sm:text-8xl"
                  role="img"
                  aria-label="Developer illustration"
                >
                  👩🏻‍💻
                </motion.div>

                <h3 className="text-lg font-bold tracking-wide text-white">
                  Shabeela Rosmin
                </h3>
                <p className="mt-2 text-xs tracking-[0.2em] text-amber-300">
                  CREATIVE DEVELOPER
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-neutral-400">
                <span>Design. Develop. Deliver.</span>
                <Sparkles size={16} className="text-amber-300" />
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1 top-12 rounded-xl border border-amber-300/20 bg-[#12110d]/95 px-3 py-3 shadow-xl backdrop-blur sm:left-0 sm:px-4"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles size={18} className="text-amber-300" />
              <span className="text-xs font-medium text-neutral-200 sm:text-sm">
                Creative Ideas
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-1 bottom-12 rounded-xl border border-amber-300/20 bg-[#12110d]/95 px-3 py-3 shadow-xl backdrop-blur sm:right-0 sm:px-4"
          >
            <div className="flex items-center gap-2.5">
              <Code2 size={18} className="text-amber-300" />
              <span className="text-xs font-medium text-neutral-200 sm:text-sm">
                Clean Code
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-amber-300 md:flex"
      >
        <span className="text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
