import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="flex border border-gray-800 bg-gray-600">
        <header>
          <h1>Amazing-site</h1>
        </header>
        <ul className="flex">
          <li>one</li>
          <li>two</li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
