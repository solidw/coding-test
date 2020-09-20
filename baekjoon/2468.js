const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	function solution(input) {
		const N = input[0];
		const area = input
			.filter((_, index) => index !== 0)
			.map((item) => item.split(" "))
			.map((row) =>
				row.map((cell) => {
					return { height: cell, visited: false };
				})
			);

		const bfs = (position = [0, 0], level, area) => {
			let [x, y] = position;
			if (area[x][y].visited) {
				return false;
			}

			const nextPoisition = ([x, y] = [0, 0]) => {
				return [
					[x + 1, y],
					[x - 1, y],
					[x, y + 1],
					[x, y - 1],
				];
			};
			const queue = [];

			while (true) {
				nextPoisition([x, y]).forEach((element) => {
					const [x, y] = element;
					if (x >= N || x < 0 || y >= N || y < 0) {
						return;
					}
					if (area[x][y].height > level && area[x][y].visited === false) {
						area[x][y].visited = true;
						queue.push([x, y]);
					}
				});
				if (queue.length === 0) {
					return true;
				} else {
					[x, y] = queue.shift();
				}
			}
		};

		let maxCount = 0;
		for (let level = 0; level < 101; level++) {
			const copiedArea = JSON.parse(JSON.stringify(area));
			const validAreaSet = copiedArea
				.map((item, x) =>
					item
						.map((item, y) => {
							if (item.height > level) {
								return [x, y];
							}
						})
						.filter((item) => item)
				)
				.flat();

			let count = 0;

			validAreaSet.forEach((item) => {
				const result = bfs(item, level, copiedArea);
				if (result) {
					count++;
				}
			});
			maxCount = count > maxCount ? count : maxCount;
		}

		return maxCount;
	}
	console.log(solution(input));
	process.exit();
});
