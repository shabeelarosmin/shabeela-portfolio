"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden border-t border-amber-400/15 bg-[#080808] px-6 pb-8 pt-12 text-white sm:px-10"
    >
      {/* Subtle gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-amber-400/10 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top section */}
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 text-center md:flex-row md:text-left">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-xl font-bold text-amber-300 transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-400/20">
              S.
            </span>

            <span className="text-lg font-bold tracking-[0.15em]">
              SHABEELA
              <span className="text-amber-300">.DEV</span>
            </span>
          </motion.a>

          {/* Description */}
          <p className="max-w-sm text-sm leading-7 text-neutral-400">
            Designed and built with care by{" "}
            <span className="font-medium text-white">Shabeela Rosmin</span>
            .
            <br />
            <span className="text-neutral-500">
              Turning ideas into beautiful digital experiences.
            </span>
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/30 text-amber-300 transition-colors duration-300 hover:bg-amber-400 hover:text-black"
          >
            <ArrowUp size={20} />
          </motion.a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-xs text-neutral-500 sm:flex-row sm:text-left">
          <p>© {year} Shabeela Rosmin. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex text-amber-300"
            >
              <Heart size={13} fill="currentColor" />
            </motion.span>
            and creativity.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
