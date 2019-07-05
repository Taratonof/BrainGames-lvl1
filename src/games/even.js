import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../functions';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateRound = () => {
  const question = getRandomInteger(0, 10000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const roundData = cons(question, correctAnswer);
  return roundData;
};

export default () => playGame(generateRound, gameInstruction);
