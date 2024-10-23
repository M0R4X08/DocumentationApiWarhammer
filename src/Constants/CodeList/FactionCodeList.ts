import { findAll,findSingle,limitResults,addNew,update }  from "../Code/CodeApiMethods";
import {findOutput,findSingleOutput,addNewOutput,updateOutput}  from"../Code/CodeApiMethodsOutput";
import {bodyUpdate,outputFaction} from "../Code/CodeDataMethods";

const classname = "faction";
export const CodeListFaction = [
    {
      id: "faction-find-all",
      subtitle: "Faction find all",
      code: findAll(classname),
      codeOutput: findOutput(outputFaction,1,1,1),
    },
    {
      id: "faction-find-single",
      subtitle: "Faction find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputFaction),
    },
    {
      id: "faction-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputFaction,1,1,1,true),
    },
    {
      id: "faction-add",
      subtitle: "Add new faction",
      code: addNew(classname,`<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Faction name`),
      codeOutput: addNewOutput("Faction",2),
    },
    {
      id: "faction-update",
      subtitle: "Update faction",
      code: update(classname,1,bodyUpdate),
      codeOutput: updateOutput("Faction"),
    }
  ];