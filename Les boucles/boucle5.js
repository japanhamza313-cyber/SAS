const prompt=require("prompt-sync")();
let n=Number(prompt("entrer un nombre : "));

console.log(`les nombre premier de 2 jusqau ${n} sont : `);
for(let num=2 ; num<=n ; num++){
    let estpremier = true ;
for(diviseur=2 ; diviseur<num ; diviseur++){
    if(num%diviseur === 0 ){
    estpremier = false;
    break;
    }
}
if (estpremier){
    console.log(num);
}
}
