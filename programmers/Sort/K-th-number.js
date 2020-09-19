function solution(array, commands) {
	let answer = [];
	answer = commands.reduce((acc, cur) => {
		const [start, end, k] = cur;
		const sliced = array.slice(start - 1, end).sort((a, b) => a - b);
		acc.push(sliced[k - 1]);
		return acc;
	}, []);
	return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
	[2, 5, 3],
	[4, 4, 1],
	[1, 7, 3],
];

const answer = solution(array, commands);
console.log(answer);
