let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

for(let valores in info){
    if (info[valores] === info2[valores]) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[valores] + ' e ' + info2[valores]);
    }   
}