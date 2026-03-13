"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { useRouteLoaderStore } from "@/feature/store/routeLoaderStore";
import { usePathname } from "next/navigation";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  onBeforeNavigate?: () => void;
};

export default function RouteLink({
  href,
  children,
  className,
  onBeforeNavigate,
  ...props
}: Props) {
  const startLoading = useRouteLoaderStore((s) => s.startLoading);
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (onBeforeNavigate) onBeforeNavigate(); // trigger menu close

    const target = typeof href === "string" ? href : href.pathname || "";

    if (target === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    startLoading();
  };

  return (
    <Link href={href} className={className} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}