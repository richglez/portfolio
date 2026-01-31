export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg shadow-md">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <h3 className="font-bold text-white text-3xl mx-6">
          <a href={"/"}> &lt;Rich Portfolio/&gt;</a>
        </h3>
        <ul className="flex gap-x-1 text-lg font-bold text-gray-300">
          <li>
            <a
              className="container py-2 px-4 hover:text-purple-400 hover:underline"
              href={"#home"}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="container py-2 px-4 hover:text-purple-400 hover:underline"
              href={"#about"}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="container py-2 px-4 hover:text-purple-400 hover:underline"
              href={"#skills"}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="container py-2 px-4 hover:text-purple-400 hover:underline scroll-smooth"
              href={"#projects"}
            >
              Projects
            </a>
          </li>
        </ul>
        <button className="bg-purple-500 hover:bg-opacity-90 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20">
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}
