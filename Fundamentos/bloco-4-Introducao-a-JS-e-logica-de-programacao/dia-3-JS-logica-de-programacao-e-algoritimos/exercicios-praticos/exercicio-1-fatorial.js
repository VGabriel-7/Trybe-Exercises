const valor = 4;
let fatorial = null;

for (let index = valor; index > 0; index -= 1){
    fatorial += (index - 1) * index;
}

console.log(fatorial);