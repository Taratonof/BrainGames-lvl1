import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../functions';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (progressionStep, startValue, length) => {
  const progression = [];
  let acc = startValue;
  for (let i = 0; i < length; i += 1) {
    progression.push(acc);
    acc += progressionStep;
  }
  return progression;
};

const generateRound = () => {
  const progressionStep = getRandomInteger(0, 10000);
  const startValue = getRandomInteger(0, 10000);
  const progression = getProgression(progressionStep, startValue, progressionLength);
  const indexElementToDelete = getRandomInteger(0, progression.length - 1);
  const elementToDelete = progression[indexElementToDelete];
  progression[indexElementToDelete] = '..';
  const roundData = cons(progression.join(' '), `${elementToDelete}`);
  return roundData;
};

export default () => playGame(generateRound, gameInstruction);
