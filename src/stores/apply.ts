import { ExcelSubjectType } from "@/types/subject";
import { create } from "zustand";

interface ApplySubject {
  subjectValues: ExcelSubjectType[];
  addSubjectValues: (value: ExcelSubjectType) => void;
  removeSubjectValues: (value: ExcelSubjectType) => void;
  desiredSubjectValues: ExcelSubjectType[];
  addDesiredSubjectValues: (value: ExcelSubjectType) => void;
  removeDesiredSubjectValues: (value: ExcelSubjectType) => void;
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
}));

export default useApplySubject;
