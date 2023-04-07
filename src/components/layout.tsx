import type { ReactNode } from "react";

import { NavBar } from "./nav-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
