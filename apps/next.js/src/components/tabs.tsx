import { ActiveLink } from "./active-link";

const links = [
  { title: "Top", to: "/" },
  { title: "New", to: "/new" },
  { title: "Best", to: "/best" },
  { title: "Ask", to: "/ask" },
  { title: "Show", to: "/show" },
  { title: "Jobs", to: "/jobs" },
];

export const Tabs = () => {
  return (
    <ul className="tabs tabs-bordered tabs-xs md:tabs-md" role="tablist">
      {links.map(({ title, to }) => {
        return (
          <ActiveLink
            activeClassName="tab-active"
            className="tab"
            href={to}
            key={title}
            role="tab"
          >
            {title}
          </ActiveLink>
        );
      })}
    </ul>
  );
};
