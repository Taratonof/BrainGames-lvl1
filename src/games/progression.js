import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../functions';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (progressionStep, startingValue, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startingValue + progressionStep * i);
  }
  return progression;
};

const generateRound = () => {
  const step = getRandomInteger(0, 10000);
  const init = getRandomInteger(0, 10000);
  const progression = getProgression(step, init, progressionLength);
  const hiddenElementIndex = getRandomInteger(0, progression.length - 1);
  const question = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const roundData = cons(progression.join(' '), question.toString());
  return roundData;
};

export default () => playGame(generateRound, gameInstruction);
