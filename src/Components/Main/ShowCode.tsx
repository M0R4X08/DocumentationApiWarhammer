import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Element } from "react-scroll";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ShowCodeProps {
  id: string;
  code: string;
  title: string;
  style: any;
}

const ShowCode: React.FC<ShowCodeProps> = ({ id, code, title, style }) => {
  return (
    <Element name={id} id={id} className="min-h-72 p-2">
      <h3 className="font-lexend mb-[10px] text-lg/5 font-light">{title}</h3>
      <div className="overflow-x-auto max-w-full sm:max-w-screen-md">
        <SyntaxHighlighter language="javascript" style={style} className={style === oneLight ? "border-[1.5px]": "border-none"}>
          {code}
        </SyntaxHighlighter>
      </div>
      <button className="bg-cyan-600 rounded-md p-2.5 mt-2 text-white font-light text-lg/6 ">Show Output</button>
    </Element>
  );
};

export default ShowCode;
