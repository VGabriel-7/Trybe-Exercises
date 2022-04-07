let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let comparador = 0;

for (let index = 0; index < numbers.length; index += 1){
    comparador = numbers[index];
    for (let numero = 1; numero < numbers.length; numero += 1){
        let numComparado = numbers[numero];
        if (comparador > numComparado){
            comparador = numComparado;
        }
    }
}

console.log(comparador);