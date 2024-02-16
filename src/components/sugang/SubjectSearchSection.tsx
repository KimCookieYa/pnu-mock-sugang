"use client";

import { ExcelSubjectType, subjectPropValues } from "@/types/subject";
import { readExcelData } from "@/utils/excel";
import { Fragment, useEffect, useState } from "react";

import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

export default function SubjectSearchSection() {
  return (
    <section className="flex flex-col gap-y-4">
      <SubjectFilterMenu />
      <div className="flex justify-end">
        <button className="bg-pnuBlue text-white text-sm m-6 px-8 py-8 rounded-sm w-100">
          조회
        </button>
        <button className="bg-green-600 text-white text-sm m-6 px-8 py-8 rounded-sm w-100">
          출력
        </button>
      </div>
      <SubjectSearchResult />
    </section>
  );
}

function SubjectFilterMenu() {
  const [univ, setUniv] = useState("대학");
  const [searchMethod, setSearchMethod] = useState(0);

  const onClickSearchMethod = (id: number) => {
    if (searchMethod !== id) {
      setSearchMethod(id);
    }
  };

  return (
    <table className="border-collapse border border-slate-300">
      <tbody>
        <tr className="h-40">
          <SubjectLabel label="개설과정" />
          <td className="border border-slate-300 px-12" colSpan={3}>
            <select
              className="w-full border"
              value={univ}
              onChange={(e) => setUniv(e.target.value)}
            >
              <option>대학</option>
              <option>대학원</option>
            </select>
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="대학/대학원" />
          <td className="border border-slate-300 px-12" colSpan={3}>
            <select
              className="w-full border"
              value={univ}
              onChange={(e) => setUniv(e.target.value)}
            >
              <option>대학</option>
              <option>대학원</option>
            </select>
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="검색방법" />
          <td className="px-12 flex gap-x-16 items-center h-40" colSpan={3}>
            <div
              className="flex items-center gap-x-2"
              onClick={() => onClickSearchMethod(0)}
            >
              {searchMethod === 0 ? (
                <MdOutlineRadioButtonChecked />
              ) : (
                <MdOutlineRadioButtonUnchecked />
              )}
              <label>세부구분(영역별, 학과별)</label>
            </div>
            <div
              className="flex items-center gap-x-2"
              onClick={() => onClickSearchMethod(1)}
            >
              {searchMethod === 1 ? (
                <MdOutlineRadioButtonChecked />
              ) : (
                <MdOutlineRadioButtonUnchecked />
              )}
              <label>교과목명 직접입력</label>
            </div>
          </td>
        </tr>
        {searchMethod === 0 ? (
          <tr className="h-40">
            <SubjectLabel label="과목구분" />
            <td className="border border-slate-300 px-12" colSpan={3}>
              <select className="w-full border">
                <optgroup label="교양선택">
                  <option>1영역: 사상과역사</option>
                  <option>2영역: 사회와문화</option>
                  <option>3영역: 문학과예술</option>
                  <option>4영역: 과학과기술</option>
                  <option>5영역: 건강과레포트</option>
                  <option>6영역: 외국어</option>
                  <option>7영역: 융복합</option>
                  <option>8영역: 효원브릿지</option>
                </optgroup>
                <option>교양필수</option>
                <option>전공선택</option>
                <option>전공필수</option>
                <option>일반선택</option>
              </select>
            </td>
          </tr>
        ) : (
          <tr className="h-40">
            <SubjectLabel label="교과목명" />
            <td className="border border-slate-300 px-12" colSpan={3}>
              <input type="text" className="border focus:outline-none" />
            </td>
          </tr>
        )}
        <tr className="h-40">
          <SubjectLabel label="세부구분" />
          <td className="border border-slate-300 px-12" colSpan={3}>
            <input type="text" className="border focus:outline-none" />
          </td>
        </tr>
        <tr className="h-40">
          <SubjectLabel label="핵심역량" />
          <td className="border border-slate-300 px-12">
            <select className="w-full border">
              <option>Y</option>
              <option>N</option>
            </select>
          </td>
          <SubjectLabel label="원어강의" />
          <td className="border border-slate-300 px-12">
            <select className="w-full border">
              <option>Y</option>
              <option>N</option>
            </select>
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
                    <TCell key={index} value={subject[prop as any]} />
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
