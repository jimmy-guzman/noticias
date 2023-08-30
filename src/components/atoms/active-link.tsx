"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName?: string;
  className?: string;
};

export const ActiveLink = ({
  children,
  activeClassName = "text-accent",
  className,
  href,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(className, isActive ? activeClassName : "")}
      {...props}
    >
      {children}
    </Link>
  );
};
