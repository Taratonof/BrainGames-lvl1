import readlineSync from 'readline-sync';

export const actual = () => {
	let name = readlineSync.question('May I have your name? ');
	return 'Hello, ' + name + '!';
}
