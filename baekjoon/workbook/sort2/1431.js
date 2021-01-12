const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const regexForNumber = /\d/;

function solution(input) {
  const guitars = input.slice(1);

  const getSumOnlyNumberInGuitar = (guitar) => {
    const sumOnlyNumberInGuitar = guitar.split('').reduce((acc, cur) => {
      if (regexForNumber.test(cur)) {
        acc += Number(cur);
      }
      return acc;
    }, 0);

    return sumOnlyNumberInGuitar;
  };

  const compareLexicographicalOrder = (a, b) => {
    const getCharCode = (char) => {
      return char.charCodeAt(0);
    };

    for (let index = 0; index < a.length; index++) {
      if (a[index] === b[index]) {
        continue;
      }

      return getCharCode(a[index]) - getCharCode(b[index]);
    }
  };

  guitars.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    const aSum = getSumOnlyNumberInGuitar(a);
    const bSum = getSumOnlyNumberInGuitar(b);

    if (aSum !== bSum) {
      return aSum - bSum;
    }

    return compareLexicographicalOrder(a, b);
  });

  return guitars.join('\n');
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
