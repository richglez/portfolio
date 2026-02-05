"use client";
import TypingText from "@/components/TypingText";
import AboutSection from "@/components/About";
import SkillsSection from "../components/Skills";
import ProjectsSection from "../components/Projects";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import StaggerContainer from "@/components/StaggerContainer";
import WordReveal from "@/components/WordReveal";

function HomePage() {
  const fadeItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <main className="relative text-white px-75 pt-10 bg-mesh">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <section
          id="home"
          className="min-h-screen scroll-mt-24 grid lg:grid-cols-2 gap-70 mb-120 items-center"
        >
          {/* LEFT */}
          <StaggerContainer className="leftSide space-y-4">
            <motion.span
              variants={fadeItem}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-primary border-primary/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
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
            </motion.span>

            <motion.h1
              variants={fadeItem}
              className="flex items-baseline text-6xl md:text-8xl font-black tracking-tight leading-tight mb-1 md:mb-2"
            >My
            <motion.span className="ml-5 md:ml-8 gradient-text">Portfolio!.</motion.span>
            </motion.h1>

            <motion.p
              variants={fadeItem}
              className="text-[27px] font-bold uppercase tracking-widest text-purple-400 neon-glow animate-neonFlicker"
            >
              <WordReveal text="Computer Systems Engineer" />
            </motion.p>

            <motion.p
              variants={fadeItem}
              className="text-[24px] text-slate-400  min-h-20"
            >
              <TypingText text="Personal portfolio to showcase my projects, skills, and experience as a developer." />
            </motion.p>
            <motion.div
              variants={fadeItem}
              className="buttons flex gap-5 mt-10"
            >
              <a
                href="mailto:riichh082002@gmail.com?subject=Contacto%20desde%20tu%20Portfolio&body=Hola%20Ricardo,%0D%0A%0D%0AQuisiera%20ponerme%20en%20contacto%20contigo."
                className="bg-white border-white/20 dark:text-slate-900 no-underline flex items-center justify-center gap-2 group cursor-pointer hover:shadow-2xl transition duration-200 shadow-gray-200 font-bold text-white  h-14 w-40 rounded-xl text-center active:scale-95"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={"2.5"}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/richglez"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500 bg-black dark:text-white no-underline flex gap-2 group cursor-pointer hover:shadow-2xl transition duration-200 shadow-purple-900 font-bold text-white  h-14 w-40 items-center justify-center rounded-xl text-center active:scale-95"
              >
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
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
            </motion.div>
            <div className="socials-icons pt-6 flex gap-4.5">
              <motion.a
                variants={fadeItem}
                href="https://www.linkedin.com/in/ricardo-gonzalez-59736b2b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-purple-500 shadow-2xl shadow-purple-500 py-4 px-4 rounded-2xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-2xl"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="white"
                  className="w-4 h-4 relative z-10"
                >
                  <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z" />
                </svg>
              </motion.a>
              <motion.a
                variants={fadeItem}
                href="https://github.com/richglez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-purple-500 shadow-2xl shadow-purple-500 py-4 px-4 rounded-2xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-2xl"></span>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 scale-120 relative z-10"
                  fill="white"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </motion.a>
              <motion.a
                variants={fadeItem}
                href="https://wa.me/525512017729?text=¡Hola%20Ricardo!%20Vi%20tu%20portfolio%20y%20me%20interesó%20tu%20trabajo%20como%20desarrollador."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex border border-purple-500 shadow-2xl shadow-purple-500 py-4 px-4 rounded-2xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-2xl"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 scale-130 relative z-10"
                  fill="white"
                >
                  <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </motion.a>
            </div>
          </StaggerContainer>

          {/* RIGHT IMAGE */}
          <div className="rightSide relative w-full h-125">
            <div className="relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute inset-0 glass rounded-3xl overflow-hidden border-white/5 shadow-2xl animate-float">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-blue-500/20"></div>
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-size-[30px_30px]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                    <div className="w-full h-full relative group">
                      <div className="absolute inset-0 bg-primary blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <Image
                        src="/hero.png"
                        alt="Hero Futuristic Abstract Technology"
                        fill
                        priority
                        className="w-full h-full object-cover rounded-2xl mix-blend-screen opacity-60"
                      />
                      <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse"></div>
                      <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-pulse animation-delay: 1s"></div>
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping [animation-duration:3s]"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border-white/10">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                    </div>
                    {
                      <pre className="text-[10px] md:text-xs font-mono text-slate-400">
                        <span className="text-primary">class</span>{" "}
                        <span className="text-blue-400">Innovation</span> {"{"}
                        {"\n  "}
                        <span className="text-amber-400">constructor</span>
                        {"() {"}
                        {"\n    "}
                        <span className="text-slate-200"> this</span>.vision ={" "}
                        <span className="text-emerald-400">
                          &quot;Future-Proof&quot;
                        </span>
                        ;{"\n    "}
                        <span className="text-slate-200"> this</span>.status ={" "}
                        <span className="text-emerald-400">
                          &quot;Deploying&quot;
                        </span>
                        ;{"\n  }"}
                        {"\n}"}
                      </pre>
                    }
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-primary/10 rounded-full animate-float [animation-duration:8s]"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-primary to-transparent"></div>
        </div>
      </main>
      <AboutSection />

      <SkillsSection />

      <ProjectsSection />
    </>
  );
}

export default HomePage;
