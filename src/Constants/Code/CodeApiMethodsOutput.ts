export function findOutput(data: string, currentPage: number, totalPages: number, totalResults: number,limit?:boolean) {
  return `{
  "totalData": ${totalResults},
  "totalPages": ${totalPages},
  "currentPage": ${currentPage},
  "data": [
    ${data}
    ${limit ?``:`/*...*/`}
  ]
}`;
}

export function findSingleOutput(data: string) {
  return `{
  "data": [
    ${data}
  ]
}`;
}

export function addNewOutput(classname: string, id:number) {
  return `{
  "message": "${classname} updated successfully",
  "id": ${id}
}`;
}

export function updateOutput(classname: string) {
  return `{
  "message": "${classname} updated successfully"
}`;
}

export function loginOutput() {
  return `{
  "message": "User logged in successfully",
  "token": "token"
}`;
}
