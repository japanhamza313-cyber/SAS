const prompt=require("prompt-sync")();
let number=[];
let somme=0;
for(i=0 ; i<10 ; i++){
let n=Number(prompt("entrer un noumbre : "));
number.push(n);
somme+= n ;
}
let moyone=somme/10;
console.log("lasomme = "+ somme + "la moyone"+moyone);