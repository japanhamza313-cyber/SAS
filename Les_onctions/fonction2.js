const prompt=require("prompt-sync")();

    function sommeTableau() {
        tab = [];
let somme  = 0;
for (let i = 0; i < 5 ; i++) {
    let n = Number(prompt("entrer un nombre : "))
    tab.push(n);
}
console.log(tab);
     somme = tab.reduce((a,b) => a+b , 0);
     console.log(somme);
     
     return somme;
    }

sommeTableau();

