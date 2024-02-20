import useLocalStorage from "@/hooks/useLocalStorage";
import { SubjectType, subjectPropValues } from "@/types/subject";
import { getDesiredSubjects } from "@/utils/subject";
import { useEffect, useState } from "react";

export default function DesiredSubjectSection() {
  const [desiredValue, setDesiredValue] = useState<SubjectType[]>([]);
  const { storedValue: registerValue, setValue: setRegisterValue } =
    useLocalStorage("register", []);

  const onRegisterSubject = (subject: SubjectType) => {
    setRegisterValue([...registerValue, subject]);
  };

  useEffect(() => {
    const temp = getDesiredSubjects();
    if (temp) {
      setDesiredValue(temp);
    }
  }, []);

  return (
    <section className="flex flex-col gap-y-4 relative">
      <div className="border-2 border-black w-[calc(100%)] h-38 absolute top-0 z-20" />
      <div className="max-h-500 overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-200 w-full sticky top-0">
            <tr className="">
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                NO
              </th>
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                신청
              </th>
              {subjectPropValues.map((prop, index) => (
                <THead key={index} value={prop} />
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            <tr />
            {desiredValue ? (
              desiredValue.map((subject, vindex) => (
                <tr key={vindex}>
                  <TCell value={vindex.toString()} />
                  <td className="border border-slate-300 max-w-200 text-xs py-0 text-center mx-auto px-2">
                    <button
                      className="border-green-600 border text-green-600 bg-white text-sm m-6 px-8 py-4 rounded-md text-nowrap"
                      onClick={() => onRegisterSubject(subject)}
                    >
                      신청하기
                    </button>
                  </td>
                  {subjectPropValues.map((prop, index) => (
                    <TCell
                      key={index}
                      value={subject[prop as keyof SubjectType]}
                    />
                  ))}
                </tr>
              ))
            ) : (
              <tr className="h-40 text-center">
                <td colSpan={11} className="border border-slate-300">
                  조회된 데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function THead({ value }: { value: string }) {
  return (
    <th className="border border-slate-300 text-sm px-16 py-8 text-nowrap tracking-wider">
      <label>{value}</label>
    </th>
  );
}

function TCell({ value }: { value: string }) {
  return (
    <td className="border border-slate-300 max-w-200 text-sm py-4 text-center mx-auto px-8">
      {value}
    </td>
  );
}
