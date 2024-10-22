import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useMemo } from "react";
import useDarkMode from "../../Hooks/useDarkMode";

export interface ShowCodeOutPutProps {
  code: string;
  style: any;
  styleDark: any;
}
const ShowCodeOutput: React.FC<ShowCodeOutPutProps> = ({
  code,
  style,
  styleDark,
}) => {
  const isDark = useDarkMode();
  const syntaxStyle = useMemo(() => (isDark ? styleDark : style), [isDark]);
  return (
    <div className="overflow-x-auto max-w-full sm:max-w-screen-md">
      <SyntaxHighlighter
        language="json"
        style={syntaxStyle}
        className={
          isDark
            ? "border-[1px] border-gray-600"
            : "border-[1px] border-gray-300"
        }
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default ShowCodeOutput;
