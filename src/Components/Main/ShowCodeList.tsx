import ShowCode from "./ShowCode";
import { ShowCodeListProps } from "../../Types/Interface";

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
              code={code.code}
              codeOutput={code.codeOutput}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowCodeList;
