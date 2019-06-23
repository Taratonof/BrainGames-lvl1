import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m > 0) {
    const module = n % m;
    return gcd(m, module);
  }
  return Math.abs(n);
};

const initializationGameGcd = () => {
  const numberOfTheQuestionOne = getRandomInt(0, 10000);
  const numberOfTheQuestionTwo = getRandomInt(0, 10000);
  const dataGame = cons(`${numberOfTheQuestionOne} ${numberOfTheQuestionTwo}`, gcd(numberOfTheQuestionOne, numberOfTheQuestionTwo));
  return dataGame;
};

export default () => playGame(initializationGameGcd, gameInstruction);
