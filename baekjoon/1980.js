const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function gcd(_a, _b) {
	let a = _a;
	let b = _b;
	while (b !== 0) {
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}

function lcm(a, b) {
	return (a * b) / gcd(a, b);
}

function solution(input) {
	const [n, m, t] = input[0].split(" ");
	console.log(n, m, t);
}

let input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});
