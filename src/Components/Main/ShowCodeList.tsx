import ShowCode from "./ShowCode";
import { CodeList } from "../../Types/Interface";

interface ShowCodeListProps {
  title: string;
  codeList: CodeList[];
}

const ShowCodeList: React.FC<ShowCodeListProps> = ({ codeList, title }) => {
  return (
    <>
      <ul className="flex flex-col gap-5 mt-20">
        <h2 className="text-2xl mb-6 font-lexend font-semibold">{title}</h2>
        {codeList.map((code, index) => (
          <li key={code.id + index}>
            <ShowCode
              id={code.id}
              title={code.subtitle}
              style={code.style}
              styleDark={code.styleDark}
              code={code.code}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowCodeList;
