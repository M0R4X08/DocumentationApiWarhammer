import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { findCharactersAll,findCharacterSingle,limitResultsCharacters, addNewCharacter,updateCharacter } from "../Code/CharacterCode"
import { findCharacterAllOutput,findCharacterSingleOutput,limitResultsCharactersOutput,addNewCharacterOutput,updateCharacterOutput } from "../Code/CharacterCode";

export const CodeListCharacter =[
    {
      id: "character-find-all",
      subtitle: "Character find all",
      style: oneLight,
      styleDark: oneDark,
      code: findCharactersAll,
      codeOutput: findCharacterAllOutput,
    },
    {
      id: "character-find-single",
      subtitle: "Character find single",
      style: oneLight,
      styleDark: oneDark,
      code: findCharacterSingle,
      codeOutput: findCharacterSingleOutput,
    },
    {
      id: "character-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsCharacters,
      codeOutput: limitResultsCharactersOutput,
    },
    {
      id: "character-add",
      subtitle: "Add new character",
      style: oneLight,
      styleDark: oneDark,
      code: addNewCharacter,
      codeOutput: addNewCharacterOutput,
    },
    {
      id: "character-update",
      subtitle: "Update character",
      style: oneLight,
      styleDark: oneDark,
      code: updateCharacter,
      codeOutput: updateCharacterOutput,
    }
  ];
  