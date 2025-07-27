import { ActiveLink } from "./active-link";

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
    <header className="flex justify-center">
      <nav className="menu menu-horizontal">
        {links.map(({ title, to }) => {
          return (
            <li key={title}>
              <ActiveLink activeClassName="menu-active" href={to}>
                {title}
              </ActiveLink>
            </li>
          );
        })}
      </nav>
    </header>
  );
};
