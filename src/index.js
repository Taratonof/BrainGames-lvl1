import readlineSync from 'readline-sync';

export const actual = str => readlineSync.question(str);

export const even = number => number % 2 === 0;

export const randomInt = () => parseInt(Math.random() * 100, 10);

export const brainGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(`Hello, ${actual('May I have your name? ')}!`);
};

const startEvenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = randomInt();
    console.log(`Question: ${number}`);
    const data = actual('Your answer: ');

    if (even(number)) {
      if (data === 'yes') {
        console.log('Correct!');
      } else {
        return `'${data}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, `;
      }
    }
    if (!even(number)) {
      if (data === 'no') {
        console.log('Correct!');
      } else {
        return `'${data}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, `;
      }
    }
  }
  return 'Congratulations, ';
};

export const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const name = actual('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  console.log(`${startEvenGame()} ${name}!`);
};
