const prompt=require("prompt-sync")();
function moyenne(){
tab=[];
for(let i=0 ; i<4 ; i++){
    let n=Number(prompt("entrer un nombre : "));
    tab.push(n);
    }
    let moyone=tab.reduce((a,b)=>(a+b))/tab.length;
    console.log(moyone);
    }
    moyenne();