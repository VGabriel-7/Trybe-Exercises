// Dado um salário bruto, calcule o líquido a ser recebido.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, 
// com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
// 
// Do salário bruto é descontado o INSS e o IR.
// INSS:
// Até 1556.94: 8%
// De 1556.95 a  2.594.92: 9%
// De  2594.93 a 5189.82: 11% 
// Salário bruto acima de 5189.82: Máxima de 570.88
// 
// IR:
//  Até 1903.98: isento de imposto de renda
// De 1903.99 a 2826.65: alíquota de 7.5% e parcela de R$ 142,80 a deduzir do imposto
// De 2826.66 a 3751.05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De 3751.06 a 4664.68: alíquota de 22.5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4664.68: alíquota de 27.5% e parcela de R$ 869,36 a deduzir do imposto 
// 

let salarioBruto = 3000.00;
let aliquotaInss = null; 
let aliquotaIr = null;
let salarioLiquido = null;

// Calcula salario bruto menos Inss:
if (salarioBruto <= 1556.94){
    aliquotaInss = (8 * salarioBruto) / 100;
    salarioBruto -= aliquotaInss;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaInss = (9 * salarioBruto) / 100;
    salarioBruto -= aliquotaInss;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaInss = (11 *  salarioBruto) / 100;
    salarioBruto -= aliquotaInss;
} else {
    salarioBruto -= 570.88;
} 

// Calcula salario base menos IR a deduzir do INSS:
if (salarioBruto <= 1903.98) {
    console.log("Salário isento de IR.");
    console.log("Salário líquido: " + salarioBruto);
}else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    aliquotaIr = (7.5 * salarioBruto) / 100 - 142.80;
    salarioLiquido = salarioBruto - aliquotaIr;
    console.log(salarioLiquido);
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    aliquotaIr = (15 * salarioBruto) / 100 - 354.80;
    salarioLiquido = salarioBruto - aliquotaIr;
    console.log(salarioLiquido);
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    aliquotaIr = (22.5 * salarioBruto) / 100 - 636.13;
    salarioLiquido = salarioBruto - aliquotaIr;
    console.log(salarioLiquido);
} else {
    aliquotaIr = (27.5 * salarioBruto) / 100 - 869,36;
    salarioLiquido = salarioBruto - aliquotaIr;
    console.log(salarioLiquido);
}