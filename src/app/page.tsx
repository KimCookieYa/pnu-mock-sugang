import HomeHeader from "@/components/HomeHeader";
import HomeInput from "@/components/home/HomeInput";

export default function Home() {
  return (
    <div className="relative">
      <HomeHeader />
      <main className="flex min-h-screen flex-col p-16 items-center gap-y-20">
        <h2 className="text-3xl font-bold text-pnuText mt-32">
          2024학년도 1학기 수강신청
        </h2>
        <form className="shadow-[0_0_8px_2px_rgba(0,0,0,0.2)] rounded min-w-600 py-60 gap-x-4 flex justify-center">
          <div className="flex flex-col gap-y-4">
            <HomeInput label="ID" placeholder="학번" type="text" />
            <HomeInput
              label="Password"
              placeholder="비밀번호"
              type="password"
            />
            <div className="flex gap-x-4">
              <label className="font-bold text-pnuText text-end">
                Language
              </label>
              <div className="flex text-pnuText">국문 / 영어</div>
            </div>
          </div>
          <button className="bg-pnuBlue text-white px-48 h-90 rounded">
            로그인
          </button>
        </form>
      </main>
    </div>
  );
}
