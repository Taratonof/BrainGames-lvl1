import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInteger from '../functions';

const gameInstruction = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operation) => {
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
  return correctAnswer;
};

const generateRound = () => {
  const num1 = getRandomInteger(0, 10000);
  const num2 = getRandomInteger(0, 10000);
  const operation = operations[getRandomInteger(0, operations.length - 1)];
  const correctAnswer = getCorrectAnswer(num1, num2, operation);
  const roundData = cons(`${num1} ${operation} ${num2}`, correctAnswer);
  return roundData;
};

export default () => playGame(generateRound, gameInstruction);
