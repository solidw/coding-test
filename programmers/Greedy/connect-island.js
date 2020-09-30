function solution(n, costs) {
	let answer = 0;
	costs.sort((a, b) => a[2] - b[2]);

	const findUnion = Array(n)
		.fill()
		.map((_, index) => index);

	const updateFindUnion = (findUnion, start, end) => {
		const startValue = findUnion[start];
		const endValue = findUnion[end];
		findUnion.forEach((item, index) => {
			if (item === endValue) {
				findUnion[index] = startValue;
			}
		});
	};

	let totalCost = 0;
	while (true) {
		if (findUnion.every((value, index, array) => value === array[0])) {
			break;
		}

		const foundCostDataIndex = costs.findIndex((costData) => {
			const [start, end] = costData;
			return findUnion[start] !== findUnion[end];
		});

		const foundCostData = costs[foundCostDataIndex];
		costs.splice(foundCostDataIndex, 1);

		const [start, end, cost] = foundCostData;

		updateFindUnion(findUnion, start, end);
		totalCost += cost;
	}
	answer = totalCost;
	return answer;
}

const testCase = 3;
const n = testCase === 1 ? 4 : testCase === 2 ? 5 : testCase === 3 ? 5 : -1;
const costs =
	testCase === 1
		? [
				[0, 1, 1],
				[0, 2, 2],
				[1, 2, 5],
				[1, 3, 1],
				[2, 3, 8],
		  ]
		: testCase === 2
		? [
				[1, 2, 2],
				[0, 2, 3],
				[0, 3, 4],
				[0, 4, 5],
				[2, 3, 1],
		  ]
		: testCase === 3
		? [
				[0, 1, 1],
				[0, 2, 2],
				[1, 2, 5],
				[1, 3, 3],
				[2, 3, 8],
				[3, 4, 1],
		  ]
		: [[]];

const answer = solution(n, costs);
console.log(answer);
