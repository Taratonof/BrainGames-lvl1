import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;

export default (generationRound, instruction) => {
  console.log('Welcome to the Brain Games!');
  console.log(instruction);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < roundsCount; i += 1) {
    const round = generationRound();
    const condition = car(round);
    console.log(`Question: ${condition}`);
    const correctAnswer = `${cdr(round)}`;
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
