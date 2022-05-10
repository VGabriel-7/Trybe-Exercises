const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (student) => {
  const arraySkills = Object.keys(student);
  for (let index in arraySkills) {
    console.log(`${arraySkills[index]}: ${student[arraySkills[index]]}`);
  }
};

skills(student1);