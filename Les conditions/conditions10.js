const prompt=require("prompt-sync")();
let user=prompt("user name : ").toLocaleLowerCase();
let mt=Number(prompt("mot de pass : "));

if (user==="admin" && mt===1234){
    console.log("bienvenus admin")
}
else if (user==="admin " || mt!==1234){
    console.log("Mot de passe incorrect");
}
else{
    console.log("Utilisateur introuvable")
}