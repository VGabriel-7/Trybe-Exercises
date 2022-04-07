const custo = -20;
const valorDeVenda = 100;

let imposto = (custo * custo) / 100;
let calcLucro = (valorDeVenda - custo - imposto) * 1000;

if (custo < 0 || valorDeVenda < 0){
    console.log("ERRO! Um dos valores informados é < 0");
} else {
    console.log(calcLucro);
}