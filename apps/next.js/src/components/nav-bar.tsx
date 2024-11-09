import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          className="btn btn-ghost text-primary text-xl normal-case"
          href="/"
        >
          🗞️ noticias
        </Link>
      </div>
    </nav>
  );
};
