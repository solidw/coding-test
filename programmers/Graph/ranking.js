function getAllIndexes(arr, val) {
	let indexes = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			indexes.push(i);
		}
	}
	return indexes;
}

function solution(n, results) {
	let answer = 0;
	const battle = results.reduce(
		(acc, cur) => {
			const [start, end] = cur;
			acc[start][end] = 1;
			acc[end][start] = -1;
			return acc;
		},
		Array(n + 1)
			.fill()
			.map((_, firstIndex) =>
				Array(n + 1)
					.fill()
					.map((_, secondIndex) => (secondIndex === 0 ? firstIndex : 0))
			)
	);

	battle.sort((a, b) => {
		const numberOfUndecidedA = a.filter((item) => item === 0).length;
		const numberOfUndecidedB = b.filter((item) => item === 0).length;
		return numberOfUndecidedA - numberOfUndecidedB;
	});

	const fighterTable = battle.reduce((acc, cur, index) => {
		const figther = cur[0];
		acc[figther] = index;
		return acc;
	}, {});

	for (let i = 0; i < n; i++) {
		const lostFightersByCurrentFighter = getAllIndexes(battle[i], 1);
		const wonFightersByCurrentFighter = getAllIndexes(battle[i], -1);
		lostFightersByCurrentFighter.forEach((lostFighter) => {
			wonFightersByCurrentFighter.forEach((wonFighter) => {
				const lostFighterIndex = fighterTable[lostFighter];
				const wonFighterIndex = fighterTable[wonFighter];
				battle[wonFighterIndex][lostFighter] = 1;
				battle[lostFighterIndex][wonFighter] = -1;
			});
		});
	}

	answer = battle.filter((bat) => bat.filter((b) => b === 0).length === 1)
		.length;
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let n = -1;
let results = [[]];

switch (testCase) {
	case 1:
		n = 5;
		results = [
			[4, 3],
			[4, 2],
			[3, 2],
			[1, 2],
			[2, 5],
		];
		break;
	case 2:
		break;
}

const answer = solution(n, results);
console.log(answer);
