const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  input.forEach((line, indexNumber) => {
    const stack = [];
    if (line.includes('-')) {
      return;
    }
    line.split('').forEach((parenthesis) => {
      if (parenthesis === '{') {
        stack.push(parenthesis);
      } else if (parenthesis === '}') {
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        } else {
          stack.push(parenthesis);
        }
      }
    });

    let countToChange = 0;
    while (stack.length > 0) {
      const p1 = stack.shift();
      const p2 = stack.shift();

      if (p1 === '}' && p2 === '{') {
        countToChange += 2;
      } else {
        countToChange += 1;
      }
    }
    console.log(`${indexNumber + 1}. ${countToChange}`);
  });
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
