"use client";

import Image from "next/image";
import { useState } from "react";
import { useModalStore } from "@/feature/store/useModalStore";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

export default function OpenFoodModal() {
  const { closeModal, data } = useModalStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(
    data?.weights?.[0] || null
  );

  if (!data) return null;

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-[95vw] h-[85vh] max-w-7xl bg-stone-900 grid md:grid-cols-2 overflow-hidden rounded-xl shadow-2xl text-white"
      >
        {/* TOP BAR */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <span className="text-[clamp(0.2rem,2vw,0.8rem)] uppercase tracking-widest bg-stone-800/80 text-stone-200 px-3 py-1 rounded-xl">
            {data.category}
          </span>

          <button
            onClick={closeModal}
            className="text-stone-400 hover:text-white text-xl"
          >
            <RxCross2 />
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex items-center justify-center bg-stone-700 h-full">
          <Image
            src={data.image}
            alt={data.name}
            width={700}
            height={700}
            className="w-[clamp(15rem,45vw,45rem)] h-[clamp(15rem,45vw,40rem)] object-contain"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center text-center px-[clamp(1.5rem,4vw,3rem)] py-4">
          <div className="max-w-[clamp(20rem,20vw,30rem)]">
            <h1 className="text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-tight text-stone-200">
              {data.name}
            </h1>

            <div className="w-16 h-[2px] bg-stone-500 my-3 md:my-6 mx-auto" />

            <p className="text-sm md:text-[clamp(1rem,2vw,1.3rem)] text-stone-300 leading-relaxed">
              {data.description}
            </p>
          </div>



          {/* WEIGHT SELECTOR */}
          {data.weights && (
            <div className="mt-6 md:mt-8">


              <div className="flex gap-3 justify-center flex-wrap">
                {data.weights.map((w: string) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`px-3 py-1.5 text-xs md:text-sm rounded-md transition border ${selectedWeight === w
                      ? "bg-white text-black border-white"
                      : "border-stone-600 text-stone-300 hover:border-stone-400"
                      }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PRICE */}
          <p className="mt-4 md:mt-8 text-2xl font-semibold text-white">{data.price}</p>

          {/* QUANTITY */}
          <div className="flex items-center gap-5 mt-6 md:mt-8">
            <button
              onClick={decrease}
              className="w-8 h-8 md:w-8 md:h-8 border border-stone-600 rounded-full flex items-center justify-center text-lg md:text-base"
            >
              −
            </button>

            <AnimatePresence mode="wait">
              <motion.span
                key={quantity}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-[clamp(1rem,2vw,1.3rem)] font-semibold"
              >
                {quantity}
              </motion.span>
            </AnimatePresence>

            <button
              onClick={increase}
              className="w-8 h-8 md:w-8 md:h-8 border border-stone-600 rounded-full flex items-center justify-center text-lg md:text-base"
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button className="mt-8 md:mt-10 px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
            Add To Cart
          </button>

          <p className="mt-2 md:mt-4 text-[clamp(0.6rem,2vw,0.8rem)] text-stone-500 max-w-xs text-center leading-relaxed">
            Demo interface — ordering actions are not functional in this preview
            version.
          </p>
        </div>
      </motion.div>
    </div>
  );
}