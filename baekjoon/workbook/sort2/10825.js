const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const N = input[0];
  const scores = input.slice(1);

  const scoreMappnig = scores.reduce((acc, cur) => {
    const [name, korean, english, math] = cur.split(' ');

    acc[name] = { korean, english, math };

    return acc;
  }, {});

  const students = Object.keys(scoreMappnig);

  students.sort((a, b) => {
    if (scoreMappnig[a].korean !== scoreMappnig[b].korean) {
      return scoreMappnig[b].korean - scoreMappnig[a].korean;
    }

    if (scoreMappnig[a].english !== scoreMappnig[b].english) {
      return scoreMappnig[a].english - scoreMappnig[b].english;
    }

    if (scoreMappnig[a].math !== scoreMappnig[b].math) {
      return scoreMappnig[b].math - scoreMappnig[a].math;
    }

    return a < b ? -1 : 1;
  });

  const answer = students.join('\n');
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
