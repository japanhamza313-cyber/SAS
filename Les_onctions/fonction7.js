const prompt=require("prompt-sync")();
function produitTableau(){
 tab=[];
 for(let i=0 ; i<5 ; i++){
    let n=Number(prompt("entrer un nombre : "));
      tab.push(n);

 }
 let produit=tab.reduce((a,b)=>a*b);
 console.log(produit);
}
 produitTableau();




