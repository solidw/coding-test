const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const T = input[0];
  const cases = input.slice(1);

  const answer = [];

  for (let t = 0; t < T; t++) {
    const [N, M] = cases[t * 3];
    const AGroup = cases[t * 3 + 1].split(' ').map((a) => Number(a));
    const BGroup = cases[t * 3 + 2].split(' ').map((a) => Number(a));
    AGroup.sort((a, b) => a - b);
    BGroup.sort((a, b) => a - b);

    let cursor = 0;

    let quantity = 0;
    for (let AFish = 0; AFish < AGroup.length; AFish++) {
      const AGroupFishSize = AGroup[AFish];

      while (BGroup[cursor] < AGroupFishSize) {
        cursor += 1;
      }

      quantity += cursor;
    }
    answer.push(quantity);
  }

  return answer.join('\n');
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
