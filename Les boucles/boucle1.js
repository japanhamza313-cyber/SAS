const prompt =require("prompt-sync")();
let nombre = prompt("entrer un numbre : ");
for( let i = 1 ; i <= 10 ; i++){
    console.log( nombre + '*' + i + '=' + nombre * i);
    
}



