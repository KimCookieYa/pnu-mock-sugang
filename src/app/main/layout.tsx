import SugangHeader from "@/components/sugang/SugangHeader";
import SugangSidebar from "@/components/sugang/SugangSidebar";

export default function SugangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SugangHeader />
      <div className="flex">
        <SugangSidebar />
        {children}
      </div>
    </>
  );
}
