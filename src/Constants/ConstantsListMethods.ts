import { ApiMethodList } from "../Types/Interface";

export const metodsCharacters: ApiMethodList[] = [
    { name: "Find all characters", to: "character-find-all" },
    { name: "Find a single character", to: "character-find-single" },
    { name: "Limit results", to: "character-limit" },
    { name: "Add new character", to: "character-add" },
    { name: "Update character", to: "character-update" },
  ];

export const metodsUsers: ApiMethodList[] = [
    { name: "Find all users", to: "user-find-all" },
    { name: "Find a single user", to: "user-find-single" },
    { name: "Limit results", to: "user-limit" },
    { name: "Add new user", to: "user-add" },
    { name: "Update user", to: "user-update" },
];

