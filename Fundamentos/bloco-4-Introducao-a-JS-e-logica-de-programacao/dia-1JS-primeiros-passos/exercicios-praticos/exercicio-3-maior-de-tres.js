const primeiroNum = 59;
const segundoNum = 9;
const terceiroNum = 7;
let maiorNumero = "";

if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    maiorNumero = "Primeiro número é o maior!";
} else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    maiorNumero = "Segundo número é o maior!"
} else {
    maiorNumero = "Terceiro número é o maior!"
}

console.log(maiorNumero);