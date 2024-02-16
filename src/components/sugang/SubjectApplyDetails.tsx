"use client";

import useApplySubject from "@/stores/apply";
import { ExcelSubjectType, subjectPropValues } from "@/types/subject";
import { Fragment } from "react";
import { useShallow } from "zustand/react/shallow";

export default function SubjectApplyDetails() {
  return (
    <div className="flex flex-col gap-y-4 mt-20">
      <nav>
        <ul className="flex" id="sugang-navbar-menu">
          <li
            className={
              "w-200 h-50 cursor-pointer rounded-tl-md rounded-tr-md justify-center items-center flex border-t border-l border-r border-pnuBlue"
            }
          >
            수강신청내역
          </li>
          <li className="w-full border-b border-pnuBlue" />
        </ul>
      </nav>
      <ApplyDetailsTable />
    </div>
  );
}

function ApplyDetailsTable() {
  const { subjectValues, removeSubjectValues } = useApplySubject(
    (state) => state
  );

  const onRemoveSubject = (value: ExcelSubjectType) => {
    removeSubjectValues(value);
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
                        className="bg-red-600 text-white text-sm m-6 px-8 py-4 rounded-md text-nowrap"
                        onClick={() => onRemoveSubject(subject)}
                      >
                        제거하기
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
    <td className="border border-slate-300 max-w-200 text-xs py-4 text-center mx-auto px-8">
      {value}
    </td>
  );
}
