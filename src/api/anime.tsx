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

export async function animeId(id: string) {
	try {
		const res = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export async function animeListQuery(input: string, status: string) {
	let URL: string;
	if (status === 'airing' || status === 'upcoming') {
		URL = `https://api.jikan.moe/v3/search/anime?q=${input}&status=${status}g&order_by=title`;
	} else {
		URL = `https://api.jikan.moe/v3/search/anime?q=${input}&type=${status}&order_by=title`;
	}
	try {
		const res = await axios.get(URL);
		return res.data.results;
	} catch (err) {
		console.log(err);
	}
}
