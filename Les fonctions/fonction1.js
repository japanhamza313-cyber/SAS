const prompt=require("prompt-sync")();

const arr=[]
function remplirTableau(length){

    for(let i=1 ; i<=5; i++){
length=Number(prompt("entrer vos number : "));

arr.push(length);

    }
    console.log(arr);
}
remplirTableau()



