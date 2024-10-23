
export const login = `fetch('https://api-warhammer.vercel.app/api/user/login',
{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(
  {
    "username": "", // User username or email 
    "email": "",
    "password": "", // User password

  })
})
.then((response) => response.json())
.then((data) => console.log(data))
`;
export const loginOutput = `
{
  "message": "User logged in successfully",
  "token": "token"
}`;