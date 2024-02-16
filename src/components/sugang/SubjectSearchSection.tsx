"use client";

import { ExcelSubjectType, subjectPropValues } from "@/types/subject";
import { readExcelData } from "@/utils/excel";
import { Fragment, useEffect, useState } from "react";

export default function SubjectSearchSection() {
  return (
    <section className="flex flex-col gap-y-16">
      <SubjectFilterMenu />
      <SubjectSearchResult />
    </section>
  );
}

function SubjectFilterMenu() {
  return (
    <table className="border-collapse border border-slate-300">
      <tbody>
        <tr className="h-40">
          <SubjectLabel label="개설과정" />
          <td className="border border-slate-300">
            <input type="text" />
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="대학/대학원" />
          <td className="border border-slate-300">
            <input type="text" />
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="검색방법" />
          <td className="border border-slate-300">
            <input type="text" />
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="과목구분" />
          <td className="border border-slate-300">
            <input type="text" />
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="세부구분" />
          <td className="border border-slate-300">
            <input type="text" />
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="핵심역량" />
          <td className="border border-slate-300">
            <input type="text" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function SubjectLabel({ label }: { label: string }) {
  return (
    <td className="bg-slate-100 text-center border border-slate-300 w-140 font-bold">
      <label>{label}</label>
    </td>
  );
}

function SubjectSearchResult() {
  const [subjectValues, setSubjectValues] = useState<
    ExcelSubjectType[] | undefined
  >([]);
  useEffect(() => {
    (async () => {
      const data = await readExcelData("/sugang-data-20240124.xlsx");
      console.log(data);
      setSubjectValues(data);
    })();
  }, []);

  return (
    <article className="relative">
      <div className="border-2 border-black w-[calc(100%-16px)] h-38 absolute top-0 z-20" />
      <div className="max-h-500 overflow-auto">
        <table className="w-full">
          <thead className="bg-white w-full sticky top-0">
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
            {subjectValues?.slice(1, 30).map((subject, vindex) => (
              <Fragment key={vindex}>
                <tr>
                  <TCell key={vindex} value={vindex.toString()} />
                  <td className="border border-slate-300 max-w-200 text-xs py-0 text-center mx-auto px-2">
                    <button className="bg-green-600 text-white text-sm m-6 px-8 py-4 rounded-md text-nowrap">
                      신청하기
                    </button>
                  </td>
                  {subjectPropValues.map((prop, index) => (
                    <TCell key={index} value={subject[prop]} />
                  ))}
                </tr>
              </Fragment>
            ))}
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
