"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="
          w-full md:w-[70%] mx-auto
          flex md:grid md:grid-cols-[auto_1fr_auto]
          items-center
          glass rounded-2xl
          px-4 md:px-8 py-4
          bg-black/30 backdrop-blur-lg shadow-md
        "
      >
        {/* MENU HAMBURGESA */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* LEFT — Logo */}
        <a
          href={"/"}
          className="
            absolute left-1/2 -translate-x-1/2
            md:static md:translate-x-0
            text-xl md:text-2xl
            font-bold tracking-tight gradient-text
          "
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
                        ? "bg-purple-500/20 font-bold text-white"
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
        <a
          href="#letstalk"
          className="
            glow-button
            bg-purple-600 hover:bg-purple-500
            text-white
            px-4 md:px-6 py-2
            rounded-xl font-semibold
            transition-all
            shadow-lg hover:shadow-purple-500/50
            active:scale-95
          "
        >
          Let&apos;s Talk
        </a>
      </motion.nav>
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="
        fixed inset-0 z-50
        bg-black/80 backdrop-blur-xl
        flex flex-col items-center justify-center
        gap-8 text-xl
      "
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl text-white"
      >
        ✕
      </button>

      {["Home", "About", "Skills", "Projects"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="text-white font-semibold hover:text-purple-400 transition"
        >
          {item}
        </a>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
