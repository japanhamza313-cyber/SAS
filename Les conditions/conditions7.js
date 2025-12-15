const prompt=require("prompt-sync")();
let n=prompt("mot de pass : ");

const chifre=/[0-9]/.test(n);
const caracteres=/[/[$)-@!_?;,&(){}<>]/.test(n);

if (n.length>=8 && chifre && caracteres ){
    console.log("fort");
}
else if (n.length>=6 && chifre ){
    console.log("moyone");
}
else{
    console.log("faible")
}
