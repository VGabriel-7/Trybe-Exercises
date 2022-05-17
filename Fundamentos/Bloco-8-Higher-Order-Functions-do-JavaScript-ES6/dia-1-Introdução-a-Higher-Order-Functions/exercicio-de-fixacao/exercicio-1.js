const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const toSleep = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (func) => console.log(func());

doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!