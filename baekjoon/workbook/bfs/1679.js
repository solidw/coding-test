const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getNextPositions = (position) => [position + 1, position - 1, position * 2];

function solution(input) {
  const [N, K] = input[0].split(' ').map((nk) => Number(nk));

  const road = Array(100001).fill(-1);

  road[N] = 0;
  const queue = [];
  queue.push(N);

  let queueCursor = 0;
  let answer = 0;

  while (queueCursor < queue.length) {
    if (answer !== 0) {
      break;
    }

    const position = queue[queueCursor];
    let nextPositions = [];
    if (position > K) {
      nextPositions = [position - 1];
    } else {
      nextPositions = getNextPositions(position);
    }

    nextPositions.forEach((nextPosition) => {
      if (road[nextPosition] !== -1) {
        return;
      }

      road[nextPosition] = road[position] + 1;
      if (nextPosition === K) {
        answer = road[nextPosition];
      }

      queue.push(nextPosition);
    });

    queueCursor += 1;
  }

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
