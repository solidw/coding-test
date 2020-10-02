function solution(N, number) {
	let answer = 0;
	const dp = Array(9)
		.fill()
		.map((_, i) => new Set([Number(String(N).repeat(i))]));

	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j < i; j++) {
			for (const previousSet1 of dp[j]) {
				for (const previousSet2 of dp[i - j]) {
					dp[i].add(previousSet1 + previousSet2);
					dp[i].add(previousSet1 - previousSet2);
					dp[i].add(previousSet1 * previousSet2);
					dp[i].add(Math.floor(previousSet1 / previousSet2));
				}
			}
		}

		console.log(dp[i]);

		if (dp[i].has(number)) {
			answer = i;
			return answer;
		}
	}

	return -1;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : -1;
const N =
	testCase === 1
		? 5
		: testCase === 2
		? 2
		: testCase === 3
		? 5
		: testCase === 4
		? 5
		: testCase === 5
		? 4
		: -1;

const number =
	testCase === 1
		? 12
		: testCase === 2
		? 11
		: testCase === 3
		? 12
		: testCase === 4
		? 31168
		: testCase === 5
		? 17
		: -1;

const answer = solution(N, number);
console.log(answer);
