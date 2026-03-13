"use client";

const reviews = [
  {
    name: "Carlos M.",
    text: "The best empanadas I've had outside Colombia. Absolutely amazing!",
  },
  {
    name: "Maria G.",
    text: "Authentic flavors and great atmosphere. Highly recommend!",
  },
  {
    name: "James L.",
    text: "The grill platter was incredible. Definitely coming back.",
  },
  {
    name: "Sofia R.",
    text: "Fresh, flavorful, and beautiful presentation.",
  },
  {
    name: "Daniel K.",
    text: "A hidden gem. Everything tasted homemade.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-stone-900 text-white py-24 overflow-hidden">

      <div className="text-center mb-12">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold">
          What Our Guests Say
        </h2>
      </div>

      <div className="relative">

        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-stone-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-stone-900 to-transparent z-10" />

        {/* scrolling container */}
        <div className="flex gap-8 animate-scroll  px-8">

          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-stone-800 rounded-xl p-6"
            >
              <p className="text-stone-300 mb-4">"{review.text}"</p>
              <p className="text-sm text-stone-400">— {review.name}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}