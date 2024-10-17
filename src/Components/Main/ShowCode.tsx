import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Element } from "react-scroll";
import useDarkMode from "../../Hooks/useDarkMode";
import { ShowCodeProps } from "../../Types/Interface";

const ShowCode: React.FC<ShowCodeProps> = ({
  id,
  code,
  title,
  style,
  styleDark,
}) => {
  const isDark = useDarkMode();

  return (
    <Element name={id} id={id} className="min-h-72 p-2">
      <h3 className="font-lexend mb-[10px] text-lg/5 font-light">{title}</h3>
      <div className="overflow-x-auto max-w-full sm:max-w-screen-md">
        <SyntaxHighlighter
          language="javascript"
          style={isDark ? styleDark : style}
          className={
            isDark
              ? "border-[1px] border-gray-600"
              : "border-[1px] border-gray-300"
          }
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <button className="bg-blue-600/85 dark:bg-gray-500 rounded-md p-2.5 mt-2 text-white font-light text-lg/6 ">
        Show Output
      </button>
    </Element>
  );
};

export default ShowCode;
