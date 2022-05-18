const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS=['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculatorNotes = (feedback, answers) => {
  let punctuation = 0;
  for (let index in answers) {
      if (feedback[index] === answers[index]) {
        punctuation += 1;
      } else if (answers[index] === 'N.A') {
        punctuation = punctuation;
      } else {
        punctuation -= 0.5;
      }
    }
  console.log(`Sua nota é: ${punctuation}`);
};

const examNotes = (rightAnswers, studentAnswers, func) => func(rightAnswers, studentAnswers);

examNotes(RIGHT_ANSWERS, STUDENT_ANSWERS, calculatorNotes);