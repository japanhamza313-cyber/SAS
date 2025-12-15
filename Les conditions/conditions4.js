const prompt=require("prompt-sync")();
let a=Number(prompt("a= "))
let b=Number(prompt("b= "))

if (a>b){
    console.log(a)
}
else if (a<b){
    console.log(b)
}
else{
    console.log("c'est le méme ")
}