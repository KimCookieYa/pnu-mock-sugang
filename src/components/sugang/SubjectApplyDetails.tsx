"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import SubjectApplyResultSection from "./SubjectApplyResultSection";
import { usePathname } from "next/navigation";
import { calCreditSum } from "@/utils/subject";

export default function SubjectApplyDetails() {
  const pathname = usePathname();
  const { storedValue } = useLocalStorage(pathname.slice(1), []);

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
      <div className="flex gap-x-2 ml-10 text-sm">
        <label>신청과목수</label>
        <span className="text-pnuLightBlue font-bold">
          {storedValue?.length}
        </span>
        <span>건 /</span>
        <label>신청학점</label>
        <span className="text-pnuLightBlue font-bold">
          {calCreditSum(storedValue)}
        </span>
        <span>/</span>
        <label>신청가능학점</label>
        <span className="text-pnuLightBlue font-bold">99999.0</span>
      </div>
      <SubjectApplyResultSection />
    </div>
  );
}
