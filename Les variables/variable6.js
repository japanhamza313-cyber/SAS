const prompt=require("prompt-sync")({});
let distance = (Number(prompt("entrer un nombre")));
let vitesse= (Number(prompt("entrer un nombre")));

let temps=(distance/vitesse)

console.log (temps)
