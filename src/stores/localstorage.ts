import { SubjectType } from "@/types/subject";
import { create } from "zustand";

interface StoredValue {
  storedValue: SubjectType[];
  setStoredValue: (storedValue: SubjectType[]) => void;
}

const useStoredValue = create<StoredValue>((set) => ({
  storedValue: [],
  setStoredValue: (storedValue: SubjectType[]) =>
    set((state) => ({ ...state, storedValue })),
}));

export default useStoredValue;
