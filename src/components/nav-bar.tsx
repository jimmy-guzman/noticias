import Link from "next/link";

import { ActiveLink } from "./active-link";

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
          <li>
            <ActiveLink href="/" activeClassName="text-accent">
              Top
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/new" activeClassName="text-accent">
              New
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/best" activeClassName="text-accent">
              Best
            </ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
