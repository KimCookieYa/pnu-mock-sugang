import { Filter } from "@/types/filter";
import { ExcelSubjectType, SubjectType } from "@/types/subject";
import { create } from "zustand";

interface FilterCondition {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  subjectValues: SubjectType[] | undefined;
  setSubjectValues: (subjectValues: SubjectType[] | undefined) => void;
  resetSubjectValues: () => void;
}

const useFilterCondition = create<FilterCondition>((set) => ({
  filter: {
    univ: "대학",
    subjectClass: "교양선택",
    liveralArtsClass: 1,
    nativeLanguageClass: "Y",
    searchText: undefined,
  },
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  subjectValues: [],
  setSubjectValues: (subjectValues) =>
    set((state) => ({ ...state, subjectValues })),
  resetSubjectValues: () => set((state) => ({ ...state, subjectValues: [] })),
}));

export default useFilterCondition;
