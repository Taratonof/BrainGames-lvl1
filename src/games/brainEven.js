import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const initializationGameEven = () => {
  const numberOfTheQuestion = getRandomInt(0, 10000);
  const dataGame = cons(numberOfTheQuestion, isEven(numberOfTheQuestion) ? 'yes' : 'no');
  return dataGame;
};

export default () => playGame(initializationGameEven, gameInstruction);
