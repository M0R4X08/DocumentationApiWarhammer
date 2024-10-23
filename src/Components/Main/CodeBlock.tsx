import React, { useEffect } from "react";
import Prism from "prismjs";

import "prismjs/themes/prism.css"; // Asegúrate de importar el tema de Prism.js
interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll(); // Resaltar el código cuando se renderiza
  }, [code]);

  return (
    <pre
      className="overflow-x-auto max-w-full
    border-[1px] border-gray-300 bg-gray-50/70 dark:bg-gray-950/5 dark:border-[1px] dark:border-gray-600  p-4 rounded-md"
    >
      <code
        className="text-gray-600 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: code }} // Forzamos el tipo a any
      />
    </pre>
  );
};

export default CodeBlock;
