import { cls } from "@/utils/util";

export function THead({ value }: { value: string }) {
  return (
    <th className="border border-slate-300 text-sm px-16 py-8 text-nowrap tracking-wider">
      <label>{value}</label>
    </th>
  );
}

export function TCell({ value }: { value: string }) {
  return (
    <td
      className={cls(
        "border border-slate-300 max-w-200 text-sm py-10 text-center mx-auto px-8",
        typeof value === "string" && value.includes("-") ? "text-wrap" : ""
      )}
    >
      {value}
    </td>
  );
}
