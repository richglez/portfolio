export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg- glass rounded-2xl px-8 py-4 bg-black/30 backdrop-blur-lg shadow-md">
        {/* Logo */}
        <a
          href={"/"}
          className="text-2xl font-bold tracking-tight gradient-text"
        >
          &lt;Rich Portfolio/&gt;
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <li>
            <a className="hover:text-purple-400 transition" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#projects">
              Projects
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="glow-button bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-semibold transition-all">
          Let&apos;s Talk
        </button>
      </nav>
    </header>
  );
}
