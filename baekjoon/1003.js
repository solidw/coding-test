const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(input) {
	input = input.slice(1);
	const inputs = input.map((number) => Number(number));

	const dp = Array(41);
	for (let i = 0; i < 41; i++) {
		if (i < 2) {
			dp[i] = i;
			continue;
		}

		dp[i] = dp[i - 1] + dp[i - 2];
	}

	const counts = inputs.map((input) => {
		let countZero = 0;
		let countOne = 0;
		if (input === 0) {
			countZero = 1;
			countOne = 0;
		} else if (input === 1) {
			countZero = 0;
			countOne = 1;
		} else {
			countZero = dp[input - 1];
			countOne = dp[input];
		}
		return [countZero, countOne];
	});

	counts.forEach((count) => {
		console.log(count.join(" "));
	});
}

const input = [];
rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});
