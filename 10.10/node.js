const fs = require('fs');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumbers() {
  const numbers = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = getRandomInt(-420, 2137);
    numbers.push(randomNumber);
  }
  return numbers;
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data.join('\n'), 'utf8');
  console.log('Data has been written to the file.');
}

const timestamp = Date.now();
const fileName = `random-${timestamp}.txt`;
const randomNumbers = generateRandomNumbers();

writeToFile(fileName, randomNumbers);
