import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white mb-20">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <h3 className="font-bold text-3xl">
          <Link href={'/'}>Rich Portfolio</Link>
        </h3>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Skills</Link>
          </li>
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
