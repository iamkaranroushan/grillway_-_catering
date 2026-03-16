"use client";

import { NAV_ITEMS } from "@/config/navigation";
import Logo from "./Logo";
import NavLink from "./Navlink";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useModalStore } from "@/feature/store/useModalStore";

export default function DesktopNav() {
  const openModal = useModalStore((s) => s.openModal);
  return (
    <div className="w-full hidden lg:flex items-center justify-between
                    px-[clamp(1rem,4vw,2rem)] py-[clamp(0.3rem,5vw,2rem)]
                    text-white">
      {/* Logo */}
      <Logo />

      {/* Navigation Links */}
      <nav className="flex items-center gap-10">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} item={item} />
        ))}
      </nav>

      {/* Right Icons: Search + Cart */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => openModal("search")}
          className="text-white text-xl p-2 rounded-md hover:bg-stone-800 transition-all duration-300"
          aria-label="Search"
        >
          <FiSearch />
        </button>
        <button
          className="text-white text-xl p-2 rounded-md hover:bg-stone-800 transition-all duration-300"
          aria-label="Cart"
        >
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
}