const prompt=require("prompt-sync")();
let strings=[];
for (let i = 0; i < 3; i++) {
    let text=prompt("entrer un mot : ");
    strings.push(text);
}

let searchText=prompt("votre mot recherche : ");
let position =strings.indexOf(searchText);

if (position !== -1) {
  console.log("le mot"+ searchText+ "est trouve a la position  "+ position+ ".");
}else {
    console.log("le mot pas trouve");
    
}

