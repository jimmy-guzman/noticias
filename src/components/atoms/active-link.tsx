"use client";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

import {clsx} from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  activeClassName?: string;
  className?: string;
} & LinkProps;

export const ActiveLink = ({
  activeClassName = "text-accent",
  children,
  className,
  href,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={clsx(className, isActive ? activeClassName : "")}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
