"use client";

import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingText from "@/components/TypingText";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const [showPreview, setShowPreview] = useState(false);
  const CV_PATH = "/cv/cv-RICARDO-GONZALEZ-spanish.pdf";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7 },
    }),
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen scroll-mt-24 pt-20 mb-130 text-white px-75"
    >
      {/* MAIN CONTAINER */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT ================= */}
        <div className="space-y-8">
          {/* Container Title con gradiente */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mt-4" />
          </motion.div>

          {/* Contenido */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={1}
            className="space-y-4"
          >
            <p className="text-[22px] text-zinc-300 leading-relaxed">
              Hi! I&apos;m{" "}
              <span className="text-white font-semibold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">
                Ricardo Gonzalez
              </span>
              , a software developer passionate about building{" "}
              <span className="text-purple-400 font-medium">
                modern, intuitive and scalable applications
              </span>{" "}
              across desktop, mobile and web platforms.
            </p>

            <p className="text-zinc-400 text-[20px] leading-relaxed">
              I enjoy solving complex problems through clean architecture,
              readable code and thoughtful user experiences that make a real
              difference.
            </p>
          </motion.div>

          {/* Typing text con diseño mejorado */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={2}
            className="relative p-3 max-h-20 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
          >
            <div className="absolute -inset-0.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20" />
            <div className="relative text-purple-300 text-[18px] font-medium min-h-20">
              <TypingText text="Currently building personal projects and exploring new technologies to grow as a full-stack developer." />
            </div>
          </motion.div>

          {/* Buttons mejorados */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => setShowPreview(true)}
              whileHover={{ scale: 1.05 }}
              className="
                px-8 py-3.5 rounded-2xl
                bg-linear-to-r from-purple-600 to-pink-600
                hover:from-purple-500 hover:to-pink-500
                shadow-lg shadow-purple-500/50
                transition-all duration-300
                font-semibold
                flex items-center gap-3
                group cursor-pointer active:scale-85
              "
            >
              <span>View CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="white"
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z" />
              </svg>
            </motion.button>

            <motion.a
              href="https://wa.me/525512017729?text=¡Hola%20Ricardo!%20Vi%20tu%20portfolio%20y%20me%20interesó%20tu%20trabajo%20como%20desarrollador."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="
                px-8 py-3.5 rounded-2xl
                bg-white/10 backdrop-blur-sm
                border border-white/20
                hover:bg-white/20 hover:border-purple-500/50
                transition-all duration-300
                font-semibold
                flex items-center gap-3 active:scale-85
              "
            >
              <span>Get in Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* EDUCATION mejorado */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={4}
            className="pt-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Education
            </h3>

            <div className="relative pl-8 space-y-2">
              {/* Línea vertical */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-purple-500 via-pink-500 to-transparent" />

              {/* Punto decorativo */}
              <div className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full -translate-x-[3.5px]" />

              <p className="text-[20px] text-zinc-400 font-mono">2020 – 2025</p>
              <p className="text-[18px] text-zinc-300 font-medium">
                Universidad del Valle de México
              </p>
              <p className="text-purple-400 text-[18px] font-semibold">
                Computer Systems Engineering
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT CONTAINER ================= */}
        <motion.div
          whileHover={{
            scale: 1.04,
            rotate: 0.3,
          }}
          transition={{ duration: 0.4 }}
          className="relative aspect-square w-140 h-140 mx-10"
        >
          {/* BLUR IMAGE BACKGROUND */}
          <motion.img
            src="/HAU1KitXoAApgsa.jpg"
            alt="Glow background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl blur-3xl opacity-70 z-10"
          />
          {/* TOP IMAGE */}
          <motion.img
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            src={"/HAU1KitXoAApgsa.jpg"}
            className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 z-20"
          ></motion.img>
          {/* glow a la imagen sobrepuesta mas saturacion a la imgen*/}
          <div className="absolute -inset-6 bg-purple-600/20 blur-3xl rounded-full z-30" />
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setShowPreview(false)} // click outside
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()} // evita cerrar al click interno
              className="
                relative w-full max-w-4xl h-[90vh]
                bg-linear-to-br from-zinc-900 via-zinc-950 to-purple-950/60
                border border-purple-500/30
                rounded-2xl
                shadow-2xl shadow-purple-900/40
                overflow-hidden flex flex-col
              "
            >
              {/* Glow */}
              <div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-600/20 blur-[120px] pointer-events-none" />

              {/* Grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-size-[28px_28px]" />

              {/* Header */}
              <div className="relative flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>

                <h3 className="text-sm font-mono text-zinc-400 tracking-widest uppercase">
                  CV Preview
                </h3>

                <button
                  onClick={() => setShowPreview(false)}
                  className="px-6 bg-red-500 rounded-full text-zinc-400 hover:text-white transition active:scale-85 cursor-pointer "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
              </div>
              {/* Contenido */}
              <div className="relative flex-1 p-6 overflow-auto">
                <iframe
                  src={CV_PATH}
                  title="CV Preview"
                  className="w-full h-full"
                />
                {/* PDF */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
