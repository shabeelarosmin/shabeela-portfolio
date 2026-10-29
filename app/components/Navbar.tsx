"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#d8b15a]/15 bg-[#080808]/85 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2"
        >
          <motion.div
            whileHover={{ rotate: 12 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d8b15a]/40 bg-[#d8b15a]/10 text-[#f5d98b] transition group-hover:bg-[#d8b15a]/20"
          >
            <Code2 size={20} />
          </motion.div>

          <div className="flex flex-col">
            <span className="font-[var(--font-space)] text-sm font-bold tracking-[0.12em] text-white sm:text-base">
              SHABEELA<span className="text-[#d8b15a]"></span>
            </span>

            <span className="text-[9px] tracking-[0.2em] text-neutral-500">
              MERN DEVELOPER
            </span>
          </div>
        </motion.a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map(([label, href], index) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08 }}
              whileHover={{ y: -2 }}
              className="group relative py-2 font-[var(--font-space)] text-sm text-neutral-400 transition-colors duration-300 hover:text-[#f5d98b]"
            >
              {label}

              {/* Animated golden underline */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#b8892f] to-[#ffe7a0] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

          {/* Let's Talk button */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 24px rgba(216,177,90,0.22)",
            }}
            whileTap={{ scale: 0.96 }}
            className="gold-button ml-1 !gap-2 !rounded-full !px-5 !py-2.5 font-[var(--font-space)] text-sm"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8b15a]/25 bg-[#d8b15a]/5 text-[#f5d98b] transition hover:bg-[#d8b15a]/15 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Animated mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#d8b15a]/15 bg-[#080808]/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 pb-5 pt-3">
              {links.map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-3.5 font-[var(--font-space)] text-sm text-neutral-300 transition-colors hover:text-[#f5d98b]"
                >
                  <span>{label}</span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#d8b15a]/50 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f5d98b]"
                  />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.97 }}
                className="gold-button mt-5 flex w-full justify-center !rounded-full !py-3 font-[var(--font-space)] text-sm"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
