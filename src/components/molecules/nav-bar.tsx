import Link from "next/link";

import { ActiveLink } from "../atoms";

const links = [
  { title: "Top", to: "/" },
  { title: "New", to: "/new" },
  { title: "Best", to: "/best" },
  { title: "Ask", to: "/ask" },
  { title: "Show", to: "/show" },
  { title: "Jobs", to: "/jobs" },
];

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          className="btn btn-ghost text-xl normal-case text-primary"
          href="/"
        >
          🗞️ noticias
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ title, to }) => {return (
            <li key={title}>
              <ActiveLink href={to}>{title}</ActiveLink>
            </li>
          )})}
        </ul>
      </div>
    </div>
  );
};
