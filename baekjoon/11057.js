const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(line) {
	const lengthOfNumber = parseInt(line);
	let dp = Array(1001).fill(Array(10).fill(0));

	for (let i = 0; i < lengthOfNumber; i++) {
		for (let j = 0; j < 10; j++) {
			if (i == 0) {
				dp[i + 1][j] = 1;
			} else {
				if (j == 0) {
					dp[i + 1][j] = dp[i][j] % 10007;
				} else {
					dp[i + 1][j] = (dp[i + 1][j - 1] + dp[i][j]) % 10007;
				}
			}
		}
	}
	return dp[lengthOfNumber].reduce((acc, cur) => acc + cur, 0);
}

rl.on("line", function (line) {
	console.log(solution(line) % 10007);
	rl.close();
}).on("close", function () {
	process.exit();
});
