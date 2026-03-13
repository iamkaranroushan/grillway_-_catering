"use client";

import Image from "next/image";
import RouteLink from "../ui/RouteLink";


export default function RestaurantStory() {
  return (
    <section className="bg-black text-white py-28 px-[clamp(1.2rem,4vw,2rem)]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/image/cafeimage.jpg"
            alt="Restaurant Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div>

          <p className="text-stone-400 uppercase tracking-widest text-sm mb-3">
            Our Story
          </p>

          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-6">
            Bringing Authentic Colombian Flavors
          </h2>

          <p className="text-stone-400 leading-relaxed mb-6">
            Our kitchen is built on family recipes passed down through
            generations. From sizzling grills to handcrafted arepas and
            golden empanadas, every dish is prepared with care to bring
            the authentic taste of Colombia to your table.
          </p>

          <p className="text-stone-400 leading-relaxed mb-8">
            Whether you're here for a quick bite or a full dining
            experience, we welcome you with warm hospitality and
            unforgettable flavors.
          </p>

          <RouteLink
            href="/about"
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold"
          >
            Learn More
          </RouteLink>

        </div>

      </div>

    </section>
  );
}