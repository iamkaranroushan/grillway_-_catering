"use client";

import { NAV_ITEMS } from "@/config/navigation";
import { useModalStore } from "@/feature/store/useModalStore";
import { motion, AnimatePresence, Variants } from "framer-motion";
import RouteLink from "../ui/RouteLink";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";

interface Props {
    open: boolean;
    setOpen: (v: boolean) => void;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function MobileMenuDrawer({ open, setOpen }: Props) {
    const openModal = useModalStore((s) => s.openModal);
    const reservationItem = NAV_ITEMS.find((i) => i.modal);
    const navLinks = NAV_ITEMS.filter((i) => !i.modal);

    const menuVariants: Variants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 25 } },
        exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
    };

    const handleClick = (action?: () => void) => {
        setOpen(false);
        if (action) setTimeout(() => action(), 50);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div className="fixed inset-0 z-[100] flex bg-black/40 backdrop-blur-xl"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="absolute inset-0" onClick={() => handleClick()} />
                    <motion.div
                        variants={menuVariants} initial="hidden" animate="visible" exit="exit"
                        className="relative h-screen w-3/4 sm:w-2/3 md:w-1/3 bg-stone-700 text-white shadow-2xl flex flex-col justify-between overflow-y-auto"
                    >
                        <div className="flex justify-between items-center px-6 pt-4">
                            <Logo className="opacity-35" />
                            <button onClick={() => handleClick()} className="text-[clamp(1.5rem,4vw,4rem)] text-stone-200 hover:text-white">
                                <RxCross2 />
                            </button>
                        </div>

                        <div className="flex flex-col gap-1 mt-8 px-6 flex-1">
                            {navLinks.map(item => (
                                <motion.div key={item.label} variants={itemVariants}>
                                    <RouteLink href={item.href!} onBeforeNavigate={() => setOpen(false)} className="text-[clamp(1.3rem,4vw,4rem)]">
                                        {item.label}
                                    </RouteLink>
                                </motion.div>
                            ))}
                            {reservationItem && (
                                <motion.div variants={itemVariants}>
                                    <button
                                        onClick={() => handleClick(() => openModal(reservationItem.modal!))}
                                        className="text-[clamp(1.3rem,4vw,4rem)] text-stone-400 rounded-xl"
                                    >
                                        {reservationItem.label}
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        <div className=" flex justify-between px-6 pb-8">
                            <div className="">
                                <span>
                                    SOCIALS
                                </span>
                            </div>
                            <div className="flex flex-col  text-stone-400">
                                <a href="#" className="hover:text-white">INSTAGRAM</a>
                                <a href="#" className="hover:text-white">FACEBOOK</a>
                            </div>
                        </div>

                        <div className=" flex justify-between px-6 pb-8">
                            <div className="pr-[clamp(0.3rem,5vw,0.6rem)]">
                                <span>
                                    OUR SHOP
                                </span>
                            </div>
                            <div className="flex flex-col  text-right text-stone-400">
                                <p className=" leading-snug text-stone-400">
                                    817 Bedford Hwy,
                                    <br />
                                    Bedford, NS B4A 0K1,
                                    <br />
                                    Canada
                                </p>
                            </div>
                        </div>
                        <div className=" flex justify-between px-6 pb-8">
                            <div className="pr-[clamp(0.3rem,5vw,0.6rem)]">
                                <span>
                                    CONTACT
                                </span>
                            </div>
                            <div className="flex flex-col  text-right text-stone-400">
                                <p className=" leading-snug text-stone-400">
                                    +1-902-832-7666

                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}