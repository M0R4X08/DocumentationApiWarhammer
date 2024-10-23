import { findAll,findSingle,limitResults,addNew,update }  from "../Code/CodeApiMethods";
import {findOutput,findSingleOutput,addNewOutput,updateOutput}  from"../Code/CodeApiMethodsOutput";
import {bodyUpdate,outputSubfaction} from "../Code/CodeDataMethods";


const classname = "subfaction";
export const CodeListSubFaction =[
    {
      id: "subfaction-find-all",
      subtitle: "Subfaction find all",
      code: findAll(classname),
      codeOutput: findOutput(outputSubfaction,2,1,1),
    },
    {
      id: "subfaction-find-single",
      subtitle: "Subfaction find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputSubfaction),
    },
    {
      id: "subfaction-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputSubfaction,2,1,1,true),
    },
    {
      id: "subfaction-add",
      subtitle: "Add new  subfaction",
      code: addNew(classname,`<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Race name
      "faction_id": null // Faction id`),
      codeOutput: addNewOutput("Subfaction",3),
    },
    {
      id: "subfaction-update",
      subtitle: "Update subfaction",
      code: update(classname,1,bodyUpdate),
      codeOutput: updateOutput("Subfaction"),
    }
  ];