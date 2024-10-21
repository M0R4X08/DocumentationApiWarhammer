export const findRaceAll = `fetch('https://localhost:3000/api/race/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findRaceAllOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Human"
    }
  ]
}`;


export const findRaceSingle = `fetch('https://localhost:3000/api/race/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findRaceSingleOutput = `{
  "data": [
    {
      "id": 1,
      "name": "Human"
    }
  ]
}`;

export const limitResultsRace = `fetch('https://localhost:3000/api/race/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsRaceOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Human"
    }
  ]
}`;

export const addNewRace = `fetch('https://localhost:3000/api/Race/create',
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

export const addNewRaceOutput = `{
  "message": "Race created successfully",
  "id": 2,
}`;


export const updateRace = `fetch('https://localhost:3000/api/Race/update/1',
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

export const updateRaceOutput = `{
  "message": "Race updated successfully"
}`;
