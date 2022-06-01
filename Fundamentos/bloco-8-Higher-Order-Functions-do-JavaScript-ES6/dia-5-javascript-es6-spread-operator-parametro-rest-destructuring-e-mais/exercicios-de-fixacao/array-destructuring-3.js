let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [num1, num2, num3, num4] = numerosPares.filter((number) => number % 2 === 0);

const numbersPairs = [num1, num2, num3, num4];

console.log(numbersPairs); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo