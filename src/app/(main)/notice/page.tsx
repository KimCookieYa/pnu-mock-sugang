import NoticeSection1 from "@/components/notice/NoriceSection1";
import Link from "next/link";

export default function NoticePage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8 items-center">
      <NoticeSection1 />
      <Link href="/register">
        <button className="bg-pnuLightBlue text-white px-20 h-fit py-8 rounded text-sm">
          수강신청 바로가기
        </button>
      </Link>
    </div>
  );
}
