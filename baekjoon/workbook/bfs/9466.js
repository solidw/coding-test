const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const answer = [];
  const T = Number(input[0]);

  for (let t = 0; t < T; t++) {
    const N = Number(input[t * 2 + 1]);

    const students = Array(N + 1);
    const visited = Array(N + 1);

    students.fill(0);
    visited.fill(0);

    input[t * 2 + 2].split(' ').forEach((student, index) => {
      students[index + 1] = Number(student);
    });

    let group = 1;
    for (let i = 1; i <= N; i++) {
      let nextStudent = i;
      if (visited[nextStudent] === 0) {
        while (visited[nextStudent] === 0) {
          visited[nextStudent] = group;
          nextStudent = students[nextStudent];
        }

        while (visited[nextStudent] === group) {
          visited[nextStudent] = -1;
          nextStudent = students[nextStudent];
        }
        group += 1;
      }
    }

    let count = 0;
    for (let v = 1; v < visited.length; v++) {
      if (visited[v] > 0) {
        count += 1;
      }
    }
    answer.push(count);
  }
  return answer.join('\n');
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
