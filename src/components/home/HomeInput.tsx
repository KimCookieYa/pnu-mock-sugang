import { forwardRef } from "react";

interface HomeInputProps {
  placeholder: string;
  type: string;
  label: string;
}

export default function HomeInput({
  placeholder,
  type,
  label,
}: HomeInputProps) {
  return (
    <div className="flex gap-x-4 items-center">
      <label className="font-bold text-pnuText w-full text-end">{label}</label>
      <input
        type={type}
        className="border-2 focus:outline-none rounded p-4"
        placeholder={placeholder}
      />
    </div>
  );
}
