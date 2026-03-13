import { create } from "zustand";

export type ModalType =
  | "login"
  | "order"
  | "reservation"
  | "product"
  | "gallery"
  | "custom"
  | "basic"
  | "new"
  | "catering"
  | "search"
  | null;

/* DISH TYPE FOR ORDER MODAL */
export interface Dish {
  name: string;
  price: string;
  image: string;
  description?: string;
  servedWith?: string;
  category?: string;
  weights?: string[];
}

interface ModalStore {
  isOpen: boolean;
  type: ModalType;
  data?: Dish | null;

  openModal: (type: ModalType, data?: Dish) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  data: null,

  openModal: (type, data) =>
    set({
      isOpen: true,
      type,
      data: data ?? null,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      type: null,
      data: null,
    }),
}));