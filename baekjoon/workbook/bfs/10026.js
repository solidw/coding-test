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
  const N = Number(input[0]);

  const painting = input.slice(1).map((row) => row.split(''));

  let visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));

  const dfs = ([ny, nx]) => {
    visited[ny][nx] = true;
    moves.forEach(([my, mx]) => {
      const movedY = ny + my;
      const movedX = nx + mx;

      if (movedY < 0 || movedY >= N || movedX < 0 || movedX >= N) {
        return;
      }

      if (!visited[movedY][movedX] && painting[movedY][movedX] === painting[ny][nx]) {
        dfs([movedY, movedX]);
      }
    });
  };

  let normal = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!visited[y][x]) {
        dfs([y, x]);
        normal += 1;
      }
    }
  }

  visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (painting[y][x] === 'R') {
        painting[y][x] = 'G';
      }
    }
  }

  let abnormal = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!visited[y][x]) {
        dfs([y, x]);
        abnormal += 1;
      }
    }
  }
  console.log(normal, abnormal);
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
