"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
        }}
        className="relative w-24 h-24 rounded-full border border-white/30 flex items-center justify-center overflow-hidden"
      >
        {/* Rotating Text */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <path
            id="circlePath"
            d="
              M 50,50
              m -40,0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0
            "
            fill="none"
          />

          <text fill="white" fontSize="7" letterSpacing="2">
            <textPath href="#circlePath">
              SCROLL DOWN • SCROLL DOWN •
              SCROLL DOWN
            </textPath>
          </text>
        </svg>

        {/* Center Image */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/image/grilled_chicken.png"
            alt="Food"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}