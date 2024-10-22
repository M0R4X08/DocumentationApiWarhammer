import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findAlignmentAll, findAlignmentSingle, limitResultsAlignment, addNewAlignment, updateAlignment } from "../Code/AlignmentCode";
import { findAlignmentAllOutput, findAlignmentSingleOutput, limitResultsAlignmentOutput, addNewAlignmentOutput, updateAlignmentOutput } from "../Code/AlignmentCode";

export const CodeListAlignment =[
    {
      id: "alignment-find-all",
      subtitle: "Alignment find all",
      style: oneLight,
      styleDark: oneDark,
      code: findAlignmentAll,
      codeOutput: findAlignmentAllOutput,
    },
    {
      id: "alignment-find-single",
      subtitle: "Alignment find single",
      style: oneLight,
      styleDark: oneDark,
      code: findAlignmentSingle,
      codeOutput: findAlignmentSingleOutput,
    },
    {
      id: "alignment-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsAlignment,
      codeOutput: limitResultsAlignmentOutput,
    },
    {
      id: "alignment-add",
      subtitle: "Add new alignment",
      style: oneLight,
      styleDark: oneDark,
      code: addNewAlignment,
      codeOutput: addNewAlignmentOutput,
    },
    {
      id: "alignment-update",
      subtitle: "Update alignment",
      style: oneLight,
      styleDark: oneDark,
      code: updateAlignment,
      codeOutput: updateAlignmentOutput,
    }
  ];