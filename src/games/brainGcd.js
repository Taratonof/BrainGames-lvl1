import { cons } from 'hexlet-pairs';
import { greetingGame, startGame } from '..';

const randomInt = () => Math.floor(Math.random() * 1000);

const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  }
  return Math.abs(n);
};

export default () => {
  const name = greetingGame('Find the greatest common divisor of given numbers.');
  const number1 = randomInt();
  const number2 = randomInt();
  const number3 = randomInt();
  const number4 = randomInt();
  const number5 = randomInt();
  const number6 = randomInt();
  const nod1 = nod(number1, number2);
  const nod2 = nod(number3, number4);
  const nod3 = nod(number5, number6);
  const pair1 = cons(`${number1} ${number2}`, `${nod1}`);
  const pair2 = cons(`${number3} ${number4}`, `${nod2}`);
  const pair3 = cons(`${number5} ${number6}`, `${nod3}`);
  console.log(startGame(pair1, pair2, pair3, name));
};
