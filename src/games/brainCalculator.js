import { cons } from 'hexlet-pairs';
import startGame from '..';
import { randomInt, randIndexArray } from '../gameFunctions';

const gameCalculator = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = randomInt();
  const secondNumber = randomInt();
  const matOperation = operations[randIndexArray(operations)];
  let correctAnswer;

  switch (matOperation) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  const gamePair = cons(`${firstNumber} ${matOperation} ${secondNumber}`, correctAnswer);
  return gamePair;
};

export default () => startGame(gameCalculator, 'What is the result of the expression?');
