"use client";

import { subjectPropValues } from "@/types/subject";
import { useState } from "react";

const sugangMenu = [
  { label: "희망과목담기", id: 0 },
  {
    label: "교과목검색",
    id: 1,
  },
  {
    label: "동일교과목검색",
    id: 2,
  },
];

export default function SugangNavbarMenu() {
  const [currentTab, setCurrentTab] = useState(0);

  const onClickTab = (id: number) => {
    setCurrentTab(id);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <nav>
        <ul className="flex" id="sugang-navbar-menu">
          {sugangMenu.map((menu) => (
            <li
              key={menu.id}
              className={[
                "w-200 h-50 cursor-pointer rounded-tl-md rounded-tr-md justify-center items-center flex",
                currentTab === menu.id
                  ? "border-t border-l border-r border-pnuBlue"
                  : "border-b border-pnuBlue",
              ].join(" ")}
              onClick={() => onClickTab(menu.id)}
            >
              {menu.label}
            </li>
          ))}
          <li className="w-full border-b border-pnuBlue"></li>
        </ul>
      </nav>
      <DesiredSubjectTable />
    </div>
  );
}

function DesiredSubjectTable() {
  return (
    <table className="border-collapse border border-pnuText">
      <thead>
        <tr>
          {subjectPropValues.map((prop) => (
            <th key={prop} className="border border-pnuText">
              {prop}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-pnuText">1</td>
          <td className="border border-pnuText">희망과목담기</td>
        </tr>
      </tbody>
    </table>
  );
}
