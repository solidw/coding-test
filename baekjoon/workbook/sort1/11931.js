const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const N = input[0];
  const numbers = input.slice(1);

  numbers.sort((a, b) => b - a);

  const answer = numbers.join('\n');
  return answer;
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
