const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const N = input[0];
  const numbers = input.slice(1);

  const locations = numbers.reduce((acc, cur) => {
    const [x, y] = cur.split(' ');
    const location = { x, y };

    acc.push(location);
    return acc;
  }, []);

  locations.sort((a, b) => {
    if (a.x !== b.x) {
      return a.x - b.x;
    } else {
      return a.y - b.y;
    }
  });

  const orderedLocation = locations.reduce((acc, cur) => {
    const location = `${cur.x} ${cur.y}`;
    acc.push(location);
    return acc;
  }, []);

  const answer = orderedLocation.join('\n');
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
