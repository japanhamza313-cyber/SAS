
function compterOccurrences(tab, valeur){
    
    tab=[2,1,3,4,2,5,1,2,];
    console.log(tab);
valeur=tab.filter(element=>element===2).length;
    console.log(valeur);
return(valeur);
}


compterOccurrences();
