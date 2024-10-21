import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { findUserAll, findUserSingle, limitResultsUser, addNewUser, updateUser } from "../Code/UserCode";
import { findUserAllOutput, findUserSingleOutput, limitResultsUserOutput,addNewUserOutput,updateUserOutput } from "../Code/UserCode";

export const CodeListUser =[
    {
      id: "user-find-all",
      subtitle: "User find all",
      style: oneLight,
      styleDark: oneDark,
      code: findUserAll,
      codeOutput: findUserAllOutput,
    },
    {
      id: "user-find-single",
      subtitle: "User find single",
      style: oneLight,
      styleDark: oneDark,
      code: findUserSingle,
      codeOutput: findUserSingleOutput,
    },
    {
      id: "user-limit",
      subtitle: "User results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsUser,
      codeOutput: limitResultsUserOutput,
    },
    {
      id: "user-add",
      subtitle: "User new character",
      style: oneLight,
      styleDark: oneDark,
      code: addNewUser,
      codeOutput: addNewUserOutput,
    },
    {
      id: "user-update",
      subtitle: "Update user",
      style: oneLight,
      styleDark: oneDark,
      code: updateUser,
      codeOutput: updateUserOutput,
    }
  ];