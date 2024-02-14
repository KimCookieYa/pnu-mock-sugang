export default function SugangSidebar() {
  return (
    <>
      <aside className="min-w-200 flex flex-col border-r-2 border-pnuBlue fixed h-screen">
        <div className="flex justify-center items-center h-64 bg-pnuBlue">
          <h1 className="text-white text-2xl">
            홍길동<span className="text-base">(202312345)</span>
          </h1>
        </div>
      </aside>
      <div className="min-w-200 h-screen" />
    </>
  );
}
