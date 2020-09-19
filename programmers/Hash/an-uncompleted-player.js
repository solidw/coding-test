function solution(participant, completion) {
	var answer = "";
	var obj = {};
	participant.forEach((part) => (obj[part] = obj[part] ? obj[part] + 1 : 1));
	completion.forEach((comp) => obj[comp]--);

	answer = Object.keys(obj).filter((name) => obj[name] !== 0)[0];

	return answer;
}

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
const answer = solution(participant, completion);
console.log(answer);
