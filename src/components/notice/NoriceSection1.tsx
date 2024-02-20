"use client";

import { noticeData } from "@/datas/notice-data";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function NoticeSection1() {
  const router = useRouter();
  const [openIndexList, setOpenIndexList] = useState([true, true, true]);

  const handleRowClick = (index: number) => {
    setOpenIndexList((prev) => {
      const newOpenIndexList = [...prev];
      newOpenIndexList[index] = !newOpenIndexList[index];
      return newOpenIndexList;
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setTimeout(() => {
      router.push("/register");
    }, 3000);
  };

  return (
    <div className="w-full mb-12 flex flex-col items-center gap-y-12">
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
              <tr>
                <td
                  className={[
                    openIndexList[index] ? "border-[1px]" : "",
                    " transition-all duration-500 ease-in-out",
                  ].join(" ")}
                >
                  <div
                    className={`overflow-hidden px-60 transition-all duration-500 ease-in-out ${
                      openIndexList[index] ? "h-100" : "h-0"
                    }`}
                  >
                    <div className="list-disc mt-16">
                      {row.content.map((content, index) => (
                        <li key={index}>{content}</li>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <button
        className="bg-pnuLightBlue text-white px-20 h-fit py-8 rounded text-sm"
        onClick={handleClick}
      >
        수강신청 바로가기
      </button>
    </div>
  );
}
