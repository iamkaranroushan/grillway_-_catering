"use client";

import { NAV_ITEMS } from "@/config/navigation";
import { useModalStore } from "@/feature/store/useModalStore";
import { motion, AnimatePresence, Variants } from "framer-motion";
import RouteLink from "../ui/RouteLink";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  side?: "left" | "right";
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function MobileMenu({
  open,
  setOpen,
  side = "left",
}: Props) {
  const openModal = useModalStore((s) => s.openModal);

  const reservationItem = NAV_ITEMS.find((i) => i.modal);
  const navLinks = NAV_ITEMS.filter((i) => !i.modal);

  const handleClick = (action?: () => void) => {
    setOpen(false);
    if (action) setTimeout(() => action(), 50);
  };

  const menuVariants: Variants = {
    hidden: { x: side === "left" ? "-100%" : "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 25 },
    },
    exit: {
      x: side === "left" ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex bg-black/40 backdrop-blur-xl"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            onClick={() => handleClick()}
          />

          {/* Sidebar */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative h-screen ${
              side === "left" ? "ml-0" : "ml-auto"
            } w-3/4 sm:w-2/3 md:w-1/3 bg-stone-700 text-white shadow-2xl flex flex-col justify-between overflow-y-auto`}
          >
            {/* Top */}
            <div className="flex justify-between items-center px-6 pt-5">
              <Logo className="opacity-35" />

              <button
                onClick={() => handleClick()}
                className="text-[clamp(1.5rem,4vw,4rem)] text-stone-200 hover:text-white"
              >
                <RxCross2 />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-8 px-6 flex-1">
              {navLinks.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <RouteLink
                    href={item.href!}
                    onBeforeNavigate={() => setOpen(false)}
                    className="text-[clamp(1.8rem,4vw,4rem)]"
                  >
                    {item.label}
                  </RouteLink>
                </motion.div>
              ))}

              {reservationItem && (
                <motion.div variants={itemVariants}>
                  <button
                    onClick={() =>
                      handleClick(() =>
                        openModal(reservationItem.modal!)
                      )
                    }
                    className="text-[clamp(1.8rem,4vw,4rem)] text-left bg-stone-800 p-2 rounded-xl"
                  >
                    {reservationItem.label}
                  </button>
                </motion.div>
              )}
            </div>

            {/* Socials */}
            <div className="px-6 pb-8">
              <div className="flex gap-4 text-stone-400">
                <a href="#" className="hover:text-white">
                  <FaInstagram size={20} />
                </a>

                <a href="#" className="hover:text-white">
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}