function solution(priorities, location) {
	let answer = 0;
	const jobTable = priorities.map((priority, index) => {
		return { id: index, priority };
	});
	const resultQueue = [];
	while (true) {
		if (jobTable.length === 0) {
			break;
		}
		const currentJob = jobTable.shift();
		const isNotPrimary = jobTable.some(
			(job) => job.priority > currentJob.priority
		);
		if (isNotPrimary) {
			jobTable.push(currentJob);
		} else {
			resultQueue.push(currentJob);
		}
	}
	answer = resultQueue.findIndex((job) => job.id === location) + 1;
	return answer;
}

const priorities = [2, 1, 3, 2];
const location = 2;
// const priorities2 = [1, 1, 9, 1, 1, 1];
// const location2 = 0;

const answer = solution(priorities, location);
// const answer = solution(priorities2, location2);
console.log(answer);
