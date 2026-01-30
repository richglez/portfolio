"use client";
import TypingText from "@/components/TypingText";
import AbooutSection from "@/components/About";
import SkillsSection from "../components/Skills";
import ProjectsSection from "../components/Projects";


function HomePage() {
  return (
    <main className="relative text-white px-75 pt-70">
      <section id="home" className="min-h-screen scroll-mt-70">
        <span
          className="inline-flex items-center gap-2
           px-4 py-2 mb-4
           rounded-full
           bg-purple-900/200
           text-purple-200
           text-sm font-medium
           backdrop-blur-md
           shadow-lg shadow-purple-500/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          Ready to Innovate
        </span>

        <h1 className="font-bold text-7xl pt-4 mb-8">My Portfolio!.</h1>
        <p className="text-2xl mb-5 text-zinc-200">Computer Systems Engineer</p>
        <p className="text-lg text-zinc-300">
          <TypingText text="Personal portfolio to showcase my projects, skills, and experience as a developer." />
        </p>
        <div className="buttons flex gap-5 mt-10">
          <button
            type="button"
            className="bg-white dark:text-black no-underline flex items-center justify-center gap-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-gray-200 p-px font-semibold text-white px-4 py-2 h-14 w-full rounded-2xl text-center text-sl sm:w-52"
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
          <a
            href="https://github.com/richglez"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 bg-black dark:text-white no-underline flex gap-2 space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-purple-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sl sm:w-52"
          >
            GitHub{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </section>

      <AbooutSection />

      <SkillsSection />

      <ProjectsSection />
    </main>
  );
}

export default HomePage;
