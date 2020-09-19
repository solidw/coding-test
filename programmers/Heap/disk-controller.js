function solution(jobs) {
	let answer = 0;
	const jobsTable = jobs.map((job, index) => {
		const [startTime, spendTime] = job;
		return {
			id: index,
			startTime,
			spendTime,
		};
	});
	jobsTable.sort((a, b) => {
		return a.startTime - b.startTime;
	});

	let tic = 0;
	let totalSpendTime = 0;

	while (true) {
		const canDoJobs = jobsTable.filter((job) => job.startTime <= tic);

		if (canDoJobs.length !== 0) {
			canDoJobs.sort((a, b) => a.spendTime - b.spendTime);

			const [currentJob] = jobsTable.splice(
				jobsTable.findIndex((job) => job.id === canDoJobs[0].id),
				1
			);
			totalSpendTime += currentJob.spendTime + (tic - currentJob.startTime);
			tic += currentJob.spendTime;
		} else {
			tic += 1;
		}
		if (jobsTable.length === 0) {
			break;
		}
	}
	answer = Math.floor(totalSpendTime / jobs.length);
	return answer;
}

const jobs = [
	[0, 3],
	[1, 9],
	[2, 6],
];

const jobs2 = [
	[0, 3],
	[4, 3],
	[10, 3],
];

const jobs3 = [
	[0, 10],
	[2, 3],
	[9, 3],
];

const jobs4 = [
	[0, 3],
	[1, 9],
	[2, 6],
	[4, 3],
];

const answer = solution(jobs);
console.log(answer);
