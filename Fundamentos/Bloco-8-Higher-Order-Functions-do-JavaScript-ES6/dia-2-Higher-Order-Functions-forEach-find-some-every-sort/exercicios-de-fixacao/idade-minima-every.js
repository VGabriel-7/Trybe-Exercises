const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 1 },
  { name: 'Ana', age: 18 },
  { name: 'Cláudia', age: 18 },
  { name: 'Bruna', age: 18 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  const result = arr.every((age) => age.age === minimumAge);
  return result;
}

console.log(verifyAges(people, 18));