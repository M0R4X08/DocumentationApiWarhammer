export const findCharactersAll = `fetch('https://localhost:3000/api/characters/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findCharacterSingle = `fetch('https://localhost:3000/api/characters/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsCharacters = `fetch('https://localhost:3000/api/characters/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

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

export const findUserAll = `fetch('https://localhost:3000/api/user/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findUserSingle = `fetch('https://localhost:3000/api/user/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsUser = `fetch('https://localhost:3000/api/user/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

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