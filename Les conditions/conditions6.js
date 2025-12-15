const prompt=require("prompt-sync")();
let year=Number(prompt("votre year: "));

 
 if (year%400===0 || (year%4===0) && year%100 !==0 ){
    console.log("bissextille");
 }
 else {
    console.log("non bissextille");
 }
