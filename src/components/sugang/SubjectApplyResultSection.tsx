"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import useAlert from "@/stores/alert";
import { SubjectType, subjectPropValues } from "@/types/subject";
import { usePathname } from "next/navigation";
import { TCell, THead } from "../Table";

export default function SubjectApplyResultSection() {
  const pathname = usePathname();
  const { storedValue, setValue } = useLocalStorage(pathname.slice(1), []);
  const { setMessage } = useAlert();

  const onRemoveSubject = (value: SubjectType) => {
    const filteredValue = storedValue?.filter((subject) => {
      if (subject.교과목코드 + subject.분반 !== value.교과목코드 + value.분반) {
        console.log(subject);
        return true;
      } else {
        return false;
      }
    });
    setValue(filteredValue);
    setMessage("remove", {
      subject: value,
      message: `${value.교과목명}(${value.분반}분반)이 ${
        pathname === "/register" ? "수강신청" : "희망과목담기"
      }에서 제거되었습니다`,
    });
  };

  return (
    <article className="relative">
      <div className="border-2 border-black w-[calc(100%)] h-38 absolute top-0 z-20" />
      <div className="max-h-500 overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-200 w-full sticky top-0">
            <tr className="">
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                NO
              </th>
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                제거
              </th>
              {subjectPropValues.map((prop, index) => (
                <THead key={index} value={prop} />
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            <tr />
            {storedValue ? (
              storedValue.map((subject, vindex) => (
                <tr key={vindex}>
                  <TCell value={vindex.toString()} />
                  <td className="border border-slate-300 max-w-200 text-xs py-0 text-center mx-auto px-2">
                    <button
                      className="border-red-600 border text-red-600 bg-white text-sm m-6 px-8 py-4 rounded-md text-nowrap"
                      onClick={() => onRemoveSubject(subject)}
                    >
                      {pathname === "/register" ? "제거하기" : "놓기"}
                    </button>
                  </td>
                  {subjectPropValues.map((prop, index) => (
                    <TCell
                      key={index}
                      value={subject[prop as keyof SubjectType]}
                    />
                  ))}
                </tr>
              ))
            ) : (
              <tr className="h-40 text-center">
                <td colSpan={11} className="border border-slate-300">
                  조회된 데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </article>
  );
}
