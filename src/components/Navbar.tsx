"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        style={{ originX: 0.5 }} // 👈 desde el centro
        className="w-[95%] mx-auto grid grid-cols-[auto_1fr_auto] items-center glass rounded-2xl px-8 py-4 bg-black/30 backdrop-blur-lg shadow-md"
      >
        {/* LEFT — Logo */}
        <a
          href={"/"}
          className="text-2xl font-bold tracking-tight gradient-text"
        >
          &lt;Rich Portfolio/&gt;
        </a>

        {/* CENTER — Links */}
        <ul className="hidden md:flex w-full justify-center text-gray-300 font-medium">
          {["Home", "About", "Skills", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition hover:underline inline-block py-2 px-5 hover:bg-purple-500/10 rounded-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — Button */}
        <button className="justify-self-end glow-button bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-semibold transition-all cursor-pointer shadow-lg hover:shadow-purple-500/50">
          Let&apos;s Talk
        </button>
      </motion.nav>
    </header>
  );
}
