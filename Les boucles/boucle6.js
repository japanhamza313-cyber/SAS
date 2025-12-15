const prompt=require("prompt-sync")();
let base=Number(prompt("entrer un nombre : "));
let expo=Number(prompt("entrer un nombre : "));

let resultat = 1 ;
let i = 0 ;

while (i < expo) {
    resultat *= base;
    i++;
}

console.log(base + "^" + expo + "=" + resultat);


