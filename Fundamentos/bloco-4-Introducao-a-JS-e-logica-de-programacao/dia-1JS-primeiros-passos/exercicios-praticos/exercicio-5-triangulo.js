const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 50;

let calcTriangulo = angulo1 + angulo2 + angulo3;

if (calcTriangulo == 180) {
    console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("!Erro! Um dos ângulos não pode ser negativo");
} else {
    console.log(false);
}