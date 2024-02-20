import { Filter } from "@/types/filter";
import { ExcelSubjectType, SubjectType } from "@/types/subject";

export function filterData(data: SubjectType[] | undefined, filter: Filter) {
  if (!data) {
    return undefined;
  }

  const { univ, subjectClass, nativeLanguageClass, searchText } = filter;
  let filteredData: SubjectType[] = data.filter((subject) => {
    if (searchText) {
      if (subject[ExcelSubjectType.subjectName as any].includes(searchText)) {
        return true;
      }
      return false;
    }

    if (!subject[ExcelSubjectType.univName as any].includes(univ)) {
      return false;
    } else if (subject[ExcelSubjectType.subjectClass as any] !== subjectClass) {
      return false;
    } else if (
      nativeLanguageClass === "N" &&
      subject[ExcelSubjectType.nativeLanguageClass as any] === "Y"
    ) {
      return false;
    } else {
      if (
        subjectClass === "교양선택" &&
        !subject[ExcelSubjectType.liveralArtsClass as any].includes(
          filter.liveralArtsClass.toString()
        )
      ) {
        return false;
      }
    }
    return true;
  });
  return filteredData;
}
