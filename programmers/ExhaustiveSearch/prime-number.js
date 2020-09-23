const getAllSubsets = (theArray) =>
	theArray.reduce(
		(subsets, value) => subsets.concat(subsets.map((set) => [...set, value])),
		[[]]
	);

const permutation = (digits) => {
	const result = [];

	const permute = (arr, m = []) => {
		if (arr.length === 0) {
			result.push(m);
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				permute(curr, m.concat(next));
			}
		}
	};

	permute(digits);
	return result;
};

const getEratos = (n) => {
	const sieve = Array(n + 1)
		.fill(true)
		.fill(false, 0, 2);

	for (let i = 2; i * i <= n; i++) {
		if (sieve[i]) {
			for (let j = i * i; j <= n; j += i) {
				sieve[j] = false;
			}
		}
	}
	return sieve;
};

function solution(numbers) {
	let answer = 0;
	const digits = numbers.split("");
	const allSubsets = getAllSubsets(digits);
	const allNumbers = allSubsets
		.reduce((allNumber, subset) => allNumber.concat(permutation(subset)))
		.map((number) => Number(number.join("")));

	const allUniqueNumbers = [...new Set(allNumbers)];
	const n = Math.max(...allUniqueNumbers);
	const sieve = getEratos(n);
	answer = allUniqueNumbers.filter((number) => sieve[number]).length;
	return answer;
}

const numbers = "17";
const answer = solution(numbers);
console.log(answer);
