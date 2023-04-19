import { ReactNode } from "react";
import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Meta />
      <Nav />
      <Header />
      <main className="p-3">{children}</main>
    </div>
  );
}
