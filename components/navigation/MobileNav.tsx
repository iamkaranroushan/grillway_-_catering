"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { PiHamburgerFill } from "react-icons/pi";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useModalStore } from "@/feature/store/useModalStore";
import { IoMenu } from "react-icons/io5";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const openModal = useModalStore((s) => s.openModal);
  return (
    <>
      {/* Minimal mobile navbar */}
      <div className="lg:hidden fixed top-0 left-0 z-50 bg-black w-full flex items-center justify-between px-4 py-4">
        {/* Left: Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="text-white text-3xl p-2 rounded-md hover:bg-stone-800 transition-all duration-300 shadow-md"
          aria-label="Open menu">
          <IoMenu />
        </button>

        {/* Right: Search + Cart */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => openModal("search")}
            className="text-white text-2xl p-2 rounded-md hover:bg-stone-800 transition-all duration-300 shadow-md"
            aria-label="Search">
            <FiSearch />
          </button>
          <button
            className="text-white text-2xl p-2 rounded-md hover:bg-stone-800 transition-all duration-300 shadow-md"
            aria-label="Cart">
            <FiShoppingCart />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
