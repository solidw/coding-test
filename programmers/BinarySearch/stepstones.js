function solution(distance, rocks, n) {
	let answer = 0;
	rocks.sort((a, b) => a - b);

	let start = 0;
	let end = distance;
	let mid = 0;

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		let prevStone = 0;

		let removedStones = rocks.reduce((acc, cur) => {
			if (cur - prevStone < mid) {
				return acc + 1;
			} else {
				prevStone = cur;
				return acc;
			}
		}, 0);

		if (distance - prevStone < mid) {
			removedStones += 1;
		}

		if (removedStones <= n) {
			answer = mid < answer ? answer : mid;
			start = mid + 1;
		} else if (removedStones > n) {
			end = mid - 1;
		}
	}

	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let distance = -1;
let rocks = [];
let n = -1;

switch (testCase) {
	case 1:
		distance = 25;
		rocks = [2, 14, 11, 21, 17];
		n = 2;
		break;
	case 2:
		distance = 16;
		rocks = [4, 8, 11];
		n = 2;
		break;
}

const answer = solution(distance, rocks, n);
console.log(answer);
