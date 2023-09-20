const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
  rl.question('Zgadnij numer od 1 do 100 ', (guess) => {
    const userGuess = parseInt(guess);


      if (userGuess === targetNumber) {
        console.log(`Poprawni`);
        rl.close();
      } else if (userGuess < targetNumber) {
        console.log('za maly');
        guessNumber();
      } else {
        console.log('za duzy');
        guessNumber();
      }
    }
  });
}

console.log('Zgadnij liczbe');
guessNumber();
