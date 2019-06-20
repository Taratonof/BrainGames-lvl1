import { cons } from 'hexlet-pairs';
import startGame from '..';
import { randomInt } from '../gameFunctions';

const isPrime = (number) => {
  if ((number % 2 === 0) && (number !== 2)) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const actualNumber = Math.round(Math.sqrt(number));

  for (let i = 2; i < actualNumber + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const number = randomInt();
  const gamePair = cons(number, isPrime(number) ? 'yes' : 'no');
  return gamePair;
};

export default () => startGame(gamePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
