function findIndexMaxValueInRange(array, start, end) {
	const arrayToSearch = array.slice(start, end + 1);
	const max = Math.max(...arrayToSearch);
	return start + arrayToSearch.findIndex((value) => Number(value) === max);
}

function solution(number, k) {
	let answer = "";
	const targetLength = number.length - k;
	const numbers = number.split("");
	const bigNumberArray = [];
	let where = -1;

	for (let i = 0; i < targetLength; i++) {
		where = findIndexMaxValueInRange(
			numbers,
			where + 1,
			numbers.length - targetLength + i
		);
		bigNumberArray.push(numbers[where]);
	}
	answer = bigNumberArray.join("");
	return answer;
}

const testCase = 4;
const number =
	testCase === 1
		? "1924"
		: testCase === 2
		? "1231234"
		: testCase === 3
		? "4177252841"
		: testCase === 4
		? "9999"
		: "";

const k =
	testCase === 1
		? 2
		: testCase === 2
		? 3
		: testCase === 3
		? 4
		: testCase === 4
		? 2
		: 0;

const answer = solution(number, k);
console.log(answer);
