"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function CartDrawer({ open, setOpen }: Props) {
  const menuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 25 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] flex bg-black/40 backdrop-blur-xl"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0" onClick={() => setOpen(false)} />
          <motion.div
            variants={menuVariants} initial="hidden" animate="visible" exit="exit"
            className="relative h-screen w-3/4 sm:w-2/3 md:w-1/3 ml-auto bg-stone-700 text-white shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 pt-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setOpen(false)} className="text-[clamp(1.5rem,4vw,4rem)] text-stone-200 hover:text-white">
                <RxCross2 />
              </button>
            </div>

            {/* Cart content goes here */}
            <div className="flex-1 flex flex-col gap-4 mt-8 px-6">
              <p className="text-stone-400 text-center">Cart is empty.</p>
            </div>

            <div className="px-6 pb-8">
              <button className="w-full bg-stone-800 hover:bg-stone-600 text-white rounded-md py-3 font-semibold">
                Checkout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}