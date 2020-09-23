const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(line) {
	const input = line[0];
	console.log(input);

	const stack = [];
	let point = 0;
	line.forEach((char, index) => {
		if (char === "(" || char === "[") {
			point += 1;
		}
		if (char === ")" || char === "]") {
			point -= 1;
		}
		if (point < 0) {
			return 0;
		}
		stack.push(char);
		console.log(char);
	});
}

let input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});
