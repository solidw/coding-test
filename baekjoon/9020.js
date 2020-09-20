const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(input) {
	const evenNumbers = input.filter((_, index) => index !== 0);

	const getPrimeNumbers = (quantity) => {
		// let numberArr = [...Array(quantity + 1).keys()];
		let numberArr = [];
		for (let i = 2; i <= quantity; i++) {
			let FLAG = true;
			for (let j = 2; j * j <= i; j++) {
				if (i % j === 0) {
					FLAG = false;
				}
			}
			if (FLAG) {
				numberArr.push(i);
			}
		}
		const filteredArray = numberArr.filter((item) => item !== 0);
		return filteredArray;
	};

	const filteredArray = getPrimeNumbers(10000);
	let result = [];

	evenNumbers.forEach((even) => {
		let pairSet = [];
		for (let i = 0; i < filteredArray.length; i++) {
			let k = filteredArray[i];
			let pair = even - k;

			if (filteredArray.includes(pair)) {
				pairSet = [k, pair];
				if (k >= even / 2) {
					pairSet = [k, pair];
					result.push(pairSet);
					break;
				}
			}
		}
	});

	result.forEach((res) => {
		console.log(res[1] + " " + res[0]);
	});
}

let input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	solution(input);
	process.exit();
});
