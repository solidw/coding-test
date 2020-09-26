function solution(n, lost, reserve) {
	let answer = 0;

	const lostWithourMyself = lost.filter((lostStudent) => {
		let mine = reserve.findIndex(
			(reservedStudent) => reservedStudent === lostStudent
		);
		if (mine !== -1) {
			reserve.splice(mine, 1);
			return false;
		}
		return true;
	});

	const cantAttend = lostWithourMyself.filter((lostStudent, i) => {
		let canBorrow = false;

		const canBorrowStudent = reserve.findIndex(
			(reservedStudent) =>
				reservedStudent - 1 === lostStudent ||
				reservedStudent + 1 === lostStudent
		);
		if (canBorrowStudent !== -1) {
			canBorrow = true;
			reserve.splice(canBorrowStudent, 1);
		}
		return !canBorrow;
	}).length;

	answer = n - cantAttend;
	return answer;
}

const n = 5;
const lost = [1, 2];
const reserve = [2, 3];

const answer = solution(n, lost, reserve);
console.log(answer);
