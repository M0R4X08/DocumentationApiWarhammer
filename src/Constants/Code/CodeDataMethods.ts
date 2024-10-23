
export const bodyUpdate =`<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span> //Change Name`;

export const bodyAddCharacter= `<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Character's name
      <span class="text-red-600 dark:text-red-400">"race_id"</span>: <span class="text-fuchsia-500 dark:text-fuchsia-400">null</span>, // ID of the character's race
      <span class="text-red-600 dark:text-red-400">"faction_id"</span>: <span class="text-fuchsia-500 dark:text-fuchsia-400">null</span>, // ID of the character's faction
      <span class="text-red-600 dark:text-red-400">"subfaction_id"</span>: <span class="text-fuchsia-500 dark:text-fuchsia-400">null</span>, // ID of the subfaction
      <span class="text-red-600 dark:text-red-400">"rank_id"</span>: <span class="text-fuchsia-500 dark:text-fuchsia-400">null</span>, // ID of the character's rank
      <span class="text-red-600 dark:text-red-400">"alingment_id"</span>: <span class="text-fuchsia-500 dark:text-fuchsia-400">null</span>, // ID of the character's alignment
      <span class="text-red-600 dark:text-red-400">"home_planet"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Name of the character's home planet
      <span class="text-red-600 dark:text-red-400">"special_abilities"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Name of special abilities
      <span class="text-red-600 dark:text-red-400">"main_weapons"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Name of main weapons
      <span class="text-red-600 dark:text-red-400">"armor"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Name of the armor
      <span class="text-red-600 dark:text-red-400">"vehicle"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Name of the vehicle 
      <span class="text-red-600 dark:text-red-400">"history"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Brief history of the character
      <span class="text-red-600 dark:text-red-400">"significant_battles"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Important battles the character has participated in
      <span class="text-red-600 dark:text-red-400">"relationships"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Important relationships
      <span class="text-red-600 dark:text-red-400">"main_achievements"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Main achievements of the character
      <span class="text-red-600 dark:text-red-400">"creation_date"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Creation date of the character
      <span class="text-red-600 dark:text-red-400">"age"</span>: <span class="text-fuchsia-500 dark:text-fuchsia-400">null</span>, // Character's age (optional)
      <span class="text-red-600 dark:text-red-400">"additional_notes"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Additional notes about the character
      <span class="text-red-600 dark:text-red-400">"image"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span> // URL of the character's image`;

export const bodyAddUser = `<span class="text-red-600 dark:text-red-400">"username"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // User username
      <span class="text-red-600 dark:text-red-400">"email"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // User email
      <span class="text-red-600 dark:text-red-400">"password"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // User password`;

export const bodyUpdateUser = `<span class="text-red-600 dark:text-red-400">"username"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Change username`;

export const outputCharacter =`{
      "id": 1,
      "name": "Roboute Guilliman",
      "race": {
        "id": 1,
        "name": "Human"
      },
      "faction": {
        "id": 1,
        "name": "Imperium of Man"
      },
      "subfaction": {
        "id": 1,
        "name": "Adeptus Astartes"
      },
      "rank": {
        "id": 2,
        "name": "Primarch"
      },
      "alignment": {
        "id": 1,
        "name": "Loyal to the Imperium"
      },
      "home_planet": "Macragge",
      "special_abilities": "Exceptional strategist, extraordinary leadership and administrative skills, combat prowess.",
      "main_weapons": "Gladius Incandor, Hand of Dominion.",
      "armor": "Armor of Fate",
      "vehicle": "",
      "history": "Roboute Guilliman was the Primarch of the Ultramarines Legion and one of the Emperor’s sons. He is known for his role in the Unification of Humanity and his contribution to the creation of the Codex Astartes.",
      "significant_battles": "Battle of Calth, Battle of Macragge, Great Crusade War.",
      "relationships": "Konor Guilliman, Tarasha Euten, Emperor of Mankind, Horus Lupercal, Rogal Dorn, Sanguinius, Leman Russ, Ferrus Manus, Ultramarines Chapter.",
      "main_achievements": "Creation of the Codex Astartes, Lord Commander of the Imperium.",
      "creation_date": "First founding in the 30th century",
      "age": "10,000 years",
      "additional_notes": "",
      "image": ""
    }`;
export const outputAlingment =`{
      "id": 1,
      "name": "Loyal to the Imperium"
    }`;

export const outputFaction =`{
      "id": 1,
      "name": "Imperium of Man"
    }`; 

export const outputRace =`{
      "id": 1,
      "name": "Human"
    }`;

export const outputRank = `{
      "id": 1,
      "name": "God-Emperor"
    },`;

export const outputSubfaction =`{
      "id": 1,
      "name": "Adeptus Astartes",
      "faction_id": 1
    },`;
export const outputUser = `{
      "id": 1,
      "username": "m0r4x",
      "email": "morax@gmail.com",
      "password": "m0r4x"
    }`;
