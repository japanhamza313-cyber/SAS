const prompt=require("prompt-sync")();

let tab=[];
function maxTableau(){
    let nbr=Number(prompt("combient de fois voulez-vous entrer de valeur :")) //5
    for(let i=0 ; i<nbr; i++ ){
        let n=Number(prompt("entrer un nombre : "));
        tab.push(n)
    }console.log(tab);
    let max=Math.max(...tab);
    console.log(max);
}
maxTableau();