function solution(answers) {
	let answer = [];
	const firstPerson = [1, 2, 3, 4, 5];
	const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
	const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	const peoplesAnswer = [firstPerson, secondPerson, thirdPerson];
	const peoplesCorrectAnswerCount = peoplesAnswer.map(
		(personAnswer) =>
			answers.filter(
				(answer, index) => answer === personAnswer[index % personAnswer.length]
			).length
	);

	const maxScore = Math.max(...peoplesCorrectAnswerCount);

	answer = peoplesCorrectAnswerCount.reduce(
		(arr, personCorrectAnswerCount, index) => {
			if (personCorrectAnswerCount === maxScore) arr.push(index + 1);
			return arr;
		},
		[]
	);
	return answer;
}

const answers = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];
const answers3 = [1, 3, 3, 4, 5];
const answer = solution(answers3);
console.log(answer);
