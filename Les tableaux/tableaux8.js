const prompt=require("prompt-sync")();
let chaine=prompt("entrer votre word : ");

let voyolle=["a", "e", "i", "o", "u", "y"]

let resultat=chaine
.split("")
.map(Element=>voyolle.includes(Element)? Element : "")
.join("")
console.log(resultat);



