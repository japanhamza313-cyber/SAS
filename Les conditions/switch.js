const prompt=require("prompt-sync")()

let note1=Number(prompt("entrer le premier numbre : "));
let note2=Number(prompt("entrer le deuxieme numbre : "));
let note3=Number(prompt("entrer le troisieme numbre : "));
   
let somme=note1+note2+note3;
let moyone=somme/3;
console.log(somme);
console.log(" moyone");

switch(true){
    case (moyone<10):
       console.log("non valide");
       break;
    case (moyone>=10 && moyone<12):
        console.log("validee avec montion passable");
        break;
    case (moyone>=12 && moyone<14):
        console.log("validee avec montion bien");
        break;
    case (moyone>=14 && moyone<20):
        console.log("tres bien")
    }