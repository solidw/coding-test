function solution(genres, plays) {
	let answer = [];
	const album = {};

	genres.forEach((genre, index) => {
		const data = { id: index, play: plays[index] };
		album[genre] ? album[genre].push(data) : (album[genre] = [data]);
	});

	const sortBy = (key) => {
		return (a, b) => {
			if (a[key] < b[key]) return 1;
			else return -1;
		};
	};

	Object.keys(album).forEach((genre) => {
		album[genre].sort(sortBy("play"));
	});

	Object.keys(album).forEach((genre) => {
		const totalPlay = album[genre].reduce((acc, cur) => {
			return acc + cur.play;
		}, 0);
		album[genre] = { totalPlay: totalPlay, data: album[genre] };
	});

	const genreRanking = [];
	Object.keys(album).map((genre) => {
		genreRanking.push({ genre: genre, totalPlay: album[genre].totalPlay });
	});

	genreRanking.sort(sortBy("totalPlay"));
	genreRanking.forEach((genreObj) => {
		const genre = genreObj.genre;
		answer.push(album[genre].data[0].id);
		if (album[genre].data.length > 1) {
			answer.push(album[genre].data[1].id);
		}
	});
	console.log(answer);
	return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

const answer = solution(genres, plays);
console.log(answer);
