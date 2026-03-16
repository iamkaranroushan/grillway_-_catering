"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouteLoaderStore } from "@/feature/store/routeLoaderStore";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const loading = useRouteLoaderStore((s) => s.isLoading);
  const stopLoading = useRouteLoaderStore((s) => s.stopLoading);

  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (!loading) return;

    document.body.style.overflow = "hidden";

    const startExit = setTimeout(() => {
      setExit(true);
    }, 2000);

    const finish = setTimeout(() => {
      document.body.style.overflow = "";
      stopLoading();
      setExit(false);
    }, 3000);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [loading, stopLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: "0%" }}
          animate={exit ? { y: "-100%" } : { y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* MAIN TITLE */}
          <motion.h1
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white text-[clamp(3rem,10vw,8rem)] font-extrabold tracking-tight"
          >
            GRILLWAY
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-stone-400 text-[clamp(1.2rem,3vw,2rem)] font-medium tracking-widest"
          >
            Catering
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}