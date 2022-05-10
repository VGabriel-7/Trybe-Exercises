const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, 
// sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const createKeyValue = (object, key, valueKey) => object[key] = valueKey;

createKeyValue(lesson2, 'turno', 'noite');


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => {
  const arrayObject = Object.keys(object);
  for (let index in arrayObject) {
    console.log(`${parseInt(index) + 1}- ${arrayObject[index]}`);
  }
}

// listKeys(lesson3);


// Crie uma função para mostrar o tamanho de um objeto.
const sizeObject = (object) => console.log(Object.keys(object).length);

sizeObject(lesson3);


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (object) => {
  const arrayObject = Object.values(object);
  for (let index in arrayObject) {
    console.log(`${parseInt(index) + 1}- ${arrayObject[index]}`);
  }
}

// listValues(lesson1);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave
//  desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), 
// a saída deverá ser a seguinte:
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

// console.log(allLessons);