export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6">
      <nav className="w-[95%] mx-auto grid grid-cols-[auto_1fr_auto] items-center glass rounded-2xl px-8 py-4 bg-black/30 backdrop-blur-lg shadow-md">
        {/* LEFT — Logo */}
        <a
          href={"/"}
          className="text-2xl font-bold tracking-tight gradient-text"
        >
          &lt;Rich Portfolio/&gt;
        </a>

        {/* CENTER — Links */}
        <ul className="hidden md:flex w-full justify-center text-gray-300 font-medium">
          <li>
            <a
              className="hover:text-purple-400 transition hover:underline inline-block py-2 px-5 hover:bg-purple-500/10 rounded-lg" //área clickeable más grande
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple-400 transition hover:underline inline-block py-2 px-5 hover:bg-purple-500/10 rounded-lg" //área clickeable más grande
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple-400 transition hover:underline inline-block py-2 px-5 hover:bg-purple-500/10 rounded-lg" //área clickeable más grande
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-purple-400 transition hover:underline inline-block py-2 px-5 hover:bg-purple-500/10 rounded-lg" //área clickeable más grande
              href="#projects"
            >
              Projects
            </a>
          </li>
        </ul>

        {/* RIGHT — Button */}
        <button className="justify-self-end glow-button bg-purple-600 cursor-pointer hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-semibold transition-all">
          Let&apos;s Talk
        </button>
      </nav>
    </header>
  );
}
