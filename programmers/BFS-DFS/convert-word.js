let answer = [];

const checkOneCharDiff = (a, b) =>
	a.split("").filter((_, index) => a[index] !== b[index]).length === 1;

function dfs(begin, target, words, visited, count) {
	for (let i = 0; i < words.length; i++) {
		if (checkOneCharDiff(begin, words[i])) {
			if (target === words[i]) {
				answer.push(count + 1);
				return;
			}

			if (!visited[i]) {
				visited[i] = true;
				dfs(words[i], target, words, visited, count + 1);
			}
		}
	}
}

function solution(begin, target, words) {
	const visited = Array(words.length).fill(false);

	dfs(begin, target, words, visited, 0);

	return answer.length === 0 ? 0 : Math.min(...answer);
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let begin = "";
let target = "";
let words = [];

switch (testCase) {
	case 1:
		begin = "hit";
		target = "cog";
		words = ["hot", "dot", "dog", "lot", "log", "cog"];
		break;
	case 2:
		begin = "hit";
		target = "cog";
		words = ["hot", "dot", "dog", "lot", "log"];
		break;
}

const result = solution(begin, target, words);
console.log(result);
