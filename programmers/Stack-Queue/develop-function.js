// const readline = require("readline");

// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout,
// });

function solution(progresses, speeds) {
	let answer = [];

	const spendDays = progresses.map((progress, index) =>
		Math.ceil((100 - progress) / speeds[index])
	);
	let max = 0;
	answer = spendDays.reduce((acc, cur) => {
		if (max < cur) {
			max = cur;
			acc.push(1);
		} else {
			acc[acc.length - 1] += 1;
		}
		return acc;
	}, []);
	return answer;
}

let input = [];

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];
const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

const answer = solution(progresses, speeds);
console.log(answer);
