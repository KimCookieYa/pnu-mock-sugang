import { create } from "zustand";

interface Loading {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useLoading = create<Loading>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useLoading;
