"use client";

import { useState } from "react";
import { forwardRef } from "react";
import TypingText from "@/components/TypingText";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen scroll-mt-24 pt-40 mb-50 text-white px-75"
    >
      <h2 className="text-6xl font-bold mb-6">About</h2>

      <p className="text-2xl text-zinc-300 max-w-4xl mb-6">
        Hi! I&apos;m Ricardo Gonzalez, a Computer Systems Engineering graduate
        and software developer{" "}
        <b>
          specializing in building intuitive, modern, and scalable desktop,
          mobile, and web applications with high visual impact
        </b>
        .
      </p>

      <p className="text-xl text-zinc-400 max-w-4xl mb-4">
        I have over five years of experience developing software and enjoy
        working on modern web, desktop, and mobile applications. I am passionate
        about technology and solving problems through programming, system
        design, and efficient solutions.
      </p>

      <p className="text-xl text-zinc-400 max-w-4xl mb-4">
        I enjoy writing clean, readable code and turning complex problems into
        simple, intuitive, and user-friendly experiences. I learn quickly, adapt
        easily, and enjoy collaborating with multidisciplinary teams.
      </p>

      <p className="text-xl text-purple-400 min-h-20 max-w-4xl">
        <TypingText
          text="Currently, I am building personal projects—including this
          portfolio—while continuing to study new technologies and frameworks to
          grow as a frontend and backend developer."
        />
      </p>
      {/* Botón de Vista Previa */}
      <button
        onClick={() => setShowPreview(true)}
        className="group flex items-center justify-center gap-3
             rounded-2xl bg-linear-to-r from-purple-600 to-purple-700
            h-14 w-45 font-semibold text-white
             shadow-lg shadow-purple-900/40
             hover:shadow-xl hover:scale-105 hover:from-purple-500 hover:to-purple-600
             active:scale-95 transition-all duration-200 cursor-pointer"
      >
        CV Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 transition-transform group-hover:scale-110"
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      </button>
      {/* Modal de Vista Previa */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div
            className="
      relative w-full max-w-4xl h-[90vh]
      bg-linear-to-br from-zinc-900 via-zinc-950 to-purple-950/60
      border border-purple-500/30
      rounded-2xl
      shadow-2xl shadow-purple-900/40
      overflow-hidden
      animate-in fade-in zoom-in-95 duration-300
    "
          >
            {/* Glow decorativo */}
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-purple-600/20 blur-[120px] pointer-events-none" />

            {/* Grid tech pattern (sutil) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-size-[28px_28px]" />

            {/* Header estilo ventana */}
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
                className="text-zinc-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Contenido */}
            <div className="relative flex-1 p-6 overflow-auto">
              {/* aquí pones tu PDF / preview */}
            </div>
          </div>
        </div>
      )}

      <h3 className="text-3xl font-bold mt-20">Education</h3>
      <ul className="text-xl">
        <li>
          <p className="text-zinc-300">2020 - 2025</p>
          <p className="text-zinc-300">Universidad del Valle de México</p>
          <p className="text-purple-400">Computer Systems Engineering</p>
        </li>
      </ul>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
