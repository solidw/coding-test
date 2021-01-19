const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const safeIndex = ([y, x], [lengthY, lengthX]) => {
  if (0 <= x && x < lengthX && 0 <= y && y < lengthY) {
    return true;
  }
  return false;
};

function solution(input) {
  const [M, N] = input[0].split(' ').map((number) => Number(number));
  const tomatoesString = input.slice(1);

  const tomatoes = Array(N)
    .fill()
    .map(() =>
      Array(M)
        .fill()
        .map(() => 0),
    );

  const visited = Array(N)
    .fill()
    .map(() =>
      Array(M)
        .fill()
        .map(() => 0),
    );

  const queue = [];

  for (let n = 0; n < N; n++) {
    const tomatoString = tomatoesString[n].split(' ').map((tomato) => Number(tomato));
    for (let m = 0; m < M; m++) {
      tomatoes[n][m] = tomatoString[m];
      if (tomatoString[m] === 1) {
        queue.push([n, m]);
        visited[n][m] = 1;
      } else if (tomatoString[m] === -1) {
        visited[n][m] = -1;
      }
    }
  }

  let queueCursor = 0;
  while (queueCursor < queue.length) {
    const [y, x] = queue[queueCursor];
    move.forEach(([moveY, moveX]) => {
      const nextX = x + moveX;
      const nextY = y + moveY;
      if (!safeIndex([nextY, nextX], [N, M])) {
        return;
      }
      if (visited[nextY][nextX] !== 0) {
        return;
      }

      visited[nextY][nextX] = visited[y][x] + 1;
      queue.push([nextY, nextX]);
    });
    queueCursor += 1;
  }

  const checkVisited = (visited) => {
    let max = 0;
    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (visited[n][m] === 0) {
          return -1;
        }

        if (max < visited[n][m]) {
          max = visited[n][m];
        }
      }
    }
    return max;
  };

  const result = checkVisited(visited);
  const answer = result === -1 ? -1 : result - 1;
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
