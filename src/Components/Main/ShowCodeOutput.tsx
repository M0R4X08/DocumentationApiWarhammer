import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useMemo } from "react";
import useDarkMode from "../../Hooks/useDarkMode";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ShowCodeOutPutProps } from "../../Types/Interface";
const ShowCodeOutput: React.FC<ShowCodeOutPutProps> = ({ code }) => {
  const isDark = useDarkMode();
  const syntaxStyle = useMemo(() => (isDark ? oneDark : oneLight), [isDark]);
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
