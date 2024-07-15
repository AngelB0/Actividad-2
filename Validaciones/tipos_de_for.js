//for
/* estructura
for (inicializacion; codificacion; actualizacion ){
bucle
}

let i = 0;

i= i+1;
i += 1;

i++
i--
*/

//TIPOS DE FOR

// for 
for (let i = 0; i< 10; i++){
    //AQUI VA UN BUCLE
        console.log(i);
}
let lista = [1,4,6,8,10,15,18]
for(let i = 0; i < lista.length /* LONGITUD DE LA CADENA */; i++){
   console.log (lista[i]); 
}
// for...of
for(let valor of lista){
    console.log(valor)
}
//forEach
lista.forEach(valor => /*esta es una arrow function*/{
    console.log(valor);
})

// for... in
let persona  = {
    nombre : "Mary",
    apellido : "GuPi",
    edad :22,
    isDeveloper : true
    }

    console.log(persona.nombre)

    let prop = "edad";
    console.log(persona[prop])

for(let propiedad in persona){
   console.log(propiedad);
   console.log(persona[propiedad])
}
