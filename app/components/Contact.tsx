"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email Me",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kerala, India",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-amber-200/10 bg-[#090909] px-5 py-24 sm:px-8 lg:px-[7%] lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-amber-500/[0.06] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[11px] font-bold tracking-[0.3em] text-amber-400">
            LET&apos;S CONNECT
          </p>

          <h2 className="font-serif text-4xl text-stone-100 sm:text-5xl">
            Get In <span className="text-amber-400">Touch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-stone-400 sm:text-base">
            Have an opportunity or an interesting idea? Let&apos;s talk and
            create something meaningful together.
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </motion.div>

        <div className="grid items-stretch gap-7 lg:grid-cols-2">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center rounded-2xl border border-amber-200/15 bg-gradient-to-br from-[#19160f] to-[#0d0d0d] p-7 sm:p-10"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-400">
              CONTACT INFORMATION
            </p>

            <h3 className="mb-4 font-serif text-2xl text-stone-100 sm:text-3xl">
              Let&apos;s start a conversation.
            </h3>

            <p className="mb-8 text-sm leading-7 text-stone-400">
              I&apos;m always interested in learning, collaborating, and
              exploring new opportunities in web development.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, title, value, href }) => {
                const content = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-400 transition-colors group-hover:bg-amber-300/15">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-stone-100">
                        {title}
                      </span>
                      <span className="mt-1 block break-words text-sm text-stone-400">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <motion.div
                    key={title}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.05] bg-black/20 p-4 transition-colors hover:border-amber-300/25"
                  >
                    {href ? (
                      <a
                        href={href}
                        className="flex min-w-0 items-center gap-4"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>

            <a
              href="mailto:your.email@example.com"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
            >
              Send me an email
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Contact call-to-action */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative flex flex-col items-start justify-center overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111111] p-7 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full border border-amber-300/10" />
            <div className="pointer-events-none absolute -right-2 -top-2 size-32 rounded-full border border-amber-300/10" />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-7 grid size-16 place-items-center rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] text-amber-400"
            >
              <Send size={28} strokeWidth={1.4} />
            </motion.div>

            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-400">
              HAVE A PROJECT IN MIND?
            </p>

            <h3 className="max-w-md font-serif text-3xl leading-snug text-stone-100 sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-amber-400">exceptional.</span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
              Whether it&apos;s a website, a creative idea, or a chance to
              collaborate, I&apos;d love to hear from you.
            </p>

            <motion.a
              href="mailto:your.email@example.com?subject=Portfolio%20Enquiry"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-amber-200"
            >
              <Mail size={18} />
              Let&apos;s Talk
              <ArrowUpRight size={17} />
            </motion.a>

            <p className="mt-6 text-xs text-stone-500">
              Looking forward to hearing from you.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
