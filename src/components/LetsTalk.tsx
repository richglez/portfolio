"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import AnimatedWords from "./AnimatedWords";

function LetsTalk() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const fadeZoom: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const successVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.4 },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzdabknq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (!data.ok) {
        throw new Error("Formspree error");
      }

      setStatus("success");
      form.reset();

      // opcional: volver al form después de unos segundos
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="letstalk"
      className="min-h-screen scroll-mt-24 py-5 text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-75 pt-10"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT COLUMN ================= */}
        <motion.div
          variants={fadeZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Title */}
          <motion.h2
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-[54px] font-bold tracking-tight mt-15"
          >
            Let&apos;s Talk
            <motion.span className="ml-5 md:ml-8 bg-linear-to-r from-pink-700 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Contact to Me
            </motion.span>
          </motion.h2>

          <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mt-1" />

          {/* Subtitle */}
          <motion.div
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            className="mt-8 text-white/70 text-lg"
          >
            <AnimatedWords text="Interested in collaborating or have a project in mind? Feel free to reach out!" />
          </motion.div>

          {/* Glass Form */}
          <motion.div
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            className="
              mt-12 w-150 max-h-120
              rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              p-8
              shadow-[0_0_40px_rgba(168,85,247,0.15)] group
              hover:border-purple-500/50
              transition
            "
          >
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={fadeZoom}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300 group-hover:text-purple-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300 group-hover:text-purple-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-300 group-hover:text-purple-400">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      className="rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none resize-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  {/* Button */}
                  <motion.button
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full rounded-xl bg-purple-500 py-3 font-semibold text-black shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:text-slate-200 transition cursor-pointer"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Try again.
                    </p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="rocket-success"
                  variants={successVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative flex flex-col items-center justify-center text-center gap-4 py-12 overflow-hidden"
                >
                  {/* Rocket + Glow */}
                  <motion.div
                    className="relative text-5xl"
                    initial={{ x: 0, y: 30, opacity: 0 }}
                    animate={{
                      x: [0, 20, 120, 260],
                      y: [0, -10, -180, -360],
                      rotate: [-10, -6, -2, 6],
                      opacity: [1, 1, 1, 0],
                    }}
                    transition={{
                      duration: 1.6,
                      times: [0, 0.2, 0.7, 1],
                      ease: "easeIn",
                    }}
                  >
                    🚀
                    {/* Glow */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: [0, 0.7, 0], scale: [0.6, 1.6, 2.4] }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-24 h-24 bg-purple-500/40 blur-3xl rounded-full -z-10"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-semibold">Message sent!</h3>
                  <p className="text-white/70 max-w-sm">
                    Thanks for reaching out. I’ll get back to you very soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN ================= */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: 0.3 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-square w-140 h-140 mx-10 mt-20"
        >
          <motion.img
            src="/Gemini_Generated_Image_vhxbwxvhxbwxvhxb.png"
            alt="Glow background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl blur-2xl opacity-70 z-10"
          />
          <motion.img
            src="/Gemini_Generated_Image_vhxbwxvhxbwxvhxb.png"
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 z-20"
          />
          <div className="absolute -inset-6 bg-purple-600/20 blur-3xl rounded-full z-30" />
        </motion.div>
      </div>
    </section>
  );
}

export default LetsTalk;
