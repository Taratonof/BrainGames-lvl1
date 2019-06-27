import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  const actualOfTheCheck = Math.round(Math.sqrt(number));

  for (let i = 2; i < actualOfTheCheck + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const creationRoundData = (question) => {
  const roundData = cons(question, isPrime(question) ? 'yes' : 'no');
  return roundData;
};

const generationRound = () => creationRoundData(getRandomInt(0, 1000));

export default () => playGame(generationRound, gameInstruction);
