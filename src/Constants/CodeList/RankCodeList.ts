const { findAll,findSingle,limitResults,addNew,update } = await import("../Code/CodeApiMethods");
const {findOutput,findSingleOutput,addNewOutput,updateOutput} = await import("../Code/CodeApiMethodsOutput");

const {bodyUpdate,outputRank} = await import("../Code/CodeDataMethods");
const classname = "rank";
export const CodeListRank =[
    {
      id: "rank-find-all",
      subtitle: "Rank find all",
      code: findAll(classname),
      codeOutput: findOutput(outputRank,2,1,1),
    },
    {
      id: "rank-find-single",
      subtitle: "Rank find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputRank),
    },
    {
      id: "rank-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputRank,2,1,1,true),
    },
    {
      id: "rank-add",
      subtitle: "Add new Rank",
      code: addNew(classname,`<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Rank name`),
      codeOutput: addNewOutput("Rank",3),
    },
    {
      id: "rank-update",
      subtitle: "Update Rank",
      code: update(classname,1,bodyUpdate),
      codeOutput: updateOutput("Rank"),
    }
  ];