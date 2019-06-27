import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (n, m) => {
  if (m > 0) {
    const module = n % m;
    return greatestCommonDivisor(m, module);
  }
  return Math.abs(n);
};

const creationRoundData = (num1, num2) => {
  const roundData = cons(`${num1} ${num2}`, greatestCommonDivisor(num1, num2));
  return roundData;
};

const generationRound = () => creationRoundData(getRandomInt(0, 10000), getRandomInt(0, 10000));

export default () => playGame(generationRound, gameInstruction);
