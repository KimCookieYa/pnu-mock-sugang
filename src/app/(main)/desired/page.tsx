import DesiredRegisterSection from "@/components/desired/DesiredRegisterSection";
import SubjectApplyDetails from "@/components/sugang/SubjectApplyDetails";
import SugangSearchBar from "@/components/sugang/SugangSearchBar";

export default function DesiredPage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <SugangSearchBar />
      <div className="p-0">
        <DesiredRegisterSection />
      </div>
      <SubjectApplyDetails />
    </div>
  );
}
