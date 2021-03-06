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
  const [N, M] = input[0].split(' ').map(Number);
  const mazeString = input.slice(1);
  const map = mazeString.map((row) => row.split('').map(Number));

  const visited = Array(N)
    .fill()
    .map(() =>
      Array(M)
        .fill()
        .map(() => Array(2).fill(0)),
    );

  const queue = [];
  const start = [0, 0, 0];
  queue.push(start);
  visited[0][0][0] = 1;

  while (queue.length > 0) {
    const [y, x, wall] = queue.shift();

    if (y === N - 1 && x === M - 1) {
      console.log(visited[y][x][wall]);
      return;
    }

    moves.forEach(([my, mx]) => {
      const movedY = y + my;
      const movedX = x + mx;

      // Check index
      if (movedY < 0 || movedY >= N || movedX < 0 || movedX >= M) {
        return;
      }

      // No need to break
      if (map[movedY][movedX] === 0 && visited[movedY][movedX][wall] === 0) {
        visited[movedY][movedX][wall] = visited[y][x][wall] + 1;
        queue.push([movedY, movedX, wall]);
      }

      // Need to break
      else if (map[movedY][movedX] === 1 && wall === 0 && visited[movedY][movedX][wall + 1] === 0) {
        visited[movedY][movedX][wall + 1] = visited[y][x][wall] + 1;
        queue.push([movedY, movedX, wall + 1]);
      }
    });
  }
  console.log(-1);
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
