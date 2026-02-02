"use client";

import type { LinkProps } from "next/link";
import type { Route } from "next/types";
import type { AriaRole, PropsWithChildren } from "react";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = LinkProps<Route> & {
  activeClassName?: string;
  className?: string;
  role?: AriaRole;
};

export const ActiveLink = ({
  activeClassName = "text-accent",
  children,
  className,
  href,
  role,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={clsx(className, isActive ? activeClassName : "")}
      href={href}
      role={role}
      {...props}
    >
      {children}
    </Link>
  );
};
