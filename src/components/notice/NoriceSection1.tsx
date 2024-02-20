"use client";

import { noticeData } from "@/datas/notice-data";
import { Fragment, useState } from "react";

export default function NoticeSection1() {
  const [openIndexList, setOpenIndexList] = useState([true, true, true]);

  // 아코디언 섹션의 데이터 (예시)

  // 행 클릭 핸들러
  const handleRowClick = (index: number) => {
    // 이미 열려있는 아코디언을 클릭하면 닫고, 그렇지 않으면 열기
    console.log(index);
    setOpenIndexList((prev) => {
      const newOpenIndexList = [...prev];
      newOpenIndexList[index] = !newOpenIndexList[index];
      return newOpenIndexList;
    });
  };

  return (
    <section className="w-full mb-12">
      <table className="w-full text-left">
        <tbody>
          {noticeData.map((row, index) => (
            <Fragment key={index}>
              <tr
                className="cursor-pointer border-[1px] bg-gray-100"
                onClick={() => handleRowClick(index)}
              >
                <td className="py-16 px-14">
                  #{index + 1} {row.title}
                </td>
              </tr>
              <div
                className={`overflow-hidden px-60  transition-all duration-500 ease-in-out ${
                  openIndexList[index] ? "h-100 border-[1px]" : "h-0"
                }`}
              >
                <div className="list-disc mt-16">
                  {row.content.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}
