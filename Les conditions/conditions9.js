const prompt=require("prompt-sync")();
let n=Number(prompt("entrer un numbre"));

if (n%3===0){
    console.log("fizz");
}
else if (n%5===0){
    console.log("buzz")
}
else if (n%3===0 && n%5===0){
    console.log("fizz buzz")
}
else{
    console.log("le meme nombre")
}