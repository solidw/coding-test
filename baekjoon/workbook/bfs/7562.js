const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const knightMoves = [
  [2, 1],
  [1, 2],
  [-2, 1],
  [-1, 2],
  [-2, -1],
  [-1, -2],
  [2, -1],
  [1, -2],
];

function solution(input) {
  const T = Number(input[0]);

  for (let t = 0; t < T; t++) {
    const N = Number(input[t * 3 + 1]);
    const [currentY, currentX] = input[t * 3 + 2].split(' ').map(Number);
    const [targetY, targetX] = input[t * 3 + 3].split(' ').map(Number);

    const board = Array(N)
      .fill()
      .map(() => Array(N).fill(Number.MAX_VALUE));

    const queue = [];
    queue.push([currentY, currentX]);
    board[currentY][currentX] = 0;

    while (queue.length > 0) {
      const [y, x] = queue.shift();
      if (y === targetY && x === targetX) {
        break;
      }

      knightMoves.forEach(([ny, nx]) => {
        const movedY = y + ny;
        const movedX = x + nx;

        if (movedY < 0 || movedY >= N || movedX < 0 || movedX >= N) {
          return;
        }

        if (board[movedY][movedX] !== Number.MAX_VALUE) {
          return;
        }

        board[movedY][movedX] = Math.min(board[movedY][movedX], board[y][x] + 1);
        queue.push([movedY, movedX]);
      });
    }
    console.log(board[targetY][targetX]);
  }
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
