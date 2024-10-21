import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findRaceAll,findRaceSingle,limitResultsRace, addNewRace,updateRace } from "../Code/RaceCode"
import { findRaceAllOutput,findRaceSingleOutput,limitResultsRaceOutput,addNewRaceOutput,updateRaceOutput } from "../Code/RaceCode";
export const CodeListRace =[
    {
      id: "race-find-all",
      subtitle: "Race find all",
      style: oneLight,
      styleDark: oneDark,
      code: findRaceAll,
      codeOutput: findRaceAllOutput,
    },
    {
      id: "race-find-single",
      subtitle: "Race find single",
      style: oneLight,
      styleDark: oneDark,
      code: findRaceSingle,
      codeOutput: findRaceSingleOutput,
    },
    {
      id: "race-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsRace,
      codeOutput: limitResultsRaceOutput,
    },
    {
      id: "race-add",
      subtitle: "Add new race",
      style: oneLight,
      styleDark: oneDark,
      code: addNewRace,
      codeOutput: addNewRaceOutput,
    },
    {
      id: "race-update",
      subtitle: "Update race",
      style: oneLight,
      styleDark: oneDark,
      code: updateRace,
      codeOutput: updateRaceOutput,
    }
  ];