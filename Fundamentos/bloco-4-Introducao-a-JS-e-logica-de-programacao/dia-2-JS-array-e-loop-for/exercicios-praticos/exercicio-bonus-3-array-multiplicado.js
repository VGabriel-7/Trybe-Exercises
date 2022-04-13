// Criar um array (multipliedNumbers) a paritr do array numbers para receber a multiplicação dos indices 
// Cirar um loop para fazer a iteração de cada elemento do array numbers
// Mutliplicar os elementos do array numbers
// Atribuir os elementos multiplicados no array multipliedNumbers
// Consolar o array multipliedNumbers

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];

for (let index = 1; index < numbers.length; index += 1){
    for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1){
        let multiplicacao = numbers[index] * numbers[secondIndex];
        multipliedNumbers.push(multiplicacao);
    }
}

console.log(multipliedNumbers);
