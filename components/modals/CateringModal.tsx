"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "@/feature/store/useModalStore";
import { FiCopy, FiCheck, FiX } from "react-icons/fi";
import Image from "next/image";
import MenuSelectionStep from "../catering/MenuSelection";
import ContactFormStep from "../catering/ContactFormSetup";
import CateringSuccessStep from "../catering/CateringSuccessStep";
import GuestSelectionStep from "../catering/Guests";
import OccasionStep from "../catering/OccasionStep";
export default function CateringModal() {
    const { closeModal } = useModalStore();

    const [copied, setCopied] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const phoneNumber = "+353 123 4567";
    const address = "Norley's Syrian Restaurant, Dublin, Ireland";

    const copyNumber = async () => {
        await navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [step, setStep] = useState(2);

    type CateringForm = {
        occasion: string;
        guests: number;
        menu: string;
        name: string;
        phone: string;
        email: string;
        address: string;
        menus: string[];
    };

    const [form, setForm] = useState<CateringForm>({
        occasion: "",
        guests: 50,
        menu: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        menus: []
    });
    const next = () => setStep((s) => s + 1);
    const back = () => setStep((s) => s - 1);

    return (
        <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-[95vw] max-w-5xl max-h-[80vh] overflow-y-auto bg-stone-800 text-white rounded-xl p-12" >
                {/* CLOSE */}
                <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-700 transition"
                >
                    <FiX size={22} />
                </button>
                {/* MAIN FLOW */}
                {!showContact && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* STEP 2 */}
                            {step === 2 && (
                                <OccasionStep
                                    onSelect={(occasion) => {
                                        setForm({ ...form, occasion });
                                        next();
                                    }}
                                />
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <GuestSelectionStep
                                    guests={form.guests}
                                    setGuests={(value) =>
                                        setForm({ ...form, guests: value })
                                    }
                                    onNext={next}
                                    onBack={back}
                                />
                            )}

                            {/* STEP 4 */}
                            {step === 4 && (
                                <MenuSelectionStep
                                    onSelect={(menus) => {
                                        setForm({ ...form, menus });
                                        next();
                                    }}
                                    onBack={back}
                                />
                            )}

                            {/* STEP 5 */}
                            {step === 5 && (
                                <ContactFormStep
                                    form={form}
                                    setForm={setForm}
                                    onBack={back}
                                    onSubmit={next}
                                />
                            )}

                            {/* STEP 6 */}
                            {step === 6 && (
                                <CateringSuccessStep onClose={closeModal} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}