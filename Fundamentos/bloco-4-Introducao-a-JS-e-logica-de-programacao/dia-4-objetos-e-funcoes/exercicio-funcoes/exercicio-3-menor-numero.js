let numbers = [2, 4, 6, 7, 10, 0, -3];
function maiorValor(array) {
    let comparador = 0;
    let indice;

    for (let index = 0; index < array.length; index += 1) {
        comparador = array[index];
        for (let num = 1; num < array.length; num += 1){
            let comparado = numbers[num];
            if (comparador > comparado) {
                comparador = comparado;
                indice = num;
            }
        }
    }
    return indice;
}

console.log(maiorValor(numbers));