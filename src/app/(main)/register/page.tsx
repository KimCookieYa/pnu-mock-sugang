import SubjectApplyDetails from "@/components/sugang/SubjectApplyDetails";
import SugangNavbarMenu from "@/components/sugang/SugangNavbarMenu";
import SugangSearchBar from "@/components/sugang/SugangSearchBar";

export default function RegisterPage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <SugangSearchBar />
      <div className="p-0">
        <SugangNavbarMenu />
      </div>
      <SubjectApplyDetails />
    </div>
  );
}
