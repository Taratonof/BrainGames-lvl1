import { cons } from 'hexlet-pairs';
import { greetingGame, startGame, randomInt } from '..';

const even = number => number % 2 === 0;

export default () => {
  const name = greetingGame('Answer "yes" if number even otherwise answer "no".');
  const number1 = randomInt();
  const pair1 = cons(number1, even(number1) ? 'yes' : 'no');
  const number2 = randomInt();
  const pair2 = cons(number2, even(number2) ? 'yes' : 'no');
  const number3 = randomInt();
  const pair3 = cons(number3, even(number3) ? 'yes' : 'no');
  console.log(startGame(pair1, pair2, pair3, name));
};
