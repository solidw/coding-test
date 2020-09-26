function solution(number, k) {
	let answer = "";
	const numbers = number.split("");
	const bigNumberArray = [];
	let remainCount = k;

	numbers.forEach((currentNumber) => {
		while (
			remainCount > 0 &&
			bigNumberArray[bigNumberArray.length - 1] < currentNumber
		) {
			bigNumberArray.pop();
			remainCount -= 1;
		}
		bigNumberArray.push(currentNumber);
	});

	bigNumberArray.splice(bigNumberArray.length - remainCount, remainCount);
	answer = bigNumberArray.join("");
	return answer;
}

const testCase = 2;
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

const answer = solution("54321", 2);
console.log(answer);
