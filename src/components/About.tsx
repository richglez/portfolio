import { forwardRef } from "react";
import TypingText from "@/components/TypingText";

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
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
        className="border border-purple-900 bg-purple-600 dark:text-white no-underline flex items-center justify-center text-center gap-2 group cursor-pointer hover:shadow-2xl hover:bg-purple-500  transition duration-200 shadow-purple-900 p-px font-bold text-white  h-14 w-40  rounded-xl active:scale-95"
      >
        Download CV
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
              stroke="#ffffff"
              stroke-width="2.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
              stroke="#ffffff"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
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
