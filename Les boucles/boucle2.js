const prompt = require("prompt-sync")();
let n=Number(prompt("entrer un nombre : "));
let premier=true
if(n>=2){
    for(i=2 ; i<n ; i++){
         premier=false;
        break;
    }
    if(premier){
        console.log("premier")
    }
    else{
console.log("NON premier")
    }

}else{
    console.log("non FOUND")
}