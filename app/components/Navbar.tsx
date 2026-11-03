"use client";

import { useState, useEffect } from "react";
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
  const [active, setActive] = useState("Home");

  // Navigation function
  const handleNavClick = (name: string, href: string) => {
    setActive(name);
    setOpen(false);

    const target = document.querySelector(href);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  // Active section detection
  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const current = links.find(
              ([, href]) => href === `#${entry.target.id}`,
            );

            if (current) setActive(current[0]);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#d6b15e]/20 bg-[#080808]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("Home", "#home");
          }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6b15e]/40 bg-[#d6b15e]/10 text-[#d6b15e]">
            <Code2 size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-wider text-white">
              SHABEELA
            </h2>
            <p className="text-[9px] tracking-[3px] text-gray-500">
              MERN DEVELOPER
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(name, href);
              }}
              className={`text-sm transition-all duration-300 hover:text-[#e7c46d] ${
                active === name ? "text-[#e7c46d]" : "text-gray-400"
              }`}
            >
              {name}

              {active === name && (
                <motion.div
                  layoutId="nav-line"
                  className="mt-2 h-[2px] w-full bg-[#d6b15e]"
                />
              )}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("Contact", "#contact");
            }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c49a3a] to-[#f3d98b] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#d6b15e] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#d6b15e]/20 bg-[#080808] md:hidden"
          >
            <div className="flex flex-col gap-5 px-7 py-6">
              {links.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(name, href);
                  }}
                  className={`text-sm transition-all duration-300 hover:text-[#e7c46d] ${
                    active === name ? "text-[#e7c46d]" : "text-gray-300"
                  }`}
                >
                  {name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("Contact", "#contact");
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c49a3a] to-[#f3d98b] px-5 py-3 font-semibold text-black"
              >
                Let's Talk <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
