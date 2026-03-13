"use client";

import Image from "next/image";
import { useState } from "react";
import { useModalStore } from "@/feature/store/useModalStore";

export default function OrderModal() {
  const { closeModal, data } = useModalStore();

  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState<"pickup" | "delivery">("pickup");

  if (!data) return null;

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div
      className="
        fixed
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[90%]
        max-w-md
        rounded-xl
        bg-neutral-900
        p-6
        text-white
        shadow-2xl
      "
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-sm text-stone-400 hover:text-white"
      >
        ✕
      </button>

      {/* FOOD INFO */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={data.image}
          alt={data.name}
          width={80}
          height={80}
          className="rounded-lg"
        />

        <div>
          <h2 className="text-lg font-semibold">{data.name}</h2>
          <p className="text-sm text-stone-400">{data.price}</p>
        </div>
      </div>

      {/* ORDER TYPE */}
      <div className="mb-6">
        <p className="text-sm mb-2 text-stone-300">Order Type</p>

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={type === "pickup"}
              onChange={() => setType("pickup")}
            />
            Pickup
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={type === "delivery"}
              onChange={() => setType("delivery")}
            />
            Delivery
          </label>
        </div>
      </div>

      {/* QUANTITY */}
      <div className="mb-6">
        <p className="text-sm mb-2 text-stone-300">Quantity</p>

        <div className="flex items-center gap-4">
          <button
            onClick={decrease}
            className="px-3 py-1 border border-stone-600 rounded"
          >
            -
          </button>

          <span className="text-lg">{quantity}</span>

          <button
            onClick={increase}
            className="px-3 py-1 border border-stone-600 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* CTA */}
      <button
        className="
          w-full
          py-3
          rounded-lg
          bg-white
          text-black
          font-semibold
          hover:bg-stone-200
          transition
        "
      >
        Add To Cart
      </button>

      <p className="mt-3 text-xs text-center text-stone-400">
  Demo feature — ordering functionality is not active yet.
</p>
    </div>
  );
}