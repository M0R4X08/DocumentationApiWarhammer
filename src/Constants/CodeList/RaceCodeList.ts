import { findAll,findSingle,limitResults,addNew,update }  from "../Code/CodeApiMethods";
import {findOutput,findSingleOutput,addNewOutput,updateOutput}  from"../Code/CodeApiMethodsOutput";

import {bodyUpdate,outputRace} from "../Code/CodeDataMethods";

const classname = "race";
export const CodeListRace = [
    {
      id: "race-find-all",
      subtitle: "Race find all",
      code: findAll(classname),
      codeOutput: findOutput(outputRace,1,1,1),
    },
    {
      id: "race-find-single",
      subtitle: "Race find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputRace),
    },
    {
      id: "race-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputRace,1,1,1,true),
    },
    {
      id: "race-add",
      subtitle: "Add new race",
      code: addNew(classname,`<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Race name`),
      codeOutput: addNewOutput("Race",2),
    },
    {
      id: "race-update",
      subtitle: "Update race",
      code: update(classname,1,bodyUpdate),
      codeOutput: updateOutput("Race"),
    }
  ];