import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName: string;
  className?: string;
};

export const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    if (isReady) {
      const { pathname: linkPathname } = new URL(
        (props.as ?? props.href) as string,
        location.href
      );

      const { pathname: activePathname } = new URL(asPath, location.href);

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};
