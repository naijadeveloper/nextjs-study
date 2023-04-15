import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center border border-gray-600 bg-gray-800 p-4">
      <header>
        <h1 className="border-r pr-3 text-lg">HEAVEN</h1>
      </header>
      <ul className="flex w-[200px] justify-evenly">
        <Link
          href="/"
          className="p-2 border-4 border-orange-900 hover:bg-orange-900"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="p-2 border-4 border-purple-900 hover:bg-purple-900"
        >
          About
        </Link>
      </ul>
    </nav>
  );
}
