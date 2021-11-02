import axios from 'axios';

export async function animeList(page: number, select: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`
		);
		return res.data.top;
	} catch (err) {
		console.log(err);
	}
}

export async function animeListRecommendations() {
	try {
		const res = await axios.get(
			'https://api.jikan.moe/v3/anime/1/recommendations'
		);
		return res.data.recommendations.slice(0, 10);
	} catch (err) {
		console.log(err);
	}
}

export async function animeListUpcoming() {
	try {
		const res = await axios.get(
			'https://api.jikan.moe/v3/top/anime/1/upcoming'
		);
		return res.data.top.slice(0, 10);
	} catch (err) {
		console.log(err);
	}
}
