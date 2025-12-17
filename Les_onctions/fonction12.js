const prompt=require("prompt-sync")();
function tableMultiplication(){

    let tab=[1,2,3,4,5,6,7,8,9,10];
let n=Number(prompt("entrer un nombre : "));
let table=tab.map(el=>el*n);
  console.log(table);
}
tableMultiplication();