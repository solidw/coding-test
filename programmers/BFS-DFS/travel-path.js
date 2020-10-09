function solution(tickets) {
	let answer = [];

	const usedTickets = Array(tickets.length).fill(false);

	function dfs(start, answer, path) {
		if (path.length === tickets.length + 1) {
			answer.push(path);
			return;
		}

		for (let i = 0; i < tickets.length; i++) {
			if (!usedTickets[i] && tickets[i][0] === start) {
				usedTickets[i] = true;
				dfs(tickets[i][1], answer, path.concat(tickets[i][1]));
				usedTickets[i] = false;
			}
		}
	}

	const start = "ICN";
	dfs(start, answer, ["ICN"]);

	answer.sort((a, b) => {
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) return a[i].localeCompare(b[i]);
		}
	});

	return answer.shift();
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let tickets = [[]];

switch (testCase) {
	case 1:
		tickets = [
			["ICN", "JFK"],
			["HND", "IAD"],
			["JFK", "HND"],
		];
		break;
	case 2:
		tickets = [
			["ICN", "SFO"],
			["ICN", "ATL"],
			["SFO", "ATL"],
			["ATL", "ICN"],
			["ATL", "SFO"],
		];
		break;
}

const answer = solution(tickets);
console.log(answer);
