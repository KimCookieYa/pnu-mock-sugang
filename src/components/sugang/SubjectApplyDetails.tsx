"use client";

import SubjectApplyResultSection from "./SubjectApplyResultSection";

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
      <SubjectApplyResultSection />
    </div>
  );
}
