"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroIntro from "./HeroIntro";
import ScrollIndicator from "./ScrollIndicator";
import MenuCard from "./MenuCard";
import OfferBadge from "./OfferBadge"
export default function Hero() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <HeroIntro onFinish={() => setIntroDone(true)} />}

      <section className="bg-stone-900  h-screen pb-10">
        <div className="relative w-full h-full  overflow-hidden flex flex-col justify-center items-center bg-stone-900">

          {/* EST */}
          <p className="text-[clamp(0.5rem,3vw,1rem)] tracking-[0.1em] text-stone-500 z-20 mb-2 sm:mb-4">
            20% off on 4 monthly orders
          </p>

          {/* Background Typography */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={introDone ? { opacity: 0.08 } : {}}
            transition={{ duration: 1.5 }}
            className="absolute text-[clamp(5rem,20vw,28rem)] font-extrabold text-white pointer-events-none select-none">
            GRILLWAY
          </motion.h1>

          {/* Food Image Overlapping Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="relative z-10 w-[clamp(20rem,25vw,40rem)] h-[clamp(20rem,40vh,50rem)] mb-2 sm:mb-4"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/image/cooked_meat.png"
                alt="Cooked Meat"
                width={700}
                height={700}
                className="w-[90%] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-[clamp(0.8rem,3vw,1.5rem)] text-stone-400 uppercase z-20 mb-10 text-center">
            Fresh and delicious syrian BBQ
          </motion.p>

          {introDone && <ScrollIndicator />}
        </div>
      </section>
    </>
  );
}