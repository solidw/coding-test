function solution(triangle) {
	let answer = 0;
	const dp = triangle.slice();
	for (let i = 1; i < triangle.length; i++) {
		for (let j = 0; j < dp[i].length; j++) {
			let leftParent =
				j === 0 ? 0 : dp[i - 1][j - 1] != null ? dp[i - 1][j - 1] : 0;
			let rightParent =
				j === dp[i].length - 1 ? 0 : dp[i - 1][j] != null ? dp[i - 1][j] : 0;

			dp[i][j] += Math.max(leftParent, rightParent);
		}
	}

	answer = Math.max(...dp[dp.length - 1]);
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let triangle = [[]];

switch (testCase) {
	case 1:
		triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
		break;
	case 2:
		break;
}

triangle.forEach((tri) => {
	console.log(tri, "\t");
});

const answer = solution(triangle);
console.log(answer);
