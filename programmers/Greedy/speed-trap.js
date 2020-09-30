function solution(routes) {
	let answer = 0;
	let flag = 30001;

	routes.sort((a, b) => {
		const [aStart] = a;
		const [bStart] = b;
		return bStart - aStart;
	});

	routes.forEach((route) => {
		const [start, end] = route;
		if (flag > end) {
			flag = start;
			answer++;
		}
	});
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

const routes =
	testCase === 1
		? [
				[-20, -15],
				[-14, -5],
				[-18, -13],
				[-5, -3],
		  ]
		: [[]];

const answer = solution(routes);
console.log(answer);
