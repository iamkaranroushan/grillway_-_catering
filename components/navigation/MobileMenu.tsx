"use client";

import { NAV_ITEMS } from "@/config/navigation";
import { useModalStore } from "@/feature/store/useModalStore";
import { motion, AnimatePresence, Variants } from "framer-motion";
import RouteLink from "../ui/RouteLink";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

// Parent sidebar variants (TypeScript-safe)
const menuVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 25 },
  },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
};

// Child link variants
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function MobileMenu({ open, setOpen }: Props) {
  const openModal = useModalStore((s) => s.openModal);

  const reservationItem = NAV_ITEMS.find((i) => i.modal);
  const navLinks = NAV_ITEMS.filter((i) => !i.modal);

  const handleClick = (action?: () => void) => {
    setOpen(false);
    if (action) setTimeout(() => action(), 50);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex bg-black/60 backdrop-blur-3xl">
          {/* Clickable overlay */}
          <div className="absolute inset-0" onClick={() => handleClick()} />

          {/* Sidebar menu */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative h-screen w-3/4 sm:w-2/3 md:w-1/3 bg-stone-700 text-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            transition={{ staggerChildren: 0.08, when: "beforeChildren" }} // stagger children
          >
            {/* Top: Norley's + Close */}
            <div className="flex justify-between items-center px-6 pt-4">
              <div className="flex flex-col items-center">
                <span className="text-stone-500 text-lg tracking-widest font-light">
                  GRILLWAY
                </span>
                <span className="text-stone-500 text-xs tracking-widest font-light">
                  & Catering
                </span>
              </div>
              <button
                onClick={() => handleClick()}
                className="text-[clamp(1.5rem,4vw,4rem)] text-stone-200 hover:text-white transition p-1 rounded-md"
                aria-label="Close menu">
                <RxCross2 />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex flex-col items-start gap-6 mt-8 px-6 flex-1">
              {navLinks.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="w-full"
                >
                  <RouteLink
                    href={item.href!}
                    onBeforeNavigate={() => setOpen(false)}
                    className="w-full text-left text-[clamp(1.8rem,4vw,4rem)]   rounded-xl  transition-all duration-300"
                  >
                    {item.label}
                  </RouteLink>
                </motion.div>
              ))}

              {reservationItem && (
                <motion.div variants={itemVariants} className="w-full">
                  <button
                    onClick={() => handleClick(() => openModal(reservationItem.modal!))}
                    className="w-full text-left text-[clamp(1.8rem,4vw,4rem)] p-2   rounded-xl text-stone-600 bg-stone-800 transition-all duration-300"
                  >
                    {reservationItem.label}
                  </button>
                </motion.div>
              )}
            </div>
            {/* Bottom: Reservation + Socials */}
            <div className="px-6 pb-8">
              {/* Social icons */}
              <div className="flex gap-4 mt-4 text-stone-400">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-white transition">
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-white transition">
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
