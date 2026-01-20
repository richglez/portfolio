"use client";
import TypingText from "@/components/TypingText";
import SkillsSection from "../components/Skills"; "@/components/Skills"

function HomePage() {
  return (
    <main className="relative text-white px-75">
      <section id="home" className="min-h-screen">
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

      <section id="about" className="min-h-screen pt-40 scroll-mt-24">
        <h2 className="text-6xl font-bold mb-6">About</h2>

        <p className="text-2xl text-zinc-300 max-w-4xl mb-6">
          Hi! I&apos;m Ricardo Gonzalez, a Computer Systems Engineering graduate
          and software developer.
        </p>

        <p className="text-xl text-zinc-400 max-w-4xl mb-4">
          I have over five years of experience developing software and enjoy
          working on modern web, desktop, and mobile applications. I am
          passionate about technology and solving problems through programming,
          system design, and efficient solutions.
        </p>

        <p className="text-xl text-zinc-400 max-w-4xl mb-4">
          I enjoy writing clean, readable code and turning complex problems into
          simple, intuitive, and user-friendly experiences. I learn quickly,
          adapt easily, and enjoy collaborating with multidisciplinary teams.
        </p>

        <p className="text-xl text-zinc-400 max-w-4xl">
          <TypingText
            text="Currently, I am building personal projects—including this
          portfolio—while continuing to study new technologies and frameworks to
          grow as a frontend developer."
          ></TypingText>
        </p>
      </section>

      <SkillsSection/>

      <section id="projects" className="min-h-screen pt-40 scroll-mt-24">
        <h2 className="text-6xl font-bold">Projects</h2>
      </section>
    </main>
  );
}

export default HomePage;
