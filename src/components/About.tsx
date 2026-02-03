"use client";

import {useState} from 'react';
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
      <a
        href=""
        className="group flex items-center justify-center gap-3
             rounded-2xl bg-linear-to-r from-purple-600 to-purple-700
            h-14 w-45 font-semibold text-white no-underline
             shadow-lg shadow-purple-900/40
             hover:shadow-xl hover:scale-105 hover:from-purple-500 hover:to-purple-600
             active:scale-95 transition-all duration-200"
      >
        Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          className="w-6 h-6 transition-transform group-hover:translate-y-0.5"
        >
          <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM200-160q-33 0-56.5-23.5T120-240v-120h80v120h560v-120h80v120q0 33-23.5 56.5T760-160H200Z" />
        </svg>
      </a>

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
