// Suma de todos los números impares del 0 al 1000
let suma = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 2 != 0) {
        suma += i;
    }
}
console.log("Suma de todos los números impares del 0 al 1000: ", suma);