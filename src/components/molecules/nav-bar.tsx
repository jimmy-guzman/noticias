import Link from "next/link";

import { ActiveLink } from "../atoms";

const links = [
  { to: "/", title: "Top" },
  { to: "/new", title: "New" },
  { to: "/best", title: "Best" },
  { to: "/ask", title: "Ask" },
  { to: "/show", title: "Show" },
  { to: "/jobs", title: "Jobs" },
];

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          href="/"
          className="btn-ghost btn text-xl normal-case text-primary"
        >
          🗞️ noticias
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ to, title }) => (
            <li key={title}>
              <ActiveLink href={to}>{title}</ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
