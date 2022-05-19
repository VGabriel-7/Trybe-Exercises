// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'Pêra', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Tomate', 'Abacaxi', 'Maracujá'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));