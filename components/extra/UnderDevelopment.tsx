"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UnderDevelopment() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // redirect to homepage
    }, 4000); // 4 seconds delay

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

      <p className="relative text-stone-400 text-lg sm:text-xl">
        Redirecting you back to the homepage...
      </p>
    </main>
  );
}