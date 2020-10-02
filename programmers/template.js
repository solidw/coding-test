function solution(N, number) {
	let answer = 0;
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : -1;

let N = -1;
let number = -1;

switch (testCase) {
	case 1:
		N = 5;
		number = 12;
		break;
	case 2:
		N = 2;
		number = 11;
		break;
}

const answer = solution(N, number);
console.log(answer);
