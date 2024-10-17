import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findCharactersAll,findCharacterSingle,limitResultsCharacters, addNewCharacter,updateCharacter } from "../Constants/ConstantsCode";
import { findUserAll, findUserSingle, limitResultsUser, addNewUser, updateUser } from "../Constants/ConstantsCode";
import { findCharacterAllOutput,findCharacterSingleOutput,limitResultsCharactersOutput,addNewCharacterOutput,updateCharacterOutput } from "../Constants/ConstantsCode";

import { findUserAllOutput, findUserSingleOutput, limitResultsUserOutput,addNewUserOutput,updateUserOutput } from "../Constants/ConstantsCode";

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
  
  export const CodeListUser =[
    {
      id: "user-find-all",
      subtitle: "User find all",
      style: oneLight,
      styleDark: oneDark,
      code: findUserAll,
      codeOutput: findUserAllOutput,
    },
    {
      id: "user-find-single",
      subtitle: "User find single",
      style: oneLight,
      styleDark: oneDark,
      code: findUserSingle,
      codeOutput: findUserSingleOutput,
    },
    {
      id: "user-limit",
      subtitle: "User results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsUser,
      codeOutput: limitResultsUserOutput,
    },
    {
      id: "user-add",
      subtitle: "User new character",
      style: oneLight,
      styleDark: oneDark,
      code: addNewUser,
      codeOutput: addNewUserOutput,
    },
    {
      id: "user-update",
      subtitle: "Update user",
      style: oneLight,
      styleDark: oneDark,
      code: updateUser,
      codeOutput: updateUserOutput,
    }
  ];