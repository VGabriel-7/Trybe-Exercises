const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const result = names.find((name) => name.length === 5);
  return result;
}

console.log(findNameWithFiveLetters());