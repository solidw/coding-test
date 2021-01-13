const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getMinNumberWithBigInt = (numbers) => {
  let min = BigInt(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < numbers.length; i++) {
    const numberKey = BigInt(numbers[i]);
    if (min > numberKey) {
      min = numberKey;
    }
  }

  return min.toString();
};

function solution(input) {
  const numbers = input.slice(1);
  const numberTable = numbers.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(numberTable));
  const numberKeys = Object.keys(numberTable);

  const filteredKeys = numberKeys.filter((key) => numberTable[key] === maxCount);

  const minKey = getMinNumberWithBigInt(filteredKeys);
  return minKey;
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
