import { login} from "../Code/CodeApiMethods";
import {loginOutput} from "../Code/CodeApiMethodsOutput";

  export const CodeListLogin = [
    {
      id: "login",
      subtitle: "Login",
      code: login(),
      codeOutput: loginOutput(),
    },
  ];