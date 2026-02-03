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
        and software developer.
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
          <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">
                Vista Previa - Curriculum Vitae
              </h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
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
