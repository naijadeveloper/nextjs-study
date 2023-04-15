import { ReactNode } from "react";
import Nav from "./Nav";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      <Header />
      <main className="p-3">{children}</main>
    </div>
  );
}
