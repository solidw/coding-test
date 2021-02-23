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

  const stack = [];
  const houses = input.slice(1).map((row, rowIndex) =>
    row.split('').map((cell, cellIndex) => {
      if (cell === '1') {
        stack.push([rowIndex, cellIndex]);
      }
      return Number(cell);
    }),
  );

  let group = 2;
  const groupTable = {};

  while (stack.length > 0) {
    const [y, x] = stack.pop();
    if (houses[y][x] === 0) {
      continue;
    }

    if (houses[y][x] === 1) {
      houses[y][x] = group;
      groupTable[group] = 1;
      group += 1;
    }

    moves.forEach(([mY, mX]) => {
      const movedY = y + mY;
      const movedX = x + mX;
      if (movedY < 0 || movedY >= N || movedX < 0 || movedX >= N) {
        return;
      }

      if (houses[movedY][movedX] !== 1) {
        return;
      }

      houses[movedY][movedX] = houses[y][x];
      groupTable[houses[y][x]] += 1;
      stack.push([movedY, movedX]);
    });
  }

  console.log(Object.keys(groupTable).length);
  console.log(
    Object.values(groupTable)
      .sort((a, b) => a - b)
      .join('\n'),
  );
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
