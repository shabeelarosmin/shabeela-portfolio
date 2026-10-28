"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my skills, projects, and journey as a developer.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "#contact",
  },
  {
    number: "02",
    title: "Web Application",
    description:
      "A user-friendly web application focused on clean design, usability, and a smooth experience.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/",
    demo: "#contact",
  },
  {
    number: "03",
    title: "Creative Website",
    description:
      "A modern, responsive website featuring elegant layouts, interactive elements, and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#contact",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-amber-400/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
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
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            A selection of projects where creativity meets technology. Explore
            my work, the tools I use, and the ideas I bring to life.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-amber-300 to-yellow-600" />
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-6 transition-colors duration-300 hover:border-amber-300/40 sm:p-7"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-amber-400/0 blur-3xl transition-colors duration-500 group-hover:bg-amber-400/10"
              />

              {/* Card top */}
              <div className="relative mb-8 flex items-center justify-between">
                <span className="font-mono text-sm tracking-widest text-amber-300/80">
                  / {project.number}
                </span>

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.07] transition-colors group-hover:bg-amber-300/15"
                >
                  <FolderCode size={21} className="text-amber-300" />
                </motion.div>
              </div>

              {/* Project details */}
              <h3 className="relative text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-amber-200 sm:text-2xl">
                {project.title}
              </h3>

              <p className="relative mt-4 flex-1 text-sm leading-7 text-neutral-400">
                {project.description}
              </p>

              {/* Technology tags */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300 transition-colors group-hover:border-amber-300/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="relative mt-7 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source on GitHub`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-amber-300"
                >
                 
                  GitHub
                  <ExternalLink size={13} className="opacity-60" />
                </a>

                <a
                  href={project.demo}
                  className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
                >
                  Live Preview
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-center text-xs leading-6 text-neutral-500"
        >
          More ideas, more projects, and more possibilities ahead.
        </motion.p>
      </div>
    </section>
  );
}
