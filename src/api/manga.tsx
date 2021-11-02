import axios from 'axios';

export async function mangaList(page: number, select: string) {
	try {
		const res = await axios.get(
			`https://api.jikan.moe/v3/top/manga/${page + 1}/${select}`
		);
		return res.data.top;
	} catch (err) {
		console.log(err);
	}
}

export async function mangaListRecommendations() {
	try {
		const res = await axios.get(
			'https://api.jikan.moe/v3/manga/1/recommendations'
		);
		return res.data.recommendations.slice(0, 10);
	} catch (err) {
		console.log(err);
	}
}
