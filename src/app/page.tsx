"use client";
import TypingText from "@/components/TypingText";
import AbooutSection from "@/components/About";
import SkillsSection from "../components/Skills";
import ProjectsSection from "../components/Projects";


function HomePage() {
  return (
    <main className="relative text-white px-75">
      <section id="home" className="min-h-screen scroll-mt-70">
        <h1 className="font-bold text-7xl mt-70 mb-8">My Portfolio!.</h1>
        <p className="text-2xl text-zinc-300">
          <TypingText text="Personal portfolio to showcase my projects, skills, and experience as a developer." />
        </p>
        <div className="buttons flex gap-5 mt-7">
          <button
            type="button"
            className=" bg-white dark:text-black no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-gray-200 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sl sm:w-52"
          >
            Get Started
          </button>
          <a
            href="https://github.com/richglez"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-500 bg-black dark:text-white no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-purple-900 p-px font-semibold text-white px-4 py-2 h-14 w-full items-center justify-center rounded-2xl text-center text-sl sm:w-52"
          >
            GitHub
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
