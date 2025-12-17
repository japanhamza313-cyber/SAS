const { compterOccurrences } = require("./fonction4");

const prompt=require("prompt-sync")();

function remplirTableau(length){
    let table=[];
       for (let i=0 ; i<length ; i++){
    let nbr=Number(prompt("entrer un nombre : "));
       table.push(nbr);
    }
    
    console.log(table)
}
remplirTableau(5);compterOccurrences([1, 2, 3, 2, 4, 2], 2);

