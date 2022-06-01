const books = require('./arrayExercicio.js')

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

const authorsAge = (array) => array.map((age) => age.releaseYear - age.author.birthYear);

const averageAge = (array) => authorsAge(array)
  .reduce((aculator, current) => aculator + current) / authorsAge(array).length;


console.log(averageAge(books));