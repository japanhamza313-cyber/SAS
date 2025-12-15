const prompt=require("prompt-sync")();
let     n= Number(prompt("entrer votre age : "));

if (n<18){
    console.log("eligibe");
}
else if( n>18){
    console.log("non eligible");
}