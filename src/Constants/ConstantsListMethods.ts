import { ApiMethodList } from "../Types/Interface";

export const metodsCharacters: ApiMethodList[] = [
    { name: "Find all characters", to: "character-find-all" },
    { name: "Find a single character", to: "character-find-single" },
    { name: "Limit results", to: "character-limit" },
    { name: "Add new character", to: "character-add" },
    { name: "Update character", to: "character-update" },
];
export const metodsRace: ApiMethodList[] = [
    { name: "Find all race", to: "race-find-all" },
    { name: "Find a single race", to: "race-find-single" },
    { name: "Limit results", to: "race-limit" },
    { name: "Add new race", to: "race-add" },
    { name: "Update race", to: "race-update" },
];
export const metodsFaction: ApiMethodList[] = [
  { name: "Find all faction", to: "faction-find-all" },
  { name: "Find a single faction", to: "faction-find-single" },
  { name: "Limit results", to: "faction-limit" },
  { name: "Add new faction", to: "faction-add" },
  { name: "Update faction", to: "faction-update" },
];
export const metodsSubfactions: ApiMethodList[] = [
  { name: "Find all subfaction", to: "subfaction-find-all" },
  { name: "Find a single subfaction", to: "subfaction-find-single" },
  { name: "Limit results", to: "subfaction-limit" },
  { name: "Add new subfaction", to: "subfaction-add" },
  { name: "Update subfaction", to: "subfaction-update" },
];
export const metodsUsers: ApiMethodList[] = [
    { name: "Find all users", to: "user-find-all" },
    { name: "Find a single user", to: "user-find-single" },
    { name: "Limit results", to: "user-limit" },
    { name: "Add new user", to: "user-add" },
    { name: "Update user", to: "user-update" },
];

export const metodsLogin: ApiMethodList[] = [
  { name: "Login", to: "login" },
];

