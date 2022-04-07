let pecaDeXadrez = "Peão";

switch (pecaDeXadrez.toLowerCase()) { 
    case "peão":
        console.log("Pode andar 1 ou 2 casas para frente.");
        break;
    
    case "cavalo":
        console.log("Se move em formato de L.");
        break;

    case "bispo":
        console.log("Se movem apenas na diagonal, mas podem ir de um canto a outro do tabuleiro.");
        break;

    case "torre":
        console.log("Se move ao longo das linhas retas, se houver espaço, ela pode ir de um lado a outro do tabuleiro.");
        break;

    case "rainha":
        console.log("Ela pode se mover na diagonal dos bispos e na linha reta das torres.");
        break;

    case "rei":
        console.log("Se move para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
        break;
    
    default:
        console.log("Essa peça não existe! Verifique se o nome da foi digitado corretamente.");
}

// Referencia dos movimentos no site http://www.professoramanuka.com.br/2016/10/nomes-e-movimentos-das-pecas-de-xadrez.html
// Referência do toLowerCase no site https://www.w3schools.com/js/default.asp