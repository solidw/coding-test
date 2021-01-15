const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const users = input.slice(1).map((user, index) => {
    const [age, name] = user.split(' ');
    const ageAsNumber = Number(age);
    return { no: index, age: ageAsNumber, name };
  });

  users.sort((a, b) => {
    if (a.age === b.age) {
      return a.no - b.no;
    }

    return a.age - b.age;
  });

  const usersString = users.map(({ age, name }) => `${age} ${name}`);
  const answer = usersString.join('\n');

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
