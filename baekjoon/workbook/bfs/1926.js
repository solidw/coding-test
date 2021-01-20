function scanf() {
	const readline = require("readline");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const input = [];
	rl.on("line", function (line) {
		input.push(line);
	}).on("close", function () {
		const answer = solution(input);
		console.log(answer);
		process.exit();
	});
}

const moves = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

function checkValidIndex(index, maxLength) {
	return index >= 0 && index < maxLength;
}

function solution(input) {
	const [N, M] = input
		.shift()
		.split(" ")
		.map((nm) => Number(nm));

	const canvas = Array(N)
		.fill()
		.map(() =>
			Array(M)
				.fill()
				.map(() => 0)
		);

	for (let n = 0; n < N; n++) {
		const row = input
			.shift()
			.split(" ")
			.map((r) => Number(r));
		for (let m = 0; m < M; m++) {
			canvas[n][m] = row[m];
		}
	}

	const visited = Array(N)
		.fill()
		.map(() =>
			Array(M)
				.fill()
				.map(() => false)
		);

	let numberOfPainting = 0;
	let maxAreaOfPainting = 0;

	for (let n = 0; n < N; n++) {
		for (let m = 0; m < M; m++) {
			if (canvas[n][m] === 0 || visited[n][m] === true) {
				continue;
			}
			numberOfPainting += 1;
			const queue = [];
			visited[n][m] = true;
			queue.push([n, m]);
			let area = 0;

			while (queue.length !== 0) {
				area += 1;
				const [curN, curM] = queue.shift();

				moves.forEach(([mn, mm]) => {
					const calcN = curN + mn;
					const calcM = curM + mm;
					if (checkValidIndex(calcN, N) && checkValidIndex(calcM, M)) {
						if (visited[calcN][calcM] || canvas[calcN][calcM] !== 1) {
							return;
						}
						visited[calcN][calcM] = true;
						queue.push([calcN, calcM]);
					}
				});
			}
			maxAreaOfPainting = Math.max(maxAreaOfPainting, area);
		}
	}

	const answer = `${numberOfPainting}\n${maxAreaOfPainting}`;
	return answer;
}

scanf();

// const example1 = `6 5
// 1 1 0 1 1
// 0 1 1 0 0
// 0 0 0 0 0
// 1 0 1 1 1
// 0 0 1 1 1
// 0 0 1 1 1`.split("\n");

// const answer = solution(example1);
// console.log(answer);
