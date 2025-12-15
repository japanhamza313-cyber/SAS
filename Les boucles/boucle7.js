const prompt=require("prompt-sync")();
let somme=0;
 for(let i=0 ; i<10 ; i++){
let n=Number(prompt("entrer un nombre : "));
 
if(n>=0){
   somme += n;
}
 }
 console.log("somme : ", + somme );
 