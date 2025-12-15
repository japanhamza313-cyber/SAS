// const prompt = require("prompt-sync")();
// let n=Number(prompt("entrer un nombre : "));

// const string=n.toString();
// const arr=string.split("");
//  let result="";
//   for(let i=arr.length -1; i>=0 ; i--){
//     result+=arr[i];
//   }
//   console.log(result);
//           challenge 4:
const prompt=require("prompt-sync")();
let n=Number(prompt("entrer un nombre : "));

const string=n.toString();
const arr=string.split("");
  let result="";
for(let i=arr.length - 1 ; i>=0 ; i--){
    result+=arr[i];
}
console.log(result);