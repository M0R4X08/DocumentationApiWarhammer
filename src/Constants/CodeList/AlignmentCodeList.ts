import { findAll,findSingle,limitResults,addNew,update }  from "../Code/CodeApiMethods";
import {findOutput,findSingleOutput,addNewOutput,updateOutput}  from"../Code/CodeApiMethodsOutput";

import {bodyUpdate,outputAlingment} from "../Code/CodeDataMethods";

const classname = "alignment";
export const CodeListAlignment =[
    {
      id: "alignment-find-all",
      subtitle: "Alignment find all",
      code: findAll(classname),
      codeOutput: findOutput(outputAlingment,1,1,1),
    },
    {
      id: "alignment-find-single",
      subtitle: "Alignment find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputAlingment),
    },
    {
      id: "alignment-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputAlingment,1,1,1,true),
    },
    {
      id: "alignment-add",
      subtitle: "Add new alignment",
      code: addNew(classname,`<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Alignment name`),
      codeOutput: addNewOutput("Alignment",2),
    },
    {
      id: "alignment-update",
      subtitle: "Update alignment",
      code: update(classname,1,bodyUpdate),
      codeOutput: updateOutput("Alignment"),
    }
  ];