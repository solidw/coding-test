function solution(numbers) {
	let answer = "";
	answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");

	if (answer[0] === "0") {
		return "0";
	}

	return answer;
}

const numbers = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];
const numbers3 = [10, 101];
const numbers4 = [0, 0, 0, 0];
const answer = solution(numbers4);
console.log(answer);
