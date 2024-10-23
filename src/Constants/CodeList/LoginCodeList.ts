const { login} = await import("../Code/CodeApiMethods");
const {loginOutput} = await import("../Code/CodeApiMethodsOutput");

  export const CodeListLogin = [
    {
      id: "login",
      subtitle: "Login",
      code: login(),
      codeOutput: loginOutput(),
    },
  ];