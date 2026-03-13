"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouteLoaderStore } from "@/feature/store/routeLoaderStore";

export default function RouteLoaderController() {
  const pathname = usePathname();
  const stopLoading = useRouteLoaderStore((s) => s.stopLoading);

  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  return null;
}