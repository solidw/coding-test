function solution(n, times) {
	let answer = [];
	times.sort((a, b) => a - b);

	let minTime = 0;
	let maxTime = n * times[times.length - 1];
	let midTime = 0;
	let passedPeople = 0;

	while (minTime <= maxTime) {
		midTime = Math.floor((minTime + maxTime) / 2);
		passedPeople = times.reduce(
			(acc, cur) => acc + Math.floor(midTime / cur),
			0
		);

		if (passedPeople >= n) {
			answer.push(midTime);
			maxTime = midTime - 1;
		} else {
			minTime = midTime + 1;
		}
	}

	return Math.min(...answer);
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let n = -1;
let times = [];

switch (testCase) {
	case 1:
		n = 6;
		times = [7, 10];
		break;
	case 2:
		n = 4;
		times = [6, 10];
		break;
}

const answer = solution(n, times);
console.log(answer);
