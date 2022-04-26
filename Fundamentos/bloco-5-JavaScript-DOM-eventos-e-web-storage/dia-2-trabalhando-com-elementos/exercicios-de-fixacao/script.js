// document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red';

// document.querySelector('#primeiroFilhoDoFilho').innerText = "Labachure canta.";

// document.querySelector('#pai').firstElementChild;

// document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

// console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// console.log(document.querySelector('#pai').children[2]);

let pai = document.querySelector('#pai');

let irmao = document.createElement('div');

pai.appendChild(irmao);

// Cria um filho para elementoOndevoceEsta
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

let filho = document.createElement('div');

ondeVoceEsta.appendChild(filho);

// Cria um filho para primeiroFilhoDoFilho
let filhoDoFilho1 = document.querySelector('#primeiroFilhoDoFilho');

let filhoDoFilhoDoFilho = document.createElement('div');

filhoDoFilho1.appendChild(filhoDoFilhoDoFilho);

console.log(document.querySelector('#primeiroFilhoDoFilho').firstElementChild);