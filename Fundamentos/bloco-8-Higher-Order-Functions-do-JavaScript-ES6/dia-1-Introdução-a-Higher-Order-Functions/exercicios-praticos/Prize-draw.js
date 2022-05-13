// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número 
// sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const prizeDraw = (number, func) => {
  const numberPrizeDraw = Math.floor((Math.random() * 5) + 1);
  func(number, numberPrizeDraw);
};

prizeDraw(3, (bet, drawn) => {
  if (bet === drawn) {
    console.log(bet, drawn);
    console.log('Parabéns você ganhou!');
  } else {
    console.log(bet, drawn);
    console.log('Tente novamente');
  }
});