import{_ as o}from"./index-CFHWEPFS.js";const{findAll:s,findSingle:p,limitResults:l,addNew:f,update:r}=await o(async()=>{const{findAll:t,findSingle:i,limitResults:d,addNew:e,update:c}=await import("./CodeApiMethods-CQpew0Qy.js");return{findAll:t,findSingle:i,limitResults:d,addNew:e,update:c}},[]),{findOutput:u,findSingleOutput:_,addNewOutput:O,updateOutput:m}=await o(async()=>{const{findOutput:t,findSingleOutput:i,addNewOutput:d,updateOutput:e}=await import("./CodeApiMethodsOutput-BuvepYsG.js");return{findOutput:t,findSingleOutput:i,addNewOutput:d,updateOutput:e}},[]),{bodyUpdate:w,outputFaction:n}=await o(async()=>{const{bodyUpdate:t,outputFaction:i}=await import("./CodeDataMethods-Ccf_JVus.js");return{bodyUpdate:t,outputFaction:i}},[]),a="faction",b=[{id:"faction-find-all",subtitle:"Faction find all",code:s(a),codeOutput:u(n,1,1,1)},{id:"faction-find-single",subtitle:"Faction find single",code:p(a,1),codeOutput:_(n)},{id:"faction-limit",subtitle:"Limit results",code:l(a,1,1),codeOutput:u(n,1,1,1)},{id:"faction-add",subtitle:"Add new faction",code:f(a,'<span class="text-red-600 dark:text-red-400">"name"</span>: <span class="text-lime-600/85 dark:text-lime-300/75">""</span>, // Faction name'),codeOutput:O("Faction",2)},{id:"faction-update",subtitle:"Update faction",code:r(a,1,w),codeOutput:m("Faction")}];export{b as CodeListFaction};
