import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findRankAll, findRankSingle, limitResultsRank, addNewRank, updateRank } from "../Code/RankCode";
import { findRankAllOutput, findRankSingleOutput, limitResultsRankOutput, addNewRankOutput, updateRankOutput } from "../Code/RankCode";

export const CodeListRank =[
    {
      id: "rank-find-all",
      subtitle: "Rank find all",
      style: oneLight,
      styleDark: oneDark,
      code: findRankAll,
      codeOutput: findRankAllOutput,
    },
    {
      id: "rank-find-single",
      subtitle: "Rank find single",
      style: oneLight,
      styleDark: oneDark,
      code: findRankSingle,
      codeOutput: findRankSingleOutput,
    },
    {
      id: "rank-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsRank,
      codeOutput: limitResultsRankOutput,
    },
    {
      id: "rank-add",
      subtitle: "Add new Rank",
      style: oneLight,
      styleDark: oneDark,
      code: addNewRank,
      codeOutput: addNewRankOutput,
    },
    {
      id: "rank-update",
      subtitle: "Update Rank",
      style: oneLight,
      styleDark: oneDark,
      code: updateRank,
      codeOutput: updateRankOutput,
    }
  ];