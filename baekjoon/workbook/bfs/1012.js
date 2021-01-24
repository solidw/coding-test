const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const isSafeIndex = ([x, y], [lengthX, lengthY]) => {
  return 0 <= x && x < lengthX && 0 <= y && y < lengthY;
};

function solution(input) {
  const T = Number(input.shift());
  const answer = [];

  for (let t = 0; t < T; t++) {
    const [M, N, K] = input
      .shift()
      .split(' ')
      .map((mnk) => Number(mnk));

    const field = Array(N)
      .fill()
      .map(() =>
        Array(M)
          .fill()
          .map(() => 0),
      );

    const visited = Array(N)
      .fill()
      .map(() => Array(M).fill(false));

    const stack = [];

    for (let k = 0; k < K; k++) {
      const [x, y] = input
        .shift()
        .split(' ')
        .map((xy) => Number(xy));

      stack.push([y, x]);
      field[y][x] = 1;
    }

    let count = 0;

    while (stack.length > 0) {
      const [curY, curX] = stack.pop();

      if (!visited[curY][curX]) {
        count += 1;
      }

      moves.forEach(([my, mx]) => {
        const newY = curY + my;
        const newX = curX + mx;

        if (!isSafeIndex([newY, newX], [N, M])) {
          return;
        }

        if (field[newY][newX] === 0) {
          return;
        }

        if (visited[newY][newX]) {
          return;
        }

        visited[newY][newX] = true;
        stack.push([newY, newX]);
      });
    }
    answer.push(count);
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
