const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const answer = [];
  const [N, K] = input[0].split(' ').map((nk) => Number(nk));
  const people = Array(N + 1).fill(1);
  people[0] = 0;

  let index = K;
  let count = 0;
  answer.push(index);

  for (let i = 0; i < N - 1; i++) {
    people[index] = 0;

    count = 0;

    while (count < K) {
      if (answer.length === N) {
        break;
      }

      index += 1;
      index %= N + 1;

      if (people[index] !== 0 && index !== 0) {
        count += 1;
      }
    }
    answer.push(index);
  }
  const answerString = '<' + answer.join(', ') + '>';
  return answerString;
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
