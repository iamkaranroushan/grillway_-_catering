"use client";

import { useEffect } from "react";
import { useModalStore } from "@/feature/store/useModalStore";

import OrderModal from "./OrderModal";
import SearchModal from "./SearchModal";
import ReservationModal from "./ReservationModal";
import OpenFoodModal from "./OpenFoodModal";
import CateringModal from "./CateringModal";

const UniversalModal = () => {
  const { isOpen, type, closeModal } = useModalStore();

  /* ------------------ LOCK SCROLL ------------------ */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ------------------ ESC KEY CLOSE ------------------ */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  /* ------------------ NO MODAL ------------------ */
  if (!isOpen || !type) return null;

  /* ------------------ MODAL SWITCH ------------------ */
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80">
      <div
        onClick={closeModal}
        className="
          absolute inset-0
          bg-white/10
          backdrop-blur-xl
        "
      />

      {type === "search" && <SearchModal />}
      {type === "reservation" && <ReservationModal />}
      {type === "order" && <OrderModal />}
      {type === "product" && <OpenFoodModal />}
      {type === "catering" && <CateringModal />}
      {/* later:
        {type === "product" && <ProductModal />}
      */}
    </div>
  );
};

export default UniversalModal;
