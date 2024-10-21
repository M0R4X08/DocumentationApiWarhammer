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
