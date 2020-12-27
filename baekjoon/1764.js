const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [N, M] = input[0].split(' ').map((nm) => Number(nm));
  const people = input.slice(1);
  const peopleN = people.slice(0, N);
  const peopleM = people.slice(N);

  const peopleDictionary = {};
  peopleN.forEach((person) => {
    peopleDictionary[person] = peopleDictionary[person] ? peopleDictionary[person] + 1 : 1;
  });
  peopleM.forEach((person) => {
    peopleDictionary[person] = peopleDictionary[person] ? peopleDictionary[person] + 1 : 1;
  });
  const peopleArray = Object.keys(peopleDictionary);
  const duplicatedPeople = peopleArray.reduce((acc, cur) => {
    if (peopleDictionary[cur] === 2) {
      acc.push(cur);
    }
    return acc;
  }, []);

  duplicatedPeople.sort();
  console.log(duplicatedPeople.length);
  duplicatedPeople.forEach((person) => {
    console.log(person);
  });
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
