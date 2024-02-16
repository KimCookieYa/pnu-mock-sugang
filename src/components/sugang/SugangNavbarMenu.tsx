"use client";

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
      <ul className="flex">
        {sugangMenu.map((menu) => (
          <li
            key={menu.id}
            className={[
              "w-200 h-60 cursor-pointer rounded-tl-md rounded-tr-md justify-center items-center flex",
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
    </div>
  );
}
