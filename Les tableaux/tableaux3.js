const prompt=require("prompt-sync")();

let nombres = [];

for (let i = 0; i < 8; i++) {
    let n = parseInt(prompt("Entrez un entier : "));
    nombres.push(n);
}


let recherche = parseInt(prompt("Entrez le nombre à rechercher : "));

let position = nombres.indexOf(recherche);

if (position !== -1) {
    console.log("Le nombre " + recherche + " est présent à la position : " + position);
} else {
    console.log("Le nombre " + recherche + " n'est pas présent dans le tableau.");
}
