import SubjectSearchSection from "../sugang/SubjectSearchSection";

export default function DesiredRegisterSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <nav>
        <ul className="flex" id="sugang-navbar-menu">
          <li className="w-200 h-50 rounded-tl-md rounded-tr-md justify-center items-center flex border-t border-l border-r border-pnuBlue text-nowrap">
            희망과목담기
          </li>
          <li className="w-full border-b border-pnuBlue"></li>
        </ul>
      </nav>
      <SubjectSearchSection visible={true} />
    </div>
  );
}
