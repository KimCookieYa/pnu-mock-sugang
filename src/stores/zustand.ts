import { Filter } from "@/types/filter";
import { ExcelSubjectType } from "@/types/subject";
import { create } from "zustand";

interface FilterCondition {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  subjectValues: ExcelSubjectType[] | undefined;
  setSubjectValues: (subjectValues: ExcelSubjectType[] | undefined) => void;
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
}));

export default useFilterCondition;
