export const findSubFactionAll = `fetch('https://localhost:3000/api/subfaction/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findSubFactionAllOutput = `{
  "totalData": 2,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Adeptus Astartes",
      "faction_id": 1
    },
    {
      "id": 2,
      "name": "Adeptus Custodes",
      "faction_id": 1
    }
  ]
}`;


export const findSubFactionSingle = `fetch('https://localhost:3000/subfaction/race/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findSubFactionSingleOutput = `{
  "data": [
    {
      "id": 1,
      "name": "Adeptus Astartes",
      "faction_id": 1
    },
    {
      "id": 2,
      "name": "Adeptus Custodes",
      "faction_id": 1
    }
  ]
}`;

export const limitResultsSubFaction = `fetch('https://localhost:3000/api/subfaction/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsSubFactionOutput = `{
  "totalData": 2,
  "totalPages": 2,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Adeptus Astartes",
      "faction_id": 1
    }
  ]
}`;

export const addNewSubFaction = `fetch('https://localhost:3000/api/subfaction/create',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(
    {
      "name": "", // Race name
      "faction_id": null // Faction id
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const addNewSubFactionOutput = `{
  "message": "SubFaction created successfully",
  "id": 3,
}`;


export const updateSubFaction = `fetch('https://localhost:3000/api/subfaction/update/1',
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

export const updateSubFactionOutput = `{
  "message": "SubFaction updated successfully"
}`;
