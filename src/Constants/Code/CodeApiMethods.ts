export function findAll(classname: string) {
    return `<span class="text-sky-600 dark:text-sky-500">fetch</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'https://api-warhammer.vercel.app/api/${classname}/all'</span>)
        <span class="text-sky-600 dark:text-sky-500">.then</span>((response) <span class="text-sky-600 dark:text-sky-500">=></span> response.<span class="text-sky-600 dark:text-sky-500">json</span>()) 
        <span class="text-sky-600 dark:text-sky-500">.then</span>((data) <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">log</span>(data))
        <span class="text-fuchsia-500 dark:text-fuchsia-400">.catch</span>(error <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">error</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'Error:'</span>, error));`;
  }
  
export function findSingle(classname: string, id: number) { 
return `<span class="text-sky-600 dark:text-sky-500">fetch</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'https://api-warhammer.vercel.app/api/${classname}/${id}'</span>)
      <span class="text-sky-600 dark:text-sky-500">.then</span>((response) <span class="text-sky-600 dark:text-sky-500">=></span> res.<span class="text-sky-600 dark:text-sky-500">json</span>()) 
      <span class="text-sky-600 dark:text-sky-500">.then</span>((data) <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">log</span>(data))
      <span class="text-fuchsia-500 dark:text-fuchsia-400">.catch</span>(error <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.error(<span class="text-lime-600/85 dark:text-lime-300/75">'Error:'</span>, error));`;
}

export function limitResults(classname: string, page: number, limit: number) {
    return `<span class="text-sky-600 dark:text-sky-500">fetch</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'https://api-warhammer.vercel.app/api/${classname}/all?page=${page}&limit=${limit}'</span>)
        <span class="text-sky-600 dark:text-sky-500">.then</span>((response) <span class="text-sky-600 dark:text-sky-500">=></span> response.<span class="text-sky-600 dark:text-sky-500">json</span>()) 
        <span class="text-sky-600 dark:text-sky-500">.then</span>((data) <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">log</span>(data))
        <span class="text-fuchsia-500 dark:text-fuchsia-400">.catch</span>(error <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">error</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'Error:'</span>, error));`;
  }
  

  export function addNew(classname: string, body: string) {
    return `<span class="text-sky-600 dark:text-sky-500">fetch</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'https://api-warhammer.vercel.app/api/${classname}/create'</span>,
    {
      <span class="text-red-600 dark:text-red-400">method</span>: <span class="text-lime-600/85 dark:text-lime-300/75">'POST'</span>,
      <span class="text-red-600 dark:text-red-400">headers</span>: {
        <span class="text-red-600 dark:text-red-400">'Content-Type'</span>: <span class="text-lime-600/85 dark:text-lime-300/75">'application/json'</span>,
        <span class="text-red-600 dark:text-red-400">'Authorization'</span>: <span class="text-lime-600/85 dark:text-lime-300/75">token</span>,
      },
      <span class="text-red-600 dark:text-red-400">body</span>: <span class="text-yellow-600">JSON</span>.<span class="text-sky-600 dark:text-sky-500">stringify</span>(
      {
      ${body}
      })
    })
    .<span class="text-sky-600 dark:text-sky-500">then</span>((response) <span class="text-sky-600 dark:text-sky-500">=></span> response.<span class="text-sky-600 dark:text-sky-500">json</span>())
    .<span class="text-sky-600 dark:text-sky-500">then</span>((data) <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">log</span>(data))`;
  }
  

export function update(classname: string, id: number, body: string) {
    return `<span class="text-sky-600 dark:text-sky-500">fetch</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'https://api-warhammer.vercel.app/api/${classname}/update/${id}'</span>,
    {
      <span class="text-red-600 dark:text-red-400">method</span>: <span class="text-lime-600/85 dark:text-lime-300/75">'PUT'</span>,
      <span class="text-red-600 dark:text-red-400">headers</span>: {
        <span class="text-red-600 dark:text-red-400">'Content-Type'</span>: <span class="text-lime-600/85 dark:text-lime-300/75">'application/json'</span>,
        <span class="text-red-600 dark:text-red-400">'Authorization'</span>: <span class="text-lime-600/85 dark:text-lime-300/75">token</span>,
      },
      <span class="text-red-600 dark:text-red-400">body</span>: <span class="text-yellow-600">JSON</span>.<span class="text-sky-600 dark:text-sky-500">stringify</span>(
      {
        ${body}
      })
    })
    .<span class="text-sky-600 dark:text-sky-500">then</span>((response) <span class="text-sky-600 dark:text-sky-500">=></span> response.<span class="text-sky-600 dark:text-sky-500">json</span>())
    .<span class="text-sky-600 dark:text-sky-500">then</span>((data) <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">log</span>(data));`;
}

export function login(){
  return `<span class="text-sky-600 dark:text-sky-500">fetch</span>(<span class="text-lime-600/85 dark:text-lime-300/75">'https://api-warhammer.vercel.app/api/user/login'</span>,
{
  <span class="text-red-600 dark:text-red-400">method</span>: <span class="text-lime-600/85 dark:text-lime-300/75">'POST'</span>,
  <span class="text-red-600 dark:text-red-400">headers</span>: {
    <span class="text-red-600 dark:text-red-400">'Content-Type'</span>: <span class="text-lime-600/85 dark:text-lime-300/75">'application/json'</span>,
  },
  <span class="text-red-600 dark:text-red-400">body</span>: <span class="text-yellow-600">JSON</span>.<span class="text-sky-600 dark:text-sky-500">stringify</span>(
  {
    <span class="text-red-600 dark:text-red-400">"username"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // User username or email</span>
    <span class="text-red-600 dark:text-red-400">"email"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>,
    <span class="text-red-600 dark:text-red-400">"password"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // User password
  })
})
.<span class="text-sky-600 dark:text-sky-500">then</span>((response) <span class="text-sky-600 dark:text-sky-500">=></span> response.<span class="text-sky-600 dark:text-sky-500">json</span>())
.<span class="text-sky-600 dark:text-sky-500">then</span>((data) <span class="text-sky-600 dark:text-sky-500">=></span> <span class="text-yellow-600">console</span>.<span class="text-sky-600 dark:text-sky-500">log</span>(data));`;
}