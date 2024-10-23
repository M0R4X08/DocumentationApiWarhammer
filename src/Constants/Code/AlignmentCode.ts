export const findAlignmentAll = `fetch('https://api-warhammer.vercel.app/api/alignment/all')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));`;

export const findAlignmentAllOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Loyal to the Imperium"
    }
  ]
}`;


export const findAlignmentSingle = `fetch('https://api-warhammer.vercel.app/api/alignment/1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const findAlignmentSingleOutput = `{
  "data": [
    {
      "id": 1,
      "name": "Loyal to the Imperium"
    }
  ]
}`;

export const limitResultsAlignment = `fetch('https://api-warhammer.vercel.app/api/alignment/all?page=1&limit=1')
      .then((response) => res.json()) 
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));
`;

export const limitResultsAlignmentOutput = `{
  "totalData": 1,
  "totalPages": 1,
  "currentPage": 1,
  "data": [
    {
      "id": 1,
      "name": "Loyal to the Imperium"
    }
  ]
}`;

export const addNewAlignment = `fetch('https://api-warhammer.vercel.app/api/alignment/create',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(
    {
      "name": "", // Alignment name
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
`;

export const addNewAlignmentOutput = `{
  "message": "Alignment created successfully",
  "id": 2,
}`;


export const updateAlignment = `fetch('https://api-warhammer.vercel.app/api/alignment/update/1',
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

export const updateAlignmentOutput = `{
  "message": "Alignment updated successfully"
}`;
