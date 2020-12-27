const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [N, M] = input[0].split(' ').map((i) => Number(i));
  const graph = [...Array(N).keys()].reduce((acc, cur) => {
    acc[cur + 1] = [];
    return acc;
  }, {});

  const lines = input.slice(1);
  lines.forEach((line) => {
    const [vertexA, vertexB] = line.split(' ');
    graph[vertexB].push(vertexA);
  });

  const vertexes = Object.keys(graph);
  const visited = [...Array(N + 1).keys()].fill(false);
  const hackedComputer = [...Array(N).keys()].reduce((acc, cur) => {
    acc[cur + 1] = 0;
    return acc;
  }, {});

  vertexes.forEach((vertex) => {
    const stack = [];
    visited.fill(false);
    let countOfHacked = 1;
    visited[vertex] = true;
    stack.push(vertex);

    while (stack.length > 0) {
      const currentVertex = stack.pop();
      graph[currentVertex].forEach((connectedVertex) => {
        if (visited[connectedVertex]) {
          return;
        }
        visited[connectedVertex] = true;
        stack.push(connectedVertex);
        countOfHacked += 1;
      });
    }
    hackedComputer[vertex] = countOfHacked;
  });

  const maxHackedComputerCount = Math.max(...Object.values(hackedComputer));
  const hackedComputers = Object.keys(hackedComputer);
  const answer = hackedComputers
    .filter((hackedComputerKey) => hackedComputer[hackedComputerKey] === maxHackedComputerCount)
    .sort((a, b) => hackedComputer[b] - hackedComputer[a])
    .join(' ');

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
