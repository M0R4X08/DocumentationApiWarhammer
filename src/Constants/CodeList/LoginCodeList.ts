import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { login, loginOutput } from "../Code/LoginCode";


  export const CodeListLogin =[
    {
      id: "login",
      subtitle: "Login",
      style: oneLight,
      styleDark: oneDark,
      code: login,
      codeOutput: loginOutput,
    },
  ];