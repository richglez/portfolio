"use client";

import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TypingText from "@/components/TypingText";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const [showPreview, setShowPreview] = useState(false);
  const CV_PATH = "/cv/cv-RICARDO-GONZALEZ-spanish.pdf";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5 },
    }),
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen scroll-mt-24 pt-20 text-white px-75"
    >
      {/* container centrado */}
      <div className="">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div className="space-y-8">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold tracking-tight"
            >
              About
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              className="text-[22px] text-zinc-300 leading-relaxed"
            >
              Hi! I&apos;m{" "}
              <span className="text-white font-semibold">Ricardo Gonzalez</span>
              , a software developer focused on building{" "}
              <span className="text-purple-400">
                modern, intuitive and scalable applications
              </span>{" "}
              across desktop, mobile and web.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              className="text-zinc-400 text-[20px] leading-relaxed"
            >
              I enjoy solving complex problems through clean architecture,
              readable code and thoughtful user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={3}
              className="text-purple-400 text-[18px] font-medium min-h-10"
            >
              <TypingText text="Currently building personal projects and exploring new technologies to grow as a full-stack developer." />
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={4}
              onClick={() => setShowPreview(true)}
              className="
                px-8 py-3.5 rounded-2xl
                bg-linear-to-r from-purple-600 to-purple-800
                hover:scale-105 hover:shadow-xl
                shadow-purple-900/40 shadow-lg
                transition-all duration-300
                font-semibold cursor-pointer
                flex items-center justify-center gap-3
                group
              "
            >
              <span>CV Preview</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="white"
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z" />
              </svg>
            </motion.button>

            {/* EDUCATION */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={5}
              className="pt-12"
            >
              <h3 className="text-2xl font-semibold mb-3">Education</h3>

              <div className="border-l border-white/10 pl-5 space-y-1 text-zinc-400">
                <p className="text-[20px]">2020 – 2025</p>
                <p className="text-[18px]">Universidad del Valle de México</p>
                <p className="text-purple-400 text-[18px]">
                  Computer Systems Engineering
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="aspect-square">
              {/* glow moderno */}
              <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full" />

              <Image
                src="/HAU1KitXoAApgsa.jpg"
                alt="About me image"
                fill
                className="object-cover rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-5xl h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={CV_PATH}
                title="CV Preview"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
