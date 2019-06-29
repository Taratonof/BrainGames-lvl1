import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../functions';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (n, m) => {
  if (m > 0) {
    const module = n % m;
    return greatestCommonDivisor(m, module);
  }
  return Math.abs(n);
};

const generateRound = () => {
  const num1 = getRandomInteger(0, 10000);
  const num2 = getRandomInteger(0, 10000);
  const roundData = cons(`${num1} ${num2}`, greatestCommonDivisor(num1, num2));
  return roundData;
};

export default () => playGame(generateRound, gameInstruction);
