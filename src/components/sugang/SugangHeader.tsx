"use client";

import Link from "next/link";
import TitleLogo from "../TitleLogo";
import { usePathname } from "next/navigation";

export default function SugangHeader() {
  const pathname = usePathname();
  return (
    <>
      <header className="flex bg-pnuBlue h-45 items-center px-16 fixed top-0 left-0 right-0 w-full z-[10000]">
        <TitleLogo />
        <nav>
          <ul className="flex gap-x-12 ml-100">
            <li
              className={
                pathname === "/register"
                  ? "text-lg text-green-300 underline font-bold"
                  : "text-lg text-white"
              }
            >
              <Link href="/register">수강신청</Link>
            </li>
            <li
              className={
                pathname === "/notice"
                  ? "text-lg text-green-300 underline font-bold"
                  : "text-lg text-white"
              }
            >
              <Link href="/notice">공지사항</Link>
            </li>
            <li className="text-lg text-white">학생기본정보</li>
            <li className="text-lg text-white">게시판</li>
            <li
              className={
                pathname === "/desired"
                  ? "text-lg text-green-300 underline font-bold"
                  : "text-lg text-white"
              }
            >
              <Link href="/desired">희망과목담기</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-45 w-full" />
    </>
  );
}
