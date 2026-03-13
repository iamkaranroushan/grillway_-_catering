import { create } from "zustand";

interface RouteLoaderState {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useRouteLoaderStore = create<RouteLoaderState>((set) => ({
  isLoading: false,

  startLoading: () =>
    set({
      isLoading: true,
    }),

  stopLoading: () =>
    set({
      isLoading: false,
    }),
}));