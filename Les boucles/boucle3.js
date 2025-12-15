const prompt = require("prompt-sync")();

let array=[];

while (true){
    let n= Number(prompt("entrer un nombre : "));

if(n>=100){
    break;
}

else if(n<100 && /[1-9]0/.test(n)){
    array.push(n);

  let sum=0;

for(let index=0 ; index<array.length ; index++){
sum+=array[index];
}

console.log("la somme :",sum)
console.log("le maximum :",Math.max(...array));
}
}
