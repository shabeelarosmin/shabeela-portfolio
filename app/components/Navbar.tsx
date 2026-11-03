"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Home,
  User,
  GraduationCap,
  FolderKanban,
  CodeXml,
  Mail,
} from "lucide-react";

type NavbarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
};

const links = [
  { label: "Home", icon: Home },
  { label: "About", icon: User },
  { label: "Education", icon: GraduationCap },
  { label: "Skills", icon: CodeXml },
  { label: "Projects", icon: FolderKanban },
  { label: "Contact", icon: Mail },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#d8b15a]/20 bg-[#080808]/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* LOGO */}
        <motion.button
          type="button"
          onClick={() => handleNavigation("Home")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-left"
        >
          <motion.div
            whileHover={{ rotate: 12 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8b15a]/40 bg-[#d8b15a]/10 text-[#f5d98b]"
          >
            <Code2 size={21} />
          </motion.div>

          <div>
            <h2 className="font-bold tracking-[0.12em] text-white">SHABEELA</h2>
            <p className="text-[9px] tracking-[0.2em] text-neutral-500">
              MERN DEVELOPER
            </p>
          </div>
        </motion.button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          {links.map((link, index) => (
            <motion.button
              key={link.label}
              type="button"
              onClick={() => handleNavigation(link.label)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className={`group relative py-2 text-sm transition-colors ${
                activePage === link.label
                  ? "text-[#f5d98b]"
                  : "text-neutral-400 hover:text-[#f5d98b]"
              }`}
            >
              {link.label}

              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#b8892f] to-[#ffe7a0] transition-all duration-300 ${
                  activePage === link.label
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </motion.button>
          ))}

          {/* LET'S TALK */}
          <motion.button
            type="button"
            onClick={() => handleNavigation("Contact")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(216,177,90,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="gold-button ml-1 !rounded-full !px-5 !py-2.5 text-sm"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8b15a]/30 bg-[#d8b15a]/10 text-[#f5d98b] md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#d8b15a]/20 bg-[#080808] md:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 pb-6 pt-3">
              <p className="mb-3 px-2 text-[10px] font-semibold tracking-[0.3em] text-[#d8b15a]">
                NAVIGATION
              </p>

              {/* MOBILE NAVIGATION CARDS */}
              <div className="grid grid-cols-2 gap-3">
                {links.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activePage === link.label;

                  return (
                    <motion.button
                      key={link.label}
                      type="button"
                      onClick={() => handleNavigation(link.label)}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex items-center gap-3 rounded-xl border px-3 py-4 text-left text-sm transition-all duration-300 ${
                        isActive
                          ? "border-[#d8b15a]/60 bg-[#d8b15a]/15 text-[#f5d98b]"
                          : "border-[#d8b15a]/15 bg-[#d8b15a]/[0.04] text-neutral-300 hover:border-[#d8b15a]/50 hover:bg-[#d8b15a]/10"
                      }`}
                    >
                      <Icon size={18} className="shrink-0 text-[#d8b15a]" />

                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={14}
                        className="ml-auto shrink-0 text-neutral-600 group-hover:text-[#f5d98b]"
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* MOBILE LET'S TALK */}
              <motion.button
                type="button"
                onClick={() => handleNavigation("Contact")}
                whileTap={{ scale: 0.97 }}
                className="gold-button mt-5 flex w-full items-center justify-center !rounded-xl !py-3.5"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </motion.button>

              <p className="mt-5 text-center text-[10px] tracking-widest text-neutral-600">
                SHABEELA ROSMIN · MERN DEVELOPER
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
