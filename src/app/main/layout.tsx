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
        <main className="p-16">{children}</main>
      </div>
    </>
  );
}
