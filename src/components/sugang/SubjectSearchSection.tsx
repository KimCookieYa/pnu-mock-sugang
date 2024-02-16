"use client";

import { useState } from "react";
import useFilterCondition from "@/stores/zustand";
import { useShallow } from "zustand/react/shallow";

import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { readExcelData } from "@/utils/excel";
import { filterData } from "@/utils/filter";
import { SubjectSearchResult } from "@/components/sugang/SubjectSearchResult";

export default function SubjectSearchSection() {
  const filter = useFilterCondition((state) => state.filter);

  const setSubjectValues = useFilterCondition(
    useShallow((state) => state.setSubjectValues)
  );

  const onClickQuery = async () => {
    const data = await readExcelData("/sugang-data-20240124.xlsx");
    console.log(data);
    console.log(filterData(data, filter));
    setSubjectValues(filterData(data, filter));
  };

  return (
    <section className="flex flex-col gap-y-4">
      <SubjectFilterMenu />
      <div className="flex justify-end">
        <button
          className="bg-pnuBlue text-white text-sm m-6 px-8 py-8 rounded-sm w-100"
          onClick={onClickQuery}
        >
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
  const { filter, setFilter } = useFilterCondition();
  const [searchMethod, setSearchMethod] = useState(false);

  const onClickSearchMethod = (position: boolean) => {
    if (searchMethod !== position) {
      setSearchMethod(position);
    }
  };

  const onClickUniv = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, univ: e.target.value });
  };

  const onClickSubjectClass = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, subjectClass: e.target.value });
  };

  const onClickLiveralArtsClass = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, liveralArtsClass: Number(e.target.value) });
  };

  const onClickNativeLanguageClass = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter({ ...filter, nativeLanguageClass: e.target.value });
  };

  return (
    <table className="border-collapse border border-slate-300">
      <tbody>
        <tr className="h-40">
          <SubjectLabel label="개설과정" />
          <td className="border border-slate-300 px-12" colSpan={3}>
            <select
              className="w-full border"
              value={filter.univ}
              onChange={onClickUniv}
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
              value={filter.univ}
              onChange={onClickUniv}
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
              onClick={() => onClickSearchMethod(false)}
            >
              {!searchMethod ? (
                <MdOutlineRadioButtonChecked />
              ) : (
                <MdOutlineRadioButtonUnchecked />
              )}
              <label>세부구분(영역별, 학과별)</label>
            </div>
            <div
              className="flex items-center gap-x-2"
              onClick={() => onClickSearchMethod(true)}
            >
              {searchMethod ? (
                <MdOutlineRadioButtonChecked />
              ) : (
                <MdOutlineRadioButtonUnchecked />
              )}
              <label>교과목명 직접입력</label>
            </div>
          </td>
        </tr>
        {!searchMethod ? (
          <tr className="h-40">
            <SubjectLabel label="과목구분" />
            <td className="border border-slate-300 px-12" colSpan={3}>
              <select
                className="w-full border"
                value={filter.subjectClass}
                onChange={onClickSubjectClass}
              >
                <option>교양선택</option>
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
        {filter.subjectClass === "교양선택" && (
          <tr className="h-40">
            <SubjectLabel label="세부구분" />
            <td className="border border-slate-300 px-12" colSpan={3}>
              <select
                className="w-full border"
                value={filter.liveralArtsClass}
                onChange={onClickLiveralArtsClass}
              >
                <option value={1}>1영역: 사상과역사</option>
                <option value={2}>2영역: 사회와문화</option>
                <option value={3}>3영역: 문학과예술</option>
                <option value={4}>4영역: 과학과기술</option>
                <option value={5}>5영역: 건강과레포트</option>
                <option value={6}>6영역: 외국어</option>
                <option value={7}>7영역: 융복합</option>
                <option value={8}>8영역: 효원브릿지</option>
              </select>
            </td>
          </tr>
        )}
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
            <select
              className="w-full border"
              value={filter.nativeLanguageClass}
              onChange={onClickNativeLanguageClass}
            >
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
