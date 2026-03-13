"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold">
        NORLEY'S
      </h2>

      <p className="text-neutral-600 max-w-md">
        Fresh meals crafted daily. Order online or pick up instantly.
      </p>

      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-3">
          Order Online
        </button>

        <button className="border border-black px-6 py-3">
          Pickup
        </button>
      </div>
    </motion.div>
  );
}