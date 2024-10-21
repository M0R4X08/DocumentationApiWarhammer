import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findSubFactionAll,findSubFactionSingle,limitResultsSubFaction, addNewSubFaction,updateSubFaction } from "../Code/SubFactionCode"
import { findSubFactionAllOutput,findSubFactionSingleOutput,limitResultsSubFactionOutput,addNewSubFactionOutput,updateSubFactionOutput } from "../Code/SubFactionCode";


export const CodeListSubFaction =[
    {
      id: "subfaction-find-all",
      subtitle: "Subfaction find all",
      style: oneLight,
      styleDark: oneDark,
      code: findSubFactionAll,
      codeOutput: findSubFactionAllOutput,
    },
    {
      id: "subfaction-find-single",
      subtitle: "Subfaction find single",
      style: oneLight,
      styleDark: oneDark,
      code: findSubFactionSingle,
      codeOutput: findSubFactionSingleOutput,
    },
    {
      id: "subfaction-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsSubFaction,
      codeOutput: limitResultsSubFactionOutput,
    },
    {
      id: "subfaction-add",
      subtitle: "Add new  subfaction",
      style: oneLight,
      styleDark: oneDark,
      code: addNewSubFaction,
      codeOutput: addNewSubFactionOutput,
    },
    {
      id: "subfaction-update",
      subtitle: "Update subfaction",
      style: oneLight,
      styleDark: oneDark,
      code: updateSubFaction,
      codeOutput: updateSubFactionOutput,
    }
  ];