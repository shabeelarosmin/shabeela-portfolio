"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Website",
    category: "FRONTEND DEVELOPMENT",
    description:
      "A modern shopping interface with product cards and responsive layouts.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#projects",
  },
  {
    number: "02",
    title: "Creative Landing Page",
    category: "UI / UX",
    description:
      "An elegant landing page featuring smooth animations and a premium visual identity.",
    tech: ["HTML", "Tailwind CSS", "Motion"],
    github: "https://github.com/",
    demo: "#projects",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-sm tracking-[0.25em] text-[#d8b15a]"
      >
        SELECTED WORK
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold sm:text-5xl"
      >
        Featured <span className="gold-text">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-4 max-w-xl leading-7 text-neutral-400"
      >
        A selection of projects that reflect my creativity and development
        skills.
      </motion.p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 180,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6"
    >
      {/* Gold glow on hover */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d8b15a]/10 blur-3xl"
        initial={{ opacity: 0.2 }}
        whileHover={{ opacity: 1, scale: 1.3 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 mb-7 flex items-center justify-between">
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className="gold-text text-4xl font-bold"
        >
          {project.number}
        </motion.span>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub for ${project.title}`}
          whileHover={{ scale: 1.15, rotate: 8 }}
          whileTap={{ scale: 0.92 }}
          className="rounded-full border border-[#d8b15a]/20 p-2 text-neutral-400 transition-colors hover:border-[#d8b15a]/60 hover:text-[#f5d98b]"
        >
          <ArrowUpRight size={17} />
        </motion.a>
      </div>

      <motion.p
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, x: 3 }}
        className="relative z-10 text-xs tracking-[0.15em] text-[#b8954b]"
      >
        {project.category}
      </motion.p>

      <motion.h3 className="relative z-10 mt-3 text-2xl font-semibold transition-colors duration-300 group-hover:text-[#f5d98b]">
        {project.title}
      </motion.h3>

      <p className="relative z-10 mt-3 flex-1 leading-7 text-neutral-400">
        {project.description}
      </p>

      <div className="relative z-10 my-5 flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15 + techIndex * 0.08,
            }}
            whileHover={{ y: -3, scale: 1.04 }}
            className="rounded-full border border-[#d8b15a]/20 px-3 py-1 text-xs text-[#d8c69f] transition-colors hover:border-[#d8b15a]/60"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <motion.a
        href={project.demo}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-[#f5d98b] transition-colors hover:text-white"
      >
        View Project
        <motion.span
          animate={{ x: [0, 3, 0], y: [0, -2, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </motion.a>

      {/* Animated gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.25 }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-[#d8b15a] to-transparent"
      />
    </motion.article>
  );
}
