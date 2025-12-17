const prompt=require("prompt-sync")();
tab=[];
function doubler(){
for(let i=0 ; i<3; i++){
let n=Number(prompt("entrer un nombre : "));
tab.push(n)
}
let double=tab.map(el=>el*2);
console.log(double);
}
doubler();