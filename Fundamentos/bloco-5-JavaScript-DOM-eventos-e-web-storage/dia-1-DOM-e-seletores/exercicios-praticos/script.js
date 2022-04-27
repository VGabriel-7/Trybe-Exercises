   /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function changeText(tag, index, text) {
	document.getElementsByTagName(tag)[index].innerText = text;
};

const texto = 'Trabalhando, ganhando mais de 5 mil e casado com o amor da minha vida! RAISSA';
changeText('p', 0, texto);

function changeColor(element, index, color) {
	document.getElementsByClassName(element)[index].style.background = color;
};

changeColor('main-content', 0, 'rgb(76,164,109)');

changeColor('center-content', 0, 'white');

changeText('h1', 0, 'Exercício 5.1 - JavaScript');

function upperCase(tag, index) {
	let textoMaiusculo = document.getElementsByTagName(tag)[index].innerText.toUpperCase();
	document.getElementsByTagName(tag)[index].innerText = textoMaiusculo;
};

upperCase('p', 0);

function consoleText(tag) {
	let conteudo = document.querySelectorAll(tag);
	for (let index in conteudo){
		console.log(conteudo[index]);
	}
};

consoleText('p');