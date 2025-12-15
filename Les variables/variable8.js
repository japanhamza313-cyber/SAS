const prompt=require("prompt-sync")();
let number=prompt("entrer un number");
let inverse=number.toString().split('').reverse().join('');
console.log(inverse);