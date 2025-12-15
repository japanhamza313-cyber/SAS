const prompt=require("prompt-sync")();

 let note1=Number(prompt("CONTROLLE1 : "));
let note2=Number(prompt("CONTROLLE2 : "));
let Note3=Number(prompt("CONTROLLE3 : "));

let somme=note1+note2+Note3
let moyone=somme/3

if(moyone<10){
    console.log("non valide ")

}
else if(moyone>=10 && moyone<12){
    console.log("validé avec montion passable ")
}
else if (moyone>=12 && moyone<14){
    console.log(moyone +" validation avec montion passable")
   
}
else {
        console.log(" validation avec montion bien")
}










