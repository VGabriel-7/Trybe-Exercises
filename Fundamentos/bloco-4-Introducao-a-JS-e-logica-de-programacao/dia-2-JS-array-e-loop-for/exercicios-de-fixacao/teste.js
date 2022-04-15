let jogoAelida = [10, 25, 37, 19, 20, 16];

let sorteioLoteria = [10, 30, 24, 7, 28, 46];

acertos = 0;

for(let indexSorteio of sorteioLoteria){
    for(let indexAelida of jogoAelida){
        if(jogoAelida[indexAelida] === sorteioLoteria[indexSorteio]){
            acertos += 1;
        }
    }
}

console.log("Jogo da Aelida: " + jogoAelida);
console.log("Jogo Loteria: " + sorteioLoteria);
console.log("Acertos: " + acertos);