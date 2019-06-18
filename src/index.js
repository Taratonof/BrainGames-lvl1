import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const actual = str => readlineSync.question(str);

export const greetingGame = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(str);
  console.log('');
  const name = actual('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  return name;
};

export const randomInt = () => Math.floor(Math.random() * 1000);

export const startGame = (pair1, pair2, pair3, name) => {
  const pairArray = [pair1, pair2, pair3];
  for (let i = 0; i < 3; i += 1) {
    const data = car(pairArray[i]);
    console.log(`Question: ${data}`);
    const userData = actual('Your answer: ');

    if (userData === cdr(pairArray[i])) {
      console.log('Correct!');
    } else {
      return `'${userData}' is wrong answer ;(. Correct answer was '${cdr(pairArray[i])}'.\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
