"use client";

import { useRouteLoader } from "@/feature/store/useRouteLoader";

export default function LoaderOverlay() {
  const isLoading = useRouteLoader((s) => s.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent" />
    </div>
  );
}