//control de bucles
let lista=[1,2,3,4,5,6,7,8,9];

for(let i=0; i < lista.length; i++){
    //Exclusion del bucle
    if(lista[i] ===5){
        continue;
    }
    console.log(lista[i])

    //interrumpir el bucle
    if(lista[i]>5){
        break;
    }
    console.log(lista[i])
}