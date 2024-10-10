import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Element } from "react-scroll";
interface ShowCodeProps {
  id: string;
  code: string;
  title: string;
  style: any;
}

const ShowCode: React.FC<ShowCodeProps> = ({ id, code, title, style }) => {
  return (
    <Element name={id} className="min-h-72 p-2">
      <h3>{title}</h3>
      <div className="overflow-x-auto max-w-full sm:max-w-screen-md">
        <SyntaxHighlighter language="javascript" style={style}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div style={{ height: "10vh" }}></div>
    </Element>
  );
};

export default ShowCode;
