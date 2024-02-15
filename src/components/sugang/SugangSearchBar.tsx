"use client";

import { useRef } from "react";

export default function SugangSearchBar() {
  const courceIdRef = useRef<HTMLInputElement>(null);
  const courceRoomRef = useRef<HTMLInputElement>(null);

  return (
    <form className="flex border w-full">
      <label className="text-pnuText m-8 w-100 flex justify-center items-center">
        교과목번호
      </label>
      <div className="border p-4 flex justify-center">
        <input
          ref={courceIdRef}
          type="text"
          className="border focus:outline-none"
        />
      </div>
      <label className="text-pnuText m-8 w-100 flex justify-center items-center">
        분반
      </label>
      <div className="border p-4 flex justify-center">
        <input
          ref={courceRoomRef}
          type="text"
          className="border focus:outline-none"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-pnuWarn text-white text-sm m-6 px-8 py-4 rounded-md">
          빠른 수강신청
        </button>
      </div>
    </form>
  );
}
