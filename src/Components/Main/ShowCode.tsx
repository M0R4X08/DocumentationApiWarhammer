import { useMemo, useState } from "react";
import { Element } from "react-scroll";
import { ShowCodeProps } from "../../Types/Interface";

import CodeBlock from "./CodeBlock";

import ShowCodeOutput from "./ShowCodeOutput";

const ShowCode: React.FC<ShowCodeProps> = ({ id, code, title, codeOutput }) => {
  const [showOutput, setShowOutput] = useState(false);

  const handleOutputCode = () => {
    setShowOutput((prev) => !prev);
  };

  const syntaxCode = useMemo(() => code, [code]);

  return (
    <Element name={id} id={id} className="min-h-72 p-2">
      <h3 className="font-lexend mb-[10px] text-lg/5 font-light">{title}</h3>
      <div className="overflow-x-auto max-w-full sm:max-w-screen-md">
        <CodeBlock code={syntaxCode} />
      </div>
      <button
        className="bg-blue-600/85 dark:bg-gray-500 rounded-md p-2.5 mt-2 text-white font-light text-lg/6 "
        onClick={handleOutputCode}
      >
        {showOutput ? "Hide Output" : "Show Output"}
      </button>

      {showOutput && <ShowCodeOutput code={codeOutput} />}
    </Element>
  );
};

export default ShowCode;
