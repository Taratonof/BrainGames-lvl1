import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if ((number % 2 === 0) && (number !== 2)) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const numberActualOfTheCheck = Math.round(Math.sqrt(number));

  for (let i = 2; i < numberActualOfTheCheck + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const initializationGamePrime = () => {
  const numberOfTheQuestion = getRandomInt(0, 1000);
  const dataGame = cons(numberOfTheQuestion, isPrime(numberOfTheQuestion) ? 'yes' : 'no');
  return dataGame;
};

export default () => playGame(initializationGamePrime, gameInstruction);
