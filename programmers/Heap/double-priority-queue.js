function bSearch(array, target) {
	let low = 0;
	let high = array.length - 1;
	let mid = 0;
	while (low <= high) {
		mid = Math.floor((high + low) / 2);
		let guess = array[mid];

		if (guess === target) {
			return mid;
		} else if (guess > target) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return mid;
}

function solution(operations) {
	var answer = [];

	const doublePriorityQueue = operations.reduce((acc, cur) => {
		const [op, preValue] = cur.split(" ");
		const value = Number(preValue);
		if (op === "I") {
			const mid = bSearch(acc, value);
			if (acc.length === 0) {
				acc.splice(mid, 0, value);
			} else {
				acc.splice(value < acc[mid] ? mid : mid + 1, 0, value);
			}
		}
		if (op === "D") {
			value < 0 ? acc.shift() : acc.pop();
		}
		return acc;
	}, []);

	if (doublePriorityQueue.length === 0) {
		answer = [0, 0];
	} else {
		answer = [
			doublePriorityQueue[doublePriorityQueue.length - 1],
			doublePriorityQueue[0],
		];
	}
	return answer;
}

const operations = ["I 16", "D 1"];
const operations2 = ["I 7", "I 5", "I -5", "D -1"];
const operations3 = ["I -2", "I -5", "I -3", "I -4", "D 1"];

const answer = solution(operations3);
