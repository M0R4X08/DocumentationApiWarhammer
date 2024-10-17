export const findCharactersAll = `fetch('https://localhost:3000/api/characters/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findCharacterAllOutput = `{
  "totalData": 19,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
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
    },
    /*...*/
  ]
}
`;

export const findCharacterSingle = `fetch('https://localhost:3000/api/characters/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findCharacterSingleOutput = `{
  "data": [
    {
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
    }
  ]
}`;

export const limitResultsCharacters = `fetch('https://localhost:3000/api/characters/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsCharactersOutput = `{
  "totalData": 19,
  "totalPages": 19,
  "currentPage": 1,
  "data": [
    {
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
    }
  ]
}`;

export const addNewCharacter = `fetch('https://localhost:3000/api/characters/create',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(
    {
      "name": "", // Character's name
      "race_id": null, // ID of the character's race
      "faction_id": null, // ID of the character's faction
      "subfaction_id": null, // ID of the subfaction
      "rank_id": null, // ID of the character's rank
      "alingment_id": null, // ID of the character's alignment
      "home_planet": "", // Name of the character's home planet
      "special_abilities": "", // Name of special abilities
      "main_weapons": "", // Name of main weapons
      "armor": "", // Name of the armor
      "vehicle": "", // Name of the vehicle 
      "history": "", // Brief history of the character
      "significant_battles": "", // Important battles the character has participated in
      "relationships": "", // Important relationships
      "main_achievements": "", // Main achievements of the character
      "creation_date": "", // Creation date of the character
      "age": null, // Character's age (optional)
      "additional_notes": "", // Additional notes about the character
      "image": "" // URL of the character's image
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const addNewCharacterOutput = `{
    "message": "Character created successfully",
    "id": 20,
}
`;

export const updateCharacter = `fetch('https://localhost:3000/api/characters/update/1',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
      body: JSON.stringify(
      {
      "name":"Change Name"
      })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const updateCharacterOutput = `{
  "message": "Characters updated successfully"
}`;

export const findUserAll = `fetch('https://localhost:3000/api/user/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findUserAllOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "username": "m0r4x",
      "email": "morax@gmail.com",
      "password": "m0r4x"
    }
  ]
}`;


export const findUserSingle = `fetch('https://localhost:3000/api/user/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findUserSingleOutput = `{
  "data": {
    "id": 1,
    "username": "m0r4x",
    "email": "morax@gmail.com",
    "password": "m0r4x"
  }
}`;

export const limitResultsUser = `fetch('https://localhost:3000/api/user/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsUserOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "username": "m0r4x",
      "email": "morax@gmail.com",
      "password": "m0r4x"
    }
  ]
}`;

export const addNewUser = `fetch('https://localhost:3000/api/user/create',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(
    {
      "username": "", // User username
      "email": "", // User email
      "password": "", // User password

    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const addNewUserOutput = `{
  "message": "User created successfully",
  "id": 2,
}`;


export const updateUser = `fetch('https://localhost:3000/api/user/update/1',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
      body: JSON.stringify(
      {
      "username":"Change username"
      })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const updateUserOutput = `{
  "message": "Characters updated successfully"
}`;

export const loginOutput = `
{
  "message": "User logged in successfully",
  "token": "token"
}`;