import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const creationRoundData = (questionArg) => {
  const question = questionArg;
  const roundData = cons(question, isEven(question) ? 'yes' : 'no');
  return roundData;
};

const generationRound = () => creationRoundData(getRandomInt(0, 10000));

export default () => playGame(generationRound, gameInstruction);
