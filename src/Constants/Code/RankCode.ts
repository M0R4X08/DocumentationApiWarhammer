export const findRankAll = `fetch('https://api-warhammer.vercel.app/api/rank/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findRankAllOutput = `{
  "totalData": 2,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "God-Emperor"
    },
    {
      "id": 2,
      "name": "Primarch"
    }
  ]
}`;


export const findRankSingle = `fetch('https://api-warhammer.vercel.app/api/rank/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findRankSingleOutput = `{
  "data": {
    "id": 1,
    "name": "God-Emperor"
  }
}`;

export const limitResultsRank = `fetch('https://api-warhammer.vercel.app/api/rank/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsRankOutput = `{
  "totalData": 2,
  "totalPages": 2,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "God-Emperor"
    }
  ]
}`;

export const addNewRank = `fetch('https://api-warhammer.vercel.app/api/rank/create',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(
    {
      "name": "", // Rank name
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const addNewRankOutput = `{
  "message": "Rank created successfully",
  "id": 2,
}`;


export const updateRank = `fetch('https://api-warhammer.vercel.app/api/rank/update/1',
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

export const updateRankOutput = `{
  "message": "Rank updated successfully"
}`;
