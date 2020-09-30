function solution(name) {
	let answer = 0;
	const alphabetsLength = 26;
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	let myName = Array(name.length).fill("A");
	let totalMove = 0;
	let cursor = 0;

	const getSafeIndex = (index, array) =>
		index > 0 ? index % array.length : (index + array.length) % array.length;

	while (true) {
		const where = alphabets.findIndex((alphabet) => alphabet === name[cursor]);
		const move = Math.min(where, alphabetsLength - where);
		totalMove += move;
		myName[cursor] = name[cursor];
		if (myName.join("") === name) {
			break;
		}
		let left = 1;
		while (
			name[getSafeIndex(cursor - left, name)] === "A" ||
			name[getSafeIndex(cursor - left, name)] ===
				myName[getSafeIndex(cursor - left, name)]
		) {
			left += 1;
		}

		let right = 1;
		while (
			name[getSafeIndex(cursor + right, name)] === "A" ||
			name[getSafeIndex(cursor + right, name)] ===
				myName[getSafeIndex(cursor + right, name)]
		) {
			right += 1;
		}

		if (left < right) {
			totalMove += left;
			cursor = getSafeIndex(cursor - left, name);
		} else {
			totalMove += right;
			cursor = getSafeIndex(cursor + right, name);
		}
	}
	answer = totalMove;
	return answer;
}

const testCase = 3;
const name =
	testCase === 1
		? "JEROEN"
		: testCase === 2
		? "JAN"
		: testCase === 3
		? "BBAAB"
		: "";

const answer = solution(name);
console.log(answer);
