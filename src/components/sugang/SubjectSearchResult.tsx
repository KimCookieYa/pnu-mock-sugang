import useApplySubject from "@/stores/apply";
import useFilterCondition from "@/stores/zustand";
import { ExcelSubjectType, subjectPropValues } from "@/types/subject";
import { Fragment, useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import Portal from "../Portal";
import LoadingSpinner from "../LoadingSpinner";
import { generateRandomDelay } from "@/utils/util";
import { usePathname } from "next/navigation";

export function SubjectSearchResult() {
  const { addSubjectValues, resetSubjectValues, resetDesiredSubjectValues } =
    useApplySubject();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/register") {
      resetSubjectValues();
    } else if (pathname === "/desired") {
      resetDesiredSubjectValues();
    }
  }, [pathname]);

  useEffect(() => {
    return () => {
      resetSubjectValues();
      resetDesiredSubjectValues();
    };
  }, []);

  const subjectValues = useFilterCondition(
    useShallow((state) => state.subjectValues)
  );

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onAddSubject = (subject: ExcelSubjectType) => {
    setIsOpenModal(true);
    setTimeout(() => {
      addSubjectValues(subject);
      setIsOpenModal(false);
    }, generateRandomDelay());
  };

  return (
    <article className="relative">
      <div className="border-2 border-black w-[calc(100%-16px)] h-38 absolute top-0 z-20" />
      <div className="max-h-500 overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-200 w-full sticky top-0">
            <tr className="">
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                NO
              </th>
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                신청
              </th>
              {subjectPropValues.map((prop, index) => (
                <THead key={index} value={prop} />
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {subjectValues ? (
              subjectValues.slice(1, 30).map((subject, vindex) => (
                <Fragment key={vindex}>
                  <tr>
                    <TCell key={vindex} value={vindex.toString()} />
                    <td className="border border-slate-300 max-w-200 text-xs py-0 text-center mx-auto px-2">
                      <button
                        className="border-green-600 border text-green-600 bg-white text-sm m-6 px-8 py-4 rounded-md text-nowrap"
                        onClick={() => onAddSubject(subject)}
                      >
                        신청하기
                      </button>
                    </td>
                    {subjectPropValues.map((prop, index) => (
                      <TCell key={index} value={subject[prop as any]} />
                    ))}
                  </tr>
                </Fragment>
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
      {isOpenModal && (
        <Portal isOpen={isOpenModal}>
          <LoadingSpinner />
        </Portal>
      )}
    </article>
  );
}

function THead({ value }: { value: string }) {
  return (
    <th className="border border-slate-300 text-sm px-16 py-8 text-nowrap tracking-wider">
      <label>{value}</label>
    </th>
  );
}

function TCell({ value }: { value: string }) {
  return (
    <td className="border border-slate-300 max-w-200 text-sm py-10 text-center mx-auto px-8">
      {value}
    </td>
  );
}
