import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomInt from '../gameFunctions';

const gameInstruction = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const initializationGameCalculator = () => {
  const numberOfTheQuestionOne = getRandomInt(0, 10000);
  const numberOfTheQuestionTwo = getRandomInt(0, 10000);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = numberOfTheQuestionOne + numberOfTheQuestionTwo;
      break;
    case '-':
      correctAnswer = numberOfTheQuestionOne - numberOfTheQuestionTwo;
      break;
    case '*':
      correctAnswer = numberOfTheQuestionOne * numberOfTheQuestionTwo;
      break;
    default:
      break;
  }
  const dataGame = cons(`${numberOfTheQuestionOne} ${operation} ${numberOfTheQuestionTwo}`, correctAnswer);
  return dataGame;
};

export default () => playGame(initializationGameCalculator, gameInstruction);
