"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const EMAIL = "shabeelarosmine@gmail.com";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyXg2-kZJ4wLJHSBafFze8yq-flWW6cAQIPKCfN7oVZjDT31EWzPnS-d2HcNwLwmzWq3A/exec";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const data = new URLSearchParams({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    });

    setLoading(true);
    setSent(false);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      // Show submitted message
      setSent(true);

      // Clear form fields
      formElement.reset();

      // Change button back after 2 seconds
      setTimeout(() => {
        setSent(false);
      }, 2000);
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-wrap relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#d8b15a]/[0.06] blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#b8892f]/[0.06] blur-[100px]"
      />

      <div className="relative z-10 grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm tracking-[0.25em] text-[#d8b15a]"
          >
            LET&apos;S CONNECT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-tight sm:text-5xl"
          >
            Have an idea?
            <br />
            <span className="gold-text">Let&apos;s build it.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md leading-7 text-neutral-400"
          >
            Have a project, collaboration or opportunity in mind? I&apos;d love
            to hear from you.
          </motion.p>

          {/* Email and Location */}
          <div className="mt-8 space-y-5">
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 7, color: "#f5d98b" }}
              className="flex items-center gap-4 text-neutral-300"
            >
              <motion.span
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="text-[#d8b15a]" size={21} />
              </motion.span>

              {EMAIL}
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 7 }}
              className="flex items-center gap-4 text-neutral-300"
            >
              <motion.span
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="text-[#d8b15a]" size={21} />
              </motion.span>
              Kerala, India
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="glass-card space-y-5 rounded-2xl border border-[#d8b15a]/20 p-6 shadow-[0_15px_50px_#00000040] sm:p-8"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm text-neutral-300"
            >
              Your Name
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-neutral-600 focus:border-[#d8b15a]/70 focus:ring-2 focus:ring-[#d8b15a]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm text-neutral-300"
            >
              Email Address
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-neutral-600 focus:border-[#d8b15a]/70 focus:ring-2 focus:ring-[#d8b15a]/10"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm text-neutral-300"
            >
              Your Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-neutral-600 focus:border-[#d8b15a]/70 focus:ring-2 focus:ring-[#d8b15a]/10"
            />
          </div>

          {/* Animated Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{
              scale: loading ? 1 : 1.03,
              boxShadow: loading ? "none" : "0 0 25px #d8b15a40",
            }}
            whileTap={{
              scale: loading ? 1 : 0.96,
            }}
            transition={{ duration: 0.25 }}
            className="gold-button flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={loading ? "loading" : sent ? "sent" : "default"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-flex"
                    >
                      <Send size={17} />
                    </motion.span>
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Submitted
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span
                      animate={{ x: [0, 4, 0], y: [0, -2, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <Send size={18} />
                    </motion.span>
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Status Message */}
          <AnimatePresence mode="wait">
            <motion.p
              key={sent ? "success" : "default"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-center text-xs leading-5 text-neutral-500"
            >
              {sent
                ? "Your message request was sent. Please verify it in Google Sheets."
                : "Your message will be submitted through this contact form."}
            </motion.p>
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
