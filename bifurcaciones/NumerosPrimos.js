let a = 0;
let n = 1000;

let array = [];

// Verifico que los números primos en el rango especificado
for (let num = a; num <= n; num++) {
    if (num <= 1) continue; // Saltar números menores o iguales a 1
    if (num <= 3) {
        array.push(num);
        continue;
    }

    let esPrimo = true;

    if (num % 2 === 0 || num % 3 === 0) esPrimo = false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) array.push(num);
}

console.log(`Números primos entre ${a} y ${n}:`, array);
