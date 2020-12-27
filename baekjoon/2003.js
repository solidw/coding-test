const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [N, M] = input[0].split(' ').map((nm) => Number(nm));
  const numbers = input[1].split(' ').map((nm) => Number(nm));

  let start = 0;
  let end = 0;
  let answer = 0;
  while (!(start >= numbers.length || end >= numbers.length)) {
    const sum = numbers.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0);

    if (sum < M) {
      end += 1;
    } else if (sum > M) {
      start += 1;
    } else {
      answer += 1;
      end += 1;
    }
  }

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
