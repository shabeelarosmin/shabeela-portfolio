"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    course: "Your Degree / Course",
    institution: "Your College Name",
    year: "Year – Year",
    detail: "Add your qualification and relevant academic details here.",
    icon: GraduationCap,
  },
  {
    course: "Higher Secondary Education",
    institution: "Your School Name",
    year: "Year – Year",
    detail: "Add your stream, subjects, and academic achievements here.",
    icon: BookOpen,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-amber-200/10 bg-[#0b0b0b] px-5 py-24 sm:px-8 lg:px-[7%] lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 size-80 rounded-full bg-amber-500/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-amber-400">
            MY ACADEMIC JOURNEY
          </p>

          <h2 className="font-serif text-4xl font-medium text-stone-100 sm:text-5xl">
            My <span className="text-amber-400">Education</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-400">
            The learning experiences and academic milestones that continue to
            shape my journey in technology.
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-amber-400/70 via-amber-400/20 to-transparent sm:left-8" />

          <div className="space-y-7">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.course}
                  variants={cardVariants}
                  whileHover={{ x: 5 }}
                  className="relative pl-[68px] sm:pl-20"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-6 z-10 grid size-12 place-items-center rounded-full border border-amber-300/40 bg-[#17140e] text-amber-400 shadow-[0_0_22px_rgba(214,177,94,0.08)] sm:left-2 sm:size-12">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Education card */}
                  <div className="group rounded-2xl border border-amber-100/10 bg-gradient-to-br from-[#151515] to-[#0e0e0e] p-6 transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_12px_40px_rgba(214,177,94,0.06)] sm:p-8">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-xs font-semibold text-amber-300">
                        <Award size={14} />
                        Academic Milestone
                      </span>

                      <span className="text-xs font-medium tracking-wide text-stone-500">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-stone-100 transition-colors group-hover:text-amber-200 sm:text-2xl">
                      {item.course}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-amber-400">
                      {item.institution}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-stone-400">
                      {item.detail}
                    </p>

                    <div className="mt-6 h-px w-10 bg-amber-400/40 transition-all duration-300 group-hover:w-20 group-hover:bg-amber-400" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs leading-6 text-stone-500">
          Replace the sample entries with your actual education details.
        </p>
      </div>
    </section>
  );
}
