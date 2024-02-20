import { Filter } from "@/types/filter";
import { ExcelSubjectType, SubjectType } from "@/types/subject";

export function filterData(data: SubjectType[] | undefined, filter: Filter) {
  if (!data) {
    return undefined;
  }

  const { univ, subjectClass, nativeLanguageClass, searchText } = filter;
  let filteredData: SubjectType[] = data.filter((subject) => {
    if (searchText) {
      if (subject.교과목명.includes(searchText)) {
        return true;
      }
      return false;
    }

    if (!subject.대학명.includes(univ)) {
      return false;
    } else if (subject.교과구분 !== subjectClass) {
      return false;
    } else if (nativeLanguageClass === "N" && subject.원어강의 === "Y") {
      return false;
    } else {
      if (
        subjectClass === "교양선택" &&
        !subject.교양영역명.includes(filter.liveralArtsClass.toString())
      ) {
        return false;
      }
    }
    return true;
  });
  return filteredData;
}
