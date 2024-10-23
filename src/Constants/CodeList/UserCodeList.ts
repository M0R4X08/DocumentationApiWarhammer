import { findAll,findSingle,limitResults,addNew,update }  from "../Code/CodeApiMethods";
import {findOutput,findSingleOutput,addNewOutput,updateOutput}  from"../Code/CodeApiMethodsOutput";
import {outputUser, bodyAddUser, bodyUpdateUser} from "../Code/CodeDataMethods";

const classname = "user";

export const CodeListUser =[
    {
      id: "user-find-all",
      subtitle: "User find all",
      code: findAll(classname),
      codeOutput: findOutput(outputUser,1,1,1),
    },
    {
      id: "user-find-single",
      subtitle: "User find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputUser),
    },
    {
      id: "user-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputUser,1,1,1,true),
    },
    {
      id: "user-add",
      subtitle: "Add new user",
      code: addNew(classname,bodyAddUser),
      codeOutput: addNewOutput("User",2),
    },
    {
      id: "user-update",
      subtitle: "Update user",
      code: update(classname,1,bodyUpdateUser),
      codeOutput: updateOutput("User"),
    }
  ];