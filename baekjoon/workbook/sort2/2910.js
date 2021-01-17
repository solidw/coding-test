const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [N, C] = input[0].split(' ');

  const message = input[1].split(' ').map((char) => Number(char));
  const messageDict = message.reduce((acc, cur, index) => {
    const key = Number(cur);
    if (acc[key] == null) {
      acc[key] = { no: index, count: 1 };
    } else {
      acc[key].count += 1;
    }

    return acc;
  }, {});

  const orderedKeys = Object.keys(messageDict);
  orderedKeys.sort((a, b) => {
    if (messageDict[a].count === messageDict[b].count) {
      return messageDict[a].no - messageDict[b].no;
    }
    return messageDict[b].count - messageDict[a].count;
  });

  const frequencyString = orderedKeys.reduce((acc, cur) => {
    let s = '';
    for (let c = 0; c < messageDict[cur].count; c++) {
      s = s.concat(cur) + ' ';
    }
    return acc.concat(s);
  }, '');

  const answer = frequencyString.trim();
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
