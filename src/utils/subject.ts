import { ExcelSubjectType } from "@/types/subject";
import { getLocalStorage, setLocalStorage } from "./localstorage";

interface LocalStorageSubject {
  data: ExcelSubjectType[];
}

export function saveSubject(subject: ExcelSubjectType) {
  const strSubjects = getLocalStorage("subjects");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects) as LocalStorageSubject;
    jsonSubjects.data.push(subject);
    setLocalStorage("subjects", JSON.stringify(jsonSubjects));
    return true;
  }
  return false;
}

export function saveSubjects(subjects: ExcelSubjectType[]) {
  setLocalStorage("subjects", JSON.stringify({ data: subjects }));
}

export function getSubjects() {
  const strSubjects = getLocalStorage("subjects");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects) as LocalStorageSubject;
    return jsonSubjects.data;
  }
  return [];
}

export function saveDesiredSubject(subject: ExcelSubjectType) {
  const strSubjects = getLocalStorage("desired");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects) as LocalStorageSubject;
    jsonSubjects.data.push(subject);
    setLocalStorage("desired", JSON.stringify(jsonSubjects));
    return true;
  }
  return false;
}

export function getDesiredSubjects() {
  const strSubjects = getLocalStorage("desired");
  if (strSubjects) {
    const jsonSubjects = JSON.parse(strSubjects) as LocalStorageSubject;
    return jsonSubjects.data;
  }
  return [];
}
