function solution(clothes) {
	let answer = 0;
	const clothHash = {};

	clothes.forEach((cloth) => {
		const [clothValue, clothKey] = cloth;

		if (!clothHash[clothKey]) {
			clothHash[clothKey] = [clothValue];
		} else {
			clothHash[clothKey].push(clothValue);
		}
	});
	answer = Object.keys(clothHash).reduce((result, current) => {
		result *= clothHash[current].length + 1;
		return result;
	}, 1);

	answer -= 1;
	return answer;
}

const clothes = [
	["yellow_hat", "headgear"],
	["blue_sunglasses", "eyewear"],
	["green_turban", "headgear"],
];

const answer = solution(clothes);
console.log(answer);
