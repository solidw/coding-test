function solution(bridge_length, weight, truck_weights) {
	let answer = 0;
	let tic = 0;

	const finalTrucks = [];
	const trucksOnBridge = [];
	const watingTrucks = truck_weights.reduce((acc, cur, index) => {
		const truckInfo = { id: index, weight: cur, tic: 0 };
		acc.push(truckInfo);
		return acc;
	}, []);

	let truck = null;
	while (!(trucksOnBridge.length === 0 && watingTrucks.length === 0)) {
		tic += 1;
		if (trucksOnBridge.length > 0 && trucksOnBridge[0].tic === bridge_length) {
			finalTrucks.push(trucksOnBridge.shift());
		}
		const currentWeight = trucksOnBridge.reduce((acc, cur) => {
			acc += cur.weight;
			return acc;
		}, 0);

		if (watingTrucks.length > 0) {
			if (watingTrucks[0].weight + currentWeight <= weight) {
				truck = watingTrucks.shift();
				trucksOnBridge.push(truck);
			}
		}

		trucksOnBridge.forEach((truck) => {
			truck.tic += 1;
		});
	}
	answer = tic;
	return answer;
}

const bridge_length2 = 100;
const weight2 = 100;
const truck_weights2 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const answer = solution(bridge_length, weight, truck_weights);
console.log(answer);
