"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects"];
      const scrollPosition = window.scrollY + 200; // offset para activar antes

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecutar al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5 }}
          className="w-[70%] mx-auto grid grid-cols-[auto_1fr_auto] items-center glass rounded-2xl px-8 py-4 bg-black/30 backdrop-blur-lg shadow-md"
        >
          {/* LEFT — Logo */}
          <a
            href={"/"}
            className="text-2xl font-bold tracking-tight gradient-text"
          >
            &lt;Rich Portfolio/&gt;
          </a>

          {/* CENTER — Links */}
          <ul className="hidden md:flex w-full justify-center text-slate-400 font-medium">
            {["Home", "About", "Skills", "Projects"].map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`
                    transition inline-block py-2 px-5 rounded-lg
                    ${
                      isActive
                        ? "text-purple-400 bg-purple-500/20 font-bold text-white"
                        : "hover:text-purple-400 hover:bg-purple-500/10 hover:underline"
                    }
                  `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* RIGHT — Button */}
          <button className="justify-self-end glow-button bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-semibold transition-all cursor-pointer shadow-lg hover:shadow-purple-500/50">
            Let&apos;s Talk
          </button>
        </motion.nav>
    </header>
  );
}
