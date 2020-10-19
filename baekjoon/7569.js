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
		solution(input);
		console.log("break");
		process.exit();
	});
}

const moves = [
	[1, 0, 0], // 상
	[-1, 0, 0], // 하
	[0, 0, 1], // 동
	[0, 0, -1], // 서
	[0, 1, 0], // 남
	[0, -1, 0], // 북
];

function checkValidIndex(index, maxLength) {
	return index >= 0 && index < maxLength;
}

function solution(input) {
	const [M, N, H] = input
		.shift()
		.split(" ")
		.map((mnh) => Number(mnh));

	const tomatos = Array(H)
		.fill()
		.map(() =>
			Array(N)
				.fill()
				.map(() => Array(M).fill())
		);

	const visited = Array(H)
		.fill()
		.map(() =>
			Array(N)
				.fill()
				.map(() => Array(M).fill(-1))
		);

	const startPoints = [];
	let isDone = true;
	for (let h = 0; h < H; h++) {
		for (let n = 0; n < N; n++) {
			const line = input.shift().split(" ");
			for (let m = 0; m < M; m++) {
				if (line[m] === "1") {
					startPoints.push([h, n, m]);
				}
				if (line[m] === "0") {
					isDone = false;
				}
				tomatos[h][n][m] = line[m];
			}
		}
	}

	if (isDone) {
		return 0;
	}

	// Logic
	const queue = [];
	startPoints.forEach((point) => {
		const [h, n, m] = point;
		queue.push(point);
		visited[h][n][m] = 0;
	});

	while (queue.length !== 0) {
		console.log(queue);
		const [h, n, m] = queue.shift();
		moves.forEach((move) => {
			const [mh, mn, mm] = move;
			const calcH = h + mh;
			const calcN = n + mn;
			const calcM = m + mm;
			if (
				checkValidIndex(calcH, tomatos.length) &&
				checkValidIndex(calcN, tomatos[0].length) &&
				checkValidIndex(calcM, tomatos[0][0].length)
			) {
				if (tomatos[calcH][calcN][calcM] === "0") {
					if (visited[calcH][calcN][calcM] === -1) {
						queue.push([calcH, calcN, calcM]);
						visited[calcH][calcN][calcM] = visited[h][n][m] + 1;
					}
				}
			}
		});
	}

	const flatVisited = visited.map((v) => v.flat()).flat();
	console.log(flatVisited);
	const isFailed = flatVisited.some((f) => f === -1);
	if (isFailed) {
		return -1;
	}

	const day = Math.max(...flatVisited);
	return day;
}

// scanf();

const example1 = `5 3 1
0 -1 0 0 0
-1 -1 0 1 1
0 0 0 1 1`.split("\n");

const example2 = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`.split("\n");

const example3 = `4 3 2
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
-1 -1 -1 -1
1 1 1 -1`.split("\n");

const answer = solution(example1);
console.log(answer);
