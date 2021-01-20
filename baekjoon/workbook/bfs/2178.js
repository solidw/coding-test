const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function checkValidIndex(index, maxLength) {
  return index >= 0 && index < maxLength;
}

function solution(input) {
  const [N, M] = input[0].split(' ').map((i) => Number(i));
  const maze = Array(N)
    .fill()
    .map(() => Array(M).fill());

  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(Number.MAX_VALUE));

  const mazeStrings = input.slice(1);
  mazeStrings.forEach((mazeString, index) => {
    maze[index] = mazeString.split('');
  });

  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = 1;
  while (queue.length > 0) {
    const [y, x] = queue.shift();
    move.forEach((m) => {
      const [mY, mX] = m;
      const movedY = y + mY;
      const movedX = x + mX;
      if (checkValidIndex(movedY, maze.length) && checkValidIndex(movedX, maze[0].length)) {
        if (visited[movedY][movedX] === Number.MAX_VALUE && maze[movedY][movedX] === '1') {
          queue.push([movedY, movedX]);
          if (visited[y][x] + 1 < visited[movedY][movedX]) {
            visited[movedY][movedX] = visited[y][x] + 1;
          }
        }
      }
    });
  }

  return visited[N - 1][M - 1];
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
