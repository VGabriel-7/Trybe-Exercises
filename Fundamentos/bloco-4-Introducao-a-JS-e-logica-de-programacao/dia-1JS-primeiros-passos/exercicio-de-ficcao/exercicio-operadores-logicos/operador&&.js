const curerntHour = 11;
let message = "";

if (curerntHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (curerntHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
} else if (curerntHour >= 14 && curerntHour <18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (curerntHour >= 11 && curerntHour < 14) {
    message = "Hora do almoço!!!";
} else if (curerntHour >= 4 && curerntHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);