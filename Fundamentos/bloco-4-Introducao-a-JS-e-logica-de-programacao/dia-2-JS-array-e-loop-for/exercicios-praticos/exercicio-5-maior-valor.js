let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparador = 0;

for (let index = 0; index < numbers.length; index += 1) {
    comparador = numbers[index];
    for (let num = 1; num < numbers.length; num += 1){
        let comparado = numbers[num];
        if (comparador < comparado) {
            comparador = comparado;
        }
    }
}

console.log(comparador);