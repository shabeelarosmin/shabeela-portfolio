"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-amber-200/10 bg-[#080808]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-[7%]"
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5">
        {/* Logo */}
        <a href="#home" className="group flex shrink-0 items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-700 font-serif text-lg font-bold text-black shadow-[0_0_22px_rgba(214,177,94,0.16)] transition-transform duration-300 group-hover:rotate-6">
            S.
          </span>

          <span className="text-sm font-bold tracking-wide text-stone-100 sm:text-base">
            SHABEELA
            <span className="text-amber-400">.DEV</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group relative py-2 text-[13px] font-medium text-stone-400 transition-colors duration-300 hover:text-amber-300"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/70 bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200 hover:bg-amber-200 hover:shadow-[0_8px_25px_rgba(214,177,94,0.18)]"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-xl border border-amber-300/20 text-amber-300 transition-colors hover:bg-amber-300/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Animated mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-amber-200/10 md:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {links.map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-stone-300 transition-colors hover:bg-amber-300/10 hover:text-amber-300"
                >
                  {label}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-200"
              >
                Hire Me <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
