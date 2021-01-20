function scanf() {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const input = [];
  rl.on('line', function (line) {
    input.push(line);
  }).on('close', function () {
    const answer = solution(input);
    console.log(answer);
    process.exit();
  });
}

const moves = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
];

function checkValidIndex(index, maxLength) {
  return index >= 0 && index < maxLength;
}

function solution(input) {
  const [M, N, H] = input
    .shift()
    .split(' ')
    .map((mnh) => Number(mnh));

  const tomatos = Array(H)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() => Array(M).fill()),
    );

  const visited = Array(H)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() => Array(M).fill(-1)),
    );

  const queue = [];

  let isDone = true;
  for (let h = 0; h < H; h++) {
    for (let n = 0; n < N; n++) {
      const line = input.shift().split(' ');
      for (let m = 0; m < M; m++) {
        if (line[m] === '1') {
          queue.push([h, n, m]);
          visited[h][n][m] = 0;
        }
        if (line[m] === '0') {
          isDone = false;
        }
        if (line[m] === '-1') {
          visited[h][n][m] = 0;
        }
        tomatos[h][n][m] = line[m];
      }
    }
  }

  if (isDone) {
    return 0;
  }

  // Logic
  let queueCursor = 0;
  while (queueCursor < queue.length) {
    const [h, n, m] = queue[queueCursor];

    moves.forEach((move) => {
      const [mh, mn, mm] = move;
      const calcH = h + mh;
      const calcN = n + mn;
      const calcM = m + mm;
      if (checkValidIndex(calcH, H) && checkValidIndex(calcN, N) && checkValidIndex(calcM, M)) {
        if (tomatos[calcH][calcN][calcM] === '0') {
          if (visited[calcH][calcN][calcM] === -1) {
            queue.push([calcH, calcN, calcM]);
            visited[calcH][calcN][calcM] = visited[h][n][m] + 1;
          }
        }
      }
    });
    queueCursor += 1;
  }

  const checkVisited = (visited) => {
    let max = 0;
    for (let h = 0; h < H; h++) {
      for (let n = 0; n < N; n++) {
        for (let m = 0; m < M; m++) {
          if (visited[h][n][m] === -1) {
            return -1;
          }

          if (max < visited[h][n][m]) {
            max = visited[h][n][m];
          }
        }
      }
    }
    return max;
  };

  const answer = checkVisited(visited);
  return answer;
}

scanf();
