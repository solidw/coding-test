function solution(brown, yellow) {
	let answer = [];
	const area = brown + yellow;
	let y = 0;
	let x = 0;

	for (x = area; x >= y; x -= 1) {
		y = Math.floor(area / x);
		if (x * y !== area) {
			continue;
		}

		let brownCells = x * 2 + y * 2 - 4;
		let yellowCells = area - brownCells;

		if (x * y === area && brownCells === brown && yellowCells === yellow) {
			break;
		}
	}

	answer = [x, y];
	return answer;
}

const brown = 10;
const yellow = 2;
const answer = solution(brown, yellow);
console.log(answer);
