"use client";

import { useState } from "react";
import { useModalStore } from "@/feature/store/useModalStore";

export default function SearchModal() {
  const { closeModal } = useModalStore();
  const [query, setQuery] = useState("");

  // Example search results
  const results = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"].filter((r) =>
    r.toLowerCase().includes(query.toLowerCase())
  );

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

      <h2 className="text-xl font-semibold mb-4">Search</h2>

      <input
        type="text"
        placeholder="Search dishes or categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg bg-stone-800 p-3 text-white placeholder-stone-400 mb-4"
      />

      <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
        {results.length > 0 ? (
          results.map((item) => (
            <button
              key={item}
              className="text-left p-2 rounded hover:bg-stone-700 transition"
              onClick={() => {
                setQuery(item);
                closeModal();
              }}
            >
              {item}
            </button>
          ))
        ) : (
          <p className="text-stone-400 text-sm">No results found</p>
        )}
      </div>

      <p className="mt-3 text-xs text-center text-stone-400">
        Demo feature — search functionality is not active yet.
      </p>
    </div>
  );
}