const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const words = input.slice(1);

  const wordsSet = new Set(words);

  const nonDuplicatedWords = [...wordsSet];

  nonDuplicatedWords.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i].charCodeAt(0) === b[i].charCodeAt(0)) {
        continue;
      }
      return a[i].charCodeAt(0) - b[i].charCodeAt(0);
    }
  });

  const answer = nonDuplicatedWords.join('\n');
  return answer;
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
