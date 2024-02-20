import { ExcelSubjectType } from "@/types/subject";
import { create } from "zustand";

interface ApplySubject {
  subjectValues: ExcelSubjectType[];
  addSubjectValues: (value: ExcelSubjectType) => void;
  removeSubjectValues: (value: ExcelSubjectType) => void;
  resetSubjectValues: () => void;
  desiredSubjectValues: ExcelSubjectType[];
  addDesiredSubjectValues: (value: ExcelSubjectType) => void;
  removeDesiredSubjectValues: (value: ExcelSubjectType) => void;
  resetDesiredSubjectValues: () => void;
}

const useApplySubject = create<ApplySubject>((set) => ({
  subjectValues: [],
  addSubjectValues: (value) =>
    set((state) => ({
      ...state,
      subjectValues: [...state.subjectValues, value],
    })),
  removeSubjectValues: (value) =>
    set((state) => ({
      ...state,
      subjectValues: state.subjectValues.filter(
        (v) => v["교과목명" as any] !== value["교과목명" as any]
      ),
    })),
  resetSubjectValues: () => set((state) => ({ ...state, subjectValues: [] })),
  desiredSubjectValues: [],
  addDesiredSubjectValues: (value) =>
    set((state) => ({
      ...state,
      desiredSubjectValues: [...state.desiredSubjectValues, value],
    })),
  removeDesiredSubjectValues: (value) =>
    set((state) => ({
      ...state,
      desiredSubjectValues: state.desiredSubjectValues.filter(
        (v) => v["교과목명" as any] !== value["교과목명" as any]
      ),
    })),
  resetDesiredSubjectValues: () =>
    set((state) => ({ ...state, desiredSubjectValues: [] })),
}));

export default useApplySubject;
