// Cria um array e imprime o tamanho dele
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

// Consola um elemento expecífico do array (1ª item)
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

// Consola um elemento expecífico do array (ultimo item)
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

// Adiciona mais uma tarefa ao final do array taskList
tasksList.push('Fazer exercícios da Trybe');  
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Adiciona mais uma tarefa ao início do array taskList
tasksList.unshift('Se vestir');
console.log(tasksList);
// ['Se vestir','Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Remove a última tarefa
tasksList.pop();
console.log(tasksList);
// ['Se vestir','Tomar café', 'Reunião', 'Brincar com o cachorro']

// Remove a primeria tarefa
tasksList.shift();
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro']

// Mostra o index do elemento expecificado do array
let indexOfTask = tasksList.indexOf('Tomar café');
console.log(indexOfTask);
// 0