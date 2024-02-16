import { Filter } from "@/types/filter";
import { ExcelSubjectType } from "@/types/subject";

export function filterData(
  data: ExcelSubjectType[] | undefined,
  filter: Filter
) {
  if (!data) {
    return undefined;
  }

  const { univ, subjectClass, remoteClass } = filter;
  let filteredData: ExcelSubjectType[] = [];
  for (const subject of data) {
    if (subject["univName" as any].includes(univ)) {
    }
  }
  return filteredData;
}
