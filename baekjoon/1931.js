const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const N = input[0];
  const meetings = input.slice(1).map((meeting) => meeting.split(' ').map((m) => Number(m)));

  meetings.sort(([aa, ab], [ba, bb]) => {
    if (ab === bb) {
      return aa - ba;
    }
    return ab - bb;
  });

  let totalMeeting = 0;
  let currentTime = 0;
  meetings.forEach((meeting) => {
    const [startAt, endAt] = meeting;
    if (currentTime <= startAt) {
      currentTime = endAt;
      totalMeeting += 1;
    }
  });
  return totalMeeting;
}

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});
