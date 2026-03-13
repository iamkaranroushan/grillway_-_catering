"use client";

import { motion } from "framer-motion";

export default function HeroFoodScene() {
  return (
    <div className="relative h-[500px]">

      <motion.img
        src="/image/picada.png"
        className="absolute w-40"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </div>
  );
}