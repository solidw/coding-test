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
		process.exit();
	});
}

function escape(minute) {
	console.log(`Escaped in ${minute} minute(s).`);
}

function trapped() {
	console.log(`Trapped!`);
}

const move = [
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
	while (true) {
		const [L, R, C] = input
			.shift()
			.split(" ")
			.map((lrc) => Number(lrc));

		if (L === 0 && R === 0 && C === 0) {
			break;
		}

		const building = Array(L)
			.fill()
			.map(() =>
				Array(R)
					.fill()
					.map(() => Array(C).fill())
			);

		const visited = Array(L)
			.fill()
			.map(() =>
				Array(R)
					.fill()
					.map(() => Array(C).fill(-1))
			);

		let start = [0, 0, 0];
		let end = [L, R, C];

		for (let l = 0; l < L; l++) {
			for (let r = 0; r < R; r++) {
				const line = input.shift().split("");
				for (let c = 0; c < C; c++) {
					if (line[c] === "S") {
						start = [l, r, c];
					}
					if (line[c] === "E") {
						end = [l, r, c];
					}

					building[l][r][c] = line[c];
				}
			}
			// Empty line
			input.shift();
		}
		// Logic
		const queue = [];
		queue.push(start);
		const [startL, startR, startC] = start;
		visited[startL][startR][startC] = 0;
		while (queue.length !== 0) {
			const [l, r, c] = queue.shift();
			if (building[l][r][c] === "E") {
				break;
			}
			move.forEach((m) => {
				const [ml, mr, mc] = m;
				if (
					checkValidIndex(l + ml, building.length) &&
					checkValidIndex(r + mr, building[0].length) &&
					checkValidIndex(c + mc, building[0][0].length)
				) {
					if (building[l + ml][r + mr][c + mc] !== "#") {
						if (visited[l + ml][r + mr][c + mc] === -1) {
							queue.push([l + ml, r + mr, c + mc]);
							visited[l + ml][r + mr][c + mc] = visited[l][r][c] + 1;
						}
					}
				}
			});
		}
		const [endL, endR, endC] = end;
		const minute = visited[endL][endR][endC];
		if (minute === -1) {
			trapped();
		} else {
			escape(minute);
		}
	}
}

scanf();

// const example1 = `3 4 5
// S....
// .###.
// .##..
// ###.#

// #####
// #####
// ##.##
// ##...

// #####
// #####
// #.###
// ####E

// 1 3 3
// S##
// #E#
// ###

// 0 0 0`.split("\n");
// solution(example1);
