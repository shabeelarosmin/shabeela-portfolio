"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  CalendarDays,
  Sparkles,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";

const education = [
  {
    title: "Bachelor's Degree",
    course: "Bachelor Of Computer Application",
    place: "PPTM Arts and Science College",
    year: "2023 – 2026",
    tag: "DEGREE",
    icon: GraduationCap,
    number: "01",
  },
  {
    title: "MERN Stack Development",
    course: "Full Stack Web Development",
    place: "MongoDB · Express · React · Node.js",
    year: "2026 – Present",
    tag: "CURRENTLY LEARNING",
    icon: Code2,
    number: "02",
  },
  {
    title: "Higher Secondary",
    course: "Computer Science",
    place: "A.R.NAGAR.HS School",
    year: "2021 – 2023",
    tag: "SCHOOL",
    icon: BookOpen,
    number: "03",
  },
];

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();

    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);

    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const Icon = item.icon;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      whileHover={{ y: -4 }}
      className="glass-card group relative overflow-hidden rounded-2xl border border-white/[0.08] p-4 transition-colors duration-500 hover:border-[#d8b15a]/50 sm:p-5"
    >
      {/* Moving gold light */}
      <motion.div
        initial={{ x: "-150%" }}
        whileInView={{ x: "250%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.6,
          delay: index * 0.15 + 0.3,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 z-0 w-1/3 skew-x-[-22deg] bg-gradient-to-r from-transparent via-[#f5d98b]/[0.08] to-transparent"
      />

      {/* Corner glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d8b15a]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#d8b15a]/20" />

      {/* Card content */}
      <div className="relative z-10 flex items-start gap-3 sm:gap-4">
        {/* Animated icon */}
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d8b15a]/25 bg-[#d8b15a]/[0.08] shadow-[0_0_20px_rgba(216,177,90,0.04)] transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(216,177,90,0.16)]"
        >
          <Icon size={23} strokeWidth={1.6} className="text-[#d8b15a]" />

          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#f5d98b]"
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          {/* Tag and number */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8b15a]/20 bg-[#d8b15a]/[0.05] px-2.5 py-1 text-[9px] tracking-[0.14em] text-[#d8b15a]">
              <Sparkles size={10} />
              {item.tag}
            </span>

            <span className="font-[var(--font-jetbrains)] text-xs text-neutral-600 transition-colors group-hover:text-[#d8b15a]">
              {item.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#f5d98b] sm:text-lg">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-neutral-400">{item.course}</p>

          <p className="mt-1 break-words text-xs leading-5 text-neutral-500">
            {item.place}
          </p>

          {/* Year */}
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-[#d8b15a]">
            <CalendarDays size={13} />
            <span>{item.year}</span>
          </div>

          {/* Animated underline */}
          <div className="mt-4 h-px w-full overflow-hidden bg-white/[0.06]">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "35%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.15 + 0.5,
              }}
              className="h-full bg-gradient-to-r from-[#b8892f] to-[#f5d98b]"
            />
          </div>
        </div>

        <ArrowUpRight
          size={17}
          className="absolute bottom-0 right-0 text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b15a]"
        />
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-wrap relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#d8b15a]/[0.05] blur-[90px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-[#d8b15a]/[0.06] blur-[90px]" />

      {/* Floating particles */}
      {[0, 1, 2, 3, 4].map((particle) => (
        <motion.div
          key={particle}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.15, 0.65, 0.15],
            y: [0, -18, 0],
            x: [0, particle % 2 === 0 ? 8 : -8, 0],
          }}
          transition={{
            duration: 3 + particle * 0.5,
            repeat: Infinity,
            delay: particle * 0.4,
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#f5d98b]"
          style={{
            top: `${18 + particle * 14}%`,
            right: `${8 + particle * 13}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        <div className="mb-3 flex items-center gap-2">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-flex text-[#d8b15a]"
          >
            <Sparkles size={17} />
          </motion.span>

          <p className="text-xs tracking-[0.3em] text-[#d8b15a]">MY JOURNEY</p>
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Education <span className="gold-text">& Learning</span>
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">
          Learning today, building tomorrow. Every step takes me closer to
          becoming a better developer.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-[#d8b15a]"
          />
          <CircleDot size={12} className="text-[#d8b15a]" />
          <span className="text-[10px] tracking-[0.2em] text-neutral-500">
            LEARN · GROW · CREATE
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <EducationCard key={item.number} item={item} index={index} />
        ))}
      </div>

      {/* Learning footer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mt-5 flex items-center gap-3 rounded-xl border border-[#d8b15a]/15 bg-[#d8b15a]/[0.04] p-4"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="rounded-lg bg-[#d8b15a]/10 p-2.5"
        >
          <Sparkles size={19} className="text-[#d8b15a]" />
        </motion.div>

        <div>
          <h4 className="text-sm font-semibold text-white">
            Always Learning, Always Growing
          </h4>
          <p className="mt-1 text-xs leading-5 text-neutral-500">
            Exploring new technologies and turning ideas into code.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
