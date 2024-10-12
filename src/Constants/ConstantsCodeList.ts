import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { findCharactersAll,findCharacterSingle,limitResultsCharacters, addNewCharacter,updateCharacter } from "../Constants/ConstantsCode";
import { findUserAll, findUserSingle, limitResultsUser, addNewUser, updateUser } from "../Constants/ConstantsCode";

export const CodeListCharacter =[
    {
      id: "character-find-all",
      subtitle: "Character find all",
      style: oneLight,
      styleDark: oneDark,
      code: findCharactersAll,
    },
    {
      id: "character-find-single",
      subtitle: "Character find single",
      style: oneLight,
      styleDark: oneDark,
      code: findCharacterSingle,
    },
    {
      id: "character-limit",
      subtitle: "Limit results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsCharacters,
    },
    {
      id: "character-add",
      subtitle: "Add new character",
      style: oneLight,
      styleDark: oneDark,
      code: addNewCharacter,
    },
    {
      id: "character-update",
      subtitle: "Update character",
      style: oneLight,
      styleDark: oneDark,
      code: updateCharacter,
    }
  ];
  
  export const CodeListUser =[
    {
      id: "user-find-all",
      subtitle: "User find all",
      style: oneLight,
      styleDark: oneDark,
      code: findUserAll,
    },
    {
      id: "user-find-single",
      subtitle: "User find single",
      style: oneLight,
      styleDark: oneDark,
      code: findUserSingle,
    },
    {
      id: "user-limit",
      subtitle: "User results",
      style: oneLight,
      styleDark: oneDark,
      code: limitResultsUser,
    },
    {
      id: "user-add",
      subtitle: "User new character",
      style: oneLight,
      styleDark: oneDark,
      code: addNewUser,
    },
    {
      id: "user-update",
      subtitle: "Update user",
      style: oneLight,
      styleDark: oneDark,
      code: updateUser,
    }
  ];