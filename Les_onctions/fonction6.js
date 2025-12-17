const prompt=require("prompt-sync")();

      function filtrerPairs(){
        let tab=[]
    for(let i=1 ; i<=5 ; i++){
    let n=Number(prompt("entrer un nombre : "))
        tab.push(n)
  
    }
        let pairr=tab.filter(el=>el%2===0)
    
    console.log(pairr);
     }
    filtrerPairs();
