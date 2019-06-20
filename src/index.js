import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (gameGen, instruction) => {
  console.log('Welcome to the Brain Games!');
  console.log(instruction);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  const iterationGame = 3;
  let correctAnswerCount = 0;
  for (let i = 0; i < iterationGame; i += 1) {
    const gameData = gameGen();
    const condition = car(gameData);
    console.log(`Question: ${condition}`);
    const correctAnswer = `${cdr(gameData)}`;
    const userData = readlineSync.question('Your answer: ');
    if (userData === correctAnswer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userData}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswerCount === iterationGame) {
    console.log(`Congratulations, ${name}!`);
  }
};
