import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'What number is missing in the progression?';

const getRandomProgression = () => {
  const numberProgression = getRandomInt(0, 10000);
  let acc = getRandomInt(0, 10000);
  const progressionAcc = [];
  const progressionLengthCount = 10;
  for (let i = 0; i < progressionLengthCount; i += 1) {
    progressionAcc.push(acc);
    acc += numberProgression;
  }
  return progressionAcc;
};

const initializationGameProgression = () => {
  const progression = getRandomProgression();
  const indexToDelete = getRandomInt(0, progression.length - 1);
  const numberToDelete = progression[indexToDelete];
  progression[indexToDelete] = '..';
  const dataGame = cons(progression.join(' '), `${numberToDelete}`);
  return dataGame;
};

export default () => playGame(initializationGameProgression, gameInstruction);
