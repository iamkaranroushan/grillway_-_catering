"use client";

import { useState } from "react";
import { useModalStore } from "@/feature/store/useModalStore";

export default function ReservationModal() {
  const { closeModal } = useModalStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div
      className="
        fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[90%] max-w-md rounded-xl bg-neutral-900 p-6 text-white shadow-2xl
      "
    >
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-sm text-stone-400 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold mb-4">Reserve a Table</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-stone-800 p-3 text-white placeholder-stone-400"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg bg-stone-800 p-3 text-white placeholder-stone-400"
        />

        <div className="flex gap-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 rounded-lg bg-stone-800 p-3 text-white"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="flex-1 rounded-lg bg-stone-800 p-3 text-white"
          />
        </div>
      </div>

      <button
        className="
          w-full mt-6 py-3 rounded-lg bg-white text-black font-semibold
          hover:bg-stone-200 transition
        "
      >
        Reserve Now
      </button>

      <p className="mt-3 text-xs text-center text-stone-400">
        Demo feature — reservation functionality is not active yet.
      </p>
    </div>
  );
}