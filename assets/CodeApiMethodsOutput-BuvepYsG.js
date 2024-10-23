function s(t,u,e,n,a){return`{
  "totalData": ${n},
  "totalPages": ${e},
  "currentPage": ${u},
  "data": [
    ${t}
    ${a?"":"/*...*/"}
  ]
}`}function r(t){return`{
  "data": [
    ${t}
  ]
}`}function d(t,u){return`{
  "message": "${t} updated successfully",
  "id": ${u}
}`}function c(t){return`{
  "message": "${t} updated successfully"
}`}function o(){return`{
  "message": "User logged in successfully",
  "token": "token"
}`}export{d as addNewOutput,s as findOutput,r as findSingleOutput,o as loginOutput,c as updateOutput};
