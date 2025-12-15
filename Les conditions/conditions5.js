const prompt=require("prompt-sync")();
let n=Number(prompt("entrer votre note"))

if (n>=90 && n<=100){
    console.log("A");
}
else if (n>=80 && n<=89){
    console.log("B");
}
else if (n>=70 && n<=79){
    console.log("c");
}
else if (n>=60 && n<=69){
    console.log("d");
}
else{console.log("F")
}