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

const checkEscape = ([r, c], [rLength, cLength]) => {
  return r === 0 || r === rLength - 1 || c === 0 || c === cLength - 1;
};

const isSafeIndex = ([y, x], [yLength, xLength]) => {
  return 0 <= y && y < yLength && 0 <= x && x < xLength;
};

function solution(input) {
  const [R, C] = input[0].split(' ').map((rc) => Number(rc));
  const mazeString = input.slice(1);

  const maze = Array(R)
    .fill()
    .map(() =>
      Array(C)
        .fill()
        .map(() => ''),
    );

  const fQueue = [];
  const jQueue = [];

  for (let r = 0; r < R; r++) {
    const mazeStringSplit = mazeString[r].split('');
    for (let c = 0; c < C; c++) {
      const mazeChar = mazeStringSplit[c];
      maze[r][c] = mazeChar;
      if (mazeChar === 'J') {
        jQueue.push([r, c]);
        maze[r][c] = 1;
      }
      if (mazeChar === 'F') {
        fQueue.push([r, c]);
      }
    }
  }

  let fCursor = 0;
  let jCursor = 0;
  let answer = -1;

  const [startY, startX] = jQueue[jCursor];
  if (checkEscape([startY, startX], [R, C])) {
    return 1;
  }

  while (jCursor < jQueue.length) {
    const canExit = [];
    const jQueueCache = [];
    while (jCursor < jQueue.length) {
      const [jY, jX] = jQueue[jCursor];

      moves.forEach(([y, x]) => {
        const movedJY = jY + y;
        const movedJX = jX + x;

        if (!isSafeIndex([movedJY, movedJX], [R, C])) {
          return;
        }
        if (maze[movedJY][movedJX] !== '.') {
          return;
        }

        maze[movedJY][movedJX] = maze[jY][jX] + 1;
        jQueueCache.push([movedJY, movedJX]);
        if (checkEscape([movedJY, movedJX], [R, C])) {
          canExit.push([movedJY, movedJX]);
        }
      });
      jCursor += 1;
    }

    jQueue.push(...jQueueCache);
    const fQueueCache = [];
    while (fCursor < fQueue.length) {
      const [fireY, fireX] = fQueue[fCursor];
      moves.forEach(([y, x]) => {
        const movedFireY = fireY + y;
        const movedFireX = fireX + x;

        if (!isSafeIndex([movedFireY, movedFireX], [R, C])) {
          return;
        }
        if (maze[movedFireY][movedFireX] === '#') {
          return;
        }
        if (maze[movedFireY][movedFireX] === 'F') {
          return;
        }

        maze[movedFireY][movedFireX] = 'F';
        fQueueCache.push([movedFireY, movedFireX]);
      });

      fCursor += 1;
    }
    fQueue.push(...fQueueCache);
    const result = canExit.filter(([y, x]) => {
      return typeof maze[y][x] === 'number';
    });
    if (result.length > 0) {
      const [resultY, resultX] = result[0];
      answer = maze[resultY][resultX];
      break;
    }
  }

  return answer === -1 || typeof answer === 'string' ? 'IMPOSSIBLE' : answer;
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
