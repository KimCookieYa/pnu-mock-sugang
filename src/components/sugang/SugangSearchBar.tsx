"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import useAlert from "@/stores/alert";
import useLoading from "@/stores/loading";
import { readExcelData } from "@/utils/excel";
import { generateRandomDelay } from "@/utils/util";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function SugangSearchBar() {
  const pathname = usePathname();
  const { storedValue, setValue } = useLocalStorage(pathname.slice(1), []);
  const { setIsLoading } = useLoading();
  const courseCodeRef = useRef<HTMLInputElement>(null);
  const courseRoomIdRef = useRef<HTMLInputElement>(null);
  const { setMessage } = useAlert();

  const onSubmitInput = async () => {
    const data = await readExcelData("/sugang-data-20240124.xlsx");
    const courseCode = courseCodeRef.current?.value;
    const courseRoomId = courseRoomIdRef.current?.value;
    const subject = data?.find(
      (subject) =>
        subject.교과목코드 === courseCode && subject.분반 === courseRoomId
    );
    if (subject) {
      setIsLoading(true);
      setTimeout(() => {
        setValue([...storedValue, subject]);
        setIsLoading(false);
        setMessage("register", {
          message: `${subject.교과목명}(${subject.분반}분반)이 수강신청 완료되었습니다!`,
          subject: subject,
        });
      }, generateRandomDelay());
    } else {
      alert("해당 과목이 존재하지 않습니다!");
      if (courseCodeRef.current && courseRoomIdRef.current) {
        courseCodeRef.current.value = "";
        courseRoomIdRef.current.value = "";
      }
    }
  };

  return (
    <form className="flex flex-col sm:flex-row border w-full items-center">
      <div className="flex">
        <label className="text-pnuText m-8 w-100 flex justify-center items-center text-nowrap">
          교과목번호
        </label>
        <div className="border p-4 flex justify-center">
          <input
            ref={courseCodeRef}
            type="text"
            className="border focus:outline-none"
          />
        </div>
      </div>
      <div className="flex">
        <label className="text-pnuText m-8 w-100 flex justify-center items-center text-nowrap">
          분반
        </label>
        <div className="border p-4 flex justify-center">
          <input
            ref={courseRoomIdRef}
            type="text"
            className="border focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-pnuWarn text-white text-sm m-6 px-8 py-4 rounded-md text-nowrap"
          onClick={onSubmitInput}
        >
          {pathname === "/register" ? "빠른 수강신청" : "빠른 담기"}
        </button>
      </div>
    </form>
  );
}
