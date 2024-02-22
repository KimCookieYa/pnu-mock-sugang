import { SubjectType } from "@/types/subject";
import { create } from "zustand";

interface AlertData {
  subject: SubjectType | undefined;
  message: string;
}

interface Alert {
  type: "register" | "remove" | "none" | "normal" | "duplicate";
  data: AlertData | undefined;
  setMessage: (
    type: "register" | "remove" | "none" | "normal" | "duplicate",
    data: AlertData | undefined
  ) => void;
}

const useAlert = create<Alert>((set) => ({
  type: "normal",
  data: undefined,
  setMessage: (type, data) => set({ type, data }),
}));

export default useAlert;
