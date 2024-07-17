/* Bucle while estructura
while(***){
    Serie de instrucciones
}
*/
//while
let i= 0;
let a = 10;

while(i<a){
console.log(i);
i++; //<== se debe agregar el incremento ya que de lo contrario no se ejecutaria y se haria un bucle infinito
}

//do-while
i =10;
do{
    console.log("El bucle Do while")
    i++;
}while(i<a)
