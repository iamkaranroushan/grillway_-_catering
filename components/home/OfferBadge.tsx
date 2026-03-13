"use client";

import { motion } from "framer-motion";

interface OfferBadgeProps {
  text: string;
  hoverText: string;
}

export default function OfferBadge({ text, hoverText }: OfferBadgeProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center w-20 h-20 bg-stone-600 text-white font-bold rounded-s-full cursor-pointer shadow-lg overflow-hidden"
      whileHover={{ scale: 1.1 }}
    >
      {/* Main badge text */}
      <span className="z-10 text-center">{text}</span>

      {/* Hover text overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-stone-700 text-white text-xs font-semibold rounded-full opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {hoverText}
      </motion.div>
    </motion.div>
  );
}