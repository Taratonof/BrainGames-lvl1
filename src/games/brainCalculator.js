import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getOperation = () => operations[getRandomInt(0, operations.length - 1)];

const creationRoundData = (num1, num2, operation) => {
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  const roundData = cons(`${num1} ${operation} ${num2}`, correctAnswer);
  return roundData;
};

const generationRound = () => creationRoundData(
  getRandomInt(0, 10000), getRandomInt(0, 10000), getOperation(),
);

export default () => playGame(generationRound, gameInstruction);
