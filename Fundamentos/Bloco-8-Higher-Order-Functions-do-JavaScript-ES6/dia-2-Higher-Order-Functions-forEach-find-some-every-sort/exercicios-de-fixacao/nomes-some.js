const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const result = arr.some((element) => name === element);
  return result;
}

console.log(hasName(names, 'Ana'))