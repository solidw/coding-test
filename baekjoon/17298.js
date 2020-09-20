const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(input) {
	const N = input[0];
	const sequence = input
		.slice(1)[0]
		.split(" ")
		.map((item) => Number(item));

	const stack = [];
	const result = [];

	for (let i = sequence.length - 1; i >= 0; i--) {
		while (true) {
			if (stack.length === 0) {
				stack.push(sequence[i]);
				result.push("-1");
				break;
			}

			let top = stack[stack.length - 1];
			if (top <= sequence[i]) {
				stack.pop();
			} else {
				stack.push(sequence[i]);
				result.push(top);
				break;
			}
		}
	}
	const final = result.reverse().join(" ");
	console.log(final);
}

let input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});
