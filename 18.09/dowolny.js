const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
  rl.question('Guess the number (1-100): ', (guess) => {
    const userGuess = parseInt(guess);

    if (isNaN(userGuess)) {
      console.log('Please enter a valid number.');
    } else {
      attempts++;

      if (userGuess === targetNumber) {
        console.log(`Congratulations! You guessed it in ${attempts} attempts.`);
        rl.close();
      } else if (userGuess < targetNumber) {
        console.log('Too low! Try again.');
        guessNumber();
      } else {
        console.log('Too high! Try again.');
        guessNumber();
      }
    }
  });
}

console.log('Welcome to the Number Guessing Game!');
guessNumber();
