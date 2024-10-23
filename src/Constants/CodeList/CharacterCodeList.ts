import { findAll,findSingle,limitResults,addNew,update }  from "../Code/CodeApiMethods";
import {findOutput,findSingleOutput,addNewOutput,updateOutput}  from"../Code/CodeApiMethodsOutput";
import {bodyAddCharacter,bodyUpdate,outputCharacter} from "../Code/CodeDataMethods";

const classname = "character";
export const CodeListCharacter =[
    {
      id: "character-find-all",
      subtitle: "Character find all",
      code: findAll(classname),
      codeOutput: findOutput(outputCharacter,19,1,1),
    },
    {
      id: "character-find-single",
      subtitle: "Character find single",
      code: findSingle(classname,1),
      codeOutput: findSingleOutput(outputCharacter),
    },
    {
      id: "character-limit",
      subtitle: "Limit results",
      code: limitResults(classname,1,1),
      codeOutput: findOutput(outputCharacter,19,1,1,true),
    },
    {
      id: "character-add",
      subtitle: "Add new character",
      code: addNew(classname,bodyAddCharacter),
      codeOutput: addNewOutput("Character",21),
    },
    {
      id: "character-update",
      subtitle: "Update character",
      code: update(classname,1,bodyUpdate),
      codeOutput: updateOutput("Character"),
    }
  ];
  