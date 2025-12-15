const prompt=require("prompt-sync")();
let number = [];
for(i=0 ; i<5 ; i++){
    let entree=parseInt(prompt("entrer un entier : "))
     number.push(entree);
}
let inverses=number.reverse();
console.log("les numbre dans order inverse : "+ inverses.join(""))
