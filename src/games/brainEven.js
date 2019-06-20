import { cons } from 'hexlet-pairs';
import startGame from '..';
import { randomInt } from '../gameFunctions';

const isEven = number => number % 2 === 0;

const gameEven = () => {
  const number = randomInt();
  const gamePair = cons(number, isEven(number) ? 'yes' : 'no');
  return gamePair;
};

export default () => startGame(gameEven, 'Answer "yes" if number even otherwise answer "no".');
