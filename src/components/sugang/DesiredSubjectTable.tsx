import { subjectPropValues } from "@/types/subject";

export default function DesiredSubjectTable() {
  return (
    <table className="border-collapse border border-pnuText">
      <thead>
        <tr>
          {subjectPropValues.map((prop) => (
            <th key={prop} className="border border-pnuText">
              {prop}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-pnuText">1</td>
          <td className="border border-pnuText">희망과목담기</td>
        </tr>
      </tbody>
    </table>
  );
}
