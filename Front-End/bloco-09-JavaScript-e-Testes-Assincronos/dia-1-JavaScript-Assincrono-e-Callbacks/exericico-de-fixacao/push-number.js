const pushNumber = (list, number) => list.push(number);

let numbers = [];

// pushNumber(numbers, 1);
setTimeout(() => pushNumber(numbers, 1), 1000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]
setTimeout(() => console.log(numbers), 1000);