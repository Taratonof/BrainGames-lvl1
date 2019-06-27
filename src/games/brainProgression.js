import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'What number is missing in the progression?';

const progressionLengthCount = 10;

const getRandomProgression = (progressionStep, acc, progressionLength) => {
  const progressionAcc = [];
  let accum = acc;
  for (let i = 0; i < progressionLength; i += 1) {
    progressionAcc.push(accum);
    accum += progressionStep;
  }
  return progressionAcc;
};

const creationRoundData = (progressionArg) => {
  const progression = progressionArg;
  const indexToDelete = getRandomInt(0, progression.length - 1);
  const elementToDelete = progression[indexToDelete];
  progression[indexToDelete] = '..';
  const roundData = cons(progression.join(' '), `${elementToDelete}`);
  return roundData;
};

const generationRound = () => creationRoundData(
  getRandomProgression(getRandomInt(0, 10000),
    getRandomInt(0, 10000), progressionLengthCount),
);

export default () => playGame(generationRound, gameInstruction);
