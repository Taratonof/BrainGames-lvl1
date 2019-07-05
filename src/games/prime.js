import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../functions';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const roundData = cons(question, correctAnswer);
  return roundData;
};

export default () => playGame(generateRound, gameInstruction);
