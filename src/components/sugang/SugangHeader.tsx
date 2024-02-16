import TitleLogo from "../TitleLogo";

export default function SugangHeader() {
  return (
    <>
      <header className="flex bg-pnuBlue h-48 items-center px-16 fixed top-0 left-0 right-0 w-full z-[10000]">
        <TitleLogo />
      </header>
      <div className="h-48 w-full" />
    </>
  );
}
