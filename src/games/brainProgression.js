import { cons } from 'hexlet-pairs';
import startGame from '..';
import { randomInt, randIndexArray } from '../gameFunctions';

const randomProgression = () => {
  const pgNumber = randomInt();
  let acc = randomInt();
  const pgArray = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    pgArray.push(acc);
    acc += pgNumber;
  }
  return pgArray;
};

const gameProgression = () => {
  const progression = randomProgression();
  const deleteNumber = randIndexArray(progression);
  const winData = progression[deleteNumber];
  progression[deleteNumber] = '..';
  const gamePair = cons(progression.join(' '), `${winData}`);
  return gamePair;
};

export default () => startGame(gameProgression, 'What number is missing in the progression?');
