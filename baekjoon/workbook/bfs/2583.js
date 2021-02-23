const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moves = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(input) {
  const [M, N, K] = input[0].split(' ').map(Number);
  const paper = Array(M)
    .fill()
    .map(() => Array(N).fill(0));

  for (let k = 0; k < K; k++) {
    const [x1, y1, x2, y2] = input[k + 1].split(' ').map(Number);
    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        paper[y][x] = -1;
      }
    }
  }

  const emptySpace = [];

  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (paper[y][x] === 0) {
        emptySpace.push([y, x]);
      }
    }
  }

  const stack = emptySpace;
  let group = 1;
  const groupTable = {};

  while (stack.length > 0) {
    const [y, x] = stack.pop();
    if (paper[y][x] === -1) {
      continue;
    }

    if (paper[y][x] === 0) {
      paper[y][x] = group;
      groupTable[group] = 1;
      group += 1;
    }

    // make group
    moves.forEach(([my, mx]) => {
      const movedY = y + my;
      const movedX = x + mx;
      if (movedY < 0 || movedY >= M || movedX < 0 || movedX >= N) {
        return;
      }

      if (paper[movedY][movedX] !== 0) {
        return;
      }

      paper[movedY][movedX] = paper[y][x];
      groupTable[paper[y][x]] += 1;
      stack.push([movedY, movedX]);
    });
  }
  console.log(Object.keys(groupTable).length);
  const answer = Object.values(groupTable)
    .sort((a, b) => a - b)
    .join(' ');

  console.log(answer);
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
