export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <h3 className="font-bold text-white text-3xl mx-6">
          <a href={"/"}>Rich Portfolio</a>
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
      </div>
    </nav>
  );
}
