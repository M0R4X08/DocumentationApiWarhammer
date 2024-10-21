import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findFactionAll,findFactionSingle,limitResultsFaction, addNewFaction,updateFaction } from "../Code/FactionCode"
import { findFactionAllOutput,findFactionSingleOutput,limitResultsFactionOutput,addNewFactionOutput,updateFactionOutput } from "../Code/FactionCode";

export const CodeListFaction =[
    {
      id: "faction-find-all",
      subtitle: "Faction find all",
      style: oneLight,
      styleDark: oneDark,
      code: findFactionAll,
      codeOutput: findFactionAllOutput,
    },
    {
      id: "faction-find-single",
      subtitle: "Faction find single",
      style: oneLight,
      styleDark: oneDark,
      code: findFactionSingle,
      codeOutput: findFactionSingleOutput,
    },
    {
      id: "faction-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsFaction,
      codeOutput: limitResultsFactionOutput,
    },
    {
      id: "faction-add",
      subtitle: "Add new faction",
      style: oneLight,
      styleDark: oneDark,
      code: addNewFaction,
      codeOutput: addNewFactionOutput,
    },
    {
      id: "faction-update",
      subtitle: "Update faction",
      style: oneLight,
      styleDark: oneDark,
      code: updateFaction,
      codeOutput: updateFactionOutput,
    }
  ];