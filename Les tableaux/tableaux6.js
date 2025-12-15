const prompt=require("prompt-sync")();
let tableau=[];
for(let i=1 ; i<=5 ; i++){
    let nombre=parseInt(prompt("entrer un nombre : "));
    tableau.push(nombre);
}
let cares=tableau.map(Element=>Element*Element);
console.log(cares);


