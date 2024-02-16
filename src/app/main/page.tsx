import SugangNavbarMenu from "@/components/sugang/SugangNavbarMenu";
import SugangSearchBar from "@/components/sugang/SugangSearchBar";

export default function SugangPage() {
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <SugangSearchBar />
      <div className="p-0">
        <SugangNavbarMenu />
      </div>
    </div>
  );
}
