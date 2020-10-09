function dfs(visited, computers, index) {
	visited[index] = true;
	for (let j = 0; j < computers[index].length; j++) {
		if (computers[index][j] === 1 && !visited[j]) {
			dfs(visited, computers, j);
		}
	}
}

function solution(n, computers) {
	let answer = 0;
	const visited = Array(n).fill(false);
	for (let i = 0; i < computers.length; i++) {
		if (!visited[i]) {
			answer += 1;
			dfs(visited, computers, i);
		}
	}
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let n = -1;
let computers = [[]];

switch (testCase) {
	case 1:
		n = 3;
		computers = [
			[1, 1, 0],
			[1, 1, 0],
			[0, 0, 1],
		];
		break;
	case 2:
		n = 3;
		computers = [
			[1, 1, 0],
			[1, 1, 1],
			[0, 1, 1],
		];
		break;
}

const answer = solution(n, computers);
console.log(answer);
