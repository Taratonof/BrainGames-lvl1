import { cons } from 'hexlet-pairs';
import { greetingGame, startGame } from '..';

const randomInt = () => Math.floor(Math.random() * 100);

const randomIntArray = arr => Math.floor(Math.random() * arr.length);

const randomProgressionArray = () => {
  const pgNumber = randomInt();
  let acc = randomInt();
  const pgArray = [];
  for (let i = 0; i < 10; i += 1) {
    pgArray.push(acc);
    acc += pgNumber;
  }
  return pgArray;
};

export default () => {
  const name = greetingGame('Find the greatest common divisor of given numbers.');
  const arr1 = randomProgressionArray();
  const deleteNumber1 = randomIntArray(arr1);
  const winData1 = arr1[deleteNumber1];
  arr1[deleteNumber1] = '..';

  const arr2 = randomProgressionArray();
  const deleteNumber2 = randomIntArray(arr2);
  const winData2 = arr2[deleteNumber2];
  arr2[deleteNumber2] = '..';

  const arr3 = randomProgressionArray();
  const deleteNumber3 = randomIntArray(arr3);
  const winData3 = arr3[deleteNumber3];
  arr3[deleteNumber3] = '..';

  const pair1 = cons(arr1.join(' '), `${winData1}`);
  const pair2 = cons(arr2.join(' '), `${winData2}`);
  const pair3 = cons(arr3.join(' '), `${winData3}`);

  console.log(startGame(pair1, pair2, pair3, name));
};
