function solution(people, limit) {
	let answer = 0;
	const sortedPeople = people.sort((a, b) => b - a);

	let numberOfBoat = 0;
	let start = 0;
	let end = people.length - 1;

	console.log(sortedPeople);
	while (start <= end) {
		console.log("Start:", start, "End:", end);
		if (sortedPeople[start] + sortedPeople[end] <= limit) {
			numberOfBoat += 1;
			start += 1;
			end -= 1;
		} else {
			numberOfBoat += 1;
			start += 1;
		}
	}
	answer = numberOfBoat;
	return answer;
}

const testCase = 1;
const people =
	testCase === 1 ? [70, 50, 80, 50] : tesCase === 2 ? [70, 80, 50] : [];
const limit = testCase === 1 ? 100 : testCase === 2 ? 100 : 0;

const answer = solution(people, limit);
console.log(answer);
