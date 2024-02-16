export enum SubjectProp {
  subjectName = "교과목명",
  subjectNum = "교과목번호",
  roomId = "분반",
  groupClass = "집단구분",
  subjectClass = "교과구분",
  credit = "학점",
  professor = "교수",
  department = "개설학과",
  time = "시간표요약",
  note = "비고",
}

export const subjectPropValues: string[] = Object.values(SubjectProp);

export interface SubjectType {
  subjectName: string;
  subjectNum: string;
  roomId: string;
  groupClass: string;
  subjectClass: string;
  credit: string;
  professor: string;
  department: string;
  time: string;
  note: string;
}
