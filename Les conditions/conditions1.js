const prompt=require("prompt-sync")();
let n=parseInt(prompt("entrer un nombre"));

if(n % 2 === 0){
    console.log("le numbre est pair");
}
else{console.log("le number est inpair");}