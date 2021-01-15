const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const stringS = input[0];
  const suffixStringS = stringS.split('').reduce((acc, _, index, total) => {
    if (index === 0) {
      acc.push(total.join(''));
    } else {
      acc.push(total.slice(index).join(''));
    }
    return acc;
  }, []);

  suffixStringS.sort();

  const answer = suffixStringS.join('\n');
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
