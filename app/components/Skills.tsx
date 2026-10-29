"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Layers,
  Monitor,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  { name: "HTML", level: 90, icon: Code2, category: "STRUCTURE" },
  { name: "CSS / Tailwind CSS", level: 85, icon: Palette, category: "STYLING" },
  { name: "JavaScript", level: 75, icon: Braces, category: "LANGUAGE" },
  { name: "React", level: 70, icon: Atom, category: "FRONTEND" },
  { name: "Next.js", level: 65, icon: Layers, category: "FRAMEWORK" },
  { name: "UI / UX Design", level: 70, icon: Monitor, category: "DESIGN" },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const [count, setCount] = useState(0);
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    stiffness: 45,
    damping: 18,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      setCount(Math.round(value));
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  const Icon = skill.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.25 },
      }}
      onViewportEnter={() => {
        progress.set(skill.level);
      }}
      className="glass-card group relative overflow-hidden rounded-2xl border border-white/[0.08] p-4 transition-colors duration-300 hover:border-[#d8b15a]/40 sm:p-5"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#d8b15a]/0 blur-3xl transition-all duration-500 group-hover:bg-[#d8b15a]/20" />

      {/* Moving highlight */}
      <motion.div
        initial={{ x: "-150%" }}
        whileInView={{ x: "250%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.3,
          delay: index * 0.1 + 0.2,
        }}
        className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
      />

      <div className="relative z-10">
        {/* Skill heading */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.1 }}
            transition={{ duration: 0.25 }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d8b15a]/20 bg-[#d8b15a]/[0.08] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(216,177,90,0.12)]"
          >
            <Icon size={21} className="text-[#d8b15a]" strokeWidth={1.7} />
          </motion.div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[9px] tracking-[0.18em] text-neutral-500">
              {skill.category}
            </p>
            <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-[#f5d98b] sm:text-base">
              {skill.name}
            </h3>
          </div>

          <ArrowUpRight
            size={16}
            className="text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b15a]"
          />
        </div>

        {/* Percentage */}
        <div className="mb-2 mt-5 flex items-center justify-between">
          <span className="text-[10px] tracking-wider text-neutral-500">
            PROFICIENCY
          </span>

          <span className="font-[var(--font-jetbrains)] text-sm font-medium text-[#f5d98b]">
            {count}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: index * 0.1 + 0.25,
              ease: "easeOut",
            }}
            className="relative h-full rounded-full bg-gradient-to-r from-[#8f6925] via-[#d8b15a] to-[#f5d98b] shadow-[0_0_10px_rgba(216,177,90,0.35)]"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-wrap relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-52 w-52 rounded-full bg-[#d8b15a]/[0.05] blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#d8b15a]/[0.05] blur-[90px]" />

      {/* Floating particles */}
      {[0, 1, 2, 3].map((item) => (
        <motion.div
          key={item}
          animate={{
            y: [0, -14, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + item,
            repeat: Infinity,
            delay: item * 0.5,
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#f5d98b]"
          style={{
            top: `${20 + item * 18}%`,
            right: `${10 + item * 12}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="relative z-10"
      >
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={16} className="text-[#d8b15a]" />
          <p className="text-xs tracking-[0.3em] text-[#d8b15a]">
            WHAT I WORK WITH
          </p>
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          My <span className="gold-text">Skills</span>
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-400">
          Technologies and creative tools I use to bring ideas to life and build
          engaging digital experiences.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 36 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-px bg-[#d8b15a]"
          />
          <span className="text-[10px] tracking-[0.2em] text-neutral-500">
            LEARN · BUILD · IMPROVE
          </span>
        </div>
      </motion.div>

      {/* Skill cards */}
      <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-5 flex items-center gap-3 rounded-xl border border-[#d8b15a]/15 bg-[#d8b15a]/[0.04] p-4"
      >
        <div className="rounded-lg bg-[#d8b15a]/10 p-2.5">
          <Sparkles size={19} className="text-[#d8b15a]" />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            Growing Every Day
          </h3>
          <p className="mt-1 text-xs leading-5 text-neutral-500">
            Continuously learning new technologies and improving my skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
