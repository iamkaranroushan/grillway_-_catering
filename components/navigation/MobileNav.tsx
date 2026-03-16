"use client";

import { useState } from "react";
import MobileMenuDrawer from "./MobileMenuDrawer";
import CartDrawer from "../cart/CartDrawer";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useModalStore } from "@/feature/store/useModalStore";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const openModal = useModalStore((s) => s.openModal);

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 z-50 bg-black w-full flex items-center justify-between px-4 py-4">
        <button onClick={() => setMenuOpen(true)} className="text-[clamp(1.3rem,4vw,4rem)] text-[clamp(1.3rem,4vw,4rem)] text-white p-2 rounded-md hover:bg-stone-800">
          <IoMenu />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <Logo className="opacity-50" />
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => openModal("search")} className="text-[clamp(1.3rem,4vw,4rem)] text-white p-2 rounded-md hover:bg-stone-800">
            <FiSearch />
          </button>
          <button onClick={() => setCartOpen(true)} className="text-[clamp(1.3rem,4vw,4rem)] text-white p-2 rounded-md hover:bg-stone-800">
            <FiShoppingCart />
          </button>
        </div>
      </div>

      <MobileMenuDrawer open={menuOpen} setOpen={setMenuOpen} />
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}