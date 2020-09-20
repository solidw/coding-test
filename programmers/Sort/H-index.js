function solution(citations) {
	let answer = 0;
	citations.sort((a, b) => b - a);
	let citationCount = 1;
	while (citationCount <= citations[citationCount - 1]) {
		citationCount += 1;
	}
	answer = citationCount - 1;
	return answer;
}

const citations = [3, 0, 6, 1, 5];
const citations2 = [31, 66];
const answer = solution(citations);
console.log(answer);
