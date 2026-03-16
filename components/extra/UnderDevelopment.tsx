"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import RouteLink from "@/components/ui/RouteLink";

export default function UnderDevelopment() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 2500); // redirect after 2.5s

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative flex flex-col justify-center items-center min-h-screen bg-stone-900 text-white px-6 text-center overflow-hidden">
      
      {/* Subtle background branding */}
      <span className="absolute inset-0 flex justify-center items-center text-[clamp(2rem,20vw,230rem)] font-extrabold text-white opacity-5 select-none pointer-events-none">
        GrillWay
      </span>

      {/* Main message */}
      <h1 className="relative text-[clamp(2rem,8vw,5rem)] font-extrabold mb-6">
        This Page is Under Development
      </h1>

      <p className="relative text-stone-400 text-lg sm:text-xl mb-8">
        We're working on this page. Redirecting you to the homepage...
      </p>

      
    </main>
  );
}