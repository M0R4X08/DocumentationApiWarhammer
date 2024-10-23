export const findFactionAll = `fetch('https://api-warhammer.vercel.app/api/faction/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findFactionAllOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Imperium of Man"
    }
  ]
}`;


export const findFactionSingle = `fetch('https://api-warhammer.vercel.app/api/faction/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findFactionSingleOutput = `{
  "data": {
    "id": 1,
    "name": "Imperium of Man"
  }
}`;

export const limitResultsFaction = `fetch('https://api-warhammer.vercel.app/api/faction/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsFactionOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Imperium of Man"
    }
  ]
}`;

export const addNewFaction = `fetch('https://api-warhammer.vercel.app/api/faction/create',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(
    {
      "name": "", // Race name
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const addNewFactionOutput = `{
  "message": "Faction created successfully",
  "id": 2,
}`;


export const updateFaction = `fetch('https://api-warhammer.vercel.app/api/faction/update/1',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
      body: JSON.stringify(
      {
      "name":"Change name"
      })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const updateFactionOutput = `{
  "message": "Faction updated successfully"
}`;
