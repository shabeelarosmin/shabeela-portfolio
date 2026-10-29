"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const EMAIL = "your-email@example.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <section id="contact" className="section-wrap">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm tracking-[0.25em] text-[#d8b15a]"
          >
            LET&apos;S CONNECT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md leading-7 text-neutral-400"
          >
            Have a project, collaboration or opportunity in mind? I&apos;d love
            to hear from you.
          </motion.p>

          <div className="mt-8 space-y-5">
            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 6, color: "#f5d98b" }}
              className="flex items-center gap-4 text-neutral-300"
            >
              <motion.span
                whileHover={{ scale: 1.12, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="text-[#d8b15a]" size={21} />
              </motion.span>
              {EMAIL}
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 text-neutral-300"
            >
              <motion.span
                whileHover={{ scale: 1.12, rotate: 5 }}
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="glass-card space-y-5 rounded-2xl p-6 sm:p-8"
        >
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

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="gold-button flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3"
          >
            {sent ? "Open Email App" : "Send Message"}

            <motion.span
              whileHover={{ x: 4, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Send size={18} />
            </motion.span>
          </motion.button>

          <p className="text-center text-xs leading-5 text-neutral-500">
            This form opens your default email app to send your message.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
