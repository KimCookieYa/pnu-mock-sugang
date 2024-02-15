import { MdOutlineSchool } from "react-icons/md";

export default function TitleLogo() {
  return (
    <div className="flex justify-center items-center bg-pnuBlue gap-x-2">
      <MdOutlineSchool className="" color="white" />
      <h1 className="text-lg text-white">
        부산대학교 <span className="text-xs">아님</span>
      </h1>
    </div>
  );
}
