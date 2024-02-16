export enum ViewSubjectProp {
  subjectName = "교과목명",
  subjectNum = "교과목코드",
  roomId = "분반",
  subjectClass = "교과구분",
  credit = "학점",
  professor = "담당교수",
  departmentName = "개설학과",
  timetable = "시간표",
  note = "비고",
}

export const subjectPropValues: string[] = Object.values(ViewSubjectProp);

export enum ExcelSubjectType {
  univName = "대학명",
  subjectName = "교과목명",
  subjectCode = "교과목코드",
  roomId = "분반",
  subjectClass = "교과구분",
  credit = "학점",
  theory = "이론",
  practice = "실습",
  maxNum = "제한인원",
  professor = "담당교수",
  departmentName = "개설학과",
  liveralArtsClass = "교양영역명",
  nativeLanguageClass = "원어강의",
  timetable = "시간표",
  note = "비고",
  schoolYear = "학년",
  remoteClass = "원격수업",
}

export type ExcelSubjectTypeProp = keyof typeof ExcelSubjectType;

export interface SubjectType {
  univName: string;
  subjectName: string;
  subjectCode: string;
  roomId: string;
  groupClass: string;
  subjectClass: string;
  credit: string;
  theory: string;
  practice: string;
  maxNum: string;
  professor: string;
  departmentName: string;
  liveralArtsClass: string;
  nativeLanguageClass: string;
  timetable: string;
  note: string;
  schoolYear: string;
  remoteClass: string;
}
