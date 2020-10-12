class Graph {
	edges = {};
	constructor(n, edge) {
		Array(n)
			.fill()
			.map((_, index) => {
				this.addVertex(String(index + 1));
			});

		edge.forEach(([vertex1, vertex2]) => {
			this.addEdge(vertex1, vertex2);
		});
	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(vertex1, vertex2) {
		this.edges[vertex1][vertex2] = 1;
		this.edges[vertex2][vertex1] = 1;
	}
}

class PriorityQueue {
	store = [];

	enqueue(item) {
		this.store.push(item);
		this.store.sort((a, b) => a[1] - b[1]);
	}

	dequeue() {
		return this.store.shift();
	}

	isEmpty() {
		return this.store.length === 0;
	}
}

function solution(n, edge) {
	let answer = 0;
	const graph = new Graph(n, edge);
	const pq = new PriorityQueue();

	const distance = Array(n + 1).fill(Infinity);
	const visited = Array(n + 1).fill(false);
	pq.enqueue(["1", 0]);
	visited["1"] = true;

	let max = 0;
	while (!pq.isEmpty()) {
		let shortestData = pq.dequeue();
		let [currentVertex, currentWeight] = shortestData;
		for (vertex in graph.edges[currentVertex]) {
			if (visited[vertex]) {
				continue;
			}
			const nextWeight = currentWeight + 1;
			if (nextWeight < distance[vertex]) {
				distance[vertex] = nextWeight;
				visited[vertex] = true;
				if (max < nextWeight) {
					max = nextWeight;
				}
				pq.enqueue([vertex, nextWeight]);
			}
		}
	}

	answer = distance.filter((dist) => dist === max).length;
	console.log(distance);
	return answer;
}

const testCase = process.argv.length > 2 ? Number(process.argv[2]) : 1;

let n = -1;
let edge = [[]];

switch (testCase) {
	case 1:
		n = 6;
		edge = [
			[3, 6],
			[4, 3],
			[3, 2],
			[1, 3],
			[1, 2],
			[2, 4],
			[5, 2],
		];
		break;
	case 2:
		break;
}

const answer = solution(n, edge);
console.log(answer);
