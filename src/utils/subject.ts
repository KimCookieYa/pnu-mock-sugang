import { SubjectType } from "@/types/subject";
import { getLocalStorage, setLocalStorage } from "./localstorage";

export function saveSubject(subject: SubjectType) {
  const strSubjects = getLocalStorage("subjects");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects);
    jsonSubjects.data.push(subject);
    setLocalStorage("subjects", JSON.stringify(jsonSubjects));
    return true;
  }
  return false;
}

export function saveSubjects(subjects: SubjectType[]) {
  setLocalStorage("subjects", JSON.stringify({ data: subjects }));
}

export function getSubjects() {
  const strSubjects = getLocalStorage("subjects");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects);
    return jsonSubjects;
  }
  return [];
}

export function saveDesiredSubject(subject: SubjectType) {
  const strSubjects = getLocalStorage("desired");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects);
    jsonSubjects.data.push(subject);
    setLocalStorage("desired", JSON.stringify(jsonSubjects));
    return true;
  }
  return false;
}

export function getDesiredSubjects() {
  const strSubjects = getLocalStorage("desired");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects) as SubjectType[];
    return jsonSubjects;
  }
  return undefined;
}

export function calCreditSum(subjects: SubjectType[]) {
  let sum = 0;
  subjects.forEach((subject) => {
    sum += Number(subject.학점);
  });
  return sum;
}

export function isDuplicate(subject: SubjectType, subjects: SubjectType[]) {
  return subjects.some(
    (s) => s.교과목명 + s.분반 === subject.교과목명 + subject.분반
  );
}
