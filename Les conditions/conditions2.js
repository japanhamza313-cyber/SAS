const prompt=require("prompt-sync")();
let n= Number(prompt("entrer un nombre"));
 
if(n<0){
    console.log("le nombre,est negatife");
}
else if(n>0){
    console.log("le numbre est positive");
}
else(console.log("le number est nule"));