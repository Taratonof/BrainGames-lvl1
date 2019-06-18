import { cons } from 'hexlet-pairs';
import { greetingGame, startGame, randomInt } from '..';

const prime = (number) => {
  if ((number % 2 === 0) && (number !== 2)) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const k = Math.round(Math.sqrt(number));

  for (let i = 2; i < k + 1; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const name = greetingGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number1 = randomInt();
  const pair1 = cons(number1, prime(number1) ? 'yes' : 'no');
  const number2 = randomInt();
  const pair2 = cons(number2, prime(number2) ? 'yes' : 'no');
  const number3 = randomInt();
  const pair3 = cons(number3, prime(number3) ? 'yes' : 'no');

  console.log(startGame(pair1, pair2, pair3, name));
};
