import { cons } from 'hexlet-pairs';
import { greetingGame, startGame } from '..';

const pairArr = [
  cons('3 + 5', '8'),
  cons('7 + 4', '11'),
  cons('43 + 23', '66'),
  cons('9 * 9', '81'),
  cons('12 * 3', '36'),
  cons('7 * 2', '14'),
  cons('21 * 4', '84'),
  cons('9 - 5', '4'),
  cons('137 - 45', '92'),
  cons('64 - 51', '13'),
  cons('23 - 9', '14')];

const randIndexArray = arr => Math.floor(Math.random() * arr.length);

export default () => {
  const name = greetingGame('What is the result of the expression?');
  console.log(startGame(
    pairArr[randIndexArray(pairArr)],
    pairArr[randIndexArray(pairArr)],
    pairArr[randIndexArray(pairArr)], name,
  ));
};
