function dfs(arr, target, index, num) {
	console.log(index);
	if (arr.length === index) {
		if (target === num) {
			return 1;
		}
		return 0;
	}
	const newArr = arr.slice();
	return (
		dfs(newArr, target, index + 1, num + newArr[index]) +
		dfs(newArr, target, index + 1, num - newArr[index])
	);
}

function solution(numbers, target) {
	let answer = 0;
	answer = dfs(numbers, target, 0, 0);
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let numbers = -1;
let target = -1;

switch (testCase) {
	case 1:
		numbers = [1, 1, 1, 1, 1];
		target = 3;
		break;
	case 2:
		break;
}

const answer = solution(numbers, target);
console.log(answer);
