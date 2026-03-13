"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import RouteLink from "../ui/RouteLink";

export default function MenuCard() {
  return (
    <RouteLink href="/menu" className="block">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="
        relative
        w-[clamp(12rem,30vw,30rem)]
        h-[clamp(10rem,20vw,20rem)]
        
        bg-black
        rounded-ss-3xl
        border-[10px]
        border-black
        overflow-hidden
        cursor-pointer
      ">
        {/* INNER FRAME */}
        <div className="absolute inset-[6px] rounded-2xl overflow-hidden">
          {/* Image */}
          <motion.div
            variants={{
              rest: { scale: 1, filter: "blur(0px)" },
              hover: { scale: 1.08, filter: "blur(6px)" },
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              duration: 0.45,
            }}
            className="absolute inset-0">
            <Image
              src="/image/Churasco.png"
              alt="Menu"
              fill
              className="object-contain "
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            variants={{
              rest: { opacity: 0.35 },
              hover: { opacity: 0.38 },
            }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-stone-700"
          />
        </div>

        {/* MENU BUTTON */}
        <motion.div
          variants={{
            rest: { width: 90 },
            hover: { width: 125 },
          }}
          transition={{ duration: 0.35 }}
          className="
          absolute
          top-0
          left-0
          flex
          items-center
          gap-2
          bg-black
          text-white
          text-sm
          tracking-widest
          px-5
          py-[clamp(0.8rem,2vw,1.4rem)]
          rounded-br-[clamp(1rem,3vw,1.8rem)]
          overflow-hidden
        ">
          Menu
          <motion.div
            variants={{
              rest: { opacity: 0, x: -10 },
              hover: { opacity: 1, x: 0 },
            }}>
            <FiArrowUpRight size={18} />
          </motion.div>
        </motion.div>
      </motion.div>
    </RouteLink>
  );
}
