import { cons } from 'hexlet-pairs';
import startGame from '..';
import { randomInt } from '../gameFunctions';

const greatestComDiv = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return greatestComDiv(m, k);
  }
  return Math.abs(n);
};

const gameGcd = () => {
  const firstNumber = randomInt();
  const secondNumber = randomInt();
  const gamePair = cons(`${firstNumber} ${secondNumber}`, greatestComDiv(firstNumber, secondNumber));
  return gamePair;
};

export default () => startGame(gameGcd, 'Find the greatest common divisor of given numbers.');
