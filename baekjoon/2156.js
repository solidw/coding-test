const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const N = Number(input[0]);
  const wines = input.slice(1).map((wine) => Number(wine));

  if (wines.length < 2) {
    return wines.reduce((acc, cur) => acc + cur, 0);
  }

  const dp = Array(N)
    .fill()
    .map((_, index) =>
      Array(3)
        .fill()
        .map(() => wines[index]),
    );

  dp[0][0] = 0;

  for (let i = 1; i < wines.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]); // 안 먹을 때
    dp[i][1] = dp[i - 1][0] + wines[i]; // 이전에 안 먹고 이번에 먹을 때
    dp[i][2] = dp[i - 1][1] + wines[i]; // 두번 연속 먹을 때
  }

  const answer = Math.max(...dp[N - 1]);
  return answer;
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
