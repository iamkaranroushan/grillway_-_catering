"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useModalStore } from "@/feature/store/useModalStore";

const parentCategory = "Grills";

const dishes = [
  {
    name: "Kofta Kabab",
    price: "$18",
    servedWith: "Fresh salad & grilled vegetables",
    image: "/image/kofta_kebab.png",
    description:
      "Skewers of grilled minced lamb seasoned with parsley, onion, garlic and Middle Eastern spices.",
    weights: ["250g", "500g", "1kg"],
  },
  {
    name: "Shish Tawoq",
    price: "$17",
    servedWith: "Garlic sauce & fresh salad",
    image: "/image/chicken_shish_tawoq.png",
    description:
      "Tender chicken breast skewers marinated in yogurt, garlic and Middle Eastern spices.",
    weights: ["250g", "500g", "1kg"],
  },
  {
    name: "Grilled Chicken",
    price: "$20",
    servedWith: "Fries & garlic sauce",
    image: "/image/grilled_chicken.png",
    description:
      "Whole chicken marinated with garlic, yogurt and mixed spices grilled over charcoal.",
    weights: ["Half", "Full"],
  },
  {
    name: "Mix Kabab",
    price: "$25",
    servedWith: "Salad & grilled vegetables",
    image: "/image/mix_kebab.png",
    description:
      "A combination of shish tawoq, kofta kabab and shish kabab grilled over charcoal.",
    weights: ["500g", "1kg"],
  },
];

export default function FeaturedMenu() {
  const { openModal } = useModalStore();

  return (
    <>
      {/* Marquee */}
      <div className="overflow-hidden bg-black p-4">
        <motion.div
          className="flex gap-10 text-xl sm:text-[clamp(2rem,5vw,3rem)] font-bold text-stone-400 uppercase whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>GRILLED ON CHARCOAL</span>
              <span className="text-stone-600">•</span>
              <span>AUTHENTIC SYRIAN BBQ</span>
              <span className="text-stone-600">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Menu */}
      <section className="bg-stone-900 text-white py-16 sm:py-24 md:py-32 px-[clamp(1rem,4vw,2rem)]">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
          {dishes.map((dish) => (
            <button
              key={dish.name}
              onClick={() =>
                openModal("product", {
                  ...dish,
                  category: parentCategory,
                })
              }
              className="group bg-stone-800/90 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg transition duration-300 hover:bg-stone-700 hover:-translate-y-2"
            >
              <Image
                src={dish.image}
                alt={dish.name}
                width={240}
                height={240}
                className="object-contain mb-4 sm:mb-6 transition duration-500 group-hover:scale-110"
              />

              <h3 className="text-xl sm:text-2xl font-semibold tracking-wide mb-2 sm:mb-3">
                {dish.name}
              </h3>

              <p className="text-sm text-stone-400 leading-relaxed text-center line-clamp-2">
                {dish.description}
              </p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}