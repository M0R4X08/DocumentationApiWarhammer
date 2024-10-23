import { lazy, useMemo, Suspense, useState } from "react";
import { Element } from "react-scroll";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ShowCodeProps } from "../../Types/Interface";
import useDarkMode from "../../Hooks/useDarkMode";
const ShowCodeOutput = lazy(() => import("./ShowCodeOutput"));

const ShowCode: React.FC<ShowCodeProps> = ({
  id,
  code,
  title,
  style,
  styleDark,
  codeOutput,
}) => {
  const isDark = useDarkMode();
  const [showOutput, setShowOutput] = useState(false);
  const handleOutputCode = () => {
    setShowOutput((prev) => !prev);
  };
  const syntaxStyle = useMemo(() => (isDark ? styleDark : style), [isDark]);
  const syntaxCode = useMemo(() => code, [code]);
  return (
    <Element name={id} id={id} className="min-h-72 p-2">
      <h3 className="font-lexend mb-[10px] text-lg/5 font-light">{title}</h3>
      <div className="overflow-x-auto max-w-full sm:max-w-screen-md">
        <SyntaxHighlighter
          language="javascript"
          style={syntaxStyle}
          className={
            isDark
              ? "border-[1px] border-gray-600"
              : "border-[1px] border-gray-300"
          }
        >
          {syntaxCode}
        </SyntaxHighlighter>
      </div>
      <button
        className="bg-blue-600/85 dark:bg-gray-500 rounded-md p-2.5 mt-2 text-white font-light text-lg/6 "
        onClick={handleOutputCode}
      >
        {showOutput ? "Hide Output" : "Show Output"}
      </button>

      <Suspense>
        {showOutput && (
          <ShowCodeOutput
            code={codeOutput}
            style={style}
            styleDark={styleDark}
          />
        )}
      </Suspense>
    </Element>
  );
};

export default ShowCode;